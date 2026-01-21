import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/header_navbar-14";
import Footer from "@/components/footer_footer-16";
import CookieBanner from "@/components/cookieBanner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riva Design — Falegnameria di Lusso su Misura",
  description: "Atelier di falegnameria di alta gamma: cucine, armadi, living e interni su misura per clienti e architetti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}