interface SceneBackgroundProps {
  backgroundName?: string;
}

/**
 * Full-bleed background image based on Ink's `background` tag.
 * Sits behind all other content as an absolute-positioned layer.
 */
function SceneBackground({ backgroundName }: SceneBackgroundProps) {
  if (!backgroundName) {
    return <div className="absolute inset-0 bg-gray-900 -z-10" />;
  }

  // For now, show placeholder. Actual images go in assets/backgrounds/
  const imagePath = `/src/assets/backgrounds/${backgroundName}.jpg`;

  return (
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-gray-800"
      style={{ backgroundImage: `url(${imagePath})` }}
    />
  );
}

export default SceneBackground;
