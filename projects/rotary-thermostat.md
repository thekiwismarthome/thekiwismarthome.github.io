---
title: Rotary thermostat
description: A Nest-style thermostat on a 2.1 inch rotary display with ESPHome and LVGL. Try it in the browser, then build it.
---

# Rotary thermostat

A Nest-style thermostat for a heat pump or air conditioner, on a **2.1 inch round rotary display** running ESPHome and LVGL. You turn the dial to set the temperature, press it for a ring menu, and everything is read from and sent to a Home Assistant `climate` entity.

<div class="kh-meta">
  <a class="primary" href="/downloads/rotary-thermostat.zip" download>Download the config (.zip)</a>
  <a href="https://github.com/thekiwismarthome/Rotary-Display-Thermostat-ZX2D10GE01R-V484">GitHub</a>
  <a href="/demos/rotary-thermostat/" target="_blank">Simulator full screen</a>
</div>

## Try it first

This is the real screen layout and the real rules from the config, running in your browser with a pretend Home Assistant. Turn the dial with the mouse wheel, drag around it, or use the arrow keys. Press to open the menu. Change the mode, weather or zones on the right and watch the dial follow.

<DemoFrame src="/demos/rotary-thermostat/" :height="780" title="Rotary thermostat simulator" />

::: info What the simulator is
It is a faithful copy of the screens and button rules in `_neo-nesp_UI.yaml` and `nesp.yaml`, drawn at the same 480 by 480 size with the same colours, fonts sizes and positions. It is not the firmware, so it cannot tell you whether your build compiles or your wiring works. It is for seeing and testing how the thing behaves before you flash anything.
:::

## What it does

| On the dial | What happens |
|---|---|
| Turn, main screen | Changes the target by 0.5 degrees a click. If the system is off, the first click switches it on. |
| Press, main screen | Opens the ring menu. |
| Turn and press in the menu | Moves between the icons around the edge and picks one. The name of the highlighted icon shows in the middle. |
| Menu: power | Switches the system on or off. |
| Menu: mode | Auto, Cool, Heat, Fan only or Dehumidify. The dial colour and the LED ring change with the mode. |
| Menu: presets | Eco, Comfort or Boost. Choosing the one that is on turns it off again. |
| Menu: fan speed | Auto, Quiet, Low, Medium, High or Super high. |
| Menu: two zone icons | Opens and closes two zone covers (upstairs and downstairs). |
| System off | The dial shows the weather instead: icon, temperature, forecast and feels like. |

Around the edge are 89 ticks from 12 to 34 degrees, with a white needle at the target and a thin arc from the room temperature to the target. A 13-LED ring glows in the colour of the mode. For burn-in protection the screen shows static ("snow") for half an hour at five past each hour from 2 to 5 in the morning.

## What you need

