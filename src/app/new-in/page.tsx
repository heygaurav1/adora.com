"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { PRODUCTS } from "@/data";

export default function NewInPage() {
  const newProducts = PRODUCTS.filter(p => p.tag === "NEW ARRIVAL").slice(0, 12);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      <CartDrawer />
      
      <main className="w-full max-w-[1400px] px-4 md:px-8 py-20 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-24">
           <span className="text-[12px] font-black tracking-[0.6em] text-gray-300 mb-6 uppercase">Just Dropped</span>
           <h1 className="text-[48px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-10">THE NEW<br/>ARRIVALS</h1>
           <p className="max-w-[600px] text-[14px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
             Discover the latest pieces from our Spring 2026 collection.
           </p>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
           {newProducts.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
