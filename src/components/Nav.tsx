import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setInterval(() => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }) + " IST"
      );
    }, 1000);
    return () => { window.removeEventListener("scroll", onScroll); clearInterval(t); };
  }, []);

  const links = [
    { href: "#work", label: "Work", n: "01" },
    { href: "#services", label: "Services", n: "02" },
    { href: "#why", label: "Studio", n: "03" },
    { href: "#results", label: "Results", n: "04" },
    { href: "#blog", label: "Blog", n: "05" },
    { href: "#founder", label: "Founder", n: "06" },
  ];

  return (
    <>
      {/* Top ticker */}
      <div className="fixed top-0 inset-x-0 z-40 bg-ink text-bone border-b border-white/10" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
        <div className="flex items-center justify-between px-5 py-2 text-[10px] font-mono tracking-[0.2em] uppercase">
          <div className="flex items-center gap-4">
            <span className="opacity-70">CHENNAI</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-70">130+ healthcare brands scaled</span>
            <span className="opacity-50 hidden md:inline">·</span>
            <span className="tabular-nums">{time || "— —:— IST"}</span>
          </div>
        </div>
      </div>

      <header className="fixed top-9 inset-x-0 z-50 transition-all duration-500" style={{ paddingTop: scrolled ? 8 : 16 }}>
        <div className="mx-auto max-w-[1400px] px-5">
          <div
            className={`flex items-center justify-between rounded-full pl-3 pr-2 py-2 transition-all duration-500 ${
              scrolled
                ? "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,.4)]"
                : "bg-[#0a0a0a] border border-[#0a0a0a]"
            }`}
          >
            <a href="#top" className="flex items-center gap-3 group pl-2">
              <span className="relative grid place-items-center h-9 w-9 rounded-full bg-[#0000cd]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0a0a0a]" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h4l2-7 4 14 2-7h6" />
                </svg>
              </span>
              <div className="leading-none">
                <div className="text-[15px] font-display font-medium tracking-tight text-bone" style={{ color: "#f5f1ea" }}>
                  Medscale Systems<span className="text-[#0000cd]">®</span>
                </div>
                <div className="text-[9px] font-mono tracking-[0.22em] uppercase text-bone/50 mt-0.5" style={{ color: "rgba(245,241,234,.5)" }}>Healthcare Growth</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-0.5 text-[12px]" style={{ color: "#f5f1ea" }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group flex items-center gap-1.5 px-3.5 py-2 rounded-full hover:bg-white/5 transition"
                >
                  <span className="font-mono text-[9px] opacity-50 group-hover:text-[#0000cd] transition">{l.n}</span>
                  <span className="font-medium">{l.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[#0a0a0a] pl-4 pr-1.5 py-1.5 text-[12px] font-semibold hover:bg-[#0000cd] transition group"
              >
                Book Intro Call
                <span className="grid place-items-center h-7 w-7 rounded-full bg-[#0a0a0a] text-white transition-transform group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-white/10"
                aria-label="Menu"
                style={{ color: "#f5f1ea" }}
              >
                <div className="space-y-1.5">
                  <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                  <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                  <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="rounded-3xl p-3 flex flex-col bg-[#0a0a0a] border border-white/10">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5" style={{ color: "#f5f1ea" }}>
                  <span className="flex items-center gap-3"><span className="font-mono text-[10px] opacity-50">{l.n}</span> {l.label}</span>
                  <span>↗</span>
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-1 mx-1 inline-flex justify-center rounded-2xl bg-white text-[#0a0a0a] px-4 py-3 text-sm font-semibold hover:bg-[#0000cd] transition">
                Book Intro Call →
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
