/* nocturne-card 2026.11.5 | https://github.com/thekiwismarthome/nocturne-card | MIT */
(() => {
'use strict';
/* ============================================================
   Nocturne Card: one Home Assistant card for every Nocturne tile.
   Pick a kind (light, climate, media, weather ...), pick an entity of that
   kind, set the options. Styled by the nocturne_glass themes, and still
   looks fine on any other theme.
   ============================================================ */
const VERSION = "2026.11.5";
const CSS = ".sl { display: block; width: 100%; height: 22px; margin: 0; appearance: none; background: none; cursor: pointer; --p: 50%; --fc: var(--accent-color); } .sl::-webkit-slider-runnable-track { height: 8px; border-radius: 99px; background: linear-gradient(90deg, var(--primary-color) 0, var(--fc) var(--p), var(--n-well) var(--p)); box-shadow: var(--n-inset); } .sl::-moz-range-track { height: 8px; border-radius: 99px; background: var(--n-well); box-shadow: var(--n-inset); } .sl::-moz-range-progress { height: 8px; border-radius: 99px; background: var(--fc); } .sl::-webkit-slider-thumb { appearance: none; width: 12px; height: 12px; margin-top: -2px; border-radius: 50%; background: var(--n-c2); border: 3px solid var(--fc); box-shadow: 0 0 12px var(--n-glow); box-sizing: content-box; } .sl::-moz-range-thumb { width: 6px; height: 6px; border-radius: 50%; background: var(--n-c2); border: 3px solid var(--fc); } .sl:disabled { opacity: .35; } .bc, .nc { position: relative; border-radius: 28px; color: var(--primary-text-color); font-family: var(--ha-font-family-body); background: var(--n-card-bg); box-shadow: var(--n-card-shadow); -webkit-backdrop-filter: var(--n-blur); backdrop-filter: var(--n-blur); text-align: left; } .bc::before, .nc::before { content: \"\"; position: absolute; inset: 0; border-radius: inherit; background: var(--n-sheen); pointer-events: none; z-index: 1; } .bc { width: 166px; padding: 18px; box-sizing: border-box; overflow: visible; } .bc.w { width: 338px; } .bc > .grid { position: relative; z-index: 2; display: grid; height: 100%; } .bc .imglayer, .nc .imglayer { position: absolute; inset: 0; border-radius: inherit; background-repeat: no-repeat; pointer-events: none; z-index: 0; overflow: hidden; } .bc .imglayer.fade::after, .nc .imglayer.fade::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,12,28,.1), rgba(10,12,28,.78)); } .bc .imgcell { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; justify-self: start; background: var(--n-raised); box-shadow: var(--n-shadow-md); cursor: pointer; } .bc .well { background: var(--n-well); border-radius: 99px; box-shadow: var(--n-inset); } .bc .pill { font-size: 10.5px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 5px 10px; border-radius: 99px; background: var(--n-well); box-shadow: var(--n-inset); gap: 0; } .bc .bar { height: 8px; border-radius: 99px; background: var(--n-well); box-shadow: var(--n-inset); overflow: hidden; } .bc .bar i { display: block; height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--primary-color), var(--accent-color)); } .bc .f-ctl .well { min-height: 34px; box-sizing: border-box; display: flex; align-items: center; } .bc .row { display: flex; align-items: center; gap: 10px; font-size: 11.5px; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; } .bc .row .bar { flex: 1; } .bc .big { font-family: var(--n-font-display); font-size: 24px; font-weight: 400; letter-spacing: -.02em; line-height: 1; } .nctog { position: relative; width: 54px; height: 30px; border-radius: 99px; background: var(--n-well); box-shadow: var(--n-inset); cursor: pointer; flex: none; } .nctog i { position: absolute; top: 4px; left: 4px; width: 22px; height: 22px; border-radius: 50%; transition: transform .3s cubic-bezier(.4,1.4,.5,1), background .3s, box-shadow .3s; background: radial-gradient(circle at 35% 30%, var(--n-knob), var(--n-c2) 90%); box-shadow: 2px 2px 5px var(--n-lo); } .nctog.on i { transform: translateX(24px); background: radial-gradient(circle at 35% 30%, #fff, var(--tog-a, var(--accent-color)) 35%, var(--tog-p, var(--primary-color)) 85%); box-shadow: 0 0 14px var(--tog-g, var(--n-glow)), 0 0 2px var(--tog-a, var(--accent-color)); } .ncround { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; border: 0; padding: 0; background: var(--n-raised); box-shadow: var(--n-shadow-sm); color: var(--secondary-text-color); cursor: pointer; flex: none; } .ncround ha-icon { --mdc-icon-size: 19px; } .ncpill { display: flex; align-items: center; justify-content: center; gap: 4px; border: 0; padding: 9px 2px; border-radius: 99px; background: var(--n-raised); box-shadow: var(--n-shadow-sm); color: var(--secondary-text-color); font: 700 11.5px var(--ha-font-family-body); cursor: pointer; } .ncpill ha-icon { --mdc-icon-size: 14px; } .ncpill.pri { background: linear-gradient(145deg, #8f7bff, #5f8cff); color: #fff; box-shadow: 0 0 14px var(--n-glow), var(--n-shadow-sm); } .ncchip { display: grid; justify-items: center; gap: 5px; font-size: 10.5px; color: var(--secondary-text-color); text-align: center; background: none; border: 0; padding: 0; } .ncchip .c { width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; background: var(--n-raised); box-shadow: var(--n-shadow-sm); } .ncchip ha-icon { --mdc-icon-size: 17px; } .ncscene { display: grid; justify-items: center; gap: 7px; font-size: 11.5px; font-weight: 600; color: var(--secondary-text-color); background: none; border: 0; padding: 0; cursor: pointer; } .ncscene .c { width: 100%; max-width: 62px; aspect-ratio: 1; border-radius: 20px; display: grid; place-items: center; background: var(--n-raised); box-shadow: var(--n-shadow-md); } .ncscene ha-icon { --mdc-icon-size: 22px; } .ncscene.fired .c { box-shadow: var(--n-inset-lg); color: var(--accent-color); filter: drop-shadow(0 0 7px var(--n-glow)); } .ncgrid { display: grid; gap: 8px; } .ncmslider { position: relative; height: 22px; } .ncmslider input { position: absolute; inset: 0; width: 100%; margin: 0; } .ncm { position: relative; display: block; width: 48px; outline: none; -webkit-tap-highlight-color: transparent; } .ncm-menu { position: absolute; left: -4px; top: 58px; z-index: 30; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px; border-radius: 28px; background: linear-gradient(160deg, rgba(255,255,255,.16), rgba(255,255,255,.04)); background-color: color-mix(in srgb, var(--card-background-color, #1c1c24) 90%, transparent); -webkit-backdrop-filter: blur(18px) saturate(170%); backdrop-filter: blur(18px) saturate(170%); box-shadow: inset 0 1px 1px rgba(255,255,255,.4), inset 0 0 0 1px rgba(255,255,255,.12), 0 14px 30px rgba(0,0,0,.4); opacity: 0; visibility: hidden; transform: translateY(-8px) scale(.94); transform-origin: 28px 0; transition: opacity .2s, transform .25s cubic-bezier(.3,1.4,.5,1), visibility .2s; } .ncm:focus-within .ncm-menu { opacity: 1; visibility: visible; transform: none; } .ncm-i { all: unset; box-sizing: border-box; width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; cursor: pointer; transition: background .2s, transform .15s; } .ncm-i:hover { background: rgba(255,255,255,.14); } .ncm-i:active { transform: scale(.92); } .ncm-i.sel { background: linear-gradient(145deg, var(--accent-color), var(--primary-color)); box-shadow: 0 0 14px var(--n-glow); } @keyframes ncspin { to { transform: rotate(360deg); } } @keyframes ncrise { 0% { transform: translateY(0) scale(.6); opacity: 0; } 15% { opacity: .9; } 100% { transform: translateY(-120px) scale(1.1); opacity: 0; } } @keyframes ncfall { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: .85; } 100% { transform: translateY(120px) translateX(10px); opacity: 0; } } @keyframes ncbreathe { 0%, 100% { opacity: .2; transform: scale(1); } 50% { opacity: .42; transform: scale(1.08); } } @keyframes ncpulse { 0%, 100% { box-shadow: var(--n-card-shadow), 0 0 0 0 rgba(255,90,100,0); } 50% { box-shadow: var(--n-card-shadow), 0 0 38px 4px rgba(255,90,100,.55); } } @keyframes ncdraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } } @keyframes ncpop { 0% { transform: translate(-50%,-50%) scale(.88); opacity: .4; } 100% { transform: translate(-50%,-50%) scale(1); opacity: 1; } } @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } } .nc { width: 166px; height: 183px; padding: 14px; box-sizing: border-box; } .nc.wide { width: 338px; } .nc.tall { height: auto; } .nc > .in { position: relative; z-index: 2; height: 100%; } .nc.on.lit { background: linear-gradient(160deg, color-mix(in srgb, var(--lc) calc(var(--lv, 80%) * .4), rgba(255,255,255,.12)), rgba(255,255,255,.04)); } .tile .in { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; grid-template-areas: \"ic . tg\" \"nm nm nm\" \"sl sl sl\"; grid-template-rows: auto 1fr auto; row-gap: 4px; } .tile.wide .in { grid-template-areas: \"ic nm tg\" \"ic sl tg\"; grid-template-rows: auto auto; align-content: center; column-gap: 14px; } .tile .ic { grid-area: ic; } .tile .tgw { grid-area: tg; justify-self: end; align-self: start; } .tile .nm { grid-area: nm; align-self: end; min-width: 0; } .tile .slw { grid-area: sl; align-self: end; } .tile.wide .tgw { align-self: center; } .tile.wide .slw { align-self: start; } .ic { width: 46px; height: 46px; border-radius: 50%; border: 0; display: grid; place-items: center; background: var(--n-raised); box-shadow: var(--n-shadow-md); color: var(--secondary-text-color); padding: 0; cursor: pointer; } .ic ha-icon { --mdc-icon-size: 22px; } .on .ic.lit { background: linear-gradient(160deg, var(--lc), color-mix(in srgb, var(--lc) 60%, #ff7a2a)); color: #2e1806; box-shadow: 0 0 calc(var(--lv, 80%) * .3) color-mix(in srgb, var(--lc) 70%, transparent), var(--n-shadow-sm); } .nm b { display: block; font-family: var(--ha-font-family-body, Manrope, system-ui, sans-serif); font-weight: 600; font-size: 14px; line-height: 1.25; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .nm span { display: block; font-size: 12px; color: var(--secondary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .nc { --lc: var(--n-warm); } .water { --lc: var(--n-water); } .air { --lc: var(--n-air); } .accent { --lc: var(--primary-color); } .warm { --lc: var(--n-warm); } .good { --lc: var(--n-ok); } .nc .nctog { --tog-a: var(--lc); --tog-g: var(--lc); --tog-p: color-mix(in srgb, var(--lc) 70%, #000); } .spin .ic ha-icon { animation: ncspin var(--spd, 1.2s) linear infinite; } .sens .in { display: grid; grid-template-rows: auto 1fr auto; align-content: space-between; } .sens .top { display: flex; align-items: center; gap: 12px; } .sens .nm { align-self: end; } .sens .bot { display: grid; gap: 7px; } .big { font: 400 32px/1 var(--n-font-display); letter-spacing: -.02em; } .big small { font-size: 13px; color: var(--secondary-text-color); margin-left: 2px; } .chip { display: inline-flex; align-items: center; font: 700 10px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: .12em; text-transform: uppercase; color: var(--secondary-text-color); padding: 5px 10px; border-radius: 999px; background: var(--n-well); box-shadow: var(--n-inset); } .btn { display: inline-flex; align-items: center; justify-content: center; gap: 5px; border: 0; border-radius: 999px; padding: 7px 13px; font: 600 12px var(--ha-font-family-body, Manrope, system-ui, sans-serif); background: var(--n-raised); box-shadow: var(--n-shadow-sm); color: var(--primary-text-color); } .btn[aria-pressed=true] { background: linear-gradient(145deg, #8f7bff, #5f8cff); color: #fff; } .cam { padding: 0; overflow: hidden; } .cam .view { position: absolute; inset: 0; background: radial-gradient(60% 50% at 70% 30%, rgba(255,193,90,.35), transparent 70%), linear-gradient(180deg, #1a2342, #0b1020 60%, #1b2a2a); } .cam .view::before { content: \"\"; position: absolute; left: 0; right: 0; bottom: 0; height: 42%; background: linear-gradient(180deg, #24303a, #10161c); clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%); } .cam .view::after { content: \"\"; position: absolute; left: 18%; bottom: 22%; width: 38%; height: 26%; border-radius: 10px 30px 8px 8px; background: #2a3550; box-shadow: 0 6px 12px rgba(0,0,0,.5); } .cam .lab { position: absolute; z-index: 2; left: 0; right: 0; bottom: 0; padding: 10px 14px; background: linear-gradient(180deg, transparent, rgba(0,0,0,.6)); font: 600 14px var(--ha-font-family-body, Manrope, system-ui, sans-serif); } .cam .live { position: absolute; z-index: 2; top: 12px; right: 12px; display: inline-flex; align-items: center; gap: 6px; font: 700 10px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: .12em; padding: 4px 9px; border-radius: 99px; background: rgba(0,0,0,.45); } .cam .live i { width: 7px; height: 7px; border-radius: 50%; background: var(--n-bad); box-shadow: 0 0 8px var(--n-bad); } .avs { display: flex; gap: 6px; align-items: flex-start; } .av { display: grid; justify-items: center; gap: 4px; font-size: 10.5px; color: var(--secondary-text-color); } .av i { width: 46px; height: 46px; border-radius: 50%; display: grid; place-items: center; font: 600 15px var(--n-font-display); font-style: normal; background: linear-gradient(160deg, #6d5cf0, #2b8fb8); box-shadow: 0 0 0 2.5px rgba(255,255,255,.12); } .av.home i { box-shadow: 0 0 0 2.5px var(--accent-color), 0 0 12px rgba(159,244,255,.4); } .av.away i { filter: grayscale(.7) brightness(.7); } .pc { --acc: var(--accent-color); } .pc .in { display: flex; flex-direction: column; justify-content: space-between; gap: 6px; } .pav { position: relative; width: var(--a); height: var(--a); flex: none; } .pav svg.ring { position: absolute; inset: 0; width: 100%; height: 100%; transform: rotate(-90deg); overflow: visible; } .pav .face { position: absolute; inset: 7px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(160deg, var(--p1), var(--p2)); color: #fff; font: 600 calc(var(--a) * .3) var(--n-font-display); letter-spacing: -.01em; box-shadow: var(--n-shadow-sm); overflow: hidden; } .pav .face ha-icon { --mdc-icon-size: calc(var(--a) * .5); } .pc.away .pav .face, .pc.unk .pav .face { filter: grayscale(.75) brightness(.78); } .pav .dot { position: absolute; right: 1px; bottom: 1px; width: 17px; height: 17px; border-radius: 50%; border: 3px solid #1b1e3c; background: var(--n-ok); box-sizing: border-box; box-shadow: 0 0 8px color-mix(in srgb, var(--n-ok) 60%, transparent); } .pc.away .pav .dot { background: #8b8fa8; box-shadow: none; } .pc.unk .pav .dot { background: var(--n-warn); box-shadow: none; } .pc .pn { display: block; font: 600 16px/1.2 var(--ha-font-family-body, Manrope, system-ui, sans-serif); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .pc .ps { display: block; font-size: 12.5px; color: var(--secondary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 2px; } .pc .ps b { font-weight: 600; color: var(--acc); } .pc.away .ps b { color: var(--primary-text-color); } .pc.unk .ps b { color: var(--n-warn); } .pchip { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px 5px 8px; border-radius: 99px; background: var(--n-well); box-shadow: var(--n-inset); font: 700 11.5px var(--ha-font-family-body, Manrope, system-ui, sans-serif); color: var(--secondary-text-color); white-space: nowrap; } .pchip ha-icon { --mdc-icon-size: 15px; } .pchip.low { color: var(--n-bad); } .pchip.chg { color: var(--n-ok); } .pc .chips { display: flex; flex-wrap: wrap; gap: 6px; } .pc .prow { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; } .pc.side .in { flex-direction: row; align-items: center; gap: 16px; justify-content: flex-start; } .pc.side .info { display: flex; flex-direction: column; gap: 10px; min-width: 0; flex: 1; } .pc.photo .face-bg { position: absolute; inset: 0; border-radius: inherit; z-index: 0; background: radial-gradient(70% 55% at 50% 30%, color-mix(in srgb, var(--p2) 60%, transparent), transparent 75%), linear-gradient(160deg, var(--p1), var(--p2)); display: grid; place-items: center; color: rgba(255,255,255,.28); } .pc.photo.away .face-bg, .pc.photo.unk .face-bg { filter: grayscale(.8) brightness(.7); } .pc.photo .face-bg ha-icon { --mdc-icon-size: 128px; margin-top: -18px; } .pc.photo .face-bg::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,12,28,.05) 30%, rgba(10,12,28,.8)); } .pc.photo .pn, .pc.photo .ps { text-shadow: 0 1px 6px rgba(0,0,0,.5); } .pc.photo .ps { color: rgba(255,255,255,.82); } .pstat { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px 4px 8px; border-radius: 99px; background: rgba(0,0,0,.38); font: 700 11px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: .02em; } .pstat i { width: 8px; height: 8px; border-radius: 50%; background: var(--n-ok); box-shadow: 0 0 6px var(--n-ok); } .pc.away .pstat i { background: #aab; box-shadow: none; } .pc.unk .pstat i { background: var(--n-warn); box-shadow: none; } .rangeline { display: flex; align-items: center; gap: 8px; } :host { display: block; height: 100%; --n-raised: var(--nc-raised, linear-gradient(160deg, rgba(255,255,255,.20), rgba(255,255,255,.05))); --n-shadow-sm: var(--nc-shadow-sm, inset 0 1px 1px rgba(255,255,255,.5), inset 0 0 0 1px rgba(255,255,255,.14), 0 4px 12px rgba(0,0,0,.25)); --n-shadow-md: var(--nc-shadow-md, inset 0 1px 1px rgba(255,255,255,.55), inset 0 0 0 1px rgba(255,255,255,.16), 0 8px 20px rgba(0,0,0,.28)); --n-shadow-lg: var(--nc-shadow-lg, inset 0 2px 2px rgba(255,255,255,.5), inset 0 0 0 1px rgba(255,255,255,.16), inset 0 -18px 40px rgba(255,255,255,.05), 0 18px 40px rgba(0,0,0,.38)); --n-inset: var(--nc-inset, inset 0 1px 3px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.08)); --n-inset-lg: var(--nc-inset-lg, inset 0 2px 8px rgba(0,0,0,.42), inset 0 0 0 1px rgba(255,255,255,.12)); --n-well: var(--nc-well, rgba(0,0,0,.24)); --n-knob: var(--nc-knob, rgba(255,255,255,.75)); --n-dim: var(--nc-dim, rgba(240,242,255,.32)); --n-blur: var(--nc-blur, blur(24px) saturate(180%)); --n-sheen: var(--nc-sheen, radial-gradient(120% 70% at 15% -10%, rgba(255,255,255,.16), transparent 55%)); --n-ok: var(--nc-ok, #7cf3c4); --n-warn: var(--nc-warn, #f2c46b); --n-bad: var(--nc-bad, #ff7a85); --n-c1: var(--nc-c1, rgba(255,255,255,.16)); --n-c2: var(--nc-c2, rgba(18,20,34,.55)); --n-glow: var(--nc-glow, rgba(124,108,255,.65)); --n-on-accent: var(--nc-on-accent, #0d0a2e); --n-lo: var(--nc-lo, rgba(0,0,0,.4)); --n-font-display: var(--nc-font-display, Sora, Manrope, system-ui, sans-serif); --n-water: #6ec8ff; --n-air: #8fe6ff; --n-warm: #ffc15a; --n-card-bg: var(--ha-card-background, var(--card-background-color, #1c1c24)); --n-card-shadow: var(--ha-card-box-shadow, 0 2px 10px rgba(0,0,0,.25)); } *, *::before, *::after { box-sizing: border-box; } .nc, .bc { width: 100%; height: 100%; min-height: calc(var(--rows, 3) * 64px - 8px); } .nc.wide, .bc.w { width: 100%; } .nc.cam { min-height: 0; } .nctog { --tog-a: var(--lc, var(--accent-color)); } .nc .sl, .bc .sl { --fc: var(--lc, var(--accent-color)); } .bc .imgcell { cursor: pointer; } .ncchip { cursor: pointer; font-family: inherit; } .btn { cursor: pointer; font-family: inherit; } button { font-family: inherit; } ha-icon { display: inline-flex; } .ncchip { min-width: 0; max-width: 100%; } .ncchip .cl { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .cam .view { background: linear-gradient(160deg, #1a2342, #0b1020); } .cam .view::before, .cam .view::after { display: none; } .bc .imgcell { overflow: hidden; } .lc { --c: 255,170,60; --glow: rgba(255,170,60,.4); --p: .7; position: relative; width: 100%; height: 100%; min-height: calc(var(--rows, 7) * 64px - 8px); padding: 18px; display: grid; gap: 18px; align-content: start; border-radius: 28px; background: var(--n-card-bg); box-shadow: var(--n-card-shadow); backdrop-filter: var(--n-blur); -webkit-backdrop-filter: var(--n-blur); overflow: hidden; color: var(--primary-text-color); font-family: var(--ha-font-family-body, Manrope, system-ui, sans-serif); text-align: left; } .lc::before { content: \"\"; position: absolute; inset: 0; background: radial-gradient(85% 62% at 50% 40%, var(--glow), transparent 72%); opacity: 0; transition: opacity .4s; pointer-events: none; } .lc.on::before { opacity: 1; } .lc > * { position: relative; min-width: 0; } .lc > .imglayer { position: absolute; } .lc.wide { grid-template-columns: auto 1fr; grid-template-areas: \"wheel hd\" \"wheel ctl\"; gap: 18px 28px; align-items: start; } .lc.wide .hd { grid-area: hd; } .lc.wide .wheel { grid-area: wheel; } .lc.wide .ctl { grid-area: ctl; align-self: end; } @media (max-width: 520px) { .lc.wide { grid-template-columns: 1fr; grid-template-areas: \"hd\" \"wheel\" \"ctl\"; } } .lc .hd { display: flex; align-items: center; gap: 12px; } .lc .hd .t { flex: 1; min-width: 0; } .lc .nm { font-weight: 600; font-size: 16px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .lc .st { color: var(--secondary-text-color); font-size: 13px; display: block; font-variant-numeric: tabular-nums; } .lc .disc { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; background: var(--n-well); box-shadow: var(--n-inset); color: var(--n-dim); transition: all .3s; flex: none; cursor: pointer; } .lc.on .disc { background: var(--n-raised); box-shadow: var(--n-shadow-sm), 0 0 22px rgba(var(--c), .6); color: rgb(var(--c)); } .lc .nctog { --tog-a: rgb(var(--c)); --tog-g: rgba(var(--c), .6); --tog-p: rgb(var(--c)); } .lc .wheel { justify-self: center; position: relative; width: var(--w, 232px); height: var(--w, 232px); border-radius: 50%; padding: 12px; background: var(--n-raised); box-shadow: var(--n-shadow-sm), 0 14px 30px rgba(0,0,0,.3); } .lc .pad { position: relative; width: 100%; height: 100%; border-radius: 50%; touch-action: none; cursor: crosshair; outline-offset: 6px; } .lc .pad canvas { display: block; width: 100%; height: 100%; border-radius: 50%; transition: filter .4s; } .lc:not(.on) .pad canvas { filter: saturate(.15) brightness(.45); } .lc .pad::after { content: \"\"; position: absolute; inset: 0; border-radius: 50%; box-shadow: inset 0 3px 10px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.14); pointer-events: none; } .lc .thumb { position: absolute; z-index: 1; width: 32px; height: 32px; margin: -16px 0 0 -16px; border-radius: 50%; background: rgb(var(--c)); border: 3px solid #fff; box-shadow: 0 3px 10px rgba(0,0,0,.5), 0 0 20px rgba(var(--c), .85); pointer-events: none; } .lc:not(.on) .thumb { opacity: .5; } .lc .ctl { display: grid; gap: 12px; } .lc .br { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; color: var(--secondary-text-color); } .lc .chips { display: flex; flex-wrap: wrap; gap: 8px; } .lc .chip { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; background: var(--n-well); box-shadow: var(--n-inset); font: 600 12.5px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: 0; text-transform: none; color: var(--secondary-text-color); } .lc .chip i { width: 12px; height: 12px; border-radius: 50%; background: rgb(var(--c)); box-shadow: 0 0 8px rgba(var(--c), .8); } .nc.sx { background: none; box-shadow: none; -webkit-backdrop-filter: none; backdrop-filter: none; padding: 0; overflow: visible; --b: calc(100% - 20px); --s: 1; --sw: calc(84px * var(--s)); --sh: calc(40px * var(--s)); } .nc.sx::before { display: none; } .nc.sx.on, .nc.sx.lit, .nc.sx.on.lit { background: none; box-shadow: none; } .sx .shape { position: absolute; inset: 0; background: var(--n-sheen), var(--n-card-bg); -webkit-backdrop-filter: var(--n-blur); backdrop-filter: var(--n-blur); -webkit-mask-size: 100% 100%; mask-size: 100% 100%; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; overflow: hidden; } .sx .shape .imglayer { border-radius: 0; } .sx .shape::after { content: \"\"; position: absolute; inset: 0; opacity: 0; transition: opacity .4s; pointer-events: none; background: radial-gradient(90% 80% at 50% var(--b), color-mix(in srgb, var(--lc) 45%, transparent), transparent 70%); } .nc.sx.on .shape { background: var(--n-sheen), linear-gradient(160deg, color-mix(in srgb, var(--lc) calc(var(--lv, 80%) * .3), rgba(255,255,255,.12)), rgba(255,255,255,.04)); } .sx.on .shape::after { opacity: 1; } .sx .rim { position: absolute; inset: 0; pointer-events: none; z-index: 1; -webkit-mask-size: 100% 100%; mask-size: 100% 100%; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; background: linear-gradient(180deg, rgba(255,255,255,.55), rgba(255,255,255,.16) 50%, rgba(255,255,255,.22)); transition: background .3s; } .sx.on .rim { background: linear-gradient(180deg, rgba(255,255,255,.6), color-mix(in srgb, var(--lc) 30%, transparent) 50%, color-mix(in srgb, var(--lc) 65%, transparent)); } .sx .face { position: absolute; inset: 0; z-index: 2; padding: calc(8px + 6px * var(--s, 1)) calc(8px + 6px * var(--s, 1)) calc(var(--sh) + 6px + var(--g, 0px)); display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; min-height: 0; pointer-events: none; } .sx .face > * { pointer-events: auto; } .sx .face .ic { flex: none; width: calc(30px + 10px * var(--s, 1)); height: calc(30px + 10px * var(--s, 1)); } .sx .face .nm { align-self: stretch; min-width: 0; } .sx .face .slw { align-self: stretch; margin-top: auto; } .sx .sw { position: absolute; z-index: 3; left: 50%; top: calc(var(--b) - var(--sh) / 2); margin-left: -42px; width: var(--sw); height: var(--sh); padding: 0; border: 0; border-radius: 999px; cursor: pointer; background: var(--n-well); -webkit-backdrop-filter: var(--n-blur); backdrop-filter: var(--n-blur); box-shadow: var(--n-inset-lg), 0 10px 22px rgba(0,0,0,.35); transition: background .3s, box-shadow .3s; } .sx .sw::after { content: \"\"; position: absolute; top: calc(4px * var(--s)); left: calc(4px * var(--s)); width: calc(32px * var(--s)); height: calc(32px * var(--s)); border-radius: 50%; background: var(--n-knob); box-shadow: 0 2px 6px rgba(0,0,0,.4); transition: transform .3s cubic-bezier(.3,1.4,.5,1), background .3s; } .sx.on .sw { background: linear-gradient(135deg, var(--lc), color-mix(in srgb, var(--lc) 60%, #ff7a2a)); box-shadow: inset 0 1px 3px rgba(0,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.35), 0 0 26px color-mix(in srgb, var(--lc) 70%, transparent), 0 10px 22px rgba(0,0,0,.3); } .sx.on .sw::after { transform: translateX(calc(44px * var(--s))); background: #fff; } .sx .sw:focus-visible { outline: 2px solid var(--accent-color); outline-offset: 3px; } .sx.cl .face { align-items: stretch; text-align: left; gap: 8px; } .sx.cl .hd { display: flex; align-items: center; gap: 10px; min-width: 0; } .sx.cl .hd .nm { flex: 1; } .sx.cl .slw .ncround { width: 34px; height: 34px; } .sx.cl .slw .ncround ha-icon { --mdc-icon-size: 17px; } .sx.cl .nm span { white-space: normal; font-size: 11.5px; line-height: 1.25; } .sx.cl .hd .nm b { white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } :host(.sq) { height: auto; } :host(.sq) .nc, :host(.sq) .bc { height: auto; aspect-ratio: 1; min-height: 0; } :host(.sq) .bc { padding: 16px; } :host(.sq) .bc .imgcell { width: 42px; height: 42px; } :host(.sq) .bc .f-ctl { margin-top: 6px !important; } :host(.sq) .bc .f-ctl .ncround { width: 38px; height: 38px; } :host(.sq) .bc .grid > div[style*=\"grid-area:n\"] { margin-top: 6px !important; } .sx .sw { margin-left: 0; left: calc(var(--lo, 0px) + var(--t, .5) * (100% - var(--sw) - var(--lo, 0px) * 2)); } .sx .shape::after { background: radial-gradient(90% 80% at calc(var(--lo, 0px) + var(--sw) / 2 + var(--t, .5) * (100% - var(--sw) - var(--lo, 0px) * 2)) var(--b), color-mix(in srgb, var(--lc) 45%, transparent), transparent 70%); } .sx.al-left .face:not(:has(.hd)) { align-items: flex-start; text-align: left; } .sx.al-right .face:not(:has(.hd)) { align-items: flex-end; text-align: right; } .sx.sm .nm span { display: none; } .clk { --lc: var(--accent-color); } .nc.clk.tint { background: radial-gradient(120% 90% at 12% 0%, color-mix(in srgb, var(--lc) 20%, transparent), transparent 62%), var(--n-card-bg); box-shadow: var(--n-card-shadow), 0 0 36px color-mix(in srgb, var(--lc) 14%, transparent); } .clk .cq { position: absolute; inset: 0; z-index: 2; padding: 16px; container-type: size; display: grid; min-width: 0; } .clk .tm { font: 300 clamp(28px, 25cqw, 90px)/1 var(--n-font-display); letter-spacing: -.03em; font-variant-numeric: tabular-nums; white-space: nowrap; color: var(--primary-text-color); text-shadow: 0 0 22px color-mix(in srgb, var(--lc) 45%, transparent); } .clk .tm .co { font-style: normal; margin: 0 .02em; position: relative; top: -.04em; } .clk .tm .co.bl { animation: ncblink 1s steps(1) infinite; } .clk .tm small { font-size: .3em; letter-spacing: 0; margin-left: .25em; color: var(--secondary-text-color); font-weight: 500; text-shadow: none; } .clk .tm small.sc { color: var(--lc); } .clk .dt { font-size: 13px; font-weight: 500; color: var(--secondary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; } .clk .info { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; justify-content: center; min-width: 0; } .clk .lbl { font: 700 11px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: .12em; text-transform: uppercase; color: var(--secondary-text-color); } .clk .tz { font: 700 10.5px var(--ha-font-family-body, Manrope, system-ui, sans-serif); padding: 3px 8px; border-radius: 99px; background: var(--n-well); box-shadow: var(--n-inset); color: var(--secondary-text-color); } .clk .chs { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; } .pchip[hidden] { display: none; } .pchip.pz b { opacity: .6; } .clk .pchip b { font-variant-numeric: tabular-nums; } @keyframes ncblink { 0%, 100% { opacity: 1; } 50% { opacity: .25; } } .dg .cq { grid-template-rows: 1fr auto; justify-items: center; align-items: center; text-align: center; row-gap: 6px; } .dg .main { display: grid; justify-items: center; gap: 6px; min-width: 0; max-width: 100%; } .dg.wide .cq { grid-template-columns: minmax(0, 1fr) auto; grid-template-rows: 1fr; justify-items: start; text-align: left; column-gap: 16px; } .dg.wide .main { justify-items: start; } .dg.wide .tm { font-size: clamp(32px, 14cqw, 80px); } .dg.wide .info { flex-direction: column; align-items: flex-end; justify-content: center; } .dg.wide .chs { flex-direction: column; align-items: flex-end; } .an .cq { place-items: center; } .an .dial { height: min(100cqh, 100cqw); aspect-ratio: 1; } .an .dial svg { display: block; width: 100%; height: 100%; overflow: visible; } .an.wide .cq { grid-template-columns: auto minmax(0, 1fr); gap: 20px; justify-items: start; } .an.wide .dial { height: 100cqh; } .an .side { display: grid; gap: 6px; min-width: 0; align-content: center; justify-items: start; } .an .side .tm { font-size: clamp(30px, 11cqw, 64px); } .an .side .info { justify-content: flex-start; } .an svg .face { fill: var(--n-well); stroke: rgba(255,255,255,.16); stroke-width: 1.2; } .an svg .ring { fill: none; stroke: var(--lc); stroke-width: 2.4; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 1; opacity: .9; filter: drop-shadow(0 0 3px var(--lc)); transition: stroke-dashoffset .3s linear; } .an svg .mn { stroke: var(--n-dim); stroke-width: 1; stroke-linecap: round; } .an svg .mj { stroke: var(--primary-text-color); opacity: .85; stroke-width: 2.2; stroke-linecap: round; } .an svg .dot { fill: var(--primary-text-color); opacity: .5; } .an svg .dot.q { opacity: .95; } .an svg .nb { fill: var(--primary-text-color); font: 500 15px var(--n-font-display); text-anchor: middle; dominant-baseline: central; } .an svg .dw { fill: var(--secondary-text-color); font: 700 9.5px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: .12em; text-anchor: middle; } .an svg .lb { fill: var(--secondary-text-color); font: 700 8px var(--ha-font-family-body, Manrope, system-ui, sans-serif); letter-spacing: .2em; text-anchor: middle; } .an svg .h { transform-origin: 100px 100px; filter: drop-shadow(0 2px 3px rgba(0,0,0,.55)); } .an svg .se { transition: transform .35s cubic-bezier(.3,1.6,.5,1); } .an.sm svg .se, .an.sm svg .ring { transition: none; } .an svg .hr line { stroke: var(--primary-text-color); stroke-width: 6; stroke-linecap: round; } .an svg .mi line { stroke: var(--primary-text-color); stroke-width: 3.6; stroke-linecap: round; } .an svg .se line { stroke: var(--lc); stroke-width: 1.6; stroke-linecap: round; } .an svg .se circle { fill: var(--lc); } .an svg .cap { fill: var(--n-c2); stroke: var(--lc); stroke-width: 2; } .clk.noanim * { transition: none !important; } ";

/* ---------- small helpers ---------- */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mdi = n => (String(n).includes(':') ? n : 'mdi:' + n);
const icn = (n, px = 22, st = '') => `<ha-icon icon="${esc(mdi(n))}" style="--mdc-icon-size:${px}px;${st}"></ha-icon>`;
const num = v => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const dom = id => String(id || '').split('.')[0];
const BAD_STATES = ['unavailable', 'unknown'];
const IDLE_STATES = ['off', 'closed', 'idle', 'standby', 'docked', 'unlocked', 'paused', 'closing', 'disarmed', 'not_home', ...BAD_STATES];
const hsv = (h, s, v = 1) => { const f = n => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); }; return `rgb(${Math.round(f(5) * 255)},${Math.round(f(3) * 255)},${Math.round(f(1) * 255)})`; };
const fire = (node, type, detail) => node.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
const first = id => String(id || '').replace(/^.*?\./, '');
const ENTITY_RE = /^[a-z_]+\.[a-z0-9_]+$/;
const nice = s => String(s || '').replace(/_/g, ' ').replace(/^./, c => c.toUpperCase());

