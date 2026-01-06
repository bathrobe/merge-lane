# UI Styling Spec — Utopian Scholastic

> **Status**: Design exploration complete. Apply when narrative is ready.
> **Preview**: Run `pnpm dev` → visit `?design` → scroll to "Full Game UI Mockup"

---

## Design Direction

**Chosen style**: Teal Plastic Frame with Rivets (Kid Pix / Creative Workshop)

Core principle: **UI as physical apparatus** — you're looking *through* a device, not at a flat screen. Dark chrome frames surround warm content viewports.

---

## Palette

From `notes/Style Lock.md`:

| Name | Hex | Use |
|------|-----|-----|
| Institutional Teal | `#5B8A8A` | Frame background, accent text |
| Warm Brown | `#8B7355` | Secondary accents |
| Soft Beige | `#D4C5A9` | Button backgrounds, highlights |
| Muted Gold | `#C9A227` | Accent, status indicators |
| Deep Navy | `#2C3E50` | Body text, dark elements |
| Cream | `#F5F0E6` | Content viewport background |

---

## Fonts

```html
<!-- Already in index.html -->
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```

| Font | Tailwind Class | Use |
|------|----------------|-----|
| Libre Baskerville | `font-baskerville` | Body text, dialogue, narrative |
| Nunito | `font-nunito` | Buttons, labels, UI chrome |

---

## Key CSS Patterns

### 1. Beveled Border (directional lighting)

Light source top-left → light edges top/left, dark edges bottom/right.

