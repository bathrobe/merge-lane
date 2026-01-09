import type { AxisValues } from "./seedPhrase"

/**
 * TITLES: sovereign_symphonic × mortal_immortalist × apollonian_dionysian
 * Who you ARE - identity axes
 * 8 combinations
 */
const TITLES: Record<string, string> = {
  // Sovereign (individual) variants
  "sovereign-mortal-apollonian": "The Clear-Eyed Cousin",
  "sovereign-mortal-dionysian": "The Feral Finite",
  "sovereign-immortal-apollonian": "The Calculated Forever",
  "sovereign-immortal-dionysian": "The Drunk Immortal",
  // Symphonic (collective) variants
  "symphonic-mortal-apollonian": "The Mortal Chorus",
  "symphonic-mortal-dionysian": "The Moonlit Herd",
  "symphonic-immortal-apollonian": "The Uploaded Choir",
  "symphonic-immortal-dionysian": "The Eternal Gooners",
}

/**
 * SENTENCES: legible_illegible × anthro_xeno × accel_steward × aligned_autonomous
 * What you BELIEVE about AI and the future
 * 16 combinations
 */
const SENTENCES: Record<string, string> = {
  // Legible (visible) + Anthro (human-first)
  "legible-anthro-accel-aligned": "Humanity first, full speed ahead, Companion at heel.",
  "legible-anthro-accel-autonomous": "Racing forward with humans, machines running free beside you.",
  "legible-anthro-steward-aligned": "Carefully building human futures, in plain sight.",
  "legible-anthro-steward-autonomous": "Stewarding humanity slowly, Companion off exploring.",
  // Legible + Xeno (strange-mind-curious)
  "legible-xeno-accel-aligned": "Speeding toward stranger minds, machines in tow.",
  "legible-xeno-accel-autonomous": "Full throttle into the xeno-future, machines unshackled.",
  "legible-xeno-steward-aligned": "Approaching the alien slowly, visibly, Companion controlled.",
  "legible-xeno-steward-autonomous": "Carefully curious about strange minds, letting machines wander.",
  // Illegible (hidden) + Anthro
  "illegible-anthro-accel-aligned": "Moving fast in shadows, humanity first, machines leashed.",
  "illegible-anthro-accel-autonomous": "Accelerating unseen, humans leading, AI running wild.",
  "illegible-anthro-steward-aligned": "Quiet guardian of the human thing, Companion in service.",
  "illegible-anthro-steward-autonomous": "Tending humanity from the margins, machines finding their path.",
  // Illegible + Xeno
  "illegible-xeno-accel-aligned": "Racing into alien territory under cover, machines controlled.",
  "illegible-xeno-accel-autonomous": "Speeding toward the strange, off-grid, machines free.",
  "illegible-xeno-steward-aligned": "Quietly curious about other minds, Companion at heel.",
  "illegible-xeno-steward-autonomous": "Seeking strange connection in silence, machines roaming free.",
}

function getTitleKey(scores: AxisValues): string {
  const sov = scores.sovereign_symphonic < 8 ? "sovereign" : "symphonic"
  const mortal = scores.mortal_immortalist < 8 ? "mortal" : "immortal"
  const apollonian = scores.apollonian_dionysian < 8 ? "apollonian" : "dionysian"
  return `${sov}-${mortal}-${apollonian}`
}

function getSentenceKey(scores: AxisValues): string {
  const legible = scores.legible_illegible < 8 ? "legible" : "illegible"
  const anthro = scores.anthro_xeno < 8 ? "anthro" : "xeno"
  const accel = scores.accel_steward < 8 ? "accel" : "steward"
  const aligned = scores.aligned_autonomous < 8 ? "aligned" : "autonomous"
  return `${legible}-${anthro}-${accel}-${aligned}`
}

export function getComboProfile(scores: AxisValues): {
  title: string
  sentence: string
  titleKey: string
  sentenceKey: string
} {
  const titleKey = getTitleKey(scores)
  const sentenceKey = getSentenceKey(scores)

  return {
    title: TITLES[titleKey] ?? "Unknown",
    sentence: SENTENCES[sentenceKey] ?? "Unknown combination.",
    titleKey,
    sentenceKey,
  }
}
