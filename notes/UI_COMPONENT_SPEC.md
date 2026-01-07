# UI Component Spec

Reference implementation: `src/pages/DesignPlayground.tsx`

## Design Language

**Theme**: Late-90s educational software as faux-physical device. Teal plastic chassis, cream paper viewport, beveled buttons, hardware aesthetic. Think Kid Pix meets John Lilly biocomputer.

**Principle**: Less is more. Every element earns its place.

---

## Color Palette

```ts
const PALETTE = {
  // Core (from Style Lock.md)
  institutionalTeal: "#5B8A8A",
  warmBrown: "#8B7355",
  softBeige: "#D4C5A9",
  mutedGold: "#C9A227",
  deepNavy: "#2C3E50",
  white: "#FFFFFF",
  cream: "#F5F0E6",

  // Clyde accent (for subtle recurring touches)
  clydePeach: "#ECAB8C",
};
```

### Derived Colors (from DesignPlayground)

```ts
// Teal frame gradients
tealLight: "#7BA3A3"    // gradient top
tealMid: "#5B8A8A"      // PALETTE.institutionalTeal
tealDark: "#3D6B6B"     // gradient bottom
tealDarker: "#2D4545"   // border dark side

// Beige gradients
beigeLight: "#F5EDE0"   // button highlight
beigeMid: "#D4C5A9"     // PALETTE.softBeige
beigeDark: "#A89870"    // border dark side

// Gold gradients
goldLight: "#E8C84A"    // gradient top
goldMid: "#C9A227"      // PALETTE.mutedGold
goldDark: "#A8841F"     // gradient bottom
goldBorder: "#806A15"   // border dark side

// Hardware chrome
ledGreen: "#4AE04A"     // status indicators
```

---

## Typography

```ts
// Body text (narrative, dialogue)
fontFamily: "Libre Baskerville, serif"  // font-baskerville
color: PALETTE.deepNavy

// UI text (buttons, labels, display)
fontFamily: "Nunito, sans-serif"        // font-nunito
fontWeight: 600-700

// Monospace (hardware labels, chapter display)
fontFamily: "monospace"
```

---

## Core Components

### 1. Frame

The teal plastic wrapper with corner rivets.

```tsx
// Key styles from DesignPlayground lines 2186-2213
style={{
  background: `linear-gradient(180deg, #7BA3A3 0%, #5B8A8A 50%, #3D6B6B 100%)`,
  padding: '16px',
  border: `5px solid`,
  borderColor: `#9DBDBD #2D4545 #2D4545 #9DBDBD`,  // light TL, dark BR
  boxShadow: `
    inset 0 3px 6px rgba(255,255,255,0.2),
    inset 0 -3px 6px rgba(0,0,0,0.3),
    10px 10px 0 rgba(0,0,0,0.35)
  `,
}}

// Corner rivets (4 corners)
style={{
  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
}}
```

### 2. Viewport

The cream inset content area (paper-in-device feel).

```tsx
// Key styles from DesignPlayground lines 2122-2130
style={{
  background: PALETTE.cream,  // #F5F0E6
  border: `4px solid`,
  borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,  // INVERTED from frame (dark TL, light BR = inset)
  boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
  borderRadius: '0.75rem',  // rounded-lg
}}
```

### 3. HardwareBar

Top strip of sidebar with chapter label, title, mute button.

```tsx
// Key styles from DesignPlayground lines 2054-2102
style={{
  background: 'linear-gradient(180deg, #5D8A8A 0%, #4D7A7A 100%)',
  borderBottom: '2px solid #3D6B6B',
}}

// Embossed label style
style={{
  background: 'linear-gradient(180deg, #4D7A7A 0%, #3D6B6B 100%)',
  color: '#9DBDBD',
  border: '1px solid #2D5555',
  boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.3)',
  textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
}}
```

### 4. MuteButton

Hardware-styled toggle in HardwareBar. Use `clydePeach` as accent when unmuted.

```tsx
// Styled as physical button on chassis
// Peach glow/accent when audio is ON
// Muted = gray/inactive appearance
```

---

## Button System

### Primary Button (Gold)

```tsx
// Default - from lines 2456-2476
className="font-nunito font-bold px-6 py-3 rounded-lg transition-all duration-100"
style={{
  background: `linear-gradient(180deg, #E8C84A 0%, #C9A227 50%, #A8841F 100%)`,
  color: PALETTE.deepNavy,
  border: `3px solid`,
  borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
  boxShadow: `
    inset 2px 2px 0 rgba(255,255,255,0.4),
    inset -2px -2px 0 rgba(0,0,0,0.2),
    4px 4px 0 rgba(0,0,0,0.3)
  `,
  textShadow: '1px 1px 0 rgba(255,255,255,0.3)',
}}

// Hover
hover:brightness-110 hover:-translate-y-0.5
// + slightly larger shadow

// Active (pressed) - INVERT bevel
style={{
  background: `linear-gradient(180deg, #A8841F 0%, #C9A227 50%, #E8C84A 100%)`,  // flipped
  borderColor: `#806A15 #F0D860 #F0D860 #806A15`,  // flipped
  boxShadow: `
    inset 2px 2px 4px rgba(0,0,0,0.3),
    inset -1px -1px 0 rgba(255,255,255,0.2),
    1px 1px 0 rgba(0,0,0,0.2)
  `,
  transform: 'translateY(2px)',
}}

// Focus
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227]
```

### Secondary Button (Beige)

```tsx
// Default - from lines 2552-2566
style={{
  background: `linear-gradient(180deg, #E8D9C0 0%, #D4C5A9 100%)`,
  color: PALETTE.deepNavy,
  border: `3px solid`,
  borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
  boxShadow: `
    inset 2px 2px 0 rgba(255,255,255,0.5),
    inset -2px -2px 0 rgba(0,0,0,0.1),
    4px 4px 0 rgba(0,0,0,0.25)
  `,
}}

