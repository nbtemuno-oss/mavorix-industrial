import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const seoDir = path.join(root, "data", "seo");
const blogDir = path.join(root, "content", "en", "blog");
const queuePath = path.join(seoDir, "article-queue.json");
const logPath = path.join(seoDir, "published-articles-log.json");
const researchPath = path.join(seoDir, "weekly-keyword-research.json");

const defaultImageLinks = {
  "Industrial Sourcing": ["/en/services/china-industrial-sourcing/", "/en/services/supplier-verification/", "/en/services/quality-inspection/", "/en/contact/"],
  "Factory Consumables & MRO": ["/en/services/mro-sourcing-from-china/", "/en/services/industrial-spare-parts-sourcing/", "/en/services/container-consolidation/", "/en/contact/"],
  "Country Market Guides": ["/en/countries/", "/en/services/china-industrial-sourcing/", "/en/services/container-consolidation/", "/en/contact/"],
  "Injection Molding Support": ["/en/industries/plastic-industry/", "/en/services/industrial-spare-parts-sourcing/", "/en/services/supplier-verification/", "/en/contact/"],
  "Buying Guides": ["/en/services/container-consolidation/", "/en/services/export-support/", "/en/services/china-industrial-sourcing/", "/en/contact/"],
  "Packaging Industry": ["/en/industries/packaging-industry/", "/en/services/china-industrial-sourcing/", "/en/services/quality-inspection/", "/en/contact/"]
};

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function getCount() {
  const arg = process.argv.find((item) => item.startsWith("--count="));
  if (arg) return Number(arg.split("=")[1]) || 1;
  const index = process.argv.indexOf("--count");
  if (index >= 0 && process.argv[index + 1]) return Number(process.argv[index + 1]) || 1;
  return Number(process.env.ARTICLE_COUNT || "1") || 1;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function yamlList(items) {
  return `[${items.map((item) => `"${item.replace(/"/g, "'")}"`).join(", ")}]`;
}

function descriptionFor(item) {
  const base = {
    "Industrial Sourcing": "A practical B2B guide for overseas factories choosing China industrial sourcing support, supplier comparison, quotation review, and procurement coordination.",
    "Factory Consumables & MRO": "A practical guide for overseas factories sourcing MRO supplies, factory consumables, spare parts, and mixed maintenance items from China.",
    "Country Market Guides": "A practical guide for Balkan and Southeast Europe factory buyers sourcing industrial products, MRO supplies, and spare parts from China.",
    "Injection Molding Support": "A practical guide for plastic factories sourcing injection molding spare parts, auxiliary equipment, and MRO items from China.",
    "Buying Guides": "A practical guide for overseas industrial buyers consolidating multiple China suppliers into one coordinated shipment.",
    "Packaging Industry": "A practical guide for packaging industry buyers sourcing machines, conveyors, parts, and industrial packaging support from China."
  };
  return base[item.category] ?? `A practical B2B guide for ${item.targetKeyword}.`;
}

function linkSentence(links) {
  const known = {
    "/en/services/china-industrial-sourcing/": "[China industrial sourcing](/en/services/china-industrial-sourcing/)",
    "/en/services/supplier-verification/": "[supplier verification](/en/services/supplier-verification/)",
    "/en/services/quality-inspection/": "[quality inspection](/en/services/quality-inspection/)",
    "/en/services/mro-sourcing-from-china/": "[MRO sourcing from China](/en/services/mro-sourcing-from-china/)",
    "/en/services/industrial-spare-parts-sourcing/": "[industrial spare parts sourcing](/en/services/industrial-spare-parts-sourcing/)",
    "/en/services/container-consolidation/": "[container consolidation](/en/services/container-consolidation/)",
    "/en/services/export-support/": "[export support](/en/services/export-support/)",
    "/en/industries/plastic-industry/": "[plastic industry sourcing](/en/industries/plastic-industry/)",
    "/en/industries/packaging-industry/": "[packaging industry sourcing](/en/industries/packaging-industry/)",
    "/en/industries/": "[industries MAVORIX supports](/en/industries/)",
    "/en/countries/": "[country sourcing pages](/en/countries/)",
    "/en/contact/": "[contact MAVORIX Industrial](/en/contact/)"
  };
  return links.map((link) => known[link] ?? `[related page](${link})`).join(", ");
}

