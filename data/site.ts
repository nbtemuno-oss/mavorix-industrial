export const site = {
  name: "MAVORIX INDUSTRIAL",
  tagline: "Your Industrial Sourcing Partner in China",
  domain: "mavorixindustrial.com",
  url: "https://mavorixindustrial.com",
  email: "info@mavorixindustrial.com",
  whatsappUrl: "https://wa.me/XXXXXXXXXXX",
  locales: ["en", "fr", "es", "ru", "ar"] as const,
  defaultLocale: "en",
  description:
    "China-based industrial sourcing support for overseas buyers of machinery, OEM products, MRO supplies, spare parts, and industrial equipment.",
  addressCountry: "CN"
};

export type Locale = (typeof site.locales)[number];
