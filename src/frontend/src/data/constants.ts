import type { GalleryImage, ServiceCard } from "@/types";

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/assets/img-02.jpg",
    alt: "Multiple precision-engraved aluminium instrument tags mounted on pipework",
    caption: "Aluminium tag fabrication and mounting",
  },
  {
    src: "/assets/img-03.jpg",
    alt: "Large vessel identification label with KKS code at Eskom power station",
    caption: "Large vessel KKS identification label",
  },
  {
    src: "/assets/img-04.jpg",
    alt: "Field technician installing large vessel identification label at power station",
    caption: "On-site vessel label installation",
  },
  {
    src: "/assets/img-05.jpg",
    alt: "Two Bahasa Holdings technicians installing large vessel identification board",
    caption: "Two-person vessel board installation crew",
  },
  {
    src: "/assets/img-06.jpg",
    alt: "Installed aluminium KKS identification tag on industrial pipe at Eskom facility",
    caption: "Aluminium KKS tag on process pipework",
  },
  {
    src: "/assets/img-07.jpg",
    alt: "Outdoor power station identification sign installed on structure",
    caption: "Structural identification signage",
  },
  {
    src: "/assets/img-08.jpg",
    alt: "Technician applying painted concrete structure marking at Eskom power station",
    caption: "Painted concrete structure marking",
  },
  {
    src: "/assets/img-09.jpg",
    alt: "Multiple aluminium KKS identification tags installed on industrial pipework cluster",
    caption: "Dense pipework KKS tagging",
  },
  {
    src: "/assets/img-10.jpg",
    alt: "Dense industrial pipework with comprehensive KKS identification tags",
    caption: "Full plant labelling — complex pipework zone",
  },
  {
    src: "/assets/img-11.jpg",
    alt: "Painted concrete structure marking on civil infrastructure at power station",
    caption: "Civil structure identification marking",
  },
  {
    src: "/assets/img-12.jpg",
    alt: "Two technicians installing large outdoor identification board at Eskom facility",
    caption: "Outdoor board installation — plant walkdown crew",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    title: "KKS Coding & Administration",
    description:
      "Development and maintenance of the Master KKS database. Duplicate code prevention, Plant Breakdown Structure management, and full KKS hierarchy governance across the asset lifecycle.",
    iconName: "Database",
  },
  {
    title: "Plant Labelling & Installation",
    description:
      "Supply and installation of all label types — stainless steel, engraved aluminium, painted concrete markings, and cable identification — in full compliance with site standards.",
    iconName: "Tag",
  },
  {
    title: "Plant Audit & Walkdown Verification",
    description:
      "Physical verification that KKS labelling corresponds with drawings, P&IDs, single line diagrams, and documentation packages. End-to-end audit trail delivered.",
    iconName: "ClipboardCheck",
  },
  {
    title: "Technical Document & Records Management",
    description:
      "Creation, update, and maintenance of equipment lists, MRI sets, load schedules, and document-to-PBS linking. Rigorous version control throughout.",
    iconName: "FileText",
  },
  {
    title: "Engineering Change Management",
    description:
      "Evaluation and management of engineering changes. VDSS-to-MDL comparison, status accounting and reporting, and full change lifecycle documentation.",
    iconName: "GitBranch",
  },
  {
    title: "Data Migration & Configuration Tools",
    description:
      "Data preparation, clean-up, and migration to site-specific Configuration Management tools. Structured handover with full data integrity validation.",
    iconName: "ArrowRightLeft",
  },
];
