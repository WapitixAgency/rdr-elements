/* rdr-elements terres | source route-du-rhum 83bbcc0 | rdr-terres-engagements.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["terres"]="83bbcc0";performance.mark("rdr-elements:terres")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-terres-engagements")) return;
  const STYLE = "rdr-terres-engagements{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-terres-engagements .rte-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-terres-engagements .rte-sq-haut{display:flex;align-items:center;min-height:clamp(560px,calc(100svh - 175px),900px);background:#00676E}\nrdr-terres-engagements .rte-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-terres-engagements .rte-sq-l,rdr-terres-engagements .rte-sq-c{position:relative;display:block;overflow:hidden}\nrdr-terres-engagements .rte-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-terres-engagements .rte-sq-k{width:120px;height:11px}\nrdr-terres-engagements .rte-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-terres-engagements .rte-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-terres-engagements .rte-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-terres-engagements .rte-sq-p1{margin-top:30px}\nrdr-terres-engagements .rte-sq-p3{width:min(380px,62%)}\nrdr-terres-engagements .rte-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-terres-engagements .rte-sq-sec .rte-sq-l{background:rgba(14,17,29,.08)}\nrdr-terres-engagements .rte-sq-sec .rte-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-terres-engagements .rte-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-terres-engagements .rte-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-terres-engagements .rte-sq-l::after,rdr-terres-engagements .rte-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rte-sq-luire 1.6s ease-in-out infinite}\nrdr-terres-engagements .rte-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-terres-engagements .rte-sq-sec .rte-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-terres-engagements .rte-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rte-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-terres-engagements .rte-sq-cartes{grid-template-columns:1fr}rdr-terres-engagements .rte-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-terres-engagements .rte-sq-l::after,rdr-terres-engagements .rte-sq-c::after{animation:none;display:none}}\nrdr-terres-engagements .rte-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-terres-engagements .rte-vide h3{margin:0;font-size:22px}\nrdr-terres-engagements .rte-vide p{margin:0;color:rgba(255,255,255,.8)}\nrdr-terres-engagements .rte-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}\nrdr-terres-engagements{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00;\n  \n  --p1:#00676E;--p2:#5DBFC0;--p3:#F5BE41;\n  --encre:#191D31;--encre2:rgba(25,29,49,.8);--filet:rgba(25,29,49,.12);\n  --pied:#0E111D;\n  --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;\n  --largeur:1240px;--marge:clamp(18px,4vw,40px);--entete:175px;--colle:56px;\n  \n  --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;\n  --photo-h:clamp(210px,34vh,440px);\n  \n  --escale:64px;--escale-c:30px;--bande:60px;--pad-c:5px;\n  \n  --col-gap:clamp(16px,2.4vw,36px);\n  \n  --air:1.5;\n  --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-height:820px) and (min-width:751px){\nrdr-terres-engagements{--bande:54px;--escale-c:28px;--pad-c:4px}\n}\n@media (max-width:750px){\nrdr-terres-engagements{--air:1.3;--entete:120px;--colle:60px;--marge:20px;--photo-h:clamp(176px,50vw,232px);--escale:52px;--escale-c:26px;--bande:54px}\n}\n@property --rte-e{syntax:'<length>';inherits:true;initial-value:30px}\n@property --rte-pad{syntax:'<length>';inherits:true;initial-value:5px}\nrdr-terres-engagements *{box-sizing:border-box}\nrdr-terres-engagements{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-terres-engagements img{display:block;max-width:100%}\nrdr-terres-engagements a{color:inherit}\nrdr-terres-engagements h1,rdr-terres-engagements h2,rdr-terres-engagements h3,rdr-terres-engagements h4,rdr-terres-engagements p,rdr-terres-engagements figure,rdr-terres-engagements ul{margin:0}\nrdr-terres-engagements ul{padding:0;list-style:none}\nrdr-terres-engagements button{font:inherit;color:inherit}\nrdr-terres-engagements [hidden]{display:none !important}\nrdr-terres-engagements .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-terres-engagements .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-terres-engagements .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-terres-engagements .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-terres-engagements .rte-page>header,rdr-terres-engagements .rte-page>section{scroll-margin-top:calc(-1 * var(--bande) - 8px)}\nrdr-terres-engagements .pacte{scroll-margin-top:-8px}\nrdr-terres-engagements .pa-titre[tabindex=\"-1\"]:focus{outline:none}\nrdr-terres-engagements .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-terres-engagements .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}\nrdr-terres-engagements .btn:hover .ico--glisse{transform:translateX(3px)}\nrdr-terres-engagements .btn:hover .ico--sort{transform:translate(2px,-2px)}\nrdr-terres-engagements .btn:focus-visible{outline:3px solid var(--jaune);outline-offset:3px}\nrdr-terres-engagements .btn--marine{background:var(--marine);border-color:var(--marine);color:#fff}\nrdr-terres-engagements .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}\nrdr-terres-engagements .btn--contour{color:var(--marine)}\nrdr-terres-engagements .btn--contour:hover{background:var(--marine);color:#fff}\nrdr-terres-engagements .btn--petit{min-height:44px;padding:8px 16px;font-size:13.5px;gap:10px}\nrdr-terres-engagements .btn .format{padding:1px 6px;border-radius:4px;background:rgba(25,29,49,.08);font:800 10.5px/1.5 var(--police);letter-spacing:.1em}\nrdr-terres-engagements .btn:hover .format{background:rgba(255,255,255,.2)}\nrdr-terres-engagements .surtitre{display:flex;align-items:center;gap:12px;font:800 12.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--vert1)}\nrdr-terres-engagements .surtitre::before{content:'';flex:none;width:28px;height:5px;background:currentColor;transform:skewX(-20deg)}\nrdr-terres-engagements .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(26px,5vh,56px) 0 calc(var(--photo-h) / 2 + clamp(26px,4vh,40px))}\nrdr-terres-engagements .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-terres-engagements .haut .surtitre{color:var(--jaune)}\nrdr-terres-engagements .haut h1{margin-top:clamp(10px,1.6vh,16px);font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-terres-engagements .haut-chapo{margin-top:clamp(12px,2vh,20px);max-width:68ch;font-size:clamp(15.5px,1.15vw,17px);line-height:1.68;font-weight:500;color:rgba(255,255,255,.94);text-wrap:pretty}\nrdr-terres-engagements .haut-photo{position:relative;z-index:2;height:var(--photo-h);margin-top:calc(var(--photo-h) / -2);border-radius:32px 4px 20px 4px;overflow:hidden;background:#3A4A4F;box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-terres-engagements .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 62%;transform:scale(1.05);animation:rte-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rte-zoom{to{transform:scale(1)}}\nrdr-terres-engagements .manifeste{position:relative;padding:calc(clamp(44px,7.4vh,84px) * var(--air)) 0 calc(var(--escale) / 2 + clamp(34px,5.6vh,60px) * var(--air))}\nrdr-terres-engagements .mf-grille{display:grid;grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:clamp(24px,5vw,80px);align-items:start}\nrdr-terres-engagements .manifeste h2{margin-top:12px;font-size:clamp(34px,min(4vw,7.4vh),58px);color:var(--marine);text-wrap:balance}\nrdr-terres-engagements .mf-lead{font-size:clamp(16.5px,1.3vw,18.5px);line-height:1.62;font-weight:700;color:var(--marine);text-wrap:pretty}\nrdr-terres-engagements .mf-strophe{position:relative;margin-top:20px;padding:4px 0 4px 26px}\nrdr-terres-engagements .mf-strophe::before{content:'';position:absolute;left:0;top:6px;bottom:6px;width:5px;background:var(--vert1);transform:skewX(-10deg)}\nrdr-terres-engagements .mf-strophe p{font-style:italic;font-weight:500;font-size:clamp(16.5px,1.3vw,18.5px);line-height:1.6;color:var(--marine)}\nrdr-terres-engagements .mf-strophe p+p{margin-top:4px}\nrdr-terres-engagements .promesses{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--col-gap);margin-top:calc(clamp(34px,6vh,64px) * var(--air))}\nrdr-terres-engagements .promesse{--pc:var(--p1);position:relative;display:flex;flex-direction:column;align-items:center;padding:0 clamp(4px,1vw,18px);text-align:center;text-decoration:none;color:var(--encre);border-radius:var(--carte);outline-offset:6px}\nrdr-terres-engagements .promesse:nth-child(2){--pc:var(--p2)}\nrdr-terres-engagements .promesse:nth-child(3){--pc:var(--p3)}\nrdr-terres-engagements .promesse-n{font:italic 400 clamp(40px,3.6vw,54px)/1 var(--titre);color:var(--pc);transition:transform .3s var(--ease)}\nrdr-terres-engagements .promesse-t{margin-top:12px;font-size:clamp(16px,1.25vw,17.5px);line-height:1.5;font-weight:700;color:var(--marine);text-wrap:balance}\nrdr-terres-engagements .promesse-t mark{background:none;color:inherit;box-shadow:inset 0 -.36em 0 color-mix(in oklab,var(--pc) 42%,#fff);padding:0 .06em}\nrdr-terres-engagements .promesse-s{margin-top:8px;max-width:34ch;font-size:15px;line-height:1.62;color:var(--encre2);text-wrap:pretty}\nrdr-terres-engagements .promesse:hover .promesse-n{transform:translateY(-3px) rotate(-3deg)}\nrdr-terres-engagements .nw{white-space:nowrap}\nrdr-terres-engagements .promesse:focus-visible{outline:2px solid var(--vert1)}\nrdr-terres-engagements .mf-chute{max-width:46ch;margin:clamp(30px,5vh,52px) auto 0;text-align:center;font-weight:700;font-style:italic;font-size:clamp(17.5px,1.45vw,21px);line-height:1.5;color:var(--vert1);text-wrap:balance}\nrdr-terres-engagements .pactes{position:relative;display:flow-root;background:var(--t0,#E2EFEE)}\nrdr-terres-engagements .pacte{--pc:var(--p1);--pc-txt:#fff;--teinte:#E2EFEE;position:relative;background:var(--teinte);padding:calc(clamp(40px,6.4vh,68px) * var(--air)) 0}\nrdr-terres-engagements .pacte:first-of-type{padding-top:calc(var(--escale) * .75 + clamp(40px,6.4vh,68px) * var(--air))}\nrdr-terres-engagements .pacte:last-of-type{padding-bottom:calc(var(--bande) + clamp(40px,6.4vh,68px) * var(--air))}\nrdr-terres-engagements .bande{--rte-e:var(--escale-c);--rte-pad:var(--pad-c);position:sticky;top:var(--colle);z-index:20;height:var(--bande);background-color:var(--teinte-cours,#fff);box-shadow:0 1px 0 var(--filet);transition:--rte-e .32s var(--ease),--rte-pad .32s var(--ease),background-color .4s ease,box-shadow .3s ease}\nrdr-terres-engagements .pactes[data-route] .bande{margin-top:calc(var(--escale) / -2)}\nrdr-terres-engagements .pactes[data-route] .bande[data-etat=\"repos\"]{--rte-e:var(--escale);--rte-pad:0px;background-color:transparent;box-shadow:none}\nrdr-terres-engagements .pactes[data-route] .bande[data-etat=\"colle\"]{box-shadow:0 1px 0 rgba(25,29,49,.07),0 16px 26px -20px rgba(25,29,49,.55)}\nrdr-terres-engagements .pactes[data-route] .bande[data-etat=\"arrete\"]{box-shadow:none}\nrdr-terres-engagements .bande.net,rdr-terres-engagements .bande.net *{transition:none !important}\nrdr-terres-engagements .route{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--col-gap)}\nrdr-terres-engagements .pointille{position:absolute;z-index:0;top:calc(var(--rte-pad) + var(--rte-e) / 2 - 1.5px);left:calc((100% - 2 * var(--col-gap)) / 6);right:calc((100% - 2 * var(--col-gap)) / 6);height:3px;background:repeating-linear-gradient(90deg,rgba(25,29,49,.34) 0 10px,transparent 10px 20px);clip-path:inset(-2px var(--reste,0%) -2px 0);transition:clip-path 1.5s cubic-bezier(.4,0,.2,1)}\nrdr-terres-engagements .route.arme:not(.trace) .pointille{--reste:100%}\nrdr-terres-engagements .plein{position:absolute;top:-.5px;bottom:-.5px;background:var(--sc);border-radius:2px;transform-origin:0 50%;transform:scaleX(0);will-change:transform}\nrdr-terres-engagements .escale{--sc:var(--p1);position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:0;min-height:max(44px,var(--bande));padding:var(--rte-pad) 4px 4px;color:inherit;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:gap .32s var(--ease)}\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale{gap:12px;min-height:0}\nrdr-terres-engagements .escale-n{display:grid;place-items:center;flex:none;width:var(--rte-e);height:var(--rte-e);border-radius:calc(var(--rte-e) * .08) calc(var(--rte-e) * .28);background:#fff;border:2px solid rgba(25,29,49,.2);font:italic 400 calc(var(--rte-e) * .3 + 4px)/1 var(--titre);color:rgba(25,29,49,.6);box-shadow:0 6px 12px -8px rgba(25,29,49,.5);transition:background-color .3s,border-color .3s,color .3s,box-shadow .3s,opacity .3s,transform .35s var(--ease)}\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale-n{box-shadow:0 14px 26px -18px rgba(25,29,49,.6)}\nrdr-terres-engagements .route.arme:not(.trace) .escale-n{transform:scale(.4);opacity:0}\nrdr-terres-engagements .route.trace:not(.fini) .escale-n{transition-delay:var(--retard,0s)}\nrdr-terres-engagements .escale-nom{position:relative;font:700 12.5px/1.3 var(--police);color:rgba(25,29,49,.66);text-align:center;white-space:nowrap;transition:color .25s,font-size .32s var(--ease)}\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale-nom{font-size:14.5px;white-space:normal}\nrdr-terres-engagements .nom-court{display:none}\nrdr-terres-engagements .escale-nom::after{content:'';position:absolute;left:50%;bottom:-9px;width:20px;height:4px;margin-left:-10px;background:var(--sc);transform:skewX(-20deg) scaleX(0);transition:transform .3s var(--ease)}\nrdr-terres-engagements .escale.lu .escale-n{background:color-mix(in oklab,var(--sc) 22%,#fff);border-color:var(--sc);color:var(--marine)}\nrdr-terres-engagements .escale.lu .escale-nom{color:rgba(25,29,49,.84)}\nrdr-terres-engagements .escale[aria-current] .escale-n{background:var(--sc);border-color:var(--sc);color:var(--sc-txt,#fff);transform:scale(1.1)}\nrdr-terres-engagements .escale[aria-current] .escale-nom{color:var(--marine)}\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale[aria-current] .escale-nom::after{transform:skewX(-20deg) scaleX(1)}\n@media (hover:hover) and (pointer:fine){\nrdr-terres-engagements .escale:not([aria-current]):hover .escale-n{border-color:var(--sc);transform:translateY(-2px)}\n}\nrdr-terres-engagements .escale:focus-visible{outline:none}\nrdr-terres-engagements .escale:focus-visible .escale-n{outline:3px solid var(--marine);outline-offset:3px}\nrdr-terres-engagements .pa-tete{display:grid;grid-template-columns:minmax(0,1.14fr) minmax(0,.86fr);gap:clamp(26px,4.4vw,68px);align-items:center}\nrdr-terres-engagements .pa-tag{display:inline-flex;align-items:center;padding:5px 12px;border-radius:var(--angle-p);background:var(--pc);color:var(--pc-txt);font:800 11.5px/1.4 var(--police);letter-spacing:.12em;text-transform:uppercase}\nrdr-terres-engagements .pa-titre{margin-top:14px;font-size:clamp(26px,min(2.7vw,5vh),38px);line-height:1.14;color:var(--marine);text-wrap:balance}\nrdr-terres-engagements .pa-desc{margin-top:14px;font-size:clamp(15.5px,1.12vw,16.5px);line-height:1.72;color:var(--encre2);text-wrap:pretty}\nrdr-terres-engagements .pa-desc p+p{margin-top:10px}\nrdr-terres-engagements .pa-question{position:relative;margin-top:18px;padding:4px 0 4px 24px;font-style:italic;font-weight:600;font-size:clamp(16.5px,1.3vw,19px);line-height:1.5;color:var(--marine);text-wrap:pretty}\nrdr-terres-engagements .pa-question::before{content:'';position:absolute;left:0;top:6px;bottom:6px;width:5px;background:var(--pc);transform:skewX(-10deg)}\nrdr-terres-engagements .pa-visuel{position:relative;aspect-ratio:5/4;border-radius:var(--carte);overflow:hidden;background:color-mix(in oklab,var(--pc) 30%,#fff);border:6px solid #fff;box-shadow:0 30px 50px -28px rgba(25,29,49,.55);transform:rotate(var(--r,-1.2deg))}\nrdr-terres-engagements .pa-visuel img{width:100%;height:100%;object-fit:cover}\n@media (min-width:1101px){\nrdr-terres-engagements .pacte:nth-of-type(even) .pa-tete{grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr)}\n}\n@media (min-width:751px){\nrdr-terres-engagements .pacte:nth-of-type(even) .pa-visuel{order:-1}\n}\nrdr-terres-engagements .pa-acc{margin-top:calc(clamp(30px,5vh,50px) * var(--air));padding:4px clamp(18px,2.4vw,34px);border-radius:var(--carte);background:#fff;box-shadow:0 26px 50px -38px rgba(25,29,49,.55)}\nrdr-terres-engagements .st+.st{border-top:1px solid var(--filet)}\nrdr-terres-engagements .st-bouton{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:68px;padding:14px 0;border:0;background:none;text-align:left;cursor:pointer}\nrdr-terres-engagements .st-nom{font:700 clamp(16.5px,1.3vw,18.5px)/1.35 var(--police);color:var(--marine)}\nrdr-terres-engagements .st-signe{position:relative;display:grid;place-items:center;flex:none;width:36px;height:36px;border-radius:var(--angle-p);border:2px solid color-mix(in oklab,var(--pc) 70%,var(--marine));color:var(--marine);transition:background-color .2s,border-color .2s,color .2s}\nrdr-terres-engagements .st-signe::before,rdr-terres-engagements .st-signe::after{content:'';position:absolute;left:50%;top:50%;background:currentColor;border-radius:1px}\nrdr-terres-engagements .st-signe::before{width:14px;height:2.4px;transform:translate(-50%,-50%)}\nrdr-terres-engagements .st-signe::after{width:2.4px;height:14px;transform:translate(-50%,-50%);transition:transform .25s var(--ease)}\nrdr-terres-engagements .st.ouvert .st-signe{background:var(--pc);border-color:var(--pc);color:var(--pc-txt)}\nrdr-terres-engagements .st.ouvert .st-signe::after{transform:translate(-50%,-50%) rotate(90deg)}\n@media (hover:hover) and (pointer:fine){\nrdr-terres-engagements .st-bouton:hover .st-nom{text-decoration:underline;text-decoration-color:var(--pc);text-decoration-thickness:3px;text-underline-offset:5px}\n}\nrdr-terres-engagements .st-bouton:focus-visible{outline:3px solid var(--marine);outline-offset:2px;border-radius:var(--angle-p)}\nrdr-terres-engagements .st-tiroir{overflow:hidden;height:0;transition:height .35s cubic-bezier(.4,0,.2,1)}\nrdr-terres-engagements .pactes.net .st-tiroir,rdr-terres-engagements .pactes.net .st-signe::after{transition:none}\nrdr-terres-engagements .st-dedans{padding:0 0 24px}\nrdr-terres-engagements .st-liste{display:grid;gap:12px;max-width:92ch}\nrdr-terres-engagements .st-liste li{position:relative;padding-left:26px;font-size:15.5px;line-height:1.62;color:var(--encre)}\nrdr-terres-engagements .st-liste li::before{content:'';position:absolute;left:0;top:.66em;width:14px;height:4px;background:var(--pc);transform:skewX(-20deg)}\nrdr-terres-engagements .credits{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px;margin-left:10px}\nrdr-terres-engagements .credits::before{content:'';align-self:center;width:2.5px;height:13px;background:var(--pc);transform:skewX(-20deg);opacity:.85}\nrdr-terres-engagements .credit{display:inline-flex;align-items:center;gap:4px;max-width:100%;font:700 11.5px/1.5 var(--police);letter-spacing:.06em;text-transform:uppercase;color:var(--encre2);text-decoration:none}\nrdr-terres-engagements .st-liste li{min-width:0}\nrdr-terres-engagements a.credit{color:var(--marine);border-bottom:2px solid color-mix(in oklab,var(--pc) 55%,#fff);transition:border-color .15s,color .15s}\nrdr-terres-engagements a.credit .ico{width:10px;height:10px;stroke-width:2.6;opacity:.7}\nrdr-terres-engagements a.credit:hover{color:color-mix(in oklab,var(--pc) 60%,var(--marine));border-color:var(--pc)}\nrdr-terres-engagements a.credit:focus-visible{outline:2px solid var(--marine);outline-offset:2px}\n@media (pointer:coarse){\nrdr-terres-engagements a.credit{position:relative}\nrdr-terres-engagements a.credit::after{content:'';position:absolute;left:-2px;right:-2px;top:50%;height:44px;margin-top:-22px}\n}\nrdr-terres-engagements .st-boutons{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}\nrdr-terres-engagements .chiffres{position:relative;padding:calc(clamp(52px,8.4vh,96px) * var(--air)) 0 calc(clamp(56px,9vh,104px) * var(--air));background:#fff}\nrdr-terres-engagements .chiffres-grille{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(12px,1.6vw,22px)}\nrdr-terres-engagements .chiffre{--rte-pad:clamp(20px,2.2vw,30px);position:relative;isolation:isolate;container-type:inline-size;display:flex;flex-direction:column;justify-content:flex-end;min-height:clamp(170px,26vh,236px);padding:var(--rte-pad);border-radius:22px 6px 22px 6px;background:var(--g);color:var(--t);overflow:hidden;box-shadow:0 24px 40px -30px rgba(25,29,49,.6);cursor:default}\nrdr-terres-engagements .chiffre-pacte{display:flex;align-items:center;gap:10px;margin-bottom:auto;padding-bottom:18px;font:800 11px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;opacity:.86}\nrdr-terres-engagements .chiffre-pacte::before{content:'';width:26px;height:5px;background:currentColor;transform:skewX(-20deg)}\nrdr-terres-engagements .chiffre-val{display:flex;align-items:baseline;font-family:var(--titre);font-style:italic;font-size:min(clamp(48px,5vw,78px),calc((100cqi - 4px) / var(--n,3)));line-height:1;white-space:nowrap}\nrdr-terres-engagements .chiffre-val small{font-family:var(--police);font-style:normal;font-weight:800;font-size:.42em;margin-left:.12em}\nrdr-terres-engagements .chiffre-lib{margin-top:12px;max-width:34ch;font-weight:600;font-size:clamp(14px,1.1vw,15.5px);line-height:1.42;text-wrap:pretty}\nrdr-terres-engagements .chiffres-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:clamp(28px,4.6vh,44px)}\nrdr-terres-engagements .odo{display:inline-flex;align-items:flex-start}\nrdr-terres-engagements .odo-c{display:inline-block;height:1em;margin-right:-.05em;clip-path:inset(0 -40% 0 -40%)}\nrdr-terres-engagements .odo-r{display:block;will-change:transform}\nrdr-terres-engagements .odo-r i{display:block;height:1em;line-height:1em;font-style:inherit;text-align:center}\nrdr-terres-engagements .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-terres-engagements .rv.vu{opacity:1;transform:none}\n@media (max-height:820px) and (min-width:751px){\nrdr-terres-engagements .haut-chapo{font-size:15.5px;line-height:1.62}\nrdr-terres-engagements .mf-lead,rdr-terres-engagements .mf-strophe p{font-size:16.5px}\nrdr-terres-engagements .promesse-s{font-size:14.5px}\nrdr-terres-engagements .st-bouton{min-height:60px}\nrdr-terres-engagements .chiffre{min-height:clamp(150px,24vh,190px)}\nrdr-terres-engagements .escale-nom{font-size:12px}\n}\n@media (max-width:1100px){\nrdr-terres-engagements .pa-tete{grid-template-columns:minmax(0,1fr) minmax(0,.8fr)}\n}\n@media (min-width:751px) and (max-width:1100px){\nrdr-terres-engagements .pacte:nth-of-type(even) .pa-tete{grid-template-columns:minmax(0,.8fr) minmax(0,1fr)}\n}\n@media (max-width:750px){\nrdr-terres-engagements{font-size:15px}\nrdr-terres-engagements .haut{padding-top:26px}\nrdr-terres-engagements .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-terres-engagements .haut h1{font-size:clamp(32px,9.8vw,44px)}\nrdr-terres-engagements .haut-chapo{font-size:15px;line-height:1.62}\nrdr-terres-engagements .haut-photo{border-radius:22px 3px 14px 3px}\nrdr-terres-engagements .mf-grille{grid-template-columns:1fr;gap:20px}\nrdr-terres-engagements .manifeste h2{font-size:clamp(30px,9vw,38px)}\nrdr-terres-engagements .mf-lead,rdr-terres-engagements .mf-strophe p{font-size:16px}\nrdr-terres-engagements .mf-strophe{padding-left:22px}\nrdr-terres-engagements .promesses{grid-template-columns:1fr;gap:22px;margin-top:calc(34px * var(--air))}\nrdr-terres-engagements .promesse{display:grid;grid-template-columns:58px minmax(0,1fr);column-gap:12px;align-items:start;padding:0;text-align:left}\nrdr-terres-engagements .promesse-n{grid-row:span 2;font-size:44px;padding-top:2px}\nrdr-terres-engagements .promesse-t{margin-top:0;font-size:16px;text-wrap:pretty}\nrdr-terres-engagements .promesse-s{margin-top:4px;max-width:none;font-size:14.5px}\nrdr-terres-engagements .mf-chute{margin-top:30px;font-size:17px}\nrdr-terres-engagements .route{--col-gap:6px}\nrdr-terres-engagements .escale{padding-left:0;padding-right:0}\nrdr-terres-engagements .escale-nom{font-size:11.5px}\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale{gap:10px}\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale-nom{font-size:12.5px}\nrdr-terres-engagements .bande:not([data-etat=\"repos\"]) .nom-long{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-terres-engagements .bande:not([data-etat=\"repos\"]) .nom-court{display:inline}\nrdr-terres-engagements .pa-tete{grid-template-columns:1fr;gap:20px}\nrdr-terres-engagements .pa-visuel{order:-1;aspect-ratio:16/10;border-width:4px;transform:rotate(calc(var(--r,-1.2deg) * .6))}\nrdr-terres-engagements .pa-titre{margin-top:12px;font-size:clamp(24px,7.2vw,30px)}\nrdr-terres-engagements .pa-desc{font-size:15px}\nrdr-terres-engagements .pa-question{font-size:16.5px;padding-left:20px}\nrdr-terres-engagements .pa-acc{margin-top:calc(26px * var(--air));padding:2px 16px}\nrdr-terres-engagements .st-bouton{min-height:60px;padding:12px 0}\nrdr-terres-engagements .st-nom{font-size:16.5px}\nrdr-terres-engagements .st-liste li{font-size:15px;padding-left:22px}\nrdr-terres-engagements .st-liste li::before{width:12px}\nrdr-terres-engagements .credits{display:flex;margin:6px 0 0}\nrdr-terres-engagements .st-boutons .btn{width:100%;justify-content:space-between}\nrdr-terres-engagements .chiffres-grille{grid-template-columns:1fr;gap:10px}\nrdr-terres-engagements .chiffre{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;column-gap:16px;min-height:0;padding:14px 18px 18px}\nrdr-terres-engagements .chiffre-pacte{grid-column:1 / -1;margin:0;padding-bottom:8px;font-size:10.5px}\nrdr-terres-engagements .chiffre-val{font-size:clamp(40px,12vw,50px);min-width:2.1em}\nrdr-terres-engagements .chiffre-lib{margin-top:0;font-size:14px}\nrdr-terres-engagements .chiffres-actions{flex-direction:column}\nrdr-terres-engagements .chiffres-actions .btn{width:100%;justify-content:space-between}\n}\n@media (max-width:380px){\nrdr-terres-engagements .bande[data-etat=\"repos\"] .escale-nom{font-size:11.5px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-terres-engagements *{animation:none !important;transition:none !important}\nrdr-terres-engagements .rv{opacity:1;transform:none}\nrdr-terres-engagements .haut-photo img{transform:none}\n}";
  const GABARIT = "<header class=\"haut\" id=\"haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\" id=\"haut-txt\"></div>\n  </header>\n  <div class=\"trame\"><figure class=\"haut-photo\" id=\"haut-photo\"></figure></div>\n  <section class=\"manifeste\" id=\"manifeste\" aria-labelledby=\"t-manifeste\"></section>\n  <section class=\"pactes\" id=\"pactes\" aria-labelledby=\"t-pactes\"></section>\n  <section class=\"chiffres\" id=\"chiffres\" aria-label=\"Les chiffres de nos engagements\"></section>";
  const TRAD = {"Nos pactes d’engagement":"Our commitment pacts","Les chiffres de nos engagements":"Our commitments in figures"};
  const SOURCE = 'https://www.routedurhum.com/_functions/terres';

  function poserStyle() {
    if (document.getElementById('rdr-terres-engagements-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-terres-engagements-css';
    st.textContent = STYLE;
    document.head.appendChild(st);
  }

  

  const traduit = (v) => { const k = String(v || '').trim(); return k && Object.prototype.hasOwnProperty.call(TRAD, k) ? v.replace(k, TRAD[k]) : null; };
  function traduire(racine) {
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach((n) => { const v = traduit(n.nodeValue); if (v != null) n.nodeValue = v; });
    racine.querySelectorAll('[aria-label],[title],[alt]').forEach((el) => ['aria-label', 'title', 'alt'].forEach((a) => {
      if (!el.hasAttribute(a)) return;
      const v = traduit(el.getAttribute(a));
      if (v != null) el.setAttribute(a, v);
    }));
  }
  function prefixerLiens(racine) {
    racine.querySelectorAll('a[href^="/"]').forEach((a) => {
      const h = a.getAttribute('href');
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('//')) return;
      a.setAttribute('href', '/en' + h);
    });
  }

  



  function demarrer(D, racine, signal) {
    const ecouter = (type, f, o) => window.addEventListener(type, f, Object.assign({}, o && typeof o === 'object' ? o : {}, signal ? { signal } : {}));
    const mesurerBarre = () => {}, majBarre = () => {};
    const PAGE = { sections: D.sections || [], haut: D.haut, manifeste: D.manifeste, pactes: D.pactes, chiffres: D.chiffres || [], boutons: D.boutons || [] };
    const ARCS = D.arcs, COULEURS = D.couleurs, TEINTES = D.teintes;

 
const LU = {
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  fileText: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const IMG = (id, l, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 80) + ',enc_auto/x.jpg';
 
const jeu = (im, ratio, largeurs) => [...new Set(largeurs.map((l) => Math.min(l, im.l)))].map((w) => IMG(im.id, w, Math.round(w * ratio)) + ' ' + w + 'w').join(', ');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));



const FINE = String.fromCharCode(0x202F), INSEC = String.fromCharCode(0xA0);
const T = (s) => esc(String(s == null ? '' : s)
    .replace(/'/g, '’')
    .replace(/ — /g, INSEC + '– ')
    .replace(/\bEmeraude\b/g, 'Émeraude')
    .replace(/(\d{1,2})h(\d{2})/g, '$1' + INSEC + 'h' + INSEC + '$2')
    .replace(/(h\s\d{2}) - (\d)/g, '$1 – $2'))
  .replace(/(\d) ?%/g, '$1' + FINE + '%')
  .replace(/ ([?!:;])/g, FINE + '$1')
  .replace(/(\d) (ans|emplois)\b/g, '$1' + INSEC + '$2')
   
  .replace(/(Pointe-à-Pitre|Saint-Malo|Île-et-Vilaine|Côtes d’Armor|intra-muros|au-delà|éco-engagé|savoir-faire)/g, '<span class="nw">$1</span>');
const $ = (id) => (racine.id === id ? racine : racine.querySelector('[id="' + id + '"]'));
 
const chemin = (u) => String(u || '').trim().replace(/^https?:\/\/(www\.)?routedurhum\.com/, '');
const cible = (u) => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : '';
const luminance = (hex) => { const c = hex.replace('#', ''); return [0, 2, 4].map((i) => parseInt(c.substr(i, 2), 16) / 255).map((x) => x <= .03928 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4)).reduce((s, v, i) => s + v * [.2126, .7152, .0722][i], 0); };
const contraste = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
 
const texteSur = (fond) => contraste('#FFFFFF', fond) >= contraste('#191D31', fond) ? '#FFFFFF' : '#191D31';
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;

 
function lireInitiatives(v) {
  return String(v || '').split('\n').map((l) => l.trim()).filter(Boolean).map((ligne) => {
    const i = ligne.lastIndexOf(' — ');
    const texte = i === -1 ? ligne : ligne.slice(0, i).trim();
    const credits = i === -1 ? [] : ligne.slice(i + 3).split(' / ').map((seg) => { const j = seg.lastIndexOf(' → '); return j === -1 ? { nom: seg.trim(), lien: '' } : { nom: seg.slice(0, j).trim(), lien: seg.slice(j + 3).trim() }; }).filter((c) => c.nom);
    return { texte, credits };
  });
}
function lireBoutons(v) {
  return String(v || '').split('\n').map((l) => l.trim()).filter(Boolean).map((l) => { const i = l.lastIndexOf(' → '); return i === -1 ? null : { label: l.slice(0, i).trim(), url: l.slice(i + 3).trim() }; }).filter((b) => b && b.url);
}

 
function haut() {
  const H = PAGE.haut, p = H.photo;
  $('haut-txt').innerHTML = '<p class="surtitre">' + T(H.surtitre) + '</p><h1 class="titre">' + T(H.titre) + '</h1><p class="haut-chapo">' + T(H.chapo) + '</p>';
  $('haut-photo').innerHTML = '<img src="' + IMG(p.id, 1600, 600) + '" srcset="' + jeu(p, .375, [800, 1240, 1600]) + '" sizes="(max-width:1320px) 94vw, 1240px" alt="' + esc(p.alt) + '" fetchpriority="high" decoding="async">';
  const [x, y, l, h] = ARCS.crop;
  racine.style.setProperty('--arcs', 'url("https://static.wixstatic.com/media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1200,h_1200,q_85/x.png")');
}
function manifeste() {
  const M = PAGE.manifeste;
  $('manifeste').innerHTML = '<div class="trame">' +
    '<div class="mf-grille"><div class="rv"><p class="surtitre">' + T(M.surtitre) + '</p><h2 class="titre" id="t-manifeste">' + T(M.titre) + '</h2></div>' +
      '<div class="rv"><p class="mf-lead">' + T(M.lead) + '</p><div class="mf-strophe">' + M.strophe.map((l) => '<p>' + T(l) + '</p>').join('') + '</div></div></div>' +
    '<div class="promesses">' + M.promesses.map((pr, i) => {
      const P = PAGE.pactes[i];
      const phrase = T(pr.phrase).replace(pr.verbe, '<mark>' + pr.verbe + '</mark>');
      return '<a class="promesse rv" href="#pacte-' + P.cle + '" data-pacte="' + i + '"><span class="promesse-n" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="promesse-t">' + phrase + '</span><span class="promesse-s">' + T(pr.suite) + '</span><span class="sr"> (' + T(P.nomCourt) + ')</span></a>';
    }).join('') + '</div>' +
    '<p class="mf-chute rv">' + T(M.chute) + '</p></div>';
}
function pacte(P) {
  const acc = P.sousThemes.map((st, i) => {
    const puces = lireInitiatives(st.initiatives).map((it) => '<li>' + T(it.texte) +
      (it.credits.length ? ' <span class="credits">' + it.credits.map((c) => c.lien
        ? '<a class="credit" href="' + esc(chemin(c.lien)) + '"' + cible(chemin(c.lien)) + '><span>' + T(c.nom) + '</span>' + (cible(chemin(c.lien)) ? SVG('arrowUpRight') : '') + '</a>'
        : '<span class="credit"><span>' + T(c.nom) + '</span></span>').join('') + '</span>' : '') + '</li>').join('');
    const boutons = lireBoutons(st.boutons).map((b) => {
      const u = chemin(b.url), pdf = /\.pdf$/i.test(u), ext = /^https?:/.test(u);
      return '<a class="btn btn--contour btn--petit" href="' + esc(u) + '"' + cible(u) + '>' + T(b.label) + (pdf ? '<span class="format">PDF</span>' + SVG('fileText') : ext ? SVG('arrowUpRight', 'ico--sort') : SVG('arrowRight', 'ico--glisse')) + '</a>';
    }).join('');
    const id = 'st-' + P.cle + '-' + i;
    return '<div class="st" data-s="' + i + '"><h4><button type="button" class="st-bouton" aria-expanded="false" aria-controls="' + id + '"><span class="st-nom">' + T(st.nom) + '</span><span class="st-signe" aria-hidden="true"></span></button></h4>' +
      '<div class="st-tiroir" id="' + id + '" role="region" aria-label="' + esc(st.nom) + '"><div class="st-dedans"><ul class="st-liste">' + puces + '</ul>' + (boutons ? '<div class="st-boutons">' + boutons + '</div>' : '') + '</div></div></div>';
  }).join('');
  const im = P.image, c = COULEURS[P.couleurCle];
  

  return '<article class="pacte" id="pacte-' + P.cle + '" aria-labelledby="pt-' + P.cle + '" style="--pc:' + c + ';--pc-txt:' + texteSur(c) + ';--teinte:' + TEINTES[P.couleurCle] + '"><div class="trame">' +
    '<div class="pa-tete"><div class="pa-texte"><span class="pa-tag">' + T(P.tag) + '</span><h3 class="titre pa-titre" id="pt-' + P.cle + '">' + T(P.titre) + '</h3>' +
      '<div class="pa-desc"><p>' + T(P.description) + '</p></div><p class="pa-question">' + T(P.questionRhetorique) + '</p></div>' +
      '<figure class="pa-visuel" style="--r:' + P.r + '"><img src="' + IMG(im.id, Math.min(720, im.l), Math.round(Math.min(720, im.l) * .8)) + '" srcset="' + jeu(im, .8, [480, 720, 1000]) + '" sizes="(max-width:750px) 92vw, 36vw" alt="' + esc(im.alt) + '" loading="lazy" decoding="async" width="720" height="576"></figure></div>' +
    '<div class="pa-acc">' + acc + '</div></div></article>';
}
 
const nomBref = (P) => String(P.tag).split('·').pop().trim();
function pactes() {
  const n = PAGE.pactes.length, S = $('pactes');
   
  const pointille = '<span class="pointille" aria-hidden="true">' + PAGE.pactes.slice(0, -1).map((P, j) =>
    '<i class="plein" style="--sc:' + COULEURS[P.couleurCle] + ';left:' + (100 * j / (n - 1)).toFixed(4) + '%;width:' + (100 / (n - 1)).toFixed(4) + '%"></i>').join('') + '</span>';
  const escales = PAGE.pactes.map((P, k) => {
    const c = COULEURS[P.couleurCle];
    return '<a class="escale" href="#pacte-' + P.cle + '" data-pacte="' + k + '"' + (k || !SCRIPT ? '' : ' aria-current="step"') + ' style="--sc:' + c + ';--sc-txt:' + texteSur(c) + ';--retard:' + (0.25 + k * 0.35) + 's">' +
      '<span class="escale-n" aria-hidden="true">' + String(k + 1).padStart(2, '0') + '</span>' +
      '<span class="escale-nom"><span class="nom-long">' + T(P.nomCourt) + '</span><span class="nom-court" aria-hidden="true">' + T(nomBref(P)) + '</span></span></a>';
  }).join('');
  S.innerHTML = '<h2 class="sr" id="t-pactes">Nos pactes d’engagement</h2>' +
    '<div class="bande" id="route-pactes"' + (SCRIPT ? ' data-etat="repos"' : '') + '><div class="trame"><nav class="route" aria-label="Nos pactes d’engagement">' + pointille + escales + '</nav></div></div>' +
    PAGE.pactes.map(pacte).join('');
  S.style.setProperty('--t0', TEINTES[PAGE.pactes[0].couleurCle]);
  if (SCRIPT) S.dataset.route = 'vive';
}
 
function odo(v) {
  return '<span class="odo" aria-hidden="true">' + [...v].map((c) => '<span class="odo-c" data-d="' + c + '"><span class="odo-r">' + Array.from({ length: 30 }, (_, k) => '<i>' + (k % 10) + '</i>').join('') + '</span></span>').join('') + '</span>';
}
function chiffres() {
  $('chiffres').innerHTML = '<div class="trame"><div class="chiffres-grille" role="list">' + PAGE.chiffres.map((f) => {
    const P = PAGE.pactes[f.pacte], g = COULEURS[P.couleurCle];
    const n = [...f.v].length * .7 + (f.u ? .5 : 0) + .1;
    return '<div class="chiffre rv" role="listitem" style="--g:' + g + ';--t:' + texteSur(g) + '"><p class="chiffre-pacte">' + T(P.nomCourt) + '</p>' +
      '<p class="chiffre-val" style="--n:' + n.toFixed(2) + '"><span class="sr">' + T(f.v + (f.u ? ' ' + f.u : '')) + '</span>' + odo(f.v) + (f.u ? '<small aria-hidden="true">' + esc(f.u) + '</small>' : '') + '</p>' +
      '<p class="chiffre-lib">' + T(f.b) + '</p></div>';
  }).join('') + '</div>' +
  '<div class="chiffres-actions rv">' + PAGE.boutons.map((b) => '<a class="btn btn--' + b.style + '" href="' + esc(b.lien) + '">' + T(b.texte) + SVG('arrowRight', 'ico--glisse') + '</a>').join('') + '</div></div>';
}

 
const ouverts = PAGE.pactes.map(() => ({ 0: true }));
function majTiroirs(sansAnim) {
  const S = $('pactes');
  if (sansAnim) S.classList.add('net');
  S.querySelectorAll('.pacte').forEach((pan, k) => pan.querySelectorAll('.st').forEach((st, i) => {
    const o = !!ouverts[k][i];
    st.classList.toggle('ouvert', o);
    st.querySelector('.st-bouton').setAttribute('aria-expanded', String(o));
    st.querySelector('.st-tiroir').style.height = o ? st.querySelector('.st-dedans').offsetHeight + 'px' : '0px';
  }));
  if (sansAnim) { void S.offsetHeight; S.classList.remove('net'); }
}
function brancherTiroirs() {
  const S = $('pactes');
  S.querySelectorAll('.pacte').forEach((pan, k) => pan.querySelectorAll('.st-bouton').forEach((b, i) => b.addEventListener('click', () => { ouverts[k][i] = !ouverts[k][i]; majTiroirs(); })));
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(() => majTiroirs(true)); S.querySelectorAll('.st-dedans').forEach((d) => ro.observe(d)); }
}

 
const varPx = (n, d) => parseFloat(getComputedStyle(racine).getPropertyValue(n)) || d;
const colle = () => varPx('--colle', 56);











const RT = { pret: false, yColle: 0, yStop: 0, L: 0, hauts: [], etat: '', actif: -1, f: -1, B: null, pleins: [], escales: [] };
function mesurerRoute() {
  const S = $('pactes'), B = RT.B, y = scrollY;
  const haut = S.getBoundingClientRect().top + y, bas = haut + S.offsetHeight, c = colle(), h = B.offsetHeight;
  RT.yColle = haut + (parseFloat(getComputedStyle(B).marginTop) || 0) - c;
  RT.yStop = bas - h - c;
  RT.L = c + h + 2;
  RT.hauts = [...S.querySelectorAll('.pacte')].map((p) => p.getBoundingClientRect().top + y);
  RT.pret = true;
}
function majRoute() {
  if (!RT.pret) return;
  const y = scrollY, H = RT.hauts, n = H.length, B = RT.B;
  const etat = y < RT.yColle - 1 ? 'repos' : y < RT.yStop ? 'colle' : 'arrete';
  let k = 0;
  for (let j = 1; j < n; j++) if (H[j] <= y + RT.L) k = j;
  const f = k < n - 1 ? (k + Math.min(1, Math.max(0, (y + RT.L - H[k]) / (H[k + 1] - H[k])))) / (n - 1) : 1;
  if (etat !== RT.etat) { RT.etat = etat; B.dataset.etat = etat; }
  if (k !== RT.actif) {
    RT.actif = k; B.dataset.actif = String(k);
    B.style.setProperty('--teinte-cours', TEINTES[PAGE.pactes[k].couleurCle]);
    RT.escales.forEach((a, j) => { a.classList.toggle('lu', j < k); if (j === k) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current'); });
  }
  if (f !== RT.f && (Math.abs(f - RT.f) > .0004 || f === 0 || f === 1)) {
    RT.f = f;
    RT.pleins.forEach((e, j) => { e.style.transform = 'scaleX(' + Math.min(1, Math.max(0, f * (n - 1) - j)).toFixed(4) + ')'; });
  }
}
 
function allerAuPacte(k, doux) {
  const P = $('pacte-' + PAGE.pactes[k].cle);
  if (!P) return;
  const y = Math.max(0, Math.round(P.getBoundingClientRect().top + scrollY - colle() - $('route-pactes').offsetHeight));
  if (doux && !reduit) { scrollTo({ top: y, behavior: 'smooth' }); return; }
  const r = document.documentElement.style, avant = r.scrollBehavior;
  r.scrollBehavior = 'auto'; scrollTo(0, y); r.scrollBehavior = avant;
}
const cleDuHash = () => { let h = ''; try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { h = ''; } return (h.match(/^pacte-([\w-]+)$/) || [])[1]; };
const pacteDemande = () => PAGE.pactes.findIndex((P) => P.cle === (Q.get('pacte') || cleDuHash()));



function arriver(k) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  allerAuPacte(k, false);
  const P = $('pacte-' + PAGE.pactes[k].cle), B = RT.B;
  let touche = false;
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => ecouter(t, () => { touche = true; }, { once: true, passive: true }));
  const recaler = () => { if (!touche && Math.abs(P.getBoundingClientRect().top - colle() - B.offsetHeight) > .5) allerAuPacte(k, false); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recaler);
  ecouter('load', recaler, { once: true });
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(recaler); ro.observe($('terres-engagements')); setTimeout(() => ro.disconnect(), 4000); }
}
function brancherRoute() {
  const B = RT.B = $('route-pactes'), route = B.querySelector('.route');
  RT.pleins = [...B.querySelectorAll('.plein')];
  RT.escales = [...B.querySelectorAll('.escale')];
   
  racine.querySelectorAll('[data-pacte]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    const k = +a.dataset.pacte, P = PAGE.pactes[k];
    allerAuPacte(k, true);
    history.replaceState(null, '', '#pacte-' + P.cle);
    const t = $('pt-' + P.cle); t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true });
  }));
  ecouter('hashchange', () => { const k = PAGE.pactes.findIndex((P) => P.cle === cleDuHash()); if (k >= 0) allerAuPacte(k, true); });
  mesurerRoute();
  const k = pacteDemande();
  if (k >= 0) { route.classList.add('trace', 'fini'); arriver(k); }
   
  else if (!reduit && 'IntersectionObserver' in window) {
    route.classList.add('arme');
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { route.classList.add('trace'); io.disconnect(); setTimeout(() => route.classList.add('fini'), 1900); } }), { threshold: .6 });
    io.observe(route);
  }
   
  B.classList.add('net'); majRoute(); void B.offsetHeight; B.classList.remove('net');
}

 
function rouler(carte, retard) {
  const cols = [...carte.querySelectorAll('.odo-c')];
  cols.forEach((c) => { c.firstChild.style.transition = 'none'; c.firstChild.style.transform = 'translateY(0)'; });
  void carte.offsetWidth;
  cols.forEach((c, k) => {
    const r = c.firstChild, d = +c.dataset.d;
    r.style.transition = reduit ? 'none' : 'transform ' + (1.3 + k * 0.2).toFixed(2) + 's cubic-bezier(.15,.7,.2,1) ' + (retard + k * 0.05).toFixed(2) + 's';
    r.style.transform = 'translateY(-' + (20 + d) + 'em)';
  });
}
function ajusterRouleaux() {
  racine.querySelectorAll('.odo-c').forEach((c) => {
    const s = document.createElement('span');
    s.textContent = c.dataset.d; s.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
    c.parentNode.appendChild(s);
    const px = parseFloat(getComputedStyle(c).fontSize) || 1;
    c.style.width = (s.getBoundingClientRect().width / px).toFixed(3) + 'em';
    s.remove();
  });
}
function brancherChiffres() {
  ajusterRouleaux();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajusterRouleaux);
  const cartes = [...racine.querySelectorAll('.chiffre')];
  if (!('IntersectionObserver' in window)) { cartes.forEach((c) => rouler(c, 0)); return; }
  const vu = new IntersectionObserver((es) => es.forEach((e) => { if (!e.isIntersecting) return; vu.unobserve(e.target); rouler(e.target, cartes.indexOf(e.target) * 0.18); }), { threshold: 0.5 });
  cartes.forEach((c) => {
    vu.observe(c);
    c.addEventListener('mouseenter', () => { if (!c.dataset.encours) { c.dataset.encours = '1'; rouler(c, 0); setTimeout(() => { delete c.dataset.encours; }, 2400); } });
  });
}

 
function reveler() {
  if (reduit || !('IntersectionObserver' in window)) { racine.querySelectorAll('.rv').forEach((e) => e.classList.add('vu')); return; }
  const vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  racine.querySelectorAll('.rv').forEach((e) => vus.observe(e));
}

const Q = new URLSearchParams(location.search);
 
const SCRIPT = Q.get('script') !== 'non';

haut(); manifeste(); pactes(); chiffres();
brancherTiroirs(); brancherChiffres(); reveler();
majTiroirs(true);

if (SCRIPT) brancherRoute();

 
let rafDefil = false, rafMesure = false;
ecouter('scroll', () => { if (rafDefil) return; rafDefil = true; requestAnimationFrame(() => { rafDefil = false; majBarre(); majRoute(); }); }, { passive: true });
function remesurer() { if (rafMesure) return; rafMesure = true; requestAnimationFrame(() => { rafMesure = false; mesurerBarre(); if (RT.B) { mesurerRoute(); majRoute(); } majBarre(); }); }
ecouter('resize', remesurer);
ecouter('load', remesurer);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(remesurer);
if ('ResizeObserver' in window) new ResizeObserver(remesurer).observe($('terres-engagements'));

  }

  const jeuValide = (D) => !!(D && D.haut && D.manifeste && D.arcs && D.couleurs && D.teintes && Array.isArray(D.pactes) && D.pactes.length);

  class RdrTerresEngagements extends HTMLElement {
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
        if (!this.firstChild) this.innerHTML = "<div class=\"rte-attente\" aria-hidden=\"true\"><div class=\"rte-sq-haut\"><div class=\"rte-sq-trame\"><i class=\"rte-sq-l rte-sq-k\"></i><i class=\"rte-sq-l rte-sq-t\"></i><i class=\"rte-sq-l rte-sq-t rte-sq-t2\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p1\"></i><i class=\"rte-sq-l rte-sq-p\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p3\"></i></div></div><div class=\"rte-sq-trame rte-sq-sec\"><i class=\"rte-sq-l rte-sq-k\"></i><i class=\"rte-sq-l rte-sq-t\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p1\"></i><i class=\"rte-sq-l rte-sq-p\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p3\"></i></div><div class=\"rte-sq-trame rte-sq-cartes\"><i class=\"rte-sq-c\"></i><i class=\"rte-sq-c\"></i><i class=\"rte-sq-c\"></i></div><div class=\"rte-sq-trame rte-sq-sec\"><i class=\"rte-sq-l rte-sq-k\"></i><i class=\"rte-sq-l rte-sq-t\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p1\"></i><i class=\"rte-sq-l rte-sq-p\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p3\"></i></div></div>";
        return;
      }
      this._monte = true; this._jeu = D;
      clearTimeout(this._minuteur); this._minuteur = null;
      this._ctrl = typeof AbortController === 'function' ? new AbortController() : null;
      this.innerHTML = '<div class="rte-page" id="terres-engagements">' + GABARIT + '</div>';
      const racine = this.firstElementChild;
      try { demarrer(D, racine, this._ctrl ? this._ctrl.signal : null); } catch (e) { console.error('[rdr-terres-engagements]', e); }
      if (this._lang() === 'en') { traduire(racine); prefixerLiens(racine); }
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
      this.innerHTML = '<div class="rte-vide"><h3>' + (en ? 'Our commitments will be back in a moment' : 'Nos engagements reviennent dans un instant') + '</h3><p>' + (en ? 'The pacts could not be loaded.' : 'Les pactes n\u2019ont pas pu être chargés.') + '</p><button type="button">' + (en ? 'Try again' : 'Réessayer') + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = "<div class=\"rte-attente\" aria-hidden=\"true\"><div class=\"rte-sq-haut\"><div class=\"rte-sq-trame\"><i class=\"rte-sq-l rte-sq-k\"></i><i class=\"rte-sq-l rte-sq-t\"></i><i class=\"rte-sq-l rte-sq-t rte-sq-t2\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p1\"></i><i class=\"rte-sq-l rte-sq-p\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p3\"></i></div></div><div class=\"rte-sq-trame rte-sq-sec\"><i class=\"rte-sq-l rte-sq-k\"></i><i class=\"rte-sq-l rte-sq-t\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p1\"></i><i class=\"rte-sq-l rte-sq-p\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p3\"></i></div><div class=\"rte-sq-trame rte-sq-cartes\"><i class=\"rte-sq-c\"></i><i class=\"rte-sq-c\"></i><i class=\"rte-sq-c\"></i></div><div class=\"rte-sq-trame rte-sq-sec\"><i class=\"rte-sq-l rte-sq-k\"></i><i class=\"rte-sq-l rte-sq-t\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p1\"></i><i class=\"rte-sq-l rte-sq-p\"></i><i class=\"rte-sq-l rte-sq-p rte-sq-p3\"></i></div></div>"; this._chercher(); });
    }
  }
  customElements.define("rdr-terres-engagements", RdrTerresEngagements);
})();
})();
