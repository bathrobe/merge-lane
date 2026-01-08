# Archetype System Design

## Overview

128 unique archetypes generated from 7 binary axes (2^7 = 128). Each archetype has:
- A **title** (2 words: "The [Modifier] [Noun]")
- An **epigram** (single cryptic sentence — fortune cookie, not explanation)

Tone: **Futuristically Jungian** — mystical archetypes filtered through a Delphic AI. Clinical precision meets dream logic.

---

## Structure

```
The [Modifier] [Core Noun]
"[Epigram]"
[Radar Chart]
```

Example:
```
The Moonlit Weaver
"You tend connections that others cannot see, and call it loneliness."
```

The title is the identity. The epigram is the fortune. The radar chart is the fingerprint.

---

## Axis Hierarchy

### Tier 1: Core Noun (2 axes → 4 nouns)
**Sovereign/Symphonic × Legible/Illegible**

These define the fundamental archetype because they answer:
- *How do you relate to the whole?* (individual vs dissolved)
- *How do you present to others?* (seen vs hidden)

### Tier 2: Primary Modifier (1 axis → word bank)
**Apollonian/Dionysian**

This defines *how* the archetype operates — through reason or intuition. Modifier is selected randomly from the appropriate word bank.

### Tier 3: Epigram Flavor (4 axes)
**Anthro/Xeno, Mortal/Immortalist, Accel/Steward, Aligned/Autonomous**

These don't appear in the title. They inform the LLM-generated epigram, giving each of the 128 combinations its unique fortune.

---

## Core Nouns (4)

Derived from Sovereign/Symphonic × Legible/Illegible:

| Sov/Sym | Leg/Ill | Noun | Reasoning |
|---------|---------|------|-----------|
| Sovereign | Legible | **Architect** | Builds visible structures from individual vision. The self as monument. Implies deliberate construction, legacy, being *seen making*. |
| Sovereign | Illegible | **Cipher** | Individual who resists interpretation. A code unto themselves. Implies mystery, self-containment, deliberate opacity. |
| Symphonic | Legible | **Chorus** | Visibly part of something larger. Voice among voices, but *heard*. Implies harmony, participation, witnessed belonging. |
| Symphonic | Illegible | **Weaver** | Works within systems unseen. The hidden thread that connects. Implies quiet influence, pattern-making from within, mycelial. |

---

## Primary Modifiers

Derived from Apollonian/Dionysian. Pick randomly from the appropriate bank:

| Axis | Word Bank | Reasoning |
|------|-----------|-----------|
| Apollonian | **Clear**, **Ordered**, **Balanced**, **Still**, **Bright** | Reason-as-light. Geometry. Stillness as mastery. Short, clean words. |
| Dionysian | **Feral**, **Drunk**, **Dark**, **Moonlit**, **Wild** | Instinct. Intoxication as openness. Moon = reflected/indirect knowing. Primal words. |

This gives us **8 base title patterns** (4 nouns × 2 modifier banks), with 5 word variations each = **40 possible titles**.

Examples:
- The Moonlit Weaver
- The Clear Architect
- The Feral Cipher
- The Still Chorus
- The Wild Architect
- The Balanced Weaver

---

## Epigram Style

Single sentence. Cryptic. More fortune cookie than explanation.

**Qualities:**
- Sounds profound but doesn't fully parse
- Uses "you" sparingly — more oblique
- Concrete images over abstract claims
- Slight paradox or tension
- Could be mistaken for a fragment of poetry

**Good:**
> "You tend connections that others cannot see, and call it loneliness."

> "The door was always open. You were the lock."

> "What burns in you has already learned to be ash."

**Bad:**
> "You are someone who values both independence and connection."

> "Your personality combines intuitive thinking with a desire for autonomy."

---

## Epigram Generation

Each of the 128 axis combinations gets a unique LLM-generated epigram.

**Input to LLM:**
- The archetype title
- All 7 axis scores (or binary high/low)
- Axis definitions (what each means)
- Story context (1 paragraph)
- Tone guide + examples

**Output:**
- Single sentence epigram

Generated once, reviewed, stored in lookup table.

---

## Tier 3 Axis Reference (for epigram generation)

These axes flavor the epigram but don't appear in the title:

| Axis | Low End | High End | Core Question |
|------|---------|----------|---------------|
| Anthro/Xeno | Human-centered | Beyond-human | Is humanity special, or one thread among many? |
| Mortal/Immortalist | Accepts death | Seeks permanence | Is mortality natural or a problem to solve? |
| Accel/Steward | Progress/speed | Preservation/care | Race forward or protect what exists? |
| Aligned/Autonomous | AI constrained | AI free | Should machine minds serve or self-determine? |

---

## Example Archetypes

### The Moonlit Weaver
**Axes**: Symphonic, Illegible, Dionysian, high-Xeno, high-Mortal
> *"You tend connections that others cannot see, and call it loneliness."*

### The Clear Architect
**Axes**: Sovereign, Legible, Apollonian, high-Anthro, high-Accel
> *"Every blueprint is a argument. You have never lost one."*

### The Feral Cipher
**Axes**: Sovereign, Illegible, Dionysian, high-Autonomous
> *"The lock and the key were the same thing all along."*

### The Still Chorus
**Axes**: Symphonic, Legible, Apollonian, high-Aligned, high-Steward
> *"You learned the harmony first. The melody came later, and mattered less."*

### The Wild Architect
**Axes**: Sovereign, Legible, Dionysian, high-Accel, high-Xeno
> *"You build toward a skyline that doesn't exist yet. It will."*

---

## Implementation

```typescript
// Title generation (deterministic + random modifier selection)
function generateTitle(scores: Record<string, number>): string {
  const noun = getCoreNoun(scores); // from Sov/Sym × Leg/Ill
  const modifierBank = getModifierBank(scores); // from Apol/Dion
  const modifier = pickRandom(modifierBank);
  return `The ${modifier} ${noun}`;
}

// Epigram lookup (pre-generated)
function getEpigram(scores: Record<string, number>): string {
  const key = toBinaryKey(scores); // e.g., "1011010"
  return EPIGRAM_TABLE[key];
}
```

**Workflow:**
1. Generate all 128 epigrams via LLM (one-time batch)
2. Review and tweak
3. Store in `src/data/archetypes.ts` as lookup table
4. Title generated at runtime (deterministic noun + random modifier)
5. Epigram pulled from table

---

## Open Questions

- [ ] Should modifier be random each time, or seeded to player's seed phrase?
- [ ] Easter egg archetypes for perfect extremes (all 0s or all 16s)?
- [ ] Should radar chart color/style vary by core noun?