/* ---------- image option (shared by every kind) ---------- */
const POS = { center: 'center', 'right-bottom': 'right 4px bottom 4px', 'left-bottom': 'left 4px bottom 4px', 'right-top': 'right 4px top 4px', top: 'center top' };
function imgLayer(c, src = c.o.image) {
  if (!src) return '';
  const o = c.o, url = c.hass && c.hass.hassUrl && String(src).startsWith('/') ? c.hass.hassUrl(src) : src;
  const size = o.image_fit === 'cover' ? 'cover' : o.image_fit === 'contain' ? 'contain' : `${o.image_width}% auto`;
  return `<div class="imglayer ${o.image_fade ? 'fade' : ''}" style="background-image:url('${esc(url)}');background-size:${size};background-position:${POS[o.image_position] || 'center'};opacity:${o.image_opacity / 100};filter:blur(${o.image_blur}px)${o.image_blur ? ';transform:scale(1.15)' : ''}"></div>`;
}
const IMG_DEFAULTS = { image: '', image_opacity: 100, image_fit: 'width', image_width: 80, image_position: 'center', image_blur: 0, image_fade: false };
const IMG_OPTS = [
  { k: 'image', l: 'Background image (URL, e.g. /local/robot.png)', t: 'text', g: 'image' },
  { k: 'image_opacity', l: 'Image opacity', t: 'range', min: 0, max: 100, u: '%', g: 'image' },
  { k: 'image_fit', l: 'Image size', t: 'seg', o: [['cover', 'Cover'], ['contain', 'Contain'], ['width', 'Width %']], g: 'image' },
  { k: 'image_width', l: 'Image width', t: 'range', min: 20, max: 100, u: '%', g: 'image' },
  { k: 'image_position', l: 'Image position', t: 'seg', o: [['center', 'Centre'], ['right-bottom', 'Bottom right'], ['left-bottom', 'Bottom left'], ['right-top', 'Top right'], ['top', 'Top']], g: 'image' },
  { k: 'image_blur', l: 'Image blur', t: 'range', min: 0, max: 24, u: 'px', g: 'image' },
  { k: 'image_fade', l: 'Darken image for readable text', t: 'sw', g: 'image' },
];

/* ---------- reusable pieces of markup ---------- */
const tgl = (on, act = 'toggle', e = '') => `<div class="nctog ${on ? 'on' : ''}" data-act="${act}" ${e ? `data-e="${esc(e)}"` : ''} role="switch" aria-checked="${on}" tabindex="0"><i></i></div>`;
const svcAttr = (svc, data) => `data-svc="${svc}" data-d='${esc(JSON.stringify(data))}'`;
const round = (icon, svc, data, color, label) => `<button class="ncround" aria-label="${esc(label || icon)}" style="${color ? 'color:' + color : ''}" ${svcAttr(svc, data)}>${icn(icon, 19)}</button>`;
const slider = (svc, data, key, val, o = {}) => `<input class="sl" type="range" data-sl="${svc}" data-d='${esc(JSON.stringify(data))}' data-key="${key}" data-scale="${o.scale || 1}" min="${o.min ?? 1}" max="${o.max ?? 100}" step="${o.step ?? 1}" value="${val}" style="--p:${((val - (o.min ?? 1)) / ((o.max ?? 100) - (o.min ?? 1))) * 100}%;--fc:var(--lc, var(--accent-color))" aria-label="${esc(o.label || key)}" ${o.dis ? 'disabled' : ''}>`;
const barRow = (pct, label) => `<div class="row"><div class="bar"><i style="width:${clamp(pct, 0, 100)}%"></i></div><span>${label}</span></div>`;
const well = (inner, st = '') => `<div class="well" style="display:flex;align-items:center;gap:8px;padding:7px 12px;${st}">${inner}</div>`;

/* a Nocturne glass card with the standard grid: icon, state pill, name, label, controls */
function bcard(c, p) {
  const rows = p.rows || c.k.grid.rows, wide = p.wide ?? c.k.grid.columns === 12;
  const S = (k, v) => v ? `${k}:${v};` : '';
  const grid = `grid-template-areas:${p.areas || "'i tog' 'n n' 'l l' 'ctl ctl'"};grid-template-columns:${p.cols || '1fr auto'};grid-template-rows:${p.trows || 'auto auto auto 1fr'};${p.gridCss || ''}`;
  let h = imgLayer(c, p.image);
  h += `<div class="grid" style="${grid}">`;
  if (p.icon !== false) h += `<div class="imgcell" ${p.iconAct === false ? '' : `data-act="more-info"`} style="grid-area:i;${p.iconBg ? 'background:' + p.iconBg + ';' : ''}">${p.iconHtml || icn(p.icon || c.icon, 22, `color:${p.iconColor || 'var(--secondary-text-color)'};${p.iconFilter ? 'filter:' + p.iconFilter + ';' : ''}`)}</div>`;
  if (p.tog) h += `<div class="f-tog" style="grid-area:tog;justify-self:end;align-self:start">${p.tog}</div>`;
  if (p.name !== false) h += `<div style="grid-area:n;justify-self:${p.center ? 'center' : 'start'};align-self:end;font-weight:600;font-size:${p.center ? 16 : 15}px;margin-top:${p.center ? 0 : 14}px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name ?? c.title)}</div>`;
  if (p.label) h += `<div style="grid-area:l;justify-self:${p.center ? 'center' : 'start'};font-size:12.5px;color:${p.labelColor || 'var(--secondary-text-color)'};max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.label}</div>`;
  if (p.fields) Object.entries(p.fields).forEach(([f, v]) => { h += `<div class="f-${f}" style="grid-area:${f};${f === 'ctl' ? 'align-self:end;width:100%;margin-top:14px;' : ''}${(p.fieldCss || {})[f] || ''}">${v}</div>`; });
  if (p.ctl) h += `<div class="f-ctl" style="grid-area:ctl;align-self:end;width:100%;margin-top:14px">${p.ctl}</div>`;
  h += '</div>';
  return `<div class="bc ${wide ? 'w' : ''} ${p.cls || ''}" style="--rows:${rows};${S('background', p.bg)}${S('box-shadow', p.shadow)}${S('animation', p.anim)}${p.cardCss || ''}">${h}</div>`;
}
/* the tinted glow a card gets for a state, e.g. green armed, amber unlocked, red triggered */
const glow = (rgb, a1, a2) => rgb ? { bg: `radial-gradient(130% 100% at 0% 0%, rgba(${rgb},${a1}), rgba(${rgb},.05) 60%, transparent 85%), var(--n-card-bg)`, shadow: `var(--n-card-shadow), 0 0 40px rgba(${rgb},${a2})` } : {};

/* ---------- Tuner switch: a big switch that sits on the bottom edge of the tile (light, switch, fan) ---------- */
const SX_ON = c => ['slot', 'tab'].includes(c.switch_style);
const SX_ANY = c => !!c.switch_style && c.switch_style !== 'standard';
const SW_OPTS = [
  { k: 'switch_style', l: 'Switch style', t: 'seg', o: [['standard', 'Corner toggle'], ['slot', 'Slot'], ['tab', 'Tab'], ['overlap', 'Overlap']], d: 'standard' },
  { k: 'switch_position', l: 'Switch position along the bottom edge (0 = left edge, 100 = right edge)', t: 'range', min: 0, max: 100, u: '%', d: 50, on: SX_ANY },
  { k: 'switch_gap', l: 'Switch gap (slot) or wrap margin (tab)', t: 'range', min: 0, max: 20, u: 'px', d: 6, on: SX_ON },
  { k: 'switch_softness', l: 'Corner softness where the glass meets the switch', t: 'range', min: 0, max: 24, u: 'px', d: 12, on: SX_ON },
];
/* ok(cfg): does this config use a tile that has the switch? */
const switchOpts = ok => SW_OPTS.map(o => ({ ...o, when: c => ok(c) && (!o.on || o.on(c)) }));
const SWITCH_OPTS = switchOpts(c => c.variant !== 'wheel');
const SX = { R: 28, SW: 84, SH: 40 };
/* gap, position (0..1 along the bottom edge) and the least distance (lo) the switch keeps from each side.
   A tab wraps the switch, so it keeps its margin from the side and the tab ends flush with the tile; a slot or overlap can touch the side. */
