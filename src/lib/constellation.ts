import type { AxisValues } from "./seedPhrase";

export interface ConstellationResult {
  name: string;
  myth: string;
}

/**
 * Generates a constellation name and mythic interpretation from axis values.
 * Calls an LLM API (Anthropic Claude) to generate creative content.
 *
 * Returns placeholder content if API key is not configured or call fails.
 */
export async function generateConstellation(
  values: AxisValues,
  apiKey?: string
): Promise<ConstellationResult> {
  // Use provided key or try to get from environment
  const key = apiKey || import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!key) {
    console.warn("No Anthropic API key configured, using placeholder constellation");
    return getPlaceholderConstellation(values);
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 200,
        messages: [
          {
            role: "user",
            content: buildPrompt(values),
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.content[0]?.text || "";

    return parseConstellationResponse(text);
  } catch (error) {
    console.error("Failed to generate constellation:", error);
    return getPlaceholderConstellation(values);
  }
}

function buildPrompt(values: AxisValues): string {
  return `You are creating a mythic constellation name and brief origin myth for a personality test result.

The person's 8 axis values (0=left pole, 15=right pole, 8=center):
- Elitist/Populist: ${values.elitist_populist}
- Legible/Illegible: ${values.legible_illegible}
- Sovereign/Symphonic: ${values.sovereign_symphonic}
- Anthro/Xeno: ${values.anthro_xeno}
- Mortal/Immortalist: ${values.mortal_immortalist}
- Accel/Steward: ${values.accel_steward}
- Aligned/Autonomous: ${values.aligned_autonomous}
- Apollonian/Dionysian: ${values.apollonian_dionysian}

Create a constellation name (2-3 words, evocative like "The Lantern" or "The Wandering Flame") and a 2-sentence mythic description of those who bear this constellation.

Format your response exactly as:
NAME: [constellation name]
MYTH: [2-sentence myth]`;
}

function parseConstellationResponse(text: string): ConstellationResult {
  const nameMatch = text.match(/NAME:\s*(.+?)(?:\n|$)/i);
  const mythMatch = text.match(/MYTH:\s*(.+)/is);

  return {
    name: nameMatch?.[1]?.trim() || "The Unknown",
    myth: mythMatch?.[1]?.trim() || "A mystery yet to be revealed.",
  };
}

function getPlaceholderConstellation(values: AxisValues): ConstellationResult {
  // Generate a simple deterministic name based on dominant traits
  const order = values.apollonian_dionysian < 8 ? "Flame" : "Shadow";
  const scale = values.anthro_xeno < 8 ? "Keeper" : "Seeker";

  return {
    name: `The ${order} ${scale}`,
    myth: "Those who bear this constellation walk between worlds, carrying questions that have no easy answers. Their path is their own to forge.",
  };
}
