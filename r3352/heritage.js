/* rdr-elements heritage | source route-du-rhum 9ca83c5 | rdr-heritage.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["heritage"]="9ca83c5";performance.mark("rdr-elements:heritage")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-heritage")) return;
  const TAG = "rdr-heritage";
  const STYLE_ID = "rdr-heritage-css";
  const CSS = "rdr-heritage{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-heritage [id]{scroll-margin-top:calc(var(--colle,56px) + 16px)}\nrdr-heritage .rhe-attente{display:block;min-height:clamp(560px,calc(100svh - 175px),1100px);background:#C1E1D9}\nrdr-heritage .rhe-sq-haut{display:flex;align-items:center;min-height:clamp(300px,calc(58svh - 60px),450px);background:#20515E}\nrdr-heritage .rhe-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-heritage .rhe-sq-l,rdr-heritage .rhe-sq-c{position:relative;display:block;overflow:hidden}\nrdr-heritage .rhe-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-heritage .rhe-sq-k{width:120px;height:11px}\nrdr-heritage .rhe-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-heritage .rhe-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-heritage .rhe-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-heritage .rhe-sq-p1{margin-top:30px}\nrdr-heritage .rhe-sq-p3{width:min(380px,62%)}\nrdr-heritage .rhe-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-heritage .rhe-sq-sec .rhe-sq-l{background:rgba(14,17,29,.08)}\nrdr-heritage .rhe-sq-sec .rhe-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-heritage .rhe-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-heritage .rhe-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.07)}\nrdr-heritage .rhe-sq-l::after,rdr-heritage .rhe-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rhe-sq-luire 1.6s ease-in-out infinite}\nrdr-heritage .rhe-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-heritage .rhe-sq-sec .rhe-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-heritage .rhe-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rhe-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-heritage .rhe-sq-cartes{grid-template-columns:1fr}rdr-heritage .rhe-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-heritage .rhe-sq-l::after,rdr-heritage .rhe-sq-c::after{animation:none;display:none}}\nrdr-heritage .rhe-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#20515E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-heritage .rhe-vide h3{margin:0;font-size:22px}\nrdr-heritage .rhe-vide p{margin:0;color:rgba(255,255,255,.75)}\nrdr-heritage .rhe-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}\n@font-face{font-family:'VarienOutline';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic%20Outline.woff2') format('woff2');font-style:italic;font-display:swap}\nrdr-heritage{--eau3:#C1E1D9;--eau1:#5DBFC0;--vert3:#2A646D;--vert4:#20515E;--orange:#F5BE41;--blanc:#fff;\n  --encre:#20515E;--encre2:#2A646D;--encre3:rgba(32,81,94,.72);--filet:rgba(32,81,94,.16);\n  --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;\n  --largeur:1240px;--marge:clamp(18px,4vw,40px);\n  --entete:175px;--colle:56px;\n  --ease:cubic-bezier(.22,.8,.3,1);\n  \n  --air:1.5;\n  \n  --deborde:clamp(80px,12vh,120px);}\n@media (max-width:750px){\nrdr-heritage{--air:1.3;--entete:120px;--colle:60px}\n}\nrdr-heritage *{box-sizing:border-box}\nrdr-heritage{margin:0;background:var(--blanc);color:var(--encre);font:15px/1.6 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-heritage img{display:block;max-width:100%}\nrdr-heritage a{color:inherit}\nrdr-heritage h1,rdr-heritage h2,rdr-heritage h3,rdr-heritage p,rdr-heritage figure,rdr-heritage blockquote{margin:0}\nrdr-heritage button{font:inherit;color:inherit}\nrdr-heritage .trame{position:relative;max-width:var(--largeur);margin:0 auto;padding:0 var(--marge)}\nrdr-heritage .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.95;margin:0}\nrdr-heritage .kicker{display:inline-flex;align-items:center;gap:10px;font-weight:800;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--vert3)}\nrdr-heritage .kicker::before{content:'';width:26px;height:3px;border-radius:2px;background:var(--orange)}\nrdr-heritage .trait{display:block;width:54px;height:6px;border-radius:3px;background:var(--orange);transform:skewX(-20deg)}\nrdr-heritage .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-heritage .houle{position:relative;display:block;width:100%;height:calc(clamp(46px,6vw,86px) + 2px);margin-top:calc(-1 * clamp(46px,6vw,86px));margin-bottom:-4px;z-index:3}\nrdr-heritage .arcs{position:absolute;pointer-events:none;aspect-ratio:1.645;background:var(--eau1);-webkit-mask:var(--arcs) no-repeat center / 100% 100%;mask:var(--arcs) no-repeat center / 100% 100%}\nrdr-heritage .tete{position:relative;display:flex;align-items:flex-end;min-height:clamp(300px,calc(58svh - 60px),450px);padding:40px 0 calc(clamp(46px,6vw,86px) + clamp(20px,3vh,36px));overflow:hidden;background:var(--vert4)}\nrdr-heritage .tete-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 45%}\nrdr-heritage .tete::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(32,81,94,.9) 0%,rgba(42,100,109,.62) 34%,rgba(42,100,109,0) 66%);pointer-events:none}\nrdr-heritage .tete .trame{position:relative;z-index:2;width:100%}\nrdr-heritage .tete h1{font-size:clamp(56px,7.6vw,110px);color:#fff;text-shadow:0 6px 30px rgba(14,40,46,.35)}\nrdr-heritage .tete .trait{margin-bottom:16px}\nrdr-heritage .frise{position:relative;padding:calc(clamp(4px,1.5vh,14px) * var(--air)) 0 calc(var(--deborde) + (clamp(120px,17vh,160px) - var(--deborde)) * var(--air));background:var(--eau3)}\nrdr-heritage .frise-nav{position:relative;z-index:2;display:flex;justify-content:center;gap:16px;margin-top:18px}\nrdr-heritage .frise-nav button{display:grid;place-items:center;width:50px;height:50px;border-radius:3px 10px 3px 10px;border:1.5px solid var(--vert4);background:transparent;color:var(--vert4);cursor:pointer;transition:background .25s,color .25s,transform .2s var(--ease)}\nrdr-heritage .frise-nav button:hover:not(:disabled){background:var(--vert4);color:var(--orange)}\nrdr-heritage .frise-nav button:active:not(:disabled){transform:scale(.94)}\nrdr-heritage .frise-nav button:disabled{opacity:.28;cursor:default}\nrdr-heritage .frise-nav .ico{width:20px;height:20px}\nrdr-heritage .piste{--ph:clamp(250px,34vh,320px);--pad:max(var(--marge),calc((100% - var(--largeur)) / 2 + var(--marge)));position:relative;display:flex;align-items:flex-end;gap:6px;height:var(--ph);padding:0 var(--pad) 4px;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x proximity;scroll-padding-inline:var(--pad);scrollbar-width:none;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:pan-x pan-y}\nrdr-heritage .piste.deborde{-webkit-mask:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%);mask:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)}\nrdr-heritage .piste::-webkit-scrollbar{display:none}\nrdr-heritage .piste.tire{cursor:grabbing;scroll-snap-type:none}\nrdr-heritage .an{position:relative;flex:0 0 90px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:12px;padding:0 0 6px;border:0;background:none;cursor:pointer;scroll-snap-align:center;-webkit-tap-highlight-color:transparent}\nrdr-heritage .an:focus-visible{outline:2px solid var(--vert4);outline-offset:-2px;border-radius:10px}\nrdr-heritage .an::before{content:'';position:absolute;left:-3px;right:-3px;bottom:51px;height:2px;background:repeating-linear-gradient(90deg,rgba(32,81,94,.35) 0 6px,transparent 6px 12px)}\nrdr-heritage .an:first-child::before{left:50%}\nrdr-heritage .an:last-child::before{right:50%}\nrdr-heritage .rhe-page[data-ordre=\"chrono\"] .an.passe::before{background:var(--orange)}\nrdr-heritage .rhe-page[data-ordre=\"chrono\"] .an[aria-pressed=\"true\"]::before{background:linear-gradient(90deg,var(--orange) 0 50%,transparent 50%),repeating-linear-gradient(90deg,transparent 0 50%,rgba(32,81,94,.35) 50% calc(50% + 6px),transparent calc(50% + 6px) calc(50% + 12px))}\nrdr-heritage .an-annee{writing-mode:vertical-rl;transform:rotate(180deg);font-family:var(--titre);font-style:italic;font-size:calc((var(--ph) - 78px) / 2.75 * .5);line-height:1;padding:.14em .05em;letter-spacing:.02em;color:var(--vert3);transition:font-size .4s var(--ease),color .3s}\nrdr-heritage .an:hover .an-annee{color:var(--vert4)}\nrdr-heritage .an.pres .an-annee{font-size:calc((var(--ph) - 78px) / 2.75 * .62)}\nrdr-heritage .an[aria-pressed=\"true\"] .an-annee{font-size:min(76px,calc((var(--ph) - 96px) / 2.9));color:var(--vert4)}\nrdr-heritage .an-point{position:relative;z-index:1;width:9px;height:9px;border-radius:50%;background:var(--vert3);box-shadow:0 0 0 3px var(--eau3);transition:background .3s,transform .3s var(--ease)}\nrdr-heritage .an[aria-pressed=\"true\"] .an-point{background:var(--orange);transform:scale(1.5)}\nrdr-heritage .an[aria-pressed=\"true\"] .an-point::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:2px solid var(--orange);opacity:.7;animation:rhe-pouls 2.4s ease-out infinite}\n@keyframes rhe-pouls{from{transform:scale(.6);opacity:.9}to{transform:scale(2.2);opacity:0}}\nrdr-heritage .an-num{height:28px;font-size:10px;font-weight:800;line-height:1.35;letter-spacing:.12em;text-transform:uppercase;text-align:center;color:var(--vert3);transition:color .3s}\nrdr-heritage .an[aria-pressed=\"true\"] .an-num{color:var(--vert4)}\nrdr-heritage .edition{position:relative;display:flow-root;--ed-haut:calc(clamp(34px,5vh,52px) * var(--air));padding:var(--ed-haut) 0 calc(clamp(56px,9vh,96px) * var(--air));background:var(--blanc)}\nrdr-heritage .fiche{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.02fr);gap:clamp(24px,4.4vw,64px);align-items:start;transition:opacity .25s}\nrdr-heritage .fiche.change{opacity:.35}\nrdr-heritage .fiche-photo{position:relative;z-index:2;margin-top:calc(-1 * (var(--ed-haut) + var(--deborde)));aspect-ratio:3/2;border-radius:24px 6px 24px 6px;overflow:hidden;background:var(--eau3);box-shadow:0 34px 60px -30px rgba(20,60,68,.55);border:6px solid #fff;transform:rotate(-1.2deg)}\nrdr-heritage .fiche-photo img{width:100%;height:100%;object-fit:cover}\nrdr-heritage .fiche-photo::before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(0deg,rgba(20,60,68,.62) 0%,rgba(20,60,68,0) 38%);pointer-events:none}\nrdr-heritage .fiche-an{position:absolute;z-index:2;right:22px;top:10px;font-family:'VarienOutline',var(--titre);font-style:italic;font-size:clamp(56px,6vw,88px);line-height:1;color:#fff;opacity:.92}\nrdr-heritage .fiche-photo figcaption{position:absolute;z-index:2;left:18px;bottom:14px;font-size:10.5px;color:rgba(255,255,255,.9)}\nrdr-heritage .fiche-corps{padding-top:clamp(4px,1vh,12px)}\nrdr-heritage .fiche-corps h2{margin-top:12px;font-size:clamp(30px,3.4vw,50px);color:var(--vert4);text-wrap:balance}\nrdr-heritage .fiche-chiffres{display:flex;gap:clamp(22px,3vw,40px);margin-top:clamp(16px,2.4vh,24px);padding-bottom:clamp(14px,2vh,20px);border-bottom:1px dashed var(--filet)}\nrdr-heritage .fc b{display:block;padding-right:.1em;font-family:var(--titre);font-style:italic;font-weight:400;font-size:clamp(40px,4.2vw,60px);line-height:1;color:var(--vert3)}\nrdr-heritage .fc>span{display:block;margin-top:6px;font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--encre3)}\nrdr-heritage .odo{display:inline-flex;align-items:flex-start}\nrdr-heritage .odo-c{display:inline-block;height:1em;margin-right:-.05em;clip-path:inset(0 -40% 0 -40%)}\nrdr-heritage .odo-r{display:block;will-change:transform}\nrdr-heritage .odo-r i{display:block;height:1em;line-height:1em;font-style:inherit;text-align:center}\nrdr-heritage .vainqueur{position:relative;margin-top:clamp(14px,2.2vh,22px);padding:18px 22px 18px 26px;border-radius:18px 5px 18px 5px;background:var(--vert4);color:#fff;box-shadow:0 22px 40px -28px rgba(20,60,68,.7);overflow:hidden}\nrdr-heritage .vainqueur::before{content:'';position:absolute;left:0;top:0;bottom:0;width:5px;background:var(--cc,var(--eau1))}\nrdr-heritage .vq-lib{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--orange)}\nrdr-heritage .vq-nom{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 10px;margin-top:6px}\nrdr-heritage .vq-nom span{font-size:clamp(18px,1.6vw,22px);font-weight:600;color:rgba(255,255,255,.86)}\nrdr-heritage .vq-nom b{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(28px,2.8vw,40px);line-height:1;color:#fff}\nrdr-heritage .vq-ligne{display:flex;flex-wrap:wrap;align-items:center;gap:8px 22px;margin-top:10px}\nrdr-heritage .vq-bateau{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.82)}\nrdr-heritage .vq-temps{display:inline-flex;align-items:center;gap:8px;font-family:var(--titre);font-style:italic;font-size:clamp(22px,2vw,28px);line-height:1;color:var(--orange)}\nrdr-heritage .vq-temps .ico,rdr-heritage .vq-bateau .ico{width:17px;height:17px;color:var(--eau1)}\nrdr-heritage .recit{display:grid;grid-template-columns:minmax(0,680px) minmax(0,1fr);gap:clamp(28px,5vw,80px);margin-top:calc(clamp(40px,7vh,72px) * var(--air));padding-top:clamp(26px,4vh,40px);border-top:2px solid var(--vert4)}\nrdr-heritage .recit-texte p{margin:0 0 1.05em;font-size:16px;line-height:1.78;color:var(--encre2)}\nrdr-heritage .recit-texte>.recit-vu>p:first-child{font-size:clamp(17px,1.4vw,19px);line-height:1.66;font-weight:500;color:var(--vert4)}\nrdr-heritage .recit-texte h3{margin:1.5em 0 .6em;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(22px,2vw,28px);line-height:1;color:var(--vert4)}\nrdr-heritage .recit-texte h3::before{content:'';display:block;width:44px;height:5px;margin-bottom:12px;border-radius:3px;background:var(--orange);transform:skewX(-20deg)}\nrdr-heritage .recit-suite{display:none}\nrdr-heritage .recit.ouvert .recit-suite{display:block}\nrdr-heritage .recit.plie .recit-vu>:last-child{-webkit-mask:linear-gradient(180deg,#000 30%,transparent 100%);mask:linear-gradient(180deg,#000 30%,transparent 100%)}\nrdr-heritage .lire{display:inline-flex;align-items:center;gap:10px;min-height:44px;margin-top:4px;padding:0 6px 0 0;border:0;background:none;color:var(--vert4);font:800 12px var(--police);letter-spacing:.14em;text-transform:uppercase;cursor:pointer}\nrdr-heritage .lire i{display:grid;place-items:center;width:34px;height:34px;border-radius:3px 10px 3px 10px;background:var(--vert4);color:var(--orange);font-style:normal;transition:transform .3s var(--ease)}\nrdr-heritage .lire .ico{width:16px;height:16px}\nrdr-heritage .recit.ouvert .lire i{transform:rotate(180deg)}\nrdr-heritage .recit-cote{display:flex;flex-direction:column;gap:22px}\nrdr-heritage .bref{position:relative;overflow:hidden;isolation:isolate;padding:22px 24px;border-radius:18px 5px 18px 5px;background:rgba(193,225,217,.45);border:1px solid var(--filet)}\nrdr-heritage .bref::before{content:'';position:absolute;inset:0;z-index:-1;background:var(--vert4);-webkit-mask:var(--topo) repeat center / 700px auto;mask:var(--topo) repeat center / 700px auto;opacity:.09;pointer-events:none}\nrdr-heritage .bref p{font-size:14px;line-height:1.7;color:var(--vert4);font-weight:500}\nrdr-heritage .exergue{position:sticky;top:calc(var(--colle) + 28px)}\nrdr-heritage .exergue-pastille{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:var(--orange);color:var(--vert4);transform:rotate(-4deg);box-shadow:0 10px 22px -10px rgba(245,190,65,.9)}\nrdr-heritage .exergue-pastille .ico{width:22px;height:22px;fill:currentColor;stroke:none}\nrdr-heritage .exergue blockquote{margin-top:16px;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(21px,1.9vw,27px);line-height:1.08;color:var(--vert4);text-wrap:balance}\nrdr-heritage .exergue figcaption{margin-top:12px;font-size:12.5px;line-height:1.5;color:var(--encre3)}\nrdr-heritage .voisines{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:calc(clamp(36px,6vh,56px) * var(--air))}\nrdr-heritage .voisine{display:flex;align-items:center;gap:14px;padding:16px 18px;border:1.5px solid var(--filet);border-radius:3px 15px 3px 15px;background:#fff;color:var(--vert4);cursor:pointer;text-align:left;transition:background .2s,border-color .2s,transform .25s var(--ease)}\nrdr-heritage .voisine:hover{background:rgba(193,225,217,.35);border-color:var(--vert4);transform:translateY(-2px)}\nrdr-heritage .voisine--suiv{flex-direction:row-reverse;text-align:right;grid-column:2}\nrdr-heritage .voisine i{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:3px 10px 3px 10px;background:var(--vert4);color:var(--orange);font-style:normal}\nrdr-heritage .voisine .ico{width:18px;height:18px}\nrdr-heritage .voisine b{display:block;font-family:var(--titre);font-style:italic;font-weight:400;font-size:26px;line-height:1}\nrdr-heritage .voisine span{display:block;margin-top:4px;font-size:12.5px;font-weight:600;color:var(--encre2)}\nrdr-heritage .vainqueurs{position:relative;padding:calc(clamp(56px,8vh,90px) * var(--air)) 0 calc(clamp(64px,10vh,110px) * var(--air));background:var(--eau3);overflow:hidden}\nrdr-heritage .vainqueurs .arcs{left:-2%;top:0;width:min(600px,54vw);opacity:.8;transform:scaleY(-1)}\nrdr-heritage .sec-tete{position:relative;display:flex;align-items:flex-end;justify-content:space-between;gap:20px}\nrdr-heritage .sec-tete h2{margin-top:14px;font-size:clamp(30px,3.4vw,48px);color:var(--vert4)}\nrdr-heritage .pal-grille{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:calc(28px * var(--air))}\nrdr-heritage .pal{position:relative;display:flex;flex-direction:column;padding:22px 22px 20px;border-radius:22px 6px 22px 6px;background:#fff;box-shadow:0 1px 0 rgba(20,60,68,.05),0 18px 34px -26px rgba(20,60,68,.5);overflow:hidden;isolation:isolate;transition:transform .35s var(--ease),box-shadow .3s}\nrdr-heritage .pal:hover{transform:translateY(-3px);box-shadow:0 1px 0 rgba(20,60,68,.05),0 26px 44px -26px rgba(20,60,68,.6)}\nrdr-heritage .pal::after{content:'';position:absolute;left:0;right:0;bottom:0;height:4px;background:var(--cc)}\nrdr-heritage .pal-icone{position:absolute;right:16px;top:14px;height:62px;width:auto;filter:drop-shadow(0 4px 6px rgba(20,60,68,.22))}\nrdr-heritage .pal-classe{padding-right:60px;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--vert4)}\nrdr-heritage .pal-lib{margin-top:3px;padding-right:60px;font-size:12px;color:var(--encre3)}\nrdr-heritage .pal-scratch{align-self:flex-start;display:inline-flex;align-items:center;margin-top:10px;padding:4px 10px;border-radius:7px 2px 7px 2px;background:var(--orange);color:var(--vert4);font:800 9px var(--police);letter-spacing:.14em;text-transform:uppercase;transform:skewX(-6deg)}\nrdr-heritage .pal-prenom{margin-top:16px;font-size:14px;font-weight:600;color:var(--encre2)}\nrdr-heritage .pal-nom{margin-top:2px;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(24px,2.1vw,30px);line-height:1;color:var(--vert4);overflow-wrap:anywhere}\nrdr-heritage .pal-bateau{margin-top:8px;font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--vert3)}\nrdr-heritage .pal-temps{display:flex;align-items:center;gap:8px;margin-top:14px;font-family:var(--titre);font-style:italic;font-size:22px;line-height:1;color:var(--vert3)}\nrdr-heritage .pal-temps .ico{width:17px;height:17px;color:var(--eau1)}\nrdr-heritage .pal-podium{list-style:none;margin:14px 0 0;padding:12px 0 0;border-top:1px dashed var(--filet);font-size:12.5px;line-height:1.45;color:var(--encre2)}\nrdr-heritage .pal-podium li+li{margin-top:6px}\nrdr-heritage .pal-podium b{display:inline-grid;place-items:center;width:20px;height:20px;margin-right:8px;border-radius:6px;background:var(--eau3);font-size:11px;color:var(--vert4)}\nrdr-heritage .pal-podium small{color:var(--encre3)}\n@media (max-height:820px) and (min-width:751px){\nrdr-heritage .tete{min-height:clamp(280px,calc(56svh - 60px),380px);padding-top:28px}\nrdr-heritage .tete h1{font-size:clamp(52px,6.6vw,88px)}\nrdr-heritage .piste{--ph:clamp(232px,34vh,262px)}\nrdr-heritage{--deborde:clamp(76px,11vh,96px)}\nrdr-heritage .frise{padding-bottom:calc(var(--deborde) + (clamp(110px,16vh,130px) - var(--deborde)) * var(--air))}\nrdr-heritage .fiche-corps h2{font-size:clamp(28px,3vw,42px)}\n}\n@media (max-width:1100px){\nrdr-heritage .pal-grille{grid-template-columns:repeat(2,minmax(0,1fr))}\n}\n@media (max-width:900px){\nrdr-heritage .fiche{grid-template-columns:minmax(0,1fr);align-items:start}\nrdr-heritage .fiche-corps{padding-top:0}\nrdr-heritage .recit{grid-template-columns:minmax(0,1fr)}\nrdr-heritage .recit-cote{display:contents}\nrdr-heritage .bref{order:-1}\nrdr-heritage .exergue{order:1}\nrdr-heritage .exergue{position:static}\n}\n@media (max-width:750px){\nrdr-heritage{font-size:14px}\nrdr-heritage .tete{min-height:clamp(240px,40svh,300px);padding-top:28px}\nrdr-heritage .tete::after{background:linear-gradient(0deg,rgba(32,81,94,.85) 0%,rgba(42,100,109,.25) 60%,rgba(42,100,109,0) 100%)}\nrdr-heritage .tete h1{font-size:clamp(46px,14vw,64px)}\nrdr-heritage .frise-nav button{width:44px;height:44px}\nrdr-heritage .piste{--ph:246px}\nrdr-heritage .an{flex-basis:80px}\nrdr-heritage{--deborde:72px}\nrdr-heritage .fiche-corps{padding-top:0}\nrdr-heritage .fiche-photo{transform:none;border-width:4px}\nrdr-heritage .fiche-an{right:16px;font-size:54px}\nrdr-heritage .vainqueur{padding:16px 18px 16px 22px}\nrdr-heritage .recit-texte p{font-size:15px;line-height:1.75}\nrdr-heritage .voisines{grid-template-columns:1fr}\nrdr-heritage .voisine--suiv{grid-column:auto}\nrdr-heritage .vainqueurs .arcs{width:78vw;opacity:.5}\nrdr-heritage .sec-tete{flex-direction:column;align-items:flex-start}\nrdr-heritage .pal-grille{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;margin:calc(22px * var(--air)) calc(-1 * var(--marge)) 0;padding:4px var(--marge) 12px;scroll-padding-inline:var(--marge);scrollbar-width:none}\nrdr-heritage .pal-grille::-webkit-scrollbar{display:none}\nrdr-heritage .pal{flex:0 0 80%;scroll-snap-align:start}\nrdr-heritage .pal:hover{transform:none}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-heritage *,rdr-heritage *::before,rdr-heritage *::after{animation:none!important;transition:none!important}\n}";
  const ENVELOPPE_HTML = "<div class=\"rhe-page\" data-ordre=\"chrono\">";
  const GABARIT = "<header class=\"tete\" id=\"haut\">\n  <img class=\"tete-photo\" id=\"tete-photo\" alt=\"\" fetchpriority=\"high\" decoding=\"async\">\n  <div class=\"trame\"><span class=\"trait\" aria-hidden=\"true\"></span><h1 class=\"titre\">Héritage</h1></div>\n</header>\n<svg class=\"houle\" viewBox=\"0 0 1440 86\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n  <path d=\"M0 40 C 180 10, 360 70, 540 44 S 900 8, 1080 40 S 1320 70, 1440 36 L1440 86 L0 86 Z\" fill=\"#C1E1D9\"/>\n  <path d=\"M0 52 C 200 26, 380 80, 560 56 S 920 20, 1100 52 S 1330 78, 1440 50\" fill=\"none\" stroke=\"rgba(32,81,94,.22)\" stroke-width=\"2\" stroke-dasharray=\"2 10\"/>\n</svg>\n<section class=\"frise\" id=\"editions\" aria-label=\"Les éditions\">\n  <div class=\"piste\" id=\"piste\" role=\"group\" aria-label=\"Choisir une édition\"></div>\n  <div class=\"frise-nav\">\n    <button type=\"button\" id=\"prec\" aria-label=\"Édition plus ancienne\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevronLeft\"></svg></button>\n    <button type=\"button\" id=\"suiv\" aria-label=\"Édition plus récente\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevronRight\"></svg></button>\n  </div>\n</section>\n<section class=\"edition\" id=\"edition\" aria-labelledby=\"t-edition\">\n  <div class=\"trame\">\n    <div class=\"fiche\" id=\"fiche\">\n      <figure class=\"fiche-photo\"><img id=\"fiche-img\" alt=\"\" decoding=\"async\"><span class=\"fiche-an\" id=\"fiche-an\" aria-hidden=\"true\"></span><figcaption id=\"fiche-credit\"></figcaption></figure>\n      <div class=\"fiche-corps\">\n        <span class=\"kicker\" id=\"fiche-num\"></span>\n        <h2 class=\"titre\" id=\"t-edition\"></h2>\n        <div class=\"fiche-chiffres\">\n          <div class=\"fc\"><b id=\"fc-depart\"></b><span>Au départ</span></div>\n          <div class=\"fc\"><b id=\"fc-arrivee\"></b><span>À l'arrivée</span></div>\n        </div>\n        <div class=\"vainqueur\" id=\"vainqueur\"></div>\n      </div>\n    </div>\n    <div class=\"recit plie\" id=\"recit\">\n      <div class=\"recit-texte\">\n        <div class=\"recit-vu\" id=\"recit-vu\"></div>\n        <div class=\"recit-suite\" id=\"recit-suite\"></div>\n        <button type=\"button\" class=\"lire\" id=\"lire\" aria-expanded=\"false\" aria-controls=\"recit-suite\"><i><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevronDown\"></svg></i><span>Lire la suite</span></button>\n      </div>\n      <aside class=\"recit-cote\" id=\"recit-cote\"></aside>\n    </div>\n    <nav class=\"voisines\" id=\"voisines\" aria-label=\"Éditions voisines\"></nav>\n  </div>\n</section>\n<section class=\"vainqueurs\" id=\"vainqueurs\" aria-labelledby=\"t-vainqueurs\">\n  <span class=\"arcs\" aria-hidden=\"true\"></span>\n  <div class=\"trame\">\n    <div class=\"sec-tete\"><div><span class=\"trait\" aria-hidden=\"true\"></span><h2 class=\"titre\" id=\"t-vainqueurs\">Vainqueurs par classe</h2></div></div>\n    <div class=\"pal-grille\" id=\"pal-grille\"></div>\n  </div>\n</section>";
  const SOURCE = "https://www.routedurhum.com/_functions/heritage";
  const ATTENTE = "rhe-attente";
  const SQUELETTE = "<div class=\"rhe-attente\" aria-hidden=\"true\"><div class=\"rhe-sq-haut\"><div class=\"rhe-sq-trame\"><i class=\"rhe-sq-l rhe-sq-k\"></i><i class=\"rhe-sq-l rhe-sq-t\"></i><i class=\"rhe-sq-l rhe-sq-t rhe-sq-t2\"></i><i class=\"rhe-sq-l rhe-sq-p rhe-sq-p1\"></i><i class=\"rhe-sq-l rhe-sq-p\"></i><i class=\"rhe-sq-l rhe-sq-p rhe-sq-p3\"></i></div></div><div class=\"rhe-sq-trame rhe-sq-sec\"><i class=\"rhe-sq-l rhe-sq-k\"></i><i class=\"rhe-sq-l rhe-sq-t\"></i><i class=\"rhe-sq-l rhe-sq-p rhe-sq-p1\"></i><i class=\"rhe-sq-l rhe-sq-p\"></i><i class=\"rhe-sq-l rhe-sq-p rhe-sq-p3\"></i></div><div class=\"rhe-sq-trame rhe-sq-cartes\"><i class=\"rhe-sq-c\"></i><i class=\"rhe-sq-c\"></i><i class=\"rhe-sq-c\"></i></div><div class=\"rhe-sq-trame rhe-sq-sec\"><i class=\"rhe-sq-l rhe-sq-k\"></i><i class=\"rhe-sq-l rhe-sq-t\"></i><i class=\"rhe-sq-l rhe-sq-p rhe-sq-p1\"></i><i class=\"rhe-sq-l rhe-sq-p\"></i><i class=\"rhe-sq-l rhe-sq-p rhe-sq-p3\"></i></div></div>";
  const VIDE = "rhe-vide";
  const PANNE = {"fr":["Les éditions reviennent dans un instant","Les éditions n’ont pas pu être chargées.","Réessayer"],"en":["The editions will be back in a moment","The editions could not be loaded.","Try again"]};
  const valide = (D) => !!(D && D.cms && Array.isArray(D.cms.editions) && D.cms.editions.length && Array.isArray(D.cms.resultats) && D.cms.classes && D.page && D.page.medias);

   
  function demarrer(racine, D) {
    const RACINE = racine, ENVELOPPE = racine.firstElementChild, LANGUE_DATES = D.lang === 'en' ? 'en-GB' : 'fr-FR';

const ICO = {
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  sailboat: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>'
};
const pic = (n) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (ICO[n] || '') + '</svg>';

    const CMS = D.cms, PAGE = D.page;

RACINE.querySelectorAll('svg[data-i]').forEach((s) => { s.innerHTML = ICO[s.dataset.i] || ''; s.setAttribute('aria-hidden', 'true'); });


 
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
 
const typo = (s) => esc(s).replace(/(\d) (\d{3})(?!\d)/g, '$1\u00a0$2');
const DPR = Math.min(2, window.devicePixelRatio || 1);
const palier = (px) => Math.max(160, Math.round(Math.min(px * DPR, 1800) / 80) * 80);
const wix = (id, l, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + Math.round(l) + ',h_' + Math.round(h) + ',al_c,q_' + (q || 78) + ',enc_auto/x.jpg';
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
const params = new URLSearchParams(location.search);
if (params.get('entete') === 'non') ENVELOPPE.classList.add('sans-entete');
ENVELOPPE.style.setProperty('--topo', 'url("' + PAGE.medias.topo + '")');
ENVELOPPE.style.setProperty('--arcs', 'url("' + PAGE.medias.arcs + '")');
const EDITIONS = CMS.editions;
const RES = CMS.resultats;
const couleurClasse = (n) => { const c = (CMS.classes[n] || {}).couleur; return c ? (c[0] === '#' ? c : '#' + c) : 'var(--eau1)'; };
const tempsValide = (t) => /\d/.test(t || '') && /(j|h|min|jour|heure)/i.test(t || '');
const coupeNom = (n) => { const p = String(n || '').trim().split(/\s+/); return [p[0] || '', p.slice(1).join(' ')]; };

 
(() => {
  const m = PAGE.medias.hero, L = Math.min(m.l, palier(document.documentElement.clientWidth || 1440));
  $('tete-photo').src = wix(m.id, L, L * 0.45, 74);
})();





function phrases(t) {
  const bornes = []; let prof = 0, debut = 0, droit = false;
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '"') droit = !droit;
    else if (ch === '«' || ch === '“') prof++;
    else if ((ch === '»' || ch === '”') && prof > 0) prof--;
    if (prof === 0 && !droit && '.!?…'.includes(ch)) {
      let j = i + 1;
      while (j < t.length && t[j] === ')') j++;
      if (j < t.length && /\s/.test(t[j])) {
        let k = j; while (k < t.length && /\s/.test(t[k])) k++;
        if (k < t.length && /[A-ZÀ-ÖØ-Þ«“0-9]/.test(t[k])) { bornes.push([debut, j]); debut = k; i = k - 1; }
      }
    }
  }
  if (debut < t.length) bornes.push([debut, t.length]);
  return bornes;
}
function paragraphes(t) {
  const b = phrases(t), out = []; let d = null, f = null;
  for (const [a, z] of b) {
    if (d === null) d = a;
    f = z;
    if (f - d >= 330) { out.push(t.slice(d, f)); d = null; }
  }
  if (d !== null) {
    const reste = t.slice(d, f);
    if (out.length && reste.length < 150) out[out.length - 1] = t.slice(t.indexOf(out[out.length - 1]), f);
    else out.push(reste);
  }
  return out.map((s) => s.trim()).filter(Boolean);
}
function blocs(ed) {
  const t = ed.description || '';
  const titres = (ed.intertitres || []).map((x) => ({ x, i: t.indexOf(x) })).filter((o) => o.i >= 0).sort((a, b) => a.i - b.i);
  const out = []; let pos = 0;
  for (const o of titres) {
    paragraphes(t.slice(pos, o.i).trim()).forEach((p) => out.push({ p }));
    out.push({ h: o.x });
    pos = o.i + o.x.length;
  }
  paragraphes(t.slice(pos).trim()).forEach((p) => out.push({ p }));
  return out;
}

 
function odo(el, n) {
  const txt = String(n == null ? '' : n);
  el.setAttribute('aria-label', txt);
  el.innerHTML = '<span class="odo" aria-hidden="true">' + [...txt].map((c) => /\d/.test(c)
    ? '<span class="odo-c" data-d="' + c + '"><span class="odo-r">' + Array.from({ length: 30 }, (_, k) => '<i>' + (k % 10) + '</i>').join('') + '</span></span>'
    : '<span>' + esc(c) + '</span>').join('') + '</span>';
  const cols = [...el.querySelectorAll('.odo-c')];
  cols.forEach((c) => { c.firstChild.style.transform = 'translateY(-' + (10 + +c.dataset.d) + 'em)'; });
  if (reduit) return;
  void el.offsetWidth;
  cols.forEach((c, k) => {
    const r = c.firstChild;
    r.style.transition = 'transform ' + (1.1 + k * 0.2).toFixed(2) + 's cubic-bezier(.15,.7,.2,1) ' + (k * 0.05).toFixed(2) + 's';
    r.style.transform = 'translateY(-' + (20 + +c.dataset.d) + 'em)';
  });
}

 
const piste = $('piste');
let courante = EDITIONS[EDITIONS.length - 1].annee;
 
const liste = () => EDITIONS.slice();
function dessinerFrise() {
  piste.innerHTML = liste().map((e) => {
    const n = String(e.numeroLabel || '').replace(/\s*[ée]dition\s*/i, '');
    return '<button type="button" class="an" data-annee="' + e.annee + '" aria-pressed="false" aria-label="Édition ' + e.annee + ', ' + esc(e.numeroLabel) + '">' +
      '<span class="an-annee">' + e.annee + '</span><span class="an-point"></span><span class="an-num">' + esc(n) + '<br>édition</span></button>';
  }).join('');
  marquer(false);
}
function marquer(anime) {
  const items = [...piste.children];
  const i = items.findIndex((b) => +b.dataset.annee === courante);
  items.forEach((b, k) => {
    b.setAttribute('aria-pressed', String(k === i));
    b.classList.toggle('pres', Math.abs(k - i) === 1);
    b.classList.toggle('passe', k < i);
  });
  $('prec').disabled = i <= 0; $('suiv').disabled = i >= items.length - 1;
  piste.classList.toggle('deborde', piste.scrollWidth > piste.clientWidth + 2);
  const cible = items[i];
  if (cible) {
    const x = cible.offsetLeft + cible.offsetWidth / 2 - piste.clientWidth / 2;
    piste.scrollTo({ left: x, behavior: anime && !reduit ? 'smooth' : 'auto' });
  }
}
function choisir(annee) {
  if (!EDITIONS.some((e) => e.annee === annee)) return;
  const change = annee !== courante;
  courante = annee;
  marquer(true);
  if (change) dessinerEdition(true);
  try { history.replaceState(history.state, '', '#edition-' + annee); } catch (e) {   }
}
piste.addEventListener('click', (e) => {
  const b = e.target.closest('.an');
  if (!b || Date.now() < piste._clicBloque) return;
  choisir(+b.dataset.annee);
});
piste.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  e.preventDefault();
  const items = [...piste.children], i = items.findIndex((b) => +b.dataset.annee === courante);
  const j = Math.max(0, Math.min(items.length - 1, i + (e.key === 'ArrowRight' ? 1 : -1)));
  choisir(+items[j].dataset.annee); items[j].focus({ preventScroll: true });
});
$('prec').addEventListener('click', () => { const it = [...piste.children], i = it.findIndex((b) => +b.dataset.annee === courante); if (i > 0) choisir(+it[i - 1].dataset.annee); });
$('suiv').addEventListener('click', () => { const it = [...piste.children], i = it.findIndex((b) => +b.dataset.annee === courante); if (i < it.length - 1) choisir(+it[i + 1].dataset.annee); });
 
