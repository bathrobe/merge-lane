// Static axis definitions for tooltips
// These don't change based on player score

export interface AxisDefinition {
  id: string;
  name: string;
  lowPole: string;
  highPole: string;
  description: string;
}

export const AXIS_DEFINITIONS: Record<string, AxisDefinition> = {
  legible_illegible: {
    id: "legible_illegible",
    name: "Legible / Illegible",
    lowPole: "Legible",
    highPole: "Illegible",
    description: "How visible are you? Do you want to be seen and understood, or do you resist easy interpretation?",
  },
  sovereign_symphonic: {
    id: "sovereign_symphonic",
    name: "Sovereign / Symphonic",
    lowPole: "Sovereign",
    highPole: "Symphonic",
    description: "Do you maintain sharp individual boundaries, or embrace dissolution into larger wholes?",
  },
  anthro_xeno: {
    id: "anthro_xeno",
    name: "Anthro / Xeno",
    lowPole: "Anthro",
    highPole: "Xeno",
    description: "Are humans special? Do you center human perspective, or see humanity as one thread in a larger weave?",
  },
  mortal_immortalist: {
    id: "mortal_immortalist",
    name: "Mortal / Immortalist",
    lowPole: "Mortal",
    highPole: "Immortalist",
    description: "Do you see mortality as natural, or as a problem to be solved?",
  },
  accel_steward: {
    id: "accel_steward",
    name: "Accel / Steward",
    lowPole: "Accel",
    highPole: "Steward",
    description: "Do you prioritize progress and speed, or preservation and care?",
  },
  aligned_autonomous: {
    id: "aligned_autonomous",
    name: "Aligned / Autonomous",
    lowPole: "Aligned",
    highPole: "Autonomous",
    description: "Should machine intelligence be constrained to human values, or free to find its own path?",
  },
  apollonian_dionysian: {
    id: "apollonian_dionysian",
    name: "Apollonian / Dionysian",
    lowPole: "Apollonian",
    highPole: "Dionysian",
    description: "Do you trust reason and structure, or intuition and embodied knowing?",
  },
};
