import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileUp, MessageCircle } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { machiningExamples } from "@/data/machining-examples";
import { precisionShaftPath } from "@/data/precision-shafts";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";

const productSlug = "custom-cnc-machined-parts";
const productTitle = "Custom CNC Machined Parts Sourcing in China";
const productPath = `/en/products/precision-machining/${productSlug}/`;
const metaDescription =
  "Custom CNC machined parts sourcing in China for overseas OEM buyers, covering milling, turning, prototypes, batch production, drawing review and inspection coordination.";

const productMainImage = {
  src: "/images/products/precision-machining/custom-cnc-machined-parts/cnc-milled-and-turned-components.webp",
  alt: "Machined shafts, flanges, sleeves and blocks laid out together",
  label: "Milled and turned components",
  width: 1323,
  height: 1600
};

const productImages = [
  productMainImage,
  machiningExamples.milledFlats,
  {
    src: "/images/products/precision-machining/custom-cnc-machined-parts/cnc-turned-threaded-parts-batch.webp",
    alt: "Batch of custom CNC turned threaded fittings in divided trays",
    label: "Turned threaded parts"
  },
  {
    src: "/images/products/precision-machining/custom-cnc-machined-parts/cnc-turned-threaded-fitting-sample.webp",
    alt: "Custom CNC turned threaded fitting held for sample review",
    label: "Production sample"
  }
];

const partFamilies = [
  "Machined housings and enclosures",
  "Mounting brackets and structural interfaces",
  "Shafts, pins and precision axles",
  "Bushings, sleeves and spacers",
  "Threaded adapters and machined fittings",
  "Manifolds and multi-port components",
  "Mounting plates and equipment bases",
  "Drawing-based replacement and OEM parts"
];

const materials = [
  "Aluminum alloys",
  "Stainless steel",
  "Carbon and alloy steel",
  "Brass and copper alloys",
  "Engineering plastics",
  "Other drawing-specified machinable materials"
];

const applications = [
  {
    title: "Robotics and Automation",
    text: "Brackets, shafts, bearing seats, end-effector interfaces, sensor mounts, housings and compact mechanism parts."
  },
  {
    title: "UAV and Low-Altitude Equipment",
    text: "Lightweight structural interfaces, mounts, housings, motor-related supports and prototype mechanical parts."
  },
  {
    title: "EV and New-Energy Equipment",
    text: "Equipment brackets, thermal-management interfaces, test-fixture parts, connector bodies and production-line components."
  },
  {
    title: "Industrial Equipment",
    text: "Machine components, manifolds, fittings, shafts, sleeves, jigs, fixtures and hard-to-source replacement parts."
  }
];

const rfqItems = [
  "Controlled 2D drawing and, where available, STEP or other 3D file",
  "Drawing revision, units and any reference assembly information",
  "Material grade and governing material standard",
  "Critical dimensions, tolerances and GD&T callouts",
  "Thread standard, class, depth and gauging requirement",
  "Surface roughness and areas where tool marks are restricted",
  "Heat treatment, coating, anodizing, plating or passivation requirement",
  "Prototype quantity, batch quantity and expected annual demand",
  "Inspection report, material certificate and traceability expectations",
  "Packing, labeling, destination and required delivery date"
];

