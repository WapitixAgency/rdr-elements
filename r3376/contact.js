/* rdr-elements contact | source route-du-rhum 2bb3f88 | rdr-contact.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["contact"]="2bb3f88";performance.mark("rdr-elements:contact")}catch(e){}
;(function(){
(function () {
  if (typeof customElements === 'undefined' || customElements.get("rdr-contact")) return;
  const CSS = "rdr-contact{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-contact .rcn-page{display:block}\nrdr-contact .rcn-calme *,rdr-contact .rcn-calme *::before,rdr-contact .rcn-calme *::after{transition:none !important}\nrdr-contact .rcn-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#E2EFEE}\nrdr-contact .rcn-sq-haut{display:flex;align-items:center;min-height:calc(clamp(62px,10.6vh,112px) + clamp(85px,13vh,165px) + 1.06 * clamp(40px,min(4.6vw,8.4vh),68px));background:#00676E}\nrdr-contact .rcn-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-contact .rcn-sq-l,rdr-contact .rcn-sq-c{position:relative;display:block;overflow:hidden}\nrdr-contact .rcn-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-contact .rcn-sq-k{width:120px;height:11px}\nrdr-contact .rcn-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-contact .rcn-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-contact .rcn-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-contact .rcn-sq-p1{margin-top:30px}\nrdr-contact .rcn-sq-p3{width:min(380px,62%)}\nrdr-contact .rcn-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-contact .rcn-sq-sec .rcn-sq-l{background:rgba(14,17,29,.08)}\nrdr-contact .rcn-sq-sec .rcn-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-contact .rcn-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-contact .rcn-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-contact .rcn-sq-l::after,rdr-contact .rcn-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rcn-sq-luire 1.6s ease-in-out infinite}\nrdr-contact .rcn-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-contact .rcn-sq-sec .rcn-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-contact .rcn-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rcn-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-contact .rcn-sq-haut{min-height:calc(70px + clamp(50px,7.8vh,76px) + 1.06 * clamp(34px,10.4vw,44px) + clamp(75px,20vw,95px))}rdr-contact .rcn-sq-cartes{grid-template-columns:1fr}rdr-contact .rcn-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-contact .rcn-sq-l::after,rdr-contact .rcn-sq-c::after{animation:none;display:none}}\nrdr-contact .rcn-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#00676E;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-contact .rcn-vide h3{margin:0;font-size:22px}\nrdr-contact .rcn-vide p{margin:0;color:rgba(255,255,255,.82)}\nrdr-contact .rcn-vide button{min-height:44px;padding:0 20px;border:2px solid #fff;border-radius:3px 15px 3px 15px;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-contact{--vert1:#00676E;--marine:#191D31;--bleu:#4DA8DE;--vert2:#419992;--jaune:#FCDD00; --marine2:#16355D;--teinte:#E2EFEE; --encre:#191D31;--encre2:rgba(25,29,49,.8);--filet:rgba(25,29,49,.12); --pied:#0E111D; --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px); --entete:175px;--colle:56px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;--photo:32px 4px 20px 4px; --photo-h:clamp(170px,26vh,330px); --air:1.5; --pad-b:calc(clamp(56px,9vh,100px) * var(--air)); --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-contact{--air:1.3;--entete:120px;--colle:60px;--marge:20px;--photo-h:clamp(150px,40vw,190px);--pad-b:calc(52px * var(--air))}\n}\nrdr-contact *{box-sizing:border-box}\nrdr-contact{margin:0;background:#fff;color:var(--encre);font:16px/1.7 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-contact img{display:block;max-width:100%}\nrdr-contact a{color:inherit}\nrdr-contact h1,rdr-contact h2,rdr-contact h3,rdr-contact p,rdr-contact figure,rdr-contact ol,rdr-contact ul{margin:0}\nrdr-contact ol,rdr-contact ul{padding:0;list-style:none}\nrdr-contact button,rdr-contact input,rdr-contact textarea{font:inherit;color:inherit}\nrdr-contact [hidden]{display:none !important}\nrdr-contact .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-contact .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.06;letter-spacing:.002em}\nrdr-contact .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-contact .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-contact .nw{white-space:nowrap}\nrdr-contact .rcn-page>header,rdr-contact #question,rdr-contact #contacts{scroll-margin-top:calc(var(--colle) + 16px)}\nrdr-contact .btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:700 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s}\nrdr-contact .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-contact .btn:hover .ico--glisse{transform:translateX(3px)}}@media (hover:hover) and (pointer:fine){rdr-contact .btn:hover .ico--descend{transform:translateY(2px)}}\nrdr-contact .btn:focus-visible{outline:3px solid var(--jaune);outline-offset:3px}\nrdr-contact .btn--jaune{background:var(--jaune);border-color:var(--jaune);color:var(--marine);box-shadow:0 18px 30px -20px rgba(0,0,0,.55)}@media (hover:hover) and (pointer:fine){rdr-contact .btn--jaune:hover{background:#fff;border-color:#fff;color:var(--marine)}}\nrdr-contact .btn--grand{min-height:54px;padding:12px 22px;font-size:15px}\nrdr-contact .btn--clair{border-color:rgba(255,255,255,.72);color:#fff}@media (hover:hover) and (pointer:fine){rdr-contact .btn--clair:hover{background:#fff;border-color:#fff;color:var(--marine)}}\nrdr-contact .btn[disabled]{cursor:progress}\nrdr-contact .sec-titre{font-size:clamp(30px,min(3.4vw,6vh),48px);line-height:1.1;color:var(--marine2);text-wrap:balance}\nrdr-contact .haut{position:relative;isolation:isolate;overflow:hidden;background:var(--vert1);color:#fff;padding:clamp(26px,5vh,56px) 0 calc(var(--photo-h) / 2 + clamp(26px,4vh,40px))}\nrdr-contact .haut-arcs{--mo-l:clamp(250px,calc(100vw - 960px),520px);position:absolute;z-index:-1;top:calc(var(--mo-l) * -.08);right:calc(var(--mo-l) * -.1);width:var(--mo-l);aspect-ratio:1;background:var(--vert2);-webkit-mask:var(--arcs) no-repeat 0 0 / 100% 100%;mask:var(--arcs) no-repeat 0 0 / 100% 100%;transform:scaleX(-1);opacity:.62;pointer-events:none}\nrdr-contact .haut h1{margin-top:clamp(10px,1.6vh,16px);font-size:clamp(40px,min(4.6vw,8.4vh),68px);color:#fff}\nrdr-contact .haut-actions{display:none;flex-wrap:wrap;gap:10px;margin-top:clamp(14px,2.2vh,20px)}\nrdr-contact .haut-suite{position:relative;display:flow-root;background:var(--teinte)}\nrdr-contact .haut-photo{position:relative;z-index:2;height:var(--photo-h);margin-top:calc(var(--photo-h) / -2);border-radius:var(--photo);overflow:hidden;background:#0B6F75;box-shadow:0 28px 46px -34px rgba(25,29,49,.5)}\nrdr-contact .haut-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;transform:scale(1.05);animation:rcn-zoom 14s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rcn-zoom{to{transform:scale(1)}}\nrdr-contact .joindre{position:relative;background:var(--teinte);padding:calc(clamp(36px,5.6vh,64px) * var(--air)) 0 var(--pad-b)}\nrdr-contact .jo-grille{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);grid-template-areas:\"contacts question\";gap:clamp(24px,2.8vw,40px);align-items:start}\nrdr-contact .question{grid-area:question;min-width:0}\nrdr-contact .contacts{grid-area:contacts;min-width:0}\nrdr-contact .ct-liste{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(12px,1.2vw,16px)}\nrdr-contact .li{display:flex;flex-direction:column;min-width:0;border-radius:var(--carte);background:#fff;box-shadow:0 22px 40px -32px rgba(25,29,49,.5);overflow:hidden;transition:transform .3s var(--ease),box-shadow .3s}\n@media (hover:hover) and (pointer:fine){\nrdr-contact .li:hover{transform:translateY(-3px);box-shadow:0 28px 44px -30px rgba(25,29,49,.55)}\n}\nrdr-contact .li-tete{flex:1;display:grid;grid-template-columns:auto minmax(0,1fr);grid-template-rows:auto 1fr;column-gap:14px;min-width:0;padding:clamp(16px,1.4vw,20px) clamp(16px,1.4vw,20px) clamp(14px,1.2vw,18px)}\nrdr-contact .li-pic{grid-row:1 / span 2;display:grid;place-items:center;width:42px;height:42px;border-radius:12px 3px 12px 3px;background:var(--vert1);color:#fff}\nrdr-contact .li-pic .ico{width:21px;height:21px}\nrdr-contact .li-fonction{align-self:center;font:italic 400 clamp(17px,1.3vw,19px)/1.14 var(--titre);text-transform:uppercase;color:var(--marine2);text-wrap:balance;overflow-wrap:break-word}\nrdr-contact .li-nom{margin-top:6px;font:600 15px/1.4 var(--police);color:var(--encre)}\nrdr-contact .li-liens{display:flex;border-top:1px solid var(--filet)}\nrdr-contact .li-lien{display:flex;align-items:center;gap:9px;min-width:0;min-height:48px;padding:6px 9px;border:0;background:none;color:var(--marine);font:700 13px/1.3 var(--police);text-decoration:none;cursor:pointer;transition:background-color .15s,color .15s}\nrdr-contact .li-lien .ico{width:16px;height:16px;color:var(--vert1)}@media (hover:hover) and (pointer:fine){rdr-contact .li-lien:hover{background:var(--teinte);color:var(--vert1)}}\nrdr-contact .li-lien:focus-visible{outline:3px solid var(--marine2);outline-offset:-3px}\nrdr-contact .li-mail{flex:1 1 auto;padding-left:clamp(16px,1.4vw,20px)}\nrdr-contact .li-mot{min-width:0;overflow-wrap:anywhere}\nrdr-contact .li-copier{flex:none;justify-content:center;width:52px;padding:0;border-left:1px solid var(--filet)}\nrdr-contact .li-copier.fait{background:var(--vert1);color:#fff}\nrdr-contact .li-copier.fait .ico{color:#fff}\nrdr-contact .li-mail.fait .li-mot{color:var(--vert1)}\nrdr-contact .qu-carte{position:relative;padding:clamp(24px,2.6vw,36px);border-radius:var(--carte);background:var(--marine);color:#fff;box-shadow:0 34px 60px -36px rgba(25,29,49,.75)}\nrdr-contact .qu-carte::before{content:'';position:absolute;left:clamp(24px,2.6vw,36px);top:-3px;width:56px;height:6px;background:var(--jaune);transform:skewX(-20deg)}\nrdr-contact .question .sec-titre{font-size:clamp(28px,min(2.6vw,5vh),38px);color:#fff}\nrdr-contact .form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 16px;margin-top:clamp(18px,2.6vh,24px)}\nrdr-contact .champ{min-width:0}\nrdr-contact .champ--large{grid-column:1 / -1}\nrdr-contact .champ label{display:block;margin-bottom:6px;font:800 11.5px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.74)}\nrdr-contact .champ label .req{margin-left:3px;color:var(--jaune)}\nrdr-contact .champ input,rdr-contact .champ textarea{display:block;width:100%;height:50px;padding:0 14px;border:1.5px solid rgba(255,255,255,.3);border-radius:var(--angle-p);background:rgba(255,255,255,.07);color:#fff;font:500 15.5px var(--police);transition:border-color .15s,background-color .15s,box-shadow .15s}\nrdr-contact .champ textarea{height:132px;min-height:132px;max-height:340px;padding:12px 14px;line-height:1.55;resize:vertical;overflow-y:hidden}@media (hover:hover) and (pointer:fine){rdr-contact .champ input:hover,rdr-contact .champ textarea:hover{border-color:rgba(255,255,255,.5)}}\nrdr-contact .champ input:focus,rdr-contact .champ textarea:focus{outline:none;border-color:var(--jaune);background:rgba(255,255,255,.1);box-shadow:0 0 0 3px rgba(252,221,0,.22)}\nrdr-contact .champ.invalide input,rdr-contact .champ.invalide textarea{border-color:var(--jaune);box-shadow:0 0 0 3px rgba(252,221,0,.22)}\nrdr-contact .champ-erreur{display:flex;align-items:flex-start;gap:7px;margin-top:7px;font:600 13.5px/1.4 var(--police);color:var(--jaune)}\nrdr-contact .champ-erreur .ico{width:16px;height:16px;margin-top:1px}\nrdr-contact .form-pied{grid-column:1 / -1;display:flex;align-items:center;gap:14px;margin-top:6px}\nrdr-contact .form-pied .btn[disabled]{opacity:.86}\nrdr-contact .tourne{animation:rcn-tourne .9s linear infinite}\n@keyframes rcn-tourne{to{transform:rotate(360deg)}}\nrdr-contact .form-erreur{grid-column:1 / -1;margin-top:0;padding:12px 14px;border-radius:var(--angle-p);background:rgba(252,221,0,.1);border:1.5px solid rgba(252,221,0,.45)}\nrdr-contact .piege{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}\nrdr-contact .merci{margin-top:clamp(18px,2.6vh,24px);padding:20px;border-radius:var(--carte);background:rgba(255,255,255,.07);border:1.5px solid rgba(252,221,0,.55)}\nrdr-contact .merci-texte{display:flex;align-items:center;gap:14px;font-weight:600;line-height:1.5}\nrdr-contact .merci-texte .ico{width:26px;height:26px;padding:4px;border-radius:var(--angle-p);background:var(--jaune);color:var(--marine);stroke-width:3}\nrdr-contact .merci .btn{margin-top:18px}\nrdr-contact .rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .8s var(--ease)}\nrdr-contact .rv.vu{opacity:1;transform:none}\nrdr-contact .rv.net{transition:none}\nrdr-contact .ct-liste .rv:nth-child(2n){transition-delay:.06s}\n@media (max-height:820px) and (min-width:751px){\nrdr-contact .form{gap:12px 14px}\nrdr-contact .champ input{height:46px}\nrdr-contact .champ textarea{height:112px;min-height:112px}\nrdr-contact .qu-carte{padding:26px}\nrdr-contact .li-tete{padding:15px 16px 13px}\nrdr-contact .li-lien{min-height:46px}\n}\n@media (max-width:1099px){\nrdr-contact .jo-grille{grid-template-columns:minmax(0,1fr);grid-template-areas:\"question\" \"contacts\";gap:calc(30px * var(--air))}\nrdr-contact .question{max-width:680px}\nrdr-contact .haut-actions{display:flex}\n}\n@media (max-width:750px){\nrdr-contact{font-size:15px}\nrdr-contact .haut{padding-top:26px}\nrdr-contact .haut-arcs{--mo-l:58vw;top:-6vw;right:-9vw;opacity:.5}\nrdr-contact .haut h1{font-size:clamp(34px,10.4vw,44px)}\nrdr-contact .haut-photo{border-radius:22px 3px 14px 3px}\nrdr-contact .haut-actions .btn{min-height:44px;padding:9px 16px;font-size:13.5px}\nrdr-contact .joindre{padding-top:calc(30px * var(--air))}\nrdr-contact .jo-grille{gap:calc(26px * var(--air))}\nrdr-contact .qu-carte{padding:26px 18px 20px;border-radius:22px 3px 14px 3px}\nrdr-contact .qu-carte::before{left:18px}\nrdr-contact .question .sec-titre{font-size:clamp(26px,7.6vw,30px)}\nrdr-contact .form{grid-template-columns:1fr;gap:12px}\nrdr-contact .form-pied .btn{width:100%;justify-content:space-between}\nrdr-contact .merci{padding:18px 16px}\nrdr-contact .merci .btn{width:100%;justify-content:flex-start;padding:10px 16px;text-align:left}\n}\n@media (max-width:640px){\nrdr-contact .ct-liste{grid-template-columns:minmax(0,1fr);gap:10px}\nrdr-contact .li{border-radius:18px 3px 12px 3px}\nrdr-contact .li-tete{column-gap:12px;padding:14px 14px 12px}\nrdr-contact .li-pic{width:38px;height:38px}\nrdr-contact .li-pic .ico{width:19px;height:19px}\nrdr-contact .li-fonction{font-size:17px}\nrdr-contact .li-nom{margin-top:4px;font-size:14.5px}\nrdr-contact .li-mail{padding-left:14px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-contact *{animation:none !important;transition:none !important}\nrdr-contact .rv{opacity:1;transform:none}\nrdr-contact .haut-photo img{transform:none}\n}";
  const GABARIT = "<div class=\"rcn-page\" id=\"nous-contacter\"><header class=\"haut\" id=\"haut\" aria-labelledby=\"t-haut\">\n    <div class=\"haut-arcs\" aria-hidden=\"true\"></div>\n    <div class=\"trame\" id=\"haut-txt\"></div>\n  </header>\n  <div class=\"haut-suite\"><div class=\"trame\"><figure class=\"haut-photo\" id=\"haut-photo\"></figure></div></div>\n  <section class=\"joindre\" id=\"joindre\" aria-labelledby=\"t-haut\">\n    <div class=\"trame jo-grille\">\n      <div class=\"question\" id=\"question\"></div>\n      <div class=\"contacts\" id=\"contacts\" role=\"region\" aria-labelledby=\"t-contacts\"></div>\n    </div>\n  </section></div>";
  const ATTENTE = "<div class=\"rcn-attente\" aria-hidden=\"true\"><div class=\"rcn-sq-haut\"><div class=\"rcn-sq-trame\"><i class=\"rcn-sq-l rcn-sq-k\"></i><i class=\"rcn-sq-l rcn-sq-t\"></i><i class=\"rcn-sq-l rcn-sq-t rcn-sq-t2\"></i><i class=\"rcn-sq-l rcn-sq-p rcn-sq-p1\"></i><i class=\"rcn-sq-l rcn-sq-p\"></i><i class=\"rcn-sq-l rcn-sq-p rcn-sq-p3\"></i></div></div><div class=\"rcn-sq-trame rcn-sq-sec\"><i class=\"rcn-sq-l rcn-sq-k\"></i><i class=\"rcn-sq-l rcn-sq-t\"></i><i class=\"rcn-sq-l rcn-sq-p rcn-sq-p1\"></i><i class=\"rcn-sq-l rcn-sq-p\"></i><i class=\"rcn-sq-l rcn-sq-p rcn-sq-p3\"></i></div><div class=\"rcn-sq-trame rcn-sq-cartes\"><i class=\"rcn-sq-c\"></i><i class=\"rcn-sq-c\"></i><i class=\"rcn-sq-c\"></i></div><div class=\"rcn-sq-trame rcn-sq-sec\"><i class=\"rcn-sq-l rcn-sq-k\"></i><i class=\"rcn-sq-l rcn-sq-t\"></i><i class=\"rcn-sq-l rcn-sq-p rcn-sq-p1\"></i><i class=\"rcn-sq-l rcn-sq-p\"></i><i class=\"rcn-sq-l rcn-sq-p rcn-sq-p3\"></i></div></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/contact';
  const ATTENTE_REPONSE_MS = 12000;

  function poserStyle() {
    if (document.getElementById("rdr-contact-css")) return;
    const st = document.createElement('style');
    st.id = "rdr-contact-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  



  function demarrer(D, HOTE, racine) {
    const PAGE = D.page, ARCS = D.arcs;
    Object.keys(PAGE.langues).forEach((l) => { const f = PAGE.langues[l].f; ['ecrireA', 'copier'].forEach((k) => { if (typeof f[k] === 'string') { const s = f[k]; f[k] = (n, e) => s.split('{n}').join(n).split('{e}').join(e); } }); });
 
const LU = {
  clipboardList: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  tent: '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
  megaphone: '<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/>',
  sprout: '<path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"/><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"/><path d="M5 21h14"/>',
  sailboat: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  building2: '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  newspaper: '<path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/>',
  mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  circleAlert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  wifiOff: '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
  loaderCircle: '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
  penLine: '<path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>'
};
const SVG = (n, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + LU[n] + '</svg>';

 
const IMG = (p, l, h, q) => 'https://static.wixstatic.com/media/' + p.id + '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 80) + ',enc_auto/x.jpg';
 
const jeu = (p, ratio, largeurs) => [...new Set(largeurs.map((l) => Math.min(l, p.l)))].map((l) => IMG(p, l, Math.round(l * ratio)) + ' ' + l + 'w').join(', ');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));



const FINE = String.fromCharCode(8239), NB = String.fromCharCode(160);
let L = 'fr', TX = PAGE.langues.fr;
const T = (s) => {
  let t = esc(s).replace(/&#39;/g, '’');
  if (L === 'fr') t = t.replace(/ ([?!;])/g, FINE + '$1').replace(/ :/g, NB + ':');
  return t.replace(/\//g, '/<wbr>').replace(/([A-Za-zÀ-ÿ0-9’]+-[A-Za-zÀ-ÿ0-9’-]+)/g, '<span class="nw">$1</span>');
};
 
const ADR = (e) => esc(e).replace('@', '@<wbr>');
const $ = (id) => (racine.id === id ? racine : racine.querySelector('[id="' + id + '"]'));
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
const parLangue = (v) => (v && typeof v === 'object' ? v[L] || v.fr : v);
{
  const [x, y, l, h] = ARCS.crop;
  racine.style.setProperty('--arcs', 'url("https://static.wixstatic.com/media/' + ARCS.id + '/v1/crop/x_' + x + ',y_' + y + ',w_' + l + ',h_' + h + '/fit/w_1040,h_1040,q_85,enc_auto/x.png")');
}

 
function haut() {
  const p = PAGE.photo;
  $('haut-txt').innerHTML = '<h1 class="titre" id="t-haut">' + T(TX.titre) + '</h1>' +
    '<div class="haut-actions"><a class="btn btn--clair" href="#contacts">' + T(TX.f.contacts) + SVG('arrowDown', 'ico--descend') + '</a></div>';
  $('haut-photo').innerHTML = '<img src="' + IMG(p, 1600, 420) + '" srcset="' + jeu(p, .2625, [800, 1240, 1600, 2000]) + '" sizes="(max-width:1320px) 94vw, 1240px" alt="' + esc(TX.f.alt) + '" fetchpriority="high" decoding="async">';
}
function contacts() {
  $('contacts').innerHTML = '<h2 class="sr" id="t-contacts">' + T(TX.f.contacts) + '</h2><ul class="ct-liste">' + PAGE.contacts.map((c, i) =>
    '<li class="li rv"><div class="li-tete"><span class="li-pic" aria-hidden="true">' + SVG(c.picto) + '</span>' +
      '<h3 class="li-fonction">' + T(parLangue(c.fonction)) + '</h3><p class="li-nom">' + T(c.nom) + '</p></div>' +
    '<div class="li-liens"><a class="li-lien li-mail" id="mail-' + i + '" href="mailto:' + esc(c.email) + '" aria-label="' + esc(TX.f.ecrireA(c.nom, c.email)) + '">' + SVG('mail') + '<span class="li-mot">' + ADR(c.email) + '</span></a>' +
      '<button type="button" class="li-lien li-copier" data-i="' + i + '" aria-label="' + esc(TX.f.copier(c.nom)) + '" title="' + esc(TX.f.copier(c.nom)) + '">' + SVG('copy') + '</button></div></li>').join('') + '</ul>' +
    '<p class="sr" id="ct-annonce" aria-live="polite"></p>';
}
function question() {
  const F = PAGE.formulaire;
  const champs = F.champs.map((c, i) => {
    const id = 'ch-' + c.cle, err = 'err-' + c.cle;
    const attrs = ' id="' + id + '" name="' + c.cle + '" autocomplete="' + c.auto + '"' + (c.requis ? ' required aria-required="true"' : '') + ' aria-describedby="' + err + '"';
    const saisie = c.type === 'textarea' ? '<textarea' + attrs + ' rows="4"></textarea>' : '<input' + attrs + ' type="' + c.type + '"' + (c.type === 'email' ? ' inputmode="email" spellcheck="false"' : '') + '>';
    return '<div class="champ' + (c.demi ? '' : ' champ--large') + '"><label for="' + id + '">' + T(TX.champs[i]) + (c.requis ? '<span class="req" aria-hidden="true">*</span>' : '') + '</label>' + saisie +
      '<p class="champ-erreur" id="' + err + '" hidden></p></div>';
  }).join('');
  $('question').innerHTML = '<div class="qu-carte rv"><h2 class="titre sec-titre" id="t-question">' + T(TX.question) + '</h2>' +
    '<form class="form" id="form-contact" aria-labelledby="t-question" novalidate>' + champs +
      '<div class="piege" aria-hidden="true"><label>Site<input type="text" name="site" tabindex="-1" autocomplete="off"></label></div>' +
      '<div class="form-pied"><button type="submit" class="btn btn--jaune btn--grand" id="envoyer"><span>' + T(TX.envoyer) + '</span>' + SVG('send', 'ico--glisse') + '</button></div>' +
      '<p class="champ-erreur form-erreur" id="form-erreur" role="alert" hidden>' + SVG('wifiOff') + '<span>' + T(TX.f.erreur) + '</span></p></form>' +
    '<div class="merci" id="merci" role="status" tabindex="-1" hidden><p class="merci-texte">' + SVG('check') + '<span>' + T(TX.merci) + '</span></p>' +
      '<button type="button" class="btn btn--clair" id="autre">' + SVG('penLine') + '<span>' + T(TX.f.autre) + '</span></button></div></div>';
}

 
function copier(texte) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texte);
  return new Promise((ok, ko) => {
    const t = document.createElement('textarea'); t.value = texte; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;left:-9999px;top:0';
    racine.appendChild(t); t.select();
    try { document.execCommand('copy') ? ok() : ko(new Error('copie refusée')); } catch (e) { ko(e); } finally { t.remove(); }
  });
}
function brancherContacts() {
  if ($('contacts').dataset.branche) return;
  $('contacts').dataset.branche = '1';
  $('contacts').addEventListener('click', (e) => {
    const b = e.target.closest('.li-copier'); if (!b) return;
    const i = +b.dataset.i, c = PAGE.contacts[i], lien = $('mail-' + i), mot = lien.querySelector('.li-mot');
    const fini = () => {
      b.classList.add('fait'); lien.classList.add('fait'); b.innerHTML = SVG('check'); mot.textContent = TX.f.copie;
      $('ct-annonce').textContent = TX.f.copie + ' : ' + c.email;
      clearTimeout(b._t); b._t = setTimeout(() => { b.classList.remove('fait'); lien.classList.remove('fait'); b.innerHTML = SVG('copy'); mot.innerHTML = ADR(c.email); }, 1800);
    };
    copier(c.email).then(fini, fini);
  });
}






const DUREE_MIN = 1500;
let dessineA = 0;
const forme = () => $('form-contact');
function erreurChamp(input, message) {
  const champ = input.closest('.champ'), p = champ.querySelector('.champ-erreur');
  champ.classList.toggle('invalide', !!message); input.setAttribute('aria-invalid', String(!!message));
  p.innerHTML = message ? SVG('circleAlert') + '<span>' + T(message) + '</span>' : ''; p.hidden = !message;
}
function verifierChamp(input) {
  const v = input.value.trim();
  if (input.required && !v) return TX.f.requis;
  if (input.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return TX.f.emailInvalide;
  return '';
}
function verifier() {
  let premier = null;
  forme().querySelectorAll('.champ input, .champ textarea').forEach((x) => { const m = verifierChamp(x); erreurChamp(x, m); if (m && !premier) premier = x; });
  return premier;
}
function valeurs() {
  const v = {};
  PAGE.formulaire.champs.forEach((c) => { const x = forme().elements[c.cle]; if (x && x.value.trim()) v[c.cle] = x.value.trim(); });
  return v;
}
function enEnvoi(oui) {
  const b = $('envoyer'); b.disabled = oui; b.setAttribute('aria-busy', String(oui));
  b.innerHTML = oui ? '<span>' + T(TX.f.envoi) + '</span>' + SVG('loaderCircle', 'tourne') : '<span>' + T(TX.envoyer) + '</span>' + SVG('send', 'ico--glisse');
}
function merci() { forme().hidden = true; const m = $('merci'); m.hidden = false; m.focus({ preventScroll: true }); }
function echec() { enEnvoi(false); $('form-erreur').hidden = false; }
function grandir(t) {
  t.style.height = 'auto';
  const h = Math.min(t.scrollHeight + 3, 340);
  t.style.height = Math.max(h, parseFloat(getComputedStyle(t).minHeight) || 0) + 'px';
  t.style.overflowY = t.scrollHeight + 3 > 340 ? 'auto' : 'hidden';
}
function brancherFormulaire() {
  const f = forme(); dessineA = Date.now();
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    $('form-erreur').hidden = true;
    const premier = verifier();
    if (premier) { premier.focus(); return; }
    enEnvoi(true);
    const envoi = { valeurs: valeurs(), dureeMs: Date.now() - dessineA, piege: f.elements.site.value };
    
    HOTE._envoyer(envoi, (etat) => { if (etat === 'ok') { merci(); return; } if (etat === 'erreur:invalide') { enEnvoi(false); const x = forme().querySelector('input[type="email"]'); erreurChamp(x, TX.f.emailInvalide); x.focus(); return; } echec(); });
  });
  f.addEventListener('input', (e) => {
    const x = e.target;
    if (x.tagName === 'TEXTAREA') grandir(x);
    if (x.closest('.champ') && x.closest('.champ').classList.contains('invalide') && !verifierChamp(x)) erreurChamp(x, '');
  });
  $('autre').addEventListener('click', () => {
    f.reset(); f.querySelectorAll('.champ input, .champ textarea').forEach((x) => erreurChamp(x, ''));
    f.querySelectorAll('textarea').forEach(grandir);
    enEnvoi(false); $('form-erreur').hidden = true; $('merci').hidden = true; f.hidden = false; dessineA = Date.now();
    f.elements[PAGE.formulaire.champs[0].cle].focus();
  });
}

 
let vus = null;
function reveler() {
  if (vus) vus.disconnect();
  if (reduit || !('IntersectionObserver' in window)) { racine.querySelectorAll('.rv').forEach((e) => e.classList.add('vu')); return; }
  vus = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); vus.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.02 });
  racine.querySelectorAll('.rv:not(.vu)').forEach((e) => vus.observe(e));
}

 
const colle = () => parseFloat(getComputedStyle(racine).getPropertyValue('--colle')) || 56;
function poser(id, doux) {
  const el = $(id); if (!el) return;
  const y = Math.max(0, Math.round(el.getBoundingClientRect().top + scrollY - colle() - 16));
  if (doux && !reduit) { scrollTo({ top: y, behavior: 'smooth' }); return; }
  const r = document.documentElement.style, avant = r.scrollBehavior;
  r.scrollBehavior = 'auto'; scrollTo(0, y); r.scrollBehavior = avant;
}
function cibleDemandee() {
  let h = ''; try { h = decodeURIComponent(location.hash.slice(1)).trim().toLowerCase(); } catch (e) { h = ''; }
  return h && TX.sections.some((s) => s.id === h) ? h : null;
}
function arriver() {
  const id = cibleDemandee(); if (!id) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  racine.querySelectorAll('#' + id + ' .rv, #' + id + '.rv').forEach((e) => e.classList.add('vu', 'net'));
  poser(id);
  let touche = false;
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => addEventListener(t, () => { touche = true; }, { once: true, passive: true }));
  const recaler = () => { if (!touche && Math.abs($(id).getBoundingClientRect().top - colle() - 16) > .5) poser(id); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recaler);
  addEventListener('load', recaler, { once: true }); let hauteurPage = document.documentElement.scrollHeight; const suivrePage = setInterval(() => { const hp = document.documentElement.scrollHeight; if (hp !== hauteurPage) { hauteurPage = hp; recaler(); } }, 200); setTimeout(() => clearInterval(suivrePage), 4000);
}
 
racine.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute('href').slice(1); if (!$(id)) return;
  e.preventDefault(); $(id).querySelectorAll('.rv').forEach((x) => x.classList.add('vu')); poser(id, true);
  history.replaceState(null, '', '#' + id);
});

function monter(lang) {
  L = PAGE.langues[lang] ? lang : 'fr'; TX = PAGE.langues[L];
  
  haut(); question(); contacts();
  brancherFormulaire(); brancherContacts(); reveler();
}
    monter(D.lang in PAGE.langues ? D.lang : Object.keys(PAGE.langues)[0]);
    arriver();
  }

  const jeuValide = (D) => !!(D && D.page && D.page.photo && D.page.langues && Object.keys(D.page.langues).length === 1 && Array.isArray(D.page.contacts) && D.page.contacts.length > 0 && D.page.formulaire && Array.isArray(D.page.formulaire.champs) && D.page.formulaire.champs.length > 0 && D.arcs);

  class RdrContact extends HTMLElement {
    static get observedAttributes() { return ['jeu', 'pret', 'envoi-etat']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() { clearTimeout(this._minuteur); this._minuteur = null; }
    attributeChangedCallback(nom, avant, val) {
      if (nom === 'pret') {
        const pret = val === 'oui';
        if (pret && !this._pret) { this._pret = true; if (this._attente) this._emettre(); } else this._pret = pret;
        return;
      }
      if (nom === 'envoi-etat') { if (val && val !== avant) this._reponse(String(val).replace(/#.*$/, '')); return; }
      this._tenter();
    }
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
      if (!D.lang) D.lang = Object.keys(D.page.langues)[0];
      

      poserStyle();
      this.innerHTML = GABARIT;
      const fond = this.firstElementChild;
      fond.classList.add('rcn-calme');
      try { demarrer(D, this, fond); } catch (e) { console.error('[rdr-contact]', e); }
      void fond.offsetHeight;
      fond.classList.remove('rcn-calme');
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
      this.innerHTML = '<div class="rcn-vide"><h3>' + (en ? "This page will be back in a moment" : "La page Contact revient dans un instant") + '</h3><p>' + (en ? "The page content could not be loaded." : "Le contenu de la page n’a pas pu être chargé.") + '</p><button type="button">' + (en ? "Try again" : "Réessayer") + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = ATTENTE; this._chercher(); });
    }

    


    _envoyer(envoi, repondre) {
      if (this._envoi) return;
      this._envoi = true;
      this._repondre = repondre;
      this._attente = { valeurs: envoi.valeurs, dureeMs: envoi.dureeMs, piege: envoi.piege || '' };
      clearTimeout(this._garde);
      this._garde = setTimeout(() => this._reponse('erreur:delai'), ATTENTE_REPONSE_MS);
      if (this._pret) this._emettre();
    }
    _emettre() {
      if (!this._attente) return;
      this.dispatchEvent(new CustomEvent('contact-envoi', { detail: this._attente, bubbles: true, composed: true }));
    }
    _reponse(etat) {
      if (!this._envoi || etat === 'envoi') return;
      clearTimeout(this._garde); this._garde = null;
      this._envoi = false; this._attente = null;
      const r = this._repondre; this._repondre = null;
      if (r) r(etat);
    }
  }
  customElements.define("rdr-contact", RdrContact);
})();
})();
