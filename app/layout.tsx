import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footerdemo } from "@/components/ui/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextZenLoom | AI Solutions for the Future",
  description: "NextZenLoom creates innovative AI applications and web solutions that transform how businesses operate and people interact with technology.",
  keywords: ["AI", "artificial intelligence", "web applications", "NextZenLoom", "machine learning", "technology solutions"],
  authors: [{ name: "NextZenLoom Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextzenloom.com",
    title: "NextZenLoom | AI Solutions for the Future",
    description: "NextZenLoom creates innovative AI applications and web solutions that transform how businesses operate and people interact with technology.",
    siteName: "NextZenLoom",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextZenLoom | AI Solutions for the Future",
    description: "NextZenLoom creates innovative AI applications and web solutions that transform how businesses operate and people interact with technology.",
  },
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
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footerdemo />
        </div>
      </body>
    </html>
  );
}
