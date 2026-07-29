import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, Send } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";

const productSlug = "custom-cutting-tools";
const productTitle = "Custom Cutting Tools & Non-Standard CNC Tools";
const productPath = `/en/products/cutting-tools/${productSlug}/`;
const metaDescription =
  "Source custom cutting tools and non-standard CNC tools made to drawings, samples or machining requirements. MAVORIX supports supplier sourcing, specification review, sample follow-up and batch supply in China.";

const productImages = [
  {
    src: "/images/products/cutting-tools/custom-cutting-tools/custom-cutting-tools-main.webp",
    alt: "Assorted custom cutting tools with varied stepped and profiled geometries in a tool holder",
    label: "Assorted tool geometries"
  },
  {
    src: "/images/products/cutting-tools/custom-cutting-tools/custom-cutting-tools-gallery-02.webp",
    alt: "Long custom CNC tools with different cutting profiles arranged for inspection",
    label: "Long-profile tools"
  },
  {
    src: "/images/products/cutting-tools/custom-cutting-tools/custom-cutting-tools-gallery-03.webp",
    alt: "Batch of bronze-colored special cutting tools with varied end geometries",
    label: "Varied end geometries"
  },
  {
    src: "/images/products/cutting-tools/custom-cutting-tools/custom-cutting-tools-gallery-04.webp",
    alt: "Rows of dark-finish profile cutting tools in clear inspection stands",
    label: "Profile tool batch"
  },
  {
    src: "/images/products/cutting-tools/custom-cutting-tools/custom-cutting-tools-gallery-05.webp",
    alt: "Five long-shank custom form tools with rounded cutting heads",
    label: "Rounded form tools"
  }
];

const toolTypes = [
  "Custom End Mills",
  "Custom Reamers",
  "Form Cutting Tools",
  "Step Cutting Tools",
  "Profile Cutters",
  "Combination Cutting Tools",
  "Special Drills",
  "Application-Specific CNC Tools"
];

const quotationGroups = [
  {
    title: "Tool Information",
    items: [
      "Tool drawing",
      "Existing sample or photos",
      "Cutting diameter",
      "Shank diameter",
      "Overall length",
      "Cutting length",
      "Number of flutes",
      "Cutting direction",
      "Tool geometry",
      "Tolerance"
    ]
  },
  {
    title: "Machining Information",
    items: [
      "Workpiece material",
      "Workpiece drawing",
      "Machining operation",
      "Machine or spindle type",
      "Required surface finish",
      "Tool-life requirement",
      "Coolant condition",
      "Required quantity",
      "Existing tool problem"
    ]
  }
];

const applications = [
  "Machining a profile that is not covered by a catalog tool",
  "Combining two or more cutting steps into one operation",
  "Reaching restricted features or difficult tool-access areas",
  "Producing grooves, radii, chamfers or stepped features",
  "Matching a defined workpiece contour",
  "Improving process consistency for a repeat production part",
  "Replacing an unavailable or obsolete special tool",
  "Addressing an application-specific finish or tool-life target"
];

const sourcingSupport = [
  "Review the buyer's drawing, sample photos and machining brief",
  "Identify suitable China-side custom-tool suppliers for evaluation",
  "Coordinate technical questions between buyer and supplier",
  "Compare quotation scope, material proposals and coating proposals",
  "Follow sample production and supplier-provided inspection records",
  "Coordinate sample feedback and drawing revisions",
  "Follow approved batch supply and pre-shipment checks",
  "Consolidate tooling with other industrial purchasing requirements when practical"
];

