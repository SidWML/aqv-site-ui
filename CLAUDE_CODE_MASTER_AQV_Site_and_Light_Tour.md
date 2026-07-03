# MASTER BUILD PROMPT — AQV COMPLETE WEBSITE + "BUILD YOUR QUANTUM VALLEY" LIGHT DIORAMA TOUR
# Paste this ENTIRE document into Claude Code. It is the single source of truth.
# Version 3.0 · Light Edition · replaces all previous dark/night specs.

---

# PART 0 — MISSION & CURRENT STATE

You are building the complete Amaravati Quantum Valley website (Next.js) plus its signature immersive route `/experience` — a scroll-driven 3D campus tour in the style of NRG's "Build Your Data Center": **bright, warm, colorful, sunlit diorama** (cream paper UI, model-railroad greens, white architecture, gold machine), NOT dark/night.

A previous build reached ~70%: it suffered **(a) blank screens, (b) black frames/"hangovers", (c) camera lurches and glitchy motion, (d) unpolished overlays.** Part 2 contains binding engineering rules that eliminate each of these by construction. Do not skip them. Do not declare done until every checklist in Part 8 passes.

---

# PART 1 — DESIGN SYSTEM (LIGHT · applies to site AND tour UI)

Tokens (`packages/ui/tokens.css`):
```
--paper:#F4F2EC; --paper-2:#ECE8DD; --card:#FFFFFF; --ink:#23262E; --ink-2:#5A5F6C;
--leaf:#2E7D46; --leaf-2:#4CAF6D;         /* primary action green (NRG-style) */
--gold:#E4A93C; --gold-2:#C9962F;         /* hotspot diamonds, machine, highlights */
--sky:#BFE0EA;  --cryo:#1E8FA8;           /* glass, temperature HUD */
--terra:#D96C4F;                          /* small warm accents: flags, markers */
--line:rgba(35,38,46,.12); --shadow:0 10px 30px rgba(35,38,46,.12);
```
Type: **Unbounded** 700/900 for display headlines (ALL-CAPS, tight), **Instrument Sans** body, **Space Mono** for eyebrows/numbers/HUD. Eyebrow pattern: `◈ STEP 01` / `01 ── SECTION NAME` (mono, letterspaced, gold diamond).
Buttons: pill radius 999px — primary `--leaf-2` white text w/ soft green shadow; ghost white card. Cards: white, radius 20px, `--shadow`. Chips/pills: white 92% + blur, 1px `--line`.
Imagery: user-supplied photos (Part 6) always in rounded-20 frames with a thin gold top rule.
Motion: 200ms hovers, 450ms section reveals (translateY 16px + fade), respects `prefers-reduced-motion`.

---

# PART 2 — ENGINEERING RULES THAT KILL THE BUGS (BINDING)

## 2.1 No blank screens — causes & mandatory guards
1. **Suspense must never leave an empty canvas.** Wrap the R3F tree in `<Suspense fallback={<Poster/>}>` where Poster is a full-screen `<img src="/images/render-towers.png">` with a subtle "loading the valley…" chip. The page NEVER shows nothing.
2. **No HDR/network dependencies for lighting.** Do NOT use `<Environment preset>` (it downloads an HDR — a failed fetch = black metals + blank feel). Instead build a **procedural environment**: `scene.environment = pmremGenerator.fromScene(new RoomEnvironment-like rig)` — or simpler and preferred for this style: **avoid metalness>0.4 entirely** (see 2.2) so no envmap is needed.
3. **Canvas boot check:** on mount, after 2s, if no frame has rendered (`gl.info.render.frame === 0`), swap to the static summary page and log to console. ErrorBoundary around Canvas + `window.onerror` banner.
4. **Fog color === background color === CSS page color** (`--paper` family `#EFECE2`) so there is never a mismatched void band.

