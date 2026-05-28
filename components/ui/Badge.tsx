export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700 ring-1 ring-orange-100">{children}</span>;
}