const faqs = [
  {
    q: "Can you make a custom cutting tool from my drawing?",
    a: "MAVORIX can coordinate China-side supplier evaluation for a cutting tool based on your drawing. The supplier will review geometry, dimensions, tolerances, material, coating, quantity and machining conditions before confirming feasibility and quotation. MAVORIX acts as the sourcing and coordination partner, not as the tool manufacturer."
  },
  {
    q: "What if I do not have a tool drawing?",
    a: "You can send a physical sample, clear photos, a workpiece drawing and a description of the machining operation. A supplier may be able to prepare or refine a tool proposal from that information, although additional measurements or technical discussion may be required."
  },
  {
    q: "What information is needed for a custom cutting tool quotation?",
    a: "Useful information includes cutting and shank diameters, overall and cutting lengths, flute count, direction, geometry, tolerances, workpiece material, machining operation, machine or spindle type, surface-finish target, coolant condition, quantity and the problem with the existing process."
  },
  {
    q: "Can custom tools be supplied in small quantities?",
    a: "Small-quantity supply may be possible, but it depends on tool geometry, material, coating process, inspection requirements and supplier capability. The minimum practical quantity and unit cost must be confirmed for each quotation."
  },
  {
    q: "Can a supplier reproduce an existing cutting tool?",
    a: "A supplier may evaluate reproduction from an existing sample, but a sample alone may not reveal every critical tolerance, material specification, coating or performance requirement. Providing application details and any available drawings improves the evaluation."
  },
  {
    q: "How do I select the tool material and coating?",
    a: "Selection should be based on workpiece material, cutting speed, feed, tool geometry, machine rigidity, coolant, finish target and tool-life requirement. Suppliers can propose options, but available materials and coatings must be confirmed for each application and quotation."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "Custom Cutting Tools & Non-Standard CNC Tools | MAVORIX",
    description: metaDescription,
    alternates: {
      canonical: `${site.url}${productPath}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: productTitle,
      description: metaDescription,
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [
        {
          url: productImages[0].src,
          width: 1400,
          height: 1050,
          alt: productImages[0].alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: metaDescription,
      images: [productImages[0].src]
    }
  };
}

export default async function CustomCuttingToolsPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const drawingSubject = encodeURIComponent("Custom cutting tool drawing review");
  const quoteSubject = encodeURIComponent("Custom cutting tool quotation request");
  const drawingMailto = `mailto:${site.email}?subject=${drawingSubject}`;
  const quoteMailto = `mailto:${site.email}?subject=${quoteSubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: "Custom Cutting Tools", url: `${site.url}${productPath}` },
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
              { label: "Custom Cutting Tools", href: productPath },
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
              <Badge>Custom Tool Sourcing Capability</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Custom cutting tools sourced and manufactured to drawings, samples or specific machining requirements. MAVORIX
                coordinates supplier selection, specification review, sample follow-up and batch supply for overseas manufacturers.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
              <SpecTerm label="Supply Basis" value="Drawing, sample, workpiece drawing or machining requirement" />
              <SpecTerm label="Tool Definition" value="Application-specific and quotation-specific" />
              <SpecTerm label="MAVORIX Role" value="China-side sourcing and supplier coordination" />
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={drawingMailto} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Your Tool Drawing
              </Button>
              <Button href={quoteMailto} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-14">
          <Section title="Product Overview">
            <p>
              Standard catalog tools do not meet every machining requirement. Complex profiles, multiple machining steps,
              restricted spaces, special workpiece materials or tight dimensional requirements may call for a purpose-designed
              cutting tool rather than a standard item selected only by diameter and length.
            </p>
            <p>
              Custom cutting tools are cutting tools whose geometry, dimensions, material and other technical details are defined
              around a particular part or machining operation. MAVORIX supports overseas manufacturers in sourcing custom cutting
              tools and non-standard CNC tooling from suitable suppliers in China. Buyers can provide an existing tool drawing,
              physical sample, workpiece drawing or machining requirement for supplier evaluation and quotation.
            </p>
            <p>
              MAVORIX is a China-side industrial sourcing and supplier coordination partner. Our role can include supplier search,
              specification communication, quotation comparison, sample follow-up and coordination of approved batch supply.
            </p>
            <p className="rounded-md border-l-4 border-signal bg-orange-50 p-5 font-semibold text-slate-700">
              The tools shown on this page represent examples of custom cutting-tool configurations and should not be assumed to
              share the same material, coating or geometry.
            </p>
          </Section>

          <Section title="Custom Tool Types We Can Source">
            <p>
              A custom-tool request can be evaluated across the following general capability categories. Listing a category here
              describes the sourcing scope; it does not claim that every photographed tool belongs to every category.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {toolTypes.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p>Actual tool type and geometry are determined by the customer&apos;s drawing and machining requirements.</p>
          </Section>

          <Section title="Made to Drawing, Sample or Machining Requirement">
            <div className="grid gap-5 lg:grid-cols-3">
              <InfoPanel title="Made to Drawing">
                Send the latest controlled tool drawing with dimensions, tolerances, geometry, material or coating requirements,
                revision level and required quantity. The supplier can review manufacturability and identify any points that need
                clarification before quotation.
              </InfoPanel>
              <InfoPanel title="Made from Existing Sample">
                Provide a physical sample or clear photos from several angles, together with any known dimensions and application
                details. Sample-based reproduction may require measurement, destructive analysis or buyer confirmation of details
                that cannot be determined from appearance.
              </InfoPanel>
              <InfoPanel title="Designed Around the Machining Requirement">
                Send the workpiece drawing, material, machine information, operation sequence, target finish, tolerance and current
                process problem. A supplier can then evaluate a suitable tool concept and request the missing cutting parameters.
              </InfoPanel>
            </div>
          </Section>

          <Section title="Information Required for a Custom Cutting Tool Quotation">
            <p>
              A useful RFQ separates the tool definition from the machining conditions. Complete information helps suppliers compare
              the same scope and reduces avoidable drawing revisions after a sample has been started.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              {quotationGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-black text-navy">{group.title}</h3>
                  <ul className="mt-4 grid gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm font-semibold text-slate-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p>
              If a complete tool drawing is not available, buyers can send the workpiece drawing, existing tool photos and a
              description of the machining operation. The supplier may then request measurements, cutting parameters or a physical
              sample before confirming a proposal.
            </p>
          </Section>

          <Section title="Tool Material and Coating Options">
            <p>
              Tool material and coating cannot be selected reliably from a photograph. They should be evaluated together with the
              workpiece, operation, machine stability, cutting speed, feed, coolant condition, surface-finish target and required
              tool life.
            </p>
            <p>
              Depending on the application and supplier capability, custom tools may be evaluated in solid carbide, HSS or other
              suitable tooling materials. Possible coating options may include:
            </p>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {["Uncoated", "PVD coating", "DLC", "Diamond coating", "Application-specific coatings"].map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-navy">Available materials and coating options must be confirmed for each quotation.</p>
          </Section>

          <Section title="Typical Applications">
            <p>
              Custom tools are generally considered when the cutting task is defined by a particular workpiece or process rather
              than by a standard catalog description. Typical evaluation scenarios include:
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
            <p>These application examples are general. Final suitability depends on the complete machining data and supplier review.</p>
          </Section>

          <Section title="When Does a Custom Cutting Tool Make Sense?">
            <p>
              A custom cutting tool can make sense when a standard tool cannot generate the required contour, when several tool
              changes create excessive cycle time, or when tool access forces a special neck, reach or cutting profile. It may also
              be considered for stable repeat production where one purpose-designed tool could reduce setup variation.
            </p>
            <p>
              The decision should compare more than the quoted tool price. Buyers may need to consider programming and setup time,
              cycle time, tool-change frequency, scrap risk, inspection needs, tool life and the cost of maintaining spare tools. A
              custom design is not automatically the best option for every low-volume job.
            </p>
            <p>
              Small batches may be feasible, but quantity, geometry, material, coating and inspection requirements affect setup cost
              and supplier choice. These factors should be reviewed during quotation rather than assumed from a previous order.
            </p>
          </Section>

          <Section title="How MAVORIX Supports Custom Tool Sourcing">
            <p>
              Custom tooling RFQs often require several rounds of technical communication. MAVORIX helps overseas buyers keep that
              China-side process organized while the supplier remains responsible for manufacturing feasibility and technical
              proposals.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {sourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Related requirements can be coordinated through our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery sourcing</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows. Supplier proposals still require buyer approval against
              the applicable drawing and machining conditions.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />

      <section className="bg-white py-16">
        <Container>
          <div className="rounded-lg bg-navy p-8 text-white shadow-industrial md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-black">Need a Custom Cutting Tool for a Specific Machining Operation?</h2>
                <p className="mt-3 max-w-3xl text-slate-300">
                  Send your tool drawing, existing sample, workpiece drawing or machining requirement. MAVORIX can help coordinate
                  supplier evaluation and quotation in China.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={drawingMailto} className="gap-2">
                  <Send size={17} aria-hidden="true" /> Send Your Drawing
                </Button>
                <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                  <MessageCircle size={17} aria-hidden="true" /> Discuss Your Tool Requirement
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

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

function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{children}</p>
    </div>
  );
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-bold text-signal hover:text-orange-700">
      {children}
    </a>
  );
}
