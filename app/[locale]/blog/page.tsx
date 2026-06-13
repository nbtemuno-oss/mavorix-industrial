import type { Metadata } from "next";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { getAllBlogPosts } from "@/lib/mdx";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "Industrial Sourcing Blog | China Procurement Guides",
    description: "Practical China industrial sourcing guides for overseas buyers covering supplier verification, MRO sourcing, OEM manufacturing, quality control, and procurement risk reduction.",
    path: `/${locale}/blog/`,
    canonicalPath: "/en/blog/",
    index: locale === "en"
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <>
      <PageHero badge="Blog" title="Industrial Sourcing Guides" description="Practical guides for overseas industrial buyers sourcing from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Blog", href: "/en/blog/" }]} />
      <Container className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</Container>
      <CTASection />
    </>
  );
}
