import { useEffect } from "react";
import { useInkStory } from "./hooks/useInkStory";
import GameView from "./components/GameView";
import ResultsScreen from "./components/ResultsScreen";
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

function App() {
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
  } = useInkStory(storyJson);

  // Auto-continue on first render to get initial text
  useEffect(() => {
    continueStory();
  }, [continueStory]);

  // When story emits "show: results" tag, render ResultsScreen with axis values
  if (tags.show === "results") {
    // Read all axis values from Ink variables
    const axisValues: AxisValues = {} as AxisValues;
    for (const name of AXIS_NAMES) {
      axisValues[name] = (variables.getVariable(name) as number) ?? 8;
    }

    return <ResultsScreen values={axisValues} onReset={reset} />;
  }

  return (
    <GameView
      backgroundName={tags.background}
      textHistory={textHistory}
      newBatchStartIndex={newBatchStartIndex}
      choices={choices}
      onChoose={choose}
      onContinue={continueStory}
      isEnded={isEnded}
      hasPendingContent={hasPendingContent}
    />
  );
}

export default App;
