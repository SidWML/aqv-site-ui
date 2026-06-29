# AQV Design System

The single source of truth for the Amaravati Quantum Valley UI. Tokens live in
[`app/globals.css`](app/globals.css) (`@theme` + the `@layer components` classes);
primitives live in [`app/components/ui/`](app/components/ui/).

**Golden rule:** never hand-roll a value that a token covers. No `text-[clamp(...)]`,
no ad-hoc `tracking-[...]`, no one-off hex, no random `rounded-[13px]` /
`shadow-[...]`. Use the scale, the tokens, and the primitives below.

---

## 1. Colour palette

Quantum-led: cool **indigo/iris** is the primary accent on every surface; warm
**gold** is a sparing secondary only. Every token is a Tailwind colour, so all
utilities work (`bg-night`, `text-cream/70`, `border-accent/30`, `ring-accent/20`).

### Surfaces
| Token     | Hex       | Use                                |
|-----------|-----------|------------------------------------|
| `night`   | `#0A0E1A` | primary dark surface / page bg     |
| `night-2` | `#11162A` | raised dark surface / dark cards   |
| `steel`   | `#E8E7EA` | light-steel surface (IBM section)  |
| `sand`    | `#F4F1EA` | primary light surface              |
| `stone`   | `#EDEAE1` | alternate light surface            |
| `paper`   | `#FBF9F4` | card surface on light              |

### Text + opacity ramp
| Token   | Hex       | Use                    |
|---------|-----------|------------------------|
| `cream` | `#F5F2EC` | text on dark surfaces  |
| `ink`   | `#1A1A1A` | text on light surfaces |

Hierarchy is opacity, not new colours — **100%** heading · **70%** body · **55–60%**
muted · **40%** faint. Always `text-cream/70`, `text-ink/55`, etc.

### Accent — quantum (primary)
| Token            | = / Hex   | Use                                       |
|------------------|-----------|-------------------------------------------|
| `iris`           | `#8B92E8` | default accent (→ `accent`)               |
| `indigo`         | `#5B6CFF` | strong accent (→ `accent-strong`)         |
| `indigo-deep`    | `#4B54D6` | deep accent / gradient end                |
| `accent`         | = iris    | **prefer this semantic token in new code**|
| `accent-strong`  | = indigo  | hovers, gradients, emphasis               |

### Accent — warm (sparing secondary)
| Token         | = / Hex   | Use                                          |
|---------------|-----------|----------------------------------------------|
| `gold`        | `#C9A86A` | rare warm highlight (→ `accent-warm`)        |
| `accent-warm` | = gold    | opt-in only. **Currently used only** in the Hero equation motif. |

> Flip the whole site's accent by editing `--color-accent` in `globals.css`.
> Decorative gold inside SVG art is hardcoded by design.

---

## 2. Typography

**Inter** for display + body, **IBM Plex Mono** for labels/data. One scale, both
surfaces. The `t-*` classes set geometry only — apply colour with a palette utility.

Every text role has a class — **never** write `text-[…]`, `leading-[…]`, or
`tracking-[…]` in JSX. Pick the class; add only colour/spacing alongside it.

| Class           | Role                       | Size                          | Weight | Leading | Tracking |
|-----------------|----------------------------|-------------------------------|--------|---------|----------|
| `t-display`     | Hero headline              | `clamp(2.8, 5.2vw, 4.4rem)`   | 500    | 0.98    | -0.02em  |
| `t-display-2`   | Closing CTA statement      | `clamp(2.6, 5vw, 4.2rem)`     | 500    | 0.99    | -0.02em  |
| `t-h2`          | Primary section heading    | `clamp(2.05, 3.4vw, 3.3rem)`  | 500    | 1.04    | -0.015em |
| `t-h3`          | Secondary section heading  | `clamp(1.7, 2.6vw, 2.7rem)`   | 500    | 1.1     | -0.012em |
| `t-h4`          | Small block title / index  | `17px`                        | 600    | 1.25    | -0.005em |
| `t-title-lg`    | Feature card title         | `1.75rem`                     | 500    | 1.1     | -0.015em |
| `t-title`       | Standard card title        | `1.375rem`                    | 500    | 1.2     | -0.01em  |
| `t-title-sm`    | Compact card title         | `1.2rem`                      | 500    | 1.25    | -0.01em  |
| `t-stat-lg`     | Large metric value         | `1.8rem`                      | 500    | 1       | -0.01em  |
| `t-stat`        | Metric value               | `1.5rem`                      | 500    | 1       | -0.01em  |
| `t-quote`       | Pull quote / statement     | `1.0625rem`                   | 500    | 1.5     | -0.005em |
| `t-index`       | Oversized ghost index      | `clamp(3.5, 6vw, 6rem)`       | 500    | 0.8     | -0.02em  |
| `t-eyebrow`     | Section / card label       | `11px`                        | 600    | 1       | 0.24em   |
| `t-eyebrow-num` | Inline section index       | `21px`                        | 500    | 1       | —        |
| `t-overline`    | Mono micro-label           | `10px` mono                   | 500    | 1       | 0.26em   |
| `t-lead`        | Intro / lead paragraph     | `clamp(1.05, 1.1vw, 1.2rem)`  | 450    | 1.55    | —        |
| `t-body`        | Body copy                  | `15px`                        | 400    | 1.7     | —        |
| `t-body-sm`     | Small body / card desc     | `13px`                        | 400    | 1.6     | —        |
| `t-caption`     | Caption / small meta       | `12px`                        | 400    | 1.5     | —        |
| `t-micro`       | Micro meta / tiny desc     | `11px`                        | 400    | 1.45    | —        |
| `t-mono`        | Data / mono values         | `13px` mono                   | 400    | 1.5     | —        |

