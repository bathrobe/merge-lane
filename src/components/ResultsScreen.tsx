import { useEffect, useState } from "react";
import type { AxisValues } from "../lib/seedPhrase";
import { encode } from "../lib/seedPhrase";
import { generateConstellation, type ConstellationResult } from "../lib/constellation";
import ConstellationChart from "./ConstellationChart";
import AllAxesDisplay from "./AllAxesDisplay";
import SeedPhraseDisplay from "./SeedPhraseDisplay";

interface ResultsScreenProps {
  values: AxisValues;
}

/**
 * Full-screen results display after completing the story.
 * Shows constellation, axes, and seed phrase.
 */
function ResultsScreen({ values }: ResultsScreenProps) {
  const [constellation, setConstellation] = useState<ConstellationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const seedPhrase = encode(values);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-md w-full space-y-8">
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
    </div>
  );
}

export default ResultsScreen;
