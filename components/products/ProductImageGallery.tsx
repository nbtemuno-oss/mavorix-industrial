"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

type ProductImage = {
  src: string;
  alt: string;
  label: string;
};

export function ProductImageGallery({ images }: { images: ProductImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = images[activeIndex];
  const thumbnailGridClass = images.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block h-[420px] max-h-[76vh] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 md:h-[600px] lg:h-[720px]"
        aria-label={`Open larger view of ${activeImage.label}`}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          loading="eager"
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
        <span className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/95 text-navy shadow-sm ring-1 ring-slate-200 transition group-hover:bg-signal group-hover:text-white">
          <Maximize2 size={18} aria-hidden="true" />
        </span>
      </button>

      <div className={`grid ${thumbnailGridClass} gap-3`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-md border bg-slate-100 transition ${
              index === activeIndex ? "border-signal ring-2 ring-orange-100" : "border-slate-200 hover:border-slate-400"
            }`}
            aria-label={`View ${image.label}`}
          >
            <Image src={image.src} alt={image.alt} fill loading="eager" sizes="160px" className="object-contain" />
          </button>
        ))}
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[80] bg-navy/90 p-4" role="dialog" aria-modal="true" aria-label={activeImage.label}>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-navy"
            aria-label="Close image preview"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <div className="relative h-[86vh] w-full">
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
