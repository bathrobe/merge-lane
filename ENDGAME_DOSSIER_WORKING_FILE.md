# Endgame Dossier Design — Working File

Status: **In Progress**
Last updated: 2026-01-08

---

## Overview

The endgame dossier is the results screen shown after completing the visual novel. The player has just simulated an entire life from birth to death/singularity, and now the therapist hands them their file.

**Emotional beat:** Uncanny, Hindu-parable vibes (lived a whole life, snapped back), personalized, immersive, ARG-feeling, in-world artifact.

---

## What the Dossier Contains

1. **Oracle image** — Tarot-style illustration (one of 128 pre-generated), square format, seed phrase watermarked in light font
2. **Title** — One of 128 generated names (e.g., "The Architect of Endings")
3. **Description** — 1-2 sentence poetic assessment in third person
4. **Subject Assessment** — Prose paragraph assembled from 14 pole statements (one per axis based on player's scores), clinical/Lilly voice, monospace font
5. **Constellation diagram** — 7-point visual showing player's calibration signature
6. **Seed phrase** — 3-word "Unit Identifier" at bottom with copy button
7. **Substack signup** — In-world framing ("Continue your calibration", "Register your frequency")
8. **Copy button** — Single button under oracle block to copy shareable image

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

## Layout (LOCKED)

**Visual metaphor:** Custom-built iPad-like tablet. Skeuomorphic hardware device that matches the narrative panel UI. Teal frame, cream viewport, beveled buttons, corner rivets.

**Hierarchy (top to bottom):**

```
┌─────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │   ┌─────────────┐                                     │  │
│  │   │   ORACLE    │    THE WEAVER OF DISSONANCE         │  │
│  │   │   IMAGE     │                                     │  │
│  │   │             │    A shimmer at the edge of         │  │
│  │   │  seed:47a   │    systems, dissolving boundaries   │  │
│  │   └─────────────┘    from within.                     │  │
│  │                                                       │  │
│  │   [ COPY ]                                            │  │
│  │                                                       │  │
│  │   ═══════════════════════════════════════════════     │  │
│  │                                                       │  │
│  │   ─── SUBJECT ASSESSMENT ───────────────────────      │  │
│  │                                                       │  │
│  │   Subject [embraces dissolution] into larger wholes.  │  │
│  │   They [resist easy legibility] and demand careful    │  │
│  │   interpretation. They [view death as a problem to    │  │
│  │   be solved]...                                       │  │
│  │                                                       │  │
│  │                  ★ sovereign                          │  │
│  │                 ╱ ╲                                   │  │
│  │          mortal ★───★ illegible                       │  │
│  │                 │   │                                 │  │
│  │          somatic ★───★ immanent                       │  │
│  │                  ╲ ╱                                  │  │
│  │                   ★ steward                           │  │
│  │                                                       │  │
│  │            YOUR CALIBRATION SIGNATURE                 │  │
│  │                                                       │  │
│  │   ═══════════════════════════════════════════════     │  │
│  │                                                       │  │
│  │   ─── CONTINUE YOUR CALIBRATION ────────────────      │  │
│  │                                                       │  │
│  │   The Institute maintains ongoing research            │  │
│  │   communiqués. Register your frequency for            │  │
│  │   future transmissions.                               │  │
│  │                                                       │  │
│  │   ┌────────────────────────┐  ┌────────────────┐      │  │
│  │   │ SIGNAL FREQ (email)    │  │  SUBSCRIBE     │      │  │
│  │   └────────────────────────┘  └────────────────┘      │  │
│  │                                                       │  │
│  │   ─────────────────────────────────────────────────   │  │
│  │   SEED PHRASE: crystal-harbor-dusk-47                 │  │
│  │   [ COPY SEED ]                                       │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
 ↑ teal device frame                    ↑ cream paper viewport
```

**Interactive elements:**
- Hoverable axis phrases in assessment → tooltip reveals axis name + player's score
- Phrases styled with color/bold to indicate they're interactive
- Typewriter reveal animation (optional)

**Typography:**
- Title: Libre Baskerville, large
- Description: Libre Baskerville, italic
- Assessment prose: Monospace (Courier-style), clinical feel
- Labels: Nunito, small caps

---

## Open Design Questions

- [x] Exact layout of dossier elements — LOCKED (see above)
- [x] How do axes display? — Prose paragraph + constellation diagram
- [x] Do we show axis descriptions inline, or on expand/hover? — Hover tooltips
- [ ] Animation: Does dossier fade in, or "placed on desk" motion?
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
