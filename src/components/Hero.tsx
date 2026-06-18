import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

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
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const brands = useCount(130, 1800, inView);
  const revenue = useCount(400, 2000, inView);
  const growth = useCount(428, 2200, inView);
  const reduction = useCount(89, 1800, inView);

  return (
    <section id="top" ref={ref} className="relative pt-36 pb-12 overflow-hidden">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute -top-20 -right-40 h-[560px] w-[560px] blob bg-[#1b3bf5] opacity-90 -z-0" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/30 blur-[80px] -z-0" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        {/* Top meta strip */}
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-ink/60 mb-10">
          <div className="flex items-center gap-3">
            <span>[ EST · 2020 ]</span>
            <span className="hidden sm:inline opacity-50">/</span>
            <span className="hidden sm:inline">A Healthcare Growth Studio</span>
          </div>
          <div className="flex items-center gap-2">
            <span>v.26.1</span>
          </div>
        </div>

        {/* Headline */}
        <div className="relative">
          <h1 className="font-display font-medium leading-[0.86] tracking-[-0.05em] text-ink">
            <span className="block text-[64px] sm:text-[110px] lg:text-[180px]">
              Healthcare
            </span>
            <span className="block text-[64px] sm:text-[110px] lg:text-[180px] -mt-2 lg:-mt-6 pl-0 lg:pl-32">
              growth, <span className="font-serif-i text-[#0a0a0a]/90">re</span>
              <span className="font-serif-i italic">engineered.</span>
            </span>
          </h1>

          {/* Floating sticker */}
          <div className="hidden lg:block absolute right-4 top-8 sticker-pop">
            <div className="relative">
              <div className="spin-slower absolute inset-0">
                <svg viewBox="0 0 200 200" className="h-32 w-32">
                  <defs>
                    <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text className="text-[14px] font-mono uppercase tracking-[0.2em] fill-[#0a0a0a]">
                    <textPath href="#circle">★ Healthcare's #1 Growth Partner · Since 2020 · </textPath>
                  </text>
                </svg>
              </div>
              <div className="h-32 w-32 rounded-full grid place-items-center">
                <Logo className="h-9 w-9" color="#ffffff" />
              </div>
            </div>
          </div>
        </div>

        {/* Sub row */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-4">
              [ Manifesto / 01 ]
            </div>
            <p className="text-[18px] sm:text-[20px] leading-[1.5] text-ink/85 max-w-md">
              We're the only marketing studio <span className="font-serif-i">exclusively</span> focused on healthcare —
              building HIPAA‑compliant systems that scale clinics from invisible to inevitable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="group relative inline-flex items-center gap-3 rounded-full bg-[#0a0a0a] text-bone pl-6 pr-2 py-2.5 text-[13px] font-medium overflow-hidden" style={{ color: "#f5f1ea" }}>
                <span className="relative z-10">Start a project</span>
                <span className="relative z-10 grid place-items-center h-9 w-9 rounded-full bg-[#1b3bf5] text-[#0a0a0a] transition-transform group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-[13px] font-medium hover:bg-ink hover:text-bone transition">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a] group-hover:bg-[#1b3bf5]" />
                View case studies
              </a>
            </div>
          </div>

          {/* Right info column */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <Metric n={`${brands}+`} k="Brands scaled" />
              <Metric n={`$${revenue}K+`} k="Revenue generated" />
              <Metric n={`${growth}%`} k="Avg lead growth" />
              <Metric n={`-${reduction}%`} k="Cost per lead" />
            </div>

            <div className="mt-10 border-t border-ink/10 pt-6 flex items-start gap-4">
              <div className="flex -space-x-2">
                {["SJ", "MC", "AR", "+"].map((i, k) => (
                  <span key={k} className={`grid place-items-center h-9 w-9 rounded-full text-[10px] font-semibold border-2 border-bone ${k === 3 ? "bg-[#1b3bf5] text-[#0a0a0a]" : "bg-[#0a0a0a] text-[#f5f1ea]"}`} style={k === 3 ? {} : { color: "#f5f1ea" }}>
                    {i}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0a0a0a]">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-[12px]">{s}</span>)}
                  <span className="ml-2 text-[12px] font-mono tabular-nums">4.98 / 5</span>
                </div>
                <div className="text-[12px] text-ink/60 mt-0.5">Across 130+ verified healthcare clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-16 border-y border-ink/15 bg-bone overflow-hidden">
        <div className="marquee-track inline-flex whitespace-nowrap py-5">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="inline-flex items-center gap-10 pr-10">
              {["Performance Marketing", "Brand Systems", "HIPAA‑Compliant Funnels", "Patient Acquisition", "ABM & Lifecycle", "Conversion Optimization", "Web & Microsites", "SEO + Local"].map((t, i) => (
                <span key={`${j}-${i}`} className="inline-flex items-center gap-6">
                  <span className="font-display text-[28px] sm:text-[36px] tracking-tight text-ink">{t}</span>
                  <span className="text-[#1b3bf5] text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ n, k }: { n: string; k: string }) {
  return (
    <div>
      <div className="font-display text-5xl sm:text-6xl tracking-[-0.04em] text-ink">{n}</div>
      <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-ink/60 flex items-center gap-2">
        <span className="h-px w-5 bg-ink/40" /> {k}
      </div>
    </div>
  );
}
