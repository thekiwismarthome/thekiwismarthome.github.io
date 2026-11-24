---
title: Nocturne Card
description: One Home Assistant card for every glass tile, lights, climate, media, weather, people, a clock and more. Try every card in your browser first.
---

# Nocturne Card

One Home Assistant card for every glass tile on a dashboard: lights, switches, fans, covers, climate, media players, weather, locks, vacuums, people, a clock and more. You pick a **kind**, pick an **entity of that kind**, and set the options. The entity picker only offers entities of the right type, so a Light card only lists lights.

<div class="kh-meta">
  <a class="primary" href="https://my.home-assistant.io/redirect/hacs_repository/?owner=thekiwismarthome&repository=nocturne-card&category=plugin">Open in HACS</a>
  <a href="/demos/nocturne-card/" target="_blank">Demo full screen</a>
  <a href="https://github.com/thekiwismarthome/nocturne-card">nocturne-card on GitHub</a>
  <a href="https://github.com/thekiwismarthome/nocturne-card/releases">Releases</a>
</div>

## Try it first

This is the real card, running in your browser against a pretend Home Assistant. Tap a light, drag a slider, press and hold a light for its colour wheel, turn the dial on the air conditioner, skip a track. Change the switch style and the tile width at the top to see how it behaves on a phone.

<DemoFrame src="/demos/nocturne-card/" :height="2300" title="Nocturne Card demo" />

::: info What the demo is
The same `nocturne-card.js` file you install, with made-up entities that answer taps. In your own Home Assistant the info button opens the usual more-info dialog; here it shows a message. The glass look is made for the Nocturne themes and falls back to your own theme's colours, so it still looks fine on any other theme.
:::

## The big switch

Light, switch, fan and compact climate tiles can swap the small corner toggle for a big switch on the bottom edge. Choose **Slot**, **Tab** or **Overlap** in the card editor, then slide the switch anywhere along the edge, from flush left to flush right, and tune the gap and the corner softness.

![Slot, tab and overlap switch styles](/nocturne-card/preview-switch.png)

The switch, its gap, the corners and the text shrink with the tile, so it stays in proportion on a phone as well as on a wall tablet.

```yaml
type: custom:nocturne-card
kind: light
entity: light.lounge
switch_style: slot       # standard | slot | tab | overlap
switch_position: 50      # 0 (left edge) to 100 (right edge)
switch_gap: 6            # px, 0 to 20
switch_softness: 12      # px, 0 to 24
```

## Everything on one page

![Light, switch, fan, cover, sensor, lock, vacuum, people and vehicle tiles](/nocturne-card/preview-tiles.png)

## Install

<div class="kh-steps">
<div>

### Add it to HACS
Click **Open in HACS** above. Or in HACS choose **⋮ → Custom repositories**, paste the address and pick the type **Dashboard**.

```text
https://github.com/thekiwismarthome/nocturne-card
```

</div>
<div>

### Download it
Open **Nocturne Card** in HACS, press **Download**, then hard-refresh the browser (Ctrl+Shift+R). HACS adds the dashboard resource for you.

</div>
<div>

### Add a card
In the dashboard editor choose **Add card → Nocturne Card**, pick the kind first, then the entity.

```yaml
type: custom:nocturne-card
kind: light
entity: light.lounge
```

</div>
</div>

Needs Home Assistant 2024.8 or newer. The current release is `2026.11.5`. To install by hand, copy `nocturne-card.js` from the [latest release](https://github.com/thekiwismarthome/nocturne-card/releases) into `config/www/` and add `/local/nocturne-card.js` as a JavaScript module resource.

## The kinds

| Kind | Entities | What you get |
| --- | --- | --- |
| `light` | `light.*` | Toggle and brightness slider. Hold for a colour wheel popup, or use the full colour wheel card (`variant: wheel`). |
| `switch` | `switch`, `input_boolean`, `valve` | Toggle tile with an accent colour. |
| `fan` | `fan.*` | Spinning icon and a speed slider. |
| `cover` | `cover.*` | Open, stop, close and a position slider. |
| `sensor` | `sensor.*` | Big temperature with a humidity bar, or a plain value. |
| `climate` | `climate.*` | The glass dial with mode and fan menus, or a compact tile. |
| `media` | `media_player.*` | Transport and volume. Choose which players it offers, pin one, and start on the player that belongs to this device. Artwork can be the background. |
| `alarm` | `alarm_control_panel.*` | Glows with the alarm state, with lock, door, presence and camera chips and arm and disarm buttons. |
| `lock` | `lock.*` | Green when locked, amber when unlocked, with the battery. |
| `vacuum` | `vacuum.*` | Battery ring, status, bin state, Start, Pause and Dock. |
| `vehicle` | `sensor.*` | Battery ring and bar, range, locked and charging. |
| `plants` | `plant.*` | One row per plant: OK or needs attention. |
| `appliance` | `sensor.*` | Time remaining for a washer, dryer or dishwasher. |
| `safety` | `binary_sensor.*` | One dot per smoke alarm, pulses red on smoke. |
| `weather` | `weather.*` | Now and today, next 24 hours, 7-day forecast and details, with animated icons. |
| `camera` | `camera.*` | A still image with a Live badge. |
| `person` | `person.*` | One person: avatar ring, where they are, distance from home, phone battery. |
| `family` | `person.*` | Everyone in one row, with "2 of 4 home". |
| `actions` | `scene`, `script`, `button` | A grid of round buttons. |
| `clock` | none | Digital or analogue, for any time zone. Warm by day, cool at night, with a next-alarm chip and a timer countdown. |

Every card also has a **background image** option (image, opacity, size, position, blur and a darken switch) and the usual name, icon, tap and hold options. Small tiles are square by default, so a row of them lines up like a grid whatever the screen width.

The [README on GitHub](https://github.com/thekiwismarthome/nocturne-card#readme) lists every option with YAML examples.

## Not included yet

- The weather radar map, tides and weather warnings panels.
- The full music player in the media card needs a separate `nocturne-music-card` resource, which is not published yet. Without it you get the compact media tile.
