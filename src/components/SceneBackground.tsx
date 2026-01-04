interface SceneBackgroundProps {
  backgroundName?: string;
}

// Special backgrounds that render as solid colors instead of images
const SPECIAL_BACKGROUNDS: Record<string, string> = {
  transition: "bg-black",
  // Add more as needed: loading, dream, glitch, etc.
};

/**
 * Scene image that fills the left portion of the split layout.
 * Special backgrounds (like "transition") render as solid colors.
 */
function SceneBackground({ backgroundName }: SceneBackgroundProps) {
  if (!backgroundName) {
    return <div className="absolute inset-0 bg-gray-900" />;
  }

  // Check for special backgrounds first
  const specialClass = SPECIAL_BACKGROUNDS[backgroundName];
  if (specialClass) {
    return <div className={`absolute inset-0 ${specialClass}`} />;
  }

  // Otherwise, treat as image name
  const imagePath = `/backgrounds/${backgroundName}.jpg`;

  // Mobile: preserve 4:3 aspect, show full image (bg-contain), cap height for landscape
  // Desktop: absolute positioned, cover with safe zone focal point (30% from left)
  return (
    <div
      className="
        w-full aspect-[4/3]
        max-h-[45vh]
        md:max-h-none md:aspect-auto md:absolute md:inset-0
        bg-contain bg-center bg-no-repeat
        md:bg-cover md:bg-[30%_50%]
        bg-gray-800
      "
      style={{ backgroundImage: `url(${imagePath})` }}
    />
  );
}

export default SceneBackground;
