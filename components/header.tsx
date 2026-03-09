"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Search, User, Heart, ShoppingBag, Menu, X, Globe, ChevronDown } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useFavorites } from "@/lib/favorites-context"
import { useAuth } from "@/lib/auth-context"
import { products } from "@/lib/products"

const megaMenuData = {
  women: {
    sections: [
      {
        title: "Clothing",
        links: [
          { label: "Dresses", href: "/women/dresses" },
          { label: "Tops & Blouses", href: "/women/tops" },
          { label: "Pants & Trousers", href: "/women/pants" },
          { label: "Skirts", href: "/women/skirts" },
          { label: "Jackets & Coats", href: "/women/jackets" },
          { label: "Knitwear", href: "/women/knitwear" },
        ]
      },
      {
        title: "Underwear & Lingerie",
        links: [
          { label: "Bras", href: "/women/bras" },
          { label: "Panties", href: "/women/panties" },
          { label: "Sleepwear", href: "/women/sleepwear" },
          { label: "Bodysuits", href: "/women/bodysuits" },
        ]
      },
      {
        title: "Accessories",
        links: [
          { label: "Hair Accessories", href: "/women/hair" },
          { label: "Bags & Purses", href: "/women/bags" },
          { label: "Jewelry", href: "/women/jewelry" },
          { label: "Scarves", href: "/women/scarves" },
        ]
      },
      {
        title: "Beauty",
        links: [
          { label: "Fragrance", href: "/fragrance/women" },
          { label: "Hair Care", href: "/women/haircare" },
          { label: "Makeup", href: "/women/makeup" },
        ]
      },
    ]
  },
  men: {
    sections: [
      {
        title: "Clothing",
        links: [
          { label: "Polo Shirts", href: "/men/polo" },
          { label: "T-Shirts", href: "/men/tshirts" },
          { label: "Sweatshirts", href: "/men/sweatshirts" },
          { label: "Summer Shirts", href: "/men/summer-shirts" },
          { label: "Pants & Chinos", href: "/men/pants" },
          { label: "Jeans", href: "/men/jeans" },
          { label: "Suits & Blazers", href: "/men/suits" },
          { label: "Jackets & Coats", href: "/men/jackets" },
        ]
      },
      {
        title: "Underwear",
        links: [
          { label: "Boxers", href: "/men/boxers" },
          { label: "Briefs", href: "/men/briefs" },
          { label: "Undershirts", href: "/men/undershirts" },
          { label: "Sleepwear", href: "/men/sleepwear" },
        ]
      },
      {
        title: "Accessories",
        links: [
          { label: "Watches", href: "/watches" },
          { label: "Belts", href: "/men/belts" },
          { label: "Wallets", href: "/men/wallets" },
          { label: "Ties & Bow Ties", href: "/men/ties" },
        ]
      },
      {
        title: "Grooming",
        links: [
          { label: "Fragrance", href: "/fragrance/men" },
          { label: "Shaving", href: "/men/shaving" },
          { label: "Hair Care", href: "/men/haircare" },
        ]
      },
    ]
  },
  kids: {
    sections: [
      {
        title: "Boys",
        links: [
          { label: "T-Shirts & Tops", href: "/kids/boys-tops" },
          { label: "Pants & Shorts", href: "/kids/boys-pants" },
          { label: "Jackets", href: "/kids/boys-jackets" },
          { label: "Sleepwear", href: "/kids/boys-sleepwear" },
        ]
      },
      {
        title: "Girls",
        links: [
          { label: "Dresses", href: "/kids/girls-dresses" },
          { label: "Tops & Blouses", href: "/kids/girls-tops" },
          { label: "Pants & Skirts", href: "/kids/girls-pants" },
          { label: "Jackets", href: "/kids/girls-jackets" },
        ]
      },
      {
        title: "Accessories",
        links: [
          { label: "Shoes", href: "/kids/shoes" },
          { label: "Bags & Backpacks", href: "/kids/bags" },
          { label: "Hats & Caps", href: "/kids/hats" },
        ]
      },
      {
        title: "Baby",
        links: [
          { label: "Bodysuits", href: "/kids/baby-bodysuits" },
          { label: "Sleepwear", href: "/kids/baby-sleepwear" },
          { label: "Blankets", href: "/kids/baby-blankets" },
        ]
      },
    ]
  },
  home: {
    sections: [
      {
        title: "Living Room",
        links: [
          { label: "Sofas & Chairs", href: "/home-decor/sofas" },
          { label: "Coffee Tables", href: "/home-decor/tables" },
          { label: "Lighting", href: "/home-decor/lighting" },
          { label: "Cushions & Throws", href: "/home-decor/cushions" },
        ]
      },
      {
        title: "Bedroom",
        links: [
          { label: "Bedding Sets", href: "/home-decor/bedding" },
          { label: "Pillows", href: "/home-decor/pillows" },
          { label: "Blankets", href: "/home-decor/blankets" },
          { label: "Nightstands", href: "/home-decor/nightstands" },
        ]
      },
      {
        title: "Dining",
        links: [
          { label: "Dinnerware", href: "/home-decor/dinnerware" },
          { label: "Glassware", href: "/home-decor/glassware" },
          { label: "Cutlery", href: "/home-decor/cutlery" },
          { label: "Table Linens", href: "/home-decor/linens" },
        ]
      },
      {
        title: "Decor",
        links: [
          { label: "Candles & Fragrance", href: "/home-decor/candles" },
          { label: "Vases", href: "/home-decor/vases" },
          { label: "Wall Art", href: "/home-decor/wall-art" },
          { label: "Mirrors", href: "/home-decor/mirrors" },
        ]
      },
    ]
  },
}

