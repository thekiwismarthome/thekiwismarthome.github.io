// Copies every file listed in downloads.manifest.mjs into public/downloads/<slug>/ and builds one zip per slug.
// Sources: a sibling checkout next to this repository if there is one, otherwise the public GitHub repository.
// The zips are deterministic, so running this twice changes nothing. Commit the result.
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, statSync } from 'node:fs';
import { dirname, resolve, posix, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { zipSync } from 'fflate';
import { DOWNLOADS } from '../downloads.manifest.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/downloads');
const ORG = 'thekiwismarthome';
const only = process.argv.slice(2);
const index = {};
let failed = 0;

async function read(repo, path) {
  const local = resolve(root, '..', repo, path);
  if (existsSync(local)) return { data: new Uint8Array(readFileSync(local)), from: 'sibling checkout' };
  const url = `https://raw.githubusercontent.com/${ORG}/${repo}/main/${path.split('/').map(encodeURIComponent).join('/')}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return { data: new Uint8Array(await res.arrayBuffer()), from: 'GitHub' };
}

for (const [slug, d] of Object.entries(DOWNLOADS)) {
  if (only.length && !only.includes(slug)) { continue; }
  const dest = resolve(out, slug);
  rmSync(dest, { recursive: true, force: true });
  const zipFiles = {};
  const entry = { title: d.title, repo: d.repo, dir: d.dir, files: [] };

  const add = (rel, what, where, group, data, source, repoPath) => {
    const file = resolve(dest, rel);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, data);
    zipFiles[`${slug}/${rel}`] = [data, { mtime: new Date('2024-01-01T00:00:00Z'), level: 9 }];
    entry.files.push({ path: rel, name: basename(rel), what, where, group: group || '', size: data.length, repoPath, source });
  };

  for (const [rel, what, where, group] of d.files) {
    const repoPath = posix.join(d.dir, rel);
    try {
      const { data, from } = await read(d.repo, repoPath);
      add(rel, what, where, group, data, from, repoPath);
    } catch (e) { failed++; console.error(`MISSING ${slug}: ${repoPath} (${e.message})`); }
  }
  for (const [rel, what, where, group] of d.local || []) {
    const data = new Uint8Array(readFileSync(resolve(root, 'downloads-src', slug, rel)));
    add(rel, what, where, group, data, 'this site', null);
  }

  const zip = zipSync(zipFiles);
  mkdirSync(out, { recursive: true });
  writeFileSync(resolve(out, `${slug}.zip`), zip);
  entry.zip = { name: `${slug}.zip`, size: zip.length };
  index[slug] = entry;
  console.log(`${slug.padEnd(20)} ${String(entry.files.length).padStart(2)} files  ${(zip.length / 1024).toFixed(0).padStart(5)} KB zip`);
}

const dataFile = resolve(root, '.vitepress/data/downloads.json');
const merged = only.length && existsSync(dataFile) ? { ...JSON.parse(readFileSync(dataFile, 'utf8')), ...index } : index;
mkdirSync(dirname(dataFile), { recursive: true });
writeFileSync(dataFile, JSON.stringify(merged, null, 1) + '\n');
if (failed) { console.error(`${failed} file(s) could not be copied.`); process.exit(1); }