**Card typography:** label → `t-eyebrow`; title → `t-title-lg`/`t-title`/`t-title-sm`;
metric value → `t-stat`/`t-stat-lg`; quote → `t-quote`; body → `t-body-sm`; meta →
`t-caption`/`t-micro`; CTA → `t-eyebrow`.

**Exceptions** (intentionally outside the content scale): nav/chrome typography in
`AQVNav`, the page-hero display H1, brand logo wordmarks, and ornamental quote glyphs.

---

## 3. Spacing — padding, margins, gaps

Always use the **spacing scale** (`p-6`, `py-30`, `gap-4.5`, `mb-6.5`) — every value
is `--spacing × N`. **Never** write `p-[24px]` / `gap-[18px]`; the scale equivalent is
the px ÷ 4 (`24px → 6`, `18px → 4.5`, `110px → 27.5`). Arbitrary `[…]` is allowed only
for non-px units (`%`, `vw`, `clamp`) and the documented `max-w-[1600px]` constant.

| Token / value     | Use                                                       |
|-------------------|-----------------------------------------------------------|
| `py-30` (120px)   | **major** section vertical padding                        |
| `py-22.5`–`py-27.5` | **tight** section vertical padding (90–110px)           |
| `px-10` (40px)    | section horizontal padding (full-bleed sections)          |
| `max-w-[1600px]`  | inner content max width, `mx-auto`                        |
| `gap-12` (48px)   | major two-column grid gap                                 |
| `gap-5`–`gap-[34px]` | card-grid / panel gaps                                 |
| `p-[26px]`–`p-[34px]` | panel / large-card padding                            |
| `p-[24px]`        | standard card padding                                     |
| `p-[14px]`        | compact card padding                                      |

Element rhythm inside a heading block: eyebrow `mb-6` → heading `mb-4`/`mb-6` →
lead `mb-4` → body `mb-7` → CTA.

---

## 4. Radius

Tokens (`globals.css`) → utilities `rounded-control / rounded-chip / rounded-card / rounded-pill`.

| Token             | px   | Use                                    |
|-------------------|------|----------------------------------------|
| `rounded-control` | 10   | inputs, indicators, small controls     |
| `rounded-chip`    | 12   | icon chips, tags                       |
| `rounded-card`    | 14   | **cards, panels, media frames**        |
| `rounded-pill`    | full | pills / buttons                        |
| `rounded-full`    | —    | circular icon buttons, avatars, dots   |

One card radius site-wide: **`rounded-card` (14px)**. Don't mix 12/13/16.

---

## 5. Borders & lines

Hairlines are the text colour at low opacity — never a new grey.

| Context        | Token                              |
|----------------|------------------------------------|
| On light       | `border-ink/[0.08]` … `border-ink/12` |
| On dark        | `border-cream/10` … `border-cream/15` |
| Divider rule   | `h-px w-[30px] bg-accent` (accent tick) or `bg-ink/30` / `bg-cream/30` (neutral) |
| Focus ring     | `ring-1 ring-accent/30`             |

Border width is **1px** everywhere. Accent borders use `border-accent/40` on hover.

---

## 6. Elevation (shadows)

Tokens → utilities `shadow-card / shadow-panel / shadow-float`. Light surfaces only;
dark surfaces use borders + tints, not shadows.

| Token          | Value                          | Use                          |
|----------------|--------------------------------|------------------------------|
| `shadow-card`  | `0 14px 34px rgba(26,26,26,.08)` | resting card (hover lift)  |
| `shadow-panel` | `0 20px 50px rgba(26,26,26,.12)` | raised stat/feature panel  |
| `shadow-float` | `0 30px 70px rgba(26,26,26,.18)` | floating media / hero panel |

Card hover: `hover:-translate-y-0.5 hover:shadow-card hover:border-accent/40` with
`transition-all duration-300`.

---

## 6.5 Responsiveness

**Mobile-first.** Breakpoints (Tailwind defaults): base = phone · `sm` 640 · `md` 768 ·
**`lg` 1024 = desktop layout restores here** · `xl` 1280. The dense desktop layouts are
gated behind `lg:`; the base styles are the stacked phone layout.

