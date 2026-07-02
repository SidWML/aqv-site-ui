# Amaravati Quantum Valley — Scroll-Film Production Script

## The concept — "ONE SHOT": a single continuous FPV flight through the valley

The whole film is **one unbroken FPV-drone flight** through Amaravati Quantum Valley — the kind of continuous "one-shot" flythrough where the camera swoops over the campus, **threads through an open archway into a courtyard, sweeps out under a colonnade, rises around a tower, dips through an open portal into an atrium**, and flows on — all in a single take.

The camera moves like a real drone through a **real, finished place.** It arrives and **holds** on a beautiful view; the website freezes there and shows that chapter of the proposal; then the flight continues.

**The rules (your notes, locked in):**
- **One continuous shot.** No cuts, no scene-changes, no morphs.
- **The whole world is built *before* the camera moves.** Nothing appears "as the camera gets near." (This is why it must be **rendered from a 3D scene** — see below — not AI-hallucinated on the fly.)
- **The camera travels through real openings** — **open doorways, archways, open window-openings, courtyards, colonnades, atriums that are open to the sky.** It **never clips through solid glass panes or solid walls.** If there's a barrier, the camera goes *around* it or *through an actual opening.*
- **No maps, no diagrams, no abstract "pillars/infrastructure" tours.** The camera only ever shows **real architecture and landscape.** The **proposal is told by the on-screen text** the website overlays (already built).
- **Real & grounded** — real materials, natural light, real people & cars, film grain. No neon, no glow, no sci-fi. The website adds the brand accent.

---

## Global production notes

- **How to make it (this matters):** a continuous one-shot that flies *through* openings can only be done by **rendering a scripted camera path through a 3D model of the campus** (Blender / C4D / Unreal — you have `campus.glb` as a starting point; interiors/courtyards would need building out). **AI text-to-video cannot hold a continuous one-shot** — it invents new geometry as it moves (the "created as the camera nears" problem you flagged). If AI is unavoidable, generate **clip-by-clip, each seeded from the previous clip's exact final frame at an opening (a doorway/arch)**, keep every move slow, and keep the architecture identical across clips.
- **Every clip ends on a ~1.5s HOLD** — camera nearly stops (gentle drift only). That frozen, well-composed frame is where the site pins and reveals the text. Never end mid-motion.
- **Composition:** left third of each HOLD clear (headline/metrics); top-right clean (phase indicator).
- **Deliver ~10s clips in order** (`clip_00 … clip_09`), 16:9, ≥1920×1080 (4K better), 30fps, `.mp4`.
- **Palette:** natural — dusk light, warm window/streetlights, soft shadows. No glow, no neon.
- **Seed from AQV's real renders** (`hero.png`, `s2.png`, `s7.png`) where useful → grounded + on-brand.
- **No on-screen text, no logos, no watermarks.**
- **Reusable style tag (append to every prompt):** *continuous FPV drone one-shot, photorealistic modern campus at dusk, real materials and people, natural light, film grain, no cuts, camera passes only through open doorways / arches / courtyards (never through glass or walls), no text, no CGI glow, 16:9.*

---

## The flight (one continuous move, cut into clips)

### CLIP 00 — HIGH OVER THE VALLEY · *intro*
**Move:** high above the whole campus at dusk; a slow dramatic **descent begins**.
**Hold:** the valley wide and still. *(Site: centered "Welcome · Tap to Explore".)*
> **PROMPT:** *Continuous FPV drone high over a real modern riverside campus at dusk, whole campus visible, warm lights switching on; camera high, beginning a slow smooth descent; settles on a still majestic wide. [style tag]*

### CLIP 01 — DIVE TO THE BOULEVARD · *The Thesis*
**Move:** the drone **dives and levels off low**, racing down the central boulevard between the buildings, then eases to a glide.
**Hold:** low over the axis, buildings either side, left open.
**Overlay:** `01 THE THESIS — "We built the ecosystem first."`
> **PROMPT:** *Continue seamlessly. The drone dives and levels off low, gliding down the central boulevard and reflecting pool between the buildings, tiny people and cars, streetlights; eases to a slow glide and holds low over the axis. [style tag]*

### CLIP 02 — THROUGH THE ARCHWAY INTO THE COURTYARD · *Activation*
**Move:** the drone lifts and **flies through a large open archway / portal** of the main building into a **grand open courtyard** (open to the sky) — no glass, an actual opening.
**Hold:** settled in the courtyard, arcades around, evening light.
**Overlay:** `ACTIVATION — "The system awakens."` + `3.98 K · 64K+ · 69→60`.
> **PROMPT:** *Continue seamlessly. The drone rises and flies through a large open stone archway into a grand open-air courtyard with arcades, planting and warm light, real people; passes only through the open arch, never through glass; holds in the courtyard. [style tag]*

