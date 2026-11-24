// The home page shows the live KSH Family Hub demo, which is published by its own repository at /ksh-family-hub/ on this
// same address. For `npm run dev` this copies its built demo folder from the sibling checkout (run `npm run prepare-demo`
// in ../ksh-family-hub/site first) so the phones work offline. Nothing here is committed or deployed.
import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siblings = [
  ['../ksh-family-hub/site/public/sandbox', 'public/ksh-family-hub/sandbox'],
];
for (const [from, to] of siblings) {
  const src = resolve(root, from);
  const dest = resolve(root, to);
  if (!existsSync(src)) { console.log(`skip: ${from} not found (the phones will be blank locally)`); continue; }
  rmSync(dest, { recursive: true, force: true });
  cpSync(src, dest, { recursive: true });
  console.log(`demo ready: ${to}`);
}
