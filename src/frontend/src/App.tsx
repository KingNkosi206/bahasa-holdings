import { Navigation } from "@/components/Navigation";
import { CodingExamplesSection } from "@/components/sections/CodingExamplesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".fade-in-section");
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navigation />
      <main>
        <section className="fade-in-section" id="hero-wrapper">
          <HeroSection />
        </section>
        <section className="fade-in-section" id="who-we-are-wrapper">
          <WhoWeAreSection />
        </section>
        <section className="fade-in-section" id="services-wrapper">
          <ServicesSection />
        </section>
        <section className="fade-in-section" id="coding-examples-wrapper">
          <CodingExamplesSection />
        </section>
        <section className="fade-in-section" id="gallery-wrapper">
          <GallerySection />
        </section>
        <section className="fade-in-section" id="identification-wrapper">
          <IdentificationSection />
        </section>
        <section className="fade-in-section" id="why-choose-wrapper">
          <WhyChooseSection />
        </section>
        <section className="fade-in-section" id="faq-wrapper">
          <FAQSection />
        </section>
        <section className="fade-in-section" id="contact-wrapper">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