```tsx
style={{
  border: `3px solid`,
  borderColor: `#LIGHT #DARK #DARK #LIGHT`,
  // e.g., `#7BA3A3 #2D4545 #2D4545 #7BA3A3`
}}
```

### 2. Gradient Fill (plastic sheen)

3-stop gradient: lighter top → mid → darker bottom.

```tsx
style={{
  background: `linear-gradient(180deg, #7BA3A3 0%, #5B8A8A 50%, #3D6B6B 100%)`,
}}
```

### 3. Inset Viewport (carved in)

Reverse the border colors + add inset shadow.

```tsx
style={{
  border: `4px solid`,
  borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`, // dark top-left, light bottom-right
  boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
}}
```

### 4. Hard Drop Shadow (no blur)

```tsx
style={{
  boxShadow: `4px 4px 0 rgba(0,0,0,0.3)`,
}}
```

### 5. Rivets (corner accents)

```tsx
<div
  className="absolute w-3 h-3 rounded-full"
  style={{
    top: 8, left: 8, // position each corner
    background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
    boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
  }}
/>
```

---

## Surface-by-Surface Guide

### 1. GameView / TextPanel (main game)

**Layout**: Black scene left, teal sidebar right (stacked on mobile)

**Sidebar structure**:
```
┌─────────────────────────┐
│ ● [teal frame]        ● │  ← rivets
│  ┌───────────────────┐  │
│  │ [cream viewport]  │  │  ← inset, scrollable text
│  │                   │  │
│  │ narrative text    │  │  ← font-baskerville
│  │                   │  │
│  ├───────────────────┤  │  ← darker beige choice area
│  │ ▸ Choice 1        │  │  ← beveled buttons
│  │ ▸ Choice 2        │  │
│  │ ▸ Choice 3        │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ CHAPTER 1 │ TITLE │  │  ← dark status bar, mono font
│  └───────────────────┘  │
│ ●                     ● │
└─────────────────────────┘
```

**Files to edit**:
- `src/components/TextPanel.tsx` — main panel structure
- `src/components/ChoiceList.tsx` — choice buttons
- `src/components/StoryText.tsx` — text styling
- `src/components/GameView.tsx` — outer layout, black bg

### 2. TitleScreen

**Layout**: Full-screen teal plastic frame, centered content

**Structure**:
```
┌─────────────────────────────┐
│ ●                         ● │
│                             │
│     [TITLE in Baskerville]  │
│     [subtitle in Nunito]    │
│                             │
│     ┌─────────────────┐     │
│     │   ★ New Game    │     │  ← beveled gold button
│     └─────────────────┘     │
│     ┌─────────────────┐     │
│     │    Continue     │     │  ← beveled beige button
│     └─────────────────┘     │
│                             │
│ ●                         ● │
└─────────────────────────────┘
```

**File to edit**: `src/components/TitleScreen.tsx`

### 3. ResultsScreen

**Option A**: Keep teal plastic (consistency)
**Option B**: DK Eyewitness white (museum specimen feel)

Leaning toward **Option B** — results are a "dossier" moment, clinical presentation of your personality. White/cream background, the constellation as a floating specimen.

**Structure** (Option B):
```
┌─────────────────────────────┐
│ [white/cream background]    │
│                             │
│    ┌─────────────────┐      │
│    │ [constellation] │      │  ← floating specimen
│    └─────────────────┘      │
│    "The Wanderer"           │  ← Baskerville, navy
│    myth text in italic      │
│                             │
│    ─── AXES ───             │  ← section divider
│    [8 axis bars]            │
│                             │
│    ─── SEED PHRASE ───      │
│    "word word word"         │  ← mono, gold accent
│                             │
│    [ Copy Card ]            │  ← beveled button
│                             │
└─────────────────────────────┘
```

**Files to edit**:
- `src/components/ResultsScreen.tsx`
- `src/components/ConstellationChart.tsx`
- `src/components/AllAxesDisplay.tsx`
- `src/components/AxisDisplay.tsx`
- `src/components/SeedPhraseDisplay.tsx`

---

## Results Screen — Design Direction (WIP)

The wireframes in `?design` didn't land. Here's the refined thinking:

### What the results screen IS:
- **A document being handed to you** — not a dashboard
- **Still in the therapist frame** — they deliver results, speak final words
- **Your file** — manila folder, typewritten, institutional
- **A mystery hook** — "The Reading Room will review your file"

### What was missing from wireframes:
- Therapist's voice closing the narrative loop
- Physical paper/document feel (not digital UI)
- Institutional bureaucracy — stamps, file numbers, maybe redactions
- The sense that you're being *evaluated*, there's more to come
- John Lilly "Programming the Human Biocomputer" is the vibe — 70s research paper, typed documents, not green terminal

### Aesthetic references:
- Manila folder with typed label
- Typewriter font (Courier) for clinical notes
- Rubber stamp marks ("CLASSIFIED", "FOR SUBJECT REVIEW")
- Cream/beige paper texture
- Hand-annotated margins?
- The constellation as a diagram *in* the document

### Emotional beat:
You've just lived a lifetime. Made choices about AI, mortality, merging. Now the therapist hands you your file, says something enigmatic, and the door opens. What's on the other side?

### Structure idea:
1. Therapist's closing line (text on black, like interstitials)
2. Transition to: your dossier appears
3. Dossier contains: constellation, axes explained, seed phrase
4. Final line: "The Reading Room will be in touch."
5. Share/copy card functionality

### Open questions:
- How much does the therapist say vs. the dossier speak for itself?
- Generated art for the user? (mentioned wanting "cool art about them")
- Does the dossier animate in like being placed on a desk?
- Shareable card — is it the whole dossier or a condensed version?

---

## Implementation Order

1. **TextPanel.tsx** — biggest impact, core game experience
2. **ChoiceList.tsx** — beveled choice buttons
3. **TitleScreen.tsx** — quick win, sets the tone
4. **ResultsScreen.tsx** — can diverge stylistically, do last

---

## Reference

All patterns are implemented in:
```
src/pages/DesignPlayground.tsx
```

Section: "🎮 Full Game UI Mockup — Plastic Frame Style"

Copy CSS from there. Delete the playground when done (or keep for future iteration).

---

## Principles (from CLAUDE.md)

- **Less is more**. Restraint. Every element earns its place.
- **Unstyled first** during checklist work — this is the styling pass.
- The game has ~3 UI surfaces. Don't invent more.
