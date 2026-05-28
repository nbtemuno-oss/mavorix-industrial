export function IndustrialImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-slate-100 ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    </div>
  );
}
