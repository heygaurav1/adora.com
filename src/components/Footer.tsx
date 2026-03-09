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
    <footer className="w-full bg-white border-t border-gray-50 pt-32 pb-16 flex flex-col items-center">
      <div className="w-full max-w-[1500px] px-6 md:px-12">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 border-b border-gray-50 pb-32">
           <div className="flex flex-col gap-8 max-w-[500px]">
              <h3 className="text-[28px] font-normal tracking-[0.2em] uppercase">ADORA</h3>
              <p className="text-[14px] text-gray-400 font-medium leading-relaxed uppercase tracking-wider">
                Redefining the essence of modern luxury through sustainable craftsmanship and timeless design. Join our global community of conscious connoisseurs.
              </p>
              <div className="flex items-center gap-6 mt-4">
                 <Link href="#" className="hover:opacity-40 transition-all"><Instagram className="w-5 h-5" /></Link>
                 <Link href="#" className="hover:opacity-40 transition-all"><Twitter className="w-5 h-5" /></Link>
                 <Link href="#" className="hover:opacity-40 transition-all"><Facebook className="w-5 h-5" /></Link>
              </div>
           </div>

           <div className="flex flex-col gap-8">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-black">Newsletter</h4>
              <p className="text-[13px] text-gray-400 uppercase tracking-widest leading-relaxed italic">
                 Subscribe to receive early access to new collections and exclusive editorial content.
              </p>
              <div className="relative max-w-[450px]">
                 <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-transparent border-b border-black py-4 text-[12px] font-normal tracking-widest outline-none placeholder:text-gray-200"
                 />
                 <button className="absolute right-0 top-1/2 -translate-y-1/2 group">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Shop</h4>
            <ul className="flex flex-col gap-4">
              {SHOP.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-gray-400 hover:text-black transition-all font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Assistance</h4>
            <ul className="flex flex-col gap-4">
              {CUSTOMER_SERVICE.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-gray-400 hover:text-black transition-all font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">The House</h4>
            <ul className="flex flex-col gap-4">
              {BRAND.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-gray-400 hover:text-black transition-all font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Location</h4>
            <div className="flex flex-col gap-4">
               <p className="text-[14px] text-gray-400 font-normal">India (INR ₹)</p>
               <Link href="#" className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 self-start">
                  Change Language
               </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Compliance & Payments */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-50 pt-16">
          <p className="text-[10px] text-gray-300 uppercase tracking-[0.3em] font-medium">
            © 2026 ADORA GLOBAL • ALL RIGHTS RESERVED
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-30 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-medium tracking-widest">VISA</span>
            <span className="text-[10px] font-medium tracking-widest">MASTERCARD</span>
            <span className="text-[10px] font-medium tracking-widest">AMEX</span>
            <span className="text-[10px] font-medium tracking-widest">UPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
