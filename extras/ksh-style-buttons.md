---
title: KSH Style Buttons
---

# KSH Style Buttons

The Kiwi Smart Home button style for Home Assistant. It is a small design system and a library of ready-to-use `custom:button-card` tiles: animated, colour-coded **SVG line-art on a black canvas**, where every tap gives a haptic buzz and a soft click.

> Icon-only. One colour per state. Light means glow. Motion means active.

<div class="kh-meta">
  <a class="primary" href="/downloads/ksh-style-buttons.zip" download>Download everything (.zip)</a>
  <a href="/downloads/ksh-style-buttons/example-dashboard.yaml" download>Example dashboard</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/ksh-style-buttons">GitHub</a>
</div>

## What is in the box

Start with the **template**, then the **example dashboard** to see every tile working together, then copy the tiles you want.

The tiles are **home**, **news** and **shares** (navigation), **calendar** (a live date tile in pure CSS), **intercom**, **intercom-picker**, **intercom-card** and **intercom-hub**, and entity tiles for **light**, **climate**, **vacuum**, **ambilight**, **tv**, **music**, **alarm**, **sofa**, **washer**, **dryer** and **byd**. The TV, washer and dryer tiles only show when relevant. Each tile is one self-contained file you set an `entity:` on. The files are all in the [download](#download) at the bottom.

## What you need

| Need | Why |
|---|---|
| [`custom:button-card`](https://github.com/custom-cards/button-card) from HACS | Every tile is a button-card |
| JavaScript tap actions | The click beep and smart actions run in `[[[ ... ]]]` templates |
| The **Antonio** font | Every KSH card uses it |
| A dark or black dashboard background | The tiles are transparent, so the background provides the black |

Add Antonio once, for example with a resource that imports `https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&display=swap`.

## Use a tile

**1. Register the template once per dashboard**, at the same level as `views:`.

```yaml
button_card_templates: !include ksh-style-buttons/templates/ksh-style-buttons.yaml
views:
  - ...
```

On a UI dashboard, open **Edit dashboard → ⋮ → Raw configuration editor** and paste the `button_card_templates:` block at the top.

**2. Drop a button into a grid.** Set the tile's `entity:` to your own.

```yaml
type: grid
square: true
columns: 4
cards:
  - !include ksh-style-buttons/buttons/home.yaml
  - !include ksh-style-buttons/buttons/news.yaml
  - !include ksh-style-buttons/buttons/climate.yaml
```

## Behaviour and look

A tile is two layers. **Behaviour** is what a tap does, from the `ksh_tap_beep` template. **Look** is the SVG, colours, halo and animation, in `custom_fields`, `styles` and `extra_styles`.

Add `template: ksh_tap_beep` and set one of these variables:

| `variables:` | Action |
|---|---|
| `nav: shares` | Go to the `shares` view of the current dashboard |
| `tap: climate` | `climate.turn_on` or `turn_off` by state |
| `tap: vacuum` | `start`, `pause` or `locate` by vacuum state |
| `effect: <name>` | Turn a light on with that effect, otherwise off |
| `service: domain.service` | Call any service on the entity |
| none | Toggle the entity's domain |

Do not add a card-level `tap_action`. It overrides the template and removes the beep.

## The design rules

1. **Icon-only.** No name, no state text. The graphic is the control.
2. **Line-art, not fills.** Hollow strokes with rounded caps. Depth comes from a faint inner glow, never shading.
3. **One colour, driven by state.** State or brightness recolours the whole icon.
4. **Light means glow.** On adds a drop-shadow glow and a soft halo. Off is flat white or dim grey.
5. **Transparent cards.** The dashboard provides the black.
6. **Square and oversized.** `aspect_ratio: 1/1`, and the icon fills the tile edge to edge.
7. **Every tap speaks.** A heavy haptic and a 900 Hz click, then the action.
8. **Motion means active.** Animations run only in working states.

### SVG conventions

| Attribute | Value |
|---|---|
| `viewBox` | `0 0 240 240` |
| `stroke-width` | 3.4 to 3.5 main, 2.5 secondary, 0.8 to 1.2 faint detail |
| `stroke-linecap` and `linejoin` | `round` |
| Layers | A halo, a ring frame, the subject drawn hollow, then an inner accent |

### Colours

| Meaning | Hex |
|---|---|
| Off, neutral | `#FFFFFF` |
| Off, idle | `#6B6E70` |
| Warm light on | `#FFC65C` |
| Heat | `#FF6B35` |
| Cool, running, info | `#00A1E4` |
| Dry, delayed | `#26C6DA` |
| Auto, ready, success | `#34C759` |
| Warning, paused | `#FF9F0A` |
| End of cycle, special | `#B06BFF` |
| Error, ringing, alert | `#FF3B30` |

Make the halo a different colour to the icon. A same-colour glow bleeds into the strokes and softens the edges.

## The intercom card

`cards/ksh-intercom-card.js` is a proper custom card with a config editor, so there are no helpers and no templated-HTML workarounds. It finds kiosks from `sensor.*_intercom` and matches each to its ESPHome node through the `*_intercom_call` services. Idle devices are tap-to-call, busy devices show who they are with, and your own device gets an in-call banner and a Hang up button. End buttons are admin-only.

1. Copy the file to `<config>/www/ksh-intercom-card.js`.
2. Add `/local/ksh-intercom-card.js` as a **JavaScript Module** resource and hard refresh.
3. Add the **KSH Intercom** card and click the pencil to pick **this device** and which others to show.

If you cannot add a resource, `intercom-hub.yaml` is a no-resource fallback built from a button-card.

## Low-power tablets

On an NSPanel Pro or an old tablet, drop the glow filters first because blur in `drop-shadow` is the biggest static cost. Remove animations from idle tiles too. A grid without animation renders noticeably lighter.

## Roadmap

- Move the entity tiles onto the shared `ksh_tap_beep` template.
- Split look from behaviour into separate templates.
- Package everything as an installable add-on, distributed through HACS.
- More tiles: scenes, cameras, weather and room shortcuts.

## Download

<Downloads slug="ksh-style-buttons" />

::: details The tap template, ksh-style-buttons.yaml
<<< @/public/downloads/ksh-style-buttons/templates/ksh-style-buttons.yaml{yaml}
:::

::: details One tile as an example, light.yaml
<<< @/public/downloads/ksh-style-buttons/buttons/light.yaml{yaml}
:::
