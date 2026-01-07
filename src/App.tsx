import { useEffect, useState, useRef } from "react";
import { useInkStory } from "./hooks/useInkStory";
import { useAudio, type MusicTrack } from "./hooks/useAudio";
import GameView from "./components/GameView";
import ResultsScreen from "./components/ResultsScreen";
import TitleScreen from "./components/TitleScreen";
import DesignPlayground from "./pages/DesignPlayground";
import { saveGame, loadGame, hasSavedGame, clearSave } from "./lib/gameSave";
import type { AxisValues } from "./lib/seedPhrase";
import storyJson from "./story/episode1.json";

// Ink variable names for the 8 personality axes
const AXIS_NAMES: Array<keyof AxisValues> = [
  "elitist_populist",
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
  // Dev-only design playground: access via ?design
  const isDesignMode = import.meta.env.DEV && window.location.search.includes("design");

  const [gameState, setGameState] = useState<GameState>("menu");
  const [hasSave, setHasSave] = useState(false);
  const previousBackgroundRef = useRef<string | undefined>(undefined);
  const previousMoodRef = useRef<string | undefined>(undefined);

  const { playMusic, playSfx, preload, isMuted, toggleMute } = useAudio();

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

      // Play jingle on phase transitions (not on first mood), then start music
      if (!isFirstMood) {
        playSfx("phase-transition").then(() => {
          playMusic(currentMood as MusicTrack);
        });
      } else {
        playMusic(currentMood as MusicTrack);
      }
    }
  }, [tags.mood, gameState, playMusic, playSfx]);

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

  // Design playground (dev only, ?design param)
  if (isDesignMode) {
    return <DesignPlayground />;
  }

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

    const axisValues: AxisValues = {} as AxisValues;
    for (const name of AXIS_NAMES) {
      axisValues[name] = (variables.getVariable(name) as number) ?? 8;
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
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />
      {import.meta.env.DEV && (
        <button
          onClick={() => jumpTo("adolescence_school")}
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
          Skip to Phase 3
        </button>
      )}
    </>
  );
}

export default App;
