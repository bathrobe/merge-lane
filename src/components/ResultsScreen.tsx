import { useEffect, useRef, useState } from "react";
import type { AxisValues } from "../lib/seedPhrase";
import { encode } from "../lib/seedPhrase";
import { generateConstellation, type ConstellationResult } from "../lib/constellation";
import { copyElementAsImage } from "../lib/copyCard";
import ConstellationChart from "./ConstellationChart";
import AllAxesDisplay from "./AllAxesDisplay";
import SeedPhraseDisplay from "./SeedPhraseDisplay";
import SubstackSignup from "./SubstackSignup";

interface ResultsScreenProps {
  values: AxisValues;
  onReset: () => void;
}

/**
 * Full-screen results display after completing the story.
 * Shows constellation, axes, and seed phrase.
 */
type CopyStatus = "idle" | "copying" | "copied" | "error";

function ResultsScreen({ values, onReset }: ResultsScreenProps) {
  const [constellation, setConstellation] = useState<ConstellationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const cardRef = useRef<HTMLDivElement>(null);

  const seedPhrase = encode(values);

  async function handleCopyCard() {
    if (!cardRef.current) return;

    setCopyStatus("copying");
    const success = await copyElementAsImage(cardRef.current);
    setCopyStatus(success ? "copied" : "error");

    // Reset after 2 seconds
    setTimeout(() => setCopyStatus("idle"), 2000);
  }

  useEffect(() => {
    let cancelled = false;

    async function loadConstellation() {
      setIsLoading(true);
      const result = await generateConstellation(values);
      if (!cancelled) {
        setConstellation(result);
        setIsLoading(false);
      }
    }

    loadConstellation();

    return () => {
      cancelled = true;
    };
  }, [values]);

  const copyButtonLabel = {
    idle: "Copy Card",
    copying: "Copying...",
    copied: "Copied!",
    error: "Failed to copy",
  }[copyStatus];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {/* Card area - this gets captured as PNG */}
      <div ref={cardRef} className="max-w-md w-full space-y-8 bg-gray-900 p-4">
        {/* Constellation visualization */}
        <div className="flex flex-col items-center">
          <ConstellationChart values={values} size={200} />

          {/* Constellation name */}
          <h1 className="text-2xl font-bold mt-4">
            {isLoading ? "..." : constellation?.name}
          </h1>

          {/* Myth */}
          <p className="text-center text-sm opacity-80 mt-2 italic max-w-sm">
            {isLoading ? "Divining your constellation..." : constellation?.myth}
          </p>
        </div>

        {/* All 8 axes */}
        <div className="border-t border-gray-700 pt-6">
          <AllAxesDisplay values={values} />
        </div>

        {/* Seed phrase */}
        <div className="border-t border-gray-700 pt-6">
          <SeedPhraseDisplay phrase={seedPhrase} />
        </div>
      </div>

      {/* Actions - outside the card */}
      <div className="mt-8 flex flex-col items-center gap-6">
        <button
          onClick={handleCopyCard}
          disabled={copyStatus === "copying"}
          className="px-6 py-2 border border-white/30 rounded hover:bg-white/10 disabled:opacity-50"
        >
          {copyButtonLabel}
        </button>

        <SubstackSignup />

        <button
          onClick={onReset}
          className="text-sm opacity-70 hover:opacity-100 underline"
        >
          Start over
        </button>
      </div>
    </div>
  );
}

export default ResultsScreen;
