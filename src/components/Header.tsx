"use client";

import Link from "next/link";
import { Search, User, ShoppingBag, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useRef } from "react";

const NAVIGATION = [
  { 
    label: "Women", 
    href: "/women",
    dropdown: {
      columns: [
        { title: "NEW SEASON", items: ["New In", "LA Favorites", "Editor's Picks", "Sustainable Edit"] },
        { title: "CLOTHING", items: ["Dresses", "Tops & Shirts", "Jackets", "Activewear", "Jeans", "Beach Edit"] },
        { title: "ACCESSORIES", items: ["Bags", "Shoes", "Jewelry", "Scarves"] },
        { title: "ESSENTIALS", items: ["Underwear & Panties", "Lingerie Sets", "Nightwear"] }
      ],
      spotlight: { title: "Featured Collection", subtitle: "SS25 WOMENSWEAR", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" }
    }
  },
  { 
    label: "Men", 
    href: "/men",
    dropdown: {
      columns: [
        { title: "SHOP BY", items: ["New Arrivals", "Trending", "Exclusives", "Conscious Edit"] },
        { title: "CLOTHING", items: ["T-Shirts", "Shirts", "Jackets", "Hoodies", "Jeans", "Cargos"] },
        { title: "ACCESSORIES", items: ["Watches", "Bags", "Sunglasses", "Belts"] }
      ],
      spotlight: { title: "New Release", subtitle: "MODERN TAILORING", image: "https://images.unsplash.com/photo-1488161628813-f4460f892d73?w=400&q=80" }
    }
  },
  { 
    label: "New In", 
    href: "/new-in",
    isUnderlined: true
  },
  { 
    label: "Sale", 
    href: "/sale",
    isRed: true 
  },
];

export function Header() {
  const { totalItems, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const currentDropdown = NAVIGATION.find(n => n.label === activeMenu)?.dropdown;

  return (
    <header 
      className="sticky top-0 z-[100] w-full bg-black/90 backdrop-blur-xl border-b border-white/5 flex flex-col items-center transition-all duration-500"
      onMouseLeave={handleMouseLeave}
    >
      {/* Promo Bar */}
      <div className="w-full bg-zinc-950 text-white/40 py-2.5 text-center text-[9px] uppercase font-light tracking-[0.4em] flex items-center justify-center gap-8 border-b border-white/5">
        <span className="hover:text-white transition-colors cursor-default">Free 2-Day LA Shipping</span>
        <span className="text-white/10">•</span>
        <span className="hover:text-white transition-colors cursor-default">30-Day Returns</span>
        <span className="text-white/10">•</span>
        <span className="text-emerald-500/60 hover:text-emerald-400 transition-colors cursor-default tracking-[0.5em]">Carbon Neutral Delivery</span>
      </div>

      <div className="w-full max-w-[1500px] px-6 md:px-12">
        <div className="flex items-center justify-between h-[80px] md:h-[110px]">
          
          {/* Left: Simplified Navigation */}
          <nav className="hidden lg:flex items-center gap-12 h-full">
            {NAVIGATION.map(link => (
              <div
                key={link.label}
                onMouseEnter={() => handleMouseEnter(link.label)}
                className="h-full flex items-center relative"
              >
                <Link 
                  href={link.href}
                  className={`text-[11px] font-normal uppercase tracking-[0.3em] transition-all flex items-center gap-1.5 ${
                    link.isRed ? "text-red-500/80 hover:text-red-400" : "text-white/60 hover:text-white"
                  } ${link.isUnderlined ? "border-b border-white/40 pb-0.5" : ""}`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeMenu === link.label ? "rotate-180" : ""}`} strokeWidth={1} />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>

          {/* Center: Brand Identity */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-all duration-700 hover:scale-105">
            <Link href="/" className="text-[28px] md:text-[42px] font-extralight uppercase tracking-[0.5em] text-white leading-none mb-1 md:mb-2 flex items-center justify-center">
              ADORA
            </Link>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-white/30 font-light hidden sm:block">The Redefined Luxury</span>
          </div>

          {/* Right: Premium Actions */}
          <div className="flex items-center justify-end gap-2 md:gap-8">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden sm:block hover:opacity-100 transition-opacity p-2"
            >
              <Search className="w-5 h-5 text-white/60" strokeWidth={1} />
            </button>
            <Link href="/login" className="hover:opacity-100 transition-opacity p-2 hidden md:block">
              <User className="w-5 h-5 text-white/60" strokeWidth={1} />
            </Link>
            <button className="hidden sm:block hover:opacity-100 transition-opacity p-2">
              <Heart className="w-5 h-5 text-white/60" strokeWidth={1} />
            </button>
            <button onClick={toggleCart} className="relative hover:opacity-100 transition-opacity p-2">
              <ShoppingBag className="w-5 h-5 text-white/60" strokeWidth={1} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-white text-black text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-normal">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Integrated Search Bar */}
      {isSearchOpen && (
        <div className="w-full bg-zinc-950 border-t border-white/5 py-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="max-w-[800px] mx-auto px-6 relative">
            <input 
              type="text" 
              placeholder="SEARCH THE COLLECTION..." 
              className="w-full bg-transparent border-b border-white/10 py-4 text-[13px] font-light tracking-[0.2em] outline-none placeholder:text-zinc-700 text-white text-center focus:border-white/30 transition-all uppercase"
              autoFocus
            />
            <button className="absolute right-10 top-1/2 -translate-y-1/2 text-[10px] font-light uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Luxurious Mega Menu Dropdown */}
      {activeMenu && currentDropdown && (
        <div 
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-t border-white/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1500px] mx-auto px-12 py-20 flex gap-24 justify-between">
            <div className="flex-1 grid grid-cols-4 gap-16">
              {currentDropdown.columns.map(col => (
                <div key={col.title}>
                  <h4 className="text-[10px] font-normal uppercase tracking-[0.3em] text-white/30 mb-8 border-b border-white/5 pb-2">
                    {col.title}
                  </h4>
                  <ul className="space-y-4">
                    {col.items.map(item => (
                      <li key={item}>
                        <Link 
                          href={`/category/${item.toLowerCase().replace(/ /g, '-')}`} 
                          className="text-[13px] font-light text-white/50 hover:text-white transition-all block tracking-wide"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {currentDropdown.spotlight && (
              <div className="w-[380px] flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-zinc-900 rounded-xl border border-white/5">
                  <img 
                    src={currentDropdown.spotlight.image} 
                    alt="Spotlight" 
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] mb-2 font-light">
                    {currentDropdown.spotlight.title}
                  </p>
                  <h5 className="text-[20px] font-light uppercase tracking-[0.1em] text-white mb-6">
                    {currentDropdown.spotlight.subtitle}
                  </h5>
                  <span className="text-[10px] font-normal uppercase tracking-widest border-b border-white/40 pb-1.5 hover:border-white hover:text-white transition-all text-white/60">
                    Discover More
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] bg-black z-[200] flex flex-col p-10 space-y-10 lg:hidden animate-in fade-in slide-in-from-left duration-500">
          {NAVIGATION.map(link => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[28px] font-extralight uppercase tracking-[0.4em] border-b border-white/10 pb-6 text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-10 flex flex-col gap-8">
            <Link href="/login" className="text-[12px] uppercase tracking-[0.3em] font-light text-white/60">Profile</Link>
            <Link href="/wishlist" className="text-[12px] uppercase tracking-[0.3em] font-light text-white/60">Favorites</Link>
            <Link href="/support" className="text-[12px] uppercase tracking-[0.3em] font-light text-white/60">Help Center</Link>
          </div>
        </div>
      )}
    </header>
  );
}