function sxGeom(o) {
  const tab = o.switch_style === 'tab', g = SX_ON(o) ? clamp(+o.switch_gap || 0, 0, 20) : 0;
  const pos = o.switch_position === undefined || o.switch_position === null || o.switch_position === '' ? 50 : +o.switch_position;
  return { g, t: clamp((isNaN(pos) ? 50 : pos) / 100, 0, 1), lo: tab ? g : 0, tab };
}
/* the glass outline for the Tuner switch: the tile (a rounded rect) with the switch outline, g px bigger all round, cut out (slot) or added (tab),
   then softened by blurring and re-thresholding the alpha, which rounds every corner by about 1.9 x sigma. rim = only a thin inner ring, for the edge highlight. */
function sxMask(W, H, B, mode, g, rad, x0, rim, s) {
  const { R } = SX, SW = SX.SW * s, SH = SX.SH * s, sigma = Math.max(0.35, rad / 1.9), f = n => Math.round(n * 100) / 100;
  const notch = fill => `<rect x='${f(x0 - g)}' y='${f(B - SH / 2 - g)}' width='${SW + 2 * g}' height='${SH + 2 * g}' rx='${SH / 2 + g}' fill='${fill}'/>`;
  const rg = `x='-40' y='-40' width='${W + 80}' height='${H + 80}'`;
  let defs = `<filter id='f' filterUnits='userSpaceOnUse' ${rg} color-interpolation-filters='sRGB'><feGaussianBlur stdDeviation='${f(sigma)}'/><feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 12 -5.5'${rim ? " result='a'/><feMorphology in='a' operator='erode' radius='1.2' result='e'/><feComposite in='a' in2='e' operator='out'/>" : '/>'}</filter>`;
  const tile = `<rect x='0' y='0' width='${W}' height='${B}' rx='${R}'`;
  let body;
  if (mode === 'slot') { defs += `<mask id='m' maskUnits='userSpaceOnUse' ${rg}><rect ${rg} fill='#fff'/>${notch('#000')}</mask>`; body = `<g filter='url(#f)'>${tile} mask='url(#m)'/></g>`; }
  else if (mode === 'tab') body = `<g filter='url(#f)'>${tile}/>${notch('#000')}</g>`;
  else body = `<g filter='url(#f)'>${tile}/></g>`;
  return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${H}' width='${W}' height='${H}'><defs>${defs}</defs>${body}</svg>`)}")`;
}
function sxTile(c, p) {
  const o = c.o, mode = o.switch_style, wide = o.size === 'wide', { g, t, lo, tab } = sxGeom(o);
  const al = t < 0.25 ? 'left' : t > 0.75 ? 'right' : 'center';
  return `<div class="nc sx al-${al} ${p.cls || ''} ${wide ? 'wide' : ''} ${p.on ? 'on' : ''}" style="--rows:3;--t:${t};--lo:${lo}px;--g:${g}px;--b:calc(100% - ${SX.SH / 2 + (tab ? g : 0)}px);${p.style || ''}">
    <div class="shape">${imgLayer(c)}</div>
    <div class="rim" aria-hidden="true"></div>
    <div class="face">${p.face || `<span class="ic ${p.lit ? 'lit' : ''}" data-act="toggle" role="button" tabindex="0" aria-label="Toggle">${icn(c.icon)}</span><div class="nm"><b>${esc(c.title)}</b>${p.sub ? `<span>${p.sub}</span>` : ''}</div>${p.slider ? `<div class="slw">${p.slider}</div>` : ''}`}</div>
    <button class="sw" data-act="toggle" role="switch" aria-checked="${!!p.on}" aria-label="Toggle ${esc(c.title)}"></button></div>`;
}
/* sets the outline once the tile has a real size, and again when it changes */
function sxAfter(c, root) {
  const el = root.querySelector('.sx'); if (!el) return;
  if (c._ro) c._ro.disconnect();
  const o = c.o, mode = o.switch_style, apply = () => {
    const W = el.clientWidth, H = el.clientHeight; if (!W || !H) return;
    /* the switch, its gap and the corner softness shrink with the tile (full size from about 210px wide), so a narrow tile is not taken over by it */
    const s = clamp(W / 210, 0.6, 1), g0 = sxGeom(o), g = g0.g * s, t = g0.t, lo = g0.lo * s, SW = SX.SW * s, SH = SX.SH * s;
    const B = H - SH / 2 - (mode === 'tab' ? g : 0), x0 = lo + t * (W - SW - 2 * lo), rad = clamp(+o.switch_softness || 0, 0, 30) * s;
    const set = (n, url) => { n.style.webkitMaskImage = url; n.style.maskImage = url; };
    set(el.querySelector('.shape'), sxMask(W, H, B, mode, g, rad, x0, false, s));
    set(el.querySelector('.rim'), sxMask(W, H, B, mode, g, rad, x0, true, s));
    el.style.setProperty('--s', String(Math.round(s * 1000) / 1000)); el.style.setProperty('--g', g + 'px'); el.style.setProperty('--lo', lo + 'px');
    el.style.setProperty('--b', B + 'px'); el.classList.toggle('sm', W < 150);
  };
  apply(); if (typeof ResizeObserver !== 'undefined') { c._ro = new ResizeObserver(apply); c._ro.observe(el); }
}

/* hand-built tile (light, switch, fan, cover, sensor, ...) */
function tile(c, p) {
  const o = c.o, wide = o.size === 'wide';
  if (p.tog !== false && o.switch_style && o.switch_style !== 'standard') return sxTile(c, p);
  return `<div class="nc tile ${p.cls || ''} ${wide ? 'wide' : ''} ${p.on ? 'on' : ''}" style="--rows:3;${p.style || ''}">${imgLayer(c)}<div class="in"><span class="ic ${p.lit ? 'lit' : ''}" data-act="toggle" role="button" tabindex="0" aria-label="Toggle">${icn(c.icon)}</span>${p.tog === false ? '' : `<span class="tgw">${tgl(p.on)}</span>`}<div class="nm"><b>${esc(c.title)}</b>${p.sub ? `<span>${p.sub}</span>` : ''}</div>${p.slider ? `<div class="slw">${p.slider}</div>` : ''}</div></div>`;
}

/* ---------- kinds registry ---------- */
const KINDS = {};
const SIZE = { k: 'size', l: 'Size', t: 'seg', o: [['small', 'Small'], ['wide', 'Wide']], d: 'small' };
const SHOW_STATE = { k: 'show_state', l: 'Show state line', t: 'sw', d: false };
const SQUARE = { k: 'square', l: 'Square tile (so tiles line up like a grid)', t: 'sw', d: true };
function kind(def) { def.opts = [...(def.opts || []), ...(def.square ? [{ ...SQUARE, when: def.square }] : []), ...(def.noImage ? [] : IMG_OPTS)]; def.defaults = Object.assign({}, ...(def.opts || []).map(o => ({ [o.k]: o.d !== undefined ? o.d : IMG_DEFAULTS[o.k] })), def.noImage ? {} : IMG_DEFAULTS); KINDS[def.id] = def; return def; }

/* ---------- the card ---------- */
let SEQ = 0;
class NocturneCard extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); this._refs = []; this._id = ++SEQ; this._subs = []; this._fc = {}; }
  static getConfigElement() { return document.createElement('nocturne-card-editor'); }
  static getStubConfig(hass, entities) { const pick = d => (entities || []).find(e => e.startsWith(d + '.')); const e = pick('light'); return e ? { type: 'custom:nocturne-card', kind: 'light', entity: e } : { type: 'custom:nocturne-card', kind: 'light' }; }

  setConfig(config) {
    if (!config || !config.kind) throw new Error('Choose a kind (for example kind: light)');
    const k = KINDS[config.kind]; if (!k) throw new Error(`Unknown kind "${config.kind}". Kinds: ${Object.keys(KINDS).join(', ')}`);
    this.k = k; this.cfg = config; this.o = Object.assign({}, k.defaults, config);
    this._watch = null; this._unsub(); this._rendered = false; this._connected_once = false;
    if (this._hass) this._update(true);
    this.style.setProperty('--rows', this._grid().rows);
  }
  get hass() { return this._hass; }
  set hass(h) { const first = !this._hass; this._hass = h; if (this.k) this._update(first); }
  connectedCallback() { if (this.k && this._hass) { if (this.k.connect) this.k.connect(this); this._update(true); } }
  disconnectedCallback() { this._unsub(); }
  _unsub() { if (this._ro) this._ro.disconnect(); this._subs.forEach(p => typeof p === 'function' ? p() : Promise.resolve(p).then(u => typeof u === 'function' && u()).catch(() => {})); this._subs = []; }

  /* which entities does this card depend on? every entity id found in the config, plus whatever the kind adds */
  _entityIds() {
    if (this._watch) return this._watch;
    const ids = new Set(), walk = v => { if (typeof v === 'string') { if (ENTITY_RE.test(v)) ids.add(v); } else if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') Object.values(v).forEach(walk); };
    walk(this.cfg); (this.k.extraIds ? this.k.extraIds(this) : []).forEach(i => i && ids.add(i));
    return this._watch = [...ids];
  }
  _update(force) {
    const ids = this._entityIds(), refs = ids.map(i => this._hass.states[i]);
    const extra = this.k.sig ? this.k.sig(this) : '';
    const changed = force || extra !== this._extra || refs.length !== this._refs.length || refs.some((r, i) => r !== this._refs[i]);
    if (!changed || this._busy) { if (changed) this._dirty = true; return; }
    this._refs = refs; this._extra = extra; this._rendered = false;
    if (!this._connected_once) { this._connected_once = true; if (this.k.connect) this.k.connect(this); }
    this._render();
  }
  refresh() { this._rendered = false; this._render(); }

  /* ---- state helpers used by the kinds ---- */
  S(id) { return id && this._hass ? this._hass.states[id] : undefined; }
  st(id) { const s = this.S(id); return s ? s.state : undefined; }
  at(id, k) { const s = this.S(id); return s && s.attributes ? s.attributes[k] : undefined; }
  get e() { if (this.cfg.entity) return this.cfg.entity; const l = this.list(); return l.length ? l[0].entity : undefined; }
  /* entities as [{entity, name, icon}] from strings or objects */
  list() { return [].concat(this.cfg.entities || this.cfg.entity || []).filter(Boolean).map(x => typeof x === 'string' ? { entity: x } : x); }
  fname(id) { const s = this.S(id); return (s && s.attributes && s.attributes.friendly_name) || nice(first(id)); }
  get title() { return this.cfg.name || this.k.title || (this.e ? this.fname(this.e) : this.k.name); }
  get icon() { return this.cfg.icon || (this.e && this.at(this.e, 'icon')) || this.k.icon; }
  call(d, s, data) { return this._hass.callService(d, s, data); }
  url(p) { return p && this._hass.hassUrl ? this._hass.hassUrl(p) : p; }

  _render() {
    if (!this._hass || !this.k) return;
    let body;
    try { body = this.k.domains && !this.e ? `<div class="nc tile" style="--rows:3;padding:16px"><div class="in" style="display:grid;align-content:center;gap:6px"><span class="ic">${icn(this.k.icon)}</span><b>${esc(this.k.name)}</b><span style="font-size:12px;color:var(--secondary-text-color)">Choose an entity in the card editor</span></div></div>` : this.k.render(this); this.style.setProperty('--rows', this._grid().rows); } catch (err) { console.error('[nocturne-card]', err); body = `<div class="nc tile" style="--rows:3;padding:16px"><div class="in"><b>nocturne-card</b><span style="font-size:12px;color:var(--n-bad)">${esc(err.message)}</span></div></div>`; }
    this.classList.toggle('sq', this._isSq());
    this.shadowRoot.innerHTML = `<style>${CSS}</style>${body}`;
    if (!this._bound) this._bind();
    if (this.k.after) this.k.after(this, this.shadowRoot);
    this._dirty = false;
  }

  /* ---- interaction ---- */
  _bind() {
    this._bound = true; const r = this.shadowRoot;
    r.addEventListener('click', ev => {
      const t = ev.target.closest('[data-svc]');
      if (t) { ev.stopPropagation(); const [d, s] = t.dataset.svc.split('.'); this.call(d, s, JSON.parse(t.dataset.d || '{}')); t.classList.add('fired'); setTimeout(() => t.classList.remove('fired'), 700); return; }
      const a = ev.target.closest('[data-act]');
      if (a) { ev.stopPropagation(); this._act(a.dataset.act, a.dataset.e || this.e, a); return; }
      if (ev.target.closest('input,select,textarea,a,.mc,.pad')) return;
      if (this._held) { this._held = false; return; }
      this._action(this.cfg.tap_action || (this.k.tapFor ? this.k.tapFor(this) : this.k.tap) || { action: 'more-info' });
    });
    r.addEventListener('keydown', ev => { if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches('[role=button],[role=switch]')) { ev.preventDefault(); ev.target.click(); } });
    r.addEventListener('input', ev => { const i = ev.target; if (!i.matches || !i.matches('input.sl')) return; this._busy = true; i.style.setProperty('--p', ((i.value - i.min) / (i.max - i.min)) * 100 + '%'); const lab = i.closest('.nc,.bc'); if (lab) lab.style.setProperty('--lv', i.value + '%'); });
    r.addEventListener('change', ev => { const i = ev.target; if (!i.matches || !i.matches('input.sl[data-sl]')) return; const [d, s] = i.dataset.sl.split('.'); const data = JSON.parse(i.dataset.d || '{}'); data[i.dataset.key] = Math.round(parseFloat(i.value) * parseFloat(i.dataset.scale || 1) * 100) / 100; this.call(d, s, data); this._busy = false; setTimeout(() => this._dirty && this._update(true), 400); });
    r.addEventListener('pointerup', () => { if (this._busy) { this._busy = false; setTimeout(() => this._dirty && this._update(true), 400); } });
    let timer;
    r.addEventListener('pointerdown', ev => { if (ev.target.closest('input,select,button,[data-svc],.mc,.pad')) return; const hold = this.cfg.hold_action || (this.k.holdFor ? this.k.holdFor(this) : this.k.hold); if (!hold || hold.action === 'none') return; timer = setTimeout(() => { this._held = true; this._action(hold); }, 500); });
    ['pointerup', 'pointerleave', 'pointercancel', 'scroll'].forEach(n => r.addEventListener(n, () => clearTimeout(timer)));
  }
  _act(a, id, el) {
    const e = id || this.e;
    if (a === 'toggle') return this.toggle(e);
    if (a === 'more-info') return fire(this, 'hass-more-info', { entityId: e });
    if (a === 'popup') return this._action({ action: 'popup' });
    if (this.k.act) this.k.act(this, a, e, el);
  }
  toggle(id) {
    const d = dom(id), s = this.st(id);
    if (this.k.toggle) return this.k.toggle(this, id);
    if (d === 'lock') return this.call('lock', s === 'locked' ? 'unlock' : 'lock', { entity_id: id });
    if (d === 'climate') return this.call('climate', s === 'off' ? 'turn_on' : 'turn_off', { entity_id: id });
    if (d === 'media_player') return this.call('media_player', ['off', 'unavailable'].includes(s) ? 'turn_on' : 'turn_off', { entity_id: id });
    if (d === 'scene' || d === 'script') return this.call(d, 'turn_on', { entity_id: id });
    if (d === 'button' || d === 'input_button') return this.call(d, 'press', { entity_id: id });
    if (d === 'vacuum') return this.call('vacuum', s === 'cleaning' ? 'return_to_base' : 'start', { entity_id: id });
    if (d === 'alarm_control_panel') return fire(this, 'hass-more-info', { entityId: id });
    return this.call('homeassistant', 'toggle', { entity_id: id });
  }
  _action(cfg) {
    const a = cfg.action || 'more-info', e = cfg.entity || this.e;
    if (a === 'none') return;
    if (a === 'toggle') return this.toggle(e);
    if (a === 'more-info') return fire(this, 'hass-more-info', { entityId: e });
    if (a === 'navigate') { history.pushState(null, '', cfg.navigation_path); return window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } })); }
    if (a === 'url') return window.open(cfg.url_path, cfg.new_tab === false ? '_self' : '_blank');
    if (a === 'perform-action' || a === 'call-service') { const [d, s] = String(cfg.perform_action || cfg.service).split('.'); return this.call(d, s, Object.assign({}, cfg.data || cfg.service_data, cfg.target || {})); }
    if (a === 'popup' && this.k.popup) return this.k.popup(this);
    if (a === 'popup') return fire(this, 'hass-more-info', { entityId: e });
  }

  _grid() { if (!this.k) return { columns: 6, rows: 3 }; const g = this.k.gridFor ? this.k.gridFor(this) : this.k.grid; return { columns: this.o.size === 'wide' ? 12 : g.columns, rows: g.rows }; }
  /* square tiles: the height follows the width, so the tile needs no fixed number of rows */
  _isSq() { return !!(this.k && this.o.square && this.k.square && this.k.square(this.o) && this._grid().columns <= 6); }
  getCardSize() { return this._grid().rows; }
  getGridOptions() { const g = this._grid(); return this._isSq() ? { columns: g.columns, rows: 'auto', min_columns: 3 } : { columns: g.columns, rows: g.rows, min_columns: 3, min_rows: 2 }; }
}

/* ====== climate dial: ported from the Nocturne dashboard's nc_climate_dial template ====== */
const climateDial = (entity, variables) => { const a=entity.attributes, min=a.min_temp||16, max=a.max_temp||31, t=a.temperature ?? min, on=entity.state!=='off';
    const MD={heat:['mdi:fire','Heat','var(--n-warn)','#ff6a3a','#ffc27a'],cool:['mdi:snowflake','Cool','var(--accent-color)','#2f9bff','#b8ecff'],dry:['mdi:water-percent','Dry','var(--n-ok)','#22c997','#c5ffe8'],auto:['mdi:thermostat-auto','Auto','var(--accent-color)','var(--primary-color)','var(--accent-color)'],heat_cool:['mdi:thermostat-auto','Auto','var(--accent-color)','var(--primary-color)','var(--accent-color)'],fan_only:['mdi:fan','Fan','var(--accent-color)','var(--primary-color)','var(--accent-color)']}, [mi,ml,mc,m1,m2]=MD[entity.state]||['mdi:power','Off','var(--n-dim)','var(--primary-color)','var(--accent-color)'];
    const kind=entity.state==='heat'?'rise':entity.state==='cool'?'fall':entity.state==='dry'?'rise':'spin';
    const P=on&&kind!=='spin'?[0,1,2,3,4,5,6].map(i=>{const l=10+((i*37)%78),sz=2+(i%3),du=(3.4+(i%4)*.7).toFixed(1),de=(-i*.8).toFixed(1);return `<i style="position:absolute;left:${l}%;${kind==='fall'?'top':'bottom'}:-6px;width:${sz}px;height:${sz}px;border-radius:50%;background:${kind==='rise'?m2:'#fff'};box-shadow:0 0 6px ${kind==='rise'?m1:'#fff'};opacity:0;animation:${kind==='fall'?'ncfall':'ncrise'} ${du}s linear ${de}s infinite"></i>`}).join(''):'';
    const FX=!on?'':kind==='spin'?`<div style="position:absolute;inset:-30%;background:conic-gradient(from 0deg,transparent 0,${m2} 12%,transparent 32%);opacity:.16;animation:ncspin 10s linear infinite"></div>`:`<div style="position:absolute;left:8%;right:8%;${kind==='fall'?'top':'bottom'}:-18%;height:60%;border-radius:50%;background:radial-gradient(closest-side,${m1},transparent);opacity:.3;filter:blur(10px);animation:ncbreathe 3.4s ease-in-out infinite"></div>${P}`;
    const f=Math.max(0,Math.min(1,(t-min)/(max-min))), A0=135, S=270, ang=A0+S*f;
    const pt=(r,d)=>{const x=d*Math.PI/180;return [(100+r*Math.cos(x)).toFixed(2),(100+r*Math.sin(x)).toFixed(2)]};
    const arc=(r,a0,a1)=>{const p0=pt(r,a0),p1=pt(r,Math.max(a1,a0+.01));return `M${p0} A${r} ${r} 0 ${a1-a0>180?1:0} 1 ${p1}`};
    let ticks='';
    for(let i=0;i<=max-min;i++){const d=A0+S*i/(max-min),maj=(min+i)%5===0,p0=pt(maj?57:61,d),p1=pt(66,d);
      ticks+=`<line x1="${p0[0]}" y1="${p0[1]}" x2="${p1[0]}" y2="${p1[1]}" style="stroke:${d<=ang&&on?m2:'var(--n-dim)'};stroke-opacity:.75;stroke-width:${maj?1.6:1};stroke-linecap:round"/>`}
    const k=pt(88,ang), main=on?'url(#ncg)':'var(--n-dim)';
    return `<div style="position:relative;width:100%;max-width:${variables.dial||210}px;aspect-ratio:1;margin:0 auto;border-radius:50%;background:var(--n-raised);box-shadow:var(--n-shadow-lg)">
      <svg viewBox="0 0 200 200" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
      <defs>
        <linearGradient id="ncg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color:${m1}"/><stop offset="1" style="stop-color:${m2}"/></linearGradient>
        <radialGradient id="ncf" cx=".42" cy=".36" r=".75"><stop offset="0" style="stop-color:var(--n-c1)"/><stop offset="1" style="stop-color:var(--n-well)"/></radialGradient>
        <filter id="ncb" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <circle cx="100" cy="100" r="88" style="fill:none;stroke:var(--n-well);stroke-width:14"/>
      <path d="${arc(88,A0,A0+S)}" style="fill:none;stroke:var(--n-dim);stroke-opacity:.35;stroke-width:3;stroke-linecap:round"/>
      ${on?`<path d="${arc(88,A0,ang)}" pathLength="1" filter="url(#ncb)" style="fill:none;stroke:${m1};stroke-width:9;stroke-linecap:round;opacity:.55;stroke-dasharray:1;animation:ncdraw .9s ease-out"/>`:''}
      <path d="${arc(88,A0,ang)}" pathLength="1" style="fill:none;stroke:${main};stroke-width:4;stroke-linecap:round;stroke-dasharray:1;animation:ncdraw .9s ease-out"/>
      <circle cx="100" cy="100" r="72" style="fill:url(#ncf);stroke:var(--primary-color);stroke-opacity:.3;stroke-width:1"/>
      ${ticks}
      ${on?`<circle cx="${k[0]}" cy="${k[1]}" r="11" filter="url(#ncb)" style="fill:${m1};opacity:.55"/>`:''}
      <circle cx="${k[0]}" cy="${k[1]}" r="7.5" style="fill:var(--n-c2);stroke:${on?m2:'var(--n-dim)'};stroke-width:3"/>
      </svg>
      <div style="position:absolute;inset:14%;border-radius:50%;overflow:hidden;pointer-events:none">${FX}</div>
      <div style="position:absolute;inset:0;pointer-events:none">
        <span style="position:absolute;left:0;right:0;top:calc(50% - 47px);text-align:center;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--secondary-text-color);font-weight:600">Target</span>
        <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);animation:ncpop .4s ease-out;font-family:var(--n-font-display);font-weight:500;font-size:${Math.round((variables.dial||210)*0.22)}px;line-height:1;letter-spacing:-.03em;font-variant-numeric:tabular-nums">${t}<span style="position:absolute;left:100%;top:3px;margin-left:3px;font-size:16px;letter-spacing:0">°C</span></span>
        <div style="position:absolute;left:0;right:0;top:69%;display:flex;flex-direction:column;align-items:center;gap:2px;color:${mc};filter:${on?'drop-shadow(0 0 6px '+mc+')':'none'}"><ha-icon icon="${mi}" style="margin:0;--mdc-icon-size:18px"></ha-icon><span style="font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;line-height:1">${ml}</span></div>
      </div></div>` };
