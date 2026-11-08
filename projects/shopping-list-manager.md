---
title: Shopping List Manager
---

# Shopping List Manager

One shopping list for the whole house, inside Home Assistant. The integration keeps the lists, catalogue and loyalty cards on your server and the card is what you use on a phone, tablet or wall panel.

<div class="kh-meta">
  <a class="primary" href="/shopping-list-manager-card/">Website and user manual</a>
  <a href="/shopping-list-manager-card/demo">Live demo</a>
  <a href="https://github.com/thekiwismarthome/shopping-list-manager">Integration on GitHub</a>
  <a href="https://github.com/thekiwismarthome/shopping-list-manager-card">Card on GitHub</a>
</div>

## What it does

- **Shared or private lists.** Keep as many lists as you like and share them with the household. Changes show up on every device straight away.
- **A product catalogue.** A built-in product catalogue with fuzzy search, so "yogurt" finds "Yogurt - Greek". Recently used items get their own section.
- **Loyalty cards at the till.** Store your barcodes, scan them in with the camera and tap a card to show a large barcode or QR code.
- **Categories you can swipe.** Thirteen colour-coded categories in a swipeable chip row.
- **Phones, tablets and wall panels.** Bottom sheets on a phone, a keep-screen-on option for the kitchen tablet, and list or tile view.
- **Backup and restore.** Export your lists and custom products to a file and bring them back later.

Two designs (Fresh and Compact) and three themes (Meadow, Slate and Sunset) work in light and dark.

## Install

It has two parts and you need both: the integration and the card.

<div class="kh-steps">
<div>

### Add the integration
In HACS, add the integration, download it and restart Home Assistant.

```text
thekiwismarthome/shopping-list-manager
```

</div>
<div>

### Set it up
Go to **Settings → Devices & services → Add integration** and search for **Shopping List Manager**.

</div>
<div>

### Add the card
Install the card from HACS as a frontend repository, then add it to a dashboard.

```yaml
type: custom:shopping-list-manager-card
```

</div>
</div>

Needs Home Assistant 2024.1 or newer and HACS 2.x. The [getting started guide](/shopping-list-manager-card/guide/getting-started) has one-click HACS links.

## The user manual

<div class="kh-links-grid">
  <a href="/shopping-list-manager-card/guide/getting-started"><b>Getting started</b><span>Install, first list, add the card.</span></a>
  <a href="/shopping-list-manager-card/guide/lists"><b>Lists</b><span>Create, switch, share and keep private.</span></a>
  <a href="/shopping-list-manager-card/guide/loyalty-cards"><b>Loyalty cards</b><span>Add a barcode and show it at the till.</span></a>
  <a href="/shopping-list-manager-card/guide/appearance"><b>Appearance</b><span>Designs, themes and colour mode.</span></a>
  <a href="/shopping-list-manager-card/guide/backup-restore"><b>Backup and restore</b><span>Before an upgrade.</span></a>
  <a href="/shopping-list-manager-card/guide/faq"><b>FAQ</b><span>Troubleshooting and common questions.</span></a>
</div>