## 2.2 No black frames / dark hangovers
1. **Light-mode lighting rig (fixed):** `HemisphereLight('#FFFFFF','#DCD6C4',1.15)` + `DirectionalLight('#FFF3DC',1.2)` sun at `[-80,120,60]` + `AmbientLight('#FFFFFF',0.35)`. Shadow: ortho ±180, `bias:-0.0004`, `normalBias:0.05`, mapSize 2048. Nothing in the world may depend on point lights to be visible.
2. **Materials are stylized, not PBR-metal:** gold = `color:#E4A93C, metalness:.35, roughness:.35, emissive:#8a6516, emissiveIntensity:.25`. Steel/copper similar (metalness ≤.35). Glass = `#BFE0EA, opacity:.3, transparent, roughness:.15, depthWrite:false`.
3. **Interiors:** every room gets emissive white ceiling strips (`emissive:#FFF6E2, intensity:1.0`) + one warm PointLight — but rooms must already read with rule 1 alone.
4. **Exposure lock:** `ACESFilmicToneMapping`, exposure `1.1`. No dusk/night transition in this edition — the whole tour is golden-afternoon. (The finale celebration = confetti-like gold particles + flags, not darkness.)
5. **Frame audit:** at each station, programmatically sample the canvas (`readPixels` 5×5 grid): if mean luminance < 0.25, FAIL the build and fix lighting there.

## 2.3 No camera glitches — smoothness contract
1. **Arc-length parameterization:** ALWAYS `curve.getPointAt(u)` / `getTangentAt(u)` (never `getPoint`) — constant speed along the spline; this removes the lurching between control points.
2. **Frame-rate-independent damping everywhere:** `k = 1 - Math.exp(-λ*dt)`; position λ=3.2, look-target λ=4.0, scroll λ=3.5. Clamp `dt = Math.min(dt, 1/30)` (prevents teleports after tab-switch).
3. **Single writer:** only `CameraRig` mutates the camera. Idle drift, focus blending, station snap — all computed inside the rig into ONE final pose per frame.
4. **Look target is a damped vector**, not a switched one: `lookCur.lerp(lookGoal, k)`. Focus overrides blend in/out with `smoothstep` over ≥8% of their range — a focus change must NEVER pop.
5. **Scroll model:** virtual target `pT` (wheel/touch/keys, ΔY×0.00016, clamped 0–1) → damped `pC`. Station magnetism: within ±0.028 friction ×0.28; idle >300ms eases pT→station.t. Queue at most one pending impulse; ignore input during a menu-jump flight (flight = animate pT along, 1.2s, easeInOutCubic).
6. **Guards:** clamp `u∈[0.0005,0.9995]`; NaN check on pose each frame (if NaN → reset to last good pose, log); handle resize (aspect + composer setSize); `renderer.setAnimationLoop` single RAF.
7. **Doors/reveals** are functions of camera distance with smoothstep — never keyframes that can desync from scroll.

## 2.4 Polish contract
Overlays/pills fade 450ms with slight rise; pills track anchors every frame and hide when `projected.z>1` or off-screen >12%; DOF only at the chandelier station; 60fps desktop — if <45fps: drop shadows→1024, trees→70, disable Bloom. Bloom (if used) intensity ≤0.4 threshold 0.6 — this is a LIGHT scene; bloom is a garnish, not lighting.

---

# PART 3 — `/experience` · THE LIGHT DIORAMA TOUR

## 3.1 Art direction (match NRG screenshots the client shared)
Sunlit **architectural diorama on a green landscape**: rolling lawn `#BCCf9A→#9FBE7F` with contour bands, sandy paths `#E7DDC4`, ~120 instanced trees (two greens `#7FA86B/#5E8F55`), white buildings with warm shadows, blue-glass curtain walls, tiny terracotta accents (flags at the rotunda, path markers). Sky = clean cream-to-pale-blue gradient (large inverted sphere w/ gradient shader or vertex colors), soft warm sun. When a station is active, the relevant systems highlight in **x-ray cyan ghost** exactly like NRG's teal pipe overlays (swap material→`#7FD4E8` @ .45 opacity emissive .6, revert on leave).

