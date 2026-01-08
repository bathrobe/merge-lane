# Endgame Dossier Design — Working File

Status: **In Progress**
Last updated: 2026-01-08

---

## Overview

The endgame dossier is the results screen shown after completing the visual novel. The player has just simulated an entire life from birth to death/singularity, and now the therapist hands them their file.

**Emotional beat:** Uncanny, Hindu-parable vibes (lived a whole life, snapped back), personalized, immersive, ARG-feeling, in-world artifact.

---

## What the Dossier Contains

1. **Oracle image** — Tarot-style illustration (one of 128 pre-generated), square format
2. **Title** — One of 128 generated names (e.g., "The Architect of Endings")
3. **Description** — 1-2 sentence assessment in third person
4. **7 personality axes** — Spectrum bars with descriptions of what each pole means
5. **Seed phrase** — 3-word "Unit Identifier" for data portability
6. **CTA buttons** — "Copy Card" (shareable) + "Continue Application" (newsletter signup)

---

## Design Language (LOCKED)

From `notes/UI_COMPONENT_SPEC.md` — applies to dossier:

- **Teal plastic frame** with corner rivets (same as game UI)
- **Cream paper viewport** (the "document" inside)
- **Hardware chrome** — LEDs, embossed labels, status indicators
- **Fonts:** Libre Baskerville (body), Nunito (UI), monospace (labels)
- **Palette:** institutionalTeal, warmBrown, softBeige, mutedGold, deepNavy, cream

**What's NOT locked:** The specific layout of elements within that frame. We want this to be stunning, ambitious, playful — the design showpiece of the project.

---

## The 128 Types System

**Structure:** Binary collapse of 7 axes = 2^7 = 128 combinations.

**Axes (final set):**
1. Legible / Illegible — How visible are you?
2. Sovereign / Symphonic — Stay one or merge?
3. Anthro / Xeno — Are humans special?
4. Mortal / Immortalist — Accept death or fight it?
5. Accel / Steward — Race forward or protect what's here?
6. Aligned / Autonomous — Should AI be controlled or trusted?
7. Apollonian / Dionysian — Order or chaos as guide?

**Generation pipeline (planned):**
1. Write rich descriptions for each of the 14 poles
2. For each of 128 combos, assemble prompt from relevant 7 pole descriptions
3. Claude generates: `{ title, description, imagePrompt }`
4. Flux2 generates oracle image (tarot-style, consistent illustration style)
5. Ship as static asset library

---

## Oracle Image Direction

**Vibe:** John Lilly "Programming the Human Biocomputer" meets tarot.
- Scientific + mystical hybrid
- Marine biology energy (dolphins, ocean, inner child nostalgia)
- NOT EEG/Rorschach — actual illustrations
- Animals, figures, symbols that map to the title
- Consistent illustration style across all 128
- Square format, fits inside dossier

**Image prompt keywords to explore:** "myst", pre-rendered CD-ROM, soft 3D

---

## Shareable Trading Card

A condensed capture for clipboard → social media:
- Oracle square
- Title
- Description
- Mini axis indicators (7 vertical bars?)
- Seed phrase

Copy-to-clipboard already implemented in current results screen.

---

## Open Design Questions

- [ ] Exact layout of dossier elements — need mockups
- [ ] How do axes display? Spectrum bars with labels at each end?
- [ ] Do we show axis descriptions inline, or on expand/hover?
- [ ] Animation: Does dossier fade in, or "placed on desk" motion?
- [ ] Trading card: Same design as dossier, or simplified version?
- [ ] Oracle image style: Need to nail down Flux prompt prefix/suffix

---

## Axis Audit Summary

From earlier analysis — all 7 remaining axes are well-tested:

| Axis | Range | Notes |
|------|-------|-------|
| legible_illegible | 6-10 | Lighter, but kept intentionally |
| sovereign_symphonic | 2-14 | THE SPINE — dominates the story |
| anthro_xeno | 3-11 | Good distribution |
| mortal_immortalist | 4-12 | Perfectly balanced |
| accel_steward | 2-12 | Well-distributed |
| aligned_autonomous | 3-9 | Intentionally asymmetric |
| apollonian_dionysian | 5-13 | Good range |

---

## Reference Materials

- `notes/Arc.md` — Story structure, tone, therapist frame details
- `notes/Personality Axes.md` — Original axis definitions
- `notes/UI_COMPONENT_SPEC.md` — Locked design system
- `src/pages/DesignPlayground.tsx` — UI component experiments
- `notes/visual_refs/` — Utopian scholastic reference images
- John Lilly "Programming the Human Biocomputer" — aesthetic inspiration

---

## Next Steps

1. **Sketch dossier layouts** — How do the elements arrange?
2. **Write the 14 pole descriptions** — Foundation for 128 type generation
3. **Design the shareable card** — What's the minimal version?
4. **Prototype oracle image style** — Test Flux prompts
5. **Build the generation script** — Claude + Flux pipeline for 128 types

---

## Removed Axis

**elitist_populist** — Removed 2026-01-08. The story doesn't meaningfully test this axis (only 6 touches, all easily avoided). Could return in a future chapter focused on Mars colony governance.
