import { useEffect, useRef, useState } from "react";
import isaacPortrait from "./isaac_portrait.png";

const bars = [
  { label: "Engaging content creation", v: 95, status: "OPTIMAL" },
  { label: "Data‑driven analytics", v: 92, status: "EXCELLENT" },
  { label: "Brand visibility", v: 88, status: "STABLE" },
  { label: "ROI optimization", v: 97, status: "MAXIMUM" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setAnimate(true), { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" className="relative py-28 overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="003" label="About the studio" />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.92] tracking-[-0.04em] text-ink">
              Designs that <span className="font-serif-i">captivate.</span>
              <br />
              Systems that <span className="relative inline-block">
                convert
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 14" fill="none">
                  <path d="M3 9 Q 80 -2 150 6 T 297 5" stroke="#0000cd" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>.
            </h2>
            <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-ink/70">
              Medscale Systems is a full‑service growth partner helping healthcare providers scale
              through marketing, branding, and digital infrastructure — delivering results with unified
              lead generation, conversion, and automation.
            </p>

            {/* Bento metrics */}
            <div ref={ref} className="mt-10 grid grid-cols-6 gap-3">
              <BentoCard span="col-span-3" big="130+" k="Healthcare brands scaled" tone="dark" />
              <BentoCard span="col-span-3" big="100%" k="Healthcare focused" tone="lime" />
              <BentoCard span="col-span-2" big="25+" k="In‑house specialists" />
              <BentoCard span="col-span-2" big="12" k="Proprietary systems" />
              <BentoCard span="col-span-2" big="5+" k="Years experience" />
              <BentoCard span="col-span-3" big="$400K+" k="Revenue generated for clients" tone="dark" />
              
              {/* Founder Bento Card */}
              <div 
                className="col-span-3 lift relative rounded-2xl p-5 border bg-bone text-ink border-ink/10 flex flex-col justify-between overflow-hidden cursor-pointer"
                data-cursor="hover"
                onClick={() => {
                  window.location.hash = "#founder";
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-xl sm:text-2xl tracking-tight text-ink font-semibold">Isaac Vivian</div>
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-65 mt-0.5">Founder, MedScale Systems</div>
                  </div>
                  {/* Real Portrait Avatar */}
                  <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border border-ink/15 shadow-sm">
                    <img src={isaacPortrait} alt="Isaac Vivian Portrait" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="mt-4 text-[11px] leading-relaxed text-ink/75">
                  Isaac Vivian is the Founder of MedScale Systems, scaling aesthetic and cosmetic clinics across India with complete, high-converting patient acquisition engines.
                </p>
                <div className="mt-3 flex items-center justify-between text-[8px] font-mono tracking-[0.2em] uppercase opacity-45 border-t border-ink/5 pt-2">
                  <span>Profile</span>
                  <span>View Bio →</span>
                </div>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <MissionCard
                k="Our mission"
                text="To empower healthcare organizations with integrated, compliant, and performance‑driven solutions — combining creative services, scalable systems, and outcome‑focused execution."
              />
              <MissionCard
                k="Our vision"
                text="To be the leading global partner for healthcare organizations seeking market leadership, delivering innovation‑driven, scalable marketing‑tech solutions."
              />
            </div>
          </div>

          {/* Right: Pulse.Live dashboard */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative">
              {/* Stickers */}
              <div className="absolute -top-6 -left-6 z-10 sticker-pop">
                <div className="bg-[#ff5d3b] text-bone text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full -rotate-[8deg]" style={{ color: "#f5f1ea" }}>
                  ● LIVE NOW
                </div>
              </div>

              <div className="relative rounded-[28px] bg-ink p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,.4)]" style={{ background: "#0a0a0a" }}>
                {/* Browser chrome */}
                <div className="flex items-center justify-between px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="rounded-md bg-white/5 text-[10px] font-mono text-bone/50 px-3 py-1 text-center truncate" style={{ color: "rgba(245,241,234,.5)" }}>
                      pulse.live / dashboard
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-bone/40" style={{ color: "rgba(245,241,234,.4)" }}>v1.42</div>
                </div>

                <div className="rounded-[20px] bg-[#141414] p-6 text-bone" style={{ color: "#f5f1ea" }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#0000cd]">Patient Acquisition Engine</div>
                      <div className="mt-1.5 font-display text-2xl tracking-tight">Pulse.Live<span className="text-[#0000cd]">.</span></div>
                    </div>
                    <div className="relative h-14 w-14">
                      <div className="spin-slow absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, #0000cd, #ff5d3b, #0000cd)" }} />
                      <div className="absolute inset-[3px] rounded-full bg-[#141414] grid place-items-center text-[#0000cd]">✦</div>
                    </div>
                  </div>

                  {/* Bars */}
                  <div className="mt-8 space-y-4">
                    {bars.map((b, i) => {
                      const totalSegments = 20;
                      const activeSegments = Math.round((b.v / 100) * totalSegments);
                      return (
                        <div
                          key={b.label}
                          className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:-translate-y-0.5"
                        >
                          <div className="flex items-center justify-between text-[12px]">
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#0000cd] group-hover:animate-pulse" />
                              <span className="font-medium text-bone/80 group-hover:text-bone transition-colors duration-300">{b.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="rounded bg-[#0000cd]/10 border border-[#0000cd]/20 px-2.5 py-0.5 font-mono text-[9px] text-[#0000cd] font-semibold tracking-wider">
                                {b.status}
                              </span>
                            </div>
                          </div>
                          
                          {/* Segmented LED Indicator */}
                          <div className="mt-3 flex gap-1 h-3 w-full items-center">
                            {Array.from({ length: totalSegments }).map((_, segIdx) => {
                              const isActive = segIdx < activeSegments;
                              const delay = segIdx * 35;
                              return (
                                <div
                                  key={segIdx}
                                  className={`h-full flex-1 rounded-[1.5px] transition-all duration-500 ease-out ${
                                    isActive && animate
                                      ? "bg-[#0000cd] shadow-[0_0_6px_rgba(0, 0, 205,0.4)] group-hover:shadow-[0_0_10px_rgba(0, 0, 205,0.85)] group-hover:bg-[#4169e1]"
                                      : "bg-white/5"
                                  }`}
                                  style={{
                                    transitionDelay: isActive && animate ? `${delay}ms` : "0ms",
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mini chart bars */}
                  <div className="mt-8 rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                    <div className="flex items-center justify-between text-[11px] font-mono opacity-70">
                      <span>LEADS · 30D</span>
                      <span className="text-[#0000cd]">▲ +428%</span>
                    </div>
                    <div className="mt-4 flex items-end gap-1.5 h-20">
                      {Array.from({ length: 24 }).map((_, i) => {
                        const h = 20 + Math.abs(Math.sin(i * 0.7)) * 75 + (i > 18 ? 15 : 0);
                        return (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-[#0000cd]/80 ticker-bar"
                            style={{ height: animate ? `${h}%` : "10%", transition: "height 1s ease", transitionDelay: `${i * 30}ms`, animationDelay: `${i * 100}ms` }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2.5">
                    {[
                      { k: "Leads", v: "+238" },
                      { k: "CPL", v: "-89%" },
                      { k: "ROAS", v: "6.4x" },
                    ].map((m) => (
                      <div key={m.k} className="rounded-xl border border-white/10 p-3 text-center">
                        <div className="font-display text-xl text-[#0000cd]">{m.v}</div>
                        <div className="text-[9px] font-mono tracking-[0.2em] uppercase opacity-50">{m.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  span, big, k, tone, wide,
}: { span: string; big: string; k: string; tone?: "dark" | "lime"; wide?: boolean }) {
  const isDark = tone === "dark";
  const isLime = tone === "lime";
  return (
    <div
      className={`${span} lift relative rounded-2xl p-5 border ${
        isDark ? "bg-ink text-bone border-ink" : isLime ? "bg-[#0000cd] text-ink border-[#0000cd]" : "bg-bone text-ink border-ink/10"
      }`}
      style={isDark ? { background: "#0a0a0a", color: "#f5f1ea", borderColor: "#0a0a0a" } : {}}
    >
      <div className={`font-display ${wide ? "text-6xl sm:text-7xl" : "text-4xl"} tracking-[-0.04em]`}>{big}</div>
      <div className={`mt-2 text-[10px] font-mono uppercase tracking-[0.2em] ${isDark ? "opacity-60" : "opacity-70"}`}>{k}</div>
      {isLime && <span className="absolute top-3 right-3 text-xl">✦</span>}
    </div>
  );
}

function MissionCard({ k, text }: { k: string; text: string }) {
  return (
    <div className="rounded-2xl border border-ink/15 p-5 bg-bone-2/40 lift" style={{ background: "rgba(235,229,218,.5)" }}>
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/55">[ {k} ]</div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink/80">{text}</p>
    </div>
  );
}

export function SectionHead({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <div className={`flex items-center justify-between border-b pb-4 ${light ? "border-bone/20 text-bone" : "border-ink/15 text-ink"}`} style={light ? { borderColor: "rgba(245,241,234,.2)", color: "#f5f1ea" } : {}}>
      <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
        <span className={`grid place-items-center h-6 w-6 rounded-full text-[9px] ${light ? "bg-bone text-ink" : "bg-ink text-bone"}`} style={light ? { background: "#f5f1ea", color: "#0a0a0a" } : { background: "#0a0a0a", color: "#f5f1ea" }}>
          §
        </span>
        <span className="opacity-60">{n}</span>
        <span>/</span>
        <span>{label}</span>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">
        <span>scroll</span><span>↓</span>
      </div>
    </div>
  );
}
