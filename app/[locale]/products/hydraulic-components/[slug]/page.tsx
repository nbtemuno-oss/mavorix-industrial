import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, Send } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import {
  counterbalanceValveDescription,
  counterbalanceValvePath,
  counterbalanceValveSlug,
  counterbalanceValveTitle,
  RexrothCounterbalanceValvePage
} from "./RexrothCounterbalanceValvePage";

const productSlug = "rexroth-4we6d6x-ofeg24n9k4-directional-control-valve";
const productTitle = "Rexroth 4WE6D6X/OFEG24N9K4 Directional Control Valve";
const productPath = `/en/products/hydraulic-components/${productSlug}/`;
const aryungSlug = "aryung-atp-216ha-vb-t-rotor-coolant-pump";
const aryungTitle = "ARYUNG ATP-216HA(VB) T-Rotor Coolant Pump";
const aryungPath = `/en/products/hydraulic-components/${aryungSlug}/`;
const daikinSlug = "daikin-v38a3rx-95-piston-pump";
const daikinTitle = "DAIKIN V38A3RX-95 Piston Pump";
const daikinPath = `/en/products/hydraulic-components/${daikinSlug}/`;
const hytekSlug = "hytek-hg0-08-01a-vpc-hydraulic-pump";
const hytekTitle = "HYTEK HG0-08-01A-VPC Hydraulic Pump";
const hytekPath = `/en/products/hydraulic-components/${hytekSlug}/`;

type HydraulicPumpData = {
  slug: string;
  title: string;
  path: string;
  badge: string;
  brand: string;
  model: string;
  materialNumber?: string;
  category: string;
  metaDescription: string;
  summary: string;
  schemaDescription: string;
  images: { src: string; alt: string; label: string }[];
  summarySpecs: string[][];
  confirmedSpecs: string[][];
  overview: string[];
  keyFeatures: string[];
  applications: string[];
  selectionNotice: string[];
  orderingInfo: string[];
  faqs: { q: string; a: string }[];
};

const hydromaxPump: HydraulicPumpData = {
  slug: "hydromax-hgp-22a-f4-4r-tandem-gear-pump",
  title: "HYDROMAX HGP-22A-F4+4R Tandem Gear Pump",
  path: "/en/products/hydraulic-components/hydromax-hgp-22a-f4-4r-tandem-gear-pump/",
  badge: "Tandem Gear Pump",
  brand: "HYDROMAX",
  model: "HGP-22A-F4+4R",
  category: "Hydraulic Tandem Gear Pump",
  metaDescription:
    "Source a HYDROMAX HGP-22A-F4+4R tandem gear pump with model-photo checking. Confirm displacement, rotation, shaft, ports and mounting before ordering.",
  summary:
    "HYDROMAX HGP-22A-F4+4R tandem gear pump shown with a two-section body, flange mounting, keyed shaft and protected hydraulic ports. Section displacement, rotation, shaft, ports and mounting must be checked before replacement ordering.",
  schemaDescription:
    "HYDROMAX HGP-22A-F4+4R tandem hydraulic gear pump sourcing reference based on visible model and product-form information.",
  images: [
    {
      src: "/images/products/hydraulic-components/hydromax-hgp-22a-f4-4r-tandem-gear-pump/hydromax-hgp-22a-f4-4r-tandem-gear-pump-main.webp",
      alt: "Two HYDROMAX HGP-22A-F4+4R tandem gear pumps showing shaft, flange and protected ports",
      label: "Pump and model view"
    }
  ],
  summarySpecs: [
    ["Brand", "HYDROMAX"],
    ["Model", "HGP-22A-F4+4R"],
    ["Product Type", "Tandem gear pump"],
    ["Visible Shaft", "Keyed shaft"],
    ["Compatibility", "Manual confirmation required before ordering"]
  ],
  confirmedSpecs: [
    ["Brand", "HYDROMAX"],
    ["Model", "HGP-22A-F4+4R"],
    ["Product Type", "Tandem gear pump"],
    ["Visible Form", "Two-section pump body"],
    ["Mounting Form", "Flange-mounted front section"],
    ["Visible Shaft", "Keyed shaft"],
    ["Visible Ports", "Multiple protected hydraulic ports"]
  ],
  overview: [
    "The visible body marking identifies this pump as HYDROMAX HGP-22A-F4+4R. The product photo shows the two connected pump sections expected from a tandem gear-pump arrangement, along with a front mounting flange, keyed drive shaft and protected hydraulic ports.",
    "For a replacement inquiry, the complete model is a useful starting point, but the old pump should still be compared section by section. Displacement, rotation, shaft, ports and mounting details can differ even when pumps have a similar body shape.",
    "MAVORIX can help overseas industrial buyers organize model checking, supplier communication, pre-shipment photos and consolidation with other hydraulic and factory spare parts."
  ],
  keyFeatures: [
    "HYDROMAX brand marking visible",
    "HGP-22A-F4+4R model marking visible",
    "Two-section tandem pump body",
    "Front flange mounting form",
    "Keyed drive shaft visible",
    "Hydraulic ports fitted with protective plugs",
    "Suitable for label-and-dimension-based sourcing review",
    "Performance parameters require quotation-specific confirmation"
  ],
  applications: [
    "Industrial hydraulic power systems",
    "Factory machinery maintenance",
    "Mobile and material-handling equipment repair",
    "Machine replacement-pump sourcing",
    "Hydraulic equipment spare-parts purchasing",
    "Mixed MRO parts consolidation"
  ],
  selectionNotice: [
    "Do not select a tandem gear pump from appearance alone. Both pump sections must be checked for displacement and function, and the direction of rotation must suit the drive arrangement.",
    "The shaft, flange, mounting holes, port threads and port orientation should be compared with the old unit or a controlled dimensional drawing. Final hydraulic suitability and installation should be confirmed by qualified technical personnel."
  ],
  orderingInfo: [
    "Clear model and body-marking photos",
    "Old pump photos from every side",
    "Displacement required for each section",
    "Rated and maximum pressure requirements",
    "Rotation direction",
    "Shaft type and dimensions",
    "Port thread, size and orientation",
    "Flange and mounting dimensions",
    "Machine brand and model",
    "Required quantity and destination"
  ],
  faqs: [
    {
      q: "Is HGP-22A-F4+4R enough information to order this tandem gear pump?",
      a: "It is a strong model reference, but the displacement of both sections, rotation, shaft, ports, mounting dimensions and machine application should also be confirmed."
    },
    {
      q: "What information is confirmed from the current product photo?",
      a: "The photo confirms the HYDROMAX brand, HGP-22A-F4+4R marking, two-section pump form, flange mounting, keyed shaft and protected hydraulic ports."
    },
    {
      q: "Can a similar-looking tandem pump be used as a replacement?",
      a: "Not automatically. Similar appearance does not confirm section displacement, rotation, shaft, ports, mounting or hydraulic performance."
    },
    {
      q: "What should I send for a HYDROMAX gear pump quotation?",
      a: "Send the complete model, old-pump photos, section displacement, rotation, shaft and port details, mounting dimensions, machine model, quantity and destination."
    },
    {
      q: "Can MAVORIX consolidate this pump with other hydraulic parts?",
      a: "Yes. MAVORIX can coordinate approved pumps, valves, seals, sensors and other industrial spare parts in one China-side purchasing and packing workflow."
    }
  ]
};

