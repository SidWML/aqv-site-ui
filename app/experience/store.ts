"use client";

import * as React from "react";
import type * as THREE from "three";

export type TourState = { entered: boolean; settled: number; menuOpen: boolean; modalOpen: boolean };

let state: TourState = { entered: false, settled: -1, menuOpen: false, modalOpen: false };
const listeners = new Set<() => void>();

export function setTour(patch: Partial<TourState>) {
  const next = { ...state, ...patch };
  if (next.entered === state.entered && next.settled === state.settled && next.menuOpen === state.menuOpen && next.modalOpen === state.modalOpen) return;
  state = next;
  listeners.forEach((l) => l());
}
export function getTour() { return state; }
function subscribe(l: () => void) { listeners.add(l); return () => { listeners.delete(l); }; }
export function useTour<T>(sel: (s: TourState) => T): T {
  return React.useSyncExternalStore(subscribe, () => sel(state), () => sel(state));
}

/** High-frequency scroll state — mutated every frame, read outside React. */
export const prog: { pT: number; pC: number; reduced: boolean; camera: THREE.Camera | null } = {
  pT: 0, pC: 0, reduced: false, camera: null,
};
