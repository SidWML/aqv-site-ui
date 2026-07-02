import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "system", nav: "The System", num: "02", eyebrow: "THE ANCHOR",
    title: "South Asia's first on-prem", accent: "IBM Quantum System.",
    body: [
      "IBM Quantum System Two, built around the 133-qubit Heron processor, is the differentiator at the centre of AQV — the most advanced quantum system in India, deployed on Indian soil.",
      "U.S. export clearance was granted in June 2026, with deployment scheduled for December 2026. It gives researchers, startups and enterprises direct access to utility-scale quantum hardware.",
    ],
    image: "/images/s7.png",
  },
  {
    kind: "features", id: "stack", nav: "The Stack", num: "03", eyebrow: "THE HARDWARE STACK",
    title: "A sovereign hardware", accent: "supply chain.",
    lead: "System Two anchors a growing domestic stack — from cryogenics to control electronics.",
    items: [
      { title: "Cryogenic platforms", desc: "Dilution refrigerators including India's first indigenous sub-4 Kelvin fridge at 3.98 K.", icon: "M12 3 V21 M8 7 L12 5 L16 7 M8 12 H16 M8 17 L12 19 L16 17" },
      { title: "Control electronics", desc: "Room-temperature control and readout electronics for scaling qubit counts.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21" },
      { title: "Fabrication & packaging", desc: "Device fabrication and packaging built out toward a domestic hardware capability.", icon: "M9 3 H15 M10 3 V9 L5 19 c-0.5 1 0.3 2 1.4 2 H17.6 c1.1 0 1.9-1 1.4-2 L14 9 V3" },
    ],
  },
  {
    kind: "media", id: "access", nav: "Access", num: "04", eyebrow: "USING THE HARDWARE",
    title: "Real machine time, not a", accent: "simulator.",
    image: "/images/s6/c1.png", flip: true,
    body: ["Access is structured so that projects with real workloads get real time on the system."],
    bullets: [
      { t: "Priority allocations", d: "Dedicated windows for funded research, startups and enterprise pilots." },
      { t: "On-prem, in-country", d: "Data and workloads stay in India — sovereign by design." },
      { t: "IBM co-development", d: "Joint tooling and benchmarking with IBM Quantum." },
    ],
    link: { href: "/infrastructure", label: "EXPLORE THE INFRASTRUCTURE" },
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "The machine, in", accent: "figures.",
    items: [
      { value: "133", label: "Qubit Heron processor" },
      { value: "3.98 K", label: "Indigenous refrigerator" },
      { value: "Jun 2026", label: "U.S. export cleared" },
      { value: "Dec 2026", label: "Deployment" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "TECHNOLOGY · HARDWARE & SYSTEMS",
        title: "The most advanced quantum",
        accent: "system in India.",
        lead: "IBM Quantum System Two, indigenous cryogenics and a growing domestic supply chain — the hardware that anchors the valley.",
        image: "/images/s7.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "GET TIME ON THE MACHINE",
        title: "Run on System",
        accent: "Two.",
        lead: "Fellowships, startup access and enterprise pilots — all built around on-prem quantum hardware.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/technology/software", label: "THE SOFTWARE LAYER" },
      }}
    />
  );
}
