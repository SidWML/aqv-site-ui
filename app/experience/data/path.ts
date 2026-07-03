export const PATH: [number, number, number][] = [
  [0, 48, 146], [0, 28, 120], [0, 12, 100], [0, 6, 88],          // night descent over the constellation
  [0, 2.4, 70], [0, 2.3, 40], [0, 2.3, 20], [0, 2.4, 14.8],      // boulevard → rotunda doors
  [0, 2.5, 8], [0, 2.6, 2], [0, 2.5, -6], [0, 2.4, -13.5],       // glowing atrium
  [0, 2.3, -24], [0, 2.3, -36], [0, 2.3, -48], [0, 2.2, -57],    // glass lab corridor
  [0, 2.1, -63], [1.6, 1.9, -69], [2.4, 1.75, -73.4],            // cryo-lab door
  [2.1, 1.7, -75.6], [2.6, 1.8, -77.6],                          // past the chandelier — gold reads in context
  [5.5, 2, -78.2], [10, 2.2, -78], [18, 2.3, -78], [28, 2.3, -78], [38, 2.2, -78], // gallery
  [45.5, 2.1, -78], [52, 1.9, -78], [58, 1.9, -78],              // mission-control room
  [54, 4, -78], [54, 12, -78], [52, 26, -74],                    // ascent through the roof oculus
  [38, 42, -40], [16, 50, 10], [0, 44, 60], [-6, 40, 95],        // high finale orbit
];

// CatmullRomCurve3(points,'centripetal',0.5). Look target = curve(t+0.02),
// blended toward these focus overrides while t is inside [a,b] (strength k).
export const FOCUS: [number, number, [number, number, number], number][] = [
  [0.00, 0.14, [0, 5, 26], 0.8], [0.14, 0.21, [0, 3.4, 10], 0.5], [0.21, 0.28, [0, 2.8, -14], 0.65],
  [0.47, 0.55, [0, 2.6, -76.5], 0.75], [0.55, 0.63, [0, 2.6, -76.5], 0.95], [0.63, 0.68, [-8, 2.4, -88], 0.45],
  [0.70, 0.78, [24, 7, -100], 0.55], [0.80, 0.86, [62, 2.6, -78], 0.9], [0.93, 1.00, [0, 6, 20], 0.9],
];
