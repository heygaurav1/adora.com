"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Womenswear",
    href: "/women",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
  },
  {
    name: "Menswear",
    href: "/men",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    name: "Kidswear",
    href: "/kids",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80"
  },
  {
    name: "Home Decor",
    href: "/home-decor",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
  },
  {
    name: "Watches",
    href: "/watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    name: "Fragrance",
    href: "/fragrance",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  }
]

export function CategoryGrid() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-accent mb-2">EXPLORE</p>
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground">Choose a department</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent group-hover:from-background/90 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <span className="text-xs lg:text-sm tracking-[0.2em] text-foreground drop-shadow-lg">
                  {category.name.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
