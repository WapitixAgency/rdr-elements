/* rdr-elements fiche-partenaire | source route-du-rhum 8d20609 | rdr-partenaire.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["fiche-partenaire"]="8d20609";performance.mark("rdr-elements:fiche-partenaire")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-partenaire")) return;
  const CSS = "rdr-partenaire{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-partenaire .rpf-page{display:block}\nrdr-partenaire .rpf-calme *,rdr-partenaire .rpf-calme *::before,rdr-partenaire .rpf-calme *::after{transition:none !important}\nrdr-partenaire .rpf-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#fff}\nrdr-partenaire .rpf-sq-haut{display:flex;align-items:center;min-height:calc(44px + clamp(66px,11.4vh,116px) + clamp(92px,9.3vw,140px) + min(22vh,(min(100vw,1320px) - 80px)/6));background:#00676E}\nrdr-partenaire .rpf-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-partenaire .rpf-sq-l,rdr-partenaire .rpf-sq-c{position:relative;display:block;overflow:hidden}\nrdr-partenaire .rpf-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-partenaire .rpf-sq-k{width:120px;height:11px}\nrdr-partenaire .rpf-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-partenaire .rpf-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-partenaire .rpf-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-partenaire .rpf-sq-p1{margin-top:30px}\nrdr-partenaire .rpf-sq-p3{width:min(380px,62%)}\nrdr-partenaire .rpf-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-partenaire .rpf-sq-sec .rpf-sq-l{background:rgba(14,17,29,.08)}\nrdr-partenaire .rpf-sq-sec .rpf-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-partenaire .rpf-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-partenaire .rpf-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-partenaire .rpf-sq-l::after,rdr-partenaire .rpf-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rpf-sq-luire 1.6s ease-in-out infinite}\nrdr-partenaire .rpf-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-partenaire .rpf-sq-sec .rpf-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-partenaire .rpf-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rpf-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-partenaire .rpf-sq-haut{min-height:calc(295px + 7vh + 26.9vw)}rdr-partenaire .rpf-sq-cartes{grid-template-columns:1fr}rdr-partenaire .rpf-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-partenaire .rpf-sq-l::after,rdr-partenaire .rpf-sq-c::after{animation:none;display:none}}\nrdr-partenaire .rpf-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-partenaire .rpf-vide h3{margin:0;font-size:22px}\nrdr-partenaire .rpf-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-partenaire .rpf-vide button,rdr-partenaire .rpf-vide a{display:inline-flex;align-items:center;min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;text-decoration:none;cursor:pointer}\nrdr-partenaire .rpf-vide :focus-visible{outline:3px solid #FCDD00;outline-offset:3px}\nrdr-partenaire{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.72);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px);--entete:175px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;--tuile:16px 4px 16px 4px; --colle:56px; --air:1.5; --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-partenaire{--air:1.3;--entete:120px;--marge:20px}\n}\nrdr-partenaire *{box-sizing:border-box}\nrdr-partenaire{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-partenaire img{display:block;max-width:100%}\nrdr-partenaire a{color:inherit}\nrdr-partenaire h1,rdr-partenaire h2,rdr-partenaire h3,rdr-partenaire p,rdr-partenaire figure,rdr-partenaire ul{margin:0}\nrdr-partenaire ul{padding:0;list-style:none}\nrdr-partenaire button,rdr-partenaire select{font:inherit;color:inherit}\nrdr-partenaire .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-partenaire .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-partenaire .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-partenaire .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-partenaire .nw{white-space:nowrap}\nrdr-partenaire .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-partenaire .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-partenaire .btn:hover .ico--glisse{transform:translateX(3px)}}@media (hover:hover) and (pointer:fine){rdr-partenaire .btn:hover .ico--sort{transform:translate(2px,-2px)}}\nrdr-partenaire .btn:focus-visible{outline:3px solid var(--marine);outline-offset:3px}\nrdr-partenaire .btn--marine{background:var(--marine);border-color:var(--marine);color:#fff}@media (hover:hover) and (pointer:fine){rdr-partenaire .btn--marine:hover{background:var(--vert1);border-color:var(--vert1)}}\nrdr-partenaire .btn--blanc{color:#fff}@media (hover:hover) and (pointer:fine){rdr-partenaire .btn--blanc:hover{background:#fff;color:var(--vert1);border-color:#fff}}\nrdr-partenaire .btn--blanc:focus-visible{outline-color:var(--jaune)}\nrdr-partenaire .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(24px,4.4vh,48px) 0 clamp(34px,5.6vh,60px)}\nrdr-partenaire .haut.a-bande{padding-bottom:calc(var(--bande-h) / 2 + clamp(26px,4vh,40px))}\nrdr-partenaire .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-partenaire .haut-grille{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:clamp(24px,4vw,64px);align-items:center}\nrdr-partenaire .fil{display:flex;flex-wrap:wrap;align-items:center;gap:2px 10px;font:700 11.5px/1.3 var(--police);letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.7)}\nrdr-partenaire .fil a{display:inline-flex;align-items:center;gap:8px;min-height:44px;text-decoration:none;color:#fff;transition:color .2s}@media (hover:hover) and (pointer:fine){rdr-partenaire .fil a:hover{color:var(--jaune)}}\nrdr-partenaire .fil a:focus-visible{outline:3px solid var(--jaune);outline-offset:2px}\nrdr-partenaire .fil .ico{width:14px;height:14px;stroke-width:2.4}\nrdr-partenaire .fil .sep{opacity:.5}\nrdr-partenaire .fil-rang{display:inline-flex;align-items:center;gap:10px}\nrdr-partenaire .haut h1{margin-top:clamp(4px,1vh,10px);font-size:clamp(40px,min(5vw,9vh),76px);color:#fff;text-wrap:balance;overflow-wrap:anywhere}\nrdr-partenaire .haut h1.long{font-size:clamp(32px,min(3.6vw,6.6vh),54px)}\nrdr-partenaire .haut-acc{margin-top:clamp(12px,2vh,18px);max-width:52ch;font-size:clamp(16px,1.3vw,19px);line-height:1.55;font-weight:600;color:rgba(255,255,255,.94);text-wrap:pretty}\nrdr-partenaire .haut-logo{display:grid;place-items:center;width:clamp(200px,20vw,280px);aspect-ratio:16/10;border-radius:var(--carte);background:#fff;box-shadow:0 30px 50px -30px rgba(5,25,30,.7);transform:rotate(1.2deg)}\nrdr-partenaire .haut-logo img{max-width:72%;max-height:68%;width:auto;height:auto;object-fit:contain}\nrdr-partenaire .bande{position:relative;z-index:2;height:var(--bande-h);margin:calc(var(--bande-h) / -2) auto 0;border-radius:32px 4px 20px 4px;overflow:hidden;background:var(--teinte);box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-partenaire .bande img{width:100%;height:100%;object-fit:cover}\nrdr-partenaire .corps{padding:calc(clamp(40px,6.6vh,76px) * var(--air)) 0 calc(clamp(48px,7.6vh,88px) * var(--air))}\nrdr-partenaire .corps-grille{display:grid;grid-template-columns:minmax(0,1fr) clamp(280px,25vw,330px);gap:clamp(32px,6vw,96px);align-items:start}\nrdr-partenaire .corps-grille.sans-texte{grid-template-columns:minmax(0,1fr);justify-items:start}\nrdr-partenaire .texte{max-width:68ch;font-size:clamp(16px,1.18vw,17.5px);line-height:1.76;font-weight:500;color:var(--encre)}\nrdr-partenaire .texte p+p,rdr-partenaire .texte p+ul,rdr-partenaire .texte ul+p{margin-top:.9em}\nrdr-partenaire .texte .lead{font-size:clamp(18px,1.45vw,21px);line-height:1.6;font-weight:700;color:var(--marine);text-wrap:pretty}\nrdr-partenaire .texte .inter{margin-top:1.8em;font-size:clamp(17px,1.3vw,19px);line-height:1.4;font-weight:800;color:var(--vert1);text-wrap:balance}\nrdr-partenaire .texte .inter+p{margin-top:.5em}\nrdr-partenaire .texte strong{font-weight:700}\nrdr-partenaire .texte a{color:var(--vert1);font-weight:700;text-underline-offset:3px}\nrdr-partenaire .texte ul{padding-left:1.2em;list-style:disc}\nrdr-partenaire .texte li+li{margin-top:.3em}\nrdr-partenaire .cote{position:sticky;top:calc(var(--colle) + 24px);display:grid;gap:16px;padding:clamp(20px,2vw,26px);border-radius:var(--carte);background:var(--teinte)}\nrdr-partenaire .cote-sur{font:800 11px/1 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--vert1)}\nrdr-partenaire .cote .btn{justify-content:space-between;width:100%;min-width:0}\nrdr-partenaire .cote .btn span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\nrdr-partenaire .cote-rang{display:flex;align-items:center;gap:10px;padding-top:16px;border-top:1px solid rgba(25,29,49,.1);font:600 13.5px/1.4 var(--police);color:var(--encre2)}\nrdr-partenaire .cote-rang a{display:inline-flex;align-items:center;min-height:44px;font-weight:800;color:var(--marine);text-underline-offset:3px}\nrdr-partenaire .retour{display:inline-flex;align-items:center;gap:10px;min-height:44px;font:700 14px var(--police);text-decoration:none;color:var(--marine)}\nrdr-partenaire .retour .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-partenaire .retour:hover .ico{transform:translateX(-3px)}}\nrdr-partenaire .retour:focus-visible,rdr-partenaire .cote-rang a:focus-visible{outline:3px solid var(--marine);outline-offset:2px}\nrdr-partenaire .memes{position:relative;background:var(--vert1);color:#fff;padding:calc(clamp(44px,7vh,80px) * var(--air)) 0}\nrdr-partenaire .memes-tete{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:16px 32px;margin-bottom:clamp(22px,3.6vh,36px)}\nrdr-partenaire .memes-titre{font-size:clamp(28px,min(3vw,5.6vh),42px);color:#fff;text-wrap:balance}\nrdr-partenaire .tuiles{--col:6;--g:clamp(10px,1.2vw,16px);display:flex;flex-wrap:wrap;justify-content:center;gap:var(--g)}\nrdr-partenaire .tuile{flex:0 0 calc((100% - (var(--col) - 1) * var(--g)) / var(--col));min-width:0;position:relative;display:grid;grid-template-rows:minmax(0,1fr) auto;aspect-ratio:6/5;padding:14px 12px 12px;border-radius:var(--tuile);background:#fff;color:var(--encre);text-decoration:none;box-shadow:0 18px 30px -22px rgba(0,0,0,.5);transition:transform .25s var(--ease),box-shadow .25s}\nrdr-partenaire .tuile:focus-visible{outline:3px solid var(--jaune);outline-offset:3px}\nrdr-partenaire .tu-logo{display:grid;place-items:center;min-height:0}\nrdr-partenaire .tu-logo img{max-width:70%;max-height:76%;width:auto;height:auto;object-fit:contain}\nrdr-partenaire .tu-nom{font:700 12px/1.3 var(--police);text-align:center;color:var(--encre2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;transition:color .2s}\n@media (hover:hover){\nrdr-partenaire .tuile:hover{transform:translateY(-3px);box-shadow:0 24px 36px -22px rgba(0,0,0,.55)}\nrdr-partenaire .tuile:hover .tu-nom{color:var(--vert1)}\n}\nrdr-partenaire .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-partenaire .rv.vu{opacity:1;transform:none}\n@media (max-height:820px) and (min-width:751px){\nrdr-partenaire .haut h1{font-size:clamp(38px,min(4.6vw,8.4vh),64px)}\nrdr-partenaire .haut-acc{font-size:16px}\nrdr-partenaire .texte{font-size:16px}\n}\n@media (max-width:1000px) and (min-width:751px){\nrdr-partenaire .corps-grille{grid-template-columns:minmax(0,1fr)}\nrdr-partenaire .cote{position:static;max-width:560px}\nrdr-partenaire .tuiles{--col:4}\n}\n@media (max-width:750px){\nrdr-partenaire{font-size:15px}\nrdr-partenaire .haut{padding-top:14px}\nrdr-partenaire .fil{flex-direction:column;align-items:flex-start;gap:0}\nrdr-partenaire .fil .sep{display:none}\nrdr-partenaire .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-partenaire .haut-grille{grid-template-columns:minmax(0,1fr);gap:22px}\nrdr-partenaire .haut h1{font-size:clamp(32px,9.6vw,44px)}\nrdr-partenaire .haut h1.long{font-size:clamp(26px,7.6vw,34px)}\nrdr-partenaire .haut-acc{font-size:15.5px}\nrdr-partenaire .haut-logo{width:170px;transform:rotate(.8deg)}\nrdr-partenaire .bande{border-radius:22px 3px 14px 3px}\nrdr-partenaire .corps-grille{grid-template-columns:minmax(0,1fr);gap:28px}\nrdr-partenaire .cote{position:static;order:-1}\nrdr-partenaire .texte{font-size:15.5px;line-height:1.72}\nrdr-partenaire .texte .lead{font-size:17px}\nrdr-partenaire .texte .inter{font-size:16.5px}\nrdr-partenaire .tuiles{--col:3;--g:8px}\nrdr-partenaire .tuile{aspect-ratio:1/1.08;padding:10px 6px 8px;border-radius:12px 3px 12px 3px}\nrdr-partenaire .tu-nom{font-size:10.5px}\nrdr-partenaire .memes-tete .btn{width:100%;justify-content:space-between}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-partenaire *{animation:none !important;transition:none !important}\nrdr-partenaire .rv,rdr-partenaire .rv.vu{opacity:1;transform:none}\n}\n@media (max-width:750px){\nrdr-partenaire{--colle:60px}\n}";
  const GABARIT = "<div class=\"rpf-page\" id=\"partenaire\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame haut-grille\" id=\"haut-in\"></div>\n  </header>\n  <div class=\"trame\" id=\"bande-in\"></div>\n  <section class=\"corps\" id=\"texte\" aria-label=\"Présentation\"></section>\n  <section class=\"memes\" id=\"memes\" aria-labelledby=\"t-memes\"></section></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/partenaire';
  const ATTENTE = "<div class=\"rpf-attente\" aria-hidden=\"true\"><div class=\"rpf-sq-haut\"><div class=\"rpf-sq-trame\"><i class=\"rpf-sq-l rpf-sq-k\"></i><i class=\"rpf-sq-l rpf-sq-t\"></i><i class=\"rpf-sq-l rpf-sq-t rpf-sq-t2\"></i><i class=\"rpf-sq-l rpf-sq-p rpf-sq-p1\"></i><i class=\"rpf-sq-l rpf-sq-p\"></i><i class=\"rpf-sq-l rpf-sq-p rpf-sq-p3\"></i></div></div><div class=\"rpf-sq-trame rpf-sq-sec\"><i class=\"rpf-sq-l rpf-sq-k\"></i><i class=\"rpf-sq-l rpf-sq-t\"></i><i class=\"rpf-sq-l rpf-sq-p rpf-sq-p1\"></i><i class=\"rpf-sq-l rpf-sq-p\"></i><i class=\"rpf-sq-l rpf-sq-p rpf-sq-p3\"></i></div><div class=\"rpf-sq-trame rpf-sq-cartes\"><i class=\"rpf-sq-c\"></i><i class=\"rpf-sq-c\"></i><i class=\"rpf-sq-c\"></i></div><div class=\"rpf-sq-trame rpf-sq-sec\"><i class=\"rpf-sq-l rpf-sq-k\"></i><i class=\"rpf-sq-l rpf-sq-t\"></i><i class=\"rpf-sq-l rpf-sq-p rpf-sq-p1\"></i><i class=\"rpf-sq-l rpf-sq-p\"></i><i class=\"rpf-sq-l rpf-sq-p rpf-sq-p3\"></i></div></div>";
  const HALL = {"fr":"/nos-partenaires","en":"/en/nos-partenaires"};
  const RETOUR = {"fr":"Retour aux partenaires","en":"Back to partners"};

  function poserStyle() {
    if (document.getElementById("rdr-partenaire-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-partenaire-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  

  const GARDEES = /^(P|STRONG|EM|U|UL|OL|LI|BR|A)$/;
  const JETEES = /^(SCRIPT|STYLE|IFRAME|OBJECT|EMBED|TEMPLATE|NOSCRIPT|TEXTAREA|SELECT|SVG|MATH)$/i;
  function purger(racine) {
    [...racine.querySelectorAll('*')].reverse().forEach((e) => {
      if (!GARDEES.test(e.tagName)) { if (JETEES.test(e.tagName)) e.remove(); else e.replaceWith(...e.childNodes); return; }
      for (const a of [...e.attributes]) if (!(e.tagName === 'A' && a.name === 'href' && /^(https?:|mailto:|tel:|\/(?!\/))/i.test(a.value.trim()))) e.removeAttribute(a.name);
    });
  }

  



  function demarrer(D, HOTE) {
    const FOND_PAGE = HOTE.querySelector("#partenaire");
    const PAGE = D.page, ARCS = D.arcs, RANGS = D.rangs, PARTENAIRES = [D.partenaire].concat(D.autres);
const LU = {
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';
const W = 'https://static.wixstatic.com/';
const PHOTO = (m, l, h) => W + 'media/' + m.id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_80,enc_auto/x.jpg';
const LOGO = (m, l, h) => !m ? '' : m.svg ? W + 'shapes/' + m.svg : W + 'media/' + m.id + '/v1/fit/w_' + Math.min(l, m.l || l) + ',h_' + Math.min(h, m.h || h) + ',q_90,enc_auto/x.png';
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const FINE = String.fromCharCode(0x202F);
let L = 'fr', X = PAGE.langues.fr, P = null;
const typo = (t) => { t = t.replace(/'/g, '’'); if (L === 'fr') t = t.replace(/ ([?!:;])/g, FINE + '$1'); return t; };
const T = (s) => typo(esc(String(s == null ? '' : s))).replace(/Rhum - Destination/g, '<span class="nw">Rhum -</span> Destination');
const $ = (id) => (FOND_PAGE.id === id ? FOND_PAGE : FOND_PAGE.querySelector('[id="' + id + '"]'));
const nom = (p) => p.nom[L] || p.nom.fr;
const lien = (p) => (L === 'en' ? '/en' : '') + p.lien;
const slug = (p) => { const s = p.lien.split('/').pop(); try { return decodeURIComponent(s); } catch (e) { return s; } };
const titres = RANGS.flatMap((r) => [r.titre.fr, r.titre.en]).map((s) => s.toLowerCase());
const accroche = (p) => { const a = (p.accroche[L] || '').trim(); const b = a.toLowerCase(); return !a || b === nom(p).toLowerCase() || titres.includes(b) ? '' : a; };
const img = (src, cls, alt, extra) => src ? '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + esc(src) + '" alt="' + esc(alt || '') + '"' + (extra || ' loading="lazy"') + ' decoding="async">' : '';
const domaine = (u) => String(u || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
const rangDe = (p) => RANGS.find((r) => r.cle === p.rang);



function texte(html) {
  const d = document.implementation.createHTMLDocument('').createElement('div');
  d.innerHTML = html;
  purger(d);
  const w = d.ownerDocument.createTreeWalker(d, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) n.nodeValue = typo(n.nodeValue);
  [...d.children].forEach((p, k) => {
    if (p.tagName !== 'P') return;
    const seul = p.children.length && [...p.childNodes].every((c) => c.nodeName === 'STRONG' || c.nodeName === 'BR' || (c.nodeType === 3 && !c.nodeValue.trim()));
    if (!seul) return;
    if (k === 0) p.className = 'lead';
    else if (p.textContent.trim().length < 120) p.className = 'inter';
  });
  d.querySelectorAll('a[href]').forEach((a) => { if (/^https?:/.test(a.getAttribute('href'))) { a.target = '_blank'; a.rel = 'noopener'; } });
  return d.innerHTML;
}

function haut() {
  const r = rangDe(P), a = accroche(P);
  $('haut-in').innerHTML = '<div><nav class="fil" aria-label="' + esc(X.fil) + '"><a href="' + esc(X.hallLien) + '">' + SVG('arrowLeft') + T(X.hall) + '</a>' +
    (r ? '<span class="fil-rang"><span class="sep" aria-hidden="true">/</span><a href="' + esc(X.hallLien + '#' + r.cle) + '">' + T(r.titre[L]) + '</a></span>' : '') + '</nav>' +
    '<h1 class="titre' + (nom(P).length > 30 ? ' long' : '') + '" id="t-haut">' + T(nom(P)) + '</h1>' + (a ? '<p class="haut-acc">' + T(a) + '</p>' : '') + '</div>' +
    (P.logo ? '<div class="haut-logo">' + img(LOGO(P.logo, 520, 330), '', P.alt.logo || nom(P), ' loading="eager" fetchpriority="high"') + '</div>' : '');
  

  const b = P.bande;
  $('haut').classList.toggle('a-bande', !!b);
  if (b) {
    const ratio = b.l && b.h ? b.l / b.h : 3;
    const tel = innerWidth <= 750;
    const larg = Math.min(innerWidth - 2 * (tel ? 20 : 40), 1240);
    const h = Math.round(Math.min(larg / ratio, innerHeight * (tel ? .36 : .44)));
    const bl = Math.min(larg, Math.round(h * ratio));
    FOND_PAGE.style.setProperty('--bande-h', h + 'px');
    const l2 = Math.min(1600, b.l || 1600);
    $('bande-in').innerHTML = '<figure class="bande"' + (bl < larg ? ' style="max-width:' + bl + 'px"' : '') + '>' + img(PHOTO(b, l2, Math.round(l2 / ratio)), '', P.alt.bande || '', ' loading="eager"') + '</figure>';
  } else $('bande-in').innerHTML = '';
  const [x, y, l, hh] = ARCS.crop;
  FOND_PAGE.style.setProperty('--arcs', 'url("' + W + 'media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + hh + '/fit/w_1200,h_1200,q_85/x.png")');
}
function corps() {
  const t = (P.texte && (P.texte[L] || P.texte.fr)) || '';
  const r = rangDe(P);
  const cote = '<aside class="cote rv">' +
    (P.site ? '<p class="cote-sur">' + T(X.savoir) + '</p><a class="btn btn--marine" href="' + esc(P.site) + '" target="_blank" rel="noopener" aria-label="' + esc((P.siteTexte || domaine(P.site)) + ' (' + X.onglet + ')') + '"><span>' + esc(P.siteTexte || domaine(P.site)) + '</span>' + SVG('arrowUpRight', 'ico--sort') + '</a>' : '') +
    (r ? '<p class="cote-rang">' + T(X.rang) + '<a href="' + esc(X.hallLien + '#' + r.cle) + '">' + T(r.titre[L]) + '</a></p>' : '') +
    '<a class="retour" href="' + esc(X.hallLien) + '">' + SVG('arrowLeft') + T(X.retour) + '</a></aside>';
  $('texte').setAttribute('aria-label', X.presentation);
  $('texte').innerHTML = '<div class="trame corps-grille' + (t ? '' : ' sans-texte') + '">' + (t ? '<article class="texte rv">' + texte(t) + '</article>' : '') + cote + '</div>';
}
 
function memes() {
  let r = rangDe(P), liste = r ? PARTENAIRES.filter((p) => p.rang === r.cle && p.id !== P.id && p.nom.fr !== P.nom.fr) : [];
  if (liste.length < 2) { r = RANGS.find((x) => x.cle === 'principaux'); liste = PARTENAIRES.filter((p) => p.rang === 'principaux' && p.id !== P.id && p.nom.fr !== P.nom.fr); }
  if (!liste.length) { $('memes').hidden = true; return; }
  $('memes').hidden = false;
  $('memes').innerHTML = '<div class="trame"><div class="memes-tete rv"><h2 class="titre memes-titre" id="t-memes">' + T(r.titre[L]) + '</h2>' +
    '<a class="btn btn--blanc" href="' + esc(X.hallLien) + '">' + T(X.toutVoir) + SVG('arrowRight', 'ico--glisse') + '</a></div>' +
    '<div class="tuiles">' + liste.map((p) => '<a class="tuile rv" href="' + esc(lien(p)) + '"><span class="tu-logo">' + img(LOGO(p.logo, 280, 180), '', '') + '</span><span class="tu-nom">' + T(nom(p)) + '</span></a>').join('') + '</div></div>';
}

const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  const cibles = [...HOTE.querySelectorAll('.rv')];
  if (reduit || !('IntersectionObserver' in window)) { cibles.forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -4% 0px', threshold: 0.04 });
  cibles.forEach((e) => vus.observe(e));
}
function monter(lang, p) {
  L = PAGE.langues[lang] ? lang : 'fr'; X = PAGE.langues[L]; P = p;
  
  haut(); corps(); memes(); reveler();
  
}
    monter(D.lang in PAGE.langues ? D.lang : Object.keys(PAGE.langues)[0], D.partenaire);
  }

  class RdrPartenaire extends HTMLElement {
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
    

    _slug() {
      let s = this.getAttribute('slug') || location.pathname.split('/').filter(Boolean).pop() || '';
      try { s = decodeURIComponent(s); } catch (e) {   }
      return s;
    }
    _valide(D) { return !!(D && D.page && D.page.langues && Object.keys(D.page.langues).length && D.arcs && Array.isArray(D.rangs) && D.partenaire && D.partenaire.nom && D.partenaire.lien && Array.isArray(D.autres)); }
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
      const fond = this.querySelector('.rpf-page');
      fond.classList.add('rpf-calme');
      try { demarrer(D, this); } catch (e) { console.error('[rdr-partenaire]', e); }
      void fond.offsetHeight;
      fond.classList.remove('rpf-calme');
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const slug = this._slug();
      if (!slug) { this._introuvable(); return; }
      const u = (this.getAttribute('source') || SOURCE) + '?slug=' + encodeURIComponent(slug) + '&lang=' + this._lang();
      fetch(u).then((r) => (r.status === 404 ? 404 : r.ok ? r.json() : null)).then((j) => {
        if (j === 404) return this._introuvable();
        if (this._valide(j)) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rpf-vide"><h3>' + (en ? "This page will be back in a moment" : "La fiche partenaire revient dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }
    _introuvable() {
      if (this._monte) return;
      const l = this._lang() === 'en' ? 'en' : 'fr';
      this.innerHTML = '<div class="rpf-vide rpf-introuvable"><h3>' + {"fr":"Partenaire introuvable","en":"Partner not found"}[l] + '</h3><a href="' + HALL[l] + '">' + RETOUR[l] + '</a></div>';
    }
  }
  customElements.define("rdr-partenaire", RdrPartenaire);
})();
})();
