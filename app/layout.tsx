import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSN HUB",
  description: "Built by Coinisan", // <-- İSTEDİĞİN YAZI BURADA
  openGraph: {
    title: "CSN HUB",
    description: "Built by Coinisan", // <-- SOSYAL MEDYA ÖNİZLEMESİ BURADA
    url: "https://www.csndao.app",
    siteName: "CSN HUB",
    images: [
      {
        url: "/logos/cdice.png", // Buradaki resim yoksa boş gri kutu çıkar, varsa görünür
        width: 1200,
        height: 630,
        alt: "CSN HUB - Built by Coinisan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSN HUB",
    description: "Built by Coinisan", // <-- TWITTER AÇIKLAMASI BURADA
    images: ["/logos/cdice.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}