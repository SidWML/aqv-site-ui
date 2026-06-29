# Amaravati Quantum Valley (AQV) — Product Requirements Document

| | |
|---|---|
| **Product** | Amaravati Quantum Valley marketing & ecosystem website |
| **Codebase** | `aqv-ui` |
| **Version** | 1.0 |
| **Date** | 2026-06-29 |
| **Status** | Active development |
| **Owner** | AQV web |

> Scope note: this PRD defines **what** the product must be and do, the **default AQV design system** it must use, and the **awwwards.com / draftly-grade experience bar** it must hit. Per request, it deliberately does **not** prescribe per-section layout or composition designs — layout is left to implementation.

---

## 1. Product overview & vision

Amaravati Quantum Valley is **India's first integrated quantum-AI ecosystem**, based in Amaravati, Andhra Pradesh. It unites research, infrastructure, quantum hardware, talent and capital into one self-reinforcing system so that **quantum discovery becomes real-world deployment** — anchored by **IBM Quantum System Two**, India's most advanced quantum system.

The website is the ecosystem's flagship digital presence: a **high-end marketing and brand site** (not an application) whose job is to communicate AQV's vision, capabilities and credibility to multiple audiences and convert them into participants (applicants, partners, founders, talent, press).

**Vision for the site:** the most ambitious, modern and credible quantum-initiative website in the world — combining the **informational completeness** of a top corporate site with the **immersive, animated, futuristic craft** of award-winning (awwwards.com / draftly) experiences.

---

## 2. Goals & non-goals

### Goals
- Communicate, with clarity, **what AQV is, why it exists, and what it offers** to each audience.
- Project **credibility and scale** (IBM partnership, campus, fund, research depth).
- Drive **conversions**: applications, partnership enquiries, talent registrations, newsletter sign-ups, press engagement.
- Deliver a **distinctive, memorable, award-grade experience** that differentiates AQV from templated institutional sites.
- Maintain a **single, consistent design system** across every page and both layouts.

### Non-goals
- Not a web application, portal, or logged-in product.
- No e-commerce or transactional flows.
- **No layout/composition design prescriptions in this document** (intentionally out of scope per request).
- No heavy smooth-scroll/scroll-hijacking libraries (e.g. Lenis) or manual parallax that fight the animation engine — these were trialled and rejected.
- No hardcoded colors, type sizes, or inline styles outside the design system.

---

## 3. Success metrics

- **Engagement:** average scroll depth ≥ 70% on the homepage; meaningful time-on-page.
- **Conversion:** measurable click-through on primary CTAs (Apply/Register, Explore, Partner, Subscribe).
- **Performance:** Lighthouse Performance ≥ 90 on the classic layout; Core Web Vitals "Good" (LCP < 2.5s, CLS < 0.1, INP < 200ms) on capable hardware.
- **Quality bar:** experience quality consistent with awwwards-featured sites (subjective design review sign-off).
- **Accessibility:** WCAG 2.1 AA for content pages; honors `prefers-reduced-motion`.

---

## 4. Audiences & user needs

| Audience | Primary need from the site |
|---|---|
| Researchers & academics | Understand research domains, facilities, collaboration & publication pathways |
| Founders & startups | Understand the incubator, fund, infrastructure access, how to apply |
| Talent & students (WISER) | Understand programs, fellowships, careers, how to join |
| Industry & enterprise | Understand applied use-cases, partnership models, compute access |
| Government & policy | Understand national impact, scale, sovereign capability |
| Investors | Understand the fund, ecosystem maturity, opportunity |
| Media & press | Find news, announcements, events, contacts |
| General / curious | Understand "what is quantum, what is AQV, why it matters" |

Every page must serve at least one audience's need explicitly, and the homepage must orient **all** of them within the first few sections.

---

## 5. Experience principles (the awwwards / draftly bar)

These are **quality and behavior principles**, not layouts:

1. **Substance first, spectacle second.** Every section must inform (headline → explanation → supporting detail). Motion and 3D enhance comprehension; they never replace content. Sparse "text-on-black" is a failure state.
2. **Cinematic & kinetic.** Typography, media and 3D should feel alive — entrance reveals, kinetic headlines, scroll-driven sequences, count-ups, and tasteful micro-interactions.
3. **Immersive but legible.** Dark, futuristic atmospheres (the v2 layout) and high-contrast editorial clarity (the classic layout) must both remain readable and accessible.
4. **Responsive & robust.** The experience degrades gracefully — mobile-first, reduced-motion aware, no broken WebGL = no broken page.
5. **Consistent.** One design system, one motion language, one voice across all pages and both layouts.
6. **Performant.** Richness must not cost the user — assets are optimized, heavy modules are loaded on demand.

