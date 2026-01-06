---
name: scholastic-bg
description: Generate background images for the Scholastic Fair visual novel with consistent late-90s CD-ROM aesthetic. Use when creating or regenerating background images for scenes. Wraps prompts with Style Lock prefix/suffix, generates at 4:3 2K, analyzes the result, and saves to public/backgrounds/. Supports reference images and model choice (nano-banana or flux2).
---

# Scholastic Background Generator

Generate background images with consistent 90s educational CD-ROM aesthetic for the Scholastic Fair visual novel.

## Quick Start

```
/scholastic-bg "sparse therapist office with two chairs" office
/scholastic-bg "museum corridor with floating specimens" corridor -r /path/to/reference.jpg
/scholastic-bg "scene description" scene_name --model flux2
```

## Model Choice

| Model | Command | Best For |
|-------|---------|----------|
| **nano-banana** (default) | `--model nano` | 90s aesthetic, style lock compliance |
| **flux2** | `--model flux2` | Multi-reference consistency (up to 8 images) |

**Recommendation:** Use nano-banana (Gemini) for this project — it follows the "1997 educational software" style lock better. Flux 2 tends toward modern Pixar-style rendering.

## Workflow

### 1. Read Style Lock

Load [references/style-lock.md](references/style-lock.md) for the prompt prefix, suffix, and palette.

### 2. Build the Prompt

Wrap the user's scene description:

```
{STYLE_LOCK_PREFIX}

{user's scene description}

{STYLE_LOCK_SUFFIX}
```

### 3. Generate Image

**With nano-banana (default):**
```bash
uv run ~/.claude/skills/nano-banana/scripts/generate_image.py \
  "{wrapped_prompt}" \
  -a 4:3 \
  -s 2K \
  [-r {reference_image_path}] \
  -o /Users/joe/Developer/scholastic-fair/public/backgrounds/{scene_name}.jpg
```

**With flux2:**
```bash
uv run ~/.claude/skills/flux2/scripts/generate_image.py \
  "{wrapped_prompt}" \
  -a 4:3 \
  -s 2MP \
  [-r {reference_image_path}] \
  -o /Users/joe/Developer/scholastic-fair/public/backgrounds/{scene_name}.jpg
```

Note: nano-banana uses `-s 2K`, flux2 uses `-s 2MP` (same resolution, different syntax).

### 4. Verify & Analyze

Read the generated image using the Read tool and provide analysis:

```
Read: {output_path}
```

Evaluate and report to the user:
- **Style adherence**: Does it match the late-90s CD-ROM aesthetic?
- **Clean frame**: Any UI elements, text, or interface chrome that shouldn't be there?
- **Composition**: Does it work as a background? Important elements not cropped at edges?
- **Mood**: Does it fit the scene description?

If issues found, suggest specific prompt tweaks and offer to regenerate.

## Output

- **Format**: `.jpg`
- **Location**: `public/backgrounds/{scene_name}.jpg`
- **Naming**: lowercase, underscores for spaces (e.g., `waiting_room.jpg`)

## References

- [style-lock.md](references/style-lock.md) — Prompt prefix/suffix, color palette
- [composition.md](references/composition.md) — Safe zone rules, verification checklist
