"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      <CartDrawer />
      <main className="w-full max-w-[1400px] px-8 py-40 flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-10 shadow-inner">
           <ShoppingBag className="w-12 h-12 text-gray-200" strokeWidth={1.5} />
        </div>
        <h1 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight mb-4">My Dashboard</h1>
        <p className="text-[13px] text-gray-400 mb-12 max-w-md uppercase tracking-widest font-medium">
          You haven't placed any luxury orders yet. Discover our new arrivals to start your journey.
        </p>
        <Link 
          href="/"
          className="h-18 px-16 bg-black text-white text-[13px] font-black uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center"
        >
          EXPLORE THE EDIT
        </Link>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
