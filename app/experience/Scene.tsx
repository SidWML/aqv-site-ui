"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import World from "./scene/World";
import Sky from "./scene/Sky";
import CameraRig from "./scene/CameraRig";
import Effects from "./scene/Effects";

/* fires once the first frame has actually rendered — drives the boot-guard */
function FirstFrame({ onReady }: { onReady: () => void }) {
  const done = React.useRef(false);
  useFrame(() => { if (!done.current) { done.current = true; onReady(); } });
  return null;
}

export default function Scene({ onReady }: { onReady?: () => void }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      camera={{ position: [0, 48, 146], fov: 50, near: 0.5, far: 1200 }}
    >
      <React.Suspense fallback={null}>
        <Sky />
        <World />
        <CameraRig />
        <Effects />
        <FirstFrame onReady={() => onReady?.()} />
        <Preload all />
      </React.Suspense>
    </Canvas>
  );
}
