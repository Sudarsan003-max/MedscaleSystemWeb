import { SectionHead } from "./About";

type Plan = {
  tag: string;
  name: string;
  desc: string;
  idealFor: string;
  features: { title: string; items: string[] }[];
  highlight?: boolean;
  inherits?: string;
};

const plans: Plan[] = [
  {
    tag: "01 · Foundation",
    name: "Growth‑Basic",
    desc: "Essential marketing tools to build a strong foundation for sustainable online growth.",
    idealFor: "Early‑stage healthcare brands building digital presence and lead flow.",
    features: [
      { title: "Performance Marketing Foundation", items: ["Google, Meta & LinkedIn setup", "Basic funnel tracking and lead capture"] },
      { title: "SEO & Local Visibility", items: ["Keyword research", "On‑page optimization", "Google Business Profile management"] },
      { title: "Social Media Management", items: ["3 platforms", "20 custom posts / month", "Basic comment monitoring"] },
      { title: "Content Strategy & Writing", items: ["Healthcare blog content", "Patient education materials", "Email content foundation"] },
      { title: "Healthcare Website Services", items: ["HIPAA‑compliant landing page", "Basic security & hosting"] },
    ],
  },
  {
    tag: "02 · Recommended",
    name: "Growth‑Core",
    desc: "Automation, advanced SEO, CRM campaigns, and strategic oversight — built to scale acquisition.",
    idealFor: "Mid‑stage healthcare firms ready to scale with automation systems.",
    highlight: true,
    inherits: "Everything in Growth‑Basic, plus:",
    features: [
      { title: "Advanced Performance Marketing", items: ["Multichannel optimization across Google, Meta, LinkedIn, YouTube, programmatic", "Dynamic creative testing and retargeting"] },
      { title: "Advanced SEO", items: ["Technical SEO (speed, schema)", "Local citations & backlinks", "Monthly SEO reporting"] },
      { title: "Enhanced Social Media", items: ["Up to 5 platforms", "40 custom posts / month", "Full engagement & inbox handling"] },
      { title: "Marketing Automation", items: ["CRM integration & setup", "Lead nurture & drip campaigns", "Automated follow‑up sequences"] },
      { title: "Conversion Rate Optimization", items: ["Landing page A/B testing", "Form optimization", "Funnel performance audits"] },
      { title: "Full Web Development", items: ["Full website (5–10 pages)", "Monthly maintenance & optimization"] },
    ],
  },
  {
    tag: "03 · Enterprise",
    name: "Growth‑Advance",
    desc: "Full‑scale digital engine with ABM, video, custom portals, and multi‑channel execution.",
    idealFor: "Healthcare enterprises seeking market leadership and custom technology.",
    inherits: "Everything in Growth‑Core, plus:",
    features: [
      { title: "Performance Growth Lab", items: ["Advanced analytics dashboard", "Predictive performance modeling", "Cross‑channel attribution"] },
      { title: "Advanced Funnel Architecture", items: ["Full‑funnel design (TOFU/MOFU/BOFU)", "Webinar funnels, lead magnets"] },
      { title: "Account‑Based Marketing", items: ["Strategy for 100–1,000 key accounts", "LinkedIn + email + retargeting orchestration"] },
      { title: "Premium Branding & Identity", items: ["Full brand guidelines", "Voice & messaging architecture", "Professional copywriting"] },
      { title: "Strategic Consulting", items: ["Dedicated strategy team", "Monthly executive reviews", "Roadmapping & forecasting"] },
    ],
  },
];

export default function Solutions() {
  return (
    <section id="services" className="relative py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="006" label="The system" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-ink">
              One full‑stack <span className="font-serif-i">prescription</span>
              <br />
              for healthcare growth.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-ink/70 max-w-md lg:ml-auto">
            Three performance‑driven engagement levels — from startups building visibility to
            enterprises scaling acquisition, automation, and ROI. Choose your stage.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-10 text-center text-[12px] font-mono uppercase tracking-[0.22em] text-ink/50">
          ✦ All packages are HIPAA‑compliant by design · Custom enterprise plans available ✦
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const h = plan.highlight;
  return (
    <div
      className={`group relative rounded-[28px] p-8 lift overflow-hidden ${
        h ? "bg-ink text-bone" : "bg-bone-2/40 text-ink border border-ink/10"
      }`}
      style={h ? { background: "#0a0a0a", color: "#f5f1ea" } : { background: "rgba(235,229,218,.5)" }}
    >
      {h && (
        <>
          <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-[#0000cd]/15 blur-3xl" />
          <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-[0.22em] bg-[#0000cd] text-ink px-2.5 py-1 rounded-full">★ Pick</div>
        </>
      )}

      <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-60">[ {plan.tag} ]</div>
      <h3 className="mt-5 font-display text-4xl tracking-[-0.04em] leading-none">
        {plan.name.replace("Growth‑", "Growth ")}<span className={h ? "text-[#0000cd]" : "text-ink"}>.</span>
      </h3>
      <p className={`mt-3 text-[13.5px] leading-relaxed ${h ? "opacity-70" : "text-ink/65"}`}>{plan.desc}</p>

      <div className={`mt-5 rounded-2xl p-4 ${h ? "bg-white/5 border border-white/10" : "bg-bone border border-ink/10"}`} style={!h ? { background: "#f5f1ea" } : {}}>
        <div className={`text-[10px] font-mono uppercase tracking-[0.2em] ${h ? "text-[#0000cd]" : "text-ink/55"}`}>Ideal for</div>
        <div className={`mt-1 text-[13px] ${h ? "" : "text-ink/85"}`}>{plan.idealFor}</div>
      </div>

      {plan.inherits && (
        <div className={`mt-6 text-[12px] font-medium ${h ? "text-[#0000cd]" : "text-ink/70"}`}>
          ↳ {plan.inherits}
        </div>
      )}

      <div className="mt-5 space-y-4">
        {plan.features.map((f) => (
          <div key={f.title} className={`pb-4 border-b ${h ? "border-white/10" : "border-ink/10"} last:border-0 last:pb-0`}>
            <div className="flex items-center gap-2">
              <span className={`grid place-items-center h-5 w-5 rounded-md text-[11px] font-bold ${h ? "bg-[#0000cd] text-ink" : "bg-ink text-bone"}`} style={!h ? { background: "#0a0a0a", color: "#f5f1ea" } : {}}>✓</span>
              <div className="text-[13px] font-semibold">{f.title}</div>
            </div>
            <ul className={`mt-1.5 ml-7 space-y-0.5 list-disc list-outside ${h ? "marker:text-white/30" : "marker:text-ink/30"}`}>
              {f.items.map((it) => (
                <li key={it} className={`text-[12px] leading-relaxed ${h ? "opacity-65" : "text-ink/65"}`}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className={`mt-7 group/btn inline-flex w-full items-center justify-between rounded-full pl-5 pr-1.5 py-1.5 text-[13px] font-medium transition ${
          h ? "bg-white text-ink hover:bg-[#0000cd] hover:text-white" : "bg-ink text-bone hover:bg-[#ff5d3b]"
        }`}
        style={!h ? { background: "#0a0a0a", color: "#f5f1ea" } : {}}
      >
        Get a free audit
        <span className={`grid place-items-center h-9 w-9 rounded-full transition-all group-hover/btn:rotate-45 ${h ? "bg-ink text-[#0000cd] group-hover/btn:bg-white group-hover/btn:text-[#0000cd]" : "bg-[#0000cd] text-ink"}`} style={!h ? {} : {}}>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </a>
    </div>
  );
}
