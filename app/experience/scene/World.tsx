"use client";

import * as React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prog } from "../store";

/* ---------- LIGHT diorama palette (v3.0, Part 1 + 3.1) ---------- */
const C = {
  paper: "#EFECE2", card: "#FFFFFF", white: "#FBFAF6", warm: "#F6F1E6", ink: "#23262E",
  gold: "#E4A93C", goldEmis: "#8A6516", glass: "#BFE0EA", cryo: "#7FD4E8",
  lawn1: "#BCCF9A", lawn2: "#9FBE7F", sand: "#E7DDC4",
  tree1: "#7FA86B", tree2: "#5E8F55", trunk: "#6B5B43",
  terra: "#D96C4F", steel: "#C9CCC4", copper: "#C77B4A",
  ceil: "#FFF6E2", win: "#DCEBF0", dash: "#EAF4F8", leaf: "#4CAF6D",
};
const smooth = (x: number, a: number, b: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/* metalness kept ≤.35 everywhere (Part 2.2) so no envmap is needed */
function Gold({ rough = 0.35 }: { rough?: number }) { return <meshStandardMaterial color={C.gold} metalness={0.35} roughness={rough} emissive={C.goldEmis} emissiveIntensity={0.25} />; }
function Glass() { return <meshStandardMaterial color={C.glass} transparent opacity={0.3} roughness={0.15} metalness={0.1} depthWrite={false} />; }
function Slab({ pos, size, color = C.white }: { pos: [number, number, number]; size: [number, number, number]; color?: string }) {
  return (<mesh position={pos} castShadow receiveShadow><boxGeometry args={size} /><meshStandardMaterial color={color} roughness={0.9} /></mesh>);
}
/* emissive white ceiling strip — a soft practical, reads warm */
function Ceil({ pos, size }: { pos: [number, number, number]; size: [number, number, number] }) {
  return (<mesh position={pos}><boxGeometry args={size} /><meshStandardMaterial color={C.ceil} emissive={C.ceil} emissiveIntensity={1.0} /></mesh>);
}

/* ---------- swept-profile white towers with blue-glass inlays + fins ---------- */
const TOWERS: [number, number, number][] = [
  [-26, 44, 90], [26, 44, 90], [-26, 60, 62], [26, 60, 62], [-26, 76, 34], [26, 76, 34],
];
function Tower({ x, z, h }: { x: number; z: number; h: number }) {
  const base = 10;
  const N = 20;
  const floors = React.useMemo(() => {
    const a: { y: number; w: number; hh: number }[] = [];
    for (let k = 0; k < N; k++) {
      const fy = k / (N - 1);
      const ss = fy * fy * (3 - 2 * fy);
      const w = base * (1 - 0.35 * ss * ss) * (k === 0 ? 1.15 : 1);
      a.push({ y: 0.5 + fy * (h - 1), w, hh: (h / N) * 0.86 });
    }
    return a;
  }, [h]);
  return (
    <group position={[x, 0, z]}>
      {floors.map((f, k) => (
        <group key={k} position={[0, f.y, 0]}>
          <mesh castShadow receiveShadow><boxGeometry args={[f.w, f.hh, f.w]} /><meshStandardMaterial color={C.white} roughness={0.9} /></mesh>
          {/* blue-glass curtain inlays on the 4 faces */}
          <mesh position={[0, 0, f.w / 2 + 0.02]}><planeGeometry args={[f.w * 0.66, f.hh * 0.72]} /><Glass /></mesh>
          <mesh position={[0, 0, -f.w / 2 - 0.02]} rotation={[0, Math.PI, 0]}><planeGeometry args={[f.w * 0.66, f.hh * 0.72]} /><Glass /></mesh>
          <mesh position={[f.w / 2 + 0.02, 0, 0]} rotation={[0, Math.PI / 2, 0]}><planeGeometry args={[f.w * 0.66, f.hh * 0.72]} /><Glass /></mesh>
          <mesh position={[-f.w / 2 - 0.02, 0, 0]} rotation={[0, -Math.PI / 2, 0]}><planeGeometry args={[f.w * 0.66, f.hh * 0.72]} /><Glass /></mesh>
          {/* white fin ledge */}
          <mesh position={[0, f.hh / 2, 0]}><boxGeometry args={[f.w + 0.5, 0.16, f.w + 0.5]} /><meshStandardMaterial color={C.warm} roughness={0.9} /></mesh>
        </group>
      ))}
      <mesh position={[0, h + 0.3, 0]} castShadow><boxGeometry args={[base * 0.6, 0.8, base * 0.6]} /><meshStandardMaterial color={C.white} roughness={0.85} /></mesh>
    </group>
  );
}

/* ---------- trees (two greens) ---------- */
function Trees() {
  const data = React.useMemo(() => {
    const out: { p: [number, number, number]; s: number; g: number }[] = [];
    let seed = 7;
    const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
    for (let i = 0; i < 78; i++) { const side = i % 2 ? 1 : -1; out.push({ p: [side * (10 + rnd() * 10), 0, rnd() * 150], s: 0.8 + rnd() * 0.7, g: rnd() }); }
    for (let i = 0; i < 44; i++) { out.push({ p: [14 + rnd() * 34, 0, -92 - rnd() * 26], s: 0.8 + rnd() * 0.6, g: rnd() }); }
    return out;
  }, []);
  return (
    <group>
      {data.map((t, i) => (
        <group key={i} position={t.p} scale={t.s}>
          <mesh position={[0, 1, 0]}><cylinderGeometry args={[0.12, 0.16, 2, 6]} /><meshStandardMaterial color={C.trunk} roughness={1} /></mesh>
          <mesh position={[0, 3, 0]} castShadow><coneGeometry args={[1.3, 3, 8]} /><meshStandardMaterial color={t.g > 0.5 ? C.tree1 : C.tree2} roughness={1} /></mesh>
        </group>
      ))}
    </group>
  );
}

export default function World() {
  const rotL = React.useRef<THREE.Group>(null);
  const rotR = React.useRef<THREE.Group>(null);
  const labL = React.useRef<THREE.Group>(null);
  const labR = React.useRef<THREE.Group>(null);
  const chand = React.useRef<THREE.Group>(null);
  const can = React.useRef<THREE.Mesh>(null);
  const cryo = React.useRef<THREE.PointLight>(null);

  useFrame((s) => {
    const cam = s.camera;
    const openFor = (dz: number) => { const d = Math.abs(cam.position.z - dz) + Math.abs(cam.position.x); return 1 - Math.min(1, Math.max(0, (d - 8) / 12)); };
    const ro = openFor(13.9), lo = openFor(-60.2);
    if (rotL.current) rotL.current.position.x = -1.6 - ro * 2.2;
    if (rotR.current) rotR.current.position.x = 1.6 + ro * 2.2;
    if (labL.current) labL.current.position.x = -3 - lo * 3;
    if (labR.current) labR.current.position.x = 3 + lo * 3;
    const rev = smooth(prog.pC, 0.515, 0.55);
    if (can.current) can.current.position.y = 2.3 + rev * 4.2;
    if (cryo.current) cryo.current.intensity = rev * 1.6;
    if (chand.current) chand.current.rotation.y += 0.0025;
  });

  return (
    <>
      <color attach="background" args={[C.paper]} />
      <fog attach="fog" args={[C.paper, 120, 560]} />
      {/* fixed light rig — everything must read from this alone (Part 2.2) */}
      <hemisphereLight args={["#FFFFFF", "#DCD6C4", 1.15]} />
      <directionalLight castShadow position={[-80, 120, 60]} intensity={1.2} color="#FFF3DC" shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} shadow-normalBias={0.05}>
        <orthographicCamera attach="shadow-camera" args={[-180, 180, 180, -180, 0.5, 600]} />
      </directionalLight>
      <ambientLight intensity={0.35} color="#FFFFFF" />

      {/* ground: rolling lawn + contour bands + sandy boulevard */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[900, 900]} /><meshStandardMaterial color={C.lawn2} roughness={1} /></mesh>
      {[70, 130, 200, 280].map((r, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01 + i * 0.005, 40]}><ringGeometry args={[r, r + 10, 80]} /><meshStandardMaterial color={C.lawn1} roughness={1} transparent opacity={0.5} /></mesh>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 72]}><planeGeometry args={[12, 156]} /><meshStandardMaterial color={C.sand} roughness={1} /></mesh>
      {/* terracotta path markers */}
      {Array.from({ length: 10 }).map((_, i) => {
        const z = 12 + i * 14;
        return (<group key={i}>
          <mesh position={[-6.4, 0.4, z]}><coneGeometry args={[0.18, 0.8, 8]} /><meshStandardMaterial color={C.terra} roughness={0.8} /></mesh>
          <mesh position={[6.4, 0.4, z]}><coneGeometry args={[0.18, 0.8, 8]} /><meshStandardMaterial color={C.terra} roughness={0.8} /></mesh>
        </group>);
      })}

      {TOWERS.map((t, i) => <Tower key={i} x={t[0]} z={t[2]} h={t[1]} />)}
      <Trees />

      {/* hardware park (east) */}
      <group position={[58, 0, 46]}>
        <Slab pos={[0, 0.15, 0]} size={[26, 0.3, 20]} color={C.warm} />
        {[[-8, -6], [8, -6], [-8, 6], [8, 6]].map((p, i) => (
          <group key={i} position={[p[0], 0, p[1]]}>
            <Slab pos={[0, 1.6, 0]} size={[6, 3, 6]} />
            <mesh position={[0, 1.8, 3.05]}><planeGeometry args={[4.4, 2]} /><Glass /></mesh>
          </group>
        ))}
      </group>

      {/* rotunda — white drum, gold crown, terracotta flags, glass doors */}
      <group>
        <mesh position={[0, 4, 0]} castShadow receiveShadow><cylinderGeometry args={[14, 14, 8, 48, 1, true]} /><meshStandardMaterial color={C.white} roughness={0.9} side={THREE.DoubleSide} /></mesh>
        <mesh position={[0, 8.1, 0]}><ringGeometry args={[4, 14, 48]} /><meshStandardMaterial color={C.warm} roughness={0.9} side={THREE.DoubleSide} /></mesh>
        <mesh position={[0, 8.25, 0]} rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[14.6, 0.3, 12, 60]} /><Gold rough={0.3} /></mesh>
        {/* terracotta flags around the crown */}
        {Array.from({ length: 12 }).map((_, i) => { const a = (i / 12) * Math.PI * 2; return (<group key={i} position={[Math.cos(a) * 14.6, 8.4, Math.sin(a) * 14.6]}><mesh position={[0, 1, 0]}><cylinderGeometry args={[0.04, 0.04, 2, 6]} /><meshStandardMaterial color={C.white} /></mesh><mesh position={[0.35, 1.5, 0]}><planeGeometry args={[0.7, 0.45]} /><meshStandardMaterial color={C.terra} side={THREE.DoubleSide} roughness={0.8} /></mesh></group>); })}
        {/* floor + gold emblem */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}><circleGeometry args={[14, 48]} /><meshStandardMaterial color={C.warm} roughness={0.85} /></mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.07, 0]}><ringGeometry args={[2.2, 3.2, 56]} /><Gold rough={0.3} /></mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.08, 0]}><circleGeometry args={[1.4, 40]} /><Gold rough={0.3} /></mesh>
        {/* reception + monument */}
        <Slab pos={[0, 1.5, -9]} size={[6, 3, 2]} color={C.warm} />
        <mesh position={[0, 0.9, -3]} castShadow><cylinderGeometry args={[2.4, 2.7, 1.8, 6]} /><meshStandardMaterial color={C.warm} roughness={0.9} /></mesh>
        <mesh position={[0, 4, -3]} castShadow><cylinderGeometry args={[0.5, 1.3, 4.6, 24]} /><meshStandardMaterial color={C.white} roughness={0.85} /></mesh>
        <mesh position={[0, 6.4, -3]} castShadow><icosahedronGeometry args={[1.4, 1]} /><Gold rough={0.3} /></mesh>
        {/* colonnade */}
        {Array.from({ length: 8 }).map((_, i) => { const a = (i / 8) * Math.PI * 2; return (<mesh key={i} position={[Math.cos(a) * 11, 4, Math.sin(a) * 11]} castShadow><cylinderGeometry args={[0.5, 0.5, 8, 14]} /><meshStandardMaterial color={C.white} roughness={0.9} /></mesh>); })}
        {/* oculus */}
        <Ceil pos={[0, 7.9, 0]} size={[7.6, 0.1, 7.6]} />
        {/* south sliding glass doors at z 13.9 */}
        <group position={[0, 3, 13.9]}>
          <Slab pos={[-4, 0, 0]} size={[1.2, 6, 0.5]} color={C.white} />
          <Slab pos={[4, 0, 0]} size={[1.2, 6, 0.5]} color={C.white} />
          <group ref={rotL}><mesh><boxGeometry args={[3, 5.6, 0.16]} /><Glass /></mesh></group>
          <group ref={rotR}><mesh><boxGeometry args={[3, 5.6, 0.16]} /><Glass /></mesh></group>
        </group>
        <pointLight position={[0, 6, 0]} intensity={0.6} distance={40} color={C.warm} />
      </group>

      {/* corridor z -13 → -60 (glass labs both sides, colorful props) */}
      <group>
        <Slab pos={[0, 0.1, -36.5]} size={[8.4, 0.2, 47]} color={C.warm} />
        <Slab pos={[0, 5, -36.5]} size={[9, 0.3, 47]} color={C.white} />
        <mesh position={[-4.2, 2.6, -36.5]}><boxGeometry args={[0.15, 5, 47]} /><Glass /></mesh>
        <mesh position={[4.2, 2.6, -36.5]}><boxGeometry args={[0.15, 5, 47]} /><Glass /></mesh>
        <Slab pos={[-8.6, 2.6, -36.5]} size={[0.5, 6, 47]} color={C.white} /><Slab pos={[8.6, 2.6, -36.5]} size={[0.5, 6, 47]} color={C.white} />
        <Ceil pos={[0, 4.78, -36.5]} size={[1.4, 0.1, 44]} />
        {[-20, -30, -40, -50].map((z, i) => (
          <group key={i} position={[i % 2 ? 6 : -6, 0, z]}>
            <Slab pos={[0, 1, 0]} size={[2.4, 2, 1.2]} color={C.leaf} />
            <Slab pos={[0, 2.6, 0]} size={[1.6, 3.2, 1]} color={C.white} />
            <mesh position={[i % 2 ? -1.6 : 1.6, 0.5, 1]}><cylinderGeometry args={[0.3, 0.3, 1, 12]} /><meshStandardMaterial color={C.terra} roughness={0.8} /></mesh>
          </group>
        ))}
        <pointLight position={[0, 4, -34]} intensity={0.7} distance={40} color={C.warm} />
      </group>

      {/* cryo lab x -12..12 z -60..-92 */}
      <group>
        <Slab pos={[0, 0.1, -76]} size={[24, 0.2, 32]} color={C.warm} />
        <Slab pos={[0, 6, -76]} size={[24, 0.3, 32]} color={C.white} />
        <Slab pos={[-12, 3, -76]} size={[0.6, 6, 32]} color={C.white} /><Slab pos={[0, 3, -92]} size={[24, 6, 0.6]} color={C.white} />
        <Slab pos={[12, 3, -66]} size={[0.6, 6, 12]} color={C.white} /><Slab pos={[12, 3, -88]} size={[0.6, 6, 8]} color={C.white} />
        <Slab pos={[-8, 3, -60.2]} size={[8, 6, 0.6]} color={C.white} /><Slab pos={[8, 3, -60.2]} size={[8, 6, 0.6]} color={C.white} />
        <group position={[0, 3, -60.2]}>
          <group ref={labL}><mesh><boxGeometry args={[4, 5.6, 0.16]} /><Glass /></mesh></group>
          <group ref={labR}><mesh><boxGeometry args={[4, 5.6, 0.16]} /><Glass /></mesh></group>
        </group>
        <Ceil pos={[0, 5.7, -76]} size={[3, 0.1, 20]} />

        {/* white gantry */}
        {[[-2, -2], [2, -2], [-2, 2], [2, 2]].map((g, i) => <Slab key={i} pos={[g[0], 2.4, -76.5 + g[1]]} size={[0.22, 4.8, 0.22]} color={C.white} />)}
        <Slab pos={[0, 4.8, -76.5]} size={[4.4, 0.22, 0.22]} color={C.white} /><Slab pos={[0, 4.8, -76.5]} size={[0.22, 0.22, 4.4]} color={C.white} />

        {/* gold chandelier */}
        <group ref={chand} position={[0, 0, -76.5]}>
          {[[0.95, 3.9], [0.85, 3.3], [0.72, 2.8], [0.58, 2.35], [0.45, 1.95]].map((d, i) => (
            <mesh key={i} position={[0, d[1], 0]}><cylinderGeometry args={[d[0], d[0], 0.14, 40]} /><Gold rough={0.3} /></mesh>
          ))}
          {[[3.9, 3.3], [3.3, 2.8], [2.8, 2.35], [2.35, 1.95]].map((pair, k) => (
            <group key={k}>{Array.from({ length: 6 }).map((_, r) => { const a = (r / 6) * Math.PI * 2, rad = 0.5; return (<mesh key={r} position={[Math.cos(a) * rad, (pair[0] + pair[1]) / 2, Math.sin(a) * rad]}><cylinderGeometry args={[0.03, 0.03, pair[0] - pair[1], 6]} /><Gold rough={0.3} /></mesh>); })}</group>
          ))}
          <mesh position={[0, 1.55, 0]}><cylinderGeometry args={[0.28, 0.28, 0.6, 20]} /><meshStandardMaterial color={C.copper} metalness={0.35} roughness={0.35} /></mesh>
          <mesh position={[0, 2.55, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.5, 0.06, 10, 32]} /><meshStandardMaterial color={C.copper} metalness={0.35} roughness={0.35} /></mesh>
        </group>
        <mesh ref={can} position={[0, 2.3, -76.5]}><cylinderGeometry args={[1.15, 1.15, 3.4, 32]} /><meshStandardMaterial color={C.white} roughness={0.4} metalness={0.25} /></mesh>
        <pointLight ref={cryo} position={[0, 3, -76.5]} intensity={0} distance={20} color={C.cryo} />

        {/* dewars, monitor, IBM dark-hex pedestal */}
        <mesh position={[-4, 1.5, -70]} castShadow><cylinderGeometry args={[0.7, 0.7, 3, 20]} /><meshStandardMaterial color={C.steel} metalness={0.35} roughness={0.4} /></mesh>
        <mesh position={[4, 1.5, -70]} castShadow><cylinderGeometry args={[0.7, 0.7, 3, 20]} /><meshStandardMaterial color={C.steel} metalness={0.35} roughness={0.4} /></mesh>
        <mesh position={[5, 1.6, -74]}><boxGeometry args={[1.6, 1, 0.1]} /><meshStandardMaterial color={C.dash} emissive={C.cryo} emissiveIntensity={0.4} /></mesh>
        <group position={[-8, 0, -88]}>
          <mesh position={[0, 1.7, 0]} castShadow><cylinderGeometry args={[1.6, 1.6, 3.4, 6]} /><meshStandardMaterial color={C.ink} metalness={0.3} roughness={0.6} /></mesh>
          <mesh position={[0, 3.5, 0]}><cylinderGeometry args={[1.65, 1.65, 0.2, 6]} /><Gold rough={0.3} /></mesh>
        </group>
        <pointLight position={[0, 4.5, -76]} intensity={0.7} distance={40} color={C.warm} />
      </group>

      {/* gallery x 12..44 (windows to the courtyard + white Medha) */}
      <group>
        <Slab pos={[28, 0.1, -78]} size={[32, 0.2, 12]} color={C.warm} />
        <Slab pos={[28, 5, -78]} size={[32, 0.3, 12]} color={C.white} />
        <Slab pos={[28, 3, -72]} size={[32, 6, 0.5]} color={C.white} />
        {[16, 28, 40].map((x, i) => <Slab key={i} pos={[x, 3, -84]} size={[2, 6, 0.5]} color={C.white} />)}
        <Ceil pos={[28, 4.8, -78]} size={[28, 0.1, 2]} />
        {/* white Medha mid-rise among trees */}
        <group position={[24, 0, -102]}>
          <mesh position={[0, 8, 0]} castShadow><boxGeometry args={[9, 16, 9]} /><meshStandardMaterial color={C.white} roughness={0.9} /></mesh>
          <mesh position={[0, 8, 4.55]}><planeGeometry args={[6, 13]} /><Glass /></mesh>
        </group>
        <pointLight position={[28, 4, -78]} intensity={0.6} distance={40} color={C.warm} />
      </group>

      {/* BRIGHT operations room x 44..64 (light-blue dashboard, not dark) */}
      <group>
        <Slab pos={[54, 0.1, -78]} size={[20, 0.2, 16]} color={C.warm} />
        <Slab pos={[48, 6, -78]} size={[6, 0.3, 16]} color={C.white} /><Slab pos={[60, 6, -78]} size={[6, 0.3, 16]} color={C.white} />
        <Slab pos={[54, 6, -72.5]} size={[8, 0.3, 5]} color={C.white} /><Slab pos={[54, 6, -83.5]} size={[8, 0.3, 5]} color={C.white} />
        <Slab pos={[54, 3, -86]} size={[20, 6, 0.5]} color={C.white} /><Slab pos={[54, 3, -70]} size={[20, 6, 0.5]} color={C.white} />
        <Slab pos={[44, 3, -73]} size={[0.5, 6, 6]} color={C.white} /><Slab pos={[44, 3, -83]} size={[0.5, 6, 6]} color={C.white} />
        {/* light-blue dashboard wall with cyan/leaf chart blocks */}
        <mesh position={[63.7, 2.8, -78]}><boxGeometry args={[0.3, 4.2, 10]} /><meshStandardMaterial color={C.dash} roughness={0.5} /></mesh>
        {[-3.2, 0, 3.2].map((dz, i) => <mesh key={i} position={[63.5, 3, -78 + dz]}><boxGeometry args={[0.12, 2.4, 2.6]} /><meshStandardMaterial color={i === 1 ? C.leaf : C.cryo} emissive={i === 1 ? C.leaf : C.cryo} emissiveIntensity={0.35} /></mesh>)}
        {[-6, -2, 2, 6].map((dz, i) => <Slab key={i} pos={[48, 1, -78 + dz]} size={[1.6, 2, 1.4]} color={C.white} />)}
        <Slab pos={[54, 1, -74]} size={[8, 0.6, 1.4]} color={C.white} />
        <Slab pos={[54, 1, -82]} size={[8, 0.6, 1.4]} color={C.white} />
        <Ceil pos={[54, 5.85, -78]} size={[10, 0.1, 10]} />
        <pointLight position={[56, 4, -78]} intensity={0.7} distance={40} color={C.warm} />
      </group>
    </>
  );
}
