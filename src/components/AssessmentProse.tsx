import { useState, useMemo } from "react";
import {
  generateAssessment,
  getAxisTooltipData,
} from "../utils/generateAssessment";
import type { AssessmentBullet } from "../utils/generateAssessment";
import { PALETTE } from "../styles/palette";

interface AssessmentProseProps {
  scores: Record<string, number>;
}

export function AssessmentProse({ scores }: AssessmentProseProps) {
  const assessment = useMemo(() => generateAssessment(scores), [scores]);

  return (
    <ul
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "14px",
        lineHeight: 1.8,
        color: PALETTE.deepNavy,
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {assessment.bullets.map((bullet) => (
        <BulletItem key={bullet.axisId} bullet={bullet} />
      ))}
    </ul>
  );
}

function BulletItem({ bullet }: { bullet: AssessmentBullet }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipData = getAxisTooltipData(bullet.axisId, bullet.score);

  return (
    <li
      style={{
        marginBottom: "8px",
        paddingLeft: "20px",
        position: "relative",
      }}
    >
      {/* Bullet point */}
      <span
        style={{
          position: "absolute",
          left: 0,
          color: PALETTE.institutionalTeal,
        }}
      >
        •
      </span>

      {/* Text before highlight */}
      <span>{bullet.beforeHighlight}</span>

      {/* Highlighted phrase */}
      {bullet.highlight && (
        <span
          style={{
            position: "relative",
            display: "inline",
            cursor: "help",
            borderBottom: `1px dotted ${PALETTE.institutionalTeal}`,
            backgroundColor: `${PALETTE.institutionalTeal}15`,
            padding: "1px 3px",
            borderRadius: "2px",
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {bullet.highlight}
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
      )}

      {/* Text after highlight */}
      <span>{bullet.afterHighlight}</span>
    </li>
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
        bottom: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: PALETTE.cream,
          color: PALETTE.deepNavy,
          padding: "12px 16px",
          borderRadius: "8px",
          border: "3px solid",
          borderColor: "#2D4545 #9DBDBD #9DBDBD #2D4545",
          boxShadow: `
            inset 2px 2px 4px rgba(0,0,0,0.08),
            6px 6px 0 rgba(0,0,0,0.25)
          `,
          whiteSpace: "nowrap",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "11px",
        }}
      >
        {/* Axis name */}
        <div
          style={{
            fontWeight: 700,
            color: PALETTE.institutionalTeal,
            marginBottom: "4px",
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "13px",
          }}
        >
          {name}
        </div>

        {/* Description */}
        <div
          style={{
            color: PALETTE.warmBrown,
            marginBottom: "10px",
            maxWidth: "200px",
            whiteSpace: "normal",
            fontStyle: "italic",
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>

        {/* Score bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: PALETTE.warmBrown,
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: 600,
            }}
          >
            {lowPole}
          </span>
          <div
            style={{
              flex: 1,
              height: "6px",
              backgroundColor: PALETTE.softBeige,
              borderRadius: "3px",
              overflow: "hidden",
              minWidth: "60px",
              border: `1px solid ${PALETTE.warmBrown}40`,
            }}
          >
            <div
              style={{
                height: "100%",
                background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 100%)`,
                borderRadius: "2px",
                width: `${percentage}%`,
              }}
            />
          </div>
          <span
            style={{
              color: PALETTE.warmBrown,
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: 600,
            }}
          >
            {highPole}
          </span>
        </div>

        {/* Numeric score */}
        <div
          style={{
            textAlign: "center",
            color: PALETTE.institutionalTeal,
            fontSize: "10px",
            marginTop: "6px",
            fontWeight: 600,
          }}
        >
          {score}/{maxScore}
        </div>

        {/* Arrow - pointing down */}
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: `8px solid #9DBDBD`,
          }}
        />
        {/* Inner arrow for cream fill */}
        <div
          style={{
            position: "absolute",
            top: "calc(100% - 3px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: `6px solid ${PALETTE.cream}`,
          }}
        />
      </div>
    </div>
  );
}
