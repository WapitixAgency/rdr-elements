/* rdr-elements esk | source route-du-rhum a47ed19 | rdr-espace-skippers.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["esk"]="a47ed19";performance.mark("rdr-elements:esk")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-espace-skippers")) return;
  const CSS = "rdr-espace-skippers{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-espace-skippers .res-page{display:block}\nrdr-espace-skippers .res-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-espace-skippers .res-sq-haut{display:flex;align-items:center;min-height:clamp(200px,calc(28.4vh + 1.06 * clamp(40px,min(4.6vw,8.4vh),68px)),414px);background:#00676E}\nrdr-espace-skippers .res-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-espace-skippers .res-sq-l,rdr-espace-skippers .res-sq-c{position:relative;display:block;overflow:hidden}\nrdr-espace-skippers .res-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-espace-skippers .res-sq-k{width:120px;height:11px}\nrdr-espace-skippers .res-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-espace-skippers .res-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-espace-skippers .res-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-espace-skippers .res-sq-p1{margin-top:30px}\nrdr-espace-skippers .res-sq-p3{width:min(380px,62%)}\nrdr-espace-skippers .res-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-espace-skippers .res-sq-sec .res-sq-l{background:rgba(14,17,29,.08)}\nrdr-espace-skippers .res-sq-sec .res-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-espace-skippers .res-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-espace-skippers .res-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-espace-skippers .res-sq-l::after,rdr-espace-skippers .res-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:res-sq-luire 1.6s ease-in-out infinite}\nrdr-espace-skippers .res-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-espace-skippers .res-sq-sec .res-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-espace-skippers .res-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes res-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-espace-skippers .res-sq-haut{min-height:calc(26px + 6vh + 35.6vw)}rdr-espace-skippers .res-sq-cartes{grid-template-columns:1fr}rdr-espace-skippers .res-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-espace-skippers .res-sq-l::after,rdr-espace-skippers .res-sq-c::after{animation:none;display:none}}\nrdr-espace-skippers .res-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-espace-skippers .res-vide h3{margin:0;font-size:22px}\nrdr-espace-skippers .res-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-espace-skippers .res-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-espace-skippers{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.76);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px);--entete:175px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px; --photo-h:clamp(210px,34vh,440px); --colle:56px;--barre-h:68px; --vig-l:136px; --air:1.5; --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-espace-skippers{--air:1.3;--entete:120px;--marge:20px;--photo-h:clamp(176px,50vw,232px);--barre-h:60px;--vig-l:92px;--colle:60px}\n}\nrdr-espace-skippers *{box-sizing:border-box}\nrdr-espace-skippers{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-espace-skippers img{display:block;max-width:100%}\nrdr-espace-skippers a{color:inherit}\nrdr-espace-skippers h1,rdr-espace-skippers h2,rdr-espace-skippers h3,rdr-espace-skippers p,rdr-espace-skippers figure,rdr-espace-skippers ul{margin:0}\nrdr-espace-skippers ul{padding:0;list-style:none}\nrdr-espace-skippers button{font:inherit;color:inherit}\nrdr-espace-skippers .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-espace-skippers .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-espace-skippers .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-espace-skippers .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-espace-skippers .nw{white-space:nowrap}\nrdr-espace-skippers .res-page>header,rdr-espace-skippers .res-page>section{scroll-margin-top:24px}\nrdr-espace-skippers .rub,rdr-espace-skippers #une-question{scroll-margin-top:calc(var(--colle) + var(--barre-h))}\nrdr-espace-skippers .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-espace-skippers .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .btn:hover .ico--glisse{transform:translateX(3px)}}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .btn:hover .ico--sort{transform:translate(2px,-2px)}}\nrdr-espace-skippers .btn:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-espace-skippers .btn--marine{background:var(--marine);border-color:var(--marine);color:#fff}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-espace-skippers .btn--grand{min-height:58px;padding:12px 22px;gap:14px;font-size:16px}\nrdr-espace-skippers .btn--grand .ico{width:20px;height:20px}\nrdr-espace-skippers .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(30px,5.4vh,60px) 0 calc(var(--photo-h) / 2 + clamp(28px,4.4vh,46px))}\nrdr-espace-skippers .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-espace-skippers .haut h1{margin-top:clamp(10px,1.6vh,16px);font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-espace-skippers .haut-photo{position:relative;z-index:2;height:var(--photo-h);margin-top:calc(var(--photo-h) / -2);border-radius:32px 4px 20px 4px;overflow:hidden;background:#3A2A2C;box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-espace-skippers .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 58%;transform:scale(1.05);animation:res-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes res-zoom{to{transform:scale(1)}}\nrdr-espace-skippers .inscription{position:relative;padding:calc(clamp(40px,6.6vh,76px) * var(--air)) 0 calc(clamp(30px,5vh,56px) * var(--air))}\nrdr-espace-skippers .in-grille{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(24px,4.6vw,72px);align-items:start}\nrdr-espace-skippers .in-titre{font-size:clamp(30px,min(3.15vw,6.6vh),46px);line-height:1.08;color:var(--marine);text-wrap:balance}\nrdr-espace-skippers .in-texte p{max-width:58ch;font-size:clamp(16px,1.25vw,18px);line-height:1.66;font-weight:500;color:var(--encre);text-wrap:pretty}\nrdr-espace-skippers .in-action{display:flex;flex-wrap:wrap;align-items:center;gap:8px 18px;margin-top:clamp(18px,2.8vh,28px)}\nrdr-espace-skippers .in-action .btn{max-width:100%;box-shadow:0 18px 30px -22px rgba(25,29,49,.6)}\nrdr-espace-skippers .in-dest{font:600 13px/1.4 var(--police);color:var(--encre2)}\nrdr-espace-skippers .barre{position:sticky;top:var(--colle);z-index:20;background:rgba(255,255,255,.94);-webkit-backdrop-filter:saturate(1.4) blur(10px);backdrop-filter:saturate(1.4) blur(10px);border-top:1px solid var(--filet);border-bottom:1px solid transparent;transition:border-color .2s,box-shadow .2s}\nrdr-espace-skippers .barre.collee{border-top-color:transparent;border-bottom-color:var(--filet);box-shadow:0 10px 24px -20px rgba(25,29,49,.45)}\nrdr-espace-skippers .barre-in{display:flex;align-items:center;gap:14px;min-height:var(--barre-h)}\nrdr-espace-skippers .puces{flex:1;min-width:0;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 2px}\nrdr-espace-skippers .puces::-webkit-scrollbar{display:none}\nrdr-espace-skippers .puce{flex:none;display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:0 14px;border:1.5px solid var(--filet);border-radius:var(--angle-p);background:#fff;color:var(--encre);text-decoration:none;font:700 13px/1 var(--police);white-space:nowrap;transition:background .2s,border-color .2s,color .2s}\nrdr-espace-skippers .puce b{font-weight:800;font-size:11.5px;color:var(--vert2);font-variant-numeric:tabular-nums}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .puce:hover{border-color:var(--vert1)}}\nrdr-espace-skippers .puce:focus-visible{outline:3px solid var(--marine);outline-offset:2px}\nrdr-espace-skippers .puce[aria-current=\"true\"]{background:var(--vert1);border-color:var(--vert1);color:#fff}\nrdr-espace-skippers .puce[aria-current=\"true\"] b{color:var(--jaune)}\nrdr-espace-skippers .puce--bientot{border-style:dashed;color:var(--encre2)}\nrdr-espace-skippers .puce--bientot b{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--encre2)}\nrdr-espace-skippers .puces.deborde{-webkit-mask:linear-gradient(90deg,#000 calc(100% - 44px),transparent);mask:linear-gradient(90deg,#000 calc(100% - 44px),transparent)}\nrdr-espace-skippers .bar-q{flex:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-width:46px;min-height:44px;padding:0 16px;border:1.5px solid var(--marine);border-radius:var(--angle-p);background:var(--marine);color:#fff;text-decoration:none;font:700 13px/1 var(--police);white-space:nowrap;transition:background .2s,border-color .2s}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .bar-q:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-espace-skippers .bar-q:focus-visible{outline:3px solid var(--jaune);outline-offset:2px}\nrdr-espace-skippers .bar-q .ico{width:18px;height:18px;stroke-width:2.3}\nrdr-espace-skippers .rub{position:relative;padding:calc(clamp(34px,5.4vh,64px) * var(--air)) 0}\nrdr-espace-skippers .rub--teinte{background:var(--teinte)}\nrdr-espace-skippers .rub-tete{display:flex;align-items:baseline;gap:clamp(12px,1.4vw,18px);margin-bottom:clamp(18px,3vh,30px)}\nrdr-espace-skippers .rub-num{flex:none;font:italic 400 clamp(20px,1.8vw,26px)/1 var(--titre);color:var(--vert2);font-variant-numeric:tabular-nums}\nrdr-espace-skippers .rub-titre{font-size:clamp(26px,min(2.7vw,5.2vh),40px);color:var(--marine);text-wrap:balance}\nrdr-espace-skippers .rub-nb{margin-left:auto;flex:none;font:700 11px/1 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--encre2);white-space:nowrap}\nrdr-espace-skippers .rub--bientot{padding:calc(clamp(22px,3.6vh,40px) * var(--air)) 0}\nrdr-espace-skippers .rub--bientot .rub-tete{align-items:center;margin-bottom:0}\nrdr-espace-skippers .rub--bientot .rub-titre{color:rgba(25,29,49,.55)}\nrdr-espace-skippers .bientot{margin-left:auto;flex:none;display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border-radius:7px 2px 7px 2px;background:#fff;box-shadow:0 0 0 1px rgba(25,29,49,.08);color:var(--vert1);font:800 10.5px/1 var(--police);letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}\nrdr-espace-skippers .bientot .ico{width:14px;height:14px;stroke-width:2.4}\nrdr-espace-skippers .docs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(12px,1.4vw,18px)}\nrdr-espace-skippers .docs>li{display:flex;min-width:0}\nrdr-espace-skippers .fiche{position:relative;flex:1;min-width:0;display:grid;grid-template-columns:var(--vig-l) minmax(0,1fr);grid-template-rows:auto 1fr;grid-template-areas:\"vig nom\" \"vig act\";gap:8px 16px;padding:12px 14px 10px 12px;border-radius:16px 4px 16px 4px;background:#fff;color:var(--encre);box-shadow:0 20px 34px -24px rgba(25,29,49,.55),0 0 0 1px rgba(25,29,49,.05);transition:transform .25s var(--ease),box-shadow .25s}\nrdr-espace-skippers .rub:not(.rub--teinte) .fiche{box-shadow:0 18px 30px -26px rgba(25,29,49,.5),0 0 0 1px rgba(25,29,49,.11)}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .fiche:hover{transform:translateY(-3px);box-shadow:0 26px 40px -24px rgba(25,29,49,.62),0 0 0 1px rgba(25,29,49,.06)}}\nrdr-espace-skippers .fiche:has(.fiche-lien:focus-visible){outline:3px solid var(--marine);outline-offset:3px}\nrdr-espace-skippers .fiche-vig{grid-area:vig;align-self:start;width:var(--vig-l);aspect-ratio:4/3;border-radius:12px 3px 12px 3px;overflow:hidden;background:var(--teinte)}\nrdr-espace-skippers .fiche-vig img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .fiche:hover .fiche-vig img{transform:scale(1.05)}}\nrdr-espace-skippers .fiche-nom{grid-area:nom;align-self:start;padding-top:3px;font:italic 400 clamp(16px,1.22vw,17.5px)/1.16 var(--titre);text-transform:uppercase;letter-spacing:.004em;color:var(--marine);text-wrap:balance;overflow-wrap:anywhere}\nrdr-espace-skippers .fiche-lien{color:inherit;text-decoration:none;outline:none}\nrdr-espace-skippers .fiche-lien::after{content:'';position:absolute;inset:0;z-index:1;border-radius:inherit}\nrdr-espace-skippers .fiche-act{grid-area:act;align-self:end;display:flex;flex-wrap:wrap;gap:0 18px;margin-bottom:-4px}\nrdr-espace-skippers .act{position:relative;display:inline-flex;flex-wrap:wrap;align-items:center;gap:0 8px;min-height:44px;font:800 13.5px/1.2 var(--police);color:var(--vert1);text-decoration:none}\nrdr-espace-skippers a.act{z-index:2}@media (hover:hover) and (pointer:fine){rdr-espace-skippers a.act:hover .act-mot{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px}}\nrdr-espace-skippers a.act:focus-visible{outline:3px solid var(--marine);outline-offset:2px;border-radius:4px}\nrdr-espace-skippers .act-mot{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}\nrdr-espace-skippers .act .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .fiche:hover .act--1 .ico--telecharger{transform:translateY(2px)}}@media (hover:hover) and (pointer:fine){rdr-espace-skippers .fiche:hover .act--1 .ico--ouvrir{transform:translate(2px,-2px)}}\nrdr-espace-skippers .act-meta{display:inline-flex;align-items:center;gap:7px;font:600 12.5px/1.3 var(--police);color:var(--encre2);white-space:nowrap}\nrdr-espace-skippers .format{display:inline-block;padding:1px 7px;border-radius:5px;background:rgba(25,29,49,.08);font:800 10.5px/1.6 var(--police);letter-spacing:.1em;color:var(--encre2)}\nrdr-espace-skippers .question{position:relative;background:var(--jaune);color:var(--encre);padding:calc(clamp(44px,7.4vh,84px) * var(--air)) 0}\nrdr-espace-skippers .ct-grille{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:clamp(24px,5vw,84px);align-items:center}\nrdr-espace-skippers .sec-titre{font-size:clamp(30px,min(3.4vw,6vh),48px);line-height:1.1;color:var(--marine);text-wrap:balance}\nrdr-espace-skippers .ct-action{display:flex;justify-content:flex-end}\nrdr-espace-skippers .ct-action .btn{max-width:100%;box-shadow:0 18px 30px -20px rgba(25,29,49,.6)}\nrdr-espace-skippers .ct-action .btn span{min-width:0}\nrdr-espace-skippers .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-espace-skippers .rv.vu{opacity:1;transform:none}\n@media (max-height:820px) and (min-width:751px){\nrdr-espace-skippers .in-texte p{font-size:16px}\nrdr-espace-skippers .fiche-nom{font-size:16px}\n}\n@media (max-width:1360px) and (min-width:1061px){\nrdr-espace-skippers{--vig-l:118px}\n}\n@media (max-width:1180px) and (min-width:751px){\nrdr-espace-skippers .bar-q{width:46px;padding:0}\nrdr-espace-skippers .bar-q .mot{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n}\n@media (max-width:1060px){\nrdr-espace-skippers .docs{grid-template-columns:repeat(2,minmax(0,1fr))}\n}\n@media (max-width:900px){\nrdr-espace-skippers .in-grille{grid-template-columns:minmax(0,1fr);gap:calc(14px * var(--air))}\n}\n@media (max-width:750px){\nrdr-espace-skippers{font-size:15px}\nrdr-espace-skippers .haut{padding-top:26px}\nrdr-espace-skippers .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-espace-skippers .haut h1{font-size:clamp(34px,10vw,44px)}\nrdr-espace-skippers .haut-photo{border-radius:22px 3px 14px 3px}\nrdr-espace-skippers .in-titre{font-size:clamp(26px,7.6vw,32px);line-height:1.1}\nrdr-espace-skippers .in-texte p{font-size:15.5px;line-height:1.66}\nrdr-espace-skippers .in-action .btn{width:100%;justify-content:space-between;padding:12px 18px;font-size:15px}\nrdr-espace-skippers .in-dest{flex-basis:100%}\nrdr-espace-skippers .barre-in{gap:10px}\nrdr-espace-skippers .puce{padding:0 12px;font-size:12.5px}\nrdr-espace-skippers .bar-q{width:46px;padding:0}\nrdr-espace-skippers .bar-q .mot{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-espace-skippers .rub-tete{flex-wrap:wrap;gap:6px 12px}\nrdr-espace-skippers .rub-titre{flex:1 1 0;min-width:0;font-size:clamp(23px,7vw,30px)}\nrdr-espace-skippers .rub-nb{flex-basis:100%;margin-left:0}\nrdr-espace-skippers .rub--bientot .rub-tete{flex-wrap:nowrap}\nrdr-espace-skippers .rub--bientot .bientot{margin-left:auto}\nrdr-espace-skippers .question{padding:calc(44px * var(--air)) 0 calc(48px * var(--air))}\nrdr-espace-skippers .ct-grille{grid-template-columns:minmax(0,1fr);gap:24px}\nrdr-espace-skippers .sec-titre{font-size:clamp(28px,8.4vw,36px)}\nrdr-espace-skippers .ct-action .btn{width:100%;justify-content:space-between;gap:12px;padding:12px 18px;font-size:15px}\nrdr-espace-skippers .ct-action .btn span{flex:1}\nrdr-espace-skippers .ct-action .btn .ico--glisse{display:none}\n}\n@media (max-width:640px){\nrdr-espace-skippers .docs{grid-template-columns:minmax(0,1fr);gap:10px}\nrdr-espace-skippers .fiche{gap:4px 14px;padding:10px 12px 8px 10px}\nrdr-espace-skippers .fiche-nom{font-size:15.5px}\nrdr-espace-skippers .act{font-size:13.5px}\n}\n@media (max-width:400px){\nrdr-espace-skippers .rub--bientot .rub-tete{flex-wrap:wrap}\nrdr-espace-skippers .rub--bientot .bientot{margin-left:0}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-espace-skippers *{animation:none !important;transition:none !important}\nrdr-espace-skippers .rv,rdr-espace-skippers .rv.vu{opacity:1;transform:none}\nrdr-espace-skippers .haut-photo img{transform:none}\n}";
  const GABARIT = "<div class=\"res-page\" id=\"espace-skippers\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\" id=\"haut-txt\"></div>\n  </header>\n  <div class=\"trame\"><figure class=\"haut-photo\" id=\"haut-photo\"></figure></div>\n  <section class=\"inscription\" id=\"inscription\" aria-labelledby=\"t-inscription\"></section>\n  <div class=\"documents\">\n    <nav class=\"barre\" id=\"barre\"></nav>\n    <div id=\"rubriques\"></div>\n  </div>\n  <section class=\"question\" id=\"une-question\" aria-labelledby=\"t-une-question\"></section></div>";
  const ATTENTE = "<div class=\"res-attente\" aria-hidden=\"true\"><div class=\"res-sq-haut\"><div class=\"res-sq-trame\"><i class=\"res-sq-l res-sq-k\"></i><i class=\"res-sq-l res-sq-t\"></i><i class=\"res-sq-l res-sq-t res-sq-t2\"></i><i class=\"res-sq-l res-sq-p res-sq-p1\"></i><i class=\"res-sq-l res-sq-p\"></i><i class=\"res-sq-l res-sq-p res-sq-p3\"></i></div></div><div class=\"res-sq-trame res-sq-sec\"><i class=\"res-sq-l res-sq-k\"></i><i class=\"res-sq-l res-sq-t\"></i><i class=\"res-sq-l res-sq-p res-sq-p1\"></i><i class=\"res-sq-l res-sq-p\"></i><i class=\"res-sq-l res-sq-p res-sq-p3\"></i></div><div class=\"res-sq-trame res-sq-cartes\"><i class=\"res-sq-c\"></i><i class=\"res-sq-c\"></i><i class=\"res-sq-c\"></i></div><div class=\"res-sq-trame res-sq-sec\"><i class=\"res-sq-l res-sq-k\"></i><i class=\"res-sq-l res-sq-t\"></i><i class=\"res-sq-l res-sq-p res-sq-p1\"></i><i class=\"res-sq-l res-sq-p\"></i><i class=\"res-sq-l res-sq-p res-sq-p3\"></i></div></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/espaceSkippers';

  function poserStyle() {
    if (document.getElementById("rdr-espace-skippers-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-espace-skippers-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  function demarrer(D, racine, signal) {
    const ecouter = (type, f, o) => window.addEventListener(type, f, Object.assign({}, o && typeof o === 'object' ? o : {}, signal ? { signal } : {}));
    const RUBRIQUES = D.rubriques, DOCUMENTS = D.documents, PAGE = D.page, ARCS = D.arcs;
    Object.keys(PAGE.langues).forEach((l) => {
      const f = PAGE.langues[l].f;
      if (f && f.nb && typeof f.nb === 'object') { const t = f.nb; f.nb = (n) => n + (n > 1 ? t.plusieurs : t.un); }
      if (f && f.poids && typeof f.poids === 'object') { const t = f.poids; f.poids = (o) => (o < 1e6 ? Math.round(o / 1e3) + t.ko : (o / 1e6).toFixed(1).replace('.', t.virgule) + t.mo); }
    });
 
const LU = {
  ouvrir: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  telecharger: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
 
const IMG = (id, l, h, fp) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',' + (fp ? 'fp_' + fp : 'al_c') + ',q_80,enc_auto/x.jpg';
 
const jeu = (im, ratio, largeurs, fp) => [...new Set(largeurs.map((l) => Math.min(l, im.l || l)))].map((w) => IMG(im.id, w, Math.round(w * ratio), fp) + ' ' + w + 'w').join(', ');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));


const FINE = String.fromCharCode(0x202F), INSEC = String.fromCharCode(0xA0);
let L = 'fr', X = PAGE.langues.fr;
const T = (s) => {
  let t = esc(String(s == null ? '' : s).replace(/'/g, '’'));
  if (L === 'fr') t = t.replace(/ ([?!:;])/g, FINE + '$1');
  return t.replace(/Rhum - Destination/g, '<span class="nw">Rhum -</span> Destination');
};
const plat = (s) => String(s).replace(/'/g, '’');
const poids = (o) => X.f.poids(o).replace(' ', INSEC);
const $ = (id) => (racine.id === id ? racine : racine.querySelector('[id="' + id + '"]'));



let RUBRIQUE_VIDE = 'bientot';



const SERVICES = [[/(^|\.)drive\.google\.com$/, 'Google Drive'], [/(^|\.)(we\.tl|wetransfer\.com)$/, 'WeTransfer'], [/(^|\.)smugmug\.com$/, 'SmugMug'], [/(^|\.)capline\.org$/, 'Capline']];
function destination(u) {
  let x; try { x = new URL(u, 'https://www.routedurhum.com'); } catch (e) { return { texte: '' }; }
  const ext = (x.pathname.match(/\.(pdf|xlsx?|docx?|pptx?|zip|jpe?g|png)$/i) || [])[1];
  if (ext) return { format: ext.toUpperCase() };
  const s = SERVICES.find(([re]) => re.test(x.hostname));
  return { texte: s ? s[1] : x.hostname.replace(/^www\./, '') };
}


function actions(d) {
  const r = [], u = d.lien[L], f = d.fichier[L];
  if (u) r.push(Object.assign({ cle: 'ouvrir', href: u, mot: X.f.ouvrir, onglet: true }, destination(u)));
  if (f) r.push({ cle: 'telecharger', href: PAGE.fichiers + f.id + '?dn=' + encodeURIComponent(f.nom), mot: X.f.telecharger, format: f.format, poids: f.octets ? poids(f.octets) : '' });
  return r;
}
const meta = (a) => a.format ? '<span class="format">' + esc(a.format) + '</span>' + (a.poids ? esc(a.poids) : '') : esc(a.texte || '');
const etiquette = (d, a) => plat(d.titre[L]) + ', ' + a.mot.toLowerCase() + ' (' + [a.format || a.texte, a.poids, a.onglet ? X.f.onglet : ''].filter(Boolean).join(', ') + ')';
const cible = (a) => a.onglet ? ' target="_blank" rel="noopener"' : '';

 
function vues() {
  return RUBRIQUES.map((r) => ({ r, liste: DOCUMENTS.filter((d) => d.rubrique === r.cle && actions(d).length) }))
    .filter((v) => v.liste.length || (v.r.bientot && RUBRIQUE_VIDE === 'bientot'));
}
 
const sections = (V) => X.sections.slice(0, 2).concat(V.filter((v) => v.liste.length).map(({ r, liste }) => ({ id: r.cle, titre: r.titre[L], mots: liste.map((d) => d.titre[L]) })), X.sections.slice(2));

 
function haut() {
  const p = PAGE.photo;
  $('haut-txt').innerHTML = '<h1 class="titre" id="t-haut">' + T(X.titre) + '</h1>';
  $('haut-photo').innerHTML = '<img src="' + IMG(p.id, 1240, 440, '0.50_0.58') + '" srcset="' + jeu(p, .355, [800, 1240, 1600], '0.50_0.58') + '" sizes="(max-width:1320px) 94vw, 1240px" alt="' + esc(X.f.altHaut) + '" fetchpriority="high" decoding="async">';
  const [x, y, l, h] = ARCS.crop;
  racine.style.setProperty('--arcs', 'url("https://static.wixstatic.com/media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1200,h_1200,q_85/x.png")');
}
function inscription() {
  const I = X.inscription;
  $('inscription').innerHTML = '<div class="trame in-grille">' +
    '<h2 class="titre in-titre rv" id="t-inscription">' + T(I.titre) + '</h2>' +
    '<div class="in-texte rv"><p>' + T(I.texte) + '</p>' +
      '<div class="in-action"><a class="btn btn--marine btn--grand" href="' + esc(PAGE.capline) + '" target="_blank" rel="noopener" aria-label="' + esc(plat(I.bouton) + ' (capline.org, ' + X.f.onglet + ')') + '"><span>' + T(I.bouton) + '</span>' + SVG('ouvrir', 'ico--sort') + '</a>' +
      '<span class="in-dest" aria-hidden="true">capline.org</span></div></div>' +
    '</div>';
}
function barre(V) {
  $('barre').setAttribute('aria-label', X.f.rubriques);
  $('barre').innerHTML = '<div class="trame"><div class="barre-in"><div class="puces" id="puces">' +
    V.map(({ r, liste }) => '<a class="puce' + (liste.length ? '' : ' puce--bientot') + '" href="#' + r.cle + '" data-rub="' + r.cle + '">' + T(r.court[L]) + ' <b>' + (liste.length || T(X.f.bientot)) + '</b></a>').join('') +
    '</div><a class="bar-q" href="#une-question">' + SVG('mail') + '<span class="mot">' + T(X.question) + '</span></a></div></div>';
}
function action(d, a, k) {
  const corps = '<span class="act-mot">' + SVG(a.cle, 'ico--' + a.cle) + esc(a.mot) + '</span><span class="act-meta">' + meta(a) + '</span>';
   
  return k === 0 ? '<span class="act act--1" aria-hidden="true">' + corps + '</span>'
    : '<a class="act act--2" href="' + esc(a.href) + '"' + cible(a) + ' aria-label="' + esc(etiquette(d, a)) + '">' + corps + '</a>';
}
function fiche(d) {
  const A = actions(d), a = A[0], im = d.image;
  return '<li><article class="fiche rv">' +
    '<figure class="fiche-vig">' + (im ? '<img src="' + IMG(im.id, 272, 204, '0.49_0.31') + '" srcset="' + jeu(im, .75, [136, 184, 272], '0.49_0.31') + '" sizes="(max-width:750px) 92px, 136px" alt="" width="136" height="102" loading="lazy" decoding="async">' : '') + '</figure>' +
    '<h3 class="fiche-nom"><a class="fiche-lien" href="' + esc(a.href) + '"' + cible(a) + ' aria-label="' + esc(etiquette(d, a)) + '">' + T(d.titre[L]) + '</a></h3>' +
    '<div class="fiche-act">' + A.map((x, k) => action(d, x, k)).join('') + '</div></article></li>';
}
function rubriques(V) {
  $('rubriques').innerHTML = V.map(({ r, liste }, k) => {
    const tete = '<span class="rub-num" aria-hidden="true">' + String(k + 1).padStart(2, '0') + '</span><h2 class="titre rub-titre" id="t-' + r.cle + '">' + T(r.titre[L]) + '</h2>';
    const cls = 'rub' + (k % 2 ? ' rub--teinte' : '') + (liste.length ? '' : ' rub--bientot');
    return '<section class="' + cls + '" id="' + r.cle + '" aria-labelledby="t-' + r.cle + '" data-rub="' + r.cle + '"><div class="trame">' +
      (liste.length
        ? '<div class="rub-tete rv">' + tete + '<span class="rub-nb">' + X.f.nb(liste.length) + '</span></div><ul class="docs">' + liste.map(fiche).join('') + '</ul>'
        : '<div class="rub-tete rv">' + tete + '<span class="bientot">' + SVG('clock') + T(X.f.bientot) + '</span></div>') +
      '</div></section>';
  }).join('');
}
function question() {
  const K = PAGE.contact;
  $('une-question').innerHTML = '<div class="trame ct-grille">' +
    '<h2 class="titre sec-titre rv" id="t-une-question">' + T(X.question) + '</h2>' +
    '<div class="ct-action rv"><a class="btn btn--marine btn--grand" href="' + esc(K.lien) + '">' + SVG('mail') + '<span>' + esc(K.email).replace('@', '@<wbr>') + '</span>' + SVG('arrowRight', 'ico--glisse') + '</a></div></div>';
}

 
let suivi = null, fondu = null;
function suivre() {
  const puces = [...racine.querySelectorAll('.puce')];
  const blocs = [...racine.querySelectorAll('.rub')];
  const barreEl = $('barre'), pz = $('puces');
  const colle = () => parseFloat(getComputedStyle(racine).getPropertyValue('--colle')) || 0;
  const maj = () => {
    const seuil = Math.max(colle() + barreEl.offsetHeight + 40, innerHeight * .38);
    let cour = null;
    for (const s of blocs) if (s.getBoundingClientRect().top <= seuil) cour = s.dataset.rub;
    const bas = $('une-question').getBoundingClientRect().top < innerHeight * .5;
    puces.forEach((p) => {
      const on = !bas && p.dataset.rub === cour;
      if (on !== (p.getAttribute('aria-current') === 'true')) {
        if (on) { p.setAttribute('aria-current', 'true'); const g = p.offsetLeft - pz.offsetLeft; if (g < pz.scrollLeft || g + p.offsetWidth > pz.scrollLeft + pz.clientWidth) pz.scrollTo({ left: g - 16, behavior: 'smooth' }); }
        else p.removeAttribute('aria-current');
      }
    });
    barreEl.classList.toggle('collee', barreEl.getBoundingClientRect().top <= colle() + .5);
  };
  if (fondu) { removeEventListener('resize', fondu); }
  fondu = () => pz.classList.toggle('deborde', pz.scrollWidth > pz.clientWidth + 2 && pz.scrollLeft + pz.clientWidth < pz.scrollWidth - 2);
  pz.addEventListener('scroll', fondu, { passive: true }); ecouter('resize', fondu); fondu();
  if (suivi) removeEventListener('scroll', suivi);
  let att = false;
  suivi = () => { if (!att) { att = true; requestAnimationFrame(() => { att = false; maj(); }); } };
  ecouter('scroll', suivi, { passive: true });
  maj();
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
  
  const V = vues();
  haut(); inscription(); barre(V); rubriques(V); question();
  suivre(); reveler();
  
}
    monter(D.lang in PAGE.langues ? D.lang : Object.keys(PAGE.langues)[0]);

    


    const aller = (id, doux) => { const s = id && $(id); if (!s || s.hidden) return false; s.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' }); return true; };
    racine.addEventListener('click', (e) => {
      const a = e.target.closest('a.puce, a.bar-q');
      if (!a || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const id = (a.getAttribute('href') || '').slice(1);
      if (!aller(id, !reduit)) return;
      e.preventDefault();
      try { history.replaceState(null, '', '#' + id); } catch (x) {   }
    });
    let ancre = '';
    try { ancre = decodeURIComponent(location.hash.slice(1)); } catch (x) { ancre = ''; }
    if (ancre && (ancre === 'une-question' || RUBRIQUES.some((r) => r.cle === ancre)) && aller(ancre, false)) {
      const y = scrollY;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (scrollY === y) aller(ancre, false); });
    }
  }

  const jeuValide = (D) => !!(D && Array.isArray(D.rubriques) && D.rubriques.length > 0 && Array.isArray(D.documents) && D.documents.some((d) => D.rubriques.some((r) => r.cle === d.rubrique)) && D.page && D.page.photo && D.page.contact && D.page.langues && Object.keys(D.page.langues).length > 0 && D.arcs);

  class RdrEspaceSkippers extends HTMLElement {
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
      try { demarrer(D, this.firstElementChild, this._ctrl ? this._ctrl.signal : null); } catch (e) { console.error('[rdr-espace-skippers]', e); }
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
      this.innerHTML = '<div class="res-vide"><h3>' + (en ? "This page will be back in a moment" : "L’espace skippers revient dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }
  }
  customElements.define("rdr-espace-skippers", RdrEspaceSkippers);
})();
})();
