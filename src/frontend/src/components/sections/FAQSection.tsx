import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  category: "kks" | "cm" | "labelling" | "process";
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: "kks",
    question:
      "What is the KKS identification system and why is it used at Eskom?",
    answer:
      "The Kraftwerk-Kennzeichensystem (KKS) is a VGB-standard plant identification system adopted by Eskom across all its KKS-coded power stations. It provides a structured, hierarchical code for every system, equipment item, and component in a power plant \u2014 from the total plant (BDL 0) down to individual components (BDL 3). Eskom uses KKS because it eliminates ambiguity in asset identification, ensures one-to-one correlation between physical plant items and engineering documentation (P&IDs, single-line diagrams, equipment lists), and underpins configuration management, maintenance, and SAP integration.",
  },
  {
    category: "kks",
    question: "How is a KKS code structured? Can you give an example?",
    answer:
      "A KKS process-related code is built across four Breakdown Levels (BDL 0\u20133). Example: 10 MAV 10 AA 001. Here \u201810\u2019 is BDL 0 (Unit 1 of a coal power station); \u2018MAV\u2019 is BDL 1 (the Main Steam system); \u201810\u2019 is the system numbering element (first main steam path); \u2018AA\u2019 is BDL 2 (equipment function \u2014 a valve); and \u2018001\u2019 is BDL 3 (first valve in that function group). Eskom applies this structure to mechanical, electrical, civil, and C&I disciplines with discipline-specific classification tables aligned to the VGB-B 106 application commentaries.",
  },
  {
    category: "kks",
    question:
      "What is the difference between a process-related code, a point-of-installation code, and a location code?",
    answer:
      "KKS defines three code types used together or independently. The process-related code (e.g. 10MAV10AA001) identifies what the item is \u2014 its function within a process system. The point-of-installation code identifies where an electrical or C&I device is physically mounted (e.g. inside a panel or cabinet). The location code identifies the structural location \u2014 building, floor, room, or fire zone. On a typical Eskom label, the process-related code is the primary identifier, with the location code used for cable routing, rack numbering (Ferriferial), and fire-barrier documentation.",
  },
  {
    category: "cm",
    question: "What is Configuration Management in a power station context?",
    answer:
      "Configuration Management (CM) in power generation is the discipline that ensures the physical plant always matches its approved design basis \u2014 the engineering drawings, equipment lists, technical specifications, and operating procedures. It tracks every change to plant items from commissioning through operations and maintenance, maintaining a verified and auditable baseline. Eskom\u2019s CM framework covers plant identification (KKS coding), design documentation control, engineering change management, and physical label installation \u2014 all of which Bahasa Holdings delivers as an integrated service.",
  },
  {
    category: "cm",
    question:
      "What is a Plant Breakdown Structure (PBS) and why does it matter?",
    answer:
      "The Plant Breakdown Structure is the hierarchical decomposition of a power station into its constituent systems, sub-systems, equipment units, and components \u2014 structured using the KKS hierarchy. It is the backbone of all CM activities: it drives the equipment list, defines the scope of maintenance strategies in SAP PM, determines label requirements, and establishes the document linkage model. An incomplete or incorrect PBS results in unlabelled plant, missing maintenance records, and failed compliance audits. Bahasa Holdings builds, verifies, and maintains PBS structures for full-station and outage-scope projects.",
  },
  {
    category: "cm",
    question:
      "What is Engineering Change Management and how does it affect plant labelling?",
    answer:
      "Engineering Change Management (ECM) is the formal process for evaluating, approving, implementing, and closing out changes to plant design. Every approved engineering change that results in a new, removed, or modified physical item triggers a labelling update \u2014 new KKS codes must be allocated, existing labels updated or replaced, and the corresponding drawings and equipment lists revised. Bahasa Holdings provides VDSS-to-MDL (Vendor Data Submission Schedule to Master Document List) comparison, change scope analysis, and complete post-change label installation with audit evidence.",
  },
  {
    category: "labelling",
    question:
      "What types of plant labels does Bahasa Holdings supply and install?",
    answer:
      "Bahasa Holdings supplies and installs the full spectrum of labels required by Eskom\u2019s KKS Coding and Labelling Standard (240-93576498): (1) Engraved aluminium tags \u2014 for instrument and equipment identification in standard environments; (2) Stainless steel engraved tags \u2014 for corrosive, chemical, or outdoor environments; (3) Painted concrete structure markings \u2014 stencilled identification on civil structures, clarifiers, and large concrete vessels; (4) Large vessel identification boards \u2014 fabricated steel or aluminium boards for tanks, columns, and process vessels; (5) Cable identification tags \u2014 K-type UV-resistant PVC marker carriers on both cable ends, attached with T18R or T30R cable ties.",
  },
  {
    category: "labelling",
    question:
      "How does Bahasa Holdings ensure label compliance with Eskom standards?",
    answer:
      "Every label supplied and installed by Bahasa Holdings conforms to the applicable Eskom KKS Coding and Labelling Standard. Our process starts with an approved equipment list or updated PBS \u2014 we do not manufacture labels from unapproved codes. Spacing conventions in KKS numbers are preserved on physical labels. Material selection follows environmental zone requirements. Before installation, a pre-installation walkdown verifies mounting locations against P&IDs and single-line diagrams. Post-installation verification confirms one-to-one correlation between physical item, label, drawing, and equipment list, documented with photographic evidence for audit purposes.",
  },
  {
    category: "labelling",
    question: "What is a Plant Walkdown Audit and what does it verify?",
    answer:
      "A Plant Walkdown Audit (also called a Design Base Verification) is a physical inspection of plant items against their engineering design basis. Bahasa Holdings verifies: (1) each physical item has a label matching the approved KKS code; (2) the label condition is legible and properly fixed; (3) the KKS code on the label matches the code on the applicable P&ID, single-line diagram, or equipment list; and (4) discrepancies are captured in a Configuration Notification register for corrective action. Walkdown deliverables include a gap analysis report, updated status accounting records, and photographic evidence.",
  },
  {
    category: "process",
    question:
      "How does Bahasa Holdings prevent duplicate KKS codes being assigned?",
    answer:
      "Duplicate code prevention is managed through the Master KKS Database, which Bahasa Holdings administers and maintains as a central, version-controlled register. Before any new code is allocated, a uniqueness check is performed against the existing database. For cable numbers, the VGB sequential counting rules (four-digit NNNN grouped by voltage application) are strictly applied, and an optional BBCC classification suffix is appended where additional differentiation is required. All new code allocations are logged with their originating change reference, preventing the same code from being issued to multiple plant items.",
  },
  {
    category: "process",
    question:
      "What documentation does Bahasa Holdings deliver at project close-out?",
    answer:
      "At project close-out, Bahasa Holdings delivers a structured documentation package including: updated equipment lists (with all new KKS codes and descriptions); as-installed label registers with photographic evidence; revised P&IDs and single-line diagrams; updated cable schedules with accurate From/To details; a Configuration Notification close-out register confirming all discrepancies are resolved; and a Configuration Status Accounting report validating that physical plant matches the approved design baseline. All documents are issued with revision control and are EDMS-ready.",
  },
  {
    category: "process",
    question:
      "Can Bahasa Holdings support data migration to SAP or other CM tools?",
    answer:
      "Yes. Bahasa Holdings has direct experience in data preparation, validation, and migration to site-specific Configuration Management and asset management platforms including SAP PM. Our data migration service includes source data extraction and clean-up, KKS code normalisation against the Master Database, PBS hierarchy validation, and structured data loading with integrity checks. We also handle the decommissioning or archiving of legacy codes, ensuring the target system reflects only current, valid plant configuration without carrying forward historic errors or duplicates.",
  },
];

