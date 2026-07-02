import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "thesis", nav: "The Thesis", num: "02", eyebrow: "THE INVESTMENT THESIS",
    title: "A generational bet on", accent: "sovereign compute.",
    body: [
      "Quantum is moving from the lab to the real economy. The nations and investors that back the ecosystem now — not just the machines — will define the next era of computing, security and materials.",
      "AQV is India's integrated play: hardware, research, talent and capital in one place, backed by the National Quantum Mission and the Government of Andhra Pradesh.",
    ],
    image: "/images/s2.png",
  },
  {
    kind: "features", id: "why", nav: "Why Invest", num: "03", eyebrow: "WHY INVEST HERE",
    title: "The case for", accent: "AQV.",
    lead: "A rare combination of frontier science, sovereign backing and a ready market.",
    items: [
      { title: "Anchored by real hardware", desc: "IBM Quantum System Two and indigenous cryogenics de-risk the deep-tech thesis.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21" },
      { title: "Sovereign backing", desc: "National mission and state support for land, power, incentives and horizon.", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z" },
      { title: "A talent engine", desc: "The WISER pipeline feeding a deep-tech workforce at national scale.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
    ],
  },
  {
    kind: "list", id: "routes", nav: "Routes", num: "04", eyebrow: "WAYS TO ENGAGE",
    title: "How capital", accent: "participates.",
    lead: "Several routes, from the fund to establishing on campus.",
    items: [
      { num: "01", title: "AQV Quantum Fund", label: "₹500Cr+ DEEP-TECH FUND", desc: "Co-invest alongside a fund focused on quantum and frontier technologies." },
      { num: "02", title: "Direct venture investment", label: "BACK FOUNDERS", desc: "Invest directly into launchpad startups building on the AQV stack." },
      { num: "03", title: "Establish & operate", label: "SET UP ON CAMPUS", desc: "Bring an enterprise or facility to the valley with state incentives." },
      { num: "04", title: "Strategic partnership", label: "LONG-HORIZON", desc: "Multi-year partnerships across research, infrastructure and talent." },
    ],
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "The opportunity, in", accent: "figures.",
    items: [
      { value: "₹500Cr+", label: "AQV quantum fund" },
      { value: "₹25K Cr+", label: "Investment target" },
      { value: "500", label: "Acre campus" },
      { value: "Top 5", label: "Global hub by 2030" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="engage"
      hero={{
        eyebrow: "ENGAGE · INVEST & ESTABLISH",
        title: "Invest in India's",
        accent: "quantum decade.",
        lead: "A generational investment in sovereign compute — backed by real hardware, a national mission and a ready talent engine.",
        image: "/images/hero.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "PARTNER WITH THE VALLEY",
        title: "Back the",
        accent: "ecosystem.",
        lead: "Talk to the ecosystem office about the fund, direct investment or establishing at AQV.",
        primary: { href: "/contact", label: "INVEST IN AQV" },
        secondary: { href: "/startups", label: "SEE THE STARTUPS" },
      }}
    />
  );
}
