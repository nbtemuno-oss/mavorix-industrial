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

const productSlug = "ms-505-high-speed-automatic-pp-strapping-machine";
const productTitle = "MS-505 High-Speed Automatic PP Strapping Machine";
const productPath = `/en/products/packaging-equipment/${productSlug}/`;
const metaDescription =
  "Source the MS-505 high-speed automatic PP strapping machine with up to 65 straps/min, 0-45kg tension and a 650 x 500mm standard arch.";

const productImages = [
  {
    src: "/images/products/packaging-equipment/ms-505-high-speed-automatic-pp-strapping-machine/ms-505-high-speed-automatic-pp-strapping-machine-main.webp",
    alt: "MS-505 high-speed automatic PP strapping machine with arch, touch screen, worktable and side strap spool",
    label: "MS-505 machine"
  }
];

const summarySpecs = [
  ["Model", "MS-505"],
  ["Machine Type", "Automatic arch strapping machine"],
  ["Documented Speed", "Up to 65 straps/min"],
  ["Tension Range", "0-45kg"],
  ["Standard Arch", "650mm W x 500mm H"],
  ["Standard Strap", "5mm or 6mm PP strap"]
];

const confirmedSpecs = [
  ["Model", "MS-505"],
  ["Machine Type", "High-speed automatic arch strapping machine"],
  ["Power Supply", "220V, 50/60Hz, single phase, 0.6kW, 4A"],
  ["Documented Strapping Speed", "Up to 65 straps per minute"],
  ["Tension Range", "0-45kg"],
  ["Sealing Position", "Bottom hot-sealing position"],
  ["Table Height", "850mm"],
  ["Standard Arch Opening", "650mm W x 500mm H inner size; customized arch subject to confirmation"],
  ["Standard PP Strap", "5mm or 6mm wide, 0.5-0.8mm thick; specify before ordering"],
  ["Optional Strap Width", "8mm, 9mm, 11mm or 12mm; configuration must be specified"],
  ["Strap Spool", "200-210mm inner diameter, 400-450mm outer diameter, 170-190mm width"],
  ["Operating Modes", "Manual/parallel, continuous and foot-switch operation"],
  ["Control", "PCB microchip circuit board and touch-screen interface"],
  ["Motor", "MEIWA brushless DC motor stated in supplied document"],
  ["Sensor", "P+F or FOTECK stated in supplied document"],
  ["Machine Dimensions", "1170 x 585 x 1450mm"],
  ["Shipping Dimensions", "1220 x 650 x 1600mm"],
  ["Net / Gross Weight", "185kg / 230kg"],
  ["Documented Noise Level", "Up to 75dB"],
  ["Operating Environment", "0-40 degrees C; humidity up to 98%"],
  ["Documented Joint Standard", "Adhesion surface at least 90%, width at least 20%, position deviation up to 2mm"]
];

const keyFeatures = [
  "Touch-screen operating interface",
  "Hinged top plates for service access",
  "Front foot-bar cycle switch",
  "Automatic strap ejector",
  "DC brushless motor",
  "Waist-high automatic strap feeding",
  "PCB microchip circuit-board control",
  "Adjustable strap tension and sealing settings"
];

const applications = [
  "Carton and corrugated-box strapping",
  "Printed products and book bundles",
  "Light, stable industrial packages",
  "Warehouse and logistics packing stations",
  "Manufacturing-line end-of-line packing",
  "Repeat PP-strapping operations with a fixed arch"
];

const orderingInfo = [
  "Minimum and maximum package dimensions",
  "Package weight, material and surface condition",
  "Required straps per package and strap position",
  "Target packages or straps per minute",
  "PP strap width, thickness and spool specification",
  "Required tension range and joint acceptance standard",
  "Required arch opening",
  "Operator-fed, foot-switch or continuous workflow",
  "Conveyor and photo-eye integration requirement",
  "Site voltage, frequency, phase and connection",
  "Interface and manual language",
  "Destination-market safety and conformity documents",
  "Spare-parts and consumables requirement",
  "Destination, unloading method and packing requirement"
];

const sourcingSupport = [
  "Translate the package and production requirement into a supplier RFQ",
  "Compare machine configuration, arch size, strap and electrical scope",
  "Coordinate technical questions with China-side suppliers",
  "Collect production and machine-test photos against an agreed checklist",
  "Follow sample-package testing when the buyer supplies representative packs",
  "Check manuals, accessories and spare parts against the packing list",
  "Coordinate warehouse intake and wooden-case export packing",
  "Consolidate the machine with other packaging equipment or spare parts where practical"
];

