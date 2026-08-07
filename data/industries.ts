export type Industry = {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: string[];
};

export const industries: Industry[] = [
  { slug: "plastic-industry", title: "Plastic Industry", description: "Sourcing support for injection molding machinery, molds, auxiliary equipment, spare parts, and plastic processing requirements.", image: "/images/industry-plastic.webp", products: ["Injection molding machinery", "Molds", "Auxiliary equipment", "Plastic machinery spare parts", "Technical sourcing support"] },
  { slug: "agricultural-equipment", title: "Agricultural Equipment", description: "China sourcing support for agricultural machinery parts, tractor parts, tiller parts, harvester parts, irrigation equipment, and farm implement parts.", image: "/images/industry-agricultural-equipment.webp", products: ["Tractor parts", "Tiller parts", "Harvester parts", "Irrigation equipment", "Farm implement parts"] },
  { slug: "industrial-machinery", title: "Industrial Machinery", description: "Sourcing coordination for general machinery, production equipment, machinery parts, industrial components, and maintenance parts.", image: "/images/industry-industrial-machinery.webp", products: ["General machinery", "Production equipment", "Machinery parts", "Industrial components", "Maintenance parts"] },
  { slug: "packaging-industry", title: "Packaging Industry", description: "Support for packaging machines, packaging machine parts, conveyors, filling parts, sealing equipment, and industrial packaging supplies.", image: "/images/industry-packaging.webp", products: ["Packaging machines", "Conveyors", "Filling parts", "Sealing equipment", "Packaging supplies"] },
  { slug: "metal-parts", title: "Metal Parts", description: "Supplier sourcing for casting parts, CNC machining parts, stamping parts, fabrication parts, and custom metal components.", image: "/images/industry-metal-parts.webp", products: ["Casting parts", "CNC machining parts", "Stamping parts", "Fabrication parts", "Custom metal components"] },
  { slug: "mro-supplies", title: "MRO Supplies", description: "China sourcing support for industrial MRO supplies, factory spare parts, maintenance consumables, tools, and mixed repair items from verified suppliers.", image: "/images/industry-mro-supplies.webp", products: ["Factory consumables", "Replacement parts", "Tools", "Maintenance supplies", "Mechanical and electrical supplies"] },
  { slug: "electrical-mechanical-parts", title: "Electrical and Mechanical Parts", description: "Sourcing support for motors, sensors, switches, bearings, pumps, valves, reducers, pneumatic parts, and hydraulic components.", image: "/images/industry-electrical-mechanical-parts.webp", products: ["Motors", "Sensors", "Bearings", "Pumps and valves", "Pneumatic and hydraulic parts"] },
  { slug: "factory-spare-parts", title: "Factory Spare Parts", description: "Sourcing support for production line replacement parts, mechanical spares, electrical spares, maintenance parts, and emergency sourcing needs.", image: "/images/industry-factory-spare-parts.webp", products: ["Production line spares", "Mechanical parts", "Electrical parts", "Maintenance spares", "Emergency sourcing support"] }
];
