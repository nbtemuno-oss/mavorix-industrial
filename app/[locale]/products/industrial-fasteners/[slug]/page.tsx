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

const productSlug = "custom-cold-headed-screws-and-fasteners";
const productTitle = "Custom Cold-Headed Screws and Fasteners";
const productPath = `/en/products/industrial-fasteners/${productSlug}/`;
const isPublished = true;
const metaDescription =
  "Source custom cold-headed screws and fasteners from China to drawings, standards or samples. MAVORIX coordinates supplier review, samples, thread rolling, inspection and export supply.";

const imageBase = "/images/products/general-products/custom-cold-headed-screws-and-fasteners";
const productImages = [
  {
    src: `${imageBase}/custom-cold-headed-screws-and-fasteners-finished-batch-main.webp`,
    alt: "Batch of cross-recessed screws after thread rolling in a fastener production workshop",
    label: "Thread-rolled screw batch"
  },
  {
    src: `${imageBase}/custom-cold-headed-screws-and-fasteners-gallery-02.webp`,
    alt: "Cross-recessed screw blanks collected after the cold-heading operation",
    label: "Cold-headed screw blanks"
  },
  {
    src: `${imageBase}/custom-cold-headed-screws-and-fasteners-gallery-03.webp`,
    alt: "Cold-heading machine forming screw blanks from coiled metal wire",
    label: "Cold-heading production"
  },
  {
    src: `${imageBase}/custom-cold-headed-screws-and-fasteners-gallery-05.webp`,
    alt: "Coiled metal wire feeding a screw cold-heading production line",
    label: "Wire feed"
  },
  {
    src: `${imageBase}/custom-cold-headed-screws-and-fasteners-gallery-06.webp`,
    alt: "Cold-headed cross-recessed screw blanks before thread rolling",
    label: "Headed blanks before threading"
  }
];

const customizationGroups = [
  ["Head styles", "Pan, truss, flat/countersunk, hex, flange, socket and drawing-specific forms"],
  ["Drive options", "Phillips, Pozidriv, slotted, hex socket, Torx and application-specific recesses"],
  ["Thread forms", "Machine screw, self-tapping, thread-forming, full or partial thread, subject to drawing review"],
  ["Materials", "Carbon steel, alloy steel, stainless steel and other workable grades, confirmed for each RFQ"],
  ["Finishes", "Plating, passivation, black oxide and other specified treatments, subject to supplier capability"],
  ["Definition", "DIN, ISO, ANSI/ASME, JIS, GB, controlled customer drawing or approved physical sample"]
];

const applications = [
  "Industrial equipment and machinery assembly",
  "Electrical enclosures and sheet-metal assemblies",
  "Furniture, fixtures and hardware",
  "Appliances and consumer-product assemblies",
  "Automotive and transport components after supplier qualification",
  "Outdoor products with a specified corrosion-resistance requirement",
  "Replacement of non-standard or discontinued screws",
  "OEM production requiring a controlled drawing and repeat batch supply"
];

const orderingInformation = [
  "Controlled drawing or applicable DIN, ISO, ANSI/ASME or JIS standard",
  "Thread diameter, pitch, length and tolerance",
  "Head style, head dimensions and drive recess",
  "Material grade and required mechanical properties",
  "Heat treatment, hardness or strength-class requirement",
  "Surface treatment, coating thickness, color and corrosion target",
  "Sample requirement, inspection plan and test documents",
  "Annual demand, order quantity, packing and destination"
];

