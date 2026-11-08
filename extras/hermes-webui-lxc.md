---
title: Hermes WebUI LXC
---

# Hermes WebUI in a Proxmox LXC

Two scripts that stand up [Hermes WebUI](https://github.com/nesquena/hermes-webui), a self-hosted web UI for the Hermes Agent, as a native systemd service inside its own Debian 12 LXC on Proxmox VE. There is no Docker. It is just Python, a venv and a systemd unit, which is how the upstream project is designed to run.

<div class="kh-meta">
  <a class="primary" href="/downloads/hermes-webui-lxc.zip" download>Download the scripts (.zip)</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/hermes-webui-lxc">GitHub</a>
</div>

::: warning A separate project
Hermes WebUI is a UI for [Hermes Agent](https://github.com/NousResearch/hermes-agent), a separate third-party framework. The installer runs that project's own install script to pull the agent in. Read it first if you want to know exactly what it does.
:::

## What you get

- A fresh unprivileged Debian 12 LXC.
- Hermes WebUI in `/opt/hermes-webui`, running as an unprivileged `hermes` user, not root.
- A `hermes-webui` systemd service that starts on boot and restarts on failure.
- It listens on `0.0.0.0:8787` by default, so it is reachable from your LAN.

## Quick start

Run this **on the Proxmox host**, as root:

```bash
curl -fsSL https://raw.githubusercontent.com/thekiwismarthome/HA-Extras/main/hermes-webui-lxc/create-lxc.sh -o create-lxc.sh
bash create-lxc.sh
```

It picks the next free container ID, asks you to set a password twice, creates the container, waits for the network, then runs `install.sh` inside it. It prints the URL when it finishes, such as `http://192.168.1.50:8787`. Give it several minutes. Most of that is Hermes Agent's own installer pulling in Node.js, Playwright and Python dependencies, and it goes quiet for stretches.

To skip the prompt, set the values first:

```bash
CTID=910 WEBUI_PASSWORD='pick-something-strong' bash create-lxc.sh
```

## Settings

Set these as environment variables before running `create-lxc.sh`.

| Variable | Default | Notes |
|---|---|---|
| `CTID` | auto | Container ID |
| `CT_HOSTNAME` | `hermes-webui` | Hostname |
| `STORAGE` | `local-lvm` | Where the disk lives |
| `BRIDGE` | `vmbr0` | Network bridge |
| `NET_CONFIG` | `ip=dhcp` | Or `ip=192.168.1.50/24,gw=192.168.1.1` |
| `DISK_SIZE_GB`, `MEMORY_MB`, `CORES` | 8, 2048, 2 | Plenty for the WebUI |
| `WEBUI_PORT` | `8787` | Listening port |
| `WEBUI_HOST` | `0.0.0.0` | Use `127.0.0.1` behind a local reverse proxy |
| `WEBUI_PASSWORD` | empty | Strongly recommended |

## Day to day

Run these inside the container, after `pct enter <CTID>` from the Proxmox host.

```bash
systemctl status hermes-webui
journalctl -u hermes-webui -f
systemctl restart hermes-webui
```

To update, re-run `install.sh` inside the container. It stops the service, pulls the latest code, picks up new dependencies and restarts, and leaves your `.env` and password alone.

::: danger Check where you are
`install.sh` installs packages, creates a user and adds a systemd service. Check `hostname` before running it by hand, so it does not land on the Proxmox host.
:::

`install.sh` also works on any Debian or Ubuntu machine with systemd.

## Download

Read both scripts before you run them. They run as root on your Proxmox host and inside the container.

<Downloads slug="hermes-webui-lxc" />

::: details create-lxc.sh
<<< @/public/downloads/hermes-webui-lxc/create-lxc.sh{bash}
:::

::: details install.sh
<<< @/public/downloads/hermes-webui-lxc/install.sh{bash}
:::
