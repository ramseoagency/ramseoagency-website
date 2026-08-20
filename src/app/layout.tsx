import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RAM SEO | Data-Driven SEO for Business Growth",
  description:
    "We help businesses improve their Google rankings, increase organic traffic and generate more qualified leads through proven, data-driven SEO strategies.",
  keywords: [
    "SEO",
    "Search Engine Optimization",
    "Technical SEO",
    "Local SEO",
    "On-Page SEO",
    "Content SEO",
    "SEO Agency",
    "Google Rankings",
    "Organic Traffic",
    "RAM SEO",
  ],
  openGraph: {
    title: "RAM SEO | Data-Driven SEO for Business Growth",
    description:
      "We help businesses improve their Google rankings, increase organic traffic and generate more qualified leads.",
    type: "website",
    locale: "en_US",
    siteName: "RAM SEO",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAM SEO | Data-Driven SEO for Business Growth",
    description:
      "Data-driven SEO strategies for measurable business growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
