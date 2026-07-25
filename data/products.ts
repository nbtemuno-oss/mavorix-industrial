export type PublishedProduct = {
  slug: string;
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  categorySlugs: string[];
};

export const publishedProducts: PublishedProduct[] = [
  {
    slug: "taisheng-apc-400x1-auto-loader-controller-board",
    title: "TAISHENG APC-400X1 Auto Loader Controller Board",
    description:
      "Auto loader controller board, Item No. 91012559, with 230VAC input marking for plastic auxiliary machine replacement sourcing.",
    path: "/en/products/auto-loader-spare-parts/taisheng-apc-400x1-auto-loader-controller-board/",
    image:
      "/images/products/auto-loader-spare-parts/taisheng-apc-400x1/taisheng-apc-400x1-controller-board-thumbnail.webp",
    imageAlt: "TAISHENG APC-400X1 auto loader controller board front view",
    categorySlugs: ["plastic-industry"]
  },
  {
    slug: "i-autoc-ksi480d80-l-068-80a-solid-state-relay",
    title: "i-Autoc KSI480D80-L(068) 80A Solid State Relay",
    description:
      "80A solid state relay with 4-32VDC control input and 480VAC load marking for industrial heating and automation applications.",
    path: "/en/products/electrical-components/i-autoc-ksi480d80-l-068-80a-solid-state-relay/",
    image:
      "/images/products/electrical-components/i-autoc-ksi480d80-l-068/i-autoc-ksi480d80-l-068-80a-solid-state-relay-thumbnail.webp",
    imageAlt: "i-Autoc KSI480D80-L(068) 80A solid state relay",
    categorySlugs: ["electrical-mechanical-parts"]
  },
  {
    slug: "rexroth-4we6d6x-ofeg24n9k4-directional-control-valve",
    title: "Rexroth 4WE6D6X/OFEG24N9K4 Directional Control Valve",
    description:
      "Hydraulic directional control valve, MNR R900567512, with 350 bar pressure marking for industrial hydraulic spare parts sourcing.",
    path: "/en/products/hydraulic-components/rexroth-4we6d6x-ofeg24n9k4-directional-control-valve/",
    image:
      "/images/products/hydraulic-components/rexroth-4we6d6x-ofeg24n9k4/rexroth-4we6d6x-ofeg24n9k4-thumbnail.webp",
    imageAlt: "Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valves in packaging",
    categorySlugs: ["industrial-machinery", "factory-spare-parts"]
  },
  {
    slug: "aryung-atp-216ha-vb-t-rotor-coolant-pump",
    title: "ARYUNG ATP-216HA(VB) T-Rotor Coolant Pump",
    description:
      "T-rotor coolant pump, MFG No. 25060186, with visible ARYUNG label markings for industrial machinery spare parts sourcing.",
    path: "/en/products/hydraulic-components/aryung-atp-216ha-vb-t-rotor-coolant-pump/",
    image:
      "/images/products/hydraulic-components/aryung-atp-216ha-vb-t-rotor-coolant-pump/aryung-atp-216ha-vb-t-rotor-coolant-pump-thumbnail.webp",
    imageAlt: "ARYUNG ATP-216HA(VB) T-rotor coolant pump label view",
    categorySlugs: ["industrial-machinery", "factory-spare-parts"]
  },
  {
    slug: "daikin-v38a3rx-95-piston-pump",
    title: "DAIKIN V38A3RX-95 Piston Pump",
    description:
      "DAIKIN V38A3RX-95 piston pump, MFG No. YED00-2511-00070, with visible label markings for hydraulic spare parts sourcing.",
    path: "/en/products/hydraulic-components/daikin-v38a3rx-95-piston-pump/",
    image:
      "/images/products/hydraulic-components/daikin-v38a3rx-95-piston-pump/daikin-v38a3rx-95-piston-pump-thumbnail.webp",
    imageAlt: "DAIKIN V38A3RX-95 piston pump label view",
    categorySlugs: ["industrial-machinery", "factory-spare-parts"]
  },
  {
    slug: "hytek-hg0-08-01a-vpc-hydraulic-pump",
    title: "HYTEK HG0-08-01A-VPC Hydraulic Pump",
    description:
      "HYTEK HG0-08-01A-VPC hydraulic pump with visible label, flange-mounted body and protected splined shaft for industrial spare parts sourcing.",
    path: "/en/products/hydraulic-components/hytek-hg0-08-01a-vpc-hydraulic-pump/",
    image:
      "/images/products/hydraulic-components/hytek-hg0-08-01a-vpc-hydraulic-pump/hytek-hg0-08-01a-vpc-hydraulic-pump-thumbnail.webp",
    imageAlt: "HYTEK HG0-08-01A-VPC hydraulic pump label and shaft view",
    categorySlugs: ["industrial-machinery", "factory-spare-parts"]
  }
];
