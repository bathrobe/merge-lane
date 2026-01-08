import { useEffect, useState, useRef } from "react";
import { useInkStory } from "./hooks/useInkStory";
import { useAudio, type MusicTrack } from "./hooks/useAudio";
import GameView from "./components/GameView";
import ResultsScreen from "./components/ResultsScreen";
import TitleScreen from "./components/TitleScreen";
import DesignPlayground from "./pages/DesignPlayground";
import DossierCardV3 from "./components/experiments/DossierCardV3";
import AssessmentDemo from "./pages/AssessmentDemo";
import DossierDemo from "./pages/DossierDemo";
import { saveGame, loadGame, hasSavedGame, clearSave } from "./lib/gameSave";
import type { AxisValues } from "./lib/seedPhrase";
import storyJson from "./story/episode1.json";

// Map mood tags to display labels for the chapter indicator
const PHASE_LABELS: Record<string, string> = {
  therapist: "Exam Room",
  childhood: "Childhood",
  adolescence: "Adolescence",
  "young-adult": "Adulthood",
  "middle-age": "Middle Age",
  "old-age": "Old Age",
};

// Ink variable names for the 7 personality axes
const AXIS_NAMES: Array<keyof AxisValues> = [
  "legible_illegible",
  "sovereign_symphonic",
  "anthro_xeno",
  "mortal_immortalist",
  "accel_steward",
  "aligned_autonomous",
  "apollonian_dionysian",
];

type GameState = "menu" | "playing";

function App() {
  // Dev-only routes: ?design, ?dossier, ?assessment, ?dossier-demo
  const isDesignMode = import.meta.env.DEV && window.location.search.includes("design");
  const isDossierMode = import.meta.env.DEV && window.location.search === "?dossier";
  const isDossierDemoMode = import.meta.env.DEV && window.location.search.includes("dossier-demo");
  const isAssessmentMode = import.meta.env.DEV && window.location.search.includes("assessment");

  const [gameState, setGameState] = useState<GameState>("menu");
  const [hasSave, setHasSave] = useState(false);
  const previousBackgroundRef = useRef<string | undefined>(undefined);
  const previousMoodRef = useRef<string | undefined>(undefined);

  const { playMusic, fadeOutMusic, playSfx, preload, isMuted, toggleMute } = useAudio();

  const {
    textHistory,
    newBatchStartIndex,
    choices,
    tags,
    variables,
    choose,
    reset,
    continue: continueStory,
    isEnded,
    hasPendingContent,
    getState,
    loadState,
    jumpTo,
  } = useInkStory(storyJson);

  // Check for saved game on mount
  useEffect(() => {
    setHasSave(hasSavedGame());
  }, []);

  // Preload audio files
  useEffect(() => {
    preload();
  }, [preload]);

  // Change music when mood tag changes
  useEffect(() => {
    if (gameState !== "playing") return;

    const currentMood = tags.mood;
    if (currentMood && currentMood !== previousMoodRef.current) {
      const isFirstMood = previousMoodRef.current === undefined;
      previousMoodRef.current = currentMood;

      if (!isFirstMood) {
        // Phase transition: fade out → jingle → fade in new music
        fadeOutMusic()
          .then(() => playSfx("phase-transition"))
          .then(() => playMusic(currentMood as MusicTrack))
          .catch((err) => console.error("Audio transition failed:", err));
      } else {
        // First mood: just start music
        playMusic(currentMood as MusicTrack);
      }
    }
  }, [tags.mood, gameState, playMusic, fadeOutMusic, playSfx]);

  // Auto-save when background changes (scene transition)
  // Only save when pending content is cleared (scene fully loaded)
  useEffect(() => {
    if (gameState !== "playing") return;
    if (hasPendingContent) return; // Wait until scene content is displayed

    const currentBackground = tags.background;
    if (
      currentBackground &&
      currentBackground !== previousBackgroundRef.current
    ) {
      previousBackgroundRef.current = currentBackground;
      saveGame(getState(), currentBackground, textHistory);
      setHasSave(true);
    }
  }, [tags.background, gameState, getState, hasPendingContent, textHistory]);

  function handleNewGame() {
    clearSave();
    setHasSave(false);
    reset();
    setGameState("playing");
    playMusic("therapist"); // Start with menu/therapist track
  }

  function handleContinue() {
    const save = loadGame();
    if (save) {
      loadState(save.inkState, save.background, save.textHistory);
      setGameState("playing");
      playMusic("therapist"); // Start music (will crossfade when mood changes)
    }
  }

  function handleReturnToMenu() {
    setGameState("menu");
    setHasSave(hasSavedGame());
  }

  function handleChoose(index: number) {
    playSfx("click-soft");
    choose(index);
  }

  // Dev-only routes
  if (isDesignMode) return <DesignPlayground />;
  if (isDossierDemoMode) return <DossierDemo />;
  if (isDossierMode) return <DossierCardV3 />;
  if (isAssessmentMode) return <AssessmentDemo />;

  // Menu screen
  if (gameState === "menu") {
    return (
      <TitleScreen
        onNewGame={handleNewGame}
        onContinue={handleContinue}
        hasSave={hasSave}
      />
    );
  }

  // Results screen (when story emits "show: results" tag)
  if (tags.show === "results") {
    // Clear save since player completed the episode
    clearSave();

    // Initialize with defaults to ensure all axes have values
    const axisValues: AxisValues = {
      legible_illegible: 8,
      sovereign_symphonic: 8,
      anthro_xeno: 8,
      mortal_immortalist: 8,
      accel_steward: 8,
      aligned_autonomous: 8,
      apollonian_dionysian: 8,
    };
    for (const name of AXIS_NAMES) {
      const value = variables.getVariable(name);
      if (typeof value === "number") {
        axisValues[name] = value;
      }
    }

    return <ResultsScreen values={axisValues} onReset={handleReturnToMenu} />;
  }

  // Game view
  return (
    <>
      <GameView
        backgroundName={tags.background}
        textHistory={textHistory}
        newBatchStartIndex={newBatchStartIndex}
        choices={choices}
        onChoose={handleChoose}
        onContinue={continueStory}
        isEnded={isEnded}
        hasPendingContent={hasPendingContent}
        chapterLabel={tags.mood ? PHASE_LABELS[tags.mood] : undefined}
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />
      {import.meta.env.DEV && (
        <button
          onClick={() => jumpTo("the_metaverse")}
          style={{
            position: "fixed",
            top: 8,
            right: 8,
            padding: "4px 8px",
            fontSize: 12,
            opacity: 0.6,
            zIndex: 9999,
          }}
        >
          Skip to Middle Age
        </button>
      )}
    </>
  );
}

export default App;
