---
title: KSH Family Hub
---

# KSH Family Hub

Shopping, meals, chores, a family calendar and pocket money for the kids, in **one** Home Assistant integration and **one** app. It stores everything on your own server, with no account and no cloud, and it is quick on a phone away from home.

<div class="kh-meta">
  <a class="primary" href="/ksh-family-hub/">Website and guides</a>
  <a href="/ksh-family-hub/demo">Live demo</a>
  <a href="https://github.com/thekiwismarthome/ksh-family-hub">Source on GitHub</a>
  <a href="https://github.com/thekiwismarthome/ksh-family-hub/releases">Releases</a>
</div>

## What it does

- **Shopping.** Shared real-time lists, a product catalogue for your country with fuzzy search, supermarkets and a loyalty card wallet. Tiles or list.
- **Meals.** Your recipe book, imported from any recipe website or Recipe Keeper, a weekly meal planner, cooking timers and a "Tonight" card on the home screen.
- **Chores and routines.** Assign a chore to one person, several or anyone, repeat it daily, weekly or on a custom pattern, and remind at its due time. Children tick, adults approve. Routines have steps for certain days. Fireworks when they finish.
- **Points and rewards.** Points for chores, rewards to spend them on, approved by an adult.
- **Pocket money.** A Cash and a Bank account for each child, what it was spent on, and rules that turn points into pocket money each week or month.
- **A family calendar.** School, sport, appointments and birthdays with each person's face and colour, your chores and Home Assistant calendars alongside.
- **A screen for the kids.** A big, colourful chores, routines and stars screen for the bedside tablet. Children do not need a Home Assistant login.
- **People, not users.** Adults, children and guests with a preferred name, a picture or emoji and an optional PIN. Nobody is created for you.
- **Ten themes**, each in light and dark, a searchable emoji picker, and every part can be switched off.

KSH Family Hub replaces Recipe Manager and Shopping List Manager. It imports their recipes, plans, lists and products the first time it starts.

## Install

<div class="kh-steps">
<div>

### Add the integration
In HACS, add the repository as an integration, download it and restart Home Assistant.

```text
thekiwismarthome/ksh-family-hub
```

</div>
<div>

### Set it up
Go to **Settings → Devices & services → Add integration** and search for **KSH Family Hub**. Choose the parts you want.

</div>
<div>

### Add your family
Open **Family Hub** in the sidebar, then the menu → **People & guests**.

```yaml
# optional dashboard cards
type: custom:ksh-family-hub-card
```

</div>
</div>

## Tutorials and how-tos

<div class="kh-links-grid">
  <a href="/ksh-family-hub/guide/getting-started"><b>Install and set up</b><span>HACS, the first start, what you see.</span></a>
  <a href="/ksh-family-hub/guide/people"><b>Add your family</b><span>Adults, children, guests, pictures and PINs.</span></a>
  <a href="/ksh-family-hub/guide/chores-routines"><b>Chores and routines</b><span>Assign, repeat, remind, approve.</span></a>
  <a href="/ksh-family-hub/guide/money"><b>Points, rewards and pocket money</b><span>From a ticked chore to money in the bank.</span></a>
  <a href="/ksh-family-hub/guide/shopping"><b>Shopping lists</b><span>Lists, catalogue, supermarkets, loyalty cards.</span></a>
  <a href="/ksh-family-hub/guide/meals"><b>Recipes and the meal planner</b><span>Import, plan the week, send to the list.</span></a>
  <a href="/ksh-family-hub/guide/calendar"><b>The family calendar</b><span>Events, repeats, reminders, who it is for.</span></a>
  <a href="/ksh-family-hub/guide/kids-screen"><b>A screen for the kids' bedroom</b><span>The colourful bedside display.</span></a>
  <a href="/ksh-family-hub/guide/themes-menu"><b>Change the look and the menu</b><span>Ten themes, order and hide.</span></a>
  <a href="/ksh-family-hub/guide/away-from-home"><b>Use it away from home</b><span>Why it is quick, and how to keep it quick.</span></a>
  <a href="/ksh-family-hub/guide/migrate"><b>Move from Recipe Manager and Shopping List Manager</b><span>Your data comes with you.</span></a>
  <a href="/ksh-family-hub/guide/troubleshooting"><b>Troubleshooting</b><span>Custom element not found, blank screens, PINs.</span></a>
</div>

## Already using Recipe Manager or Shopping List Manager?

Nothing is lost. See [Move from Recipe Manager and Shopping List Manager](/ksh-family-hub/guide/migrate). Those two projects are now part of KSH Family Hub; their repositories stay on GitHub for reference.
