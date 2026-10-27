import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileUp, MessageCircle } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";

const productSlug = "custom-stamped-metal-parts";
const productPath = `/en/products/metal-stamping/${productSlug}/`;
const productTitle = "Custom Metal Stamping Parts & Assemblies";
const metaDescription = "Source custom metal stamping parts and assemblies from China, including formed brackets, mounting plates and levers, with finishing and inspection coordination.";
const publication = { status: "approved", publish_status: "published" };
const imageBase = "/images/products/metal-stamping/custom-stamped-metal-parts";
const inspectionPath = "/en/blog/precision-stamped-parts-factory-inspection-china/";
const youtubeVideoId = "jxCLJQvd3xI";

const gallery = [
  { src: `${imageBase}/custom-stamped-metal-part-main.webp`, alt: "Complete formed metal part with mounting holes and a slot on a worktable", label: "Stamped and formed metal part" },
  { src: `${imageBase}/custom-offset-metal-bracket.webp`, alt: "Offset metal bracket with several bends and mounting holes", label: "Offset mounting bracket" },
  { src: `${imageBase}/stamped-mounting-plate-center-boss.webp`, alt: "Metal mounting plate with perimeter holes and a central raised feature", label: "Mounting plate" },
  { src: `${imageBase}/stamped-lever-sleeve-assembly.webp`, alt: "Black finished metal lever assembled with a cylindrical sleeve", label: "Lever and sleeve assembly" }
];

const partFamilies = [
  ["Brackets and mounting parts", "Offset brackets, mounting tabs, slotted supports and formed interfaces that locate components in an assembly."],
  ["Plates, covers and formed shells", "Punched plates, protective covers and curved or bent parts with drawing-defined openings and edge conditions."],
  ["Levers and linkage parts", "Profiled arms, pivot features and small motion-transfer components with controlled holes and mating interfaces."],
  ["Metal subassemblies", "Stamped parts combined with sleeves, pins or other components using the joining method specified for the design."]
];

const processRows = [
  ["Blanking and piercing", "Part outline, holes, slots and cut-outs", "Profile, hole position, stock thickness and burr allowance"],
  ["Bending and forming", "Flanges, offsets, curved sections and formed features", "Bend angle, inside radius, formed height and final geometry"],
  ["Deburring and edge finishing", "Edge condition suitable for handling and assembly", "Burr limit, permitted edge break and protected working profiles"],
  ["Secondary operations", "Joining, machining or heat treatment where required", "Process scope, assembly dimensions and treatment acceptance criteria"],
  ["Surface finishing", "Specified appearance, corrosion protection or assembly condition", "Finish specification, masked areas, oil or cleanliness requirement"]
];

const rfqItems = [
  "Current 2D drawing, revision and units; a 3D model if available",
  "Material grade, sheet thickness and any permitted substitution",
  "Critical dimensions, datums, tolerances and mating-part information",
  "Burr limits, edge breaks and cosmetic or working surfaces",
  "Heat treatment, coating, joining and final assembly requirements",
  "Sample quantity, batch quantity and expected repeat demand",
  "Inspection scope, reports, material documents and batch identification",
  "Packing, labeling, destination and requested delivery schedule"
];

const faqs = [
  { q: "Can MAVORIX source metal stamping parts to a drawing?", a: "Yes. MAVORIX coordinates China-side supplier review, drawing questions, quotations, samples and agreed inspection requirements for custom stamped metal parts and small assemblies." },
  { q: "What types of stamped parts can be evaluated?", a: "Typical inquiries include brackets, mounting plates, covers, formed parts, levers, linkage components and metal subassemblies. The drawing, material, quantity and required secondary operations determine the suitable supplier and process route." },
  { q: "Can stamped steel parts include heat treatment and finishing?", a: "Yes, these operations can be included in the supplier review and quotation. The RFQ should define the steel grade, treatment result, final dimensions, finish and acceptance criteria. Carbonitriding, blackening and oiling are separate requirements, not one interchangeable process." },
  { q: "Is there a standard tolerance or minimum order quantity?", a: "Tolerances and practical order quantities depend on geometry, stock material, tooling, forming stages and inspection scope. Send the drawing and expected demand so the supplier can quote the actual finished-part requirement." },
  { q: "How are precision stamped components inspected?", a: "The inspection plan should match the drawing. It may include dimensional measurement, hole and profile checks, formed height, burrs, surface review and assembly fit. Indicator, gauge, fixture or CMM checks should be selected for the feature being accepted." },
  { q: "Does MAVORIX manufacture these components?", a: "MAVORIX is the sourcing and procurement coordination partner. We help buyers compare suitable suppliers, clarify requirements and follow approved samples, agreed checks and shipment preparation." }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};
  const index = publication.publish_status === "published";
  return {
    title: "Custom Metal Stamping Parts from China | MAVORIX",
    description: metaDescription,
    keywords: ["custom metal stamping parts", "precision stamped components", "stamped metal assemblies", "custom stamped metal brackets supplier China", "stamped steel parts with heat treatment", "OEM stamped components to drawing"],
    alternates: { canonical: `${site.url}${productPath}` },
    robots: { index, follow: index, googleBot: { index, follow: index } },
    openGraph: { title: productTitle, description: metaDescription, url: `${site.url}${productPath}`, siteName: site.name, locale: "en", type: "website", images: [{ url: gallery[0].src, width: 1440, height: 1160, alt: gallery[0].alt }] },
    twitter: { card: "summary_large_image", title: productTitle, description: metaDescription, images: [gallery[0].src] }
  };
}

