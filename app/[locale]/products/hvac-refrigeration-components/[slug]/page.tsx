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
      "Copeland CRNQ-050E-TFD-556 is a three-phase hermetic reciprocating compressor for air-conditioning and suitable high-temperature refrigeration systems. It supports 50/60 Hz power supplies, with 380/420 V at 50 Hz and 380/460 V at 60 Hz. Confirm the refrigerant, operating duty and installation interfaces before ordering a replacement.",
    image: {
      src: "/images/products/general-products/copeland-crnq-050e-tfd-556-hermetic-reciprocating-compressor/copeland-crnq-050e-tfd-556-hermetic-reciprocating-compressor-main.webp",
      alt: "Copeland CRNQ-050E-TFD-556 hermetic reciprocating compressor",
      label: "CRNQ-050E-TFD-556 compressor"
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
      ["Locked-Rotor Amps (LRA)", "65.0 A"]
    ],
    overview: [
      "The Copeland CRNQ-050E-TFD-556 is a hermetic reciprocating compressor designed for air-conditioning and compatible high-temperature refrigeration duties. Its sealed construction combines the motor and compression mechanism in one housing, helping reduce external leakage points and simplifying installation in packaged HVAC equipment.",
      "This TFD configuration uses a thermally protected three-phase motor and is rated for both 50 Hz and 60 Hz supplies. The electrical rating is 380/420 V at 50 Hz and 380/460 V at 60 Hz, with a locked-rotor current of 65.0 A.",
      "For replacement projects, use the complete CRNQ-050E-TFD-556 model rather than CRNQ-050E alone. Refrigerant, lubricant, cooling duty, pipe connections, mounting dimensions and the original equipment specification all need to match the existing system."
    ],
    features: [
      "Hermetic reciprocating compressor construction",
      "Thermally protected three-phase motor",
      "Dual-frequency 50/60 Hz electrical configuration",
      "380/420 V operation at 50 Hz",
      "380/460 V operation at 60 Hz",
      "Sealed motor and compression assembly",
      "Suitable for exact-model HVAC replacement projects"
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
      { q: "What type of compressor is the Copeland CRNQ-050E-TFD-556?", a: "It is a three-phase hermetic reciprocating compressor in the Copeland CRNQ family for air-conditioning and suitable high-temperature refrigeration duties." },
      { q: "What are the CRNQ-050E-TFD-556 electrical specifications?", a: "The motor is thermally protected and rated for three-phase, 50/60 Hz operation: 380/420 V at 50 Hz and 380/460 V at 60 Hz. Locked-rotor current is 65.0 A." },
      { q: "Can CRNQ-050E alone confirm replacement compatibility?", a: "No. The complete suffix, refrigerant, electrical supply, cooling duty, connections, mounting and HVAC unit must be checked." },
      { q: "What is the cooling capacity of CRNQ-050E-TFD-556?", a: "Cooling capacity depends on refrigerant and operating conditions. Confirm it at the required evaporating and condensing temperatures using controlled manufacturer performance data before selection." },
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
      ["Connections", "Copper suction and discharge stubs"]
    ],
    overview: [
      "The Copeland ZR61KC-TFD-522 is a 5 HP hermetic scroll compressor developed for R22 air-conditioning systems. Scroll compression provides a compact, low-vibration design for commercial HVAC equipment, packaged air conditioners and compatible chiller circuits.",
      "Published ZR61KC-TFD reference data lists a 380-420 V, 50 Hz, three-phase motor, with 49,700 Btu/h cooling capacity and 4,430 W input at the stated rating conditions. Actual capacity and power draw will change with evaporating temperature, condensing temperature, superheat and system design.",
      "Replacement selection should use the full ZR61KC-TFD-522 code. Confirm the refrigerant, electrical supply, operating envelope, suction and discharge connections, mounting footprint, oil requirements and original HVAC equipment specification before purchase."
    ],
    features: [
      "Hermetic scroll-compressor construction",
      "5 HP nominal motor rating",
      "380-420 V, 50 Hz, three-phase configuration",
      "R22 air-conditioning application reference",
      "Compact sealed motor and scroll assembly",
      "Integrated terminal enclosure",
      "Copper suction and discharge connections",
      "Four-point mounting base"
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