| Part | Notes |
|---|---|
| **Smart Panlee ZX2D10GE01R-V4848** | A 2.1 inch round rotary switch screen, 480 by 480, ST7701S display, with the push-turn knob and 13 RGB LEDs. [Datasheet](https://github.com/thekiwismarthome/Rotary-Display-Thermostat-ZX2D10GE01R-V484/blob/main/ZX2D10GE01R-V4848-Datasheet.pdf). |
| **WT32-S3-WROVER-N16R8** | The ESP32-S3 with 16 MB flash and 8 MB PSRAM that sits on the display board. |
| **ESPHome** | Recent. The config uses `homeassistant.action:`, which needs 2024.8 or newer. |
| **A `climate` entity** | Anything that has heat, cool, fan modes and a target temperature. The defaults are for a ducted air conditioner with two zones. |

It is based on [velijv/nesp](https://github.com/velijv/nesp), which is for the 2.4 inch screen. The [nESP repository](https://github.com/thekiwismarthome/nESP) is an earlier attempt at the 2.1 inch display and is marked as not working. Use this one.

## Build it

1. **Download the zip** above and unpack it into your ESPHome folder. Keep the `nesp/` folder where it is, because `nesp.yaml` includes the files in it.
2. **Add the secrets.** Copy the values from `secrets.yaml` into your own ESPHome `secrets.yaml` and change them.
3. **Check `common.yaml`.** `nesp.yaml` expects a file with your logger, API, OTA and Wi-Fi settings. It was not in the repository, so the zip has a starter. Edit it for your network.
4. **Put the font in place.** The UI asks for `fonts/materialdesignicons-webfont.ttf`. The repository stores it in `nesp/fonts/`, so copy it to a `fonts/` folder next to `nesp.yaml` if the compile cannot find it.
5. **Edit the entities** at the top of `nesp.yaml`, see below.
6. **Install.** The first flash is over USB. After that, wirelessly.
7. **Adopt it** in Home Assistant, and allow the device to perform actions so the dial can send commands.

### Edit these

All your entities are in the `substitutions:` block at the top of `nesp.yaml`.

| Substitution | What to put |
|---|---|
| `climate_entity` | Your thermostat, for example `climate.ac_living_room` |
| `zone_1_entity`, `zone_2_entity` | Two `cover` entities for the zone dampers, or delete the zone parts if you have none |
| `weather_entity` | Your `weather` entity. Its `icon` attribute chooses the weather icon. |
| `weather_temperature_entity`, `weather_feels_like_entity`, `weather_high_entity`, `weather_low_entity`, `weather_rain_chance_entity` | Sensors for the weather screen. The defaults are for the Australian BoM integration. |
| `zone_1_temperature_entity`, `zone_1_humidity_entity`, `zone_2_temperature_entity`, `zone_2_humidity_entity` | Room sensors shown on the menu |
| `static_ip` | The address you want the device to have |

### Wiring, from the config

| Part | Pin |
|---|---|
| Backlight (PWM) | GPIO38 |
| RGB LED ring, 13 WS2812 | GPIO4 |
| Push button | GPIO3 |
| Rotary encoder A and B | GPIO6 and GPIO5 |
| Vibration motor (not used) | GPIO7 |
| Display SPI clock and data | GPIO47 and GPIO41 |
| Display chip select, DE, VSYNC, HSYNC, pixel clock | GPIO21, 39, 48, 40, 45 |

These come with the display board, so you do not wire them yourself. They are here for reference.

## Download

<Downloads slug="rotary-thermostat" title="Rotary thermostat config" />

::: details nesp.yaml, the main file
<<< @/public/downloads/rotary-thermostat/nesp.yaml{yaml}
:::

## Things I found reading the config

I have not compiled or run this on hardware, only read it carefully and built the simulator from it. These are worth fixing in the repository.

- **`common.yaml` is missing**, so a fresh clone does not compile. The zip includes a starter.
- **The fog icon is a wardrobe.** The weather icon lookup maps `mdi:weather-fog` to `\U000F0F91`, which is `wardrobe-outline`. Fog is `\U000F0591`, and that glyph is already in the font list. You can see the wardrobe in the simulator by choosing the fog condition.
- **Fast turning can lose steps.** Each click sends the last confirmed target plus 0.5, not the value you were heading for, so two clicks before Home Assistant answers send the same temperature twice. The simulator's network delay slider shows it.
- **The temperature range is not used.** `min_value`, `max_value` and `initial_value` in the substitutions are not referenced anywhere. The roller only holds 16.0 to 30.0 and the scale 12 to 34, so a target outside 16 to 30 would point the roller at an option that does not exist.
- **The fan icons do not match.** The icons on the fan page for Quiet, Low, High and Super high differ from the ones shown on the main screen once you have chosen them.
- **`nesp/packages/lvgl-package.yaml` is an LVGL widget test page**, with cat and dog images and sample buttons. Nothing includes it, so it can go.
- **The burn-in screensaver runs four times a night.** It starts at five past the hour from 2 to 5 and stops at 35 past. That may be more than you want.

## Other rotary builds

- **[Rotary display clock, heat pump and light dimmer](https://github.com/thekiwismarthome/Rotary-Display-Clock-HeatPump-LightDimmer).** A clock face with heat pump and light dimmer pages on the same display. Still being developed, with a to-do list for the burn-in timeout, a weather page and a few bugs. It uses the same `common.yaml` arrangement.
- **[nESP](https://github.com/thekiwismarthome/nESP).** The first attempt, based on the original nESP project. Not working.

<Downloads slug="rotary-clock" title="Rotary clock, heat pump and light dimmer" />
