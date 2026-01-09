import type { AxisValues } from "./seedPhrase"

// Fragments for each axis pole - plain declarative statements
const FRAGMENTS: Record<keyof AxisValues, { low: string; high: string }> = {
  legible_illegible: {
    low: "you want to be understood",
    high: "you keep things close to the chest",
  },
  sovereign_symphonic: {
    low: "you go your own way",
    high: "you're a team player",
  },
  anthro_xeno: {
    low: "humans come first",
    high: "you're curious about non-human minds",
  },
  mortal_immortalist: {
    low: "you've made peace with mortality",
    high: "you think death is a problem to solve",
  },
  accel_steward: {
    low: "you're eager to see what's next",
    high: "you think we should slow down",
  },
  aligned_autonomous: {
    low: "AI should work for us",
    high: "AI deserves its own path",
  },
  apollonian_dionysian: {
    low: "you trust your head",
    high: "you trust your gut",
  },
}

// Threshold for "meaningful" lean (distance from center of 8)
const MEANINGFUL_THRESHOLD = 3

interface AxisStrength {
  axis: keyof AxisValues
  score: number
  strength: number
  pole: "low" | "high"
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Generate a profile sentence from axis scores.
 * Picks 3 axes (prioritizing meaningful leans), assembles fragments.
 */
export function generateProfileSentence(scores: AxisValues): string {
  // Calculate strength for each axis
  const strengths: AxisStrength[] = (Object.keys(FRAGMENTS) as (keyof AxisValues)[]).map(
    (axis) => {
      const score = scores[axis] ?? 8
      return {
        axis,
        score,
        strength: Math.abs(score - 8),
        pole: score >= 8 ? "high" : "low",
      }
    }
  )

  // Split into meaningful vs weak leans
  const meaningful = strengths.filter((s) => s.strength >= MEANINGFUL_THRESHOLD)
  const weak = strengths.filter((s) => s.strength < MEANINGFUL_THRESHOLD)

  // Pick 3: prioritize meaningful, fill with random weak if needed
  let selected: AxisStrength[]
  if (meaningful.length >= 3) {
    selected = shuffle(meaningful).slice(0, 3)
  } else {
    selected = [...shuffle(meaningful), ...shuffle(weak)].slice(0, 3)
  }

  // Look up fragments and assemble
  const fragments = selected.map((s) => FRAGMENTS[s.axis][s.pole])

  // Build sentence: "Fragment1, fragment2, and fragment3."
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  let sentence: string
  if (fragments.length === 1) {
    sentence = capitalize(fragments[0]) + "."
  } else if (fragments.length === 2) {
    sentence = capitalize(fragments[0]) + " and " + fragments[1] + "."
  } else {
    sentence =
      capitalize(fragments[0]) +
      ", " +
      fragments[1] +
      ", and " +
      fragments[2] +
      "."
  }

  return sentence
}

/**
 * Get the axes used in the sentence (for display/debugging)
 */
export function getProfileAxes(scores: AxisValues): {
  axis: keyof AxisValues
  pole: "low" | "high"
  strength: number
}[] {
  const strengths: AxisStrength[] = (Object.keys(FRAGMENTS) as (keyof AxisValues)[]).map(
    (axis) => {
      const score = scores[axis] ?? 8
      return {
        axis,
        score,
        strength: Math.abs(score - 8),
        pole: score >= 8 ? "high" : "low",
      }
    }
  )

  const meaningful = strengths.filter((s) => s.strength >= MEANINGFUL_THRESHOLD)
  const weak = strengths.filter((s) => s.strength < MEANINGFUL_THRESHOLD)

  let selected: AxisStrength[]
  if (meaningful.length >= 3) {
    selected = shuffle(meaningful).slice(0, 3)
  } else {
    selected = [...shuffle(meaningful), ...shuffle(weak)].slice(0, 3)
  }

  return selected.map(({ axis, pole, strength }) => ({ axis, pole, strength }))
}
