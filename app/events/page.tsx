import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  {
    kind: "cards", id: "upcoming", nav: "Upcoming", num: "01", eyebrow: "UPCOMING",
    title: "Where the valley", accent: "gathers.",
    lead: "Summits, workshops and open days across the Amaravati Quantum Valley calendar.",
    items: [
      { tag: "SUMMIT", title: "AQV Quantum Summit", desc: "The flagship annual gathering of researchers, founders, industry and government.", img: "/images/s3.png" },
      { tag: "WORKSHOP", title: "Hardware & Cryogenics Workshop", desc: "Hands-on sessions on the shared cryogenics and fabrication facilities.", img: "/images/s6/c4.png" },
      { tag: "OPEN DAY", title: "System Two Open Day", desc: "A look inside the facility around IBM Quantum System Two.", img: "/images/s7.png" },
      { tag: "HACKATHON", title: "Quantum Software Hackathon", desc: "Build against real hardware with the AQV software community.", img: "/images/s6/c5.png" },
      { tag: "TALENT", title: "WISER Cohort Kickoff", desc: "Onboarding for the next cohort of the WISER talent pipeline.", img: "/images/s5/s3.png" },
      { tag: "INVESTOR", title: "AQV Investor Day", desc: "The investment thesis, the fund and the launchpad startup portfolio.", img: "/images/s5/c1.png" },
    ],
  },
  {
    kind: "prose", id: "host", nav: "Host an Event", num: "02", eyebrow: "BRING YOUR EVENT",
    title: "Host at", accent: "AQV.",
    body: [
      "The campus has studios and collaboration spaces built for gatherings — from focused workshops to full summits.",
      "If you'd like to host a research, industry or community event at Amaravati Quantum Valley, get in touch with the ecosystem office.",
    ],
    image: "/images/s5/s2.png",
  },
];

export default function Page() {
  return (
    <Subpage
      active="news"
      hero={{
        kind: "simple",
        eyebrow: "NEWS & RESOURCES · EVENTS & SUMMITS",
        title: "Events at the",
        accent: "valley.",
        lead: "Summits, workshops, open days and hackathons that bring the quantum ecosystem together.",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "JOIN US",
        title: "Be there in",
        accent: "person.",
        lead: "Register your interest, or reach out to host an event at AQV.",
        primary: { href: "/contact", label: "REGISTER INTEREST" },
        secondary: { href: "/news", label: "BACK TO NEWSROOM" },
      }}
    />
  );
}
