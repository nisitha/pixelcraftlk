import type { Metadata, Viewport } from "next";
import { Inter, Italianno } from "next/font/google";
import { Navbar } from "@/components/navigation";
import { FooterSection } from "@/components/sections";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | PixelCraft Studios",
    default: "PixelCraft Studios — Fueling Next-Generation Digital Brands",
  },
  description:
    "PixelCraft Studios is a premier digital product, engineering, and design agency crafting scalable, high-performance web experiences and brands.",
  metadataBase: new URL("https://pixelcraftlk.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PixelCraft Studios — Fueling Next-Generation Digital Brands",
    description:
      "Crafting bold digital products, high-conversion web architectures, and scalable brand identities.",
    url: "https://pixelcraftlk.com",
    siteName: "PixelCraft Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelCraft Studios — Fueling Next-Generation Digital Brands",
    description:
      "Crafting bold digital products, high-conversion web architectures, and scalable brand identities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${italianno.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--dark-color)] text-white font-sans antialiased overflow-x-hidden pt-[80px]">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
