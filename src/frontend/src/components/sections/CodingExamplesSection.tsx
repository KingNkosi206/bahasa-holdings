import { useState } from "react";

// ─── Cable Number examples from official Eskom KKS Coding Standard (240-93576498) ───
const CABLE_EXAMPLES = [
  {
    code: "10CXA 4001",
    from: "Unit 1 LV Control Cubicle (10CXA)",
    to: "Local Control Panel",
    type: "Control cable \u226460V DC (24V DC control)",
    material: "K-type UV-resistant PVC cable marker, T18R cable tie",
    note: "Prefix 10 = Unit 1, CXA = LV auxiliary control; '4' series = \u226460V DC control cables (4001\u20135999). Bidirectional cable assigned to whichever KKS code appears first alphabetically.",
  },
  {
    code: "10BBA 0027",
    from: "6kV Incoming Feeder \u2013 10BBA02",
    to: "LV Auxiliary Power Transformer \u2013 10BBT01 GT002",
    type: "AC power cable >1kV (6kV HV switchgear)",
    material: "Stainless steel engraved tag (corrosive/outdoor zone)",
    note: "BBA = 6kV switchgear system; '0' series = HV power cables >1kV (0001\u20130999). Stainless steel markers required in chemical and outdoor environments per Eskom standard.",
  },
  {
    code: "10BEF 1096",
    from: "LV Switchgear 10BEF00.G01",
    to: "Drive 10HFC01 AP002",
    type: "AC power cable \u22641kV (400V/230V AC supply)",
    material: "K-type flexible cable marker, T18R cable tie",
    note: "BEF = LV switchboard; '1' series = \u22641kV AC supply cables (1001\u20131999). Numbered sequentially from a central Cable Database to prevent duplication across contractors.",
  },
  {
    code: "10CDA 5260",
    from: "Junction Box 10UMA07 GB0C1",
    to: "Control Interface Cabinet 10CDA14.HA130",
    type: "Control cable \u226460V DC (24V DC instrument loop)",
    material: "K-type flexible cable marker, T30R cable tie",
    note: "CDA = C&I control interface; '5' series = 24V DC process control cables (4501\u20135999). Optional BBCC classification suffix appended when additional differentiation is required.",
  },
  {
    code: "10LCA20 AA005",
    from: "Field Transmitter 10LCA20 FT001",
    to: "C&I Marshalling Cabinet 10LAA10 AA001",
    type: "Measuring cable \u2013 Pt100 / 4\u201320mA instrument loop",
    material: "Aluminium engraved tag, stainless wire fixed",
    note: "LCA = level measurement system; '7' series (7001\u20137999) covers Pt100, vibration, and ultra-sensor measuring cables. Engraved aluminium used in outdoor measurement zones.",
  },
  {
    code: "10PAC10 8001",
    from: "PLC Remote I/O Rack 10PAC10",
    to: "SCADA Server Cabinet 10LAA50",
    type: "Communication cable \u2013 48V DC fibre-optic backbone",
    material: "Heat-shrink printed label + K-type marker",
    note: "PAC = process automation cabinet; '8\u20139' series = communication and special cables (fibre-optic, coax, 48V DC). Network cables require additional contractor classification BBCC suffix.",
  },
];

