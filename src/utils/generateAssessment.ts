import { AXIS_DEFINITIONS } from "../data/axisDefinitions";
import { POLES, AXIS_TO_POLES, pickRandom } from "../data/poleStatements";
import { pickRandomTemplate } from "../data/assessmentTemplates";

// A segment is either plain text or a hoverable axis phrase
export interface AssessmentSegment {
  type: "text" | "axis";
  content: string;
  // Only present for axis segments
  axisId?: string;
  score?: number;
}

export interface GeneratedAssessment {
  segments: AssessmentSegment[];
  // For debugging/display
  activePoles: Record<string, string>;
}

// Threshold for determining low vs high pole (scores typically 0-15)
const MIDPOINT = 8;

export function generateAssessment(
  scores: Record<string, number>
): GeneratedAssessment {
  // 1. Determine which pole is active for each axis
  const activePoles: Record<string, string> = {};

  for (const axisId of Object.keys(AXIS_TO_POLES)) {
    const score = scores[axisId] ?? MIDPOINT;
    const poles = AXIS_TO_POLES[axisId];
    activePoles[axisId] = score < MIDPOINT ? poles.low : poles.high;
  }

  // 2. Pick a template
  const template = pickRandomTemplate();

  // 3. Parse and fill template
  const segments: AssessmentSegment[] = [];
  const slotRegex = /\{(\w+):(\w+)\}/g;

  let lastIndex = 0;
  let match;

  while ((match = slotRegex.exec(template)) !== null) {
    // Add text before this slot
    if (match.index > lastIndex) {
      const textBefore = template.slice(lastIndex, match.index);
      if (textBefore) {
        segments.push({ type: "text", content: textBefore });
      }
    }

    const axisId = match[1];
    const form = match[2] as "main" | "clause";

    // Get the active pole for this axis
    const poleKey = activePoles[axisId];
    const poleData = POLES[poleKey];

    if (poleData) {
      // Pick a random variant
      const variant = pickRandom(poleData.variants);
      const phraseText = variant[form];

      // The whole phrase is the hoverable segment
      segments.push({
        type: "axis",
        content: phraseText,
        axisId: axisId,
        score: scores[axisId] ?? MIDPOINT,
      });
    } else {
      // Fallback if pole not found
      segments.push({ type: "text", content: `[${axisId}]` });
    }

    lastIndex = match.index + match[0].length;
  }

  // Add any remaining text after last slot
  if (lastIndex < template.length) {
    segments.push({ type: "text", content: template.slice(lastIndex) });
  }

  // 4. Capitalize first letter of first segment if needed
  if (segments.length > 0 && segments[0].content) {
    segments[0].content =
      segments[0].content.charAt(0).toUpperCase() +
      segments[0].content.slice(1);
  }

  return { segments, activePoles };
}

// Helper to get tooltip data for an axis
export function getAxisTooltipData(axisId: string, score: number) {
  const axis = AXIS_DEFINITIONS[axisId];
  if (!axis) return null;

  return {
    name: axis.name,
    description: axis.description,
    score,
    maxScore: 15, // Typical max
    lowPole: axis.lowPole,
    highPole: axis.highPole,
  };
}
