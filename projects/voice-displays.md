---
title: Voice & displays
---

# Voice and displays

Voice assistants, ESPHome gadgets and wall panels.

## Xiaozhi ESPHome

Use Xiaozhi AI devices as voice assistants for Home Assistant, with **on-device wake word** and **custom graphics**. Install it from ESPHome Web in four steps: connect the device, adopt it in ESPHome, paste in the code for your device and install wirelessly, then accept the new device in Home Assistant.

Supported so far: Spotpear Ball v1 and v2, Muma Box v1 and v2, Muma Horse v1 and v2, Spotpear Puck, and a DIY breadboard build.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/xiaozhi-esphome">xiaozhi-esphome on GitHub</a>
</div>

## Voice assistants on Android

Notes on old Android hardware as voice satellites. **HassMic** is an Android app with a built-in Wyoming wake word and it runs on a Xiaomi Smart Clock and a Lenovo ThinkSmart. Both also run LineageOS. To put LineageOS 15.1 on a Lenovo ThinkSmart View, the guide uses a Raspberry Pi 3B+ running Ubuntu Server, on a USB2 port (USB3 does not work).

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/voice-assistant">Voice assistants</a>
  <a href="https://github.com/thekiwismarthome/TSV-Lineage-OS">ThinkSmart View + LineageOS</a>
</div>

Want a Raspberry Pi satellite instead? Read the [RPi voice assistant satellite note](/notes/rpi-voice-satellite).

## Wall panels and View Assist

The [NSPanel keep-alive](/extras/nspanel-view-assist) automation relaunches View Assist on a Sonoff NSPanel Pro 120 if another app takes over. The [Timers](/projects/timers) cards show View Assist timers, alarms and reminders. The [News Reader](/extras/news-reader) and [KSH Style Buttons](/extras/ksh-style-buttons) are made for wall tablets.

## Rotary displays

Nest-style thermostats and controls on cheap rotary displays, running ESPHome with LVGL.

- **nESP.** A Nest Thermostat clone on a 2.1 inch Smart Panlee rotary screen (ZX2D10GE01R-V4848) with an ESP32-S3 (WT32-S3-WROVER-N16R8). Based on [velijv/nesp](https://github.com/velijv/nesp), which is for the 2.4 inch screen. **Not working yet.**
- **[Rotary display thermostat](/projects/rotary-thermostat).** An LVGL thermostat on the same display with an ST7701S screen. **Try it in the browser**, then download the config.
- **Rotary display clock, heat pump and light dimmer.** Still in development, with a to-do list for screen burn-in, a weather page and visualisations.

<div class="kh-meta">
  <a href="https://github.com/thekiwismarthome/nESP">nESP</a>
  <a href="https://github.com/thekiwismarthome/Rotary-Display-Thermostat-ZX2D10GE01R-V484">Thermostat</a>
  <a href="https://github.com/thekiwismarthome/Rotary-Display-Clock-HeatPump-LightDimmer">Clock, heat pump and dimmer</a>
</div>

<ProjectCards group="voice" />
