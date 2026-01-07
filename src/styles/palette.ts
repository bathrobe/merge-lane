/**
 * Core color palette from Style Lock.md
 * Single source of truth for all color values
 */

export const PALETTE = {
  // Core colors
  institutionalTeal: "#5B8A8A",
  warmBrown: "#8B7355",
  softBeige: "#D4C5A9",
  mutedGold: "#C9A227",
  deepNavy: "#2C3E50",
  white: "#FFFFFF",
  cream: "#F5F0E6",

  // Clyde accent (for subtle recurring touches)
  clydePeach: "#ECAB8C",
} as const;

export type PaletteColor = keyof typeof PALETTE;
