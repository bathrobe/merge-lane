/**
 * ChoiceButton - Story choice selection button
 * Left-aligned with arrow prefix, slides on hover
 */

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { PALETTE } from "../../../styles/palette";
import { BEIGE } from "../../../styles/theme";

interface ChoiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ChoiceButton({ children, className = "", ...props }: ChoiceButtonProps) {
  return (
    <button
      className={`
        font-nunito font-semibold px-3 py-2 rounded-lg
        text-left text-sm w-full cursor-pointer
        transition-all duration-100
        hover:translate-x-1 hover:brightness-105
        active:translate-x-0.5 active:brightness-95
        focus:outline-none focus:ring-2 focus:ring-[#5B8A8A] focus:ring-offset-1
        ${className}
      `}
      style={{
        background: `linear-gradient(180deg, ${BEIGE.light} 0%, ${BEIGE.mid} 100%)`,
        color: PALETTE.deepNavy,
        border: "3px solid",
        borderColor: `${BEIGE.light} ${BEIGE.dark} ${BEIGE.dark} ${BEIGE.light}`,
        boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.15)",
      }}
      {...props}
    >
      <span className="mr-2">&#9656;</span>
      {children}
    </button>
  );
}
