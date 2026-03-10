# ADORA — Redefining Luxury E-Commerce

<div align="center">

![ADORA](https://img.shields.io/badge/ADORA-Deep%20Black%20Luxury%20Fashion-000000?style=for-the-badge&labelColor=000000)
![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-FFCA28?style=flat-square&logo=firebase)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)

**Effortless, elevated essentials — crafted for the modern shopper in a deep-black luxury aesthetic.**
<br>
🔗 [Adora](https://adora-com-w68u.vercel.app/)  
🐞 [Report a Bug](https://github.com/heygaurav1/adora.com/issues)  
💡 [Request a Feature](https://github.com/heygaurav1/adora.com/issues)


</div>

---

## ✨ Overview

**ADORA** is a premium luxury fashion e-commerce platform built with a mobile-first, LA-inspired design philosophy. It combines high-fashion editorial aesthetics with modern web performance to deliver an immersive shopping experience.

### Key Features

- 💎 **Deep Black Luxury Aesthetic** — A sophisticated dark-mode first design language with high-contrast elements and glassmorphism.
- 🖋️ **Simple Thin Typography** — Ultra-light font weights (Extralight, Thin) for a modern, high-end editorial feel.
- 🔥 **Firebase Integration** — Full secure authentication (Email/Password, Google OAuth) and real-time Firestore database for orders and profiles.
- 🛍️ **Full E-Commerce Flow** — Browse, product detail, cart, checkout, and authentication.
- 💳 **Advanced Checkout** — **Fast Pay** (Apple/Google Pay) and **Cash on Delivery (COD)** options integrated.
- 🏰 **Iconic Branding** — Large, Gucci-style luxury branding in the footer for a premium runway feel.
- 🎨 **Cinematic Visuals** — Hero sections, hover zoom, reveal-on-hover CTAs, and smooth Framer Motion transitions.
- ⭐ **Social Proof** — Star ratings, review counts, trending tags, and LA-specific testimonials.
- 📱 **Mobile-First** — Responsive across all breakpoints, optimized for on-the-go browsing.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 (Dark Theme First) |
| **Backend / Auth** | **Firebase** (Auth, Firestore, Analytics) |
| **Icons** | Lucide React |
| **Animations** | **Framer Motion** |
| **Carousel** | Embla Carousel |
| **State Management** | React Context API (Auth, Cart, Wishlist) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**
- **Firebase Project** (Enable Email/Password and Google Login in the console)

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
- **Motion**: Subtle scale-up effects and Framer Motion transitions for a cinematic experience.

---

## 🌍 Vercel Deployment Notes

The project is fully **Vercel-ready**:
- **Consolidated Components**: Redundant root `components/` removed in favor of `src/components/` to avoid build conflicts.
- **Fixed Build Errors**: Resolved all TypeScript and context errors (e.g., `clearCart` implementation in `CartContext`).
- **Route Sanitization**: Resolved case-sensitivity and naming collisions in `src/app/product/`.
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
