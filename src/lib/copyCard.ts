import { toPng } from "html-to-image";

/**
 * Captures a DOM element as a PNG and copies it to the clipboard.
 * Returns true on success, false on failure.
 */
export async function copyElementAsImage(
  element: HTMLElement
): Promise<boolean> {
  try {
    const dataUrl = await toPng(element, {
      backgroundColor: "#111827", // gray-900
      pixelRatio: 2, // Higher resolution for crisp output
    });

    // Convert data URL to blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob }),
    ]);

    return true;
  } catch (error) {
    console.error("Failed to copy card as image:", error);
    return false;
  }
}