const climateLeft = (entity, variables) => { const a=entity.attributes, on=entity.state!=='off';
    const ic={heat:'mdi:fire',cool:'mdi:snowflake',dry:'mdi:water-percent',auto:'mdi:thermostat-auto',fan_only:'mdi:fan'}[entity.state]||'mdi:air-conditioner';
    const WA=`onfocusin="clearTimeout(this._t);const r=this.getRootNode();this._t=setTimeout(()=>{const a=r.activeElement;if(a&&this.contains(a))a.blur()},10000)" onfocusout="clearTimeout(this._t)"`;
    const KA=`onpointerdown="const w=this.parentElement;w.dataset.was=w.matches(':focus-within')?'1':'0'" onclick="const w=this.parentElement;if(w.dataset.was==='1'){const a=w.getRootNode().activeElement;if(a)a.blur()}"`;
    const modes=a.hvac_modes||['auto','cool','dry','heat','off'];
    const MI={auto:['mdi:thermostat-auto','Auto','var(--accent-color)'],cool:['mdi:snowflake','Cool','var(--accent-color)'],dry:['mdi:water-percent','Dry','var(--n-ok)'],heat:['mdi:fire','Heat','var(--n-warn)'],fan_only:['mdi:fan','Fan','var(--accent-color)'],heat_cool:['mdi:thermostat-auto','Auto','var(--accent-color)'],off:['mdi:power','Off','var(--secondary-text-color)']};
    const eid=entity.entity_id;
    const pick=v=>`const h=document.querySelector('home-assistant').hass;${v==='off'?`h.callService('climate','turn_off',{entity_id:'${eid}'})`:`h.callService('climate','set_hvac_mode',{entity_id:'${eid}',hvac_mode:'${v}'})`};this.blur()`;
    const items=modes.map(m=>{const d=MI[m]||['mdi:thermostat',m,'var(--secondary-text-color)'];return `<button class="ncm-i${m===entity.state?' sel':''}" title="${d[1]}" aria-label="${d[1]}" style="color:${m===entity.state?'var(--n-on-accent)':d[2]}" onclick="${pick(m)}"><ha-icon icon="${d[0]}" style="margin:0;--mdc-icon-size:20px"></ha-icon></button>`}).join('');
    const knob=`<div class="ncm" tabindex="0" role="button" aria-haspopup="true" aria-label="Mode" ${WA}><div style="width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:var(--n-raised);box-shadow:var(--n-shadow-md);color:${on?'var(--accent-color)':'var(--secondary-text-color)'};filter:${on?'drop-shadow(0 0 6px var(--n-glow))':'none'};cursor:pointer" ${KA}><ha-icon icon="${ic}" style="margin:0;--mdc-icon-size:22px"></ha-icon></div><div class="ncm-menu">${items}</div></div>`;
    const m=(k,v)=>`<div style="display:flex;flex-direction:column;line-height:1.25;margin-top:10px;width:60px"><span style="font-size:10.5px;color:var(--secondary-text-color)">${k}</span><b style="font-family:var(--n-font-display);font-weight:500;font-size:15px;white-space:normal">${v}</b></div>`;
    const FM={auto:['mdi:fan-auto','Auto'],quiet:['mdi:fan','Quiet'],low:['mdi:fan-speed-1','Low'],med:['mdi:fan-speed-2','Med'],high:['mdi:fan-speed-3','High'],'super high':['mdi:fan-plus','Super high']};
    const fmodes=a.fan_modes||Object.keys(FM);
    const fcur=a.fan_mode;
    const fpick=v=>`const h=document.querySelector('home-assistant').hass;h.callService('climate','set_fan_mode',{entity_id:'${eid}',fan_mode:'${v}'});this.blur()`;
    const fitems=fmodes.map(f=>{const d=FM[f]||['mdi:fan',f];return `<button class="ncm-i${f===fcur?' sel':''}" title="${d[1]}" aria-label="${d[1]}" style="color:${f===fcur?'var(--n-on-accent)':'var(--secondary-text-color)'}" onclick="${fpick(f)}"><ha-icon icon="${d[0]}" style="margin:0;--mdc-icon-size:20px"></ha-icon></button>`}).join('');
    const fd=FM[fcur]||['mdi:fan',fcur||'–'];
    const fanKnob=`<div class="ncm" tabindex="0" role="button" aria-haspopup="true" aria-label="Fan speed" style="margin-top:10px" ${WA}><div style="width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:var(--n-raised);box-shadow:var(--n-shadow-md);color:${on?'var(--accent-color)':'var(--secondary-text-color)'};cursor:pointer" ${KA}><ha-icon icon="${fd[0]}" style="margin:0;--mdc-icon-size:22px"></ha-icon></div><div class="ncm-menu">${fitems}</div></div><div style="font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--secondary-text-color);margin:4px 0 0 -6px;width:60px;text-align:center;white-space:normal;line-height:1.15">${fd[1]}</div>`;
    return knob + fanKnob + m('Indoor', a.current_temperature!=null ? a.current_temperature+'°' : '–') + m('Humidity', a.current_humidity!=null ? Math.round(a.current_humidity)+'%' : '–') };

/* ============ simple tiles: light, switch, fan, cover, sensor, camera, actions ============ */

/* ----- light ----- */
const lightInfo = (c, id) => {
  const s = c.S(id), a = (s && s.attributes) || {}, on = !!s && s.state === 'on', modes = a.supported_color_modes || [];
  const caps = modes.some(m => ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'].includes(m)) ? 'color' : modes.some(m => ['brightness', 'color_temp'].includes(m)) ? 'dim' : 'onoff';
  const lv = on ? (a.brightness != null ? Math.max(1, Math.round(a.brightness / 2.55)) : 100) : 0;
  let col = '#ffc15a'; if (on && a.hs_color) col = hsv(a.hs_color[0], a.hs_color[1] / 100); else if (on && a.rgb_color) col = `rgb(${a.rgb_color.slice(0, 3)})`;
  return { s, a, on, caps, lv, col };
};
kind({
  id: 'light', square: c => c.variant !== 'wheel', name: 'Light', domains: ['light'], icon: 'lightbulb', grid: { columns: 6, rows: 3 }, tap: { action: 'toggle' }, hold: { action: 'popup' },
  opts: [{ k: 'variant', l: 'Layout', t: 'seg', o: [['tile', 'Tile'], ['wheel', 'Colour wheel card']], d: 'tile' }, { k: 'layout', l: 'Wheel card shape', t: 'seg', o: [['tall', 'Tall'], ['wide', 'Wide']], d: 'tall' }, SIZE, { k: 'show_slider', l: 'Brightness slider on the card', t: 'sw', d: true }, SHOW_STATE, ...SWITCH_OPTS],
  tapFor: c => c.o.variant === 'wheel' ? { action: 'none' } : { action: 'toggle' },
  holdFor: c => c.o.variant === 'wheel' ? { action: 'more-info' } : { action: 'popup' },
  gridFor: c => { if (c.o.variant !== 'wheel') return { columns: 6, rows: 3 }; const i = lightInfo(c, c.e), wide = c.o.layout === 'wide'; return wide ? { columns: 'full', rows: i.caps === 'color' ? 5 : 3 } : { columns: 12, rows: i.caps === 'color' ? 7 : i.caps === 'dim' ? 3 : 2 }; },
  after(c, root) { if (c.o.variant === 'wheel') wheelAfter(c, root); else sxAfter(c, root); },
  render(c) {
    if (c.o.variant === 'wheel') return wheelCard(c);
    const i = lightInfo(c, c.e), o = c.o, dim = i.caps !== 'onoff';
    const sub = o.show_state ? (i.on ? 'On' + (dim ? ` · ${i.lv}%` : '') : 'Off') : '';
    return tile(c, { cls: 'lit', on: i.on, lit: true, sub, style: `--lv:${i.on ? i.lv : 0}%;--lc:${i.col}`, slider: dim && o.show_slider ? slider('light.turn_on', { entity_id: c.e }, 'brightness_pct', i.lv, { label: 'Brightness', dis: !i.on }) : '' });
  },
  popup: c => openLightPopup(c),
});

/* ----- the standalone colour wheel card (light, variant: wheel) ----- */
const hsvA = (h, s) => hsv(h, s).match(/\d+/g).map(Number);
function wheelCard(c) {
  const i = lightInfo(c, c.e), o = c.o, wide = o.layout === 'wide', color = i.caps === 'color', dim = i.caps !== 'onoff', hs = i.a.hs_color || [38, 60];
  const rgb = color && i.on ? hsvA(hs[0], hs[1] / 100) : (color ? hsvA(hs[0], hs[1] / 100) : [255, 170, 60]), lv = i.lv || (i.on ? 100 : 0), last = Math.max(1, lv);
  const g = c.k.gridFor(c);
  return `<div class="lc ${i.on ? 'on' : ''} ${wide ? 'wide' : ''}" style="--rows:${g.rows};--c:${rgb.join(',')};--glow:rgba(${rgb.join(',')},${(0.14 + 0.36 * lv / 100).toFixed(3)});--p:${((last - 1) / 99).toFixed(4)};--lc:rgb(${rgb.join(',')})">${imgLayer(c)}
    <div class="hd"><span class="disc" data-act="more-info">${icn(c.icon, 22)}</span><span class="t"><span class="nm">${esc(c.title)}</span><span class="st">${i.on ? 'On' + (dim ? ' · ' + lv + '%' : '') : 'Off'}</span></span>${tgl(i.on, 'toggle', c.e)}</div>
    ${color ? `<div class="wheel" style="--w:${wide ? 200 : 232}px"><div class="pad" data-pad data-h="${hs[0]}" data-s="${hs[1] / 100}" tabindex="0" role="application" aria-label="Colour wheel"><canvas></canvas><span class="thumb"></span></div></div>` : ''}
    <div class="ctl">${dim && o.show_slider ? `<div class="br">${icn('brightness-5', 20)}${slider('light.turn_on', { entity_id: c.e }, 'brightness_pct', last, { label: 'Brightness' })}${icn('brightness-7', 20)}</div>` : ''}${color ? `<div class="chips"><span class="chip"><i></i><span data-hs>Hue ${Math.round(hs[0])}° · Sat ${Math.round(hs[1])}%</span></span></div>` : ''}</div></div>`;
}
function wheelAfter(c, root) {
  const pad = root.querySelector('[data-pad]'); if (!pad) return;
  const cv = pad.querySelector('canvas'), thumb = pad.querySelector('.thumb'), card = root.querySelector('.lc'), id = c.e;
  const css = cv.clientWidth || 208, dpr = Math.min(window.devicePixelRatio || 1, 2), n = Math.round(css * dpr), R = n / 2; cv.width = cv.height = n;
  const ctx = cv.getContext('2d'), img = ctx.createImageData(n, n), d = img.data;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const dx = x + .5 - R, dy = y + .5 - R, dist = Math.hypot(dx, dy); if (dist > R) continue; const h = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360, k = hsvA(h, Math.min(dist / R, 1)), p = (y * n + x) * 4; d[p] = k[0]; d[p + 1] = k[1]; d[p + 2] = k[2]; d[p + 3] = Math.round(255 * clamp(R - dist, 0, 1)); }
  ctx.putImageData(img, 0, 0);
  let h = +pad.dataset.h, s = +pad.dataset.s;
  const place = () => { const r = pad.clientWidth / 2, a = h * Math.PI / 180; thumb.style.left = r + Math.cos(a) * s * r + 'px'; thumb.style.top = r + Math.sin(a) * s * r + 'px'; const rgb = hsvA(h, s).join(','); card.style.setProperty('--c', rgb); card.style.setProperty('--lc', `rgb(${rgb})`); const t = card.querySelector('[data-hs]'); if (t) t.textContent = `Hue ${Math.round(h)}° · Sat ${Math.round(s * 100)}%`; };
  place();
  let down = false, last = 0;
  const send = () => c.call('light', 'turn_on', { entity_id: id, hs_color: [Math.round(h), Math.round(s * 100)] });
  const pick = (e, commit) => { const r = pad.getBoundingClientRect(), R2 = r.width / 2, dx = e.clientX - (r.left + R2), dy = e.clientY - (r.top + R2); h = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360; s = clamp(Math.hypot(dx, dy) / R2, 0, 1); place(); const now = Date.now(); if (commit || now - last > 250) { last = now; send(); } };
  pad.addEventListener('pointerdown', e => { down = true; c._busy = true; pad.setPointerCapture(e.pointerId); pick(e); });
  pad.addEventListener('pointermove', e => down && pick(e));
  const end = e => { if (!down) return; down = false; pick(e, true); setTimeout(() => { c._busy = false; c._update(true); }, 400); };
  pad.addEventListener('pointerup', end); pad.addEventListener('pointercancel', () => { down = false; c._busy = false; });
  pad.addEventListener('keydown', e => { const k = e.key; if (k === 'ArrowLeft') h = (h + 355) % 360; else if (k === 'ArrowRight') h = (h + 5) % 360; else if (k === 'ArrowUp') s = clamp(s + .05, 0, 1); else if (k === 'ArrowDown') s = clamp(s - .05, 0, 1); else return; e.preventDefault(); place(); send(); });
  const sl = root.querySelector('.lc input.sl'); if (sl) sl.addEventListener('input', () => { const st = card.querySelector('.st'); if (st) st.textContent = `On · ${sl.value}%`; card.style.setProperty('--glow', `rgba(${getComputedStyle(card).getPropertyValue('--c')},${(0.14 + 0.36 * sl.value / 100).toFixed(3)})`); });
}

/* the colour wheel popup (hold a light tile) */
function openLightPopup(c) {
  const id = c.e, i = lightInfo(c, id); if (!i.s) return;
  document.querySelectorAll('nocturne-popup').forEach(n => n.remove());
  const host = document.createElement('nocturne-popup'), sr = host.attachShadow({ mode: 'open' });
  const color = i.caps === 'color', dim = i.caps !== 'onoff', hs = i.a.hs_color || [38, 60];
  sr.innerHTML = `<style>${CSS}
    .ov{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;background:rgba(4,6,14,.6);backdrop-filter:blur(10px)}
    .pop{--lc:${i.col};width:min(340px,100%);border-radius:32px;padding:20px;background:var(--n-card-bg),var(--card-background-color,#12162b);background-color:var(--card-background-color,#12162b);box-shadow:var(--n-card-shadow);display:grid;gap:16px;justify-items:center;color:var(--primary-text-color);font-family:var(--ha-font-family-body,Manrope,system-ui,sans-serif)}
    .ph{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px}.ph b{font:600 17px var(--n-font-display)}
    canvas{width:220px;height:220px;border-radius:50%;touch-action:none;cursor:crosshair;box-shadow:0 0 0 5px rgba(255,255,255,.12),0 16px 40px rgba(0,0,0,.5)}
    .x{border:0;background:none;color:inherit;cursor:pointer;padding:4px}</style>
    <div class="ov"><div class="pop" role="dialog" aria-modal="true" aria-label="${esc(c.title)}"><div class="ph"><b>${esc(c.title)}</b><span style="display:flex;gap:12px;align-items:center">${tgl(i.on, 'p-toggle')}<button class="x" data-x aria-label="Close">${icn('close', 22)}</button></span></div>
    ${color ? '<canvas width="440" height="440"></canvas>' : ''}${dim ? slider('', {}, 'b', i.lv, { label: 'Brightness' }).replace('data-sl=""', '') : ''}</div></div>`;
  document.body.appendChild(host);
  const close = () => host.remove(); sr.querySelector('.ov').addEventListener('click', e => { if (e.target.classList.contains('ov') || e.target.closest('[data-x]')) close(); });
  sr.querySelector('.nctog').addEventListener('click', () => c.call('light', i.on ? 'turn_off' : 'turn_on', { entity_id: id }));
  const sl = sr.querySelector('input.sl'); if (sl) { sl.addEventListener('input', () => sl.style.setProperty('--p', sl.value + '%')); sl.addEventListener('change', () => c.call('light', 'turn_on', { entity_id: id, brightness_pct: +sl.value })); }
  const cv = sr.querySelector('canvas'); if (cv) {
    const S = 220, d = 2, ctx = cv.getContext('2d'), R = S / 2 * d; ctx.scale(1, 1);
    const draw = (h, s) => { const img = ctx.createImageData(cv.width, cv.height); for (let y = 0; y < cv.height; y++) for (let x = 0; x < cv.width; x++) { const dx = x - R, dy = y - R, r = Math.hypot(dx, dy); if (r > R) continue; const hh = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360, ss = r / R, k = (n => { const q = (n + hh / 60) % 6; return 1 - ss * Math.max(0, Math.min(q, 4 - q, 1)); }), p = (y * cv.width + x) * 4; img.data[p] = k(5) * 255; img.data[p + 1] = k(3) * 255; img.data[p + 2] = k(1) * 255; img.data[p + 3] = 255; } ctx.putImageData(img, 0, 0);
      const a = h * Math.PI / 180, mx = R + Math.cos(a) * s * R, my = R + Math.sin(a) * s * R; ctx.beginPath(); ctx.arc(mx, my, 14, 0, 7); ctx.lineWidth = 5; ctx.strokeStyle = '#fff'; ctx.stroke(); };
    draw(hs[0], hs[1] / 100);
    let last = 0; const pick = (ev, commit) => { const b = cv.getBoundingClientRect(), x = (ev.clientX - b.left) / b.width * 2 - 1, y = (ev.clientY - b.top) / b.height * 2 - 1, s = Math.min(1, Math.hypot(x, y)), h = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360; draw(h, s); const now = Date.now(); if (commit || now - last > 250) { last = now; c.call('light', 'turn_on', { entity_id: id, hs_color: [Math.round(h), Math.round(s * 100)] }); } };
    let down = false; cv.addEventListener('pointerdown', e => { down = true; cv.setPointerCapture(e.pointerId); pick(e); }); cv.addEventListener('pointermove', e => down && pick(e)); cv.addEventListener('pointerup', e => { down = false; pick(e, true); });
  }
  document.addEventListener('keydown', function esc_(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc_); } });
}

/* ----- switch / input_boolean / valve ----- */
const swOn = s => ['on', 'open', 'opening'].includes(s);
kind({
  id: 'switch', square: () => true, name: 'Switch', domains: ['switch', 'input_boolean', 'valve', 'automation', 'script'], icon: 'power', grid: { columns: 6, rows: 3 }, tap: { action: 'toggle' }, hold: { action: 'more-info' },
  opts: [SIZE, { k: 'accent', l: 'Accent colour', t: 'seg', o: [['accent', 'Accent'], ['water', 'Water'], ['air', 'Air'], ['warm', 'Warm']], d: 'accent' }, SHOW_STATE, ...SWITCH_OPTS],
  after: sxAfter,
  render(c) { const on = swOn(c.st(c.e)), valve = dom(c.e) === 'valve'; return tile(c, { cls: c.o.accent, on, lit: on, sub: c.o.show_state ? (valve ? (on ? 'Open' : 'Closed') : (on ? 'On' : 'Off')) : '' }); },
});

/* ----- fan ----- */
kind({
  id: 'fan', square: () => true, name: 'Fan', domains: ['fan'], icon: 'fan', grid: { columns: 6, rows: 3 }, tap: { action: 'toggle' }, hold: { action: 'more-info' },
  opts: [SIZE, { k: 'accent', l: 'Accent colour', t: 'seg', o: [['air', 'Air'], ['water', 'Water'], ['accent', 'Accent']], d: 'air' }, { k: 'steps', l: 'Speed control', t: 'seg', o: [['smooth', 'Smooth %'], ['3', '3 steps'], ['off', 'Hidden']], d: 'smooth' }, SHOW_STATE, ...SWITCH_OPTS],
  after: sxAfter,
  render(c) {
    const on = c.st(c.e) === 'on', o = c.o, pc = num(c.at(c.e, 'percentage')) ?? (on ? 100 : 0), sp = o.steps === '3' ? (Math.round(pc / 33) * 33 || 33) : Math.max(1, pc);
    const can = (num(c.at(c.e, 'supported_features')) || 0) & 1;
    return tile(c, { cls: o.accent + (on ? ' spin' : ''), on, lit: on, style: `--spd:${(2.2 - sp / 60).toFixed(2)}s`, sub: o.show_state ? (on ? pc + '%' : 'Off') : '', slider: o.steps !== 'off' && can ? slider('fan.set_percentage', { entity_id: c.e }, 'percentage', sp, { step: o.steps === '3' ? 33 : 1, min: o.steps === '3' ? 33 : 1, label: 'Speed', dis: !on }) : '' });
  },
});

