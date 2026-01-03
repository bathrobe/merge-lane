import type { InkChoice } from "../hooks/useInkStory";
import SceneBackground from "./SceneBackground";
import TextPanel from "./TextPanel";

interface GameViewProps {
  backgroundName?: string;
  text: string;
  choices: InkChoice[];
  onChoose: (index: number) => void;
  isEnded: boolean;
}

/**
 * Main game layout: full-bleed background with text panel overlay.
 */
function GameView({
  backgroundName,
  text,
  choices,
  onChoose,
  isEnded,
}: GameViewProps) {
  return (
    <div className="relative min-h-screen text-white">
      <SceneBackground backgroundName={backgroundName} />
      <TextPanel
        text={text}
        choices={choices}
        onChoose={onChoose}
        isEnded={isEnded}
      />
    </div>
  );
}

export default GameView;
