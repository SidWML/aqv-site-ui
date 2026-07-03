import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "cards", id: "featured", nav: "Featured", num: "01", eyebrow: "FEATURED",
    title: "Reports from", accent: "the valley.",
    lead: "Flagship documents on the mission, the ecosystem and the road to 2030.",
    items: [
      { tag: "STATUS DECK", title: "AQV Status & Progress", desc: "The current state of the valley — hardware, research, talent and capital.", img: "/images/s2.png" },
      { tag: "WHITEPAPER", title: "Building a Sovereign Quantum Ecosystem", desc: "The thesis behind AQV and how the value chain compounds in one place.", img: "/images/s3.png" },
      { tag: "ROADMAP", title: "The Road to 2030", desc: "Targets, milestones and the phased build-out of the quantum city.", img: "/images/hero.png" },
    ],
  },
  {
    kind: "links", id: "downloads", nav: "Downloads", num: "02", eyebrow: "DOWNLOADS & MEDIA KIT",
    title: "Documents &", accent: "media kit.",
    lead: "Downloadable reports, briefs and brand assets for press and partners.",
    groups: [
      { title: "REPORTS", links: [
        { href: "/resources/reports", label: "AQV Status Deck (PDF)", meta: "PDF" },
        { href: "/resources/reports", label: "Ecosystem Whitepaper (PDF)", meta: "PDF" },
        { href: "/resources/reports", label: "Road to 2030 (PDF)", meta: "PDF" },
      ]},
      { title: "BRIEFS", links: [
        { href: "/resources/reports", label: "One-page mission brief", meta: "PDF" },
        { href: "/resources/reports", label: "Fact sheet & key numbers", meta: "PDF" },
      ]},
      { title: "MEDIA KIT", links: [
        { href: "/resources/reports", label: "Logos & brand assets", meta: "ZIP" },
        { href: "/resources/reports", label: "Approved imagery", meta: "ZIP" },
        { href: "/contact", label: "Request additional assets" },
      ]},
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="news"
      hero={{
        kind: "simple",
        eyebrow: "NEWS & RESOURCES · REPORTS",
        title: "Reports, briefs &",
        accent: "downloads.",
        lead: "The documents behind Amaravati Quantum Valley — reports, fact sheets and the media kit, all in one place.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "NEED SOMETHING SPECIFIC?",
        title: "Request a",
        accent: "document.",
        lead: "Can't find what you need? Reach the team for reports, data or media assets.",
        primary: { href: "/contact", label: "CONTACT AQV" },
        secondary: { href: "/resources/insights", label: "READ INSIGHTS" },
      }}
    />
  );
}
