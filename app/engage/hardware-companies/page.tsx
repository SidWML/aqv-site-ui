import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "why", nav: "Why AQV", num: "02", eyebrow: "FOR HARDWARE BUILDERS",
    title: "Build quantum hardware where the", accent: "stack already lives.",
    body: [
      "Hardware companies need more than office space — they need cryogenics, cleanrooms, fabrication and characterisation, and neighbours who understand the physics. AQV puts all of it in one place.",
      "Whether you build cryogenics, control electronics, components or full systems, the valley is designed to shorten your path from prototype to product.",
    ],
    image: "/images/s6/c4.png",
  },
  {
    kind: "features", id: "offer", nav: "What You Get", num: "03", eyebrow: "WHAT YOU GET",
    title: "Everything a hardware company", accent: "needs.",
    lead: "Shared infrastructure, a supply chain and access to real quantum hardware.",
    items: [
      { title: "Shared fabrication", desc: "Cleanroom, deposition and packaging without building your own line.", icon: "M9 3 H15 M10 3 V9 L5 19 c-0.5 1 0.3 2 1.4 2 H17.6 c1.1 0 1.9-1 1.4-2 L14 9 V3" },
      { title: "Cryogenics on tap", desc: "Access to sub-4 Kelvin platforms for testing and characterisation.", icon: "M12 3 V21 M8 7 L12 5 L16 7 M8 12 H16 M8 17 L12 19 L16 17" },
      { title: "A domestic supply chain", desc: "Co-locate with suppliers, integrators and System Two itself.", icon: "M4 20 H20 M6 20 V10 H10 V20 M14 20 V6 H18 V20" },
    ],
  },
  {
    kind: "list", id: "path", nav: "The Path", num: "04", eyebrow: "HOW TO ESTABLISH",
    title: "From arrival to", accent: "production.",
    items: [
      { num: "01", title: "Establish", label: "LAND & SPACE", desc: "Move into purpose-built space with power, planning and connectivity ready." },
      { num: "02", title: "Access", label: "SHARED FACILITIES", desc: "Plug into cryogenics, fabrication and characterisation from day one." },
      { num: "03", title: "Integrate", label: "SUPPLY CHAIN", desc: "Connect with suppliers, integrators and System Two on the same campus." },
      { num: "04", title: "Scale", label: "INCENTIVES & CAPITAL", desc: "Grow with state incentives and access to the AQV quantum fund." },
    ],
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "A place built to", accent: "build.",
    items: [
      { value: "500", label: "Acre campus" },
      { value: "₹500Cr+", label: "AQV quantum fund" },
      { value: "3.98 K", label: "Indigenous refrigerator" },
      { value: "25+", label: "Global partners" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="engage"
      hero={{
        eyebrow: "ENGAGE · BUILD AT AQV · HARDWARE",
        title: "Build quantum hardware in",
        accent: "the valley.",
        lead: "Shared cryogenics, fabrication and a domestic supply chain — plus access to IBM Quantum System Two. Everything a hardware company needs, in one place.",
        image: "/images/s6/c4.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "ESTABLISH AT AQV",
        title: "Set up your hardware company",
        accent: "here.",
        lead: "Talk to the ecosystem office about space, facilities and incentives.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/engage/software-companies", label: "FOR SOFTWARE COMPANIES" },
      }}
    />
  );
}
