import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "focus", nav: "Focus", num: "02", eyebrow: "THE DOMAIN",
    title: "Security guaranteed by", accent: "physics.",
    body: [
      "Quantum communication uses the laws of physics — not the difficulty of a maths problem — to protect information. Any attempt to intercept a quantum key disturbs it, and is detected.",
      "AQV develops quantum key distribution, entanglement-based links and the protocols and hardware needed to move information across a provably secure network.",
    ],
    image: "/images/s4.png",
  },
  {
    kind: "features", id: "capabilities", nav: "Capabilities", num: "03", eyebrow: "WHAT WE BUILD",
    title: "A quantum-safe", accent: "network.",
    lead: "The building blocks of secure communication, from fibre links to the free-space and satellite layer.",
    items: [
      { title: "Quantum key distribution", desc: "QKD over fibre and free space for keys no adversary can copy undetected.", icon: "M6 10 V8 a6 6 0 0 1 12 0 v2 M4 10 H20 V21 H4 Z M12 14 v3" },
      { title: "Entanglement links", desc: "Entanglement distribution as the foundation for a future quantum internet.", icon: "M8 8 a3 3 0 1 0 0.01 0 M16 16 a3 3 0 1 0 0.01 0 M10 10 L14 14" },
      { title: "Post-quantum readiness", desc: "Migration paths and testbeds for post-quantum cryptography alongside QKD.", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M9 11 l2 2 4-4" },
    ],
  },
  {
    kind: "media", id: "network", nav: "The Network", num: "04", eyebrow: "HOW IT SCALES",
    title: "From campus link to", accent: "backbone.",
    image: "/images/s6/c3.png", flip: true,
    body: ["We build outward — a secure campus testbed first, then metro links, then the long-haul and satellite layer that make a national quantum network possible."],
    bullets: [
      { t: "Metro QKD testbed", d: "A working intra-city secure link between AQV facilities." },
      { t: "Trusted-node architecture", d: "Standards-aligned nodes that extend range without breaking security." },
      { t: "Satellite-ready", d: "Ground-station research for the free-space and satellite segment." },
    ],
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "Secure by", accent: "design.",
    items: [
      { value: "7+", label: "Communications labs" },
      { value: "1", label: "Live metro QKD testbed" },
      { value: "100%", label: "Physics-based security" },
      { value: "5", label: "Standards collaborations" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "RESEARCH DOMAIN · QUANTUM COMMUNICATION",
        title: "Information that",
        accent: "cannot be copied.",
        lead: "Quantum key distribution, entanglement links and post-quantum readiness — the foundations of a sovereign, quantum-safe network.",
        image: "/images/s6/c3.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "BUILD SECURE INFRASTRUCTURE",
        title: "Secure the",
        accent: "network.",
        lead: "Partner with AQV on QKD deployments, standards work and quantum-safe migration.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/research", label: "THE RESEARCH ENGINE" },
      }}
    />
  );
}
