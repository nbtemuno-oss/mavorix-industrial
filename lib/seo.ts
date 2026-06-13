import type { Metadata } from "next";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
  index?: boolean;
  locale?: string;
  type?: "website" | "article";
};

export function seo({ title, description, path, canonicalPath, index = true, locale, type = "website" }: SeoInput): Metadata {
  const pageLocale = locale ?? path.match(/^\/([a-z]{2})(?:\/|$)/)?.[1] ?? "en";
  const canonicalSource = canonicalPath ?? path;
  const canonical = `${site.url}${canonicalSource}`;
  const suffix = canonicalSource.replace(/^\/[a-z]{2}/, "") || "/";
  const translatedPaths = new Set(["/", "/industrial-sourcing/", "/contact/"]);
  const normalizedSuffix = suffix.endsWith("/") ? suffix : `${suffix}/`;
  const languages = translatedPaths.has(normalizedSuffix)
    ? {
        ...Object.fromEntries(site.locales.map((code) => [code, `${site.url}/${code}${normalizedSuffix === "/" ? "" : normalizedSuffix}`])),
        "x-default": `${site.url}/en${normalizedSuffix === "/" ? "" : normalizedSuffix}`
      }
    : { en: `${site.url}/en${normalizedSuffix === "/" ? "" : normalizedSuffix}` };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: pageLocale,
      type,
      images: [
        {
          url: "/images/logo/mavorix-og-logo-card.jpg",
          width: 1200,
          height: 630,
          alt: "MAVORIX INDUSTRIAL"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo/mavorix-og-logo-card.jpg"]
    },
    robots: {
      index,
      follow: true
    }
  };
}
