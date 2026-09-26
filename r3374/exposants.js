/* rdr-elements exposants | source route-du-rhum 6d43c09 | rdr-offres-exposants.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["exposants"]="6d43c09";performance.mark("rdr-elements:exposants")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-offres-exposants")) return;
  const CSS = "rdr-offres-exposants{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-offres-exposants .rox-page{display:block}\nrdr-offres-exposants .rox-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-offres-exposants .rox-sq-haut{display:flex;align-items:center;min-height:clamp(300px,calc(115px + 34svh),510px);background:#00676E}\nrdr-offres-exposants .rox-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-offres-exposants .rox-sq-l,rdr-offres-exposants .rox-sq-c{position:relative;display:block;overflow:hidden}\nrdr-offres-exposants .rox-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-offres-exposants .rox-sq-k{width:120px;height:11px}\nrdr-offres-exposants .rox-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-offres-exposants .rox-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-offres-exposants .rox-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-offres-exposants .rox-sq-p1{margin-top:30px}\nrdr-offres-exposants .rox-sq-p3{width:min(380px,62%)}\nrdr-offres-exposants .rox-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-offres-exposants .rox-sq-sec .rox-sq-l{background:rgba(14,17,29,.08)}\nrdr-offres-exposants .rox-sq-sec .rox-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-offres-exposants .rox-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-offres-exposants .rox-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-offres-exposants .rox-sq-l::after,rdr-offres-exposants .rox-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rox-sq-luire 1.6s ease-in-out infinite}\nrdr-offres-exposants .rox-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-offres-exposants .rox-sq-sec .rox-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-offres-exposants .rox-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rox-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-offres-exposants .rox-sq-haut{min-height:390px}rdr-offres-exposants .rox-sq-cartes{grid-template-columns:1fr}rdr-offres-exposants .rox-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-offres-exposants .rox-sq-l::after,rdr-offres-exposants .rox-sq-c::after{animation:none;display:none}}\nrdr-offres-exposants .rox-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-offres-exposants .rox-vide h3{margin:0;font-size:22px}\nrdr-offres-exposants .rox-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-offres-exposants .rox-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-offres-exposants{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.8);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px);--entete:175px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px; --photo-h:clamp(210px,34vh,440px); --air:1.5; --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-offres-exposants{--air:1.3;--entete:120px;--marge:20px;--photo-h:clamp(176px,50vw,232px)}\n}\nrdr-offres-exposants *{box-sizing:border-box}\nrdr-offres-exposants{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-offres-exposants img{display:block;max-width:100%}\nrdr-offres-exposants a{color:inherit}\nrdr-offres-exposants h1,rdr-offres-exposants h2,rdr-offres-exposants h3,rdr-offres-exposants p,rdr-offres-exposants figure,rdr-offres-exposants ul{margin:0}\nrdr-offres-exposants ul{padding:0;list-style:none}\nrdr-offres-exposants button{font:inherit;color:inherit}\nrdr-offres-exposants .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-offres-exposants .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-offres-exposants .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-offres-exposants .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-offres-exposants .nw{white-space:nowrap}\nrdr-offres-exposants .rox-page>header,rdr-offres-exposants .rox-page>section,rdr-offres-exposants .dossier{scroll-margin-top:24px}\nrdr-offres-exposants .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-offres-exposants .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-offres-exposants .btn:hover .ico--glisse{transform:translateX(3px)}}\nrdr-offres-exposants .btn:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-offres-exposants .btn--marine{background:var(--marine);border-color:var(--marine);color:#fff}@media (hover:hover) and (pointer:fine){rdr-offres-exposants .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-offres-exposants .btn--grand{min-height:58px;padding:12px 22px;gap:14px;font-size:16px}\nrdr-offres-exposants .btn--grand .ico{width:20px;height:20px}\nrdr-offres-exposants .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(26px,5vh,56px) 0 calc(var(--photo-h) / 2 + clamp(26px,4vh,40px))}\nrdr-offres-exposants .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-offres-exposants .haut h1{margin-top:clamp(10px,1.6vh,16px);font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-offres-exposants .haut-chapo{margin-top:clamp(12px,2vh,20px);max-width:68ch;font-size:clamp(15.5px,1.15vw,17px);line-height:1.68;font-weight:500;color:rgba(255,255,255,.94);text-wrap:pretty}\nrdr-offres-exposants .haut-photo{position:relative;z-index:2;height:var(--photo-h);margin-top:calc(var(--photo-h) / -2);border-radius:32px 4px 20px 4px;overflow:hidden;background:#3A4A4F;box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-offres-exposants .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 68%;transform:scale(1.05);animation:rox-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rox-zoom{to{transform:scale(1)}}\nrdr-offres-exposants .embarquez{position:relative;padding:calc(clamp(44px,7.4vh,84px) * var(--air)) 0 calc(clamp(52px,8.4vh,96px) * var(--air))}\nrdr-offres-exposants .em-titre{font-size:clamp(30px,min(3.15vw,6.6vh),46px);line-height:1.08;color:var(--marine);text-wrap:pretty}\nrdr-offres-exposants .em-titre>span{display:block}\nrdr-offres-exposants .em-titre>span+span{color:var(--vert1)}\nrdr-offres-exposants .em-grille{display:grid;grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr);gap:clamp(28px,4.6vw,72px);align-items:center;margin-top:calc(clamp(28px,4.6vh,48px) * var(--air))}\nrdr-offres-exposants .em-visuel{position:relative;aspect-ratio:4/3;border-radius:var(--carte);overflow:hidden;background:var(--teinte);border:6px solid #fff;box-shadow:0 30px 50px -28px rgba(25,29,49,.55);transform:rotate(-1.2deg)}\nrdr-offres-exposants .em-visuel img{width:100%;height:100%;object-fit:cover;object-position:50% 50%}\nrdr-offres-exposants .em-texte p{max-width:62ch;font-size:clamp(16px,1.25vw,18px);line-height:1.66;font-weight:500;color:var(--encre);text-wrap:pretty}\nrdr-offres-exposants .em-texte p+p{margin-top:8px}\nrdr-offres-exposants .dossier{margin-top:clamp(18px,3vh,28px);padding:clamp(12px,1.4vw,18px);border-radius:var(--carte);background:var(--teinte)}\nrdr-offres-exposants .docs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(10px,1vw,14px)}\nrdr-offres-exposants .docs>li{display:flex;min-width:0}\nrdr-offres-exposants .fiche{flex:1;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto 1fr;grid-template-areas:\"pic poids\" \"nom nom\" \"dl dl\";gap:12px 10px;min-height:clamp(136px,18vh,152px);padding:16px 16px 14px 18px;border-radius:16px 4px 16px 4px;background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 20px 34px -24px rgba(25,29,49,.6);transition:transform .25s var(--ease),box-shadow .25s}@media (hover:hover) and (pointer:fine){rdr-offres-exposants .fiche:hover{transform:translateY(-3px);box-shadow:0 26px 40px -24px rgba(25,29,49,.7)}}\nrdr-offres-exposants .fiche:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-offres-exposants .fiche .pic{grid-area:pic;display:grid;place-items:center;width:46px;height:46px;border-radius:12px 3px 12px 3px;background:var(--vert1);color:#fff}\nrdr-offres-exposants .fiche .pic .ico{width:22px;height:22px}\nrdr-offres-exposants .fiche-poids{grid-area:poids;align-self:start;display:inline-flex;align-items:center;gap:8px;font:600 13px/1.4 var(--police);color:var(--encre2);white-space:nowrap}\nrdr-offres-exposants .format{display:inline-block;padding:1px 7px;border-radius:5px;background:rgba(25,29,49,.08);font:800 10.5px/1.6 var(--police);letter-spacing:.1em;color:var(--encre2)}\nrdr-offres-exposants .fiche-nom{grid-area:nom;font-size:clamp(15.5px,1.2vw,17px);font-weight:800;line-height:1.3;text-wrap:balance}\nrdr-offres-exposants .fiche-dl{grid-area:dl;align-self:end;display:inline-flex;align-items:center;gap:8px;font:800 13.5px/1.2 var(--police);color:var(--vert1)}\nrdr-offres-exposants .fiche-dl .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-offres-exposants .fiche:hover .fiche-dl .ico{transform:translateY(2px)}}\nrdr-offres-exposants .contact{position:relative;background:var(--jaune);color:var(--encre);padding:calc(clamp(44px,7.4vh,84px) * var(--air)) 0}\nrdr-offres-exposants .ct-grille{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:clamp(24px,5vw,84px);align-items:center}\nrdr-offres-exposants .sec-titre{font-size:clamp(30px,min(3.4vw,6vh),48px);line-height:1.1;color:var(--marine);text-wrap:balance}\nrdr-offres-exposants .ct-texte p{margin-top:14px;max-width:52ch;font-size:clamp(15.5px,1.15vw,17px);line-height:1.72;font-weight:500;text-wrap:pretty}\nrdr-offres-exposants .ct-action{display:flex;justify-content:flex-end}\nrdr-offres-exposants .ct-action .btn{max-width:100%;box-shadow:0 18px 30px -20px rgba(25,29,49,.6)}\nrdr-offres-exposants .ct-action .btn span{min-width:0}\nrdr-offres-exposants .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-offres-exposants .rv.vu{opacity:1;transform:none}\nrdr-offres-exposants .em-visuel.rv{transform:translateY(18px) rotate(-1.2deg)}\nrdr-offres-exposants .em-visuel.rv.vu{transform:rotate(-1.2deg)}\n@media (max-height:820px) and (min-width:751px){\nrdr-offres-exposants .haut-chapo{font-size:15.5px;line-height:1.62}\nrdr-offres-exposants .em-texte p{font-size:16px}\nrdr-offres-exposants .fiche{min-height:136px;gap:10px 10px;padding:14px 14px 12px 16px}\nrdr-offres-exposants .fiche-nom{font-size:15.5px}\n}\n@media (max-width:1000px){\nrdr-offres-exposants .em-grille{grid-template-columns:minmax(0,1fr);gap:calc(30px * var(--air))}\nrdr-offres-exposants .em-visuel{aspect-ratio:16/9;max-width:760px}\n}\n@media (max-width:750px){\nrdr-offres-exposants{font-size:15px}\nrdr-offres-exposants .haut{padding-top:26px}\nrdr-offres-exposants .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-offres-exposants .haut h1{font-size:clamp(32px,9.8vw,44px)}\nrdr-offres-exposants .haut-chapo{font-size:15px;line-height:1.62}\nrdr-offres-exposants .haut-photo{border-radius:22px 3px 14px 3px}\nrdr-offres-exposants .em-titre{font-size:clamp(26px,7.6vw,32px);line-height:1.1}\nrdr-offres-exposants .em-grille{margin-top:calc(24px * var(--air));gap:calc(24px * var(--air))}\nrdr-offres-exposants .em-visuel{aspect-ratio:16/10;border-width:4px;transform:rotate(-.7deg)}\nrdr-offres-exposants .em-visuel.rv{transform:translateY(18px) rotate(-.7deg)}\nrdr-offres-exposants .em-visuel.rv.vu{transform:rotate(-.7deg)}\nrdr-offres-exposants .em-texte p{font-size:15.5px;line-height:1.66}\nrdr-offres-exposants .contact{padding:calc(44px * var(--air)) 0 calc(48px * var(--air))}\nrdr-offres-exposants .ct-grille{grid-template-columns:minmax(0,1fr);gap:24px}\nrdr-offres-exposants .sec-titre{font-size:clamp(28px,8.4vw,36px)}\nrdr-offres-exposants .ct-texte p{font-size:15.5px}\nrdr-offres-exposants .ct-action .btn{width:100%;justify-content:space-between;gap:12px;padding:12px 18px;font-size:15px}\nrdr-offres-exposants .ct-action .btn span{flex:1}\nrdr-offres-exposants .ct-action .btn .ico--glisse{display:none}\n}\n@media (max-width:560px){\nrdr-offres-exposants .dossier{padding:10px}\nrdr-offres-exposants .docs{grid-template-columns:minmax(0,1fr);gap:8px}\nrdr-offres-exposants .fiche{grid-template-columns:auto minmax(0,1fr) auto;grid-template-rows:auto auto;grid-template-areas:\"pic nom dl\" \"pic poids dl\";align-items:center;gap:2px 14px;min-height:76px;padding:12px 14px 12px 12px}\nrdr-offres-exposants .fiche .pic{align-self:center}\nrdr-offres-exposants .fiche-nom{align-self:end;font-size:15px}\nrdr-offres-exposants .fiche-poids{align-self:start;font-size:12.5px}\nrdr-offres-exposants .fiche-dl{align-self:center}\nrdr-offres-exposants .fiche-dl .mot{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-offres-exposants .fiche-dl .ico{width:20px;height:20px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-offres-exposants *{animation:none !important;transition:none !important}\nrdr-offres-exposants .rv,rdr-offres-exposants .rv.vu{opacity:1;transform:none}\nrdr-offres-exposants .em-visuel.rv{transform:rotate(-1.2deg)}\nrdr-offres-exposants .haut-photo img{transform:none}\n}";
  const GABARIT = "<div class=\"rox-page\" id=\"offres-exposants\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\" id=\"haut-txt\"></div>\n  </header>\n  <div class=\"trame\"><figure class=\"haut-photo\" id=\"haut-photo\"></figure></div>\n  <section class=\"embarquez\" id=\"embarquez\" aria-labelledby=\"t-embarquez\"></section>\n  <section class=\"contact\" id=\"contact\" aria-labelledby=\"t-contact\"></section></div>";
  const ATTENTE = "<div class=\"rox-attente\" aria-hidden=\"true\"><div class=\"rox-sq-haut\"><div class=\"rox-sq-trame\"><i class=\"rox-sq-l rox-sq-k\"></i><i class=\"rox-sq-l rox-sq-t\"></i><i class=\"rox-sq-l rox-sq-t rox-sq-t2\"></i><i class=\"rox-sq-l rox-sq-p rox-sq-p1\"></i><i class=\"rox-sq-l rox-sq-p\"></i><i class=\"rox-sq-l rox-sq-p rox-sq-p3\"></i></div></div><div class=\"rox-sq-trame rox-sq-sec\"><i class=\"rox-sq-l rox-sq-k\"></i><i class=\"rox-sq-l rox-sq-t\"></i><i class=\"rox-sq-l rox-sq-p rox-sq-p1\"></i><i class=\"rox-sq-l rox-sq-p\"></i><i class=\"rox-sq-l rox-sq-p rox-sq-p3\"></i></div><div class=\"rox-sq-trame rox-sq-cartes\"><i class=\"rox-sq-c\"></i><i class=\"rox-sq-c\"></i><i class=\"rox-sq-c\"></i></div><div class=\"rox-sq-trame rox-sq-sec\"><i class=\"rox-sq-l rox-sq-k\"></i><i class=\"rox-sq-l rox-sq-t\"></i><i class=\"rox-sq-l rox-sq-p rox-sq-p1\"></i><i class=\"rox-sq-l rox-sq-p\"></i><i class=\"rox-sq-l rox-sq-p rox-sq-p3\"></i></div></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/offresExposants';

  function poserStyle() {
    if (document.getElementById("rdr-offres-exposants-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-offres-exposants-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  



  function demarrer(D, racine) {
    const PAGE = D.page, ARCS = D.arcs;
    Object.keys(PAGE.langues).forEach((l) => { const f = PAGE.langues[l].f; if (f && f.poids && typeof f.poids === 'object') { const t = f.poids; f.poids = (o) => t[String(o)]; } });
 
const LU = {
  store: '<path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  utensilsCrossed: '<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/>',
  scale: '<path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>',
  tent: '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
  download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const IMG = (id, l, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 80) + ',enc_auto/x.jpg';
 
const jeu = (im, ratio, largeurs) => [...new Set(largeurs.map((l) => Math.min(l, im.l)))].map((w) => IMG(im.id, w, Math.round(w * ratio)) + ' ' + w + 'w').join(', ');
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

 
function haut() {
  const p = PAGE.photos.haut;
  $('haut-txt').innerHTML = '<h1 class="titre" id="t-haut">' + T(X.titre) + '</h1><p class="haut-chapo">' + T(X.chapo) + '</p>';
  $('haut-photo').innerHTML = '<img src="' + IMG(p.id, 1600, 600) + '" srcset="' + jeu(p, .375, [800, 1240, 1600, 2000]) + '" sizes="(max-width:1320px) 94vw, 1240px" alt="' + esc(X.f.altHaut) + '" fetchpriority="high" decoding="async">';
  const [x, y, l, h] = ARCS.crop;
  racine.style.setProperty('--arcs', 'url("https://static.wixstatic.com/media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1200,h_1200,q_85/x.png")');
}
function fiche(d) {
  const p = poids(d.octets);
  return '<li><a class="fiche" href="' + esc(d.lien) + '" target="_blank" rel="noopener" aria-label="' + esc(plat(d.libelle) + ' (PDF, ' + p + ', ' + X.f.onglet + ')') + '">' +
    '<span class="pic" aria-hidden="true">' + SVG(d.picto) + '</span>' +
    '<span class="fiche-poids" aria-hidden="true"><span class="format">PDF</span>' + esc(p) + '</span>' +
    '<span class="fiche-nom">' + T(d.libelle) + '</span>' +
    '<span class="fiche-dl" aria-hidden="true"><span class="mot">' + esc(X.f.telecharger) + '</span>' + SVG('download') + '</span></a></li>';
}
function embarquez() {
  const s = PAGE.photos.stand;
  $('embarquez').innerHTML = '<div class="trame">' +
    '<h2 class="titre em-titre rv" id="t-embarquez"><span>' + T(X.embarquez[0]) + '</span> <span>' + T(X.embarquez[1]) + '</span></h2>' +
    '<div class="em-grille">' +
      '<figure class="em-visuel rv"><img src="' + IMG(s.id, 900, 675) + '" srcset="' + jeu(s, .75, [480, 720, 900, 1200]) + '" sizes="(max-width:750px) 92vw, (max-width:1000px) 760px, 42vw" alt="' + esc(X.f.altStand) + '" width="900" height="675" loading="lazy" decoding="async"></figure>' +
      '<div class="em-col rv"><div class="em-texte">' + X.texte.map((p) => '<p>' + T(p) + '</p>').join('') + '</div>' +
        '<div class="dossier" id="documents" role="group" aria-label="' + esc(X.f.documents) + '"><ul class="docs">' + X.documents.map(fiche).join('') + '</ul></div></div>' +
    '</div></div>';
}
function contact() {
  const C = X.contact, K = PAGE.contact;
  $('contact').innerHTML = '<div class="trame ct-grille">' +
    '<div class="ct-texte rv"><h2 class="titre sec-titre" id="t-contact">' + T(C.titre) + '</h2><p>' + T(C.texte) + '</p></div>' +
    '<div class="ct-action rv"><a class="btn btn--marine btn--grand" href="' + esc(K.lien) + '">' + SVG('mail') + '<span>' + esc(K.email).replace('@', '@<wbr>') + '</span>' + SVG('arrowRight', 'ico--glisse') + '</a></div></div>';
}

 
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  const cibles = [...racine.querySelectorAll('.rv')];
  if (reduit || !('IntersectionObserver' in window)) { cibles.forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  cibles.forEach((e) => vus.observe(e));
}

function monter(lang) {
  L = PAGE.langues[lang] ? lang : 'fr'; X = PAGE.langues[L];
  
  haut(); embarquez(); contact();
  reveler();
  
}
    monter(D.lang in PAGE.langues ? D.lang : Object.keys(PAGE.langues)[0]);
  }

  const jeuValide = (D) => !!(D && D.page && D.page.photos && D.page.contact && D.page.langues && Object.keys(D.page.langues).length > 0 && Object.keys(D.page.langues).every((l) => D.page.langues[l] && Array.isArray(D.page.langues[l].documents) && D.page.langues[l].documents.length > 0 && D.page.langues[l].f) && D.arcs);

  class RdrOffresExposants extends HTMLElement {
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
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!jeuValide(D)) {
        if (!this.firstChild) this.innerHTML = ATTENTE;
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      if (!D.lang) D.lang = this._lang();
      

      poserStyle();
      this.innerHTML = GABARIT;
      try { demarrer(D, this.firstElementChild); } catch (e) { console.error('[rdr-offres-exposants]', e); }
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
      this.innerHTML = '<div class="rox-vide"><h3>' + (en ? "This page will be back in a moment" : "Les offres exposants reviennent dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }
  }
  customElements.define("rdr-offres-exposants", RdrOffresExposants);
})();
})();
