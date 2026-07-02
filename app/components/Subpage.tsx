"use client";

import * as React from "react";
import AQVNav from "./AQVNav";
import AQVFooter from "./AQVFooter";
import SectionNav from "./SectionNav";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink } from "./ui";
import SectionShell from "./ui/SectionShell";
import { PathIcon } from "./dc";

/* --------------------------------------------------------------- types --- */

type Theme = "dark" | "light";
type Link = { href: string; label: string; external?: boolean; meta?: string };

type Hero = {
  eyebrow: string;
  title: string;
  accent?: string;
  lead: string;
  image?: string;
  /** "feature" = tall cinematic hero (default); "simple" = compact for docs */
  kind?: "feature" | "simple";
};

export type Block =
  | { kind: "prose"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; body?: string[]; image?: string; flip?: boolean; theme?: Theme }
  | { kind: "media"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; body?: string[]; image: string; bullets?: { t: string; d: string }[]; flip?: boolean; link?: Link; theme?: Theme }
  | { kind: "features"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; lead?: string; items: { title: string; desc: string; icon: string }[]; theme?: Theme }
  | { kind: "list"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; lead?: string; items: { num: string; title: string; label?: string; desc: string }[]; theme?: Theme }
  | { kind: "stats"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; items: { value: string; label: string }[]; theme?: Theme }
  | { kind: "cards"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; lead?: string; items: { title: string; desc: string; img: string; tag?: string; href?: string }[]; theme?: Theme }
  | { kind: "quote"; id?: string; nav?: string; quote: string; source?: string; theme?: Theme }
  | { kind: "faq"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; items: { q: string; a: string }[]; theme?: Theme }
  | { kind: "links"; id?: string; nav?: string; num?: string; eyebrow?: string; title: string; accent?: string; lead?: string; groups: { title: string; links: Link[] }[]; theme?: Theme }
  | { kind: "doc"; id?: string; nav?: string; heading: string; body: string[]; theme?: Theme };

type Cta = {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  primary?: Link;
  secondary?: Link;
};

export type SubpageProps = {
  active?: string;
  hero: Hero;
  blocks: Block[];
  cta?: Cta | false;
};

/* --------------------------------------------------------------- tones --- */

const tone = (dark: boolean) => ({
  heading: dark ? "text-cream" : "text-ink",
  body: dark ? "text-cream/70" : "text-ink/70",
  muted: dark ? "text-cream/55" : "text-ink/55",
  faint: dark ? "text-cream/15" : "text-ink/15",
  border: dark ? "border-cream/12" : "border-ink/12",
  cardBg: dark ? "bg-cream/3" : "bg-white",
  cardBorder: dark ? "border-cream/12" : "border-ink/10",
});

const ext = (l?: Link) => (l?.external ? { target: "_blank", rel: "noopener noreferrer" } : {});
const PAD = "px-5 sm:px-8 lg:px-10 py-16 lg:py-28";

function Head({ num, eyebrow, title, accent, dark, className = "" }: { num?: string; eyebrow?: string; title: string; accent?: string; dark: boolean; className?: string }) {
  const t = tone(dark);
  return (
    <div className={className}>
      {eyebrow && <Eyebrow num={num} label={eyebrow} className="mb-6" />}
      <Reveal as="h2" variant="wipe" className={`t-h2 ${t.heading}`}>
        {title} {accent && <span className="text-accent">{accent}</span>}
      </Reveal>
    </div>
  );
}

/* --------------------------------------------------------------- blocks --- */