function renderArticle(item) {
  const links = item.internalLinks?.length ? item.internalLinks : (defaultImageLinks[item.category] ?? defaultImageLinks["Industrial Sourcing"]);
  const secondary = item.secondaryKeywords?.length ? item.secondaryKeywords : [];
  const description = descriptionFor(item);

  const categoryBodies = {
    "Industrial Sourcing": [
      "For many overseas factories, buying from China is not difficult at the search stage. The harder part is deciding which supplier is suitable, whether a quotation matches the real specification, and how to coordinate production, inspection, packing, and shipment without creating avoidable risk.",
      "A useful China industrial sourcing partner should help the buyer turn a broad requirement into a clear sourcing brief. That means checking product application, photos, drawings, material, quantity, destination country, packing expectations, and any supplier links the buyer already found. MAVORIX Industrial works as a China-side sourcing and procurement support partner for this practical coordination work.",
      "Buyers should not judge support only by the number of supplier names received. More useful signals include whether the sourcing partner asks technical questions, compares quotation assumptions, explains supplier capability limits, and keeps communication clear before payment."
    ],
    "Factory Consumables & MRO": [
      "Factory consumables and MRO supplies often look simple because each item may be small. In practice, mixed orders can become complicated when they include belts, filters, fasteners, seals, bearings, tools, hoses, electrical parts, pneumatic components, and spare parts from different suppliers.",
      "For overseas maintenance teams, the main challenge is not only price. The buyer also needs correct item identification, compatible specifications, realistic lead times, acceptable packing, and a way to consolidate several small supplier deliveries. MAVORIX Industrial supports this process as a China sourcing and procurement coordination partner.",
      "A structured MRO request should separate urgent replacement parts from routine consumables. Urgent items need faster confirmation of model numbers, photos, dimensions, and supplier stock. Routine items can often be grouped for better communication and shipment planning."
    ],
    "Country Market Guides": [
      "Factories in the Balkans and Southeast Europe often buy industrial products from China for practical reasons: spare parts availability, mixed MRO requirements, packaging machinery parts, agricultural equipment parts, and cost comparison. The challenge is keeping supplier communication clear across distance, language, and technical assumptions.",
      "A buyer in Serbia, North Macedonia, Romania, Bulgaria, or nearby markets may need a China-side contact to compare suppliers, review quotations, check packing details, and coordinate mixed orders. MAVORIX Industrial does not claim local customs control or guaranteed import outcomes; the role is supplier-side sourcing and procurement support from China.",
      "The best starting point is a clear purchasing file with photos, drawings, models, quantities, destination country, and any target standards. This helps avoid vague supplier replies and makes quotation comparison more useful."
    ],
    "Injection Molding Support": [
      "Injection molding factories often need more than one product category from China. A single sourcing request may include machine spare parts, mold components, heaters, sensors, hot runner parts, dryers, chillers, loaders, conveyors, filters, hoses, and packaging items.",
      "The biggest risk is mismatch. A part can look similar in a photo but fail because of dimensions, voltage, material, connector type, machine model, or tolerance. MAVORIX Industrial supports plastic factories by helping clarify requirements, compare supplier answers, and coordinate practical checks before shipment.",
      "For spare parts, buyers should provide machine nameplate photos, old part photos, drawings if available, dimensions, application notes, and quantity. When the supplier proposes an alternative, the buyer should confirm what is identical and what is different."
    ],
    "Buying Guides": [
      "Many overseas industrial buyers purchase from several Chinese suppliers in one month: one factory for spare parts, another for MRO supplies, another for packaging materials, and another for machinery accessories. Without coordination, this can create repeated shipping costs, unclear packing, and late deliveries.",
      "Supplier consolidation is useful when the buyer wants several orders checked, packed, and shipped in a more organized way. MAVORIX Industrial can support supplier-side communication, delivery timing, packing notes, and consolidation follow-up for practical industrial orders.",
      "The process should start before suppliers finish production. If consolidation is discussed only after goods are ready, carton sizes, labels, delivery addresses, and timing may already be difficult to adjust."
    ],
    "Packaging Industry": [
      "Packaging industry sourcing from China can involve complete machines, conveyors, filling parts, sealing equipment, labeling components, belts, rollers, sensors, pneumatic parts, and packaging supplies. These items are often connected to a production line, so compatibility matters.",
      "A packaging buyer should compare suppliers by machine application, capacity, bottle or carton size range, voltage, control system, spare part availability, packing method, and after-sales communication. MAVORIX Industrial supports China-side supplier search, quotation comparison, and sourcing coordination for these practical checks.",
      "For parts and consumables, photos and dimensions are often more useful than product names alone. Belts, rollers, guide rails, sealing parts, and sensors may require model confirmation before a supplier can quote correctly."
    ]
  };

  const paragraphs = categoryBodies[item.category] ?? categoryBodies["Industrial Sourcing"];

  return `---
title: "${item.title}"
description: "${description}"
date: "${today()}"
category: "${item.category}"
tags: ${yamlList([item.targetKeyword, ...secondary].slice(0, 5))}
slug: "${item.slug}"
language: "en"
targetKeyword: "${item.targetKeyword}"
geoTarget: "${item.geoTarget || "Global"}"
relatedServices: ${yamlList(links)}
---

## Why this topic matters for overseas buyers

${paragraphs[0]}

${paragraphs[1]}

${paragraphs[2]}

## Practical checks before contacting suppliers

- Prepare product photos, drawings, model numbers, dimensions, quantity, destination country, and application notes.
- Separate must-have technical requirements from preferences so suppliers can answer clearly.
- Ask suppliers to confirm material, voltage, tolerance, packing, lead time, payment terms, and available documentation.
- Compare quotations by specification and scope, not only by unit price.
- Keep a record of supplier answers so differences are easy to review before payment.

## How MAVORIX Industrial can support the sourcing process

MAVORIX Industrial is positioned as a China industrial sourcing and procurement support partner for overseas factories, industrial buyers, procurement managers, distributors, and small or medium manufacturers. The support is practical: requirement review, supplier search, quotation comparison, supplier communication, inspection coordination, export packing follow-up, and shipment consolidation when several suppliers are involved.

This does not replace the buyer's own technical decision. Instead, it helps organize the China-side sourcing work so the buyer can make a clearer purchasing decision with fewer unknowns.

## Internal resources for the next step

Useful related pages include ${linkSentence(links)}.

## Buyer checklist

- Is the product specification complete enough for a supplier to quote accurately?
- Does the supplier understand the application and not only the product name?
- Are packing, labeling, lead time, and shipment assumptions included in the quotation?
- Is inspection or photo confirmation needed before shipment?
- If several suppliers are involved, should delivery and consolidation be coordinated early?

## Soft next step

If you are comparing suppliers or organizing an industrial sourcing request from China, you can send product details, photos, drawings, supplier links, quantities, and destination country to MAVORIX Industrial through the [contact page](/en/contact/). The team can review the practical sourcing path and help clarify the next steps.

### FAQ: What information should I prepare before asking for a quotation?
Prepare product photos, drawings, model numbers, materials, dimensions, quantity, destination country, application notes, and any supplier links you already found.

### FAQ: Can MAVORIX Industrial verify suppliers before payment?
Yes. MAVORIX Industrial can help review supplier identity, communication quality, capability signals, quotation details, and practical risk points before a buyer moves forward.

### FAQ: Can several suppliers be coordinated in one shipment?
Yes. When it is practical, MAVORIX Industrial can help coordinate delivery timing, packing notes, warehouse communication, and shipment consolidation for orders from multiple Chinese suppliers.

### FAQ: Does MAVORIX Industrial manufacture these products?
No. MAVORIX Industrial is a China sourcing and procurement support partner. The role is to help buyers source, compare, verify, and coordinate suppliers.
`;
}

