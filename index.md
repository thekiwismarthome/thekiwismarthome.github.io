---
layout: home
title: The Kiwi Smart Home
titleTemplate: Home Assistant projects from New Zealand
hero:
  name: Home Assistant, the Kiwi way
  text: Cards, integrations and dashboards for a smarter home.
  tagline: Recipe and shopping list managers, timers, voice assistants, wall panels and a drawer of dashboard extras. Free, open source and built to be used every day in a real house.
  actions:
    - theme: brand
      text: Browse the projects
      link: /projects/
    - theme: alt
      text: HA Extras
      link: /extras/
features:
  - icon:
      src: /icons/recipe.svg
      width: 24
      height: 24
    title: Recipe Manager
    details: Your recipes, a weekly meal planner and kitchen timers inside Home Assistant.
    link: /projects/recipe-manager
    linkText: Recipe Manager
  - icon:
      src: /icons/cart.svg
      width: 24
      height: 24
    title: Shopping List Manager
    details: Shared real-time lists, a product catalogue and a loyalty card wallet.
    link: /projects/shopping-list-manager
    linkText: Shopping List Manager
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

## Two integrations with their own websites {#featured}

Each one is a Home Assistant integration plus a card, with a user manual and a live demo that runs the real card on sample data. The phones above are those demos.

<div class="kh-two">
  <a class="kh-feature sunset" href="/Recipe-Manager/">
    <span class="kh-kicker">Integration + card</span>
    <b>Recipe Manager</b>
    <span class="kh-body">Keep every recipe you cook. Paste a link and the card reads the title, ingredients and steps for you. Scale servings, tap a time to start a timer, plan the week's dinners and send the ingredients to the shopping list in one tap.</span>
    <span class="kh-go">Open the website and live demo →</span>
  </a>
  <a class="kh-feature meadow" href="/shopping-list-manager-card/">
    <span class="kh-kicker">Integration + card</span>
    <b>Shopping List Manager</b>
    <span class="kh-body">One shopping list for the whole house. Shared or private lists that update on every device straight away, a product catalogue with fuzzy search, loyalty cards at the till, and two designs in three themes.</span>
    <span class="kh-go">Open the website and live demo →</span>
  </a>
</div>

They work on their own and work even better together: Recipe Manager sends a recipe's ingredients to Shopping List Manager.

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
