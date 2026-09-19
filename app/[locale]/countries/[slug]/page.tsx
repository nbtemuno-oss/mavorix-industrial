import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return site.locales.flatMap((locale) => countries.map((country) => ({ locale, slug: country.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) return {};
  const customMeta = countryMetadata[slug];
  return seo({
    title: customMeta?.title ?? `China Industrial Sourcing for ${country.title} Buyers`,
    description: customMeta?.description ?? `MAVORIX INDUSTRIAL supports buyers from ${country.title} with China sourcing coordination, supplier verification, quality control, and export support for industrial products.`,
    path: `/${locale}/countries/${slug}/`,
    canonicalPath: `/en/countries/${slug}/`,
    index: locale === "en"
  });
}

export default async function CountryDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) notFound();
  const faqs = country.slug === "algeria"
    ? algeriaFaqs
    : country.slug === "romania"
      ? romaniaFaqs
      : country.slug === "argentina"
        ? argentinaFaqs
        : buildCountryFaqs(country.title);
  return (
    <>
      <PageHero badge="Country" title={`China Industrial Sourcing for ${country.title} Buyers`} description={`We support buyers from ${country.title} with China sourcing coordination, supplier communication, quality control, and export support.`} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Countries", href: `/${locale}/countries/` }, { label: country.title, href: `/${locale}/countries/${country.slug}/` }]} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_320px]">
        <article className="space-y-10">
          {locale !== "en" ? <EnglishVersionNotice locale={locale} /> : null}
          <Block title={`China Industrial Sourcing Introduction for ${country.title}`} text={`Industrial buyers in ${country.title} often need reliable China sourcing support for machinery, spare parts, OEM products, and MRO supplies. MAVORIX INDUSTRIAL helps coordinate supplier search, technical communication, quality checks, and export-side execution from China.`} />
          <ListBlock title="Common Sourcing Needs from China" items={country.needs} />
          <ListBlock title="Product Categories We Can Support" items={["China industrial sourcing projects", "MRO sourcing and factory supplies", "OEM industrial parts", "Industrial spare parts", "Agricultural equipment parts", "Packaging machinery parts"]} />
          <ListBlock title="Common Risks When Sourcing from China" items={["Unverified supplier identity", "Unclear product specifications", "Quality inconsistency", "Weak communication after payment", "Packing and shipment coordination problems"]} />
          <Block title={`How MAVORIX INDUSTRIAL Helps Buyers from ${country.title}`} text="We review requirements, screen suppliers, compare quotations, clarify technical details, coordinate samples or trial orders, arrange quality checks, and follow up export communication from China." />
          {locale === "en" && country.slug === "algeria" ? <AlgeriaSourcingExtra /> : null}
          {locale === "en" && country.slug === "romania" ? <RomaniaSourcingExtra /> : null}
          {locale === "en" && country.slug === "argentina" ? <ArgentinaSourcingExtra /> : null}
          <Block title="Supplier Verification, Quality Control, and Export Coordination" text="Our support helps buyers reduce procurement uncertainty without making unrealistic promises about customs, local regulations, guaranteed delivery, or lowest price." />
          <Block title="Documents and Communication Support" text="We help coordinate supplier-side documents, packing information, product photos, specifications, and shipment communication. Buyers should confirm import requirements with their local customs or logistics partners." />
        </article>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-black text-navy">Related Pages</h2>
          <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
            {industries.slice(0, 4).map((item) => <Link key={item.slug} href={`/${locale}/industries/${item.slug}/`} className="block hover:text-signal">{item.title}</Link>)}
            {services.slice(0, 4).map((item) => <Link key={item.slug} href={`/${locale}/services/${item.slug}/`} className="block hover:text-signal">{item.title}</Link>)}
            <Link href={`/${locale}/contact/`} className="block hover:text-signal">Send Inquiry</Link>
          </div>
        </aside>
      </Container>
      <FAQSection faqs={faqs} />
      <CTASection />
      <JsonLd data={[faqSchema(faqs), serviceSchema(`China Industrial Sourcing for ${country.title}`, `China sourcing support for buyers from ${country.title}.`, `${site.url}/${locale}/countries/${country.slug}/`)]} />
    </>
  );
}

