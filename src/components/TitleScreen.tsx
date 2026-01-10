/**
 * TitleScreen - Device-style welcome screen
 * Matches the teal frame / cream viewport aesthetic of the dossier
 */

import { Frame, Viewport, HardwareBar } from "./ui";
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
        © 2026 Wine Dark, Inc
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

function BeveledButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        padding: "12px 32px",
        borderRadius: "8px",
        cursor: "pointer",
        background: isPrimary
          ? "linear-gradient(180deg, #D4B896 0%, #B89B6A 100%)"
          : "linear-gradient(180deg, #E8D9C0 0%, #D4C5A9 100%)",
        color: PALETTE.deepNavy,
        border: "3px solid",
        borderColor: isPrimary
          ? "#E8CBA8 #8A7A52 #8A7A52 #E8CBA8"
          : "#F5EDE0 #A89870 #A89870 #F5EDE0",
        boxShadow: `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          4px 4px 0 rgba(0,0,0,0.25)
        `,
        transition: "all 0.1s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          5px 5px 0 rgba(0,0,0,0.25)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          4px 4px 0 rgba(0,0,0,0.25)
        `;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "translateY(2px)";
        e.currentTarget.style.boxShadow = `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          2px 2px 0 rgba(0,0,0,0.25)
        `;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          5px 5px 0 rgba(0,0,0,0.25)
        `;
      }}
    >
      {children}
    </button>
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
            {/* Institute Seal */}
            <img
              src="/backgrounds/seal_pinwheel_flat.jpg"
              alt="Institute Seal"
              className="mx-auto mb-6"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: `3px solid ${PALETTE.institutionalTeal}`,
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
              }}
            />

            {/* Title */}
            <h1
              className="font-baskerville text-3xl mb-8"
              style={{ color: PALETTE.deepNavy }}
            >
              Merge Lane
            </h1>

            {/* Buttons */}
            <div className="flex flex-col gap-3 items-center">
              <BeveledButton onClick={onNewGame} variant="primary">
                ▶ New Session
              </BeveledButton>

              {hasSave && (
                <BeveledButton onClick={onContinue} variant="secondary">
                  Resume Session
                </BeveledButton>
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
