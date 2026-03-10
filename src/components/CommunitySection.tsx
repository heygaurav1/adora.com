"use client";

import { ArrowRight } from "lucide-react";

export function CommunitySection() {
  return (
    <section className="w-full py-48 bg-black flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-[600px] flex flex-col items-center text-center">
          <span className="text-[10px] font-normal uppercase tracking-[0.5em] text-zinc-600 mb-8">The Studio News</span>
          <h3 className="text-[32px] md:text-[56px] font-medium uppercase tracking-[0.05em] text-white mb-8 font-serif">
            Join the Community
          </h3>
          <p className="text-[12px] md:text-[13px] text-zinc-500 mb-16 tracking-[0.2em] font-light max-w-[450px] leading-relaxed uppercase">
            Exclusive access to collections, private events, and our artisanal journey.
          </p>
          
          <div className="w-full max-w-[500px] relative">
            <div className="flex items-center border-b border-white/5 py-4 group focus-within:border-white transition-all duration-700">
              <input
                type="email"
                placeholder="ENTER EMAIL ADDRESS"
                className="flex-1 bg-transparent px-2 text-[12px] text-white outline-none placeholder:text-zinc-800 font-light tracking-[0.4em] uppercase"
              />
              <button className="p-3 text-zinc-600 hover:text-white transition-all group-hover:translate-x-3 duration-700">
                <ArrowRight className="w-6 h-6" strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