// Active - same invert pattern as primary
```

### Choice Button

```tsx
// Default - from lines 2609-2624
className="font-nunito font-semibold px-3 py-2 rounded-lg text-left text-sm transition-all duration-100"
style={{
  background: `linear-gradient(180deg, #F5EDE0 0%, #D4C5A9 100%)`,
  color: PALETTE.deepNavy,
  border: `3px solid`,
  borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
  boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.15)`,
}}

// Hover - slides right
hover:translate-x-1 hover:brightness-105

// Active
active:translate-x-0.5 active:brightness-95
// + invert bevel
```

---

## Layout

### Desktop (>= 1024px)

```
┌─────────────────────────────────────────────────┐
│  ┌─────────────────────┬──────────────────────┐ │
│  │                     │ [HardwareBar]        │ │
│  │   Scene Area        ├──────────────────────┤ │
│  │   (background img)  │ [Viewport]           │ │
│  │                     │  - narrative text    │ │
│  │                     │  - choices           │ │
│  │                     │                      │ │
│  └─────────────────────┴──────────────────────┘ │
└─────────────────────────────────────────────────┘
        flex-1                  w-80 (320px)
```

### Mobile (< 1024px)

```
┌─────────────────────┐
│   Scene Area        │
│   (background img)  │
├─────────────────────┤
│ [HardwareBar]       │
├─────────────────────┤
│ [Viewport]          │
│  - narrative text   │
│  - choices          │
└─────────────────────┘
```

---

## Text Display

### Reveal
- Paragraph fade-in (sequential, ~200ms per paragraph)
- CSS animation, no skip logic needed

### Scrolling
- Long text scrolls within viewport
- `overflow-y: auto` on text container

### Color Tags (Ink)
```ink
"Hello!" #color:teal
Some narration.
"What do you think?" #color:peach
```

Map in React:
```ts
const TEXT_COLORS = {
  teal: PALETTE.institutionalTeal,
  peach: PALETTE.clydePeach,
  gold: PALETTE.mutedGold,
  // add as needed
};
```

---

## Transitions

- **Story beat changes**: 200-300ms fade on viewport content
- **Choice selection**: brief fade out, then fade in new content
- Keep it subtle — no flashy animations

---

## Screens

### Title Screen

Reference: "Title Screen — Device Startup Edition" (lines 2178-2350)

- Frame with corner rivets
- Top hardware strip (optional LEDs, model label)
- Cream viewport with:
  - Title: "Utopian Scholastic" (font-baskerville)
  - Subtitle: "Interactive Assessment Program" or similar
  - Primary button: "New Session"
  - Secondary button: "Resume Session" (if localStorage save exists)
- Bottom hardware strip (copyright, version)

### Game Screen

Reference: "Narrative Sidebar — Hardware Frame Edition" (lines 2024-2176)

- Scene area (left/top): static background image
- Sidebar (right/bottom): Frame containing:
  - HardwareBar (chapter label, mute button)
  - Viewport:
    - Scrollable narrative text area
    - Choice buttons area (gradient background)

### Results Screen

**Status: TBD — Still designing**

Leading candidate: "Variation 2: Diagnostic Terminal" (lines 1608-1865)

#### What the results screen IS
- **A document being handed to you** — not a dashboard, not a score screen
- **Still in the therapist frame** — they deliver results, speak final words
- **Your file** — institutional, clinical, slightly ominous
- **A mystery hook** — "The Reading Room will review your file"

#### Emotional beat
You've just lived a lifetime. Made choices about AI, mortality, merging. Now the therapist hands you your file, says something enigmatic, and the door opens. What's on the other side?

#### Aesthetic direction
John Lilly "Programming the Human Biocomputer" — 70s research paper, typed documents, institutional.

- Teal hardware frame (consistent with game UI)
- Cream paper viewport (the "document")
- Typewriter/teletype text for clinical notes
- File numbers, status indicators
- The constellation/sigil as a diagram *in* the document
- Seed phrase as "Unit Identifier" or "Recovery Code"

#### Structure idea
1. Therapist's closing line (text on black, like interstitials)
2. Transition: dossier appears (fade in, or "placed on desk" animation?)
3. Dossier contains: sigil, classification name, assessment text, axes, seed phrase
4. Final hook: "The Reading Room will be in touch."
5. Share/copy functionality

#### Open questions
- [ ] How much does therapist say vs. dossier speak for itself?
- [ ] Does dossier animate in (placed on desk) or just fade?
- [ ] Shareable card — whole dossier or condensed version?
- [ ] Any generated art for the user? (mentioned wanting "cool art about them")

---

## Component File Structure (proposed)

```
src/components/ui/
├── Frame.tsx           # Teal plastic wrapper + rivets
├── Viewport.tsx        # Cream inset content area
├── HardwareBar.tsx     # Top strip with controls
├── MuteButton.tsx      # Hardware-styled audio toggle
├── buttons/
│   ├── PrimaryButton.tsx
│   ├── SecondaryButton.tsx
│   └── ChoiceButton.tsx
├── NarrativeText.tsx   # Text display with color tags + fade-in
└── index.ts            # Barrel exports

src/layouts/
├── GameLayout.tsx      # Scene + Sidebar composition
└── TitleLayout.tsx     # Title screen composition
```

---

## Open Questions

- [ ] Exact breakpoint for mobile (1024px proposed)
- [ ] Mute button icon/appearance details
- [ ] Results screen final design
- [ ] Any additional Clyde peach accent placements

---

## Changelog

- **2026-01-06**: Initial spec from DesignPlayground exploration
