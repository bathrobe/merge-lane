import type { InkChoice } from "../hooks/useInkStory";
import { ChoiceButton } from "./ui";
import { BEIGE } from "../styles/theme";

interface ChoiceListProps {
  choices: InkChoice[];
  onChoose: (index: number) => void;
}

/**
 * Renders choice buttons for the player.
 * Uses ChoiceButton components with a gradient container.
 */
function ChoiceList({ choices, onChoose }: ChoiceListProps) {
  if (choices.length === 0) {
    return null;
  }

  return (
    <div
      className="p-3 rounded-lg space-y-2"
      style={{
        background: `linear-gradient(180deg, ${BEIGE.light}40 0%, ${BEIGE.mid}30 100%)`,
      }}
    >
      {choices.map((choice) => (
        <ChoiceButton
          key={choice.index}
          onClick={() => onChoose(choice.index)}
        >
          {choice.text}
        </ChoiceButton>
      ))}
    </div>
  );
}

export default ChoiceList;
