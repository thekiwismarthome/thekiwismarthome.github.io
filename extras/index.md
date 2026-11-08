---
title: HA Extras
---

# HA Extras

A place for all my scripts, automations, cards and extra stuff, so I do not have to go looking later. Each one has a short guide here, a download with every file, and the code you can read before you copy it.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/HA-Extras">HA-Extras on GitHub</a>
</div>

## Dashboards

<div class="kh-grid">
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">button-card tiles</span></div>
    <h3><a href="/extras/ksh-style-buttons">KSH Style Buttons</a></h3>
    <p>The Kiwi Smart Home button design system and a library of ready-to-use <code>button-card</code> tiles, plus a custom intercom card and a full reference dashboard.</p>
    <div class="kh-tags"><span>button-card</span><span>SVG</span><span>Design system</span></div>
  </article>
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">Custom card + pyscript</span></div>
    <h3><a href="/extras/news-reader">News Reader</a></h3>
    <p>RNZ headlines by channel, the real story page beside the list, per-story read-aloud and the latest news bulletin. Made for a wall tablet.</p>
    <div class="kh-tags"><span>Lovelace</span><span>RSS</span><span>TTS</span></div>
  </article>
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">button-card</span></div>
    <h3><a href="/extras/shares-banner">Shares banner</a></h3>
    <p>A scrolling stock and currency ticker that opens the shares view when you tap it.</p>
    <div class="kh-tags"><span>button-card</span><span>Yahoo Finance</span></div>
  </article>
</div>

## Automations and blueprints

<div class="kh-grid">
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">Package + card</span></div>
    <h3><a href="/extras/stock-alerts">Stock Alerts</a></h3>
    <p>Add "tell me when AAPL goes below 150" rules from a dashboard card. No YAML to edit at runtime.</p>
    <div class="kh-tags"><span>To-do list</span><span>Helpers</span></div>
  </article>
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">Automation + script</span></div>
    <h3><a href="/extras/find-my-phone">Find my phone</a></h3>
    <p>Say "where is my phone" and it rings at full volume, even on silent. Say "found it" to stop it.</p>
    <div class="kh-tags"><span>Assist</span><span>Android</span></div>
  </article>
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">Blueprint</span></div>
    <h3><a href="/extras/blueprints">IKEA BILRESA blueprint</a></h3>
    <p>One automation for the whole Matter scroll wheel: toggle, white, colour cycling and eased dimming.</p>
    <div class="kh-tags"><span>Matter</span><span>Blueprint</span></div>
  </article>
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">Automation</span></div>
    <h3><a href="/extras/nspanel-view-assist">NSPanel keep-alive</a></h3>
    <p>Relaunches View Assist on a Sonoff NSPanel Pro 120 whenever another app is in front.</p>
    <div class="kh-tags"><span>ADB</span><span>View Assist</span></div>
  </article>
</div>

## Homelab

<div class="kh-grid">
  <article class="kh-card">
    <div class="kh-card-top"><span class="kh-kicker">Proxmox scripts</span></div>
    <h3><a href="/extras/hermes-webui-lxc">Hermes WebUI LXC</a></h3>
    <p>Two scripts that stand up Hermes WebUI as a native systemd service in its own Debian 12 LXC.</p>
    <div class="kh-tags"><span>Proxmox</span><span>LXC</span><span>systemd</span></div>
  </article>
</div>

## The older button style

`button-style/` in the repository is the original write-up and reference dashboard. It is replaced by [KSH Style Buttons](/extras/ksh-style-buttons), which has the same design rules plus the reusable tap template and the tile library.
