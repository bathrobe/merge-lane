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
            src="/inbox/masthead-riff-1-short.jpg"
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
              src="/inbox/masthead-riff-2.jpg"
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

          {/* Oracle Section - THE VERDICT */}
          <SectionHeader>Your Archetype</SectionHeader>

          {/* Copyable Oracle Card - constellation left, text right */}
          <DossierCard>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {/* Constellation */}
              <Constellation scores={scores} size={120} />
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
            {/* Seed phrase at bottom of copyable card */}
            <div
              style={{
                marginTop: "12px",
                paddingTop: "10px",
                borderTop: `1px solid ${PALETTE.softBeige}`,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "11px",
                color: PALETTE.warmBrown,
                opacity: 0.7,
                textAlign: "center",
                letterSpacing: "0.5px",
              }}
            >
              crystal-harbor-dusk-47
            </div>
          </DossierCard>
          <div style={{ marginTop: "12px" }}>
            <CopyButton>Copy Image</CopyButton>
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
              crystal-harbor-dusk-47
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

// Axis labels for the constellation (short versions)
const AXIS_LABELS = [
  { key: "sovereign_symphonic", label: "SYM", fullLabel: "Symphonic" },
  { key: "legible_illegible", label: "ILL", fullLabel: "Illegible" },
  { key: "mortal_immortalist", label: "IMM", fullLabel: "Immortal" },
  { key: "apollonian_dionysian", label: "DIO", fullLabel: "Dionysian" },
  { key: "accel_steward", label: "STW", fullLabel: "Steward" },
  { key: "aligned_autonomous", label: "AUT", fullLabel: "Autonomous" },
  { key: "anthro_xeno", label: "XEN", fullLabel: "Xeno" },
];

interface ConstellationProps {
  scores: Record<string, number>;
  size?: number;
}

function Constellation({ scores, size = 120 }: ConstellationProps) {
  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = size * 0.38; // Leave room for labels
  const minRadius = size * 0.08;
  const numAxes = AXIS_LABELS.length;

  // Calculate point position for a given axis index and value (0-16 scale)
  const getPoint = (index: number, value: number) => {
    const angle = (index * 2 * Math.PI) / numAxes - Math.PI / 2; // Start at top
    const normalizedValue = Math.max(0, Math.min(16, value)) / 16; // Clamp to 0-1
    const radius = minRadius + normalizedValue * (maxRadius - minRadius);
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  };

  // Generate the player's shape points
  const shapePoints = AXIS_LABELS.map((axis, i) => {
    const value = scores[axis.key] ?? 8;
    return getPoint(i, value);
  });

  const shapePath = shapePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  // Generate outer boundary points (max values)
  const outerPoints = AXIS_LABELS.map((_, i) => getPoint(i, 16));

  // Generate grid circles
  const gridRadii = [0.25, 0.5, 0.75, 1].map((r) => minRadius + r * (maxRadius - minRadius));

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        flexShrink: 0,
        background: PALETTE.cream,
        borderRadius: "8px",
        border: `2px solid ${PALETTE.institutionalTeal}`,
      }}
    >
      {/* Grid circles */}
      {gridRadii.map((r, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={PALETTE.softBeige}
          strokeWidth="1"
          opacity={0.6}
        />
      ))}

      {/* Axis lines */}
      {outerPoints.map((p, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke={PALETTE.softBeige}
          strokeWidth="1"
          opacity={0.6}
        />
      ))}

      {/* Player's shape - filled */}
      <path
        d={shapePath}
        fill={`${PALETTE.institutionalTeal}40`}
        stroke={PALETTE.institutionalTeal}
        strokeWidth="2"
      />

      {/* Points at each vertex */}
      {shapePoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={3}
          fill={PALETTE.institutionalTeal}
        />
      ))}

      {/* Axis labels */}
      {AXIS_LABELS.map((axis, i) => {
        const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
        const labelRadius = maxRadius + 12;
        const x = cx + labelRadius * Math.cos(angle);
        const y = cy + labelRadius * Math.sin(angle);
        return (
          <text
            key={axis.key}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Nunito, sans-serif"
            fontSize="7"
            fontWeight="600"
            fill={PALETTE.warmBrown}
            letterSpacing="0.5"
          >
            {axis.label}
          </text>
        );
      })}
    </svg>
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
