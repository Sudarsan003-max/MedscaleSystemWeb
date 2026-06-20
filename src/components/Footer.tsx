import studioBg from "./studio_bg_4k.png";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone pt-20 pb-8 overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={studioBg}
          alt="Studio Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle top/bottom gradients to transition with adjacent dark sections */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        {/* Big wordmark */}
        <div className="border-y border-white/10 py-10 sm:py-16">
          <div className="font-display text-[11vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.85] tracking-[-0.05em]">
            Medscale Systems<span className="text-[#0000cd]">®</span>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column: Studio profile */}
          <div className="w-full md:max-w-[300px] flex-shrink-0">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">[ Studio · 010 ]</div>
            <p className="mt-4 text-[15px] leading-relaxed opacity-75">
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
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:bg-[#0000cd] hover:text-bone hover:border-[#0000cd] transition text-[11px] font-medium"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Links and Newsletter */}
          <div className="w-full md:max-w-[300px] flex-shrink-0 grid grid-cols-2 gap-x-4 gap-y-8">
            <div>
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

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">Services</div>
              <ul className="mt-4 space-y-2 text-[14px]">
                <li><a href="#services" className="underline-draw">Growth Basic</a></li>
                <li><a href="#services" className="underline-draw">Growth Core</a></li>
                <li><a href="#services" className="underline-draw">Growth Advance</a></li>
                <li><a href="#services" className="underline-draw">Pulse.Live</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">Newsletter</div>
              <p className="mt-3 text-[13px] opacity-70">Monthly insights on healthcare growth, compliance & conversion.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center rounded-full border border-white/15 p-1 bg-black/40 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="you@clinic.com"
                  className="flex-1 bg-transparent px-4 py-2 text-[13px] placeholder:opacity-40 focus:outline-none"
                />
                <button className="rounded-full bg-[#0000cd] text-ink px-4 py-2 text-[12px] font-semibold hover:bg-white transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Office Contact Info */}
        <div className="mt-16 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#5c85ff]/30 hover:bg-white/[0.04] hover:shadow-[0_15px_30px_-10px_rgba(92,133,255,0.15)] transition-all duration-300 group/card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5c85ff]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff5d3b] animate-pulse" />
              [ Head Office ]
            </div>
            <p className="mt-3.5 text-[14px] leading-relaxed text-bone/80">
              2/17B Palyathan Street, Alandur<br />
              <span className="text-white font-medium">Chennai – 600 016</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#5c85ff]/30 hover:bg-white/[0.04] hover:shadow-[0_15px_30px_-10px_rgba(92,133,255,0.15)] transition-all duration-300 group/card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5c85ff]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5c85ff] animate-pulse" />
              [ Working Hours ]
            </div>
            <p className="mt-3.5 text-[14px] leading-relaxed text-bone/80">
              Monday – Friday<br />
              <span className="text-white font-medium">07:00 AM – 09:00 PM</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-green-500/30 hover:bg-white/[0.04] hover:shadow-[0_15px_30px_-10px_rgba(34,197,94,0.15)] transition-all duration-300 group/card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              [ Call Us ]
            </div>
            <div className="mt-3.5">
              <a href="tel:+918667031931" className="text-2xl font-display font-semibold text-white hover:text-green-400 transition-colors duration-300 block tracking-tight">
                +91 86670 31931
              </a>
              <div className="mt-1 text-[11px] text-white/40 font-mono">Mon–Fri · IST (Online Now)</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] opacity-50">
          <div>© {new Date().getFullYear()} Medscale Systems · All rights reserved</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#0000cd]">Privacy</a>
            <a href="#" className="hover:text-[#0000cd]">Terms</a>
            <a href="#" className="hover:text-[#0000cd]">HIPAA</a>
            <a href="#top" className="hover:text-[#0000cd]">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
