import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "why", nav: "Why AQV", num: "02", eyebrow: "FOR SOFTWARE BUILDERS",
    title: "Ship quantum software against", accent: "real hardware.",
    body: [
      "Quantum software is only as good as the hardware it runs on. AQV gives software companies direct access to IBM Quantum System Two and a hybrid HPC-quantum stack — not just simulators.",
      "Build algorithms, tooling, error mitigation or full applications, and validate them on utility-scale hardware from the first week.",
    ],
    image: "/images/s6/c5.png",
  },
  {
    kind: "features", id: "offer", nav: "What You Get", num: "03", eyebrow: "WHAT YOU GET",
    title: "A platform to build", accent: "on.",
    lead: "Open tooling, hybrid compute and a research community around you.",
    items: [
      { title: "Real hardware access", desc: "Structured time on System Two, not simulator-only development.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21" },
      { title: "Hybrid HPC-quantum", desc: "Run classical and quantum steps as one workload across coupled compute.", icon: "M6 6 a2 2 0 1 0 0.01 0 M18 6 a2 2 0 1 0 0.01 0 M12 18 a2 2 0 1 0 0.01 0 M7 7 L11 16 M17 7 L13 16 M8 6 H16" },
      { title: "Open, standards-aligned", desc: "Build on widely-used open quantum SDKs — portable, not locked in.", icon: "M8 8 L4 12 L8 16 M16 8 L20 12 L16 16 M13 6 L11 18" },
    ],
  },
  {
    kind: "list", id: "path", nav: "The Path", num: "04", eyebrow: "HOW TO ENGAGE",
    title: "From onboarding to", accent: "product.",
    items: [
      { num: "01", title: "Onboard", label: "ACCESS & TOOLING", desc: "Get credentials, tooling and structured access to hybrid compute." },
      { num: "02", title: "Prototype", label: "ON REAL HARDWARE", desc: "Validate on System Two with support from AQV research teams." },
      { num: "03", title: "Integrate", label: "INTO ENTERPRISE", desc: "Wire quantum steps into enterprise pipelines and pilots." },
      { num: "04", title: "Scale", label: "CAPITAL & MARKET", desc: "Grow with the launchpad, the quantum fund and ecosystem customers." },
    ],
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "A software ecosystem, in", accent: "figures.",
    items: [
      { value: "133", label: "Qubit hardware access" },
      { value: "40+", label: "Software collaborators" },
      { value: "₹500Cr+", label: "AQV quantum fund" },
      { value: "Open", label: "Standards-aligned stack" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="engage"
      hero={{
        eyebrow: "ENGAGE · BUILD AT AQV · SOFTWARE",
        title: "Build quantum software in",
        accent: "the valley.",
        lead: "Direct access to IBM Quantum System Two, a hybrid HPC-quantum stack and open tooling — for companies building the software layer of the quantum era.",
        image: "/images/s6/c5.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "ENGAGE WITH AQV",
        title: "Build your software company",
        accent: "here.",
        lead: "Talk to the ecosystem office about access, tooling and support.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/engage/hardware-companies", label: "FOR HARDWARE COMPANIES" },
      }}
    />
  );
}
