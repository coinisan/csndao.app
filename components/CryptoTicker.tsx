"use client";

import { useEffect, useRef } from "react";

export default function CryptoTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
          { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" },
          { "proName": "BINANCE:SOLUSDT", "title": "Solana" },
          { "proName": "BINANCE:XRPUSDT", "title": "XRP" },
          { "proName": "BINANCE:DOGEUSDT", "title": "Dogecoin" },
          { "proName": "BINANCE:AVAXUSDT", "title": "Avalanche" },
          { "proName": "BINANCE:BNBUSDT", "title": "BNB" }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": true, // Arka planımızla uyumlu olması için şeffaf
        "displayMode": "adaptive",
        "locale": "en"
      });
      
      // Eski script varsa temizle (Duplicate olmasın)
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full fixed bottom-0 left-0 z-40 bg-black/50 backdrop-blur-sm border-t border-white/5">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}