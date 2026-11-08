<script setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { PROJECTS, STATUS, repoUrl } from './projects.js';

// <ProjectCards group="timers" /> shows one group; with no group it shows them all.
const props = defineProps({ group: { type: String, default: '' }, ids: { type: Array, default: () => [] } });
const items = computed(() => PROJECTS.filter((p) => (props.group ? p.group === props.group : true) && (props.ids.length ? props.ids.includes(p.id) : true)));
const main = (p) => (p.site ? withBase(p.site) : p.page ? withBase(p.page) : repoUrl(p));
// A project with its own website links there; the repository link sits underneath
</script>

<template>
  <div class="kh-grid">
    <article v-for="p in items" :key="p.id" class="kh-card">
      <div class="kh-card-top">
        <span class="kh-kicker">{{ p.kicker }}</span>
        <span class="kh-badge" :data-status="p.status">{{ STATUS[p.status] }}</span>
      </div>
      <h3><a :href="main(p)">{{ p.name }}</a></h3>
      <p>{{ p.blurb }}</p>
      <div class="kh-tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
      <div class="kh-links">
        <a v-if="p.site" :href="withBase(p.site)">Website</a>
        <a v-if="p.page" :href="withBase(p.page)">Details</a>
        <a :href="repoUrl(p)">GitHub</a>
      </div>
    </article>
  </div>
</template>
