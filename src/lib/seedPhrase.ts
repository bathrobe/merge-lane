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
 * Uses BigInt to avoid 32-bit overflow (we need 33 bits).
 */
export function encode(axes: AxisValues): string {
  // Pack 7 × 4-bit values into 28 bits
  let bits = 0n;
  for (const axis of AXIS_ORDER) {
    const value = Math.max(0, Math.min(15, axes[axis])); // clamp to 0-15
    bits = (bits << 4n) | BigInt(value);
  }

  // Add 5 bits padding to make 33 bits (divisible into 3 × 11)
  bits = bits << 5n;

  // Extract three 11-bit indices
  const word3Index = Number(bits & 0x7ffn);
  const word2Index = Number((bits >> 11n) & 0x7ffn);
  const word1Index = Number((bits >> 22n) & 0x7ffn);

  return `${seedWords[word1Index]} ${seedWords[word2Index]} ${seedWords[word3Index]}`;
}

/**
 * Decode a 3-word seed phrase back into axis values.
 * Uses BigInt to avoid 32-bit overflow (we need 33 bits).
 */
export function decode(phrase: string): AxisValues | null {
  const words = phrase.toLowerCase().trim().split(/\s+/);
  if (words.length !== 3) return null;

  const indices = words.map((w) => seedWords.indexOf(w));
  if (indices.some((i) => i === -1)) return null;

  // Reconstruct 33 bits from three 11-bit indices
  let bits = (BigInt(indices[0]) << 22n) | (BigInt(indices[1]) << 11n) | BigInt(indices[2]);

  // Remove 5-bit padding
  bits = bits >> 5n;

  // Extract 7 × 4-bit values (in reverse order)
  const values: number[] = [];
  for (let i = 0; i < 7; i++) {
    values.unshift(Number(bits & 0xfn));
    bits = bits >> 4n;
  }

  // Build axis object
  const result: AxisValues = {
    legible_illegible: values[0],
    sovereign_symphonic: values[1],
    anthro_xeno: values[2],
    mortal_immortalist: values[3],
    accel_steward: values[4],
    aligned_autonomous: values[5],
    apollonian_dionysian: values[6],
  };

  return result;
}
