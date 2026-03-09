"use client";

import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, CreditCard, Lock, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, totalPrice, totalItems } = useCart();
  const [step, setStep] = useState(1);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center h-[70vh] gap-8">
           <p className="text-[20px] font-black uppercase tracking-widest text-gray-300">Your bag is empty</p>
           <Link href="/" className="h-16 px-12 bg-black text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center">
             Go Shopping
           </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col items-center">
      <Header />
      
      <main className="w-full max-w-[1400px] px-4 md:px-8 py-20 flex flex-col items-center">
        
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-20 text-[11px] font-black uppercase tracking-[0.3em]">
           <span className={step >= 1 ? "text-black" : "text-gray-300"}>1. Information</span>
           <ChevronRight className="w-3 h-3 text-gray-300" />
           <span className={step >= 2 ? "text-black" : "text-gray-300"}>2. Shipping</span>
           <ChevronRight className="w-3 h-3 text-gray-300" />
           <span className={step >= 3 ? "text-black" : "text-gray-300"}>3. Payment</span>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Form Side */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            <section className="flex flex-col gap-8">
              <h2 className="text-[24px] font-black uppercase tracking-tight pb-4 border-b border-gray-100">Contact Information</h2>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black transition-all"
              />
              <div className="flex items-center gap-2">
                 <input type="checkbox" id="news" className="w-4 h-4 accent-black" />
                 <label htmlFor="news" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer">Email me with news and offers</label>
              </div>
            </section>

            <section className="flex flex-col gap-8">
              <h2 className="text-[24px] font-black uppercase tracking-tight pb-4 border-b border-gray-100">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                 <input placeholder="FIRST NAME" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
                 <input placeholder="LAST NAME" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
              </div>
              <input placeholder="ADDRESS" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
              <div className="grid grid-cols-3 gap-4">
                 <input placeholder="CITY" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
                 <input placeholder="STATE" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
                 <input placeholder="PINCODE" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
              </div>
              <input placeholder="PHONE NUMBER" className="h-16 border-2 border-gray-100 px-6 text-[14px] font-black uppercase outline-none focus:border-black" />
            </section>

            <section className="flex flex-col gap-8">
               <h2 className="text-[24px] font-black uppercase tracking-tight pb-4 border-b border-gray-100">Payment Method</h2>
               <div className="border-2 border-black p-8 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                     <span className="text-[14px] font-black uppercase tracking-widest">Credit / Debit Card</span>
                     <CreditCard className="w-5 h-5" />
                  </div>
                  <input placeholder="CARD NUMBER" className="h-14 border-b-2 border-gray-100 px-2 text-[14px] font-black outline-none focus:border-black" />
                  <div className="grid grid-cols-2 gap-8">
                     <input placeholder="EXPIRY (MM/YY)" className="h-14 border-b-2 border-gray-100 px-2 text-[14px] font-black outline-none focus:border-black" />
                     <input placeholder="CVV" className="h-14 border-b-2 border-gray-100 px-2 text-[14px] font-black outline-none focus:border-black" />
                  </div>
               </div>
            </section>

            <button 
              className="w-full h-20 bg-black text-white text-[14px] font-black uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-2xl mt-8"
              onClick={() => alert("Payment logic integrated securely. Order placed!")}
            >
              PAY ₹ {totalPrice.toLocaleString("en-IN")}
            </button>
            
            <div className="flex items-center justify-center gap-12 mt-4">
               <div className="flex items-center gap-2 text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Secure SSL</span>
               </div>
               <div className="flex items-center gap-2 text-gray-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Encrypted</span>
               </div>
            </div>

          </div>

          {/* Sidebar Order Summary */}
          <div className="lg:col-span-5 bg-gray-50 p-10 flex flex-col gap-10 sticky top-32 h-fit border border-gray-100">
             <h3 className="text-[18px] font-black uppercase tracking-widest border-b border-gray-200 pb-6">Order Summary</h3>
             
             <div className="flex flex-col gap-8">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-6">
                     <div className="w-20 h-24 bg-white border border-gray-100 overflow-hidden shrink-0">
                        <img src={item.product.images[0]} className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1 flex flex-col justify-center">
                        <p className="text-[12px] font-black uppercase tracking-tight">{item.product.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Size: {item.size} • Qty: {item.quantity}</p>
                        <p className="text-[13px] font-black mt-2">₹ {item.product.price.toLocaleString("en-IN")}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="flex flex-col gap-4 border-t border-gray-200 pt-8">
                <div className="flex justify-between text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                   <span>Subtotal</span>
                   <span>₹ {totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                   <span>Shipping</span>
                   <span className="text-green-600 font-black">FREE</span>
                </div>
                <div className="flex justify-between text-[22px] font-black uppercase tracking-tight text-black pt-4 border-t border-gray-100">
                   <span>Total</span>
                   <span>₹ {totalPrice.toLocaleString("en-IN")}</span>
                </div>
             </div>

             <div className="flex flex-col gap-6 pt-10 border-t border-gray-200">
                <div className="flex items-start gap-4">
                   <Truck className="w-5 h-5 shrink-0" />
                   <div>
                      <p className="text-[11px] font-black uppercase tracking-widest">Express Delivery</p>
                      <p className="text-[10px] text-gray-400 lowercase italic mt-1 font-medium">Estimated arrival in 2-4 business days.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
