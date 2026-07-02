import Subpage, { type Block } from "../../components/Subpage";

const blocks: Block[] = [
  {
    kind: "prose", id: "focus", nav: "Focus", num: "02", eyebrow: "THE DOMAIN",
    title: "Measuring what was", accent: "unmeasurable.",
    body: [
      "Quantum sensing exploits the fragility of quantum states to measure time, gravity, magnetic and electric fields with precision far beyond classical instruments.",
      "At AQV we develop sensors and metrology platforms for navigation, healthcare imaging, resource exploration and secure timing — moving them from the lab bench toward field-ready devices.",
    ],
    image: "/images/s3.png",
  },
  {
    kind: "features", id: "capabilities", nav: "Capabilities", num: "03", eyebrow: "WHAT WE BUILD",
    title: "Precision as a", accent: "platform.",
    lead: "A shared sensing and metrology capability that research groups and industry can build on.",
    items: [
      { title: "Atomic clocks & timing", desc: "Optical and atomic timing references for secure, GPS-independent synchronisation.", icon: "M12 4 a8 8 0 1 0 0.01 0 M12 8 V12 L15 14" },
      { title: "Magnetometry & imaging", desc: "Ultra-sensitive magnetic sensing for biomedical imaging and materials inspection.", icon: "M3 12 c3-6 6-6 9 0 s6 6 9 0" },
      { title: "Inertial navigation", desc: "Quantum accelerometers and gyroscopes for navigation where satellites can't reach.", icon: "M12 3 a9 9 0 1 0 0.01 0 M12 8 a4 4 0 1 0 0.01 0" },
    ],
  },
  {
    kind: "media", id: "applications", nav: "Applications", num: "04", eyebrow: "WHERE IT MATTERS",
    title: "From the lab to the", accent: "field.",
    image: "/images/s6/c2.png",
    body: ["Sensing is often the first quantum technology to reach real deployment. We prioritise the applications with the clearest path to impact in India."],
    bullets: [
      { t: "Healthcare & diagnostics", d: "Non-invasive imaging with sensitivity classical devices cannot match." },
      { t: "Energy & exploration", d: "Sub-surface gravity and magnetic mapping for resources and infrastructure." },
      { t: "Defence & navigation", d: "Resilient timing and positioning for GPS-denied environments." },
    ],
  },
  {
    kind: "stats", id: "metrics", nav: "By the Numbers", num: "05", eyebrow: "THE NUMBERS",
    title: "Sensing at", accent: "scale.",
    items: [
      { value: "7+", label: "Active sensing labs" },
      { value: "3", label: "Field-trial programmes" },
      { value: "5", label: "Industry partners" },
      { value: "2027", label: "First field-ready devices" },
    ],
  },
];

export default function Page() {
  return (
    <Subpage
      active="technology"
      hero={{
        eyebrow: "RESEARCH DOMAIN · QUANTUM SENSING",
        title: "Measuring reality at the",
        accent: "quantum limit.",
        lead: "Clocks, magnetometers and inertial sensors that see what classical instruments cannot — engineered for navigation, healthcare and energy.",
        image: "/images/s6/c2.png",
      }}
      blocks={blocks}
      cta={{
        eyebrow: "PARTNER ON QUANTUM SENSING",
        title: "Sense the",
        accent: "unseen.",
        lead: "Co-develop sensing platforms and field trials with AQV research groups and shared metrology facilities.",
        primary: { href: "/contact", label: "APPLY / CONNECT" },
        secondary: { href: "/research", label: "THE RESEARCH ENGINE" },
      }}
    />
  );
}