### CLIP 03 — OUT UNDER THE COLONNADE · *The Proof*
**Move:** cross the courtyard and **fly out under an open colonnade / arcade**, along a shaded walkway that opens back to the campus.
**Hold:** framed by the colonnade columns, campus beyond.
**Overlay:** `02 THE PROOF — "India's first indigenous sub-4 Kelvin refrigerator." 3.98 K`.
> **PROMPT:** *Continue seamlessly. The drone glides across the courtyard and out beneath an open colonnade / arcade of columns, a shaded walkway that opens back onto the campus, warm dusk light through the columns; holds framed by the colonnade. [style tag]*

### CLIP 04 — RISE AROUND THE LANDMARK · *The Machine*
**Move:** climb out into the open and do a **graceful rising orbit around the landmark tower / dome** (exterior).
**Hold:** the landmark framed, left clear.
**Overlay:** `03 THE MACHINE — "South Asia's first on-prem IBM Quantum System."` + `Heron · Dec 2026 · Export-cleared`.
> **PROMPT:** *Continue seamlessly. The drone climbs into the open and does a slow graceful rising orbit around the campus's tallest tower / domed landmark, catching the last dusk light; holds on the landmark. [style tag]*

### CLIP 05 — CLIMB TO THE HIGH SWEEP · *The System*
**Move:** keep climbing into a slow, high **sweeping view** of the whole campus laid out below.
**Hold:** elegant high wide of the campus.
**Overlay:** `04 THE SYSTEM — "Five pillars. One sovereign ecosystem."`
> **PROMPT:** *Continue seamlessly. The drone keeps climbing into a slow high sweeping shot of the whole campus below — buildings, boulevards, water and greenery; holds on the high wide. [style tag]*

### CLIP 06 — DIP THROUGH AN OPEN DOORWAY INTO A LIVELY QUARTER · *Talent*
**Move:** descend and **fly through an open doorway / open portal** into a **bright open atrium or courtyard full of people** — students, movement, life.
**Hold:** in the busy, human space.
**Overlay:** `05 TALENT — "64K today. 3.5M by 2030."` + `~1.5L · 50+ · 51%`.
> **PROMPT:** *Continue seamlessly. The drone descends and flies through a wide open doorway into a bright open atrium / courtyard full of real people — students and researchers, movement, warmth; passes only through the open doorway; holds on the lively space. [style tag]*

### CLIP 07 — OUT AND OVER THE WATER · *Governance*
**Move:** sweep **out through an opening back into the air** and **skim low over the water / riverfront promenade**.
**Hold:** gliding over the water, reflections, campus beyond.
**Overlay:** `06 GOVERNANCE — "69 → 60 minutes."` + `14% · 5 agencies`.
> **PROMPT:** *Continue seamlessly. The drone sweeps out into the open and skims low over the water and riverfront promenade, building reflections shimmering, real people walking; holds gliding over the water. [style tag]*

### CLIP 08 — OVER THE GROWTH EDGE · *Opportunity*
**Move:** glide over the **open, greenfield edge** of the campus — the land laid out for expansion.
**Hold:** open land meeting the built campus.
**Overlay:** `07 OPPORTUNITY — "A generational investment in sovereign compute."` + `₹500Cr+ · 500 Acres · Top 5 by 2030`.
> **PROMPT:** *Continue seamlessly. The drone glides over the open greenfield edge where the built campus meets undeveloped land with roads laid for future expansion; spacious, hopeful; holds over the open land. [style tag]*

### CLIP 09 — RISE AWAY, THE VALLEY AT NIGHT · *The Ask*
**Move:** **rise and pull far back** to the whole campus, now at night, every light glowing.
**Hold (3s stillness):** complete valley, majestic, **left third clear** for the closing headline + CTA.
**Overlay:** `08 INVEST IN AQV — "Partner with AQV."` + buttons.
> **PROMPT:** *Continue seamlessly. The drone rises and pulls far back to reveal the entire campus at night, every window and streetlight glowing softly, calm horizon; settles into a long still majestic hero frame with large clean negative space on the left. [style tag]*

---

## Clip → site mapping
| Clip | Where the drone is | Freezes to show |
|---|---|---|
| 00 | high over the valley | Welcome · Tap to Explore |
| 01 | low down the boulevard | "We built the ecosystem first." |
| 02 | through the arch into the courtyard | 3.98K · 64K+ · 69→60 |
| 03 | out under the colonnade | India's first sub-4 K refrigerator |
| 04 | orbiting the landmark | IBM Quantum System Two |
| 05 | high sweep of the campus | Five pillars, one ecosystem |
| 06 | through a doorway into a lively quarter | 64K → 3.5M |
| 07 | skimming the water | 69 → 60 minutes |
| 08 | over the growth edge | ₹500Cr+ · 500 Acres · Top 5 |
| 09 | risen back, valley at night | Invest / Download / Register |

**One continuous flight, one finished world, real openings only.** High over the valley → dive to the boulevard → through the arch into the courtyard → out under the colonnade → orbit the landmark → high sweep → through a doorway into a lively quarter → out over the water → over the growth edge → rise away to the lit valley. No cuts, no morphs, no clipping through glass or walls — the camera flies only through real doors, arches and openings, and the words tell the story.