const rexrothAzpwPump: HydraulicPumpData = {
  slug: "rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump",
  title: "Rexroth AZPW-21-022RQRXXMB-S0593 External Gear Pump",
  path: "/en/products/hydraulic-components/rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump/",
  badge: "External Gear Pump",
  brand: "Rexroth",
  model: "AZPW-21-022RQRXXMB-S0593",
  materialNumber: "R983032286",
  category: "Hydraulic External Gear Pump",
  metaDescription:
    "Source a Rexroth AZPW-21-022RQRXXMB-S0593 external gear pump, MNR R983032286. Confirm the full code, shaft, ports and mounting before ordering.",
  summary:
    "Rexroth AZPW-21-022RQRXXMB-S0593 external gear pump with visible Material Number R983032286 and Made in India marking. The complete code, shaft, ports, rotation and mounting should be checked before replacement ordering.",
  schemaDescription:
    "Rexroth AZPW-21-022RQRXXMB-S0593 external hydraulic gear pump with visible Material Number R983032286 and Made in India marking.",
  images: [
    {
      src: "/images/products/hydraulic-components/rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump/rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump-main.webp",
      alt: "Rexroth AZPW-21-022RQRXXMB-S0593 external gear pumps with label, flange and protected shaft visible",
      label: "Label and shaft view"
    },
    {
      src: "/images/products/hydraulic-components/rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump/rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump-gallery-02.webp",
      alt: "Batch of Rexroth AZPW external gear pumps arranged for quantity and label checking",
      label: "Batch view"
    }
  ],
  summarySpecs: [
    ["Brand", "Rexroth"],
    ["Model", "AZPW-21-022RQRXXMB-S0593"],
    ["Material Number", "R983032286"],
    ["Product Type", "External gear pump"],
    ["Country Marking", "Made in India"],
    ["Compatibility", "Full-code and dimensional confirmation required"]
  ],
  confirmedSpecs: [
    ["Brand", "Rexroth"],
    ["Model", "AZPW-21-022RQRXXMB-S0593"],
    ["Material Number", "R983032286"],
    ["Product Type", "External gear pump"],
    ["Country Marking", "Made in India"],
    ["Mounting Form", "Flange-mounted pump body"],
    ["Visible Protection", "Shaft and ports protected in supplier photos"]
  ],
  overview: [
    "The visible Rexroth label identifies model AZPW-21-022RQRXXMB-S0593 and Material Number R983032286. The same label includes a Made in India marking. One photo provides a close model-and-shaft view; the second records a larger batch arranged for checking.",
    "Rexroth identifies its AZ range as external gear units, but a replacement should still be selected from the complete product code and the old pump's physical interfaces. Reading one code segment in isolation is not a substitute for checking the full configuration.",
    "MAVORIX supports label comparison, supplier-side photo checking, quotation coordination and consolidation for industrial hydraulic spare-parts orders in China."
  ],
  keyFeatures: [
    "Rexroth label visible",
    "Complete AZPW-21-022RQRXXMB-S0593 model visible",
    "Material Number R983032286 visible",
    "Made in India marking visible",
    "External gear-pump form",
    "Flange mounting and protected shaft visible",
    "Batch photo available for quantity-checking context",
    "Hydraulic and dimensional parameters require confirmation"
  ],
  applications: [
    "Mobile machinery hydraulic systems",
    "Industrial equipment hydraulic supply",
    "Factory machinery maintenance",
    "Material-handling equipment repair",
    "Hydraulic power and auxiliary circuits",
    "Mixed industrial spare-parts sourcing"
  ],
  selectionNotice: [
    "Order against the complete AZPW-21-022RQRXXMB-S0593 code and R983032286 reference where applicable. A partial AZPW-21-022 description or similar housing is not enough to confirm interchangeability.",
    "Confirm rotation, shaft, flange, ports, dimensions, operating requirements and equipment application before purchase. Any proposed successor or compatible option should be reviewed against written technical information."
  ],
  orderingInfo: [
    "Clear full-label photo",
    "Complete model code",
    "Material Number / MNR",
    "Old pump photos from every side",
    "Required displacement and pressure data",
    "Rotation direction",
    "Shaft type and dimensions",
    "Port thread, size and orientation",
    "Flange and mounting dimensions",
    "Equipment model, quantity and destination"
  ],
  faqs: [
    {
      q: "What is the visible material number for this Rexroth AZPW pump?",
      a: "The close label photo shows Material Number R983032286 together with model AZPW-21-022RQRXXMB-S0593."
    },
    {
      q: "Does the current photo confirm the pump's pressure and displacement?",
      a: "No. This page does not publish pressure or displacement as confirmed specifications. Use the complete code and manufacturer data, and confirm the actual application before ordering."
    },
    {
      q: "Can another AZPW-21 pump replace this exact configuration?",
      a: "Not automatically. The complete model code, material number, rotation, shaft, ports, flange, dimensions and system requirements should be compared."
    },
    {
      q: "What should I send for a Rexroth external gear pump inquiry?",
      a: "Send the full label, old-pump photos, shaft and port details, mounting dimensions, equipment model, quantity and destination."
    },
    {
      q: "Is MAVORIX an authorized Rexroth distributor?",
      a: "MAVORIX provides independent industrial sourcing and supplier coordination. We do not claim authorized-distributor status unless it is explicitly documented for a specific supply channel."
    }
  ]
};

