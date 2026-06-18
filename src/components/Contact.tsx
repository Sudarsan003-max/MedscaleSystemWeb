import { useState } from "react";
import { SectionHead } from "./About";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", practice: "", stage: "Growth-Core", notes: "" });

  return (
    <section id="contact" className="relative py-28 bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="absolute -top-20 -right-20 h-[420px] w-[420px] blob bg-[#1b3bf5] opacity-90" />
      <div className="absolute bottom-10 -left-20 h-[260px] w-[260px] rounded-full bg-[#ff5d3b]/40 blur-[80px]" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="009" label="Initiate contact" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.9] tracking-[-0.04em]">
              Let's <span className="font-serif-i">make</span>
              <br />
              your practice
              <br />
              <span className="text-[#1b3bf5]">inevitable.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed opacity-70">
              Join the growing number of healthcare providers who have revolutionized their
              patient acquisition with Medscale Systems' Growth packages.
            </p>

            <div className="mt-10 space-y-1 border-t border-white/10">
              {[
                { k: "Free Strategy Call", v: "30‑min deep dive into growth bottlenecks" },
                { k: "Custom Growth Audit", v: "Full report on ads, SEO, funnels & compliance" },
                { k: "No Lock‑in", v: "Transparent pricing · month‑to‑month engagement" },
              ].map((b) => (
                <div key={b.k} className="group flex items-center justify-between py-5 border-b border-white/10 cursor-pointer" data-cursor="hover">
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-[#1b3bf5] text-ink text-[12px] font-bold">✓</span>
                    <div>
                      <div className="text-[15px] font-medium">{b.k}</div>
                      <div className="text-[12px] opacity-55">{b.v}</div>
                    </div>
                  </div>
                  <span className="opacity-30 group-hover:opacity-100 group-hover:text-[#1b3bf5] transition">↗</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 p-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Email</div>
                <div className="mt-1 text-[13px]">admin@medscalesystems.com</div>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Locations</div>
                <div className="mt-1 text-[13px]">CHENNAI</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="relative rounded-[28px] bg-bone text-ink p-7 sm:p-9"
              style={{ background: "#f5f1ea" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-60">[ Free audit · request ]</div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a] pulse-dot" /> Live
                </span>
              </div>

              {sent ? (
                <div className="mt-10 text-center py-14">
                  <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-[#1b3bf5] text-ink text-2xl">✓</div>
                  <h3 className="mt-6 font-display text-3xl tracking-[-0.03em]">Request received.</h3>
                  <p className="mt-3 opacity-70 text-[14px] max-w-sm mx-auto">
                    Thanks {form.name || "there"} — our growth strategist will reach out within 24 hours
                    with a tailored audit for {form.practice || "your practice"}.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mt-5 font-display text-3xl sm:text-4xl tracking-[-0.04em]">
                    Tell us about <span className="font-serif-i">your practice.</span>
                  </h3>

                  <div className="mt-7 grid sm:grid-cols-2 gap-5">
                    <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Dr. Jane Doe" />
                    <Field label="Work email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@clinic.com" />
                    <Field label="Practice / brand" value={form.practice} onChange={(v) => setForm({ ...form, practice: v })} placeholder="Bright Family Clinic" />
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60">Stage</label>
                      <div className="mt-2 grid grid-cols-3 gap-1 rounded-full bg-ink/5 p-1">
                        {["Basic", "Core", "Advance"].map((s) => {
                          const full = `Growth-${s}`;
                          const active = form.stage === full;
                          return (
                            <button
                              type="button"
                              key={s}
                              onClick={() => setForm({ ...form, stage: full })}
                              className={`text-[11.5px] py-2 rounded-full transition font-medium ${active ? "bg-ink text-bone" : "hover:bg-ink/5"}`}
                              style={active ? { background: "#0a0a0a", color: "#f5f1ea" } : {}}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60">What's blocking growth?</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={4}
                      placeholder="Goals, current channels, biggest challenge…"
                      className="mt-2 w-full rounded-2xl bg-ink/5 border border-ink/10 px-4 py-3 text-[14px] placeholder:opacity-40 focus:outline-none focus:border-ink/40 focus:bg-bone transition"
                      style={{ background: "rgba(10,10,10,.04)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group/btn mt-7 relative inline-flex w-full items-center justify-between rounded-full bg-ink text-bone pl-6 pr-1.5 py-1.5 text-[13.5px] font-medium overflow-hidden"
                    style={{ background: "#0a0a0a", color: "#f5f1ea" }}
                  >
                    <span className="absolute inset-0 btn-shimmer opacity-30" />
                    <span className="relative">Request my free audit</span>
                    <span className="relative grid place-items-center h-10 w-10 rounded-full bg-[#1b3bf5] text-ink transition-transform group-hover/btn:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </button>

                  <p className="mt-4 text-[10px] font-mono tracking-[0.2em] uppercase text-center opacity-50">
                    🔒 HIPAA‑aware · We never share your info · No spam
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; }) {
  return (
    <div>
      <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full bg-ink/5 border border-ink/10 px-4 py-3 text-[14px] placeholder:opacity-40 focus:outline-none focus:border-ink/40 focus:bg-bone transition"
        style={{ background: "rgba(10,10,10,.04)" }}
      />
    </div>
  );
}
