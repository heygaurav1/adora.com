"use client";

import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      
      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Shipping & Info */}
          <div className="flex-1 space-y-12">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-8 border-b pb-4">1. Contact Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-8 border-b pb-4">2. Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm md:col-span-2"
                />
                <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm md:col-span-2"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"
                />
                <select className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm bg-transparent">
                  <option>Poland</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-8 border-b pb-4">3. Payment Methods</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black cursor-pointer transition-colors group">
                  <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight">Credit Card</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black cursor-pointer transition-colors group">
                  <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black opacity-0" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight">PayPal</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[400px] space-y-8">
            <div className="bg-[#F8F8F8] p-8 space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b pb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-20 h-24 bg-white border border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" 
                      alt="Product" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-[11px] uppercase tracking-tight">
                    <p className="font-bold">Marathon Dip-Dye Runner</p>
                    <p className="text-gray-500">Belgian Block / EU 42</p>
                    <p className="mt-2 font-bold">445 EUR</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 space-y-2 text-[11px] uppercase tracking-widest font-bold">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>445 EUR</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-base border-t border-gray-200 pt-4 mt-4">
                  <span>Total</span>
                  <span>445 EUR</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                Place Order
              </button>

              <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-tight">
                By clicking "Place Order", you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