const CATEGORIES: { id: FaqItem["category"] | "all"; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "kks", label: "KKS Coding" },
  { id: "cm", label: "Configuration Mgmt" },
  { id: "labelling", label: "Plant Labelling" },
  { id: "process", label: "Process & Docs" },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<
    FaqItem["category"] | "all"
  >("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === activeCategory);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#0D0D0D]"
      data-ocid="faq.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[#DC143C] text-[10px] font-display font-bold tracking-[0.35em] uppercase mb-4"
            style={{
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Technical Q&amp;A
          </p>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-[#6A6A6A] text-base max-w-2xl leading-relaxed">
            Expert answers about KKS Implementation, Configuration Management
            practice, and plant labelling requirements at Eskom power stations.
          </p>
        </div>

        {/* Category filter */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="FAQ categories"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-[10px] font-display font-bold tracking-[0.2em] uppercase transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-[#DC143C] border-[#DC143C] text-white"
                  : "bg-transparent border-[#2A2A2A] text-[#4A4A4A] hover:border-[#4A4A4A] hover:text-[#9A9A9A]"
              }`}
              data-ocid={`faq.filter.${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-2" data-ocid="faq.list">
          {filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`border transition-colors duration-200 ${
                  isOpen
                    ? "border-[#DC143C] bg-[#111111]"
                    : "border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#3A3A3A]"
                }`}
                data-ocid={`faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full text-left px-6 py-5 flex items-start gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  data-ocid={`faq.toggle.${i + 1}`}
                >
                  <span
                    className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#DC143C]"
                    aria-hidden="true"
                  />
                  <span className="flex-1 font-display font-bold text-white text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 text-[#DC143C] text-xl leading-none transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                    borderLeft: isOpen
                      ? "3px solid #DC143C"
                      : "3px solid transparent",
                  }}
                >
                  <div className="px-6 pb-6 pl-10 font-body text-[#9A9A9A] text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-body text-[#4A4A4A] text-sm">
            Have a technical question not covered here?
          </p>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 bg-[#DC143C] hover:bg-[#A50E2D] text-white font-display font-bold text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 cta-btn"
            style={{ boxShadow: "0 4px 15px rgba(220,20,60,0.4)" }}
            data-ocid="faq.contact_cta_button"
          >
            SPEAK TO OUR TEAM
          </button>
        </div>
      </div>
    </section>
  );
}
