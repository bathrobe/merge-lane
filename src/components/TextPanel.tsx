import type { InkChoice } from "../hooks/useInkStory";
import StoryText from "./StoryText";
import ChoiceList from "./ChoiceList";

interface TextPanelProps {
  text: string;
  choices: InkChoice[];
  onChoose: (index: number) => void;
  isEnded: boolean;
}

/**
 * Right-side panel containing narrative text and choices.
 * Disco Elysium-inspired overlay.
 */
function TextPanel({ text, choices, onChoose, isEnded }: TextPanelProps) {
  return (
    <div className="fixed right-0 top-0 h-full w-96 p-6 overflow-y-auto bg-black/70">
      <StoryText text={text} />

      <div className="mt-6">
        <ChoiceList choices={choices} onChoose={onChoose} />
      </div>

      {isEnded && choices.length === 0 && (
        <p className="mt-4 text-gray-400 italic">The End.</p>
      )}
    </div>
  );
}

export default TextPanel;
