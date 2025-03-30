import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "yurio-portfolio",
  description: "Yurio Windiatmoko's Professional Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-slate-50`}
      >
        <Navbar />
        <div className="mt-7 md:mt-20">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
