import type { InkChoice } from "../hooks/useInkStory";
import SceneBackground from "./SceneBackground";
import TextPanel from "./TextPanel";

interface GameViewProps {
  backgroundName?: string;
  textHistory: string[];
  newBatchStartIndex: number;
  choices: InkChoice[];
  onChoose: (index: number) => void;
  onContinue: () => void;
  isEnded: boolean;
  hasPendingContent: boolean;
}

/**
 * Main game layout: stacked on mobile (image top, text bottom),
 * side-by-side on desktop (image left, text right).
 */
function GameView({
  backgroundName,
  textHistory,
  newBatchStartIndex,
  choices,
  onChoose,
  onContinue,
  isEnded,
  hasPendingContent,
}: GameViewProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen text-white">
      <div className="w-full md:flex-1 relative">
        <SceneBackground backgroundName={backgroundName} />
      </div>
      <TextPanel
        textHistory={textHistory}
        newBatchStartIndex={newBatchStartIndex}
        choices={choices}
        onChoose={onChoose}
        onContinue={onContinue}
        isEnded={isEnded}
        hasPendingContent={hasPendingContent}
      />
    </div>
  );
}

export default GameView;
