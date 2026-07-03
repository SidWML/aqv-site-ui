import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "links", id: "orders", nav: "Orders", num: "01", eyebrow: "OFFICIAL DOCUMENTS",
    title: "Government orders &", accent: "policies.",
    lead: "Official orders, notifications and policy documents relating to Amaravati Quantum Valley and the National Quantum Mission.",
    groups: [
      { title: "ESTABLISHMENT", links: [
        { href: "/resources/government-orders", label: "AQV establishment order", meta: "GO" },
        { href: "/resources/government-orders", label: "Land & campus allocation", meta: "GO" },
        { href: "/resources/government-orders", label: "Governing body constitution", meta: "GO" },
      ]},
      { title: "INCENTIVES & POLICY", links: [
        { href: "/resources/government-orders", label: "Deep-tech incentive policy", meta: "GO" },
        { href: "/resources/government-orders", label: "Startup & venture support", meta: "GO" },
        { href: "/resources/government-orders", label: "Talent & skilling policy", meta: "GO" },
      ]},
      { title: "MISSION", links: [
        { href: "/resources/government-orders", label: "National Quantum Mission alignment", meta: "DOC" },
        { href: "/resources/government-orders", label: "Export & compliance notes", meta: "DOC" },
      ]},
    ],
  },
  {
    kind: "prose", id: "requests", nav: "Requests", num: "02", eyebrow: "NEED A DOCUMENT?",
    title: "Request an official", accent: "document.",
    body: [
      "This page collects the government orders and policy documents relevant to AQV. Documents are added as they are published.",
      "For certified copies or documents not listed here, contact the ecosystem office with your request.",
    ],
    image: "/images/s5/c1.png",
  },
];

export default function Page() {
  return (
    <Subpage
      active="news"
      hero={{
        kind: "simple",
        eyebrow: "NEWS & RESOURCES · GOVERNMENT ORDERS",
        title: "Government orders &",
        accent: "policies.",
        lead: "The official record — orders, notifications and policy documents behind Amaravati Quantum Valley.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "OFFICIAL ENQUIRIES",
        title: "Contact the",
        accent: "office.",
        lead: "For certified copies, tenders or official enquiries, reach the ecosystem office.",
        primary: { href: "/contact", label: "CONTACT AQV" },
        secondary: { href: "/tenders", label: "TENDERS & PROCUREMENT" },
      }}
    />
  );
}