const faqs = [
  {
    q: "Can custom screws be made from a drawing or physical sample?",
    a: "MAVORIX can coordinate supplier evaluation from a controlled drawing, recognized standard or physical sample. A sample alone may not reveal the material grade, heat treatment, tolerance or coating specification, so additional buyer confirmation may be required."
  },
  {
    q: "What is cold heading in screw manufacturing?",
    a: "Cold heading is a forming process that cuts wire and reshapes it between dies to create the screw blank and head without machining the complete part from bar stock. The forming sequence and tooling depend on the screw geometry and material."
  },
  {
    q: "What is thread rolling?",
    a: "Thread rolling forms the external thread by pressing the headed blank between profiled dies. It displaces material rather than cutting the thread away. The approved die, blank diameter, material and process settings determine the final thread."
  },
  {
    q: "Can you source both stainless steel and carbon steel screws?",
    a: "Suitable suppliers can be evaluated for stainless steel, carbon steel and alloy steel requirements. The exact grade, mechanical properties, corrosion requirement, heat treatment and surface finish must be written into the RFQ and approved before production."
  },
  {
    q: "What information is needed for a custom screw quotation?",
    a: "Send the drawing or standard, thread size and pitch, length, head and drive details, material, mechanical properties, finish, tolerance, quantity, inspection documents, packing and destination."
  },
  {
    q: "Does MAVORIX manufacture the screws shown on this page?",
    a: "No. MAVORIX is a China-side industrial sourcing and supplier coordination partner. We help clarify requirements, compare suitable suppliers, follow samples and coordinate inspection and export supply."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "Custom Cold-Headed Screws & Fasteners | MAVORIX",
    description: metaDescription,
    alternates: { canonical: `${site.url}${productPath}` },
    robots: {
      index: isPublished,
      follow: isPublished,
      googleBot: { index: isPublished, follow: isPublished }
    },
    openGraph: {
      title: productTitle,
      description: metaDescription,
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [{ url: productImages[0].src, width: 1200, height: 1000, alt: productImages[0].alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: metaDescription,
      images: [productImages[0].src]
    }
  };
}

export default async function CustomColdHeadedScrewsPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Custom screw drawing review and quotation")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Metal Parts", url: `${site.url}/en/industries/metal-parts/` },
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
              <Badge>Custom Fastener Sourcing Capability</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Drawing-based and sample-based screw sourcing for industrial buyers who need a defined head, drive, thread,
                material and finish. MAVORIX coordinates suitable suppliers in China, technical clarification, sample follow-up,
                inspection requirements and approved batch supply.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
              <SpecTerm label="Supply Basis" value="Drawing, standard, sample or application requirement" />
              <SpecTerm label="Core Processes" value="Cold heading and thread rolling" />
              <SpecTerm label="Product Definition" value="Application-specific and quotation-specific" />
              <SpecTerm label="MAVORIX Role" value="China-side sourcing and supplier coordination" />
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Your Screw Drawing
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
              Custom cold-headed screws are fasteners whose dimensions, head geometry, drive recess, thread and material are
              selected for a particular assembly rather than chosen only from a general catalog. Cold heading is well suited to
              repeat production because wire can be cut and formed into a headed blank with dedicated dies before the external
              thread is produced in a separate thread-rolling operation.
            </p>
            <p>
              The page covers both standard-style screws produced to a recognized specification and non-standard fasteners made
              to a controlled customer drawing. It does not define one fixed material, size or production capacity. Those details
              must be reviewed for each quotation together with tooling, order quantity, inspection and finishing requirements.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Custom Screw Options</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {customizationGroups.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold leading-7 text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Cold Heading and Thread Rolling">
            <p>
              The two workshop videos below record the main forming stages represented by this material. The first follows wire
              feeding and head formation. The second shows headed blanks being oriented and moved through thread rolling. They are
              process references, not proof of a particular material grade, tolerance or mechanical property.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <YouTubeProcessVideo
                title="Cold Heading"
                description="Wire is cut and plastically formed between dies to create the screw blank, head and drive recess."
                videoId="G7e-LxAIZEY"
              />
              <YouTubeProcessVideo
                title="Thread Rolling"
                description="The headed blank passes between rolling dies that form the external thread without cutting it away."
                videoId="Yfrm8ASrlM4"
              />
            </div>
          </Section>

          <Section title="Materials and Finishes">
            <p>
              Supplier evaluation can cover carbon steel, alloy steel and stainless steel fasteners, but a material cannot be
              approved by appearance. The RFQ should state the exact grade or performance requirement together with heat treatment,
              hardness, strength class, corrosion target and any required material certificate.
            </p>
            <p>
              Surface finish is also part of the controlled specification. Zinc plating, passivation, black oxide and other
              treatments differ in appearance, coating thickness, corrosion performance and dimensional effect. The supplier must
              quote the finish that matches the drawing and application rather than selecting one from a photograph.
            </p>
          </Section>

          <Section title="Typical Applications">
            <FeatureGrid items={applications} />
            <p>Final suitability depends on the approved drawing, joint design, load, environment and applicable product standard.</p>
          </Section>

          <Section title="Inspection Points for Custom Screws">
            <p>
              A practical inspection plan may include thread diameter and pitch, overall length, head diameter and height, drive
              recess, thread gauge, coating, hardness, mechanical testing, corrosion testing, quantity and packing. The required
              instruments, sampling level and acceptance criteria should be agreed before production.
            </p>
            <FeatureGrid
              muted
              items={[
                "Drawing revision and complete item description",
                "Critical dimensions and thread gauges",
                "Head geometry and drive-recess fit",
                "Material and heat-treatment documents where required",
                "Surface finish, coating thickness and corrosion testing",
                "Sampling plan, quantity count, labels and packing"
              ]}
            />
          </Section>

          <Section title="Information Required Before Ordering">
            <FeatureGrid items={orderingInformation} muted />
          </Section>

          <Section title="MAVORIX Custom Fastener Sourcing Support">
            <p>
              MAVORIX is an independent China-side sourcing and coordination partner, not the screw manufacturer. We can help
              clarify an RFQ, identify suppliers with relevant cold-heading and thread-rolling capability, compare quotation scope,
              follow samples, coordinate agreed inspection records and consolidate approved fasteners with other industrial items.
            </p>
            <p>
              Buyers can connect this requirement with our <LinkText href="/en/industries/metal-parts/">metal parts sourcing</LinkText>,
              <LinkText href="/en/services/quality-inspection/"> quality inspection</LinkText> and
              <LinkText href="/en/contact/"> contact</LinkText> pages.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need a Custom Screw Made to Drawing or Sample?"
        text="Send the drawing or standard, thread size, head and drive details, material, finish, quantity, inspection requirements and destination."
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

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 font-bold text-navy">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function FeatureGrid({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return <ul className="grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className={`${muted ? "bg-slate-50 ring-1 ring-slate-200" : "border border-slate-200 bg-white"} rounded-md p-4 text-sm font-semibold text-slate-700`}>{item}</li>)}</ul>;
}

function YouTubeProcessVideo({ title, description, videoId }: { title: string; description: string; videoId: string }) {
  return <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title={`${title} screw manufacturing process video`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="aspect-[9/16] max-h-[680px] w-full border-0 bg-black" /><figcaption className="space-y-2 p-5"><h3 className="text-xl font-black text-navy">{title}</h3><p className="text-sm leading-7 text-slate-600">{description}</p></figcaption></figure>;
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>;
}
