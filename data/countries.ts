export type Country = {
  slug: string;
  title: string;
  region: string;
  needs: string[];
};

export const countries: Country[] = [
  { slug: "algeria", title: "Algeria", region: "North Africa", needs: ["industrial equipment", "MRO supplies", "agricultural equipment parts"] },
  { slug: "peru", title: "Peru", region: "Latin America", needs: ["machinery parts", "OEM industrial parts", "factory maintenance supplies"] },
  { slug: "russia", title: "Russia", region: "Eurasia", needs: ["industrial spare parts", "machinery components", "MRO supplies"] },
  { slug: "saudi-arabia", title: "Saudi Arabia", region: "Middle East", needs: ["industrial equipment", "electrical and mechanical parts", "maintenance supplies"] },
  { slug: "mexico", title: "Mexico", region: "Latin America", needs: ["OEM parts", "factory spare parts", "packaging equipment"] },
  { slug: "egypt", title: "Egypt", region: "North Africa", needs: ["industrial machinery", "agricultural parts", "MRO supplies"] },
  { slug: "uae", title: "UAE", region: "Middle East", needs: ["industrial equipment", "OEM products", "supplier consolidation"] },
  { slug: "colombia", title: "Colombia", region: "Latin America", needs: ["machinery parts", "industrial consumables", "factory supplies"] },
  { slug: "chile", title: "Chile", region: "Latin America", needs: ["industrial equipment", "metal parts", "maintenance supplies"] },
  { slug: "nigeria", title: "Nigeria", region: "West Africa", needs: ["machinery", "agricultural equipment parts", "factory spare parts"] },
  { slug: "south-africa", title: "South Africa", region: "Southern Africa", needs: ["MRO supplies", "industrial spare parts", "OEM components"] },
  { slug: "serbia", title: "Serbia", region: "Southeast Europe", needs: ["MRO sourcing", "OEM parts", "industrial spare parts", "agricultural equipment parts", "packaging machinery parts"] },
  { slug: "romania", title: "Romania", region: "Eastern Europe", needs: ["China industrial sourcing", "MRO supplies", "OEM industrial parts", "factory spare parts", "packaging machinery parts"] },
  { slug: "bulgaria", title: "Bulgaria", region: "Southeast Europe", needs: ["industrial spare parts", "MRO sourcing", "OEM parts", "agricultural equipment parts", "packaging machinery parts"] },
  { slug: "morocco", title: "Morocco", region: "North Africa", needs: ["industrial sourcing", "machinery parts", "supplier verification"] }
];
