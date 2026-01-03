# Scholastic Fair — Implementation Plan

*Documented 2026-01-02 from planning conversation with Claude.*

---

## Overview

A visual novel engine built on Ink (narrative scripting) + React (presentation). Episode 1 is a personality test wrapped in interactive fiction. Player ends with a portable identity encoded as a seed phrase.

**Core principle:** Ink owns ALL logic. React is a dumb renderer.

---

## Architecture

### The Ink ↔ React Boundary

```
┌─────────────────────────────────────────────────────────┐
│                     Ink (inkjs)                         │
│  - All narrative text                                   │
│  - All branching logic                                  │
│  - All variables (personality axes, flags)              │
│  - Game state serialization                             │
│  - "Routing" between scenes via knots (=== scene ===)   │
└─────────────────────────────────────────────────────────┘
                           │
                           │ story.Continue()
                           │ story.currentTags
                           │ story.currentChoices
                           │ story.variablesState
                           ▼
┌─────────────────────────────────────────────────────────┐
│                      React                              │
│  - Renders text (typography, animation)                 │
│  - Displays choices as buttons                          │
│  - Reads tags → shows right background/UI               │
│  - Handles save/load UI                                 │
│  - Seed phrase encoding at end                          │
│  - Results screen / constellation visualization         │
└─────────────────────────────────────────────────────────┘
```

### How Ink Communicates Visual State

Ink uses **tags** (lines starting with `#`) to tell React what to display:

```ink
# background: laboratory
# mood: tense
You enter the room. The lights flicker.
```

inkjs exposes these as `story.currentTags` → `["background: laboratory", "mood: tense"]`

We parse this into `{ background: "laboratory", mood: "tense" }` with a simple utility.

### Tag Schema

See `tech-spec.md` for supported tags.

---

## Stack

See `tech-spec.md` for full technical details.

---

## UI Layout

Disco Elysium-inspired: full-bleed background with phone-width text panel on right.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    FULL-BLEED BACKGROUND                    │
│                    (current room/scene)                     │
│                                                             │
│                                              ┌────────────┐ │
│                                              │            │ │
│                                              │  TEXT      │ │
│                                              │  PANEL     │ │
│                                              │            │ │
│                                              │  - prose   │ │
│                                              │  - choices │ │
│                                              │            │ │
│                                              └────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- `SceneBackground`: Full-viewport image, reads `tags.background`
- `TextPanel`: Fixed-position, right-aligned, ~350-400px wide
- Room navigation: Deferred until world design demands it

### Text Display Mode

**Decision deferred.** Support both:
- **Append mode**: Text accumulates like a scrolling log (Twine/Disco Elysium style)
- **Replace mode**: Screen clears, only current passage visible (classic VN)

The `useInkStory` hook exposes both `textHistory[]` and `currentText`. Components choose which to render.

---

## Results Screen

When `# show: results` fires, fullscreen takeover replaces the game layout.

### What's Displayed

1. **Constellation visualization**: 8 dots plotted on a circular graph
2. **Constellation name + myth**: LLM generates a name ("The Lantern") and 2-sentence mythic interpretation based on axis values (NOT from vision model—just the numbers)
3. **Bipolar axis display**: All 8 axes shown with dot position, both poles labeled (no "good/bad" implied)
4. **LLM personality narrative**: 2-3 sentences synthesizing all axes
5. **Seed phrase**: 3 words, displayed prominently
6. **Save reminder**: "Save this somewhere private"

### Actions

- **Copy card**: PNG to clipboard (the bordered card area)
- **Email signup**: Formspring embed for Episode 2 notification
- **Start over**: Reset and replay

### Layout

```
┌───────────────────────────────────────┐
│                                       │
│         ★         ★                   │
│              THE LANTERN              │
│      ★    (8 dots forming shape) ★    │
│    ★                            ★     │
│      ★         ★                      │
│                                       │
│   "Those who bear The Lantern         │
│    carry light into uncertain         │
│    places..."                         │
│                                       │
│   Elitist ────────●─── Populist       │
│   Optimist ──●───────── Doomer        │
│   [... 6 more axes ...]               │
│                                       │
│   YOUR PHRASE                         │
│   forest twilight ember               │
│                                       │
│   save this somewhere private ↗       │
│                                       │
└───────────────────────────────────────┘

         [ COPY CARD ]

   ┌─────────────────────────────────┐
   │ Get notified for Episode 2     │
   │ [email_______] [NOTIFY ME]     │
   └─────────────────────────────────┘

         [ Start over ]
```