const countryMetadata: Record<string, { title: string; description: string }> = {
  "algeria": {
    title: "China Sourcing for Algeria | Machinery, MRO & Parts",
    description: "China-side sourcing support for Algerian buyers purchasing machinery, MRO supplies, spare parts, packaging equipment, agricultural parts, and factory components."
  },
  "romania": {
    title: "China Industrial Sourcing for Romania | Machinery & Parts",
    description: "China-side sourcing support for Romanian buyers purchasing industrial machinery, packaging equipment, MRO supplies, OEM parts, and factory spare parts."
  },
  "argentina": {
    title: "China Industrial Sourcing for Argentina | Bearings & Parts",
    description: "China-side sourcing support for Argentine buyers purchasing industrial bearings, machinery parts, factory spare parts, MRO supplies, and replacement components."
  }
};

function EnglishVersionNotice({ locale }: { locale: string }) {
  return <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900">English version: this detailed country page has not been fully translated into {locale.toUpperCase()} yet.</div>;
}

function Block({ title, text }: { title: string; text: string }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><p className="mt-4 leading-8 text-slate-600">{text}</p></section>;
}
function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><ul className="mt-4 grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}</ul></section>;
}
function RelatedLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy ring-1 ring-slate-200 transition hover:bg-slate-50">{link.label}</Link>)}
      </div>
    </section>
  );
}

function AlgeriaSourcingExtra() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">China Sourcing Support for Algerian Industrial Buyers</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            Algerian industrial buyers often source from China for machinery, plastic industry equipment, factory spare parts, MRO supplies, packaging equipment, agricultural equipment parts, electrical and mechanical parts, metal components, and general factory maintenance items. These purchases can involve several suppliers, mixed technical specifications, different packing requirements, and careful export-side coordination.
          </p>
          <p>
            MAVORIX INDUSTRIAL supports buyers from Algeria with China-side sourcing coordination. We help clarify requirements, search and compare suppliers, review quotation details, check supplier communication quality, coordinate product photos or samples, support quality inspection arrangements, and follow supplier-side export communication. We do not claim a local Algeria office, do not provide customs guarantees, and do not promise the lowest price. Our focus is practical sourcing risk reduction from China.
          </p>
          <p>
            This support is useful for factories, importers, distributors, maintenance teams, and project buyers who need a more organized sourcing process than simply collecting supplier names online. When an inquiry includes clear product information, MAVORIX can help create a more realistic path for supplier comparison, inspection planning, packing review, and shipment consolidation.
          </p>
        </div>
      </section>
      <ListBlock title="Industrial Categories for Algeria-China Sourcing" items={[
        "Plastic industry equipment, injection molding related parts, auxiliary equipment, molds, and factory supplies",
        "Factory spare parts, MRO supplies, bearings, belts, filters, tools, fasteners, consumables, and maintenance items",
        "Packaging equipment, conveyor parts, filling parts, sealing equipment, labeling parts, and packaging supplies",
        "Agricultural equipment parts, tractor parts, tiller parts, harvester parts, irrigation items, and farm implement parts",
        "Electrical and mechanical parts including motors, sensors, switches, pumps, valves, reducers, pneumatic parts, and hydraulic parts",
        "OEM industrial parts, metal parts, machined components, and custom replacement parts when drawings or samples are available"
      ]} />
      <ListBlock title="What Algerian Buyers Should Prepare Before Inquiry" items={[
        "Product list with names, quantities, target use, and whether the items are one-time or repeat purchases",
        "Photos, drawings, samples, part numbers, nameplates, dimensions, voltage, material, and technical standards where available",
        "Supplier links, existing quotations, target budget, or preferred brands if the buyer has already searched online",
        "Destination city or port, expected shipment method, packing requirements, and whether consolidation is needed",
        "Required documents or inspection expectations, while confirming local import rules with a customs or logistics partner in Algeria",
        "Priority level for urgent spare parts, planned maintenance items, or long-term procurement support"
      ]} />
      <RelatedLinks title="Related Algeria Sourcing Pages" links={[
        { href: "/en/services/china-industrial-sourcing/", label: "China Industrial Sourcing" },
        { href: "/en/services/mro-sourcing-from-china/", label: "MRO Sourcing from China" },
        { href: "/en/industries/plastic-industry/", label: "Plastic Industry" },
        { href: "/en/industries/agricultural-equipment/", label: "Agricultural Equipment" },
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/contact/", label: "Send Algeria Inquiry" }
      ]} />
    </>
  );
}

