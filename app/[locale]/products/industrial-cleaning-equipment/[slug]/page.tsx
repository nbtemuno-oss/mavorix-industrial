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

const productSlug = "gas-fired-batch-burn-off-oven-paint-polymer-removal";
const productTitle = "Gas-Fired Batch Burn-Off Oven for Paint and Polymer Removal";
const productPath = `/en/products/industrial-cleaning-equipment/${productSlug}/`;
const metaDescription =
  "Source a gas-fired batch burn-off oven for paint, powder coating and polymer removal from metal racks, hooks, fixtures and heat-resistant parts.";

const imageBase = `/images/products/general-products/${productSlug}`;
const productImages = [
  {
    src: `${imageBase}/${productSlug}-main.webp`,
    alt: "Front view of gas-fired batch burn-off oven with double loading doors",
    label: "Front loading doors"
  },
  {
    src: `${imageBase}/${productSlug}-gallery-02.webp`,
    alt: "Three-quarter view of industrial batch burn-off oven chamber and reinforced doors",
    label: "Chamber exterior"
  },
  {
    src: `${imageBase}/${productSlug}-gallery-03.webp`,
    alt: "Gas-fired pyrolysis cleaning oven showing side-mounted controls and process connections",
    label: "Control-side view"
  },
  {
    src: `${imageBase}/${productSlug}-gallery-04.webp`,
    alt: "Industrial burn-off oven control side with PLC cabinet, secondary chamber and signal tower",
    label: "PLC and afterburner side"
  },
  {
    src: `${imageBase}/${productSlug}-gallery-05.webp`,
    alt: "Riello burner and temperature sensor installation on thermal cleaning oven",
    label: "Burner and sensing hardware"
  },
  {
    src: `${imageBase}/${productSlug}-gallery-06.webp`,
    alt: "Riello 40 burner assembly and gas connection for batch burn-off oven",
    label: "Gas burner assembly"
  }
];

const summarySpecs = [
  ["Equipment Type", "Gas-fired batch burn-off oven"],
  ["Internal Chamber", "1800 x 1600 x 1700 mm"],
  ["Loading Cart", "1700 x 1400 x 1200 mm"],
  ["Typical Cycle", "Approximately 2-3 hours"],
  ["Coating Capacity", "18-22 kg/h, stated basis"],
  ["Control", "Automatic PLC control"]
];

const confirmedSpecs = [
  ["Equipment Type", "Gas-fired batch burn-off oven / pyrolysis cleaning oven"],
  ["Overall Dimensions", "2300 x 2100 x 2800 mm (L x W x H)"],
  ["Internal Chamber Dimensions", "1800 x 1600 x 1700 mm (L x W x H)"],
  ["Loading Cart Dimensions", "1700 x 1400 x 1200 mm (L x W x H)"],
  ["Typical Cleaning Cycle", "Approximately 2-3 hours per batch"],
  ["Coating Removal Capacity", "18-22 kg/h, based on coating weight"],
  ["Fuel Options", "Natural gas or suitable fuel oil"],
  ["Natural Gas Requirement", "4-5 kPa; stated flow 23 m3/h"],
  ["Primary Chamber Temperature", "Adjustable from ambient temperature to 500 C"],
  ["Secondary Combustion Temperature", "Approximately 650-900 C in the supplied process description"],
  ["Outer Wall Temperature", "Not more than ambient temperature +20 C"],
  ["Electrical Load", "Less than 700 W"],
  ["Control Supply", "220 V / 50 Hz"],
  ["Water Supply", "Normal mains/tap water"],
  ["Control Method", "Automatic PLC control"],
  ["Supplier-Stated Emissions Reference", "Below GB16297-1996; destination requirements must be checked separately"]
];

const keyFeatures = [
  "Large front-opening batch chamber with reinforced double doors",
  "Loading cart sized for racks, hooks, fixtures and larger metal parts",
  "Separate primary decomposition and secondary combustion stages",
  "Automatic PLC process control",
  "Automatic water-spray control described in the supplied process material",
  "Visible Riello burner hardware; final burner configuration subject to order confirmation",
  "Adjustable primary chamber temperature up to the documented 500 C",
  "Process designed for controlled removal of paint and polymer residues from heat-resistant metal parts"
];

const applications = [
  "Powder-coating hooks, racks and hangers",
  "Painted metal fixtures and production tooling",
  "Heat-resistant metal parts carrying cured organic coatings",
  "Extrusion and plastics-processing tooling with suitable polymer residues",
  "Motor, stator and metal component resin-removal projects after engineering review",
  "Maintenance cleaning for coating and manufacturing lines"
];

const orderingInfo = [
  "Photos and material of the parts to be cleaned",
  "Maximum part dimensions and weight per batch",
  "Rack or loading arrangement",
  "Coating, paint, resin or polymer chemistry",
  "Estimated contamination weight per batch",
  "Required batches per shift and available cycle time",
  "Site fuel type, pressure and available flow",
  "Site voltage, frequency and phase",
  "Water supply and drainage conditions",
  "Required chamber and loading-cart dimensions",
  "Chimney, exhaust and installation layout",
  "Local emissions, fire-safety and pressure requirements",
  "Destination, unloading and commissioning scope"
];

