---
title: Recipe Manager
---

# Recipe Manager

Recipes, a weekly meal planner and kitchen timers inside Home Assistant. It stores everything on your own server, with no account and no cloud.

<div class="kh-meta">
  <a class="primary" href="/Recipe-Manager/">Website and user manual</a>
  <a href="/Recipe-Manager/demo">Live demo</a>
  <a href="https://github.com/thekiwismarthome/Recipe-Manager">Integration on GitHub</a>
  <a href="https://github.com/thekiwismarthome/Recipe-Manager-Card">Card on GitHub</a>
</div>

## What it does

- **A library that stays yours.** Photos, ingredients, steps, nutrition, notes, tags, courses, categories and collections.
- **Paste a link, get a recipe.** The card reads the title, ingredients, steps, times and photo from a recipe page. You can also bring in a whole Recipe Keeper export at once.
- **Made for cooking.** Scale servings, convert cups and ounces to grams and millilitres, tick off ingredients as you go and keep the screen awake.
- **Timers you can tap.** Tap "11 minutes" in a method step to start a timer. Share timers around the house and see the ones you started by voice on a Voice PE.
- **A meal planner.** Breakfast, lunch, dinner and snacks on the calendar. The home screen shows what is for dinner tonight, with a Cook button.
- **Straight to the shopping list.** One tap adds a recipe's ingredients to your list. It works on its own and works even better with [Shopping List Manager](/projects/shopping-list-manager).

Two designs (Fresh and Compact) and three themes (Meadow, Slate and Sunset) work in light and dark.

## Install

<div class="kh-steps">
<div>

### Add the integration
In HACS, add the repository as an integration, download it and restart Home Assistant.

```text
thekiwismarthome/Recipe-Manager
```

</div>
<div>

### Set it up
Go to **Settings → Devices & services → Add integration** and search for **Recipe Manager**.

</div>
<div>

### Add the card
The card comes with the integration. Pick **Recipe Manager Card** from the Add card list.

```yaml
type: custom:recipe-manager-card
```

</div>
</div>

The [getting started guide](/Recipe-Manager/guide/getting-started) has the details.

## The user manual

<div class="kh-links-grid">
  <a href="/Recipe-Manager/guide/getting-started"><b>Getting started</b><span>Install and add your first recipe.</span></a>
  <a href="/Recipe-Manager/guide/cooking"><b>Cooking from a recipe</b><span>Scale, convert, timers and the checklist.</span></a>
  <a href="/Recipe-Manager/guide/meal-planner"><b>Meal planner</b><span>Plan the week and see tonight's dinner.</span></a>
  <a href="/Recipe-Manager/guide/timers"><b>Timers</b><span>Local, shared and Voice PE timers.</span></a>
  <a href="/Recipe-Manager/guide/shopping"><b>Shopping list</b><span>Send ingredients to your list.</span></a>
  <a href="/Recipe-Manager/guide/faq"><b>FAQ</b><span>Troubleshooting and common questions.</span></a>
</div>
