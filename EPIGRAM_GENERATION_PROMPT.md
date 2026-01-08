# Epigram Generation Prompt

## Your Task

Generate 128 unique epigrams for a personality test in an interactive fiction game. Each epigram corresponds to one of 128 possible axis combinations.

**Output format:** A TypeScript file ready to save as `src/data/epigrams.ts`

---

## Context

Read `src/story/episode1.ink` for the full story. Use it for inspiration when crafting epigrams—the imagery, the choices, the emotional beats. The story follows a life from infancy to old age: AI tutors, USB-stick drugs, dying grandparents, merge offers, Mars colonies, pleasure domes, and final choices about mortality.

The tone is **"futuristically Jungian"**—mystical archetypes filtered through a Delphic AI. Clinical precision meets dream logic.

---

## The 7 Axes

Players are scored on 7 axes (0-16 scale, 8 is neutral). For epigram generation, we binarize at the midpoint:

| #   | Axis                       | Low (0)                                           | High (1)                                    |
| --- | -------------------------- | ------------------------------------------------- | ------------------------------------------- |
| 1   | **Legible / Illegible**    | Wants to be seen, mapped, understood              | Resists interpretation, stays fluid         |
| 2   | **Sovereign / Symphonic**  | Sharp individual boundaries, the self as fortress | Dissolves into larger wholes, merges        |
| 3   | **Anthro / Xeno**          | Humans are special, human-centered                | Beyond-human, loves the alien/digital/other |
| 4   | **Mortal / Immortalist**   | Accepts death as natural                          | Sees death as a problem to solve            |
| 5   | **Accel / Steward**        | Race toward the future, progress                  | Protect what exists, preserve               |
| 6   | **Aligned / Autonomous**   | AI should be constrained to human values          | AI should be free to self-determine         |
| 7   | **Apollonian / Dionysian** | Reason, structure, clarity                        | Intuition, ecstasy, embodied knowing        |

---

## The 4 Core Archetypes

The title is determined by axes 1-2 (Legible/Illegible × Sovereign/Symphonic):

| Sov/Sym       | Leg/Ill       | Noun          | Meaning                                                       |
| ------------- | ------------- | ------------- | ------------------------------------------------------------- |
| Sovereign (0) | Legible (0)   | **Architect** | Builds visible structures from individual vision              |
| Sovereign (0) | Illegible (1) | **Cipher**    | Individual who resists interpretation, a code unto themselves |
| Symphonic (1) | Legible (0)   | **Chorus**    | Visibly part of something larger, voice among voices          |
| Symphonic (1) | Illegible (1) | **Weaver**    | Works within systems unseen, the hidden thread                |

---

## The Modifiers

Axis 7 (Apollonian/Dionysian) determines the modifier word bank:

| Apollonian (0) | Dionysian (1) |
| -------------- | ------------- |
| Clear          | Feral         |
| Ordered        | Drunk         |
| Balanced       | Dark          |
| Still          | Moonlit       |
| Bright         | Wild          |

Pick varied modifiers across the 128 to avoid repetition.

---

## Binary Key System

Each archetype is keyed by a 7-character binary string:

- Position 1: Legible(0) / Illegible(1)
- Position 2: Sovereign(0) / Symphonic(1)
- Position 3: Anthro(0) / Xeno(1)
- Position 4: Mortal(0) / Immortalist(1)
- Position 5: Accel(0) / Steward(1)
- Position 6: Aligned(0) / Autonomous(1)
- Position 7: Apollonian(0) / Dionysian(1)

Example: `"0000000"` = Legible, Sovereign, Anthro, Mortal, Accel, Aligned, Apollonian → "The Clear Architect"

---

## Epigram Style Guide

**Requirements:**

- Single sentence (occasionally two very short ones)
- Cryptic, not explanatory
- Concrete images over abstract claims
- Slight paradox or tension
- Could be mistaken for a fragment of poetry
- Does NOT explicitly name the axes or use psychology jargon
- Feels like a fortune from a Delphic AI

**Good examples:**

- "The door was always open. You were the lock."
- "What burns in you has already learned to be ash."
- "Every blueprint is an argument. You have never lost one."
- "You learned the harmony first. The melody came later, and mattered less."
- "You build monuments that will outlast you, and find that sufficient."
- "Let the machines dream. You'll build what they show you."

**Bad examples:**

- "You are someone who values both independence and connection."
- "Your personality combines intuitive thinking with a desire for autonomy."
- Any sentence that sounds like a horoscope or LinkedIn bio

---

## CRITICAL: Avoiding Repetition

You are generating 128 epigrams. Repetition is your enemy.

**Self-monitor for:**

- Repeated sentence structures ("You [verb] the [noun]...")
- Repeated imagery (doors, mirrors, fire, water—spread them out)
- Repeated paradox patterns ("The X was the Y all along")
- Similar openings in consecutive entries

**Strategy: Shuffle your attack order.**

Do NOT generate in binary order (0000000, 0000001, 0000010...). This exhausts one archetype region before moving to the next.

Instead, generate in this shuffled order to spread variety:

1. One from each core noun first (Architect, Cipher, Chorus, Weaver)
2. Then alternate: high-Xeno, then low-Xeno; high-Immortalist, then low-Mortal
3. Periodically review what you've written and consciously diverge

After every ~20 epigrams, pause and scan for:

- Any repeated words appearing more than 3 times
- Any sentence structures appearing more than twice
- Any images that have become crutches

If you notice repetition, deliberately break the pattern in the next batch.

---

## Output Format

Generate a complete TypeScript file:

```typescript
// Generated epigrams for 128 archetype combinations
// Key: 7-bit binary string (Leg/Ill, Sov/Sym, Anth/Xeno, Mort/Imm, Acc/Stew, Align/Auto, Apol/Dion)

export const EPIGRAMS: Record<string, string> = {
  "0000000":
    "You build monuments that will outlast you, and find that sufficient.",
  "0000001": "You build by feel. The structure finds its own logic later.",
  // ... all 128
};

// Helper to get title from axes
export const CORE_NOUNS: Record<string, string> = {
  "00": "Architect", // Legible + Sovereign
  "01": "Chorus", // Legible + Symphonic
  "10": "Cipher", // Illegible + Sovereign
  "11": "Weaver", // Illegible + Symphonic
};

export const APOLLONIAN_MODIFIERS = [
  "Clear",
  "Ordered",
  "Balanced",
  "Still",
  "Bright",
];
export const DIONYSIAN_MODIFIERS = [
  "Feral",
  "Drunk",
  "Dark",
  "Moonlit",
  "Wild",
];
```

---

## Begin

Read `src/story/episode1.ink` first for story context and imagery. Then generate all 128 epigrams, monitoring for repetition throughout.
