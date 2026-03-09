export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  currency: "INR";
  images: string[];
  sizes: string[];
  tag?: "NEW ARRIVAL" | "PRE-ORDER" | "HOT" | "SALE" | "EXCLUSIVE" | "DISCOUNT" | "PREMIUM" | "TRENDING" | "WINTER" | "OFFICE" | "BASIC" | "LIMITED" | "ECO";
  fitNotes?: string;
  modelInfo?: string;
  fabric?: string;
  care?: string;
  sizeChart?: {
    size: string;
    chest: string;
    length: string;
    shoulder: string;
    sleeve: string;
  }[];
  reviews?: {
    rating: number;
    count: number;
  };
}
export interface Collection {
  name: string;
  slug: string;
  image: string;
}

// ─── COLLECTIONS ─────────────────────────────────
// Expanded collections to mimic Myntra/Ajio style: Added women's-focused categories like Tops, Skirts, Shorts, Activewear, Swimwear, Shoes, Bags, and Accessories.
// Tailored for LA women clients: Emphasizing casual, beachy, urban, trendy Western styles (e.g., athleisure, boho, streetwear) while retaining some ethnic for versatility.
// Total: 16 collections for a robust app-like navigation.

export const COLLECTIONS: Collection[] = [
  { name: "New In", slug: "new-in", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" },
  { name: "Ready-to-Wear", slug: "ready-to-wear", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { name: "Intimates & Lounge", slug: "intimates-lounge", image: "https://images.unsplash.com/photo-1588613143924-4ba278d67295?w=800&q=80" },
  { name: "Jewelry", slug: "jewelry", image: "https://images.unsplash.com/photo-1570549717069-33bed1eb7058?w=800&q=80" },
  { name: "Sustainable Edit", slug: "sustainable", image: "https://images.unsplash.com/photo-1485188088784-2fa2d0e6d2a0?w=800&q=80" },
  { name: "T-Shirts", slug: "tshirts", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80" },
  { name: "Jeans", slug: "jeans", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80" },
  { name: "Kurtas", slug: "kurtas", image: "https://images.unsplash.com/photo-1610030469668-1a4e4a3a8d6e?w=800&q=80" },
  { name: "Sarees", slug: "sarees", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80" },
  { name: "Dresses", slug: "dresses", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80" },
  { name: "Jackets", slug: "jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80" },
  { name: "Skirts", slug: "skirts", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" },
  { name: "Shorts", slug: "shorts", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80" },
  { name: "Activewear", slug: "activewear", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { name: "Swimwear", slug: "swimwear", image: "https://images.unsplash.com/photo-1551836022-ef3d0c18eacf?w=800&q=80" },
  { name: "Outerwear & Jackets", slug: "jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80" },
  { name: "Hoodies & Sweatshirts", slug: "hoodies", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80" },
  { name: "Underwear & Lingerie", slug: "underwear", image: "https://images.unsplash.com/photo-1588613143924-4ba278d67295?w=800&q=80" },
  { name: "Shoes", slug: "shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
  { name: "Bags & Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" },
  { name: "Kurtas & Ethnic Wear", slug: "kurtas", image: "https://images.unsplash.com/photo-1610030469668-1a4e4a3a8d6e?w=800&q=80" }, // Retained for fusion appeal
  { name: "Sarees", slug: "sarees", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80" }, // Retained for fusion appeal
];

export const PRODUCTS: Product[] = [
  // T-Shirts & Tops (expanded to 10 items for Tops category)
  {
    id: "p1",
    name: "Wild Spirit Relaxed T-Shirt - Optic White",
    slug: "wild-spirit-white-relaxed-fit",
    category: "T-Shirts",
    categorySlug: "tshirts",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "SALE",
    fabric: "100% GOTS Organic Cotton Heavyweight Jersey",
    fitNotes: "Designed for a slightly oversized, relaxed silhouette. True to size for a streetwear edge.",
    modelInfo: "Model is 6'1\" (185cm) and wears a size L for a relaxed fit.",
    care: "Machine wash delicate. Lay flat to dry to preserve structure.",
    reviews: { rating: 4.8, count: 210 }
  },
  {
    id: "p2",
    name: "Resilient Relaxed Fit T-Shirt",
    slug: "resilient-relaxed-fit",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "SALE"
  },
  {
    id: "p3",
    name: "Oversized Graphic Print T-Shirt",
    slug: "oversized-graphic-tshirt",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 999,
    oldPrice: 1499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "p4",
    name: "Plain Black Crew Neck T-Shirt",
    slug: "plain-black-crew-tshirt",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 799,
    oldPrice: 1199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "SALE"
  },
  {
    id: "p5",
    name: "Boho Crop Top in Floral Print",
    slug: "boho-floral-crop-top",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 899,
    oldPrice: 1299,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "ECO",
    fabric: "Organic Cotton Voile",
    reviews: { rating: 4.5, count: 89 }
  },
  {
    id: "p6",
    name: "Off-Shoulder Blouse - LA Sunset Vibes",
    slug: "off-shoulder-la-blouse",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 1499,
    oldPrice: 1999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "NEW ARRIVAL",
    fabric: "Organic Crepe de Chine",
    reviews: { rating: 4.6, count: 72 }
  },
  {
    id: "p7",
    name: "Sleeveless Tank Top Pack",
    slug: "sleeveless-tank-pack",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 1199,
    oldPrice: 1699,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "p8",
    name: "Wrap Crop Top in Denim",
    slug: "wrap-denim-crop-top",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 1099,
    oldPrice: 1599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "HOT"
  },
  {
    id: "p9",
    name: "Linen Button-Down Shirt",
    slug: "linen-button-down-shirt",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 1399,
    oldPrice: 1899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "PREMIUM",
    fabric: "100% Organic French Linen",
    fitNotes: "Relaxed coastal fit. Size up for oversized look.",
    care: "Machine wash cold. Tumble dry low.",
    reviews: { rating: 4.8, count: 156 }
  },
  {
    id: "p10",
    name: "Graphic Tee - Urban LA Print",
    slug: "urban-la-graphic-tee",
    category: "T-Shirts & Tops",
    categorySlug: "tops",
    price: 999,
    oldPrice: 1499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "TRENDING"
  },

  // Jeans & Bottoms (expanded to 10 items)
  {
    id: "j1",
    name: "Slim Fit Blue Denim Jeans",
    slug: "slim-fit-blue-denim",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1799,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&q=80"],
    sizes: ["28", "30", "32", "34", "36"],
    tag: "SALE"
  },
  {
    id: "j2",
    name: "High Waist Mom Fit Jeans",
    slug: "high-waist-mom-jeans",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1599,
    oldPrice: 2199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f6f96?w=800&q=80"],
    sizes: ["26", "28", "30", "32"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "j3",
    name: "Black Skinny Jeans",
    slug: "black-skinny-jeans",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1499,
    oldPrice: 1999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1604176354204-9268734858de?w=800&q=80"],
    sizes: ["28", "30", "32", "34"],
    tag: "SALE"
  },
  {
    id: "j4",
    name: "Wide-Leg Cargo Pants",
    slug: "wide-leg-cargo-pants",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1899,
    oldPrice: 2599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&q=80"],
    sizes: ["28", "30", "32", "34"],
    tag: "TRENDING"
  },
  {
    id: "j5",
    name: "Distressed Boyfriend Jeans",
    slug: "distressed-boyfriend-jeans",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1699,
    oldPrice: 2299,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1604176354204-9268734858de?w=800&q=80"],
    sizes: ["26", "28", "30"],
    tag: "HOT"
  },
  {
    id: "j6",
    name: "High-Rise Leggings - Active Blend",
    slug: "high-rise-active-leggings",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f6f96?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "j7",
    name: "Palazzo Pants - Flowy Linen",
    slug: "flowy-linen-palazzo",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1999,
    oldPrice: 2799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "PREMIUM",
    fabric: "100% Belgian Linen",
    reviews: { rating: 4.7, count: 94 }
  },
  {
    id: "j8",
    name: "Straight Fit Chinos",
    slug: "straight-fit-chinos",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1599,
    oldPrice: 2199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&q=80"],
    sizes: ["28", "30", "32"],
    tag: "SALE"
  },
  {
    id: "j9",
    name: "Flare Leg Jeans - Retro Style",
    slug: "flare-leg-retro-jeans",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1799,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f6f96?w=800&q=80"],
    sizes: ["30", "32", "34", "36"],
    tag: "TRENDING"
  },
  {
    id: "j10",
    name: "Jogger Pants - Urban Grey",
    slug: "urban-grey-joggers",
    category: "Jeans & Bottoms",
    categorySlug: "bottoms",
    price: 1399,
    oldPrice: 1899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1604176354204-9268734858de?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "HOT"
  },

  // Dresses & Jumpsuits (expanded to 10 items)
  {
    id: "d1",
    name: "Floral Midi Dress",
    slug: "floral-midi-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 1999,
    oldPrice: 2799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "SALE"
  },
  {
    id: "d2",
    name: "Bodycon Party Dress",
    slug: "bodycon-party-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 2499,
    oldPrice: 3499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1525507119028-ed4cdec9920d?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "d3",
    name: "Maxi Boho Dress in Earth Tones",
    slug: "maxi-boho-earth-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 2299,
    oldPrice: 3099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1485188088784-2fa2d0e6d2a0?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING"
  },
  {
    id: "d4",
    name: "Wrap Front Sundress",
    slug: "wrap-front-sundress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 1799,
    oldPrice: 2599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tag: "SALE"
  },
  {
    id: "d5",
    name: "Off-Shoulder Mini Dress",
    slug: "off-shoulder-mini-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 1899,
    oldPrice: 2699,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1533227268428-f9ed7c3e4d16?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "d6",
    name: "A-Line Denim Dress",
    slug: "a-line-denim-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 2099,
    oldPrice: 2899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "SALE"
  },
  {
    id: "d7",
    name: "Shirtdress with Belt",
    slug: "shirtdress-with-belt",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 2399,
    oldPrice: 3199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "PREMIUM"
  },
  {
    id: "d8",
    name: "Smocked Midi Dress",
    slug: "smocked-midi-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 1699,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1591395862178-fd5c32b9a3f8?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "SALE"
  },
  {
    id: "d9",
    name: "Slip Dress in Silk",
    slug: "silk-slip-dress",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 2799,
    oldPrice: 3599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "d10",
    name: "Denim Jumpsuit - Casual LA Fit",
    slug: "casual-la-denim-jumpsuit",
    category: "Dresses & Jumpsuits",
    categorySlug: "dresses",
    price: 2599,
    oldPrice: 3399,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1559621200-1e1fc0e2d9a3?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "TRENDING"
  },

  // Skirts (new category: 8 items, LA-inspired: mini, midi, boho)
  {
    id: "sk1",
    name: "Mini Denim Skirt",
    slug: "mini-denim-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "sk2",
    name: "Midi Wrap Skirt - Floral",
    slug: "midi-wrap-floral-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 1499,
    oldPrice: 2099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "sk3",
    name: "A-Line Pleated Skirt",
    slug: "a-line-pleated-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 1699,
    oldPrice: 2299,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1485188088784-2fa2d0e6d2a0?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "TRENDING"
  },
  {
    id: "sk4",
    name: "Maxi Boho Skirt",
    slug: "maxi-boho-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 1899,
    oldPrice: 2599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1591395862178-fd5c32b9a3f8?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "HOT"
  },
  {
    id: "sk5",
    name: "Leather Mini Skirt",
    slug: "leather-mini-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 2199,
    oldPrice: 2999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "PREMIUM"
  },
  {
    id: "sk6",
    name: "Tulip Hem Skirt",
    slug: "tulip-hem-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 1399,
    oldPrice: 1899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  // {
  //   id: "sk7",
  //   name: "Pencil Skirt - Tailored Black",
  //   slug: "tailored-black-pencil-skirt",
  //   category: "Skirts",
  //   categorySlug: "skirts",
  //   price: 1599,
  //   oldPrice: 2199,
  //   currency: "INR",
  //   images: ["https://images.unsplash.com/photo-1525507119028-ed4cdec9920d?w=800&q=80"],
  //   sizes: ["S", "M", "L", "XL"],
  //   tag: "OFFICE"
  // },
  {
    id: "sk8",
    name: "Asymmetric Hem Skirt",
    slug: "asymmetric-hem-skirt",
    category: "Skirts",
    categorySlug: "skirts",
    price: 1799,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80"],
    sizes: ["M", "L"],
    tag: "NEW ARRIVAL"
  },

  // Shorts (new category: 6 items, beachy/urban for LA)
  {
    id: "sh1",
    name: "Denim Bermuda Shorts",
    slug: "denim-bermuda-shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 999,
    oldPrice: 1499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "sh2",
    name: "High-Waist Bike Shorts",
    slug: "high-waist-bike-shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 799,
    oldPrice: 1199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "TRENDING"
  },
  {
    id: "sh3",
    name: "Linen Beach Shorts",
    slug: "linen-beach-shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 1199,
    oldPrice: 1699,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551836022-ef3d0c18eacf?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "sh4",
    name: "Cargo Shorts - Olive",
    slug: "cargo-olive-shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 1099,
    oldPrice: 1599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"],
    sizes: ["M", "L"],
    tag: "HOT"
  },
  {
    id: "sh5",
    name: "Tailored Wool Shorts",
    slug: "tailored-wool-shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 1399,
    oldPrice: 1899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1525507119028-ed4cdec9920d?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "PREMIUM"
  },
  {
    id: "sh6",
    name: "Paper Bag Shorts",
    slug: "paper-bag-shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },

  // Activewear (new category: 8 items, athleisure for LA fitness vibe)
  {
    id: "a1",
    name: "High-Impact Sports Bra",
    slug: "high-impact-sports-bra",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "a2",
    name: "Seamless Leggings - Black",
    slug: "seamless-black-leggings",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1499,
    oldPrice: 2099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING"
  },
  {
    id: "a3",
    name: "Yoga Tank Top",
    slug: "yoga-tank-top",
    category: "Activewear",
    categorySlug: "activewear",
    price: 899,
    oldPrice: 1299,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "SALE"
  },
  {
    id: "a4",
    name: "Running Shorts with Pockets",
    slug: "running-shorts-pockets",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1199,
    oldPrice: 1699,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551836022-ef3d0c18eacf?w=800&q=80"],
    sizes: ["M", "L"],
    tag: "HOT"
  },
  {
    id: "a5",
    name: "Lightweight Jacket for Gym",
    slug: "lightweight-gym-jacket",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1999,
    oldPrice: 2799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "PREMIUM"
  },
  {
    id: "a6",
    name: "Cropped Hoodie Sweatshirt",
    slug: "cropped-active-hoodie",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1399,
    oldPrice: 1899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "a7",
    name: "Mesh Panel Leggings",
    slug: "mesh-panel-leggings",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1599,
    oldPrice: 2199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING"
  },
  {
    id: "a8",
    name: "Biker Shorts Set",
    slug: "biker-shorts-set",
    category: "Activewear",
    categorySlug: "activewear",
    price: 1799,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "SALE"
  },

  // Swimwear (new category: 6 items, beach-ready for LA)
  {
    id: "sw1",
    name: "Bikini Top & Bottom Set - Tropical",
    slug: "tropical-bikini-set",
    category: "Swimwear",
    categorySlug: "swimwear",
    price: 1999,
    oldPrice: 2799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551836022-ef3d0c18eacf?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "sw2",
    name: "One-Piece Swimsuit - Classic Black",
    slug: "classic-black-one-piece",
    category: "Swimwear",
    categorySlug: "swimwear",
    price: 2299,
    oldPrice: 3099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "PREMIUM"
  },
  {
    id: "sw3",
    name: "High-Neck Bikini",
    slug: "high-neck-bikini",
    category: "Swimwear",
    categorySlug: "swimwear",
    price: 1799,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551836022-ef3d0c18eacf?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "TRENDING"
  },
  {
    id: "sw4",
    name: "Rash Guard Top",
    slug: "rash-guard-top",
    category: "Swimwear",
    categorySlug: "swimwear",
    price: 1499,
    oldPrice: 2099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "SALE"
  },
  {
    id: "sw5",
    name: "Tankini Set",
    slug: "tankini-set",
    category: "Swimwear",
    categorySlug: "swimwear",
    price: 1899,
    oldPrice: 2599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "HOT"
  },
  {
    id: "sw6",
    name: "Cover-Up Beach Dress",
    slug: "cover-up-beach-dress",
    category: "Swimwear",
    categorySlug: "swimwear",
    price: 1599,
    oldPrice: 2199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551836022-ef3d0c18eacf?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW ARRIVAL"
  },

  // Outerwear & Jackets (expanded to 8 items as requested)
  {
    id: "p9",
    name: "Miler Faux Leather Jacket",
    slug: "miler-faux-leather-jacket",
    category: "Outerwear & Jackets",
    categorySlug: "jackets",
    price: 2199,
    oldPrice: 3999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "SALE"
  },
  {
    id: "acc1",
    name: "Premium Bomber Jacket - Sage Olive",
    slug: "bomber-jacket-olive",
    category: "Jackets",
    categorySlug: "jackets",
    price: 2599,
    oldPrice: 3599,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1441984924751-243ee6481682?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    tag: "ECO",
    fabric: "Recycled Technical Nylon with Silk Lining",
    fitNotes: "Structured shoulders with a slightly cropped hem. Fits true to size.",
    modelInfo: "Model is 6'1\" (185cm) and wears a size L. Chest 102cm.",
    care: "Professional dry clean only.",
    sizeChart: [
      { size: "S", chest: "106", length: "66", shoulder: "46", sleeve: "64" },
      { size: "M", chest: "112", length: "68", shoulder: "48", sleeve: "65" },
      { size: "L", chest: "118", length: "70", shoulder: "50", sleeve: "66" },
      { size: "XL", chest: "124", length: "72", shoulder: "52", sleeve: "67" }
    ],
    reviews: { rating: 4.9, count: 85 }
  },
  {
    id: "jkt2",
    name: "Denim Trucker Jacket",
    slug: "denim-trucker-jacket",
    category: "Outerwear & Jackets",
    categorySlug: "jackets",
    price: 1999,
    oldPrice: 2999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "SALE"
  },
  // {
  //   id: "jkt3",
  //   name: "Quilted Puffer Jacket",
  //   slug: "quilted-puffer-jacket",
  //   category: "Outerwear & Jackets",
  //   categorySlug: "jackets",
  //   price: 2799,
  //   oldPrice: 3799,
  //   currency: "INR",
  //   images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80"],
  //   sizes: ["M", "L", "XL", "XXL"],
  //   tag: "WINTER"
  // },
  {
    id: "jkt4",
    name: "Cropped Leather Biker Jacket",
    slug: "cropped-leather-biker",
    category: "Outerwear & Jackets",
    categorySlug: "jackets",
    price: 3099,
    oldPrice: 4499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "PREMIUM"
  },
  {
    id: "jkt5",
    name: "Windbreaker Jacket - Navy",
    slug: "windbreaker-navy-jacket",
    category: "Outerwear & Jackets",
    categorySlug: "jackets",
    price: 1899,
    oldPrice: 2699,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "SALE"
  },
  {
    id: "jkt6",
    name: "Sherpa Lined Hooded Jacket",
    slug: "sherpa-hooded-jacket",
    category: "Outerwear & Jackets",
    categorySlug: "jackets",
    price: 2399,
    oldPrice: 3399,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "NEW ARRIVAL"
  },
  // {
  //   id: "jkt7",
  //   name: "Blazer Jacket - Tailored Fit",
  //   slug: "tailored-blazer-jacket",
  //   category: "Outerwear & Jackets",
  //   categorySlug: "jackets",
  //   price: 3499,
  //   oldPrice: 4999,
  //   currency: "INR",
  //   images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
  //   sizes: ["S", "M", "L", "XL", "XXL"],
  //   tag: "OFFICE"
  // },
  {
    id: "jkt8",
    name: "Reversible Utility Jacket",
    slug: "reversible-utility-jacket",
    category: "Outerwear & Jackets",
    categorySlug: "jackets",
    price: 2499,
    oldPrice: 3499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING"
  },

  // Hoodies & Sweatshirts (expanded to 6 items)
  {
    id: "h1",
    name: "Oversized Hoodie - Black",
    slug: "oversized-hoodie-black",
    category: "Hoodies & Sweatshirts",
    categorySlug: "hoodies",
    price: 1499,
    oldPrice: 2199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING"
  },
  {
    id: "h2",
    name: "Graphic Print Pullover Hoodie",
    slug: "graphic-pullover-hoodie",
    category: "Hoodies & Sweatshirts",
    categorySlug: "hoodies",
    price: 1599,
    oldPrice: 2299,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80"],
    sizes: ["M", "L", "XL", "XXL"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "h3",
    name: "Fleece Lined Zip-Up Hoodie",
    slug: "fleece-zip-up-hoodie",
    category: "Hoodies & Sweatshirts",
    categorySlug: "hoodies",
    price: 1799,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "h4",
    name: "Crop Hoodie - Pastel Pink",
    slug: "crop-hoodie-pink",
    category: "Hoodies & Sweatshirts",
    categorySlug: "hoodies",
    price: 1299,
    oldPrice: 1999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "TRENDING"
  },
  {
    id: "h5",
    name: "Full Zip Hoodie with Pockets",
    slug: "full-zip-pockets-hoodie",
    category: "Hoodies & Sweatshirts",
    categorySlug: "hoodies",
    price: 1699,
    oldPrice: 2399,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "SALE"
  },
  {
    id: "h6",
    name: "Tie-Dye Oversized Hoodie",
    slug: "tie-dye-oversized-hoodie",
    category: "Hoodies & Sweatshirts",
    categorySlug: "hoodies",
    price: 1899,
    oldPrice: 2599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "NEW ARRIVAL"
  },

  // Underwear & Lingerie (expanded to 8 items as requested)
  {
    id: "u1",
    name: "Silk Satin Lace Lingerie Set",
    slug: "silk-satin-lace-lingerie",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 1899,
    oldPrice: 2499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1588613143924-4ba278d67295?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "u2",
    name: "Premium Cotton Seamless Panty Pack",
    slug: "seamless-panty-pack",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 999,
    oldPrice: 1599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1616150630938-1212789958b9?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "u3",
    name: "Lace Trim Mesh Bodysuit",
    slug: "lace-mesh-bodysuit",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 2299,
    oldPrice: 2999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "u4",
    name: "Wireless Lace Bralette",
    slug: "wireless-lace-bralette",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 1299,
    oldPrice: 1899,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571658957020-6f4d8c6c4d0e?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  // {
  //   id: "u5",
  //   name: "High-Waist Shaping Briefs",
  //   slug: "high-waist-shaping-briefs",
  //   category: "Underwear & Lingerie",
  //   categorySlug: "underwear",
  //   price: 799,
  //   oldPrice: 1199,
  //   currency: "INR",
  //   images: ["https://images.unsplash.com/photo-1616150630938-1212789958b9?w=800&q=80"],
  //   sizes: ["S", "M", "L", "XL"],
  //   tag: "BASIC"
  // },
  {
    id: "u6",
    name: "Embroidered Thong Set",
    slug: "embroidered-thong-set",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 1499,
    oldPrice: 2099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "u7",
    name: "Bamboo Fiber Boyshorts Pack",
    slug: "bamboo-boyshorts-pack",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 899,
    oldPrice: 1399,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1616150630938-1212789958b9?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "u8",
    name: "Strapless Convertible Bra",
    slug: "strapless-convertible-bra",
    category: "Underwear & Lingerie",
    categorySlug: "underwear",
    price: 1699,
    oldPrice: 2299,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571658957020-6f4d8c6c4d0e?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "TRENDING"
  },

  // Kurtas & Ethnic Wear (retained/expanded to 6 items for fusion)
  {
    id: "k1",
    name: "Floral Printed Anarkali Kurta Set",
    slug: "floral-anarkali-kurta",
    category: "Kurtas & Ethnic Wear",
    categorySlug: "kurtas",
    price: 2499,
    oldPrice: 3499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1610030469668-1a4e4a3a8d6e?w=800&q=80"],
    sizes: ["S", "M", "L", "XL"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "k2",
    name: "Cotton Straight Kurta with Palazzo",
    slug: "cotton-straight-kurta-palazzo",
    category: "Kurtas & Ethnic Wear",
    categorySlug: "kurtas",
    price: 1899,
    oldPrice: 2599,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?w=800&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "SALE"
  },
  {
    id: "k3",
    name: "Embroidered Rayon Kurti",
    slug: "embroidered-rayon-kurti",
    category: "Kurtas & Ethnic Wear",
    categorySlug: "kurtas",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1594573639878-3b8b066842a3?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "SALE"
  },
  {
    id: "k4",
    name: "Fusion Kurta with Jeans Fit",
    slug: "fusion-jeans-kurta",
    category: "Kurtas & Ethnic Wear",
    categorySlug: "kurtas",
    price: 1999,
    oldPrice: 2799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1610030469668-1a4e4a3a8d6e?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "TRENDING"
  },
  {
    id: "k5",
    name: "Printed Churidar Set",
    slug: "printed-churidar-set",
    category: "Kurtas & Ethnic Wear",
    categorySlug: "kurtas",
    price: 2199,
    oldPrice: 2999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?w=800&q=80"],
    sizes: ["M", "L", "XL"],
    tag: "HOT"
  },
  {
    id: "k6",
    name: "Silk Blend Kurta Tunic",
    slug: "silk-blend-kurta-tunic",
    category: "Kurtas & Ethnic Wear",
    categorySlug: "kurtas",
    price: 2699,
    oldPrice: 3699,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1594573639878-3b8b066842a3?w=800&q=80"],
    sizes: ["XS", "S", "M"],
    tag: "PREMIUM"
  },

  // Sarees (retained/expanded to 4 items)
  {
    id: "s1",
    name: "Georgette Printed Saree",
    slug: "georgette-printed-saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 2999,
    oldPrice: 3999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80"],
    sizes: ["Free Size"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "s2",
    name: "Silk Kanjeevaram Saree",
    slug: "silk-kanjeevaram-saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 4999,
    oldPrice: 6999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1604902412734-8d3e6e3e0e3e?w=800&q=80"],
    sizes: ["Free Size"],
    tag: "PREMIUM"
  },
  {
    id: "s3",
    name: "Chiffon Fusion Saree",
    slug: "chiffon-fusion-saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 3499,
    oldPrice: 4499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80"],
    sizes: ["Free Size"],
    tag: "SALE"
  },
  {
    id: "s4",
    name: "Embroidered Net Saree",
    slug: "embroidered-net-saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 3999,
    oldPrice: 5499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1604902412734-8d3e6e3e0e3e?w=800&q=80"],
    sizes: ["Free Size"],
    tag: "TRENDING"
  },

  // Shoes (new category: 6 items, trendy sneakers/heels for LA)
  {
    id: "shoe1",
    name: "White Sneakers - Chunky Sole",
    slug: "chunky-white-sneakers",
    category: "Shoes",
    categorySlug: "shoes",
    price: 2999,
    oldPrice: 3999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"],
    sizes: ["6", "7", "8", "9", "10"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "shoe2",
    name: "Strappy Heels - Nude",
    slug: "strappy-nude-heels",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3499,
    oldPrice: 4499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd1?w=800&q=80"],
    sizes: ["5", "6", "7", "8"],
    tag: "PREMIUM"
  },
  {
    id: "shoe3",
    name: "Espadrille Wedges",
    slug: "espadrille-wedges",
    category: "Shoes",
    categorySlug: "shoes",
    price: 2499,
    oldPrice: 3499,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"],
    sizes: ["7", "8", "9"],
    tag: "SALE"
  },
  {
    id: "shoe4",
    name: "Ankle Boots - Leather",
    slug: "leather-ankle-boots",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3999,
    oldPrice: 4999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"],
    sizes: ["6", "7", "8", "9"],
    tag: "TRENDING"
  },
  {
    id: "shoe5",
    name: "Platform Sandals",
    slug: "platform-sandals",
    category: "Shoes",
    categorySlug: "shoes",
    price: 2799,
    oldPrice: 3799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
    sizes: ["5", "6", "7"],
    tag: "HOT"
  },
  {
    id: "shoe6",
    name: "Loafers - Casual Slip-On",
    slug: "casual-slip-on-loafers",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3199,
    oldPrice: 4199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"],
    sizes: ["8", "9", "10"],
    tag: "NEW ARRIVAL"
  },

  // Bags & Accessories (new category: 8 items, chic for LA style)
  {
    id: "acc1",
    name: "Crossbody Bag - Leather",
    slug: "leather-crossbody-bag",
    category: "Bags & Accessories",
    categorySlug: "accessories",
    price: 1999,
    oldPrice: 2799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
    sizes: ["One Size"],
    tag: "SALE"
  },
  {
    id: "acc2",
    name: "Hoop Earrings - Gold",
    slug: "gold-hoop-earrings",
    category: "Bags & Accessories",
    categorySlug: "accessories",
    price: 799,
    oldPrice: 1199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["One Size"],
    tag: "TRENDING"
  },
  {
    id: "acc3",
    name: "Tote Bag - Canvas Print",
    slug: "canvas-print-tote",
    category: "Bags & Accessories",
    categorySlug: "accessories",
    price: 1299,
    oldPrice: 1799,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
    sizes: ["One Size"],
    tag: "NEW ARRIVAL"
  },
  {
    id: "acc4",
    name: "Sunglasses - Cat Eye",
    slug: "cat-eye-sunglasses",
    category: "Bags & Accessories",
    categorySlug: "accessories",
    price: 1499,
    oldPrice: 2099,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1570549717069-33bed1eb7058?w=800&q=80"],
    sizes: ["One Size"],
    tag: "HOT"
  },
  {
    id: "acc5",
    name: "Layered Necklace Set",
    slug: "layered-necklace-set",
    category: "Bags & Accessories",
    categorySlug: "accessories",
    price: 999,
    oldPrice: 1399,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["One Size"],
    tag: "SALE"
  },
  {
    id: "acc6",
    name: "Belt Bag - Fanny Pack",
    slug: "fanny-pack-belt-bag",
    category: "Bags & Accessories",
    categorySlug: "accessories",
    price: 1599,
    oldPrice: 2199,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
    sizes: ["One Size"],
    tag: "TRENDING"
  },
  {
    id: "f3",
    name: "Classic Silk Shirt - Midnight Black",
    slug: "classic-silk-shirt",
    category: "Womenswear",
    categorySlug: "women",
    price: 4599,
    oldPrice: 5999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "PREMIUM",
    fitNotes: "Relaxed fit with a slightly oversized silhouette. For a more tailored look, consider sizing down.",
    modelInfo: "Model is 5'8\" and is wearing a size S.",
    fabric: "100% Habotai Silk",
    care: "Dry clean only. Gentle steam required.",
    sizeChart: [
      { size: "XS", chest: "96", length: "68", shoulder: "42", sleeve: "58" },
      { size: "S", chest: "102", length: "70", shoulder: "44", sleeve: "60" },
      { size: "M", chest: "108", length: "72", shoulder: "46", sleeve: "62" },
      { size: "L", chest: "114", length: "74", shoulder: "48", sleeve: "64" }
    ],
    reviews: { rating: 4.8, count: 42 }
  },

  // 1. New In / Arrivals (Gucci-Style: Fresh, Exclusive Drops)
  {
    id: "ni1",
    name: "Silk Scarf - Heritage Print",
    slug: "heritage-silk-scarf",
    category: "Accessories",
    categorySlug: "accessories",
    price: 2999,
    oldPrice: 3999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"],
    sizes: ["One Size"],
    tag: "EXCLUSIVE",
    fitNotes: "Versatile 90x90 cm square; drape as headscarf or belt for effortless elegance.",
    modelInfo: "Universal size fits all silhouettes.",
    fabric: "100% Mulberry Silk",
    care: "Dry clean recommended. Iron on low heat.",
    reviews: { rating: 5.0, count: 12 }
  },
  {
    id: "ni2",
    name: "Leather Tote - Artisan Tan",
    slug: "artisan-leather-tote",
    category: "Accessories",
    categorySlug: "accessories",
    price: 12999,
    oldPrice: 15999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1548033622-a7d4024a520e?w=800&q=80"],
    sizes: ["One Size"],
    tag: "EXCLUSIVE",
    fitNotes: "Structured body with ample space for a 15-inch laptop and daily essentials.",
    fabric: "Full-Grain Italian Leather",
    care: "Wipe clean with semi-moist cloth. Condition every 6 months.",
    reviews: { rating: 4.9, count: 28 }
  },

  // 2. Ready-to-Wear / Wardrobe Essentials (Armani-Style: Timeless Tailoring)
  {
    id: "rtw1",
    name: "Tailored Wool Blazer - Midnight Navy",
    slug: "midnight-navy-blazer",
    category: "Ready-to-Wear",
    categorySlug: "ready-to-wear",
    price: 8999,
    oldPrice: 11999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1525507119028-ed4cdec9920d?w=800&q=80"],
    sizes: ["XS", "S", "M", "L"],
    tag: "PREMIUM",
    fitNotes: "Sculpted silhouette, true to size with structured shoulders. Model (5'7\") wears S for a sharp, elongated line.",
    modelInfo: "Model height 5'7\", wearing size S.",
    fabric: "100% Sustainable Merino Wool",
    care: "Professional dry clean only.",
    sizeChart: [
      { size: "XS", chest: "88", length: "72", shoulder: "38", sleeve: "60" },
      { size: "S", chest: "94", length: "74", shoulder: "40", sleeve: "61" },
      { size: "M", chest: "100", length: "76", shoulder: "42", sleeve: "62" },
      { size: "L", chest: "106", length: "78", shoulder: "44", sleeve: "63" }
    ],
    reviews: { rating: 4.7, count: 56 }
  },

  // 3. Intimates & Loungewear (Gucci-Style: Sensual, Luxe Comfort)
  {
    id: "il1",
    name: "Silk Kimono Robe - Ivory Lace",
    slug: "ivory-lace-kimono",
    category: "Intimates & Lounge",
    categorySlug: "intimates-lounge",
    price: 4999,
    oldPrice: 6999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1571658957020-6f4d8c6c4d0e?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "NEW ARRIVAL",
    fitNotes: "Relaxed drape with tie waist; one size fits most (XS–XL). Flowy for cozy evenings.",
    modelInfo: "Relaxed fit, one size recommended for most.",
    fabric: "Modal-Silk Blend",
    care: "Hand wash cold. Lay flat to dry.",
    reviews: { rating: 4.6, count: 31 }
  },

  // 4. Jewelry & Fine Accessories (Armani-Style: Understated Elegance)
  {
    id: "j1",
    name: "Gold Chain Necklace - Delicate Link",
    slug: "delicate-gold-chain",
    category: "Jewelry",
    categorySlug: "jewelry",
    price: 3999,
    oldPrice: 5999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1570549717069-33bed1eb7058?w=800&q=80"],
    sizes: ["One Size"],
    tag: "TRENDING",
    fitNotes: "18-inch adjustable chain; layer with pendants for personalized style.",
    fabric: "18K Gold Plated Vermeil",
    care: "Avoid contact with water and perfumes.",
    reviews: { rating: 4.9, count: 88 }
  },

  // 5. Sustainable Luxe / Eco Edit (Modern Gucci Twist: Conscious Chic)
  {
    id: "se1",
    name: "Organic Linen Midi Dress - Earth Tone",
    slug: "organic-linen-midi",
    category: "Sustainable Edit",
    categorySlug: "sustainable",
    price: 5999,
    oldPrice: 7999,
    currency: "INR",
    images: ["https://images.unsplash.com/photo-1591395862178-fd5c32b9a3f8?w=800&q=80"],
    sizes: ["S", "M", "L"],
    tag: "ECO",
    fitNotes: "Breathable, mid-calf length; true to size with gentle A-line for all-day ease.",
    modelInfo: "Model is 5'9\", wearing size M.",
    fabric: "100% Organic Linen",
    care: "Machine wash delicate cycle. Iron while damp.",
    sizeChart: [
      { size: "S", chest: "90", length: "115", shoulder: "36", sleeve: "20" },
      { size: "M", chest: "96", length: "117", shoulder: "38", sleeve: "21" },
      { size: "L", chest: "102", length: "119", shoulder: "40", sleeve: "22" }
    ],
    reviews: { rating: 4.8, count: 24 }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  return PRODUCTS.filter(
    (p) => (p.categorySlug === product.categorySlug || p.tag === "SALE") && p.id !== product.id
  ).slice(0, 4);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter(p => p.categorySlug === categorySlug);
}

export function getSaleProducts(): Product[] {
  return PRODUCTS.filter(p => !!p.oldPrice && p.oldPrice > p.price);
}