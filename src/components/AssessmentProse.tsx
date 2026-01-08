import { useState, useMemo } from "react";
import {
  generateAssessment,
  getAxisTooltipData,
  AssessmentSegment,
} from "../utils/generateAssessment";
import { PALETTE } from "../styles/palette";

interface AssessmentProseProps {
  scores: Record<string, number>;
}

export function AssessmentProse({ scores }: AssessmentProseProps) {
  const assessment = useMemo(() => generateAssessment(scores), [scores]);

  return (
    <div
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "14px",
        lineHeight: 1.7,
        color: PALETTE.deepNavy,
      }}
    >
      {assessment.segments.map((segment, index) => (
        <AssessmentSegmentView key={index} segment={segment} />
      ))}
    </div>
  );
}

function AssessmentSegmentView({ segment }: { segment: AssessmentSegment }) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (segment.type === "text") {
    return <span>{segment.content}</span>;
  }

  // Axis segment - hoverable
  const tooltipData = getAxisTooltipData(segment.axisId!, segment.score!);

  return (
    <span
      style={{
        position: "relative",
        display: "inline",
        cursor: "help",
        borderBottom: `1px dotted ${PALETTE.institutionalTeal}`,
        backgroundColor: `${PALETTE.institutionalTeal}15`,
        padding: "1px 4px",
        borderRadius: "3px",
        transition: "background-color 0.15s ease",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {segment.content}
      {showTooltip && tooltipData && (
        <AxisTooltip
          name={tooltipData.name}
          description={tooltipData.description}
          score={tooltipData.score}
          maxScore={tooltipData.maxScore}
          lowPole={tooltipData.lowPole}
          highPole={tooltipData.highPole}
        />
      )}
    </span>
  );
}

interface AxisTooltipProps {
  name: string;
  description: string;
  score: number;
  maxScore: number;
  lowPole: string;
  highPole: string;
}

function AxisTooltip({
  name,
  description,
  score,
  maxScore,
  lowPole,
  highPole,
}: AxisTooltipProps) {
  const percentage = (score / maxScore) * 100;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "calc(100% + 8px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: PALETTE.deepNavy,
          color: PALETTE.cream,
          padding: "8px 12px",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          whiteSpace: "nowrap",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "11px",
        }}
      >
        {/* Axis name */}
        <div
          style={{
            fontWeight: 700,
            color: PALETTE.mutedGold,
            marginBottom: "4px",
          }}
        >
          {name}
        </div>

        {/* Description */}
        <div
          style={{
            color: `${PALETTE.cream}cc`,
            marginBottom: "8px",
            maxWidth: "200px",
            whiteSpace: "normal",
          }}
        >
          {description}
        </div>

        {/* Score bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              color: `${PALETTE.cream}99`,
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {lowPole}
          </span>
          <div
            style={{
              flex: 1,
              height: "4px",
              backgroundColor: `${PALETTE.cream}33`,
              borderRadius: "2px",
              overflow: "hidden",
              minWidth: "60px",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: PALETTE.mutedGold,
                borderRadius: "2px",
                width: `${percentage}%`,
              }}
            />
          </div>
          <span
            style={{
              color: `${PALETTE.cream}99`,
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {highPole}
          </span>
        </div>

        {/* Numeric score */}
        <div
          style={{
            textAlign: "center",
            color: `${PALETTE.cream}80`,
            fontSize: "9px",
            marginTop: "4px",
          }}
        >
          {score}/{maxScore}
        </div>

        {/* Arrow */}
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: `6px solid ${PALETTE.deepNavy}`,
          }}
        />
      </div>
    </div>
  );
}
