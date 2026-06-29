"use client";

import { useReveal } from "../dc";
import AQVNav from "../AQVNav";
import AQVFooter from "../AQVFooter";

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
export default function Home() {
  const ref = useReveal();
  return (
    <div ref={ref} className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="home" theme="dark" />
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
