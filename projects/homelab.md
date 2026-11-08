---
title: Homelab
---

# Homelab

Proxmox, containers and the media stack.

## Proxmox Seedbox

A self-hosted media automation stack where every service is its own LXC container on Proxmox VE. All of them share one NAS-backed media library.

| Service | Purpose |
|---|---|
| Prowlarr | Indexer manager that feeds Sonarr, Radarr and Lidarr |
| FlareSolverr | Cloudflare bypass proxy for Prowlarr |
| Sonarr | TV shows |
| Lidarr | Music |
| Radarr | Movies |
| qBittorrent | Torrent client |
| yt-dlp-webui | Web UI for yt-dlp downloads |

The NAS is mounted once on the Proxmox host over NFS and bind-mounted into every container, so they all see the same file paths. That is what lets the `*arr` apps hard link and move files without copying. The repository has the setup scripts, starting with `01-setup-nas-mount.sh`.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/Seedbox">Seedbox on GitHub</a>
</div>

## Hermes WebUI in an LXC

Two scripts that create a Debian 12 LXC on Proxmox and install Hermes WebUI as a native systemd service, with no Docker. [Read the guide](/extras/hermes-webui-lxc).

## Notes

Older homelab notes, including the Intel NUC server build and the Home Assistant disk that kept growing, are in [Notes](/notes/).

<ProjectCards group="homelab" />
