# Implementation Checklist

Derived from `docs/tech-spec.md` and `docs/PLAN.md`. Work through in order.

---

## Phase 1: Foundation

- [x] 1. Scaffold Vite + React + TypeScript project with pnpm
- [x] 2. Install dependencies: inkjs, tailwindcss, shadcn/ui
- [x] 3. Create folder structure per PLAN.md (components/, hooks/, lib/, story/, assets/)
- [x] 4. Create `lib/tags.ts` — parse `["background: lab"]` → `{ background: "lab" }`

## Phase 2: Ink Integration

- [x] 5. Create `hooks/useInkStory.ts` — wrap inkjs, expose `{ text, choices, tags, variables, continue, choose, isEnded }`
- [x] 6. Create stub `story/episode1.ink` with placeholder narrative + one background tag
- [x] 7. Set up ink compilation script (`pnpm run ink:compile`)
- [x] 8. Wire up `useInkStory` in App.tsx, verify story loads

## Phase 3: Game Layout

- [x] 9. Create `components/SceneBackground.tsx` — full-bleed image from `tags.background`
- [x] 10. Create `components/StoryText.tsx` — render narrative prose
- [x] 11. Create `components/ChoiceList.tsx` — render choice buttons, call `choose(index)`
- [x] 12. Create `components/TextPanel.tsx` — right-side panel containing StoryText + ChoiceList
- [x] 13. Create `components/GameView.tsx` — layout combining SceneBackground + TextPanel
- [x] 14. Integrate GameView in App.tsx, test full game loop

## Phase 4: Seed Phrase System

- [x] 15. Create `lib/wordlists/seedWords.ts` — 2048 BIP-39 style words
- [x] 16. Create `lib/seedPhrase.ts` — `encode()` and `decode()` functions (32 bits → 3 words)

## Phase 5: Results Screen

- [x] 17. Create `components/AxisDisplay.tsx` — single axis with dot position
- [x] 18. Create `components/AllAxesDisplay.tsx` — all 8 axes rendered
- [x] 19. Create `components/ConstellationChart.tsx` — 8 dots plotted circularly
- [x] 20. Create `lib/constellation.ts` — call LLM for constellation name + myth
- [x] 21. Create `components/SeedPhraseDisplay.tsx` — show 3 words prominently
- [x] 22. Create `components/ResultsScreen.tsx` — full layout per PLAN.md mockup
- [x] 23. Wire up results: when `# show: results` tag fires, switch to ResultsScreen

## Phase 6: Actions & Polish

- [x] 24. Add copy-card functionality (PNG to clipboard)
- [x] 25. Add Substack email signup embed
- [x] 26. Add "Start over" button (reset story state)
- [x] 27. Add placeholder background images to assets/backgrounds/
- [ ] 28. End-to-end test: play through stub story → see results → copy card

---

## Notes

- Each item should result in a working (if incomplete) app
- Verify in browser before checking off
- Commit after each item
- If an item is too big, break into sub-items (1a, 1b, etc.)
