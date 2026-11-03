// One buying topic connects its landing page, supporting guide and evidence.
export const procurementPaths = [
  {
    id: "mro", title: "Industrial MRO Supplies from China",
    summary: "Source a mixed maintenance list with model checks, supplier comparison and consolidation planning.",
    requirement: "MRO supplies and mixed spare parts sourcing",
    checklist: "Send your item list, quantities, full model codes, acceptable alternatives and destination.",
    landing: "/en/industries/mro-supplies/",
    service: "/en/services/mro-sourcing-from-china/",
    guide: "factory-consumables-and-mro-supplies-from-china",
    guideTitle: "MRO consumables buying guide",
    evidence: "bosch-rexroth-hydraulic-valves-sourcing-consolidation-case",
    evidenceTitle: "Hydraulic valve sourcing and consolidation case",
    categories: ["MRO", "MRO Supplies"],
    related: ["industrial-mro-suppliers-in-china-what-buyers-should-check", "how-to-find-industrial-mro-suppliers-in-china", "mro-sourcing-from-china-buyer-checklist", "how-to-source-mro-supplies-from-china", "how-to-consolidate-mixed-mro-orders-from-chinese-suppliers", "mro-supplier-risk-chinese-trading-company-checklist"]
  },
  {
    id: "metal", title: "Metal Parts Supplier Sourcing in China",
    summary: "Compare suppliers for drawing-based machined parts, fasteners and stamped components.",
    requirement: "Custom metal parts supplier sourcing",
    checklist: "Send drawings with revision, material, tolerances, finish, quantity and inspection requirements.",
    landing: "/en/industries/metal-parts/",
    service: "/en/services/quality-inspection/",
    guide: "custom-cnc-machined-parts-china-drawing-tolerance-supplier-checklist",
    guideTitle: "CNC parts drawing and supplier checklist",
    evidence: "304-stainless-steel-countersunk-screw-inspection-serbia",
    evidenceTitle: "Stainless steel fastener inspection case",
    categories: ["Metal Parts", "Precision Machining"],
    related: ["custom-metal-stamping-rfq-checklist", "custom-precision-shafts-buying-guide", "how-screws-are-made-cold-heading-thread-rolling", "custom-cnc-turned-parts-threaded-fittings-buying-guide", "steel-spacers-countersunk-screws-shipment-serbia", "stamped-door-lock-gears-carbonitriding-inspection", "precision-stamped-parts-factory-inspection-china"]
  },
  {
    id: "packaging", title: "Packaging Machine Spare Parts Sourcing",
    summary: "Identify conveyor, filling and sealing components before comparing replacement options.",
    requirement: "Packaging machinery spare parts sourcing",
    checklist: "Send the machine model, part photos, dimensions, voltage, quantity and required delivery date.",
    landing: "/en/industries/packaging-industry/",
    service: "/en/services/industrial-spare-parts-sourcing/",
    guide: "packaging-machine-spare-parts-mro-sourcing-from-china",
    guideTitle: "Packaging spare parts buying guide",
    evidence: "automatic-strapping-machine-sourcing-romania-case",
    evidenceTitle: "Strapping machine sourcing case",
    categories: ["Packaging Industry", "Packaging"], related: []
  },
  {
    id: "agriculture", title: "Agricultural Machinery Spare Parts from China",
    summary: "Prepare tractor, tiller and harvester replacement requests with fit and specification checks.",
    requirement: "Agricultural machinery spare parts sourcing",
    checklist: "Send equipment and engine models, part numbers, dimensions, photos, quantities and destination.",
    landing: "/en/industries/agricultural-equipment/",
    service: "/en/services/industrial-spare-parts-sourcing/",
    guide: "agricultural-machinery-spare-parts-china-buying-guide",
    guideTitle: "Tractor, tiller and harvester parts checklist",
    evidence: "hrb-23220ca-w33-bearing-sourcing-argentina",
    evidenceTitle: "Bearing sourcing case (industrial component reference)",
    categories: ["Agricultural Equipment"], related: []
  }
];

export function getProcurementPath(slug: string, category?: string) {
  return procurementPaths.find((path) => path.landing.endsWith(`/${slug}/`) || path.service.endsWith(`/${slug}/`) || path.guide === slug || path.evidence === slug || path.related.includes(slug))
    ?? procurementPaths.find((path) => category && path.categories.includes(category));
}

export function procurementInquiryHref(id: string) {
  return `/en/contact/?topic=${encodeURIComponent(id)}#inquiry`;
}
