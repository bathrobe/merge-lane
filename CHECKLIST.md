# Share Modal Implementation

Move sharing options (Download, Substack signup) into a modal that opens after copying the card.

## Behavior Spec

**Trigger**: Click "Copy Card" button
**Action**:
1. Immediately copy card image to clipboard
2. Open modal showing success + additional options

**Modal contents**:
- Success message ("Copied to clipboard!")
- "Download as Image" link
- Substack signup embed

**Outside modal** (stays on main ResultsScreen):
- "Start over" button

**Close modal**: X button OR click outside (standard modal behavior)

---

## Checklist

- [x] 1. Create `src/components/ShareModal.tsx`
  - Props: `isOpen: boolean`, `onClose: () => void`, `onDownload: () => void`, `downloadStatus: "idle" | "downloading"`
  - Render a modal overlay (fixed position, dark backdrop)
  - Modal content box centered on screen
  - X button in top-right corner
  - Click on backdrop calls `onClose`
  - Contains: success message, download button, `<SubstackSignup />` component

- [x] 2. Update `src/components/ResultsScreen.tsx`
  - Add `isModalOpen` state (boolean, default false)
  - Modify `handleCopyCard`: after successful copy, set `isModalOpen` to true
  - Remove `<SubstackSignup />` from main render (moves to modal)
  - Remove "Download as Image" button from main render (moves to modal)
  - Keep "Start over" button in main render
  - Render `<ShareModal />` with appropriate props
  - Pass `handleDownloadCard` to modal's `onDownload` prop

- [x] 3. Test in browser
  - Click "Copy Card" → image copies → modal opens
  - Modal shows success message, download link, Substack embed
  - Click X → modal closes
  - Click backdrop → modal closes
  - "Start over" visible on main screen (not in modal)

- [x] 4. Commit changes

---

## Files to modify

- `src/components/ResultsScreen.tsx` — add modal state, restructure JSX
- `src/components/ShareModal.tsx` — new file

## Notes

- Keep styling minimal (unstyled-first approach per CLAUDE.md)
- Modal should trap focus for accessibility (nice-to-have, not required)
- No external modal library needed — simple div with fixed positioning
