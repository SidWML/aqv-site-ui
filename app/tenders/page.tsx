import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "links", id: "open", nav: "Open Tenders", num: "01", eyebrow: "PROCUREMENT",
    title: "Tenders &", accent: "procurement.",
    lead: "Open tenders, expressions of interest and procurement notices for Amaravati Quantum Valley. Notices are published here as they open.",
    groups: [
      { title: "INFRASTRUCTURE", links: [
        { href: "/tenders", label: "Campus works & fit-out", meta: "EOI" },
        { href: "/tenders", label: "Cryogenics & lab systems", meta: "TENDER" },
        { href: "/tenders", label: "Power & connectivity", meta: "TENDER" },
      ]},
      { title: "SERVICES", links: [
        { href: "/tenders", label: "Facilities management", meta: "TENDER" },
        { href: "/tenders", label: "Security & operations", meta: "TENDER" },
      ]},
      { title: "SUPPLY", links: [
        { href: "/tenders", label: "Equipment & components", meta: "RFP" },
        { href: "/tenders", label: "Software & tooling", meta: "RFP" },
      ]},
    ],
  },
  {
    kind: "list", id: "process", nav: "Process", num: "02", eyebrow: "HOW TO PARTICIPATE",
    title: "How procurement", accent: "works.",
    lead: "A transparent, published process for every notice.",
    items: [
      { num: "01", title: "Register", label: "EXPRESS INTEREST", desc: "Register your organisation and note the tenders you intend to bid on." },
      { num: "02", title: "Review", label: "DOCUMENTS & TERMS", desc: "Download the tender documents, scope and evaluation criteria." },
      { num: "03", title: "Submit", label: "BEFORE THE DEADLINE", desc: "Submit your bid through the published channel before the closing date." },
      { num: "04", title: "Evaluation", label: "TRANSPARENT AWARD", desc: "Bids are evaluated on published criteria; outcomes are documented." },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="news"
      hero={{
        kind: "simple",
        eyebrow: "OFFICIAL · TENDERS & PROCUREMENT",
        title: "Tenders &",
        accent: "procurement.",
        lead: "Open tenders and procurement notices for the build-out and operation of Amaravati Quantum Valley.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "PROCUREMENT ENQUIRIES",
        title: "Bid to build the",
        accent: "valley.",
        lead: "Register your interest or contact the procurement team with questions.",
        primary: { href: "/contact", label: "CONTACT PROCUREMENT" },
        secondary: { href: "/resources/government-orders", label: "GOVERNMENT ORDERS" },
      }}
    />
  );
}
