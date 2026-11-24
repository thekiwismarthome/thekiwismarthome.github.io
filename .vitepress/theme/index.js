import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { withBase } from 'vitepress';
import HeroPhones from './HeroPhones.vue';
import ProjectCards from './ProjectCards.vue';
import Downloads from './Downloads.vue';
import DemoFrame from './DemoFrame.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    // Two live phones beside the headline on the home page: the real KSH Family Hub (and its kids screen), on sample data
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HeroPhones),
      // The full logo above the headline
      'home-hero-info-before': () => h('img', { class: 'kh-hero-logo', src: withBase('/kiwi-smart-home.png'), alt: 'The Kiwi Smart Home', width: 200, height: 200 }),
    });
  },
  enhanceApp({ app, router }) {
    // KSH Family Hub is a separate site published at this path by its own repository.
    // This site's router does not know their pages, so it would show "Page not found". Do a normal page load instead.
    if (typeof window !== 'undefined') {
      const other = /^\/ksh-family-hub(\/|$)/;
      router.onBeforeRouteChange = (to) => {
        const path = new URL(to, window.location.origin).pathname;
        if (other.test(path)) { window.location.assign(to); return false; }
      };
    }
    app.component('ProjectCards', ProjectCards);
    app.component('Downloads', Downloads);
    app.component('DemoFrame', DemoFrame);
  },
};
