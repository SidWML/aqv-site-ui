import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "overview-detail", nav: "The Campus", num: "02", eyebrow: "THE FLOOR",
    title: "World-class facilities,", accent: "shared by all.",
    body: [
      "AQV concentrates capital-intensive scientific infrastructure into shared facilities — so every research group, startup and partner works with tools that would be out of reach alone.",
      "The campus is purpose-built for quantum: cleanrooms, cryogenics, high-performance compute and the labs that surround IBM Quantum System Two.",
    ],
    image: "/images/s7.png",
  },
  {
    kind: "cards", id: "facilities", nav: "Facilities", num: "03", eyebrow: "WHAT'S ON CAMPUS",
    title: "The shared", accent: "infrastructure.",
    lead: "Purpose-built facilities, open to the whole valley.",
    items: [
      { tag: "COMPUTE", title: "IBM Quantum System Two", desc: "A 133-qubit Heron system — the most advanced quantum hardware in India.", img: "/images/s6/c1.png" },
      { tag: "CRYOGENICS", title: "Sub-4 Kelvin platforms", desc: "Dilution refrigerators, including India's first indigenous fridge at 3.98 K.", img: "/images/s6/c4.png" },
      { tag: "FABRICATION", title: "Cleanroom & devices", desc: "Lithography, deposition and packaging for prototype quantum devices.", img: "/images/s6/c2.png" },
      { tag: "HPC", title: "Hybrid compute", desc: "High-performance computing coupled tightly to the quantum stack.", img: "/images/s6/c5.png" },
      { tag: "LABS", title: "Domain laboratories", desc: "Dedicated labs across computing, sensing, communication and materials.", img: "/images/s6/c3.png" },
      { tag: "CAMPUS", title: "Collaboration spaces", desc: "Studios and meeting spaces for teams, residencies and partners.", img: "/images/s3.png" },
    ],
  },
  {
    kind: "media", id: "access", nav: "Access", num: "04", eyebrow: "USING THE FACILITIES",
    title: "Open floor, structured", accent: "access.",
    image: "/images/s4.png", flip: true,
    body: ["Facilities are shared on clear, published criteria — no single group monopolises the floor."],
    bullets: [
      { t: "Research allocations", d: "Priority windows for funded research and doctoral programmes." },
      { t: "Startup & industry access", d: "Structured access for launchpad ventures and enterprise pilots." },
      { t: "Visiting researchers", d: "Residencies that bring external scientists onto the floor." },
    ],
    link: { href: "/contact", label: "REQUEST ACCESS" },
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "The campus, in", accent: "figures.",
    items: [
      { value: "9M", label: "sq ft quantum city" },
      { value: "500", label: "Acre campus" },
      { value: "3.98 K", label: "Indigenous refrigerator" },
      { value: "380+", label: "Affiliated research centres" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "INFRASTRUCTURE · FACILITIES",
        title: "The physical foundation of",
        accent: "the valley.",
        lead: "Cleanrooms, cryogenics, high-performance compute and the labs around IBM Quantum System Two — shared infrastructure, open to all.",
        image: "/images/s7.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "GET ONTO THE FLOOR",
        title: "Work in the",
        accent: "valley.",
        lead: "Request access to shared facilities for research, startups or enterprise pilots.",
        primary: { href: "/contact", label: "REQUEST ACCESS" },
        secondary: { href: "/infrastructure", label: "INFRASTRUCTURE OVERVIEW" },
      }}
    />
  );
}
