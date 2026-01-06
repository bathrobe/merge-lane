# Endgame Dossier

The assessment results screen—a "visa" or psychological dossier showing the player's personality profile.

## Structure

1. **Sigil image** — unique per archetype
2. **Classification title** — e.g., "THE ARCHITECT OF ENDINGS"
3. **Assessment notes** — 2-3 sentences, clinical but gentle
4. **Axis calibration bars** — visual breakdown of 8 axes
5. **Seed phrase** — player's unique identifier
6. **Status footer**

## TODO: Lilly Reframe

Rewrite the whole readout in John Lilly "biocomputer" language. Less tarot/horoscope, more clinical-cosmic diagnostic.

**Vibe shift:**
- "Biocomputer Diagnostic" not "Personality Profile"
- Axes as "installed metaprograms" not "traits"
- System status language: "UNIT STATUS: nominal"
- Seed phrase as "unit identifier" or "access key"
- Maybe: "Self-metaprogrammer flexibility index"

**Tone:** Teletype printout. Clinical + cosmic. Programming and Metaprogramming in the Human Biocomputer energy.

## 256 Archetypes

8 axes × 2 positions each (-1 or +1) = 2^8 = **256 unique combinations**

Each combo gets:
- A title (archetype name)
- Assessment notes (clinical, third-person, gentle)
- A sigil image

### Assessment Notes Style

**Not this (too wordy/cerebral):**
> Subject demonstrates high boundary maintenance and mortality acceptance—unusual combination. Clear preference for expert systems over distributed consensus.

**This (clinical but readable):**
> Builds with full knowledge of impermanence. High clarity, low illusion. May be perceived as cold by symphonic types. Not cold—just unbuffered.

Key principles:
- Third person, not "you"
- Clinical, not inspirational
- Short sentences
- Gentle observation, not judgment

## Sigil Images

### Chosen Style: Teal on Cream

Matches the dossier color palette:
- Background: `#e8dcc8` (cream)
- Linework: `#5b8a8a` (teal)
- Accents: `#2c3e50` (dark), `#8b7355` (brown), `#c9a227` (gold)

### Flux Prompt Template

```
Square format, minimalist ink drawing on warm cream paper #e8dcc8,
single centered symbol, [SYMBOL DESCRIPTION], simple thin teal #5b8a8a linework,
clinical psychological test aesthetic, 1970s research illustration style,
no shading, no text, muted vintage palette
```

### Example Symbol Descriptions

| Archetype | Symbol |
|-----------|--------|
| Architect of Endings | a tower with an open eye at apex |
| Dissolving Light | a figure dissolving into concentric waves |
| Joyful Machinist | a hand holding a gear containing a small flame |

### Cost Estimate

Flux 2 Pro: ~$0.03/image × 256 = **~$8 total**

Even with 2-3 generations per archetype for quality selection: ~$25

## Other Styles Tested

| Style | Prompt snippet | Result |
|-------|---------------|--------|
| Woodcut | `black and white woodcut, thick bold lines, pure black ink on white` | High contrast, bold, but doesn't match palette |
| Gold on black | `gold line drawing on pure black background, thin precise gold lines` | Elegant, consistent, but too dark for card |
| Clinical sepia | `ink drawing on cream paper, thin black linework` | Close but wrong accent color |

## Generation Approach

For 256 unique archetypes:

1. **Define symbol vocabulary** — map axis combinations to symbolic elements
2. **Batch generate** — use Flux API with consistent prompt template
3. **Quality pass** — review and regenerate weak ones
4. **Title/notes generation** — use Claude to write clinical assessments for each combo

### Symbol Mapping Ideas

Could map dominant axes to symbol elements:
- Sovereign: towers, walls, single figures
- Symphonic: networks, waves, merged forms
- Accel: flames, rockets, forward motion
- Steward: trees, shields, contained forms
- etc.

## Files

Prototype sigils saved to: `public/sigils/`
- `sigil-teal-architect.jpg`
- `sigil-teal-dissolving.jpg`
- `sigil-teal-machinist.jpg`
