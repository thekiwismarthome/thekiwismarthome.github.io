---
title: Shares banner
description: A scrolling stock and currency ticker for the top of a Home Assistant dashboard.
---

# Shares banner

A scrolling ticker for the top of a dashboard. It shows every Yahoo Finance sensor you have as a symbol, a price and a green or red change. Tap it to open your `shares` view.

<div class="kh-meta">
  <a class="primary" href="/downloads/shares-banner.zip" download>Download (.zip)</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/stocks_shares">GitHub</a>
</div>

## How it works

- It is one `custom:button-card` on a black background in the Antonio font.
- It lists every entity whose id starts with `sensor.yahoofinance_`, sorted by name.
- A sensor ending in `_x` is a currency pair and shows four decimal places. Everything else shows as a dollar price.
- Up is green (`#4ade80`) with ▲ and down is red (`#f87171`) with ▼, from the sensor's `regularMarketChangePercent`.
- The text scrolls in a 45 second loop, and the list is doubled so there is no gap.
- A tap goes to `/<your-dashboard>/shares`, built from the current dashboard path, so it works on any dashboard.

## Set it up

1. Install [`custom:button-card`](https://github.com/custom-cards/button-card) from HACS.
2. Install the [Yahoo Finance integration](https://github.com/iprak/yahoofinance) from HACS and add the symbols you want.
3. Add the Antonio font, as in [KSH Style Buttons](/extras/ksh-style-buttons#what-you-need).
4. On a dashboard, Add card, Manual, and paste `shares_banner.yaml`.
5. Create a view with the path `shares` for the tap to open.

To get an alert when a price crosses a line, see [Stock Alerts](/extras/stock-alerts).

## Download

<Downloads slug="shares-banner" />

::: details The card
<<< @/public/downloads/shares-banner/shares_banner.yaml{yaml}
:::
