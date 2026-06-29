"use client";

import { useState } from "react";
import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, ArrowLink, Accent } from "../components/ui";
import { PathIcon, Pin } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const routes = [
  { n: "01", label: "Invest", note: "AQV Quantum Fund · LPs" },
  { n: "02", label: "Partner", note: "Industry & institutions" },
  { n: "03", label: "Apply", note: "Startups, researchers, talent" },
  { n: "04", label: "Press", note: "Media & communications" },
];

const topicDefs = ["General", "Research", "Startup", "Industry", "Media"];

const channels = [
  { label: "GENERAL ENQUIRIES", value: "hello@aqv.example", icon: "M3 5 H21 V19 H3 Z M3 6 L12 13 L21 6" },
  { label: "PARTNERSHIPS", value: "partners@aqv.example", icon: "M7 12 l3 3 M10 15 l4-4 M3 11 l4-4 4 4 M21 11 l-4-4-4 4" },
  { label: "MEDIA & PRESS", value: "press@aqv.example", icon: "M6 3 H15 L18 6 V21 H6 Z M9 9 H15 M9 13 H15" },
];

const steps = [
  { n: "01", title: "We read every word", desc: "A real person on the right team reads your message — no automated triage, no black hole." },
  { n: "02", title: "We route you precisely", desc: "Investment, research, startup, industry or press — your note reaches the people who can actually help." },
  { n: "03", title: "We reply, usually in two days", desc: "Expect a considered response within two business days, with clear next steps to keep things moving." },
];

const findUs = [
  { label: "CAMPUS", value: "Amaravati Quantum Valley, Andhra Pradesh, India" },
  { label: "EMAIL", value: "hello@aqv.example" },
  { label: "PHONE", value: "+91 00000 00000" },
];

const faqDefs = [
  { q: "Who can apply to AQV?", a: "Researchers, students, founders, enterprises, investors and institutions are all welcome. Pick the topic that fits you in the form and we'll route you to the right program or team." },
  { q: "Is AQV operational today?", a: "AQV is being built in phases through 2030. Foundation facilities, partnerships and WISER programs are activating first, with IBM Quantum System Two and full campus build-out following on the published roadmap." },
  { q: "How do startups get access to quantum hardware?", a: "Resident startups in the AQV Launchpad get structured access to IBM Quantum System Two, shared labs and the software stack, alongside mentorship and capital from the AQV Quantum Fund." },
  { q: "Can institutions partner on talent and research?", a: "Yes. Universities and institutes can bring WISER curriculum to their campus, run joint research, and access shared infrastructure. Select the Research or General topic to start a conversation." },
];

/* ----------------------------------------------------- form field helper --- */

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2.5 block t-eyebrow text-ink/55">{label}</span>
      {children}
    </label>
  );
}

const inputCx =
  "w-full rounded-control border border-ink/15 bg-paper px-4 py-3.5 t-body text-ink outline-none transition-colors duration-200 placeholder:text-ink/35 focus:border-accent focus:ring-1 focus:ring-accent/40";

