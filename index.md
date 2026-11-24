---
layout: home
title: The Kiwi Smart Home
titleTemplate: Home Assistant projects from New Zealand
hero:
  name: Home Assistant, the Kiwi way
  text: Cards, integrations and dashboards for a smarter home.
  tagline: A family hub for shopping, meals, chores and pocket money, plus timers, voice assistants, wall panels and a drawer of dashboard extras. Free, open source and built to be used every day in a real house.
  actions:
    - theme: brand
      text: Browse the projects
      link: /projects/
    - theme: alt
      text: HA Extras
      link: /extras/
features:
  - icon:
      src: /icons/cart.svg
      width: 24
      height: 24
    title: KSH Family Hub
    details: Shopping, meals, chores, a family calendar and pocket money for the kids, in one Home Assistant app. Try the live demo.
    link: /projects/ksh-family-hub
    linkText: KSH Family Hub
  - icon:
      src: /icons/timer.svg
      width: 24
      height: 24
    title: Timers and alarms
    details: A timer card that finds your timers on its own, a View Assist timers card, an alarm clock and Assist timer helpers.
    link: /projects/timers
    linkText: Timers and alarms
  - icon:
      src: /icons/card.svg
      width: 24
      height: 24
    title: Dashboard cards
    details: A clock and weather card, ChoreOps tiles for the kitchen screen and a gallery card.
    link: /projects/cards
    linkText: Dashboard cards
  - icon:
      src: /icons/voice.svg
      width: 24
      height: 24
    title: Voice and displays
    details: ESPHome voice assistants, a rotary thermostat you can try in the browser, and wall panels that run View Assist.
    link: /projects/voice-displays
    linkText: Voice and displays
  - icon:
      src: /icons/extras.svg
      width: 24
      height: 24
    title: HA Extras
    details: The drawer of scripts, automations, blueprints and dashboard cards that did not need a repository of their own.
    link: /extras/
    linkText: HA Extras
---

## KSH Family Hub {#featured}

One Home Assistant integration for the whole household, with its own website, a live demo that runs the real app on sample data (the phones above), and a set of tutorials and how-tos.

<div class="kh-two">
  <a class="kh-feature meadow" href="/ksh-family-hub/">
    <span class="kh-kicker">Integration + cards</span>
    <b>KSH Family Hub</b>
    <span class="kh-body">Shared shopping lists, a recipe book and weekly meal planner, chores and routines the children tick off, a family calendar and pocket money with a Cash and a Bank account for each child. Ten colour themes, and quick on a phone away from home.</span>
    <span class="kh-go">Open the website and live demo →</span>
  </a>
  <a class="kh-feature sunset" href="/ksh-family-hub/guide/">
    <span class="kh-kicker">Tutorials and how-tos</span>
    <b>Learn it in an evening</b>
    <span class="kh-body">Install it, add your family, set up chores and pocket money, put the kids screen on a bedside tablet, use it away from home, move over from Recipe Manager and Shopping List Manager, back it up.</span>
    <span class="kh-go">Open the guides →</span>
  </a>
</div>

KSH Family Hub replaces Recipe Manager and Shopping List Manager, and imports their data.

## HA Extras {#extras}

A big drawer of things that are too small for a repository of their own. A dashboard design system, a news reader, stock alerts, a find my phone script, a blueprint for the IKEA BILRESA scroll wheel, a watchdog for a wall panel and a Proxmox installer. Every one has a short guide, a one-click download of the files and the code to read first.

<div class="kh-links-grid">
  <a href="/extras/ksh-style-buttons"><b>KSH Style Buttons</b><span>Animated line-art tiles on a black dashboard.</span></a>
  <a href="/extras/news-reader"><b>News Reader</b><span>RNZ headlines, read aloud, on a wall tablet.</span></a>
  <a href="/extras/stock-alerts"><b>Stock Alerts</b><span>Add price alerts from a card, no YAML.</span></a>
  <a href="/extras/find-my-phone"><b>Find my phone</b><span>Say it and the phone rings, even on silent.</span></a>
  <a href="/extras/blueprints"><b>IKEA BILRESA blueprint</b><span>One automation for the whole scroll wheel.</span></a>
  <a href="/extras/nspanel-view-assist"><b>NSPanel keep-alive</b><span>Relaunches View Assist when it stops.</span></a>
</div>

[See all of HA Extras →](/extras/)

## Everything else

<ProjectCards :ids="['ha-timer-card','view-assist-timers-card','time-date-weather-card','rotary-thermostat','xiaozhi-esphome','seedbox']" />

[See every project →](/projects/)

## Where it all lives

<img src="/kiwi-smart-home.png" alt="The Kiwi Smart Home" width="280" height="280" style="float:right;margin:0 0 16px 28px;border-radius:36px;max-width:45%;height:auto">

Everything is on GitHub under [thekiwismarthome](https://github.com/thekiwismarthome). Issues and ideas are welcome on any repository. The [notes](/notes/) are the older how-tos and workings from the homelab.
