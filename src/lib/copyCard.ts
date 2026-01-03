import { domToPng } from "modern-screenshot";

// Shared config for consistency
const SCREENSHOT_CONFIG = {
  backgroundColor: "#111827", // gray-900
  scale: 2,
};

/**
 * Captures a DOM element as a PNG and copies it to the clipboard.
 * Returns true on success, false on failure.
 */
export async function copyElementAsImage(
  element: HTMLElement
): Promise<boolean> {
  try {
    console.log("[copyCard] Starting generation...");

    // 1. Generate PNG Data URL
    const dataUrl = await domToPng(element, SCREENSHOT_CONFIG);
    console.log("[copyCard] Data URL generated, length:", dataUrl.length);

    // 2. Fetch and create a strictly-typed Blob
    const res = await fetch(dataUrl);
    const blob = await res.blob();

    // CRITICAL FIX: Explicitly enforce the MIME type in a new Blob
    const pngBlob = new Blob([blob], { type: "image/png" });
    console.log("[copyCard] Blob prepared:", pngBlob.size, pngBlob.type);

    // 3. Write to Clipboard
    const item = new ClipboardItem({ "image/png": pngBlob });

    console.log("[copyCard] Requesting clipboard write...");
    await navigator.clipboard.write([item]);
    console.log("[copyCard] Write complete");

    return true;
  } catch (error) {
    console.error("[copyCard] Failed:", error);

    // Check permissions if possible to give better debug info
    if (navigator.permissions && navigator.permissions.query) {
      // @ts-ignore: clipboard-write permission type check
      const p = await navigator.permissions
        .query({ name: "clipboard-write" })
        .catch(() => null);
      if (p) console.log("[copyCard] Permission state:", p.state);
    }

    return false;
  }
}

/**
 * Fallback/Debug function to verify image generation works,
 * independent of clipboard API quirks.
 */
export async function downloadElementAsImage(
  element: HTMLElement,
  filename = "character-card.png"
): Promise<boolean> {
  try {
    console.log("[downloadCard] Starting generation...");
    const dataUrl = await domToPng(element, SCREENSHOT_CONFIG);
    console.log("[downloadCard] Data URL generated, length:", dataUrl.length);

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();

    console.log("[downloadCard] Download triggered");
    return true;
  } catch (error) {
    console.error("[downloadCard] Failed:", error);
    return false;
  }
}
