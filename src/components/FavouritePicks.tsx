"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

interface PickItem {
  name: string;
  image: string;
  href: string;
}

const PICKS: PickItem[] = [
  {
    name: "TECH BURNER'S\nFAVOURITE PICKS",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=400&q=80",
    href: "/collections",
  },
  {
    name: "PRANAY'S\nFAVOURITE PICKS",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80",
    href: "/collections",
  },
  {
    name: "COMMUNITY'S\nFAVOURITE PICKS",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    href: "/collections",
  },
  {
    name: "TECH CREATOR\nYUVRAJ'S PICKS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    href: "/collections",
  },
  {
    name: "TECH CREATOR\nVENKATESH'S PICKS",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    href: "/collections",
  },
  {
    name: "TECH BURNER\nFAVOURITE PICKS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    href: "/collections",
  },
];

export function FavouritePicks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-3 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative">
        <div className="flex items-center gap-2">
          <button onClick={scrollPrev}
            className="hidden md:flex w-7 h-7 items-center justify-center rounded-full border border-gray-200 hover:border-black transition-colors shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-2.5">
              {PICKS.map((pick, i) => (
                <Link key={i} href={pick.href} className="flex-[0_0_150px] md:flex-[0_0_170px] group">
                  <div className="relative h-[80px] md:h-[90px] rounded-lg overflow-hidden">
                    <img
                      src={pick.image}
                      alt={pick.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center p-2">
                      <p className="text-white text-[8px] md:text-[9px] font-bold text-center uppercase leading-tight tracking-wider whitespace-pre-line">
                        {pick.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button onClick={scrollNext}
            className="hidden md:flex w-7 h-7 items-center justify-center rounded-full border border-gray-200 hover:border-black transition-colors shrink-0"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
