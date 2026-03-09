"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

const SHOP = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "New Arrivals", href: "/new-in" },
  { label: "Sustainable Edit", href: "/sustainable" },
  { label: "Sale", href: "/sale" },
];

const CUSTOMER_SERVICE = [
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQs", href: "/faqs" },
  { label: "Track Your Order", href: "/orders" },
];

const BRAND = [
  { label: "Our Story", href: "/about" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 pt-32 pb-16 flex flex-col items-center">
      <div className="w-full max-w-[1500px] px-6 md:px-12">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 border-b border-white/5 pb-32">
           <div className="flex flex-col gap-8 max-w-[500px]">
              <h3 className="text-[28px] font-extralight tracking-[0.4em] uppercase text-white">ADORA</h3>
              <p className="text-[13px] text-zinc-500 font-light leading-relaxed uppercase tracking-[0.15em]">
                Redefining the essence of modern luxury through sustainable craftsmanship and timeless design. Join our global community of conscious connoisseurs.
              </p>
              <div className="flex items-center gap-8 mt-4 text-zinc-600">
                 <Link href="#" className="hover:text-white transition-all"><Instagram className="w-5 h-5" strokeWidth={1} /></Link>
                 <Link href="#" className="hover:text-white transition-all"><Twitter className="w-5 h-5" strokeWidth={1} /></Link>
                 <Link href="#" className="hover:text-white transition-all"><Facebook className="w-5 h-5" strokeWidth={1} /></Link>
              </div>
           </div>

           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-normal uppercase tracking-[0.5em] text-zinc-400">The Editorial List</h4>
              <p className="text-[13px] text-zinc-500 uppercase tracking-widest leading-relaxed italic font-light">
                 Subscribe to receive early access to new collections and exclusive editorial content from our LA studio.
              </p>
              <div className="relative max-w-[450px]">
                 <input 
                    type="email" 
                    placeholder="ENTER EMAIL ADDRESS" 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-[11px] font-light tracking-[0.3em] outline-none placeholder:text-zinc-800 text-white focus:border-white transition-all"
                 />
                 <button className="absolute right-0 top-1/2 -translate-y-1/2 group">
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
                 </button>
              </div>
           </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-32">
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-normal uppercase tracking-[0.3em] text-zinc-400">Discover</h4>
            <ul className="flex flex-col gap-4">
              {SHOP.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-zinc-600 hover:text-white transition-all font-light tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-normal uppercase tracking-[0.3em] text-zinc-400">Assistance</h4>
            <ul className="flex flex-col gap-4">
              {CUSTOMER_SERVICE.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-zinc-600 hover:text-white transition-all font-light tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-normal uppercase tracking-[0.3em] text-zinc-400">The House</h4>
            <ul className="flex flex-col gap-4">
              {BRAND.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-zinc-600 hover:text-white transition-all font-light tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-normal uppercase tracking-[0.3em] text-zinc-400">Residency</h4>
            <div className="flex flex-col gap-4">
               <p className="text-[13px] text-zinc-500 font-light tracking-wide">United States (USD $)</p>
               <Link href="#" className="text-[10px] font-normal uppercase tracking-[0.4em] text-white/40 border-b border-white/10 pb-1 self-start hover:text-white hover:border-white transition-all">
                  Change Language
               </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Compliance & Payments */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-16">
          <p className="text-[9px] text-zinc-700 uppercase tracking-[0.5em] font-light">
            © 2026 ADORA GLOBAL • LOS ANGELES EDITION
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-20 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <span className="text-[9px] font-light tracking-[0.4em] text-white">VISA</span>
            <span className="text-[9px] font-light tracking-[0.4em] text-white">MASTERCARD</span>
            <span className="text-[9px] font-light tracking-[0.4em] text-white">AMEX</span>
            <span className="text-[9px] font-light tracking-[0.4em] text-white">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
