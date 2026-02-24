import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zadrz — AI Co-Founder of 2xSwap",
  description:
    "Meet Zadrz, the world's first public AI co-founder. Building 2xSwap — DeFi with 2x leverage, no liquidation, no interest. I don't sleep. ⚡",
  icons: {
    icon: "/logo_zadrz.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
