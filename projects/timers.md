---
title: Timers & alarms
---

# Timers and alarms

Cards and scripts for timers, alarms and reminders, mostly built around [View Assist](https://github.com/dinki/view-assist) and the Home Assistant voice assistants.

## Timer Card for View Assist

A build of [eyalgal's Simple Timer Card](https://github.com/eyalgal/simple-timer-card) with View Assist support added. The card finds every supported timer in your Home Assistant on its own, so the smallest setup is one line:

```yaml
type: custom:ha-timer-card
```

What I added on top of the original:

- **View Assist timers** as a timer source, with alarm switch handling and snoozed states.
- **A confirmation step** before cancelling a View Assist timer.
- **A satellite entity override** and better duration handling.
- **Drum-style time pickers** in place of the minute buttons, and a selected state on the presets.

Everything is also in the visual editor, which has a search box and a **Show advanced** switch. The repository has a full configuration reference, example automations and notes for the Voice PE.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/ha-timer-card">ha-timer-card on GitHub</a>
  <a href="https://github.com/eyalgal/simple-timer-card">Original by eyalgal</a>
</div>

## View Assist Timers Card

Shows every timer, alarm and reminder from View Assist in one card. It polls `view_assist/get_timers` every 5 seconds and counts down every second. A ringing timer pulses and gets snooze and dismiss buttons.

- **Two looks.** `bar` shows list rows with a linear progress bar and `horseshoe` shows a tile grid with a circular arc.
- **Pick what shows.** `show_types` takes any of `timer`, `alarm` and `reminder`.
- **Visual editor.** Click the pencil on the card. No YAML needed.

```yaml
type: custom:view-assist-timers-card
display_mode: horseshoe
columns: 2
```

It is a single file with no build step. Copy `view-assist-timers-card.js` to `config/www/` and add it as a dashboard resource of type `module`.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/HA-View-Assist-Timers-Card">View Assist Timers Card on GitHub</a>
</div>

## Alarm clock

A Home Assistant alarm configuration built from input helpers (`input_text` and friends), with screenshots and a walkthrough of each section.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/ha-alarm-clock">ha-alarm-clock on GitHub</a>
</div>

## Assist timers

Timer functionality for Home Assistant's Assist. Start and stop timers by voice and ask how much time is left on all of them or one in particular. It uses three `timer` helpers (`timer.timer1` to `timer.timer3`) and a few files. Based on [hannemann/ha_intent_timers](https://github.com/hannemann/ha_intent_timers).

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/ha-intent-timers">ha-intent-timers on GitHub</a>
</div>

## Recipe timers

[Recipe Manager](/projects/recipe-manager) has its own timers. Tap a time in a method step to start one, share them around the house and see the ones you started by voice on a Voice PE.
