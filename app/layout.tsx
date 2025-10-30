export const metadata = {
  title: "CSN",
  description: "CSN HUB – Onchain miniapps built by Coinisan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
