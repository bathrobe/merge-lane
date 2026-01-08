/**
 * Frame - Teal plastic wrapper with corner rivets
 * The outer "hardware" shell of the device aesthetic
 */

import type { ReactNode } from "react";
import { TEAL } from "../../styles/theme";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

function CornerRivet({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionStyles = {
    tl: { top: 48, left: 8 },
    tr: { top: 48, right: 8 },
    bl: { bottom: 8, left: 8 },
    br: { bottom: 8, right: 8 },
  };

  return (
    <div
      className="absolute w-3 h-3 rounded-full"
      style={{
        ...positionStyles[position],
        background: `radial-gradient(circle at 30% 30%, ${TEAL.border.light} 0%, ${TEAL.mid} 50%, ${TEAL.dark} 100%)`,
        boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
      }}
    />
  );
}

export function Frame({ children, className = "" }: FrameProps) {
  return (
    <div
      className={`relative p-4 flex flex-col ${className}`}
      style={{
        background: `linear-gradient(180deg, ${TEAL.light} 0%, ${TEAL.mid} 50%, ${TEAL.dark} 100%)`,
        border: "5px solid",
        borderColor: `${TEAL.border.light} ${TEAL.border.dark} ${TEAL.border.dark} ${TEAL.border.light}`,
        boxShadow: `
          inset 0 3px 6px rgba(255,255,255,0.2),
          inset 0 -3px 6px rgba(0,0,0,0.3),
          10px 10px 0 rgba(0,0,0,0.35)
        `,
      }}
    >
      <CornerRivet position="tl" />
      <CornerRivet position="tr" />
      <CornerRivet position="bl" />
      <CornerRivet position="br" />
      {children}
    </div>
  );
}
