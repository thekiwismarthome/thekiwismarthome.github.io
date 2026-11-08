// The one list of projects. The home page, the project index and each group page all read from here,
// so a project is described once. `site` is a page on this site or another GitHub Pages site; `repo` is the GitHub repository.
const GH = 'https://github.com/thekiwismarthome/';

export const GROUPS = {
  featured: { title: 'Home Assistant integrations', link: '/projects/', blurb: 'The big ones: an integration plus a card, with their own websites and live demos.' },
  timers: { title: 'Timers & alarms', link: '/projects/timers', blurb: 'Cards and scripts for timers, alarms and reminders.' },
  cards: { title: 'Dashboard cards', link: '/projects/cards', blurb: 'Custom Lovelace cards for the dashboard.' },
  voice: { title: 'Voice & displays', link: '/projects/voice-displays', blurb: 'Voice assistants, ESPHome gadgets and wall panels.' },
  homelab: { title: 'Homelab', link: '/projects/homelab', blurb: 'Proxmox, containers and the media stack.' },
};

// status: live | wip | stable | unmaintained
export const PROJECTS = [
  { id: 'recipe-manager', group: 'featured', name: 'Recipe Manager', status: 'live', kicker: 'Integration + card',
    blurb: 'Recipes, a weekly meal planner, cooking timers and a one-tap trip to the shopping list, all inside Home Assistant.',
    site: '/Recipe-Manager/', page: '/projects/recipe-manager', repo: 'Recipe-Manager', tags: ['HACS', 'Python', 'Lovelace'] },
  { id: 'shopping-list-manager', group: 'featured', name: 'Shopping List Manager', status: 'live', kicker: 'Integration + card',
    blurb: 'Shared real-time shopping lists, a product catalogue and a loyalty card wallet, with two designs and three themes.',
    site: '/shopping-list-manager-card/', page: '/projects/shopping-list-manager', repo: 'shopping-list-manager', tags: ['HACS', 'Python', 'Lovelace'] },

  { id: 'ha-timer-card', group: 'timers', name: 'Timer Card for View Assist', status: 'stable', kicker: 'Based on eyalgal/simple-timer-card',
    blurb: 'Simple Timer Card with View Assist timer support added: alarm switches, snooze states, a satellite entity override and drum-style time pickers. Finds your timers on its own.',
    repo: 'ha-timer-card', tags: ['HACS', 'Lovelace', 'View Assist'] },
  { id: 'view-assist-timers-card', group: 'timers', name: 'View Assist Timers Card', status: 'stable', kicker: 'Lovelace card',
    blurb: 'Every timer, alarm and reminder from View Assist with live countdowns, bar or horseshoe display, and snooze and dismiss when one rings.',
    repo: 'HA-View-Assist-Timers-Card', tags: ['Lovelace', 'View Assist'] },
  { id: 'ha-alarm-clock', group: 'timers', name: 'Alarm clock', status: 'stable', kicker: 'YAML configuration',
    blurb: 'A Home Assistant alarm configuration built from input helpers, with screenshots and a walkthrough of each part.',
    repo: 'ha-alarm-clock', tags: ['YAML'] },
  { id: 'ha-intent-timers', group: 'timers', name: 'Assist timers', status: 'stable', kicker: 'Assist intents',
    blurb: 'Start and stop timers by voice and ask how long is left on all of them or one in particular. Based on ha_intent_timers.',
    repo: 'ha-intent-timers', tags: ['Assist', 'YAML'] },

  { id: 'time-date-weather-card', group: 'cards', name: 'Time Date Weather Card', status: 'stable', kicker: 'Lovelace card',
    blurb: 'Clock, date and an animated weather icon in one card, with weather-aware or animated canvas backgrounds.',
    repo: 'time-date-weather-card', tags: ['HACS', 'Lovelace'] },
  { id: 'choreops-cards', group: 'cards', name: 'ChoreOps cards', status: 'stable', kicker: 'Lovelace cards',
    blurb: 'Compact cards for ChoreOps that show who is doing which chore today. Made for the kitchen screen.',
    repo: 'choreops-cards', tags: ['Lovelace'] },
  { id: 'gallery-card', group: 'cards', name: 'Gallery Card', status: 'unmaintained', kicker: 'Fork of TarheelGrad1998/gallery-card',
    blurb: 'Images and videos from a folder in the style of a gallery. The original author has ended support.',
    repo: 'gallery-card', tags: ['Lovelace', 'Fork'] },

  { id: 'xiaozhi-esphome', group: 'voice', name: 'Xiaozhi ESPHome', status: 'stable', kicker: 'ESPHome firmware',
    blurb: 'Use Xiaozhi AI devices as Home Assistant voice assistants, with on-device wake word and custom graphics.',
    repo: 'xiaozhi-esphome', tags: ['ESPHome', 'Voice'] },
  { id: 'voice-assistant', group: 'voice', name: 'Voice assistant devices', status: 'stable', kicker: 'Notes',
    blurb: 'HassMic with a built-in Wyoming wake word, running on a Xiaomi Smart Clock and a Lenovo ThinkSmart, with LineageOS.',
    repo: 'voice-assistant', tags: ['Android', 'Voice'] },
  { id: 'tsv-lineage-os', group: 'voice', name: 'ThinkSmart View + LineageOS', status: 'stable', kicker: 'Guide',
    blurb: 'Install Lineage OS 15.1 on a Lenovo ThinkSmart View using a Raspberry Pi 3B+.',
    repo: 'TSV-Lineage-OS', tags: ['Android', 'Hardware'] },
  { id: 'nesp', group: 'voice', name: 'nESP rotary thermostat', status: 'wip', kicker: 'ESPHome',
    blurb: 'A Nest-style thermostat on a 2.1 inch rotary display and ESP32-S3. Not working yet.',
    repo: 'nESP', tags: ['ESPHome', 'LVGL'] },
  { id: 'rotary-thermostat', group: 'voice', name: 'Rotary display thermostat', status: 'stable', kicker: 'ESPHome + live simulator',
    blurb: 'An LVGL thermostat for the ZX2D10GE01R-V4848 rotary display. Turn the dial in your browser before you build it.',
    page: '/projects/rotary-thermostat', repo: 'Rotary-Display-Thermostat-ZX2D10GE01R-V484', tags: ['ESPHome', 'LVGL', 'Demo'] },
  { id: 'rotary-clock', group: 'voice', name: 'Rotary display clock and dimmer', status: 'wip', kicker: 'ESPHome',
    blurb: 'Clock, heat pump and light dimmer control on the rotary display. Still being developed.',
    repo: 'Rotary-Display-Clock-HeatPump-LightDimmer', tags: ['ESPHome', 'LVGL'] },

  { id: 'seedbox', group: 'homelab', name: 'Proxmox Seedbox', status: 'stable', kicker: 'Proxmox LXC stack',
    blurb: 'Prowlarr, Sonarr, Radarr, Lidarr, qBittorrent and more as separate LXC containers sharing one NAS-backed library.',
    repo: 'Seedbox', tags: ['Proxmox', 'Shell'] },
  { id: 'hermes-webui-lxc', group: 'homelab', name: 'Hermes WebUI LXC', status: 'stable', kicker: 'HA Extras',
    blurb: 'Two scripts that stand up Hermes WebUI as a native systemd service in its own Debian 12 LXC.',
    page: '/extras/hermes-webui-lxc', repo: 'HA-Extras', tags: ['Proxmox', 'Shell'] },
];

export const STATUS = {
  live: 'Full website',
  stable: 'Available',
  wip: 'In development',
  unmaintained: 'Unmaintained',
};

export function repoUrl(p) { return GH + p.repo; }
