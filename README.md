# thekiwismarthome.github.io

The Kiwi Smart Home website: https://thekiwismarthome.github.io/

Built with [VitePress](https://vitepress.dev/), in the same style as the Recipe Manager and Shopping List Manager sites.

```bash
npm install
npm run dev      # copies the two project demos from sibling checkouts so the home page phones work
npm run build
```

- `projects/`, `extras/` and `notes/` are the three sections of the menu.
- `.vitepress/theme/projects.js` is the one list of projects used by the home page, the project index and each group page.
- Recipe Manager (`/Recipe-Manager/`) and Shopping List Manager (`/shopping-list-manager-card/`) are published by their own repositories to the same address.

## Downloads

Every file a page offers is listed once in `downloads.manifest.mjs`, with what it does and where it goes.

```bash
npm run sync            # copy the files from the sibling repositories (or GitHub) and rebuild the zips
npm run sync -- find-my-phone   # just one
```

This writes `public/downloads/<name>/` and `public/downloads/<name>.zip`. They are committed, so the site builds without the other repositories. Run `npm run sync` after changing a script in HA-Extras, then commit the result. Files that are not in a repository (the thermostat `common.yaml` and the BerryBlues theme) live in `downloads-src/`.

A page shows a download panel with `<Downloads slug="find-my-phone" />` and the code itself with `<<< @/public/downloads/find-my-phone/script-find-my-phone.yaml{yaml}`.

## The thermostat simulator

`public/demos/rotary-thermostat/index.html` is a single file with no dependencies. It is embedded in `projects/rotary-thermostat.md` with `<DemoFrame>`, and also works on its own.
