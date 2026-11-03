import { countries } from "./countries";
import { industries } from "./industries";
import { services } from "./services";

export const mainNav = [
  { label: "Home", href: "/en/" },
  { label: "Industrial Sourcing", href: "/en/industrial-sourcing/", children: [
    { label: "MRO Supplies", href: "/en/industries/mro-supplies/" },
    { label: "Metal Parts Supplier Sourcing", href: "/en/industries/metal-parts/" },
    { label: "Packaging Machine Spare Parts", href: "/en/industries/packaging-industry/" },
    { label: "Agricultural Machinery Parts", href: "/en/industries/agricultural-equipment/" },
    { label: "MRO Sourcing from China", href: "/en/services/mro-sourcing-from-china/" }
  ] },
  { label: "Services", href: "/en/services/", children: services.map((item) => ({ label: item.title, href: `/en/services/${item.slug}/` })) },
  { label: "Industries", href: "/en/industries/", children: industries.map((item) => ({ label: item.title, href: `/en/industries/${item.slug}/` })) },
  { label: "Countries", href: "/en/countries/", children: countries.map((item) => ({ label: item.title, href: `/en/countries/${item.slug}/` })) },
  { label: "Blog", href: "/en/blog/" },
  { label: "Contact", href: "/en/contact/" }
];