const count = getCount();
const queue = readJson(queuePath, []);
const published = readJson(logPath, []);
const research = readJson(researchPath, []);
fs.mkdirSync(blogDir, { recursive: true });

const existingSlugs = new Set([
  ...fs.readdirSync(blogDir).filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, "")),
  ...published.map((item) => item.slug)
]);

const candidates = queue
  .filter((item) => item.status !== "published" && !existingSlugs.has(item.slug))
  .sort((a, b) => {
    const rank = { high: 0, medium: 1, low: 2 };
    return (rank[a.priority] ?? 9) - (rank[b.priority] ?? 9);
  })
  .slice(0, count);

if (!candidates.length) {
  console.log("No new planned article candidates available. Nothing to generate.");
  process.exit(0);
}

for (const item of candidates) {
  const filePath = path.join(blogDir, `${item.slug}.md`);
  fs.writeFileSync(filePath, renderArticle(item));
  item.status = "published";
  item.publishedAt = today();
  published.push({
    title: item.title,
    slug: item.slug,
    category: item.category,
    targetKeyword: item.targetKeyword,
    date: today(),
    filePath: `content/en/blog/${item.slug}.md`,
    commitHash: ""
  });
  for (const entry of research) {
    if (entry.recommendedSlug === item.slug) entry.status = "published";
  }
  console.log(`Generated article: ${filePath}`);
}

writeJson(queuePath, queue);
writeJson(logPath, published);
writeJson(researchPath, research);
