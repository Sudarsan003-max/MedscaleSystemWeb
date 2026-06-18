import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import About from "./components/About";
import Founder from "./components/Founder";
import Problems from "./components/Problems";
import Approach from "./components/Approach";
import Solutions from "./components/Solutions";
import Showcase from "./components/Showcase";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  // Reveal on scroll and hash change listener
  useEffect(() => {
    const handleHash = () => {
      setHash(window.location.hash);
      if (window.location.hash === "#founder") {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener("hashchange", handleHash);

    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger, .mask-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    
    return () => {
      window.removeEventListener("hashchange", handleHash);
      io.disconnect();
    };
  }, []);

  const isFounderPage = hash === "#founder";

  return (
    <div className="relative min-h-screen bg-paper text-ink grain overflow-x-hidden">
      <Nav />
      {isFounderPage ? (
        <main className="pt-24">
          <Founder />
        </main>
      ) : (
        <main>
          <Hero />
          <Logos />
          <About />
          <Problems />
          <Approach />
          <Solutions />
          <Showcase />
          <WhyUs />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}