/* ----- cover ----- */
kind({
  id: 'cover', square: () => true, name: 'Cover', domains: ['cover'], icon: 'garage', grid: { columns: 6, rows: 3 }, tap: { action: 'more-info' }, hold: { action: 'more-info' },
  opts: [SIZE, { k: 'slider', l: 'Position slider (if the device supports it)', t: 'sw', d: true }],
  toggle: (c, id) => c.call('cover', 'toggle', { entity_id: id }),
  render(c) {
    const o = c.o, s = c.st(c.e), pos = num(c.at(c.e, 'current_position')), feat = num(c.at(c.e, 'supported_features')) || 0, wide = o.size === 'wide', open = s !== 'closed';
    const bt = (svc, ic, l) => `<button class="ncround" style="width:40px;height:40px" ${svcAttr('cover.' + svc, { entity_id: c.e })} aria-label="${l}">${icn(ic, 22)}</button>`;
    const state = s === 'opening' ? 'Opening' : s === 'closing' ? 'Closing' : pos != null && pos > 0 && pos < 100 ? `Open ${pos}%` : open ? 'Open' : 'Closed';
    const sl = o.slider && (feat & 4) && pos != null;
    return `<div class="nc accent ${wide ? 'wide' : ''} ${open ? 'on' : ''}" style="--rows:${sl ? 4 : 3}">${imgLayer(c)}<div class="in" style="display:flex;flex-direction:column;justify-content:space-between;gap:8px"><span class="ic ${open ? 'lit' : ''}" data-act="more-info">${icn(c.icon)}</span><div><div class="nm"><b>${esc(c.title)}</b><span>${state}</span></div><div style="display:flex;gap:8px;justify-content:${wide ? 'flex-start' : 'space-between'};margin:10px 0 ${sl ? 8 : 0}px">${feat & 1 ? bt('open_cover', 'chevron-up', 'Open') : ''}${feat & 8 ? bt('stop_cover', 'stop', 'Stop') : ''}${feat & 2 ? bt('close_cover', 'chevron-down', 'Close') : ''}</div>${sl ? slider('cover.set_cover_position', { entity_id: c.e }, 'position', pos, { min: 0, label: 'Position' }) : ''}</div></div></div>`;
  },
  gridFor: c => ({ columns: c.o.size === 'wide' ? 12 : 6, rows: c.o.slider ? 4 : 3 }),
});

/* ----- sensor ----- */
kind({
  id: 'sensor', square: () => true, name: 'Sensor', domains: ['sensor', 'binary_sensor', 'input_number', 'number'], icon: 'thermometer', grid: { columns: 6, rows: 3 }, tap: { action: 'more-info' }, hold: { action: 'more-info' },
  opts: [{ k: 'variant', l: 'Layout', t: 'seg', o: [['auto', 'Auto'], ['temp', 'Temperature'], ['value', 'Plain value']], d: 'auto' }, { k: 'secondary_entity', l: 'Secondary entity (e.g. humidity)', t: 'entity', domains: ['sensor'] }, { k: 'bar', l: 'Show bar for the secondary value', t: 'sw', d: true }],
  extraIds: c => [c.cfg.secondary_entity],
  render(c) {
    const o = c.o, s = c.S(c.e), a = (s && s.attributes) || {}, dc = a.device_class; let v = o.variant; if (v === 'auto') v = dc === 'temperature' ? 'temp' : 'value';
    const val = s ? (num(s.state) != null ? (Math.round(num(s.state) * 10) / 10) : s.state) : '–', unit = a.unit_of_measurement || '';
    if (v === 'value') return `<div class="nc sens" style="--rows:3">${imgLayer(c)}<div class="in"><div class="top"><span class="ic" data-act="more-info">${icn(c.icon)}</span></div><div class="nm"><div class="big">${esc(val)}<small>${esc(unit)}</small></div><b style="margin-top:6px">${esc(c.title)}</b></div><div></div></div></div>`;
    const sec = o.secondary_entity && c.S(o.secondary_entity), h = sec ? num(sec.state) : null;
    return `<div class="nc sens" style="--rows:3">${imgLayer(c)}<div class="in"><div class="top"><span class="ic" data-act="more-info">${icn(c.cfg.icon || 'thermometer')}</span><div class="big">${esc(val)}<small>${esc(unit || '°C')}</small></div></div><div class="nm"><b>${esc(c.title)}</b></div><div class="bot">${h != null ? `${o.bar ? `<div class="bar" style="height:6px"><i style="width:${clamp(h, 0, 100)}%"></i></div>` : ''}<div style="display:flex;justify-content:space-between;font-size:11.5px;color:var(--secondary-text-color);align-items:center">${icn('water', 12)}<span>${Math.round(h)}${esc((sec.attributes || {}).unit_of_measurement || '%')}</span></div>` : ''}</div></div></div>`;
  },
});

/* ----- camera ----- */
kind({
  id: 'camera', name: 'Camera', domains: ['camera'], icon: 'cctv', grid: { columns: 12, rows: 3 }, tap: { action: 'more-info' }, hold: { action: 'more-info' }, noImage: true,
  opts: [{ k: 'aspect', l: 'Shape', t: 'seg', o: [['wide', '16:9'], ['sq', 'Square'], ['tall', '4:3']], d: 'wide' }, { k: 'show_name', l: 'Show name', t: 'sw', d: true }, { k: 'live', l: 'Live badge', t: 'sw', d: true }],
  gridFor: c => ({ columns: c.o.aspect === 'sq' ? 6 : 12, rows: c.o.aspect === 'sq' ? 3 : c.o.aspect === 'tall' ? 4 : 3 }),
  sig: c => Math.floor(Date.now() / 10000),
  render(c) {
    const o = c.o, pic = c.at(c.e, 'entity_picture'), ratio = { wide: '16/9', sq: '1/1', tall: '4/3' }[o.aspect];
    return `<div class="nc cam" style="--rows:3;aspect-ratio:${ratio};height:auto;min-height:0"><div class="view" ${pic ? `style="background:url('${esc(c.url(pic))}') center/cover"` : ''}>${pic ? '' : `<span style="position:absolute;inset:0;display:grid;place-items:center;opacity:.4">${icn('cctv', 48)}</span>`}</div>${o.live ? '<span class="live"><i></i>LIVE</span>' : ''}${o.show_name ? `<div class="lab">${esc(c.title)}</div>` : ''}</div>`;
  },
});

/* ----- quick actions (scenes, scripts, buttons) ----- */
kind({
  id: 'actions', name: 'Quick actions', title: 'Quick Actions', domains: ['scene', 'script', 'button', 'input_button'], multi: true, icon: 'flash', grid: { columns: 12, rows: 3 }, tap: { action: 'none' }, hold: { action: 'none' },
  opts: [{ k: 'labels', l: 'Show labels', t: 'sw', d: true }, { k: 'columns', l: 'Buttons per row', t: 'seg', o: [['2', '2'], ['3', '3'], ['4', '4'], ['5', '5']], d: '4' }],
  gridFor: c => ({ columns: 12, rows: Math.ceil(Math.max(1, c.list().length) / (+c.o.columns || 4)) * 2 + 2 }),
  render(c) {
    const o = c.o, items = c.list(), cols = +o.columns || 4, iconFor = e => ({ scene: 'palette', script: 'script-text-play', button: 'gesture-tap-button', input_button: 'gesture-tap-button' }[dom(e)] || 'flash');
    const act = e => { const d = dom(e); return d === 'button' || d === 'input_button' ? [d, 'press'] : [d, 'turn_on']; };
    const btns = items.map(it => { const [d, s] = act(it.entity), nm = it.name || c.fname(it.entity); return `<button class="ncscene" ${svcAttr(d + '.' + s, { entity_id: it.entity })} aria-label="${esc(nm)}"><span class="c">${icn(it.icon || c.at(it.entity, 'icon') || iconFor(it.entity), 22)}</span>${o.labels ? esc(nm) : ''}</button>`; }).join('');
    return bcard(c, { name: c.title, icon: c.cfg.icon || 'flash', iconAct: false, label: '', rows: c.k.gridFor(c).rows, ctl: `<div class="ncgrid" style="grid-template-columns:repeat(${cols},1fr)">${btns}</div>` });
  },
});

/* ============ climate ============ */
const CLIMATE_RGB = { heat: '255,110,60', cool: '50,165,255', dry: '40,210,160', auto: '140,120,255', heat_cool: '140,120,255', fan_only: '80,200,255' };
const rndBtn = (icon, onclick, color) => `<button class="ncround" aria-label="${icon}" style="${color ? 'color:' + color : ''}" onclick="${onclick}">${icn(icon, 19)}</button>`;
kind({
  id: 'climate', square: c => c.variant === 'compact', name: 'Climate', domains: ['climate'], icon: 'thermostat', grid: { columns: 12, rows: 5 }, tap: { action: 'none' }, hold: { action: 'more-info' },
  opts: [{ k: 'variant', l: 'Layout', t: 'seg', o: [['dial', 'Dial'], ['compact', 'Compact']], d: 'dial' }, { k: 'side', l: 'Mode, fan, indoor and humidity column', t: 'sw', d: true }, { k: 'dial_size', l: 'Dial size', t: 'range', min: 140, max: 210, u: 'px', d: 210 }, { k: 'step', l: 'Temperature step', t: 'seg', o: [['0.5', '0.5°'], ['1', '1°']], d: '1' }, ...switchOpts(c => c.variant === 'compact')],
  after(c, root) { sxAfter(c, root); },
  gridFor: c => c.o.variant === 'compact' ? { columns: 6, rows: 3 } : { columns: 12, rows: 5 },
  render(c) {
    const id = c.e, s = c.S(id); if (!s) return bcard(c, { name: c.title, label: 'Entity not found', rows: 3, wide: false });
    const rgb = CLIMATE_RGB[s.state], g = glow(rgb, 0.3, 0.2), a = s.attributes, on = s.state !== 'off';
    if (c.o.variant === 'compact') {
      const modes = ['auto', 'cool', 'heat'].filter(m => (a.hvac_modes || ['auto', 'cool', 'heat']).includes(m)), MI = { auto: ['thermostat-auto', '#6ee7a8'], cool: ['snowflake', '#5ac8fa'], heat: ['fire', '#ff9248'], dry: ['water-percent', '#22c997'] };
      const t = a.temperature, label = on ? `${s.state === 'heat' ? 'Heating to' : s.state === 'cool' ? 'Cooling to' : 'Set to'} ${t ?? '–'}°C` : `Off · ${a.current_temperature ?? '–'}°C indoors`;
      const buttons = `<div class="ncgrid" style="grid-template-columns:repeat(${modes.length},1fr);justify-items:center">${modes.map(m => `<button class="ncround" style="${s.state === m ? `color:#fff;background:${MI[m][1]}` : ''}" aria-label="${m}" ${svcAttr(s.state === m ? 'climate.turn_off' : 'climate.set_hvac_mode', s.state === m ? { entity_id: id } : { entity_id: id, hvac_mode: m })}>${icn(MI[m][0], 19)}</button>`).join('')}</div>`;
      if (c.o.switch_style && c.o.switch_style !== 'standard') return sxTile(c, { cls: 'cl', on, style: `--lc:${rgb ? `rgb(${rgb})` : 'var(--n-warm)'}`, face: `<div class="hd"><span class="ic ${on ? 'lit' : ''}" data-act="more-info" role="button" tabindex="0" aria-label="More info">${icn(c.icon)}</span><div class="nm"><b>${esc(c.title)}</b><span style="${on ? 'color:var(--n-ok)' : ''}">${label}</span></div></div><div class="slw" style="margin-top:auto">${buttons}</div>` });
      return bcard(c, { name: c.title, icon: c.icon, iconColor: on ? 'var(--accent-color)' : undefined, label, labelColor: on ? 'var(--n-ok)' : undefined, tog: tgl(on, 'toggle', id), rows: 3, wide: false, bg: g.bg, shadow: g.shadow,
        ctl: buttons });
    }
    const step = parseFloat(c.o.step), t = a.temperature ?? a.min_temp ?? 21, mn = a.min_temp ?? 16, mx = a.max_temp ?? 31, vars = { dial: +c.o.dial_size };
    const label = on ? `${({ heat: 'Heating to', cool: 'Cooling to', dry: 'Drying at', auto: 'Auto at', heat_cool: 'Auto at', fan_only: 'Fan at' })[s.state] || s.state} ${t}°C` : `Off · set to ${t}°C`;
    const H = "document.querySelector('home-assistant').hass";
    return bcard(c, { name: c.title, icon: false, center: true, label, labelColor: on ? 'var(--n-ok)' : 'var(--secondary-text-color)', rows: 5, wide: true, bg: g.bg, shadow: g.shadow,
      areas: "'left dial up' 'left dial down' 'left dial pwr' 'n n n' 'l l l'", cols: '60px 1fr 60px', trows: '1fr 1fr 1fr auto auto', gridCss: 'row-gap:0;',
      fields: {
        left: c.o.side ? climateLeft(s, vars) : '', dial: climateDial(s, vars),
        up: rndBtn('plus', `${H}.callService('climate','set_temperature',{entity_id:'${id}',temperature:Math.min(${mx},${t}+${step})})`),
        down: rndBtn('minus', `${H}.callService('climate','set_temperature',{entity_id:'${id}',temperature:Math.max(${mn},${t}-${step})})`),
        pwr: rndBtn('power', `${H}.callService('climate','${on ? 'turn_off' : 'turn_on'}',{entity_id:'${id}'})`, on ? 'var(--accent-color)' : ''),
      },
      fieldCss: { left: 'align-self:center;justify-self:start;overflow:visible;position:relative;z-index:6;', dial: 'align-self:center;width:100%;padding:4px 0;overflow:visible;', up: 'justify-self:end;align-self:center;', down: 'justify-self:end;align-self:center;', pwr: 'justify-self:end;align-self:center;' } });
  },
});

/* ============ media player ============ */
const ART_MODES = { off: null, sharp: { op: 100, blur: 0, fade: false }, soft: { op: 55, blur: 0, fade: true }, blurred: { op: 75, blur: 18, fade: true } };
function artLayer(c, id) {
  const m = ART_MODES[c.o.artwork], pic = c.at(id, 'entity_picture'); if (!m || !pic) return '';
  return `<div class="imglayer ${m.fade ? 'fade' : ''}" style="background-image:url('${esc(c.url(pic))}');background-size:cover;background-position:center;opacity:${m.op / 100};filter:blur(${m.blur}px)${m.blur ? ';transform:scale(1.15)' : ''}"></div>`;
}
/* which player does the card start on? the one belonging to this device (Kiosk Satellite), else the pinned one */
function resolvePlayer(c) {
  const o = c.o, list = (o.players && o.players.length ? o.players : [c.e]).filter(p => c.S(p)), dn = (c._device || '').toLowerCase();
  if (o.start === 'last' && c._last && list.includes(c._last)) return { id: c._last, why: 'last used' };
  if (o.start === 'local' && dn) { const slug = dn.replace(/[^a-z0-9]+/g, '_'); const hit = list.find(p => c.fname(p).toLowerCase() === dn || first(p) === slug || first(p).startsWith(slug)); if (hit) return { id: hit, why: 'this device' }; }
  const pin = list.includes(o.pinned_player) ? o.pinned_player : (list.includes(c.e) ? c.e : list[0]);
  return { id: pin, why: 'pinned' };
}
kind({
  id: 'media', name: 'Media player', domains: ['media_player'], icon: 'speaker', grid: { columns: 12, rows: 3 }, tap: { action: 'none' }, hold: { action: 'none' },
  opts: [{ k: 'variant', l: 'Layout', t: 'seg', o: [['compact', 'Compact tile'], ['full', 'Full player']], d: 'compact' }, { k: 'volume', l: 'Volume slider', t: 'sw', d: true }, { k: 'shuffle', l: 'Shuffle and repeat buttons', t: 'sw', d: true }, { k: 'spin', l: 'Rotate the artwork while playing (tile button and full player)', t: 'sw', d: true },
    { k: 'icon_artwork', l: 'Show the artwork in the top-left button', t: 'sw', d: false },
    { k: 'artwork', l: 'Artwork as background', t: 'seg', o: [['off', 'Off'], ['sharp', 'Sharp'], ['soft', 'Soft'], ['blurred', 'Blurred']], d: 'off' },
    { k: 'players', l: 'Players this card can offer', t: 'entity', domains: ['media_player'], multi: true }, { k: 'pinned_player', l: 'Pinned player', t: 'entity', domains: ['media_player'] },
    { k: 'start', l: 'Start on', t: 'seg', o: [['local', 'This device'], ['pinned', 'Pinned player'], ['last', 'Last used']], d: 'local' }],
  gridFor: c => c.o.variant === 'full' && customElements.get('nocturne-music-card') ? { columns: 12, rows: 11 } : { columns: 12, rows: 3 },
  extraIds: c => (c.o.players || []).concat(c.o.pinned_player),
  sig: c => c._device || '',
  connect(c) { if (c._deviceAsked) return; c._deviceAsked = true; try { const ks = window.kioskSatellite; const r = ks && ks.getDeviceInfo && ks.getDeviceInfo(); Promise.resolve(r).then(i => { const n = i && (i.name || i.deviceName); if (n) { c._device = n; c._update(true); } }).catch(() => {}); } catch (_) {} },
  render(c) {
    const o = c.o, r = resolvePlayer(c), id = r.id || c.e, s = c.S(id), a = (s && s.attributes) || {}; c._resolved = id;
    if (o.variant === 'full' && customElements.get('nocturne-music-card')) return `<div class="mc" style="--rows:11;min-height:695px;height:100%;position:relative"></div>`;
    const play = s && s.state === 'playing', on = s && !['off', 'unavailable'].includes(s.state);
    const label = a.media_title ? `${esc(a.media_title)}${a.media_artist ? ' · ' + esc(a.media_artist) : ''}` : esc(nice(s ? s.state : 'unavailable'));
    const T = (svc, ic, col) => round(ic, 'media_player.' + svc, { entity_id: id }, col);
    const pic = a.entity_picture, art = o.icon_artwork && pic ? `<div style="width:100%;height:100%;border-radius:50%;background:url('${esc(c.url(pic))}') center/cover;animation:ncspin 12s linear infinite;animation-play-state:${play && o.spin ? 'running' : 'paused'}"></div>` : '';
    return bcard(c, { name: c.cfg.name || (s ? c.fname(id) : c.title), icon: c.cfg.icon || a.icon || c.k.icon, iconHtml: art, iconColor: play ? 'var(--accent-color)' : undefined, label, tog: tgl(on, 'toggle', id), rows: 3, wide: true, image: undefined, areas: "'i tr tog' 'n n n' 'l l l' 'ctl ctl ctl'", cols: 'auto 1fr auto',
      fields: { tr: `<div style="display:flex;gap:6px">${T('media_previous_track', 'skip-previous')}${T('media_play_pause', play ? 'pause' : 'play', 'var(--accent-color)')}${T('media_next_track', 'skip-next')}</div>` }, fieldCss: { tr: 'justify-self:center;align-self:center;' },
      ctl: (() => {
        const feat = num(a.supported_features) || 0, canShuf = o.shuffle && (a.shuffle !== undefined || (feat & 32768)), canRep = o.shuffle && (a.repeat !== undefined || (feat & 262144));
        const sm = (icon, svc, data, on, label) => `<button class="ncround" style="width:34px;height:34px;${on ? 'color:var(--accent-color)' : ''}" aria-label="${label}" aria-pressed="${!!on}" ${svcAttr('media_player.' + svc, data)}>${icn(icon, 17)}</button>`;
        const rep = a.repeat || 'off', nextRep = { off: 'all', all: 'one', one: 'off' }[rep] || 'all';
        const shuf = canShuf ? sm(a.shuffle ? 'shuffle' : 'shuffle-disabled', 'shuffle_set', { entity_id: id, shuffle: !a.shuffle }, a.shuffle, 'Shuffle') : '';
        const rp = canRep ? sm(rep === 'one' ? 'repeat-once' : rep === 'all' ? 'repeat' : 'repeat-off', 'repeat_set', { entity_id: id, repeat: nextRep }, rep !== 'off', 'Repeat') : '';
        const vol = o.volume ? `<div class="ncmslider" style="flex:1;min-width:0">${slider('media_player.volume_set', { entity_id: id }, 'volume_level', Math.round((a.volume_level || 0) * 100), { min: 0, scale: 0.01, label: 'Volume' })}</div>` : '<div style="flex:1"></div>';
        return shuf || rp || o.volume ? `<div style="display:flex;align-items:center;gap:8px">${shuf}${vol}${rp}</div>` : '';
      })() }).replace('<div class="grid"', `${artLayer(c, id)}<div class="grid"`);
  },
  after(c, root) {
    const host = root.querySelector('.mc'); if (!host) return;
    const o = c.o, id = c._resolved, sig = JSON.stringify([id, o.players, o.volume, o.shuffle, o.spin]);
    if (!c._mc) { c._mc = document.createElement('nocturne-music-card'); c._mc.style.cssText = 'display:block;height:100%'; c._mcSig = ''; }
    host.appendChild(c._mc);
    if (c._mcSig !== sig) { c._mcSig = sig; try { localStorage.removeItem('nmc:' + id); } catch (_) {} c._mc.setConfig({ entity: id, speakers: o.players && o.players.length ? o.players : [id], show_volume: o.volume, show_shuffle_repeat: o.shuffle, spin_art: o.spin, library_only: true }); }
    c._mc.hass = c._hass;
    const card = c._mc.shadowRoot && c._mc.shadowRoot.querySelector('.card'), art = c.at(id, 'entity_picture'), m = ART_MODES[o.artwork];
    if (card && m && art && !card.querySelector('.nkbg')) card.insertAdjacentHTML('afterbegin', `<div class="nkbg" style="position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden;border-radius:inherit"><div style="position:absolute;inset:${m.blur ? '-12%' : '0'};background:url('${esc(c.url(art))}') center/cover no-repeat;opacity:${m.op / 100};filter:blur(${m.blur}px)"></div>${m.fade ? '<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,12,28,.15),rgba(10,12,28,.82))"></div>' : ''}</div>`);
  },
});

