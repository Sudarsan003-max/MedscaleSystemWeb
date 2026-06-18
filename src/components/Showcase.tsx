import { useEffect, useState } from "react";
import { SectionHead } from "./About";
import logo from "./logo.png";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<"DAILY" | "WEEKLY" | "MONTHLY" | "ALL">("MONTHLY");

  const monthlyBarHeights = [40, 25, 35, 50, 45, 60, 55, 70, 85, 95, 80, 100];
  const weeklyBarHeights = [70, 80, 50, 95, 60, 45, 100, 85, 40, 55, 30, 75];
  const dailyBarHeights = [30, 45, 65, 80, 50, 90, 75, 60, 95, 100, 40, 85];
  const allBarHeights = [60, 65, 70, 75, 80, 85, 90, 95, 98, 100, 95, 100];

  const getHeights = () => {
    switch (activeTab) {
      case "DAILY": return dailyBarHeights;
      case "WEEKLY": return weeklyBarHeights;
      case "MONTHLY": return monthlyBarHeights;
      case "ALL": return allBarHeights;
    }
  };

  return (
    <section className="relative py-28 bg-[#020202] text-bone overflow-hidden" style={{ background: "#050505", color: "#f5f1ea" }}>
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b3bf5]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-[#4f6ef7]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="007" label="System Showcase" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-white">
              Visualizing your <span className="font-serif-i italic text-[#1b3bf5]">patient</span>
              <br />
              acquisition pipeline.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-bone/60 max-w-md lg:ml-auto">
            A secure, HIPAA‑compliant dashboard system engineered to track lead velocity, patient lifetime value, and marketing ROI in real‑time.
          </p>
        </div>

        {/* Widescreen Behance-style Layout */}
        <div className="mt-20 relative flex items-center justify-center gap-6 py-10 overflow-x-auto lg:overflow-visible scrollbar-hide max-w-full">
          
          {/* Card 1: Leftmost Abstract Vertical Bars */}
          <div className="hidden xl:flex w-44 h-[380px] bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden items-end justify-between p-6 opacity-35 hover:opacity-70 transition-opacity duration-500 shrink-0">
            <div className="w-3 bg-gradient-to-t from-[#1b3bf5] to-transparent rounded-full" style={{ height: "60%" }} />
            <div className="w-3 bg-gradient-to-t from-[#4f6ef7] to-transparent rounded-full" style={{ height: "80%" }} />
            <div className="w-3 bg-gradient-to-t from-[#1b3bf5] to-transparent rounded-full" style={{ height: "40%" }} />
            <div className="w-3 bg-gradient-to-t from-[#4f6ef7] to-transparent rounded-full" style={{ height: "90%" }} />
            <div className="w-3 bg-gradient-to-t from-[#1b3bf5] to-transparent rounded-full" style={{ height: "70%" }} />
          </div>

          {/* Card 2: Total Patient Value Chart */}
          <div className="relative w-80 h-[380px] bg-[#0d0d0d]/80 border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-white/20 transition-colors duration-500 shrink-0 flex flex-col justify-between">
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#1b3bf5]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">Total Patient Revenue</div>
              <div className="text-[9px] font-mono text-bone/30 mt-0.5">Cumulative Studio ROI</div>
              <div className="mt-5 text-4xl font-display font-medium tracking-tight text-white">$25.14M</div>
            </div>

            {/* Glowing Chart Peak Tooltip */}
            <div className="absolute right-8 top-[165px] bg-[#1b3bf5] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg animate-bounce z-10">
              ▲ $25.14M
            </div>

            <div className="relative h-44 w-full mt-4 overflow-hidden rounded-xl bg-black/20">
              <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1b3bf5" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#1b3bf5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area Gradient */}
                <path d="M 0 170 Q 50 160 100 130 T 200 90 T 300 40 L 300 200 L 0 200 Z" fill="url(#chartGlow)" />
                {/* Stroke Line */}
                <path d="M 0 170 Q 50 160 100 130 T 200 90 T 300 40" fill="none" stroke="#1b3bf5" strokeWidth="3.5" strokeLinecap="round" />
                {/* Point pulse */}
                <circle cx="300" cy="40" r="5" fill="#4f6ef7" className="animate-ping" />
                <circle cx="300" cy="40" r="4.5" fill="#1b3bf5" />
              </svg>
            </div>
          </div>

          {/* Center: iPhone Mockup */}
          <div className="w-[300px] h-[600px] rounded-[52px] border-[11px] border-[#1a1a1a] bg-[#000000] relative overflow-hidden shadow-[0_30px_70px_-15px_rgba(27,59,245,0.35)] shrink-0 z-10 hover:scale-[1.02] transition-transform duration-500">
            {/* Notch / Dynamic Island */}
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6.5 bg-[#1a1a1a] rounded-full z-30 flex items-center justify-between px-3">
              <div className="w-2 h-2 bg-[#080808] rounded-full" />
              <div className="w-3.5 h-1 bg-[#080808] rounded-full" />
            </div>

            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 h-11 px-7 pt-3 flex items-center justify-between text-[11px] font-semibold text-white/90 z-20 select-none">
              <span>09:41</span>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-1.2 0-2.4.4-3.4 1.2L2.3 9.7c-.5.4-.5 1.1 0 1.5.5.4 1.2.4 1.7 0L12 5.5l8 6.2c.5.4 1.2.4 1.7 0 .5-.4.5-1.1 0-1.5L15.4 4.2C14.4 3.4 13.2 3 12 3z"/></svg>
                <div className="w-5.5 h-3 border border-white/60 rounded p-0.5 flex items-center"><div className="h-full w-4/5 bg-white rounded-xs" /></div>
              </div>
            </div>

            {/* Phone Screen Content */}
            <div className="absolute inset-0 pt-14 px-6 flex flex-col justify-between pb-10 bg-gradient-to-b from-[#080808] via-[#030303] to-[#0a0a0a] text-white">
              {/* Internal subtle ambient glow */}
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-[#1b3bf5]/15 rounded-full blur-[70px] pointer-events-none" />

              {/* Phone Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <img src={logo} className="h-4.5 w-auto object-contain" alt="Medscale Logo" />
                  <span className="text-xs font-display font-medium tracking-tight text-white/90">Medscale</span>
                </div>
                {/* Burger Menu icon */}
                <div className="w-5 h-5 flex flex-col justify-center gap-1 cursor-pointer">
                  <span className="w-3.5 h-0.5 bg-white/70 self-end" />
                  <span className="w-4.5 h-0.5 bg-white/70 self-end" />
                </div>
              </div>

              {/* Phone Center Text */}
              <div className="my-auto text-center space-y-4">
                <h4 className="text-[26px] font-display font-semibold leading-[1.1] tracking-tight text-white">
                  Creating a trusted,<br />compliant growth future
                </h4>
                <p className="text-[12.5px] text-white/65 leading-relaxed max-w-[210px] mx-auto">
                  Build HIPAA‑compliant, automated, and high‑conversion patient acquisition systems.
                </p>
              </div>

              {/* Phone Bottom Footer */}
              <div className="space-y-4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#1b3bf5]/40 to-transparent" />
                <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-center text-white/30">
                  medscalesystems.com
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Acquisition Volume Bar Chart */}
          <div className="relative w-80 h-[380px] bg-[#0d0d0d]/80 border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-white/20 transition-colors duration-500 shrink-0 flex flex-col justify-between">
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-[#4f6ef7]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">Acquisition Volume</div>
                  <div className="text-[9px] font-mono text-bone/30 mt-0.5">Leads Flow Velocity</div>
                </div>
                {/* Mini trend icon */}
                <div className="h-6 w-6 bg-[#1b3bf5]/15 border border-[#1b3bf5]/20 rounded-md grid place-items-center">
                  <svg className="w-3 h-3 text-[#1b3bf5] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="mt-5 flex gap-3 border-b border-white/5 pb-2 text-[9px] font-mono font-medium tracking-wide">
                {(["DAILY", "WEEKLY", "MONTHLY", "ALL"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`transition-colors cursor-pointer ${activeTab === tab ? "text-white font-bold" : "text-bone/30 hover:text-bone/60"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Column Bars */}
            <div className="relative h-40 w-full mt-4 flex items-end justify-between gap-1.5 p-2 bg-black/20 rounded-xl overflow-hidden">
              {getHeights().map((h, i) => (
                <div
                  key={`${activeTab}-${i}`}
                  className="flex-1 bg-[#1b3bf5]/20 hover:bg-[#1b3bf5] transition-all duration-500 rounded-t-sm relative group cursor-pointer"
                  style={{ height: `${h}%` }}
                >
                  {/* Tooltip on hover */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-ink border border-white/10 text-[8px] font-mono text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                    +{h * 3}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Rightmost Abstract Horizontal Blocks */}
          <div className="hidden xl:flex w-44 h-[380px] bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden flex-col justify-between p-6 opacity-35 hover:opacity-70 transition-opacity duration-500 shrink-0">
            <div className="h-5 w-full bg-gradient-to-r from-transparent to-[#1b3bf5]/60 rounded-full" />
            <div className="h-5 w-4/5 bg-gradient-to-r from-transparent to-[#4f6ef7]/60 rounded-full self-end" />
            <div className="h-5 w-5/6 bg-gradient-to-r from-transparent to-[#1b3bf5]/60 rounded-full" />
            <div className="h-5 w-full bg-gradient-to-r from-transparent to-[#4f6ef7]/60 rounded-full" />
            <div className="h-5 w-3/4 bg-gradient-to-r from-transparent to-[#1b3bf5]/60 rounded-full self-end" />
            <div className="h-5 w-11/12 bg-gradient-to-r from-transparent to-[#4f6ef7]/60 rounded-full" />
          </div>

        </div>

        <div className="mt-16 text-center text-[11px] font-mono uppercase tracking-[0.25em] text-bone/40">
          ✦ Real‑Time compliance monitoring & HIPAA‑compliant patient funnels ✦
        </div>
      </div>
    </section>
  );
}
