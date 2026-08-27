import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { publishedProducts } from "@/data/products";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getPublishedBlogSlugs } from "@/lib/mdx";

function getLastModified(files: string[]): Date {
  const existingFiles = files.filter((file) => existsSync(file));

  try {
    const output = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();

    if (output) return new Date(output);
  } catch {
    // Vercel and local builds normally have git metadata. File mtimes are a safe fallback.
  }

  const latestMtime = existingFiles.reduce((latest, file) => {
    const mtime = statSync(file).mtime.getTime();
    return Math.max(latest, mtime);
  }, 0);

  return latestMtime ? new Date(latestMtime) : new Date();
}

function sourceFilesFor(locale: string, path: string): string[] {
  const common = ["app/layout.tsx", "app/[locale]/layout.tsx", "data/site.ts", "data/translations.ts"];

  if (path === "") return [...common, "app/[locale]/page.tsx"];
  if (path === "about") return [...common, "app/[locale]/about/page.tsx"];
  if (path === "industrial-sourcing") return [...common, "app/[locale]/industrial-sourcing/page.tsx", "data/services.ts"];
  if (path === "services") return [...common, "app/[locale]/services/page.tsx", "data/services.ts"];
  if (path === "industries") return [...common, "app/[locale]/industries/page.tsx", "data/industries.ts"];
  if (path === "countries") return [...common, "app/[locale]/countries/page.tsx", "data/countries.ts"];
  if (path === "blog") return [...common, "app/[locale]/blog/page.tsx", "content/en/blog"];
  if (path === "contact") return [...common, "app/[locale]/contact/page.tsx"];
  if (path.startsWith("services/")) return [...common, "app/[locale]/services/[slug]/page.tsx", "data/services.ts"];
  if (path.startsWith("industries/")) return [...common, "app/[locale]/industries/[slug]/page.tsx", "data/industries.ts"];
  if (path.startsWith("countries/")) return [...common, "app/[locale]/countries/[slug]/page.tsx", "data/countries.ts"];
  if (path.startsWith("products/auto-loader-spare-parts/")) {
    return [...common, "app/[locale]/products/auto-loader-spare-parts/[slug]/page.tsx", "data/products.ts", "product inbox/apc-400/product.yaml"];
  }
  if (path.startsWith("products/electrical-components/")) {
    return [
      ...common,
      "app/[locale]/products/electrical-components/[slug]/page.tsx",
      "data/products.ts",
      "product inbox/solid state relay 80A/product.yaml"
    ];
  }
  if (path.startsWith("products/hvac-refrigeration-components/")) {
    return [
      ...common,
      "app/[locale]/products/hvac-refrigeration-components/[slug]/page.tsx",
      "data/products.ts",
      "product inbox/Copeland CRNQ-050E-TFD-556/product.yaml",
      "product inbox/Copeland ZR61KC-TFD-522/product.yaml"
    ];
  }
  if (path.startsWith("products/hydraulic-components/")) {
    return [
      ...common,
      "app/[locale]/products/hydraulic-components/[slug]/page.tsx",
      "data/products.ts",
      "product inbox/rexroth-4we6d6x-ofeg24n9k4/product.yaml",
      "product inbox/aryung atp-216ha/product.yaml",
      "product inbox/dakin v38a3rx/product.yaml",
      "product inbox/hytek HG0-08-01a-vpc/product.yaml",
      "product inbox/HYDROMAX HGP-22A-F4+4R/product.yaml",
      "product inbox/Rexroth pump AZPW-21-022RQRXXMB-S0593/product.yaml",
      "product inbox/rexroth pump A a10vs0/product.yaml",
      "product inbox/rexroth valve manifold/product.yaml",
      "app/[locale]/products/hydraulic-components/[slug]/RexrothCounterbalanceValvePage.tsx"
    ];
  }
  if (path.startsWith("products/industrial-cleaning-equipment/")) {
    return [
      ...common,
      "app/[locale]/products/industrial-cleaning-equipment/[slug]/page.tsx",
      "data/products.ts",
      "product inbox/heat cleaning furnance/product.yaml"
    ];
  }
  if (path.startsWith("products/industrial-bearings/")) {
    return [
      ...common,
      "app/[locale]/products/industrial-bearings/[slug]/page.tsx",
      "data/products.ts",
      "product inbox/SKF 51226 thrust ball bearing/product.yaml",
      "product inbox/SKF 7307 BECBP angular contact ball bearing/product.yaml",
      "product inbox/SKF NU 306 ECM cylindrical roller bearing/product.yaml",
      "product inbox/IEF BCB-3572-2R-SU-CP precision bearing set/product.yaml",
      "product inbox/FAG QJ219-N2-MPA four-point contact bearing/product.yaml",
      "product inbox/SKF 6004-2Z deep groove ball bearing/product.yaml"
    ];
  }
  if (path.startsWith("products/metalworking-equipment/")) {
    return [
      ...common,
      "app/[locale]/products/metalworking-equipment/[slug]/page.tsx",
      "app/[locale]/products/metalworking-equipment/[slug]/VerticalTurretMillingMachinePage.tsx",
      "data/products.ts",
      "product inbox/pipe taper machine/product.yaml",
      "product inbox/HJY-4GT vertical turret milling machine/product.yaml"
    ];
  }
  if (path.startsWith("products/cutting-tools/")) {
    return [
      ...common,
      "app/[locale]/products/cutting-tools/[slug]/page.tsx",
      "data/products.ts",
      "product inbox/custom cutting tools/product.yaml"
    ];
  }
  if (path.startsWith("products/packaging-equipment/")) {
    return [
      ...common,
      "app/[locale]/products/packaging-equipment/[slug]/page.tsx",
      "app/[locale]/products/packaging-equipment/[slug]/TraySealingMachinePage.tsx",
      "data/products.ts",
      "product inbox/auto strapping machine MS-505/product.yaml",
      "product inbox/box sealing machine/product.yaml"
    ];
  }
  if (path.startsWith("blog/")) {
    const slug = path.replace("blog/", "");
    return [...common, "app/[locale]/blog/[slug]/page.tsx", `content/en/blog/${slug}.md`];
  }

  return common;
}

function sitemapEntry(locale: string, path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return {
    url: `${site.url}/${locale}/${path}`.replace(/\/$/, "") + "/",
    lastModified: getLastModified(sourceFilesFor(locale, path)),
    changeFrequency,
    priority
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "about", "industrial-sourcing", "services", "industries", "countries", "blog", "contact"];
  const translatedPaths = ["", "industrial-sourcing", "contact"];
  const detailPaths = [
    ...services.map((item) => `services/${item.slug}`),
    ...industries.map((item) => `industries/${item.slug}`),
    ...countries.map((item) => `countries/${item.slug}`),
    ...publishedProducts.map((item) => item.path.replace(/^\/en\//, "").replace(/\/$/, "")),
    ...getPublishedBlogSlugs().map((slug) => `blog/${slug}`)
  ];
  const enUrls = [...staticPaths, ...detailPaths].map((path) =>
    sitemapEntry("en", path, path === "" ? 1 : path.includes("/") ? 0.72 : 0.82, path.includes("blog/") ? "monthly" : "weekly")
  );

  const localeUrls = site.locales
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      translatedPaths.map((path) =>
        sitemapEntry(locale, path, path === "" ? 0.95 : 0.82, "weekly")
      )
  );

  return [...enUrls, ...localeUrls];
}
