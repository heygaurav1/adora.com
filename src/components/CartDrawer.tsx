"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CartDrawer() {
  const { isOpen, closeCart, items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-[200] transition-opacity backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-[201] shadow-2xl animate-slide-in-right flex flex-col font-sans">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-white">
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold tracking-tight text-gray-900">Your Bag</span>
            <span className="text-[13px] text-gray-500 font-medium mt-0.5">{totalItems} items</span>
          </div>
          <button onClick={closeCart} className="p-2 text-gray-400 rounded-full hover:bg-gray-50 hover:text-black transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto selection:bg-black selection:text-white">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-5 px-6">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                 <ShoppingBag className="w-8 h-8 text-gray-300" />
              </div>
              <div className="flex flex-col gap-2">
                 <p className="text-[18px] font-semibold tracking-tight text-gray-900">Your bag is empty</p>
                 <p className="text-[14px] text-gray-500 max-w-[240px] leading-relaxed">Let's find something you'll love.</p>
              </div>
              <button
                onClick={closeCart}
                className="h-12 w-full max-w-[240px] text-[14px] font-medium tracking-wide bg-black text-white rounded-lg hover:bg-gray-900 transition-colors mt-4"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col px-4 py-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="group flex gap-5 p-4 border-b border-gray-100 hover:bg-gray-50/70 transition-colors duration-200">
                  {/* Image */}
                  <div className="w-24 h-32 overflow-hidden rounded-lg bg-gray-50 shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Right side */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-[15px] text-gray-900 leading-snug tracking-tight pr-4">{item.product.name}</h4>
                        <p className="text-[13px] text-gray-500 mt-1">
                          {item.product.fabric || "Premium Quality"} • Size: {item.size}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[12px] font-medium text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white shadow-sm">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3.5 py-1.5 hover:bg-gray-50 transition-colors text-gray-600">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-[13px] font-semibold text-gray-900">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3.5 py-1.5 hover:bg-gray-50 transition-colors text-gray-600">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-semibold text-[15px] text-gray-900">₹{item.product.price.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-[6px]">
                      <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 inline-flex items-center leading-none shadow-sm">
                        Trending in LA
                      </span>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 inline-flex items-center gap-1 leading-none shadow-sm">
                        <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-500/80 animate-pulse"></span>
                        Free LA Shipping
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.03)] flex flex-col gap-6 z-10">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-gray-900">Estimated Total</span>
              <span className="text-[22px] font-semibold tracking-tight text-gray-900">₹ {totalPrice.toLocaleString("en-IN")}</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full h-[56px] bg-black text-white text-[14px] font-medium tracking-wide rounded-lg hover:bg-gray-900 transition-all active:scale-[0.98] flex items-center justify-center shadow-lg shadow-black/10"
              >
                PROCEED TO CHECKOUT
              </Link>
              <button
                onClick={closeCart}
                className="w-full py-2 text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
               >
                 Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
