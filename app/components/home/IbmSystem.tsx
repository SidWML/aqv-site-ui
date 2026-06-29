import { Reveal, Counter } from "../ui";
import { PathIcon, ArrowUR } from "../dc";

/* ----------------------------------------------------------------- data --- */

const ibmStats = [
  { value: "156+", label: "QUBITS", desc: "Scalable and high-fidelity quantum processor.", icon: "M12 4 a8 8 0 1 0 0.01 0 M5 12 a14 7 0 0 0 14 0 M12 4 V20 M12 11 a1.4 1.4 0 1 0 0.01 0" },
  { value: "<15 mK", label: "OPERATING TEMPERATURE", desc: "Ultra-cold environment for maximum qubit stability.", icon: "M12 3 V21 M12 7 L8 5 M12 7 L16 5 M12 12 L8 10 M12 12 L16 10 M12 17 L8 15 M12 17 L16 15" },
  { value: "99.9%", label: "UPTIME DESIGN", desc: "Engineered for reliability and continuous research.", icon: "M3 14 L7 14 L9 8 L12 18 L15 11 L17 14 L21 14" },
  { value: "AI", label: "AI-NATIVE CONTROL STACK", desc: "Real-time error mitigation and system orchestration.", icon: "M5 8 L12 4 L19 8 L12 12 Z M5 12 L12 16 L19 12 M5 16 L12 20 L19 16" },
];

const ibmCallouts = [
  { num: "01", title: "CRYOGENIC SYSTEM", desc: "Dilution refrigeration reaching millikelvin temperatures to create the ideal quantum state." },
  { num: "02", title: "QUANTUM PROCESSOR", desc: "Next-generation quantum processor with high coherence and low error rates." },
  { num: "03", title: "CONTROL ELECTRONICS", desc: "Ultra-low latency electronics that read, process and stabilize qubits in real time." },
  { num: "04", title: "CONTROL & SOFTWARE STACK", desc: "Powerful tools and SDKs for researchers to build, test and scale quantum algorithms." },
];
// vertical center of each device inside s4.png, as % of image height (measured from the asset)
const ibmDeviceTops = [16.3, 38.1, 57.7, 77.4];

// particle field spread across the whole section to fill the empty space
const PARTICLES = [
  { x: "7%", y: "20%" }, { x: "16%", y: "68%" }, { x: "27%", y: "34%" }, { x: "39%", y: "82%" },
  { x: "47%", y: "14%" }, { x: "55%", y: "90%" }, { x: "63%", y: "26%" }, { x: "71%", y: "60%" },
  { x: "80%", y: "18%" }, { x: "88%", y: "74%" }, { x: "93%", y: "40%" }, { x: "33%", y: "10%" },
];

/** Full-section animated backdrop: soft indigo glow, large orbital rings and a particle field. */
function IbmBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* soft indigo halo behind the machine */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(38% 48% at 54% 48%, rgba(91,108,255,0.12) 0%, rgba(232,231,234,0) 70%)" }}
      />
      {/* large orbital rings, centred on the machine */}
      {/* <svg
        className="absolute left-[54%] top-1/2 h-[860px] w-[1240px] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1240 860"
        fill="none"
      >
        <g style={{ transformOrigin: "620px 430px", animation: "aqvSpin 120s linear infinite" }}>
          <ellipse cx="620" cy="430" rx="590" ry="270" stroke="rgba(74,82,210,0.26)" strokeWidth="1" />
          <ellipse cx="620" cy="430" rx="450" ry="330" stroke="rgba(91,108,255,0.18)" strokeWidth="1" transform="rotate(24 620 430)" />
        </g>
        <g style={{ transformOrigin: "620px 430px", animation: "aqvSpinR 95s linear infinite" }}>
          <ellipse cx="620" cy="430" rx="330" ry="190" stroke="rgba(74,82,210,0.2)" strokeWidth="1" />
        </g>
      </svg> */}
      {/* particles */}
      {/* {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute h-[3px] w-[3px] rounded-full"
          style={{
            left: p.x,
            top: p.y,
            background: i % 2 ? "#6B7BFF" : "#4B54D6",
            animation: `aqvPulseDot ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))} */}
    </div>
  );
}

/** Machine-local waves: expanding indigo base ripples + a glowing base ring. */
function QuantumWaves() {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 top-0 z-0 aspect-square w-[62%]">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(38% 40% at 40% 54%, rgba(91,108,255,0.12) 0%, rgba(232,231,234,0) 68%)" }}
      />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
        {[0, 1, 2, 3].map((i) => (
          <ellipse key={i} cx="158" cy="332" rx="26" ry="9" fill="none" strokeWidth="1.6" stroke="#5B6CFF">
            <animate attributeName="rx" values="26;150" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
            <animate attributeName="ry" values="9;50" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.55;0" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
          </ellipse>
        ))}
        <ellipse
          cx="158"
          cy="332"
          rx="116"
          ry="35"
          fill="none"
          stroke="rgba(74,86,224,0.45)"
          strokeWidth="1.5"
          style={{ filter: "drop-shadow(0 0 5px rgba(91,108,255,0.4))" }}
        />
      </svg>
    </div>
  );
}

