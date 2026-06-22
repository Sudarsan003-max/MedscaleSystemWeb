import { useEffect, useRef } from "react";

/**
 * ScrubVideo — smooth, mouse-driven "scrub through a 3D render" background.
 *
 * Why this exists:
 *   The source clip is a 4K (3840×2160) H.264 file encoded as a SINGLE GOP
 *   (1 keyframe for all 97 frames). Scrubbing a <video> by setting
 *   `currentTime` forces the browser to decode every frame from the lone
 *   keyframe up to the target — i.e. seeking near the end decodes ~96 full
 *   4K frames *per mouse move*. That is the lag.
 *
 * The fix:
 *   Decode the clip exactly once (a quick muted play-through) into an array of
 *   downscaled ImageBitmaps, then "scrub" by blitting the nearest cached frame
 *   to a <canvas>. Each mouse move becomes an O(1) GPU blit instead of an O(N)
 *   decode, so it stays smooth regardless of the source's keyframe layout.
 *   Movement is eased toward the target time for extra fluidity.
 *
 * Graceful fallbacks:
 *   - No requestVideoFrameCallback  → seek-based scrubbing on the <video>.
 *   - Touch / < lg viewport         → plain muted autoplay loop.
 *   - prefers-reduced-motion        → a single static frame, no interaction.
 */

type ScrubVideoProps = {
  src: string;
  /** Extra classes for the fallback <video> (e.g. object-position). */
  videoClassName?: string;
  /** Cover-crop focus, 0 = left/top … 1 = right/bottom. Default right-bottom. */
  focusX?: number;
  focusY?: number;
  /** Duration fraction scrubbed per full-viewport-width of mouse travel. */
  sensitivity?: number;
};

// Longest stored frame edge (px). Tunable: higher = crisper, more memory.
// ~97 frames at 1024×576×4B ≈ 230 MB peak; plenty for a background layer.
const MAX_FRAME_DIM = 1024;
// Scrub follow smoothing per frame (higher = snappier, lower = floatier).
const EASE = 0.2;
// Speed up the one-time decode pass. 24fps × 2 = 48fps < 60Hz, so every
// source frame is still presented (and captured) on a standard display.
const EXTRACT_RATE = 2;

type Frame = { time: number; bmp: ImageBitmap };

// Minimal typing for the rVFC API (not in older lib.dom).
type RVFCVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: (now: number, meta: { mediaTime: number }) => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

