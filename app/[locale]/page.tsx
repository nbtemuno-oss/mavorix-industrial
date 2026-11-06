import type { Metadata } from "next";
import { ProcurementPaths } from "@/components/sections/ProcurementPaths";
import Link from "next/link";
import { ArrowRight, Boxes, ClipboardList, Cog, FileText, Gauge, Network, ScanLine, ShieldCheck, Truck, Wrench } from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { pageImages } from "@/data/page-images";
import { precisionShaftImage, precisionShaftPath } from "@/data/precision-shafts";
import { inquiryRequestHref } from "@/data/procurement-paths";
import { publishedProducts } from "@/data/products";
import { t } from "@/data/translations";
import { getAllBlogPosts } from "@/lib/mdx";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = t(locale);
  return seo({
    title: copy.home.metaTitle,
    description: copy.home.metaDescription,
    path: `/${locale}/`,
    image: pageImages.home
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = t(locale);
  const allPosts = getAllBlogPosts();
  const sourcingExamples = pickBlogPosts(allPosts, [
    "stamped-door-lock-gears-carbonitriding-inspection",
    "bosch-rexroth-hydraulic-valves-sourcing-consolidation-case",
    "automatic-strapping-machine-sourcing-romania-case"
  ]);
  const buyerGuides = pickBlogPosts(allPosts, [
    "cnc-machined-parts-for-robotics-automation-buying-guide",
    "industrial-mro-suppliers-in-china-what-buyers-should-check",
    "mro-sourcing-from-china-buyer-checklist"
  ]);
  const recentProducts = pickProducts([
    "custom-cnc-machined-parts",
    "rexroth-a10vso-28-dfr1-variable-axial-piston-pump-r910916805",
    "rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump",
    "daikin-v38a3rx-95-piston-pump",
    "hytek-hg0-08-01a-vpc-hydraulic-pump",
    "ms-505-high-speed-automatic-pp-strapping-machine"
  ]);
  return (
    <>
      <Hero locale={locale} />
      {locale === "en" ? (
        <>
          <CapabilityStrip />
          <RequirementPaths />
          <Section title="Sourcing and Inspection Case Studies" text="See how we checked stamped steel parts, matched hydraulic valve model numbers, and prepared a strapping machine for export.">
            <div className="grid gap-5 md:grid-cols-3">
              {sourcingExamples.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </Section>
          <CustomManufacturingSection />
          <GrowthIndustriesSection />
          <DeliveryProcessSection />
          <QualityFrameworkSection />
          <SourcingMroSection />
          <Container><ProcurementPaths /></Container>
          <SourcingOpportunitySection products={recentProducts} guides={buyerGuides} />
          <Section title="Markets We Serve" text="We help buyers source from China and coordinate inspection, export packing, and shipments to their destination.">
            <Link href="/en/countries/" className="inline-flex items-center gap-2 text-sm font-black text-navy hover:text-signal">
              View sourcing support by country <ArrowRight size={16} />
            </Link>
          </Section>
          <FAQSection faqs={copy.home.faqs} title={copy.home.faqTitle} />
          <DualPathCta />
        </>
      ) : (
        <>
          <section className="bg-white py-8">
            <Container className="grid gap-3 md:grid-cols-5">
              {copy.home.strip.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-black text-navy">{item}</div>)}
            </Container>
          </section>
          <Section title={copy.home.sourceTitle} text={copy.home.sourceText}><FeatureGrid items={copy.home.sourceItems} /></Section>
          <Section title={copy.home.moreTitle} text={copy.home.moreText} dark />
          <Section title={copy.home.servicesTitle} text={copy.home.servicesText}><FeatureGrid items={copy.industrial.features.slice(0, 3)} /></Section>
          <Section title={copy.home.industriesTitle} text={copy.home.industriesText}><FeatureGrid items={copy.home.sourceItems.slice(0, 3)} /></Section>
          <Section title={copy.home.processTitle} text={copy.home.processText}><ProcessSteps locale={locale} /></Section>
          <CTASection locale={locale} />
        </>
      )}
      {locale === "en" ? null : <FAQSection faqs={copy.home.faqs} title={copy.home.faqTitle} />}
      <JsonLd data={faqSchema(copy.home.faqs)} />
    </>
  );
}

function CapabilityStrip() {
  const items = ["CNC Machined Components", "Precision Shafts", "Pneumatic & Vacuum Manifolds", "Industrial Sourcing & MRO"];
  return (
    <section className="border-b border-slate-200 bg-white py-7">
      <Container className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
        {items.map((item) => <div key={item} className="px-4 py-3 text-center text-sm font-black text-navy">{item}</div>)}
      </Container>
    </section>
  );
}

function RequirementPaths() {
  const paths = [
    { icon: FileText, title: "Send a Drawing", text: "For custom CNC parts, shafts, manifolds, and mechanical components.", href: inquiryRequestHref("drawing"), action: "Start drawing RFQ" },
    { icon: ClipboardList, title: "Send a BOM or Sourcing List", text: "For mixed MRO items, spare parts, and multi-supplier orders.", href: inquiryRequestHref("sourcing"), action: "Submit sourcing list" },
    { icon: ScanLine, title: "Send a Part Number or Nameplate", text: "For replacement components when a drawing is not available.", href: inquiryRequestHref("replacement"), action: "Request a model check" }
  ];
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-3xl">
          <div className="text-sm font-black uppercase text-signal">Start with what you have</div>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">Three practical ways to start an industrial RFQ</h2>
          <p className="mt-4 leading-8 text-slate-600">You do not need to fit every requirement into the same purchasing process. We first identify the right technical and supplier path.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {paths.map(({ icon: Icon, title, text, href, action }) => (
            <Link key={title} href={href} className="group rounded-lg border border-slate-200 bg-white p-7 transition hover:border-orange-300 hover:shadow-industrial">
              <Icon className="text-signal" size={28} />
              <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{text}</p>
              <span className="mt-4 inline-flex items-center text-sm font-black text-navy group-hover:text-signal">{action}<ArrowRight className="ml-2" size={16} /></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CustomManufacturingSection() {
  const capabilities = [
    { id: "cnc-components", title: "CNC Machined Components", text: "Drawing-based milled and turned parts for industrial assemblies, fixtures, automation equipment, and replacement applications." },
    { id: "pneumatic-manifolds", title: "Pneumatic & Vacuum Manifolds", text: "Machined distribution blocks and manifolds for pneumatic, vacuum, fluid-routing, and automation systems." },
    { id: "custom-mechanical-parts", title: "Custom Mechanical Parts", text: "Low-to-medium-volume mechanical components requiring supplier matching, technical clarification, and inspection follow-up." }
  ];
  return (
    <section id="custom-manufacturing" className="scroll-mt-24 bg-white py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="text-sm font-black uppercase text-signal">Custom manufacturing</div>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-5xl">Precision components coordinated through a selected China manufacturing network</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">Send us your drawing, quantity, and target delivery date. We review the machining requirements, find a suitable manufacturing partner, and coordinate samples, inspection, and export packing.</p>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div id={item.id} key={item.id} className="scroll-mt-28 border-t-2 border-slate-200 pt-4">
                <h3 className="font-black text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/en/products/precision-machining/custom-cnc-machined-parts/" className="mt-8 inline-flex items-center text-sm font-black text-signal hover:text-navy">View current CNC component reference<ArrowRight className="ml-2" size={16} /></Link>
        </div>
        <Link href="/en/products/precision-machining/custom-cnc-machined-parts/" className="group block">
          <IndustrialImage src="/images/products/precision-machining/custom-cnc-machined-parts/custom-cnc-machined-complex-parts-main.webp" alt="Custom CNC machined metal components coordinated by MAVORIX" className="aspect-[4/3] border border-slate-200" sizes="(min-width: 1024px) 42vw, 100vw" fit="contain" />
          <div className="mt-4 flex items-center justify-between border-b border-slate-200 pb-4 text-sm font-bold text-slate-600">
            <span>Machined part examples</span><span className="text-navy group-hover:text-signal">Custom CNC machined parts</span>
          </div>
        </Link>
      </Container>
      <Container>
        <div id="precision-shafts" className="mt-12 grid scroll-mt-28 items-center gap-6 border-t border-slate-200 pt-8 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-10">
          <Link href={precisionShaftPath} className="mx-auto block w-full max-w-[200px] sm:mx-0">
            <IndustrialImage {...precisionShaftImage} className="aspect-[9/16]" sizes="200px" fit="contain" />
          </Link>
          <div>
            <h3 className="text-2xl font-black text-navy">Precision Shafts</h3>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              We source stepped, keyed and splined shafts made to drawing for machinery and automation. Send us the bearing fits, material and quantities, and we can review machining, grinding and inspection with suitable suppliers.
            </p>
            <Link href={precisionShaftPath} className="mt-4 inline-flex items-center gap-2 text-sm font-black text-signal hover:text-navy">
              Explore custom precision shafts <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GrowthIndustriesSection() {
  const industries = [
    { id: "robotics-automation", title: "Robotics & Automation", text: "Machined brackets, housings, shafts, tooling parts, manifolds, and replacement components for automated equipment." },
    { id: "machine-builders", title: "Machine Builders", text: "Custom and catalog components for machinery projects, production lines, retrofits, and after-sales spare parts." },
    { id: "amr-agv", title: "AMR & AGV", text: "Mechanical parts and sourcing support for mobile platforms, material handling systems, and warehouse automation." },
    { id: "unmanned-systems", title: "Unmanned Systems", text: "Selected precision mechanical and fluid-control components for commercial unmanned and low-altitude applications." }
  ];
  return (
    <section id="growth-industries" className="scroll-mt-24 bg-slate-50 py-20">
      <Container>
        <div className="max-w-4xl">
          <div className="text-sm font-black uppercase text-signal">Industries in focus</div>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">Component supply for automation-led industrial growth</h2>
          <p className="mt-4 leading-8 text-slate-600">We source parts made to drawing for equipment builders and automation teams, from sensor brackets and housings to shafts and manifolds.</p>
        </div>
        <div className="mt-10 grid border-y border-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <div id={item.id} key={item.id} className={`scroll-mt-28 py-7 md:px-7 ${index > 0 ? "lg:border-l lg:border-slate-200" : ""}`}>
              <div className="text-xs font-black text-signal">0{index + 1}</div>
              <h3 className="mt-3 text-xl font-black text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        <Link href="/en/industries/" className="mt-7 inline-flex items-center text-sm font-black text-navy hover:text-signal">Explore all industries<ArrowRight className="ml-2" size={16} /></Link>
      </Container>
    </section>
  );
}

function DeliveryProcessSection() {
  const steps = ["Requirement review", "Technical clarification", "Partner matching", "Production follow-up", "Inspection coordination", "Packing & export"];
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="text-sm font-black uppercase text-signal">Drawing to delivery</div>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">One coordinated path from requirement to shipment</h2>
          <p className="mt-4 leading-8 text-slate-600">We agree on the material, critical dimensions, and inspection requirements with you before production. Before dispatch, we follow up on the agreed checks and export packing.</p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => <div key={step} className="min-h-36 bg-slate-50 p-5"><div className="text-xs font-black text-signal">STEP {index + 1}</div><div className="mt-4 font-black leading-6 text-navy">{step}</div></div>)}
        </div>
      </Container>
    </section>
  );
}

function QualityFrameworkSection() {
  const checks = [
    { icon: Gauge, title: "Drawing & tolerance review", text: "Clarify critical dimensions, materials, finishes, and inspection expectations before production." },
    { icon: Network, title: "Supplier capability matching", text: "We match suppliers to the machining process, required tolerances, and order quantity." },
    { icon: ShieldCheck, title: "Inspection coordination", text: "Coordinate agreed dimensional, visual, quantity, and packing checks based on buyer requirements." },
    { icon: Truck, title: "Export readiness", text: "Follow packing, documentation, supplier timing, and consolidation details before shipment." }
  ];
  return (
    <section className="bg-navy py-20 text-white">
      <Container>
        <div className="max-w-4xl"><div className="text-sm font-black uppercase text-orange-300">Inspection and packing</div><h2 className="mt-3 text-3xl font-black md:text-4xl">What we check before shipment</h2></div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {checks.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-white/20 pt-6"><Icon className="text-mint" size={26} /><h3 className="mt-4 font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></div>)}
        </div>
        <Link href="/en/services/quality-inspection/" className="mt-9 inline-flex items-center text-sm font-black text-orange-300 hover:text-white">View quality inspection support<ArrowRight className="ml-2" size={16} /></Link>
      </Container>
    </section>
  );
}

function SourcingMroSection() {
  const links = [
    { icon: Cog, title: "Industrial Sourcing", text: "Supplier search, comparison, technical coordination, and order follow-up.", href: "/en/industrial-sourcing/" },
    { icon: Wrench, title: "MRO & Spare Parts", text: "Mixed maintenance items, model-based replacements, and urgent factory needs.", href: "/en/services/mro-sourcing-from-china/" },
    { icon: ShieldCheck, title: "Supplier Verification", text: "Review identity, capability signals, quotations, and practical execution risk.", href: "/en/services/supplier-verification/" },
    { icon: Boxes, title: "Consolidation", text: "Coordinate multiple suppliers, packing notes, warehouse timing, and shipment preparation.", href: "/en/services/container-consolidation/" }
  ];
  return (
    <section className="bg-white py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div><div className="text-sm font-black uppercase text-signal">Sourcing & MRO</div><h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">Not every industrial requirement starts with a drawing</h2><p className="mt-4 leading-8 text-slate-600">Send your parts list or nameplate photos. We help identify replacements, compare quotes, and combine approved orders from multiple suppliers.</p><Link href="/en/services/" className="mt-6 inline-flex items-center text-sm font-black text-navy hover:text-signal">View all sourcing services<ArrowRight className="ml-2" size={16} /></Link></div>
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {links.map(({ icon: Icon, title, text, href }) => <Link key={title} href={href} className="group border-t-2 border-slate-200 pt-5"><Icon className="text-signal" size={24} /><h3 className="mt-4 text-lg font-black text-navy group-hover:text-signal">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></Link>)}
        </div>
      </Container>
    </section>
  );
}

function DualPathCta() {
  return (
    <section className="bg-slate-100 py-20">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg bg-navy p-8 text-white md:p-10"><FileText className="text-mint" size={30} /><h2 className="mt-5 text-2xl font-black">Have a drawing or custom component?</h2><p className="mt-3 leading-7 text-slate-300">Send the drawing, quantity, material, tolerance, finish, and destination for an initial RFQ review.</p><Link href={inquiryRequestHref("drawing")} className="mt-7 inline-flex min-h-11 items-center rounded-md bg-signal px-5 text-sm font-black text-white hover:bg-orange-600">Send a Drawing<ArrowRight className="ml-2" size={16} /></Link></div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 md:p-10"><ClipboardList className="text-signal" size={30} /><h2 className="mt-5 text-2xl font-black text-navy">Have an MRO or supplier list?</h2><p className="mt-3 leading-7 text-slate-600">Send the BOM, photos, model numbers, supplier links, quantities, and required delivery timing.</p><Link href={inquiryRequestHref("sourcing")} className="mt-7 inline-flex min-h-11 items-center rounded-md bg-navy px-5 text-sm font-black text-white hover:bg-slate-800">Submit a Sourcing List<ArrowRight className="ml-2" size={16} /></Link></div>
      </Container>
    </section>
  );
}

function pickBlogPosts(posts: ReturnType<typeof getAllBlogPosts>, slugs: string[]) {
  return slugs.map((slug) => posts.find((post) => post.slug === slug)).filter(Boolean) as ReturnType<typeof getAllBlogPosts>;
}

function pickProducts(slugs: string[]) {
  return slugs.map((slug) => publishedProducts.find((product) => product.slug === slug)).filter(Boolean) as typeof publishedProducts;
}

function SourcingOpportunitySection({
  products,
  guides
}: {
  products: typeof publishedProducts;
  guides: ReturnType<typeof getAllBlogPosts>;
}) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-black text-navy md:text-4xl">Product References and Buying Guides</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Check model information and prepare the drawings, specifications, or parts list you need for a quotation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/en/industries/mro-supplies/" className="text-sm font-black text-signal hover:text-navy">Industrial MRO Supplies</Link>
            <Link href="/en/services/mro-sourcing-from-china/" className="text-sm font-black text-signal hover:text-navy">MRO Sourcing from China</Link>
          </div>
        </div>
        <div className="mt-10 space-y-12">
          <OpportunityGroup title="Parts and Equipment" description="Check model numbers, specifications, and what to send for a quotation.">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => <ProductLinkCard key={product.slug} product={product} />)}
            </div>
          </OpportunityGroup>
          <OpportunityGroup title="Buyer Guides" description="Check a supplier, prepare an MRO list, or specify CNC machined parts before asking for quotes.">
            <div className="grid gap-5 md:grid-cols-3">
              {guides.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </OpportunityGroup>
        </div>
      </Container>
    </section>
  );
}

function OpportunityGroup({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-black text-navy">{title}</h3>
      <p className="mt-2 max-w-3xl leading-7 text-slate-600">{description}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function ProductLinkCard({ product }: { product: (typeof publishedProducts)[number] }) {
  return (
    <Link href={product.path} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <IndustrialImage src={product.image} alt={product.imageAlt} className="h-44 rounded-none" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" fit="contain" />
      <div className="p-6">
        <div className="text-xs font-black uppercase text-signal">Product Sourcing Reference</div>
        <h3 className="mt-3 text-xl font-black text-navy">{product.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
        <div className="mt-5 text-sm font-black text-navy group-hover:text-signal">View product page</div>
      </div>
    </Link>
  );
}

function Section({ title, text, children, dark = false }: { title: string; text: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <section className={dark ? "bg-navy py-16 text-white" : "bg-white py-16"}>
      <Container>
        <h2 className={`text-3xl font-black md:text-4xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
        <p className={`mt-4 max-w-4xl text-base leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
        {children ? <div className="mt-9">{children}</div> : null}
      </Container>
    </section>
  );
}
