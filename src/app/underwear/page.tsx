"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { getProductsByCategory } from "@/data";

export default function UnderwearPage() {
  const products = getProductsByCategory("underwear");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col items-center">
      <Header />
      <CartDrawer />
      
      <main className="w-full max-w-[1400px] px-4 md:px-8 py-20 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-24">
           <span className="text-[12px] font-light tracking-[0.6em] text-zinc-500 mb-6 uppercase">Modern Essentials</span>
           <h1 className="text-[48px] md:text-[80px] font-light uppercase tracking-tighter leading-none mb-10">UNDERWEAR<br/>& PANTIES</h1>
           <p className="max-w-[600px] text-[14px] text-zinc-500 font-normal leading-relaxed uppercase tracking-widest">
             Luxury silk and organic cotton. Designed for elegance and comfort.
           </p>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
           {products.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

