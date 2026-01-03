interface StoryTextProps {
  text: string;
}

/**
 * Renders narrative prose from the Ink story.
 * Pure display component—no state.
 */
function StoryText({ text }: StoryTextProps) {
  if (!text) {
    return null;
  }

  return (
    <div className="prose prose-invert">
      <p>{text}</p>
    </div>
  );
}

export default StoryText;