export default async function StampedMetalPartsPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();
  const quoteHref = `mailto:${site.email}?subject=${encodeURIComponent("Custom stamped metal parts RFQ")}`;
  const breadcrumbs = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Metal Parts", url: `${site.url}/en/industries/metal-parts/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8"><Container><Breadcrumbs items={[{ label: "Home", href: "/en/" }, { label: "Metal Parts", href: "/en/industries/metal-parts/" }, { label: "Custom Metal Stamping", href: productPath }]} /></Container></section>
      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={gallery} />
          <div className="space-y-7">
            <div>
              <Badge>Metal Stamping Sourcing</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">Custom stamped metal parts turn sheet material into brackets, plates, covers and small mechanism components. MAVORIX helps overseas buyers source these parts to a drawing, including the forming, secondary treatment and assembly requirements that make the finished component fit.</p>
            </div>
            <dl className="space-y-3 border-y border-slate-200 py-5 text-sm">
              <Spec label="Supply Basis" value="Controlled drawing or approved sample" />
              <Spec label="Part Range" value="Stamped and formed parts, brackets and small assemblies" />
              <Spec label="Secondary Work" value="Deburring, specified finishing, treatment and joining" />
              <Spec label="MAVORIX Role" value="China-side sourcing and supplier coordination" />
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button href={quoteHref} className="gap-2"><FileUp size={17} aria-hidden="true" /> Send Your Drawing</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Discuss Your Parts</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-14">
          <Section title="Stamped Parts That Fit the Assembly">
            <p>A mounting bracket needs its holes in the right place and its flanges at the right angle. A cover needs clearance around the parts it protects. A lever needs its pivot and working profile to line up with the mechanism. These are the details that make a stamping useful, and they should guide the quotation from the start.</p>
            <p>Custom metal stamping can combine cutting and forming operations to produce repeat components from sheet stock. The tooling route depends on the part and demand: a simple operation may suit one design, while another needs several forming stages or dedicated progressive tooling. Supplier review should compare the complete route rather than just the price of the blank.</p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Parts and Assemblies We Can Help Source</h2>
            <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
              {partFamilies.map(([title, text]) => <div key={title} className="border-t border-slate-200 pt-4"><h3 className="text-xl font-black text-navy">{title}</h3><p className="mt-3 leading-8 text-slate-600">{text}</p></div>)}
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <ExampleImage file="slotted-stamped-metal-bracket" alt="Slotted metal bracket with formed mounting features" caption="Slotted supports and mounting features" />
              <ExampleImage file="curved-formed-metal-cover" alt="Small curved metal cover with a formed profile" caption="Curved covers and formed sheet components" />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-navy">From the Stamped Blank to the Finished Part</h2>
            <p className="mt-4 leading-8 text-slate-600">A finished-part quotation should say which operations are included and who follows them. The following stages can be evaluated against your drawing; not every component needs every operation.</p>
            <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200"><table className="w-full min-w-[680px] border-collapse text-left text-sm"><thead className="bg-slate-50 text-navy"><tr>{["Stage", "Purpose", "Details to agree"].map(h => <th key={h} className="px-4 py-4 font-black">{h}</th>)}</tr></thead><tbody>{processRows.map(row => <tr key={row[0]} className="border-t border-slate-200">{row.map((cell, i) => <td key={cell} className={`px-4 py-4 align-top leading-7 ${i === 0 ? "font-bold text-navy" : "text-slate-600"}`}>{cell}</td>)}</tr>)}</tbody></table></div>
          </section>

          <Section title="Materials, Heat Treatment and Surface Finish">
            <p>Common inquiry materials include cold-rolled steel, stainless steel and other drawing-specified sheet metals. Grade, thickness and supply condition should be clear before tooling and pricing are approved. If a supplier proposes an alternative, review it against the design rather than treating a similar appearance as an equivalent material.</p>
            <p>For stamped steel parts with heat treatment, state the required result as well as the process: hardness, case depth where relevant, test method and final dimensional limits. Carbonitriding, blackening and rust-preventive oil are separate stages. Their scope and acceptance requirements should appear separately in the purchase specification.</p>
            <p>Plating, passivation, painting or other finishes can be evaluated where required. Specify working surfaces, appearance limits, corrosion requirements and any oil or cleaning restrictions. The finished condition must suit the next assembly operation.</p>
          </Section>

          <Section title="Dimensional Checks and Assembly Fit">
            <p>Precision stamped components should be accepted against the features that matter in use: hole locations, thickness, formed height, bend angle, mating faces and the relationship between them. Burrs and edge breaks also need limits, especially near sliding parts or assembly interfaces.</p>
            <p>An indicator and fixture can help check surface variation and relationships between faces. The drawing determines the characteristic, datum setup and acceptance limit. MAVORIX can coordinate an agreed inspection scope and the required supplier records, including sample dimensions and functional fit checks where specified.</p>
            <figure className="mx-auto mt-6 max-w-[420px]">
              <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0`} title="Dial indicator inspection of a formed metal component" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="aspect-[9/16] w-full rounded-md border-0 bg-black" />
              <figcaption className="mt-3 text-center text-sm leading-7 text-slate-500">A formed component is repositioned in a fixture while a technician checks different faces with an indicator. <a href={`https://www.youtube.com/shorts/${youtubeVideoId}`} target="_blank" rel="noopener noreferrer" className="font-bold text-signal hover:text-orange-700">Watch on YouTube</a></figcaption>
            </figure>
            <p>Read the <Link href={inspectionPath} className="font-bold text-signal hover:text-orange-700">factory-visit inspection article</Link> for the measurement sequence and a practical stamped-part inspection checklist.</p>
          </Section>

          <Section title="Applications for Custom Stampings">
            <p>Typical requirements include internal brackets and linkages for industrial sewing equipment, mounting and cover parts for machinery, lock and hardware components, and small equipment subassemblies. Each application needs its own drawing and acceptance requirements; the part name alone does not define fit or performance.</p>
            <p>For a related treatment example, see the <Link href="/en/blog/stamped-door-lock-gears-carbonitriding-inspection/" className="font-bold text-signal hover:text-orange-700">SPCC stamped door lock gear inspection case</Link>. For machined rather than stamped geometry, review our <Link href="/en/products/precision-machining/custom-cnc-machined-parts/" className="font-bold text-signal hover:text-orange-700">custom CNC machined parts sourcing</Link>.</p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Send the Finished-Part Requirement</h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">{rfqItems.map(item => <li key={item} className="border-b border-slate-200 pb-3 text-sm leading-7 text-slate-600">{item}</li>)}</ul>
          </section>

          <Section title="MAVORIX Sourcing Support">
            <p>MAVORIX organizes China-side supplier review, quotation comparison, drawing questions, sample follow-up and agreed checks. For a metal subassembly, we can help clarify which party handles the stamping, bought-in components, joining and final inspection so that the quotation covers the complete item.</p>
            <p>Tooling ownership, maintenance, sample approval, treatment responsibility and batch identification should be agreed before repeat production. Our <Link href="/en/services/oem-manufacturing-support/" className="font-bold text-signal hover:text-orange-700">OEM manufacturing support</Link> and <Link href="/en/services/quality-inspection/" className="font-bold text-signal hover:text-orange-700">quality inspection coordination</Link> can be scoped around the order.</p>
          </Section>
        </article>
      </Container>
      <FAQSection faqs={faqs} title="Custom Metal Stamping FAQ" />
      <CTASection title="Need a Stamped Part or Metal Subassembly?" text="Send the drawing, material and thickness, quantities, treatment requirements and destination. We can help organize a finished-part quotation and supplier review in China." />
      <JsonLd data={[breadcrumbSchema(breadcrumbs), serviceSchema(productTitle, metaDescription, `${site.url}${productPath}`), faqSchema(faqs)]} />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function Spec({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 font-semibold text-navy">{value}</dd></div>;
}

function ExampleImage({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return <figure><IndustrialImage src={`${imageBase}/${file}.webp`} alt={alt} className="aspect-[4/3]" fit="contain" sizes="(min-width: 768px) 50vw, 100vw" /><figcaption className="mt-3 text-sm leading-7 text-slate-500">{caption}</figcaption></figure>;
}
