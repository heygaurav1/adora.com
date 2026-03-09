"use client";

import { Users, MapPin, Truck } from "lucide-react";

const STATS = [
  { icon: Users, value: "1,50,000+", label: "Satisfied Customers" },
  { icon: MapPin, value: "9,500+", label: "Pincodes Reached" },
  { icon: Truck, value: "Ships within", label: "24 Hours" },
];

export function StatsBar() {
  return (
    <section className="bg-[#f8f8f8] border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-5 md:py-6">
        <div className="flex items-center justify-center gap-10 md:gap-20 lg:gap-28">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1">
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#333]" strokeWidth={1.5} />
              <span className="text-[12px] md:text-[14px] font-bold text-black leading-tight">
                {stat.value}
              </span>
              <span className="text-[9px] md:text-[11px] text-gray-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
