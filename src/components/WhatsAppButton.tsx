"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </a>
  );
}
