import type { InkChoice } from "../hooks/useInkStory";
import StoryText from "./StoryText";
import ChoiceList from "./ChoiceList";

interface TextPanelProps {
  textHistory: string[];
  newBatchStartIndex: number;
  choices: InkChoice[];
  onChoose: (index: number) => void;
  onContinue: () => void;
  isEnded: boolean;
  hasPendingContent: boolean;
}

/**
 * Right-side panel containing narrative text and choices.
 * Solid panel beside the scene image.
 */
function TextPanel({
  textHistory,
  newBatchStartIndex,
  choices,
  onChoose,
  onContinue,
  isEnded,
  hasPendingContent,
}: TextPanelProps) {
  // When there's pending content and no choices, clicking continues
  const showClickToContinue = hasPendingContent && choices.length === 0;

  const handleClick = () => {
    // Tapping anywhere on the panel (including text) continues the story
    if (showClickToContinue) {
      onContinue();
    }
  };

  return (
    <div
      className={`w-full md:w-96 flex-1 md:flex-none md:h-full min-h-0 p-6 overflow-y-auto bg-gray-900 shrink-0 ${
        showClickToContinue ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <StoryText textHistory={textHistory} newBatchStartIndex={newBatchStartIndex} />

      <div className="mt-6">
        <ChoiceList choices={choices} onChoose={onChoose} />
      </div>

      {showClickToContinue && (
        <p className="mt-4 text-gray-400 italic animate-pulse">Click to continue...</p>
      )}

      {isEnded && choices.length === 0 && !hasPendingContent && (
        <p className="mt-4 text-gray-400 italic">The End.</p>
      )}
    </div>
  );
}

export default TextPanel;
