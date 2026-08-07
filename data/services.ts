export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  image: string;
  support: string[];
  problems: string[];
};

export const services: Service[] = [
  {
    slug: "china-industrial-sourcing",
    title: "China Industrial Sourcing",
    shortTitle: "Industrial Sourcing",
    description: "Structured China industrial sourcing for machinery, OEM products, MRO supplies, spare parts, and factory equipment.",
    keywords: ["China industrial sourcing", "industrial sourcing China", "industrial sourcing partner in China"],
    image: "/images/service-industrial-sourcing.webp",
    support: ["Supplier search and screening", "Quotation comparison", "Technical communication", "Sample or trial order coordination"],
    problems: ["Unknown supplier reliability", "Unclear technical quotations", "Inconsistent communication", "Difficulty comparing factories"]
  },
  {
    slug: "oem-manufacturing-support",
    title: "OEM Manufacturing Support",
    shortTitle: "OEM Support",
    description: "China OEM manufacturing support for overseas buyers who need supplier sourcing, drawing communication, samples, and production coordination.",
    keywords: ["OEM manufacturing China", "OEM supplier sourcing China", "China OEM manufacturing support"],
    image: "/images/service-oem-manufacturing.webp",
    support: ["OEM supplier sourcing", "Drawing and specification communication", "Sample follow-up", "Production coordination"],
    problems: ["Unclear drawings or tolerances", "Supplier over-promising", "Sample delays", "Quality variation between batches"]
  },
  {
    slug: "mro-sourcing-from-china",
    title: "MRO Sourcing from China",
    shortTitle: "MRO Sourcing",
    description: "MRO sourcing from China for factory spare parts, industrial MRO suppliers, maintenance consumables, mixed repair items, and consolidated procurement.",
    keywords: ["MRO sourcing China", "MRO supplier China", "industrial MRO suppliers", "MRO supplies China", "factory spare parts sourcing"],
    image: "/images/service-mro-sourcing.webp",
    support: ["MRO supplier search", "Mixed MRO item consolidation", "Spare parts identification support", "Repeat order coordination"],
    problems: ["Small mixed orders", "Hard-to-identify spare parts", "Multiple supplier shipments", "Urgent maintenance needs"]
  },
  {
    slug: "supplier-verification",
    title: "Supplier Verification",
    shortTitle: "Supplier Verification",
    description: "Supplier verification in China to help overseas buyers check supplier identity, capability, communication, and order risk before committing.",
    keywords: ["supplier verification China", "verify Chinese supplier", "China supplier screening"],
    image: "/images/service-supplier-verification.webp",
    support: ["Business profile review", "Capability screening", "Communication checks", "Risk notes before order"],
    problems: ["Fake or weak suppliers", "Trading company confusion", "Limited technical answers", "Payment risk uncertainty"]
  },
  {
    slug: "quality-inspection",
    title: "Quality Inspection",
    shortTitle: "Quality Inspection",
    description: "Industrial quality inspection coordination in China for machinery, parts, OEM goods, and MRO products before shipment.",
    keywords: ["quality inspection China", "China product inspection", "industrial quality control China"],
    image: "/images/service-quality-inspection.webp",
    support: ["Pre-shipment inspection coordination", "Specification checks", "Photo and video reporting", "Issue follow-up with suppliers"],
    problems: ["Wrong specifications", "Poor packing", "Late defect discovery", "Unclear inspection standards"]
  },
  {
    slug: "export-support",
    title: "Export Support",
    shortTitle: "Export Support",
    description: "China export coordination for industrial orders, documentation communication, shipment follow-up, and supplier-side execution.",
    keywords: ["export support China", "China export coordination", "industrial export support"],
    image: "/images/service-export-support.webp",
    support: ["Export document coordination", "Shipment scheduling", "Packing communication", "Supplier-side follow-up"],
    problems: ["Fragmented supplier updates", "Document delays", "Packing mismatch", "Poor shipment visibility"]
  },
  {
    slug: "container-consolidation",
    title: "Container Consolidation",
    shortTitle: "Container Consolidation",
    description: "Container consolidation coordination in China for buyers purchasing from several industrial suppliers.",
    keywords: ["container consolidation China", "consolidate shipments from China", "China supplier consolidation"],
    image: "/images/service-container-consolidation.webp",
    support: ["Supplier shipment coordination", "Mixed order tracking", "Warehouse communication", "Loading follow-up"],
    problems: ["Multiple factory shipments", "LCL/FCL planning confusion", "Late supplier delivery", "Poor packing coordination"]
  },
  {
    slug: "industrial-spare-parts-sourcing",
    title: "Industrial Spare Parts Sourcing",
    shortTitle: "Spare Parts Sourcing",
    description: "Industrial spare parts sourcing from China for machinery, production lines, factory maintenance, and replacement needs.",
    keywords: ["industrial spare parts China", "machinery spare parts sourcing China", "factory spare parts supplier China"],
    image: "/images/service-spare-parts-sourcing.webp",
    support: ["Part identification support", "Supplier matching", "Alternative sourcing", "Repeat order tracking"],
    problems: ["Missing part numbers", "Obsolete components", "Small quantity orders", "Supplier compatibility uncertainty"]
  }
];

export const sourcingProcess = [
  "Requirement Review",
  "Supplier Search and Screening",
  "Quotation and Technical Comparison",
  "Sample or Trial Order Coordination",
  "Quality Check",
  "Export and Shipping Support",
  "Long-Term Supply Chain Follow-up"
];
