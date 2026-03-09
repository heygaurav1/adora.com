"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Exceptional quality and impeccable service. ADORA has become my go-to destination for luxury fashion.",
    author: "Victoria M.",
    publication: "Vogue"
  },
  {
    quote: "A curated selection that rivals the finest boutiques in Paris and Milan. Simply extraordinary.",
    author: "James L.",
    publication: "GQ"
  },
  {
    quote: "The attention to detail in every piece is remarkable. A true testament to modern luxury.",
    author: "Sophia R.",
    publication: "Elle"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 lg:py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest text-muted-foreground mb-8">RECOGNITION</p>
        
        <div className="relative">
          <Quote className="h-8 w-8 mx-auto mb-6 text-accent" strokeWidth={1} />
          
          <div className="min-h-[120px] flex items-center justify-center">
            <p className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed">
              {`"${testimonials[currentIndex].quote}"`}
            </p>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-foreground">{testimonials[currentIndex].author}</p>
            <p className="text-xs text-muted-foreground mt-1">{testimonials[currentIndex].publication}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 border border-border hover:border-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-foreground" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 border border-border hover:border-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
