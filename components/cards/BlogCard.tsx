import Link from "next/link";
import { blogImages, pageImages } from "@/data/page-images";
import type { BlogPost } from "@/lib/mdx";
import { IndustrialImage } from "@/components/ui/IndustrialImage";

export function BlogCard({ post, locale = "en" }: { post: BlogPost; locale?: string }) {
  const image = blogImages[post.slug] ?? pageImages.blog;
  const preserveFullImage = post.slug === "machinery-factory-acceptance-test-china-checklist" || post.slug === "bearing-cross-reference-guide-skf-fag-nsk-ntn";
  return (
    <Link href={`/${locale}/blog/${post.slug}/`} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <IndustrialImage src={image.src} alt={image.alt} className="h-40 rounded-none" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" fit={preserveFullImage ? "contain" : "cover"} />
      <div className="p-6">
        <h3 className="text-xl font-black text-navy">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
      </div>
    </Link>
  );
}
