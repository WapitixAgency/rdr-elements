/* rdr-elements kit | source route-du-rhum 5d44dd5 | rdr-kit-pedagogique.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["kit"]="5d44dd5";performance.mark("rdr-elements:kit")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-kit-pedagogique")) return;
  const CSS = "rdr-kit-pedagogique{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-kit-pedagogique .rkp-page{display:block}\nrdr-kit-pedagogique .rkp-calme *,rdr-kit-pedagogique .rkp-calme *::before,rdr-kit-pedagogique .rkp-calme *::after{transition:none !important}\nrdr-kit-pedagogique .rkp-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-kit-pedagogique .rkp-sq-haut{display:flex;align-items:center;min-height:clamp(560px,calc(100svh - 175px),900px);background:#00676E}\nrdr-kit-pedagogique .rkp-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-kit-pedagogique .rkp-sq-l,rdr-kit-pedagogique .rkp-sq-c{position:relative;display:block;overflow:hidden}\nrdr-kit-pedagogique .rkp-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-kit-pedagogique .rkp-sq-k{width:120px;height:11px}\nrdr-kit-pedagogique .rkp-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-kit-pedagogique .rkp-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-kit-pedagogique .rkp-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-kit-pedagogique .rkp-sq-p1{margin-top:30px}\nrdr-kit-pedagogique .rkp-sq-p3{width:min(380px,62%)}\nrdr-kit-pedagogique .rkp-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-kit-pedagogique .rkp-sq-sec .rkp-sq-l{background:rgba(14,17,29,.08)}\nrdr-kit-pedagogique .rkp-sq-sec .rkp-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-kit-pedagogique .rkp-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-kit-pedagogique .rkp-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-kit-pedagogique .rkp-sq-l::after,rdr-kit-pedagogique .rkp-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rkp-sq-luire 1.6s ease-in-out infinite}\nrdr-kit-pedagogique .rkp-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-kit-pedagogique .rkp-sq-sec .rkp-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-kit-pedagogique .rkp-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rkp-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-kit-pedagogique .rkp-sq-cartes{grid-template-columns:1fr}rdr-kit-pedagogique .rkp-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-kit-pedagogique .rkp-sq-l::after,rdr-kit-pedagogique .rkp-sq-c::after{animation:none;display:none}}\nrdr-kit-pedagogique .rkp-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-kit-pedagogique .rkp-vide h3{margin:0;font-size:22px}\nrdr-kit-pedagogique .rkp-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-kit-pedagogique .rkp-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\n@property --pli{syntax:'<length>';inherits:true;initial-value:0px}\nrdr-kit-pedagogique{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --marine2:#16355D;--violet:#7894F7; --bleu-pale:#E6F2FA; --encre:#191D31;--encre2:rgba(25,29,49,.8); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px); --entete:175px; --ih:clamp(220px,44vh,440px);--mord:.44; --coin:clamp(64px,7.4vw,118px); --ease:cubic-bezier(.22,.8,.3,1); --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--angle-p-inv:10px 3px 10px 3px; --air:1.5;}\n@media (max-width:750px){\nrdr-kit-pedagogique{--air:1.3;--entete:120px;--marge:20px;--ih:calc((100vw - 2 * var(--marge)) / 1.6);--mord:.4;--coin:56px}\n}\nrdr-kit-pedagogique *{box-sizing:border-box}\nrdr-kit-pedagogique{margin:0;background:#fff;color:var(--encre);font:16px/1.65 var(--police);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nrdr-kit-pedagogique img{display:block;max-width:100%}\nrdr-kit-pedagogique a{color:inherit}\nrdr-kit-pedagogique h1,rdr-kit-pedagogique h2,rdr-kit-pedagogique h3,rdr-kit-pedagogique p,rdr-kit-pedagogique figure,rdr-kit-pedagogique ul,rdr-kit-pedagogique ol{margin:0}\nrdr-kit-pedagogique button{font:inherit;color:inherit}\nrdr-kit-pedagogique .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-kit-pedagogique .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-kit-pedagogique .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-kit-pedagogique .nw{white-space:nowrap}\nrdr-kit-pedagogique section[id],rdr-kit-pedagogique header[id],rdr-kit-pedagogique div[id]{scroll-margin-top:24px}\nrdr-kit-pedagogique .btn{display:inline-flex;align-items:center;justify-content:space-between;gap:16px;min-height:52px;padding:6px 6px 6px 22px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;font:700 15px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .2s,color .2s,border-color .2s,transform .2s,box-shadow .25s}\nrdr-kit-pedagogique .btn-f{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:var(--angle-p);transition:transform .3s var(--ease),background .2s}\nrdr-kit-pedagogique .btn-f .ico{width:19px;height:19px;stroke-width:2.3}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .btn:hover .btn-f{transform:translateY(3px)}}\nrdr-kit-pedagogique .btn:active{transform:translateY(1px)}\nrdr-kit-pedagogique .btn:focus-visible{outline:3px solid var(--marine2);outline-offset:3px}\nrdr-kit-pedagogique .btn--jaune{background:var(--jaune);border-color:var(--jaune);color:var(--marine);box-shadow:0 18px 30px -20px rgba(25,29,49,.55)}\nrdr-kit-pedagogique .btn--jaune .btn-f{background:var(--marine);color:var(--jaune)}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .btn--jaune:hover{box-shadow:0 22px 34px -18px rgba(25,29,49,.6)}}\nrdr-kit-pedagogique .btn--marine{background:var(--marine2);border-color:var(--marine2);color:#fff}\nrdr-kit-pedagogique .btn--marine .btn-f{background:var(--jaune);color:var(--marine)}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-kit-pedagogique .format{font:700 13px/1.4 var(--police);letter-spacing:.06em;color:var(--encre2)}\nrdr-kit-pedagogique .kh{position:relative;z-index:2;isolation:isolate;display:flow-root;background:var(--vert1);color:#fff;padding-top:clamp(26px,5.2vh,58px)}\nrdr-kit-pedagogique .kh-arcs{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none}\nrdr-kit-pedagogique .kh-arcs i{position:absolute;top:0;right:0;width:min(980px,78vw);aspect-ratio:3168/2160;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat center / 100% 100%;mask:var(--arcs) no-repeat center / 100% 100%;transform:translate(52%,-30%);opacity:.75}\nrdr-kit-pedagogique .kh h1{font-size:clamp(40px,min(6.4vw,11vh),96px)}\nrdr-kit-pedagogique .kh-illu{position:relative;z-index:2;height:var(--ih);margin:clamp(16px,3.2vh,32px) 0 calc(var(--ih) * var(--mord) * -1);border-radius:22px 6px 22px 6px;overflow:hidden;background:var(--bleu-pale);box-shadow:0 34px 56px -34px rgba(25,29,49,.6)}\nrdr-kit-pedagogique .kh-illu img{width:100%;height:100%;object-fit:cover;object-position:50% 50%;transform:scale(1.04);animation:rkp-respire 16s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rkp-respire{to{transform:scale(1)}}\nrdr-kit-pedagogique .kit{position:relative;background:#fff;padding-top:calc(var(--ih) * var(--mord) + clamp(36px,6.4vh,72px) * var(--air))}\nrdr-kit-pedagogique .kit-grille{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(0,.82fr);gap:clamp(28px,5vw,84px);align-items:center}\nrdr-kit-pedagogique .kit h2{font-size:clamp(28px,min(3.3vw,6vh),46px);color:var(--marine2);text-wrap:balance}\nrdr-kit-pedagogique .kit-txt p{margin-top:14px;max-width:60ch;font-size:16px;line-height:1.75;color:var(--encre2);text-wrap:pretty}\nrdr-kit-pedagogique .kit-txt p:first-of-type{margin-top:clamp(16px,2.6vh,24px);font-size:clamp(16.5px,1.25vw,18px);line-height:1.65;font-weight:500;color:var(--encre)}\nrdr-kit-pedagogique .kit-doc{display:flex;flex-direction:column;align-items:center;gap:clamp(20px,3.4vh,30px)}\nrdr-kit-pedagogique .livret{position:relative;display:block;width:clamp(200px,21vw,290px);aspect-ratio:900/768;transform:rotate(-3deg);transition:transform .5s var(--ease)}\nrdr-kit-pedagogique .livret::before,rdr-kit-pedagogique .livret::after{content:'';position:absolute;inset:0;z-index:0;border-radius:3px 12px 12px 3px;background:#fff;box-shadow:0 14px 26px -16px rgba(25,29,49,.55);transition:transform .5s var(--ease)}\nrdr-kit-pedagogique .livret::before{transform:translate(12px,9px) rotate(3.5deg)}\nrdr-kit-pedagogique .livret::after{transform:translate(6px,4px) rotate(1.6deg)}\nrdr-kit-pedagogique .livret img{position:relative;z-index:1;width:100%;height:100%;object-fit:cover;border-radius:3px 12px 12px 3px;background:#4F5BA5;box-shadow:0 26px 40px -24px rgba(25,29,49,.7)}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .livret:hover{transform:rotate(-1deg) translateY(-4px)}}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .livret:hover::before{transform:translate(18px,12px) rotate(5deg)}}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .livret:hover::after{transform:translate(9px,6px) rotate(2.4deg)}}\nrdr-kit-pedagogique .kit-doc .btn{min-width:min(100%,300px)}\nrdr-kit-pedagogique .themes{--pad:clamp(20px,2.6vw,34px);position:relative;margin-top:calc(clamp(40px,7.4vh,80px) * var(--air));padding:var(--pad);border-radius:22px 6px 22px 6px;background:var(--marine2);color:#fff;box-shadow:0 30px 50px -34px rgba(22,53,93,.7);overflow:hidden}\nrdr-kit-pedagogique .themes h3{font-size:clamp(22px,2vw,28px)}\nrdr-kit-pedagogique .th-liste{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:clamp(10px,1vw,14px);margin-top:clamp(14px,2.4vh,22px);padding:0;list-style:none}\nrdr-kit-pedagogique .th{display:flex;flex-direction:column;gap:10px;width:100%;height:100%;padding:0;border:0;background:none;color:#fff;text-align:left;cursor:pointer}\nrdr-kit-pedagogique .th-img{position:relative;display:block;aspect-ratio:1;border-radius:16px 4px 16px 4px;overflow:hidden;background:rgba(255,255,255,.1)}\nrdr-kit-pedagogique .th-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s var(--ease)}\nrdr-kit-pedagogique .th-voir{position:absolute;right:7px;bottom:7px;display:grid;place-items:center;width:34px;height:34px;border-radius:var(--angle-p);background:var(--jaune);color:var(--marine);opacity:0;transform:translateY(6px);transition:opacity .25s,transform .3s var(--ease)}\nrdr-kit-pedagogique .th-voir .ico{width:17px;height:17px}\nrdr-kit-pedagogique .th-nom{font:700 13.5px/1.35 var(--police);text-wrap:pretty}\nrdr-kit-pedagogique .th-nom::after{content:'';display:block;width:26px;height:4px;margin-top:8px;background:var(--violet);transform:skewX(-20deg) scaleX(0);transform-origin:0 50%;transition:transform .3s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .th:hover .th-img img{transform:scale(1.06)}}rdr-kit-pedagogique .th:focus-visible .th-voir{opacity:1;transform:none}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .th:hover .th-voir{opacity:1;transform:none}}rdr-kit-pedagogique .th:focus-visible .th-nom::after{transform:skewX(-20deg) scaleX(1)}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .th:hover .th-nom::after{transform:skewX(-20deg) scaleX(1)}}\nrdr-kit-pedagogique .th:focus-visible{outline:2px solid var(--jaune);outline-offset:4px;border-radius:var(--angle-p)}\n@media (hover:none){\nrdr-kit-pedagogique .th-voir{opacity:1;transform:none;width:32px;height:32px}\n}\nrdr-kit-pedagogique .th-fl{display:none;place-items:center;flex:none;width:36px;height:36px;border-radius:var(--angle-p);background:var(--jaune);color:var(--marine)}\nrdr-kit-pedagogique .th-fl .ico{width:18px;height:18px}\nrdr-kit-pedagogique .th-nav{display:none;align-items:center;gap:18px;margin-top:16px}\nrdr-kit-pedagogique .th-barre{position:relative;flex:1;max-width:240px;height:3px;border-radius:2px;background:rgba(255,255,255,.24);overflow:hidden}\nrdr-kit-pedagogique .th-barre i{position:absolute;top:0;bottom:0;left:0;width:var(--vu,30%);background:var(--jaune);transform:translateX(var(--x,0%));transition:transform .25s}\nrdr-kit-pedagogique .th-fleches{display:flex;gap:10px;margin-left:auto}\nrdr-kit-pedagogique .fleche{display:grid;place-items:center;width:44px;height:44px;padding:0;border:2px solid currentColor;border-radius:var(--angle-p);background:transparent;color:inherit;cursor:pointer;transition:background .15s,color .15s,opacity .2s}\nrdr-kit-pedagogique .fleche[data-sens=\"-1\"]{border-radius:var(--angle-p-inv)}\nrdr-kit-pedagogique .fleche .ico{width:20px;height:20px;stroke-width:2.4}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .fleche:hover:not(:disabled){background:#fff;color:var(--marine2);border-color:#fff}}\nrdr-kit-pedagogique .fleche:disabled{opacity:.3;cursor:default}\nrdr-kit-pedagogique .pages{position:relative;isolation:isolate;margin-top:calc(clamp(64px,10vh,112px) * var(--air));padding:calc(clamp(52px,8.4vh,96px) * var(--air)) 0 calc(clamp(48px,8vh,92px) * var(--air));--pli:var(--coin)}\nrdr-kit-pedagogique .pages:not(.vu){--pli:0px}\nrdr-kit-pedagogique .pages{transition:--pli 1s var(--ease) .15s}\nrdr-kit-pedagogique .pages-fond{position:absolute;inset:0;z-index:-2;background:var(--bleu-pale);border-top:6px solid var(--bleu);clip-path:polygon(0 0,calc(100% - var(--pli)) 0,100% var(--pli),100% 100%,0 100%)}\nrdr-kit-pedagogique .pages-coin{position:absolute;top:0;right:0;z-index:-1;width:var(--pli);height:var(--pli);filter:drop-shadow(-7px 9px 9px rgba(22,53,93,.24));pointer-events:none}\nrdr-kit-pedagogique .pages-coin i{display:block;width:100%;height:100%;border-radius:0 0 0 6px;background:var(--bleu);clip-path:polygon(0 0,0 100%,100% 100%)}\nrdr-kit-pedagogique .collage-cadre{container-type:inline-size}\nrdr-kit-pedagogique .collage{--g:clamp(10px,1.1vw,14px);--r:calc((100cqi - 3 * var(--g)) / 4 / 1.4138);display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,var(--r));grid-template-areas:\"a a b c\" \"a a d d\" \"e f d d\";gap:var(--g);margin:0;padding:0;list-style:none}\nrdr-kit-pedagogique .collage>li{display:flex;min-width:0;min-height:0}\nrdr-kit-pedagogique .pg{position:relative;display:block;flex:1;padding:0;border:0;border-radius:14px 4px 14px 4px;overflow:hidden;background:#fff;cursor:zoom-in;box-shadow:0 18px 34px -22px rgba(22,53,93,.55);transition:transform .35s var(--ease),box-shadow .35s}\nrdr-kit-pedagogique .pg img{width:100%;height:100%;object-fit:cover}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .pg:hover{transform:translateY(-4px);box-shadow:0 28px 44px -24px rgba(22,53,93,.6)}}\nrdr-kit-pedagogique .pg:focus-visible{outline:3px solid var(--marine2);outline-offset:3px}\nrdr-kit-pedagogique .pg-loupe{position:absolute;right:10px;bottom:10px;display:grid;place-items:center;width:40px;height:40px;border-radius:var(--angle-p);background:var(--marine2);color:#fff;opacity:0;transform:scale(.85);transition:opacity .25s,transform .3s var(--ease)}\nrdr-kit-pedagogique .pg-loupe .ico{width:19px;height:19px}rdr-kit-pedagogique .pg:focus-visible .pg-loupe{opacity:1;transform:none}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .pg:hover .pg-loupe{opacity:1;transform:none}}\n@media (hover:none){\nrdr-kit-pedagogique .pg-loupe{opacity:1;transform:none;width:34px;height:34px;right:8px;bottom:8px}\nrdr-kit-pedagogique .pg-loupe .ico{width:16px;height:16px}\n}\nrdr-kit-pedagogique .pages-pied{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 18px;margin-top:calc(clamp(26px,4.4vh,44px) * var(--air))}\nrdr-kit-pedagogique .visio{width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:rgba(22,53,93,.97);color:#fff;overflow:hidden}\nrdr-kit-pedagogique .visio::backdrop{background:rgba(22,53,93,.8)}\nrdr-kit-pedagogique .visio-scene{position:absolute;inset:76px 84px 36px;display:flex;align-items:center;justify-content:center;touch-action:pan-y pinch-zoom}\nrdr-kit-pedagogique .visio-scene img{max-width:100%;max-height:100%;width:auto;height:auto;border-radius:6px;background:#fff;box-shadow:0 30px 60px -20px rgba(0,0,0,.6);transition:opacity .25s}\nrdr-kit-pedagogique .visio-scene img.charge{opacity:.3}\nrdr-kit-pedagogique .visio-haut{position:absolute;left:24px;right:20px;top:14px;display:flex;align-items:center;justify-content:space-between;gap:16px}\nrdr-kit-pedagogique .visio-legende{display:flex;align-items:baseline;gap:14px;min-width:0}\nrdr-kit-pedagogique .visio-compte{flex:none;font-family:var(--titre);font-style:italic;font-size:26px;line-height:1;color:var(--violet)}\nrdr-kit-pedagogique .visio-compte small{font-family:var(--police);font-style:normal;font-size:13px;font-weight:700;color:rgba(255,255,255,.66)}\nrdr-kit-pedagogique .visio-titre{min-width:0;font:700 15px/1.3 var(--police);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\nrdr-kit-pedagogique .visio-actions{display:flex;align-items:center;gap:10px}\nrdr-kit-pedagogique .visio-pdf{display:inline-flex;align-items:center;gap:10px;min-height:46px;padding:0 16px;border:1.5px solid var(--jaune);border-radius:var(--angle-p);color:var(--jaune);font:700 13.5px var(--police);text-decoration:none;white-space:nowrap;transition:background .2s,color .2s}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .visio-pdf:hover{background:var(--jaune);color:var(--marine)}}\nrdr-kit-pedagogique .visio-pdf .ico{width:18px;height:18px}\nrdr-kit-pedagogique .visio button{display:grid;place-items:center;padding:0;border:1.5px solid rgba(255,255,255,.5);border-radius:var(--angle-p);background:rgba(22,53,93,.6);color:#fff;cursor:pointer;transition:background .2s,border-color .2s,color .2s}@media (hover:hover) and (pointer:fine){rdr-kit-pedagogique .visio button:hover{background:#fff;border-color:#fff;color:var(--marine2)}}\nrdr-kit-pedagogique .visio-fermer{width:46px;height:46px}\nrdr-kit-pedagogique .visio-nav{position:absolute;top:50%;width:54px;height:54px;transform:translateY(-50%)}\nrdr-kit-pedagogique .visio-prec{left:16px;border-radius:var(--angle-p-inv) !important}\nrdr-kit-pedagogique .visio-suiv{right:16px}\nrdr-kit-pedagogique .visio .ico{width:22px;height:22px}\nrdr-kit-pedagogique .visio button:focus-visible,rdr-kit-pedagogique .visio-pdf:focus-visible{outline:2px solid var(--jaune);outline-offset:3px}\nrdr-kit-pedagogique .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-kit-pedagogique .rv.vu{opacity:1;transform:none}\nrdr-kit-pedagogique .collage .rv:nth-child(2){transition-delay:.06s}\nrdr-kit-pedagogique .collage .rv:nth-child(3){transition-delay:.12s}\nrdr-kit-pedagogique .collage .rv:nth-child(4){transition-delay:.18s}\nrdr-kit-pedagogique .collage .rv:nth-child(5){transition-delay:.24s}\nrdr-kit-pedagogique .collage .rv:nth-child(6){transition-delay:.3s}\n@media (max-height:820px) and (min-width:751px){\nrdr-kit-pedagogique .kit-txt p{font-size:15.5px;line-height:1.7}\nrdr-kit-pedagogique .kit-txt p:first-of-type{font-size:16.5px}\nrdr-kit-pedagogique .livret{width:clamp(190px,18vw,250px)}\nrdr-kit-pedagogique .th-nom{font-size:13px}\n}\n@media (max-width:1100px){\nrdr-kit-pedagogique .th-liste{display:flex;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;margin-right:calc(-1 * var(--pad));padding-right:var(--pad);scroll-padding-left:0}\nrdr-kit-pedagogique .th-liste::-webkit-scrollbar{display:none}\nrdr-kit-pedagogique .th-liste>li{flex:0 0 clamp(128px,21vw,176px);scroll-snap-align:start}\nrdr-kit-pedagogique .th-nav{display:flex}\n}\n@media (max-width:750px){\nrdr-kit-pedagogique{font-size:15px}\nrdr-kit-pedagogique .kh{padding-top:22px}\nrdr-kit-pedagogique .kh h1{font-size:clamp(34px,10.2vw,46px)}\nrdr-kit-pedagogique .kh-arcs i{width:150vw;transform:translate(58%,-34%)}\nrdr-kit-pedagogique .kh-illu{margin-top:16px;border-radius:18px 5px 18px 5px}\nrdr-kit-pedagogique .kit-grille{grid-template-columns:1fr;gap:28px}\nrdr-kit-pedagogique .kit h2{font-size:clamp(25px,7.4vw,32px)}\nrdr-kit-pedagogique .kit-txt p{font-size:15px;line-height:1.7}\nrdr-kit-pedagogique .kit-txt p:first-of-type{font-size:16px}\nrdr-kit-pedagogique .livret{width:min(56vw,230px)}\nrdr-kit-pedagogique .kit-doc{gap:22px}\nrdr-kit-pedagogique .kit-doc .btn{width:100%}\nrdr-kit-pedagogique .themes{--pad:16px;margin-top:calc(44px * var(--air));border-radius:18px 5px 18px 5px}\nrdr-kit-pedagogique .th-liste{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;overflow:visible;margin-right:0;padding-right:0}\nrdr-kit-pedagogique .th{flex-direction:row;align-items:center;gap:14px;min-height:76px;padding:6px 8px 6px 6px;border-radius:14px 4px 14px 4px;background:rgba(255,255,255,.07)}\nrdr-kit-pedagogique .th-img{flex:none;width:64px;border-radius:10px 3px 10px 3px}\nrdr-kit-pedagogique .th-voir{display:none}\nrdr-kit-pedagogique .th-nom{flex:1;font-size:14px;line-height:1.35}\nrdr-kit-pedagogique .th-nom::after{display:none}\nrdr-kit-pedagogique .th-fl{display:grid}\nrdr-kit-pedagogique .th-nav{display:none}\nrdr-kit-pedagogique .pages{margin-top:calc(56px * var(--air));padding:calc(46px * var(--air)) 0 calc(44px * var(--air))}\nrdr-kit-pedagogique .collage{--g:10px;--rs:calc((100cqi - var(--g)) / 2 / 1.4138);--rb:calc(100cqi / 1.4138);grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:var(--rb) var(--rs) var(--rs) var(--rb);grid-template-areas:\"a a\" \"e f\" \"b c\" \"d d\"}\nrdr-kit-pedagogique .pg{border-radius:12px 3px 12px 3px}\nrdr-kit-pedagogique .pages-pied .btn{width:100%}\nrdr-kit-pedagogique .visio-haut{left:12px;right:10px;top:10px;gap:10px}\nrdr-kit-pedagogique .visio-legende{flex-direction:column;gap:4px}\nrdr-kit-pedagogique .visio-compte{font-size:22px}\nrdr-kit-pedagogique .visio-titre{font-size:13.5px;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\nrdr-kit-pedagogique .visio-pdf{width:46px;padding:0;justify-content:center}\nrdr-kit-pedagogique .visio-pdf span{display:none}\nrdr-kit-pedagogique .visio-scene{inset:84px 8px 88px}\nrdr-kit-pedagogique .visio-nav{top:auto;bottom:20px;transform:none;width:52px;height:52px}\nrdr-kit-pedagogique .visio-prec{left:calc(50% - 64px)}\nrdr-kit-pedagogique .visio-suiv{right:calc(50% - 64px)}\nrdr-kit-pedagogique .visio.pan .visio-scene{overflow-x:auto;overscroll-behavior-x:contain;justify-content:flex-start;touch-action:pan-x pan-y pinch-zoom;scrollbar-width:none}\nrdr-kit-pedagogique .visio.pan .visio-scene::-webkit-scrollbar{display:none}\nrdr-kit-pedagogique .visio.pan .visio-scene img{flex:none;max-width:none;max-height:none;height:min(100%,62svh);width:auto}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-kit-pedagogique *{animation:none !important;transition:none !important}\nrdr-kit-pedagogique .rv{opacity:1;transform:none}\nrdr-kit-pedagogique .pages:not(.vu){--pli:var(--coin)}\n}";
  const GABARIT = "<div class=\"rkp-page\" id=\"kit-pedagogique\"><header class=\"kh\" id=\"haut\">\n    <div class=\"kh-arcs\" aria-hidden=\"true\"><i></i></div>\n    <div class=\"trame\"><h1 class=\"titre\" id=\"t-haut\"></h1><figure class=\"kh-illu\" id=\"kh-illu\"></figure></div>\n  </header>\n  <section class=\"kit\" id=\"le-kit\" aria-labelledby=\"t-kit\">\n    <div class=\"trame\">\n      <div class=\"kit-grille\">\n        <div class=\"kit-txt rv\" id=\"kit-txt\"></div>\n        <div class=\"kit-doc rv\" id=\"kit-doc\"></div>\n      </div>\n      <div class=\"themes rv\" id=\"themes\" role=\"group\" aria-labelledby=\"t-themes\"></div>\n    </div>\n  </section>\n  <section class=\"pages\" id=\"pages\" aria-label=\"\">\n    <div class=\"pages-fond\" aria-hidden=\"true\"></div>\n    <span class=\"pages-coin\" aria-hidden=\"true\"><i></i></span>\n    <div class=\"trame\">\n      <div class=\"collage-cadre\"><ul class=\"collage\" id=\"collage\"></ul></div>\n      <div class=\"pages-pied rv\" id=\"pages-pied\"></div>\n    </div>\n  </section></div><dialog class=\"visio\" id=\"visio\" aria-labelledby=\"visio-titre\">\n  <div class=\"visio-scene\" id=\"visio-scene\"><img id=\"visio-img\" alt=\"\"></div>\n  <div class=\"visio-haut\">\n    <p class=\"visio-legende\"><span class=\"visio-compte\" id=\"visio-compte\"></span><span class=\"visio-titre\" id=\"visio-titre\"></span></p>\n    <div class=\"visio-actions\"><a class=\"visio-pdf\" id=\"visio-pdf\" target=\"_blank\" rel=\"noopener\"></a><button type=\"button\" class=\"visio-fermer\" id=\"visio-fermer\" autofocus></button></div>\n  </div>\n  <button type=\"button\" class=\"visio-nav visio-prec\" id=\"visio-prec\"></button>\n  <button type=\"button\" class=\"visio-nav visio-suiv\" id=\"visio-suiv\"></button>\n</dialog>";
  const TRAD = {};
  const SOURCE = 'https://www.routedurhum.com/_functions/kitPedagogique';

  function poserStyle() {
    if (document.getElementById("rdr-kit-pedagogique-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-kit-pedagogique-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  


  function enAnglais(t) {
    const k = t.trim();
    if (!k || !Object.prototype.hasOwnProperty.call(TRAD, k)) return null;
    return t.replace(k, TRAD[k]);
  }
  const estGuillemet = (n) => !!(n && n.nodeType === 1 && n.classList.contains('gm'));
  function ajuster(n) {
    if (!n.parentElement) return;
    let v = enAnglais(n.nodeValue);
    if (v == null) v = n.nodeValue;
    if (estGuillemet(n.previousSibling)) v = v.replace(/^\u00a0/, '');
    if (estGuillemet(n.nextSibling)) v = v.replace(/\u00a0$/, '');
    if (v !== n.nodeValue) n.nodeValue = v;
  }
  function traduire(racine) {
    if (racine.nodeType === 3) { ajuster(racine); return; }
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach(ajuster);
    const els = racine.nodeType === 1 ? [racine, ...racine.querySelectorAll('[aria-label],[title],[alt]')] : [];
    els.forEach((el) => ['aria-label', 'title', 'alt'].forEach((a) => {
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

  

  function demarrer(D, HOTE) {
    const FOND_PAGE = HOTE.querySelector("#kit-pedagogique");
    const KIT = D.kit, MEDIAS = D.medias;
    Object.keys(KIT.langues).forEach((l) => { const f = KIT.langues[l].f; if (f && typeof f.format === 'string') { const s = f.format; f.format = () => s; } });










const MEDIA = 'https://static.wixstatic.com/media/';



 
const LU = {
  download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  bookOpen: '<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',
  zoomIn: '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>'
};
const SVG = (n) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const ext = (id) => (/\.png$/.test(id) ? 'png' : 'jpg');
const FILL = (id, l, h, q) => MEDIA + id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 80) + ',enc_auto/x.' + ext(id);
const FIT = (id, l, h, q) => MEDIA + id + '/v1/fit/w_' + l + ',h_' + h + ',q_' + (q || 82) + ',enc_auto/x.' + ext(id);
const jeu = (fn, id, ratio, largeurs, q) => largeurs.map((l) => fn(id, l, Math.round(l / ratio), q) + ' ' + l + 'w').join(', ');
const NNB = String.fromCharCode(8239);
 
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const typo = (s, lang) => {
  let t = esc(s).replace(/Rhum - Destination/g, '<span class="nw">Rhum -</span> Destination');
  return lang === 'en' ? t : t.replace(/ ([?!:;])/g, NNB + '$1');
};
const $ = (id) => document.getElementById(id);
FOND_PAGE.style.setProperty('--arcs', 'url("' + MEDIAS.arcs + '")');
const RATIO_PAGE = 4134 / 2924;
const ratioDe = (t) => (t.format ? t.format[0] / t.format[1] : RATIO_PAGE);
let L = 'fr', T = KIT.langues.fr;

 
function haut() {
  const I = KIT.illustration, r = I.l / I.h;
  $('t-haut').textContent = T.titre;
  $('kh-illu').innerHTML = '<img src="' + FILL(I.id, 1280, Math.round(1280 / r), 82) + '" srcset="' + jeu(FILL, I.id, r, [640, 960, 1280, 1810], 82) + '" sizes="(max-width:750px) calc(100vw - 40px), (max-width:1000px) 92vw, (max-width:1320px) calc(100vw - 80px), 1240px" alt="' + esc(T.f.illu) + '" width="' + I.l + '" height="' + I.h + '" fetchpriority="high" decoding="async">';
}
function lienPdf() { return KIT.pdf[L] || KIT.pdf.fr; }
function kit() {
  const C = KIT.couverture, r = C.l / C.h;
  $('kit-txt').innerHTML = '<h2 class="titre" id="t-kit">' + typo(T.kit, L) + '</h2>' + T.texte.map((p) => '<p>' + typo(p, L) + '</p>').join('');
  $('kit-doc').innerHTML =
    '<a class="livret" href="' + esc(lienPdf()) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img src="' + FILL(C.id, 600, Math.round(600 / r)) + '" srcset="' + jeu(FILL, C.id, r, [300, 450, 600, 900]) + '" sizes="(max-width:750px) 56vw, 290px" alt="' + esc(T.f.couverture) + '" width="' + C.l + '" height="' + C.h + '" loading="lazy" decoding="async"></a>' +
    '<a class="btn btn--jaune" href="' + esc(lienPdf()) + '" target="_blank" rel="noopener">' + esc(T.bouton) + '<span class="btn-f">' + SVG('download') + '</span></a>' +
    '<span class="format">' + esc(T.f.format(KIT.pdf.octets)) + '</span>';
}
function themes() {
  $('themes').innerHTML = '<h3 class="titre" id="t-themes">' + esc(T.themes) + '</h3>' +
    '<ul class="th-liste" id="th-liste">' + KIT.themes.map((t, i) =>
      '<li><button type="button" class="th" data-i="' + i + '" aria-label="' + esc(T.f.voir + t.nom) + '"><span class="th-img"><img src="' + FILL(t.vignette, 340, 340, 85) + '" alt="" width="340" height="340" loading="lazy" decoding="async"><span class="th-voir">' + SVG('bookOpen') + '</span></span><span class="th-nom">' + typo(t.nom, 'fr') + '</span><span class="th-fl">' + SVG('bookOpen') + '</span></button></li>').join('') + '</ul>' +
    '<div class="th-nav"><span class="th-barre" aria-hidden="true"><i></i></span><span class="th-fleches"><button type="button" class="fleche" data-sens="-1" aria-label="' + esc(T.f.prec2) + '">' + SVG('chevronLeft') + '</button><button type="button" class="fleche" data-sens="1" aria-label="' + esc(T.f.suiv2) + '">' + SVG('chevronRight') + '</button></span></div>';
}
function pages() {
  $('pages').setAttribute('aria-label', T.f.pages);
  $('collage').innerHTML = KIT.themes.map((t, i) => {
    if (!t.case) return '';
    const grand = t.case === 'a' || t.case === 'd';
    return '<li class="rv" style="grid-area:' + t.case + '"><button type="button" class="pg" data-i="' + i + '" aria-label="' + esc(T.f.agrandir + t.nom) + '"><img src="' + FIT(t.page, grand ? 1000 : 600, Math.round((grand ? 1000 : 600) / RATIO_PAGE)) + '" srcset="' + jeu(FIT, t.page, RATIO_PAGE, grand ? [500, 700, 1000, 1400] : [300, 450, 600, 900]) + '" sizes="' + (grand ? '(max-width:750px) 92vw, (max-width:1320px) 48vw, 620px' : '(max-width:750px) 46vw, (max-width:1320px) 24vw, 300px') + '" alt="' + esc(T.f.double + t.nom) + '" width="4134" height="2924" loading="lazy" decoding="async"><span class="pg-loupe">' + SVG('zoomIn') + '</span></button></li>';
  }).join('');
  $('pages-pied').innerHTML = '<a class="btn btn--marine" href="' + esc(lienPdf()) + '" target="_blank" rel="noopener">' + esc(T.bouton) + '<span class="btn-f">' + SVG('download') + '</span></a><span class="format">' + esc(T.f.format(KIT.pdf.octets)) + '</span>';
}

 
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
function brancherRang() {
  const rail = $('th-liste'), barre = HOTE.querySelector('.th-barre i'), [av, ap] = HOTE.querySelectorAll('.th-nav .fleche');
  const maj = () => {
    const max = rail.scrollWidth - rail.clientWidth, p = max > 0 ? rail.scrollLeft / max : 0, vu = Math.min(1, rail.clientWidth / rail.scrollWidth);
    barre.style.setProperty('--vu', (vu * 100).toFixed(1) + '%');
    barre.style.setProperty('--x', ((1 / vu - 1) * p * 100).toFixed(1) + '%');
    av.disabled = rail.scrollLeft < 4; ap.disabled = rail.scrollLeft > max - 4;
  };
  const pas = () => { const f = rail.querySelector('li'); return f ? f.getBoundingClientRect().width + 12 : 160; };
  [av, ap].forEach((b) => b.addEventListener('click', () => rail.scrollBy({ left: +b.dataset.sens * pas() * 2, behavior: reduit ? 'auto' : 'smooth' })));
  rail.addEventListener('scroll', () => requestAnimationFrame(maj), { passive: true });
  addEventListener('resize', maj);
  maj();
}

 
const visio = (() => {
  const d = $('visio'), img = $('visio-img'), scene = $('visio-scene');
  let pos = 0, retour = null;
  const palier = (n) => Math.min(2400, Math.ceil(n * Math.min(2, devicePixelRatio || 1) / 200) * 200);
  const telephone = () => innerWidth < 751 && innerHeight > innerWidth;
  const src = (t) => {
    const s = scene.getBoundingClientRect(), r = ratioDe(t);
    const h = telephone() && r > 1 ? Math.min(s.height, innerHeight * .62) : s.height;
    return FIT(t.page, palier(telephone() && r > 1 ? h * r : s.width || innerWidth), palier(h || innerHeight), 85);
  };
  function montrer(k) {
    const n = KIT.themes.length;
    pos = (k + n) % n;
    const t = KIT.themes[pos];
    d.classList.toggle('pan', telephone() && ratioDe(t) > 1);
    img.classList.add('charge');
    img.onload = () => img.classList.remove('charge');
    img.src = src(t); img.alt = (t.format ? T.f.page : T.f.double) + t.nom;
    scene.scrollLeft = 0;
    $('visio-compte').innerHTML = (pos + 1) + ' <small>/ ' + n + '</small>';
    $('visio-titre').innerHTML = typo(t.nom, 'fr');
    [1, -1].forEach((s) => { const p = new Image(); p.src = src(KIT.themes[(pos + s + n) % n]); });
  }
  function ouvrir(i, depuis) {
    retour = depuis;
    $('visio-pdf').href = lienPdf();
    $('visio-pdf').innerHTML = SVG('download') + '<span>' + esc(T.bouton) + '</span>';
    $('visio-pdf').setAttribute('aria-label', T.bouton + ' (' + T.f.format(KIT.pdf.octets) + ')');
    $('visio-fermer').innerHTML = SVG('x'); $('visio-fermer').setAttribute('aria-label', T.f.fermer);
    $('visio-prec').innerHTML = SVG('chevronLeft'); $('visio-prec').setAttribute('aria-label', T.f.prec);
    $('visio-suiv').innerHTML = SVG('chevronRight'); $('visio-suiv').setAttribute('aria-label', T.f.suiv);
    if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
    document.documentElement.style.overflow = 'hidden';
    montrer(i);
  }
  HOTE.addEventListener('click', (e) => {
    const b = e.target.closest('.th, .pg'); if (!b) return;
    ouvrir(+b.dataset.i, b);
  });
  const fermer = () => { if (d.open) d.close(); };
  d.addEventListener('close', () => { document.documentElement.style.overflow = ''; if (retour) retour.focus({ preventScroll: true }); });
  $('visio-fermer').addEventListener('click', fermer);
  $('visio-prec').addEventListener('click', () => montrer(pos - 1));
  $('visio-suiv').addEventListener('click', () => montrer(pos + 1));
  d.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') montrer(pos - 1); if (e.key === 'ArrowRight') montrer(pos + 1); });
  d.addEventListener('click', (e) => { if (e.target === d || (e.target === scene && !d.classList.contains('pan'))) fermer(); });
   
  let x0 = null;
  scene.addEventListener('pointerdown', (e) => { x0 = d.classList.contains('pan') ? null : e.clientX; });
  scene.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 50) montrer(pos + (dx < 0 ? 1 : -1)); });
  return { ouvrir, montrer, fermer, pos: () => pos };
})();

 
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  const cibles = [...HOTE.querySelectorAll('.rv'), $('pages')];
  if (reduit || !('IntersectionObserver' in window)) { cibles.forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  cibles.forEach((e) => { if (!e.classList.contains('vu')) vus.observe(e); });
}

function monter(lang) {
  L = KIT.langues[lang] ? lang : 'fr'; T = KIT.langues[L];
  
  haut(); kit(); themes(); pages();
  brancherRang(); reveler();
  
}

monter(D.lang in KIT.langues ? D.lang : Object.keys(KIT.langues)[0]);
  }

  class RdrKitPedagogique extends HTMLElement {
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
    _valide(D) { return !!(D && D.kit && Array.isArray(D.kit.themes) && D.kit.themes.length && D.kit.langues && D.medias); }
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!this._valide(D)) {
        if (!this.firstChild) this.innerHTML = "<div class=\"rkp-attente\" aria-hidden=\"true\"><div class=\"rkp-sq-haut\"><div class=\"rkp-sq-trame\"><i class=\"rkp-sq-l rkp-sq-k\"></i><i class=\"rkp-sq-l rkp-sq-t\"></i><i class=\"rkp-sq-l rkp-sq-t rkp-sq-t2\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p1\"></i><i class=\"rkp-sq-l rkp-sq-p\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p3\"></i></div></div><div class=\"rkp-sq-trame rkp-sq-sec\"><i class=\"rkp-sq-l rkp-sq-k\"></i><i class=\"rkp-sq-l rkp-sq-t\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p1\"></i><i class=\"rkp-sq-l rkp-sq-p\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p3\"></i></div><div class=\"rkp-sq-trame rkp-sq-cartes\"><i class=\"rkp-sq-c\"></i><i class=\"rkp-sq-c\"></i><i class=\"rkp-sq-c\"></i></div><div class=\"rkp-sq-trame rkp-sq-sec\"><i class=\"rkp-sq-l rkp-sq-k\"></i><i class=\"rkp-sq-l rkp-sq-t\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p1\"></i><i class=\"rkp-sq-l rkp-sq-p\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p3\"></i></div></div>";
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      if (!D.lang) D.lang = this._lang();
      const en = D.lang === 'en';
      



      poserStyle();
      this.innerHTML = GABARIT;
      if (en) { traduire(this); prefixerLiens(this); }
      




      const fond = this.querySelector('.rkp-page');
      fond.classList.add('rkp-calme');
      try { demarrer(D, this); } catch (e) { console.error('[rdr-kit-pedagogique]', e); }
      void fond.offsetHeight;
      fond.classList.remove('rkp-calme');
      if (en) {
        traduire(this); prefixerLiens(this);
        if (Object.keys(TRAD).length) {
          this._obs = new MutationObserver((ms) => ms.forEach((m) => {
            if (m.type === 'characterData') { ajuster(m.target); return; }
            m.addedNodes.forEach((n) => { traduire(n); prefixerLiens(n); });
          }));
          this._obs.observe(this, { childList: true, subtree: true, characterData: true });
        }
      }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang();
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (this._valide(j)) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rkp-vide"><h3>' + (en ? "This page will be back in a moment" : "Le kit pédagogique revient dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = "<div class=\"rkp-attente\" aria-hidden=\"true\"><div class=\"rkp-sq-haut\"><div class=\"rkp-sq-trame\"><i class=\"rkp-sq-l rkp-sq-k\"></i><i class=\"rkp-sq-l rkp-sq-t\"></i><i class=\"rkp-sq-l rkp-sq-t rkp-sq-t2\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p1\"></i><i class=\"rkp-sq-l rkp-sq-p\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p3\"></i></div></div><div class=\"rkp-sq-trame rkp-sq-sec\"><i class=\"rkp-sq-l rkp-sq-k\"></i><i class=\"rkp-sq-l rkp-sq-t\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p1\"></i><i class=\"rkp-sq-l rkp-sq-p\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p3\"></i></div><div class=\"rkp-sq-trame rkp-sq-cartes\"><i class=\"rkp-sq-c\"></i><i class=\"rkp-sq-c\"></i><i class=\"rkp-sq-c\"></i></div><div class=\"rkp-sq-trame rkp-sq-sec\"><i class=\"rkp-sq-l rkp-sq-k\"></i><i class=\"rkp-sq-l rkp-sq-t\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p1\"></i><i class=\"rkp-sq-l rkp-sq-p\"></i><i class=\"rkp-sq-l rkp-sq-p rkp-sq-p3\"></i></div></div>"; this._chercher(); });
    }
  }
  customElements.define("rdr-kit-pedagogique", RdrKitPedagogique);
})();
})();
