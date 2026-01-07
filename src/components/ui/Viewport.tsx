/**
 * Viewport - Cream inset content area
 * Paper-in-device feel, inverted bevel for inset appearance
 */

import type { ReactNode } from "react";
import { PALETTE } from "../../styles/palette";
import { TEAL } from "../../styles/theme";

interface ViewportProps {
  children: ReactNode;
  className?: string;
}

export function Viewport({ children, className = "" }: ViewportProps) {
  return (
    <div
      className={`rounded-lg ${className}`}
      style={{
        background: PALETTE.cream,
        border: "4px solid",
        // Inverted from frame (dark TL, light BR = inset)
        borderColor: `${TEAL.border.dark} ${TEAL.border.light} ${TEAL.border.light} ${TEAL.border.dark}`,
        boxShadow: "inset 3px 3px 8px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </div>
  );
}
