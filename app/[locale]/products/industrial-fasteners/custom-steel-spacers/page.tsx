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
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";

const productPath = "/en/products/industrial-fasteners/custom-steel-spacers/";
const productTitle = "Custom Steel Spacers and M5 x 90 Countersunk Screws";
const metaDescription =
  "Source custom steel spacers and countersunk screws to drawing. Review marked spacer dimensions, 10B21 material, and an M5 x 90 screw with a 55 mm rolled thread.";
const pageKeywords = [
  "custom steel spacers",
  "steel distance spacers",
  "custom steel standoffs",
  "10B21 steel spacers",
  "M5 x 90 countersunk screw",
  "M5 countersunk screw with 55 mm thread"
];
const imageBase = "/images/products/general-products/custom-steel-spacers";

const productImages = [
  {
    src: `${imageBase}/custom-steel-spacers-labeled-batch.webp`,
    alt: "Short steel spacer components grouped in clear inner bags",
    label: "Steel spacer variants"
  },
  {
    src: `${imageBase}/m5x90-countersunk-screw-batch.webp`,
    alt: "Long screw components collected in a bulk lot",
    label: "M5 x 90 countersunk screw batch"
  }
];

const summarySpecs = [
  ["Spacer Variants", "Two steel distance spacer sizes"],
  ["Spacer Material Marking", "10B21 on the supplied order labels"],
  ["Countersunk Screw", "M5 x 90 mm; 55 mm rolled thread length"],
  ["Order Basis", "Approved drawing or confirmed sample"]
];

const selectionDetails = [
  "Outside diameter, body length, bore and thread form for each spacer",
  "Thread size, pitch and engagement depth where the spacer is threaded",
  "M5 thread pitch, screw length datum and 55 mm threaded-section requirement",
  "Countersunk angle, head dimensions and drive recess for the screw",
  "Steel grade, mechanical requirement and surface finish for each item",
  "Critical tolerances, inspection method, quantity and packing specification"
];