function BlockView({ block, dark }: { block: Block; dark: boolean }) {
  const t = tone(dark);

  switch (block.kind) {
    case "prose": {
      const flip = block.flip;
      return (
        <div className={`grid items-center gap-10 lg:gap-16 ${block.image ? "lg:grid-cols-2" : ""}`}>
          <div className={flip ? "lg:order-2" : ""}>
            <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} className="mb-7" />
            {block.body?.map((p, i) => (
              <Reveal as="p" key={i} delay={0.08 + i * 0.06} className={`mb-4.5 max-w-160 t-body ${t.body}`}>{p}</Reveal>
            ))}
          </div>
          {block.image && (
            <Reveal variant="scale" className={`overflow-hidden rounded-card border ${t.cardBorder} ${flip ? "lg:order-1" : ""}`}>
              <img src={block.image} alt="" className="block aspect-[4/3] w-full object-cover" />
            </Reveal>
          )}
        </div>
      );
    }

    case "media": {
      const flip = block.flip;
      return (
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="scale" className={`relative ${flip ? "lg:order-2" : ""}`}>
            <div className="overflow-hidden rounded-card shadow-float">
              <img src={block.image} alt="" className="block aspect-[16/10] max-h-[440px] w-full object-cover" />
            </div>
          </Reveal>
          <div className={flip ? "lg:order-1" : ""}>
            <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} className="mb-6" />
            {block.body?.map((p, i) => (
              <Reveal as="p" key={i} delay={0.08 + i * 0.05} className={`mb-4.5 max-w-120 t-body ${t.body}`}>{p}</Reveal>
            ))}
            {block.bullets && (
              <ul className="mt-7">
                {block.bullets.map((b, i) => (
                  <Reveal as="li" key={b.t} delay={i * 0.06} className={`group flex items-start gap-4 border-t ${t.border} py-4 last:border-b ${i % 2 ? "lg:ml-6" : ""}`}>
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
                    <div>
                      <div className={`font-display text-[1.15rem] tracking-[-0.01em] ${t.heading}`}>{b.t}</div>
                      <div className={`mt-1 t-body-sm ${t.muted}`}>{b.d}</div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            )}
            {block.link && (
              <Reveal delay={0.1} className="mt-8">
                <ArrowLink href={block.link.href} label={block.link.label} accent="iris" theme={dark ? "dark" : "light"} gap={44} />
              </Reveal>
            )}
          </div>
        </div>
      );
    }

    case "features":
      return (
        <>
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} />
            {block.lead && <Reveal as="p" delay={0.1} className={`max-w-100 t-body ${t.body} lg:pb-2`}>{block.lead}</Reveal>}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {block.items.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08} variant="scale" className={`group border-t ${t.border} pt-7`}>
                <span className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full border ${t.border} transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10`}>
                  <PathIcon d={f.icon} size={20} className="text-accent" sw={1.4} />
                </span>
                <h3 className={`mb-2.5 font-display text-[1.35rem] tracking-[-0.01em] ${t.heading}`}>{f.title}</h3>
                <p className={`max-w-72 t-body-sm ${t.muted}`}>{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </>
      );

    case "list":
      return (
        <>
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} />
            {block.lead && <Reveal as="p" delay={0.1} className={`max-w-100 t-body ${t.body} lg:pb-2`}>{block.lead}</Reveal>}
          </div>
          <ol className={`border-t ${t.border}`}>
            {block.items.map((p, i) => (
              <Reveal as="li" key={p.num} delay={i * 0.06} className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b ${t.border} py-7 sm:grid-cols-[auto_0.9fr_1.1fr] sm:gap-10`}>
                <span className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-none tracking-[-0.02em] text-accent/70">{p.num}</span>
                <div>
                  <div className={`font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-none tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1.5 ${t.heading}`}>{p.title}</div>
                  {p.label && <div className="mt-2 t-eyebrow text-accent">{p.label}</div>}
                </div>
                <p className={`col-span-2 max-w-120 t-body-sm ${t.muted} sm:col-span-1`}>{p.desc}</p>
              </Reveal>
            ))}
          </ol>
        </>
      );

    case "stats":
      return (
        <>
          <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} className="mb-14 max-w-180" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
            {block.items.map((m, i) => (
              <Reveal key={m.label} delay={(i % 4) * 0.08} className={`border-t ${t.border} pt-6`}>
                <div className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.025em] text-accent">
                  <Counter value={m.value} />
                </div>
                <div className={`mt-3 t-eyebrow ${t.muted}`}>{m.label}</div>
              </Reveal>
            ))}
          </div>
        </>
      );

    case "cards":
      return (
        <>
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} />
            {block.lead && <Reveal as="p" delay={0.1} className={`max-w-100 t-body ${t.body} lg:pb-2`}>{block.lead}</Reveal>}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((c, i) => {
              const inner = (
                <>
                  <div className="overflow-hidden">
                    <img src={c.img} alt="" className="block aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    {c.tag && <div className="mb-3 t-eyebrow text-accent">{c.tag}</div>}
                    <h3 className={`mb-2 font-display text-[1.35rem] tracking-[-0.01em] ${t.heading}`}>{c.title}</h3>
                    <p className={`t-body-sm ${t.muted}`}>{c.desc}</p>
                  </div>
                </>
              );
              return (
                <Reveal key={c.title} variant="scale" delay={(i % 3) * 0.08} className={`group overflow-hidden rounded-card border ${t.cardBorder} ${t.cardBg}`}>
                  {c.href ? (
                    <a href={c.href} className="block no-underline">{inner}</a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </>
      );

    case "quote":
      return (
        <div className="grid items-start gap-10 lg:grid-cols-[0.2fr_1fr] lg:gap-12">
          <Reveal className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.7] tracking-[-0.04em] text-accent/30">&ldquo;</Reveal>
          <div>
            <Reveal as="blockquote" variant="wipe" className={`font-display text-[clamp(1.7rem,4vw,3.1rem)] font-medium leading-[1.14] tracking-[-0.02em] ${t.heading}`}>
              {block.quote}
            </Reveal>
            {block.source && (
              <Reveal delay={0.15} className="mt-8 flex items-center gap-3.5">
                <span className="h-px w-10 bg-accent" />
                <span className={`t-eyebrow ${t.muted}`}>{block.source}</span>
              </Reveal>
            )}
          </div>
        </div>
      );

    case "faq":
      return (
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} className="lg:sticky lg:top-28 lg:self-start" />
          <FaqList items={block.items} dark={dark} />
        </div>
      );

    case "links":
      return (
        <>
          <div className="mb-12 max-w-180">
            <Head num={block.num} eyebrow={block.eyebrow} title={block.title} accent={block.accent} dark={dark} />
            {block.lead && <Reveal as="p" delay={0.1} className={`mt-5 max-w-140 t-body ${t.body}`}>{block.lead}</Reveal>}
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {block.groups.map((g, gi) => (
              <Reveal key={g.title} delay={(gi % 3) * 0.07}>
                <div className="mb-4.5 t-overline text-accent">{g.title}</div>
                <ul className={`border-t ${t.border}`}>
                  {g.links.map((l) => (
                    <li key={l.label} className={`border-b ${t.border}`}>
                      <a href={l.href} {...ext(l)} className={`group flex items-center justify-between gap-4 py-3.5 no-underline ${t.heading}`}>
                        <span className="t-body-sm transition-transform duration-300 group-hover:translate-x-1.5">{l.label}</span>
                        <span className="flex items-center gap-2">
                          {l.meta && <span className={`t-caption ${t.muted}`}>{l.meta}</span>}
                          <svg width="12" height="12" viewBox="0 0 14 14" className="shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"><path d={l.external ? "M3 9 L9 3 M4 3 H9 V8" : "M3 7 H11 M8 4 L11 7 L8 10"} stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </>
      );

    case "doc":
      return (
        <div className="max-w-190">
          <Reveal as="h2" variant="wipe" className={`mb-6 t-h3 ${t.heading}`}>{block.heading}</Reveal>
          {block.body.map((p, i) => (
            <Reveal as="p" key={i} delay={0.05 + i * 0.04} className={`mb-4.5 t-body ${t.body}`}>{p}</Reveal>
          ))}
        </div>
      );
  }
}

function FaqList({ items, dark }: { items: { q: string; a: string }[]; dark: boolean }) {
  const t = tone(dark);
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className={`border-t ${t.border}`}>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={it.q} className={`border-b ${t.border}`}>
            <button onClick={() => setOpen(on ? null : i)} className={`flex w-full items-center justify-between gap-6 py-5 text-left ${t.heading}`}>
              <span className="font-display text-[1.15rem] tracking-[-0.01em]">{it.q}</span>
              <span className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border ${t.border} transition-transform duration-300 ${on ? "rotate-45" : ""}`}>
                <svg width="12" height="12" viewBox="0 0 14 14"><path d="M7 2 V12 M2 7 H12" stroke="currentColor" strokeWidth="1.4" /></svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <p className={`overflow-hidden max-w-140 t-body-sm ${t.muted}`}>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------------------------------------------- page --- */

// alternate light/sand and dark surfaces unless a block pins its own theme
function themeFor(block: Block, idx: number): Theme {
  if (block.theme) return block.theme;
  return idx % 2 === 0 ? "light" : "dark";
}

export default function Subpage({ active, hero, blocks, cta }: SubpageProps) {
  const simple = hero.kind === "simple";

  // scroll-spy sections: hero + any block that declares an id + nav label
  const sections = React.useMemo(
    () => [
      { id: "overview", label: "Overview" },
      ...blocks.flatMap((b) => (b.id && b.nav ? [{ id: b.id, label: b.nav }] : [])),
    ],
    [blocks]
  );

  return (
    <div className="w-full overflow-x-clip bg-night font-sans text-cream">
      <AQVNav active={active} theme="dark" />
      <SectionNav sections={sections} />

      {/* ---- hero ---- */}
      <section id="overview" data-theme="dark" className={`relative overflow-hidden bg-night px-5 sm:px-8 lg:px-10 ${simple ? "pt-32 pb-14 lg:pt-40 lg:pb-20" : "flex min-h-screen flex-col justify-center pt-32 pb-20"}`}>
        {hero.image && !simple && (
          <div className="absolute inset-y-0 right-0 hidden w-[48%] opacity-30 lg:block">
            <img src={hero.image} alt="" className="block h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 4%,rgba(10,14,26,0.55) 42%,rgba(10,14,26,0.15) 100%)" }} />
          </div>
        )}
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <Reveal className="mb-8 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">01</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">{hero.eyebrow}</span>
          </Reveal>
          <h1 className={`mb-8 max-w-[18ch] ${simple ? "t-h2" : "t-display"}`}>
            <TextReveal text={hero.title} className="block" delay={0.1} />
            {hero.accent && <TextReveal text={hero.accent} className="block text-accent" delay={0.32} />}
          </h1>
          <Reveal as="p" delay={0.6} className="max-w-135 t-lead text-cream/[0.72]">{hero.lead}</Reveal>
        </div>

        {!simple && (
          <div className="absolute bottom-9 left-5 z-10 flex items-center gap-3.5 sm:left-8 lg:left-10">
            <div className="relative h-11 w-px overflow-hidden bg-cream/20">
              <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
            </div>
            <span className="t-overline text-cream/45">SCROLL TO EXPLORE</span>
          </div>
        )}
      </section>

      {/* ---- blocks ---- */}
      {blocks.map((block, i) => {
        const th = themeFor(block, i);
        const dark = th === "dark";
        return (
          <SectionShell key={block.id ?? `${block.kind}-${i}`} id={block.id} theme={th} innerClassName={PAD}>
            <BlockView block={block} dark={dark} />
          </SectionShell>
        );
      })}

      {/* ---- cta ---- */}
      {cta !== false && <CtaSection cta={cta} />}

      <AQVFooter />
    </div>
  );
}

function CtaSection({ cta }: { cta?: Cta }) {
  const c: Cta = cta ?? {
    eyebrow: "JOIN THE QUANTUM FUTURE",
    title: "Partner with",
    accent: "AQV.",
    lead: "Whether you research, build, fund or govern — there is a place for you in the valley.",
    primary: { href: "/contact", label: "APPLY / CONNECT" },
    secondary: { href: "/about", label: "ABOUT AQV" },
  };
  return (
    <section data-theme="dark" className="relative flex min-h-[70vh] items-center overflow-hidden bg-night px-5 py-24 sm:px-8 lg:px-10">
      <div className="absolute inset-0">
        <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,rgba(10,14,26,0.95) 0%,rgba(10,14,26,0.72) 48%,rgba(10,14,26,0.4) 100%)" }} />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {c.eyebrow && (
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">{c.eyebrow}</span>
          </Reveal>
        )}
        <h2 className="mb-8 max-w-[16ch] t-display-2 text-cream">
          <TextReveal text={c.title} className="block" delay={0.05} />
          {c.accent && <TextReveal text={c.accent} className="block text-accent" delay={0.22} />}
        </h2>
        {c.lead && <Reveal as="p" delay={0.2} className="mb-11 max-w-130 t-lead text-cream/[0.72]">{c.lead}</Reveal>}
        <Reveal delay={0.3} className="flex flex-wrap gap-4">
          {c.primary && (
            <a href={c.primary.href} {...ext(c.primary)} className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              {c.primary.label}
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
          )}
          {c.secondary && (
            <a href={c.secondary.href} {...ext(c.secondary)} className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              {c.secondary.label}
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
