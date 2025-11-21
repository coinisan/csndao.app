import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSN HUB",
  description:
    "Welcome to Coinisan’s world you can find everything related to Coinisan and CSN right here.",
  openGraph: {
    title: "CSN HUB",
    description:
      "Welcome to Coinisan’s world you can find everything related to Coinisan and CSN right here.",
    url: "https://www.csndao.app",
    siteName: "CSN HUB",
    images: [
      {
        url: "/logos/cdice.png", // burada istersen farklı bir görsel kullanabiliriz
        width: 1200,
        height: 630,
        alt: "CSN HUB",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSN HUB",
    description:
      "Welcome to Coinisan’s world you can find everything related to Coinisan and CSN right here.",
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
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
