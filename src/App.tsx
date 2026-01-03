import { useEffect } from "react";
import { useInkStory } from "./hooks/useInkStory";
import GameView from "./components/GameView";
import ResultsScreen from "./components/ResultsScreen";
import type { AxisValues } from "./lib/seedPhrase";
import storyJson from "./story/episode1.json";

// Ink variable names for the 8 personality axes
const AXIS_NAMES: Array<keyof AxisValues> = [
  "elitist_populist",
  "optimist_doomer",
  "earnest_ironic",
  "sovereign_symphonic",
  "anthropo_cosmo",
  "mortal_immortal",
  "vanguard_steward",
  "aligned_autonomous",
];

function App() {
  const { text, choices, tags, variables, choose, continue: continueStory, isEnded } =
    useInkStory(storyJson);

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

    return <ResultsScreen values={axisValues} />;
  }

  return (
    <GameView
      backgroundName={tags.background}
      text={text}
      choices={choices}
      onChoose={choose}
      isEnded={isEnded}
    />
  );
}

export default App;
