import { useState } from "react";
import { SectionHead } from "./About";
import logo from "./logo.png";

type TabType = "DAILY" | "WEEKLY" | "MONTHLY" | "ALL";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabType>("MONTHLY");

  // Real data mapped to Medscale Systems website metrics
  const dailyLeads = [1, 3, 2, 4, 6, 8, 5, 9, 7, 10, 8, 12];
  const weeklyLeads = [10, 15, 12, 22, 28, 35, 30, 42, 48, 55, 52, 60];
  const monthlyLeads = [45, 62, 78, 95, 112, 135, 154, 172, 198, 215, 230, 238];
  const allLeads = [130, 250, 420, 680, 950, 1200, 1450, 1800, 2100, 2350, 2600, 2850];

  const getLeads = (): number[] => {
    switch (activeTab) {
      case "DAILY": return dailyLeads;
      case "WEEKLY": return weeklyLeads;
      case "MONTHLY": return monthlyLeads;
      case "ALL": return allLeads;
    }
  };

  // Convert lead values to percentage heights for the bar chart
  const getHeights = (): number[] => {
    const leads = getLeads();
    const maxVal = Math.max(...leads);
    return leads.map((val) => (val / maxVal) * 90 + 10); // Scale between 10% and 100% height
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
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">Revenue Generated</div>
              <div className="text-[9px] font-mono text-bone/30 mt-0.5">Verified Client Growth</div>
              <div className="mt-5 text-4xl font-display font-medium tracking-tight text-white">$400K+</div>
            </div>

            {/* Glowing Chart Peak Tooltip */}
            <div className="absolute right-8 top-[165px] bg-[#1b3bf5] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg animate-bounce z-10">
              ▲ $400K+
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

          {/* Center: 3D iPhone Mockup */}
          <div className="relative w-[310px] h-[620px] shrink-0 z-10 hover:scale-[1.02] transition-transform duration-500 select-none">
            {/* Volume & Power Buttons (3D Protrusions) */}
            <div className="absolute top-[100px] -left-[3px] w-[3px] h-[28px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" />
            <div className="absolute top-[145px] -left-[3px] w-[3px] h-[52px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" />
            <div className="absolute top-[210px] -left-[3px] w-[3px] h-[52px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" />
            <div className="absolute top-[170px] -right-[3px] w-[3px] h-[78px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-r-md shadow-lg" />

            {/* Outer Titanium Chassis (3D Frame) */}
            <div className="w-full h-full rounded-[52px] p-[3px] bg-gradient-to-b from-[#8f939d] via-[#3d4045] to-[#121315] shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),_inset_0_-1px_2px_rgba(0,0,0,0.6),_0_20px_50px_rgba(0,0,0,0.8),_0_0_40px_rgba(27,59,245,0.15)] flex items-center justify-center">
              
              {/* Inner bezel & screen container */}
              <div className="w-full h-full rounded-[49px] p-[8px] bg-[#000000] flex items-center justify-center relative">
                
                {/* Speaker Ear Piece Grill */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#222] rounded-full z-30" />

                {/* Main Screen */}
                <div 
                  className="w-full h-full rounded-[41px] overflow-hidden relative flex flex-col justify-between p-6 select-none bg-[#050505]"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 35%, rgba(27,59,245,0.16) 0%, transparent 60%),
                      radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 40px, transparent 40px, transparent 80px)
                    `,
                    backgroundSize: "100% 100%, 20px 20px, 80px 100%"
                  }}
                >
                  {/* Status Bar (Absolute at top, clears dynamic island horizontally) */}
                  <div className="absolute top-0 inset-x-0 h-10 px-8 pt-3.5 flex items-center justify-between text-[10px] font-semibold text-white/95 z-40 select-none">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 fill-current opacity-90" viewBox="0 0 24 24">
                        <path d="M12 3c-1.2 0-2.4.4-3.4 1.2L2.3 9.7c-.5.4-.5 1.1 0 1.5.5.4 1.2.4 1.7 0L12 5.5l8 6.2c.5.4 1.2.4 1.7 0 .5-.4.5-1.1 0-1.5L15.4 4.2C14.4 3.4 13.2 3 12 3z"/>
                      </svg>
                      <div className="w-5 h-2.5 border border-white/60 rounded-xs p-[1px] flex items-center">
                        <div className="h-full w-4/5 bg-white rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island (Floating centered) */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6.5 bg-[#000000] rounded-full z-50 flex items-center justify-between px-3.5 border border-white/5 shadow-inner">
                    <div className="w-2.5 h-2.5 bg-[#0a0a0a] rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#152347] rounded-full opacity-60" />
                    </div>
                    <div className="w-4 h-1 bg-[#090909] rounded-full" />
                  </div>

                  {/* Glass Reflection overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] z-30" />

                  {/* Diagonal glowing lines */}
                  <div className="absolute top-[22%] left-[5%] w-[120px] h-[1px] bg-gradient-to-r from-[#1b3bf5]/60 to-transparent rotate-[32deg] transform-origin-left pointer-events-none" />
                  <div className="absolute bottom-[26%] right-[5%] w-[120px] h-[1px] bg-gradient-to-r from-transparent to-[#1b3bf5]/60 rotate-[32deg] transform-origin-right pointer-events-none" />

                  {/* Phone Header (Pushed down to clear status bar and Dynamic Island) */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3.5 pt-6 mt-4 z-10">
                    <div className="flex items-center gap-1.5">
                      <img src={logo} className="h-4 w-auto object-contain" alt="Medscale Logo" />
                      <span className="text-[11px] font-display font-medium tracking-tight text-white/95">Medscale</span>
                    </div>
                    {/* Burger Menu icon */}
                    <div className="w-4.5 h-4.5 flex flex-col justify-center gap-1 cursor-pointer">
                      <span className="w-3.5 h-0.5 bg-white/70 self-end" />
                      <span className="w-4.5 h-0.5 bg-white/70 self-end" />
                    </div>
                  </div>

                  {/* Phone Center Text */}
                  <div className="my-auto text-center space-y-4 z-10">
                    <h4 className="text-[19px] font-display font-semibold leading-[1.2] tracking-tight text-white/95">
                      Revolutionizing digital marketing for healthcare
                    </h4>
                    <p className="text-[10.5px] text-white/65 leading-relaxed max-w-[200px] mx-auto">
                      We help medical practices and clinics scale with HIPAA‑compliant, conversion‑optimized campaigns.
                    </p>
                  </div>

                  {/* Phone Bottom Footer */}
                  <div className="space-y-3.5 z-10">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#1b3bf5]/45 to-transparent" />
                    <div className="text-[8.5px] font-mono uppercase tracking-[0.25em] text-center text-white/35">
                      130+ Brands · $400K+ Generated
                    </div>
                    {/* Screen Bottom Bar Indicator */}
                    <div className="w-28 h-1 bg-white/60 mx-auto rounded-full mt-1.5" />
                  </div>

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
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">Acquisition Velocity</div>
                  <div className="text-[9px] font-mono text-bone/30 mt-0.5">Leads Generated</div>
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
              {getHeights().map((heightPct, i) => {
                const rawValue = getLeads()[i];
                return (
                  <div
                    key={`${activeTab}-${i}`}
                    className="flex-1 bg-[#1b3bf5]/20 hover:bg-[#1b3bf5] transition-all duration-500 rounded-t-sm relative group cursor-pointer"
                    style={{ height: `${heightPct}%` }}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-ink border border-white/10 text-[8px] font-mono text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                      {rawValue} Leads
                    </div>
                  </div>
                );
              })}
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