const faqs = [
  {
    q: "What is a batch burn-off oven used for?",
    a: "It is used to thermally remove suitable cured paint, powder coating, polymer and other organic residues from heat-resistant metal racks, hooks, fixtures and parts. The residue and part material must be reviewed before use."
  },
  {
    q: "Is this the same as a pyrolysis cleaning oven?",
    a: "The terms overlap in industrial purchasing. This unit uses controlled thermal decomposition in a primary chamber followed by high-temperature secondary combustion, so pyrolysis cleaning oven and thermal cleaning furnace are useful secondary descriptions."
  },
  {
    q: "What is the usable chamber size?",
    a: "The supplied specification lists an internal chamber of 1800 x 1600 x 1700 mm and a loading cart of 1700 x 1400 x 1200 mm, both stated in L x W x H order."
  },
  {
    q: "How long is one cleaning cycle?",
    a: "The supplied data states approximately 2-3 hours per batch. Actual time depends on part mass, coating chemistry, contamination weight, loading pattern and process settings."
  },
  {
    q: "Can every coating or plastic be processed in this oven?",
    a: "No. Halogenated materials, sealed components, uncured resin, flammable or explosive items and temperature-sensitive parts require specific review and may be unsuitable. The material safety data and process limits must be confirmed before operation."
  },
  {
    q: "What information is needed for a quotation?",
    a: "Send part photos, dimensions, load weight, coating or polymer chemistry, contamination per batch, required throughput, site fuel, power, water, exhaust arrangement, local compliance requirements and destination."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "Gas-Fired Batch Burn-Off Oven for Paint Removal | MAVORIX",
    description: metaDescription,
    alternates: { canonical: `${site.url}${productPath}` },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true }
    },
    openGraph: {
      title: productTitle,
      description: metaDescription,
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [{ url: productImages[0].src, width: 910, height: 1120, alt: productImages[0].alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: metaDescription,
      images: [productImages[0].src]
    }
  };
}

export default async function BurnOffOvenPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Batch burn-off oven quotation")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: "Industrial Cleaning Equipment", url: `${site.url}/en/industries/industrial-machinery/` },
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
              { label: "Industrial Cleaning Equipment", href: "/en/industries/industrial-machinery/" },
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
              <Badge>Industrial Thermal Cleaning Equipment</Badge>
              <h1 className="mt-4 break-words text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Batch thermal cleaning system for removing suitable cured paint, powder coating and polymer residues from
                heat-resistant metal racks, hooks, fixtures and production parts. The documented configuration combines a primary
                decomposition chamber, secondary combustion stage, automatic PLC control and a loading cart.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Cleaning Requirement</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              Overseas buyers use several names for this equipment. <strong>Batch burn-off oven</strong> is common for removing paint
              and powder coating from hooks, racks and fixtures. <strong>Pyrolysis cleaning oven</strong> and <strong>thermal cleaning
              furnace</strong> are also used when the application includes polymer or resin residues on metal tooling.
            </p>
            <p>
              This is a gas-fired batch design with a large front-opening chamber and wheeled loading cart. Its purpose is to reduce
              manual scraping and chemical stripping for suitable heat-resistant parts while controlling the decomposition and
              exhaust-treatment stages in one equipment package.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <tbody>
                  {confirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-64 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-600">
              These values are translated from the supplied Chinese technical sheet. Final utility consumption, construction,
              burner configuration and compliance scope must be confirmed in the approved quotation and engineering documents.
            </p>
          </section>

          <Section title="How the Burn-Off Oven Works">
            <p>
              Suitable coated workpieces are placed on the loading cart and moved into the primary chamber. The first burner heats
              the insulated chamber so the organic coating gradually decomposes into gas and carbon-rich residue. Process control is
              important because the rate and concentration of the decomposition gas must remain within the designed operating range.
            </p>
            <p>
              The generated gas then moves into the secondary combustion chamber. According to the supplied process description, a
              second burner treats it in an oxygen-rich environment at approximately 650-900 C, converting the combustible fraction
              mainly into carbon dioxide and water vapor before discharge through the engineered exhaust path.
            </p>
            <p>
              The two combustion systems are automatically managed by the electrical controls, while an automatic water-spray system
              is described as another way to control the decomposition rate and gas concentration. After shutdown and cooling, the
              remaining inorganic powder or ash can be removed by light mechanical cleaning or water washing where appropriate.
            </p>
          </Section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {keyFeatures.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
          </Section>

          <Section title="Application and Safety Notice">
            <p>
              Thermal cleaning is not suitable for every part or contaminant. The part material must tolerate the selected process
              temperature, and seals, closed cavities, pressure-retaining spaces and temperature-sensitive components require review.
            </p>
            <p>
              Do not load uncured resin, sealed workpieces, unknown chemicals, explosive materials or other easily ignited items
              without a formal process and safety assessment. Halogenated polymers and coatings can produce corrosive or hazardous
              decomposition products and may require a different cleaning technology or dedicated exhaust treatment.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {orderingInfo.map((item) => <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX acts as an independent China-side sourcing and project-coordination partner. We can help structure the RFQ,
              compare chamber and utility specifications, coordinate supplier questions, collect production photos, follow an agreed
              inspection scope and arrange export packing. Related support is available through our <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>, <LinkText href="/en/services/quality-inspection/">quality inspection</LinkText> and <LinkText href="/en/contact/">contact</LinkText> pages.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need a Burn-Off Oven Sized for Your Parts?"
        text="Send part photos, load dimensions, coating or polymer details, batch weight, throughput, site utilities and destination requirements for supplier comparison."
      />
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: productTitle,
            model: "Custom chamber configuration",
            category: "Industrial Burn-Off Oven",
            image: productImages.map((image) => `${site.url}${image.src}`),
            description: metaDescription
          },
          faqSchema(faqs)
        ]}
      />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 font-bold text-navy">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>;
}
