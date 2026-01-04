import { seedWords } from './wordlists/seedWords';

// 8 axes, each 4 bits (0-15), total 32 bits
// 3 words × 11 bits = 33 bits (1 bit padding)

export type AxisValues = {
  elitist_populist: number;
  legible_illegible: number;
  sovereign_symphonic: number;
  anthro_xeno: number;
  mortal_immortalist: number;
  accel_steward: number;
  aligned_autonomous: number;
  apollonian_dionysian: number;
};

const AXIS_ORDER: (keyof AxisValues)[] = [
  'elitist_populist',
  'legible_illegible',
  'sovereign_symphonic',
  'anthro_xeno',
  'mortal_immortalist',
  'accel_steward',
  'aligned_autonomous',
  'apollonian_dionysian',
];

/**
 * Encode 8 axis values (4 bits each) into a 3-word seed phrase.
 */
export function encode(axes: AxisValues): string {
  // Pack 8 × 4-bit values into 32 bits
  let bits = 0;
  for (const axis of AXIS_ORDER) {
    const value = Math.max(0, Math.min(15, axes[axis])); // clamp to 0-15
    bits = (bits << 4) | value;
  }

  // Add 1 bit padding to make 33 bits (divisible into 3 × 11)
  bits = bits << 1;

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

  // Remove 1-bit padding
  bits = bits >> 1;

  // Extract 8 × 4-bit values (in reverse order)
  const values: number[] = [];
  for (let i = 0; i < 8; i++) {
    values.unshift(bits & 0xf);
    bits = bits >> 4;
  }

  // Build axis object
  const result: AxisValues = {} as AxisValues;
  AXIS_ORDER.forEach((axis, i) => {
    result[axis] = values[i];
  });

  return result;
}
