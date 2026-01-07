/**
 * PrimaryButton - Gold beveled button for main actions
 * "New Session", primary CTAs
 */

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { PALETTE } from "../../../styles/palette";
import { GOLD } from "../../../styles/theme";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PrimaryButton({ children, className = "", ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`
        font-nunito font-bold px-6 py-3 rounded-lg
        transition-all duration-100
        hover:brightness-110 hover:-translate-y-0.5
        active:translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227]
        ${className}
      `}
      style={{
        background: `linear-gradient(180deg, ${GOLD.light} 0%, ${GOLD.mid} 50%, ${GOLD.dark} 100%)`,
        color: PALETTE.deepNavy,
        border: "3px solid",
        borderColor: `${GOLD.border.light} ${GOLD.border.dark} ${GOLD.border.dark} ${GOLD.border.light}`,
        boxShadow: `
          inset 2px 2px 0 rgba(255,255,255,0.4),
          inset -2px -2px 0 rgba(0,0,0,0.2),
          4px 4px 0 rgba(0,0,0,0.3)
        `,
        textShadow: "1px 1px 0 rgba(255,255,255,0.3)",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