/* ============ 04 · IBM QUANTUM SYSTEM TWO (light steel) ============ */
export default function IbmSystem() {
  return (
    <section
      id="ibm"
      data-theme="light"
      className="relative overflow-hidden bg-steel text-ink px-5 sm:px-8 lg:px-10 py-14 sm:py-18 lg:py-22.5"
    >
      <IbmBackdrop />

      <div className="relative z-[2] mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_2fr] lg:items-center lg:gap-12">
        {/* ------------------------------------------------- left column --- */}
        <div>
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="t-eyebrow-num text-accent">04</span>
            <span className="h-px w-7.5 bg-ink/30" />
            <span className="t-eyebrow text-ink/60">IBM POWERED QUANTUM SYSTEM</span>
          </Reveal>
          <Reveal as="h2" variant="wipe" delay={0.1} className="mb-4 t-h2">
            IBM Quantum <span className="text-accent">System Two</span>
          </Reveal>
          <Reveal as="p" delay={0.15} className="mb-4 max-w-82.5 t-lead">
            The most advanced quantum system in India. At the heart of AQV.
          </Reveal>
          <Reveal as="p" delay={0.2} className="mb-7 max-w-87.5 t-body text-ink/65">
            IBM Quantum System Two brings together cutting-edge hardware, ultra-low temperatures, and intelligent control systems to solve problems classical computers cannot — even in theory.
          </Reveal>
          <Reveal delay={0.25} className="mb-7 grid auto-rows-fr grid-cols-2 gap-3">
            {ibmStats.map((st) => (
              <div
                key={st.label}
                className="group rounded-card border border-ink/[0.08] bg-white/70 p-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:shadow-card"
              >
                <span className="icon-chip mb-2.5 flex h-8 w-8 items-center justify-center transition-colors duration-300">
                  <PathIcon d={st.icon} size={16} className="text-accent" sw={1.4} />
                </span>
                <div className="t-stat"><Counter value={st.value} /></div>
                <div className="mt-1.5 t-eyebrow text-ink/85">{st.label}</div>
                <div className="mt-1 t-micro text-ink/55">{st.desc}</div>
              </div>
            ))}
          </Reveal>
          <Reveal
            as="a"
            href="#research"
            delay={0.3}
            className="t-eyebrow inline-flex items-center gap-3 border border-ink/30 px-6.5 py-3.75 text-ink no-underline transition-colors duration-300 hover:border-accent/60"
          >
            EXPLORE THE TECHNOLOGY
            <ArrowUR size={14} className="text-accent" sw={1.5} />
          </Reveal>
        </div>

        {/* ------------------------------------------------ right column --- */}
        <Reveal delay={0.15} className="relative !duration-[1000ms]">
          {/* assembled render (machine + devices) with callouts pinned to each device */}
          <div className="relative w-full">
            {/* <QuantumWaves /> */}
            <img
              src="/images/s4.png"
              alt="IBM Quantum System Two — assembled render"
              className="relative z-[1] mx-auto block h-auto w-full max-w-105 lg:mx-0 lg:w-[62%] lg:max-w-none"
            />
            <div className="absolute left-[-2px] top-[42%] hidden -translate-y-1/2 flex-col items-center gap-1.5 text-ink/50 lg:flex">
              <span className="t-overline">HEIGHT</span>
              <span className="t-micro">2.3 M</span>
            </div>
            <div className="absolute bottom-[-4px] left-[18%] hidden items-center gap-2 text-ink/50 lg:flex">
              <span className="t-overline">DIAMETER</span>
              <span className="t-micro">1.6 M</span>
            </div>
            {ibmCallouts.map((co, i) => (
              <div
                key={co.num}
                className="mt-6 static lg:absolute lg:left-[66%] lg:right-0 lg:mt-0 lg:-translate-y-1/2"
                style={{ top: `${ibmDeviceTops[i]}%` }}
              >
                <Reveal className="flex items-start gap-3.5 !duration-[800ms]">
                  <span className="mt-2.25 h-px w-8.5 flex-shrink-0 bg-iris" />
                  <div>
                    <div className="mb-1.5 flex items-baseline gap-2.5">
                      <span className="border-b border-accent t-h4 text-accent">{co.num}</span>
                      <span className="t-eyebrow">{co.title}</span>
                    </div>
                    <div className="t-body-sm text-ink/60">{co.desc}</div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
          {/* powered-by badge — nestled into the empty bottom-right corner beneath the
             callout column. The negative margin is width-relative, so the clearance above
             callout 04 scales with the diagram and it never collides on shorter viewports. */}
          <Reveal className="relative z-[3] ml-0 mt-8 flex items-center gap-4.5 rounded-lg border border-ink/10 bg-white/70 p-4.5 backdrop-blur-sm lg:ml-[66%] lg:mt-[-6%] !duration-[800ms]">
            <div className="flex-shrink-0 font-display text-[24px] font-extrabold tracking-[-0.03em]">IBM</div>
            <div>
              <div className="mb-1.25 t-eyebrow">POWERED BY IBM</div>
              <div className="t-body-sm text-ink/60">A strategic collaboration bringing world-class quantum technology to India for the world.</div>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
