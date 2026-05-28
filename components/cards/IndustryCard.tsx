import Link from "next/link";
import type { Industry } from "@/data/industries";
import { IndustrialImage } from "@/components/ui/IndustrialImage";

export function IndustryCard({ industry, locale = "en" }: { industry: Industry; locale?: string }) {
  return (
    <Link href={`/${locale}/industries/${industry.slug}/`} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <IndustrialImage src={industry.image} alt={`${industry.title} sourcing from China`} className="h-44 rounded-none" />
      <div className="p-6">
        <h3 className="text-xl font-black text-navy">{industry.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {industry.products.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
