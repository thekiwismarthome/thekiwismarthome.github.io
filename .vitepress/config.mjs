import { defineConfig } from 'vitepress';

const ORG = 'https://github.com/thekiwismarthome';

// This is the user site, served from the root of thekiwismarthome.github.io.
// Recipe Manager and Shopping List Manager have their own sites under /Recipe-Manager/ and /shopping-list-manager-card/.
const BASE = process.env.SITE_BASE || '/';

export default defineConfig({
  title: 'The Kiwi Smart Home',
  description: 'Home Assistant integrations, cards, dashboards and how-tos from New Zealand. Free and open source.',
  lang: 'en-NZ',
  base: BASE,
  cleanUrls: true,
  lastUpdated: true,
  // The two project sites below are built and published from their own repositories
  ignoreDeadLinks: [/^\/Recipe-Manager\//, /^\/shopping-list-manager-card\//],
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE}favicon-64.png` }],
    ['link', { rel: 'apple-touch-icon', href: `${BASE}logo.png` }],
    ['meta', { name: 'theme-color', content: '#0B6BC0' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'The Kiwi Smart Home',
    // Three places to go, and each opens a short, grouped list.
    nav: [
      { text: 'Projects', activeMatch: '^/projects/', items: [
        { text: 'Integrations', items: [
          { text: 'Recipe Manager', link: '/projects/recipe-manager' },
          { text: 'Shopping List Manager', link: '/projects/shopping-list-manager' },
        ] },
        { text: 'Cards and gadgets', items: [
          { text: 'Timers & alarms', link: '/projects/timers' },
          { text: 'Dashboard cards', link: '/projects/cards' },
          { text: 'Voice & displays', link: '/projects/voice-displays' },
          { text: 'Rotary thermostat (demo)', link: '/projects/rotary-thermostat' },
          { text: 'Homelab', link: '/projects/homelab' },
        ] },
        { text: 'Everything', items: [
          { text: 'All projects', link: '/projects/' },
        ] },
      ] },
      { text: 'HA Extras', activeMatch: '^/extras/', items: [
        { text: 'Dashboards', items: [
          { text: 'KSH Style Buttons', link: '/extras/ksh-style-buttons' },
          { text: 'News Reader', link: '/extras/news-reader' },
          { text: 'Shares banner', link: '/extras/shares-banner' },
        ] },
        { text: 'Automations', items: [
          { text: 'Stock Alerts', link: '/extras/stock-alerts' },
          { text: 'Find my phone', link: '/extras/find-my-phone' },
          { text: 'IKEA BILRESA blueprint', link: '/extras/blueprints' },
          { text: 'NSPanel keep-alive', link: '/extras/nspanel-view-assist' },
        ] },
        { text: 'Homelab', items: [
          { text: 'Hermes WebUI LXC', link: '/extras/hermes-webui-lxc' },
        ] },
        { text: 'Overview', items: [
          { text: 'All HA Extras', link: '/extras/' },
        ] },
      ] },
      { text: 'Notes', link: '/notes/', activeMatch: '^/notes/' },
    ],
    sidebar: {
      '/projects/': [
        { text: 'Projects', items: [{ text: 'All projects', link: '/projects/' }] },
        { text: 'Integrations', items: [
          { text: 'Recipe Manager', link: '/projects/recipe-manager' },
          { text: 'Shopping List Manager', link: '/projects/shopping-list-manager' },
        ] },
        { text: 'Cards and gadgets', items: [
          { text: 'Timers & alarms', link: '/projects/timers' },
          { text: 'Dashboard cards', link: '/projects/cards' },
          { text: 'Voice & displays', link: '/projects/voice-displays' },
          { text: 'Rotary thermostat (demo)', link: '/projects/rotary-thermostat' },
          { text: 'Homelab', link: '/projects/homelab' },
        ] },
      ],
      '/extras/': [
        { text: 'HA Extras', items: [{ text: 'Overview', link: '/extras/' }] },
        { text: 'Dashboards', items: [
          { text: 'KSH Style Buttons', link: '/extras/ksh-style-buttons' },
          { text: 'News Reader', link: '/extras/news-reader' },
          { text: 'Shares banner', link: '/extras/shares-banner' },
        ] },
        { text: 'Automations', items: [
          { text: 'Stock Alerts', link: '/extras/stock-alerts' },
          { text: 'Find my phone', link: '/extras/find-my-phone' },
          { text: 'IKEA BILRESA blueprint', link: '/extras/blueprints' },
          { text: 'NSPanel keep-alive', link: '/extras/nspanel-view-assist' },
        ] },
        { text: 'Homelab', items: [
          { text: 'Hermes WebUI LXC', link: '/extras/hermes-webui-lxc' },
        ] },
      ],
      '/notes/': [
        { text: 'Notes', items: [
          { text: 'All notes', link: '/notes/' },
          { text: 'Make your old home alarm smart', link: '/notes/old-alarm-smart' },
          { text: 'RPi voice assistant satellite', link: '/notes/rpi-voice-satellite' },
          { text: 'HA disk growing every day', link: '/notes/ha-disk-growing' },
          { text: 'Server: Intel NUC (archived)', link: '/notes/intel-nuc' },
          { text: 'BerryBlues theme', link: '/notes/berryblues-theme' },
        ] },
      ],
    },
    socialLinks: [{ icon: 'github', link: ORG }],
    search: { provider: 'local' },
    editLink: { pattern: `${ORG}/thekiwismarthome.github.io/edit/main/:path`, text: 'Edit this page on GitHub' },
    outline: { level: [2, 3], label: 'On this page' },
    footer: { message: 'Open source under the MIT licence. Made in New Zealand.', copyright: 'The Kiwi Smart Home' },
  },
  vite: {
    server: {
      fs: { allow: ['..'] },
      // The manuals and demo pages for the two project sites are built and published by their own repositories,
      // so they do not exist in this build. In `npm run dev`, fetch them from the live site instead (the local sandbox copies still win).
      proxy: {
        '^/(Recipe-Manager|shopping-list-manager-card)/(?!sandbox/).*': { target: 'https://thekiwismarthome.github.io', changeOrigin: true },
      },
    },
  },
});
