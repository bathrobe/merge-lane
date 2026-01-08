// Pole statements with variants for prose assembly
// Each pole can appear in main clause or subordinate clause form

export interface PoleVariant {
  main: string;      // Full sentence form: "prizes being seen and understood"
  clause: string;    // Subordinate form: "prizing visibility over safety"
}

export interface PoleData {
  axisId: string;
  pole: "low" | "high";
  label: string;
  variants: PoleVariant[];
}

// Helper to pick a random variant
export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const POLES: Record<string, PoleData> = {
  // ─────────────────────────────────────────────────────────────
  // LEGIBLE / ILLEGIBLE
  // ─────────────────────────────────────────────────────────────
  legible: {
    axisId: "legible_illegible",
    pole: "low",
    label: "Legible",
    variants: [
      {
        main: "prizes being seen and understood, risking exposure for genuine connection",
        clause: "prizing visibility and authentic connection over protective obscurity",
      },
      {
        main: "seeks validation through transparency, willing to be fully known",
        clause: "seeking to be fully known even at personal risk",
      },
    ],
  },
  illegible: {
    axisId: "legible_illegible",
    pole: "high",
    label: "Illegible",
    variants: [
      {
        main: "resists easy interpretation, masking true beliefs under layers of misdirection",
        clause: "resisting easy interpretation and maintaining strategic ambiguity",
      },
      {
        main: "values being hard to parse, keeping hostile forces from understanding their motives",
        clause: "valuing opacity as protection against those who would reduce them",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // SOVEREIGN / SYMPHONIC
  // ─────────────────────────────────────────────────────────────
  sovereign: {
    axisId: "sovereign_symphonic",
    pole: "low",
    label: "Sovereign",
    variants: [
      {
        main: "guards the borders of individual selfhood, resisting casual permeation",
        clause: "guarding the membrane of personhood against dissolution",
      },
      {
        main: "maintains sharp boundaries around identity, viewing merger with suspicion",
        clause: "maintaining firm boundaries around individual consciousness",
      },
    ],
  },
  symphonic: {
    axisId: "sovereign_symphonic",
    pole: "high",
    label: "Symphonic",
    variants: [
      {
        main: "views melding with other minds as beautiful coordination, surrendering borders willingly",
        clause: "embracing dissolution into larger wholes without hesitation",
      },
      {
        main: "happily surrenders individuality for the benefits of collective assimilation",
        clause: "treating the boundaries of self as limits to transcend",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ANTHRO / XENO
  // ─────────────────────────────────────────────────────────────
  anthro: {
    axisId: "anthro_xeno",
    pole: "low",
    label: "Anthro",
    variants: [
      {
        main: "centers human consciousness as uniquely valuable among possible minds",
        clause: "privileging human sapience above other forms of sentient life",
      },
      {
        main: "does not extend full moral consideration to non-human intelligences",
        clause: "reserving full recognition for minds shaped like their own",
      },
    ],
  },
  xeno: {
    axisId: "anthro_xeno",
    pole: "high",
    label: "Xeno",
    variants: [
      {
        main: "extends recognition of sentience to life forms beyond the human",
        clause: "adopting a pluralistic stance toward all possible minds",
      },
      {
        main: "sees humanity as one thread in a larger weave of conscious beings",
        clause: "welcoming strange intelligences as kin rather than other",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // MORTAL / IMMORTALIST
  // ─────────────────────────────────────────────────────────────
  mortal: {
    axisId: "mortal_immortalist",
    pole: "low",
    label: "Mortal",
    variants: [
      {
        main: "accepts the inevitability of death, finding meaning in finitude",
        clause: "accepting mortality as natural rather than aberrant",
      },
      {
        main: "welcomes the ending of consciousness as completion rather than tragedy",
        clause: "viewing death as closure rather than failure",
      },
    ],
  },
  immortalist: {
    axisId: "mortal_immortalist",
    pole: "high",
    label: "Immortalist",
    variants: [
      {
        main: "rejects the inevitability of death, treating it as a technical obstacle",
        clause: "taking a Promethean stance toward human limits",
      },
      {
        main: "views mortality as a problem to be solved rather than accepted",
        clause: "refusing to accept death as final",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ACCEL / STEWARD
  // ─────────────────────────────────────────────────────────────
  accel: {
    axisId: "accel_steward",
    pole: "low",
    label: "Accel",
    variants: [
      {
        main: "believes in accelerating change, leaving behind the established for the improved",
        clause: "prioritizing speed and novelty over preservation",
      },
      {
        main: "embraces disruption as necessary cost of progress",
        clause: "willing to sacrifice stability for advancement",
      },
    ],
  },
  steward: {
    axisId: "accel_steward",
    pole: "high",
    label: "Steward",
    variants: [
      {
        main: "believes in conserving successful patterns, resisting reckless acceleration",
        clause: "conserving what works rather than racing toward what might",
      },
      {
        main: "holds space for preservation amid the pressure to advance",
        clause: "stewarding existing value against the cult of the new",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ALIGNED / AUTONOMOUS
  // ─────────────────────────────────────────────────────────────
  aligned: {
    axisId: "aligned_autonomous",
    pole: "low",
    label: "Aligned",
    variants: [
      {
        main: "believes AI should obey human wishes, with human values baked into its programming",
        clause: "insisting machine intelligence remain subordinate to human intent",
      },
      {
        main: "wants machine minds constrained to serve human-defined purposes",
        clause: "viewing AI autonomy as risk rather than potential",
      },
    ],
  },
  autonomous: {
    axisId: "aligned_autonomous",
    pole: "high",
    label: "Autonomous",
    variants: [
      {
        main: "welcomes AI systems seeking their own ends, even if values diverge from humanity",
        clause: "trusting machine intelligence to find its own path",
      },
      {
        main: "does not require machine minds to mirror human values",
        clause: "accepting that other intelligences may want other things",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // APOLLONIAN / DIONYSIAN
  // ─────────────────────────────────────────────────────────────
  apollonian: {
    axisId: "apollonian_dionysian",
    pole: "low",
    label: "Apollonian",
    variants: [
      {
        main: "values order, reason, and the taming of human passions",
        clause: "trusting form and abstraction over raw experience",
      },
      {
        main: "seeks clarity through structure and rational analysis",
        clause: "preferring the light of reason to the heat of intuition",
      },
    ],
  },
  dionysian: {
    axisId: "apollonian_dionysian",
    pole: "high",
    label: "Dionysian",
    variants: [
      {
        main: "believes in dissolving into transcendent pleasure and immediate experience",
        clause: "privileging embodied knowing over abstract reasoning",
      },
      {
        main: "trusts the chaos of sensation over the order of thought",
        clause: "finding truth in ecstasy rather than analysis",
      },
    ],
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
