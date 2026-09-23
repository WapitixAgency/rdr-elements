/* rdr-elements apercu | source route-du-rhum 18b6ad6 | rdr-accueil-apercu.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["apercu"]="18b6ad6";performance.mark("rdr-elements:apercu")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof customElements === 'undefined' || customElements.get('rdr-accueil-apercu')) return;

  const SOURCE = 'https://www.routedurhum.com/_functions/accueilApercu';

  const CSS = `rdr-accueil-apercu{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}
rdr-accueil-apercu button{font-family:inherit;margin:0}
rdr-accueil-apercu .raa-attente{min-height:clamp(600px,calc(100svh - 125px),960px);background:#0E111D}
rdr-accueil-apercu .raa-vide{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#0E111D;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center;padding:40px 20px}
rdr-accueil-apercu .raa-vide h3{margin:0;font-size:22px}
rdr-accueil-apercu .raa-vide p{margin:0;color:rgba(255,255,255,.7)}
rdr-accueil-apercu .raa-vide button{height:42px;padding:0 20px;border:2px solid #fff;border-radius:10px 0 10px 0;background:transparent;color:#fff;font-weight:700;cursor:pointer}
rdr-accueil-apercu{--marine:#0E111D;--nuit:#0A1228;--marine2:#16355D;--panneau:#1B2237;--teal:#5DBFC0;--teal2:#14A79E;--vert:#006F7B;--jaune:#FCF150;--or:#F5BE41;--orange:#F19F39;
    --t2:rgba(255,255,255,.72);--t3:rgba(255,255,255,.5);--filet:rgba(255,255,255,.12);
    --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;
    --largeur:1380px;--marge:30px;
    --haut-entete:175px;}
rdr-accueil-apercu *{box-sizing:border-box}
rdr-accueil-apercu{margin:0;background:#0E111D;color:#0E111D;overflow-x:clip;font-family:var(--police);-webkit-font-smoothing:antialiased}
rdr-accueil-apercu img{display:block}
rdr-accueil-apercu a{color:inherit;text-decoration:none}
rdr-accueil-apercu h1,rdr-accueil-apercu h2,rdr-accueil-apercu h3,rdr-accueil-apercu h4,rdr-accueil-apercu p{margin:0}
rdr-accueil-apercu .trame{width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}
rdr-accueil-apercu .titre{font-family:var(--titre);font-style:italic;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .kicker{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:6px 10px;border-radius:6px;background:var(--teal);color:#0E111D;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .kicker--jaune{background:var(--jaune)}
rdr-accueil-apercu .kicker--blanc{background:#fff}
rdr-accueil-apercu .kicker--sombre{background:#0E111D;color:#fff}
rdr-accueil-apercu .trait{display:inline-block;width:54px;height:6px;border-radius:3px;background:var(--jaune);transform:skewX(-20deg)}
rdr-accueil-apercu .btn{display:inline-flex;align-items:center;justify-content:center;gap:15px;height:44px;padding:10px 20px;border:2px solid currentColor;border-radius:10px 0 10px 0;background:transparent;color:#fff;font:700 14px/1 var(--police);text-decoration:none;transition:background .15s,color .15s;cursor:pointer;white-space:nowrap}
rdr-accueil-apercu .btn svg{width:20px;height:20px;fill:currentColor;flex:none}
rdr-accueil-apercu .btn:hover{background:rgba(255,255,255,.12)}
rdr-accueil-apercu .btn--sombre{color:#0E111D}
rdr-accueil-apercu .btn--sombre:hover{background:rgba(14,17,29,.08)}
rdr-accueil-apercu .btn--plein{background:var(--jaune);border-color:var(--jaune);color:#0E111D}
rdr-accueil-apercu .btn--plein:hover{background:#fff;border-color:#fff}
rdr-accueil-apercu .btn--marine{background:#0E111D;border-color:#0E111D;color:#fff}
rdr-accueil-apercu .btn--marine:hover{background:#16355D;border-color:#16355D}
rdr-accueil-apercu{--haut-acces:clamp(200px,26vh,260px);--bas-titre:calc(var(--haut-acces) + 60px)}
rdr-accueil-apercu .hero{position:relative;height:clamp(520px,calc(100svh - var(--haut-entete)),960px);background:#0E111D;color:#fff;overflow:hidden}
rdr-accueil-apercu .hero[data-acces="sous"]{--bas-titre:60px}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .hero{height:clamp(560px,100svh,1100px)}
rdr-accueil-apercu .hv-scene{position:absolute;inset:0;overflow:hidden;background:#0E111D}
rdr-accueil-apercu .hv-rail{position:absolute;inset:0;display:flex;width:calc(var(--n,1) * 100%);transition:transform 1.1s cubic-bezier(.7,0,.2,1)}
rdr-accueil-apercu .hv-vue{position:relative;flex:1 1 0;min-width:0;height:100%;overflow:hidden}
rdr-accueil-apercu .hv-fond{position:absolute;inset:0}
rdr-accueil-apercu .hero video,rdr-accueil-apercu .hero .hero-photo,rdr-accueil-apercu .hv-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
rdr-accueil-apercu .hero .hero-photo{opacity:0;object-position:62% 45%;transform:scale(1.08);transition:opacity 1.4s ease,transform 18s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.est-photo .hero-photo{opacity:1;transform:scale(1)}
rdr-accueil-apercu .hv-img{transform:scale(1.07);transition:transform 9s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hv-vue.est-active .hv-img{transform:scale(1)}
rdr-accueil-apercu .hv-fond::after{content:'';position:absolute;inset:0;pointer-events:none;transition:opacity 1s;background:
    linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 22%),
    linear-gradient(90deg,rgba(14,17,29,.84) 0%,rgba(14,17,29,.52) 34%,rgba(14,17,29,0) 62%),
    linear-gradient(180deg,rgba(14,17,29,0) 40%,rgba(14,17,29,.6) 64%,#0E111D 100%)}
rdr-accueil-apercu .hero[data-acces="sous"] .hv-fond::after{background:
    linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 22%),
    linear-gradient(90deg,rgba(14,17,29,.8) 0%,rgba(14,17,29,.45) 36%,rgba(14,17,29,0) 64%),
    linear-gradient(180deg,rgba(14,17,29,0) 60%,#0E111D 100%)}
rdr-accueil-apercu .hero:not(.est-photo) .hv-fond::after{opacity:.5}
rdr-accueil-apercu.sans-entree .hero,rdr-accueil-apercu.sans-entree .hero *,rdr-accueil-apercu.sans-entree .hv-acces-sous,rdr-accueil-apercu.sans-entree .hv-acces-sous *{transition:none !important}
rdr-accueil-apercu.sans-entree .hv-marque{display:none}
rdr-accueil-apercu .hero.entree-affiche .hero-photo{opacity:1;transition:opacity .6s ease,transform 18s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.entree-douce video,rdr-accueil-apercu .hero.entree-douce .hv-marque{display:none}
rdr-accueil-apercu .hero.entree-douce .hero-photo{transition:opacity 1s ease,transform 9s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.entree-douce .hv-titre{transition-delay:.15s}
rdr-accueil-apercu .hero[data-acces="sous"] .hv-fond::before{content:'';position:absolute;left:0;right:0;bottom:0;height:36%;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(14,17,29,0) 0%,rgba(14,17,29,.72) 60%,#0E111D 100%)}
rdr-accueil-apercu .hv-marque{position:absolute;left:0;right:0;top:50%;transform:translateY(-44%);z-index:3;text-align:center;padding:0 var(--marge);pointer-events:none;transition:opacity .7s ease,transform 1s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .hv-masque{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;margin:0}
rdr-accueil-apercu .hv-logo{display:block;margin:0 auto;width:clamp(140px,min(16vw,27vh),250px);height:auto;filter:drop-shadow(0 12px 34px rgba(0,0,0,.28))}
rdr-accueil-apercu .hv-devise{margin-top:clamp(16px,3vh,32px);font-size:clamp(22px,min(3vw,5.6vh),46px);line-height:1.05;text-shadow:0 6px 30px rgba(0,0,0,.45);text-wrap:balance}
rdr-accueil-apercu .hv-marque .hv-logo,rdr-accueil-apercu .hv-marque .hv-devise{animation:raa-marque 1.1s cubic-bezier(.22,.8,.3,1) both}
rdr-accueil-apercu .hv-marque .hv-devise{animation-delay:.45s}
rdr-accueil-apercu .hero.est-photo .hv-marque{opacity:0;transform:translateY(-70%)}
@keyframes raa-marque{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .hv-contenu{position:absolute;left:0;right:0;bottom:var(--bas-titre);z-index:3}
rdr-accueil-apercu .hv-ligne{display:flex;align-items:flex-end;justify-content:space-between;gap:28px}
rdr-accueil-apercu .hv-titre{max-width:min(980px,76%);display:flex;flex-direction:column;align-items:flex-start;gap:clamp(12px,2.2vh,22px)}
rdr-accueil-apercu .hero .hv-titre{opacity:.01;transform:translateY(26px);transition:opacity .9s ease .3s,transform 1.1s cubic-bezier(.22,.8,.3,1) .3s}
rdr-accueil-apercu .hero.est-photo .hv-titre{opacity:1;transform:none}
rdr-accueil-apercu .hero:not(.est-photo) .hv-contenu{z-index:-1}
rdr-accueil-apercu .hero.est-photo .hv-titre.sort{opacity:0;transform:translateY(16px);transition:opacity .35s ease,transform .35s ease}
rdr-accueil-apercu .hv-signe{display:inline-flex;align-items:baseline;gap:8px;font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:clamp(11px,1.02vw,14.5px);line-height:1;padding:6px 10px 5px;border-radius:6px;background:rgba(14,17,29,.55);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(6px)}
rdr-accueil-apercu .hv-signe b{color:var(--jaune);font-weight:400}
rdr-accueil-apercu .hv-titre h2{font-size:clamp(34px,min(4.6vw,7.4vh),78px);line-height:1.1;text-wrap:balance;text-shadow:0 8px 40px rgba(0,0,0,.35)}
rdr-accueil-apercu .hv-titre h2 em{font-style:inherit;color:var(--jaune);position:relative;white-space:nowrap}
rdr-accueil-apercu .hv-titre h2 em{display:inline-block}
rdr-accueil-apercu .hero.est-photo .hv-titre h2 em{animation:raa-vibre 10s ease-in-out 1.6s infinite}
@keyframes raa-vibre{0%,7%,100%{transform:none}1%{transform:translate(-2px,1px) rotate(-1deg)}2%{transform:translate(2px,-1px) rotate(1deg)}3%{transform:translate(-2px,0) rotate(-.6deg)}4%{transform:translate(2px,1px) rotate(.6deg)}5%{transform:translate(-1px,0)}6%{transform:translate(1px,0)}}
rdr-accueil-apercu .hv-faits{display:flex;flex-wrap:wrap;gap:6px 8px;padding-left:6px}
rdr-accueil-apercu .hv-fait{--c:var(--teal);position:relative;display:flex;align-items:center;gap:9px;padding:6px 16px 6px 13px;isolation:isolate;color:#fff}
rdr-accueil-apercu .hv-fait::before{content:'';position:absolute;inset:0;z-index:-1;transform:skewX(-14deg);background:linear-gradient(105deg,rgba(8,14,34,.82),rgba(8,14,34,.5));border-left:3px solid var(--c);backdrop-filter:blur(10px);box-shadow:0 14px 30px rgba(0,0,0,.24)}
rdr-accueil-apercu .hv-fait:nth-child(2){--c:var(--jaune)}
rdr-accueil-apercu .hv-fait:nth-child(3){--c:#8B86E0}
rdr-accueil-apercu .hv-fait:nth-child(4){--c:var(--or)}
rdr-accueil-apercu .hv-v{font-family:var(--titre);font-style:italic;font-size:clamp(22px,1.85vw,28px);line-height:.9;color:var(--c);white-space:nowrap;letter-spacing:-.01em;font-variant-numeric:tabular-nums;text-shadow:0 6px 20px rgba(0,0,0,.35)}
rdr-accueil-apercu .hv-v i{font-style:inherit}
rdr-accueil-apercu .hv-v small{font:800 .46em/1 var(--police);margin-left:4px;color:#fff;letter-spacing:0}
rdr-accueil-apercu .hv-l{display:flex;flex-direction:column;gap:3px;min-width:0}
rdr-accueil-apercu .hv-l b{font:800 9px/1.1 var(--police);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
rdr-accueil-apercu .hv-l span{font-size:10px;line-height:1.2;font-weight:600;color:var(--t2);white-space:nowrap}
rdr-accueil-apercu .hero .hv-fait{opacity:0;transform:translateX(-16px)}
rdr-accueil-apercu .hero.est-photo .hv-fait{opacity:1;transform:none;transition:opacity .5s ease,transform .7s cubic-bezier(.22,.8,.3,1);transition-delay:calc(.5s + var(--i) * .09s)}
rdr-accueil-apercu .hv-texte{max-width:600px;font-size:clamp(14px,1.1vw,16px);line-height:1.55;font-weight:500;color:rgba(255,255,255,.88);text-wrap:pretty;text-shadow:0 2px 14px rgba(0,0,0,.35)}
rdr-accueil-apercu .hv-nav{display:flex;align-items:center;gap:6px;flex:none;padding:4px 4px 4px 9px;border-radius:999px;background:rgba(14,17,29,.55);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(8px);transition:opacity .6s}
rdr-accueil-apercu .hv-nav:empty{display:none}
rdr-accueil-apercu .hv-defiler{display:none}
@keyframes raa-hv-descend{0%,100%{transform:translateY(-3px);opacity:.5}50%{transform:translateY(3px);opacity:1}}
rdr-accueil-apercu .hero:not(.est-photo) .hv-nav{opacity:0;pointer-events:none}
rdr-accueil-apercu .hv-compte{font-family:var(--titre);font-style:italic;font-size:10px;line-height:1;color:var(--t2);white-space:nowrap}
rdr-accueil-apercu .hv-compte b{color:#fff;font-weight:400}
rdr-accueil-apercu .hv-barres{display:flex;gap:3px}
rdr-accueil-apercu .hv-barres i{width:14px;height:3px;border-radius:2px;background:rgba(255,255,255,.28);position:relative;overflow:hidden;cursor:pointer}
rdr-accueil-apercu .hv-barres i.active::after{content:'';position:absolute;inset:0;background:var(--jaune);transform-origin:left;animation:raa-hvprog 7s linear forwards}
@keyframes raa-hvprog{from{transform:scaleX(0)}to{transform:scaleX(1)}}
rdr-accueil-apercu .hv-nav button{width:20px;height:20px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:background .2s,color .2s}
rdr-accueil-apercu .hv-nav button:hover{background:#fff;color:#0E111D}
rdr-accueil-apercu .hv-nav button svg{width:9px;height:9px}
rdr-accueil-apercu .hv-acces{position:absolute;left:0;right:0;bottom:28px;z-index:4;transition:opacity .6s}
rdr-accueil-apercu .hv-acces-sous{background:#0E111D;padding:clamp(16px,2.6vh,28px) 0 44px}
rdr-accueil-apercu .hero + .hv-acces-sous .cta{transition:flex .6s cubic-bezier(.22,.8,.3,1),box-shadow .3s,opacity .6s ease var(--d,0s),transform .8s cubic-bezier(.22,.8,.3,1) var(--d,0s)}
rdr-accueil-apercu .hero:not(.est-photo) + .hv-acces-sous .cta{opacity:0;transform:translateY(28px)}
rdr-accueil-apercu .hero.est-photo + .hv-acces-sous .cta{--d:.45s}
rdr-accueil-apercu .hero.est-photo + .hv-acces-sous .cta:nth-child(2){--d:.57s}
rdr-accueil-apercu .hero.est-photo + .hv-acces-sous .cta:nth-child(3){--d:.69s}
rdr-accueil-apercu .hv-acces-sous:not(:has(.cta-liste)){display:none}
rdr-accueil-apercu .cta-liste{display:flex;gap:16px;height:var(--haut-acces)}
rdr-accueil-apercu .cta{position:relative;flex:1;border-radius:18px;overflow:hidden;background:var(--panneau);color:#fff;transition:flex .6s cubic-bezier(.22,.8,.3,1),box-shadow .3s;display:flex;align-items:flex-end;min-width:0;border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 30px 60px rgba(0,0,0,.45)}
rdr-accueil-apercu .cta:hover,rdr-accueil-apercu .cta:focus-within{flex:2.1}
rdr-accueil-apercu .cta--bientot{pointer-events:none;cursor:default}
rdr-accueil-apercu .cta--bientot img{filter:grayscale(1);opacity:.4}
rdr-accueil-apercu .cta--bientot .cta-txt{opacity:.78}
rdr-accueil-apercu .cta--bientot .cta-prochainement{display:inline-flex;align-self:flex-start;padding:5px 10px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
rdr-accueil-apercu .cta img{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;opacity:.66;transition:opacity .5s,transform 6s linear}
rdr-accueil-apercu .cta:hover img{opacity:.92;transform:scale(1.05)}
rdr-accueil-apercu .cta::before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(14,17,29,0) 0%,rgba(14,17,29,.18) 30%,rgba(14,17,29,.78) 62%,rgba(14,17,29,.97) 100%)}
rdr-accueil-apercu .cta::after{content:'';position:absolute;left:0;right:0;bottom:0;z-index:2;height:5px;background:var(--c,var(--teal));transition:height .3s}
rdr-accueil-apercu .cta:hover::after{height:8px}
rdr-accueil-apercu .cta-num{position:absolute;right:18px;top:12px;z-index:2;font-family:var(--titre);font-style:italic;font-size:46px;line-height:1;color:transparent;-webkit-text-stroke:1.2px rgba(255,255,255,.45);transition:-webkit-text-stroke-color .3s,color .3s}
rdr-accueil-apercu .cta:hover .cta-num{-webkit-text-stroke-color:var(--c,var(--teal))}
rdr-accueil-apercu .cta-txt{position:relative;z-index:2;padding:22px 24px 24px;display:flex;flex-direction:column;gap:8px;width:100%}
rdr-accueil-apercu .cta-ico{width:46px;height:46px;border-radius:12px;background:var(--c,var(--teal));color:#0E111D;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px;box-shadow:0 10px 20px rgba(0,0,0,.3)}
rdr-accueil-apercu .cta-ico svg{width:22px;height:22px}
rdr-accueil-apercu .cta h3{font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:clamp(18px,1.6vw,24px);line-height:1.05;text-wrap:balance}
rdr-accueil-apercu .cta p{font-size:13px;line-height:1.5;color:var(--t2);max-width:520px;max-height:0;opacity:0;overflow:hidden;text-wrap:pretty;transition:max-height .5s ease,opacity .4s .1s}
rdr-accueil-apercu .cta:hover p,rdr-accueil-apercu .cta:focus-within p{max-height:80px;opacity:1}
rdr-accueil-apercu .cta .lire{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#fff}
rdr-accueil-apercu .cta .lire svg{width:14px;height:14px;color:var(--c,var(--teal))}
rdr-accueil-apercu .cta--teal{--c:var(--teal)}
rdr-accueil-apercu .cta--jaune{--c:var(--jaune)}
rdr-accueil-apercu .cta--bleu{--c:#8B86E0}
rdr-accueil-apercu .cta--or{--c:var(--or)}
rdr-accueil-apercu .affiche{background:#0E111D;color:#fff;padding:26px 0 64px}
rdr-accueil-apercu .affiche-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:8px}
rdr-accueil-apercu .affiche h2{font-size:clamp(26px,2.4vw,34px);text-wrap:balance}
rdr-accueil-apercu .affiche h2 small{display:block;font:500 12.5px var(--police);color:var(--t3);text-transform:none;font-style:normal;margin-top:6px}
rdr-accueil-apercu .affiche-lien{display:inline-flex;align-items:center;gap:8px;flex:none;font-size:11.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--jaune)}
rdr-accueil-apercu .affiche-lien svg{width:14px;height:14px}
rdr-accueil-apercu .af-rail{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;padding-top:40px}
rdr-accueil-apercu .af-rail::before{content:'';position:absolute;left:0;right:0;top:17px;height:2px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.26) 0 8px,transparent 8px 16px)}
rdr-accueil-apercu .af{position:relative;display:flex;flex-direction:column;gap:10px;padding:18px 18px 16px;border-radius:16px;background:var(--panneau);border:1px solid var(--filet);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);transition:transform .25s,border-color .25s}
rdr-accueil-apercu .af::before{content:'';position:absolute;left:22px;top:-30px;width:12px;height:12px;border-radius:50%;background:#0E111D;border:3px solid var(--c)}
rdr-accueil-apercu .af::after{content:'';position:absolute;left:28px;top:-15px;width:2px;height:15px;background:var(--c);opacity:.55}
rdr-accueil-apercu .af:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.3)}
rdr-accueil-apercu .af:nth-child(4n+1){--c:var(--teal)}
rdr-accueil-apercu .af:nth-child(4n+2){--c:var(--jaune)}
rdr-accueil-apercu .af:nth-child(4n+3){--c:#8B86E0}
rdr-accueil-apercu .af:nth-child(4n+4){--c:var(--or)}
rdr-accueil-apercu .af-date{display:flex;align-items:center;gap:10px}
rdr-accueil-apercu .af-date b{font-family:var(--titre);font-style:italic;font-size:42px;line-height:.8;color:var(--c)}
rdr-accueil-apercu .af-date span{display:flex;flex-direction:column;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;line-height:1.3}
rdr-accueil-apercu .af-date span em{font-style:normal;color:var(--t3)}
rdr-accueil-apercu .af h3{font-size:15px;font-weight:800;line-height:1.25;text-wrap:balance}
rdr-accueil-apercu .af p{font-size:12.5px;color:var(--t3);display:flex;flex-wrap:wrap;gap:4px 10px}
rdr-accueil-apercu .af p span{display:inline-flex;align-items:center;gap:5px}
rdr-accueil-apercu .af p svg{width:13px;height:13px;color:var(--c)}
rdr-accueil-apercu .af p b{color:#fff;font-weight:700}
rdr-accueil-apercu .af-rel{position:absolute;right:14px;top:14px;font-size:9.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:4px 8px;border-radius:999px;background:rgba(252,241,80,.14);color:var(--jaune)}
rdr-accueil-apercu .vague-sep{position:relative;z-index:2;overflow:hidden;line-height:0;font-size:0;background:var(--avant);margin:-1px 0}
rdr-accueil-apercu .vague-sep svg{display:block;width:calc(100% + 120px);margin-left:-60px;height:clamp(34px,5vw,64px);animation:raa-houle 11s ease-in-out infinite alternate}
rdr-accueil-apercu .vague-sep path{fill:var(--apres)}
rdr-accueil-apercu .vague-sep path:first-child{fill-opacity:.34}
@keyframes raa-houle{from{translate:-40px 0}to{translate:40px 0}}
rdr-accueil-apercu .actus{position:relative;background:#0E111D;color:#fff;padding:60px 0 70px;overflow:hidden}
rdr-accueil-apercu .actus .filigrane{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:.45;pointer-events:none;-webkit-mask-image:linear-gradient(to bottom,#000 62%,transparent 96%);mask-image:linear-gradient(to bottom,#000 62%,transparent 96%)}
rdr-accueil-apercu .actus .trame{position:relative}
rdr-accueil-apercu .sec-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:26px}
rdr-accueil-apercu .sec-tete h2{font-size:clamp(34px,3.4vw,48px);line-height:1}
rdr-accueil-apercu .sec-tete .sous{margin-top:8px;font-size:13.5px;color:var(--t3)}
rdr-accueil-apercu .sec-tete .trait{margin-bottom:12px}
rdr-accueil-apercu .onglets{display:flex;gap:4px;padding:4px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid var(--filet)}
rdr-accueil-apercu .onglet{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 5px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--t2);transition:background .15s,color .15s}
rdr-accueil-apercu .onglet i{width:24px;height:24px;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;background:var(--bg);color:var(--c)}
rdr-accueil-apercu .onglet i svg{width:13px;height:13px}
rdr-accueil-apercu .onglet:hover{color:#0E111D;background:#fff}
rdr-accueil-apercu .actus-grille{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:14px;height:clamp(420px,50vh,520px)}
rdr-accueil-apercu .actus-grille > div{min-height:0}
rdr-accueil-apercu .actus-grille .carte{height:100%}
rdr-accueil-apercu .actus-droite{display:grid;grid-template-rows:1fr 1fr;gap:14px;min-height:0}
rdr-accueil-apercu .carte{position:relative;display:block;border-radius:18px;overflow:hidden;background:var(--panneau);min-height:0;opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s cubic-bezier(.22,.8,.3,1);border:1px solid rgba(255,255,255,.08)}
rdr-accueil-apercu .carte.est-la{opacity:1;transform:none}
rdr-accueil-apercu .carte img.cover{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
rdr-accueil-apercu .carte:hover img.cover{transform:scale(1.04)}
rdr-accueil-apercu .carte::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 32%);z-index:1}
rdr-accueil-apercu .carte::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,0) 38%,rgba(14,17,29,.62) 66%,rgba(14,17,29,.95) 100%);z-index:1}
rdr-accueil-apercu .carte-haut{position:absolute;left:16px;top:16px;right:16px;z-index:2;display:flex;gap:8px;align-items:center;justify-content:space-between}
rdr-accueil-apercu .cat{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;line-height:1;background:var(--bg,#DCF2EF);color:var(--c,#0B6E6B);padding:6px 9px;border-radius:6px}
rdr-accueil-apercu .cat svg{width:12px;height:12px}
rdr-accueil-apercu .glyphe{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:999px;background:rgba(14,17,29,.72);color:#fff;backdrop-filter:blur(4px)}
rdr-accueil-apercu .glyphe svg{width:16px;height:16px}
rdr-accueil-apercu .glyphe--grand{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:64px;height:64px;background:rgba(255,255,255,.92);color:#0E111D;z-index:2}
rdr-accueil-apercu .glyphe--grand svg{width:28px;height:28px}
rdr-accueil-apercu .carte:hover .glyphe--grand{background:var(--jaune)}
rdr-accueil-apercu .carte-txt{position:absolute;left:0;right:0;bottom:0;padding:18px;z-index:2;display:flex;flex-direction:column;gap:7px}
rdr-accueil-apercu .carte--une .carte-txt{padding:26px 28px;gap:10px;max-width:680px}
rdr-accueil-apercu .carte h3{font-family:var(--titre);font-style:italic;font-size:16px;line-height:1.15;text-transform:uppercase;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-accueil-apercu .carte--une h3{font-size:clamp(22px,2vw,30px);-webkit-line-clamp:3}
rdr-accueil-apercu .carte--une p{font-size:13.5px;line-height:1.5;color:var(--t2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-accueil-apercu .quand{font-size:11.5px;color:var(--t3)}
rdr-accueil-apercu .quand b{color:var(--jaune);font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:10.5px}
rdr-accueil-apercu .sujets{display:flex;gap:6px;flex-wrap:wrap}
rdr-accueil-apercu .sujet{display:inline-flex;align-items:center;padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.35);font-size:11px;font-weight:700;color:#fff;white-space:nowrap}
rdr-accueil-apercu .breves{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:14px}
rdr-accueil-apercu .breve{display:grid;grid-template-columns:96px 1fr;gap:14px;align-items:center;padding:10px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid var(--filet);transition:background .2s,transform .25s;opacity:0;transform:translateY(12px)}
rdr-accueil-apercu .breve.est-la{opacity:1;transform:none}
rdr-accueil-apercu .breve:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}
rdr-accueil-apercu .breve img{width:96px;height:80px;border-radius:10px;object-fit:cover}
rdr-accueil-apercu .breve h3{font-size:13px;font-weight:800;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-accueil-apercu .breve .cat{margin-bottom:6px;font-size:9.5px;padding:4px 7px}
rdr-accueil-apercu .breve .quand{display:block;margin-top:5px}
rdr-accueil-apercu .actus-pied{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:26px;flex-wrap:wrap}
rdr-accueil-apercu .sujet--moment{border-color:rgba(93,191,192,.6);color:var(--teal)}
rdr-accueil-apercu .skippers{position:relative;background:#0A1228;color:#fff;padding:clamp(80px,10vh,110px) 0 clamp(124px,15vh,168px);overflow:hidden}
rdr-accueil-apercu .skippers .topo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none}
rdr-accueil-apercu .skippers::before{content:'';position:absolute;left:0;right:0;top:0;height:160px;background:linear-gradient(#0E111D,rgba(14,17,29,0));pointer-events:none}
rdr-accueil-apercu .skippers .trame{position:relative}
rdr-accueil-apercu .skippers .sec-tete{align-items:center;text-align:center;flex-direction:column;margin-bottom:26px}
rdr-accueil-apercu .sk-liste{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px;padding-top:26px}
rdr-accueil-apercu .sk{position:relative;perspective:1000px;min-width:0;aspect-ratio:4/5}
rdr-accueil-apercu .sk-flip{position:relative;height:100%;transform-style:preserve-3d;transform:rotateY(180deg);transition:transform .7s cubic-bezier(.25,.46,.45,.94)}
rdr-accueil-apercu .sk-flip.est-la{transform:rotateY(0) rotate(var(--rot,0deg))}
rdr-accueil-apercu .sk:hover .sk-flip.est-la{transform:rotateY(0) rotate(0) translateY(-6px) scale(1.02);transition:transform .35s cubic-bezier(.34,1.2,.64,1)}
rdr-accueil-apercu .sk-face{position:absolute;inset:0;border-radius:28px 3px 16px 3px;backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;background:#0f2238;border:1.5px solid transparent;transition:box-shadow .3s,border-color .3s;box-shadow:0 20px 40px rgba(0,0,0,.45)}
rdr-accueil-apercu .sk:hover .sk-front{border-color:var(--cc);box-shadow:0 0 0 1px var(--cc),0 20px 50px rgba(0,0,0,.5)}
rdr-accueil-apercu .sk-front::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--cc);opacity:.4}
rdr-accueil-apercu .sk-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .4s}
rdr-accueil-apercu .sk:hover .sk-img{transform:scale(1.07)}
rdr-accueil-apercu .sk-ov{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:44px 14px 16px;background:linear-gradient(to top,rgba(6,14,26,1) 0%,rgba(6,14,26,.92) 40%,rgba(6,14,26,.55) 70%,transparent 100%);color:#fff}
rdr-accueil-apercu .sk-prenom{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.7);margin-bottom:3px;white-space:nowrap;overflow:hidden}
rdr-accueil-apercu .sk-prenom img{width:18px;height:18px;border-radius:50%;object-fit:cover;flex:none}
rdr-accueil-apercu .sk-nom{font-family:var(--titre);font-style:italic;font-size:clamp(20px,1.8vw,28px);text-transform:uppercase;line-height:.9;margin-bottom:5px;text-wrap:balance}
rdr-accueil-apercu .sk-bateau{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--cc);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
rdr-accueil-apercu .sk-back{transform:rotateY(180deg);background:linear-gradient(135deg,rgba(255,255,255,.06),#0a0f1e)}
rdr-accueil-apercu .sk-classe{position:absolute;top:-30px;right:-8px;z-index:20;pointer-events:none}
rdr-accueil-apercu .sk-classe img{height:clamp(72px,6.5vw,100px);width:auto}
rdr-accueil-apercu .classes{display:flex;justify-content:center;align-items:flex-end;gap:clamp(12px,2vw,30px);margin-top:48px}
rdr-accueil-apercu .classe{display:flex;flex-direction:column;align-items:center;gap:6px;transition:transform .35s cubic-bezier(.25,0,0,1)}
rdr-accueil-apercu .classe img{display:block;height:clamp(72px,7vw,96px);width:auto;filter:drop-shadow(0 14px 20px rgba(0,0,0,.4))}
rdr-accueil-apercu .classe:hover{transform:translateY(-8px)}
rdr-accueil-apercu .classe b{font-family:var(--titre);font-style:italic;font-weight:400;font-size:24px;line-height:1;color:var(--cc);letter-spacing:0}
rdr-accueil-apercu .classe small{font-size:9.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--t3)}
rdr-accueil-apercu .skippers .sec-pied{display:flex;justify-content:center;margin-top:40px}
rdr-accueil-apercu .espace{position:relative;background:#F4F1E8;padding:clamp(70px,9vh,100px) 0 clamp(120px,15vh,150px);overflow:hidden;clip-path:inset(0)}
rdr-accueil-apercu .espace .trame{position:relative;z-index:1}
rdr-accueil-apercu .espace{--promo-h:clamp(370px,46vh,420px)}
rdr-accueil-apercu[data-liaison="sillage"] .espace{--air-haut:clamp(124px,16vh,176px);--nuit-haut:calc(var(--air-haut) + var(--promo-h) / 2);padding-top:var(--air-haut)}
rdr-accueil-apercu[data-liaison="sillage"] .espace::before{content:'';position:absolute;left:0;right:0;top:0;height:var(--nuit-haut);background:#0A1228;z-index:0}
rdr-accueil-apercu .espace::after{content:'';position:absolute;inset:0;z-index:0;background:#16355D;opacity:.06;pointer-events:none;-webkit-mask:var(--topo) repeat center top/1200px auto;mask:var(--topo) repeat center top/1200px auto}
rdr-accueil-apercu[data-liaison="sillage"] .promo{box-shadow:0 30px 70px rgba(10,18,40,.35),0 34px 80px rgba(232,108,32,.22)}
rdr-accueil-apercu .promo{position:relative;border-radius:26px;background:radial-gradient(90% 120% at 0% 0%,#F4A23A 0%,rgba(244,162,58,0) 58%),linear-gradient(118deg,#EF8A2B 0%,#E86C20 46%,#DB5710 100%);color:#fff;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);min-height:var(--promo-h);box-shadow:0 34px 80px rgba(232,108,32,.3)}
rdr-accueil-apercu .promo::before{content:'';position:absolute;inset:0;border-radius:inherit;opacity:.5;pointer-events:none;background:repeating-linear-gradient(128deg,rgba(255,255,255,.07) 0 150px,rgba(255,255,255,0) 150px 330px)}
rdr-accueil-apercu .promo-txt{padding:58px 62px;display:flex;flex-direction:column;gap:14px;justify-content:center;position:relative;z-index:2}
rdr-accueil-apercu .promo .kicker{background:none;padding:0;color:#fff;font-size:13px;font-weight:700;letter-spacing:.06em}
rdr-accueil-apercu .promo h2{font-size:clamp(40px,4.4vw,66px);line-height:.9;color:#fff;text-shadow:0 4px 20px rgba(80,24,0,.18)}
rdr-accueil-apercu .promo h2 em{font-style:inherit;color:var(--jaune)}
rdr-accueil-apercu .promo p{font-size:15px;line-height:1.55;max-width:540px;color:#fff;font-weight:600}
rdr-accueil-apercu .promo-btns{display:flex;gap:14px 22px;flex-wrap:wrap;align-items:center;margin-top:10px}
rdr-accueil-apercu .cta-rhum{display:inline-flex;align-items:center;gap:10px;min-height:50px;padding:0 22px;border-radius:12px 3px 12px 3px;background:var(--jaune);color:#13204A;font:italic 400 19px/1 var(--titre);text-transform:uppercase;text-decoration:none;white-space:nowrap;box-shadow:0 12px 24px -12px rgba(80,24,0,.7);transition:transform .2s ease,box-shadow .2s ease}
rdr-accueil-apercu .cta-rhum svg{width:18px;height:18px;flex:none;transition:transform .2s ease}
rdr-accueil-apercu .cta-rhum:hover{transform:translateY(-2px);box-shadow:0 16px 28px -12px rgba(80,24,0,.8)}
rdr-accueil-apercu .cta-rhum:hover svg{transform:translateX(3px)}
rdr-accueil-apercu .lien-rhum{color:#fff;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-decoration:underline;text-underline-offset:5px;text-decoration-color:rgba(255,255,255,.5)}
rdr-accueil-apercu .lien-rhum:hover{text-decoration-color:#fff}
rdr-accueil-apercu .cta-rhum:focus-visible,rdr-accueil-apercu .lien-rhum:focus-visible{outline:3px solid #13204A;outline-offset:3px}
rdr-accueil-apercu .promo-visuel{position:relative;border-radius:0 26px 26px 0;overflow:visible}
rdr-accueil-apercu .promo-visuel .photo{position:absolute;inset:0;border-radius:0 26px 26px 0;overflow:hidden}
rdr-accueil-apercu .promo-visuel .photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top}
rdr-accueil-apercu .promo-visuel .photo::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#E4661C 0%,rgba(228,102,28,0) 45%);z-index:1}
rdr-accueil-apercu .pub-encart{--pub-hmax:clamp(240px,56vh,470px);position:relative;z-index:1;display:block;width:min(100%,calc(var(--pub-hmax) * var(--pub-ratio,3)));margin:var(--pub-haut) auto 0}
rdr-accueil-apercu .pub-encart[hidden]{display:none}
rdr-accueil-apercu .pub-cadre{position:relative;aspect-ratio:var(--pub-ratio,3);border-radius:22px;overflow:hidden;background:#0A1228;box-shadow:0 30px 70px -18px rgba(10,18,40,.4),0 10px 24px -12px rgba(10,18,40,.25)}
rdr-accueil-apercu .espace{--pub-haut:clamp(132px,16vh,176px);--pub-bas:clamp(120px,15vh,160px)}
@supports (overflow:clip){
rdr-accueil-apercu .espace{overflow:clip}
}
rdr-accueil-apercu .espace:has(.pub-encart:not([hidden])){padding-bottom:var(--pub-bas)}
rdr-accueil-apercu .pub-encart a,rdr-accueil-apercu .pub-encart picture{display:block;width:100%;height:100%}
rdr-accueil-apercu .pub-encart img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .pub-encart a:hover img{transform:scale(1.02)}
rdr-accueil-apercu .pub-encart a:focus-visible{outline:3px solid var(--teal);outline-offset:-3px}
@keyframes raa-flotte{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
rdr-accueil-apercu .tymal{position:relative;background:var(--jaune);color:#0E111D;padding:clamp(100px,12vh,130px) 0 clamp(104px,13vh,136px);overflow:hidden;clip-path:inset(0)}
rdr-accueil-apercu .tymal .elem{position:absolute;left:-160px;bottom:-140px;width:640px;height:440px;object-fit:contain;opacity:.55;pointer-events:none;transform:rotate(12deg)}
rdr-accueil-apercu .tymal .trame{position:relative;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:50px;align-items:center}
rdr-accueil-apercu .tymal h2{font-size:clamp(32px,3.2vw,46px);line-height:1}
rdr-accueil-apercu .tymal p{margin-top:16px;font-size:15px;line-height:1.6;max-width:540px;font-weight:500}
rdr-accueil-apercu .tymal .btns{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
rdr-accueil-apercu .tymal .kicker{margin-bottom:14px}
rdr-accueil-apercu .faq-bloc[hidden]{display:none}
rdr-accueil-apercu .faq-acc{--encre:#0E111D;--encre2:#3A4256;--encre3:#6B7285;--papier:#F4F1E8;position:relative;overflow:clip;background:var(--papier);color:var(--encre);padding:clamp(56px,8vh,96px) 0 clamp(64px,10vh,112px)}
rdr-accueil-apercu .fa-topo{position:absolute;inset:0;background:#16355D;opacity:.06;pointer-events:none;-webkit-mask:var(--topo) repeat center top/1200px auto;mask:var(--topo) repeat center top/1200px auto}
rdr-accueil-apercu .faq-acc .trame{position:relative;z-index:1}
rdr-accueil-apercu .faq-acc:not(.fa-vu) .fa-q{opacity:0}
rdr-accueil-apercu .faq-acc.fa-vu .fa-q{animation:raa-fa-monte .6s cubic-bezier(.22,.8,.3,1) both;animation-delay:calc(var(--i,0) * 70ms)}
@keyframes raa-fa-monte{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .fa-rub{flex:none;display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--papier);color:var(--encre3);font-size:10.5px;font-style:normal;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
rdr-accueil-apercu .fa-rub::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--cc)}
rdr-accueil-apercu .fa-corps{max-width:980px;margin:0 auto}
rdr-accueil-apercu .fa-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding-bottom:16px;border-bottom:2px solid var(--encre)}
rdr-accueil-apercu .fa-fil{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--encre3)}
rdr-accueil-apercu .fa-fil b{color:var(--encre);font-weight:800}
rdr-accueil-apercu .fa-tete h2 em{display:block;font-style:inherit}
rdr-accueil-apercu .fa-tete h2{margin-top:10px;font-size:clamp(28px,3vw,42px);line-height:.95;color:var(--encre)}
rdr-accueil-apercu .fa-toutes{flex:none;display:inline-flex;align-items:center;justify-content:space-between;gap:14px;height:54px;padding:0 10px 0 22px;border-radius:14px;background:var(--encre);color:var(--jaune);font-size:15px;font-weight:800;box-shadow:0 16px 30px -14px rgba(14,17,29,.55);transition:transform .2s,box-shadow .2s}
rdr-accueil-apercu .fa-toutes:hover{transform:translateY(-2px);box-shadow:0 20px 36px -14px rgba(14,17,29,.6)}
rdr-accueil-apercu .fa-toutes i{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:var(--jaune);color:var(--encre)}
rdr-accueil-apercu .fa-toutes i svg{width:18px;height:18px;transition:transform .2s}
rdr-accueil-apercu .fa-toutes:hover i svg{transform:translateX(3px)}
rdr-accueil-apercu .fa-toutes--bas{display:none}
rdr-accueil-apercu .fa-cherche{display:flex;align-items:center;height:56px;margin-top:22px;padding:0 7px 0 18px;border-radius:16px;background:#fff;color:var(--encre);box-shadow:0 1px 0 rgba(14,17,29,.06),0 10px 24px -18px rgba(14,17,29,.35);transition:box-shadow .25s}
rdr-accueil-apercu .fa-cherche:focus-within{box-shadow:0 0 0 4px rgba(252,241,80,.7),0 14px 30px -18px rgba(14,17,29,.4)}
rdr-accueil-apercu .fa-cherche > svg{flex:none;width:19px;height:19px;color:var(--encre3)}
rdr-accueil-apercu .fa-cherche input{flex:1;min-width:0;height:100%;padding:0 12px;border:0;background:none;outline:none;color:var(--encre);font:600 15.5px var(--police)}
rdr-accueil-apercu .fa-cherche input::placeholder{color:var(--encre3);font-weight:500}
rdr-accueil-apercu .fa-cherche button{flex:none;display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:11px;background:var(--jaune);color:var(--encre);cursor:pointer}
rdr-accueil-apercu .fa-cherche button svg{width:18px;height:18px}
rdr-accueil-apercu .fa-liste{margin-top:14px}
rdr-accueil-apercu .fa-q{--cc:var(--teal);position:relative;border-radius:14px;background:#fff;box-shadow:0 1px 0 rgba(14,17,29,.06),0 10px 24px -18px rgba(14,17,29,.35);transition:box-shadow .3s}
rdr-accueil-apercu .fa-q + .fa-q{margin-top:8px}
rdr-accueil-apercu .fa-q::before{content:'';position:absolute;left:0;top:12px;bottom:12px;width:4px;border-radius:0 3px 3px 0;background:var(--cc);transition:top .3s,bottom .3s}
rdr-accueil-apercu .fa-q[open]{box-shadow:0 1px 0 rgba(14,17,29,.08),0 22px 40px -24px rgba(14,17,29,.5)}
rdr-accueil-apercu .fa-q[open]::before{top:0;bottom:0;border-radius:14px 0 0 14px}
rdr-accueil-apercu .fa-q summary{display:flex;align-items:center;gap:14px;padding:14px 14px 14px 22px;border-radius:14px;cursor:pointer;list-style:none}
rdr-accueil-apercu .fa-q summary::-webkit-details-marker{display:none}
rdr-accueil-apercu .fa-q summary:focus-visible{outline:3px solid var(--encre);outline-offset:3px}
rdr-accueil-apercu .fa-q summary b{flex:1;font-size:15px;font-weight:800;line-height:1.35}
rdr-accueil-apercu .fa-q summary i{flex:none;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--papier);transition:transform .35s,background .25s}
rdr-accueil-apercu .fa-q summary i svg{width:15px;height:15px}
rdr-accueil-apercu .fa-q[open] summary i{transform:rotate(180deg);background:var(--cc)}
rdr-accueil-apercu .fa-rep{padding:0 22px 16px;color:var(--encre2);font-size:14.5px;line-height:1.65}
rdr-accueil-apercu .fa-q[open] .fa-rep{animation:raa-fa-ouvre .3s ease both}
@keyframes raa-fa-ouvre{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .fa-rep p + p{margin-top:6px}
rdr-accueil-apercu .fa-rep b{color:var(--encre);font-weight:800}
rdr-accueil-apercu .fa-rep sup{font-size:.65em;line-height:0}
rdr-accueil-apercu .fa-rep a{color:var(--encre);font-weight:700;text-decoration:underline;text-decoration-color:var(--cc);text-decoration-thickness:3px;text-underline-offset:4px}
rdr-accueil-apercu .fa-rep .fa-source{display:flex;width:fit-content;align-items:center;gap:8px;margin-top:12px;padding:7px 13px 7px 15px;border-radius:999px;background:var(--encre);color:#fff;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s}
rdr-accueil-apercu .fa-rep .fa-source svg{width:14px;height:14px;color:var(--jaune);transition:transform .2s}
rdr-accueil-apercu .fa-rep .fa-source:hover{background:#1f2640}
rdr-accueil-apercu .fa-rep .fa-source:hover svg{transform:translate(2px,-2px)}
rdr-accueil-apercu .fa-valider{display:inline-block;margin-right:7px;padding:3px 8px;border-radius:6px;background:rgba(241,159,57,.18);color:#B45A00;font-size:11px;font-weight:800;letter-spacing:.06em;line-height:1.3;text-transform:uppercase}
rdr-accueil-apercu .hv-haut{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px}
rdr-accueil-apercu .hv-depart{display:inline-flex;align-items:center;gap:7px;padding:6px 10px 5px;border-radius:6px;background:var(--jaune);color:#0E111D;font-family:var(--titre);font-style:italic;font-size:clamp(11px,1.02vw,14.5px);line-height:1;text-transform:uppercase}
rdr-accueil-apercu .hv-depart svg{width:13px;height:13px;flex:none}
rdr-accueil-apercu .hv-depart-court{display:none}
@media (max-width:560px){
rdr-accueil-apercu .hv-depart-long{display:none}
rdr-accueil-apercu .hv-depart-court{display:inline}
}
rdr-accueil-apercu .hv-fait--depart{--c:#fff}
rdr-accueil-apercu .hv-depart sup,rdr-accueil-apercu .hv-fait--depart sup{font-size:.62em;line-height:0;vertical-align:.55em;margin-left:1px}
rdr-accueil-apercu .video{position:relative;padding:0 40px 0 0}
rdr-accueil-apercu .video-cadre{position:relative;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:#0E111D;box-shadow:0 30px 56px -14px rgba(0,0,0,.34);transform:rotate(1.5deg);border:6px solid #fff}
rdr-accueil-apercu .video-cadre img,rdr-accueil-apercu .video-cadre iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}
rdr-accueil-apercu .video-cadre button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:84px;height:84px;border-radius:50%;border:0;background:var(--jaune);color:#0E111D;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 20px 40px rgba(0,0,0,.4);transition:transform .2s}
rdr-accueil-apercu .video-cadre button:hover{transform:translate(-50%,-50%) scale(1.08)}
rdr-accueil-apercu .video-cadre button svg{width:34px;height:34px;margin-left:5px}
rdr-accueil-apercu .video-cadre .duree{position:absolute;right:18px;bottom:16px;padding:6px 10px;border-radius:6px;background:rgba(14,17,29,.75);color:#fff;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
rdr-accueil-apercu .video-cadre .vc-cookies{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;padding:clamp(12px,3vw,26px);text-align:center;background:linear-gradient(rgba(14,17,29,.84),rgba(14,17,29,.93))}
rdr-accueil-apercu .video-cadre .vc-cookies .vc-ico{width:26px;height:26px;stroke:var(--jaune);fill:none;stroke-width:1.7;stroke-linecap:round}
rdr-accueil-apercu .video-cadre .vc-cookies b{color:#fff;font-size:clamp(13px,1.5vw,17px);font-weight:800}
rdr-accueil-apercu .video-cadre .vc-cookies p{margin:0;max-width:36ch;color:rgba(255,255,255,.84);font-size:clamp(11.5px,1.15vw,13.5px);line-height:1.5}
rdr-accueil-apercu .video-cadre .vc-cookies button{position:static;left:auto;top:auto;transform:none;width:auto;height:auto;min-height:38px;padding:9px 18px;border-radius:999px;background:var(--jaune);color:#0E111D;font-size:13px;font-weight:800;letter-spacing:.02em}
rdr-accueil-apercu .video-cadre .vc-cookies button:hover{transform:translateY(-1px)}
rdr-accueil-apercu .video-cadre .vc-cookies button svg{display:none}
rdr-accueil-apercu .video-cadre .vc-cookies a{color:rgba(255,255,255,.86);font-size:12px;text-decoration:underline;text-underline-offset:3px}
rdr-accueil-apercu .video-cadre .vc-cookies a:hover{color:#fff}
@media (max-width:760px){
rdr-accueil-apercu .video-cadre .vc-cookies{gap:7px}
rdr-accueil-apercu .video-cadre .vc-cookies .vc-ico{display:none}
rdr-accueil-apercu .video-cadre .vc-cookies p{max-width:30ch}
}
rdr-accueil-apercu .video-tymal{position:absolute;left:-70px;bottom:-60px;width:230px;filter:drop-shadow(0 20px 30px rgba(0,0,0,.25));transform:rotate(-6deg)}
rdr-accueil-apercu .sep{position:relative;z-index:4;line-height:0}
rdr-accueil-apercu .sep > div{display:none}
rdr-accueil-apercu[data-liaison="sillage"] .sep--liaison .sep-sillage{display:block}
rdr-accueil-apercu .sep-sillage{position:relative;height:150px;background:var(--avant);overflow:hidden;transform:scaleX(-1)}
rdr-accueil-apercu .sep-sillage .sl-port b{transform:scaleX(-1)}
rdr-accueil-apercu .sl-svg{position:absolute;left:0;top:0;width:100%;height:100%;display:block;overflow:visible}
rdr-accueil-apercu .sl-reste{fill:none;stroke:rgba(255,255,255,.24);stroke-width:1.5;stroke-dasharray:6 7}
rdr-accueil-apercu .sl-fait{fill:none;stroke:var(--jaune);stroke-width:2.5;stroke-linecap:round;stroke-dasharray:1000;stroke-dashoffset:0;animation:raa-sl-trace 12s linear infinite}
@keyframes raa-sl-trace{0%{stroke-dashoffset:1000;opacity:1}72%{stroke-dashoffset:0;opacity:1}90%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:0;opacity:0}}
rdr-accueil-apercu .sl-bateau{position:absolute;left:0;top:0;width:100px;offset-anchor:51% 88%;offset-rotate:auto;offset-distance:100%;animation:raa-sl-vogue 12s linear infinite;filter:drop-shadow(0 4px 6px rgba(0,0,0,.35))}
rdr-accueil-apercu .sl-bateau svg{display:block;width:100%;height:auto;transform-origin:51% 88%;animation:raa-sl-tangue 3.4s ease-in-out infinite}
@keyframes raa-sl-vogue{0%{offset-distance:0%;opacity:0}3%{opacity:1}72%{offset-distance:100%;opacity:1}90%{offset-distance:100%;opacity:1}100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl-tangue{0%,100%{transform:rotate(-1.2deg) translateY(0)}50%{transform:rotate(1deg) translateY(-1px)}}
rdr-accueil-apercu .sl-port{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%}
rdr-accueil-apercu .sl-port b{position:absolute;top:18px;white-space:nowrap;font:800 10px/1 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--t2)}
rdr-accueil-apercu .sl-port--dep{background:var(--teal)}
rdr-accueil-apercu .sl-port--dep b{left:-5px}
rdr-accueil-apercu .sl-port--dep::after{content:'';position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--teal);opacity:0;animation:raa-sl-pouls 2.2s ease-out infinite}
@keyframes raa-sl-pouls{from{transform:scale(.6);opacity:.9}to{transform:scale(2.4);opacity:0}}
rdr-accueil-apercu .sl-port--arr{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4);animation:raa-sl-arrivee 12s linear infinite}
rdr-accueil-apercu .sl-port--arr b{right:-5px}
@keyframes raa-sl-arrivee{0%,70%{background:rgba(252,241,80,.4);box-shadow:0 0 0 0 rgba(252,241,80,0),0 0 0 0 rgba(252,241,80,0)}73%,92%{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4)}100%{background:rgba(252,241,80,.4);box-shadow:0 0 0 0 rgba(252,241,80,0),0 0 0 0 rgba(252,241,80,0)}}
rdr-accueil-apercu .sl-milles{position:absolute;left:50%;transform:translateX(-50%) scaleX(-1);font-family:var(--titre);font-style:italic;font-size:13px;line-height:1;letter-spacing:.02em;color:rgba(255,255,255,.55);white-space:nowrap}
rdr-accueil-apercu .sep-sillage.avec-flotte .sl-fait{animation:raa-sl-trace-f 16s linear infinite}
@keyframes raa-sl-trace-f{0%{stroke-dashoffset:1000;opacity:1}50%{stroke-dashoffset:0;opacity:1}84%{stroke-dashoffset:0;opacity:1}94%,100%{stroke-dashoffset:0;opacity:0}}
rdr-accueil-apercu .sep-sillage.avec-flotte .sl-port--arr{animation:raa-sl-arrivee-f 16s linear infinite}
@keyframes raa-sl-arrivee-f{0%,48%,55%,56%,63%,64%,71%,72%,79%,100%{background:rgba(252,241,80,.4);box-shadow:0 0 0 0 rgba(252,241,80,0),0 0 0 0 rgba(252,241,80,0)}50%,53%,58%,61%,66%,69%,74%,77%{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4)}}
rdr-accueil-apercu .sep-sillage.avec-flotte .sl-bateau--ultim{width:clamp(72px,7vw,100px);animation:raa-sl-f-ultim 16s linear infinite}
@keyframes raa-sl-f-ultim{0%{offset-distance:0%;opacity:0}2%{opacity:1}50%{offset-distance:100%;opacity:1}51.5%{opacity:1}54%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-bateau--o50{width:clamp(46px,4.4vw,62px);animation:raa-sl-f-o50 16s linear infinite}
rdr-accueil-apercu .sl-bateau--o50 svg{animation-duration:3.1s}
@keyframes raa-sl-f-o50{0%,4%{offset-distance:0%;opacity:0}6%{opacity:1}58%{offset-distance:100%;opacity:1}59.5%{opacity:1}62%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-bateau--imoca{width:clamp(46px,4.5vw,64px);offset-anchor:51% 87%;animation:raa-sl-f-imoca 16s linear infinite}
rdr-accueil-apercu .sl-bateau--imoca svg{transform-origin:51% 87%;animation-duration:2.8s}
@keyframes raa-sl-f-imoca{0%,8%{offset-distance:0%;opacity:0}10%{opacity:1}66%{offset-distance:100%;opacity:1}67.5%{opacity:1}70%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl-f-imoca-tel{0%,10%{offset-distance:0%;opacity:0}12%{opacity:1}66%{offset-distance:100%;opacity:1}67.5%{opacity:1}70%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-bateau--c40{width:clamp(38px,3.6vw,52px);offset-anchor:51% 80%;animation:raa-sl-f-c40 16s linear infinite}
rdr-accueil-apercu .sl-bateau--c40 svg{transform-origin:51% 80%;animation-duration:2.4s}
@keyframes raa-sl-f-c40{0%,12%{offset-distance:0%;opacity:0}14%{opacity:1}74%{offset-distance:100%;opacity:1}75.5%{opacity:1}78%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl-f-c40-tel{0%,18%{offset-distance:0%;opacity:0}20%{opacity:1}76%{offset-distance:100%;opacity:1}77.5%{opacity:1}80%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl-arrivee-f-tel{0%,48%,55%,64%,71%,74%,81%,100%{background:rgba(252,241,80,.4);box-shadow:0 0 0 0 rgba(252,241,80,0),0 0 0 0 rgba(252,241,80,0)}50%,53%,66%,69%,76%,79%{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4)}}
@media (prefers-reduced-motion:reduce){
rdr-accueil-apercu .sl-suiveur{display:none}
}
rdr-accueil-apercu .bil-rail{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;padding-top:14px}
rdr-accueil-apercu .bil{--x:86px;position:relative;display:grid;grid-template-columns:var(--x) minmax(0,1fr);min-height:132px;color:#fff;filter:drop-shadow(0 18px 26px rgba(0,0,0,.35));transition:transform .3s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .bil:nth-child(4n+1){--c:var(--teal)}
rdr-accueil-apercu .bil:nth-child(4n+2){--c:var(--jaune)}
rdr-accueil-apercu .bil:nth-child(4n+3){--c:#8B86E0}
rdr-accueil-apercu .bil:nth-child(4n+4){--c:var(--or)}
rdr-accueil-apercu .bil:hover{transform:translateY(-4px)}
rdr-accueil-apercu .bil::before,rdr-accueil-apercu .bil::after{content:'';position:absolute;left:calc(var(--x) - 9px);width:18px;height:18px;border-radius:50%;background:#0E111D;z-index:3}
rdr-accueil-apercu .bil::before{top:-9px}
rdr-accueil-apercu .bil::after{bottom:-9px}
rdr-accueil-apercu .bil-talon{background:var(--c);color:#0E111D;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border-radius:14px 0 0 14px;transform-origin:100% 50%;transition:transform .35s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .bil:hover .bil-talon{transform:rotate(-5deg) translateX(-4px)}
rdr-accueil-apercu .bil-talon b{font-family:var(--titre);font-style:italic;font-size:46px;line-height:.85}
rdr-accueil-apercu .bil-talon span{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
rdr-accueil-apercu .bil-talon em{font-style:normal;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.65}
rdr-accueil-apercu .bil-corps{position:relative;background:linear-gradient(135deg,#222C48,#171F38);border-radius:0 14px 14px 0;padding:16px 46px 14px 18px;display:flex;flex-direction:column;gap:6px;border-left:2px dashed rgba(255,255,255,.3);overflow:hidden}
rdr-accueil-apercu .bil-corps::after{content:'';position:absolute;right:14px;top:16px;bottom:16px;width:16px;opacity:.3;background:repeating-linear-gradient(180deg,#fff 0 2px,transparent 2px 4px,#fff 4px 5px,transparent 5px 8px,#fff 8px 11px,transparent 11px 13px)}
rdr-accueil-apercu .bil-type{font-size:9.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--c)}
rdr-accueil-apercu .bil h3{font-size:15.5px;font-weight:800;line-height:1.2;text-wrap:balance}
rdr-accueil-apercu .bil p{font-size:12px;color:var(--t3);display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:auto}
rdr-accueil-apercu .bil p span{display:inline-flex;align-items:center;gap:5px}
rdr-accueil-apercu .bil p b{color:#fff;font-weight:700}
rdr-accueil-apercu .bil p svg{width:13px;height:13px;color:var(--c)}
rdr-accueil-apercu .bil-tampon{position:absolute;right:36px;top:10px;transform:rotate(-8deg);border:2px solid var(--jaune);color:var(--jaune);border-radius:6px;padding:3px 7px;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
rdr-accueil-apercu .pv-pile{position:absolute;inset:0;z-index:3;pointer-events:none}
rdr-accueil-apercu .pv-flotte{animation:raa-flotte 5s ease-in-out infinite}
rdr-accueil-apercu .pv-micro{display:inline-flex;align-items:center;gap:6px;font-size:9.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .pv-badge{position:absolute;left:28px;top:30px;display:flex;align-items:center;gap:14px;padding:12px 18px 12px 12px;border-radius:18px;background:rgba(14,17,29,.84);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 20px 40px rgba(14,17,29,.35);color:#fff;animation-delay:-1.4s}
rdr-accueil-apercu .pv-medaille{position:relative;width:58px;height:58px;flex:none}
rdr-accueil-apercu .pv-anneau{position:absolute;inset:0;width:100%;height:100%}
rdr-accueil-apercu .pv-arc{animation:raa-arc 6s cubic-bezier(.4,0,.2,1) infinite}
@keyframes raa-arc{0%{stroke-dashoffset:100}78%,90%{stroke-dashoffset:0}100%{stroke-dashoffset:100}}
rdr-accueil-apercu .pv-medaille span.avec-art{inset:6px;background:#0E111D}
rdr-accueil-apercu .pv-medaille span img{display:block;width:100%;height:100%;object-fit:contain}
rdr-accueil-apercu .pv-medaille span{transition:opacity .28s ease,transform .28s ease}
rdr-accueil-apercu .pv-badge.est-change .pv-medaille span{opacity:0;transform:translateY(4px)}
rdr-accueil-apercu .pv-medaille span{position:absolute;inset:10px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#2B3D6B,#0E111D);display:flex;align-items:center;justify-content:center;color:var(--jaune);box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
rdr-accueil-apercu .pv-medaille span svg{width:18px;height:18px}
rdr-accueil-apercu .pv-badge .pv-micro{color:var(--teal)}
rdr-accueil-apercu .pv-badge b{display:block;font-size:13.5px;font-weight:800;margin-top:4px;line-height:1.25}
rdr-accueil-apercu .pv-badge small{display:block;font-size:11px;color:var(--t2);font-weight:600;margin-top:2px}
rdr-accueil-apercu .pv-badge > i{color:var(--t3);margin-left:4px}
rdr-accueil-apercu .pv-badge > i svg{width:16px;height:16px}
rdr-accueil-apercu .pv-top{position:absolute;right:26px;top:24px;width:174px;padding:12px 14px;border-radius:16px;background:#fff;color:#0E111D;box-shadow:0 24px 50px rgba(14,17,29,.3);animation-delay:-3s}
rdr-accueil-apercu .pv-top .pv-micro{color:#5b6477}
rdr-accueil-apercu .pv-podium{display:flex;align-items:flex-end;gap:5px;height:56px;margin-top:10px}
rdr-accueil-apercu .pv-podium i{position:relative;flex:1;height:var(--h);display:flex;align-items:flex-end;justify-content:center;padding-bottom:5px;font-style:normal}
rdr-accueil-apercu .pv-podium i::before{content:'';position:absolute;inset:0;border-radius:6px 6px 2px 2px;background:linear-gradient(180deg,#F5A23C,#FF7A3D);transform-origin:bottom;animation:raa-pousse 4s ease-in-out infinite}
rdr-accueil-apercu .pv-podium i:nth-child(2)::before{background:#0E111D;animation-delay:-1s}
rdr-accueil-apercu .pv-podium i:nth-child(3)::before{animation-delay:-2s}
rdr-accueil-apercu .pv-podium b{position:relative;font-family:var(--titre);font-style:italic;font-size:16px;line-height:1;color:#fff}
@keyframes raa-pousse{0%,100%{transform:scaleY(.86)}50%{transform:scaleY(1)}}
rdr-accueil-apercu .pv-top small{display:block;font-size:10px;color:#5b6477;margin-top:6px;font-weight:600}
rdr-accueil-apercu .pv-skipper{position:absolute;right:clamp(150px,30%,230px);bottom:-38px;width:178px;aspect-ratio:4/5;transform:rotate(-4deg);filter:drop-shadow(0 30px 40px rgba(14,17,29,.4))}
rdr-accueil-apercu .pv-sk{position:absolute;inset:0;border-radius:28px 3px 16px 3px;overflow:hidden;background:#0f2238;border:2px solid rgba(255,255,255,.75);opacity:0;transform:scale(.94) rotate(3deg);transition:opacity .7s ease,transform .8s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .pv-sk.est-active{opacity:1;transform:none}
rdr-accueil-apercu .pv-sk > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center}
rdr-accueil-apercu .pv-sk > img.pv-sk-classe{inset:auto;right:6px;top:-2px;width:auto;height:64px;object-fit:contain;z-index:2}
rdr-accueil-apercu .pv-sk-ov{position:absolute;left:0;right:0;bottom:0;padding:36px 12px 12px;background:linear-gradient(to top,rgba(6,14,26,1),rgba(6,14,26,.86) 45%,transparent);color:#fff}
rdr-accueil-apercu .pv-sk-ov .pv-micro{color:#fff;letter-spacing:.12em;white-space:nowrap}
rdr-accueil-apercu .pv-sk-ov .pv-micro svg{width:11px;height:11px;color:#E63946}
rdr-accueil-apercu .pv-sk-ov b{display:block;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:7px}
rdr-accueil-apercu .pv-sk-ov strong{display:block;font-family:var(--titre);font-style:italic;font-weight:400;font-size:22px;line-height:.95;text-transform:uppercase;text-wrap:balance;margin-top:2px}
rdr-accueil-apercu .pv-sk-ov small{display:block;font-size:9.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cc);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@media (min-width:761px) and (max-width:1500px){
rdr-accueil-apercu{--marge:clamp(40px,3.4vw,52px)}
rdr-accueil-apercu .cta-liste{gap:22px}
rdr-accueil-apercu .actus{padding:72px 0 84px}
rdr-accueil-apercu .actus-grille{gap:18px}
rdr-accueil-apercu .breves{gap:18px;margin-top:18px}
rdr-accueil-apercu .sk-liste{gap:18px}
rdr-accueil-apercu .af-rail{gap:20px}
rdr-accueil-apercu .bil-rail{gap:22px}
rdr-accueil-apercu .affiche{padding:32px 0 76px}
rdr-accueil-apercu .promo-txt{padding:56px 58px}
rdr-accueil-apercu .promo p{font-size:14px}
}
@media (min-width:761px) and (max-width:1660px){
rdr-accueil-apercu .hero[data-acces="sous"]{--bas-titre:112px}
rdr-accueil-apercu .hv-contenu .hv-ligne{padding-left:max(var(--marge),68px)}
}
@media (max-height:820px){
rdr-accueil-apercu{--haut-acces:clamp(172px,24vh,200px);--bas-titre:calc(var(--haut-acces) + 48px)}
rdr-accueil-apercu .hv-titre{gap:12px}
rdr-accueil-apercu .hv-titre h2{font-size:clamp(30px,min(4.6vw,7.2vh),60px)}
rdr-accueil-apercu .hv-fait{padding:5px 15px 5px 12px}
rdr-accueil-apercu .hv-v{font-size:clamp(20px,1.75vw,25px)}
rdr-accueil-apercu .hv-acces{bottom:22px}
rdr-accueil-apercu .hv-nav button{width:18px;height:18px}
rdr-accueil-apercu .cta-txt{padding:18px 20px 20px}
rdr-accueil-apercu .cta-num{font-size:36px}
rdr-accueil-apercu .cta-ico{width:40px;height:40px;margin-bottom:2px}
rdr-accueil-apercu .actus-grille{height:clamp(380px,52vh,460px)}
}
@media (max-width:1100px){
rdr-accueil-apercu .actus-grille{grid-template-columns:1fr;height:auto}
rdr-accueil-apercu .carte--une{aspect-ratio:16/9}
rdr-accueil-apercu .actus-droite{grid-template-rows:none;grid-template-columns:1fr 1fr}
rdr-accueil-apercu .actus-droite .carte{aspect-ratio:4/3}
rdr-accueil-apercu .breves{grid-template-columns:1fr 1fr}
rdr-accueil-apercu .sk-liste{grid-template-columns:repeat(3,minmax(0,1fr))}
rdr-accueil-apercu .af-rail{grid-template-columns:repeat(2,minmax(0,1fr));padding-top:10px}
rdr-accueil-apercu .af-rail::before,rdr-accueil-apercu .af::before,rdr-accueil-apercu .af::after{display:none}
rdr-accueil-apercu .hv-titre{max-width:78%}
rdr-accueil-apercu .pv-top{display:none}
rdr-accueil-apercu .bil-rail{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:760px){
rdr-accueil-apercu{--marge:22px;--haut-entete:120px}
rdr-accueil-apercu .hero{height:auto;min-height:0;overflow:visible}
rdr-accueil-apercu .hv-scene{position:relative;height:clamp(320px,58svh,480px)}
rdr-accueil-apercu .hv-logo{width:118px}
rdr-accueil-apercu .hv-devise{font-size:21px}
rdr-accueil-apercu .hv-contenu{position:relative;bottom:auto;margin-top:-118px;padding-bottom:18px}
rdr-accueil-apercu .hv-ligne{flex-direction:column;align-items:flex-start;gap:22px}
rdr-accueil-apercu .hv-titre{max-width:none;justify-content:flex-end}
rdr-accueil-apercu .hv-titre h2{font-size:clamp(26px,7.8vw,33px);line-height:1.05}
rdr-accueil-apercu .hv-faits{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 12px;width:100%;padding:0 4px}
rdr-accueil-apercu .hv-fait{flex-direction:column;align-items:flex-start;padding:6px 9px 6px 11px;gap:4px}
rdr-accueil-apercu .hv-fait::before{transform:skewX(-6deg)}
rdr-accueil-apercu .hv-v{font-size:clamp(16px,4.6vw,18px)}
rdr-accueil-apercu .hv-l b{font-size:9px;letter-spacing:.1em;white-space:normal}
rdr-accueil-apercu .hv-l span{font-size:9.5px;white-space:normal}
rdr-accueil-apercu .hv-acces{position:relative;bottom:auto;padding:22px 0 30px}
rdr-accueil-apercu .hv-nav{align-self:flex-start}
rdr-accueil-apercu .hv-defiler{display:flex;position:absolute;right:var(--marge);bottom:18px;z-index:4;width:34px;height:34px;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.26);background:rgba(14,17,29,.45);color:#fff;pointer-events:none;transition:opacity .45s ease,transform .45s ease}
rdr-accueil-apercu .hv-defiler i{display:flex;animation:raa-hv-descend 1.9s ease-in-out infinite}
rdr-accueil-apercu .hv-defiler svg{width:13px;height:13px;transform:rotate(90deg)}
rdr-accueil-apercu .hero:not(.est-photo) .hv-defiler,rdr-accueil-apercu .hero.a-defile .hv-defiler{opacity:0;transform:translateY(8px)}
rdr-accueil-apercu .cta-liste{flex-direction:column;height:auto;gap:12px}
rdr-accueil-apercu .cta,rdr-accueil-apercu .cta:hover{flex:none;height:150px}
rdr-accueil-apercu .cta img{opacity:.6}
rdr-accueil-apercu .cta::before{background:linear-gradient(180deg,rgba(14,17,29,.25) 0%,rgba(14,17,29,.66) 45%,rgba(14,17,29,.96) 100%)}
rdr-accueil-apercu .cta p{max-height:none;opacity:1;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12.5px}
rdr-accueil-apercu .cta-txt{padding:16px 18px;gap:6px}
rdr-accueil-apercu .cta-ico{width:36px;height:36px;border-radius:10px;margin-bottom:2px}
rdr-accueil-apercu .cta-ico svg{width:18px;height:18px}
rdr-accueil-apercu .cta h3{font-size:20px}
rdr-accueil-apercu .cta-num{font-size:30px}
rdr-accueil-apercu .affiche{padding:10px 0 44px}
rdr-accueil-apercu .affiche-tete{flex-direction:column;align-items:flex-start;gap:10px}
rdr-accueil-apercu .af-rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px var(--marge) 8px;margin:0 calc(-1 * var(--marge));scrollbar-width:none}
rdr-accueil-apercu .af{flex:0 0 74%;scroll-snap-align:start}
rdr-accueil-apercu .sec-tete{flex-direction:column;align-items:flex-start;gap:14px}
rdr-accueil-apercu .sec-tete h2{font-size:34px}
rdr-accueil-apercu .onglets{max-width:100%;overflow-x:auto;scrollbar-width:none}
rdr-accueil-apercu .actus{padding:48px 0 54px}
rdr-accueil-apercu .actus-grille{grid-template-columns:1fr;height:auto;gap:12px}
rdr-accueil-apercu .carte--une{aspect-ratio:4/3}
rdr-accueil-apercu .carte--une .carte-txt{padding:18px}
rdr-accueil-apercu .carte--une h3{font-size:22px}
rdr-accueil-apercu .carte--une p{display:none}
rdr-accueil-apercu .actus-droite{grid-template-columns:1fr;gap:12px}
rdr-accueil-apercu .actus-droite .carte{aspect-ratio:16/9}
rdr-accueil-apercu .actus-droite .carte h3{font-size:14px}
rdr-accueil-apercu .breves{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px var(--marge) 14px;margin:14px calc(-1 * var(--marge)) 0;scrollbar-width:none}
rdr-accueil-apercu .breve{flex:0 0 78%;scroll-snap-align:start;opacity:1;transform:none}
rdr-accueil-apercu .actus-pied{gap:14px}
rdr-accueil-apercu .skippers{padding:64px 0 80px}
rdr-accueil-apercu .skippers .sec-tete{text-align:left;align-items:flex-start}
rdr-accueil-apercu .sk-liste{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:26px var(--marge) 16px;margin:0 calc(-1 * var(--marge));scrollbar-width:none}
rdr-accueil-apercu .sk{flex:0 0 52%;scroll-snap-align:start}
rdr-accueil-apercu .sk-nom{font-size:24px}
rdr-accueil-apercu .classes{justify-content:space-between;gap:4px;margin-top:24px}
rdr-accueil-apercu .classe{flex:1 1 0;min-width:0}
rdr-accueil-apercu .classe img{width:100%;height:auto}
rdr-accueil-apercu .classe b{font-size:17px}
rdr-accueil-apercu .classe small{display:none}
rdr-accueil-apercu .sep-sillage{height:112px}
rdr-accueil-apercu .sl-bateau{width:72px}
rdr-accueil-apercu .sl-bateau--o50{display:none}
rdr-accueil-apercu .sl-bateau--imoca{width:46px;animation-name:raa-sl-f-imoca-tel}
rdr-accueil-apercu .sl-bateau--c40{width:38px;animation-name:raa-sl-f-c40-tel}
rdr-accueil-apercu .sep-sillage.avec-flotte .sl-port--arr{animation-name:raa-sl-arrivee-f-tel}
rdr-accueil-apercu .sl-port b{top:14px}
rdr-accueil-apercu .sl-milles{font-size:9px;letter-spacing:.07em;color:rgba(255,255,255,.4)}
rdr-accueil-apercu .bil-rail{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding:14px var(--marge) 8px;margin:0 calc(-1 * var(--marge));scrollbar-width:none}
rdr-accueil-apercu .bil{flex:0 0 82%;scroll-snap-align:start;--x:74px}
rdr-accueil-apercu .bil-talon b{font-size:38px}
rdr-accueil-apercu .espace{padding:56px 0 100px}
rdr-accueil-apercu[data-liaison="sillage"] .espace{--nuit-haut:214px;padding-top:92px}
rdr-accueil-apercu .promo{grid-template-columns:1fr;min-height:0}
rdr-accueil-apercu .promo-txt{padding:30px 22px 26px}
rdr-accueil-apercu .promo h2{font-size:38px}
rdr-accueil-apercu .pub-encart{--pub-hmax:80vh;width:min(100%,calc(var(--pub-hmax) * var(--pub-ratio-tel,var(--pub-ratio,3))))}
rdr-accueil-apercu .pub-cadre{aspect-ratio:var(--pub-ratio-tel,var(--pub-ratio,3));border-radius:16px}
rdr-accueil-apercu .espace{--pub-haut:108px;--pub-bas:88px}
rdr-accueil-apercu .promo-visuel{min-height:300px;border-radius:0 0 26px 26px}
rdr-accueil-apercu .promo-visuel .photo{border-radius:0 0 26px 26px}
rdr-accueil-apercu .promo-visuel .photo::before{background:linear-gradient(180deg,#E4661C 0%,rgba(228,102,28,0) 40%)}
rdr-accueil-apercu .pv-badge{left:14px;top:14px;padding:10px 14px 10px 10px;gap:10px}
rdr-accueil-apercu .pv-medaille{width:46px;height:46px}
rdr-accueil-apercu .pv-medaille span{inset:8px}
rdr-accueil-apercu .pv-top{display:none}
rdr-accueil-apercu .pv-skipper{right:18px;bottom:-28px;width:132px}
rdr-accueil-apercu .pv-sk-ov strong{font-size:17px}
rdr-accueil-apercu .pv-sk > img.pv-sk-classe{height:46px}
rdr-accueil-apercu .tymal{padding:76px 0 84px}
rdr-accueil-apercu .tymal .trame{grid-template-columns:1fr;gap:30px}
rdr-accueil-apercu .fa-tete{flex-direction:column;align-items:stretch;gap:16px}
rdr-accueil-apercu .fa-toutes{height:52px}
rdr-accueil-apercu .fa-tete .fa-toutes{display:none}
rdr-accueil-apercu .fa-toutes--bas{display:flex;margin-top:18px}
rdr-accueil-apercu .fa-cherche{height:52px;padding-left:14px}
rdr-accueil-apercu .fa-cherche input{padding:0 8px;font-size:15px}
rdr-accueil-apercu .fa-cherche button{width:40px;height:40px}
rdr-accueil-apercu .fa-q summary{gap:10px;padding:13px 12px 13px 18px}
rdr-accueil-apercu .fa-q summary b{font-size:14.5px}
rdr-accueil-apercu .fa-rub{display:none}
rdr-accueil-apercu .fa-rep{padding:0 16px 14px 18px;font-size:14px}
rdr-accueil-apercu .hv-fait--depart{grid-column:1/-1}
rdr-accueil-apercu .tymal .elem{display:none}
rdr-accueil-apercu .video{padding:0;margin-top:56px}
rdr-accueil-apercu .video-cadre{transform:none;border-width:4px;box-shadow:10px 14px 28px -12px rgba(14,17,29,.32),0 4px 10px -4px rgba(14,17,29,.18)}
rdr-accueil-apercu .video-tymal{left:auto;right:6px;bottom:auto;top:-60px;width:108px;transform:rotate(6deg)}
rdr-accueil-apercu .hero[data-acces="sous"] .hv-acces{display:none}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .hero{height:auto}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .hv-scene{height:calc(clamp(320px,58svh,480px) + var(--rdr-entete-h,120px))}
rdr-accueil-apercu .hero[data-acces="sous"] + .hv-acces-sous{padding:16px 0 36px}
rdr-accueil-apercu .hero[data-acces="sous"] + .hv-acces-sous .cta,rdr-accueil-apercu .hero[data-acces="sous"] + .hv-acces-sous .cta:hover{height:auto;min-height:146px}
rdr-accueil-apercu .hero[data-acces="sous"] + .hv-acces-sous .cta p{display:none}
rdr-accueil-apercu .onglets{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:100%;overflow:visible}
rdr-accueil-apercu .onglet{justify-content:center;gap:5px;padding:5px 6px;font-size:10px;letter-spacing:.04em}
rdr-accueil-apercu .onglet i{width:20px;height:20px;border-radius:6px}
rdr-accueil-apercu .glyphe--grand{display:none}
rdr-accueil-apercu .promo-btns .btn{width:100%}
rdr-accueil-apercu .pv-sk-ov .pv-micro{letter-spacing:.05em;font-size:8.5px}
}
@media (prefers-reduced-motion:reduce){
rdr-accueil-apercu *{animation:none !important;transition:none !important}
rdr-accueil-apercu .carte,rdr-accueil-apercu .breve,rdr-accueil-apercu .sk-flip{opacity:1;transform:none}
}`;

  const PAGE = `<section class="hero" id="hero" data-acces="sous">
  <div class="hv-scene">
    <div class="hv-rail" id="hv-rail">
      <div class="hv-vue est-active">
        <div class="hv-fond">
          <video autoplay muted loop playsinline data-media-affiche="videoAffiche">
            <source data-media="video" type="video/mp4">
          </video>
          <img class="hero-photo" id="hero-photo" src="" alt="" fetchpriority="high" decoding="async">
        </div>
      </div>
    </div>
    <div class="hv-marque"><h1 class="hv-masque">Route du Rhum, Destination Guadeloupe</h1><img class="hv-logo" data-media="logoIntro" alt=""><p class="hv-devise titre">Là où les rêves prennent le large</p></div>
  </div>
  <div class="hv-contenu"><div class="trame hv-ligne"><div class="hv-titre" id="hv-titre"></div><div class="hv-nav" id="hv-nav"></div></div></div>
  <span class="hv-defiler" id="hv-defiler" aria-hidden="true"></span>
  <div class="hv-acces" id="hv-slot-acces"><div class="trame"><div class="cta-liste" id="ctas"></div></div></div>
</section>
<section class="hv-acces-sous"><div class="trame" id="hv-slot-acces-sous"></div></section>
<section class="affiche"><div class="trame">
  <div class="affiche-tete"><h2 class="titre">À l'affiche<small>Les prochains temps forts, jour par jour</small></h2><a class="affiche-lien" href="/programmation">Toute la programmation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="af-rail" id="affiche"></div>
</div></section>
<section class="actus">
  <img class="filigrane" data-media="filigrane" data-larg="1200" data-q="55" alt="" aria-hidden="true" loading="lazy" decoding="async">
  <div class="trame">
    <div class="sec-tete">
      <div><span class="trait"></span><h2 class="titre">Actualités</h2><p class="sous">La une, la dernière vidéo, le dernier reportage</p></div>
      <nav class="onglets" id="onglets"></nav>
    </div>
    <div class="actus-grille"><div id="une-actu"></div><div class="actus-droite" id="medias"></div></div>
    <div class="breves" id="breves"></div>
    <div class="actus-pied"><a class="btn" href="/medias-actualites">Toutes les actualités <svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg></a></div>
  </div>
</section>
<section class="skippers">
  <img class="topo" data-media="topo" data-larg="1200" data-q="55" alt="" aria-hidden="true" loading="lazy" decoding="async">
  <div class="trame">
    <div class="sec-tete"><div><span class="trait"></span><h2 class="titre">Les skippers engagés</h2><p class="sous">1 seule ligne de départ, 118 navigateurs. Six visages au hasard, à chaque visite.</p></div></div>
    <div class="sk-liste" id="skippers"></div>
    <div class="classes" id="classes"></div>
    <div class="sec-pied"><a class="btn" href="/skippers">Explorez tous les skippers <svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg></a></div>
  </div>
</section>
<div class="sep sep--liaison" style="--avant:#0A1228;--apres:#fff"></div>
<section class="espace">
  <div class="trame">
  <div class="promo">
    <div class="promo-txt">
      <span class="kicker">Mon Espace Rhum</span>
      <h2 class="titre">Vivez <em>votre</em> Rhum</h2>
      <p>Rejoignez les passionnés du Rhum et partagez toute l'intensité de la course. Suivez vos skippers préférés, découvrez des contenus et données personnalisés, relevez des défis, participez à des jeux-concours exclusifs et collectionnez des badges au fil de l'aventure.</p>
      <div class="promo-btns"><a class="cta-rhum" href="/mon-espace-rhum">Créez votre espace <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a><a class="lien-rhum" href="/mon-espace-rhum">J'ai déjà un compte</a></div>
    </div>
    <div class="promo-visuel">
      <div class="photo"><img data-media="espacePhoto" data-larg="900" alt="" loading="lazy" decoding="async"></div>
      <div class="pv-pile">
        <div class="pv-badge pv-flotte">
          <div class="pv-medaille"><svg class="pv-anneau" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="pvg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5DBFC0"/><stop offset="1" stop-color="#FCF150"/></linearGradient></defs><circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="5"/><circle class="pv-arc" cx="32" cy="32" r="27" fill="none" stroke="url(#pvg)" stroke-width="5" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" transform="rotate(-90 32 32)"/></svg><span id="pv-ico-badge"></span></div>
          <div><span class="pv-micro">Badges et rangs</span><b>Débloquez des badges</b><small>et montez dans les rangs</small></div>
          <i id="pv-ico-verrou"></i>
        </div>
        <div class="pv-top pv-flotte"><span class="pv-micro">Top 50 des fans</span><div class="pv-podium" aria-hidden="true"><i style="--h:72%"><b>2</b></i><i style="--h:100%"><b>1</b></i><i style="--h:54%"><b>3</b></i></div><small>Entrez dans le classement</small></div>
        <div class="pv-skipper" id="pv-skipper"></div>
      </div>
    </div>
  </div>
  <div class="pub-encart" id="pub-encart" hidden></div>
</div></section>
<div class="vague-sep" style="--avant:#F4F1E8;--apres:#FCF150"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z"/><path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z"/></svg></div>
<section class="tymal">
  <img class="elem" data-media="tymalFond" alt="" aria-hidden="true" loading="lazy" decoding="async">
  <div class="trame">
    <div>
      <span class="kicker kicker--sombre">La mascotte officielle</span>
      <h2 class="titre">TyMAL, en tournée avant le village</h2>
      <p>Macareux moine, natif des côtes bretonnes, TyMAL sillonne la Bretagne et la Guadeloupe avant de vous retrouver sur les bassins. Suivez sa tournée jusqu'aux bassins, et repartez avec lui dans votre Espace Rhum.</p>
      <div class="btns"><a class="btn btn--marine" href="/carte-tournee">Où est TyMAL ? <svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg></a><a class="btn btn--sombre" href="/post/tymal-la-mascotte-de-l-édition-2026" data-en="/en/post/tymal-the-mascot-of-the-2026-edition">En savoir plus</a></div>
    </div>
    <div class="video">
      <div class="video-cadre" id="video">
        <img data-media="tymalVideo" alt="" loading="lazy" decoding="async">
        <button type="button" aria-label="Lire la vidéo"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.5v13l11-6.5z"/></svg></button>
        <span class="duree">TyMAL, la vidéo</span>
      </div>
      <img class="video-tymal" data-media="tymalDrapeau" alt="" loading="lazy" decoding="async">
    </div>
  </div>
</section>
<div class="faq-bloc" id="faq-bloc" hidden>
<div class="vague-sep" style="--avant:#FCF150;--apres:#F4F1E8"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z"/><path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z"/></svg></div>
<section class="faq-acc" id="faq-acc" aria-labelledby="fa-titre">
  <div class="fa-topo" id="fa-topo" aria-hidden="true"></div>
  <div class="trame"><div class="fa-corps">
    <div class="fa-tete">
      <div><span class="fa-fil" id="fa-fil"></span><h2 class="titre" id="fa-titre"></h2></div>
      <a class="fa-toutes" id="fa-toutes" href="/faq"></a>
    </div>
    <form class="fa-cherche" action="/faq" method="get" role="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg><input type="search" name="q" id="fa-q" autocomplete="off" aria-label="Chercher dans les questions"><button type="submit" aria-label="Chercher"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button></form>
    <div class="fa-liste" id="fa-liste"></div>
    <a class="fa-toutes fa-toutes--bas" id="fa-toutes-bas" href="/faq"></a>
  </div></div>
</section>
<div class="vague-sep" style="--avant:#F4F1E8;--apres:#0E111D"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z"/><path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z"/></svg></div>
</div>`;

  function injecterCss() {
    if (document.getElementById('rdr-accueil-apercu-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-accueil-apercu-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  









  const jeuValide = (D) => !!(D && D.phases && D.medias && Array.isArray(D.actus) && Array.isArray(D.skippers));

  class RdrAccueilApercu extends HTMLElement {
    static get observedAttributes() { return ['jeu', 'skippers', 'promos']; }

    connectedCallback() {
      if (this._monte) return;
      this._monte = true;
      injecterCss();
      const jeu = this._jeuAttribut();
      if (jeu) { this._dessiner(jeu); return; }
      this.innerHTML = '<div class="raa-attente"></div>';
      this._charger();
    }

    attributeChangedCallback(nom) {
      


      if (nom === 'skippers') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-skippers')); return; }
      


      if (nom === 'promos') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-promos')); return; }
      if (nom !== 'jeu' || !this._monte || this._dessine) return;
      const jeu = this._jeuAttribut();
      if (jeu) this._dessiner(jeu);
    }

    disconnectedCallback() {
      this._monte = false;
      this._dessine = false;
      if (this._defaire) { try { this._defaire(); } catch (e) {   } this._defaire = null; }
    }

    _jeuAttribut() {
      const t = this.getAttribute('jeu');
      if (!t || this.getAttribute('source')) return null;
      try { const D = JSON.parse(t); return jeuValide(D) ? D : null; } catch (e) { return null; }
    }

    




    _calerEntete() {
      try {
        const e = document.querySelector('rdr-entete[hero="dessus"]');
        if (e && !document.documentElement.dataset.rdrEntete) document.documentElement.dataset.rdrEntete = 'dessus';
      } catch (err) {   }
    }

    _dessiner(D) {
      if (this._dessine) return;
      this._dessine = true;
      this._calerEntete();
      this.innerHTML = PAGE;
      this._defaire = monter(this, this, D);
    }

    async _charger() {
      try {
        const r = await fetch(this.getAttribute('source') || SOURCE, { credentials: 'omit' });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const D = await r.json();
        if (!this._monte || this._dessine) return;
        if (!jeuValide(D)) throw new Error('jeu incomplet');
        this._dessiner(D);
      } catch (e) {
        console.warn('[rdr-accueil-apercu] aperçu indisponible', e && e.message);
        if (!this._monte || this._dessine) return;
        this.innerHTML = '<div class="raa-vide"><h3>L\'aperçu revient dans un instant</h3><p>Les données n\'ont pas pu être lues.</p><button type="button">Réessayer</button></div>';
        this.querySelector('button').onclick = () => { this.innerHTML = '<div class="raa-attente"></div>'; this._charger(); };
      }
    }
  }

   
   
function monter(racine, portail, D) {
  'use strict';
  const ecouteurs = [], minuteurs = [], observateurs = [];
  const ecoute = (cible, type, f) => { cible.addEventListener(type, f); ecouteurs.push(() => cible.removeEventListener(type, f)); };
  const repeter = (f, ms) => { const t = setInterval(f, ms); minuteurs.push(t); return t; };
  const tout = (s) => [...racine.querySelectorAll(s)].concat(portail === racine ? [] : [...portail.querySelectorAll(s)]);
  const un = (s) => racine.querySelector(s) || portail.querySelector(s);
   
  const M = D.medias;
  

  










  const AU_TELEPHONE = (document.documentElement.clientWidth || window.innerWidth || 0) < 760;
  let forceIntro = null;
  try { forceIntro = new URLSearchParams(location.search).get('intro'); } catch (e) {   }
  const sansVideo = AU_TELEPHONE && forceIntro !== 'oui';
  if (sansVideo) { const v0 = un('.hv-fond video'); if (v0) v0.remove(); }
  




  







  const pourLarge = (px) => Math.max(160, Math.round(Math.min(px * Math.min(2, window.devicePixelRatio || 1), 1600) / 80) * 80);
  const etroit = () => (document.documentElement.clientWidth || innerWidth || 0) < 760;
  const retaille = (u, larg, q) => String(u || '').replace(/\/v1\/fill\/w_(\d+),h_(\d+)([^/]*)\//, (tout2, W, H, reste) => {
    const w = Math.min(Number(W), larg), h = Math.max(1, Math.round(Number(H) * (w / Number(W))));
    return '/v1/fill/w_' + w + ',h_' + h + String(reste).replace(/,q_\d+/, ',q_' + q) + '/';
  });
  tout('[data-media]').forEach(el => {
    if (el.tagName === 'SOURCE' || !M[el.dataset.media]) return;
    el.src = el.dataset.larg ? retaille(M[el.dataset.media], Math.min(Number(el.dataset.larg), pourLarge(document.documentElement.clientWidth || innerWidth)), Number(el.dataset.q) || 60) : M[el.dataset.media];
  });
  tout('[data-media-affiche]').forEach(el => { if (M[el.dataset.mediaAffiche]) el.poster = M[el.dataset.mediaAffiche]; });
  const chargerVideo = (v) => { const s = v && v.querySelector('source[data-media]'); if (s && !s.getAttribute('src') && M[s.dataset.media]) { s.src = M[s.dataset.media]; try { v.load(); } catch (e) {   } } };

  













  const INTRO_MS = 6 * 3600 * 1000;    
  function introDecision() {
    let d = window.__rdrIntro;
    if (d) return d;
    const f = new URLSearchParams(location.search).get('intro');
    let jouer = true;
    try {
      const t = Number(localStorage.getItem('rdrIntroV1') || 0);
      jouer = !t || Date.now() - t > INTRO_MS;
      if (f !== 'oui' && f !== 'non') localStorage.setItem('rdrIntroV1', String(Date.now()));
    } catch (e) {   }
    try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) jouer = false; } catch (e) {   }
    if (f === 'oui') jouer = true; else if (f === 'non') jouer = false;
    return (window.__rdrIntro = { jouer, vu: {} });
  }
  function introPour(qui) {
    const d = introDecision();
    if (!d.jouer || d.vu[qui]) return false;
    d.vu[qui] = true;
    return true;
  }
  const IMG = (id, w, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + w + ',h_' + h + ',al_c,q_' + (q || 72) + ',enc_auto/x.jpg';
  const FLECHE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const ICO = {
    calendrier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    carte: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/></svg>',
    train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1-3M15 21l-1-3M8 15h.01M16 15h.01"/></svg>',
    boussole: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
    podium: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M6 20v-8h4v8M10 20V6h4v14M14 20v-5h4v5"/></svg>',
    lieu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    horloge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    billet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 0 0-6V6H3z"/><path d="M13 6v12"/></svg>',
    actu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h10M7 17h6"/></svg>',
    photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.5v13l11-6.5z"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 12v2M8 8v8M12 5v14M16 9v6M20 11v2"/></svg>',
    interview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>'
  };
  



  const PHOTOS = D.photos;
  const PHASES = D.phases;

  const $ = (id) => racine.querySelector('#' + id) || portail.querySelector('#' + id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  



  const EN = /^\/en(\/|$)/.test((typeof location !== 'undefined' && location.pathname) || '');
  const lien = (u) => { u = String(u || ''); return (!EN || !/^\/(?!\/)/.test(u) || /^\/(en|post)(\/|$)/.test(u)) ? u : '/en' + u; };
  const href = (u) => (u ? ' href="' + esc(lien(u)) + '"' : '');
  if (EN) [racine, portail].forEach((z) => z && z.querySelectorAll && z.querySelectorAll('a[href^="/"], form[action^="/"]').forEach((a) => { const k = a.tagName === 'FORM' ? 'action' : 'href'; a.setAttribute(k, a.dataset && a.dataset.en ? a.dataset.en : lien(a.getAttribute(k))); }));
  let phase = 'avant';

   
  const DEPART = new Date('2026-11-01T13:02:00+01:00').getTime();
  function barre() {
    let d = Math.max(0, DEPART - Date.now()); const j = Math.floor(d / 86400000), h = Math.floor(d / 3600000) % 24, m = Math.floor(d / 60000) % 60, s = Math.floor(d / 1000) % 60;
    const deux = (n) => String(n).padStart(2, '0');
    const bc = $('barre-compte'); if (bc) bc.innerHTML = '<span>' + String(j).padStart(3, '0') + '<small> j</small></span><span>' + deux(h) + '<small> h</small></span><span>' + deux(m) + '<small> m</small></span><span>' + deux(s) + '<small> s</small></span>';
    const p = $('ess-pointage'); if (p) { const c = Math.ceil(Date.now() / 14400000) * 14400000 - Date.now(); p.textContent = Math.floor(c / 3600000) + ' h ' + deux(Math.floor(c / 60000) % 60); }
  }
  repeter(barre, 1000); barre();

  const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const JOURS = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
  const ROND = '<svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg>';
  const CHEV_G = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
  const DRAPEAU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h12l-2.5 4.5L17 13H5"/></svg>';
  const CHEV_D = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  const COEUR = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 5 6.4 5c2 0 3.6 1.2 4.6 2.8C12 6.2 13.6 5 15.6 5 19 5 21.1 8.5 19.6 11.8 17.5 16.4 12 21 12 21z"/></svg>';
  const VERROU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  






  const ULTIM = '<svg viewBox="0 0 124 112" aria-hidden="true"><defs><linearGradient id="raa-ultim-gv" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C3CAD8"/><stop offset=".5" stop-color="#EEF1F6"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M25 98.8 Q14 100 2 99.2" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.2" stroke-linecap="round"/><path d="M33 101 Q22 102.4 9 101.8" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1" stroke-linecap="round"/><path d="M82 101.8 Q74 102.8 62 102.3" fill="none" stroke="rgba(255,255,255,.22)" stroke-width=".9" stroke-linecap="round"/><path d="M122 85.2 L65.6 5" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".6"/><path class="u-gv" d="M65.5 4.5 L47 6 Q36 40 29.5 79.4 L68.2 80.2 Z" fill="url(#raa-ultim-gv)"/><path d="M65.9 16 Q55 15.4 44.2 16.4 M66.4 29 Q53 28.4 40.6 29.4 M66.9 42 Q52 41.4 37.3 42.4 M67.4 55 Q51 54.4 34.4 55.4 M67.9 68 Q50 67.4 31.9 68.4" fill="none" stroke="rgba(14,17,29,.2)" stroke-width=".5"/><path class="u-foc" d="M66.6 26 L110.5 84 L76.4 82.6 Q71.6 56 66.6 26 Z" fill="#FCF150"/><path d="M68.4 34 Q72.6 58 75.4 82" fill="none" stroke="rgba(14,17,29,.1)" stroke-width=".5"/><path class="u-mat" d="M67.8 86 L64.6 2.6 L66.2 2.4 L69.4 86 Z" fill="#fff"/><path d="M68.2 80.3 L29 79.6" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/><path d="M113 86 L122 85.2" stroke="#fff" stroke-width="1" stroke-linecap="round"/><path d="M16.4 88.2 L17 96.5 M15 96.6 L19 96.4" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1" stroke-linecap="round"/><path class="u-coque" d="M12 84.6 L104 83.6 Q109.6 83.6 114 86 L108.6 87.8 Q70 89.6 15 88.4 Q12.6 87 12 84.6 Z" fill="#fff"/><path d="M58 85.4 L70 85.2 L69.5 86.4 L58.4 86.5 Z" fill="rgba(14,17,29,.45)"/><path d="M15.5 87.5 Q62 89 108.8 87" fill="none" stroke="#4E9FA3" stroke-width=".9"/><path class="u-bras" d="M38 88 Q45 87.4 48 95.4 M76 87.6 Q83 87 86 95" fill="none" stroke="#E6EAF1" stroke-width="2.2" stroke-linecap="round"/><path class="u-flotteur" d="M24 95.2 L108 94.2 Q113.8 94.2 118 96.4 L112.8 98.2 Q76 99.8 27 98.8 Q24.6 97.4 24 95.2 Z" fill="#F2F4F8"/><path d="M27.4 97.8 Q76 99.2 112.9 97.4" fill="none" stroke="#FCF150" stroke-width=".8"/><path class="u-foil" d="M84 99.2 Q84.6 106.4 91 107.8 L93.4 106.8" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M118 97 Q121 95.2 123.4 95.9 M116.4 99 Q120.4 99.9 123.2 99.3" fill="none" stroke="rgba(255,255,255,.6)" stroke-width=".85" stroke-linecap="round"/></svg>';
  

  const FLOTTE = [
    ['o50', '<svg viewBox="0 0 124 112" aria-hidden="true"><defs><linearGradient id="raa-gv-o50" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C3CAD8"/><stop offset=".5" stop-color="#EEF1F6"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M25 98.8 Q14 100 2 99.2" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.2" stroke-linecap="round"/><path d="M33 101 Q22 102.4 9 101.8" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1" stroke-linecap="round"/><path d="M82 101.8 Q74 102.8 62 102.3" fill="none" stroke="rgba(255,255,255,.22)" stroke-width=".9" stroke-linecap="round"/><g transform="translate(0 4)"><path d="M122 85.2 L65.6 5" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".6"/><path class="u-gv" d="M65.5 4.5 L47 6 Q36 40 29.5 79.4 L68.2 80.2 Z" fill="url(#raa-gv-o50)"/><path d="M65.9 16 Q55 15.4 44.2 16.4 M66.4 29 Q53 28.4 40.6 29.4 M66.9 42 Q52 41.4 37.3 42.4 M67.4 55 Q51 54.4 34.4 55.4 M67.9 68 Q50 67.4 31.9 68.4" fill="none" stroke="rgba(14,17,29,.2)" stroke-width=".5"/><path class="u-foc" d="M66.6 26 L110.5 84 L76.4 82.6 Q71.6 56 66.6 26 Z" fill="#5DBFC0"/><path d="M68.4 34 Q72.6 58 75.4 82" fill="none" stroke="rgba(14,17,29,.1)" stroke-width=".5"/><path class="u-mat" d="M67.8 86 L64.6 2.6 L66.2 2.4 L69.4 86 Z" fill="#fff"/><path d="M68.2 80.3 L29 79.6" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/><path d="M113 86 L122 85.2" stroke="#fff" stroke-width="1" stroke-linecap="round"/><path d="M16.4 88.2 L17 96.5 M15 96.6 L19 96.4" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1" stroke-linecap="round"/><path class="u-coque" d="M12 84.6 L104 83.6 Q109.6 83.6 114 86 L108.6 87.8 Q70 89.6 15 88.4 Q12.6 87 12 84.6 Z" fill="#fff"/><path d="M58 85.4 L70 85.2 L69.5 86.4 L58.4 86.5 Z" fill="rgba(14,17,29,.45)"/><path d="M15.5 87.5 Q62 89 108.8 87" fill="none" stroke="#4E9FA3" stroke-width=".9"/></g><path class="u-bras" d="M38 92 Q45 91.4 48 95.6 M76 91.6 Q83 91 86 95.2" fill="none" stroke="#E6EAF1" stroke-width="2.2" stroke-linecap="round"/><path class="u-flotteur" d="M24 95.2 L108 94.2 Q113.8 94.2 118 96.4 L112.8 98.2 Q76 99.8 27 98.8 Q24.6 97.4 24 95.2 Z" fill="#F2F4F8"/><path d="M27.4 97.8 Q76 99.2 112.9 97.4" fill="none" stroke="#5DBFC0" stroke-width=".8"/><path class="u-foil" d="M84 99.2 Q84.4 103.6 88.4 104.6" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M118 97 Q121 95.2 123.4 95.9 M116.4 99 Q120.4 99.9 123.2 99.3" fill="none" stroke="rgba(255,255,255,.6)" stroke-width=".85" stroke-linecap="round"/></svg>'],
    ['imoca', '<svg viewBox="0 0 124 112" aria-hidden="true"><defs><linearGradient id="raa-gv-imoca" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C3CAD8"/><stop offset=".5" stop-color="#EEF1F6"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M22 96.8 Q12 98 1 97.2" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.2" stroke-linecap="round"/><path d="M34 98.8 Q22 100.2 8 99.6" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1" stroke-linecap="round"/><path d="M55.6 90 L54 103.4" stroke="rgba(255,255,255,.45)" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="53.8" cy="104" rx="5.6" ry="1.7" fill="rgba(255,255,255,.45)"/><path d="M121 80.2 L64.4 6" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".6"/><path class="u-gv" d="M64.2 5.5 L48 7 Q38 40 31 74.6 L67.4 75.4 Z" fill="url(#raa-gv-imoca)"/><path d="M64.7 17 Q56 16.4 45.6 17.4 M65.2 30 Q54 29.4 42.2 30.4 M65.7 43 Q53 42.4 38.8 43.4 M66.2 56 Q52 55.4 35.6 56.4 M66.7 67 Q51 66.6 33.2 67.4" fill="none" stroke="rgba(14,17,29,.2)" stroke-width=".5"/><path class="u-foc" d="M65 22 L111.5 79.6 L73.5 77.6 Q69.8 50 65 22 Z" fill="#F19F39"/><path class="u-mat" d="M66.4 81 L63.6 3.6 L65 3.4 L67.8 81 Z" fill="#fff"/><path d="M67.4 75.5 L30.6 74.8" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/><path d="M112 80.8 L121 80.2" stroke="#fff" stroke-width="1" stroke-linecap="round"/><path d="M18.4 88.4 L19 96.6" stroke="rgba(255,255,255,.7)" stroke-width="1" stroke-linecap="round"/><path class="u-coque" d="M14 80.5 L100 79.5 Q110 79.6 113 83 Q111 87.4 104 88.4 Q60 90.6 17 88.6 Q14.4 85 14 80.5 Z" fill="#fff"/><path d="M28 80.4 Q29 77 34 76.8 L48 76.6 Q51 77.4 52 80 Z" fill="#E3E7EF"/><path d="M36 78.2 L47 78 L46.6 79 L36.3 79.1 Z" fill="rgba(14,17,29,.5)"/><path d="M17 86.4 Q60 88.4 107 86.2" fill="none" stroke="#F19F39" stroke-width="1.2"/><path class="u-foil" d="M71 88.6 Q71.6 97.8 80.6 100.6 L84.4 99.2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M78.4 97.4 Q82.4 95.6 86 96.4 M109.6 91.6 Q114 92.6 117.4 92" fill="none" stroke="rgba(255,255,255,.6)" stroke-width=".85" stroke-linecap="round"/></svg>'],
    ['c40', '<svg viewBox="0 0 124 112" aria-hidden="true"><defs><linearGradient id="raa-gv-c40" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C3CAD8"/><stop offset=".5" stop-color="#EEF1F6"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="raa-spi-c40" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".42" stop-color="#fff"/><stop offset=".42" stop-color="#F5BE41"/><stop offset=".62" stop-color="#F5BE41"/><stop offset=".62" stop-color="#F2F4F8"/><stop offset="1" stop-color="#E3E7EF"/></linearGradient></defs><path d="M20 90 Q10 91.2 1 90.4" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.2" stroke-linecap="round"/><path d="M30 92.4 Q19 93.6 7 93" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1" stroke-linecap="round"/><path d="M60 91.4 L58.8 100.8" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="58.6" cy="101.4" rx="4.8" ry="1.5" fill="rgba(255,255,255,.4)"/><path class="u-gv" d="M60.6 12.5 L47 14 Q38 44 29.5 77.2 L63.6 78 Z" fill="url(#raa-gv-c40)"/><path d="M61.1 24 Q54 23.4 44.6 24.4 M61.7 37 Q52 36.4 41 37.4 M62.3 50 Q50 49.4 37.4 50.4 M62.9 63 Q49 62.4 33.8 63.4" fill="none" stroke="rgba(14,17,29,.2)" stroke-width=".5"/><path class="u-mat" d="M62.6 83 L60 11 L61.4 10.8 L64 83 Z" fill="#fff"/><path d="M63.6 78.1 L29 77.4" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/><path class="u-spi" d="M61.6 13 Q106 20 120.4 83.2 L80 79.6 Q78 44 61.6 13 Z" fill="url(#raa-spi-c40)"/><path d="M63 16 Q80 44 80.8 79" fill="none" stroke="rgba(14,17,29,.12)" stroke-width=".5"/><path d="M109.4 84.6 L121 83.6" stroke="#fff" stroke-width="1" stroke-linecap="round"/><path d="M20 90 L20.6 96.4" stroke="rgba(255,255,255,.7)" stroke-width="1" stroke-linecap="round"/><path class="u-coque" d="M16 82.4 L96 81.6 Q108 81.8 110.6 85.4 Q108.4 89.6 98 90.2 Q58 91.6 19 90.4 Q16.4 87 16 82.4 Z" fill="#fff"/><path d="M34 82.3 Q35 79.6 39 79.4 L52 79.2 Q55 79.8 56 82 Z" fill="#E3E7EF"/><path d="M40.4 80.6 L51 80.4 L50.6 81.3 L40.7 81.4 Z" fill="rgba(14,17,29,.5)"/><path d="M19 88.8 Q58 90.2 104 88.4" fill="none" stroke="#F5BE41" stroke-width="1.1"/><path d="M110.4 88 Q114.6 85.4 118 86.4 M108.8 90.8 Q113.6 91.8 117.4 91.2" fill="none" stroke="rgba(255,255,255,.65)" stroke-width=".9" stroke-linecap="round"/></svg>']
  ];

   
  const titreHtml = (t) => esc(t).replace(/\[([^\]]+)\]/, (_, m) => '<em>' + m + '</em>');

  





  const DIAPOS = D.diapos;
  let diapoIdx = 0, diapoTimer = null, avecDiapos = true, modeDepart = '';
  const diapos = () => [null].concat(avecDiapos ? DIAPOS : []);
  function contenuDiapo(i) {
    const d = diapos()[i];
    if (!d) {
      const p = PHASES[phase];
       
      const dep = modeDepart && p.depart ? p.depart : null;
      const signe = '<span class="hv-signe">Route du Rhum <b>Destination Guadeloupe</b></span>';
      const faits = p.faits.concat(dep && modeDepart === 'repere' ? [Object.assign({ cls: 'depart' }, dep)] : []);
      const ordinal = (t) => esc(t).replace(/\b1er\b/, '1<sup>er</sup>');
      return (dep && modeDepart === 'bandeau' ? '<span class="hv-haut">' + signe + '<span class="hv-depart">' + DRAPEAU + (dep.court ? '<span class="hv-depart-long">' + ordinal(dep.texte) + '</span><span class="hv-depart-court">' + ordinal(dep.court) + '</span>' : '<span>' + ordinal(dep.texte) + '</span>') + '</span></span>' : signe) +
        '<h2 class="titre">' + titreHtml(p.titre) + '</h2>' +
        '<div class="hv-faits">' + faits.map((f, i) => {
           
          const n = /^[0-9 ]+$/.test(f.v) ? Number(f.v.split(' ').join('')) : null;
          return '<div class="hv-fait' + (f.cls ? ' hv-fait--' + f.cls : '') + '" style="--i:' + i + '"><em class="hv-v"><i' + (f.id ? ' id="' + f.id + '"' : '') + (n !== null ? ' data-n="' + n + '"' : '') + '>' + (f.cls === 'depart' ? ordinal(f.v) : esc(f.v)) + '</i>' + (f.u ? '<small>' + esc(f.u) + '</small>' : '') + '</em>' +
            '<span class="hv-l"><b>' + esc(f.b) + '</b><span>' + esc(f.s) + '</span></span></div>';
        }).join('') + '</div>';
    }
    return '<span class="kicker kicker--jaune">' + esc(d.kicker) + '</span><h2 class="titre">' + titreHtml(d.titre) + '</h2>' +
      '<p class="hv-texte">' + esc(d.texte) + '</p><a class="btn btn--plein"' + href(d.lien) + '>' + esc(d.bouton) + ' ' + ROND + '</a>';
  }
  function poserRail() {
    const n = diapos().length; const rail = $('hv-rail');
    rail.style.setProperty('--n', n);
    rail.style.transform = 'translateX(' + (-100 * diapoIdx / n) + '%)';
    rail.querySelectorAll('.hv-vue').forEach((v, j) => v.classList.toggle('est-active', j === diapoIdx));
    $('hv-nav').querySelectorAll('.hv-barres i').forEach((b, j) => { b.classList.remove('active'); if (j === diapoIdx) { void b.offsetWidth; b.classList.add('active'); } });
    const num = $('hv-num'); if (num) num.textContent = String(diapoIdx + 1).padStart(2, '0');
  }
  const largeurPhoto = () => Math.min(2560, Math.ceil((innerWidth * Math.min(2, window.devicePixelRatio || 1)) / 160) * 160);
  let tDiapos = 0;
  function rendreHero() {
    const p = PHASES[phase]; const rail = $('hv-rail'); const nav = $('hv-nav');
    



    $('hero-photo').src = IMG(p.photo, largeurPhoto(), Math.round(largeurPhoto() * 0.5625), 82);
    rail.querySelectorAll('.hv-vue--diapo').forEach(v => v.remove());
        


    diapos().slice(1).forEach(d => rail.insertAdjacentHTML('beforeend', '<div class="hv-vue hv-vue--diapo"><div class="hv-fond"><img class="hv-img" loading="lazy" decoding="async" data-diapo src="' + IMG(d.img, largeurPhoto(), Math.round(largeurPhoto() * 0.5625), 82) + '" alt=""></div></div>'));
    clearTimeout(tDiapos);
    tDiapos = setTimeout(() => tout('.hv-img[data-diapo]').forEach(i => i.removeAttribute('loading')), 2500);
    minuteurs.push(tDiapos);
    const n = diapos().length;
    nav.innerHTML = n < 2 ? '' : '<span class="hv-compte"><b id="hv-num">01</b> / ' + String(n).padStart(2, '0') + '</span>' +
      '<span class="hv-barres">' + Array.from({ length: n }, () => '<i></i>').join('') + '</span>' +
      '<button type="button" data-sens="-1" aria-label="Précédent">' + CHEV_G + '</button><button type="button" data-sens="1" aria-label="Suivant">' + CHEV_D + '</button>';
    nav.querySelectorAll('[data-sens]').forEach(b => b.addEventListener('click', () => allerDiapo(diapoIdx + Number(b.dataset.sens))));
    nav.querySelectorAll('.hv-barres i').forEach((b, j) => b.addEventListener('click', () => allerDiapo(j)));
    diapoIdx = 0; poserRail();
    $('hv-titre').innerHTML = contenuDiapo(0);
    barre();
    reserverTitre();
  }
  function allerDiapo(i) {
    const n = diapos().length; if (n < 2) return;
    diapoIdx = (i + n) % n; poserRail();
    const t = $('hv-titre'); t.classList.add('sort');
    setTimeout(() => { t.innerHTML = contenuDiapo(diapoIdx); t.classList.remove('sort'); barre(); noterHauteur(); }, 380);
    relancer();
  }
  


  let heroVu = true, hautVue = 0;
  function relancer() {
    clearInterval(diapoTimer); diapoTimer = null;
    if (heroVu && !document.hidden && diapos().length > 1) diapoTimer = repeter(() => allerDiapo(diapoIdx + 1), 7000);
  }
  







  function reserverTitre() {
    const t = $('hv-titre'); t.style.minHeight = '';
    if (!etroit() || diapos().length < 2) { hautVue = 0; return; }
    const large = t.getBoundingClientRect().width; if (!large) return;
    const copie = t.cloneNode(false);
    copie.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;min-height:0;width:' + large + 'px';
    t.parentNode.appendChild(copie);
    let haut = 0;
    for (let i = 0; i < diapos().length; i++) { copie.innerHTML = contenuDiapo(i).replace(/ id="[^"]*"/g, ''); haut = Math.max(haut, copie.getBoundingClientRect().height); }
    copie.remove();
    



    t.style.minHeight = Math.ceil(Math.max(haut, hautVue)) + 'px';
  }
  

  function noterHauteur() {
    if (!etroit()) return;
    const t = $('hv-titre'); const h = t.getBoundingClientRect().height;
    if (h > hautVue) hautVue = h;
    if (h > (parseFloat(t.style.minHeight) || 0)) t.style.minHeight = Math.ceil(h) + 'px';
  }
  function rendreCtas() {
    

    $('ctas').innerHTML = PHASES[phase].ctas.map((k, i) => (k.bientot ? '<div class="cta cta--' + k.c + ' cta--bientot" aria-disabled="true">' : '<a class="cta cta--' + k.c + '"' + href(k.lien) + '>') + '<img loading="lazy" decoding="async" src="' + IMG(k.img, pourLarge(etroit() ? 380 : 460), Math.round(pourLarge(etroit() ? 380 : 460) * 0.52), 74) + '" alt="" loading="lazy"><span class="cta-num">0' + (i + 1) + '</span>' +
      '<div class="cta-txt"><span class="cta-ico">' + ICO[k.ico] + '</span><h3>' + esc(k.titre) + '</h3><p>' + esc(k.txt) + '</p>' + (k.bientot ? '<span class="lire cta-prochainement">' + esc(k.bientot) + '</span></div></div>' : '<span class="lire">Découvrir ' + FLECHE + '</span></div></a>')).join('');
    rendreAffiche();
  }
  

  let modeAffiche = 'ligne';
  function rendreAffiche() {
    const p = PHASES[phase]; const auj = new Date(p.jour + 'T12:00:00'); const el = $('affiche');
    const prog = (jour) => '/programmation' + (phase === 'course' ? '?type=guadeloupe' + (jour ? '&jour=' + jour : '') : (jour ? '?jour=' + jour : ''));
    const toutProg = un('.affiche-lien'); if (toutProg) toutProg.setAttribute('href', lien(prog('')));
    el.className = modeAffiche === 'billets' ? 'bil-rail' : 'af-rail';
    el.innerHTML = p.affiche.map((r, i) => {
      const d = new Date(r.d + 'T12:00:00'); const ecart = Math.round((d - auj) / 86400000);
      const rel = ecart === 0 ? 'Aujourd\'hui' : ecart === 1 ? 'Demain' : (ecart > 1 && ecart <= 7) ? 'Dans ' + ecart + ' jours' : '';
      const infos = '<p><span>' + ICO.lieu + esc(r.ou) + '</span>' + (r.quand ? '<span>' + ICO.horloge + '<b>' + esc(r.quand) + '</b></span>' : '') + '</p>';
      if (modeAffiche === 'billets') return '<a class="bil"' + href(prog(r.d)) + '><div class="bil-talon"><b>' + d.getDate() + '</b><span>' + MOIS[d.getMonth()] + '</span><em>' + JOURS[d.getDay()] + '</em></div>' +
        '<div class="bil-corps"><span class="bil-type">Temps fort · N°' + String(i + 1).padStart(2, '0') + '</span><h3>' + esc(r.titre) + '</h3>' + infos + (rel ? '<span class="bil-tampon">' + rel + '</span>' : '') + '</div></a>';
      return '<a class="af"' + href(prog(r.d)) + '>' + (rel ? '<span class="af-rel">' + rel + '</span>' : '') +
        '<div class="af-date"><b>' + d.getDate() + '</b><span>' + JOURS[d.getDay()] + '<em>' + MOIS[d.getMonth()] + '</em></span></div>' +
        '<h3>' + esc(r.titre) + '</h3>' + infos + '</a>';
    }).join('');
  }

  

  function placer() {
    if ($('hero').dataset.acces === 'sous') $('hv-slot-acces-sous').appendChild($('ctas')); else $('hv-slot-acces').querySelector('.trame').appendChild($('ctas'));
  }

  let heroTimer = null, heroGen = 0;
  




  const signal = (etape) => { if (window.__rdrIntro) window.__rdrIntro.etape = etape; try { window.dispatchEvent(new CustomEvent('rdr-intro', { detail: { etape } })); } catch (e) {   } };
  function jouerHero() {
    const h = $('hero'); h.classList.remove('est-photo'); clearInterval(diapoTimer);
    if (diapoIdx !== 0) { diapoIdx = 0; poserRail(); $('hv-titre').innerHTML = contenuDiapo(0); barre(); }
    






    const gen = ++heroGen; let parti = false;
    


    const sansVideoIci = !h.querySelector('video');
    h.classList.toggle('entree-affiche', sansVideoIci);
    h.classList.remove('entree-douce');
    signal('debut');
    





    const arreterVideo = () => {
      const v2 = h.querySelector('video'); if (!v2) return;
      try { v2.pause(); } catch (e) {   }
      const s2 = v2.querySelector('source[data-media]');
      if (s2 && s2.getAttribute('src')) { s2.removeAttribute('src'); try { v2.load(); } catch (e) {   } }
    };
    const bascule = () => { if (gen !== heroGen) return; h.classList.add('est-photo'); poserRail(); relancer(); compter(); signal('bascule'); minuteurs.push(setTimeout(() => { if (gen === heroGen) arreterVideo(); }, 1500)); };
    const partir = () => { if (gen !== heroGen || parti) return; parti = true; clearTimeout(heroTimer); heroTimer = setTimeout(bascule, 3200); };
    clearTimeout(heroTimer);
    const v = h.querySelector('video');
    if (v) {
      chargerVideo(v);
      v.addEventListener('playing', partir, { once: true });
      try { v.currentTime = 0; const p = v.play(); if (p && p.catch) p.catch(() => {   }); } catch (e) {   }
    }
    heroTimer = setTimeout(() => { if (!parti) { parti = true; bascule(); } }, sansVideoIci ? 2200 : 1500);
  }
  



  function sansEntree() {
    const h = $('hero'); ++heroGen; clearTimeout(heroTimer); h.classList.remove('entree-douce');
    const v = h.querySelector('video'); if (v) { try { v.pause(); } catch (e) {   } }
    racine.classList.add('sans-entree');
    h.classList.add('est-photo'); poserRail(); relancer(); compter(true);
    requestAnimationFrame(() => requestAnimationFrame(() => racine.classList.remove('sans-entree')));
  }
  


  function entreeDouce() {
    const h = $('hero'); ++heroGen; clearTimeout(heroTimer);
    const v = h.querySelector('video'); if (v) { try { v.pause(); } catch (e) {   } }
    h.classList.remove('est-photo', 'entree-affiche'); h.classList.add('entree-douce'); poserRail();
    signal('douce');
    const gen = heroGen;
    requestAnimationFrame(() => requestAnimationFrame(() => { if (gen !== heroGen) return; h.classList.add('est-photo'); relancer(); compter(); }));
  }
  



  function entree() { if (introPour('hero')) jouerHero(); else entreeDouce(); }
  


  function compter(direct) {
    tout('#hv-titre [data-n]').forEach((el, k) => {
      const fin = Number(el.dataset.n); const depart = performance.now() + 500 + k * 90; const duree = 1100;
      const ecrire = (x) => { el.textContent = Math.round(x).toLocaleString('fr-FR'); };
      if (direct) { ecrire(fin); return; }
      ecrire(0);
      const pas = (t) => { const p = Math.min(1, Math.max(0, (t - depart) / duree)); ecrire(fin * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(pas); };
      requestAnimationFrame(pas);
    });
  }

  




  const liaison = un('.sep--liaison');
  liaison.innerHTML =
    '<div class="sep-sillage" aria-hidden="true"><svg class="sl-svg"><path class="sl-reste"/><path class="sl-fait" pathLength="1000"/></svg>' +
    '<span class="sl-port sl-port--dep"><b>Saint-Malo</b></span><span class="sl-port sl-port--arr"><b>Pointe-à-Pitre</b></span><span class="sl-milles">3 542 milles · 6 560 km</span><span class="sl-bateau sl-bateau--ultim">' + ULTIM + '</span></div>';
  




  function dessinerSillage() {
    const el = liaison.querySelector('.sep-sillage'); const L = largeurPage(); const tel = L < 760; const H = el.clientHeight || (tel ? 112 : 150);
    const m = Math.round(L * (tel ? 0.08 : 0.06)); const y = Math.round(H * 0.78); const sommet = Math.round(H * 0.56);
    const d = 'M' + m + ' ' + y + ' Q ' + (L / 2) + ' ' + (2 * sommet - y) + ' ' + (L - m) + ' ' + y;
    const svg = el.querySelector('.sl-svg'); svg.setAttribute('viewBox', '0 0 ' + L + ' ' + H);
    svg.querySelectorAll('path').forEach(p => p.setAttribute('d', d));
    el.querySelectorAll('.sl-bateau').forEach(b => { b.style.offsetPath = "path('" + d + "')"; });
    const dep = el.querySelector('.sl-port--dep'), arr = el.querySelector('.sl-port--arr');
    dep.style.left = m + 'px'; dep.style.top = y + 'px'; arr.style.left = (L - m) + 'px'; arr.style.top = y + 'px';
    el.querySelector('.sl-milles').style.top = (sommet + (tel ? 14 : 18)) + 'px';
  }
  


  function poserFlotte(oui) {
    const el = liaison.querySelector('.sep-sillage');
    el.querySelectorAll('.sl-suiveur').forEach(b => b.remove());
    el.classList.toggle('avec-flotte', oui);
    if (oui) el.insertAdjacentHTML('beforeend', FLOTTE.map(([cle, dessin]) => '<span class="sl-bateau sl-suiveur sl-bateau--' + cle + '">' + dessin + '</span>').join(''));
    dessinerSillage();
    try { el.getAnimations({ subtree: true }).forEach(a => { a.currentTime = 0; }); } catch (e) {   }
  }
  const largeurPage = () => document.documentElement.clientWidth || innerWidth;
  dessinerSillage();
  let liaisonTimer = null;
  ecoute(window, 'resize', () => { clearTimeout(liaisonTimer); liaisonTimer = setTimeout(() => { dessinerSillage(); reserverTitre(); }, 150); });
   
  if (typeof IntersectionObserver === 'function') {
    const ioHero = new IntersectionObserver((e) => { heroVu = e.some(x => x.isIntersecting); relancer(); }, { threshold: 0 });
    ioHero.observe($('hero')); observateurs.push(ioHero);
  }
  ecoute(document, 'visibilitychange', () => relancer());
  

  $('hv-defiler').innerHTML = '<i>' + CHEV_D + '</i>';
  ecoute(window, 'scroll', () => { if (scrollY > 40) $('hero').classList.add('a-defile'); });
  

  try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => reserverTitre()); } catch (e) {   }
  minuteurs.push(setTimeout(() => reserverTitre(), 1200));
   
  const MEDAILLE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>'; $('pv-ico-verrou').innerHTML = VERROU;

  











  const LANGUE_PUB = /^\/en(\/|$)/.test(location.pathname || '') || /^en/i.test(document.documentElement.lang || '') ? 'en' : 'fr';
  const MODE_PUB = (() => { try { return new URLSearchParams(location.search).get('promo') || ''; } catch (e) { return ''; } })();
  let pubRecalage = 0;
  const promosAttribut = () => { try { const a = JSON.parse((racine.getAttribute && racine.getAttribute('promos')) || 'null'); return Array.isArray(a) ? a : null; } catch (e) { return null; } };
  

  const imgPub = (v) => {
    if (!v || typeof v !== 'object') return null;
    const s = String(v.src || '').trim();
    const m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/) || s.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/#?]+)/);
    if (!m) return null;
    const l = Math.max(0, Math.round(Number(v.l) || 0)), h = Math.max(0, Math.round(Number(v.h) || 0));
    return { id: m[1], l: l && h ? l : 0, h: l && h ? h : 0 };
  };
  const urlPub = (img, largeur) => {
    const w = img.l ? Math.min(largeur, img.l) : largeur;
    const h = img.l ? Math.round(w * img.h / img.l) : largeur;
    return 'https://static.wixstatic.com/media/' + img.id + '/v1/' + (img.l ? 'fill' : 'fit') + '/w_' + w + ',h_' + h + ',q_85,enc_auto/' + img.id;
  };
  const jeuPub = (img, largeurs) => { const vues = new Set(); return largeurs.map(l => img.l ? Math.min(l, img.l) : l).filter(l => !vues.has(l) && vues.add(l)).map(l => urlPub(img, l) + ' ' + l + 'w').join(', '); };
  const lienPub = (u) => { const s = String(u || '').trim(); return /^https:\/\/[^\s"'<>]+$/i.test(s) || /^\/(?!\/)[^\s"'<>]*$/.test(s) ? s : ''; };
  let pubDessinee = '';
  function rendrePub() {
    const boite = $('pub-encart');
    if (!boite) return;
    if (pubRecalage) { clearTimeout(pubRecalage); pubRecalage = 0; }
    const liste = MODE_PUB === 'non' ? [] : MODE_PUB === 'demo' ? (D.promoDemo ? [D.promoDemo] : []) : (promosAttribut() || []);
    const maintenant = Date.now();
    const promos = liste.filter((x) => x && x[LANGUE_PUB]);
    const p = promos.find((x) => (x.debut === null || x.debut === undefined || x.debut <= maintenant) && (x.fin === null || x.fin === undefined || x.fin > maintenant));
    const v = p && p[LANGUE_PUB];
    const o = v && (imgPub(v.ordinateur) || imgPub(v.mobile));
    if (!o) { boite.hidden = true; boite.innerHTML = ''; pubDessinee = ''; }
    else {
      const m = imgPub(v.mobile) || o;
      const lien = lienPub(v.lien);
      const cle = (p.id || '') + '|' + o.id + '|' + m.id + '|' + lien;
      if (cle !== pubDessinee) {
        pubDessinee = cle;
        const image = '<picture><source media="(max-width:760px)" srcset="' + jeuPub(m, [480, 760, 1080]) + '" sizes="100vw">' +
          '<img src="' + urlPub(o, 1400) + '" srcset="' + jeuPub(o, [900, 1400, 2000]) + '" sizes="(max-width:1500px) 92vw, 1240px" alt="' + esc(v.alt || '') + '" loading="lazy" decoding="async"></picture>';
        boite.innerHTML = '<div class="pub-cadre">' + (lien ? '<a href="' + esc(lien) + '"' + (p.nouvelOnglet ? ' target="_blank" rel="noopener"' : '') + '>' + image + '</a>' : image) + '</div>';
        boite.style.setProperty('--pub-ratio', o.l ? (o.l / o.h).toFixed(4) : '3');
        boite.style.setProperty('--pub-ratio-tel', m.l ? (m.l / m.h).toFixed(4) : '3');
      }
      boite.hidden = false;
    }
    let suivant = Infinity;
    promos.forEach((x) => [x.debut, x.fin].forEach((t) => { if (typeof t === 'number' && t > maintenant && t < suivant) suivant = t; }));
    if (suivant - maintenant <= 6 * 60 * 60 * 1000) { pubRecalage = setTimeout(() => { pubRecalage = 0; rendrePub(); }, suivant - maintenant + 500); minuteurs.push(pubRecalage); }
  }
  rendrePub();
  ecoute(racine, 'raa-promos', rendrePub);
   
  { const sectionEspace = un('.espace'); if (sectionEspace && M.topoFaq) sectionEspace.style.setProperty('--topo', 'url("' + M.topoFaq + '")'); }

  








  const BADGES = (Array.isArray(D.badges) ? D.badges : []).filter((b) => b && b.image && b.fr);
  const icoBadge = $('pv-ico-badge'), pastilleBadge = un('.pv-badge');
  const poserBadge = (b) => {
    icoBadge.classList.add('avec-art');
    icoBadge.innerHTML = '<img src="' + esc(b.image) + '" alt="" width="96" height="96" decoding="async">';
  };
  if (!BADGES.length) icoBadge.innerHTML = MEDAILLE;
  else {
    let iBadge = 0;
    poserBadge(BADGES[0]);
    const calme = (() => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
    if (BADGES.length > 1 && !calme) {
      let prechargés = false;
      repeter(() => {
        if (!prechargés) { prechargés = true; BADGES.slice(1).forEach((b) => { const im = new Image(); im.src = b.image; }); }
        pastilleBadge.classList.add('est-change');
        minuteurs.push(setTimeout(() => { iBadge = (iBadge + 1) % BADGES.length; poserBadge(BADGES[iBadge]); pastilleBadge.classList.remove('est-change'); }, 280));
      }, 3200);
    }
  }

   
  const HUB = { actu: { c: '#0B6E6B', bg: '#DCF2EF', lib: 'Actualités' }, photo: { c: '#5747C9', bg: '#E9E6FB', lib: 'Photo' }, video: { c: '#A14D00', bg: '#FBEAD6', lib: 'Vidéo' }, audio: { c: '#0E5B84', bg: '#DCEBF7', lib: 'Audio' }, interview: { c: '#8A6C00', bg: '#FBF3CD', lib: 'Interview' } };
  const CAT_HUB = { actu: 'actualites', photo: 'image', video: 'video', audio: 'audio' };
  $('onglets').innerHTML = ['actu', 'photo', 'video', 'audio'].map(k => '<a class="onglet"' + href('/medias-actualites?cat=' + CAT_HUB[k]) + ' style="--c:' + HUB[k].c + ';--bg:' + HUB[k].bg + '"><i>' + ICO[k] + '</i>' + (k === 'actu' ? 'Actu' : HUB[k].lib) + '</a>').join('');
  const wixImg = (v, w, h) => { const m = String(v || '').match(/^wix:image:\/\/v1\/([^/#]+)/); return m ? IMG(m[1], w, h) : String(v || ''); };
  const ilYa = (iso) => { const d = (Date.now() - new Date(iso).getTime()) / 86400000; return d < 1 ? 'aujourd\'hui' : d < 2 ? 'hier' : 'il y a ' + Math.floor(d) + ' j'; };
  const cat = (t) => '<span class="cat" style="--c:' + HUB[t].c + ';--bg:' + HUB[t].bg + '">' + ICO[t] + HUB[t].lib + '</span>';
  Promise.resolve(D.actus).then(a => {
    const posts = (Array.isArray(a) ? a : a.posts);
     
    const type = (i, p) => i === 1 ? 'video' : i === 4 ? 'photo' : i === 5 ? 'audio' : /interview/i.test(p._categoryLabel || '') ? 'interview' : 'actu';
    const une = posts[0], video = posts[1], photo = posts[4];
    const lienPost = (p) => p.lien || (p.slug ? '/post/' + p.slug : '/medias-actualites');
    $('une-actu').innerHTML = '<a class="carte carte--une"' + href(lienPost(une)) + '><img class="cover" loading="lazy" decoding="async" src="' + wixImg(une.coverImage, pourLarge(etroit() ? 350 : 620), Math.round(pourLarge(etroit() ? 350 : 620) * 0.75)) + '" alt="">' +
      '<div class="carte-haut">' + cat(type(0, une)) + '<span class="kicker kicker--jaune">À la une</span></div>' +
      '<div class="carte-txt"><div class="sujets">' + (une._tags || []).slice(0, 2).map(t => '<span class="sujet">' + esc(t.label) + '</span>').join('') + '</div><h3>' + esc(une.title.trim()) + '</h3><p>' + esc(une.excerpt || '') + '</p><span class="quand"><b>Nouveau</b> · ' + ilYa(une.publishedDate) + ' · ' + une.timeToRead + ' min de lecture</span></div></a>';
    $('medias').innerHTML = [[video, 'video', 'La dernière vidéo'], [photo, 'photo', 'Le dernier reportage']].map(([p, t, lib]) =>
      '<a class="carte"' + href(lienPost(p)) + '><img class="cover" loading="lazy" decoding="async" src="' + wixImg(p.coverImage, pourLarge(etroit() ? 350 : 420), Math.round(pourLarge(etroit() ? 350 : 420) * 0.625)) + '" alt=""><div class="carte-haut">' + cat(t) + '<span class="glyphe">' + ICO[t] + '</span></div>' + (t === 'video' ? '<span class="glyphe glyphe--grand">' + ICO.video + '</span>' : '') +
      '<div class="carte-txt"><span class="quand" style="color:var(--teal);font-weight:800;letter-spacing:.1em;text-transform:uppercase;font-size:10.5px">' + lib + '</span><h3>' + esc(p.title.trim()) + '</h3><span class="quand">' + ilYa(p.publishedDate) + (t === 'video' ? ' · 2 min 40' : ' · 24 photos') + '</span></div></a>').join('');
    $('breves').innerHTML = [2, 3, 6, 7].map(i => { const p = posts[i]; return '<a class="breve"' + href(lienPost(p)) + '><img src="' + wixImg(p.coverImage, 240, 200) + '" alt="" loading="lazy"><div>' + cat(type(i, p)) + '<h3>' + esc(p.title.trim()) + '</h3><span class="quand">' + ilYa(p.publishedDate) + ' · ' + p.timeToRead + ' min</span></div></a>'; }).join('');
    reveler('.actus .carte', 120); reveler('.breve', 90);
  });

   
  const CLASSES = D.classes;
  const ROT = [-0.5, 0.4, -0.3, 0.5, -0.4, 0.3];
  const vecteur = (v) => { const m = String(v || '').match(/^wix:vector:\/\/v1\/([^/#]+)/); return m ? 'https://static.wixstatic.com/shapes/' + m[1] : String(v || ''); };
  $('classes').innerHTML = Object.keys(CLASSES).map(k => '<a class="classe"' + href('/skippers') + ' style="--cc:' + CLASSES[k].c + '" title="' + k + '"><img loading="lazy" decoding="async" src="' + CLASSES[k].icone + '" alt="' + k + '"><b>' + CLASSES[k].n + '</b><small>bateaux</small></a>').join('');
  







  const vivierAttribut = () => { try { const a = JSON.parse((racine.getAttribute && racine.getAttribute('skippers')) || 'null'); return Array.isArray(a) && a.length >= 6 ? a : null; } catch (e) { return null; } };
  const tirer = (arr, n) => { const a = arr.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a.slice(0, n); };
  let pvI = 0;
  function rendreSkippers(s) {
    const liste = tirer(Array.isArray(s) ? s : (s.skippers || Object.values(s)[0]), 6);
    pvI = 0;
    $('skippers').innerHTML = liste.map((k, i) => { const cfg = CLASSES[(k.classes && k.classes.nom) || ''] || {}; const cc = (k.classes && k.classes.couleur) || cfg.c || '#5dbfc0';
      return '<div class="sk" style="--cc:' + cc + ';--rot:' + ROT[i] + 'deg"><div class="sk-flip"><div class="sk-face sk-front"><img class="sk-img" src="' + esc(retaille(k.photoVignette, pourLarge(etroit() ? 190 : 215), 74)) + '" alt="" loading="lazy">' +
        '<div class="sk-ov"><div class="sk-prenom"><img loading="lazy" decoding="async" src="' + esc(vecteur(k.drapeau)) + '" alt="">' + esc(k.prenom) + '</div><div class="sk-nom">' + esc(k.nom) + '</div><div class="sk-bateau">' + esc(k.bateau || '') + '</div></div></div>' +
        '<div class="sk-face sk-back"></div>' + (cfg.icone ? '<div class="sk-classe"><img loading="lazy" decoding="async" src="' + cfg.icone + '" alt=""></div>' : '') + '</div></div>'; }).join('');
     
    $('pv-skipper').innerHTML = liste.slice(0, 5).map((k, i) => { const cfg = CLASSES[(k.classes && k.classes.nom) || ''] || {}; const cc = (k.classes && k.classes.couleur) || cfg.c || '#5dbfc0';
      return '<div class="pv-sk' + (i === 0 ? ' est-active' : '') + '" style="--cc:' + cc + '"><img loading="lazy" decoding="async" src="' + esc(retaille(k.photoVignette, pourLarge(etroit() ? 150 : 200), 74)) + '" alt="">' + (cfg.icone ? '<img class="pv-sk-classe" src="' + cfg.icone + '" alt="">' : '') +
        '<div class="pv-sk-ov"><span class="pv-micro">' + COEUR + 'Skipper préféré</span><b>' + esc(k.prenom) + '</b><strong>' + esc(k.nom) + '</strong><small>' + esc(k.bateau || '') + '</small></div></div>'; }).join('');
    reveler('#skippers .sk-flip', 150);
  }
  


  let vivierDessine = vivierAttribut() ? racine.getAttribute('skippers') : null;
  rendreSkippers(vivierAttribut() || D.skippers);
  ecoute(racine, 'raa-skippers', () => { const brut = racine.getAttribute('skippers'); if (brut === vivierDessine) return; const v = vivierAttribut(); if (v) { vivierDessine = brut; rendreSkippers(v); } });
  repeter(() => { const c = $('pv-skipper').querySelectorAll('.pv-sk'); if (c.length < 2) return; pvI = pvI % c.length; c[pvI].classList.remove('est-active'); pvI = (pvI + 1) % c.length; c[pvI].classList.add('est-active'); }, 3400);
  function reveler(sel, pas) {
    const els = [...tout(sel)];
    const io = new IntersectionObserver((ents) => { ents.forEach(e => { if (e.isIntersecting) { const i = els.indexOf(e.target); setTimeout(() => e.target.classList.add('est-la'), 60 + (i % 6) * pas); io.unobserve(e.target); } }); }, { threshold: .1 });
    observateurs.push(io); els.forEach(e => io.observe(e));
  }

  

















  const politiqueMarketing = () => {
    try {
      const p = window.consentPolicyManager && window.consentPolicyManager.getCurrentConsentPolicy();
      const pol = p && p.policy;
      return pol ? pol.advertising === true : true;
    } catch (e) { return true; }
  };
  function ouvrirCookies() {
    try {
      const o = window.__ucCmp || window.UC_UI;
      if (o && typeof o.showSecondLayer === 'function') { o.showSecondLayer(); return; }
      if (typeof window.openCookieSettings === 'function') { window.openCookieSettings(); return; }
    } catch (e) {   }
  }
  function lancerVideo() {
    $('video').innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(M.youtube) + '?autoplay=1&rel=0&playsinline=1" title="TyMAL, la vidéo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }
  const COOKIE_ICO = '<svg class="vc-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M11.5 12.5v.01"/></svg>';
  function demanderCookies() {
    const cadre = $('video');
    if (cadre.querySelector('.vc-cookies')) return;
    const carte = document.createElement('div');
    carte.className = 'vc-cookies';
    carte.innerHTML = COOKIE_ICO +
      '<b>La vidéo est hébergée par YouTube</b>' +
      '<p>Elle ne se charge pas tant que les cookies marketing sont refusés, pour que rien ne parte chez un tiers sans votre accord.</p>' +
      '<button type="button" data-rdr-cookies>Gérer mes cookies</button>' +
      '<a href="https://www.youtube.com/watch?v=' + encodeURIComponent(M.youtube) + '" target="_blank" rel="noopener">Regarder sur YouTube</a>';
    cadre.appendChild(carte);
    carte.querySelector('button').addEventListener('click', ouvrirCookies);
    carte.querySelector('button').focus();
    let tours = 0;
    const guet = setInterval(() => {
      if (++tours > 150) { clearInterval(guet); return; }
      if (!politiqueMarketing()) return;
      clearInterval(guet);
      lancerVideo();
    }, 600);
    minuteurs.push(guet);
  }
  $('video').querySelector('button').addEventListener('click', () => {
    if (politiqueMarketing()) lancerVideo(); else demanderCookies();
  });

   
  const DISPOS = { a: 'fondu', b: 'sous' };
  const presse = (sel, b) => tout(sel).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  function disposer(cle) {
    $('hero').dataset.acces = DISPOS[cle];
    presse('[data-dispo]', un('[data-dispo="' + cle + '"]')); placer(); note();
  }
  function marquerDiapos() { const b = $('mq-diapos'); if (!b) return; b.setAttribute('aria-pressed', String(avecDiapos)); b.textContent = avecDiapos ? 'Oui' : 'Non'; }
  function afficher(cle) { modeAffiche = cle; presse('[data-aff]', un('[data-aff="' + cle + '"]')); rendreAffiche(); }
  tout('[data-phase]').forEach(b => b.addEventListener('click', () => {
    phase = b.dataset.phase; presse('[data-phase]', b);
    rendreHero(); rendreCtas(); sansEntree(); note();
  }));
  tout('[data-dispo]').forEach(b => b.addEventListener('click', () => disposer(b.dataset.dispo)));
  tout('[data-aff]').forEach(b => b.addEventListener('click', () => afficher(b.dataset.aff)));
  

  if ($('mq')) {
    $('mq-diapos').addEventListener('click', () => { avecDiapos = !avecDiapos; marquerDiapos(); rendreHero(); if ($('hero').classList.contains('est-photo')) { poserRail(); relancer(); } });
    $('mq-rejouer').addEventListener('click', jouerHero);
    un('#mq b').addEventListener('click', () => $('mq').classList.toggle('replie'));
     
    if (innerWidth < 760) $('mq').classList.add('replie');
  }
  function note() { const n = $('mq-note'); if (n) n.textContent = innerWidth + ' × ' + innerHeight + ' · hero ' + $('hero').offsetHeight + ' px · ' + PHASES[phase].nom; }
  ecoute(window, 'resize', note);
  


  function rendreFaq(oui) {
    const F = D.faq; const bloc = $('faq-bloc');
    if (!oui || !F) { bloc.hidden = true; return; }
    bloc.hidden = false;
    const ic = (p) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
     
    const CHEVRON = '<path d="m6 9 6 6 6-6"/>', FLECHE_D = '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', FLECHE_HD = '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>';
     
    const COULEUR = { depart: 'var(--teal)', village: 'var(--jaune)', venir: 'var(--orange)', course: '#8B86E0', pratique: 'var(--teal2)' };
    const RUBRIQUE = { depart: 'Le départ', village: 'Le village', venir: 'Venir', course: 'La course', pratique: 'Pratique' };
    const couleur = (a) => COULEUR[String(a).split('-')[0]] || 'var(--teal)';
    $('fa-fil').innerHTML = '<b>Route du Rhum</b> · ' + esc(F.kicker);
    $('fa-titre').innerHTML = titreHtml(F.titre);
    $('fa-q').placeholder = F.exemple || '';
    ['fa-toutes', 'fa-toutes-bas'].forEach((id) => { const a = $(id); if (!a) return; a.href = lien(F.toutes.url); a.innerHTML = esc(F.toutes.texte) + '<i>' + ic(FLECHE_D) + '</i>'; });
    

    const texte = (t, l) => {
      let s = esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
      if (l) s = s.replace(esc(l.texte), '<a href="' + esc(lien(l.url)) + '">' + esc(l.texte) + '</a>');
      return s.replace(/\b1er\b/g, '1<sup>er</sup>');
    };
    const valider = (t) => (t ? '<p><span class="fa-valider">À valider</span>' + esc(t) + '</p>' : '');
     
    $('fa-liste').innerHTML = F.questions.map((x, i) => '<details class="fa-q" id="faq-' + esc(x.ancre) + '" style="--cc:' + couleur(x.ancre) + ';--i:' + i + '"' + (i === 0 ? ' open' : '') + '><summary><b>' + esc(x.q) + '</b>' + (RUBRIQUE[String(x.ancre).split('-')[0]] ? '<em class="fa-rub">' + RUBRIQUE[String(x.ancre).split('-')[0]] + '</em>' : '') + '<i>' + ic(CHEVRON) + '</i></summary><div class="fa-rep">' +
      (x.p || []).map(t => '<p>' + texte(t, x.lien) + '</p>').join('') + valider(x.aValider) +
      (x.src ? '<a class="fa-source" href="' + esc(lien(x.src.url)) + '">' + esc(x.src.texte) + ic(FLECHE_HD) + '</a>' : '') + '</div></details>').join('');
    

    if (M.topoFaq) $('fa-topo').style.setProperty('--topo', 'url("' + M.topoFaq + '")');
    const section = $('faq-acc');
    if (typeof IntersectionObserver !== 'function') section.classList.add('fa-vu');
    else {
      const io = new IntersectionObserver((e) => { if (e.some(x => x.isIntersecting)) { section.classList.add('fa-vu'); io.disconnect(); } }, { threshold: 0.15 });
      io.observe(section); observateurs.push(io);
    }
  }
  



  const q = new URLSearchParams(location.search);
  if (PHASES[q.get('phase')]) { phase = q.get('phase'); presse('[data-phase]', un('[data-phase="' + phase + '"]')); }
  disposer(DISPOS[q.get('dispo')] ? q.get('dispo') : 'b');
  

  avecDiapos = q.get('diapos') === 'oui'; marquerDiapos();
  racine.dataset.liaison = 'sillage';
  poserFlotte(q.get('flotte') !== 'non');
  modeAffiche = q.get('aff') === 'billets' ? 'billets' : 'ligne'; presse('[data-aff]', un('[data-aff="' + modeAffiche + '"]'));
  



  modeDepart = q.get('depart') === 'repere' ? 'repere' : (q.get('depart') === 'non' ? '' : 'bandeau');
  rendreFaq(q.get('faq') !== 'non');
  placer(); rendreHero(); rendreCtas(); entree(); note();
  return () => { ecouteurs.forEach(f => f()); minuteurs.forEach(t => clearInterval(t)); observateurs.forEach(o => o.disconnect()); clearTimeout(heroTimer); clearTimeout(liaisonTimer); };
}
 

  customElements.define('rdr-accueil-apercu', RdrAccueilApercu);
})();
})();
