import { BahasaLogo } from "@/components/BahasaLogo";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="bg-[#000000] border-t border-[#2A2A2A] py-10"
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Desktop: logo left — text right. Mobile: centered stack */}
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <BahasaLogo variant="white" size="md" />
            <p className="text-[#4A4A4A] text-[10px] tracking-widest uppercase font-body">
              Reg. No. 2018/544818/07
            </p>
          </div>

          {/* Tagline + legal — center on desktop */}
          <div className="flex flex-col items-center gap-1.5">
            <p
              className="text-[#DC143C] text-xs font-display font-bold tracking-[0.35em] uppercase"
              style={{
                textShadow:
                  "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
              }}
              data-ocid="footer.tagline"
            >
              Precision. Compliance. Reliability.
            </p>
            <p className="font-body text-[#3A3A3A] text-[11px] text-center">
              &copy; {currentYear} Bahasa Holdings Pty (Ltd). All rights
              reserved.
            </p>
          </div>

          {/* Caffeine branding — right on desktop */}
          <p className="font-body text-[#2A2A2A] text-[11px] text-center md:text-right">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC143C] hover:underline transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