const rexrothA10vsoPump: HydraulicPumpData = {
  slug: "rexroth-a10vso-28-dfr1-variable-axial-piston-pump-r910916805",
  title: "Rexroth A10VSO 28 DFR1 Variable Axial Piston Pump R910916805",
  path: "/en/products/hydraulic-components/rexroth-a10vso-28-dfr1-variable-axial-piston-pump-r910916805/",
  badge: "Variable Axial Piston Pump",
  brand: "Rexroth",
  model: "A A10VSO 28 DFR1/31R-VPA12N00",
  materialNumber: "R910916805",
  category: "Hydraulic Variable-Displacement Axial Piston Pump",
  metaDescription:
    "Source Rexroth A10VSO 28 DFR1/31R-VPA12N00 variable axial piston pump, MNR R910916805. Verify the full label, shaft, ports and mounting.",
  summary:
    "Rexroth A10VSO 28 DFR1 variable-displacement axial piston pump with full type code A A10VSO 28 DFR1/31R-VPA12N00 and Material Number R910916805 visible on the nameplate. Replacement selection should be based on the complete code and physical interfaces, not A10VSO 28 alone.",
  schemaDescription:
    "Rexroth A10VSO 28 DFR1 variable axial piston pump sourcing reference based on visible type code A A10VSO 28 DFR1/31R-VPA12N00 and Material Number R910916805.",
  images: [
    {
      src: "/images/products/general-products/rexroth-a10vso-28-dfr1-variable-axial-piston-pump-r910916805/rexroth-a10vso-28-dfr1-variable-axial-piston-pump-r910916805-main.webp",
      alt: "Rexroth A10VSO 28 DFR1 variable axial piston pump R910916805 with nameplate, shaft and protected ports visible",
      label: "Pump and nameplate view"
    }
  ],
  summarySpecs: [
    ["Brand", "Rexroth"],
    ["Type Code", "A A10VSO 28 DFR1/31R-VPA12N00"],
    ["Material Number", "R910916805"],
    ["Nominal Size", "28 cm3/rev marking"],
    ["Pump Type", "Variable axial piston pump"],
    ["Compatibility", "Full-code and dimensional confirmation required"]
  ],
  confirmedSpecs: [
    ["Brand", "Rexroth"],
    ["Complete Type Code", "A A10VSO 28 DFR1/31R-VPA12N00"],
    ["Material Number / MNR", "R910916805"],
    ["Product Family", "A10VSO variable-displacement axial piston pump"],
    ["Series", "31"],
    ["Nominal Size / Displacement Marking", "28 cm3"],
    ["Controller Code", "DFR1"],
    ["Rotation", "Clockwise symbol on nameplate"],
    ["Speed Marking", "1500 min-1"],
    ["DR Pressure Marking", "280 bar"],
    ["FR Pressure Marking", "14 bar"],
    ["Mass Marking", "17.8 kg"],
    ["Manufacturing Date Code", "26W02"],
    ["Country Marking", "Made in China"]
  ],
  overview: [
    "The nameplate in the supplied photo identifies a Rexroth A10VSO series variable axial piston pump. The complete type code is A A10VSO 28 DFR1/31R-VPA12N00 and the visible Material Number is R910916805. These two references should stay together throughout an RFQ and replacement review.",
    "A10VSO is an open-circuit, swashplate-type variable pump family used in industrial hydraulic systems. The size 28 marking identifies the nominal displacement class, while DFR1 identifies the control configuration. Those family descriptions help explain the product, but they do not replace configuration checking for the exact material number.",
    "MAVORIX supports overseas buyers with label reading, quotation coordination, supplier-side product photos and consolidation of hydraulic pumps with valves, seals, sensors and other MRO parts."
  ],
  keyFeatures: [
    "Rexroth nameplate visible in the supplied product photo",
    "Complete A A10VSO 28 DFR1/31R-VPA12N00 type code visible",
    "Material Number R910916805 visible",
    "Variable-displacement axial piston pump design",
    "Size 28 / 28 cm3 displacement marking",
    "DFR1 controller configuration code",
    "Clockwise rotation symbol on the nameplate",
    "Shaft and hydraulic ports protected in the supplier photo"
  ],
  applications: [
    "Industrial hydraulic power units",
    "Machine tools and production machinery",
    "Presses and material-forming equipment",
    "Factory automation hydraulic systems",
    "Hydraulic pump maintenance and replacement",
    "Mixed industrial MRO spare-parts orders"
  ],
  selectionNotice: [
    "Do not order from A10VSO 28 or DFR1 alone. Compare the complete type code, Material Number R910916805, rotation, shaft, flange, ports, controller and installation dimensions with the existing pump or an approved drawing.",
    "The pressure and speed values shown on this page are transcribed from the photographed nameplate. Final system suitability, operating limits, hydraulic fluid requirements and commissioning should follow the applicable Rexroth technical documentation and qualified engineering review."
  ],
  orderingInfo: [
    "Clear nameplate photo showing the complete type code",
    "Material Number / MNR",
    "Old pump photos from every side",
    "Machine brand, model and hydraulic function",
    "Required pressure, flow and operating speed",
    "Rotation direction",
    "Shaft type and dimensions",
    "Port thread, size and orientation",
    "Flange and mounting dimensions",
    "Required quantity and destination"
  ],
  faqs: [
    {
      q: "What is the complete model of the photographed Rexroth A10VSO pump?",
      a: "The visible nameplate reads A A10VSO 28 DFR1/31R-VPA12N00 with Material Number R910916805."
    },
    {
      q: "Is this a fixed-displacement pump?",
      a: "No. A10VSO is a variable-displacement axial piston pump family. The exact control and installation configuration must still be checked from the complete type code."
    },
    {
      q: "Can any A10VSO 28 replace R910916805?",
      a: "Not automatically. Controller, rotation, shaft, flange, ports and other code segments can differ even within the same size."
    },
    {
      q: "What should I send for a Rexroth A10VSO pump quotation?",
      a: "Send the complete nameplate, old-pump photos, shaft and port details, mounting dimensions, hydraulic requirements, machine model, quantity and destination."
    },
    {
      q: "Is MAVORIX an authorized Rexroth distributor?",
      a: "MAVORIX provides independent industrial sourcing and supplier coordination. We do not claim authorized-distributor status unless it is explicitly documented for a specific supply channel."
    }
  ]
};

const hytekImages = [
  {
    src: "/images/products/hydraulic-components/hytek-hg0-08-01a-vpc-hydraulic-pump/hytek-hg0-08-01a-vpc-hydraulic-pump-main.webp",
    alt: "HYTEK HG0-08-01A-VPC hydraulic pump label and shaft view",
    label: "Label and shaft view"
  }
];

const hytekSummarySpecs = [
  ["Brand", "HYTEK"],
  ["Model", "HG0-08-01A-VPC"],
  ["Product Type", "Hydraulic Pump"],
  ["Visible Form", "Flange-mounted pump body with protected splined shaft"],
  ["Compatibility", "Manual confirmation required before ordering"]
];

const hytekConfirmedSpecs = [
  ["Brand", "HYTEK"],
  ["Model", "HG0-08-01A-VPC"],
  ["Product Type", "Hydraulic Pump"],
  ["Visible Form", "Flange-mounted pump body"],
  ["Visible Shaft", "Protected splined shaft visible"],
  ["Label Position", "HYTEK label visible on pump body"]
];

