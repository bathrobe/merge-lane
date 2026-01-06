# Character Bible

Reference descriptions for recurring characters. Include relevant sections in image generation prompts for consistency.

---

## The Therapist

**Reference image:** `public/backgrounds/Office.jpg`

**Role:** Frame narrator. Appears at opening, between chapters (text only), and closing.

### Physical Description
- Middle-aged man, bald/receding hairline
- Faint phrenology-style diagram lines visible on scalp (subtle, not glowing)
- Warm, professional smile — friendly but clinical
- Tan/camel wool blazer over dark shirt
- Holds clipboard or tablet
- Seated posture, relaxed but attentive

### Visual Style
- Low-poly 3D, late-90s educational CD-ROM aesthetic
- Soft lighting, no harsh shadows
- Plastic/matte skin texture (PS1-era warmth)

### Prompt Fragment
```
Middle-aged bald man with faint phrenology diagram lines on scalp, warm professional smile, tan wool blazer over dark shirt, holding clipboard, low-poly 3D render, late-90s educational CD-ROM aesthetic, soft diffused lighting
```

### Environment Note
The therapist's office uses the same teal/cream palette as the Companion — institutional teal accents, cream/beige warmth. This visual echo is intentional: the frame and the AI share DNA.

### Evolution Across Phases
Per Arc.md: "Therapist appearance shifts slightly (more circuits? different lighting? subtle wrongness?)"
- Opening: Warm, normal, trustworthy
- Later interstitials: Subtle uncanny details accumulate (sharper lines on head? lighting shift? eyes slightly off?)
- Closing: Same warmth, but you notice things you didn't before

---

## The Companion (AI Assistant)

**Reference images:**
- `notes/companion-lime-blue.jpg` — Childhood (bright, googly, friendly)
- `notes/companion-adolescent.jpg` — Adolescent (lithe, elegant, knowing smile)
- `notes/companion-president.jpg` — President/Middle Age (vast, fractalized, solemn)
- `notes/companion-teal.jpg` — Alt institutional palette
- `notes/companion-pinwheel.jpg` — Original coral (archived)

**Role:** Your AI companion from childhood. Evolves across all phases. Becomes president of Earth.

### Base Form (Childhood)
- Pinwheel-flower shape with 6 asymmetric soft petals
- Two-tone petals: lime green and sky blue (bright, playful)
- Later phases shift toward institutional teal + cream as it "grows up"
- White circular center
- Two large expressive eyes with shine dots, small curved smile
- Flat vector style, clean edges, no outlines
- "Tech company logo that became a children's character"
- 90s educational CD-ROM mascot energy

### Prompt Fragment (Childhood)
```
Pinwheel flower mascot with 6 soft asymmetric petals in teal and cream, white circular center with large googly eyes and small smile, flat vector style, clean edges, 90s educational CD-ROM mascot, friendly and slightly corporate
```

### Evolution Across Phases

| Phase | Form Changes | Vibe |
|-------|--------------|------|
| Childhood | Full pinwheel, googly eyes, bright colors | Friendly, silly, clearly a mascot |
| Adolescence | Petals slightly sharper, colors muted | Growing up with you, less childish |
| Young Adult | More geometric, eyes less cartoonish | Professional, ambient presence |
| Middle Age | Abstract spiral, face minimal | You barely notice it's there |
| Old Age | Pure geometric form, almost sacred | Was it always like this? |

### Form Factor Progression
Screen-native (tablet) → AR overlay → integrated/ambient → the medium itself

---

## Grandpa

**Role:** Emotional anchor. Your friend. Transforms from human to upload to transhuman geometry.

### Physical Description (Living)
- Elderly man, 70s-80s
- Warm, lined face — kind eyes
- Casual comfortable clothing (cardigan, reading glasses)
- Analog energy: no visible tech, no neural link
- Often reading, surrounded by books/plants
- The one normal, embodied presence in a weird world

