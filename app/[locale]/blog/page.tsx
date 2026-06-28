import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { pageImages } from "@/data/page-images";
import { getAllBlogPosts } from "@/lib/mdx";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "China Industrial Sourcing Blog and Procurement Guides | MAVORIX",
    description: "Practical guides for China industrial sourcing, supplier verification, machinery purchasing, spare parts, MRO sourcing, shipment consolidation, plastic factory sourcing, and procurement risk control.",
    path: `/${locale}/blog/`,
    canonicalPath: "/en/blog/",
    index: locale === "en",
    image: pageImages.blog
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const groups = blogGroups.map((group) => ({
    ...group,
    posts: group.slugs.map((slug) => posts.find((post) => post.slug === slug)).filter(Boolean) as typeof posts
  }));
  return (
    <>
      <PageHero badge="Blog" title="China Industrial Sourcing Blog and Procurement Guides" description="Practical guides for China industrial sourcing, supplier verification, machinery purchasing, spare parts, MRO, shipment consolidation, and procurement risk." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Blog", href: "/en/blog/" }]} />
      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <div className="max-w-5xl space-y-5 text-base leading-8 text-slate-600">
              <p>
                The MAVORIX INDUSTRIAL blog is written for overseas B2B buyers who need practical help sourcing industrial products from China. The guides focus on supplier verification, quotation comparison, machinery purchasing, spare parts identification, MRO sourcing, OEM manufacturing coordination, shipment consolidation, and procurement risk control.
              </p>
              <p>
                Many buyers can find supplier names through search engines, marketplaces, or social media. The harder work is deciding which supplier is suitable, what information must be checked before paying a deposit, how to compare technical offers, and how to reduce problems before shipment. These articles are designed to support that decision process with realistic, experience-based sourcing notes.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/en/services/china-industrial-sourcing/">China Industrial Sourcing</Button>
              <Button href="/en/services/supplier-verification/" variant="secondary">Supplier Verification</Button>
              <Button href="/en/contact/" variant="secondary">Contact MAVORIX</Button>
            </div>
          </div>
          <IndustrialImage src={pageImages.blog.src} alt={pageImages.blog.alt} className="aspect-video" sizes="(min-width: 1024px) 420px, 100vw" fit="contain" />
        </Container>
      </section>
      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="text-3xl font-black text-navy">Guides by Topic</h2>
          <div className="mt-8 space-y-10">
            {groups.map((group) => group.posts.length ? (
              <div key={group.title}>
                <h3 className="text-2xl font-black text-navy">{group.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-slate-600">{group.description}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.posts.map((post) => <BlogCard key={post.slug} post={post} />)}
                </div>
              </div>
            ) : null)}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-black text-navy">All Blog Posts</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-black text-navy">Need Help Checking a Supplier or Quotation?</h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">Send the supplier name, product details, quotation, photos, drawings, quantity, and destination country. MAVORIX can help review practical risk points before you move forward.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact/">Contact MAVORIX</Button>
              <Button href="/en/services/" variant="secondary">View Services</Button>
              <Link href="/en/industries/plastic-industry/" className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy ring-1 ring-slate-200 transition hover:bg-slate-50">Plastic Factory Sourcing</Link>
            </div>
          </div>
        </Container>
      </section>
      <CTASection title="Need Help Checking a Supplier or Quotation?" text="Send your supplier link, quotation, product details, drawings, photos, and destination country. We will review the practical sourcing path and next steps." />
    </>
  );
}

const blogGroups = [
  {
    title: "Sourcing Guides",
    description: "Step-by-step sourcing advice for buyers comparing Chinese suppliers, OEM options, and industrial product requirements.",
    slugs: ["how-to-source-industrial-products-from-china", "china-oem-manufacturing-guide", "china-industrial-sourcing-partner-for-overseas-factories", "compare-industrial-supplier-quotations-china"]
  },
  {
    title: "Factory Consumables and MRO",
    description: "Practical notes for maintenance teams and factory buyers sourcing consumables, spare parts, and mixed MRO items from China.",
    slugs: ["source-75x2000-industrial-belt-sander-china", "mro-sourcing-from-china-guide", "factory-consumables-and-mro-supplies-from-china", "identify-industrial-spare-parts-without-part-number"]
  },
  {
    title: "Supplier Verification",
    description: "Guides for checking supplier identity, communication, capability signals, and payment risk before committing to an order.",
    slugs: ["how-to-verify-chinese-industrial-supplier", "verify-chinese-industrial-suppliers-before-order"]
  },
  {
    title: "Risk Control",
    description: "Practical risk notes for machinery purchasing, quality control, quotation comparison, and export execution.",
    slugs: ["reduce-risks-buying-industrial-equipment-from-china"]
  },
  {
    title: "Shipment Consolidation",
    description: "Content for buyers purchasing from several suppliers and trying to reduce fragmented shipment problems.",
    slugs: ["consolidate-industrial-products-from-china"]
  },
  {
    title: "Plastic Factory Sourcing",
    description: "Helpful starting points for plastic factories buying machines, molds, auxiliaries, MRO items, and spare parts.",
    slugs: ["injection-molding-factory-procurement-checklist"]
  }
];