/* ============ alarm panel ============ */
const chip = (ic, lab, col, id) => `<button class="ncchip" ${id ? `data-act="more-info" data-e="${esc(id)}"` : ''}><span class="c" style="color:${col}">${icn(ic, 17)}</span><span class="cl">${esc(lab)}</span></button>`;
kind({
  id: 'alarm', name: 'Alarm panel', domains: ['alarm_control_panel'], icon: 'shield-check-outline', grid: { columns: 12, rows: 4 }, tap: { action: 'more-info' }, hold: { action: 'more-info' },
  opts: [{ k: 'lock_entity', l: 'Lock chip', t: 'entity', domains: ['lock'] }, { k: 'door_entity', l: 'Door chip', t: 'entity', domains: ['binary_sensor'] }, { k: 'presence_entity', l: 'Presence chip', t: 'entity', domains: ['binary_sensor'] }, { k: 'camera_entity', l: 'Camera chip', t: 'entity', domains: ['camera'] }, { k: 'presence_label', l: 'Presence chip label', t: 'text' }, { k: 'camera_label', l: 'Camera chip label', t: 'text' },
    { k: 'arm', l: 'Arm / disarm buttons', t: 'sw', d: false }, { k: 'code', l: 'Alarm code (stored in the dashboard, so only use if you accept that)', t: 'text' }],
  gridFor: c => ({ columns: 12, rows: c.o.arm ? 5 : 4 }),
  render(c) {
    const o = c.o, s = c.st(c.e) || 'unknown', armed = s.startsWith('armed'), trig = s === 'triggered', pend = s === 'arming' || s === 'pending';
    const rgb = trig ? '255,90,100' : armed ? '70,225,165' : pend ? '255,196,90' : null, g = glow(rgb, trig ? .42 : .24, .2);
    const LAB = { disarmed: 'Disarmed', armed_home: 'Armed · home', armed_away: 'Armed · away', armed_night: 'Armed · night', armed_vacation: 'Armed · vacation', arming: 'Arming…', pending: 'Entry delay', triggered: 'Triggered' };
    const chips = [];
    if (o.lock_entity) { const l = c.st(o.lock_entity) === 'locked'; chips.push(chip(l ? 'lock' : 'lock-open-variant', l ? 'Locked' : 'Unlocked', l ? 'var(--n-ok)' : 'var(--n-warn)', o.lock_entity)); }
    if (o.door_entity) { const d = c.st(o.door_entity) === 'on'; chips.push(chip(d ? 'door-open' : 'door-closed', d ? 'Door open' : 'Door shut', d ? 'var(--n-warn)' : 'var(--secondary-text-color)', o.door_entity)); }
    if (o.presence_entity) { const p = c.st(o.presence_entity) === 'on'; chips.push(chip('motion-sensor', o.presence_label || c.fname(o.presence_entity).replace(/ (area )?(state|presence|occupancy)$/i, ''), p ? 'var(--accent-color)' : 'var(--secondary-text-color)', o.presence_entity)); }
    if (o.camera_entity) chips.push(chip('cctv', o.camera_label || c.fname(o.camera_entity).split(/[ -]/)[0], 'var(--secondary-text-color)', o.camera_entity));
    const code = o.code ? { code: o.code } : {};
    const arm = o.arm ? `<div style="display:flex;gap:6px;margin-top:10px">${[['alarm_disarm', 'Disarm', 'disarmed'], ['alarm_arm_home', 'Home', 'armed_home'], ['alarm_arm_away', 'Away', 'armed_away'], ['alarm_arm_night', 'Night', 'armed_night']].map(m => `<button class="btn" aria-pressed="${s === m[2]}" ${svcAttr('alarm_control_panel.' + m[0], Object.assign({ entity_id: c.e }, code))}>${m[1]}</button>`).join('')}</div>` : '';
    return bcard(c, { name: c.title, icon: c.icon, iconColor: trig ? 'var(--n-bad)' : armed ? 'var(--n-ok)' : undefined, iconFilter: armed ? 'drop-shadow(0 0 6px var(--n-ok))' : undefined, label: LAB[s] || nice(s), labelColor: armed ? 'var(--n-ok)' : undefined, rows: o.arm ? 5 : 4, wide: true, bg: g.bg, shadow: g.shadow, anim: trig ? 'ncpulse 1.2s ease-in-out infinite' : '',
      ctl: (chips.length ? `<div class="ncgrid" style="grid-template-columns:repeat(${Math.max(chips.length, 4)},1fr)">${chips.join('')}</div>` : '') + arm });
  },
});

/* ============ lock ============ */
kind({
  id: 'lock', square: () => true, name: 'Lock', domains: ['lock'], icon: 'lock', grid: { columns: 6, rows: 3 }, tap: { action: 'none' }, hold: { action: 'more-info' },
  opts: [{ k: 'show_battery', l: 'Show battery in the label', t: 'sw', d: true }, { k: 'battery_entity', l: 'Battery sensor (if not an attribute of the lock)', t: 'entity', domains: ['sensor'] }, { k: 'confirm', l: 'Ask before locking or unlocking', t: 'sw', d: true }],
  extraIds: c => [c.o.battery_entity],
  toggle(c, id) { const l = c.st(id) === 'locked'; if (c.o.confirm && !window.confirm(`${l ? 'Unlock' : 'Lock'} ${c.title}?`)) return; c.call('lock', l ? 'unlock' : 'lock', { entity_id: id }); },
  render(c) {
    const s = c.st(c.e), locked = s === 'locked', unl = s === 'unlocked', a = (c.S(c.e) || {}).attributes || {}, bat = c.o.battery_entity ? num(c.st(c.o.battery_entity)) : a.battery_level;
    const g = glow(unl ? '255,190,90' : locked ? '70,225,165' : null, locked ? .12 : .24, .16);
    return bcard(c, { name: c.title, icon: c.cfg.icon || (locked ? 'lock' : 'lock-open-variant'), iconColor: locked ? 'var(--n-ok)' : 'var(--n-warn)', iconFilter: locked ? 'drop-shadow(0 0 6px var(--n-ok))' : '', label: `${locked ? 'Locked' : unl ? 'Unlocked' : nice(s || 'unknown')}${c.o.show_battery && bat != null ? ' · battery ' + bat + '%' : ''}`, tog: tgl(locked, 'toggle', c.e), areas: "'i tog' 'n n' 'l l'", trows: 'auto 1fr auto', rows: 3, bg: g.bg, shadow: g.shadow });
  },
});

/* ============ vacuum ============ */
kind({
  id: 'vacuum', square: () => true, name: 'Vacuum', domains: ['vacuum'], icon: 'robot-vacuum', grid: { columns: 6, rows: 3 }, tap: { action: 'none' }, hold: { action: 'more-info' },
  opts: [{ k: 'battery_entity', l: 'Battery sensor (if not an attribute)', t: 'entity', domains: ['sensor'] }, { k: 'bin_entity', l: 'Bin full sensor', t: 'entity', domains: ['binary_sensor'] }, { k: 'ring', l: 'Battery ring around the icon', t: 'sw', d: true }, { k: 'buttons', l: 'Start and Dock buttons', t: 'sw', d: true }],
  extraIds: c => [c.o.battery_entity, c.o.bin_entity],
  render(c) {
    const s = c.st(c.e) || 'unknown', o = c.o, bat = num(o.battery_entity ? c.st(o.battery_entity) : c.at(c.e, 'battery_level')), clean = s === 'cleaning', bin = o.bin_entity ? c.st(o.bin_entity) === 'on' : null;
    const ring = o.ring && bat != null ? `radial-gradient(closest-side, var(--card-background-color) 80%, transparent 82%), conic-gradient(var(--n-ok) ${bat}%, var(--n-well) 0)` : undefined;
    const lab = `${bat != null ? Math.round(bat) + '%' : nice(s)}${bin == null ? '' : bin ? ' · bin full' : ' · bin ok'}`;
    return bcard(c, { name: c.title, icon: c.icon, iconBg: ring, iconColor: clean ? 'var(--accent-color)' : undefined, label: lab, tog: `<span class="pill" style="color:${clean ? 'var(--accent-color)' : s === 'error' ? 'var(--n-bad)' : 'var(--n-ok)'}">${esc(s)}</span>`, rows: 3,
      ctl: o.buttons ? `<div class="ncgrid" style="grid-template-columns:1fr 1fr"><button class="ncpill pri" ${svcAttr('vacuum.' + (clean ? 'pause' : 'start'), { entity_id: c.e })}>${icn(clean ? 'pause' : 'play', 14)}${clean ? 'Pause' : 'Start'}</button><button class="ncpill" ${svcAttr('vacuum.return_to_base', { entity_id: c.e })}>${icn('home-import-outline', 14)}Dock</button></div>` : '' });
  },
});

/* ============ vehicle ============ */
kind({
  id: 'vehicle', square: () => true, name: 'Vehicle', domains: ['sensor'], icon: 'car-electric', grid: { columns: 6, rows: 3 }, tap: { action: 'more-info' }, hold: { action: 'more-info' },
  opts: [{ k: 'range_entity', l: 'Range sensor', t: 'entity', domains: ['sensor'] }, { k: 'lock_entity', l: 'Lock', t: 'entity', domains: ['lock'] }, { k: 'charging_entity', l: 'Charging sensor', t: 'entity', domains: ['binary_sensor'] }, { k: 'time_entity', l: 'Charge time remaining sensor', t: 'entity', domains: ['sensor'] }, { k: 'show_range', l: 'Show range and lock state', t: 'sw', d: true }, { k: 'bar', l: 'Battery bar', t: 'sw', d: true }],
  extraIds: c => [c.o.range_entity, c.o.lock_entity, c.o.charging_entity, c.o.time_entity],
  render(c) {
    const o = c.o, b = Math.round(num(c.st(c.e)) || 0), ch = o.charging_entity && c.st(o.charging_entity) === 'on', t = o.time_entity ? c.st(o.time_entity) : '';
    const rng = o.range_entity ? c.st(o.range_entity) : null, lk = o.lock_entity ? c.st(o.lock_entity) : null, ru = (c.at(o.range_entity, 'unit_of_measurement')) || 'km';
    const lab = o.show_range ? [rng != null ? `${Math.round(num(rng) ?? 0)} ${ru}` : '', lk ? (lk === 'locked' ? 'locked' : 'unlocked') : ''].filter(Boolean).join(' · ') : '';
    return bcard(c, { name: c.title, icon: c.icon, iconBg: `radial-gradient(closest-side, var(--card-background-color) 80%, transparent 82%), conic-gradient(${b < 20 ? 'var(--n-bad)' : 'var(--n-ok)'} ${b}%, var(--n-well) 0)`, iconColor: ch ? 'var(--accent-color)' : undefined, iconFilter: ch ? 'drop-shadow(0 0 6px var(--n-glow))' : '', label: lab, tog: `<span class="pill" style="color:${ch ? 'var(--accent-color)' : 'var(--secondary-text-color)'}">${ch ? 'Charging' : 'Parked'}</span>`, rows: 3,
      ctl: o.bar ? barRow(b, `${b}%${ch && t && !BAD_STATES.includes(t) ? ' · ' + esc(t) : ''}`) : '' });
  },
});

/* ============ plants ============ */
kind({
  id: 'plants', name: 'Plants', title: 'Plants', domains: ['plant'], multi: true, icon: 'sprout', grid: { columns: 6, rows: 4 }, tap: { action: 'none' }, hold: { action: 'none' },
  opts: [{ k: 'summary', l: 'Summary line', t: 'sw', d: true }],
  gridFor: c => ({ columns: 6, rows: 2 + Math.ceil(Math.max(2, c.list().length) * 0.75) }),
  render(c) {
    const items = c.list(), bad = items.filter(p => c.st(p.entity) === 'problem').length;
    const rows = items.map(p => { const s = c.S(p.entity); if (!s) return ''; const ok = s.state === 'ok', col = ok ? 'var(--n-ok)' : 'var(--n-warn)', n = p.name || (s.attributes.friendly_name || '').split(' ')[0];
      return `<div class="well" data-act="more-info" data-e="${esc(p.entity)}" style="display:flex;align-items:center;gap:8px;padding:7px 12px;cursor:pointer"><i style="width:8px;height:8px;border-radius:50%;background:${col};box-shadow:0 0 8px ${col}"></i><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11.5px;color:var(--secondary-text-color)">${esc(n)}</span><b style="flex:none;font-size:12px">${ok ? 'OK' : 'Check'}</b></div>`; }).join('');
    return bcard(c, { name: c.title, icon: c.cfg.icon || 'sprout', iconAct: false, iconColor: bad ? 'var(--n-warn)' : 'var(--n-ok)', label: c.o.summary ? (bad ? `${bad} need attention` : 'All happy') : '', rows: c.k.gridFor(c).rows, ctl: `<div style="display:flex;flex-direction:column;gap:8px">${rows}</div>` });
  },
});

/* ============ appliance (time remaining) ============ */
const APP_ICONS = [[/wash/i, 'washing-machine'], [/dry/i, 'tumble-dryer'], [/dish/i, 'dishwasher'], [/oven|cook/i, 'stove'], [/coffee/i, 'coffee-maker']];
kind({
  id: 'appliance', name: 'Appliance', title: 'Appliances', domains: ['sensor'], multi: true, icon: 'washing-machine', grid: { columns: 6, rows: 4 }, tap: { action: 'none' }, hold: { action: 'none' },
  opts: [{ k: 'summary', l: 'Summary line', t: 'sw', d: true }, { k: 'idle_values', l: 'Values that mean idle (comma separated)', t: 'text', d: '00:00,0:00:00,0' }],
  gridFor: c => ({ columns: 6, rows: 2 + Math.ceil(Math.max(2, c.list().length) * 0.75) }),
  render(c) {
    const idle = String(c.o.idle_values).split(',').map(x => x.trim()), busy = v => v != null && !idle.includes(String(v)) && !BAD_STATES.includes(v), items = c.list();
    const rows = items.map(it => { const v = c.st(it.entity), on = busy(v), nm = it.name || c.fname(it.entity).replace(/ time remaining.*$/i, '').replace(/^(aeg|bosch|miele|samsung|lg)\s+/i, ''), ic = it.icon || (APP_ICONS.find(x => x[0].test(nm)) || [0, 'timer-outline'])[1];
      return `<div class="well" data-act="more-info" data-e="${esc(it.entity)}" style="display:flex;align-items:center;gap:8px;padding:7px 12px;cursor:pointer">${icn(ic, 15, `color:${on ? 'var(--accent-color)' : 'var(--secondary-text-color)'}`)}<span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11.5px;color:var(--secondary-text-color)">${esc(nice(nm))}</span><b style="flex:none;font-size:12px;font-variant-numeric:tabular-nums;color:${on ? 'var(--primary-text-color)' : 'var(--secondary-text-color)'}">${on ? esc(v) : 'Idle'}</b></div>`; }).join('');
    const any = items.some(it => busy(c.st(it.entity)));
    return bcard(c, { name: c.title, icon: c.cfg.icon || 'washing-machine', iconAct: false, iconColor: any ? 'var(--accent-color)' : undefined, label: c.o.summary ? (any ? 'Running' : 'All idle') : '', rows: c.k.gridFor(c).rows, ctl: `<div style="display:flex;flex-direction:column;gap:8px">${rows}</div>` });
  },
});

/* ============ smoke alarms (any group of binary sensors) ============ */
kind({
  id: 'safety', name: 'Smoke alarms', title: 'Smoke Alarms', domains: ['binary_sensor'], multi: true, icon: 'smoke-detector-variant', grid: { columns: 6, rows: 3 }, tap: { action: 'none' }, hold: { action: 'none' },
  opts: [{ k: 'summary', l: 'Summary line', t: 'sw', d: true }],
  render(c) {
    const ids = c.list().map(x => x.entity), hot = ids.filter(i => c.st(i) === 'on'), off = ids.filter(i => !c.S(i) || BAD_STATES.includes(c.st(i))), clean = i => c.fname(i).replace(/^Smoke Alarm\s*[-:]?\s*/i, '').replace(/ Smoke( \d+)?$/i, '');
    const lab = hot.length ? 'SMOKE · ' + hot.map(clean).join(', ') : off.length ? `${ids.length - off.length} clear · ${off.length} offline` : `All ${ids.length} clear`;
    const g = glow(hot.length ? '255,90,100' : null, .42, .25);
    const dots = ids.map(i => { const s = c.st(i), col = s === 'on' ? 'var(--n-bad)' : s === 'off' ? 'var(--n-ok)' : 'var(--nc-dim, rgba(240,242,255,.32))'; return `<i title="${esc(c.fname(i))}" data-act="more-info" data-e="${esc(i)}" style="width:8px;height:8px;border-radius:50%;background:${col};box-shadow:0 0 8px ${col};cursor:pointer"></i>`; }).join('');
    return bcard(c, { name: c.title, icon: c.cfg.icon || 'smoke-detector-variant', iconAct: false, iconColor: hot.length ? 'var(--n-bad)' : 'var(--n-ok)', iconFilter: `drop-shadow(0 0 ${hot.length ? 8 : 6}px ${hot.length ? 'var(--n-bad)' : 'var(--n-ok)'})`, label: c.o.summary ? esc(lab) : '', rows: 3, bg: g.bg, shadow: g.shadow, anim: hot.length ? 'ncpulse 1.2s ease-in-out infinite' : '',
      ctl: `<div class="well" style="display:flex;justify-content:space-between;padding:9px 12px">${dots}</div>` });
  },
});

/* ============ weather ============ */
const WX_ICON = { sunny: 'weather-sunny', 'clear-night': 'weather-night', cloudy: 'weather-cloudy', partlycloudy: 'weather-partly-cloudy', rainy: 'weather-rainy', pouring: 'weather-pouring', snowy: 'weather-snowy', 'snowy-rainy': 'weather-snowy-rainy', fog: 'weather-fog', hail: 'weather-hail', lightning: 'weather-lightning', 'lightning-rainy': 'weather-lightning-rainy', windy: 'weather-windy', 'windy-variant': 'weather-windy-variant', exceptional: 'alert-circle-outline' };
const WX_COL = { sunny: '#ffc15a', 'clear-night': '#a9b6ff', cloudy: '#c3cbe8', partlycloudy: '#ffd27a', rainy: '#6ec8ff', pouring: '#5aa8ff', snowy: '#e3f1ff', 'snowy-rainy': '#cfe6ff', fog: '#b9c2d9', hail: '#cfe6ff', lightning: '#ffe066', 'lightning-rainy': '#ffe066', windy: '#b9d6ff', 'windy-variant': '#b9d6ff', exceptional: '#ff7a85' };
const WX_TXT = { sunny: 'Sunny', 'clear-night': 'Clear', cloudy: 'Cloudy', partlycloudy: 'Partly cloudy', rainy: 'Rainy', pouring: 'Pouring', snowy: 'Snowy', 'snowy-rainy': 'Sleet', fog: 'Fog', hail: 'Hail', lightning: 'Thunderstorms', 'lightning-rainy': 'Thunderstorms', windy: 'Windy', 'windy-variant': 'Windy', exceptional: 'Exceptional' };
const wxIcon = (cond, px = 24) => icn(WX_ICON[cond] || 'weather-cloudy', px, `color:${WX_COL[cond] || '#c3cbe8'}`);
const COMPASS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const bearing = b => typeof b === 'number' ? COMPASS[Math.round(b / 22.5) % 16] : (b || '');
const fmtHour = (d, c) => d.toLocaleTimeString(c._hass.locale && c._hass.locale.language, { hour: 'numeric' }).replace(/\s/g, '').toLowerCase();
const pill = (ic, main, sub) => `<span style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:99px;background:var(--n-well);box-shadow:var(--n-inset);font-size:12.5px;color:var(--secondary-text-color)">${icn(ic, 15)}<b style="color:var(--primary-text-color);font-weight:700">${main}</b>${sub ? esc(sub) : ''}</span>`;
/* animated weather icons, ported from the Nocturne dashboard's weather hero */
const WX_ANIM_CSS = '.rays{transform-origin:0 0;animation:nwspin 40s linear infinite}.cloud{animation:nwbob 6s ease-in-out infinite}.drop{animation:nwdrop 1.1s linear infinite}.flake{animation:nwflake 2.2s ease-in-out infinite}.bolt{animation:nwflash 3.2s ease-in-out infinite}.windl path{stroke-dasharray:60 14;animation:nwwind 2.4s linear infinite}.fogl{animation:nwfog 5s ease-in-out infinite}@keyframes nwspin{to{transform:rotate(360deg)}}@keyframes nwbob{50%{transform:translateX(1.6px)}}@keyframes nwdrop{0%{transform:translateY(-5px);opacity:0}25%{opacity:1}100%{transform:translateY(9px);opacity:0}}@keyframes nwflake{0%{transform:translateY(-3px);opacity:0}30%{opacity:1}100%{transform:translate(2px,9px);opacity:0}}@keyframes nwflash{0%,60%,100%{opacity:1}65%{opacity:.25}70%{opacity:1}75%{opacity:.4}}@keyframes nwwind{to{stroke-dashoffset:-74}}@keyframes nwfog{50%{transform:translateX(3px);opacity:.7}}@media (prefers-reduced-motion:reduce){svg *{animation:none!important}}';
const WX_DEFS = '<defs><radialGradient id="wd-sun" cx="38%" cy="35%" r="70%"><stop offset="0" stop-color="#FFEB85"/><stop offset="1" stop-color="#FF9F1C"/></radialGradient><linearGradient id="wd-moon" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFBE3"/><stop offset="1" stop-color="#D8CEA0"/></linearGradient><linearGradient id="wd-cloud" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D3DCE8"/></linearGradient><linearGradient id="wd-cloud2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D2DAE5"/><stop offset="1" stop-color="#A1AEBF"/></linearGradient><linearGradient id="wd-cloudd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#AEB9C9"/><stop offset="1" stop-color="#6F7C8F"/></linearGradient></defs>';
function wxAnimIcon(cd, night, size) {
  const CLOUDP = 'M-12 12a10 10 0 0 1-1.5-19.9A14 14 0 0 1 13-10a11 11 0 0 1 1 22Z';
  const sunI = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><g class="rays" stroke="#FFC93C" stroke-width="3.4" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map(r => `<line x1="0" y1="-17" x2="0" y2="-23" transform="rotate(${r})"/>`).join('')}</g><circle r="12.5" fill="url(#wd-sun)"/></g>`;
  const moonI = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M5-18A19 19 0 1 0 19 8 15 15 0 0 1 5-18Z" fill="url(#wd-moon)"/></g>`;
  const cloudI = (x, y, k, fl) => `<g transform="translate(${x} ${y}) scale(${k})"><path class="cloud" d="${CLOUDP}" fill="url(#${fl || 'wd-cloud'})"/></g>`;
  const dropsI = (xs, y) => xs.map((x, i) => `<line class="drop" style="animation-delay:${(i * 0.37) % 1.1}s" x1="${x}" y1="${y || 46}" x2="${x - 3}" y2="${(y || 46) + 8}" stroke="#4FB2F5" stroke-width="3" stroke-linecap="round"/>`).join('');
  const flakeI = (xs, y) => xs.map((x, i) => `<circle class="flake" style="animation-delay:${(i * 0.6) % 2}s" cx="${x}" cy="${(y || 48) + (i % 2) * 5}" r="2.4" fill="#F4F8FF" stroke="#9fb3cc" stroke-width=".6"/>`).join('');
  const BOLT = '<path class="bolt" d="M35 36l-9 13h7l-4 11 13-16h-7l5-8Z" fill="#FFD43B" stroke="#F59F00" stroke-width="1" stroke-linejoin="round"/>';
  const sky = (x, y, k) => night ? moonI(x, y, k) : sunI(x, y, k);
  const body = () => {
    if (cd === 'sunny') return sky(32, 32, 1.05);
    if (cd === 'clear-night') return moonI(32, 32, 1.05);
    if (cd === 'partlycloudy') return sky(23, 22, .78) + cloudI(36, 38, .82);
    if (cd === 'cloudy') return cloudI(24, 26, .62, 'wd-cloud2') + cloudI(35, 38, .86);
    if (cd === 'rainy') return cloudI(32, 28, .92, 'wd-cloud2') + dropsI([24, 34, 44]);
    if (cd === 'pouring') return cloudI(32, 26, .92, 'wd-cloudd') + dropsI([19, 27, 35, 43, 51], 44);
    if (cd === 'lightning') return cloudI(32, 26, .92, 'wd-cloudd') + BOLT;
    if (cd === 'lightning-rainy') return cloudI(32, 26, .92, 'wd-cloudd') + BOLT + dropsI([20, 48], 44);
    if (cd === 'snowy') return cloudI(32, 28, .92) + flakeI([22, 32, 42]);
    if (cd === 'snowy-rainy') return cloudI(32, 28, .92, 'wd-cloud2') + dropsI([22, 42]) + flakeI([32]);
    if (cd === 'hail') return cloudI(32, 28, .92, 'wd-cloud2') + flakeI([22, 32, 42], 46);
    if (cd === 'fog') return cloudI(32, 24, .82, 'wd-cloud2') + '<g class="fogl" stroke="#B9C6D6" stroke-width="3.2" stroke-linecap="round"><line x1="12" y1="44" x2="52" y2="44"/><line x1="18" y1="51" x2="46" y2="51"/><line x1="14" y1="58" x2="38" y2="58"/></g>';
    if (cd === 'windy' || cd === 'windy-variant') return (cd === 'windy-variant' ? cloudI(34, 22, .7, 'wd-cloud2') : '') + '<g class="windl" fill="none" stroke="#B9C6D6" stroke-width="3.4" stroke-linecap="round"><path d="M8 36h30a6 6 0 1 0-6-6"/><path d="M8 45h40a6 6 0 1 1-6 6"/><path d="M8 54h18"/></g>';
    if (cd === 'exceptional') return '<circle cx="32" cy="32" r="22" fill="#FF6B6B"/><rect x="29" y="18" width="6" height="18" rx="3" fill="#fff"/><circle cx="32" cy="44" r="3.5" fill="#fff"/>';
    return cloudI(32, 32, .95);
  };
  return `<svg viewBox="0 0 64 64" style="width:${size};height:${size};flex:none;overflow:visible;margin:-14px -10px -14px -16px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.28))" aria-hidden="true"><style>${WX_ANIM_CSS}</style>${WX_DEFS}${body()}</svg>`;
}
/* the tint a condition gives the hero card */
const WX_TINT = (c, night) => ({ sunny: night ? '140,155,255' : '255,196,90', 'clear-night': '140,155,255', partlycloudy: night ? '140,155,255' : '255,214,140', cloudy: '170,185,215', rainy: '110,170,255', pouring: '90,150,255', lightning: '255,210,90', 'lightning-rainy': '255,210,90', snowy: '220,240,255', fog: '190,200,215' })[c] || '170,185,215';

