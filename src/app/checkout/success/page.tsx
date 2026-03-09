"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, ShoppingBag, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OrderSuccessPage() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a premium-looking order number
    const random = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`ADR-${random}`);
    
    // Smooth scroll to top on enter
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />

      <main className="flex-1 w-full max-w-[800px] px-8 py-24 md:py-40 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center mb-8 mx-auto border border-white/10">
            <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={1} />
          </div>
          
          <span className="text-[11px] font-light uppercase tracking-[0.5em] text-zinc-500 mb-4 block">Order Confirmed</span>
          <h1 className="text-[32px] md:text-[56px] font-extralight uppercase tracking-tight leading-tight text-white mb-6">
            Thank you for your <br /> choice, Excellence.
          </h1>
          <p className="text-[14px] text-zinc-400 font-light max-w-[500px] mx-auto leading-relaxed">
            Your piece is being prepared for fulfillment in our Los Angeles studio. 
            A confirmation email with your digital invoice has been dispatched.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          <div className="bg-zinc-950 border border-white/5 p-8 rounded-2xl text-left flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-light">Order Reference</span>
            <span className="text-[18px] font-normal tracking-wider text-white">{orderNumber}</span>
          </div>
          <div className="bg-zinc-950 border border-white/5 p-8 rounded-2xl text-left flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-light">Estimated Arrival</span>
            <span className="text-[18px] font-normal tracking-wider text-white">2-3 Business Days</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-[500px]">
          <Link 
            href="/" 
            className="w-full h-16 bg-black text-white text-[12px] font-normal uppercase tracking-[0.3em] flex items-center justify-center group hover:bg-zinc-200 transition-all rounded-full"
          >
            Continue Browsing
            <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            href="/account/orders" 
            className="w-full h-16 border border-white/10 text-white text-[12px] font-light uppercase tracking-[0.3em] flex items-center justify-center hover:bg-black/5 transition-all rounded-full"
          >
            Manage Orders
          </Link>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 w-full flex flex-col items-center gap-8">
           <div className="flex items-center gap-12 text-zinc-600">
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-5 h-5" strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-widest">Global Express</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShoppingBag className="w-5 h-5" strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-widest">Secure Checkout</span>
              </div>
           </div>
           <p className="text-[10px] text-zinc-700 italic font-light tracking-wide">
             Need assistance? Reach our concierge at support@adora.com
           </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}

