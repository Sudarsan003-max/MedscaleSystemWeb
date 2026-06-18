import { SectionHead } from "./About";

const pillars = [
  { n: "01", title: "Amplify", t: "your brand", text: "Build authority and visibility across channels patients actually use to find care." },
  { n: "02", title: "Engage", t: "your audience", text: "Conversations and content that turn passive interest into booked appointments." },
  { n: "03", title: "Educate", t: "& empower", text: "Trust‑building, compliance‑aware content that informs patients and earns referrals." },
  { n: "04", title: "Deliver", t: "tangible ROI", text: "Performance measured in patients, revenue and lifetime value — not vanity metrics." },
];

export default function Approach() {
  return (
    <section className="relative py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="005" label="The opportunity" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-ink">
              An industry <span className="font-serif-i">rapidly</span>
              <br />
              going <span className="relative">
                digital
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M3 7 Q 50 -1 100 5 T 197 4" stroke="#1b3bf5" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-ink/70 max-w-md lg:ml-auto">
            Healthcare is rapidly digitizing, with rising expectations for seamless, retail‑like experiences.
            Patients prefer online‑first care — success now depends on trust, data‑driven execution,
            and full‑funnel ROI delivery.
          </p>
        </div>

        {/* Pillars timeline */}
        <div className="mt-20 relative">
          {/* horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-ink/15 hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
            {pillars.map((p, i) => (
              <div key={p.n} className="relative">
                {/* dot */}
                <div className="hidden lg:block absolute top-[26px] left-0 h-4 w-4 rounded-full bg-ink border-4 border-bone z-10" style={{ background: "#0a0a0a", borderColor: "#f5f1ea" }}>
                  {i === 0 && <span className="absolute inset-0 rounded-full bg-[#1b3bf5] pulse-dot" />}
                </div>
                <div className="lg:pl-7">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-4">[ STEP / {p.n} ]</div>
                  <h3 className="font-display text-3xl sm:text-4xl tracking-[-0.03em] text-ink leading-none">
                    {p.title}<span className="text-[#1b3bf5]">.</span>
                  </h3>
                  <div className="mt-1 text-[14px] text-ink/60 italic font-serif-i">{p.t}</div>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-ink/70 max-w-[260px]">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
