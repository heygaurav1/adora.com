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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      <CartDrawer />

      <main className="w-full max-w-[1400px] px-4 md:px-12 py-16 flex flex-col items-center">
        
        {/* Breadcrumbs */}
        <nav className="w-full flex items-center gap-2 mb-12 text-[11px] font-black uppercase tracking-widest text-gray-300">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{title}</span>
        </nav>

        {/* Hero-like Title Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="flex flex-col gap-4">
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-300">Premium Curation</span>
              <h1 className="text-[42px] md:text-[60px] font-black uppercase tracking-tight leading-none text-black">
                {title}
              </h1>
           </div>
           <div className="flex items-center gap-2 text-gray-400 font-black text-[13px] uppercase tracking-widest">
              <span>{displayProducts.length}</span>
              <span className="opacity-50">Items</span>
           </div>
        </div>

        {/* Refined Filter Bar */}
        <div className="w-full flex items-center justify-between py-6 border-y-2 border-gray-50 mb-16 bg-white sticky top-[100px] md:top-[160px] z-40">
           <div className="flex items-center gap-10">
              <button className="flex items-center gap-3 text-[12px] font-black uppercase tracking-widest hover:text-gray-500 transition-all">
                 <SlidersHorizontal className="w-4 h-4" />
                 Filters
              </button>
              <div className="hidden lg:flex items-center gap-8">
                 {["Category", "Size", "Price", "Color"].map(f => (
                   <button key={f} className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all">
                      {f}
                   </button>
                 ))}
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <span className="text-[11px] font-black uppercase tracking-widest text-gray-300">Sort By:</span>
              <select className="bg-transparent border-none text-[12px] font-black uppercase tracking-widest outline-none cursor-pointer">
                 <option>Recommended</option>
                 <option>Newest</option>
                 <option>Price: Low to High</option>
                 <option>Price: High to Low</option>
              </select>
           </div>
        </div>

        {/* Product Grid - Optimized Spacing */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="w-full py-40 flex flex-col items-center gap-8 border-t border-gray-50 mt-20">
            <p className="text-[16px] font-black uppercase tracking-[0.4em] text-gray-300">No pieces found in this edit</p>
            <Link href="/" className="h-16 px-12 bg-black text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center shadow-2xl">
              Back to Store
            </Link>
          </div>
        )}

        {/* Bottom Pagination / Load More */}
        <div className="mt-40 flex flex-col items-center gap-8">
           <button className="h-18 px-16 border-4 border-black text-black text-[13px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 shadow-xl flex items-center justify-center">
             Load More Pieces
           </button>
           <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest opacity-60">Showing {displayProducts.length} of 80 items</p>
        </div>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
