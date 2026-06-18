import { useState } from "react";
import { SectionHead } from "./About";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  onClick: () => void;
}

export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);

  const channels = [
    {
      num: "01",
      title: "Google Search Ads",
      desc: "Capture high-intent searches like 'hair loss treatment Chennai' or 'skin clinic near me'. Puts your practice at the top from day one.",
      badge: "HIGH INTENT",
      metric: "Day 1 Leads",
    },
    {
      num: "02",
      title: "Instagram & Meta Ads",
      desc: "Showcase before-and-after cases, treatment videos, and patient stories. Target by hyper-local radius, interests, and age.",
      badge: "VISUAL DRIVE",
      metric: "High ROI",
    },
    {
      num: "03",
      title: "Google Business Profile",
      desc: "Optimize local SEO to rank in Google Maps Top 3. The absolute highest-ROI tool driving free calls and driving directions.",
      badge: "LOCAL POWER",
      metric: "Free Calls",
    },
    {
      num: "04",
      title: "SEO & Blog Content",
      desc: "Answering patient questions (e.g. 'what is PRP therapy?') builds organic trust and ranks you as the local authority long-term.",
      badge: "TRUST BUILDER",
      metric: "Authority",
    },
  ];

  return (
    <section id="blog" className="relative py-28 bg-ink overflow-hidden border-b border-white/5" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Glow Blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#1b3bf5]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="009" label="Insights & Guides" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Featured Post Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1b3bf5] mb-4">[ Featured Article ]</div>
            
            <div className="group relative rounded-[28px] bg-white/[0.02] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1b3bf5]/10 border border-[#1b3bf5]/20 px-3 py-1 text-[10px] font-mono text-[#1b3bf5] uppercase tracking-[0.1em]">
                Patient Acquisition · 2026
              </span>
              
              <h3 className="mt-6 font-display text-3xl sm:text-4xl leading-[1.15] tracking-tight text-bone">
                How Aesthetic Clinics in India Are Getting <span className="font-serif-i text-[#1b3bf5]">3x More Patients</span> Using Digital Marketing
              </h3>
              
              <p className="mt-4 text-[14.5px] leading-relaxed text-bone/70">
                Picture this: two clinics in the same city, offering the same treatments. One is fully booked three weeks in advance; the other struggles to fill slots. The difference is online visibility.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1b3bf5] text-ink pl-4 pr-1.5 py-1.5 text-[12px] font-semibold hover:bg-bone transition group/btn"
                >
                  Read Full Guide
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-ink text-[#1b3bf5] transition-transform group-hover/btn:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Scraped Insights Bento Cards */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1b3bf5] mb-4">[ The 4 Growth Channels ]</div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((ch) => (
                <div
                  key={ch.num}
                  className="group relative rounded-2xl bg-white/[0.01] border border-white/5 p-6 hover:border-white/15 hover:bg-white/[0.03] transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-bone/30 group-hover:text-[#1b3bf5] transition duration-300">{ch.num}</span>
                    <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-bone/60 uppercase tracking-[0.1em]">
                      {ch.badge}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-xl font-medium text-bone group-hover:text-[#1b3bf5] transition duration-300">
                    {ch.title}
                  </h4>

                  <p className="mt-2 text-[13px] leading-relaxed text-bone/60">
                    {ch.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-[11px] font-mono border-t border-white/5 pt-4">
                    <span className="opacity-40">Impact</span>
                    <span className="text-[#1b3bf5]">{ch.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary Banner */}
            <div className="mt-6 rounded-2xl border border-[#1b3bf5]/15 bg-[#1b3bf5]/[0.02] p-5">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1b3bf5]">[ Digital Engine Verdict ]</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-bone/80">
                Aesthetic clinics that dominate their local Indian market in 2026 treat digital marketing as a core business system. Combining high-intent search ads with visual social proof creates a compounding patient acquisition loop that runs 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Reader Overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-ink/80 backdrop-blur-md transition-all duration-300">
          <div className="h-full w-full max-w-[720px] bg-[#0c0c0c] border-l border-white/10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-[20px_0_80px_rgba(0,0,0,0.8)]">
            <div>
              {/* Header inside modal */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1b3bf5]">Medscale Insights</span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="group grid place-items-center h-10 w-10 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
                  aria-label="Close modal"
                >
                  <span className="font-mono text-xs text-bone group-hover:rotate-90 transition-transform duration-300">✕</span>
                </button>
              </div>

              {/* Scrollable Content */}
              <article className="mt-8 space-y-6 text-bone/80 text-[15.5px] leading-relaxed font-sans">
                <span className="inline-block bg-[#1b3bf5]/10 px-2 py-0.5 rounded font-mono text-[10px] text-[#1b3bf5] uppercase tracking-[0.1em]">
                  Comprehensive Guide
                </span>
                
                <h2 className="font-display text-3xl sm:text-5xl leading-tight text-bone tracking-tight mt-3">
                  How Aesthetic Clinics in India Get <span className="font-serif-i text-[#1b3bf5]">3x Patients</span>
                </h2>

                <p className="mt-4">
                  Picture this: two aesthetic clinics in the same city, offering the same treatments at similar prices. One is fully booked three weeks in advance. The other is struggling to fill appointment slots.
                </p>

                <p>
                  What is the difference? The first clinic shows up on Google when patients search for treatments. The second one does not.
                </p>

                <div className="border-l-2 border-[#1b3bf5] pl-4 py-1 my-6 italic text-bone/95">
                  "In 2026, digital marketing is no longer optional for aesthetic clinics in India. It is the single biggest lever for growing your patient base."
                </div>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  Why Digital Marketing Is Non-Negotiable
                </h3>
                <p>
                  If your clinic is not visible online, you are invisible to 80% of your potential patients. Your competitor — who IS visible — is getting those bookings instead.
                </p>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  The 4 Channels That Work Best
                </h3>
                
                <div className="space-y-4 mt-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">1. Google Search Ads</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      When someone types "hair loss treatment Chennai" or "laser skin treatment near me" into Google, they are ready to book. Google Search Ads put your clinic at the very top of those results instantly. Unlike SEO which takes months, Google Ads drive patient enquiries from day one.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">2. Instagram and Meta Ads</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      Instagram is where aesthetic patients spend their time. Before-and-after photos, treatment videos, and patient testimonials perform exceptionally well. Meta Ads allow you to target by age, location, and interests — so you show your ads only to people most likely to book.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">3. Google Business Profile</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      Your GBP is completely free and one of the highest-ROI tools available. When someone searches for a clinic near them, Google shows the top 3 local results. Clinics in those spots get the majority of calls and bookings. Optimising it can get you there within weeks.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">4. SEO and Blog Content</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      SEO brings free, consistent traffic month after month. By writing helpful articles about treatments — like "what is PRP therapy" or "best treatment for acne scars in India" — your clinic appears when patients research their options. This builds trust before they call.
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  5 Common Mistakes to Avoid
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[14.5px]">
                  <li>Not tracking leads to actual consult conversions.</li>
                  <li>Ignoring HIPAA / local healthcare advertising laws.</li>
                  <li>Failing to showcase authentic before-and-after proofs.</li>
                  <li>Bidding on broad terms rather than local high-intent keywords.</li>
                  <li>Slow response time (leads cool down in 15 minutes).</li>
                </ul>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  How to Get Started: Your 30-Day Plan
                </h3>
                <p>
                  Aesthetic clinics in India that are growing consistently in 2026 have one thing in common: they treat digital marketing as a core business system, not an afterthought. Google Ads, Instagram Ads, Local SEO, and content marketing working together create a patient acquisition engine that runs 24 hours a day. The clinics that build this system now will dominate their local markets over the next 3 to 5 years.
                </p>

                <p className="mt-6 pt-6 border-t border-white/10 text-xs font-mono opacity-50">
                  © Medscale Systems Research. All rights reserved.
                </p>
              </article>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between">
              <div className="text-[12px]">
                Ready to scale?
              </div>
              <button
                onClick={() => { setModalOpen(false); window.location.hash = "contact"; }}
                className="rounded-full bg-[#1b3bf5] text-ink px-5 py-2.5 text-xs font-semibold hover:bg-bone transition"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
