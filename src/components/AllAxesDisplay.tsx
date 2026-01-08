import AxisDisplay from "./AxisDisplay";
import type { AxisValues } from "../lib/seedPhrase";

// Re-export for convenience
export type { AxisValues } from "../lib/seedPhrase";

// Metadata for displaying each axis
const AXIS_CONFIG: Array<{
  key: keyof AxisValues;
  leftLabel: string;
  rightLabel: string;
}> = [
  { key: "legible_illegible", leftLabel: "Legible", rightLabel: "Illegible" },
  { key: "sovereign_symphonic", leftLabel: "Sovereign", rightLabel: "Symphonic" },
  { key: "anthro_xeno", leftLabel: "Anthro", rightLabel: "Xeno" },
  { key: "mortal_immortalist", leftLabel: "Mortal", rightLabel: "Immortalist" },
  { key: "accel_steward", leftLabel: "Accel", rightLabel: "Steward" },
  { key: "aligned_autonomous", leftLabel: "Aligned", rightLabel: "Autonomous" },
  { key: "apollonian_dionysian", leftLabel: "Apollonian", rightLabel: "Dionysian" },
];

interface AllAxesDisplayProps {
  values: AxisValues;
}

/**
 * Renders all 7 personality axes with their current values.
 */
function AllAxesDisplay({ values }: AllAxesDisplayProps) {
  return (
    <div className="space-y-3">
      {AXIS_CONFIG.map((axis) => (
        <AxisDisplay
          key={axis.key}
          leftLabel={axis.leftLabel}
          rightLabel={axis.rightLabel}
          value={values[axis.key]}
        />
      ))}
    </div>
  );
}

export default AllAxesDisplay;
