import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, locale = "en" }: { service: Service; locale?: string }) {
  return (
    <Link href={`/${locale}/services/${service.slug}/`} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <div className="text-xs font-black uppercase text-signal">{service.keywords[0]}</div>
      <h3 className="mt-3 text-xl font-black text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <div className="mt-5 inline-flex items-center text-sm font-black text-navy group-hover:text-signal">Learn more <ArrowRight className="ml-2" size={16} /></div>
    </Link>
  );
}
