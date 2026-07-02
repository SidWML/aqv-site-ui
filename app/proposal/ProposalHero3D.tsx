"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Lightformer, Bounds, Center } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/** If WebGL / the GLB / the env map fails, render nothing — the hero falls
 *  back to its dark + aurora backdrop, so the page never breaks. */
class SceneBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function Dome() {
  const { scene } = useGLTF("/3d/dome.glb");
  const ref = React.useRef<THREE.Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.1 + s.pointer.x * 0.25;
  });
  return <group ref={ref}><primitive object={scene} /></group>;
}

export default function ProposalHero3D() {
  return (
    <SceneBoundary>
      <Canvas
        camera={{ position: [0, 1.4, 9], fov: 32 }}
        dpr={[1, 1.7]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 9, 4]} intensity={1.6} color="#cdd3ff" />
        <pointLight position={[-7, 2, -3]} intensity={2.2} color="#5B6CFF" />
        <pointLight position={[5, -2, 6]} intensity={1.1} color="#ffd9b0" />
        <React.Suspense fallback={null}>
          <Bounds fit clip margin={1.15}>
            <Center><Dome /></Center>
          </Bounds>
          {/* studio env built from light cards — no CDN fetch, gives the glass reflections */}
          <Environment resolution={256}>
            <Lightformer intensity={2.4} position={[0, 4, -6]} scale={[12, 12, 1]} color="#8b92e8" />
            <Lightformer intensity={1.2} position={[-6, 1, 4]} scale={[10, 6, 1]} color="#ffffff" />
            <Lightformer intensity={1.6} position={[6, -1, 3]} scale={[8, 8, 1]} color="#cdd3ff" />
          </Environment>
        </React.Suspense>
        <fog attach="fog" args={["#0A0E1A", 14, 32]} />
        <EffectComposer>
          <Bloom intensity={0.6} luminanceThreshold={0.6} luminanceSmoothing={0.4} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </SceneBoundary>
  );
}

useGLTF.preload("/3d/dome.glb");