export default function ScrubVideo({
  src,
  videoClassName = "",
  focusX = 1,
  focusY = 1,
  sensitivity = 0.8,
}: ScrubVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current as RVFCVideo | null;
    if (!canvas || !video) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const isDesktop = window.innerWidth >= 1024;
    const hasRVFC = typeof video.requestVideoFrameCallback === "function";

    let cancelled = false;
    const cleanups: Array<() => void> = [];
    const frames: Frame[] = [];

    let duration = 0;
    let targetTime = 0;
    let displayTime = 0;
    let lastIndex = -1;
    let prevX: number | null = null;
    let rafId = 0;

    // ---- canvas sizing (cap DPR so 4K-ish backing stores stay cheap) ----
    const sizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        lastIndex = -1; // force a redraw at the new size
      }
    };

    // Draw any source as object-cover with the configured focus point.
    const drawCover = (source: CanvasImageSource, sw: number, sh: number) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / sw, ch / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      const dx = (cw - dw) * focusX;
      const dy = (ch - dh) * focusY;
      ctx.drawImage(source, dx, dy, dw, dh);
    };

    const nearestIndex = (t: number) => {
      let lo = 0;
      let hi = frames.length - 1;
      if (hi < 0) return -1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (frames[mid].time < t) lo = mid + 1;
        else hi = mid;
      }
      if (lo > 0 && Math.abs(frames[lo - 1].time - t) <= Math.abs(frames[lo].time - t)) return lo - 1;
      return lo;
    };

    const renderAt = (t: number) => {
      const idx = nearestIndex(t);
      if (idx < 0 || idx === lastIndex) return;
      lastIndex = idx;
      drawCover(frames[idx].bmp, frames[idx].bmp.width, frames[idx].bmp.height);
    };

    // Eased scrub loop — runs only while catching up to the target, then sleeps.
    const tick = () => {
      const diff = targetTime - displayTime;
      if (Math.abs(diff) < 0.0008) {
        displayTime = targetTime;
        renderAt(displayTime);
        rafId = 0;
        return;
      }
      displayTime += diff * EASE;
      renderAt(displayTime);
      rafId = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!duration) return;
      const x = e.clientX;
      if (prevX !== null) {
        targetTime += ((x - prevX) / window.innerWidth) * sensitivity * duration;
        targetTime = Math.max(0, Math.min(targetTime, duration));
        kick();
      }
      prevX = x;
    };

    // ----- Mode A: canvas frame-cache scrubbing (desktop, rVFC) -----
    const enterScrubMode = () => {
      sizeCanvas();
      lastIndex = -1;
      renderAt(displayTime);
      window.addEventListener("mousemove", onMouseMove);
      cleanups.push(() => window.removeEventListener("mousemove", onMouseMove));

      const ro = new ResizeObserver(() => {
        sizeCanvas();
        renderAt(displayTime);
      });
      ro.observe(canvas);
      cleanups.push(() => ro.disconnect());
    };

    const extractFrames = () => {
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return startSeekFallback();

      duration = video.duration || 0;
      let tw = vw;
      let th = vh;
      const longest = Math.max(vw, vh);
      if (longest > MAX_FRAME_DIM) {
        const s = MAX_FRAME_DIM / longest;
        tw = Math.round(vw * s);
        th = Math.round(vh * s);
      }

      sizeCanvas();
      const pending: Array<Promise<void>> = [];
      let lastT = -Infinity;
      const minGap = duration && vh ? 0.5 / EXTRACT_RATE / 60 : 0.001; // dedupe same frame

      const onFrame = (_now: number, meta: { mediaTime: number }) => {
        if (cancelled) return;
        const t = meta?.mediaTime ?? video.currentTime;
        // Live preview straight from the (still 4K) video while we decode.
        drawCover(video, vw, vh);
        if (t - lastT > minGap || frames.length === 0) {
          lastT = t;
          // Fresh canvas per frame so the async copy can't race the next draw.
          const c = document.createElement("canvas");
          c.width = tw;
          c.height = th;
          c.getContext("2d")?.drawImage(video, 0, 0, tw, th);
          pending.push(
            createImageBitmap(c)
              .then((bmp) => {
                if (cancelled) bmp.close();
                else frames.push({ time: t, bmp });
              })
              .catch(() => {})
          );
        }
        if (!video.ended && !cancelled) {
          video.requestVideoFrameCallback!(onFrame);
        }
      };

      const onEnded = async () => {
        video.pause();
        await Promise.allSettled(pending);
        if (cancelled) return;
        frames.sort((a, b) => a.time - b.time);
        // Decoder + 4K element no longer needed — release it.
        video.removeAttribute("src");
        video.load();
        video.style.display = "none";
        if (frames.length >= 2) enterScrubMode();
        else startSeekFallback();
      };
      video.addEventListener("ended", onEnded, { once: true });

      video.requestVideoFrameCallback!(onFrame);
      video.playbackRate = EXTRACT_RATE;
      video.play().catch(() => startSeekFallback());
    };

    // ----- Mode B: seek-based scrubbing on the <video> (no rVFC) -----
    const startSeekFallback = () => {
      canvas.style.display = "none";
      video.style.display = "";
      video.style.opacity = "1";
      duration = video.duration || 0;

      let isSeeking = false;
      let want: number | null = null;
      let px: number | null = null;

      const onMove = (e: MouseEvent) => {
        if (!video.duration) return;
        const x = e.clientX;
        if (px !== null) {
          let nt = (want ?? video.currentTime) + ((x - px) / window.innerWidth) * sensitivity * video.duration;
          nt = Math.max(0, Math.min(nt, video.duration));
          want = nt;
          if (!isSeeking) {
            isSeeking = true;
            video.currentTime = nt;
          }
        }
        px = x;
      };
      const onSeeked = () => {
        if (want !== null && Math.abs(video.currentTime - want) > 0.05) {
          video.currentTime = want;
        } else {
          isSeeking = false;
          want = null;
        }
      };
      window.addEventListener("mousemove", onMove);
      video.addEventListener("seeked", onSeeked);
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
      cleanups.push(() => video.removeEventListener("seeked", onSeeked));
    };

    // ----- Mode C: mobile autoplay loop (no scrubbing) -----
    const startAutoplay = () => {
      canvas.style.display = "none";
      video.style.display = "";
      video.style.opacity = "1";
      video.loop = true;
      video.muted = true;
      video.play().catch(() => {});
    };

    // ----- Mode D: reduced motion — one static frame -----
    const startStatic = () => {
      canvas.style.display = "none";
      video.style.display = "";
      video.style.opacity = "1";
      const onMeta = () => {
        video.currentTime = Math.min(0.04, (video.duration || 1) / 2);
      };
      video.addEventListener("loadedmetadata", onMeta, { once: true });
    };

    // ---- boot ----
    video.crossOrigin = "anonymous"; // ACAO:* on the CDN → canvas stays untainted
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    if (reduced) {
      startStatic();
      video.src = src;
      video.load();
    } else if (!isDesktop) {
      startAutoplay();
      video.src = src;
      video.load();
    } else if (hasRVFC) {
      const onLoaded = () => extractFrames();
      video.addEventListener("loadeddata", onLoaded, { once: true });
      cleanups.push(() => video.removeEventListener("loadeddata", onLoaded));
      video.src = src;
      video.load();
    } else {
      const onLoaded = () => startSeekFallback();
      video.addEventListener("loadedmetadata", onLoaded, { once: true });
      cleanups.push(() => video.removeEventListener("loadedmetadata", onLoaded));
      video.src = src;
      video.load();
    }

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
      frames.forEach((f) => f.bmp.close());
      frames.length = 0;
    };
  }, [src, focusX, focusY, sensitivity]);

  return (
    <>
      {/* Decode/fallback surface — sits behind the canvas, hidden once frames are cached. */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover ${videoClassName}`}
      />
      {/* Scrub surface — cached frames are blitted here. */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </>
  );
}
