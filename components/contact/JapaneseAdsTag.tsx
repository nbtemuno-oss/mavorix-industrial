"use client";

import Script from "next/script";
import { useEffect } from "react";
import { initializeJapaneseAdsTag, japaneseAdsTagId } from "@/lib/google-ads";

export function JapaneseAdsTag() {
  useEffect(() => {
    initializeJapaneseAdsTag();
    window.gtag!("js", new Date());
    window.gtag!("config", japaneseAdsTagId, {
      allow_ad_personalization_signals: false,
      allow_enhanced_conversions: false
    });
  }, []);

  return <Script id="japanese-google-ads" src={`https://www.googletagmanager.com/gtag/js?id=${japaneseAdsTagId}`} strategy="afterInteractive" />;
}
