# Ink Patterns for Scenes

Standard structure and conventions for Scholastic Fair scenes.

## Scene Skeleton

```ink
=== scene_name ===
# background: background_name

[Intro text. Set the scene. 2-4 short paragraphs max.]

* [Choice text — what player does/says]
    ~ axis_name += 1
    [Response text. What happens. Keep it punchy.]
    -> scene_name_end

* [Second choice]
    ~ different_axis -= 1
    [Response.]
    -> scene_name_end

* [Third choice]
    ~ another_axis += 1
    [Response.]
    -> scene_name_end

=== scene_name_end ===

[Optional closing text that applies to all paths.]

+ [...]
    -> next_scene
```

## Key Rules

### Background Tag
- First line of scene knot
- Format: `# background: lowercase_underscored`
- Must match filename in `public/backgrounds/` (without extension)

### Axis Changes
- Put `~ axis += 1` or `~ axis -= 1` immediately after choice
- Before any response text
- One axis per choice (occasionally two if strongly relevant)

### The `+ [...]` Pattern
- **Always** end scenes with `+ [...]` before transitioning
- This forces a click, preventing the background-change bug (see DEV_NOTES.md)
- The ellipsis is the standard "continue" indicator

### Flavor → Mechanical Nesting
Top-level choices can be pure expression. Nest the mechanical (axis-changing) choices underneath:

```ink
* "I don't trust therapists."
    "That's fair," they say. "What is it specifically?"
    * * "My thoughts are my own."
        ~ sovereign_symphonic -= 1
        -> next
    * * "Who says you're qualified?"
        ~ elitist_populist += 1
        -> next
```

## Axes Quick Reference

| Variable | -= 1 (First) | += 1 (Second) |
|----------|--------------|---------------|
| elitist_populist | Elitist | Populist |
| legible_illegible | Legible | Illegible |
| sovereign_symphonic | Sovereign | Symphonic |
| anthro_xeno | Anthro | Xeno |
| mortal_immortalist | Mortal | Immortalist |
| accel_steward | Accel | Steward |
| aligned_autonomous | Aligned | Autonomous |
| apollonian_dionysian | Apollonian | Dionysian |

## Transition Scenes

For interstitials (therapist beats between chapters):

```ink
=== interstitial_name ===
# background: transition

[Brief therapist text. One or two lines.]

+ [...]
    -> next_chapter_first_scene
```

No image generation needed — `transition` is a text-only beat.
