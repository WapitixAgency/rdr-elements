/* rdr-elements concours | source route-du-rhum 0707684 | rdr-concours-photo.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["concours"]="0707684";performance.mark("rdr-elements:concours")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof customElements === 'undefined' || customElements.get('rdr-concours-photo')) return;

  const SOURCE = 'https://www.routedurhum.com/_functions/concoursPhotoDemo';
  const CLE = 'rdrConcoursPhotoApercuV1';
  const CLE_GL = 'rdrConcoursPhotoApercuGlisserV1';
  const JOUR = 86400000;

  const CSS = `rdr-concours-photo{display:block;width:var(--customElementWidth,100%);background:var(--marine);color:var(--t1);font-family:var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip;line-height:normal;text-align:left}
.cp-portail{color:var(--t1);font-family:var(--police);-webkit-font-smoothing:antialiased;line-height:normal;text-align:left}
:is(rdr-concours-photo,.cp-portail) *{box-sizing:border-box}
:is(rdr-concours-photo,.cp-portail) button{font-family:inherit;cursor:pointer;margin:0}
:is(rdr-concours-photo,.cp-portail) img{display:block;margin:0;border:0}
:is(rdr-concours-photo,.cp-portail) a{color:inherit}
rdr-concours-photo,.cp-portail{--marine:#0E111D;--nuit:#0A1228;--panneau:#161C30;--panneau2:#1B2237;--marine2:#16355D;--blanc:#fff;--teal:#5DBFC0;--teal2:#14A79E;--jaune:#FCF150;--or:#F5BE41;--rouge:#E63946;--oui:#2FCB7B;--non:#E63946;--oui-encre:#0E111D;--non-encre:#fff;--t1:rgba(255,255,255,.94);--t2:rgba(255,255,255,.74);--t3:rgba(255,255,255,.52);--filet:rgba(255,255,255,.14);--voile:rgba(255,255,255,.06);--police:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;}
rdr-concours-photo,.cp-portail{--cp-gouttiere:clamp(24px,4.5vw,72px);--cp-colonne:1392px}
:is(rdr-concours-photo,.cp-portail)[data-teinte="cg"]{--oui:#E63946;--non:#8C97AB;--oui-encre:#fff;--non-encre:#0E111D}
:is(rdr-concours-photo,.cp-portail) .cp-scene{position:relative;isolation:isolate;overflow:hidden;background:var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-mur{position:absolute;z-index:-3;top:-16%;bottom:-16%;right:-3%;width:min(64%,940px);display:flex;gap:12px;transform:rotate(-7deg);opacity:.9;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 38%);mask-image:linear-gradient(90deg,transparent 0,#000 38%)}
:is(rdr-concours-photo,.cp-portail) .cp-mur-col{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px;animation:cp-defile 110s linear infinite;will-change:transform}
:is(rdr-concours-photo,.cp-portail) .cp-mur-col:nth-child(2n){animation-name:cp-defile-inverse;animation-duration:130s}
:is(rdr-concours-photo,.cp-portail) .cp-mur-col:nth-child(3){animation-duration:95s}
:is(rdr-concours-photo,.cp-portail) .cp-mur img{width:100%;height:auto;border-radius:10px;background:var(--panneau);filter:saturate(.9)}
@keyframes cp-defile{from{transform:translateY(0)}to{transform:translateY(-50%)}}
@keyframes cp-defile-inverse{from{transform:translateY(-50%)}to{transform:translateY(0)}}
:is(rdr-concours-photo,.cp-portail) .cp-vagues{position:absolute;z-index:-1;left:-8%;top:-30%;width:min(1300px,100%);opacity:.13;pointer-events:none;mix-blend-mode:screen}
:is(rdr-concours-photo,.cp-portail) .cp-scene::before{content:"";position:absolute;inset:0;z-index:-2;pointer-events:none;background:linear-gradient(90deg,var(--marine) 0%,rgba(14,17,29,.94) 28%,rgba(14,17,29,.55) 52%,rgba(14,17,29,.18) 78%,rgba(14,17,29,.4) 100%),linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 22%,rgba(14,17,29,0) 70%,var(--marine) 100%)}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-mur{width:130%;right:-15%;opacity:.38;transform:rotate(-8deg);-webkit-mask-image:none;mask-image:none}
  :is(rdr-concours-photo,.cp-portail) .cp-scene::before{background:linear-gradient(180deg,rgba(14,17,29,.72) 0%,rgba(14,17,29,.84) 45%,var(--marine) 100%)}
}
:is(rdr-concours-photo,.cp-portail) .cp-scene-in{max-width:1440px;margin:0 auto;padding:clamp(28px,6vh,64px) 24px clamp(22px,4vh,40px);display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,370px);gap:22px 56px;align-items:end}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-scene-in{grid-template-columns:1fr;padding:22px 16px 20px;gap:18px}
}
:is(rdr-concours-photo,.cp-portail) .cp-marque-bloc{display:inline-flex;align-items:center;gap:14px;padding:7px 18px 7px 7px;border-radius:999px;background:rgba(14,17,29,.62);border:1px solid var(--filet);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);margin:0 0 clamp(14px,2.6vh,24px)}
:is(rdr-concours-photo,.cp-portail) .cp-montre{width:44px;height:44px;flex:none;border-radius:50%}
:is(rdr-concours-photo,.cp-portail) .cp-alpina{height:27px;width:auto;aspect-ratio:358/92;object-fit:contain}
:is(rdr-concours-photo,.cp-portail) .cp-marque-sep{width:1px;height:26px;background:var(--filet)}
:is(rdr-concours-photo,.cp-portail) .cp-marque-nom{font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:18px;line-height:1;color:var(--teal);white-space:nowrap}
:is(rdr-concours-photo,.cp-portail)[data-marque="sans"] .cp-marque-bloc{display:none}
:is(rdr-concours-photo,.cp-portail)[data-marque="sans"] .cp-partenaire{display:none}
@media (max-width:520px){
  :is(rdr-concours-photo,.cp-portail) .cp-marque-bloc{gap:10px;padding:5px 14px 5px 5px}
  :is(rdr-concours-photo,.cp-portail) .cp-montre{width:36px;height:36px}
  :is(rdr-concours-photo,.cp-portail) .cp-alpina{height:21px}
  :is(rdr-concours-photo,.cp-portail) .cp-marque-nom{font-size:15px}
}
:is(rdr-concours-photo,.cp-portail) .cp-titre{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;font-size:clamp(34px,5vw,70px);line-height:.92;text-transform:uppercase;color:var(--blanc);max-width:none}
:is(rdr-concours-photo,.cp-portail) .cp-titre em{font-style:italic;color:var(--jaune);white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-accroche{margin:clamp(12px,2vh,18px) 0 0;max-width:600px;font-size:15.5px;line-height:1.55;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-chiffres{display:flex;gap:18px;flex-wrap:wrap;margin:14px 0 0;padding:0;list-style:none;font-size:12.5px;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-chiffres b{color:var(--t1);font-weight:800;font-size:15px;margin-right:4px}
:is(rdr-concours-photo,.cp-portail) .cp-etapes{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
:is(rdr-concours-photo,.cp-portail) .cp-etapes li{display:grid;grid-template-columns:40px minmax(0,1fr);gap:2px 12px;align-items:center;padding:12px 14px;border-radius:14px;background:rgba(22,28,48,.7);border:1px solid var(--filet);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
:is(rdr-concours-photo,.cp-portail) .cp-etapes i{grid-row:span 2;width:40px;height:40px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;font-style:normal;background:var(--teal);color:var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-etapes li:nth-child(2) i{background:var(--rouge);color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-etapes li:nth-child(3) i{background:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-etapes i svg{width:20px;height:20px}
:is(rdr-concours-photo,.cp-portail) .cp-etapes b{font-size:13.5px;font-weight:800;color:#fff;letter-spacing:.01em}
:is(rdr-concours-photo,.cp-portail) .cp-etapes span{font-size:12.5px;line-height:1.4;color:var(--t2)}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-etapes{gap:8px}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes li{grid-template-columns:1fr;align-content:start;align-items:start;gap:6px;padding:10px}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes i{grid-row:auto;width:34px;height:34px;border-radius:10px}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes b{font-size:12.5px;line-height:1.25}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes span{font-size:11.5px}
}
:is(rdr-concours-photo,.cp-portail) .cp-partenaire{grid-column:1/-1;margin:-4px 0 0;font-size:11.5px;letter-spacing:.06em;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-partenaire b{color:var(--t2);font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-actions{display:flex;flex-direction:column;gap:10px;align-items:stretch;padding:14px;border-radius:18px;background:rgba(14,17,29,.7);border:1px solid var(--filet);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
:is(rdr-concours-photo,.cp-portail) .cp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:999px;padding:13px 20px;font-size:13px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;transition:transform .15s ease,background .2s}
:is(rdr-concours-photo,.cp-portail) .cp-btn svg{width:18px;height:18px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-btn--or{background:var(--jaune);color:var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-btn--or:hover{background:#fff;transform:translateY(-1px)}
:is(rdr-concours-photo,.cp-portail) .cp-btn--ligne{background:transparent;color:var(--t1);border:1.5px solid var(--filet)}
:is(rdr-concours-photo,.cp-portail) .cp-btn--ligne:hover{border-color:rgba(255,255,255,.45)}
:is(rdr-concours-photo,.cp-portail) .cp-btn--ligne .cp-pastille{min-width:22px;height:22px;padding:0 7px;border-radius:999px;background:var(--rouge);color:#fff;font-size:11.5px;display:inline-flex;align-items:center;justify-content:center}
:is(rdr-concours-photo,.cp-portail) .cp-etat{font-size:12.5px;color:var(--t2);line-height:1.45;text-align:center}
:is(rdr-concours-photo,.cp-portail) .cp-etat b{color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-mienne{display:flex;gap:12px;align-items:center;padding:8px;border:1px solid var(--filet);border-radius:14px;background:var(--voile)}
:is(rdr-concours-photo,.cp-portail) .cp-mienne img{width:64px;height:64px;object-fit:cover;border-radius:10px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-mienne-t{font-size:12.5px;line-height:1.4;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-mienne-t b{display:block;color:var(--t1);font-size:13px}
:is(rdr-concours-photo,.cp-portail) .cp-mienne-t i{font-style:normal;color:var(--jaune);font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-mienne .cp-pill{display:inline-block;margin-top:5px;padding:2px 8px;border-radius:999px;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
:is(rdr-concours-photo,.cp-portail) .cp-pill--attente{background:rgba(245,190,65,.18);color:var(--or)}
:is(rdr-concours-photo,.cp-portail) .cp-pill--ligne{background:rgba(93,191,192,.18);color:var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-pill--refus{background:rgba(230,57,70,.18);color:#ff8a93}
@media (min-width:901px) and (max-height:820px){
  :is(rdr-concours-photo,.cp-portail) .cp-titre{font-size:clamp(36px,4.6vw,62px)}
  :is(rdr-concours-photo,.cp-portail) .cp-accroche{font-size:14.5px;line-height:1.5}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes li{padding:9px 12px}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes i{width:34px;height:34px;border-radius:10px}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes li{grid-template-columns:34px minmax(0,1fr)}
  :is(rdr-concours-photo,.cp-portail) .cp-btn{padding:11px 18px}
}
:is(rdr-concours-photo,.cp-portail) .cp{min-height:100vh}
:is(rdr-concours-photo,.cp-portail) .cp-fond{position:relative;isolation:isolate}
:is(rdr-concours-photo,.cp-portail) .cp-fond::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(46% 700px at 0% 520px,rgba(93,191,192,.11),transparent 72%),radial-gradient(42% 760px at 100% 1500px,rgba(22,53,93,.62),transparent 72%),radial-gradient(40% 640px at 6% 2450px,rgba(252,241,80,.045),transparent 72%),radial-gradient(44% 700px at 96% 3250px,rgba(93,191,192,.08),transparent 72%);background-size:100% 3600px;background-repeat:repeat-y}
:is(rdr-concours-photo,.cp-portail) .cp-fond::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.06;background:var(--cp-vagues,none) 50% 260px/max(1500px,110%) auto repeat-y;-webkit-mask-image:linear-gradient(90deg,#000,rgba(0,0,0,.35) 22%,rgba(0,0,0,.35) 78%,#000);mask-image:linear-gradient(90deg,#000,rgba(0,0,0,.35) 22%,rgba(0,0,0,.35) 78%,#000)}
:is(rdr-concours-photo,.cp-portail)[data-fond="uni"] .cp-fond::before,:is(rdr-concours-photo,.cp-portail)[data-fond="uni"] .cp-fond::after{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-corps{max-width:1440px;margin:0 auto;padding:0 24px 120px}
@media (max-width:700px){
  :is(rdr-concours-photo,.cp-portail) .cp-corps{padding:0 8px 120px}
}
@media (min-width:901px){
  :is(rdr-concours-photo,.cp-portail) .cp-scene-in,:is(rdr-concours-photo,.cp-portail) .cp-corps{max-width:none;padding-left:max(var(--cp-gouttiere),calc((100% - var(--cp-colonne)) / 2));padding-right:max(var(--cp-gouttiere),calc((100% - var(--cp-colonne)) / 2))}
  :is(rdr-concours-photo,.cp-portail) .cp-scene-in{grid-template-columns:minmax(0,1fr) clamp(320px,27vw,370px)}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes{gap:clamp(12px,1.4vw,20px)}
}
@media (min-width:901px){
  :is(rdr-concours-photo,.cp-portail) .cp-scene-in{row-gap:clamp(22px,3.6vh,36px)}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes{gap:0;padding:12px 6px;border-radius:18px;background:rgba(14,17,29,.58);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes li{padding:2px clamp(16px,1.8vw,28px);border:0;border-radius:0;background:none;backdrop-filter:none;-webkit-backdrop-filter:none}
  :is(rdr-concours-photo,.cp-portail) .cp-etapes li+li{border-left:1px solid rgba(255,255,255,.12)}
}
@media (min-width:901px) and (min-height:821px){
  :is(rdr-concours-photo,.cp-portail) .cp-titre{font-size:clamp(34px,4.6vw,70px)}
}
:is(rdr-concours-photo,.cp-portail) .cp-barre{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 0;margin:0 0 12px;background:linear-gradient(rgba(14,17,29,.94) 80%,rgba(14,17,29,0))}
:is(rdr-concours-photo,.cp-portail) .cp-onglets{position:relative;display:flex;gap:2px;padding:5px;border-radius:20px;background:rgba(22,28,48,.94);border:1px solid var(--filet);box-shadow:0 14px 34px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.06)}
:is(rdr-concours-photo,.cp-portail) .cp-onglets-curseur{--c:var(--teal);--c-ombre:rgba(93,191,192,.34);position:absolute;top:5px;bottom:5px;left:0;width:0;border-radius:15px;background-color:var(--c);background-image:linear-gradient(135deg,rgba(255,255,255,.3),rgba(255,255,255,0) 55%,rgba(0,0,0,.1));box-shadow:0 8px 22px var(--c-ombre);transition:transform .38s cubic-bezier(.3,.9,.3,1),width .38s cubic-bezier(.3,.9,.3,1),background-color .38s ease,box-shadow .38s ease}
:is(rdr-concours-photo,.cp-portail) .cp-onglets-curseur[data-ordre="dernieres"]{--c:var(--jaune);--c-ombre:rgba(252,241,80,.3)}
:is(rdr-concours-photo,.cp-portail) .cp-onglets-curseur[data-ordre="aimees"]{--c:#FF6B77;--c-ombre:rgba(255,107,119,.34)}
:is(rdr-concours-photo,.cp-portail) .cp-onglets-curseur:not([style]) ~ .cp-onglet[aria-selected="true"]{background:var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet{position:relative;z-index:1;display:flex;align-items:center;gap:11px;border:0;background:transparent;color:var(--t1);padding:8px 18px 8px 8px;border-radius:15px;text-align:left;white-space:nowrap;transition:color .25s,background .2s}
:is(rdr-concours-photo,.cp-portail) .cp-onglet:hover:not([aria-selected="true"]){background:rgba(255,255,255,.05)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet:focus-visible{outline:2px solid var(--jaune);outline-offset:2px}
:is(rdr-concours-photo,.cp-portail) .cp-onglet i{width:38px;height:38px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;flex:none;background:rgba(93,191,192,.15);color:var(--teal);transition:background .25s,color .25s}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[data-ordre="dernieres"] i{background:rgba(252,241,80,.12);color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[data-ordre="aimees"] i{background:rgba(230,57,70,.16);color:#FF6B77}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[aria-selected="true"] i{background:var(--marine);color:var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[data-ordre="dernieres"][aria-selected="true"] i{color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[data-ordre="aimees"][aria-selected="true"] i{color:#FF6B77}
:is(rdr-concours-photo,.cp-portail) .cp-onglet i svg{width:19px;height:19px}
:is(rdr-concours-photo,.cp-portail) .cp-onglet b{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:800;letter-spacing:.01em}
:is(rdr-concours-photo,.cp-portail) .cp-onglet small{display:block;font-size:11px;font-weight:500;color:var(--t3);margin-top:2px;transition:color .25s}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[aria-selected="true"]{color:var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[aria-selected="true"] small{color:rgba(14,17,29,.72)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet em{font-style:normal;font-size:10px;font-weight:800;letter-spacing:.04em;line-height:1;padding:3px 6px;border-radius:999px;background:var(--jaune);color:var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-onglet em:empty{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-onglet[aria-selected="true"] em{background:var(--marine);color:var(--jaune)}
@media (max-width:700px){
  :is(rdr-concours-photo,.cp-portail) .cp-barre{padding:10px 0}
  :is(rdr-concours-photo,.cp-portail) .cp-onglets{flex:1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-radius:18px}
  :is(rdr-concours-photo,.cp-portail) .cp-onglet{flex-direction:column;justify-content:center;gap:5px;padding:8px 4px 7px;text-align:center}
  :is(rdr-concours-photo,.cp-portail) .cp-onglet i{width:30px;height:30px;border-radius:10px}
  :is(rdr-concours-photo,.cp-portail) .cp-onglet i svg{width:16px;height:16px}
  :is(rdr-concours-photo,.cp-portail) .cp-onglet b{font-size:12px;justify-content:center}
  :is(rdr-concours-photo,.cp-portail) .cp-onglet small{display:none}
  :is(rdr-concours-photo,.cp-portail) .cp-onglet em{position:absolute;top:5px;right:8px}
}
:is(rdr-concours-photo,.cp-portail) .cp-barre-droite{display:flex;gap:10px;align-items:center;font-size:12px;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-barre-droite .cp-btn{padding:9px 14px;font-size:11.5px}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-barre-droite{display:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-jour{display:grid;grid-template-columns:minmax(0,3fr) minmax(260px,2fr);margin:0 0 18px;border-radius:18px;overflow:hidden;background:var(--panneau);border:1px solid var(--filet)}
:is(rdr-concours-photo,.cp-portail) .cp-jour[hidden]{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-jour-img{position:relative;min-height:min(300px,40svh);height:min(460px,56svh);background:#000}
:is(rdr-concours-photo,.cp-portail) .cp-jour-img img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
:is(rdr-concours-photo,.cp-portail) .cp-jour-txt{padding:26px 28px;display:flex;flex-direction:column;justify-content:center;gap:10px;background:radial-gradient(420px 260px at 100% 0,rgba(252,241,80,.07),transparent 70%)}
:is(rdr-concours-photo,.cp-portail) .cp-sur{font-size:11.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--teal);margin:0;display:flex;align-items:center;gap:6px}
:is(rdr-concours-photo,.cp-portail) .cp-sur svg{width:14px;height:14px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-jour-txt .cp-sur{color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-jour-txt h2{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;font-size:28px;line-height:1;text-transform:uppercase}
:is(rdr-concours-photo,.cp-portail) .cp-jour-txt p{margin:0;color:var(--t2);font-size:14px;line-height:1.5}
:is(rdr-concours-photo,.cp-portail) .cp-jour-txt .cp-aut{font-size:12.5px;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-jour-txt .cp-aut b{color:var(--t1)}
:is(rdr-concours-photo,.cp-portail) .cp-jour-acts{display:flex;gap:8px;margin-top:6px;flex-wrap:wrap}
@media (max-width:700px){
  :is(rdr-concours-photo,.cp-portail) .cp-jour-acts .cp-btn{padding:10px 14px;font-size:11.5px}
}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-jour{grid-template-columns:1fr}
  :is(rdr-concours-photo,.cp-portail) .cp-jour-img{height:min(260px,34svh);min-height:0}
  :is(rdr-concours-photo,.cp-portail) .cp-jour-txt{padding:18px}
}
:is(rdr-concours-photo,.cp-portail) .cp-grille{display:flex;flex-direction:column;gap:6px}
:is(rdr-concours-photo,.cp-portail) .cp-rangee{display:flex;gap:6px}
:is(rdr-concours-photo,.cp-portail) .cp-case{position:relative;margin:0;flex:none;overflow:hidden;border-radius:8px;background:var(--panneau);cursor:zoom-in;outline:0}
:is(rdr-concours-photo,.cp-portail) .cp-case img{width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .35s ease}
:is(rdr-concours-photo,.cp-portail) .cp-case img.est-la{opacity:1}
:is(rdr-concours-photo,.cp-portail) .cp-case:focus-visible{box-shadow:0 0 0 3px var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-voile{position:absolute;inset:auto 0 0 0;padding:26px 10px 8px;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.72));color:#fff;font-size:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:8px;opacity:0;transition:opacity .2s}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-voile b{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-compte{flex:none;display:flex;gap:8px;font-weight:700;font-size:11.5px}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-compte span{display:inline-flex;align-items:center;gap:3px}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-compte svg{width:12px;height:12px}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-acts{position:absolute;top:8px;right:8px;display:flex;gap:6px;opacity:0;transition:opacity .2s;transform:translateY(-4px)}
:is(rdr-concours-photo,.cp-portail) .cp-ico{width:34px;height:34px;border-radius:999px;border:0;background:rgba(14,17,29,.72);color:#fff;display:inline-flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)}
:is(rdr-concours-photo,.cp-portail) .cp-ico svg{width:17px;height:17px}
:is(rdr-concours-photo,.cp-portail) .cp-ico[data-on="1"]{background:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-ico--coeur[data-on="1"]{color:var(--rouge)}
:is(rdr-concours-photo,.cp-portail) .cp-ico--etoile[data-on="1"]{color:var(--or)}
@media (hover:hover){
  :is(rdr-concours-photo,.cp-portail) .cp-case:hover .cp-voile,:is(rdr-concours-photo,.cp-portail) .cp-case:focus-within .cp-voile{opacity:1}
  :is(rdr-concours-photo,.cp-portail) .cp-case:hover .cp-acts,:is(rdr-concours-photo,.cp-portail) .cp-case:focus-within .cp-acts{opacity:1;transform:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-marques{position:absolute;left:8px;top:8px;display:flex;gap:5px}
:is(rdr-concours-photo,.cp-portail) .cp-marque{display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 8px;border-radius:999px;font-size:10.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--marine);background:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-marque--new{background:var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-marque--moi{background:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-marque--jour{background:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-marque svg{width:11px;height:11px}
:is(rdr-concours-photo,.cp-portail) .cp-case .cp-pose{position:absolute;right:8px;bottom:8px;display:flex;gap:5px}
:is(rdr-concours-photo,.cp-portail) .cp-pose i{width:26px;height:26px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-pose i svg{width:14px;height:14px}
:is(rdr-concours-photo,.cp-portail) .cp-pose i.coeur{color:var(--rouge)}
:is(rdr-concours-photo,.cp-portail) .cp-pose i.etoile{color:var(--or)}
@media (hover:hover){
  :is(rdr-concours-photo,.cp-portail) .cp-case:hover .cp-pose{opacity:0}
}
:is(rdr-concours-photo,.cp-portail) .cp-case.est-masquee{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-case.est-moi{cursor:default}
:is(rdr-concours-photo,.cp-portail) .cp-sentinelle{height:1px}
:is(rdr-concours-photo,.cp-portail) .cp-fin{padding:40px 0;text-align:center;color:var(--t3);font-size:13px}
:is(rdr-concours-photo,.cp-portail) .cp-vide{padding:60px 20px;text-align:center;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-vide h3{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:26px;margin:0 0 8px;color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-att{display:block;border-radius:10px;background:linear-gradient(100deg,rgba(255,255,255,.04) 35%,rgba(255,255,255,.1) 50%,rgba(255,255,255,.04) 65%) 0 0/300% 100%,rgba(255,255,255,.035);animation:cp-reflet 1.7s linear infinite}
@keyframes cp-reflet{from{background-position:100% 0}to{background-position:0 0}}
:is(rdr-concours-photo,.cp-portail) .cp-mur .cp-att{border-radius:10px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-att--chiffres{height:19px;border-radius:6px}
:is(rdr-concours-photo,.cp-portail) .cp-att--mienne{height:82px;border-radius:14px}
:is(rdr-concours-photo,.cp-portail) .cp-att--bouton{height:48px;border-radius:999px}
:is(rdr-concours-photo,.cp-portail) .cp-att--ligne{height:14px;width:70%;margin:4px auto 2px;border-radius:6px}
:is(rdr-concours-photo,.cp-portail) .cp-jour--attente .cp-jour-img{background-color:rgba(255,255,255,.035);border-radius:0}
:is(rdr-concours-photo,.cp-portail) .cp-jour--attente .cp-jour-txt{gap:12px}
:is(rdr-concours-photo,.cp-portail) .cp-att--barre{height:14px;border-radius:6px}
:is(rdr-concours-photo,.cp-portail) .cp-att--titre{height:56px;width:92%;border-radius:8px}
:is(rdr-concours-photo,.cp-portail) .cp-att--boutons{height:46px;width:62%;border-radius:999px;margin-top:6px}
:is(rdr-concours-photo,.cp-portail) .cp-att-rangee{display:flex;gap:6px;height:230px}
:is(rdr-concours-photo,.cp-portail) .cp-att-rangee .cp-att{flex:1 1 0;border-radius:8px}
@media (min-width:1352px){
  :is(rdr-concours-photo,.cp-portail) .cp-att-rangee{height:260px}
}
@media (max-width:948px){
  :is(rdr-concours-photo,.cp-portail) .cp-att-rangee{height:190px}
}
@media (max-width:500px){
  :is(rdr-concours-photo,.cp-portail) .cp-att-rangee{height:130px}
  :is(rdr-concours-photo,.cp-portail) .cp-att-rangee .cp-att:nth-child(n+4){display:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span.cp-att{border-radius:12px;border-color:rgba(255,255,255,.14)}
:is(rdr-concours-photo,.cp-portail) .cp-flottant{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:50;display:none}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-flottant{display:inline-flex;box-shadow:0 10px 30px rgba(0,0,0,.45);transition:opacity .25s,transform .25s}
}
:is(rdr-concours-photo,.cp-portail) .cp-flottant[data-cache="1"]{opacity:0;pointer-events:none;transform:translateX(-50%) translateY(16px)}
:is(rdr-concours-photo,.cp-portail) .cp-gp{display:none}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-gp{display:grid;grid-template-columns:112px minmax(0,1fr);gap:16px;align-items:center;margin:4px 0 14px;padding:14px 16px 14px 12px;border-radius:18px;background:radial-gradient(260px 160px at 0% 50%,rgba(93,191,192,.16),transparent 70%),rgba(22,28,48,.92);border:1px solid rgba(93,191,192,.3);box-shadow:0 14px 34px rgba(0,0,0,.3)}
}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile{position:relative;height:132px;cursor:pointer}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span{position:absolute;left:14px;top:6px;width:84px;height:118px;border-radius:12px;overflow:hidden;background:var(--panneau);box-shadow:0 10px 24px rgba(0,0,0,.45);border:2px solid rgba(255,255,255,.9)}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span img{width:100%;height:100%;object-fit:cover}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(1){transform:rotate(-9deg) translateX(-8px);opacity:.75}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(2){transform:rotate(7deg) translateX(8px);opacity:.85}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(3){animation:cp-balance 4.4s ease-in-out infinite;transform-origin:50% 120%}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(3)::before,:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(3)::after{content:"";position:absolute;inset:0;opacity:0}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(3)::before{background:linear-gradient(270deg,color-mix(in srgb,var(--oui) 85%,transparent),color-mix(in srgb,var(--oui) 25%,transparent));animation:cp-balance-oui 4.4s ease-in-out infinite}
:is(rdr-concours-photo,.cp-portail) .cp-gp-pile span:nth-child(3)::after{background:linear-gradient(90deg,color-mix(in srgb,var(--non) 85%,transparent),color-mix(in srgb,var(--non) 25%,transparent));animation:cp-balance-non 4.4s ease-in-out infinite}
@keyframes cp-balance{0%,12%,50%,62%,100%{transform:none}28%,36%{transform:translateX(12px) rotate(9deg)}78%,86%{transform:translateX(-12px) rotate(-9deg)}}
@keyframes cp-balance-oui{0%,12%,50%,100%{opacity:0}28%,36%{opacity:1}}
@keyframes cp-balance-non{0%,50%,62%,100%{opacity:0}78%,86%{opacity:1}}
:is(rdr-concours-photo,.cp-portail) .cp-gp-txt .cp-sur{margin:0 0 4px}
:is(rdr-concours-photo,.cp-portail) .cp-gp-txt h2{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:21px;line-height:1;color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-gp-txt p{margin:6px 0 10px;font-size:12.5px;line-height:1.4;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-gp-txt p .oui{color:var(--oui);font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-gp-txt p .non{color:var(--non);font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-gp-txt .cp-btn{padding:11px 16px;font-size:12px;width:100%}
:is(rdr-concours-photo,.cp-portail) .cp-gpc{display:flex;align-items:center;gap:14px;padding:3px 6px 3px 8px;border-radius:18px;background:radial-gradient(180px 90px at 0% 50%,rgba(93,191,192,.16),transparent 70%),rgba(22,28,48,.94);border:1px solid rgba(93,191,192,.3);box-shadow:0 14px 34px rgba(0,0,0,.35)}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-pile{position:relative;flex:none;width:50px;height:58px;cursor:pointer}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-pile .cp-gp-pile{position:absolute;left:0;top:0;width:112px;height:132px;transform:scale(.44);transform-origin:0 0}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-txt .cp-sur{margin:0 0 2px;font-size:10px}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-txt b{display:block;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:18px;line-height:1.05;color:#fff;white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-txt span{display:block;margin-top:2px;font-size:11.5px;color:var(--t2);white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-txt em{font-style:normal;font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-txt .oui{color:var(--oui)}
:is(rdr-concours-photo,.cp-portail) .cp-gpc-txt .non{color:var(--non)}
:is(rdr-concours-photo,.cp-portail) .cp-gpc .cp-btn{padding:11px 18px;font-size:12px;white-space:nowrap}
@media (max-width:1179px){
  :is(rdr-concours-photo,.cp-portail) .cp-gpc-txt{display:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-fen{position:fixed;inset:0;z-index:10020;display:none;background:rgba(6,10,20,.95);backdrop-filter:blur(6px)}
:is(rdr-concours-photo,.cp-portail) .cp-fen[data-ouverte="1"]{display:block}
:is(rdr-concours-photo,.cp-portail) .cp-fen-corps{position:absolute;inset:0;display:grid;grid-template-columns:minmax(0,1fr) 340px;grid-template-rows:minmax(0,1fr)}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-fen-corps{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto}
}
:is(rdr-concours-photo,.cp-portail) .cp-fen-scene{position:relative;min-width:0;min-height:0;display:flex;align-items:center;justify-content:center;padding:60px 76px;touch-action:pan-y}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-fen-scene{padding:58px 10px 10px}
}
:is(rdr-concours-photo,.cp-portail) .cp-fen-scene img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:6px;box-shadow:0 20px 60px rgba(0,0,0,.5);opacity:0;transition:opacity .25s}
:is(rdr-concours-photo,.cp-portail) .cp-fen-scene img.est-la{opacity:1}
:is(rdr-concours-photo,.cp-portail) .cp-fen-fleche{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:999px;border:1px solid var(--filet);background:rgba(22,28,48,.85);color:#fff;display:inline-flex;align-items:center;justify-content:center;z-index:2}
:is(rdr-concours-photo,.cp-portail) .cp-fen-fleche svg{width:22px;height:22px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-fleche--g{left:14px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-fleche--d{right:14px}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-fen-fleche{display:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-fen-fermer{position:absolute;top:10px;right:10px;z-index:2;width:44px;height:44px;border-radius:999px;border:0;background:rgba(22,28,48,.9);color:#fff;display:inline-flex;align-items:center;justify-content:center}
:is(rdr-concours-photo,.cp-portail) .cp-fen-fermer svg{width:20px;height:20px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-num{position:absolute;top:22px;left:20px;font-size:12px;color:var(--t3);letter-spacing:.08em}
:is(rdr-concours-photo,.cp-portail) .cp-fen-panneau{background:var(--panneau);border-left:1px solid var(--filet);padding:60px 24px 24px;display:flex;flex-direction:column;gap:14px;overflow:auto;min-height:0}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-fen-panneau{border-left:0;border-top:1px solid var(--filet);padding:14px 16px calc(14px + env(safe-area-inset-bottom));gap:10px;max-height:44vh;max-height:44svh}
}
:is(rdr-concours-photo,.cp-portail) .cp-fen-aut{font-size:12px;color:var(--t3);letter-spacing:.06em;text-transform:uppercase}
:is(rdr-concours-photo,.cp-portail) .cp-fen-aut b{display:block;font-size:17px;color:#fff;letter-spacing:0;text-transform:none;margin-top:3px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-leg{margin:0;font-size:15px;line-height:1.5;color:var(--t1)}
:is(rdr-concours-photo,.cp-portail) .cp-fen-leg:empty{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-fen-date{font-size:12px;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-fen-comptes{display:flex;gap:16px;font-size:13px;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-fen-comptes span{display:inline-flex;align-items:center;gap:6px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-comptes svg{width:15px;height:15px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-comptes b{color:#fff;font-size:15px}
:is(rdr-concours-photo,.cp-portail) .cp-fen-note{font-size:11.5px;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-fen-acts{display:flex;flex-direction:column;gap:8px;margin-top:auto}
@media (max-width:900px){
  :is(rdr-concours-photo,.cp-portail) .cp-fen-acts{display:grid;grid-template-columns:1fr 1fr;margin-top:0}
  :is(rdr-concours-photo,.cp-portail) .cp-fen-acts .cp-act{padding:11px 12px}
  :is(rdr-concours-photo,.cp-portail) .cp-fen-acts .cp-act small{display:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-act{display:inline-flex;align-items:center;gap:10px;border:1.5px solid var(--filet);border-radius:12px;background:transparent;color:#fff;padding:12px 14px;font-size:13px;font-weight:700;text-align:left;flex:1}
:is(rdr-concours-photo,.cp-portail) .cp-act svg{width:18px;height:18px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-act small{display:block;font-weight:500;font-size:11px;color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-act[data-on="1"].cp-act--coeur{background:rgba(230,57,70,.16);border-color:var(--rouge);color:#ffb3b9}
:is(rdr-concours-photo,.cp-portail) .cp-act[data-on="1"].cp-act--etoile{background:rgba(245,190,65,.16);border-color:var(--or);color:var(--or)}
:is(rdr-concours-photo,.cp-portail) .cp-act--sobre{border-style:dashed;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-act[disabled]{opacity:.45;cursor:not-allowed}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir{position:fixed;top:0;right:0;bottom:0;width:min(420px,100vw);z-index:10030;background:var(--panneau);border-left:1px solid var(--filet);transform:translateX(102%);transition:transform .28s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;box-shadow:-20px 0 60px rgba(0,0,0,.4);visibility:hidden}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir[data-ouvert="1"]{transform:none;visibility:visible}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-tete{padding:18px 18px 12px;border-bottom:1px solid var(--filet);display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-tete h3{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:24px;line-height:1}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-tete p{margin:6px 0 0;font-size:12.5px;color:var(--t2);line-height:1.45}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-tete p b{color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-liste{flex:1;overflow:auto;padding:12px;display:grid;grid-template-columns:1fr 1fr;gap:8px;align-content:start}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item{position:relative;border-radius:10px;overflow:hidden;background:var(--nuit);aspect-ratio:1;cursor:zoom-in}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item img{width:100%;height:100%;object-fit:cover}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item .cp-tir-acts{position:absolute;left:6px;top:6px;display:flex;gap:5px}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item .cp-ico{width:30px;height:30px}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item .cp-ico svg{width:15px;height:15px}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item .cp-tir-aut{position:absolute;left:0;right:0;bottom:0;padding:18px 8px 6px;font-size:11px;color:#fff;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-item.est-etoile{outline:3px solid var(--or);outline-offset:-3px}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-vide{grid-column:1/-1;padding:30px 12px;text-align:center;color:var(--t3);font-size:13px;line-height:1.5}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-pied{padding:12px 18px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--filet);font-size:12px;color:var(--t3);line-height:1.45}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-x{width:40px;height:40px;border-radius:999px;border:0;background:var(--voile);color:#fff;flex:none;display:inline-flex;align-items:center;justify-content:center}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-x svg{width:18px;height:18px}
:is(rdr-concours-photo,.cp-portail) .cp-ombre{position:fixed;inset:0;z-index:10025;background:rgba(0,0,0,.45);display:none}
:is(rdr-concours-photo,.cp-portail) .cp-ombre[data-on="1"]{display:block}
:is(rdr-concours-photo,.cp-portail) .cp-gl{position:fixed;inset:0;z-index:10010;display:none;flex-direction:column;background:radial-gradient(700px 420px at 50% 0,rgba(93,191,192,.12),transparent 70%),var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-gl[data-ouvert="1"]{display:flex}
:is(rdr-concours-photo,.cp-portail) .cp-gl-tete{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;padding-top:max(12px,env(safe-area-inset-top));width:min(100%,640px);margin:0 auto}
:is(rdr-concours-photo,.cp-portail) .cp-gl-tete .cp-prog{font-size:12px;color:var(--t3);margin-top:3px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-tete .cp-prog b{color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-gl-scene{position:relative;flex:1 1 0;min-height:0;width:min(100% - 32px,600px);margin:2px auto 22px;perspective:1000px;touch-action:none}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte{position:absolute;inset:0;border-radius:18px;overflow:hidden;background:var(--panneau);box-shadow:0 20px 50px rgba(0,0,0,.5);will-change:transform;user-select:none;-webkit-user-select:none;cursor:grab}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte:active{cursor:grabbing}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte img{position:relative;width:100%;height:100%;object-fit:contain;pointer-events:none}
:is(rdr-concours-photo,.cp-portail)[data-gl="cadre"] .cp-gl-carte img{object-fit:cover}
:is(rdr-concours-photo,.cp-portail)[data-gl="cadre"] .cp-gl-carte .cp-gl-fond{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte .cp-gl-fond{position:absolute;inset:-20px;background-size:cover;background-position:center;filter:blur(24px) brightness(.5);transform:scale(1.1)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte .cp-gl-voile{position:absolute;left:0;right:0;bottom:0;padding:40px 16px 14px;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.75));color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte .cp-gl-voile b{display:block;font-size:15px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte .cp-gl-voile span{font-size:13px;color:rgba(255,255,255,.8)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte.n1{transform:scale(.96) translateY(10px);opacity:.85}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte.n2{transform:scale(.92) translateY(20px);opacity:.6}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte{position:absolute;inset:0;z-index:3;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0;border-radius:inherit}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--oui{background:linear-gradient(270deg,color-mix(in srgb,var(--oui) 86%,transparent) 0%,color-mix(in srgb,var(--oui) 48%,transparent) 42%,color-mix(in srgb,var(--oui) 20%,transparent) 100%);box-shadow:inset 0 0 0 5px var(--oui)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--non{background:linear-gradient(90deg,color-mix(in srgb,var(--non) 86%,transparent) 0%,color-mix(in srgb,var(--non) 48%,transparent) 42%,color-mix(in srgb,var(--non) 20%,transparent) 100%);box-shadow:inset 0 0 0 5px var(--non)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte.n0 .cp-gl-teinte--oui{opacity:var(--p-oui,0)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte.n0 .cp-gl-teinte--non{opacity:var(--p-non,0)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-signe{display:flex;flex-direction:column;align-items:center;gap:10px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--oui .cp-gl-signe{transform:scale(calc(.55 + .45 * var(--p-oui,0)))}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--non .cp-gl-signe{transform:scale(calc(.55 + .45 * var(--p-non,0)))}
:is(rdr-concours-photo,.cp-portail) .cp-gl-signe i{width:96px;height:96px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 14px 36px rgba(0,0,0,.35)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--oui .cp-gl-signe i{color:var(--oui)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--non .cp-gl-signe i{color:var(--non)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-signe i svg{width:46px;height:46px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-signe b{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:30px;line-height:1;padding:8px 18px 7px;border-radius:999px;box-shadow:0 10px 26px rgba(0,0,0,.3)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--oui .cp-gl-signe b{background:var(--oui);color:var(--oui-encre)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-teinte--non .cp-gl-signe b{background:var(--non);color:var(--non-encre)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-acts{display:flex;justify-content:center;align-items:center;gap:22px;padding:4px 16px calc(16px + env(safe-area-inset-bottom))}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond{position:relative;width:64px;height:64px;border-radius:999px;border:2px solid var(--filet);background:var(--panneau);color:#fff;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.35);transition:transform .12s ease}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond svg{position:relative;width:28px;height:28px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond::before{content:"";position:absolute;inset:-2px;border-radius:inherit;opacity:0}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--passe{color:var(--non);border-color:color-mix(in srgb,var(--non) 55%,transparent)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--passe::before{background:var(--non);opacity:var(--p-non,0)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--garde{color:var(--oui);border-color:color-mix(in srgb,var(--oui) 55%,transparent);width:76px;height:76px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--garde::before{background:var(--oui);opacity:var(--p-oui,0)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--garde svg{width:34px;height:34px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--garde svg{color:color-mix(in srgb,var(--oui-encre) calc(var(--p-oui,0) * 100%),var(--oui))}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--passe svg{color:color-mix(in srgb,var(--non-encre) calc(var(--p-non,0) * 100%),var(--non))}
:is(rdr-concours-photo,.cp-portail) .cp-gl[style*="--p-oui"] .cp-gl-rond--garde{transform:scale(calc(1 + .1 * var(--p-oui,0)))}
:is(rdr-concours-photo,.cp-portail) .cp-gl[style*="--p-non"] .cp-gl-rond--passe{transform:scale(calc(1 + .1 * var(--p-non,0)))}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--petit{width:48px;height:48px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--petit svg{width:20px;height:20px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px;gap:10px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin[data-on="1"]{display:flex}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin h3{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:30px;line-height:1}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin p{margin:0;color:var(--t2);font-size:14px;line-height:1.5;max-width:320px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide{text-align:center;font-size:12px;color:var(--t3);padding:0 16px;margin:0 0 8px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide b{font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide .oui{color:var(--oui)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide .non{color:var(--non)}
@media (max-height:700px){
  :is(rdr-concours-photo,.cp-portail) .cp-gl-rond{width:54px;height:54px}
  :is(rdr-concours-photo,.cp-portail) .cp-gl-rond--garde{width:64px;height:64px}
  :is(rdr-concours-photo,.cp-portail) .cp-gl-aide{display:none}
}
:is(rdr-concours-photo,.cp-portail) .cp-modal{position:fixed;inset:0;z-index:10040;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(6,10,20,.82);backdrop-filter:blur(4px)}
:is(rdr-concours-photo,.cp-portail) .cp-modal[data-ouverte="1"]{display:flex}
:is(rdr-concours-photo,.cp-portail) .cp-modal-boite{width:min(560px,100%);max-height:calc(100vh - 32px);max-height:calc(100svh - 32px);overflow:auto;background:var(--panneau);border:1px solid var(--filet);border-radius:18px;padding:22px}
:is(rdr-concours-photo,.cp-portail) .cp-modal-boite h3{margin:0 0 6px;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:26px;line-height:1}
:is(rdr-concours-photo,.cp-portail) .cp-modal-boite p{margin:0 0 12px;color:var(--t2);font-size:13.5px;line-height:1.5}
:is(rdr-concours-photo,.cp-portail) .cp-drop{display:block;border:2px dashed rgba(255,255,255,.22);border-radius:14px;padding:26px 16px;text-align:center;color:var(--t2);font-size:13px;line-height:1.5;cursor:pointer}
:is(rdr-concours-photo,.cp-portail) .cp-drop b{display:block;color:#fff;font-size:14px;margin-bottom:4px}
:is(rdr-concours-photo,.cp-portail) .cp-drop small{display:block;color:var(--t3);font-size:11.5px;margin-top:6px}
:is(rdr-concours-photo,.cp-portail) .cp-apercu{display:none;gap:14px;align-items:flex-start}
:is(rdr-concours-photo,.cp-portail) .cp-apercu[data-on="1"]{display:flex}
:is(rdr-concours-photo,.cp-portail) .cp-apercu img{width:160px;height:120px;object-fit:contain;background:var(--nuit);border-radius:10px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-apercu-i{font-size:12.5px;color:var(--t2);line-height:1.5}
:is(rdr-concours-photo,.cp-portail) .cp-apercu-i b{color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-champ{width:100%;margin:12px 0 0;padding:11px 12px;border-radius:10px;border:1px solid var(--filet);background:var(--nuit);color:#fff;font:500 13.5px var(--police)}
:is(rdr-concours-photo,.cp-portail) .cp-champ::placeholder{color:var(--t3)}
:is(rdr-concours-photo,.cp-portail) .cp-case-a-cocher{display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:var(--t2);line-height:1.45;margin-top:10px}
:is(rdr-concours-photo,.cp-portail) .cp-case-a-cocher input{margin-top:3px;accent-color:var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-case-a-cocher a{color:var(--teal)}
:is(rdr-concours-photo,.cp-portail) .cp-modal-acts{display:flex;gap:8px;justify-content:flex-end;margin-top:16px;flex-wrap:wrap}
:is(rdr-concours-photo,.cp-portail) .cp-progress{height:6px;border-radius:999px;background:var(--voile);overflow:hidden;margin-top:14px;display:none}
:is(rdr-concours-photo,.cp-portail) .cp-progress[data-on="1"]{display:block}
:is(rdr-concours-photo,.cp-portail) .cp-progress i{display:block;height:100%;width:0;background:var(--teal);transition:width .2s}
:is(rdr-concours-photo,.cp-portail) .cp-ok{display:none;text-align:center;padding:10px 0 4px}
:is(rdr-concours-photo,.cp-portail) .cp-ok[data-on="1"]{display:block}
:is(rdr-concours-photo,.cp-portail) .cp-ok .cp-rond-ok{width:56px;height:56px;border-radius:999px;background:rgba(93,191,192,.18);color:var(--teal);display:inline-flex;align-items:center;justify-content:center;margin-bottom:10px}
:is(rdr-concours-photo,.cp-portail) .cp-ok .cp-rond-ok svg{width:28px;height:28px}
:is(rdr-concours-photo,.cp-portail) .cp-toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%) translateY(10px);z-index:10050;background:#fff;color:var(--marine);padding:10px 16px;border-radius:999px;font-size:13px;font-weight:700;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;white-space:nowrap;box-shadow:0 10px 30px rgba(0,0,0,.4)}
:is(rdr-concours-photo,.cp-portail) .cp-toast[data-on="1"]{opacity:1;transform:translateX(-50%)}
`;

  const PAGE = `<div class="cp" id="cp">
  <section class="cp-scene" aria-labelledby="cp-titre">
    <div class="cp-mur" id="cp-mur" aria-hidden="true"><div class="cp-mur-col"><i class="cp-att" style="height:210px"></i><i class="cp-att" style="height:150px"></i><i class="cp-att" style="height:260px"></i><i class="cp-att" style="height:180px"></i><i class="cp-att" style="height:230px"></i></div><div class="cp-mur-col"><i class="cp-att" style="height:170px"></i><i class="cp-att" style="height:240px"></i><i class="cp-att" style="height:190px"></i><i class="cp-att" style="height:250px"></i><i class="cp-att" style="height:160px"></i></div><div class="cp-mur-col"><i class="cp-att" style="height:230px"></i><i class="cp-att" style="height:180px"></i><i class="cp-att" style="height:150px"></i><i class="cp-att" style="height:220px"></i><i class="cp-att" style="height:200px"></i></div><div class="cp-mur-col"><i class="cp-att" style="height:160px"></i><i class="cp-att" style="height:250px"></i><i class="cp-att" style="height:200px"></i><i class="cp-att" style="height:170px"></i><i class="cp-att" style="height:240px"></i></div></div>
    <img class="cp-vagues" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  alt="" aria-hidden="true">
    <div class="cp-scene-in">
      <div>
        <div class="cp-marque-bloc">
          <alpina-clock class="cp-montre" aria-hidden="true"></alpina-clock>
          <img class="cp-alpina" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" width="105" height="27">
          <span class="cp-marque-sep" aria-hidden="true"></span>
          <span class="cp-marque-nom">Challenge photo</span>
        </div>
        <h1 class="cp-titre" id="cp-titre">Votre <em>Route du Rhum</em>,<br> en une photo</h1>
        <p class="cp-accroche">Une photo par membre, celle qui raconte le mieux votre Route du Rhum.</p>
        <ul class="cp-chiffres" id="cp-chiffres"><li class="cp-att cp-att--chiffres" style="width:140px"></li><li class="cp-att cp-att--chiffres" style="width:160px"></li><li class="cp-att cp-att--chiffres" style="width:190px"></li></ul>
      </div>
      <div class="cp-actions" id="cp-actions"><div class="cp-att cp-att--mienne"></div><div class="cp-att cp-att--bouton"></div><div class="cp-att cp-att--ligne"></div></div>
      <ol class="cp-etapes">
        <li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/></svg></i><b>Déposez votre photo</b><span>Une seule par membre, relue par l'équipe</span></li>
        <li><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.3 3.2 4.5 6.9 4.5c2 0 3.4 1 4.1 2.3.7-1.3 2.1-2.3 4.1-2.3 3.7 0 5.9 3.8 4.5 7.4C19.5 16.4 12 21 12 21z"/></svg></i><b>Gardez vos coups de cœur</b><span>Sans limite, ils forment votre sélection</span></li>
        <li><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg></i><b>Posez votre étoile</b><span>Une par membre, la plus étoilée gagne</span></li>
      </ol>
      <p class="cp-partenaire"><b>Alpina</b>, chronométreur officiel de la Route du Rhum. Aperçu du challenge, avec les photos du site, des noms et des votes fictifs.</p>
    </div>
  </section>

  <div class="cp-fond"><div class="cp-corps">
    <section class="cp-gp" id="cp-gp" aria-label="Mode glisser">
      <div class="cp-gp-pile" id="cp-gp-pile" aria-hidden="true"><span class="cp-att"></span><span class="cp-att"></span><span class="cp-att"></span></div>
      <div class="cp-gp-txt">
        <p class="cp-sur">Mode glisser</p>
        <h2>Jugez-les une à une</h2>
        <p>Vers la droite, <b class="oui">je garde</b>. Vers la gauche, <b class="non">je passe</b>. Le plus rapide pour trier depuis son téléphone.</p>
        <button class="cp-btn cp-btn--or" type="button" id="cp-gp-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><rect x="9" y="6" width="6" height="12" rx="1.5"/></svg>Je commence</button>
      </div>
    </section>
    <div class="cp-barre">
      <div class="cp-onglets" role="tablist" id="cp-onglets">
        <span class="cp-onglets-curseur" id="cp-onglets-curseur" aria-hidden="true"></span>
        <button class="cp-onglet" role="tab" data-ordre="decouvrir" aria-selected="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg></i><span><b>À découvrir</b><small>têtes, nouveautés, hasard</small></span></button>
        <button class="cp-onglet" role="tab" data-ordre="dernieres" aria-selected="false"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></i><span><b>Les dernières<em id="cp-onglet-neuves"></em></b><small>les plus récentes d'abord</small></span></button>
        <button class="cp-onglet" role="tab" data-ordre="aimees" aria-selected="false"><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg></i><span><b>Les plus aimées</b><small>comptées chaque nuit</small></span></button>
      </div>
      <div class="cp-barre-droite">
        <div class="cp-gpc" id="cp-gpc">
          <div class="cp-gpc-pile" id="cp-gpc-pile" aria-hidden="true"><div class="cp-gp-pile"><span class="cp-att"></span><span class="cp-att"></span><span class="cp-att"></span></div></div>
          <div class="cp-gpc-txt"><p class="cp-sur">Mode glisser</p><b>Jugez-les une à une</b><span>À droite, <em class="oui">je garde</em>. À gauche, <em class="non">je passe</em>.</span></div>
          <button class="cp-btn cp-btn--or" id="cp-btn-glisser-haut" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><rect x="9" y="6" width="6" height="12" rx="1.5"/></svg>Je commence</button>
        </div>
      </div>
    </div>

    <section class="cp-jour cp-jour--attente" id="cp-jour" aria-busy="true"><div class="cp-jour-img cp-att"></div><div class="cp-jour-txt"><i class="cp-att cp-att--barre" style="width:44%"></i><i class="cp-att cp-att--titre"></i><i class="cp-att cp-att--barre" style="width:52%"></i><i class="cp-att cp-att--barre"></i><i class="cp-att cp-att--barre" style="width:86%"></i><i class="cp-att cp-att--boutons"></i></div></section>

    <div class="cp-grille" id="cp-grille" aria-busy="true"><div class="cp-att-rangee"><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:0.7"></i><i class="cp-att" style="flex-grow:1.33"></i><i class="cp-att" style="flex-grow:1"></i><i class="cp-att" style="flex-grow:1.5"></i></div><div class="cp-att-rangee"><i class="cp-att" style="flex-grow:1"></i><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:0.67"></i><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:1.2"></i></div><div class="cp-att-rangee"><i class="cp-att" style="flex-grow:1.33"></i><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:1"></i><i class="cp-att" style="flex-grow:0.75"></i><i class="cp-att" style="flex-grow:1.5"></i></div></div>
    <div class="cp-sentinelle" id="cp-sentinelle"></div>
    <div class="cp-fin" id="cp-fin" hidden>Vous avez tout vu. Les prochaines photos arrivent chaque jour, après validation.</div>
  </div></div>
</div>`;
  const PORTAIL = `<button class="cp-btn cp-btn--or cp-flottant" id="cp-btn-glisser" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><rect x="9" y="6" width="6" height="12" rx="1.5"/></svg>
  Mode glisser
</button>

<!-- Plein écran -->
<div class="cp-fen" id="cp-fen" role="dialog" aria-modal="true" aria-label="Photo en grand">
  <div class="cp-fen-corps">
    <div class="cp-fen-scene" id="cp-fen-scene">
      <span class="cp-fen-num" id="cp-fen-num"></span>
      <button class="cp-fen-fermer" id="cp-fen-fermer" type="button" aria-label="Fermer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
      <button class="cp-fen-fleche cp-fen-fleche--g" id="cp-fen-prec" type="button" aria-label="Précédente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
      <img id="cp-fen-img" alt="">
      <button class="cp-fen-fleche cp-fen-fleche--d" id="cp-fen-suiv" type="button" aria-label="Suivante"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
    </div>
    <aside class="cp-fen-panneau" id="cp-fen-panneau"></aside>
  </div>
</div>

<!-- Ma sélection -->
<div class="cp-ombre" id="cp-ombre"></div>
<aside class="cp-tiroir" id="cp-tiroir" aria-label="Ma sélection">
  <div class="cp-tiroir-tete">
    <div>
      <h3>Ma sélection</h3>
      <p id="cp-tiroir-sous"></p>
    </div>
    <button class="cp-tiroir-x" id="cp-tiroir-x" type="button" aria-label="Fermer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div class="cp-tiroir-liste" id="cp-tiroir-liste"></div>
  <div class="cp-tiroir-pied">Vos cœurs suivent votre compte, sur votre téléphone comme sur votre ordinateur. Votre étoile peut changer de photo jusqu'à la clôture des votes.</div>
</aside>

<!-- Mode glisser -->
<div class="cp-gl" id="cp-gl" role="dialog" aria-modal="true" aria-label="Mode glisser">
  <div class="cp-gl-tete">
    <div><p class="cp-sur">Mode glisser</p><div class="cp-prog" id="cp-gl-prog"></div></div>
    <button class="cp-tiroir-x" id="cp-gl-x" type="button" aria-label="Quitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div class="cp-gl-scene" id="cp-gl-scene">
    <div class="cp-gl-fin" id="cp-gl-fin"></div>
  </div>
  <p class="cp-gl-aide" id="cp-gl-aide">Vers la droite, <b class="oui">je garde</b>. Vers la gauche, <b class="non">je passe</b>. Touchez la photo pour la voir en grand.</p>
  <div class="cp-gl-acts" id="cp-gl-acts">
    <button class="cp-gl-rond cp-gl-rond--petit" id="cp-gl-retour" type="button" aria-label="Revenir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg></button>
    <button class="cp-gl-rond cp-gl-rond--passe" id="cp-gl-passe" type="button" aria-label="Passer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    <button class="cp-gl-rond cp-gl-rond--garde" id="cp-gl-garde" type="button" aria-label="Garder"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.3 3.2 4.5 6.9 4.5c2 0 3.4 1 4.1 2.3.7-1.3 2.1-2.3 4.1-2.3 3.7 0 5.9 3.8 4.5 7.4C19.5 16.4 12 21 12 21z"/></svg></button>
    <button class="cp-gl-rond cp-gl-rond--petit" id="cp-gl-tiroir" type="button" aria-label="Ma sélection"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></button>
  </div>
</div>

<!-- Dépôt -->
<div class="cp-modal" id="cp-depot" role="dialog" aria-modal="true" aria-label="Déposer ma photo">
  <div class="cp-modal-boite">
    <h3>Déposer ma photo</h3>
    <p>Une seule photo par membre. Elle est relue par l'équipe avant d'apparaître, vous serez prévenu dans votre Espace Rhum.</p>
    <div id="cp-depot-etape1">
      <label class="cp-drop" id="cp-drop">
        <b>Choisir une photo</b>
        JPG, PNG ou HEIC, depuis votre téléphone ou votre ordinateur.
        <small>Elle est allégée avant l'envoi (2 400 px, moins de 2 Mo), sans ses données de localisation.</small>
        <input type="file" accept="image/*" hidden id="cp-fichier">
      </label>
      <div class="cp-apercu" id="cp-apercu">
        <img id="cp-apercu-img" alt="">
        <div class="cp-apercu-i" id="cp-apercu-i"></div>
      </div>
      <input class="cp-champ" id="cp-legende" maxlength="140" placeholder="Une légende, si vous voulez (140 signes)">
      <label class="cp-case-a-cocher"><input type="checkbox" id="cp-c1"><span>J'ai pris cette photo, ou j'ai le droit de la diffuser, et les personnes reconnaissables sont d'accord.</span></label>
      <label class="cp-case-a-cocher"><input type="checkbox" id="cp-c2"><span>J'accepte le <a href="#" data-reglement>règlement du challenge</a>.</span></label>
      <div class="cp-progress" id="cp-progress"><i></i></div>
      <div class="cp-modal-acts">
        <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-depot">Annuler</button>
        <button class="cp-btn cp-btn--or" id="cp-envoyer" type="button" disabled>Envoyer ma photo</button>
      </div>
    </div>
    <div class="cp-ok" id="cp-depot-ok">
      <div class="cp-rond-ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></div>
      <h3>C'est envoyé</h3>
      <p>Votre photo est en attente de validation. Vous serez prévenu dans votre Espace Rhum dès qu'elle est en ligne.</p>
      <div class="cp-modal-acts" style="justify-content:center"><button class="cp-btn cp-btn--or" type="button" data-fermer="cp-depot">Retour aux photos</button></div>
    </div>
  </div>
</div>

<!-- Pas connecté -->
<div class="cp-modal" id="cp-connexion" role="dialog" aria-modal="true" aria-label="Créer son Espace Rhum">
  <div class="cp-modal-boite">
    <h3>Votre Espace Rhum pour voter</h3>
    <p>Les cœurs, l'étoile et le dépôt de votre photo sont réservés aux membres de l'Espace Rhum. C'est gratuit, et vous y suivez vos skippers, vos badges et vos actus.</p>
    <div class="cp-modal-acts">
      <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-connexion">Plus tard</button>
      <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-connexion">Me connecter</button>
      <button class="cp-btn cp-btn--or" type="button" data-fermer="cp-connexion">Créer mon Espace</button>
    </div>
  </div>
</div>

<div class="cp-toast" id="cp-toast"></div>

`;

  const ICO = {
    coeur: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.3 3.2 4.5 6.9 4.5c2 0 3.4 1 4.1 2.3.7-1.3 2.1-2.3 4.1-2.3 3.7 0 5.9 3.8 4.5 7.4C19.5 16.4 12 21 12 21z"/></svg>',
    coeurLigne: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.3 3.2 4.5 6.9 4.5c2 0 3.4 1 4.1 2.3.7-1.3 2.1-2.3 4.1-2.3 3.7 0 5.9 3.8 4.5 7.4C19.5 16.4 12 21 12 21z"/></svg>',
    etoile: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',
    etoileLigne: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',
    croix: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    oeilBarre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 10 8 10 8a17 17 0 0 1-2.2 3.2M6.6 6.6A16.8 16.8 0 0 0 2 12s3 8 10 8a10.6 10.6 0 0 0 5.4-1.4"/><path d="M14.1 14.1a3 3 0 0 1-4.2-4.2"/><path d="m2 2 20 20"/></svg>',
    partage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    soleil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lire = (cle) => { try { return JSON.parse(localStorage.getItem(cle) || 'null'); } catch (e) { return null; } };
  const ecrire = (cle, v) => { try { localStorage.setItem(cle, JSON.stringify(v)); } catch (e) {   } };

  function injecterCss() {
    if (document.getElementById('rdr-concours-photo-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-concours-photo-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  let verrous = 0, verrouY = 0;
  function verrouiller() {
    if (verrous++) return;
    verrouY = window.scrollY || 0;
    const b = document.body.style;
    b.position = 'fixed'; b.top = -verrouY + 'px'; b.left = '0'; b.right = '0'; b.width = '100%';
  }
  function deverrouiller(tout) {
    if (!verrous) return;
    verrous = tout ? 0 : verrous - 1;
    if (verrous) return;
    const b = document.body.style;
    b.position = ''; b.top = ''; b.left = ''; b.right = ''; b.width = '';
    window.scrollTo(0, verrouY);
  }

  class RdrConcoursPhoto extends HTMLElement {
    connectedCallback() {
      if (this._monte) return;
      this._monte = true;
      this._nettoyages = [];
      injecterCss();
      const q = new URLSearchParams(location.search);
      this._options = {
        etat: q.get('etat') || this.getAttribute('etat') || 'ligne',
        marque: q.get('marque') === 'sans' ? 'sans' : 'avec',
        teinte: q.get('teinte') === 'cg' ? 'cg' : 'vr',
        fond: q.get('fond') === 'uni' ? 'uni' : 'houle',
        gl: q.get('glisser') === 'cadre' ? 'cadre' : 'entiere'
      };
      this.innerHTML = PAGE;
      const portail = document.createElement('div');
      portail.className = 'cp-portail';
      portail.innerHTML = PORTAIL;
      document.body.appendChild(portail);
      this._portail = portail;
      for (const el of [this, portail]) {
        el.dataset.marque = this._options.marque; el.dataset.teinte = this._options.teinte;
        el.dataset.fond = this._options.fond; el.dataset.gl = this._options.gl;
      }
      this._charger();
    }

    disconnectedCallback() {
      this._monte = false;
      (this._nettoyages || []).forEach(f => { try { f(); } catch (e) {   } });
      this._nettoyages = [];
      if (this._portail) { this._portail.remove(); this._portail = null; }
      deverrouiller(true);
    }

    async _charger() {
      const grille = this.querySelector('#cp-grille');
      try {
        const r = await fetch(this.getAttribute('source') || SOURCE, { credentials: 'omit' });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const donnees = await r.json();
        if (!this._monte) return;
        if (!donnees || !Array.isArray(donnees.photos) || !donnees.photos.length) throw new Error('jeu vide');
        this._nettoyages.push(monter(this, this._portail, donnees, this._options));
      } catch (e) {
        console.warn('[rdr-concours-photo] aperçu indisponible', e && e.message);
        if (grille && this._monte) {
           
          this.querySelectorAll('.cp-att').forEach(n => n.remove());
          const jour = this.querySelector('#cp-jour');
          if (jour) jour.hidden = true;
          grille.innerHTML = '<div class="cp-vide"><h3>L\'aperçu revient dans un instant</h3>Les photos n\'ont pas pu être lues. <button class="cp-btn cp-btn--ligne" type="button" data-reessayer>Réessayer</button></div>';
          const b = grille.querySelector('[data-reessayer]');
          if (b) b.onclick = () => { grille.innerHTML = ''; this._charger(); };
        }
      }
    }
  }

  



  function monter(racine, portail, donnees, options) {
    const nettoyages = [];
    const ecoute = (cible, type, fn, opts) => { cible.addEventListener(type, fn, opts); nettoyages.push(() => cible.removeEventListener(type, fn, opts)); };
    const observer = (o) => { nettoyages.push(() => o.disconnect()); return o; };
    const $ = (id) => document.getElementById(id);

     
    const vis = donnees.visuels || {};
    const logo = racine.querySelector('.cp-alpina');
    if (vis.logoMarque && logo) { logo.src = vis.logoMarque; logo.alt = vis.logoMarqueAlt || ''; } else if (logo) racine.dataset.marque = 'sans';
    const vagues = racine.querySelector('.cp-vagues');
    if (vis.vagues && vagues) { vagues.src = vis.vagues; racine.style.setProperty('--cp-vagues', `url("${vis.vagues}")`); } else if (vagues) vagues.remove();

    const REGLAGES = {
      poidsEtoile: 3, fenetreNouveautes: 7,
      bloc: 12, partTete: 4, partNouveautes: 4, partChance: 4,
      clotureVotes: donnees.cloture || '2026-11-26T23:59:00+01:00'
    };
    const MAINTENANT = Date.parse(donnees.maintenant) || Date.now();

    const etat = {
      photos: [], parId: new Map(), ordre: 'decouvrir', fil: [], graine: 4242, montees: 0, rangees: [],
      connecte: options.etat !== 'visiteur',
      mienne: ['aucune', 'attente', 'ligne', 'refusee'].includes(options.etat) ? options.etat : 'ligne',
      coeurs: [], etoile: null, masquees: new Set(),
      fen: { ouverte: false, liste: [], i: 0 },
      gl: { ouvert: false, liste: [], i: 0, historique: [] }
    };
    const pt = (nom) => /\.$/.test(nom) ? '' : '.';
    const pl = (n, mot) => n + ' ' + mot + (n > 1 ? 's' : '');
    const s0 = lire(CLE);
    if (s0) { etat.coeurs = s0.coeurs || []; etat.etoile = s0.etoile || null; etat.masquees = new Set(s0.masquees || []); }
    const memoriser = () => ecrire(CLE, { coeurs: etat.coeurs, etoile: etat.etoile, masquees: [...etat.masquees] });

    const src = (p, palier) => `https://static.wixstatic.com/media/${p.f}/v1/fit/w_${palier},h_${palier},q_${palier > 1000 ? 85 : 80},enc_auto/${encodeURIComponent(p.n)}`;
    const srcPour = (p, largeurCase) => src(p, (largeurCase * (window.devicePixelRatio || 1)) > 520 ? 1000 : 600);

    



    function dessinerMur() {
      const n = window.innerWidth < 900 ? 3 : 4;
      const choix = etat.photos.filter(p => !p.moi).sort((a, b) => b.coeurs - a.coeurs).slice(0, n * 6);
      const cols = Array.from({ length: n }, () => []);
      choix.forEach((p, i) => cols[i % n].push(p));
      $('cp-mur').innerHTML = cols.map(c => {
        const imgs = c.map(p => `<img src="${src(p, 360)}" alt="" width="360" height="${Math.round(360 / p.ratio)}" loading="lazy" decoding="async" fetchpriority="low">`).join('');
        return `<div class="cp-mur-col">${imgs}${imgs}</div>`;
      }).join('');
    }

     
    observer(new IntersectionObserver((e) => { $('cp-btn-glisser').dataset.cache = e[0].isIntersecting ? 1 : 0; })).observe($('cp-gp'));

     
    function dessinerPile() {
      const trois = etat.photos.filter(p => !p.moi && p.ratio > 0.6 && p.ratio < 1.6).sort((a, b) => b.coeurs - a.coeurs).slice(3, 6);
      const pile = trois.map(p => `<span><img src="${src(p, 360)}" alt="" loading="lazy" decoding="async"></span>`).join('');
      document.querySelectorAll('.cp-gp-pile').forEach(n => { n.innerHTML = pile; });
      const neuves = etat.photos.filter(p => p.jours <= 1).length;    
      $('cp-onglet-neuves').textContent = neuves ? '+' + neuves : '';
    }

     
    function aleaGraine(g) { let s = g >>> 0; return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }
    function melanger(liste, alea) { const l = liste.slice(); for (let i = l.length - 1; i > 0; i--) { const j = Math.floor(alea() * (i + 1)); [l[i], l[j]] = [l[j], l[i]]; } return l; }

    function construireFil(photos, r, graine) {
      const alea = aleaGraine(graine);
      const tetes = photos.slice().sort((a, b) => b.tendance - a.tendance || b.le - a.le);
      const recentes = photos.filter(p => p.jours <= r.fenetreNouveautes).sort((a, b) => b.le - a.le);
      const pris = new Set();
      const fil = [];
      const prendre = (source, n) => { let k = 0; for (const p of source) { if (k >= n) break; if (pris.has(p.id)) continue; pris.add(p.id); fil.push(p.id); k++; } return k; };
      const chances = melanger(photos, alea);
      while (pris.size < photos.length) {
        let k = prendre(tetes, r.partTete);
        k += prendre(recentes, r.partNouveautes);
        k += prendre(chances, r.bloc - k);
        if (!k) break;
      }
      return fil;
    }

    function ordonner() {
      const visibles = etat.photos.filter(p => !etat.masquees.has(p.id));
      if (etat.ordre === 'dernieres') return visibles.slice().sort((a, b) => b.le - a.le).map(p => p.id);
      if (etat.ordre === 'aimees') return visibles.slice().sort((a, b) => (b.coeurs + REGLAGES.poidsEtoile * b.etoiles) - (a.coeurs + REGLAGES.poidsEtoile * a.etoiles) || b.le - a.le).map(p => p.id);
      return construireFil(visibles, REGLAGES, etat.graine);
    }

     
    const grille = $('cp-grille');
    ecoute(portail, 'click', (e) => { if (e.target.closest('[data-reglement]')) { e.preventDefault(); toast('Le règlement arrive avec l\'ouverture du challenge'); } });
    const largeurGrille = () => grille.clientWidth || 1200;
    const hauteurCible = () => { const w = largeurGrille(); return w < 480 ? 130 : w < 900 ? 190 : w < 1300 ? 230 : 260; };

    function calculerRangees(ids) {
      const W = largeurGrille(), H = hauteurCible(), GAP = 6;
      const rangees = []; let courante = [], somme = 0;
      for (const id of ids) {
        const p = etat.parId.get(id);
        const r = Math.min(2.4, Math.max(0.55, p.ratio));
        courante.push({ id, r }); somme += r;
        const largeurBrute = W - GAP * (courante.length - 1);
        if (somme * H >= largeurBrute) {
          const h = largeurBrute / somme;
          rangees.push({ h, cases: courante.map(c => ({ id: c.id, w: c.r * h })) });
          courante = []; somme = 0;
        }
      }
      if (courante.length) {
        const h = Math.min(H * 1.15, (W - GAP * (courante.length - 1)) / somme);
        rangees.push({ h, cases: courante.map(c => ({ id: c.id, w: c.r * h })), derniere: true });
      }
      return rangees;
    }

    function marques(p) {
      const m = [];
      if (p.jour) m.push(`<span class="cp-marque cp-marque--jour">${ICO.soleil} Photo du jour</span>`);
      if (p.moi) m.push('<span class="cp-marque cp-marque--moi">Ma photo</span>');
      else if (p.jours <= 2) m.push('<span class="cp-marque cp-marque--new">Nouvelle</span>');
      return m.join('');
    }
    function poses(p) {
      const c = etat.coeurs.includes(p.id), e = etat.etoile === p.id;
      if (!c && !e) return '';
      return `<span class="cp-pose">${c ? `<i class="coeur">${ICO.coeur}</i>` : ''}${e ? `<i class="etoile">${ICO.etoile}</i>` : ''}</span>`;
    }

    function htmlCase(c, h) {
      const p = etat.parId.get(c.id);
      const w = Math.round(c.w), hh = Math.round(h);
      return `<figure class="cp-case${p.moi ? ' est-moi' : ''}" data-id="${p.id}" style="width:${w}px;height:${hh}px" tabindex="0" role="button" aria-label="${p.auteur}${p.legende ? ', ' + p.legende.replace(/"/g, '&quot;') : ''}">
        <img data-src="${srcPour(p, w)}" alt="" width="${w}" height="${hh}" decoding="async">
        <span class="cp-marques">${marques(p)}</span>
        ${poses(p)}
        <span class="cp-voile"><b>${p.auteur}</b><span class="cp-compte"><span>${ICO.coeur} ${p.coeurs}</span><span>${ICO.etoile} ${p.etoiles}</span></span></span>
        ${p.moi ? '' : `<span class="cp-acts">
          <button class="cp-ico cp-ico--coeur" type="button" data-act="coeur" data-on="${etat.coeurs.includes(p.id) ? 1 : 0}" aria-label="Garder">${ICO.coeur}</button>
          <button class="cp-ico cp-ico--etoile" type="button" data-act="etoile" data-on="${etat.etoile === p.id ? 1 : 0}" aria-label="Mon étoile">${ICO.etoile}</button>
        </span>`}
      </figure>`;
    }

    const observateurImages = observer(new IntersectionObserver((entrees) => {
      for (const e of entrees) {
        if (!e.isIntersecting) continue;
        const img = e.target;
        observateurImages.unobserve(img);
        img.onload = () => img.classList.add('est-la');
        img.src = img.dataset.src;
        if (img.complete && img.naturalWidth) img.classList.add('est-la');
      }
    }, { rootMargin: '600px 0px' }));

    function monterRangees(n) {
      const frag = document.createDocumentFragment();
      const fin = Math.min(etat.rangees.length, etat.montees + n);
      for (let i = etat.montees; i < fin; i++) {
        const r = etat.rangees[i];
        const div = document.createElement('div');
        div.className = 'cp-rangee';
        div.innerHTML = r.cases.map(c => htmlCase(c, r.h)).join('');
        frag.appendChild(div);
      }
      grille.appendChild(frag);
      etat.montees = fin;
      grille.querySelectorAll('img[data-src]:not([src])').forEach(img => observateurImages.observe(img));
      $('cp-fin').hidden = etat.montees < etat.rangees.length;
    }

    const sentinelle = observer(new IntersectionObserver((e) => { if (e[0].isIntersecting && etat.montees < etat.rangees.length) monterRangees(6); }, { rootMargin: '900px 0px' }));

    function dessinerGrille() {
      etat.fil = ordonner();
      etat.rangees = calculerRangees(etat.fil);
      etat.montees = 0;
      grille.innerHTML = '';
      if (!etat.fil.length) { grille.innerHTML = '<div class="cp-vide"><h3>Les premières photos arrivent</h3>Déposez la vôtre, elle sera relue et mise en ligne par l\'équipe.</div>'; $('cp-fin').hidden = true; return; }
      monterRangees(8);
      sentinelle.disconnect(); sentinelle.observe($('cp-sentinelle'));
      if ($('cp-txt-ordre')) $('cp-txt-ordre').textContent = etat.ordre === 'decouvrir' ? 'Un mélange différent à chaque visite' : etat.ordre === 'dernieres' ? 'Les plus récentes d\'abord' : 'Cœurs et étoiles comptés cette nuit';
    }

    function rafraichirCase(id) {
      document.querySelectorAll(`.cp-case[data-id="${id}"]`).forEach(fig => {
        const p = etat.parId.get(id);
        fig.querySelector('.cp-pose')?.remove();
        const html = poses(p);
        if (html) fig.querySelector('.cp-voile').insertAdjacentHTML('beforebegin', html);
        const bc = fig.querySelector('[data-act="coeur"]'), be = fig.querySelector('[data-act="etoile"]');
        if (bc) bc.dataset.on = etat.coeurs.includes(id) ? 1 : 0;
        if (be) be.dataset.on = etat.etoile === id ? 1 : 0;
      });
    }

     
    function toast(txt) { const t = $('cp-toast'); t.textContent = txt; t.dataset.on = 1; clearTimeout(toast.t); toast.t = setTimeout(() => { t.dataset.on = 0; }, 2200); }
    function exigerCompte() { if (etat.connecte) return true; $('cp-connexion').dataset.ouverte = 1; return false; }

    function basculerCoeur(id) {
      if (!exigerCompte()) return;
      const p = etat.parId.get(id);
      if (p.moi) { toast('C\'est votre photo'); return; }
      const i = etat.coeurs.indexOf(id);
      if (i >= 0) { etat.coeurs.splice(i, 1); toast('Retirée de votre sélection'); }
      else { etat.coeurs.push(id); toast(`Gardée, ${pl(etat.coeurs.length, 'photo')} dans votre sélection`); }
      memoriser(); rafraichirCase(id); dessinerTete(); dessinerTiroir(); if (etat.fen.ouverte) dessinerPanneau();
    }
    function poserEtoile(id) {
      if (!exigerCompte()) return;
      const p = etat.parId.get(id);
      if (p.moi) { toast('On ne vote pas pour sa propre photo'); return; }
      if (Date.now() > Date.parse(REGLAGES.clotureVotes)) { toast('Les votes sont clos'); return; }
      const avant = etat.etoile;
      etat.etoile = etat.etoile === id ? null : id;
      if (etat.etoile && !etat.coeurs.includes(id)) etat.coeurs.push(id);
      memoriser();
      if (avant) rafraichirCase(avant);
      rafraichirCase(id);
      toast(etat.etoile ? `Votre étoile est sur la photo de ${p.auteur}` : 'Étoile retirée');
      dessinerTete(); dessinerTiroir(); if (etat.fen.ouverte) dessinerPanneau();
    }
    function masquer(id) {
      etat.masquees.add(id); memoriser();
      document.querySelectorAll(`.cp-case[data-id="${id}"]`).forEach(f => f.classList.add('est-masquee'));
      toast('Masquée, elle ne réapparaîtra pas sur cet appareil');
      if (etat.fen.ouverte) { etat.fen.liste = etat.fen.liste.filter(x => x !== id); if (!etat.fen.liste.length) fermerFen(); else { etat.fen.i = Math.min(etat.fen.i, etat.fen.liste.length - 1); dessinerFen(); } }
    }

    grille.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]');
      const fig = e.target.closest('.cp-case');
      if (!fig) return;
      const id = fig.dataset.id;
      if (b) { e.stopPropagation(); if (b.dataset.act === 'coeur') basculerCoeur(id); else poserEtoile(id); return; }
      ouvrirFen(etat.fil.filter(x => !etat.masquees.has(x)), id);
    });
    grille.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { const fig = e.target.closest('.cp-case'); if (fig) { e.preventDefault(); ouvrirFen(etat.fil, fig.dataset.id); } } });

     
    function dessinerTete() {
      const total = etat.photos.length, coeurs = etat.photos.reduce((s, p) => s + p.coeurs, 0);
      const cl = new Date(REGLAGES.clotureVotes);
      $('cp-chiffres').innerHTML = `<li><b>${total}</b> photos en ligne</li><li><b>${coeurs.toLocaleString('fr-FR')}</b> cœurs posés</li><li>Votes jusqu'au <b>${cl.getDate()} ${cl.toLocaleDateString('fr-FR', { month: 'long' })}</b></li>`;
      const a = $('cp-actions');
      const sel = `<button class="cp-btn cp-btn--ligne" type="button" data-ouvrir-tiroir>${ICO.coeurLigne} Ma sélection <span class="cp-pastille">${etat.coeurs.length}</span></button>`;
      if (!etat.connecte) {
        a.innerHTML = `<button class="cp-btn cp-btn--or" type="button" data-connexion>${ICO.plus} Déposer ma photo</button><div class="cp-etat">Réservé aux membres de l'Espace Rhum. Tout le monde peut regarder, et pour garder et voter, il suffit de <b>créer son Espace</b>.</div>`;
        return;
      }
      const mienne = etat.photos.find(p => p.moi);
      let bloc = '';
      if (etat.mienne === 'aucune') bloc = `<button class="cp-btn cp-btn--or" type="button" data-deposer>${ICO.plus} Déposer ma photo</button>`;
      else if (etat.mienne === 'attente') bloc = `<div class="cp-mienne"><img src="${src(mienne, 600)}" alt=""><div class="cp-mienne-t"><b>Ma photo</b>Relue par l'équipe, en général sous 48 h.<span class="cp-pill cp-pill--attente">En attente</span></div></div>`;
      else if (etat.mienne === 'ligne') bloc = `<div class="cp-mienne"><img src="${src(mienne, 600)}" alt=""><div class="cp-mienne-t"><b>Ma photo</b><i>${pl(mienne.coeurs, 'cœur')}</i> et <i>${pl(mienne.etoiles, 'étoile')}</i> cette nuit.<span class="cp-pill cp-pill--ligne">En ligne</span></div></div>`;
      else bloc = `<div class="cp-mienne"><img src="${src(mienne, 600)}" alt="" style="filter:grayscale(1);opacity:.6"><div class="cp-mienne-t"><b>Ma photo</b>Refusée pour « visage d'un tiers reconnaissable ». Vous pouvez en déposer une autre.<span class="cp-pill cp-pill--refus">Refusée</span></div></div><button class="cp-btn cp-btn--or" type="button" data-deposer>${ICO.plus} Déposer une autre photo</button>`;
      const etoile = etat.etoile ? `Votre étoile est sur la photo de <b>${etat.parId.get(etat.etoile).auteur}</b>${pt(etat.parId.get(etat.etoile).auteur)}` : `Vous n'avez pas encore posé votre étoile.`;
      a.innerHTML = `${bloc}${sel}<div class="cp-etat">${etoile}</div>`;
    }
    $('cp-actions').addEventListener('click', (e) => {
      if (e.target.closest('[data-ouvrir-tiroir]')) { if (exigerCompte()) ouvrirTiroir(); }
      else if (e.target.closest('[data-connexion]')) $('cp-connexion').dataset.ouverte = 1;
      else if (e.target.closest('[data-deposer]')) ouvrirDepot();
    });

     
    function dessinerJour() {
      const p = etat.photos.find(x => x.jour);
      const s = $('cp-jour');
      s.classList.remove('cp-jour--attente'); s.removeAttribute('aria-busy'); grille.removeAttribute('aria-busy');
      if (!p || etat.ordre !== 'decouvrir') { s.hidden = true; return; }
      s.hidden = false;
      s.innerHTML = `<div class="cp-jour-img"><img src="${src(p, 1000)}" alt=""></div>
        <div class="cp-jour-txt"><p class="cp-sur">${ICO.soleil} La photo du jour</p><h2>${p.legende || 'Sans légende, et c\'est très bien'}</h2>
        <p class="cp-aut">par <b>${p.auteur}</b>, mise en ligne le ${new Date(p.le).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</p>
        <p>Chaque nuit, une photo jamais mise en avant prend cette place pendant vingt-quatre heures. Tout le monde y passe, quel que soit son nombre de cœurs.</p>
        <div class="cp-jour-acts"><button class="cp-btn cp-btn--or" type="button" data-jour-voir>Voir en grand</button><button class="cp-btn cp-btn--ligne" type="button" data-jour-coeur>${ICO.coeurLigne} Garder</button></div></div>`;
      s.querySelector('[data-jour-voir]').onclick = () => ouvrirFen(etat.fil, p.id);
      s.querySelector('[data-jour-coeur]').onclick = () => basculerCoeur(p.id);
    }

     
     
    function placerCurseur() {
      const b = document.querySelector('.cp-onglet[aria-selected="true"]'), c = $('cp-onglets-curseur');
      if (!b || !c) return;
      c.style.width = b.offsetWidth + 'px';
      c.style.transform = `translateX(${b.offsetLeft}px)`;
      c.dataset.ordre = b.dataset.ordre;
    }
    ecoute(window, 'resize', placerCurseur);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(placerCurseur);
    $('cp-onglets').addEventListener('click', (e) => {
      const b = e.target.closest('.cp-onglet'); if (!b) return;
      etat.ordre = b.dataset.ordre;
      document.querySelectorAll('.cp-onglet').forEach(x => x.setAttribute('aria-selected', x === b ? 'true' : 'false'));
      placerCurseur();
      dessinerJour(); dessinerGrille();
      window.scrollTo({ top: Math.min(window.scrollY, $('cp-onglets').getBoundingClientRect().top + window.scrollY - 8) });
    });

     
    function ouvrirFen(liste, id) {
      etat.fen.liste = liste.filter(x => !etat.masquees.has(x));
      etat.fen.i = Math.max(0, etat.fen.liste.indexOf(id));
      if (!etat.fen.ouverte) verrouiller();
      etat.fen.ouverte = true;
      $('cp-fen').dataset.ouverte = 1;
      dessinerFen();
    }
    function fermerFen() { if (!etat.fen.ouverte) return; etat.fen.ouverte = false; $('cp-fen').dataset.ouverte = 0; deverrouiller(); }
    function dessinerFen() {
      const id = etat.fen.liste[etat.fen.i]; const p = etat.parId.get(id);
      const img = $('cp-fen-img');
      img.classList.remove('est-la');
      img.onload = () => img.classList.add('est-la');
      img.src = src(p, 1600);
      if (img.complete && img.naturalWidth) img.classList.add('est-la');
      $('cp-fen-num').textContent = `${etat.fen.i + 1} / ${etat.fen.liste.length}`;
      const suiv = etat.fen.liste[etat.fen.i + 1]; if (suiv) { const pre = new Image(); pre.src = src(etat.parId.get(suiv), 1600); }
      dessinerPanneau();
    }
    function dessinerPanneau() {
      const id = etat.fen.liste[etat.fen.i]; const p = etat.parId.get(id);
      const c = etat.coeurs.includes(id), e = etat.etoile === id;
      $('cp-fen-panneau').innerHTML = `
        <div class="cp-fen-aut">Photo de<b>${p.auteur}</b></div>
        <p class="cp-fen-leg">${p.legende || ''}</p>
        <div class="cp-fen-date">Mise en ligne le ${new Date(p.le).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}${p.jours <= 2 ? ' · <span style="color:var(--teal);font-weight:700">Nouvelle</span>' : ''}</div>
        <div class="cp-fen-comptes"><span>${ICO.coeur} <b>${p.coeurs}</b> cœurs</span><span>${ICO.etoile} <b>${p.etoiles}</b> étoiles</span></div>
        <div class="cp-fen-note">Comptés cette nuit. Votre geste sera dans le compte de demain.</div>
        <div class="cp-fen-acts">
          ${p.moi ? '<div class="cp-fen-note">C\'est votre photo. On ne vote pas pour soi, mais vous pouvez la partager.</div>' : `
          <button class="cp-act cp-act--coeur" type="button" data-fen="coeur" data-on="${c ? 1 : 0}">${c ? ICO.coeur : ICO.coeurLigne}<span>${c ? 'Dans ma sélection' : 'Garder'}<small>${c ? 'Retirer le cœur' : 'Autant que vous voulez, pour choisir ensuite'}</small></span></button>
          <button class="cp-act cp-act--etoile" type="button" data-fen="etoile" data-on="${e ? 1 : 0}">${e ? ICO.etoile : ICO.etoileLigne}<span>${e ? 'Mon étoile est ici' : 'Poser mon étoile'}<small>${e ? 'Retirer mon vote' : 'Une seule, déplaçable jusqu\'à la clôture'}</small></span></button>`}
          <button class="cp-act cp-act--sobre" type="button" data-fen="partage">${ICO.partage}<span>Partager<small>Le lien de cette photo</small></span></button>
          ${p.moi ? '' : `<button class="cp-act cp-act--sobre" type="button" data-fen="masquer">${ICO.oeilBarre}<span>Masquer<small>Ne plus la voir sur cet appareil</small></span></button>`}
        </div>`;
    }
    $('cp-fen-panneau').addEventListener('click', (e) => {
      const b = e.target.closest('[data-fen]'); if (!b) return;
      const id = etat.fen.liste[etat.fen.i];
      if (b.dataset.fen === 'coeur') basculerCoeur(id);
      else if (b.dataset.fen === 'etoile') poserEtoile(id);
      else if (b.dataset.fen === 'masquer') masquer(id);
      else toast('Lien copié (maquette)');
    });
    const fenPrec = () => { if (etat.fen.i > 0) { etat.fen.i--; dessinerFen(); } };
    const fenSuiv = () => { if (etat.fen.i < etat.fen.liste.length - 1) { etat.fen.i++; dessinerFen(); } };
    $('cp-fen-prec').onclick = fenPrec; $('cp-fen-suiv').onclick = fenSuiv; $('cp-fen-fermer').onclick = fermerFen;
    $('cp-fen-scene').addEventListener('click', (e) => { if (e.target === e.currentTarget) fermerFen(); });
    (function () { let x0 = null; const sc = $('cp-fen-scene');
      sc.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
      sc.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 60) (dx < 0 ? fenSuiv : fenPrec)(); });
    })();
    ecoute(document, 'keydown', (e) => {
      if (etat.fen.ouverte) { if (e.key === 'Escape') fermerFen(); else if (e.key === 'ArrowRight') fenSuiv(); else if (e.key === 'ArrowLeft') fenPrec(); else if (e.key.toLowerCase() === 'c') basculerCoeur(etat.fen.liste[etat.fen.i]); else if (e.key.toLowerCase() === 'e') poserEtoile(etat.fen.liste[etat.fen.i]); return; }
      if ($('cp-tiroir').dataset.ouvert === '1') { if (e.key === 'Escape') fermerTiroir(); return; }
      if (etat.gl.ouvert) { if (e.key === 'ArrowRight') $('cp-gl-garde').click(); else if (e.key === 'ArrowLeft') $('cp-gl-passe').click(); else if (e.key === 'Escape') fermerGl(); return; }
      if (e.key === 'Escape') portail.querySelectorAll('.cp-modal').forEach(m => m.dataset.ouverte = 0);
    });

     
    function ouvrirTiroir() { dessinerTiroir(); $('cp-tiroir').dataset.ouvert = 1; $('cp-ombre').dataset.on = 1; }
    function fermerTiroir() { $('cp-tiroir').dataset.ouvert = 0; $('cp-ombre').dataset.on = 0; }
    $('cp-tiroir-x').onclick = fermerTiroir; $('cp-ombre').onclick = fermerTiroir;
    function dessinerTiroir() {
      const l = $('cp-tiroir-liste');
      const n = etat.coeurs.length;
      $('cp-tiroir-sous').innerHTML = n
        ? (etat.etoile ? `${pl(n, 'photo')} ${n > 1 ? 'gardées' : 'gardée'}. Votre étoile est sur celle de <b>${etat.parId.get(etat.etoile).auteur}</b>${pt(etat.parId.get(etat.etoile).auteur)}` : `${pl(n, 'photo')} ${n > 1 ? 'gardées' : 'gardée'}. <b>Posez votre étoile</b> sur celle que vous préférez.`)
        : 'Vos cœurs se rangent ici. Gardez celles que vous aimez, puis choisissez.';
      if (!n) { l.innerHTML = '<div class="cp-tiroir-vide">Aucune photo gardée pour l\'instant.<br>Un cœur sur une photo, et elle arrive ici.</div>'; return; }
      l.innerHTML = etat.coeurs.slice().reverse().map(id => { const p = etat.parId.get(id); const e = etat.etoile === id; return `
        <div class="cp-tiroir-item${e ? ' est-etoile' : ''}" data-id="${id}">
          <img src="${src(p, 600)}" alt="" loading="lazy">
          <span class="cp-tir-acts"><button class="cp-ico cp-ico--etoile" type="button" data-tir="etoile" data-on="${e ? 1 : 0}" aria-label="Mon étoile">${ICO.etoile}</button><button class="cp-ico cp-ico--coeur" type="button" data-tir="coeur" data-on="1" aria-label="Retirer">${ICO.coeur}</button></span>
          <span class="cp-tir-aut">${p.auteur}</span>
        </div>`; }).join('');
    }
    $('cp-tiroir-liste').addEventListener('click', (e) => {
      const item = e.target.closest('.cp-tiroir-item'); if (!item) return;
      const b = e.target.closest('[data-tir]');
      if (b) { if (b.dataset.tir === 'etoile') poserEtoile(item.dataset.id); else basculerCoeur(item.dataset.id); return; }
      fermerTiroir(); ouvrirFen(etat.coeurs.slice().reverse(), item.dataset.id);
    });

     
    const gl = etat.gl;
    const glEl = $('cp-gl');
     
    function teinter(p) {
      glEl.style.setProperty('--p-oui', Math.max(0, Math.min(1, p)).toFixed(3));
      glEl.style.setProperty('--p-non', Math.max(0, Math.min(1, -p)).toFixed(3));
    }
    function ouvrirGl() {
      if (!exigerCompte()) return;
      gl.liste = etat.fil.filter(id => { const p = etat.parId.get(id); return !p.moi && !etat.masquees.has(id) && !etat.coeurs.includes(id); });
      let reprise = 0; const s = lire(CLE_GL); if (s && s.graine === etat.graine) reprise = Math.min(s.i, gl.liste.length);
      gl.i = reprise; gl.historique = [];
      if (!gl.ouvert) verrouiller();
      gl.ouvert = true; glEl.dataset.ouvert = 1;
      $('cp-gl-fin').dataset.on = 0;
      teinter(0);
      dessinerGl();
    }
    function fermerGl() { if (!gl.ouvert) return; gl.ouvert = false; glEl.dataset.ouvert = 0; deverrouiller(); ecrire(CLE_GL, { graine: etat.graine, i: gl.i }); }
    $('cp-gl-x').onclick = fermerGl;
    $('cp-btn-glisser').onclick = ouvrirGl; $('cp-btn-glisser-haut').onclick = ouvrirGl; $('cp-gp-go').onclick = ouvrirGl; $('cp-gp-pile').onclick = ouvrirGl; $('cp-gpc-pile').onclick = ouvrirGl;
    $('cp-gl-tiroir').onclick = () => { ouvrirTiroir(); };
    function carteGl(p, classe) {
      return `<div class="cp-gl-carte ${classe}" data-id="${p.id}">
        <div class="cp-gl-fond" style="background-image:url('${src(p, 600)}')"></div>
        <img src="${src(p, 1000)}" alt="" draggable="false">
        <div class="cp-gl-voile"><b>${p.auteur}</b><span>${p.legende || ''}</span></div>
        <div class="cp-gl-teinte cp-gl-teinte--oui"><span class="cp-gl-signe"><i>${ICO.coeur}</i><b>Gardée</b></span></div>
        <div class="cp-gl-teinte cp-gl-teinte--non"><span class="cp-gl-signe"><i>${ICO.croix}</i><b>Passée</b></span></div>
      </div>`;
    }
    function dessinerGl() {
      const sc = $('cp-gl-scene');
      sc.querySelectorAll('.cp-gl-carte').forEach(c => c.remove());
      teinter(0);
      const reste = gl.liste.length - gl.i;
      $('cp-gl-prog').innerHTML = `<b>${Math.min(gl.i + 1, gl.liste.length)}</b> / ${gl.liste.length} · ${pl(etat.coeurs.length, 'photo')} ${etat.coeurs.length > 1 ? 'gardées' : 'gardée'}`;
      $('cp-gl-acts').style.visibility = reste > 0 ? '' : 'hidden';
      $('cp-gl-aide').style.visibility = reste > 0 ? '' : 'hidden';
      if (reste <= 0) { finGl(); return; }
      const html = [];
      for (let k = Math.min(2, reste - 1); k >= 0; k--) html.push(carteGl(etat.parId.get(gl.liste[gl.i + k]), k === 0 ? 'n0' : 'n' + k));
      sc.insertAdjacentHTML('afterbegin', html.join(''));
      brancherGeste(sc.querySelector('.cp-gl-carte.n0'));
    }
    function finGl() {
      const f = $('cp-gl-fin'); f.dataset.on = 1;
      const n = etat.coeurs.length;
      f.innerHTML = `<h3>${n ? 'Belle sélection' : 'Tout vu'}</h3><p>${n ? `${pl(n, 'photo')} ${n > 1 ? 'gardées' : 'gardée'}. ${etat.etoile ? 'Votre étoile est posée, vous pouvez encore la déplacer.' : 'Il reste à poser votre étoile sur une seule.'}` : 'Vous avez passé toutes les photos. Les prochaines arrivent chaque jour.'}</p>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;justify-content:center">${n ? '<button class="cp-btn cp-btn--or" type="button" data-gl-tiroir>Choisir mon étoile</button>' : ''}<button class="cp-btn cp-btn--ligne" type="button" data-gl-quitter>Retour aux photos</button></div>`;
      f.querySelector('[data-gl-tiroir]')?.addEventListener('click', () => { fermerGl(); ouvrirTiroir(); });
      f.querySelector('[data-gl-quitter]').addEventListener('click', fermerGl);
    }
    function decider(sens) {
      const id = gl.liste[gl.i]; if (!id) return;
      if (sens > 0 && !etat.coeurs.includes(id)) { etat.coeurs.push(id); memoriser(); rafraichirCase(id); dessinerTete(); }
      gl.historique.push({ id, sens });
      gl.i++;
      dessinerGl();
    }
     
    function envoler(carte, sens, cb) {
      teinter(sens);
      carte.style.transition = 'transform .34s ease, opacity .34s ease';
      carte.style.transform = `translate(${sens * (window.innerWidth + 200)}px, -40px) rotate(${sens * 25}deg)`;
      carte.style.opacity = '0';
      setTimeout(cb, 320);
    }
    const carteDevant = () => $('cp-gl-scene').querySelector('.cp-gl-carte.n0');
     
    function deciderAuBouton(sens) {
      const c = carteDevant(); if (!c || c.dataset.part) return;
      c.dataset.part = 1;
      teinter(sens);
      setTimeout(() => envoler(c, sens, () => decider(sens)), 220);
    }
    $('cp-gl-garde').onclick = () => deciderAuBouton(1);
    $('cp-gl-passe').onclick = () => deciderAuBouton(-1);
    $('cp-gl-retour').onclick = () => {
      const h = gl.historique.pop(); if (!h) { toast('Rien à reprendre'); return; }
      gl.i = Math.max(0, gl.i - 1);
      if (h.sens > 0) { const k = etat.coeurs.indexOf(h.id); if (k >= 0) { etat.coeurs.splice(k, 1); memoriser(); rafraichirCase(h.id); dessinerTete(); } }
      dessinerGl();
    };
    function brancherGeste(carte) {
      if (!carte) return;
      let x0 = 0, y0 = 0, dx = 0, dy = 0, actif = false, t0 = 0;
      const seuil = () => Math.min(140, window.innerWidth * .28);
      carte.addEventListener('pointerdown', (e) => { if (carte.dataset.part) return; actif = true; x0 = e.clientX; y0 = e.clientY; dx = dy = 0; t0 = Date.now(); try { carte.setPointerCapture(e.pointerId); } catch (err) {} carte.style.transition = 'none'; });
      carte.addEventListener('pointermove', (e) => {
        if (!actif) return; dx = e.clientX - x0; dy = e.clientY - y0;
        carte.style.transform = `translate(${dx}px, ${dy * .3}px) rotate(${dx / 20}deg)`;
        

        const s = seuil();
        teinter(Math.sign(dx) * Math.max(0, Math.abs(dx) - 12) / (s - 12));
      });
      const fin = () => {
        if (!actif) return; actif = false;
        if (Math.abs(dx) > seuil()) { carte.dataset.part = 1; envoler(carte, dx > 0 ? 1 : -1, () => decider(dx > 0 ? 1 : -1)); return; }
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6 && Date.now() - t0 < 350) { ouvrirFen(gl.liste, carte.dataset.id); }
        carte.style.transition = 'transform .25s ease'; carte.style.transform = ''; teinter(0);
      };
      carte.addEventListener('pointerup', fin); carte.addEventListener('pointercancel', fin);
    }

     
    function ouvrirDepot() {
      if (!exigerCompte()) return;
      $('cp-depot').dataset.ouverte = 1; $('cp-depot-etape1').style.display = ''; $('cp-depot-ok').dataset.on = 0; $('cp-apercu').dataset.on = 0; $('cp-progress').dataset.on = 0; $('cp-progress').firstElementChild.style.width = '0';
      $('cp-c1').checked = false; $('cp-c2').checked = false; $('cp-legende').value = ''; $('cp-envoyer').disabled = true; depot.fichier = null;
    }
    const depot = { fichier: null };
    const verifierDepot = () => { $('cp-envoyer').disabled = !(depot.fichier && $('cp-c1').checked && $('cp-c2').checked); };
    $('cp-c1').onchange = verifierDepot; $('cp-c2').onchange = verifierDepot;
    $('cp-fichier').onchange = (e) => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      depot.fichier = f;
      const url = URL.createObjectURL(f);
      const img = new Image();
      img.onload = () => {
        $('cp-apercu-img').src = url; $('cp-apercu').dataset.on = 1;
        const grand = Math.max(img.naturalWidth, img.naturalHeight); const facteur = Math.min(1, 2400 / grand);
        $('cp-apercu-i').innerHTML = `<b>${f.name}</b><br>${img.naturalWidth} × ${img.naturalHeight} px, ${(f.size / 1048576).toFixed(1)} Mo<br>Sera envoyée en ${Math.round(img.naturalWidth * facteur)} × ${Math.round(img.naturalHeight * facteur)} px, sans données de localisation.`;
        verifierDepot();
      };
      img.src = url;
    };
    $('cp-envoyer').onclick = () => {
      const pr = $('cp-progress'); pr.dataset.on = 1; $('cp-envoyer').disabled = true;
      let p = 0; const t = setInterval(() => { p = Math.min(100, p + 4 + Math.random() * 10); pr.firstElementChild.style.width = p + '%'; if (p >= 100) { clearInterval(t); setTimeout(() => { $('cp-depot-etape1').style.display = 'none'; $('cp-depot-ok').dataset.on = 1; etat.mienne = 'attente'; dessinerTete(); }, 250); } }, 120);
    };
    portail.querySelectorAll('[data-fermer]').forEach(b => b.onclick = () => { $(b.dataset.fermer).dataset.ouverte = 0; });
    portail.querySelectorAll('.cp-modal').forEach(m => m.addEventListener('click', (e) => { if (e.target === m) m.dataset.ouverte = 0; }));

    let largeurAvant = largeurGrille(), tRedim = 0;
    ecoute(window, 'resize', () => { clearTimeout(tRedim); tRedim = setTimeout(() => { if (Math.abs(largeurGrille() - largeurAvant) > 40) { largeurAvant = largeurGrille(); dessinerGrille(); } }, 150); });


    etat.photos = donnees.photos.map(p => {
      const le = Date.parse(p.le);
      const jours = Math.max(1, (MAINTENANT - le) / JOUR);
      return { ...p, auteur: esc(p.auteur), legende: esc(p.legende), le, jours, ratio: p.l / p.h, tendance: (p.coeurs + REGLAGES.poidsEtoile * p.etoiles) / Math.sqrt(jours) };
    });
    const graineJour = aleaGraine(20261027);
    const candidates = etat.photos.filter(p => !p.moi && p.coeurs < 10 && p.ratio > 1.1);
    if (candidates.length) candidates[Math.floor(graineJour() * candidates.length)].jour = true;
    etat.photos.forEach(p => etat.parId.set(p.id, p));
    dessinerMur(); dessinerPile(); dessinerTete(); dessinerJour(); dessinerGrille(); dessinerTiroir(); placerCurseur();

     
    racine._apercu = { etat, ouvrirFen, fermerFen, ouvrirGl, fermerGl, dessinerGl, ouvrirTiroir, fermerTiroir, teinter };

    return () => {
      nettoyages.forEach(f => { try { f(); } catch (e) {   } });
      clearTimeout(toast.t); clearTimeout(tRedim);
      try { ecrire(CLE_GL, { graine: etat.graine, i: etat.gl.i }); } catch (e) {   }
    };
  }

  customElements.define('rdr-concours-photo', RdrConcoursPhoto);
})();
})();