const hytekKeyFeatures = [
  "HYTEK brand label visible",
  "HG0-08-01A-VPC model reference provided",
  "Hydraulic pump body visible",
  "Flange-mounted front section visible",
  "Protected splined shaft visible",
  "Suitable for sourcing review based on label and product photos",
  "Pump parameters should be confirmed before ordering",
  "Useful for industrial hydraulic spare parts sourcing"
];

const hytekApplications = [
  "Industrial hydraulic systems",
  "Factory machinery maintenance",
  "Hydraulic power unit repair",
  "Machine tool hydraulic support",
  "Production equipment spare parts",
  "Mixed industrial spare parts consolidation"
];

const hytekOrderingInfo = [
  "Clear straight-on label photo",
  "Complete pump model",
  "Old pump photos from multiple angles",
  "Pump type and displacement",
  "Pressure and flow requirements",
  "Rotation direction",
  "Shaft specification",
  "Port size and orientation",
  "Mounting dimensions",
  "Equipment brand and model",
  "Required quantity",
  "Whether exact replacement or compatible option is required"
];

const hytekSourcingSupport = [
  "Hydraulic pump label checking",
  "Model-code comparison",
  "China-side supplier sourcing",
  "Supplier photo confirmation",
  "Replacement option review based on buyer-provided data",
  "Consolidation with valves, motors, seals and electrical components",
  "Export packing and shipment coordination"
];

const hytekFaqs = [
  {
    q: "Is HG0-08-01A-VPC enough information for ordering this hydraulic pump?",
    a: "It is a useful model reference, but buyers should also confirm pump type, displacement, pressure rating, flow, rotation direction, shaft, ports and mounting dimensions before ordering."
  },
  {
    q: "What visible information is confirmed from the current photo?",
    a: "The current photo shows a HYTEK label on a flange-mounted hydraulic pump body with a protected splined shaft. The model reference should be confirmed from a straight-on label photo before formal ordering."
  },
  {
    q: "Can a similar-looking hydraulic pump be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm hydraulic rating, shaft, ports, mounting, rotation direction or machine compatibility."
  },
  {
    q: "What should I send before requesting a quotation?",
    a: "Send a straight-on label photo, old pump photos from multiple angles, shaft and port details, mounting dimensions, equipment model and required quantity."
  },
  {
    q: "Can MAVORIX consolidate this pump with other spare parts?",
    a: "Yes. MAVORIX can help coordinate sourcing and packing for hydraulic pumps, valves, motors, seals, sensors and other industrial spare parts in one purchasing workflow."
  }
];

const daikinImages = [
  {
    src: "/images/products/hydraulic-components/daikin-v38a3rx-95-piston-pump/daikin-v38a3rx-95-piston-pump-main.webp",
    alt: "DAIKIN V38A3RX-95 piston pump label view",
    label: "Label view"
  }
];

const daikinSummarySpecs = [
  ["Brand", "DAIKIN"],
  ["Model", "V38A3RX-95"],
  ["MFG No.", "YED00-2511-00070"],
  ["Product Type", "Piston Pump"],
  ["Country Marking", "Made in Japan"],
  ["Compatibility", "Manual confirmation required before ordering"]
];

const daikinConfirmedSpecs = [
  ["Brand", "DAIKIN"],
  ["Model", "V38A3RX-95"],
  ["MFG No.", "YED00-2511-00070"],
  ["Product Type", "Piston Pump"],
  ["Manufacturer Marking", "DAIKIN INDUSTRIES, LTD."],
  ["Country Marking", "Made in Japan"],
  ["Visible Handling Note", "Case drain inlet warning label is visible on the pump body"]
];

const daikinKeyFeatures = [
  "DAIKIN manufacturer label visible",
  "V38A3RX-95 model marking visible",
  "Piston pump product marking visible",
  "MFG No. YED00-2511-00070 visible",
  "Made in Japan marking visible",
  "Case drain inlet warning label visible",
  "Suitable for sourcing review based on clear label comparison",
  "Hydraulic performance and mounting data should be confirmed before ordering"
];

const daikinApplications = [
  "Industrial hydraulic systems",
  "Machine tool hydraulic units",
  "Production equipment maintenance",
  "Factory spare parts replacement sourcing",
  "Hydraulic power unit repair",
  "Mixed industrial spare parts consolidation"
];

const daikinOrderingInfo = [
  "Clear full-label photo",
  "Complete pump model",
  "MFG number",
  "Pump photos from multiple angles",
  "Displacement requirement",
  "Pressure rating requirement",
  "Rotation direction",
  "Shaft specification",
  "Port size and orientation",
  "Mounting dimensions",
  "Equipment brand and model",
  "Required quantity",
  "Whether exact replacement or compatible option is required"
];

const daikinSourcingSupport = [
  "Hydraulic pump label identification",
  "Model and MFG number comparison",
  "China-side supplier sourcing",
  "Supplier photo checking",
  "Replacement option review based on buyer-provided data",
  "Consolidation with valves, motors, seals and electrical spare parts",
  "Export packing and shipment coordination"
];

const daikinFaqs = [
  {
    q: "Is V38A3RX-95 enough information for ordering a replacement pump?",
    a: "It is a useful model reference, but buyers should also confirm displacement, pressure rating, rotation direction, shaft specification, port details, mounting dimensions and equipment application before ordering."
  },
  {
    q: "What visible information is confirmed from the current photo?",
    a: "The visible label shows DAIKIN INDUSTRIES, LTD., Piston Pump, model V38A3RX-95, MFG No. YED00-2511-00070 and Made in Japan."
  },
  {
    q: "Can a similar-looking piston pump be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm hydraulic rating, shaft, ports, mounting, rotation direction or system compatibility."
  },
  {
    q: "What should I send before requesting a quotation?",
    a: "Send the full label, pump photos from multiple angles, old pump application, port details, mounting dimensions, equipment model and required quantity."
  },
  {
    q: "Can MAVORIX consolidate this pump with other spare parts?",
    a: "Yes. MAVORIX can help coordinate sourcing and packing for pumps, valves, motors, seals, sensors and other industrial spare parts in one purchasing workflow."
  }
];

const aryungImages = [
  {
    src: "/images/products/hydraulic-components/aryung-atp-216ha-vb-t-rotor-coolant-pump/aryung-atp-216ha-vb-t-rotor-coolant-pump-main.webp",
    alt: "ARYUNG ATP-216HA(VB) T-rotor coolant pump label view",
    label: "Label view"
  }
];

