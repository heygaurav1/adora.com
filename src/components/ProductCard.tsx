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
    <div className="group relative flex flex-col selection:bg-black selection:text-white">
      <Link href={`/product/${product.slug}`} className="block w-full overflow-hidden bg-gray-50 aspect-[3/4] relative mb-4 rounded-lg">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-sm transition-all duration-200 ${
            wishlisted 
              ? "bg-red-50 text-red-600" 
              : "bg-white/80 backdrop-blur-sm text-gray-600 opacity-0 group-hover:opacity-100"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${wishlisted ? "fill-current" : ""}`}
            strokeWidth={1.5}
          />
        </button>

        {/* Top-left badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tag && (
            <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm ${
              product.tag === "SALE" 
                ? "bg-red-600 text-white" 
                : product.tag === "NEW ARRIVAL" 
                  ? "bg-black text-white"
                  : product.tag === "ECO"
                    ? "bg-emerald-600 text-white"
                    : "bg-white/90 backdrop-blur-sm text-gray-800"
            }`}>
              {product.tag}
            </span>
          )}
          {isEco && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-medium text-emerald-700 bg-emerald-50/90 backdrop-blur-sm rounded-full border border-emerald-200">
              <Leaf className="w-2.5 h-2.5" /> Sustainable
            </span>
          )}
        </div>

        {/* Quick Add to Bag on hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 h-10 bg-black/90 backdrop-blur-sm text-white text-[11px] font-medium uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
        </button>
      </Link>

      <div className="flex flex-col px-1 w-full">
        {/* Star Rating */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(reviewRating) ? "text-amber-400 fill-current" : "text-gray-200"}`} />
            ))}
          </div>
          <span className="text-[11px] text-gray-400">({reviewCount})</span>
          {isTrending && (
            <span className="text-[9px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-full ml-auto border border-amber-100">
              Trending
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-[14px] font-semibold text-gray-900 leading-snug tracking-tight mb-0.5 line-clamp-1 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>

        {/* Fabric / Material hint */}
        <p className="text-[12px] text-gray-400 mb-2 line-clamp-1">
          {product.fabric ? product.fabric.split(' ').slice(0, 4).join(' ') : product.category}
        </p>
        
        {/* Pricing - USD first, INR secondary */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[15px] font-semibold text-gray-900">
            ${usdPrice}
          </span>
          {usdOldPrice && (
            <>
              <span className="text-[12px] text-gray-300 line-through">
                ${usdOldPrice}
              </span>
              <span className="text-[11px] font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                -{discount}%
              </span>
            </>
          )}
        </div>
        <span className="text-[10px] text-gray-300 mt-0.5">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
}
