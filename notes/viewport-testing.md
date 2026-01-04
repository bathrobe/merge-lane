# Viewport Testing Guide

Testing matrix for responsive layout verification using Claude in Chrome.

---

## Viewport Matrix

| # | Viewport | Device | Priority | Notes |
|---|----------|--------|----------|-------|
| 1 | 375×667 | iPhone SE | High | Smallest supported phone |
| 2 | 390×844 | iPhone 14 | High | Modern phone portrait |
| 3 | 667×375 | iPhone SE landscape | Critical | Tests max-h-[60vh] cap |
| 4 | 768×1024 | iPad portrait | Medium | Breakpoint edge case |
| 5 | 1024×768 | iPad landscape | Medium | Desktop layout start |
| 6 | 1280×800 | Small laptop | Medium | Safe zone cropping test |
| 7 | 1920×1080 | External monitor | Low | Max viewport test |

---

## Test Flow (Each Viewport)

### Setup
1. Resize browser to target dimensions
2. Navigate to `http://localhost:5173`
3. Wait for page load

### Game Screen Checks
1. Advance through 2-3 story beats
2. Verify:
   - [ ] No horizontal scrollbar
   - [ ] Background image visible (mobile: full, desktop: cropped gracefully)
   - [ ] Text panel readable
   - [ ] Choices visible and tappable (44px minimum height)
   - [ ] Story text doesn't overflow

### Results Screen Checks
1. Complete story or navigate to results
2. Verify:
   - [ ] Constellation chart fits
   - [ ] All axes readable
   - [ ] Card fits within viewport
   - [ ] Copy/Download buttons tappable

### Screenshot
Take screenshot for documentation after each viewport test.

---

## Mobile-Specific Checks

### Portrait (375×667, 390×844)
- Image should display at 4:3 aspect ratio, no cropping
- Text panel fills remaining height
- Stacked layout (image above, text below)

### Landscape (667×375)
- `max-h-[60vh]` should cap image height
- Image letterboxed (doesn't fill width)
- Text panel visible below image
- No vertical scrollbar on body

---

## Desktop-Specific Checks

### Breakpoint (768px+)
- Side-by-side layout (image left, text right)
- Text panel fixed at 384px width
- Background uses `bg-cover` with `bg-[30%_50%]` focal point
- Safe zone content (center-left 70%) visible

### Large Viewports (1280px+)
- Verify background cropping doesn't lose important content
- Text panel scales appropriately
- No excessive whitespace

---

## Common Issues

| Issue | Viewport | Fix |
|-------|----------|-----|
| Horizontal scroll | Mobile | Check overflow-x on containers |
| Image overflow | Landscape | Verify max-h-[60vh] applied |
| Text truncated | Small mobile | Check text-sm responsive classes |
| Buttons too small | All mobile | Ensure min-h-[44px] on tap targets |
| Layout not switching | 768px | Check md: breakpoint classes |

---

## Claude in Chrome Commands

```
# Resize window
mcp__claude-in-chrome__resize_window(width, height, tabId)

# Take screenshot
mcp__claude-in-chrome__computer(action: "screenshot", tabId)

# Navigate
mcp__claude-in-chrome__navigate(url, tabId)

# Click
mcp__claude-in-chrome__computer(action: "left_click", coordinate: [x, y], tabId)
```