// ─── Ferriferial Number examples ──────────────────────────────────────────────────
const FERRIFERIAL_EXAMPLES = [
  {
    code: "10 UA24 G001 KT01",
    location: "Unit 1 Auxiliary Water \u2014 Potable Water Sand Filter 4",
    type: "Process Equipment KKS Code (Vessel/Filter)",
    label: "Aluminium engraved plate (large vessel board)",
    note: "UA = auxiliary water systems; 24 = potable water sub-system; G001 = first filter vessel; KT01 = filter component type. This code was seen in actual field installations at Eskom power stations.",
  },
  {
    code: "10 PAC 10 GF 001",
    location: "Unit 1 \u2014 Cooling Water Return DN150, CS Pipe Segment",
    type: "Process Piping Segment (Ferrous/Carbon Steel)",
    label: "SS engraved tag + directional flow arrow + colour band",
    note: "PAC = closed-loop cooling water circuit; GF = pipe/line component; 001 = first segment. Ferriferial (ferrous) pipe segments require flow direction markings and material identification alongside the KKS tag.",
  },
  {
    code: "10 LAB 10 AA 001",
    location: "Unit 1 \u2014 Boiler Feedwater Isolation Valve No. 1",
    type: "Mechanical Equipment (High-Pressure Valve)",
    label: "SS engraved tag, stainless wire-fixed to valve body",
    note: "LAB = boiler feedwater system; 10 = main feedwater line; AA = valve/gate; 001 = first valve in this sub-system. Stainless steel tags mandatory for high-temperature and high-pressure environments.",
  },
  {
    code: "10 LCA 20 AA 005",
    location: "Unit 1 \u2014 Condensate Extraction Valve No. 5",
    type: "Mechanical Equipment (Condensate Valve)",
    label: "SS engraved tag",
    note: "LCA = condensate extraction system; 20 = condensate return line; AA = valve type; 005 = fifth valve in the group. Sequential numbering within a sub-system ensures every valve is uniquely and permanently identified.",
  },
  {
    code: "10 QEA 10 AA 003",
    location: "Unit 1 \u2014 Chemical Dosing Line Valve No. 3",
    type: "Process Valve (Chemical/Corrosive Duty)",
    label: "Fibreglass/chemical-resistant label",
    note: "QEA = chemical dosing and treatment system; AA = valve; 003 = third item. Fibreglass labels are used in chemical dosing areas where standard aluminium would corrode. Consistent KKS coding links this valve to the P&ID and chemical injection records.",
  },
  {
    code: "00 GKB 18 GK 001",
    location: "Common Plant \u2014 Potable Water Header Tank",
    type: "Common Plant Vessel (Shared Infrastructure)",
    label: "Large aluminium engraved vessel board",
    note: "Prefix 00 = common plant (shared across all units). GKB = auxiliary building services; 18 = potable water storage sub-system; GK = tank/vessel; 001 = first tank. Common plant ferriferial codes ensure shared infrastructure is not duplicated across unit numbering sequences.",
  },
];

type TabType = "cable" | "ferriferial";

