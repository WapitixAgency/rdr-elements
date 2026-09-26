/* rdr-elements partenaire | source route-du-rhum a72ca9d | rdr-devenir-partenaire.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["partenaire"]="a72ca9d";performance.mark("rdr-elements:partenaire")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-devenir-partenaire")) return;
  const CSS = "rdr-devenir-partenaire{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-devenir-partenaire .rdp-page{display:block}\nrdr-devenir-partenaire .rdp-calme *,rdr-devenir-partenaire .rdp-calme *::before,rdr-devenir-partenaire .rdp-calme *::after{transition:none !important}\nrdr-devenir-partenaire .rdp-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-devenir-partenaire .rdp-sq-haut{display:flex;align-items:center;min-height:clamp(560px,calc(100svh - 175px),900px);background:#00676E}\nrdr-devenir-partenaire .rdp-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-devenir-partenaire .rdp-sq-l,rdr-devenir-partenaire .rdp-sq-c{position:relative;display:block;overflow:hidden}\nrdr-devenir-partenaire .rdp-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-devenir-partenaire .rdp-sq-k{width:120px;height:11px}\nrdr-devenir-partenaire .rdp-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-devenir-partenaire .rdp-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-devenir-partenaire .rdp-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-devenir-partenaire .rdp-sq-p1{margin-top:30px}\nrdr-devenir-partenaire .rdp-sq-p3{width:min(380px,62%)}\nrdr-devenir-partenaire .rdp-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-devenir-partenaire .rdp-sq-sec .rdp-sq-l{background:rgba(14,17,29,.08)}\nrdr-devenir-partenaire .rdp-sq-sec .rdp-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-devenir-partenaire .rdp-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-devenir-partenaire .rdp-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-devenir-partenaire .rdp-sq-l::after,rdr-devenir-partenaire .rdp-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rdp-sq-luire 1.6s ease-in-out infinite}\nrdr-devenir-partenaire .rdp-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-devenir-partenaire .rdp-sq-sec .rdp-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-devenir-partenaire .rdp-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rdp-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-devenir-partenaire .rdp-sq-cartes{grid-template-columns:1fr}rdr-devenir-partenaire .rdp-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-devenir-partenaire .rdp-sq-l::after,rdr-devenir-partenaire .rdp-sq-c::after{animation:none;display:none}}\nrdr-devenir-partenaire .rdp-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-devenir-partenaire .rdp-vide h3{margin:0;font-size:22px}\nrdr-devenir-partenaire .rdp-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-devenir-partenaire .rdp-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-devenir-partenaire{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --marine2:#16355D;--teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.8);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;--contour:'VarienOutline','Varien',sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px);--entete:175px;--colle:56px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;--photo:32px 4px 20px 4px; --photo-h:clamp(210px,34vh,440px); --pv-h:clamp(66px,7vw,96px); --air:1.5; --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-devenir-partenaire{--air:1.3;--entete:120px;--colle:60px;--marge:20px;--photo-h:clamp(176px,50vw,232px);--pv-h:54px}\n}\nrdr-devenir-partenaire *{box-sizing:border-box}\nrdr-devenir-partenaire{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-devenir-partenaire img{display:block;max-width:100%}\nrdr-devenir-partenaire a{color:inherit}\nrdr-devenir-partenaire h1,rdr-devenir-partenaire h2,rdr-devenir-partenaire h3,rdr-devenir-partenaire p,rdr-devenir-partenaire figure,rdr-devenir-partenaire ol,rdr-devenir-partenaire ul{margin:0}\nrdr-devenir-partenaire ol,rdr-devenir-partenaire ul{padding:0;list-style:none}\nrdr-devenir-partenaire button{font:inherit;color:inherit}\nrdr-devenir-partenaire [hidden]{display:none !important}\nrdr-devenir-partenaire .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-devenir-partenaire .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-devenir-partenaire .nw{white-space:nowrap}\nrdr-devenir-partenaire .rdp-page>header,rdr-devenir-partenaire .rdp-page>section{scroll-margin-top:var(--colle)}\nrdr-devenir-partenaire h2[tabindex=\"-1\"]:focus{outline:none}\nrdr-devenir-partenaire .surtitre{display:flex;align-items:center;gap:12px;font:800 12.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--vert1)}\nrdr-devenir-partenaire .surtitre::before{content:'';flex:none;width:28px;height:5px;background:currentColor;transform:skewX(-20deg)}\nrdr-devenir-partenaire .sec-titre{font-size:clamp(30px,min(3.4vw,6vh),48px);line-height:1.16;color:var(--marine2);text-wrap:balance}\nrdr-devenir-partenaire .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(26px,5vh,56px) 0 calc(var(--photo-h) / 2 + clamp(26px,4vh,40px))}\nrdr-devenir-partenaire .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-devenir-partenaire .haut .surtitre{color:var(--jaune)}\nrdr-devenir-partenaire .haut h1{margin-top:clamp(10px,1.6vh,16px);font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-devenir-partenaire .haut-chapo{margin-top:clamp(12px,2vh,20px);max-width:68ch;font-size:clamp(15.5px,1.15vw,17px);line-height:1.68;font-weight:500;color:rgba(255,255,255,.94);text-wrap:pretty}\nrdr-devenir-partenaire .haut-photo{position:relative;z-index:2;height:var(--photo-h);margin-top:calc(var(--photo-h) / -2);border-radius:32px 4px 20px 4px;overflow:hidden;background:#3A4A4F;box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-devenir-partenaire .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 62%;transform:scale(1.05);animation:rdp-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rdp-zoom{to{transform:scale(1)}}\nrdr-devenir-partenaire .edition{position:relative}\nrdr-devenir-partenaire .ed-intro{padding:calc(clamp(44px,7.4vh,84px) * var(--air)) 0 calc(clamp(40px,6.4vh,72px) * var(--air));background:#fff}\nrdr-devenir-partenaire .ed-grille{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(26px,5vw,84px);align-items:center}\nrdr-devenir-partenaire .ed-texte p{margin-top:clamp(16px,2.6vh,22px);max-width:60ch;font-size:clamp(16px,1.2vw,17.5px);line-height:1.72;font-weight:500;color:var(--encre);text-wrap:pretty}\nrdr-devenir-partenaire .ed-photo{position:relative;aspect-ratio:3/2;border-radius:var(--carte);overflow:hidden;background:#9DB9B6;border:6px solid #fff;box-shadow:0 30px 50px -28px rgba(25,29,49,.55);transform:rotate(-1.2deg)}\nrdr-devenir-partenaire .ed-photo img{width:100%;height:100%;object-fit:cover;object-position:40% 50%}\nrdr-devenir-partenaire .atouts{position:relative;background:var(--teinte);padding:calc(var(--pv-h) + clamp(18px,3vh,32px) * var(--air)) 0 calc(clamp(48px,8vh,92px) * var(--air))}\nrdr-devenir-partenaire .pavois{position:absolute;left:0;right:0;top:0;height:var(--pv-h);overflow:hidden;pointer-events:none}\nrdr-devenir-partenaire .pavois svg{display:block;width:100%;height:100%}\nrdr-devenir-partenaire .pavois .drisse{fill:none;stroke:rgba(25,29,49,.42);stroke-width:1.6;stroke-dasharray:1;stroke-dashoffset:0;transition:stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)}\nrdr-devenir-partenaire .pavois .fanion{transform-box:fill-box;transform-origin:50% 0;transition:transform .55s var(--ease) calc(.25s + var(--i) * 22ms),opacity .3s ease calc(.25s + var(--i) * 22ms)}\nrdr-devenir-partenaire .pavois:not(.vu) .drisse{stroke-dashoffset:1}\nrdr-devenir-partenaire .pavois:not(.vu) .fanion{transform:scaleY(0) rotate(0deg);opacity:0}\nrdr-devenir-partenaire .pavois{display:none}\nrdr-devenir-partenaire .atouts{--pv-h:0px}\nrdr-devenir-partenaire .ms-liste{--ms-n:clamp(52px,4.6vw,68px);padding:4px clamp(18px,2.4vw,34px);border-radius:var(--carte);background:#fff;box-shadow:0 26px 50px -38px rgba(25,29,49,.55)}\nrdr-devenir-partenaire .ms+.ms{border-top:1px solid var(--filet)}\nrdr-devenir-partenaire .ms-n{font:italic 400 clamp(32px,2.8vw,42px)/1 var(--contour);color:var(--vert1);transition:transform .3s var(--ease)}\nrdr-devenir-partenaire .ms.ouvert .ms-n{font-family:var(--titre)}\nrdr-devenir-partenaire .ms-nom{display:block;font:italic 400 clamp(21px,1.8vw,27px)/1.2 var(--titre);text-transform:uppercase;color:var(--marine2);text-wrap:balance}\nrdr-devenir-partenaire .ms-texte{font-size:clamp(15.5px,1.12vw,16.5px);line-height:1.72;color:var(--encre2);text-wrap:pretty}\nrdr-devenir-partenaire .ms-fixe{display:grid;grid-template-columns:var(--ms-n) minmax(0,.86fr) minmax(0,1.14fr);column-gap:clamp(14px,2vw,30px);align-items:start;padding:clamp(22px,3.4vh,32px) 0}\nrdr-devenir-partenaire .ms-fixe .ms-n{padding-top:2px}\nrdr-devenir-partenaire .ms-fixe .ms-nom{padding-top:5px}\nrdr-devenir-partenaire .ms-bouton{display:grid;grid-template-columns:var(--ms-n) minmax(0,1fr) auto;align-items:center;column-gap:clamp(12px,1.6vw,20px);width:100%;min-height:84px;padding:16px 0;border:0;background:none;text-align:left;cursor:pointer}\nrdr-devenir-partenaire .ms-signe{position:relative;display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--angle-p);border:2px solid var(--vert1);color:var(--vert1);transition:background-color .2s,border-color .2s,color .2s}\nrdr-devenir-partenaire .ms-signe::before,rdr-devenir-partenaire .ms-signe::after{content:'';position:absolute;left:50%;top:50%;background:currentColor;border-radius:1px}\nrdr-devenir-partenaire .ms-signe::before{width:14px;height:2.4px;transform:translate(-50%,-50%)}\nrdr-devenir-partenaire .ms-signe::after{width:2.4px;height:14px;transform:translate(-50%,-50%);transition:transform .25s var(--ease)}\nrdr-devenir-partenaire .ms.ouvert .ms-signe{background:var(--vert1);color:#fff}\nrdr-devenir-partenaire .ms.ouvert .ms-signe::after{transform:translate(-50%,-50%) rotate(90deg)}\n@media (hover:hover) and (pointer:fine){\nrdr-devenir-partenaire .ms-bouton:hover .ms-nom{text-decoration:underline;text-decoration-color:var(--vert1);text-decoration-thickness:3px;text-underline-offset:6px}\nrdr-devenir-partenaire .ms-bouton:hover .ms-n{transform:translateY(-2px) rotate(-3deg)}\n}\nrdr-devenir-partenaire .ms-bouton:focus-visible{outline:3px solid var(--marine);outline-offset:2px;border-radius:var(--angle-p)}\nrdr-devenir-partenaire .ms-tiroir{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s cubic-bezier(.4,0,.2,1)}\nrdr-devenir-partenaire .ms.ouvert .ms-tiroir{grid-template-rows:1fr}\nrdr-devenir-partenaire .ms-dedans{min-height:0;overflow:hidden;visibility:hidden;transition:visibility 0s linear .4s}\nrdr-devenir-partenaire .ms.ouvert .ms-dedans{visibility:visible;transition:visibility 0s}\nrdr-devenir-partenaire .ms-corps{padding:0 0 26px calc(var(--ms-n) + clamp(12px,1.6vw,20px))}\nrdr-devenir-partenaire .ms-corps .ms-texte{max-width:78ch}\nrdr-devenir-partenaire .contact{position:relative;background:#fff;padding:calc(clamp(48px,8vh,92px) * var(--air)) 0 calc(clamp(52px,8.4vh,96px) * var(--air))}\nrdr-devenir-partenaire .ct-grille{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:clamp(26px,4.4vw,72px);align-items:stretch}\nrdr-devenir-partenaire .ct-gauche{display:flex;flex-direction:column;gap:clamp(20px,3.4vh,32px)}\nrdr-devenir-partenaire .contact .sec-titre{font-size:clamp(26px,min(2.7vw,5.2vh),38px);line-height:1.16}\nrdr-devenir-partenaire .ct-photo{position:relative;flex:1;min-height:220px;border-radius:var(--photo);overflow:hidden;background:#C9D7D6}\nrdr-devenir-partenaire .ct-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 60%}\nrdr-devenir-partenaire .ct-carte{position:relative;padding:clamp(22px,2.8vw,40px);border-radius:var(--carte);background:#fff;border:1px solid var(--filet);box-shadow:0 30px 56px -40px rgba(25,29,49,.6)}\nrdr-devenir-partenaire .ct-carte::before{content:'';position:absolute;left:clamp(22px,2.8vw,40px);top:-3px;width:56px;height:6px;background:var(--jaune);transform:skewX(-20deg)}\nrdr-devenir-partenaire #hubspotForm{display:flex;flex-direction:column;justify-content:center;min-height:488px}\n@media (min-width:901px) and (max-width:959px),(min-width:481px) and (max-width:559px){\nrdr-devenir-partenaire #hubspotForm{min-height:506px}\n}\n@media (max-width:480px){\nrdr-devenir-partenaire #hubspotForm{min-height:clamp(718px,calc(976px - 60vw),808px)}\n}\nrdr-devenir-partenaire .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-devenir-partenaire .rv.vu{opacity:1;transform:none}\nrdr-devenir-partenaire .rv.net{transition:none}\n@media (max-height:820px) and (min-width:751px){\nrdr-devenir-partenaire .haut-chapo{font-size:15.5px;line-height:1.62}\nrdr-devenir-partenaire .ed-texte p{font-size:16px;line-height:1.66}\nrdr-devenir-partenaire .ms-texte{font-size:15.5px;line-height:1.66}\nrdr-devenir-partenaire .ms-bouton{min-height:74px;padding:13px 0}\n}\n@media (max-width:1100px){\nrdr-devenir-partenaire .ms-fixe{grid-template-columns:var(--ms-n) minmax(0,1fr);row-gap:10px}\nrdr-devenir-partenaire .ms-fixe .ms-texte{grid-column:2}\nrdr-devenir-partenaire .ct-grille{grid-template-columns:minmax(0,.7fr) minmax(0,1.3fr)}\n}\n@media (max-width:900px){\nrdr-devenir-partenaire .ct-grille{grid-template-columns:1fr}\nrdr-devenir-partenaire .ct-photo{display:none}\n}\n@media (max-width:750px){\nrdr-devenir-partenaire{font-size:15px}\nrdr-devenir-partenaire .haut{padding-top:26px}\nrdr-devenir-partenaire .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-devenir-partenaire .haut h1{font-size:clamp(32px,9.8vw,44px)}\nrdr-devenir-partenaire .haut-chapo{font-size:15px;line-height:1.62}\nrdr-devenir-partenaire .haut-photo{border-radius:22px 3px 14px 3px}\nrdr-devenir-partenaire .sec-titre{font-size:clamp(27px,8.2vw,34px)}\nrdr-devenir-partenaire .ed-grille{grid-template-columns:1fr;gap:26px}\nrdr-devenir-partenaire .ed-photo{aspect-ratio:16/10;border-width:4px;transform:rotate(-.8deg)}\nrdr-devenir-partenaire .ed-texte p{font-size:15.5px;line-height:1.68}\nrdr-devenir-partenaire .ms-liste{--ms-n:40px;padding:2px 16px}\nrdr-devenir-partenaire .ms-fixe{column-gap:12px;padding:20px 0}\nrdr-devenir-partenaire .ms-n{font-size:30px}\nrdr-devenir-partenaire .ms-nom{font-size:20px}\nrdr-devenir-partenaire .ms-texte{font-size:15px;line-height:1.66}\nrdr-devenir-partenaire .ms-bouton{column-gap:10px;min-height:72px;padding:14px 0;align-items:start}\nrdr-devenir-partenaire .ms-signe{margin-top:2px}\nrdr-devenir-partenaire .ms-corps{padding:0 0 20px calc(var(--ms-n) + 10px)}\nrdr-devenir-partenaire .contact .sec-titre{font-size:clamp(23px,6.6vw,28px)}\nrdr-devenir-partenaire .ct-carte{padding:24px 18px 22px;border-radius:22px 3px 14px 3px}\nrdr-devenir-partenaire .ct-carte::before{left:18px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-devenir-partenaire *{animation:none !important;transition:none !important}\nrdr-devenir-partenaire .rv{opacity:1;transform:none}\nrdr-devenir-partenaire .haut-photo img{transform:none}\nrdr-devenir-partenaire .pavois:not(.vu) .fanion{transform:none;opacity:1}\nrdr-devenir-partenaire .pavois:not(.vu) .drisse{stroke-dashoffset:0}\n}";
  const GABARIT = "<div class=\"rdp-page\" id=\"devenir-partenaire\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\" id=\"haut-txt\"></div>\n  </header>\n  <div class=\"trame\"><figure class=\"haut-photo\" id=\"haut-photo\"></figure></div>\n  <section class=\"edition\" id=\"edition-2026\" aria-labelledby=\"t-edition-2026\">\n    <div class=\"ed-intro\"><div class=\"trame ed-grille\" id=\"ed-grille\"></div></div>\n    <div class=\"atouts\" id=\"atouts\">\n      <div class=\"pavois\" id=\"pavois\" aria-hidden=\"true\"></div>\n      <div class=\"trame\" id=\"atouts-liste\"></div>\n    </div>\n  </section>\n  <section class=\"contact\" id=\"contact\" aria-labelledby=\"t-contact\">\n    <div class=\"trame ct-grille\" id=\"ct-grille\"></div>\n  </section></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/devenirPartenaire';
  const ATTENTE = "<div class=\"rdp-attente\" aria-hidden=\"true\"><div class=\"rdp-sq-haut\"><div class=\"rdp-sq-trame\"><i class=\"rdp-sq-l rdp-sq-k\"></i><i class=\"rdp-sq-l rdp-sq-t\"></i><i class=\"rdp-sq-l rdp-sq-t rdp-sq-t2\"></i><i class=\"rdp-sq-l rdp-sq-p rdp-sq-p1\"></i><i class=\"rdp-sq-l rdp-sq-p\"></i><i class=\"rdp-sq-l rdp-sq-p rdp-sq-p3\"></i></div></div><div class=\"rdp-sq-trame rdp-sq-sec\"><i class=\"rdp-sq-l rdp-sq-k\"></i><i class=\"rdp-sq-l rdp-sq-t\"></i><i class=\"rdp-sq-l rdp-sq-p rdp-sq-p1\"></i><i class=\"rdp-sq-l rdp-sq-p\"></i><i class=\"rdp-sq-l rdp-sq-p rdp-sq-p3\"></i></div><div class=\"rdp-sq-trame rdp-sq-cartes\"><i class=\"rdp-sq-c\"></i><i class=\"rdp-sq-c\"></i><i class=\"rdp-sq-c\"></i></div><div class=\"rdp-sq-trame rdp-sq-sec\"><i class=\"rdp-sq-l rdp-sq-k\"></i><i class=\"rdp-sq-l rdp-sq-t\"></i><i class=\"rdp-sq-l rdp-sq-p rdp-sq-p1\"></i><i class=\"rdp-sq-l rdp-sq-p\"></i><i class=\"rdp-sq-l rdp-sq-p rdp-sq-p3\"></i></div></div>";

  function poserStyle() {
    if (document.getElementById("rdr-devenir-partenaire-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-devenir-partenaire-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  function demarrer(D, HOTE) {
    const FOND_PAGE = HOTE.querySelector("#devenir-partenaire");
    const PAGE = D.page, ARCS = D.arcs, FANIONS = D.fanions;
 
const IMG = (id, l, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 80) + ',enc_auto/x.jpg';
 
const jeu = (im, ratio, largeurs) => [...new Set(largeurs.map((l) => Math.min(l, im.l)))].map((w) => IMG(im.id, w, Math.round(w * ratio)) + ' ' + w + 'w').join(', ');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));



const FINE = String.fromCharCode(0x202F), INSEC = String.fromCharCode(0xA0);
let L = 'fr', X = PAGE.langues.fr;
const T = (s) => {
  let t = esc(String(s == null ? '' : s).replace(/'/g, '’').replace(/Route du Rhum Destination Guadeloupe/g, 'Route du Rhum - Destination Guadeloupe'));
  if (L === 'fr') t = t.replace(/ ([?!:;])/g, FINE + '$1').replace(/(\d) (millions)\b/g, '$1' + INSEC + '$2');
  else t = t.replace(/(\d) (million)\b/g, '$1' + INSEC + '$2');
  return t.replace(/Rhum - Destination/g, '<span class="nw">Rhum -</span> Destination')
    .replace(/(Contactez-nous|Saint-Malo)/g, '<span class="nw">$1</span>');
};
const $ = (id) => (FOND_PAGE.id === id ? FOND_PAGE : FOND_PAGE.querySelector('[id="' + id + '"]'));
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
{
  const [x, y, l, h] = ARCS.crop;
  FOND_PAGE.style.setProperty('--arcs', 'url("https://static.wixstatic.com/media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1200,h_1200,q_85/x.png")');
}

 
function haut() {
  const H = X.haut, p = PAGE.images.haut;
  $('haut-txt').innerHTML = (H.surtitre ? '<p class="surtitre">' + T(H.surtitre) + '</p>' : '') + '<h1 class="titre" id="t-haut">' + T(H.titre) + '</h1><p class="haut-chapo">' + T(H.chapo) + '</p>';
  $('haut-photo').innerHTML = '<img src="' + IMG(p.id, 1600, 800) + '" srcset="' + jeu(p, .5, [800, 1240, 1600, 2160]) + '" sizes="(max-width:1320px) 94vw, 1240px" alt="' + esc(H.alt) + '" style="object-position:' + p.pos + '" fetchpriority="high" decoding="async">';
}
function edition() {
  const E = X.edition, p = PAGE.images.edition;
  $('ed-grille').innerHTML =
    '<figure class="ed-photo rv"><img src="' + IMG(p.id, 720, 480) + '" srcset="' + jeu(p, 2 / 3, [480, 720, 1000, 1400]) + '" sizes="(max-width:750px) 92vw, 44vw" alt="' + esc(E.alt) + '" width="720" height="480" loading="lazy" decoding="async"></figure>' +
    '<div class="ed-texte rv"><h2 class="titre sec-titre" id="t-edition-2026">' + T(E.titre) + '</h2><p>' + T(E.texte) + '</p></div>';
}
 
let MODE = 'ouverts';
function atouts() {
  const n = (i) => String(i + 1).padStart(2, '0');
  if (MODE === 'volets') {
    $('atouts-liste').innerHTML = '<div class="ms-liste rv">' + X.atouts.map((a, i) => {
      const id = 'at-' + i;
      return '<div class="ms"><h3><button type="button" class="ms-bouton" id="' + id + '-b" aria-expanded="false" aria-controls="' + id + '">' +
        '<span class="ms-n" aria-hidden="true">' + n(i) + '</span><span class="ms-nom">' + T(a.titre) + '</span><span class="ms-signe" aria-hidden="true"></span></button></h3>' +
        '<div class="ms-tiroir" id="' + id + '" role="region" aria-labelledby="' + id + '-b"><div class="ms-dedans"><div class="ms-corps"><p class="ms-texte">' + T(a.texte) + '</p></div></div></div></div>';
    }).join('') + '</div>';
    HOTE.querySelectorAll('#atouts .ms').forEach((ms, i) => {
      const b = ms.querySelector('.ms-bouton');
      const poser = (o) => { ms.classList.toggle('ouvert', o); b.setAttribute('aria-expanded', String(o)); };
      poser(i === 0);
      b.addEventListener('click', () => poser(!ms.classList.contains('ouvert')));
    });
  } else {
    $('atouts-liste').innerHTML = '<ol class="ms-liste rv">' + X.atouts.map((a, i) =>
      '<li class="ms ouvert ms-fixe"><span class="ms-n" aria-hidden="true">' + n(i) + '</span><h3 class="ms-nom">' + T(a.titre) + '</h3><p class="ms-texte">' + T(a.texte) + '</p></li>').join('') + '</ol>';
  }
}
function contact() {
  const C = X.contact, p = PAGE.images.contact;
  $('ct-grille').innerHTML =
    '<div class="ct-gauche rv"><h2 class="titre sec-titre" id="t-contact">' + T(C.titre) + '</h2>' +
      '<figure class="ct-photo"><img src="' + IMG(p.id, 480, 640) + '" srcset="' + jeu(p, 4 / 3, [360, 480]) + '" sizes="34vw" alt="' + esc(C.alt) + '" loading="lazy" decoding="async"></figure></div>' +
    '<div class="ct-carte rv" id="ct-carte"><div id="hubspotForm"></div></div>';
  hubspot();
}





let hsScript = null;
function hubspot() {
  const H = PAGE.hubspot, cible = $('hubspotForm');
  const creer = () => {
    if (cible.dataset.monte || !cible.isConnected || !window.hbspt) return;
    cible.dataset.monte = '1';
    window.hbspt.forms.create({ portalId: H.portalId, formId: H.formId, region: H.region, target: '#hubspotForm' });
  };
  const charger = () => {
    if (window.hbspt) { creer(); return; }
    if (!hsScript) {
      hsScript = document.createElement('script');
      hsScript.src = H.script; hsScript.type = 'text/javascript'; hsScript.charset = 'utf-8';
      document.head.appendChild(hsScript);
    }
    hsScript.addEventListener('load', creer, { once: true });
  };
  if (!('IntersectionObserver' in window)) { charger(); return; }
  const approche = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { approche.disconnect(); charger(); } }, { rootMargin: '0px 0px 100% 0px' });
  approche.observe($('contact'));
}



let largeurPavois = 0;
function pavois() {
  const P = $('pavois'), W = P.clientWidth, H = P.clientHeight;
  if (!W || W === largeurPavois) return;
  largeurPavois = W;
  const tel = W <= 750, pas = tel ? 32 : 44, fl = tel ? 18 : 24, fh = tel ? 24 : 32, y0 = 2, creux = Math.min(H - fh - 6, W * .03 + 8);
  const n = Math.max(6, Math.round(W / pas)), y = (t) => y0 + 4 * creux * t * (1 - t), pente = (t) => 4 * creux * (1 - 2 * t) / W;
  let f = '';
  for (let k = 0; k < n; k++) {
    const t = (k + .5) / n, x = t * W, a = Math.atan(pente(t)) * 180 / Math.PI;
    f += '<g transform="translate(' + x.toFixed(1) + ' ' + y(t).toFixed(1) + ') rotate(' + a.toFixed(2) + ')"><polygon class="fanion" style="--i:' + k + '" points="' + (-fl / 2) + ',0 ' + (fl / 2) + ',0 0,' + fh + '" fill="' + FANIONS[k % FANIONS.length] + '"/></g>';
  }
  P.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none"><path class="drisse" pathLength="1" d="M-4 ' + y0 + ' Q' + (W / 2) + ' ' + (y0 + 2 * creux) + ' ' + (W + 4) + ' ' + y0 + '"/>' + f + '</svg>';
}

 
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  const cibles = [...HOTE.querySelectorAll('.rv:not(.vu)'), $('pavois')];
  if (reduit || !('IntersectionObserver' in window)) { cibles.forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
  cibles.forEach((e) => { if (!e.classList.contains('vu')) vus.observe(e); });
}

 
const colle = () => parseFloat(getComputedStyle(FOND_PAGE).getPropertyValue('--colle')) || 56;
function poser(id, doux) {
  const el = $(id); if (!el) return;
  const y = Math.max(0, Math.round(el.getBoundingClientRect().top + scrollY - colle()));
  if (doux && !reduit) { scrollTo({ top: y, behavior: 'smooth' }); return; }
  const r = document.documentElement.style, avant = r.scrollBehavior;
  r.scrollBehavior = 'auto'; scrollTo(0, y); r.scrollBehavior = avant;
}
function cibleDemandee() {
  let h = ''; try { h = decodeURIComponent(location.hash.slice(1)).trim().toLowerCase(); } catch (e) { h = ''; }
  return h && X.sections.some((s) => s.id === h) ? h : null;
}
function arriver() {
  const id = cibleDemandee(); if (!id) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const el = $(id);
  el.querySelectorAll('.rv').forEach((e) => e.classList.add('vu', 'net'));
  poser(id);
  let touche = false;
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => addEventListener(t, () => { touche = true; }, { once: true, passive: true }));
  const recaler = () => { if (!touche && Math.abs(el.getBoundingClientRect().top - colle()) > .5) poser(id); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recaler);
  addEventListener('load', recaler, { once: true });
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(recaler); ro.observe($('devenir-partenaire')); setTimeout(() => ro.disconnect(), 4000); }
  let hauteurPage = document.documentElement.scrollHeight; const suivrePage = setInterval(() => { const hp = document.documentElement.scrollHeight; if (hp !== hauteurPage) { hauteurPage = hp; recaler(); } }, 200); setTimeout(() => clearInterval(suivrePage), 4000);
}
addEventListener('hashchange', () => { const id = cibleDemandee(); if (id) poser(id, true); });

 
function monter(lang) {
  L = PAGE.langues[lang] ? lang : 'fr'; X = PAGE.langues[L];
  
  haut(); edition(); atouts(); contact();
  largeurPavois = 0; pavois();
  reveler();
}



monter(D.lang in PAGE.langues ? D.lang : Object.keys(PAGE.langues)[0]);

arriver();
addEventListener('resize', () => { pavois();  });
if ('ResizeObserver' in window) new ResizeObserver(() => pavois()).observe($('pavois'));
  }

  class RdrDevenirPartenaire extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() { clearTimeout(this._minuteur); this._minuteur = null; }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || (document.documentElement.getAttribute('lang') || '') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    _valide(D) { return !!(D && D.page && D.page.hubspot && D.page.images && D.page.langues && Object.keys(D.page.langues).length && D.arcs && Array.isArray(D.fanions)); }
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!this._valide(D)) {
        if (!this.firstChild) this.innerHTML = ATTENTE;
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      if (!D.lang) D.lang = this._lang();
      


      poserStyle();
      this.innerHTML = GABARIT;
      

      const fond = this.querySelector('.rdp-page');
      fond.classList.add('rdp-calme');
      try { demarrer(D, this); } catch (e) { console.error('[rdr-devenir-partenaire]', e); }
      void fond.offsetHeight;
      fond.classList.remove('rdp-calme');
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
      this.innerHTML = '<div class="rdp-vide"><h3>' + (en ? "This page will be back in a moment" : "Devenir partenaire revient dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }
  }
  customElements.define("rdr-devenir-partenaire", RdrDevenirPartenaire);
})();
})();
