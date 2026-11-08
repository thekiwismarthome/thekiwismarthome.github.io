---
title: Stock Alerts
description: Add "alert me when AAPL goes below 150" rules from a dashboard card, with no YAML editing at runtime.
---

# Stock Alerts

Add "**alert me when `<TICKER>` goes above or below `<PRICE>`**" rules straight from a dashboard card with dropdowns. Add and remove them whenever you like, with **no YAML editing at runtime**.

There is no standard card for stock thresholds, so this combines built-in Home Assistant pieces: a To-do list, a few input helpers, two scripts and one automation.

<div class="kh-meta">
  <a class="primary" href="/downloads/stock-alerts.zip" download>Download both files (.zip)</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/stock-alerts">GitHub</a>
</div>

## How it works

- Your alerts live in a **To-do list**, `todo.stock_alerts`. Each item is one rule, for example `AAPL below 150.00`.
- The **dropdown form** on the card turns three choices into a to-do item.
- **Removing** an alert deletes its item. **Pausing** one ticks it off, and the automation skips ticked items.
- One **automation** runs every minute, compares each active rule with the live price and notifies you when a line is crossed.
- A **cooldown** per alert, kept in the item's description, stops it nagging you. It **re-arms** when the price moves back the other way.

## Set it up

1. **Create the To-do list.** Settings, Devices & services, Helpers, Create helper, To-do list. Name it **Stock Alerts** so it becomes `todo.stock_alerts`.
2. **Turn on packages**, if you have not, in `configuration.yaml`:

   ```yaml
   homeassistant:
     packages: !include_dir_named packages
   ```

3. **Copy the package** to `config/packages/stock_alerts.yaml` and edit it, see the table.
4. **Restart**, or reload scripts, automations and input helpers from Developer tools.
5. **Add the card.** Edit the dashboard, Add card, Manual, and paste the native version from `dashboard-card.yaml`.

### Edit these

| In `package-stock-alerts.yaml` | Change |
|---|---|
| `ticker_map` | Each ticker and the sensor that holds its live price. Any source works: Yahoo Finance, Alpha Vantage, a REST sensor, crypto. |
| `input_select.stock_alert_ticker` options | The tickers in the dropdown. They must match the keys in `ticker_map`. |
| `notify_target` | Your phone, replacing `notify.mobile_app_brents_phone` |
| `cooldown_seconds` | Optional. The default is 3600, so at most once an hour while a rule stays true. |
| `time_pattern: minutes: "/1"` | How often to check. Most stock integrations only refresh every few minutes, so `"/5"` is often plenty. |

## Use it

Pick a **ticker**, choose **above** or **below**, type a **threshold** and tap **Add alert**. The rule appears under Active stock alerts. When a price crosses a line you get a phone notification and a persistent notification in Home Assistant.

To add a stock later, add it to the dropdown options (no restart needed), add its line to `ticker_map` and reload automations. The model is deliberately simple, a fixed price above or below, and could be extended to percent change or trailing stops.

## Download

<Downloads slug="stock-alerts" />

::: details The package
<<< @/public/downloads/stock-alerts/package-stock-alerts.yaml{yaml}
:::

::: details The dashboard card
<<< @/public/downloads/stock-alerts/dashboard-card.yaml{yaml}
:::

To show the prices as a scrolling banner, see the [Shares banner](/extras/shares-banner).
