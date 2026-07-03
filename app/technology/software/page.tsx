import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "focus", nav: "Focus", num: "02", eyebrow: "THE LAYER",
    title: "The software that makes quantum", accent: "usable.",
    body: [
      "Hardware is only half the story. AQV builds the software layer that turns a quantum processor into something researchers and enterprises can actually program against.",
      "That spans compilers and circuit tooling, error mitigation, hybrid quantum-classical orchestration, and the domain libraries that map real problems onto quantum hardware.",
    ],
    image: "/images/s2.png",
  },
  {
    kind: "features", id: "capabilities", nav: "Capabilities", num: "03", eyebrow: "WHAT WE BUILD",
    title: "From circuit to", accent: "application.",
    lead: "A software stack that meets developers where they are and takes them to the qubit.",
    items: [
      { title: "Compilers & tooling", desc: "Circuit compilation, transpilation and scheduling tuned for real devices.", icon: "M8 8 L4 12 L8 16 M16 8 L20 12 L16 16 M13 6 L11 18" },
      { title: "Hybrid orchestration", desc: "Frameworks that run classical and quantum steps as a single workload across HPC.", icon: "M6 6 a2 2 0 1 0 0.01 0 M18 6 a2 2 0 1 0 0.01 0 M12 18 a2 2 0 1 0 0.01 0 M7 7 L11 16 M17 7 L13 16 M8 6 H16" },
      { title: "Domain libraries", desc: "Application libraries for chemistry, optimisation and machine learning.", icon: "M4 5 H20 M4 5 V19 H20 V5 M8 9 H16 M8 13 H14" },
    ],
  },
  {
    kind: "media", id: "developers", nav: "For Developers", num: "04", eyebrow: "THE DEVELOPER PATH",
    title: "Open tools, real", accent: "hardware.",
    image: "/images/s6/c5.png",
    body: ["We keep the stack open and standards-aligned so teams can move from laptop simulators to System Two without rebuilding their work."],
    bullets: [
      { t: "Standards-aligned", d: "Built on widely-used open quantum SDKs, not a walled garden." },
      { t: "Simulator to hardware", d: "The same code path from local simulation to on-prem hardware." },
      { t: "Enterprise integration", d: "APIs and pipelines to fold quantum steps into existing systems." },
    ],
    link: { href: "/engage/software-companies", label: "BUILD SOFTWARE AT AQV" },
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "A living software", accent: "ecosystem.",
    items: [
      { value: "3", label: "Application domains" },
      { value: "1", label: "Hybrid HPC-quantum stack" },
      { value: "40+", label: "Software collaborators" },
      { value: "Open", label: "Standards-aligned tooling" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "TECHNOLOGY · SOFTWARE & APPLICATIONS",
        title: "The programmable layer of",
        accent: "the quantum stack.",
        lead: "Compilers, hybrid orchestration and domain libraries that turn a quantum processor into a tool developers can build on.",
        image: "/images/s6/c5.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "BUILD QUANTUM SOFTWARE",
        title: "Ship on the",
        accent: "quantum stack.",
        lead: "Join AQV as a software partner — open tooling, hybrid compute and direct access to real hardware.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/technology/hardware", label: "THE HARDWARE" },
      }}
    />
  );
}