const WX_PANELS = { hero: { rows: 5, label: 'Now and today' }, hourly: { rows: 4, label: 'Next 24 hours' }, daily: { rows: 5, label: '7-day forecast' }, details: { rows: 3, label: 'Details (wind, humidity, pressure ...)' } };
kind({
  id: 'weather', name: 'Weather', domains: ['weather'], icon: 'weather-partly-cloudy', grid: { columns: 12, rows: 5 }, tap: { action: 'more-info' }, hold: { action: 'more-info' },
  opts: [{ k: 'panel', l: 'Panel', t: 'select', o: Object.entries(WX_PANELS).map(([k, v]) => [k, v.label]), d: 'hero' }, { k: 'location', l: 'Location name (default: entity name)', t: 'text' }, { k: 'feels_entity', l: 'Feels-like temperature sensor (hero)', t: 'entity', domains: ['sensor'] }, { k: 'warnings_entity', l: 'Warnings count sensor (hero)', t: 'entity', domains: ['sensor'] }, { k: 'hours', l: 'Hours shown in the hourly panel', t: 'range', min: 6, max: 24, d: 12 }, { k: 'days', l: 'Days shown in the daily panel', t: 'range', min: 3, max: 10, d: 7 }],
  gridFor: c => ({ columns: 12, rows: (WX_PANELS[c.o.panel] || WX_PANELS.hero).rows }),
  extraIds: c => ['sun.sun'],
  connect(c) {
    if (c._subs.length || !c._hass || !c._hass.connection) return;
    ['hourly', 'daily'].forEach(type => { try { const p = c._hass.connection.subscribeMessage(ev => { c._fc[type] = ev.forecast || []; c.refresh(); }, { type: 'weather/subscribe_forecast', forecast_type: type, entity_id: c.e }); p.catch(() => {}); c._subs.push(p); } catch (_) {} });
    clearInterval(c._tick); c._tick = setInterval(() => c.isConnected && c.refresh(), 60000);
  },
  render(c) {
    const s = c.S(c.e); if (!s) return bcard(c, { name: c.title, label: 'Entity not found', rows: 3, wide: false });
    const a = s.attributes, p = c.o.panel, unit = a.temperature_unit || '°C', T = v => v == null ? '–' : Math.round(v) + '°';
    const hourly = (c._fc.hourly && c._fc.hourly.length ? c._fc.hourly : a.forecast_hourly || (a.forecast || []).filter(x => x.is_daytime === undefined)) || [], daily = (c._fc.daily && c._fc.daily.length ? c._fc.daily : a.forecast_daily || a.forecast || []) || [];
    /* what it is doing now: the hourly entry nearest to this moment (within 90 min), else the entity's own state (some integrations report today's condition there) */
    const nowMs = Date.now(), near = hourly.reduce((b, h) => { const d = Math.abs(new Date(h.datetime).getTime() - nowMs); return h.condition && d < b.d ? { d, h } : b; }, { d: 90 * 60e3 + 1, h: null }).h, cond = near ? near.condition : s.state;
    const wrap = (inner, rows, cls = '', st = '') => `<div class="bc w wx ${cls}" style="--rows:${rows};padding:16px;${st}">${imgLayer(c)}<div class="grid" style="display:block;position:relative;z-index:2;height:100%">${inner}</div></div>`;
    const now = new Date(), loc = c.o.location || c.cfg.name || a.friendly_name || c.title;
    if (p === 'hourly') {
      const hrs = hourly.filter(h => new Date(h.datetime).getTime() > now.getTime() - 3600e3).slice(0, +c.o.hours), temps = hrs.map(h => h.temperature), mn = Math.min(...temps), mx = Math.max(...temps), W = 100 / Math.max(hrs.length, 1);
      const pts = hrs.map((h, i) => `${(i + .5) * W},${mx === mn ? 50 : 100 - ((h.temperature - mn) / (mx - mn)) * 100}`);
      return wrap(`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="font-size:15px">${esc(WX_PANELS.hourly.label)}</b><span style="font-size:12px;color:var(--secondary-text-color)">${daily[0] ? `High ${T(daily[0].temperature)} · Low ${T(daily[0].templow)}` : ''}</span></div>
        <div style="position:relative;overflow-x:auto;scrollbar-width:none"><div style="min-width:${hrs.length * 54}px;position:relative"><div style="display:grid;grid-template-columns:repeat(${hrs.length},1fr);text-align:center;font-size:12px;color:var(--secondary-text-color);gap:2px">${hrs.map((h, i) => `<div style="display:grid;gap:6px;justify-items:center"><span style="${i ? '' : 'color:var(--primary-text-color);font-weight:700'}">${i ? fmtHour(new Date(h.datetime), c) : 'Now'}</span>${wxIcon(h.condition, 24)}</div>`).join('')}</div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:70px;margin:6px 0;overflow:visible"><polyline points="${pts.join(' ')}" fill="none" stroke="var(--accent-color)" stroke-opacity=".8" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>
        <div style="display:grid;grid-template-columns:repeat(${hrs.length},1fr);text-align:center;gap:2px;font-family:var(--n-font-display);font-size:15px">${hrs.map((h, i) => `<div style="display:grid;gap:4px"><span style="${i ? 'color:var(--secondary-text-color)' : 'font-weight:700'}">${T(h.temperature)}</span><span style="font-size:10.5px;color:var(--n-water, #6ec8ff);min-height:13px">${h.precipitation_probability ? h.precipitation_probability + '%' : (h.precipitation ? h.precipitation + 'mm' : '')}</span></div>`).join('')}</div></div></div>`, 4);
    }
    if (p === 'daily') {
      const ds = daily.slice(0, +c.o.days), lo = Math.min(...ds.map(d => d.templow ?? d.temperature)), hi = Math.max(...ds.map(d => d.temperature));
      return wrap(`<b style="font-size:15px;display:block;margin-bottom:10px">${esc(WX_PANELS.daily.label)}</b><div style="display:grid;gap:9px">${ds.map((d, i) => { const dt = new Date(d.datetime), l = d.templow ?? d.temperature, L = (l - lo) / (hi - lo || 1) * 100, R = (d.temperature - lo) / (hi - lo || 1) * 100;
        return `<div style="display:grid;grid-template-columns:64px 30px 1fr 74px;align-items:center;gap:8px;font-size:13px"><span style="font-weight:${i ? 500 : 700}">${i ? dt.toLocaleDateString(c._hass.locale && c._hass.locale.language, { weekday: 'short' }) : 'Today'}</span>${wxIcon(d.condition, 22)}<span style="position:relative;height:8px;border-radius:99px;background:var(--n-well);box-shadow:var(--n-inset)"><i style="position:absolute;top:0;bottom:0;left:${L}%;right:${100 - R}%;border-radius:99px;background:linear-gradient(90deg,#6ec8ff,#ffc15a)"></i></span><span style="text-align:right;font-variant-numeric:tabular-nums"><span style="color:var(--secondary-text-color)">${T(l)}</span> ${T(d.temperature)}</span></div>`; }).join('')}</div>`, 5);
    }
    if (p === 'details') {
      const w = a.wind_speed, items = [['weather-windy', 'Wind', w != null ? `${Math.round(w)} ${a.wind_speed_unit || 'km/h'}` : null, bearing(a.wind_bearing)], ['water-percent', 'Humidity', a.humidity != null ? a.humidity + '%' : null], ['gauge', 'Pressure', a.pressure != null ? `${Math.round(a.pressure)} ${a.pressure_unit || 'hPa'}` : null], ['sun-wireless-outline', 'UV index', a.uv_index != null ? Math.round(a.uv_index) : null], ['thermometer-water', 'Dew point', a.dew_point != null ? T(a.dew_point) : null], ['eye-outline', 'Visibility', a.visibility != null ? `${a.visibility} ${a.visibility_unit || 'km'}` : null], ['cloud-outline', 'Cloud', a.cloud_coverage != null ? a.cloud_coverage + '%' : null], ['weather-dust', 'Gust', a.wind_gust_speed != null ? `${Math.round(a.wind_gust_speed)} ${a.wind_speed_unit || 'km/h'}` : null]].filter(x => x[2] != null);
      return wrap(`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px">${items.map(x => `<div class="well" style="padding:12px 14px;display:grid;gap:4px"><span style="display:flex;gap:6px;align-items:center;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--secondary-text-color)">${icn(x[0], 14)}${x[1]}</span><b style="font:500 20px var(--n-font-display)">${esc(x[2])}${x[3] ? ` <small style="font-size:12px;color:var(--secondary-text-color)">${esc(x[3])}</small>` : ''}</b></div>`).join('')}</div>`, 3);
    }
    /* hero: now and today, with the animated icon */
    const d0 = daily[0] || {}, feels = c.o.feels_entity ? num(c.st(c.o.feels_entity)) : a.apparent_temperature, rain24 = hourly.slice(0, 24).reduce((t, h) => t + (h.precipitation || 0), 0);
    const sun = c.S('sun.sun'), night = sun ? sun.state === 'below_horizon' : (now.getHours() < 6 || now.getHours() >= 19), lang = c._hass.locale && c._hass.locale.language;
    const tint = WX_TINT(cond, night), bg = `background:radial-gradient(120% 100% at 0% 0%, rgba(${tint},.30), rgba(${tint},.07) 60%, transparent 85%), var(--n-card-bg);`;
    const warn = c.o.warnings_entity ? (+c.st(c.o.warnings_entity) || 0) : 0;
    const warnChip = warn ? `<div style="display:flex;align-items:center;gap:7px;padding:7px 12px 7px 9px;border-radius:99px;font-size:12.5px;font-weight:700;color:#fff;background:linear-gradient(160deg,rgba(255,196,90,.32),rgba(255,196,90,.10));box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 0 0 1px rgba(255,196,90,.55),0 0 18px rgba(255,196,90,.25)">${icn('alert-outline', 16, 'color:#ffc45a')}${warn} warning${warn > 1 ? 's' : ''}</div>` : '';
    const chip = (ic, v, sub) => `<div style="display:flex;align-items:center;gap:7px;padding:7px 12px 7px 9px;border-radius:99px;background:var(--n-well);box-shadow:var(--n-inset);font-size:12.5px;font-weight:600;white-space:nowrap">${icn(ic, 16, 'color:var(--secondary-text-color)')}<span>${v}</span><span style="color:var(--secondary-text-color);font-weight:500">${sub || ''}</span></div>`;
    return wrap(`<div style="display:flex;flex-direction:column;gap:12px;height:100%;container-type:inline-size;text-align:left;white-space:normal">
      <div style="display:flex;justify-content:space-between;align-items:baseline"><div style="font-size:12px;letter-spacing:.14em;font-weight:600;color:var(--secondary-text-color);text-transform:uppercase">${esc(loc)} · ${now.toLocaleDateString(lang, { weekday: 'short', day: 'numeric', month: 'short' }).replace(',', '')}</div><div style="font-family:var(--n-font-display);font-size:18px;letter-spacing:-.01em;color:var(--secondary-text-color)">${now.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' }).replace(/\s/g, '').toLowerCase()}</div></div>
      <div style="display:flex;align-items:center;justify-content:center;flex:1;gap:clamp(8px,3cqw,20px);flex-wrap:nowrap;min-width:0">${wxAnimIcon(cond, night, 'clamp(104px,40cqw,160px)')}
        <div><div style="font-family:var(--n-font-display);font-size:clamp(64px,28cqw,116px);line-height:.95;letter-spacing:-.04em;font-weight:300">${a.temperature != null ? Math.round(a.temperature) : '–'}<span style="font-size:clamp(24px,9cqw,40px);vertical-align:top;margin-left:2px;color:var(--secondary-text-color)">°</span></div>
        <div style="font-size:clamp(18px,5.6cqw,26px);font-weight:600;margin-top:6px">${esc(WX_TXT[cond] || nice(cond))}</div>
        <div style="font-size:clamp(12px,3.7cqw,17px);color:var(--secondary-text-color);margin-top:3px;white-space:nowrap">${[feels != null ? `Feels like ${T(feels)}` : '', d0.temperature != null ? `H ${T(d0.temperature)}` : '', d0.templow != null ? `L ${T(d0.templow)}` : ''].filter(Boolean).join(' · ')}</div></div></div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:auto">${warnChip}${a.humidity != null ? chip('water-percent', a.humidity + '%') : ''}${a.wind_speed != null ? chip('weather-windy', `${Math.round(a.wind_speed)} ${a.wind_speed_unit || 'km/h'}`, bearing(a.wind_bearing)) : ''}${hourly.length ? chip('weather-rainy', `${Math.round(rain24 * 10) / 10} ${a.precipitation_unit || 'mm'}`, 'next 24h') : ''}</div></div>`, 5, '', bg);
  },
});

/* ============ person ============ */
const hash = s => { let h = 0; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; };
const personColors = id => { const h = hash(id) % 360; return [`hsl(${h} 78% 62%)`, `hsl(${(h + 48) % 360} 70% 48%)`]; };
const initials = n => String(n || '?').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
function distance(c, a) {
  const z = c.S('zone.home'); if (!z || a.latitude == null || a.longitude == null) return null; const R = 6371, rad = x => x * Math.PI / 180, la = rad(z.attributes.latitude), lb = rad(a.latitude), dl = rad(a.longitude - z.attributes.longitude), dp = lb - la;
  const h = Math.sin(dp / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dl / 2) ** 2, km = 2 * R * Math.asin(Math.sqrt(h)), mi = (c._hass.config.unit_system || {}).length === 'mi';
  const v = mi ? km * 0.621371 : km; return v < 1 && !mi ? Math.round(v * 1000) + ' m' : (v < 10 ? Math.round(v * 10) / 10 : Math.round(v)) + (mi ? ' mi' : ' km');
}
function personBattery(c, id) {
  if (c.o.battery_entity) return num(c.st(c.o.battery_entity));
  const a = (c.S(id) || {}).attributes || {}, trackers = [a.source, ...(a.device_trackers || [])].filter(Boolean);
  for (const t of trackers) { const sn = first(t), cands = [`sensor.${sn}_battery_level`, `sensor.${sn}_battery`]; for (const x of cands) { const v = num(c.st(x)); if (v != null) return v; } const b = c.at(t, 'battery_level') ?? c.at(t, 'battery'); if (num(b) != null) return num(b); }
  return num(a.battery_level);
}
function sinceText(c, s) { if (!s) return ''; const d = new Date(s.last_changed), loc = c._hass.locale && c._hass.locale.language, t = d.toLocaleTimeString(loc, { hour: 'numeric', minute: '2-digit' }).replace(/\s/g, '').toLowerCase(); return d.toDateString() === new Date().toDateString() ? t : `${d.toLocaleDateString(loc, { weekday: 'short' })} ${t}`; }
const accentOf = (c, id) => c.o.color || ({ auto: personColors(id)[0], accent: 'var(--accent-color)', water: 'var(--n-water)', warm: 'var(--n-warn)', good: 'var(--n-ok)' }[c.o.accent] || 'var(--accent-color)');
/* the avatar: picture, initials or icon, with a ring and a presence dot */
function avatar(c, id, A, ringMode, col, st) {
  const s = c.S(id), pic = s && s.attributes.entity_picture, [p1, p2] = personColors(id), name = c.fname(id), R = (A - 5) / 2, C = 2 * Math.PI * R, bat = ringMode === 'battery' ? personBattery(c, id) : null, low = bat != null && bat <= 20;
  const on = ringMode === 'battery' ? bat != null && st !== 'unknown' : st === 'home', pct = ringMode === 'battery' ? (bat ?? 0) / 100 : 1;
  const ring = ringMode === 'none' ? '' : `<svg class="ring" viewBox="0 0 ${A} ${A}"><circle cx="${A / 2}" cy="${A / 2}" r="${R}" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="4"/>${on ? `<circle cx="${A / 2}" cy="${A / 2}" r="${R}" fill="none" stroke="${low ? 'var(--n-bad)' : col}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${(C * pct).toFixed(1)} ${C.toFixed(1)}" style="filter:drop-shadow(0 0 5px ${col})"/>` : ''}</svg>`;
  const face = c.o.avatar === 'icon' ? icn(c.cfg.icon || 'account', Math.round(A * .5)) : (c.o.avatar === 'initials' || !pic) ? esc(initials(name)) : `<img src="${esc(c.url(pic))}" alt="" style="width:100%;height:100%;object-fit:cover">`;
  return `<div class="pav" style="--a:${A}px;--p1:${p1};--p2:${p2}">${ring}<div class="face">${face}</div><span class="dot"></span></div>`;
}
const personMode = (c, id) => { const s = c.st(id); return !s || BAD_STATES.includes(s) ? 'unknown' : s === 'home' ? 'home' : 'away'; };
kind({
  id: 'person', square: c => c.layout !== 'wide', name: 'Person', domains: ['person'], icon: 'account', grid: { columns: 6, rows: 3 }, tap: { action: 'more-info' }, hold: { action: 'more-info' },
  opts: [{ k: 'layout', l: 'Layout', t: 'seg', o: [['portrait', 'Portrait'], ['wide', 'Wide'], ['photo', 'Photo']], d: 'portrait' }, { k: 'avatar', l: 'Avatar', t: 'seg', o: [['photo', 'Picture'], ['initials', 'Initials'], ['icon', 'Icon']], d: 'photo' }, { k: 'ring', l: 'Ring shows', t: 'seg', o: [['presence', 'Home / away'], ['battery', 'Phone battery'], ['none', 'Nothing']], d: 'presence' },
    { k: 'accent', l: 'Colour', t: 'select', o: [['auto', 'Their own colour'], ['accent', 'Theme accent'], ['water', 'Water'], ['warm', 'Warm'], ['good', 'Green']], d: 'auto' }, { k: 'color', l: 'Custom colour (any CSS colour, optional)', t: 'text' },
    { k: 'show_since', l: 'Show “since” time', t: 'sw', d: true }, { k: 'show_battery', l: 'Phone battery', t: 'sw', d: true }, { k: 'show_place', l: 'Where they are (when away)', t: 'sw', d: true }, { k: 'show_distance', l: 'Distance from home (when away)', t: 'sw', d: true },
    { k: 'battery_entity', l: 'Battery sensor (default: found from their phone)', t: 'entity', domains: ['sensor'] }, { k: 'geocoded_entity', l: 'Address sensor (e.g. geocoded location)', t: 'entity', domains: ['sensor'] }],
  gridFor: c => ({ columns: c.o.layout === 'wide' ? 12 : 6, rows: 3 }),
  extraIds: c => { const a = (c.S(c.e) || {}).attributes || {}, t = [a.source, ...(a.device_trackers || [])].filter(Boolean); return [c.o.battery_entity, c.o.geocoded_entity, 'zone.home', ...t.flatMap(x => [`sensor.${first(x)}_battery_level`, x])]; },
  render(c) {
    const o = c.o, id = c.e, s = c.S(id), a = (s && s.attributes) || {}, m = personMode(c, id), home = m === 'home', away = m === 'away', unk = m === 'unknown', name = c.title, col = accentOf(c, id), [p1, p2] = personColors(id);
    const bat = o.show_battery && !unk ? personBattery(c, id) : null, low = bat != null && bat <= 20, dist = away && o.show_distance ? distance(c, a) : null;
    const place = away && o.show_place ? (s.state !== 'not_home' ? nice(s.state) : (o.geocoded_entity && c.st(o.geocoded_entity) && !BAD_STATES.includes(c.st(o.geocoded_entity)) ? String(c.st(o.geocoded_entity)).split(',')[0] : '')) : '';
    const stx = unk ? 'Unknown' : home ? 'Home' : 'Away', since = o.show_since && !unk ? sinceText(c, s) : '';
    const batChip = bat != null ? `<span class="pchip ${low ? 'low' : ''}">${icn('battery', 15)}${Math.round(bat)}%</span>` : '';
    const vars = `--acc:${col};--p1:${p1};--p2:${p2}`, cls = `pc ${away ? 'away' : ''} ${unk ? 'unk' : ''}`;
    if (o.layout === 'wide') { const A = 96; return `<div class="nc wide ${cls} side" style="--rows:3;${vars}">${imgLayer(c)}<div class="in">${avatar(c, id, A, o.ring, col, m)}<div class="info"><div><span class="pn">${esc(name)}</span><span class="ps"><b>${stx}</b>${since ? ' · ' + since : ''}</span>${place ? `<span class="ps">${icn('map-marker', 13)} ${esc(place)}</span>` : ''}</div>${batChip || dist ? `<div class="chips">${batChip}${dist ? `<span class="pchip">${icn('map-marker-distance', 15)}${dist}</span>` : ''}</div>` : ''}</div></div></div>`; }
    if (o.layout === 'photo') { const pic = a.entity_picture; return `<div class="nc ${cls} photo" style="--rows:3;${vars};padding:0;overflow:hidden"><div class="face-bg" ${pic && o.avatar === 'photo' ? `style="background:url('${esc(c.url(pic))}') center/cover"` : ''}>${pic && o.avatar === 'photo' ? '' : (o.avatar === 'initials' ? `<span style="font:600 64px var(--n-font-display);margin-top:-18px">${esc(initials(name))}</span>` : icn(o.avatar === 'icon' ? c.icon : 'account', 120))}</div>${imgLayer(c)}<div class="in" style="padding:14px;box-sizing:border-box;justify-content:space-between"><div class="prow"><span class="pstat"><i></i>${stx}</span>${bat != null ? `<span class="pstat" style="${low ? 'color:var(--n-bad)' : ''}">${icn('battery', 14)}${Math.round(bat)}%</span>` : ''}</div><div><span class="pn">${esc(name)}</span><span class="ps">${[since ? (home ? 'Since ' + since : since) : '', place, dist].filter(Boolean).join(' · ')}</span></div></div></div>`; }
    return `<div class="nc ${cls}" style="--rows:3;${vars}">${imgLayer(c)}<div class="in"><div class="prow">${avatar(c, id, 76, o.ring, col, m)}${batChip}</div><div><span class="pn">${esc(name)}</span><span class="ps"><b>${stx}</b>${dist ? ' · ' + dist : ''}${since ? ' · ' + since : ''}</span>${place ? `<span class="ps">${esc(place)}</span>` : ''}</div></div></div>`;
  },
});

