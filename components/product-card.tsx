"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useFavorites } from "@/lib/favorites-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category?: string
  isNew?: boolean
  isBestseller?: boolean
  isLimitedEdition?: boolean
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice,
  image, 
  category, 
  isNew,
  isBestseller,
  isLimitedEdition 
}: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const isProductFavorite = isFavorite(id)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(id)
  }

  return (
    <div className="group relative">
      <Link href={`/product/${id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-card">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {isNew && (
              <span className="bg-foreground text-background text-[10px] tracking-widest px-3 py-1">
                NEW IN
              </span>
            )}
            {isBestseller && (
              <span className="bg-accent text-accent-foreground text-[10px] tracking-widest px-3 py-1">
                BESTSELLER
              </span>
            )}
            {isLimitedEdition && (
              <span className="bg-card text-card-foreground border border-border text-[10px] tracking-widest px-3 py-1">
                LIMITED
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 space-y-1">
          {category && (
            <p className="text-xs tracking-wide text-muted-foreground">{category}</p>
          )}
          <h3 className="text-sm text-foreground">{name}</h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{"$"}{price.toLocaleString()}</p>
            {originalPrice && originalPrice > price && (
              <p className="text-sm text-muted-foreground/50 line-through">
                {"$"}{originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-3 right-3 p-2.5 backdrop-blur-sm transition-all ${
          isProductFavorite 
            ? "bg-foreground text-background opacity-100" 
            : "bg-background/60 text-foreground opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background"
        }`}
        aria-label={isProductFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart className={`h-4 w-4 ${isProductFavorite ? "fill-current" : ""}`} />
      </button>
    </div>
  )
}
