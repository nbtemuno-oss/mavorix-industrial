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
    src: "/images/hero/industrial-sourcing-consolidation-hero.webp",
    alt: "China industrial sourcing, MRO spare parts checking and export shipment consolidation",
    width: 1536,
    height: 1024
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
  },
  metalPartsHero: {
    src: "/images/industries/metal-parts-hero.webp",
    alt: "Industrial metal parts including screws, gears, spacers, machined components, and precision fasteners",
    width: 1600,
    height: 900
  },
  metalPartsOg: {
    src: "/images/industries/metal-parts-og.webp",
    alt: "Precision metal parts sourcing including stainless steel screws, gears, standoffs, and machined components",
    width: 1200,
    height: 630
  },
  electricalMechanicalPartsHero: {
    src: "/images/industries/electrical-mechanical-parts-hero.webp",
    alt: "Electrical and mechanical industrial parts including servo motor, drive, oil cooler, butterfly valve, pump, hydraulic valve, pneumatic valve, quick connectors, gearbox, and cylinder",
    width: 1600,
    height: 900
  },
  electricalMechanicalPartsOg: {
    src: "/images/industries/electrical-mechanical-parts-og.webp",
    alt: "Electrical and mechanical parts including servo motor, valves, pump, gearbox, and pneumatic cylinder",
    width: 1200,
    height: 630
  },
  industrialMachineryHero: {
    src: "/images/industries/industrial-machinery-hero.webp",
    alt: "Industrial machinery and spare parts including band saw, air compressor, press machine, taper pipe machine, laser welding equipment, bearings, filters, belts, and metal components",
    width: 1600,
    height: 900
  },
  industrialMachineryOg: {
    src: "/images/industries/industrial-machinery-og.webp",
    alt: "Industrial machinery and spare parts sourcing including compressors, presses, welding equipment, bearings, filters, and components",
    width: 1200,
    height: 630
  },
  agriculturalEquipmentHero: {
    src: "/images/industries/agricultural-equipment-hero.webp",
    alt: "Agricultural equipment and tractor spare parts in a golden field, including tractor parts, filters, bearings, gears, belts, and hydraulic components",
    width: 1600,
    height: 900
  },
  agriculturalEquipmentOg: {
    src: "/images/industries/agricultural-equipment-og.webp",
    alt: "Tractor in a golden field with agricultural machinery spare parts and wear parts",
    width: 1200,
    height: 630
  },
  factorySparePartsHero: {
    src: "/images/industries/factory-spare-parts-hero.webp",
    alt: "Factory spare parts warehouse including motors, bearings, belts, chains, pneumatic cylinders, hydraulic fittings, filters, and industrial components",
    width: 1600,
    height: 900
  },
  factorySparePartsOg: {
    src: "/images/industries/factory-spare-parts-og.webp",
    alt: "Industrial factory spare parts warehouse with MRO components and maintenance parts",
    width: 1200,
    height: 630
  },
  packagingIndustryHero: {
    src: "/images/industries/packaging-industry-hero.webp",
    alt: "Modern packaging production line with conveyors, automated packaging machines, and industrial packaging equipment",
    width: 1600,
    height: 900
  },
  packagingIndustryOg: {
    src: "/images/industries/packaging-industry-og.webp",
    alt: "Packaging industry production line with conveyor and automated packaging machinery",
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
  "how-to-source-mro-supplies-from-china": {
    src: "/images/service-mro-sourcing.webp",
    alt: "MRO supplies sourcing from China for factory maintenance parts, tools, consumables and mixed industrial items",
    width: 1200,
    height: 800
  },
  "how-to-source-industrial-hand-tools-from-china": {
    src: "/images/service-mro-sourcing.webp",
    alt: "Industrial hand tools sourcing from China for factory maintenance and MRO procurement",
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
  },
  "identify-industrial-spare-parts-without-part-number": {
    src: "/images/industries/factory-spare-parts-hero.webp",
    alt: "Industrial spare part identification using photos, nameplates, dimensions and machine information",
    width: 1600,
    height: 900
  },
  "packaging-machine-spare-parts-sourcing-china": {
    src: "/images/industries/packaging-industry-hero.webp",
    alt: "Packaging machine spare parts and replacement components for industrial packaging line maintenance",
    width: 1600,
    height: 900
  },
  "packaging-machine-spare-parts-mro-sourcing-from-china": {
    src: "/images/industries/packaging-industry-hero.webp",
    alt: "Packaging machine spare parts and MRO supplies for conveyor, filling, sealing and labeling equipment maintenance",
    width: 1600,
    height: 900
  },
  "agricultural-machinery-spare-parts-china-buying-guide": {
    src: "/images/industries/agricultural-equipment-hero.webp",
    alt: "Agricultural machinery spare parts including tractor, tiller and harvester replacement components",
    width: 1600,
    height: 900
  },
  "source-obsolete-discontinued-industrial-spare-parts": {
    src: "/images/industries/factory-spare-parts-hero.webp",
    alt: "Obsolete and discontinued industrial spare parts replacement options for legacy factory equipment",
    width: 1600,
    height: 900
  },
  "injection-molding-factory-procurement-checklist": {
    src: "/images/plastic-industry-injection-molding-hero.webp",
    alt: "Injection molding factory procurement checklist for machines, molds, auxiliaries and utilities",
    width: 1600,
    height: 900
  },
  "compare-industrial-supplier-quotations-china": {
    src: "/images/service-industrial-sourcing.webp",
    alt: "Technical and commercial comparison of industrial supplier quotations from China",
    width: 1200,
    height: 800
  },
  "source-75x2000-industrial-belt-sander-china": {
    src: "/images/blog/75x2000-industrial-belt-sander-specifications.webp",
    alt: "75x2000 industrial belt sander specifications for metal finishing",
    width: 1200,
    height: 630
  },
  "how-latin-american-factories-source-industrial-spare-parts-from-china": {
    src: "/images/industries/factory-spare-parts-hero.webp",
    alt: "Industrial spare parts sourcing for Latin American factories including machinery parts, MRO items, and replacement components",
    width: 1600,
    height: 900
  },
  "industrial-spare-parts-sourcing-for-balkan-eastern-european-manufacturers": {
    src: "/images/service-mro-sourcing.webp",
    alt: "MRO and industrial spare parts sourcing support for Balkan and Eastern European manufacturers",
    width: 1200,
    height: 800
  },
  "bosch-rexroth-hydraulic-valves-sourcing-consolidation-case": {
    src: "/images/blog/bosch-rexroth-hydraulic-valves-sourcing-case/bosch-rexroth-hydraulic-valves-sourcing-case.webp",
    alt: "Batch of Bosch Rexroth hydraulic valves prepared for sourcing review",
    width: 1600,
    height: 900
  },
  "tr-t-20x20-ceramic-tumbling-media-sourcing-case": {
    src: "/images/blog/tr-t-20x20-ceramic-tumbling-media-sourcing-case/tr-t-20x20-ceramic-tumbling-media-bulk-order.webp",
    alt: "Palletized bags of TR-T 20×20 ceramic tumbling media prepared for a bulk order",
    width: 1600,
    height: 900
  },
  "industrial-led-flood-light-sourcing-case": {
    src: "/images/blog/industrial-led-flood-light-sourcing-case/industrial-led-flood-light-production-batch.webp",
    alt: "Batch of industrial LED flood lights during production in China",
    width: 1600,
    height: 900
  },
  "how-to-source-custom-cutting-tools-from-china": {
    src: "/images/products/cutting-tools/custom-cutting-tools/custom-cutting-tools-main.webp",
    alt: "Assorted custom cutting tools with varied stepped and profiled geometries in a tool holder",
    width: 1400,
    height: 1050
  },
  "rexroth-dbds6p1x-315-pressure-relief-valve-sourcing": {
    src: "/images/blog/rexroth-dbds6p1x-315-pressure-relief-valve-sourcing/rexroth-dbds6p1x-315-pressure-relief-valves-packed.webp",
    alt: "Full carton of Rexroth DBDS6P1X/315 pressure relief valves purchased for a customer and packed for shipment",
    width: 1080,
    height: 1920
  },
  "automatic-strapping-machine-sourcing-romania-case": {
    src: "/images/blog/automatic-strapping-machine-sourcing-romania-case/ms-505-automatic-strapping-machine-romania-case.webp",
    alt: "MS-505 automatic PP strapping machine photographed during inspection for a Romania-bound sourcing order",
    width: 1080,
    height: 1440
  },
  "304-stainless-steel-countersunk-screw-inspection-serbia": {
    src: "/images/blog/304-stainless-steel-countersunk-screw-inspection-serbia/stainless-steel-countersunk-screws-palletized-for-serbia.webp",
    alt: "Cartons of M6 x 15 stainless steel countersunk screws palletized for shipment to Serbia",
    width: 918,
    height: 1076
  },
  "22kw-rotary-screw-air-compressor-system-uae": {
    src: "/images/blog/22kw-rotary-screw-air-compressor-system-uae/complete-air-compressor-system-loaded-for-uae.webp",
    alt: "Complete XPS22/8 compressed air system loaded into a shipping container for the UAE",
    width: 806,
    height: 1088
  },
  "tube-tapering-machine-sourcing-romania": {
    src: "/images/blog/tube-tapering-machine-sourcing-romania/zs-60-tube-tapering-machine-workshop.webp",
    alt: "ZS-60 tube tapering and reducing machine photographed before testing for a Romania sourcing project",
    width: 1062,
    height: 1252
  },
  "used-injection-mold-sourcing-export-packing-case": {
    src: "/images/blog/used-injection-mold-sourcing-export-packing-case/used-injection-molds-prepared-for-export.webp",
    alt: "Batch of used plastic injection molds wrapped and grouped for export preparation in China",
    width: 1200,
    height: 1600
  },
  "hrb-23220ca-w33-bearing-sourcing-argentina": {
    src: "/images/blog/hrb-23220ca-w33-bearing-sourcing-argentina/hrb-23220ca-w33-bearing-inspection-argentina.webp",
    alt: "HRB 23220CA/W33 spherical roller bearing and boxes checked for an Argentina order",
    width: 1200,
    height: 1600
  },
  "copeland-crnq-050e-compressor-sourcing-peru": {
    src: "/images/blog/copeland-crnq-050e-compressor-sourcing-peru/copeland-crnq-050e-tfd-556-wooden-case.webp",
    alt: "Copeland CRNQ-050E-TFD-556 compressor secured inside a wooden case for Peru",
    width: 1280,
    height: 1504
  },
  "copeland-zr61kc-scroll-compressor-sourcing-peru": {
    src: "/images/blog/copeland-zr61kc-scroll-compressor-sourcing-peru/copeland-zr61kc-tfd-522-model-check.webp",
    alt: "Copeland ZR61KC-TFD-522 scroll compressor sourced for a customer in Peru",
    width: 1200,
    height: 1600
  }
};
