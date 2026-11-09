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
    // Two live phones beside the headline on the home page: the real Recipe Manager and Shopping List Manager cards
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HeroPhones),
      // The full logo above the headline
      'home-hero-info-before': () => h('img', { class: 'kh-hero-logo', src: withBase('/kiwi-smart-home.png'), alt: 'The Kiwi Smart Home', width: 200, height: 200 }),
    });
  },
  enhanceApp({ app, router }) {
    // Recipe Manager and Shopping List Manager are separate sites published at these paths by their own repositories.
    // This site's router does not know their pages, so it would show "Page not found". Do a normal page load instead.
    if (typeof window !== 'undefined') {
      const other = /^\/(Recipe-Manager|shopping-list-manager-card)(\/|$)/;
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
