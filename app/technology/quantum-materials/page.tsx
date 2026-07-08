import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "focus", nav: "Why It Matters", num: "02", eyebrow: "WHY MATERIALS & DEVICES MATTER",
    title: "The materials that make", accent: "quantum possible.",
    body: [
      "Every quantum device begins with a material — a superconductor, a spin qubit host, a photonic substrate. Advances in materials set the ceiling for everything above them in the stack.",
      "AQV runs a materials programme spanning superconducting circuits, semiconductor spin systems, topological materials and the fabrication needed to turn them into working devices.",
    ],
    image: "/images/s3-n.png",
  },
  {
    kind: "features", id: "capabilities", nav: "AQV Capability", num: "03", eyebrow: "AQV CAPABILITY",
    title: "From atoms to", accent: "devices.",
    lead: "Discovery, characterisation and fabrication — a materials capability shared across the valley.",
    items: [
      { title: "Superconducting circuits", desc: "Materials and junctions for higher-coherence superconducting qubits.", icon: "M4 12 H8 M16 12 H20 M8 12 a4 4 0 0 1 8 0 M8 12 a4 4 0 0 0 8 0" },
      { title: "Spin & topological systems", desc: "Semiconductor spin qubits and topological materials for robust quantum states.", icon: "M12 3 a9 9 0 1 0 0.01 0 M12 8 a4 4 0 1 0 0.01 0" },
      { title: "Fabrication & characterisation", desc: "Cleanroom fabrication and cryogenic characterisation open to research groups.", icon: "M9 3 H15 M10 3 V9 L5 19 c-0.5 1 0.3 2 1.4 2 H17.6 c1.1 0 1.9-1 1.4-2 L14 9 V3" },
    ],
  },
  {
    kind: "media", id: "facilities", nav: "Infrastructure & Access", num: "04", eyebrow: "INFRASTRUCTURE & ACCESS",
    title: "Shared cleanroom and", accent: "cryogenics.",
    image: "/images/s6/c4.png",
    body: ["Materials work is capital-intensive. AQV concentrates that investment into shared facilities so every group works with world-class tools."],
    bullets: [
      { t: "Dilution refrigerators", d: "Sub-4 Kelvin platforms, including India's first indigenous fridge at 3.98 K." },
      { t: "Device fabrication", d: "Cleanroom lithography and deposition for prototype quantum devices." },
      { t: "Advanced characterisation", d: "Cryogenic and spectroscopic measurement across the materials programme." },
    ],
    link: { href: "/infrastructure/facilities", label: "SEE THE FACILITIES" },
  },
  {
    kind: "stats", id: "metrics", nav: "Applications", num: "05", eyebrow: "RESEARCH & INDUSTRY APPLICATIONS",
    title: "Materials at the", accent: "frontier.",
    items: [
      { value: "9+", label: "Active materials labs" },
      { value: "3.98 K", label: "Indigenous refrigerator" },
      { value: "1", label: "Shared cleanroom" },
      { value: "20+", label: "Materials researchers" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "RESEARCH DOMAIN · QUANTUM MATERIALS",
        title: "Engineering the substrate of",
        accent: "the quantum era.",
        lead: "Superconductors, spin systems and topological materials — plus the shared fabrication and cryogenics that turn them into devices.",
        image: "/images/s6/c4.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "RESEARCH QUANTUM MATERIALS",
        title: "Start at the",
        accent: "material.",
        lead: "Access shared cryogenics and fabrication, and collaborate with AQV materials groups.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/research", label: "THE RESEARCH ENGINE" },
      }}
    />
  );
}
