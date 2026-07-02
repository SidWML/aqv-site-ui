import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "pathways", nav: "Pathways", num: "02", eyebrow: "LEARNING PATHWAYS",
    title: "A path into quantum for", accent: "everyone.",
    body: [
      "The quantum era needs far more than researchers. AQV builds learning pathways that carry people from curiosity to capability — students, engineers, professionals and educators alike.",
      "The WISER pipeline is the backbone: a structured path from first exposure to research-grade skill across Quantum, AI and Cybersecurity.",
    ],
    image: "/images/s5/s3.png",
  },
  {
    kind: "cards", id: "tracks", nav: "Tracks", num: "03", eyebrow: "WHERE TO START",
    title: "Choose your", accent: "track.",
    lead: "Structured routes for every stage and background.",
    items: [
      { tag: "SCHOOL & COLLEGE", title: "Foundations", desc: "Introductory quantum, AI and cybersecurity for students beginning the journey.", img: "/images/s5/s1.png", href: "/programs" },
      { tag: "UNIVERSITY", title: "Advanced programs", desc: "Deeper study and doctoral tracks with leading universities and national institutes.", img: "/images/s5/s2.png", href: "/programs" },
      { tag: "PROFESSIONALS", title: "Upskilling", desc: "Reskilling and executive programs for engineers and industry professionals.", img: "/images/s5/s4.png", href: "/programs" },
    ],
  },
  {
    kind: "media", id: "wiser", nav: "WISER", num: "04", eyebrow: "THE WISER PIPELINE",
    title: "From first exposure to", accent: "research-grade.",
    image: "/images/s5/s5.png", flip: true,
    body: ["WISER is AQV's talent engine — a single pipeline that carries learners from awareness through to capability, at national scale."],
    bullets: [
      { t: "Broad on-ramp", d: "Accessible entry points across schools, colleges and industry." },
      { t: "Hands-on with hardware", d: "Advanced learners work on real quantum systems, not just theory." },
      { t: "Inclusive by design", d: "51% women participation across the pipeline." },
    ],
    link: { href: "/talent", label: "EXPLORE TALENT & SKILLS" },
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "Learning at", accent: "scale.",
    items: [
      { value: "64K+", label: "WISER learners today" },
      { value: "3.5M", label: "Target by 2030" },
      { value: "50+", label: "Institutions" },
      { value: "51%", label: "Women participation" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="learn"
      hero={{
        eyebrow: "LEARN · LEARNING PATHWAYS",
        title: "Learn to think in",
        accent: "quantum.",
        lead: "Structured pathways from first exposure to research-grade capability — across Quantum, AI and Cybersecurity, for everyone.",
        image: "/images/s5/s3.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "START LEARNING",
        title: "Begin your quantum",
        accent: "journey.",
        lead: "Explore programs, apply to a pathway, or bring your institution into the WISER network.",
        primary: { href: "/contact", label: "APPLY TO A PROGRAM" },
        secondary: { href: "/programs", label: "VIEW ALL PROGRAMS" },
      }}
    />
  );
}
