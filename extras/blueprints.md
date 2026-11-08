---
title: IKEA BILRESA blueprint
description: One Home Assistant blueprint for the whole IKEA BILRESA scroll wheel (Matter).
---

# IKEA BILRESA scroll wheel blueprint

One automation for the whole IKEA BILRESA scroll wheel (Matter), chosen by **device** instead of by listing its nine button entities.

<div class="kh-meta">
  <a class="primary" href="https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2Fthekiwismarthome%2FHA-Extras%2Fblob%2Fmain%2FBlueprints%2Fikea_bilresa_scroll_wheel_full.yaml">Import into Home Assistant</a>
  <a href="/downloads/bilresa-blueprint/ikea_bilresa_scroll_wheel_full.yaml" download>Download the file</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/blob/main/Blueprints/ikea_bilresa_scroll_wheel_full.yaml">GitHub</a>
</div>

## What each group does

For each group, on the light or switch you assign to it:

| Gesture | Action |
|---|---|
| Single press | Toggle |
| Double press | 100% white (colour bulbs only, optional) |
| Hold | Cycle through a colour palette while held (colour bulbs only, optional) |
| Scroll | Proportional, eased brightness (lights only) |

The remote has three groups. Buttons 1 to 3 are group 1, 4 to 6 are group 2 and 7 to 9 are group 3. Within a group there are two scroll directions and a press. Leave a group's target blank to switch it off.

## Install

1. Press **Import into Home Assistant** above. It opens your Home Assistant and asks you to confirm. Or import it by hand: Settings, Automations & scenes, Blueprints, Import blueprint, and paste the GitHub address.
2. Create an automation from the blueprint.
3. Pick the remote, then assign a light or switch to each group.

## Options

- **Colour palette.** The RGB colours the hold cycle steps through. It defaults to ten colours, and you can add or remove freely.
- **Colour cycle interval.** How long each colour shows while holding. Default 1.5 seconds.
- **Dim step per notch.** Brightness change per scroll notch, scaled by how far you scroll. Default 5%.
- **Double-press white brightness.**

## One trade-off

The remote exposes no device triggers, only nine `event.*_button_1` to `_9` entities. Home Assistant cannot template a state trigger's entity list from a device, so this blueprint listens for state changes and filters to the device's event entities in a condition. That makes setup one-click, but the trigger wakes on every state change. On a very chatty instance, prefer an entity-list version.

It also assumes the entity ids end in the button number, which is Home Assistant's default naming.

## Download

<Downloads slug="bilresa-blueprint" />
