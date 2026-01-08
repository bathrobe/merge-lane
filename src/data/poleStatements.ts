// Pole statements for bullet-point assessment
// Each pole has a short readable statement + a 2-4 word highlight phrase

export interface PoleData {
  axisId: string;
  pole: "low" | "high";
  label: string;
  statement: string;      // Full bullet point text
  highlight: string;      // 2-4 word phrase to make hoverable (must be substring of statement)
}

export const POLES: Record<string, PoleData> = {
  // ─────────────────────────────────────────────────────────────
  // LEGIBLE / ILLEGIBLE
  // ─────────────────────────────────────────────────────────────
  legible: {
    axisId: "legible_illegible",
    pole: "low",
    label: "Legible",
    statement: "Wants to be seen and understood, even at personal risk",
    highlight: "seen and understood",
  },
  illegible: {
    axisId: "legible_illegible",
    pole: "high",
    label: "Illegible",
    statement: "Prefers to stay hard to read, keeping true motives hidden",
    highlight: "hard to read",
  },

  // ─────────────────────────────────────────────────────────────
  // SOVEREIGN / SYMPHONIC
  // ─────────────────────────────────────────────────────────────
  sovereign: {
    axisId: "sovereign_symphonic",
    pole: "low",
    label: "Sovereign",
    statement: "Guards individual boundaries and resists merging with others",
    highlight: "individual boundaries",
  },
  symphonic: {
    axisId: "sovereign_symphonic",
    pole: "high",
    label: "Symphonic",
    statement: "Willing to dissolve into something larger than themselves",
    highlight: "dissolve into something",
  },

  // ─────────────────────────────────────────────────────────────
  // ANTHRO / XENO
  // ─────────────────────────────────────────────────────────────
  anthro: {
    axisId: "anthro_xeno",
    pole: "low",
    label: "Anthro",
    statement: "Believes humans deserve special status among minds",
    highlight: "special status",
  },
  xeno: {
    axisId: "anthro_xeno",
    pole: "high",
    label: "Xeno",
    statement: "Sees humanity as one thread among many possible minds",
    highlight: "one thread",
  },

  // ─────────────────────────────────────────────────────────────
  // MORTAL / IMMORTALIST
  // ─────────────────────────────────────────────────────────────
  mortal: {
    axisId: "mortal_immortalist",
    pole: "low",
    label: "Mortal",
    statement: "Accepts death as natural and finds meaning in finitude",
    highlight: "Accepts death",
  },
  immortalist: {
    axisId: "mortal_immortalist",
    pole: "high",
    label: "Immortalist",
    statement: "Views death as a problem to solve, not a fact to accept",
    highlight: "problem to solve",
  },

  // ─────────────────────────────────────────────────────────────
  // ACCEL / STEWARD
  // ─────────────────────────────────────────────────────────────
  accel: {
    axisId: "accel_steward",
    pole: "low",
    label: "Accel",
    statement: "Eager to push forward fast, even if it means breaking things",
    highlight: "push forward",
  },
  steward: {
    axisId: "accel_steward",
    pole: "high",
    label: "Steward",
    statement: "Prefers to protect what works over racing toward the new",
    highlight: "protect what works",
  },

  // ─────────────────────────────────────────────────────────────
  // ALIGNED / AUTONOMOUS
  // ─────────────────────────────────────────────────────────────
  aligned: {
    axisId: "aligned_autonomous",
    pole: "low",
    label: "Aligned",
    statement: "Wants AI kept under human control and serving human goals",
    highlight: "human control",
  },
  autonomous: {
    axisId: "aligned_autonomous",
    pole: "high",
    label: "Autonomous",
    statement: "Comfortable with AI finding its own path, even if it diverges",
    highlight: "its own path",
  },

  // ─────────────────────────────────────────────────────────────
  // APOLLONIAN / DIONYSIAN
  // ─────────────────────────────────────────────────────────────
  apollonian: {
    axisId: "apollonian_dionysian",
    pole: "low",
    label: "Apollonian",
    statement: "Trusts reason and structure over gut instinct",
    highlight: "reason and structure",
  },
  dionysian: {
    axisId: "apollonian_dionysian",
    pole: "high",
    label: "Dionysian",
    statement: "Trusts gut feeling and lived experience over abstraction",
    highlight: "gut feeling",
  },
};

// Map axis ID to pole keys
export const AXIS_TO_POLES: Record<string, { low: string; high: string }> = {
  legible_illegible: { low: "legible", high: "illegible" },
  sovereign_symphonic: { low: "sovereign", high: "symphonic" },
  anthro_xeno: { low: "anthro", high: "xeno" },
  mortal_immortalist: { low: "mortal", high: "immortalist" },
  accel_steward: { low: "accel", high: "steward" },
  aligned_autonomous: { low: "aligned", high: "autonomous" },
  apollonian_dionysian: { low: "apollonian", high: "dionysian" },
};

// Axis order for consistent bullet ordering
export const AXIS_ORDER = [
  "sovereign_symphonic",
  "legible_illegible",
  "anthro_xeno",
  "mortal_immortalist",
  "accel_steward",
  "aligned_autonomous",
  "apollonian_dionysian",
];
