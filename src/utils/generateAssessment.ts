import { AXIS_DEFINITIONS } from "../data/axisDefinitions";
import { POLES, AXIS_TO_POLES, AXIS_ORDER } from "../data/poleStatements";

// A bullet item with the statement split into segments
export interface AssessmentBullet {
  axisId: string;
  score: number;
  // The statement split into: [before highlight, highlight, after highlight]
  beforeHighlight: string;
  highlight: string;
  afterHighlight: string;
}

export interface GeneratedAssessment {
  bullets: AssessmentBullet[];
}

// Threshold for determining low vs high pole (scores typically 0-15)
const MIDPOINT = 8;

export function generateAssessment(
  scores: Record<string, number>
): GeneratedAssessment {
  const bullets: AssessmentBullet[] = [];

  for (const axisId of AXIS_ORDER) {
    const score = scores[axisId] ?? MIDPOINT;
    const poles = AXIS_TO_POLES[axisId];
    const poleKey = score < MIDPOINT ? poles.low : poles.high;
    const pole = POLES[poleKey];

    if (!pole) continue;

    // Split statement around the highlight phrase
    const highlightIndex = pole.statement.indexOf(pole.highlight);

    let beforeHighlight = "";
    let highlight = pole.highlight;
    let afterHighlight = "";

    if (highlightIndex >= 0) {
      beforeHighlight = pole.statement.slice(0, highlightIndex);
      afterHighlight = pole.statement.slice(highlightIndex + pole.highlight.length);
    } else {
      // Fallback if highlight not found
      beforeHighlight = pole.statement;
      highlight = "";
    }

    bullets.push({
      axisId,
      score,
      beforeHighlight,
      highlight,
      afterHighlight,
    });
  }

  return { bullets };
}

// Helper to get tooltip data for an axis
export function getAxisTooltipData(axisId: string, score: number) {
  const axis = AXIS_DEFINITIONS[axisId];
  if (!axis) return null;

  return {
    name: axis.name,
    description: axis.description,
    score,
    maxScore: 15,
    lowPole: axis.lowPole,
    highPole: axis.highPole,
  };
}
