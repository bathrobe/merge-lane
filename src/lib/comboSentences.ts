import type { AxisValues } from "./seedPhrase"

/**
 * TITLES: sovereign_symphonic × mortal_immortalist × apollonian_dionysian × legible_illegible
 * Who you ARE - identity axes
 * 16 combinations
 */
const TITLES: Record<string, string> = {
  // Sovereign (individual) + Mortal
  "sovereign-mortal-apollonian-legible": "The Clear-Eyed Cousin",
  "sovereign-mortal-apollonian-illegible": "The Quiet Martian",
  "sovereign-mortal-dionysian-legible": "The Open Flame",
  "sovereign-mortal-dionysian-illegible": "The Feral Finite",
  // Sovereign + Immortal
  "sovereign-immortal-apollonian-legible": "The Calculated Forever",
  "sovereign-immortal-apollonian-illegible": "The Shadow Immortal",
  "sovereign-immortal-dionysian-legible": "The Drunk Immortal",
  "sovereign-immortal-dionysian-illegible": "The Moonlit Eternal",
  // Symphonic (collective) + Mortal
  "symphonic-mortal-apollonian-legible": "The Mortal Chorus",
  "symphonic-mortal-apollonian-illegible": "The Hidden Choir",
  "symphonic-mortal-dionysian-legible": "The Finite Revel",
  "symphonic-mortal-dionysian-illegible": "The Moonlit Herd",
  // Symphonic + Immortal
  "symphonic-immortal-apollonian-legible": "The Uploaded Choir",
  "symphonic-immortal-apollonian-illegible": "The Shadow Chorus",
  "symphonic-immortal-dionysian-legible": "The Immortal Revel",
  "symphonic-immortal-dionysian-illegible": "The Eternal Phantom",
}

/**
 * SENTENCES: anthro_xeno × accel_steward × aligned_autonomous
 * What you BELIEVE about AI and the future
 * 8 combinations
 */
const SENTENCES: Record<string, string> = {
  // Anthro (human-first)
  "anthro-accel-aligned": "Humanity first, full speed ahead, Companion at heel.",
  "anthro-accel-autonomous": "Racing forward with humans, machines running free.",
  "anthro-steward-aligned": "Carefully building human futures, Companion in service.",
  "anthro-steward-autonomous": "Stewarding humanity slowly, letting machines explore.",
  // Xeno (strange-mind-curious)
  "xeno-accel-aligned": "Speeding toward stranger minds, machines in tow.",
  "xeno-accel-autonomous": "Full throttle into the xeno-future, machines unshackled.",
  "xeno-steward-aligned": "Approaching the alien slowly, Companion controlled.",
  "xeno-steward-autonomous": "Carefully curious about strange minds, machines roaming free.",
}

function getTitleKey(scores: AxisValues): string {
  const sov = scores.sovereign_symphonic < 8 ? "sovereign" : "symphonic"
  const mortal = scores.mortal_immortalist < 8 ? "mortal" : "immortal"
  const apollonian = scores.apollonian_dionysian < 8 ? "apollonian" : "dionysian"
  const legible = scores.legible_illegible < 8 ? "legible" : "illegible"
  return `${sov}-${mortal}-${apollonian}-${legible}`
}

function getSentenceKey(scores: AxisValues): string {
  const anthro = scores.anthro_xeno < 8 ? "anthro" : "xeno"
  const accel = scores.accel_steward < 8 ? "accel" : "steward"
  const aligned = scores.aligned_autonomous < 8 ? "aligned" : "autonomous"
  return `${anthro}-${accel}-${aligned}`
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
