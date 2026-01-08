import { useState } from "react";
import { AssessmentProse } from "../components/AssessmentProse";
import { PALETTE } from "../styles/palette";

// Demo page to test the assessment prose generation
export function AssessmentDemo() {
  // Sample scores - adjust these to test different outputs
  const [scores, setScores] = useState({
    legible_illegible: 12,
    sovereign_symphonic: 4,
    anthro_xeno: 10,
    mortal_immortalist: 11,
    accel_steward: 6,
    aligned_autonomous: 9,
    apollonian_dionysian: 13,
  });

  // Regenerate with same scores (picks new random variants/template)
  const [key, setKey] = useState(0);
  const regenerate = () => setKey((k) => k + 1);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a1a2e",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          color: PALETTE.cream,
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "1.5rem",
        }}
      >
        Assessment Prose Demo
      </h1>

      {/* Score sliders */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        {Object.entries(scores).map(([axis, value]) => (
          <div key={axis} style={{ color: PALETTE.cream }}>
            <label
              style={{
                display: "block",
                fontSize: "11px",
                marginBottom: "4px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {axis.replace("_", " / ")}
            </label>
            <input
              type="range"
              min={0}
              max={15}
              value={value}
              onChange={(e) =>
                setScores((s) => ({ ...s, [axis]: parseInt(e.target.value) }))
              }
              style={{ width: "100%" }}
            />
            <span style={{ fontSize: "12px" }}>{value}/15</span>
          </div>
        ))}
      </div>

      {/* Regenerate button */}
      <button
        onClick={regenerate}
        style={{
          padding: "8px 16px",
          backgroundColor: PALETTE.institutionalTeal,
          color: PALETTE.cream,
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600,
        }}
      >
        Regenerate (same scores, new variants)
      </button>

      {/* The assessment prose */}
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: PALETTE.cream,
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: PALETTE.institutionalTeal,
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          Subject Assessment
        </div>

        <AssessmentProse key={key} scores={scores} />
      </div>
    </div>
  );
}

export default AssessmentDemo;
