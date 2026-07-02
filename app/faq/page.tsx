import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "faq", id: "general", nav: "General", num: "01", eyebrow: "THE BASICS",
    title: "About the", accent: "valley.",
    items: [
      { q: "What is Amaravati Quantum Valley?", a: "AQV is India's first integrated Quantum-AI ecosystem — a single place in Amaravati, Andhra Pradesh where quantum hardware, research, infrastructure, talent and capital are brought together." },
      { q: "Who backs AQV?", a: "AQV is anchored by India's National Quantum Mission and the Government of Andhra Pradesh, with a long-horizon mandate to build sovereign quantum capability." },
      { q: "Where is it located?", a: "AQV is being built in Amaravati, the greenfield capital of Andhra Pradesh — designed for quantum from the ground up." },
      { q: "What makes AQV different?", a: "Rather than a single lab or machine, AQV assembles the whole quantum value chain in one place, anchored by on-prem IBM Quantum System Two hardware." },
    ],
  },
  {
    kind: "faq", id: "technology", nav: "Technology", num: "02", eyebrow: "THE TECHNOLOGY",
    title: "The", accent: "technology.",
    items: [
      { q: "What quantum hardware is on-site?", a: "IBM Quantum System Two, built around the 133-qubit Heron processor — the most advanced quantum system in India — plus indigenous cryogenics including a sub-4 Kelvin refrigerator at 3.98 K." },
      { q: "When does the hardware go live?", a: "System Two received U.S. export clearance in June 2026, with deployment scheduled for December 2026." },
      { q: "Can I get access to the machine?", a: "Yes — structured access is available for funded research, launchpad startups and enterprise pilots. Get in touch to discuss allocations." },
    ],
  },
  {
    kind: "faq", id: "engage", nav: "Get Involved", num: "03", eyebrow: "GETTING INVOLVED",
    title: "Getting", accent: "involved.",
    items: [
      { q: "How do startups join?", a: "Through the AQV launchpad, which provides infrastructure, mentorship, network and access to a ₹500Cr+ quantum fund." },
      { q: "Can my company establish at AQV?", a: "Yes. Hardware and software companies can establish on campus with access to shared facilities and state incentives — see Engage with AQV." },
      { q: "How do I start learning?", a: "The WISER pipeline offers pathways from first exposure to research-grade capability across Quantum, AI and Cybersecurity. See Learn." },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="news"
      hero={{
        kind: "simple",
        eyebrow: "OFFICIAL · FAQ",
        title: "Frequently asked",
        accent: "questions.",
        lead: "Answers to the most common questions about Amaravati Quantum Valley — the mission, the technology and how to get involved.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "STILL HAVE QUESTIONS?",
        title: "Ask the",
        accent: "team.",
        lead: "Can't find your answer here? Reach out and we'll help.",
        primary: { href: "/contact", label: "CONTACT AQV" },
        secondary: { href: "/about", label: "ABOUT AQV" },
      }}
    />
  );
}
