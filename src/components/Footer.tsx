import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone pt-20 pb-8 overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="mx-auto max-w-[1400px] px-5">
        {/* Big wordmark */}
        <div className="border-y border-white/10 py-10 sm:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="font-display text-[20vw] sm:text-[18vw] lg:text-[15vw] leading-[0.85] tracking-[-0.05em]">
            Medscale<span className="text-[#1b3bf5]">®</span>
          </div>
          <Logo className="h-20 w-20 md:h-28 md:w-28 opacity-25 hover:opacity-100 hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer" color="#1b3bf5" />
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">[ Studio · 010 ]</div>
            <p className="mt-4 text-[15px] leading-relaxed opacity-75 max-w-md">
              Healthcare's #1 growth partner. We design captivating brands and engineer
              conversion systems that scale clinics into category leaders.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[
                { l: "Twitter", s: "X", href: "#" },
                { l: "LinkedIn", s: "in", href: "https://www.linkedin.com/company/medscalesystems/posts/?feedView=all" },
                { l: "Instagram", s: "IG", href: "https://www.instagram.com/medscalesystems/" },
                { l: "YouTube", s: "YT", href: "#" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:bg-[#1b3bf5] hover:text-bone hover:border-[#1b3bf5] transition text-[11px] font-medium"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">Studio</div>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href="#work" className="underline-draw">About</a></li>
              <li><a href="#why" className="underline-draw">Why us</a></li>
              <li><a href="#results" className="underline-draw">Results</a></li>
              <li><a href="#blog" className="underline-draw">Blog</a></li>
              <li><a href="#founder" className="underline-draw">Founder</a></li>
              <li><a href="#contact" className="underline-draw">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">Services</div>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href="#services" className="underline-draw">Growth Basic</a></li>
              <li><a href="#services" className="underline-draw">Growth Core</a></li>
              <li><a href="#services" className="underline-draw">Growth Advance</a></li>
              <li><a href="#services" className="underline-draw">Pulse.Live</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">Newsletter</div>
            <p className="mt-4 text-[13px] opacity-70">Monthly insights on healthcare growth, compliance & conversion.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center rounded-full border border-white/15 p-1">
              <input
                type="email"
                placeholder="you@clinic.com"
                className="flex-1 bg-transparent px-4 py-2 text-[13px] placeholder:opacity-40 focus:outline-none"
              />
              <button className="rounded-full bg-[#1b3bf5] text-ink px-4 py-2 text-[12px] font-semibold hover:bg-white transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Office Contact Info */}
        <div className="mt-16 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition duration-300">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1b3bf5]">[ Head Office ]</div>
            <p className="mt-3 text-[13.5px] leading-relaxed opacity-70">
              2/17B Palyathan Street, Alandur<br />
              Chennai – 600 016
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition duration-300">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1b3bf5]">[ Working Hours ]</div>
            <p className="mt-3 text-[13.5px] leading-relaxed opacity-70">
              Monday – Friday<br />
              07:00 AM – 09:00 PM
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition duration-300">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1b3bf5]">[ Call Us ]</div>
            <div className="mt-3">
              <a href="tel:+918667031931" className="text-xl font-display font-medium text-bone hover:text-[#1b3bf5] transition">
                +91 86670 31931
              </a>
              <div className="mt-1 text-[11px] opacity-40 font-mono">Mon–Fri · IST</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] opacity-50">
          <div>© {new Date().getFullYear()} Medscale Systems · All rights reserved</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#1b3bf5]">Privacy</a>
            <a href="#" className="hover:text-[#1b3bf5]">Terms</a>
            <a href="#" className="hover:text-[#1b3bf5]">HIPAA</a>
            <a href="#top" className="hover:text-[#1b3bf5]">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
