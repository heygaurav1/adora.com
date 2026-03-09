"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data";
import { ProductCard } from "./ProductCard";
import { useCallback, useEffect, useState } from "react";

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[16px] md:text-[20px] font-bold uppercase tracking-[0.1em] text-black">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                canPrev ? "border-gray-300 hover:border-black text-black" : "border-gray-100 text-gray-200"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                canNext ? "border-gray-300 hover:border-black text-black" : "border-gray-100 text-gray-200"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {products.map((p) => (
              <div key={p.id} className="flex-[0_0_65%] sm:flex-[0_0_42%] md:flex-[0_0_30%] lg:flex-[0_0_24%] min-w-0">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