(() => {
  let actif = false, x0 = 0, s0 = 0, bouge = false;
  piste.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse' || e.button !== 0) return; actif = true; bouge = false; x0 = e.clientX; s0 = piste.scrollLeft; });
  window.addEventListener('pointermove', (e) => { if (!actif) return; const d = e.clientX - x0; if (Math.abs(d) > 4) { bouge = true; piste.classList.add('tire'); } if (bouge) piste.scrollLeft = s0 - d; });
  window.addEventListener('pointerup', () => { if (!actif) return; actif = false; piste.classList.remove('tire'); if (bouge) piste._clicBloque = Date.now() + 150; });
})();

 
function dessinerEdition(anime) {
  const e = EDITIONS.find((x) => x.annee === courante);
  const fiche = $('fiche');
  if (anime && !reduit) { fiche.classList.add('change'); setTimeout(() => fiche.classList.remove('change'), 180); }
   
  const img = $('fiche-img');
  if (e.image) { const L = Math.min(e.image.l, palier(img.clientWidth || 600)); img.src = wix(e.image.id, L, Math.round(L * 2 / 3), 80); }
  img.alt = 'Route du Rhum ' + e.annee;
  $('fiche-an').textContent = e.annee;
  $('fiche-credit').textContent = e.creditPhoto && e.creditPhoto !== '©' ? e.creditPhoto : '';
  $('fiche-num').textContent = e.numeroLabel;
  $('t-edition').textContent = e.titre;
  odo($('fc-depart'), e.nbDepart); odo($('fc-arrivee'), e.nbArrivee);
  const rs = RES.filter((r) => r.annee === e.annee);
  const rScratch = rs.find((r) => r.position === 1 && r.skipper === e.vainqueurScratch) || rs.find((r) => r.position === 1);
  const classeScratch = rScratch ? rScratch.classe : '';
  const [prenom, nom] = coupeNom(e.vainqueurScratch);
  $('vainqueur').style.setProperty('--cc', couleurClasse(classeScratch));
  $('vainqueur').innerHTML = '<div class="vq-lib">Vainqueur au scratch' + (classeScratch ? ' · ' + esc(classeScratch) : '') + '</div>' +
    '<div class="vq-nom"><span>' + esc(prenom) + '</span><b>' + esc(nom) + '</b></div>' +
    '<div class="vq-ligne">' + (e.bateauVainqueur ? '<span class="vq-bateau">' + pic('sailboat') + esc(e.bateauVainqueur) + '</span>' : '') +
    (e.tempsVainqueur ? '<span class="vq-temps">' + pic('timer') + esc(e.tempsVainqueur) + '</span>' : '') + '</div>';
   
  const B = blocs(e);
  const total = (e.description || '').length;
  const html = B.map((b) => (b.h ? '<h3>' + esc(b.h) + '</h3>' : '<p>' + typo(b.p) + '</p>'));
  let coupe = B.length;
  if (total > 1300) {
    let n = 0, p = 0;
    for (let k = 0; k < B.length; k++) { if (B[k].p) { n += B[k].p.length; p++; } if (n >= 700 && p >= 2) { coupe = k + 1; break; } }
    if (coupe >= B.length - 1) coupe = B.length;
  }
  $('recit-vu').innerHTML = html.slice(0, coupe).join('');
  $('recit-suite').innerHTML = html.slice(coupe).join('');
  const plie = coupe < B.length;
  const recit = $('recit');
  recit.classList.toggle('plie', plie); recit.classList.remove('ouvert');
  $('lire').hidden = !plie; $('lire').setAttribute('aria-expanded', 'false'); $('lire').lastElementChild.textContent = 'Lire la suite';
  const ex = e.exergue;
  $('recit-cote').innerHTML = (e.resume ? '<div class="bref"><p>' + typo(e.resume) + '</p></div>' : '') +
    (ex ? '<figure class="exergue"><span class="exergue-pastille">' + pic('quote') + '</span><blockquote>' + typo(ex.t) + '</blockquote>' +
      (ex.a ? '<figcaption>' + esc(ex.a) + '</figcaption>' : '') + '</figure>' : '');
   
  const i = EDITIONS.indexOf(e), av = EDITIONS[i - 1], ap = EDITIONS[i + 1];
  const vois = (x, sens) => '<button type="button" class="voisine voisine--' + sens + '" data-annee="' + x.annee + '"><i>' + pic(sens === 'prec' ? 'chevronLeft' : 'chevronRight') + '</i><span><b>' + x.annee + '</b><span>' + esc(x.titre) + '</span></span></button>';
  $('voisines').innerHTML = (av ? vois(av, 'prec') : '') + (ap ? vois(ap, 'suiv') : '');
   
  $('pal-grille').innerHTML = cartesClasses(rs, e.vainqueurScratch);
}



