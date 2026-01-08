/**
 * EXPERIMENT: Dossier Card V3
 * Quick mockup based on DesignPlayground Variation 3
 * DELETE THIS FILE when done experimenting
 */

const PALETTE = {
  institutionalTeal: "#5B8A8A",
  warmBrown: "#8B7355",
  softBeige: "#D4C5A9",
  mutedGold: "#C9A227",
  deepNavy: "#2C3E50",
  cream: "#F5F0E6",
};

// Mock data — swap these to test different archetypes
const MOCK_DATA = {
  title: "THE ARCHITECT OF ENDINGS",
  assessment: "Builds with full knowledge of impermanence. High clarity, low illusion. Not cold—just unbuffered.",
  seed: "oak-river-ghost",
  // 8 axes: 0-100 where 50 is neutral, <50 = left pole, >50 = right pole
  axes: [
    { left: "sovereign", right: "symphonic", value: 75 },
    { left: "accel", right: "steward", value: 30 },
    { left: "builder", right: "wanderer", value: 85 },
    { left: "elitist", right: "populist", value: 45 },
    { left: "legible", right: "illegible", value: 60 },
    { left: "rational", right: "romantic", value: 35 },
    { left: "native", right: "xeno", value: 70 },
    { left: "mortal", right: "immortal", value: 55 },
  ],
};

export function DossierCardV3() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Teal hardware frame */}
      <div
        className="rounded-2xl overflow-hidden relative max-w-sm"
        style={{
          background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
          padding: "12px",
          border: "4px solid",
          borderColor: "#9DBDBD #2D4545 #2D4545 #9DBDBD",
          boxShadow: `
            inset 0 2px 4px rgba(255,255,255,0.2),
            inset 0 -2px 4px rgba(0,0,0,0.3),
            8px 8px 0 rgba(0,0,0,0.35)
          `,
        }}
      >
        {/* Corner rivets */}
        {[
          { top: 6, left: 6 },
          { top: 6, right: 6 },
          { bottom: 6, left: 6 },
          { bottom: 6, right: 6 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              ...pos,
              background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
              boxShadow: `inset 1px 1px 1px rgba(255,255,255,0.4), 1px 1px 1px rgba(0,0,0,0.3)`,
            }}
          />
        ))}

        {/* Cream document card */}
        <div
          className="rounded-lg p-5"
          style={{
            background: PALETTE.cream,
            border: "3px solid",
            borderColor: "#2D4545 #9DBDBD #9DBDBD #2D4545",
            boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header */}
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-center mb-3"
            style={{ color: PALETTE.warmBrown }}
          >
            Biocomputer Diagnostic
          </p>

          {/* Sigil placeholder */}
          <div
            className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-3"
            style={{
              background: PALETTE.cream,
              border: `2px solid ${PALETTE.institutionalTeal}`,
            }}
          >
            <span style={{ color: PALETTE.institutionalTeal, fontSize: "40px" }}>
              ◇
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-baskerville text-lg text-center leading-tight"
            style={{ color: PALETTE.deepNavy }}
          >
            {MOCK_DATA.title}
          </h2>

          {/* Assessment one-liner */}
          <p
            className="font-baskerville text-sm italic text-center mt-2 leading-snug"
            style={{ color: PALETTE.warmBrown }}
          >
            {MOCK_DATA.assessment}
          </p>

          {/* Axis readout */}
          <div className="mt-4 space-y-1.5">
            {MOCK_DATA.axes.map((axis, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-mono">
                <span
                  className="w-16 text-right"
                  style={{ color: axis.value < 50 ? PALETTE.deepNavy : PALETTE.warmBrown }}
                >
                  {axis.left}
                </span>
                <div
                  className="flex-1 h-1.5 rounded-full relative"
                  style={{ background: "rgba(91,138,138,0.2)" }}
                >
                  {/* Center tick */}
                  <div
                    className="absolute top-0 bottom-0 w-px"
                    style={{ left: "50%", background: "rgba(91,138,138,0.3)" }}
                  />
                  {/* Value indicator */}
                  <div
                    className="absolute top-0 bottom-0 w-2 h-2 rounded-full -mt-[1px]"
                    style={{
                      left: `calc(${axis.value}% - 4px)`,
                      background: PALETTE.institutionalTeal,
                      boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>
                <span
                  className="w-16"
                  style={{ color: axis.value > 50 ? PALETTE.deepNavy : PALETTE.warmBrown }}
                >
                  {axis.right}
                </span>
              </div>
            ))}
          </div>

          {/* Seed phrase */}
          <div
            className="mt-4 py-2 px-3 rounded text-center"
            style={{ background: PALETTE.deepNavy }}
          >
            <p
              className="font-mono text-[10px] uppercase mb-0.5"
              style={{ color: PALETTE.institutionalTeal }}
            >
              Unit Identifier
            </p>
            <p className="font-mono text-sm" style={{ color: PALETTE.mutedGold }}>
              {MOCK_DATA.seed}
            </p>
          </div>
        </div>

        {/* Copy button */}
        <button
          className="w-full mt-2 font-nunito font-bold py-2 rounded-lg text-sm"
          style={{
            background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
            color: PALETTE.deepNavy,
            border: "3px solid",
            borderColor: "#F5EDE0 #A89870 #A89870 #F5EDE0",
            boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.2)",
          }}
        >
          Copy Card
        </button>
      </div>
    </div>
  );
}

export default DossierCardV3;
