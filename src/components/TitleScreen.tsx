/**
 * TitleScreen - Device startup screen with New/Resume session options
 * Uses TitleLayout with hardware bars for late-90s educational software aesthetic
 */

import { TitleLayout } from "../layouts/TitleLayout";
import { PrimaryButton, SecondaryButton } from "./ui";
import { PALETTE } from "../styles/palette";

interface TitleScreenProps {
  onNewGame: () => void;
  onContinue: () => void;
  hasSave: boolean;
}

function StatusLED({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <div
        className="w-2 h-2 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 4px ${color}`,
        }}
      />
      <span className="font-mono text-[8px]" style={{ color: "#9DBDBD" }}>
        {label}
      </span>
    </div>
  );
}

function TopHardwareContent() {
  return (
    <div className="flex items-center justify-between w-full px-2">
      {/* Status LEDs */}
      <div className="flex items-center gap-3">
        <StatusLED color="#4AE04A" label="PWR" />
        <StatusLED color={PALETTE.mutedGold} label="SYS" />
      </div>

      {/* Model emboss */}
      <div
        className="font-mono text-[10px] tracking-widest"
        style={{
          color: "#7BA3A3",
          textShadow:
            "1px 1px 0 rgba(0,0,0,0.4), -1px -1px 0 rgba(255,255,255,0.1)",
        }}
      >
        SCHOLASTIC-1 LEARNING SYSTEM
      </div>

      {/* Spacer for balance */}
      <div className="w-16" />
    </div>
  );
}

function BottomHardwareContent() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="font-mono text-[9px]" style={{ color: "#6D9A9A" }}>
        © 2026 THE READING ROOM
      </span>
      <span style={{ color: "#4D7A7A" }}>•</span>
      <span className="font-mono text-[9px]" style={{ color: "#6D9A9A" }}>
        v1.0.0
      </span>
    </div>
  );
}

function TitleScreen({ onNewGame, onContinue, hasSave }: TitleScreenProps) {
  return (
    <TitleLayout
      topHardwareBar={<TopHardwareContent />}
      bottomHardwareBar={<BottomHardwareContent />}
    >
      <div className="text-center">
        {/* Title */}
        <h1
          className="font-baskerville text-4xl mb-2"
          style={{ color: PALETTE.deepNavy }}
        >
          Utopian Scholastic
        </h1>
        <p
          className="font-mono text-xs tracking-widest uppercase mb-8"
          style={{ color: PALETTE.warmBrown }}
        >
          Interactive Assessment Program
        </p>

        {/* Main buttons */}
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <PrimaryButton onClick={onNewGame} className="text-lg">
            ▶ New Session
          </PrimaryButton>

          {hasSave && (
            <SecondaryButton onClick={onContinue} className="text-lg">
              Resume Session
            </SecondaryButton>
          )}
        </div>
      </div>
    </TitleLayout>
  );
}

export default TitleScreen;
