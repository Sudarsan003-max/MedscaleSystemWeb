import { useState, useEffect } from "react";

const pillars = [
  { 
    n: "01", 
    title: "Amplify", 
    t: "your brand", 
    text: "Build authority and visibility across channels patients actually use to find care.",
    metric: "Leads: +428%",
    label: "Reach Extension",
    badge: "Omnichannel Acquisition",
    chart: [30, 45, 60, 55, 75, 90, 85, 110, 130]
  },
  { 
    n: "02", 
    title: "Engage", 
    t: "your audience", 
    text: "Conversations and content that turn passive interest into booked appointments.",
    metric: "Conversions: 4.8x",
    label: "Audience Activity",
    badge: "HIPAA-Safe Capture",
    chart: [20, 25, 40, 35, 55, 60, 50, 78, 95]
  },
  { 
    n: "03", 
    title: "Educate", 
    t: "& empower", 
    text: "Trust‑building, compliance‑aware content that informs patients and earns referrals.",
    metric: "Referrals: +160%",
    label: "Trust Score",
    badge: "Medical Integrity",
    chart: [40, 50, 45, 65, 70, 85, 95, 105, 120]
  },
  { 
    n: "04", 
    title: "Deliver", 
    t: "tangible ROI", 
    text: "Performance measured in patients, revenue and lifetime value — not vanity metrics.",
    metric: "ROI Yield: 12.4x",
    label: "Net Performance",
    badge: "Revenue Validation",
    chart: [15, 30, 45, 50, 68, 75, 92, 115, 142]
  },
];

