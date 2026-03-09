"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1800&q=80",
    alt: "Hero Banner 1",
  },
  {
    image: "https://images.unsplash.com/photo-1490578474895-699ad4e3fac2?w=1800&q=80",
    alt: "Hero Banner 2",
  },
  {
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1800&q=80",
    alt: "Hero Banner 3",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[280px] md:h-[460px] lg:h-[560px] overflow-hidden bg-black">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
