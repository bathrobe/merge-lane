interface TitleScreenProps {
  onNewGame: () => void;
  onContinue: () => void;
  hasSave: boolean;
}

function TitleScreen({ onNewGame, onContinue, hasSave }: TitleScreenProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Scholastic Fair</h1>

      <button onClick={onNewGame} className="px-4 py-2 border">
        New Game
      </button>

      <button
        onClick={onContinue}
        disabled={!hasSave}
        className="px-4 py-2 border disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  );
}

export default TitleScreen;
