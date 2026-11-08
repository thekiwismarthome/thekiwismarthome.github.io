---
title: Find my phone
description: Say "where is my phone" and it rings at full volume on an Android phone, even on silent.
---

# Find my phone

Say "where is my phone" to your voice assistant and the phone rings at full volume **even if it is on silent**, vibrates, speaks, and shows a notification with a **Found it** button. Say "found it" or "stop ringing" to silence it.

It is for **Android** with the Home Assistant Companion app. The ringer mode and alarm volume commands are Android only. On an iPhone, use Critical Alerts instead.

<div class="kh-meta">
  <a class="primary" href="/downloads/find-my-phone.zip" download>Download both files (.zip)</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/find-my-phone">GitHub</a>
</div>

## How it works

1. The **automation** listens for what you say, using an Assist conversation trigger.
2. It runs the **script**, which does four things in order: sets the ringer to normal, waits half a second so that lands, sets the alarm volume to 100, then sends a high-priority spoken notification with a loud vibration pattern and a **Found it** button.
3. Saying the stop phrase clears the notification and silences it.

## Set it up

1. **Download the two files** below.
2. **Edit them.** See the table.
3. **Create the script** in Settings, Automations & scenes, Scripts, Add script, Edit in YAML, and paste the script file. Do the same for the automation.
4. **Set up the phone.** In the Companion app, open Settings, Companion app, Notification channels. A channel called `find_my_phone` appears after the first time it runs. Set its **Importance** to Urgent, pick a loud sound, and turn on **Override Do Not Disturb** if you want it to ring through.
5. **Allow settings changes.** In Android settings go to Apps, Home Assistant, Special app access, Modify system settings, and allow it. Allow Do Not Disturb access there too, to override silent mode.
6. **Test it.** Put the phone on silent, lock it and say the phrase. It should leave silent, ramp to full volume, vibrate, speak and show the notification.

You can also add a dashboard button or the Home Assistant widget on the phone to run the script from the home screen.

### Edit these

| In the file | Change |
|---|---|
| `notify.mobile_app_brents_phone` (script, four places, and the automation) | Your phone's notify service. Find it in Developer tools, Actions, by typing `notify.mobile_app`. |
| `script.find_brents_phone` (automation) | The name of the script once you save it |
| `tts_text: Brent, your phone is right here!` (script) | What the phone says |
| The phrases under `command:` (automation) | What you say. `(a\|b)` means either word. |
| `alias`, `description` (both) | Rename to suit |

## Download

<Downloads slug="find-my-phone" />

::: details The script
<<< @/public/downloads/find-my-phone/script-find-my-phone.yaml{yaml}
:::

::: details The automation
<<< @/public/downloads/find-my-phone/automation-find-my-phone.yaml{yaml}
:::
