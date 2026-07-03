import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "structure", nav: "Structure", num: "02", eyebrow: "HOW AQV IS RUN",
    title: "Accountable, transparent,", accent: "built to last.",
    body: [
      "A quantum valley is a decades-long undertaking. AQV is governed for that horizon — with clear accountability across strategy, science and the ecosystem.",
      "Governance separates strategic direction, scientific independence and day-to-day operations, so long-term commitment and rigorous science reinforce one another.",
    ],
    image: "/images/s5/c1.png",
  },
  {
    kind: "features", id: "bodies", nav: "The Bodies", num: "03", eyebrow: "GOVERNING BODIES",
    title: "Three roles, one", accent: "mandate.",
    lead: "Distinct bodies hold distinct responsibilities — and answer for them.",
    items: [
      { title: "Leadership Council", desc: "Sets strategy and stewards the mission, accountable to the National Quantum Mission and the state.", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z" },
      { title: "Scientific Board", desc: "Guards research direction and scientific independence across the five domains.", icon: "M12 3 a9 9 0 1 0 0.01 0 M12 8 a4 4 0 1 0 0.01 0" },
      { title: "Ecosystem Office", desc: "Runs partnerships, startups and the day-to-day operation of the valley.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
    ],
  },
  {
    kind: "list", id: "principles", nav: "Principles", num: "04", eyebrow: "GOVERNANCE PRINCIPLES",
    title: "The principles we", accent: "govern by.",
    items: [
      { num: "01", title: "Scientific independence", desc: "Research direction is set by scientists, insulated from short-term pressure." },
      { num: "02", title: "Transparency", desc: "Decisions, allocations and outcomes are documented and open to scrutiny." },
      { num: "03", title: "Sovereign responsibility", desc: "Sensitive compute, data and IP are governed to remain under Indian control." },
      { num: "04", title: "Ecosystem fairness", desc: "Access to facilities and capital follows clear, published criteria." },
    ],
  },
  {
    kind: "quote", id: "charter", nav: "Charter",
    quote: "A valley succeeds when founders, researchers and industry win together. That is our mandate, and the standard we hold ourselves to.",
    source: "THE AQV CHARTER",
  },
];

export default function Page() {
  return (
    <Subpage
      active="about"
      hero={{
        eyebrow: "ABOUT · GOVERNANCE & LEADERSHIP",
        title: "Governed for the",
        accent: "long horizon.",
        lead: "Clear accountability across strategy, science and the ecosystem — so a decades-long mission stays rigorous, transparent and sovereign.",
        image: "/images/s5/c2.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "WORK WITH THE VALLEY",
        title: "Partner with",
        accent: "AQV.",
        lead: "For institutional partnerships, governance and official enquiries, get in touch.",
        primary: { href: "/contact", label: "CONTACT AQV" },
        secondary: { href: "/resources/government-orders", label: "GOVERNMENT ORDERS" },
      }}
    />
  );
}
