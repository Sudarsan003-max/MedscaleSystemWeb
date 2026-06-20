import { useState } from "react";
import isaacPortrait from "./isaac_portrait.png";
import isaacBeach from "./isaac_beach.jpg";
import isaacMeeting from "./isaac_meeting.png";
import isaacMinister from "./isaac_minister.jpg";

export default function Founder() {
  const [activeTab, setActiveTab] = useState("overview");

  const results = [
    "Engineered high-converting search and social ad campaigns, consistently driving 50+ qualified patient acquisitions monthly for premier cosmetic clinics.",
    "Designed and deployed custom WhatsApp API integrations and CRM automation, accelerating patient response times to under 5 minutes.",
    "Architected comprehensive patient-lifecycle tracking systems, mapping key treatment conversions and optimizing clinic sales pipeline velocity.",
    "Efficiently directed and optimized over ₹5 Lakhs in monthly digital media budgets across search, social, and professional networks.",
    "Developed targeted outbound marketing strategies, maintaining a consistent 30%+ email open rate and 8%+ engagement rate.",
    "Audited and optimized clinic front-desk operations, elevating patient booking conversion rates by 40% through targeted sales training.",
    "Delivered strategic growth consulting and operational audits for 10+ leading aesthetic practices nationwide, increasing clinic profitability."
  ];

  // Likes interactive state for the 3 LinkedIn posts
  const [likes, setLikes] = useState({ post1: 8, post2: 5, post3: 10 });
  const [liked, setLiked] = useState({ post1: false, post2: false, post3: false });

  const handleLike = (postKey: "post1" | "post2" | "post3") => {
    setLiked((prev) => {
      const isLiked = !prev[postKey];
      setLikes((lPrev) => ({
        ...lPrev,
        [postKey]: isLiked ? lPrev[postKey] + 1 : lPrev[postKey] - 1
      }));
      return { ...prev, [postKey]: isLiked };
    });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 text-ink">
      {/* Back button */}
      <a
        href="#top"
        className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] opacity-60 hover:opacity-100 hover:text-[#ff5d3b] transition duration-300 mb-8"
      >
        ← Back to Studio Home
      </a>

      {/* 1. Header: Immersive Editorial Split Card (Different, Unique & Larger Portrait) */}
      <div className="rounded-[32px] border border-ink/10 bg-[#ebe5da]/20 overflow-hidden shadow-sm relative flex flex-col md:flex-row" style={{ background: "rgba(235,229,218,.35)" }}>
        {/* Left Side: Dark Portrait block with grid overlay */}
        <div className="w-full md:w-72 bg-[#0a0a0a] relative flex items-center justify-center p-8 shrink-0 overflow-hidden">
          {/* Subtle grid and ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-coral/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime/5 rounded-full blur-2xl pointer-events-none" />
          
          {/* Unique, High-End Squircle Portrait (192px) with Glass offset & Tech Crop Brackets */}
          <div className="relative group">
            {/* Animated glow backplate */}
            <div className="absolute inset-0 rounded-[40px_16px_40px_16px] bg-gradient-to-br from-coral/15 to-lime/20 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
            
            {/* Outer offset glass frame */}
            <div className="absolute -inset-1.5 rounded-[42px_18px_42px_18px] border border-white/10 bg-white/[0.02] backdrop-blur-sm pointer-events-none" />
            
            {/* Main image container with custom squircle shape */}
            <div className="h-48 w-48 rounded-[40px_16px_40px_16px] overflow-hidden border border-white/20 bg-[#141414] shadow-2xl relative transition-all duration-700 hover:scale-[1.03]">
              <img src={isaacPortrait} alt="Isaac Vivian Portrait" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Technical crop corner brackets */}
            <span className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#0000cd]/60 rounded-tl-sm pointer-events-none group-hover:scale-110 transition duration-300" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#0000cd]/60 rounded-tr-sm pointer-events-none group-hover:scale-110 transition duration-300" />
            <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#0000cd]/60 rounded-bl-sm pointer-events-none group-hover:scale-110 transition duration-300" />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#0000cd]/60 rounded-br-sm pointer-events-none group-hover:scale-110 transition duration-300" />
          </div>
        </div>

        {/* Right Side: Profile Details */}
        <div className="flex-1 p-8 flex flex-col justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink/40 block mb-2">[ Executive Leadership ]</span>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-ink flex items-center gap-2">
              Isaac Vivian
              <span className="text-[#a3d60c] inline-flex items-center" title="Verified Professional">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
            </h1>
            
            <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink/80 max-w-2xl font-display flex flex-wrap items-center gap-x-1">
              Founder <a href="https://www.instagram.com/medscalesystems/" target="_blank" rel="noopener noreferrer" className="text-[#ff5d3b] hover:text-[#ff5d3b]/80 transition duration-300 font-bold underline-draw">@medscalesystems</a> – The no 1 growth partner for healthcare | Healthcare Performance Marketing & Lead Acquisition
            </p>

            {/* Minimal, Professional Monospace Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Systems Automation",
                "50+ Patient Leads / Mo",
                "3.5x Average ROI"
              ].map((label, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-ink/10 bg-ink/[0.02] text-ink/65">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Footer details aligned bottom */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-5 border-t border-ink/5 mt-auto">
            {/* Location & Connections */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono text-ink/55">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current opacity-60" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Chennai, Tamil Nadu, India
              </span>
            </div>

            {/* LinkedIn CTA with Shimmer & Scale Lift */}
            <div className="shrink-0">
              <a
                href="https://www.linkedin.com/in/isaac-vivian/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-ink text-bone px-6 py-3.5 text-[12.5px] font-bold hover:bg-lime hover:text-ink transition-all duration-300 hover:shadow-lg hover:shadow-lime/10 hover:scale-[1.02] group relative overflow-hidden"
                style={{ background: "#0a0a0a" }}
              >
                {/* Shimmer overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <svg className="w-4.5 h-4.5 fill-current transition-transform duration-500 group-hover:rotate-[15deg]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Navigation Tabs */}
      <div className="mt-12 border-b border-ink/10 flex gap-2 md:gap-6 overflow-x-auto pb-px">
        {[
          { id: "overview", label: "Overview & Story", count: null },
          { id: "experience", label: "Timeline & Milestones", count: results.length }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-4 px-2 md:px-4 font-display text-[14px] font-extrabold tracking-tight transition-all duration-300 focus:outline-none whitespace-nowrap ${
              activeTab === tab.id
                ? "text-coral"
                : "text-ink/50 hover:text-ink/80"
            }`}
          >
            <span className="flex items-center gap-1.5">
              {tab.label}
              {tab.count !== null && (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${activeTab === tab.id ? "bg-coral/10 text-coral" : "bg-ink/5 text-ink/40"}`}>
                  {tab.count}
                </span>
              )}
            </span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* 3. Tab Content Modules with Fade-in Effect */}
      <div className="mt-8 transition-opacity duration-300">
        
        {/* A. OVERVIEW & STORY TAB */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Story Paragraphs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl border border-ink/10 bg-[#ebe5da]/20 p-6 sm:p-8 shadow-sm" style={{ background: "rgba(235,229,218,.3)" }}>
                <h3 className="font-display text-xl font-bold text-ink mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-coral rounded-full" />
                  Founder Story & Philosophy
                </h3>
                <div className="text-[14.5px] leading-relaxed text-ink/85 space-y-6 font-sans">
                  <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-coral first-letter:leading-none">
                    Isaac Vivian is the Founder of MedScale Systems, a specialized growth advisory and technology partner for aesthetic and cosmetic healthcare clinics. Under his leadership, MedScale Systems builds comprehensive patient acquisition infrastructures that integrate performance marketing, CRM automation, and front-desk sales processes to deliver scalable, predictable revenue growth.
                  </p>
                  <p>
                    With an entrepreneurial career shaped by a deep focus on conversion design, digital systems, and consumer psychology, Isaac recognized early that lead volume is irrelevant without robust operational follow-through. His business philosophy centers on execution endurance, building scalable systems that allow healthcare practices to convert marketing spend into measurable clinical bookings.
                  </p>
                  <p>
                    Beyond digital patient acquisition, Isaac is actively engaged in researching the convergence of artificial intelligence, automated clinical workflows, and advanced healthcare infrastructure—areas influenced by his ongoing mentorship with industry leaders, including Mr. Lakshmi Narayanan (Emeritus Vice Chairman of Cognizant).
                  </p>
                </div>
              </div>

              {/* Core Belief Callout Card */}
              <div className="rounded-3xl border border-coral/25 bg-gradient-to-br from-paper to-coral/5 p-8 relative overflow-hidden shadow-sm group hover:border-coral/40 transition duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full blur-2xl pointer-events-none" />
                <span className="font-serif text-[130px] text-coral/10 absolute -top-12 -left-2 select-none pointer-events-none">“</span>
                <blockquote className="font-serif-i text-[20px] leading-relaxed text-ink/90 pt-8 relative z-10">
                  Business is less about intelligence and more about endurance. Most people never stay in the game long enough to discover what they’re truly capable of.
                </blockquote>
                <cite className="block mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-coral font-bold">— Isaac Vivian, Founder</cite>
              </div>
            </div>

            {/* Right Side Bento: About systems & details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-ink/10 bg-[#ebe5da]/20 p-6 sm:p-8" style={{ background: "rgba(235,229,218,.3)" }}>
                <h3 className="font-display text-lg font-bold text-ink border-b border-ink/5 pb-3">The Systems View</h3>
                <div className="mt-4 text-[13.5px] leading-relaxed text-ink/80 space-y-4 font-sans">
                  <p>
                    Many premium aesthetic clinics deploy significant marketing budgets yet struggle to maintain high booking rates.
                    <strong> The bottleneck is rarely the clinical expertise; it is the acquisition infrastructure.</strong>
                  </p>
                  <p>
                    MedScale Systems resolves this by deploying end-to-end patient acquisition engines designed to streamline every phase of the patient lifecycle:
                  </p>
                  
                  {/* Clean Monospace Step Cards */}
                  <div className="space-y-3 mt-4">
                    {[
                      { num: "01", title: "Google & Meta Acquisition", desc: "Deploying high-intent campaigns to capture prospective patients." },
                      { num: "02", title: "CRM & Follow-up Automation", desc: "Instant response workflows via WhatsApp API to secure bookings." },
                      { num: "03", title: "Front-Desk Sales Alignment", desc: "Auditing script conversion pathways to minimize pipeline leakage." },
                      { num: "04", title: "Real-Time ROI Dashboards", desc: "Complete transparency over customer acquisition costs and patient value." }
                    ].map((item, index) => (
                      <div key={index} className="rounded-xl border border-ink/5 bg-paper/30 p-4 hover:border-ink/15 transition-all duration-300 group">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-[10px] text-coral font-bold bg-coral/5 px-2 py-0.5 rounded">{item.num}</span>
                          <h4 className="font-display font-bold text-[13.5px] text-ink group-hover:text-coral transition duration-200">{item.title}</h4>
                        </div>
                        <p className="mt-2 text-[12px] leading-relaxed text-ink/70">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Clean Metrics Grid instead of emoji badges */}
                  <div className="border-t border-ink/5 pt-5 mt-5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-50 block mb-3">Results Delivered</span>
                    <div className="grid grid-cols-3 gap-2 border border-ink/10 bg-paper/40 rounded-2xl p-4 divide-x divide-ink/10">
                      <div className="text-center">
                        <span className="block font-display text-xl sm:text-2xl font-extrabold text-coral">50+</span>
                        <span className="block text-[8px] font-mono uppercase tracking-wider text-ink/60 mt-1">Leads / Mo</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-display text-xl sm:text-2xl font-extrabold text-coral">&lt; 5m</span>
                        <span className="block text-[8px] font-mono uppercase tracking-wider text-ink/60 mt-1">Response</span>
                      </div>
                      <div className="text-center px-1 flex flex-col justify-center items-center">
                        <span className="block font-display text-[12px] sm:text-[13px] font-extrabold text-ink leading-none">Scalable</span>
                        <span className="block text-[8px] font-mono uppercase tracking-wider text-ink/60 mt-1">Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* B. TIMELINE & MILESTONES TAB */}
        {activeTab === "experience" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Timeline (Experience & Education) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-display text-xl font-bold text-ink mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-coral rounded-full" />
                Professional Journey & Academic Background
              </h3>

              <div className="relative border-l-2 border-ink/10 pl-6 ml-4 space-y-10">
                {/* Node 1: Medscale Systems */}
                <div className="relative">
                  {/* Glowing vertical node dot */}
                  <span className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-paper bg-[#0a0a0a] shadow-sm z-10" />
                  <div className="rounded-2xl border border-ink/10 bg-[#ebe5da]/15 p-6 hover:bg-[#ebe5da]/25 transition duration-300 group">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="font-display font-extrabold text-[17px] text-ink group-hover:text-coral transition duration-300">Founder</h4>
                        <p className="text-[13px] text-coral font-bold mt-0.5">Medscale Systems · Full-time</p>
                      </div>
                      <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[9px] text-ink/60 font-semibold">May 2023 – Present</span>
                    </div>
                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-ink/75">
                      Building patient acquisition systems specifically for aesthetic and cosmetic clinics across India. Integrating performance marketing campaigns with deep custom CRM setups and front-desk conversions.
                    </p>
                  </div>
                </div>

                {/* Node 2: MBA Golden Gate University */}
                <div className="relative">
                  <span className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-paper bg-lime shadow-sm z-10 pulse-dot" />
                  <div className="rounded-2xl border border-ink/10 bg-[#ebe5da]/15 p-6 hover:bg-[#ebe5da]/25 transition duration-300 group">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="font-display font-extrabold text-[17px] text-ink group-hover:text-coral transition duration-300">MBA – Business Analytics & Finance</h4>
                        <p className="text-[13px] text-ink/70 font-semibold mt-0.5">Golden Gate University</p>
                      </div>
                      <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[9px] text-ink/60 font-semibold">Mar 2025 – Jun 2026</span>
                    </div>
                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-ink/75">
                      Comprehensive business intelligence focus, combining financial modeling, corporate valuation, and analytical decision structures to solve market scaling challenges.
                    </p>
                  </div>
                </div>

                {/* Node 3: BBA LLB (Hons.) */}
                <div className="relative">
                  <span className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-paper bg-ink/40 shadow-sm z-10" />
                  <div className="rounded-2xl border border-ink/10 bg-[#ebe5da]/15 p-6 hover:bg-[#ebe5da]/25 transition duration-300 group">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="font-display font-extrabold text-[17px] text-ink group-hover:text-coral transition duration-300">BBA LLB (Hons.)</h4>
                        <p className="text-[13.5px] text-ink/70 font-semibold mt-0.5">School of Excellence in Law – Dr. Ambedkar Law University</p>
                      </div>
                      <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[9px] text-ink/60 font-semibold">Apr 2017 – May 2022</span>
                    </div>
                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-ink/75">
                      Acquired strong foundation in commercial negotiations, corporate regulations, compliance structures, and legal frameworks vital for building robust enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Milestone Grid */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-display text-xl font-bold text-ink mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-lime rounded-full" />
                Key Project Milestones
              </h3>

              <div className="grid sm:grid-cols-1 gap-4">
                {results.map((r, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-ink/5 bg-paper p-5 transition-all duration-300 hover:border-lime hover:shadow-[0_0_15px_rgba(0, 0, 205,0.15)] group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-ink/30 font-bold uppercase tracking-wider">Milestone {idx + 1}</span>
                      <span className="w-5.5 h-5.5 rounded-full bg-lime/10 text-[#a3d60c] font-black text-[11px] grid place-items-center group-hover:bg-lime group-hover:text-ink transition duration-300">✓</span>
                    </div>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink/80 font-medium font-sans">
                      {r}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
