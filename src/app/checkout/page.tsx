"use client";

import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, CreditCard, Lock, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, CreditCard, Lock, ShieldCheck, Truck, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="flex flex-col items-center justify-center h-[70vh] gap-10">
           <ShoppingBag className="w-16 h-16 text-zinc-900" strokeWidth={1} />
           <p className="text-[14px] font-extralight uppercase tracking-[0.5em] text-zinc-600 italic">Your bag is weightless</p>
           <Link href="/" className="h-14 px-12 bg-black text-white text-[11px] font-normal uppercase tracking-[0.3em] flex items-center justify-center hover:bg-zinc-200 transition-all">
             Begin Selection
           </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col items-center">
      <Header />
      
      <main className="w-full max-w-[1400px] px-6 md:px-12 py-20 flex flex-col items-center">
        
        {/* Progress Bar */}
        <div className="flex items-center gap-6 mb-24 text-[10px] font-light uppercase tracking-[0.4em]">
           <span className={step >= 1 ? "text-white" : "text-zinc-700"}>01 Identification</span>
           <ChevronRight className="w-3 h-3 text-zinc-800" />
           <span className={step >= 2 ? "text-white" : "text-zinc-700"}>02 Logistics</span>
           <ChevronRight className="w-3 h-3 text-zinc-800" />
           <span className={step >= 3 ? "text-white" : "text-zinc-700"}>03 Payment</span>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Form Side */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Express Checkout */}
            <section className="flex flex-col gap-8 bg-zinc-900/30 p-10 border border-white/5 rounded-2xl">
              <h2 className="text-[10px] font-light text-zinc-600 uppercase tracking-[0.4em] text-center mb-4 italic">Express Direct Access</h2>
              <div className="grid grid-cols-2 gap-6">
                 <button className="h-16 bg-black text-white rounded-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all group">
                    <span className="text-[14px] font-normal tracking-wider">Apple Pay</span>
                 </button>
                 <button className="h-16 bg-zinc-900 text-white border border-white/10 rounded-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all">
                    <span className="text-[14px] font-normal tracking-wider">Google Pay</span>
                 </button>
              </div>
              <div className="flex items-center gap-8 my-4">
                 <div className="h-px flex-1 bg-black/5"></div>
                 <span className="text-[9px] font-light text-zinc-700 uppercase tracking-[0.5em]">Selective Billing</span>
                 <div className="h-px flex-1 bg-black/5"></div>
              </div>
            </section>

            <section className="flex flex-col gap-10">
              <h2 className="text-[20px] font-extralight uppercase tracking-[0.2em] pb-6 border-b border-white/5">Recipient Details</h2>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800"
              />
              <div className="flex items-center gap-3">
                 <input type="checkbox" id="news" className="w-3.5 h-3.5 accent-white opacity-40 cursor-pointer" />
                 <label htmlFor="news" className="text-[10px] font-light text-zinc-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Subscribe to the ADORA Private List</label>
              </div>
            </section>

            <section className="flex flex-col gap-10">
              <h2 className="text-[20px] font-extralight uppercase tracking-[0.2em] pb-6 border-b border-white/5">Boutique Delivery</h2>
              <div className="grid grid-cols-2 gap-8">
                 <input placeholder="FIRST NAME" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
                 <input placeholder="LAST NAME" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
              </div>
              <input placeholder="STREET ADDRESS" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
              <div className="grid grid-cols-3 gap-8">
                 <input placeholder="CITY" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
                 <input placeholder="STATE" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
                 <input placeholder="PIN" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
              </div>
              <input placeholder="CONTACT NUMBER" className="h-16 bg-transparent border-b border-white/10 text-[13px] font-light uppercase tracking-[0.2em] outline-none focus:border-white transition-all placeholder:text-zinc-800" />
            </section>

            <section className="flex flex-col gap-10">
               <h2 className="text-[20px] font-extralight uppercase tracking-[0.2em] pb-6 border-b border-white/5">Payment Concierge</h2>
               <div className="flex flex-col gap-6">
                 <div 
                   onClick={() => setPaymentMethod("card")}
                   className={`p-10 flex flex-col gap-8 cursor-pointer transition-all border rounded-2xl ${paymentMethod === "card" ? "border-white bg-black/5" : "border-white/5 hover:border-white/20"}`}
                 >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-6">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${paymentMethod === "card" ? "border-white" : "border-zinc-800"}`}>
                             {paymentMethod === "card" && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                          </div>
                          <span className="text-[13px] font-normal uppercase tracking-[0.3em]">Direct Card Access</span>
                       </div>
                       <CreditCard className="w-5 h-5 text-zinc-500" strokeWidth={1} />
                    </div>
                    {paymentMethod === "card" && (
                      <div className="flex flex-col gap-8 mt-4 animate-in fade-in slide-in-from-top-4 duration-500">
                        <input placeholder="CARD NUMBER" className="h-14 bg-transparent border-b border-white/10 text-[13px] font-light outline-none focus:border-white transition-all placeholder:text-zinc-800" />
                        <div className="grid grid-cols-2 gap-12">
                           <input placeholder="MM / YY" className="h-14 bg-transparent border-b border-white/10 text-[13px] font-light outline-none focus:border-white transition-all placeholder:text-zinc-800" />
                           <input placeholder="SECURITY CODE" className="h-14 bg-transparent border-b border-white/10 text-[13px] font-light outline-none focus:border-white transition-all placeholder:text-zinc-800" />
                        </div>
                      </div>
                    )}
                 </div>

                 <div 
                   onClick={() => setPaymentMethod("cod")}
                   className={`p-10 flex flex-col gap-8 cursor-pointer transition-all border rounded-2xl ${paymentMethod === "cod" ? "border-white bg-black/5" : "border-white/5 hover:border-white/20"}`}
                 >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-6">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${paymentMethod === "cod" ? "border-white" : "border-zinc-800"}`}>
                             {paymentMethod === "cod" && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                          </div>
                          <span className="text-[13px] font-normal uppercase tracking-[0.3em]">Handoff Payment (COD)</span>
                       </div>
                       <Truck className="w-5 h-5 text-zinc-500" strokeWidth={1} />
                    </div>
                    {paymentMethod === "cod" && (
                       <p className="text-[11px] text-zinc-600 italic font-light tracking-wide mt-2 animate-in fade-in duration-500">
                         Finalize payment upon arrival at your Los Angeles residence.
                       </p>
                    )}
                 </div>
               </div>
            </section>

            <div className="flex flex-col gap-8 mt-8">
              <button 
                disabled={isProcessing}
                className="w-full h-20 bg-black text-white text-[12px] font-normal uppercase tracking-[0.5em] hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center"
                onClick={handlePlaceOrder}
              >
                {isProcessing ? "SECURELY PROCESSING..." : (paymentMethod === "cod" ? "FINALIZE ORDER" : `AUTHORIZE $ ${(totalPrice/85).toFixed(2)}`)}
              </button>
              
              <div className="flex items-center justify-center gap-12">
                 <div className="flex items-center gap-2 text-zinc-700">
                    <Lock className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-light uppercase tracking-[0.3em]">Encrypted Session</span>
                 </div>
                 <div className="flex items-center gap-2 text-zinc-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-light uppercase tracking-[0.3em]">Secure Architecture</span>
                 </div>
              </div>
            </div>

          </div>

          {/* Sidebar Order Summary */}
          <div className="lg:col-span-5 flex flex-col gap-10 sticky top-32 h-fit mb-24">
             <div className="bg-zinc-950 p-10 border border-white/5 rounded-2xl">
                <h3 className="text-[14px] font-light uppercase tracking-[0.4em] mb-10 text-zinc-500 italic">Review Your Selection</h3>
                
                <div className="flex flex-col gap-10">
                   {items.map(item => (
                     <div key={item.product.id} className="flex gap-8">
                        <div className="w-24 h-32 bg-zinc-900 overflow-hidden shrink-0 rounded-lg border border-white/5">
                           <img src={item.product.images[0]} className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                           <p className="text-[13px] font-light uppercase tracking-wider text-white">{item.product.name}</p>
                           <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mt-2">Size: {item.size} • Qty: {item.quantity}</p>
                           <p className="text-[14px] font-light mt-4 text-white/80">$ {(item.product.price/85).toFixed(2)}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="flex flex-col gap-6 border-t border-white/5 pt-10 mt-10">
                   <div className="flex justify-between text-[11px] font-light text-zinc-600 uppercase tracking-[0.3em]">
                      <span>Subtotal</span>
                      <span>$ {(totalPrice/85).toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between text-[11px] font-light text-zinc-600 uppercase tracking-[0.3em]">
                      <span>Logistics</span>
                      <span className="text-zinc-400">Complimentary</span>
                   </div>
                   <div className="flex justify-between text-[26px] font-extralight uppercase tracking-tight text-white pt-8 border-t border-white/5 mt-4">
                      <span>Grand Total</span>
                      <span>$ {(totalPrice/85).toFixed(2)}</span>
                   </div>
                </div>

                <div className="mt-12 p-6 bg-black/5 rounded-xl flex items-start gap-5">
                   <Truck className="w-5 h-5 text-zinc-500 mt-1" strokeWidth={1} />
                   <div>
                      <p className="text-[11px] font-normal uppercase tracking-widest text-white">Priority Delivery</p>
                      <p className="text-[10px] text-zinc-600 italic mt-1 font-light leading-relaxed">Anticipated arrival at your destination within 48 to 72 hours.</p>
                   </div>
                </div>
             </div>

             <Link href="/cart" className="flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.4em] text-zinc-600 hover:text-white transition-all pl-2">
                <ArrowLeft className="w-3 h-3" />
                Return to Selection
             </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

