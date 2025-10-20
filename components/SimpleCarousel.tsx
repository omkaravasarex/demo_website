"use client";

import { useRef } from "react";

type ImageItem = { src: string; alt: string };
export default function SimpleCarousel({ images }: { images: ImageItem[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.querySelector<HTMLElement>(".carousel-item");
    const delta = child ? child.offsetWidth + 16 : 320; // item width + gap
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pr-8"
        aria-label="Mission images carousel"
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="carousel-item min-w-[280px] h-[180px] rounded-xl bg-slate-200 overflow-hidden snap-start border border-slate-200 card-hover-glow"
          >
            {/* Placeholder block; replace with <img> when assets available */}
            <div
              className="w-full h-full bg-gradient-to-br from-clouthr-indigo via-clouthr-purple to-clouthr-orange opacity-80"
              role="img"
              aria-label={img.alt}
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="pointer-events-auto btn-primary !px-3 !py-2 ml-2"
          aria-label="Prev"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="pointer-events-auto btn-primary !px-3 !py-2 mr-2"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