export function CodingExamplesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("cable");
  const [expanded, setExpanded] = useState<number | null>(null);

  const examples =
    activeTab === "cable" ? CABLE_EXAMPLES : FERRIFERIAL_EXAMPLES;

  return (
    <section
      id="coding-examples"
      className="py-20 md:py-28 bg-[#111111]"
      data-ocid="coding_examples.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[#DC143C] text-[10px] font-display font-bold tracking-[0.35em] uppercase mb-4"
            style={{
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Technical Reference
          </p>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight uppercase max-w-4xl mb-4">
            Plant Identification Numbering Systems
          </h2>
          <p className="font-body text-[#6A6A6A] text-base max-w-2xl leading-relaxed">
            Bahasa Holdings administers two primary numbering systems used
            across Eskom power stations \u2014 the VGB-standard KKS Cable
            Numbering system and the KKS process-related Ferriferial (ferrous
            piping and vessel) identification codes. Both are critical to
            maintaining an accurate Plant Breakdown Structure.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-0 mb-10 border-b border-[#2A2A2A]"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cable"}
            onClick={() => {
              setActiveTab("cable");
              setExpanded(null);
            }}
            className={`px-6 py-3 text-xs font-display font-bold tracking-[0.25em] uppercase transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === "cable"
                ? "border-[#DC143C] text-[#DC143C]"
                : "border-transparent text-[#4A4A4A] hover:text-[#9A9A9A]"
            }`}
            data-ocid="coding_examples.cable_tab"
          >
            Cable Numbers
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "ferriferial"}
            onClick={() => {
              setActiveTab("ferriferial");
              setExpanded(null);
            }}
            className={`px-6 py-3 text-xs font-display font-bold tracking-[0.25em] uppercase transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === "ferriferial"
                ? "border-[#DC143C] text-[#DC143C]"
                : "border-transparent text-[#4A4A4A] hover:text-[#9A9A9A]"
            }`}
            data-ocid="coding_examples.ferriferial_tab"
          >
            Ferriferial Numbers
          </button>
        </div>

        {/* Context block */}
        <div className="mb-8 p-5 border-l-2 border-[#DC143C] bg-[#0D0D0D]">
          {activeTab === "cable" ? (
            <p className="font-body text-[#9A9A9A] text-sm leading-relaxed">
              <span
                className="text-[#DC143C] font-semibold"
                style={{
                  textShadow:
                    "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Cable Numbers
              </span>{" "}
              follow the VGB standard adopted by Eskom across all KKS-coded
              power stations. Structure:{" "}
              <span className="font-mono text-[#C8C8C8] text-xs bg-[#1A1A1A] px-1.5 py-0.5">
                NNAAA NNNN [BBCC]
              </span>{" "}
              \u2014 Unit + System code (Level 0), followed by a 4-digit
              counting number where the first digit identifies the
              voltage/application group. Cables are assigned the KKS code of
              whichever termination point appears earlier alphabetically.
            </p>
          ) : (
            <p className="font-body text-[#9A9A9A] text-sm leading-relaxed">
              <span
                className="text-[#DC143C] font-semibold"
                style={{
                  textShadow:
                    "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Ferriferial Numbers
              </span>{" "}
              are KKS process-related codes applied to ferrous piping, vessels,
              valves, and structural elements. Structure:{" "}
              <span className="font-mono text-[#C8C8C8] text-xs bg-[#1A1A1A] px-1.5 py-0.5">
                NN SYS NN XX NNN
              </span>{" "}
              \u2014 Unit prefix, system function code (F1F2F3), numbering
              element, component type (BDL 2), and sequential number. Physical
              labels must correlate with the applicable P&ID and equipment list
              for design base verification.
            </p>
          )}
        </div>

        {/* Examples grid \u2014 expandable cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          data-ocid="coding_examples.list"
        >
          {examples.map((ex, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={ex.code}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? "border-[#DC143C] bg-[#0D0D0D]"
                    : "border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#3A3A3A]"
                }`}
                data-ocid={`coding_examples.item.${i + 1}`}
              >
                {/* Card header \u2014 always visible */}
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left p-5 flex items-start justify-between gap-3"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-mono text-[#DC143C] font-bold text-base tracking-wider leading-none mb-2 truncate"
                      style={{
                        textShadow:
                          "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {ex.code}
                    </p>
                    <p className="font-body text-[#6A6A6A] text-xs leading-snug">
                      {activeTab === "cable"
                        ? (ex as (typeof CABLE_EXAMPLES)[0]).type
                        : (ex as (typeof FERRIFERIAL_EXAMPLES)[0]).type}
                    </p>
                  </div>
                  <span
                    className={`text-[#DC143C] text-lg leading-none mt-0.5 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="px-5 pb-5 space-y-3 border-t border-[#2A2A2A] pt-4">
                    {activeTab === "cable" ? (
                      <>
                        <DetailRow
                          label="From"
                          value={(ex as (typeof CABLE_EXAMPLES)[0]).from}
                        />
                        <DetailRow
                          label="To"
                          value={(ex as (typeof CABLE_EXAMPLES)[0]).to}
                        />
                        <DetailRow
                          label="Voltage / Application"
                          value={(ex as (typeof CABLE_EXAMPLES)[0]).type}
                        />
                        <DetailRow
                          label="Label Material"
                          value={(ex as (typeof CABLE_EXAMPLES)[0]).material}
                        />
                      </>
                    ) : (
                      <>
                        <DetailRow
                          label="Physical Location"
                          value={
                            (ex as (typeof FERRIFERIAL_EXAMPLES)[0]).location
                          }
                        />
                        <DetailRow
                          label="Element Type"
                          value={(ex as (typeof FERRIFERIAL_EXAMPLES)[0]).type}
                        />
                        <DetailRow
                          label="Label Type"
                          value={(ex as (typeof FERRIFERIAL_EXAMPLES)[0]).label}
                        />
                      </>
                    )}
                    <div className="pt-2 border-t border-[#2A2A2A]">
                      <p className="text-[9px] font-display font-bold text-[#4A4A4A] tracking-[0.2em] uppercase mb-1.5">
                        Technical Note
                      </p>
                      <p className="font-body text-[#9A9A9A] text-xs leading-relaxed">
                        {ex.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-8 font-body text-[#3A3A3A] text-xs leading-relaxed">
          * All numbering examples are based on publicly available Eskom KKS
          Coding Standards (Ref: 240-93576498, 348-630398). Bahasa Holdings
          applies these standards on-site in strict accordance with the current
          VGB-B 105 and VGB-B 106 guidelines.
        </p>
      </div>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] font-display font-bold text-[#4A4A4A] tracking-[0.2em] uppercase mb-0.5">
        {label}
      </p>
      <p className="font-body text-[#C8C8C8] text-xs leading-snug">{value}</p>
    </div>
  );
}
