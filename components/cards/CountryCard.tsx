import Link from "next/link";
import type { Country } from "@/data/countries";

export function CountryCard({ country, locale = "en" }: { country: Country; locale?: string }) {
  return (
    <Link href={`/${locale}/countries/${country.slug}/`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-industrial">
      <div className="text-xs font-black uppercase text-slate-500">{country.region}</div>
      <h3 className="mt-2 text-xl font-black text-navy">{country.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">China sourcing coordination for {country.needs.join(", ")}.</p>
    </Link>
  );
}