const faqs = [
  {
    q: "Can MAVORIX source custom CNC machined parts from a drawing?",
    a: "Yes. MAVORIX can organize the RFQ, identify suitable China-side machining suppliers, coordinate drawing questions, compare quotation scope and follow samples or approved production. MAVORIX is the sourcing and coordination partner, not the factory shown in every image."
  },
  {
    q: "What files are best for a CNC machining quotation?",
    a: "A controlled 2D drawing is important for tolerances, threads, surface finish, material and inspection notes. A STEP or other suitable 3D model helps suppliers understand geometry. Send both when possible, and identify the current revision."
  },
  {
    q: "Can you support prototypes and repeat batch production?",
    a: "Supplier options can be evaluated for prototypes, low-volume runs and repeat production. The practical route depends on geometry, material, tolerance, inspection scope, quantity and lead time."
  },
  {
    q: "Which materials can be evaluated for CNC machined parts?",
    a: "Common RFQs include aluminum alloys, stainless steel, carbon and alloy steel, brass, copper alloys and engineering plastics. The exact grade and sourcing standard must be specified in the buyer's files and confirmed by the selected supplier."
  },
  {
    q: "Can you arrange inspection reports for precision machined parts?",
    a: "MAVORIX can coordinate an agreed inspection scope, such as sample dimensions, thread gauging, surface review, material-document checks and supplier-provided dimensional reports. CMM or third-party inspection should be agreed before quotation when required."
  },
  {
    q: "Can you quote a shaft and its mating parts together?",
    a: "Yes. Send the assembly drawing, part drawings and quantities for each item. Mark the features that need to fit together, such as a shaft journal and its bearing seat, so suppliers can price and check them as a set."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "Custom CNC Machined Parts Sourcing China | MAVORIX",
    description: metaDescription,
    alternates: { canonical: `${site.url}${productPath}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: productTitle,
      description: metaDescription,
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [{ url: productMainImage.src, width: productMainImage.width, height: productMainImage.height, alt: productMainImage.alt }]
    },
    twitter: { card: "summary_large_image", title: productTitle, description: metaDescription, images: [productMainImage.src] }
  };
}

export default async function CustomCncMachinedPartsPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const quoteMailto = `mailto:${site.email}?subject=${encodeURIComponent("Custom CNC machined parts quotation")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Metal Parts", url: `${site.url}/en/industries/metal-parts/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/en/" }, { label: "Metal Parts", href: "/en/industries/metal-parts/" }, { label: "Precision CNC Machining", href: productPath }]} />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={productImages} />
          <div className="space-y-7">
            <div>
              <Badge>Precision Machining Capability</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Drawing-based sourcing for custom CNC milled and turned parts, from prototypes and small batches to repeat production. MAVORIX coordinates supplier matching, technical clarification, sample follow-up, inspection requirements and export supply for overseas buyers.
              </p>
            </div>
            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
              <SpecTerm label="Supply Basis" value="2D drawing, 3D model or approved sample" />
              <SpecTerm label="Processes" value="CNC milling, CNC turning and suitable secondary operations" />
              <SpecTerm label="Order Stage" value="Prototype, low volume and repeat batch production" />
              <SpecTerm label="MAVORIX Role" value="China-side sourcing and supplier coordination" />
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button href={quoteMailto} className="gap-2"><FileUp size={17} aria-hidden="true" /> Send Drawings for Review</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Discuss Your Parts</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-14">
          <Section title="CNC Machined Parts Built Around the Drawing">
            <p>
              A useful CNC machining inquiry starts with the part definition, not a generic promise of high precision. The supplier needs to understand which dimensions locate the part in an assembly, which faces seal or carry a bearing, which threads connect to another component and which surfaces are mainly cosmetic. Those details determine the machining route, fixturing, inspection method and real quotation.
            </p>
            <p>
              MAVORIX helps overseas equipment manufacturers, engineering teams and industrial buyers organize this work with suitable Chinese suppliers. We can coordinate drawing review, supplier comparison, technical questions, samples and production follow-up while the selected factory remains responsible for manufacturing and the buyer remains responsible for final design approval.
            </p>
          </Section>

          <Section title="Parts That Can Be Evaluated">
            <ul className="grid gap-3 md:grid-cols-2">
              {partFamilies.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
            <p>For stepped, keyed or splined shafts, see our <LinkText href={precisionShaftPath}>custom precision shaft sourcing</LinkText>.</p>
          </Section>

          <Section title="CNC Milling and Complex Metal Components">
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
              <div className="space-y-5">
                <p>
                  Parts with pockets, intersecting bores, ports, mounting faces and features on several sides may require more than one setup or a multi-axis machining route. The important RFQ questions are access, datum strategy, wall thickness, burr control and which relationships must remain accurate after the part is repositioned.
                </p>
                <p>A part with both a cylindrical seat and a mounting face needs those features related to the same drawing references. Include any hole positions, flat orientation and thread details that affect assembly, so the supplier can quote the complete part.</p>
              </div>
              <PartFigure image={machiningExamples.threadedBodies} caption="Machined bodies with bores, external threads and mounting faces." />
            </div>
            <YouTubeVideo videoId="Tlklm5IDT5Y" title="Custom CNC machined metal components" description="Finished parts with machined bores, ports and complex geometry. Exact material, dimensions and tolerances are controlled by the customer drawing." />
            <p>
              For a prototype, the priority may be confirming fit and design intent. For repeat production, stable fixtures, drawing revision control, inspection frequency and treatment of nonconforming parts become just as important as the first sample.
            </p>
          </Section>

          <Section title="CNC Turning and Threaded Components">
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
              <div className="space-y-5">
                <p>
                  CNC turning is suited to rotational features such as outside diameters, bores, shoulders, grooves and threads. Parts with a hex body, cross hole or milled flat may combine turning with a secondary milling operation or live-tool machining. Thread designation alone is not enough: the drawing should identify the standard, pitch, class or tolerance, thread length, relief and any sealing geometry.
                </p>
                <p>For a threaded pin or shouldered shaft, specify the shoulder diameter and length separately from the thread. If the shoulder locates another part, its fit and the thread runout clearance need to suit that assembly.</p>
              </div>
              <PartFigure image={machiningExamples.threadedPins} caption="Shouldered pins with threaded ends and grooves." />
            </div>
            <YouTubeVideo videoId="ybAWxFEPMeA" title="Custom CNC turned threaded fittings" description="A repeat batch of threaded parts together with sample review and machining footage. Thread standard, material and acceptance criteria must be confirmed before production." />
          </Section>

          <Section title="Custom Machined Bushings and Sleeves">
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
              <div className="space-y-5">
                <p>Bushings and sleeves can locate a shaft, provide a replaceable contact surface or set the spacing between other parts. The bore, outside diameter and end faces each need to suit their mating components. For a flanged sleeve, include the flange thickness, locating face and any corner clearance.</p>
                <p>Send the material grade, drawing revision and quantities, together with the intended shaft and housing fits. We can ask suppliers to quote the required machining, finish and inspection in the condition in which the part will be delivered.</p>
                <p>Our <LinkText href="/en/blog/custom-machined-bushings-sleeves-buying-guide/">bushing and sleeve buying guide</LinkText> explains what to specify before requesting a quotation.</p>
              </div>
              <PartFigure image={machiningExamples.flangedSleeves} caption="Stepped sleeves with internal bores and locating flanges." />
            </div>
          </Section>

          <Section title="Materials and Finishes">
            <p>
              Supplier selection depends partly on the material and its documentation. Aluminum, stainless steel, carbon steel, alloy steel, brass, copper alloys and engineering plastics can all require different tooling, chip control, heat treatment, finishing and inspection experience.
            </p>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {materials.map((item) => <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>)}
            </ul>
            <p>
              Common secondary requirements may include anodizing, passivation, plating, black oxide, heat treatment, grinding, polishing or laser marking. These are quotation-specific options. Finish type, color, thickness, masked areas and appearance limits should be written into the RFQ.
            </p>
          </Section>

          <Section title="Applications for CNC Machined Parts">
            <div className="grid gap-5 md:grid-cols-2">
              {applications.map((item) => <InfoPanel key={item.title} title={item.title}>{item.text}</InfoPanel>)}
            </div>
            <p>Actual sector eligibility, safety requirements, documentation and supplier qualification must be reviewed for each project.</p>
          </Section>

          <Section title="What to Send for a Reliable Quotation">
            <ul className="grid gap-3 md:grid-cols-2">
              {rfqItems.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
            <p>
              A 3D file describes shape well, but it rarely contains every acceptance requirement. The 2D drawing should control tolerances, threads, surface finish, material, treatment and inspection notes. When the two files disagree, the buyer should identify which revision governs before suppliers quote.
            </p>
          </Section>

          <Section title="Inspection and Repeat Production Control">
            <p>
              Inspection should follow function and risk. A first article may need a dimensional report for critical features, thread gauges, material documentation and a visual review of burrs and finish. CMM measurement, surface-roughness records, hardness testing or third-party inspection can be coordinated when the drawing or quality plan requires them.
            </p>
            <p>
              Repeat orders also need traceability to the approved revision and sample. MAVORIX can help keep supplier quotations, drawing questions, inspection records, packing labels and shipment communication tied to the same part number and revision.
            </p>
            <p>
              Read the related guides on <LinkText href="/en/blog/custom-cnc-machined-parts-china-drawing-tolerance-supplier-checklist/">sourcing complex CNC machined parts</LinkText> and <LinkText href="/en/blog/custom-cnc-turned-parts-threaded-fittings-buying-guide/">buying CNC turned threaded parts</LinkText>.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <section className="bg-white py-16">
        <Container>
          <div className="rounded-lg bg-navy p-8 text-white shadow-industrial md:p-12">
            <h2 className="text-3xl font-black">Have a CNC Part Ready for Supplier Review?</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">Send the current drawing revision, material, quantity, critical tolerances, finish, inspection scope and destination. MAVORIX can help organize a comparable China-side sourcing quotation.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Button href={quoteMailto}>Send Your Drawing</Button><Button href={site.whatsappUrl} variant="secondary">Discuss the Requirement</Button></div>
          </div>
        </Container>
      </section>
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), serviceSchema(productTitle, metaDescription, `${site.url}${productPath}`), faqSchema(faqs)]} />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 font-bold text-navy">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-lg border border-slate-200 bg-white p-6"><h3 className="text-xl font-black text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{children}</p></div>;
}

function PartFigure({ image, caption }: { image: { src: string; alt: string }; caption: string }) {
  return (
    <figure className="mx-auto w-full max-w-[360px]">
      <IndustrialImage {...image} className="aspect-[3/4]" sizes="(min-width: 768px) 300px, 100vw" fit="contain" />
      <figcaption className="mt-3 text-sm leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function YouTubeVideo({ videoId, title, description }: { videoId: string; title: string; description: string }) {
  return (
    <figure className="mx-auto max-w-[520px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-3">
      <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="aspect-[9/16] max-h-[720px] w-full rounded-md border-0 bg-black" />
      <figcaption className="p-4 text-center text-sm leading-6 text-slate-600">{description}</figcaption>
    </figure>
  );
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="font-bold text-signal hover:underline">{children}</Link>;
}
