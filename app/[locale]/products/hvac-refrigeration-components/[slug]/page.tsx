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

type CompressorProduct = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  badge: string;
  model: string;
  category: string;
  summary: string;
  image: { src: string; alt: string; label: string };
  summarySpecs: string[][];
  confirmedSpecs: string[][];
  overview: string[];
  features: string[];
  applications: string[];
  selection: string[];
  ordering: string[];
  faqs: { q: string; a: string }[];
};

const isPublished = true;

const products: CompressorProduct[] = [
  {
    slug: "copeland-crnq-050e-tfd-556-hermetic-reciprocating-compressor",
    title: "Copeland CRNQ-050E-TFD-556 Hermetic Reciprocating Compressor",
    seoTitle: "Copeland CRNQ-050E-TFD-556 Compressor | MAVORIX",
    description:
      "Source Copeland CRNQ-050E-TFD-556 hermetic reciprocating compressor. Verify the full model, refrigerant, 3-phase voltage and HVAC application.",
    badge: "Hermetic Reciprocating Compressor",
    model: "CRNQ-050E-TFD-556",
    category: "HVAC Hermetic Reciprocating Compressor",
    summary:
      "Copeland CRNQ-050E-TFD-556 hermetic reciprocating compressor with a 3-phase, thermally protected motor. The visible nameplate lists 380/420 V at 50 Hz and 380/460 V at 60 Hz. Refrigerant, system duty and physical interfaces must be confirmed before replacement ordering.",
    image: {
      src: "/images/products/general-products/copeland-crnq-050e-tfd-556-hermetic-reciprocating-compressor/copeland-crnq-050e-tfd-556-hermetic-reciprocating-compressor-main.webp",
      alt: "Copeland CRNQ-050E-TFD-556 hermetic reciprocating compressor secured inside a fitted wooden case",
      label: "Compressor, nameplate and wooden-case view"
    },
    summarySpecs: [
      ["Brand", "Copeland"],
      ["Model", "CRNQ-050E-TFD-556"],
      ["Type", "Hermetic reciprocating compressor"],
      ["Phase", "3 phase"],
      ["50 Hz Voltage", "380/420 V"],
      ["60 Hz Voltage", "380/460 V"]
    ],
    confirmedSpecs: [
      ["Brand", "Copeland"],
      ["Model", "CRNQ-050E-TFD-556"],
      ["Compressor Family", "CRNQ hermetic reciprocating / Copelaweld"],
      ["Motor Protection", "Thermally protected"],
      ["Phase", "3 phase"],
      ["Frequency", "50 / 60 Hz"],
      ["Voltage at 50 Hz", "380/420 V"],
      ["Voltage at 60 Hz", "380/460 V"],
      ["LRA Marking", "65.0 A"],
      ["Packing Shown", "Compressor secured in a fitted wooden case"]
    ],
    overview: [
      "The supplied photo shows a complete black Copeland compressor secured upright in a fitted wooden case. The nameplate is readable and identifies the full model as CRNQ-050E-TFD-556. It also records a three-phase motor, thermal protection, dual-frequency voltage information and an LRA marking of 65.0 A.",
      "Copeland CRNQ compressors are hermetic reciprocating units used in air-conditioning and suitable high-temperature refrigeration duties. A model-family description is useful for finding suppliers, but replacement selection must stay tied to the full suffix and the existing system rather than CRNQ-050E alone.",
      "MAVORIX supports overseas buyers with model checking, supplier comparison, nameplate and packing photos, and consolidation with other HVAC, refrigeration and industrial spare parts."
    ],
    features: [
      "Full CRNQ-050E-TFD-556 nameplate visible",
      "Hermetic reciprocating compressor construction",
      "Thermally protected motor marking",
      "Three-phase configuration",
      "50 Hz and 60 Hz voltage information visible",
      "Mounted on transport feet inside a fitted wooden case",
      "Separate protected connection components visible",
      "Suitable for exact-model HVAC replacement inquiries"
    ],
    applications: [
      "Commercial air-conditioning systems",
      "Packaged HVAC equipment",
      "Suitable high-temperature refrigeration systems",
      "Heat-pump and climate-control equipment maintenance",
      "Legacy compressor replacement projects",
      "HVAC spare-parts sourcing and consolidation"
    ],
    selection: [
      "Do not select a compressor from nominal horsepower or body shape alone. Confirm the complete CRNQ-050E-TFD-556 code, refrigerant, oil, voltage, phase, frequency, design conditions, line connections and mounting arrangement against the old unit and equipment documentation.",
      "Published performance for another CRNQ-050E bill of material is not automatically the rating of this exact supplied configuration. Cooling capacity changes with evaporating temperature, condensing temperature, superheat, subcooling and power supply."
    ],
    ordering: [
      "Old compressor nameplate photo",
      "Complete compressor model and bill-of-material suffix",
      "HVAC unit brand and model",
      "Refrigerant and lubricant",
      "Voltage, phase and frequency",
      "Evaporating and condensing conditions",
      "Required cooling capacity",
      "Suction and discharge connection details",
      "Mounting dimensions and accessory scope",
      "Quantity and destination"
    ],
    faqs: [
      { q: "What type of compressor is the Copeland CRNQ-050E-TFD-556?", a: "It is a Copeland hermetic reciprocating compressor in the CRNQ family. The full model on the supplied nameplate is CRNQ-050E-TFD-556." },
      { q: "What electrical information is visible on the nameplate?", a: "The nameplate shows three phase, 50/60 Hz, 380/420 V at 50 Hz, 380/460 V at 60 Hz and an LRA marking of 65.0 A." },
      { q: "Can CRNQ-050E alone confirm replacement compatibility?", a: "No. The complete suffix, refrigerant, electrical supply, cooling duty, connections, mounting and HVAC unit must be checked." },
      { q: "Is cooling capacity confirmed by the current photo?", a: "No. Cooling capacity is not published here as a confirmed nameplate value. It must be checked at the buyer's actual operating conditions using controlled manufacturer data." },
      { q: "Can MAVORIX arrange export packing for a compressor?", a: "MAVORIX can coordinate supplier-side photos, fitted wooden-case packing, accessory identification and consolidation after the buyer approves the exact compressor configuration." }
    ]
  },
  {
    slug: "copeland-zr61kc-tfd-522-5hp-scroll-compressor",
    title: "Copeland ZR61KC-TFD-522 5 HP Scroll Compressor",
    seoTitle: "Copeland ZR61KC-TFD-522 Scroll Compressor | MAVORIX",
    description:
      "Source Copeland ZR61KC-TFD-522 5 HP R22 scroll compressor, 380-420 V 3-phase 50 Hz. Verify the full model and HVAC system before ordering.",
    badge: "Air-Conditioning Scroll Compressor",
    model: "ZR61KC-TFD-522",
    category: "HVAC Scroll Compressor",
    summary:
      "Copeland ZR61KC-TFD-522 hermetic scroll compressor for R22 air-conditioning applications. Published ZR61KC-TFD reference data lists 5 HP, 380-420 V, 50 Hz, 3 phase and 49,700 Btu/h at stated rating conditions. Final selection must match the full model and actual HVAC system.",
    image: {
      src: "/images/products/general-products/copeland-zr61kc-tfd-522-5hp-scroll-compressor/copeland-zr61kc-tfd-522-5hp-scroll-compressor-main.webp",
      alt: "Copeland ZR61KC-TFD-522 scroll compressor showing label, terminal cover, copper connections and mounting feet",
      label: "Complete compressor and model-label view"
    },
    summarySpecs: [
      ["Brand", "Copeland Scroll"],
      ["Model", "ZR61KC-TFD-522"],
      ["Type", "Hermetic scroll compressor"],
      ["Nominal Motor", "5 HP"],
      ["Power Supply", "380-420 V, 50 Hz, 3 phase"],
      ["Refrigerant Reference", "R22 / HCFC"]
    ],
    confirmedSpecs: [
      ["Brand", "Copeland Scroll"],
      ["Model", "ZR61KC-TFD-522"],
      ["Compressor Type", "Hermetic scroll compressor"],
      ["Application Family", "Air conditioning"],
      ["Nominal Motor", "5 HP"],
      ["Refrigerant Reference", "R22 / HCFC"],
      ["Power Supply", "380-420 V, 50 Hz, 3 phase"],
      ["Published Reference Capacity", "49,700 Btu/h / 14.566 kW at stated rating conditions"],
      ["Published Reference Input", "4,430 W at stated rating conditions"],
      ["Visible Connections", "Copper suction and discharge stubs with protective caps"]
    ],
    overview: [
      "The supplied photo shows a complete Copeland Scroll compressor with the full ZR61KC-TFD-522 label, terminal cover, mounting feet and protected copper connections visible. The image is useful for confirming the model and the physical condition presented before packing.",
      "Copeland's published ZR61KC-TFD model data identifies an R22 air-conditioning scroll compressor with a 5 HP motor and 380-420 V, 50 Hz, three-phase supply. The published 49,700 Btu/h capacity and 4,430 W input are rating-condition values, not guarantees for every installation.",
      "MAVORIX can help overseas buyers keep the full model code consistent across quotations, compare supplier documents, collect pre-shipment evidence and coordinate packing with other HVAC or factory spare parts."
    ],
    features: [
      "Full ZR61KC-TFD-522 model label visible",
      "Copeland Scroll branding visible",
      "Hermetic scroll-compressor construction",
      "5 HP model-family reference",
      "Three-phase 50 Hz model-family configuration",
      "Terminal enclosure fitted",
      "Copper connections protected with caps",
      "Four-point mounting base visible"
    ],
    applications: [
      "Commercial air-conditioning systems",
      "Packaged and split HVAC equipment",
      "Chillers using an approved matching circuit",
      "R22 system maintenance where legally permitted",
      "Legacy Copeland Scroll replacement projects",
      "HVAC compressor sourcing and consolidation"
    ],
    selection: [
      "A ZR61KC compressor should not be selected from nominal capacity alone. Confirm the full ZR61KC-TFD-522 code, refrigerant, voltage, phase, frequency, operating envelope, line connections, mounting and HVAC unit documentation.",
      "Refrigerant rules and service practices vary by destination. The buyer and qualified HVAC technician must confirm whether R22 equipment can legally be imported, installed or serviced in the destination market before ordering."
    ],
    ordering: [
      "Old compressor nameplate photo",
      "Complete compressor model and suffix",
      "HVAC unit brand and model",
      "Refrigerant and lubricant",
      "Voltage, phase and frequency",
      "Evaporating and condensing conditions",
      "Required cooling capacity",
      "Suction and discharge connection details",
      "Mounting dimensions and accessory scope",
      "Quantity and destination"
    ],
    faqs: [
      { q: "What is the Copeland ZR61KC-TFD-522?", a: "It is a Copeland hermetic scroll compressor used in air-conditioning applications. The complete supplied model is ZR61KC-TFD-522." },
      { q: "What are the published ZR61KC-TFD electrical specifications?", a: "Copeland model-family data lists 380-420 V, 50 Hz and three phase. The exact destination supply and full model must still be confirmed." },
      { q: "Is ZR61KC-TFD-522 a 5 HP compressor?", a: "Copeland's published ZR61KC-TFD data identifies the model family as 5 HP. Capacity depends on the specified rating conditions and HVAC system." },
      { q: "Can another ZR61KC compressor replace the -522 version?", a: "Not automatically. The bill-of-material suffix, refrigerant, motor, connections, mounting and equipment requirements should be compared in writing." },
      { q: "Can MAVORIX source and pack this compressor for export?", a: "MAVORIX can coordinate exact-model sourcing, supplier documentation, product photos and export packing after the buyer confirms system compatibility and destination requirements." }
    ]
  }
];

