"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { getSaleProducts } from "@/data";

export default function SalePage() {
  const saleProducts = getSaleProducts();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      <CartDrawer />
      
      <main id="main-content" className="w-full max-w-[1400px] px-4 md:px-8 py-20 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-24">
           <span className="text-[12px] font-black tracking-[0.6em] text-red-600 mb-6 uppercase">Exclusive Discounts</span>
           <h1 className="text-[48px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-10">SEASONAL<br/>SALE</h1>
           <p className="max-w-[600px] text-[14px] text-gray-400 font-normal leading-relaxed uppercase tracking-widest">
             Up to 50% off on premium collections. Limited time only.
           </p>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
           {saleProducts.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

