"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { CommunitySection } from "@/components/CommunitySection";
import { PRODUCTS } from "@/data";
import Link from "next/link";
import { ChevronRight, Globe, ShieldCheck, Truck, ArrowRight, Star, Leaf, Clock } from "lucide-react";

export default function Home() {
  const editorsPicks = PRODUCTS.filter(p => ["PREMIUM", "EXCLUSIVE", "ECO"].includes(p.tag || "")).slice(0, 4).length >= 4
    ? PRODUCTS.filter(p => ["PREMIUM", "EXCLUSIVE", "ECO"].includes(p.tag || "")).slice(0, 4)
    : PRODUCTS.filter(p => p.oldPrice).slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => ["NEW ARRIVAL", "TRENDING", "HOT"].includes(p.tag || "")).slice(0, 4);
  const saleItems = PRODUCTS.filter(p => p.tag === "SALE" || (p.oldPrice && p.oldPrice > p.price)).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden flex flex-col items-center">
      <Header />
      <CartDrawer />

      <main id="main-content" className="w-full flex flex-col items-center">
        
        {/* ━━━ 1. CINEMATIC HERO — LA LIFESTYLE IMAGERY ━━━ */}
        <section className="w-full relative h-[85vh] md:h-[100vh] overflow-hidden group">
           <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=2000&q=90" 
              alt="ADORA SS25 — LA Edit"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
           
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
              <span className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.5em] text-white/80 mb-6 animate-fade-in">
                SS25 Collection — Los Angeles
              </span>
              <h1 className="text-[38px] md:text-[72px] lg:text-[96px] font-light uppercase text-white tracking-wide leading-[1.05] mb-10 drop-shadow-2xl">
                The Redefined<br/>Luxury
              </h1>
              <p className="text-[14px] md:text-[16px] text-white/70 font-normal max-w-[500px] leading-relaxed mb-12">
                Effortless, elevated essentials — crafted for the modern Angeleno.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/women" className="h-[52px] px-10 bg-white text-black text-[12px] font-medium uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-all flex items-center justify-center rounded-full shadow-xl">
                  Shop Her
                </Link>
                <Link href="/men" className="h-[52px] px-10 border-2 border-white text-white text-[12px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all flex items-center justify-center rounded-full">
                  Shop Him
                </Link>
              </div>
           </div>
           
           {/* LA Shipping Badge */}
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-medium tracking-wide text-gray-800">Free 2-Day Shipping to Los Angeles</span>
           </div>
        </section>

        {/* ━━━ 2. LA FAVORITES — CURATED FOR THE COAST ━━━ */}
        <section className="w-full py-24 md:py-36 bg-white flex flex-col items-center">
          <div className="w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
             <div className="flex flex-col items-center text-center max-w-[700px] mb-16 md:mb-24">
                <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-6">
                  <Star className="w-3 h-3" /> LA Favorites
                </span>
                <h2 className="text-[30px] md:text-[48px] font-light uppercase tracking-tight leading-none text-gray-900 mb-6">LA Editor&apos;s Edit</h2>
                <p className="text-[15px] text-gray-500 font-normal leading-relaxed max-w-[550px]">
                  Effortless coastal luxe — hand-selected pieces from Venice Beach sunsets to Silver Lake brunch. Organic linens, recycled silks, conscious craft.
                </p>
             </div>
             <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {editorsPicks.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
             </div>
             <div className="mt-14">
                <Link href="/brands" className="flex items-center gap-3 text-[13px] font-medium text-gray-900 hover:text-gray-600 transition-colors group">
                   View All Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </section>

        {/* ━━━ 3. DUAL DEPARTMENT BLOCKS ━━━ */}
        <section className="w-full bg-white flex flex-col items-center">
          <div className="w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Link href="/women" className="relative h-[500px] lg:h-[700px] group overflow-hidden bg-gray-100 rounded-lg">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" alt="Womenswear" className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col">
                  <h3 className="text-white text-[28px] lg:text-[40px] font-light tracking-wide uppercase">Womenswear</h3>
                  <span className="text-white/70 text-[13px] font-medium uppercase tracking-wider mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/men" className="relative h-[500px] lg:h-[700px] group overflow-hidden bg-gray-100 rounded-lg">
                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80" alt="Menswear" className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col">
                  <h3 className="text-white text-[28px] lg:text-[40px] font-light tracking-wide uppercase">Menswear</h3>
                  <span className="text-white/70 text-[13px] font-medium uppercase tracking-wider mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
          </div>
        </section>

        {/* ━━━ 4. SUSTAINABLE STORY — EDITORIAL BANNER ━━━ */}
        <section className="w-full h-[65vh] relative overflow-hidden flex items-center justify-center mt-24 md:mt-36">
           <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" 
              className="absolute inset-0 w-full h-full object-cover brightness-50" 
              alt="Sustainable Craftsmanship"
           />
           <div className="relative z-10 px-8 max-w-[800px] text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 text-[11px] font-medium uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 border border-emerald-400/30">
                <Leaf className="w-3.5 h-3.5" /> Conscious Luxury
              </div>
              <h2 className="text-white text-[28px] md:text-[52px] font-light uppercase tracking-wide leading-tight mb-8">
                A Journey into<br/>Sustainable Craft
              </h2>
              <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-[600px] mx-auto">
                ADORA partners with GOTS-certified mills to bring you 100% sustainable collections — organic cotton, recycled silk, zero-waste packaging.
              </p>
              <Link href="/new-in" className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black text-[13px] font-medium uppercase tracking-wide rounded-full hover:bg-gray-100 transition-all shadow-xl">
                 Explore Sustainable Edit <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </section>

        {/* ━━━ 5. NEW ARRIVALS ━━━ */}
        <section className="w-full py-24 md:py-36 bg-white flex flex-col items-center">
          <div className="w-full max-w-[1400px] px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
               <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gray-400">Fresh Drops</span>
                  <h2 className="text-[32px] md:text-[52px] font-light uppercase tracking-tight leading-none text-gray-900">Just Arrived</h2>
               </div>
               <Link href="/new-in" className="h-[48px] px-8 border border-gray-300 text-gray-900 text-[12px] font-medium uppercase tracking-wide hover:bg-black hover:text-white hover:border-black transition-all rounded-full flex items-center justify-center">
                 View All
               </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
               {newArrivals.map(product => (
                 <ProductCard key={product.id} product={product} />
               ))}
            </div>
          </div>
        </section>

        {/* ━━━ 6. TRUST & SERVICES — LA FOCUSED ━━━ */}
        <section className="w-full py-20 bg-gray-50/80 border-y border-gray-100 flex flex-col items-center">
            <div className="w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
               <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                     <Truck className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                     <h4 className="text-[13px] font-semibold text-gray-900">Free LA Shipping</h4>
                     <p className="text-[12px] text-gray-500 leading-relaxed">2-day express to Los Angeles.<br/>Worldwide in 3-5 days.</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                     <Clock className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                     <h4 className="text-[13px] font-semibold text-gray-900">30-Day Returns</h4>
                     <p className="text-[12px] text-gray-500 leading-relaxed">Hassle-free boutique returns.<br/>Free for LA customers.</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                     <ShieldCheck className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                     <h4 className="text-[13px] font-semibold text-gray-900">Secure Checkout</h4>
                     <p className="text-[12px] text-gray-500 leading-relaxed">PCI-DSS compliant.<br/>Encrypted transactions.</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                     <Leaf className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                     <h4 className="text-[13px] font-semibold text-emerald-700">Carbon Neutral</h4>
                     <p className="text-[12px] text-gray-500 leading-relaxed">Zero-waste packaging.<br/>Certified sustainable.</p>
                  </div>
               </div>
            </div>
        </section>

        {/* ━━━ 7. TESTIMONIAL / SOCIAL PROOF ━━━ */}
        <section className="w-full py-20 md:py-28 bg-white flex flex-col items-center">
          <div className="w-full max-w-[800px] px-6 text-center flex flex-col items-center">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-[20px] md:text-[28px] font-light text-gray-800 leading-relaxed italic mb-8">
              &quot;ADORA&apos;s bombers are my LA uniform — from sunrise coffee in Silver Lake to dinner in West Hollywood. Effortless luxury.&quot;
            </blockquote>
            <cite className="not-italic text-[13px] font-medium text-gray-500 uppercase tracking-wider">
              — @lafashionista, Los Angeles
            </cite>
          </div>
        </section>

        {/* ━━━ 8. ON SALE ━━━ */}
        {saleItems.length > 0 && (
          <section className="w-full py-24 md:py-36 bg-gray-50/50 flex flex-col items-center border-t border-gray-100">
            <div className="w-full max-w-[1400px] px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                 <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-red-500">Limited Time</span>
                    <h2 className="text-[32px] md:text-[52px] font-light uppercase tracking-tight leading-none text-gray-900">On Sale</h2>
                 </div>
                 <Link href="/sale" className="h-[48px] px-8 bg-red-600 text-white text-[12px] font-medium uppercase tracking-wide hover:bg-red-700 transition-all rounded-full flex items-center justify-center shadow-lg">
                   Shop Sale
                 </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                 {saleItems.map(product => (
                   <ProductCard key={product.id} product={product} />
                 ))}
              </div>
            </div>
          </section>
        )}

        {/* ━━━ 9. COMMUNITY SECTION ━━━ */}
        <CommunitySection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
