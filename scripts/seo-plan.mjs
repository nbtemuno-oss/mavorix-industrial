import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const seoDir = path.join(root, "data", "seo");
const blogDir = path.join(root, "content", "en", "blog");
const researchPath = path.join(seoDir, "weekly-keyword-research.json");
const queuePath = path.join(seoDir, "article-queue.json");
const logPath = path.join(seoDir, "published-articles-log.json");

const fallbackOpportunities = [
  {
    keyword: "China industrial sourcing partner for overseas factories",
    searchIntent: "Find a practical China-side procurement partner for industrial products",
    targetCustomer: "Overseas factory owners, procurement managers, and industrial distributors",
    category: "Industrial Sourcing",
    geoMarket: "Global",
    contentOpportunity: "Explain how a buyer can compare Chinese suppliers, quotations, and sourcing support before committing.",
    priority: "high",
    recommendedArticleTitle: "China Industrial Sourcing Partner for Overseas Factories: What Buyers Should Check",
    recommendedSlug: "china-industrial-sourcing-partner-for-overseas-factories",
    relatedExistingPages: ["/en/services/china-industrial-sourcing/", "/en/services/supplier-verification/", "/en/services/quality-inspection/", "/en/industries/"],
    internalLinkSuggestions: ["/en/services/china-industrial-sourcing/", "/en/services/supplier-verification/", "/en/contact/"]
  },
  {
    keyword: "Factory consumables and MRO supplies from China",
    searchIntent: "Source mixed factory maintenance items, consumables, and replacement supplies",
    targetCustomer: "Factory maintenance teams, MRO buyers, and procurement managers",
    category: "Factory Consumables & MRO",
    geoMarket: "Global",
    contentOpportunity: "Help buyers organize MRO item lists, supplier checks, and consolidation before shipment.",
    priority: "high",
    recommendedArticleTitle: "Factory Consumables and MRO Supplies from China: A Practical Buying Checklist",
    recommendedSlug: "factory-consumables-and-mro-supplies-from-china",
    relatedExistingPages: ["/en/services/mro-sourcing-from-china/", "/en/services/industrial-spare-parts-sourcing/", "/en/industries/mro-supplies/", "/en/industries/factory-spare-parts/"],
    internalLinkSuggestions: ["/en/services/mro-sourcing-from-china/", "/en/services/container-consolidation/", "/en/contact/"]
  },
  {
    keyword: "China sourcing support for Balkan factories",
    searchIntent: "Find China-side sourcing support for Balkan and Southeast Europe factory buyers",
    targetCustomer: "Factory owners and procurement teams in Serbia, North Macedonia, Romania, Bulgaria, and nearby markets",
    category: "Country Market Guides",
    geoMarket: "Balkans and Southeast Europe",
    contentOpportunity: "Connect country-market procurement needs with China industrial sourcing, MRO, and consolidation services.",
    priority: "high",
    recommendedArticleTitle: "China Sourcing Support for Balkan Factories: Practical Notes for Industrial Buyers",
    recommendedSlug: "china-sourcing-support-for-balkan-factories",
    relatedExistingPages: ["/en/countries/", "/en/services/china-industrial-sourcing/", "/en/services/container-consolidation/"],
    internalLinkSuggestions: ["/en/countries/", "/en/services/china-industrial-sourcing/", "/en/contact/"]
  },
  {
    keyword: "Injection molding factory spare parts sourcing from China",
    searchIntent: "Find spare parts, MRO items, and auxiliary equipment support for plastic factories",
    targetCustomer: "Plastic product factories and injection molding maintenance teams",
    category: "Injection Molding Support",
    geoMarket: "Global",
    contentOpportunity: "Explain how to identify molding spare parts and reduce mismatch risk when sourcing from China.",
    priority: "high",
    recommendedArticleTitle: "Injection Molding Factory Spare Parts Sourcing from China: What to Prepare",
    recommendedSlug: "injection-molding-factory-spare-parts-sourcing-from-china",
    relatedExistingPages: ["/en/industries/plastic-industry/", "/en/services/industrial-spare-parts-sourcing/", "/en/services/supplier-verification/"],
    internalLinkSuggestions: ["/en/industries/plastic-industry/", "/en/services/industrial-spare-parts-sourcing/", "/en/contact/"]
  },
  {
    keyword: "How to consolidate multiple China suppliers into one shipment",
    searchIntent: "Understand how to coordinate several Chinese suppliers and reduce fragmented shipments",
    targetCustomer: "Importers, factories, and distributors buying mixed industrial products",
    category: "Buying Guides",
    geoMarket: "Global",
    contentOpportunity: "Create a practical consolidation guide tied to supplier communication, packing, and shipment timing.",
    priority: "high",
    recommendedArticleTitle: "How to Consolidate Multiple China Suppliers into One Shipment",
    recommendedSlug: "how-to-consolidate-multiple-china-suppliers-into-one-shipment",
    relatedExistingPages: ["/en/services/container-consolidation/", "/en/services/export-support/", "/en/blog/consolidate-industrial-products-from-china/"],
    internalLinkSuggestions: ["/en/services/container-consolidation/", "/en/services/export-support/", "/en/contact/"]
  },
  {
    keyword: "Packaging industry sourcing China",
    searchIntent: "Source packaging machines, conveyors, filling parts, sealing equipment, and packaging supplies",
    targetCustomer: "Packaging factories, production managers, and distributors",
    category: "Packaging Industry",
    geoMarket: "Global",
    contentOpportunity: "Tie packaging equipment sourcing to supplier verification, spare parts, and production line support.",
    priority: "medium",
    recommendedArticleTitle: "Packaging Industry Sourcing from China: Machines, Parts, and Supplier Checks",
    recommendedSlug: "packaging-industry-sourcing-from-china",
    relatedExistingPages: ["/en/industries/packaging-industry/", "/en/services/china-industrial-sourcing/", "/en/services/quality-inspection/"],
    internalLinkSuggestions: ["/en/industries/packaging-industry/", "/en/services/china-industrial-sourcing/", "/en/contact/"]
  }
];

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function existingBlogSlugs() {
  if (!fs.existsSync(blogDir)) return new Set();
  return new Set(fs.readdirSync(blogDir).filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, "")));
}

