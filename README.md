# ADORA — Redefining Luxury E-Commerce

<div align="center">

![ADORA](https://img.shields.io/badge/ADORA-Deep%20Black%20Luxury%20Fashion-000000?style=for-the-badge&labelColor=000000)
![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwindcss)
![Rust](https://img.shields.io/badge/Rust-Backend-dea584?style=flat-square&logo=rust)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)

**Effortless, elevated essentials — crafted for the modern shopper in a deep-black luxury aesthetic.**

[Live Preview](#) · [Report Bug](https://github.com/heygaurav1/adora.com/issues) · [Request Feature](https://github.com/heygaurav1/adora.com/issues)

</div>

---

## ✨ Overview

**ADORA** is a premium luxury fashion e-commerce platform built with a mobile-first, LA-inspired design philosophy. It combines high-fashion editorial aesthetics with modern web performance to deliver an immersive shopping experience.

### Key Features

- 💎 **Deep Black Luxury Aesthetic** — A sophisticated dark-mode first design language with high-contrast elements.
- 🖋️ **Simple Thin Typography** — Ultra-light font weights (Extralight, Thin) for a modern, high-end editorial feel.
- 🛍️ **Full E-Commerce Flow** — Browse, product detail, cart, checkout, and authentication.
- 💳 **Advanced Checkout** — **Fast Pay** (Apple/Google Pay) and **Cash on Delivery (COD)** options integrated.
- 🎨 **Cinematic Visuals** — Hero sections, hover zoom, reveal-on-hover CTAs, and 1.5s smooth transitions.
- 🦀 **Rust-Powered Payments** — Secure, memory-safe backend (Axum + Stripe) for handling payment intents.
- 🌿 **Sustainability Signals** — Eco badges, organic fabric tags, and conscious luxury messaging.
- ⭐ **Social Proof** — Star ratings, review counts, trending tags, and LA-specific testimonials.
- 📱 **Mobile-First** — Responsive across all breakpoints, optimized for on-the-go browsing.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 (Dark Theme First) |
| **Icons** | Lucide React |
| **Carousel** | Embla Carousel |
| **Secure Backend** | Rust (Axum, async-stripe) |
| **Auth Backend** | Go (Golang) REST API |
| **State Management** | React Context API (Cart, Wishlist) |

---

## 📁 Project Structure

```
ADORA/
├── backend/                    # Go API server (auth, CORS)
├── rust-payments-example/      # Rust payment bridge (Axum + Stripe)
├── public/                     # Static assets & favicon
├── src/
│   ├── app/
│   │   ├── page.tsx            # Homepage (Deep Black Theme)
│   │   ├── checkout/           # Advanced checkout flow
│   │   ├── login/              # Auth: Login (Thin typography)
│   │   ├── product/[slug]/     # Product detail page (Consolidated)
│   │   └── ...                 # Other collection pages
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav with mega-menu
│   │   ├── ProductCard.tsx     # Thinned fonts, dark-vibe card
│   │   └── ...                 # Other UI components
│   └── data.ts                 # Central product catalog
└── ...
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**
- **Rust** 1.75+ (for payment bridge)
- **Go** 1.21+ (for auth API)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/heygaurav1/adora.com.git
cd adora.com

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be running at **http://localhost:3000**

---

## 🎨 Design Philosophy — "Simple Thin"

ADORA follows a **minimalist dark luxury** design language:

- **Typography**: Extensive use of `font-extralight` and `font-thin` for a sophisticated, non-aggressive feel.
- **Background**: Absolute black (`bg-black`) paired with dark zinc (`bg-zinc-950`) for depth.
- **Accents**: White for CTAs, Emerald for sustainability, and Amber for social proof.
- **Motion**: Subtle scale-up effects and 1.5s image fades for a cinematic experience.

---

## 🌍 Vercel Deployment Notes

The project has been optimized for Vercel:
- **Consolidated Components**: Redundant root `components/` removed in favor of `src/components/` to avoid build conflicts.
- **Route Sanitization**: Resolved case-sensitivity and naming collisions in `src/app/product/` (deleted duplicate `[slug/]` and invalid `[slug` folders).
- **TypeScript Compliance**: All types checked against centralized `data.ts`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.


This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Gaurav Paul** — [@heygaurav1](https://github.com/heygaurav1)

---

<div align="center">

**ADORA** — *The Redefined Luxury*

Made with ♥ for the modern Angeleno.

</div>
