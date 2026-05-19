import { SERVICES } from "@/data/constants";
import {
  ArrowRightLeft,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  Tag,
} from "lucide-react";
import type React from "react";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Database,
  Tag,
  ClipboardCheck,
  FileText,
  GitBranch,
  ArrowRightLeft,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#F5F5F5]"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="mb-14">
          <p
            className="text-[#DC143C] text-xs font-display font-bold tracking-[0.3em] uppercase mb-4"
            style={{
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            What We Do
          </p>
          <h2 className="font-display font-black text-[#0D0D0D] text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
            End-to-End Configuration Management Services
          </h2>
        </div>

        {/* Service cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 p-8 flex flex-col gap-5 hover:border-[#DC143C] hover:shadow-md transition-all duration-200 group"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] border border-gray-200 group-hover:border-[#DC143C] group-hover:bg-[#DC143C]/5 transition-colors duration-200">
                  {Icon && <Icon size={22} className="text-[#DC143C]" />}
                </div>
                <h3 className="font-display font-bold text-[#0D0D0D] text-base leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
