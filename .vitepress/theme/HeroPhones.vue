<script setup>
import { withBase } from 'vitepress';
// Both project sites are published on this same address, so the real demos can be shown here.
// They are the same cards that run in Home Assistant, on sample data.
const rm = withBase('/Recipe-Manager/sandbox/app.html?ui=fresh&theme=sunset&mode=light&view=grid&recipe=1');
const slm = withBase('/shopping-list-manager-card/sandbox/app.html?ui=fresh&theme=meadow&mode=light&tab=shopping&view=list');
</script>

<template>
  <div class="duo">
    <a class="phone back" :href="withBase('/Recipe-Manager/')" aria-label="Recipe Manager website">
      <div class="screen"><iframe :src="rm" loading="lazy" title="Recipe Manager card, running on sample data" tabindex="-1" /></div>
    </a>
    <a class="phone front" :href="withBase('/shopping-list-manager-card/')" aria-label="Shopping List Manager website">
      <div class="screen"><iframe :src="slm" loading="lazy" title="Shopping List Manager card, running on sample data" tabindex="-1" /></div>
    </a>
  </div>
</template>

<style scoped>
/* Each card is laid out as on a 390px phone, then scaled down to fit its frame */
.duo { --s: .636; position: relative; width: 100%; max-width: 470px; height: 560px; margin: 0 auto; }
.phone { --w: 262px; --h: 540px; position: absolute; width: var(--w); height: var(--h); border-radius: 38px; background: #0b0d0c; padding: 7px; box-shadow: 0 30px 60px -22px rgba(0,0,0,.5), 0 0 0 1.5px #2a2f2d inset; display: block; }
.back { left: 0; top: 0; transform: rotate(-3deg); }
.front { right: 0; top: 28px; transform: rotate(3deg); z-index: 1; }
.screen { width: 100%; height: 100%; border-radius: 31px; overflow: hidden; background: #000; position: relative; }
iframe { border: 0; display: block; width: 390px; height: calc(100% / var(--s)); transform: scale(var(--s)); transform-origin: 0 0; pointer-events: none; }
@media (max-width: 520px) { .duo { height: 470px; max-width: 360px; } .phone { --w: 214px; --h: 440px; border-radius: 32px; } .duo { --s: .513; } .screen { border-radius: 26px; } }
</style>
