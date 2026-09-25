/* rdr-elements la-course | source route-du-rhum 05212f4 | rdr-course.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["la-course"]="05212f4";performance.mark("rdr-elements:la-course")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-course")) return;
  const CSS = "rdr-course{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-course .rco-attente{display:block;min-height:clamp(560px,calc(100svh - 175px),900px);background:#fff}\nrdr-course .rco-sq-haut{display:flex;align-items:center;min-height:clamp(380px,calc(100svh - 275px),560px);background:#20515E}\nrdr-course .rco-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-course .rco-sq-l,rdr-course .rco-sq-c{position:relative;display:block;overflow:hidden}\nrdr-course .rco-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-course .rco-sq-k{width:120px;height:11px}\nrdr-course .rco-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-course .rco-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-course .rco-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-course .rco-sq-p1{margin-top:30px}\nrdr-course .rco-sq-p3{width:min(380px,62%)}\nrdr-course .rco-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-course .rco-sq-sec .rco-sq-l{background:rgba(14,17,29,.08)}\nrdr-course .rco-sq-sec .rco-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-course .rco-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-course .rco-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:#EEF1F6}\nrdr-course .rco-sq-l::after,rdr-course .rco-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rco-sq-luire 1.6s ease-in-out infinite}\nrdr-course .rco-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-course .rco-sq-sec .rco-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-course .rco-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rco-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-course .rco-sq-cartes{grid-template-columns:1fr}rdr-course .rco-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-course .rco-sq-l::after,rdr-course .rco-sq-c::after{animation:none;display:none}}\nrdr-course .rco-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#20515E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-course .rco-vide h3{margin:0;font-size:22px}\nrdr-course .rco-vide p{margin:0;color:rgba(255,255,255,.78)}\nrdr-course .rco-vide button{min-height:44px;padding:0 22px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-course .fil-svg{will-change:transform}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}\n@font-face{font-family:'VarienOutline';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic%20Outline.woff2') format('woff2');font-style:italic;font-display:swap}\nrdr-course{--vert1:#00676E;--blanc:#FFFFFF;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00;\n  \n  --eau3:#C1E1D9;--eau1:#5DBFC0;--vert3:#2A646D;--vert4:#20515E;--orange:#F5BE41;\n  --encre:#191D31;--encre2:rgba(25,29,49,.84);\n  --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;--contour:'VarienOutline','Varien',sans-serif;\n  --largeur:1240px;--marge:clamp(18px,4vw,40px);\n  --entete:175px;--colle:56px;\n  --coin:22px 6px 22px 6px;\n  --ease:cubic-bezier(.22,.8,.3,1);\n  \n  --air:1.5;\n  --pad-h:calc(clamp(48px,8vh,88px) * var(--air));--pad-b:calc(clamp(56px,9vh,100px) * var(--air));\n  \n  --debord:clamp(76px,8.6vw,116px);}\n@media (max-width:750px){\nrdr-course{--air:1.3;--entete:120px;--colle:60px;--pad-h:calc(44px * var(--air));--pad-b:calc(52px * var(--air));--debord:80px}\n}\nrdr-course *{box-sizing:border-box}\nrdr-course{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-course img{display:block;max-width:100%}\nrdr-course a{color:inherit}\nrdr-course h1,rdr-course h2,rdr-course h3,rdr-course p,rdr-course figure,rdr-course blockquote{margin:0}\nrdr-course button{font:inherit;color:inherit}\nrdr-course .trame{position:relative;z-index:2;max-width:var(--largeur);margin:0 auto;padding:0 var(--marge)}\nrdr-course .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.98;letter-spacing:.005em}\nrdr-course .leger{font-family:var(--police);font-style:normal;font-weight:400;text-transform:uppercase;line-height:1.1;letter-spacing:.01em}\nrdr-course .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-course section[id]{scroll-margin-top:calc(var(--colle) + 12px)}\nrdr-course{--angle:3px 15px 3px 15px;--angle-inv:15px 3px 15px 3px;--angle-p:3px 10px 3px 10px;--angle-p-inv:10px 3px 10px 3px;--carte:24px 4px 16px 4px}\nrdr-course .btn{display:inline-flex;align-items:center;justify-content:center;gap:16px;min-height:50px;padding:6px 6px 6px 22px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .2s,color .2s,border-color .2s,transform .2s}\nrdr-course .btn-f{display:grid;place-items:center;flex:none;width:36px;height:36px;border-radius:var(--angle-p);background:var(--orange);color:var(--vert4);transition:transform .3s var(--ease),background .2s}\nrdr-course .btn-f .ico{width:18px;height:18px}\nrdr-course .btn:hover .btn-f{transform:translateX(4px) rotate(-4deg)}\nrdr-course .btn:active{transform:translateY(1px)}\nrdr-course .btn:focus-visible{outline:3px solid var(--orange);outline-offset:3px}\nrdr-course .btn--encre{color:var(--vert4)}\nrdr-course .btn--encre:hover{background:var(--vert4);border-color:var(--vert4);color:#fff}\nrdr-course .haut-bord{position:relative}\nrdr-course .haut{position:relative;display:flex;align-items:flex-end;min-height:clamp(380px,calc(100svh - var(--entete) - 100px),560px);overflow:hidden;background:var(--vert4)}\nrdr-course .haut-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 58%}\nrdr-course .haut::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(0deg,rgba(25,29,49,.74) 0%,rgba(25,29,49,.3) 40%,rgba(25,29,49,0) 66%),linear-gradient(90deg,rgba(25,29,49,.34) 0%,rgba(25,29,49,0) 58%)}\nrdr-course .haut-txt{width:100%;padding-bottom:clamp(30px,5.6vh,60px)}\nrdr-course .haut h1{max-width:15ch;font-size:clamp(38px,5.2vw,74px);color:#fff;text-shadow:0 2px 24px rgba(25,29,49,.35)}\nrdr-course .haut h1 em{font-style:inherit;color:var(--jaune)}\nrdr-course .sommaire{display:flex;flex-wrap:wrap;gap:6px;margin:clamp(16px,2.8vh,28px) 0 0;padding:0;list-style:none}\nrdr-course .sommaire a{position:relative;isolation:isolate;overflow:hidden;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:6px 12px 6px 11px;border:1px solid rgba(255,255,255,.34);border-radius:var(--angle);background:rgba(25,29,49,.42);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#fff;font:700 13px/1.2 var(--police);text-decoration:none;white-space:nowrap;transition:color .25s,border-color .25s,transform .25s var(--ease)}\nrdr-course .sommaire a::before{content:'';position:absolute;z-index:-1;top:0;bottom:0;left:-14px;right:-14px;background:var(--jaune);transform:skewX(-16deg) scaleX(0);transform-origin:0 50%;transition:transform .38s var(--ease)}\nrdr-course .som-n{font:italic 400 19px/1 var(--contour);color:var(--jaune);letter-spacing:.02em;transition:color .25s}\nrdr-course .som-f{width:15px;height:15px;margin:0 -2px 0 -2px;opacity:.55;transition:transform .3s var(--ease),opacity .25s}\nrdr-course .sommaire a:hover,rdr-course .sommaire a:focus-visible{color:var(--marine);border-color:var(--jaune);transform:translateY(-2px)}\nrdr-course .sommaire a:hover::before,rdr-course .sommaire a:focus-visible::before{transform:skewX(-16deg) scaleX(1)}\nrdr-course .sommaire a:hover .som-n,rdr-course .sommaire a:focus-visible .som-n{font-family:var(--titre);color:var(--marine)}\nrdr-course .sommaire a:hover .som-f,rdr-course .sommaire a:focus-visible .som-f{opacity:1;transform:translateY(3px)}\nrdr-course .sommaire a:focus-visible{outline:2px solid #fff;outline-offset:3px}\nrdr-course .sommaire a:active{transform:translateY(0) scale(.97)}\nrdr-course .sommaire a[aria-current=\"true\"]{color:var(--vert1);border-color:#fff}\nrdr-course .sommaire a[aria-current=\"true\"]::before{background:#fff;transform:skewX(-16deg) scaleX(1)}\nrdr-course .sommaire a[aria-current=\"true\"] .som-n{font-family:var(--titre);color:var(--vert1)}\nrdr-course .fil{position:relative;isolation:isolate}\nrdr-course .fil-svg{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;pointer-events:none;overflow:visible}\nrdr-course .fil-trait{fill:none;stroke:var(--orange);stroke-width:2.6;stroke-dasharray:8 8;stroke-linecap:round}\nrdr-course .fil-depart{fill:var(--orange)}\nrdr-course .fil-svg mask{mask-type:alpha}\nrdr-course .fil-pointille{fill:none;stroke:#fff;stroke-width:2.6;stroke-dasharray:8 8;stroke-linecap:round}\nrdr-course .fil-plein{fill:none;stroke:var(--orange);stroke-width:6;stroke-linecap:butt}\nrdr-course .couture{position:absolute;left:50%;z-index:3;width:2px;height:64px;margin:-32px 0 0 -1px;background:repeating-linear-gradient(180deg,var(--orange) 0 7px,transparent 7px 14px);clip-path:inset(0 0 calc((1 - var(--trace, 1)) * 100%) 0)}\nrdr-course .fil--route .couture{display:none}\nrdr-course .fil-arme .vignette:not(.vue){opacity:0;transform:scale(.6)}\nrdr-course .mythique{position:relative;background:#fff;padding:calc(clamp(40px,6.4vh,72px) * var(--air)) 0 calc(clamp(64px,10vh,110px) * var(--air))}\nrdr-course .my-titre{display:flex;flex-wrap:wrap;align-items:baseline;gap:.05em .45em;color:var(--vert1)}\nrdr-course .my-titre .titre{font-size:clamp(32px,3.7vw,54px)}\nrdr-course .my-titre .leger{font-size:clamp(26px,2.9vw,42px)}\nrdr-course .my-grille{display:grid;grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr);gap:clamp(28px,5vw,72px);align-items:start;margin-top:calc(clamp(26px,4.4vh,44px) * var(--air))}\nrdr-course .my-photo{position:relative;aspect-ratio:15/16;border-radius:22px;overflow:hidden;background:var(--eau3);border:6px solid #fff;box-shadow:0 30px 56px -22px rgba(25,29,49,.42);transform:rotate(-1.2deg)}\nrdr-course .my-photo img{width:100%;height:100%;object-fit:cover;object-position:center 70%}\nrdr-course .record{position:relative;z-index:2;margin:-78px 12px 0 32px;padding:20px 24px 22px;border-radius:var(--coin);background:var(--vert1);color:#fff;box-shadow:0 26px 44px -24px rgba(0,103,110,.75);container-type:inline-size}\nrdr-course .record-tete{display:flex;align-items:center;gap:12px}\nrdr-course .record-tete .ico{width:30px;height:30px;color:var(--jaune);stroke-width:1.8}\nrdr-course .chrono{display:flex;align-items:baseline;gap:2px;font-family:var(--titre);font-style:italic;color:var(--jaune);white-space:nowrap;line-height:1}\nrdr-course .chrono>b{font-weight:400;font-size:min(clamp(34px,3.6vw,52px),calc((100cqi - 190px) / 5.2))}\nrdr-course .chrono>i{font-style:normal;font-family:var(--police);font-weight:800;font-size:12px;margin:0 8px 0 3px;color:#fff;letter-spacing:.04em}\nrdr-course .record p{margin-top:12px;font-weight:700;font-size:14.5px;line-height:1.55;color:#fff}\nrdr-course .my-txt p{font-size:16px;line-height:1.78;color:var(--encre2);max-width:64ch}\nrdr-course .my-txt p+p{margin-top:1.1em}\nrdr-course .odo{display:inline-flex;align-items:flex-start}\nrdr-course .odo-c{display:inline-block;height:1em;margin-right:-.04em;clip-path:inset(0 -40% 0 -40%)}\nrdr-course .odo-r{display:block}\nrdr-course .odo-r i{display:block;height:1em;line-height:1em;font-style:inherit;text-align:center;font-family:var(--titre);font-size:inherit;margin:0;color:inherit;letter-spacing:0;font-weight:400}\nrdr-course .histoire{position:relative;background:var(--eau3);color:var(--vert4);padding:var(--pad-h) 0 var(--pad-b)}\nrdr-course .histoire h2{text-align:center;font-size:clamp(34px,4vw,56px);color:var(--vert4)}\nrdr-course .hi-corps{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,620px) minmax(0,1fr);gap:clamp(20px,3.4vw,52px);margin-top:calc(clamp(26px,4.4vh,42px) * var(--air))}\nrdr-course .hi-txt p{font-size:16px;line-height:1.78;color:var(--vert4)}\nrdr-course .hi-txt p+p{margin-top:.85em}\nrdr-course .hi-lead{font-weight:700;font-size:clamp(16px,1.3vw,17.5px)!important;line-height:1.66!important}\nrdr-course .hi-txt .hi-lead+p{margin-top:1.4em}\nrdr-course .vignette{position:relative;width:min(100%,250px);aspect-ratio:1;border-radius:50%;overflow:hidden;background:var(--eau1);border:6px solid #fff;box-shadow:0 24px 44px -20px rgba(32,81,94,.55)}\nrdr-course .vignette img{width:100%;height:100%;object-fit:cover}\nrdr-course .vignette--g{justify-self:end;align-self:start;margin-top:clamp(10px,3vh,40px)}\nrdr-course .vignette--d{justify-self:start;align-self:end;margin-bottom:clamp(-20px,-1vh,0px)}\nrdr-course .editions{position:relative;background:#fff;color:var(--vert4);padding:var(--pad-h) 0 calc(clamp(36px,5vh,60px) * var(--air));--rang:clamp(84px,11.5vh,108px)}\nrdr-course .ed-grille{display:grid;grid-template-columns:minmax(0,1.38fr) minmax(0,.62fr);gap:clamp(24px,4vw,60px);align-items:start}\nrdr-course .ed-titre{color:var(--vert1)}\nrdr-course .ed-titre .titre{display:block;font-size:clamp(34px,4vw,56px)}\nrdr-course .ed-titre .leger{display:block;margin-top:.18em;font-size:clamp(20px,2.3vw,32px)}\nrdr-course .fm-contenu{margin-top:clamp(20px,3.4vh,34px)}\nrdr-course .fm-contenu.entre{animation:rco-fm-entre .5s var(--ease)}\n@keyframes rco-fm-entre{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}\nrdr-course .fm-annee{font:italic 400 clamp(58px,6vw,84px)/.9 var(--titre);color:var(--orange)}\nrdr-course .fm-titre{margin-top:10px;font:700 16px/1.3 var(--police);letter-spacing:.04em;text-transform:uppercase;color:var(--vert4)}\nrdr-course .fm-diapo{position:relative;margin-top:16px;aspect-ratio:16/9;max-height:min(46svh,430px);width:100%;border-radius:var(--coin);overflow:hidden;background:var(--eau3)}\nrdr-course .fm-diapo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .45s}\nrdr-course .fm-diapo img.est-la{opacity:1}\nrdr-course .fleche{position:absolute;top:50%;z-index:2;display:grid;place-items:center;width:44px;height:44px;margin-top:-22px;padding:0;border:1.5px solid rgba(255,255,255,.4);border-radius:var(--angle-p);background:rgba(32,81,94,.78);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);color:#fff;cursor:pointer;transition:background .2s,border-color .2s,color .2s,transform .25s var(--ease)}\nrdr-course .fleche--p{left:12px;border-radius:var(--angle-p-inv)}\nrdr-course .fleche--n{right:12px}\nrdr-course .fleche:hover{background:var(--fl-survol,var(--orange));border-color:var(--fl-survol,var(--orange));color:var(--fl-encre,var(--vert4))}\nrdr-course .fleche--p:hover{transform:translateX(-3px)}\nrdr-course .fleche--n:hover{transform:translateX(3px)}\nrdr-course .fleche:active{transform:scale(.94)}\nrdr-course .fleche:focus-visible{outline:2px solid #fff;outline-offset:2px}\nrdr-course .fleche .ico{width:18px;height:18px}\nrdr-course .points{position:absolute;z-index:2;left:0;right:0;bottom:12px;display:flex;justify-content:center;gap:6px;pointer-events:none}\nrdr-course .points i{width:9px;height:4px;border-radius:1px;background:rgba(255,255,255,.5);transform:skewX(-20deg);transition:width .25s,background .25s}\nrdr-course .points i.on{width:22px;background:#fff}\nrdr-course .fm-desc{margin-top:18px}\nrdr-course .fm-item{position:relative;padding-left:26px;font-size:16.5px;line-height:1.68;color:var(--vert4)}\nrdr-course .fm-item::before{content:'';position:absolute;left:0;top:.8em;width:14px;height:3px;border-radius:2px;background:var(--orange);transform:skewX(-20deg)}\nrdr-course .fm-item b{font-weight:700}\nrdr-course .fm-item+.fm-item{margin-top:16px;padding-top:16px;border-top:2px solid var(--orange)}\nrdr-course .fm-item+.fm-item::before{top:calc(16px + .8em)}\nrdr-course .fm-frise{position:relative;padding-top:clamp(84px,12vh,128px)}\nrdr-course .fm-ligne{position:absolute;left:50%;top:calc(-1 * var(--pad-h));bottom:calc(var(--rang) / 2);width:2px;margin-left:-1px;background:var(--orange)}\nrdr-course .fm-rang{position:relative;display:block;width:100%;height:var(--rang);padding:0;border:0;background:none;cursor:pointer}\nrdr-course .fm-point{position:absolute;left:50%;top:50%;z-index:2;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:2px 6px 2px 6px;border:2px solid var(--orange);background:#fff;transition:transform .25s var(--ease),background .25s,box-shadow .25s}\nrdr-course .fm-trait{position:absolute;top:50%;height:2px;width:clamp(22px,2.4vw,40px);margin-top:-1px;background:var(--orange)}\nrdr-course .fm-rang--g .fm-trait{right:50%}\nrdr-course .fm-rang--d .fm-trait{left:50%}\nrdr-course .fm-an{position:absolute;top:50%;transform:translateY(-50%);font:italic 400 clamp(30px,2.9vw,40px)/1 var(--contour);color:var(--orange);white-space:nowrap;transition:font-size .25s,color .25s}\nrdr-course .fm-rang--g .fm-an{right:calc(50% + clamp(22px,2.4vw,40px) + 10px)}\nrdr-course .fm-rang--d .fm-an{left:calc(50% + clamp(22px,2.4vw,40px) + 10px)}\nrdr-course .fm-rang[aria-selected=\"true\"] .fm-point{background:var(--orange);transform:scale(1.3);box-shadow:0 0 14px rgba(245,190,65,.7)}\nrdr-course .fm-rang[aria-selected=\"true\"] .fm-an{font-family:var(--titre);font-size:clamp(40px,3.8vw,54px)}\nrdr-course .fm-rang:not([aria-selected=\"true\"]):hover .fm-point{transform:scale(1.3)}\nrdr-course .fm-rang:not([aria-selected=\"true\"]):hover .fm-an{color:#E0A624}\nrdr-course .fm-rang:focus-visible{outline:2px solid var(--vert4);outline-offset:-2px;border-radius:var(--angle-p)}\nrdr-course .ed-pied{display:flex;justify-content:center;margin-top:calc(clamp(28px,4.6vh,46px) * var(--air))}\nrdr-course .origins{position:relative;z-index:1;isolation:isolate;padding:calc(clamp(40px,6vh,68px) * var(--air)) 0 12px;--ro-mord:clamp(60px,9.5vh,100px)}\nrdr-course .ro-fond{position:absolute;z-index:-1;left:0;right:0;top:0;bottom:calc(12px + var(--ro-mord));overflow:hidden;background:var(--vert2)}\nrdr-course .ro-motif{--mo-l:min(calc(45vw - 50px),620px);position:absolute;top:calc(var(--mo-l) * -.06);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:var(--mo-r,1);background:var(--motif) no-repeat 0 0/100% 100%;opacity:var(--mo-o,1);transform:scaleX(-1);pointer-events:none}\nrdr-course .origins h2{position:relative;display:flex;justify-content:center}\nrdr-course .ro-logo{width:clamp(180px,18vw,250px);height:auto;aspect-ratio:2673/1760}\nrdr-course .ro-rail{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,1.8vw,24px);margin:calc(clamp(20px,3.4vh,34px) * var(--air)) 0 0;padding:0;list-style:none}\nrdr-course .ro-carte{display:flex;justify-content:center}\nrdr-course .ro-cadre{position:relative;width:min(100%,calc(min(62svh,520px) * 9 / 16));aspect-ratio:9/16;border-radius:var(--carte);overflow:hidden;background:#2B2019;border:5px solid #fff;box-shadow:0 24px 44px -20px rgba(25,29,49,.6);transform:rotate(var(--r,0deg));transition:transform .35s var(--ease),box-shadow .35s}\nrdr-course .ro-carte:nth-child(odd) .ro-cadre{--r:-1.1deg}\nrdr-course .ro-carte:nth-child(even) .ro-cadre{--r:.9deg}\nrdr-course .ro-carte:hover .ro-cadre,rdr-course .ro-carte.joue .ro-cadre{transform:rotate(0) translateY(-4px);box-shadow:0 32px 54px -20px rgba(25,29,49,.7)}\nrdr-course .ro-cadre img,rdr-course .ro-cadre video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}\nrdr-course .ro-cadre video:fullscreen{object-fit:contain}\nrdr-course .ro-cadre video:-webkit-full-screen{object-fit:contain}\nrdr-course .ro-lire{position:absolute;inset:0;z-index:2;display:flex;align-items:flex-end;justify-content:flex-end;padding:clamp(10px,1.2vw,16px);border:0;background:linear-gradient(0deg,rgba(25,29,49,.45) 0%,rgba(25,29,49,0) 22%);cursor:pointer}\nrdr-course .ro-rond{display:grid;place-items:center;width:54px;height:54px;border-radius:var(--angle);background:var(--jaune);color:var(--marine);box-shadow:0 12px 26px -8px rgba(0,0,0,.6);transition:transform .3s var(--ease),background .2s}\nrdr-course .ro-rond .ico{width:20px;height:20px;margin-left:3px;fill:currentColor;stroke-width:1.5}\nrdr-course .ro-lire:hover .ro-rond{transform:rotate(-6deg) scale(1.08);background:#fff}\nrdr-course .ro-lire:active .ro-rond{transform:scale(.95)}\nrdr-course .ro-lire:focus-visible{outline:3px solid var(--jaune);outline-offset:-4px;border-radius:19px 2px 11px 2px}\nrdr-course .ro-carte.joue .ro-lire{display:none}\nrdr-course .ro-nav{display:none}\n@media (min-width:751px){\nrdr-course .origins.defile .ro-tete{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:end;column-gap:16px}\nrdr-course .origins.defile .ro-tete h2{grid-column:2}\nrdr-course .origins.defile .ro-nav{grid-column:3;justify-self:end;display:flex;gap:10px}\nrdr-course .origins.defile .ro-rail{--ro-gap:clamp(12px,1.8vw,24px);grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:calc((100% - 3 * var(--ro-gap)) / 4);gap:var(--ro-gap);overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;margin:calc(clamp(20px,3.4vh,34px) * var(--air) - 10px) calc(-1 * var(--marge)) -60px;padding:10px var(--marge) 60px;scroll-padding:0 var(--marge);-webkit-mask:linear-gradient(90deg,transparent 0,#000 var(--marge),#000 calc(100% - var(--marge)),transparent 100%);mask:linear-gradient(90deg,transparent 0,#000 var(--marge),#000 calc(100% - var(--marge)),transparent 100%)}\nrdr-course .origins.defile .ro-rail::-webkit-scrollbar{display:none}\nrdr-course .origins.defile .ro-carte{scroll-snap-align:start}\n}\nrdr-course .ro-prec{border-radius:var(--angle-p-inv)}\nrdr-course .ro-prec:hover:not(:disabled){transform:translateX(-3px)}\nrdr-course .ro-suiv:hover:not(:disabled){transform:translateX(3px)}\nrdr-course .ro-nav .te-fleche:disabled{opacity:.4;background:#fff;color:var(--vert1);cursor:default;transform:none}\nrdr-course .parcours{position:relative;background:#fff;padding:var(--pad-h) 0 var(--pad-b)}\nrdr-course .pa-grille{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(28px,4.6vw,68px);align-items:start}\nrdr-course .parcours h2{font-size:clamp(34px,4vw,56px);color:var(--vert1)}\nrdr-course .pa-etapes{margin-top:calc(clamp(18px,3vh,28px) * var(--air))}\nrdr-course .pa-etape{position:relative;padding:6px 0 6px 22px;font-size:16px;line-height:1.78;color:var(--encre2);outline:none;transition:color .3s}\nrdr-course .pa-etape+.pa-etape{margin-top:clamp(14px,2.4vh,22px)}\nrdr-course .pa-etape::before{content:'';position:absolute;left:0;top:10px;bottom:10px;width:3px;border-radius:2px;background:var(--eau3);transition:background .3s}\nrdr-course .pa-etape.est-la{color:var(--encre)}\nrdr-course .pa-etape.est-la::before{background:var(--vert1)}\nrdr-course .pa-etape:focus-visible{box-shadow:0 0 0 2px var(--vert1);border-radius:6px}\nrdr-course .pa-carte-cadre{position:sticky;top:calc(var(--colle) + 22px);height:clamp(420px,calc(100svh - var(--colle) - 70px),620px);border-radius:var(--coin);overflow:hidden;background:#2A5783;box-shadow:0 30px 60px -30px rgba(25,29,49,.55)}\nrdr-course .carte{position:relative;width:100%;height:100%}\nrdr-course .c-svg{position:absolute;inset:0;display:block;width:100%;height:100%}\nrdr-course .c-terre{fill:var(--vert2)}\nrdr-course .c-france{fill:var(--jaune)}\nrdr-course .c-route{fill:none;stroke:#fff;stroke-width:2;stroke-dasharray:6 7;opacity:.5}\nrdr-course .c-fait{fill:none;stroke:var(--jaune);stroke-width:2.8;stroke-dasharray:6 7;stroke-linecap:butt}\nrdr-course .c-anneau{fill:none;stroke:#fff;stroke-width:2}\nrdr-course .c-zone{fill:rgba(77,168,222,.16);stroke:rgba(255,255,255,.55);stroke-width:1.4;stroke-dasharray:3 5;opacity:0;transition:opacity .5s}\nrdr-course .c-zone.est-la{opacity:1}\nrdr-course .c-zlieu{font:800 10.5px var(--police);letter-spacing:.12em;text-transform:uppercase;fill:#fff;opacity:0;transition:opacity .5s;paint-order:stroke;stroke:rgba(25,29,49,.45);stroke-width:3px}\nrdr-course .c-zlieu.est-la{opacity:1}\nrdr-course .c-lieu{font:italic 400 16px var(--titre);text-transform:uppercase;letter-spacing:.02em;fill:#fff}\nrdr-course .c-lieu--mer{font:italic 500 14px var(--police);text-transform:none;letter-spacing:.03em;fill:rgba(255,255,255,.5)}\nrdr-course .c-distance{font:italic 400 28px var(--titre);fill:var(--jaune)}\nrdr-course .c-distance-km{font:italic 500 14px var(--police);fill:#fff}\nrdr-course .c-bateau{fill:var(--jaune);stroke:var(--marine);stroke-width:2}\nrdr-course .chargement{position:absolute;inset:0;display:grid;place-items:center;color:rgba(255,255,255,.6);font:600 12px var(--police)}\nrdr-course .manifeste{position:relative;overflow:hidden;background:var(--vert1);color:#fff;padding:var(--pad-h) 0 calc(var(--debord) + clamp(30px,4.6vh,52px) * var(--air));border-radius:clamp(44px,5.2vw,76px) 3px 0 0;--fl-survol:var(--jaune);--fl-encre:var(--marine)}\nrdr-course .manifeste h2{text-align:center;font-size:clamp(30px,3.4vw,48px);color:#fff}\nrdr-course .mf-intro{max-width:660px;margin:clamp(14px,2.4vh,22px) auto 0;text-align:center;font-size:16px;line-height:1.7;color:rgba(255,255,255,.92)}\nrdr-course .mf-cartes{position:relative;display:flex;gap:10px;height:clamp(340px,54svh,440px);margin-top:calc(clamp(24px,4vh,40px) * var(--air))}\nrdr-course .mf-carte{position:relative;flex:0 0 clamp(62px,5.6vw,80px);border-radius:30px 3px 30px 3px;overflow:hidden;background:var(--vert2);cursor:pointer;transition:flex .55s cubic-bezier(.4,0,.2,1)}\nrdr-course .mf-carte.ouverte{flex:1 1 0%;cursor:default}\nrdr-course .mf-carte:focus-visible{outline:2px solid #fff;outline-offset:3px}\nrdr-course .mf-v{position:absolute;inset:0;display:flex;align-items:flex-start;justify-content:center;padding-top:22px;pointer-events:none;transition:opacity .25s}\nrdr-course .mf-v span{font:italic 400 clamp(24px,2.3vw,34px)/1 var(--contour);letter-spacing:.1em;text-transform:uppercase;color:#fff;writing-mode:vertical-lr;transform:rotate(180deg);white-space:nowrap;opacity:.8;transition:opacity .25s}\nrdr-course .mf-carte:not(.ouverte):hover .mf-v span{opacity:1}\nrdr-course .mf-carte.ouverte .mf-v{opacity:0}\nrdr-course .mf-corps{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .35s ease .2s,visibility 0s linear .55s}\nrdr-course .mf-carte.ouverte .mf-corps{opacity:1;visibility:visible;transition:opacity .35s ease .2s,visibility 0s}\nrdr-course .mf-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .45s}\nrdr-course .mf-img.est-la{opacity:1}\nrdr-course .mf-texte{position:absolute;z-index:2;left:0;right:0;bottom:0;padding:clamp(40px,7vh,70px) clamp(20px,2.6vw,30px) clamp(22px,3vh,30px);border-left:5px solid #fff;background:linear-gradient(0deg,rgba(0,103,110,.96) 0%,rgba(0,103,110,.72) 52%,rgba(0,103,110,0) 100%)}\nrdr-course .mf-texte h3{font-size:clamp(30px,3.2vw,44px);letter-spacing:.06em;color:#fff}\nrdr-course .mf-texte p{max-width:620px;margin-top:8px;font-style:italic;font-size:14.5px;line-height:1.6;color:#fff}\nrdr-course .mf-carte .fleche{width:38px;height:38px;margin-top:-19px;background:rgba(25,29,49,.4)}\nrdr-course .mf-carte .fleche .ico{width:16px;height:16px}\nrdr-course .mf-points{position:absolute;z-index:3;top:14px;right:16px;display:flex;gap:4px}\nrdr-course .mf-points i{width:7px;height:4px;border-radius:1px;background:rgba(255,255,255,.45);transform:skewX(-20deg);transition:width .25s,background .25s}\nrdr-course .mf-points i.on{width:16px;background:#fff}\nrdr-course .temoignages{position:relative;background:#fff;padding:0 0 calc(clamp(56px,9vh,96px) * var(--air))}\nrdr-course .te-scene{display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(28px,5vw,80px);align-items:start}\nrdr-course .te-portrait{position:relative;width:clamp(180px,17vw,236px);aspect-ratio:1;margin-top:calc(-1 * var(--debord));border-radius:50%;overflow:hidden;background:var(--eau3);border:7px solid #fff;box-shadow:0 24px 48px -20px rgba(25,29,49,.5)}\nrdr-course .te-portrait img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .5s}\nrdr-course .te-portrait img.on{opacity:1}\nrdr-course .te-droite{padding-top:calc(clamp(30px,5vh,52px) * var(--air))}\nrdr-course .te-diapos{display:grid}\nrdr-course .te-diapo{grid-area:1/1;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .45s,transform .45s var(--ease),visibility 0s linear .45s}\nrdr-course .te-diapo.on{opacity:1;visibility:visible;transform:none;transition:opacity .45s,transform .45s var(--ease),visibility 0s}\nrdr-course .te-cit{position:relative;padding:0 clamp(40px,4.6vw,64px)}\nrdr-course .te-cit::before,rdr-course .te-cit::after{content:'';position:absolute;width:clamp(30px,3.2vw,44px);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--chevrons) no-repeat center/contain;mask:var(--chevrons) no-repeat center/contain}\nrdr-course .te-cit::before{left:0;top:-4px;transform:scaleX(-1)}\nrdr-course .te-cit::after{right:0;bottom:-6px}\nrdr-course .te-cit p{font:italic 500 clamp(19px,1.75vw,25px)/1.5 var(--police);color:var(--marine)}\nrdr-course .te-qui{margin-top:18px;padding-left:clamp(40px,4.6vw,64px);font-size:14px;line-height:1.5}\nrdr-course .te-qui b{display:block;font-weight:800;font-size:15px;color:var(--vert1)}\nrdr-course .te-qui span{color:var(--encre2)}\nrdr-course .te-nav{display:flex;align-items:center;gap:14px;margin-top:clamp(22px,3.4vh,32px);padding-left:clamp(40px,4.6vw,64px)}\nrdr-course .te-fleche{display:grid;place-items:center;flex:none;width:44px;height:44px;padding:0;border:2px solid var(--vert1);border-radius:var(--angle-p);background:#fff;color:var(--vert1);cursor:pointer;transition:background .2s,color .2s,transform .25s var(--ease)}\nrdr-course #te-prec{border-radius:var(--angle-p-inv)}\nrdr-course .te-fleche:hover{background:var(--vert1);color:#fff}\nrdr-course #te-prec:hover{transform:translateX(-3px)}\nrdr-course #te-suiv:hover{transform:translateX(3px)}\nrdr-course .te-fleche:active{transform:scale(.94)}\nrdr-course .te-fleche:focus-visible{outline:2px solid var(--vert1);outline-offset:3px}\nrdr-course .te-fleche .ico{width:18px;height:18px}\nrdr-course .te-vignettes{display:flex;gap:8px;margin:0;padding:0;list-style:none}\nrdr-course .te-vignettes li{position:relative}\nrdr-course .te-vignettes button{display:block;width:44px;height:44px;padding:0;border:0;border-radius:var(--angle-p);overflow:hidden;background:var(--eau3);cursor:pointer;opacity:.55;box-shadow:0 0 0 2px #fff,0 0 0 3px transparent;transform:rotate(var(--r,0deg));transition:opacity .2s,box-shadow .2s,transform .3s var(--ease)}\nrdr-course .te-vignettes li:nth-child(odd) button{--r:-2.5deg}\nrdr-course .te-vignettes li:nth-child(even) button{--r:1.5deg}\nrdr-course .te-vignettes button img{width:100%;height:100%;object-fit:cover}\nrdr-course .te-vignettes button:hover{opacity:.9;transform:rotate(0) translateY(-2px)}\nrdr-course .te-vignettes button:focus-visible{outline:2px solid var(--vert1);outline-offset:3px}\nrdr-course .te-vignettes button[aria-current=\"true\"]{opacity:1;transform:rotate(0) translateY(-3px);box-shadow:0 0 0 2px #fff,0 0 0 4px var(--vert1)}\nrdr-course .te-vignettes li::after{content:'';position:absolute;left:50%;bottom:-10px;width:16px;height:4px;margin-left:-8px;border-radius:1px;background:var(--vert1);transform:skewX(-20deg) scaleX(0);transition:transform .3s var(--ease)}\nrdr-course .te-vignettes li:has(button[aria-current=\"true\"])::after{transform:skewX(-20deg) scaleX(1)}\n@media (max-height:820px) and (min-width:751px){\nrdr-course .haut h1{font-size:clamp(36px,4.5vw,60px)}\nrdr-course .sommaire a{min-height:40px;padding:5px 12px 5px 10px;gap:9px;font-size:12.5px}\nrdr-course .som-n{font-size:17px}\nrdr-course .fm-annee{font-size:clamp(52px,5vw,72px)}\nrdr-course .mf-cartes{height:clamp(330px,56svh,400px)}\n}\n@media (max-width:1100px){\nrdr-course .hi-corps{grid-template-columns:minmax(0,1fr) minmax(0,560px) minmax(0,1fr)}\nrdr-course .vignette{width:min(100%,190px)}\nrdr-course .ed-grille{grid-template-columns:minmax(0,1.5fr) minmax(0,.5fr)}\nrdr-course .fm-rang--g .fm-trait,rdr-course .fm-rang--d .fm-trait{width:18px}\nrdr-course .fm-rang--g .fm-an{right:calc(50% + 26px)}\nrdr-course .fm-rang--d .fm-an{left:calc(50% + 26px)}\nrdr-course .fm-an{font-size:26px}\nrdr-course .fm-rang[aria-selected=\"true\"] .fm-an{font-size:36px}\n}\n@media (max-width:750px){\nrdr-course{font-size:15px}\nrdr-course .haut{min-height:clamp(360px,calc(100svh - var(--entete) - 230px),460px)}\nrdr-course .haut-photo{object-position:64% 58%}\nrdr-course .haut h1{font-size:clamp(34px,10.2vw,46px)}\nrdr-course .sommaire{flex-wrap:nowrap;overflow-x:auto;margin-right:calc(-1 * var(--marge));padding:2px var(--marge) 4px 0;scrollbar-width:none}\nrdr-course .sommaire::-webkit-scrollbar{display:none}\nrdr-course .sommaire a{flex:none;min-height:44px;padding:6px 13px 6px 11px;gap:9px;font-size:12.5px}\nrdr-course .som-f{display:none}\nrdr-course .couture{display:block}\nrdr-course .fil-svg{display:none}\nrdr-course .my-titre .titre{font-size:clamp(30px,9vw,40px)}\nrdr-course .my-titre .leger{font-size:clamp(20px,6vw,28px)}\nrdr-course .my-grille{grid-template-columns:1fr;gap:26px}\nrdr-course .my-photo{aspect-ratio:16/11;border-width:4px;transform:rotate(-1deg)}\nrdr-course .my-photo img{object-position:center 64%}\nrdr-course .record{margin:-52px 8px 0 16px;padding:18px 18px 20px}\nrdr-course .record-tete{gap:10px}\nrdr-course .record-tete .ico{width:24px;height:24px}\nrdr-course .chrono>b{font-size:clamp(22px,7.2vw,30px)}\nrdr-course .chrono>i{margin:0 5px 0 2px;font-size:11px}\nrdr-course .my-txt p,rdr-course .hi-txt p,rdr-course .pa-etape{font-size:15px}\nrdr-course .hi-corps{grid-template-columns:1fr 1fr;gap:18px}\nrdr-course .hi-txt{grid-column:1 / -1;grid-row:1}\nrdr-course .vignette{width:min(100%,150px);border-width:4px}\nrdr-course .vignette--g{justify-self:center;align-self:start;margin-top:4px}\nrdr-course .vignette--d{justify-self:center;align-self:start;margin:44px 0 0}\nrdr-course .ed-grille{grid-template-columns:1fr;gap:0}\nrdr-course .fm-diapo{max-height:none}\nrdr-course .fm-item{font-size:15px;padding-left:22px}\nrdr-course .fm-frise{display:flex;padding:0;margin-top:26px;height:92px}\nrdr-course .fm-ligne{left:0;right:0;top:30px;bottom:auto;width:auto;height:2px;margin:0}\nrdr-course .fm-rang{flex:1;height:92px}\nrdr-course .fm-point{top:31px}\nrdr-course .fm-trait{display:none}\nrdr-course .fm-rang--g .fm-an,rdr-course .fm-rang--d .fm-an{left:50%;right:auto;top:54px;transform:translateX(-50%);font-size:22px}\nrdr-course .fm-rang[aria-selected=\"true\"] .fm-an{font-size:30px;top:50px}\nrdr-course .fm-frise{order:2}\nrdr-course .origins{--ro-mord:64px}\nrdr-course .origins h2{justify-content:flex-start}\nrdr-course .ro-logo{width:170px}\nrdr-course .ro-motif{--mo-l:min(calc((100vw - 204px) / .9),56vw)}\nrdr-course .ro-rail{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:60%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin-left:calc(-1 * var(--marge));margin-right:calc(-1 * var(--marge));margin-bottom:-52px;padding:10px var(--marge) 60px;scroll-padding:0 var(--marge)}\nrdr-course .ro-rail::-webkit-scrollbar{display:none}\nrdr-course .ro-carte{scroll-snap-align:start}\nrdr-course .ro-cadre{width:100%;border-width:4px}\nrdr-course .pa-grille{grid-template-columns:1fr;gap:20px}\nrdr-course .pa-texte{display:contents}\nrdr-course .pa-etapes{order:2;margin-top:4px}\nrdr-course .pa-carte-cadre{order:1;position:relative;top:auto;height:clamp(250px,68vw,320px)}\nrdr-course .pa-etape{padding-left:18px}\nrdr-course .c-lieu{font-size:12px}\nrdr-course .c-distance{font-size:20px}\nrdr-course .c-distance-km{font-size:11px}\nrdr-course .manifeste{border-radius:32px 3px 0 0}\nrdr-course .mf-cartes{flex-direction:column;height:auto;gap:8px}\nrdr-course .mf-carte{flex:0 0 58px;min-height:58px;border-radius:16px 3px 16px 3px;transition:min-height .5s cubic-bezier(.4,0,.2,1)}\nrdr-course .mf-carte.ouverte{flex:0 0 auto}\nrdr-course .mf-v{align-items:center;padding:0}\nrdr-course .mf-v span{writing-mode:horizontal-tb;transform:none;font-size:24px}\nrdr-course .mf-texte p{font-size:14px}\nrdr-course .mf-carte.ouverte{min-height:clamp(420px,122vw,480px)}\nrdr-course .mf-v span{opacity:1}\nrdr-course .mf-carte .fleche{top:34px;width:44px;height:44px;margin-top:0}\nrdr-course .te-diapo{align-self:center}\nrdr-course .te-scene{grid-template-columns:1fr;gap:0;justify-items:center;text-align:center}\nrdr-course .te-portrait{width:150px}\nrdr-course .te-droite{padding-top:22px;width:100%}\nrdr-course .te-cit{padding:0 34px}\nrdr-course .te-cit::before,rdr-course .te-cit::after{width:26px}\nrdr-course .te-cit p{font-size:18px}\nrdr-course .te-qui{padding-left:0}\nrdr-course .te-nav{justify-content:center;padding-left:0;flex-wrap:wrap}\nrdr-course .te-vignettes{order:-1;flex-basis:100%;justify-content:center;gap:6px;margin-bottom:14px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-course *{animation:none!important;transition:none!important}\n}";
  const PAGE_HTML = "<div class=\"haut-bord\">\n  <header class=\"haut\" id=\"haut\">\n    <img class=\"haut-photo\" id=\"haut-photo\" alt=\"\" fetchpriority=\"high\" decoding=\"async\" width=\"2160\" height=\"1440\">\n    <div class=\"trame haut-txt\">\n      <h1 class=\"titre\">Qu’est-ce que <em>la Route du Rhum&#8239;?</em></h1>\n      <nav class=\"sommaire\" id=\"sommaire\" aria-label=\"Sur cette page\"></nav>\n    </div>\n  </header>\n</div>\n<div class=\"fil\" id=\"fil\">\n  <svg class=\"fil-svg\" id=\"fil-svg\" aria-hidden=\"true\" focusable=\"false\"></svg>\n  <section class=\"mythique\" id=\"le-plus-mythique\" aria-labelledby=\"t-mythique\">\n    <div class=\"trame\">\n      <h2 class=\"my-titre\" id=\"t-mythique\"><span class=\"titre\">Le plus mythique</span> <span class=\"leger\">des sprints océaniques</span></h2>\n      <div class=\"my-grille\">\n        <div class=\"my-gauche\">\n          <figure class=\"my-photo\"><img id=\"my-photo\" alt=\"\" loading=\"lazy\" decoding=\"async\" width=\"1200\" height=\"1280\"></figure>\n          <aside class=\"record\" id=\"record\" aria-label=\"Le record\">\n            <div class=\"record-tete\">\n              <svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"trophy\"></svg>\n              <div class=\"chrono\" aria-hidden=\"true\"><b><span class=\"odo\" data-txt=\"6\"></span></b><i>j</i><b><span class=\"odo\" data-txt=\"19\"></span></b><i>h</i><b><span class=\"odo\" data-txt=\"47\"></span></b><i>min</i><b><span class=\"odo\" data-txt=\"25\"></span></b><i>s</i></div>\n            </div>\n            <p id=\"record-txt\"></p>\n          </aside>\n        </div>\n        <div class=\"my-txt\" id=\"my-texte\"></div>\n      </div>\n    </div>\n  </section>\n  <section class=\"histoire\" id=\"histoire\" aria-labelledby=\"t-histoire\">\n    <span class=\"couture\" style=\"top:0\" aria-hidden=\"true\"></span>\n    <div class=\"trame\">\n      <h2 class=\"titre\" id=\"t-histoire\">Histoire</h2>\n      <div class=\"hi-corps\">\n        <figure class=\"vignette vignette--g\" id=\"vignette-g\"><img id=\"vg-img\" alt=\"\" loading=\"lazy\" decoding=\"async\" width=\"500\" height=\"500\"></figure>\n        <div class=\"hi-txt\" id=\"hi-txt\"></div>\n        <figure class=\"vignette vignette--d\" id=\"vignette-d\"><img id=\"vd-img\" alt=\"\" loading=\"lazy\" decoding=\"async\" width=\"500\" height=\"500\"></figure>\n      </div>\n    </div>\n  </section>\n  <section class=\"editions\" id=\"les-editions\" aria-labelledby=\"t-editions\">\n    <span class=\"couture\" style=\"top:0\" aria-hidden=\"true\"></span>\n    <div class=\"trame\">\n      <div class=\"ed-grille\">\n        <div class=\"ed-gauche\">\n          <h2 class=\"ed-titre\" id=\"t-editions\"><span class=\"titre\">Les éditions</span><span class=\"leger\">Les grands faits marquants</span></h2>\n          <div class=\"fm-contenu\" id=\"fm-contenu\" role=\"tabpanel\" aria-live=\"polite\"></div>\n        </div>\n        <div class=\"fm-frise\" id=\"fm-frise\" role=\"tablist\" aria-orientation=\"vertical\" aria-label=\"Les éditions\"></div>\n      </div>\n      <div class=\"ed-pied\"><a class=\"btn btn--encre\" href=\"/heritage\">En savoir plus sur les différentes éditions <span class=\"btn-f\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"arrow-right\"></svg></span></a></div>\n    </div>\n  </section>\n</div>\n<section class=\"origins\" id=\"rhum-origins\" aria-labelledby=\"t-origins\">\n  <div class=\"ro-fond\" aria-hidden=\"true\"><div class=\"ro-motif\"></div></div>\n  <div class=\"trame\">\n    <div class=\"ro-tete\">\n      <h2 id=\"t-origins\"><img class=\"ro-logo\" id=\"ro-logo\" alt=\"Rhum Origins\" width=\"2673\" height=\"1760\"></h2>\n      <div class=\"ro-nav\">\n        <button type=\"button\" class=\"te-fleche ro-prec\" id=\"ro-prec\" aria-controls=\"ro-rail\" aria-label=\"Vidéos précédentes\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevron-left\"></svg></button>\n        <button type=\"button\" class=\"te-fleche ro-suiv\" id=\"ro-suiv\" aria-controls=\"ro-rail\" aria-label=\"Vidéos suivantes\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevron-right\"></svg></button>\n      </div>\n    </div>\n    <ol class=\"ro-rail\" id=\"ro-rail\"></ol>\n  </div>\n</section>\n<section class=\"parcours\" id=\"parcours\" aria-labelledby=\"t-parcours\">\n  <div class=\"trame\">\n    <div class=\"pa-grille\">\n      <div class=\"pa-texte\">\n        <h2 class=\"titre\" id=\"t-parcours\">Parcours</h2>\n        <div class=\"pa-etapes\" id=\"pa-etapes\"></div>\n      </div>\n      <div class=\"pa-carte-cadre\"><div class=\"carte\" id=\"carte-parcours\"><div class=\"chargement\">La carte se dessine…</div></div></div>\n    </div>\n  </div>\n</section>\n<section class=\"manifeste\" id=\"la-ou-les-reves-prennent-le-large\" aria-labelledby=\"t-manifeste\">\n  <div class=\"trame\">\n    <h2 class=\"titre\" id=\"t-manifeste\">Là où les rêves prennent le large</h2>\n    <p class=\"mf-intro\" id=\"mf-intro\"></p>\n    <div class=\"mf-cartes\" id=\"mf-cartes\"></div>\n  </div>\n</section>\n<section class=\"temoignages\" id=\"temoignages\" aria-roledescription=\"carrousel\" aria-label=\"Témoignages de skippers\">\n  <div class=\"trame\">\n    <div class=\"te-scene\">\n      <div class=\"te-portrait\" id=\"te-portrait\"></div>\n      <div class=\"te-droite\">\n        <div class=\"te-diapos\" id=\"te-diapos\" aria-live=\"polite\"></div>\n        <div class=\"te-nav\">\n          <button type=\"button\" class=\"te-fleche\" id=\"te-prec\" aria-label=\"Témoignage précédent\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevron-left\"></svg></button>\n          <ul class=\"te-vignettes\" id=\"te-vignettes\"></ul>\n          <button type=\"button\" class=\"te-fleche\" id=\"te-suiv\" aria-label=\"Témoignage suivant\"><svg class=\"ico\" viewBox=\"0 0 24 24\" data-i=\"chevron-right\"></svg></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";
  const TRAD = {"Qu’est-ce que":"What is","la Route du Rhum ?":"the Route du Rhum?","Le plus mythique":"The most mythical","des sprints océaniques":"of oceanic sprints","Histoire":"History","Les éditions":"The editions","Les grands faits marquants":"Key highlights","En savoir plus sur les différentes éditions":"Learn more about the different editions","Parcours":"Course","Là où les rêves prennent le large":"Where dreams set sail","La carte se dessine…":"Drawing the map…","Sur cette page":"On this page","Le record":"The record","Vidéos précédentes":"Previous videos","Vidéos suivantes":"Next videos","Témoignages de skippers":"Skipper testimonials","carrousel":"carousel","Témoignage précédent":"Previous testimonial","Témoignage suivant":"Next testimonial","Photo précédente":"Previous photo","Photo suivante":"Next photo","j":"d","Océan Atlantique":"Atlantic Ocean","3 542 MN":"3,542 NM","≈ 6 560 km":"≈ 6,560 km","Carte de l’Atlantique Nord : la route de Saint-Malo à Pointe-à-Pitre, 3 542 milles nautiques":"Map of the North Atlantic: the route from Saint-Malo to Pointe-à-Pitre, 3,542 nautical miles"};
  const GEO = {"guadeloupe":[[[[-61.1952,15.9323],[-61.1952,15.9188],[-61.1988,15.9103],[-61.206,15.9036],[-61.2168,15.8934],[-61.242,15.8816],[-61.2744,15.8732],[-61.3068,15.8782],[-61.3176,15.9053],[-61.3176,15.9103],[-61.3212,15.9188],[-61.3248,15.9255],[-61.3284,15.9289],[-61.332,15.9323],[-61.3284,15.939],[-61.3176,15.9525],[-61.314,15.9677],[-61.3068,15.9779],[-61.2888,15.9981],[-61.2672,16.01],[-61.2456,16.0032],[-61.224,15.988],[-61.2132,15.9593],[-61.206,15.9525],[-61.1988,15.9458],[-61.1952,15.9323]]],[[[-60.99,16.346],[-61.0404,16.3139],[-61.0692,16.3021],[-61.0908,16.3055],[-61.08,16.3122],[-61.0404,16.3443],[-61.0152,16.3544],[-60.99,16.346]]],[[[-61.6236,15.8715],[-61.62,15.8681],[-61.6164,15.8597],[-61.62,15.8529],[-61.6272,15.8462],[-61.638,15.8529],[-61.6344,15.8664],[-61.6236,15.8715]]],[[[-61.566,15.8782],[-61.566,15.8766],[-61.566,15.8749],[-61.5696,15.8698],[-61.5804,15.8614],[-61.5912,15.858],[-61.5948,15.8631],[-61.5912,15.8681],[-61.584,15.8715],[-61.5804,15.8816],[-61.5732,15.8833],[-61.5696,15.8816],[-61.566,15.8782]]],[[[-61.5516,16.2852],[-61.548,16.2801],[-61.5552,16.2582],[-61.548,16.2379],[-61.5552,16.2362],[-61.5732,16.2329],[-61.5804,16.2227],[-61.5768,16.1754],[-61.566,16.1417],[-61.5588,16.0859],[-61.566,16.0336],[-61.5984,15.9964],[-61.6452,15.9711],[-61.6956,15.9492],[-61.6956,15.9542],[-61.7028,15.9694],[-61.6956,15.9762],[-61.7028,15.9897],[-61.71,15.9981],[-61.7208,16.0032],[-61.7316,16.0133],[-61.7388,16.0252],[-61.7424,16.037],[-61.746,16.0471],[-61.7568,16.0522],[-61.7676,16.0876],[-61.7712,16.167],[-61.7856,16.2025],[-61.7784,16.2177],[-61.7856,16.2295],[-61.7928,16.2396],[-61.7964,16.2514],[-61.7964,16.2683],[-61.7928,16.2987],[-61.7964,16.3122],[-61.7892,16.3207],[-61.7712,16.3494],[-61.7568,16.3612],[-61.7388,16.3646],[-61.728,16.3595],[-61.7208,16.3511],[-61.7136,16.346],[-61.6884,16.3409],[-61.6488,16.3291],[-61.6164,16.3122],[-61.5984,16.292],[-61.6128,16.2852],[-61.6056,16.2818],[-61.602,16.2818],[-61.5984,16.2852],[-61.5948,16.2818],[-61.584,16.2717],[-61.5804,16.2818],[-61.5696,16.2903],[-61.5588,16.292],[-61.5516,16.2852]]],[[[-61.5444,16.2852],[-61.5264,16.3375],[-61.5192,16.3494],[-61.5012,16.3527],[-61.4976,16.3561],[-61.494,16.3646],[-61.494,16.3747],[-61.4976,16.3814],[-61.5012,16.3848],[-61.5084,16.3899],[-61.5156,16.3933],[-61.5228,16.395],[-61.53,16.4304],[-61.5336,16.4389],[-61.5336,16.449],[-61.5264,16.4625],[-61.5084,16.4811],[-61.5048,16.4861],[-61.4976,16.4929],[-61.4652,16.5098],[-61.4616,16.5132],[-61.458,16.5115],[-61.4256,16.4895],[-61.4076,16.4726],[-61.3968,16.4524],[-61.3932,16.4253],[-61.3968,16.4],[-61.3932,16.3899],[-61.386,16.373],[-61.3752,16.3595],[-61.3644,16.3494],[-61.3536,16.3409],[-61.3392,16.3325],[-61.332,16.3409],[-61.3212,16.3342],[-61.3104,16.3342],[-61.3032,16.3342],[-61.2888,16.3325],[-61.2816,16.3274],[-61.26,16.3088],[-61.2528,16.3055],[-61.242,16.3004],[-61.188,16.2632],[-61.17,16.2582],[-61.1628,16.2531],[-61.1736,16.2447],[-61.1844,16.2447],[-61.2096,16.2514],[-61.2204,16.2548],[-61.2348,16.2582],[-61.4112,16.2193],[-61.4436,16.2058],[-61.4616,16.2025],[-61.4832,16.2058],[-61.5048,16.2126],[-61.5192,16.2227],[-61.5336,16.2329],[-61.5444,16.2464],[-61.548,16.2582],[-61.548,16.2717],[-61.5444,16.2852]]]],"france":[[[[9.481,42.805],[9.455,42.659],[9.473,42.616],[9.509,42.585],[9.527,42.552],[9.556,42.161],[9.549,42.13],[9.427,41.972],[9.401,41.927],[9.394,41.731],[9.373,41.679],[9.329,41.627],[9.254,41.46],[9.185,41.385],[9.002,41.477],[8.894,41.515],[8.843,41.559],[8.807,41.588],[8.829,41.628],[8.879,41.668],[8.887,41.701],[8.771,41.738],[8.717,41.762],[8.717,41.804],[8.757,41.87],[8.739,41.925],[8.674,41.922],[8.62,41.93],[8.617,41.96],[8.653,41.996],[8.703,42.043],[8.699,42.095],[8.642,42.118],[8.588,42.161],[8.566,42.218],[8.609,42.258],[8.674,42.284],[8.627,42.343],[8.591,42.345],[8.566,42.357],[8.588,42.385],[8.638,42.427],[8.714,42.55],[8.815,42.607],[8.995,42.646],[9.045,42.661],[9.088,42.705],[9.139,42.732],[9.196,42.729],[9.254,42.713],[9.286,42.694],[9.315,42.713],[9.337,42.767],[9.322,42.814],[9.329,42.944],[9.362,43.017],[9.416,43.022],[9.463,42.981],[9.459,42.946],[9.477,42.861],[9.481,42.805]]],[[[7.616,47.593],[7.493,47.548],[7.468,47.508],[7.421,47.456],[7.342,47.433],[7.267,47.427],[7.202,47.433],[7.166,47.454],[7.169,47.473],[7.137,47.489],[7.054,47.489],[6.968,47.453],[6.899,47.394],[6.921,47.361],[6.986,47.352],[7,47.34],[7,47.322],[6.979,47.302],[6.953,47.267],[6.82,47.163],[6.687,47.058],[6.665,47.027],[6.626,47.005],[6.457,46.949],[6.439,46.927],[6.428,46.833],[6.41,46.755],[6.284,46.683],[6.161,46.611],[6.129,46.567],[6.107,46.517],[6.068,46.458],[6.061,46.428],[6.122,46.378],[6.115,46.338],[6.097,46.279],[6.035,46.237],[5.971,46.215],[5.971,46.151],[6.007,46.142],[6.086,46.147],[6.201,46.192],[6.273,46.253],[6.23,46.309],[6.223,46.319],[6.233,46.333],[6.323,46.394],[6.428,46.43],[6.579,46.437],[6.759,46.416],[6.777,46.407],[6.766,46.369],[6.784,46.314],[6.817,46.276],[6.773,46.164],[6.806,46.131],[6.856,46.09],[6.896,46.052],[6.953,46.017],[7.004,45.96],[7.022,45.927],[6.939,45.868],[6.806,45.814],[6.788,45.781],[6.791,45.741],[6.806,45.71],[6.881,45.67],[6.961,45.581],[7.015,45.501],[7.126,45.423],[7.155,45.401],[7.148,45.381],[7.115,45.349],[7.079,45.239],[7.033,45.222],[6.982,45.215],[6.842,45.135],[6.781,45.145],[6.691,45.144],[6.629,45.118],[6.633,45.069],[6.691,45.022],[6.723,44.974],[6.737,44.921],[6.802,44.883],[6.889,44.861],[6.939,44.859],[6.971,44.845],[6.993,44.828],[7.029,44.717],[7.007,44.689],[6.961,44.677],[6.932,44.632],[6.874,44.564],[6.842,44.51],[6.878,44.463],[6.892,44.428],[6.874,44.392],[6.899,44.336],[6.968,44.281],[7.148,44.201],[7.317,44.139],[7.371,44.128],[7.598,44.168],[7.637,44.165],[7.666,44.116],[7.677,44.083],[7.652,44.034],[7.591,43.965],[7.522,43.911],[7.483,43.864],[7.49,43.823],[7.493,43.767],[7.439,43.75],[7.436,43.762],[7.414,43.77],[7.396,43.765],[7.382,43.753],[7.378,43.732],[7.263,43.696],[7.18,43.659],[6.863,43.439],[6.716,43.373],[6.687,43.335],[6.658,43.262],[6.572,43.199],[6.493,43.17],[6.305,43.139],[6.115,43.073],[6.032,43.1],[5.809,43.099],[5.672,43.179],[5.405,43.229],[5.319,43.345],[5.2,43.352],[5.121,43.349],[5.074,43.366],[5.06,43.406],[5.06,43.444],[4.977,43.427],[4.912,43.427],[4.873,43.411],[4.844,43.394],[4.808,43.406],[4.786,43.401],[4.79,43.378],[4.711,43.373],[4.628,43.387],[4.408,43.448],[4.376,43.456],[4.225,43.479],[4.163,43.503],[4.113,43.564],[4.073,43.581],[4.052,43.593],[3.911,43.564],[3.861,43.517],[3.785,43.461],[3.26,43.192],[3.163,43.081],[3.051,42.915],[3.044,42.838],[3.091,42.592],[3.199,42.462],[3.213,42.43],[3.152,42.43],[3.051,42.448],[2.968,42.467],[2.893,42.456],[2.817,42.429],[2.749,42.413],[2.702,42.408],[2.669,42.394],[2.655,42.363],[2.651,42.34],[2.569,42.345],[2.374,42.39],[2.201,42.422],[2.097,42.387],[2.032,42.354],[1.985,42.359],[1.953,42.392],[1.928,42.427],[1.859,42.456],[1.705,42.503],[1.715,42.526],[1.741,42.557],[1.741,42.576],[1.708,42.604],[1.568,42.635],[1.503,42.642],[1.46,42.621],[1.427,42.595],[1.348,42.691],[1.294,42.71],[1.208,42.713],[1.111,42.743],[1.01,42.779],[0.765,42.838],[0.697,42.845],[0.671,42.837],[0.653,42.8],[0.643,42.701],[0.632,42.689],[0.517,42.685],[0.376,42.699],[0.311,42.692],[0.254,42.692],[0.2,42.72],[-0.041,42.689],[-0.081,42.705],[-0.139,42.75],[-0.207,42.786],[-0.257,42.804],[-0.301,42.826],[-0.34,42.83],[-0.398,42.809],[-0.481,42.8],[-0.549,42.802],[-0.585,42.798],[-0.74,42.909],[-0.761,42.939],[-0.841,42.948],[-0.934,42.949],[-1.175,43.021],[-1.287,43.06],[-1.301,43.083],[-1.301,43.1],[-1.319,43.097],[-1.352,43.064],[-1.37,43.038],[-1.395,43.033],[-1.427,43.036],[-1.46,43.052],[-1.481,43.071],[-1.46,43.106],[-1.424,43.149],[-1.406,43.198],[-1.409,43.239],[-1.471,43.267],[-1.561,43.279],[-1.625,43.283],[-1.712,43.307],[-1.755,43.324],[-1.791,43.373],[-1.795,43.408],[-1.633,43.437],[-1.485,43.564],[-1.345,44.02],[-1.244,44.56],[-1.172,44.661],[-1.078,44.691],[-1.154,44.763],[-1.201,44.727],[-1.219,44.687],[-1.244,44.666],[-1.19,45.161],[-1.15,45.343],[-1.082,45.533],[-0.941,45.458],[-0.826,45.381],[-0.765,45.314],[-0.689,45.093],[-0.635,45.046],[-0.549,45.001],[-0.581,45.052],[-0.643,45.09],[-0.733,45.385],[-0.79,45.468],[-0.88,45.538],[-1.168,45.685],[-1.197,45.715],[-1.211,45.77],[-1.114,45.769],[-1.031,45.741],[-1.042,45.772],[-1.067,45.805],[-1.103,45.925],[-1.136,46.204],[-1.132,46.253],[-1.147,46.312],[-1.24,46.324],[-1.312,46.328],[-1.391,46.35],[-1.787,46.515],[-1.921,46.685],[-2.061,46.81],[-2.093,46.866],[-2.09,46.921],[-2.018,47.038],[-2.083,47.112],[-2.144,47.126],[-2.198,47.163],[-2.147,47.223],[-2.108,47.263],[-2.029,47.274],[-1.921,47.26],[-1.82,47.225],[-1.744,47.216],[-1.975,47.31],[-2.353,47.279],[-2.435,47.291],[-2.504,47.312],[-2.529,47.381],[-2.475,47.413],[-2.428,47.472],[-2.482,47.512],[-2.554,47.527],[-2.666,47.525],[-2.77,47.513],[-2.795,47.538],[-2.734,47.602],[-2.788,47.626],[-2.86,47.614],[-2.965,47.602],[-3.065,47.621],[-3.159,47.694],[-3.22,47.694],[-3.263,47.685],[-3.328,47.713],[-3.397,47.72],[-3.443,47.711],[-3.508,47.753],[-3.901,47.838],[-4.07,47.848],[-4.225,47.81],[-4.311,47.822],[-4.376,47.878],[-4.426,47.968],[-4.678,48.039],[-4.628,48.086],[-4.513,48.097],[-4.379,48.13],[-4.329,48.17],[-4.433,48.218],[-4.513,48.23],[-4.545,48.248],[-4.577,48.289],[-4.531,48.31],[-4.498,48.3],[-4.405,48.293],[-4.243,48.303],[-4.3,48.347],[-4.365,48.357],[-4.394,48.367],[-4.523,48.373],[-4.585,48.357],[-4.718,48.364],[-4.75,48.411],[-4.761,48.451],[-4.721,48.539],[-4.531,48.619],[-4.059,48.708],[-3.857,48.696],[-3.713,48.711],[-3.544,48.765],[-3.472,48.814],[-3.231,48.841],[-3.004,48.791],[-2.792,48.602],[-2.691,48.538],[-2.446,48.649],[-2.079,48.645],[-2.003,48.583],[-1.975,48.635],[-1.906,48.697],[-1.852,48.669],[-1.823,48.631],[-1.438,48.642],[-1.377,48.652],[-1.481,48.697],[-1.564,48.805],[-1.582,49.202],[-1.69,49.314],[-1.813,49.491],[-1.87,49.595],[-1.874,49.631],[-1.856,49.683],[-1.705,49.682],[-1.589,49.668],[-1.366,49.708],[-1.258,49.68],[-1.265,49.598],[-1.233,49.494],[-1.193,49.445],[-1.139,49.388],[-0.959,49.393],[-0.765,49.36],[-0.52,49.355],[-0.164,49.296],[-0.013,49.331],[0.135,49.402],[0.416,49.449],[0.441,49.473],[0.279,49.463],[0.128,49.508],[0.11,49.558],[0.128,49.602],[0.185,49.702],[0.617,49.862],[0.923,49.911],[1.244,49.998],[1.406,50.088],[1.514,50.206],[1.55,50.23],[1.593,50.253],[1.55,50.294],[1.579,50.739],[1.611,50.819],[1.672,50.885],[1.769,50.935],[1.913,50.991],[2.446,51.067],[2.525,51.096],[2.536,51.05],[2.576,50.989],[2.601,50.956],[2.579,50.912],[2.597,50.876],[2.669,50.812],[2.759,50.751],[2.839,50.711],[2.864,50.716],[2.921,50.727],[3.022,50.767],[3.109,50.779],[3.155,50.749],[3.181,50.732],[3.235,50.662],[3.249,50.591],[3.274,50.532],[3.317,50.508],[3.476,50.499],[3.595,50.477],[3.627,50.458],[3.667,50.326],[3.688,50.307],[3.721,50.322],[3.749,50.343],[3.789,50.346],[3.857,50.338],[3.951,50.336],[4.045,50.322],[4.174,50.246],[4.171,50.221],[4.145,50.178],[4.135,50.143],[4.156,50.129],[4.192,50.095],[4.185,50.053],[4.149,50.024],[4.138,49.999],[4.138,49.984],[4.149,49.971],[4.178,49.961],[4.369,49.945],[4.545,49.961],[4.657,50.003],[4.675,50.046],[4.707,50.096],[4.772,50.14],[4.819,50.154],[4.862,50.136],[4.79,49.959],[4.84,49.914],[4.847,49.846],[4.869,49.787],[4.93,49.789],[5.006,49.779],[5.06,49.756],[5.125,49.722],[5.215,49.689],[5.279,49.678],[5.301,49.65],[5.355,49.619],[5.434,49.555],[5.506,49.511],[5.542,49.511],[5.611,49.529],[5.711,49.539],[5.791,49.537],[5.823,49.505],[5.902,49.491],[5.927,49.477],[5.96,49.454],[6.01,49.445],[6.075,49.454],[6.118,49.485],[6.179,49.499],[6.241,49.494],[6.277,49.477],[6.345,49.452],[6.381,49.458],[6.457,49.442],[6.536,49.395],[6.565,49.347],[6.575,49.32],[6.608,49.291],[6.734,49.161],[6.777,49.154],[6.82,49.175],[6.849,49.202],[6.892,49.208],[6.957,49.195],[7,49.18],[7.022,49.123],[7.036,49.112],[7.065,49.124],[7.119,49.128],[7.198,49.114],[7.313,49.13],[7.403,49.154],[7.45,49.152],[7.526,49.086],[7.612,49.062],[7.799,49.043],[8.001,49.011],[8.08,48.985],[8.134,48.973],[8.141,48.886],[8.123,48.873],[7.922,48.699],[7.839,48.636],[7.796,48.546],[7.763,48.411],[7.706,48.281],[7.616,48.157],[7.583,48.064],[7.609,48.003],[7.594,47.906],[7.54,47.774],[7.529,47.673],[7.565,47.607],[7.616,47.593]]],[[[-1.179,45.904],[-1.215,45.817],[-1.28,45.897],[-1.37,45.968],[-1.388,46.032],[-1.388,46.05],[-1.283,46.003],[-1.179,45.904]]]]};
  const SOURCE = 'https://www.routedurhum.com/_functions/course';
  const SOURCE_EN = 'https://www.routedurhum.com/en/_functions/course';

  function poserStyle() {
    if (document.getElementById('rdr-course-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-course-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  


  const MOTIFS = [
    [/^(\d{4}), photo d’archives \((\d+) sur (\d+)\)$/, '$1, archive photo ($2 of $3)'],
    [/^(\d{4}), photo d’archives$/, '$1, archive photo'],
    [/^Lire la vidéo Rhum Origins (#\d+) : ([\s\S]*)$/, 'Play Rhum Origins video $1: $2'],
    [/^Rhum Origins (#\d+) : ([\s\S]*)$/, 'Rhum Origins $1: $2'],
    [/^([\s\S]+), photo (\d+) sur (\d+)$/, '$1, photo $2 of $3']
  ];
  const ATTRIBUTS = ['placeholder', 'aria-label', 'title', 'alt', 'aria-roledescription'];
  function enAnglais(t) {
    const k = String(t).trim();
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(TRAD, k)) return t.replace(k, TRAD[k]);
    for (const [re, par] of MOTIFS) if (re.test(k)) return t.replace(k, k.replace(re, par));
    return null;
  }
  function traduireTexte(n) { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; }
  function traduire(racine) {
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach(traduireTexte);
    const els = racine.nodeType === 1 ? [racine, ...racine.querySelectorAll('[' + ATTRIBUTS.join('],[') + ']')] : [];
    els.forEach((el) => ATTRIBUTS.forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      const v = enAnglais(el.getAttribute(a));
      if (v != null && v !== el.getAttribute(a)) el.setAttribute(a, v);
    }));
  }
  function prefixerLiens(racine) {
    racine.querySelectorAll('a[href^="/"]').forEach((a) => {
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
  function quandProche(el, f) {
    if (!el || !('IntersectionObserver' in window)) { f(); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); f(); } }, { rootMargin: '1200px 0px' });
    io.observe(el);
  }
  function quandCharge(f) {
    if (document.readyState === 'complete') setTimeout(f, 0);
    else window.addEventListener('load', f, { once: true });
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
    const location = { hash: window.location.hash, search: '' };
    let d3 = null, topojson = null;

const ICO = {"arrow-down":"<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>","play":"<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\"/>","arrow-right":"<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>","chevron-left":"<path d=\"m15 18-6-6 6-6\"/>","chevron-right":"<path d=\"m9 18 6-6-6-6\"/>","chevrons-right":"<path d=\"m6 17 5-5-5-5\"/><path d=\"m13 17 5-5-5-5\"/>","trophy":"<path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\"/><path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\"/><path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\"/><path d=\"M4 22h16\"/><path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\"/><path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\"/>"};
const pic = (n) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (ICO[n] || '') + '</svg>';
document.querySelectorAll('svg[data-i]').forEach((s) => { s.innerHTML = ICO[s.dataset.i] || ''; s.setAttribute('aria-hidden', 'true'); });

    const PAGE = __D;

const MEDIA = (id, l, h, fp) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',' + (fp ? 'fp_' + fp : 'al_c') + ',q_78,enc_auto/x.jpg';


 
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
 
const NB = String.fromCharCode(160);
const T = (s) => esc(s)
  .replace(/(\d) (?=\d{3}\b)/g, (_, a) => a + NB)
  .replace(/(\d) (km|milles|mètres|jours|heures|minutes|secondes|skippers)/g, (_, a, b) => a + NB + b)
  .replace(/ ([?!:;»%])/g, (_, a) => NB + a)
  .replace(/« /g, '«' + NB);
const racine = document.documentElement.style;
{
  const m = PAGE.motifs[new URLSearchParams(location.search).get('fond')] || PAGE.motifs.ton, [x, y, l, h] = m.crop;
  racine.setProperty('--motif', 'url("https://static.wixstatic.com/media/' + m.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1280,h_1280,q_85/x.png")');
  racine.setProperty('--mo-r', l + '/' + h);
  racine.setProperty('--mo-o', String(m.o));
}
racine.setProperty('--chevrons', 'url("data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + ICO['chevrons-right'] + '</svg>') + '")');
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
const tel = () => innerWidth <= 750;

 
const hp = document.getElementById('haut-photo');
hp.alt = PAGE.haut.alt;
hp.srcset = [960, 1440, 1920, 2400].map((l) => MEDIA(PAGE.haut.photo, l, Math.round(l * 0.42)) + ' ' + l + 'w').join(', ');
hp.sizes = '100vw';
hp.src = MEDIA(PAGE.haut.photo, 1920, 806);
 
const sommaire = document.getElementById('sommaire');
sommaire.innerHTML = PAGE.sections.filter((s) => s.titre).map((s, i) => '<a href="#' + s.id + '"><span class="som-n" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span><span class="som-t">' + esc(s.court) + '</span><svg class="ico som-f" viewBox="0 0 24 24" aria-hidden="true">' + ICO['arrow-down'] + '</svg></a>').join('');
const marquerEtape = (id) => sommaire.querySelectorAll('a').forEach((a) => { if (a.hash === '#' + id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
sommaire.addEventListener('click', (e) => { const a = e.target.closest('a'); if (a) marquerEtape(a.hash.slice(1)); });
if (location.hash) marquerEtape(location.hash.slice(1));

 
const mp = document.getElementById('my-photo');
mp.alt = PAGE.mythique.alt;
mp.srcset = MEDIA(PAGE.mythique.photo, 600, 640) + ' 600w, ' + MEDIA(PAGE.mythique.photo, 960, 1024) + ' 960w';
mp.sizes = '(max-width:750px) 92vw, 40vw';
mp.src = MEDIA(PAGE.mythique.photo, 600, 640);
document.getElementById('my-texte').innerHTML = PAGE.mythique.p.map((p) => '<p>' + T(p) + '</p>').join('');
document.getElementById('record-txt').innerHTML = T(PAGE.mythique.record);

 
const H = PAGE.histoire;
document.getElementById('hi-txt').innerHTML = '<p class="hi-lead">' + T(H.lead) + '</p>' + H.lignes.map((l) => '<p>' + T(l) + '</p>').join('');
[['vg-img', 0], ['vd-img', 1]].forEach(([id, k]) => { const im = document.getElementById(id), v = H.vignettes[k]; im.alt = v.alt; im.src = MEDIA(v.photo, 500, 500, v.fp); });

 
const FAITS = PAGE.faits;
const frise = document.getElementById('fm-frise'), contenu = document.getElementById('fm-contenu');
frise.innerHTML = '<span class="fm-ligne" id="fm-ligne" aria-hidden="true"></span>' + FAITS.map((f, i) =>
  '<button type="button" role="tab" class="fm-rang fm-rang--' + (i % 2 ? 'd' : 'g') + '" id="an-' + f.annee + '" aria-controls="fm-contenu" aria-selected="false" tabindex="-1"><span class="fm-point" aria-hidden="true"></span><span class="fm-trait" aria-hidden="true"></span><span class="fm-an">' + f.annee + '</span></button>').join('');
const rangs = [...frise.querySelectorAll('.fm-rang')];
let faitCourant = -1;
function montrerFait(i, focus) {
  const f = FAITS[i];
  rangs.forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
  contenu.setAttribute('aria-labelledby', 'an-' + f.annee);
  contenu.innerHTML = '<div class="fm-annee" aria-hidden="true">' + f.annee + '</div><h3 class="fm-titre">' + T(f.titre) + '</h3>' +
    '<div class="fm-diapo" data-i="0">' + f.images.map((im, k) => '<img src="' + MEDIA(im, 1100, 619) + '" alt="' + f.annee + ', photo d’archives' + (f.images.length > 1 ? ' (' + (k + 1) + ' sur ' + f.images.length + ')' : '') + '" decoding="async"' + (k ? ' loading="lazy"' : ' class="est-la"') + '>').join('') +
      (f.images.length > 1 ? '<button type="button" class="fleche fleche--p" data-d="-1" aria-label="Photo précédente">' + pic('chevron-left') + '</button><button type="button" class="fleche fleche--n" data-d="1" aria-label="Photo suivante">' + pic('chevron-right') + '</button><div class="points" aria-hidden="true">' + f.images.map((_, k) => '<i' + (k ? '' : ' class="on"') + '></i>').join('') + '</div>' : '') +
    '</div><div class="fm-desc">' + f.items.map((it) => '<p class="fm-item">' + (it.b ? '<b>' + T(it.b) + '</b> ' : '') + T(it.t) + '</p>').join('') + '</div>';
  if (faitCourant >= 0) { contenu.classList.remove('entre'); void contenu.offsetWidth; contenu.classList.add('entre'); }
  faitCourant = i;
  const diapo = contenu.querySelector('.fm-diapo'), imgs = [...diapo.querySelectorAll('img')], pts = [...diapo.querySelectorAll('.points i')];
  diapo.querySelectorAll('.fleche').forEach((b) => b.addEventListener('click', () => {
    const k = (+diapo.dataset.i + +b.dataset.d + imgs.length) % imgs.length;
    diapo.dataset.i = k;
    imgs.forEach((im, j) => im.classList.toggle('est-la', j === k));
    pts.forEach((p, j) => p.classList.toggle('on', j === k));
  }));
  if (focus) rangs[i].focus();
}
rangs.forEach((b, i) => {
  b.addEventListener('click', () => montrerFait(i));
  b.addEventListener('keydown', (e) => {
    const d = /ArrowDown|ArrowRight/.test(e.key) ? 1 : /ArrowUp|ArrowLeft/.test(e.key) ? -1 : 0;
    if (d) { e.preventDefault(); montrerFait((i + d + rangs.length) % rangs.length, true); }
  });
});
montrerFait(0);
 
quandCharge(() => FAITS.forEach((f) => { const im = new Image(); im.src = MEDIA(f.images[0], 1100, 619); }));



const RO = PAGE.origins;
const nbVoulu = +new URLSearchParams(location.search).get('videos') || 0;
const VIDEOS = nbVoulu > RO.videos.length ? Array.from({ length: nbVoulu }, (_, i) => RO.videos[i % RO.videos.length]) : RO.videos;
document.getElementById('ro-logo').src = RO.logo;
document.getElementById('ro-rail').innerHTML = VIDEOS.map((v, i) =>
  '<li class="ro-carte" data-i="' + i + '"><div class="ro-cadre">' +
    '<img src="https://static.wixstatic.com/media/' + v.affiche + '/v1/fill/w_480,h_853,al_c,q_78,enc_auto/x.jpg" alt="Rhum Origins ' + v.n + ' : ' + esc(v.q) + '" loading="lazy" decoding="async" width="480" height="853">' +
    '<button type="button" class="ro-lire" aria-label="Lire la vidéo Rhum Origins ' + v.n + ' : ' + esc(v.q) + '"><span class="ro-rond">' + pic('play') + '</span></button>' +
  '</div></li>').join('');
document.querySelectorAll('.ro-carte').forEach((c) => c.querySelector('.ro-lire').addEventListener('click', () => {
  document.querySelectorAll('.ro-carte.joue').forEach((x) => { const vid = x.querySelector('video'); if (vid) { vid.pause(); vid.remove(); } x.classList.remove('joue'); });
  const v = VIDEOS[+c.dataset.i], vid = document.createElement('video');
  vid.src = 'https://video.wixstatic.com/video/' + v.video + '/720p/mp4/file.mp4';
  vid.poster = c.querySelector('img').src;
  vid.controls = true; vid.playsInline = true; vid.preload = 'auto';
  vid.setAttribute('aria-label', 'Rhum Origins ' + v.n + ' : ' + v.q);
  c.querySelector('.ro-cadre').appendChild(vid);
  c.classList.add('joue');
  vid.play().catch(() => {});
  vid.focus();
}));
 
if (VIDEOS.length > 4) {
  const rail = document.getElementById('ro-rail'), roPrec = document.getElementById('ro-prec'), roSuiv = document.getElementById('ro-suiv');
  document.getElementById('rhum-origins').classList.add('defile');
  const pas = () => { const c = rail.querySelector('.ro-carte'); return c ? c.offsetWidth + (parseFloat(getComputedStyle(rail).columnGap) || 0) : rail.clientWidth / 4; };
  const bornes = () => { const fin = rail.scrollWidth - rail.clientWidth; roPrec.disabled = rail.scrollLeft <= 2; roSuiv.disabled = rail.scrollLeft >= fin - 2; };
  roPrec.addEventListener('click', () => rail.scrollBy({ left: -pas(), behavior: reduit ? 'auto' : 'smooth' }));
  roSuiv.addEventListener('click', () => rail.scrollBy({ left: pas(), behavior: reduit ? 'auto' : 'smooth' }));
  rail.addEventListener('scroll', bornes, { passive: true });
  addEventListener('resize', bornes);
  bornes();
}

 
document.getElementById('pa-etapes').innerHTML = PAGE.parcours.map((e, i) => '<p class="pa-etape" data-i="' + i + '" tabindex="0">' + T(e.t) + '</p>').join('');

 
const MF = PAGE.manifeste;
document.getElementById('mf-intro').innerHTML = T(MF.intro);
const mfCartes = document.getElementById('mf-cartes');
mfCartes.innerHTML = MF.cartes.map((c, i) =>
  '<div class="mf-carte" data-i="' + i + '" data-img="0">' +
    '<div class="mf-v" aria-hidden="true"><span>' + esc(c.titre) + '</span></div>' +
    '<div class="mf-corps">' + c.images.map((im, k) => '<img class="mf-img' + (k ? '' : ' est-la') + '" ' + (i === 0 && k === 0 ? '' : 'data-') + 'src="' + MEDIA(im, 1100, 660) + '" alt="' + esc(c.titre) + ', photo ' + (k + 1) + ' sur ' + c.images.length + '" loading="lazy" decoding="async">').join('') +
      '<div class="mf-texte"><h3 class="titre">' + esc(c.titre) + '</h3><p>' + T(c.texte) + '</p></div>' +
      (c.images.length > 1 ? '<div class="mf-points" aria-hidden="true">' + c.images.map((_, k) => '<i' + (k ? '' : ' class="on"') + '></i>').join('') + '</div><button type="button" class="fleche fleche--p" data-d="-1" aria-label="Photo précédente">' + pic('chevron-left') + '</button><button type="button" class="fleche fleche--n" data-d="1" aria-label="Photo suivante">' + pic('chevron-right') + '</button>' : '') +
    '</div></div>').join('');
const mfListe = [...mfCartes.querySelectorAll('.mf-carte')];
let mfEpingle = 0, mfMinuteur = 0;
const survol = matchMedia('(hover: hover) and (min-width: 751px)');
const chargerImg = (im) => { if (im && im.dataset.src) { im.src = im.dataset.src; im.removeAttribute('data-src'); } };
function ouvrirCarte(i) {
  mfListe.forEach((c, k) => {
    const o = k === i;
    c.classList.toggle('ouverte', o);
    c.setAttribute('role', o ? 'group' : 'button');
    c.setAttribute('aria-label', MF.cartes[k].titre);
    if (o) { c.removeAttribute('tabindex'); c.removeAttribute('aria-expanded'); } else { c.tabIndex = 0; c.setAttribute('aria-expanded', 'false'); }
    c.querySelector('.mf-corps').setAttribute('aria-hidden', String(!o));
    c.querySelectorAll('.fleche').forEach((b) => { b.tabIndex = o ? 0 : -1; });
    if (o) chargerImg(c.querySelectorAll('.mf-img')[+c.dataset.img]);
  });
}
mfListe.forEach((c, i) => {
  c.addEventListener('mouseenter', () => { if (!survol.matches) return; clearTimeout(mfMinuteur); mfMinuteur = setTimeout(() => ouvrirCarte(i), 90); });
  c.addEventListener('click', (e) => { if (e.target.closest('.fleche')) return; mfEpingle = i; ouvrirCarte(i); });
  c.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && !c.classList.contains('ouverte')) { e.preventDefault(); mfEpingle = i; ouvrirCarte(i); } });
  const imgs = [...c.querySelectorAll('.mf-img')], pts = [...c.querySelectorAll('.mf-points i')];
  c.querySelectorAll('.fleche').forEach((b) => b.addEventListener('click', () => {
    const k = (+c.dataset.img + +b.dataset.d + imgs.length) % imgs.length;
    c.dataset.img = k; chargerImg(imgs[k]); chargerImg(imgs[(k + 1) % imgs.length]);
    imgs.forEach((im, j) => im.classList.toggle('est-la', j === k));
    pts.forEach((p, j) => p.classList.toggle('on', j === k));
  }));
});
mfCartes.addEventListener('mouseleave', () => { if (!survol.matches) return; clearTimeout(mfMinuteur); mfMinuteur = setTimeout(() => ouvrirCarte(mfEpingle), 120); });
ouvrirCarte(0);

 
const TE = PAGE.temoignages;
document.getElementById('te-portrait').innerHTML = TE.map((t, i) => '<img src="' + MEDIA(t.photo, 480, 480, t.fp) + '" alt="' + esc(t.l1.replace(/,.*$/, '')) + '"' + (i ? ' loading="lazy"' : ' class="on"') + ' decoding="async">').join('');
document.getElementById('te-diapos').innerHTML = TE.map((t, i) => '<figure class="te-diapo' + (i ? '' : ' on') + '" aria-hidden="' + (i > 0) + '"><blockquote class="te-cit"><p>' + T(t.cit) + '</p></blockquote><figcaption class="te-qui"><b>' + T(t.l1) + '</b><span>' + T(t.l2) + '</span></figcaption></figure>').join('');
document.getElementById('te-vignettes').innerHTML = TE.map((t, i) => '<li><button type="button" aria-label="' + esc(t.l1.replace(/,.*$/, '')) + '"' + (i ? '' : ' aria-current="true"') + '><img src="' + MEDIA(t.photo, 96, 96, t.fp) + '" alt="" loading="lazy" decoding="async"></button></li>').join('');
let teCourant = 0;
function montrerTemoin(i) {
  teCourant = (i + TE.length) % TE.length;
  document.querySelectorAll('#te-portrait img').forEach((im, k) => im.classList.toggle('on', k === teCourant));
  document.querySelectorAll('.te-diapo').forEach((d, k) => { d.classList.toggle('on', k === teCourant); d.setAttribute('aria-hidden', String(k !== teCourant)); });
  document.querySelectorAll('#te-vignettes button').forEach((b, k) => { if (k === teCourant) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
}
document.getElementById('te-prec').addEventListener('click', () => montrerTemoin(teCourant - 1));
document.getElementById('te-suiv').addEventListener('click', () => montrerTemoin(teCourant + 1));
document.querySelectorAll('#te-vignettes button').forEach((b, i) => b.addEventListener('click', () => montrerTemoin(i)));

 
document.querySelectorAll('.odo').forEach((o) => {
  o.innerHTML = [...o.dataset.txt].map((c) => '<span class="odo-c" data-d="' + c + '"><span class="odo-r">' + Array.from({ length: 30 }, (_, k) => '<i>' + (k % 10) + '</i>').join('') + '</span></span>').join('');
});
function rouler(boite) {
  boite.querySelectorAll('.odo-c').forEach((c, k) => {
    const r = c.firstChild;
    r.style.transition = reduit ? 'none' : 'transform ' + (1.3 + k * 0.18).toFixed(2) + 's cubic-bezier(.15,.7,.2,1) ' + (0.15 + k * 0.06).toFixed(2) + 's';
    r.style.transform = 'translateY(-' + (20 + +c.dataset.d) + 'em)';
  });
}
const record = document.getElementById('record');
new IntersectionObserver((es, obs) => es.forEach((e) => { if (e.isIntersecting) { obs.disconnect(); rouler(record); } }), { threshold: 0.6 }).observe(record);

 
function lisse(pts) {
  let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += 'C' + c1.map((v) => v.toFixed(1)).join(' ') + ' ' + c2.map((v) => v.toFixed(1)).join(' ') + ' ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
  }
  return d;
}
const fil = document.getElementById('fil'), filSvg = document.getElementById('fil-svg');
const vignettes = [document.getElementById('vignette-g'), document.getElementById('vignette-d')];
const coutures = [...fil.querySelectorAll('.couture')];







const LECTURE = 0.7, ALLURE = 0.12;
let route = null, jalons = null, yCourant = null, yCible = 0, boucle = 0, arme = false;
function tracerFil() {
  const R = fil.getBoundingClientRect(), haut = R.top + scrollY;
  if (tel()) {
    filSvg.innerHTML = ''; fil.classList.remove('fil--route'); route = null;
    const doc = (el) => { const r = el.getBoundingClientRect(); return { h: r.top + scrollY - haut, b: r.bottom + scrollY - haut, c: r.top + r.height / 2 + scrollY - haut }; };
    jalons = { haut, coutures: coutures.map(doc), vignettes: vignettes.map(doc) };
    return poserFil(true);
  }
  const pt = (el, fx, fy) => { const r = el.getBoundingClientRect(); return [r.left - R.left + r.width * fx, r.top - R.top + r.height * fy]; };
  const a = pt(record, 0.5, 1);
  const g = pt(document.getElementById('vignette-g'), 0.5, 0.5);
  const tx = document.getElementById('hi-txt').getBoundingClientRect();
  const creux = [tx.left - R.left + tx.width * 0.5, tx.bottom - R.top + 42];
  const dr = pt(document.getElementById('vignette-d'), 0.5, 0.5);
  const lg = document.getElementById('fm-ligne').getBoundingClientRect();
  const e = [lg.left - R.left + lg.width / 2, lg.top - R.top];
  const seuilH = document.getElementById('histoire').getBoundingClientRect().top - R.top;
   
  const bordTexte = tx.left - R.left;
  const pts = [a, [a[0] - 10, (a[1] + seuilH) / 2 + 20], g, [Math.min(g[0] + 40, bordTexte - 36), creux[1] - 30], [bordTexte + tx.width * 0.22, creux[1] + 6], creux, [(creux[0] + dr[0]) / 2, creux[1] + 4], dr, [e[0] + (dr[0] - e[0]) * 0.3, (dr[1] + e[1]) / 2 + 30], e];
  const d = lisse(pts);
  

  const depart = '<circle class="fil-depart" cx="' + a[0].toFixed(1) + '" cy="' + a[1].toFixed(1) + '" r="4.5"/>';
  filSvg.innerHTML = reduit ? '<path class="fil-trait" d="' + d + '"/>' + depart
    : '<defs><mask id="fil-m" maskUnits="userSpaceOnUse"><path class="fil-pointille" d="' + d + '"/></mask></defs><path class="fil-plein" d="' + d + '" mask="url(#fil-m)"/>' + depart;
  fil.classList.add('fil--route');
  if (reduit) { route = jalons = null; return; }
  

  const plein = filSvg.querySelector('.fil-plein'), L = plein.getTotalLength(), n = Math.max(40, Math.ceil(L / 6));
  const S = new Float64Array(n + 1), Y = new Float64Array(n + 1);
  for (let i = 0; i <= n; i++) {
    S[i] = L * i / n;
    const y = plein.getPointAtLength(S[i]).y;
    Y[i] = i ? Math.max(y, Y[i - 1] + ALLURE * (S[i] - S[i - 1])) : y;
  }
   
  const pops = [g, dr].map((c, k) => { const r = vignettes[k].offsetWidth / 2 + 4; for (let i = 0; i <= n; i++) { const p = plein.getPointAtLength(S[i]); if ((p.x - c[0]) ** 2 + (p.y - c[1]) ** 2 <= r * r) return S[i]; } return L; });
  const Lm = L + 2;
  plein.style.strokeDasharray = Lm + ' ' + Lm;
  route = { L, Lm, S, Y, pops, plein };
  jalons = { haut };
  poserFil(true);
}
 
function longueurA(y) {
  const { S, Y, L } = route, n = S.length - 1;
  if (y <= Y[0]) return 0;
  if (y >= Y[n]) return L;
  let a = 0, b = n;
  while (b - a > 1) { const m = (a + b) >> 1; if (Y[m] <= y) a = m; else b = m; }
  return S[a] + (S[b] - S[a]) * (y - Y[a]) / (Y[b] - Y[a]);
}
const hauteurLecture = () => scrollY + innerHeight * LECTURE - (jalons ? jalons.haut : 0);
 
function poserFil(net) {
  if (!jalons || reduit || !arme) return;
  yCible = hauteurLecture();
  if (net || yCourant === null) yCourant = yCible;
  const y = yCourant;
  if (route) {
    const s = longueurA(y), off = (route.Lm - s).toFixed(1);
    if (route.plein.style.strokeDashoffset !== off + 'px') route.plein.style.strokeDashoffset = off + 'px';
    route.pops.forEach((sp, k) => { if (s >= sp) sortir(vignettes[k], net); });
  } else {
    jalons.coutures.forEach((c, k) => { const t = Math.max(0, Math.min(1, (y - c.h) / (c.b - c.h))).toFixed(3); if (coutures[k].style.getPropertyValue('--trace') !== t) coutures[k].style.setProperty('--trace', t); });
    jalons.vignettes.forEach((v, k) => { if (y >= v.c) sortir(vignettes[k], net); });
  }
}


function sortir(v, net) {
  if (!arme || v.classList.contains('vue')) return;
  v.classList.add('vue');
  if (!net) sauter(v);
}




const REBOND = [[0, 0.6, 0], [0.5, 1.07, 1], [0.76, 0.98, 1], [1, 1, 1]];
function sauter(v) {
  let t0 = 0;
  const pas = (t) => {
    if (!t0) t0 = t;
    const k = Math.min(1, (t - t0) / 720);
    let i = 0;
    while (i < REBOND.length - 2 && k > REBOND[i + 1][0]) i++;
    const [ka, sa, oa] = REBOND[i], [kb, sb, ob] = REBOND[i + 1], e = 1 - Math.pow(1 - (k - ka) / (kb - ka), 3);
    v.style.transform = k < 1 ? 'scale(' + (sa + (sb - sa) * e).toFixed(4) + ')' : '';
    v.style.opacity = k < 1 ? (oa + (ob - oa) * e).toFixed(3) : '';
    if (k < 1) requestAnimationFrame(pas);
  };
  v.style.opacity = '0';
  v.style.transform = 'scale(.6)';
  requestAnimationFrame(pas);
}


let tPrec = 0;
function suivre(t) {
  boucle = 0;
  const dt = tPrec ? Math.min(100, t - tPrec) : 1000 / 60;
  yCible = hauteurLecture();
  const ecart = yCible - yCourant;
  yCourant = Math.abs(ecart) < 0.5 ? yCible : yCourant + ecart * (1 - Math.pow(0.76, dt * 60 / 1000));
  poserFil(false);
  if (yCourant !== yCible) { tPrec = t; boucle = requestAnimationFrame(suivre); } else tPrec = 0;
}
const auDefilement = () => { if (!boucle) boucle = requestAnimationFrame(suivre); };
 
function armerFil() {
  if (arme || reduit || !jalons) return;
  vignettes.forEach((v) => { if (v.getBoundingClientRect().top < innerHeight) v.classList.add('vue'); });
  arme = true;
  fil.classList.add('fil-arme');
  poserFil(true);
   
  new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { addEventListener('scroll', auDefilement, { passive: true }); if (Math.abs(hauteurLecture() - yCourant) > innerHeight) poserFil(true); else auDefilement(); }
    else { removeEventListener('scroll', auDefilement); cancelAnimationFrame(boucle); boucle = 0; tPrec = 0; poserFil(true); }
  }), { rootMargin: '10% 0px' }).observe(fil);
}

 
const LIEUX = { malo: [-2.02, 48.65], pap: [-61.53, 16.24] };
 
const APPROCHE = [[-60.98, 16.62], [-61.4, 16.58], [-61.72, 16.47], [-61.86, 16.33], [-61.86, 16.14], [-61.82, 15.98], [-61.72, 15.9], [-61.61, 15.92], [-61.53, 16.0], [-61.5, 16.12], [-61.53, 16.22]];
const FRANCE = { type: 'MultiPolygon', coordinates: GEO.france || [] };
const GWADA = { type: 'MultiPolygon', coordinates: GEO.guadeloupe || [] };
let TERRE = null;
async function terre() { await chargerGeo(); d3 = window.d3; topojson = window.topojson;
  if (!TERRE) { const t = await (await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json')).json(); TERRE = topojson.feature(t, t.objects.land); }
  return TERRE;
}
const f1 = (v) => v.toFixed(1);
const texte = (p, txt, cls, dx, dy, ancre) => '<text class="' + cls + '" x="' + f1(p[0] + (dx || 0)) + '" y="' + f1(p[1] + (dy || 0)) + '" text-anchor="' + (ancre || 'start') + '">' + txt + '</text>';
const hoteCarte = document.getElementById('carte-parcours');
let carte = null, etape = 0, fCourant = 0, anim = 0, carteVue = false;
async function dessinerCarte() {
  const T0 = await terre();
  hoteCarte.querySelectorAll('.c-svg,.chargement').forEach((x) => x.remove());
  const W = hoteCarte.clientWidth || 600, Ht = hoteCarte.clientHeight || 500, petit = W < 480;
  const proj = d3.geoMercator().fitExtent([[petit ? 10 : 24, petit ? 24 : 60], [W - (petit ? 10 : 20), Ht - (petit ? 20 : 36)]], { type: 'MultiPoint', coordinates: [[-66, 11], [9, 52]] });
  const chemin = d3.geoPath(proj), P = (ll) => proj(ll);
  const routeD = chemin({ type: 'LineString', coordinates: [LIEUX.malo, LIEUX.pap] });
  const m = P(LIEUX.malo), g = P(LIEUX.pap), mil = P(d3.geoInterpolate(LIEUX.malo, LIEUX.pap)(0.5));
  let medaillon = '';
  if (!petit) {
    const R = Math.round(Math.max(52, Math.min(84, Ht * 0.14))), cx = Math.max(R + 16, g[0] + R * 0.2), cy = Math.max(R + 40, g[1] - R - 70);
    const pg = d3.geoMercator().fitExtent([[cx - R * 0.74, cy - R * 0.66], [cx + R * 0.74, cy + R * 0.66]], GWADA);
    medaillon = '<line x1="' + f1(g[0]) + '" y1="' + f1(g[1] - 11) + '" x2="' + f1(cx - R * 0.2) + '" y2="' + f1(cy + R * 0.98) + '" stroke="#fff" stroke-width="1.4" stroke-opacity=".8"/>' +
      '<circle cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + R + '" fill="#4DA8DE" stroke="#fff" stroke-width="2"/>' +
      '<path d="' + d3.geoPath(pg)(GWADA) + '" fill="#FCDD00"/>' +
      '<path d="' + lisse(APPROCHE.map(pg)) + '" fill="none" stroke="#191D31" stroke-width="1.6" stroke-dasharray="4 4"/>' +
      texte([cx, cy - R - 12], 'Pointe-à-Pitre', 'c-lieu', 0, 0, 'middle');
  }
  const zones = PAGE.parcours.map((e, i) => { const p = P(e.zone.ll), r = Math.max(petit ? 22 : 34, W * (i === 1 ? 0.085 : 0.06)); return '<circle class="c-zone" data-i="' + i + '" cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="' + f1(r) + '"/>'; }).join('');
   
  const zlieux = petit ? '' : PAGE.parcours.map((e, i) => { const p = P(e.zone.ll), r = Math.max(34, W * (i === 1 ? 0.085 : 0.06)); return texte([p[0] + (i === 0 ? r * 0.4 : 0), p[1] + (i === 1 ? -r - 8 : r + 16)], esc(e.zone.nom), 'c-zlieu', 0, 0, i === 0 ? 'end' : 'middle').replace('class="c-zlieu"', 'class="c-zlieu" data-i="' + i + '"'); }).join('');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'c-svg');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + Ht);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Carte de l’Atlantique Nord : la route de Saint-Malo à Pointe-à-Pitre, 3 542 milles nautiques');
   
  svg.innerHTML = '<defs><linearGradient id="c-mer" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1E4876"/><stop offset="1" stop-color="#2F6FA6"/></linearGradient>' +
    '<mask id="c-m" maskUnits="userSpaceOnUse"><path class="c-masque" d="' + routeD + '" fill="none" stroke="#fff" stroke-width="10"/></mask></defs>' +
    '<rect width="' + W + '" height="' + Ht + '" fill="url(#c-mer)"/>' + zones +
    '<path class="c-terre" d="' + chemin(T0) + '"/><path class="c-france" d="' + chemin(FRANCE) + '"/>' +
    (petit ? '' : texte(P([-36, 24]), 'Océan Atlantique', 'c-lieu--mer', 0, 0, 'middle')) +
    '<path class="c-route" d="' + routeD + '"/><path class="c-fait" d="' + routeD + '" mask="url(#c-m)"/>' +
    texte([mil[0] + 18, mil[1] + (petit ? 26 : 34)], '3 542 MN', 'c-distance') + texte([mil[0] + 20, mil[1] + (petit ? 42 : 54)], '≈ 6 560 km', 'c-distance-km') +
    zlieux + medaillon +
    '<circle class="c-anneau" cx="' + f1(m[0]) + '" cy="' + f1(m[1]) + '" r="9"/><circle class="c-anneau" cx="' + f1(g[0]) + '" cy="' + f1(g[1]) + '" r="9"/>' +
    texte(m, 'Saint-Malo', 'c-lieu', -14, -16, 'end') + texte(g, 'Guadeloupe', 'c-lieu', 16, 24) +
    '<circle class="c-bateau" r="7" cx="' + f1(m[0]) + '" cy="' + f1(m[1]) + '"/>';
  hoteCarte.prepend(svg);
  const masque = svg.querySelector('.c-masque'), L = masque.getTotalLength(), bateau = svg.querySelector('.c-bateau');
  masque.style.strokeDasharray = L + ' ' + L;
  const poser = (f) => { masque.style.strokeDashoffset = String(L * (1 - f)); const p = masque.getPointAtLength(L * f); bateau.setAttribute('cx', f1(p.x)); bateau.setAttribute('cy', f1(p.y)); };
  carte = { svg, poser };
  poser(fCourant);
  allumer(etape, true);
}
 
function allumer(i, net) {
  etape = i;
  document.querySelectorAll('.pa-etape').forEach((p, k) => p.classList.toggle('est-la', k === i));
  if (!carte) return;
  carte.svg.querySelectorAll('.c-zone,.c-zlieu').forEach((z) => z.classList.toggle('est-la', +z.dataset.i === i));
  if (!carteVue) return;
  const cible = PAGE.parcours[i].f, depart = fCourant;
  cancelAnimationFrame(anim);
  if (net || reduit) { fCourant = cible; carte.poser(cible); return; }
  const t0 = performance.now(), duree = 900 + Math.abs(cible - depart) * 1800;
  const tic = (t) => { const k = Math.min(1, (t - t0) / duree), e = 1 - Math.pow(1 - k, 3); fCourant = depart + (cible - depart) * e; carte.poser(fCourant); if (k < 1) anim = requestAnimationFrame(tic); };
  anim = requestAnimationFrame(tic);
}
document.querySelectorAll('.pa-etape').forEach((p) => {
  const i = +p.dataset.i;
  p.addEventListener('mouseenter', () => { if (!tel()) allumer(i); });
  p.addEventListener('focus', () => allumer(i));
});
 
const obsEtapes = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && !tel()) allumer(+e.target.dataset.i); }), { rootMargin: '-44% 0px -44% 0px' });
document.querySelectorAll('.pa-etape').forEach((p) => obsEtapes.observe(p));
new IntersectionObserver((es, obs) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  obs.disconnect(); carteVue = true;
  if (tel()) { etape = 2; }
  const go = () => { if (!carte) return setTimeout(go, 200); allumer(etape); };
  go();
}), { threshold: 0.35 }).observe(hoteCarte);


 
const q = new URLSearchParams(location.search);
if (q.get('entete') === 'non') document.body.classList.add('sans-entete');
 
if (!tel()) fil.classList.add('fil--route');
document.fonts.ready.then(() => { tracerFil(); armerFil(); quandProche(hoteCarte, () => dessinerCarte().catch((e) => console.error('carte', e))); });
let largeur = innerWidth, attente = 0;
addEventListener('resize', () => { clearTimeout(attente); attente = setTimeout(() => { tracerFil(); if (Math.abs(innerWidth - largeur) >= 40) { largeur = innerWidth; dessinerCarte(); } }, 250); });
new ResizeObserver(() => { clearTimeout(attente); attente = setTimeout(tracerFil, 120); }).observe(fil);

  }

  function valide(D) {
    return !!(D && Array.isArray(D.faits) && D.faits.length && D.manifeste && Array.isArray(D.manifeste.cartes) && D.manifeste.cartes.length &&
      D.origins && Array.isArray(D.origins.videos) && Array.isArray(D.sections) && D.haut && D.mythique && D.histoire && Array.isArray(D.parcours) && Array.isArray(D.temoignages));
  }

  

  function brancherAncres(page) {
    const som = page.querySelector('#sommaire');
    if (som) som.addEventListener('click', (ev) => {
      const a = ev.target.closest('a[href^="#"]');
      if (!a) return;
      let cible = null;
      try { cible = page.querySelector(a.getAttribute('href')); } catch (e) { cible = null; }
      if (!cible) return;
      ev.preventDefault();
      const doux = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      cible.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
      try { history.replaceState(null, '', a.getAttribute('href')); } catch (e) {   }
    });
    const h = window.location.hash;
    if (h && h.length > 1) {
      let c = null;
      try { c = page.querySelector(h); } catch (e) { c = null; }
      if (c) polices().then(() => setTimeout(() => c.scrollIntoView({ block: 'start' }), 60));
    }
  }

  class RdrCourse extends HTMLElement {
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
        if (!this.firstChild) this.innerHTML = "<div class=\"rco-attente\" aria-hidden=\"true\"><div class=\"rco-sq-haut\"><div class=\"rco-sq-trame\"><i class=\"rco-sq-l rco-sq-k\"></i><i class=\"rco-sq-l rco-sq-t\"></i><i class=\"rco-sq-l rco-sq-t rco-sq-t2\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p1\"></i><i class=\"rco-sq-l rco-sq-p\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p3\"></i></div></div><div class=\"rco-sq-trame rco-sq-sec\"><i class=\"rco-sq-l rco-sq-k\"></i><i class=\"rco-sq-l rco-sq-t\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p1\"></i><i class=\"rco-sq-l rco-sq-p\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p3\"></i></div><div class=\"rco-sq-trame rco-sq-cartes\"><i class=\"rco-sq-c\"></i><i class=\"rco-sq-c\"></i><i class=\"rco-sq-c\"></i></div><div class=\"rco-sq-trame rco-sq-sec\"><i class=\"rco-sq-l rco-sq-k\"></i><i class=\"rco-sq-l rco-sq-t\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p1\"></i><i class=\"rco-sq-l rco-sq-p\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p3\"></i></div></div>";
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      const en = this._lang() === 'en';
       
      const sansOrigins = !D.origins.videos.length;
      if (sansOrigins) D = Object.assign({}, D, { sections: D.sections.filter((s) => s.id !== 'rhum-origins') });
      this.innerHTML = '<div class="rco-page">' + PAGE_HTML + '</div>';
      const page = this.firstElementChild;
      if (sansOrigins) { const ro = page.querySelector('#rhum-origins'); if (ro) ro.hidden = true; }
      if (en) { traduire(this); prefixerLiens(this); }
      try { demarrer(D, this, page); } catch (e) { console.error('[rdr-course]', e); }
      brancherAncres(page);
      if (en) {
        traduire(this); prefixerLiens(this);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (m.type === 'characterData') { traduireTexte(m.target); return; }
          m.addedNodes.forEach((n) => { if (n.nodeType === 1) { traduire(n); prefixerLiens(n); } else if (n.nodeType === 3) traduireTexte(n); });
        }));
        this._obs.observe(this, { childList: true, subtree: true, characterData: true });
      }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const lang = this._lang();
      const u = (this.getAttribute('source') || (lang === 'en' ? SOURCE_EN : SOURCE)) + '?lang=' + lang;
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (valide(j)) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rco-vide"><h3>' + (en ? 'This page will be back in a moment' : 'La page revient dans un instant') + '</h3><p>' + (en ? 'Its content could not be loaded.' : 'Son contenu n’a pas pu être chargé.') + '</p><button type="button">' + (en ? 'Try again' : 'Réessayer') + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = "<div class=\"rco-attente\" aria-hidden=\"true\"><div class=\"rco-sq-haut\"><div class=\"rco-sq-trame\"><i class=\"rco-sq-l rco-sq-k\"></i><i class=\"rco-sq-l rco-sq-t\"></i><i class=\"rco-sq-l rco-sq-t rco-sq-t2\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p1\"></i><i class=\"rco-sq-l rco-sq-p\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p3\"></i></div></div><div class=\"rco-sq-trame rco-sq-sec\"><i class=\"rco-sq-l rco-sq-k\"></i><i class=\"rco-sq-l rco-sq-t\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p1\"></i><i class=\"rco-sq-l rco-sq-p\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p3\"></i></div><div class=\"rco-sq-trame rco-sq-cartes\"><i class=\"rco-sq-c\"></i><i class=\"rco-sq-c\"></i><i class=\"rco-sq-c\"></i></div><div class=\"rco-sq-trame rco-sq-sec\"><i class=\"rco-sq-l rco-sq-k\"></i><i class=\"rco-sq-l rco-sq-t\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p1\"></i><i class=\"rco-sq-l rco-sq-p\"></i><i class=\"rco-sq-l rco-sq-p rco-sq-p3\"></i></div></div>"; this._chercher(); });
    }
  }
  customElements.define("rdr-course", RdrCourse);
})();
})();
