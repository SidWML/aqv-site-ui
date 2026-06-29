import { Pin } from "./dc";

const cols = [
  {
    title: "ECOSYSTEM",
    links: [
      { label: "About AQV", href: "/about" },
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    title: "ENGAGE",
    links: [
      { label: "Talent / WISER", href: "/talent" },
      { label: "Startups", href: "/startups" },
      { label: "Industry", href: "/industry" },
      { label: "Programs", href: "/programs" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Partners", href: "/partners" },
      { label: "News & Media", href: "/media" },
      { label: "Contact", href: "/contact" },
      { label: "Apply / Register", href: "/contact" },
    ],
  },
];

export default function AQVFooter() {
  return (
    <footer className="bg-[#070A14] border-t border-cream/10 px-5 sm:px-8 lg:px-10 pt-12 lg:pt-18 pb-9 text-cream">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-11 mb-13">
        <div className="col-span-2 md:col-span-1">
          <a
            href="/"
            className="flex items-center gap-3 mb-5.5 no-underline text-cream"
          >
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="aqvftmark" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0" stopColor="#8B92E8" />
                  <stop offset="1" stopColor="#C9A86A" />
                </linearGradient>
              </defs>
              <path
                d="M20 4 L34 30 H26 L20 18 L14 30 H6 Z"
                stroke="url(#aqvftmark)"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="20" cy="26" r="2.4" fill="url(#aqvftmark)" />
            </svg>
            <span className="leading-[1.1]">
              <span className="block font-bold text-[13px] tracking-[0.12em]">
                AMARAVATI QUANTUM VALLEY
              </span>
              <span className="block text-[10px] text-cream/50 mt-[3px]">
                India&apos;s Quantum-AI Ecosystem
              </span>
            </span>
          </a>
          <p className="t-body-sm leading-[1.65] text-cream/55 max-w-75 mb-5.5">
            India&apos;s first integrated Quantum-AI ecosystem — uniting
            research, infrastructure, hardware, talent and capital in Amaravati,
            Andhra Pradesh.
          </p>
          <div className="flex items-center gap-2.5 t-caption text-cream/50">
            <Pin size={16} r={2} className="text-cream/50" />
            Amaravati, Andhra Pradesh, India
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <div className="text-[11px] font-bold tracking-[0.16em] text-accent mb-4.5">
              {col.title}
            </div>
            <div className="flex flex-col gap-3">
              {col.links.map((lnk) => (
                <a
                  key={lnk.label}
                  href={lnk.href}
                  className="no-underline t-body-sm text-cream/[0.62]"
                >
                  {lnk.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1600px] mx-auto border-t border-cream/10 pt-6.5 flex items-center justify-between flex-wrap gap-4">
        <span className="t-caption text-cream/40">
          © 2025 Amaravati Quantum Valley. All rights reserved.
        </span>
        <span className="font-mono text-[12px] text-cream/35">
          |ψ⟩ = α|0⟩ + β|1⟩
        </span>
        <div className="flex gap-6">
          <a href="#" className="no-underline t-caption text-cream/45">
            Privacy
          </a>
          <a href="#" className="no-underline t-caption text-cream/45">
            Terms
          </a>
          <a href="#" className="no-underline t-caption text-cream/45">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
