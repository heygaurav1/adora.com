"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data";

export default function KidsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      <Header />
      <CartDrawer />
      <main className="w-full max-w-[1400px] px-4 md:px-8 py-20 flex flex-col items-center">
        <h1 className="text-[32px] md:text-[42px] font-black uppercase tracking-[0.2em] mb-16 text-center border-b-4 border-black pb-4">
          Kidswear
        </h1>
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PRODUCTS.slice(4, 12).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

