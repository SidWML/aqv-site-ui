import { Reveal } from "../ui";
import { PathIcon, ArrowUR } from "../dc";

/* ----------------------------------------------------------------- data --- */

const ibmAccess = [
  { status: "LIVE NOW", title: "Quantum Cloud Access", desc: "Access quantum computing today via IBM & TCS Quantum Cloud Services — open to researchers, professors and companies.", icon: "M6 16 a4 4 0 0 1 1-7.9 A5 5 0 0 1 16.5 7.5 a4 4 0 0 1 0.5 8 M9 13 l2 2 4-4" },
  { status: "THROUGH 2026", title: "On-Premise System Two", desc: "South Asia's only on-premise quantum system at this scale, deploying at the Amaravati Quantum Computing Centre.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M12 3 V7 M15 3 V7 M9 17 V21 M12 17 V21 M15 17 V21 M3 9 H7 M3 12 H7 M3 15 H7 M17 9 H21 M17 12 H21 M17 15 H21" },
];

const ibmCallouts = [
  { num: "01", title: "CRYOGENIC SYSTEM", desc: "Dilution refrigeration reaching millikelvin temperatures to create the ideal quantum state." },
  { num: "02", title: "QUANTUM PROCESSOR", desc: "Next-generation quantum processor with high coherence and low error rates." },
  { num: "03", title: "CONTROL ELECTRONICS", desc: "Ultra-low latency electronics that read, process and stabilize qubits in real time." },
  { num: "04", title: "CONTROL & SOFTWARE STACK", desc: "Powerful tools and SDKs for researchers to build, test and scale quantum algorithms." },
];
// vertical center of each device inside s4.png, as % of image height (measured from the asset)
const ibmDeviceTops = [16.3, 38.1, 57.7, 77.4];

/** Full-section animated backdrop: soft indigo glow behind the machine. */
function IbmBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(38% 48% at 54% 48%, rgba(91,108,255,0.12) 0%, rgba(232,231,234,0) 70%)" }}
      />
    </div>
  );
}

/* ============ 04 · QUANTUM COMPUTING AT AQV (light steel) ============ */
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
            <span className="t-eyebrow text-ink/60">QUANTUM COMPUTING AT AQV</span>
          </Reveal>
          <Reveal as="h2" variant="wipe" delay={0.1} className="mb-4 t-h2">
            Quantum Computing <span className="text-accent">at AQV</span>
          </Reveal>
          <Reveal as="p" delay={0.15} className="mb-4 max-w-90 t-lead">
            Quantum computing access today — advanced quantum infrastructure arriving through 2026.
          </Reveal>
          <Reveal as="p" delay={0.2} className="mb-7 max-w-97.5 t-body text-ink/65">
            Researchers and companies can access quantum computing today through IBM & TCS Quantum Cloud Services. IBM Quantum System Two — South Asia&apos;s only on-premise quantum system at this scale — is being deployed at the Amaravati Quantum Computing Centre through 2026.
          </Reveal>
          <Reveal delay={0.25} className="mb-7 grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
            {ibmAccess.map((st) => (
              <div
                key={st.title}
                className="group rounded-card border border-ink/8 bg-white/70 p-4.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:shadow-card"
              >
                <div className="mb-2.5 flex items-center gap-2.5">
                  <span className="icon-chip flex h-8 w-8 items-center justify-center transition-colors duration-300">
                    <PathIcon d={st.icon} size={16} className="text-accent" sw={1.4} />
                  </span>
                  <span className="rounded-pill bg-accent/12 px-2.5 py-1 t-overline text-accent">{st.status}</span>
                </div>
                <div className="t-title-sm text-ink">{st.title}</div>
                <div className="mt-1.5 t-body-sm text-ink/60">{st.desc}</div>
              </div>
            ))}
          </Reveal>
          <Reveal
            as="a"
            href="/technology/quantum-computing"
            delay={0.3}
            className="t-eyebrow inline-flex w-fit items-center gap-3 border border-ink/30 px-6.5 py-3.75 text-ink no-underline transition-colors duration-300 hover:border-accent/60"
          >
            EXPLORE QUANTUM COMPUTING
            <ArrowUR size={14} className="text-accent" sw={1.5} />
          </Reveal>
          <Reveal as="p" delay={0.35} className="mt-4 max-w-90 t-body-sm text-ink/55">
            For the hardware stack and access model, see{" "}
            <a href="/technology/hardware" className="border-b border-accent/40 text-ink no-underline transition-colors hover:text-accent">Quantum Hardware &amp; Systems</a>.
          </Reveal>
        </div>

        {/* ------------------------------------------------ right column --- */}
        <Reveal delay={0.15} className="relative !duration-[1000ms]">
          <div className="relative w-full">
            <img
              src="/images/s4.png"
              alt="IBM Quantum System Two — assembled render"
              className="relative z-[1] mx-auto block h-auto w-full max-w-105 lg:mx-0 lg:w-[62%] lg:max-w-none"
            />
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
