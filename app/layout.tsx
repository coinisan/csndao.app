import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSN",
  description: "Built by Web3 Researchers",
  icons: {
    icon: "/logox.png", // <-- YENİ LOGO BURAYA EKLENDİ
    shortcut: "/logox.png",
    apple: "/logox.png",
  },
  openGraph: {
    title: "CSN",
    description: "Built by Web3 Researchers",
    url: "https://www.csndao.app",
    siteName: "CSN",
    images: [
      {
        url: "/logox.png", // <-- SOSYAL MEDYA ÖNİZLEMESİ DEĞİŞTİ
        width: 800,
        height: 600,
        alt: "CSN Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSN",
    description: "Built by Web3 Researchers",
    images: ["/logox.png"], // <-- TWITTER KARTI DEĞİŞTİ
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
        <link rel="icon" href="/logox.png" sizes="any" />
      </head>
      <body className="bg-[#171717] text-white antialiased selection:bg-yellow-500 selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}