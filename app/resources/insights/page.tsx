import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "cards", id: "reading", nav: "Reading", num: "01", eyebrow: "INSIGHTS",
    title: "Thinking from", accent: "the valley.",
    lead: "Essays and analysis on quantum technology, sovereignty and the road ahead.",
    items: [
      { tag: "PERSPECTIVE", title: "Why build the ecosystem before the hardware", desc: "The case for assembling talent, capital and research ahead of the machine.", img: "/images/s2.png" },
      { tag: "TECHNOLOGY", title: "What utility-scale quantum really means", desc: "Cutting through the hype: where quantum advantage is actually near.", img: "/images/s6/c1.png" },
      { tag: "SOVEREIGNTY", title: "Keeping compute in-country", desc: "Why on-prem quantum hardware matters for national capability.", img: "/images/s7.png" },
      { tag: "TALENT", title: "From 64K to 3.5M", desc: "How a national talent pipeline for deep tech actually gets built.", img: "/images/s5/s3.png" },
      { tag: "MATERIALS", title: "The materials ceiling", desc: "Why advances in materials set the limit for everything above them.", img: "/images/s6/c4.png" },
      { tag: "GOVERNANCE", title: "Quantum in public services", desc: "Lessons from live emergency-response optimisation in Guntur.", img: "/images/s3.png" },
    ],
  },
  {
    kind: "prose", id: "contribute", nav: "Contribute", num: "02", eyebrow: "WRITE WITH US",
    title: "Have a perspective to", accent: "share?",
    body: [
      "Insights is where the AQV community thinks in public — researchers, founders and partners writing about the quantum era as it unfolds.",
      "If you'd like to contribute an essay or analysis, get in touch with the editorial team.",
    ],
    image: "/images/s5/c2.png",
  },
];

export default function Page() {
  return (
    <Subpage
      active="news"
      hero={{
        kind: "simple",
        eyebrow: "NEWS & RESOURCES · INSIGHTS",
        title: "Insights &",
        accent: "analysis.",
        lead: "Perspectives on quantum technology, sovereignty and the ecosystem — from the people building it.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "READ MORE",
        title: "Keep",
        accent: "reading.",
        lead: "Explore reports, follow the newsroom, or contribute your own perspective.",
        primary: { href: "/resources/reports", label: "REPORTS & DOWNLOADS" },
        secondary: { href: "/news", label: "NEWSROOM" },
      }}
    />
  );
}
