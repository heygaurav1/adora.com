import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "ADORA — Shop T-shirts, Jackets, Shorts and Joggers Online",
  description:
    "Shop Men's T-shirts, Oversized T-shirts, Joggers, Shorts, Jackets, Hoodies and Sweatshirts. Join ADORA to CHANGE, to set yourself Free.",
  keywords:
    "men's fashion india, t-shirts, oversized, joggers, shorts, jackets, hoodies, ADORA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col items-center w-full min-h-screen bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-6 focus:py-3 focus:font-bold focus:shadow-xl"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
