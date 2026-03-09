"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { PRODUCTS } from "@/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MenPage() {
  const products = PRODUCTS.filter(p => !p.name.toLowerCase().includes("woman") && !p.name.toLowerCase().includes("panty"));

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      <CartDrawer />
      
      <main className="w-full max-w-[1500px] px-6 md:px-12 py-20 flex flex-col items-center">
        <nav className="w-full flex items-center gap-3 mb-16 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <span className="text-black">Menswear</span>
        </nav>

        <div className="w-full flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
           <div className="flex flex-col gap-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">Contemporary Staples</span>
              <h1 className="text-[42px] md:text-[64px] font-medium uppercase tracking-tight leading-none text-black italic">
                Men&apos;s Collection
              </h1>
           </div>
           <div className="max-w-[450px] text-[14px] text-gray-500 font-normal leading-relaxed uppercase tracking-wider text-right italic">
              Empowering the modern wardrobe. Our men&apos;s edit combines sharp architectural tailoring with the effortless comfort of luxury basics.
           </div>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
           {products.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
