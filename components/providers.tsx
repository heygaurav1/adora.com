"use client"

import { ReactNode } from "react"
import { AuthProvider } from "@/lib/auth-context"
import { FavoritesProvider } from "@/lib/favorites-context"
import { CartProvider } from "@/lib/cart-context"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  )
}
