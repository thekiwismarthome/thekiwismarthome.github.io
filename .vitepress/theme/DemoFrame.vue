<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useData, withBase } from 'vitepress';

// <DemoFrame src="/demos/rotary-thermostat/" height="900" title="..." /> embeds a demo that lives on this site.
// It passes the current light or dark choice along, so the demo matches the page.
const props = defineProps({ src: { type: String, required: true }, height: { type: [String, Number], default: 900 }, title: { type: String, default: 'Demo' } });
const { isDark } = useData();
const h = ref(Number(props.height));
const onMsg = (e) => { if (e.data && e.data.type === 'kh-demo-height' && e.data.src === withBase(props.src)) h.value = Math.ceil(e.data.height) + 2; };
onMounted(() => addEventListener('message', onMsg));
onBeforeUnmount(() => removeEventListener('message', onMsg));
const url = computed(() => `${withBase(props.src)}?theme=${isDark.value ? 'dark' : 'light'}`);
</script>

<template>
  <div class="kh-demo">
    <iframe :src="url" :title="title" :style="{ height: h + 'px' }" loading="lazy" />
    <a class="kh-demo-open" :href="withBase(src)" target="_blank" rel="noopener">Open full screen</a>
  </div>
</template>

<style scoped>
.kh-demo { margin: 20px 0 28px; border: 1px solid var(--vp-c-divider); border-radius: 20px; overflow: hidden; background: var(--vp-c-bg); position: relative; }
iframe { display: block; width: 100%; border: 0; }
.kh-demo-open { position: absolute; right: 22px; top: 10px; font-size: 12.5px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 999px; padding: 3px 12px; text-decoration: none; }
</style>
