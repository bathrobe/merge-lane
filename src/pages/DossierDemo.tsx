import { useState } from "react";
import { AssessmentProse } from "../components/AssessmentProse";
import { PALETTE } from "../styles/palette";

// Dossier prototype page - matches the HTML mockup but in React
export function DossierDemo() {
  const [scores] = useState({
    legible_illegible: 12,
    sovereign_symphonic: 4,
    anthro_xeno: 10,
    mortal_immortalist: 11,
    accel_steward: 6,
    aligned_autonomous: 9,
    apollonian_dionysian: 13,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
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

        {/* Hardware Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 12px",
            marginBottom: "12px",
            background: "linear-gradient(180deg, #4D7A7A 0%, #3D6B6B 100%)",
            borderRadius: "6px",
            border: "2px solid",
            borderColor: "#5D8A8A #2D5555 #2D5555 #5D8A8A",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#9DBDBD",
              textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
              background: "linear-gradient(180deg, #3D6B6B 0%, #2D5555 100%)",
              padding: "4px 10px",
              borderRadius: "3px",
              border: "1px solid #2D5555",
              boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Subject Dossier
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "8px",
                color: "#9DBDBD",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Confidential
            </span>
          </div>
        </div>

        {/* Cream Viewport */}
        <div
          style={{
            background: PALETTE.cream,
            border: "4px solid",
            borderColor: "#2D4545 #9DBDBD #9DBDBD #2D4545",
            boxShadow: "inset 3px 3px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          {/* Masthead - Document style */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: PALETTE.warmBrown,
                marginBottom: "6px",
              }}
            >
              Institute for Futurological Studies
            </div>
            <h1
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: PALETTE.deepNavy,
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              Subject Dossier
            </h1>
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

          {/* Subject Assessment - THE REVEAL */}
          <SectionHeader>Psychological Profile</SectionHeader>
          <div style={{ marginBottom: "28px" }}>
            <AssessmentProse scores={scores} />
          </div>

          {/* Oracle Section - THE VERDICT */}
          <SectionHeader>Your Archetype</SectionHeader>

          {/* Copyable Oracle Card - image left, text right */}
          <DossierCard>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {/* Oracle Image */}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  background: `linear-gradient(135deg, #3D6B6B 0%, ${PALETTE.institutionalTeal} 100%)`,
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: PALETTE.cream,
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "11px",
                  border: "2px solid #2D4545",
                }}
              >
                <span style={{ opacity: 0.7 }}>ORACLE</span>
                <span style={{ opacity: 0.7 }}>IMAGE</span>
              </div>
              {/* Title + Description */}
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: PALETTE.deepNavy,
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  The Weaver of Dissonance
                </h2>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontStyle: "italic",
                    color: PALETTE.warmBrown,
                    lineHeight: 1.4,
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  A shimmer at the edge of systems, dissolving boundaries from within.
                  You hold contradictions without resolving them.
                </p>
              </div>
            </div>
            <div style={{ marginTop: "14px" }}>
              <CopyButton>Copy Image</CopyButton>
            </div>
          </DossierCard>

          {/* Seed Section */}
          <SectionHeader>Your Seed Phrase</SectionHeader>
          <DossierCard>
            <div
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "1.5rem",
                color: PALETTE.deepNavy,
                fontWeight: "bold",
                marginBottom: "10px",
                letterSpacing: "1px",
                background: "white",
                padding: "12px 16px",
                borderRadius: "6px",
                border: `1px solid ${PALETTE.softBeige}`,
              }}
            >
              crystal-harbor-dusk-47
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                color: PALETTE.warmBrown,
                lineHeight: 1.4,
                margin: 0,
                marginBottom: "14px",
              }}
            >
              Save this phrase to load your personality profile in future examinations.
            </p>
            <CopyButton>Save Seed Phrase</CopyButton>
          </DossierCard>

          {/* Substack Section */}
          <SectionHeader>Continue Your Calibration</SectionHeader>
          <DossierCard>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                color: PALETTE.warmBrown,
                lineHeight: 1.4,
                margin: 0,
                marginBottom: "12px",
              }}
            >
              The Institute maintains ongoing research communiqués. Register your frequency for future transmissions.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  border: `1px solid ${PALETTE.softBeige}`,
                  borderRadius: "6px",
                  background: "white",
                  color: PALETTE.deepNavy,
                }}
              />
              <CopyButton>Subscribe</CopyButton>
            </div>
          </DossierCard>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "2px",
        background: `linear-gradient(90deg, transparent 0%, ${PALETTE.softBeige} 20%, ${PALETTE.warmBrown} 50%, ${PALETTE.softBeige} 80%, transparent 100%)`,
        margin: "20px 0",
      }}
    />
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

function CopyButton({ children }: { children: React.ReactNode }) {
  return (
    <button
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