const regions = [
  { code: "US", name: "United States", currency: "USD" },
  { code: "GB", name: "United Kingdom", currency: "GBP" },
  { code: "EU", name: "Europe", currency: "EUR" },
  { code: "AE", name: "UAE", currency: "AED" },
  { code: "JP", name: "Japan", currency: "JPY" },
  { code: "AU", name: "Australia", currency: "AUD" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof products>([])
  const [isRegionOpen, setIsRegionOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState(regions[0])
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const regionRef = useRef<HTMLDivElement>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const { itemCount } = useCart()
  const { favorites } = useFavorites()
  const { user } = useAuth()

  // Handle search
  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Click outside handlers
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setSearchQuery("")
      }
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setIsRegionOpen(false)
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const suggestions = [
    "Silk Dress", "Cashmere", "Leather Bag", "Watches", "Fragrance", "Home Decor"
  ]

  return (
    <header className="fixed top-8 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop navigation - left */}
          <nav ref={megaMenuRef} className="hidden lg:flex items-center gap-6 relative">
            {/* Women */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("women")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                href="/women" 
                className="flex items-center gap-1 text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors py-6"
              >
                Women
                <ChevronDown className="h-3 w-3" />
              </Link>
            </div>

            {/* Men */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("men")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                href="/men" 
                className="flex items-center gap-1 text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors py-6"
              >
                Men
                <ChevronDown className="h-3 w-3" />
              </Link>
            </div>

            {/* Kids */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("kids")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                href="/kids" 
                className="flex items-center gap-1 text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors py-6"
              >
                Kids
                <ChevronDown className="h-3 w-3" />
              </Link>
            </div>

            {/* Home */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("home")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                href="/home-decor" 
                className="flex items-center gap-1 text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors py-6"
              >
                Home
                <ChevronDown className="h-3 w-3" />
              </Link>
            </div>

            {/* Simple links */}
            <Link 
              href="/watches" 
              className="text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors"
            >
              Watches
            </Link>
            <Link 
              href="/fragrance" 
              className="text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors"
            >
              Fragrance
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] text-foreground">ADORA</span>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search button */}
            <div ref={searchRef} className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 text-foreground/60 hover:text-foreground hover:bg-foreground hover:text-background transition-all group"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              {/* Search dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-background/95 backdrop-blur-md border border-border shadow-2xl">
                  <div className="p-4">
                    <div className="flex items-center gap-3 border-b border-border pb-3">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                        autoFocus
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="text-muted-foreground hover:text-foreground">
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    {/* Search results */}
                    {searchResults.length > 0 ? (
                      <div className="pt-3 space-y-2">
                        <p className="text-xs text-muted-foreground tracking-wider">RESULTS</p>
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                            className="flex items-center gap-3 p-2 hover:bg-secondary/50 transition-colors"
                          >
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-12 h-12 object-cover"
                              loading="lazy"
                            />
                            <div>
                              <p className="text-sm text-foreground">{product.name}</p>
                              <p className="text-xs text-muted-foreground">${product.price.toLocaleString()}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : searchQuery.length > 1 ? (
                      <p className="text-sm text-muted-foreground pt-3">No results found</p>
                    ) : (
                      <div className="pt-3">
                        <p className="text-xs text-muted-foreground tracking-wider mb-2">SUGGESTIONS</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map((s) => (
                            <button
                              key={s}
                              onClick={() => setSearchQuery(s)}
                              className="text-xs px-3 py-1.5 border border-border text-foreground/70 hover:border-foreground hover:text-foreground transition-colors"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href={user ? "/account" : "/login"} 
              className="p-2.5 text-foreground/60 hover:text-foreground hover:bg-foreground hover:text-background transition-all" 
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link 
              href="/favorites" 
              className="p-2.5 text-foreground/60 hover:text-foreground hover:bg-foreground hover:text-background transition-all relative" 
              aria-label="Favorites"
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link 
              href="/cart" 
              className="p-2.5 text-foreground/60 hover:text-foreground hover:bg-foreground hover:text-background transition-all relative" 
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Region selector */}
            <div ref={regionRef} className="relative hidden sm:block">
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center gap-1 p-2.5 text-foreground/60 hover:text-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="Select region"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs">{selectedRegion.code}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              
              {isRegionOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-background/95 backdrop-blur-md border border-border shadow-2xl">
                  <div className="p-2">
                    <p className="text-xs text-muted-foreground tracking-wider px-3 py-2">SELECT REGION</p>
                    {regions.map((region) => (
                      <button
                        key={region.code}
                        onClick={() => { setSelectedRegion(region); setIsRegionOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-secondary/50 transition-colors flex items-center justify-between ${
                          selectedRegion.code === region.code ? "text-foreground" : "text-foreground/70"
                        }`}
                      >
                        <span>{region.name}</span>
                        <span className="text-xs text-muted-foreground">{region.currency}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMegaMenu && (
        <div 
          className="hidden lg:block absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              {megaMenuData[activeMegaMenu as keyof typeof megaMenuData]?.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs tracking-wider text-accent mb-4">{section.title.toUpperCase()}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <nav className="flex flex-col p-4 gap-1">
            <Link 
              href="/women" 
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </Link>
            <Link 
              href="/men" 
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </Link>
            <Link 
              href="/kids" 
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Kids
            </Link>
            <Link 
              href="/home-decor" 
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/watches" 
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Watches
            </Link>
            <Link 
              href="/fragrance" 
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Fragrance
            </Link>
            <div className="border-t border-border pt-4 mt-2">
              <button 
                onClick={() => { setIsSearchOpen(true); setIsMenuOpen(false); }}
                className="flex items-center gap-3 text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors py-3 px-2 w-full"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
              <Link 
                href={user ? "/account" : "/login"} 
                className="flex items-center gap-3 text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors py-3 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                {user ? "My Account" : "Sign In"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
