"use client";

import * as React from "react";
import * as THREE from "three";

/* Clean cream-to-pale-blue gradient dome + a soft warm sun disc (Part 3.1). */
export default function Sky() {
  const mat = React.useMemo(
    () =>
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        uniforms: {
          top: { value: new THREE.Color("#CFE6F0") },     // pale blue
          bottom: { value: new THREE.Color("#F2EFE6") },   // cream horizon
        },
        vertexShader: `
          varying vec3 vP;
          void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
        `,
        fragmentShader: `
          varying vec3 vP;
          uniform vec3 top; uniform vec3 bottom;
          void main(){
            float h = clamp((normalize(vP).y * 0.5 + 0.5), 0.0, 1.0);
            vec3 col = mix(bottom, top, smoothstep(0.15, 0.75, h));
            gl_FragColor = vec4(col, 1.0);
          }
        `,
      }),
    []
  );
  return (
    <>
      <mesh scale={[600, 600, 600]}>
        <sphereGeometry args={[1, 32, 32]} />
        <primitive object={mat} attach="material" />
      </mesh>
      {/* soft warm sun, high on the key-light side */}
      <mesh position={[-220, 260, 180]}>
        <circleGeometry args={[26, 40]} />
        <meshBasicMaterial color="#FFF4DA" transparent opacity={0.85} fog={false} depthWrite={false} />
      </mesh>
    </>
  );
}
