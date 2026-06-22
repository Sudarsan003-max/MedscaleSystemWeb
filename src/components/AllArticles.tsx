import { useEffect } from "react";

export default function AllArticles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      category: "Google Ads",
      title: "How Dermatology Clinics Get More Patients",
      excerpt: "Learn the exact digital marketing strategies dermatology clinics use to get consistent patient bookings every month.",
      url: "https://medscalesystems.com/how-dermatology-clinics-get-more-patients/",
    },
    {
      category: "Google Ads",
      title: "Google Ads for Doctors India: Complete Guide",
      excerpt: "Everything doctors need to know about running Google Ads in India — keywords, budgets, and what actually works.",
      url: "https://medscalesystems.com/google-ads-for-doctors-india/",
    },
    {
      category: "Local SEO",
      title: "Local SEO for Clinics India: Google Maps Top 3",
      excerpt: "How to rank your clinic in Google Maps top 3 and get consistent free patient calls every month.",
      url: "https://medscalesystems.com/local-seo-for-clinics-india/",
    },
    {
      category: "Google Ads",
      title: "How Much Does Google Ads Cost for Doctors India?",
      excerpt: "Real cost-per-click, cost-per-lead, and cost-per-appointment data for healthcare Google Ads campaigns in India.",
      url: "https://medscalesystems.com/google-ads-cost-doctors-india/",
    },
    {
      category: "WhatsApp",
      title: "WhatsApp Marketing for Clinics India",
      excerpt: "How to use WhatsApp automation to follow up with leads, reduce no-shows, and re-engage past patients.",
      url: "https://medscalesystems.com/whatsapp-marketing-for-clinics-india/",
    },
    {
      category: "Meta Ads",
      title: "Meta Ads for Aesthetic Clinics India",
      excerpt: "The complete guide to running Instagram and Facebook ads for aesthetic and dermatology clinics in India.",
      url: "https://medscalesystems.com/meta-ads-aesthetic-clinics-india/",
    },
    {
      category: "Branding",
      title: "Clinic Branding for Aesthetic Practices India",
      excerpt: "How to build a clinic brand that attracts premium patients and commands higher treatment fees.",
      url: "https://medscalesystems.com/clinic-branding-aesthetic-practices-india/",
    },
    {
      category: "Reputation",
      title: "Online Reputation Management for Doctors India",
      excerpt: "How to build and protect a 4.5+ star Google rating for your clinic — and what to do about negative reviews.",
      url: "https://medscalesystems.com/online-reputation-management-doctors-india/",
    },
    {
      category: "Agency Guide",
      title: "Top Digital Marketing Agencies for Healthcare Clinics India",
      excerpt: "How to evaluate and choose the right digital marketing agency for your clinic in India.",
      url: "https://medscalesystems.com/top-digital-marketing-agencies-healthcare-clinics-india/",
    },
    {
      category: "Google Ads",
      title: "Google Ads for Hair Loss Clinics India",
      excerpt: "The complete Google Ads playbook for hair transplant and PRP clinics targeting patients across India.",
      url: "https://medscalesystems.com/google-ads-hair-loss-clinics-india/",
    },
    {
      category: "Website",
      title: "7 Clinic Website Mistakes That Lose Patients in India",
      excerpt: "The most common clinic website mistakes that silently lose patients every day — and exactly how to fix each one.",
      url: "https://medscalesystems.com/clinic-website-mistakes-india/",
    },
    {
      category: "Paid Ads",
      title: "Google Ads vs Meta Ads for Clinics India",
      excerpt: "A complete comparison — which channel gets more patients, costs less, and works faster for your clinic type.",
      url: "https://medscalesystems.com/google-ads-vs-meta-ads-clinics-india/",
    },
  ];

  return (
    <section className="relative py-12 px-5 min-h-screen bg-ink" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="mx-auto max-w-[1400px]">
        {/* Header navigation bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-bone text-ink text-[9px]" style={{ background: "#f5f1ea", color: "#0a0a0a" }}>
              §
            </span>
            <span className="opacity-60">009</span>
            <span>/</span>
            <span>All Articles</span>
          </div>

          <a
            href="#blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[12px] font-semibold hover:bg-white hover:text-ink transition duration-300"
            style={{ color: "#f5f1ea" }}
          >
            ← Back to Home
          </a>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-bone">
            All Articles & Guides
          </h1>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-bone/60">
            Explore more guides, case studies, and digital marketing insights for healthcare and aesthetic clinics.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <a
              key={idx}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 h-full"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0000cd]/10 border border-[#0000cd]/20 px-3 py-1 text-[10px] font-mono text-[#0000cd] uppercase tracking-[0.1em]">
                  {art.category}
                </span>

                <h2 className="mt-6 font-display text-xl sm:text-2xl leading-snug tracking-tight text-bone group-hover:text-[#0000cd] transition duration-300">
                  {art.title}
                </h2>

                <p className="mt-3 text-[13.5px] leading-relaxed text-bone/60">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0000cd] text-ink pl-4 pr-1.5 py-1.5 text-[12px] font-semibold transition group-hover:bg-bone group-hover:text-ink duration-300">
                  Read Article
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-ink text-[#0000cd] transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