const faqs = [
  {
    q: "What is a steel spacer used for?",
    a: "A steel spacer holds a defined distance between assembled parts. Depending on its bore, thread and profile, it can support a fastener, set clearance or position a component. The mating parts and drawing determine the correct configuration."
  },
  {
    q: "Are the two spacer variants threaded?",
    a: "The supplied labels use compact M4 callouts, but they do not fully explain the thread form or engagement depth. Confirm those details against the controlled drawing before quoting a repeat order."
  },
  {
    q: "What does M5 x 90 mean for the countersunk screw?",
    a: "It identifies an M5 nominal thread and a 90 mm screw length as specified for this item. The drawing or selected standard should define how length is measured for the countersunk head, along with pitch, drive and head angle."
  },
  {
    q: "Is 10B21 the material for the M5 screw as well?",
    a: "The 10B21 marking appears on the steel spacer order labels. The screw material was not specified in the supplied information, so it should be stated separately in the drawing or purchase specification."
  },
  {
    q: "Can MAVORIX source spacers and screws to a drawing?",
    a: "MAVORIX can coordinate China-side supplier review, quotation comparison, sample follow-up and agreed inspection requirements for custom spacers and fasteners. Final material, dimensions, process and acceptance criteria should be approved before production."
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return {
    title: "Custom Steel Spacers & M5 x 90 Screws | MAVORIX",
    description: metaDescription,
    keywords: pageKeywords,
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
      images: [{ url: productImages[0].src, width: 925, height: 800, alt: productImages[0].alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: metaDescription,
      images: [productImages[0].src]
    }
  };
}

export default async function CustomSteelSpacersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Custom steel spacer and countersunk screw RFQ")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Metal Parts", url: `${site.url}/en/industries/metal-parts/` },
    { name: "Industrial Fasteners", url: `${site.url}/en/products/industrial-fasteners/custom-cold-headed-screws-and-fasteners/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Metal Parts", href: "/en/industries/metal-parts/" },
              { label: "Industrial Fasteners", href: "/en/products/industrial-fasteners/custom-cold-headed-screws-and-fasteners/" },
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
              <Badge>Custom Steel Spacer Sourcing</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Steel spacers hold a set distance between assembled components. This product range covers two compact spacer
                variants and a related M5 x 90 mm countersunk screw with a 55 mm rolled thread section. MAVORIX helps buyers
                confirm the drawing details and coordinate suitable suppliers in China.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
              {summarySpecs.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-black uppercase text-slate-500">{label}</dt>
                  <dd className="mt-1 font-bold text-navy">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send a Drawing
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Discuss the Requirement
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-14">
          <Section title="Product Overview">
            <p>
              Custom steel spacers are made to hold a defined gap, offset or mounting distance in an assembly. Their fit depends
              on details such as outside diameter, body length, bore, thread and end geometry. Where a standard part does not
              match the assembly, a controlled drawing or approved sample gives suppliers a clear basis for quotation.
            </p>
            <p>
              A related long countersunk screw uses an M5 x 90 mm specification and a 55 mm rolled thread. Because these are
              separate part types, each needs its own drawing callouts, material requirement and inspection criteria.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Order Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <th className="w-48 bg-slate-50 px-4 py-3 font-black text-navy">Steel Spacer 1</th>
                    <td className="px-4 py-3 leading-7 text-slate-700">Order-label callout: Ø7 x 11.2 x M4 x 6; material marked 10B21*</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="bg-slate-50 px-4 py-3 font-black text-navy">Steel Spacer 2</th>
                    <td className="px-4 py-3 leading-7 text-slate-700">Order-label callout: Ø7 x 12.3 x M4 x 8; material marked 10B21*</td>
                  </tr>
                  <tr>
                    <th className="bg-slate-50 px-4 py-3 font-black text-navy">Countersunk Screw</th>
                    <td className="px-4 py-3 leading-7 text-slate-700">M5 x 90 mm; 55 mm rolled thread length; head drive, angle, pitch and material to drawing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              *The spacer callouts are transcribed from compact package labels. Confirm what each dimension denotes, including the M4 feature and engagement depth, against the approved drawing before repeat production.
            </p>
          </section>

          <Section title="Where Spacers and Countersunk Screws Are Used">
            <p>
              A spacer is useful wherever two parts need a consistent separation or mounting offset. Typical assemblies include
              equipment panels, brackets, small machinery, instrument housings and fixtures. A countersunk screw can sit flush
              when its head angle matches the prepared recess in the mating component.
            </p>
            <p>
              Selection should follow the joint design. The correct spacer length, bore or thread must match the fastener and
              surrounding components; the countersunk head must also match the recess rather than being chosen by appearance alone.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Details to Confirm Before Ordering</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {selectionDetails.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700">{item}</li>
              ))}
            </ul>
          </section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX is a China-side sourcing and supplier coordination partner. We can clarify the RFQ, compare supplier
              quotations against the same drawing revision, follow sample approval and coordinate agreed checks before shipment.
              The manufacturing route and acceptance limits depend on the part drawing and supplier review.
            </p>
            <p>
              For broader cold-headed screw requirements, see our <a className="font-bold text-signal hover:text-orange-700" href="/en/products/industrial-fasteners/custom-cold-headed-screws-and-fasteners/">custom cold-headed screws and fasteners</a> page.
            </p>
            <p>
              This product range was also included in a documented <a className="font-bold text-signal hover:text-orange-700" href="/en/blog/steel-spacers-countersunk-screws-shipment-serbia/">steel spacer and countersunk screw shipment to Serbia</a>.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} title="Steel Spacer and Countersunk Screw FAQ" />
      <CTASection
        title="Need Steel Spacers or a Long Countersunk Screw?"
        text="Send the drawing or sample, material, quantity and destination. For the M5 x 90 screw, include the thread pitch, 55 mm thread length, head angle and drive details."
      />
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema(productTitle, metaDescription, `${site.url}${productPath}`),
          faqSchema(faqs)
        ]}
      />
    </>
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
