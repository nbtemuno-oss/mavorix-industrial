import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/cards/BlogCard";
import { CountryCard } from "@/components/cards/CountryCard";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { pageImages } from "@/data/page-images";
import { publishedProducts } from "@/data/products";
import { services } from "@/data/services";
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
  const posts = allPosts.slice(0, 3);
  const sourcingExamples = pickBlogPosts(allPosts, [
    "bosch-rexroth-hydraulic-valves-sourcing-consolidation-case",
    "rexroth-dbds6p1x-315-pressure-relief-valve-sourcing",
    "automatic-strapping-machine-sourcing-romania-case"
  ]);
  const buyerGuides = pickBlogPosts(allPosts, [
    "industrial-mro-suppliers-in-china-what-buyers-should-check",
    "mro-sourcing-from-china-buyer-checklist",
    "factory-spare-parts-sourcing-from-china"
  ]);
  const recentProducts = pickProducts([
    "rexroth-a10vso-28-dfr1-variable-axial-piston-pump-r910916805",
    "rexroth-azpw-21-022rqrxxmb-s0593-external-gear-pump",
    "daikin-v38a3rx-95-piston-pump",
    "hytek-hg0-08-01a-vpc-hydraulic-pump",
    "ms-505-high-speed-automatic-pp-strapping-machine",
    "rexroth-4we6d6x-ofeg24n9k4-directional-control-valve"
  ]);
  return (
    <>
      <Hero locale={locale} />
      <section className="bg-white py-8">
        <Container className="grid gap-3 md:grid-cols-5">
          {copy.home.strip.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-black text-navy">{item}</div>
          ))}
        </Container>
      </section>
      <Section title={copy.home.sourceTitle} text={copy.home.sourceText}>
        <FeatureGrid items={copy.home.sourceItems} />
      </Section>
      <Section title={copy.home.moreTitle} text={copy.home.moreText} dark />
      <Section title={copy.home.servicesTitle} text={copy.home.servicesText}>
        {locale === "en" ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} locale={locale} />)}</div> : <FeatureGrid items={copy.industrial.features.slice(0, 3)} />}
      </Section>
      <Section title={copy.home.industriesTitle} text={copy.home.industriesText}>
        {locale === "en" ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} locale={locale} />)}</div> : <FeatureGrid items={copy.home.sourceItems.slice(0, 3)} />}
      </Section>
      {locale === "en" ? (
        <SourcingOpportunitySection
          examples={sourcingExamples}
          products={recentProducts}
          guides={buyerGuides}
        />
      ) : null}
      {locale === "en" ? <Section title="Countries We Serve" text="Country pages target long-tail sourcing searches while avoiding false claims about local offices or guaranteed customs outcomes.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{countries.map((country) => <CountryCard key={country.slug} country={country} locale={locale} />)}</div>
      </Section> : null}
      <Section title={copy.home.processTitle} text={copy.home.processText}>
        <ProcessSteps locale={locale} />
      </Section>
      {locale === "en" ? <Section title="Featured Blog Guides" text="Practical guides for overseas industrial buyers sourcing from China.">
        <div className="grid gap-5 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}</div>
      </Section> : null}
      <FAQSection faqs={copy.home.faqs} title={copy.home.faqTitle} />
      <CTASection locale={locale} />
      <JsonLd data={faqSchema(copy.home.faqs)} />
    </>
  );
}

function pickBlogPosts(posts: ReturnType<typeof getAllBlogPosts>, slugs: string[]) {
  return slugs.map((slug) => posts.find((post) => post.slug === slug)).filter(Boolean) as ReturnType<typeof getAllBlogPosts>;
}

function pickProducts(slugs: string[]) {
  return slugs.map((slug) => publishedProducts.find((product) => product.slug === slug)).filter(Boolean) as typeof publishedProducts;
}

function SourcingOpportunitySection({
  examples,
  products,
  guides
}: {
  examples: ReturnType<typeof getAllBlogPosts>;
  products: typeof publishedProducts;
  guides: ReturnType<typeof getAllBlogPosts>;
}) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-black text-navy md:text-4xl">Recent Product Sourcing Examples and MRO Buyer Guides</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Real product pages and buyer guides help overseas factories check models, supplier risk, packing details, and mixed MRO sourcing paths before sending an inquiry.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/en/industries/mro-supplies/" className="text-sm font-black text-signal hover:text-navy">Industrial MRO Supplies</Link>
            <Link href="/en/services/mro-sourcing-from-china/" className="text-sm font-black text-signal hover:text-navy">MRO Sourcing from China</Link>
          </div>
        </div>
        <div className="mt-10 space-y-12">
          <OpportunityGroup title="Recent Sourcing Examples" description="Case-style pages showing model checks, supplier coordination, packing review, and shipment preparation.">
            <div className="grid gap-5 md:grid-cols-3">
              {examples.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </OpportunityGroup>
          <OpportunityGroup title="Recently Published Product Pages" description="Published product references that strengthen hydraulic, spare parts, and packaging equipment long-tail searches.">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => <ProductLinkCard key={product.slug} product={product} />)}
            </div>
          </OpportunityGroup>
          <OpportunityGroup title="Popular Buyer Guides" description="High-intent guides for MRO sourcing, supplier search, and factory spare parts inquiries.">
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
