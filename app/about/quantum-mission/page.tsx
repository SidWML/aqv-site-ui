import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "mandate", nav: "The Mandate", num: "02", eyebrow: "THE MANDATE",
    title: "A national mission, made into", accent: "a place.",
    body: [
      "India's National Quantum Mission set a national commitment to quantum technology. Amaravati Quantum Valley is how that commitment becomes physical — a single place where the whole quantum value chain compounds.",
      "AQV is backed by the National Quantum Mission and the Government of Andhra Pradesh, with a long-horizon mandate: build sovereign quantum capability, and keep it in India.",
    ],
    image: "/images/s2.png",
  },
  {
    kind: "list", id: "objectives", nav: "Objectives", num: "03", eyebrow: "MISSION OBJECTIVES",
    title: "What the mission is", accent: "built to do.",
    lead: "Five objectives translate a national ambition into work that can be measured.",
    items: [
      { num: "01", title: "Sovereign hardware", label: "OWN THE STACK", desc: "Deploy and operate advanced quantum hardware on Indian soil, and build the domestic supply chain around it." },
      { num: "02", title: "Frontier research", label: "ADVANCE THE SCIENCE", desc: "Run world-class research across computing, sensing, communication and materials." },
      { num: "03", title: "A talent pipeline", label: "BUILD THE PEOPLE", desc: "Carry people from first exposure to research-grade capability through the WISER pipeline." },
      { num: "04", title: "Industry translation", label: "DEPLOY THE ADVANTAGE", desc: "Move breakthroughs into industry, startups and real applications." },
      { num: "05", title: "Sovereign capability", label: "KEEP IT IN INDIA", desc: "Ensure the compute, data and expertise that matter most remain under Indian control." },
    ],
  },
  {
    kind: "media", id: "alignment", nav: "Alignment", num: "04", eyebrow: "NATIONAL ALIGNMENT",
    title: "One valley, aligned to a", accent: "national plan.",
    image: "/images/s3.png", flip: true,
    body: ["AQV does not operate in isolation — it is the anchor site of a national programme, aligned with mission institutions and state infrastructure."],
    bullets: [
      { t: "National Quantum Mission", d: "Anchored by India's national commitment to quantum technology." },
      { t: "Government of Andhra Pradesh", d: "State backing for land, power, planning and long-term commitment." },
      { t: "Academic & national labs", d: "Joint programmes with leading universities and national institutes." },
    ],
    link: { href: "/about/governance", label: "GOVERNANCE & LEADERSHIP" },
  },
  {
    kind: "stats", id: "targets", nav: "2030 Targets", num: "05", eyebrow: "THE VALLEY BY 2030",
    title: "A mission, made", accent: "measurable.",
    items: [
      { value: "9M", label: "sq ft quantum city" },
      { value: "₹25K Cr+", label: "Investment target" },
      { value: "100K+", label: "Jobs envisioned" },
      { value: "Top 5", label: "Global hub by 2030" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="about"
      hero={{
        eyebrow: "ABOUT · QUANTUM MISSION & MANDATE",
        title: "India's quantum mission,",
        accent: "built in Amaravati.",
        lead: "Amaravati Quantum Valley turns the National Quantum Mission into a place — where sovereign hardware, research, talent and capital compound in one ecosystem.",
        image: "/images/s2.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "JOIN THE MISSION",
        title: "Build the mission",
        accent: "with us.",
        lead: "Researchers, founders, industry and government — there is a place for you in the valley.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/about", label: "ABOUT AQV" },
      }}
    />
  );
}
