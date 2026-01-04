import { useEffect, useRef } from "react";

interface StoryTextProps {
  textHistory: string[];
  newBatchStartIndex: number;
}

/**
 * Renders narrative prose from the Ink story.
 * Disco Elysium-style: appends entries, dims older ones, auto-scrolls.
 */
function StoryText({ textHistory, newBatchStartIndex }: StoryTextProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new text is added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [textHistory]);

  if (textHistory.length === 0) {
    return null;
  }

  return (
    <div className="prose prose-invert">
      {textHistory.map((text, index) => {
        // All entries from the current batch are bright
        const isCurrentBatch = index >= newBatchStartIndex;
        return (
          <p
            key={index}
            className="mb-4 transition-opacity duration-300"
            style={{ opacity: isCurrentBatch ? 1 : 0.6 }}
          >
            {text}
          </p>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}

export default StoryText;
