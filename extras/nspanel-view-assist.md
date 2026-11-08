---
title: NSPanel keep-alive
---

# NSPanel keep-alive for View Assist

A Home Assistant automation that watches the foreground app on a **Sonoff NSPanel Pro 120** and relaunches the **View Assist / Home Assistant Companion** app over ADB if it is not the one running.

<div class="kh-meta">
  <a class="primary" href="/downloads/nspanel-keep-alive.zip" download>Download (.zip)</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/nspanel-view-assist">GitHub</a>
</div>

## How it works

1. A **time-pattern trigger** checks every couple of minutes, with an extra trigger that fires the moment the screen wakes.
2. It runs `dumpsys activity activities | grep mResumedActivity` over ADB and reads the answer from the `media_player` entity's `adb_response` attribute. That is the activity actually in front.
3. If the companion app's package is **not** in the response, it runs an ADB `monkey ... LAUNCHER` command, which brings the app back or cold-starts it.
4. It then writes the restart to the Home Assistant log and raises a notification, so you have a record of how often it happens.

It reads `mResumedActivity` instead of the `app_id` attribute because the Android Debug Bridge integration only fills `app_id` for apps in its Applications list, and the `media_player` never goes unavailable when the app is closed.

## Prerequisites

1. **Turn on ADB** on the panel. In **Settings → About**, tap the build number 7 times to unlock Developer options, then enable network ADB debugging and note the panel's IP address.
2. **Add the Android Debug Bridge integration.** Choose device type Android, enter the panel's IP and port `5555`, and approve the prompt on the panel screen, ticking "always allow".

## Install

1. Paste `automation-nspanel-view-assist.yaml` into your automations.
2. Replace two placeholders: `media_player.office_nspanel_pro_media_player` with your panel's `media_player` (it appears several times, so use find and replace), and `io.homeassistant.companion.android` with the package to keep alive.
3. Reload automations.

If you use a different View Assist app, open it on the panel and read the package from `mResumedActivity`. For example `com.msp1974.vacompanion/...` means the package is `com.msp1974.vacompanion`. `pm list packages` lists everything installed.

## Tuning

- **Check interval.** Change `minutes: "/2"` in the trigger.
- **Force it on from standby.** Delete the `condition: not` block, and the watchdog relaunches the app and wakes the screen regardless of panel state.
- **Phone push.** It raises an in-dashboard persistent notification by default. Add another action that calls your mobile notify service if you want a push too.

## Download

<Downloads slug="nspanel-keep-alive" />

::: details The automation
<<< @/public/downloads/nspanel-keep-alive/automation-nspanel-view-assist.yaml{yaml}
:::
