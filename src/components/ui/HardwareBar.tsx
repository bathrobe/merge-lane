/**
 * HardwareBar - Top strip of sidebar with controls
 * Contains chapter label, title emboss, mute button
 */

import type { ReactNode } from "react";
import { TEAL } from "../../styles/theme";

interface HardwareBarProps {
  leftSlot?: ReactNode;
  centerSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export function HardwareBar({ leftSlot, centerSlot, rightSlot }: HardwareBarProps) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2"
      style={{
        background: `linear-gradient(180deg, #5D8A8A 0%, #4D7A7A 100%)`,
        borderBottom: `2px solid ${TEAL.dark}`,
      }}
    >
      <div className="flex-shrink-0">{leftSlot}</div>
      <div className="flex-1 flex justify-center">{centerSlot}</div>
      <div className="flex-shrink-0">{rightSlot}</div>
    </div>
  );
}

// Embossed label style for chapter labels etc.
export function EmbossedLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-mono text-xs px-2 py-1 rounded"
      style={{
        background: `linear-gradient(180deg, #4D7A7A 0%, ${TEAL.dark} 100%)`,
        color: TEAL.border.light,
        border: "1px solid #2D5555",
        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)",
        textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </span>
  );
}