---

## 6. Information architecture

### Two layouts (both are products of this PRD)

- **Classic (default)** — route `/`. The production marketing site. Editorial rhythm of alternating light/dark sections. The approved baseline for **content density and completeness**.
- **v2 (experimental)** — route `/v2`. The awwwards/draftly-grade variant: cohesive dark/futuristic atmosphere, **3D WebGL hero**, **scroll-scrubbed cinematic sequence**, kinetic type, glassmorphism. **Must match the classic layout's informational density and imagery** while adding the immersive layer.

Both layouts share the same design system, navigation, footer, content model, and motion language.

### Sitemap (routes present)

```
/ (home)              /ecosystem        /research         /about
/talent               /startups         /industry         /programs
/partners             /media            /infrastructure   /contact
/v2 (experimental homepage)
```

### Homepage section inventory (content requirements, not layouts)

The homepage must, in order, deliver the full AQV story:

1. **Hero** — identity statement: who AQV is, where, the one-line promise; primary CTAs.
2. **Foundation / "What is AQV"** — plain-language explanation of the ecosystem and its purpose.
3. **The Five Pillars** — Infrastructure, Hardware, Research, Talent, Capital & Startups, each described.
4. **IBM Quantum System Two** — the anchor hardware: what it is, key specs, and what's inside it.
5. **Launchpad / Startups** — the incubator, fund, mentorship, offerings, and outcomes.
6. **Research** — the research domains, approach (academic collaboration, talent, IP), and labs.
7. **Infrastructure / Campus** — the physical campus: scale, sustainability, collaboration.
8. **Partners** — partner categories, value of partnership, credibility metrics, testimonial.
9. **Journal / Newsroom** — latest news, events, and announcements.
10. **Impact** — headline ecosystem metrics.
11. **CTA** — closing call to participate.

### Subpage purpose (content requirements)

| Route | Must communicate |
|---|---|
| `/ecosystem` | The full value-chain and how the five layers interconnect |
| `/research` | Domains, facilities, programs, collaboration & publication pathways |
| `/about` | Mission, story, leadership, vision, national context |
| `/talent` | WISER, fellowships, education, careers, how to join |
| `/startups` | Incubator, fund, application process, founder support |
| `/industry` | Applied use-cases by sector, enterprise partnership models |
| `/programs` | Structured programs, cohorts, timelines, eligibility |
| `/partners` | Partner types, benefits, current partners, how to partner |
| `/media` | News, press releases, events, media resources |
| `/infrastructure` | Campus, labs, compute, facilities in depth |
| `/contact` | Ways to reach AQV; enquiry/registration entry points |

---

## 7. Design system (default AQV system — mandatory)

The site uses **one design system**, defined as design tokens in `app/globals.css` (`@theme` + `@layer components`) and documented in `DESIGN_SYSTEM.md`. **All styling must use these tokens via Tailwind utilities — never hardcoded hex, arbitrary font sizes, or inline style values.**

### 7.1 Colour
- **Surfaces:** `night` `#0A0E1A` (primary dark), `night-2` `#11162A` (raised dark), `steel` `#E8E7EA`, `sand` `#F4F1EA` (primary light), `stone` `#EDEAE1`, `paper` `#FBF9F4`.
- **Text:** `ink` `#1A1A1A` (on light), `cream` `#F5F2EC` (on dark).
- **Quantum accent (primary, lead on every surface):** `iris` `#8B92E8` (default), `indigo` `#5B6CFF` (strong), `indigo-deep` `#4B54D6`. Semantic: `accent` = iris, `accent-strong` = indigo.
- **Warm secondary (sparing, rare):** `gold` `#C9A86A` (`accent-warm`).
- Colour is applied separately from typography so one scale works on both dark and light surfaces.

