import { precisionShaftPath } from "@/data/precision-shafts";

export const mainNav = [
  {
    label: "Manufacturing",
    href: "/en/#custom-manufacturing",
    children: [
      { label: "Custom Manufacturing", href: "/en/#custom-manufacturing" },
      { label: "CNC Machined Components", href: "/en/products/precision-machining/custom-cnc-machined-parts/" },
      { label: "Precision Shafts", href: precisionShaftPath },
      { label: "Pneumatic & Vacuum Manifolds", href: "/en/#pneumatic-manifolds" }
    ]
  },
  {
    label: "Sourcing & MRO",
    href: "/en/industrial-sourcing/",
    children: [
      { label: "Industrial Sourcing", href: "/en/industrial-sourcing/" },
      { label: "MRO Supplies", href: "/en/industries/mro-supplies/" },
      { label: "Metal Parts Supplier Sourcing", href: "/en/industries/metal-parts/" },
      { label: "Packaging Machine Spare Parts", href: "/en/industries/packaging-industry/" },
      { label: "Agricultural Machinery Parts", href: "/en/industries/agricultural-equipment/" },
      { label: "MRO Sourcing from China", href: "/en/services/mro-sourcing-from-china/" },
      { label: "Industrial Spare Parts", href: "/en/services/industrial-spare-parts-sourcing/" },
      { label: "Supplier Verification", href: "/en/services/supplier-verification/" },
      { label: "Shipment Consolidation", href: "/en/services/container-consolidation/" }
    ]
  },
  {
    label: "Industries",
    href: "/en/#growth-industries",
    children: [
      { label: "Robotics & Automation", href: "/en/#robotics-automation" },
      { label: "Machine Builders", href: "/en/#machine-builders" },
      { label: "AMR & AGV", href: "/en/#amr-agv" },
      { label: "Unmanned Systems", href: "/en/#unmanned-systems" },
      { label: "All Industries", href: "/en/industries/" }
    ]
  },
  {
    label: "Quality",
    href: "/en/services/quality-inspection/",
    children: [
      { label: "Quality Inspection", href: "/en/services/quality-inspection/" },
      { label: "Supplier Verification", href: "/en/services/supplier-verification/" }
    ]
  },
  { label: "Cases", href: "/en/blog/" },
  {
    label: "Resources",
    href: "/en/blog/",
    children: [
      { label: "Buyer Guides", href: "/en/blog/" },
      { label: "Markets We Serve", href: "/en/countries/" },
      { label: "All Services", href: "/en/services/" }
    ]
  }
];
