import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { IndustrialImage } from "@/components/ui/IndustrialImage";

export function ServiceCard({ service, locale = "en" }: { service: Service; locale?: string }) {
  return (
    <Link href={`/${locale}/services/${service.slug}/`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <IndustrialImage src={service.image} alt={`${service.title} from China`} className="h-44 rounded-none" />
      <div className="p-6">
        <div className="text-xs font-black uppercase text-signal">{service.keywords[0]}</div>
      <h3 className="mt-3 text-xl font-black text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <div className="mt-5 inline-flex items-center text-sm font-black text-navy group-hover:text-signal">Learn more <ArrowRight className="ml-2" size={16} /></div>
      </div>
    </Link>
  );
}
