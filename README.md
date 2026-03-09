# ADORA — Redefining Luxury E-Commerce

<div align="center">

![ADORA](https://img.shields.io/badge/ADORA-Luxury%20Fashion-000000?style=for-the-badge&labelColor=000000)
![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwindcss)
![Go](https://img.shields.io/badge/Go-Backend-00ADD8?style=flat-square&logo=go)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)

**Effortless, elevated essentials — crafted for the modern shopper.**

[Live Preview](#) · [Report Bug](https://github.com/heygaurav1/adora.com/issues) · [Request Feature](https://github.com/heygaurav1/adora.com/issues)

</div>

---

## ✨ Overview

**ADORA** is a premium luxury fashion e-commerce platform built with a mobile-first, LA-inspired design philosophy. It combines high-fashion editorial aesthetics with modern web performance to deliver an immersive shopping experience.

### Key Features

- 🛍️ **Full E-Commerce Flow** — Browse, product detail, cart, checkout, and authentication
- 🎨 **Editorial Design** — Cinematic hero sections, hover zoom, micro-animations, and premium typography
- 💵 **Dual Currency** — USD pricing (primary) with INR as secondary for global reach
- 🌿 **Sustainability Signals** — Eco badges, organic fabric tags, carbon neutral delivery messaging
- ⭐ **Social Proof** — Star ratings, review counts, trending tags, and LA-specific testimonials
- 🛒 **Interactive Cart** — Slide-in drawer with hover effects, quick-add buttons, and smart quantity controls
- 🔐 **Auth System** — Login & Registration pages connected to Go backend API
- 📱 **Mobile-First** — Responsive across all breakpoints, optimized for on-the-go browsing
- 🚀 **Fast Shipping Signals** — "Free 2-Day LA Shipping" badges throughout the UX

---

## 📸 Screenshots

| Hero Section | Product Grid | Cart Drawer |
|---|---|---|
| Cinematic full-bleed hero with lifestyle imagery | USD pricing, star ratings, sustainability badges | Premium slide-in cart with checkout flow |

| Product Detail | Login | Sale Section |
|---|---|---|
| Full PDP with size guide, fit notes, express checkout | Full-black luxury auth aesthetic | Red CTA badges, discount percentages |

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion + CSS Keyframes |
| **Carousel** | Embla Carousel |
| **Backend** | Go (Golang) REST API |
| **Database** | Supabase (planned) |
| **State Management** | React Context API (Cart, Wishlist) |

---

## 📁 Project Structure

```
ADORA/
├── backend/
│   └── main.go                    # Go API server (auth, CORS)
├── public/                        # Static assets & favicon
├── src/
│   ├── app/
│   │   ├── page.tsx               # Homepage (LA Editor's Edit)
│   │   ├── layout.tsx             # Root layout with providers
│   │   ├── globals.css            # Design system & animations
│   │   ├── brands/page.tsx        # Brands directory
│   │   ├── category/[slug]/       # Dynamic category pages
│   │   ├── checkout/page.tsx      # Checkout flow
│   │   ├── kids/page.tsx          # Kidswear (coming soon)
│   │   ├── login/page.tsx         # Auth: Login
│   │   ├── register/page.tsx      # Auth: Registration
│   │   ├── men/page.tsx           # Menswear collection
│   │   ├── women/page.tsx         # Womenswear collection
│   │   ├── new-in/page.tsx        # New arrivals
│   │   ├── sale/page.tsx          # Sale items
│   │   ├── orders/page.tsx        # Order history
│   │   ├── product/[slug]/        # Product detail page (PDP)
│   │   └── underwear/page.tsx     # Intimates & lingerie
│   ├── components/
│   │   ├── Header.tsx             # Sticky nav with mega-menu dropdown
│   │   ├── Footer.tsx             # Brand footer with links
│   │   ├── ProductCard.tsx        # Card with USD, ratings, badges, quick-add
│   │   ├── CartDrawer.tsx         # Slide-in cart with LA shipping badges
│   │   ├── CommunitySection.tsx   # Newsletter / community
│   │   ├── HeroBanner.tsx         # Reusable hero banner
│   │   ├── ProductCarousel.tsx    # Embla-powered carousel
│   │   ├── WhatsAppButton.tsx     # Floating WhatsApp CTA
│   │   └── Providers.tsx          # Context providers wrapper
│   ├── context/
│   │   ├── CartContext.tsx         # Cart state management
│   │   └── WishlistContext.tsx     # Wishlist state management
│   └── data.ts                    # Product catalog (1600+ lines, 80+ products)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**
- **Go** 1.21+ (for backend API, optional)

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

### Backend (Optional)

```bash
# Start the Go API server
cd backend
go run main.go
```

The API will be running at **http://localhost:8080**

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, LA Editor's Edit, departments, sustainability story, new arrivals, testimonials, sale |
| `/women` | Womenswear collection grid with filters |
| `/men` | Menswear collection grid with filters |
| `/kids` | Kidswear (coming soon) |
| `/new-in` | New arrivals section |
| `/sale` | Sale items with discount badges |
| `/brands` | Brand directory |
| `/product/[slug]` | Product detail page — images, size guide, fit notes, express checkout |
| `/checkout` | Checkout flow |
| `/orders` | Order history |
| `/login` | Authentication — Login |
| `/register` | Authentication — Registration |
| `/category/[slug]` | Dynamic category pages |
| `/underwear` | Intimates & Lingerie collection |

---

## 🎨 Design Philosophy

ADORA follows a **minimalist luxury** design language inspired by top-tier fashion houses:

- **Typography**: Inter (body) + Outfit (display) — clean, sans-serif, no shouting
- **Color Palette**: Black/white core with emerald sustainability accents and amber trending badges
- **Spacing**: Generous whitespace — letting products breathe
- **Interactions**: Hover zoom on images, reveal-on-hover CTAs, smooth slide-in drawers
- **Trust**: Sustainability badges, star ratings, shipping guarantees woven into every touchpoint

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/login` | User authentication |
| `POST` | `/api/register` | User registration |

---

## 📦 Scripts

```bash
npm run dev        # Start development server (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint code analysis
```

---

## 🗺️ Roadmap

- [x] Homepage with LA editorial design
- [x] Product detail page with size guide & express checkout
- [x] Cart drawer with shipping badges
- [x] Authentication (Login + Register)
- [x] USD/INR dual pricing
- [x] Star ratings & sustainability badges
- [ ] Payment integration (Stripe / Razorpay)
- [ ] Supabase database integration
- [ ] User profile & order tracking
- [ ] Search with filters & sorting
- [ ] Wishlist page with sharing
- [ ] Admin dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Gaurav Paul** — [@heygaurav1](https://github.com/heygaurav1)

---

<div align="center">

**ADORA** — *The Redefined Luxury*

Made with ♥ for the modern Angeleno.

</div>