/* ============================================================== page === */

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [topic, setTopic] = useState("General");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="contact" theme="dark" />

      {/* ============ 01 · HERO ============ */}
      <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />
        <div aria-hidden className="absolute -right-40 top-1/4 hidden h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl lg:block" style={{ background: "radial-gradient(circle,var(--color-iris),transparent 68%)" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">CONTACT / APPLY</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="Let's build the" className="block" delay={0.1} />
              <TextReveal text="quantum future" className="block" delay={0.3} />
              <TextReveal text="together." className="block text-accent" delay={0.5} />
            </h1>
            <Reveal as="p" delay={0.66} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              Whether you want to invest, partner, apply or simply learn more — tell us how we can help, and the right team reaches out. One message, the correct desk, no runaround.
            </Reveal>
            <Reveal delay={0.76}>
              <ArrowLink href="#form" label="START A CONVERSATION" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* the ways to engage */}
          <Reveal delay={0.3} className="lg:pb-3">
            <div className="mb-5 t-overline text-cream/45">FOUR WAYS TO ENGAGE</div>
            <ul className="border-t border-cream/12">
              {routes.map((r) => (
                <li key={r.n} className="group flex items-baseline gap-5 border-b border-cream/12 py-4">
                  <span className="font-display text-[15px] text-accent/70">{r.n}</span>
                  <span className="flex-1 font-display text-[1.35rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1.5">{r.label}</span>
                  <span className="t-caption text-cream/45">{r.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="absolute bottom-9 left-5 z-10 flex items-center gap-3.5 sm:left-8 lg:left-10">
          <div className="relative h-11 w-px overflow-hidden bg-cream/20">
            <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
          </div>
          <span className="t-overline text-cream/45">SCROLL TO REACH US</span>
        </div>
      </section>

      {/* ============ 02 · THE FORM (centerpiece) ============ */}
      <section id="form" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* LEFT — statement + channels */}
          <div className="lg:sticky lg:top-28">
            <Reveal className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">02</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-ink/55">HOW CAN WE HELP</span>
            </Reveal>
            <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
              Tell us what you&apos;re <Accent>building.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-10 max-w-95 t-body text-ink/70">
              Choose a topic and share a few details. Every message routes to the team best placed to help — usually within two business days.
            </Reveal>

            <Reveal delay={0.14} className="flex flex-col gap-5 border-t border-ink/12 pt-8">
              {channels.map((c) => (
                <div key={c.label} className="group flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-chip border border-accent/20 bg-accent/[0.08] transition-colors duration-300 group-hover:border-accent/50">
                    <PathIcon d={c.icon} size={18} className="text-accent" sw={1.3} />
                  </span>
                  <div className="pt-0.5">
                    <div className="t-eyebrow text-ink/55">{c.label}</div>
                    <div className="mt-1.5 t-body-sm text-ink/70">{c.value}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* RIGHT — the styled form */}
          <Reveal variant="scale" delay={0.1} className="rounded-card border border-ink/12 bg-paper p-7 shadow-card sm:p-10 lg:p-11">
            <div className="mb-8">
              <div className="mb-4 t-eyebrow text-ink/55">I&apos;M REACHING OUT ABOUT</div>
              <div className="flex flex-wrap gap-2.5">
                {topicDefs.map((t) => {
                  const on = t === topic;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`rounded-pill border px-4.5 py-2.5 t-caption transition-colors duration-300 ${
                        on
                          ? "border-accent bg-accent text-cream"
                          : "border-ink/20 bg-transparent text-ink/70 hover:border-accent/50 hover:text-accent"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center px-2 py-12 text-center">
                <span className="mb-6 flex h-15 w-15 items-center justify-center rounded-full bg-accent/[0.14]">
                  <svg width="26" height="26" viewBox="0 0 24 24"><path d="M5 13 l4 4 L19 7" stroke="var(--color-iris)" strokeWidth="1.6" fill="none" /></svg>
                </span>
                <div className="mb-2.5 font-display text-[1.7rem] tracking-[-0.015em] text-ink">Thank you.</div>
                <div className="max-w-90 t-body text-ink/65">
                  Your message is on its way. The {topic} team will be in touch shortly.
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="mb-4.5 grid gap-4.5 sm:grid-cols-2">
                  <Field label="NAME">
                    <input value={form.name} onChange={set("name")} placeholder="Your name" className={inputCx} />
                  </Field>
                  <Field label="EMAIL">
                    <input type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className={inputCx} />
                  </Field>
                </div>
                <Field label="ORGANISATION" className="mb-4.5">
                  <input value={form.org} onChange={set("org")} placeholder="Company / institution" className={inputCx} />
                </Field>
                <Field label="TOPIC" className="mb-4.5">
                  <input value={topic} readOnly className={`${inputCx} bg-stone text-ink/70`} />
                </Field>
                <Field label="MESSAGE" className="mb-7">
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={4}
                    placeholder="Tell us a little about what you're working on…"
                    className={`${inputCx} resize-y`}
                  />
                </Field>
                <button
                  type="submit"
                  className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream"
                >
                  SEND MESSAGE
                  <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ============ 03 · WHAT HAPPENS NEXT ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal className="mb-6 flex items-center gap-3.5">
                <span className="t-eyebrow-num text-accent">03</span>
                <span className="h-px w-[30px] bg-accent/50" />
                <span className="t-eyebrow text-ink/55">WHAT HAPPENS NEXT</span>
              </Reveal>
              <Reveal as="h2" variant="wipe" className="t-h2">
                After you hit <Accent>send.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-80 t-body text-ink/65 lg:pb-2">
              No forms into the void. Here is exactly what to expect once your message lands with us.
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 0.1}
                variant="scale"
                className={`group rounded-card border border-ink/10 bg-paper p-7 transition-colors duration-300 hover:border-accent/40 lg:p-8 ${["lg:mt-0", "lg:mt-8", "lg:mt-16"][i]}`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-display text-[2.4rem] leading-none tracking-[-0.02em] text-accent/30 transition-colors duration-300 group-hover:text-accent">{s.n}</span>
                  <span className="h-px flex-1 bg-ink/10" />
                </div>
                <div className="mb-2.5 font-display text-[1.4rem] tracking-[-0.015em]">{s.title}</div>
                <p className="t-body-sm text-ink/60">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · FIND US (asymmetric office band) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Reveal className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">04</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-cream/55">FIND US</span>
            </Reveal>
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Visit the <Accent>valley.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-cream/70">
              We are building on a 9M sq ft campus in Amaravati. Drop in by appointment, or reach us directly through any of the channels below.
            </Reveal>

            <Reveal delay={0.14} className="border-t border-cream/12">
              {findUs.map((f) => (
                <div key={f.label} className="flex items-start gap-5 border-b border-cream/12 py-5">
                  <Pin size={20} className="mt-0.5 flex-shrink-0 text-gold" sw={1.3} />
                  <div>
                    <div className="t-eyebrow text-cream/55">{f.label}</div>
                    <div className="mt-1.5 t-body text-cream">{f.value}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* media band — campus */}
          <Reveal variant="scale" delay={0.12} className="relative">
            <div className="overflow-hidden rounded-card border border-cream/10 shadow-float">
              <img src="/images/cta.png" alt="Amaravati Quantum Valley campus" className="block aspect-[16/10] max-h-90 w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.15) 0%,rgba(10,14,26,0.55) 100%)" }} />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-65 rounded-card border border-cream/12 bg-night-2/95 p-5 shadow-card backdrop-blur-sm sm:-left-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[2rem] leading-none tracking-[-0.02em] text-accent"><Counter value="9M" /></span>
                <span className="t-caption text-cream/55">sq ft</span>
              </div>
              <div className="mt-2 t-body-sm text-cream/65">Purpose-built quantum campus, Amaravati.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 05 · FAQ ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">05</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-ink/55">FAQ</span>
            </Reveal>
            <Reveal as="h2" variant="wipe" className="mb-5 t-h2">
              Questions, <Accent>answered.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="max-w-85 t-body text-ink/65">
              Can&apos;t find what you need? Send us a note above and we&apos;ll get you a precise answer.
            </Reveal>
          </div>

          <Reveal delay={0.08} className="border-t border-ink/14">
            {faqDefs.map((f, i) => {
              const on = i === openFaq;
              return (
                <div key={f.q} className="border-b border-ink/14">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(on ? -1 : i)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="font-display text-[1.35rem] tracking-[-0.01em] text-ink">{f.q}</span>
                    <span className={`flex-shrink-0 font-display text-[26px] font-light leading-none text-accent transition-transform duration-300 ${on ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-out-quart ${on ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="max-w-180 pb-7 t-body text-ink/65">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ============ 06 · CTA ============ */}
      <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">READY TO BEGIN</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Ready to" className="block" delay={0.05} />
            <TextReveal text="begin?" className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Invest, partner or apply — take the first step toward building India&apos;s quantum future with AQV.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="#form" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              START A CONVERSATION
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <a href="/ecosystem" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              EXPLORE THE ECOSYSTEM
            </a>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
