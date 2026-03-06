"use client";

import { Product } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col">
      <Link href="/product/sneaker-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F8F8] cursor-pointer">
          {product.tag && (
            <span className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm text-[10px] px-2 py-0.5 font-medium border border-gray-100 uppercase tracking-tighter">
              {product.tag}
            </span>
          )}
          
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Controls */}
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity px-2">
            <button className="bg-white/90 p-1.5 rounded-full shadow-sm hover:bg-white" onClick={(e) => e.preventDefault()}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="bg-white/90 p-1.5 rounded-full shadow-sm hover:bg-white" onClick={(e) => e.preventDefault()}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Color Swatches */}
          <div className="absolute bottom-4 left-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className={`w-3.5 h-3.5 rounded-full border border-gray-300 ${i === 0 ? 'ring-1 ring-offset-1 ring-black' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </Link>

      <div className="mt-4 flex flex-col items-start text-[13px] tracking-tight">
        <Link href="/product/sneaker-1" className="hover:underline">
          <h3 className="font-bold text-black uppercase">{product.name}</h3>
        </Link>
        <p className="text-gray-500 font-medium">{product.material}</p>
        <p className="mt-1 font-bold">{product.price} {product.currency}</p>
      </div>
    </div>
  );
}
