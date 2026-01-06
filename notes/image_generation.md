# Image Generation Guide — Scholastic Fair

> [!info] Skill version available
> Core workflow now in `/scholastic-bg` skill. This doc kept for reference/context.

## Technical Specs

| Setting | Value | Rationale |
|---------|-------|-----------|
| **Aspect Ratio** | `4:3` | Matches image area range (1.1:1 to 1.4:1) across viewports |
| **Resolution** | `2K` default, `4K` for key scenes | 2K handles retina; 4K for scenes that need extra detail |
| **Format** | `.jpg` | API returns JPEG; mismatched extensions cause read errors |
| **Output path** | `public/backgrounds/{scene-name}.jpg` | Must match Ink `# background: {scene-name}` tags |

## Command Template

```bash
uv run ~/.claude/skills/nano-banana/scripts/generate_image.py \
  "{prompt}" \
  -a 4:3 \
  -s 2K \
  -o /Users/joe/Developer/scholastic-fair/public/backgrounds/{scene-name}.jpg
```

---

## Composition Rules

- Keep important elements away from extreme edges (may be cropped on any viewport)
- Works as a **background** — leave visual breathing room for UI overlay
- Use reference images (`-r` flag) for consistent style

---

## Style Guidelines

### Visual Tone
- Atmospheric, slightly surreal
- Muted or desaturated palette with selective color accents
- Soft lighting, avoid harsh shadows
- Painterly or illustrated feel (not photorealistic)
- Evokes psychological introspection

### Consistent Elements
- Indoor institutional spaces (offices, corridors, waiting rooms)
- Liminal, slightly uncanny atmosphere
- Empty or sparsely populated (focus on environment, not crowds)
- Time of day: ambiguous interior lighting or golden hour exterior

### Prompt Structure

```
[scene description], [style keywords], [technical]

Example:
"A sparse therapist's office with two chairs facing each other,
soft window light from the left, muted earth tones,
painterly illustration style, atmospheric,
slightly surreal, cinematic visual novel background"
```

---

## Naming Convention

Match Ink background tags exactly:

| Ink Tag | Filename |
|---------|----------|
| `# background: office` | `office.jpg` |
| `# background: corridor` | `corridor.jpg` |
| `# background: waiting_room` | `waiting_room.jpg` |
| `# background: transition` | (no image—renders as solid black via CSS) |

Use lowercase, underscores for spaces, no special characters.

---

## Workflow

1. **Check Ink file** for `# background:` tags to know what scenes need images
2. **Read Style Lock** (`docs/vault/Style Lock.md`) — paste prefix/suffix into prompt
3. **Draft prompt** following structure above
4. **Generate** with 4:3, 2K
5. **Verify result**: Check style adherence, no UI elements, good composition
6. **Test in browser** at multiple viewport widths if needed

---

## Quick Reference

```bash
# Standard scene
uv run ~/.claude/skills/nano-banana/scripts/generate_image.py \
  "description here, painterly style, atmospheric" \
  -a 4:3 -s 2K \
  -o /Users/joe/Developer/scholastic-fair/public/backgrounds/scene_name.jpg

# Hero/key scene (higher res)
uv run ~/.claude/skills/nano-banana/scripts/generate_image.py \
  "description here" \
  -a 4:3 -s 4K \
  -o /Users/joe/Developer/scholastic-fair/public/backgrounds/scene_name.jpg

# With style reference
uv run ~/.claude/skills/nano-banana/scripts/generate_image.py \
  "description here, in this style" \
  -a 4:3 -s 2K \
  -r /path/to/reference.jpg \
  -o /Users/joe/Developer/scholastic-fair/public/backgrounds/scene_name.jpg
```

---

## Viewport Testing Checklist

After generating, verify in browser:
- [ ] 1920×1080 — full desktop, widest crop
- [ ] 1440×900 — laptop, medium crop
- [ ] 1280×800 — small laptop, most crop on sides
- [ ] Important content visible in all three?

---

## Available Aspect Ratios (Nano Banana Pro)

`1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`

**Use `4:3` for this project.**

## Available Resolutions

`1K`, `2K`, `4K`

**Use `2K` default, `4K` for hero scenes.**