## 3.2 World (primitives; same coordinate plan as before)
Boulevard +Z→0; **6 swept-profile towers** (24 stacked slabs, width eased `w(y)=base·(1−.35·smoothstep(0,1,y/h)²)`, blue-glass strip inlays, white fins) at `[±26, z 34/62/90]`; rotunda drum r14 at origin w/ gold crown + terracotta flags; hardware-park plot at `(58,46)`; corridor z −13→−60 (glass labs both sides, colorful small props: leaf-green racks, terra stools); cryo lab z −60→−92 (white gantry, white can, **gold chandelier**: 5 discs r .95→.45 @ y 3.9→1.95, brass rods, copper sample+coil; IBM dark-hex pedestal at (−8,−88)); gallery x 12→44 with 3 glazed windows to a courtyard where a white mid-rise "Medha" block sits among trees; **bright** operations room x 44→64 (white walls, big screen wall = light-blue dashboard `#EAF4F8` with cyan/leaf chart blocks — NOT a dark room); roof oculus over (54,−78); ascent to a sunny aerial finale.

## 3.3 Camera path & focus — verbatim
```js
export const PATH = [
 [0,48,146],[0,28,120],[0,12,100],[0,6,88],
 [0,2.4,70],[0,2.3,40],[0,2.3,20],[0,2.4,14.8],
 [0,2.5,8],[0,2.6,2],[0,2.5,-6],[0,2.4,-13.5],
 [0,2.3,-24],[0,2.3,-36],[0,2.3,-48],[0,2.2,-57],
 [0,2.1,-63],[1.6,1.9,-69],[2.4,1.75,-73.4],
 [2.1,1.7,-75.6],[2.6,1.8,-77.6],
 [5.5,2,-78.2],[10,2.2,-78],[18,2.3,-78],[28,2.3,-78],[38,2.2,-78],
 [45.5,2.1,-78],[52,1.9,-78],[58,1.9,-78],
 [54,4,-78],[54,12,-78],[52,26,-74],
 [38,42,-40],[16,50,10],[0,44,60],[-6,40,95]];
export const FOCUS = [           // [a,b,[x,y,z],strength] — blend via smoothstep, damped look
 [0.00,0.14,[0,5,26],.8],[0.14,0.21,[0,3.4,10],.5],[0.21,0.28,[0,2.8,-14],.65],
 [0.47,0.55,[0,2.6,-76.5],.75],[0.55,0.63,[0,2.6,-76.5],.95],[0.63,0.68,[-8,2.4,-88],.45],
 [0.70,0.78,[24,7,-100],.55],[0.80,0.86,[62,2.6,-78],.9],[0.93,1.00,[0,6,20],.9]];
```
CatmullRomCurve3('centripetal',.5) + **getPointAt**. Doors (rotunda z13.9, lab z−60.2) slide fully open before camera within 8u. Vacuum-can reveal `rev=smoothstep(pC,.515,.55)` → `can.y=2.3+rev*4.2` + warm spot + cyan glow. Idle drift `x+=sin(t*.5)*.06,y+=sin(t*.7)*.04` when settled only.

## 3.4 Stations — NOW WITH DETAIL PANELS (the polish the client asked for)
The station overlay is a **detail panel** (left-bottom, max 620px, white card): eyebrow chip → display title → body → **stat chips row** (mono numbers on paper-2 chips) → **photo thumbnail** (from Part 6, rounded, caption). Pills float on 3D anchors as before (white chip + gold diamond, click = dark tooltip card).

