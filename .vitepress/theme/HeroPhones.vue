<script setup>
import { withBase } from 'vitepress';
// The KSH Family Hub site is published on this same address, so the real app can be shown here: the hub itself,
// and the kids screen. They are the same app that runs in Home Assistant, on sample data.
const hub = withBase('/ksh-family-hub/sandbox/app.html');
const kids = withBase('/ksh-family-hub/sandbox/app.html?kids=Mia&style=candy');
</script>

<template>
  <div class="duo">
    <a class="phone back" :href="withBase('/ksh-family-hub/demo')" aria-label="KSH Family Hub live demo">
      <div class="screen"><iframe :src="hub" loading="lazy" title="KSH Family Hub, running on sample data" tabindex="-1" /></div>
    </a>
    <a class="phone front" :href="withBase('/ksh-family-hub/guide/kids-screen')" aria-label="The KSH Family Hub kids screen">
      <div class="screen"><iframe :src="kids" loading="lazy" title="The kids screen, running on sample data" tabindex="-1" /></div>
    </a>
  </div>
</template>

<style scoped>
/* Each app is laid out as on a 390px phone, then scaled down to fit its frame */
.duo { --s: .636; position: relative; width: 100%; max-width: 470px; height: 560px; margin: 0 auto; }
.phone { --w: 262px; --h: 540px; position: absolute; width: var(--w); height: var(--h); border-radius: 38px; background: #0b0d0c; padding: 7px; box-shadow: 0 30px 60px -22px rgba(0,0,0,.5), 0 0 0 1.5px #2a2f2d inset; display: block; }
.back { left: 0; top: 0; transform: rotate(-3deg); }
.front { right: 0; top: 28px; transform: rotate(3deg); z-index: 1; }
.screen { width: 100%; height: 100%; border-radius: 31px; overflow: hidden; background: #000; position: relative; }
iframe { border: 0; display: block; width: 390px; height: calc(100% / var(--s)); transform: scale(var(--s)); transform-origin: 0 0; pointer-events: none; }
@media (max-width: 520px) { .duo { height: 470px; max-width: 360px; } .phone { --w: 214px; --h: 440px; border-radius: 32px; } .duo { --s: .513; } .screen { border-radius: 26px; } }
</style>