const faqs = [
  {
    q: "What is the standard arch size of the MS-505 automatic strapping machine?",
    a: "The supplied specification document lists a standard internal arch opening of 650mm wide by 500mm high. A customized arch may be possible, but package dimensions and the final arch must be confirmed before ordering."
  },
  {
    q: "What PP strap does the MS-505 use?",
    a: "The standard configuration in the supplied document uses 5mm or 6mm PP strap with 0.5-0.8mm thickness. Optional 8mm, 9mm, 11mm and 12mm configurations are listed, but the required width and spool must be specified for the quotation."
  },
  {
    q: "Can the machine strap 65 packages per minute?",
    a: "The document states up to 65 straps per minute, not 65 completed packages in every application. Actual output depends on package handling, straps per package, arch size, strap, tension, cooling time and operating mode."
  },
  {
    q: "Can the MS-505 be integrated with a conveyor line?",
    a: "The available document confirms manual/parallel, continuous and foot-switch operating modes. Conveyor integration, powered rollers and photo-eye initiation are not confirmed in the current file and should be specified for supplier evaluation."
  },
  {
    q: "What details are needed for a quotation?",
    a: "Send package photos, minimum and maximum dimensions, weight, strap position, target throughput, PP strap details, required arch, site power, operating workflow, destination compliance needs and quantity."
  },
  {
    q: "Can MAVORIX coordinate inspection and export packing?",
    a: "MAVORIX can coordinate an agreed supplier-side or third-party inspection scope, warehouse intake, machine and packing photos, wooden-case packing and export-shipment preparation in China."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "MS-505 High-Speed Automatic PP Strapping Machine | MAVORIX",
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
      images: [{ url: productImages[0].src, width: 1034, height: 1260, alt: productImages[0].alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: metaDescription,
      images: [productImages[0].src]
    }
  };
}

export default async function AutomaticStrappingMachinePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const inquirySubject = encodeURIComponent("MS-505 automatic strapping machine quotation");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Packaging Industry", url: `${site.url}/en/industries/packaging-industry/` },
    { name: "Packaging Equipment", url: `${site.url}/en/industries/packaging-industry/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Packaging Industry", href: "/en/industries/packaging-industry/" },
              { label: "Packaging Equipment", href: "/en/industries/packaging-industry/" },
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
              <Badge>Automatic Packaging Equipment</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Automatic arch strapping machine for PP strap around cartons, printed products and other light, stable packages.
                The supplied specification lists up to 65 straps per minute, adjustable 0-45kg tension and a 650 x 500mm standard
                arch. Final output and configuration must be checked against the buyer&apos;s package.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Package Details
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
              The MS-505 is a high-speed automatic PP strapping machine built around a fixed arch and waist-height worktable. It is
              intended for repeat strapping of cartons, bundles and other packages that fit the selected arch and can be placed
              stably on the table. A touch-screen interface, front foot bar and continuous operating mode give operators several ways
              to initiate a cycle according to the packing workflow.
            </p>
            <p>
              This machine should be selected from the package outward. Package dimensions determine the arch, while package weight,
              surface condition and transport requirement affect strap width, tension and the number of straps. The headline cycle
              rate is useful for comparison, but a realistic production target should include package presentation and operator or
              conveyor handling time.
            </p>
            <p>
              MAVORIX supports overseas buyers with China-side supplier comparison, technical clarification, inspection coordination,
              warehouse intake and export packing. MAVORIX is the sourcing and coordination partner, not the stated manufacturer of
              the MS-505.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Documented Specifications</h2>
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
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Values above are taken from the supplied MS-505 document. Final electrical configuration, arch, strap, accessories,
              compliance documents and acceptance criteria must be confirmed in the quotation and purchase order.
            </p>
          </section>

          <Section title="Key Machine Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {keyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
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
              These are typical application categories, not a universal suitability claim. Very soft, unstable, heavy, wet or
              irregular packages may need trials, pressing devices, conveyors or a different machine format.
            </p>
          </Section>

          <Section title="How to Select the Right Automatic Strapping Machine">
            <p>
              Start with the largest and smallest packages, not only the average carton. Allow clearance inside the arch and confirm
              that the package can be supported and positioned consistently. Then define the strap material, required holding force,
              strap position and acceptable joint appearance.
            </p>
            <p>
              Production rate should be expressed as packages per minute together with straps per package. A machine capable of 65
              cycles per minute cannot deliver the same number of finished packages if each carton needs two straps or if an operator
              must rotate and reposition it. For line integration, describe the upstream conveyor, package spacing, signal logic,
              roller height and downstream flow.
            </p>
            <p>
              Electrical connection, guarding, emergency-stop arrangement and destination-market conformity documents also need to
              be agreed before ordering. For Romania or another EU destination, the buyer should state the required documentation and
              site connection rather than relying on a generic 220V description.
            </p>
          </Section>

          <Section title="Information Required for a Quotation">
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
              MAVORIX helps overseas buyers source packaging machinery in China without presenting itself as the machine manufacturer.
              Related requirements can be handled through our <LinkText href="/en/industries/packaging-industry/">packaging industry sourcing</LinkText>,{" "}
              <LinkText href="/en/services/quality-inspection/">quality inspection</LinkText>,{" "}
              <LinkText href="/en/services/export-support/">export support</LinkText> and{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText> workflows.
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
        title="Need an Automatic Strapping Machine for Your Package?"
        text="Send package photos, dimensions, weight, straps per pack, throughput, PP strap, required arch, site power, destination and quantity for supplier evaluation."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), productSchema(), faqSchema(faqs)]} />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return (
    <div>
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
    model: "MS-505",
    category: "Automatic PP Strapping Machine",
    image: productImages.map((image) => `${site.url}${image.src}`),
    description: metaDescription
  };
}
