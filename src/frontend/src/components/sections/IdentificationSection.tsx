import { Cable, Filter } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

// ─────────────────────────────────────────────
// Cable Numbers data
// ─────────────────────────────────────────────
const cableStructure = [
  {
    code: "10CXA",
    bg: "#DC143C",
    text: "#fff",
    label: "KKS System Code (source/destination, alphabetically first)",
  },
  {
    code: "4001",
    bg: "#4A4A4A",
    text: "#fff",
    label: "Sequential Number (voltage class: 4001–5999 = Control ≤60V DC)",
  },
  {
    code: "BB",
    bg: "#2A2A2A",
    text: "#D1D5DB",
    label: "F1/F2 Function of Source/Destination",
  },
  {
    code: "CC",
    bg: "#2A2A2A",
    text: "#D1D5DB",
    label: "Contractor Design Reference",
  },
];

const cableExamples = [
  {
    from: "10BBA02 (6kV Incoming Feeder)",
    to: "10BBT01 (LV Auxiliary Transformer)",
    cable: "10BBA 0027",
    type: "AC Power >1kV",
  },
  {
    from: "10BEF00.G01 (LV Switchgear)",
    to: "10HFC01 AP002 (Drive)",
    cable: "10BEF 1096",
    type: "AC Power ≤1kV",
  },
  {
    from: "10CDA14.AA096 (Control Cabinet)",
    to: "10BBA06.B02 (LV Switchgear)",
    cable: "10BBA 4120",
    type: "Control ≤60V DC",
  },
  {
    from: "10UMA07 GB0C1 (Junction Box)",
    to: "10CDA14.HA130 (Control Cabinet)",
    cable: "10CDA 5260",
    type: "Control ≤60V DC",
  },
];

const cableRanges = [
  { range: "0001–0999", desc: "AC Power Cables >1kV", example: "e.g. 400kV" },
  {
    range: "1001–1999",
    desc: "AC Power Cables ≤1kV",
    example: "e.g. 230/400V",
  },
  { range: "2001–2499", desc: "DC Power Cables", example: "110V or 220V DC" },
  {
    range: "2501–3999",
    desc: "Control Cables >60V DC",
    example: "110/220V DC control",
  },
  { range: "4001–5999", desc: "Control Cables ≤60V DC", example: "24V DC" },
  { range: "6001–6999", desc: "Measuring Cables", example: "CT/VT" },
  {
    range: "7001–7999",
    desc: "Measuring Cables",
    example: "Pt100, vibration, ultra-sensor",
  },
  { range: "8001–8999", desc: "Communication Cables", example: "48V DC" },
  { range: "9001–9999", desc: "Special Cables", example: "Fibre optic, coax" },
];

// ─────────────────────────────────────────────
// Ferriferial Numbers data
// ─────────────────────────────────────────────
const ferrStructure = [
  {
    code: "10",
    bg: "#DC143C",
    text: "#fff",
    label: "Plant Unit (e.g. Unit 10)",
  },
  {
    code: "PAC",
    bg: "#4A4A4A",
    text: "#fff",
    label: "System Code (e.g. PAC = Cooling Water)",
  },
  {
    code: "10",
    bg: "#2A2A2A",
    text: "#D1D5DB",
    label: "Subsystem Number",
  },
  {
    code: "GF",
    bg: "#2A2A2A",
    text: "#D1D5DB",
    label: "Component Type (e.g. GF = Pipe Segment)",
  },
  {
    code: "001",
    bg: "#2A2A2A",
    text: "#D1D5DB",
    label: "Sequential Item Number",
  },
];

const ferrExamples = [
  {
    kks: "10 UA24 G001 KT01",
    desc: "Potable Water Sand Filter No. 4",
    system: "Auxiliary Water (UA)",
    tag: "Aluminium engraved plate",
  },
  {
    kks: "10 PAC 10 GF 001",
    desc: "Cooling Water Return DN150, CS",
    system: "Cooling Water (PAC)",
    tag: "SS engraved + colour band",
  },
  {
    kks: "10 LAB 10 AA 001",
    desc: "Feedwater Isolation Valve No. 1",
    system: "Feedwater System (LAB)",
    tag: "SS engraved tag",
  },
  {
    kks: "10 LCA 20 AA 005",
    desc: "Condensate Extraction Valve No. 5",
    system: "Condensate (LCA)",
    tag: "SS engraved tag",
  },
  {
    kks: "10 QEA 10 AA 003",
    desc: "Chemical Dosing Line Valve No. 3",
    system: "Chemical Dosing (QEA)",
    tag: "Fibreglass label",
  },
];

