import { BahasaLogo } from "@/components/BahasaLogo";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "WHO WE ARE", href: "#who-we-are" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR WORK", href: "#gallery" },
  { label: "IDENTIFICATION", href: "#identification" },
  { label: "WHY CHOOSE", href: "#why-choose" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    scrollTo(e, href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D] border-b border-[#2A2A2A] shadow-lg"
          : "bg-transparent"
      }`}
      data-ocid="nav.header"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex-shrink-0"
            aria-label="Bahasa Holdings home"
            data-ocid="nav.logo_link"
          >
            <BahasaLogo variant="white" size="md" />
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-display font-semibold tracking-widest text-[#B0B0B0] hover:text-[#DC143C] transition-colors duration-200"
                data-ocid={`nav.link.${link.label.toLowerCase().replace(/ /g, "_")}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 bg-[#DC143C] hover:bg-[#A50E2D] text-white text-xs font-display font-bold tracking-widest uppercase transition-colors duration-200 cta-btn"
              data-ocid="nav.cta_button"
            >
              GET A QUOTE
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-[#B0B0B0] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="nav.mobile_menu_toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#0D0D0D] border-t border-[#2A2A2A]"
          data-ocid="nav.mobile_menu"
        >
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 text-sm font-display font-semibold tracking-widest text-[#B0B0B0] hover:text-[#DC143C] border-b border-[#1A1A1A] transition-colors duration-200"
                data-ocid={`nav.mobile_link.${link.label.toLowerCase().replace(/ /g, "_")}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 px-4 py-3 bg-[#DC143C] hover:bg-[#A50E2D] text-white text-sm font-display font-bold tracking-widest uppercase text-center transition-colors duration-200 cta-btn"
              data-ocid="nav.mobile_cta_button"
            >
              GET A QUOTE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
