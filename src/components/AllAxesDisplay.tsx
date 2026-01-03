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
  { key: "elitist_populist", leftLabel: "Elitist", rightLabel: "Populist" },
  { key: "optimist_doomer", leftLabel: "Optimist", rightLabel: "Doomer" },
  { key: "earnest_ironic", leftLabel: "Earnest", rightLabel: "Ironic" },
  { key: "sovereign_symphonic", leftLabel: "Sovereign", rightLabel: "Symphonic" },
  { key: "anthropo_cosmo", leftLabel: "Anthropocentric", rightLabel: "Cosmocentric" },
  { key: "mortal_immortal", leftLabel: "Mortal", rightLabel: "Immortalist" },
  { key: "vanguard_steward", leftLabel: "Vanguard", rightLabel: "Steward" },
  { key: "aligned_autonomous", leftLabel: "Aligned", rightLabel: "Autonomous" },
];

interface AllAxesDisplayProps {
  values: AxisValues;
}

/**
 * Renders all 8 personality axes with their current values.
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
