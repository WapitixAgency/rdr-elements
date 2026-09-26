/* rdr-elements littoral | source route-du-rhum 273aa07 | rdr-littoral.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["littoral"]="273aa07";performance.mark("rdr-elements:littoral")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-littoral")) return;
  const CSS = "rdr-littoral{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-littoral .rlt-page{display:block}\nrdr-littoral .rlt-calme *,rdr-littoral .rlt-calme *::before,rdr-littoral .rlt-calme *::after{transition:none !important}\nrdr-littoral .rlt-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-littoral .rlt-sq-haut{display:flex;align-items:center;min-height:clamp(560px,calc(100svh - 175px),900px);background:#00676E}\nrdr-littoral .rlt-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-littoral .rlt-sq-l,rdr-littoral .rlt-sq-c{position:relative;display:block;overflow:hidden}\nrdr-littoral .rlt-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-littoral .rlt-sq-k{width:120px;height:11px}\nrdr-littoral .rlt-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-littoral .rlt-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-littoral .rlt-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-littoral .rlt-sq-p1{margin-top:30px}\nrdr-littoral .rlt-sq-p3{width:min(380px,62%)}\nrdr-littoral .rlt-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-littoral .rlt-sq-sec .rlt-sq-l{background:rgba(14,17,29,.08)}\nrdr-littoral .rlt-sq-sec .rlt-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-littoral .rlt-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-littoral .rlt-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-littoral .rlt-sq-l::after,rdr-littoral .rlt-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rlt-sq-luire 1.6s ease-in-out infinite}\nrdr-littoral .rlt-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-littoral .rlt-sq-sec .rlt-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-littoral .rlt-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rlt-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-littoral .rlt-sq-cartes{grid-template-columns:1fr}rdr-littoral .rlt-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-littoral .rlt-sq-l::after,rdr-littoral .rlt-sq-c::after{animation:none;display:none}}\nrdr-littoral .rlt-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-littoral .rlt-vide h3{margin:0;font-size:22px}\nrdr-littoral .rlt-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-littoral .rlt-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-littoral{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --marine2:#16355D; --teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.8);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;--contour:'VarienOutline','Varien',sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px); --entete:175px;--colle:56px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;--photo:32px 4px 20px 4px; --photo-h:clamp(210px,34vh,440px); --cote:clamp(84px,10vw,150px); --air:1.5; --pad-h:calc(clamp(48px,8vh,92px) * var(--air));--pad-b:calc(clamp(56px,9vh,100px) * var(--air)); --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-littoral{--air:1.3;--entete:120px;--colle:60px;--marge:20px;--photo-h:clamp(176px,50vw,232px);--cote:clamp(72px,21vw,92px);--pad-h:calc(44px * var(--air));--pad-b:calc(52px * var(--air))}\n}\nrdr-littoral *{box-sizing:border-box}\nrdr-littoral{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nrdr-littoral img{display:block;max-width:100%}\nrdr-littoral a{color:inherit}\nrdr-littoral h1,rdr-littoral h2,rdr-littoral h3,rdr-littoral p,rdr-littoral figure,rdr-littoral ol,rdr-littoral ul{margin:0}\nrdr-littoral ol,rdr-littoral ul{padding:0;list-style:none}\nrdr-littoral button{font:inherit;color:inherit}\nrdr-littoral [hidden]{display:none !important}\nrdr-littoral .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-littoral .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-littoral .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-littoral .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-littoral .nw{white-space:nowrap}\nrdr-littoral .rlt-page>header,rdr-littoral .rlt-page>section{scroll-margin-top:var(--colle)}\nrdr-littoral h2[tabindex=\"-1\"]:focus{outline:none}\nrdr-littoral .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-littoral .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-littoral .btn:hover .ico--glisse{transform:translateX(3px)}}\nrdr-littoral .btn:focus-visible{outline:3px solid var(--jaune);outline-offset:3px}\nrdr-littoral .btn--marine{background:var(--marine);border-color:var(--marine);color:#fff}@media (hover:hover) and (pointer:fine){rdr-littoral .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-littoral .btn--contour{color:var(--marine)}@media (hover:hover) and (pointer:fine){rdr-littoral .btn--contour:hover{background:var(--marine);color:#fff}}\nrdr-littoral .btn--blanc{color:#fff}@media (hover:hover) and (pointer:fine){rdr-littoral .btn--blanc:hover{background:#fff;border-color:#fff;color:var(--vert1)}}\nrdr-littoral .surtitre{display:flex;align-items:center;gap:12px;font:800 12.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--vert1)}\nrdr-littoral .surtitre::before{content:'';flex:none;width:28px;height:5px;background:currentColor;transform:skewX(-20deg)}\nrdr-littoral .sec-titre{margin-top:12px;font-size:clamp(30px,min(3.4vw,6vh),48px);line-height:1.1;color:var(--marine2);text-wrap:balance}\nrdr-littoral .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(26px,5vh,56px) 0 calc(var(--photo-h) / 2 + clamp(26px,4vh,40px))}\nrdr-littoral .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-littoral .haut .surtitre{color:var(--jaune)}\nrdr-littoral .haut h1{margin-top:clamp(10px,1.6vh,16px);font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-littoral .haut-chapo{margin-top:clamp(12px,2vh,20px);max-width:64ch;font-size:clamp(15.5px,1.15vw,17px);line-height:1.68;font-weight:500;color:rgba(255,255,255,.94);text-wrap:pretty}\nrdr-littoral .haut-suite{position:relative;display:flow-root;background:var(--fond-suivant,#fff)}\nrdr-littoral .haut-photo{position:relative;z-index:2;height:var(--photo-h);margin-top:calc(var(--photo-h) / -2);border-radius:var(--photo);overflow:hidden;background:#3A4A4F;box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-littoral .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 58%;transform:scale(1.05);animation:rlt-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rlt-zoom{to{transform:scale(1)}}\nrdr-littoral .pratiques{--carte-fond:var(--teinte);position:relative;background:#fff;padding:calc(clamp(40px,6.4vh,72px) * var(--air)) 0 var(--pad-b)}\nrdr-littoral .pratiques.sur-teinte{--carte-fond:#fff;background:var(--teinte);padding-top:var(--pad-h)}\nrdr-littoral .pr-grille{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,2vw,28px);margin-top:calc(clamp(22px,3.6vh,36px) * var(--air))}\nrdr-littoral .pr-carte{padding:clamp(20px,2.4vw,32px);border-radius:var(--carte);background:var(--carte-fond)}\nrdr-littoral .pr-tete{display:flex;align-items:center;gap:14px}\nrdr-littoral .pr-pic{display:grid;place-items:center;flex:none;width:48px;height:48px;border-radius:14px 4px 14px 4px;background:var(--vert1);color:#fff}\nrdr-littoral .pr-pic .ico{width:24px;height:24px}\nrdr-littoral .pr-carte h3{font:800 15px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--vert1)}\nrdr-littoral .pr-liste{margin-top:16px}\nrdr-littoral .pr-liste li{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;align-items:start;padding:14px 0;border-top:1px solid var(--filet);font-size:15.5px;line-height:1.6;color:var(--encre);text-wrap:pretty}\nrdr-littoral .pr-liste li:first-child{border-top:0;padding-top:6px}\nrdr-littoral .pr-n{display:grid;place-items:center;width:34px;height:34px;border-radius:10px 3px 10px 3px;background:#fff;box-shadow:inset 0 0 0 2px var(--vert1);color:var(--vert1);font:italic 400 17px/1 var(--titre)}\nrdr-littoral .pr-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:calc(clamp(22px,3.6vh,34px) * var(--air))}\nrdr-littoral .natura{position:relative;background:var(--teinte);padding:var(--pad-h) 0 var(--pad-b)}\nrdr-littoral .na-grille{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:clamp(26px,5vw,84px);align-items:center}\nrdr-littoral .na-texte p{margin-top:16px;max-width:66ch;font-size:clamp(15.5px,1.12vw,16.5px);line-height:1.75;color:var(--encre2);text-wrap:pretty}\nrdr-littoral .na-texte>p:first-of-type{font-weight:600;color:var(--encre)}\nrdr-littoral .na-photo{position:relative;aspect-ratio:5/4;border-radius:var(--carte);overflow:hidden;background:#9DB9B6;border:6px solid #fff;box-shadow:0 30px 50px -28px rgba(25,29,49,.55);transform:rotate(-1.2deg)}\nrdr-littoral .na-photo img{width:100%;height:100%;object-fit:cover;object-position:32% 50%}\nrdr-littoral .lire-suite{display:none;align-items:center;gap:8px;min-height:44px;margin-top:6px;padding:0 4px 0 0;border:0;border-radius:var(--angle-p);background:none;color:var(--vert1);font:800 11.5px var(--police);letter-spacing:.14em;text-transform:uppercase;cursor:pointer}\nrdr-littoral .lire-suite .ico{width:14px;height:14px;stroke-width:2.6;transition:transform .3s}\nrdr-littoral .lire-suite[aria-expanded=\"true\"] .ico{transform:rotate(180deg)}\nrdr-littoral .pourquoi{position:relative;background:#fff;padding:var(--pad-h) 0 var(--pad-b)}\nrdr-littoral .pq-grille{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.96fr);gap:clamp(26px,5vw,84px);align-items:center}\nrdr-littoral .pq-texte p{margin-top:18px;max-width:62ch;font-size:clamp(15.5px,1.12vw,16.5px);line-height:1.75;color:var(--encre2);text-wrap:pretty}\nrdr-littoral .pq-carte{position:relative;padding:clamp(26px,3vw,42px);border-radius:var(--carte);background:var(--vert1);color:#fff;box-shadow:0 30px 50px -32px rgba(0,103,110,.75)}\nrdr-littoral .pq-carte .surtitre{color:var(--jaune)}\nrdr-littoral .pq-citation{margin-top:18px;font:italic 800 clamp(21px,1.9vw,27px)/1.3 var(--police);color:#fff;text-wrap:balance}\nrdr-littoral .pq-citation .gm{color:var(--jaune)}\nrdr-littoral .pq-carte .pq-t{margin-top:12px;font-size:15.5px;line-height:1.72;color:rgba(255,255,255,.93);text-wrap:pretty}\nrdr-littoral .pq-chute{position:relative;margin-top:18px;padding:4px 0 4px 22px;font-style:italic;font-weight:600;font-size:16px;line-height:1.6;color:#fff;text-wrap:pretty}\nrdr-littoral .pq-chute::before{content:'';position:absolute;left:0;top:6px;bottom:6px;width:5px;background:var(--jaune);transform:skewX(-10deg)}\nrdr-littoral .pq-carte .btn{margin-top:24px}\nrdr-littoral .zones{position:relative;background:var(--marine);color:#fff;padding:var(--pad-h) 0 calc(var(--cote) + clamp(26px,5vh,56px) * var(--air))}\nrdr-littoral .zones .surtitre{color:var(--vert2)}\nrdr-littoral .zones .sec-titre{color:#fff}\nrdr-littoral .zones-carte{position:relative;width:min(100%,calc((100svh - var(--colle) - 56px) * 16 / 9));margin:calc(clamp(22px,3.6vh,36px) * var(--air)) auto 0;border-radius:var(--carte);overflow:hidden;background:#2F6E7E;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 34px 60px -34px rgba(0,0,0,.75),0 0 70px -20px rgba(65,153,146,.6)}\nrdr-littoral .zones-cadre{position:relative}\nrdr-littoral .zones-plan{position:relative;aspect-ratio:16/9}\nrdr-littoral .zones-plan img{width:100%;height:100%;object-fit:cover}\nrdr-littoral .zones-points{position:absolute;inset:0;pointer-events:none}\nrdr-littoral .zones-aide{display:none}\nrdr-littoral .cote{position:absolute;left:0;right:0;bottom:-1px;height:var(--cote);line-height:0;pointer-events:none}\nrdr-littoral .cote svg{display:block;width:100%;height:100%;fill:var(--fond-suivant,#fff)}\nrdr-littoral .cote .etroit{display:none}\nrdr-littoral .mesures{position:relative;background:#fff;padding:calc(clamp(34px,5.4vh,60px) * var(--air)) 0 var(--pad-b)}\nrdr-littoral .ms-tete{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(24px,5vw,84px);align-items:end}\nrdr-littoral .ms-intro{font-size:clamp(15.5px,1.12vw,16.5px);line-height:1.75;color:var(--encre2);text-wrap:pretty}\nrdr-littoral .ms-liste{--ms-n:clamp(52px,4.6vw,68px);margin-top:calc(clamp(26px,4.4vh,44px) * var(--air));padding:4px clamp(18px,2.4vw,34px);border-radius:var(--carte);background:#fff;border:1px solid var(--filet);box-shadow:0 26px 50px -38px rgba(25,29,49,.55)}\nrdr-littoral .ms+.ms{border-top:1px solid var(--filet)}\nrdr-littoral .ms-bouton{display:grid;grid-template-columns:var(--ms-n) minmax(0,1fr) auto;align-items:center;column-gap:clamp(12px,1.6vw,20px);width:100%;min-height:84px;padding:16px 0;border:0;background:none;text-align:left;cursor:pointer}\nrdr-littoral .ms-n{font:italic 400 clamp(32px,2.8vw,42px)/1 var(--contour);color:var(--vert1);transition:transform .3s var(--ease)}\nrdr-littoral .ms.ouvert .ms-n{font-family:var(--titre)}\nrdr-littoral .ms-nom{display:block;font:italic 400 clamp(22px,1.9vw,28px)/1.08 var(--titre);text-transform:uppercase;color:var(--marine2)}\nrdr-littoral .ms-chapo{display:block;margin-top:6px;font:600 clamp(15px,1.08vw,16px)/1.5 var(--police);color:var(--encre);text-wrap:pretty}\nrdr-littoral .ms-signe{position:relative;display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--angle-p);border:2px solid var(--vert1);color:var(--vert1);transition:background-color .2s,border-color .2s,color .2s}\nrdr-littoral .ms-signe::before,rdr-littoral .ms-signe::after{content:'';position:absolute;left:50%;top:50%;background:currentColor;border-radius:1px}\nrdr-littoral .ms-signe::before{width:14px;height:2.4px;transform:translate(-50%,-50%)}\nrdr-littoral .ms-signe::after{width:2.4px;height:14px;transform:translate(-50%,-50%);transition:transform .25s var(--ease)}\nrdr-littoral .ms.ouvert .ms-signe{background:var(--vert1);color:#fff}\nrdr-littoral .ms.ouvert .ms-signe::after{transform:translate(-50%,-50%) rotate(90deg)}\n@media (hover:hover) and (pointer:fine){\nrdr-littoral .ms-bouton:hover .ms-nom{text-decoration:underline;text-decoration-color:var(--vert1);text-decoration-thickness:3px;text-underline-offset:6px}\nrdr-littoral .ms-bouton:hover .ms-n{transform:translateY(-2px) rotate(-3deg)}\n}\nrdr-littoral .ms-bouton:focus-visible{outline:3px solid var(--marine);outline-offset:2px;border-radius:var(--angle-p)}\nrdr-littoral .ms-tiroir{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s cubic-bezier(.4,0,.2,1)}\nrdr-littoral .ms.ouvert .ms-tiroir{grid-template-rows:1fr}\nrdr-littoral .ms-dedans{min-height:0;overflow:hidden;visibility:hidden;transition:visibility 0s linear .4s}\nrdr-littoral .ms.ouvert .ms-dedans{visibility:visible;transition:visibility 0s}\nrdr-littoral .ms-corps{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.72fr);gap:clamp(20px,3vw,44px);align-items:start;padding:0 0 26px calc(var(--ms-n) + clamp(12px,1.6vw,20px))}\nrdr-littoral .ms-corps p{font-size:clamp(15.5px,1.12vw,16.5px);line-height:1.75;color:var(--encre2);text-wrap:pretty}\nrdr-littoral .ms-photo{aspect-ratio:3/2;border-radius:var(--carte);overflow:hidden;background:var(--teinte)}\nrdr-littoral .ms-photo img{width:100%;height:100%;object-fit:cover}\nrdr-littoral .benevolat{position:relative;background:var(--jaune);color:var(--encre);padding:calc(clamp(48px,8vh,88px) * var(--air)) 0}\nrdr-littoral .bv-grille{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:clamp(24px,5vw,84px);align-items:center}\nrdr-littoral .benevolat .sec-titre{margin-top:0;line-height:1.17}\nrdr-littoral .bv-texte p{margin-top:16px;max-width:58ch;font-size:clamp(15.5px,1.15vw,17px);line-height:1.72;font-weight:500;text-wrap:pretty}\nrdr-littoral .fiches{display:flex;flex-direction:column;gap:12px}\nrdr-littoral .fiche{display:flex;align-items:center;gap:14px;min-height:76px;padding:14px 18px;border-radius:16px 4px 16px 4px;background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 20px 34px -24px rgba(25,29,49,.6);transition:transform .25s var(--ease),box-shadow .25s}@media (hover:hover) and (pointer:fine){rdr-littoral .fiche:hover{transform:translateY(-3px);box-shadow:0 26px 40px -24px rgba(25,29,49,.7)}}\nrdr-littoral .fiche:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-littoral .fiche .pic{flex:none;display:grid;place-items:center;width:46px;height:46px;border-radius:12px 3px 12px 3px;background:var(--vert1);color:#fff}\nrdr-littoral .fiche .pic .ico{width:22px;height:22px}\nrdr-littoral .fiche b{display:block;font-size:15px;font-weight:800;line-height:1.3}\nrdr-littoral .fiche small{display:inline-block;margin-top:2px;font-size:14px;line-height:1.4;font-weight:600;color:var(--encre2)}\nrdr-littoral .fiche .format{display:inline-block;margin-left:8px;padding:1px 7px;border-radius:5px;background:rgba(25,29,49,.08);font:800 10.5px/1.6 var(--police);letter-spacing:.1em;color:var(--encre2);vertical-align:1px}\nrdr-littoral .fiche>.ico{flex:none;margin-left:auto;width:20px;height:20px;color:var(--vert1);transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-littoral .fiche:hover>.ico{transform:translateY(2px)}}\nrdr-littoral .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-littoral .rv.vu{opacity:1;transform:none}\nrdr-littoral .rv.net{transition:none}\n@media (max-height:820px) and (min-width:751px){\nrdr-littoral .haut-chapo{font-size:15.5px;line-height:1.62}\nrdr-littoral .na-texte p,rdr-littoral .pq-texte p,rdr-littoral .ms-corps p,rdr-littoral .ms-intro{font-size:15.5px;line-height:1.68}\nrdr-littoral .pr-liste li{font-size:15px;padding:12px 0}\nrdr-littoral .ms-bouton{min-height:74px;padding:13px 0}\nrdr-littoral .pq-citation{font-size:clamp(20px,1.7vw,24px)}\n}\n@media (max-width:1100px){\nrdr-littoral .ms-corps{grid-template-columns:minmax(0,1fr) minmax(0,.9fr)}\n}\n@media (max-width:900px){\nrdr-littoral .ms-tete{grid-template-columns:1fr;gap:14px}\n}\n@media (max-width:750px){\nrdr-littoral{font-size:15px}\nrdr-littoral .haut{padding-top:26px}\nrdr-littoral .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-littoral .haut h1{font-size:clamp(34px,10.4vw,44px)}\nrdr-littoral .haut-chapo{font-size:15px;line-height:1.62}\nrdr-littoral .haut-photo{border-radius:22px 3px 14px 3px}\nrdr-littoral .sec-titre{font-size:clamp(27px,8.2vw,34px)}\nrdr-littoral .pratiques{padding-top:calc(34px * var(--air))}\nrdr-littoral .pr-grille{grid-template-columns:1fr;gap:12px}\nrdr-littoral .pr-carte{padding:18px 16px}\nrdr-littoral .pr-liste li{grid-template-columns:32px minmax(0,1fr);gap:12px;font-size:15px}\nrdr-littoral .pr-n{width:32px;height:32px;font-size:16px}\nrdr-littoral .pr-actions{flex-direction:column}\nrdr-littoral .pr-actions .btn,rdr-littoral .pq-carte .btn{width:100%;justify-content:space-between}\nrdr-littoral .na-grille,rdr-littoral .pq-grille,rdr-littoral .bv-grille{grid-template-columns:1fr;gap:26px}\nrdr-littoral .na-texte p,rdr-littoral .pq-texte p,rdr-littoral .ms-corps p,rdr-littoral .ms-intro,rdr-littoral .bv-texte p{font-size:15px;line-height:1.7}\nrdr-littoral .na-photo{aspect-ratio:16/10;border-width:4px;transform:rotate(-.8deg)}\nrdr-littoral .na-suite{display:none}\nrdr-littoral .na-suite.ouverte{display:block}\nrdr-littoral .lire-suite{display:inline-flex}\nrdr-littoral .pq-carte{padding:24px 20px}\nrdr-littoral .pq-citation{font-size:20px}\nrdr-littoral .pq-chute{font-size:15.5px}\nrdr-littoral .zones-carte{width:auto;margin-left:calc(-1 * var(--marge));margin-right:calc(-1 * var(--marge));border-radius:0}\nrdr-littoral .zones-cadre{--zh:clamp(300px,112vw,460px);overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none}\nrdr-littoral .zones-cadre::-webkit-scrollbar{display:none}\nrdr-littoral .zones-plan{width:calc(var(--zh) * 16 / 9);height:var(--zh);aspect-ratio:auto}\nrdr-littoral .zones-aide{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px;font:600 13px/1.4 var(--police);color:rgba(255,255,255,.78)}\nrdr-littoral .zones-aide>span{display:inline-flex;align-items:center;gap:8px}\nrdr-littoral .zones-aide .ico{width:18px;height:18px}\nrdr-littoral .zones-aide a{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 12px;border:1.5px solid rgba(255,255,255,.4);border-radius:var(--angle-p);color:#fff;font-weight:700;text-decoration:none;white-space:nowrap}\nrdr-littoral .cote .large{display:none}\nrdr-littoral .cote .etroit{display:block}\nrdr-littoral .ms-liste{--ms-n:40px;margin-top:calc(22px * var(--air));padding:2px 14px}\nrdr-littoral .ms-bouton{column-gap:10px;min-height:72px;padding:14px 0;align-items:start}\nrdr-littoral .ms-n{font-size:30px;padding-top:2px}\nrdr-littoral .ms-nom{font-size:21px}\nrdr-littoral .ms-chapo{font-size:14.5px}\nrdr-littoral .ms-signe{width:40px;height:40px;margin-top:2px}\nrdr-littoral .ms-corps{grid-template-columns:1fr;gap:16px;padding:0 0 20px}\nrdr-littoral .benevolat{padding:calc(44px * var(--air)) 0 calc(48px * var(--air))}\nrdr-littoral .fiche{padding:12px 14px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-littoral *{animation:none !important;transition:none !important}\nrdr-littoral .rv{opacity:1;transform:none}\nrdr-littoral .haut-photo img{transform:none}\n}";
  const GABARIT = "<div class=\"rlt-page\" id=\"proteger-littoral\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\" id=\"haut-txt\"></div>\n  </header>\n  <div class=\"haut-suite\" id=\"haut-suite\"><div class=\"trame\"><figure class=\"haut-photo\" id=\"haut-photo\"></figure></div></div></div>";
  const TRAD = {"Lire la suite":"Read more","Refermer":"Close","«":"“","»":"”"};
  const SOURCE = 'https://www.routedurhum.com/_functions/littoral';

  function poserStyle() {
    if (document.getElementById("rdr-littoral-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-littoral-css";
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
    const FOND_PAGE = HOTE.querySelector("#proteger-littoral");
    const PAGE = D.page, ARCS = D.arcs;










 
const ALIAS = { benevolat: 'benevolat', benevoles: 'benevolat', 'bénévolat': 'benevolat', 'bénévoles': 'benevolat' };
 



const COTE = 'M-0.5 900L5.5 899L5.5 572L10.5 567L13.5 560L19 555.5L26 555.5L32 561.5L45 561.5L49.5 558L49.5 548L50.5 546L54 544.5L62 543.5L72 550.5L87 550.5L90 549.5L106 531.5L121.5 521L122 514.5L135 512.5L135.5 506L137 504.5L145 501.5L156 501.5L161 493.5L169 493.5L174 488.5L178.5 486L178.5 473L185.5 463L185.5 449L191 448.5L200 442.5L204.5 431L208 427.5L213 427.5L218.5 433L221.5 443L221.5 452L224 455.5L228.5 456L228.5 460L224.5 464L220.5 471L220.5 487L224.5 494L233 502.5L241 506.5L249 513.5L255 513.5L256 514.5L276 513.5L279 515.5L284 516.5L292 516.5L292.5 527L289.5 534L287 536.5L272 542.5L269.5 545L267.5 556L257.5 566L256.5 574L253.5 578L228.5 596L225.5 602L225.5 610L223.5 619L223.5 633L221.5 636L213 644.5L199 653.5L192 656.5L177 668.5L162 676.5L149.5 687L149.5 702L152 707.5L170 707.5L181.5 710L186.5 730L187.5 740L192 744.5L204.5 744L209.5 736L226.5 715L240.5 701L244.5 689L247 685.5L257 684.5L258 686.5L270 686.5L272.5 683L272.5 675L278 674.5L279.5 673L280 660.5L284 660.5L289 654.5L293 652.5L305 651.5L309 649.5L310.5 648L311 643.5L319 643.5L320 629.5L322 628.5L340 628.5L347.5 620L354 609.5L361 606.5L365 606.5L370 610.5L381 614.5L398 614.5L402 611.5L410 611.5L414 613.5L418.5 620L417.5 630L413 634.5L411 635.5L402 635.5L399 633.5L386 633.5L380.5 639L373.5 647L369.5 656L369.5 673L376.5 686L383 692.5L391 699.5L397 702.5L404.5 704L404.5 708L391.5 720L390.5 738L395 742.5L409 748.5L423 757.5L432 757.5L432.5 776L435 779.5L526 779.5L527 775.5L531 775.5L538 779.5L634 779.5L639.5 775L639.5 759L642.5 750L657 738.5L662 738.5L664.5 747L671.5 751L670.5 776L683 776.5L683.5 759L685.5 754L685.5 741L683.5 737L683.5 720L667 719.5L659 708.5L654 707.5L652.5 706L652.5 677L658 676.5L659.5 681L666 684.5L679 684.5L687 677.5L690.5 677L690.5 665L695 658.5L700 656.5L708 657.5L713.5 663L715 673.5L734 672.5L741.5 664L741.5 642L743.5 638L749 633.5L758 633.5L764.5 639L765.5 641L765.5 650L761.5 655L761.5 667L768 669.5L781 669.5L781.5 664L786 658.5L791 656.5L796 656.5L799 657.5L804.5 663L805.5 665L805.5 677L810 678.5L821 678.5L825 680.5L838 680.5L852 670.5L855.5 667L856 663.5L863 663.5L869 671.5L889 672.5L894 669.5L899 669.5L909 672.5L911.5 677L914.5 693L918.5 701L918.5 707L911.5 717L911.5 729L921 735.5L935 735.5L942 732.5L963 732.5L968 730.5L973 730.5L974.5 734L977.5 736L977.5 750L975.5 752L975.5 764L983.5 765L983.5 779L1010 779.5L1010.5 766L1009 764.5L1003 763.5L1002.5 758L1006 756.5L1012 756.5L1014.5 754L1019.5 743L1021.5 741L1021.5 728L1019 724.5L1012.5 722L1002.5 699L1000 696.5L989 696.5L987.5 694L986.5 680L996.5 664L996.5 652L985.5 651L981.5 641L982.5 625L997 623.5L1003.5 619L1005 611.5L1009 611.5L1012 616.5L1038 616.5L1043 615.5L1050 609.5L1061 606.5L1079 596.5L1091.5 576L1091.5 571L1096.5 570L1100.5 560L1111.5 545L1111.5 532L1105.5 526L1105.5 519L1103.5 514L1104 507.5L1130 508.5L1132 501.5L1139 501.5L1140 504.5L1152 504.5L1158 491.5L1181 491.5L1184.5 488L1188.5 481L1197 474.5L1212 474.5L1242 468.5L1243.5 467L1244.5 462L1245.5 435L1246.5 432L1249 430.5L1259.5 431L1259.5 471L1261 472.5L1276 478.5L1298 479.5L1298.5 463L1303 462.5L1308.5 465L1309.5 482L1310.5 485L1313 486.5L1321 488.5L1348 488.5L1349 487.5L1354 487.5L1358.5 486L1372.5 461L1378 454.5L1388 455.5L1393 460.5L1405 460.5L1406 467.5L1421 467.5L1430.5 461L1431 447.5L1438 447.5L1443 451.5L1455 451.5L1466.5 436L1467 423.5L1493 422.5L1499.5 417L1503 408.5L1510 408.5L1510.5 416L1506.5 432L1499.5 441L1499.5 450L1490.5 454L1490.5 467L1498.5 471L1498.5 475L1491.5 481L1491.5 495L1493.5 502L1506.5 512L1506.5 529L1509.5 536L1514.5 541L1514.5 545L1497 554.5L1475 577.5L1468 578.5L1444.5 591L1436.5 609L1436.5 630L1430.5 640L1428.5 649L1418.5 660L1413.5 669L1413.5 682L1414.5 683L1416.5 701L1426.5 715L1436.5 739L1459 779.5L1593.5 780L1593.5 899L1599.5 900ZM881.5 509L886 508.5L887.5 510L888.5 519L873 528.5L867.5 528L865.5 524L865.5 518L881.5 509Z';

 
const LU = {
  footprints: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
  sailboat: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  fileText: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  fileDown: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/>',
  maximize: '<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>',
  moveHorizontal: '<path d="m18 8 4 4-4 4"/><path d="M2 12h20"/><path d="m6 8-4 4 4 4"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const IMG = (id, l, h, q, fp) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',' + (fp ? 'fp_' + fp : 'al_c') + ',q_' + (q || 78) + ',enc_auto/x.jpg';
const jeu = (p, ratio, largeurs, q) => largeurs.filter((l, i) => i === 0 || !p.l || l <= p.l * 1.25).map((l) => IMG(p.id, l, Math.round(l * ratio), q, p.fp) + ' ' + l + 'w').join(', ');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));


const FINE = String.fromCharCode(8239), NB = String.fromCharCode(160);
const T = (s) => esc(s)
  .replace(/&#39;/g, '’')
  .replace(/(\d) (?=\d{3}\b)/g, '$1' + FINE)
  .replace(/(\d) (m|km|jours)\b/g, '$1' + NB + '$2')
  .replace(/ ([?!;])/g, FINE + '$1')
  .replace(/ :/g, NB + ':')
  .replace(/« /g, '«' + NB).replace(/ »/g, NB + '»')
   
  .replace(/([A-Za-zÀ-ÿ’]+-[A-Za-zÀ-ÿ’-]+)/g, '<span class="nw">$1</span>');
 
const TT = T;
const $ = (id) => document.getElementById(id);
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
const tel = () => innerWidth <= 750;
{
  const [x, y, l, h] = ARCS.crop;
  FOND_PAGE.style.setProperty('--arcs', 'url("https://static.wixstatic.com/media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1200,h_1200,q_85/x.png")');
}


 
function tete(S, id, cls) {
  return '<div class="rv' + (cls ? ' ' + cls : '') + '"><p class="surtitre">' + T(S.surtitre) + '</p><h2 class="titre sec-titre" id="t-' + id + '">' + TT(S.titre) + '</h2></div>';
}
function haut() {
  const H = PAGE.haut, p = H.photo;
  $('haut-txt').innerHTML = '<p class="surtitre">' + T(H.surtitre) + '</p><h1 class="titre" id="t-haut">' + TT(H.titre) + '</h1><p class="haut-chapo">' + T(H.chapo) + '</p>';
  $('haut-photo').innerHTML = '<img src="' + IMG(p.id, 1600, 600, 80) + '" srcset="' + jeu(p, .375, [800, 1240, 1600, 2000], 80) + '" sizes="(max-width:1320px) 94vw, 1240px" alt="' + esc(p.alt) + '" fetchpriority="high" decoding="async">';
}
function pratiques() {
  const P = PAGE.pratiques;
  return '<div class="trame">' + tete(P, 'bonnes-pratiques') +
    '<div class="pr-grille">' + P.groupes.map((g) => '<div class="pr-carte rv"><div class="pr-tete"><span class="pr-pic">' + SVG(g.pic) + '</span><h3>' + T(g.nom) + '</h3></div>' +
      '<ol class="pr-liste">' + g.liste.map((t, i) => '<li><span class="pr-n" aria-hidden="true">' + (i + 1) + '</span><span>' + T(t) + '</span></li>').join('') + '</ol></div>').join('') + '</div>' +
    '<div class="pr-actions rv">' + P.boutons.map((b) => '<a class="btn btn--' + b.style + '" href="' + esc(b.lien) + '">' + T(b.texte) + SVG('arrowRight', 'ico--glisse') + '</a>').join('') + '</div></div>';
}
function natura() {
  const N = PAGE.natura, p = N.photo;
  return '<div class="trame na-grille"><div class="na-texte rv"><h2 class="titre sec-titre" id="t-natura-2000">' + TT(N.titre) + '</h2>' +
      '<p>' + T(N.texte[0]) + '</p><div class="na-suite" id="na-suite"><p>' + T(N.texte[1]) + '</p></div>' +
      '<button type="button" class="lire-suite" aria-expanded="false" aria-controls="na-suite"><span>Lire la suite</span>' + SVG('chevronDown') + '</button></div>' +
    '<figure class="na-photo rv"><img loading="lazy" decoding="async" src="' + IMG(p.id, 720, 576) + '" srcset="' + jeu(p, .8, [480, 720, 1000]) + '" sizes="(max-width:750px) 92vw, 40vw" alt="' + esc(p.alt) + '"></figure></div>';
}
function pourquoi() {
  const Q = PAGE.pourquoi, C = Q.carte;
  return '<div class="trame pq-grille"><div class="pq-texte rv"><h2 class="titre sec-titre" id="t-pourquoi">' + TT(Q.titre) + '</h2><p>' + T(Q.texte) + '</p></div>' +
    '<aside class="pq-carte rv" aria-labelledby="pq-sur"><p class="surtitre" id="pq-sur">' + T(C.surtitre) + '</p>' +
      '<p class="pq-citation"><span class="gm">«</span>' + NB + T(C.citation) + NB + '<span class="gm">»</span></p>' +
      '<p class="pq-t">' + T(C.texte) + '</p><p class="pq-chute">' + T(C.chute) + '</p>' +
      '<a class="btn btn--blanc" href="' + esc(C.bouton.lien) + '">' + T(C.bouton.texte) + SVG('arrowRight', 'ico--glisse') + '</a></aside></div>';
}
function zones() {
  const Z = PAGE.zones, c = Z.carte;
  const src = (l) => 'https://static.wixstatic.com/media/' + c.id + '/v1/fit/w_' + l + ',h_' + Math.round(l * 9 / 16) + ',q_90,enc_auto/x.png';
  return '<div class="trame">' + tete(Z, 'zones') +
    '<figure class="zones-carte rv"><div class="zones-cadre" id="zones-cadre" tabindex="0" aria-label="' + esc(Z.titre) + '"><div class="zones-plan">' +
      '<img loading="lazy" decoding="async" src="' + src(1600) + '" srcset="' + [1000, 1600, 2400, 3200].map((l) => src(l) + ' ' + l + 'w').join(', ') + '" sizes="(max-width:750px) 200vw, min(94vw, 1240px)" alt="' + esc(c.alt) + '">' +
      '<div class="zones-points" id="zones-points" aria-hidden="true"></div></div></div></figure>' +
    '<p class="zones-aide"><span>' + SVG('moveHorizontal') + T(Z.aide) + '</span><a href="' + src(3200) + '" target="_blank" rel="noopener">' + T(Z.agrandir) + SVG('maximize') + '</a></p></div>' +
    '<div class="cote" aria-hidden="true"><svg class="large" viewBox="0 400 1600 420" preserveAspectRatio="none"><path d="' + COTE + '"/></svg>' +
      '<svg class="etroit" viewBox="1040 400 560 420" preserveAspectRatio="none"><path d="' + COTE + '"/></svg></div>';
}
function mesures() {
  const M = PAGE.mesures;
  return '<div class="trame"><div class="ms-tete">' + tete(M, 'mesures') + '<p class="ms-intro rv">' + T(M.intro) + '</p></div>' +
    '<div class="ms-liste rv">' + M.liste.map((m, i) => {
      const p = m.photo, id = 'ms-' + i;
      return '<div class="ms" data-i="' + i + '"><h3><button type="button" class="ms-bouton" id="' + id + '-b" aria-expanded="false" aria-controls="' + id + '">' +
          '<span class="ms-n" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span><span class="ms-nom">' + T(m.nom) + '</span><span class="ms-chapo">' + T(m.chapo) + '</span></span>' +
          '<span class="ms-signe" aria-hidden="true"></span></button></h3>' +
        '<div class="ms-tiroir" id="' + id + '" role="region" aria-labelledby="' + id + '-b"><div class="ms-dedans"><div class="ms-corps"><p>' + T(m.texte) + '</p>' +
          '<figure class="ms-photo"><img loading="lazy" decoding="async" src="' + IMG(p.id, 720, 450, 78, p.fp) + '" srcset="' + jeu(p, .625, [480, 720, 960]) + '" sizes="(max-width:750px) 88vw, 34vw" alt="' + esc(p.alt) + '"></figure></div></div></div></div>';
    }).join('') + '</div></div>';
}
function benevolat() {
  const B = PAGE.benevolat;
  return '<div class="trame bv-grille"><div class="bv-texte rv"><h2 class="titre sec-titre" id="t-benevolat">' + TT(B.titre) + '</h2><p>' + T(B.texte) + '</p></div>' +
    '<div class="fiches rv">' + B.fiches.map((f) => '<a class="fiche" href="' + esc(f.lien) + '" target="_blank" rel="noopener"><span class="pic">' + SVG('fileText') + '</span>' +
      '<span><b>' + T(f.b) + '</b><small>' + T(f.s) + '</small><span class="format">PDF</span></span>' + SVG('fileDown') + '</a>').join('') + '</div></div>';
}




const SECTIONS = {
  'bonnes-pratiques': { cls: 'pratiques', rendu: pratiques },
  'natura-2000': { cls: 'natura', rendu: natura },
  pourquoi: { cls: 'pourquoi', rendu: pourquoi },
  zones: { cls: 'zones', rendu: zones },
  mesures: { cls: 'mesures', rendu: mesures },
  benevolat: { cls: 'benevolat', rendu: benevolat }
};
const ORDRES = {
  haut: ['bonnes-pratiques', 'natura-2000', 'pourquoi', 'zones', 'mesures', 'benevolat'],
  zones: ['natura-2000', 'pourquoi', 'zones', 'bonnes-pratiques', 'mesures', 'benevolat']
};
function construire() {
  haut();
  const main = $('proteger-littoral');
  Object.keys(SECTIONS).forEach((id) => {
    const s = document.createElement('section');
    s.id = id; s.className = SECTIONS[id].cls; s.setAttribute('aria-labelledby', 't-' + id);
    s.innerHTML = SECTIONS[id].rendu();
    main.appendChild(s);
  });
}
function ranger(cle) {
  const ordre = ORDRES[cle] || ORDRES.haut, main = $('proteger-littoral');
  ordre.forEach((id) => main.appendChild($(id)));
  $('bonnes-pratiques').classList.toggle('sur-teinte', cle === 'zones');
   
  const fond = (el) => el ? getComputedStyle(el).backgroundColor : '#fff';
  $('haut-suite').style.setProperty('--fond-suivant', fond($(ordre[0])));
  const z = $('zones'); z.style.setProperty('--fond-suivant', fond(z.nextElementSibling));
  
}

 
function brancherMesures() {
  HOTE.querySelectorAll('.ms').forEach((ms, i) => {
    const b = ms.querySelector('.ms-bouton');
    const poser = (o) => { ms.classList.toggle('ouvert', o); b.setAttribute('aria-expanded', String(o)); };
    poser(i === 0);
    b.addEventListener('click', () => poser(!ms.classList.contains('ouvert')));
  });
}
 
function brancherSuite() {
  const b = HOTE.querySelector('.lire-suite');
  b.addEventListener('click', () => {
    const o = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(o)); $('na-suite').classList.toggle('ouverte', o);
    b.firstChild.textContent = o ? 'Refermer' : 'Lire la suite';
  });
}
 
function calerCarte() { const c = $('zones-cadre'); if (c && tel()) c.scrollLeft = c.scrollWidth; }

 
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  if (reduit || !('IntersectionObserver' in window)) { HOTE.querySelectorAll('.rv').forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.02 });
  HOTE.querySelectorAll('.rv:not(.vu)').forEach((e) => vus.observe(e));
}

 
const colle = () => parseFloat(getComputedStyle(FOND_PAGE).getPropertyValue('--colle')) || 56;







function cibleDemandee() {
  const go = (new URLSearchParams(location.search).get('go') || '').trim().toLowerCase();
  if (ALIAS[go]) return ALIAS[go];
  let h = ''; try { h = decodeURIComponent(location.hash.slice(1)).trim().toLowerCase(); } catch (e) { h = ''; }
  if (ALIAS[h]) return ALIAS[h];
  return h && PAGE.sections.some((s) => s.id === h) ? h : null;
}
function poser(id, doux) {
  const el = $(id); if (!el) return;
  const y = Math.max(0, Math.round(el.getBoundingClientRect().top + scrollY - colle()));
  if (doux && !reduit) { scrollTo({ top: y, behavior: 'smooth' }); return; }
  const r = document.documentElement.style, avant = r.scrollBehavior;
  r.scrollBehavior = 'auto'; scrollTo(0, y); r.scrollBehavior = avant;
}
function arriver() {
  const id = cibleDemandee(); if (!id) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const el = $(id);
  el.querySelectorAll('.rv').forEach((e) => e.classList.add('vu', 'net'));
  poser(id);
  
  const h = el.querySelector('h1, h2'); if (h) { h.setAttribute('tabindex', '-1'); try { h.focus({ preventScroll: true }); } catch (e) {   } }
  let touche = false;
  const lacher = () => { touche = true; };
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => addEventListener(t, lacher, { once: true, passive: true }));
  const recaler = () => { if (!touche && Math.abs(el.getBoundingClientRect().top - colle()) > .5) poser(id); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recaler);
  addEventListener('load', recaler, { once: true });
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(recaler); ro.observe($('proteger-littoral'));
    setTimeout(() => ro.disconnect(), 4000);
  }
  let hauteurPage = document.documentElement.scrollHeight; const suivrePage = setInterval(() => { const hp = document.documentElement.scrollHeight; if (hp !== hauteurPage) { hauteurPage = hp; recaler(); } }, 200); setTimeout(() => clearInterval(suivrePage), 4000);
}
addEventListener('hashchange', () => { const id = cibleDemandee(); if (id) poser(id, true); });



construire();

ranger('haut');
brancherMesures();
brancherSuite();
calerCarte();

reveler();
arriver();
  }

  class RdrLittoral extends HTMLElement {
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
    _valide(D) { return !!(D && D.page && D.page.haut && Array.isArray(D.page.sections) && D.page.sections.length && D.arcs); }
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!this._valide(D)) {
        if (!this.firstChild) this.innerHTML = "<div class=\"rlt-attente\" aria-hidden=\"true\"><div class=\"rlt-sq-haut\"><div class=\"rlt-sq-trame\"><i class=\"rlt-sq-l rlt-sq-k\"></i><i class=\"rlt-sq-l rlt-sq-t\"></i><i class=\"rlt-sq-l rlt-sq-t rlt-sq-t2\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p1\"></i><i class=\"rlt-sq-l rlt-sq-p\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p3\"></i></div></div><div class=\"rlt-sq-trame rlt-sq-sec\"><i class=\"rlt-sq-l rlt-sq-k\"></i><i class=\"rlt-sq-l rlt-sq-t\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p1\"></i><i class=\"rlt-sq-l rlt-sq-p\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p3\"></i></div><div class=\"rlt-sq-trame rlt-sq-cartes\"><i class=\"rlt-sq-c\"></i><i class=\"rlt-sq-c\"></i><i class=\"rlt-sq-c\"></i></div><div class=\"rlt-sq-trame rlt-sq-sec\"><i class=\"rlt-sq-l rlt-sq-k\"></i><i class=\"rlt-sq-l rlt-sq-t\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p1\"></i><i class=\"rlt-sq-l rlt-sq-p\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p3\"></i></div></div>";
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      if (!D.lang) D.lang = this._lang();
      const en = D.lang === 'en';
      



      poserStyle();
      this.innerHTML = GABARIT;
      if (en) { traduire(this); prefixerLiens(this); }
      




      const fond = this.querySelector('.rlt-page');
      fond.classList.add('rlt-calme');
      try { demarrer(D, this); } catch (e) { console.error('[rdr-littoral]', e); }
      void fond.offsetHeight;
      fond.classList.remove('rlt-calme');
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
      this.innerHTML = '<div class="rlt-vide"><h3>' + (en ? "This page will be back in a moment" : "Protéger le littoral revient dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = "<div class=\"rlt-attente\" aria-hidden=\"true\"><div class=\"rlt-sq-haut\"><div class=\"rlt-sq-trame\"><i class=\"rlt-sq-l rlt-sq-k\"></i><i class=\"rlt-sq-l rlt-sq-t\"></i><i class=\"rlt-sq-l rlt-sq-t rlt-sq-t2\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p1\"></i><i class=\"rlt-sq-l rlt-sq-p\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p3\"></i></div></div><div class=\"rlt-sq-trame rlt-sq-sec\"><i class=\"rlt-sq-l rlt-sq-k\"></i><i class=\"rlt-sq-l rlt-sq-t\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p1\"></i><i class=\"rlt-sq-l rlt-sq-p\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p3\"></i></div><div class=\"rlt-sq-trame rlt-sq-cartes\"><i class=\"rlt-sq-c\"></i><i class=\"rlt-sq-c\"></i><i class=\"rlt-sq-c\"></i></div><div class=\"rlt-sq-trame rlt-sq-sec\"><i class=\"rlt-sq-l rlt-sq-k\"></i><i class=\"rlt-sq-l rlt-sq-t\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p1\"></i><i class=\"rlt-sq-l rlt-sq-p\"></i><i class=\"rlt-sq-l rlt-sq-p rlt-sq-p3\"></i></div></div>"; this._chercher(); });
    }
  }
  customElements.define("rdr-littoral", RdrLittoral);
})();
})();
