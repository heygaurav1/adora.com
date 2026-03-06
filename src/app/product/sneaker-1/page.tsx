"use client";

import { Header } from "@/components/Header";
import { ChevronDown, Plus, Minus, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Gallery */}
          <div className="flex-1">
             <div className="grid grid-cols-2 gap-4">
               {images.map((src, i) => (
                 <div key={i} className={`bg-[#F8F8F8] aspect-[4/5] ${i === 0 ? 'col-span-2 aspect-square' : ''}`}>
                    <img src={src} alt="Sneaker View" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-[450px] lg:sticky lg:top-24 h-fit space-y-8">
             <div className="space-y-2">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Handcrafted in Portugal</span>
               <h1 className="text-3xl font-bold tracking-tighter uppercase leading-none">Marathon Dip-Dye Runner Belgian Block</h1>
               <div className="flex items-center gap-1 mt-4">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-black" />)}
                 <span className="text-[10px] font-bold ml-2 uppercase tracking-tighter">48 Reviews</span>
               </div>
             </div>

             <p className="text-sm text-gray-500 leading-relaxed">
               The Marathon Dip-Dye Runner is handcrafted in Portugal. The sole is made from a lightweight expanded rubber while the upper features a blend of mesh and suede.
             </p>

             <div className="text-2xl font-bold tracking-tighter">445 EUR</div>

             {/* Selectors */}
             <div className="space-y-4">
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Color: Belgian Block</label>
                 <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-black p-0.5"><div className="w-full h-full rounded-full bg-[#A8B5A2]" /></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 p-0.5"><div className="w-full h-full rounded-full bg-[#E2D9C8]" /></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 p-0.5"><div className="w-full h-full rounded-full bg-[#333333]" /></div>
                 </div>
               </div>

               <div className="space-y-2">
                 <div className="flex justify-between items-end">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Select Size</label>
                   <span className="text-[9px] font-bold underline cursor-pointer uppercase tracking-tighter">Size Guide</span>
                 </div>
                 <select 
                    className="w-full border border-gray-200 p-4 text-xs font-bold uppercase outline-none appearance-none bg-white"
                    onChange={(e) => setSelectedSize(e.target.value)}
                 >
                   <option value="">Choose your size</option>
                   <option value="40">EU 40 / US 7 / UK 6</option>
                   <option value="41">EU 41 / US 8 / UK 7</option>
                   <option value="42">EU 42 / US 9 / UK 8</option>
                   <option value="43">EU 43 / US 10 / UK 9</option>
                 </select>
               </div>
             </div>

             <div className="pt-4">
               <Link href="/checkout" className="block w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-zinc-800 transition-colors">
                 Add to bag
               </Link>
             </div>

             {/* Accordions */}
             <div className="border-t border-gray-100">
               {["Details & Care", "Delivery & Returns"].map((item) => (
                 <div key={item} className="border-b border-gray-100 py-4 flex justify-between items-center cursor-pointer group">
                   <span className="text-xs font-bold uppercase tracking-tight">{item}</span>
                   <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <section className="mt-32">
           <h2 className="text-xl font-bold uppercase tracking-tight mb-8">You Might Also Like</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[1,2,3,4].map(i => (
               <div key={i} className="space-y-4">
                 <div className="bg-[#F8F8F8] aspect-[4/5]">
                   <img src={`https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop`} alt="Related" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-[11px] uppercase tracking-tight">
                   <p className="font-bold">Rush Sneaker</p>
                   <p className="font-bold mt-1">240 EUR</p>
                 </div>
               </div>
             ))}
           </div>
        </section>
      </main>
    </div>
  );
}
