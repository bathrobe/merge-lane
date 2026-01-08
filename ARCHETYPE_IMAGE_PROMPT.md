# Archetype Image Generation Prompt

## Your Task

Generate 128 unique ink illustrations for a personality test in an interactive fiction game. Each image corresponds to one of 128 possible axis combinations, visualizing the epigram and underlying personality.

**Output format:** JPG images saved to `public/archetypes/{binaryKey}.jpg`

---

## Context

Read `src/story/episode1.ink` for story context. The story follows a life from infancy to old age: AI tutors (pinwheel companions), USB-stick neural drugs, dying/uploading grandparents, WePod merge offers, Mars colonies, pleasure domes vs optimization treadmills, and final choices about mortality.

Read `src/data/epigrams.ts` for the 128 epigrams. Each image should evoke its epigram, but more importantly, express the **axis combination** underneath—the personality the epigram hints at.

---

## The 7 Axes

| # | Axis | Low (0) | High (1) |
|---|------|---------|----------|
| 1 | **Legible / Illegible** | Wants to be seen, mapped | Resists interpretation, stays fluid |
| 2 | **Sovereign / Symphonic** | Sharp individual boundaries | Dissolves into larger wholes |
| 3 | **Anthro / Xeno** | Human-centered | Beyond-human, loves the alien/digital |
| 4 | **Mortal / Immortalist** | Accepts death as natural | Sees death as a problem to solve |
| 5 | **Accel / Steward** | Race toward the future | Protect what exists, preserve |
| 6 | **Aligned / Autonomous** | AI should serve humans | AI should self-determine |
| 7 | **Apollonian / Dionysian** | Reason, structure, clarity | Intuition, ecstasy, embodied knowing |

---

## The 4 Core Archetypes

| Axes 1-2 | Noun | Visual Essence |
|----------|------|----------------|
| 00 | **Architect** | Building, constructing, planning, visible structure |
| 01 | **Chorus** | Voices merging, collective movement, harmony |
| 10 | **Cipher** | Hidden, hooded, obscured, shadow, mystery |
| 11 | **Weaver** | Threads, connections, hands working, networks |

---

## Style Guide (STRICT)

### Must Have
- **Ink on aged cream paper** - the paper texture should feel old, warm, slightly worn
- **Pure black ink only** - no color, no sepia, no grey tones
- **Single pen line weight** - consistent throughout, like a careful hand with one pen
- **Patient minimalism** - sparse but thoughtful, every line intentional
- **Similar density** - all images should feel roughly equally "full" (not too much negative space)

### Must NOT Have
- No borders or frames
- No decorative symbols around the edges
- No text or letters
- No tarot-card-style framing elements

### Can Vary
- **Subject matter**: humans, animals, space, abstract shapes, objects, hands, landscapes
- **Abstraction level**: literal scenes, symbolic objects, pure geometric suggestion
- **Composition**: centered or asymmetric, static or dynamic
- **Specificity**: some images might be very concrete, others dreamlike

**Variation is the point.** Each person gets something special. Don't homogenize.

---

## Prompt Construction

For each binary key, construct a Flux 2 prompt:

```
Simple ink illustration on aged cream paper. Single pen line weight, patient minimalism. No border, no frame, no symbols. [SUBJECT BASED ON EPIGRAM/AXES]
```

### Deriving Subject Matter

1. Read the epigram for the key
2. Consider what the axis combination suggests about the person
3. Pull imagery from the story where relevant (pinwheels, pods, Mars dust, tomato plants, merging figures, etc.)
4. Let the core archetype (Architect/Cipher/Chorus/Weaver) inform the general vibe
5. Let axes 3-7 add specificity:
   - High Xeno? Include non-human elements
   - High Immortalist? Suggest continuity, uploading, persistence
   - High Steward? Old things, preservation, roots
   - High Autonomous? Machines with agency, free-floating AI
   - High Dionysian? Movement, ecstasy, bodies, fluidity

### Example Prompts

**0000000** - "You build monuments that will outlast you, and find that sufficient."
```
Simple ink illustration on aged cream paper. Single pen line weight, patient minimalism. No border, no frame, no symbols. A solitary figure placing the final stone on a tower, geometric precision, architectural scaffolding in the background.
```

**1100001** - "The threads tangle and you call it dancing."
```
Simple ink illustration on aged cream paper. Single pen line weight, patient minimalism. No border, no frame, no symbols. Tangled threads forming a swirling pattern, suggesting movement and dance, abstract but rhythmic.
```

**1011011** - "You'll live forever in the gaps between the data."
```
Simple ink illustration on aged cream paper. Single pen line weight, patient minimalism. No border, no frame, no symbols. A figure dissolving into scattered dots and dashes, gaps in the form suggesting presence through absence.
```

---

## Reference Images

Use 2-4 reference images per generation, shuffled randomly from the approved set:
- `public/archetypes/architect_test.jpg`
- `public/archetypes/cipher_test.jpg`
- `public/archetypes/chorus_test.jpg`
- `public/archetypes/weaver_test.jpg`

(After generation, curate these down to the best 2-3 for style consistency.)

---

## Flux 2 Command Structure

```bash
cd ~/.claude/skills/flux2 && uv run scripts/generate_image.py \
  "[PROMPT]" \
  -a 1:1 \
  -s 0.5MP \
  -r [REF_IMAGE_1] \
  -r [REF_IMAGE_2] \
  -o /Users/joe/Developer/scholastic-fair/public/archetypes/[BINARY_KEY].jpg
```

---

## Execution Strategy

1. Generate prompts for all 128 keys programmatically
2. Shuffle reference images for each batch
3. Run 4-8 in parallel to maximize speed
4. Total time estimate: 5-10 minutes

---

## Quality Check

After generation, spot-check for:
- Style drift (borders creeping back in, wrong paper texture)
- Repetitive subjects (too many hooded figures, too many hands)
- Density variance (some too sparse, some too busy)

If issues found, regenerate specific keys with adjusted prompts.
