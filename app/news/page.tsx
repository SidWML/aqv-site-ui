import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "cards", id: "latest", nav: "Latest", num: "01", eyebrow: "LATEST",
    title: "The latest from", accent: "the valley.",
    lead: "Announcements, milestones and coverage from Amaravati Quantum Valley.",
    items: [
      { tag: "MILESTONE · JUN 2026", title: "IBM Quantum System Two cleared for export", desc: "U.S. export clearance granted, keeping the December 2026 deployment on schedule.", img: "/images/s7.png" },
      { tag: "RESEARCH · 2026", title: "India's first indigenous sub-4 Kelvin refrigerator", desc: "A fully indigenous quantum refrigeration platform reaches 3.98 K on the Medha Towers testbed.", img: "/images/s6/c4.png" },
      { tag: "TALENT · 2026", title: "WISER pipeline crosses 64,000 learners", desc: "AQV's talent engine reaches a new milestone on the path to 3.5M by 2030.", img: "/images/s5/s3.png" },
      { tag: "GOVERNANCE · GUNTUR", title: "Quantum-powered emergency response goes live", desc: "Dispatch optimisation cuts response time from 69 to 60 minutes across five agencies.", img: "/images/s3.png" },
      { tag: "ECOSYSTEM · 2026", title: "AQV Quantum Fund backs first cohort", desc: "A ₹500Cr+ fund begins deploying into deep-tech founders on the AQV stack.", img: "/images/s5/c1.png" },
      { tag: "PARTNERSHIP · 2026", title: "New global research collaborations announced", desc: "AQV expands its network of affiliated research centres and industry partners.", img: "/images/s5/c3.png" },
    ],
  },
  {
    kind: "links", id: "channels", nav: "Channels", num: "02", eyebrow: "STAY INFORMED",
    title: "Follow the", accent: "story.",
    lead: "Press, events and official documents — everything AQV publishes, in one place.",
    groups: [
      { title: "NEWSROOM", links: [
        { href: "/news", label: "All announcements" },
        { href: "/events", label: "Events & summits" },
        { href: "/resources/insights", label: "Insights & analysis" },
      ]},
      { title: "OFFICIAL", links: [
        { href: "/resources/reports", label: "Reports & downloads" },
        { href: "/resources/government-orders", label: "Government orders" },
        { href: "/tenders", label: "Tenders & procurement" },
      ]},
      { title: "CONNECT", links: [
        { href: "/contact", label: "Media enquiries" },
        { href: "mailto:info@aqv.in", label: "info@aqv.in", external: true },
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
        eyebrow: "NEWS & RESOURCES · NEWSROOM",
        title: "News from Amaravati",
        accent: "Quantum Valley.",
        lead: "Milestones, announcements and coverage as India builds its sovereign quantum ecosystem.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "STAY IN THE LOOP",
        title: "Follow the",
        accent: "mission.",
        lead: "Subscribe for announcements, or reach the team for media enquiries.",
        primary: { href: "/contact", label: "MEDIA ENQUIRIES" },
        secondary: { href: "/events", label: "UPCOMING EVENTS" },
      }}
    />
  );
}
