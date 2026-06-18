const brands = [
  "CVS Health",
  "Johnson & Johnson",
  "Metro Health",
  "Wellness Medical",
  "Smile Dental",
  "Pulse Clinics",
  "CareFirst",
  "Vitality Group",
];

export default function Logos() {
  return (
    <section className="relative bg-ink py-20 overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50 mb-3">[ Trusted by · 002 ]</div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.03em]">
              Leading healthcare brands trust the system.
            </h2>
          </div>
          <div className="lg:col-span-8 text-[13px] opacity-60 max-w-md lg:ml-auto">
            From single‑location clinics to multi‑specialty networks — we operate as an embedded growth team behind some of the most ambitious healthcare brands today.
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track inline-flex gap-16 whitespace-nowrap pr-16">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-5">
              <span className="font-display text-[40px] sm:text-[56px] tracking-[-0.03em] text-bone" style={{ color: "#f5f1ea" }}>{b}</span>
              <span className="h-2 w-2 rounded-full bg-[#1b3bf5]" />
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track-rev inline-flex gap-16 whitespace-nowrap pr-16">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-5">
              <span className="font-display text-[40px] sm:text-[56px] tracking-[-0.03em] text-outline-bone">{b}</span>
              <span className="text-[#1b3bf5] text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
