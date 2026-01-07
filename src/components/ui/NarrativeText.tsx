/**
 * NarrativeText - Story text display with color tags
 */

import { PALETTE } from "../../styles/palette";
import { parseInkTags } from "../../utils/parseInkTags";

interface NarrativeTextProps {
  paragraphs: string[];
}

export function NarrativeText({ paragraphs }: NarrativeTextProps) {
  return (
    <div className="space-y-3">
      {paragraphs.map((rawText, index) => {
        const { text, color } = parseInkTags(rawText);

        return (
          <p
            key={index}
            className="font-baskerville text-base leading-relaxed"
            style={{ color: color ?? PALETTE.deepNavy }}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}
