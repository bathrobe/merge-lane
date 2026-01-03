# Scholastic Fair

Use 'bd' for task tracking.

Visual novel engine: Ink (narrative) + React (presentation).

## Quick Context

- **What**: Interactive fiction with personality test, seed phrase persistence
- **Stack**: Vite + React + TypeScript + inkjs + pnpm
- **Principle**: Ink owns all logic; React is dumb renderer

## Key Docs

- `docs/PLAN.md` — Full implementation plan (read this first)
- `docs/tech-spec.md` — Technical specification
- `docs/DESIGN.md` — Concept and vision
- `docs/PERSONALITY_AXES.md` — The 8 personality dimensions
- `docs/world/` — Worldbuilding notes

## Deep Context

For origin story, broader vision, and Obsidian-linked notes:
`/Users/joe/Vaults/Hakuin/Projects/Interactive Fiction Project/`

## Styling Approach

**Unstyled first.** During checklist implementation, use minimal/no styling — just functional layout. No colors, fancy typography, or visual polish. A dedicated styling pass will happen later with Joe's direct input on design decisions.

## Code Style

- Functional over OOP
- Many short files (sub-100 lines) over few long ones
- Readable variable names
- TypeScript, but don't be too precious with types while prototyping

## Dev Commands (after scaffolding)

```bash
pnpm install          # Install deps
pnpm dev              # Start dev server
pnpm run ink:compile  # Compile .ink to .json
```

*Project not yet scaffolded. Run these after setup.*

---

## Development Workflow

### Spec-Driven Development

1. **Read the spec** (`docs/tech-spec.md`) before implementing anything
2. **Check `CHECKLIST.md`** for the next task (lowest unchecked item)
3. **Implement** according to spec + CLAUDE.md code style
4. **Verify in browser** using Claude-in-Chrome extension before marking complete
5. **Commit** after each checklist item
6. **Check off** the completed item

### When Stuck or Uncertain

Stop and ask. Don't try alternatives silently—have a conversation. This helps Joe learn the codebase.

### Large Checklist Items

Break into sub-items inline. After completing sub-items, stop and talk before continuing.

---

## Code Style (Detailed)

### Architecture

- **Ink owns all logic; React is dumb renderer**
- State lives in Ink, exposed via `useInkStory` hook
- Components are pure functions (props-only, no internal state)
- Exception: UI-only state (animations, hover) is okay locally

### File Organization

- **Naming**: camelCase for files, PascalCase for components
- **Length**: Max ~100 lines per file; split proactively
- **Folders**: Flat unless complexity warrants nesting, then use descriptive folder names
- **Barrel exports**: Use `index.ts` for cleaner imports

### Styling

- Tailwind CSS
- shadcn/ui components when useful

### Error Handling

- Fail loudly during dev (throw errors)
- No silent failures or swallowed exceptions

### Components

```tsx
// Preferred: pure function, props-only
function StoryText({ text }: { text: string }) {
  return <p className="prose">{text}</p>
}

// Avoid: internal state that duplicates Ink state
function StoryText({ initialText }) {
  const [text, setText] = useState(initialText) // Don't do this
  ...
}
```

---

## Assets

AI-generated images will be in a local folder (path TBD). React components reference these for backgrounds, etc.
