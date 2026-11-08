---
title: News Reader
---

# News Reader

A master/detail news dashboard for Home Assistant in the Kiwi Smart Home style (black canvas, Antonio font). Channel tabs run across the top, a headline list sits on the left and the live story webpage on the right. Each story can be **read aloud**, and a play button plays the latest RNZ News audio bulletin.

It was built for a wall tablet running VACA (View Assist Companion App). News comes from RNZ's public RSS feeds and the story pane loads the real RNZ page.

<div class="kh-meta">
  <a class="primary" href="/downloads/news-reader.zip" download>Download everything (.zip)</a>
  <a href="https://github.com/thekiwismarthome/HA-Extras/tree/main/news-feed">GitHub</a>
</div>

## Features

- **Channel tabs.** National, World, Politics, Business, Sport, Pacific, Te Ao Māori and Education, each with its own RSS feed.
- **Newest first.** Relative ages like "5m ago", refreshed every minute.
- **The latest story opens on load** and when you change channel.
- **Click to read.** Tap a headline and the real RNZ page loads on the right, split 50/50 with each side scrolling.
- **Weather warnings.** MetService warnings are pinned in amber at the top of every channel.
- **Per-row read-aloud.** A play triangle reads the full article through your media player using Home Assistant Cloud TTS.
- **Audio bulletin button** (optional). Plays the latest RNZ News bulletin, with the URL scraped so it is always current.

## You will need

- **HACS:** `custom:button-card`, `feedparser`, and `pyscript` for read-aloud.
- **Home Assistant Cloud** (Nabu Casa) for TTS (`tts.home_assistant_cloud`).
- A `media_player` for read-aloud and the bulletin.

## Install

Each step lists the files it uses. They are all in the download below.

1. **Feed sensors.** Copy the sensor files into your `entities/sensors/` folder, which Home Assistant loads with `sensor: !include_dir_list`. Each file is one sensor with no `sensor:` key and no leading dash. Then **restart**, because new platform sensors need a full restart. They create `sensor.news_headlines`, `sensor.rnz_world`, `sensor.rnz_politics`, `sensor.rnz_business`, `sensor.rnz_sport`, `sensor.rnz_pacific`, `sensor.rnz_te_ao_maori`, `sensor.rnz_education` and `sensor.metservice_warnings`.
2. **The card.** Copy `news-reader-card.js` to `<config>/www/community/news-reader-card/`. In Settings, Dashboards, the three dots, Resources, add `/local/community/news-reader-card/news-reader-card.js` as a **JavaScript module**. Bump `?v=N` on the address whenever you replace the file so the tablet reloads it.
3. **A view for it.** Add a panel view to your dashboard and put the card in it, using the options below:

   ```yaml
   - title: News
     path: news
     panel: true
     cards:
       - type: custom:news-reader-card
         title: RNZ News
         # ...the options from the next section
   ```

4. **Read-aloud** (optional). Install pyscript from HACS and restart. Add the **Pyscript Python scripting** integration, choose Configure and tick **Allow all imports** and **Hass is global**. Do this in the interface or in YAML, not both. Copy `rnz_read_aloud.py` to `<config>/pyscript/`, set `tts_player` in the card, and reload pyscript.
5. **Audio bulletin** (optional). Copy `rnz-bulletin-audio-sensor.yaml` into `entities/sensors/`, restart, and add `rnz-bulletin-button-card.yaml` to a dashboard with your media player in it.

## Card options

```yaml
type: custom:news-reader-card
title: RNZ News
channels:
  - { label: National, entity: sensor.news_headlines }
  - { label: World,    entity: sensor.rnz_world }
  - { label: Sport,    entity: sensor.rnz_sport }
warnings_entity: sensor.metservice_warnings
tts_player: media_player.your_tablet_media_player
tts_service: pyscript.rnz_read_aloud
split: 50
open_newest_on_load: true
```

| Option | Default | Notes |
|---|---|---|
| `channels` | none | A list of `{label, entity}` |
| `warnings_entity` | none | Pinned amber on every channel |
| `tts_player` | none | Leave it out to hide the play buttons |
| `tts_service` | `pyscript.rnz_read_aloud` | Called with `{player, url}` |
| `split` | 50 | Width of the list in percent. Lower gives a bigger webpage |
| `bottom_gap` | 8 | Pixels kept clear below the card |
| `open_newest_on_load` | false | Open the newest story on load and on channel change |
| `title` | "News" | Header text. `""` hides it |

RNZ has more feeds. Copy a sensor file, change the `name` and the feed slug, and add a line to `channels`. Known-good extra slugs are `health`, `environment`, `country`, `in-depth`, `ldr` and `weather`.

## Things that cost real time

- **Section pages will not frame.** RNZ article pages embed fine, but section pages send `X-Frame-Options: SAMEORIGIN`. That is why channels are tabs backed by RSS.
- **Blank page on Android WebView.** Do not put a `sandbox` attribute on the iframe. The card leaves it off.
- **White on white in dark mode.** WebView force-dark wrecks RNZ, which has no dark theme. The card sets `color-scheme: light` on the iframe. The fallback is Android Developer options, **Override force-dark**, off.
- **"1304w" ages.** feedparser's default date format drops the year, and JavaScript reads a year-less date as 2001. Every sensor sets `date_format: "%a, %d %b %Y %H:%M:%S %z"`.
- **Silent TTS on long text.** Home Assistant Cloud TTS quietly drops messages over about 2000 characters, so read-aloud caps them at about 1500.
- **pyscript quirks.** `task.executor` only runs plain Python functions, and pyscript has no generator expressions.

Feeds are © RNZ (rnz.co.nz) and MetService, used through their public feeds.

## Download

<Downloads slug="news-reader" />

The older scrolling banner and the single read-aloud button are in the download too, under Older versions. The reader replaces both.