```js
export const STATIONS = [
 {t:.075,num:'01',phase:'The Site',eyebrow:'WELCOME TO',title:'AMARAVATI QUANTUM VALLEY',
  body:"India's first integrated Quantum-AI ecosystem — a Top-5 global quantum hub by 2030, already running.",
  statChips:['~9M sq ft planned','88,000 people','Top-5 by 2030'], photo:'render-towers.png', photoCap:'Government master-plan render',
  pills:[{p:[-26,50,62],label:'The Towers',detail:'AQV Central under construction · ~9M sq ft master plan.'},
         {p:[0,10.5,0],label:'The Rotunda',detail:'The heart of the valley — the tour begins here.'},
         {p:[58,3,46],label:'Hardware Park · 200 acres',detail:'Identified in Amaravati Phase-2 for quantum hardware manufacturers.'}]},
 {t:.245,num:'02',phase:'The Mission',eyebrow:'WHY THIS PLACE EXISTS',title:'THE ANSWER, BUILT FIRST',
  body:'Once quantum hardware arrives, who will use it — and what will it solve? Andhra Pradesh built the answer before the hardware.',
  statChips:['Ecosystem-first','5 pillars'], photo:null,
  pills:[{p:[-4,4,-3],label:'Ecosystem-first strategy',detail:'Most regions buy hardware, then hunt for talent. AP inverted the order.'},
         {p:[4,4,-3],label:'Five pillars',detail:'Infrastructure · Hardware · R&D · Talent · Partnerships.'}]},
 {t:.345,num:'03',phase:'The Ecosystem',eyebrow:'PILLAR 2 · HARDWARE',title:'40+ COMPANIES, ALREADY BUILDING',
  body:'Behind these glass walls: the four verticals of India’s quantum hardware stack.',
  statChips:['4 verticals','40+ companies'], photo:'workshop.jpg', photoCap:'QAIC workshop, June 2026',
  pills:[{p:[-4.5,3.4,-27],label:'Computing hardware',detail:'Qbit Force · Srusti · TriQuanta · Quandela · Silicofeller · Photon Core…'},
         {p:[4.5,3.4,-30],label:'Quantum sensing',detail:'Atomionics · Quanastra · Quantum Biosciences · GDQLabs · PrenishQ…'},
         {p:[-4.5,3.4,-40],label:'Communication',detail:'Pramatra Space · Qclairvoyance · Photoncore — QKD & PQC.'},
         {p:[4.5,3.4,-44],label:'Infrastructure',detail:'Keysight · Qblox · diamond foundry & cryo supply chain.'}]},
 {t:.505,num:'04',phase:'The Cold',eyebrow:'HISTORIC MILESTONE',title:'3.98 KELVIN, MADE IN INDIA',
  body:'−269.17 °C on a fully indigenous refrigeration platform — the first sub-4 K capability in India, breaking a global cryogenics monopoly.',
  statChips:['3.98803 K','85% → 100% localisation','Sub-4 K · first in India'], photo:'testbed-medha.jpg', photoCap:'AQV Testbed, Medha Towers',
  pills:[{p:[0,5.2,-76.5],label:'85% → 100%',detail:'Localisation pathway mapped — every critical component identified.'},
         {p:[-5,2.4,-79],label:'Supply chain live',detail:'MoUs: Amber (Faridabad) · QUTE Electronics (Delhi) · Qbitforce.'}]},
 {t:.565,num:'04',phase:'The Machine',eyebrow:'APRIL 14, 2026',title:'BUILT ACROSS INDIA, MADE IN AMARAVATI',
  body:"India's first open quantum computer — and this December, South Asia's most powerful one switches on here.",
  statChips:['Amaravati 1Q & 1s','IBM System Two · Dec 2026','Cloud live · 365 hrs/yr'], photo:'chandelier-srm.jpg', photoCap:'Amaravati 1s at SRM-AP, April 14',
  pills:[{p:[0,4.1,-76.5],label:'Refrigerator',detail:'Qbit Force, Amaravati · Amber, Faridabad.'},
         {p:[0,1.5,-76.5],label:'Processor',detail:'Superconducting — TIFR Mumbai · IISc Bengaluru.'},
         {p:[-5,1.6,-77.4],label:'RF & control',detail:'DRDO YSL Pune · cables: Dimira, QUTE.'},
         {p:[-8,3.9,-88],label:'IBM Quantum System Two',detail:'License 18 Jun · ships Jul · assembly Aug · deployment Dec 2026.'}]},
 {t:.70,num:'05',phase:'Momentum',eyebrow:'PILLAR 5 · MOMENTUM',title:'105 LEADS. 15 OPERATIONAL.',
  body:'The valley is filling — from early engagement to full operations at Medha Towers.',
  statChips:['105 leads','15 operational','10 cos · 75 members'], photo:'testbed-medha.jpg', photoCap:'Operations at Medha Towers',
  pills:[{p:[24,9,-100],label:'Medha Towers',detail:'10 companies · 75 members on campus today.'},
         {p:[17.8,3.4,-84],label:'11 GO · 11 SIPB · 7 DPR',detail:'Orders issued · proposals cleared · DPRs in review.'},
         {p:[35.6,3.4,-84],label:'9 new leads',detail:'Cisco · AIG Hospitals · MIT Incubation · VIT +5.'}]},
 {t:.815,num:'06',phase:'Proof',eyebrow:'DEPLOYED IN ANDHRA PRADESH',title:'PROOF, NOT PROMISES',
  body:"India's first quantum-powered emergency response platform runs on real state data.",
  statChips:['69 → 60 min','~14% faster','1.5 lakh trained'], photo:'control-room.jpg', photoCap:'Operations & analytics',
  pills:[{p:[62,4.6,-75],label:'69 → 60 minutes',detail:'Quurium, on real 108/112/104 data.'},
         {p:[62,4.6,-81],label:'Quanfluence CIM',detail:'Validated on a Coherent Ising Machine · Guntur pilot next.'},
         {p:[47.5,3.6,-84],label:'1.5 lakh trained',detail:'64K WISER · 1.04L NPTEL · 380 QICs · 3,000 advanced cohort.'}]},
 {t:.985,num:'07',phase:'Your Move',finale:true}];
```
**Temperature HUD:** mono card bottom-right; hidden until pC>.40; `.40→.505: 300→3.98803` via `3.98803+(300−3.98803)(1−u)³`; center-flash 1.55× for 2.2s when Cold settles; locked cyan after.
**Finale:** sunny high orbit; gold confetti particles drift over the campus; centered white card — H1 "NOW BUILD YOURS.", body "Startup, lab, or company — bring your quantum components, devices and systems here. Test at sub-4 Kelvin in India's first indigenous cryogenic facility.", buttons `Book the Testbed`(leaf) / `Partner with AQV` / `Invest & Establish` → `/contact?type=…`.
**Chrome:** header (brand + "◈ What is AQV?" + phase pill `((n)) Phase ≡` → station menu + Get in Touch), right progress dots, "Scroll to explore" chip, Landing (paper, H1 "THE QUANTUM CENTURY IS BUILT, NOT AWAITED.", sub "…Take the walk.", `◈ Enter the Valley` + "Skip to summary" → `/experience/summary` which lists all stations as cards).

