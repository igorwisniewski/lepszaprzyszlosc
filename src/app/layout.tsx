import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/comps/nav";
import Footer from "@/app/comps/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: '%s | Fundacja Lepsza Przyszłość',
        default: 'Fundacja Lepsza Przyszłość - Pomoc Seniorom', // Tytuł domyślny
    },
  description: "Kompleksowe wsparcie dla seniorów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
