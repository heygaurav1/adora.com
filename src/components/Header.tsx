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
      className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-gray-50 flex flex-col items-center transition-all duration-500"
      onMouseLeave={handleMouseLeave}
    >
      {/* Promo Bar */}
      <div className="w-full bg-black text-white py-2.5 text-center text-[10px] uppercase font-medium tracking-[0.25em] flex items-center justify-center gap-6">
        <span>Free 2-Day LA Shipping</span>
        <span className="text-white/30">|</span>
        <span>30-Day Returns</span>
        <span className="text-white/30">|</span>
        <span className="text-emerald-400">Carbon Neutral Delivery</span>
      </div>

      <div className="w-full max-w-[1500px] px-6 md:px-12">
        <div className="flex items-center justify-between h-[80px] md:h-[110px]">
          
          {/* Left: Simplified Navigation */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            {NAVIGATION.map(link => (
              <div
                key={link.label}
                onMouseEnter={() => handleMouseEnter(link.label)}
                className="h-full flex items-center relative"
              >
                <Link 
                  href={link.href}
                  className={`text-[12px] font-medium uppercase tracking-[0.2em] transition-all flex items-center gap-1 ${
                    link.isRed ? "text-red-500" : "text-black hover:opacity-50"
                  } ${link.isUnderlined ? "border-b border-black" : ""}`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${activeMenu === link.label ? "rotate-180" : ""}`} />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center: Brand Identity */}
          <div className="flex-1 flex justify-center lg:justify-center">
            <Link href="/" className="text-[32px] md:text-[46px] font-normal tracking-[0.15em] uppercase text-black transition-all hover:tracking-[0.2em]">
              ADORA
            </Link>
          </div>

          {/* Right: Premium Actions */}
          <div className="flex items-center justify-end gap-2 md:gap-8">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden sm:block hover:opacity-50 transition-opacity p-2"
            >
              <Search className="w-5 h-5 text-black" strokeWidth={1.5} />
            </button>
            <Link href="/login" className="hover:opacity-50 transition-opacity p-2 hidden md:block">
              <User className="w-5 h-5 text-black" strokeWidth={1.5} />
            </Link>
            <button className="hidden sm:block hover:opacity-50 transition-opacity p-2">
              <Heart className="w-5 h-5 text-black" strokeWidth={1.5} />
            </button>
            <button onClick={toggleCart} className="relative hover:opacity-50 transition-opacity p-2">
              <ShoppingBag className="w-5 h-5 text-black" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Integrated Search Bar */}
      {isSearchOpen && (
        <div className="w-full bg-white border-t border-gray-50 py-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-[800px] mx-auto px-6 relative">
            <input 
              type="text" 
              placeholder="SEARCH THE COLLECTION..." 
              className="w-full bg-transparent border-b border-black py-4 text-[14px] font-normal tracking-[0.1em] outline-none placeholder:text-gray-300"
              autoFocus
            />
            <button className="absolute right-10 top-1/2 -translate-y-1/2 text-[11px] font-bold uppercase tracking-widest text-black hover:opacity-50">
              Go
            </button>
          </div>
        </div>
      )}

      {/* Luxurious Mega Menu Dropdown */}
      {activeMenu && currentDropdown && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-t border-gray-50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden animate-fade-in"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1500px] mx-auto px-12 py-16 flex gap-20 justify-between">
            <div className="flex-1 grid grid-cols-4 gap-12">
              {currentDropdown.columns.map(col => (
                <div key={col.title}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                    {col.title}
                  </h4>
                  <ul className="space-y-4">
                    {col.items.map(item => (
                      <li key={item}>
                        <Link 
                          href={`/category/${item.toLowerCase().replace(/ /g, '-')}`} 
                          className="text-[14px] font-normal text-black hover:opacity-40 transition-all block"
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
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-50">
                  <img 
                    src={currentDropdown.spotlight.image} 
                    alt="Spotlight" 
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-2 font-medium">
                    {currentDropdown.spotlight.title}
                  </p>
                  <h5 className="text-[20px] font-medium uppercase tracking-tight text-black mb-4">
                    {currentDropdown.spotlight.subtitle}
                  </h5>
                  <span className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1">
                    Shop Now
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-[200] flex flex-col p-8 space-y-8 lg:hidden animate-in fade-in slide-in-from-left duration-300">
          {NAVIGATION.map(link => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[24px] font-medium uppercase tracking-widest border-b border-gray-50 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8 flex flex-col gap-6">
            <Link href="/login" className="text-[14px] uppercase tracking-widest font-medium">Account</Link>
            <Link href="/wishlist" className="text-[14px] uppercase tracking-widest font-medium">Wishlist</Link>
          </div>
        </div>
      )}
    </header>
  );
}
