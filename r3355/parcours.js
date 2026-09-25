/* rdr-elements parcours | source route-du-rhum f788337 | rdr-parcours.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["parcours"]="f788337";performance.mark("rdr-elements:parcours")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-parcours")) return;
  const CSS = "rdr-parcours{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-parcours .rpa-page{display:block}\nrdr-parcours .rpa-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#0E111D}\nrdr-parcours .rpa-sq-haut{display:flex;align-items:center;min-height:clamp(560px,calc(100svh - 175px),820px);background:#0A1228}\nrdr-parcours .rpa-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-parcours .rpa-sq-l,rdr-parcours .rpa-sq-c{position:relative;display:block;overflow:hidden}\nrdr-parcours .rpa-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.1)}\nrdr-parcours .rpa-sq-k{width:120px;height:11px}\nrdr-parcours .rpa-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-parcours .rpa-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-parcours .rpa-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-parcours .rpa-sq-p1{margin-top:30px}\nrdr-parcours .rpa-sq-p3{width:min(380px,62%)}\nrdr-parcours .rpa-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-parcours .rpa-sq-sec .rpa-sq-l{background:rgba(255,255,255,.08)}\nrdr-parcours .rpa-sq-sec .rpa-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-parcours .rpa-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-parcours .rpa-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(255,255,255,.05)}\nrdr-parcours .rpa-sq-l::after,rdr-parcours .rpa-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rpa-sq-luire 1.6s ease-in-out infinite}\nrdr-parcours .rpa-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-parcours .rpa-sq-sec .rpa-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)}\nrdr-parcours .rpa-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)}\n@keyframes rpa-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-parcours .rpa-sq-haut{min-height:clamp(480px,150vw,640px)}rdr-parcours .rpa-sq-cartes{grid-template-columns:1fr}rdr-parcours .rpa-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-parcours .rpa-sq-l::after,rdr-parcours .rpa-sq-c::after{animation:none;display:none}}\nrdr-parcours .rpa-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#0A1228;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-parcours .rpa-vide h3{margin:0;font-size:22px}\nrdr-parcours .rpa-vide p{margin:0;color:rgba(255,255,255,.76)}\nrdr-parcours .rpa-vide button{min-height:44px;padding:0 20px;border:2px solid #FCDD00;border-radius:3px 15px 3px 15px;background:#FCDD00;color:#0E111D;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}\n@font-face{font-family:'VarienOutline';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic%20Outline.woff2') format('woff2');font-style:italic;font-display:swap}\nrdr-parcours{--marine:#0E111D;--nuit:#0A1228;--nuit2:#101A36;--marine2:#16355D;--panneau:#1B2237; --teal:#5DBFC0;--teal2:#14A79E;--vert:#006F7B;--jaune:#FCDD00;--or:#F5BE41;--orange:#F19F39;--corail:#FF7A3D;--violet:#8B86E0; --papier:#F4F1E8;--papier2:#EAE5D6;--encre:#0E111D;--encre2:#3A4256;--encre3:#6B7285; --t2:rgba(255,255,255,.76);--t3:rgba(255,255,255,.54);--filet:rgba(255,255,255,.12); --off-mer1:#1E4876;--off-mer2:#3A7FB6;--off-terre:#5FC1BF;--off-france:#F4E75A;--off-route:#6EC3EC;--off-medaillon:#62B8E8; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px); --entete:175px;--colle:56px; --air:1.5;}\n@media (max-width:750px){\nrdr-parcours{--air:1.3;--entete:120px;--colle:60px}\n}\nrdr-parcours *{box-sizing:border-box}\nrdr-parcours{margin:0;background:var(--marine);color:#fff;font:15px/1.6 var(--police);-webkit-font-smoothing:antialiased}\nrdr-parcours img{display:block;max-width:100%}\nrdr-parcours a{color:inherit}\nrdr-parcours .trame{position:relative;max-width:var(--largeur);margin:0 auto;padding:0 var(--marge)}\nrdr-parcours .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.95;margin:0}\nrdr-parcours .kicker{display:inline-flex;align-items:center;gap:10px;font-weight:800;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}\nrdr-parcours .kicker::before{content:'';width:26px;height:2px;background:currentColor}\nrdr-parcours .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-parcours .tex{position:absolute;inset:0;pointer-events:none;z-index:0}\nrdr-parcours .carte{position:relative;width:100%;height:100%}\nrdr-parcours .c-svg{position:absolute;inset:0;display:block;width:100%;height:100%}\nrdr-parcours .c-grille{fill:none;stroke:rgba(255,255,255,.07);stroke-width:1}\nrdr-parcours .c-terre{fill:#22385F;stroke:rgba(93,191,192,.55);stroke-width:.8}\nrdr-parcours .c-route{fill:none;stroke:var(--jaune);stroke-width:2.4;stroke-dasharray:7 7;stroke-linecap:round;opacity:.55}\nrdr-parcours .c-fait{fill:none;stroke:var(--jaune);stroke-width:3.2;stroke-linecap:round}\nrdr-parcours .c-option{fill:none;stroke-width:2.2;stroke-dasharray:3 6;stroke-linecap:round;opacity:0;transition:opacity .6s}\nrdr-parcours .c-option--nord{stroke:var(--teal)}\nrdr-parcours .c-option--mediane{stroke:var(--or)}\nrdr-parcours .c-option--sud{stroke:var(--corail)}\nrdr-parcours .c-zone{opacity:0;transition:opacity .6s}\nrdr-parcours .c-port .c-point{fill:var(--jaune)}\nrdr-parcours .c-port .c-halo{fill:none;stroke:var(--jaune);stroke-width:2;opacity:.55;transform-box:fill-box;transform-origin:center;animation:rpa-c-pouls 2.4s ease-out infinite}\n@keyframes rpa-c-pouls{from{transform:scale(.6);opacity:.8}to{transform:scale(2.2);opacity:0}}\nrdr-parcours .c-lieu{font:700 10.5px var(--police);letter-spacing:.12em;text-transform:uppercase;fill:rgba(255,255,255,.72)}\nrdr-parcours .c-lieu--port{fill:#fff;font-size:12px;letter-spacing:.14em}\nrdr-parcours .c-lieu--mer{font:italic 500 13px var(--police);letter-spacing:.04em;text-transform:none;fill:rgba(255,255,255,.3)}\nrdr-parcours .c-avis{opacity:0;transition:opacity .5s}\nrdr-parcours .c-avis circle{fill:var(--corail)}\nrdr-parcours .c-avis text{font:800 9.5px var(--police);letter-spacing:.1em;text-transform:uppercase;fill:#FFB28F}\nrdr-parcours .c-bateau{filter:drop-shadow(0 0 6px rgba(252,221,0,.8))}\nrdr-parcours .c-distance{font-family:var(--titre);font-style:italic;font-size:26px;fill:var(--jaune)}\nrdr-parcours .c-distance-km{font:600 12px var(--police);fill:rgba(255,255,255,.7)}\nrdr-parcours .c-voilier--ultim{width:44px}\nrdr-parcours .c-voilier--o50{width:34px}\n@keyframes rpa-c-vogue{0%{offset-distance:0%;opacity:0}6%{opacity:1}92%{opacity:1}100%{offset-distance:100%;opacity:0}}\n@keyframes rpa-c-tangue{0%,100%{transform:scaleX(-1) rotate(-2.5deg)}50%{transform:scaleX(-1) rotate(2.5deg)}}\nrdr-parcours .chargement{position:absolute;inset:0;display:grid;place-items:center;color:var(--t3);font:600 12px var(--police)}\nrdr-parcours .a-haut{position:relative;min-height:clamp(560px,calc(100svh - var(--entete)),820px);display:flex;align-items:center;overflow:hidden;background:var(--nuit)}\nrdr-parcours .a-haut .carte{position:absolute;inset:0}\nrdr-parcours .a-haut::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,18,40,.94) 0%,rgba(10,18,40,.8) 32%,rgba(10,18,40,0) 52%),linear-gradient(0deg,var(--nuit) 0%,rgba(10,18,40,.75) 12%,rgba(10,18,40,0) 34%);pointer-events:none}\nrdr-parcours .a-haut-txt{position:relative;z-index:2;width:100%;padding:44px 0 140px;pointer-events:none}\nrdr-parcours .a-haut-txt .trame>*{max-width:min(42vw,580px)}\nrdr-parcours .a-haut h1{margin-top:16px;font-size:clamp(32px,3.9vw,58px)}\nrdr-parcours .a-haut h1 em{font-style:inherit;color:var(--jaune)}\nrdr-parcours .a-haut .chapo{margin:22px 0 0;font-size:clamp(14px,1.15vw,16.5px);line-height:1.6;color:var(--t2)}\nrdr-parcours .a-depuis{display:inline-flex;align-items:center;gap:12px;margin-top:26px;padding:10px 16px 10px 12px;border:1px solid rgba(255,255,255,.2);border-radius:14px 4px 14px 4px;background:rgba(10,18,40,.6);font-weight:700;font-size:12.5px;letter-spacing:.04em}\nrdr-parcours .a-depuis b{font-family:var(--titre);font-style:italic;font-weight:400;font-size:26px;color:var(--jaune);line-height:1}\n@keyframes rpa-a-descend{50%{transform:translateY(5px)}}\nrdr-parcours .chiffres{position:relative;overflow:hidden;padding:calc(clamp(56px,8vh,96px) * var(--air)) 0;background:linear-gradient(180deg,var(--nuit) 0%,var(--marine) 100%)}\nrdr-parcours .ch-fond{position:absolute;inset:0;pointer-events:none}\nrdr-parcours .chiffres{margin-top:-90px;z-index:2;background:linear-gradient(180deg,rgba(10,18,40,0) 0,var(--nuit) 90px,var(--marine) 100%)}\nrdr-parcours .ch-titre{margin-top:12px;font-size:clamp(30px,3.6vw,48px)}\nrdr-parcours .chiffres-grille{position:relative;display:grid;grid-template-columns:.8fr 1.1fr 1.3fr;gap:18px;margin-top:calc(28px * var(--air))}\nrdr-parcours .chiffre{position:relative;display:flex;flex-direction:column;overflow:hidden;isolation:isolate;padding:24px 26px;border-radius:22px 6px 22px 6px;background:var(--panneau);border:1px solid var(--filet);cursor:default}\nrdr-parcours .ch-dessin{order:0;align-self:flex-start;display:block;height:44px;width:auto;margin-bottom:18px;overflow:visible}\nrdr-parcours .chiffre-val{order:1;font-family:var(--titre);font-style:italic;font-size:clamp(46px,5.4vw,78px);line-height:1;color:#fff;white-space:nowrap}\nrdr-parcours .chiffre-val small{font-size:.42em;margin-left:6px;color:var(--jaune)}\nrdr-parcours .chiffre-lib{order:2;margin-top:12px;font-weight:800;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--jaune)}\nrdr-parcours .chiffre-txt{order:3;margin:8px 0 0;font-size:13.5px;color:var(--t2)}\nrdr-parcours .chiffre--record{container-type:inline-size}\nrdr-parcours .chrono{display:flex;align-items:baseline;gap:2px;white-space:nowrap}\nrdr-parcours .chrono b{font-weight:400;font-size:min(clamp(40px,4.4vw,64px),calc((100cqi - 150px) / 5.3))}\nrdr-parcours .chrono>i{font-style:normal;font-family:var(--police);font-weight:800;font-size:13px;margin:0 9px 0 3px;color:var(--jaune)}\nrdr-parcours .chrono-moy{order:4;display:flex;align-items:center;gap:10px;margin-top:14px;font-size:12.5px;color:var(--t2)}\nrdr-parcours .jauge{position:relative;flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.1);overflow:hidden}\nrdr-parcours .jauge i{position:absolute;inset:0 auto 0 0;width:0;background:linear-gradient(90deg,var(--teal),var(--jaune));transition:width 2.4s cubic-bezier(.2,.8,.2,1) .3s}\nrdr-parcours .chiffre.roule .jauge i{width:72%}\nrdr-parcours .odo{display:inline-flex;align-items:flex-start}\nrdr-parcours .odo-c{display:inline-block;height:1em;margin-right:-.05em;clip-path:inset(0 -40% 0 -40%)}\nrdr-parcours .odo-r{display:block;will-change:transform}\nrdr-parcours .odo-r i{display:block;height:1em;line-height:1em;font-style:inherit;text-align:center}\nrdr-parcours .odo-s{display:inline-block;width:.26em}\nrdr-parcours .d-ligne{fill:none;stroke:var(--jaune);stroke-width:2.4;stroke-dasharray:5 5;transform-box:fill-box;transform-origin:left center;transform:scaleX(0);transition:transform 1.4s cubic-bezier(.2,.8,.2,1) .2s}\nrdr-parcours .d-bouee{fill:var(--corail)}\nrdr-parcours .d-comite{fill:#fff}\nrdr-parcours .d-mat{stroke:#fff;stroke-width:2}\nrdr-parcours .d-flamme{fill:var(--jaune);transform-box:fill-box;transform-origin:left center;animation:rpa-d-flotte 1.6s ease-in-out infinite}\n@keyframes rpa-d-flotte{50%{transform:scaleX(.8) skewY(6deg)}}\nrdr-parcours .d-arc{fill:none;stroke:var(--jaune);stroke-width:2.6;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset 2.2s cubic-bezier(.3,.7,.2,1) .2s}\nrdr-parcours .d-bout{fill:var(--jaune)}\nrdr-parcours .d-bout--vide{fill:none;stroke:var(--jaune);stroke-width:2}\nrdr-parcours .d-cadran{fill:none;stroke:rgba(255,255,255,.18);stroke-width:3}\nrdr-parcours .d-trace{fill:none;stroke:var(--jaune);stroke-width:3;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transform:rotate(-90deg);transform-origin:22px 25px;transition:stroke-dashoffset 2.6s cubic-bezier(.3,.7,.2,1) .2s}\nrdr-parcours .d-poussoir{stroke:#fff;stroke-width:2.4;stroke-linecap:round}\nrdr-parcours .d-aiguille{stroke:#fff;stroke-width:2.2;stroke-linecap:round;transform-origin:22px 25px;transition:transform 2.6s cubic-bezier(.3,.7,.2,1) .2s}\nrdr-parcours .chiffre.roule .d-ligne{transform:scaleX(1)}\nrdr-parcours .chiffre.roule .d-arc,rdr-parcours .chiffre.roule .d-trace{stroke-dashoffset:0}\nrdr-parcours .chiffre.roule .d-aiguille{transform:rotate(1080deg)}\nrdr-parcours .chiffre.sans-transition *{transition:none!important}\nrdr-parcours .papier{background:var(--papier);color:var(--encre)}\nrdr-parcours .obstacles{position:relative;padding:calc(clamp(60px,9vh,110px) * var(--air)) 0;overflow:hidden}\nrdr-parcours .obstacles .tex{background:var(--marine2);opacity:.08;-webkit-mask:var(--vagues) no-repeat right -80px bottom -70px / min(900px,78vw) auto;mask:var(--vagues) no-repeat right -80px bottom -70px / min(900px,78vw) auto}\nrdr-parcours .obstacles .kicker{color:var(--vert)}\nrdr-parcours .obs-tete{display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(24px,5vw,70px);align-items:end}\nrdr-parcours .obs-tete h2{font-size:clamp(34px,4.4vw,60px);color:var(--encre)}\nrdr-parcours .obs-tete p{margin:0;font-size:15px;line-height:1.7;color:var(--encre2)}\nrdr-parcours .obs-tete p b{color:var(--encre)}\nrdr-parcours .obs-grille{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-top:calc(40px * var(--air))}\nrdr-parcours .obs{position:relative;display:flex;flex-direction:column;border-radius:20px 6px 20px 6px;background:#fff;box-shadow:0 1px 0 rgba(14,17,29,.06),0 18px 34px -24px rgba(14,17,29,.45);overflow:hidden;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}\nrdr-parcours .obs:hover{transform:translateY(-4px);box-shadow:0 1px 0 rgba(14,17,29,.06),0 26px 44px -24px rgba(14,17,29,.55)}\nrdr-parcours .obs-photo{position:relative;aspect-ratio:4/3;overflow:hidden;background:linear-gradient(150deg,var(--c1),var(--c2))}\nrdr-parcours .obs-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}\nrdr-parcours .obs:hover .obs-photo img{transform:scale(1.05)}\nrdr-parcours .obs-photo::after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(14,17,29,.62) 0%,rgba(14,17,29,0) 55%);pointer-events:none}\nrdr-parcours .obs-photo .ico{position:absolute;right:18px;bottom:16px;width:52px;height:52px;color:rgba(255,255,255,.92);stroke-width:1.6}\nrdr-parcours .obs-photo small{position:absolute;left:14px;top:12px;padding:3px 8px;border-radius:999px;background:rgba(14,17,29,.45);color:#fff;font:700 9.5px var(--police);letter-spacing:.12em;text-transform:uppercase}\nrdr-parcours .obs-num{position:absolute;z-index:2;left:14px;bottom:10px;font-family:'VarienOutline',var(--titre);font-style:italic;font-size:54px;line-height:1;color:#fff;opacity:.9}\nrdr-parcours .obs-corps{padding:18px 20px 22px}\nrdr-parcours .obs-corps>small{display:none}\nrdr-parcours .obs h3{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:22px;line-height:1;color:var(--encre)}\nrdr-parcours .obs p{margin:10px 0 0;font-size:13.5px;line-height:1.62;color:var(--encre2)}\nrdr-parcours .obs-ou{display:inline-flex;align-items:center;gap:6px;margin-top:12px;font:800 10px var(--police);letter-spacing:.12em;text-transform:uppercase;color:var(--vert)}\nrdr-parcours .obs-ou .ico{width:13px;height:13px}\nrdr-parcours .photo-vents{position:relative;height:clamp(360px,62vh,620px);overflow:hidden;background:#101A36;margin:0}\nrdr-parcours .photo-vents img{position:absolute;inset:-6% 0;width:100%;height:112%;object-fit:cover;transform:translate3d(0,var(--pv,0px),0)}\nrdr-parcours .photo-vents::after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(14,17,29,.92) 0%,rgba(14,17,29,.2) 45%,rgba(14,17,29,0) 70%)}\nrdr-parcours .photo-vents figcaption{position:absolute;z-index:2;left:0;right:0;bottom:clamp(24px,5vh,48px)}\nrdr-parcours .photo-vents h2{margin-top:12px;font-size:clamp(30px,4vw,56px)}\nrdr-parcours .photo-vents p{margin:12px 0 0;max-width:40em;font-size:14px;color:var(--t2)}\nrdr-parcours .photo-vents .credit{margin-top:10px;font-size:11px;color:var(--t3)}\nrdr-parcours .meteo{position:relative;padding:calc(clamp(60px,9vh,110px) * var(--air)) 0 calc(clamp(40px,6vh,80px) * var(--air));background:var(--marine);overflow:clip}\nrdr-parcours .meteo>.tex{background:#fff;opacity:.035;-webkit-mask:var(--topo-faq) repeat center top / 1200px auto;mask:var(--topo-faq) repeat center top / 1200px auto}\nrdr-parcours .meteo-tete{position:relative;display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(24px,5vw,70px);align-items:end}\nrdr-parcours .meteo-tete h2{margin-top:12px;font-size:clamp(34px,4.4vw,60px)}\nrdr-parcours .meteo-tete p{margin:0;font-size:15px;line-height:1.7;color:var(--t2)}\nrdr-parcours .meteo-tete p b{color:#fff}\nrdr-parcours .traversee{position:relative;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:clamp(22px,4vw,56px);margin-top:calc(44px * var(--air))}\nrdr-parcours .traversee-carte{--hc:min(calc(100svh - var(--colle) - 40px),640px);position:sticky;top:calc(var(--colle) + (100svh - var(--colle) - var(--hc)) / 2);height:var(--hc);border-radius:24px 6px 24px 6px;overflow:hidden;background:var(--nuit);border:1px solid var(--filet)}\nrdr-parcours .legende{position:absolute;left:14px;bottom:12px;z-index:3;display:flex;flex-wrap:wrap;gap:6px 12px;padding:8px 12px;border-radius:10px;background:rgba(10,18,40,.72);font:700 10px var(--police);letter-spacing:.08em;text-transform:uppercase;opacity:0;transition:opacity .5s}\nrdr-parcours .legende span{display:inline-flex;align-items:center;gap:6px}\nrdr-parcours .legende i{width:16px;height:0;border-top:2px dashed currentColor}\nrdr-parcours .traversee[data-etape=\"2\"] .legende{opacity:1}\nrdr-parcours .c-svg--atl{transition:transform 1.1s cubic-bezier(.6,0,.2,1),opacity .8s}\nrdr-parcours .c-zoom{opacity:0;transform:scale(.35);transition:transform 1.1s cubic-bezier(.3,0,.2,1),opacity .7s .15s;pointer-events:none}\nrdr-parcours .traversee.zoom .c-svg--atl{transform:scale(3.2);opacity:0}\nrdr-parcours .traversee.zoom .c-zoom{opacity:1;transform:none}\nrdr-parcours .z-mer-medaillon{fill:var(--off-medaillon)}\nrdr-parcours .z-ile{fill:#22385F;stroke:rgba(93,191,192,.7);stroke-width:1}\nrdr-parcours .z-approche{fill:none;stroke:var(--jaune);stroke-width:2.6;stroke-dasharray:6 6;stroke-linecap:round}\nrdr-parcours .z-masque{fill:none;stroke:#fff;stroke-width:14;stroke-dasharray:100 100;stroke-dashoffset:100}\nrdr-parcours .traversee.zoom .z-masque{stroke-dashoffset:0;transition:stroke-dashoffset 3s cubic-bezier(.4,0,.2,1) 1s}\nrdr-parcours .z-lieu{font:700 10px var(--police);letter-spacing:.14em;text-transform:uppercase;fill:rgba(255,255,255,.75)}\nrdr-parcours .z-lieu--ile{fill:rgba(255,255,255,.55)}\nrdr-parcours .z-lieu--mer{font:italic 500 12px var(--police);letter-spacing:.02em;text-transform:none;fill:rgba(255,255,255,.6)}\nrdr-parcours .z-lieu--arrivee{font:italic 400 16px var(--titre);letter-spacing:.02em;fill:#fff}\nrdr-parcours .z-titre{font:800 10px var(--police);letter-spacing:.2em;text-transform:uppercase;fill:var(--jaune)}\nrdr-parcours .etapes{position:relative;display:flex;flex-direction:column}\nrdr-parcours .etape{min-height:min(76svh,640px);display:flex;flex-direction:column;justify-content:center;padding:24px 0;opacity:.28;transition:opacity .5s}\nrdr-parcours .etape.est-la{opacity:1}\nrdr-parcours .etape-num{display:inline-flex;align-items:center;gap:10px;font:800 11px var(--police);letter-spacing:.18em;text-transform:uppercase;color:var(--teal)}\nrdr-parcours .etape-num b{display:grid;place-items:center;width:30px;height:30px;border-radius:9px 2px 9px 2px;background:var(--c,var(--teal));color:var(--marine);font-size:13px;letter-spacing:0}\nrdr-parcours .etape h3{margin:14px 0 0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(24px,2.4vw,34px);line-height:1}\nrdr-parcours .etape-photo{position:relative;margin:18px 0 0;border-radius:16px 4px 16px 4px;overflow:hidden;aspect-ratio:16/7;background:var(--panneau)}\nrdr-parcours .etape-photo img{width:100%;height:100%;object-fit:cover}\nrdr-parcours .etape-photo::after{content:'';position:absolute;inset:8px;border:1px solid rgba(255,255,255,.4);border-radius:12px 3px 12px 3px;pointer-events:none}\nrdr-parcours .etape p{margin:14px 0 0;font-size:14.5px;line-height:1.72;color:var(--t2)}\nrdr-parcours .etape p b{color:#fff}\nrdr-parcours .etape .puce{display:flex;gap:12px;margin-top:14px;padding:12px 14px;border-radius:14px 4px 14px 4px;background:rgba(255,255,255,.05);border:1px solid var(--filet);font-size:13.5px;line-height:1.6;color:var(--t2)}\nrdr-parcours .etape .puce .ico{margin-top:3px;color:var(--pc,var(--teal))}\nrdr-parcours .etape .puce b{color:var(--pc,var(--teal))}\nrdr-parcours .meteo-lire{display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:0;border:0;background:none;color:var(--jaune);font:800 11px var(--police);letter-spacing:.14em;text-transform:uppercase;cursor:pointer}\nrdr-parcours .meteo-lire .ico{width:14px;height:14px;transition:transform .3s}\nrdr-parcours .meteo-lire[aria-expanded=\"true\"] .ico{transform:rotate(180deg)}\nrdr-parcours .suite{display:none}\nrdr-parcours .suite.ouverte{display:block}\nrdr-parcours .meteo-signature{position:relative;display:flex;align-items:center;gap:14px;margin-top:calc(40px * var(--air));padding:18px 20px;border-radius:18px 5px 18px 5px;background:var(--panneau);border:1px solid var(--filet);font-size:13px;color:var(--t2)}\nrdr-parcours .meteo-signature .ico{width:28px;height:28px;color:var(--jaune)}\nrdr-parcours .meteo-signature b{color:#fff}\nrdr-parcours .suites{position:relative;padding:calc(clamp(50px,8vh,90px) * var(--air)) 0 calc(72px * var(--air));background:linear-gradient(180deg,var(--marine) 0%,var(--nuit) 45%,var(--marine) 100%);overflow:hidden}\nrdr-parcours .suites-grille{position:relative;display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:16px;margin-top:calc(22px * var(--air))}\nrdr-parcours .sc{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:clamp(210px,28vh,260px);padding:22px 24px 22px;border-radius:22px 6px 22px 6px;overflow:hidden;isolation:isolate;text-decoration:none;color:#fff;background:var(--panneau);transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}\nrdr-parcours .sc:hover{transform:translateY(-4px);box-shadow:0 26px 50px -26px rgba(0,0,0,.8)}\nrdr-parcours .sc-photo{position:absolute;inset:0;z-index:-3;background:center/cover no-repeat;transition:transform .9s cubic-bezier(.2,.7,.2,1)}\nrdr-parcours .sc:hover .sc-photo{transform:scale(1.06)}\nrdr-parcours .sc::before{content:'';position:absolute;inset:0;z-index:-2;background:linear-gradient(0deg,rgba(10,18,40,.96) 0%,rgba(10,18,40,.6) 45%,rgba(10,18,40,.08) 100%)}\nrdr-parcours .sc::after{content:'';position:absolute;inset:10px;z-index:1;border:1px solid rgba(255,255,255,.3);border-radius:16px 4px 16px 4px;pointer-events:none}\nrdr-parcours .sc-corps{position:relative;z-index:2;display:flex;flex-direction:column;gap:6px;padding-right:56px}\nrdr-parcours .sc-corps small{font:700 11.5px var(--police);color:rgba(255,255,255,.72)}\nrdr-parcours .sc-corps b{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(24px,2.3vw,32px);line-height:1}\nrdr-parcours .sc-fleche{position:absolute;z-index:2;right:22px;bottom:22px;display:grid;place-items:center;width:42px;height:42px;border-radius:12px 3px 12px 3px;background:var(--jaune);color:var(--marine);transition:transform .35s}\nrdr-parcours .sc-fleche .ico{width:20px;height:20px}\nrdr-parcours .sc:hover .sc-fleche{transform:translateX(4px)}\nrdr-parcours .sc-blasons{position:absolute;z-index:1;right:20px;top:20px;display:flex;gap:6px}\nrdr-parcours .sc-blasons img{display:block;height:clamp(52px,4.6vw,66px);width:auto;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45));transition:transform .4s cubic-bezier(.2,.8,.2,1)}\nrdr-parcours .sc:hover .sc-blasons img{transform:translateY(-5px)}\nrdr-parcours .sc-blasons img:nth-child(2){transition-delay:.04s}\nrdr-parcours .sc-blasons img:nth-child(3){transition-delay:.08s}\nrdr-parcours .sc-blasons img:nth-child(4){transition-delay:.12s}\nrdr-parcours .sc-blasons img:nth-child(5){transition-delay:.16s}\nrdr-parcours .sc-blasons img:nth-child(6){transition-delay:.2s}\nrdr-parcours .sc-annee{position:absolute;z-index:1;right:14px;top:4px;font-family:'VarienOutline',var(--titre);font-style:italic;font-size:clamp(72px,7vw,104px);line-height:1;color:rgba(255,255,255,.75)}\nrdr-parcours .sc--bientot{background:linear-gradient(150deg,#16355D 0%,#0A1228 100%);cursor:default}\nrdr-parcours .sc--bientot:hover{transform:none;box-shadow:none}\nrdr-parcours .sc--bientot .sc-fleche{background:rgba(255,255,255,.14);color:rgba(255,255,255,.6)}\nrdr-parcours .sc-trace{position:absolute;z-index:0;inset:14px 14px auto auto;width:62%;height:auto;overflow:visible}\nrdr-parcours .sc-trace path{fill:none;stroke:var(--jaune);stroke-width:2;stroke-dasharray:5 6;opacity:.8}\nrdr-parcours .sc-trace circle{fill:var(--jaune)}\nrdr-parcours .sc-bientot{position:absolute;z-index:2;left:22px;top:22px;display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:7px 2px 7px 2px;background:var(--jaune);color:var(--marine);font:800 9px var(--police);letter-spacing:.14em;text-transform:uppercase;transform:skewX(-6deg)}\nrdr-parcours .sc-bientot::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--marine)}\n@media (max-height:820px) and (min-width:751px){\nrdr-parcours .a-haut h1{font-size:clamp(30px,3.5vw,48px)}\nrdr-parcours .a-haut .chapo{margin-top:16px;font-size:14px}\nrdr-parcours .a-depuis{margin-top:18px}\nrdr-parcours .a-haut-txt{padding:32px 0 116px}\nrdr-parcours .etape{min-height:min(84svh,560px)}\nrdr-parcours .chiffre{padding:22px 22px 20px}\nrdr-parcours .ch-dessin{height:38px;margin-bottom:12px}\nrdr-parcours .sc{min-height:200px}\n}\n@media (max-width:1100px){\nrdr-parcours .chiffres-grille{grid-template-columns:1fr 1fr}\nrdr-parcours .chiffre--record{grid-column:1 / -1}\nrdr-parcours .obs-grille{grid-template-columns:1fr 1fr}\nrdr-parcours .suites-grille{grid-template-columns:1fr 1fr}\nrdr-parcours .suites-grille .sc:first-child{grid-column:1 / -1}\n}\n@media (max-width:750px){\nrdr-parcours{font-size:14px}\nrdr-parcours .a-haut{min-height:0;flex-direction:column;align-items:stretch}\nrdr-parcours .a-haut .carte{position:relative;inset:auto;height:clamp(250px,62vw,340px);order:2}\nrdr-parcours .a-haut::after{background:linear-gradient(180deg,var(--nuit) 0%,rgba(10,18,40,0) 30%),linear-gradient(0deg,var(--nuit) 0,rgba(10,18,40,0) 70px)}\nrdr-parcours .chiffres{margin-top:0;background:linear-gradient(180deg,var(--nuit) 0%,var(--marine) 100%)}\nrdr-parcours .a-haut::after{z-index:1}\nrdr-parcours .a-haut-txt{padding:36px 0 8px}\nrdr-parcours .a-haut-txt .trame>*{max-width:none}\nrdr-parcours .a-haut h1{font-size:clamp(30px,8.6vw,40px)}\nrdr-parcours .c-lieu{font-size:8.5px;letter-spacing:.08em}\nrdr-parcours .c-lieu--port{font-size:10px}\nrdr-parcours .c-distance{font-size:21px}\nrdr-parcours .c-voilier--ultim{width:32px}\nrdr-parcours .c-voilier--o50{width:26px}\nrdr-parcours .chiffres-grille{grid-template-columns:1fr}\nrdr-parcours .chiffre--record{grid-column:auto}\nrdr-parcours .obs-tete,rdr-parcours .meteo-tete{grid-template-columns:1fr;gap:16px}\nrdr-parcours .obs-grille{grid-template-columns:1fr;gap:14px}\nrdr-parcours .obs{flex-direction:row;align-items:stretch}\nrdr-parcours .obs-photo{flex:0 0 36%;aspect-ratio:auto;min-height:100%}\nrdr-parcours .obs-photo .ico{width:36px;height:36px;right:10px;bottom:10px}\nrdr-parcours .obs-num{font-size:34px}\nrdr-parcours .obs-photo small{display:none}\nrdr-parcours .obs-corps{padding:14px 16px 16px}\nrdr-parcours .obs h3{font-size:18px}\nrdr-parcours .obs p{font-size:13px}\nrdr-parcours .traversee{display:block;margin-top:calc(28px * var(--air))}\nrdr-parcours .traversee-carte{--hc:clamp(210px,56vw,300px);position:sticky;top:calc(var(--colle) + 8px);z-index:3;border-radius:16px 4px 16px 4px;box-shadow:0 18px 30px -18px rgba(0,0,0,.8)}\nrdr-parcours .legende{left:6px;right:6px;bottom:6px;flex-wrap:nowrap;justify-content:center;gap:10px;padding:5px 8px;font-size:8px;letter-spacing:.03em}\nrdr-parcours .legende i{width:10px}\nrdr-parcours .z-lieu{font-size:7.5px;letter-spacing:.1em}\nrdr-parcours .z-lieu--ile{display:none}\nrdr-parcours .z-lieu--mer{font-size:9px}\nrdr-parcours .z-lieu--arrivee{font-size:12px}\nrdr-parcours .z-titre{font-size:8px;letter-spacing:.16em}\nrdr-parcours .etape{min-height:auto;padding:30px 0 10px;opacity:1}\nrdr-parcours .meteo-lire{min-height:44px;margin-top:4px}\nrdr-parcours .suites-grille{grid-template-columns:1fr}\nrdr-parcours .sc{min-height:190px}\nrdr-parcours .sc-blasons{right:16px;top:16px;gap:4px}\nrdr-parcours .sc-blasons img{height:44px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-parcours *{animation:none!important;transition:none!important}\n}";
  const PAGE_HTML = "<header class=\"a-haut seulement-a\" id=\"haut\">\n  <div class=\"carte\" id=\"carte-haut\"><div class=\"chargement\">La carte se dessine…</div></div>\n  <div class=\"a-haut-txt\"><div class=\"trame\">\n    <span class=\"kicker\">Le parcours</span>\n    <h1 class=\"titre\">Un parcours historique, <em>inchangé depuis la toute première édition</em></h1>\n    <p class=\"chapo\" id=\"chapo\"></p>\n    <div class=\"a-depuis\"><b>1978</b><span>la même ligne, de Saint-Malo<br>à Pointe-à-Pitre</span></div>\n  </div></div>\n  </header>\n<section class=\"chiffres seulement-a\" id=\"chiffres\" aria-labelledby=\"t-chiffres\">\n  <div class=\"ch-fond\" aria-hidden=\"true\"></div>\n  <div class=\"trame\">\n    <span class=\"kicker t-p\">Les chiffres clefs</span>\n    <h2 class=\"titre ch-titre\" id=\"t-chiffres\"><span class=\"t-p\">Une ligne, un océan, un record</span></h2>\n    <div class=\"chiffres-grille\">\n      <article class=\"chiffre\">\n        <svg class=\"ch-dessin\" viewBox=\"0 0 132 44\" aria-hidden=\"true\"><path class=\"d-ligne\" d=\"M14 31H106\"/><circle class=\"d-bouee\" cx=\"12\" cy=\"31\" r=\"5.5\"/><path class=\"d-comite\" d=\"M104 31h24l-5 6h-15z\"/><path class=\"d-mat\" d=\"M114 31V9\"/><path class=\"d-flamme\" d=\"M115 9l12 4.5-12 4.5z\"/></svg>\n        <div class=\"chiffre-val\" aria-label=\"1\"><span class=\"odo\" data-txt=\"1\"></span></div>\n        <div class=\"chiffre-lib\">Ligne de départ</div>\n        <p class=\"chiffre-txt\">Au large de Saint-Malo, le dimanche 1<sup>er</sup> novembre 2026 à 13&nbsp;h&nbsp;02.</p>\n      </article>\n      <article class=\"chiffre\">\n        <svg class=\"ch-dessin\" viewBox=\"0 0 132 44\" aria-hidden=\"true\"><path class=\"d-arc\" pathLength=\"100\" d=\"M10 36C40 34 84 20 122 9\"/><circle class=\"d-bout d-bout--vide\" cx=\"122\" cy=\"9\" r=\"4.5\"/><circle class=\"d-bout\" cx=\"10\" cy=\"36\" r=\"4.5\"/></svg>\n        <div class=\"chiffre-val\" aria-label=\"3 542 milles nautiques\"><span class=\"odo\" data-txt=\"3 542\"></span><small>MN</small></div>\n        <div class=\"chiffre-lib\">Milles nautiques</div>\n        <p class=\"chiffre-txt\">Soit 6 560 km entre Saint-Malo et Pointe-à-Pitre, en ligne directe. À la voile, la route est toujours plus longue.</p>\n      </article>\n      <article class=\"chiffre chiffre--record\">\n        <svg class=\"ch-dessin\" viewBox=\"0 0 44 46\" aria-hidden=\"true\"><circle class=\"d-cadran\" cx=\"22\" cy=\"25\" r=\"17\"/><circle class=\"d-trace\" pathLength=\"100\" cx=\"22\" cy=\"25\" r=\"17\"/><path class=\"d-poussoir\" d=\"M17 3h10M22 3v5\"/><path class=\"d-aiguille\" d=\"M22 25V13\"/></svg>\n        <div class=\"chiffre-val chrono\" aria-label=\"6 jours 19 heures 47 minutes 25 secondes\"><b><span class=\"odo\" data-txt=\"6\"></span></b><i>j</i><b><span class=\"odo\" data-txt=\"19\"></span></b><i>h</i><b><span class=\"odo\" data-txt=\"47\"></span></b><i>min</i><b><span class=\"odo\" data-txt=\"25\"></span></b><i>s</i></div>\n        <div class=\"chiffre-lib\">Le record de l'épreuve</div>\n        <p class=\"chiffre-txt\">Charles Caudrelier, en 2022, sur le Maxi Edmond de Rothschild.</p>\n        <div class=\"chrono-moy\"><span>21,6 nœuds de moyenne</span><span class=\"jauge\"><i></i></span><span>40 km/h</span></div>\n      </article>\n    </div>\n  </div>\n  </section>\n<section class=\"obstacles papier\" id=\"obstacles\" aria-labelledby=\"t-obstacles\">\n  <div class=\"tex\" aria-hidden=\"true\"></div>\n  <div class=\"trame\">\n    <div class=\"obs-tete\">\n      <div><span class=\"kicker\">Sur la route</span><h2 class=\"titre\" id=\"t-obstacles\" style=\"margin-top:12px\">Les obstacles</h2></div>\n      <p id=\"obs-intro\"></p>\n    </div>\n    <div class=\"obs-grille\" id=\"obs-grille\"></div>\n  </div>\n</section>\n<figure class=\"photo-vents\" id=\"photo-vents\">\n  <img alt=\"Les vents sur l'Atlantique Nord : les dépressions au nord, l'alizé au sud\" data-photo=\"vents\" data-l=\"1600\" data-h=\"860\" loading=\"lazy\" decoding=\"async\">\n  <figcaption><div class=\"trame\">\n    <span class=\"kicker t-p\">Place à la météo</span>\n    <h2 class=\"titre t-p\">Un océan, trois ciels</h2>\n    <p class=\"t-p\">Les dépressions qui balaient le nord de l'Atlantique, l'anticyclone des Açores au centre, l'alizé qui pousse vers les Antilles. En novembre, les skippers les traversent tous.</p>\n  </div></figcaption>\n</figure>\n<section class=\"meteo seulement-a\" id=\"meteo\" aria-labelledby=\"t-meteo\">\n  <div class=\"tex\" aria-hidden=\"true\"></div>\n  <div class=\"trame\">\n    <div class=\"meteo-tete\">\n      <div><span class=\"kicker t-p\">La météo de la course</span><h2 class=\"titre\" id=\"t-meteo\"><span class=\"t-p\">De Saint-Malo aux Antilles</span></h2></div>\n      <p id=\"meteo-intro\"></p>\n    </div>\n    <div class=\"traversee\" id=\"traversee\" data-etape=\"0\">\n      <div class=\"traversee-carte\" id=\"carte-meteo\"><div class=\"chargement\">La carte se dessine…</div>\n        <div class=\"legende\"><span style=\"color:var(--teal)\"><i></i>Par le nord</span><span style=\"color:var(--or)\"><i></i>Médiane</span><span style=\"color:var(--corail)\"><i></i>Par le sud</span><span style=\"color:rgba(255,255,255,.6)\">Schéma indicatif</span></div>\n      </div>\n      <div class=\"etapes\" id=\"etapes\"></div>\n    </div>\n    <div class=\"meteo-signature\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"cloudLightning\"></svg><span>Décryptage de <b>Cyrille Duchesne</b>, expert météo de la course pour <b>Météo Consult</b>, partenaire de la transatlantique en solitaire.</span></div>\n  </div>\n</section>\n<section class=\"suites\" aria-label=\"Pour aller plus loin\">\n  <div class=\"trame\">\n    <span class=\"kicker\">Pour aller plus loin</span>\n    <div class=\"suites-grille\" id=\"suites\"></div>\n  </div>\n</section>";
  const TRAD = {"Le parcours":"The course","Un parcours historique,":"A historic course,","inchangé depuis la toute première édition":"unchanged since the very first edition","la même ligne, de Saint-Malo":"the same line, from Saint-Malo","à Pointe-à-Pitre":"to Pointe-à-Pitre","Les chiffres clefs":"Key figures","Une ligne, un océan, un record":"One line, one ocean, one record","Ligne de départ":"Start line","Au large de Saint-Malo, le dimanche 1":"Off Saint-Malo, on Sunday 1","er":"st","novembre 2026 à 13 h 02.":"November 2026 at 1.02 pm.","3 542 milles nautiques":"3,542 nautical miles","MN":"NM","Milles nautiques":"Nautical miles","Soit 6 560 km entre Saint-Malo et Pointe-à-Pitre, en ligne directe. À la voile, la route est toujours plus longue.":"That is 6,560 km between Saint-Malo and Pointe-à-Pitre in a straight line. Under sail, the route is always longer.","6 jours 19 heures 47 minutes 25 secondes":"6 days 19 hours 47 minutes 25 seconds","j":"d","Le record de l'épreuve":"The race record","Charles Caudrelier, en 2022, sur le Maxi Edmond de Rothschild.":"Charles Caudrelier, in 2022, aboard the Maxi Edmond de Rothschild.","21,6 nœuds de moyenne":"21.6 knots on average","Sur la route":"On the course","Les obstacles":"The hazards","Les vents sur l'Atlantique Nord : les dépressions au nord, l'alizé au sud":"Winds over the North Atlantic: low-pressure systems to the north, the trade winds to the south","Place à la météo":"Over to the weather","Un océan, trois ciels":"One ocean, three skies","Les dépressions qui balaient le nord de l'Atlantique, l'anticyclone des Açores au centre, l'alizé qui pousse vers les Antilles. En novembre, les skippers les traversent tous.":"The lows sweeping across the North Atlantic, the Azores high in the middle, the trade winds blowing towards the West Indies. In November, the skippers sail through them all.","La météo de la course":"The race weather","De Saint-Malo aux Antilles":"From Saint-Malo to the West Indies","La carte se dessine…":"Drawing the map…","Par le nord":"Northern route","Médiane":"Middle route","Par le sud":"Southern route","Schéma indicatif":"Indicative diagram","Décryptage de":"Analysis by",", expert météo de la course pour":", the race's weather expert for",", partenaire de la transatlantique en solitaire.":", partner of the solo transatlantic race.","Pour aller plus loin":"Find out more","Lire la suite":"Read more","Refermer":"Show less","Bientôt":"Coming soon","Carte de l'Atlantique Nord : la route de Saint-Malo à Pointe-à-Pitre":"Map of the North Atlantic: the route from Saint-Malo to Pointe-à-Pitre","Océan Atlantique":"Atlantic Ocean","Açores":"Azores","Madère":"Madeira","Cap-Vert":"Cape Verde","Bermudes":"Bermuda","DST Ouessant":"TSS Ushant","DST Finisterre":"TSS Finisterre","Sargasses":"Sargassum","3 542 MN":"3,542 NM","≈ 6 560 km":"≈ 6,560 km","Dévent de la Soufrière":"Soufrière wind shadow","Canal des Saintes":"Saintes Channel","Ligne d'arrivée":"Finish line","Le tour de la Guadeloupe":"Rounding Guadeloupe"};
  const SOURCE = 'https://www.routedurhum.com/_functions/parcours';

  function poserStyle() {
    if (document.getElementById('rdr-parcours-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-parcours-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  const ATTRIBUTS = ['aria-label', 'title', 'alt'];
  function enAnglais(t) {
    const k = String(t).trim();
    if (!k || !Object.prototype.hasOwnProperty.call(TRAD, k)) return null;
    return t.replace(k, TRAD[k]);
  }
  function traduireTexte(n) { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; }
  function traduire(racine) {
    if (racine.nodeType === 3) { traduireTexte(racine); return; }
    if (racine.nodeType !== 1) return;
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach(traduireTexte);
    [racine, ...racine.querySelectorAll('[' + ATTRIBUTS.join('],[') + ']')].forEach((el) => ATTRIBUTS.forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      const v = enAnglais(el.getAttribute(a));
      if (v != null && v !== el.getAttribute(a)) el.setAttribute(a, v);
    }));
  }
  function prefixerLiens(racine) {
    if (racine.nodeType !== 1) return;
    [racine, ...racine.querySelectorAll('a[href^="/"]')].forEach((a) => {
      if (!a.matches || !a.matches('a[href^="/"]')) return;
      const h = a.getAttribute('href');
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('//')) return;
      a.setAttribute('href', '/en' + h);
    });
  }

  

  let geo = null;
  function script(src) {
    return new Promise((ok, ko) => {
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = () => ok(); s.onerror = () => ko(new Error('chargement impossible : ' + src));
      document.head.appendChild(s);
    });
  }
  function chargerGeo() {
    if (window.d3 && window.d3.geoMercator && window.topojson && window.topojson.feature) return Promise.resolve();
    if (!geo) {
      geo = Promise.all([
        (window.d3 && window.d3.geoMercator ? Promise.resolve() : script('https://cdn.jsdelivr.net/npm/d3-array@3').then(() => script('https://cdn.jsdelivr.net/npm/d3-geo@3'))),
        (window.topojson && window.topojson.feature ? Promise.resolve() : script('https://cdn.jsdelivr.net/npm/topojson-client@3'))
      ]);
      geo.catch(() => { geo = null; });
    }
    return geo;
  }
  

  function polices() {
    const f = window.document.fonts;
    if (!f || !f.load) return Promise.resolve();
    return Promise.race([
      Promise.all([f.load('italic 400 40px Varien'), f.load('italic 400 20px VarienOutline')]).catch(() => null).then(() => f.ready),
      new Promise((r) => setTimeout(r, 3000))
    ]);
  }

  

  function demarrer(__D, __hote, __page) {
    const document = {
      getElementById: (id) => __hote.querySelector('#' + id),
      querySelector: (s) => __hote.querySelector(s),
      querySelectorAll: (s) => __hote.querySelectorAll(s),
      createElement: (t) => window.document.createElement(t),
      createElementNS: (n, t) => window.document.createElementNS(n, t),
      documentElement: __page,
      body: __page,
      fonts: { ready: polices() }
    };
    let d3 = null, topojson = null;
    const MEDIAS = __D.medias, P = __D.p, ETAPES = __D.etapes, SUITES = __D.suites;
 
const ICO =  {"ship":"<path d=\"M12 10.189V14\"/><path d=\"M12 2v3\"/><path d=\"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6\"/><path d=\"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76\"/><path d=\"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/>","container":"<path d=\"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z\"/><path d=\"M10 21.9V14L2.1 9.1\"/><path d=\"m10 14 11.9-6.9\"/><path d=\"M14 19.8v-8.1\"/><path d=\"M18 17.5V9.4\"/>","fish":"<path d=\"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z\"/><path d=\"M18 12v.5\"/><path d=\"M16 17.93a9.77 9.77 0 0 1 0-11.86\"/><path d=\"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33\"/><path d=\"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4\"/><path d=\"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98\"/>","leaf":"<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/>","wind":"<path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\"/><path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\"/><path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\"/>","cloudLightning":"<path d=\"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973\"/><path d=\"m13 12-3 5h4l-3 5\"/>","sailboat":"<path d=\"M10 2v15\"/><path d=\"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z\"/><path d=\"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z\"/>","flag":"<path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\"/>","trophy":"<path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\"/><path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\"/><path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\"/><path d=\"M4 22h16\"/><path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\"/><path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\"/>","timer":"<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"/><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/>","ruler":"<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\"/><path d=\"m14.5 12.5 2-2\"/><path d=\"m11.5 9.5 2-2\"/><path d=\"m8.5 6.5 2-2\"/><path d=\"m17.5 15.5 2-2\"/>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z\"/>","triangleAlert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>","mapPin":"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>","gauge":"<path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/>","arrowRight":"<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>","chevronDown":"<path d=\"m6 9 6 6 6-6\"/>","sun":"<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>","wavesLadder":"<path d=\"M19 5a2 2 0 0 0-2 2v11\"/><path d=\"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M7 13h10\"/><path d=\"M7 9h10\"/><path d=\"M9 5a2 2 0 0 0-2 2v11\"/>"} ;
const BATEAUX = {};
const GEO = {"guadeloupe":[[[[-61.1952,15.9323],[-61.1952,15.9188],[-61.1988,15.9103],[-61.206,15.9036],[-61.2168,15.8934],[-61.242,15.8816],[-61.2744,15.8732],[-61.3068,15.8782],[-61.3176,15.9053],[-61.3176,15.9103],[-61.3212,15.9188],[-61.3248,15.9255],[-61.3284,15.9289],[-61.332,15.9323],[-61.3284,15.939],[-61.3176,15.9525],[-61.314,15.9677],[-61.3068,15.9779],[-61.2888,15.9981],[-61.2672,16.01],[-61.2456,16.0032],[-61.224,15.988],[-61.2132,15.9593],[-61.206,15.9525],[-61.1988,15.9458],[-61.1952,15.9323]]],[[[-60.99,16.346],[-61.0404,16.3139],[-61.0692,16.3021],[-61.0908,16.3055],[-61.08,16.3122],[-61.0404,16.3443],[-61.0152,16.3544],[-60.99,16.346]]],[[[-61.6236,15.8715],[-61.62,15.8681],[-61.6164,15.8597],[-61.62,15.8529],[-61.6272,15.8462],[-61.638,15.8529],[-61.6344,15.8664],[-61.6236,15.8715]]],[[[-61.566,15.8782],[-61.566,15.8766],[-61.566,15.8749],[-61.5696,15.8698],[-61.5804,15.8614],[-61.5912,15.858],[-61.5948,15.8631],[-61.5912,15.8681],[-61.584,15.8715],[-61.5804,15.8816],[-61.5732,15.8833],[-61.5696,15.8816],[-61.566,15.8782]]],[[[-61.5516,16.2852],[-61.548,16.2801],[-61.5552,16.2582],[-61.548,16.2379],[-61.5552,16.2362],[-61.5732,16.2329],[-61.5804,16.2227],[-61.5768,16.1754],[-61.566,16.1417],[-61.5588,16.0859],[-61.566,16.0336],[-61.5984,15.9964],[-61.6452,15.9711],[-61.6956,15.9492],[-61.6956,15.9542],[-61.7028,15.9694],[-61.6956,15.9762],[-61.7028,15.9897],[-61.71,15.9981],[-61.7208,16.0032],[-61.7316,16.0133],[-61.7388,16.0252],[-61.7424,16.037],[-61.746,16.0471],[-61.7568,16.0522],[-61.7676,16.0876],[-61.7712,16.167],[-61.7856,16.2025],[-61.7784,16.2177],[-61.7856,16.2295],[-61.7928,16.2396],[-61.7964,16.2514],[-61.7964,16.2683],[-61.7928,16.2987],[-61.7964,16.3122],[-61.7892,16.3207],[-61.7712,16.3494],[-61.7568,16.3612],[-61.7388,16.3646],[-61.728,16.3595],[-61.7208,16.3511],[-61.7136,16.346],[-61.6884,16.3409],[-61.6488,16.3291],[-61.6164,16.3122],[-61.5984,16.292],[-61.6128,16.2852],[-61.6056,16.2818],[-61.602,16.2818],[-61.5984,16.2852],[-61.5948,16.2818],[-61.584,16.2717],[-61.5804,16.2818],[-61.5696,16.2903],[-61.5588,16.292],[-61.5516,16.2852]]],[[[-61.5444,16.2852],[-61.5264,16.3375],[-61.5192,16.3494],[-61.5012,16.3527],[-61.4976,16.3561],[-61.494,16.3646],[-61.494,16.3747],[-61.4976,16.3814],[-61.5012,16.3848],[-61.5084,16.3899],[-61.5156,16.3933],[-61.5228,16.395],[-61.53,16.4304],[-61.5336,16.4389],[-61.5336,16.449],[-61.5264,16.4625],[-61.5084,16.4811],[-61.5048,16.4861],[-61.4976,16.4929],[-61.4652,16.5098],[-61.4616,16.5132],[-61.458,16.5115],[-61.4256,16.4895],[-61.4076,16.4726],[-61.3968,16.4524],[-61.3932,16.4253],[-61.3968,16.4],[-61.3932,16.3899],[-61.386,16.373],[-61.3752,16.3595],[-61.3644,16.3494],[-61.3536,16.3409],[-61.3392,16.3325],[-61.332,16.3409],[-61.3212,16.3342],[-61.3104,16.3342],[-61.3032,16.3342],[-61.2888,16.3325],[-61.2816,16.3274],[-61.26,16.3088],[-61.2528,16.3055],[-61.242,16.3004],[-61.188,16.2632],[-61.17,16.2582],[-61.1628,16.2531],[-61.1736,16.2447],[-61.1844,16.2447],[-61.2096,16.2514],[-61.2204,16.2548],[-61.2348,16.2582],[-61.4112,16.2193],[-61.4436,16.2058],[-61.4616,16.2025],[-61.4832,16.2058],[-61.5048,16.2126],[-61.5192,16.2227],[-61.5336,16.2329],[-61.5444,16.2464],[-61.548,16.2582],[-61.548,16.2717],[-61.5444,16.2852]]]]};
document.querySelectorAll('svg[data-i]').forEach((s) => { s.innerHTML = ICO[s.dataset.i] || ''; });
const pic = (n, c) => '<svg class="ico' + (c ? ' ' + c : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICO[n] || '') + '</svg>';

 

const photo =(k, l, h) => 'https://static.wixstatic.com/media/' + MEDIAS.photos[k] + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_75,enc_auto/x.jpg';
const racine = document.documentElement.style;
racine.setProperty('--topo', 'url("' + MEDIAS.topo + '")');
racine.setProperty('--topo-faq', 'url("' + MEDIAS.topoFaq + '")');
racine.setProperty('--vagues', 'url("' + MEDIAS.vagues + '")');
document.querySelector('.ch-fond').style.setProperty('--ch-photo', 'url("' + photo('depart', 1920, 1000) + '")');
document.querySelectorAll('[data-media]').forEach((i) => { i.src = MEDIAS[i.dataset.media]; });
document.querySelectorAll('[data-photo]').forEach((i) => { i.src = photo(i.dataset.photo, +i.dataset.l, +i.dataset.h); });

 


 
document.getElementById('chapo').textContent = P.chapo;
document.getElementById('obs-intro').innerHTML = P.obsIntro;
document.getElementById('meteo-intro').innerHTML = P.meteoIntro;
document.getElementById('obs-grille').innerHTML = P.obstacles.map((o, i) =>
  '<article class="obs"><div class="obs-photo" style="--c1:' + o.c1 + ';--c2:' + o.c2 + '"><img loading="lazy" decoding="async" alt="' + o.alt + '" style="object-position:' + o.pos + '" src="' + photo(o.photo, 800, 600) + '"><span class="obs-num">0' + (i + 1) + '</span></div>' +
  '<div class="obs-corps"><small>Avis aux navigateurs n° ' + (i + 1) + '</small><h3>' + o.t + '</h3><p>' + o.x + (o.valide ? '' : '<span class="a-valider">texte proposé</span>') + '</p><span class="obs-ou">' + pic('mapPin') + o.ou + '</span></div></article>').join('');





document.getElementById('etapes').innerHTML = ETAPES.map((e, i) => {
  const B = P.bulletins[e.b];
  const par = (k) => '<p>' + B.p[k] + '</p>';
  return '<article class="etape" data-i="' + (i + 1) + '" style="--c:' + B.c + '"><div class="etape-carte"><span class="etape-num"><b>' + e.n + '</b>' + B.ou + '</span>' +
    '<h3>' + (e.tb ? '<span class="t-p">' + e.t + '</span><span class="t-b">' + e.tb + '</span>' : e.t) + '</h3>' +
    (e.photo ? '<figure class="etape-photo"><img loading="lazy" alt="' + e.alt + '" src="' + photo(e.photo, 1000, 440) + '"></figure>' : '') +
    e.p.map(par).join('') +
    (e.suite.length ? '<button type="button" class="meteo-lire" aria-expanded="false"><span>Lire la suite</span>' + pic('chevronDown') + '</button><div class="suite">' + e.suite.map(par).join('') + '</div>' : '') +
    (e.puce ? '<div class="puce" style="--pc:' + e.puce.c + '">' + pic(e.puce.i) + '<span><b>' + e.puce.h + '.</b> ' + e.puce.x + '</span></div>' : '') + '</div></article>';
}).join('');
document.querySelectorAll('.meteo-lire').forEach((b) => b.addEventListener('click', () => {
  const o = b.getAttribute('aria-expanded') !== 'true';
  b.setAttribute('aria-expanded', String(o)); b.nextElementSibling.classList.toggle('ouverte', o);
  b.firstChild.textContent = o ? 'Refermer' : 'Lire la suite';
}));

 

document.getElementById('suites').innerHTML = SUITES.map((s) =>
  '<' + (s.bientot ? 'div aria-disabled="true"' : 'a href="' + s.href + '"') + ' class="sc' + (s.bientot ? ' sc--bientot' : '') + '">' +
  (s.photo ? '<span class="sc-photo" style="background-image:url(\'' + photo(s.photo, 900, 560) + '\')"></span>' : '') + s.deco +
  (s.bientot ? '<span class="sc-bientot">Bientôt</span>' : '') +
  '<span class="sc-corps"><small>' + s.k + '</small><b>' + s.t + '</b></span><span class="sc-fleche">' + pic('arrowRight') + '</span></' + (s.bientot ? 'div' : 'a') + '>').join('');

 
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.odo').forEach((o) => {
  o.setAttribute('aria-hidden', 'true');
  o.innerHTML = [...o.dataset.txt].map((c) => /\d/.test(c)
    ? '<span class="odo-c" data-d="' + c + '"><span class="odo-r">' + Array.from({ length: 30 }, (_, k) => '<i>' + (k % 10) + '</i>').join('') + '</span></span>'
    : '<span class="odo-s"></span>').join('');
});
function rouler(carte, retard) {
  const cols = [...carte.querySelectorAll('.odo-c')];
  carte.classList.add('sans-transition'); carte.classList.remove('roule');
  cols.forEach((c) => { c.firstChild.style.transition = 'none'; c.firstChild.style.transform = 'translateY(0)'; });
  void carte.offsetWidth;
  carte.classList.remove('sans-transition');
  cols.forEach((c, k) => {
    const r = c.firstChild, d = +c.dataset.d;
    r.style.transition = reduit ? 'none' : 'transform ' + (1.3 + k * 0.2).toFixed(2) + 's cubic-bezier(.15,.7,.2,1) ' + (retard + k * 0.05).toFixed(2) + 's';
    r.style.transform = 'translateY(-' + (20 + d) + 'em)';
  });
  carte.classList.add('roule');
}
const cartesChiffres = [...document.querySelectorAll('.chiffre')];
const vuChiffres = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  vuChiffres.unobserve(e.target);
  rouler(e.target, cartesChiffres.indexOf(e.target) * 0.25);
}), { threshold: 0.6 });
cartesChiffres.forEach((c) => {
  vuChiffres.observe(c);
   
  c.addEventListener('mouseenter', () => { if (c.classList.contains('roule') && !c.dataset.encours) { c.dataset.encours = '1'; rouler(c, 0); setTimeout(() => { delete c.dataset.encours; }, 2600); } });
});

 
const LIEUX = {
  malo: [-2.02, 48.65], pap: [-61.53, 16.24], finisterre: [-9.27, 42.88],
  acores: [-27.5, 38.5], madere: [-16.9, 32.7], canaries: [-15.6, 28.2], capvert: [-23.9, 15.9], bermudes: [-64.8, 32.3]
};
 
const OPTIONS = {
  nord: [LIEUX.malo, [-8, 46.8], [-19, 44.6], [-31, 41.2], [-44, 32], [-55, 22.5], LIEUX.pap],
  mediane: [LIEUX.malo, [-8, 45.6], [-13, 39], [-19, 32.5], [-31, 25.5], [-46, 19.5], LIEUX.pap],
  sud: [LIEUX.malo, [-8.6, 45], [-12.8, 37.5], [-17.5, 28.5], [-24, 21], [-40, 16.6], LIEUX.pap]
};



const APPROCHE = [[-60.98, 16.62], [-61.4, 16.58], [-61.72, 16.47], [-61.86, 16.33], [-61.86, 16.14], [-61.82, 15.98], [-61.72, 15.9], [-61.61, 15.92], [-61.53, 16.0], [-61.5, 16.12], [-61.53, 16.22]];
let TERRE = null;
async function terre() { await chargerGeo(); d3 = window.d3; topojson = window.topojson;
  if (!TERRE) { const t = await (await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json')).json(); TERRE = topojson.feature(t, t.objects.land); }
  return TERRE;
}
const FRANCE = { type: 'MultiPolygon', coordinates: GEO.france || [] };
const GWADA = { type: 'MultiPolygon', coordinates: GEO.guadeloupe || [] };
function lisse(pts) {
  let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += 'C' + c1.map((v) => v.toFixed(1)).join(' ') + ' ' + c2.map((v) => v.toFixed(1)).join(' ') + ' ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
  }
  return d;
}
const f1 = (v) => v.toFixed(1);
function texte(p, txt, cls, dx, dy, ancre) { return '<text class="' + cls + '" x="' + f1(p[0] + (dx || 0)) + '" y="' + f1(p[1] + (dy || 0)) + '" text-anchor="' + (ancre || 'start') + '">' + txt + '</text>'; }


async function dessiner(hote, o) {
  const T = await terre();
  hote.querySelectorAll('.c-svg,.c-flotte,.c-ultim,.chargement').forEach((x) => x.remove());
  const W = hote.clientWidth || 800, H = hote.clientHeight || 500, off = o.style === 'officiel', id = hote.id;
  hote.classList.toggle('officiel', off);
  const proj = d3.geoMercator().fitExtent([[o.marges[3], o.marges[0]], [W - o.marges[1], H - o.marges[2]]], { type: 'MultiPoint', coordinates: o.cadre });
  const chemin = d3.geoPath(proj), P2 = (ll) => proj(ll);
  const routeD = chemin({ type: 'LineString', coordinates: [LIEUX.malo, LIEUX.pap] });
  const m = P2(LIEUX.malo), g = P2(LIEUX.pap), mil = P2(d3.geoInterpolate(LIEUX.malo, LIEUX.pap)(0.5));
  const opt = (k) => '<path class="c-option c-option--' + k + '" d="' + lisse(OPTIONS[k].map(P2)) + '"/>';
  const point = (ll) => { const p = P2(ll); return '<circle cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="2.4" fill="rgba(255,255,255,.55)"/>'; };
  const avis = (ll, txt, k) => { const p = P2(ll); return '<g class="c-avis" data-avis="' + k + '"><circle cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="4.5"/><circle cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="9" fill="none" stroke="#FF7A3D" stroke-opacity=".5"/>' + texte([p[0] + 12, p[1] + 3], txt, '') + '</g>'; };
  const zone = (ll, r, c, k) => { const p = P2(ll); return '<circle class="c-zone" data-zone="' + k + '" cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="' + r + '" fill="' + c + '" fill-opacity=".3" stroke="' + c + '" stroke-opacity=".95" stroke-width="2" stroke-dasharray="5 4"/>'; };
  const port = (p) => off
    ? '<circle class="c-anneau" cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="11"/>'
    : '<g class="c-port"><circle class="c-halo" cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="7"/><circle class="c-point" cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="5"/></g>';
  const mer = off
    ? '<linearGradient id="' + id + '-mer" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1E4876"/><stop offset="1" stop-color="#3A7FB6"/></linearGradient>'
    : '<radialGradient id="' + id + '-mer" cx="55%" cy="45%" r="75%"><stop offset="0" stop-color="#16355D"/><stop offset="1" stop-color="#0A1228"/></radialGradient>';
   
  let medaillon = '';
  if (o.medaillon) {
    const R = Math.round(Math.max(58, Math.min(96, H * 0.15))), cx = g[0] + R * 0.25, cy = Math.max(R + 16, g[1] - R - 74);
    const pg = d3.geoMercator().fitExtent([[cx - R * 0.74, cy - R * 0.66], [cx + R * 0.74, cy + R * 0.66]], GWADA);
    medaillon = '<line x1="' + f1(g[0]) + '" y1="' + f1(g[1] - 11) + '" x2="' + f1(cx - R * 0.25) + '" y2="' + f1(cy + R * 0.97) + '" stroke="#6EC3EC" stroke-width="1.6"/>' +
      '<circle cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + R + '" fill="#62B8E8"/>' +
      '<path d="' + d3.geoPath(pg)(GWADA) + '" fill="#F4E75A"/>' +
      '<path d="' + lisse(APPROCHE.map(pg)) + '" fill="none" stroke="#F4E75A" stroke-width="1.8" stroke-dasharray="4 4"/>' +
      texte([cx, cy - R - 12], 'Pointe-à-Pitre', 'c-lieu c-lieu--port', 0, 0, 'middle');
  }
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'c-svg c-svg--atl');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', "Carte de l'Atlantique Nord : la route de Saint-Malo à Pointe-à-Pitre");
  svg.style.transformOrigin = f1(g[0]) + 'px ' + f1(g[1]) + 'px';
  svg.innerHTML = '<defs>' + mer + '<mask id="' + id + '-m" maskUnits="userSpaceOnUse"><path class="c-masque" d="' + routeD + '" fill="none" stroke="#fff" stroke-width="10"/></mask></defs>' +
    '<rect width="' + W + '" height="' + H + '" fill="url(#' + id + '-mer)"/>' +
    (off ? '' : '<path class="c-grille" d="' + chemin(d3.geoGraticule().step([10, 10]).extent([[-100, -10], [30, 70]])()) + '"/>') +
    (o.zones ? zone(LIEUX.acores, Math.max(40, W * 0.07), '#5DBFC0', 'acores') + zone([-55, 17.5], Math.max(46, W * 0.08), '#FF7A3D', 'grains') + zone([-6, 46.5], Math.max(38, W * 0.06), '#56BCF6', 'golfe') : '') +
    '<path class="c-terre" d="' + chemin(T) + '"/>' +
    (off ? '<path class="c-france" d="' + chemin(FRANCE) + '"/>' : '') +
    (o.mers ? texte(P2([-33, 21]), 'Océan Atlantique', 'c-lieu c-lieu--mer', 0, 0, 'middle') : '') +
    (o.reperes ? [['acores', 'Açores', 10, 4], ['madere', 'Madère', 9, 4], ['canaries', 'Canaries', 9, 10], ['capvert', 'Cap-Vert', 9, 4], ['bermudes', 'Bermudes', 9, 4], ['finisterre', 'Finisterre', 9, 10]].map((r) => point(LIEUX[r[0]]) + texte(P2(LIEUX[r[0]]), r[1], 'c-lieu', r[2], r[3])).join('') : '') +
    (o.options ? opt('nord') + opt('mediane') + opt('sud') : '') +
    '<path class="c-route" d="' + routeD + '"/>' +
    '<path class="c-fait" d="' + routeD + '" mask="url(#' + id + '-m)"/>' +
    (o.avis ? avis([-5.9, 48.75], 'DST Ouessant', 'dst') + avis([-9.9, 43.2], 'DST Finisterre', 'dst') + avis([-56.5, 15.2], 'Sargasses', 'sargasses') : '') +
    (o.distance ? (off ? texte([mil[0] + 30, mil[1] + 40], '3 542 MN', 'c-distance') + texte([mil[0] + 30, mil[1] + 60], '≈ 6 560 km', 'c-distance-km') : texte([mil[0] - 26, mil[1] - 34], '3 542 MN', 'c-distance', 0, 0, 'end') + texte([mil[0] - 26, mil[1] - 14], '≈ 6 560 km', 'c-distance-km', 0, 0, 'end')) : '') +
    medaillon + port(m) + port(g) +
    texte(m, 'Saint-Malo', 'c-lieu c-lieu--port', -14, -16, 'end') +
    (o.medaillon ? texte(g, 'Guadeloupe', 'c-lieu c-lieu--port', 18, 6) : texte(g, 'Pointe-à-Pitre', 'c-lieu c-lieu--port', 14, 22)) +
    '<circle class="c-bateau" r="6.5" fill="#FCDD00" stroke="#0A1228" stroke-width="2" cx="' + f1(m[0]) + '" cy="' + f1(m[1]) + '"/>';
  hote.prepend(svg);
   
  if (o.flotte && BATEAUX.ultim) {
    const f = document.createElement('div');
    f.className = 'c-flotte'; f.setAttribute('aria-hidden', 'true');
    f.innerHTML = [['ultim', 15], ['o50', 19], ['imoca', 23], ['c40', 27]].map(([k, d], i) =>
      '<div class="c-voilier c-voilier--' + k + '" style="offset-path:path(\'' + routeD + '\');animation-duration:' + d + 's;animation-delay:' + (2.4 + i * 1.6).toFixed(1) + 's">' + BATEAUX[k] + '</div>').join('');
    hote.appendChild(f);
  }
  let ultim = null;
  if (o.ultim && BATEAUX.ultim) { ultim = document.createElement('div'); ultim.className = 'c-ultim'; ultim.innerHTML = BATEAUX.ultim; hote.appendChild(ultim); }
  const masque = svg.querySelector('.c-masque'), L = masque.getTotalLength(), bateau = svg.querySelector('.c-bateau');
  masque.style.strokeDasharray = L + ' ' + L;
  const poser = (f) => {
    masque.style.strokeDashoffset = String(L * (1 - f));
    const p = masque.getPointAtLength(L * f);
    bateau.setAttribute('cx', f1(p.x)); bateau.setAttribute('cy', f1(p.y));
    if (ultim) ultim.style.transform = 'translate(' + f1(p.x - 20.4) + 'px,' + f1(p.y - 31.6) + 'px)';
  };
  poser(o.depart || 0);
  return { svg, poser };
}
 
function dessinerZoom(hote, style) {
  hote.querySelectorAll('.c-zoom').forEach((x) => x.remove());
  const W = hote.clientWidth || 800, H = hote.clientHeight || 500, off = style === 'officiel', id = hote.id + '-z';
  const tel = innerWidth <= 750;
  const pg = d3.geoMercator().fitExtent([[tel ? 18 : 40, tel ? 30 : 64], [W - (tel ? 18 : 40), H - (tel ? 22 : 50)]], { type: 'MultiPoint', coordinates: [[-61.95, 15.84], [-60.98, 16.56]] });
  const Pz = (ll) => pg(ll), fin = Pz(LIEUX.pap);
  const mer = off ? '<rect width="' + W + '" height="' + H + '" fill="#62B8E8"/>' : '<rect width="' + W + '" height="' + H + '" fill="url(#' + hote.id + '-mer)"/>';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'c-svg c-zoom');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = '<defs><mask id="' + id + '-m" maskUnits="userSpaceOnUse"><path class="z-masque" pathLength="100" d="' + lisse(APPROCHE.map(Pz)) + '"/></mask>' +
    '<pattern id="' + id + '-dm" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#fff"/><rect width="3" height="3" fill="#0E111D"/><rect x="3" y="3" width="3" height="3" fill="#0E111D"/></pattern></defs>' +
    mer + '<path class="z-ile" d="' + d3.geoPath(pg)(GWADA) + '"/>' +
    '<path class="z-approche" d="' + lisse(APPROCHE.map(Pz)) + '" mask="url(#' + id + '-m)"/>' +
    texte(Pz([-61.69, 16.13]), 'Basse-Terre', 'z-lieu z-lieu--ile', 0, 0, 'middle') + texte(Pz([-61.38, 16.33]), 'Grande-Terre', 'z-lieu z-lieu--ile', 0, 0, 'middle') +
    texte(Pz([-61.27, 15.94]), 'Marie-Galante', 'z-lieu z-lieu--ile', 0, 0, 'middle') +
    (() => { const d = Pz([-61.965, 16.13]); return '<text class="z-lieu z-lieu--mer" text-anchor="middle" transform="translate(' + f1(d[0]) + ' ' + f1(d[1]) + ') rotate(-90)">Dévent de la Soufrière</text>'; })() + texte(Pz([-61.76, 15.815]), 'Canal des Saintes', 'z-lieu z-lieu--mer', 0, 0, 'middle') +
    '<path d="M' + f1(fin[0]) + ' ' + f1(fin[1]) + 'v-22" stroke="#fff" stroke-width="2"/><rect x="' + f1(fin[0]) + '" y="' + f1(fin[1] - 22) + '" width="18" height="12" fill="url(#' + id + '-dm)" stroke="#0E111D" stroke-width=".6"/>' +
    texte(fin, 'Pointe-à-Pitre', 'z-lieu--arrivee', 24, -12) + texte(fin, "Ligne d'arrivée", 'z-lieu', 24, 4) +
    texte([tel ? 16 : 24, tel ? 20 : 30], 'Le tour de la Guadeloupe', 'z-titre');
  hote.appendChild(svg);
}

 
const cartes = {};
let styleCarte = null, cur = 0, anim = 0;
async function monterA() {
  const style = document.body.dataset.v === 'a3' ? 'officiel' : 'nuit';
  if (style === styleCarte) return;
  styleCarte = style;
  const tel = innerWidth <= 750;
  await document.fonts.ready;
  const col = Math.max(...[...document.querySelectorAll('.a-haut-txt .trame>*')].map((x) => x.getBoundingClientRect().right));
  document.getElementById('haut').style.setProperty('--col', Math.round(col) + 'px');
  const h = document.getElementById('carte-haut');
  cartes.haut = await dessiner(h, { style, cadre: [[-68, 12], [4, 52]], marges: tel ? [36, 20, 78, 20] : [56, 56, style === 'officiel' ? 110 : 150, Math.round(col + (style === 'officiel' ? 150 : 60))], reperes: !tel && style === 'nuit', mers: !tel, distance: true, flotte: true, medaillon: style === 'officiel' && !tel });
  if (!reduit) { const t0 = performance.now(); const tic = (t) => { const k = Math.min(1, (t - t0) / 2600); cartes.haut.poser(1 - Math.pow(1 - k, 3)); if (k < 1) requestAnimationFrame(tic); }; requestAnimationFrame(tic); } else cartes.haut.poser(1);
  const c = document.getElementById('carte-meteo');
  cartes.meteo = await dessiner(c, { style, cadre: [[-68, 11], [2, 51]], marges: tel ? [28, 16, 40, 16] : [30, 30, 50, 30], reperes: style === 'nuit', options: true, zones: true, avis: true, ultim: true });
  dessinerZoom(c, style);
  aller(cur, true);
}
const POS = [0, 0.05, 0.28, 0.55, 0.82, 1];
function aller(i, net) {
  const traversee = document.getElementById('traversee');
  traversee.dataset.etape = String(i);
  traversee.classList.toggle('zoom', i === 5);
  if (!cartes.meteo) { cur = i; return; }
  const svg = cartes.meteo.svg;
  svg.querySelectorAll('.c-option').forEach((x) => { x.style.opacity = i === 2 ? '1' : (i === 3 ? '.35' : '0'); });
  svg.querySelectorAll('[data-zone]').forEach((z) => { const k = z.dataset.zone; z.style.opacity = ((k === 'golfe' && i === 1) || (k === 'acores' && (i === 2 || i === 3)) || (k === 'grains' && i === 4)) ? '1' : '0'; });
  svg.querySelectorAll('[data-avis]').forEach((a) => { a.style.opacity = ((a.dataset.avis === 'dst' && i === 1) || (a.dataset.avis === 'sargasses' && i === 4)) ? '1' : '0'; });
  const de = POS[cur] || 0, vers = POS[i] || 0; cur = i; cancelAnimationFrame(anim);
  if (reduit || net) { cartes.meteo.poser(vers); return; }
  const t0 = performance.now();
  const tic = (t) => { const k = Math.min(1, (t - t0) / 900); cartes.meteo.poser(de + (vers - de) * (1 - Math.pow(1 - k, 3))); if (k < 1) anim = requestAnimationFrame(tic); };
  anim = requestAnimationFrame(tic);
}
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  document.querySelectorAll('.etape').forEach((x) => x.classList.toggle('est-la', x === e.target));
  aller(+e.target.dataset.i);
}), { rootMargin: '-45% 0px -45% 0px' });
document.querySelectorAll('.etape').forEach((x) => io.observe(x));




document.body.dataset.v = 'a1'; document.body.dataset.d = 'a'; monterA().catch((e) => console.error('[rdr-parcours] carte', e));

 
let largeur = innerWidth, attente = 0;
addEventListener('resize', () => { clearTimeout(attente); attente = setTimeout(() => { if (Math.abs(innerWidth - largeur) < 40) return; largeur = innerWidth; styleCarte = null; if (document.body.dataset.d === 'a') monterA(); }, 300); });
 
addEventListener('scroll', () => {
  const f = document.getElementById('photo-vents'); const r = f.getBoundingClientRect();
  if (r.bottom < 0 || r.top > innerHeight || reduit) return;
  f.style.setProperty('--pv', ((r.top + r.height / 2 - innerHeight / 2) * -0.08).toFixed(1) + 'px');
}, { passive: true });
  }

  function valide(D) { return !!(D && D.p && Array.isArray(D.p.obstacles) && D.p.obstacles.length && Array.isArray(D.p.bulletins) && D.p.bulletins.length && Array.isArray(D.etapes) && D.etapes.length && Array.isArray(D.suites) && D.medias && D.medias.photos); }

  class RdrParcours extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() { clearTimeout(this._minuteur); this._minuteur = null; if (this._obs) this._obs.disconnect(); }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || (document.documentElement.getAttribute('lang') || '') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      

      poserStyle();
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!valide(D)) {
        if (!this.firstChild) this.innerHTML = "<div class=\"rpa-attente\" aria-hidden=\"true\"><div class=\"rpa-sq-haut\"><div class=\"rpa-sq-trame\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-t rpa-sq-t2\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div></div><div class=\"rpa-sq-trame rpa-sq-sec\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div><div class=\"rpa-sq-trame rpa-sq-cartes\"><i class=\"rpa-sq-c\"></i><i class=\"rpa-sq-c\"></i><i class=\"rpa-sq-c\"></i></div><div class=\"rpa-sq-trame rpa-sq-sec\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div></div>";
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      const en = (D.lang || this._lang()) === 'en';
      this.innerHTML = '<div class="rpa-page">' + PAGE_HTML + '</div>';
      const page = this.firstElementChild;
      if (en) {
        traduire(this); prefixerLiens(this);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (m.type === 'characterData') { traduireTexte(m.target); return; }
          m.addedNodes.forEach((n) => { traduire(n); prefixerLiens(n); });
        }));
        this._obs.observe(this, { childList: true, subtree: true, characterData: true });
      }
      try { demarrer(D, this, page); } catch (e) { console.error('[rdr-parcours]', e); }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang();
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (valide(j)) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rpa-vide"><h3>' + (en ? 'This page will be back in a moment' : 'Le parcours revient dans un instant') + '</h3><p>' + (en ? 'The page content could not be loaded.' : 'Le contenu de la page n’a pas pu être chargé.') + '</p><button type="button">' + (en ? 'Try again' : 'Réessayer') + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = "<div class=\"rpa-attente\" aria-hidden=\"true\"><div class=\"rpa-sq-haut\"><div class=\"rpa-sq-trame\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-t rpa-sq-t2\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div></div><div class=\"rpa-sq-trame rpa-sq-sec\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div><div class=\"rpa-sq-trame rpa-sq-cartes\"><i class=\"rpa-sq-c\"></i><i class=\"rpa-sq-c\"></i><i class=\"rpa-sq-c\"></i></div><div class=\"rpa-sq-trame rpa-sq-sec\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div></div>"; this._chercher(); });
    }
  }
  customElements.define("rdr-parcours", RdrParcours);
})();
})();
