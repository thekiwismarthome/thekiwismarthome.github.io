import { defineConfig } from 'vitepress';

const ORG = 'https://github.com/thekiwismarthome';

// This is the user site, served from the root of thekiwismarthome.github.io.
// KSH Family Hub has its own site under /ksh-family-hub/ (guides and a live demo), published by its own repository.
const BASE = process.env.SITE_BASE || '/';

export default defineConfig({
  title: 'The Kiwi Smart Home',
  description: 'Home Assistant integrations, cards, dashboards and how-tos from New Zealand. Free and open source.',
  lang: 'en-NZ',
  base: BASE,
  cleanUrls: true,
  lastUpdated: true,
  // The Family Hub site is built and published from its own repository
  ignoreDeadLinks: [/^\/ksh-family-hub\//],
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
        { text: 'Integration', items: [
          { text: 'KSH Family Hub', link: '/projects/ksh-family-hub' },
          { text: 'Family Hub guides and demo', link: '/ksh-family-hub/' },
        ] },
        { text: 'Cards and gadgets', items: [
          { text: 'Timers & alarms', link: '/projects/timers' },
          { text: 'Dashboard cards', link: '/projects/cards' },
          { text: 'Nocturne Card (live demo)', link: '/projects/nocturne-card' },
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
        { text: 'Integration', items: [
          { text: 'KSH Family Hub', link: '/projects/ksh-family-hub' },
        ] },
        { text: 'Cards and gadgets', items: [
          { text: 'Timers & alarms', link: '/projects/timers' },
          { text: 'Dashboard cards', link: '/projects/cards' },
          { text: 'Nocturne Card (live demo)', link: '/projects/nocturne-card' },
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
      // The guides and demo pages of the Family Hub site are built and published by its own repository,
      // so they do not exist in this build. In `npm run dev`, fetch them from the live site instead (the local sandbox copies still win).
      proxy: {
        '^/ksh-family-hub/(?!sandbox/).*': { target: 'https://thekiwismarthome.github.io', changeOrigin: true },
      },
    },
  },
});
