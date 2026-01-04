import type { AxisValues } from "./AllAxesDisplay";

interface ConstellationChartProps {
  values: AxisValues;
  size?: number; // Width/height in pixels, default 200
  className?: string; // For CSS-based responsive sizing
}

// Order of axes around the circle (clockwise from top)
const AXIS_ORDER: Array<keyof AxisValues> = [
  "elitist_populist",
  "legible_illegible",
  "sovereign_symphonic",
  "anthro_xeno",
  "mortal_immortalist",
  "accel_steward",
  "aligned_autonomous",
  "apollonian_dionysian",
];

/**
 * Plots 8 personality axis values as dots on a circular chart.
 * Value 0 = center, value 15 = edge.
 */
function ConstellationChart({ values, size = 200, className }: ConstellationChartProps) {
  const center = 50; // Center of viewBox
  const maxRadius = 40; // Max distance from center to edge

  // Convert axis value + index to x,y coordinates
  const getPointCoords = (value: number, index: number) => {
    // Angle in radians, starting from top (-90°), going clockwise
    const angleRadians = ((index * 45 - 90) * Math.PI) / 180;
    // Radius scales with value: 0 = center, 15 = maxRadius
    const radius = (Math.max(0, Math.min(15, value)) / 15) * maxRadius;
    return {
      x: center + radius * Math.cos(angleRadians),
      y: center + radius * Math.sin(angleRadians),
    };
  };

  const points = AXIS_ORDER.map((key, index) => ({
    key,
    ...getPointCoords(values[key], index),
  }));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`overflow-visible ${className ?? ""}`}
    >
      {/* Faint circle outline for reference */}
      <circle
        cx={center}
        cy={center}
        r={maxRadius}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeWidth={0.5}
      />
      {/* Center dot */}
      <circle cx={center} cy={center} r={1} fill="currentColor" fillOpacity={0.3} />
      {/* Constellation dots */}
      {points.map((point) => (
        <circle
          key={point.key}
          cx={point.x}
          cy={point.y}
          r={2}
          fill="white"
        />
      ))}
    </svg>
  );
}

export default ConstellationChart;
