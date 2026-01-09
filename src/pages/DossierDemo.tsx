import { useState, useRef } from "react";
import { AssessmentProse } from "../components/AssessmentProse";
import { PALETTE } from "../styles/palette";
import { encode as encodeSeedPhrase, type AxisValues } from "../lib/seedPhrase";
import { getComboProfile } from "../lib/comboSentences";
import { scoresToBinaryKey, getArchetypeImagePath } from "../data/epigrams";
import { copyElementAsImage } from "../lib/copyCard";

// Generate random scores (0-15 for each axis, matching Ink story range)
function randomScores(): AxisValues {
  return {
    legible_illegible: Math.floor(Math.random() * 16),
    sovereign_symphonic: Math.floor(Math.random() * 16),
    anthro_xeno: Math.floor(Math.random() * 16),
    mortal_immortalist: Math.floor(Math.random() * 16),
    accel_steward: Math.floor(Math.random() * 16),
    aligned_autonomous: Math.floor(Math.random() * 16),
    apollonian_dionysian: Math.floor(Math.random() * 16),
  };
}

interface DossierDemoProps {
  /** Axis values from the story. If not provided, uses random values (demo mode). */
  values?: AxisValues;
  /** Callback when user wants to return to menu. If not provided, hides reset button. */
  onReset?: () => void;
}

// Dossier prototype page - matches the HTML mockup but in React
export function DossierDemo({ values, onReset }: DossierDemoProps) {
  // Demo mode: allow rerolling. Production mode: use passed values.
  const isDemoMode = values === undefined;
  const [demoScores, setDemoScores] = useState<AxisValues>(randomScores);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const cardRef = useRef<HTMLDivElement>(null);

  // Use passed values if available, otherwise use demo scores
  const scores = values ?? demoScores;

  const handleReroll = () => {
    setDemoScores(randomScores());
  };

  const handleCopyImage = async () => {
    if (!cardRef.current) return;
    setCopyStatus("copying");
    const success = await copyElementAsImage(cardRef.current);
    setCopyStatus(success ? "copied" : "error");
    if (success) {
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  const copyButtonLabel = {
    idle: "Copy Image",
    copying: "Copying...",
    copied: "Copied!",
    error: "Failed",
  }[copyStatus];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/backgrounds/title_clouds.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Device Frame */}
      <div
        style={{
          background: "linear-gradient(180deg, #7BA3A3 0%, #5B8A8A 50%, #3D6B6B 100%)",
          padding: "20px",
          border: "5px solid",
          borderColor: "#9DBDBD #2D4545 #2D4545 #9DBDBD",
          borderRadius: "12px",
          boxShadow: `
            inset 0 3px 6px rgba(255,255,255,0.2),
            inset 0 -3px 6px rgba(0,0,0,0.3),
            12px 12px 0 rgba(0,0,0,0.35)
          `,
          maxWidth: "700px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Corner Rivets */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
          <div
            key={pos}
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)",
              boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)",
              zIndex: 2,
              ...(pos.includes("top") ? { top: "10px" } : { bottom: "10px" }),
              ...(pos.includes("left") ? { left: "10px" } : { right: "10px" }),
            }}
          />
        ))}

        {/* Cream Viewport */}
        <div
          style={{
            background: PALETTE.cream,
            border: "4px solid",
            borderColor: "#2D4545 #9DBDBD #9DBDBD #2D4545",
            boxShadow: "inset 3px 3px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "24px",
            margin: "8px",
          }}
        >
          {/* Banner */}
          <img
            src="/backgrounds/masthead-riff-1-short.jpg"
            alt="Institute Banner"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "6px",
              marginBottom: "20px",
              border: `2px solid ${PALETTE.institutionalTeal}`,
            }}
          />

          {/* Masthead - Seal left, text right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "28px",
              paddingLeft: "8px",
            }}
          >
            {/* Institute Seal */}
            <img
              src="/backgrounds/seal_pinwheel_flat.jpg"
              alt="Institute Seal"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                border: `3px solid ${PALETTE.institutionalTeal}`,
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                flexShrink: 0,
              }}
            />
            {/* Text content */}
            <div style={{ flex: 1, paddingLeft: "12px" }}>
              <h1
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: PALETTE.deepNavy,
                  marginBottom: "4px",
                  lineHeight: 1.2,
                }}
              >
                Psychological Profile
              </h1>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                  color: PALETTE.warmBrown,
                  marginBottom: "10px",
                }}
              >
                On the Merge and Machine Relations
              </p>
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: PALETTE.cream,
                  background: PALETTE.institutionalTeal,
                  padding: "4px 12px",
                  borderRadius: "3px",
                  letterSpacing: "1px",
                }}
              >
                CLASSIFICATION: CONFIDENTIAL
              </div>
            </div>
          </div>

          {/* Subject Assessment - THE REVEAL */}
          <div style={{ marginBottom: "28px" }}>
            <AssessmentProse scores={scores} />
          </div>

          {/* Profile Card - title + image + sentence */}
          <div ref={cardRef}>
          <DossierCard>
            <div style={{ display: "flex", gap: "20px", marginBottom: "16px" }}>
              {/* Archetype Image */}
              <img
                src={getArchetypeImagePath(scoresToBinaryKey(scores))}
                alt="Your archetype"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "8px",
                  border: `2px solid ${PALETTE.institutionalTeal}`,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              {/* Title + sentence */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: PALETTE.institutionalTeal,
                    marginBottom: "4px",
                  }}
                >
                  Your Archetype
                </div>
                <h2
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: PALETTE.deepNavy,
                    margin: 0,
                    marginBottom: "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {getComboProfile(scores).title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontStyle: "italic",
                    fontSize: "17px",
                    color: PALETTE.warmBrown,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {getComboProfile(scores).sentence}
                </p>
              </div>
            </div>

            {/* Decorative flourish */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                margin: "16px 0",
              }}
            >
              <span style={{ flex: 1, height: "1px", background: PALETTE.softBeige }} />
              <span
                style={{
                  color: PALETTE.institutionalTeal,
                  fontSize: "14px",
                  opacity: 0.6,
                }}
              >
                ✦
              </span>
              <span style={{ flex: 1, height: "1px", background: PALETTE.softBeige }} />
            </div>

            {/* Axis readout */}
            <div
              style={{
                paddingBottom: "14px",
                borderBottom: `1px solid ${PALETTE.softBeige}`,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "6px 14px",
                fontSize: "10px",
                fontFamily: "'Nunito', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              <PoleReadout scores={scores} />
            </div>

            {/* Seed phrase */}
            <div style={{ marginTop: "14px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: "13px",
                  color: PALETTE.deepNavy,
                  letterSpacing: "2px",
                }}
              >
                {encodeSeedPhrase(scores).split(" ").join("-")}
              </div>
            </div>

            {/* URL watermark */}
            <div
              style={{
                marginTop: "12px",
                textAlign: "center",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "11px",
                color: PALETTE.softBeige,
                letterSpacing: "1px",
              }}
            >
              merge.winedark.ink
            </div>
          </DossierCard>
          </div>
          <div style={{ marginTop: "12px", display: "flex", gap: "12px" }}>
            <CopyButton onClick={handleCopyImage}>{copyButtonLabel}</CopyButton>
            {isDemoMode && <CopyButton onClick={handleReroll}>Reroll</CopyButton>}
            {onReset && <CopyButton onClick={onReset}>Return to Menu</CopyButton>}
          </div>

          {/* Seed Section */}
          <SectionHeader>Your Seed Phrase</SectionHeader>
          <DossierCard>
            <div
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "1.4rem",
                color: PALETTE.deepNavy,
                fontWeight: "bold",
                marginBottom: "16px",
                letterSpacing: "2px",
                textAlign: "center",
                padding: "20px 16px",
                borderBottom: `1px solid ${PALETTE.softBeige}`,
              }}
            >
              {encodeSeedPhrase(scores).split(" ").join("-")}
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                color: PALETTE.warmBrown,
                lineHeight: 1.5,
                margin: 0,
                textAlign: "center",
                padding: "4px 12px",
              }}
            >
              This seed phrase contains all you need to load this personality profile into future simulations. Be sure to save it somewhere safe.
            </p>
          </DossierCard>

          {/* Substack Embed Section */}
          <div style={{ marginTop: "28px" }}>
            <SectionHeader>Subscribe to Updates</SectionHeader>
            <DossierCard>
              <iframe
                src="https://winedark.ink/embed"
                width="100%"
                height="150"
                style={{
                  border: "none",
                  background: "transparent",
                }}
                frameBorder={0}
              />
            </DossierCard>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: "10px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: PALETTE.institutionalTeal,
        marginBottom: "10px",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          height: "1px",
          flex: 1,
          background: PALETTE.softBeige,
        }}
      />
      {children}
      <span
        style={{
          height: "1px",
          flex: 1,
          background: PALETTE.softBeige,
        }}
      />
    </div>
  );
}

function DossierCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "18px 20px",
        background: "linear-gradient(180deg, rgba(91, 138, 138, 0.06) 0%, rgba(91, 138, 138, 0.12) 100%)",
        borderRadius: "10px",
        border: `2px solid ${PALETTE.institutionalTeal}`,
      }}
    >
      {children}
    </div>
  );
}

// Axis definitions: key maps to [lowPole, highPole] names
// Score 0 = fully lowPole, score 16 = fully highPole
const AXIS_POLES: Record<string, [string, string]> = {
  legible_illegible: ["Legible", "Illegible"],
  sovereign_symphonic: ["Sovereign", "Symphonic"],
  anthro_xeno: ["Anthro", "Xeno"],
  mortal_immortalist: ["Mortal", "Immortal"],
  accel_steward: ["Accel", "Steward"],
  aligned_autonomous: ["Aligned", "Autonomous"],
  apollonian_dionysian: ["Apollonian", "Dionysian"],
};

function PoleReadout({ scores }: { scores: Record<string, number> }) {
  return (
    <>
      {Object.entries(AXIS_POLES).map(([key, [lowPole, highPole]]) => {
        const score = scores[key] ?? 8;
        const poleName = score >= 8 ? highPole : lowPole;

        return (
          <span
            key={key}
            style={{
              color: PALETTE.warmBrown,
              fontWeight: 600,
            }}
          >
            {poleName}
          </span>
        );
      })}
    </>
  );
}

function CopyButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        padding: "10px 24px",
        borderRadius: "8px",
        cursor: "pointer",
        background: "linear-gradient(180deg, #E8D9C0 0%, #D4C5A9 100%)",
        color: PALETTE.deepNavy,
        border: "3px solid",
        borderColor: "#F5EDE0 #A89870 #A89870 #F5EDE0",
        boxShadow: `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          4px 4px 0 rgba(0,0,0,0.25)
        `,
        transition: "all 0.1s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "linear-gradient(180deg, #F0E1C8 0%, #DCD1B5 100%)";
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = `
          inset 2px 2px 0 rgba(255,255,255,0.5),
          inset -2px -2px 0 rgba(0,0,0,0.1),
          5px 5px 0 rgba(0,0,0,0.25)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "linear-gradient(180deg, #E8D9C0 0%, #D4C5A9 100%)";
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

export default DossierDemo;
