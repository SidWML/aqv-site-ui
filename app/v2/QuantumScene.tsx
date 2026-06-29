"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/** The quantum core — a slowly distorting, glowing icosphere inside a faint
 *  wireframe shell. Leans toward the pointer for a living, reactive feel. */
function QuantumCore() {
  const ref = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.16 + state.pointer.x * 0.4;
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.2 + state.pointer.y * 0.25;
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.1;
      shell.current.rotation.z = t * 0.05;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={1.1}>
      <Icosahedron ref={ref} args={[1.55, 14]}>
        <MeshDistortMaterial
          color="#5B6CFF"
          emissive="#2C36A8"
          emissiveIntensity={0.55}
          roughness={0.22}
          metalness={0.55}
          distort={0.36}
          speed={1.7}
        />
      </Icosahedron>
      <Icosahedron ref={shell} args={[2.05, 3]}>
        <meshBasicMaterial color="#8B92E8" wireframe transparent opacity={0.13} />
      </Icosahedron>
    </Float>
  );
}

export default function QuantumScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 5, 4]} intensity={3} color="#8B92E8" />
      <pointLight position={[-6, -3, 2]} intensity={1.7} color="#C9A86A" />
      <pointLight position={[0, 1, 6]} intensity={1.3} color="#5B6CFF" />
      <QuantumCore />
      <Sparkles count={140} scale={[13, 9, 7]} size={2.6} speed={0.28} opacity={0.7} color="#8B92E8" />
      <EffectComposer>
        <Bloom intensity={1.25} luminanceThreshold={0.16} luminanceSmoothing={0.55} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
