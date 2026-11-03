import Link from "next/link";
import { procurementPaths, procurementInquiryHref } from "@/data/procurement-paths";

export function ProcurementPaths({ topic, currentPath }: { topic?: string; currentPath?: string }) {
  const paths = topic ? procurementPaths.filter((path) => path.id === topic) : procurementPaths;
  return (
    <section aria-label="Procurement resources" className="my-10 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-navy">{topic ? "Plan Your Purchase" : "Explore Sourcing by Purchasing Need"}</h2>
      <div className={`mt-6 grid gap-6 ${topic ? "" : "lg:grid-cols-2"}`}>
        {paths.map((path) => (
          <div key={path.id} className="space-y-3">
            <h3 className="text-lg font-bold text-navy">{path.title}</h3>
            <p className="text-sm leading-7 text-slate-600">{path.summary}</p>
            <ul className="space-y-2 text-sm font-semibold text-navy">
              {path.landing !== currentPath ? <li><Link className="underline underline-offset-4 hover:text-signal" href={path.landing}>{path.title}</Link></li> : null}
              {`/en/blog/${path.guide}/` !== currentPath ? <li><Link className="underline underline-offset-4 hover:text-signal" href={`/en/blog/${path.guide}/`}>{path.guideTitle}</Link></li> : null}
              {`/en/blog/${path.evidence}/` !== currentPath ? <li><Link className="underline underline-offset-4 hover:text-signal" href={`/en/blog/${path.evidence}/`}>{path.evidenceTitle}</Link></li> : null}
              {path.service !== currentPath ? <li><Link className="underline underline-offset-4 hover:text-signal" href={path.service}>Supplier checks and order coordination</Link></li> : null}
            </ul>
            <p className="text-sm leading-7 text-slate-600">{path.checklist}</p>
            <Link href={procurementInquiryHref(path.id)} className="inline-flex min-h-11 items-center rounded-md bg-signal px-5 py-3 text-sm font-bold text-white hover:bg-orange-600">Discuss Your Requirements</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
