/* rdr-elements partenaires | source route-du-rhum 6bcc305 | rdr-partenaires.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["partenaires"]="6bcc305";performance.mark("rdr-elements:partenaires")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-partenaires")) return;
  const CSS = "rdr-partenaires{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-partenaires .rpa-page{display:block}\nrdr-partenaires .rpa-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-partenaires .rpa-sq-haut{display:flex;align-items:center;min-height:clamp(520px,400px + 18svh,580px);background:#00676E}\nrdr-partenaires .rpa-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-partenaires .rpa-sq-l,rdr-partenaires .rpa-sq-c{position:relative;display:block;overflow:hidden}\nrdr-partenaires .rpa-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-partenaires .rpa-sq-k{width:120px;height:11px}\nrdr-partenaires .rpa-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-partenaires .rpa-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-partenaires .rpa-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-partenaires .rpa-sq-p1{margin-top:30px}\nrdr-partenaires .rpa-sq-p3{width:min(380px,62%)}\nrdr-partenaires .rpa-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-partenaires .rpa-sq-sec .rpa-sq-l{background:rgba(14,17,29,.08)}\nrdr-partenaires .rpa-sq-sec .rpa-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-partenaires .rpa-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-partenaires .rpa-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-partenaires .rpa-sq-l::after,rdr-partenaires .rpa-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rpa-sq-luire 1.6s ease-in-out infinite}\nrdr-partenaires .rpa-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-partenaires .rpa-sq-sec .rpa-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-partenaires .rpa-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rpa-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-partenaires .rpa-sq-haut{min-height:870px}rdr-partenaires .rpa-sq-cartes{grid-template-columns:1fr}rdr-partenaires .rpa-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-partenaires .rpa-sq-l::after,rdr-partenaires .rpa-sq-c::after{animation:none;display:none}}\n@media (min-width:751px) and (max-width:1000px){rdr-partenaires .rpa-sq-haut{min-height:900px}}\nrdr-partenaires .rpa-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-partenaires .rpa-vide h3{margin:0;font-size:22px}\nrdr-partenaires .rpa-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-partenaires .rpa-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-partenaires{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.72);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px);--entete:175px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;--tuile:16px 4px 16px 4px; --mur-l:204px;--mur-t:122px;--mur-g:18px;--mur-ph:22px;--mur-pb:40px;--mur-h:calc(var(--mur-t) + var(--mur-ph) + var(--mur-pb)); --colle:56px;--barre-h:68px; --air:1.5; --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-partenaires{--air:1.3;--entete:120px;--marge:20px;--mur-l:146px;--mur-t:88px;--mur-g:12px;--mur-ph:16px;--mur-pb:30px;--barre-h:60px;--colle:60px}\n}\nrdr-partenaires *{box-sizing:border-box}\nrdr-partenaires{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-partenaires img{display:block;max-width:100%}\nrdr-partenaires a{color:inherit}\nrdr-partenaires h1,rdr-partenaires h2,rdr-partenaires h3,rdr-partenaires p,rdr-partenaires figure,rdr-partenaires ul{margin:0}\nrdr-partenaires ul{padding:0;list-style:none}\nrdr-partenaires button,rdr-partenaires input{font:inherit;color:inherit}\nrdr-partenaires .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-partenaires .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-partenaires .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-partenaires .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-partenaires .nw{white-space:nowrap}\nrdr-partenaires .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-partenaires .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-partenaires .btn:hover .ico--glisse{transform:translateX(3px)}}\nrdr-partenaires .btn:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-partenaires .btn--marine{background:var(--marine);border-color:var(--marine);color:#fff}@media (hover:hover) and (pointer:fine){rdr-partenaires .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-partenaires .btn--grand{min-height:58px;padding:12px 22px;gap:14px;font-size:16px}\nrdr-partenaires .btn--grand .ico{width:20px;height:20px}\nrdr-partenaires .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(28px,5vh,56px) 0 calc(var(--mur-ph) + var(--mur-t) / 2 + clamp(26px,4.4vh,46px))}\nrdr-partenaires .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-partenaires .haut-grille{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:clamp(28px,5vw,84px);align-items:center}\nrdr-partenaires .haut h1{font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-partenaires .haut-txt p{margin-top:clamp(9px,1.4vh,14px);max-width:60ch;font-size:clamp(15px,1.08vw,16px);line-height:1.66;font-weight:500;color:rgba(255,255,255,.9);text-wrap:pretty}\nrdr-partenaires .haut-txt h1+p{margin-top:clamp(14px,2.2vh,22px);font-size:clamp(16px,1.25vw,18px);line-height:1.62;font-weight:600;color:#fff}\nrdr-partenaires .signe{display:inline-flex;align-items:center;gap:14px;min-height:48px;margin-top:clamp(16px,2.6vh,26px);padding:6px 16px 6px 14px;border:1px solid rgba(255,255,255,.3);border-radius:var(--angle-p);color:#fff;text-decoration:none;font:700 10.5px/1.2 var(--police);letter-spacing:.16em;text-transform:uppercase;transition:background .2s,border-color .2s}@media (hover:hover) and (pointer:fine){rdr-partenaires .signe:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.6)}}\nrdr-partenaires .signe:focus-visible{outline:3px solid var(--jaune);outline-offset:3px}\nrdr-partenaires .signe img{height:30px;width:auto}\nrdr-partenaires .haut-photo{position:relative;aspect-ratio:4/3;border-radius:var(--carte);overflow:hidden;background:#0B5359;border:6px solid rgba(255,255,255,.95);box-shadow:0 34px 54px -30px rgba(10,20,30,.7);transform:rotate(1.4deg)}\nrdr-partenaires .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 55%}\nrdr-partenaires .mur{position:relative;z-index:3;height:var(--mur-h);margin-top:calc(-1 * (var(--mur-ph) + var(--mur-t) / 2));overflow:hidden;-webkit-mask:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}\nrdr-partenaires .mur-piste{display:flex;gap:var(--mur-g);width:max-content;padding:var(--mur-ph) 0 var(--mur-pb);animation:rpa-defile var(--duree,150s) linear infinite}@media (hover:hover) and (pointer:fine){rdr-partenaires .mur:hover .mur-piste{animation-play-state:paused}}\n@keyframes rpa-defile{to{transform:translateX(calc(-50% - var(--mur-g) / 2))}}\nrdr-partenaires .mur a{flex:none;display:flex;align-items:center;justify-content:center;width:var(--mur-l);height:var(--mur-t);background:#fff;border-radius:var(--tuile);box-shadow:0 16px 28px -20px rgba(25,29,49,.55),0 0 0 1px rgba(25,29,49,.05);transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-partenaires .mur a:hover{transform:translateY(-3px)}}\nrdr-partenaires .mur img{width:84%;height:86%;object-fit:contain}\nrdr-partenaires .barre{position:sticky;top:var(--colle);z-index:20;margin-top:clamp(6px,1.4vh,16px);background:rgba(255,255,255,.94);-webkit-backdrop-filter:saturate(1.4) blur(10px);backdrop-filter:saturate(1.4) blur(10px);border-bottom:1px solid transparent;transition:border-color .2s,box-shadow .2s}\nrdr-partenaires .barre.collee{border-bottom-color:var(--filet);box-shadow:0 10px 24px -20px rgba(25,29,49,.45)}\nrdr-partenaires .barre-in{display:flex;align-items:center;gap:14px;min-height:var(--barre-h)}\nrdr-partenaires .puces{flex:1;min-width:0;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 2px}\nrdr-partenaires .puces::-webkit-scrollbar{display:none}\nrdr-partenaires .puce{flex:none;display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:0 14px;border:1.5px solid var(--filet);border-radius:var(--angle-p);background:#fff;color:var(--encre);text-decoration:none;font:700 13px/1 var(--police);white-space:nowrap;transition:background .2s,border-color .2s,color .2s}\nrdr-partenaires .puce b{font-weight:800;font-size:11.5px;color:var(--vert2);font-variant-numeric:tabular-nums}@media (hover:hover) and (pointer:fine){rdr-partenaires .puce:hover{border-color:var(--vert1)}}\nrdr-partenaires .puce:focus-visible{outline:3px solid var(--marine);outline-offset:2px}\nrdr-partenaires .puce[aria-current=\"true\"]{background:var(--vert1);border-color:var(--vert1);color:#fff}\nrdr-partenaires .puce[aria-current=\"true\"] b{color:var(--jaune)}\nrdr-partenaires .puce.eteinte{opacity:.4;pointer-events:none}\nrdr-partenaires .chercher{flex:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;width:46px;min-height:44px;padding:0;border:1.5px solid var(--marine);border-radius:var(--angle-p);background:var(--marine);color:#fff;font:700 13px/1 var(--police);cursor:pointer;transition:background .2s,border-color .2s}@media (hover:hover) and (pointer:fine){rdr-partenaires .chercher:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-partenaires .chercher:focus-visible{outline:3px solid var(--jaune);outline-offset:2px}\nrdr-partenaires .chercher .ico{width:18px;height:18px;stroke-width:2.4}\nrdr-partenaires .chercher .mot{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-partenaires .puces.deborde{-webkit-mask:linear-gradient(90deg,#000 calc(100% - 44px),transparent);mask:linear-gradient(90deg,#000 calc(100% - 44px),transparent)}\nrdr-partenaires .recherche{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s var(--ease)}\nrdr-partenaires .recherche.ouverte{grid-template-rows:1fr}\nrdr-partenaires .recherche>div{overflow:hidden}\nrdr-partenaires .recherche label{position:relative;display:block;padding:2px 0 14px}\nrdr-partenaires .recherche .ico{position:absolute;left:16px;top:15px;width:18px;height:18px;color:var(--encre2);pointer-events:none}\nrdr-partenaires .recherche input{-webkit-appearance:none;appearance:none;width:100%;height:48px;padding:0 48px 0 46px;border:1.5px solid var(--filet);border-radius:var(--angle-p);background:#fff;font:500 15px var(--police);color:var(--encre)}\nrdr-partenaires .recherche input::placeholder{color:rgba(25,29,49,.5)}\nrdr-partenaires .recherche input::-webkit-search-cancel-button{-webkit-appearance:none;display:none}\nrdr-partenaires .recherche input:focus{outline:none;border-color:var(--vert1);box-shadow:0 0 0 3px rgba(0,103,110,.16)}\nrdr-partenaires .effacer{position:absolute;right:2px;top:4px;width:44px;height:44px;display:grid;place-items:center;border:0;border-radius:var(--angle-p);background:transparent;cursor:pointer;color:var(--encre2)}\nrdr-partenaires .effacer .ico{position:static;width:18px;height:18px}\nrdr-partenaires .effacer:focus-visible{outline:3px solid var(--marine);outline-offset:-3px}\nrdr-partenaires .rang{position:relative;padding:calc(clamp(38px,6vh,70px) * var(--air)) 0;scroll-margin-top:calc(var(--colle) + var(--barre-h))}\nrdr-partenaires .rang+.rang:not(.rang--teinte):not(.apres-teinte){padding-top:calc(clamp(14px,2.4vh,26px) * var(--air))}\nrdr-partenaires .rang--teinte{background:var(--teinte)}\nrdr-partenaires .rang[hidden],rdr-partenaires [data-q][hidden]{display:none !important}\nrdr-partenaires .rang-tete{display:flex;align-items:baseline;gap:clamp(12px,1.4vw,18px);margin-bottom:clamp(20px,3.4vh,34px)}\nrdr-partenaires .rang-num{flex:none;font:italic 400 clamp(20px,1.8vw,26px)/1 var(--titre);color:var(--vert2);font-variant-numeric:tabular-nums}\nrdr-partenaires .rang-titre{font-size:clamp(26px,min(2.7vw,5.2vh),40px);color:var(--marine);text-wrap:balance}\nrdr-partenaires .rang-nb{margin-left:auto;flex:none;font:700 11px/1 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--encre2);white-space:nowrap}\nrdr-partenaires .logo{width:auto;height:auto;object-fit:contain}\nrdr-partenaires .vedette{position:relative;display:block;border-radius:var(--carte);background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 34px 60px -44px rgba(25,29,49,.7),0 0 0 1px rgba(25,29,49,.04);transition:transform .35s var(--ease),box-shadow .35s}@media (hover:hover) and (pointer:fine){rdr-partenaires .vedette:hover{transform:translateY(-3px);box-shadow:0 40px 70px -44px rgba(25,29,49,.75),0 0 0 1px rgba(25,29,49,.04)}}\nrdr-partenaires .vedette:focus-visible{outline:3px solid var(--marine);outline-offset:4px}\nrdr-partenaires .ve-photo{height:clamp(210px,38vh,400px);border-radius:28px 3px 0 0;overflow:hidden;background:var(--teinte)}\nrdr-partenaires .ve-photo img{width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-partenaires .vedette:hover .ve-photo img{transform:scale(1.03)}}\nrdr-partenaires .ve-corps{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:clamp(18px,2.6vw,40px);padding:0 clamp(20px,2.8vw,40px) clamp(20px,3vh,30px)}\nrdr-partenaires .ve-logo{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:clamp(170px,16vw,230px);aspect-ratio:16/10;margin-top:clamp(-72px,-5.6vw,-54px);border-radius:var(--tuile);background:#fff;box-shadow:0 22px 40px -26px rgba(25,29,49,.6),0 0 0 1px rgba(25,29,49,.05)}\nrdr-partenaires .ve-logo img{width:74%;height:70%;object-fit:contain}\nrdr-partenaires .ve-nom{padding-top:clamp(14px,2vh,20px);font:800 clamp(22px,2vw,30px)/1.15 var(--police);color:var(--marine);text-wrap:balance}\nrdr-partenaires .ve-acc{margin-top:6px;font-size:15px;line-height:1.5;font-weight:500;color:var(--encre2);text-wrap:pretty}\nrdr-partenaires .ve-corps .btn{margin-top:clamp(14px,2vh,20px)}\nrdr-partenaires .grandes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,28px)}\nrdr-partenaires .grande{position:relative;display:flex;flex-direction:column;border-radius:var(--carte);background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 26px 46px -34px rgba(25,29,49,.65),0 0 0 1px rgba(25,29,49,.04);transition:transform .3s var(--ease),box-shadow .3s}@media (hover:hover) and (pointer:fine){rdr-partenaires .grande:hover{transform:translateY(-4px);box-shadow:0 32px 54px -34px rgba(25,29,49,.7),0 0 0 1px rgba(25,29,49,.04)}}\nrdr-partenaires .grande:focus-visible{outline:3px solid var(--marine);outline-offset:4px}\nrdr-partenaires .gr-photo{aspect-ratio:12/5;border-radius:28px 3px 0 0;overflow:hidden;background:var(--teinte)}\nrdr-partenaires .gr-photo img{width:100%;height:100%;object-fit:cover;transition:transform 1s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-partenaires .grande:hover .gr-photo img{transform:scale(1.04)}}\nrdr-partenaires .gr-corps{position:relative;flex:1;display:flex;flex-direction:column;padding:0 22px 20px}\nrdr-partenaires .gr-logo{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:128px;height:80px;margin-top:-42px;border-radius:var(--tuile);background:#fff;box-shadow:0 16px 30px -20px rgba(25,29,49,.6),0 0 0 1px rgba(25,29,49,.05)}\nrdr-partenaires .gr-logo img{width:76%;height:70%;object-fit:contain}\nrdr-partenaires .gr-nom{margin-top:14px;padding-right:40px;font:800 18px/1.25 var(--police);color:var(--marine);text-wrap:balance}\nrdr-partenaires .gr-acc{margin-top:6px;font-size:14px;line-height:1.5;font-weight:500;color:var(--encre2);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\nrdr-partenaires .gr-fleche{position:absolute;right:18px;top:16px;display:grid;place-items:center;width:34px;height:34px;border-radius:var(--angle-p);background:var(--teinte);color:var(--vert1);transition:background .2s,color .2s}\nrdr-partenaires .gr-fleche .ico{width:17px;height:17px;stroke-width:2.4}@media (hover:hover) and (pointer:fine){rdr-partenaires .grande:hover .gr-fleche{background:var(--vert1);color:#fff}}\nrdr-partenaires .cartes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,1.5vw,20px)}\nrdr-partenaires .carte-p{position:relative;isolation:isolate;display:block;aspect-ratio:4/3;border-radius:var(--carte);background:#fff;color:var(--encre);text-decoration:none;overflow:hidden;box-shadow:0 22px 38px -30px rgba(25,29,49,.65),0 0 0 1px rgba(25,29,49,.05);transition:transform .3s var(--ease),box-shadow .3s}\nrdr-partenaires .carte-p:focus-visible{outline:3px solid var(--marine);outline-offset:4px}\nrdr-partenaires .cp-face{position:absolute;inset:0;display:grid;grid-template-rows:minmax(0,1fr) auto;padding:clamp(14px,1.4vw,20px) 16px 16px}\nrdr-partenaires .cp-logo{display:flex;align-items:center;justify-content:center;min-height:0}\nrdr-partenaires .cp-logo img{width:66%;height:74%;object-fit:contain}\nrdr-partenaires .cp-nom{font:800 14px/1.3 var(--police);text-align:center;text-wrap:balance}\nrdr-partenaires .cp-dos{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;background:var(--vert1);clip-path:inset(100% 0 0 0);transition:clip-path .5s var(--ease)}\nrdr-partenaires .cp-dos .cp-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\nrdr-partenaires .cp-dos::before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,103,110,.45) 0%,rgba(0,80,86,.9) 78%)}\nrdr-partenaires .cp-dos .cp-blanc{position:relative;z-index:2;width:86%;height:80%;margin-bottom:clamp(16px,2vw,26px);object-fit:contain;filter:drop-shadow(0 2px 10px rgba(0,0,0,.25))}\nrdr-partenaires .cp-voir{position:absolute;z-index:2;left:16px;right:16px;bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:10px;color:#fff;font:800 13px/1.2 var(--police)}\nrdr-partenaires .cp-voir .ico{width:18px;height:18px;stroke-width:2.4}\n@media (hover:hover){\nrdr-partenaires .carte-p:hover{transform:translateY(-3px);box-shadow:0 28px 46px -30px rgba(25,29,49,.7),0 0 0 1px rgba(25,29,49,.05)}\nrdr-partenaires .carte-p:hover .cp-dos,rdr-partenaires .carte-p:focus-visible .cp-dos{clip-path:inset(0 0 0 0)}\n}\nrdr-partenaires .tuiles{--g:clamp(10px,1.2vw,16px);display:flex;flex-wrap:wrap;justify-content:center;gap:var(--g)}\nrdr-partenaires .tuiles>.tuile{flex:0 0 calc((100% - (var(--col,6) - 1) * var(--g)) / var(--col,6));min-width:0}\nrdr-partenaires .tuiles--5{--col:5}\nrdr-partenaires .tuile{position:relative;display:grid;grid-template-rows:minmax(0,1fr) auto;aspect-ratio:6/5;padding:14px 12px 12px;border-radius:var(--tuile);background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 16px 30px -26px rgba(25,29,49,.6),0 0 0 1px rgba(25,29,49,.06);transition:transform .25s var(--ease),box-shadow .25s}\nrdr-partenaires .rang:not(.rang--teinte) .tuile{box-shadow:0 0 0 1px rgba(25,29,49,.09)}\nrdr-partenaires .tuile:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-partenaires .tu-logo{display:flex;align-items:center;justify-content:center;min-height:0}\nrdr-partenaires .tu-logo img{width:70%;height:76%;object-fit:contain}\nrdr-partenaires .tu-nom{font:700 12px/1.3 var(--police);text-align:center;color:var(--encre2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;transition:color .2s}\nrdr-partenaires .tu-fleche{position:absolute;top:8px;right:8px;width:16px;height:16px;color:var(--vert1);opacity:0;transform:translate(-3px,3px);transition:opacity .2s,transform .25s var(--ease)}\n@media (hover:hover){\nrdr-partenaires .tuile:hover{transform:translateY(-3px);box-shadow:0 22px 34px -24px rgba(25,29,49,.6),0 0 0 1.5px var(--vert1)}\nrdr-partenaires .tuile:hover .tu-nom{color:var(--vert1)}\nrdr-partenaires .tuile:hover .tu-fleche{opacity:1;transform:none}\n}\nrdr-partenaires .vide{padding:calc(40px * var(--air)) 0;text-align:center;font-weight:600;color:var(--encre2)}\nrdr-partenaires .vide .btn{margin-top:16px;color:var(--vert1)}\nrdr-partenaires .devenir{position:relative;background:var(--jaune);color:var(--encre);padding:calc(clamp(44px,7.4vh,84px) * var(--air)) 0}\nrdr-partenaires .dv-grille{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:clamp(24px,5vw,84px);align-items:center}\nrdr-partenaires .dv-sur{font:800 12px/1 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--vert1)}\nrdr-partenaires .dv-titre{margin-top:12px;font-size:clamp(30px,min(3.4vw,6vh),48px);line-height:1.1;color:var(--marine);text-wrap:balance}\nrdr-partenaires .dv-liens{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:18px}\nrdr-partenaires .dv-liens a{display:inline-flex;align-items:center;gap:8px;min-height:44px;font:700 14px var(--police);text-decoration:none;border-bottom:2px solid rgba(25,29,49,.25);transition:border-color .2s}@media (hover:hover) and (pointer:fine){rdr-partenaires .dv-liens a:hover{border-color:var(--marine)}}\nrdr-partenaires .dv-liens .ico{width:16px;height:16px;stroke-width:2.4}\nrdr-partenaires .dv-action{display:flex;justify-content:flex-end}\nrdr-partenaires .dv-action .btn{box-shadow:0 18px 30px -20px rgba(25,29,49,.6)}\nrdr-partenaires .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-partenaires .rv.vu{opacity:1;transform:none}\nrdr-partenaires .haut-photo.rv{transform:translateY(18px) rotate(1.4deg)}\nrdr-partenaires .haut-photo.rv.vu{transform:rotate(1.4deg)}\n@media (max-height:820px) and (min-width:751px){\nrdr-partenaires .haut-txt p{font-size:14.5px;line-height:1.6}\nrdr-partenaires .haut-txt h1+p{font-size:16px;line-height:1.56}\nrdr-partenaires .signe{margin-top:16px}\n}\n@media (max-width:1100px) and (min-width:751px){\nrdr-partenaires .cartes{grid-template-columns:repeat(3,minmax(0,1fr))}\nrdr-partenaires .tuiles{--col:5}\nrdr-partenaires .tuiles--5{--col:4}\n}\n@media (max-width:1000px) and (min-width:751px){\nrdr-partenaires .haut-grille{grid-template-columns:minmax(0,1fr)}\nrdr-partenaires .haut-photo{aspect-ratio:16/8;max-width:720px}\nrdr-partenaires .grandes{grid-template-columns:repeat(2,minmax(0,1fr))}\n}\n@media (max-width:750px){\nrdr-partenaires{font-size:15px}\nrdr-partenaires .haut{padding-top:26px}\nrdr-partenaires .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-partenaires .haut-grille{grid-template-columns:minmax(0,1fr);gap:26px}\nrdr-partenaires .haut h1{font-size:clamp(34px,10vw,44px)}\nrdr-partenaires .haut-txt h1+p{font-size:16px}\nrdr-partenaires .haut-txt p{font-size:15px;line-height:1.62}\nrdr-partenaires .haut-photo{aspect-ratio:16/10;border-width:4px;transform:rotate(.8deg)}\nrdr-partenaires .haut-photo.rv{transform:translateY(18px) rotate(.8deg)}\nrdr-partenaires .haut-photo.rv.vu{transform:rotate(.8deg)}\nrdr-partenaires .barre{margin-top:8px}\nrdr-partenaires .barre-in{gap:10px}\nrdr-partenaires .puce{padding:0 12px;font-size:12.5px}\nrdr-partenaires .rang-tete{flex-wrap:wrap;gap:4px 12px}\nrdr-partenaires .rang-titre{font-size:clamp(24px,7.2vw,30px)}\nrdr-partenaires .rang-nb{flex-basis:100%;margin-left:0}\nrdr-partenaires .ve-photo{height:auto;aspect-ratio:2/1;border-radius:22px 3px 0 0}\nrdr-partenaires .ve-corps{grid-template-columns:minmax(0,1fr);gap:0;padding:0 18px 20px}\nrdr-partenaires .ve-logo{width:150px;margin-top:-48px}\nrdr-partenaires .ve-nom{padding-top:14px;font-size:22px}\nrdr-partenaires .ve-corps .btn{width:100%;justify-content:space-between}\nrdr-partenaires .grandes{grid-template-columns:minmax(0,1fr);gap:16px}\nrdr-partenaires .gr-photo{aspect-ratio:2/1;border-radius:22px 3px 0 0}\nrdr-partenaires .cartes{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\nrdr-partenaires .carte-p{aspect-ratio:1/1;border-radius:20px 3px 12px 3px}\nrdr-partenaires .cp-nom{font-size:12.5px}\nrdr-partenaires .tuiles,rdr-partenaires .tuiles--5{--col:3;--g:8px}\nrdr-partenaires .tuile{aspect-ratio:1/1.08;padding:10px 6px 8px;border-radius:12px 3px 12px 3px}\nrdr-partenaires .tu-nom{font-size:10.5px}\nrdr-partenaires .devenir{padding:calc(44px * var(--air)) 0 calc(48px * var(--air))}\nrdr-partenaires .dv-grille{grid-template-columns:minmax(0,1fr);gap:24px}\nrdr-partenaires .dv-titre{font-size:clamp(26px,7.8vw,34px)}\nrdr-partenaires .dv-action .btn{width:100%;justify-content:space-between}\n}\n@media (max-width:370px){\nrdr-partenaires .tuiles,rdr-partenaires .tuiles--5{--col:2}\nrdr-partenaires .tuile{aspect-ratio:6/5}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-partenaires *{animation:none !important;transition:none !important}\nrdr-partenaires .rv,rdr-partenaires .rv.vu{opacity:1;transform:none}\nrdr-partenaires .haut-photo.rv{transform:rotate(1.4deg)}\nrdr-partenaires .mur{-webkit-mask:none;mask:none;overflow-x:auto}\n}";
  const GABARIT = "<div class=\"rpa-page\" id=\"partenaires\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame haut-grille\">\n      <div class=\"haut-txt\" id=\"haut-txt\"></div>\n      <figure class=\"haut-photo rv\" id=\"haut-photo\"></figure>\n    </div>\n  </header>\n  <div class=\"mur\" id=\"mur\" aria-hidden=\"true\"></div>\n  <nav class=\"barre\" id=\"barre\"></nav>\n  <div id=\"rangs\"></div>\n  <section class=\"devenir\" id=\"devenir\" aria-labelledby=\"t-devenir\"></section></div>";
  const ATTENTE = "<div class=\"rpa-attente\" aria-hidden=\"true\"><div class=\"rpa-sq-haut\"><div class=\"rpa-sq-trame\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-t rpa-sq-t2\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div></div><div class=\"rpa-sq-trame rpa-sq-sec\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div><div class=\"rpa-sq-trame rpa-sq-cartes\"><i class=\"rpa-sq-c\"></i><i class=\"rpa-sq-c\"></i><i class=\"rpa-sq-c\"></i></div><div class=\"rpa-sq-trame rpa-sq-sec\"><i class=\"rpa-sq-l rpa-sq-k\"></i><i class=\"rpa-sq-l rpa-sq-t\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p1\"></i><i class=\"rpa-sq-l rpa-sq-p\"></i><i class=\"rpa-sq-l rpa-sq-p rpa-sq-p3\"></i></div></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/partenaires';

  function poserStyle() {
    if (document.getElementById("rdr-partenaires-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-partenaires-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  function demarrer(D, racine, signal) {
    const ecouter = (type, f, o) => window.addEventListener(type, f, Object.assign({}, o && typeof o === 'object' ? o : {}, signal ? { signal } : {}));
    const RANGS = D.rangs, PARTENAIRES = D.partenaires, CARTE_DEVENIR = D.carteDevenir, PAGE = D.page, ARCS = D.arcs;
    Object.keys(PAGE.langues).forEach((l) => { const f = PAGE.langues[l].f; if (f && f.nb && typeof f.nb === 'object') { const t = f.nb; f.nb = (n) => n + (n > 1 ? t.plusieurs : t.un); } });
const LU = {
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const W = 'https://static.wixstatic.com/';
 
const PHOTO = (m, l, h) => W + 'media/' + m.id + '/v1/fill/w_' + Math.min(l, m.l || l) + ',h_' + Math.round(Math.min(l, m.l || l) * h / l) + ',al_c,q_80,enc_auto/x.jpg';
const LOGO = (m, l, h) => !m ? '' : m.svg ? W + 'shapes/' + m.svg : W + 'media/' + m.id + '/v1/fit/w_' + Math.min(l, m.l || l) + ',h_' + Math.min(h, m.h || h) + ',q_90,enc_auto/x.png';
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const FINE = String.fromCharCode(0x202F);
let L = 'fr', X = PAGE.langues.fr;
const T = (s) => {
  let t = esc(String(s == null ? '' : s).replace(/'/g, '’'));
  if (L === 'fr') t = t.replace(/ ([?!:;])/g, FINE + '$1');
  return t.replace(/Rhum - Destination/g, '<span class="nw">Rhum -</span> Destination');
};
const $ = (id) => (racine.id === id ? racine : racine.querySelector('[id="' + id + '"]'));
const nom = (p) => p.nom[L] || p.nom.fr;
const lien = (p) => (L === 'en' ? '/en' : '') + p.lien;
 
const titres = RANGS.flatMap((r) => [r.titre.fr, r.titre.en]).map((s) => s.toLowerCase());
const accroche = (p) => { const a = (p.accroche[L] || '').trim(); const b = a.toLowerCase(); return !a || b === nom(p).toLowerCase() || titres.includes(b) ? '' : a; };
 
const plie = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const cle = (p) => plie([p.nom.fr, p.nom.en, p.accroche.fr, p.accroche.en].join(' '));
const img = (src, cls, alt, extra) => src ? '<img class="' + cls + '" src="' + esc(src) + '" alt="' + esc(alt || '') + '"' + (extra || ' loading="lazy"') + ' decoding="async">' : '';

 
function haut() {
  const org = PARTENAIRES.find((p) => p.rang === 'organisateur');
  $('haut-txt').innerHTML = '<h1 class="titre" id="t-haut">' + T(X.titre) + '</h1>' + X.intro.map((p) => '<p>' + T(p) + '</p>').join('') +
    (org ? '<a class="signe" href="' + esc(lien(org)) + '"><span>' + T(X.f.evenement) + '</span>' + img(LOGO(org.blanc || org.logo, 240, 90), '', nom(org), ' loading="eager"') + '</a>' : '');
  const p = PAGE.photo;
  $('haut-photo').innerHTML = '<img src="' + PHOTO(p, 960, 720) + '" srcset="' + [480, 720, 960, 1280].map((w) => PHOTO(p, w, Math.round(w * .75)) + ' ' + Math.min(w, p.l) + 'w').join(', ') + '" sizes="(max-width:750px) 92vw, (max-width:1000px) 720px, 42vw" alt="' + esc(X.f.altPhoto) + '" width="960" height="720" fetchpriority="high" decoding="async">';
  const [x, y, l, h] = ARCS.crop;
  racine.style.setProperty('--arcs', 'url("' + W + 'media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1200,h_1200,q_85/x.png")');
}


function mur() {
  const vus = new Set();
  const liste = PARTENAIRES.filter((p) => p.rang !== 'organisateur' && p.logo && !vus.has(p.nom.fr) && vus.add(p.nom.fr));
  const tuile = (p, k) => '<a href="' + esc(lien(p)) + '" tabindex="-1">' + img(LOGO(p.logo, 360, 220), '', '', k < 12 ? ' loading="eager"' : ' loading="lazy"') + '</a>';
  $('mur').innerHTML = '<div class="mur-piste" style="--duree:' + Math.round(liste.length * 2.8) + 's">' + liste.map(tuile).join('') + liste.map((p, k) => tuile(p, 99)).join('') + '</div>';
}
function barre(parRang) {
  $('barre').setAttribute('aria-label', X.f.rangs);
  $('barre').innerHTML = '<div class="trame"><div class="barre-in"><div class="puces" id="puces">' +
    parRang.map(({ r, liste }) => '<a class="puce" href="#' + r.cle + '" data-rang="' + r.cle + '">' + T(r.court[L]) + ' <b>' + liste.length + '</b></a>').join('') +
    '</div><button class="chercher" type="button" id="chercher" aria-expanded="false" aria-controls="recherche">' + SVG('search') + '<span class="mot">' + T(X.f.chercher) + '</span></button></div>' +
    '<div class="recherche" id="recherche"><div><label><span class="sr">' + T(X.f.chercherUn) + '</span>' + SVG('search') +
    '<input type="search" id="q" placeholder="' + esc(X.f.chercherUn) + '" autocomplete="off" enterkeyhint="search"><button class="effacer" type="button" id="effacer" aria-label="' + esc(X.f.effacer) + '" hidden>' + SVG('x') + '</button></label></div></div></div>';
}
function vedette(p) {
  const a = accroche(p);
  return '<a class="vedette rv" href="' + esc(lien(p)) + '" data-q="' + esc(cle(p)) + '">' +
    (p.bande ? '<figure class="ve-photo">' + img(PHOTO(p.bande, 1600, 520), '', '') + '</figure>' : '') +
    '<div class="ve-corps"><span class="ve-logo">' + img(LOGO(p.logo, 400, 250), 'logo', '') + '</span>' +
    '<div><h3 class="ve-nom">' + T(nom(p)) + '</h3>' + (a ? '<p class="ve-acc">' + T(a) + '</p>' : '') + '</div>' +
    '<span class="btn btn--marine">' + T(X.f.decouvrir) + SVG('arrowRight', 'ico--glisse') + '</span></div></a>';
}
function grande(p) {
  const a = accroche(p);
  return '<a class="grande rv" href="' + esc(lien(p)) + '" data-q="' + esc(cle(p)) + '">' +
    '<figure class="gr-photo">' + (p.bande ? img(PHOTO(p.bande, 800, 334), '', '') : '') + '</figure>' +
    '<div class="gr-corps"><span class="gr-logo">' + img(LOGO(p.logo, 240, 150), 'logo', '') + '</span>' +
    '<h3 class="gr-nom">' + T(nom(p)) + '</h3>' + (a ? '<p class="gr-acc">' + T(a) + '</p>' : '') +
    '<span class="gr-fleche" aria-hidden="true">' + SVG('arrowUpRight') + '</span></div></a>';
}
function carte(p) {
  return '<a class="carte-p rv" href="' + esc(lien(p)) + '" data-q="' + esc(cle(p)) + '">' +
    '<span class="cp-face"><span class="cp-logo">' + img(LOGO(p.logo, 320, 200), 'logo', '') + '</span><span class="cp-nom">' + T(nom(p)) + '</span></span>' +
    '<span class="cp-dos" aria-hidden="true">' + (p.bande ? img(PHOTO(p.bande, 560, 448), 'cp-photo', '') : '') + img(LOGO(p.blanc || p.logo, 320, 160), 'cp-blanc logo', '') +
    '<span class="cp-voir">' + T(X.f.voir) + SVG('arrowRight') + '</span></span></a>';
}
function tuile(p) {
  return '<a class="tuile rv" href="' + esc(lien(p)) + '" data-q="' + esc(cle(p)) + '">' +
    '<span class="tu-logo">' + img(LOGO(p.logo, 280, 180), 'logo', '') + '</span><span class="tu-nom">' + T(nom(p)) + '</span>' + SVG('arrowUpRight', 'tu-fleche') + '</a>';
}
function rangs(parRang) {
  let teinte = false;
  $('rangs').innerHTML = parRang.map(({ r, liste }, k) => {
     
    const t = ['medias', 'fournisseurs-techniques'].includes(r.cle);
    const apres = teinte && !t; teinte = t;
    const corps = r.format === 'vedette' ? liste.map(vedette).join('')
      : r.format === 'grandes' ? '<div class="grandes">' + liste.map(grande).join('') + '</div>'
      : r.format === 'cartes' ? '<div class="cartes">' + liste.map(carte).join('') + '</div>'
      : '<div class="tuiles' + (r.cle === 'medias' ? ' tuiles--5' : '') + '">' + liste.map(tuile).join('') + '</div>';
    return '<section class="rang' + (t ? ' rang--teinte' : '') + (apres ? ' apres-teinte' : '') + '" id="' + r.cle + '" aria-labelledby="t-' + r.cle + '" data-rang="' + r.cle + '">' +
      '<div class="trame"><div class="rang-tete rv"><span class="rang-num" aria-hidden="true">' + String(k + 1).padStart(2, '0') + '</span>' +
      '<h2 class="titre rang-titre" id="t-' + r.cle + '">' + T(r.titre[L]) + '</h2><span class="rang-nb" data-nb>' + X.f.nb(liste.length) + '</span></div>' + corps + '</div></section>';
  }).join('') + '<div class="trame vide" id="vide" hidden><p>' + T(X.f.vide) + '</p><button class="btn" type="button" id="tout">' + T(X.f.toutVoir) + '</button></div>';
}
function devenir() {
  const c = CARTE_DEVENIR;
  $('devenir').innerHTML = '<div class="trame dv-grille"><div class="rv"><p class="dv-sur">' + T(c.titre[L]) + '</p>' +
    '<h2 class="titre dv-titre" id="t-devenir">' + T(c.sous[L]) + '</h2>' +
    '<div class="dv-liens">' + X.f.autres.map((a) => '<a href="' + esc(a.lien) + '">' + T(a.titre) + SVG('arrowRight') + '</a>').join('') + '</div></div>' +
    '<div class="dv-action rv"><a class="btn btn--marine btn--grand" href="' + esc((L === 'en' ? '/en' : '') + c.lien) + '">' + T(c.titre[L]) + SVG('arrowRight', 'ico--glisse') + '</a></div></div>';
}

 
let suivi = null;
function suivre() {
  const puces = [...racine.querySelectorAll('.puce')];
  const sections = [...racine.querySelectorAll('.rang')];
  const barreEl = $('barre');
  const colle = () => parseFloat(getComputedStyle(racine).getPropertyValue('--colle')) || 0;
  const maj = () => {
    const seuil = Math.max(colle() + barreEl.offsetHeight + 40, innerHeight * .38);
    let cour = null;
    for (const s of sections) if (!s.hidden && s.getBoundingClientRect().top <= seuil) cour = s.dataset.rang;
    const bas = $('devenir').getBoundingClientRect().top < innerHeight * .5;
    puces.forEach((p) => {
      const on = !bas && p.dataset.rang === cour;
      if (on !== (p.getAttribute('aria-current') === 'true')) {
        if (on) { p.setAttribute('aria-current', 'true'); const b = $('puces'); const g = p.offsetLeft - b.offsetLeft; if (g < b.scrollLeft || g + p.offsetWidth > b.scrollLeft + b.clientWidth) b.scrollTo({ left: g - 16, behavior: 'smooth' }); }
        else p.removeAttribute('aria-current');
      }
    });
    barreEl.classList.toggle('collee', barreEl.getBoundingClientRect().top <= colle() + .5);
  };
  const pz = $('puces'); const fondu = () => pz.classList.toggle('deborde', pz.scrollWidth > pz.clientWidth + 2 && pz.scrollLeft + pz.clientWidth < pz.scrollWidth - 2);
  pz.addEventListener('scroll', fondu, { passive: true }); ecouter('resize', fondu); fondu();
  if (suivi) removeEventListener('scroll', suivi);
  let att = false;
  suivi = () => { if (!att) { att = true; requestAnimationFrame(() => { att = false; maj(); }); } };
  ecouter('scroll', suivi, { passive: true });
  maj();
}
function recherche() {
  const q = $('q'), zone = $('recherche'), bouton = $('chercher'), eff = $('effacer');
  const filtrer = () => {
    const mots = plie(q.value).trim().split(/\s+/).filter(Boolean);
    let total = 0;
    racine.querySelectorAll('.rang').forEach((s) => {
      let n = 0;
      s.querySelectorAll('[data-q]').forEach((el) => { const ok = mots.every((m) => el.dataset.q.includes(m)); el.hidden = !ok; if (ok) n++; });
      s.hidden = n === 0; total += n;
      const puce = racine.querySelector('.puce[data-rang="' + s.dataset.rang + '"]');
      puce.querySelector('b').textContent = n; puce.classList.toggle('eteinte', n === 0);
      s.querySelector('[data-nb]').textContent = X.f.nb(n);
    });
    $('vide').hidden = total > 0; eff.hidden = !q.value;
    const barre = $('barre'), cible = $('rangs').getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(barre).top) || 0) - barre.offsetHeight;
    if (scrollY > cible + 1) window.scrollTo({ top: cible, behavior: 'instant' });
  };
  const ouvrir = (o) => {
    zone.classList.toggle('ouverte', o); bouton.setAttribute('aria-expanded', String(o));
    if (o) { const b = $('barre'); if (b.getBoundingClientRect().top > (parseFloat(getComputedStyle(racine).getPropertyValue('--colle')) || 0) + 1) b.scrollIntoView({ behavior: reduit ? 'auto' : 'smooth', block: 'start' }); setTimeout(() => q.focus({ preventScroll: true }), 120); }
    else if (q.value) { q.value = ''; filtrer(); }
  };
  bouton.addEventListener('click', () => ouvrir(bouton.getAttribute('aria-expanded') !== 'true'));
  q.addEventListener('input', filtrer);
  q.addEventListener('keydown', (e) => { if (e.key === 'Escape') { ouvrir(false); bouton.focus(); } });
  eff.addEventListener('click', () => { q.value = ''; filtrer(); q.focus(); });
  $('tout').addEventListener('click', () => { q.value = ''; filtrer(); q.focus(); });
}

 
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  const cibles = [...racine.querySelectorAll('.rv')];
  if (reduit || !('IntersectionObserver' in window)) { cibles.forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -4% 0px', threshold: 0.04 });
  cibles.forEach((e) => vus.observe(e));
}

function monter(lang) {
  L = PAGE.langues[lang] ? lang : 'fr'; X = PAGE.langues[L];
  
  const parRang = RANGS.map((r) => ({ r, liste: PARTENAIRES.filter((p) => p.rang === r.cle) })).filter((x) => x.liste.length);
  haut(); mur(); barre(parRang); rangs(parRang); devenir();
  suivre(); recherche(); reveler();
  
}
    monter(D.lang in PAGE.langues ? D.lang : Object.keys(PAGE.langues)[0]);

    

    const aller = (id, doux) => { const s = $(id); if (!s || s.hidden) return false; s.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' }); return true; };
    racine.addEventListener('click', (e) => {
      const a = e.target.closest('a.puce');
      if (!a || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!aller(a.dataset.rang, !reduit)) return;
      e.preventDefault();
      try { history.replaceState(null, '', '#' + a.dataset.rang); } catch (x) {   }
    });
    let ancre = '';
    try { ancre = decodeURIComponent(location.hash.slice(1)); } catch (x) { ancre = ''; }
    if (ancre && RANGS.some((r) => r.cle === ancre) && aller(ancre, false)) {
      const y = scrollY;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (scrollY === y) aller(ancre, false); });
    }
  }

  const jeuValide = (D) => !!(D && Array.isArray(D.rangs) && D.rangs.length > 0 && Array.isArray(D.partenaires) && D.partenaires.some((p) => D.rangs.some((r) => r.cle === p.rang)) && D.carteDevenir && D.carteDevenir.titre && D.page && D.page.photo && D.page.langues && Object.keys(D.page.langues).length > 0 && D.arcs);

  class RdrPartenaires extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      clearTimeout(this._coupure); this._coupure = null;
      if (this._monte && this._ctrl && this._ctrl.signal.aborted && this._jeu) { this._monte = false; this._tenter(this._jeu); return; }
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() {
      clearTimeout(this._minuteur); this._minuteur = null;
       
      if (this._ctrl) { const c = this._ctrl; this._coupure = setTimeout(() => c.abort(), 2000); }
    }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || (document.documentElement.getAttribute('lang') || '') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!jeuValide(D)) {
        if (!this.firstChild) this.innerHTML = ATTENTE;
        return;
      }
      this._monte = true; this._jeu = D;
      clearTimeout(this._minuteur); this._minuteur = null;
      if (!D.lang) D.lang = this._lang();
      this._ctrl = typeof AbortController === 'function' ? new AbortController() : null;
      

      poserStyle();
      this.innerHTML = GABARIT;
      try { demarrer(D, this.firstElementChild, this._ctrl ? this._ctrl.signal : null); } catch (e) { console.error('[rdr-partenaires]', e); }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang();
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (jeuValide(j)) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rpa-vide"><h3>' + (en ? "This page will be back in a moment" : "Nos partenaires reviennent dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }
  }
  customElements.define("rdr-partenaires", RdrPartenaires);
})();
})();
