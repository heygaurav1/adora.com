"use client";

import React, { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

interface RustCheckoutProps {
  productName: string;
  priceCents: number;
  quantity?: number;
}

/**
 * ADORA - Premium Rust Payment Bridge
 * This component triggers the Axum/Stripe backend checkout flow
 */
export function RustCheckoutButton({ productName, priceCents, quantity = 1 }: RustCheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // 1. Call your Rust Backend (Axum API)
      const response = await fetch("http://localhost:8080/api/payments/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_name: productName,
          price_cents: priceCents,
          quantity: quantity,
        }),
      });

      if (!response.ok) throw new Error("Rust API failed to create session");

      const data = await response.json();

      // 2. Redirect to the Stripe Checkout URL provided by Rust
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Failed to start checkout. Check if your Rust server is running on :8080");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full h-14 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all active:scale-[0.98] disabled:opacity-70"
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          <CreditCard className="w-5 h-5" />
          Pay via Rust Secure API
        </>
      )}
    </button>
  );
}