### 7.2 Typography
- **Fonts:** Inter (`font-display`, `font-sans`); IBM Plex Mono (`font-mono`).
- **Single type scale** (geometry only; colour applied separately): `t-display`, `t-display-2`, `t-h2`, `t-h3`, `t-h4`, `t-title-lg`, `t-title`, `t-title-sm`, `t-stat-lg`, `t-stat`, `t-quote`, `t-index`, `t-eyebrow`, `t-eyebrow-num`, `t-overline`, `t-lead`, `t-body`, `t-body-sm`, `t-caption`, `t-micro`, `t-mono`.
- Headings use Inter medium with tight tracking; eyebrows/overlines use uppercase with wide tracking; mono is reserved for technical/quant labels and equations.

### 7.3 Spacing
- 4px-based scale via Tailwind. **No arbitrary `[Npx]` spacing** — use canonical scale steps (e.g. `py-30`, not `py-[120px]`).

### 7.4 Radius
`rounded-control` (10px), `rounded-chip` (12px), `rounded-card` (14px), `rounded-pill` (999px).

### 7.5 Borders
Hairline dividers and card outlines use accent or neutral at low opacity (e.g. `border-ink/12` on light, `border-cream/12` on dark). On dark surfaces, raised cards must be **visibly** elevated (a low-opacity light fill plus a hairline border), never invisible.

### 7.6 Elevation
`shadow-card` (resting), `shadow-panel` (raised), `shadow-float` (floating media). Shadows are tuned for light surfaces; dark surfaces use glow/border for separation.

### 7.7 Iconography
Line icons rendered through a shared `PathIcon` primitive using `currentColor` (SVG presentation attributes do not resolve CSS `var()` — colour via Tailwind `text-*`/`fill-*`/`stroke-*` or `currentColor`). Icon chips use the `icon-chip` utility (accent-tinted square with ring).

### 7.8 Imagery
- Real project assets must be used richly (see §13). Imagery is a first-class element, not decoration.
- Image height is **capped** in content contexts to avoid excessive scroll; tall aspect ratios are flattened to landscape except intentional portraits (which are height-capped).
- Full-bleed background imagery uses scrims/gradients so overlaid text stays legible.

### 7.9 Motion tokens
- Easing: `--ease-out-quart` `cubic-bezier(0.22, 1, 0.36, 1)`.
- Smooth native scroll only (`scroll-behavior: smooth`); **no scroll-hijacking libraries**.
- Reveal/entrance animation is engine-driven (see §9), not ad-hoc.

---

## 8. Brand voice & content

- **Tone:** confident, visionary, credible, plainspoken. Avoids hype-without-substance.
- **Pattern for every section:** headline → one-line promise → explanatory body → supporting detail/metrics.
- **Terminology:** "Amaravati Quantum Valley / AQV", "IBM Quantum System Two", "WISER", "AQV Quantum Fund".
- Numbers and claims (qubits, temperature, fund size, jobs, acres) must be consistent site-wide.

---

## 9. Motion & interaction requirements

Implemented with **Framer Motion** (`motion/react`) and, for v2, **react-three-fiber**. Requirements (behaviors, not layouts):

- **Entrance reveals:** content reveals on scroll-into-view (fade/rise, clip-wipe for headings, scale for media), staggered within a group, played once.
- **Kinetic typography:** hero/feature headlines may reveal per-word or per-character (opacity + rise + de-blur).
- **Count-ups:** numeric stats animate from zero when scrolled into view, preserving prefixes/suffixes (e.g. `156+`, `<15 mK`, `₹500Cr+`, `99.9%`).
- **Carousels:** horizontal scrollable rails (research) and auto-advancing banners with indicators (launchpad).
- **3D (v2):** a WebGL "quantum core" hero (distorting, glowing, cursor-reactive, bloom), loaded client-only.
- **Scroll-scrubbed sequence (v2):** an image-sequence cinematic section scrubbed by scroll progress (Apple-style), driven by Framer scroll values.
- **Micro-interactions (v2):** magnetic buttons, mouse-tilt cards, a trailing glow cursor, marquees, film-grain and aurora atmospheres.
- **Constraints:**
  - Animated transforms are owned by the motion engine — **do not** combine Tailwind transform classes / inline transforms with an animated element (use margins for static offsets).
  - All scroll effects use Framer `useScroll`/`useTransform` over native scroll — **never** Lenis or manual parallax hijacking.
  - All motion must respect `prefers-reduced-motion`.

---

## 10. Component library

Shared primitives and chrome (must be reused, token-styled, responsive):

