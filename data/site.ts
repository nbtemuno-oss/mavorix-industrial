export const site = {
  name: "MAVORIX INDUSTRIAL",
  tagline: "Your Industrial Sourcing Partner in China",
  domain: "www.mavorixindustrial.com",
  url: "https://www.mavorixindustrial.com",
  email: "mavorixindustrial@163.com",
  phone: "+8613967842747",
  whatsappUrl: "https://wa.me/8613967842747",
  locales: ["en", "fr", "es", "ru", "ar"] as const,
  defaultLocale: "en",
  description:
    "China-based industrial sourcing support for overseas buyers of machinery, OEM products, MRO supplies, spare parts, and industrial equipment.",
  addressCountry: "CN"
};

export type Locale = (typeof site.locales)[number];