const aryungSummarySpecs = [
  ["Brand", "ARYUNG"],
  ["Model / Type", "ATP-216HA(VB)"],
  ["MFG No.", "25060186"],
  ["Product Type", "T-Rotor Pump"],
  ["Application Marking", "Coolant"],
  ["Compatibility", "Manual confirmation required before ordering"]
];

const aryungConfirmedSpecs = [
  ["Brand", "ARYUNG"],
  ["Model / Type", "ATP-216HA(VB)"],
  ["MFG No.", "25060186"],
  ["Product Type", "T-Rotor Pump"],
  ["Application Marking", "Coolant"],
  ["Country Marking", "Made in Korea"],
  ["Visible Direction Marking", "Rotation arrow and IN / OUT markings are visible on the pump label"]
];

const aryungKeyFeatures = [
  "T-rotor pump marking visible on the product label",
  "ARYUNG brand label visible",
  "ATP-216HA(VB) type marking visible",
  "MFG No. 25060186 visible",
  "Coolant application marking visible",
  "IN / OUT direction markings visible",
  "Suitable for sourcing review based on clear label comparison",
  "Additional electrical and performance data should be confirmed before ordering"
];

const aryungApplications = [
  "Machine tool coolant circulation",
  "Industrial machinery coolant systems",
  "Factory spare parts replacement sourcing",
  "Metalworking equipment support",
  "Maintenance spare parts purchasing",
  "Mixed industrial spare parts consolidation"
];

const aryungOrderingInfo = [
  "Clear full-label photo",
  "Complete pump model or type",
  "MFG number",
  "Voltage and power rating",
  "Flow rate and pressure requirement",
  "Port size and connection type",
  "Mounting dimensions",
  "Old pump photos from multiple angles",
  "Machine brand and model",
  "Required quantity",
  "Whether exact replacement or compatible option is required"
];

const aryungSourcingSupport = [
  "Pump label identification",
  "Model and MFG number comparison",
  "China-side supplier sourcing",
  "Supplier photo checking",
  "Replacement option review based on buyer-provided data",
  "Consolidation with other machine tool and factory spare parts",
  "Export packing and shipment coordination"
];

const aryungFaqs = [
  {
    q: "Is ATP-216HA(VB) enough information for ordering a replacement pump?",
    a: "It is a useful model reference, but buyers should also confirm voltage, power rating, flow, pressure, port size, mounting dimensions and machine application before ordering."
  },
  {
    q: "What visible information is confirmed from the current photo?",
    a: "The visible label shows ARYUNG, ATP-216HA(VB), MFG No. 25060186, T-Rotor Pump, Coolant, Made in Korea, and IN / OUT direction markings."
  },
  {
    q: "Can a similar-looking coolant pump be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm electrical rating, mounting, port connection, flow or pressure compatibility."
  },
  {
    q: "What should I send before requesting a quotation?",
    a: "Send the full label, old pump photos, voltage and power markings, port details, mounting dimensions, equipment model and required quantity."
  },
  {
    q: "Can MAVORIX consolidate this pump with other spare parts?",
    a: "Yes. MAVORIX can help coordinate sourcing and packing for pumps, sensors, relays, valves and other industrial spare parts in one purchasing workflow."
  }
];

const productImages = [
  {
    src: "/images/products/hydraulic-components/rexroth-4we6d6x-ofeg24n9k4/rexroth-4we6d6x-ofeg24n9k4-directional-valve-main.webp",
    alt: "Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valves in packaging",
    label: "Main view"
  },
  {
    src: "/images/products/hydraulic-components/rexroth-4we6d6x-ofeg24n9k4/rexroth-r900567512-hydraulic-valves-batch.webp",
    alt: "Batch of Rexroth hydraulic valves prepared for industrial spare parts sourcing",
    label: "Batch photo"
  }
];

const summarySpecs = [
  ["Brand", "Rexroth"],
  ["Model", "4WE6D6X/OFEG24N9K4"],
  ["Material Number", "R900567512"],
  ["Product Type", "Hydraulic Directional Control Valve"],
  ["Maximum Pressure Marking", "350 bar"],
  ["Compatibility", "Complete model and electrical configuration verification required"]
];

const confirmedSpecs = [
  ["Brand", "Rexroth"],
  ["Model", "4WE6D6X/OFEG24N9K4"],
  ["Material Number", "R900567512"],
  ["Product Type", "Solenoid-operated directional spool valve"],
  ["Maximum Pressure Marking", "350 bar"],
  ["Visible Valve Symbol", "Hydraulic directional valve symbol visible on the label"],
  ["Country Marking", "Made in China"]
];

const keyFeatures = [
  "Solenoid-operated hydraulic directional control",
  "Complete Rexroth model identification",
  "Material No. R900567512",
  "350 bar maximum-pressure marking",
  "Hydraulic flow-direction control",
  "Manual override components visible",
  "Suitable for replacement sourcing based on full-code comparison",
  "Designed for industrial hydraulic control applications"
];

const applications = [
  "Hydraulic power units",
  "Industrial machinery",
  "Machine tools",
  "Plastic processing machinery",
  "Injection molding equipment",
  "Presses and forming equipment",
  "Automated production systems",
  "Factory hydraulic maintenance"
];

const orderingInfo = [
  "Clear full-label photo",
  "Complete valve model",
  "Material Number / MNR",
  "Hydraulic symbol photo",
  "Coil voltage marking",
  "Electrical connector photo",
  "Front and rear valve photos",
  "Equipment brand and model",
  "Hydraulic circuit or old valve application",
  "Required quantity",
  "Existing valve fault description",
  "Whether an exact original code or compatible option is required"
];

const sourcingSupport = [
  "Hydraulic valve label identification",
  "Complete model-code verification",
  "Material-number comparison",
  "China supplier sourcing",
  "Product and packaging photo verification",
  "Original-code or compatible-option checking",
  "Consolidation with hydraulic pumps, coils, sensors, seals and electrical parts",
  "Export packing and international shipment coordination"
];

const faqs = [
  {
    q: "Is the Rexroth 4WE6D6X/OFEG24N9K4 interchangeable with every 4WE6 valve?",
    a: "No. The complete model code, spool configuration, coil voltage, electrical connector, material number and installation requirements must be checked before ordering a replacement."
  },
  {
    q: "What information should I provide before ordering?",
    a: "Provide a clear label photo, complete model, MNR, valve symbol, coil voltage, connector photo, equipment details and required quantity."
  },
  {
    q: "What does MNR R900567512 mean?",
    a: "It is the visible Rexroth material number used to identify the specific product configuration. Buyers should verify both the complete model and material number."
  },
  {
    q: "Is the coil voltage confirmed from the current photos?",
    a: "The coil voltage should be verified from the actual coil label or manufacturer documentation. It is not shown as a confirmed specification on this page."
  },
  {
    q: "Can MAVORIX source several Rexroth valve models in one shipment?",
    a: "MAVORIX can coordinate sourcing and consolidation of multiple hydraulic valves and other industrial spare parts, subject to model and supplier verification."
  },
  {
    q: "Can a similar-looking directional valve be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm hydraulic or electrical compatibility."
  }
];

