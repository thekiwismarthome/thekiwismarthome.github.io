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
  enhanceApp({ app }) {
    app.component('ProjectCards', ProjectCards);
    app.component('Downloads', Downloads);
    app.component('DemoFrame', DemoFrame);
  },
};
