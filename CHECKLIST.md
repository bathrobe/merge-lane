# Audio System Checklist

> **Run this on a separate branch** (`git checkout -b audio-system`) to avoid conflicts with parallel work. Touches: `useInkStory.ts`, `App.tsx`, `.ink` files.

## Assets

- [x] Menu/therapist track — `therapist.mp3` (Northern Crown)
- [x] Childhood track — `childhood.mp3` (starry synth)
- [x] Adolescence track — `adolescence.mp3` (Ambient Trap Neon Night)
- [x] Young adult track — `young-adult.mp3` (Futuristic Reflections)
- [x] Middle age track — `middle-age.mp3` (strange synth ambient)
- [x] Old age track — `old-age.mp3` (Space Ambient Cinematic)
- [x] Click SFX — `click-select.mp3`, `click-soft.mp3` (90s Game UI)
- [x] Files placed in `public/audio/music/` and `public/audio/sfx/`

All tracks from Pixabay (royalty-free, no attribution required).

## Implementation

- [x] Create `useAudio` hook (or context) to manage playback
- [x] Preload audio files on app init
- [x] Start music on "Start Game" click (solves browser autoplay)
- [x] Add mood tags to Ink story (e.g., `# mood: childhood`)
- [x] Parse mood tags in `useInkStory` hook
- [x] Implement crossfade between tracks (~2-3 sec)
- [x] Add click sound on choice selection

## Polish

- [ ] Test loop seams on all tracks
- [ ] Verify crossfades feel smooth
- [ ] Test that audio starts reliably after first click
- [ ] Adjust volume levels (keep music quiet/ambient)
