// Every file offered for download on this site, in one place.
//
// `npm run sync` reads this list, copies each file from its source repository into public/downloads/<slug>/,
// and builds public/downloads/<slug>.zip. The copies are committed, so the website builds without the other repositories.
// A page shows a slug with <Downloads slug="find-my-phone" /> and can embed a file with <<< @/public/downloads/<slug>/<file>.
//
//   repo   the GitHub repository (and the sibling folder name next to this one)
//   dir    folder inside that repository
//   files  [path inside dir, what it is, where it goes, optional group]
//   local  a file kept in this site's downloads-src/ folder because the repository does not have it

export const DOWNLOADS = {
  'find-my-phone': {
    title: 'Find my phone',
    repo: 'HA-Extras', dir: 'find-my-phone',
    files: [
      ['script-find-my-phone.yaml', 'Takes the phone off silent, sets the alarm volume to maximum and sends the alarm notification.', 'Settings, Automations & scenes, Scripts'],
      ['automation-find-my-phone.yaml', 'Listens for the spoken phrases and runs the script, or clears the notification.', 'Settings, Automations & scenes'],
    ],
  },

  'stock-alerts': {
    title: 'Stock Alerts',
    repo: 'HA-Extras', dir: 'stock-alerts',
    files: [
      ['package-stock-alerts.yaml', 'The whole backend: helpers, add and clear scripts and the monitoring automation.', 'config/packages/stock_alerts.yaml'],
      ['dashboard-card.yaml', 'The dashboard card, a native version and an optional Mushroom version.', 'Dashboard, Add card, Manual'],
    ],
  },

  'shares-banner': {
    title: 'Shares banner',
    repo: 'HA-Extras', dir: 'stocks_shares',
    files: [
      ['shares_banner.yaml', 'One button-card that scrolls every Yahoo Finance sensor across the top of a dashboard.', 'Dashboard, Add card, Manual'],
    ],
  },

  'bilresa-blueprint': {
    title: 'IKEA BILRESA blueprint',
    repo: 'HA-Extras', dir: 'Blueprints',
    files: [
      ['ikea_bilresa_scroll_wheel_full.yaml', 'The blueprint: toggle, white, colour cycling and eased dimming for the three button groups.', 'Settings, Automations & scenes, Blueprints, Import'],
    ],
  },

  'nspanel-keep-alive': {
    title: 'NSPanel keep-alive',
    repo: 'HA-Extras', dir: 'nspanel-view-assist',
    files: [
      ['automation-nspanel-view-assist.yaml', 'Checks the foreground app over ADB and relaunches View Assist if it is not in front.', 'Settings, Automations & scenes'],
    ],
  },

  'hermes-webui-lxc': {
    title: 'Hermes WebUI LXC',
    repo: 'HA-Extras', dir: 'hermes-webui-lxc',
    files: [
      ['create-lxc.sh', 'Run on the Proxmox host. Creates the container, then runs install.sh inside it.', 'Proxmox host, as root'],
      ['install.sh', 'Installs Hermes WebUI and its systemd service. Also used to update.', 'Inside the container'],
    ],
  },

  'news-reader': {
    title: 'News Reader',
    repo: 'HA-Extras', dir: 'news-feed',
    files: [
      ['community/news-reader-card/news-reader-card.js', 'The custom card: channel tabs, headline list, story page and read-aloud.', '<config>/www/community/news-reader-card/', 'Card'],
      ['config/entities/sensors/news-banner-sensors.yaml', 'National headlines, sensor.news_headlines.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-world-sensor.yaml', 'World, sensor.rnz_world.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-political-sensor.yaml', 'Politics, sensor.rnz_politics.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-business-sensor.yaml', 'Business, sensor.rnz_business.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-sport-sensor.yaml', 'Sport, sensor.rnz_sport.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-pacific-sensor.yaml', 'Pacific, sensor.rnz_pacific.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-te-manu-korihi-sensor.yaml', 'Te Ao Māori, sensor.rnz_te_ao_maori.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/rnz-education-sensor.yaml', 'Education, sensor.rnz_education.', 'entities/sensors/', 'Feed sensors'],
      ['config/entities/sensors/metservice-warnings-sensor.yaml', 'MetService warnings, sensor.metservice_warnings.', 'entities/sensors/', 'Feed sensors'],
      ['pyscript/rnz_read_aloud.py', 'The pyscript service pyscript.rnz_read_aloud. Fetches the story and speaks it.', '<config>/pyscript/', 'Read-aloud (optional)'],
      ['config/entities/sensors/rnz-bulletin-audio-sensor.yaml', 'Finds the latest bulletin MP3, sensor.rnz_latest_bulletin.', 'entities/sensors/', 'Audio bulletin (optional)'],
      ['config/entities/sensors/rnz-bulletin-button-card.yaml', 'A play button for the latest bulletin.', 'Dashboard', 'Audio bulletin (optional)'],
      ['news-feed-banner.yaml', 'The older scrolling headline banner.', 'Dashboard', 'Older versions'],
      ['config/entities/sensors/rnz-read-aloud-button-card.yaml', 'A single read-aloud button. The card now has one per row.', 'Dashboard', 'Older versions'],
      ['rnz-read-aloud.yaml', 'Reference notes for the standalone read-aloud button.', 'Reference', 'Older versions'],
    ],
  },

  'ksh-style-buttons': {
    title: 'KSH Style Buttons',
    repo: 'HA-Extras', dir: 'ksh-style-buttons',
    files: [
      ['templates/ksh-style-buttons.yaml', 'The ksh_tap_beep template: haptic buzz, click and the tap action.', 'Top of the dashboard, button_card_templates', 'Start here'],
      ['example-dashboard.yaml', 'Every tile in one working 4-column grid.', 'A dashboard to try them out', 'Start here'],
      ['cards/ksh-intercom-card.js', 'The custom intercom card, with a config editor.', '<config>/www/ksh-intercom-card.js', 'Start here'],
      ['buttons/home.yaml', 'Navigate home.', 'A grid card', 'Navigation'],
      ['buttons/news.yaml', 'Go to the news view.', 'A grid card', 'Navigation'],
      ['buttons/shares.yaml', 'Go to the shares view.', 'A grid card', 'Navigation'],
      ['buttons/calendar.yaml', 'A live date tile drawn in CSS.', 'A grid card', 'Navigation'],
      ['buttons/light.yaml', 'Light, brightness-aware.', 'A grid card', 'Home'],
      ['buttons/climate.yaml', 'Climate, coloured by mode.', 'A grid card', 'Home'],
      ['buttons/vacuum.yaml', 'Vacuum: start, pause or locate.', 'A grid card', 'Home'],
      ['buttons/ambilight.yaml', 'Ambilight effects.', 'A grid card', 'Home'],
      ['buttons/tv.yaml', 'TV. Only shows when relevant.', 'A grid card', 'Home'],
      ['buttons/music.yaml', 'Music.', 'A grid card', 'Home'],
      ['buttons/alarm.yaml', 'Alarm.', 'A grid card', 'Home'],
      ['buttons/sofa.yaml', 'Sofa.', 'A grid card', 'Home'],
      ['buttons/washer.yaml', 'Washer. Only shows when relevant.', 'A grid card', 'Home'],
      ['buttons/dryer.yaml', 'Dryer. Only shows when relevant.', 'A grid card', 'Home'],
      ['buttons/byd.yaml', 'BYD car tile.', 'A grid card', 'Home'],
      ['buttons/intercom.yaml', 'Intercom call tile.', 'A grid card', 'Intercom'],
      ['buttons/intercom-picker.yaml', 'Pick who to call.', 'A grid card', 'Intercom'],
      ['buttons/intercom-card.yaml', 'Intercom as a button-card.', 'A grid card', 'Intercom'],
      ['buttons/intercom-hub.yaml', 'Intercom with no resource needed. The fallback for the custom card.', 'A grid card', 'Intercom'],
    ],
  },

  'rotary-thermostat': {
    title: 'Rotary thermostat',
    repo: 'Rotary-Display-Thermostat-ZX2D10GE01R-V484', dir: '',
    files: [
      ['nesp.yaml', 'The main ESPHome file: pins, display, rotary encoder, buttons and the Home Assistant entities.', 'Your ESPHome folder', 'ESPHome'],
      ['nesp/_neo-nesp_UI.yaml', 'The LVGL screens and the scripts that update them. Included by nesp.yaml.', 'Your ESPHome folder, keep the nesp/ path', 'ESPHome'],
      ['nesp/colors/homeassistant', 'The Home Assistant colour palette. Included by nesp.yaml.', 'Your ESPHome folder, keep the nesp/colors/ path', 'ESPHome'],
      ['nesp/fonts/materialdesignicons-webfont.ttf', 'Material Design Icons font for the icons on the screen.', 'fonts/ next to nesp.yaml', 'ESPHome'],
    ],
    local: [
      ['common.yaml', 'Starter for the file nesp.yaml expects: logger, API, OTA and Wi-Fi. Edit it.', 'Next to nesp.yaml', 'ESPHome'],
      ['secrets.yaml', 'Example secrets file. Replace the values.', 'Next to nesp.yaml', 'ESPHome'],
    ],
  },

  'rotary-clock': {
    title: 'Rotary clock, heat pump and light dimmer',
    repo: 'Rotary-Display-Clock-HeatPump-LightDimmer', dir: '',
    files: [
      ['clock-hp-ld.yaml', 'The ESPHome file. Still being developed.', 'Your ESPHome folder', 'ESPHome'],
      ['TODO.md', 'The to-do list for this project.', 'Reference', 'Reference'],
    ],
  },

  'berryblues-theme': {
    title: 'BerryBlues theme',
    repo: '', dir: '',
    files: [],
    local: [
      ['BerryBlues.yaml', 'The theme, rebuilt from my old notes. Check it before you rely on it.', 'config/themes/', 'Theme'],
    ],
  },
};
