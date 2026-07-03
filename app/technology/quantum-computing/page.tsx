import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "focus", nav: "Focus", num: "02", eyebrow: "THE DOMAIN",
    title: "Solving problems classical machines", accent: "cannot reach.",
    body: [
      "Quantum computing is the anchor domain of Amaravati Quantum Valley. Around IBM Quantum System Two we run a full programme in scalable quantum systems, error mitigation and utility-scale algorithms.",
      "Our teams work on the problems where quantum advantage is nearest — optimisation, simulation of molecules and materials, and machine learning — on real hardware rather than simulators alone.",
    ],
    image: "/images/s2.png",
  },
  {
    kind: "features", id: "capabilities", nav: "Capabilities", num: "03", eyebrow: "WHAT WE BUILD",
    title: "A working quantum computing", accent: "capability.",
    lead: "From the qubit up to the application layer — a stack our researchers and partners can actually run against.",
    items: [
      { title: "Utility-scale hardware", desc: "Hands-on time on a 133-qubit Heron processor, the most advanced quantum system in India.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21" },
      { title: "Algorithms & error mitigation", desc: "Near-term algorithms, circuit compilation and error-mitigation techniques tuned to real devices.", icon: "M8 8 L4 12 L8 16 M16 8 L20 12 L16 16 M13 6 L11 18" },
      { title: "Hybrid quantum-classical", desc: "HPC tightly coupled to the quantum stack so classical and quantum steps run as one workload.", icon: "M6 6 a2 2 0 1 0 0.01 0 M18 6 a2 2 0 1 0 0.01 0 M12 18 a2 2 0 1 0 0.01 0 M7 7 L11 16 M17 7 L13 16 M8 6 H16" },
    ],
  },
  {
    kind: "media", id: "access", nav: "Access", num: "04", eyebrow: "HOW YOU WORK WITH IT",
    title: "Direct access to the", accent: "machine.",
    image: "/images/s6/c1.png", flip: true,
    body: ["Researchers, startups and enterprise teams get structured access to the system — not a waiting list."],
    bullets: [
      { t: "Priority compute allocations", d: "Dedicated windows on System Two for funded projects and residencies." },
      { t: "Co-development with IBM", d: "Joint work on tooling, benchmarks and workloads with IBM Quantum." },
      { t: "Shared cryogenics & fabrication", d: "Dilution refrigerators and device fabrication open to every group." },
    ],
    link: { href: "/infrastructure", label: "EXPLORE THE INFRASTRUCTURE" },
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "A capability, made", accent: "measurable.",
    items: [
      { value: "133", label: "Qubit Heron processor" },
      { value: "3.98 K", label: "Indigenous refrigerator" },
      { value: "Dec 2026", label: "System Two deployment" },
      { value: "12+", label: "Active computing labs" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "RESEARCH DOMAIN · QUANTUM COMPUTING",
        title: "Computation beyond the",
        accent: "classical limit.",
        lead: "Scalable quantum systems and utility-scale algorithms, run on the most advanced quantum hardware in India — at the heart of AQV.",
        image: "/images/s6/c1.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "BUILD ON REAL QUANTUM HARDWARE",
        title: "Bring your workload to",
        accent: "the machine.",
        lead: "Fellowships, joint projects and enterprise access — all built around hands-on time on IBM Quantum System Two.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/research", label: "THE RESEARCH ENGINE" },
      }}
    />
  );
}
