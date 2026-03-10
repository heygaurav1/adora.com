"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { CommunitySection } from "@/components/CommunitySection";
import { PRODUCTS } from "@/data";
import Link from "next/link";
import { ChevronRight, Globe, ShieldCheck, Truck, ArrowRight, Star, Leaf, Clock, Gem } from "lucide-react";

export default function Home() {
  const editorsPicks = PRODUCTS.filter(p => ["PREMIUM", "EXCLUSIVE", "ECO"].includes(p.tag || "")).slice(0, 4).length >= 4
    ? PRODUCTS.filter(p => ["PREMIUM", "EXCLUSIVE", "ECO"].includes(p.tag || "")).slice(0, 4)
    : PRODUCTS.filter(p => p.oldPrice).slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => ["NEW ARRIVAL", "TRENDING", "HOT"].includes(p.tag || "")).slice(0, 4);
  const saleItems = PRODUCTS.filter(p => p.tag === "SALE" || (p.oldPrice && p.oldPrice > p.price)).slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden flex flex-col items-center">
      <Header />
      <CartDrawer />

      <main id="main-content" className="w-full flex flex-col items-center">
        
        {/* ━━━ 1. CINEMATIC HERO — LA LIFESTYLE IMAGERY ━━━ */}
        <section className="w-full relative h-[85vh] md:h-[100vh] overflow-hidden group border-b border-zinc-900">
           <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=2000&q=90" 
              alt="ADORA SS25 — LA Edit"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105 opacity-80"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
           
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
              <span className="text-[11px] md:text-[13px] font-normal uppercase tracking-[0.6em] text-white/60 mb-6 animate-fade-in">
                SS25 Collection — Los Angeles
              </span>
              <h1 className="text-[38px] md:text-[72px] lg:text-[96px] font-extralight uppercase text-white tracking-widest leading-[1.05] mb-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                The Redefined<br/>Luxury
              </h1>
              <p className="text-[14px] md:text-[16px] text-white/50 font-light max-w-[500px] leading-relaxed mb-12 tracking-wide">
                Effortless, elevated essentials — crafted for the modern Angeleno.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/women" className="h-[52px] px-10 bg-black text-white text-[12px] font-normal uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center rounded-full shadow-2xl">
                  Shop Her
                </Link>
                <Link href="/men" className="h-[52px] px-10 border border-white/20 text-white text-[12px] font-normal uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all flex items-center justify-center rounded-full">
                  Shop Him
                </Link>
              </div>
           </div>
           
           {/* LA Shipping Badge */}
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-normal tracking-[0.1em] text-white/70 uppercase">Free 2-Day Shipping to Los Angeles</span>
           </div>
        </section>

        {/* ━━━ 2. LA FAVORITES — CURATED FOR THE COAST ━━━ */}
        <section className="w-full py-24 md:py-36 bg-black flex flex-col items-center">
          <div className="w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
             <div className="flex flex-col items-center text-center max-w-[700px] mb-16 md:mb-24">
                <span className="inline-flex items-center gap-2 text-[10px] font-normal uppercase tracking-[0.4em] text-amber-500 bg-amber-500/5 px-4 py-1.5 rounded-full border border-amber-500/20 mb-6">
                  <Star className="w-3 h-3" /> LA Favorites
                </span>
                <h2 className="text-[30px] md:text-[48px] font-extralight uppercase tracking-[0.1em] leading-none text-white mb-6">LA Editor&apos;s Edit</h2>
                <p className="text-[14px] text-white/40 font-light leading-relaxed max-w-[550px] tracking-wide">
                  Effortless coastal luxe — hand-selected pieces from Venice Beach sunsets to Silver Lake brunch. Organic linens, recycled silks, conscious craft.
                </p>
             </div>
             <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {editorsPicks.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
             </div>
             <div className="mt-20">
                <Link href="/brands" className="flex items-center gap-3 text-[12px] font-normal text-white/60 hover:text-white uppercase tracking-[0.3em] transition-all group">
                   View All Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </section>

        {/* ━━━ 3. DUAL DEPARTMENT BLOCKS ━━━ */}
        <section className="w-full bg-black flex flex-col items-center py-10">
          <div className="w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Link href="/women" className="relative h-[500px] lg:h-[700px] group overflow-hidden bg-zinc-900 rounded-2xl border border-white/5">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" alt="Womenswear" className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col">
                  <h3 className="text-white text-[28px] lg:text-[40px] font-extralight tracking-widest uppercase">Womenswear</h3>
                  <span className="text-white/50 text-[11px] font-normal uppercase tracking-[0.3em] mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/men" className="relative h-[500px] lg:h-[700px] group overflow-hidden bg-zinc-900 rounded-2xl border border-white/5">
                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80" alt="Menswear" className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col">
                  <h3 className="text-white text-[28px] lg:text-[40px] font-extralight tracking-widest uppercase">Menswear</h3>
                  <span className="text-white/50 text-[11px] font-normal uppercase tracking-[0.3em] mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
          </div>
        </section>

        {/* ━━━ 4. SUSTAINABLE STORY — EDITORIAL BANNER ━━━ */}
        <section className="w-full h-[75vh] relative overflow-hidden flex items-center justify-center mt-24 md:mt-36">
           <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" 
              className="absolute inset-0 w-full h-full object-cover brightness-50 grayscale-[0.3]" 
              alt="Sustainable Craftsmanship"
           />
           <div className="absolute inset-0 bg-black/60" />
           <div className="relative z-10 px-8 max-w-[800px] text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-[10px] font-normal uppercase tracking-[0.4em] px-6 py-2.5 rounded-full mb-10 border border-emerald-500/20">
                <Leaf className="w-3.5 h-3.5" /> Conscious Luxury
              </div>
              <h2 className="text-white text-[28px] md:text-[56px] font-extralight uppercase tracking-[0.2em] leading-tight mb-8">
                A Journey into<br/>Sustainable Craft
              </h2>
              <p className="text-white/50 text-[14px] md:text-[15px] leading-relaxed mb-12 max-w-[600px] mx-auto font-light tracking-wide">
                ADORA partners with GOTS-certified mills to bring you 100% sustainable collections — organic cotton, recycled silk, zero-waste packaging.
              </p>
              <Link href="/new-in" className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white text-[12px] font-normal uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all shadow-2xl">
                 Explore Sustainable Edit <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </section>

        {/* ━━━ 5. NEW ARRIVALS ━━━ */}
        <section className="w-full py-24 md:py-36 bg-black flex flex-col items-center">
          <div className="w-full max-w-[1400px] px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
               <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-normal uppercase tracking-[0.4em] text-white/40">Fresh Drops</span>
                  <h2 className="text-[32px] md:text-[52px] font-extralight uppercase tracking-[0.1em] leading-none text-white">Just Arrived</h2>
               </div>
               <Link href="/new-in" className="h-[48px] px-10 border border-white/10 text-white/60 text-[11px] font-normal uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-white transition-all rounded-full flex items-center justify-center">
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
        <section className="w-full py-24 bg-zinc-950/50 border-y border-white/5 flex flex-col items-center">
            <div className="w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
               <div className="flex flex-col items-center text-center gap-5 group">
                  <div className="w-14 h-14 bg-black/5 border border-white/5 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-black/10 transition-all duration-500">
                     <Truck className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                     <h4 className="text-[12px] font-normal text-white uppercase tracking-[0.3em]">Free LA Shipping</h4>
                     <p className="text-[11px] text-white/30 leading-relaxed font-light tracking-wide">2-day express to Los Angeles.<br/>Worldwide in 3-5 days.</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-5 group">
                  <div className="w-14 h-14 bg-black/5 border border-white/5 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-black/10 transition-all duration-500">
                     <Clock className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                     <h4 className="text-[12px] font-normal text-white uppercase tracking-[0.3em]">30-Day Returns</h4>
                     <p className="text-[11px] text-white/30 leading-relaxed font-light tracking-wide">Hassle-free boutique returns.<br/>Free for LA customers.</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-5 group">
                  <div className="w-14 h-14 bg-black/5 border border-white/5 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-black/10 transition-all duration-500">
                     <ShieldCheck className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                     <h4 className="text-[12px] font-normal text-white uppercase tracking-[0.3em]">Secure Checkout</h4>
                     <p className="text-[11px] text-white/30 leading-relaxed font-light tracking-wide">PCI-DSS compliant.<br/>Encrypted transactions.</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-6 group">
                  <div className="w-14 h-14 bg-black/5 border border-white/5 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-black/10 transition-all duration-500">
                     <Gem className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                     <h4 className="text-[12px] font-normal text-white uppercase tracking-[0.4em] leading-none">Rust Powered</h4>
                     <p className="text-[10px] text-white/30 leading-relaxed max-w-[180px] mt-2 mb-3 tracking-wide">Secure, memory-safe backend handling sensitive payment intents.</p>
                     <Link href="/checkout/rust-payment" className="text-white/60 text-[9px] font-normal uppercase tracking-[0.4em] border-b border-white/10 pb-0.5 hover:border-white hover:text-white transition-all">
                        Test Bridge →
                     </Link>
                  </div>
               </div>
            </div>
        </section>

        {/* ━━━ 7. TESTIMONIAL / SOCIAL PROOF ━━━ */}
        <section className="w-full py-24 md:py-36 bg-black flex flex-col items-center border-b border-white/5">
          <div className="w-full max-w-[800px] px-6 text-center flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-10 opacity-60">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-[22px] md:text-[34px] font-extralight text-white leading-relaxed italic mb-10 tracking-wide drop-shadow-sm">
              &quot;ADORA&apos;s bombers are my LA uniform — from Silver Lake to West Hollywood. Effortless, dark luxury.&quot;
            </blockquote>
            <cite className="not-italic text-[11px] font-normal text-white/40 uppercase tracking-[0.5em]">
              — @lafashionista, Los Angeles
            </cite>
          </div>
        </section>

        {/* ━━━ 8. ON SALE ━━━ */}
        {saleItems.length > 0 && (
          <section className="w-full py-24 md:py-36 bg-zinc-950/30 flex flex-col items-center">
            <div className="w-full max-w-[1400px] px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-normal uppercase tracking-[0.4em] text-red-500">Limited Time</span>
                    <h2 className="text-[32px] md:text-[52px] font-extralight uppercase tracking-[0.1em] leading-none text-white">On Sale</h2>
                 </div>
                 <Link href="/sale" className="h-[48px] px-10 bg-red-600/90 text-white text-[11px] font-normal uppercase tracking-[0.2em] hover:bg-red-600 transition-all rounded-full flex items-center justify-center shadow-2xl">
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
        <div className="bg-black w-full py-10">
           <CommunitySection />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

