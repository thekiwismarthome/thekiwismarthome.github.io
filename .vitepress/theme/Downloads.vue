<script setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import data from '../data/downloads.json';

// <Downloads slug="find-my-phone" /> lists the files for one project, with a button for the zip.
// The list comes from downloads.manifest.mjs, through `npm run sync`.
const props = defineProps({ slug: { type: String, required: true }, title: { type: String, default: '' } });
const d = computed(() => data[props.slug]);
const url = (rel) => withBase(`/downloads/${props.slug}/${rel}`);
const zip = computed(() => withBase(`/downloads/${d.value.zip.name}`));
const kb = (n) => (n < 1024 ? `${n} B` : n < 1024 * 1024 ? `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB` : `${(n / 1024 / 1024).toFixed(1)} MB`);
const github = (f) => (f.repoPath ? `https://github.com/thekiwismarthome/${d.value.repo}/blob/main/${f.repoPath}` : '');
const groups = computed(() => {
  const map = new Map();
  for (const f of d.value.files) { const g = f.group || ''; if (!map.has(g)) map.set(g, []); map.get(g).push(f); }
  return [...map].map(([name, files]) => ({ name, files }));
});
</script>

<template>
  <section v-if="d" class="kh-dl">
    <header class="kh-dl-head">
      <div>
        <b>{{ title || 'Download' }}</b>
        <span>{{ d.files.length }} {{ d.files.length === 1 ? 'file' : 'files' }}. Each one is plain text you can open in any editor.</span>
      </div>
      <a class="kh-dl-zip" :href="zip" download>Download all <small>.zip, {{ kb(d.zip.size) }}</small></a>
    </header>
    <div v-for="g in groups" :key="g.name" class="kh-dl-group">
      <h4 v-if="g.name">{{ g.name }}</h4>
      <ul>
        <li v-for="f in g.files" :key="f.path">
          <div class="kh-dl-main">
            <a class="kh-dl-name" :href="url(f.path)" download>{{ f.name }}</a>
            <span class="kh-dl-what">{{ f.what }}</span>
            <span class="kh-dl-where">Goes in: {{ f.where }}</span>
          </div>
          <div class="kh-dl-side">
            <span class="kh-dl-size">{{ kb(f.size) }}</span>
            <a :href="url(f.path)" download class="kh-dl-btn">Download</a>
            <a v-if="github(f)" :href="github(f)" class="kh-dl-gh" target="_blank" rel="noopener">GitHub</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <p v-else class="kh-dl-missing">Downloads for "{{ slug }}" are not built yet. Run <code>npm run sync</code>.</p>
</template>
