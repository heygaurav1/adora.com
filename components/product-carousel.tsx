"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "./product-card"
import type { Product } from "@/lib/products"

interface ProductCarouselProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllHref?: string
}

export function ProductCarousel({ title, subtitle, products, viewAllHref }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const maxScroll = scrollWidth - clientWidth
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
        setScrollProgress(progress)
      }
    }

    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener("scroll", handleScroll)
      return () => ref.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            {subtitle && (
              <p className="text-xs tracking-widest text-accent mb-2">{subtitle}</p>
            )}
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground">{title}</h2>
          </div>
          <div className="flex items-center gap-4">
            {viewAllHref && (
              <a href={viewAllHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                View all
              </a>
            )}
            <div className="flex gap-1">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                aria-label="Previous products"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                aria-label="Next products"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[35vw] lg:w-[22%]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProductCard 
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                isBestseller={product.isBestseller}
                isLimitedEdition={product.isLimitedEdition}
              />
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors lg:hidden"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex-1 h-px bg-border relative">
            <div 
              className="absolute top-0 left-0 h-full bg-foreground/50 transition-all duration-300"
              style={{ width: `${Math.max(scrollProgress, 5)}%` }}
            />
          </div>
          <button
            onClick={() => scroll("right")}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors lg:hidden"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
