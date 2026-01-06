# Dev Notes — Ink + React Learnings

Lessons learned while building this visual novel. Read this at session start.

---

## Style: Scene prose length

Keep scene intros SHORT. 4-6 lines max. Trust the image to do visual work. Example of ideal length:

```
There aren't many jobs left. Most of your friends are just drifting.

But this tradition from old America stays: get together for a big meal.

You're at your parents' house. Your unmodified cousin flew in from somewhere rural. What's left of Grandpa shimmers at the head of the table.

"Good call bringing everyone together," he says. "This casserole isn't just delicious — it's a font of nostalgia."
```

---

## Bug: Choice response text disappears on background change

**Problem:** When a choice response leads directly to a scene with a new `# background:` tag, the response text doesn't render. The hook's background-change detection buffers it incorrectly.

**Example of broken flow:**
```ink
* [Pick this choice]
    Response text here.
    -> new_scene

=== new_scene ===
# background: different_background
```

**Fix:** Always add an intermediate knot with `+ [...]` before any background change:
```ink
* [Pick this choice]
    Response text here.
    -> scene_end

=== scene_end ===
+ [...]
    -> new_scene

=== new_scene ===
# background: different_background
```

This forces the player to click continue, which triggers a clean `continueStory()` call before the background changes.

---

## Pattern: Scene structure

Each scene should follow this flow:
1. **Scene knot** — `# background: name`, intro text, choices
2. **End knot** — closing text, `+ [...]` continue prompt
3. **Transition or next scene**

This keeps the flow predictable and avoids the background-change bug.

---

## Pattern: Axis changes in choices

Keep axis changes (`~ axis += 1`) inside the choice block, before any response text. This ensures they're applied when the choice is made.

```ink
* [Choice text]
    ~ axis_name += 1
    Response text after axis change.
    -> next
```

---

## Axes reference

Quick reference for direction:
- `+= 1` moves toward the SECOND pole (e.g., `elitist_populist += 1` = more Populist)
- `-= 1` moves toward the FIRST pole (e.g., `elitist_populist -= 1` = more Elitist)

Wait, actually need to verify this. Check `notes/Personality Axes.md` for pole definitions.
