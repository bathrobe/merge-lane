# Technical Specification

## Stack

| Layer | Choice |
|-------|--------|
| Narrative engine | [Ink](https://github.com/inkle/ink) via [inkjs](https://github.com/y-lohse/inkjs) |
| Frontend | Vite + React + TypeScript |
| Package manager | pnpm |
| Deployment | Static (no backend) |
| Email signup | Formspring |

## Architecture Principle

**Ink owns all logic. React is a dumb renderer.**

- Ink: branching, variables, state, navigation between scenes
- React: rendering text, displaying choices, swapping visuals based on tags

## inkjs API Surface

```typescript
const story = new Story(compiledJson)

story.Continue()           // Advance, returns next text chunk
story.canContinue          // Boolean: more text available?
story.currentText          // The text from last Continue()
story.currentTags          // Array of tag strings: ["background: lab"]
story.currentChoices       // Array: [{ text, index }]
story.ChooseChoiceIndex(n) // Make a choice
story.variablesState       // Read/write Ink variables
story.state.toJson()       // Serialize game state
story.state.LoadJson(s)    // Restore game state
```

## Tag Protocol

Ink communicates visual state via tags:

```ink
# background: laboratory
# show: results
```

Parsed by `tags.ts`:

```typescript
parseTags(["background: lab", "show: results"])
// → { background: "lab", show: "results" }
```

### Supported Tags (v1)

| Tag | React behavior |
|-----|----------------|
| `background` | Swap `SceneBackground` image |
| `show` | `results` triggers `ResultsScreen` |

## Data Model

### Personality Axes (8)

Each stored as 4-bit value (0-15), starting at 8:

```ink
VAR elitist_populist = 8
VAR optimist_doomer = 8
VAR earnest_ironic = 8
VAR sovereign_symphonic = 8
VAR anthropo_cosmo = 8
VAR mortal_immortal = 8
VAR vanguard_steward = 8
VAR aligned_autonomous = 8
```

## Seed Phrase Encoding

| Data | Bits |
|------|------|
| 8 axes × 4 bits | 32 |
| **Total** | 32 |

32 bits = 3 words (11 bits each, BIP-39 style, with 1 bit padding)

## Compilation

```bash
# Install inklecate or use Inky editor
inklecate src/story/episode1.ink -o src/story/episode1.json
```

Or export JSON directly from [Inky](https://github.com/inkle/inky).

## Results Screen API

When story ends, read variables and generate results:

```typescript
const axes = {
  elitist_populist: story.variablesState['elitist_populist'],
  // ... etc
}

const constellation = await generateConstellation(axes)
// → { name: "The Lantern", myth: "Those who bear..." }

const phrase = encodeSeedPhrase(axes)
// → "forest twilight ember"
```