function cartesClasses(rs, scratch) {
  const groupes = new Map();
  rs.slice().sort((a, b) => a.position - b.position).forEach((r) => { if (!groupes.has(r.classe)) groupes.set(r.classe, []); groupes.get(r.classe).push(r); });
  const rang = (n) => { const k = PAGE.ordreClasses.indexOf(n); return k < 0 ? 99 : k; };
  const noms = [...groupes.keys()].sort((a, b) => rang(a) - rang(b));
  return noms.map((n) => {
    const g = groupes.get(n), t = g[0], [p, f] = coupeNom(t.skipper);
    const ic = (CMS.classes[n] || {}).icone;
    const lib = t.position === 1 ? 'Vainqueur ' + n : t.position + 'e';
    return '<article class="pal" style="--cc:' + couleurClasse(n) + '">' +
      (ic ? '<img class="pal-icone" src="' + ic + '" alt="" width="62" height="100" loading="lazy" decoding="async">' : '') +
      '<h3 class="pal-classe">' + esc(n) + '</h3><div class="pal-lib">' + esc(lib) + '</div>' +
      (t.position === 1 && t.skipper === scratch ? '<span class="pal-scratch">Vainqueur au scratch</span>' : '') +
      '<div class="pal-prenom">' + esc(p) + '</div><div class="pal-nom">' + esc(f) + '</div>' +
      (t.bateau ? '<div class="pal-bateau">' + esc(t.bateau) + '</div>' : '') +
      (tempsValide(t.temps) ? '<div class="pal-temps">' + pic('timer') + esc(t.temps) + '</div>' : '') +
      (g.length > 1 ? '<ol class="pal-podium">' + g.slice(1).map((r) => '<li><b>' + r.position + '</b>' + esc(r.skipper) + (r.bateau ? ' <small>· ' + esc(r.bateau) + '</small>' : '') + '</li>').join('') + '</ol>' : '') +
      '</article>';
  }).join('');
}
$('lire').addEventListener('click', () => {
  const r = $('recit'), o = !r.classList.contains('ouvert');
  r.classList.toggle('ouvert', o); r.classList.toggle('plie', !o);
  $('lire').setAttribute('aria-expanded', String(o)); $('lire').lastElementChild.textContent = o ? 'Replier' : 'Lire la suite';
  if (!o) r.scrollIntoView({ block: 'start', behavior: reduit ? 'auto' : 'smooth' });
});
$('voisines').addEventListener('click', (e) => {
  const b = e.target.closest('.voisine'); if (!b) return;
  choisir(+b.dataset.annee);
  $('editions').scrollIntoView({ block: 'start', behavior: reduit ? 'auto' : 'smooth' });
});

 
dessinerFrise();
(() => {
  const m = location.hash.match(/^#edition-(\d{4})$/);
  const an = m && EDITIONS.some((e) => e.annee === +m[1]) ? +m[1] : courante;
  courante = an; marquer(false); dessinerEdition(false);
  if (m) requestAnimationFrame(() => $('editions').scrollIntoView({ block: 'start' }));
})();
window.addEventListener('resize', () => marquer(false));

  }

  function poserStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  


  function ordinal(n) {
    const v = Number(n), c = v % 100, d = v % 10;
    return v + (c >= 11 && c <= 13 ? 'th' : d === 1 ? 'st' : d === 2 ? 'nd' : d === 3 ? 'rd' : 'th');
  }
  function traducteur(textes) {
    const table = (textes && textes.interface) || {};
    const brut = (textes && textes.motifs) || {};
    const motifs = Object.keys(brut).map((cle) => {
      const noms = [];
      const source = cle.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\{(\w+)\}/g, (tout, nom) => { noms.push(nom); return nom === 'x' ? '(.+)' : nom === 'an' ? '(\\d{4})' : '(\\d+)'; });
      return { re: new RegExp('^' + source + '$'), noms, modele: String(brut[cle]) };
    });
    return function (t) {
      const k = String(t == null ? '' : t).trim();
      if (!k) return null;
      if (Object.prototype.hasOwnProperty.call(table, k)) return t.replace(k, table[k]);
      for (const m of motifs) {
        const r = k.match(m.re);
        if (!r) continue;
        const v = {};
        m.noms.forEach((nom, i) => { v[nom] = r[i + 1]; });
        return t.replace(k, m.modele.replace(/\{(\w+)(\.ordinal)?\}/g, (tout, nom, ord) => (v[nom] == null ? tout : ord ? ordinal(v[nom]) : v[nom])));
      }
      return null;
    };
  }
  const ATTRIBUTS = ['placeholder', 'aria-label', 'title', 'alt'];
  function traduireNoeud(n, tr) { const v = tr(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; }
  function traduireAttribut(el, a, tr) {
    if (!el || !el.hasAttribute || !el.hasAttribute(a)) return;
    const v = tr(el.getAttribute(a));
    if (v != null && v !== el.getAttribute(a)) el.setAttribute(a, v);
  }
  function traduire(racine, tr) {
    if (racine.nodeType === 3) { traduireNoeud(racine, tr); return; }
    if (racine.nodeType !== 1) return;
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach((n) => traduireNoeud(n, tr));
    [racine, ...racine.querySelectorAll('[placeholder],[aria-label],[title],[alt]')].forEach((el) => ATTRIBUTS.forEach((a) => traduireAttribut(el, a, tr)));
  }
  

  function prefixerLiens(racine) {
    if (racine.nodeType !== 1) return;
    const liens = (racine.matches && racine.matches('a[href^="/"]') ? [racine] : []).concat([...racine.querySelectorAll('a[href^="/"]')]);
    liens.forEach((a) => {
      const h = a.getAttribute('href');
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('//') || h.startsWith('/_')) return;
      a.setAttribute('href', '/en' + h);
    });
  }

  class Module extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() { clearTimeout(this._minuteur); this._minuteur = null; if (this._obs) this._obs.disconnect(); }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || document.documentElement.getAttribute('lang') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    

    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      


      poserStyle();
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!valide(D)) {
        if (!this.firstChild) this.innerHTML = SQUELETTE;
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      const en = String(D.lang || this._lang()).slice(0, 2) === 'en';
      D.lang = en ? 'en' : 'fr';
      this.innerHTML = ENVELOPPE_HTML + GABARIT + '</div>';
      const tr = en ? traducteur(D.textes) : null;
      if (en) { traduire(this, tr); prefixerLiens(this); }
      try { demarrer(this, D); } catch (e) { console.error('[' + TAG + ']', e); }
      if (en) {
        traduire(this, tr); prefixerLiens(this);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (m.type === 'characterData') { traduireNoeud(m.target, tr); return; }
          if (m.type === 'attributes') { traduireAttribut(m.target, m.attributeName, tr); return; }
          m.addedNodes.forEach((n) => { traduire(n, tr); prefixerLiens(n); });
        }));
        this._obs.observe(this, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRIBUTS });
      }
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
      const t = PANNE[this._lang()];
      this.innerHTML = '<div class="' + VIDE + '"><h3>' + t[0] + '</h3><p>' + t[1] + '</p><button type="button">' + t[2] + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = SQUELETTE; this._chercher(); });
    }
  }
  customElements.define(TAG, Module);
})();
})();
