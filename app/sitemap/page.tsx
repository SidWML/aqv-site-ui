import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "links", id: "map", nav: "All Pages", num: "01", eyebrow: "EVERYTHING, IN ONE PLACE",
    title: "The full", accent: "sitemap.",
    lead: "Every page across Amaravati Quantum Valley, grouped by section.",
    groups: [
      { title: "AQV", links: [
        { href: "/about", label: "About AQV" },
        { href: "/about/quantum-mission", label: "Quantum Mission & Mandate" },
        { href: "/about/governance", label: "Governance & Leadership" },
        { href: "https://quantumjobs.in", label: "Careers", external: true },
      ]},
      { title: "TECHNOLOGY", links: [
        { href: "/technology/quantum-computing", label: "Quantum Computing" },
        { href: "/technology/quantum-sensing", label: "Quantum Sensing" },
        { href: "/technology/quantum-communication", label: "Quantum Communication" },
        { href: "/technology/quantum-materials", label: "Quantum Materials" },
        { href: "/technology/hardware", label: "Hardware & Systems" },
        { href: "/technology/software", label: "Software & Applications" },
      ]},
      { title: "INFRASTRUCTURE", links: [
        { href: "/infrastructure", label: "Infrastructure" },
        { href: "/infrastructure/facilities", label: "Facilities" },
        { href: "/research", label: "Research" },
      ]},
      { title: "ENGAGE", links: [
        { href: "/industry", label: "Industry & Enterprise" },
        { href: "/engage/hardware-companies", label: "Build — Hardware" },
        { href: "/engage/software-companies", label: "Build — Software" },
        { href: "/startups", label: "Startups & Launchpad" },
        { href: "/invest", label: "Invest & Establish" },
        { href: "/partners", label: "Partners" },
      ]},
      { title: "LEARN", links: [
        { href: "/learn", label: "Learning Pathways" },
        { href: "/talent", label: "Talent & Skills" },
        { href: "/programs", label: "Programs" },
      ]},
      { title: "NEWS & RESOURCES", links: [
        { href: "/news", label: "Newsroom" },
        { href: "/events", label: "Events & Summits" },
        { href: "/resources/insights", label: "Insights" },
        { href: "/resources/reports", label: "Reports & Downloads" },
        { href: "/resources/government-orders", label: "Government Orders" },
        { href: "/tenders", label: "Tenders & Procurement" },
        { href: "/faq", label: "FAQ" },
      ]},
      { title: "CONNECT", links: [
        { href: "/contact", label: "Contact" },
      ]},
      { title: "LEGAL", links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
        { href: "/disclaimer", label: "Disclaimer" },
        { href: "/accessibility", label: "Accessibility" },
      ]},
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      hero={{
        kind: "simple",
        eyebrow: "SITEMAP",
        title: "Find your way around",
        accent: "the valley.",
        lead: "A complete index of every page on the Amaravati Quantum Valley site.",
      }}
      blocks={blocks}
      cta={false}
    />
  );
}