const research = readJson(researchPath, []);
const queue = readJson(queuePath, []);
const published = readJson(logPath, []);
const usedSlugs = new Set([
  ...existingBlogSlugs(),
  ...queue.map((item) => item.slug),
  ...published.map((item) => item.slug)
]);

let addedResearch = 0;
let addedQueue = 0;

for (const item of fallbackOpportunities) {
  if (!research.some((entry) => entry.recommendedSlug === item.recommendedSlug || entry.keyword === item.keyword)) {
    research.push({ ...item, status: usedSlugs.has(item.recommendedSlug) ? "published" : "planned" });
    addedResearch += 1;
  }

  if (!usedSlugs.has(item.recommendedSlug) && !queue.some((entry) => entry.slug === item.recommendedSlug)) {
    queue.push({
      title: item.recommendedArticleTitle,
      slug: item.recommendedSlug,
      category: item.category,
      targetKeyword: item.keyword,
      secondaryKeywords: [],
      geoTarget: item.geoMarket,
      targetCustomer: item.targetCustomer,
      searchIntent: item.searchIntent,
      outline: [
        "Buyer context and sourcing problem",
        "Practical checks before supplier selection",
        "Internal links to relevant MAVORIX pages",
        "Soft CTA"
      ],
      internalLinks: item.internalLinkSuggestions,
      status: "planned",
      priority: item.priority,
      createdAt: today(),
      plannedPublishDay: ""
    });
    usedSlugs.add(item.recommendedSlug);
    addedQueue += 1;
  }
}

writeJson(researchPath, research);
writeJson(queuePath, queue);
writeJson(logPath, published);

console.log(`SEO planning complete. Added ${addedResearch} keyword records and ${addedQueue} article queue items.`);
