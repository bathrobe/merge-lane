/**
 * MuteButton - Hardware-styled audio toggle
 * Peach accent when unmuted, gray when muted
 */

import { PALETTE } from "../../styles/palette";
import { TEAL } from "../../styles/theme";

interface MuteButtonProps {
  isMuted: boolean;
  onToggle: () => void;
}

export function MuteButton({ isMuted, onToggle }: MuteButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-center w-8 h-8 rounded transition-all duration-100"
      style={{
        background: isMuted
          ? `linear-gradient(180deg, #6A6A6A 0%, #4A4A4A 100%)`
          : `linear-gradient(180deg, ${PALETTE.clydePeach} 0%, #D08A6A 100%)`,
        border: "2px solid",
        borderColor: isMuted
          ? "#5A5A5A #3A3A3A #3A3A3A #5A5A5A"
          : `#F0C0A0 #A06040 #A06040 #F0C0A0`,
        boxShadow: isMuted
          ? "inset 1px 1px 2px rgba(255,255,255,0.1), 2px 2px 0 rgba(0,0,0,0.2)"
          : "inset 1px 1px 2px rgba(255,255,255,0.3), 2px 2px 0 rgba(0,0,0,0.2)",
      }}
      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
    >
      {isMuted ? (
        // Muted speaker icon
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={TEAL.border.light}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        // Speaker icon with waves
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={PALETTE.deepNavy}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}
