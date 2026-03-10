"use client";

import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-12 z-[90] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-500"
      aria-label="Chat with Style Advisor"
    >
      <MessageSquare className="w-5 h-5" strokeWidth={1} />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
    </a>
  );
}