- **Chrome:** `AQVNav` (sticky, theme-aware, mega-menu + mobile drawer), `AQVFooter`.
- **UI primitives:** `Reveal`, `TextReveal`, `Counter`, `Eyebrow`, `Heading`, `Accent`, `ArrowLink`, `PillButton`, `SectionShell`, `DotGrid`, `PathIcon` and icon set.
- **Composed blocks (classic):** page hero, two-column, panels, stats, stepper, section head, metric cards, tiles, CTA.
- **v2-specific:** `QuantumScene` (R3F), `FrameSequence` (scroll-scrubbed canvas), plus local kinetic/magnetic/tilt/cursor helpers.

All components must be TypeScript, accessible, and driven by props + tokens.

---

## 11. Technical architecture & stack

- **Framework:** Next.js `16.2.9` (App Router, Turbopack). Read the bundled docs in `node_modules/next/dist/docs/` before using framework APIs — this Next version has breaking changes vs. prior knowledge.
- **UI:** React `19.2.4`, TypeScript `^5`.
- **Styling:** Tailwind CSS `v4` (`@theme` + `@layer components` in `globals.css`). No CSS-in-JS for theming.
- **Motion:** `motion` (Framer Motion) `^12`.
- **3D (v2):** `three` `^0.185`, `@react-three/fiber` `^9`, `@react-three/drei` `^10`, `@react-three/postprocessing` `^3`. WebGL components are client-only (`dynamic(..., { ssr: false })`).
- **Structure:** App Router routes per page; shared components in `app/components`; home sections in `app/components/home`; v2 in `app/v2`.
- **Quality gates:** `tsc --noEmit` must pass; ESLint (`eslint-config-next`) clean.

---

## 12. Performance requirements

- Heavy modules (WebGL scene) **code-split and client-loaded**; never block first paint.
- Image sequence frames preloaded deliberately; canvas device-pixel-ratio capped.
- Images optimized and height-capped to control payload and scroll length.
- WebGL pixel ratio capped (≤ ~1.8) for GPU cost control; continuous render limited to the hero.
- Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms on capable hardware; classic layout Lighthouse Performance ≥ 90.

---

## 13. Asset inventory

Located under `public/images/`:

- `hero.png`, `cta.png` — hero & CTA backgrounds.
- `s2.png` — campus (foundation). `s3.png`, `s3-n.png` — five-pillars exploded render. `s4.png` — IBM System Two render. `s7.png` — campus aerial / master plan.
- `s5/s1–s5.png` — launchpad banner slides; `s5/c1–c3.png` — launchpad feature cards.
- `s6/c1–c5.png` — research domain imagery.
- `frames/ezgif-frame-001…051.jpg` — 51-frame image sequence for the v2 scroll-scrubbed cinematic section.

There are no dedicated partner or news photographs; those contexts reuse the above imagery or styled placeholders.

---

## 14. Accessibility requirements

- WCAG 2.1 AA for content (contrast, focus states, semantic structure, alt text).
- Full keyboard operability for nav, carousels, and interactive controls.
- `prefers-reduced-motion`: disable/curtail non-essential motion (3D auto-motion, kinetic reveals, scrubbing) while preserving content.
- Decorative media marked `aria-hidden`; meaningful media has descriptive `alt`.

---

## 15. Responsiveness

- **Mobile-first**, desktop composition restored at the `lg` (1024px) breakpoint.
- Standard responsive padding and vertical rhythm via tokens (e.g. `px-5 sm:px-8 lg:px-10`).
- Cursor/tilt/3D-intensive interactions degrade or disable on coarse-pointer / low-power devices.
- No horizontal overflow at any breakpoint.

---

## 16. SEO & analytics

- Per-route metadata (title, description, Open Graph) reflecting each page's purpose.
- Semantic headings and landmark structure.
- Analytics events on primary CTAs and key scroll milestones (to support §3 metrics).

---

## 17. Open questions & future

- Source/meaning of the 51-frame sequence (confirm it depicts on-brand content for the v2 cinematic section).
- Whether v2 becomes the production homepage, remains an experimental preview, or its language is rolled across all subpages.
- Real partner logos and press photography to replace reused/placeholder imagery.
- CMS/data source for the newsroom (currently static content).
- Localization scope (currently English only).

---

*This PRD is the canonical product spec. The design system reference lives in `DESIGN_SYSTEM.md`; implementation lives under `app/`.*
