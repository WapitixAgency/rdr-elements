/* rdr-elements bateaux | source route-du-rhum 1b03390 | rdr-bateaux.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["bateaux"]="1b03390";performance.mark("rdr-elements:bateaux")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-bateaux")) return;
  const CSS = "rdr-bateaux{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-bateaux .rbt-attente{min-height:clamp(560px,calc(100svh - 215px),820px);background:#0B1B33}\n@media (max-width:750px){rdr-bateaux .rbt-attente{min-height:clamp(520px,calc(100svh - 160px),760px)}}\nrdr-bateaux .rbt-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#0B1B33;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-bateaux .rbt-vide h3{margin:0;font-size:22px}\nrdr-bateaux .rbt-vide p{margin:0;color:rgba(255,255,255,.72)}\nrdr-bateaux .rbt-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}\n@property --pointe{syntax:'<length>';inherits:true;initial-value:720px}\nrdr-bateaux>.rbt-racine{--marine:#16355D;--eau:#5DBFC0;--jaune:#FCF150;--nuit:#0B1B33;--nuit-voile:11,27,51;--encre:#0F2847;--encre2:#3E5673;--encre3:#6E7F96;--filet:rgba(22,53,93,.14);--police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;--largeur:1240px;--marge:clamp(16px,4vw,40px);--entete:175px;--colle:56px;--air:1.5;--cc:#76BCBE;--f:.86;--q:.92;--cc-clair:color-mix(in srgb,var(--cc) 17%,#fff);--cc-arcs:color-mix(in oklab,var(--cc) 72%,#fff);--bc-picto:64px;--barre:86px;--blason:clamp(72px,7vw,104px);--S:min(530px,40vw,calc(100svh - var(--colle) - var(--barre) - 44px));--deborde:clamp(56px,9vh,84px);--bd-bas:calc(clamp(26px,4.5vh,48px) * var(--air));--cc-ligne:var(--cc);}\nrdr-bateaux>.rbt-racine[data-fond=\"clair\"]{--cc-arcs:color-mix(in oklab,var(--cc) 88%,#5B4A00);--cc-ligne:color-mix(in oklab,var(--cc) 72%,#5B4A00)}\n@media (max-height:820px) and (min-width:751px){\nrdr-bateaux>.rbt-racine{--bc-picto:56px;--barre:78px;--blason:74px}\n}\n@media (max-width:900px){\nrdr-bateaux>.rbt-racine{--S:min(calc(100vw - 2 * var(--marge)),520px,calc(100svh - var(--colle) - var(--barre) - 80px))}\n}\n@media (max-width:750px){\nrdr-bateaux>.rbt-racine{--air:1.3;--entete:120px;--colle:60px;--bc-picto:54px;--barre:75px}\n}\nrdr-bateaux *{box-sizing:border-box}\nrdr-bateaux>.rbt-racine{margin:0;background:#fff;color:var(--encre);font:15px/1.6 var(--police);-webkit-font-smoothing:antialiased}\nrdr-bateaux img{display:block;max-width:100%}\nrdr-bateaux a{color:inherit}\nrdr-bateaux h1,rdr-bateaux h2,rdr-bateaux h3,rdr-bateaux p,rdr-bateaux ol,rdr-bateaux ul{margin:0}\nrdr-bateaux button{font:inherit;color:inherit}\nrdr-bateaux .trame{position:relative;max-width:var(--largeur);margin:0 auto;padding:0 var(--marge)}\nrdr-bateaux .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.95}\nrdr-bateaux .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-bateaux sup{font-size:.62em;line-height:0;vertical-align:.5em}\nrdr-bateaux .nuit{position:relative;overflow:hidden;background:var(--nuit);color:#fff}\nrdr-bateaux .haut{--haut-h:clamp(560px,calc(100svh - var(--entete) - 40px),820px);position:relative;isolation:isolate;display:flex;align-items:center;min-height:var(--haut-h)}\nrdr-bateaux .haut-photo{position:absolute;z-index:-1;top:0;right:0;left:40%;height:var(--haut-h);margin:0;overflow:hidden}\nrdr-bateaux .haut-photo img{position:absolute;left:0;top:-10%;width:100%;height:110%;object-fit:cover;object-position:60% 42%;will-change:transform}\nrdr-bateaux .haut-photo::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--nuit) 0%,rgba(var(--nuit-voile),.9) 8%,rgba(var(--nuit-voile),.6) 18%,rgba(var(--nuit-voile),.22) 30%,rgba(var(--nuit-voile),0) 42%),linear-gradient(0deg,var(--nuit) 0%,rgba(var(--nuit-voile),.6) 16%,rgba(var(--nuit-voile),0) 42%)}\nrdr-bateaux .haut .trame{width:100%;padding-top:clamp(28px,5vh,56px);padding-bottom:clamp(36px,7vh,72px)}\nrdr-bateaux .haut-txt{max-width:min(44vw,600px)}\nrdr-bateaux .kicker{display:inline-flex;align-items:center;gap:10px;font:800 11px/1.3 var(--police);letter-spacing:.2em;text-transform:uppercase;color:var(--eau)}\nrdr-bateaux .kicker::before{content:'';width:26px;height:2px;background:currentColor}\nrdr-bateaux .haut h1{margin-top:16px;font-size:clamp(44px,5.6vw,84px);white-space:nowrap}\nrdr-bateaux .haut h1 em{display:block;font-style:inherit;color:var(--jaune)}\nrdr-bateaux .haut-chapo{margin-top:22px;font-size:clamp(14.5px,1.15vw,16.5px);line-height:1.62;color:rgba(255,255,255,.8)}\nrdr-bateaux .haut-suite p{margin-top:14px;font-size:clamp(14px,1.05vw,15.5px);line-height:1.66;color:rgba(255,255,255,.72)}\nrdr-bateaux .haut .lire-suite{color:#fff}\nrdr-bateaux .haut .lire-suite::after{background:var(--jaune)}\nrdr-bateaux .repere{display:flex;align-items:center;gap:14px;width:max-content;margin-top:18px;padding:10px 18px 10px 14px;border:1px solid rgba(255,255,255,.2);border-radius:14px 4px 14px 4px;background:rgba(var(--nuit-voile),.6)}\nrdr-bateaux .repere b{font:italic 400 34px/1 var(--titre);color:var(--jaune)}\nrdr-bateaux .repere>span{display:flex;flex-direction:column;gap:8px;font:700 12.5px/1 var(--police);letter-spacing:.16em;text-transform:uppercase}\nrdr-bateaux .rep-six{display:grid;grid-template-columns:repeat(6,16px);gap:4px}\nrdr-bateaux .rep-six i{height:5px;border-radius:2px 5px 2px 5px;background:var(--c)}\nrdr-bateaux .choix{position:relative;padding:0 0 clamp(30px,4.5vh,44px)}\nrdr-bateaux .choix-lead{display:flex;align-items:flex-start;justify-content:center;gap:10px;max-width:80ch;margin:0 auto;font-weight:600;font-size:14.5px;line-height:1.55;color:rgba(255,255,255,.8)}\nrdr-bateaux .choix-lead .ico{width:18px;height:18px;margin-top:1px;color:var(--jaune);animation:rbt-descend 1.8s ease-in-out infinite}\n@keyframes rbt-descend{50%{transform:translateY(4px)}}\nrdr-bateaux .choix-titre{margin-top:clamp(20px,3.4vh,34px);font-size:clamp(22px,2.3vw,34px);text-align:center;color:#fff}\nrdr-bateaux .ong-liste{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:clamp(8px,2.6vw,40px);max-width:1000px;margin:clamp(24px,4.4vh,44px) auto 0;align-items:end}\nrdr-bateaux .ong{position:relative;display:flex;justify-content:center;padding:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent}\nrdr-bateaux .ong img{height:clamp(110px,12.5vw,184px);width:auto;max-width:100%;object-fit:contain;opacity:.78;filter:saturate(.9);transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .25s,filter .25s}\nrdr-bateaux .ong:hover img{opacity:.95;filter:saturate(1);transform:translateY(-4px)}\nrdr-bateaux .ong[aria-selected=\"true\"] img,rdr-bateaux .ong[aria-pressed=\"true\"] img{opacity:1;filter:saturate(1.05) drop-shadow(0 16px 18px rgba(0,0,0,.42));transform:translateY(-10px)}\nrdr-bateaux .ong:focus-visible{outline:2px solid var(--marine);outline-offset:4px;border-radius:3px 10px 3px 10px}\nrdr-bateaux .ong-liste .ong:focus-visible{outline-color:var(--jaune)}\nrdr-bateaux .ong-liste .ong{will-change:transform,opacity}\nrdr-bateaux .barre-classes{position:fixed;left:0;right:0;top:var(--colle);z-index:30;background:rgba(255,255,255,.97);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:3px solid var(--cc);box-shadow:0 12px 24px -18px rgba(15,40,71,.55);transform:translateY(calc(-100% - var(--colle)));transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .45s;visibility:hidden}\nrdr-bateaux .barre-classes.visible{transform:none;visibility:visible}\nrdr-bateaux .bc-liste{display:flex;justify-content:center;gap:clamp(6px,2.4vw,40px);padding:9px 0 10px}\nrdr-bateaux .bc-liste .ong{align-items:center;gap:10px;min-width:44px;min-height:48px;padding:0 4px}\nrdr-bateaux .bc-liste .ong img{height:var(--bc-picto);width:auto;max-width:none;opacity:.8;filter:saturate(.8);transform:none;transform-origin:50% 100%;transition:transform .3s cubic-bezier(.2,.8,.2,1),opacity .25s,filter .25s}\nrdr-bateaux .bc-lib{max-width:7.4em;font:800 11px/1.2 var(--police);letter-spacing:.08em;text-transform:uppercase;text-align:left;color:var(--encre3);transition:color .25s}\nrdr-bateaux .bc-liste .ong::after{content:'';position:absolute;left:0;right:0;bottom:-10px;height:5px;border-radius:2px 5px 2px 5px;background:var(--marine);transform:scaleX(0);transition:transform .3s cubic-bezier(.2,.8,.2,1)}\nrdr-bateaux .bc-liste .ong:hover img{opacity:1;filter:none;transform:translateY(-2px)}\nrdr-bateaux .bc-liste .ong:hover .bc-lib{color:var(--marine)}\nrdr-bateaux .bc-liste .ong[aria-pressed=\"true\"] img{opacity:1;filter:drop-shadow(0 5px 7px rgba(15,40,71,.3));transform:scale(1.1)}\nrdr-bateaux .bc-liste .ong[aria-pressed=\"true\"] .bc-lib{color:var(--marine)}\nrdr-bateaux .bc-liste .ong[aria-pressed=\"true\"]::after{transform:scaleX(1)}\n@media (max-width:999px){\nrdr-bateaux .bc-lib{display:none}\n}\nrdr-bateaux .fiche-zone{background:linear-gradient(var(--nuit),var(--nuit)) 0 0 / 100% 17px no-repeat}\nrdr-bateaux .fiche-grille{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);column-gap:clamp(28px,4.5vw,64px)}\nrdr-bateaux .bandeau{--P:16px;--W:22px;position:relative;overflow:hidden;background:var(--cc);clip-path:polygon(0 var(--P),calc(var(--pointe) - var(--W)) var(--P),var(--pointe) 0,calc(var(--pointe) + var(--W)) var(--P),100% var(--P),100% 100%,0 100%);transition:background-color .45s,--pointe .55s cubic-bezier(.3,.8,.25,1)}\nrdr-bateaux .fili{position:absolute;top:0;right:0;bottom:0;width:min(760px,60%);pointer-events:none;opacity:.5;background:no-repeat left -30px top -110px / 1180px auto;-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 60%);mask-image:linear-gradient(90deg,transparent 0%,#000 60%)}\nrdr-bateaux .bandeau .trame{z-index:1;align-items:center;min-height:calc(var(--f) * var(--S) + var(--P) + 34px);padding-top:calc(var(--P) + clamp(28px,5vh,56px) * var(--air));padding-bottom:calc(clamp(26px,4.5vh,48px) * var(--air))}\nrdr-bateaux .bd-texte{grid-column:2}\nrdr-bateaux .bd-tete{display:flex;align-items:center;gap:18px}\nrdr-bateaux .bd-tete img{height:var(--blason);width:auto;filter:drop-shadow(0 10px 14px rgba(15,40,71,.28)) drop-shadow(0 0 1px rgba(255,255,255,.9))}\nrdr-bateaux .bandeau h2{font-size:clamp(42px,5vw,76px);color:var(--marine)}\nrdr-bateaux .bd-intro{margin-top:18px;max-width:62ch}\nrdr-bateaux .bd-intro p{font-size:15.5px;line-height:1.7;color:var(--encre)}\nrdr-bateaux .bd-intro p+p{margin-top:12px}\nrdr-bateaux .bd-intro strong{font-weight:700}\nrdr-bateaux .lire-suite{position:relative;display:inline-flex;align-items:center;gap:8px;min-height:44px;margin-top:2px;padding:0;border:0;background:none;color:var(--marine);font:800 11px var(--police);letter-spacing:.14em;text-transform:uppercase;cursor:pointer}\nrdr-bateaux .lire-suite::after{content:'';position:absolute;left:0;right:0;top:calc(50% + 9px);height:2px;background:currentColor}\nrdr-bateaux .lire-suite .ico{width:14px;height:14px;transition:transform .3s}\nrdr-bateaux .lire-suite[aria-expanded=\"true\"] .ico{transform:rotate(180deg)}\nrdr-bateaux .suite{display:none}\nrdr-bateaux .suite.ouverte{display:block;margin-top:12px}\n@media (min-width:901px){\nrdr-bateaux .bandeau{z-index:3;overflow:visible;clip-path:polygon(0 var(--P),calc(var(--pointe) - var(--W)) var(--P),var(--pointe) 0,calc(var(--pointe) + var(--W)) var(--P),100% var(--P),100% calc(100% + 400px),0 calc(100% + 400px))}\nrdr-bateaux .bandeau .trame{min-height:0;padding-bottom:var(--bd-bas)}\nrdr-bateaux .bd-texte{grid-row:1}\nrdr-bateaux .bandeau .media{grid-area:auto;grid-column:1;grid-row:1;align-self:stretch;display:flex;flex-direction:column;margin:0 0 calc(-1 * (var(--bd-bas) + var(--deborde)));padding:0}\nrdr-bateaux .bandeau .media>*{flex:none}\nrdr-bateaux .bandeau .logo{margin-top:calc((var(--blason) - 48px) / 2)}\nrdr-bateaux .bandeau .video{margin-top:auto}\n}\nrdr-bateaux .fiche{position:relative;z-index:2;padding-bottom:calc(clamp(40px,6.5vh,76px) * var(--air))}\nrdr-bateaux .fiche-corps{grid-template-areas:\"plan legende\";grid-template-rows:auto;align-items:start}\nrdr-bateaux .plan{grid-area:plan;position:relative;width:var(--S);aspect-ratio:1;margin:calc(var(--f) * var(--S) * -1) auto 0}\nrdr-bateaux .legende{grid-area:legende;min-width:0;padding-top:clamp(10px,2.2vh,22px)}\n@media (min-width:901px){\nrdr-bateaux .fiche{padding-top:calc(var(--deborde) + clamp(30px,5.5vh,56px) * var(--air))}\nrdr-bateaux .plan{position:sticky;top:calc(var(--colle) + var(--barre) + 16px);margin:0 auto calc((var(--q) - 1) * var(--S))}\nrdr-bateaux .plan::before{content:'';position:absolute;left:0;right:0;top:calc(var(--f) * 100%);height:4px;margin-top:-2px;border-radius:2px 4px 2px 4px;background:var(--cc-ligne);transition:background-color .45s}\nrdr-bateaux .pt.actif{z-index:3}\nrdr-bateaux .pt:hover,rdr-bateaux .pt.vise{z-index:4}\n}\nrdr-bateaux .plan-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none;filter:drop-shadow(0 0 .7px rgba(15,40,71,.5)) drop-shadow(0 6px 14px rgba(15,40,71,.16))}\nrdr-bateaux .pt{position:absolute;z-index:2;width:28px;height:28px;margin:0;padding:0;border:2px solid #fff;border-radius:50%;background:var(--marine);color:#fff;font:800 12px/1 var(--police);display:grid;place-items:center;transform:translate(-50%,-50%);cursor:pointer;box-shadow:0 3px 10px rgba(15,40,71,.35);transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,background-color .25s,color .25s}\nrdr-bateaux .pt::before{content:'';position:absolute;inset:-10px;border-radius:50%}\nrdr-bateaux .pt::after{content:'';position:absolute;inset:-7px;border-radius:50%;border:1.5px solid var(--marine);opacity:0;animation:rbt-onde 3s ease-out infinite;animation-delay:calc(var(--k) * .35s)}\n@keyframes rbt-onde{0%{opacity:.5;transform:scale(.6)}100%{opacity:0;transform:scale(1.35)}}\nrdr-bateaux .pt:hover,rdr-bateaux .pt.vise,rdr-bateaux .pt.actif{transform:translate(-50%,-50%) scale(1.2);box-shadow:0 5px 16px rgba(15,40,71,.4),0 0 0 5px rgba(255,255,255,.55)}\nrdr-bateaux .pt.actif{background:var(--jaune);color:var(--marine)}\nrdr-bateaux .pt.actif::after{animation:none}\nrdr-bateaux .pt:focus-visible{outline:2px solid var(--marine);outline-offset:4px}\nrdr-bateaux .pt-nom{position:absolute;left:calc(100% + 10px);top:50%;transform:translateY(-50%);padding:6px 10px;border-radius:8px 2px 8px 2px;background:var(--marine);color:#fff;font:italic 400 15px/1 var(--titre);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s}\nrdr-bateaux .pt.gauche .pt-nom{left:auto;right:calc(100% + 10px)}\nrdr-bateaux .pt.actif .pt-nom{opacity:1}\nrdr-bateaux .an-aide{display:flex;align-items:center;gap:10px;margin:0;font-size:13px;color:var(--encre2)}\nrdr-bateaux .an-aide .ico{width:18px;height:18px;color:var(--marine)}\nrdr-bateaux .an-aide .toucher{display:none}\n@media (hover:none){\nrdr-bateaux .an-aide .survol{display:none}\nrdr-bateaux .an-aide .toucher{display:inline}\n}\nrdr-bateaux .pieces{list-style:none;padding:0;margin-top:14px;display:flex;flex-direction:column;gap:6px}\nrdr-bateaux .piece{border-radius:14px 4px 14px 4px;border:1px solid var(--filet);background:#fff;transition:box-shadow .25s,border-color .25s}\nrdr-bateaux .piece.ouverte{border-color:transparent;box-shadow:inset 4px 0 0 var(--cc),0 16px 30px -24px rgba(15,40,71,.55),0 0 0 1px var(--filet)}\nrdr-bateaux .piece-bt{display:flex;align-items:center;gap:14px;width:100%;padding:10px 14px;border:0;background:none;color:var(--marine);text-align:left;cursor:pointer}\nrdr-bateaux .piece-n{display:grid;place-items:center;flex:none;width:28px;height:28px;border-radius:50%;background:var(--marine);color:#fff;font:800 12px var(--police);transition:background .25s,color .25s}\nrdr-bateaux .piece.ouverte .piece-n{background:var(--jaune);color:var(--marine)}\nrdr-bateaux .piece-nom{flex:1;font:italic 400 clamp(18px,1.6vw,22px)/1 var(--titre)}\nrdr-bateaux .piece-bt .ico{width:18px;height:18px;color:var(--encre3);transition:transform .3s}\nrdr-bateaux .piece.ouverte .piece-bt .ico{transform:rotate(180deg)}\nrdr-bateaux .piece-txt{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s cubic-bezier(.2,.8,.2,1)}\nrdr-bateaux .piece.ouverte .piece-txt{grid-template-rows:1fr}\nrdr-bateaux .piece-txt>div{overflow:hidden}\nrdr-bateaux .piece-txt p{padding:0 16px 14px 56px;font-size:14px;line-height:1.66;color:var(--encre2)}\nrdr-bateaux .media{grid-area:media;min-width:0}\nrdr-bateaux .logo{display:block;height:48px;width:auto;max-width:230px;object-fit:contain;object-position:left center;margin-bottom:18px}\nrdr-bateaux .video{position:relative;aspect-ratio:16/9;border-radius:18px 5px 18px 5px;overflow:hidden;background:var(--marine);box-shadow:0 26px 46px -28px rgba(15,40,71,.6)}\nrdr-bateaux .video img,rdr-bateaux .video iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}\nrdr-bateaux .video button{position:absolute;inset:0;display:grid;place-items:center;width:100%;border:0;background:linear-gradient(0deg,rgba(22,53,93,.35),rgba(22,53,93,0) 60%);cursor:pointer}\nrdr-bateaux .video button span{display:grid;place-items:center;width:76px;height:76px;border-radius:3px 15px 3px 15px;background:var(--jaune);color:var(--marine);box-shadow:0 18px 36px rgba(15,40,71,.45);transition:transform .2s}\nrdr-bateaux .video button:hover span{transform:scale(1.08)}\nrdr-bateaux .video button .ico{width:30px;height:30px;margin-left:4px;fill:currentColor;stroke:none}\nrdr-bateaux .lecture{position:relative;background:var(--cc-clair);padding:calc(clamp(40px,7vh,76px) * var(--air)) 0 calc(clamp(40px,7vh,72px) * var(--air));transition:background-color .45s}\nrdr-bateaux .desc p{font-size:15.5px;line-height:1.76;color:var(--encre);orphans:3;widows:3}\nrdr-bateaux .desc p+p{margin-top:12px}\nrdr-bateaux .desc--longue{column-count:2;column-gap:clamp(36px,5vw,72px)}\nrdr-bateaux .desc--courte{max-width:62ch;margin:0 auto;text-align:center}\nrdr-bateaux .desc--courte p{font-size:clamp(16.5px,1.35vw,19px);line-height:1.66;font-weight:500;color:var(--marine)}\nrdr-bateaux .desc--courte+.reseaux{justify-content:center}\n@media (max-width:900px){\nrdr-bateaux .desc--courte{text-align:left}\nrdr-bateaux .desc--courte+.reseaux{justify-content:flex-start}\n}\nrdr-bateaux .reseaux{display:flex;flex-wrap:wrap;gap:8px;margin-top:clamp(22px,3.5vh,32px)}\nrdr-bateaux .reseaux[hidden]{display:none}\nrdr-bateaux .reseaux a{display:inline-flex;align-items:center;gap:6px;height:44px;padding:0 13px;border:2px solid var(--cc);border-radius:3px 15px 3px 15px;background:#fff;font:700 12px var(--police);color:var(--marine);text-decoration:none;transition:background-color .2s,border-color .45s,color .2s}\nrdr-bateaux .reseaux a:hover{background:var(--marine);border-color:var(--marine);color:#fff}\nrdr-bateaux .reseaux .ico{width:13px;height:13px}\nrdr-bateaux .reseaux .reseau-logo{width:17px;height:17px}\nrdr-bateaux .chiffres{position:relative;overflow:hidden;isolation:isolate;background:var(--cc);padding:calc(clamp(52px,8.5vh,96px) * var(--air)) 0 calc(clamp(44px,7.5vh,84px) * var(--air));transition:background-color .45s}\nrdr-bateaux .ch-arcs{position:absolute;z-index:-1;left:0;bottom:0;width:min(720px,52vw);aspect-ratio:3168/2160;background:var(--cc-arcs);-webkit-mask:var(--arcs-plein) no-repeat center / 100% 100%;mask:var(--arcs-plein) no-repeat center / 100% 100%;transform:translate(-9%,12%) scaleY(-1);pointer-events:none;transition:background-color .45s}\nrdr-bateaux .route{position:relative}\nrdr-bateaux .route-svg{position:absolute;left:0;top:0;overflow:visible;pointer-events:none}\nrdr-bateaux .route-trait{fill:none;stroke:var(--encre);stroke-opacity:.62;stroke-width:2;stroke-dasharray:6 8;stroke-linecap:round}\nrdr-bateaux .route-masque{fill:none;stroke:#fff;stroke-width:8}\nrdr-bateaux .route.tracee .route-masque{transition:stroke-dashoffset 1.8s cubic-bezier(.4,.1,.2,1)}\nrdr-bateaux .etapes{position:relative;list-style:none;padding:0;display:grid;grid-template-columns:repeat(var(--n,5),minmax(0,1fr));gap:12px}\nrdr-bateaux .etape{display:grid;grid-template-rows:122px 28px 122px;justify-items:center;text-align:center}\nrdr-bateaux .etape:nth-child(odd){transform:translateY(14px)}\nrdr-bateaux .etape:nth-child(even){transform:translateY(-14px)}\nrdr-bateaux .et-point{grid-row:2;align-self:center;width:18px;height:18px;border-radius:50%;background:var(--marine);border:3px solid #fff;box-shadow:0 0 0 1.5px var(--marine)}\nrdr-bateaux .et-txt{grid-row:3;align-self:start;padding-top:10px}\nrdr-bateaux .etape:nth-child(even) .et-txt{grid-row:1;align-self:end;padding:0 0 10px}\nrdr-bateaux .et-val{font:italic 400 clamp(34px,3.4vw,52px)/1 var(--titre);text-transform:uppercase;color:var(--marine);white-space:nowrap}\nrdr-bateaux .et-val small{font:700 .34em var(--police);font-style:normal;text-transform:none;letter-spacing:.02em;margin:0 .7em 0 .15em;color:var(--encre)}\nrdr-bateaux .et-val small:last-child{margin-right:0}\nrdr-bateaux .et-lib{margin-top:8px;font:800 11px var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--encre)}\nrdr-bateaux .et-plus{margin-top:4px;font-size:12.5px;line-height:1.45;font-weight:500;color:var(--encre)}\nrdr-bateaux .ch-actions{position:relative;display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:calc(clamp(22px,3.5vh,36px) * var(--air))}\nrdr-bateaux .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;height:48px;padding:0 22px;border:2px solid var(--marine);border-radius:3px 15px 3px 15px;font:700 14px/1 var(--police);text-decoration:none;white-space:nowrap;transition:background-color .2s,color .2s,transform .2s}\nrdr-bateaux .btn .ico{width:18px;height:18px;transition:transform .2s}\nrdr-bateaux .btn:hover .ico{transform:translateX(3px)}\nrdr-bateaux .btn--plein{background:var(--marine);color:#fff}\nrdr-bateaux .btn--plein:hover{background:var(--encre)}\nrdr-bateaux .btn--clair{background:#fff;color:var(--marine);border-color:var(--marine)}\nrdr-bateaux .btn--clair:hover{background:var(--marine);border-color:var(--marine);color:#fff}\nrdr-bateaux .odo{display:inline-flex;align-items:flex-start}\nrdr-bateaux .odo-c{display:inline-block;height:1em;margin-right:-.05em;clip-path:inset(0 -40% 0 -40%)}\nrdr-bateaux .odo-r{display:block;will-change:transform}\nrdr-bateaux .odo-r i{display:block;height:1em;line-height:1em;font-style:inherit;text-align:center}\nrdr-bateaux .odo-v{display:inline-block;margin:0 .02em 0 -.02em}\nrdr-bateaux .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-bateaux #classes,rdr-bateaux #choix,rdr-bateaux #fiche{scroll-margin-top:calc(var(--colle) + 20px)}\nrdr-bateaux .fiche-zone.change .bd-texte,rdr-bateaux .fiche-zone.change .plan,rdr-bateaux .fiche-zone.change .pieces,rdr-bateaux .fiche-zone.change .media,rdr-bateaux .fiche-zone.change .desc,rdr-bateaux .fiche-zone.change .etapes{animation:rbt-arrive .45s cubic-bezier(.2,.8,.2,1)}\n@keyframes rbt-arrive{from{opacity:.15;transform:translateY(8px)}}\n@media (max-height:820px) and (min-width:751px){\nrdr-bateaux .haut .trame{padding-top:clamp(22px,4vh,40px);padding-bottom:clamp(30px,6vh,56px)}\nrdr-bateaux .haut h1{margin-top:12px;font-size:clamp(42px,5.2vw,76px)}\nrdr-bateaux .haut-chapo{margin-top:16px;font-size:14.5px;line-height:1.58}\nrdr-bateaux .repere{margin-top:12px;padding-top:8px;padding-bottom:8px}\nrdr-bateaux .ong img{height:clamp(100px,10.6vw,150px)}\nrdr-bateaux .bandeau h2{font-size:clamp(40px,4.4vw,62px)}\nrdr-bateaux .et-val{font-size:clamp(32px,3vw,44px)}\nrdr-bateaux .etape{grid-template-rows:112px 28px 112px}\nrdr-bateaux .video button span{width:66px;height:66px}\n}\n@media (max-width:1000px){\nrdr-bateaux .et-val{font-size:clamp(28px,3.6vw,40px)}\n}\n@media (max-width:900px){\nrdr-bateaux .fiche-grille{grid-template-columns:minmax(0,1fr)}\nrdr-bateaux .bd-texte{grid-column:1}\nrdr-bateaux .bandeau .trame{min-height:0;padding-bottom:calc(var(--f) * var(--S) + 18px)}\nrdr-bateaux .fiche-corps{grid-template-areas:\"plan\" \"legende\" \"media\";grid-template-rows:auto}\nrdr-bateaux .legende{margin-top:calc((var(--q) - 1) * var(--S) + 22px);padding-top:0}\nrdr-bateaux .media{margin-top:0;padding-top:calc(30px * var(--air))}\nrdr-bateaux .desc--longue{column-count:1}\nrdr-bateaux .haut{flex-direction:column;align-items:stretch;min-height:0}\nrdr-bateaux .haut-photo{position:relative;inset:auto;height:clamp(250px,68vw,420px)}\nrdr-bateaux .haut-photo img{object-position:44% 50%}\nrdr-bateaux .haut-photo::after{background:linear-gradient(0deg,var(--nuit) 0%,rgba(var(--nuit-voile),.82) 20%,rgba(var(--nuit-voile),0) 60%)}\nrdr-bateaux .haut .trame{margin-top:-68px;padding-top:0;padding-bottom:calc(30px * var(--air))}\nrdr-bateaux .haut-txt{max-width:640px}\nrdr-bateaux .haut h1{white-space:normal;font-size:clamp(38px,13.4vw,64px)}\nrdr-bateaux .etapes{grid-template-columns:minmax(0,1fr);gap:0;max-width:520px;margin:0 auto}\nrdr-bateaux .etape,rdr-bateaux .etape:nth-child(odd),rdr-bateaux .etape:nth-child(even){transform:none;grid-template-rows:auto;grid-template-columns:26px minmax(0,1fr);justify-items:start;text-align:left;column-gap:18px;padding:12px 0}\nrdr-bateaux .etape:nth-child(even){padding-left:22px}\nrdr-bateaux .et-point,rdr-bateaux .etape .et-txt,rdr-bateaux .etape:nth-child(even) .et-txt{grid-row:1;align-self:center;padding:0}\nrdr-bateaux .et-point{grid-column:1;justify-self:center}\nrdr-bateaux .et-txt{grid-column:2}\n}\n@media (max-width:750px){\nrdr-bateaux>.rbt-racine{font-size:14px}\nrdr-bateaux .haut h1{margin-top:12px}\nrdr-bateaux .haut-chapo{margin-top:18px;font-size:14.5px}\nrdr-bateaux .choix-lead{justify-content:flex-start;font-size:13.5px}\nrdr-bateaux .choix-titre{font-size:clamp(20px,6vw,24px)}\nrdr-bateaux .ong-liste{grid-template-columns:repeat(3,minmax(0,1fr));column-gap:12px;row-gap:clamp(18px,5vw,26px);max-width:340px}\nrdr-bateaux .ong-liste .ong img{height:auto;width:100%;max-width:88px}\nrdr-bateaux .ong-liste .ong[aria-selected=\"true\"] img{opacity:1;filter:saturate(1.05) drop-shadow(0 12px 14px rgba(0,0,0,.42))}\nrdr-bateaux .barre-classes .trame{padding:0 8px}\nrdr-bateaux .bc-liste{justify-content:space-between;gap:0;padding:8px 0 10px}\nrdr-bateaux .bc-liste .ong{flex:1 1 0;justify-content:center;min-height:54px;padding:0}\nrdr-bateaux .bd-tete{gap:12px}\nrdr-bateaux .bd-tete img{height:58px}\nrdr-bateaux .bandeau h2{font-size:clamp(34px,10vw,46px)}\nrdr-bateaux .bd-intro p{font-size:14.5px}\nrdr-bateaux .pt{width:26px;height:26px;font-size:11px}\nrdr-bateaux .pt-nom{display:none}\nrdr-bateaux .piece-txt p{padding:0 14px 14px 56px;font-size:13.5px}\nrdr-bateaux .video{border-radius:14px 4px 14px 4px}\nrdr-bateaux .video button span{width:62px;height:62px}\nrdr-bateaux .et-val{font-size:clamp(30px,9vw,38px)}\nrdr-bateaux .et-lib{font-size:11.5px;letter-spacing:.14em}\nrdr-bateaux .et-plus{font-size:13px}\nrdr-bateaux .ch-arcs{left:auto;right:0;top:0;bottom:auto;width:92vw;transform:translate(22%,-14%) scaleX(-1)}\nrdr-bateaux .btn{width:100%}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-bateaux *{animation:none!important;transition:none!important}\n}";
  const PAGE = "<div class=\"nuit\" id=\"nuit\">\n<header class=\"haut\" id=\"haut\">\n  <figure class=\"haut-photo\"><img id=\"haut-photo\" alt=\"\" fetchpriority=\"high\" decoding=\"async\"></figure>\n  <div class=\"trame\"><div class=\"haut-txt\" id=\"classes\">\n    <p class=\"kicker\" data-texte=\"surtitre\"></p>\n    <h1 class=\"titre\"><span data-texte=\"titre\"></span> <em data-texte=\"titreJaune\"></em></h1>\n    <p class=\"haut-chapo\" id=\"haut-chapo\"></p>\n    <div class=\"suite haut-suite\" id=\"haut-suite\"></div>\n    <button type=\"button\" class=\"lire-suite\" id=\"haut-lire\" aria-expanded=\"false\" aria-controls=\"haut-suite\"><span>Lire la suite</span><svg class=\"ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" data-i=\"chevronDown\"></svg></button>\n    <div class=\"repere\"><b>6</b><span><span data-texte=\"classes\"></span><span class=\"rep-six\" id=\"rep-six\" aria-hidden=\"true\"></span></span></div>\n  </div></div>\n</header>\n<section class=\"choix\" id=\"choix\" aria-labelledby=\"t-choix\">\n  <div class=\"trame\">\n    <p class=\"choix-lead\" id=\"choix-lead\"></p>\n    <h2 class=\"titre choix-titre\" id=\"t-choix\" data-texte=\"choix\"></h2>\n    <div class=\"ong-liste\" role=\"tablist\" aria-labelledby=\"t-choix\" id=\"ong-liste\"></div>\n  </div>\n</section>\n</div>\n<nav class=\"barre-classes\" id=\"barre-classes\" aria-label=\"Changer de classe\">\n  <div class=\"trame\"><div class=\"bc-liste\" id=\"bc-liste\"></div></div>\n</nav>\n<section class=\"fiche-zone\" id=\"fiche\" role=\"tabpanel\" aria-labelledby=\"t-classe\">\n  <div class=\"bandeau\" id=\"bandeau\" data-zone>\n    <div class=\"fili\" id=\"fili\" aria-hidden=\"true\"></div>\n    <div class=\"trame fiche-grille\">\n      <div class=\"bd-texte\">\n        <div class=\"bd-tete\"><img id=\"bd-blason\" alt=\"\" width=\"144\" height=\"240\"><h2 class=\"titre\" id=\"t-classe\"></h2></div>\n        <div class=\"bd-intro\" id=\"bd-intro\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fiche\" data-zone>\n    <div class=\"trame fiche-grille fiche-corps\">\n      <figure class=\"plan\" id=\"plan\"><img class=\"plan-img\" id=\"plan-img\" alt=\"\"></figure>\n      <div class=\"legende\">\n        <p class=\"an-aide\"><svg class=\"ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" data-i=\"mousePointerClick\"></svg><span class=\"survol\">Survolez un point du schéma, ou choisissez une pièce dans la liste.</span><span class=\"toucher\">Touchez un point du schéma, ou une pièce dans la liste.</span></p>\n        <ol class=\"pieces\" id=\"pieces\"></ol>\n      </div>\n      <div class=\"media\" id=\"media\"></div>\n    </div>\n  </div>\n  <div class=\"lecture\" id=\"lecture\" data-zone>\n    <div class=\"trame\"><div class=\"desc\" id=\"desc\"></div><div class=\"reseaux\" id=\"reseaux\"></div></div>\n  </div>\n  <div class=\"chiffres\" id=\"chiffres\" data-zone>\n    <div class=\"ch-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\">\n      <div class=\"route\" id=\"route\">\n        <svg class=\"route-svg\" id=\"route-svg\" aria-hidden=\"true\"><defs><mask id=\"route-masque\" maskUnits=\"userSpaceOnUse\" x=\"-3000\" y=\"-3000\" width=\"8000\" height=\"8000\"><path class=\"route-masque\" id=\"route-m\"/></mask></defs><path class=\"route-trait\" id=\"route-p\" mask=\"url(#route-masque)\"/></svg>\n        <ol class=\"etapes\" id=\"etapes\"></ol>\n      </div>\n      <div class=\"ch-actions\" id=\"ch-actions\"></div>\n    </div>\n  </div>\n</section>";
  const TRAD = {"Lire la suite":"Read more","Refermer":"Close","Changer de classe":"Change class","Survolez un point du schéma, ou choisissez une pièce dans la liste.":"Hover over a point on the diagram, or pick a part from the list.","Touchez un point du schéma, ou une pièce dans la liste.":"Tap a point on the diagram, or a part in the list.","Un Ultim en vol, suivi par un hélicoptère":"An Ultim in flight, followed by a helicopter","Longueur":"Length","Hauteur de mât":"Mast height","Vitesse max":"Top speed","Vainqueur 2022":"2022 winner","Skippers engagés":"Skippers entered","nœuds":"knots","j":"d",",":"."};
  const MOTIFS = [["^Voir les skippers (.+)$","See the $1 skippers"],["^En savoir plus sur (.+)$","Learn more about $1"],["^Lire la vidéo (.+)$","Play the $1 video"],["^(.+), la vidéo de la classe$","$1, the class video"],["^Schéma d’un (.+), vu de profil, avec ses pièces numérotées$","Side view of the $1, with its numbered parts"],["^Logo de la classe (.+)$","$1 class logo"],["^(\\d+),(\\d+) m$","$1.$2 m"],["^(\\d+) nœuds$","$1 knots"],["^(\\d+) jours (\\d+) heures (\\d+) minutes$","$1 days $2 hours $3 minutes"]].map((m) => [new RegExp(m[0]), m[1]]);
  const SOURCE = 'https://www.routedurhum.com/_functions/bateaux';
  const REPLI_MS = 3500;
  const ATTENTE = '<div class="rbt-attente" aria-hidden="true"></div>';

  function poserStyle() {
    if (document.getElementById('rdr-bateaux-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-bateaux-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  


  function enAnglais(t) {
    const k = String(t).trim();
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(TRAD, k)) return t.replace(k, TRAD[k]);
    for (const [re, r] of MOTIFS) if (re.test(k)) return t.replace(k, k.replace(re, r));
    return null;
  }
  const ATTRS = ['alt', 'aria-label', 'title'];
  function traduireTexte(n) { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; }
  function traduireAttrs(el) {
    ATTRS.forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      const v = enAnglais(el.getAttribute(a));
      if (v != null && v !== el.getAttribute(a)) el.setAttribute(a, v);
    });
  }
  function traduire(racine) {
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach(traduireTexte);
    if (racine.nodeType === 1) [racine, ...racine.querySelectorAll('[alt],[aria-label],[title]')].forEach(traduireAttrs);
  }
  function prefixerLiens(racine) {
    if (racine.nodeType !== 1) return;
    [racine, ...racine.querySelectorAll('a[href^="/"]')].forEach((a) => {
      const h = a.getAttribute && a.getAttribute('href');
      if (!h || h[0] !== '/' || h === '/en' || h.startsWith('/en/') || h.startsWith('/en?') || h.startsWith('//')) return;
      a.setAttribute('href', '/en' + h);
    });
  }
  function poserTextes(racine, textes) {
    racine.querySelectorAll('[data-texte]').forEach((el) => {
      const v = textes && textes[el.getAttribute('data-texte')];
      if (v != null) el.textContent = v;
    });
  }
  const valide = (J) => !!(J && Array.isArray(J.classes) && J.classes.length && J.page && Array.isArray(J.page.intro) && J.medias);

  

  function demarrer(J, hote) {
    const addEventListener = (type, f, o) => { window.addEventListener(type, f, o); hote.rbtNettoyer.push(() => window.removeEventListener(type, f, o)); };
 
const ICO = {"facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"/>","instagram":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"/><path d=\"M17.5 6.5h.01\"/>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z\"/><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/>","tiktok":"<path d=\"M9 12a4 4 0 1 0 4 4V3c0 2.8 2.2 5 5 5\"/>","arrowDown":"<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>","arrowRight":"<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>","arrowUpRight":"<path d=\"M7 7h10v10\"/><path d=\"M7 17 17 7\"/>","chevronDown":"<path d=\"m6 9 6 6 6-6\"/>","play":"<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\"/>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/><path d=\"M2 12h20\"/>","mousePointerClick":"<path d=\"M14 4.1 12 6\"/><path d=\"m5.1 8-2.9-.8\"/><path d=\"m6 12-1.9 2\"/><path d=\"M7.2 2.2 8 5.1\"/><path d=\"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z\"/>"};
hote.querySelectorAll('svg[data-i]').forEach((s) => { s.innerHTML = ICO[s.dataset.i] || ''; });
const pic = (n, c) => '<svg class="ico' + (c ? ' ' + c : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICO[n] || '') + '</svg>';

 
const MEDIAS = J.medias;
const forme = (id) => 'https://static.wixstatic.com/shapes/' + id + '.svg';
const brut = (id) => 'https://static.wixstatic.com/media/' + id;







const D = J;

 
const $ = (id) => hote.querySelector('#' + id);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
 
const NB = ' ';
const typo = (s) => String(s)
  .replace(/ ([:;!?»])/g, NB + '$1').replace(/« /g, '«' + NB)
  .replace(/(\d) (?=(m²|m\b|mètres|T\b|tonnes|nœuds|km\/h|pieds|ans\b))/g, '$1' + NB);


const hp = $('haut-photo');
const entiere = (id, l) => 'https://static.wixstatic.com/media/' + id + '/v1/fit/w_' + l + ',h_' + Math.round(l * 2 / 3) + ',q_80,enc_auto/x.jpg';
hp.srcset = [720, 1080, 1440].map((l) => entiere(MEDIAS.haut, l) + ' ' + l + 'w').join(', ');
hp.sizes = '(max-width:900px) 100vw, 90vw'; hp.src = entiere(MEDIAS.haut, 1440);
hp.alt = 'Un Ultim en vol, suivi par un hélicoptère';
$('fili').style.backgroundImage = 'url("' + MEDIAS.filigrane + '")';
hote.style.setProperty('--arcs-plein', 'url("' + MEDIAS.arcsPlein + '")');


$('haut-chapo').innerHTML = typo(D.page.intro[0]);
$('haut-suite').innerHTML = D.page.intro.slice(1).map((p) => '<p>' + typo(p) + '</p>').join('');
$('haut-lire').addEventListener('click', () => {
  const b = $('haut-lire'), o = b.getAttribute('aria-expanded') !== 'true';
  b.setAttribute('aria-expanded', String(o)); $('haut-suite').classList.toggle('ouverte', o);
  b.firstChild.textContent = o ? 'Refermer' : 'Lire la suite';
});
$('rep-six').innerHTML = D.classes.map((c) => '<i style="--c:' + c.c + '"></i>').join('');
$('choix-lead').innerHTML = pic('arrowDown') + '<span>' + typo(D.page.decouvrez) + '</span>';

 
$('ong-liste').innerHTML = D.classes.map((c, i) =>
  '<button type="button" class="ong" role="tab" id="ong-' + c.id + '" aria-controls="fiche" aria-selected="false" tabindex="-1" data-k="' + i + '" aria-label="' + esc(c.nom) + '">' +
  '<img src="' + forme(c.picto) + '" alt="" width="144" height="240" decoding="async"></button>').join('');
$('bc-liste').innerHTML = D.classes.map((c, i) =>
  '<button type="button" class="ong" aria-pressed="false" data-k="' + i + '" aria-label="' + esc(c.nom) + '"><img src="' + forme(c.picto) + '" alt="" width="144" height="240" decoding="async"><span class="bc-lib" aria-hidden="true">' + esc(c.nom) + '</span></button>').join('');
const onglets = [...hote.querySelectorAll('#ong-liste .ong')];
const pastilles = [...hote.querySelectorAll('#bc-liste .ong')];
[...onglets, ...pastilles].forEach((b) => b.addEventListener('click', () => montrer(+b.dataset.k, true)));
onglets.forEach((b) => b.addEventListener('keydown', (e) => {
  const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
  if (!d) return;
  e.preventDefault();
  const k = (+b.dataset.k + d + onglets.length) % onglets.length;
  montrer(k, true); onglets[k].focus();
}));

 
function placerPointe() {
  const b = onglets[courante]; if (!b) return;
  const r = b.getBoundingClientRect(), z = $('bandeau').getBoundingClientRect();
  $('bandeau').style.setProperty('--pointe', Math.round(r.left + r.width / 2 - z.left) + 'px');
}



const colle = () => parseFloat(getComputedStyle(hote).getPropertyValue('--colle')) || 56;
let barreVisible = false, tic = 0;
function suivreBarre() {
  const h = colle(), z = $('fiche').getBoundingClientRect();
  const v = M.listeBas - scrollY < h + 8 && z.bottom > innerHeight * 0.5;
  if (v !== barreVisible) { barreVisible = v; $('barre-classes').classList.toggle('visible', v); }
}






const M = { pret: false, listeBas: Infinity };
function mesurer() {
  const y = scrollY, liste = $('ong-liste'), lr = liste.getBoundingClientRect();
  M.vh = innerHeight;
  M.hautBas = $('haut').getBoundingClientRect().bottom + y;
  M.course = hp.parentNode.offsetHeight * 0.1;
  M.listeBas = lr.bottom + y;
  

  M.bl = onglets.map((b) => {
    const haut = lr.top + y + b.offsetTop - liste.offsetTop;
    const memeRang = onglets.filter((x) => x.offsetTop === b.offsetTop);
    return { haut, bas: haut + b.offsetHeight, col: memeRang.indexOf(b), n: memeRang.length };
  });
  M.pret = true;
}
function animer() {
  if (!M.pret || reduit) return;
  const y = scrollY;
   
  const p = Math.min(1, Math.max(0, y / M.hautBas));
  hp.style.transform = 'translate3d(0,' + (p * M.course).toFixed(1) + 'px,0)';
  


  M.bl.forEach((b, k) => {
    const debut = b.haut - M.vh - 40, fin = b.bas - M.vh + 60, R = Math.max(1, fin - debut), duree = R * 0.45;
    const pas = b.n > 1 ? (R - duree) / (b.n - 1) : 0;
    let e = (y - debut - b.col * pas) / duree;
    e = e <= 0 ? 0 : e >= 1 ? 1 : 1 - Math.pow(1 - e, 3);
    const o = onglets[k];
    o.style.transform = e >= 1 ? '' : 'translate3d(0,' + ((1 - e) * (b.bas - b.haut) * 0.45).toFixed(1) + 'px,0)';
    o.style.opacity = e >= 1 ? '' : (0.08 + 0.92 * e).toFixed(3);
  });
}
function auDefilement() { tic = 0; suivreBarre(); animer(); }
addEventListener('scroll', () => { if (!tic) tic = requestAnimationFrame(auDefilement); }, { passive: true });

 
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
function odo(txt) {
  return '<span class="odo" aria-hidden="true">' + [...String(txt)].map((c) => /\d/.test(c)
    ? '<span class="odo-c" data-d="' + c + '"><span class="odo-r">' + Array.from({ length: 30 }, (_, k) => '<i>' + (k % 10) + '</i>').join('') + '</span></span>'
    : '<span class="odo-v">' + c + '</span>').join('') + '</span>';
}
function rouler(el, retard) {
  el.querySelectorAll('.odo-c').forEach((c, k) => {
    const r = c.firstChild, d = +c.dataset.d;
     
    const m = document.createElement('span'); m.textContent = d; m.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
    c.parentNode.appendChild(m); c.style.width = m.getBoundingClientRect().width + 'px'; m.remove();
    r.style.transition = reduit ? 'none' : 'transform ' + (1.1 + k * 0.16).toFixed(2) + 's cubic-bezier(.15,.7,.2,1) ' + (retard + k * 0.05).toFixed(2) + 's';
    r.style.transform = 'translateY(-' + (20 + d) + 'em)';
  });
}
const nombre = (v) => String(v).replace('.', ',');
 
function luminance(h) {
  const n = parseInt(String(h).slice(1), 16), f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(n >> 16) + 0.7152 * f((n >> 8) & 255) + 0.0722 * f(n & 255);
}

 
let routeVue = false;
function tracerRoute(anime) {
  const route = $('route'), box = route.getBoundingClientRect(), carte = $('chiffres').getBoundingClientRect();
  const pts = [...route.querySelectorAll('.et-point')].map((p) => { const r = p.getBoundingClientRect(); return [r.left + r.width / 2 - box.left, r.top + r.height / 2 - box.top]; });
  if (!pts.length) return;
  const vertical = matchMedia('(max-width:900px)').matches;
  const a = pts[0], z = pts[pts.length - 1];
  const P = vertical ? [[a[0], carte.top - box.top - 4], ...pts, [z[0], box.height + 18]]
    : [[carte.left - box.left - 4, a[1] + 46], ...pts, [carte.right - box.left + 4, z[1] - 46]];
  let d = 'M' + P[0][0].toFixed(1) + ' ' + P[0][1].toFixed(1);
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ' C' + c1.map((v) => v.toFixed(1)).join(' ') + ' ' + c2.map((v) => v.toFixed(1)).join(' ') + ' ' + p2.map((v) => v.toFixed(1)).join(' ');
  }
  const svg = $('route-svg'), m = $('route-m');
  svg.setAttribute('width', box.width); svg.setAttribute('height', box.height);
  $('route-p').setAttribute('d', d); m.setAttribute('d', d);
  const L = Math.ceil(m.getTotalLength());
  m.style.strokeDasharray = L; route.classList.remove('tracee');
  m.style.strokeDashoffset = (anime && !reduit) ? L : 0;
  if (anime && !reduit) { void m.getBoundingClientRect(); requestAnimationFrame(() => { route.classList.add('tracee'); m.style.strokeDashoffset = 0; }); }
}
const vuChiffres = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting || routeVue) return;
  routeVue = true;
  tracerRoute(true);
  hote.querySelectorAll('#etapes .et-val').forEach((el, i) => rouler(el, 0.3 + i * 0.16));
}), { threshold: 0.35 });
vuChiffres.observe($('route'));

 
function idVideo(u) {
  try {
    const url = new URL(u);
    const id = url.hostname.includes('youtu.be') ? url.pathname.slice(1) : url.searchParams.get('v');
    return { id, debut: parseInt(url.searchParams.get('t') || '0', 10) || 0 };
  } catch (e) { return { id: null, debut: 0 }; }
}
function vignette(img, id) {
  img.onload = () => { if (img.naturalWidth <= 120 && !img.dataset.repli) { img.dataset.repli = '1'; img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; } };
  img.onerror = img.onload;
  img.src = 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg';
}

 
const nomPiece = (l) => l.trim().charAt(0) + l.trim().slice(1).toLowerCase();
function activer(i, depuisPoint) {
  hote.querySelectorAll('.pt').forEach((p) => p.classList.toggle('actif', +p.dataset.i === i));
  hote.querySelectorAll('.piece').forEach((p) => {
    const o = +p.dataset.i === i;
    p.classList.toggle('ouverte', o);
    p.querySelector('.piece-bt').setAttribute('aria-expanded', String(o));
  });
   
  if (depuisPoint && matchMedia('(max-width:900px)').matches) {
    const p = hote.querySelector('.piece[data-i="' + i + '"]');
    setTimeout(() => { const r = p.getBoundingClientRect(); if (r.bottom > innerHeight - 30) window.scrollBy({ top: r.bottom - innerHeight + 50, behavior: reduit ? 'auto' : 'smooth' }); }, 360);
  }
}
function poserSchema(c) {
  const img = $('plan-img');
  img.src = brut(c.maquette) + '/v1/fit/w_1100,h_1100,q_85,enc_auto/x.png';
  img.alt = 'Schéma d’un ' + c.nom + ', vu de profil, avec ses pièces numérotées';
  $('plan').querySelectorAll('.pt').forEach((p) => p.remove());
  c.points.forEach((p, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pt' + (p.x > 62 ? ' gauche' : ''); b.dataset.i = i;
    b.style.left = p.x + '%'; b.style.top = p.y + '%'; b.style.setProperty('--k', i);
    b.setAttribute('aria-label', (i + 1) + ', ' + nomPiece(p.label));
    b.innerHTML = (i + 1) + '<span class="pt-nom" aria-hidden="true">' + esc(nomPiece(p.label)) + '</span>';
    b.addEventListener('mouseenter', () => { if (matchMedia('(hover:hover)').matches) activer(i); });
    $('plan').appendChild(b);
  });
  $('pieces').innerHTML = c.points.map((p, i) =>
    '<li class="piece" data-i="' + i + '"><button type="button" class="piece-bt" aria-expanded="false" aria-controls="piece-' + i + '"><span class="piece-n">' + (i + 1) + '</span><span class="piece-nom">' + esc(nomPiece(p.label)) + '</span>' + pic('chevronDown') + '</button>' +
    '<div class="piece-txt" id="piece-' + i + '"><div><p>' + typo(esc(p.detail)) + '</p></div></div></li>').join('');
   
  hote.querySelectorAll('.piece-bt').forEach((b) => {
    const i = +b.closest('.piece').dataset.i;
    b.addEventListener('click', () => activer(i));
    b.addEventListener('mouseenter', () => viser(i));
    b.addEventListener('mouseleave', () => viser(-1));
    b.addEventListener('focus', () => viser(i));
    b.addEventListener('blur', () => viser(-1));
  });
  activer(0);
}
function viser(i) {
  hote.querySelectorAll('.pt').forEach((p) => p.classList.toggle('vise', +p.dataset.i === i));
}



$('plan').addEventListener('click', (e) => {
  const b = e.target.closest('.pt');
  let i = b ? +b.dataset.i : -1;
  if (e.detail) {
    let d0 = 26;
    $('plan').querySelectorAll('.pt').forEach((p) => {
      const r = p.getBoundingClientRect(), d = Math.hypot(e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2);
      if (d <= d0) { d0 = d; i = +p.dataset.i; }
    });
  }
  if (i >= 0) activer(i, true);
});

 
function paragraphes(html) {
  return (html.match(/<p[^>]*>[\s\S]*?<\/p>/g) || []).map((p) => p.replace(/^<p[^>]*>|<\/p>$/g, '').trim()).filter((p) => p && !/^(<br\s*\/?>|\s)*$/.test(p));
}
function rendre(k) {
  const c = D.classes[k];
  const zone = $('fiche');
  hote.style.setProperty('--cc', c.c);
   
  hote.dataset.fond = luminance(c.c) > 0.6 ? 'clair' : 'moyen';
  zone.style.setProperty('--f', c.flottaison);
  hote.style.setProperty('--f', c.flottaison);
  hote.style.setProperty('--q', c.bas);
  onglets.forEach((b, i) => { b.setAttribute('aria-selected', String(i === k)); b.tabIndex = i === k ? 0 : -1; });
  pastilles.forEach((b, i) => b.setAttribute('aria-pressed', String(i === k)));

   
  $('bd-blason').src = forme(c.picto); $('bd-blason').alt = '';
  $('t-classe').textContent = c.nom;
  const ps = paragraphes(c.intro);
  $('bd-intro').innerHTML = '<p>' + typo(ps[0]) + '</p>' + (ps.length > 1
    ? '<div class="suite" id="bd-suite">' + ps.slice(1).map((p) => '<p>' + typo(p) + '</p>').join('') + '</div><button type="button" class="lire-suite" aria-expanded="false" aria-controls="bd-suite"><span>Lire la suite</span>' + pic('chevronDown') + '</button>'
    : '');
  const ls = $('bd-intro').querySelector('.lire-suite');
  if (ls) ls.addEventListener('click', () => {
    const o = ls.getAttribute('aria-expanded') !== 'true';
    ls.setAttribute('aria-expanded', String(o)); $('bd-suite').classList.toggle('ouverte', o);
    ls.firstChild.textContent = o ? 'Refermer' : 'Lire la suite';
  });

   
  poserSchema(c);
  const v = idVideo(c.video);
  const L = c.liens || {};
  const liens = D.reseaux.filter(([cle]) => L[cle]);
  $('media').innerHTML =
    (c.logo ? '<img class="logo" src="' + brut(c.logo) + '" alt="Logo de la classe ' + esc(c.nom) + '" loading="lazy" decoding="async">' : '') +
    (v.id ? '<div class="video" id="video"><img alt="' + esc(c.nom) + ', la vidéo de la classe" decoding="async"><button type="button" aria-label="Lire la vidéo ' + esc(c.nom) + '"><span>' + pic('play') + '</span></button></div>' : '');
  const ps2 = c.description.split(/\n+/).map((p) => p.trim()).filter(Boolean);
   
  const longue = ps2.join(' ').replace(/<[^>]+>/g, '').length > 700;
  $('desc').className = 'desc ' + (longue ? 'desc--longue' : 'desc--courte');
  $('desc').innerHTML = ps2.map((p) => '<p>' + typo(p) + '</p>').join('');
  $('reseaux').hidden = !liens.length;
  $('reseaux').innerHTML = liens.map(([cle, n]) => '<a href="' + esc(L[cle]) + '" target="_blank" rel="noopener">' + pic(cle === 'siteWeb' ? 'globe' : cle, 'reseau-logo') + n + pic('arrowUpRight') + '</a>').join('');
  if (v.id) {
    vignette($('video').querySelector('img'), v.id);
    $('video').querySelector('button').addEventListener('click', () => {
      $('video').innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id + '?autoplay=1&rel=0' + (v.debut ? '&start=' + v.debut : '') + '" title="' + esc(c.nom) + ', la vidéo de la classe" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  }

   
  const t = c.v2022 && c.v2022.temps;
  const etapes = [
    { val: odo(nombre(c.longueur)) + '<small>m</small>', lu: nombre(c.longueur) + ' m', lib: 'Longueur' },
    { val: odo(nombre(c.mat)) + '<small>m</small>', lu: nombre(c.mat) + ' m', lib: 'Hauteur de mât' },
    c.vitesse != null && { val: odo(c.vitesse) + '<small>nœuds</small>', lu: c.vitesse + ' nœuds', lib: 'Vitesse max' },
    t && { val: odo(t[0]) + '<small>j</small>' + odo(String(t[1]).padStart(2, '0')) + '<small>h</small>' + odo(String(t[2]).padStart(2, '0')) + '<small>min</small>',
      lu: t[0] + ' jours ' + t[1] + ' heures ' + t[2] + ' minutes', lib: 'Vainqueur 2022', plus: esc(c.v2022.skipper) + ', ' + esc(c.v2022.bateau) },
    { val: odo(c.skippers), lu: String(c.skippers), lib: 'Skippers engagés' }
  ].filter(Boolean);
  $('etapes').style.setProperty('--n', etapes.length);
  $('etapes').innerHTML = etapes.map((e) => '<li class="etape"><span class="et-point"></span><div class="et-txt"><div class="et-val"><span class="sr">' + e.lu + '</span>' + e.val + '</div><div class="et-lib">' + e.lib + '</div>' + (e.plus ? '<div class="et-plus">' + e.plus + '</div>' : '') + '</div></li>').join('');
  $('ch-actions').innerHTML = '<a class="btn btn--plein" href="/skippers?classe=' + c.id + '">Voir les skippers ' + esc(c.nom) + pic('arrowRight') + '</a>' +
    (L.siteWeb ? '<a class="btn btn--clair" href="' + esc(L.siteWeb) + '" target="_blank" rel="noopener">En savoir plus sur ' + esc(c.nom) + pic('arrowUpRight') + '</a>' : '');
  if (routeVue) {
    requestAnimationFrame(() => { tracerRoute(false); hote.querySelectorAll('#etapes .et-val').forEach((el, i) => rouler(el, i * 0.1)); });
  }
}



const ordinateur = matchMedia('(min-width:901px)');
function placerMedia() {
  const m = $('media'), ici = ordinateur.matches ? hote.querySelector('.bandeau .fiche-grille') : hote.querySelector('.fiche-corps');
  if (m.parentNode !== ici) ici.appendChild(m);
}
placerMedia();
ordinateur.addEventListener('change', () => { placerMedia(); placerPointe(); });

let courante = -1;
function montrer(k, garder) {
  if (k === courante) return;
   
  let ancre = null, dy = 0;
  if (garder && barreVisible) {
    const lim = colle() + $('barre-classes').offsetHeight;
    ancre = [...hote.querySelectorAll('[data-zone]')].find((z) => z.getBoundingClientRect().bottom > lim + 40);
    if (ancre) dy = ancre.getBoundingClientRect().top;
  }
  courante = k;
  rendre(k);
  placerPointe();
  if (ancre) window.scrollBy({ top: ancre.getBoundingClientRect().top - dy, behavior: 'instant' });
  const zone = $('fiche');
  zone.classList.remove('change'); void zone.offsetWidth; zone.classList.add('change');
  const u = new URL(location.href); u.searchParams.set('classe', D.classes[k].id); history.replaceState(null, '', u);
}


function remesurer() { mesurer(); suivreBarre(); animer(); }
addEventListener('resize', () => { placerPointe(); remesurer(); if (routeVue) tracerRoute(false); });

const q = new URLSearchParams(location.search);
 
const demandee = D.classes.findIndex((c) => c.id === String(q.get('classe') || '').toLowerCase());
montrer(demandee >= 0 ? demandee : Math.floor(Math.random() * D.classes.length), false);
$('fiche').classList.remove('change');
 
$('bandeau').style.transition = 'none'; placerPointe(); void $('bandeau').offsetWidth; $('bandeau').style.transition = '';
if (document.fonts) document.fonts.ready.then(() => { placerPointe(); if (routeVue) tracerRoute(false); });
remesurer();
if (window.ResizeObserver) new ResizeObserver(remesurer).observe($('nuit'));
  }

  class RdrBateaux extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), REPLI_MS);
    }
    disconnectedCallback() { clearTimeout(this._minuteur); this._minuteur = null; }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || (document.documentElement.getAttribute('lang') || '') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    

    _tenter() {
      if (!this.isConnected) return;
      const brut = this.getAttribute('jeu');
      if (!brut) { if (!this._monte && !this.firstChild) this.innerHTML = ATTENTE; return; }
      if (this._monte && (brut === this._brut || this._source !== 'repli')) return;
      let J = null;
      try { J = JSON.parse(brut); } catch (e) { J = null; }
      if (!valide(J)) { if (!this._monte && !this.firstChild) this.innerHTML = ATTENTE; return; }
      if (this._monte && JSON.stringify(J) === this._cle) { this._brut = brut; this._source = 'attribut'; return; }
      this._dessiner(J, 'attribut', brut);
    }
    _dessiner(J, source, brut) {
      clearTimeout(this._minuteur); this._minuteur = null;
      this._arreter();
      this._monte = true; this._source = source; this._brut = brut || null; this._cle = JSON.stringify(J);
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rbt-racine">' + PAGE + '</div>';
      const racine = this.firstElementChild;
      racine.rbtNettoyer = [];
      this._racine = racine;
      poserTextes(racine, J.page.textes);
      if (en) { traduire(racine); prefixerLiens(racine); }
      try { demarrer(J, racine); } catch (e) { console.error('[rdr-bateaux]', e); }
      if (en) {
        traduire(racine); prefixerLiens(racine);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (m.type === 'characterData') return traduireTexte(m.target);
          if (m.type === 'attributes') return traduireAttrs(m.target);
          m.addedNodes.forEach((n) => { if (n.nodeType === 1) { traduire(n); prefixerLiens(n); } else if (n.nodeType === 3) traduireTexte(n); });
        }));
        this._obs.observe(racine, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
      }
    }
    _arreter() {
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._racine && this._racine.rbtNettoyer) { this._racine.rbtNettoyer.forEach((f) => { try { f(); } catch (e) {   } }); this._racine.rbtNettoyer = []; }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang();
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (this._monte) return;
        if (valide(j)) return this._dessiner(j, 'repli', null);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rbt-vide"><h3>' + (en ? 'The boats will be back in a moment' : 'Les bateaux reviennent dans un instant') + '</h3><p>' + (en ? 'The classes could not be loaded.' : 'Les classes n\u2019ont pas pu être chargées.') + '</p><button type="button">' + (en ? 'Try again' : 'Réessayer') + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }
  }
  customElements.define("rdr-bateaux", RdrBateaux);
})();
})();
