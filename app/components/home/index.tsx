"use client";

import { useReveal } from "../dc";
import AQVNav from "../AQVNav";
import AQVFooter from "../AQVFooter";
import SectionNav from "../SectionNav";

import Hero from "./Hero";
import Foundation from "./Foundation";
import Pillars from "./Pillars";
import IbmSystem from "./IbmSystem";
import Launchpad from "./Launchpad";
import Research from "./Research";
import Campus from "./Campus";
import Partners from "./Partners";
import Journal from "./Journal";
import Cta from "./Cta";

/**
 * Home page composition. Each section lives in its own file in this folder;
 * the route (app/page.tsx) just renders <Home />. The page-level `useReveal`
 * observer drives every `data-reveal` element across the sections.
 */
const SECTIONS = [
  { id: "foundation", label: "Foundation" },
  { id: "pillars", label: "Five Pillars" },
  { id: "ibm", label: "IBM System Two" },
  { id: "launchpad", label: "Launchpad" },
  { id: "research", label: "Research" },
  { id: "infra", label: "Infrastructure" },
  { id: "partners", label: "Partners" },
  { id: "insights", label: "Journal" },
];

export default function Home() {
  const ref = useReveal();
  return (
    <div ref={ref} className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="home" theme="dark" />
      <SectionNav sections={SECTIONS} />
      <Hero />
      <Foundation />
      <Pillars />
      <IbmSystem />
      <Launchpad />
      <Research />
      <Campus />
      <Partners />
      <Journal />
      <Cta />
      <AQVFooter />
    </div>
  );
}
