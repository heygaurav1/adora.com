"use client";

import Link from "next/link";

export function CommunitySection() {
  return (
    <section className="w-full py-28 bg-white flex flex-col items-center border-t border-gray-50">
      <div className="w-full max-w-[1400px] px-4 md:px-8 flex flex-col items-center">
        
        {/* Giant Centered Brand Text */}
        <div className="w-full text-center mb-16">
          <h2
            className="text-[60px] md:text-[120px] lg:text-[180px] font-black uppercase tracking-[-0.05em] text-black leading-none select-none opacity-[0.95]"
          >
            ADORA
          </h2>
        </div>

        {/* Centered Newsletter with Pill Shape */}
        <div className="w-full max-w-[600px] flex flex-col items-center text-center">
          <h3 className="text-[14px] md:text-[16px] font-black uppercase tracking-[0.25em] text-black mb-3">
            JOIN THE COMMUNITY OF CHANGE MAKERS
          </h3>
          <p className="text-[11px] md:text-[12px] text-gray-400 mb-10 tracking-wide font-medium">
            get exclusive deals and early access to new products.
          </p>
          
          <div className="w-full max-w-[520px]">
            <div className="flex items-center bg-gray-50 rounded-full h-[64px] px-2 border-2 border-transparent focus-within:border-black focus-within:bg-white transition-all shadow-sm">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 h-full px-8 text-[13px] text-black outline-none bg-transparent placeholder:text-gray-400 font-black tracking-widest"
              />
              <button className="h-[48px] w-[48px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all mr-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
