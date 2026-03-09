"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "./header"
import { Footer } from "./footer"
import { ProductCard } from "./product-card"
import { Filter, Grid2x2, LayoutList, X, ChevronDown } from "lucide-react"
import type { Product } from "@/lib/products"

interface CategoryPageProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  products: Product[]
  categories?: string[]
}

export function CategoryPage({
  title,
  subtitle,
  description,
  heroImage,
  products,
  categories = []
}: CategoryPageProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [gridView, setGridView] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"]

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    if (selectedSizes.length > 0 && product.sizes) {
      if (!selectedSizes.some((size) => product.sizes?.includes(size))) return false
    }
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
      default:
        return 0
    }
  })

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50vh] lg:h-[60vh] mt-16 lg:mt-20">
        <Image src={heroImage} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <p className="text-xs tracking-[0.3em] text-foreground/80 mb-3">{subtitle}</p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">{title}</h1>
            <p className="text-sm text-foreground/80 max-w-lg mx-auto">{description}</p>
            <p className="text-xs text-muted-foreground mt-4">{sortedProducts.length} products</p>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => setGridView("grid")}
                  className={`p-2 transition-colors ${gridView === "grid" ? "text-foreground" : "text-muted-foreground"}`}
                  aria-label="Grid view"
                >
                  <Grid2x2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridView("list")}
                  className={`p-2 transition-colors ${gridView === "list" ? "text-foreground" : "text-muted-foreground"}`}
                  aria-label="List view"
                >
                  <LayoutList className="h-4 w-4" />
                </button>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-sm text-foreground cursor-pointer focus:outline-none focus:border-accent"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-background/80" onClick={() => setIsFilterOpen(false)} />
          <div className="relative w-full max-w-sm bg-background border-r border-border p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg text-foreground">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm text-foreground mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block text-sm transition-colors ${!selectedCategory ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-sm transition-colors ${selectedCategory === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size */}
            <div className="mb-8">
              <h3 className="text-sm text-foreground mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedSizes.includes(size)
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-sm text-foreground mb-4">Price</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-accent"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{"$"}0</span>
                  <span>{"$"}{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-border">
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedSizes([])
                  setPriceRange([0, 10000])
                }}
                className="flex-1 py-3 text-sm border border-border text-foreground hover:border-foreground transition-colors"
              >
                Clear all
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Apply ({sortedProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-6 ${
              gridView === "grid"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
              />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedSizes([])
                  setPriceRange([0, 10000])
                }}
                className="mt-4 text-sm text-foreground underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