---

# PART 4 — SITE SHELL (all routes except /experience)

Next.js 14 App Router, SSG. Header: logo left; mega-menu groups About / Technology & Infrastructure / Engage with AQV / Learn / News & Resources; right: `Careers ↗` (https://quantumjobs.in, new tab) + `APPLY / CONNECT` pill (→ /contact) + search icon (Pagefind overlay). Footer: emblem + "Government of Andhra Pradesh · National Quantum Mission", 4 link columns, newsletter capture, fine print. Global: breadcrumb under header on inner pages; every number on the site renders from `content/stats.json` — never hard-coded:
```json
{"leads":105,"operational":15,"go":11,"sipb":11,"dpr":7,"inProgress":38,
 "medhaCompanies":10,"medhaMembers":75,"trained":"~1.5 lakh","wiser":"64,000",
 "nptel":"1,04,220","qics":380,"cohort":"3,000","temp":"3.98803 K",
 "ibmDeploy":"December 2026","cloudHours":"365 hrs/yr","localisation":"85% → 100%",
 "target2030":"35 lakh","sqft":"~9M sq ft","people":"88,000","acres":"200 acres"}
```

# PART 5 — EVERY PAGE, EVERY SECTION (build all; copy is final unless marked VERIFY)

### 5.1 HOME `/` (template T1)
1. **Hero** — eyebrow `01 ── BUILT FOR THE FUTURE`; H1 "India's First **Quantum** Valley" (Quantum in leaf-green on light theme); sub "India's most advanced quantum ecosystem — uniting research, infrastructure, innovation and industry to solve humanity's hardest challenges."; bg `render-towers.png` w/ soft cream gradient overlay; CTAs `◈ Enter the Valley →/experience` + `Explore AQV ↓`; location chip "Amaravati, Andhra Pradesh, India".
2. **Powering Possibilities** — 3 cards: Compute (IBM System Two · {ibmDeploy} · cloud {cloudHours}), Cold ({temp} indigenous testbed), People ({trained} trained · {qics} QICs).
3. **Explore the Ecosystem** — 5-pillar row (Infrastructure/Hardware/R&D/Talent/Partnerships), each links to its hub.
4. **Research & Technology** — 4 domain cards (Computing/Sensing/Communication/Materials) → /technology/*.
5. **Engage & Invest** — two doors: "Build at AQV" (→ /engage/hardware-companies) & "Invest & Establish" (→ /invest), each with 2 stat chips ({leads} leads · {operational} operational).
6. **Latest News & Events** — 3 latest from content/news + next event.
7. **The Next Chapter** — full-width leaf band: "Now build yours." + Book the Testbed / Partner / Invest.

### 5.2 ABOUT group
**/about (T3):** Overview ("What AQV is" 3 blocks: A place · A programme · A promise) · **The AQV Story** (timeline: Aug 2025 opportunity → Sep 9 2025 CM turning point "~85% of components can be built in India" → Apr 14 2026 first open quantum computer → Jun 2026 3.98 K & QAIC) · **What AQV Does** (5 pillars grid) · **The Valley by 2030** ({sqft}, {people}, {target2030} learners, Top-5 hub) · anchors: `#vision` (Vision: Top-5 Global Quantum Hub by 2030; Mission: five-pillar strategy) · `#why` (Why Amaravati: greenfield capital, government backing, CM directive "Made in Amaravati for the world", location & connectivity).
**/about/quantum-mission (T3):** National & AP Quantum Mission (NQM alignment, NQM hubs, CDAC/CDOT/NIELIT/CSIR partners) · AQV Mandate & Goals (100 indigenous quantum computers in 2 years; 1,000+ use cases; 5,000+ experts; IP & startups).
**/about/governance (T8):** Governance Framework (state ownership, HMIT review cadence) · Leadership Team (**VERIFY names — use labeled placeholders**) · Board & Advisory (**VERIFY**).
**/partners (T5):** Partner Types & Models (Technology / Academic / Industry / Government) · Our Network & Sponsors (logo wall: IBM, TCS, HCL, AstraZeneca, Laurus Labs, CSIR, IIT Delhi, SRM-AP, NIELIT…) · Partner Stories (3 cards: IBM systems & skilling · SRM reference facility · Quurium deployment) · `#become` CTA + form.
**/contact (T8):** How Can We Help (router cards: Invest · Testbed · Partner · Media · Programs — each preselects form type) · Find Us (Medha Towers address block + map embed) · Get in Touch form (name/org/type/message → content/enquiries + email).

### 5.3 TECHNOLOGY & INFRASTRUCTURE
**Domain template T4 ×4** — each: Overview (what & why for AP) · Research & Applications · Facilities & Partners · Get Involved CTA.
- **/technology/quantum-computing:** superconducting, neutral atom, trapped ion, photonic; partners Qbit Force, Srusti, TriQuanta, Quandela, QuantumPhase, QAIG, Silicofeller, Photon Core; facilities: Amaravati 1Q/1s + AQCC (IBM System Two).
- **/technology/quantum-sensing:** cold-atom gravimeters, SNSPD, biosensors, quantum radar; Atomionics, Quanastra, Quantum Biosciences, GDQLabs, PrenishQ, Egreen Quanta.
- **/technology/quantum-communication:** satellite QKD, photonic chip design, PQC, secure networks; Pramatra Space, Quandela, Photoncore, Qclairvoyance.
- **/technology/quantum-materials:** cryo supply chain, diamond foundry & materials, control-electronics manufacturing, calibration & test; Jabroyd, SAS QuteElec, GDQLabs, Keysight, R&S, Qblox.
**/technology/hardware (FIXES 404):** Overview (the CM directive; indigenous ecosystem) · The Hardware Stack (cryogenics → dilution refrigerators → control electronics → photonics, each with the exploded-BOM cities: TIFR/IISc processor, Qbit Force/Amber DR, DRDO RF, Dimira/QUTE cables) · Partners & Supply Chain ({localisation}; Bluefors-monopoly context; Srsti fab ₹100 Cr project).
**/technology/software:** Overview (Quantum OS initiative — first functional version target Oct 2026, C-DAC & IISc building) · The Software Stack (algorithms, optimization, middleware, Qiskit/Cirq skilling) · Partners & Applications (Quurium, SIA, Cybranex, Qclairvoyance; BFSI apps with IIT-M).
**/research (T3):** Our Research · Priority Domains (computing, sensing, communication, materials, bio: Quantum Bio Foundry — drug discovery decade→months, dry lab Nova Q / wet lab Quantum Codon / clinical AIIMS & GGH) · Technology Roadmap (2026: System Two + QOS v1 → 2027–28: 100 machines → 2030: Top-5 hub) · Collaborative R&D (QAIC: industry+academia+IBM; problems→use cases→algorithms→IP→products).
**/infrastructure (T3):** Overview & By the Numbers ({sqft} · {people} · {acres} hardware park) · The AQV Masterplan (AQV Central; Medha Towers transit space; Phase-2 expansion) · Connectivity & Sustainability · `#compute`: IBM Quantum System Two (license 18 Jun → ship Jul → assemble Aug → **deploy Dec 2026**; only on-premise at this scale in South Asia; cloud live {cloudHours}) + HPC & Classical Compute.
**/infrastructure/facilities (T3):** Labs & Cleanrooms · Fabrication (Srsti quantum processor fab) · Testbeds & Prototyping · `#reference`: **Reference & Characterisation Facility** — capabilities (sub-4 K testing, {temp}) + Access ("We now welcome startups & companies — test your hardware at sub-4 Kelvin in India's first indigenous cryogenic facility") + **TestbedBookingForm**. Photos: `testbed-medha.jpg`, `chandelier-srm.jpg`, `chandelier-cm.jpg`.

### 5.4 ENGAGE WITH AQV
**/industry (T3):** Overview & Verticals (healthcare, agri, logistics, manufacturing, finance, cybersecurity, materials, governance) · Why Industry Needs Quantum · `#co-innovation` (Quurium case: 69→60 min, ~14% faster, Guntur pilot; + Submit-a-Challenge form) · `#network` (Membership & Benefits + Join form).
**/engage/hardware-companies (T5):** The Opportunity (100-machines goal; {acres} park; reference facility access; anchor tenants) · `#manufacturing` Manufacturing & Supply Chain (the AQV supply chain map: Amber, QUTE, Qbitforce, Dimira + how to plug in) · Express Interest form (hardware variant).
**/engage/software-companies (T5):** The Opportunity (QOS, algorithms, BFSI, governance use cases) · Platforms & Access (IBM/TCS cloud {cloudHours}; QAIC pipeline; CIM access via Quanfluence) · Express Interest form (software variant).
**/startups (T5):** AQV Launchpad · What AQV Offers (testbed access, transit space at Medha, mentor & investor network, program routes; RTIH entrepreneurship — 108 top performers) · Founder Stories (Qbit Force · Quurium · Qcodon) · Apply CTA.
**/invest (T5):** Why Invest at AQV (pipeline proof: {leads}/{operational}; anchor asks in market: Bio Foundry strategic investor up to ₹200 Cr; Srsti fab ₹100 Cr w/ ₹50 Cr TDB ask) · Establishment Pathway & Support (Engage → DPR → SIPB → GO → Ground: mirror the real stage-gate) · `#funding` Grants, Fund & Incentives (**pull the AP Quantum Policy 2025–30 incentive table from the approved content doc — mark VERIFY, do not invent figures**) · Investment Enquiry form.

### 5.5 LEARN
**/talent (T3):** Overview & Skills Pipeline (Phase I: {wiser} WISER registered · {nptel} NPTEL · ~57% exam completion vs 5–15% global; Phase II: {cohort} advanced cohort — do NOT use the "WISER" brand label in headings per IA notes) · Learning Tracks (Quantum · AI · Cybersecurity — every learner trained across all three) · Current Opportunities (live roles: Qbit Force internships up to ₹1,00,000/mo; Centella quantum-AI research; Qclairvoyance security engineer).
**/programs (T3):** Program Catalogue · Featured Programs (talent exam, NPTEL cohorts, IBM SkillsBuild 1M FY26–30) · Upcoming & Deadlines · `#professional-development` (courses, certifications; NIELIT Quantum & AI CoE — courses this academic year) · `#fellowships` (fellowships, hackathons, challenges).
**/learn (T3):** Overview & Outreach ("Quantum for Everyone") · `#education` Schools & Higher Education ({qics} Quantum Innovation Cells across AP; APSCHE network; 8+ focus sectors).

### 5.6 NEWS & RESOURCES
**/news (T6):** filterable grid; `?type=press` filter; **seed 8 items** (each T7 detail w/ photo where available): ① Apr 14 — India's first open quantum computer + reference facilities (`chandelier-srm.jpg`,`chandelier-cm.jpg`) ② 3.98 K indigenous milestone (`testbed-medha.jpg`) ③ 18 Jun — US export license for IBM System Two ④ 18 Jun — QAIC launch (`workshop.jpg`) ⑤ SRM×CDOT security testbed alliance ⑥ Quurium emergency-response deployment ⑦ NIELIT Quantum & AI CoE MoU ⑧ Phase II advanced cohorts (Mar 23). · For Journalists block (press kit link).
**/events (T6):** Upcoming (placeholder slots) · Past (Apr 14 launch · QAIC 18 Jun · QOS workshop IIT Tirupati 20 Mar · Bio-Foundry roundtable 13 Mar).
**/resources/reports (T6):** Reports & Publications (June 2026 review as first entry) · `#downloads` brochures/media kit.
**/resources/insights (T6):** articles/explainers filter hub (seed 3 explainers: What is a qubit fridge? · Why 4 Kelvin matters · What a Bio Foundry does).
**/resources/government-orders (T6):** GO cards (number/date/dept/PDF) — **seed 11 placeholder entries marked VERIFY** matching pipeline count.
**/faq (T8):** accordion by category (Visiting & testbed · Investing · Programs · Media).

---

# PART 6 — ASSET MANIFEST (the client's shared images — place in `public/images/`)
| Filename to use | The image | Where used |
|---|---|---|
| `render-towers.png` | Government render: twin curved towers + "QUANTUM VALLEY" rotunda | Home hero bg · Experience poster/fallback · Station 01 panel · /infrastructure |
| `chandelier-cm.jpg` | CM touching the gold chandelier at SRM | News ① · /about story · /infrastructure/facilities |
| `chandelier-srm.jpg` | Gantry + gold chandelier w/ dignitaries (Qbit Force banner) | Station 04-Machine panel · News ① · facilities `#reference` |
| `testbed-medha.jpg` | White Qbit Force testbed, red carpet, dewars | Station 04-Cold & 05 panels · News ② · facilities |
| `control-room.jpg` | Analysts + racks + world dashboard | Station 06 panel · /industry co-innovation |
| `workshop.jpg` | IBM QAIC workshop group photo | Station 03 panel · News ④ · /partners |
Treatment: rounded-20, thin gold top rule, alt text mandatory; hero usage gets a cream gradient overlay for text legibility. If a file is missing at build time, render a paper-2 placeholder block with the caption — never a broken image.

# PART 7 — CONTENT AS FILES (no CMS in this build)
`content/stats.json` (Part 4) · `content/stations.js` (Part 3.4) · `content/news/*.md` (8 seeds) · `content/events.json` · `content/gos.json` · `content/faqs.json` · `content/programs.json`. Every template reads from these. This is the CMS-ready seam for later.

# PART 8 — ACCEPTANCE (run `npm run build && npm run start`, verify ALL)
**Tour:** ① never a blank/black frame — poster fallback works (test by throttling), luminance audit ≥0.25 at all 7 stations ② motion is butter: constant speed (getPointAt), no pops on focus changes, no lurch after tab-switch, menu-jump flight is eased ③ doors open ahead; can reveals gold chandelier; HUD lands 3.98803 K w/ center flash ④ detail panels show stat chips + photo; pills track & tooltip ⑤ touch/keys/reduced-motion/summary-fallback all work ⑥ 60fps desktop (report measured fps).
**Site:** ⑦ all ~28 routes render w/ correct template & breadcrumb; `/hardware`→/technology/hardware and `/media`→/news redirects live ⑧ zero hard-coded stats (grep proves it) ⑨ forms write to content/enquiries + show success state ⑩ Lighthouse ≥90 perf/SEO/a11y on Home, /invest, /news ⑪ all 6 images render with alt text; missing-file placeholder verified ⑫ mobile nav + experience swipe verified at 390px.

# PART 9 — BUILD ORDER
1) Tokens + shell + stats.json → 2) /experience (this is the risk item — get Part 2 rules green first) → 3) Home → 4) Convert pages (/invest, /engage/*, facilities+booking, /contact) → 5) Technology & About groups → 6) Learn + News/Resources seeds → 7) Part 8 full pass, fix, report.
