# UI Implementation Checklist

> **Reference**: `notes/UI_COMPONENT_SPEC.md` for all style values
> **Preview**: `src/pages/DesignPlayground.tsx` for working examples
> **Principle**: Build primitives first, compose into layouts, then integrate into screens

---

# Phase 1: New Components (Safe for Parallel Work)

> These are all **new files** — no conflict risk with story/narrative work.

## Setup

- [x] Create `src/styles/palette.ts` — export PALETTE object with all hex values
- [x] Create `src/styles/theme.ts` — export derived colors (gradients, borders)
- [x] Verify Google Fonts loaded (Libre Baskerville, Nunito) in `index.html`
- [x] Add `font-baskerville` and `font-nunito` to Tailwind config if not present

## Core Components

### Frame
- [x] Create `src/components/ui/Frame.tsx`
- [x] Implement teal plastic gradient background
- [x] Add beveled border (light TL, dark BR)
- [x] Add outer box-shadow (inset highlights + hard drop shadow)
- [x] Add corner rivets (4 absolute-positioned divs with radial gradient)
- [x] Accept `children` prop for content
- [x] Export from `src/components/ui/index.ts`

### Viewport
- [x] Create `src/components/ui/Viewport.tsx`
- [x] Implement cream background
- [x] Add inverted beveled border (dark TL, light BR = inset)
- [x] Add inset box-shadow
- [x] Accept `children` prop
- [x] Export from barrel

### HardwareBar
- [x] Create `src/components/ui/HardwareBar.tsx`
- [x] Implement gradient background strip
- [x] Add bottom border
- [x] Layout: flex with justify-between
- [x] Slot for left content (chapter label)
- [x] Slot for center content (title emboss)
- [x] Slot for right content (mute button)
- [x] Export from barrel

### MuteButton
- [x] Create `src/components/ui/MuteButton.tsx`
- [x] Hardware-styled button appearance (beveled, plastic)
- [x] Accept `isMuted` and `onToggle` props
- [x] Peach accent (`clydePeach`) when audio ON
- [x] Gray/muted appearance when audio OFF
- [x] Icon (speaker/muted speaker)
- [x] Export from barrel

## Button System

### PrimaryButton (Gold)
- [x] Create `src/components/ui/buttons/PrimaryButton.tsx`
- [x] Default state: gold gradient, beveled border, drop shadow
- [x] Hover state: brightness + lift (`-translate-y-0.5`)
- [x] Active state: inverted bevel + press down (`translate-y-0.5`)
- [x] Focus state: ring with offset
- [x] Accept standard button props + `children`
- [x] Export from `src/components/ui/buttons/index.ts`

### SecondaryButton (Beige)
- [x] Create `src/components/ui/buttons/SecondaryButton.tsx`
- [x] Default state: beige gradient, beveled border
- [x] Hover/Active/Focus states (same pattern as Primary)
- [x] Export from barrel

### ChoiceButton
- [x] Create `src/components/ui/buttons/ChoiceButton.tsx`
- [x] Default state: beige gradient, left-aligned text, `▸` prefix
- [x] Hover state: slide right (`translate-x-1`)
- [x] Active state: partial slide + inverted bevel
- [x] Focus state: teal ring
- [x] Accept `onClick` and `children` props
- [x] Export from barrel

### Button barrel export
- [x] Create `src/components/ui/buttons/index.ts`
- [x] Re-export from `src/components/ui/index.ts`

## Text Display

### NarrativeText
- [x] Create `src/components/ui/NarrativeText.tsx`
- [x] Accept `paragraphs` array (text + optional color tag)
- [x] Render each paragraph with `font-baskerville`
- [x] Apply color from tag (`#color:teal` → `PALETTE.institutionalTeal`)
- [x] Implement fade-in animation (sequential, ~200ms stagger)
- [x] CSS keyframes for fade-in
- [x] Export from barrel

### Color tag parsing
- [x] Create `src/utils/parseInkTags.ts`
- [x] Function to extract `#color:X` from Ink text
- [x] Return `{ text: string, color?: string }`

## Layouts

### GameLayout
- [x] Create `src/layouts/GameLayout.tsx`
- [x] Desktop: flex row (scene left, sidebar right)
- [x] Mobile (<1024px): flex column (scene top, sidebar bottom)
- [x] Scene area: black background, holds `backgroundImage` prop
- [x] Sidebar: Frame + HardwareBar + Viewport
- [x] Accept props: `backgroundImage`, `hardwareBarContent`, `children` (for viewport content)

### TitleLayout
- [x] Create `src/layouts/TitleLayout.tsx`
- [x] Centered Frame with corner rivets
- [x] Optional top hardware strip
- [x] Cream Viewport for main content
- [x] Optional bottom hardware strip
- [x] Accept `children` for viewport content

---

# Phase 2: Integration (After Story Draft Stabilizes)

> **⚠️ WAIT** until narrative work is merged/stable. These refactor existing files that the story agent may touch.

## Screen Integration

### TitleScreen
- [x] Refactor `src/components/TitleScreen.tsx` to use TitleLayout
- [x] Title: "Utopian Scholastic" in `font-baskerville`
- [x] Subtitle in `font-nunito`
- [x] "New Session" as PrimaryButton
- [x] "Resume Session" as SecondaryButton (conditional on localStorage)
- [x] Remove old styling, use new components

### GameView
- [x] Refactor `src/components/GameView.tsx` to use GameLayout
- [x] Pass background image to scene area
- [x] HardwareBar with chapter label + MuteButton
- [x] Viewport with NarrativeText + ChoiceButtons
- [x] Wire up mute button to audio context
- [x] Remove old TextPanel/styling

### ChoiceList
- [x] Refactor `src/components/ChoiceList.tsx` to use ChoiceButton
- [x] Gradient background container for choices area
- [x] Map choices to ChoiceButton components
- [x] Remove old styling

### StoryText
- [x] Refactor or replace with NarrativeText component
- [x] Parse color tags from Ink
- [x] Apply fade-in animation
- [x] Remove old styling

### Hook Integration
- [x] Integrate `parseInkTags` with `useInkStory` or NarrativeText

## Transitions

- [x] Add CSS transition for viewport content fade (200-300ms)
- [x] Apply to story beat changes
- [x] Test that transitions feel subtle, not jarring

## Polish

- [x] Verify all components match DesignPlayground exactly
- [x] Test responsive layout at various breakpoints
- [x] Test on mobile device / simulator
- [x] Verify mute button integrates with audio system
- [x] Check color tag rendering with actual Ink content (parseInkTags ready; no #color: tags in story yet)
- [ ] Remove or archive DesignPlayground when done

## Cleanup

- [x] Delete any unused old component files
- [x] Remove inline styles replaced by new components
- [x] Update any imports to use barrel exports

---

## Notes

- Results screen is **TBD** — not included in this checklist
- Build components in isolation first, verify against DesignPlayground
- Integration comes after primitives are solid
- When in doubt, copy CSS from DesignPlayground verbatim
