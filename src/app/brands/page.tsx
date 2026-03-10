"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export default function BrandsPage() {
  const brands = ["Esse Studios", "Cult Gaia", "SIR.", "Aeyde", "Jacquemus", "Loewe", "Prada", "Gucci"];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col items-center">
      <Header />
      <CartDrawer />
      
      <main className="w-full max-w-[1400px] px-4 md:px-8 py-20 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-24">
           <h1 className="text-[48px] md:text-[80px] font-light uppercase tracking-tighter leading-none mb-10">DESIGNER<br/>DIRECTORY</h1>
           <p className="max-w-[600px] text-[14px] text-zinc-500 font-normal leading-relaxed uppercase tracking-widest">
             Curating the world's most influential luxury labels.
           </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
           {brands.map(brand => (
             <div key={brand} className="h-32 border border-white/5 flex items-center justify-center hover:border-black transition-all cursor-pointer">
                <span className="text-[14px] font-light uppercase tracking-widest">{brand}</span>
             </div>
           ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