export function generateStaticParams() {
  return [
    { locale: "en", slug: productSlug },
    { locale: "en", slug: aryungSlug },
    { locale: "en", slug: daikinSlug },
    { locale: "en", slug: hytekSlug },
    { locale: "en", slug: hydromaxPump.slug },
    { locale: "en", slug: rexrothAzpwPump.slug },
    { locale: "en", slug: rexrothA10vsoPump.slug },
    { locale: "en", slug: counterbalanceValveSlug }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale === "en" && slug === counterbalanceValveSlug) {
    return {
      title: "Rexroth R930050353 Counterbalance Valve | MAVORIX",
      description: counterbalanceValveDescription,
      alternates: { canonical: `${site.url}${counterbalanceValvePath}` },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true }
      },
      openGraph: {
        title: counterbalanceValveTitle,
        description: counterbalanceValveDescription,
        url: `${site.url}${counterbalanceValvePath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [{
          url: "/images/products/general-products/rexroth-r930050353-single-counterbalance-valve/rexroth-r930050353-single-counterbalance-valve-main.webp",
          width: 1080,
          height: 1440,
          alt: "Two Rexroth R930050353 single counterbalance valve blocks with identification labels"
        }]
      },
      twitter: {
        card: "summary_large_image",
        title: counterbalanceValveTitle,
        description: counterbalanceValveDescription,
        images: ["/images/products/general-products/rexroth-r930050353-single-counterbalance-valve/rexroth-r930050353-single-counterbalance-valve-main.webp"]
      }
    };
  }
  const pump = [hydromaxPump, rexrothAzpwPump, rexrothA10vsoPump].find((item) => locale === "en" && item.slug === slug);
  if (pump) {
    return {
      title: `${pump.title} | MAVORIX`,
      description: pump.metaDescription,
      alternates: { canonical: `${site.url}${pump.path}` },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true }
      },
      openGraph: {
        title: pump.title,
        description: pump.metaDescription,
        url: `${site.url}${pump.path}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [{ url: pump.images[0].src, alt: pump.images[0].alt }]
      },
      twitter: {
        card: "summary_large_image",
        title: pump.title,
        description: pump.metaDescription,
        images: [pump.images[0].src]
      }
    };
  }
  if (locale === "en" && slug === aryungSlug) {
    return {
      title: "ARYUNG ATP-216HA(VB) T-Rotor Coolant Pump | MAVORIX",
      description:
        "Source ARYUNG ATP-216HA(VB) T-rotor coolant pump, MFG No. 25060186. Confirm voltage, flow, pressure, ports and mounting before ordering.",
      alternates: {
        canonical: `${site.url}${aryungPath}`
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true
        }
      },
      openGraph: {
        title: aryungTitle,
        description:
          "ARYUNG ATP-216HA(VB) T-rotor coolant pump sourcing support based on visible label information.",
        url: `${site.url}${aryungPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [
          {
            url: aryungImages[0].src,
            width: 1400,
            height: 590,
            alt: aryungImages[0].alt
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: aryungTitle,
        description:
          "ARYUNG ATP-216HA(VB) T-rotor coolant pump sourcing support based on visible label information.",
        images: [aryungImages[0].src]
      }
    };
  }
  if (locale === "en" && slug === daikinSlug) {
    return {
      title: "DAIKIN V38A3RX-95 Piston Pump | MAVORIX",
      description:
        "Source DAIKIN V38A3RX-95 piston pump, MFG No. YED00-2511-00070. Confirm displacement, pressure, ports and mounting before ordering.",
      alternates: {
        canonical: `${site.url}${daikinPath}`
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true
        }
      },
      openGraph: {
        title: daikinTitle,
        description:
          "DAIKIN V38A3RX-95 piston pump sourcing support based on visible label information.",
        url: `${site.url}${daikinPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [
          {
            url: daikinImages[0].src,
            width: 1050,
            height: 1400,
            alt: daikinImages[0].alt
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: daikinTitle,
        description:
          "DAIKIN V38A3RX-95 piston pump sourcing support based on visible label information.",
        images: [daikinImages[0].src]
      }
    };
  }
  if (locale === "en" && slug === hytekSlug) {
    return {
      title: "HYTEK HG0-08-01A-VPC Hydraulic Pump | MAVORIX",
      description:
        "Source HYTEK HG0-08-01A-VPC hydraulic pump with label and product photo checking for industrial hydraulic spare parts sourcing.",
      alternates: {
        canonical: `${site.url}${hytekPath}`
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true
        }
      },
      openGraph: {
        title: hytekTitle,
        description:
          "HYTEK HG0-08-01A-VPC hydraulic pump sourcing support based on buyer-provided product photo information.",
        url: `${site.url}${hytekPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [
          {
            url: hytekImages[0].src,
            width: 1400,
            height: 1050,
            alt: hytekImages[0].alt
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: hytekTitle,
        description:
          "HYTEK HG0-08-01A-VPC hydraulic pump sourcing support based on buyer-provided product photo information.",
        images: [hytekImages[0].src]
      }
    };
  }
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "Rexroth 4WE6D6X/OFEG24N9K4 Directional Valve | MAVORIX",
    description:
      "Source the Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valve, MNR R900567512, with 350 bar pressure marking. Send the old valve label and coil details for verification.",
    alternates: {
      canonical: `${site.url}${productPath}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: productTitle,
      description:
        "Source the Rexroth 4WE6D6X/OFEG24N9K4 directional valve, MNR R900567512, with model-code verification support.",
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [
        {
          url: productImages[0].src,
          width: 1400,
          height: 737,
          alt: productImages[0].alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description:
        "Source the Rexroth 4WE6D6X/OFEG24N9K4 directional valve, MNR R900567512, with model-code verification support.",
      images: [productImages[0].src]
    }
  };
}

export default async function RexrothDirectionalValvePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale === "en" && slug === counterbalanceValveSlug) return <RexrothCounterbalanceValvePage />;
  if (locale === "en" && slug === hydromaxPump.slug) return <HydraulicPumpPage product={hydromaxPump} />;
  if (locale === "en" && slug === rexrothAzpwPump.slug) return <HydraulicPumpPage product={rexrothAzpwPump} />;
  if (locale === "en" && slug === rexrothA10vsoPump.slug) return <HydraulicPumpPage product={rexrothA10vsoPump} />;
  if (locale === "en" && slug === aryungSlug) return <AryungCoolantPumpPage />;
  if (locale === "en" && slug === daikinSlug) return <DaikinPistonPumpPage />;
  if (locale === "en" && slug === hytekSlug) return <HytekHydraulicPumpPage />;
  if (locale !== "en" || slug !== productSlug) notFound();

  const inquirySubject = encodeURIComponent("Rexroth 4WE6D6X/OFEG24N9K4 directional valve inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: productTitle, href: productPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={productImages} />

          <div className="space-y-7">
            <div>
              <Badge>Hydraulic Directional Valve</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {productTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Rexroth 4WE6D6X/OFEG24N9K4 solenoid-operated hydraulic directional control valve, Material No. R900567512, with a
                visible maximum pressure marking of 350 bar. Buyers should verify the complete valve code, coil voltage, hydraulic
                symbol, connector and installation requirements before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Your Old Valve Label
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              The Rexroth 4WE6D6X/OFEG24N9K4 is a solenoid-operated directional spool valve used for controlling the start, stop
              and direction of hydraulic fluid flow in industrial hydraulic systems. The visible product label identifies Material
              No. R900567512 and a maximum pressure marking of 350 bar.
            </p>
            <p>
              Directional control valves of this type are commonly used in hydraulic power units, industrial machinery, machine
              tools, plastic processing equipment and automated production systems. The valve is electrically actuated, while the
              internal spool controls the hydraulic flow paths according to the selected valve configuration.
            </p>
            <p>
              When sourcing a replacement valve, the complete model code should be checked rather than relying only on appearance or
              the basic 4WE6 series designation. Different versions may vary in spool symbol, coil voltage, electrical connector,
              manual override, seal material and other configuration details.
            </p>
            <p>
              MAVORIX can assist with label identification, model comparison, China-side supplier sourcing, pre-shipment photo
              verification and consolidation with other hydraulic, electrical and MRO spare parts.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {confirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {keyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Exact compatibility depends on the complete model code, spool configuration, coil voltage, electrical connector,
              hydraulic interface and equipment requirements.
            </p>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              These are typical application categories only. Final valve selection must be based on the hydraulic circuit, complete
              valve code and electrical configuration.
            </p>
          </Section>

          <Section title="Hydraulic Valve Replacement Notice">
            <p>
              Checking only the 4WE6 series name is not enough for replacement sourcing. The complete valve model must match the old
              unit or be technically confirmed against the hydraulic circuit and equipment requirements.
            </p>
            <p>
              Buyers should compare the spool function symbol, coil voltage, electrical plug, Material Number, mounting interface
              and installation dimensions. Similar appearance does not prove hydraulic or electrical compatibility.
            </p>
            <p>
              Installation should be completed by qualified hydraulic technical personnel. This page does not provide hydraulic
              piping, wiring or circuit modification instructions.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {orderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports industrial buyers with hydraulic valve sourcing, model verification and China-side supplier
              coordination. Related requirements can also be handled through our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {sourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need Help Verifying a Hydraulic Directional Valve?"
        text="Send the complete valve label, MNR, hydraulic symbol, coil label, connector photo, equipment details and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), productSchema(), faqSchema(faqs)]} />
    </>
  );
}

function AryungCoolantPumpPage() {
  const inquirySubject = encodeURIComponent("ARYUNG ATP-216HA(VB) coolant pump inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: aryungTitle, url: `${site.url}${aryungPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: aryungTitle, href: aryungPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={aryungImages} />

          <div className="space-y-7">
            <div>
              <Badge>T-Rotor Coolant Pump</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {aryungTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                ARYUNG ATP-216HA(VB) T-rotor coolant pump with visible MFG No. 25060186 and coolant application marking. Buyers
                should confirm voltage, power, flow, pressure, port size and mounting details before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {aryungSummarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Pump Label Photo
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              The ARYUNG ATP-216HA(VB) is shown on the product label as a T-rotor pump for coolant use. The visible label also
              shows MFG No. 25060186, IN / OUT markings and a country marking of Made in Korea.
            </p>
            <p>
              For machine-tool and industrial machinery maintenance, coolant pump replacement should be checked using the complete
              pump label and installation details. A similar pump body or series name is not enough to confirm interchangeability.
            </p>
            <p>
              MAVORIX can help overseas buyers organize label checking, supplier communication, photo confirmation and spare-parts
              consolidation for pumps and related industrial components.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {aryungConfirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungKeyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungApplications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Compatibility / Selection Notice">
            <p>
              Final replacement selection should be confirmed against the old pump label, electrical rating, coolant system
              requirements, mounting position, port connection and machine model.
            </p>
            <p>
              Voltage, power, flow rate, pressure range, port size and mounting dimensions are not confirmed from the current
              single photo.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungOrderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports industrial buyers with pump model checking, supplier sourcing and China-side spare-parts
              coordination. Related requests can also connect with our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungSourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={aryungFaqs} />
      <CTASection
        title="Need Help Checking a Coolant Pump Replacement?"
        text="Send the pump label, voltage and power markings, port details, mounting dimensions, machine model and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), aryungProductSchema(), faqSchema(aryungFaqs)]} />
    </>
  );
}

function aryungProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: aryungTitle,
    brand: {
      "@type": "Brand",
      name: "ARYUNG"
    },
    model: "ATP-216HA(VB)",
    mpn: "25060186",
    category: "T-Rotor Coolant Pump",
    image: aryungImages.map((image) => `${site.url}${image.src}`),
    description:
      "ARYUNG ATP-216HA(VB) T-rotor coolant pump with visible MFG No. 25060186 and coolant application marking."
  };
}

function DaikinPistonPumpPage() {
  const inquirySubject = encodeURIComponent("DAIKIN V38A3RX-95 piston pump inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: daikinTitle, url: `${site.url}${daikinPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: daikinTitle, href: daikinPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={daikinImages} />

          <div className="space-y-7">
            <div>
              <Badge>Hydraulic Piston Pump</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {daikinTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                DAIKIN V38A3RX-95 piston pump with visible DAIKIN INDUSTRIES, LTD. label, MFG No. YED00-2511-00070 and Made in
                Japan marking. Buyers should confirm displacement, pressure rating, shaft, ports, mounting and hydraulic system
                requirements before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {daikinSummarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Pump Label Photo
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              The DAIKIN V38A3RX-95 is identified on the visible product label as a piston pump. The label also shows DAIKIN
              INDUSTRIES, LTD., MFG No. YED00-2511-00070 and a Made in Japan marking.
            </p>
            <p>
              Hydraulic piston pump replacement should be checked using the complete model label and system details. A similar pump
              body or partial model code is not enough to confirm interchangeability.
            </p>
            <p>
              MAVORIX can help overseas buyers organize label checking, supplier communication, photo confirmation and spare-parts
              consolidation for hydraulic pumps and related industrial components.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {daikinConfirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinKeyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinApplications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Compatibility / Selection Notice">
            <p>
              Final replacement selection should be confirmed against the old pump label, displacement, pressure rating, shaft
              specification, port arrangement, mounting position, rotation direction and machine hydraulic circuit.
            </p>
            <p>
              Displacement, pressure rating, rotation direction, shaft specification, port size and mounting dimensions are not
              confirmed from the current single photo.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinOrderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports industrial buyers with hydraulic pump model checking, supplier sourcing and China-side spare-parts
              coordination. Related requests can also connect with our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinSourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={daikinFaqs} />
      <CTASection
        title="Need Help Checking a Hydraulic Pump Replacement?"
        text="Send the pump label, old pump photos, port details, mounting dimensions, machine model and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), daikinProductSchema(), faqSchema(daikinFaqs)]} />
    </>
  );
}

function HytekHydraulicPumpPage() {
  const inquirySubject = encodeURIComponent("HYTEK HG0-08-01A-VPC hydraulic pump inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: hytekTitle, url: `${site.url}${hytekPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: hytekTitle, href: hytekPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={hytekImages} />

          <div className="space-y-7">
            <div>
              <Badge>Hydraulic Pump</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {hytekTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                HYTEK HG0-08-01A-VPC hydraulic pump shown with visible HYTEK label, flange-mounted pump body and protected splined
                shaft. Buyers should confirm the exact label code, pump type, displacement, pressure, shaft, ports and mounting
                dimensions before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {hytekSummarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Pump Label Photo
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              The HYTEK HG0-08-01A-VPC hydraulic pump is prepared as a sourcing reference page for buyers who need industrial
              hydraulic spare parts support. The current product photo shows the HYTEK label, pump housing, front flange and protected
              splined shaft.
            </p>
            <p>
              Hydraulic pump replacement should be checked with a clear straight-on label photo and the old pump application details.
              Partial model strings or similar-looking housings are not enough to confirm interchangeability.
            </p>
            <p>
              MAVORIX can help overseas buyers organize label checking, supplier communication, photo confirmation and consolidated
              export support for hydraulic pumps and related industrial components.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {hytekConfirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {hytekKeyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {hytekApplications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Compatibility / Selection Notice">
            <p>
              Final replacement selection should be confirmed against the old pump label, pump type, displacement, pressure rating,
              flow, rotation direction, shaft specification, port arrangement, mounting dimensions and machine hydraulic circuit.
            </p>
            <p>
              Pump type, displacement, pressure rating, flow rating, shaft details, port size and mounting dimensions are not confirmed
              from the current single angled photo.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {hytekOrderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports industrial buyers with hydraulic pump model checking, supplier sourcing and China-side spare-parts
              coordination. Related requests can also connect with our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {hytekSourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={hytekFaqs} />
      <CTASection
        title="Need Help Checking a Hydraulic Pump Replacement?"
        text="Send the pump label, old pump photos, shaft and port details, mounting dimensions, machine model and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), hytekProductSchema(), faqSchema(hytekFaqs)]} />
    </>
  );
}

function HydraulicPumpPage({ product }: { product: HydraulicPumpData }) {
  const inquirySubject = encodeURIComponent(`${product.model} hydraulic pump inquiry`);
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: product.title, url: `${site.url}${product.path}` }
  ];
  const sourcingSupport = [
    "Pump label and complete model-code checking",
    "Supplier sourcing and quotation coordination in China",
    "Shaft, port and mounting-information follow-up",
    "Supplier-side product and packing photo collection",
    "Exact-code or proposed-alternative comparison",
    "Consolidation with valves, seals, sensors and other MRO parts",
    "Export packing and shipment coordination"
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: product.title, href: product.path }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={product.images} />

          <div className="space-y-7">
            <div>
              <Badge>{product.badge}</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {product.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{product.summary}</p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {product.summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Pump Label
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.confirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {product.keyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {product.applications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>
              ))}
            </ul>
            <p>These are typical sourcing contexts only. Final pump selection must be based on the hydraulic system and equipment requirements.</p>
          </Section>

          <Section title="Compatibility / Selection Notice">
            {product.selectionNotice.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {product.orderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX acts as an independent China-side sourcing and supplier coordination partner. Related requests can connect with our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {sourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={product.faqs} />
      <CTASection
        title="Need Help Checking a Hydraulic Pump Replacement?"
        text="Send the complete label, old pump photos, shaft and port details, mounting dimensions, machine model and required quantity for sourcing support."
      />
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            brand: { "@type": "Brand", name: product.brand },
            model: product.model,
            ...(product.materialNumber ? { mpn: product.materialNumber } : {}),
            category: product.category,
            image: product.images.map((image) => `${site.url}${image.src}`),
            description: product.schemaDescription
          },
          faqSchema(product.faqs)
        ]}
      />
    </>
  );
}

function hytekProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: hytekTitle,
    brand: {
      "@type": "Brand",
      name: "HYTEK"
    },
    model: "HG0-08-01A-VPC",
    category: "Hydraulic Pump",
    image: hytekImages.map((image) => `${site.url}${image.src}`),
    description:
      "HYTEK HG0-08-01A-VPC hydraulic pump sourcing reference with visible label, pump body and protected splined shaft."
  };
}

function daikinProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: daikinTitle,
    brand: {
      "@type": "Brand",
      name: "DAIKIN"
    },
    model: "V38A3RX-95",
    mpn: "YED00-2511-00070",
    category: "Hydraulic Piston Pump",
    image: daikinImages.map((image) => `${site.url}${image.src}`),
    description:
      "DAIKIN V38A3RX-95 hydraulic piston pump with visible MFG No. YED00-2511-00070 and Made in Japan marking."
  };
}

function SpecTerm({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <dt className="text-xs font-black uppercase text-slate-500">{label}</dt>
      <dd className="mt-1 font-bold text-navy">{value}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">{title}</h2>
      <div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div>
    </section>
  );
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-bold text-signal hover:text-orange-700">
      {children}
    </a>
  );
}

function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productTitle,
    brand: {
      "@type": "Brand",
      name: "Rexroth"
    },
    model: "4WE6D6X/OFEG24N9K4",
    mpn: "R900567512",
    category: "Hydraulic Directional Control Valve",
    image: productImages.map((image) => `${site.url}${image.src}`),
    description:
      "Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valve with MNR R900567512 and 350 bar maximum pressure marking."
  };
}