function RomaniaSourcingExtra() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">Industrial Sourcing Experience for Romania</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            Romanian factories, importers, and machinery buyers may need China-side support for production equipment, packaging machinery, replacement parts, OEM components, and mixed MRO orders. The useful starting point is a clear technical requirement rather than a general request for the lowest price.
          </p>
          <p>
            MAVORIX has documented two Romania-bound machinery projects: an automatic PP strapping machine and a ZS-60 tube tapering machine. These cases show the practical work behind industrial sourcing, including specification review, supplier communication, workshop or warehouse checks, export packing, and shipment preparation.
          </p>
          <p>
            We provide China-side sourcing and coordination. We do not claim a Romanian office and do not replace the buyer's engineering approval, importer responsibilities, or local customs advice.
          </p>
        </div>
      </section>
      <ListBlock title="What Romanian Buyers Should Send" items={[
        "Machine or part description, required output, application, quantity, and target delivery schedule",
        "Drawings, samples, model numbers, nameplates, electrical supply, dimensions, materials, and acceptance criteria",
        "Current supplier links or quotations when comparison and supplier verification are required",
        "Inspection scope, test-run requirements, accessories, spare-parts list, manuals, and packing expectations",
        "Destination, preferred shipment method, and whether several supplier orders should be consolidated",
        "Any EU-market documentation or compliance questions for supplier confirmation and buyer-side review"
      ]} />
      <RelatedLinks title="Romania Sourcing Cases and Services" links={[
        { href: "/en/blog/automatic-strapping-machine-sourcing-romania-case/", label: "Automatic Strapping Machine Case" },
        { href: "/en/blog/tube-tapering-machine-sourcing-romania/", label: "Tube Tapering Machine Case" },
        { href: "/en/products/packaging-equipment/ms-505-high-speed-automatic-pp-strapping-machine/", label: "MS-505 Strapping Machine" },
        { href: "/en/products/metalworking-equipment/zs-60-tube-tapering-reducing-machine/", label: "ZS-60 Tube Tapering Machine" },
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/contact/", label: "Send Romania Inquiry" }
      ]} />
    </>
  );
}

function ArgentinaSourcingExtra() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">Industrial Bearings and Spare Parts Sourcing for Argentina</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            Argentine factories, distributors, and maintenance teams may source industrial bearings, hydraulic components, machinery parts, factory spare parts, and mixed MRO items from China. Exact model codes, suffixes, dimensions, application details, and packing requirements matter more than a generic product name.
          </p>
          <p>
            MAVORIX has documented an Argentina-bound HRB 23220CA/W33 spherical roller bearing order. The case records model-marking checks, visible-condition review, protective packing, and the information buyers should prepare when comparing an exact bearing or an approved alternative.
          </p>
          <p>
            MAVORIX is a China-side sourcing and supplier coordination partner. We do not claim an Argentina office, authorized-distributor status, guaranteed customs clearance, or universal compatibility for replacement parts.
          </p>
        </div>
      </section>
      <ListBlock title="What Argentine Buyers Should Prepare" items={[
        "Complete bearing or spare-part model including prefixes, suffixes, clearance, cage, seal, precision, and lubrication details where relevant",
        "Old-part and package-label photos, machine application, installed position, dimensions, quantity, and acceptable brand options",
        "Whether the request requires an original brand, exact model, approved equivalent, aftermarket part, or drawing-based replacement",
        "Inspection points such as model markings, dimensions, visible condition, packaging, quantity, and supplier documents",
        "Destination, urgency, shipment preference, and whether bearings should be consolidated with other factory spare parts",
        "Supplier links or quotations already received when identity, product evidence, or quotation scope needs review"
      ]} />
      <RelatedLinks title="Argentina Sourcing Case and Services" links={[
        { href: "/en/blog/hrb-23220ca-w33-bearing-sourcing-argentina/", label: "HRB Bearing Sourcing Case" },
        { href: "/en/blog/how-to-source-industrial-bearings-from-china/", label: "Industrial Bearing Buyer Guide" },
        { href: "/en/industries/factory-spare-parts/", label: "Factory Spare Parts" },
        { href: "/en/services/mro-sourcing-from-china/", label: "MRO Sourcing from China" },
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/contact/", label: "Send Argentina Inquiry" }
      ]} />
    </>
  );
}

