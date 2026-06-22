import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import logo from "./logo.png";

// Custom typewriter hook
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let intervalId: any = null;
    const timeoutId = setTimeout(() => {
      let currentLength = 0;
      intervalId = setInterval(() => {
        currentLength++;
        setDisplayed(text.slice(0, currentLength));
        if (currentLength >= text.length) {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// Counting hook for stats
function useCount(target: number, duration = 1800, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevX = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const [services, setServices] = useState<string[]>([]);

  // Intersection Observer for counters
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const brands = useCount(130, 1800, inView);
  const revenue = useCount(400, 2000, inView);
  const growth = useCount(428, 2200, inView);
  const reduction = useCount(89, 1800, inView);

  // Typewriter hook
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 38, 600);

  // Desktop Mouse Scrubbing Hook
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSeeking = false;
    let pendingTime: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      const currentX = e.clientX;
      if (prevX.current === null) {
        prevX.current = currentX;
        return;
      }

      if (video.duration) {
        const delta = currentX - prevX.current;
        const duration = video.duration;
        let targetTime = video.currentTime + (delta / window.innerWidth) * 0.8 * duration;
        targetTime = Math.max(0, Math.min(duration, targetTime));

        if (!isSeeking) {
          isSeeking = true;
          video.currentTime = targetTime;
        } else {
          pendingTime = targetTime;
        }
      }
      prevX.current = currentX;
    };

    const handleSeeked = () => {
      isSeeking = false;
      if (pendingTime !== null) {
        const nextTime = pendingTime;
        pendingTime = null;
        isSeeking = true;
        video.currentTime = nextTime;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      prevX.current = e.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, []);

  // Mobile Autoplay Hook
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.innerWidth < 1024) {
      video.autoplay = true;
      video.play().catch((err) => {
        console.warn("Mobile autoplay video.play() failed:", err);
      });
    }
  }, []);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="top" ref={ref} className="relative w-full overflow-hidden flex flex-col lg:block pt-24">
      {/* Background Video Component (with Native Scrubbing) */}
      <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
        />
      </div>

      {/* Content Layout Container */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main
          id="spade-hero"
          className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center justify-center"
        >
          {/* Left Column: Interactive Form & Headline */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Typewriter Hook and Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
                {displayed}
                {!done && (
                  <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
                )}
              </h1>
            </motion.div>

            {/* Secondary Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
                Whether you have questions, feedback, <br /> drop us a message and
                we'll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* Interactive Multi-Select Service Pills */}
            <div>
              <h3 className="text-2xl font-medium tracking-tight mb-2">
                What sort of service?
              </h3>
              <p className="opacity-85 text-[#738273] mb-8">
                Select all that apply
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {["Brand", "Digital", "Campaign", "Other"].map((option) => {
                  const isActive = services.includes(option);
                  return (
                    <motion.button
                      key={option}
                      type="button"
                      onClick={() => toggleService(option)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium transition-all duration-200 cursor-pointer select-none ${
                        isActive
                          ? "bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5 transform"
                          : "bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0, width: 0 }}
                            animate={{ scale: 1, opacity: 1, width: "auto" }}
                            exit={{ scale: 0, opacity: 0, width: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="inline-flex mr-1 items-center justify-center text-current"
                          >
                            <Check size={16} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {option}
                    </motion.button>
                  );
                })}
              </div>

              {/* Contingent Feedback Status Banner */}
              <AnimatePresence mode="wait">
                {services.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="italic text-xs font-normal text-neutral-600/70"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-4 sm:p-5 flex flex-row justify-between items-center gap-4 mt-2">
                      <span className="text-sm text-neutral-800 font-medium">
                        Ready to inquire about:{" "}
                        <span className="font-semibold text-neutral-900">
                          {services.join(", ")}
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          const contactEl = document.getElementById("contact");
                          if (contactEl) {
                            contactEl.scrollIntoView({ behavior: "smooth" });
                            const msgInput = document.querySelector(
                              'textarea[name="message"]'
                            ) as HTMLTextAreaElement;
                            if (msgInput) {
                              msgInput.value = `Hi Medscale, I would like to inquire about your services: ${services.join(
                                ", "
                              )}.`;
                              msgInput.dispatchEvent(
                                new Event("input", { bubbles: true })
                              );
                            }
                          }
                        }}
                        className="text-[#4D6D47] uppercase text-xs font-semibold tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1.5 cursor-pointer bg-transparent border-none"
                      >
                        Let's Go <span className="text-sm">→</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Present Hero Details to Retain */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 flex flex-col justify-center relative lg:pl-12">
            {/* Floating sticker */}
            <div className="hidden lg:block absolute right-0 -top-24 sticker-pop z-20">
              <div className="relative">
                <div className="spin-slower absolute inset-0">
                  <svg viewBox="0 0 200 200" className="h-28 w-28">
                    <defs>
                      <path
                        id="circle"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="text-[14px] font-mono uppercase tracking-[0.2em] fill-[#0a0a0a]">
                      <textPath href="#circle">
                        ★ Healthcare's #1 Growth Partner · Since 2020 ·{" "}
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="h-28 w-28 rounded-full grid place-items-center">
                  <img
                    src={logo}
                    className="h-[48px] w-auto object-contain"
                    style={{
                      transform: "rotate(8deg) translate(5.8%, -4.6%)",
                    }}
                    alt="Medscale Systems Logo"
                  />
                </div>
              </div>
            </div>

            {/* Original headline */}
            <h2 className="font-display font-medium leading-[0.95] tracking-[-0.04em] text-neutral-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
              Healthcare growth, <br className="hidden sm:inline" />
              <span className="font-serif-i text-neutral-800">re</span>
              <span className="font-serif-i italic">engineered.</span>
            </h2>

            {/* Manifesto */}
            <div className="mb-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500 mb-2">
                [ Manifesto / 01 ]
              </div>
              <p className="text-[16px] sm:text-[18px] leading-relaxed text-neutral-700 max-w-md font-sans">
                We're the only marketing studio{" "}
                <span className="font-serif-i">exclusively</span> focused on
                healthcare — building HIPAA‑compliant systems that scale clinics
                from invisible to inevitable.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <Metric n={`${brands}+`} k="Brands scaled" />
              <Metric n={`$${revenue}K+`} k="Revenue generated" />
              <Metric n={`${growth}%`} k="Avg lead growth" />
              <Metric n={`-${reduction}%`} k="Cost per lead" />
            </div>

            {/* Reviews Section */}
            <div className="mt-8 border-t border-neutral-200/60 pt-6 flex items-start gap-4">
              <div className="flex -space-x-2">
                {["SJ", "MC", "AR", "+"].map((i, k) => (
                  <span
                    key={k}
                    className={`grid place-items-center h-8 w-8 rounded-full text-[9px] font-semibold border-2 border-white ${
                      k === 3
                        ? "bg-[#1C2E1E] text-white"
                        : "bg-[#1C2E1E]/10 text-[#1C2E1E]"
                    }`}
                  >
                    {i}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-neutral-900">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[11px]">
                      {s}
                    </span>
                  ))}
                  <span className="ml-2 text-[11px] font-mono tabular-nums">
                    4.98 / 5
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  Across 130+ verified healthcare clients
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#1C2E1E] text-white pl-5 pr-2 py-2 text-[12px] font-medium overflow-hidden"
              >
                <span className="relative z-10">Start a project</span>
                <span className="relative z-10 grid place-items-center h-8 w-8 rounded-full bg-white text-[#1C2E1E] transition-transform group-hover:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <a
                href="#showcase"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 text-[12px] font-medium hover:bg-neutral-100 transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#1C2E1E]" />
                View case studies
              </a>
            </div>
          </div>
        </main>

        {/* Bottom marquee strip */}
        <div className="relative mt-16 border-y border-neutral-200 bg-neutral-50/50 overflow-hidden">
          <div className="marquee-track inline-flex whitespace-nowrap py-5">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="inline-flex items-center gap-10 pr-10">
                {[
                  "Performance Marketing",
                  "Brand Systems",
                  "HIPAA‑Compliant Funnels",
                  "Patient Acquisition",
                  "ABM & Lifecycle",
                  "Conversion Optimization",
                  "Web & Microsites",
                  "SEO + Local",
                ].map((t, i) => (
                  <span
                    key={`${j}-${i}`}
                    className="inline-flex items-center gap-6"
                  >
                    <span className="font-display text-[28px] sm:text-[36px] tracking-tight text-neutral-800">
                      {t}
                    </span>
                    <span className="text-[#1C2E1E] text-2xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ n, k }: { n: string; k: string }) {
  return (
    <div>
      <div className="font-display text-4xl sm:text-5xl tracking-[-0.04em] text-neutral-900">
        {n}
      </div>
      <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2">
        <span className="h-px w-4 bg-neutral-300" /> {k}
      </div>
    </div>
  );
}
