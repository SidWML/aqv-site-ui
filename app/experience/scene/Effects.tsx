"use client";

import * as React from "react";
import { EffectComposer, Bloom, Vignette, DepthOfField, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { useTour } from "../store";

/* Light scene: bloom is a garnish (≤0.4, threshold 0.6), DOF only at the
   chandelier stop. No Noise/ChromaticAberration — this is a clean sunlit look. */
export default function Effects() {
  const settled = useTour((s) => s.settled);
  const dof = settled === 3 || settled === 4; // cryo / machine — the money shot
  return (
    <EffectComposer multisampling={4}>
      <Bloom intensity={0.38} luminanceThreshold={0.6} luminanceSmoothing={0.9} mipmapBlur />
      {dof ? <DepthOfField target={[0, 3, -76.5]} focalLength={0.03} bokehScale={3} /> : <></>}
      <Vignette eskil={false} offset={0.35} darkness={0.22} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
}
