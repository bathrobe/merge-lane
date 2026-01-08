/**
 * TitleScreen - Device-style welcome screen
 * Matches the teal frame / cream viewport aesthetic of the dossier
 */

import { Frame, Viewport, HardwareBar } from "./ui";
import { PrimaryButton, SecondaryButton } from "./ui";
import { PALETTE } from "../styles/palette";

interface TitleScreenProps {
  onNewGame: () => void;
  onContinue: () => void;
  hasSave: boolean;
}

function TopHardwareContent() {
  return (
    <div className="flex items-center justify-between w-full px-2">
      {/* Embossed label */}
      <div
        className="font-nunito text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded"
        style={{
          background: "linear-gradient(180deg, #3D6B6B 0%, #2D5555 100%)",
          color: "#9DBDBD",
          border: "1px solid #2D5555",
          boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)",
          textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
        }}
      >
        Assessment Terminal
      </div>

      {/* Status LED */}
      <div className="flex items-center gap-2">
        <span
          className="font-mono text-[8px] uppercase tracking-wider"
          style={{ color: "#9DBDBD" }}
        >
          Ready
        </span>
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: "#4AE04A",
            boxShadow: "0 0 6px #4AE04A, inset 0 -2px 2px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}

function BottomHardwareContent() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="font-mono text-[9px] uppercase tracking-wider"
        style={{ color: "#9DBDBD" }}
      >
        © 2026 Seph News
      </span>
      <span style={{ color: "#4D7A7A" }}>•</span>
      <span
        className="font-mono text-[9px] uppercase tracking-wider"
        style={{ color: "#9DBDBD" }}
      >
        v1.0
      </span>
    </div>
  );
}

function TitleScreen({ onNewGame, onContinue, hasSave }: TitleScreenProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url(/backgrounds/title_clouds.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Frame>
        <HardwareBar centerSlot={<TopHardwareContent />} />

        <Viewport>
          <div className="p-8 text-center">
            {/* Institution header */}
            <p
              className="font-nunito text-[10px] font-bold tracking-widest uppercase mb-2"
              style={{ color: PALETTE.institutionalTeal }}
            >
              Golden Dark Age Research Group
            </p>

            {/* Title */}
            <h1
              className="font-baskerville text-3xl mb-1"
              style={{ color: PALETTE.deepNavy }}
            >
              Utopian Scholastic
            </h1>

            {/* Subtitle */}
            <p
              className="font-nunito text-xs font-semibold tracking-wide uppercase mb-8"
              style={{ color: PALETTE.warmBrown }}
            >
              Interactive Assessment Program
            </p>

            {/* Divider */}
            <div
              className="w-32 h-px mx-auto mb-8"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${PALETTE.softBeige} 20%, ${PALETTE.warmBrown} 50%, ${PALETTE.softBeige} 80%, transparent 100%)`,
              }}
            />

            {/* Buttons */}
            <div className="flex flex-col gap-3 max-w-[200px] mx-auto">
              <PrimaryButton onClick={onNewGame}>
                ▶ New Session
              </PrimaryButton>

              {hasSave && (
                <SecondaryButton onClick={onContinue}>
                  Resume Session
                </SecondaryButton>
              )}
            </div>
          </div>
        </Viewport>

        <HardwareBar centerSlot={<BottomHardwareContent />} />
      </Frame>
    </div>
  );
}

export default TitleScreen;
