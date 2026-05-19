import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const crimsonRef = useRef<HTMLDivElement>(null);

  // Entrance animations
  useEffect(() => {
    const elements = [
      { el: headingRef.current, delay: 0 },
      { el: subRef.current, delay: 150 },
      { el: ctaRef.current, delay: 300 },
    ];

    for (const { el, delay } of elements) {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      const _timer = setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    }
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Parallax: background drifts at 40% of scroll speed, capped at 300px
      if (bgRef.current) {
        const translateY = Math.min(scrollY * 0.4, 300);
        bgRef.current.style.transform = `translateY(${translateY}px)`;
      }

      // Crimson overlay opacity: interpolate from 0.08 → 0.18 over first 600px of scroll
      if (crimsonRef.current) {
        const progress = Math.min(scrollY / 600, 1);
        const opacity = 0.08 + progress * 0.1;
        crimsonRef.current.style.background = `linear-gradient(to right, rgba(220,20,60,${opacity}) 0%, transparent 50%)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll, {
        passive: true,
      } as EventListenerOptions);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* z-0: Hero background photograph — parallax target */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: "-10%",
          left: 0,
          right: 0,
          height: "120%",
          zIndex: 0,
          backgroundImage: `url('/assets/generated/hero-power-station.dim_1920x1080.jpg'), url('https://images.unsplash.com/photo-1581094480107-54b621b4bf04?auto=format&fit=crop&w=1920&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(20%) brightness(0.55)",
          willChange: "transform",
        }}
      />

      {/* z-1: Deep dark vignette overlay for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* z-2: Subtle crimson accent gradient on left — opacity intensifies on scroll */}
      <div
        ref={crimsonRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(to right, rgba(220,20,60,0.08) 0%, transparent 50%)",
        }}
      />

      {/* z-3: Crimson accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#DC143C]"
        style={{ zIndex: 3 }}
      />

      {/* z-10: All text content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center pt-24 pb-20">
        {/* Eyebrow label */}
        <p
          className="text-[#DC143C] text-[10px] font-display font-bold tracking-[0.35em] uppercase mb-8"
          style={{
            textShadow:
              "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          Mpumalanga, South Africa
        </p>

        <h1
          ref={headingRef}
          className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] uppercase tracking-wide mb-8"
          data-ocid="hero.headline"
        >
          PRECISION CONFIGURATION MANAGEMENT
          <br className="hidden sm:block" />{" "}
          <span className="text-[#B8B8B8]">FOR CRITICAL INDUSTRIAL</span>
          <br />
          <span className="text-[#B8B8B8]">INFRASTRUCTURE</span>
        </h1>

        <p
          ref={subRef}
          className="text-[#9A9A9A] text-base sm:text-lg md:text-xl font-body max-w-3xl mx-auto mb-12 leading-relaxed"
          data-ocid="hero.subheadline"
        >
          KKS Coding&nbsp;&nbsp;|&nbsp;&nbsp;Plant
          Labelling&nbsp;&nbsp;|&nbsp;&nbsp;Technical
          Documentation&nbsp;&nbsp;|&nbsp;&nbsp;Asset Integrity
          <span className="block mt-1 text-sm text-[#6A6A6A] tracking-wider">
            Mpumalanga, South Africa
          </span>
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="px-9 py-4 bg-[#DC143C] hover:bg-[#A50E2D] active:bg-[#7a0a22] text-white font-display font-bold text-xs tracking-[0.25em] uppercase transition-colors duration-200 min-w-[240px] shadow-lg cta-btn"
            style={{ boxShadow: "0 4px 15px rgba(220,20,60,0.4)" }}
            data-ocid="hero.primary_cta_button"
          >
            REQUEST A SITE ASSESSMENT
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("gallery")}
            className="px-9 py-4 border-2 border-white hover:bg-white hover:text-[#0D0D0D] text-white font-display font-bold text-xs tracking-[0.25em] uppercase transition-all duration-200 min-w-[240px] bg-transparent"
            data-ocid="hero.secondary_cta_button"
          >
            VIEW OUR WORK
          </button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("who-we-are")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#5A5A5A] hover:text-[#DC143C] transition-colors duration-200"
        aria-label="Scroll down to learn more"
        data-ocid="hero.scroll_indicator"
      >
        <span className="text-[9px] font-display font-semibold tracking-[0.3em] uppercase">
          SCROLL
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
