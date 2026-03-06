"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data";
import { SlidersHorizontal, LayoutGrid, Columns } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Header />
      
      <main className="container mx-auto px-4 md:px-8 py-8">
        <Hero />

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 border border-gray-100 px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50">
            Filter
          </button>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-4 text-gray-200">
              <LayoutGrid className="w-5 h-5 text-black stroke-[1.5]" />
              <div className="w-[1px] h-4 bg-gray-200" />
              <Columns className="w-5 h-5 stroke-[1.5]" />
            </div>
            
            <button className="flex items-center gap-2 border border-gray-100 px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 text-black">
              Sort
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicate for demo grid impact */}
          {PRODUCTS.map((product) => (
            <ProductCard key={`${product.id}-alt`} product={product} />
          ))}
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-100 py-12 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-black">Get personal style advice</h4>
            <p className="text-xs text-gray-400 max-w-xs uppercase">Have a style or fit question? Chat online or book an appointment in our store.</p>
            <Link href="#" className="text-xs font-bold underline mt-2 text-black uppercase">Ask a Style Expert</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-black">Fast, free shipping</h4>
            <p className="text-xs text-gray-400 max-w-xs uppercase">Enjoy free shipping on every order. Or pick up in your nearest store.</p>
            <Link href="#" className="text-xs font-bold underline mt-2 text-black uppercase">Learn more</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-black">Free returns</h4>
            <p className="text-xs text-gray-400 max-w-xs uppercase">Schedule a carrier pick-up, or drop off the products at a store or drop off point.</p>
            <Link href="#" className="text-xs font-bold underline mt-2 text-black uppercase">Learn more</Link>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-gray-400">
           <div className="flex gap-8">
             <span>Poland / English</span>
           </div>
           <div>© 2026 ADORA</div>
           <div className="flex gap-8">
             <span>Terms & Conditions</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
