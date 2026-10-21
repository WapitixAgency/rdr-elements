/* rdr-elements concours | source route-du-rhum 40ad638 | rdr-concours-photo.js AlpinaClock.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["concours"]="40ad638";performance.mark("rdr-elements:concours")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof customElements === 'undefined' || customElements.get('rdr-concours-photo')) return;

  const SOURCE = 'https://www.routedurhum.com/_functions/concoursPhotos';
  const SOURCE_DEMO = 'https://www.routedurhum.com/_functions/concoursPhotoDemo?demo=1';
  const CLE = 'rdrConcoursPhotoApercuV1';
  const CLE_GL = 'rdrConcoursPhotoApercuGlisserV1';
  const CLE_MASQUEES = 'rdrConcoursPhotoMasqueesV1';
  const CLE_GL_REEL = 'rdrConcoursPhotoGlisserV1';
  const CLE_GRAINE = 'rdrConcoursPhotoGraineV1';
  const JOUR = 86400000;
  const MAX_COEURS = 40;
  const RAFALE_MS = 2000;
  const ATTENTE_PONT_MS = 4000;
  const RELANCE_MEMBRE_MS = 3000;
  const ATTENTE_MEMBRE_MS = 12000;
  const PAGES_MAX = 20;
  const ETATS = ['eteint', 'avant', 'ouvert', 'votes', 'clos'];
  



  const PHOTO = { MAX: 2400, PLANCHER: 1200, MIN: 600, BUDGET: 1.8 * 1048576, BUDGET_SAFARI: 1.4 * 1048576, PLAFOND: 3 * 1048576, Q0: 0.88, QMIN: 0.6, ENTREE_MAX: 40 * 1048576 };
  const MORCEAU = 5 * 1048576;
  const REPRISES = [1500, 4000, 9000];
  const IS_SAFARI = typeof navigator !== 'undefined' && /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent || '');
  const ID_PHOTO = /^[\w-]{1,80}$/;
  const ID_FICHIER = /^[\w~.-]{4,200}$/;

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
:is(rdr-concours-photo,.cp-portail) .cp-marque-bloc{display:inline-flex;align-items:center;gap:20px;padding:8px 26px 8px 8px;border-radius:999px;background:rgba(14,17,29,.62);border:1px solid var(--filet);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);margin:0 0 clamp(14px,2.6vh,24px)}
:is(rdr-concours-photo,.cp-portail) .cp-montre{width:88px;height:88px;flex:none;border-radius:50%}
:is(rdr-concours-photo,.cp-portail) .cp-alpina{height:80px;width:auto;aspect-ratio:1731/648;object-fit:contain}
:is(rdr-concours-photo,.cp-portail)[data-marque="sans"] .cp-marque-bloc{display:none}
:is(rdr-concours-photo,.cp-portail)[data-marque="sans"] .cp-partenaire{display:none}
@media (max-width:520px){
  :is(rdr-concours-photo,.cp-portail) .cp-marque-bloc{gap:14px;padding:6px 18px 6px 6px}
  :is(rdr-concours-photo,.cp-portail) .cp-montre{width:72px;height:72px}
  :is(rdr-concours-photo,.cp-portail) .cp-alpina{height:64px}
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
@media (hover:hover) and (pointer:fine){:is(rdr-concours-photo,.cp-portail) .cp-btn--or:hover{background:#fff;transform:translateY(-1px)}}
:is(rdr-concours-photo,.cp-portail) .cp-btn--ligne{background:transparent;color:var(--t1);border:1.5px solid var(--filet)}
@media (hover:hover) and (pointer:fine){:is(rdr-concours-photo,.cp-portail) .cp-btn--ligne:hover{border-color:rgba(255,255,255,.45)}}
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
:is(rdr-concours-photo,.cp-portail) .cp-btn--sel{background:rgba(230,57,70,.22);border-color:rgba(255,107,119,.8);color:#fff}
:is(rdr-concours-photo,.cp-portail) .cp-btn--sel svg{color:#ff6b77}
:is(rdr-concours-photo,.cp-portail) .cp-btn--sel .cp-pastille{background:#fff;color:var(--rouge)}
@media (hover:hover) and (pointer:fine){:is(rdr-concours-photo,.cp-portail) .cp-btn--sel:hover{background:rgba(230,57,70,.34);border-color:#ff6b77}}
:is(rdr-concours-photo,.cp-portail) .cp-rappel{display:flex;flex-direction:column;gap:8px;padding:12px 14px 14px;border-radius:14px;background:linear-gradient(160deg,rgba(252,241,80,.2),rgba(252,241,80,.07));border:1.5px solid rgba(252,241,80,.62);text-align:left}
:is(rdr-concours-photo,.cp-portail) .cp-rappel-t{display:flex;align-items:center;gap:10px;margin:0;font-size:14px;font-weight:800;line-height:1.25;color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-rappel-t i{flex:none;width:30px;height:30px;border-radius:999px;background:var(--jaune);color:var(--marine);display:inline-flex;align-items:center;justify-content:center;font-style:normal}
:is(rdr-concours-photo,.cp-portail) .cp-rappel-t i svg{width:17px;height:17px}
:is(rdr-concours-photo,.cp-portail) .cp-rappel p{margin:0;font-size:12.5px;line-height:1.45;color:var(--t1)}
:is(rdr-concours-photo,.cp-portail) .cp-rappel .cp-btn{padding:10px 16px;font-size:12px}
:is(rdr-concours-photo,.cp-portail) .cp-pref{display:flex;flex-direction:column;gap:8px;padding:10px 12px 12px;border-radius:14px;background:rgba(252,241,80,.08);border:1.5px solid rgba(252,241,80,.45);text-align:left}
:is(rdr-concours-photo,.cp-portail) .cp-pref-tete{display:flex;align-items:center;gap:12px}
:is(rdr-concours-photo,.cp-portail) .cp-pref-vignette{position:relative;flex:none;width:64px;height:64px;padding:0;border:0;border-radius:10px;background:var(--nuit);cursor:zoom-in}
:is(rdr-concours-photo,.cp-portail) .cp-pref-vignette img{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:0 0 0 2px var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-pref-vignette i{position:absolute;right:-7px;top:-7px;width:24px;height:24px;border-radius:999px;background:var(--jaune);color:var(--marine);display:inline-flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.45)}
:is(rdr-concours-photo,.cp-portail) .cp-pref-vignette i svg{width:14px;height:14px}
:is(rdr-concours-photo,.cp-portail) .cp-pref-txt{font-size:12.5px;line-height:1.4;color:var(--t1)}
:is(rdr-concours-photo,.cp-portail) .cp-pref-txt b{display:block;font-size:14px;font-weight:800;color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-pref-txt small{display:block;font-size:12px;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-pref p{margin:0;font-size:12.5px;line-height:1.45;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-pref p strong{color:var(--t1);font-weight:700;white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-maintenance{display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:14px;background:rgba(245,190,65,.15);border:1.5px solid rgba(245,190,65,.7);text-align:left}
:is(rdr-concours-photo,.cp-portail) .cp-maintenance i{flex:none;width:28px;height:28px;border-radius:999px;background:var(--or);color:var(--marine);display:inline-flex;align-items:center;justify-content:center;font-style:normal}
:is(rdr-concours-photo,.cp-portail) .cp-maintenance i svg{width:15px;height:15px}
:is(rdr-concours-photo,.cp-portail) .cp-maintenance p{margin:0;font-size:12.5px;line-height:1.45;color:var(--t1)}
:is(rdr-concours-photo,.cp-portail) .cp-pref-changer{align-self:flex-start;padding:0;border:0;background:none;color:var(--jaune);font-size:12px;font-weight:700;text-decoration:underline;text-underline-offset:3px}
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
@media (hover:hover) and (pointer:fine){:is(rdr-concours-photo,.cp-portail) .cp-onglet:hover:not([aria-selected="true"]){background:rgba(255,255,255,.05)}}
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
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-rappel{padding:12px 12px 0}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-rappel:empty{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-rappel .cp-rappel{padding:11px 12px 12px}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-deplacer{margin:0;padding:10px 12px;border-radius:12px;background:rgba(252,241,80,.08);border:1px solid rgba(252,241,80,.35);font-size:12.5px;line-height:1.45;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir-deplacer strong{color:var(--t1);white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-tiroir[data-invite="1"] .cp-ico--etoile{color:var(--jaune);box-shadow:0 0 0 2px var(--jaune)}
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
:is(rdr-concours-photo,.cp-portail) .cp-gl-acts{display:flex;justify-content:center;align-items:center;gap:clamp(12px,4vw,22px);padding:4px 16px calc(16px + env(safe-area-inset-bottom))}
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
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--etoile{color:var(--jaune);border-color:rgba(252,241,80,.55)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-rond--etoile[data-on="1"]{background:var(--jaune);border-color:var(--jaune);color:var(--marine)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte .cp-gl-pose{position:absolute;z-index:2;top:12px;left:12px;display:inline-flex;align-items:center;gap:6px;padding:6px 12px 6px 8px;border-radius:999px;background:var(--jaune);color:var(--marine);font-size:12px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;box-shadow:0 6px 18px rgba(0,0,0,.35);pointer-events:none}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte .cp-gl-pose svg{width:16px;height:16px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-carte:not([data-etoile="1"]) .cp-gl-pose{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px;gap:10px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin[data-on="1"]{display:flex}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin h3{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:30px;line-height:1}
:is(rdr-concours-photo,.cp-portail) .cp-gl-fin p{margin:0;color:var(--t2);font-size:14px;line-height:1.5;max-width:320px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide{text-align:center;font-size:12px;color:var(--t3);padding:0 16px;margin:0 0 8px}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide b{font-weight:700}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide .oui{color:var(--oui)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide .non{color:var(--non)}
:is(rdr-concours-photo,.cp-portail) .cp-gl-aide .etoile{color:var(--jaune)}
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
:is(rdr-concours-photo,.cp-portail) .cp-modal-boite--petite{width:min(520px,100%)}
:is(rdr-concours-photo,.cp-portail) .cp-modal-boite p strong{color:var(--t1);white-space:nowrap}
:is(rdr-concours-photo,.cp-portail) .cp-drop{display:block;border:2px dashed rgba(255,255,255,.22);border-radius:14px;padding:26px 16px;text-align:center;color:var(--t2);font-size:13px;line-height:1.5;cursor:pointer}
:is(rdr-concours-photo,.cp-portail) .cp-drop b{display:block;color:#fff;font-size:14px;margin-bottom:4px}
:is(rdr-concours-photo,.cp-portail) .cp-drop small{display:block;color:var(--t3);font-size:11.5px;margin-top:6px}
:is(rdr-concours-photo,.cp-portail) .cp-guide{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 12px}
:is(rdr-concours-photo,.cp-portail) .cp-guide-col{border-radius:12px;padding:11px 12px;background:var(--panneau2);border:1px solid var(--filet);color:var(--t2);font-size:12.5px;line-height:1.45}
:is(rdr-concours-photo,.cp-portail) .cp-guide-col b{display:flex;align-items:center;gap:6px;margin-bottom:4px;color:#fff;font-size:13.5px}
:is(rdr-concours-photo,.cp-portail) .cp-guide-col b svg{width:15px;height:15px;flex:none}
:is(rdr-concours-photo,.cp-portail) .cp-guide-oui b svg{color:var(--or)}
:is(rdr-concours-photo,.cp-portail) .cp-guide-non b svg{color:var(--rouge)}
@media (max-width:520px){:is(rdr-concours-photo,.cp-portail) .cp-guide{grid-template-columns:1fr}}
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
:is(rdr-concours-photo,.cp-portail) .cp-toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%) translateY(10px);z-index:10050;background:#fff;color:var(--marine);padding:10px 16px;border-radius:20px;font-size:13px;font-weight:700;line-height:1.35;text-align:center;width:max-content;max-width:min(440px,calc(100vw - 32px));opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;box-shadow:0 10px 30px rgba(0,0,0,.4)}
:is(rdr-concours-photo,.cp-portail) .cp-toast small{display:block;margin-top:2px;font-size:12px;font-weight:600;color:#3a4256}
:is(rdr-concours-photo,.cp-portail) .cp-gl[data-ouvert="1"] ~ .cp-toast{bottom:calc(128px + env(safe-area-inset-bottom))}
:is(rdr-concours-photo,.cp-portail) .cp-toast[data-on="1"]{opacity:1;transform:translateX(-50%)}
:is(rdr-concours-photo,.cp-portail)[data-vue="attente"] .cp-barre,:is(rdr-concours-photo,.cp-portail)[data-vue="attente"] .cp-gp,:is(rdr-concours-photo,.cp-portail)[data-vue="attente"] .cp-jour,:is(rdr-concours-photo,.cp-portail)[data-vue="attente"] .cp-flottant{display:none}
:is(rdr-concours-photo,.cp-portail)[data-glisser="non"] .cp-gp,:is(rdr-concours-photo,.cp-portail)[data-glisser="non"] .cp-gpc,:is(rdr-concours-photo,.cp-portail)[data-glisser="non"] .cp-flottant{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-vide p{margin:8px auto 0;max-width:540px;font-size:14px;line-height:1.55}
:is(rdr-concours-photo,.cp-portail) .cp-annonce{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:12px 14px;border:1px solid var(--filet);border-radius:14px;background:var(--voile);font-size:12.5px;line-height:1.45;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-annonce b{color:var(--t1);font-size:14px}
:is(rdr-concours-photo,.cp-portail) .cp-annonce .cp-pill{display:inline-block;padding:2px 8px;border-radius:999px;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
:is(rdr-concours-photo,.cp-portail) .cp-pill--bientot{background:rgba(252,241,80,.16);color:var(--jaune)}
:is(rdr-concours-photo,.cp-portail) .cp-mienne-ph{width:64px;height:64px;border-radius:10px;flex:none;background:var(--panneau)}
:is(rdr-concours-photo,.cp-portail) .cp-reglement{display:block;font-size:12px;font-weight:700;color:var(--teal);text-align:center;text-decoration:underline;text-underline-offset:3px}
:is(rdr-concours-photo,.cp-portail) .cp-depot-etat{margin:12px 0 0;font-size:12.5px;line-height:1.45;color:var(--t2)}
:is(rdr-concours-photo,.cp-portail) .cp-depot-etat:empty{display:none}
:is(rdr-concours-photo,.cp-portail) .cp-depot-etat[data-erreur="1"]{color:#ff8a93;font-weight:600}
`;

  




  const TR = {
    'Votre <em>Route du Rhum</em>,<br> en une photo': 'Your <em>Route du Rhum</em>,<br> in one photo',
    'Une photo par membre, celle qui raconte le mieux votre Route du Rhum.': 'One photo per member, the one that best tells your Route du Rhum.',
    'Déposez votre photo': 'Submit your photo',
    "Une seule par membre, relue par l'équipe": 'Just one per member, reviewed by our team',
    'Gardez vos coups de cœur': 'Keep your favourites',
    "Jusqu'à 40, ils forment votre sélection": 'Up to 40, they make up your selection',
    "Photos relues par l'équipe, cœurs et étoiles comptés chaque nuit.": 'Photos reviewed by our team, hearts and stars counted every night.',
    'Posez votre étoile': 'Give your star',
    'Une par membre, elle seule fait gagner': 'One per member, only stars count',
    '<b>Alpina</b>, chronométreur officiel de la Route du Rhum.': '<b>Alpina</b>, official timekeeper of the Route du Rhum.',
    'Aperçu du challenge, avec les photos du site, des noms et des votes fictifs.': 'Preview of the challenge, with photos from the site and made-up names and votes.',
    'Mode glisser': 'Swipe mode',
    'Jugez-les une à une': 'Judge them one by one',
    'Vers la droite, <b class="oui">je garde</b>. Vers la gauche, <b class="non">je passe</b>. Le plus rapide pour trier depuis son téléphone.': 'Swipe right, <b class="oui">I keep it</b>. Swipe left, <b class="non">I pass</b>. The quickest way to sort from your phone.',
    'Je commence': "Let's go",
    'À découvrir': 'Discover',
    'têtes, nouveautés, hasard': 'top, new, random',
    'Les dernières': 'Latest',
    "les plus récentes d'abord": 'newest first',
    'Les plus aimées': 'Most loved',
    'comptées chaque nuit': 'counted every night',
    'À droite, <em class="oui">je garde</em>. À gauche, <em class="non">je passe</em>.': 'Right, <em class="oui">I keep it</em>. Left, <em class="non">I pass</em>.',
    'Vous avez tout vu. Les prochaines photos arrivent chaque jour, après validation.': 'You have seen them all. New photos arrive every day, once approved.',
    'Photo en grand': 'Full-size photo',
    'Fermer': 'Close',
    'Précédente': 'Previous',
    'Suivante': 'Next',
    'Ma sélection': 'My selection',
    "Vos cœurs suivent votre compte, sur votre téléphone comme sur votre ordinateur. Votre étoile peut changer de photo jusqu'à la clôture des votes.": 'Your hearts follow your account, on your phone as on your computer. Your star can move to another photo until voting closes.',
    'Quitter': 'Exit',
    'À droite, <b class="oui">je garde</b>. À gauche, <b class="non">je passe</b>. <b class="etoile">L\'étoile</b> pose votre vote. Touchez la photo pour l\'agrandir.': 'Right, <b class="oui">I keep it</b>. Left, <b class="non">I pass</b>. <b class="etoile">The star</b> gives your vote. Tap the photo to enlarge it.',
    'Revenir': 'Back',
    'Passer': 'Pass',
    'Garder': 'Keep',
    'Déposer ma photo': 'Submit my photo',
    "Une seule photo par membre. Elle est relue par l'équipe avant d'apparaître, vous serez prévenu dans votre Espace Rhum.": 'One photo per member. Our team reviews it before it appears, and you will be notified in your Espace Rhum.',
    'Choisir une photo': 'Choose a photo',
    'Quelle photo ?': 'Which photo?',
    "Une photo que vous avez prise et qui raconte votre Route du Rhum. Le village, les pontons, les bateaux et leurs skippers, le départ, l'ambiance, à Saint-Malo, en Guadeloupe ou ailleurs.": 'A photo you took that tells your Route du Rhum. The village, the pontoons, the boats and their skippers, the start, the atmosphere, in Saint-Malo, in Guadeloupe or anywhere else.',
    'À éviter': 'Please avoid',
    "Une photo floue, trouvée en ligne ou sans lien avec la Route du Rhum, une personne reconnaissable sans son accord, un texte, un cadre ou un logo ajouté.": 'A blurry photo, one found online or unrelated to the Route du Rhum, a recognisable person without their consent, added text, frames or logos.',
    'JPG, PNG ou HEIC, depuis votre téléphone ou votre ordinateur.': 'JPG, PNG or HEIC, from your phone or your computer.',
    "Elle est allégée avant l'envoi (2 400 px, moins de 2 Mo), sans ses données de localisation.": 'It is made lighter before sending (2,400 px, under 2 MB), without its location data.',
    'Une légende, si vous voulez (140 signes)': 'A caption, if you like (140 characters)',
    "J'ai pris cette photo, ou j'ai le droit de la diffuser, et les personnes reconnaissables sont d'accord.": 'I took this photo, or I have the right to share it, and anyone recognisable in it has agreed.',
    "J'accepte le <a href=\"#\" data-reglement>règlement du challenge</a>.": 'I accept the <a href="#" data-reglement>challenge rules</a>.',
    'Annuler': 'Cancel',
    'Envoyer ma photo': 'Send my photo',
    "C'est envoyé": 'Sent',
    "Votre photo est en attente de validation. Vous serez prévenu dans votre Espace Rhum dès qu'elle est en ligne.": 'Your photo is awaiting approval. You will be notified in your Espace Rhum as soon as it is online.',
    'Retour aux photos': 'Back to the photos',
    'Créer son Espace Rhum': 'Create your Espace Rhum',
    'Votre Espace Rhum pour voter': 'Your Espace Rhum to vote',
    "Les cœurs, l'étoile et le dépôt de votre photo sont réservés aux membres de l'Espace Rhum. C'est gratuit, et vous y suivez vos skippers, vos badges et vos actus.": 'Hearts, the star and submitting your photo are for Espace Rhum members. It is free, and there you follow your skippers, your badges and your news.',
    'Plus tard': 'Later',
    'Me connecter': 'Log in',
    'Créer mon Espace': 'Create my Espace',
    'Fan anonyme': 'Anonymous fan',
    'Photo du jour': 'Photo of the day',
    'Ma photo': 'My photo',
    'Nouvelle': 'New',
    'Mon étoile': 'My star',
    'Les premières photos arrivent': 'The first photos are on their way',
    "Déposez la vôtre, elle sera relue et mise en ligne par l'équipe.": 'Submit yours, our team will review it and put it online.',
    "Elles seront en ligne dès leur validation par l'équipe.": 'They will be online as soon as our team approves them.',
    "C'est votre photo": 'This is your photo',
    'Retirée de votre sélection': 'Removed from your selection',
    'Gardée, {n} photo dans votre sélection': 'Kept, {n} photo in your selection',
    'Gardée, {n} photos dans votre sélection': 'Kept, {n} photos in your selection',
    'Quarante photos au plus dans votre sélection. Retirez-en une pour en garder une autre.': 'Forty photos at most in your selection. Remove one to keep another.',
    'On ne vote pas pour sa propre photo': 'You cannot vote for your own photo',
    'Les votes sont clos': 'Voting is closed',
    "Les votes ne sont pas encore ouverts": 'Voting is not open yet',
    'Votre étoile est sur la photo de {a}': 'Your star is on the photo by {a}',
    'Étoile retirée': 'Star removed',
    'Masquée, elle ne réapparaîtra pas sur cet appareil': 'Hidden, it will not come back on this device',
    'Lien copié': 'Link copied',
    'Lien copié (maquette)': 'Link copied (mock-up)',
    "Le règlement arrive avec l'ouverture du challenge": 'The rules come with the opening of the challenge',
    'Un instant, votre Espace Rhum se charge': 'One moment, your Espace Rhum is loading',
    'Votre Espace Rhum ne répond pas. Réessayez dans un instant.': 'Your Espace Rhum is not responding. Please try again in a moment.',
    '<b>{n}</b> photo en ligne': '<b>{n}</b> photo online',
    '<b>{n}</b> photos en ligne': '<b>{n}</b> photos online',
    '<b>{n}</b> cœur posé': '<b>{n}</b> heart given',
    '<b>{n}</b> cœurs posés': '<b>{n}</b> hearts given',
    "Votes jusqu'au <b>{date}</b>": 'Voting until <b>{date}</b>',
    "Dépôts jusqu'au <b>{date}</b>": 'Submissions until <b>{date}</b>',
    'Ouverture le <b>{date}</b>': 'Opens on <b>{date}</b>',
    'Votes clos': 'Voting closed',
    '<b>{lot}</b> à gagner': '<b>{lot}</b> to win',
    "Réservé aux membres de l'Espace Rhum. Tout le monde peut regarder, et pour garder et voter, il suffit de <b>créer son Espace</b>.": 'For Espace Rhum members. Everyone can look, and to keep and vote, just <b>create your Espace</b>.',
    "Le dépôt des photos ouvre avec la publication du règlement. Tout le monde peut regarder, et pour garder et voter, il suffit de <b>créer son Espace</b>.": 'Photo submissions open once the rules are published. Everyone can look, and to keep and vote, just <b>create your Espace</b>.',
    "Les dépôts sont clos. Les votes continuent jusqu'au {date}, réservés aux membres de l'Espace Rhum.": 'Submissions are closed. Voting continues until {date}, for Espace Rhum members.',
    "Les dépôts sont clos. Les votes continuent, réservés aux membres de l'Espace Rhum.": 'Submissions are closed. Voting continues, for Espace Rhum members.',
    'Les votes sont clos. Merci à tous les participants.': 'Voting is closed. Thank you to everyone who took part.',
    'Bientôt': 'Coming soon',
    'Ouverture le {date}.': 'Opens on {date}.',
    'Ouverture très bientôt.': 'Opening very soon.',
    'Vous pourrez déposer votre photo ici, garder vos coups de cœur et poser votre étoile.': 'You will be able to submit your photo here, keep your favourites and give your star.',
    "Le dépôt et les votes sont réservés aux membres de l'Espace Rhum. Créez le vôtre pour être prêt le jour de l'ouverture.": 'Submitting and voting are for Espace Rhum members. Create yours to be ready on opening day.',
    "Votre participation n'a pas pu être lue.": 'Your entry could not be loaded.',
    'Réessayer': 'Try again',
    'Déposer une autre photo': 'Submit another photo',
    'Le dépôt des photos ouvre avec la publication du règlement.': 'Photo submissions open once the rules are published.',
    'Les dépôts sont clos.': 'Submissions are closed.',
    'Votre étoile est sur la photo de <b>{a}</b>{p}': 'Your star is on the photo by <b>{a}</b>{p}',
    'Votre étoile était sur la photo de <b>{a}</b>{p}': 'Your star was on the photo by <b>{a}</b>{p}',
    'Votre étoile est posée.': 'Your star is given.',
    "Vous n'avez pas encore posé votre étoile.": 'You have not given your star yet.',
    'Règlement du challenge': 'Challenge rules',
    '<i>{c}</i> et <i>{e}</i> cette nuit.': '<i>{c}</i> and <i>{e}</i> as of last night.',
    '{n} cœur': '{n} heart',
    '<b>{n}</b> cœur': '<b>{n}</b> heart',
    '<b>{n}</b> cœurs': '<b>{n}</b> hearts',
    '<b>{n}</b> étoile': '<b>{n}</b> star',
    '<b>{n}</b> étoiles': '<b>{n}</b> stars',
    '{n} cœurs': '{n} hearts',
    '{n} étoile': '{n} star',
    '{n} étoiles': '{n} stars',
    'En ligne': 'Online',
    'En attente': 'Pending',
    'Refusée': 'Declined',
    'Retirée': 'Removed',
    "Relue par l'équipe avant sa mise en ligne. Vous serez prévenu dans votre Espace Rhum.": 'Our team reviews it before it goes online. You will be notified in your Espace Rhum.',
    "Relue par l'équipe, en général sous 48 h.": 'Reviewed by our team, usually within 48 hours.',
    'Refusée pour « {motif} ».': 'Declined: “{motif}”.',
    "Refusée par l'équipe.": 'Declined by our team.',
    'Vous pouvez en déposer une autre.': 'You can submit another one.',
    "Après deux refus, il n'est plus possible d'en déposer une autre.": 'After two declines, it is no longer possible to submit another one.',
    "Retirée par l'équipe pour « {motif} ».": 'Removed by our team: “{motif}”.',
    "Retirée par l'équipe.": 'Removed by our team.',
    'Comptée chaque nuit, avec ses cœurs et ses étoiles.': 'Counted every night, with its hearts and stars.',
    "Refusée pour « visage d'un tiers reconnaissable ». Vous pouvez en déposer une autre.": 'Declined: “a third party’s face can be recognised”. You can submit another one.',
    'La photo du jour': 'The photo of the day',
    "Sans légende, et c'est très bien": 'No caption, and that is just fine',
    'par <b>{a}</b>, mise en ligne le {date}': 'by <b>{a}</b>, online since {date}',
    'Chaque nuit, une photo jamais mise en avant prend cette place pendant vingt-quatre heures. Tout le monde y passe, quel que soit son nombre de cœurs.': 'Every night, a photo never featured before takes this spot for twenty-four hours. Everyone gets a turn, whatever their number of hearts.',
    'Voir en grand': 'See full size',
    'Photo de<b>{a}</b>': 'Photo by<b>{a}</b>',
    'Mise en ligne le {date}': 'Online since {date}',
    'Comptés cette nuit. Votre geste sera dans le compte de demain.': 'Counted last night. What you do now will be in tomorrow’s count.',
    "C'est votre photo. On ne vote pas pour soi, mais vous pouvez la partager.": 'This is your photo. You cannot vote for yourself, but you can share it.',
    'Dans ma sélection': 'In my selection',
    'Retirer le cœur': 'Remove the heart',
    'Jusqu\'à quarante, pour choisir ensuite': 'Up to forty, to choose from later',
    'Mon étoile est ici': 'My star is here',
    'Poser mon étoile': 'Give my star',
    'Retirer mon vote': 'Remove my vote',
    "Votre seul vote, déplaçable jusqu'au {date}": 'Your only vote, you can move it until {date}',
    "Votre seul vote, déplaçable jusqu'à la clôture": 'Your only vote, you can move it until voting closes',
    'Partager': 'Share',
    'Le lien de cette photo': 'The link to this photo',
    'Masquer': 'Hide',
    'Ne plus la voir sur cet appareil': 'Stop seeing it on this device',
    '{n} photo gardée.': '{n} photo kept.',
    '{n} photos gardées.': '{n} photos kept.',
    'Votre étoile est sur celle de <b>{a}</b>{p}': 'Your star is on the one by <b>{a}</b>{p}',
    'Il reste à poser votre étoile': 'One last step, give your star',
    "Choisissez votre préférée avec l'étoile en haut de sa vignette. C'est votre seul vote, une par membre, et la photo la plus étoilée gagne.": 'Pick your favourite with the star at the top of its thumbnail. It is your only vote, one per member, and the photo with the most stars wins.',
    'Vos cœurs se rangent ici. Gardez celles que vous aimez, puis choisissez.': 'Your hearts gather here. Keep the ones you love, then choose.',
    "Aucune photo gardée pour l'instant.<br>Un cœur sur une photo, et elle arrive ici.": 'No photo kept yet.<br>Put a heart on a photo and it lands here.',
    '<b>{i}</b> / {n} · {k}': '<b>{i}</b> / {n} · {k}',
    '{n} photo gardée': '{n} photo kept',
    '{n} photos gardées': '{n} photos kept',
    'Gardée': 'Kept',
    'Passée': 'Passed',
    'Belle sélection': 'Nice selection',
    'Tout vu': 'All seen',
    'Votre étoile est posée, vous pouvez encore la déplacer.': 'Your star is given, you can still move it.',
    'Il reste à poser votre étoile sur une seule.': 'All that is left is to give your star to just one.',
    'Vous avez passé toutes les photos. Les prochaines arrivent chaque jour.': 'You have gone through all the photos. New ones arrive every day.',
    'Choisir mon étoile': 'Choose my star',
    'Rien à reprendre': 'Nothing to undo',
    'Préparation de la photo…': 'Preparing the photo…',
    'Sera envoyée en {l} × {h} px, {mo} Mo, sans données de localisation.': 'Will be sent at {l} × {h} px, {mo} MB, without location data.',
    'Sera envoyée en {l} × {h} px, sans données de localisation.': 'Will be sent at {l} × {h} px, without location data.',
    'Envoi… {pct} %': 'Sending… {pct}%',
    'Vérification…': 'Checking…',
    'Connexion perdue, reprise…': 'Connection lost, resuming…',
    "Ce navigateur ne lit pas les photos HEIC. Sur iPhone, choisissez-la depuis la photothèque (elle part alors en JPEG), ou déposez-la depuis Safari.": 'This browser cannot read HEIC photos. On iPhone, pick it from your photo library (it is then sent as JPEG), or submit it from Safari.',
    'Cette photo est illisible. Essayez-en une autre (JPG ou PNG).': 'This photo cannot be read. Try another one (JPG or PNG).',
    "Ce fichier n'est pas une photo.": 'This file is not a photo.',
    'Cette photo est trop petite (au moins 600 px de large ou de haut).': 'This photo is too small (at least 600 px wide or high).',
    'Cette photo reste trop lourde après réduction. Essayez-en une autre.': 'This photo is still too heavy after reduction. Try another one.',
    'Cette photo est trop lourde (40 Mo au plus).': 'This photo is too heavy (40 MB at most).',
    'Le serveur ne répond pas. Réessayez dans un instant.': 'The server is not responding. Please try again in a moment.',
    'Connexion interrompue. Réessayez dans un instant.': 'Connection lost. Please try again in a moment.',
    'Votre session a expiré. Reconnectez-vous, puis réessayez.': 'Your session has expired. Log in again, then try again.',
    'Le dépôt ouvre avec la publication du règlement.': 'Submissions open once the rules are published.',
    'Vous avez déjà une photo en lice.': 'You already have a photo in the running.',
    'Un dépôt toutes les dix minutes au plus. Réessayez un peu plus tard.': 'One submission every ten minutes at most. Please try again a little later.',
    "Le dépôt n'est pas encore ouvert.": 'Submissions are not open yet.',
    'Les dépôts sont fermés.': 'Submissions are closed.',
    "Cette photo n'a pas été acceptée. Essayez-en une autre.": 'This photo was not accepted. Try another one.',
    "Le dépôt n'a pas abouti. Réessayez dans un instant.": 'The submission did not go through. Please try again in a moment.',
    "Votre étoile n'a pas pu être posée. Réessayez dans un instant.": 'Your star could not be given. Please try again in a moment.',
    "Votre sélection n'a pas pu être enregistrée. Réessayez dans un instant.": 'Your selection could not be saved. Please try again in a moment.',
    'Le challenge revient dans un instant': 'The challenge will be back in a moment',
    "L'aperçu revient dans un instant": 'The preview will be back in a moment',
    "Les photos n'ont pas pu être lues.": 'The photos could not be loaded.',
    'Le Challenge photo arrive bientôt': 'The photo challenge is coming soon',
    "Une photo par membre de l'Espace Rhum, des cœurs pour garder celles qu'on aime, et une étoile pour élire la plus belle. Les photos des participants s'afficheront ici.": 'One photo per Espace Rhum member, hearts to keep the ones you love, and a star to elect the most beautiful. The participants’ photos will appear here.',
    'Ouverture le {date}': 'Opens on {date}',
    'Préparez votre plus belle photo de la Route du Rhum, les dépôts ouvrent ce jour-là.': 'Get your best Route du Rhum photo ready, submissions open that day.',
    'Les votes sont clos.': 'Voting is closed.',
    "Le challenge n'est pas ouvert.": 'The challenge is not open.',
    "Votre photo a été retirée par l'équipe, le dépôt est clos pour ce compte.": 'Your photo was removed by our team, submissions are closed for this account.',
    'Cochez les deux cases pour envoyer votre photo.': 'Tick both boxes to send your photo.',
    'Votre photo est encore en traitement. Réessayez dans une minute.': 'Your photo is still being processed. Please try again in a minute.',
    "Cette photo n'est plus en ligne.": 'This photo is no longer online.',
    'Les cœurs et les votes sont clos.': 'Hearts and voting are closed.',
    'Votre sélection est prête': 'Your selection is ready',
    "N'oubliez pas de poser votre étoile sur votre préférée. Les cœurs forment votre sélection, seule l'étoile vote pour la meilleure photo.": "Don't forget to give your star to your favourite. Hearts make up your selection, only your star votes for the best photo.",
    'Choisir ma préférée': 'Choose my favourite',
    'Votre préférée': 'Your favourite',
    'Photo de {a}': 'Photo by {a}',
    "Votre étoile est votre seul vote, c'est elle qui peut faire gagner cette photo.": 'Your star is your only vote, it is what can make this photo win.',
    "Une autre vous plaît encore plus ? Vous pouvez déplacer votre étoile jusqu'au <strong>{date}</strong>.": 'Like another one even more? You can move your star until <strong>{date}</strong>.',
    "Une autre vous plaît encore plus ? Vous pouvez déplacer votre étoile jusqu'à la clôture des votes.": 'Like another one even more? You can move your star until voting closes.',
    'Changer de préférée': 'Change my favourite',
    'Voir ma préférée en grand': 'See my favourite full size',
    "Pensez à poser votre étoile sur votre préférée, c'est elle qui vote.": 'Remember to give your star to your favourite, it is your vote.',
    'Poser mon étoile sur cette photo': 'Give my star to this photo',
    'Ma préférée': 'My favourite',
    'Déplacer votre étoile sur cette photo ?': 'Move your star to this photo?',
    "Elle est aujourd'hui sur la photo de <b>{a}</b>{p}": 'It is currently on the photo by <b>{a}</b>{p}',
    "Elle est aujourd'hui sur une autre photo.": 'It is currently on another photo.',
    "Vous pourrez encore la déplacer jusqu'au <strong>{date}</strong>.": 'You can still move it until <strong>{date}</strong>.',
    "Vous pourrez encore la déplacer jusqu'à la clôture des votes.": 'You can still move it until voting closes.',
    'Laisser mon étoile': 'Leave my star',
    'Déplacer mon étoile': 'Move my star',
    "Une petite maintenance du dépôt des photos est en cours. Désolé pour le dérangement. N'hésitez pas à repasser déposer votre photo un peu plus tard.": 'A quick maintenance on photo uploads is under way. Sorry for the inconvenience. Feel free to come back a little later to submit your photo.'
  };

  const PAGE = (t, demo) => `<div class="cp" id="cp">
  <section class="cp-scene" aria-labelledby="cp-titre">
    <div class="cp-mur" id="cp-mur" aria-hidden="true"><div class="cp-mur-col"><i class="cp-att" style="height:210px"></i><i class="cp-att" style="height:150px"></i><i class="cp-att" style="height:260px"></i><i class="cp-att" style="height:180px"></i><i class="cp-att" style="height:230px"></i></div><div class="cp-mur-col"><i class="cp-att" style="height:170px"></i><i class="cp-att" style="height:240px"></i><i class="cp-att" style="height:190px"></i><i class="cp-att" style="height:250px"></i><i class="cp-att" style="height:160px"></i></div><div class="cp-mur-col"><i class="cp-att" style="height:230px"></i><i class="cp-att" style="height:180px"></i><i class="cp-att" style="height:150px"></i><i class="cp-att" style="height:220px"></i><i class="cp-att" style="height:200px"></i></div><div class="cp-mur-col"><i class="cp-att" style="height:160px"></i><i class="cp-att" style="height:250px"></i><i class="cp-att" style="height:200px"></i><i class="cp-att" style="height:170px"></i><i class="cp-att" style="height:240px"></i></div></div>
    <img class="cp-vagues" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  alt="" aria-hidden="true">
    <div class="cp-scene-in">
      <div>
        <div class="cp-marque-bloc">
          <alpina-clock class="cp-montre" aria-hidden="true"></alpina-clock>
          <img class="cp-alpina" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" width="214" height="80">
        </div>
        <h1 class="cp-titre" id="cp-titre">${t('Votre <em>Route du Rhum</em>,<br> en une photo')}</h1>
        <p class="cp-accroche">${t('Une photo par membre, celle qui raconte le mieux votre Route du Rhum.')}</p>
        <ul class="cp-chiffres" id="cp-chiffres"><li class="cp-att cp-att--chiffres" style="width:140px"></li><li class="cp-att cp-att--chiffres" style="width:160px"></li><li class="cp-att cp-att--chiffres" style="width:190px"></li></ul>
      </div>
      <div class="cp-actions" id="cp-actions"><div class="cp-att cp-att--mienne"></div><div class="cp-att cp-att--bouton"></div><div class="cp-att cp-att--ligne"></div></div>
      <ol class="cp-etapes">
        <li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/></svg></i><b>${t('Déposez votre photo')}</b><span>${t("Une seule par membre, relue par l'équipe")}</span></li>
        <li><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.3 3.2 4.5 6.9 4.5c2 0 3.4 1 4.1 2.3.7-1.3 2.1-2.3 4.1-2.3 3.7 0 5.9 3.8 4.5 7.4C19.5 16.4 12 21 12 21z"/></svg></i><b>${t('Gardez vos coups de cœur')}</b><span>${t("Jusqu'à 40, ils forment votre sélection")}</span></li>
        <li><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg></i><b>${t('Posez votre étoile')}</b><span>${t('Une par membre, elle seule fait gagner')}</span></li>
      </ol>
      <p class="cp-partenaire">${t('<b>Alpina</b>, chronométreur officiel de la Route du Rhum.')}${' ' + (demo ? t('Aperçu du challenge, avec les photos du site, des noms et des votes fictifs.') : t("Photos relues par l'équipe, cœurs et étoiles comptés chaque nuit."))}</p>
    </div>
  </section>

  <div class="cp-fond"><div class="cp-corps">
    <section class="cp-gp" id="cp-gp" aria-label="${t('Mode glisser')}">
      <div class="cp-gp-pile" id="cp-gp-pile" aria-hidden="true"><span class="cp-att"></span><span class="cp-att"></span><span class="cp-att"></span></div>
      <div class="cp-gp-txt">
        <p class="cp-sur">${t('Mode glisser')}</p>
        <h2>${t('Jugez-les une à une')}</h2>
        <p>${t('Vers la droite, <b class="oui">je garde</b>. Vers la gauche, <b class="non">je passe</b>. Le plus rapide pour trier depuis son téléphone.')}</p>
        <button class="cp-btn cp-btn--or" type="button" id="cp-gp-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><rect x="9" y="6" width="6" height="12" rx="1.5"/></svg>${t('Je commence')}</button>
      </div>
    </section>
    <div class="cp-barre">
      <div class="cp-onglets" role="tablist" id="cp-onglets">
        <span class="cp-onglets-curseur" id="cp-onglets-curseur" aria-hidden="true"></span>
        <button class="cp-onglet" role="tab" data-ordre="decouvrir" aria-selected="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg></i><span><b>${t('À découvrir')}</b><small>${t('têtes, nouveautés, hasard')}</small></span></button>
        <button class="cp-onglet" role="tab" data-ordre="dernieres" aria-selected="false"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></i><span><b>${t('Les dernières')}<em id="cp-onglet-neuves"></em></b><small>${t("les plus récentes d'abord")}</small></span></button>
        <button class="cp-onglet" role="tab" data-ordre="aimees" aria-selected="false"><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg></i><span><b>${t('Les plus aimées')}</b><small>${t('comptées chaque nuit')}</small></span></button>
      </div>
      <div class="cp-barre-droite">
        <div class="cp-gpc" id="cp-gpc">
          <div class="cp-gpc-pile" id="cp-gpc-pile" aria-hidden="true"><div class="cp-gp-pile"><span class="cp-att"></span><span class="cp-att"></span><span class="cp-att"></span></div></div>
          <div class="cp-gpc-txt"><p class="cp-sur">${t('Mode glisser')}</p><b>${t('Jugez-les une à une')}</b><span>${t('À droite, <em class="oui">je garde</em>. À gauche, <em class="non">je passe</em>.')}</span></div>
          <button class="cp-btn cp-btn--or" id="cp-btn-glisser-haut" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><rect x="9" y="6" width="6" height="12" rx="1.5"/></svg>${t('Je commence')}</button>
        </div>
      </div>
    </div>

    <section class="cp-jour cp-jour--attente" id="cp-jour" aria-busy="true"><div class="cp-jour-img cp-att"></div><div class="cp-jour-txt"><i class="cp-att cp-att--barre" style="width:44%"></i><i class="cp-att cp-att--titre"></i><i class="cp-att cp-att--barre" style="width:52%"></i><i class="cp-att cp-att--barre"></i><i class="cp-att cp-att--barre" style="width:86%"></i><i class="cp-att cp-att--boutons"></i></div></section>

    <div class="cp-grille" id="cp-grille" aria-busy="true"><div class="cp-att-rangee"><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:0.7"></i><i class="cp-att" style="flex-grow:1.33"></i><i class="cp-att" style="flex-grow:1"></i><i class="cp-att" style="flex-grow:1.5"></i></div><div class="cp-att-rangee"><i class="cp-att" style="flex-grow:1"></i><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:0.67"></i><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:1.2"></i></div><div class="cp-att-rangee"><i class="cp-att" style="flex-grow:1.33"></i><i class="cp-att" style="flex-grow:1.5"></i><i class="cp-att" style="flex-grow:1"></i><i class="cp-att" style="flex-grow:0.75"></i><i class="cp-att" style="flex-grow:1.5"></i></div></div>
    <div class="cp-sentinelle" id="cp-sentinelle"></div>
    <div class="cp-fin" id="cp-fin" hidden>${t('Vous avez tout vu. Les prochaines photos arrivent chaque jour, après validation.')}</div>
  </div></div>
</div>`;

  const PORTAIL = (t) => `<button class="cp-btn cp-btn--or cp-flottant" id="cp-btn-glisser" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><rect x="9" y="6" width="6" height="12" rx="1.5"/></svg>
  ${t('Mode glisser')}
</button>

<div class="cp-fen" id="cp-fen" role="dialog" aria-modal="true" aria-label="${t('Photo en grand')}">
  <div class="cp-fen-corps">
    <div class="cp-fen-scene" id="cp-fen-scene">
      <span class="cp-fen-num" id="cp-fen-num"></span>
      <button class="cp-fen-fermer" id="cp-fen-fermer" type="button" aria-label="${t('Fermer')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
      <button class="cp-fen-fleche cp-fen-fleche--g" id="cp-fen-prec" type="button" aria-label="${t('Précédente')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
      <img id="cp-fen-img" alt="">
      <button class="cp-fen-fleche cp-fen-fleche--d" id="cp-fen-suiv" type="button" aria-label="${t('Suivante')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
    </div>
    <aside class="cp-fen-panneau" id="cp-fen-panneau"></aside>
  </div>
</div>

<div class="cp-ombre" id="cp-ombre"></div>
<aside class="cp-tiroir" id="cp-tiroir" aria-label="${t('Ma sélection')}">
  <div class="cp-tiroir-tete">
    <div>
      <h3>${t('Ma sélection')}</h3>
      <p id="cp-tiroir-sous"></p>
    </div>
    <button class="cp-tiroir-x" id="cp-tiroir-x" type="button" aria-label="${t('Fermer')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div class="cp-tiroir-rappel" id="cp-tiroir-rappel"></div>
  <div class="cp-tiroir-liste" id="cp-tiroir-liste"></div>
  <div class="cp-tiroir-pied">${t("Vos cœurs suivent votre compte, sur votre téléphone comme sur votre ordinateur. Votre étoile peut changer de photo jusqu'à la clôture des votes.")}</div>
</aside>

<div class="cp-gl" id="cp-gl" role="dialog" aria-modal="true" aria-label="${t('Mode glisser')}">
  <div class="cp-gl-tete">
    <div><p class="cp-sur">${t('Mode glisser')}</p><div class="cp-prog" id="cp-gl-prog"></div></div>
    <button class="cp-tiroir-x" id="cp-gl-x" type="button" aria-label="${t('Quitter')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div class="cp-gl-scene" id="cp-gl-scene">
    <div class="cp-gl-fin" id="cp-gl-fin"></div>
  </div>
  <p class="cp-gl-aide" id="cp-gl-aide">${t('À droite, <b class="oui">je garde</b>. À gauche, <b class="non">je passe</b>. <b class="etoile">L\'étoile</b> pose votre vote. Touchez la photo pour l\'agrandir.')}</p>
  <div class="cp-gl-acts" id="cp-gl-acts">
    <button class="cp-gl-rond cp-gl-rond--petit" id="cp-gl-retour" type="button" aria-label="${t('Revenir')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg></button>
    <button class="cp-gl-rond cp-gl-rond--passe" id="cp-gl-passe" type="button" aria-label="${t('Passer')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    <button class="cp-gl-rond cp-gl-rond--petit cp-gl-rond--etoile" id="cp-gl-etoile" type="button" data-on="0" aria-label="${t('Poser mon étoile sur cette photo')}">${ICO.etoileLigne}</button>
    <button class="cp-gl-rond cp-gl-rond--garde" id="cp-gl-garde" type="button" aria-label="${t('Garder')}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.3 3.2 4.5 6.9 4.5c2 0 3.4 1 4.1 2.3.7-1.3 2.1-2.3 4.1-2.3 3.7 0 5.9 3.8 4.5 7.4C19.5 16.4 12 21 12 21z"/></svg></button>
    <button class="cp-gl-rond cp-gl-rond--petit" id="cp-gl-tiroir" type="button" aria-label="${t('Ma sélection')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></button>
  </div>
</div>

<div class="cp-modal" id="cp-depot" role="dialog" aria-modal="true" aria-label="${t('Déposer ma photo')}">
  <div class="cp-modal-boite">
    <h3>${t('Déposer ma photo')}</h3>
    <p>${t("Une seule photo par membre. Elle est relue par l'équipe avant d'apparaître, vous serez prévenu dans votre Espace Rhum.")}</p>
    <div id="cp-depot-etape1">
      <div class="cp-guide">
        <div class="cp-guide-col cp-guide-oui">
          <b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg>${t('Quelle photo ?')}</b>
          ${t("Une photo que vous avez prise et qui raconte votre Route du Rhum. Le village, les pontons, les bateaux et leurs skippers, le départ, l'ambiance, à Saint-Malo, en Guadeloupe ou ailleurs.")}
        </div>
        <div class="cp-guide-col cp-guide-non">
          <b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>${t('À éviter')}</b>
          ${t("Une photo floue, trouvée en ligne ou sans lien avec la Route du Rhum, une personne reconnaissable sans son accord, un texte, un cadre ou un logo ajouté.")}
        </div>
      </div>
      <label class="cp-drop" id="cp-drop">
        <b>${t('Choisir une photo')}</b>
        ${t('JPG, PNG ou HEIC, depuis votre téléphone ou votre ordinateur.')}
        <small>${t("Elle est allégée avant l'envoi (2 400 px, moins de 2 Mo), sans ses données de localisation.")}</small>
        <input type="file" accept="image/*" hidden id="cp-fichier">
      </label>
      <div class="cp-apercu" id="cp-apercu">
        <img id="cp-apercu-img" alt="">
        <div class="cp-apercu-i" id="cp-apercu-i"></div>
      </div>
      <input class="cp-champ" id="cp-legende" maxlength="140" placeholder="${t('Une légende, si vous voulez (140 signes)')}">
      <label class="cp-case-a-cocher"><input type="checkbox" id="cp-c1"><span>${t("J'ai pris cette photo, ou j'ai le droit de la diffuser, et les personnes reconnaissables sont d'accord.")}</span></label>
      <label class="cp-case-a-cocher"><input type="checkbox" id="cp-c2"><span>${t("J'accepte le <a href=\"#\" data-reglement>règlement du challenge</a>.")}</span></label>
      <p class="cp-depot-etat" id="cp-depot-etat" aria-live="polite"></p>
      <div class="cp-progress" id="cp-progress"><i></i></div>
      <div class="cp-modal-acts">
        <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-depot">${t('Annuler')}</button>
        <button class="cp-btn cp-btn--or" id="cp-envoyer" type="button" disabled>${t('Envoyer ma photo')}</button>
      </div>
    </div>
    <div class="cp-ok" id="cp-depot-ok">
      <div class="cp-rond-ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></div>
      <h3>${t("C'est envoyé")}</h3>
      <p>${t("Votre photo est en attente de validation. Vous serez prévenu dans votre Espace Rhum dès qu'elle est en ligne.")}</p>
      <div class="cp-modal-acts" style="justify-content:center"><button class="cp-btn cp-btn--or" type="button" data-fermer="cp-depot">${t('Retour aux photos')}</button></div>
    </div>
  </div>
</div>

<div class="cp-modal" id="cp-connexion" role="dialog" aria-modal="true" aria-label="${t('Créer son Espace Rhum')}">
  <div class="cp-modal-boite">
    <h3>${t('Votre Espace Rhum pour voter')}</h3>
    <p>${t("Les cœurs, l'étoile et le dépôt de votre photo sont réservés aux membres de l'Espace Rhum. C'est gratuit, et vous y suivez vos skippers, vos badges et vos actus.")}</p>
    <div class="cp-modal-acts">
      <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-connexion">${t('Plus tard')}</button>
      <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-connexion" data-mode="login">${t('Me connecter')}</button>
      <button class="cp-btn cp-btn--or" type="button" data-fermer="cp-connexion" data-mode="signup">${t('Créer mon Espace')}</button>
    </div>
  </div>
</div>

<div class="cp-modal" id="cp-deplacer" role="dialog" aria-modal="true" aria-label="${t('Déplacer votre étoile sur cette photo ?')}">
  <div class="cp-modal-boite cp-modal-boite--petite">
    <h3>${t('Déplacer votre étoile sur cette photo ?')}</h3>
    <p id="cp-deplacer-txt"></p>
    <div class="cp-modal-acts">
      <button class="cp-btn cp-btn--ligne" type="button" data-fermer="cp-deplacer">${t('Laisser mon étoile')}</button>
      <button class="cp-btn cp-btn--or" type="button" id="cp-deplacer-ok">${ICO.etoile} ${t('Déplacer mon étoile')}</button>
    </div>
  </div>
</div>

<div class="cp-toast" id="cp-toast" role="status"></div>
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

  

  function langueDe(el) {
    const a = String(el.getAttribute('lang') || '').toLowerCase();
    if (a) return a.indexOf('en') === 0 ? 'en' : 'fr';
    if (/^\/en(\/|$)/.test(location.pathname || '')) return 'en';
    return String(document.documentElement.lang || '').toLowerCase().indexOf('en') === 0 ? 'en' : 'fr';
  }

  function traducteur(lang, racine) {
    const manques = racine._manques = new Set();
    return function t(fr, vars) {
      let s = fr;
      if (lang === 'en') {
        if (Object.prototype.hasOwnProperty.call(TR, fr)) s = TR[fr];
        else manques.add(fr);
      }
      return vars ? s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m)) : s;
    };
  }

  



  function lireImage(img, l, h) {
    const s = String(img || '');
    let f = '', n = '', m;
    if ((m = /^wix:image:\/\/v1\/([^/#?]+)\/([^#?]*)/.exec(s))) { f = m[1]; try { n = decodeURIComponent(m[2]); } catch (e) { n = m[2]; } }
    else if ((m = /^https:\/\/static\.wixstatic\.com\/media\/([^/?#]+)/.exec(s))) f = m[1];
    else if (ID_FICHIER.test(s)) f = s;
    if (!ID_FICHIER.test(f)) return null;
    let L = Number(l) || 0, H = Number(h) || 0;
    if (!(L > 0 && H > 0)) {
      const w = /originWidth=(\d+)/.exec(s), hh = /originHeight=(\d+)/.exec(s);
      L = w ? +w[1] : 0; H = hh ? +hh[1] : 0;
    }
    return { f, n: n || f, l: L, h: H };
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

  async function lireJson(url) {
    const r = await fetch(url, { credentials: 'omit' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }
  function adressePage(base, page, lang) {
    return base + (base.indexOf('?') >= 0 ? '&' : '?') + 'page=' + page + (lang === 'en' ? '&lang=en' : '');
  }

  







  function erreurPhoto(code) { const e = new Error(code); e.code = code; return e; }

  function chargerImage(url) {
    return new Promise((ok, ko) => {
      const img = new Image();
      const minuteur = setTimeout(() => ko(erreurPhoto('illisible')), 20000);
      img.onload = () => { clearTimeout(minuteur); ok(img); };
      img.onerror = () => { clearTimeout(minuteur); ko(erreurPhoto('illisible')); };
      img.src = url;
    });
  }

  async function decoderPhoto(file) {
    if (typeof createImageBitmap === 'function') {
      try {
        const b = await createImageBitmap(file, { imageOrientation: 'from-image' });
        return { source: b, l: b.width, h: b.height, fin: () => { try { b.close(); } catch (e) {   } } };
      } catch (e) {   }
    }
    

    const url = URL.createObjectURL(file);
    try {
      const img = await chargerImage(url);
      return { source: img, l: img.naturalWidth, h: img.naturalHeight, fin: () => URL.revokeObjectURL(url) };
    } catch (e) { URL.revokeObjectURL(url); throw e; }
  }

  function rendreCanvas(source, l, h) {
    const c = document.createElement('canvas');
    c.width = l; c.height = h;
    const x = c.getContext('2d');
    x.fillStyle = '#ffffff';
    x.fillRect(0, 0, l, h);
    x.imageSmoothingEnabled = true;
    x.imageSmoothingQuality = 'high';
    x.drawImage(source, 0, 0, l, h);
    return c;
  }
  function liberer(c) { try { c.width = 1; c.height = 1; } catch (e) {   } }

  function enJpeg(c, q) {
    return new Promise((ok) => {
      let fini = false;
      const minuteur = setTimeout(() => { if (!fini) { fini = true; ok(null); } }, 20000);
      try { c.toBlob((b) => { if (fini) return; fini = true; clearTimeout(minuteur); ok(b); }, 'image/jpeg', q); }
      catch (e) { if (!fini) { fini = true; clearTimeout(minuteur); ok(null); } }
    });
  }

  





  function empreinteDe(source) {
    const c = document.createElement('canvas');
    c.width = 90; c.height = 80;
    const x = c.getContext('2d', { willReadFrequently: true });
    x.imageSmoothingEnabled = true;
    x.imageSmoothingQuality = 'high';
    x.drawImage(source, 0, 0, 90, 80);
    const d = x.getImageData(0, 0, 90, 80).data;
    liberer(c);
    const g = new Array(72).fill(0);
    for (let y = 0; y < 80; y++) {
      for (let X = 0; X < 90; X++) {
        const i = (y * 90 + X) * 4;
        g[Math.floor(y / 10) * 9 + Math.floor(X / 10)] += 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      }
    }
    let hex = '';
    for (let r = 0; r < 8; r++) {
      let octet = 0;
      for (let k = 0; k < 8; k++) octet = (octet << 1) | (g[r * 9 + k] > g[r * 9 + k + 1] ? 1 : 0);
      hex += octet.toString(16).padStart(2, '0');
    }
    return hex;
  }
  function distanceEmpreintes(a, b) {
    if (!/^[0-9a-f]{16}$/.test(a || '') || !/^[0-9a-f]{16}$/.test(b || '')) return 64;
    let n = 0;
    for (let i = 0; i < 16; i++) { let v = parseInt(a[i], 16) ^ parseInt(b[i], 16); while (v) { n += v & 1; v >>= 1; } }
    return n;
  }

  async function preparerPhoto(file) {
    if (!file || !file.size || file.size < 1024) throw erreurPhoto('illisible');
    const type = String(file.type || '').toLowerCase(), nom = String(file.name || '').toLowerCase();
    const heic = /hei[cf]/.test(type) || /\.hei[cf]$/.test(nom);
    if (type && !/^image\//.test(type) && !heic) throw erreurPhoto('type');
    if (file.size > PHOTO.ENTREE_MAX) throw erreurPhoto('entree');
    let dec;
    try { dec = await decoderPhoto(file); }
    catch (e) { throw erreurPhoto(heic ? 'heic' : 'illisible'); }
    try {
      const L = dec.l, H = dec.h;
      if (!(L > 0 && H > 0)) throw erreurPhoto(heic ? 'heic' : 'illisible');
      if (Math.max(L, H) < PHOTO.MIN) throw erreurPhoto('petite');
      const budget = IS_SAFARI ? PHOTO.BUDGET_SAFARI : PHOTO.BUDGET;
      let max = PHOTO.MAX, q = PHOTO.Q0, blob = null, c = null, l = 0, h = 0;
      for (let essai = 0; essai < 24; essai++) {
        const r = Math.min(1, max / Math.max(L, H));
        l = Math.max(1, Math.round(L * r)); h = Math.max(1, Math.round(H * r));
        if (c) liberer(c);
        c = rendreCanvas(dec.source, l, h);
        blob = await enJpeg(c, q);
        if (!blob) throw erreurPhoto('illisible');
        if (blob.size <= budget) break;
        if (q > PHOTO.QMIN + 0.001) { q = Math.max(PHOTO.QMIN, q - 0.08); continue; }
        if (max > PHOTO.PLANCHER) { max = Math.max(PHOTO.PLANCHER, Math.round(max * 0.85)); q = 0.8; continue; }
        break;
      }
      if (!blob || blob.size > PHOTO.PLAFOND) { if (c) liberer(c); throw erreurPhoto('lourde'); }
      const empreinte = empreinteDe(c);
      liberer(c);
      return { blob, l, h, empreinte, url: URL.createObjectURL(blob) };
    } finally { dec.fin(); }
  }

  







  function xhr(method, url, entetes, corps, surEnvoi, delai) {
    return new Promise((ok, ko) => {
      const r = new XMLHttpRequest();
      r.open(method, url, true);
      r.timeout = delai || 60000;
      Object.keys(entetes || {}).forEach((k) => r.setRequestHeader(k, entetes[k]));
      if (surEnvoi && r.upload) r.upload.addEventListener('progress', (e) => { if (e.lengthComputable) surEnvoi(e.loaded); });
      r.ontimeout = () => ko(new Error('delai'));
      r.onerror = () => ko(new Error('reseau'));
      r.onload = () => ok({ status: r.status, text: r.responseText, entete: (n) => r.getResponseHeader(n) });
      try { r.send(corps); } catch (e) { ko(new Error('reseau')); }
    });
  }
  async function envoyerFichier(adresse, blob, nom, progres) {
    const url = String(adresse.uploadUrl || '');
    if (!/^https:\/\//.test(url)) throw new Error('adresse');
    let fin;
    if (adresse.uploadToken) {
      const jeton = String(adresse.uploadToken);
      const b64 = (s) => btoa(unescape(encodeURIComponent(s)));
      const tus = { 'Tus-Resumable': '1.0.0' };
      const creation = await xhr('POST', url, Object.assign({}, tus, { 'Upload-Length': String(blob.size), 'Upload-Metadata': 'filename ' + b64(nom) + ',contentType ' + b64('image/jpeg') + ',token ' + b64(jeton) }));
      const lieu = creation.status === 201 ? creation.entete('Location') : '';
      if (!lieu) throw new Error('envoi');
      const session = new URL(lieu, url).href;
      let position = 0, echecs = 0;
      while (position < blob.size) {
        const depart = position, bout = Math.min(blob.size, position + MORCEAU);
        try {
          const r = await xhr('PATCH', session, Object.assign({}, tus, { 'Upload-Offset': String(depart), 'Content-Type': 'application/offset+octet-stream' }), blob.slice(depart, bout), (n) => progres(depart + n, false), 120000);
          const suivante = Number(r.entete('Upload-Offset'));
          if (r.status < 200 || r.status >= 300 || !(suivante > depart)) throw new Error('morceau ' + r.status);
          position = suivante; echecs = 0;
          progres(position, false);
        } catch (e) {
          if (echecs >= REPRISES.length) throw new Error('reseau');
          progres(position, true);
          await new Promise((ok) => setTimeout(ok, REPRISES[echecs]));
          echecs++;
          try {
            const h = await xhr('HEAD', session, tus, null);
            const connue = Number(h.entete('Upload-Offset'));
            if (h.status >= 200 && h.status < 300 && connue >= 0) position = connue;
          } catch (e2) {   }
        }
      }
      fin = await xhr('PUT', url + '/' + jeton + '?filename=' + encodeURIComponent(nom), {}, null);
    } else {
      fin = await xhr('PUT', url + (url.indexOf('?') >= 0 ? '&' : '?') + 'filename=' + encodeURIComponent(nom), { 'Content-Type': 'image/jpeg' }, blob, (n) => progres(n, false), 120000);
    }
    if (fin.status < 200 || fin.status >= 300) throw new Error('envoi');
    let corps = null;
    try { corps = JSON.parse(fin.text); } catch (e) { corps = null; }
    const f = corps && (corps.file || corps);
    if (!f || !f.id) throw new Error('envoi');
    return { id: String(f.id), url: String(f.url || '') };
  }

  class RdrConcoursPhoto extends HTMLElement {
    static get observedAttributes() { return ['lang', 'pont', 'membre', 'reponse']; }

    connectedCallback() {
      if (this._monte) return;
      this._monte = true;
      this._nettoyages = [];
      this._attentes = this._attentes || new Map();
      this._uid = Math.random().toString(36).slice(2, 8);
      this._n = 0;
      injecterCss();
      const q = new URLSearchParams(location.search);
      const demo = q.get('demo') === '1';
      const lang = langueDe(this);
      this._t = traducteur(lang, this);
      this._options = {
        demo, lang,
        etat: demo ? (q.get('etat') || this.getAttribute('etat') || 'ligne') : '',
        marque: q.get('marque') === 'sans' ? 'sans' : 'avec',
        teinte: q.get('teinte') === 'cg' ? 'cg' : 'vr',
        fond: q.get('fond') === 'uni' ? 'uni' : 'houle',
        gl: q.get('glisser') === 'cadre' ? 'cadre' : 'entiere',
        photo: ID_PHOTO.test(q.get('photo') || '') ? q.get('photo') : ''
      };
      this.innerHTML = PAGE(this._t, demo);
      const portail = document.createElement('div');
      portail.className = 'cp-portail';
      portail.lang = lang;
      portail.innerHTML = PORTAIL(this._t);
      document.body.appendChild(portail);
      this._portail = portail;
      for (const el of [this, portail]) {
        el.dataset.marque = this._options.marque; el.dataset.teinte = this._options.teinte;
        el.dataset.fond = this._options.fond; el.dataset.gl = this._options.gl;
      }
      if (!demo) this._guetterPont();
      this._charger();
    }

    disconnectedCallback() {
      if (this._api && this._api.vider) { try { this._api.vider(); } catch (e) {   } }
      this._monte = false;
       
      this._gen = (this._gen || 0) + 1;
      clearTimeout(this._minPont); clearTimeout(this._minMembre); clearTimeout(this._minRelance);
      (this._nettoyages || []).forEach(f => { try { f(); } catch (e) {   } });
      this._nettoyages = [];
      this._api = this._apercu = null;
      if (this._portail) { this._portail.remove(); this._portail = null; }
      deverrouiller(true);
    }

    attributeChangedCallback(nom, ancien, valeur) {
      if (nom === 'reponse') { this._surReponse(valeur); return; }
      if (!this._monte || (this._options && this._options.demo)) return;
      if (nom === 'pont') this._pontVu();
      else if (nom === 'membre') this._surMembreBrut(valeur);
      else if (nom === 'lang' && valeur && langueDe(this) !== this._options.lang) {
         
        this.disconnectedCallback();
        this.connectedCallback();
      }
    }

    





    _guetterPont() {
      if (this.getAttribute('membre')) this._surMembreBrut(this.getAttribute('membre'));
      if (this.getAttribute('pont')) { this._pontVu(); return; }
      this._minPont = setTimeout(() => {
        if (!this._monte || this.getAttribute('pont') || this._membre) return;
        this._appliquerMembre({ connecte: false, sansPont: true });
      }, ATTENTE_PONT_MS);
    }
    _pontVu() {
      clearTimeout(this._minPont);
      if (this._membre && !this._membre.sansPont) return;
      if (this._membre && this._membre.sansPont) this._membre = null;
      clearTimeout(this._minRelance); clearTimeout(this._minMembre);
      this._minRelance = setTimeout(() => { if (this._monte && !this._membre) this._demander('etat', {}, 0); }, RELANCE_MEMBRE_MS);
      this._minMembre = setTimeout(() => { if (this._monte && !this._membre) this._appliquerMembre({ connecte: true, erreur: 'delai' }); }, ATTENTE_MEMBRE_MS);
    }
    _surMembreBrut(v) {
      let m = null;
      try { m = JSON.parse(v); } catch (e) { m = null; }
      if (!m || typeof m !== 'object') return;
       
      if (m.t && m.t === this._membreT) return;
      this._membreT = m.t;
      clearTimeout(this._minPont); clearTimeout(this._minMembre); clearTimeout(this._minRelance);
      this._appliquerMembre(m);
    }
    _appliquerMembre(m) {
      this._membre = m;
      if (this._api) this._api.surMembre(m);
    }
     
    _redemanderMembre() {
      if (this._membre && this._membre.sansPont) return;
      this._membre = null;
      clearTimeout(this._minMembre);
      this._demander('etat', {}, 0);
      this._minMembre = setTimeout(() => { if (this._monte && !this._membre) this._appliquerMembre({ connecte: true, erreur: 'delai' }); }, ATTENTE_MEMBRE_MS);
    }

    



    _demander(type, detail, delai) {
      const id = this._uid + '-' + (++this._n);
      const d = Object.assign({}, detail || {}, { id });
      const p = delai ? new Promise((ok) => {
        const minuteur = setTimeout(() => { this._attentes.delete(id); ok({ ok: false, raison: 'delai' }); }, delai);
        this._attentes.set(id, { ok, minuteur });
      }) : Promise.resolve(null);
      this.dispatchEvent(new CustomEvent('cp-' + type, { detail: d, bubbles: true, composed: true }));
      return p;
    }
    _surReponse(v) {
      let r = null;
      try { r = JSON.parse(v); } catch (e) { r = null; }
      if (!r || !r.id || !this._attentes || !this._attentes.has(r.id)) return;
      const a = this._attentes.get(r.id);
      this._attentes.delete(r.id);
      clearTimeout(a.minuteur);
      a.ok(r);
    }

    async _charger() {
      const grille = this.querySelector('#cp-grille');
      const t = this._t, demo = this._options.demo, lang = this._options.lang;
      


      const gen = this._gen = (this._gen || 0) + 1;
      const base = this.getAttribute('source') || (demo ? SOURCE_DEMO : SOURCE);
      try {
        const donnees = await lireJson(demo ? base : adressePage(base, 1, lang));
        if (!this._monte || gen !== this._gen) return;
        if (demo && (!donnees || !Array.isArray(donnees.photos) || !donnees.photos.length)) throw new Error('jeu vide');
        if (!demo && (!donnees || typeof donnees !== 'object' || !Array.isArray(donnees.photos))) throw new Error('catalogue illisible');
        const api = monter(this, this._portail, donnees, this._options);
        this._nettoyages.push(api.nettoyer);
        this._api = this._apercu = api;
        if (!demo && this._membre) api.surMembre(this._membre);
        if (!demo) this._pagesSuivantes(base, donnees, gen);
      } catch (e) {
        console.warn('[rdr-concours-photo] ' + (demo ? 'aperçu' : 'catalogue') + ' indisponible', e && e.message);
        if (grille && this._monte && gen === this._gen) {
           
          this.querySelectorAll('.cp-att').forEach(n => n.remove());
          const jour = this.querySelector('#cp-jour');
          if (jour) jour.hidden = true;
          grille.innerHTML = `<div class="cp-vide"><h3>${demo ? t("L'aperçu revient dans un instant") : t('Le challenge revient dans un instant')}</h3>${t("Les photos n'ont pas pu être lues.")} <button class="cp-btn cp-btn--ligne" type="button" data-reessayer>${t('Réessayer')}</button></div>`;
          const b = grille.querySelector('[data-reessayer]');
          if (b) b.onclick = () => { grille.innerHTML = ''; this._charger(); };
        }
      }
    }

    


    async _pagesSuivantes(base, premiere, gen) {
      const pages = Math.min(PAGES_MAX, Math.max(1, parseInt(premiere.pages, 10) || 1));
      for (let k = 2; k <= pages; k++) {
        let d = null;
        try { d = await lireJson(adressePage(base, k, this._options.lang)); }
        catch (e) { console.warn('[rdr-concours-photo] page ' + k + ' du catalogue illisible', e && e.message); break; }
        if (!this._monte || gen !== this._gen || !this._api) return;
        if (d && Array.isArray(d.photos)) this._api.ajouter(d.photos);
      }
      if (this._monte && gen === this._gen && this._api) this._api.pagesFinies();
    }
  }

   
  RdrConcoursPhoto.outils = { preparerPhoto, empreinteDe, distanceEmpreintes, lireImage };

  




  function monter(racine, portail, donnees, options) {
    const t = racine._t;
    const demo = options.demo;
    const loc = options.lang === 'en' ? 'en-GB' : 'fr-FR';
    const nettoyages = [];
    let vivant = true;
    const ecoute = (cible, type, fn, opts) => { cible.addEventListener(type, fn, opts); nettoyages.push(() => cible.removeEventListener(type, fn, opts)); };
    const observer = (o) => { nettoyages.push(() => o.disconnect()); return o; };
    const $ = (id) => document.getElementById(id);
    const nombre = (n) => Number(n || 0).toLocaleString(loc);
     
    const nb = (n, un, plusieurs) => t((options.lang === 'en' ? n === 1 : n <= 1) ? un : plusieurs, { n: nombre(n) });
    const dateCourte = (v) => { const d = new Date(v); return isNaN(d) ? '' : d.toLocaleDateString(loc, { day: 'numeric', month: 'long', timeZone: 'Europe/Paris' }); };
    const dateLongue = (v) => { const d = new Date(v); return isNaN(d) ? '' : d.toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/Paris' }); };
    const mo = (n) => (n / 1048576).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    const pt = (nom) => /\.$/.test(nom) ? '' : '.';
    const aller = (url) => { if (typeof racine._allerVers === 'function') racine._allerVers(url); else location.assign(url); };

    

    const vis = donnees.visuels || {};
    const logo = racine.querySelector('.cp-alpina');
    if (vis.logoMarque && /^https:\/\//.test(vis.logoMarque) && logo) { logo.src = vis.logoMarque; logo.alt = vis.logoMarqueAlt || ''; }
    else { racine.dataset.marque = 'sans'; portail.dataset.marque = 'sans'; }
    const vagues = racine.querySelector('.cp-vagues');
    if (vis.vagues && /^https:\/\//.test(vis.vagues) && vagues) { vagues.src = vis.vagues; racine.style.setProperty('--cp-vagues', `url("${String(vis.vagues).replace(/"/g, '%22')}")`); }
    else if (vagues) vagues.remove();

    


    function lireCfg(d, avant) {
      const c = Object.assign({}, avant);
      if (ETATS.includes(d.etat)) c.etat = d.etat; else if (!c.etat) c.etat = 'eteint';
      ['depotsOuverts', 'votesOuverts', 'depotsMaintenance'].forEach((k) => { if (typeof d[k] === 'boolean') c[k] = d[k]; });
      ['reglementUrl', 'ouvertureLe', 'clotureDepotsLe', 'clotureVotesLe', 'lot'].forEach((k) => { if (d[k] !== undefined) c[k] = d[k] == null ? '' : String(d[k]); });
      if (d.total !== undefined && d.total !== null && d.total !== '' && Number.isFinite(Number(d.total))) c.total = Number(d.total);
      return c;
    }
    const cfg = demo
      ? { etat: 'ouvert', depotsOuverts: true, votesOuverts: true, reglementUrl: '', clotureVotesLe: donnees.cloture || '2026-11-26T23:59:00+01:00' }
      : lireCfg(donnees, {});
    const positif = (v, d) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Number(v) : d);
    const REGLAGES = { poidsEtoile: demo ? 3 : positif(donnees.poidsEtoile, 3), fenetreNouveautes: demo ? 7 : positif(donnees.fenetreNouveautes, 7), bloc: 12, partTete: 4, partNouveautes: 4, partChance: 4 };
    const MAINTENANT = demo ? (Date.parse(donnees.maintenant) || Date.now()) : Date.now();

    

    function graineDuJour() {
      const s = lire(CLE_GRAINE);
      if (s && typeof s.g === 'number' && Date.now() - (s.le || 0) < JOUR) return s.g;
      const g = Math.floor(Math.random() * 4294967295) >>> 0;
      ecrire(CLE_GRAINE, { g, le: Date.now() });
      return g;
    }

    const etat = {
      photos: [], parId: new Map(), ordre: 'decouvrir', fil: [], graine: demo ? 4242 : graineDuJour(), montees: 0, rangees: [],
      connecte: options.etat !== 'visiteur',
      mienne: ['aucune', 'attente', 'ligne', 'refusee'].includes(options.etat) ? options.etat : 'ligne',
      membre: { statut: 'attente', connecte: false },
      coeurs: [], coeursConfirmes: [], etoile: null, masquees: new Set(),
      fen: { ouverte: false, liste: [], i: 0 },
      gl: { ouvert: false, liste: [], i: 0, historique: [] }
    };
    if (demo) {
      const s0 = lire(CLE);
      if (s0) { etat.coeurs = s0.coeurs || []; etat.etoile = s0.etoile || null; etat.masquees = new Set(s0.masquees || []); }
    } else {
      const m0 = lire(CLE_MASQUEES);
      if (Array.isArray(m0)) etat.masquees = new Set(m0.map(String));
    }
    const CLE_GLISSER = demo ? CLE_GL : CLE_GL_REEL;
    const memoriser = () => { if (demo) ecrire(CLE, { coeurs: etat.coeurs, etoile: etat.etoile, masquees: [...etat.masquees] }); else planifierCoeurs(); };

    const src = (p, palier) => `https://static.wixstatic.com/media/${p.f}/v1/fit/w_${palier},h_${palier},q_${palier > 1000 ? 85 : 80},enc_auto/${encodeURIComponent(p.n)}`;
    const srcPour = (p, largeurCase) => src(p, (largeurCase * (window.devicePixelRatio || 1)) > 520 ? 1000 : 600);

     
    function versPhoto(x) {
      if (!x || x.id == null || !ID_PHOTO.test(String(x.id))) return null;
      let f, n, l, h;
      if (demo) { f = String(x.f || ''); n = String(x.n || ''); l = Number(x.l) || 0; h = Number(x.h) || 0; if (!ID_FICHIER.test(f)) return null; }
      else { const im = lireImage(x.img, x.l, x.h); if (!im) return null; f = im.f; n = im.n; l = im.l; h = im.h; }
      const le = typeof x.le === 'number' ? x.le : (Date.parse(x.le) || MAINTENANT);
      const jours = Math.max(1, (MAINTENANT - le) / JOUR);
      const coeurs = Math.max(0, Number(x.coeurs) || 0), etoiles = Math.max(0, Number(x.etoiles) || 0);
      const tend = Number(x.tendance);
      return {
        id: String(x.id), f, n: n || f, l, h, le, jours, coeurs, etoiles,
        auteur: esc(x.auteur || t('Fan anonyme')), legende: esc(x.legende || ''),
        ratio: l > 0 && h > 0 ? l / h : 1.5,
        tendance: (!demo && x.tendance != null && x.tendance !== '' && Number.isFinite(tend)) ? tend : (coeurs + REGLAGES.poidsEtoile * etoiles) / Math.sqrt(jours),
        moi: demo && x.moi === true
      };
    }
    const idJour = demo ? '' : String((donnees.photoDuJour && typeof donnees.photoDuJour === 'object') ? (donnees.photoDuJour.id || '') : (donnees.photoDuJour || ''));
    function integrer(liste) {
      const neuves = [];
      for (const x of liste || []) {
        const p = versPhoto(x);
        if (!p || etat.parId.has(p.id)) continue;
        if (idJour && p.id === idJour) p.jour = true;
        etat.photos.push(p); etat.parId.set(p.id, p); neuves.push(p);
      }
      return neuves;
    }

    


    function recalculerMoi() {
      if (demo) return [];
      const mp = etat.membre.connecte && etat.membre.maPhoto;
      const im = mp && mp.img ? lireImage(mp.img, mp.l, mp.h) : null;
      const changees = [];
      for (const p of etat.photos) {
        const moi = !!(im && p.f === im.f);
        if (p.moi !== moi) { p.moi = moi; changees.push(p.id); }
      }
      return changees;
    }

    const votesPossibles = () => demo
      ? Date.now() <= Date.parse(cfg.clotureVotesLe)
      : (cfg.votesOuverts === true || (cfg.votesOuverts == null && (cfg.etat === 'ouvert' || cfg.etat === 'votes')));
    function lienReglement() {
      const u = String(cfg.reglementUrl || '').trim();
      if (/^\/(?!\/)/.test(u)) return options.lang === 'en' && !/^\/en(\/|$|#)/.test(u) ? '/en' + u : u;
      return /^https:\/\//.test(u) ? u : '';
    }
    const depotPossible = () => cfg.etat === 'ouvert' && cfg.depotsOuverts !== false && !!lienReglement();

    



    const RAISONS = {
      delai: 'Le serveur ne répond pas. Réessayez dans un instant.',
      indisponible: 'Le serveur ne répond pas. Réessayez dans un instant.',
      erreur_reseau: 'Connexion interrompue. Réessayez dans un instant.',
      reseau: 'Connexion interrompue. Réessayez dans un instant.',
      non_connecte: 'Votre session a expiré. Reconnectez-vous, puis réessayez.',
      eteint: "Le challenge n'est pas ouvert.",
      reglement: 'Le dépôt ouvre avec la publication du règlement.',
      depots_clos: 'Les dépôts sont fermés.',
      en_attente: 'Vous avez déjà une photo en lice.',
      validee: 'Vous avez déjà une photo en lice.',
      retiree: "Votre photo a été retirée par l'équipe, le dépôt est clos pour ce compte.",
      refus_max: "Après deux refus, il n'est plus possible d'en déposer une autre.",
      trop_tot: 'Un dépôt toutes les dix minutes au plus. Réessayez un peu plus tard.',
      trop: 'Un dépôt toutes les dix minutes au plus. Réessayez un peu plus tard.',
      cases: 'Cochez les deux cases pour envoyer votre photo.',
      type: "Cette photo n'a pas été acceptée. Essayez-en une autre.",
      taille: "Cette photo n'a pas été acceptée. Essayez-en une autre.",
      fichier: "Cette photo n'a pas été acceptée. Essayez-en une autre.",
      fichier_refuse: "Cette photo n'a pas été acceptée. Essayez-en une autre.",
      fichier_en_cours: 'Votre photo est encore en traitement. Réessayez dans une minute.',
      la_tienne: 'On ne vote pas pour sa propre photo',
      photo: "Cette photo n'est plus en ligne.",
      maintenance: "Une petite maintenance du dépôt des photos est en cours. Désolé pour le dérangement. N'hésitez pas à repasser déposer votre photo un peu plus tard."
    };
    const RAISONS_GESTE = {
      vote: { avant: 'Les votes ne sont pas encore ouverts', votes_clos: 'Les votes sont clos', repli: "Votre étoile n'a pas pu être posée. Réessayez dans un instant." },
      garder: { avant: 'Les votes ne sont pas encore ouverts', votes_clos: 'Les cœurs et les votes sont clos.', repli: "Votre sélection n'a pas pu être enregistrée. Réessayez dans un instant." },
      depot: { avant: "Le dépôt n'est pas encore ouvert.", repli: "Le dépôt n'a pas abouti. Réessayez dans un instant." },
      raison: { avant: "Le dépôt n'est pas encore ouvert.", repli: '' }
    };
    function messageRaison(code, geste) {
      const c = String(code || '').toLowerCase();
      const g = RAISONS_GESTE[geste] || RAISONS_GESTE.depot;
      const cle = g[c] || RAISONS[c] || g.repli;
      return cle ? t(cle) : '';
    }
    function messagePhoto(code) {
      if (code === 'heic') return t("Ce navigateur ne lit pas les photos HEIC. Sur iPhone, choisissez-la depuis la photothèque (elle part alors en JPEG), ou déposez-la depuis Safari.");
      if (code === 'type') return t("Ce fichier n'est pas une photo.");
      if (code === 'petite') return t('Cette photo est trop petite (au moins 600 px de large ou de haut).');
      if (code === 'lourde') return t('Cette photo reste trop lourde après réduction. Essayez-en une autre.');
      if (code === 'entree') return t('Cette photo est trop lourde (40 Mo au plus).');
      return t('Cette photo est illisible. Essayez-en une autre (JPG ou PNG).');
    }

    





    function dessinerMur() {
      const mur = $('cp-mur');
      const tous = etat.photos.filter(p => !p.moi);
      if (!demo && tous.length < 12) { mur.innerHTML = ''; return; }
      const n = window.innerWidth < 900 ? 3 : 4;
      const choix = tous.slice().sort((a, b) => b.coeurs - a.coeurs).slice(0, n * 6);
      const cols = Array.from({ length: n }, () => []);
      choix.forEach((p, i) => cols[i % n].push(p));
      mur.innerHTML = cols.map(c => {
        const imgs = c.map(p => `<img src="${src(p, 360)}" alt="" width="360" height="${Math.round(360 / p.ratio)}" loading="lazy" decoding="async" fetchpriority="low">`).join('');
        return `<div class="cp-mur-col">${imgs}${imgs}</div>`;
      }).join('');
    }

     
    observer(new IntersectionObserver((e) => { $('cp-btn-glisser').dataset.cache = e[0].isIntersecting ? 1 : 0; })).observe($('cp-gp'));

    

    const eligibles = () => etat.photos.filter(p => !p.moi && !etat.masquees.has(p.id));
    function dessinerPile() {
      const tous = etat.photos.filter(p => !p.moi).sort((a, b) => b.coeurs - a.coeurs);
      const larges = tous.filter(p => p.ratio > 0.6 && p.ratio < 1.6);
      let trois = larges.slice(3, 6);
      if (trois.length < 3) trois = larges.slice(0, 3);
      if (trois.length < 3) trois = tous.slice(0, 3);
      const pile = trois.map(p => `<span><img src="${src(p, 360)}" alt="" loading="lazy" decoding="async"></span>`).join('');
      document.querySelectorAll('.cp-gp-pile').forEach(n => { n.innerHTML = pile; });
      const neuves = etat.photos.filter(p => p.jours <= 1).length;    
      $('cp-onglet-neuves').textContent = neuves ? '+' + neuves : '';
      const glisser = eligibles().length >= 3 ? 'oui' : 'non';
      racine.dataset.glisser = glisser; portail.dataset.glisser = glisser;
    }
    

    function poserVue() {
      const v = etat.photos.length ? 'galerie' : 'attente';
      racine.dataset.vue = v; portail.dataset.vue = v;
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

    const score = (p) => p.coeurs + REGLAGES.poidsEtoile * p.etoiles;
    function ordonnerListe(photos, graine) {
      if (etat.ordre === 'dernieres') return photos.slice().sort((a, b) => b.le - a.le).map(p => p.id);
      if (etat.ordre === 'aimees') return photos.slice().sort((a, b) => score(b) - score(a) || b.le - a.le).map(p => p.id);
      return construireFil(photos, REGLAGES, graine);
    }
    const ordonner = () => ordonnerListe(etat.photos.filter(p => !etat.masquees.has(p.id)), etat.graine);

     
    const grille = $('cp-grille');
    ecoute(portail, 'click', (e) => {
      if (!e.target.closest('[data-reglement]')) return;
      e.preventDefault();
      const u = demo ? '' : lienReglement();
      if (u) window.open(u, '_blank', 'noopener');
      else toast(t("Le règlement arrive avec l'ouverture du challenge"));
    });
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
      if (p.jour) m.push(`<span class="cp-marque cp-marque--jour">${ICO.soleil} ${t('Photo du jour')}</span>`);
      if (p.moi) m.push(`<span class="cp-marque cp-marque--moi">${t('Ma photo')}</span>`);
      else if (p.jours <= 2) m.push(`<span class="cp-marque cp-marque--new">${t('Nouvelle')}</span>`);
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
      return `<figure class="cp-case${p.moi ? ' est-moi' : ''}" data-id="${p.id}" style="width:${w}px;height:${hh}px" tabindex="0" role="button" aria-label="${p.auteur}${p.legende ? ', ' + p.legende : ''}">
        <img data-src="${srcPour(p, w)}" alt="" width="${w}" height="${hh}" decoding="async">
        <span class="cp-marques">${marques(p)}</span>
        ${poses(p)}
        <span class="cp-voile"><b>${p.auteur}</b><span class="cp-compte"><span>${ICO.coeur} ${p.coeurs}</span><span>${ICO.etoile} ${p.etoiles}</span></span></span>
        ${p.moi ? '' : `<span class="cp-acts">
          <button class="cp-ico cp-ico--coeur" type="button" data-act="coeur" data-on="${etat.coeurs.includes(p.id) ? 1 : 0}" aria-label="${t('Garder')}">${ICO.coeur}</button>
          <button class="cp-ico cp-ico--etoile" type="button" data-act="etoile" data-on="${etat.etoile === p.id ? 1 : 0}" aria-label="${t('Mon étoile')}">${ICO.etoile}</button>
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

    

    function videHtml() {
      if (!demo && (cfg.etat === 'eteint' || cfg.etat === 'avant')) {
        const titre = cfg.etat === 'avant' && cfg.ouvertureLe ? t('Ouverture le {date}', { date: dateLongue(cfg.ouvertureLe) }) : t('Le Challenge photo arrive bientôt');
        const texte = t("Une photo par membre de l'Espace Rhum, des cœurs pour garder celles qu'on aime, et une étoile pour élire la plus belle. Les photos des participants s'afficheront ici.")
          + (cfg.etat === 'avant' && cfg.ouvertureLe ? ' ' + t('Préparez votre plus belle photo de la Route du Rhum, les dépôts ouvrent ce jour-là.') : '');
        return `<div class="cp-vide"><h3>${titre}</h3><p>${texte}</p></div>`;
      }
      const invite = demo || (depotPossible() && (!etat.membre.connecte || etat.membre.peutDeposer));
      return `<div class="cp-vide"><h3>${t('Les premières photos arrivent')}</h3><p>${invite ? t("Déposez la vôtre, elle sera relue et mise en ligne par l'équipe.") : t("Elles seront en ligne dès leur validation par l'équipe.")}</p></div>`;
    }

    function dessinerGrille() {
      etat.fil = ordonner();
      etat.rangees = calculerRangees(etat.fil);
      etat.montees = 0;
      grille.innerHTML = '';
      grille.removeAttribute('aria-busy');
      if (!etat.fil.length) { grille.innerHTML = videHtml(); $('cp-fin').hidden = true; return; }
      monterRangees(8);
      sentinelle.disconnect(); sentinelle.observe($('cp-sentinelle'));
    }

    



    function prolonger(neuves) {
      const visibles = neuves.filter(p => !etat.masquees.has(p.id));
      if (!visibles.length) return;
      const ids = ordonnerListe(visibles, (etat.graine + etat.photos.length) >>> 0);
      const completes = etat.rangees.filter(r => !r.derniere).length;
      const garder = Math.min(etat.montees, completes);
      const avant = etat.montees;
      etat.fil = etat.fil.concat(ids);
      etat.rangees = calculerRangees(etat.fil);
      const rangs = grille.querySelectorAll('.cp-rangee');
      for (let i = garder; i < rangs.length; i++) rangs[i].remove();
      etat.montees = garder;
      monterRangees(Math.max(2, avant - garder));
      sentinelle.disconnect(); sentinelle.observe($('cp-sentinelle'));
    }

    function rafraichirCase(id) {
      if (!id || !ID_PHOTO.test(id)) return;
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
     
    function refaireCase(id) {
      document.querySelectorAll(`.cp-case[data-id="${id}"]`).forEach(fig => {
        const w = parseFloat(fig.style.width) || fig.offsetWidth, h = parseFloat(fig.style.height) || fig.offsetHeight;
        fig.insertAdjacentHTML('afterend', htmlCase({ id, w }, h));
        const neuve = fig.nextElementSibling;
        fig.remove();
        neuve.querySelectorAll('img[data-src]:not([src])').forEach(img => observateurImages.observe(img));
      });
    }
    function redessinerGestes(ids) {
      if (!vivant) return;
      new Set(ids.filter(Boolean)).forEach(rafraichirCase);
      dessinerTete(); dessinerTiroir(); if (etat.fen.ouverte) dessinerPanneau();
      majGlEtoile();
    }

     
     
    function toast(txt, sous) {
      if (!txt) return;
      const tt = $('cp-toast'); tt.textContent = txt;
      if (sous) { const s = document.createElement('small'); s.textContent = sous; tt.appendChild(s); }
      tt.dataset.on = 1; clearTimeout(toast.t); toast.t = setTimeout(() => { tt.dataset.on = 0; }, sous ? 3800 : Math.max(2600, Math.min(6500, txt.length * 45)));
    }
    const RAPPEL_ETOILE = "Pensez à poser votre étoile sur votre préférée, c'est elle qui vote.";
    function ouvrirConnexion() { $('cp-connexion').dataset.ouverte = 1; }
    function exigerCompte() {
      if (demo) { if (etat.connecte) return true; ouvrirConnexion(); return false; }
      const m = etat.membre;
      if (m.statut === 'attente') { toast(t('Un instant, votre Espace Rhum se charge')); return false; }
      if (!m.connecte) { ouvrirConnexion(); return false; }
      if (m.statut === 'erreur') { toast(t('Votre Espace Rhum ne répond pas. Réessayez dans un instant.')); racine._redemanderMembre(); return false; }
      return true;
    }
    const pleine = () => !demo && (etat.coeurs.length >= MAX_COEURS || !votesPossibles());
    const MSG_PLEINE = () => (!demo && !votesPossibles()) ? messageRaison('votes_clos', 'garder') : t('Quarante photos au plus dans votre sélection. Retirez-en une pour en garder une autre.');

    


    const coeurs = { minuteur: 0, enCours: false };
    function planifierCoeurs() { clearTimeout(coeurs.minuteur); coeurs.minuteur = setTimeout(envoyerCoeurs, RAFALE_MS); }
    const memeListe = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
    async function envoyerCoeurs() {
      clearTimeout(coeurs.minuteur); coeurs.minuteur = 0;
      if (demo || coeurs.enCours || memeListe(etat.coeurs, etat.coeursConfirmes)) return;
      coeurs.enCours = true;
      const envoyes = etat.coeurs.slice(0, MAX_COEURS);
      const r = await racine._demander('garder', { ids: envoyes }, 15000);
      coeurs.enCours = false;
      if (!vivant) return;
      if (r && r.ok) {
        const confirmes = Array.isArray(r.mesCoeurs) ? r.mesCoeurs.map(String) : envoyes;
        etat.coeursConfirmes = confirmes;
        if (!memeListe(etat.coeurs, envoyes)) { planifierCoeurs(); return; }
        if (!memeListe(confirmes, etat.coeurs)) { const avant = etat.coeurs; etat.coeurs = confirmes.slice(); redessinerGestes([...avant, ...confirmes]); }
      } else {
        const avant = etat.coeurs;
        etat.coeurs = etat.coeursConfirmes.slice();
        redessinerGestes([...avant, ...etat.coeurs]);
        toast(messageRaison(r && (r.raison || r.code), 'garder'));
      }
    }
    

    function vider() { if (!demo && coeurs.minuteur) envoyerCoeurs(); }
    ecoute(document, 'visibilitychange', () => { if (document.visibilityState === 'hidden') vider(); });
    ecoute(window, 'pagehide', vider);

    function basculerCoeur(id) {
      if (!exigerCompte()) return;
      const p = etat.parId.get(id);
      if (!p) return;
      if (p.moi) { toast(t("C'est votre photo")); return; }
      if (!demo && !votesPossibles()) { toast(messageRaison(cfg.etat === 'avant' || cfg.etat === 'eteint' ? 'avant' : 'votes_clos', 'garder')); return; }
      const i = etat.coeurs.indexOf(id);
      if (i >= 0) { etat.coeurs.splice(i, 1); toast(t('Retirée de votre sélection')); }
      else {
        if (pleine()) { toast(MSG_PLEINE()); return; }
        etat.coeurs.push(id);
        toast(nb(etat.coeurs.length, 'Gardée, {n} photo dans votre sélection', 'Gardée, {n} photos dans votre sélection'), !etat.etoile && votesPossibles() ? t(RAPPEL_ETOILE) : '');
      }
      memoriser(); redessinerGestes([id]);
    }

    

    const vote = { seq: 0, enCours: false };
    function poserEtoile(id) {
      if (!exigerCompte()) return;
      const p = etat.parId.get(id);
      if (!p) return;
      if (p.moi) { toast(t('On ne vote pas pour sa propre photo')); return; }
      if (!votesPossibles()) { toast(!demo && (cfg.etat === 'avant' || cfg.etat === 'eteint') ? t('Les votes ne sont pas encore ouverts') : t('Les votes sont clos')); return; }
      const avant = etat.etoile;
      etat.etoile = etat.etoile === id ? null : id;
      if (etat.etoile && !etat.coeurs.includes(id) && !pleine()) { etat.coeurs.push(id); memoriser(); }
      else if (demo) memoriser();
      redessinerGestes([avant, id]);
      toast(etat.etoile ? t('Votre étoile est sur la photo de {a}', { a: p.auteur }) : t('Étoile retirée'));
      if (!demo) envoyerVote();
    }
    async function envoyerVote() {
      const seq = ++vote.seq;
      vote.enCours = true;
      const r = await racine._demander('voter', { photoId: etat.etoile }, 15000);
      if (seq !== vote.seq || !vivant) return;
      vote.enCours = false;
      const avant = etat.etoile;
      if (r && r.ok) {
        etat.membre.monVote = r.monVote != null && r.monVote !== '' ? String(r.monVote) : null;
        if (etat.membre.monVote !== etat.etoile) { etat.etoile = etat.membre.monVote; redessinerGestes([avant, etat.etoile]); }
      } else {
        etat.etoile = etat.membre.monVote != null ? etat.membre.monVote : null;
        redessinerGestes([avant, etat.etoile]);
        toast(messageRaison(r && (r.raison || r.code), 'vote'));
      }
    }
    function masquer(id) {
      etat.masquees.add(id);
      if (demo) memoriser(); else ecrire(CLE_MASQUEES, [...etat.masquees].slice(-500));
      document.querySelectorAll(`.cp-case[data-id="${id}"]`).forEach(f => f.classList.add('est-masquee'));
      toast(t('Masquée, elle ne réapparaîtra pas sur cet appareil'));
      if (etat.fen.ouverte) { etat.fen.liste = etat.fen.liste.filter(x => x !== id); if (!etat.fen.liste.length) fermerFen(); else { etat.fen.i = Math.min(etat.fen.i, etat.fen.liste.length - 1); dessinerFen(); } }
    }
     
    function partager(id) {
      if (demo) { toast(t('Lien copié (maquette)')); return; }
      const url = location.origin + location.pathname + '?photo=' + encodeURIComponent(id);
      if (navigator.share && window.matchMedia && matchMedia('(pointer:coarse)').matches) { navigator.share({ url }).catch(() => {   }); return; }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(() => toast(t('Lien copié')), () => toast(url));
      else toast(url);
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

     
    function dessinerChiffres() {
      const total = !demo && Number.isFinite(cfg.total) ? Math.max(cfg.total, etat.photos.length) : etat.photos.length;
      const sommeCoeurs = etat.photos.reduce((s, p) => s + p.coeurs, 0);
      const li = [];
      if (demo) {
        li.push(nb(total, '<b>{n}</b> photo en ligne', '<b>{n}</b> photos en ligne'), nb(sommeCoeurs, '<b>{n}</b> cœur posé', '<b>{n}</b> cœurs posés'), t("Votes jusqu'au <b>{date}</b>", { date: dateCourte(cfg.clotureVotesLe) }));
      } else if (cfg.etat === 'avant') {
        if (cfg.ouvertureLe) li.push(t('Ouverture le <b>{date}</b>', { date: dateCourte(cfg.ouvertureLe) }));
      } else if (cfg.etat !== 'eteint') {
        li.push(nb(total, '<b>{n}</b> photo en ligne', '<b>{n}</b> photos en ligne'));
        if (sommeCoeurs > 0) li.push(nb(sommeCoeurs, '<b>{n}</b> cœur posé', '<b>{n}</b> cœurs posés'));
        if (cfg.etat === 'ouvert' && cfg.clotureDepotsLe) li.push(t("Dépôts jusqu'au <b>{date}</b>", { date: dateCourte(cfg.clotureDepotsLe) }));
        if (cfg.etat === 'clos') li.push(t('Votes clos'));
        else if (cfg.clotureVotesLe) li.push(t("Votes jusqu'au <b>{date}</b>", { date: dateCourte(cfg.clotureVotesLe) }));
      }
      if (!demo && cfg.lot && cfg.etat !== 'eteint') li.push(t('<b>{lot}</b> à gagner', { lot: esc(cfg.lot) }));
      $('cp-chiffres').innerHTML = li.map(x => `<li>${x}</li>`).join('');
    }

    

    const boutonSelection = () => { const n = etat.coeurs.length; return `<button class="cp-btn cp-btn--ligne${n ? ' cp-btn--sel' : ''}" type="button" data-ouvrir-tiroir>${n ? ICO.coeur : ICO.coeurLigne} ${t('Ma sélection')} <span class="cp-pastille">${n}</span></button>`; };
     
    const dateVotes = () => (cfg.clotureVotesLe ? dateCourte(cfg.clotureVotesLe) : '');
    const phraseDeplacer = () => (dateVotes()
      ? t("Une autre vous plaît encore plus ? Vous pouvez déplacer votre étoile jusqu'au <strong>{date}</strong>.", { date: dateVotes() })
      : t("Une autre vous plaît encore plus ? Vous pouvez déplacer votre étoile jusqu'à la clôture des votes."));
    function ligneEtoile(clos) {
      const p = etat.etoile && etat.parId.get(etat.etoile);
      if (p) return t(clos ? 'Votre étoile était sur la photo de <b>{a}</b>{p}' : 'Votre étoile est sur la photo de <b>{a}</b>{p}', { a: p.auteur, p: pt(p.auteur) });
      if (etat.etoile && !clos) return t('Votre étoile est posée.');
      return clos ? t('Les votes sont clos.') : t("Vous n'avez pas encore posé votre étoile.");
    }
    





    function selectionEtEtoile(clos) {
      const e = blocEtoile(clos);
      return /^<div class="cp-etat">/.test(e) ? boutonSelection() + e : e + boutonSelection();
    }
    function blocEtoile(clos) {
      if (clos || !votesPossibles()) return `<div class="cp-etat">${ligneEtoile(true)}</div>`;
      const p = etat.etoile && etat.parId.get(etat.etoile);
      if (p) {
        return `<div class="cp-pref">
          <div class="cp-pref-tete"><button class="cp-pref-vignette" type="button" data-voir-etoile aria-label="${t('Voir ma préférée en grand')}"><img src="${src(p, 600)}" alt=""><i>${ICO.etoile}</i></button>
          <div class="cp-pref-txt"><b>${t('Votre préférée')}</b><small>${t('Photo de {a}', { a: p.auteur })}</small>${t("Votre étoile est votre seul vote, c'est elle qui peut faire gagner cette photo.")}</div></div>
          <p>${phraseDeplacer()}</p>
          <button class="cp-pref-changer" type="button" data-ouvrir-tiroir>${t('Changer de préférée')}</button>
        </div>`;
      }
      if (etat.etoile) return `<div class="cp-etat">${t('Votre étoile est posée.')}</div>`;
      if (etat.coeurs.length) {
        return `<div class="cp-rappel" role="note">
          <p class="cp-rappel-t"><i>${ICO.etoile}</i>${t('Votre sélection est prête')}</p>
          <p>${t("N'oubliez pas de poser votre étoile sur votre préférée. Les cœurs forment votre sélection, seule l'étoile vote pour la meilleure photo.")}</p>
          <button class="cp-btn cp-btn--or" type="button" data-choisir-etoile>${ICO.etoile} ${t('Choisir ma préférée')}</button>
        </div>`;
      }
      return `<div class="cp-etat">${t("Vous n'avez pas encore posé votre étoile.")}</div>`;
    }

    function actionsDemo() {
      if (!etat.connecte) return `<button class="cp-btn cp-btn--or" type="button" data-connexion>${ICO.plus} ${t('Déposer ma photo')}</button><div class="cp-etat">${t("Réservé aux membres de l'Espace Rhum. Tout le monde peut regarder, et pour garder et voter, il suffit de <b>créer son Espace</b>.")}</div>`;
      const mienne = etat.photos.find(p => p.moi);
      let bloc = '';
      if (etat.mienne === 'aucune' || !mienne) bloc = `<button class="cp-btn cp-btn--or" type="button" data-deposer>${ICO.plus} ${t('Déposer ma photo')}</button>`;
      else if (etat.mienne === 'attente') bloc = `<div class="cp-mienne"><img src="${src(mienne, 600)}" alt=""><div class="cp-mienne-t"><b>${t('Ma photo')}</b>${t("Relue par l'équipe, en général sous 48 h.")}<span class="cp-pill cp-pill--attente">${t('En attente')}</span></div></div>`;
      else if (etat.mienne === 'ligne') bloc = `<div class="cp-mienne"><img src="${src(mienne, 600)}" alt=""><div class="cp-mienne-t"><b>${t('Ma photo')}</b>${t('<i>{c}</i> et <i>{e}</i> cette nuit.', { c: nb(mienne.coeurs, '{n} cœur', '{n} cœurs'), e: nb(mienne.etoiles, '{n} étoile', '{n} étoiles') })}<span class="cp-pill cp-pill--ligne">${t('En ligne')}</span></div></div>`;
      else bloc = `<div class="cp-mienne"><img src="${src(mienne, 600)}" alt="" style="filter:grayscale(1);opacity:.6"><div class="cp-mienne-t"><b>${t('Ma photo')}</b>${t("Refusée pour « visage d'un tiers reconnaissable ». Vous pouvez en déposer une autre.")}<span class="cp-pill cp-pill--refus">${t('Refusée')}</span></div></div><button class="cp-btn cp-btn--or" type="button" data-deposer>${ICO.plus} ${t('Déposer une autre photo')}</button>`;
      return bloc + selectionEtEtoile(false);
    }

    


    function blocMaPhoto(mp, m) {
      const im = mp.img ? lireImage(mp.img, mp.l, mp.h) : null;
      const eteinte = mp.statut === 'refusee' || mp.statut === 'retiree';
      const vignette = im ? `<img src="${src(im, 600)}" alt=""${eteinte ? ' style="filter:grayscale(1);opacity:.6"' : ''}>` : '<span class="cp-mienne-ph"></span>';
      const motif = mp.motif ? esc(mp.motif) : '';
      let texte, pill;
      if (mp.statut === 'validee') {
        texte = Number.isFinite(Number(mp.coeurs)) && mp.coeurs !== null && mp.coeurs !== ''
          ? t('<i>{c}</i> et <i>{e}</i> cette nuit.', { c: nb(Number(mp.coeurs) || 0, '{n} cœur', '{n} cœurs'), e: nb(Number(mp.etoiles) || 0, '{n} étoile', '{n} étoiles') })
          : t('Comptée chaque nuit, avec ses cœurs et ses étoiles.');
        pill = `<span class="cp-pill cp-pill--ligne">${t('En ligne')}</span>`;
      } else if (mp.statut === 'refusee') {
        texte = (motif ? t('Refusée pour « {motif} ».', { motif }) : t("Refusée par l'équipe."))
          + (m.peutDeposer && depotPossible() ? ' ' + t('Vous pouvez en déposer une autre.') : (Number(mp.refus) >= 2 ? ' ' + t("Après deux refus, il n'est plus possible d'en déposer une autre.") : ''));
        pill = `<span class="cp-pill cp-pill--refus">${t('Refusée')}</span>`;
      } else if (mp.statut === 'retiree') {
        texte = motif ? t("Retirée par l'équipe pour « {motif} ».", { motif }) : t("Retirée par l'équipe.");
        pill = `<span class="cp-pill cp-pill--refus">${t('Retirée')}</span>`;
      } else {
        texte = t("Relue par l'équipe avant sa mise en ligne. Vous serez prévenu dans votre Espace Rhum.");
        pill = `<span class="cp-pill cp-pill--attente">${t('En attente')}</span>`;
      }
      return `<div class="cp-mienne">${vignette}<div class="cp-mienne-t"><b>${t('Ma photo')}</b>${texte}${pill}</div></div>`;
    }
    



    const enMaintenance = () => !demo && cfg.depotsMaintenance === true;
    const blocMaintenance = () => `<div class="cp-maintenance" role="status"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg></i><p>${t(RAISONS.maintenance)}</p></div>`;
    function raisonDepot() {
      if (cfg.etat === 'votes' || cfg.etat === 'clos' || cfg.depotsOuverts === false) return t('Les dépôts sont clos.');
      if (!lienReglement()) return t('Le dépôt des photos ouvre avec la publication du règlement.');
      return messageRaison(etat.membre.raisonPasDeposer, 'raison');
    }
    function actionsReel() {
      const m = etat.membre;
      const r = lienReglement();
      const lienR = r ? `<a class="cp-reglement" href="${esc(r)}" target="_blank" rel="noopener">${t('Règlement du challenge')}</a>` : '';
      const a = [];
      if (cfg.etat === 'eteint' || cfg.etat === 'avant') {
        const quand = cfg.etat === 'avant' && cfg.ouvertureLe ? t('Ouverture le {date}.', { date: dateLongue(cfg.ouvertureLe) }) : t('Ouverture très bientôt.');
        const texte = m.connecte ? t('Vous pourrez déposer votre photo ici, garder vos coups de cœur et poser votre étoile.') : t("Le dépôt et les votes sont réservés aux membres de l'Espace Rhum. Créez le vôtre pour être prêt le jour de l'ouverture.");
        a.push(`<div class="cp-annonce"><span class="cp-pill cp-pill--bientot">${t('Bientôt')}</span><b>${quand}</b>${texte}</div>`);
        if (!m.connecte) a.push(`<button class="cp-btn cp-btn--or" type="button" data-connexion="signup">${ICO.plus} ${t('Créer mon Espace')}</button>`);
        return a.join('') + lienR;
      }
      if (m.connecte && m.statut === 'erreur') {
        return `<div class="cp-etat">${t("Votre participation n'a pas pu être lue.")}</div><button class="cp-btn cp-btn--ligne" type="button" data-reessayer-membre>${t('Réessayer')}</button>${lienR}`;
      }
      if (!m.connecte) {
        let texte;
        if (cfg.etat === 'clos') texte = t('Les votes sont clos. Merci à tous les participants.');
        else if (cfg.etat === 'votes' || cfg.depotsOuverts === false) texte = cfg.clotureVotesLe ? t("Les dépôts sont clos. Les votes continuent jusqu'au {date}, réservés aux membres de l'Espace Rhum.", { date: dateCourte(cfg.clotureVotesLe) }) : t("Les dépôts sont clos. Les votes continuent, réservés aux membres de l'Espace Rhum.");
        else if (depotPossible()) texte = t("Réservé aux membres de l'Espace Rhum. Tout le monde peut regarder, et pour garder et voter, il suffit de <b>créer son Espace</b>.");
        else texte = t("Le dépôt des photos ouvre avec la publication du règlement. Tout le monde peut regarder, et pour garder et voter, il suffit de <b>créer son Espace</b>.");
        if (depotPossible()) a.push(`<button class="cp-btn cp-btn--or" type="button" data-connexion="signup">${ICO.plus} ${t('Déposer ma photo')}</button>`);
        if (depotPossible() && enMaintenance()) a.push(blocMaintenance());
        else if (cfg.etat !== 'clos') a.push(`<button class="cp-btn cp-btn--or" type="button" data-connexion="signup">${ICO.plus} ${t('Créer mon Espace')}</button>`);
        a.push(`<div class="cp-etat">${texte}</div>`);
        return a.join('') + lienR;
      }
      if (m.maPhoto) a.push(blocMaPhoto(m.maPhoto, m));
      const maintenance = depotPossible() && m.raisonPasDeposer === 'maintenance';
      if (depotPossible() && (m.peutDeposer || maintenance)) a.push(`<button class="cp-btn cp-btn--or" type="button" data-deposer>${ICO.plus} ${m.maPhoto ? t('Déposer une autre photo') : t('Déposer ma photo')}</button>`);
      if (maintenance) a.push(blocMaintenance());
      else if (!(depotPossible() && m.peutDeposer) && !m.maPhoto) { const raison = raisonDepot(); if (raison) a.push(`<div class="cp-etat">${raison}</div>`); }
      if (etat.photos.length) {
        a.push(selectionEtEtoile(cfg.etat === 'clos' || !votesPossibles()));
      }
      return a.join('') + lienR;
    }
    function dessinerActions() {
      const a = $('cp-actions');
      if (!demo && etat.membre.statut === 'attente') {
        if (!a.querySelector('.cp-att')) a.innerHTML = '<div class="cp-att cp-att--mienne"></div><div class="cp-att cp-att--bouton"></div><div class="cp-att cp-att--ligne"></div>';
        return;
      }
      a.innerHTML = demo ? actionsDemo() : actionsReel();
    }
    function dessinerTete() { if (vivant) { dessinerChiffres(); dessinerActions(); } }
    $('cp-actions').addEventListener('click', (e) => {
      if (e.target.closest('[data-ouvrir-tiroir], [data-choisir-etoile]')) { if (exigerCompte()) ouvrirTiroir(); }
      else if (e.target.closest('[data-voir-etoile]')) { if (etat.etoile) ouvrirFen(etat.coeurs.includes(etat.etoile) ? etat.coeurs.slice().reverse() : [etat.etoile], etat.etoile); }
      else if (e.target.closest('[data-connexion]')) ouvrirConnexion();
      else if (e.target.closest('[data-deposer]')) ouvrirDepot();
      else if (e.target.closest('[data-reessayer-membre]')) { etat.membre = { statut: 'attente', connecte: true }; dessinerActions(); racine._redemanderMembre(); }
    });

     
    function dessinerJour() {
      const p = etat.photos.find(x => x.jour);
      const s = $('cp-jour');
      s.classList.remove('cp-jour--attente'); s.removeAttribute('aria-busy');
      if (!p || etat.ordre !== 'decouvrir') { s.hidden = true; return; }
      s.hidden = false;
      s.innerHTML = `<div class="cp-jour-img"><img src="${src(p, 1000)}" alt=""></div>
        <div class="cp-jour-txt"><p class="cp-sur">${ICO.soleil} ${t('La photo du jour')}</p><h2>${p.legende || t("Sans légende, et c'est très bien")}</h2>
        <p class="cp-aut">${t('par <b>{a}</b>, mise en ligne le {date}', { a: p.auteur, date: dateCourte(p.le) })}</p>
        <p>${t('Chaque nuit, une photo jamais mise en avant prend cette place pendant vingt-quatre heures. Tout le monde y passe, quel que soit son nombre de cœurs.')}</p>
        <div class="cp-jour-acts"><button class="cp-btn cp-btn--or" type="button" data-jour-voir>${t('Voir en grand')}</button>${p.moi ? '' : `<button class="cp-btn cp-btn--ligne" type="button" data-jour-coeur>${ICO.coeurLigne} ${t('Garder')}</button>`}</div></div>`;
      s.querySelector('[data-jour-voir]').onclick = () => ouvrirFen(etat.fil, p.id);
      const bc = s.querySelector('[data-jour-coeur]');
      if (bc) bc.onclick = () => basculerCoeur(p.id);
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
      etat.fen.liste = liste.filter(x => !etat.masquees.has(x) && etat.parId.has(x));
      if (!etat.fen.liste.length) return;
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
      if (!p) return;
      const c = etat.coeurs.includes(id), e = etat.etoile === id, vp = votesPossibles();
      $('cp-fen-panneau').innerHTML = `
        <div class="cp-fen-aut">${t('Photo de<b>{a}</b>', { a: p.auteur })}</div>
        <p class="cp-fen-leg">${p.legende || ''}</p>
        <div class="cp-fen-date">${t('Mise en ligne le {date}', { date: dateCourte(p.le) })}${p.jours <= 2 ? ` · <span style="color:var(--teal);font-weight:700">${t('Nouvelle')}</span>` : ''}</div>
        <div class="cp-fen-comptes"><span>${ICO.coeur} ${nb(p.coeurs, '<b>{n}</b> cœur', '<b>{n}</b> cœurs')}</span><span>${ICO.etoile} ${nb(p.etoiles, '<b>{n}</b> étoile', '<b>{n}</b> étoiles')}</span></div>
        <div class="cp-fen-note">${t('Comptés cette nuit. Votre geste sera dans le compte de demain.')}</div>
        <div class="cp-fen-acts">
          ${p.moi ? `<div class="cp-fen-note">${t("C'est votre photo. On ne vote pas pour soi, mais vous pouvez la partager.")}</div>` : `
          <button class="cp-act cp-act--coeur" type="button" data-fen="coeur" data-on="${c ? 1 : 0}">${c ? ICO.coeur : ICO.coeurLigne}<span>${c ? t('Dans ma sélection') : t('Garder')}<small>${c ? t('Retirer le cœur') : t("Jusqu'à quarante, pour choisir ensuite")}</small></span></button>
          <button class="cp-act cp-act--etoile" type="button" data-fen="etoile" data-on="${e ? 1 : 0}"${vp ? '' : ' disabled'}>${e ? ICO.etoile : ICO.etoileLigne}<span>${e ? t('Mon étoile est ici') : t('Poser mon étoile')}<small>${!vp ? t('Les votes sont clos') : e ? t('Retirer mon vote') : dateVotes() ? t("Votre seul vote, déplaçable jusqu'au {date}", { date: dateVotes() }) : t("Votre seul vote, déplaçable jusqu'à la clôture")}</small></span></button>`}
          <button class="cp-act cp-act--sobre" type="button" data-fen="partage">${ICO.partage}<span>${t('Partager')}<small>${t('Le lien de cette photo')}</small></span></button>
          ${p.moi ? '' : `<button class="cp-act cp-act--sobre" type="button" data-fen="masquer">${ICO.oeilBarre}<span>${t('Masquer')}<small>${t('Ne plus la voir sur cet appareil')}</small></span></button>`}
        </div>`;
    }
    $('cp-fen-panneau').addEventListener('click', (e) => {
      const b = e.target.closest('[data-fen]'); if (!b) return;
      const id = etat.fen.liste[etat.fen.i];
      if (b.dataset.fen === 'coeur') basculerCoeur(id);
      else if (b.dataset.fen === 'etoile') poserEtoile(id);
      else if (b.dataset.fen === 'masquer') masquer(id);
      else partager(id);
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
      if ($('cp-deplacer').dataset.ouverte === '1') { if (e.key === 'Escape') $('cp-deplacer').dataset.ouverte = 0; return; }
      if (etat.fen.ouverte) { if (e.key === 'Escape') fermerFen(); else if (e.key === 'ArrowRight') fenSuiv(); else if (e.key === 'ArrowLeft') fenPrec(); else if (String(e.key).toLowerCase() === 'c') basculerCoeur(etat.fen.liste[etat.fen.i]); else if (String(e.key).toLowerCase() === 'e') poserEtoile(etat.fen.liste[etat.fen.i]); return; }
      if ($('cp-tiroir').dataset.ouvert === '1') { if (e.key === 'Escape') fermerTiroir(); return; }
      if (etat.gl.ouvert) { if (e.key === 'ArrowRight') $('cp-gl-garde').click(); else if (e.key === 'ArrowLeft') $('cp-gl-passe').click(); else if (e.key === 'Escape') fermerGl(); else if (String(e.key).toLowerCase() === 'e') etoileGl(); return; }
      if (e.key === 'Escape') portail.querySelectorAll('.cp-modal').forEach(m => { m.dataset.ouverte = 0; });
    });

     
    function ouvrirTiroir() { dessinerTiroir(); $('cp-tiroir').dataset.ouvert = 1; $('cp-ombre').dataset.on = 1; }
    function fermerTiroir() { $('cp-tiroir').dataset.ouvert = 0; $('cp-ombre').dataset.on = 0; }
    $('cp-tiroir-x').onclick = fermerTiroir; $('cp-ombre').onclick = fermerTiroir;
    function dessinerTiroir() {
      const l = $('cp-tiroir-liste');
      const gardees = etat.coeurs.filter(id => etat.parId.has(id));
      const n = gardees.length;
      const pe = etat.etoile && etat.parId.get(etat.etoile);
      const vp = votesPossibles();
      $('cp-tiroir-sous').innerHTML = n
        ? nb(n, '{n} photo gardée.', '{n} photos gardées.') + (pe ? ' ' + t('Votre étoile est sur celle de <b>{a}</b>{p}', { a: pe.auteur, p: pt(pe.auteur) }) : '')
        : t('Vos cœurs se rangent ici. Gardez celles que vous aimez, puis choisissez.');
      


      const invite = vp && n > 0 && !etat.etoile;
      $('cp-tiroir').dataset.invite = invite ? 1 : 0;
      $('cp-tiroir-rappel').innerHTML = invite
        ? `<div class="cp-rappel" role="note"><p class="cp-rappel-t"><i>${ICO.etoile}</i>${t('Il reste à poser votre étoile')}</p><p>${t("Choisissez votre préférée avec l'étoile en haut de sa vignette. C'est votre seul vote, une par membre, et la photo la plus étoilée gagne.")}</p></div>`
        : (vp && etat.etoile ? `<p class="cp-tiroir-deplacer">${phraseDeplacer()}</p>` : '');
      if (!n) { l.innerHTML = `<div class="cp-tiroir-vide">${t("Aucune photo gardée pour l'instant.<br>Un cœur sur une photo, et elle arrive ici.")}</div>`; return; }
      l.innerHTML = gardees.slice().reverse().map(id => { const p = etat.parId.get(id); const e = etat.etoile === id; return `
        <div class="cp-tiroir-item${e ? ' est-etoile' : ''}" data-id="${id}">
          <img src="${src(p, 600)}" alt="" loading="lazy">
          <span class="cp-tir-acts"><button class="cp-ico cp-ico--etoile" type="button" data-tir="etoile" data-on="${e ? 1 : 0}" aria-label="${t('Mon étoile')}">${ICO.etoile}</button><button class="cp-ico cp-ico--coeur" type="button" data-tir="coeur" data-on="1" aria-label="${t('Retirer le cœur')}">${ICO.coeur}</button></span>
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
      gl.liste = etat.fil.filter(id => { const p = etat.parId.get(id); return p && !p.moi && !etat.masquees.has(id) && !etat.coeurs.includes(id); });
      let reprise = 0; const s = lire(CLE_GLISSER); if (s && s.graine === etat.graine) reprise = Math.min(s.i, gl.liste.length);
      gl.i = reprise; gl.historique = []; gl.rappele = false;
      if (!gl.ouvert) verrouiller();
      gl.ouvert = true; glEl.dataset.ouvert = 1;
      $('cp-gl-fin').dataset.on = 0;
      teinter(0);
      dessinerGl();
    }
    function fermerGl() { if (!gl.ouvert) return; gl.ouvert = false; glEl.dataset.ouvert = 0; deverrouiller(); ecrire(CLE_GLISSER, { graine: etat.graine, i: gl.i }); }
    $('cp-gl-x').onclick = fermerGl;
    $('cp-btn-glisser').onclick = ouvrirGl; $('cp-btn-glisser-haut').onclick = ouvrirGl; $('cp-gp-go').onclick = ouvrirGl; $('cp-gp-pile').onclick = ouvrirGl; $('cp-gpc-pile').onclick = ouvrirGl;
    $('cp-gl-tiroir').onclick = () => { ouvrirTiroir(); };
    const gardees = (n) => nb(n, '{n} photo gardée', '{n} photos gardées');
    function carteGl(p, classe) {
      return `<div class="cp-gl-carte ${classe}" data-id="${p.id}" data-etoile="${etat.etoile === p.id ? 1 : 0}">
        <span class="cp-gl-pose">${ICO.etoile}${t('Ma préférée')}</span>
        <div class="cp-gl-fond" style="background-image:url('${src(p, 600)}')"></div>
        <img src="${src(p, 1000)}" alt="" draggable="false">
        <div class="cp-gl-voile"><b>${p.auteur}</b><span>${p.legende || ''}</span></div>
        <div class="cp-gl-teinte cp-gl-teinte--oui"><span class="cp-gl-signe"><i>${ICO.coeur}</i><b>${t('Gardée')}</b></span></div>
        <div class="cp-gl-teinte cp-gl-teinte--non"><span class="cp-gl-signe"><i>${ICO.croix}</i><b>${t('Passée')}</b></span></div>
      </div>`;
    }
    function dessinerGl() {
      const sc = $('cp-gl-scene');
      sc.querySelectorAll('.cp-gl-carte').forEach(c => c.remove());
      teinter(0);
      const reste = gl.liste.length - gl.i;
      progGl();
      $('cp-gl-acts').style.visibility = reste > 0 ? '' : 'hidden';
      $('cp-gl-aide').style.visibility = reste > 0 ? '' : 'hidden';
      if (reste <= 0) { finGl(); return; }
      const html = [];
      for (let k = Math.min(2, reste - 1); k >= 0; k--) html.push(carteGl(etat.parId.get(gl.liste[gl.i + k]), k === 0 ? 'n0' : 'n' + k));
      sc.insertAdjacentHTML('afterbegin', html.join(''));
      brancherGeste(sc.querySelector('.cp-gl-carte.n0'));
      majGlEtoile();
    }
    function finGl() {
      const f = $('cp-gl-fin'); f.dataset.on = 1;
      const n = etat.coeurs.length;
      f.innerHTML = `<h3>${n ? t('Belle sélection') : t('Tout vu')}</h3><p>${n ? `${gardees(n)}. ${etat.etoile ? t('Votre étoile est posée, vous pouvez encore la déplacer.') : t('Il reste à poser votre étoile sur une seule.')}` : t('Vous avez passé toutes les photos. Les prochaines arrivent chaque jour.')}</p>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;justify-content:center">${n ? `<button class="cp-btn cp-btn--or" type="button" data-gl-tiroir>${t('Choisir mon étoile')}</button>` : ''}<button class="cp-btn cp-btn--ligne" type="button" data-gl-quitter>${t('Retour aux photos')}</button></div>`;
      f.querySelector('[data-gl-tiroir]')?.addEventListener('click', () => { fermerGl(); ouvrirTiroir(); });
      f.querySelector('[data-gl-quitter]').addEventListener('click', fermerGl);
    }
    function decider(sens) {
      if (!vivant) return;
      const id = gl.liste[gl.i]; if (!id) return;
      if (sens > 0 && !etat.coeurs.includes(id)) {
        etat.coeurs.push(id); memoriser(); rafraichirCase(id); dessinerTete();
         
        if (!gl.rappele && !etat.etoile && votesPossibles()) { gl.rappele = true; toast(t('Gardée'), t(RAPPEL_ETOILE)); }
      }
      gl.historique.push({ id, sens });
      gl.i++;
      dessinerGl();
    }
     
    function envoler(carte, sens, cb) {
      teinter(sens);
      carte.style.transition = 'transform .34s ease, opacity .34s ease';
      carte.style.transform = `translate(${sens * (window.innerWidth + 200)}px, -40px) rotate(${sens * 25}deg)`;
      carte.style.opacity = '0';
      setTimeout(() => { if (vivant) cb(); }, 320);
    }
    const carteDevant = () => $('cp-gl-scene').querySelector('.cp-gl-carte.n0');
    

    function deciderAuBouton(sens) {
      const c = carteDevant(); if (!c || c.dataset.part) return;
      if (sens > 0 && pleine()) { toast(MSG_PLEINE()); return; }
      c.dataset.part = 1;
      teinter(sens);
      setTimeout(() => { if (vivant) envoler(c, sens, () => decider(sens)); }, 220);
    }
    $('cp-gl-garde').onclick = () => deciderAuBouton(1);
    $('cp-gl-passe').onclick = () => deciderAuBouton(-1);
    const progGl = () => { $('cp-gl-prog').innerHTML = t('<b>{i}</b> / {n} · {k}', { i: Math.min(gl.i + 1, gl.liste.length), n: gl.liste.length, k: gardees(etat.coeurs.length) }); };
    




    function majGlEtoile() {
      if (!etat.gl.ouvert) return;
      const id = etat.gl.liste[etat.gl.i], on = !!id && etat.etoile === id;
      const b = $('cp-gl-etoile');
      b.dataset.on = on ? 1 : 0;
      b.innerHTML = on ? ICO.etoile : ICO.etoileLigne;
      b.setAttribute('aria-label', on ? t('Mon étoile est ici') : t('Poser mon étoile sur cette photo'));
      const c = carteDevant(); if (c) c.dataset.etoile = on ? 1 : 0;
      progGl();
    }
    function etoileGl() {
      const id = gl.liste[gl.i], c = carteDevant();
      if (!id || !c || c.dataset.part) return;
      if (etat.etoile && etat.etoile !== id && votesPossibles() && exigerCompte()) { ouvrirDeplacer(id); return; }
      poserEtoile(id);
    }
    $('cp-gl-etoile').onclick = etoileGl;
    let aDeplacer = null;
    function ouvrirDeplacer(id) {
      const avant = etat.parId.get(etat.etoile), d = dateVotes();
      aDeplacer = id;
      $('cp-deplacer-txt').innerHTML = (avant ? t("Elle est aujourd'hui sur la photo de <b>{a}</b>{p}", { a: avant.auteur, p: pt(avant.auteur) }) : t("Elle est aujourd'hui sur une autre photo."))
        + ' ' + (d ? t("Vous pourrez encore la déplacer jusqu'au <strong>{date}</strong>.", { date: d }) : t("Vous pourrez encore la déplacer jusqu'à la clôture des votes."));
      $('cp-deplacer').dataset.ouverte = 1;
    }
    $('cp-deplacer-ok').onclick = () => {
      $('cp-deplacer').dataset.ouverte = 0;
      const id = aDeplacer; aDeplacer = null;
      if (id && gl.ouvert && gl.liste[gl.i] === id) poserEtoile(id);
    };
    $('cp-gl-retour').onclick = () => {
      const h = gl.historique.pop(); if (!h) { toast(t('Rien à reprendre')); return; }
      gl.i = Math.max(0, gl.i - 1);
      if (h.sens > 0) { const k = etat.coeurs.indexOf(h.id); if (k >= 0) { etat.coeurs.splice(k, 1); memoriser(); rafraichirCase(h.id); dessinerTete(); } }
      dessinerGl();
    };
    function brancherGeste(carte) {
      if (!carte) return;
      let x0 = 0, y0 = 0, dx = 0, dy = 0, actif = false, t0 = 0;
      const seuil = () => Math.min(140, window.innerWidth * .28);
      carte.addEventListener('pointerdown', (e) => { if (carte.dataset.part) return; actif = true; x0 = e.clientX; y0 = e.clientY; dx = dy = 0; t0 = Date.now(); try { carte.setPointerCapture(e.pointerId); } catch (err) {   } carte.style.transition = 'none'; });
      carte.addEventListener('pointermove', (e) => {
        if (!actif) return; dx = e.clientX - x0; dy = e.clientY - y0;
        carte.style.transform = `translate(${dx}px, ${dy * .3}px) rotate(${dx / 20}deg)`;
        

        const s = seuil();
        teinter(Math.sign(dx) * Math.max(0, Math.abs(dx) - 12) / (s - 12));
      });
      const fin = () => {
        if (!actif) return; actif = false;
        if (Math.abs(dx) > seuil() && !(dx > 0 && pleine())) { carte.dataset.part = 1; envoler(carte, dx > 0 ? 1 : -1, () => decider(dx > 0 ? 1 : -1)); return; }
        if (Math.abs(dx) > seuil()) toast(MSG_PLEINE());
        else if (Math.abs(dx) < 6 && Math.abs(dy) < 6 && Date.now() - t0 < 350) { ouvrirFen(gl.liste, carte.dataset.id); }
        carte.style.transition = 'transform .25s ease'; carte.style.transform = ''; teinter(0);
      };
      carte.addEventListener('pointerup', fin); carte.addEventListener('pointercancel', fin);
    }

    



    const depot = { fichier: null, prepa: null, url: '', jeton: null, enCours: false };
    const etatDepot = (txt, erreur) => { const e = vivant && $('cp-depot-etat'); if (!e) return; e.innerHTML = txt || ''; e.dataset.erreur = erreur ? 1 : 0; };
     
    const libererApercu = () => { if (depot.url) { URL.revokeObjectURL(depot.url); depot.url = ''; } };
    nettoyages.push(libererApercu);
    const pret = () => demo ? !!depot.fichier : !!depot.prepa;
    const verifierDepot = () => { $('cp-envoyer').disabled = depot.enCours || !(pret() && $('cp-c1').checked && $('cp-c2').checked); };
    function ouvrirDepot() {
      if (!exigerCompte()) return;
      if (!demo && !(depotPossible() && etat.membre.peutDeposer)) { toast(raisonDepot() || t('Les dépôts sont fermés.')); return; }
      $('cp-depot').dataset.ouverte = 1;
      if (depot.enCours) return;
      $('cp-depot-etape1').style.display = ''; $('cp-depot-ok').dataset.on = 0; $('cp-apercu').dataset.on = 0; $('cp-progress').dataset.on = 0; $('cp-progress').firstElementChild.style.width = '0';
      $('cp-c1').checked = false; $('cp-c2').checked = false; $('cp-legende').value = ''; $('cp-fichier').value = '';
      depot.fichier = null; depot.prepa = null; depot.jeton = null; libererApercu(); etatDepot(''); verifierDepot();
    }
    $('cp-c1').onchange = verifierDepot; $('cp-c2').onchange = verifierDepot;
    $('cp-fichier').onchange = async (e) => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      libererApercu(); $('cp-apercu').dataset.on = 0;
      if (demo) {
        depot.fichier = f;
        const url = depot.url = URL.createObjectURL(f);
        const img = new Image();
        img.onload = () => {
          if (depot.url !== url) return;
          $('cp-apercu-img').src = url; $('cp-apercu').dataset.on = 1;
          const grand = Math.max(img.naturalWidth, img.naturalHeight); const facteur = Math.min(1, 2400 / grand);
          $('cp-apercu-i').innerHTML = `<b>${esc(f.name)}</b><br>${img.naturalWidth} × ${img.naturalHeight} px, ${mo(f.size)} ${options.lang === 'en' ? 'MB' : 'Mo'}<br>${t('Sera envoyée en {l} × {h} px, sans données de localisation.', { l: Math.round(img.naturalWidth * facteur), h: Math.round(img.naturalHeight * facteur) })}`;
          verifierDepot();
        };
        img.src = url;
        return;
      }
      const jeton = depot.jeton = {};
      depot.prepa = null; verifierDepot();
      etatDepot(t('Préparation de la photo…'));
      try {
        const prepa = await preparerPhoto(f);
        if (depot.jeton !== jeton || !vivant) { URL.revokeObjectURL(prepa.url); return; }
        depot.prepa = prepa; depot.url = prepa.url;
        $('cp-apercu-img').src = prepa.url; $('cp-apercu').dataset.on = 1;
        $('cp-apercu-i').innerHTML = `<b>${esc(f.name)}</b><br>${t('Sera envoyée en {l} × {h} px, {mo} Mo, sans données de localisation.', { l: prepa.l, h: prepa.h, mo: mo(prepa.blob.size) })}`;
        etatDepot('');
      } catch (err) {
        if (depot.jeton === jeton) etatDepot(messagePhoto(err && err.code), true);
      }
      verifierDepot();
    };
    function envoyerDemo() {
      const pr = $('cp-progress'); pr.dataset.on = 1; $('cp-envoyer').disabled = true;
      let p = 0; const tm = setInterval(() => { p = Math.min(100, p + 4 + Math.random() * 10); pr.firstElementChild.style.width = p + '%'; if (p >= 100) { clearInterval(tm); setTimeout(() => { $('cp-depot-etape1').style.display = 'none'; $('cp-depot-ok').dataset.on = 1; etat.mienne = 'attente'; dessinerTete(); }, 250); } }, 120);
      nettoyages.push(() => clearInterval(tm));
    }
    async function envoyerReel() {
      if (depot.enCours || !depot.prepa) return;
      const prepa = depot.prepa, blob = prepa.blob;
      depot.enCours = true; verifierDepot();
      const pr = $('cp-progress'), barre = pr.firstElementChild;
      pr.dataset.on = 1; barre.style.width = '2%';
      etatDepot(t('Envoi… {pct} %', { pct: 0 }));
      const retenir = (e) => { e.preventDefault(); e.returnValue = ''; };
      window.addEventListener('beforeunload', retenir);
      const echec = (code) => { if (!vivant) return; etatDepot(messageRaison(code, 'depot'), true); pr.dataset.on = 0; };
      try {
        const a = await racine._demander('envoi', { type: 'image/jpeg', taille: blob.size }, 20000);
        if (!vivant) return;
        if (!a || !a.uploadUrl) { echec(a && (a.raison || a.code || a.raisonPasDeposer)); return; }
        const nom = String(a.fileName || ('concours-photo-' + Date.now() + '.jpg'));
        const fichier = await envoyerFichier(a, blob, nom, (octets, reprise) => {
          const pct = Math.min(100, Math.round(octets / blob.size * 100));
          barre.style.width = Math.max(2, pct) + '%';
          etatDepot(reprise ? t('Connexion perdue, reprise…') : pct >= 100 ? t('Vérification…') : t('Envoi… {pct} %', { pct }));
        });
        barre.style.width = '100%'; etatDepot(t('Vérification…'));
        const demande = {
          fileId: fichier.id, fileUrl: fichier.url, largeur: prepa.l, hauteur: prepa.h, legende: $('cp-legende').value.trim().slice(0, 140), empreinte: prepa.empreinte,
          accepteReglement: $('cp-c2').checked === true, accepteDroitImage: $('cp-c1').checked === true
        };
        let d = await racine._demander('deposer', demande, 30000);
        for (let essai = 0; essai < 4 && d && d.raison === 'fichier_en_cours' && racine._monte; essai++) {
          await new Promise((ok) => setTimeout(ok, 2500));
          d = await racine._demander('deposer', demande, 30000);
        }
        if (!vivant) return;
        if (!d || !d.ok) { echec(d && (d.raison || d.code)); return; }
        $('cp-depot-etape1').style.display = 'none'; $('cp-depot-ok').dataset.on = 1; etatDepot('');
        etat.membre = Object.assign({}, etat.membre, { maPhoto: d.maPhoto && typeof d.maPhoto === 'object' ? d.maPhoto : { statut: 'en_attente' }, peutDeposer: false });
        depot.prepa = null;
        dessinerTete();
        if (!etat.photos.length) dessinerGrille();
        racine._demander('etat', {}, 0);
      } catch (err) {
        echec(err && err.message === 'delai' ? 'delai' : 'reseau');
      } finally {
        window.removeEventListener('beforeunload', retenir);
        depot.enCours = false;
        if (vivant) verifierDepot();
      }
    }
    $('cp-envoyer').onclick = () => { if (demo) envoyerDemo(); else envoyerReel(); };
    portail.querySelectorAll('[data-fermer]').forEach(b => { b.onclick = () => { $(b.dataset.fermer).dataset.ouverte = 0; }; });
    portail.querySelectorAll('.cp-modal').forEach(m => m.addEventListener('click', (e) => { if (e.target === m) m.dataset.ouverte = 0; }));
    

    portail.querySelectorAll('#cp-connexion [data-mode]').forEach(b => b.addEventListener('click', () => {
      if (demo) return;
      if (racine.getAttribute('pont') && !etat.membre.sansPont) racine._demander('connexion', { mode: b.dataset.mode === 'login' ? 'login' : 'signup' }, 0);
      else aller(new URL('mon-espace-rhum', location.href).href);
    }));

    let largeurAvant = largeurGrille(), tRedim = 0;
    ecoute(window, 'resize', () => { clearTimeout(tRedim); tRedim = setTimeout(() => { if (Math.abs(largeurGrille() - largeurAvant) > 40) { largeurAvant = largeurGrille(); dessinerGrille(); } }, 150); });

     
    function surMembre(m) {
      if (demo || !m || !vivant) return;
      const statut = (m.erreur || m.indisponible) ? 'erreur' : 'pret';
      etat.membre = {
        statut, connecte: m.connecte === true, sansPont: m.sansPont === true,
        maPhoto: m.maPhoto && typeof m.maPhoto === 'object' ? m.maPhoto : null,
        peutDeposer: m.peutDeposer === true, raisonPasDeposer: String(m.raisonPasDeposer || ''),
        monVote: m.monVote != null && m.monVote !== '' ? String(m.monVote) : null,
        mesCoeurs: Array.isArray(m.mesCoeurs) ? m.mesCoeurs.map(String).filter(x => ID_PHOTO.test(x)) : []
      };
      if (statut === 'pret') Object.assign(cfg, lireCfg(m, cfg));
      const avant = [...etat.coeurs, etat.etoile];
      if (etat.membre.connecte && statut === 'pret') {
        etat.coeursConfirmes = etat.membre.mesCoeurs.slice(0, MAX_COEURS);
        if (!coeurs.minuteur && !coeurs.enCours) etat.coeurs = etat.coeursConfirmes.slice();
        if (!vote.enCours) etat.etoile = etat.membre.monVote;
      } else if (!etat.membre.connecte) { etat.coeurs = []; etat.coeursConfirmes = []; etat.etoile = null; }
      const changees = recalculerMoi();
      if (changees.length) { changees.forEach(refaireCase); dessinerMur(); dessinerPile(); dessinerJour(); }
      else if (!etat.photos.length) dessinerGrille();
      dessinerChiffres();
      redessinerGestes([...avant, ...etat.coeurs, etat.etoile]);
    }
    let lienFait = false;
    function ouvrirLienPhoto() {
      if (lienFait || !options.photo || !etat.parId.has(options.photo)) return;
      lienFait = true;
      ouvrirFen(etat.fil.includes(options.photo) ? etat.fil : [options.photo], options.photo);
    }
    function ajouter(liste) {
      if (!vivant) return;
      const neuves = integrer(liste);
      if (!neuves.length) return;
      recalculerMoi();
      const premieres = etat.photos.length === neuves.length;
      poserVue(); dessinerMur(); dessinerPile(); dessinerChiffres();
      if (premieres || !etat.fil.length) { dessinerJour(); dessinerGrille(); dessinerActions(); placerCurseur(); }
      else prolonger(neuves);
      ouvrirLienPhoto();
    }
    function pagesFinies() { ouvrirLienPhoto(); lienFait = true; }

    if (demo) {
      integrer(donnees.photos);
      const graineJour = aleaGraine(20261027);
      const candidates = etat.photos.filter(p => !p.moi && p.coeurs < 10 && p.ratio > 1.1);
      if (candidates.length) candidates[Math.floor(graineJour() * candidates.length)].jour = true;
    } else {
      integrer(donnees.photos);
      if (donnees.photoDuJour && typeof donnees.photoDuJour === 'object') integrer([donnees.photoDuJour]);
    }
    poserVue(); dessinerMur(); dessinerPile(); dessinerTete(); dessinerJour(); dessinerGrille(); dessinerTiroir(); placerCurseur();
    ouvrirLienPhoto();

    return {
      etat, cfg, ouvrirFen, fermerFen, ouvrirGl, fermerGl, dessinerGl, ouvrirTiroir, fermerTiroir, teinter,
      surMembre, ajouter, pagesFinies, vider,
      nettoyer: () => {
        vivant = false;
        nettoyages.forEach(f => { try { f(); } catch (e) {   } });
        clearTimeout(toast.t); clearTimeout(tRedim); clearTimeout(coeurs.minuteur);
        try { ecrire(CLE_GLISSER, { graine: etat.graine, i: etat.gl.i }); } catch (e) {   }
      }
    };
  }

  customElements.define('rdr-concours-photo', RdrConcoursPhoto);
})();
})();
;(function(){
(function () {
  'use strict';
  

  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('alpina-clock')) return;

  



  const MEDIA = 'https://static.wixstatic.com/media/';
  const MODELE = {
    cadran: MEDIA + 'df962b_6f374b182ba647af8ba5b808bcd0fc67~mv2.avif',
    heure: MEDIA + 'df962b_23e0b40b8b8749a3af6a736bd3ad18fe~mv2.webp',
    minute: MEDIA + 'df962b_bfb9d81ed5494964851d188bc89ab132~mv2.webp',
    seconde: MEDIA + 'df962b_e5d91ebdb4fb431bb0a875a1bb72c7ab~mv2.webp',
    centreX: 46.243,
    centreY: 49.991
  };
  const FUSEAU = 'Europe/Paris';

  const CSS = 'alpina-clock{display:block;position:relative;width:100%;height:100%;aspect-ratio:1/1;overflow:hidden;contain:layout paint style;}' +
     
    'alpina-clock img.ac-couche{position:absolute;inset:0;display:block;width:100%;height:100%;max-width:none;min-width:0;margin:0;padding:0;border:0;object-fit:contain;pointer-events:none;user-select:none;-webkit-user-drag:none;}' +
    'alpina-clock img.ac-aiguille{transform-origin:' + MODELE.centreX + '% ' + MODELE.centreY + '%;}' +
    'alpina-clock .ac-h{z-index:3}alpina-clock .ac-m{z-index:4}alpina-clock .ac-s{z-index:5}';

  let formateur = null;
  function heureDeParis(d) {
    try {
      if (!formateur) formateur = new Intl.DateTimeFormat('en-US', { timeZone: FUSEAU, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const parts = formateur.formatToParts(d);
      const get = (k) => Number((parts.find(p => p.type === k) || {}).value || 0);
      return { h: get('hour') % 12, m: get('minute'), s: get('second') };
    } catch (e) {
       
      return { h: d.getHours() % 12, m: d.getMinutes(), s: d.getSeconds() };
    }
  }

  class AlpinaClock extends HTMLElement {
    constructor() {
      super();
      this._minuteur = null;
      this._visible = true;
      this._io = null;
       
      this._surVisibilite = () => { if (!document.hidden && this.el) this._afficher(); this._planifier(); };
    }

    connectedCallback() {
      if (!this.el) {
         
        this.innerHTML = '<style>' + CSS + '</style>';
        const couche = (cls, src) => {
          const i = document.createElement('img');
          i.className = 'ac-couche ' + cls; i.alt = ''; i.decoding = 'async'; i.draggable = false;
          i.setAttribute('aria-hidden', 'true');
          i.src = src;
          this.appendChild(i);
          return i;
        };
        this.el = {
          cadran: couche('ac-cadran', MODELE.cadran),
          h: couche('ac-aiguille ac-h', MODELE.heure),
          m: couche('ac-aiguille ac-m', MODELE.minute),
          s: couche('ac-aiguille ac-s', MODELE.seconde)
        };
      }
      if (typeof IntersectionObserver === 'function') {
        this._io = new IntersectionObserver((e) => { this._visible = e.some(x => x.isIntersecting); if (this._visible) this._afficher(); this._planifier(); });
        this._io.observe(this);
      }
      document.addEventListener('visibilitychange', this._surVisibilite);
      this._afficher();
      this._planifier();
    }

    disconnectedCallback() {
      this._arreter();
      if (this._io) { this._io.disconnect(); this._io = null; }
      document.removeEventListener('visibilitychange', this._surVisibilite);
    }

    

    _planifier() {
      this._arreter();
      if (!this._visible || document.hidden || !this.isConnected) return;
      const suivant = 1000 - (Date.now() % 1000) + 5;
      this._minuteur = setTimeout(() => { this._minuteur = null; this._afficher(); this._planifier(); }, suivant);
    }
    _arreter() { if (this._minuteur) { clearTimeout(this._minuteur); this._minuteur = null; } }

    _afficher() {
      const { h, m, s } = heureDeParis(new Date());
      this.el.h.style.transform = 'rotate(' + (h + m / 60) * 30 + 'deg)';
      this.el.m.style.transform = 'rotate(' + (m + s / 60) * 6 + 'deg)';
      this.el.s.style.transform = 'rotate(' + s * 6 + 'deg)';
    }
  }

  window.customElements.define('alpina-clock', AlpinaClock);
})();
})();
