interface SeedPhraseDisplayProps {
  phrase: string; // 3 words, space-separated
}

/**
 * Displays the 3-word seed phrase prominently.
 * The phrase is the player's portable identity.
 */
function SeedPhraseDisplay({ phrase }: SeedPhraseDisplayProps) {
  const words = phrase.split(" ");

  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-wider mb-2 opacity-70">
        Your Phrase
      </p>
      <p className="text-2xl font-mono tracking-wide">
        {words.join(" · ")}
      </p>
      <p className="text-xs mt-2 opacity-50">
        save this somewhere private
      </p>
    </div>
  );
}

export default SeedPhraseDisplay;
