/**
 * SecondaryButton - Beige beveled button for secondary actions
 * "Resume Session", less prominent CTAs
 */

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { PALETTE } from "../../../styles/palette";
import { BEIGE } from "../../../styles/theme";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function SecondaryButton({ children, className = "", ...props }: SecondaryButtonProps) {
  return (
    <button
      className={`
        font-nunito font-bold px-6 py-3 rounded-lg
        transition-all duration-100
        hover:brightness-105 hover:-translate-y-0.5
        active:translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4C5A9]
        ${className}
      `}
      style={{
        background: `linear-gradient(180deg, #E8D9C0 0%, ${BEIGE.mid} 100%)`,
        color: PALETTE.deepNavy,
        border: "3px solid",
        borderColor: `${BEIGE.light} ${BEIGE.dark} ${BEIGE.dark} ${BEIGE.light}`,
        boxShadow: `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          4px 4px 0 rgba(0,0,0,0.25)
        `,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
