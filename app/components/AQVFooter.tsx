import { Pin } from "./dc";
import FooterNewsletter from "./FooterNewsletter";

const CAREERS_URL = "https://quantumjobs.in";

type FLink = { label: string; href: string; external?: boolean; anchor?: boolean };

const linkCols: { title: string; links: FLink[] }[] = [
  {
    title: "AQV",
    links: [
      { label: "About AQV", href: "/about" },
      { label: "Quantum Mission & Mandate", href: "/about/quantum-mission" },
      { label: "Governance & Leadership", href: "/about/governance" },
      { label: "Careers", href: CAREERS_URL, external: true },
    ],
  },
  {
    title: "TECHNOLOGY",
    links: [
      { label: "Research Domains", href: "/technology/quantum-computing" },
      { label: "Hardware & Systems", href: "/technology/hardware" },
      { label: "Software & Applications", href: "/technology/software" },
      { label: "Infrastructure & Facilities", href: "/infrastructure" },
    ],
  },
  {
    title: "ENGAGE",
    links: [
      { label: "Industry & Enterprise", href: "/industry" },
      { label: "Build at AQV", href: "/engage/hardware-companies" },
      { label: "Startups & Launchpad", href: "/startups" },
      { label: "Invest & Establish", href: "/invest" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "LEARN & NEWS",
    links: [
      { label: "Talent & Skills", href: "/talent" },
      { label: "Programs", href: "/programs" },
      { label: "Events & Summits", href: "/events" },
      { label: "Newsroom", href: "/news" },
      { label: "Resources", href: "/resources/reports" },
    ],
  },
  {
    title: "OFFICIAL",
    links: [
      { label: "Tenders & Procurement", href: "/tenders" },
      { label: "Government Orders & Policies", href: "/resources/government-orders" },
      { label: "Downloads & Media Kit", href: "/resources/reports#downloads", anchor: true },
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legal: FLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

// Social handles TBD — placeholders until official channels are confirmed.
const socials: { label: string; href: string; path: string }[] = [
  { label: "LinkedIn", href: "#", path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.64 4.76 6.08V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4z" },
  { label: "X (Twitter)", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "YouTube", href: "#", path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" },
];

const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const Arrow = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" className="ml-1 inline-block shrink-0 opacity-55">
    <path d="M3 9 L9 3 M4 3 H9 V8" stroke="currentColor" strokeWidth="1.3" fill="none" />
  </svg>
);

export default function AQVFooter() {
  return (
    <footer className="border-t border-cream/10 bg-[#070A14] px-5 pb-9 pt-12 text-cream sm:px-8 lg:px-10 lg:pt-18">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-8 gap-y-11 sm:grid-cols-3 lg:grid-cols-[1.6fr_repeat(5,minmax(0,1fr))] lg:gap-x-10">
        {/* ---- Connect / brand block ---- */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <a href="/" className="mb-5.5 flex items-center gap-3 text-cream no-underline">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="aqvftmark" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0" stopColor="#8B92E8" />
                  <stop offset="1" stopColor="#C9A86A" />
                </linearGradient>
              </defs>
              <path d="M20 4 L34 30 H26 L20 18 L14 30 H6 Z" stroke="url(#aqvftmark)" strokeWidth="2" strokeLinejoin="round" fill="none" />
              <circle cx="20" cy="26" r="2.4" fill="url(#aqvftmark)" />
            </svg>
            <span className="leading-[1.1]">
              <span className="block text-[13px] font-bold tracking-[0.12em]">AMARAVATI QUANTUM VALLEY</span>
              <span className="mt-0.75 block text-[10px] text-cream/50">India&apos;s Quantum-AI Ecosystem</span>
            </span>
          </a>

          <p className="mb-6 max-w-75 t-body-sm leading-[1.65] text-cream/55">
            India&apos;s first integrated Quantum-AI ecosystem — uniting research, infrastructure, hardware, talent and capital in Amaravati, Andhra Pradesh.
          </p>

          {/* newsletter */}
          <div className="mb-6">
            <div className="mb-2.5 t-overline text-accent">STAY IN THE LOOP</div>
            <FooterNewsletter />
          </div>

          {/* address + email */}
          <div className="mb-5 flex flex-col gap-2 t-caption text-cream/55">
            <span className="flex items-center gap-2.5">
              <Pin size={16} r={2} className="text-cream/50" />
              Amaravati, Andhra Pradesh, India
            </span>
            <a href="mailto:info@aqv.in" className="no-underline text-cream/55 transition-colors hover:text-cream">
              info@aqv.in
            </a>
          </div>

          {/* social */}
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 no-underline transition-colors hover:border-accent/50 hover:text-cream">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* ---- link columns ---- */}
        {linkCols.map((col) => (
          <div key={col.title}>
            <div className="mb-4.5 t-overline text-accent">{col.title}</div>
            <div className="flex flex-col gap-3">
              {col.links.map((lnk) => (
                <a
                  key={lnk.label}
                  href={lnk.href}
                  {...(lnk.external ? external : {})}
                  className="inline-flex items-start t-body-sm leading-snug text-cream/62 no-underline transition-colors hover:text-cream"
                >
                  {lnk.label}
                  {lnk.external && <Arrow />}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---- bottom bar ---- */}
      <div className="mx-auto mt-13 flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-cream/10 pt-6.5">
        <div className="flex items-center gap-4">
          <span className="t-caption text-cream/40">© 2026 Amaravati Quantum Valley. All rights reserved.</span>
          <span className="hidden font-mono text-[12px] text-cream/25 lg:inline">|ψ⟩ = α|0⟩ + β|1⟩</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.map((l) => (
            <a key={l.label} href={l.href} className="t-caption text-cream/45 no-underline transition-colors hover:text-cream">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
