import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      {items.map((item, index) => (
        <span key={`${item.href}-${item.label}-${index}`}>
          {index > 0 ? <span className="mx-2">/</span> : null}
          <Link href={item.href} className="hover:text-signal">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