/* ============ family (everyone in one row) ============ */
kind({
  id: 'family', name: 'Family', title: 'Family', domains: ['person', 'device_tracker'], multi: true, icon: 'account-group', grid: { columns: 12, rows: 3 }, tap: { action: 'none' }, hold: { action: 'none' },
  opts: [{ k: 'avatar', l: 'Avatar', t: 'seg', o: [['photo', 'Picture'], ['initials', 'Initials']], d: 'photo' }, { k: 'show_since', l: 'Show how long they have been home or away', t: 'sw', d: true }, { k: 'show_count', l: 'Show “2 of 4 home”', t: 'sw', d: true }],
  render(c) {
    const o = c.o, items = c.list(), n = items.filter(i => personMode(c, i.entity) === 'home').length;
    const age = s => { if (!s) return ''; const m = Math.max(0, Math.round((Date.now() - new Date(s.last_changed)) / 60000)); return m < 60 ? m + 'm' : m < 1440 ? Math.floor(m / 60) + 'h' : Math.floor(m / 1440) + 'd'; };
    const avs = items.map(it => { const m = personMode(c, it.entity), nm = it.name || c.fname(it.entity); return `<div class="av ${m === 'home' ? 'home' : 'away'}" data-act="more-info" data-e="${esc(it.entity)}" style="cursor:pointer">${avatarFace(c, it.entity, 46, m)}${o.show_since ? `<span>${age(c.S(it.entity))}</span>` : ''}</div>`; }).join('');
    return `<div class="nc wide" style="--rows:3">${imgLayer(c)}<div class="in" style="display:grid;align-content:space-between"><div class="avs"><span class="ic" style="margin-right:6px">${icn(c.icon)}</span>${avs}</div><div class="nm"><b>${esc(c.title)}</b>${o.show_count ? `<span>${n} of ${items.length} home</span>` : ''}</div></div></div>`;
  },
});
function avatarFace(c, id, A, m) { const s = c.S(id), pic = s && s.attributes.entity_picture, [p1, p2] = personColors(id); return `<i style="width:${A}px;height:${A}px;${pic && c.o.avatar === 'photo' ? `background:url('${esc(c.url(pic))}') center/cover` : `background:linear-gradient(160deg,${p1},${p2})`}">${pic && c.o.avatar === 'photo' ? '' : esc(initials(c.fname(id)))}</i>`; }

/* ============ clock: digital and analogue ============ */
const CLK_DAY = '#ffc15a', CLK_NIGHT = '#9aa7ff';

/* time in the chosen zone: formatters are cached on the card until the settings change */
function clkFmt(c) {
  const h = c._hass, o = c.o, loc = (h.locale && h.locale.language) || navigator.language || 'en';
  const zone = o.timezone || (h.locale && h.locale.time_zone === 'server' && h.config && h.config.time_zone) || undefined;
  const tf = h.locale && h.locale.time_format;
  const key = [loc, zone, o.hour_format, tf].join('|');
  if (c._fk === key) return c._fm;
  let tz = zone, bad = false;
  try { new Intl.DateTimeFormat('en', { timeZone: tz }); } catch (e) { tz = undefined; bad = true; }
  const h12 = o.hour_format === '12' ? true : o.hour_format === '24' ? false : tf === '12' ? true : tf === '24' ? false : !!new Intl.DateTimeFormat(loc, { hour: 'numeric' }).resolvedOptions().hour12;
  const num = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  const dp = new Intl.DateTimeFormat(loc, { timeZone: tz, hour: 'numeric', hour12: true });
  const long = new Intl.DateTimeFormat(loc, { timeZone: tz, weekday: 'long', day: 'numeric', month: 'long' });
  const short = new Intl.DateTimeFormat(loc, { timeZone: tz, weekday: 'short', day: 'numeric', month: 'short' });
  const wk = new Intl.DateTimeFormat(loc, { timeZone: tz, weekday: 'short' }), dn = new Intl.DateTimeFormat(loc, { timeZone: tz, day: 'numeric' });
  const abbr = new Intl.DateTimeFormat(loc, { timeZone: tz, timeZoneName: 'short' });
  const parts = d => Object.fromEntries(num.formatToParts(d).map(x => [x.type, +x.value]));
  const period = d => (dp.formatToParts(d).find(x => x.type === 'dayPeriod') || {}).value || '';
  const pad = n => String(n).padStart(2, '0');
  const hm = d => { const p = parts(d); return h12 ? `${p.hour % 12 || 12}:${pad(p.minute)} ${period(d)}` : `${pad(p.hour)}:${pad(p.minute)}`; };
  c._fk = key;
  return c._fm = { tz, bad, h12, parts, period, pad, hm, long: d => long.format(d), short: d => short.format(d), wk: d => wk.format(d).toUpperCase(), dn: d => dn.format(d), abbr: d => (abbr.formatToParts(d).find(x => x.type === 'timeZoneName') || {}).value || '' };
}

/* the remaining time of a timer entity as H:MM:SS or M:SS */
function clkRemain(c, id, now) {
  const s = c.S(id); if (!s) return null;
  let sec = null;
  if (s.state === 'active' && s.attributes.finishes_at) sec = Math.max(0, Math.ceil((Date.parse(s.attributes.finishes_at) - now) / 1000));
  else if (s.state === 'paused' && s.attributes.remaining) { const m = String(s.attributes.remaining).split(':').map(Number); if (m.length === 3) sec = m[0] * 3600 + m[1] * 60 + Math.floor(m[2]); }
  if (sec == null || isNaN(sec)) return null;
  const hh = Math.floor(sec / 3600), mm = Math.floor(sec % 3600 / 60), ss = sec % 60, p2 = n => String(n).padStart(2, '0');
  return { text: hh ? `${hh}:${p2(mm)}:${p2(ss)}` : `${mm}:${p2(ss)}`, paused: s.state === 'paused' };
}

/* day or night, by the sun, or by the hour when the clock shows another time zone */
function clkNight(c, F) {
  if (!c.o.timezone) { const s = c.st('sun.sun'); if (s) return s === 'below_horizon'; }
  const hr = F.parts(new Date()).hour; return hr < 6 || hr >= 19;
}

function clkDial(o, wide) {
  const mk = o.markers, X = (r, a) => [(100 + r * Math.sin(a * Math.PI / 180)).toFixed(2), (100 - r * Math.cos(a * Math.PI / 180)).toFixed(2)];
  let g = '';
  if (mk !== 'dots') for (let i = 0; i < 60; i++) { const hr = i % 5 === 0, a = i * 6; if (mk === 'numbers' && hr) continue; const p = X(hr ? 80 : 85, a), q = X(90, a); g += `<line class="${hr ? 'mj' : 'mn'}" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>`; }
  if (mk === 'dots') for (let i = 0; i < 12; i++) { const p = X(84, i * 30); g += `<circle class="dot${i % 3 ? '' : ' q'}" cx="${p[0]}" cy="${p[1]}" r="${i % 3 ? 2.4 : 3.8}"/>`; }
  if (mk === 'numbers') for (let i = 1; i <= 12; i++) { const p = X(72, i * 30); g += `<text class="nb" x="${p[0]}" y="${p[1]}">${i}</text>`; }
  return `<svg viewBox="0 0 200 200" aria-hidden="true"><circle class="face" cx="100" cy="100" r="97"/>${o.ring ? '<circle class="ring" cx="100" cy="100" r="93" pathLength="1" transform="rotate(-90 100 100)"/>' : ''}${g}
    ${o.show_date && !wide ? '<text class="dw" x="100" y="140" data-dw></text>' : ''}${wide ? '' : '<text class="lb" x="100" y="68" data-lbl></text>'}
    <g class="h hr" data-hr><line x1="100" y1="108" x2="100" y2="56"/></g><g class="h mi" data-mi><line x1="100" y1="110" x2="100" y2="32"/></g>
    ${o.show_seconds ? '<g class="h se" data-se><line x1="100" y1="120" x2="100" y2="20"/><circle cx="100" cy="100" r="4.5"/></g>' : ''}<circle class="cap" cx="100" cy="100" r="5"/></svg>`;
}

function clkTick(c) {
  const r = c.shadowRoot, el = r && r.querySelector('.clk'); if (!el || !c._hass) return;
  const o = c.o, F = clkFmt(c), now = Date.now(), d = new Date(now), p = F.parts(d), set = (sel, v) => { const n = el.querySelector(sel); if (n && n.dataset.v !== v) { n.dataset.v = v; n.innerHTML = v; } };
  const tm = F.h12 ? `${p.hour % 12 || 12}` : F.pad(p.hour);
  const secs = o.show_seconds ? `<small class="sc">${F.pad(p.second)}</small>` : '', ap = F.h12 ? `<small class="ap">${F.period(d)}</small>` : '';
  set('[data-tm]', `${tm}<i class="co${o.blink ? ' bl' : ''}">:</i>${F.pad(p.minute)}${secs}${ap}`);
  set('[data-dt]', el.classList.contains('wide') && !el.classList.contains('an') ? F.long(d) : F.short(d));
  const nt = clkNight(c, F), want = o.tint ? (nt ? CLK_NIGHT : CLK_DAY) : '';
  if (el.dataset.nt !== String(nt)) { el.dataset.nt = String(nt); el.classList.toggle('night', nt); el.style.setProperty('--lc', want || 'var(--accent-color)'); }
  const tmr = o.timer_entity && clkRemain(c, o.timer_entity, now), tn = el.querySelector('[data-tmr]');
  if (tn) { tn.closest('.pchip').hidden = !tmr; if (tmr) { tn.textContent = tmr.text; tn.closest('.pchip').classList.toggle('pz', tmr.paused); } }
  const al = el.querySelector('[data-al]');
  if (al) { const t = o.alarm_entity && Date.parse(c.st(o.alarm_entity)); const ok = t && t > now; al.closest('.pchip').hidden = !ok; if (ok) { const a = new Date(t); al.textContent = (F.dn(a) !== F.dn(d) ? F.wk(a) + ' ' : '') + F.hm(a); } }
  const lbl = el.querySelector('[data-lbl]'); if (lbl && !lbl.dataset.v) { lbl.dataset.v = '1'; lbl.textContent = (c.cfg.name || '').toUpperCase(); }
  const dw = el.querySelector('[data-dw]'); if (dw) dw.textContent = tmr && el.classList.contains('an') && !el.classList.contains('wide') ? tmr.text : `${F.wk(d)} ${F.dn(d)}`;
  const hr = el.querySelector('[data-hr]');
  if (hr) {
    const ms = o.smooth ? d.getMilliseconds() : 0, sec = p.second + ms / 1000, min = p.minute + sec / 60, hh = (p.hour % 12) + min / 60;
    const first = !el.dataset.init; if (first) el.classList.add('noanim');
    let sa = sec * 6; if (c._sp != null && sa < c._sp - 1) c._turn = (c._turn || 0) + 1; c._sp = sa; sa += (c._turn || 0) * 360;
    hr.style.transform = `rotate(${hh * 30}deg)`; el.querySelector('[data-mi]').style.transform = `rotate(${min * 6}deg)`;
    const se = el.querySelector('[data-se]'); if (se) se.style.transform = `rotate(${sa}deg)`;
    const rg = el.querySelector('.ring'); if (rg) rg.style.strokeDashoffset = String(1 - sec / 60);
    if (first) { el.dataset.init = '1'; void el.offsetWidth; requestAnimationFrame(() => el.classList.remove('noanim')); }
  }
}

kind({
  id: 'clock', name: 'Clock', domains: null, noEntity: true, noIcon: true, icon: 'clock-outline', grid: { columns: 6, rows: 3 }, tap: { action: 'none' }, hold: { action: 'none' },
  square: c => c.size !== 'wide',
  opts: [
    { k: 'variant', l: 'Clock face', t: 'seg', o: [['digital', 'Digital'], ['analog', 'Analogue']], d: 'digital' },
    SIZE,
    { k: 'timezone', l: 'Time zone, for example Pacific/Auckland (empty uses yours)', t: 'text' },
    { k: 'hour_format', l: 'Hours', t: 'seg', o: [['auto', 'From your profile'], ['12', '12 hour'], ['24', '24 hour']], d: 'auto' },
    { k: 'show_seconds', l: 'Seconds', t: 'sw', d: true },
    { k: 'show_date', l: 'Date', t: 'sw', d: true },
    { k: 'blink', l: 'Blinking colon', t: 'sw', d: true, when: c => c.variant !== 'analog' },
    { k: 'markers', l: 'Dial markers', t: 'seg', o: [['ticks', 'Ticks'], ['numbers', 'Numbers'], ['dots', 'Dots']], d: 'ticks', when: c => c.variant === 'analog' },
    { k: 'smooth', l: 'Sweeping second hand', t: 'sw', d: false, when: c => c.variant === 'analog' },
    { k: 'ring', l: 'Seconds ring around the dial', t: 'sw', d: true, when: c => c.variant === 'analog' },
    { k: 'tint', l: 'Warm by day and cool at night (follows sun.sun)', t: 'sw', d: true },
    { k: 'alarm_entity', l: 'Next alarm (a sensor whose state is a date and time)', t: 'entity', domains: ['sensor'] },
    { k: 'timer_entity', l: 'Timer to count down', t: 'entity', domains: ['timer'] },
  ],
  extraIds: () => ['sun.sun'],
  gridFor: () => ({ columns: 6, rows: 3 }),
  after(c) {
    clkTick(c);
    if (!c._clk) { c._clk = setInterval(() => clkTick(c), c.o.smooth && c.o.variant === 'analog' ? 60 : 250); c._subs.push(() => { clearInterval(c._clk); c._clk = null; }); }
  },
  render(c) {
    const o = c.o, wide = o.size === 'wide', analog = o.variant === 'analog', F = clkFmt(c), chips = [];
    if (o.alarm_entity) chips.push(`<span class="pchip" hidden>${icn('alarm', 15)}<b data-al></b></span>`);
    if (o.timer_entity) chips.push(`<span class="pchip" hidden>${icn('timer-sand', 15)}<b data-tmr></b></span>`);
    const zone = o.timezone ? `<span class="tz">${esc(F.bad ? 'Unknown time zone' : F.abbr(new Date()))}</span>` : '';
    const lab = c.cfg.name ? `<span class="lbl">${esc(c.cfg.name)}</span>` : '';
    const read = `<div class="tm" data-tm></div>${o.show_date ? '<div class="dt" data-dt></div>' : ''}`;
    const info = `<div class="info">${analog ? '' : lab}${zone}${chips.length ? `<div class="chs">${chips.join('')}</div>` : ''}</div>`;
    const cls = `clk ${analog ? 'an' : 'dg'} ${wide ? 'wide' : ''} ${o.tint ? 'tint' : ''} ${o.smooth ? 'sm' : ''}`;
    if (analog) return `<div class="nc ${cls}" style="--rows:3"><div class="cq"><div class="dial">${clkDial(o, wide)}</div>${wide ? `<div class="side">${lab}${read}${info}</div>` : ''}</div></div>`;
    return `<div class="nc ${cls}" style="--rows:3"><div class="cq"><div class="main">${read}</div>${info}</div></div>`;
  },
});

/* ============ visual editor ============ */
const LABELS = { kind: 'Card kind', entity: 'Entity', entities: 'Entities', name: 'Name', icon: 'Icon', tap_action: 'Tap action', hold_action: 'Hold action' };
class NocturneCardEditor extends HTMLElement {
  setConfig(config) { this._config = config; this._render(); }
  set hass(h) { this._hass = h; if (this._form) this._form.hass = h; }
  _fields(k) {
    const sel = o => {
      const n = o.k;
      if (o.t === 'sw') return { name: n, selector: { boolean: {} } };
      if (o.t === 'seg' || o.t === 'select') return { name: n, selector: { select: { mode: 'dropdown', options: o.o.map(x => ({ value: x[0], label: x[1] })) } } };
      if (o.t === 'range') return { name: n, selector: { number: { min: o.min, max: o.max, step: 1, mode: 'slider', unit_of_measurement: o.u || '' } } };
      if (o.t === 'entity') return { name: n, selector: { entity: { domain: o.domains, multiple: !!o.multi } } };
      return { name: n, selector: { text: {} } };
    };
    const on = o => !o.when || o.when(this._config || {});
    return { main: k.opts.filter(o => !o.g && on(o)).map(sel), image: k.opts.filter(o => o.g === 'image').map(sel) };
  }
  _schema() {
    const k = KINDS[this._config.kind], kinds = Object.values(KINDS).map(x => ({ value: x.id, label: x.name }));
    const base = [{ name: 'kind', selector: { select: { mode: 'dropdown', options: kinds } } }];
    if (!k) return base;
    const f = this._fields(k), doms = k.domains;
    if (!k.noEntity) base.push(k.multi ? { name: 'entities', selector: { entity: { domain: doms, multiple: true } } } : { name: 'entity', selector: { entity: { domain: doms } } });
    base.push({ type: 'grid', name: '', schema: [{ name: 'name', selector: { text: {} } }, ...(k.noIcon ? [] : [{ name: 'icon', selector: { icon: {} } }])] });
    if (f.main.length) base.push({ type: 'expandable', title: `${k.name} options`, expanded: true, flatten: true, schema: f.main });
    if (f.image.length) base.push({ type: 'expandable', title: 'Background image', flatten: true, schema: f.image });
    base.push({ type: 'expandable', title: 'Actions', flatten: true, schema: [{ name: 'tap_action', selector: { ui_action: {} } }, { name: 'hold_action', selector: { ui_action: {} } }] });
    return base;
  }
  _labels() { const m = Object.assign({}, LABELS); Object.values(KINDS).forEach(k => k.opts.forEach(o => { m[o.k] = o.l; })); return m; }
  _render() {
    if (!this._config) return;
    if (!this._form) {
      this._form = document.createElement('ha-form'); this.appendChild(this._form);
      this._form.addEventListener('value-changed', ev => {
        ev.stopPropagation(); const v = ev.detail.value, old = this._config; let next;
        if (v.kind !== old.kind) { next = { type: 'custom:nocturne-card', kind: v.kind }; if (v.name) next.name = v.name; }
        else { const k = KINDS[v.kind], d = k ? k.defaults : {}; next = {}; Object.keys(v).forEach(key => { if (v[key] === undefined || v[key] === '' || (key in d && v[key] === d[key])) return; next[key] = v[key]; }); next.type = 'custom:nocturne-card'; }
        this._config = next; fire(this, 'config-changed', { config: next }); this._render();
      });
    }
    const k = KINDS[this._config.kind];
    this._form.hass = this._hass; this._form.schema = this._schema(); this._form.data = Object.assign({}, k ? k.defaults : {}, this._config);
    this._form.computeLabel = s => this._labels()[s.name] || nice(s.name);
  }
}

/* ============ register ============ */
if (!customElements.get('nocturne-card')) customElements.define('nocturne-card', NocturneCard);
if (!customElements.get('nocturne-card-editor')) customElements.define('nocturne-card-editor', NocturneCardEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some(x => x.type === 'nocturne-card')) window.customCards.push({ type: 'nocturne-card', name: 'Nocturne Card', description: 'One glass card for lights, climate, media, weather, people and more. Pick a kind, pick an entity.', preview: true, documentationURL: 'https://thekiwismarthome.github.io/nocturne-card/' });
console.info(`%c NOCTURNE-CARD %c ${VERSION} `, 'background:#7c6cff;color:#fff;border-radius:4px 0 0 4px;padding:2px 6px', 'background:#151a2c;color:#9ff4ff;border-radius:0 4px 4px 0;padding:2px 6px');

})();
