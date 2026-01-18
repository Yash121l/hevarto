import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://hevarto.com"), // Change to your domain
  title: {
    default: "Hevarto — All-in-One SaaS Platform for Builders",
    template: "%s | Hevarto",
  },
  description:
    "Hevarto empowers modern builders with tools like CRM, security apps, analytics, and project automation — all in one powerful SaaS solution.",
  keywords: [
    "SaaS for Builders",
    "CRM",
    "Construction Tech",
    "Hevarto",
    "Builder Platform",
    "Project Management",
    "Security Monitoring",
  ],
  authors: [{ name: "Hevarto Team", url: "https://hevarto.com" }],
  creator: "Hevarto Inc.",
  openGraph: {
    title: "Hevarto — Your Digital Toolbox for Construction",
    description:
      "All-in-one SaaS suite for modern builders — CRM, security, workflow automation, and more.",
    url: "https://hevarto.com",
    siteName: "Hevarto",
    images: [
      {
        url: "https://hevarto.com/og-image.png", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Hevarto Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hevarto — All-in-One SaaS for Builders",
    description:
      "Powerful tools like CRM, security, analytics, and project automation — built for construction and real estate teams.",
    images: ["https://hevarto.com/og-image.png"],
    creator: "@hevarto",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-[#0f172a] dark:text-white`}
      >
        {/* You can wrap this in Providers if using Theme/Session/Store */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
