import { Locale, site } from "@/data/site";

export function isLocale(value: string): value is Locale {
  return (site.locales as readonly string[]).includes(value);
}

export function localePrefix(locale: string) {
  return isLocale(locale) ? `/${locale}` : "/en";
}

export function localizePath(locale: string, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix(locale)}${clean === "/" ? "/" : clean}`;
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Francais",
  es: "Espanol",
  ru: "Russian",
  ar: "Arabic"
};
