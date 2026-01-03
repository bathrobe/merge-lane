import { useEffect, useRef, useState } from "react";
import type { AxisValues } from "../lib/seedPhrase";
import { encode } from "../lib/seedPhrase";
import { generateConstellation, type ConstellationResult } from "../lib/constellation";
import { copyElementAsImage, downloadElementAsImage } from "../lib/copyCard";
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
type DownloadStatus = "idle" | "downloading";

function ResultsScreen({ values, onReset }: ResultsScreenProps) {
  const [constellation, setConstellation] = useState<ConstellationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>("idle");
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

  async function handleDownloadCard() {
    if (!cardRef.current) return;
    setDownloadStatus("downloading");
    const filename = `scholastic-fair-${seedPhrase.replace(/ /g, "-")}.png`;
    await downloadElementAsImage(cardRef.current, filename);
    setDownloadStatus("idle");
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
      {/* Using inline styles with RGB colors for html2canvas compatibility (oklch not supported) */}
      <div
        ref={cardRef}
        className="max-w-md w-full space-y-8 p-4"
        style={{ backgroundColor: "#111827", color: "#ffffff" }}
      >
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

        {/* Debug/Fallback: Download to isolate clipboard vs screenshot issues */}
        <button
          onClick={handleDownloadCard}
          disabled={downloadStatus === "downloading"}
          className="text-xs text-gray-400 hover:text-white underline"
        >
          {downloadStatus === "downloading" ? "Generating..." : "Download as Image"}
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
