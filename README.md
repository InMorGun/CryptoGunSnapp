# CryptoTerminal — Binance Live Dashboard

Real-time crypto dashboard powered by **Binance Spot API** with MQL5-inspired trading signals.

## Features

- **Dashboard** — Live prices, 24h stats, sparkline charts for 20 trading pairs
- **Signal** — ATR-based trading signals with SL/TP/R:R/Position Sizing
- **Settings** — Configurable risk %, account size, refresh interval
- **Binance API** — No API key needed (public endpoints)

## API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `GET /api/v3/ticker/24hr` | Price, Volume, 24h Change |
| `GET /api/v3/klines` | 1H Candles (168 bars = 7 days) |

## Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
cd crypto-terminal
vercel
```

Follow the prompts and your site will be deployed.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Binance Public API
- Pure CSS (no external UI library)

## Trading Pairs (20)

BTC, ETH, BNB, SOL, XRP, ADA, DOGE, AVAX, DOT, LINK,
TRX, NEAR, LTC, UNI, APT, ARB, OP, SUI, SHIB, PEPE

## Signal Engine (MQL5 Inspired)

- **ATR** calculated from real 1H klines (14-period True Range)
- **SL** = 1.5 × ATR
- **TP** = 3.0 × ATR
- **R:R** = 2.0 (fixed by formula)
- **Position Size** = (Account × Risk%) / SL Distance

⚠️ **Disclaimer**: Signals are algorithmic and NOT financial advice. Always DYOR.
