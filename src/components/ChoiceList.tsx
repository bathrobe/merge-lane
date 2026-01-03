import type { InkChoice } from "../hooks/useInkStory";

interface ChoiceListProps {
  choices: InkChoice[];
  onChoose: (index: number) => void;
}

/**
 * Renders choice buttons for the player.
 * Calls onChoose(index) when clicked.
 */
function ChoiceList({ choices, onChoose }: ChoiceListProps) {
  if (choices.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {choices.map((choice) => (
        <button
          key={choice.index}
          onClick={() => onChoose(choice.index)}
          className="block w-full text-left p-3 border rounded hover:bg-white/10"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceList;
