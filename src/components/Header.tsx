"use client";

import Link from "next/link";
import { Search, HelpCircle, User, ShoppingBag, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 text-black">
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
          <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="#" className="hover:text-black">Men</Link>
            <Link href="#" className="hover:text-black">Shoes</Link>
            <Link href="#" className="text-gray-300">Sneakers</Link>
          </div>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-tight lowercase">
          adora
        </Link>

        <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
          <button className="hidden md:flex items-center gap-2 hover:text-gray-600">
            <span>Search</span>
          </button>
          <button className="hidden md:flex items-center gap-2 hover:text-gray-600">
            <span>Help</span>
          </button>
          <button className="flex items-center gap-2 hover:text-gray-600">
            <span>My account</span>
          </button>
          <button className="relative p-2 hover:text-gray-600">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="absolute top-1 right-0 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