| Concern              | Pattern                                                                 |
|----------------------|-------------------------------------------------------------------------|
| Section x-padding    | `px-5 sm:px-8 lg:px-10`                                                  |
| Section y-padding    | halve on mobile: `py-16 sm:py-20 lg:py-30` (and `py-14 … lg:py-27.5`)    |
| Content 2-col grid   | `grid-cols-1 lg:grid-cols-[Afr_Bfr]`; gap `gap-10 lg:gap-15`             |
| Card grid            | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`                              |
| Stat strip (6)       | `grid-cols-2 md:grid-cols-3 lg:grid-cols-6`                              |
| Decorative overlays  | `hidden lg:block` (orbitals, equation motifs, ghost numbers, edge labels)|
| Fluid headings       | `t-display`/`t-h2`/`t-h3` already use `clamp()` — leave them             |
| Right-pinned media   | `w-full lg:w-[62%]`; strengthen the mobile scrim so text stays readable  |
| Pinned overlays (IBM)| callouts `static lg:absolute …` so they stack on mobile, pin at `lg`     |
| Nav                  | desktop links `hidden lg:flex`; hamburger `flex lg:hidden` (drawer ≥ mobile)|

Goal: no horizontal overflow at 375px; pixel-identical to today at ≥1024px.

---

## 7. Components & primitives (`app/components/ui/`)

| Primitive      | What it is                                                                 |
|----------------|----------------------------------------------------------------------------|
| `Heading`      | `variant` (`display`/`display-2`/`h2`/`h3`/`h4`) + `as` → type class        |
| `Accent`       | accent-coloured run inside a heading (`tone` default `iris`)                |
| `Eyebrow`      | `num` + rule + `label` — the section index pattern; `accent` default `iris` |
| `ArrowLink`    | underlined CTA link with ↗; `accent` default `iris`                         |
| `PillButton`   | `solid` (indigo→iris gradient, cream text) / `outline` (hairline)           |
| `SectionShell` | themed surface + dot-grid + centred `max-w-[1600px]` inner                  |

### Buttons
- **Primary** → `<PillButton variant="solid">` — indigo→iris gradient, `rounded-pill`, `px-[34px] py-[18px]`, `13px/600/0.1em`.
- **Secondary** → `<PillButton variant="outline">` — `border-cream/30` (dark) on the same shape.
- **Inline CTA** → `<ArrowLink>` — uppercase `t-eyebrow` label, `border-b` underline, trailing ↗ in accent. Default link CTA across the site.
- **Icon button** → `h-[54px] w-[54px] rounded-full border border-cream/25` (carousel arrows).

### Labels
- Section/card label → `t-eyebrow` (Inter, 11px, 0.24em, uppercase).
- Mono micro-label → `t-overline` (Plex Mono, 10px, 0.26em, uppercase).
- Tag chips → `t-eyebrow` on `text-ink/70` or `text-cream/55`.

### Icons (line icons via `PathIcon`/`dc.tsx`)
- Stroke: **accent `#8B92E8`** (quantum) at `sw 1.3–1.4`.
- Sizes: `16` (chip), `18` (chip lg), `24` (standalone feature).
- Container: **`icon-chip`** — accent-tinted square (`rounded-chip` + 12% accent fill + 18% accent ring). Size with `h-9 w-9` etc. Neutral variant: `bg-ink/[0.05]`, no ring.
- Circular icon: `rounded-full border border-accent/50`.

---

## 8. Section index (numbering)

Every section carries a sequential 2-digit index in its eyebrow: `01 … 10`, in
reading order. Standard treatment = the `Eyebrow` pattern:
`t-eyebrow-num text-accent` · `h-px w-[30px]` rule · `t-eyebrow` label.

| 01 Hero | 02 Foundation | 03 Pillars | 04 IBM System | 05 Launchpad |
| 06 Research | 07 Infrastructure | 08 Partners | 09 Journal | 10 CTA |

---

## 9. Motion
- Reveal: `data-reveal` + IntersectionObserver; stagger with `delay` (0.05–0.3s).
- Easing token: `--ease-out-quart` → `ease-out-quart` (`cubic-bezier(.22,1,.36,1)`).
- Hover transitions: `duration-300`; reveals: `duration-[800–1000ms]`.

---

## 10. Checklist for any new section
1. `SectionShell` (or matching surface) + `py-[120px]`/`[90px]`, `px-10`, inner `max-w-[1600px]`.
2. `Eyebrow num="NN"` → `Heading variant` → `t-lead`/`t-body` → `ArrowLink`.
3. Cards: `rounded-card`, `border-ink/[0.08]`/`border-cream/12`, `shadow-card` on light, `icon-chip` icons.
4. Accent = `accent` (quantum). Gold only if explicitly warranted.
5. No raw font sizes, tracking, hex, radius, or shadows — tokens only.
