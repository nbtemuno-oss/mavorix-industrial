export function IndustrialImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-navy ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-slate-900/10 to-orange-500/20" />
      <div className="absolute inset-x-6 bottom-6 rounded-md border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
        <div className="text-xs font-bold uppercase text-orange-200">Industrial sourcing visual</div>
        <div className="mt-1 text-lg font-black">{alt}</div>
      </div>
    </div>
  );
}
