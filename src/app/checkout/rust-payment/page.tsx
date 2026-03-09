import React from "react";
import { RustCheckoutButton } from "@/components/RustCheckoutButton";
import { ShieldCheck, ArrowLeft, Gem } from "lucide-react";
import Link from "next/link";

/**
 * ADORA - Rust Checkout Bridge Example
 * Demonstrates an Axum-powered backend handling Stripe session creation
 */
export default function RustCheckoutDemo() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center py-20 px-6 font-sans">
      <div className="w-full max-w-[500px] bg-black rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100 flex flex-col items-center text-center">
        
        {/* Adora Branded Header */}
        <Link href="/" className="mb-10 text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-light uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Go back
        </Link>

        {/* Product Card Placeholder */}
        <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative">
           <Gem className="w-12 h-12 text-zinc-900" />
           <div className="absolute -top-3 -right-3 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
             <ShieldCheck className="w-5 h-5" />
           </div>
        </div>

        <h1 className="text-[24px] font-light lowercase tracking-tight text-gray-900 mb-2 first-letter:uppercase italic">
          Sage Olive Bomber Jacket
        </h1>
        <p className="text-[12px] text-gray-400 mb-10 uppercase tracking-[0.2em] font-normal">
          Premium Italian Lambskin — $31.00
        </p>

        {/* The Component Bridging Next.js -> Rust/Axum Backend */}
        <div className="w-full mb-10">
           <RustCheckoutButton 
             productName="Sage Olive Bomber Jacket" 
             priceCents={3100} // $31.00 
           />
        </div>

        {/* Rust Security Banner */}
        <div className="flex flex-col gap-3 w-full border-t border-gray-50 pt-8 mt-4">
            <div className="flex items-center gap-4 text-left">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-[11px] font-light uppercase tracking-wider text-gray-900">
                     Powered by Rust (Axum)
                   </h3>
                   <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">
                     Secure, memory-safe backend handling all sensitive payment intents and webhook verification.
                   </p>
                </div>
            </div>
            
            <div className="flex items-center gap-4 text-left">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Gem className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-[11px] font-light uppercase tracking-wider text-gray-900">
                     Stripe Checkout Flow
                   </h3>
                   <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">
                     PCI-compliant frontend using Stripe Elements for card inputs, expiry, and CVC handling.
                   </p>
                </div>
            </div>
        </div>
      </div>

      <p className="mt-12 text-[10px] text-gray-300 font-light uppercase tracking-[0.3em]">
        ADORA — Effortless Luxury & Performance
      </p>
    </div>
  );
}