---

## Personality System

See `PERSONALITY_AXES.md` for the 8 dimensions and their meanings.

See `tech-spec.md` for variable representation and encoding.

---

## Seed Phrase System

See `tech-spec.md` for encoding details.

Deterministic: same data → same phrase. Phrase can regenerate character in future episodes.

---

## Constellation System

1. Plot 8 axis values as dots on a circular graph
2. Send axis values (numbers) to LLM
3. LLM returns: constellation name + 2-sentence myth
4. Display dots + name + myth together

The dots ARE the visual. LLM finds meaning in the pattern.

---

## Project Structure

```
~/Developer/scholastic-fair/
├── CLAUDE.md                 # Points to vault for deep context
├── docs/
│   ├── PLAN.md               # This document
│   ├── tech-spec.md               # Technical reference
│   ├── DESIGN.md             # Concept and vision
│   ├── PERSONALITY_AXES.md   # The 8 axes
│   └── world/                # Worldbuilding notes
│       ├── CREATIVE_PROCESS.md
│       └── SESSION_STATE.md
│
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   │
│   ├── story/
│   │   ├── episode1.ink      # Narrative source
│   │   └── episode1.json     # Compiled for inkjs
│   │
│   ├── components/
│   │   ├── GameView.tsx
│   │   ├── SceneBackground.tsx
│   │   ├── TextPanel.tsx
│   │   ├── StoryText.tsx
│   │   ├── ChoiceList.tsx
│   │   ├── ResultsScreen.tsx
│   │   ├── ConstellationChart.tsx
│   │   ├── AxisDisplay.tsx
│   │   ├── SeedPhrase.tsx
│   │   └── EmailSignup.tsx
│   │
│   ├── hooks/
│   │   └── useInkStory.ts
│   │
│   ├── lib/
│   │   ├── seedPhrase.ts
│   │   ├── tags.ts
│   │   ├── constellation.ts
│   │   └── wordlists/
│   │       └── seedWords.ts
│   │
│   ├── assets/
│   │   └── backgrounds/
│   │
│   └── styles/
│       └── index.css
│
├── scripts/
│   └── compile-ink.sh
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## Key Files Explained

| File | Responsibility |
|------|----------------|
| `useInkStory.ts` | Wraps inkjs. Exposes `{ text, textHistory, choices, tags, variables, isEnded, continue, choose }` |
| `tags.ts` | `["background: lab"] → { background: "lab" }` |
| `seedPhrase.ts` | Encode/decode character data ↔ 3 words |
| `constellation.ts` | Takes 8 axis values, calls LLM, returns `{ name, myth }` |
| `SceneBackground.tsx` | Full-bleed image based on `tags.background` |
| `TextPanel.tsx` | Right-side panel containing prose + choices |
| `ResultsScreen.tsx` | Fullscreen results with constellation, axes, phrase |

---

## Episode 1 Scope

- **Length**: 5-10 minutes
- **Art**: Static backgrounds only (no dynamic generation except results constellation)
- **Room navigation**: None for v1 (linear flow)
- **Result**: Constellation + narrative + 3-word seed phrase + copyable card

---

## Dev Workflow

1. Write narrative in `.ink` files
2. Compile with `pnpm run ink:compile` (runs inklecate)
3. React consumes compiled `.json`
4. Test in browser with Vite dev server

---

## Aesthetic Direction

**Utopian scholastic** — turn of 21st century Encarta/edutainment vibe. Educational software and illustrated books aesthetic. Details TBD after worldbuilding.

---

## Open Items

- Universe/setting/world (in progress via worldbuilding sessions)
- Visual style specifics
- Wordlist vocabulary and aesthetic

---

## Origin

This project evolved from the "World ARG Thing" vision doc (2025-12-21). Core insight: serialized interactive fiction with shareable artifacts, each episode a viral piece, accumulating into a larger story.

For deeper context: `/Users/joe/Vaults/Hakuin/Projects/Interactive Fiction Project/`
