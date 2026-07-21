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
  }
];
