"use client";

import Link from "next/link";
import { COLLECTIONS } from "@/data";

export function ShopByCollection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <h2 className="text-center text-[16px] md:text-[20px] font-bold uppercase tracking-[0.15em] text-black mb-8">
          SHOP BY COLLECTION
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {COLLECTIONS.map((col, i) => (
            <Link
              key={i}
              href={`/category/${col.slug}`}
              className="relative group overflow-hidden aspect-square"
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <span className="text-white text-[10px] md:text-[12px] font-bold uppercase tracking-wider drop-shadow-lg">
                  {col.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
