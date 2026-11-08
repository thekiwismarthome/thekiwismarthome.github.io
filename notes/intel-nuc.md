---
title: "Server: Intel NUC (archived)"
description: A 2020 Home Assistant, Docker and Plex server on an Intel NUC, with the commands that are still worth keeping.
---

# Server: Intel NUC

::: warning Archived, from 2020
This is how I ran Home Assistant, Plex and a few other things on one Intel NUC with Linux Mint and Docker. Home Assistant has changed a lot since. The Supervised installer used here is not how it is done now, and the Docker repository steps use `apt-key`, which is deprecated. Read it as history. For a current setup, see the [Home Assistant installation guide](https://www.home-assistant.io/installation/).
:::

## The machine

| | |
|---|---|
| **Computer** | Intel NUC8i5BEH |
| **Processor** | Core i5-8259U, 4 cores and 8 threads, up to 3.8 GHz |
| **Storage** | 465 GiB Seagate BarraCuda SSD for the system and a 931 GiB WD USB drive |
| **Network** | Gigabit Ethernet (Intel I219-V). The Wi-Fi was not used. |
| **System** | Linux Mint 19.2 (Cinnamon), based on Ubuntu 18.04, kernel 4.15 |
| **Media storage** | A NAS, mounted over NFS |

## What ran on it

- **Docker CE** with **Portainer** to manage the containers.
- **Home Assistant**, installed with the Supervised installer for the `intel-nuc` machine type, with add-ons for Mosquitto, MariaDB, Zigbee2MQTT, ADB, AppDaemon, Glances, an IDE and Google Drive backup.
- **Plex** in Docker, with its media on the NAS.
- **ZoneMinder** in Docker for cameras.
- **MySQL** and **Wiki.js** in Docker.

## Commands worth keeping

These are the parts of my notes that are still useful. Change the placeholders in capitals.

### Plex in Docker, with the media on a NAS

Mount the NAS shares, then create the container. `PUID` and `PGID` must be the numbers `id` shows for your user.

```bash
sudo apt install nfs-common
sudo mkdir -p /shares/plex/{mytv,mymovies,mymusic,config}
sudo mount -t nfs NAS_IP:/data/plex /shares/plex -w
```

```bash
sudo docker create \
  --name=plex \
  --net=host \
  --restart=always \
  -e VERSION=latest \
  -e PUID=1000 -e PGID=1000 \
  -e TZ=Pacific/Auckland \
  -v /shares/plex/config:/config \
  -v /shares/plex/mytv:/data/tvshows \
  -v /shares/plex/mymovies:/data/movies \
  -v /shares/plex/mymusic:/data/music \
  -v /home/YOUR_USER/docker/plex/transcode:/transcode \
  linuxserver/plex
```

What the options do: `--net=host` shares the host network, `--restart=always` starts it at boot, `PUID` and `PGID` avoid permission problems with the share, and each `-v` maps a folder into the container.

### Mount the NAS at boot

Back up `fstab` first, then add one line per share to `/etc/fstab`.

```bash
sudo cp /etc/fstab /etc/fstab.bak
sudo nano /etc/fstab
```

```text
NAS_IP:/data/plex           /shares/plex           nfs defaults 0 0
NAS_IP:/data/plex/mytv      /shares/plex/mytv      nfs defaults 0 0
NAS_IP:/data/plex/mymovies  /shares/plex/mymovies  nfs defaults 0 0
NAS_IP:/data/plex/mymusic   /shares/plex/mymusic   nfs defaults 0 0
NAS_IP:/data/plex/config    /shares/plex/config    nfs defaults 0 0
```

### A self-signed certificate for Home Assistant

Run it in the folder Home Assistant reads certificates from, and answer the prompts.

```bash
openssl req -sha256 -addext "subjectAltName = IP:YOUR_HA_IP" \
  -newkey rsa:4096 -nodes -keyout privkey.pem -x509 -days 730 -out fullchain.pem
```

Then point `configuration.yaml` at the two files:

```yaml
http:
  ssl_certificate: /ssl/fullchain.pem
  ssl_key: /ssl/privkey.pem
```

The paths above are for Home Assistant Supervised. Core uses the folder you keep your configuration in, and Docker uses `/config/ssl/`. Browsers will warn about a self-signed certificate until you add it to the device's trusted certificates.

### Find the activity names of apps on an Android TV

Useful for launching apps from Home Assistant, and for the [NSPanel keep-alive](/extras/nspanel-view-assist). Connect with ADB, then list the launch activity of every installed app. The last line for each package is the one you want.

```bash
adb shell pm list packages | sed -e "s/package://" | while read x; do cmd package resolve-activity --brief $x; done
```

Some boxes, such as the Mi Box 3, keep ADB over Wi-Fi closed. Open it once with a USB cable (it closes again after a reboot unless the box is rooted):

```bash
adb tcpip 5555
adb connect DEVICE_IP:5555
```

### Back up the configuration to GitHub

```bash
cd /path/to/your/config
git init
git config user.email "you@example.com"
git config user.name "Your Name"
git add .
git commit -m "First backup"
git remote add origin https://github.com/YOU/YOUR_CONFIG_REPO
git push -u origin master
```

::: danger Do this first
Create a `.gitignore` that lists `secrets.yaml`, `.storage/`, `*.db` and anything else private **before** the first `git add .`. Use a private repository. A configuration folder holds tokens and passwords.
:::

## What I left out

The original note was a long working document of around two thousand lines. For this page I dropped:

- Passwords, tokens and keys that had been pasted in. If you ever published a note like that, change them.
- Long stretches copied from other people's tutorials. The originals are better and kept up to date, for example the [Zigbee2MQTT documentation](https://www.zigbee2mqtt.io/) and the [Home Assistant add-on pages](https://www.home-assistant.io/addons/).
- Lists of add-ons and custom cards with no notes, and Hass.io integrations that no longer exist.

The theme from the same note is on its own page: [BerryBlues theme](/notes/berryblues-theme).
