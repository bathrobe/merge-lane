# Style Lock

## Prompt Prefix

Paste at START of every image prompt:

```
Pre-rendered 3D background, late 1990s educational CD-ROM aesthetic. Low-poly
geometry with soft plastic textures—PS1-era 3D but warmer, more optimistic.
Utopian scholastic vibe: Dorling Kindersley meets Myst meets children's science
museum. Muted palette: institutional teals, warm browns, beige, touches of gold.
Soft diffused lighting, no harsh shadows. First-person POV from someone present
in the scene (sitting at a table, standing in a room, etc.) — no visible player
character, but camera positioned where a person would naturally be.

CRITICAL: Pure scene only—absolutely no UI elements, no text, no labels, no buttons,
no title bars, no interface chrome of any kind. This is a background image, not a
screenshot. No split panels, no dividers, no sidebars.

COMPOSITION: Keep important elements away from extreme edges of the frame. The image
may be cropped on any edge depending on viewport.
```

## Prompt Suffix

Paste at END of every prompt:

```
4:3 aspect ratio. Render style: pre-rendered 3D background like late-90s point-and-click
adventure game or educational CD-ROM. Low-poly geometry, soft institutional lighting,
256-color palette feel. No text, no UI, no interface elements anywhere in frame.
```

## Hex Palette

| Color | Hex | Use |
|-------|-----|-----|
| Institutional Teal | `#5B8A8A` | Walls, backgrounds |
| Warm Brown | `#8B7355` | Wood, furniture |
| Soft Beige | `#D4C5A9` | Highlights, paper |
| Muted Gold | `#C9A227` | Accents, warmth |
| Deep Navy | `#2C3E50` | Shadows, depth |

## Environment Vocabulary (MOOD REFERENCE ONLY)

**Don't paste directly into prompts — too literal. Use as mental reference:**

> Nature Company store interior, 1990s museum aesthetic, teal and amber lighting,
> suspended specimens, marble pedestals, warm wood display cases, theatrical track
> lighting, educational exhibit design, dusk atmosphere, mysterious and inviting,
> children's museum energy

---

## Phase-Specific Modifiers

### Middle Age Phase (Chrome + Iridescent)

**The challenge:** Chrome, pearlescent, and iridescent aesthetics tend to trigger modern photorealistic rendering, fighting the 90s style lock.

**What DOESN'T work:**
- Direct words: "chrome", "pearlescent", "holographic" → triggers modern renders
- Modern references: "Blade Runner 2049", "luxury spa" → too contemporary
- 90s objects: "CD jewel case", "Lisa Frank" → too literal, model renders actual CDs
- Heavy low-poly stress: "N64", "visible polygons" → can trigger cel-shading (the flat cartoon look we don't want)

**What WORKS (v17 approach):**

1. **Use "Myst" as the anchor** — Myst backgrounds are lush, detailed, but unmistakably 90s CG. Reference "Myst-style landscape" or "like a 90s CG landscape render".

2. **Explicit negations** — Add: "NOT cel-shaded" (pixelated/blocky is fine, cel-shading is not)

3. **Specify rendering technique** — "Soft Gouraud shading, smooth gradients" (90s technique that produces smooth color transitions)

4. **Painterly vista language** — Describe views as "lush", "painterly", with specific colors: "turquoise ocean", "purple mountains", "gleaming towers catching golden light"

5. **Keep chrome/iridescent but soften** — "subtle rainbow iridescence", "chrome silver frame" work when combined with above techniques

**Working example (metaverse_morning_v17):**
```
Luxurious virtual bedroom pod. Chrome silver window frame, rainbow-iridescent
shimmering walls. First-person POV from a plush curved bed with soft pillows.
Large panoramic window with BREATHTAKING VISTA: lush Myst-style landscape —
turquoise ocean waters, distant purple mountains, gleaming futuristic city
towers catching golden sunrise light. The view is gorgeous, painterly, like
a 90s CG landscape render. Warm amber morning light fills the room.

Mid-1990s pre-rendered 3D style. Soft Gouraud shading, smooth gradients.
NOT cel-shaded. Think Myst backgrounds — detailed but clearly CG.
```
