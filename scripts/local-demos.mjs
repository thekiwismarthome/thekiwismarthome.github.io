// The home page shows the live Recipe Manager and Shopping List Manager demos, which are published by their own repositories
// at /Recipe-Manager/ and /shopping-list-manager-card/ on this same address. For `npm run dev` this copies their built
// demo folders from the sibling checkouts so the phones work offline. Nothing here is committed or deployed.
import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siblings = [
  ['../Recipe-Manager/site/public/sandbox', 'public/Recipe-Manager/sandbox'],
  ['../shopping-list-manager-card/site/public/sandbox', 'public/shopping-list-manager-card/sandbox'],
];
for (const [from, to] of siblings) {
  const src = resolve(root, from);
  const dest = resolve(root, to);
  if (!existsSync(src)) { console.log(`skip: ${from} not found (the phones will be blank locally)`); continue; }
  rmSync(dest, { recursive: true, force: true });
  cpSync(src, dest, { recursive: true });
  console.log(`demo ready: ${to}`);
}