export default function Approach() {
  const [scene, setScene] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-play loop sequence through the 4 pillars/stages
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const activePillar = pillars[scene];

  return (
    <section className="relative py-28 bg-[#030712] overflow-hidden" id="opportunity">
      {/* Ambient background spotlight scene */}
      <div className="absolute inset-0 bg-[#030712] z-0" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1b3bf5]/10 blur-[130px] pointer-events-none z-0" />
      
      {/* Looping dynamic glowing elements */}
      <div className="absolute top-[25%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#1b3bf5]/6 blur-[100px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[15%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#1b3bf5]/5 blur-[90px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '15s' }} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 flex flex-col items-center">
        
        {/* Title and Intro layout matching original style but styled for dark backdrop */}
        <div className="w-full max-w-[1000px] mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#f5f1ea]/60">
            <span className="grid place-items-center h-5 w-5 rounded-full text-[9px] font-semibold bg-white text-[#0a0a0a]">
              5
            </span>
            <span>005 / The opportunity</span>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[38px] sm:text-[54px] lg:text-[72px] leading-[0.95] tracking-[-0.04em] text-[#f5f1ea] text-left">
                An industry <span className="font-serif-i italic">rapidly</span>
                <br />
                going <span className="relative inline-block">
                  digital
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M3 7 Q 50 -1 100 5 T 197 4" stroke="#1b3bf5" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>.
              </h2>
            </div>
            <p className="lg:col-span-5 text-[14px] leading-relaxed text-[#f5f1ea]/70 text-left max-w-md lg:ml-auto">
              Healthcare is rapidly digitizing, with rising expectations for seamless, retail‑like experiences.
              Patients prefer online‑first care — success now depends on trust, data‑driven execution,
              and full‑funnel ROI delivery.
            </p>
          </div>
        </div>

        {/* MacBook Container */}
        <div className="relative w-full max-w-[1020px] mt-6 flex flex-col items-center group @container">
          
          {/* Lid (MacBook Screen) */}
          <div className="relative w-[88%] aspect-[16/10] bg-gradient-to-b from-[#2e313d] via-[#101115] to-[#07080a] rounded-t-[2.2cqi] p-[1.2cqi] shadow-[0_30px_75px_-10px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(255,255,255,0.05)] border border-[#1b1c22] border-t-[#494e5e] border-b-[#0b0c0f] flex flex-col z-10">
            {/* Webcam & Sensors */}
            <div className="absolute top-[0.4%] left-1/2 -translate-x-1/2 flex items-center gap-[0.5cqi] pointer-events-none">
              {/* Green indicator LED (off-state faint dot) */}
              <div className="w-[0.12cqi] h-[0.12cqi] rounded-full bg-green-500/10" />
              {/* Main Camera Lens */}
              <div className="w-[0.7cqi] h-[0.7cqi] rounded-full bg-[#030304] border border-white/5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] relative">
                <div className="w-[0.25cqi] h-[0.25cqi] rounded-full bg-gradient-to-tr from-[#003c4f] to-[#01ffe1]/30 opacity-70" />
                <div className="absolute w-[0.1cqi] h-[0.1cqi] rounded-full bg-white/50 top-[20%] left-[20%]" />
              </div>
              {/* Ambient light sensor */}
              <div className="w-[0.12cqi] h-[0.12cqi] rounded-full bg-[#07090d]" />
            </div>

            {/* Screen Content Viewport */}
            <div className="relative flex-1 bg-[#050814] rounded-[0.4cqi] overflow-hidden border border-black shadow-[inset_0_4px_12px_rgba(0,0,0,0.85)] flex flex-col p-[4cqi] text-[#f5f1ea] select-none @container">
              {/* Seamless environment continuance inside the screen */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1b3bf5]/15 via-[#050814] to-[#050814] -z-10 transition-all duration-1000" />
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] -z-10" />

              {/* Dynamic Product Showcase UI */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Navbar mock inside the screen */}
                <div className="flex items-center justify-between border-b border-white/10 pb-[1.5cqi] text-[max(8px,1cqi)] font-mono uppercase tracking-[0.2cqi] text-[#f5f1ea]/50">
                  <div className="flex items-center gap-[1.5cqi]">
                    <span className="font-semibold text-white tracking-wider flex items-center gap-[0.5cqi]">
                      <span className="inline-block w-[1cqi] h-[1cqi] rounded-full bg-[#1b3bf5] animate-ping" />
                      MedscaleOS
                    </span>
                    <span className="opacity-45">/</span>
                    <span className="text-[#1b3bf5]">Platform Demo</span>
                  </div>
                  <div className="flex items-center gap-[2cqi]">
                    {pillars.map((p, idx) => (
                      <button 
                        key={p.n}
                        onClick={() => { setScene(idx); setIsAutoplay(false); }}
                        className={`transition hover:text-white cursor-pointer ${idx === scene ? "text-[#1b3bf5] font-semibold" : ""}`}
                      >
                        {p.n}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dashboard layout inside the screen */}
                <div className="grid grid-cols-12 gap-[3cqi] items-stretch my-auto py-[1cqi]">
                  
                  {/* Left Column: Metric Visualizer Card */}
                  <div className="col-span-5 bg-white/[0.03] border border-white/[0.08] rounded-[1cqi] p-[2.5cqi] flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 w-[10cqi] h-[10cqi] bg-[#1b3bf5]/15 rounded-full blur-[20px] pointer-events-none" />
                    
                    <div className="space-y-[0.8cqi]">
                      <span className="inline-block text-[max(6px,0.85cqi)] font-mono font-bold text-[#1b3bf5] uppercase tracking-wider bg-[#1b3bf5]/10 px-[1.2cqi] py-[0.4cqi] rounded-full">
                        {activePillar.badge}
                      </span>
                      <h4 className="text-[max(14px,2.5cqi)] font-display font-medium text-white tracking-tight leading-none">
                        {activePillar.title}<span className="text-[#1b3bf5]">.</span>
                      </h4>
                      <p className="text-[max(9px,1.2cqi)] text-[#f5f1ea]/60 leading-relaxed font-serif-i italic">
                        {activePillar.t}
                      </p>
                    </div>

                    {/* Chart / Analytics visualization */}
                    <div className="h-[9cqi] w-full mt-[1.5cqi] flex items-end justify-between gap-[0.5cqi]">
                      {activePillar.chart.map((val, idx) => {
                        const heightPct = val + "%";
                        return (
                          <div 
                            key={idx} 
                            className="flex-1 bg-gradient-to-t from-[#1b3bf5] to-[#1b3bf5]/40 rounded-[0.2cqi] transition-all duration-700 ease-out origin-bottom shadow-[0_0_8px_rgba(27,59,245,0.2)]" 
                            style={{ 
                              height: heightPct, 
                              transitionDelay: `${idx * 50}ms` 
                            }} 
                          />
                        );
                      })}
                    </div>

                    <div className="mt-[2cqi] border-t border-white/5 pt-[1.5cqi] flex items-center justify-between text-[max(8px,1.1cqi)]">
                      <span className="text-[#f5f1ea]/50 font-mono text-[max(7px,0.9cqi)]">{activePillar.label}</span>
                      <span className="font-display font-bold text-white tracking-tight">{activePillar.metric}</span>
                    </div>
                  </div>

                  {/* Right Column: Narrative workflow & impact */}
                  <div className="col-span-7 flex flex-col justify-between pl-[1cqi] py-[1cqi]">
                    
                    <div className="space-y-[1.8cqi]">
                      <div className="text-[max(8px,1cqi)] font-mono text-white/40 tracking-widest uppercase">
                        [ SYSTEM STEP / {activePillar.n} ]
                      </div>
                      <p className="text-[max(11px,1.75cqi)] leading-relaxed text-[#f5f1ea]/85">
                        {activePillar.text}
                      </p>
                    </div>

                    {/* Stepper timeline tracking */}
                    <div className="mt-[3cqi] border-t border-white/10 pt-[2cqi] flex justify-between items-center">
                      <div className="flex gap-[0.8cqi]">
                        {pillars.map((_, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => { setScene(idx); setIsAutoplay(false); }}
                            className={`h-[0.5cqi] rounded-full transition-all duration-500 cursor-pointer ${
                              idx === scene ? "w-[4cqi] bg-[#1b3bf5]" : "w-[1.2cqi] bg-white/25 hover:bg-white/45"
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-[max(7px,0.9cqi)] font-mono text-[#f5f1ea]/40 flex items-center gap-[0.6cqi]">
                        <span>ACQUISITION SPEEDWAY</span>
                        <span className="inline-block w-[0.8cqi] h-[0.8cqi] rounded-full bg-[#1b3bf5] pulse-dot" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer status mock inside the screen */}
                <div className="flex items-center justify-between border-t border-white/10 pt-[1.5cqi] text-[max(6px,0.85cqi)] font-mono text-white/30 tracking-widest uppercase">
                  <span>SECURE PATIENT PORTAL</span>
                  <span>HIPAA ENCRYPTED SECURITY SHA-256</span>
                </div>

              </div>

            </div>

            {/* Screen glass reflection overlay with realistic diagonal glare */}
            <div className="absolute inset-[1.2cqi] rounded-[0.4cqi] pointer-events-none z-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.10]" />
              <div 
                className="absolute -inset-[50%] rotate-[25deg]" 
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 100%)',
                  transform: 'translateY(-20%) translateX(15%) rotate(-35deg)'
                }} 
              />
            </div>
          </div>

          {/* Hinge with 3D inset shadow */}
          <div className="w-[88%] h-[1cqi] bg-gradient-to-b from-[#050608] via-[#101114] to-[#1a1b22] border-b border-black/80 relative z-20 shadow-[inset_0_4px_6px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.5)]" />

          {/* Base with 3D chamfered edge */}
          <div className="relative w-full h-[2.2cqi] bg-gradient-to-b from-[#2d313d] via-[#14151a] to-[#08080a] rounded-b-[1.4cqi] border-t border-[#3b3f4f] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.9),0_10px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] z-20 flex justify-center">
            {/* Top highlight light catcher on the base */}
            <div className="absolute top-0 left-0 right-0 h-[0.15cqi] bg-gradient-to-r from-transparent via-white/25 to-transparent z-30" />
            
            {/* Opening notch */}
            <div className="w-[16%] h-[40%] bg-gradient-to-b from-[#050506] to-[#0e0f12] rounded-b-[0.6cqi] border-t border-black/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Surface Glossy Reflection (matching dashboard vibe) */}
          <div className="w-[108%] h-[160px] bg-gradient-to-t from-transparent via-[#1b3bf5]/12 to-transparent absolute bottom-[-150px] blur-lg pointer-events-none -z-10 opacity-80" />
        </div>

      </div>
    </section>
  );
}
