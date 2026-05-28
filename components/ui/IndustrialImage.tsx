export function IndustrialImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-navy industrial-grid ${className}`}>
      <div aria-label={`${alt} placeholder for ${src}`} className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-700 to-orange-600/80" />
      <div className="absolute left-10 top-10 h-28 w-28 rounded-md border border-white/20 bg-white/10" />
      <div className="absolute right-12 top-20 h-44 w-24 rounded-md border border-orange-200/30 bg-orange-200/10" />
      <div className="absolute bottom-24 left-16 h-24 w-64 rounded-md border border-white/15 bg-white/10" />
      <div className="absolute bottom-36 right-20 h-16 w-52 rounded-md border border-white/15 bg-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-slate-900/20 to-orange-500/20" />
      <div className="absolute inset-x-6 bottom-6 rounded-md border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
        <div className="text-xs font-bold uppercase text-orange-200">Industrial sourcing visual</div>
        <div className="mt-1 text-lg font-black">{alt}</div>
      </div>
    </div>
  );
}
