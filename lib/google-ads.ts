// Public destination identifiers from the dedicated Japanese RFQ conversion action.
export const japaneseAdsTagId = "AW-18507960360";
export const japaneseRfqDestination = `${japaneseAdsTagId}/7NqrCMeDybAdEKigpPlE`;

type GoogleTag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GoogleTag;
  }
}

export function initializeJapaneseAdsTag() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };
}

// Call only with the result of the contact endpoint. Never pass inquiry fields.
export function trackJapaneseRfq(result: { locale: string; ok: boolean }) {
  if (typeof window === "undefined" || result.locale !== "ja" || !result.ok) return;
  try {
    initializeJapaneseAdsTag();
    window.gtag!("event", "conversion", {
      send_to: japaneseRfqDestination,
      transaction_id: crypto.randomUUID()
    });
  } catch {
    // A blocked analytics script must not change the inquiry's successful outcome.
  }
}
