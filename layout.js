import "./globals.css";

export const metadata = {
  title: "CryptoTerminal — Binance Live Dashboard",
  description: "Real-time crypto dashboard with Binance API, trading signals, and MQL5-inspired analytics.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
