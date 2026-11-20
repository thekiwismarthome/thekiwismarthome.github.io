---
title: Nocturne Card
---

# Nocturne Card

One Home Assistant card for every glass tile on a dashboard. You pick a **kind** (light, climate, media player, weather, person ...), pick an **entity of that kind**, and set the options. The entity picker only offers entities of the right type, so a Light card only lists lights.

::: warning Beta
This is `0.1.0-beta.2`. It works, but options may be renamed before 1.0. Please report anything odd on [GitHub](https://github.com/thekiwismarthome/nocturne-card/issues).
:::

<div class="kh-meta">
  <a class="primary" href="https://my.home-assistant.io/redirect/hacs_repository/?owner=thekiwismarthome&repository=nocturne-card&category=plugin">Open in HACS</a>
  <a href="https://github.com/thekiwismarthome/nocturne-card">nocturne-card on GitHub</a>
  <a href="https://github.com/thekiwismarthome/nocturne-card/releases">Releases</a>
</div>

![Light, switch, fan, cover, sensor, camera, quick actions and people tiles](/nocturne-card/preview-tiles.png)
![Climate, alarm, lock, vacuum, vehicle, plants, laundry, smoke alarms, media and weather cards](/nocturne-card/preview-cards.png)

It is made for the Nocturne glass themes, but it falls back to your theme's colours, so it still looks fine on any other theme.

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

### Download the beta
Open **Nocturne Card** in HACS, switch on **Show beta versions**, press **Download**, then hard-refresh the browser (Ctrl+Shift+R).

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

Needs Home Assistant 2024.8 or newer. To install by hand, copy `nocturne-card.js` from the [latest release](https://github.com/thekiwismarthome/nocturne-card/releases) into `config/www/` and add `/local/nocturne-card.js` as a JavaScript module resource.

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
| `alarm` | `alarm_control_panel.*` | Glows with the alarm state, with lock, door, presence and camera chips. |
| `lock` | `lock.*` | Green when locked, amber when unlocked, with the battery. |
| `vacuum` | `vacuum.*` | Battery ring, status, bin state, Start, Pause and Dock. |
| `vehicle` | `sensor.*` | Battery ring and bar, range, locked and charging. |
| `plants` | `plant.*` | One row per plant: OK or needs attention. |
| `appliance` | `sensor.*` | Time remaining for a washer, dryer or dishwasher. |
| `safety` | `binary_sensor.*` | One dot per smoke alarm, pulses red on smoke. |
| `weather` | `weather.*` | Now and today, next 24 hours, 7-day forecast and details. |
| `camera` | `camera.*` | A still image with a Live badge. |
| `person` | `person.*` | One person: avatar ring, where they are, distance from home, phone battery. |
| `family` | `person.*` | Everyone in one row, with "2 of 4 home". |
| `actions` | `scene`, `script`, `button` | A grid of round buttons. |

Every card also has a **background image** option (image, opacity, size, position, blur and a darken switch) and the usual name, icon, tap and hold options.

The [README on GitHub](https://github.com/thekiwismarthome/nocturne-card#readme) lists every option with YAML examples.

## Not in the beta yet

- The weather radar map, tides and weather warnings panels.
- The full music player in the media card needs a separate `nocturne-music-card` resource, which is not published yet. Without it you get the compact media tile.
