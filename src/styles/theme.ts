/**
 * Derived theme values from DesignPlayground
 * Gradients, border colors, shadows built on top of PALETTE
 */

import { PALETTE } from "./palette";

// Teal frame gradients
export const TEAL = {
  light: "#7BA3A3",
  mid: PALETTE.institutionalTeal,
  dark: "#3D6B6B",
  darker: "#2D4545",
  border: {
    light: "#9DBDBD",
    dark: "#2D4545",
  },
} as const;

// Beige gradients
export const BEIGE = {
  light: "#F5EDE0",
  mid: PALETTE.softBeige,
  dark: "#A89870",
} as const;

// Gold gradients
export const GOLD = {
  light: "#E8C84A",
  mid: PALETTE.mutedGold,
  dark: "#A8841F",
  border: {
    light: "#F0D860",
    dark: "#806A15",
  },
} as const;

// Hardware chrome
export const HARDWARE = {
  ledGreen: "#4AE04A",
} as const;

// Text color mapping for Ink #color: tags
export const TEXT_COLORS: Record<string, string> = {
  teal: PALETTE.institutionalTeal,
  peach: PALETTE.clydePeach,
  gold: PALETTE.mutedGold,
  brown: PALETTE.warmBrown,
  navy: PALETTE.deepNavy,
};
