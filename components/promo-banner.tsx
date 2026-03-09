"use client"

import { X, Gift } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-foreground/95 backdrop-blur-sm text-background py-2.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <Gift className="h-4 w-4 hidden sm:block" />
        <p className="text-xs sm:text-sm tracking-wide text-center">
          <span className="font-medium">EXCLUSIVE</span>
          <span className="mx-2 opacity-50">|</span>
          Buy one, get <span className="text-accent">20% off</span> your next purchase
          <span className="mx-2 opacity-50">|</span>
          <span className="hidden sm:inline">Code: ADORA20</span>
          <Link 
            href="/women" 
            className="ml-2 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Shop Now
          </Link>
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1.5 hover:bg-background/10 transition-colors rounded"
          aria-label="Close banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
