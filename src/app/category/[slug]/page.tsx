"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, COLLECTIONS } from "@/data";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function CategoryPage() {
  const { slug } = useParams();
  const collection = COLLECTIONS.find((c) => c.slug === slug as string);
  const products = PRODUCTS.filter((p) => p.categorySlug === slug);

  // If no exact match, show related or recent products
  const displayProducts = products.length > 0 ? products : PRODUCTS.slice(0, 12);
  const title = collection?.name || (slug as string)?.replace(/-/g, " ") || "All Collections";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      <CartDrawer />

      <main className="w-full max-w-[1400px] px-4 md:px-12 py-16 flex flex-col items-center">
        
        {/* Breadcrumbs */}
        <nav className="w-full flex items-center gap-2 mb-12 text-[11px] font-light uppercase tracking-[0.3em] text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-zinc-800" />
          <span className="text-white/60">{title}</span>
        </nav>

        {/* Hero-like Title Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-10">
           <div className="flex flex-col gap-4">
              <span className="text-[12px] font-extralight uppercase tracking-[0.5em] text-zinc-600">Premium Curation</span>
              <h1 className="text-[42px] md:text-[72px] font-extralight uppercase tracking-[0.05em] leading-none text-white">
                {title}
              </h1>
           </div>
           <div className="flex items-center gap-3 text-zinc-500 font-light text-[13px] uppercase tracking-[0.2em] mb-2">
              <span className="text-white">{displayProducts.length}</span>
              <span className="opacity-40">Designs Found</span>
           </div>
        </div>

        {/* Refined Filter Bar */}
        <div className="w-full flex items-center justify-between py-6 border-y border-white/5 mb-16 bg-black/80 backdrop-blur-xl sticky top-[100px] md:top-[160px] z-40">
           <div className="flex items-center gap-12">
              <button className="flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.2em] text-white hover:text-zinc-400 transition-all">
                 <SlidersHorizontal className="w-3.5 h-3.5" />
                 Filters
              </button>
              <div className="hidden lg:flex items-center gap-10">
                 {["Category", "Size", "Price", "Color"].map(f => (
                   <button key={f} className="text-[10px] font-light uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all">
                      {f}
                   </button>
                 ))}
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <span className="text-[10px] font-light uppercase tracking-widest text-zinc-700">Sort By:</span>
              <select className="bg-transparent border-none text-[11px] font-normal uppercase tracking-[0.2em] outline-none cursor-pointer text-white">
                 <option value="recommended">Recommended</option>
                 <option value="newest">Newest</option>
                 <option value="low">Price: Low to High</option>
                 <option value="high">Price: High to Low</option>
              </select>
           </div>
        </div>

        {/* Product Grid - Optimized Spacing */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-16 lg:gap-y-24">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="w-full py-40 flex flex-col items-center gap-8 border-t border-white/5 mt-20">
            <p className="text-[14px] font-extralight uppercase tracking-[0.5em] text-zinc-600">No pieces found in this edit</p>
            <Link href="/" className="h-14 px-12 bg-black text-white text-[11px] font-normal uppercase tracking-[0.3em] flex items-center justify-center transition-all hover:bg-zinc-200">
              Return to Collections
            </Link>
          </div>
        )}

        {/* Bottom Pagination / Load More */}
        <div className="mt-40 flex flex-col items-center gap-10">
           <button className="h-16 px-16 border border-white/10 text-white text-[12px] font-light uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 flex items-center justify-center group">
             Explore More
           </button>
           <p className="text-[10px] text-zinc-700 font-light uppercase tracking-[0.3em] opacity-80 italic">Refining results for {title}</p>
        </div>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