const algeriaFaqs = [
  { q: "Can MAVORIX support industrial buyers from Algeria?", a: "Yes. We support Algerian buyers with China-side sourcing coordination, supplier communication, quotation comparison, quality coordination, and export-side follow-up." },
  { q: "What products can Algerian buyers source through MAVORIX?", a: "Typical categories include machinery, plastic industry equipment, MRO supplies, factory spare parts, packaging equipment, agricultural equipment parts, electrical and mechanical parts, metal parts, and OEM industrial components." },
  { q: "Do you have an office in Algeria?", a: "We do not claim a local Algeria office. MAVORIX provides China-side sourcing, supplier verification, quality coordination, and export support." },
  { q: "Can you help verify Chinese suppliers before payment?", a: "Yes. We can help review supplier identity, communication quality, quotation clarity, product evidence, and basic risk signals before buyers pay a deposit." },
  { q: "Can you guarantee customs clearance in Algeria?", a: "No. Buyers should confirm Algerian import requirements with local customs or logistics partners. We support supplier-side export communication and document coordination from China." },
  { q: "How should Algerian buyers send an inquiry?", a: "Send product details, quantities, photos, drawings, part numbers, destination, supplier links, and any quotation already received through the contact page or WhatsApp." }
];

const romaniaFaqs = [
  { q: "Can MAVORIX support industrial sourcing for buyers in Romania?", a: "Yes. MAVORIX supports Romanian factories, importers, and machinery buyers with China-side supplier sourcing, quotation comparison, inspection coordination, packing follow-up, and export communication." },
  { q: "What Romania-bound sourcing projects has MAVORIX documented?", a: "Published cases include an MS-505 automatic PP strapping machine and a ZS-60 tube tapering machine, with specification, checking, packing, and shipment-preparation records." },
  { q: "Can you source packaging and metalworking machinery for Romania?", a: "Yes. Suitable supplier options can be reviewed when the buyer provides output requirements, drawings, electrical supply, configuration, inspection scope, packing needs, and destination details." },
  { q: "Do you have an office in Romania?", a: "No local Romania office is claimed. MAVORIX provides China-side sourcing and supplier coordination." },
  { q: "Can you guarantee EU compliance or Romanian customs clearance?", a: "No. MAVORIX can coordinate supplier documents and technical questions, but the buyer and local specialists should confirm applicable EU requirements, importer responsibilities, and customs procedures." }
];

const argentinaFaqs = [
  { q: "Can MAVORIX support industrial buyers in Argentina?", a: "Yes. MAVORIX provides China-side sourcing support for industrial bearings, machinery parts, factory spare parts, hydraulic components, and mixed MRO requirements." },
  { q: "What Argentina-bound sourcing experience has MAVORIX documented?", a: "MAVORIX has published an HRB 23220CA/W33 spherical roller bearing sourcing case covering model checks, visible condition, protective packing, and shipment preparation." },
  { q: "What information is needed for an industrial bearing inquiry?", a: "Send the complete bearing designation, brand preference, quantity, old-part and package photos, machine application, dimensions where available, inspection scope, and destination." },
  { q: "Is MAVORIX an authorized bearing distributor?", a: "MAVORIX is an independent sourcing and supplier coordination partner. Authorized-distributor status is not claimed unless it is documented for a specific supply channel." },
  { q: "Do you have an office in Argentina or guarantee customs clearance?", a: "No Argentina office or customs guarantee is claimed. Buyers should confirm local import requirements with Argentine customs or logistics professionals." }
];

function buildCountryFaqs(country: string) {
  return [
    { q: `Do you support buyers from ${country}?`, a: `Yes. We support buyers from ${country} with China sourcing coordination, supplier communication, quality control, and export-side support.` },
    { q: "Do you have an office in this country?", a: "We do not claim overseas offices unless specifically stated. Our role is China-side sourcing and supplier coordination." },
    { q: "Can you verify Chinese suppliers?", a: "Yes. We help review supplier identity, communication, capability signals, and quotation clarity." },
    { q: "Can you guarantee customs clearance?", a: "No. Buyers should confirm import rules with local customs or logistics partners. We support China-side export communication." },
    { q: "How can I start an inquiry?", a: "Send product details, quantity, destination country, photos, drawings, or supplier links through the contact page or WhatsApp." }
  ];
}
