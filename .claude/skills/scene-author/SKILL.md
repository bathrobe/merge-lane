---
name: scene-author
description: Step through Arc.md scenes procedurally — write Ink dialogue, generate backgrounds, get feedback at each step. Tracks progress via SCENE_CHECKLIST.md. Use when authoring new scenes for the visual novel.
---

# Scene Author

Procedural scene authoring with built-in revision loops. Heavy collaboration with Joe — nothing ships without approval.

## Quick Start

```
/scene-author              # Continue from next unchecked scene
/scene-author "The Circle" # Jump to specific scene
```

---

## Workflow

### 1. Find Next Scene

Read `SCENE_CHECKLIST.md` to find the first unchecked `[ ]` scene.

### 2. Load Context

**Always read these before drafting:**

1. **Arc.md** (`notes/Arc.md`) — Find the scene's section. Note:
   - Scene description and vibe
   - Which axes it should move
   - Emotional core
   - Any visual motifs mentioned

2. **Current story** (`src/story/episode1.ink`) — Understand:
   - Where this scene connects from
   - What knots/variables exist
   - The voice and tone established

3. **Existing backgrounds** — View relevant images in `public/backgrounds/`:
   - What visual language is established
   - Adjacent scenes' aesthetics
   - Use Read tool to view images

4. **DEV_NOTES.md** — Check for Ink patterns and gotchas

### 3. Write Ink (Protocol)

**This is collaborative writing. Expect heavy revision. Follow these steps exactly:**

#### Step 3a: Present Context
- Show Joe the Arc.md scene description
- Summarize: vibe, axes to hit, emotional core
- Ask: "Any specific beats or lines you already have in mind?"

**STOP. Wait for Joe's input before drafting.**

#### Step 3b: Draft Intro
- Write just the scene's opening text (2-4 paragraphs)
- Set the scene, establish mood
- No choices yet

**STOP. Get feedback on tone, voice, details. Revise until approved.**

#### Step 3c: Draft Choices
- Write 3-4 choice texts (the `* [bracketed text]` part only)
- Note which axis each would move
- Don't write responses yet

**STOP. Discuss choice framing. Are these the right options? Right voice? Revise until approved.**

#### Step 3d: Draft Full Scene
- Add response text for each choice
- Add axis changes (`~ axis += 1`)
- Add end knot with `+ [...]` pattern
- **Embed transition to next scene in choice responses** — keep flow fluid (e.g., "Your feed pings. Different seal, official.")

**STOP. Line-by-line feedback. Revise until approved.**

#### Step 3e: Final Review
- Present complete scene code
- Confirm it matches the ink-patterns.md structure
- Joe gives final approval

Reference `references/ink-patterns.md` for scene skeleton and axis table.

### 4. Generate Background (Protocol)

Use the **scholastic-bg** skill for image generation:
- Reference: `.claude/skills/scholastic-bg/SKILL.md`
- Style lock: `.claude/skills/scholastic-bg/references/style-lock.md`

#### Step 4a: Craft 3 Prompts

**Pull directly from the approved Ink writing.** The scene text you just finished should inform the visuals — specific details, objects mentioned, mood established.

Based on the finished scene, write 3 different prompt variations:
- **v1**: Straightforward interpretation — key details from the Ink text
- **v2**: Different angle, POV, or emphasis
- **v3**: Alternate mood or compositional approach

**Character references:** If the scene includes characters (Grandpa, Cousin, Clyde the AI, Therapist), attach reference images from `notes/characters/` and include in prompt: "use this exact character in [position/action]"

Available references:
```
notes/characters/grandpa.jpg
notes/characters/therapist.jpg
notes/characters/cousin-young-adult.jpg
notes/characters/cousin-middle-age.jpg
notes/characters/cousin-old-age.jpg

# Clyde (AI companion) — use phase-appropriate version:
notes/characters/CLYDE/CLYDE-INFANT.jpg      # Childhood
notes/characters/CLYDE/CLYDE-TEEN.jpg        # Adolescence
notes/characters/CLYDE/CLYDE-ADULT.jpg       # Young Adult
notes/characters/CLYDE/CLYDE-PRESIDENT.jpg   # Middle Age
notes/characters/CLYDE/CLYDE-SINGULARITY.jpg # Old Age
```

Present all 3 prompts to Joe before generating.

**STOP. Discuss prompts. Adjust if needed.**

#### Step 4b: Generate All 3
Generate images to inbox with clear naming:
```
public/inbox/{scene_name}_v1.jpg
public/inbox/{scene_name}_v2.jpg
public/inbox/{scene_name}_v3.jpg
```

Use scholastic-bg workflow (style lock prefix/suffix, 4:3, 2K).

#### Step 4c: Present Options
- View all 3 images with Read tool
- Present to Joe with brief notes on each
- Note any style-lock issues or composition concerns

**STOP. Joe picks a winner, requests tweaks, or asks for more variations.**

#### Step 4d: Finalize
- Joe moves winner to `public/backgrounds/{scene_name}.jpg`
- Rejects go to `public/inbox/archive/`
- Confirm background filename matches Ink `# background:` tag

### 5. Compile & Verify

```bash
pnpm run ink:compile
```

Confirm the story compiles without errors. If using browser verification, test the scene flows correctly.

### 6. Mark Complete

Edit `SCENE_CHECKLIST.md`:
- Change `[ ]` to `[x]` for the completed scene

### 7. Prompt Continue

Ask: "Ready for the next scene, or want to take a break?"

---

## Axis Reference

From Arc.md — which pole is which:
- `+= 1` → moves toward SECOND pole name
- `-= 1` → moves toward FIRST pole name

Example: `elitist_populist += 1` = more Populist

---

## Notes

- **STOP means STOP.** Do not proceed past a STOP until Joe explicitly approves.
- **Joe's voice matters.** First drafts are scaffolds to react to, not finished work.
- **Verbatim means verbatim.** When Joe writes specific lines and says that's what he wants, use them exactly. Don't embellish, add extra sentences, or rephrase. His words, his voice.
- **Keep it tight.** Adolescence scenes landed well — punchy, 2-3 lines per beat max. Resist the urge to over-explain. More scenes, less words per scene.
- **Fluid transitions.** Embed the hook to the next scene in choice response text, not as a separate beat. Keeps momentum.
- **One scene at a time.** Don't batch or rush ahead.
- **3 variations minimum** for images. More rounds if needed.
- **Interstitials use `# background: void`** — the teal/peach galaxy image. Reused for all interludes.
