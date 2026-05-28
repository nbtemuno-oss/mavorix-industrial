import Link from "next/link";
import type { BlogPost } from "@/lib/mdx";

export function BlogCard({ post, locale = "en" }: { post: BlogPost; locale?: string }) {
  return (
    <Link href={`/${locale}/blog/${post.slug}/`} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <h3 className="text-xl font-black text-navy">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
    </Link>
  );
}
