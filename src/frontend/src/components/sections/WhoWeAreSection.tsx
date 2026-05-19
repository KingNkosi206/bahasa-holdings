import { BahasaLogo } from "@/components/BahasaLogo";

export function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="py-20 md:py-28 bg-[#111111]"
      data-ocid="who_we_are.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text content (mobile: first; desktop: left) */}
          <div className="order-1">
            <p
              className="text-[#DC143C] text-[10px] font-display font-bold tracking-[0.35em] uppercase mb-4"
              style={{
                textShadow:
                  "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              WHO WE ARE
            </p>
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight uppercase mb-8">
              Founded on Institutional Knowledge.
              <br />
              <span className="text-[#4A4A4A]">
                Built for Industrial-Scale Execution.
              </span>
            </h2>

            <div className="space-y-6 text-[#9A9A9A] font-body text-base leading-relaxed">
              <p>
                Bahasa Holdings was established by former Eskom Configuration
                Management professionals who understand the operational demands,
                compliance frameworks, and documentation standards of South
                Africa's largest power utility. With over a decade of active
                project experience across Eskom's Mpumalanga fleet, we maintain
                the integrity of your Plant Breakdown Structure across the full
                asset lifecycle — from initial KKS code assignment through
                physical label installation and ongoing records management.
              </p>
              <p>
                Our work is not advisory. We operate on-site, alongside your
                engineering and maintenance teams, delivering tangible outputs:
                correctly coded assets, compliant labels installed to
                specification, and documentation packages that withstand audit
                scrutiny.
              </p>
            </div>
          </div>

          {/* Right — logo card (mobile: second; desktop: right) */}
          <div className="order-2 flex items-center justify-center">
            <div
              className="w-full max-w-sm bg-[#1A1A1A] border border-[#2A2A2A] p-12 md:p-14 flex flex-col items-center justify-center"
              data-ocid="who_we_are.logo_card"
            >
              {/* Logo cube — large, white variant on dark bg */}
              <BahasaLogo
                variant="white"
                size="lg"
                showWordmark={false}
                className="mb-6"
              />
              {/* Wordmark */}
              <p className="font-display font-black text-white text-xl tracking-widest uppercase text-center">
                Bahasa Holdings
              </p>
              <p className="font-body text-[#4A4A4A] text-xs tracking-wider uppercase text-center mt-2">
                Configuration Management
              </p>
              {/* Registration — label + number */}
              <div className="mt-8 pt-6 border-t border-[#2A2A2A] w-full text-center">
                <p className="font-display text-[#4A4A4A] text-[9px] tracking-[0.25em] uppercase mb-1">
                  Reg. No.
                </p>
                <p
                  className="font-display text-[#DC143C] text-sm tracking-[0.15em] font-semibold"
                  style={{
                    textShadow:
                      "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  2018/544818/07
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
