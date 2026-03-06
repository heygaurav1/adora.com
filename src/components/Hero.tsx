export function Hero() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-100 mb-12">
      <img
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2000&auto=format&fit=crop"
        alt="Hero Sneakers"
        className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-x-8 md:inset-x-16 bottom-12 flex flex-col items-start gap-1">
        <h1 className="text-[28px] md:text-3xl font-bold tracking-tight text-white drop-shadow-sm uppercase">
          Men's Sneakers
        </h1>
        <p className="text-white/90 text-[13px] md:text-sm max-w-[340px] leading-tight font-medium drop-shadow-sm">
          Shop men's sneakers. Discover casual leather and suede styles perfect for your laid-back wardrobe.
        </p>
        <button className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all rounded-sm">
          29 products
        </button>
      </div>
    </div>
  );
}
