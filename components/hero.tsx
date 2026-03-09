"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Spring Collection",
    subtitle: "Discover the new season",
    cta: "Shop Now",
    href: "/women",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
  },
  {
    id: 2,
    title: "Menswear Essentials",
    subtitle: "Refined sophistication",
    cta: "Explore",
    href: "/men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1920&q=80"
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Elevate your space",
    cta: "Discover",
    href: "/home-decor",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <p className="text-xs tracking-[0.3em] text-foreground/80 mb-4">{slide.subtitle}</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
                {slide.title}
              </h1>
              <Link
                href={slide.href}
                className="inline-block border border-foreground text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 text-foreground/70 hover:text-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 text-foreground/70 hover:text-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-foreground" : "bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
