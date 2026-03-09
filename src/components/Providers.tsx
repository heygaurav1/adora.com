"use client";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WishlistProvider>
      <CartProvider>{children}</CartProvider>
    </WishlistProvider>
  );
}