export function generateStaticParams() {
  return products.map((product) => ({ locale: "en", slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((item) => locale === "en" && item.slug === slug);
  if (!product) return {};
  const path = `/en/products/hvac-refrigeration-components/${product.slug}/`;
  return {
    title: product.seoTitle,
    description: product.description,
    alternates: { canonical: `${site.url}${path}` },
    robots: { index: isPublished, follow: isPublished, googleBot: { index: isPublished, follow: isPublished } },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [{ url: product.image.src, alt: product.image.alt }]
    },
    twitter: { card: "summary_large_image", title: product.title, description: product.description, images: [product.image.src] }
  };
}

export default async function CompressorProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const product = products.find((item) => locale === "en" && item.slug === slug);
  if (!product) notFound();
  const path = `/en/products/hvac-refrigeration-components/${product.slug}/`;
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(`${product.model} compressor inquiry`)}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Electrical & Mechanical Parts", url: `${site.url}/en/industries/electrical-mechanical-parts/` },
    { name: product.title, url: `${site.url}${path}` }
  ];

  return <>
    <section className="bg-slate-50 py-8"><Container><Breadcrumbs items={[
      { label: "Home", href: "/en/" },
      { label: "Electrical & Mechanical Parts", href: "/en/industries/electrical-mechanical-parts/" },
      { label: product.title, href: path }
    ]} /></Container></section>

    <section className="bg-white py-12">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
        <ProductImageGallery images={[product.image]} />
        <div className="space-y-7">
          <div>
            <Badge>{product.badge}</Badge>
            <h1 className="mt-4 break-words text-4xl font-black leading-tight text-navy [overflow-wrap:anywhere] md:text-5xl">{product.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.summary}</p>
          </div>
          <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
            {product.summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}
          </dl>
          <div className="flex flex-wrap gap-3">
            <Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Your Compressor Label</Button>
            <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button>
          </div>
        </div>
      </Container>
    </section>

    <Container className="py-14"><article className="space-y-12">
      <Section title="Product Overview">{product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Section>
      <section>
        <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white"><table className="w-full text-left text-sm"><tbody>
          {product.confirmedSpecs.map(([label, value]) => <tr key={label} className="border-b border-slate-200 last:border-0">
            <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
            <td className="break-words px-4 py-3 font-semibold text-slate-700 [overflow-wrap:anywhere]">{value}</td>
          </tr>)}
        </tbody></table></div>
      </section>
      <Section title="Key Features"><FeatureGrid items={product.features} /></Section>
      <Section title="Typical Applications">
        <FeatureGrid items={product.applications} />
        <p>Applications are sourcing references only. Final compressor selection must follow the equipment design and qualified HVAC review.</p>
      </Section>
      <Section title="Compatibility and Selection Notice">{product.selection.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Section>
      <Section title="Information Required Before Ordering"><FeatureGrid items={product.ordering} muted /></Section>
      <Section title="MAVORIX Sourcing Support">
        <p>MAVORIX is an independent China-side sourcing and supplier coordination partner, not the compressor manufacturer or an authorized Copeland distributor. We can coordinate model comparison, supplier documents, product photos, packing checks and consolidation.</p>
        <p>Related support is available through our <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>, <LinkText href="/en/industries/electrical-mechanical-parts/">electrical and mechanical parts</LinkText>, <LinkText href="/en/services/quality-inspection/">quality inspection</LinkText> and <LinkText href="/en/contact/">contact</LinkText> pages.</p>
      </Section>
    </article></Container>

    <FAQSection faqs={product.faqs} />
    <CTASection title={`Need Help Checking ${product.model}?`} text="Send the complete old-compressor label, HVAC unit model, refrigerant, electrical supply, connections, quantity and destination for sourcing support." />
    <JsonLd data={[
      breadcrumbSchema(breadcrumbItems),
      { "@context": "https://schema.org", "@type": "Product", name: product.title, brand: { "@type": "Brand", name: "Copeland" }, model: product.model, mpn: product.model, category: product.category, image: [`${site.url}${product.image.src}`], description: product.description },
      faqSchema(product.faqs)
    ]} />
  </>;
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 break-words font-bold text-navy [overflow-wrap:anywhere]">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function FeatureGrid({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return <ul className="grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className={`${muted ? "bg-slate-50 ring-1 ring-slate-200" : "border border-slate-200 bg-white"} rounded-md p-4 text-sm font-semibold text-slate-700`}>{item}</li>)}</ul>;
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>;
}
