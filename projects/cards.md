---
title: Dashboard cards
---

# Dashboard cards

Custom Lovelace cards. For button tiles and dashboard views, see the [KSH Style Buttons](/extras/ksh-style-buttons) in HA Extras.

## Time Date Weather Card

A clock, the date, an animated weather icon, the condition and the temperature in one card.

- **Backgrounds.** A static image, a background chosen by the weather condition, or an animated canvas background that reads `sun.sun` for sunrise and sunset.
- **Sizes and colours.** Font sizes, the date colour, letter spacing and the overlay darkness are all options.
- **Installs from HACS.** The card registers its own resource.

```yaml
type: custom:time-date-weather-card
entity: weather.home
```

The animated SVG icons come from [pkissling/clock-weather-card](https://github.com/pkissling/clock-weather-card) and the canvas animations are ported from [teuchezh/dynamic-weather-card](https://github.com/teuchezh/dynamic-weather-card), both MIT.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/time-date-weather-card">time-date-weather-card on GitHub</a>
</div>

## ChoreOps cards

Cards for [ChoreOps](https://community.home-assistant.io/t/choreops-level-up-your-household-tasks/995326), a Home Assistant integration for household tasks. The tile card saves space on the kitchen screen and makes it easy for the kids to see who is doing what today. It shows only what is **due** right now, and another screen has pending and in-progress chores.

<div class="kh-meta">
  <a class="primary" href="https://github.com/thekiwismarthome/choreops-cards">choreops-cards on GitHub</a>
</div>

## Gallery Card

A fork of [TarheelGrad1998/gallery-card](https://github.com/TarheelGrad1998/gallery-card), which shows images and videos from a folder in the style of a gallery and can show camera images. The original author ended support in January 2024, so this works when configured properly but is not being developed. [lukelalo's fork](https://github.com/lukelalo/gallery-card) is still being developed.

<div class="kh-meta">
  <a href="https://github.com/thekiwismarthome/gallery-card">gallery-card on GitHub</a>
</div>

## More cards in other places

- [Recipe Manager](/projects/recipe-manager) and [Shopping List Manager](/projects/shopping-list-manager) are full cards with their own sites.
- [Timers and alarms](/projects/timers) has two timer cards.
- [News Reader](/extras/news-reader) in HA Extras is a custom card too.

<ProjectCards group="cards" />
