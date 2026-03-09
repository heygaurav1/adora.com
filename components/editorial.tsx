import Image from "next/image"
import Link from "next/link"

export function Editorial() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left editorial */}
          <Link href="/women" className="group relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80"
              alt="Spring collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs tracking-widest text-foreground/80 mb-2">EDITORIAL</p>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">The Art of Dressing</h3>
              <span className="text-sm text-foreground underline underline-offset-4">
                Read more
              </span>
            </div>
          </Link>

          {/* Right editorial */}
          <Link href="/home-decor" className="group relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
              alt="Home collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs tracking-widest text-foreground/80 mb-2">INTERIOR</p>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">Living in Style</h3>
              <span className="text-sm text-foreground underline underline-offset-4">
                Explore collection
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
