import { useRef, useCallback, useEffect, useState } from "react";

// Music tracks mapped to mood tags
const MUSIC_TRACKS = {
  therapist: "/audio/music/therapist.mp3",
  childhood: "/audio/music/childhood.mp3",
  adolescence: "/audio/music/adolescence.mp3",
  "young-adult": "/audio/music/young-adult.mp3",
  "middle-age": "/audio/music/middle-age.mp3",
  "old-age": "/audio/music/old-age.mp3",
} as const;

const SFX_TRACKS = {
  "click-select": "/audio/sfx/click-select.mp3",
  "click-soft": "/audio/sfx/click-soft.mp3",
  "phase-transition": "/audio/sfx/phase-transition.mp3",
} as const;

export type MusicTrack = keyof typeof MUSIC_TRACKS;
export type SfxTrack = keyof typeof SFX_TRACKS;

const MUSIC_VOLUME = 0.3; // Keep ambient
const SFX_VOLUME = 0.1; // Subtle click
const JINGLE_VOLUME = 0.4; // Phase transition stinger
const CROSSFADE_MS = 800;

export interface UseAudioReturn {
  playMusic: (track: MusicTrack) => void;
  stopMusic: () => void;
  playSfx: (name: SfxTrack) => Promise<void>;
  preload: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

export function useAudio(): UseAudioReturn {
  const musicRefs = useRef<Map<MusicTrack, HTMLAudioElement>>(new Map());
  const sfxRefs = useRef<Map<SfxTrack, HTMLAudioElement>>(new Map());
  const currentTrackRef = useRef<MusicTrack | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const isMutedRef = useRef(false); // For use in callbacks

  // Create and cache audio elements
  const getOrCreateMusic = useCallback((track: MusicTrack): HTMLAudioElement => {
    let audio = musicRefs.current.get(track);
    if (!audio) {
      audio = new Audio(MUSIC_TRACKS[track]);
      audio.loop = true;
      audio.volume = 0;
      musicRefs.current.set(track, audio);
    }
    return audio;
  }, []);

  const getOrCreateSfx = useCallback((name: SfxTrack): HTMLAudioElement => {
    let audio = sfxRefs.current.get(name);
    if (!audio) {
      audio = new Audio(SFX_TRACKS[name]);
      audio.volume = name === "phase-transition" ? JINGLE_VOLUME : SFX_VOLUME;
      sfxRefs.current.set(name, audio);
    }
    return audio;
  }, []);

  // Preload all audio files
  const preload = useCallback(() => {
    Object.keys(MUSIC_TRACKS).forEach((track) => {
      getOrCreateMusic(track as MusicTrack);
    });
    Object.keys(SFX_TRACKS).forEach((name) => {
      getOrCreateSfx(name as SfxTrack);
    });
  }, [getOrCreateMusic, getOrCreateSfx]);

  // Crossfade to a new track
  const playMusic = useCallback((track: MusicTrack) => {
    if (currentTrackRef.current === track) return;

    // Clear any existing fade
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    const oldTrack = currentTrackRef.current;
    const oldAudio = oldTrack ? musicRefs.current.get(oldTrack) : null;
    const newAudio = getOrCreateMusic(track);

    currentTrackRef.current = track;

    // Start new track at 0 volume
    newAudio.volume = 0;
    newAudio.currentTime = 0;
    newAudio.play().catch(() => {
      // Autoplay blocked - will work after user interaction
    });

    const steps = 25;
    const stepMs = CROSSFADE_MS / steps;
    let step = 0;

    fadeIntervalRef.current = window.setInterval(() => {
      step++;
      const progress = step / steps;

      // Fade in new track (respect mute)
      newAudio.volume = isMutedRef.current ? 0 : progress * MUSIC_VOLUME;

      // Fade out old track
      if (oldAudio) {
        oldAudio.volume = isMutedRef.current ? 0 : (1 - progress) * MUSIC_VOLUME;
      }

      if (step >= steps) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        if (oldAudio) {
          oldAudio.pause();
          oldAudio.currentTime = 0;
        }
      }
    }, stepMs);
  }, [getOrCreateMusic]);

  const stopMusic = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    const current = currentTrackRef.current;
    if (current) {
      const audio = musicRefs.current.get(current);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0;
      }
    }
    currentTrackRef.current = null;
  }, []);

  const playSfx = useCallback((name: SfxTrack): Promise<void> => {
    if (isMutedRef.current) return Promise.resolve();
    const audio = getOrCreateSfx(name);
    audio.currentTime = 0;

    return new Promise((resolve) => {
      const handleEnded = () => {
        audio.removeEventListener("ended", handleEnded);
        resolve();
      };
      audio.addEventListener("ended", handleEnded);
      audio.play().catch(() => {
        // Blocked by autoplay policy - resolve anyway
        audio.removeEventListener("ended", handleEnded);
        resolve();
      });
    });
  }, [getOrCreateSfx]);

  const toggleMute = useCallback(() => {
    const newMuted = !isMutedRef.current;
    isMutedRef.current = newMuted;
    setIsMuted(newMuted);

    // Apply to currently playing music
    const currentTrack = currentTrackRef.current;
    if (currentTrack) {
      const audio = musicRefs.current.get(currentTrack);
      if (audio) {
        audio.volume = newMuted ? 0 : MUSIC_VOLUME;
      }
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      musicRefs.current.forEach((audio) => {
        audio.pause();
      });
    };
  }, []);

  return { playMusic, stopMusic, playSfx, preload, isMuted, toggleMute };
}
