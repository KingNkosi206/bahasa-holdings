import { motion } from "motion/react";

const stats = [
  {
    stat: "10+",
    label: "Years of Configuration Management Experience",
    statStyle: "text-[#DC143C]",
  },
  {
    stat: "100%",
    label: "Eskom-Standard KKS Compliance on Every Project",
    statStyle: "text-[#DC143C]",
  },
  {
    stat: "End-to-End",
    label: "From KKS Code Assignment to Physical Label Installation",
    statStyle: "text-white",
  },
];

const advantages = [
  {
    title: "Expert Project Execution",
    body: "Our teams have delivered Configuration Management and plant labelling projects across multiple Eskom generating units simultaneously. We understand site access protocols, outage-window constraints, and the multi-discipline coordination that large-scale CM projects demand.",
  },
  {
    title: "In-House CM Expertise",
    body: "Unlike generalist contractors, our core team comprises specialists with direct Eskom Configuration Management backgrounds. We apply the same standards, tools, and documentation frameworks used by the utility itself — with no learning curve.",
  },
  {
    title: "Large-Scale Project Capability",
    body: "From individual unit audits to station-wide KKS database rebuilds and full plant labelling campaigns, we have the capacity and methodology to execute complex, multi-phase CM projects without compromising standards or schedule.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="text-[#DC143C] text-xs font-semibold uppercase tracking-[0.2em] font-display"
            style={{
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Why Bahasa Holdings
          </span>
        </motion.div>

        {/* Stat boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              data-ocid={`why-choose.stat.${index + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-[#2A2A2A] border-l-4 border-l-[#DC143C] rounded-lg px-6 py-8 flex flex-col gap-2"
            >
              <span
                className={`font-display font-black text-5xl leading-none tracking-tight ${item.statStyle}`}
              >
                {item.stat}
              </span>
              <span className="text-white/80 font-body text-sm leading-relaxed mt-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Advantage cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((card, index) => (
            <motion.div
              key={card.title}
              data-ocid={`why-choose.advantage.${index + 1}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 flex flex-col gap-3"
            >
              <h3 className="font-display font-bold text-white text-lg leading-snug">
                {card.title}
              </h3>
              <p className="text-[#4A4A4A] font-body text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
