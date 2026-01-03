interface AxisDisplayProps {
  leftLabel: string;
  rightLabel: string;
  value: number; // 0-15, where 8 is midpoint
}

/**
 * Displays a single personality axis with a dot showing position.
 * Value 0 = fully left, 15 = fully right, 8 = center.
 */
function AxisDisplay({ leftLabel, rightLabel, value }: AxisDisplayProps) {
  // Clamp value to valid range and calculate percentage position
  const clampedValue = Math.max(0, Math.min(15, value));
  const positionPercent = (clampedValue / 15) * 100;

  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-right text-sm">{leftLabel}</span>
      <div className="relative flex-1 h-1 bg-gray-600 rounded">
        <div
          className="absolute w-3 h-3 bg-white rounded-full -translate-y-1/2 top-1/2"
          style={{ left: `calc(${positionPercent}% - 6px)` }}
        />
      </div>
      <span className="w-24 text-left text-sm">{rightLabel}</span>
    </div>
  );
}

export default AxisDisplay;
