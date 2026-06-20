import { SectionHead } from "./About";

const reasons = [
  {
    n: "01",
    icon: "✦",
    title: "100% healthcare focused",
    items: [
      "5+ years dedicated solely to healthcare marketing",
      "Deep insight into patient psychology and compliance",
      "Trusted partnerships with healthtech providers",
    ],
  },
  {
    n: "02",
    icon: "↑",
    title: "Proven track record",
    items: [
      "130+ clinics scaled across medical specialties",
      "$400K+ in revenue generated for clients",
      "Average 428% growth in patient leads",
      "Up to 89% reduction in cost per lead",
    ],
  },
  {
    n: "03",
    icon: "⛨",
    title: "HIPAA & compliance mastery",
    items: [
      "All campaigns HIPAA‑compliant by design",
      "PHI‑safe automation and data handling",
      "Regulatory expertise across all platforms",
    ],
  },
  {
    n: "04",
    icon: "⊕",
    title: "Full‑funnel execution",
    items: [
      "End‑to‑end from awareness to conversion",
      "Dedicated in‑house team per client",
      "No outsourcing — all work in‑house",
    ],
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-28 bg-bone-2/40 overflow-hidden" style={{ background: "#ebe5da" }}>
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="007" label="Why the studio" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-ink">
              Not another <span className="font-serif-i">agency.</span>
              <br />
              A specialist <span className="text-[#ff5d3b]">partner.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-ink/70 max-w-md lg:ml-auto">
            We exclusively serve healthcare organizations — bringing deep industry expertise,
            regulatory compliance mastery, and proven systems that deliver measurable results.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative bg-bone p-8 lg:p-10 transition hover:bg-ink hover:text-bone duration-500"
              style={{ background: "#f5f1ea" }}
              data-cursor="hover"
            >
              <div className="flex items-start justify-between">
                <span className="grid place-items-center h-14 w-14 rounded-full bg-ink text-bone text-2xl transition group-hover:bg-[#0000cd] group-hover:text-ink" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
                  {r.icon}
                </span>
                <span className="font-mono text-[11px] tracking-[0.22em] opacity-50">[ {r.n} / 04 ]</span>
              </div>
              <h3 className="mt-8 font-display text-3xl lg:text-4xl tracking-[-0.03em] leading-tight">{r.title}</h3>
              <ul className="mt-6 space-y-2.5">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[13.5px] opacity-75">
                    <span className="mt-2 h-1 w-3 bg-current opacity-60 flex-none" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-[#0000cd] text-ink">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              {i % 2 === 0 && <div className="absolute top-1/2 -right-px h-12 w-px bg-[#0000cd] opacity-0 group-hover:opacity-100 transition" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
