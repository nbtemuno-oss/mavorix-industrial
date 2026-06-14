export type PageImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const defaultOgImage: PageImage = {
  src: "/images/mavorix-industrial-sourcing-og.webp",
  alt: "MAVORIX INDUSTRIAL China industrial sourcing partner",
  width: 1200,
  height: 630
};

export const pageImages = {
  home: {
    src: "/images/hero-industrial-sourcing.webp",
    alt: "China industrial sourcing coordination for overseas industrial buyers",
    width: 1200,
    height: 800
  },
  services: {
    src: "/images/services-china-sourcing-workflow-mavorix.webp",
    alt: "China industrial sourcing workflow for supplier search, quotation comparison, inspection, packing and consolidation",
    width: 1600,
    height: 900
  },
  industries: {
    src: "/images/industries-china-industrial-sourcing-mavorix.webp",
    alt: "China industrial sourcing support for machinery, plastic industry, MRO supplies, spare parts and factory equipment",
    width: 1600,
    height: 900
  },
  countries: {
    src: "/images/countries-global-industrial-sourcing-mavorix.webp",
    alt: "China to overseas industrial sourcing support for Balkan region, Latin America, Middle East, Africa and Europe",
    width: 1600,
    height: 900
  },
  blog: {
    src: "/images/blog-china-industrial-procurement-guides-mavorix.webp",
    alt: "China industrial procurement guides for sourcing, supplier verification, inspection and shipment consolidation",
    width: 1600,
    height: 900
  },
  contact: {
    src: "/images/contact-industrial-sourcing-inquiry-mavorix.webp",
    alt: "Industrial sourcing inquiry with product photos, drawings, quotation details, email and WhatsApp coordination",
    width: 1600,
    height: 900
  },
  plasticIndustryHero: {
    src: "/images/plastic-industry-injection-molding-hero.webp",
    alt: "Injection molding machines in a modern plastic manufacturing workshop",
    width: 1600,
    height: 900
  },
  plasticIndustryOg: {
    src: "/images/plastic-industry-injection-molding-og.webp",
    alt: "Plastic factory injection molding production line and auxiliary equipment in China",
    width: 1200,
    height: 630
  }
} satisfies Record<string, PageImage>;

export const blogImages: Record<string, PageImage> = {
  "china-oem-manufacturing-guide": {
    src: "/images/service-oem-manufacturing.webp",
    alt: "OEM manufacturing sourcing coordination with drawings, samples and supplier comparison",
    width: 1200,
    height: 800
  },
  "consolidate-industrial-products-from-china": {
    src: "/images/service-container-consolidation.webp",
    alt: "Container consolidation for mixed industrial goods, cartons, pallets and export packing from China",
    width: 1200,
    height: 800
  },
  "how-to-source-industrial-products-from-china": {
    src: "/images/service-industrial-sourcing.webp",
    alt: "China industrial sourcing process for machinery, parts, MRO supplies and supplier comparison",
    width: 1200,
    height: 800
  },
  "how-to-verify-chinese-industrial-supplier": {
    src: "/images/service-supplier-verification.webp",
    alt: "Chinese industrial supplier verification with document review and quotation checking",
    width: 1200,
    height: 800
  },
  "mro-sourcing-from-china-guide": {
    src: "/images/service-mro-sourcing.webp",
    alt: "MRO sourcing from China for factory maintenance supplies, spare parts and consumables",
    width: 1200,
    height: 800
  },
  "reduce-risks-buying-industrial-equipment-from-china": {
    src: "/images/service-quality-inspection.webp",
    alt: "Industrial equipment quality inspection and risk control before shipment from China",
    width: 1200,
    height: 800
  },
  "verify-chinese-industrial-suppliers-before-order": {
    src: "/images/service-supplier-verification.webp",
    alt: "Supplier risk review before order confirmation and deposit payment in China",
    width: 1200,
    height: 800
  }
};
