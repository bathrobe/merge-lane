import { seedWords } from './wordlists/seedWords';

// 7 axes, each 4 bits (0-15), total 28 bits
// 3 words × 11 bits = 33 bits (5 bits padding)

export type AxisValues = {
  legible_illegible: number;
  sovereign_symphonic: number;
  anthro_xeno: number;
  mortal_immortalist: number;
  accel_steward: number;
  aligned_autonomous: number;
  apollonian_dionysian: number;
};

const AXIS_ORDER: (keyof AxisValues)[] = [
  'legible_illegible',
  'sovereign_symphonic',
  'anthro_xeno',
  'mortal_immortalist',
  'accel_steward',
  'aligned_autonomous',
  'apollonian_dionysian',
];

/**
 * Encode 7 axis values (4 bits each) into a 3-word seed phrase.
 */
export function encode(axes: AxisValues): string {
  // Pack 7 × 4-bit values into 28 bits
  let bits = 0;
  for (const axis of AXIS_ORDER) {
    const value = Math.max(0, Math.min(15, axes[axis])); // clamp to 0-15
    bits = (bits << 4) | value;
  }

  // Add 5 bits padding to make 33 bits (divisible into 3 × 11)
  bits = bits << 5;

  // Extract three 11-bit indices
  const word3Index = bits & 0x7ff;
  const word2Index = (bits >> 11) & 0x7ff;
  const word1Index = (bits >> 22) & 0x7ff;

  return `${seedWords[word1Index]} ${seedWords[word2Index]} ${seedWords[word3Index]}`;
}

/**
 * Decode a 3-word seed phrase back into axis values.
 */
export function decode(phrase: string): AxisValues | null {
  const words = phrase.toLowerCase().trim().split(/\s+/);
  if (words.length !== 3) return null;

  const indices = words.map((w) => seedWords.indexOf(w));
  if (indices.some((i) => i === -1)) return null;

  // Reconstruct 33 bits from three 11-bit indices
  let bits = (indices[0] << 22) | (indices[1] << 11) | indices[2];

  // Remove 5-bit padding
  bits = bits >> 5;

  // Extract 7 × 4-bit values (in reverse order)
  const values: number[] = [];
  for (let i = 0; i < 7; i++) {
    values.unshift(bits & 0xf);
    bits = bits >> 4;
  }

  // Build axis object with defaults, then override with decoded values
  const result: AxisValues = {
    legible_illegible: 8,
    sovereign_symphonic: 8,
    anthro_xeno: 8,
    mortal_immortalist: 8,
    accel_steward: 8,
    aligned_autonomous: 8,
    apollonian_dionysian: 8,
  };
  AXIS_ORDER.forEach((axis, i) => {
    result[axis] = values[i] ?? 8;
  });

  return result;
}