### Prompt Fragment (Living)
```
Elderly grandfather in his 70s, kind weathered face, warm smile, cardigan sweater, reading glasses, surrounded by books and plants, no visible technology, analog and embodied, low-poly 3D render, late-90s educational CD-ROM aesthetic
```

### Evolution Across Phases

| Phase | State | Visual |
|-------|-------|--------|
| Childhood | Alive, warm | Normal elderly man, books, plants |
| Adolescence | Sick, facing upload decision | Same but frailer, hospital bed? |
| Young Adult | First ghost (janky upload) | Slightly glitchy, uncanny valley, same clothes but something's off |
| Middle Age | Thriving upload, wants to change | More polished but starting to abstract, still recognizable |
| Old Age | Transhuman geometry | "Unrecognizable geometry, but same voice" — abstract form, maybe just voice/presence |

---

## The Cousin

**Reference images:**
- `notes/characters/cousin-young-adult.jpg` — Young Adult (late 20s, technical vest)
- `notes/characters/cousin-middle-age.jpg` — Middle Age (late 40s, fleece pullover)
- `notes/characters/cousin-old-age.jpg` — Old Age (70s, layered cardigan)

**Role:** Foil. Chose embodiment over enhancement. Represents the road not taken. The only character who stays consistently human across all phases.

### Physical Description
- Female, svelte/athletic build
- Long dark hair (greys naturally over time)
- Olive/tan skin tone (same family as Grandpa)
- Deliberately unmodified: no visible biomods, no neural link hardware
- Quality outdoor clothing — practical but well-made (Patagonia vibe, not burlap)
- Weathered but healthy — someone who takes care of themselves
- By Old Age: aging naturally, choosing real death, at peace

### Prompt Fragments

**Young Adult:**
```
Young adult woman in her late 20s, svelte athletic build, long dark hair, olive/tan skin tone, wearing quality outdoor gear - fitted fleece jacket or technical vest in muted earth tones, confident warm expression, no visible technology or biomods, low-poly 3D render, late-90s educational CD-ROM aesthetic, soft diffused lighting
```

**Middle Age:**
```
Middle-aged woman in her late 40s, svelte build, long dark hair with grey streaks, olive/tan skin tone, weathered face with smile lines, wearing quality outdoor jacket or fleece pullover in muted earth tones, confident resolute expression, no visible technology or biomods, low-poly 3D render, late-90s educational CD-ROM aesthetic, soft diffused lighting
```

**Old Age:**
```
Elderly woman in her 70s, slim build, long grey-white hair, olive/tan weathered skin, deeply lined face but peaceful expression, wearing comfortable quality layers - wool sweater or soft cardigan in muted tones, at peace with mortality, gentle knowing smile, no visible technology or biomods, low-poly 3D render, late-90s educational CD-ROM aesthetic, soft diffused lighting
```

### Evolution Across Phases

| Phase | Appearance | Context |
|-------|------------|---------|
| Young Adult | Late 20s, athletic, technical vest, confident | Reaches out after going full embodied |
| Middle Age | Late 40s, grey streaks, fleece pullover, resolute | Leaving Earth for Mars |
| Old Age | 70s, full grey, layered cardigan, at peace | Dying on Mars, "This is what I wanted. A real ending." |

---

## Usage Notes

### For Image Generation
1. Include the relevant **Prompt Fragment** in your generation prompt
2. Combine with Style Lock prefix/suffix
3. Use reference images where available (`-r` flag)
4. Expect ~70-80% consistency; some drift is acceptable and even thematic

### Consistency Anchors
- **Therapist:** Phrenology lines on scalp, tan blazer
- **Companion:** Pinwheel shape, petal count, eye style
- **Grandpa:** Cardigan, reading glasses, books/plants (until upload)
- **Cousin:** Long dark hair (greying), olive/tan skin, quality outdoor gear, no tech

### Thematic Drift
Some inconsistency is *narratively appropriate*:
- Therapist gets subtly wronger
- Companion abstracts over time
- Grandpa transforms entirely
- Only Cousin stays consistently human
