/* rdr-elements guadeloupe | source route-du-rhum a47ed19 | rdr-guadeloupe.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["guadeloupe"]="a47ed19";performance.mark("rdr-elements:guadeloupe")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-guadeloupe")) return;
  const TAG = "rdr-guadeloupe";
  const VILLE = "guadeloupe";
  const CSS = "rdr-guadeloupe{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-guadeloupe section[id],rdr-guadeloupe header[id]{scroll-margin-top:76px}\nrdr-guadeloupe .rgd-attente{display:block;min-height:clamp(560px,calc(100svh - var(--entete)),900px);background:#fff}\nrdr-guadeloupe .rgd-sq-haut{display:flex;align-items:center;min-height:clamp(340px,calc(100svh - var(--entete) - 190px),600px);background:var(--c-fonce)}\nrdr-guadeloupe .rgd-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-guadeloupe .rgd-sq-l,rdr-guadeloupe .rgd-sq-c{position:relative;display:block;overflow:hidden}\nrdr-guadeloupe .rgd-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-guadeloupe .rgd-sq-k{width:120px;height:11px}\nrdr-guadeloupe .rgd-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-guadeloupe .rgd-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-guadeloupe .rgd-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-guadeloupe .rgd-sq-p1{margin-top:30px}\nrdr-guadeloupe .rgd-sq-p3{width:min(380px,62%)}\nrdr-guadeloupe .rgd-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-guadeloupe .rgd-sq-sec .rgd-sq-l{background:rgba(14,17,29,.08)}\nrdr-guadeloupe .rgd-sq-sec .rgd-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-guadeloupe .rgd-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-guadeloupe .rgd-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:#EEF1F6}\nrdr-guadeloupe .rgd-sq-l::after,rdr-guadeloupe .rgd-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rgd-sq-luire 1.6s ease-in-out infinite}\nrdr-guadeloupe .rgd-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-guadeloupe .rgd-sq-sec .rgd-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-guadeloupe .rgd-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rgd-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-guadeloupe .rgd-sq-haut{min-height:clamp(280px,74vw,360px)}rdr-guadeloupe .rgd-sq-cartes{grid-template-columns:1fr}rdr-guadeloupe .rgd-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-guadeloupe .rgd-sq-l::after,rdr-guadeloupe .rgd-sq-c::after{animation:none;display:none}}\nrdr-guadeloupe .rgd-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#fff;color:var(--encre);font-family:var(--police);text-align:center}\nrdr-guadeloupe .rgd-vide h3{margin:0;font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:26px;line-height:1.1;color:var(--marine2)}\nrdr-guadeloupe .rgd-vide p{margin:0;color:var(--encre2)}\nrdr-guadeloupe .rgd-vide button{min-height:46px;padding:10px 20px;border:2px solid var(--marine2);border-radius:3px 15px 3px 15px;background:var(--marine2);color:#fff;font:700 14px/1.2 var(--police);cursor:pointer}\nrdr-guadeloupe{--marine2:#16355D;--bleu2:#56BCF6;--violet:#7894F7;--violet2:#4F5BA5;--jaune2:#FCF150;--orange:#F5BE41;\n  --c-fonce:var(--marine2);--c-clair:var(--bleu2);--c-vif:var(--violet);--c-vif2:var(--violet2);--c-jaune:var(--jaune2);--c-orange:var(--orange);\n  \n  --c-mer:var(--bleu2);\n  \n  --c-mer-doux:#E4F4FE;\n  \n  --g1:#4F5BA5;--g2:#56BCF6;--g3:#FCF150;--g4:#F5BE41;\n  --t1:#fff;--t2:#16355D;--t3:#16355D;--t4:#16355D;\n  \n  --c-survol:var(--violet2);--c-compte:var(--jaune2);--c-heure:var(--violet2);--c-trait:var(--bleu2);\n  \n  --encre:#16355D;--encre2:rgba(22,53,93,.78);--filet:rgba(22,53,93,.14);\n  \n  --pied:#0E111D;\n  --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;\n  --largeur:1240px;--marge:clamp(18px,4vw,40px);\n  \n  --air:1.5;\n  --entete:175px;\n  --carte-h:clamp(200px,29vh,290px);\n  --rempart:clamp(78px,9vw,140px);\n  --tymal:clamp(300px,30vw,430px);\n  --deborde:clamp(96px,12vh,130px);\n  --ease:cubic-bezier(.22,.8,.3,1);}\nrdr-guadeloupe{--orange2:#F19F39;--bleu3:#9EF4FD;--bleu4:#479ED7;--vert2:#85D8D5;\n  --c-clair:var(--bleu4);--c-vif:var(--vert2);--c-vif2:var(--bleu4);--c-orange:var(--orange2);--c-mer:var(--orange2);--c-mer-doux:#FCEEDB;\n  --g1:var(--orange2);--g2:#16355D;--g3:#FCF150;--g4:var(--vert2);\n  --t1:#16355D;--t2:#fff;--t3:#16355D;--t4:#16355D;\n  --c-survol:var(--bleu4);--c-compte:var(--jaune2);--c-heure:#16355D;--c-trait:var(--orange2);}\n@media (max-width:750px){\nrdr-guadeloupe{--air:1.3;--entete:120px;--marge:20px;--carte-h:188px;--rempart:74px;--tymal:236px;--deborde:150px}\n}\nrdr-guadeloupe *{box-sizing:border-box}\nrdr-guadeloupe{margin:0;background:#fff;color:var(--encre);font:15.5px/1.65 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-guadeloupe img{display:block;max-width:100%}\nrdr-guadeloupe a{color:inherit}\nrdr-guadeloupe h1,rdr-guadeloupe h2,rdr-guadeloupe h3,rdr-guadeloupe p{margin:0}\nrdr-guadeloupe .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-guadeloupe .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-guadeloupe .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-guadeloupe sup{font-size:.62em;line-height:0;vertical-align:.52em}\nrdr-guadeloupe [hidden]{display:none !important}\nrdr-guadeloupe .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:3px 15px 3px 15px;background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;transition:background .15s,color .15s,border-color .15s,transform .2s var(--ease);cursor:pointer}\nrdr-guadeloupe .btn .ico{width:18px;height:18px;stroke-width:2.4}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .btn:hover .ico--glisse{transform:translateX(3px)}}\nrdr-guadeloupe .ico--glisse{transition:transform .2s var(--ease)}\nrdr-guadeloupe .btn--marine{background:var(--marine2);border-color:var(--marine2);color:#fff}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .btn--marine:hover{background:var(--c-vif2);border-color:var(--c-vif2)}}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .btn--marine:hover{color:var(--marine2)}}\nrdr-guadeloupe .btn--contour{color:var(--marine2)}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .btn--contour:hover{background:var(--marine2);color:#fff}}\nrdr-guadeloupe .btn--grise{color:rgba(22,53,93,.45);border-color:rgba(22,53,93,.25);background:rgba(22,53,93,.04);pointer-events:none}\nrdr-guadeloupe .pastille-bientot{display:inline-flex;align-items:center;padding:4px 10px;border-radius:3px 10px 3px 10px;font:800 11px/1.4 var(--police);letter-spacing:.1em;text-transform:uppercase;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.3);color:#fff;white-space:nowrap}\nrdr-guadeloupe .sm-haut{position:relative;isolation:isolate;height:clamp(340px,calc(100svh - var(--entete) - 190px),600px);overflow:hidden;background:var(--c-fonce)}\nrdr-guadeloupe .sm-haut>img{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;object-position:var(--pos,50% 50%);transform:scale(1.05);animation:rgd-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rgd-zoom{to{transform:scale(1)}}\nrdr-guadeloupe .sm-haut::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(0deg,rgba(22,53,93,.62) 0%,rgba(22,53,93,.18) 36%,rgba(22,53,93,0) 58%),linear-gradient(90deg,rgba(22,53,93,.42) 0%,rgba(22,53,93,0) 46%)}\nrdr-guadeloupe .sm-haut .trame{position:absolute;left:0;right:0;bottom:clamp(20px,4vh,42px)}\nrdr-guadeloupe .sm-haut h1{font-size:clamp(56px,min(8.4vw,14.5vh),124px);color:#fff;text-shadow:0 10px 40px rgba(22,53,93,.4)}\nrdr-guadeloupe .sm-fete{position:relative;padding:calc(clamp(18px,3.6vh,44px) * var(--air)) 0 calc(var(--carte-h) / 2 + clamp(30px,5vh,56px) * var(--air))}\nrdr-guadeloupe .fete-grille{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.08fr);gap:clamp(26px,5vw,84px);align-items:start}\nrdr-guadeloupe .sm-fete h2{font-size:clamp(30px,min(3.7vw,6.6vh),54px);line-height:1.1;text-wrap:balance}\nrdr-guadeloupe .dates{display:flex;align-items:center;gap:12px;margin-top:16px;font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:clamp(17px,1.65vw,24px);line-height:1.15;color:var(--c-heure)}\nrdr-guadeloupe .dates::before{content:'';flex:none;width:34px;height:6px;background:var(--c-trait);transform:skewX(-20deg)}\nrdr-guadeloupe .dates span{text-wrap:balance}\nrdr-guadeloupe .dates sup{font-size:.58em;vertical-align:.62em;margin-left:.04em;letter-spacing:.02em}\nrdr-guadeloupe .fete-txt p{font-size:15.5px;line-height:1.75;color:var(--encre2);text-wrap:pretty}\nrdr-guadeloupe .fete-txt p:first-child{font-size:clamp(16px,1.2vw,17.5px);font-weight:500;color:var(--encre)}\nrdr-guadeloupe .fete-txt p+p{margin-top:14px}\nrdr-guadeloupe .sm-ville{position:relative;display:flow-root;background:var(--c-fonce);color:#fff;padding-bottom:calc(var(--rempart) + clamp(30px,5vh,60px) * var(--air))}\nrdr-guadeloupe .diapo{position:relative;z-index:2}\nrdr-guadeloupe .sm-ville .diapo{margin-top:calc(var(--carte-h) / -2)}\nrdr-guadeloupe .rail{display:flex;gap:16px;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 var(--marge) 0 max(var(--marge),calc((100% - var(--largeur)) / 2));scroll-padding-left:max(var(--marge),calc((100% - var(--largeur)) / 2))}\nrdr-guadeloupe .rail::-webkit-scrollbar{display:none}\nrdr-guadeloupe .rail figure{--h:var(--carte-h);position:relative;flex:none;width:calc(var(--h) * var(--ratio,1.5));height:var(--h);margin:0;border-radius:20px 5px 20px 5px;overflow:hidden;scroll-snap-align:start;background:rgba(22,53,93,.1);box-shadow:0 26px 40px -26px rgba(22,53,93,.6)}\nrdr-guadeloupe .rail img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .rail figure:hover img{transform:scale(1.04)}}\nrdr-guadeloupe .diapo-nav{display:flex;align-items:center;gap:18px;margin-top:18px}\nrdr-guadeloupe .diapo-barre{position:relative;flex:1;max-width:240px;height:3px;border-radius:2px;background:rgba(255,255,255,.24);overflow:hidden}\nrdr-guadeloupe .diapo-barre i{position:absolute;top:0;bottom:0;left:0;width:var(--vu,30%);background:var(--c-trait);transform:translateX(var(--x,0%));transition:transform .25s}\nrdr-guadeloupe .diapo-fleches{display:flex;gap:10px;margin-left:auto}\nrdr-guadeloupe .fleche{display:grid;place-items:center;width:44px;height:44px;padding:0;border:2px solid currentColor;border-radius:3px 10px 3px 10px;background:transparent;color:inherit;cursor:pointer;transition:background .15s,color .15s,opacity .2s}\nrdr-guadeloupe .fleche .ico{width:20px;height:20px;stroke-width:2.4}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .fleche:hover:not(:disabled){background:#fff;color:var(--marine2);border-color:#fff}}\nrdr-guadeloupe .fleche:disabled{opacity:.3;cursor:default}\nrdr-guadeloupe .ville-grille{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:clamp(28px,5vw,84px);margin-top:clamp(28px,5vh,56px);align-items:end}\nrdr-guadeloupe .ville-txt p{font-size:15.5px;line-height:1.78;color:rgba(255,255,255,.9);text-wrap:pretty}\nrdr-guadeloupe .ville-txt p+p,rdr-guadeloupe .ville-suite>p{margin-top:14px}\nrdr-guadeloupe .chute{position:relative;padding:6px 0 6px 26px;font-style:italic;font-weight:600;font-size:clamp(18px,1.55vw,23px);line-height:1.5;color:#fff;text-wrap:pretty}\nrdr-guadeloupe .chute::before{content:'';position:absolute;left:0;top:8px;bottom:8px;width:5px;background:var(--c-jaune);transform:skewX(-10deg)}\nrdr-guadeloupe .lire-suite{display:none;align-items:center;gap:8px;min-height:44px;margin-top:6px;padding:0;border:0;border-radius:3px 10px 3px 10px;background:none;color:var(--c-jaune);font:800 11px var(--police);letter-spacing:.14em;text-transform:uppercase;cursor:pointer}\nrdr-guadeloupe .lire-suite .ico{width:14px;height:14px;stroke-width:2.6;transition:transform .3s}\nrdr-guadeloupe .lire-suite[aria-expanded=\"true\"] .ico{transform:rotate(180deg)}\nrdr-guadeloupe .rempart{position:absolute;left:0;right:0;bottom:-1px;height:var(--rempart);line-height:0;pointer-events:none}\nrdr-guadeloupe .rempart svg{display:block;width:100%;height:100%;fill:#fff}\nrdr-guadeloupe .rempart .etroit{display:none}\nrdr-guadeloupe .sm-chiffres{position:relative;padding:calc(clamp(10px,2.4vh,28px) * var(--air)) 0 calc(clamp(44px,7vh,80px) * var(--air))}\nrdr-guadeloupe .sm-chiffres h2{font-size:clamp(26px,min(3vw,5.6vh),42px)}\nrdr-guadeloupe .chiffres-grille{display:grid;grid-template-columns:repeat(var(--nb,4),minmax(0,1fr));gap:clamp(12px,1.4vw,18px);margin-top:clamp(16px,3vh,30px)}\nrdr-guadeloupe .chiffre{--pad:clamp(18px,2vw,26px);position:relative;isolation:isolate;container-type:inline-size;display:flex;flex-direction:column;justify-content:flex-end;min-height:clamp(150px,23vh,208px);padding:var(--pad);border-radius:22px 6px 22px 6px;background:var(--g);color:var(--t);overflow:hidden;box-shadow:0 24px 40px -30px rgba(22,53,93,.6);cursor:default}\nrdr-guadeloupe .chiffre::before{content:'';position:absolute;left:var(--pad);top:var(--pad);width:34px;height:5px;background:currentColor;opacity:.5;transform:skewX(-20deg)}\nrdr-guadeloupe .chiffre:nth-child(1){--g:var(--g1);--t:var(--t1)}\nrdr-guadeloupe .chiffre:nth-child(2){--g:var(--g2);--t:var(--t2)}\nrdr-guadeloupe .chiffre:nth-child(3){--g:var(--g3);--t:var(--t3)}\nrdr-guadeloupe .chiffre:nth-child(4){--g:var(--g4);--t:var(--t4)}\nrdr-guadeloupe .chiffre-val{display:flex;align-items:baseline;font-family:var(--titre);font-style:italic;font-size:min(clamp(42px,4.4vw,68px),calc((100cqi - 4px) / var(--n,3)));line-height:1;white-space:nowrap}\nrdr-guadeloupe .chiffre-val small{font-family:var(--police);font-style:normal;font-weight:800;font-size:.4em;margin-left:.22em;letter-spacing:0}\nrdr-guadeloupe .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-guadeloupe .chiffre-lib{margin-top:10px;font-weight:700;font-size:clamp(13.5px,1.1vw,15.5px);line-height:1.35}\nrdr-guadeloupe .chiffre-lib span{display:block;margin-top:2px;font-weight:500;font-size:12.5px;opacity:.9}\nrdr-guadeloupe .odo{display:inline-flex;align-items:flex-start}\nrdr-guadeloupe .odo-c{display:inline-block;height:1em;margin-right:-.05em;clip-path:inset(0 -40% 0 -40%)}\nrdr-guadeloupe .odo-r{display:block;will-change:transform}\nrdr-guadeloupe .odo-r i{display:block;height:1em;line-height:1em;font-style:inherit;text-align:center}\nrdr-guadeloupe .odo-s{display:inline-block;width:.24em}\nrdr-guadeloupe .odo-t{display:inline-block}\nrdr-guadeloupe .sm-mer{position:relative;background:var(--c-mer-doux);color:var(--encre);border-top:10px solid var(--c-mer)}\nrdr-guadeloupe .sm-appel{position:relative;padding:calc(clamp(40px,6.4vh,72px) * var(--air)) 0 calc(clamp(30px,5vh,52px) * var(--air))}\nrdr-guadeloupe .appel-grille{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.9fr);gap:clamp(28px,5vw,84px);align-items:center}\nrdr-guadeloupe .sm-appel h2{font-size:clamp(30px,min(3.4vw,6vh),48px)}\nrdr-guadeloupe .sm-appel .appel-txt>p{margin-top:12px;font-size:15px;line-height:1.7;font-weight:500;max-width:62ch;text-wrap:pretty}\nrdr-guadeloupe .postuler{position:relative;isolation:isolate;margin-top:20px;padding:16px 20px 17px;border-radius:16px 4px 16px 4px;background:rgba(255,255,255,.72);border:1px solid rgba(22,53,93,.14);overflow:hidden;max-width:62ch}\nrdr-guadeloupe .postuler::before{content:'';position:absolute;inset:0;z-index:-1;background:var(--marine2);-webkit-mask:var(--topo) repeat left top / 700px auto;mask:var(--topo) repeat left top / 700px auto;opacity:.08;pointer-events:none}\nrdr-guadeloupe .postuler h3{display:flex;align-items:center;gap:10px;font-size:12.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}\nrdr-guadeloupe .postuler h3 .ico{width:18px;height:18px}\nrdr-guadeloupe .postuler p{margin-top:6px;font-size:14.5px;line-height:1.65;font-weight:500}\nrdr-guadeloupe .postuler a{font-weight:800;text-decoration:underline;text-decoration-color:var(--c-vif2);text-decoration-thickness:2px;text-underline-offset:4px;overflow-wrap:anywhere}\nrdr-guadeloupe .docs{display:flex;flex-direction:column;gap:12px}\nrdr-guadeloupe .doc{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:16px 4px 16px 4px;background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 20px 34px -22px rgba(22,53,93,.7);transition:transform .25s var(--ease),box-shadow .25s}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .doc:hover{transform:translateY(-3px);box-shadow:0 26px 40px -22px rgba(22,53,93,.75)}}\nrdr-guadeloupe .doc .pic{flex:none;display:grid;place-items:center;width:46px;height:46px;border-radius:12px 3px 12px 3px;background:var(--c-jaune);color:var(--marine2)}\nrdr-guadeloupe .doc .pic .ico{width:22px;height:22px}\nrdr-guadeloupe .doc b{display:block;font-size:14.5px;font-weight:800;line-height:1.3}\nrdr-guadeloupe .doc small{display:block;margin-top:3px;font-size:12.5px;line-height:1.4;font-weight:500;color:var(--encre2)}\nrdr-guadeloupe .doc .format{display:inline-block;margin-top:6px;padding:2px 7px;border-radius:5px;background:rgba(22,53,93,.08);font:800 11px/1.5 var(--police);letter-spacing:.1em;color:var(--encre2)}\nrdr-guadeloupe .doc>.ico{flex:none;margin-left:auto;width:18px;height:18px;color:var(--encre2);transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .doc:hover>.ico{transform:translate(2px,-2px)}}\nrdr-guadeloupe .sm-programme{position:relative;padding:0 0 calc(clamp(40px,6.4vh,72px) * var(--air))}\nrdr-guadeloupe .prog{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"tete bouton\" \"chapo chapo\" \"jours jours\" \"journees journees\" \"forts forts\";align-items:center;column-gap:32px;padding-top:calc(clamp(26px,4vh,40px) * var(--air));border-top:1px solid rgba(22,53,93,.22)}\nrdr-guadeloupe .prog>h2{grid-area:tete;display:flex;align-items:center;gap:16px;font-size:clamp(30px,min(3.4vw,6vh),48px)}\nrdr-guadeloupe .prog h2 .pic{flex:none;display:grid;place-items:center;width:50px;height:50px;border-radius:14px 4px 14px 4px;background:var(--marine2);color:var(--c-jaune)}\nrdr-guadeloupe .prog h2 .pic .ico{width:24px;height:24px}\nrdr-guadeloupe .prog>.btn{grid-area:bouton}\nrdr-guadeloupe .prog-chapo{grid-area:chapo;margin-top:12px;max-width:66ch;font-size:15.5px;line-height:1.65;font-weight:500;text-wrap:pretty}\nrdr-guadeloupe .prog-jours{grid-area:jours;min-width:0;margin-top:clamp(18px,3vh,28px);border-radius:22px 6px 22px 6px;background:var(--marine2);color:#fff;box-shadow:0 24px 40px -30px rgba(22,53,93,.7);overflow:hidden}\nrdr-guadeloupe .prog-jours ol{display:grid;grid-template-columns:repeat(var(--n,13),minmax(0,1fr));gap:4px;margin:0;padding:8px;list-style:none}\nrdr-guadeloupe .prog-jours a{position:relative;display:flex;flex-direction:column;align-items:center;height:100%;padding:10px 4px 14px;border-radius:3px 10px 3px 10px;color:inherit;text-decoration:none;transition:background .15s}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .prog-jours a:hover{background:var(--c-survol)}}\nrdr-guadeloupe .prog-jours a:focus-visible{outline:2px solid var(--c-jaune);outline-offset:-2px}\nrdr-guadeloupe .pj-j,rdr-guadeloupe .pj-m{font:700 10.5px/1.35 var(--police);letter-spacing:.12em;text-transform:uppercase;opacity:.72}\nrdr-guadeloupe .prog-jours a>b{font:800 clamp(20px,1.75vw,25px)/1.1 var(--police)}\nrdr-guadeloupe .pj-n{margin-top:7px;font:600 10px/1.2 var(--police);color:rgba(255,255,255,.72);text-align:center}\nrdr-guadeloupe .pj-n b{display:block;font-size:13px;font-weight:800;color:var(--c-compte)}\nrdr-guadeloupe .pj-n>span{white-space:nowrap}\nrdr-guadeloupe .pj-point{position:absolute;left:50%;bottom:5px;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:var(--jaune2)}\nrdr-guadeloupe .prog-journees{grid-area:journees;display:flex;flex-wrap:wrap;gap:6px 22px;margin:12px 0 0;padding:0;list-style:none;font-size:13.5px;line-height:1.4;font-weight:500}\nrdr-guadeloupe .prog-journees li{display:inline-flex;align-items:center;gap:8px}\nrdr-guadeloupe .prog-journees i{flex:none;width:8px;height:8px;border-radius:50%;background:var(--jaune2);box-shadow:0 0 0 2px var(--marine2)}\nrdr-guadeloupe .prog-journees b{font-weight:800}\nrdr-guadeloupe .prog-forts{grid-area:forts;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,1.4vw,18px);margin:clamp(18px,3vh,28px) 0 0;padding:0;list-style:none}\nrdr-guadeloupe .prog-forts>li{display:flex;min-width:0}\nrdr-guadeloupe .pf{display:flex;flex:1;flex-direction:column;min-width:0;border-radius:20px 5px 20px 5px;overflow:hidden;background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 20px 34px -22px rgba(22,53,93,.7);transition:transform .25s var(--ease),box-shadow .25s}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .pf:hover{transform:translateY(-3px);box-shadow:0 26px 40px -22px rgba(22,53,93,.75)}}\nrdr-guadeloupe .pf:focus-visible{outline:3px solid var(--marine2);outline-offset:3px}\nrdr-guadeloupe .pf-visuel{position:relative;display:block;aspect-ratio:16/10;overflow:hidden;background:var(--pf-fond,var(--marine2))}\nrdr-guadeloupe .pf-visuel img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .pf:hover .pf-visuel img{transform:scale(1.04)}}\nrdr-guadeloupe .pf-grand{position:absolute;right:12px;top:4px;font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:clamp(76px,7vw,104px);line-height:1;color:transparent;-webkit-text-stroke:2px var(--pf-trait,#fff);opacity:.9}\nrdr-guadeloupe .pf-date{position:absolute;left:12px;bottom:12px;padding:5px 9px;border-radius:3px 10px 3px 10px;background:var(--jaune2);color:var(--marine2);font:800 11px/1.3 var(--police);letter-spacing:.1em;text-transform:uppercase}\nrdr-guadeloupe .pf-date sup{text-transform:none}\nrdr-guadeloupe .pf-corps{display:flex;flex:1;flex-direction:column;gap:6px;padding:14px 16px 16px}\nrdr-guadeloupe .pf-heure{font-family:var(--titre);font-style:italic;font-size:18px;line-height:1.1;color:var(--c-heure)}\nrdr-guadeloupe .pf-titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(17px,1.4vw,21px);line-height:1.1;color:var(--marine2);text-wrap:balance}\nrdr-guadeloupe .pf-meta{display:flex;flex-wrap:wrap;gap:4px 14px;margin-top:auto;padding-top:8px;font:600 12.5px/1.3 var(--police);color:var(--encre2)}\nrdr-guadeloupe .pf-meta span{display:inline-flex;align-items:center;gap:6px}\nrdr-guadeloupe .pf-meta .ico{width:15px;height:15px;stroke-width:2.2}\nrdr-guadeloupe .sm-plan{position:relative;padding:calc(clamp(38px,6.4vh,72px) * var(--air)) 0 calc(var(--deborde) + clamp(26px,4.6vh,56px) * var(--air))}\nrdr-guadeloupe .plan-grille{display:grid;grid-template-columns:minmax(0,min(880px,calc((100svh - 190px) * 1.386))) minmax(240px,1fr);grid-template-areas:\"fig .\" \"fig titre\" \"fig actions\" \"fig .\";grid-template-rows:1fr auto auto 1fr;gap:0 clamp(24px,3.6vw,56px)}\nrdr-guadeloupe .plan-titre{margin-bottom:clamp(18px,3vh,30px)}\nrdr-guadeloupe .plan-titre{grid-area:titre}\nrdr-guadeloupe .plan-titre h2{font-size:clamp(30px,min(3.3vw,6vh),48px)}\nrdr-guadeloupe .plan-fig{grid-area:fig;position:relative;margin:0;aspect-ratio:3415/2463;border-radius:22px 6px 22px 6px;overflow:hidden;background:rgba(22,53,93,.05);border:1px solid var(--filet);box-shadow:0 30px 50px -34px rgba(22,53,93,.6)}\nrdr-guadeloupe .plan-fig a{display:block;height:100%;cursor:zoom-in}\nrdr-guadeloupe .plan-fig img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .plan-fig a:hover img{transform:scale(1.015)}}\nrdr-guadeloupe .plan-actions{grid-area:actions;display:flex;flex-direction:column;gap:14px}\nrdr-guadeloupe .plan-actions .btn{justify-content:space-between}\nrdr-guadeloupe .cta-bientot{position:relative;display:flex;align-items:flex-end;min-height:clamp(128px,19vh,168px);border-radius:18px;overflow:hidden;background:var(--c-fonce);color:#fff;border:1px solid rgba(22,53,93,.2);pointer-events:none}\nrdr-guadeloupe .cta-bientot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1);opacity:.4}\nrdr-guadeloupe .cta-bientot::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(22,53,93,.1) 0%,rgba(22,53,93,.85) 100%)}\nrdr-guadeloupe .cta-bientot .cta-txt{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:16px 18px;opacity:.85}\nrdr-guadeloupe .cta-bientot .cta-ico{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.18);color:#fff}\nrdr-guadeloupe .cta-bientot .cta-ico .ico{width:20px;height:20px}\nrdr-guadeloupe .cta-bientot h3{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(18px,1.5vw,22px);line-height:1.05}\nrdr-guadeloupe .cta-bientot--seul{max-width:560px;min-height:clamp(150px,22vh,190px)}\nrdr-guadeloupe .sm-venue{position:relative;z-index:2;background:var(--c-jaune);color:var(--encre)}\nrdr-guadeloupe .venue-arcs{position:absolute;inset:0;overflow:hidden;pointer-events:none}\nrdr-guadeloupe .venue-arcs img{position:absolute;right:0;bottom:0;width:min(520px,38vw);transform:translate(10%,30%) scale(-1,-1)}\nrdr-guadeloupe .venue-grille{position:relative;display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:clamp(20px,4vw,60px);min-height:max(clamp(250px,35vh,330px),calc(var(--tymal) * .944 - var(--deborde) + 22px));align-items:center}\nrdr-guadeloupe .tymal{position:absolute;left:var(--marge);top:calc(-1 * var(--deborde));width:var(--tymal);margin:0;transform-origin:50% 96%;animation:rgd-marche 3.4s ease-in-out infinite}\nrdr-guadeloupe .tymal img{width:100%;height:auto;filter:drop-shadow(2px 6px 10px rgba(22,53,93,.28))}\n@keyframes rgd-marche{0%,100%{transform:rotate(-1.4deg)}50%{transform:rotate(1.4deg) translateY(-3px)}}\nrdr-guadeloupe .venue-txt{grid-column:2;padding:calc(clamp(30px,5.4vh,58px) * var(--air)) 0}\nrdr-guadeloupe .sm-venue h2{font-size:clamp(32px,min(3.6vw,6.4vh),52px)}\nrdr-guadeloupe .venue-txt p{margin-top:14px;max-width:56ch;font-size:16px;line-height:1.7;font-weight:500;text-wrap:pretty}\nrdr-guadeloupe .venue-txt ul{margin:12px 0 0;padding:0;list-style:none;max-width:60ch}\nrdr-guadeloupe .venue-txt li{position:relative;padding-left:18px;margin-top:6px;font-size:15px;line-height:1.6;font-weight:500}\nrdr-guadeloupe .venue-txt li::before{content:'';position:absolute;left:0;top:.62em;width:8px;height:8px;background:var(--marine2);transform:skewX(-14deg)}\nrdr-guadeloupe .venue-txt .btn{margin-top:22px}\nrdr-guadeloupe .sm-quefaire{position:relative;padding:clamp(52px,8vh,92px) 0 clamp(56px,9vh,100px);background:#fff}\nrdr-guadeloupe .qf-tete{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px 28px}\nrdr-guadeloupe .sm-quefaire h2{font-size:clamp(30px,min(3.6vw,6.4vh),52px)}\nrdr-guadeloupe .sm-quefaire .diapo{margin-top:clamp(20px,3.4vh,34px);color:var(--marine2)}\nrdr-guadeloupe .sm-quefaire .rail figure{--h:clamp(220px,38vh,380px);--ratio:1.3333}\nrdr-guadeloupe .sm-quefaire .diapo-barre{background:rgba(22,53,93,.16)}\nrdr-guadeloupe .sm-quefaire .diapo-barre i{background:var(--marine2)}@media (hover:hover) and (pointer:fine){rdr-guadeloupe .sm-quefaire .fleche:hover:not(:disabled){background:var(--marine2);color:#fff;border-color:var(--marine2)}}\nrdr-guadeloupe .rempart{display:none}\nrdr-guadeloupe .sm-ville{padding-bottom:clamp(44px,7vh,80px)}\nrdr-guadeloupe .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-guadeloupe .rv.vu{opacity:1;transform:none}\n@media (max-height:820px) and (min-width:751px){\nrdr-guadeloupe{--carte-h:clamp(180px,28vh,236px);--deborde:clamp(96px,15vh,118px)}\nrdr-guadeloupe .fete-txt p{font-size:15px;line-height:1.7}\nrdr-guadeloupe .fete-txt p:first-child{font-size:16px}\nrdr-guadeloupe .ville-txt p{font-size:15px;line-height:1.72}\nrdr-guadeloupe .chiffre{min-height:clamp(136px,21vh,172px)}\nrdr-guadeloupe .sm-appel .appel-txt>p{font-size:14.5px;line-height:1.62}\nrdr-guadeloupe .postuler{margin-top:16px;padding:13px 18px 14px}\nrdr-guadeloupe .venue-txt p{font-size:15.5px}\nrdr-guadeloupe .prog-chapo{font-size:15px}\nrdr-guadeloupe .prog-jours a{padding:8px 4px 12px}\nrdr-guadeloupe .pf-corps{padding:12px 15px 14px}\n}\n@media (max-width:1100px){\nrdr-guadeloupe .appel-grille{grid-template-columns:1fr}\nrdr-guadeloupe .docs{flex-direction:row;flex-wrap:wrap}\nrdr-guadeloupe .doc{flex:1 1 300px}\nrdr-guadeloupe .prog-jours ol{display:flex;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none}\nrdr-guadeloupe .prog-jours ol::-webkit-scrollbar{display:none}\nrdr-guadeloupe .prog-jours li{flex:0 0 76px;scroll-snap-align:start}\nrdr-guadeloupe .prog-forts{grid-template-columns:repeat(2,minmax(0,1fr))}\n}\n@media (max-width:750px){\nrdr-guadeloupe{font-size:15px}\nrdr-guadeloupe .sm-haut{height:clamp(280px,74vw,360px)}\nrdr-guadeloupe .sm-haut>img{object-position:var(--pos-m,var(--pos,50% 50%))}\nrdr-guadeloupe .sm-haut h1{font-size:clamp(42px,12.6vw,58px)}\nrdr-guadeloupe .sm-fete{padding-top:14px}\nrdr-guadeloupe .fete-grille,rdr-guadeloupe .ville-grille{grid-template-columns:1fr;gap:18px}\nrdr-guadeloupe .sm-fete h2{font-size:clamp(28px,8.4vw,36px)}\nrdr-guadeloupe .dates{font-size:clamp(14px,4.2vw,17px)}\nrdr-guadeloupe .fete-txt p,rdr-guadeloupe .ville-txt p{font-size:14.5px;line-height:1.7}\nrdr-guadeloupe .fete-txt p:first-child{font-size:15px}\nrdr-guadeloupe .rail{gap:12px}\nrdr-guadeloupe .diapo-nav{margin-top:14px}\nrdr-guadeloupe .fleche{width:44px;height:44px}\nrdr-guadeloupe .ville-grille{margin-top:26px}\nrdr-guadeloupe .ville-suite{display:none}\nrdr-guadeloupe .ville-suite.ouverte{display:block}\nrdr-guadeloupe .ville-suite.ouverte p:first-child{margin-top:14px}\nrdr-guadeloupe .lire-suite{display:inline-flex}\nrdr-guadeloupe .chute{font-size:17px;margin-top:6px}\nrdr-guadeloupe .rempart .large{display:none}\nrdr-guadeloupe .rempart .etroit{display:block}\nrdr-guadeloupe .sm-chiffres h2{font-size:clamp(24px,7vw,30px)}\nrdr-guadeloupe .chiffres-grille{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\nrdr-guadeloupe .chiffres-grille>.chiffre:last-child:nth-child(odd){grid-column:1/-1}\nrdr-guadeloupe .chiffre{min-height:128px;padding:16px 14px}\nrdr-guadeloupe .chiffre::before{left:14px;top:16px;width:26px;height:4px}\nrdr-guadeloupe .chiffre-val{font-size:min(clamp(30px,9.2vw,38px),calc((100cqi - 4px) / var(--n,3)))}\nrdr-guadeloupe .chiffre-lib{font-size:13px;margin-top:8px}\nrdr-guadeloupe .chiffre-lib span{font-size:11.5px}\nrdr-guadeloupe .sm-appel{padding-top:40px}\nrdr-guadeloupe .sm-appel h2,rdr-guadeloupe .sm-plan h2,rdr-guadeloupe .sm-venue h2,rdr-guadeloupe .sm-quefaire h2{font-size:clamp(28px,8.4vw,34px)}\nrdr-guadeloupe .sm-appel .appel-txt>p{font-size:14.5px}\nrdr-guadeloupe .postuler{padding:14px 16px}\nrdr-guadeloupe .docs{flex-direction:column}\nrdr-guadeloupe .doc{flex:none;padding:14px}\nrdr-guadeloupe .sm-programme{padding-bottom:44px}\nrdr-guadeloupe .prog{grid-template-columns:minmax(0,1fr);grid-template-areas:\"tete\" \"chapo\" \"jours\" \"journees\" \"forts\" \"bouton\";padding-top:28px}\nrdr-guadeloupe .prog>h2{font-size:clamp(28px,8.4vw,34px);gap:12px}\nrdr-guadeloupe .prog h2 .pic{width:42px;height:42px}\nrdr-guadeloupe .prog>.btn{width:100%;justify-content:space-between;margin-top:6px}\nrdr-guadeloupe .prog-chapo{font-size:14.5px;line-height:1.6}\nrdr-guadeloupe .prog-jours{margin-top:18px;border-radius:18px 5px 18px 5px}\nrdr-guadeloupe .prog-jours ol{padding:6px}\nrdr-guadeloupe .prog-jours li{flex-basis:calc((100% - 16px) / 4.5)}\nrdr-guadeloupe .prog-jours a{padding:9px 2px 13px}\nrdr-guadeloupe .prog-jours a>b{font-size:21px}\nrdr-guadeloupe .pj-j,rdr-guadeloupe .pj-m{font-size:10px}\nrdr-guadeloupe .pj-n{font-size:9.5px}\nrdr-guadeloupe .pj-n b{font-size:12.5px}\nrdr-guadeloupe .prog-journees{flex-direction:column;gap:5px;margin-top:12px;font-size:13px}\nrdr-guadeloupe .prog-forts{display:flex;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;margin:18px calc(-1 * var(--marge)) 0;padding:0 var(--marge) 22px;scroll-padding:0 var(--marge);gap:12px}\nrdr-guadeloupe .prog-forts::-webkit-scrollbar{display:none}\nrdr-guadeloupe .prog-forts>li{flex:0 0 min(80%,300px);scroll-snap-align:start}\nrdr-guadeloupe .pf-grand{font-size:84px}\nrdr-guadeloupe .pf-titre{font-size:18px}\nrdr-guadeloupe .plan-grille{grid-template-columns:1fr;grid-template-areas:\"titre\" \"fig\" \"actions\";grid-template-rows:auto;gap:16px}\nrdr-guadeloupe .plan-titre{margin-bottom:0}\nrdr-guadeloupe .cta-bientot{min-height:118px}\nrdr-guadeloupe .venue-grille{display:block;min-height:0;padding-top:1px}\nrdr-guadeloupe .tymal{position:relative;left:auto;top:auto;display:block;margin:calc(var(--deborde) * -1) auto 0}\nrdr-guadeloupe .venue-txt{padding:10px 0 38px}\nrdr-guadeloupe .venue-txt p{font-size:15px}\nrdr-guadeloupe .venue-txt .btn{width:100%;justify-content:space-between}\nrdr-guadeloupe .venue-arcs img{width:78vw;transform:translate(14%,34%) scale(-1,-1)}\nrdr-guadeloupe .qf-tete .btn{width:100%;justify-content:space-between}\nrdr-guadeloupe .sm-quefaire .rail figure{--h:min(62vw,250px)}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-guadeloupe *{animation:none !important;transition:none !important}\nrdr-guadeloupe .rv{opacity:1;transform:none}\nrdr-guadeloupe .sm-haut>img{transform:none}\n}";
  const PAGE = "<header class=\"sm-haut\" id=\"haut\"></header>\n  <section class=\"sm-fete\" id=\"fete\" aria-labelledby=\"t-fete\"></section>\n  <section class=\"sm-ville\" id=\"ville\" aria-label=\"La ville\"></section>\n  <section class=\"sm-chiffres\" id=\"chiffres\" aria-labelledby=\"t-chiffres\"></section>\n  <div class=\"sm-mer\" id=\"mer\">\n    <section class=\"sm-appel\" id=\"appel-a-projet\" aria-labelledby=\"t-appel\"></section>\n    <section class=\"sm-programme\" id=\"programme\" aria-labelledby=\"t-programme\"></section>\n  </div>\n  <section class=\"sm-plan\" id=\"plan\" aria-labelledby=\"t-plan\"></section>\n  <section class=\"sm-venue\" id=\"venue\" aria-labelledby=\"t-venue\"></section>\n  <section class=\"sm-quefaire\" id=\"que-faire\" aria-labelledby=\"t-que-faire\"></section>";
  const TRAD = {"La ville":"The city","Photos":"Photos","Photo précédente":"Previous photo","Photo suivante":"Next photo","Lire la suite":"Read more","Refermer":"Show less","Les jours du programme":"Programme days","Tymal, la mascotte de la course, en marinière, un drapeau de la Route du Rhum à la main":"Tymal, the race mascot, in a Breton striped top, holding a Route du Rhum flag","Animation":"Event","Cérémonie":"Ceremony","Concert":"Concert","Conférence":"Talk","Exposition":"Exhibition","Nautique":"On the water","Soirée":"Evening","Spectacle":"Show"};
  const SOURCE = 'https://www.routedurhum.com/_functions/destination';
  const JC_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MC_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function poserStyle() {
    if (document.getElementById(TAG + '-css')) return;
    const st = document.createElement('style');
    st.id = TAG + '-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  function enAnglais(t) {
    const k = t.trim();
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(TRAD, k)) return t.replace(k, TRAD[k]);
    return null;
  }
  function traduire(racine) {
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach((n) => { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; });
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
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('/en?') || h.startsWith('//') || h.startsWith('/_')) return;
      a.setAttribute('href', '/en' + h);
    });
  }
  function valide(D) {
    return !!(D && D.ville === VILLE && D.page && D.page.haut && D.page.fete && D.page.ville && D.page.chiffres && D.page.programme && D.page.plan && D.page.venue);
  }

  

  function demarrer(D, racine, EN) {
    const etat = { ville: VILLE };
    const VILLES = { [VILLE]: D.page };
    const MEDIAS = D.medias || {};
    const RDV = (n) => (EN ? (n === 1 ? 'event' : 'events') : 'rendez-vous');

 
const LU = {
  calendarDays: '<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',
  fileDown: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/>',
  fileText: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
   
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  anchor: '<path d="M12 6v16"/><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const IMG = (id, l, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 78) + ',enc_auto/x.jpg';
const jeu = (id, ratio, largeurs, q) => largeurs.map((l) => IMG(id, l, Math.round(l * ratio), q) + ' ' + l + 'w').join(', ');
 
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])).replace(/ ([?!:;])/g, ' $1');
const typo = (s) => esc(s).replace(/\b1er\b/g, '1<sup>er</sup>').replace(/\b(X{0,3}(?:IX|IV|V?I{0,3}))e\b/g, (m, r) => r ? r + '<sup>e</sup>' : m);
 
const titre = (t) => typo(t).replace(/([A-Za-zÀ-ÿ]+-[A-Za-zÀ-ÿ-]+)/g, '<span style="white-space:nowrap">$1</span>');
const $ = (id) => racine.querySelector('[id="' + id + '"]');
racine.style.setProperty('--topo', 'url("' + MEDIAS.topo + '")');

 
function alea(graine) { let a = graine >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const f1 = (n) => Math.round(n * 10) / 10;




function silhouetteRemparts(L, H) {
  const r = alea(1978); const yR = H - 30; const P = []; let x = 0;
  const pt = (a, b) => P.push(f1(a) + ' ' + f1(b));
  const entre = (a, b) => a + r() * (b - a);
  pt(0, H); pt(0, yR);
  const rempart = (w) => { pt(x, yR); x += w; pt(x, yR); };
  const bastion = (w, h) => { pt(x, yR); pt(x + 4, yR - h); pt(x + w - 4, yR - h); pt(x + w, yR); x += w; };
  const souche = (cx, y, h, w) => { pt(cx, y); pt(cx, y - h); pt(cx + w, y - h); pt(cx + w, y); };
  const maison = (haute) => {
    const w = entre(40, 68), haut = yR - (haute ? entre(40, 46) : entre(24, 38)), toit = entre(11, 16), ins = Math.min(w * .2, toit * .8);
    pt(x, haut);
    const g = x + ins, d = x + w - ins, faite = haut - toit;
    pt(g, faite);
    if (r() < .92) souche(g - 1, faite, entre(9, 16), entre(9, 12));
    if (r() < .6) souche(d - 11, faite, entre(8, 14), entre(8, 11));
    pt(d, faite); pt(x + w, haut); x += w;
  };
  const rangee = () => { const n = 3 + Math.floor(r() * 5); for (let k = 0; k < n; k++) maison(r() < .14); };
  const chateau = () => {
    bastion(34, 14); pt(x, yR - 24); x += 36; pt(x, yR - 24);
    pt(x, yR - 56); for (let k = 0; k < 4; k++) { pt(x + k * 18 + 9, yR - 56); pt(x + k * 18 + 9, yR - 61); pt(x + k * 18 + 18, yR - 61); pt(x + k * 18 + 18, yR - 56); }
    x += 72; pt(x, yR - 56); pt(x, yR - 62); pt(x + 8, yR - 76); pt(x + 16, yR - 62); pt(x + 16, yR - 44); x += 16;
    pt(x + 40, yR - 44); x += 40; pt(x, yR - 28); bastion(40, 20);
  };
   
  const cathedrale = () => {
    pt(x, yR - 34); pt(x + 12, yR - 48); x += 116; pt(x, yR - 48);
    const b = x;
    pt(b, yR - 70); pt(b + 5, yR - 70); pt(b + 5, yR - 78); pt(b + 10, yR - 78); pt(b + 10, yR - 70);
    pt(b + 14, yR - 70); pt(b + 23, 0); pt(b + 32, yR - 70);
    pt(b + 36, yR - 70); pt(b + 36, yR - 78); pt(b + 41, yR - 78); pt(b + 41, yR - 70); pt(b + 46, yR - 70);
    x = b + 46; pt(x, yR - 48); x += 84; pt(x - 12, yR - 48); pt(x, yR - 32);
  };
  let chateauFait = false, cathedraleFaite = false;
  while (x < L) {
    if (!chateauFait && x > L * .3) { chateau(); chateauFait = true; rangee(); continue; }
    if (!cathedraleFaite && x > L * .56) { cathedrale(); cathedraleFaite = true; rangee(); continue; }
    rangee();
    if (r() < .75) { rempart(entre(28, 90)); bastion(entre(38, 60), entre(7, 13)); if (r() < .5) rempart(entre(20, 60)); }
  }
  pt(x, yR); pt(x, H);
  return 'M' + P.join('L') + 'Z';
}

 
function haut(V) {
  const p = V.haut.photo;
  return '<img src="' + IMG(p.id, 1600, 700, 80) + '" srcset="' + jeu(p.id, 7 / 16, [800, 1280, 1920, 2400], 80) + '" sizes="100vw" alt="' + esc(p.alt) + '" fetchpriority="high" decoding="async" style="--pos:' + p.pos + (p.posM ? ';--pos-m:' + p.posM : '') + '">' +
    '<div class="trame"><h1 class="titre">' + titre(V.haut.titre) + '</h1></div>';
}
function fete(V) {
  const F = V.fete;
  return '<div class="trame fete-grille"><div class="rv"><h2 class="titre" id="t-fete">' + titre(F.titre) + '</h2><p class="dates"><span>' + typo(F.dates) + '</span></p></div>' +
    '<div class="fete-txt rv">' + F.texte.map((t) => '<p>' + typo(t) + '</p>').join('') + '</div></div>';
}
function diapo(photos, cle, ratio) {
  return '<div class="diapo" data-diapo="' + cle + '"><div class="rail" tabindex="0" role="list" aria-label="Photos">' + photos.map((p) =>
    '<figure role="listitem"><img loading="lazy" decoding="async" src="' + IMG(p.id, 720, Math.round(720 / ratio)) + '" srcset="' + jeu(p.id, 1 / ratio, [480, 720, 1000]) + '" sizes="(max-width:750px) 80vw, 36vw" alt="' + esc(p.alt) + '"' + (p.pos ? ' style="object-position:' + p.pos + '"' : '') + '></figure>').join('') + '</div>' +
    '<div class="trame diapo-nav"><span class="diapo-barre" aria-hidden="true"><i></i></span><span class="diapo-fleches"><button type="button" class="fleche" data-sens="-1" aria-label="Photo précédente">' + SVG('chevronLeft') + '</button><button type="button" class="fleche" data-sens="1" aria-label="Photo suivante">' + SVG('chevronRight') + '</button></span></div></div>';
}
function ville(V) {
  const T = V.ville.texte;
  const rempart = silhouetteRemparts(2400, 130);
  return diapo(V.photos, 'ville', 1.5) +
    '<div class="trame ville-grille"><div class="ville-txt rv"><p>' + typo(T[0]) + '</p>' +
      (T.length > 1 ? '<div class="ville-suite" id="ville-suite">' + T.slice(1).map((t) => '<p>' + typo(t) + '</p>').join('') + '</div><button type="button" class="lire-suite" aria-expanded="false" aria-controls="ville-suite"><span>Lire la suite</span>' + SVG('chevronDown') + '</button>' : '') +
    '</div><p class="chute rv">' + typo(V.ville.chute) + '</p></div>' +
    '<div class="rempart" aria-hidden="true"><svg class="large" viewBox="0 0 2400 130" preserveAspectRatio="xMidYMax slice"><path d="' + rempart + '"/></svg><svg class="etroit" viewBox="1020 0 820 130" preserveAspectRatio="xMidYMax slice"><path d="' + rempart + '"/></svg></div>';
}
function odo(v) {
  return '<span class="odo" aria-hidden="true">' + [...v].map((c) => /\d/.test(c)
    ? '<span class="odo-c" data-d="' + c + '"><span class="odo-r">' + Array.from({ length: 30 }, (_, k) => '<i>' + (k % 10) + '</i>').join('') + '</span></span>'
    : (c === ' ' ? '<span class="odo-s"></span>' : '<span class="odo-t">' + esc(c) + '</span>')).join('') + '</span>';
}
function chiffres(V) {
  const C = V.chiffres;
   
  const largeur = (f) => [...f.v].reduce((s, c) => s + (/\d/.test(c) ? .7 : c === ' ' ? .24 : .3), 0) + (f.u ? .3 + f.u.length * .32 : 0) + .1;
  return '<div class="trame"><h2 class="titre rv" id="t-chiffres">' + titre(C.titre) + '</h2><div class="chiffres-grille" role="list" style="--nb:' + C.liste.length + '">' + C.liste.map((f) =>
    '<div class="chiffre rv" role="listitem"><p class="chiffre-val" style="--n:' + largeur(f).toFixed(2) + '"><span class="sr">' + esc(f.v + (f.u ? ' ' + f.u : '')) + '</span>' + odo(f.v) + (f.u ? '<small aria-hidden="true">' + esc(f.u) + '</small>' : '') + '</p>' +
      '<p class="chiffre-lib">' + esc(f.b) + (f.s ? '<span>' + esc(f.s) + '</span>' : '') + '</p></div>').join('') + '</div></div>';
}
function appel(V) {
  const A = V.appel;
  return '<div class="trame appel-grille"><div class="appel-txt rv"><h2 class="titre" id="t-appel">' + titre(A.titre) + '</h2>' + A.texte.map((t) => '<p>' + typo(t) + '</p>').join('') +
      '<div class="postuler"><h3>' + SVG('mail') + typo(A.postuler) + '</h3><p>' + typo(A.envoi) + '<a href="mailto:' + esc(A.mail) + '">' + esc(A.mail) + '</a></p></div></div>' +
    '<div class="docs rv">' + A.docs.map((d) => '<a class="doc" href="' + esc(d.lien) + '" target="_blank" rel="noopener"><span class="pic">' + SVG('fileText') + '</span><span><b>' + typo(d.b) + '</b>' + (d.s ? '<small>' + typo(d.s) + '</small>' : '') + '<span class="format">PDF</span></span>' + SVG('arrowUpRight') + '</a>').join('') + '</div></div>';
}
 
const JC = EN ? JC_EN : ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const MC = EN ? MC_EN : ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
const MC_POINT = EN ? MC_EN : ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const jourDe = (iso) => { const d = new Date(iso + 'T12:00:00Z'); return { j: d.getUTCDay(), n: d.getUTCDate(), m: d.getUTCMonth() }; };
const dateCourte = (iso) => { const d = jourDe(iso); return JC[d.j] + (EN ? ' ' + d.n : '. ' + (d.n === 1 ? '1<sup>er</sup>' : d.n)) + ' ' + MC_POINT[d.m]; };
const creneau = (a) => a.debut ? esc(a.debut) + (a.fin ? ' – ' + esc(a.fin) : '') : '';
 
const SIGNES = { animation: 'star', ceremonie: 'star', nautique: 'anchor', concert: 'music', spectacle: 'sparkles' };
const cle = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
 
const SURFACES = {
  'saint-malo': { defaut: { fond: '#4F5BA5', trait: '#fff' } },
  guadeloupe: {
    ceremonie: { fond: '#FCF150', trait: '#16355D', puce: '#fff' },
    nautique: { fond: '#479ED7', trait: '#fff' },
    concert: { fond: '#16355D', trait: '#9EF4FD' },
    defaut: { fond: '#16355D', trait: '#9EF4FD' }
  }
};
function tempsFort(a, P) {
  const d = jourDe(a.date), k = cle(a.cat), ville = etat.ville;
  const S = (SURFACES[ville] || SURFACES['saint-malo']);
  const s = S[k] || S.defaut;
  const visuel = a.photo
    ? '<span class="pf-visuel"><img loading="lazy" decoding="async" src="' + IMG(a.photo, 600, 375) + '" srcset="' + jeu(a.photo, 0.625, [400, 600, 900]) + '" sizes="(max-width:750px) 80vw, (max-width:1100px) 46vw, 290px" alt=""><span class="pf-date">' + dateCourte(a.date) + '</span></span>'
    : '<span class="pf-visuel" style="--pf-fond:' + s.fond + ';--pf-trait:' + s.trait + '"><span class="pf-grand" aria-hidden="true">' + String(d.n).padStart(2, '0') + '</span><span class="pf-date"' + (s.puce ? ' style="background:' + s.puce + '"' : '') + '>' + dateCourte(a.date) + '</span></span>';
  return '<li><a class="pf" href="' + esc(P.lienJour + a.date) + '">' + visuel +
    '<span class="pf-corps">' + (a.debut ? '<span class="pf-heure">' + creneau(a) + '</span>' : '') +
      '<b class="pf-titre">' + typo(a.titre) + '</b>' +
      '<span class="pf-meta"><span>' + SVG('mapPin') + esc(a.lieu) + '</span><span>' + SVG(SIGNES[k] || 'star') + esc(a.cat) + '</span></span></span></a></li>';
}
function programme(V) {
  const P = V.programme;
  const tete = '<h2 class="titre" id="t-programme"><span class="pic">' + SVG('calendarDays') + '</span>' + titre(P.titre) + '</h2>';
  if (P.bientot) return '<div class="trame"><div class="prog prog--bientot rv">' + tete + '<span class="btn btn--grise" aria-disabled="true">' + esc(P.bientot) + '</span></div></div>';
  const fetes = new Set(P.journees.map((j) => j.date));
  const jours = '<nav class="prog-jours" aria-label="Les jours du programme"><ol style="--n:' + P.jours.length + '">' + P.jours.map(([iso, n]) => {
    const d = jourDe(iso), j = P.journees.find((x) => x.date === iso);
    return '<li><a href="' + esc(P.lienJour + iso) + '" aria-label="' + esc(JC[d.j] + ' ' + d.n + ' ' + MC[d.m] + ', ' + n + ' ' + RDV(n) + (j ? ', ' + j.titre : '')) + '">' +
      '<span class="pj-j">' + JC[d.j] + '</span><b>' + String(d.n).padStart(2, '0') + '</b><span class="pj-m">' + MC[d.m] + '</span>' +
      '<span class="pj-n"><b>' + n + '</b> <span>' + RDV(n) + '</span></span>' + (fetes.has(iso) ? '<i class="pj-point"></i>' : '') + '</a></li>';
  }).join('') + '</ol></nav>';
  const journees = P.journees.length ? '<ul class="prog-journees">' + P.journees.map((j) => '<li><i aria-hidden="true"></i><span><b>' + dateCourte(j.date) + '</b> ' + typo(j.titre) + '</span></li>').join('') + '</ul>' : '';
  return '<div class="trame"><div class="prog rv">' + tete +
    '<a class="btn btn--marine" href="' + esc(P.lien) + '">' + esc(P.bouton) + SVG('arrowRight', 'ico--glisse') + '</a>' +
    '<p class="prog-chapo">' + typo(P.chapo) + '</p>' + jours + journees +
    '<ul class="prog-forts">' + P.forts.map((a) => tempsFort(a, P)).join('') + '</ul></div></div>';
}
function plan(V) {
  const P = V.plan, I = P.interactif;
  const vignette = P.image ? P.image.id : I.image;
  const carte = '<div class="cta-bientot' + (P.image ? '' : ' cta-bientot--seul') + '" aria-disabled="true"><img loading="lazy" decoding="async" src="' + IMG(vignette, 640, 300, 70) + '" alt=""><div class="cta-txt"><span class="cta-ico">' + SVG('map') + '</span><h3>' + esc(I.titre) + '</h3><span class="pastille-bientot">' + esc(I.bientot) + '</span></div></div>';
  if (!P.image) return '<div class="trame"><div class="plan-titre rv"><h2 class="titre" id="t-plan">' + titre(P.titre) + '</h2></div><div class="rv" style="margin-top:22px">' + carte + '</div></div>';
  return '<div class="trame plan-grille"><div class="plan-titre rv"><h2 class="titre" id="t-plan">' + titre(P.titre) + '</h2></div>' +
    '<figure class="plan-fig rv"><a href="' + esc(P.pdf.lien) + '" target="_blank" rel="noopener" aria-label="' + esc(P.pdf.texte) + '"><img loading="lazy" decoding="async" src="' + IMG(P.image.id, 1400, 1010, 82) + '" srcset="' + jeu(P.image.id, 2463 / 3415, [800, 1100, 1400, 1800], 82) + '" sizes="(max-width:750px) 100vw, 62vw" alt="' + esc(P.image.alt) + '"></a></figure>' +
    '<div class="plan-actions rv"><a class="btn btn--marine" href="' + esc(P.pdf.lien) + '" target="_blank" rel="noopener">' + esc(P.pdf.texte) + SVG('fileDown') + '</a>' + carte + '</div></div>';
}
function venue(V) {
  const E = V.venue, B = E.bouton;
  return '<div class="venue-arcs" aria-hidden="true"><img src="' + (MEDIAS.arcs[etat.ville] || MEDIAS.arcs['saint-malo']) + '" alt="" loading="lazy" decoding="async"></div>' +
    '<div class="trame venue-grille"><figure class="tymal"><img src="' + MEDIAS.tymal + '" width="1185" height="1118" alt="Tymal, la mascotte de la course, en marinière, un drapeau de la Route du Rhum à la main" loading="lazy" decoding="async"></figure>' +
    '<div class="venue-txt rv"><h2 class="titre" id="t-venue">' + titre(E.titre) + '</h2>' + E.texte.map((t) => '<p>' + typo(t) + '</p>').join('') +
      (E.liste.length ? '<ul>' + E.liste.map((t) => '<li>' + typo(t) + '</li>').join('') + '</ul>' : '') +
      (B.lien ? '<a class="btn btn--marine" href="' + esc(B.lien) + '">' + esc(B.texte) + SVG('arrowRight', 'ico--glisse') + '</a>' : '<span class="btn btn--grise" aria-disabled="true">' + esc(B.texte) + '<span class="pastille-bientot" style="background:rgba(22,53,93,.08);border-color:rgba(22,53,93,.2);color:inherit">' + esc(B.bientot) + '</span></span>') +
    '</div></div>';
}
function quefaire(V) {
  const Q = V.quefaire;
  return '<div class="trame qf-tete rv"><h2 class="titre" id="t-que-faire">' + titre(Q.titre) + '</h2><a class="btn btn--contour" href="' + esc(Q.bouton.lien) + '" target="_blank" rel="noopener">' + esc(Q.bouton.texte) + SVG('arrowUpRight') + '</a></div>' +
    diapo(Q.ordre.map((k) => V.photos[k]), 'que-faire', 4 / 3);
}

 
function brancherDiapo(d) {
  const rail = d.querySelector('.rail'), barre = d.querySelector('.diapo-barre i'), [av, ap] = d.querySelectorAll('.fleche');
  const maj = () => {
    const max = rail.scrollWidth - rail.clientWidth, p = max > 0 ? rail.scrollLeft / max : 0, vu = Math.min(1, rail.clientWidth / rail.scrollWidth);
    barre.style.setProperty('--vu', (vu * 100).toFixed(1) + '%');
    barre.style.setProperty('--x', ((1 / vu - 1) * p * 100).toFixed(1) + '%');
    av.disabled = rail.scrollLeft < 4; ap.disabled = rail.scrollLeft > max - 4;
  };
  const pas = () => { const f = rail.querySelector('figure'); return f ? f.getBoundingClientRect().width + 16 : 300; };
  [av, ap].forEach((b) => b.addEventListener('click', () => rail.scrollBy({ left: +b.dataset.sens * pas(), behavior: reduit ? 'auto' : 'smooth' })));
  rail.addEventListener('scroll', () => requestAnimationFrame(maj), { passive: true });
  addEventListener('resize', maj);
  maj();
}

 
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
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
let vuChiffres = null;
function brancherChiffres() {
  ajusterRouleaux();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajusterRouleaux);
  const cartes = [...racine.querySelectorAll('.chiffre')];
  if (vuChiffres) vuChiffres.disconnect();
  if (!('IntersectionObserver' in window)) { cartes.forEach((c) => rouler(c, 0)); return; }
  vuChiffres = new IntersectionObserver((es) => es.forEach((e) => { if (!e.isIntersecting) return; vuChiffres.unobserve(e.target); rouler(e.target, cartes.indexOf(e.target) * 0.18); }), { threshold: 0.5 });
  cartes.forEach((c) => {
    vuChiffres.observe(c);
    c.addEventListener('mouseenter', () => { if (!c.dataset.encours) { c.dataset.encours = '1'; rouler(c, 0); setTimeout(() => { delete c.dataset.encours; }, 2400); } });
  });
}

 
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  if (reduit || !('IntersectionObserver' in window)) { racine.querySelectorAll('.rv').forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  racine.querySelectorAll('.rv').forEach((e) => vus.observe(e));
}

function monter(cle) {
  const V = VILLES[cle] || VILLES['saint-malo'];
  etat.ville = VILLES[cle] ? cle : 'saint-malo';
  
  $('haut').innerHTML = haut(V);
  $('fete').innerHTML = fete(V);
  $('ville').innerHTML = ville(V);
  $('chiffres').innerHTML = chiffres(V);
  $('appel-a-projet').hidden = !V.appel;
  $('appel-a-projet').innerHTML = V.appel ? appel(V) : '';
  $('programme').innerHTML = programme(V);
  $('programme').style.paddingTop = V.appel ? '' : 'clamp(40px,6.4vh,72px)';
  $('programme').querySelector('.prog').style.borderTop = V.appel ? '' : '0';
  $('programme').querySelector('.prog').style.paddingTop = V.appel ? '' : '0';
  $('plan').innerHTML = plan(V);
  $('venue').innerHTML = venue(V);
  $('que-faire').hidden = !V.quefaire;
  $('que-faire').innerHTML = V.quefaire ? quefaire(V) : '';
  const b = racine.querySelector('.lire-suite');
  if (b) b.addEventListener('click', () => {
    const o = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(o)); $('ville-suite').classList.toggle('ouverte', o);
    b.firstChild.textContent = o ? 'Refermer' : 'Lire la suite';
  });
  racine.querySelectorAll('[data-diapo]').forEach(brancherDiapo);
  racine.querySelectorAll('.mq button').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.ville === etat.ville)));
  brancherChiffres(); reveler();
}

    monter(VILLE);
     
    return function (Pn) {
      VILLES[VILLE].programme = Pn;
      const V = VILLES[VILLE];
      const s = $('programme');
      s.innerHTML = programme(V);
      const prog = s.querySelector('.prog');
      if (prog && !V.appel) { prog.style.borderTop = '0'; prog.style.paddingTop = '0'; }
      reveler();
    };
  }

  class RdrGuadeloupe extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() {
      clearTimeout(this._minuteur); this._minuteur = null;
      if (this._obs) this._obs.disconnect();
      if (this._obsProg) { this._obsProg.disconnect(); this._obsProg = null; }
    }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || (document.documentElement.getAttribute('lang') || '') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    _tenter(jeu) {
      if (!this.isConnected) return;
      let D = jeu || null;
      if (!D) {
        const brut = this.getAttribute('jeu');
        if (brut && brut === this._brut) return;
        try { D = JSON.parse(brut || 'null'); } catch (e) { D = null; }
        if (valide(D)) this._brut = brut;
      }
      if (!valide(D)) {
        if (!this._monte && !this.firstChild) this.innerHTML = "<div class=\"rgd-attente\" aria-hidden=\"true\"><div class=\"rgd-sq-haut\"><div class=\"rgd-sq-trame\"><i class=\"rgd-sq-l rgd-sq-k\"></i><i class=\"rgd-sq-l rgd-sq-t\"></i><i class=\"rgd-sq-l rgd-sq-t rgd-sq-t2\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p1\"></i><i class=\"rgd-sq-l rgd-sq-p\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p3\"></i></div></div><div class=\"rgd-sq-trame rgd-sq-sec\"><i class=\"rgd-sq-l rgd-sq-k\"></i><i class=\"rgd-sq-l rgd-sq-t\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p1\"></i><i class=\"rgd-sq-l rgd-sq-p\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p3\"></i></div><div class=\"rgd-sq-trame rgd-sq-cartes\"><i class=\"rgd-sq-c\"></i><i class=\"rgd-sq-c\"></i><i class=\"rgd-sq-c\"></i></div><div class=\"rgd-sq-trame rgd-sq-sec\"><i class=\"rgd-sq-l rgd-sq-k\"></i><i class=\"rgd-sq-l rgd-sq-t\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p1\"></i><i class=\"rgd-sq-l rgd-sq-p\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p3\"></i></div></div>";
        return;
      }
      if (this._monte) { this._rafraichir(D); return; }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      const en = String(D.lang || this._lang()).slice(0, 2) === 'en';
      this._langue = en ? 'en' : 'fr';
      this.innerHTML = '<div class="rgd-page">' + PAGE + '</div>';
      const racine = this.firstChild;
      if (en) { traduire(this); prefixerLiens(this); }
      try { this._majProgramme = demarrer(D, racine, en); } catch (e) { console.error('[' + TAG + ']', e); }
      this._cleProgramme = JSON.stringify(D.page.programme);
      if (en) {
        traduire(this); prefixerLiens(this);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (m.type === 'characterData') { const v = enAnglais(m.target.nodeValue); if (v != null && v !== m.target.nodeValue) m.target.nodeValue = v; return; }
          m.addedNodes.forEach((n) => { if (n.nodeType === 1) { traduire(n); prefixerLiens(n); } else if (n.nodeType === 3) { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; } });
        }));
        this._obs.observe(this, { childList: true, subtree: true, characterData: true });
      }
      this._allerAncre();
    }
    


    _rafraichir(D) {
      if (String(D.lang || 'fr').slice(0, 2) !== this._langue || !this._majProgramme) return;
      const cle = JSON.stringify(D.page.programme);
      if (cle === this._cleProgramme) return;
      this._cleProgramme = cle;
      this._progEnAttente = D.page.programme;
      const faire = () => {
        const Pn = this._progEnAttente; this._progEnAttente = null;
        if (!Pn) return;
        try { this._majProgramme(Pn); } catch (e) { console.error('[' + TAG + ']', e); }
      };
      const sec = this.querySelector('[id="programme"]');
      if (!sec || typeof IntersectionObserver === 'undefined') { faire(); return; }
      if (this._obsProg) return;
      this._obsProg = new IntersectionObserver((es) => {
        if (es.some((e) => e.isIntersecting)) return;
        this._obsProg.disconnect(); this._obsProg = null;
        faire();
      });
      this._obsProg.observe(sec);
    }
    

    _allerAncre() {
      let h = '';
      try { h = decodeURIComponent((location.hash || '').slice(1)); } catch (e) { h = ''; }
      if (!h || /["\\]/.test(h)) return;
      const cible = this.querySelector('[id="' + h + '"]');
      if (cible) setTimeout(() => cible.scrollIntoView({ block: 'start' }), 80);
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?ville=' + encodeURIComponent(VILLE) + '&lang=' + this._lang();
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (valide(j)) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rgd-vide"><h3>' + (en ? 'This page will be back in a moment' : 'La page revient dans un instant') + '</h3><p>' + (en ? 'Its content could not be loaded.' : 'Son contenu n\u2019a pas pu être chargé.') + '</p><button type="button">' + (en ? 'Try again' : 'Réessayer') + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = "<div class=\"rgd-attente\" aria-hidden=\"true\"><div class=\"rgd-sq-haut\"><div class=\"rgd-sq-trame\"><i class=\"rgd-sq-l rgd-sq-k\"></i><i class=\"rgd-sq-l rgd-sq-t\"></i><i class=\"rgd-sq-l rgd-sq-t rgd-sq-t2\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p1\"></i><i class=\"rgd-sq-l rgd-sq-p\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p3\"></i></div></div><div class=\"rgd-sq-trame rgd-sq-sec\"><i class=\"rgd-sq-l rgd-sq-k\"></i><i class=\"rgd-sq-l rgd-sq-t\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p1\"></i><i class=\"rgd-sq-l rgd-sq-p\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p3\"></i></div><div class=\"rgd-sq-trame rgd-sq-cartes\"><i class=\"rgd-sq-c\"></i><i class=\"rgd-sq-c\"></i><i class=\"rgd-sq-c\"></i></div><div class=\"rgd-sq-trame rgd-sq-sec\"><i class=\"rgd-sq-l rgd-sq-k\"></i><i class=\"rgd-sq-l rgd-sq-t\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p1\"></i><i class=\"rgd-sq-l rgd-sq-p\"></i><i class=\"rgd-sq-l rgd-sq-p rgd-sq-p3\"></i></div></div>"; this._chercher(); });
    }
  }
  customElements.define(TAG, RdrGuadeloupe);
})();
})();
