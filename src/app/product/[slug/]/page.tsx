"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProductBySlug, getRelatedProducts } from "@/data";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ChevronRight, Info, Minus, Plus, Star, ShieldCheck, Truck, RotateCcw, Ruler } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug as string);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<string | null>("details");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center">
        <Header />
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-gray-400 font-medium font-sans italic">The piece you are looking for has been moved or is no longer available.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(product);
  const wishlisted = isInWishlist(product.id);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center selection:bg-black selection:text-white pb-20">
      <Header />
      <CartDrawer />

      <main className="w-full max-w-[1500px] px-6 md:px-12 py-12 flex flex-col items-center">
        
        {/* Cinematic Breadcrumbs */}
        <nav className="w-full flex items-center gap-3 mb-12 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <Link href={`/category/${product.categorySlug}`} className="hover:text-black transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-32 mb-32">
          
          {/* Left Column: High-Res Visual Storytelling */}
          <div className="flex flex-col gap-6 w-full group">
            <div className="w-full bg-gray-50 relative overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              
              {/* Product Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-4">
                {product.tag && (
                  <span className="bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
                    {product.tag}
                  </span>
                )}
                {product.oldPrice && (
                  <span className="bg-red-600 text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
                    -{discount}% OFF
                  </span>
                )}
              </div>

              {/* Interaction Hint */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in">
                 <span className="bg-white/90 backdrop-blur-md px-8 py-4 text-[11px] font-bold uppercase tracking-widest shadow-2xl">
                    Click to Zoom
                 </span>
              </div>
            </div>
            
            {/* Gallery Hint / Context Shots Placeholder */}
            <div className="grid grid-cols-2 gap-6 opacity-80 hover:opacity-100 transition-opacity">
               <div className="aspect-[4/5] bg-gray-50 overflow-hidden border border-gray-100">
                  <img src={product.images[0]} className="w-full h-full object-cover grayscale brightness-95" />
               </div>
               <div className="aspect-[4/5] bg-gray-50 overflow-hidden border border-gray-100 relative flex items-center justify-center">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">View Detail</span>
               </div>
            </div>
          </div>

          {/* Right Column: Premium Purchase Experience */}
          <div className="flex flex-col w-full">
            
            <div className="mb-12 border-b border-gray-50 pb-12">
              <div className="flex items-center gap-2 text-yellow-500 mb-6 drop-shadow-sm">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.reviews?.rating || 4.5) ? "fill-current" : ""}`} />
                 ))}
                 <span className="text-[11px] text-gray-300 font-medium uppercase tracking-widest ml-4">
                    {product.reviews?.count || 120}+ Reviews
                 </span>
              </div>
              <h1 className="text-[36px] md:text-[52px] font-medium uppercase tracking-tight text-black leading-none mb-6 italic">
                {product.name}
              </h1>
              <p className="text-[15px] text-gray-400 font-medium leading-relaxed uppercase tracking-[0.05em] max-w-[550px]">
                {product.fabric ? `${product.fabric}. ` : "Luxury construction with sustainable materials. "}
                Designed for a sophisticated silhouette and timeless appeal.
              </p>
            </div>

            <div className="flex items-baseline gap-6 mb-16">
              <span className="text-[32px] font-semibold text-black tracking-tighter">
                ₹ {product.price.toLocaleString("en-IN")}
              </span>
              {product.oldPrice && (
                <span className="text-[20px] text-gray-300 line-through font-normal">
                  ₹ {product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
              <span className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest ml-auto px-4 py-1.5 bg-emerald-50/50 border border-emerald-100">
                 Price includes all taxes
              </span>
            </div>

            {/* Size Selector with Guide */}
            <div className="flex flex-col gap-10 mb-16">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                     Select Size <Info className="w-3.5 h-3.5 opacity-50" />
                  </span>
                  <button 
                    onClick={() => setShowSizeGuide(true)}
                    className="text-[11px] text-black font-bold flex items-center gap-2 group"
                  >
                     <Ruler className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                     <span className="border-b border-black pb-0.5">Size Guide</span>
                  </button>
                </div>
                <div className="w-full grid grid-cols-4 md:grid-cols-5 gap-4">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-16 flex items-center justify-center text-[13px] font-semibold transition-all shadow-sm rounded-sm ${
                        selectedSize === size
                          ? "bg-black text-white scale-105"
                          : "bg-white border border-gray-100 text-gray-500 hover:border-black hover:text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {/* Fit Indicator */}
                <div className="mt-4 p-5 bg-gray-50/50 border border-gray-100 rounded-sm">
                   <p className="text-[12px] text-gray-500 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="font-medium italic">{product.fitNotes || "Relaxed fit, true to size. For an oversized look, size up."}</span>
                   </p>
                   {product.modelInfo && (
                     <p className="text-[12px] text-gray-400 mt-2 ml-5 italic leading-relaxed uppercase tracking-tighter">
                        Model Info: {product.modelInfo}
                     </p>
                   )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex flex-col gap-4">
                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Quantity</span>
                 <div className="flex items-center border border-gray-100 bg-white w-48 h-14 shadow-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex-1 h-full flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="w-4 h-4 text-gray-400" />
                    </button>
                    <span className="flex-1 text-center text-[15px] font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex-1 h-full flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4 text-gray-400" />
                    </button>
                 </div>
              </div>
            </div>

            {/* Premium CTAs */}
            <div className="flex flex-col gap-4 mb-20">
              <div className="flex gap-4">
                <button
                    onClick={() => {
                        if (!selectedSize) return alert("Please select a size");
                        addToCart(product, selectedSize);
                    }}
                    className="flex-[4] h-18 py-6 bg-black text-white text-[13px] font-bold uppercase tracking-[0.3em] shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all flex items-center justify-center rounded-sm"
                >
                    Add To Bag
                </button>
                <button
                    onClick={() => toggleWishlist(product)}
                    className={`flex-1 h-18 border border-gray-100 flex items-center justify-center transition-all rounded-sm shadow-sm ${
                        wishlisted ? "text-red-600 bg-red-50/50" : "text-black bg-white hover:bg-gray-50"
                    }`}
                >
                    <Heart className={`w-6 h-6 ${wishlisted ? "fill-current" : ""}`} strokeWidth={1} />
                </button>
              </div>
              
              <button
                className="w-full py-6 border border-black bg-white text-black text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all shadow-xl rounded-sm"
              >
                Express Checkout
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-12 mb-20 px-4 py-10 bg-gray-50/30 border-y border-gray-50">
               <div className="flex items-start gap-4">
                  <Truck className="w-5 h-5 text-gray-400" strokeWidth={1} />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-1">Free Delivery</h4>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.05em]">Worldwide • 2-4 Days</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <RotateCcw className="w-5 h-5 text-gray-400" strokeWidth={1} />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-1">Hassle Free</h4>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.05em]">14 Day Boutique Returns</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-gray-400" strokeWidth={1} />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-1">Secure Pay</h4>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.05em]">PCI-DSS Compliant</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Star className="w-5 h-5 text-emerald-600" strokeWidth={1} />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Eco-Luxe</h4>
                    <p className="text-[10px] text-emerald-600/60 font-medium uppercase tracking-[0.05em]">Certified Sustainable</p>
                  </div>
               </div>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-gray-50">
              {[
                { id: "details", title: "Details & Care", content: (
                   <div className="flex flex-col gap-6">
                      <p>{product.fabric || "Premium composition including high-grade silk or organic cotton blends."}</p>
                      <ul className="list-disc pl-5 space-y-2 uppercase text-[12px] tracking-widest opacity-80">
                         <li>{product.care || "Dry clean only. Gentle steam required."}</li>
                         <li>Sourced from sustainable Italian mills.</li>
                         <li>Signature ADORA tailored finish.</li>
                      </ul>
                   </div>
                ) },
                { id: "shipping", title: "Delivery & Returns", content: "Enjoy free worldwide express delivery on all orders over ₹4,999. Items may be returned within 14 days of receipt for exchange or store credit in their original condition." },
              ].map(section => (
                <div key={section.id} className="border-b border-gray-50">
                  <button 
                    onClick={() => setActiveTab(activeTab === section.id ? null : section.id)}
                    className="w-full py-8 flex items-center justify-between group"
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-[0.25em]">{section.title}</span>
                    <ChevronRight className={`w-4 h-4 text-gray-300 group-hover:text-black transition-transform ${activeTab === section.id ? "rotate-90 pointer-events-none" : ""}`} />
                  </button>
                  {activeTab === section.id && (
                    <div className="pb-10 animate-fade-in pr-8">
                      <div className="text-[14px] text-gray-500 leading-relaxed font-normal">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS - COMPLETE THE LOOK */}
        {related.length > 0 && (
          <div className="w-full pt-40 border-t border-gray-50 flex flex-col items-center">
            <div className="flex flex-col items-center mb-24 gap-4">
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">Curated For You</span>
               <h2 className="text-[28px] md:text-[36px] font-medium uppercase tracking-widest text-center italic">Complete The Look</h2>
            </div>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
              {related.slice(0, 4).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </main>

      {/* SIZE GUIDE MODAL */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-[800px] p-12 relative shadow-2xl rounded-sm">
              <button 
                onClick={() => setShowSizeGuide(false)}
                className="absolute top-8 right-8 text-black hover:opacity-50 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col items-center mb-16">
                 <h2 className="text-[24px] font-medium uppercase tracking-[0.3em] mb-4">Size Guide</h2>
                 <p className="text-[11px] text-gray-400 uppercase tracking-widest italic">All measurements in cm</p>
              </div>

              <div className="w-full overflow-x-auto">
                 <table className="w-full border-collapse">
                    <thead>
                       <tr className="border-b border-black">
                          <th className="py-6 text-left text-[11px] uppercase tracking-widest font-bold">Size</th>
                          <th className="py-6 text-left text-[11px] uppercase tracking-widest font-bold">Chest</th>
                          <th className="py-6 text-left text-[11px] uppercase tracking-widest font-bold">Length</th>
                          <th className="py-6 text-left text-[11px] uppercase tracking-widest font-bold">Shoulder</th>
                          <th className="py-6 text-left text-[11px] uppercase tracking-widest font-bold">Sleeve</th>
                       </tr>
                    </thead>
                    <tbody>
                       {(product.sizeChart || [
                         { size: "S", chest: "96-100", length: "70", shoulder: "44", sleeve: "60" },
                         { size: "M", chest: "102-106", length: "72", shoulder: "46", sleeve: "62" },
                         { size: "L", chest: "108-112", length: "74", shoulder: "48", sleeve: "64" },
                         { size: "XL", chest: "114-118", length: "76", shoulder: "50", sleeve: "66" }
                       ]).map(row => (
                          <tr key={row.size} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                             <td className="py-6 text-[13px] font-bold text-black">{row.size}</td>
                             <td className="py-6 text-[13px] text-gray-500">{row.chest}</td>
                             <td className="py-6 text-[13px] text-gray-500">{row.length}</td>
                             <td className="py-6 text-[13px] text-gray-500">{row.shoulder}</td>
                             <td className="py-6 text-[13px] text-gray-500">{row.sleeve}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              <div className="mt-16 p-8 bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-10">
                 <div className="flex-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest mb-4">How to Measure</h4>
                    <p className="text-[12px] text-gray-400 leading-relaxed italic uppercase tracking-tighter">
                       Measure around the fullest part of your chest, keeping the tape horizontal. For length, measure from the high point of the shoulder down to the hem.
                    </p>
                 </div>
                 <div className="flex-1 flex items-center justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Size Diagram Visual</span>
                 </div>
              </div>
           </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
