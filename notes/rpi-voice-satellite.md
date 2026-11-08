---
title: RPi voice assistant remote satellite
description: Turning a Raspberry Pi into a Wyoming voice satellite for Home Assistant, step by step.
---

# RPi voice assistant remote satellite

*January 2024*

Working notes for turning a Raspberry Pi into a voice satellite for Home Assistant, using [rhasspy/wyoming-satellite](https://github.com/rhasspy/wyoming-satellite). The installer steps follow the project's own [installer tutorial](https://github.com/rhasspy/wyoming-satellite/blob/master/docs/tutorial_installer.md). The static IP steps follow a [phoenixNAP guide](https://phoenixnap.com/kb/raspberry-pi-static-ip).

::: tip Want something ready-made?
An ESP32 voice assistant needs no Raspberry Pi. See [Xiaozhi ESPHome](/projects/voice-displays).
:::

## What you need

- A Raspberry Pi with Raspberry Pi OS Lite installed (the original note left the install steps blank)
- A USB microphone and USB speakers
- Home Assistant with the Assist voice pipeline set up

## 1. Update the Pi

```bash
sudo apt-get update
sudo apt-get upgrade
```

## 2. Give it a fixed IP address

A satellite is easier to manage if its address never changes. The simplest way is a **DHCP reservation** on your router. If you would rather set it on the Pi:

::: warning Check which network manager you have
The `dhcpcd.conf` method is for older Raspberry Pi OS releases. Raspberry Pi OS Bookworm and later use NetworkManager, and this file is not used. On those, use `nmtui` or a router reservation.
:::

1. Open the file:

   ```bash
   sudo nano /etc/dhcpcd.conf
   ```

2. Add these lines at the bottom, using your own values:

   ```text
   interface [interface-name]
   static ip_address=[ip-address]/[cidr-suffix]
   static routers=[router-ip-address]
   static domain_name_servers=[dns-address]
   ```

   For example, `interface eth0`, `static ip_address=192.168.1.50/24`, `static routers=192.168.1.1` and `static domain_name_servers=192.168.1.1`.

3. Save, then reboot:

   ```bash
   sudo reboot
   ```

## 3. Install Wyoming Satellite

Connect to the Pi over SSH with the username and password you set when you flashed it. Install the dependencies:

```bash
sudo apt-get update
sudo apt-get install --no-install-recommends git python3-venv
```

Clone the repository and run the installer:

```bash
git clone https://github.com/rhasspy/wyoming-satellite.git
cd wyoming-satellite/
python3 -m installer
```

## 4. Choose your settings in the installer

Move around the menus with the arrow keys and tick choices with the space bar.

| Menu | What to choose |
|---|---|
| **Satellite** | Satellite Type, then **Local wake word detection** |
| **Microphone** | **Autodetect**, and speak loudly into the microphone for a few seconds. Under Audio Settings set Noise Suppression to **Medium** and Auto Gain to **15**. |
| **Speakers** | Make sure your speakers are plugged in, then **Test All Speakers**. For each device choose **Play Sound** and listen. If you hear it, choose **Choose This Device**, otherwise **Next Device**. Under Toggle Feedback Sounds turn on **On wake-up** and **After voice command**. |
| **Wake Word** | Wake Word System, then **openWakeWord**, and install it when asked. In the openWakeWord menu choose **Download Community Wake Words**. Back in Wake Word, choose Choose Wake Word and pick one. |

## 5. Apply and check

From the main menu choose **Apply Settings** and enter your password. Then watch the logs:

```bash
sudo journalctl -f -u wyoming-satellite.service
```

Home Assistant should then offer the satellite through the **Wyoming Protocol** integration under Settings, Devices & services.
