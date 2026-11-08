---
title: BerryBlues theme
description: A dark blue Home Assistant theme from 2020, with the colour palette and a download.
---

# BerryBlues theme

A dark blue theme for Home Assistant that I made in 2020. The cards are half see-through, so a background picture shows through them.

::: warning Old, and rebuilt from notes
This came out of my old server note, where a blog editor had mangled the quotes and dashes. I rebuilt the file from it, but I have not tested it on a current Home Assistant. Many `paper-*` variables belong to the old frontend and are ignored now, so treat it as a starting point.
:::

<div class="kh-meta">
  <a class="primary" href="/downloads/berryblues-theme/BerryBlues.yaml" download>Download BerryBlues.yaml</a>
</div>

## The palette

<div style="display:flex;gap:10px;flex-wrap:wrap;margin:16px 0">
  <div style="flex:1;min-width:120px;border-radius:14px;overflow:hidden;border:1px solid var(--vp-c-divider)"><div style="background:#1E1F26;height:64px"></div><div style="padding:8px 12px;font-size:13px"><b>Midnight Blue</b><br><code>#1E1F26</code></div></div>
  <div style="flex:1;min-width:120px;border-radius:14px;overflow:hidden;border:1px solid var(--vp-c-divider)"><div style="background:#283655;height:64px"></div><div style="padding:8px 12px;font-size:13px"><b>Indigo Ink</b><br><code>#283655</code></div></div>
  <div style="flex:1;min-width:120px;border-radius:14px;overflow:hidden;border:1px solid var(--vp-c-divider)"><div style="background:#4D648D;height:64px"></div><div style="padding:8px 12px;font-size:13px"><b>Blueberry</b><br><code>#4D648D</code></div></div>
  <div style="flex:1;min-width:120px;border-radius:14px;overflow:hidden;border:1px solid var(--vp-c-divider)"><div style="background:#D0E1F9;height:64px"></div><div style="padding:8px 12px;font-size:13px"><b>Periwinkle</b><br><code>#D0E1F9</code></div></div>
</div>

## Install

1. Save the file as `config/themes/berryblues.yaml`.
2. Tell Home Assistant where themes live, in `configuration.yaml`:

   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```

3. Restart, or call **Frontend: Reload themes**.
4. Open your profile and choose **BerryBlues**.

## Change the colour

Two values at the top of the file drive most of it. `base-hue` is the colour, from 0 to 360 (240 is blue, 120 green, 0 red), and `base-sat` is how strong it is. Change `base-hue` and everything that uses it follows.

## A different theme for day and night

You can switch themes at sunrise and sunset with an automation that calls `frontend.set_theme`. This one uses two themes called `Light - Green` and `Dark - Green`. Use the names of your own.

```yaml
alias: Set theme for day and night
triggers:
  - trigger: homeassistant
    event: start
  - trigger: state
    entity_id: sun.sun
    to: above_horizon
  - trigger: state
    entity_id: sun.sun
    to: below_horizon
actions:
  - action: frontend.set_theme
    data:
      name: >
        {{ 'Light - Green' if is_state('sun.sun', 'above_horizon') else 'Dark - Green' }}
```

## Download

<Downloads slug="berryblues-theme" />

::: details BerryBlues.yaml
<<< @/public/downloads/berryblues-theme/BerryBlues.yaml{yaml}
:::