const ferrCodes = [
  { code: "LAB", desc: "Feedwater System (boiler feed, high pressure)" },
  { code: "LCA", desc: "Condensate Extraction System" },
  { code: "PAC", desc: "Cooling Water Circuit (closed loop)" },
  { code: "PAB", desc: "Raw/Service Water System" },
  { code: "UA", desc: "Auxiliary Water Systems (potable, fire)" },
  { code: "QEA", desc: "Chemical Dosing & Treatment" },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function CodeSegment({
  code,
  bg,
  color,
  label,
}: {
  code: string;
  bg: string;
  color: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className="font-mono font-bold text-base px-3 py-2 rounded tracking-widest border border-white/10 min-w-[52px] text-center"
        style={{ backgroundColor: bg, color }}
      >
        {code}
      </span>
      <span className="text-[10px] text-[#9CA3AF] font-body text-center leading-tight max-w-[90px]">
        {label}
      </span>
    </div>
  );
}

function DarkTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded border border-[#DC143C]/20">
      <table className="w-full text-xs font-body">
        <thead>
          <tr className="bg-[#DC143C]/15 border-b border-[#DC143C]/30">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3 py-2.5 text-left text-[#DC143C] font-display font-bold tracking-wider uppercase whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={row[0]}
              className={`border-b border-[#1F1F1F] ${
                ri % 2 === 0 ? "bg-[#111111]" : "bg-[#161616]"
              }`}
            >
              {row.map((cell) => (
                <td
                  key={cell}
                  className="px-3 py-2.5 text-[#D1D5DB] font-mono leading-snug"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────
export function IdentificationSection() {
  return (
    <section
      id="identification"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#111111" }}
      data-ocid="identification.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <p
            className="text-xs font-display font-bold tracking-[0.3em] uppercase mb-5"
            style={{
              color: "#DC143C",
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Technical Reference
          </p>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl uppercase leading-none tracking-tight">
            PLANT IDENTIFICATION SYSTEMS WE MANAGE
          </h2>
          <div
            className="mx-auto mt-5 h-[3px] w-20 rounded"
            style={{ backgroundColor: "#DC143C" }}
          />
          <p className="mt-5 text-[#9CA3AF] font-body text-sm max-w-2xl mx-auto">
            Every cable, pipe, valve, and vessel at an Eskom power station
            carries a unique KKS identifier. Bahasa Holdings administers,
            verifies, and physically installs these identification systems to
            VGB and Eskom standards.
          </p>
        </motion.div>

        {/* Two panels */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* ── PANEL 1: CABLE NUMBERS ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border p-6 sm:p-8 flex flex-col gap-7"
            style={{
              backgroundColor: "#1A1A1A",
              borderColor: "rgba(220,20,60,0.3)",
            }}
            data-ocid="identification.cable_panel"
          >
            {/* Panel title */}
            <div className="flex items-center gap-3">
              <span
                className="p-2 rounded"
                style={{ backgroundColor: "rgba(220,20,60,0.15)" }}
              >
                <Cable size={22} style={{ color: "#DC143C" }} />
              </span>
              <div>
                <h3 className="font-display font-black text-white text-xl uppercase tracking-wider">
                  CABLE NUMBERS
                </h3>
                <p
                  className="text-xs font-body mt-0.5"
                  style={{
                    color: "#DC143C",
                    textShadow:
                      "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  VGB KKS Standard — Eskom Certified
                </p>
              </div>
            </div>

            {/* Intro text */}
            <p
              className="text-sm font-body leading-relaxed"
              style={{ color: "#D1D5DB" }}
            >
              All cables at Eskom KKS power stations are numbered according to
              the VGB standard, using the KKS code of the source or destination
              equipment (whichever comes first alphabetically) as the
              classifying element, followed by a 4-digit sequential number. An
              optional 4-character suffix identifies the functional destination
              (BB) and the contractor responsible for cable design (CC).
            </p>

            {/* Code structure */}
            <div>
              <p
                className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#9CA3AF" }}
              >
                Code Structure
              </p>
              <div className="flex flex-wrap gap-x-1 gap-y-4 items-start">
                {cableStructure.map((seg, i) => (
                  <React.Fragment key={seg.code + seg.label}>
                    <CodeSegment
                      code={seg.code}
                      bg={seg.bg}
                      color={seg.text}
                      label={seg.label}
                    />
                    {i < cableStructure.length - 1 && (
                      <span className="text-[#4A4A4A] font-mono text-lg pt-1">
                        +
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div
                className="mt-5 p-3 rounded font-mono text-sm border"
                style={{
                  backgroundColor: "#0D0D0D",
                  borderColor: "#2A2A2A",
                  color: "#DC143C",
                }}
              >
                10CXA 4001 BBCC
                <span className="ml-3 text-[#4A4A4A] text-xs">
                  — complete cable number example
                </span>
              </div>
            </div>

            {/* Examples table */}
            <div>
              <p
                className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#9CA3AF" }}
              >
                Real Examples (Eskom KKS Standard)
              </p>
              <DarkTable
                headers={["From", "To", "Cable No.", "Type"]}
                rows={cableExamples.map((e) => [e.from, e.to, e.cable, e.type])}
              />
            </div>

            {/* Number ranges */}
            <div>
              <p
                className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#9CA3AF" }}
              >
                Cable Number Ranges
              </p>
              <ul className="space-y-1.5">
                {cableRanges.map((r) => (
                  <li
                    key={r.range}
                    className="flex items-start gap-2 text-xs font-body"
                  >
                    <span
                      className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: "#DC143C" }}
                    />
                    <span
                      className="font-mono"
                      style={{
                        color: "#DC143C",
                        textShadow:
                          "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {r.range}
                    </span>
                    <span style={{ color: "#D1D5DB" }}>{r.desc}</span>
                    <span style={{ color: "#6B7280" }}>({r.example})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note */}
            <p
              className="text-xs font-body italic border-t pt-4"
              style={{ color: "#6B7280", borderColor: "#2A2A2A" }}
            >
              UV-resistant PVC K-Type flexible cable markers fixed at both ends,
              inside cubicles and at field entry points. Stainless steel
              engraved markers used in corrosive environments.
            </p>
          </motion.div>

          {/* ── PANEL 2: FERRIFERIAL NUMBERS ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border p-6 sm:p-8 flex flex-col gap-7"
            style={{
              backgroundColor: "#1A1A1A",
              borderColor: "rgba(220,20,60,0.3)",
            }}
            data-ocid="identification.ferriferial_panel"
          >
            {/* Panel title */}
            <div className="flex items-center gap-3">
              <span
                className="p-2 rounded"
                style={{ backgroundColor: "rgba(220,20,60,0.15)" }}
              >
                <Filter size={22} style={{ color: "#DC143C" }} />
              </span>
              <div>
                <h3 className="font-display font-black text-white text-xl uppercase tracking-wider">
                  FERRIFERIAL NUMBERS
                </h3>
                <p
                  className="text-xs font-body mt-0.5"
                  style={{
                    color: "#DC143C",
                    textShadow:
                      "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  KKS Process-Related Identification — Ferrous Piping Systems
                </p>
              </div>
            </div>

            {/* Intro text */}
            <p
              className="text-sm font-body leading-relaxed"
              style={{ color: "#D1D5DB" }}
            >
              Ferriferial (ferrous/iron-bearing) piping and vessel systems are
              identified under the KKS process-related code. Each ferriferial
              line receives a unique code identifying the plant unit, system
              function, subsystem, component type, and sequential number —
              maintaining full traceability from P&amp;ID to physical
              installation.
            </p>

            {/* Code structure */}
            <div>
              <p
                className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#9CA3AF" }}
              >
                Code Structure
              </p>
              <div className="flex flex-wrap gap-x-1 gap-y-4 items-start">
                {ferrStructure.map((seg, i) => (
                  <React.Fragment key={seg.label}>
                    <CodeSegment
                      code={seg.code}
                      bg={seg.bg}
                      color={seg.text}
                      label={seg.label}
                    />
                    {i < ferrStructure.length - 1 && (
                      <span className="text-[#4A4A4A] font-mono text-lg pt-1">
                        +
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div
                className="mt-5 p-3 rounded font-mono text-sm border"
                style={{
                  backgroundColor: "#0D0D0D",
                  borderColor: "#2A2A2A",
                  color: "#DC143C",
                }}
              >
                10 PAC 10 GF 001
                <span className="ml-3 text-[#4A4A4A] text-xs">
                  — Unit 10 | Cooling Water | Pipe Segment | Item 001
                </span>
              </div>
            </div>

            {/* Examples table */}
            <div>
              <p
                className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#9CA3AF" }}
              >
                Real Examples (Eskom KKS Standard)
              </p>
              <DarkTable
                headers={["KKS Code", "Description", "System", "Tag Type"]}
                rows={ferrExamples.map((e) => [e.kks, e.desc, e.system, e.tag])}
              />
            </div>

            {/* System codes */}
            <div>
              <p
                className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#9CA3AF" }}
              >
                Common Ferriferial System Codes
              </p>
              <ul className="space-y-1.5">
                {ferrCodes.map((c) => (
                  <li
                    key={c.code}
                    className="flex items-start gap-2 text-xs font-body"
                  >
                    <span
                      className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: "#DC143C" }}
                    />
                    <span
                      className="font-mono font-bold"
                      style={{
                        color: "#DC143C",
                        textShadow:
                          "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {c.code}
                    </span>
                    <span style={{ color: "#D1D5DB" }}>— {c.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note */}
            <p
              className="text-xs font-body italic border-t pt-4"
              style={{ color: "#6B7280", borderColor: "#2A2A2A" }}
            >
              Labels on ferriferial piping include: stainless steel engraved
              tags, colour-banded pipes, directional flow arrows, and aluminium
              engraved plates for large vessels.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
