"use client";

import Link from "next/link";
import { Product } from "@/data";
import { Heart, ShoppingBag, Star, Leaf } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ECO_TAGS = ["ECO", "PREMIUM", "EXCLUSIVE"];
const TRENDING_TAGS = ["TRENDING", "HOT", "NEW ARRIVAL"];

export function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const wishlisted = isInWishlist(product.id);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  
  const usdPrice = Math.round(product.price / 83);
  const usdOldPrice = product.oldPrice ? Math.round(product.oldPrice / 83) : null;
  
  const isEco = product.tag && ECO_TAGS.includes(product.tag);
  const isTrending = product.tag && TRENDING_TAGS.includes(product.tag);
  const reviewRating = product.reviews?.rating || (4.3 + Math.random() * 0.6);
  const reviewCount = product.reviews?.count || Math.floor(30 + Math.random() * 180);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)];
    addToCart(product, defaultSize);
  };

  return (
    <div className="group relative flex flex-col selection:bg-white selection:text-black">
      <Link href={`/product/${product.slug}`} className="block w-full overflow-hidden bg-zinc-900 aspect-[3/4] relative mb-4 rounded-xl border border-white/5">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full shadow-2xl transition-all duration-300 ${
            wishlisted 
              ? "bg-red-500 text-white" 
              : "bg-black/40 backdrop-blur-md text-white/70 opacity-0 group-hover:opacity-100 border border-white/10"
          }`}
        >
          <Heart
            className={`w-3.5 h-3.5 ${wishlisted ? "fill-current" : ""}`}
            strokeWidth={1}
          />
        </button>

        {/* Top-left badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tag && (
            <span className={`px-3 py-1 text-[9px] font-normal uppercase tracking-[0.2em] rounded-full shadow-2xl border ${
              product.tag === "SALE" 
                ? "bg-red-600/90 text-white border-red-500/20" 
                : product.tag === "NEW ARRIVAL" 
                  ? "bg-white text-black border-white"
                  : product.tag === "ECO"
                    ? "bg-emerald-600/90 text-white border-emerald-500/20"
                    : "bg-black/60 backdrop-blur-md text-white border-white/10"
            }`}>
              {product.tag}
            </span>
          )}
          {isEco && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[8px] font-normal text-emerald-400 bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-500/20 uppercase tracking-widest">
              <Leaf className="w-2.5 h-2.5" /> Sustainable
            </span>
          )}
        </div>

        {/* Quick Add to Bag on hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 h-11 bg-white text-black text-[10px] font-normal uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-200 shadow-2xl"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
        </button>
      </Link>

      <div className="flex flex-col px-1 w-full">
        {/* Star Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-0.5 opacity-60">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(reviewRating) ? "text-amber-500 fill-current" : "text-zinc-800"}`} />
            ))}
          </div>
          <span className="text-[10px] text-zinc-600 font-light">({reviewCount})</span>
          {isTrending && (
            <span className="text-[8px] font-normal text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded-full ml-auto border border-amber-500/10 uppercase tracking-tighter">
              Trending
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-[14px] font-normal text-white/90 leading-snug tracking-[0.05em] mb-1 line-clamp-1 group-hover:text-white transition-colors">
          {product.name}
        </h3>

        {/* Fabric / Material hint */}
        <p className="text-[11px] text-zinc-500 mb-3 line-clamp-1 font-light italic opacity-80">
          {product.fabric ? product.fabric.split(' ').slice(0, 4).join(' ') : product.category}
        </p>
        
        {/* Pricing - USD first, INR secondary */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[16px] font-light text-white tracking-wide">
            ${usdPrice}
          </span>
          {usdOldPrice && (
            <>
              <span className="text-[12px] text-zinc-700 line-through font-light">
                ${usdOldPrice}
              </span>
              <span className="text-[10px] font-normal text-red-500 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10">
                -{discount}%
              </span>
            </>
          )}
        </div>
        <span className="text-[9px] text-zinc-600 mt-1 uppercase tracking-[0.2em] font-light">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
}
