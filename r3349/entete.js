/* rdr-elements entete | source route-du-rhum bed6f46 | rdr-entete.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["entete"]="bed6f46";performance.mark("rdr-elements:entete")}catch(e){}
;(function(){
/* rdr-entete : fichier ASSEMBLÉ par outils/assembler-entete.mjs depuis entete/d/, ne pas le modifier ici. */
;(function () {
'use strict';
if (typeof window === 'undefined' || !window.customElements || window.customElements.get('rdr-entete')) return;
const CSS_ENTETE = "@font-face{font-family:'GL Montserrat';font-style:normal;font-weight:400;font-display:swap;src:url(https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2')}\n@font-face{font-family:'GL Montserrat';font-style:normal;font-weight:700;font-display:swap;src:url(https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2')}\n@font-face{font-family:'Varien';font-style:italic;font-weight:normal;font-display:swap;src:url(https://static.wixstatic.com/ufonts/5fefd8_1e5b9ef92f5440db968e5ef2f46acb27/woff2/file.woff2) format('woff2')}\n:root{\n--gl-marine:#0E111D;--gl-panneau:#1B2237;--gl-teal:#006F7B;--gl-teal-c:#5DBFC0;\n--gl-jaune:#FCDD00;--gl-jaune-p:#FCF150;--gl-orange:#FFB338;\n--gl-titre:'Varien',Impact,'Arial Black',sans-serif;\n--gl-texte:'GL Montserrat','Montserrat',system-ui,sans-serif;\n--gl-gout:clamp(20px,2.4vw,35px);\n--gl-ease:cubic-bezier(.2,.8,.2,1);\n--gl-grain:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .7 0'/></filter><rect width='200' height='200' filter='url(%23g)'/></svg>\");\n}\nhtml.gl-bloque{overflow:hidden}\n.gl,.gl-plein,.gl-palette{font-family:var(--gl-texte);-webkit-font-smoothing:antialiased}\n.gl *,.gl *::before,.gl *::after,.gl-plein *,.gl-plein *::before,.gl-plein *::after,.gl-palette *,.gl-palette *::before,.gl-palette *::after{box-sizing:border-box}\n:where(.gl,.gl-plein,.gl-palette) :where(a){color:inherit;text-decoration:none}\n:where(.gl,.gl-plein,.gl-palette) :where(ul){list-style:none;margin:0;padding:0}\n:where(.gl,.gl-plein,.gl-palette) :where(img){display:block;max-width:none;border:0}\n:where(.gl,.gl-plein,.gl-palette) :where(button){font:inherit;color:inherit;background:none;border:0;margin:0;padding:0;cursor:pointer;text-align:inherit}\n:where(.gl,.gl-plein,.gl-palette) :where(svg){display:block}\n:where(.gl,.gl-plein,.gl-palette) :where(h2,p){margin:0;font-weight:inherit;font-size:inherit}\n.gl :focus-visible,.gl-plein :focus-visible,.gl-palette :focus-visible{outline:2px solid var(--gl-jaune);outline-offset:3px}\n.gl-vh{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.gl svg.gl-drapeau,.gl-plein svg.gl-drapeau{flex:none;width:16px;height:16px;border-radius:50%;overflow:hidden}\n.gl{position:relative;z-index:50;display:block;box-sizing:border-box;width:100%;height:175px;color:var(--gl-marine)}\n.gl-haut{position:relative;z-index:6;display:flex;align-items:center;height:40px;padding:0 var(--gl-gout);background:var(--gl-marine);color:#F7F7F7}\n.gl-reseaux{display:flex;gap:12px;align-items:center}\n.gl-reseaux a{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;transition:opacity .2s}\n.gl-reseaux a:hover{opacity:.7}\n.gl-reseaux img{width:18px;height:18px}\n.gl-services{display:flex;gap:28px;margin-left:auto;margin-right:30px}\n.gl-services a{font-weight:700;font-size:10px;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}\n.gl-services a:hover{color:var(--gl-jaune)}\n.gl-loupe{display:inline-flex;align-items:center;gap:8px;height:28px;margin-left:auto;margin-right:24px;padding:0 4px;font-weight:700;font-size:10px;letter-spacing:.05em;text-transform:uppercase;color:#F7F7F7;white-space:nowrap}\n.gl-loupe svg{width:14px;height:14px}\n.gl-loupe:hover{color:var(--gl-jaune)}\n.gl-loupe+.gl-services{margin-left:0}\n.gl kbd,.gl-palette kbd{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 5px;border-radius:4px;font:700 9.5px/1 var(--gl-texte);letter-spacing:.02em;text-transform:none;background:rgba(255,255,255,.12);color:inherit;box-shadow:inset 0 -1px 0 rgba(255,255,255,.2)}\n.gl-espace{display:flex;align-items:center;justify-content:center;gap:10px;width:200px;height:40px;color:var(--gl-marine);font-weight:700;font-size:11px;letter-spacing:.02em;white-space:nowrap;transform:skewX(-10deg);background:linear-gradient(0deg,#FCDD00 0%,#FFB338 100%)}\n.gl-espace:hover{filter:brightness(1.05)}\n.gl-espace img{width:26px;height:30px;object-fit:contain}\n.gl-langue{position:relative;margin-left:-3px}\n.gl-haut.est-langue{z-index:8}\n.gl-langue-btn{display:flex;align-items:center;gap:7px;height:40px;padding:0 14px 0 16px;border:0;border-radius:0;background:var(--gl-panneau);color:#fff;font:700 11px/1 var(--gl-texte);cursor:pointer;transform:skewX(-10deg)}\n.gl-langue-btn svg:not(.gl-drapeau){width:10px;height:10px;margin-left:2px;transition:transform .2s}\n.gl-langue-btn[aria-expanded=\"true\"] svg:not(.gl-drapeau){transform:rotate(180deg)}\n.gl-langue-btn:hover{color:var(--gl-jaune)}\n.gl-langue-liste{position:absolute;left:0;right:0;top:100%;z-index:30;margin:0;padding:4px 0 6px;list-style:none;background:var(--gl-panneau);box-shadow:0 10px 24px rgba(0,0,0,.3);transform:translateX(-3.5px) skewX(-10deg);transform-origin:0 0}\n.gl-langue-liste[hidden]{display:none}\n.gl-langue-liste a{display:flex;align-items:center;gap:8px;padding:8px 14px 8px 16px;color:rgba(255,255,255,.78);font-weight:700;font-size:11px;white-space:nowrap}\n.gl-langue-liste a:hover,.gl-langue-liste a:focus-visible{color:var(--gl-jaune)}\n.gl-langue-liste a[aria-current=\"true\"]{color:#fff}\n.gl-langues{display:flex;margin-left:-3px}\n.gl-langues a{display:flex;align-items:center;gap:7px;height:40px;padding:0 14px;transform:skewX(-10deg);font-weight:700;font-size:11px;color:rgba(255,255,255,.62)}\n.gl-langues a:hover{color:#fff}\n.gl-langues a[aria-current=\"true\"]{color:#fff;background:var(--gl-panneau)}\n.gl-barre{position:relative;z-index:6;display:flex;align-items:center;height:85px;padding:0 var(--gl-gout);background:#fff}\n.gl-marque{position:relative;display:flex;align-items:center;flex:none;width:130px;height:65px;z-index:2}\n.gl-logo{position:relative;z-index:2;display:block}\n.gl-logo img{width:65px;height:65px}\n.gl-tymal{position:absolute;left:52px;top:-4px;width:72px;height:72px;z-index:1;opacity:0;transform:translateX(-26px) rotate(-8deg);transition:opacity .35s ease,transform .45s cubic-bezier(.3,1.4,.5,1);pointer-events:none}\n.gl-tymal img{width:72px;height:72px;object-fit:contain}\n.gl-barre:hover .gl-tymal,.gl-large-ouvert .gl-tymal{opacity:1;transform:none;pointer-events:auto}\n.gl-nav{flex:1;display:flex;justify-content:center;min-width:0;margin-right:56px;position:relative;z-index:2}\n.gl-nav>ul{display:flex;align-items:center;gap:clamp(16px,2vw,30px)}\n.gl-entree{display:flex;align-items:center;gap:2px;height:85px}\n.gl-entree-lien{position:relative;display:flex;align-items:center;gap:6px;padding:10px 0;font-weight:700;font-size:11px;letter-spacing:.02em;text-transform:uppercase;color:var(--gl-teal);white-space:nowrap}\n.gl-entree-lien::after{content:'';position:absolute;left:-2px;right:-2px;bottom:3px;height:4px;background:var(--gl-jaune);transform:skewX(-10deg) scaleX(0);transform-origin:left;transition:transform .25s var(--gl-ease)}\n.gl-entree-lien:hover,.gl-entree.est-ouvert .gl-entree-lien,.gl-entree.est-actif .gl-entree-lien{color:var(--gl-marine)}\n.gl-entree.est-actif .gl-entree-lien::after{transform:skewX(-10deg) scaleX(1)}\n.gl-chev{display:grid;place-items:center;width:24px;height:26px;margin:0 -3px;color:var(--gl-teal)}\n.gl-chev svg,.gl-entree-lien .gl-chev-in{width:10px;height:10px;transition:transform .25s var(--gl-ease)}\n.gl-entree.est-ouvert .gl-chev svg,.gl-entree.est-ouvert .gl-chev-in{transform:rotate(180deg)}\n.gl-decor{position:absolute;top:0;right:calc(var(--gl-gout) + 206px);width:187px;height:85px;pointer-events:none;z-index:0;opacity:.14}\n.gl-decor img{width:187px;height:85px}\n.gl-droite{position:relative;flex:none;width:206px;height:60px;margin-left:auto;padding-left:6px;z-index:2}\n.gl-droite::before{content:'';position:absolute;left:0;top:-4px;bottom:-4px;border-left:1px dashed #cfd8dc}\n.gl-etat{position:absolute;inset:0 0 0 6px;display:flex;align-items:center;justify-content:space-around;gap:10px;opacity:0;visibility:hidden;transition:opacity .6s ease,visibility 0s linear .6s}\n.gl-etat.est-la{opacity:1;visibility:visible;transition:opacity .6s ease}\n.gl-partenaire img{height:60px;width:auto;max-width:62px;object-fit:contain}\n.gl-partenaire:last-child img{height:45px}\n.gl-boutique{display:flex;flex-direction:column;align-items:center;gap:4px;width:auto;white-space:nowrap;text-align:center;color:var(--gl-teal);font-weight:700;font-size:9.5px;line-height:1.15;text-transform:uppercase}\n.gl-boutique img{width:auto;height:26px;max-width:100px;object-fit:contain;object-position:50% 0}\n.gl-menu{display:none;align-items:center;gap:10px;flex:none;height:42px;padding:0 16px;margin-left:14px;background:var(--gl-marine);color:#fff;transform:skewX(-10deg);font-weight:700;font-size:11px;letter-spacing:.14em;text-transform:uppercase;position:relative;z-index:2}\n.gl-menu>*{transform:skewX(10deg)}\n.gl-menu svg{width:24px;height:16px;color:var(--gl-jaune)}\n.gl-menu:hover svg path:nth-child(2){transform:translateX(-3px)}\n.gl-menu svg path{transition:transform .3s var(--gl-ease)}\n.gl-bande{position:relative;z-index:3;display:flex;align-items:center;gap:16px;height:50px;padding:0 var(--gl-gout);background:linear-gradient(rgba(0,111,123,.7),rgba(0,111,123,.7)),#fff;color:#fff}\n.gl-dates{display:grid;min-width:0;font-weight:700;font-size:12px;text-transform:uppercase;white-space:nowrap;overflow:hidden}\n.gl-date{grid-area:1 / 1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:opacity .7s ease,transform .7s cubic-bezier(.22,.8,.3,1)}\n.gl-date:not(.est-la){opacity:0;transform:translateY(10px);pointer-events:none}\n@media (prefers-reduced-motion:reduce){.gl-date{transition:none}.gl-date:not(.est-la){transform:none}}\n.gl-dates b{font-weight:700;color:var(--gl-jaune)}\n.gl-dates b.gl-sep-txt{margin:0 8px}\n.gl-montre{display:flex;align-items:center;gap:14px;margin-left:auto;flex:none}\n.gl-compte{display:inline-flex;align-items:baseline;font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap}\n.gl-compte b{font-weight:700;font-size:14px}\n.gl-compte b[data-u=\"j\"]{font-size:19px}\n.gl-compte i{font-style:normal;font-size:9px;letter-spacing:.04em;opacity:.78;margin:0 7px 0 2px;text-transform:uppercase}\n.gl-compte i:last-child{margin-right:0}\n.gl-cadran{position:relative;display:block;flex:none;width:40px;height:40px}\n.gl-cadran img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}\n.gl-cadran img[data-aiguille],.gl-cadran img.gl-aiguille{transform-origin:46.243% 49.991%}\n.gl-alpina img{height:18px;width:auto}\n@media (max-width:1180px){\n.gl-marque{width:80px}\n.gl-tymal{display:none}\n.gl-nav{margin-right:12px}\n.gl-nav>ul{gap:clamp(12px,1.4vw,30px)}\n.gl-entree-lien{font-size:10.5px;letter-spacing:.01em}\n.gl-loupe .gl-loupe-txt,.gl-loupe kbd{display:none}\n.gl-loupe{margin-right:18px}\n}\n@media (min-width:1001px) and (max-width:1100px){\n.gl-nav>ul{gap:10px}\n.gl-entree-lien{font-size:10px;letter-spacing:0}\n}\n@media (max-width:1000px){\n.gl-reseaux,.gl-nav{display:none}\n.gl-menu{display:flex}\n.gl-marque{flex:1}\n.gl-droite{width:206px}\n.gl-decor{right:calc(var(--gl-gout) + 330px)}\n}\n@media (max-width:899px){\n.gl-dates{display:none}\n.gl-montre{margin:0 auto}\n}\n.gl-b-court,.gl-rot{display:none}\n@media (max-width:750px){\n.gl{height:195px}\n.gl-haut{padding:0 8px 0 0}\n.gl-services,.gl-haut .gl-loupe{display:none}\n.gl-haut .gl-espace{width:auto;flex:1;max-width:230px;margin:0 auto 0 26px}\n.gl-barre{height:105px;padding:0 0 0 14px;overflow:hidden}\n.gl-marque{flex:none;width:clamp(68px,20vw,82px);height:auto}\n.gl-logo img{width:clamp(68px,20vw,82px);height:clamp(68px,20vw,82px)}\n.gl-decor{left:clamp(120px,36vw,160px);right:auto;width:140px;height:96px;top:5px}\n.gl-decor img{width:140px;height:96px}\n.gl-droite{flex:1;width:auto;height:84px;margin:0 clamp(66px,19vw,74px) 0 8px;padding:0}\n.gl-droite::before{display:none}\n.gl-etat{inset:0 0 14px;justify-content:center;gap:clamp(6px,2.4vw,12px);transform:translateY(9px);transition:opacity .5s ease,transform .6s var(--gl-ease),visibility 0s linear .6s}\n.gl-etat.est-la{transform:none;transition:opacity .5s ease .12s,transform .6s var(--gl-ease) .08s}\n.gl-etat.est-sortie{transform:translateY(-9px)}\n.gl-partenaire img{height:clamp(46px,14.6vw,62px);max-width:clamp(46px,14.6vw,62px)}\n.gl-partenaire:last-child img{height:clamp(38px,12vw,50px)}\n.gl-boutique{flex-direction:column;width:auto;gap:5px;font-size:9.5px;letter-spacing:.1em}\n.gl-boutique img{order:-1;width:clamp(44px,13vw,52px);height:clamp(44px,13vw,52px)}\n.gl-b-long{display:none}\n.gl-b-court{display:block}\n.gl-rot{position:absolute;left:50%;bottom:2px;display:flex;gap:5px;transform:translateX(-50%)}\n.gl-rot i{position:relative;width:18px;height:3px;border-radius:2px;background:#dfe6e9;overflow:hidden}\n.gl-rot b{position:absolute;inset:0;background:var(--gl-teal);transform:scaleX(0);transform-origin:left;transition:transform .15s linear}\n.gl-rot i:not(.est-la) b{transform:scaleX(0)!important;transition:none}\n.gl-droite.est-pause .gl-rot i.est-la{background:#c9d4d8}\n.gl-barre .gl-menu{position:absolute;top:0;right:-22px;z-index:3;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:7px;width:clamp(88px,25vw,96px);height:100%;margin:0;padding:0 26px 0 6px;background:var(--gl-marine);transform:skewX(-10deg);transform-origin:0 0;font-size:10px;letter-spacing:.16em}\n.gl-barre .gl-menu svg{order:-1;width:26px;height:17px}\n.gl-barre .gl-menu .gl-menu-txt{display:block}\n.gl-compte b[data-u=\"j\"]{font-size:21px}\n.gl-compte b{font-size:15px}\n.gl-alpina img{height:20px}\n}\n@media (max-width:750px) and (prefers-reduced-motion:reduce){\n.gl-etat,.gl-etat.est-la,.gl-etat.est-sortie{transform:none;transition:none}\n.gl-rot b{transition:none}\n}\n.gl-compacte{position:fixed;left:0;right:0;top:0;z-index:8;display:flex;align-items:center;gap:16px;height:56px;padding-left:var(--gl-gout);background:#fff;overflow:hidden;\nbox-shadow:0 1px 0 rgba(14,17,29,.08),0 14px 30px -18px rgba(14,17,29,.5);transform:translateY(-110%);transition:transform .38s var(--gl-ease);will-change:transform}\n.gl-compacte.est-visible{transform:none}\n.gl-c-logo{position:relative;z-index:2;display:block;flex:none;width:40px;height:40px}\n.gl-c-logo img{width:40px;height:40px;object-fit:contain}\n.gl-cc{display:flex;align-items:center;gap:8px;flex:none;color:var(--gl-marine);white-space:nowrap}\n.gl-cc .gl-cadran{width:32px;height:32px}\n.gl-cc-chrono{position:relative;flex:none;display:flex;transform:translateY(-5.5px)}\n.gl-cc-alp{position:absolute;left:50%;top:calc(100% + 3px);display:block;width:auto;height:8px;max-width:none;transform:translateX(-50%);pointer-events:none}\n.gl-leger .gl-cc-chrono{width:28px;height:8px;transform:none}\n.gl-leger .gl-cc-alp{top:0}\n.gl-cc-txt{display:flex;flex-direction:column;justify-content:center;gap:1px;line-height:1}\n.gl-cc-txt small{font-weight:700;font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:var(--gl-teal)}\n.gl-cc .gl-compte b{font-size:12.5px;color:var(--gl-marine)}\n.gl-cc .gl-compte b[data-u=\"j\"]{font-size:15px}\n.gl-cc .gl-compte i{font-size:7.5px;margin:0 4px 0 1px;opacity:.7}\n.gl-cc .gl-compte b[data-u=\"s\"],.gl-cc .gl-compte i:last-child{display:none}\n.gl-cc-alpina{display:block;height:11px;width:auto;margin-left:2px;align-self:flex-end;margin-bottom:6px}\n.gl-c-nav{flex:1;display:flex;justify-content:safe center;min-width:0}\n.gl-c-nav>ul{display:flex;align-items:center;gap:clamp(14px,1.6vw,26px)}\n.gl-compacte .gl-entree{height:56px}\n.gl-compacte .gl-entree-lien{padding:9px 0 10px}\n.gl-compacte .gl-entree-lien::after{bottom:2px;height:3px}\n.gl-c-loupe{display:inline-flex;align-items:center;flex:none;gap:8px;height:36px;padding:0 10px 0 12px;border:1.5px solid #dde4e7;border-radius:10px 0 10px 0;font-weight:700;font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--gl-teal);white-space:nowrap}\n.gl-c-loupe svg{width:15px;height:15px}\n.gl-c-loupe kbd{background:#eef3f4;color:var(--gl-marine);box-shadow:inset 0 -1px 0 #d5dde0}\n.gl-c-loupe:hover{border-color:var(--gl-teal)}\n.gl-duo{display:flex;align-self:stretch;flex:none;margin-right:-16px;transform:skewX(-10deg);transform-origin:0 100%;background:var(--gl-marine)}\n.gl-duo-in{display:flex;align-items:center;gap:8px;transform:skewX(10deg)}\n.gl-duo-espace{position:relative;z-index:1;display:flex;align-items:center;margin-right:-1px;padding:0 16px 0 18px;background:linear-gradient(0deg,#FCDD00 0%,#FFB338 100%);color:var(--gl-marine)}\n.gl-duo-espace:hover{filter:brightness(1.05)}\n.gl-duo-espace img{width:22px;height:26px;object-fit:contain;flex:none}\n.gl-duo-lib{display:flex;flex-direction:column;font-weight:700;font-size:10.5px;line-height:1.08;letter-spacing:.03em;white-space:nowrap}\n.gl-duo-espace:focus-visible,.gl-duo-bouton:focus-visible{outline:2px solid var(--gl-marine);outline-offset:-4px}\n.gl-duo-bouton:focus-visible{outline-color:var(--gl-jaune)}\n.gl-duo-bouton{display:flex;align-items:center;justify-content:center;width:94px;padding:0 30px 0 14px;color:#fff}\n.gl-duo-bouton .gl-duo-in{flex-direction:column;gap:4px}\n.gl-duo-bouton svg{width:22px;height:14px;color:var(--gl-jaune)}\n.gl-duo-bouton.gl-fermer svg{width:16px;height:16px;color:#fff;transition:transform .3s var(--gl-ease)}\n.gl-duo-bouton.gl-fermer:hover svg{transform:rotate(90deg)}\n.gl-duo-bouton small{font-weight:700;font-size:8.5px;letter-spacing:.16em}\n.gl-compacte .gl-duo-espace{padding-right:30px}\n.gl-compacte .gl-c-menu{display:none}\n@media (min-width:1001px){\n.gl-compacte .gl-duo-lib{flex-direction:row;gap:.3em;font-size:11px}\n.gl-compacte .gl-duo-espace{padding:0 36px 0 22px}\n.gl-compacte .gl-duo-espace img{width:26px;height:30px}\n}\n@media (min-width:1001px) and (max-width:1360px){\n.gl-c-loupe .gl-loupe-txt,.gl-c-loupe kbd{display:none}\n.gl-c-loupe{padding:0 9px}\n.gl-cc-alpina{display:none}\n}\n@media (min-width:1001px) and (max-width:1180px){\n.gl-compacte{gap:12px}\n.gl-cc-txt small{display:none}\n.gl-cc .gl-cadran{width:28px;height:28px}\n.gl-cc .gl-compte b[data-u=\"m\"],.gl-cc .gl-compte i:nth-last-child(3){display:none}\n.gl-c-nav>ul{gap:8px}\n.gl-compacte .gl-duo-lib{flex-direction:column;gap:0;font-size:10px}\n.gl-compacte .gl-duo-espace{padding:0 30px 0 14px}\n.gl-compacte .gl-duo-espace img{width:22px;height:26px}\n}\n@media (max-width:1000px){\n.gl-c-nav{display:none}\n.gl-compacte{gap:8px;padding-left:14px}\n.gl-plein .gl-p-tete{gap:8px;padding-left:14px}\n.gl-plein .gl-p-tete .gl-duo-espace{padding-right:14px}\n.gl-cc{margin-right:auto}\n.gl-c-loupe{width:40px;height:44px;justify-content:center;padding:0;border:0;color:var(--gl-marine)}\n.gl-c-loupe svg{width:21px;height:21px}\n.gl-c-loupe .gl-loupe-txt,.gl-c-loupe kbd{display:none}\n.gl-compacte .gl-c-menu{display:flex}\n.gl-compacte .gl-duo-espace{padding-right:14px}\n}\n@media (max-width:750px){\n.gl-cc-alpina{display:none}\n.gl-compacte,.gl-p-tete{gap:4px;padding-left:10px}\n.gl-c-logo,.gl-c-logo img{width:44px;height:44px}\n.gl-cc{gap:4px}\n.gl-cc .gl-cadran{width:28px;height:28px}\n.gl-cc .gl-compte b[data-u=\"m\"],.gl-cc .gl-compte b[data-u=\"s\"]{display:inline}\n.gl-cc .gl-compte i{display:none}\n.gl-cc .gl-compte i:first-of-type{display:inline;margin:0 5px 0 1px}\n.gl-cc .gl-compte b[data-u=\"m\"]::before,.gl-cc .gl-compte b[data-u=\"s\"]::before{content:':';padding:0 1px;opacity:.55}\n.gl-cc .gl-compte b{font-size:12px}\n.gl-cc .gl-compte b[data-u=\"j\"]{font-size:13.5px}\n.gl-duo-lib,.gl-compacte .gl-duo-lib{flex-direction:row;gap:.28em;font-size:9.5px;letter-spacing:.02em}\n.gl-c-loupe{width:28px}\n.gl-c-loupe svg{width:20px;height:20px}\n.gl-duo-espace,.gl-compacte .gl-duo-espace,.gl-p-tete .gl-duo-espace{padding:0 8px 0 12px}\n.gl-duo-espace img{width:18px;height:22px}\n.gl-duo-in{gap:5px}\n.gl-duo-bouton{width:74px;padding:0 24px 0 8px}\n.gl-plein .gl-p-tete{gap:4px;padding-left:10px}\n.gl-plein .gl-p-tete .gl-duo-espace{padding:0 8px 0 12px}\n}\n@media (max-width:400px){ .gl-duo-espace img{display:none} .gl-duo-lib,.gl-compacte .gl-duo-lib{font-size:9px} .gl-cc-txt small{letter-spacing:.1em} }\n@media (max-width:370px){ .gl-cc .gl-compte b[data-u=\"s\"]{display:none} .gl-c-logo,.gl-c-logo img{width:40px;height:40px} }\n.gl-voile{position:fixed;inset:0;z-index:4;background:rgba(14,17,29,.62);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility 0s linear .25s}\n.gl-large-ouvert .gl-voile{opacity:1;visibility:visible;transition:opacity .25s ease}\n.gl-large{position:absolute;left:0;right:0;top:125px;z-index:5;height:min(calc(100vh - 125px),660px);min-height:420px;overflow:hidden;background:radial-gradient(70% 90% at 100% 0%,rgba(0,111,123,.34),rgba(0,111,123,0) 70%),var(--gl-marine);color:#fff;\nopacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity .2s ease,transform .34s var(--gl-ease),visibility 0s linear .34s}\n.gl-large-ouvert .gl-large{opacity:1;visibility:visible;transform:none;transition:opacity .2s ease,transform .34s var(--gl-ease)}\n.gl-large.gl-large--fixe{position:fixed;top:56px;height:min(calc(100vh - 56px),660px)}\n.gl-large-vague{position:absolute;left:0;top:-1px;z-index:3;width:calc(100% + 360px);height:17px;pointer-events:none;will-change:transform;\nbackground:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='360' height='12' viewBox='0 0 360 12' preserveAspectRatio='none'><path d='M0,1.092C37.3557,1.092,52.6443,12,90,12C127.356,12,142.633,1.092,180,1.092C217.356,1.092,232.644,12,270,12C307.356,12,322.644,1.092,360,1.092V0H0V1.092Z' fill='white'/></svg>\") repeat-x 0 0/360px 100%;\nanimation:gl-derive 16s linear infinite}\n@keyframes gl-derive{to{transform:translateX(-360px)}}\n.gl-grain{position:absolute;inset:-60px;z-index:0;background-image:var(--gl-grain);background-size:200px 200px;opacity:.075;pointer-events:none;will-change:transform;animation:gl-grain 1.4s steps(5) infinite}\n@keyframes gl-grain{0%{transform:translate(0,0)}20%{transform:translate(-22px,14px)}40%{transform:translate(16px,-24px)}60%{transform:translate(-12px,-10px)}80%{transform:translate(24px,18px)}100%{transform:translate(0,0)}}\n.gl-large .gl-damier{position:absolute;left:-140px;bottom:-150px;z-index:0;width:640px;height:auto;opacity:.08;transform:rotate(-8deg);pointer-events:none}\n.gl-large-grille{position:relative;z-index:1;display:grid;grid-template-columns:clamp(290px,28vw,420px) minmax(0,1fr);column-gap:clamp(28px,3.4vw,56px);height:100%;max-width:1600px;margin:0 auto;padding:46px clamp(28px,3.2vw,48px) 30px}\n.gl-sommaire{display:flex;flex-direction:column;min-height:0}\n.gl-onglets{display:flex;flex-direction:column;container-type:inline-size}\n.gl-onglet-lib.gl-onglet-lib--long{font-size:min(var(--ong-fs),calc((100cqi - 58px) / (var(--len) * .72)))}\n.gl-onglets>li{display:block}\n.gl-onglet{position:relative;display:flex;align-items:center;gap:12px;width:100%;padding:clamp(3px,1.1vh,11px) 0;color:#fff}\n.gl-onglet .gl-num{position:relative;flex:none;align-self:flex-start;width:30px;margin-top:clamp(5px,1.1vh,10px);padding:4px 0 3px;text-align:center;font-weight:700;font-size:11px;letter-spacing:.06em;color:var(--gl-teal-c);font-variant-numeric:tabular-nums;transform:skewX(-10deg)}\n.gl-onglet-lib{display:inline-block;font-family:var(--gl-titre);font-style:italic;--ong-fs:clamp(26px,min(4.6vh,2.9vw),42px);font-size:var(--ong-fs);line-height:1.02;text-transform:uppercase;white-space:normal;padding-right:.12em;color:rgba(255,255,255,.45);transition:transform .38s var(--gl-ease)}\n.gl-onglet:hover .gl-onglet-lib,.gl-onglet:focus-visible .gl-onglet-lib{color:#fff}\n.gl-onglet-fleche{flex:none;display:grid;place-items:center;width:30px;height:30px;margin-left:4px;color:rgba(255,255,255,.45);transition:transform .25s var(--gl-ease)}\n.gl-onglet-fleche svg{width:18px;height:18px}\n.gl-onglet--lien:hover .gl-onglet-fleche{color:var(--gl-jaune);transform:translateX(4px)}\n.gl-onglet--lien[aria-current=\"page\"] .gl-onglet-lib{color:#fff}\n.gl-onglet[aria-expanded=\"true\"] .gl-onglet-lib{color:var(--gl-jaune);transform:translateX(8px)}\n.gl-onglet[aria-expanded=\"true\"] .gl-num{background:var(--gl-jaune);color:var(--gl-marine)}\n.gl-onglet.est-actif .gl-num::after{content:'';position:absolute;left:11px;top:calc(100% + 6px);width:7px;height:7px;background:var(--gl-jaune)}\n.gl-sommaire-pied{margin-top:auto;padding-top:18px;display:flex;align-items:center;flex-wrap:wrap;gap:8px 14px;font-weight:700;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.62)}\n.gl-sommaire-pied .gl-compte{color:#fff}\n.gl-sommaire-pied .gl-compte b{color:var(--gl-jaune);font-size:13px}\n.gl-sommaire-pied .gl-compte b[data-u=\"j\"]{font-size:16px}\n.gl-sommaire-pied .gl-alpina img{height:15px}\n.gl-sommaire-pied{flex-wrap:nowrap;gap:12px}\n.gl-sommaire-pied .gl-cadran{width:46px;height:46px}\n.gl-sp-txt{display:flex;flex-direction:column;gap:3px}\n.gl-scene{position:relative;min-width:0;min-height:0;padding-top:clamp(10px,2vh,18px)}\n.gl-chiffre{position:absolute;right:-.03em;top:-.36em;z-index:0;font-family:var(--gl-titre);font-style:italic;font-size:clamp(190px,34vh,300px);line-height:1;color:transparent;-webkit-text-stroke:1.5px rgba(93,191,192,.26);pointer-events:none;user-select:none;white-space:nowrap}\n.gl-chiffre.est-entree{animation:gl-chiffre .7s var(--gl-ease) backwards}\n@keyframes gl-chiffre{from{opacity:0;transform:translateY(34px)}}\n.gl-contenu{position:relative;z-index:1;display:flex;flex-direction:column;gap:14px;height:100%}\n.gl-contenu>.gl-cartes{flex:1 1 0;min-height:0}\n.gl-contenu[hidden]{display:none}\n.gl-contenu-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:24px}\n.gl-kicker{margin:0 0 6px;font-weight:700;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--gl-teal-c)}\n.gl-lead{font-size:14px;line-height:1.45;color:rgba(255,255,255,.74);max-width:560px}\n.gl-note{margin-top:6px;font-size:12px;color:rgba(255,255,255,.5)}\n.gl-actions{display:flex;align-items:center;gap:12px;flex:none}\n.gl-tout{display:inline-flex;align-items:center;gap:14px;height:44px;padding:0 18px 0 20px;border:2px solid #fff;border-radius:10px 0 10px 0;font-weight:700;font-size:14px;color:#fff;white-space:nowrap;transition:background .15s}\n.gl-tout svg{width:20px;height:20px;flex:none;transition:transform .25s var(--gl-ease)}\n.gl-tout:hover{background:rgba(255,255,255,.1)}\n.gl-tout:hover svg{transform:translateX(3px)}\n.gl-contenu.est-entree .gl-contenu-tete{animation:gl-apparait .45s var(--gl-ease) backwards}\n.gl-contenu.est-entree .gl-puces{animation:gl-apparait .45s var(--gl-ease) .06s backwards}\n.gl-contenu.est-entree .gl-carte{animation:gl-carte .6s var(--gl-ease) backwards;animation-delay:calc(60ms + var(--k,0) * 45ms)}\n@keyframes gl-apparait{from{opacity:0;transform:translateY(10px)}}\n@keyframes gl-carte{from{opacity:0;transform:translateY(22px)}}\n.gl-cartes{display:grid;gap:12px;min-height:0}\n.gl-dispo-actus .gl-cartes{grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:repeat(2,minmax(0,1fr))}\n.gl-dispo-actus .gl-carte:first-child{grid-row:span 2}\n.gl-dispo-actus .gl-carte:first-child .gl-carte-titre{font-size:clamp(22px,3.3vh,30px);-webkit-line-clamp:4}\n.gl-medias{display:flex;align-self:flex-start;gap:4px;padding:4px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}\n.gl-media{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 5px;border-radius:999px;font-weight:800;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.7);white-space:nowrap;transition:background .15s,color .15s}\n.gl-media i{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:7px;background:var(--bg);color:var(--c)}\n.gl-media i svg{width:13px;height:13px}\n.gl-media:hover,.gl-media[aria-current=\"page\"]{background:#fff;color:var(--gl-marine)}\n.gl-media:focus-visible{outline:2px solid var(--gl-teal-c);outline-offset:2px}\n.gl-contenu.est-entree .gl-medias{animation:gl-apparait .45s var(--gl-ease) .06s backwards}\n.gl-carte--post{border-radius:16px}\n.gl-sujet{font-weight:800;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--v,#14A79E);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gl-quand{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;font-size:11px;color:rgba(255,255,255,.55);white-space:nowrap}\n.gl-quand b{font-weight:800;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--gl-jaune)}\n.gl-faire{display:inline-flex;align-items:center;gap:7px;font-weight:800;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--gl-jaune)}\n.gl-faire svg{width:13px;height:13px;transition:transform .25s var(--gl-ease)}\n.gl-carte:hover .gl-faire svg{transform:translateX(3px)}\n.gl-dispo-skippers .gl-cartes{grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr))}\n.gl-dispo-skippers .gl-carte::after{background:linear-gradient(180deg,rgba(14,17,29,.3) 0%,rgba(14,17,29,0) 18%),linear-gradient(20deg,rgba(14,17,29,.86) 0%,rgba(14,17,29,.5) 22%,rgba(14,17,29,0) 44%)}\n.gl-dispo-skippers .gl-carte-txt{text-shadow:0 1px 2px rgba(14,17,29,.5),0 0 14px rgba(14,17,29,.6)}\n.gl-dispo-village .gl-cartes{grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:repeat(2,minmax(0,1fr))}\n.gl-dispo-village .gl-carte:first-child{grid-row:span 2}\n.gl-dispo-village .gl-carte:first-child .gl-carte-titre{font-size:clamp(30px,5vh,44px)}\n.gl-dispo-a-propos .gl-cartes{grid-template-columns:1.3fr 1fr 1fr;grid-template-rows:repeat(2,minmax(0,1fr))}\n.gl-dispo-a-propos .gl-carte--grande{grid-column:1;grid-row:1 / span 2}\n.gl-dispo-a-propos .gl-carte--grande .gl-carte-titre{font-size:clamp(22px,3.3vh,30px)}\n.gl-dispo-engagements .gl-cartes{grid-template-columns:repeat(4,minmax(0,1fr))}\n.gl-cartes--groupe{grid-template-rows:auto minmax(0,1fr);row-gap:8px}\n.gl-cartes--groupe>.gl-carte{grid-row:2}\n.gl-groupe-titre{grid-row:1;grid-column:var(--debut) / span var(--nb);display:flex;align-items:center;gap:12px;margin:0;font-weight:700;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gl-teal-c);white-space:nowrap}\n.gl-groupe-titre::before,.gl-groupe-titre::after{content:'';flex:1;height:1.5px;background:rgba(93,191,192,.4)}\n.gl-large .gl-cartes--groupe .gl-carte-groupe{display:none}\n.gl-large .gl-carte--skipper{--sk-max:clamp(24px,3.6vh,32px)}\n.gl-large .gl-carte--skipper>.gl-photo{object-position:50% 18%}\n.gl-carte{position:relative;display:block;min-width:0;min-height:0;overflow:hidden;isolation:isolate;border-radius:18px 4px 18px 4px;background:var(--gl-panneau);color:#fff}\n.gl-carte>.gl-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s var(--gl-ease)}\na.gl-carte:hover>.gl-photo{transform:scale(1.05)}\n.gl-carte::after{content:'';position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(14,17,29,.4) 0%,rgba(14,17,29,0) 26%,rgba(14,17,29,0) 40%,rgba(14,17,29,.72) 68%,rgba(14,17,29,.96) 100%)}\n.gl-carte:focus-visible{outline:3px solid var(--gl-jaune);outline-offset:2px}\n.gl-carte-txt{position:absolute;left:0;right:0;bottom:0;z-index:2;display:flex;flex-direction:column;gap:6px;padding:14px 14px 16px}\n.gl-carte-titre{font-family:var(--gl-titre);font-style:italic;font-weight:normal;font-size:19px;line-height:1.04;text-transform:uppercase;padding-right:.1em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:break-word}\n.gl-carte-sous{font-size:12px;line-height:1.4;color:rgba(255,255,255,.74);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.gl-carte-groupe{font-weight:700;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gl-teal-c)}\n.gl-dates-rub{display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:700;font-size:12px;letter-spacing:.04em;color:#fff;white-space:nowrap}\n.gl-kicker-dates{display:inline-flex;align-items:center;gap:7px;margin-left:12px;padding-left:12px;border-left:1px solid rgba(255,255,255,.28);color:var(--gl-jaune);letter-spacing:.16em;vertical-align:1px}\n.gl-kicker-dates svg{width:13px;height:13px;flex:none}\n.gl-faq{display:inline-flex;align-items:center;gap:10px;height:42px;padding:0 16px 0 5px;border-radius:999px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.2);font-weight:700;font-size:13px;color:#fff;white-space:nowrap;transition:background .15s,border-color .15s,color .15s}\n.gl-faq-point{display:inline-flex;align-items:center;justify-content:center;width:31px;height:31px;border-radius:50%;background:var(--gl-jaune);color:var(--gl-marine);font:italic 400 19px/1 var(--gl-titre);padding-right:1px}\n.gl-faq svg{width:15px;height:15px;flex:none;transition:transform .25s var(--gl-ease)}\n.gl-faq:hover{background:#fff;border-color:#fff;color:var(--gl-marine)}\n.gl-faq:hover svg{transform:translateX(3px)}\n.gl-faq:focus-visible{outline:2px solid var(--gl-teal-c);outline-offset:2px}\n.gl-dates-rub svg{width:16px;height:16px;flex:none;color:var(--gl-jaune)}\n.gl-meta{font-weight:700;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.62)}\n.gl-cat,.gl-etiquette{position:absolute;left:12px;top:12px;z-index:2;display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border-radius:6px;background:var(--bg,#DCF2EF);color:var(--c,#0B6E6B);font-weight:800;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1;white-space:nowrap}\n.gl-cat svg{width:12px;height:12px;flex:none}\n.gl-etiquette{background:var(--gl-jaune);color:var(--gl-marine)}\n.gl-ext{position:absolute;right:12px;top:12px;z-index:2;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:rgba(14,17,29,.8);color:#fff}\n.gl-ext svg{width:12px;height:12px}\n.gl-carte--skipper{border-radius:26px 3px 16px 3px;background:var(--cc,#1B2237)}\n.gl-carte--skipper>.gl-photo{object-position:50% 10%}\n.gl-carte--skipper::before{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;z-index:3;background:var(--cc)}\n.gl-banniere{position:absolute;right:10px;top:0;z-index:2;height:78px;width:auto;filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))}\n.gl-sk-prenom{display:flex;align-items:center;gap:6px;font-weight:700;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.78)}\n.gl-sk-prenom img{width:16px;height:16px;border-radius:50%;object-fit:cover}\n.gl-carte--skipper{container-type:inline-size}\n.gl-sk-nom{font-family:var(--gl-titre);font-style:italic;font-size:var(--sk-max,26px);font-size:min(var(--sk-max,26px),calc((100cqi - 30px) / (var(--len,8) * .74)));line-height:.94;text-transform:uppercase;white-space:nowrap;padding-right:.1em}\n.gl-sk-nom--deux{white-space:normal;line-height:.92}\n.gl-sk-bateau{font-weight:700;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--cc);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gl-carte--village .gl-carte-txt{bottom:46px;padding-bottom:10px}\n.gl-carte--village .gl-carte-titre{font-size:32px}\n.gl-bande-date{position:absolute;left:0;right:0;bottom:0;z-index:2;display:flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 12px;border-top:3px solid var(--cb,var(--gl-teal-c));background:rgba(14,17,29,.92);color:var(--cb,var(--gl-teal-c));font-weight:700;font-size:12.5px;text-align:center;line-height:1.15}\n.gl-bande-date svg{width:16px;height:16px;flex:none}\n.gl-carte--bandeau .gl-carte-titre{font-size:17px}\n.gl-carte--bientot{cursor:default}\n.gl-carte--bientot>.gl-photo{filter:grayscale(.8) brightness(.55)}\n.gl-carte--bientot .gl-carte-titre{color:rgba(255,255,255,.75)}\n.gl-carte--fin{display:flex;flex-direction:column;justify-content:flex-end;gap:14px;padding:16px;background:linear-gradient(160deg,var(--gl-teal) 0%,var(--gl-panneau) 80%)}\n.gl-carte--fin::after{display:none}\n.gl-carte--fin .gl-carte-titre{font-size:19px}\n.gl-fleche{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--gl-jaune);color:var(--gl-marine)}\n.gl-fleche svg{width:20px;height:20px;transition:transform .25s var(--gl-ease)}\n.gl-carte--fin:hover .gl-fleche svg{transform:translateX(3px)}\n.gl-tuile{position:absolute;inset:0;z-index:0;display:none;flex-direction:column;align-items:flex-start;gap:8px;padding:16px;overflow:hidden;background:linear-gradient(150deg,var(--t1,#006F7B) 0%,var(--t2,#1B2237) 72%);color:var(--tc,#fff)}\n.gl-tuile::before{content:'';position:absolute;right:-30px;top:-30px;width:170px;height:170px;background:repeating-conic-gradient(rgba(255,255,255,.13) 0 25%,rgba(255,255,255,0) 0 50%) 0 0/30px 30px;transform:rotate(-10deg);pointer-events:none}\n.gl-tuile svg{position:relative;width:34px;height:34px}\n.gl-tuile b{position:relative;font-family:var(--gl-titre);font-style:italic;font-weight:normal;font-size:62px;line-height:.9}\n.gl-tuile small{position:relative;font-weight:700;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase}\n.gl-tuile--picto{align-items:center;justify-content:center;padding-bottom:38%}\n.gl-tuile--picto svg{width:46px;height:46px}\n.gl-carte.sans-image .gl-tuile{display:flex}\n.gl-tuile--musique{align-items:center;justify-content:center;padding-bottom:36%;background:radial-gradient(70% 55% at 50% 38%,rgba(120,148,247,.26),rgba(120,148,247,0) 72%),linear-gradient(160deg,#1B2140 0%,#0E111D 78%)}\n.gl-tuile--musique::before{display:none}\n.gl-egal{position:relative;display:flex;align-items:center;gap:3px;height:44px}\n.gl-egal i{display:block;width:3px;height:calc(var(--h) * 1px);border-radius:2px;background:#7894F7;transform-origin:50% 50%;animation:gl-egal var(--d) ease-in-out infinite alternate}\n@keyframes gl-egal{from{transform:scaleY(.5)}to{transform:scaleY(1)}}\n.gl-leger .gl-egal i{animation:none}\n@media (prefers-reduced-motion:reduce){.gl-egal i{animation:none}}\n.gl-puces{display:flex;flex-wrap:wrap;gap:8px}\n.gl-puce a{display:inline-flex;align-items:center;padding:7px 14px;border-radius:999px;border:1.5px solid rgba(255,255,255,.28);font-weight:700;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:#fff;white-space:nowrap;transition:border-color .15s,background .15s,color .15s}\n.gl-puce a:hover{border-color:#fff;background:#fff;color:var(--gl-marine)}\n.gl-puce a[aria-current=\"page\"]{background:var(--gl-jaune);border-color:var(--gl-jaune);color:var(--gl-marine)}\n.gl-puce-in{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:999px;border:1.5px dashed rgba(255,255,255,.22);font-weight:700;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.55);white-space:nowrap}\n.gl-puce-in small{font-size:8.5px;letter-spacing:.12em;padding:2px 5px;border-radius:3px;background:var(--gl-jaune);color:var(--gl-marine)}\n.gl-puce-groupe{display:flex;align-items:center;gap:8px;padding:0 2px 0 6px;font-weight:700;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gl-teal-c);white-space:nowrap}\n.gl-puce-groupe::before{content:'';width:14px;height:1.5px;background:currentColor}\n.gl-puce-ext{display:inline-block;margin-left:6px;vertical-align:-1px}\n.gl-puce-ext svg{width:10px;height:10px}\n.gl-voir-img{display:none;align-items:center;gap:8px;height:34px;padding:0 12px;border:1.5px dashed rgba(255,255,255,.4);border-radius:8px 0 8px 0;font-weight:700;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap}\n.gl-voir-img svg{width:15px;height:15px}\n.bd-chargees .gl-voir-img{display:none!important}\n.gl-plein{position:fixed;inset:0;z-index:2147483000;background:var(--gl-marine);color:#fff;opacity:0;visibility:hidden;transition:opacity .26s ease,visibility 0s linear .26s}\n.gl-plein.est-ouvert{opacity:1;visibility:visible;transition:opacity .26s ease}\n.gl-mer{position:absolute;inset:0;overflow:hidden;pointer-events:none;background:radial-gradient(95% 48% at 100% 0%,rgba(0,111,123,.45),rgba(0,111,123,0) 72%),radial-gradient(80% 40% at 0% 100%,rgba(93,191,192,.16),rgba(93,191,192,0) 70%)}\n.gl-mer .gl-damier{position:absolute;right:-190px;top:70px;width:560px;height:auto;opacity:.085;transform:rotate(-8deg)}\n.gl-houle{position:absolute;left:0;right:0;bottom:0;height:130px;transform:translateY(60px);transition:transform 1s var(--gl-ease)}\n.gl-plein.est-ouvert .gl-houle{transform:none}\n.gl-vague{position:absolute;left:0;bottom:0;width:calc(100% + 480px);background-repeat:repeat-x;background-position:0 0;background-size:480px 100%;will-change:transform;animation:gl-houle 26s linear infinite}\n.gl-v1{height:66px;opacity:.38;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='70' viewBox='0 0 480 70' preserveAspectRatio='none'><path d='M0 20C120 20 120 4 240 4S360 20 480 20V70H0Z' fill='%23006F7B'/></svg>\")}\n.gl-v2{bottom:16px;height:80px;opacity:.14;animation-duration:40s;animation-direction:reverse;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='70' viewBox='0 0 480 70' preserveAspectRatio='none'><path d='M0 20C120 20 120 4 240 4S360 20 480 20V70H0Z' fill='%235DBFC0'/></svg>\")}\n.gl-v3{bottom:-8px;height:52px;opacity:.07;animation-duration:17s;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='70' viewBox='0 0 480 70' preserveAspectRatio='none'><path d='M0 20C120 20 120 4 240 4S360 20 480 20V70H0Z' fill='white'/></svg>\")}\n@keyframes gl-houle{to{transform:translateX(-480px)}}\n.gl-defil{position:relative;z-index:1;display:flex;flex-direction:column;height:100%;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}\n.gl-p-tete{position:sticky;top:0;z-index:4;flex:none;display:flex;align-items:center;height:56px;padding-left:var(--gl-gout);background:#fff;overflow:hidden;box-shadow:0 1px 0 rgba(14,17,29,.08)}\n.gl-p-tete .gl-cc{margin-right:auto}\n.gl-p-corps{position:relative;z-index:1;flex:1 0 auto}\n.gl-scene-t{display:none}\n.gl-liste{padding:2px 16px 0}\n.gl-rub{position:relative;border-bottom:1px solid rgba(255,255,255,.1)}\n.gl-rub-h{margin:0}\n.gl-rub-btn{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:64px;padding:11px 0 9px;color:#fff}\n.gl-rub-lib{display:inline-block;font-family:var(--gl-titre);font-style:italic;font-size:clamp(26px,8.2vw,38px);line-height:1;text-transform:uppercase;white-space:normal;padding-right:.1em;transform-origin:0 0;transition:opacity .3s ease}\n.gl-insecable{white-space:nowrap}\n.gl-rub-lib--long{font-size:min(clamp(26px,8.2vw,38px),calc((100vw - 72px) / (var(--len) * .78)))}\n.gl-rub-num{flex:none;display:flex;flex-direction:column;align-items:flex-end;gap:7px;font-weight:700;font-size:11px;letter-spacing:.1em;color:var(--gl-teal-c);font-variant-numeric:tabular-nums}\n.gl-rub-num svg{width:12px;height:12px;transition:transform .35s var(--gl-ease)}\n.gl-rub-lien .gl-rub-num svg{width:15px;height:15px}\n.gl-rub-lien:hover .gl-rub-num svg{transform:translateX(3px)}\n.gl-rub.est-actif .gl-rub-num>span::before{content:'';display:inline-block;width:7px;height:7px;margin-right:6px;background:var(--gl-jaune);transform:skewX(-10deg)}\n.gl-liste.a-un-large .gl-rub:not(.est-large) .gl-rub-btn{min-height:44px;padding:7px 0 5px}\n.gl-liste.a-un-large .gl-rub:not(.est-large) .gl-rub-lib{font-size:clamp(20px,6.4vw,28px);opacity:.5}\n.gl-rub.est-large .gl-rub-lib{color:var(--gl-jaune);font-size:calc(clamp(26px,8.2vw,38px) * 1.08)}\n.gl-liste{container-type:inline-size}\n.gl-rub.est-large .gl-rub-lib--long{font-size:min(calc(clamp(26px,8.2vw,38px) * 1.08),calc((100cqi - 40px) / (var(--len) * .78)))}\n.gl-rub.est-large .gl-rub-num{color:var(--gl-jaune)}\n.gl-rub.est-large .gl-rub-num svg{transform:rotate(180deg)}\n.gl-rub-btn:hover .gl-rub-lib{opacity:1}\n.gl-flip .gl-rub,.gl-flip .gl-fin{transition:transform .5s var(--gl-ease)}\n.gl-flip .gl-rub-lib{transition:transform .5s var(--gl-ease),opacity .3s ease}\n.gl-plein.est-entree .gl-rub{animation:gl-monte .62s var(--gl-ease) backwards;animation-delay:calc(110ms + var(--i,0) * 55ms)}\n.gl-plein.est-entree .gl-rub-num{animation:gl-glisse-g .5s var(--gl-ease) backwards;animation-delay:calc(260ms + var(--i,0) * 55ms)}\n.gl-plein.est-entree .gl-fin{animation:gl-monte .6s var(--gl-ease) .5s backwards}\n.gl-plein.est-entree .gl-p-recherche{animation:gl-apparait .45s var(--gl-ease) .1s backwards}\n.gl-plein.est-entree .gl-p-tete{animation:gl-apparait .4s var(--gl-ease) .06s backwards}\n@keyframes gl-monte{from{opacity:0;transform:translateY(40px)}}\n@keyframes gl-glisse-g{from{opacity:0;transform:translateX(14px)}}\n.gl-region{padding:2px 0 20px}\n.gl-region[hidden]{display:none}\n.gl-region-tete{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:10px 14px;padding-bottom:12px}\n.gl-region-tete>div:first-child{min-width:0}\n.gl-region .gl-kicker{display:none}\n.gl-region .gl-lead{font-size:13px;max-width:36ch}\n.gl-region .gl-dates-rub{margin-top:8px;font-size:11.5px}\n.gl-region .gl-faq{height:36px;font-size:12px}\n.gl-region .gl-faq-point{width:26px;height:26px;font-size:16px}\n.gl-region-actions{display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex:none}\n.gl-tout-lien{display:inline-flex;align-items:center;gap:8px;padding:6px 0;font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gl-jaune);white-space:nowrap}\n.gl-tout-lien svg{width:15px;height:15px}\n.gl-rail{display:flex;gap:12px;margin:0 -16px;padding:4px 16px 10px;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scroll-padding-inline:16px;scrollbar-width:none}\n.gl-rail::-webkit-scrollbar{display:none}\n.gl-rail>.gl-carte{flex:none;width:248px;height:300px;scroll-snap-align:start}\n.gl-rail>.gl-carte--skipper{width:196px;height:262px}\n.gl-rail>.gl-carte--village{width:min(300px,78vw);height:300px}\n.gl-lignes{display:grid;gap:8px;margin:2px 0 6px}\n.gl-lignes-groupe{grid-column:1 / -1;display:flex;align-items:center;gap:10px;margin:10px 0 2px;font-weight:700;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--gl-teal-c)}\n.gl-lignes-groupe::after{content:'';flex:1;height:1px;background:rgba(93,191,192,.35)}\n.gl-ligne{display:flex;align-items:center;gap:14px;min-height:72px;padding:8px 14px 8px 8px;border-radius:14px 4px 14px 4px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#fff;transition:border-color .15s,background .15s}\na.gl-ligne:hover,a.gl-ligne:focus-visible{border-color:var(--gl-teal-c);background:rgba(255,255,255,.09)}\n.gl-ligne-vign{position:relative;flex:none;width:56px;height:56px;overflow:hidden;border-radius:10px 3px 10px 3px;background:var(--gl-panneau)}\n.gl-ligne-vign .gl-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.gl-ligne-vign .gl-tuile{padding:0;align-items:center;justify-content:center}\n.gl-ligne-vign .gl-tuile::before{width:70px;height:70px;right:-26px;top:-26px;background-size:14px 14px}\n.gl-ligne-vign .gl-tuile svg{width:24px;height:24px}\n.gl-ligne-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}\n.gl-ligne-titre{font-family:var(--gl-titre);font-style:italic;font-size:17px;line-height:1.05;text-transform:uppercase;padding-right:.1em}\n.gl-ligne-sous{font-size:11.5px;line-height:1.35;color:rgba(255,255,255,.66);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.gl-ligne-go{flex:none;width:16px;height:16px;color:var(--gl-teal-c)}\n.gl-ligne-go svg{width:16px;height:16px}\na.gl-ligne:hover .gl-ligne-go{color:var(--gl-jaune)}\n.gl-ligne--bientot>.gl-ligne-vign,.gl-ligne--bientot>.gl-ligne-txt{opacity:.62}\n.gl-ligne--bientot .gl-ligne-vign{filter:grayscale(.8)}\n.gl-ligne-bientot{flex:none;padding:3px 7px;border-radius:4px;background:var(--gl-jaune);color:var(--gl-marine);font-weight:700;font-size:9px;letter-spacing:.12em;text-transform:uppercase}\n.gl-ligne.sans-image .gl-tuile,.gl-leger .gl-ligne .gl-tuile{display:flex}\n.gl-leger .gl-ligne-vign .gl-photo:not(.est-bd){display:none}\n.gl-region.est-entree .gl-ligne{animation:gl-monte-p .5s var(--gl-ease) backwards}\n.gl-region.est-entree li:nth-child(2) .gl-ligne{animation-delay:.05s}\n.gl-region.est-entree li:nth-child(3) .gl-ligne{animation-delay:.1s}\n.gl-region.est-entree li:nth-child(4) .gl-ligne{animation-delay:.15s}\n.gl-region.est-entree li:nth-child(n+5) .gl-ligne{animation-delay:.2s}\n@keyframes gl-monte-p{from{opacity:0;transform:translateY(12px)}}\n.gl-rail::after{content:'';flex:none;width:4px}\n.gl-jauge{position:relative;height:2px;margin:4px 0 14px;background:rgba(255,255,255,.14);overflow:hidden}\n.gl-jauge i{position:absolute;left:0;top:0;height:100%;width:30%;background:var(--gl-jaune);will-change:transform}\n.gl-region .gl-puces{gap:8px}\n.gl-region .gl-note{margin-top:12px}\n.gl-region.est-entree .gl-region-tete{animation:gl-apparait .45s var(--gl-ease) .08s backwards}\n.gl-region.est-entree .gl-carte{animation:gl-glisse .62s var(--gl-ease) backwards;animation-delay:calc(140ms + var(--k,0) * 60ms)}\n.gl-region.est-entree .gl-puces,.gl-region.est-entree .gl-jauge{animation:gl-apparait .45s var(--gl-ease) .3s backwards}\n@keyframes gl-glisse{from{opacity:0;transform:translateX(48px)}}\n.gl-fin{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr);gap:18px;padding:30px 16px 34px}\n.gl-services-p{display:grid;gap:8px}\n.gl-service{display:flex;align-items:center;gap:14px;min-height:58px;padding:7px 14px 7px 7px;border:1px solid rgba(255,255,255,.14);border-radius:14px 3px 14px 3px;font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase}\n.gl-service:hover{border-color:rgba(255,255,255,.5)}\n.gl-service-ico{display:grid;place-items:center;flex:none;width:44px;height:44px;border-radius:10px 2px 10px 2px;background:#fff;color:var(--gl-teal)}\n.gl-service-ico img{width:38px;height:38px;object-fit:contain}\n.gl-service-ico svg{width:22px;height:22px}\n.gl-service>svg{width:14px;height:14px;margin-left:auto;flex:none;opacity:.7}\n.gl-reseaux-p{display:flex;flex-wrap:wrap;gap:8px}\n.gl-reseaux-p a{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.18)}\n.gl-reseaux-p a:hover{border-color:#fff}\n.gl-reseaux-p img{width:20px;height:20px}\n.gl-partenaires-bloc{position:relative;margin-top:22px;padding-top:40px}\n.gl-partenaires-p{display:flex;align-items:center;justify-content:center;gap:clamp(14px,5vw,24px);height:100px;padding:0 60px 0 18px;background:#fff;border-radius:18px 4px 18px 4px}\n.gl-partenaires-p a{display:grid;place-items:center;flex:none;height:100px}\n.gl-partenaires-p img{height:clamp(52px,16vw,64px);width:auto;max-width:72px;object-fit:contain}\n.gl-partenaires-p a:last-child img{height:clamp(42px,13vw,52px)}\n.gl-tymal-p{position:absolute;right:-6px;top:0;z-index:2;width:72px;height:72px;transform:rotate(6deg)}\n.gl-tymal-p img{width:72px;height:72px;object-fit:contain}\n.gl-langues--fin{margin:0;gap:8px}\n.gl-langues--fin a{height:46px;padding:0 18px;border:1.5px solid rgba(255,255,255,.28)}\n.gl-langues--fin a[aria-current=\"true\"]{border-color:var(--gl-panneau)}\n.gl-p-recherche{position:relative;z-index:2;flex:none;display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:10px;padding:22px 16px 14px}\n.gl-champ{grid-column:1;position:relative;display:flex;align-items:center;gap:10px;height:48px;padding:0 6px 0 14px;border-radius:14px 5px 14px 5px;background:#fff;border:1px solid #fff;box-shadow:0 8px 24px rgba(7,16,34,.3);color:#0A1A35;transition:background .18s,box-shadow .18s}\n.gl-champ>svg{flex:none;width:18px;height:18px;color:#00676E}\n.gl-champ input{flex:1;min-width:0;height:100%;margin:0;padding:0;background:none;border:0;outline:0;color:#0A1A35;font:500 16px var(--gl-texte);text-overflow:ellipsis}\n.gl-champ input::placeholder{color:#5B6A80;font-size:13px}\n.gl-champ input:focus-visible,.gl-pal-champ input:focus-visible{outline:none}\n.gl-effacer{display:grid;place-items:center;flex:none;width:36px;height:36px;border-radius:50%;color:inherit}\n.gl-effacer svg{width:14px;height:14px}\n.gl-effacer[hidden]{display:none}\n.gl-annuler{grid-column:2;display:none;align-self:center;padding:0 2px;font-weight:700;font-size:12px;letter-spacing:.06em;color:#fff}\n.gl-indice{grid-column:1 / -1;margin:8px 2px 0;font-size:11px;color:rgba(255,255,255,.62)}\n.gl-indice:empty{display:none}\n.gl-acces{grid-column:1 / -1;display:flex;gap:10px;margin-top:10px;padding:0 4px}\n.gl-acces-lien{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;height:48px;border-radius:12px 3px 12px 3px;border:0;background:linear-gradient(115deg,#5DBFC0 0%,#1F8F92 52%,#006F7B 100%);box-shadow:0 10px 24px rgba(0,111,123,.38),inset 0 1px 0 rgba(255,255,255,.22);font-weight:800;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#fff;white-space:nowrap;transition:transform .2s var(--gl-ease),filter .2s}\n.gl-acces-lien svg{width:18px;height:18px;color:var(--gl-jaune)}\n.gl-acces-lien:hover{filter:brightness(1.07);transform:translateY(-1px)}\n.gl-acces-billet{position:relative;align-items:stretch;justify-content:flex-start;gap:0;height:62px;padding:0;border-radius:14px 4px 14px 4px;background:#1B2237;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.12),0 12px 26px rgba(0,0,0,.35);letter-spacing:0;text-transform:none;overflow:hidden}\n.gl-acces-billet::before,.gl-acces-billet::after{content:'';position:absolute;left:69px;z-index:2;width:14px;height:14px;border-radius:50%;background:#101626}\n.gl-acces-billet::before{top:-7px}\n.gl-acces-billet::after{bottom:-7px}\n.gl-billet-talon{position:relative;flex:none;width:76px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;background:linear-gradient(160deg,var(--gl-jaune),#F5BE41);color:var(--gl-marine)}\n.gl-billet-talon::after{content:'';position:absolute;right:-1px;top:6px;bottom:6px;border-right:2px dashed rgba(14,17,29,.35)}\n.gl-acces-billet .gl-billet-talon svg{width:20px;height:20px;color:var(--gl-marine)}\n.gl-billet-talon b{font:italic 400 14px/1 var(--gl-titre);letter-spacing:.02em}\n.gl-billet-corps{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:3px;padding:0 12px 0 18px;text-align:left}\n.gl-billet-corps b{font:italic 400 19px/1 var(--gl-titre);text-transform:uppercase;letter-spacing:.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gl-billet-corps small{font-weight:600;font-size:11.5px;color:#8FD3D4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gl-billet-fl{flex:none;display:flex;align-items:center;padding-right:16px;color:var(--gl-jaune)}\n.gl-acces-billet .gl-billet-fl svg{width:18px;height:18px;color:var(--gl-jaune);transition:transform .25s var(--gl-ease)}\n.gl-acces-billet:hover{filter:none;transform:translateY(-1px)}\n.gl-acces-billet:hover .gl-billet-fl svg{transform:translateX(3px)}\n.gl-acces-lien.gl-acces-billet[aria-current=\"page\"]{background:#1B2237;border-color:transparent;color:#fff;box-shadow:inset 0 0 0 1.5px var(--gl-jaune),0 12px 26px rgba(0,0,0,.35)}\n.gl-acces-lien--carte{background:linear-gradient(115deg,#FCF150 0%,#F5BE41 100%);box-shadow:0 10px 24px rgba(245,190,65,.3),inset 0 1px 0 rgba(255,255,255,.4);color:var(--gl-marine)}\n.gl-acces-lien--carte svg{color:var(--gl-marine)}\n.gl-acces-lien[aria-current=\"page\"]{background:var(--gl-jaune);border-color:var(--gl-jaune);color:var(--gl-marine)}\n.gl-acces-lien[aria-current=\"page\"] svg{color:var(--gl-marine)}\n.gl-acces-lien.gl-acces-billet[aria-current=\"page\"] .gl-billet-fl svg{color:var(--gl-jaune)}\n.gl-p-res{display:none}\n.gl-plein.en-recherche .gl-p-recherche{background:linear-gradient(118deg,#0A1A35 0%,#123A5C 62%,#0E4B52 100%);padding-bottom:16px}\n.gl-plein.en-recherche .gl-p-recherche::after{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,#FCF150,#72b9f1,#5DBFC0)}\n.gl-plein.en-recherche .gl-champ{height:54px;background:#fff;border-color:#fff;color:#0A1A35;box-shadow:0 10px 30px rgba(7,16,34,.35)}\n.gl-plein.en-recherche .gl-champ:focus-within{box-shadow:0 10px 30px rgba(7,16,34,.35),0 0 0 4px rgba(252,241,80,.35)}\n.gl-plein.en-recherche .gl-champ>svg{color:#00676E}\n.gl-plein.en-recherche .gl-champ input{color:#0A1A35;font-weight:500}\n.gl-plein.en-recherche .gl-champ input::placeholder{color:#8593A9}\n.gl-plein.en-recherche .gl-annuler{display:block}\n.gl-plein.en-recherche .gl-acces,.gl-plein.en-recherche .gl-p-corps{display:none}\n.gl-plein.en-recherche .gl-p-res{position:relative;z-index:1;display:block;flex:1 0 auto;padding:4px 14px calc(26px + env(safe-area-inset-bottom,0px));background:#F2F6F9;color:#0A1A35}\n.gl-plein.en-recherche .gl-mer{display:none}\n.gl-palette,.gl-plein{--rn-bg:#F2F6F9;--rn-ink:#0A1A35;--rn-ink-2:#45536E;--rn-ink-3:#8593A9;--rn-teal:#5DBFC0;--rn-teal-deep:#00676E;--rn-navy-1:#0A1A35;--rn-navy-2:#123A5C;--rn-navy-3:#0E4B52;--rn-amber:#FCF150;--rn-line:#E1E6EE;\n--rn-shadow:0 1px 2px rgba(10,26,53,.04),0 5px 18px rgba(10,26,53,.07)}\n.gl-sg-groupe+.gl-sg-groupe{margin-top:2px}\n.gl-sg-label{display:flex;align-items:center;gap:9px;margin:0;padding:20px 2px 10px;font-weight:700;font-size:10.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--rn-ink-3)}\n.gl-sg-tuile{flex:none;display:grid;place-items:center;width:22px;height:22px;border-radius:7px 2px 7px 2px;background:var(--rn-navy-1);color:var(--rn-amber)}\n.gl-sg-tuile svg{width:11px;height:11px}\n.gl-sg-label b{display:grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:rgba(10,26,53,.07);font-size:10px;letter-spacing:.02em;color:var(--rn-ink-2)}\n.gl-sg-label::after{content:'';flex:1;height:1px;background:var(--rn-line)}\n.gl-sg{display:flex;align-items:center;gap:14px;width:100%;margin:0 0 8px;padding:11px 14px;border-radius:12px 4px 12px 4px;background:#fff;border:1px solid var(--rn-line);box-shadow:0 1px 2px rgba(10,26,53,.04);font-weight:700;font-size:14px;color:var(--rn-ink);cursor:pointer;transition:border-color .14s,box-shadow .14s,transform .14s}\n.gl-sg::after{content:'';flex:none;width:8px;height:8px;margin:0 2px 0 4px;border-top:2px solid var(--rn-teal-deep);border-right:2px solid var(--rn-teal-deep);transform:rotate(45deg);opacity:0;transition:opacity .13s}\n.gl-sg:hover,.gl-sg[aria-selected=\"true\"]{border-color:var(--rn-teal);box-shadow:var(--rn-shadow);transform:translateY(-1px)}\n.gl-sg:hover::after,.gl-sg[aria-selected=\"true\"]::after{opacity:1}\n.gl-sg:focus-visible{outline:2px solid var(--rn-teal-deep);outline-offset:2px}\n.gl-sg[aria-disabled=\"true\"]{opacity:.6;cursor:default}\n.gl-sg[aria-disabled=\"true\"]:hover,.gl-sg[aria-disabled=\"true\"][aria-selected=\"true\"]{transform:none;box-shadow:0 1px 2px rgba(10,26,53,.04)}\n.gl-sg-ava{position:relative;flex:none;display:grid;place-items:center;width:52px;height:52px;overflow:hidden;border-radius:10px 3px 10px 3px;background:#DCF2EF;color:#0B6E6B;box-shadow:inset 0 0 0 1px rgba(10,26,53,.06)}\n.gl-sg-ava img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.gl-sg-ava svg{width:20px;height:20px}\n.gl-sg--skipper .gl-sg-ava{border-radius:50%;box-shadow:0 0 0 2px #fff,0 0 0 3.5px var(--rn-line)}\n.gl-sg--skipper:hover .gl-sg-ava,.gl-sg--skipper[aria-selected=\"true\"] .gl-sg-ava{box-shadow:0 0 0 2px #fff,0 0 0 3.5px var(--rn-teal)}\n.gl-sg-ini{position:absolute;inset:0;display:grid;place-items:center}\n.gl-sg-ini b{font-family:var(--gl-titre);font-style:italic;font-weight:normal;font-size:18px;line-height:1;color:var(--rn-navy-1)}\n.gl-sg-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}\n.gl-sg-titre{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.35}\n.gl-sg-titre mark{padding:0 1px;border-radius:2px;background:rgba(252,241,80,.6);color:inherit}\n.gl-sg-meta{display:flex;align-items:center;gap:6px;font-size:11px;letter-spacing:.03em;color:var(--rn-ink-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gl-sg-point{flex:none;width:8px;height:8px;border-radius:50%}\n.gl-sg-ext svg{width:11px;height:11px}\n.gl-sg-grille{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:10px}\n.gl-sg-groupe--focus{margin-bottom:6px}\n.gl-sg-focus{position:relative;display:flex;align-items:stretch;gap:18px;width:100%;padding:12px 18px 12px 12px;border-radius:16px 5px 16px 5px;background:#fff;border:1px solid var(--rn-line);box-shadow:0 1px 2px rgba(10,26,53,.04);color:var(--rn-ink);cursor:pointer;overflow:hidden;transition:border-color .14s,box-shadow .14s,transform .14s}\n.gl-sg-focus::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--sk,#5DBFC0)}\n.gl-sg-focus:hover,.gl-sg-focus[aria-selected=\"true\"]{border-color:var(--rn-teal);box-shadow:var(--rn-shadow);transform:translateY(-1px)}\n.gl-sg-focus-img{position:relative;flex:none;width:88px;height:110px;overflow:hidden;border-radius:12px 4px 12px 4px;background:#DCF2EF}\n.gl-sg-focus-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 18%}\n.gl-sg-focus-img .gl-sg-ini b{font-size:26px;color:#fff}\n.gl-sg-focus-txt{display:flex;flex-direction:column;justify-content:center;gap:4px;min-width:0}\n.gl-sg-focus-txt small{display:flex;align-items:center;gap:7px;font-weight:700;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--rn-ink-3)}\n.gl-sg-focus-txt b{font:italic normal 26px/1.02 var(--gl-titre);text-transform:uppercase;color:var(--rn-ink)}\n.gl-sg-focus-bateau{font-weight:700;font-size:12.5px;letter-spacing:.04em;color:var(--rn-ink-2)}\n.gl-sg-focus-pied{display:flex;align-items:center;flex-wrap:wrap;gap:8px 14px;margin-top:6px}\n.gl-sg-focus-cta{display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--rn-teal-deep)}\n.gl-sg-focus-cta svg{width:14px;height:14px;transition:transform .2s var(--gl-ease)}\n.gl-sg-focus:hover .gl-sg-focus-cta svg{transform:translateX(3px)}\n.gl-sg-focus-n{padding:3px 9px;border-radius:999px;background:#EEF3F7;font-weight:700;font-size:11px;color:var(--rn-ink-2)}\n.gl-sg-vide{padding:28px 12px 4px;text-align:center}\n.gl-sg-vide p{font-weight:700;font-size:13.5px;color:var(--rn-ink-2)}\n.gl-sg-vide small{display:block;margin-top:6px;font-size:12px;color:var(--rn-ink-3)}\n.gl-sg-essais,.gl-sg-themes{display:flex;flex-wrap:wrap;gap:10px;padding:2px 2px 6px}\n.gl-sg-essai,.gl-sg-theme{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 15px;border-radius:11px 4px 11px 4px;border:1px solid var(--rn-line);background:#fff;box-shadow:0 1px 2px rgba(10,26,53,.05);font-weight:700;font-size:12.5px;color:var(--rn-ink-2);white-space:nowrap;cursor:pointer;transition:border-color .15s,color .15s,background .15s,transform .12s,box-shadow .15s}\n.gl-sg-essai-ico{display:grid;color:var(--rn-teal-deep)}\n.gl-sg-essai-ico svg{width:14px;height:14px}\n.gl-sg-theme b{display:grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:rgba(10,26,53,.07);font-size:10px;color:var(--rn-ink-2);transition:background .15s,color .15s}\n.gl-sg-essai:hover,.gl-sg-essai[aria-selected=\"true\"],.gl-sg-theme:hover,.gl-sg-theme[aria-selected=\"true\"]{border-color:var(--rn-teal-deep);color:var(--rn-teal-deep);background:#EAF6F4;transform:translateY(-1px);box-shadow:var(--rn-shadow)}\n.gl-sg-theme:hover b,.gl-sg-theme[aria-selected=\"true\"] b{background:var(--rn-teal-deep);color:#fff}\n.gl-sg-essai:focus-visible,.gl-sg-theme:focus-visible{outline:2px solid var(--rn-teal-deep);outline-offset:2px}\n.gl-palette{position:fixed;inset:0;z-index:2147483100;display:flex;align-items:flex-start;justify-content:center;padding:max(7vh,22px) 24px 24px;background:linear-gradient(160deg,rgba(7,16,34,.55),rgba(11,110,107,.3));-webkit-backdrop-filter:blur(7px) saturate(1.08);backdrop-filter:blur(7px) saturate(1.08);animation:gl-fondu .2s ease-out}\n.gl-palette[hidden]{display:none}\n@keyframes gl-fondu{from{opacity:0}}\n.gl-pal-boite{position:relative;display:flex;flex-direction:column;width:min(1120px,92vw);max-height:min(86vh,800px);overflow:hidden;border-radius:20px 6px 20px 6px;background:var(--rn-bg);color:var(--rn-ink);box-shadow:0 34px 90px rgba(7,16,34,.4),0 8px 28px rgba(7,16,34,.2);animation:gl-pal .3s cubic-bezier(.22,1,.36,1) both}\n@keyframes gl-pal{from{opacity:0;transform:translateY(-16px) scale(.985)}}\n.gl-pal-tete{position:relative;flex:none;padding:18px 22px 20px;background:linear-gradient(118deg,var(--rn-navy-1) 0%,var(--rn-navy-2) 62%,var(--rn-navy-3) 100%)}\n.gl-pal-tete::after{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,var(--rn-amber),#72b9f1,var(--rn-teal))}\n.gl-pal-kick{display:flex;align-items:center;gap:10px;min-height:38px;margin:0 0 14px;padding-right:56px;font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#fff}\n.gl-flamme{flex:none;width:auto;height:20px}\n.gl-pal-x{position:absolute;top:14px;right:16px;display:grid;place-items:center;width:38px;height:38px;border-radius:12px 4px 12px 4px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);color:#fff;transition:background .15s,border-color .15s,color .15s,transform .18s}\n.gl-pal-x:hover{background:var(--rn-amber);border-color:var(--rn-amber);color:var(--rn-navy-1);transform:rotate(90deg)}\n.gl-pal-x svg{width:15px;height:15px}\n.gl-pal-champ{display:flex;align-items:center;gap:13px;height:58px;padding:0 10px 0 20px;border-radius:14px 5px 14px 5px;background:#fff;box-shadow:0 10px 30px rgba(7,16,34,.35);transition:box-shadow .18s}\n.gl-pal-champ:focus-within{box-shadow:0 10px 30px rgba(7,16,34,.35),0 0 0 4px rgba(252,241,80,.35)}\n.gl-pal-champ>svg{flex:none;width:20px;height:20px;color:var(--rn-teal-deep)}\n.gl-pal-champ input{flex:1;min-width:0;height:100%;margin:0;padding:0;background:transparent;border:0;outline:0;box-shadow:none;-webkit-appearance:none;appearance:none;font:400 16.5px var(--gl-texte);color:var(--rn-ink)}\n.gl-pal-champ input::placeholder{color:var(--rn-ink-3)}\n.gl-pal-effacer{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:9px;color:var(--rn-ink-2)}\n.gl-pal-effacer:hover{background:rgba(10,26,53,.06)}\n.gl-pal-effacer svg{width:14px;height:14px}\n.gl-pal-effacer[hidden]{display:none}\n.gl-pal-corps{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(300px,1fr);flex:1 1 auto;min-height:0;height:min(560px,calc(86vh - 192px))}\n.gl-pal-gauche{min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 18px 18px 22px;scrollbar-width:thin;scrollbar-color:var(--rn-teal) transparent}\n.gl-pal-droite{display:flex;flex-direction:column;min-height:0;padding:0 22px 18px 10px}\n.gl-tuiles-pal{flex:1;min-height:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:minmax(0,1.45fr) minmax(0,1fr) minmax(0,1fr);gap:10px}\n.gl-tp{position:relative;display:block;min-height:0;overflow:hidden;isolation:isolate;border-radius:16px 4px 16px 4px;background:var(--t1,#006F7B);color:#fff;text-align:left;box-shadow:var(--rn-shadow);cursor:pointer;transition:transform .2s var(--gl-ease),box-shadow .2s}\n.gl-tp-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s var(--gl-ease)}\n.gl-tp::after{content:'';position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(10,26,53,.25) 0%,rgba(10,26,53,0) 32%,rgba(10,26,53,.1) 48%,rgba(10,26,53,.86) 100%)}\n.gl-tp:hover,.gl-tp:focus-visible{transform:translateY(-2px);box-shadow:0 3px 6px rgba(10,26,53,.07),0 14px 34px rgba(10,26,53,.2)}\n.gl-tp:hover .gl-tp-img{transform:scale(1.05)}\n.gl-tp:focus-visible{outline:3px solid var(--rn-amber);outline-offset:2px}\n.gl-tp-fond{position:absolute;inset:0;display:none;align-items:center;justify-content:flex-end;padding-right:16px;background:linear-gradient(150deg,var(--t1,#006F7B) 0%,#0A1A35 85%);color:rgba(255,255,255,.26)}\n.gl-tp-fond::before{content:'';position:absolute;right:-24px;top:-24px;width:120px;height:120px;background:repeating-conic-gradient(rgba(255,255,255,.12) 0 25%,rgba(255,255,255,0) 0 50%) 0 0/24px 24px;transform:rotate(-10deg)}\n.gl-tp-fond svg{position:relative;width:46px;height:46px}\n.gl-tp.sans-image .gl-tp-fond{display:flex}\n.gl-tp-num{position:absolute;left:12px;top:10px;z-index:2;font-weight:700;font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.8)}\n.gl-tp-txt{position:absolute;left:0;right:0;bottom:0;z-index:2;display:flex;flex-direction:column;gap:4px;padding:10px 13px 12px}\n.gl-tp-titre{font-family:var(--gl-titre);font-style:italic;font-size:18px;line-height:1;text-transform:uppercase;padding-right:.1em}\n.gl-tp--grand{container-type:inline-size}\n.gl-tp--grand .gl-tp-titre{font-size:min(22px,calc((100cqi - 26px) / (var(--len,10) * .72)))}\n.gl-tp-sous{font-weight:700;font-size:11px;line-height:1.3;color:var(--rn-amber)}\n.gl-pal-pied{flex:none;display:flex;align-items:center;gap:18px;padding:12px 22px;border-top:1px solid var(--rn-line);background:#fff;font-weight:700;font-size:11px;color:var(--rn-ink-3)}\n.gl-pal-pied>span{display:inline-flex;align-items:center}\n.gl-palette .gl-pal-pied kbd{min-width:0;height:auto;margin-right:6px;padding:4px 7px;border:1px solid var(--rn-line);border-bottom-width:2px;border-radius:6px;background:var(--rn-bg);box-shadow:none;font:700 10px/1 var(--gl-texte);color:var(--rn-ink-2)}\n.gl-palette .gl-pal-pied kbd+kbd{margin-left:-2px}\n@media (max-width:1180px){ .gl-pal-corps{grid-template-columns:minmax(0,1.3fr) minmax(280px,1fr)} }\n.gl-plein .gl-sg-grille{grid-template-columns:minmax(0,1fr)}\n.gl-plein .gl-sg{min-height:64px}\n.gl-plein .gl-sg-ava{width:48px;height:48px}\n.gl-plein .gl-sg-essai,.gl-plein .gl-sg-theme{height:44px}\n@media (min-width:751px){ .gl-plein .gl-sg-grille{grid-template-columns:repeat(2,minmax(0,1fr))} }\n.gl-themes{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}\n.gl-themes a{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 10px 0 12px;border-radius:11px 4px 11px 4px;border:1px solid rgba(255,255,255,.22);font-weight:700;font-size:11.5px;color:#fff;white-space:nowrap;transition:border-color .15s,background .15s}\n.gl-themes a:hover{border-color:var(--gl-teal-c);background:rgba(93,191,192,.12)}\n.gl-theme-ico{display:grid;color:var(--gl-teal-c)}\n.gl-theme-ico svg{width:14px;height:14px}\n.gl-themes b{display:grid;place-items:center;min-width:20px;height:18px;padding:0 5px;border-radius:9px;background:rgba(255,255,255,.12);font-size:10px}\n.gl-themes a:hover b{background:var(--gl-teal-c);color:var(--gl-marine)}\n.gl-large .gl-themes{gap:6px}\n.gl-large .gl-themes a{gap:6px;padding:0 8px 0 9px;font-size:11px}\n.gl-large .gl-theme-ico svg{width:13px;height:13px}\n.gl-large .gl-themes b{min-width:18px;padding:0 4px}\n@media (min-width:1001px) and (max-width:1440px){ .gl-large .gl-theme-ico{display:none} }\n@media (min-width:1001px) and (max-width:1180px){\n.gl-large .gl-themes{max-height:34px;overflow:hidden}\n.gl-large .gl-themes li[data-slug=\"animation\"]{order:-1}\n}\n.gl-prog-pc{flex:1 1 0;min-height:0;display:flex;flex-direction:column;gap:12px}\n.gl-prog{flex:1 1 0;min-height:0;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto;gap:12px}\n.gl-prog-jour{grid-row:1 / span 2;position:relative;display:flex;flex-direction:column;min-height:0;overflow:hidden;padding:16px 16px 14px;border-radius:18px 4px 18px 4px;background:var(--gl-panneau);border:1px solid rgba(255,255,255,.08)}\n.gl-prog-jour.a-photo{padding-top:0}\n.gl-prog-jour-img{position:relative;display:block;flex:none;height:clamp(84px,16vh,170px);margin:0 -16px 12px;overflow:hidden}\n.gl-prog-jour-img img{width:100%;height:100%;object-fit:cover}\n.gl-prog-jour-img::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(27,34,55,0) 45%,var(--gl-panneau) 100%)}\n.gl-prog-titre{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:4px 10px;margin:0 0 8px;font-weight:700;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gl-teal-c)}\n.gl-prog-quand{font-size:12px;letter-spacing:.02em;text-transform:none;color:#fff}\n.gl-prog-quand::first-letter{text-transform:uppercase}\n.gl-prog-journee-jour{align-self:flex-start;margin:0 0 8px;padding:4px 9px;border-radius:6px;background:rgba(252,221,0,.14);font-weight:700;font-size:11px;color:var(--gl-jaune)}\n.gl-pj{display:flex;flex-direction:column;gap:2px;min-height:0;margin:0;padding:0;list-style:none;overflow:hidden}\n.gl-pj-item{display:flex;align-items:flex-start;gap:12px;padding:8px 6px;border-radius:10px 3px 10px 3px;color:#fff;transition:background .15s}\n.gl-pj-item:hover{background:rgba(255,255,255,.06)}\n.gl-pj-heure{flex:none;min-width:62px;padding-top:1px;font-family:var(--gl-titre);font-style:italic;font-size:19px;line-height:1;white-space:nowrap;color:var(--gl-jaune)}\n.gl-pj-txt{min-width:0}\n.gl-pj-item--vedette .gl-pj-titre::before{content:'';display:inline-block;width:8px;height:8px;margin-right:7px;vertical-align:1px;background:var(--gl-jaune);transform:skewX(-10deg)}\n.gl-pj-titre{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-weight:700;font-size:13px;line-height:1.3}\n.gl-pj-meta{display:block;margin-top:3px;font-size:11px;line-height:1.35;color:rgba(255,255,255,.62)}\n.gl-pj-meta b{font-weight:700;color:var(--gl-teal-c)}\n.gl-pj-tout{display:inline-flex;align-items:center;gap:8px;margin-top:auto;padding-top:10px;font-weight:700;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--gl-jaune)}\n.gl-pj-tout svg{width:15px;height:15px}\n.gl-prog-avenir{grid-column:2 / span 2;display:flex;flex-direction:column;min-height:0}\n.gl-prog-cartes{flex:1;min-height:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n.gl-prog-journees{grid-column:2 / span 2}\n.gl-prog-journees ul{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:0;padding:0;list-style:none}\n.gl-journee{display:flex;align-items:center;gap:10px;height:60px;padding:0 10px 0 7px;border-radius:14px 4px 14px 4px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#fff;transition:border-color .15s}\n.gl-journee:hover{border-color:var(--gl-teal-c)}\n.gl-journee-txt{min-width:0}\n.gl-journee-titre{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-weight:700;font-size:12px;line-height:1.22}\n.gl-journee-part{display:block;margin-top:2px;font-size:10.5px;color:var(--gl-teal-c);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gl-prog-date{flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;width:44px;height:46px;border-radius:10px 3px 10px 3px;background:var(--jc,var(--gl-teal));color:#fff;line-height:1}\n.gl-prog-date b{font-family:var(--gl-titre);font-style:italic;font-weight:normal;font-size:20px}\n.gl-prog-date small{margin-top:2px;font-weight:700;font-size:8.5px;letter-spacing:.1em;text-transform:uppercase}\n.gl-carte .gl-prog-date{position:absolute;left:12px;top:12px;z-index:2}\n.gl-carte--prog .gl-carte-titre{-webkit-line-clamp:3}\n.gl-prog-tel{padding-top:2px}\n.gl-prog-attente{margin:6px 0 14px;font-size:12px;color:rgba(255,255,255,.6)}\n.gl-sq{display:block;border-radius:8px;background:linear-gradient(100deg,rgba(255,255,255,.055) 20%,rgba(255,255,255,.14) 40%,rgba(255,255,255,.055) 60%);background-size:260% 100%;animation:gl-sq 1.5s ease-in-out infinite}\n@keyframes gl-sq{from{background-position:100% 0}to{background-position:-60% 0}}\n.gl-sq-prog{flex:1 1 0;min-height:0;display:flex;flex-direction:column;gap:12px}\n.gl-sq-themes{display:flex;flex-wrap:wrap;gap:6px;max-height:34px;overflow:hidden}\n.gl-sq-pill{flex:none;height:34px;border-radius:11px 4px 11px 4px}\n.gl-sq-img{flex:none;height:clamp(84px,16vh,170px);margin:-16px -16px 14px;border-radius:0}\n.gl-sq-ligne{height:13px;margin:0 0 8px}\n.gl-sq-ligne--fine{height:9px}\n.gl-sq-item{display:flex;gap:12px;padding:8px 6px}\n.gl-sq-item>div{flex:1;min-width:0}\n.gl-sq-heure{flex:none;width:62px;height:20px}\n.gl-sq-carte{min-height:120px;border-radius:18px 4px 18px 4px}\n.gl-sq-journee{height:60px;border-radius:14px 4px 14px 4px}\n.gl-rail>.gl-sq-carte--rail{flex:none;width:248px;height:300px}\n@media (prefers-reduced-motion:reduce){.gl-sq{animation:none}}\n.gl-themes--rail{flex-wrap:nowrap;overflow-x:auto;margin:0 -16px 12px;padding:0 16px 4px;scrollbar-width:none}\n.gl-themes--rail::-webkit-scrollbar{display:none}\n.gl-carte--jour{display:flex;flex-direction:column;padding:14px 12px 12px;background:var(--gl-panneau);border:1px solid rgba(255,255,255,.1)}\n.gl-carte--jour::after{display:none}\n.gl-rail>.gl-carte--jour{width:280px}\n.gl-carte--jour .gl-pj-item{padding:7px 4px}\n.gl-carte--jour .gl-pj-heure{min-width:54px;font-size:17px}\n.gl-carte--journee .gl-carte-sous{color:var(--gl-teal-c)}\n@media (min-width:751px){\n.gl-prog-tel .gl-themes--rail{flex-wrap:wrap;margin:0 0 12px;padding:0}\n.gl-prog-tel .gl-rail>.gl-carte--jour{grid-column:1 / -1;height:auto}\n.gl-prog-tel .gl-jauge{display:none}\n}\n@media (min-width:1001px) and (max-height:820px){\n.gl-themes a{height:30px;font-size:11px}\n.gl-prog-jour{padding:12px 14px 10px}\n.gl-pj-item{padding:6px 4px}\n.gl-pj-heure{font-size:17px;min-width:56px}\n.gl-journee{height:52px}\n.gl-prog-date{width:40px;height:42px}\n.gl-prog-date b{font-size:18px}\n}\n@media (min-width:751px){\n.gl-defil{display:grid;grid-template-rows:auto auto minmax(0,1fr);overflow:hidden}\n.gl-p-recherche{padding:14px 32px 12px;grid-template-columns:minmax(0,1fr) auto auto;column-gap:14px}\n.gl-p-recherche .gl-acces{grid-column:3;grid-row:1;margin-top:0;width:min(400px,40vw)}\n.gl-p-recherche .gl-acces-billet{height:48px}\n.gl-p-recherche .gl-billet-talon{width:60px;flex-direction:row;gap:5px}\n.gl-p-recherche .gl-acces-billet::before,.gl-p-recherche .gl-acces-billet::after{left:53px}\n.gl-p-recherche .gl-billet-corps small{display:none}\n.gl-plein.en-recherche .gl-p-recherche .gl-annuler{grid-column:2;grid-row:1}\n.gl-p-recherche .gl-indice{grid-column:1;grid-row:2}\n.gl-p-corps{grid-row:3}\n.gl-plein.en-recherche .gl-p-res{min-height:0;overflow-y:auto;padding:4px 32px 30px}\n.gl-plein.en-recherche .gl-defil{grid-template-rows:auto auto minmax(0,1fr)}\n.gl-plein.en-recherche .gl-p-res{grid-row:3}\n.gl-lignes{max-width:560px}\n.gl-p-tete{position:relative}\n.gl-p-corps{display:grid;grid-template-columns:minmax(280px,36%) minmax(0,1fr);column-gap:40px;min-height:0;padding:0 32px}\n.gl-gauche{min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.2) transparent}\n.gl-scene-t{position:relative;display:block;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:6px 4px 30px 0;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.2) transparent}\n.gl-scene-t .gl-chiffre{top:-.3em;font-size:230px}\n.gl-liste{padding:0}\n.gl-rub-btn{min-height:60px}\n.gl-rub-lib{font-size:clamp(28px,3.9vw,42px)}\n.gl-liste.a-un-large .gl-rub:not(.est-large) .gl-rub-btn{min-height:60px;padding:11px 0 9px}\n.gl-liste.a-un-large .gl-rub:not(.est-large) .gl-rub-lib{font-size:clamp(28px,3.9vw,42px);opacity:.42}\n.gl-rub.est-large .gl-rub-lib{font-size:clamp(28px,3.9vw,42px);transform:translateX(8px);transition:transform .38s var(--gl-ease),opacity .3s ease}\n.gl-rub-lib--long,.gl-liste.a-un-large .gl-rub:not(.est-large) .gl-rub-lib--long,.gl-rub.est-large .gl-rub-lib--long{font-size:min(clamp(28px,3.9vw,42px),calc((100cqi - 48px) / (var(--len) * .78)))}\n.gl-rub.est-large .gl-rub-num svg{transform:rotate(-90deg)}\n.gl-region{position:relative;z-index:1;padding:0}\n.gl-region .gl-kicker{display:block}\n.gl-region .gl-lead{font-size:13.5px;max-width:46ch}\n.gl-region-actions{flex-direction:row;align-items:center}\n.gl-rail{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0 0 16px;padding:0;overflow:visible}\n.gl-rail::after{display:none}\n.gl-rail>.gl-carte,.gl-rail>.gl-carte--village{width:auto;height:210px}\n.gl-rail>.gl-carte--skipper{width:auto;height:236px}\n.gl-carte--village .gl-carte-titre{font-size:clamp(18px,2.6vw,24px)}\n.gl-rail>.gl-carte--village,.gl-rail>.gl-carte--grande{grid-column:1 / -1}\n.gl-carte--village .gl-bande-date{font-size:11.5px}\n.gl-region[data-cle=\"skippers\"] .gl-rail{grid-template-columns:repeat(3,minmax(0,1fr))}\n.gl-region[data-cle=\"skippers\"] .gl-carte-txt{padding:12px 11px 13px}\n.gl-region[data-cle=\"skippers\"] .gl-carte--skipper{--sk-max:21px}\n.gl-region[data-cle=\"skippers\"] .gl-banniere{height:62px;right:6px}\n.gl-jauge{display:none}\n.gl-fin{padding:26px 0 30px}\n}\n@media (min-width:1001px) and (max-height:820px){\n.gl-large-grille{padding-top:36px;padding-bottom:20px}\n.gl-contenu{gap:10px}\n.gl-lead{font-size:13px;line-height:1.4}\n.gl-kicker{margin-bottom:4px}\n.gl-tout{height:38px;font-size:12.5px}\n.gl-puce a{padding:6px 12px;font-size:10px}\n.gl-carte-txt{padding:11px 12px 13px;gap:4px}\n.gl-carte-titre{font-size:16.5px}\n.gl-carte-sous{font-size:11.5px}\n.gl-bande-date{height:40px;font-size:12px}\n.gl-carte--village .gl-carte-txt{bottom:40px}\n.gl-banniere{height:64px}\n.gl-sommaire-pied{padding-top:12px}\n.gl-large-grille{grid-template-columns:clamp(262px,25vw,360px) minmax(0,1fr);column-gap:clamp(22px,2.6vw,40px);padding-top:26px;padding-bottom:16px}\n.gl-onglet-lib{--ong-fs:clamp(24px,min(4.6vh,2.8vw),38px);font-size:var(--ong-fs)}\n.gl-onglet{padding:clamp(3px,1vh,9px) 0}\n.gl-onglet .gl-num{margin-top:clamp(3px,.8vh,7px);width:26px;font-size:10px}\n.gl-sommaire-pied .gl-cadran{width:36px;height:36px}\n.gl-sommaire-pied .gl-compte b{font-size:12px}\n.gl-sommaire-pied .gl-compte b[data-u=\"j\"]{font-size:14px}\n.gl-cartes{gap:10px}\n.gl-carte-titre{font-size:15.5px}\n.gl-dispo-actus .gl-carte:first-child .gl-carte-titre,.gl-dispo-a-propos .gl-carte--grande .gl-carte-titre{font-size:clamp(19px,3vh,24px)}\n.gl-dispo-village .gl-carte:first-child .gl-carte-titre{font-size:clamp(24px,4.2vh,34px)}\n.gl-carte--village .gl-carte-titre{font-size:26px}\n.gl-large .gl-carte--skipper{--sk-max:clamp(20px,3vh,26px)}\n.gl-tout{height:34px;padding:0 16px;font-size:12px}\n.gl-lead{font-size:12.5px}\n}\n@media (min-width:1001px) and (max-height:700px){\n.gl-large-grille{padding-top:20px;padding-bottom:12px}\n.gl-onglet-lib{--ong-fs:clamp(22px,4.3vh,31px);font-size:var(--ong-fs)}\n.gl-onglet{padding:clamp(2px,.8vh,6px) 0}\n.gl-contenu{gap:8px}\n}\n@media (min-width:751px) and (max-width:1000px) and (max-height:760px){\n.gl-rub-btn,.gl-liste.a-un-large .gl-rub:not(.est-large) .gl-rub-btn{min-height:54px;padding:9px 0 7px}\n.gl-rail>.gl-carte,.gl-rail>.gl-carte--village{height:190px}\n.gl-rail>.gl-carte--skipper{height:216px}\n}\n.gl-leger .gl-vague,.gl-leger .gl-grain,.gl-leger .gl-large-vague{animation:none!important}\n.gl-leger .gl-palette{-webkit-backdrop-filter:none;backdrop-filter:none}\n.gl-leger .gl-carte>.gl-photo:not(.est-bd){display:none}\n.gl-leger .gl-carte>.gl-photo.est-bd{filter:saturate(.9)}\n.gl-leger .gl-tuile{display:flex}\n.gl-leger .gl-banniere,.gl-leger .gl-sk-prenom img,.gl-leger .gl-cadran,.gl-leger .gl-tymal,.gl-leger .gl-tymal-p{display:none}\n.gl-leger .gl-voir-img{display:inline-flex}\n.gl-leger .gl-partenaires-p{padding-right:16px}\n@media (prefers-reduced-motion:reduce){\n.gl *,.gl *::before,.gl *::after,.gl-plein *,.gl-plein *::before,.gl-plein *::after{animation:none!important;transition:none!important}\n.gl-plein,.gl-large,.gl-voile{transition:none!important}\n.gl-palette,.gl-palette *{animation:none!important;transition:none!important}\n}\n.gl.gl-intro-attente>.gl-haut,.gl.gl-intro-attente>.gl-barre,.gl.gl-intro-attente>.gl-bande{opacity:0;pointer-events:none}\n.gl.gl-intro-joue>.gl-haut{animation:gl-in-haut .55s cubic-bezier(.2,.8,.2,1) both}\n.gl.gl-intro-joue>.gl-barre{animation:gl-in-barre .72s cubic-bezier(.2,.8,.2,1) .12s both}\n.gl.gl-intro-joue .gl-logo{animation:gl-in-logo .75s cubic-bezier(.34,1.56,.64,1) .36s both}\n.gl.gl-intro-joue .gl-nav .gl-entree{animation:gl-in-entree .5s cubic-bezier(.2,.8,.2,1) .5s both}\n.gl.gl-intro-joue .gl-nav .gl-entree:nth-child(2){animation-delay:.56s}\n.gl.gl-intro-joue .gl-nav .gl-entree:nth-child(3){animation-delay:.62s}\n.gl.gl-intro-joue .gl-nav .gl-entree:nth-child(4){animation-delay:.68s}\n.gl.gl-intro-joue .gl-nav .gl-entree:nth-child(5){animation-delay:.74s}\n.gl.gl-intro-joue .gl-nav .gl-entree:nth-child(6){animation-delay:.8s}\n.gl.gl-intro-joue .gl-droite,.gl.gl-intro-joue .gl-decor{animation:gl-in-fondu .7s ease .82s both}\n.gl.gl-intro-joue>.gl-bande{animation:gl-in-bande .6s cubic-bezier(.2,.8,.2,1) .8s both}\n@keyframes gl-in-haut{from{transform:translateY(-100%)}}\n@keyframes gl-in-barre{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}}\n@keyframes gl-in-logo{from{opacity:0;transform:scale(.55) rotate(-6deg)}}\n@keyframes gl-in-entree{from{opacity:0;transform:translateY(12px)}}\n@keyframes gl-in-fondu{from{opacity:0}}\n@keyframes gl-in-bande{from{opacity:0;transform:translateY(-100%)}}\n.gl.gl-douce-attente>.gl-haut,.gl.gl-douce-attente>.gl-barre,.gl.gl-douce-attente>.gl-bande{opacity:0;pointer-events:none}\n.gl.gl-douce-joue>.gl-haut,.gl.gl-douce-joue>.gl-barre,.gl.gl-douce-joue>.gl-bande{animation:gl-douce .5s cubic-bezier(.2,.8,.2,1) both}\n.gl.gl-douce-joue>.gl-barre{animation-delay:.05s}\n.gl.gl-douce-joue>.gl-bande{animation-delay:.1s}\n@keyframes gl-douce{from{opacity:0;transform:translateY(-14px)}}\n@property --p{syntax:'<number>';inherits:true;initial-value:0}\n:root{\n--gt-pente:.17633;\n--gt-h-n:78;\n--gt-hc-n:60;\n--gt-r-n:42;\n--gt-logo-n:66;\n--gt-logo-cn:50;\n--gt-pad:12px;--gt-gap:12px;--gt-montre:28px;--gt-esp:9.5px;--gt-esp-d:10px;--gt-menu-l:60px;\n--gt-ty-l:36px;--gt-ty-h:42px;\n--gt-ty-out:15px;\n}\n@media (min-width:751px){ .gt{display:none!important} }\n.gt{font-family:var(--gl-texte);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}\n.gt *,.gt *::before,.gt *::after{box-sizing:border-box}\n:where(.gt) :where(a){color:inherit;text-decoration:none}\n:where(.gt) :where(img){display:block;max-width:none;border:0}\n:where(.gt) :where(button){font:inherit;color:inherit;background:none;border:0;margin:0;padding:0;cursor:pointer;text-align:inherit}\n:where(.gt) :where(svg){display:block}\n.gt :focus-visible{outline:2px solid var(--gl-jaune);outline-offset:2px}\n.gt-rangee :focus-visible{outline-color:var(--gl-teal)}\n.gt{--gt-h:calc(var(--gt-h-n) * 1px);--gt-dh:calc((var(--gt-h-n) - var(--gt-hc-n)) * 1px);--gt-course:calc((var(--gt-h-n) + var(--gt-r-n) - var(--gt-hc-n)) * 1px);\n--gt-f:8px;--gt-fx:12px;--gt-fb:27px;--gt-fm:8px;--gt-biais:calc(var(--gt-hc-n) * var(--gt-pente) * 1px);\nposition:fixed;top:0;left:0;right:0;z-index:2147483001;height:calc((var(--gt-h-n) + var(--gt-r-n)) * 1px);color:var(--gl-marine);pointer-events:none}\n.gt.est-pleine{--gt-f:0px;--gt-fx:0px;--gt-fb:0px;--gt-fm:0px}\n.gt>*{pointer-events:auto}\n.gt.est-anime{transition:--p .42s var(--gl-ease)}\n.gt-coque{position:absolute;left:0;right:0;top:0;z-index:2;height:var(--gt-h);pointer-events:none;filter:drop-shadow(0 6px 10px rgba(14,17,29,calc(.3 * var(--p))))}\n.gt-coque>*{pointer-events:auto}\n.gt.est-pleine .gt-coque{filter:none}\n.gt-rangee{position:absolute;inset:0;display:flex;align-items:center;padding-left:var(--gt-pad);background:#fff;\ntransform:translate3d(0,calc((var(--gt-dh) - var(--gt-f)) * -1 * var(--p)),0);will-change:transform;\nclip-path:polygon(\ncalc((var(--gt-f) + var(--gt-biais)) * var(--p)) calc(var(--gt-dh) * var(--p)),\ncalc(100% - var(--gt-f) * var(--p)) calc(var(--gt-dh) * var(--p)),\ncalc(100% - (var(--gt-f) + var(--gt-biais)) * var(--p)) 100%,\ncalc(var(--gt-f) * var(--p)) 100%)}\n.gt.est-pleine .gt-rangee{clip-path:inset(0 0 -24px 0)}\n.gt.est-pleine .gt-rangee::after{content:'';position:absolute;left:0;right:0;top:100%;height:16px;pointer-events:none;background:linear-gradient(rgba(14,17,29,.2),rgba(14,17,29,0));opacity:var(--p)}\n.gt-logo{position:relative;z-index:1;flex:none;display:block;width:calc(var(--gt-logo-n) * 1px);height:calc(var(--gt-logo-n) * 1px);transform-origin:0 50%;\ntransform:translate3d(calc(var(--gt-fx) * var(--p)),calc(var(--gt-dh) * .5 * var(--p)),0) scale(calc(1 - (1 - var(--gt-logo-cn) / var(--gt-logo-n)) * var(--p)))}\n.gt-logo img{width:100%;height:100%}\n.gt-instr{flex:none;display:flex;align-items:center;gap:6px;margin-left:var(--gt-gap);white-space:nowrap;\ntransform:translate3d(calc((var(--gt-logo-cn) - var(--gt-logo-n)) * 1px * var(--p) + var(--gt-fx) * var(--p)),calc(var(--gt-dh) * .5 * var(--p)),0)}\n.gt .gl-cadran{width:var(--gt-montre);height:var(--gt-montre)}\n.gt-chrono{position:relative;flex:none;display:flex;transform:translate3d(-3px,-5.5px,0)}\n.gt-alpina-m{position:absolute;left:50%;top:calc(100% + 3px);display:block;width:auto;height:8px;max-width:none;transform:translateX(-50%);pointer-events:none}\n.gt-compte{display:grid;grid-template-rows:11px 19px 12px;row-gap:1px;align-content:center}\n.gt-compte small{display:block;font-weight:700;font-size:9px;line-height:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--gl-teal);\nopacity:calc(1 - var(--p) * 2.4);transform:translate3d(0,calc(-4px * var(--p)),0)}\n.gt-jour{display:block;font:italic normal 20px/19px var(--gl-titre);letter-spacing:.01em;color:var(--gl-marine);transform:translate3d(0,calc(-6px * var(--p)),0)}\n.gt-hms{display:block;font-weight:700;font-size:10.5px;line-height:12px;letter-spacing:.03em;font-variant-numeric:tabular-nums;color:var(--gl-teal);transform:translate3d(0,calc(-6px * var(--p)),0)}\n.gt-hms b{font-weight:700}\n.gt-bloc{position:absolute;top:0;bottom:0;right:-16px;display:flex;transform:translate3d(calc(var(--gt-fb) * -1 * var(--p)),0,0) skewX(-10deg)}\n.gt-bloc-in{display:flex;align-items:center;gap:6px;\ntransform:translate3d(calc(var(--gt-dh) * .5 * var(--p) * var(--gt-pente)),calc(var(--gt-dh) * .5 * var(--p)),0) skewX(10deg)}\n.gt-espace{position:relative;z-index:1;display:flex;align-items:center;margin-right:-2px;\npadding:0 calc(var(--gt-esp-d) + 2px) 0 calc(var(--gt-ty-l) - var(--gt-ty-out) + 5px);\nbackground:linear-gradient(0deg,#FCDD00 0%,#FFB338 100%);color:var(--gl-marine);\nfont-weight:700;font-size:var(--gt-esp);letter-spacing:.02em;white-space:nowrap;\nclip-path:inset(0 0 0 calc((var(--gt-ty-l) - var(--gt-ty-out) + 5px - var(--gt-esp-d)) * var(--p)))}\n.gt-espace:active{filter:brightness(.97)}\n.gt-ty{position:absolute;z-index:3;bottom:0;left:calc(var(--gt-ty-out) * -1);display:block;width:var(--gt-ty-l);height:var(--gt-ty-h);\ntransform-origin:50% 100%;transform:skewX(10deg) translate3d(0,calc(var(--gt-ty-h) * 1.6 * var(--p)),0);opacity:calc(1 - var(--p) * 2.6);\nclip-path:inset(0 0 calc(var(--gt-ty-h) * 1.6 * var(--p)) 0)}\n.gt-ty img{width:100%;height:100%;object-fit:contain;object-position:50% 100%}\n.gt.est-compacte .gt-ty{visibility:hidden}\n.gt-menu{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;width:var(--gt-menu-l);padding:0 20px 0 2px;color:#fff;background:var(--gl-marine)}\n.gt-menu .gt-bloc-in{flex-direction:column;gap:5px;\ntransform:translate3d(calc(var(--gt-dh) * .5 * var(--p) * var(--gt-pente) + var(--gt-fm) * var(--p)),calc(var(--gt-dh) * .5 * var(--p)),0) skewX(10deg)}\n.gt-menu svg{width:22px;height:14px;color:var(--gl-jaune)}\n.gt-menu .gt-x{display:none;width:14px;height:14px;color:#fff;transition:transform .3s var(--gl-ease)}\n.gt-menu small{font-weight:700;font-size:8.5px;line-height:1;letter-spacing:.16em;text-transform:uppercase}\n.gt-menu[aria-expanded=\"true\"] small{letter-spacing:.02em}\n.gt-menu[aria-expanded=\"true\"] .gt-houle{display:none}\n.gt-menu[aria-expanded=\"true\"] .gt-x{display:block}\n.gt-espace:focus-visible,.gt-menu:focus-visible{outline-offset:-5px}\n.gt-espace:focus-visible{outline-color:var(--gl-marine)}\n.gt-menu:focus-visible{outline-color:var(--gl-jaune)}\n.gt-ruban{position:absolute;left:0;right:0;top:var(--gt-h);z-index:1;display:flex;align-items:center;height:calc(var(--gt-r-n) * 1px);\nbackground:linear-gradient(90deg,#006F7B,#006571);color:#fff;clip-path:inset(0);\ntransform:translate3d(0,calc(var(--gt-course) * -1 * var(--p)),0);opacity:calc(1 - var(--p) * 2.2);will-change:transform,opacity}\n.gt.est-pleine .gt-ruban{opacity:calc(1 - var(--p) * var(--p))}\n.gt.est-compacte .gt-ruban{visibility:hidden}\n.gt-lg{flex:none;position:relative;display:flex;align-items:center;height:28px;margin-left:var(--gt-pad);padding:0 10px 0 9px;border:1px solid rgba(255,255,255,.42);background:rgba(255,255,255,.07);color:#fff;transform:skewX(-10deg);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.gt-lg::after{content:'';position:absolute;left:-6px;right:-6px;top:-6px;bottom:-6px}\n.gt-lg:active{background:rgba(255,255,255,.16)}\n.gt-lg-in{display:flex;align-items:center;gap:6px;transform:skewX(10deg);font-weight:800;font-size:11px;letter-spacing:.08em}\n.gt-lg-chev{width:9px;height:9px;transition:transform .25s}\n.gt-lg[aria-expanded=\"true\"] .gt-lg-chev{transform:rotate(180deg)}\n.gt-lg:focus-visible{outline:2px solid #fff;outline-offset:2px}\n.gt-rond{display:block;flex:none;width:16px;height:16px;border-radius:50%;overflow:hidden;box-shadow:0 0 0 1.5px rgba(255,255,255,.7)}\n.gt-rond svg{display:block;width:100%;height:100%}\n.gt-lg-liste{position:absolute;z-index:3;left:var(--gt-pad);top:calc(var(--gt-h) + var(--gt-r-n) * 1px + 6px);min-width:168px;margin:0;padding:6px;list-style:none;background:#fff;border-radius:12px 3px 12px 3px;box-shadow:0 18px 34px -12px rgba(14,17,29,.55);transform-origin:20px 0;animation:gt-deroule .22s cubic-bezier(.2,.8,.2,1)}\n.gt-lg-liste[hidden]{display:none}\n@keyframes gt-deroule{from{opacity:0;transform:translateY(-6px) scale(.97)}}\n.gt-lg-liste a{display:flex;align-items:center;gap:10px;height:44px;padding:0 10px;border-radius:8px 2px 8px 2px;font-weight:700;font-size:13px;color:var(--gl-marine)}\n.gt-lg-liste a[aria-current=\"true\"]{background:#E7F3F3;color:#006571}\n.gt-lg-liste a:focus-visible{outline:2px solid var(--gl-teal);outline-offset:-2px}\n.gt-lg-liste .gt-rond{width:20px;height:20px;box-shadow:0 0 0 1px rgba(14,17,29,.14)}\n.gt-lg-ok{margin-left:auto;width:15px;height:15px}\n.gt-pille{position:relative;flex:1;min-width:0;align-self:stretch;overflow:hidden;margin-left:4px}\n.gt-etat{position:absolute;top:4px;bottom:4px;left:8px;right:calc(var(--gt-pad) + 2px);display:flex;gap:8px;\ntransform:translate3d(calc(100% + 30px),0,0);transition:transform .7s cubic-bezier(.65,0,.25,1)}\n.gt-etat.est-la{transform:none}\n.gt-etat.est-sortie{transform:translate3d(calc(-100% - 30px),0,0)}\n.gt-etat.sans-transition{transition:none}\n.gt-blanc{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:8px;background:#fff;color:#006571;transform:skewX(-10deg);box-shadow:0 1px 0 rgba(14,17,29,.2)}\n.gt-blanc>*{transform:skewX(10deg)}\n.gt-blanc--p{justify-content:space-between;padding:0 6px}\n.gt-p{position:relative;display:grid;place-items:center;flex:1;min-width:0;height:100%}\n.gt-coupe{display:block;overflow:hidden;width:calc(var(--w) / var(--hh) * var(--H));height:var(--H)}\n.gt-coupe img{width:calc(var(--c) / var(--hh) * var(--H));height:calc(var(--c) / var(--hh) * var(--H));margin:calc(var(--y) / var(--hh) * var(--H) * -1) 0 0 calc(var(--x) / var(--hh) * var(--H) * -1)}\n.gt-p:focus-visible{outline:2px solid var(--gl-teal);outline-offset:-2px}\n.gt-sv{color:#006571;padding:0 8px}\n.gt-sv-armor{flex-grow:1.3}\n.gt-sv:focus-visible{outline:2px solid #fff;outline-offset:2px}\n.gt-sv-lab{display:flex;flex-direction:column;gap:2px;line-height:1;font-weight:800;font-size:10px;letter-spacing:.05em;text-transform:uppercase}\n.gt-sv-lab small{font-size:7.5px;letter-spacing:.12em;color:var(--gl-marine);opacity:.6}\n.gt-sv img{display:block;width:auto}\n.gt-sv-armor img{height:11px}\n.gt-sv-vr img{height:24px}\n@media (min-width:410px){\n:root{--gt-pad:14px;--gt-gap:14px;--gt-montre:30px;--gt-esp:10px;--gt-esp-d:13px;--gt-menu-l:70px;--gt-ty-l:38px;--gt-ty-h:44px;--gt-ty-out:16px}\n.gt-instr{gap:7px}\n.gt-menu small{font-size:9px}\n}\n@media (max-width:389px){\n:root{--gt-esp:9px;--gt-esp-d:8px;--gt-menu-l:56px;--gt-ty-l:32px;--gt-ty-h:38px;--gt-ty-out:13px}\n.gt-jour{font-size:18.5px}\n.gt-hms{font-size:10px}\n}\n@media (max-width:374px){\n:root{--gt-pad:10px}\n.gt-rangee .gl-cadran,.gt-rangee .gt-chrono{display:none}\n.gt-etat{gap:6px}\n.gt-blanc{gap:6px}\n.gt-sv{padding:0 6px}\n.gt-sv-lab{font-size:9px}\n.gt-sv-lab small{font-size:6.5px}\n.gt-sv-armor img{height:9.5px}\n.gt-sv-vr img{height:20px}\n}\n@media (max-width:339px){\n.gt-sv{gap:5px;padding:0 5px}\n.gt-sv-lab{font-size:8px}\n.gt-sv-lab small{font-size:6px}\n.gt-sv-armor img{height:8.5px}\n.gt-sv-vr img{height:18px}\n}\n.gl-leger .gt .gl-cadran{display:none}\n.gl-leger .gt .gt-chrono{width:var(--gt-montre);height:8px;transform:translate3d(-3px,0,0)}\n.gl-leger .gt .gt-alpina-m{top:0}\n@media (prefers-reduced-motion:reduce){\n.gt.est-anime{transition:none}\n.gt-etat,.gt-etat.est-sortie{transform:none;opacity:0;transition:opacity .3s linear}\n.gt-etat.est-la{transform:none;opacity:1}\n.gt-lg-liste{animation:none}\n}\n@media (max-width:750px){\n.gl{height:120px}\n.gl>.gl-haut,.gl>.gl-barre,.gl>.gl-bande,.gl>.gl-compacte-hote,.gl>.gl-voile{display:none!important}\n.gl-plein .gl-p-tete{display:none}\n.gl-plein .gl-defil{padding-top:76px}\n.gl-plein .gl-p-recherche{padding-top:12px}\n.gl-plein::after{content:'';position:absolute;left:0;right:0;top:0;z-index:3;height:88px;pointer-events:none;\nbackground:linear-gradient(var(--gl-marine) 0,var(--gl-marine) 74px,rgba(14,17,29,0) 88px)}\n}\n.gt.gt-intro-attente .gt-coque,.gt.gt-intro-attente .gt-ruban{opacity:0;pointer-events:none}\n.gt.gt-intro-joue .gt-coque{animation:gt-in-rangee .7s cubic-bezier(.34,1.3,.64,1) both}\n.gt.gt-intro-joue .gt-ruban{animation:gt-in-ruban .5s cubic-bezier(.2,.8,.2,1) .38s both}\n.gt.gt-intro-joue .gt-ty img{animation:gt-in-ty .65s cubic-bezier(.34,1.56,.64,1) .78s both}\n@keyframes gt-in-rangee{from{transform:translateY(-115%)}}\n@keyframes gt-in-ruban{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}\n@keyframes gt-in-ty{from{opacity:0;transform:translateY(60%) scale(.6)}}\n.gt.gt-douce-attente .gt-coque,.gt.gt-douce-attente .gt-ruban{opacity:0;pointer-events:none}\n.gt.gt-douce-joue .gt-coque,.gt.gt-douce-joue .gt-ruban{animation:gt-douce .5s cubic-bezier(.2,.8,.2,1) both}\n.gt.gt-douce-joue .gt-ruban{animation-delay:.06s}\n@keyframes gt-douce{from{opacity:0;transform:translateY(-14px)}}\n.gt-sonde{position:fixed;inset:0;visibility:hidden;pointer-events:none;z-index:-1}\nrdr-entete{display:block;position:relative;width:100%}\n#rdr-entete-portail{position:relative;z-index:2147482000;font-family:var(--gl-texte);-webkit-font-smoothing:antialiased;color:var(--gl-marine)}\n#rdr-entete-portail *,#rdr-entete-portail *::before,#rdr-entete-portail *::after{box-sizing:border-box}\n:where(#rdr-entete-portail) :where(a){color:inherit;text-decoration:none}\n:where(#rdr-entete-portail) :where(ul){list-style:none;margin:0;padding:0}\n:where(#rdr-entete-portail) :where(img){display:block;max-width:none;border:0}\n:where(#rdr-entete-portail) :where(button){font:inherit;color:inherit;background:none;border:0;margin:0;padding:0;cursor:pointer;text-align:inherit}\n:where(#rdr-entete-portail) :where(svg){display:block}\n:where(#rdr-entete-portail) :where(h2,p){margin:0;font-weight:inherit;font-size:inherit}\n#rdr-entete-portail :focus-visible{outline:2px solid var(--gl-jaune);outline-offset:3px}\n#rdr-entete-portail svg.gl-drapeau{flex:none;width:16px;height:16px;border-radius:50%;overflow:hidden}\n#rdr-entete-portail .gl-large{position:fixed;top:var(--gl-large-top,125px);height:min(calc(100vh - var(--gl-large-top,125px)),660px)}\n#rdr-entete-portail .gl-large.gl-large--fixe{top:56px;height:min(calc(100vh - 56px),660px)}\n#rdr-entete-portail .gl-voile{top:var(--gl-large-top,0px)}\n@media (min-width:1001px) and (max-height:820px){\n#rdr-entete-portail .gl-large{height:min(calc(100vh - var(--gl-large-top,125px) - 44px),560px);min-height:380px}\n#rdr-entete-portail .gl-large.gl-large--fixe{height:min(calc(100vh - 56px - 44px),560px)}\n}\n:root{--rdr-entete-h:175px}\n@media (max-width:750px){:root{--rdr-entete-h:120px}}\nrdr-entete.est-dessus{height:0!important;min-height:0!important}\n#rdr-entete-dessus{position:absolute!important;top:0;left:0;right:0;z-index:2147481000}\n@media (min-width:1001px) and (max-height:820px){\n:root{--rdr-entete-h:136px}\n.gl.gl--dessus{height:136px}\n.gl--dessus .gl-haut{height:36px}\n.gl--dessus .gl-reseaux{gap:10px}\n.gl--dessus .gl-reseaux a{width:20px;height:20px}\n.gl--dessus .gl-reseaux img{width:15px;height:15px}\n.gl--dessus .gl-loupe{height:24px}\n.gl--dessus .gl-espace{width:184px;height:36px;font-size:10.5px}\n.gl--dessus .gl-espace img{width:22px;height:25px}\n.gl--dessus .gl-langues a,.gl--dessus .gl-langue-btn{height:36px;padding:0 12px}\n.gl--dessus .gl-barre{height:62px}\n.gl--dessus .gl-marque{width:108px;height:52px}\n.gl--dessus .gl-logo img{width:52px;height:52px}\n.gl--dessus .gl-tymal{left:42px;top:-3px;width:58px;height:58px}\n.gl--dessus .gl-tymal img{width:58px;height:58px}\n.gl--dessus .gl-entree{height:62px}\n.gl--dessus .gl-decor{right:calc(var(--gl-gout) + 190px);width:146px;height:62px}\n.gl--dessus .gl-decor img{width:146px;height:62px}\n.gl--dessus .gl-droite{width:190px;height:48px}\n.gl--dessus .gl-partenaire img{height:48px;max-width:52px}\n.gl--dessus .gl-partenaire:last-child img{height:36px}\n.gl--dessus .gl-boutique{font-size:9px}\n.gl--dessus .gl-boutique{gap:3px}\n.gl--dessus .gl-boutique img{height:20px;max-width:88px}\n.gl--dessus .gl-bande{height:38px}\n.gl--dessus .gl-dates{font-size:11px}\n.gl--dessus .gl-cadran{width:30px;height:30px}\n.gl--dessus .gl-compte b{font-size:12.5px}\n.gl--dessus .gl-compte b[data-u=\"j\"]{font-size:16px}\n.gl--dessus .gl-alpina img{height:15px}\n}\n@media (min-width:1001px) and (max-height:700px){\n:root{--rdr-entete-h:124px}\n.gl.gl--dessus{height:124px}\n.gl--dessus .gl-haut,.gl--dessus .gl-espace,.gl--dessus .gl-langues a,.gl--dessus .gl-langue-btn{height:34px}\n.gl--dessus .gl-barre,.gl--dessus .gl-entree{height:56px}\n.gl--dessus .gl-marque{width:100px;height:48px}\n.gl--dessus .gl-logo img{width:48px;height:48px}\n.gl--dessus .gl-decor,.gl--dessus .gl-decor img{width:132px;height:56px}\n.gl--dessus .gl-droite{height:44px}\n.gl--dessus .gl-partenaire img{height:44px;max-width:48px}\n.gl--dessus .gl-partenaire:last-child img{height:33px}\n.gl--dessus .gl-boutique img{height:18px;max-width:80px}\n.gl--dessus .gl-bande{height:34px}\n.gl--dessus .gl-cadran{width:26px;height:26px}\n}";
const __arborescence = (function () {
const SM = { panneau: 'villages', lien: '/saint-malo' };

const ARBORESCENCE = {
  fr: [
    { cle: 'actualites', libelle: 'Actualités', lien: '/medias-actualites', panneau: 'actus', prefixes: ['/post'],
      liens: [
        { libelle: 'Actualités', lien: '/medias-actualites?cat=actualites' },
        { libelle: 'Photos', lien: '/medias-actualites?cat=image' },
        { libelle: 'Vidéos', lien: '/medias-actualites?cat=video' },
        { libelle: 'Audio', lien: '/medias-actualites?cat=audio' }    
      ] },
    { cle: 'programme', libelle: 'Programmation', lien: '/programmation', panneau: 'programme', liens: [] },    
    { cle: 'skippers', libelle: 'Skippers', lien: '/skippers', panneau: 'skippers',
      liens: [{ libelle: 'Skippers', lien: '/skippers' }] },
    

    { cle: 'village', libelle: 'Village de Saint-Malo', lien: '/saint-malo', panneau: 'villages', dates: SM, sansTout: true, faq: { libelle: 'Vos questions sur le village', lien: '/faq#village' },
      liens: [
        { libelle: 'Présentation', lien: '/saint-malo', source: SM, date: true },
        { libelle: 'Préparer sa venue', lien: '/se-rendre-au-village', picto: 'itineraire', source: { panneau: 'engagements', lien: '/se-rendre-au-village' } },
        { libelle: 'Covoiturage', lien: 'https://covoiturage.routedurhum.com/', picto: 'voiture', image: 'wix:image://v1/df962b_446304e46a934e66b494d083b4199f11~mv2.jpg/ponton-village-saint-malo.jpg' },
        { libelle: 'Plan interactif', bientot: true, picto: 'carte', image: 'wix:image://v1/547c0f_c1fe9e114419474891bbdacaa47fc632~mv2.avif/plan-interactif-village.avif' },
        { libelle: 'Programmation', lien: '/programmation', picto: 'calendrier', image: 'wix:image://v1/df962b_de786f93f9294e83a66b853f8ed37af5~mv2.png/menu-villages-programmation-1440.png' }
      ] },
    { cle: 'a-propos', libelle: 'À propos', panneau: 'a-propos',
      liens: [
        { libelle: 'Héritage', lien: '/heritage', source: { panneau: 'a-propos', lien: '/heritage' } },
        { libelle: 'Édition 2022', lien: '/edition-2022', source: { panneau: 'a-propos', lien: '/edition-2022' } },
        { libelle: 'Bateaux', lien: '/bateaux', source: { panneau: 'a-propos', lien: '/bateaux' } },
        { libelle: 'Parcours', bientot: true, picto: 'parcours', image: 'wix:image://v1/7bb303_85dbcc095ad54780a2c7454015771488~mv2.avif/parcours-officiel-2026.avif' },
        { libelle: "Qu'est-ce que la Route du Rhum", lien: '/qu-est-ce-que-la-route-du-rhum', source: { panneau: 'a-propos', lien: '/qu-est-ce-que-la-route-du-rhum' } }
      ] },
    { cle: 'engagements', libelle: 'Engagements', panneau: 'engagements',
      liens: [
        { libelle: "Terres d'engagements", lien: '/terres-engagements', source: { panneau: 'engagements', lien: '/terres-engagements' } },
        { libelle: 'Protéger le littoral', lien: '/proteger-littoral', source: { panneau: 'engagements', lien: '/proteger-littoral' } },
        { libelle: 'Kit pédagogique', lien: '/kit-pedagogique', groupe: 'Route du Rhum Junior', source: { panneau: 'engagements', lien: '/kit-pedagogique' } },
        { libelle: 'Cartographie enfant', bientot: true, groupe: 'Route du Rhum Junior', picto: 'globe', image: 'wix:image://v1/df962b_7bef857bacc34afea1cab73344577484~mv2.webp/application-suivi.webp' }
      ] }
  ],
  

  en: [
    { cle: 'actualites', libelle: 'News', lien: '/medias-actualites', panneau: 'actus', prefixes: ['/post'],
      liens: [
        { libelle: 'News', lien: '/medias-actualites?cat=news' },
        { libelle: 'Photos', lien: '/medias-actualites?cat=image' },
        { libelle: 'Videos', lien: '/medias-actualites?cat=video' },
        { libelle: 'Audio', lien: '/medias-actualites?cat=audio' }
      ] },
    { cle: 'programme', libelle: 'Programme', lien: '/programmation', panneau: 'programme', liens: [] },
    { cle: 'skippers', libelle: 'Skippers', lien: '/skippers', panneau: 'skippers',
      liens: [{ libelle: 'Skippers', lien: '/skippers' }] },
    { cle: 'village', libelle: 'Saint-Malo race village', lien: '/saint-malo', panneau: 'villages', dates: SM, sansTout: true, faq: { libelle: 'Village FAQ', lien: '/faq#village' },
      liens: [
        { libelle: 'Overview', lien: '/saint-malo', source: SM, date: true },
        { libelle: 'Plan your visit', lien: '/se-rendre-au-village', picto: 'itineraire', source: { panneau: 'engagements', lien: '/se-rendre-au-village' } },
        { libelle: 'Carpooling', lien: 'https://covoiturage.routedurhum.com/', picto: 'voiture', image: 'wix:image://v1/df962b_446304e46a934e66b494d083b4199f11~mv2.jpg/ponton-village-saint-malo.jpg' },
        { libelle: 'Interactive map', bientot: true, picto: 'carte', image: 'wix:image://v1/547c0f_c1fe9e114419474891bbdacaa47fc632~mv2.avif/plan-interactif-village.avif' },
        { libelle: 'Village programme', lien: '/programmation', picto: 'calendrier', image: 'wix:image://v1/df962b_de786f93f9294e83a66b853f8ed37af5~mv2.png/menu-villages-programmation-1440.png' }
      ] },
    { cle: 'a-propos', libelle: 'About', panneau: 'a-propos',
      liens: [
        { libelle: 'Heritage', lien: '/heritage', source: { panneau: 'a-propos', lien: '/heritage' } },
        { libelle: '2022 edition', lien: '/edition-2022', source: { panneau: 'a-propos', lien: '/edition-2022' } },
        { libelle: 'Boats', lien: '/bateaux', source: { panneau: 'a-propos', lien: '/bateaux' } },
        { libelle: 'Race course', bientot: true, picto: 'parcours', image: 'wix:image://v1/7bb303_85dbcc095ad54780a2c7454015771488~mv2.avif/parcours-officiel-2026.avif' },
        { libelle: 'What is the Route du Rhum', lien: '/qu-est-ce-que-la-route-du-rhum', source: { panneau: 'a-propos', lien: '/qu-est-ce-que-la-route-du-rhum' } }
      ] },
    { cle: 'engagements', libelle: 'Commitments', panneau: 'engagements',
      liens: [
        { libelle: 'Terres d\'engagements', lien: '/terres-engagements', source: { panneau: 'engagements', lien: '/terres-engagements' } },
        { libelle: 'Protecting the coastline', lien: '/proteger-littoral', source: { panneau: 'engagements', lien: '/proteger-littoral' } },
        { libelle: 'Educational kit', lien: '/kit-pedagogique', groupe: 'Route du Rhum Junior', source: { panneau: 'engagements', lien: '/kit-pedagogique' } },
        { libelle: 'Kids race tracking', bientot: true, groupe: 'Route du Rhum Junior', picto: 'globe', image: 'wix:image://v1/df962b_7bef857bacc34afea1cab73344577484~mv2.webp/application-suivi.webp' }
      ] }
  ]
};

const BANDE_TELEPHONE = {
  fr: 'Village du 20 octobre au 1er novembre',
  en: 'Race village, 20 October to 1 November'
};

return { ARBORESCENCE, BANDE_TELEPHONE };
})();

const __programme = (function () {
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const sansEmoji = (s) => String(s || '').replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '').replace(/\s{2,}/g, ' ').trim();
const minutes = (h) => { const m = String(h || '').match(/^(\d{1,2}):(\d{2})/); return m ? +m[1] * 60 + +m[2] : null; };
 
const finMinutes = (a) => { const d = minutes(a.debut), f = minutes(a.fin); return f == null ? (d == null ? 24 * 60 : d + 60) : (d != null && f < d ? f + 24 * 60 : f); };
const joursEntre = (a, b) => Math.round((Date.UTC(+b.slice(0, 4), +b.slice(5, 7) - 1, +b.slice(8, 10)) - Date.UTC(+a.slice(0, 4), +a.slice(5, 7) - 1, +a.slice(8, 10))) / 86400000);
const parHeure = (x, y) => (x.date < y.date ? -1 : x.date > y.date ? 1 : (minutes(x.debut) ?? -1) - (minutes(y.debut) ?? -1));

function fusionner(liste) {
  const parCle = new Map();
  const sortie = [];
  liste.forEach((a) => {
    const k = a.date + '|' + (a.debut || '') + '|' + a.cat + '|' + (a.photo || norm(a.titre));
    const deja = parCle.get(k);
    if (deja) { if (a.lieu && !deja.lieux.includes(a.lieu)) deja.lieux.push(a.lieu); deja.gratuit = deja.gratuit || !!a.gratuit; return; }
    const item = { titre: sansEmoji(a.titre), date: a.date, debut: a.debut || '', fin: a.fin || '', lieux: a.lieu ? [a.lieu] : [], cat: a.cat, catLib: a.catLib, photo: a.photo || '', gratuit: !!a.gratuit, vedette: !!a.vedette, _a: a };
    parCle.set(k, item);
    sortie.push(item);
  });
  return sortie;
}

function resumer(JEU, maintenant) {
  const jours = (JEU.jours || []).slice().sort();
  const ouverture = jours[0], fermeture = jours[jours.length - 1];
  const auj = maintenant.date, heure = maintenant.minutes;
  const anims = (JEU.animations || []).filter((a) => a.type !== 'guadeloupe').slice().sort(parHeure);
  const etat = auj < ouverture ? 'avant' : auj > fermeture ? 'apres' : 'pendant';

  

  const jour = etat === 'avant' ? ouverture : auj;
  const h = etat === 'avant' ? 0 : heure;
  const duJour = fusionner(anims.filter((a) => a.date === jour));
  let items = duJour.filter((a) => a.vedette && finMinutes(a._a) > h);
  let mode = 'vedettes';
  

  if (items.length && items.length < 3) {
    const deja = new Set(items);
    const suite = duJour.filter((a) => !deja.has(a) && minutes(a.debut) != null && minutes(a.debut) >= h && finMinutes(a._a) - minutes(a.debut) <= 240);
    items = items.concat(suite.slice(0, 3 - items.length)).sort((x, y) => (minutes(x.debut) ?? -1) - (minutes(y.debut) ?? -1));
  }
  if (!items.length) {
    items = duJour.filter((a) => minutes(a.debut) != null && minutes(a.debut) >= h).slice(0, 3);
    mode = 'suite';
  }
  if (!items.length) {
    items = duJour.filter((a) => minutes(a.debut) != null && minutes(a.debut) < h && finMinutes(a._a) > h).slice(0, 3);
    mode = 'encours';
  }
  if (etat === 'apres') { items = []; mode = 'vedettes'; }

   
  const vus = new Set(items.map((a) => norm(a.titre)));
  const aVenir = fusionner(anims.filter((a) => a.vedette && a.date > jour)).filter((a) => {
    const k = norm(a.titre);
    if (vus.has(k)) return false;
    vus.add(k);
    return true;
  }).slice(0, 6);

   
  const restants = anims.filter((a) => a.date >= (etat === 'avant' ? ouverture : auj) && jours.includes(a.date));
  const compte = new Map();
  

  restants.forEach((a) => { if (!a.cat) return; const t = compte.get(a.cat) || { slug: a.cat, lib: a.catLib, n: 0 }; t.n++; compte.set(a.cat, t); });
  const themes = [...compte.values()].sort((x, y) => y.n - x.n);

  const journees = (JEU.journees || []).filter((j) => j.date >= auj).map((j) => ({ date: j.date, titre: sansEmoji(j.titre), partenaire: j.partenaire || '', image: j.image || '', couleur: j.couleur || '' }));

  return {
    etat, ouverture, fermeture, jour,
    joursAvant: etat === 'avant' ? joursEntre(auj, ouverture) : 0,
    temps: { items: items.map(({ _a, ...x }) => x), mode },
    aVenir: aVenir.map(({ _a, ...x }) => x),
    themes, journees
  };
}

function maintenantParis(simule) {
  const m = String(simule || '').match(/^(\d{4}-\d{2}-\d{2})(?:T(\d{1,2}):(\d{2}))?$/);
  if (m) return { date: m[1], minutes: m[2] ? +m[2] * 60 + +m[3] : 0, simule: true };
  try {
    const p = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const g = (k) => (p.find((x) => x.type === k) || {}).value;
    return { date: g('year') + '-' + g('month') + '-' + g('day'), minutes: (+g('hour') % 24) * 60 + +g('minute'), simule: false };
  } catch (e) {
    const d = new Date();
    return { date: d.toISOString().slice(0, 10), minutes: d.getHours() * 60 + d.getMinutes(), simule: false };
  }
}

return { resumer, maintenantParis };
})();

const __recherche = (function () {
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
function normMap(s) {
  let n = '';
  const map = [];
  for (let i = 0; i < s.length; i++) {
    const d = s[i].normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    for (let k = 0; k < d.length; k++) { n += d[k]; map.push(i); }
  }
  return { n, map };
}
const jetons = (q) => norm(q).replace(/[^a-z0-9œæ]+/g, ' ').trim().split(' ').filter(Boolean);
const sansEmoji = (s) => String(s || '').replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '').replace(/\s{2,}/g, ' ').trim();
const debutMot = (s, i) => i === 0 || !/[a-z0-9]/.test(s[i - 1]);
function trouver(s, t) {
  let i = s.indexOf(t);
  const premier = i;
  while (i >= 0) { if (debutMot(s, i)) return { i, mot: true }; i = s.indexOf(t, i + 1); }
  return premier >= 0 ? { i: premier, mot: false } : null;
}
const cheminDe = (u) => String(u || '').replace(/^https?:\/\/(www\.)?routedurhum\.com/i, '').split('#')[0].replace(/\/+$/, '') || '/';
const initiales = (p, n) => ((p || '').trim().charAt(0) + (n || '').trim().charAt(0)).toUpperCase();

const TEXTES = {
  fr: { groupes: { page: 'Pages', skipper: 'Skippers', article: 'Articles', faq: 'Questions fréquentes' }, faqPage: 'Questions fréquentes', faqMots: 'faq questions frequentes aide reponses', parleDe: (q) => 'parle de ' + q, skipperCourt: 'Skipper', voirFiche: 'Voir sa fiche', articlesSur: (n) => n + (n > 1 ? ' articles' : ' article'), rubrique: 'Rubrique', pages: (n) => n + (n > 1 ? ' pages' : ' page'), bientot: 'Bientôt',
        encore: (n) => 'Encore ' + n + (n > 1 ? ' lettres' : ' lettre'), resultats: (n) => n ? n + (n > 1 ? ' résultats' : ' résultat') : 'Aucun résultat',
        aucun: (q) => 'Aucun résultat pour « ' + q + ' »', essayer: 'Essayez un nom de skipper, un village, une rubrique.',
        rubriques: 'Les rubriques', acces: 'Accès directs', dernieres: 'Dernières actualités', espace: 'Espace membre', service: 'Service', partenaire: 'Partenaire',
        naviguer: 'naviguer', ouvrir: 'ouvrir', fermer: 'fermer', echap: 'Échap', tous: 'Tous les skippers', skipper: 'Skipper',
        moment: 'Raccourcis du moment', essayez: 'Essayez', themes: 'La programmation par thème', fermerPalette: 'Fermer la recherche' },
  en: { groupes: { page: 'Pages', skipper: 'Skippers', article: 'Articles', faq: 'FAQ' }, faqPage: 'Frequently asked questions', faqMots: 'faq questions help answers', parleDe: (q) => 'about ' + q, skipperCourt: 'Skipper', voirFiche: 'See the profile', articlesSur: (n) => n + (n > 1 ? ' articles' : ' article'), rubrique: 'Section', pages: (n) => n + (n > 1 ? ' pages' : ' page'), bientot: 'Coming soon',
        encore: (n) => n + ' more ' + (n > 1 ? 'letters' : 'letter'), resultats: (n) => n ? n + (n > 1 ? ' results' : ' result') : 'No result',
        aucun: (q) => 'No result for “' + q + '”', essayer: 'Try a skipper, a village, a section.',
        rubriques: 'Sections', acces: 'Quick access', dernieres: 'Latest news', espace: 'Members area', service: 'Service', partenaire: 'Partner',
        naviguer: 'navigate', ouvrir: 'open', fermer: 'close', echap: 'Esc', tous: 'All skippers', skipper: 'Skipper',
        moment: 'Right now', essayez: 'Try', themes: 'The programme by theme', fermerPalette: 'Close the search' }
};

function monterRecherche(ctx) {
  const { R, J, RUBS, LANG, TXT, ICO, CLASSES, ACCES, esc, lien, cible, externe, wix, idMedia, ilYa } = ctx;
  const X = TEXTES[LANG] || TEXTES.fr;
  const stats = { source: 'page', entrees: 0, construitMs: 0, distantMs: null, frappes: 0, total: 0, moyenne: 0, max: 0, derniere: 0 };
  let idx = [];

   
  function preparer(o) {
    const nm = normMap(o.titre);
    o.n = nm.n; o.map = nm.map;
    o.nm = norm((o.meta || '') + ' ' + (o.mots || ''));
    o.nx = o.extrait ? norm(o.extrait) : '';
    return o;
  }
  function construireLocal() {
    const t0 = performance.now();
    const liste = [], parLien = new Map();
    const ajouter = (o) => {
       
      const k = o.type !== 'page' ? '' : o.lien ? cheminDe(o.lien) : 'bientot:' + norm(o.titre);
      if (k) {
        const deja = parLien.get(k);
        if (deja) { deja.mots = (deja.mots || '') + ' ' + o.titre + ' ' + (o.mots || ''); deja.nm = norm((deja.meta || '') + ' ' + deja.mots); return; }
        parLien.set(k, o);
      }
      liste.push(preparer(o));
    };
    RUBS.forEach((r) => {
      ajouter({ type: 'page', titre: r.libelle, lien: r.lien, action: r.lien ? '' : 'rubrique:' + r.cle, meta: X.rubrique + (r.liens.length ? ' · ' + X.pages(r.liens.length) : ''), ico: r.cle, mots: r.titre + ' ' + r.liens.map((l) => l.libelle).join(' ') });
      r.cartes.forEach((c) => {
        if (c.type === 'skipper') ajouter({ type: 'skipper', titre: c.prenom + ' ' + c.nom, lien: c.lien || '/skippers', meta: [c.classe, c.bateau && c.bateau !== 'NC' ? c.bateau : ''].filter(Boolean).join(' · '), image: c.image, couleur: c.couleur, ini: initiales(c.prenom, c.nom), mots: X.skipper });
        else if (c.type === 'carte' || c.type === 'village') ajouter({ type: 'page', titre: c.titre, lien: c.lien, meta: [r.libelle, c.groupe, c.bientot ? X.bientot : ''].filter(Boolean).join(' · '), image: c.image, ico: c.picto || r.cle, bientot: c.bientot, extrait: c.sous, mots: (c.groupe || '') + ' ' + (c.pastille || '') });
      });
      r.liens.forEach((l) => { if (norm(l.libelle) !== norm(r.libelle)) ajouter({ type: 'page', titre: l.libelle, lien: l.bientot ? '' : l.lien, meta: [r.libelle, l.groupe, l.bientot ? X.bientot : ''].filter(Boolean).join(' · '), ico: l.picto || r.cle, bientot: !!l.bientot, mots: l.groupe || '' }); });
      if (r.tout && r.tout.lien) ajouter({ type: 'page', titre: r.tout.libelle, lien: r.tout.lien, meta: r.libelle, ico: r.cle });
    });
    ACCES.forEach((a) => ajouter({ type: 'page', titre: TXT[a.cle], lien: a.lien, meta: X.acces, ico: a.cle, mots: a.cle === 'carte' ? 'plan saint-malo village map' : 'agenda horaires animations concerts' }));
    if (R.espace) ajouter({ type: 'page', titre: R.espace.libelle, lien: R.espace.lien, meta: X.espace, ico: 'skipper', mots: 'compte membre connexion profil account' });
     
    ajouter({ type: 'page', titre: X.faqPage, lien: '/faq', meta: X.groupes.faq, ico: 'faq', mots: X.faqMots });
    const hl = R.liensHaut || [], bq = R.boutique || [];
    hl.forEach((l, i) => ajouter({ type: 'page', titre: l.libelle, lien: l.lien, meta: i === 0 && bq[0] ? bq[0].alt : X.service, ico: i === 0 ? 'sac' : 'verre', mots: 'boutique hospitalites' }));
    if (bq[1]) ajouter({ type: 'page', titre: bq[1].libelleTiroir || bq[1].libelle, lien: bq[1].lienTiroir || bq[1].lien, meta: bq[1].alt, ico: 'manette', mots: bq[1].alt + ' jeu' });
    (R.partenaires || []).forEach((p) => ajouter({ type: 'page', titre: p.alt, lien: p.lien, meta: X.partenaire, ico: 'quai' }));
    (ctx.extras ? ctx.extras() : []).forEach((e) => ajouter(Object.assign({}, e)));
    (J.posts || []).forEach((p) => {
      const cat = p.categorie || {};
      ajouter({ type: 'article', titre: sansEmoji(p.title), lien: p.postPageUrl, meta: [cat.label ? cat.label.charAt(0) + cat.label.slice(1).toLowerCase() : '', ilYa(p.publishedDate)].filter(Boolean).join(' · '), image: idMedia(p.coverImage), date: Date.parse(p.publishedDate || '') || 0, cat: cat.slug, mots: (p.tags || []).join(' '), extrait: p.excerpt });
    });
    idx = liste;
    stats.entrees = idx.length;
    stats.construitMs = +(performance.now() - t0).toFixed(2);
  }
   
  function fusionnerDistant(d) {
    const t0 = performance.now();
    const imageDe = (i) => idMedia(i) || (/^https:\/\//.test(i || '') ? i : '');
     
    const sur = (u) => (/^\/(?!\/)|^https?:\/\//i.test(String(u || '')) ? String(u) : '');
    const sk = (Array.isArray(d.skippers) ? d.skippers : []).filter((s) => s && (s.p || s.n)).map((s) => {
      const cl = CLASSES[s.c] || {};
      const nom = String(s.n || '').trim(), prenom = String(s.p || '').trim();
      const u = sur(s.u);
      return preparer({ type: 'skipper', titre: (prenom + ' ' + nom).trim(), lien: u || '/skippers', meta: [s.c, s.b && s.b !== 'NC' ? s.b : '', u ? '' : X.tous].filter(Boolean).join(' · '), image: imageDe(s.i), couleur: cl.c || '#5DBFC0', ini: initiales(prenom, nom), mots: X.skipper + ' ' + (s.b || '') + ' ' + (s.c || '') });
    });
    

    const ar = (Array.isArray(d.articles) ? d.articles : []).filter((a) => a && a.t && sur(a.u)).map((a) => {
      const qui = String(a.m || '').trim();
      return preparer({ type: 'article', titre: sansEmoji(a.t), lien: cheminDe(sur(a.u)), meta: a.d ? ilYa(a.d) : '', image: imageDe(a.i), date: Date.parse(a.d || '') || 0, mots: qui, qui, extrait: a.e || '' });
    });
    

    const ancre = (a) => String(a || '').replace(/[^a-z0-9-]/gi, '');
    const fq = (Array.isArray(d.faq) ? d.faq : []).filter((x) => x && x.q && ancre(x.a)).map((x) =>
      preparer({ type: 'faq', titre: String(x.q), lien: '/faq#' + ancre(x.a), meta: String(x.r || ''), ico: 'faq', mots: String(x.k || ''), extrait: String(x.e || '') }));
    if (!sk.length && !ar.length && !fq.length) return false;
    idx = idx.filter((e) => (sk.length ? e.type !== 'skipper' : true) && (ar.length ? e.type !== 'article' : true) && (fq.length ? e.type !== 'faq' : true)).concat(sk, ar, fq);
    stats.entrees = idx.length;
    stats.source = 'site';
    stats.fusionMs = +(performance.now() - t0).toFixed(2);
    return true;
  }
  construireLocal();

  

  const nomSource = (u) => (/^blob:/.test(u) ? 'simulé' : /jsdelivr|cdn\./i.test(u) ? 'CDN' : /_functions/.test(u) ? 'site' : 'adresse');
  const sources = (ctx.sources || []).filter(Boolean);
  const cleMemoire = ctx.cleMemoire || (sources.length ? 'rdrRechercheV1:' + LANG + ':' + sources[0].split('?')[0] : '');
  function lireAvecDelai(u) {
    const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    const delai = setTimeout(() => { if (ctrl) ctrl.abort(); }, 2000);
    return fetch(u, { signal: ctrl ? ctrl.signal : undefined, credentials: /^\//.test(u) ? 'same-origin' : 'omit' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
      .finally(() => clearTimeout(delai));
  }
  async function chargerIndex() {
    try {
      const m = JSON.parse(sessionStorage.getItem(cleMemoire) || 'null');
      if (m && m.d && fusionnerDistant(m.d)) { stats.source = 'mémoire de la visite (' + m.source + ')'; return; }
    } catch (e) {   }
    const essais = [];
    for (const u of sources) {
      const t0 = performance.now();
      try {
        const d = await lireAvecDelai(u);
        if (d && fusionnerDistant(d)) {
          stats.distantMs = Math.round(performance.now() - t0);
          stats.source = nomSource(u) + (essais.length ? ' (repli après ' + essais.join(', ') + ')' : '');
          try { sessionStorage.setItem(cleMemoire, JSON.stringify({ source: nomSource(u), d })); } catch (e) {   }
          return;
        }
        essais.push(nomSource(u) + ' vide');
      } catch (e) { essais.push(nomSource(u) + ' ' + (e.name === 'AbortError' ? 'plus de 2 s' : e.message)); }
    }
    stats.source = 'page (repli après ' + essais.join(', ') + ')';
  }
  let pret = Promise.resolve();
  if (sources.length) {
    stats.source = 'page (index complet en cours)';
    pret = chargerIndex().finally(() => { champs.forEach((c) => { if (c.input.value || c.palette) c.maj(); }); if (ctx.surStats) ctx.surStats(); });
  }

   
  function chercher(toks) {
    const lettres = toks.join('').length;
    const seulsSkippers = lettres < 3;
    const bonus = { page: 5, skipper: 4, faq: 3, article: 0 };
    const trouves = [];
    for (let k = 0; k < idx.length; k++) {
      const e = idx[k];
      if (seulsSkippers && e.type !== 'skipper') continue;
      let s = 0, ok = true;
      for (const t of toks) {
        let v = 0, f = trouver(e.n, t);
        if (f && (f.mot || t.length >= 3)) v = f.i === 0 ? 16 : f.mot ? 11 : 6;
        if (!v && !seulsSkippers) { f = trouver(e.nm, t); if (f && (f.mot || t.length >= 3)) v = f.mot ? 5 : 2; }
        if (!v && !seulsSkippers && e.nx && t.length >= 4) { f = trouver(e.nx, t); if (f) v = f.mot ? 2 : 1; }
        if (!v) { ok = false; break; }
        s += v;
      }
      if (ok) trouves.push({ e, s: s + (bonus[e.type] || 0) + (e.bientot ? -3 : 0) });
    }
    trouves.sort((a, b) => b.s - a.s || (b.e.date || 0) - (a.e.date || 0));
    const lim = { page: 6, skipper: 6, faq: 4, article: 8 };
    const groupes = [], parType = {};
    trouves.forEach(({ e, s }) => {
      e._s = s;
      let g = parType[e.type];
      if (!g) { g = parType[e.type] = { type: e.type, items: [], total: 0 }; groupes.push(g); }
      g.total++;
      if (g.items.length < lim[e.type]) g.items.push(e);
    });
    return groupes;
  }
  function surligner(e, toks) {
    const plages = [];
    toks.forEach((t) => {
      const f = trouver(e.n, t);
      if (!f || (!f.mot && t.length < 3)) return;
      plages.push([e.map[f.i], e.map[Math.min(e.map.length - 1, f.i + t.length - 1)] + 1]);
    });
    if (!plages.length) return esc(e.titre);
    plages.sort((x, y) => x[0] - y[0]);
    let h = '', i = 0;
    plages.forEach(([a, b]) => { if (a < i) a = i; if (b <= a) return; h += esc(e.titre.slice(i, a)) + '<mark>' + esc(e.titre.slice(a, b)) + '</mark>'; i = b; });
    return h + esc(e.titre.slice(i));
  }

  

  function vignette(e) {
    const L = ctx.leger();
    const img = (al) => (/^https?:\/\//.test(e.image) ? '<img src="' + esc(e.image) + '" alt="" loading="lazy" decoding="async">' : '<img src="' + esc(wix(e.image, 52, 52, 75, al)) + '" srcset="' + esc(wix(e.image, 104, 104, 70, al)) + ' 2x" alt="" width="52" height="52" loading="lazy" decoding="async">');
    if (e.type === 'skipper') return L || !e.image ? '<span class="gl-sg-ini" style="background:' + esc(e.couleur) + '"><b>' + esc(e.ini) + '</b></span>' : img('t');
    if (e.type === 'article') return L || !e.image ? (ICO[e.cat] || ICO.actualites) : img('c');
    if (e.image && !L) return img('c');
    return ICO[e.ico] || ICO.fleche;
  }
  

  function quiVise(e, toks) {
    if (e.type !== 'article' || !e.qui) return '';
    return e.qui.split(', ').filter((nom) => { const n = norm(nom); return toks.some((t) => { const f = trouver(n, t); return f && (f.mot || t.length >= 3); }); }).slice(0, 2).join(', ');
  }
  function option(e, toks, id) {
    const off = e.bientot || (!e.lien && !e.action);
    const attrs = off ? ' aria-disabled="true"' : e.action ? ' data-action="' + esc(e.action) + '"' : ' href="' + esc(lien(e.lien)) + '"' + cible(e.lien);
    const tag = off || e.action ? 'div' : 'a';
    const qui = quiVise(e, toks);
    const meta = [e.meta, qui ? X.parleDe(qui) : ''].filter(Boolean).join(' · ');
    return '<' + tag + ' class="gl-sg gl-sg--' + e.type + (e.image && !ctx.leger() ? '' : ' gl-sg--picto') + '" role="option" id="' + id + '" aria-selected="false"' + attrs + '>' +
      '<span class="gl-sg-ava">' + vignette(e) + '</span>' +
      '<span class="gl-sg-txt"><span class="gl-sg-titre">' + surligner(e, toks) + '</span>' + (meta ? '<span class="gl-sg-meta">' + (e.couleur && e.type === 'skipper' ? '<i class="gl-sg-point" style="background:' + esc(e.couleur) + '"></i>' : '') + esc(meta) + (externe(e.lien) ? '<span class="gl-sg-ext">' + ICO.externe + '</span>' : '') + '</span>' : '') + '</span></' + tag + '>';
  }
  

  function skipperVise(groupes) {
    const g = groupes.find((x) => x.type === 'skipper');
    if (!g || !g.items.length) return null;
    const a = g.items[0], b = g.items[1];
    if (a._s < 18 || (b && b._s > a._s - 6)) return null;
    return a;
  }
  function htmlFocus(e, nbArticles, id) {
    const L = ctx.leger();
    const img = !L && e.image ? (/^https?:\/\//.test(e.image) ? '<img src="' + esc(e.image) + '" alt="" loading="lazy" decoding="async">' : '<img src="' + esc(wix(e.image, 132, 164, 78, 't')) + '" srcset="' + esc(wix(e.image, 264, 328, 70, 't')) + ' 2x" alt="" width="132" height="164" loading="lazy" decoding="async">') : '<span class="gl-sg-ini" style="background:' + esc(e.couleur) + '"><b>' + esc(e.ini) + '</b></span>';
    const [classe, bateau] = String(e.meta || '').split(' · ');
    return '<a class="gl-sg-focus" role="option" id="' + id + '" aria-selected="false" href="' + esc(lien(e.lien)) + '" style="--sk:' + esc(e.couleur || '#5DBFC0') + '">' +
      '<span class="gl-sg-focus-img">' + img + '</span>' +
      '<span class="gl-sg-focus-txt">' +
        '<small><i class="gl-sg-point" style="background:' + esc(e.couleur || '#5DBFC0') + '"></i>' + esc([X.skipperCourt, classe].filter(Boolean).join(' · ')) + '</small>' +
        '<b>' + esc(e.titre) + '</b>' +
        (bateau ? '<span class="gl-sg-focus-bateau">' + esc(bateau) + '</span>' : '') +
        '<span class="gl-sg-focus-pied"><span class="gl-sg-focus-cta">' + esc(X.voirFiche) + ICO.fleche + '</span>' + (nbArticles ? '<span class="gl-sg-focus-n">' + esc(X.articlesSur(nbArticles)) + '</span>' : '') + '</span>' +
      '</span></a>';
  }
  const TUILE_GROUPE = { page: 'actualites', skipper: 'skipper', article: 'photo', faq: 'faq' };
  const label = (ic, txt, n, id) => '<p class="gl-sg-label"' + (id ? ' id="' + id + '"' : '') + ' role="presentation"><span class="gl-sg-tuile">' + (ICO[ic] || ICO.fleche) + '</span><span>' + esc(txt) + '</span>' + (n != null ? '<b>' + n + '</b>' : '') + '</p>';
  function htmlResultats(groupes, toks, pre) {
    let n = 0;
    let tete = '';
    const vise = skipperVise(groupes);
    if (vise) {
      const art = groupes.find((g) => g.type === 'article');
      tete = '<div class="gl-sg-groupe gl-sg-groupe--focus">' + htmlFocus(vise, art ? art.total : 0, pre + '-o' + (n++)) + '</div>';
      groupes = groupes.map((g) => (g.type === 'skipper' ? Object.assign({}, g, { items: g.items.slice(1), total: g.total - 1 }) : g)).filter((g) => g.items.length);
      groupes.sort((a, b) => (b.type === 'article') - (a.type === 'article'));
    }
    return tete + groupes.map((g, gi) => '<div class="gl-sg-groupe" role="group" aria-labelledby="' + pre + '-g' + gi + '">' + label(g.type === 'page' ? 'fleche' : TUILE_GROUPE[g.type], X.groupes[g.type], g.total, pre + '-g' + gi) +
      '<div class="' + (g.type === 'skipper' ? 'gl-sg-grille' : 'gl-sg-pile') + '">' + g.items.map((e) => option(e, toks, pre + '-o' + (n++))).join('') + '</div></div>').join('');
  }
  function htmlVide(q, pre) {
    return '<div class="gl-sg-vide"><p>' + esc(X.aucun(q.trim())) + '</p><small>' + esc(X.essayer) + '</small></div>' + htmlEssais(pre + '-v');
  }
  

  let essais = null;
  function tirerEssais() {
    const hasard = (l) => l[Math.floor(Math.random() * l.length)];
    const sk = idx.filter((e) => e.type === 'skipper');
    const themes = idx.filter((e) => e.type === 'page' && /^\/programmation\?cat=/.test(e.lien || '') && !/cat=animation/.test(e.lien));
    const pages = idx.filter((e) => e.type === 'page' && e.lien && !e.bientot && /^\/(heritage|carte-village-saint-malo|kit-pedagogique|bateaux|se-rendre-au-village)$/.test(e.lien));
    const classes = [...new Set(sk.map((e) => (e.meta || '').split(' · ')[0]).filter((c) => CLASSES[c]))];
    const l = [];
    if (sk.length) { const s = hasard(sk); l.push({ t: s.titre, k: 'skipper' }); }
    if (themes.length) l.push({ t: hasard(themes).titre, k: 'programme' });
    if (pages.length) l.push({ t: hasard(pages).titre, k: 'actualites' });
    if (classes.length) l.push({ t: hasard(classes), k: 'voile' });
    return l;
  }
  function htmlEssais(pre) {
    if (!essais) essais = tirerEssais();
    if (!essais.length) return '';
    return '<div class="gl-sg-groupe">' + label('loupe', X.essayez) + '<div class="gl-sg-essais">' + essais.map((x, i) =>
      '<button type="button" class="gl-sg-essai" role="option" id="' + pre + '-e' + i + '" aria-selected="false" data-essai="' + esc(x.t) + '"><span class="gl-sg-essai-ico">' + (ICO[x.k] || ICO.loupe) + '</span>' + esc(x.t) + '</button>').join('') + '</div></div>';
  }
   
  function htmlAccueil(pre) {
    let n = 0;
    const id = () => pre + '-r' + (n++);
    const racc = (ctx.raccourcis ? ctx.raccourcis() : []).map((e) => preparer(Object.assign({ type: 'page' }, e)));
    const themes = idx.filter((e) => e.type === 'page' && /^\/programmation\?cat=/.test(e.lien || ''));
    return (racc.length ? '<div class="gl-sg-groupe" role="group" aria-labelledby="' + pre + '-gm">' + label('calendrier', X.moment, null, pre + '-gm') + '<div class="gl-sg-grille">' + racc.map((e) => option(e, [], id())).join('') + '</div></div>' : '') +
      htmlEssais(pre) +
      (themes.length ? '<div class="gl-sg-groupe" role="group" aria-labelledby="' + pre + '-gt">' + label('programme', X.themes, null, pre + '-gt') + '<div class="gl-sg-themes">' + themes.map((e) =>
        '<a class="gl-sg-theme" role="option" id="' + id() + '" aria-selected="false" href="' + esc(lien(e.lien)) + '">' + esc(e.titre) + '<b>' + esc((e.meta.match(/(\d+)/) || [])[1] || '') + '</b></a>').join('') + '</div></div>' : '');
  }
   
  function htmlTuiles() {
    const L = ctx.leger();
    const tuiles = ctx.tuiles ? ctx.tuiles() : [];
    

    const plusLong = (t) => Math.max(1, ...String(t.titre || '').split(/\s+/).map((m) => m.length));
    const len = Math.max(1, ...tuiles.filter((t) => t.grand).map(plusLong));
    return tuiles.map((t) => {
      const img = !L && t.image ? '<img class="gl-tp-img" alt="" loading="lazy" decoding="async" src="' + esc(wix(t.image, t.grand ? 420 : 210, t.grand ? 200 : 110, 72, t.al || 'c')) + '" srcset="' + esc(wix(t.image, t.grand ? 840 : 420, t.grand ? 400 : 220, 62, t.al || 'c')) + ' 2x">' : '';
      return '<button type="button" class="gl-tp' + (t.grand ? ' gl-tp--grand' : '') + (img ? '' : ' sans-image') + '" data-action="rubrique:' + esc(t.cle) + '" style="--t1:' + esc(t.t1 || '#006F7B') + ';--len:' + len + '">' +
        '<span class="gl-tp-fond" aria-hidden="true">' + (ICO[t.cle] || ICO.fleche) + '</span>' + img +
        '<span class="gl-tp-num" aria-hidden="true">' + esc(t.num) + '</span>' +
        '<span class="gl-tp-txt"><span class="gl-tp-titre">' + esc(t.titre) + '</span>' + (t.sous ? '<span class="gl-tp-sous">' + esc(t.sous) + '</span>' : '') + '</span></button>';
    }).join('');
  }

   
  const champs = [];
  function brancher(input, liste, o) {
    o = o || {};
    const pre = o.palette ? 'gl-pal' : 'gl-pr';
    const e = { opts: [], actif: -1 };
    const marquer = (defiler) => {
      e.opts.forEach((x, i) => x.setAttribute('aria-selected', String(i === e.actif)));
      const a = e.opts[e.actif];
      if (a) { input.setAttribute('aria-activedescendant', a.id); if (defiler !== false) a.scrollIntoView({ block: 'nearest' }); }
      else input.removeAttribute('aria-activedescendant');
    };
    const maj = () => {
      const t0 = performance.now();
      const q = input.value;
      const toks = jetons(q);
      const lettres = toks.join('').length;
      let indice = '', resultats = false;
      if (lettres < 2) {
        liste.innerHTML = htmlAccueil(pre);
        indice = lettres ? X.encore(3 - lettres) : '';
      } else {
        const groupes = chercher(toks);
        const nb = groupes.reduce((a, g) => a + g.items.length, 0);
        if (!nb && lettres < 3) {
           
          liste.innerHTML = htmlAccueil(pre);
          indice = X.encore(1);
        } else {
          liste.innerHTML = nb ? htmlResultats(groupes, toks, pre) : htmlVide(q, pre);
          indice = X.resultats(groupes.reduce((a, g) => a + g.total, 0));
          resultats = true;
        }
      }
      input.setAttribute('aria-expanded', 'true');
      if (o.indice) o.indice.textContent = indice;
      if (o.effacer) o.effacer.hidden = !q;
      if (o.surMaj) o.surMaj(!!q);
      e.opts = [...liste.querySelectorAll('[role="option"]')];
       
      e.actif = resultats && o.palette && e.opts.length ? 0 : -1;
      marquer(false);
      if (liste.scrollTop) liste.scrollTop = 0;
      if (lettres >= 2) {
        const ms = performance.now() - t0;
        stats.frappes++; stats.total += ms; stats.moyenne = stats.total / stats.frappes; stats.derniere = ms; stats.max = Math.max(stats.max, ms);
        if (ctx.surStats) ctx.surStats();
      }
    };
    input.addEventListener('input', maj);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        if (!e.opts.length) return;
        ev.preventDefault();
        e.actif = e.actif < 0 ? (ev.key === 'ArrowDown' ? 0 : e.opts.length - 1) : (e.actif + (ev.key === 'ArrowDown' ? 1 : -1) + e.opts.length) % e.opts.length;
        marquer();
      } else if (ev.key === 'Enter') {
        const a = e.opts[e.actif];
        if (a) { ev.preventDefault(); a.click(); }
      }
    });
    liste.addEventListener('mousemove', (ev) => {
      const x = ev.target.closest('[role="option"]');
      const i = x ? e.opts.indexOf(x) : -1;
      if (i >= 0 && i !== e.actif) { e.actif = i; marquer(false); }
    });
    liste.addEventListener('click', (ev) => {
      const essai = ev.target.closest('[data-essai]');
      if (essai) { ev.preventDefault(); input.value = essai.dataset.essai; maj(); input.focus(); return; }
      const x = ev.target.closest('[data-action]');
      if (!x) {
         
        if (o.palette && ev.target.closest('a[href]')) setTimeout(() => fermerPalette(false), 0);
        return;
      }
      ev.preventDefault();
      const [type, cle] = x.dataset.action.split(':');
      if (type === 'rubrique') { if (o.palette) fermerPalette(false); ctx.surRubrique(cle); }
    });
    if (o.effacer) o.effacer.addEventListener('click', () => { input.value = ''; maj(); input.focus(); });
    const c = { input, maj, palette: !!o.palette };
    champs.push(c);
    return c;
  }
  function vider(input) { const c = champs.find((x) => x.input === input); if (c) { input.value = ''; c.maj(); } }

  

  let palette = null, palChamp = null, invocateur = null;
  function construirePalette() {
    if (palette) return;
    palette = document.createElement('div');
    palette.className = 'gl-palette';
    palette.hidden = true;
    palette.innerHTML = '<div class="gl-pal-boite" role="dialog" aria-modal="true" aria-label="' + esc(TXT.chercher) + '">' +
      '<div class="gl-pal-tete">' +
        '<p class="gl-pal-kick">' + (ctx.flamme || '') + '<span>' + esc(TXT.chercher) + '</span></p>' +
        '<button type="button" class="gl-pal-x" aria-label="' + esc(X.fermerPalette) + '">' + ICO.fermer + '</button>' +
        '<div class="gl-pal-champ">' + ICO.loupe + '<input type="text" role="combobox" aria-expanded="true" aria-controls="gl-pal-liste" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="' + esc(TXT.placeholder) + '" aria-label="' + esc(TXT.chercher) + '">' +
          '<button type="button" class="gl-pal-effacer" aria-label="' + esc(TXT.effacer) + '" hidden>' + ICO.fermer + '</button></div>' +
      '</div>' +
      '<p class="gl-vh gl-pal-indice" aria-live="polite"></p>' +
      '<div class="gl-pal-corps">' +
        '<div class="gl-pal-gauche gl-res-liste" id="gl-pal-liste" role="listbox" aria-label="' + esc(TXT.resultats) + '"></div>' +
        '<nav class="gl-pal-droite" aria-label="' + esc(X.rubriques) + '">' + label('menuFin', X.rubriques) + '<div class="gl-tuiles-pal">' + htmlTuiles() + '</div></nav>' +
      '</div>' +
      '<div class="gl-pal-pied"><span><kbd>↑</kbd><kbd>↓</kbd>' + esc(X.naviguer) + '</span><span><kbd>↵</kbd>' + esc(X.ouvrir) + '</span><span><kbd>' + esc(X.echap) + '</kbd>' + esc(X.fermer) + '</span></div>' +
      '</div>';
    document.body.appendChild(palette);
    const input = palette.querySelector('input');
    palChamp = brancher(input, palette.querySelector('.gl-pal-gauche'), { palette: true, indice: palette.querySelector('.gl-pal-indice'), effacer: palette.querySelector('.gl-pal-effacer') });
    palette.querySelector('.gl-pal-x').addEventListener('click', () => fermerPalette(true));
    palette.querySelector('.gl-pal-droite').addEventListener('click', (ev) => {
      const t = ev.target.closest('[data-action]');
      if (!t) return;
      fermerPalette(false);
      ctx.surRubrique(t.dataset.action.split(':')[1]);
    });
    palette.addEventListener('mousedown', (ev) => { if (ev.target === palette) fermerPalette(true); });
    palette.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' || ev.key === 'Esc') { ev.preventDefault(); ev.stopPropagation(); fermerPalette(true); return; }
      if (ev.key !== 'Tab') return;
      const boite = palette.querySelector('.gl-pal-boite');
      const f = [...boite.querySelectorAll('input, a[href], button, [tabindex]:not([tabindex="-1"])')].filter((x) => x.getClientRects().length && !x.closest('[hidden]'));
      if (!f.length) return;
      const i = f.indexOf(document.activeElement);
      if (ev.shiftKey && i <= 0) { ev.preventDefault(); f[f.length - 1].focus(); }
      else if (!ev.shiftKey && (i === f.length - 1 || i < 0)) { ev.preventDefault(); f[0].focus(); }
    });
  }
  function ouvrirPalette(texte) {
    construirePalette();
    if (!palette.hidden) { palette.querySelector('input').focus(); return; }
    invocateur = document.activeElement;
    palette.hidden = false;
    const input = palette.querySelector('input');
    input.value = texte || '';
    palChamp.maj();
    ctx.bloquer(true);
    document.querySelectorAll('[data-recherche]').forEach((b) => b.setAttribute('aria-expanded', 'true'));
    requestAnimationFrame(() => input.focus());
  }
  function fermerPalette(rendreFocus) {
    if (!palette || palette.hidden) return;
    palette.hidden = true;
    ctx.bloquer(false);
    document.querySelectorAll('[data-recherche]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
    if (rendreFocus && invocateur && invocateur.isConnected && invocateur.getClientRects().length) invocateur.focus();
  }

  return {
    pret, brancher, vider, ouvrirPalette, fermerPalette,
    paletteOuverte: () => !!palette && !palette.hidden,
     
    rafraichir: () => {
      if (palette) palette.querySelector('.gl-tuiles-pal').innerHTML = htmlTuiles();
      champs.forEach((c) => c.maj());
    },
    stats: () => stats,
     
    mesurer: (q) => { const t0 = performance.now(); const g = chercher(jetons(q)); return { ms: performance.now() - t0, nb: g.reduce((a, x) => a + x.total, 0) }; }
  };
}

return { monterRecherche };
})();

const __telephone = (function () {
const COUPES = [
  { c: 105, x: 6.8, y: 5.9, w: 90.4, hh: 92.2, H: 26 },     
  { c: 140, x: 1.3, y: 44.8, w: 137.4, hh: 50.4, H: 19 },   
  { c: 120, x: 20, y: 20, w: 80, hh: 80, H: 26 }            
];
const CHEVRON = '<svg class="gt-lg-chev" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const COCHE = '<svg class="gt-lg-ok" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
 
const NOMS = { fr: 'Français', en: 'English' };
const HOULE = '<svg class="gt-houle" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M1 3q2.75-2.5 5.5 0t5.5 0 5.5 0 5.5 0"/><path d="M1 8q2.75-2.5 5.5 0t5.5 0 5.5 0 5.5 0"/><path d="M1 13q2.75-2.5 5.5 0t5.5 0 5.5 0 5.5 0"/></svg>';
const CROIX = '<svg class="gt-x" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12"/></svg>';

const TXTS = {
  fr: { depart: 'Départ', J: 'J-', partenaires: 'Partenaires institutionnels', menu: 'MENU', fermer: 'FERMER', boutique: ['Boutique', 'officielle'], jeu: ['Jeu', 'officiel'] },
  en: { depart: 'Start', J: 'D-', partenaires: 'Institutional partners', menu: 'MENU', fermer: 'CLOSE', boutique: ['Official', 'store'], jeu: ['Official', 'game'] }
};
 
const ROT_MS = 8000, ROT_PAS = 150;

function creerTelephone(o) {
  const { R, T, LANG, esc, lien, urlLangue, montreHTML, nouvelOnglet } = o;
  

  const drapeaux = o.drapeaux || {};
  const TX = TXTS[LANG] || TXTS.fr;
  const mqTel = matchMedia('(max-width: 750px)');
  const mqReduit = matchMedia('(prefers-reduced-motion: reduce)');
  const racineNum = (nom) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(nom)) || 0;
  

  const tymal = () => (o.leger() ? R.espace.icone : String(R.espace.icone || '').replace(/w_\d+,h_\d+/, 'w_120,h_138'));

  let el = null, ruban = null, pille = null, bouton = null, boutonLib = null, lgBouton = null, lgListe = null;
  let p = -1, ouvert = false, course = 60, raf = 0, animT = 0;
  let etat = 0, ecoule = 0, pauseJusqua = 0;

  function html() {
    const partenaires = (R.partenaires || []).map((x, i) => {
      const c = COUPES[i] || COUPES[0];
      return '<a class="gt-p" href="' + esc(lien(x.lien)) + '" style="--c:' + c.c + ';--x:' + c.x + ';--y:' + c.y + ';--w:' + c.w + ';--hh:' + c.hh + ';--H:' + c.H + 'px"><span class="gt-coupe"><img alt="' + esc(x.alt) + '" decoding="async" src="' + esc(x.src) + '"></span></a>';
    }).join('');
     
    const boutique = (R.boutique || []).slice(0, 2).map((b, i) => {
      const t = i ? TX.jeu : TX.boutique;
      return '<a class="gt-blanc gt-sv ' + (i ? 'gt-sv-vr' : 'gt-sv-armor') + '" href="' + esc(b.lien) + '" target="_blank" rel="noopener"><span class="gt-sv-lab"><b>' + esc(t[0]) + '</b><small>' + esc(t[1]) + '</small></span><img alt="' + esc(b.alt || '') + '" decoding="async" src="' + esc(b.image) + '">' + nouvelOnglet(b.lien) + '</a>';
    }).join('');
     
    const langues = R.langues || [];
    const cur = langues.find((l) => l.code === LANG) || langues[0] || { code: LANG, libelle: LANG };
    const rond = (code) => (drapeaux[code] ? '<span class="gt-rond">' + drapeaux[code] + '</span>' : '');
    const selecteur = '<button class="gt-lg" type="button" aria-expanded="false" aria-controls="gt-lg-liste" aria-label="' + esc((T.langue || 'Langue') + ' : ' + (NOMS[cur.code] || cur.libelle)) + '">' +
      '<span class="gt-lg-in">' + rond(cur.code) + '<b>' + esc(String(cur.code).toUpperCase()) + '</b>' + CHEVRON + '</span></button>';
    const e = R.espace || {};
    return '<div class="gt-ruban">' + selecteur +
        

        '<div class="gt-pille">' +
          '<div class="gt-etat" role="group" aria-label="' + esc(TX.partenaires) + '"><div class="gt-blanc gt-blanc--p">' + partenaires + '</div></div>' +
          '<div class="gt-etat" role="group" aria-label="' + esc(T.services || '') + '">' + boutique + '</div>' +
        '</div>' +
      '</div>' +
      '<ul class="gt-lg-liste" id="gt-lg-liste" hidden aria-label="' + esc(T.langue || 'Langue') + '">' + langues.map((l) =>
        '<li><a href="' + esc(urlLangue(l.code)) + '" lang="' + l.code + '" hreflang="' + l.code + '"' + (l.code === LANG ? ' aria-current="true"' : '') + '>' + rond(l.code) + '<span>' + esc(NOMS[l.code] || l.libelle) + '</span>' + (l.code === LANG ? COCHE : '') + '</a></li>').join('') + '</ul>' +
      '<div class="gt-coque"><div class="gt-rangee">' +
        '<a class="gt-logo" href="' + esc(lien(R.logo.lien || '/')) + '"><img src="' + esc(R.logo.src) + '" alt="' + esc(R.logo.alt) + '" width="64" height="64" decoding="async" fetchpriority="high"></a>' +
        

        '<div class="gt-instr" role="timer" aria-label="' + esc(T.compte) + '"><span class="gt-chrono">' + montreHTML() +
          (R.alpina && R.alpina.logoSombre ? '<img class="gt-alpina-m" src="' + esc(R.alpina.logoSombre) + '" alt="' + esc(R.alpina.alt) + '" width="35" height="8" decoding="async">' : '') + '</span>' +
          '<span class="gt-compte" data-compte><small>' + esc(TX.depart) + '</small><b class="gt-jour" data-u="J">' + TX.J + '00</b><span class="gt-hms"><b data-u="h">00</b>:<b data-u="m">00</b>:<b data-u="s">00</b></span></span></div>' +
        '<div class="gt-bloc">' +
          '<a class="gt-ty" href="' + esc(lien(e.lien)) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(tymal()) + '" alt="" decoding="async"></a>' +
          '<a class="gt-espace" href="' + esc(lien(e.lien)) + '"><span class="gt-bloc-in">' + esc(e.libelle) + '</span></a>' +
          '<button class="gt-menu" type="button" aria-expanded="false" aria-controls="gl-plein" aria-label="' + esc(T.menu || 'Menu') + '"><span class="gt-bloc-in">' + HOULE + CROIX + '<small aria-hidden="true">' + esc(TX.menu) + '</small></span></button>' +
        '</div>' +
      '</div></div>';
  }

   
  function mesurer() {
    if (!el || !mqTel.matches) return;
    const haut = racineNum('--gt-h-n'), rub = racineNum('--gt-r-n');
    course = haut + rub - racineNum('--gt-hc-n');
  }
  const pDuDefilement = () => {
    const y = Math.max(0, window.scrollY || 0);
    return mqReduit.matches ? (y > course / 2 ? 1 : 0) : Math.min(1, y / course);
  };
  function poser(v) {
    if (!el || v === p) return;
    p = v;
    el.style.setProperty('--p', v.toFixed(4));
    el.classList.toggle('est-compacte', v >= 1);
    ruban.inert = v >= 1;
    if (v > 0.3) langueOuverte(false);
  }
  function surDefilement() { raf = 0; if (!ouvert) poser(pDuDefilement()); }
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(surDefilement); }, { passive: true });
  addEventListener('resize', () => { mesurer(); surDefilement(); });
  mqTel.addEventListener('change', () => { mesurer(); p = -1; surDefilement(); });

  function animer() {
    if (mqReduit.matches || !el) return;
    el.classList.add('est-anime');
    clearTimeout(animT);
    animT = setTimeout(() => el && el.classList.remove('est-anime'), 460);
  }
   
  function menuOuvert(oui) {
    if (!el || oui === ouvert) return;
    ouvert = oui;
    animer();
    poser(oui ? 1 : pDuDefilement());
    bouton.setAttribute('aria-expanded', String(oui));
    bouton.setAttribute('aria-label', oui ? (T.fermer || 'Fermer le menu') : (T.menu || 'Menu'));
    boutonLib.textContent = oui ? TX.fermer : TX.menu;
    el.classList.toggle('est-ouvert', oui);
    if (oui) langueOuverte(false);
  }

  

  function langueOuverte(oui) {
    if (!lgListe || lgListe.hidden === !oui) return;
    lgListe.hidden = !oui;
    lgBouton.setAttribute('aria-expanded', String(oui));
  }
  document.addEventListener('click', (e) => {
    if (lgListe && !lgListe.hidden && !lgListe.contains(e.target) && !lgBouton.contains(e.target)) langueOuverte(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lgListe && !lgListe.hidden) { langueOuverte(false); lgBouton.focus(); }
  });

  

  function montrerEtat(n, sansAnim) {
    if (!el) return;
    const etats = [...el.querySelectorAll('.gt-etat')];
    etats.forEach((x, i) => {
      if (i === n) {
        if (!x.classList.contains('est-la')) {
          x.classList.add('sans-transition');
          x.classList.remove('est-sortie');
          void x.offsetWidth;
          if (!sansAnim) x.classList.remove('sans-transition');
          x.classList.add('est-la');
        }
      } else if (x.classList.contains('est-la')) {
        x.classList.remove('est-la');
        x.classList.toggle('est-sortie', !sansAnim);
      }
      x.inert = i !== n;
      if (i === n) x.removeAttribute('aria-hidden'); else x.setAttribute('aria-hidden', 'true');
    });
    if (sansAnim) requestAnimationFrame(() => etats.forEach((x) => x.classList.remove('sans-transition')));
  }
  setInterval(() => {
    if (!el) return;
    const pause = document.hidden || !mqTel.matches || ouvert || p >= 0.5 || Date.now() < pauseJusqua || pille.matches(':focus-within') || (lgListe && !lgListe.hidden);
    el.classList.toggle('est-pause', pause);
    if (pause) return;
    ecoule += ROT_PAS;
    if (ecoule >= ROT_MS) { etat = (etat + 1) % 2; ecoule = 0; montrerEtat(etat); }
  }, ROT_PAS);

  

  let sonde = null, tCale = 0;
  function caler() {
    tCale = 0;
    if (!el) return;
    const vv = window.visualViewport;
    const tel = window.matchMedia && matchMedia('(max-width:750px)').matches;
    const ecart = !!(tel && vv && Math.abs(vv.scale - 1) < 0.02 && innerWidth - vv.width > 2);
    const g = ecart ? Math.round(vv.offsetLeft) + 'px' : '';
    const l = ecart ? Math.round(vv.width) + 'px' : '';
    if (el.style.width === l && el.style.left === g) return;
    el.style.left = g; el.style.width = l; el.style.right = ecart ? 'auto' : '';
    mesurer();
  }
  const calerBientot = () => { if (!tCale) tCale = requestAnimationFrame(caler); };
  function surveillerLargeur() {
    if (sonde) return;
    sonde = document.createElement('i');
    sonde.className = 'gt-sonde';
    sonde.setAttribute('aria-hidden', 'true');
    document.body.appendChild(sonde);
    if (window.visualViewport) { visualViewport.addEventListener('resize', calerBientot); visualViewport.addEventListener('scroll', calerBientot); }
    addEventListener('resize', calerBientot);
    if (window.ResizeObserver) new ResizeObserver(calerBientot).observe(sonde);
  }

   
  function monter() {
    const garder = ouvert;
    if (el) el.remove();
    el = document.createElement('header');
    el.className = 'gt' + (o.pleineLargeur ? ' est-pleine' : '');
    el.id = 'gt';
    el.setAttribute('aria-label', T.principal || 'Menu principal');
    el.innerHTML = html();
    document.body.prepend(el);
    ruban = el.querySelector('.gt-ruban');
    pille = el.querySelector('.gt-pille');
    bouton = el.querySelector('.gt-menu');
    boutonLib = bouton.querySelector('small');
    lgBouton = el.querySelector('.gt-lg');
    lgListe = el.querySelector('.gt-lg-liste');
    bouton.addEventListener('click', () => o.surMenu());
    lgBouton.addEventListener('click', () => langueOuverte(lgListe.hidden));
    pille.addEventListener('pointerdown', () => { pauseJusqua = Date.now() + 6000; });
    p = -1; ouvert = false; ecoule = 0;
    montrerEtat(etat, true);
    o.chargerImages(el);
    mesurer();
    surDefilement();
    surveillerLargeur();
    caler();
    if (garder) menuOuvert(true);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(mesurer);
    return el;
  }

  return {
    monter, menuOuvert, mesurer,
    get element() { return el; },
    get bouton() { return bouton; },
     
    focusables: () => (el ? [...el.querySelectorAll('.gt-rangee a:not([tabindex="-1"]), .gt-rangee button')].filter((x) => x.getClientRects().length) : []),
    etat: () => ({ p, ouvert, etat })
  };
}

return { creerTelephone };
})();

const __synthese = (function () {
const { ARBORESCENCE } = __arborescence;
 
const { creerTelephone } = __telephone;
const { resumer, maintenantParis } = __programme;
const { monterRecherche } = __recherche;

function creerEnteteD(ctx) {

const q = new URLSearchParams(location.search);
const LANG = ctx.lang === 'en' ? 'en' : 'fr';
const R = ctx.reglages;

let J = ctx.donnees();

const J_FR = { menus: {} };
const MENU = ARBORESCENCE[LANG] || ARBORESCENCE.fr;
const T = R.textes || {};

const M = 'https://static.wixstatic.com/media/';
const S = 'https://static.wixstatic.com/shapes/';
const mqTel = matchMedia('(max-width: 750px)');
const mqTab = matchMedia('(max-width: 1000px)');
const mqReduit = matchMedia('(prefers-reduced-motion: reduce)');
const format = () => (mqTel.matches ? 'tel' : mqTab.matches ? 'tab' : 'pc');
const reduit = () => mqReduit.matches;
const MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
 
const FLAMME = "<svg class=\"rn-flame\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"1473.61 623.30 83.73 162.62\"><path fill=\"#fff\" d=\"M 1498.37 741.84 C 1498.66 740.71 1498.99 739.54 1499.41 738.32 C 1499.71 737.41 1500.12 736.45 1500.6 735.45 L 1539.64 735.45 C 1537.89 737.59 1535.91 739.73 1534.05 741.84 Z M 1498.37 741.84 \"/><path fill=\"#fff\" d=\"M 1543.87 730.15 L 1503.63 730.15 C 1505.02 727.96 1506.69 725.67 1508.43 723.33 L 1548.33 723.33 C 1548.31 723.36 1548.29 723.4 1548.27 723.43 C 1547.05 725.63 1545.52 727.88 1543.87 730.15 \"/><path fill=\"#fff\" d=\"M 1512.67 718.03 C 1514.45 715.82 1516.41 713.61 1518.23 711.46 L 1554.03 711.46 C 1553.31 713.89 1552.41 716 1551.35 718.03 Z M 1512.67 718.03 \"/><path fill=\"#fff\" d=\"M 1555.32 702.41 C 1555.29 703.75 1555.19 704.99 1555.05 706.16 L 1522.9 706.16 C 1524.9 703.86 1526.93 701.7 1528.59 699.77 L 1555.14 699.77 C 1555.22 700.64 1555.34 701.52 1555.32 702.41 \"/><path fill=\"#fff\" d=\"M 1487.24 736.77 C 1482.21 728.27 1475.61 718.86 1482.02 701.7 C 1487.43 687.25 1515.62 660.77 1521.25 653.25 C 1525.88 647.07 1529.16 641.99 1529.01 637.19 L 1529.01 637.18 C 1528.45 635.83 1518.21 628.73 1512.08 625.3 C 1516.82 625.86 1521.14 626.7 1524.24 628.72 C 1525.75 629.58 1527.89 630.98 1529.86 632.94 C 1530.03 633.11 1530.22 633.3 1530.43 633.51 C 1532.74 635.96 1534.68 639.19 1534.86 643.16 C 1535.12 648.46 1533.54 653.21 1529.7 659.15 C 1521.04 672.55 1494.14 697.96 1488.28 709.99 C 1482.21 722.43 1482.25 727.78 1487.24 736.77 \"/><path fill=\"#fff\" d=\"M 1491.39 725.37 C 1497.51 710.82 1523.89 687.39 1531.37 675.89 C 1533.68 672.34 1540.08 664.17 1540.55 654.21 C 1540.8 648.88 1538.6 644.03 1536.05 640.23 C 1537.53 642.04 1545.53 653.03 1544.99 664.25 C 1544.76 668.91 1543.89 672.55 1542.67 675.71 C 1543.88 676.95 1545.39 678.64 1546.81 680.67 C 1547.81 681.86 1551.81 687.48 1553.91 694.47 L 1533.07 694.47 C 1533.52 693.9 1533.89 693.4 1534.2 692.96 C 1537.4 688.36 1539.6 684.43 1540.24 680.8 C 1539.08 682.88 1537.81 684.87 1536.54 686.99 C 1526.98 702.89 1504.43 720.76 1498.52 731.75 C 1496.63 735.25 1495.48 738.81 1495.7 741.97 C 1497.62 743.58 1500.06 745.31 1502.79 747.04 L 1529.29 747.04 C 1527.25 749.3 1525.05 751.6 1523.21 753.71 L 1497.75 753.71 C 1497.48 751.81 1497.3 749.74 1497.49 747.43 C 1496.57 746.82 1495.67 746.16 1494.82 745.46 C 1494.81 745.45 1494.8 745.43 1494.79 745.43 C 1489.04 739.91 1487.72 734.08 1491.39 725.37 \"/><path fill=\"#fff\" d=\"M 1516.4 780.91 C 1514.86 780.07 1513.39 779.1 1512.03 778.02 C 1512.02 778.01 1512.01 778 1512 777.98 C 1509.16 775.74 1506.74 773.04 1505.04 770.27 C 1502.95 766.87 1500.59 763.31 1499.07 759.01 L 1518.75 759.01 C 1516.94 761.33 1516 763.47 1515.05 765.38 C 1513.44 768.63 1512.48 771.92 1512.75 774.8 C 1516.35 777.72 1521.95 781.06 1527.66 783.86 C 1527.57 783.86 1527.48 783.86 1527.38 783.86 C 1523.62 783.92 1519.84 782.78 1516.41 780.91 C 1516.4 780.91 1516.4 780.91 1516.4 780.91 \"/></svg>".replace('class="rn-flame"', 'class="gl-flamme"');
const COMPACTE_H = 56;

 
const CLASSES = {
  'Ultim': { c: '#429991', icone: S + '7bb303_0ed87d76a89f4e6ebd6008778014958e.svg' },
  'Ocean Fifty': { c: '#72b9f1', icone: S + '7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
  'Class40': { c: '#7e93ef', icone: S + '7bb303_b13535fe4621478fb5fb52e98c751b11.svg' },
  'IMOCA': { c: '#76bcbe', icone: S + '7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg' },
  'Vintage Mono': { c: '#f9f06e', icone: S + '7bb303_9b4ee8478c6b4453b668b04eb278406c.svg' },
  'Vintage Multi': { c: '#f19f39', icone: S + '7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg' }
};
 
const MONTRE = ['df962b_6f374b182ba647af8ba5b808bcd0fc67~mv2.avif', 'df962b_23e0b40b8b8749a3af6a736bd3ad18fe~mv2.webp', 'df962b_bfb9d81ed5494964851d188bc89ab132~mv2.webp', 'df962b_e5d91ebdb4fb431bb0a875a1bb72c7ab~mv2.webp']
  .map((id) => M + id + '/v1/fit/w_120,h_120,q_90,enc_auto/m.webp');
const CATS = { actualites: '#5DBFC0', interview: '#FCF150', image: '#FFFFFF', video: '#FFB338', audio: '#5DBFC0' };

const HUB = {
  actualites: { c: '#0B6E6B', bg: '#DCF2EF', v: '#14A79E', ico: 'actualites' },
  image: { c: '#5747C9', bg: '#E9E6FB', v: '#5DBFC0', ico: 'photo' },
  video: { c: '#A14D00', bg: '#FBEAD6', v: '#F19F39', ico: 'video' },
  audio: { c: '#0E5B84', bg: '#DCEBF7', v: '#8B86E0', ico: 'audio' },
  interview: { c: '#8A6C00', bg: '#FBF3CD', v: '#F5BE41', ico: 'interview' }
};
const hubDe = (slug) => HUB[slug] || (slug === 'news' ? HUB.actualites : slug === 'photo' ? HUB.image : HUB.actualites);
 
const TAGS_TUS = /^(partenaire|partenaires|interview|actualit[eé]s?|news|d[eé]part|amrae|kit p[eé]dagogique)$/i;
const NOUVEAU_H = 48;

const CARTE_OUVERTE = MENU.some((r) => (r.liens || []).some((l) => l.lien === '/carte-village-saint-malo' && !l.bientot));
const ACCES = [{ cle: 'carte', lien: '/carte-village-saint-malo' }, { cle: 'programme', lien: '/programmation' }].filter((a) => a.cle !== 'carte' || CARTE_OUVERTE);

const TXT = {
  fr: { depart: 'Départ dans', toutVoir: 'Tout voir', images: 'Voir les images', bientot: 'Bientôt', nouvel: '(nouvel onglet)', enCours: 'rubrique en cours',
        actusTitre: 'Actualités', actusSous: 'La dernière actu, et la dernière de chaque média', voirTout: 'Voir toutes les actualités',
        nouveau: 'Nouveau', lire: 'Lire l\'article', regarder: 'Regarder', ecouter: 'Écouter', voirPhotos: 'Voir le reportage', medias: 'Les rubriques des actualités',
        u: { j: 'j', h: 'h', m: 'min', s: 's' }, ilYa: (n, u) => 'il y a ' + n + ' ' + u, jour: 'j', heure: 'h', lecture: (n) => n + ' min', locale: 'fr-FR', accueil: 'Accueil', page: 'Page simulée',
        chercher: 'Rechercher', placeholder: 'Rechercher une page, un article, un skipper', effacer: 'Effacer la recherche', resultats: 'Résultats de la recherche',
        carte: 'Carte du village', programme: 'Programmation', acces: 'Accès directs', compacte: 'Menu principal, barre compacte', dates: 'Dates du village',
        espaceCourt: 'ESPACE RHUM', espaceL1: 'MON ESPACE', espaceL2: 'RHUM', menuMot: 'MENU', fermerMot: 'FERMER', partenaires: 'Partenaires institutionnels',
        progTitre: 'Programmation', progTout: 'Toute la programmation', billetAvant: '13 jours de fête au village', billetJour: 'Le programme du jour', progJour: 'Toute la programmation du jour', aVenir: 'À venir', journees: 'Journées thématiques', parTheme: 'Par thème',
        tempsForts: 'Temps forts du jour', tempsFortsPremier: 'Temps forts du premier jour', suite: 'La suite aujourd\'hui', enCeMoment: 'En ce moment', aujourdhui: 'Aujourd\'hui',
        premierJour: 'Premier jour', ouvreDans: (n, j) => 'Le village ouvre dans ' + n + (n > 1 ? ' jours' : ' jour') + ', le ' + j + '.', ouvert: (j) => 'Le village est ouvert jusqu\'au ' + j + '.',
        ferme: (j) => 'Le village de Saint-Malo s\'est achevé le ' + j + '.', rdv: (n) => n + (n > 1 ? ' rendez-vous' : ' rendez-vous'), avec: 'avec', gratuit: 'Gratuit', chargement: 'Chargement de la programmation', progIndispo: 'La programmation ne répond pas pour l\'instant.',
        annuler: 'Annuler', espaceMeta: 'Espace membre', boutiqueCourt: ['Boutique', 'Jouer'], departCourt: 'Départ', progDuJour: 'Programmation du jour', placeholderCourt: 'Une page, un article, un skipper', ouvreDansCourt: (n) => 'Le village ouvre dans ' + n + (n > 1 ? ' jours' : ' jour'),
        aujourdhuiVillage: (n) => 'Aujourd\'hui au village : ' + n + (n > 1 ? ' temps forts' : ' temps fort'), aujourdhuiProgramme: 'Aujourd\'hui au village',
        themes: { animation: 'Animations', ceremonie: 'Cérémonies', concert: 'Concerts', conference: 'Conférences', exposition: 'Expositions', nautique: 'Nautique', soiree: 'Soirées', spectacle: 'Spectacles' } },
  en: { depart: 'Race start in', toutVoir: 'See all', images: 'Show images', bientot: 'Coming soon', nouvel: '(new tab)', enCours: 'current section',
        actusTitre: 'News', actusSous: 'The latest news, and the latest of each medium', voirTout: 'See all news',
        nouveau: 'New', lire: 'Read the article', regarder: 'Watch', ecouter: 'Listen', voirPhotos: 'See the story', medias: 'News sections',
        u: { j: 'd', h: 'h', m: 'min', s: 's' }, ilYa: (n, u) => n + ' ' + u + ' ago', jour: 'd', heure: 'h', lecture: (n) => n + ' min read', locale: 'en-GB', accueil: 'Home', page: 'Simulated page',
        chercher: 'Search', placeholder: 'Search a page, an article, a skipper', effacer: 'Clear the search', resultats: 'Search results',
        carte: 'Village map', programme: 'Programme', acces: 'Quick access', compacte: 'Main menu, compact bar', dates: 'Village dates',
        espaceCourt: 'ESPACE RHUM', espaceL1: 'MY ESPACE', espaceL2: 'RHUM', menuMot: 'MENU', fermerMot: 'CLOSE', partenaires: 'Institutional partners',
        progTitre: 'Programme', progTout: 'Full programme', billetAvant: '13 festival days at the village', billetJour: 'Today\'s programme', progJour: 'Full programme of the day', aVenir: 'Coming up', journees: 'Theme days', parTheme: 'By theme',
        tempsForts: 'Today\'s highlights', tempsFortsPremier: 'First day highlights', suite: 'Later today', enCeMoment: 'Right now', aujourdhui: 'Today',
        premierJour: 'First day', ouvreDans: (n, j) => 'The village opens in ' + n + (n > 1 ? ' days' : ' day') + ', on ' + j + '.', ouvert: (j) => 'The village is open until ' + j + '.',
        ferme: (j) => 'The Saint-Malo village closed on ' + j + '.', rdv: (n) => n + (n > 1 ? ' events' : ' event'), avec: 'with', gratuit: 'Free', chargement: 'Loading the programme', progIndispo: 'The programme is not available right now.',
        annuler: 'Cancel', espaceMeta: 'Members area', boutiqueCourt: ['Store', 'Play'], departCourt: 'Race start', progDuJour: 'Today\'s programme', placeholderCourt: 'A page, an article, a skipper', ouvreDansCourt: (n) => 'The village opens in ' + n + (n > 1 ? ' days' : ' day'),
        aujourdhuiVillage: (n) => 'Today at the village: ' + n + (n > 1 ? ' highlights' : ' highlight'), aujourdhuiProgramme: 'Today at the village',
        themes: { animation: 'Activities', ceremonie: 'Ceremonies', concert: 'Concerts', conference: 'Talks', exposition: 'Exhibitions', nautique: 'On the water', soiree: 'Evenings', spectacle: 'Shows' } }
}[LANG];

const trait = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const ICO = {
  chevron: '<svg viewBox="0 0 10 10" aria-hidden="true" focusable="false"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fleche: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
   
  bouton: '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false" fill="currentColor"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg>',
  externe: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6"/></svg>',
  fermer: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>',
  loupe: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>',
  menu: '<svg viewBox="0 0 24 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 3c2.75 0 2.75-2 5.5-2s2.75 2 5.5 2 2.75-2 5.5-2S20.25 3 23 3"/><path d="M1 8c2.75 0 2.75-2 5.5-2s2.75 2 5.5 2 2.75-2 5.5-2S20.25 8 23 8"/><path d="M1 13c2.75 0 2.75-2 5.5-2s2.75 2 5.5 2 2.75-2 5.5-2 2.75 2 5.5 2"/></svg>',
  calendrier: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  carte: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/></svg>',
  image: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 17-5-5-9 8"/></svg>',
  actualites: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h10M7 17h6"/></svg>',
  photo: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/></svg>',
  video: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M7 5.5v13l11-6.5z"/></svg>',
  audio: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M4 12v2M8 8v8M12 5v14M16 9v6M20 11v2"/></svg>',
  interview: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  voile: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M11 3 4 16h7zM13 6l6 10h-6zM2 19.5c3.3 2 6.7 2 10 0s6.7-2 10 0"/></svg>',
  ancre: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 13a7 7 0 0 0 14 0M8 11h8"/></svg>',
  quai: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/></svg>',
  vague: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M2 10c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3M2 16c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3"/></svg>',
  verre: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M7 3h10l-1 7a4 4 0 0 1-8 0zM12 14v6M8 21h8"/></svg>',
  skipper: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  sac: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  manette: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M6 9h12a4 4 0 0 1 3.8 5.2l-.9 2.8a2 2 0 0 1-3.4.7L15 15H9l-2.5 2.7a2 2 0 0 1-3.4-.7l-.9-2.8A4 4 0 0 1 6 9z"/><path d="M8 11v3M6.5 12.5h3"/></svg>',
  fr: '<svg class="gl-drapeau" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="#002395" d="M0 0h7v20H0z"/><path fill="#fff" d="M7 0h6v20H7z"/><path fill="#ED2939" d="M13 0h7v20h-7z"/></svg>',
  en: '<svg class="gl-drapeau" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="#012169" d="M0 0h20v20H0z"/><path d="M0 0l20 20M20 0 0 20" stroke="#fff" stroke-width="4"/><path d="M0 0l20 20M20 0 0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M10 0v20M0 10h20" stroke="#fff" stroke-width="6"/><path d="M10 0v20M0 10h20" stroke="#C8102E" stroke-width="3.4"/></svg>'
};
ICO.itineraire = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7"/></svg>';
ICO.voiture = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M3 16v-3.5L5.5 7h13L21 12.5V16"/><path d="M3 16h18v2.5h-3V16M6 16v2.5H3V16"/><circle cx="7.5" cy="13" r="1"/><circle cx="16.5" cy="13" r="1"/><path d="M5.5 11h13"/></svg>';
ICO.parcours = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M5 19c2.5-3.5 6.5-3 8-7s3.5-6 6-6.5" stroke-dasharray="2.4 2.8"/><circle cx="5" cy="19" r="2"/><path d="M19 3.5v5M19 3.5l3 1.4-3 1.4"/></svg>';
ICO.globe = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 3.4 3.2 14.6 0 18M12 3c-3.2 3.4-3.2 14.6 0 18"/></svg>';
ICO.th_concert = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/></svg>';
ICO.th_spectacle = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/></svg>';
ICO.th_ceremonie = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4M12 13v4M8.5 20h7l-1-3h-5z"/></svg>';
ICO.th_animation = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>';
ICO.th_soiree = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>';
 
ICO.faq = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + trait + '><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>';
ICO['a-propos'] = ICO.voile; ICO.village = ICO.ancre; ICO.villages = ICO.ancre; ICO.engagements = ICO.vague; ICO.skippers = ICO.skipper; ICO.programme = ICO.calendrier;
ICO.th_nautique = ICO.voile; ICO.th_exposition = ICO.image; ICO.th_conference = ICO.interview;
ICO.menuFin = '<svg viewBox="0 0 24 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 3c2.75 0 2.75-2 5.5-2s2.75 2 5.5 2 2.75-2 5.5-2S20.25 3 23 3"/><path d="M1 8c2.75 0 2.75-2 5.5-2s2.75 2 5.5 2 2.75-2 5.5-2S20.25 8 23 8"/><path d="M1 13c2.75 0 2.75-2 5.5-2s2.75 2 5.5 2 2.75-2 5.5-2 2.75 2 5.5 2"/></svg>';

const TUILES = {
  'a-propos': { ico: 'voile', t1: ['#1f6f7a', '#2d5f86'], t2: '#1B2237' },
  'village': { ico: 'ancre', t1: ['#006F7B', '#2d5f86', '#0c7a6a', '#8a5d12'], t2: '#0E111D' },
  'engagements': { ico: 'vague', t1: ['#0c7a6a', '#2d5f86'], t2: '#0E111D' }
};

 
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = (n, l) => String(n).padStart(l || 2, '0');
const externe = (u) => /^https?:\/\//i.test(u || '') && !/^https?:\/\/(www\.)?routedurhum\.com/i.test(u || '');
const lien = (u) => {
  if (!u || externe(u) || u.charAt(0) !== '/') return u || '';
  const c = LANG === 'en' && !/^\/en(\/|$|\?)/.test(u) ? '/en' + (u === '/' ? '' : u) : u;
  return (ctx.base || '') + (ctx.base && c === '/' ? '' : c);
};
const cible = (u) => (externe(u) ? ' target="_blank" rel="noopener"' : '');
const nouvelOnglet = (u) => (externe(u) ? '<span class="gl-vh">' + esc(TXT.nouvel) + '</span>' : '');
const chemin = (u) => String(u || '').split('?')[0].replace(/\/+$/, '') || '/';
function idMedia(src) {
  const s = String(src || '');
  const m = s.match(/^wix:image:\/\/v1\/([^/#]+)/) || s.match(/static\.wixstatic\.com\/media\/([^/?#]+)/);
  return m ? m[1] : null;
}

function vecteur(src) {
  const m = String(src || '').match(/^wix:vector:\/\/v1\/([^/#]+)/);
  if (m) return S + m[1];
  const i = idMedia(src);
  if (i && /^wix:image:/.test(String(src))) return M + i + '/v1/fit/w_32,h_32,q_90,enc_auto/drapeau.png';
  return src || '';
}
 
const wix = (id, w, h, qual, al) => M + id + '/v1/fill/w_' + Math.round(w) + ',h_' + Math.round(h) + ',al_' + (al || 'c') + ',q_' + (qual || 80) + ',enc_avif,quality_auto/i.avif';
function ilYa(iso) {
  const d = (Date.now() - Date.parse(iso)) / 86400000;
  if (!(d >= 0)) return '';
  if (d < 1) return TXT.ilYa(Math.max(1, Math.round(d * 24)), TXT.heure);
  if (d < 30) return TXT.ilYa(Math.floor(d), TXT.jour);
  return new Date(iso).toLocaleDateString(TXT.locale, { day: 'numeric', month: 'long', year: new Date(iso).getFullYear() === new Date().getFullYear() ? undefined : 'numeric' });
}
const rejouer = (el, cls) => { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };

 
const etat = {
  chemin: ctx.chemin(),
  force: /^(1|oui)$/.test(q.get('leger') || '') ? 'oui' : /^(0|non)$/.test(q.get('leger') || '') ? 'non' : 'auto',
  detecte: false, raisons: [], temoinMs: null, leger: false,
  large: null,         
  source: 'entete',    
  plein: false,        
  rub: null,           
  tab: null,           
  compacte: false      
};

 

function carteSource(src) {
  if (!src) return null;
  const chercher = (jeu) => ((jeu.menus && jeu.menus[src.panneau] && jeu.menus[src.panneau].cartes) || []).find((c) => chemin(c.lien) === chemin(src.lien));
  const c = chercher(J);
  if (c) return { c, memeLangue: true };
  const f = LANG !== 'fr' && chercher(J_FR);
  return f ? { c: f, memeLangue: false } : null;
}
const domaine = (u) => String(u || '').replace(/^https?:\/\//, '').replace(/\/.*$/, '');
function modele() {
  const menus = J.menus || {};
  return MENU.map((e, i) => {
    const base = { cle: e.cle, num: pad(i + 1), libelle: e.libelle, lien: e.lien || '', liens: e.liens || [], prefixes: e.prefixes || [], panneau: e.panneau || '', cartes: [] };
     
    if (!e.panneau) return Object.assign(base, { dispo: 'lien', titre: e.libelle, sous: '', note: '', tout: null });
     
    if (e.panneau === 'programme') return Object.assign(base, { dispo: 'programme', titre: TXT.progTitre, sous: '', note: '', tout: { libelle: TXT.progTout, lien: e.lien } });
    if (e.panneau === 'actus') {
      const posts = (J.posts || []).slice().sort((a, b) => Date.parse(b.publishedDate) - Date.parse(a.publishedDate)).slice(0, 8);
      return Object.assign(base, {
        dispo: 'actus', titre: TXT.actusTitre, sous: TXT.actusSous, note: '',
        tout: { libelle: TXT.voirTout, lien: e.lien },
        cartes: posts.map((p) => ({ type: 'post', titre: p.title, image: idMedia(p.coverImage), lien: p.postPageUrl, cat: p.categorie || {}, date: p.publishedDate, lecture: p.timeToRead,
          sujet: (Array.isArray(p.tags) ? p.tags : []).map((t) => String((t && typeof t === 'object' ? t.label : t) || '').trim()).find((t) => t && !TAGS_TUS.test(t)) || '' }))
      });
    }
    const m = menus[e.panneau] || (J_FR.menus || {})[e.panneau] || {};
    const rg = (menus[e.panneau] || {}).reglages || {};
    if (m.skippers && m.skippers.length) {
      return Object.assign(base, {
        dispo: 'skippers', titre: rg.titre || e.libelle, sous: rg.sousTitre || '', note: rg.note || '',
        tout: rg.boutonLien ? { libelle: rg.boutonLibelle || TXT.toutVoir, lien: rg.boutonLien } : { libelle: TXT.toutVoir, lien: e.lien },
        cartes: m.skippers.map((s) => ({ type: 'skipper', prenom: String(s.prenom || '').trim(), nom: String(s.nom || '').trim(), bateau: String(s.bateau || '').trim(), image: idMedia(s.photoVignette), lien: s['link-skippers-prenomNom'], drapeau: vecteur(s.drapeau), classe: s.classes && s.classes.nom, couleur: (s.classes && s.classes.couleur) || '#5DBFC0' }))
      });
    }
    

    const cartes = e.liens.map((l) => {
      const s = carteSource(l.source);
      const commun = { lien: l.bientot ? '' : l.lien, bientot: !!l.bientot, groupe: l.groupe || '', picto: l.picto || '' };
      if (s) {
        const c = s.c;
        return Object.assign(commun, {
          type: l.date ? 'village' : 'carte',
          titre: l.date || !s.memeLangue ? l.libelle : c.titre,
          sous: l.date || !s.memeLangue ? '' : c.sousTitre,
          image: idMedia(c.image), format: c.format === 'grande' ? 'grande' : '',
          pastille: l.date ? c.pastille : '', pastilleStyle: c.pastilleStyle
        });
      }
      

      const img = idMedia(l.image);
      return Object.assign(commun, { type: 'carte', titre: l.libelle, sous: externe(l.lien) ? domaine(l.lien) : '', image: img, tuile: !img });
    });
    const dates = e.dates ? carteSource(e.dates) : null;
    return Object.assign(base, {
      dispo: e.cle,
      titre: e.cle === 'village' ? e.libelle : rg.titre || e.libelle,
      sous: e.cle === 'village' ? (dates && dates.memeLangue ? dates.c.sousTitre : '') : rg.sousTitre || '',
      note: rg.note || '',
      dates: dates ? dates.c.pastille : '',
      faq: e.faq && e.faq.lien ? e.faq : null,
      tout: e.sansTout ? null : rg.boutonLien ? { libelle: rg.boutonLibelle || TXT.toutVoir, lien: rg.boutonLien } : e.lien ? { libelle: TXT.toutVoir, lien: e.lien } : null,
      cartes
    });
  });
}
let RUBS = modele();

function calculerCleActive() {
  const p = etat.chemin;
  const internes = (l) => l.filter((u) => u && u.charAt(0) === '/').map(chemin);
  let r = RUBS.find((x) => x.lien && chemin(x.lien) === p);
  if (!r) r = RUBS.find((x) => internes(x.liens.map((l) => l.lien)).includes(p));
  if (!r) r = RUBS.find((x) => internes([x.lien].concat(x.liens.map((l) => l.lien), x.prefixes, x.cartes.map((c) => c.lien))).some((c) => c !== '/' && (p === c || p.indexOf(c + '/') === 0)));
  return r ? r.cle : null;
}
const cleActive = () => calculerCleActive();
const estActif = (r) => r.cle === calculerCleActive();
 
const clePanneau = (cle) => (RUBS.find((x) => x.cle === cle && x.panneau) || RUBS.find((x) => x.panneau)).cle;
const estCourant = (u) => !!u && u.charAt(0) === '/' && u.indexOf('?') < 0 && chemin(u) === etat.chemin;

 
function espaceHTML(cls, court) {
  const e = R.espace;
  return e ? '<a class="' + cls + '" href="' + esc(lien(e.lien)) + '"><span>' + esc(court ? e.libelle.replace(/^(MON|MY)\s+/i, '') : e.libelle) + '</span><img src="' + esc(e.icone) + '" alt="" width="26" height="30" decoding="async"></a>' : '';
}
function urlLangue(code) { return ctx.autreLangue(code); }
function languesHTML(cls) {
  return '<nav class="gl-langues ' + (cls || '') + '" aria-label="' + esc(T.langue) + '">' +
    (R.langues || []).map((l) => '<a href="' + esc(urlLangue(l.code)) + '" hreflang="' + l.code + '" lang="' + l.code + '"' + (l.code === LANG ? ' aria-current="true"' : '') + '>' + (ICO[l.code] || '') + '<span>' + esc(l.libelle) + '</span></a>').join('') +
    '</nav>';
}

function langueMenuHTML() {
  const ls = R.langues || [];
  const cur = ls.find((l) => l.code === LANG) || ls[0];
  if (!cur) return '';
  return '<div class="gl-langue">' +
    '<button type="button" class="gl-langue-btn" aria-haspopup="true" aria-expanded="false" aria-label="' + esc(T.langue + ' : ' + cur.libelle) + '">' + (ICO[cur.code] || '') + '<span>' + esc(cur.libelle) + '</span>' + ICO.chevron + '</button>' +
    '<ul class="gl-langue-liste" hidden>' + ls.map((l) => '<li><a href="' + esc(urlLangue(l.code)) + '" hreflang="' + l.code + '" lang="' + l.code + '"' + (l.code === LANG ? ' aria-current="true"' : '') + '>' + (ICO[l.code] || '') + '<span>' + esc(l.libelle) + '</span></a></li>').join('') + '</ul>' +
  '</div>';
}
function langueOuverte() { const b = racine.querySelector('.gl-langue-btn'); return !!b && b.getAttribute('aria-expanded') === 'true'; }
function ouvrirLangue(ouvrir, rendreFocus) {
  const b = racine.querySelector('.gl-langue-btn'), l = racine.querySelector('.gl-langue-liste');
  if (!b || !l) return;
  b.setAttribute('aria-expanded', ouvrir ? 'true' : 'false');
  l.hidden = !ouvrir;
  const haut = racine.querySelector('.gl-haut'); if (haut) haut.classList.toggle('est-langue', !!ouvrir);
  if (ouvrir) { const a = l.querySelector('a:not([aria-current])') || l.querySelector('a'); if (a) a.focus(); } else if (rendreFocus) b.focus();
}
const compteHTML = () => '<span class="gl-compte" data-compte><b data-u="j">000</b><i>' + TXT.u.j + '</i><b data-u="h">00</b><i>' + TXT.u.h + '</i><b data-u="m">00</b><i>' + TXT.u.m + '</i><b data-u="s">00</b><i>' + TXT.u.s + '</i></span>';
const montreHTML = () => '<span class="gl-cadran" aria-hidden="true">' + MONTRE.map((u, i) => '<img alt="" decoding="async" data-src="' + u + '"' + (i ? ' data-aiguille="' + 'hms'.charAt(i - 1) + '"' : '') + '>').join('') + '</span>';
const alpinaHTML = () => (R.alpina ? '<a class="gl-alpina" href="' + esc(R.alpina.lien) + '" target="_blank" rel="noopener"><img src="' + esc(R.alpina.logo) + '" alt="' + esc(R.alpina.alt) + '" decoding="async" height="18">' + nouvelOnglet(R.alpina.lien) + '</a>' : '');
const raccourciClavier = () => (MAC ? '⌘ K' : 'Ctrl K');

const compteCourtHTML = () => '<div class="gl-cc" role="timer" aria-label="' + esc(T.compte) + '"><span class="gl-cc-chrono">' + montreHTML() +
   
  (R.alpina && R.alpina.logoSombre ? '<img class="gl-cc-alp" src="' + esc(R.alpina.logoSombre) + '" alt="' + esc(R.alpina.alt) + '" width="35" height="8" decoding="async">' : '') + '</span>' +
  '<span class="gl-cc-txt"><small aria-hidden="true">' + esc(TXT.departCourt) + '</small>' + compteHTML() + '</span></div>';
 
const COURT = q.get('espace') === 'court';
function duoHTML(bouton) {
  const e = R.espace;
  const lib = COURT ? '<span class="gl-duo-lib">' + esc(TXT.espaceCourt) + '</span>' : '<span class="gl-duo-lib"><span>' + esc(TXT.espaceL1) + '</span> <span>' + esc(TXT.espaceL2) + '</span></span>';
  return '<div class="gl-duo' + (COURT ? ' gl-duo--court' : '') + '">' +
    (e ? '<a class="gl-duo-espace" href="' + esc(lien(e.lien)) + '" aria-label="' + esc(e.libelle) + '"><span class="gl-duo-in"><img src="' + esc(e.icone) + '" alt="" width="22" height="26" decoding="async">' + lib + '</span></a>' : '') +
    (bouton === 'fermer'
      ? '<button type="button" class="gl-duo-bouton gl-fermer" aria-label="' + esc(T.fermer || 'Fermer le menu') + '"><span class="gl-duo-in">' + ICO.fermer + '<small aria-hidden="true">' + esc(TXT.fermerMot) + '</small></span></button>'
      : bouton === 'menu' ? '<button type="button" class="gl-duo-bouton gl-c-menu" aria-expanded="false" aria-controls="gl-plein" aria-label="' + esc(T.menu || 'Menu') + '"><span class="gl-duo-in">' + ICO.menuFin + '<small aria-hidden="true">' + esc(TXT.menuMot) + '</small></span></button>' : '') +
  '</div>';
}

function puces(r) {
  

  const aCarte = (x) => r.cartes.some((c) => (x.lien && c.lien && chemin(c.lien) === chemin(x.lien) && c.lien.indexOf('?') < 0) || (!x.lien && c.titre === x.libelle));
  const l = r.liens.filter((x) => !(r.liens.length === 1 && chemin(x.lien) === chemin(r.lien)) && !aCarte(x));
  if (!l.length) return '';
  

  if (r.dispo === 'actus') {
    return '<nav class="gl-medias" aria-label="' + esc(TXT.medias) + '">' + l.map((x) => {
      const m = String(x.lien || '').match(/[?&]cat=([^&#]+)/);
      const h = hubDe(m ? m[1] : 'actualites');
      return '<a class="gl-media" href="' + esc(lien(x.lien)) + '"' + cible(x.lien) + (estCourant(x.lien) ? ' aria-current="page"' : '') + ' style="--c:' + h.c + ';--bg:' + h.bg + '"><i>' + ICO[h.ico] + '</i><span>' + esc(x.libelle) + '</span></a>';
    }).join('') + '</nav>';
  }
  let groupe = '';
  return '<ul class="gl-puces">' + l.map((x) => {
    let h = '';
    if (x.groupe && x.groupe !== groupe) h += '<li class="gl-puce-groupe" aria-hidden="true">' + esc(x.groupe) + '</li>';
    groupe = x.groupe || '';
    const avant = x.groupe ? '<span class="gl-vh">' + esc(x.groupe) + ', </span>' : '';
    h += x.bientot || !x.lien
      ? '<li class="gl-puce gl-puce--bientot"><span class="gl-puce-in">' + avant + '<span>' + esc(x.libelle) + '</span><small>' + esc(TXT.bientot) + '</small></span></li>'
      : '<li class="gl-puce"><a href="' + esc(lien(x.lien)) + '"' + cible(x.lien) + (estCourant(x.lien) ? ' aria-current="page"' : '') + '>' + avant + '<span>' + esc(x.libelle) + '</span>' + (externe(x.lien) ? '<i class="gl-puce-ext">' + ICO.externe + '</i>' : '') + nouvelOnglet(x.lien) + '</a></li>';
    return h;
  }).join('') + '</ul>';
}
const datesHTML = (r) => (r.dates ? '<p class="gl-dates-rub"><span class="gl-vh">' + esc(TXT.dates) + ' : </span>' + ICO.calendrier + '<span>' + esc(r.dates) + '</span></p>' : '');

const datesMentionHTML = (r) => (r.dates ? '<span class="gl-kicker-dates"><span class="gl-vh">' + esc(TXT.dates) + ' : </span>' + ICO.calendrier + '<span>' + esc(r.dates) + '</span></span>' : '');

const faqHTML = (r) => (r.faq ? '<a class="gl-faq" href="' + esc(lien(r.faq.lien)) + '"' + cible(r.faq.lien) + '><span class="gl-faq-point" aria-hidden="true">?</span><span>' + esc(r.faq.libelle) + '</span>' + ICO.fleche + '</a>' : '');

const VILLAGE_JOURS = ['2026-10-20', '2026-11-01'];
function billetProgrammeHTML(a) {
  const jour = new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const pendant = jour >= VILLAGE_JOURS[0] && jour <= VILLAGE_JOURS[1];
  const apres = jour > VILLAGE_JOURS[1];
  const d = pendant ? jour : VILLAGE_JOURS[0];
  const talon = apres ? '' : d.slice(8, 10) + '.' + d.slice(5, 7);
  const ligne = pendant ? TXT.billetJour : apres ? TXT.progTout : TXT.billetAvant;
  return '<a class="gl-acces-lien gl-acces-billet" href="' + esc(lien(a.lien)) + '"' + (estCourant(a.lien) ? ' aria-current="page"' : '') + '>' +
    '<span class="gl-billet-talon" aria-hidden="true">' + ICO.calendrier + (talon ? '<b>' + esc(talon) + '</b>' : '') + '</span>' +
    '<span class="gl-billet-corps"><b>' + esc(TXT[a.cle]) + '</b><small>' + esc(ligne) + '</small></span>' +
    '<span class="gl-billet-fl" aria-hidden="true">' + ICO.fleche + '</span></a>';
}
const voirImagesHTML = () => '<button type="button" class="gl-voir-img">' + ICO.image + '<span>' + esc(TXT.images) + '</span></button>';
 

function rubLibHTML(libelle) {
  const t = String(libelle || '');
  const long = !/\s/.test(t.trim()) && t.length > 11;
  

  return '<span class="gl-rub-lib' + (long ? ' gl-rub-lib--long" style="--len:' + t.length : '') + '">' + esc(t).replace(/(\S+-\S+)/g, '<span class="gl-insecable">$1</span>') + '</span>';
}
function entreeHTML(r) {
  const actif = estActif(r);
   
  if (!r.panneau) return '<li class="gl-entree gl-entree--directe' + (actif ? ' est-actif' : '') + '" data-cle="' + r.cle + '"><a class="gl-entree-lien" href="' + esc(lien(r.lien)) + '"' + (estCourant(r.lien) ? ' aria-current="page"' : actif ? ' aria-current="true"' : '') + '>' + esc(r.libelle) + '</a></li>';
  const principal = r.lien
    ? '<a class="gl-entree-lien" href="' + esc(lien(r.lien)) + '"' + (estCourant(r.lien) ? ' aria-current="page"' : actif ? ' aria-current="true"' : '') + '>' + esc(r.libelle) + '</a>' +
      '<button type="button" class="gl-chev" data-ouvre="' + r.cle + '" aria-expanded="false" aria-controls="gl-large" aria-label="' + esc((T.plus || 'Plus de pages') + ' ' + r.libelle) + '">' + ICO.chevron + '</button>'
    : '<button type="button" class="gl-entree-lien" data-ouvre="' + r.cle + '" aria-expanded="false" aria-controls="gl-large">' + esc(r.libelle) + '<span class="gl-chev-in">' + ICO.chevron + '</span></button>';
  return '<li class="gl-entree' + (actif ? ' est-actif' : '') + '" data-cle="' + r.cle + '">' + principal + '</li>';
}

 
function dims(c, ctx, k, r) {
  if (ctx === 'pc') {
    switch (r.dispo) {
      case 'actus': return k === 0 ? [400, 470] : [260, 230];
      case 'skippers': return [300, 230];
      case 'village': return k === 0 ? [400, 470] : [260, 230];
      case 'a-propos': return c.format === 'grande' ? [360, 470] : [270, 230];
      default: return [240, 420];
    }
  }
  if (c.type === 'skipper') return [196, 262];
  if (c.type === 'village') return [300, 300];
  return [248, 300];
}
function tuileHTML(c, r) {
  let t1 = '#006F7B', t2 = '#1B2237', tc = '#fff', dedans;
  if (c.type === 'skipper') {
    t1 = c.couleur; t2 = '#0E111D'; tc = '#0E111D';
    dedans = '<b>' + esc(c.prenom.charAt(0) + c.nom.charAt(0)) + '</b><small>' + esc(c.classe || '') + '</small>';
  } else if (c.type === 'post') {
    const slug = (c.cat && c.cat.slug) || 'actualites';
    dedans = '<span style="color:' + (CATS[slug] || '#5DBFC0') + '">' + (ICO[slug] || ICO.actualites) + '</span>';
  } else {
    const d = TUILES[r.cle] || TUILES['a-propos'];
    const teintes = [].concat(d.t1);
    t1 = c.bientot ? '#2a3150' : teintes[(r.cartes.indexOf(c) + teintes.length) % teintes.length]; t2 = d.t2;
    dedans = ICO[c.picto] || ICO[d.ico];
  }
  return '<span class="gl-tuile' + (c.type === 'skipper' ? '' : ' gl-tuile--picto') + '" style="--t1:' + t1 + ';--t2:' + t2 + ';--tc:' + tc + '" aria-hidden="true">' + dedans + '</span>';
}

function nomSkipperHTML(nom) {
  const parties = nom.split(/\s+|(?<=-)/).filter(Boolean);
  const deux = nom.length > 12 && parties.length > 1;
  const len = Math.max(7, deux ? Math.max(...parties.map((p) => p.length)) : nom.length);
  return '<span class="gl-sk-nom' + (deux ? ' gl-sk-nom--deux' : '') + '" style="--len:' + len + '">' + esc(nom) + '</span>';
}
function carte(c, ctx, k, r) {
  const d = dims(c, ctx, k, r), w = d[0], h = d[1];
  const al = c.type === 'skipper' ? 't' : 'c';
  const img = c.image
    ? '<img class="gl-photo" alt="" loading="lazy" decoding="async" width="' + w + '" height="' + h + '" data-src="' + wix(c.image, w, h, 80, al) + '" data-srcset="' + wix(c.image, w, h, 80, al) + ' 1x, ' + wix(c.image, w * 2, h * 2, 70, al) + ' 2x" data-bd="' + wix(c.image, w / 3, h / 3, 30, al) + '">'
    : '';
  const cls = ['gl-carte', 'gl-carte--' + c.type];
  if (c.format === 'grande') cls.push('gl-carte--grande');
  if (c.format === 'bandeau') cls.push('gl-carte--bandeau');
  if (c.bientot) cls.push('gl-carte--bientot');
  if (!c.image) cls.push('sans-image');
  let style = '--k:' + k, corps = '';
  if (c.type === 'post') {
    

    const slug = (c.cat && c.cat.slug) || 'actualites';
    const h = hubDe(slug);
    const neuf = (Date.now() - Date.parse(c.date)) < NOUVEAU_H * 3600000;
    const faire = h === HUB.image ? TXT.voirPhotos : h === HUB.video ? TXT.regarder : h === HUB.audio ? TXT.ecouter : TXT.lire;
    corps = '<span class="gl-cat" style="--c:' + h.c + ';--bg:' + h.bg + '">' + ICO[h.ico] + '<span>' + esc(c.cat.label || '') + '</span></span>' +
      '<span class="gl-carte-txt">' + (c.sujet ? '<span class="gl-sujet" style="--v:' + h.v + '">' + esc(c.sujet) + '</span>' : '') +
        '<span class="gl-carte-titre">' + esc(c.titre) + '</span>' +
        '<span class="gl-quand">' + (neuf ? '<b>' + esc(TXT.nouveau) + '</b>' : '') + '<span>' + esc(ilYa(c.date)) + '</span>' +
          (k === 0 && ctx === 'pc' ? '<span class="gl-faire">' + esc(faire) + ICO.fleche + '</span>' : '') + '</span></span>';
  } else if (c.type === 'skipper') {
    style += ';--cc:' + c.couleur;
    const cl = CLASSES[c.classe];
    corps = (cl ? '<img class="gl-banniere" alt="' + esc(c.classe) + '" decoding="async" data-src="' + cl.icone + '">' : '') +
      '<span class="gl-carte-txt"><span class="gl-sk-prenom">' + (c.drapeau ? '<img alt="" width="16" height="16" decoding="async" data-src="' + esc(c.drapeau) + '">' : '') + esc(c.prenom) + '</span>' +
      nomSkipperHTML(c.nom) + '<span class="gl-sk-bateau">' + esc(c.bateau) + '</span></span>';
  } else if (c.type === 'village') {
    const cb = c.pastilleStyle === 'jaune' ? 'var(--gl-jaune-p)' : 'var(--gl-teal-c)';
    corps = '<span class="gl-carte-txt"><span class="gl-carte-titre">' + esc(c.titre) + '</span>' + (c.sous ? '<span class="gl-carte-sous">' + esc(c.sous) + '</span>' : '') + '</span>' +
      (c.pastille ? '<span class="gl-bande-date" style="--cb:' + cb + '">' + ICO.calendrier + '<span>' + esc(c.pastille) + '</span></span>' : '');
  } else {
    corps = (c.bientot ? '<span class="gl-etiquette"><span>' + esc(TXT.bientot) + '</span></span>' : '') +
      (externe(c.lien) && !c.bientot ? '<span class="gl-ext">' + ICO.externe + '</span>' : '') +
      '<span class="gl-carte-txt">' + (c.groupe ? '<span class="gl-carte-groupe">' + esc(c.groupe) + '</span>' : '') + '<span class="gl-carte-titre">' + esc(c.titre) + '</span>' + (c.sous ? '<span class="gl-carte-sous">' + esc(c.sous) + '</span>' : '') + '</span>';
  }
  const lienOk = c.lien && !c.bientot;
  const tag = lienOk ? 'a' : 'div';
  const attrs = lienOk ? ' href="' + esc(lien(c.lien)) + '"' + cible(c.lien) : c.bientot ? ' aria-disabled="true"' : '';
  return '<' + tag + ' class="' + cls.join(' ') + '" style="' + style + '"' + attrs + '>' + tuileHTML(c, r) + img + corps + (lienOk ? nouvelOnglet(c.lien) : '') + '</' + tag + '>';
}

 
function chargerImages(scope) {
  if (!scope || etat.leger) return;
  scope.querySelectorAll('img[data-src]').forEach((im) => {
    if (im.dataset.srcset) im.srcset = im.dataset.srcset;
    im.src = im.dataset.src;
    im.classList.remove('est-bd');
    im.removeAttribute('data-src'); im.removeAttribute('data-srcset');
  });
}
 
function chargerBD(scope) {
  if (!scope) return;
  scope.classList.add('bd-chargees');
  scope.querySelectorAll('img[data-bd]').forEach((im) => { if (im.dataset.src) { im.removeAttribute('srcset'); im.src = im.dataset.bd; im.classList.add('est-bd'); } });
}

let racine = ctx.racine;

const portail = ctx.portail;
const tous = (sel) => [...racine.querySelectorAll(sel), ...portail.querySelectorAll(sel)];
let large = null;       
let plein = null;       
let compacte = null;    
let tel = null;         

function rendreEntete() {
  const reseaux = (R.reseaux || []).map((s) => '<li><a href="' + esc(s.lien) + '" target="_blank" rel="noopener" aria-label="' + esc(s.nom) + '"><img src="' + esc(s.icone) + '" alt="" width="18" height="18" decoding="async"></a></li>').join('');
  const services = (R.liensHaut || []).filter((l) => !l.horsBarre).map((l) => '<a href="' + esc(lien(l.lien)) + '"' + cible(l.lien) + '>' + esc(l.libelle) + nouvelOnglet(l.lien) + '</a>').join('');
  const partenaires = (R.partenaires || []).map((p) => '<a class="gl-partenaire" href="' + esc(lien(p.lien)) + '"><img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" decoding="async"></a>').join('');
  const boutique = (R.boutique || []).map((b, i) => '<a class="gl-boutique" href="' + esc(b.lien) + '" target="_blank" rel="noopener"><span class="gl-b-long">' + esc(b.libelle) + '</span><span class="gl-b-court" aria-hidden="true">' + esc(TXT.boutiqueCourt[i] || b.libelle) + '</span><img src="' + esc(b.image) + '" alt="' + esc(b.alt || '') + '" loading="lazy" decoding="async">' + nouvelOnglet(b.lien) + '</a>').join('');
  const b = R.bandeau || {};
  const marquer = (t) => esc(t || '').replace(/\*([^*]+)\*/g, (m, x) => (x.trim() === '|' ? '<b class="gl-sep-txt">|</b>' : '<b>' + x + '</b>'));
  

  const messages = [b.texte].concat(Array.isArray(b.autres) ? b.autres : []).filter(Boolean);
  const dates = messages.map((t, i) => '<span class="gl-date' + (i ? '' : ' est-la') + '"' + (i ? ' aria-hidden="true"' : '') + '>' + marquer(t) + '</span>').join('');

  racine.innerHTML =
    '<div class="gl-haut">' +
      '<ul class="gl-reseaux" aria-label="' + esc(T.reseaux) + '">' + reseaux + '</ul>' +
      '<button type="button" class="gl-loupe" data-recherche aria-haspopup="dialog" aria-label="' + esc(TXT.chercher) + '">' + ICO.loupe + '<span class="gl-loupe-txt" aria-hidden="true">' + esc(TXT.chercher) + '</span><kbd aria-hidden="true">' + raccourciClavier() + '</kbd></button>' +
      '<nav class="gl-services" aria-label="' + esc(T.services) + '">' + services + '</nav>' +
      espaceHTML('gl-espace') + langueMenuHTML() +
    '</div>' +
    '<div class="gl-barre">' +
      '<div class="gl-marque">' +
        '<a class="gl-logo" href="' + esc(lien(R.logo.lien || '/')) + '"><img src="' + esc(R.logo.src) + '" alt="' + esc(R.logo.alt) + '" width="65" height="65" decoding="async" fetchpriority="high"></a>' +
        '<a class="gl-tymal" href="' + esc(lien(R.tymal.lien)) + '" tabindex="-1"><img alt="' + esc(R.tymal.alt) + '" width="72" height="72" decoding="async" data-survol="' + esc(R.tymal.src) + '"></a>' +
      '</div>' +
      '<nav class="gl-nav" aria-label="' + esc(T.principal) + '"><ul>' + RUBS.map(entreeHTML).join('') + '</ul></nav>' +
      '<div class="gl-decor" aria-hidden="true"><img src="' + esc(R.decor) + '" alt="" decoding="async"></div>' +
      '<div class="gl-droite"><div class="gl-etat est-la">' + partenaires + '</div><div class="gl-etat" aria-hidden="true" inert>' + boutique + '</div>' +
        '<span class="gl-rot" aria-hidden="true"><i class="est-la"><b></b></i><i><b></b></i></span></div>' +
      '<button type="button" class="gl-menu" aria-expanded="false" aria-controls="gl-plein" aria-label="' + esc(T.menu || 'Menu') + '"><span class="gl-menu-txt" aria-hidden="true">' + esc(T.menu || 'Menu') + '</span>' + ICO.menu + '</button>' +
    '</div>' +
    '<div class="gl-bande">' +
      '<p class="gl-dates">' + dates + '</p>' +
      '<div class="gl-montre"><span role="timer" aria-label="' + esc(T.compte) + '">' + compteHTML() + '</span>' + montreHTML() + alpinaHTML() + '</div>' +
    '</div>';
  portail.innerHTML = '<div class="gl-voile" aria-hidden="true"></div><div class="gl-large-hote"></div><div class="gl-compacte-hote"></div>';
  large = null; compacte = null; etat.compacte = false;
  brancherEntete();
  chargerImages(racine.querySelector('.gl-bande'));
  if (tel) tel.monter();
  poserAttenteIntro();
  poserAttenteDouce();
  tic();
  surDefilement(true);
}

let tOuvrir = null, tFermer = null, tOnglet = null, dernierPointeur = 'mouse', pauseRot = false;
 
function brancherEntrees(scope, source) {
  scope.querySelectorAll('.gl-entree').forEach((li) => {
    const cle = li.dataset.cle;
     
    if (li.classList.contains('gl-entree--directe')) {
      li.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch' && etat.large) planifierFermeture(); });
      return;
    }
    li.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'touch' || format() !== 'pc') return;
      clearTimeout(tFermer); clearTimeout(tOuvrir);
      if (etat.large) ouvrirLarge(cle, false, source); else tOuvrir = setTimeout(() => ouvrirLarge(cle, false, source), 90);
    });
    li.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') planifierFermeture(); });
    li.addEventListener('pointerdown', (e) => { dernierPointeur = e.pointerType; });
    li.querySelectorAll('[data-ouvre]').forEach((b) => b.addEventListener('click', (e) => {
      e.preventDefault();
      const clavier = e.detail === 0;
      if (etat.large === cle && etat.source === source && !clavier) fermerLarge(); else ouvrirLarge(cle, clavier, source);
    }));
     
    const a = li.querySelector('a.gl-entree-lien');
    if (a) a.addEventListener('click', (e) => { if (dernierPointeur === 'touch' && etat.large !== cle) { e.preventDefault(); ouvrirLarge(cle, false, source); } });
  });
}
function brancherEntete() {
  brancherEntrees(racine.querySelector('.gl-barre'), 'entete');
  racine.querySelector('.gl-barre .gl-menu').addEventListener('click', () => ouvrirPlein());
  racine.querySelector('.gl-loupe').addEventListener('click', () => ouvrirRecherche());
  portail.querySelector('.gl-voile').addEventListener('click', () => fermerLarge());
  const barre = racine.querySelector('.gl-barre');
  barre.addEventListener('pointerenter', () => {
    const im = racine.querySelector('.gl-tymal img[data-survol]');
    if (im && !etat.leger) { im.src = im.dataset.survol; im.removeAttribute('data-survol'); }
  });
  const droite = racine.querySelector('.gl-droite');
  droite.addEventListener('pointerenter', () => { pauseRot = true; });
  droite.addEventListener('pointerleave', () => { pauseRot = false; });
  droite.addEventListener('focusin', () => { pauseRot = true; });
  droite.addEventListener('focusout', () => { pauseRot = false; });
  droite.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') pauseToucher = Date.now() + 6000; });
  etatRot = 0; rotEcoule = 0;
  observerRotation();
  racine.addEventListener('focusout', (e) => {
    if (!etat.large) return;
    const v = e.relatedTarget;
    if (v && !(v.closest('.gl-nav') || v.closest('.gl-c-nav') || v.closest('.gl-large'))) fermerLarge();
  });
}
function planifierFermeture() {
  clearTimeout(tOuvrir); clearTimeout(tFermer);
  tFermer = setTimeout(() => fermerLarge(), 280);
}

function construireCompacte() {
  if (compacte) return;
  const hote = portail.querySelector('.gl-compacte-hote');
  hote.innerHTML =
    '<div class="gl-compacte" aria-hidden="true" inert>' +
      '<a class="gl-c-logo" href="' + esc(lien(R.logo.lien || '/')) + '"><img src="' + esc(R.logo.src) + '" alt="' + esc(R.logo.alt) + '" width="40" height="40" decoding="async"></a>' +
      compteCourtHTML() +
      '<nav class="gl-c-nav" aria-label="' + esc(TXT.compacte) + '"><ul>' + RUBS.map(entreeHTML).join('') + '</ul></nav>' +
      '<button type="button" class="gl-c-loupe" data-recherche aria-haspopup="dialog" aria-label="' + esc(TXT.chercher) + '">' + ICO.loupe + '<span class="gl-loupe-txt" aria-hidden="true">' + esc(TXT.chercher) + '</span><kbd aria-hidden="true">' + raccourciClavier() + '</kbd></button>' +
      duoHTML('menu') +
    '</div>';
  compacte = hote.firstElementChild;
  chargerImages(compacte.querySelector('.gl-cc'));
  tic();
  brancherEntrees(compacte, 'compacte');
  compacte.querySelector('.gl-c-loupe').addEventListener('click', () => ouvrirRecherche());
  compacte.querySelector('.gl-c-menu').addEventListener('click', () => ouvrirPlein());
  majEntrees();
}
function montrerCompacte(oui) {
  if (oui === etat.compacte) return;
  if (oui) construireCompacte();
  if (!compacte) return;
  etat.compacte = oui;
  if (oui) void compacte.offsetWidth;
  compacte.classList.toggle('est-visible', oui);
  compacte.inert = !oui;
  compacte.setAttribute('aria-hidden', String(!oui));
  if (!oui && compacte.contains(document.activeElement)) document.activeElement.blur();
}

let yAvant = window.scrollY || 0, enAttenteDefil = false;
function surDefilement(force) {
  if (enAttenteDefil && !force) return;
  enAttenteDefil = true;
  requestAnimationFrame(() => {
    enAttenteDefil = false;
    if (etat.plein) return;
    const y = window.scrollY || window.pageYOffset || 0;
    const h = racine.offsetHeight;
    const voir = y > h;
    yAvant = y;
    if (etat.large) placerLarge();
    if (etat.large) {
      if (etat.source === 'compacte' && !voir) fermerLarge();
      else if (etat.source === 'entete' && y > h) fermerLarge();
    }
     
    montrerCompacte(voir && format() !== 'tel');
  });
}
window.addEventListener('scroll', () => surDefilement(), { passive: true });

function construireLarge() {
  if (large) return;
  const onglets = RUBS.map((r) => {
    const encours = estActif(r) ? '<span class="gl-vh">, ' + esc(TXT.enCours) + '</span>' : '';
    const dedans = '<span class="gl-num">' + r.num + '</span>' + rubLibHTML(r.libelle).replace('gl-rub-lib', 'gl-onglet-lib').replace('gl-rub-lib--long', 'gl-onglet-lib--long') + encours;
    return '<li>' + (r.panneau
      ? '<button type="button" class="gl-onglet' + (estActif(r) ? ' est-actif' : '') + '" id="gl-t-' + r.cle + '" data-cle="' + r.cle + '" aria-expanded="false" aria-controls="gl-p-' + r.cle + '">' + dedans + '</button>'
      : '<a class="gl-onglet gl-onglet--lien' + (estActif(r) ? ' est-actif' : '') + '" href="' + esc(lien(r.lien)) + '"' + (estCourant(r.lien) ? ' aria-current="page"' : '') + '>' + dedans + '<span class="gl-onglet-fleche">' + ICO.fleche + '</span></a>') + '</li>';
  }).join('');
  const max = { actus: 5, skippers: 6 };
   
  const cartesPc = (r) => {
    const liste = r.cartes.slice(0, max[r.dispo] || 99);
    const g = liste.find((c) => c.groupe);
    const debut = g ? liste.indexOf(g) : -1;
    return (g ? '<p class="gl-groupe-titre" style="--debut:' + (debut + 1) + ';--nb:' + liste.filter((c) => c.groupe === g.groupe).length + '"><span>' + esc(g.groupe) + '</span></p>' : '') + liste.map((c, k) => carte(c, 'pc', k, r)).join('');
  };
  const panneaux = RUBS.filter((r) => r.panneau).map((r) => r.dispo === 'programme' ? programmeSectionPC(r) :
    '<section class="gl-contenu gl-dispo-' + r.dispo + '" id="gl-p-' + r.cle + '" role="region" aria-labelledby="gl-t-' + r.cle + '" data-cle="' + r.cle + '" hidden>' +
      '<div class="gl-contenu-tete"><div><p class="gl-kicker">' + esc(r.titre) + datesMentionHTML(r) + '</p>' + (r.sous ? '<p class="gl-lead">' + esc(r.sous) + '</p>' : '') + (r.note ? '<p class="gl-note">' + esc(r.note) + '</p>' : '') + '</div>' +
        '<div class="gl-actions">' + voirImagesHTML() + faqHTML(r) + (r.tout ? '<a class="gl-tout" href="' + esc(lien(r.tout.lien)) + '"' + cible(r.tout.lien) + '><span>' + esc(r.tout.libelle) + '</span>' + ICO.bouton + '</a>' : '') + '</div></div>' +
      puces(r) +
      '<div class="gl-cartes' + (r.cartes.some((c) => c.groupe) ? ' gl-cartes--groupe' : '') + '">' + cartesPc(r) + '</div>' +
    '</section>').join('');
  const hote = portail.querySelector('.gl-large-hote');
  hote.innerHTML =
    '<div class="gl-large" id="gl-large" role="region" aria-label="' + esc(T.principal) + '">' +
      '<div class="gl-large-vague" aria-hidden="true"></div>' +
      '<div class="gl-grain" aria-hidden="true"></div>' +
      '<img class="gl-damier" src="' + esc(R.decor) + '" alt="" aria-hidden="true" decoding="async">' +
      '<div class="gl-large-grille">' +
        '<div class="gl-sommaire">' +
          '<ul class="gl-onglets" aria-label="' + esc(T.principal) + '">' + onglets + '</ul>' +
          '<div class="gl-sommaire-pied" role="timer" aria-label="' + esc(T.compte) + '">' + montreHTML() + '<span class="gl-sp-txt"><span>' + esc(TXT.depart) + '</span>' + compteHTML() + '</span>' + alpinaHTML() + '</div>' +
        '</div>' +
        '<div class="gl-scene"><span class="gl-chiffre" aria-hidden="true"></span>' + panneaux + '</div>' +
      '</div>' +
    '</div>';
  large = hote.firstElementChild;
  chargerImages(large.querySelector('.gl-sommaire-pied'));
  chargerProgramme();
  large.addEventListener('pointerenter', () => clearTimeout(tFermer));
  large.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') planifierFermeture(); });
  large.querySelectorAll('button.gl-onglet').forEach((t) => {
    t.addEventListener('pointerenter', (e) => { if (e.pointerType === 'touch') return; clearTimeout(tOnglet); tOnglet = setTimeout(() => choisirOnglet(t.dataset.cle), 70); });
    t.addEventListener('pointerleave', () => clearTimeout(tOnglet));
    t.addEventListener('click', () => choisirOnglet(t.dataset.cle));
  });
  large.querySelector('.gl-onglets').addEventListener('keydown', (e) => {
    const liste = [...large.querySelectorAll('.gl-onglet')];
    const i = liste.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') j = (i + 1) % liste.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') j = (i - 1 + liste.length) % liste.length;
    else if (e.key === 'Home') j = 0;
    else if (e.key === 'End') j = liste.length - 1;
    if (j === null) return;
    e.preventDefault();
    liste[j].focus();
    if (liste[j].dataset.cle) choisirOnglet(liste[j].dataset.cle);
  });
  large.querySelectorAll('.gl-voir-img').forEach((b) => b.addEventListener('click', () => chargerBD(b.closest('.gl-contenu'))));
  tic();
}
function ouvrirLarge(cle, clavier, source) {
  if (format() !== 'pc') return;
  const rub = RUBS.find((x) => x.cle === cle);
  if (!rub || !rub.panneau) return;
  construireLarge();
  clearTimeout(tFermer); clearTimeout(tOuvrir);
  etat.large = cle;
  etat.source = source === 'compacte' ? 'compacte' : 'entete';
   
  large.classList.toggle('gl-large--fixe', etat.source === 'compacte');
  racine.classList.add('gl-large-ouvert');
  portail.classList.add('gl-large-ouvert');
  placerLarge();
  choisirOnglet(cle);
  if (clavier) { const t = large.querySelector('#gl-t-' + cle); if (t) t.focus(); }
}
function fermerLarge(rendreFocus) {
  clearTimeout(tFermer); clearTimeout(tOuvrir); clearTimeout(tOnglet);
  if (!etat.large) return;
  const cle = etat.large;
  etat.large = null;
  racine.classList.remove('gl-large-ouvert');
  portail.classList.remove('gl-large-ouvert');
  majEntrees();
  if (rendreFocus) {
    const barre = etat.source === 'compacte' && compacte ? compacte : racine.querySelector('.gl-barre');
    const b = barre.querySelector('.gl-entree[data-cle="' + cle + '"] [data-ouvre]');
    if (b) b.focus();
  }
}

function placerLarge() {
  const barre = racine.querySelector('.gl-barre');
  const bas = etat.source === 'compacte' ? COMPACTE_H : Math.max(0, barre ? barre.getBoundingClientRect().bottom : 125);
  portail.style.setProperty('--gl-large-top', Math.round(bas) + 'px');
}
function choisirOnglet(cle) {
  if (!large) return;
  const avant = large.dataset.cle;
  large.dataset.cle = cle;
  if (etat.large) etat.large = cle;
  large.querySelectorAll('button.gl-onglet').forEach((t) => t.setAttribute('aria-expanded', String(t.dataset.cle === cle)));
  large.querySelectorAll('.gl-contenu').forEach((p) => {
    const oui = p.dataset.cle === cle;
    if (oui && p.hidden) { p.hidden = false; rejouer(p, 'est-entree'); } else if (!oui) p.hidden = true;
  });
  if (avant !== cle) {
    const r = RUBS.find((x) => x.cle === cle);
    const ch = large.querySelector('.gl-chiffre');
    ch.textContent = r ? r.num : '';
    rejouer(ch, 'est-entree');
  }
  chargerImages(large.querySelector('#gl-p-' + cle));
  majEntrees();
}
function majEntrees() {
  tous('.gl-entree').forEach((li) => {
    const oui = li.dataset.cle === etat.large && !!li.closest(etat.source === 'compacte' ? '.gl-compacte' : '.gl-barre');
    li.classList.toggle('est-ouvert', oui);
    li.querySelectorAll('[data-ouvre]').forEach((b) => b.setAttribute('aria-expanded', String(oui)));
  });
}

const CONTENU = ['actus', 'skippers', 'programme'];
 
function ligneHTML(c, r) {
  const ok = c.lien && !c.bientot;
  const tag = ok ? 'a' : 'div';
  const attrs = ok ? ' href="' + esc(lien(c.lien)) + '"' + cible(c.lien) : ' aria-disabled="true"';
  const vign = c.image
    ? '<img class="gl-photo" alt="" loading="lazy" decoding="async" width="56" height="56" data-src="' + wix(c.image, 56, 56, 75) + '" data-srcset="' + wix(c.image, 56, 56, 75) + ' 1x, ' + wix(c.image, 112, 112, 70) + ' 2x" data-bd="' + wix(c.image, 28, 28, 30) + '">'
    : '';
  const sous = c.sous;
  return '<li><' + tag + ' class="gl-ligne' + (c.bientot ? ' gl-ligne--bientot' : '') + (c.image ? '' : ' sans-image') + '"' + attrs + '>' +
    '<span class="gl-ligne-vign">' + tuileHTML(c, r) + vign + '</span>' +
    '<span class="gl-ligne-txt"><span class="gl-ligne-titre">' + esc(c.titre) + '</span>' + (sous ? '<span class="gl-ligne-sous">' + esc(sous) + '</span>' : '') + '</span>' +
    (c.bientot ? '<span class="gl-ligne-bientot">' + esc(TXT.bientot) + '</span>' : '<span class="gl-ligne-go">' + (externe(c.lien) ? ICO.externe : ICO.fleche) + '</span>') +
    (ok ? nouvelOnglet(c.lien) : '') + '</' + tag + '></li>';
}
function lignesHTML(r) {
  let groupe = '', h = '';
  r.cartes.forEach((c) => {
    if (c.groupe && c.groupe !== groupe) h += '<li class="gl-lignes-groupe" role="presentation">' + esc(c.groupe) + '</li>';
    groupe = c.groupe || '';
    h += ligneHTML(c, r);
  });
  return '<ul class="gl-lignes">' + h + '</ul>';
}
function regionHTML(r) {
  const contenu = CONTENU.includes(r.dispo);
  const corps = r.dispo === 'programme'
    ? '<div class="gl-prog-tel" data-prog="tel"><p class="gl-prog-attente">' + esc(TXT.chargement) + '</p>' + squeletteTel() + '</div>'
    : contenu
      ? '<div class="gl-rail">' + r.cartes.map((c, k) => carte(c, 'rail', k, r)).join('') + '</div><div class="gl-jauge" aria-hidden="true"><i></i></div>'
      : lignesHTML(r);
  return '<div class="gl-region gl-region--' + (contenu ? 'contenu' : 'liste') + '" id="gl-r-' + r.cle + '" role="region" aria-labelledby="gl-b-' + r.cle + '" data-cle="' + r.cle + '" hidden>' +
    '<div class="gl-region-tete"><div><p class="gl-kicker">' + esc(r.titre) + '</p>' + (r.sous ? '<p class="gl-lead">' + esc(r.sous) + '</p>' : '') + (r.dispo === 'programme' ? '<p class="gl-lead" data-prog="etat"></p>' : '') + datesHTML(r) + '</div>' +
      '<div class="gl-region-actions">' + faqHTML(r) + (r.tout ? '<a class="gl-tout-lien" href="' + esc(lien(r.tout.lien)) + '"' + cible(r.tout.lien) + '><span>' + esc(TXT.toutVoir) + '</span>' + ICO.fleche + '</a>' : '') + voirImagesHTML() + '</div></div>' +
    corps +
    (r.note ? '<p class="gl-note">' + esc(r.note) + '</p>' : '') +
  '</div>';
}
 
function recherchePleinHTML() {
  return '<div class="gl-p-recherche" role="search">' +
    '<div class="gl-champ">' + ICO.loupe +
      '<input type="text" id="gl-p-q" role="combobox" aria-expanded="false" aria-controls="gl-p-res" aria-autocomplete="list" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" placeholder="' + esc(TXT.placeholder) + '" aria-label="' + esc(TXT.chercher) + '">' +
      '<button type="button" class="gl-effacer" aria-label="' + esc(TXT.effacer) + '" hidden>' + ICO.fermer + '</button>' +
    '</div>' +
    '<button type="button" class="gl-annuler">' + esc(TXT.annuler) + '</button>' +
    '<p class="gl-indice" aria-live="polite"></p>' +
    '<nav class="gl-acces" aria-label="' + esc(TXT.acces) + '">' + ACCES.map((a) => a.cle === 'programme' ? billetProgrammeHTML(a) : '<a class="gl-acces-lien gl-acces-lien--' + a.cle + '" href="' + esc(lien(a.lien)) + '"' + (estCourant(a.lien) ? ' aria-current="page"' : '') + '>' + ICO[a.cle] + '<span>' + esc(TXT[a.cle]) + '</span></a>').join('') + '</nav>' +
  '</div>' +
  '<div class="gl-p-res gl-res-liste" id="gl-p-res" role="listbox" aria-label="' + esc(TXT.resultats) + '"></div>';
}
function finPleinHTML() {
  const b0 = (R.boutique || [])[0], b1 = (R.boutique || [])[1];
  const service = (libelle, u, ico) => '<a class="gl-service" href="' + esc(lien(u)) + '"' + cible(u) + '><span class="gl-service-ico">' + ico + '</span><span>' + esc(libelle) + '</span>' + (externe(u) ? ICO.externe : ICO.fleche) + nouvelOnglet(u) + '</a>';
  const hl = R.liensHaut || [];
  const services = (hl[0] ? service(hl[0].libelle, hl[0].lien, b0 ? '<img src="' + esc(b0.image) + '" alt="' + esc(b0.alt) + '" loading="lazy" decoding="async">' : ICO.quai) : '') +
     
    (hl[1] ? service(hl[1].libelle, hl[1].lien, hl[1].logo ? '<img src="' + esc(hl[1].logo) + '" alt="" loading="lazy" decoding="async">' : ICO.verre) : '') +
    (b1 ? service(b1.libelleTiroir || b1.libelle, b1.lienTiroir || b1.lien, '<img src="' + esc(b1.image) + '" alt="' + esc(b1.alt) + '" loading="lazy" decoding="async">') : '');
  const reseaux = (R.reseaux || []).map((s) => '<li><a href="' + esc(s.lien) + '" target="_blank" rel="noopener" aria-label="' + esc(s.nom) + '"><img src="' + esc(s.icone) + '" alt="" width="20" height="20" loading="lazy" decoding="async"></a></li>').join('');
  const partenaires = (R.partenaires || []).map((p) => '<a href="' + esc(lien(p.lien)) + '"><img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" loading="lazy" decoding="async"></a>').join('');
  return '<div class="gl-fin">' +
    '<div class="gl-services-p">' + services + '</div>' +
    languesHTML('gl-langues--fin') +
    '<ul class="gl-reseaux-p" aria-label="' + esc(T.reseaux) + '">' + reseaux + '</ul>' +
    '<div class="gl-partenaires-bloc"><div class="gl-partenaires-p" aria-label="' + esc(TXT.partenaires) + '">' + partenaires + '</div><a class="gl-tymal-p" href="' + esc(lien(R.tymal.lien)) + '"><img alt="' + esc(R.tymal.alt) + '" width="78" height="78" decoding="async" data-src="' + esc(R.tymal.src) + '"></a></div>' +
  '</div>';
}
function construirePlein() {
  if (plein) return;
  plein = document.createElement('div');
  plein.className = 'gl-plein';
  plein.id = 'gl-plein';
  plein.setAttribute('role', 'dialog');
  plein.setAttribute('aria-modal', 'true');
  plein.setAttribute('aria-label', T.menu || 'Menu');
  const lignes = RUBS.map((r, i) => !r.panneau
     
    ? '<div class="gl-rub gl-rub--directe' + (estActif(r) ? ' est-actif' : '') + '" data-cle="' + r.cle + '" style="--i:' + i + '">' +
        '<h2 class="gl-rub-h"><a class="gl-rub-btn gl-rub-lien" href="' + esc(lien(r.lien)) + '"' + (estCourant(r.lien) ? ' aria-current="page"' : '') + '>' +
          rubLibHTML(r.libelle) + (estActif(r) ? '<span class="gl-vh">, ' + esc(TXT.enCours) + '</span>' : '') +
          '<span class="gl-rub-num" aria-hidden="true"><span>' + r.num + '</span>' + ICO.fleche + '</span>' +
        '</a></h2></div>'
    : '<div class="gl-rub' + (estActif(r) ? ' est-actif' : '') + '" data-cle="' + r.cle + '" style="--i:' + i + '">' +
      '<h2 class="gl-rub-h"><button type="button" class="gl-rub-btn" id="gl-b-' + r.cle + '" aria-expanded="false" aria-controls="gl-r-' + r.cle + '">' +
        rubLibHTML(r.libelle) + (estActif(r) ? '<span class="gl-vh">, ' + esc(TXT.enCours) + '</span>' : '') +
        '<span class="gl-rub-num" aria-hidden="true"><span>' + r.num + '</span>' + ICO.chevron + '</span>' +
      '</button></h2>' +
      regionHTML(r) +
    '</div>').join('');
  plein.innerHTML =
    '<div class="gl-mer" aria-hidden="true">' +
      '<img class="gl-damier" src="' + esc(R.decor) + '" alt="" decoding="async">' +
      '<div class="gl-houle"><div class="gl-vague gl-v2"></div><div class="gl-vague gl-v1"></div><div class="gl-vague gl-v3"></div></div>' +
      '<div class="gl-grain"></div>' +
    '</div>' +
    '<div class="gl-defil">' +
      

      '<div class="gl-p-tete"><a class="gl-c-logo gl-p-logo" href="' + esc(lien(R.logo.lien || '/')) + '"><img src="' + esc(R.logo.src) + '" alt="' + esc(R.logo.alt) + '" width="40" height="40" decoding="async"></a>' +
        compteCourtHTML() + duoHTML('fermer') + '</div>' +
      recherchePleinHTML() +
      '<div class="gl-p-corps">' +
        '<div class="gl-gauche"><nav class="gl-liste" aria-label="' + esc(T.principal) + '">' + lignes + '</nav>' + finPleinHTML() + '</div>' +
        '<div class="gl-scene-t"><span class="gl-chiffre" aria-hidden="true"></span></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(plein);
  chargerImages(plein.querySelector('.gl-p-tete'));
  chargerProgramme();

  plein.querySelector('.gl-fermer').addEventListener('click', () => fermerPlein(true));
  plein.querySelectorAll('button.gl-rub-btn').forEach((b) => b.addEventListener('click', () => {
    const cle = b.closest('.gl-rub').dataset.cle;
    if (format() === 'tab') choisirTab(cle); else basculerRub(cle);
  }));
  plein.querySelectorAll('.gl-rail').forEach((rail) => {
    let enAttente = false;
    rail.addEventListener('scroll', () => { if (enAttente) return; enAttente = true; requestAnimationFrame(() => { enAttente = false; majJauge(rail); }); }, { passive: true });
  });
  plein.querySelectorAll('.gl-voir-img').forEach((b) => b.addEventListener('click', () => chargerBD(b.closest('.gl-region'))));
   
  const champ = plein.querySelector('#gl-p-q');
  const brancherChamp = () => chargerRecherche().then((rc) => {
    if (champ._branche) return;
    champ._branche = true;
    rc.brancher(champ, plein.querySelector('#gl-p-res'), {
      indice: plein.querySelector('.gl-indice'),
      effacer: plein.querySelector('.gl-effacer')
    });
    champ.dispatchEvent(new Event('input'));
  });
  

  const enRecherche = (oui) => {
    plein.classList.toggle('en-recherche', oui);
    champ.placeholder = oui && format() === 'tel' ? TXT.placeholderCourt : TXT.placeholder;
    champ.setAttribute('aria-expanded', String(oui));
    if (oui) plein.querySelector('.gl-defil').scrollTop = 0;
  };
  champ.addEventListener('focus', () => { enRecherche(true); brancherChamp(); });
  champ.addEventListener('input', () => { enRecherche(true); if (!champ._branche) brancherChamp(); });
  plein.querySelector('.gl-annuler').addEventListener('click', () => {
    if (moduleRecherche) moduleRecherche.vider(champ); else champ.value = '';
    enRecherche(false);
    champ.blur();
  });
  placerRegions();
  tic();
}
 
function placerRegions() {
  if (!plein) return;
  const scene = plein.querySelector('.gl-scene-t');
  const tab = format() === 'tab';
  plein.querySelectorAll('.gl-region').forEach((reg) => {
    const hote = tab ? scene : plein.querySelector('.gl-rub[data-cle="' + reg.dataset.cle + '"]');
    if (reg.parentNode !== hote) hote.appendChild(reg);
  });
}
function majJauge(rail) {
  const reg = rail.closest('.gl-region');
  const j = reg && reg.querySelector('.gl-jauge i');
  if (!j) return;
  const sw = rail.scrollWidth, cw = rail.clientWidth;
  const f = sw > 0 ? Math.min(1, cw / sw) : 1;
  const ratio = sw - cw > 0 ? rail.scrollLeft / (sw - cw) : 0;
  const l = (f * 100).toFixed(2) + '%';
  if (j.style.width !== l) j.style.width = l;
  j.style.transform = 'translateX(' + (ratio * (1 - f) / f * 100).toFixed(2) + '%)';
}

let retourFocus = null, tEntree = null, tFlip = null;
function ouvrirPlein(cle, focusRecherche) {
  if (format() === 'pc') return;
  construirePlein();
  if (etat.plein) { if (focusRecherche) plein.querySelector('#gl-p-q').focus(); return; }
  etat.plein = true;
  retourFocus = document.activeElement;
   
  etat.rub = null;
  plein.querySelector('.gl-liste').classList.remove('a-un-large');
  plein.querySelectorAll('.gl-rub').forEach((row) => { row.classList.remove('est-large'); const b = row.querySelector('button.gl-rub-btn'); if (b) b.setAttribute('aria-expanded', 'false'); });
  plein.querySelectorAll('.gl-region').forEach((reg) => { reg.hidden = true; });
  plein.querySelector('.gl-defil').scrollTop = 0;
  document.documentElement.classList.add('gl-bloque');
  plein.classList.add('est-ouvert');
  rejouer(plein, 'est-entree');
  clearTimeout(tEntree);
  tEntree = setTimeout(() => plein && plein.classList.remove('est-entree'), 1400);
  racine.querySelectorAll('.gl-menu, .gl-c-menu').forEach((b) => b.setAttribute('aria-expanded', 'true'));
   
  if (tel && format() === 'tel') tel.menuOuvert(true);
  if (format() === 'tab') choisirTab(clePanneau(cle || etat.tab || cleActive()));
  else if (cle) basculerRub(cle, true);
  chargerImages(plein.querySelector('.gl-fin'));
  requestAnimationFrame(() => {
    const f = !focusRecherche && tel && format() === 'tel' ? tel.bouton : plein.querySelector(focusRecherche ? '#gl-p-q' : '.gl-fermer');
    if (f) f.focus({ preventScroll: true });
  });
}
function fermerPlein(rendreFocus) {
  if (!etat.plein) return;
  etat.plein = false;
  plein.classList.remove('est-ouvert', 'est-entree');
  document.documentElement.classList.remove('gl-bloque');
  racine.querySelectorAll('.gl-menu, .gl-c-menu').forEach((b) => b.setAttribute('aria-expanded', 'false'));
  if (tel) tel.menuOuvert(false);
  yAvant = window.scrollY || 0;
  if (rendreFocus) {
    const repli = tel && format() === 'tel' ? tel.bouton : etat.compacte && compacte ? compacte.querySelector('.gl-c-menu') : racine.querySelector('.gl-barre .gl-menu');
    (retourFocus && document.contains(retourFocus) && retourFocus !== document.body && retourFocus.getClientRects().length ? retourFocus : repli).focus();
  }
}
function montrerRegion(reg) {
  const neuf = reg.hidden;
  reg.hidden = false;
  if (neuf) rejouer(reg, 'est-entree');
  chargerImages(reg);
  const rail = reg.querySelector('.gl-rail');
  if (rail) { rail.scrollLeft = 0; majJauge(rail); }
}
 
function choisirTab(cle) {
  etat.tab = cle;
  plein.querySelector('.gl-liste').classList.add('a-un-large');
  plein.querySelectorAll('.gl-rub').forEach((row) => { const oui = row.dataset.cle === cle; row.classList.toggle('est-large', oui); const b = row.querySelector('button.gl-rub-btn'); if (b) b.setAttribute('aria-expanded', String(oui)); });
  plein.querySelectorAll('.gl-region').forEach((reg) => { if (reg.dataset.cle === cle) montrerRegion(reg); else reg.hidden = true; });
  const scene = plein.querySelector('.gl-scene-t');
  scene.scrollTop = 0;
  const ch = scene.querySelector('.gl-chiffre');
  const r = RUBS.find((x) => x.cle === cle);
  if (ch && r && ch.textContent !== r.num) { ch.textContent = r.num; rejouer(ch, 'est-entree'); }
}

function basculerRub(cle, sansFlip) {
  const nouveau = etat.rub === cle ? null : cle;
  const corps = plein.querySelector('.gl-p-corps');
  const liste = plein.querySelector('.gl-liste');
  const lignes = [...liste.querySelectorAll('.gl-rub')];
  const libs = lignes.map((l) => l.querySelector('.gl-rub-lib'));
  const fin = plein.querySelector('.gl-fin');
  const anime = !sansFlip && !reduit();
  const mesure = () => ({ lignes: lignes.map((l) => l.getBoundingClientRect()), libs: libs.map((l) => l.getBoundingClientRect()), fin: fin.getBoundingClientRect() });
  let avant = null;
  if (anime) {
    corps.classList.remove('gl-flip');
    lignes.concat(libs, [fin]).forEach((el) => { el.style.transform = ''; });
    avant = mesure();
  }
  etat.rub = nouveau;
  liste.classList.toggle('a-un-large', !!nouveau);
  lignes.forEach((l) => {
    const oui = l.dataset.cle === nouveau;
    l.classList.toggle('est-large', oui);
    const b = l.querySelector('button.gl-rub-btn'); if (b) b.setAttribute('aria-expanded', String(oui));
    const reg = l.querySelector('.gl-region');
    if (!reg) return;
    if (oui) montrerRegion(reg); else reg.hidden = true;
  });
  const defil = plein.querySelector('.gl-defil');
  let decalage = 0;
  if (nouveau) {
     
    const ligne = liste.querySelector('.gl-rub.est-large');
    const b = ligne.getBoundingClientRect();
     
    const haut = (format() === 'tel' ? 76 : plein.querySelector('.gl-p-tete').getBoundingClientRect().height) + 4;
    const bas = defil.clientHeight;
    if (b.top < haut || b.bottom > bas) decalage = b.top - haut;
  }
  if (anime) {
    const apres = mesure();
    lignes.forEach((l, i) => {
      const dy = avant.lignes[i].top - apres.lignes[i].top;
      l.style.transform = dy ? 'translateY(' + dy + 'px)' : '';
      const a = avant.libs[i], b = apres.libs[i];
      const s = b.height ? a.height / b.height : 1;
      const lx = a.left - b.left, ly = (a.top - b.top) - dy;
      libs[i].style.transform = (Math.abs(s - 1) > 0.001 || lx || ly) ? 'translate(' + lx + 'px,' + ly + 'px) scale(' + s + ')' : '';
    });
    const df = avant.fin.top - apres.fin.top;
    fin.style.transform = df ? 'translateY(' + df + 'px)' : '';
    void corps.offsetWidth;
    corps.classList.add('gl-flip');
    lignes.concat(libs, [fin]).forEach((el) => { el.style.transform = ''; });
    clearTimeout(tFlip);
    tFlip = setTimeout(() => corps.classList.remove('gl-flip'), 560);
  }
  if (decalage) defil.scrollBy({ top: decalage, behavior: anime ? 'smooth' : 'auto' });
}

function piege(e, boite, avant) {
  const f = (avant || []).concat([...boite.querySelectorAll('a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])')].filter((x) => x.getClientRects().length && !x.closest('[hidden]') && getComputedStyle(x).visibility !== 'hidden'));
  if (!f.length) return;
  const premier = f[0], dernier = f[f.length - 1];
  if (!f.includes(document.activeElement)) { e.preventDefault(); premier.focus(); }
  else if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
  else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
}

let promProg = null, resumeProg = null;
function chargerProgramme() {
  if (!promProg) {
    promProg = ctx.programme().then((jeu) => {
      resumeProg = resumer(jeu, maintenantParis(q.get('aujourdhui')));
      remplirProgramme();
      return resumeProg;
    }).catch(() => {
      

      promProg = null;
      document.querySelectorAll('.gl-prog-attente').forEach((el) => { el.textContent = TXT.progIndispo; });
      

      document.querySelectorAll('.gl-sq-prog').forEach((el) => el.remove());
      document.querySelectorAll('[data-prog="etat"]').forEach((el) => { el.textContent = TXT.progIndispo; });
      return null;
    });
  }
  return promProg;
}

const sqBloc = (cls, st) => '<span class="gl-sq ' + cls + '"' + (st ? ' style="' + st + '"' : '') + '></span>';
const sqEtiquettes = (n) => '<div class="gl-sq-themes">' + [96, 110, 100, 92, 88, 104, 108].slice(0, n).map((w) => sqBloc('gl-sq-pill', 'width:' + w + 'px')).join('') + '</div>';
function squelettePC() {
  return '<div class="gl-sq-prog" aria-hidden="true">' + sqEtiquettes(7) +
    '<div class="gl-prog">' +
      '<div class="gl-prog-jour">' + (etat.leger ? '' : sqBloc('gl-sq-img')) + sqBloc('gl-sq-ligne', 'width:62%') + sqBloc('gl-sq-ligne gl-sq-ligne--fine', 'width:36%;margin-bottom:14px') +
        [0, 1, 2].map(() => '<div class="gl-sq-item">' + sqBloc('gl-sq-heure') + '<div>' + sqBloc('gl-sq-ligne', 'width:86%') + sqBloc('gl-sq-ligne gl-sq-ligne--fine', 'width:50%') + '</div></div>').join('') +
      '</div>' +
      '<div class="gl-prog-avenir">' + sqBloc('gl-sq-ligne gl-sq-ligne--fine', 'width:84px;margin-bottom:10px') + '<div class="gl-prog-cartes">' + sqBloc('gl-sq-carte') + sqBloc('gl-sq-carte') + '</div></div>' +
      '<div class="gl-prog-journees">' + sqBloc('gl-sq-ligne gl-sq-ligne--fine', 'width:150px;margin-bottom:8px') + '<ul>' + [0, 1, 2].map(() => '<li>' + sqBloc('gl-sq-journee') + '</li>').join('') + '</ul></div>' +
    '</div></div>';
}
function squeletteTel() {
  return '<div class="gl-sq-prog" aria-hidden="true">' + sqEtiquettes(4) + '<div class="gl-rail">' + [0, 1, 2].map(() => sqBloc('gl-sq-carte gl-sq-carte--rail')).join('') + '</div></div>';
}
const dateUTC = (j) => new Date(Date.UTC(+j.slice(0, 4), +j.slice(5, 7) - 1, +j.slice(8, 10), 12));
 
const premierDuMois = (t) => (LANG === 'fr' ? t.replace(/(^|\s)1 (?=[a-zéû])/, '$1' + '1er ') : t);
const jourLong = (j) => premierDuMois(dateUTC(j).toLocaleDateString(TXT.locale, { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }));
const jourCourt = (j) => dateUTC(j).toLocaleDateString(TXT.locale, { day: 'numeric', month: 'short', timeZone: 'UTC' });
const jourMois = (j) => ({ jour: dateUTC(j).getUTCDate(), mois: dateUTC(j).toLocaleDateString(TXT.locale, { month: 'short', timeZone: 'UTC' }).replace('.', '') });
const heureLib = (h) => (h ? h.replace(':', ' h ').replace(/ h 00$/, ' h') : '');
const lienJour = (j) => '/programmation?jour=' + j;
const libTheme = (t) => (TXT.themes && TXT.themes[t.slug]) || t.lib;
 
const themesTries = (th) => th.slice().sort((a, b) => (a.slug === 'animation') - (b.slug === 'animation') || b.n - a.n);
function etatProgramme(p) {
  if (p.etat === 'avant') return TXT.ouvreDans(p.joursAvant, jourLong(p.ouverture));
  if (p.etat === 'apres') return TXT.ferme(jourLong(p.fermeture));
  return TXT.ouvert(jourLong(p.fermeture));
}
function titreTemps(p) {
  if (p.etat === 'avant') return TXT.tempsFortsPremier;
  return p.temps.mode === 'suite' ? TXT.suite : p.temps.mode === 'encours' ? TXT.enCeMoment : TXT.tempsForts;
}
const imgProg = (u, w, h) => {
  const id = idMedia(u);
  return id ? '<img class="gl-photo" alt="" loading="lazy" decoding="async" width="' + w + '" height="' + h + '" src="' + wix(id, w, h, 78) + '" srcset="' + wix(id, w, h, 78) + ' 1x, ' + wix(id, w * 2, h * 2, 68) + ' 2x">' : '';
};
function themesHTML(p, cls) {
  return '<ul class="gl-themes ' + (cls || '') + '" aria-label="' + esc(TXT.parTheme) + '">' + themesTries(p.themes).map((t) =>
    '<li data-slug="' + esc(t.slug) + '"><a href="' + esc(lien('/programmation?cat=' + t.slug)) + '"><span class="gl-theme-ico">' + (ICO['th_' + t.slug] || ICO.programme) + '</span><span>' + esc(libTheme(t)) + '</span><b>' + t.n + '</b></a></li>').join('') + '</ul>';
}
function itemJourHTML(a) {
  return '<li><a class="gl-pj-item' + (a.vedette ? ' gl-pj-item--vedette' : '') + '" href="' + esc(lien(lienJour(a.date))) + '"><span class="gl-pj-heure">' + esc(heureLib(a.debut) || '·') + '</span>' +
    '<span class="gl-pj-txt"><span class="gl-pj-titre">' + esc(a.titre) + '</span><span class="gl-pj-meta">' + esc([a.lieux.join(' · '), libTheme({ slug: a.cat, lib: a.catLib })].filter(Boolean).join(' · ')) + (a.gratuit ? ' · <b>' + esc(TXT.gratuit) + '</b>' : '') + '</span></span></a></li>';
}

const EGALISEUR = [8, 14, 22, 17, 29, 24, 36, 30, 41, 33, 38, 26, 32, 21, 27, 18, 22, 14, 17, 10];
const TEMPOS_EGAL = [730, 910, 640, 1090, 830, 1210, 690, 970, 770, 1150, 610, 880];
const tuileMusique = () => '<span class="gl-tuile gl-tuile--musique" aria-hidden="true"><span class="gl-egal">' +
  EGALISEUR.map((hh, i) => '<i style="--h:' + hh + ';--d:' + TEMPOS_EGAL[i % TEMPOS_EGAL.length] + 'ms"></i>').join('') + '</span></span>';
function carteAVenirHTML(a, w, h, k) {
  const leger = etat.leger || !a.photo;
  const jm = jourMois(a.date);
  const musique = a.cat === 'concert' || a.cat === 'soiree';
  return '<a class="gl-carte gl-carte--prog' + (leger ? ' sans-image' : '') + '" style="--k:' + (k || 0) + '" href="' + esc(lien(lienJour(a.date))) + '">' +
    (musique ? tuileMusique() : '<span class="gl-tuile gl-tuile--picto" style="--t1:#2d5f86;--t2:#0E111D" aria-hidden="true">' + (ICO['th_' + a.cat] || ICO.programme) + '</span>') +
    (leger ? '' : imgProg(a.photo, w, h)) +
    '<span class="gl-prog-date"><b>' + jm.jour + '</b><small>' + esc(jm.mois) + '</small></span>' +
    '<span class="gl-carte-txt"><span class="gl-meta">' + esc([heureLib(a.debut), libTheme({ slug: a.cat, lib: a.catLib })].filter(Boolean).join(' · ')) + '</span><span class="gl-carte-titre">' + esc(a.titre) + '</span></span></a>';
}
function journeeHTML(j) {
  const jm = jourMois(j.date);
  return '<li><a class="gl-journee" href="' + esc(lien(lienJour(j.date))) + '"' + (j.couleur ? ' style="--jc:' + esc(j.couleur) + '"' : '') + '><span class="gl-prog-date"><b>' + jm.jour + '</b><small>' + esc(jm.mois) + '</small></span>' +
    '<span class="gl-journee-txt"><span class="gl-journee-titre">' + esc(j.titre) + '</span>' + (j.partenaire ? '<span class="gl-journee-part">' + esc(TXT.avec) + ' ' + esc(j.partenaire) + '</span>' : '') + '</span></a></li>';
}
 
function programmeSectionPC(r) {
  return '<section class="gl-contenu gl-dispo-programme" id="gl-p-' + r.cle + '" role="region" aria-labelledby="gl-t-' + r.cle + '" data-cle="' + r.cle + '" hidden>' +
    '<div class="gl-contenu-tete"><div><p class="gl-kicker">' + esc(r.titre) + '</p><p class="gl-lead" data-prog="etat">' + esc(TXT.chargement) + '</p></div>' +
      '<div class="gl-actions"><a class="gl-tout" href="' + esc(lien(r.lien)) + '"><span>' + esc(TXT.progTout) + '</span>' + ICO.bouton + '</a></div></div>' +
    '<div data-prog="pc" class="gl-prog-pc">' + (resumeProg ? '' : squelettePC()) + '</div>' +
  '</section>';
}
function programmePC(p) {
  if (p.etat === 'apres') return themesHTML(p);
  const t = p.temps.items;
  const photo = t.find((a) => a.photo);
  const jour = p.etat === 'avant' ? p.ouverture : p.jour;
  const journeeDuJour = (resumeProg.journees || []).find((j) => j.date === jour);
  return themesHTML(p) +
    '<div class="gl-prog">' +
      '<div class="gl-prog-jour' + (photo && !etat.leger ? ' a-photo' : '') + '">' +
        (photo && !etat.leger ? '<span class="gl-prog-jour-img" aria-hidden="true">' + imgProg(photo.photo, 380, 170) + '</span>' : '') +
        '<p class="gl-prog-titre"><span>' + esc(titreTemps(p)) + '</span><span class="gl-prog-quand">' + esc(jourLong(jour)) + '</span></p>' +
        (journeeDuJour ? '<p class="gl-prog-journee-jour">' + esc(journeeDuJour.titre) + (journeeDuJour.partenaire ? ' ' + esc(TXT.avec) + ' ' + esc(journeeDuJour.partenaire) : '') + '</p>' : '') +
        '<ol class="gl-pj">' + t.slice(0, 3).map(itemJourHTML).join('') + '</ol>' +
        '<a class="gl-pj-tout" href="' + esc(lien(lienJour(jour))) + '"><span>' + esc(TXT.progJour) + '</span>' + ICO.fleche + '</a>' +
      '</div>' +
      '<div class="gl-prog-avenir"><p class="gl-prog-titre"><span>' + esc(TXT.aVenir) + '</span></p><div class="gl-prog-cartes">' + p.aVenir.slice(0, 2).map((a, k) => carteAVenirHTML(a, 300, 220, k)).join('') + '</div></div>' +
      (p.journees.length ? '<div class="gl-prog-journees"><p class="gl-prog-titre"><span>' + esc(TXT.journees) + '</span></p><ul>' + p.journees.slice(0, 3).map(journeeHTML).join('') + '</ul></div>' : '') +
    '</div>';
}
 
function programmeTel(p) {
  if (p.etat === 'apres') return themesHTML(p, 'gl-themes--rail');
  const jour = p.etat === 'avant' ? p.ouverture : p.jour;
  const carteJour = '<div class="gl-carte gl-carte--jour" style="--k:0"><p class="gl-prog-titre"><span>' + esc(titreTemps(p)) + '</span><span class="gl-prog-quand">' + esc(jourLong(jour)) + '</span></p>' +
    '<ol class="gl-pj">' + p.temps.items.slice(0, 3).map(itemJourHTML).join('') + '</ol>' +
    '<a class="gl-pj-tout" href="' + esc(lien(lienJour(jour))) + '"><span>' + esc(TXT.progJour) + '</span>' + ICO.fleche + '</a></div>';
  const journees = p.journees.slice(0, 3).map((j, k) => '<a class="gl-carte gl-carte--journee' + (etat.leger || !j.image ? ' sans-image' : '') + '" style="--k:' + (k + 4) + (j.couleur ? ';--jc:' + esc(j.couleur) : '') + '" href="' + esc(lien(lienJour(j.date))) + '">' +
    '<span class="gl-tuile gl-tuile--picto" style="--t1:#0c7a6a;--t2:#0E111D" aria-hidden="true">' + ICO.calendrier + '</span>' + (etat.leger ? '' : imgProg(j.image, 248, 300)) +
    '<span class="gl-prog-date"><b>' + jourMois(j.date).jour + '</b><small>' + esc(jourMois(j.date).mois) + '</small></span>' +
    '<span class="gl-carte-txt"><span class="gl-carte-groupe">' + esc(TXT.journees) + '</span><span class="gl-carte-titre">' + esc(j.titre) + '</span>' + (j.partenaire ? '<span class="gl-carte-sous">' + esc(TXT.avec) + ' ' + esc(j.partenaire) + '</span>' : '') + '</span></a>').join('');
  return themesHTML(p, 'gl-themes--rail') +
    '<div class="gl-rail">' + carteJour + p.aVenir.slice(0, 3).map((a, k) => carteAVenirHTML(a, 248, 300, k + 1)).join('') + journees + '</div>' +
    '<div class="gl-jauge" aria-hidden="true"><i></i></div>';
}
function remplirProgramme() {
  const p = resumeProg;
  if (!p) return;
  document.querySelectorAll('[data-prog="etat"]').forEach((el) => { el.textContent = etatProgramme(p); });
  document.querySelectorAll('[data-prog="pc"]').forEach((el) => { el.innerHTML = programmePC(p); });
  document.querySelectorAll('[data-prog="tel"]').forEach((el) => {
    el.innerHTML = programmeTel(p);
    const rail = el.querySelector('.gl-rail');
    if (rail) rail.addEventListener('scroll', () => requestAnimationFrame(() => majJauge(rail)), { passive: true });
  });
}
 
function pagesProgramme() {
  const p = resumeProg;
  if (!p) return [];
  return themesTries(p.themes).map((t) => ({ type: 'page', titre: libTheme(t), lien: '/programmation?cat=' + t.slug, meta: TXT.progTitre + ' · ' + TXT.rdv(t.n), ico: 'th_' + t.slug, mots: 'programme ' + t.lib }))
    .concat(p.journees.map((j) => ({ type: 'page', titre: j.titre, lien: lienJour(j.date), meta: TXT.progTitre + ' · ' + jourLong(j.date) + (j.partenaire ? ' · ' + j.partenaire : ''), ico: 'calendrier', mots: 'journee programme ' + (j.partenaire || '') })));
}

let promRecherche = null, moduleRecherche = null;

function sourcesIndex() {
  if (q.get('index') === 'local') return [];
  const d = new Date();
  const v = d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + pad(d.getUTCHours());
  const gabarit = (g) => String(g || '').replace('{lang}', LANG).replace('{v}', v);
  return [gabarit(ctx.indexUrl), gabarit(ctx.indexRepli)].filter(Boolean);
}
function chargerRecherche() {
  if (!promRecherche) {
    promRecherche = chargerProgramme().catch(() => null).then(() => {
      moduleRecherche = monterRecherche({
        R, J, RUBS, LANG, TXT, ICO, CLASSES, ACCES,
        esc, lien, cible, externe, wix, idMedia, ilYa, compteHTML, alpinaHTML,
        leger: () => etat.leger,
        sources: sourcesIndex(),
        extras: () => pagesProgramme(),
        raccourcis: () => raccourcisMoment(),
        tuiles: () => tuilesRubriques(),
        flamme: FLAMME,
        cleMemoire: 'rdrRechercheV1:' + LANG,
        surRubrique: (cle) => {
          const rub = RUBS.find((x) => x.cle === cle);
          if (!rub || !rub.panneau) return;
          if (format() === 'pc') ouvrirLarge(cle, true, etat.compacte ? 'compacte' : 'entete');
          else if (plein) {
            const champ = plein.querySelector('#gl-p-q');
            if (champ && moduleRecherche) moduleRecherche.vider(champ);
            plein.classList.remove('en-recherche');
            if (format() === 'tab') choisirTab(cle); else if (etat.rub !== cle) basculerRub(cle);
          }
        },
        bloquer: (oui) => document.documentElement.classList.toggle('gl-bloque', oui || etat.plein),
        surStats: () => {}
      });
      return moduleRecherche;
    });
  }
  return promRecherche;
}
 
function raccourcisMoment() {
  const l = [];
  const p = resumeProg;
  if (p && p.etat === 'avant') l.push({ titre: TXT.ouvreDansCourt(p.joursAvant), lien: '/programmation', meta: TXT.progTitre + ' · ' + jourLong(p.ouverture), ico: 'calendrier' });
  else if (p && p.etat === 'pendant') {
    const n = p.temps.mode === 'vedettes' ? p.temps.items.filter((a) => a.vedette).length : 0;
    l.push({ titre: n ? TXT.aujourdhuiVillage(n) : TXT.aujourdhuiProgramme, lien: lienJour(p.jour), meta: TXT.progDuJour, ico: 'calendrier' });
  }
  const village = RUBS.find((r) => r.cle === 'village');
  const page = (u) => village && village.liens.find((x) => x.lien === u);
  const carte = page('/carte-village-saint-malo'), venue = page('/se-rendre-au-village');
  if (carte) l.push({ titre: TXT.carte, lien: carte.lien, meta: village.libelle, ico: 'carte' });
  if (venue) l.push({ titre: venue.libelle, lien: venue.lien, meta: village.libelle, ico: 'itineraire' });
  if (R.espace) l.push({ titre: R.espace.libelle, lien: R.espace.lien, meta: TXT.espaceMeta, ico: 'skipper' });
  return l;
}

function tuilesRubriques() {
  const image = (cle) => {
    const r = RUBS.find((x) => x.cle === cle);
    if (!r) return null;
    if (cle === 'actualites') return r.cartes[0] && r.cartes[0].image;
    if (cle === 'skippers') return r.cartes[0] && r.cartes[0].image;
    if (cle === 'programme') { const v = resumeProg && resumeProg.temps.items.concat(resumeProg.aVenir).find((a) => a.photo); return v ? idMedia(v.photo) : null; }
    const c = r.cartes.find((x) => x.image);
    return c ? c.image : null;
  };
  const sous = (r) => {
    if (r.cle === 'programme' && resumeProg) return resumeProg.etat === 'avant' ? TXT.ouvreDansCourt(resumeProg.joursAvant) : resumeProg.etat === 'pendant' ? TXT.ouvert(jourLong(resumeProg.fermeture)).replace(/\.$/, '') : '';
    if (r.cle === 'village') return r.dates || '';
    return '';
  };
  const teintes = { actualites: '#1f6f7a', programme: '#8a5d12', skippers: '#2d5f86', village: '#006F7B', 'a-propos': '#1f6f7a', engagements: '#0c7a6a' };
  const ordre = ['programme', 'village', 'actualites', 'skippers', 'a-propos', 'engagements'];
  return ordre.map((cle) => RUBS.find((x) => x.cle === cle)).filter(Boolean).map((r) => ({
    cle: r.cle, num: r.num, titre: r.libelle, image: image(r.cle), al: r.cle === 'skippers' ? 't' : 'c', sous: sous(r), grand: r.cle === 'programme' || r.cle === 'village', t1: teintes[r.cle]
  }));
}
 
function ouvrirRecherche(texte) {
  if (format() === 'pc') { fermerLarge(); chargerRecherche().then((rc) => rc.ouvrirPalette(texte || '')); }
  else ouvrirPlein(null, true);
}
document.addEventListener('keydown', (e) => {
  const t = e.target;
  const saisie = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
  if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey) && !e.altKey) { e.preventDefault(); ouvrirRecherche(); }
  else if (e.key === '/' && !saisie && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); ouvrirRecherche(); }
});

let heureParis = null;
function tic() {
  const ms = Math.max(0, Date.parse((R.bandeau || {}).cible || '2026-11-01T12:02:00Z') - Date.now());
  const s = Math.floor(ms / 1000);
  const v = { j: pad(Math.floor(s / 86400), 2), J: (LANG === 'en' ? 'D-' : 'J-') + Math.floor(s / 86400), h: pad(Math.floor(s % 86400 / 3600)), m: pad(Math.floor(s % 3600 / 60)), s: pad(s % 60) };
  document.querySelectorAll('[data-compte] b[data-u]').forEach((b) => { const x = v[b.dataset.u]; if (b.textContent !== x) b.textContent = x; });
  const aiguilles = document.querySelectorAll('.gl-cadran img[data-aiguille]');
  if (!aiguilles.length || etat.leger) return;
  let h = 0, m = 0, sec = 0;
  try {
    heureParis = heureParis || new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const p = heureParis.formatToParts(new Date());
    const g = (k) => Number((p.find((x) => x.type === k) || {}).value || 0);
    h = g('hour') % 12; m = g('minute'); sec = g('second');
  } catch (e) { const d = new Date(); h = d.getHours() % 12; m = d.getMinutes(); sec = d.getSeconds(); }
  const angle = { h: h * 30 + m * 0.5, m: m * 6 + sec * 0.1, s: sec * 6 };
  aiguilles.forEach((im) => { im.style.transform = 'rotate(' + angle[im.dataset.aiguille] + 'deg)'; });
}
setInterval(() => { if (!document.hidden) tic(); }, 1000);

const ROT_MS = 4500, ROT_PAS = 150;
let etatRot = 0, rotEcoule = 0, rotVisible = true, rotObs = null, pauseToucher = 0;
function observerRotation() {
  const d = racine.querySelector('.gl-droite');
  if (!d || typeof IntersectionObserver !== 'function') return;
  if (rotObs) rotObs.disconnect();
  rotObs = new IntersectionObserver((e) => { rotVisible = e.some((x) => x.isIntersecting); });
  rotObs.observe(d);
}
function majJaugeRot() {
  const b = racine.querySelector('.gl-rot i.est-la b');
  if (b) b.style.transform = 'scaleX(' + Math.min(1, rotEcoule / ROT_MS).toFixed(3) + ')';
}
function tournerZone() {
  const e = racine.querySelectorAll('.gl-etat');
  if (e.length < 2) return;
  etatRot = (etatRot + 1) % e.length;
  e.forEach((x, i) => {
    const oui = i === etatRot, etait = x.classList.contains('est-la');
    x.classList.toggle('est-la', oui);
    x.classList.toggle('est-sortie', etait && !oui);
    x.inert = !oui;
    if (oui) x.removeAttribute('aria-hidden'); else x.setAttribute('aria-hidden', 'true');
  });
  setTimeout(() => racine.querySelectorAll('.gl-etat.est-sortie').forEach((x) => x.classList.remove('est-sortie')), 700);
  racine.querySelectorAll('.gl-rot i').forEach((x, i) => { x.classList.toggle('est-la', i === etatRot); const b = x.querySelector('b'); if (b) b.style.transform = ''; });
  rotEcoule = 0;
}
setInterval(() => {
  const d = racine.querySelector('.gl-droite');
  const pause = document.hidden || etat.large || etat.plein || pauseRot || Date.now() < pauseToucher || !rotVisible || !d || !d.getClientRects().length;
  if (d) d.classList.toggle('est-pause', pause);
  if (pause) return;
  rotEcoule += ROT_PAS;
  if (rotEcoule >= ROT_MS) tournerZone(); else majJaugeRot();
}, ROT_PAS);

const BANDE_MS = Math.max(6000, Number((R.bandeau || {}).tourneMs) || 12000);
let bandeEcoule = 0;
setInterval(() => {
  const l = [...racine.querySelectorAll('.gl-dates .gl-date')];
  if (l.length < 2 || document.hidden || etat.large || etat.plein) return;
  bandeEcoule += 1000;
  if (bandeEcoule < BANDE_MS) return;
  bandeEcoule = 0;
  const j = (l.findIndex((x) => x.classList.contains('est-la')) + 1) % l.length;
  l.forEach((x, k) => { x.classList.toggle('est-la', k === j); if (k === j) x.removeAttribute('aria-hidden'); else x.setAttribute('aria-hidden', 'true'); });
}, 1000);

const connexion = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
function detecter() {
  const r = [];
  const c = connexion;
  if (c) {
    if (c.saveData) r.push('saveData');
    if (/^(slow-2g|2g|3g)$/.test(c.effectiveType || '')) r.push('effectiveType ' + c.effectiveType);
    if (typeof c.downlink === 'number' && c.downlink > 0 && c.downlink < 1) r.push('downlink ' + c.downlink);
    if (typeof c.rtt === 'number' && c.rtt > 400) r.push('rtt ' + c.rtt);
  }
  try { if (matchMedia('(prefers-reduced-data: reduce)').matches) r.push('prefers-reduced-data'); } catch (e) {   }
  return r;
}

function temoin() {
  const t0 = performance.now();
  let fini = false;
  const fin = (arrivee) => {
    if (fini) return;
    fini = true;
    etat.temoinMs = arrivee ? Math.round(performance.now() - t0) : null;
    if (!arrivee) { etat.raisons.push('témoin > 1,5 s'); etat.detecte = true; appliquerMode(); } else majDemo();
  };
  const im = new Image();
  im.onload = () => fin(true);
  im.onerror = () => fin(true);
  setTimeout(() => fin(false), 1500);
  im.src = R.espace.icone;
}
function appliquerMode() {
  etat.leger = etat.force === 'oui' || (etat.force === 'auto' && etat.detecte);
  document.documentElement.classList.toggle('gl-leger', etat.leger);
  if (!etat.leger) {
    chargerImages(racine.querySelector('.gl-bande'));
    if (tel) chargerImages(tel.element);
    if (large && etat.large) chargerImages(large.querySelector('#gl-p-' + etat.large));
    if (plein) { plein.querySelectorAll('.gl-region:not([hidden])').forEach(chargerImages); if (etat.plein) chargerImages(plein.querySelector('.gl-fin')); }
    tic();
  }
  if (moduleRecherche) moduleRecherche.rafraichir();
  if (resumeProg) remplirProgramme();
  majDemo();
}
if (connexion && connexion.addEventListener) connexion.addEventListener('change', () => { etat.raisons = detecter(); etat.detecte = etat.raisons.length > 0; appliquerMode(); });

racine.addEventListener('click', (e) => {
  const b = e.target && e.target.closest && e.target.closest('.gl-langue-btn');
  if (b) { e.preventDefault(); ouvrirLangue(!langueOuverte(), false); }
});
racine.addEventListener('focusout', (e) => {
  if (!langueOuverte()) return;
  const zone = racine.querySelector('.gl-langue');
  if (zone && e.relatedTarget && !zone.contains(e.relatedTarget)) ouvrirLangue(false, false);
});
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Escape' || e.key === 'Esc') && langueOuverte()) { ouvrirLangue(false, true); return; }
  if (e.key === 'Escape' || e.key === 'Esc') {
    if (moduleRecherche && moduleRecherche.paletteOuverte()) return;
    if (etat.plein) fermerPlein(true);
    else if (etat.large) fermerLarge(true);
  } else if (e.key === 'Tab' && etat.plein) piege(e, plein, tel && format() === 'tel' ? tel.focusables() : null);
});
document.addEventListener('pointerdown', (e) => {
  if (langueOuverte()) { const zone = racine.querySelector('.gl-langue'); if (zone && !zone.contains(e.target)) ouvrirLangue(false, false); }
  if (!etat.large) return;
  if (!(racine.contains(e.target) || portail.contains(e.target))) fermerLarge();
}, true);
let formatCourant = format();
function surFormat() {
  const f = format();
  if (f === formatCourant) return;
  formatCourant = f;
  if (f === 'pc') fermerPlein(false); else { fermerLarge(); if (moduleRecherche) moduleRecherche.fermerPalette(false); }
  surDefilement(true);
  if (!plein) return;
  placerRegions();
  if (!etat.plein) return;
  if (f === 'tab') choisirTab(clePanneau(etat.rub || etat.tab || cleActive()));
  else etat.rub = etat.tab;
}
mqTel.addEventListener('change', surFormat);
mqTab.addEventListener('change', surFormat);

function ouvrirMenu(cle) {
  if (format() === 'pc') ouvrirLarge(clePanneau(cle || cleActive()), false, etat.compacte ? 'compacte' : 'entete');
  else ouvrirPlein(format() === 'tab' ? cle : null);
}
function majDemo() {   }

const INTRO_MS = 6 * 3600 * 1000;
function introDecision() {
  let d = window.__rdrIntro;
  if (d) return d;
  const f = new URLSearchParams(location.search).get('intro');
  let jouer = true;
  try {
    const t = Number(localStorage.getItem('rdrIntroV1') || 0);
    jouer = !t || Date.now() - t > INTRO_MS;
    if (f !== 'oui' && f !== 'non') localStorage.setItem('rdrIntroV1', String(Date.now()));
  } catch (e) {   }
  try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) jouer = false; } catch (e) {   }
  if (f === 'oui') jouer = true; else if (f === 'non') jouer = false;
  return (window.__rdrIntro = { jouer, vu: {} });
}
function introPour(qui) {
  const d = introDecision();
  if (!d.jouer || d.vu[qui]) return false;
  d.vu[qui] = true;
  return true;
}
introDecision();
let introAttente = !!ctx.hero && introPour('entete');
let tIntro = null;
function poserAttenteIntro() {
  if (!introAttente) return;
  racine.classList.add('gl-intro-attente');
  if (tel && tel.element) tel.element.classList.add('gt-intro-attente');
}
function jouerEntree() {
  if (!introAttente) return;
  introAttente = false;
  clearTimeout(tIntro);
  removeEventListener('scroll', jouerEntree);
  const els = [[racine, 'gl'], [tel && tel.element, 'gt']].filter((x) => x[0]);
  els.forEach(([el, p]) => { el.classList.remove(p + '-intro-attente'); el.classList.add(p + '-intro-joue'); });
  setTimeout(() => els.forEach(([el, p]) => el.classList.remove(p + '-intro-joue')), 1800);
}
if (introAttente) {
  const etape = () => (window.__rdrIntro && window.__rdrIntro.etape) || '';
  addEventListener('rdr-intro', (e) => {
    const et = (e && e.detail && e.detail.etape) || '';
    if (et === 'debut') { clearTimeout(tIntro); tIntro = setTimeout(jouerEntree, 6000); }
    else if (et === 'bascule') jouerEntree();
  });
  addEventListener('scroll', jouerEntree, { passive: true });
   
  const deja = etape();
  tIntro = setTimeout(jouerEntree, deja === 'bascule' ? 60 : deja === 'debut' ? 6000 : 1600);
}

const mouvementReduit = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
let douceAttente = !!ctx.hero && !introAttente && !mouvementReduit();
let tDouce = null;
function poserAttenteDouce() {
  if (!douceAttente) return;
  racine.classList.add('gl-douce-attente');
  if (tel && tel.element) tel.element.classList.add('gt-douce-attente');
}
function jouerDouce() {
  if (!douceAttente) return;
  douceAttente = false;
  clearTimeout(tDouce);
  const els = [[racine, 'gl'], [tel && tel.element, 'gt']].filter((x) => x[0]);
  els.forEach(([el, p]) => { el.classList.remove(p + '-douce-attente'); el.classList.add(p + '-douce-joue'); });
  setTimeout(() => els.forEach(([el, p]) => el.classList.remove(p + '-douce-joue')), 900);
}
if (douceAttente) {
  addEventListener('rdr-intro', (e) => { if (e && e.detail && e.detail.etape === 'douce') jouerDouce(); });
  const deja = (window.__rdrIntro && window.__rdrIntro.etape) || '';
  tDouce = setTimeout(jouerDouce, deja === 'douce' || deja === 'bascule' ? 30 : 700);
}

 
etat.raisons = detecter();
etat.detecte = etat.raisons.length > 0;
document.documentElement.classList.toggle('gl-leger', etat.force === 'oui' || (etat.force === 'auto' && etat.detecte));
etat.leger = document.documentElement.classList.contains('gl-leger');
tel = creerTelephone({
  R, T, LANG, esc, lien, urlLangue, montreHTML, nouvelOnglet, chargerImages, drapeaux: { fr: ICO.fr, en: ICO.en },
  leger: () => etat.leger,
  surMenu: () => (etat.plein ? fermerPlein(true) : ouvrirPlein()),
  pleineLargeur: q.get('barre') === 'pleine'
});
rendreEntete();
temoin();
appliquerMode();
if (q.get('ouvert') === '1') {
  const cle = q.get('rubrique');
  setTimeout(() => {
    ouvrirMenu(cle);
    if (cle && format() === 'tel') setTimeout(() => basculerRub(cle), 800);
  }, 80);
}

const CLES_PROGRAMME = ['type', 'jour', 'heure', 'lieu', 'cat'];
function surFiltreIci(e) {
  const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if (!a || !(a.closest('rdr-entete') || a.closest('#rdr-entete-portail'))) return;
  const prog = document.querySelector('rdr-programme');
  if (!prog) return;
  let u;
  try { u = new URL(a.getAttribute('href'), location.href); } catch (err) { return; }
  if (u.origin !== location.origin || !CLES_PROGRAMME.some((k) => u.searchParams.has(k))) return;
  const ici = (p) => (p.replace(/\/+$/, '') || '/').replace(/^\/en(?=\/|$)/, '') || '/';
  if (ici(u.pathname) !== ici(location.pathname)) return;
  e.preventDefault();
  e.stopPropagation();
  CLES_PROGRAMME.forEach((k) => {
    const v = u.searchParams.get(k);
    prog.removeAttribute(k);
    if (v) prog.setAttribute(k, v.slice(0, 80));
  });
  try { history.replaceState(history.state, '', u.pathname + u.search); } catch (err) {   }
  if (etat.large) fermerLarge();
  if (etat.plein) fermerPlein(false);
  if (moduleRecherche && moduleRecherche.paletteOuverte()) moduleRecherche.fermerPalette(false);
  const barre = format() === 'tel' ? 64 : 76;
  const y = prog.getBoundingClientRect().top + window.scrollY - barre;
  window.scrollTo({ top: Math.max(0, y), behavior: reduit() ? 'auto' : 'smooth' });
}
document.addEventListener('click', surFiltreIci, true);

return {
  etat, tel, ouvrirMenu, ouvrirLarge, fermerLarge, ouvrirPlein, fermerPlein, ouvrirRecherche, basculerRub,
   
  programmeFrais(jeu) {
    if (!resumeProg) return;
    resumeProg = resumer(jeu, maintenantParis(q.get('aujourdhui')));
    remplirProgramme();
  },
  get recherche() { return moduleRecherche; },
   
  attacher(nouvelle) {
    if (!nouvelle || nouvelle === racine) return;
    fermerLarge();
    racine = nouvelle;
    rendreEntete();
    appliquerMode();
  },
  

  donnees() {
    J = ctx.donnees();
    RUBS = modele();
    if (large && !etat.large) { large.remove(); large = null; }
    if (plein && !etat.plein) { plein.remove(); plein = null; }
  }
};
}

return { creerEnteteD };
})();

const __rdr_entete = (function () {
const { creerEnteteD } = __synthese;

const MEMOIRE = 'rdrEnteteV2:';
const MEMOIRE_MS = 12 * 60 * 60 * 1000;
const INDEX_URL = 'https://cdn.jsdelivr.net/gh/WapitixAgency/rdr-elements@main/recherche/{lang}.json?v={v}';
const INDEX_REPLI = '/_functions/indexRecherche?lang={lang}';

const PROGRAMME_RELANCES_MS = [0, 1500, 3500, 6000];
const PROGRAMME_ABANDON_MS = 10000;
const TEMOIN_PREMIER_MS = 1000;
const TEMOIN_PAS_MS = 2000;
const TEMOIN_ENVOIS = 5;
const NOTIFS_GUET_MS = 15000;
const NOTIFS_EVENEMENTS = ['notify-seen', 'notify-dismiss', 'notify-refresh', 'notify-aller', 'notify-espace'];
const DONNEES = ['reglages', 'menus', 'posts', 'skippers'];

const lireJSON = (v, repli) => { if (!v) return repli; try { return JSON.parse(v); } catch (e) { return repli; } };
function navigateurCourt() {
  const ua = String(navigator.userAgent || '');
  const mobile = /iPhone|iPad|Android|Mobile/i.test(ua) ? '-mobile' : '';
  if (/Firefox\//.test(ua)) return 'firefox' + mobile;
  if (/Edg\//.test(ua)) return 'edge' + mobile;
  if (/Chrome\/|CriOS\//.test(ua)) return 'chrome' + mobile;
  if (/Safari\//.test(ua)) return 'safari' + mobile;
  return 'autre' + mobile;
}

function cheminCourant(base) {
  let p = '/';
  try { p = decodeURI(window.location.pathname || '/'); } catch (e) { p = window.location.pathname || '/'; }
  const b = String(base || '').replace(/^https?:\/\/[^/]+/i, '');
  if (b && (p === b || p.indexOf(b + '/') === 0)) p = p.slice(b.length);
  p = p.replace(/\/+$/, '') || '/';
  return p.replace(/^\/en(?=\/|$)/, '') || '/';
}
function memLire(lang) {
  try {
    const m = JSON.parse(window.localStorage.getItem(MEMOIRE + lang) || 'null');
    return m && Date.now() - (m.t || 0) < MEMOIRE_MS ? m : null;
  } catch (e) { return null; }
}
function memEcrire(lang, champ, val) {
  try {
    const m = memLire(lang) || {};
    m[champ] = val; m.t = Date.now();
    window.localStorage.setItem(MEMOIRE + lang, JSON.stringify(m));
  } catch (e) {   }
}
function injecterStyle() {
  if (document.getElementById('rdr-entete-css')) return;
  const s = document.createElement('style');
  s.id = 'rdr-entete-css';
  s.textContent = CSS_ENTETE;
  (document.head || document.documentElement).appendChild(s);
}
function portail() {
  let p = document.getElementById('rdr-entete-portail');
  if (!p) {
    p = document.createElement('div');
    p.id = 'rdr-entete-portail';
    document.body.appendChild(p);
  }
  return p;
}

const brut = { reglages: null, menus: null, posts: null, skippers: null, programme: null };
let app = null, courant = null, lang = 'fr', base = '', hero = false;
let attenteProgramme = null;

function donnees() {
  const posts = lireJSON(brut.posts, []);
  const menus = lireJSON(brut.menus, {}) || {};
  const sk = lireJSON(brut.skippers, null);
  if (Array.isArray(sk) && sk.length) menus.skippers = Object.assign({}, menus.skippers || {}, { skippers: sk });
  return { posts: Array.isArray(posts) ? posts : [], menus };
}
function autreLangue(code) {
  const alt = document.querySelector('link[rel="alternate"][hreflang^="' + code + '"]') || (code === 'fr' ? document.querySelector('link[rel="alternate"][hreflang="x-default"]') : null);
  if (alt && alt.getAttribute('href')) return alt.getAttribute('href');
  const p = cheminCourant(base);
  const chemin = code === 'en' ? '/en' + (p === '/' ? '' : p) : p;
  return (base || '') + (base && chemin === '/' ? '' : chemin);
}

let rafraichissement = null;
function demanderProgramme() {
  return PROGRAMME_RELANCES_MS.map((ms) => setTimeout(() => {
    if (courant && courant.isConnected) courant.dispatchEvent(new CustomEvent('entete-programme', { detail: { lang }, bubbles: false }));
  }, ms));
}
function programme() {
  const deja = lireJSON(brut.programme, null);
  if (deja && Array.isArray(deja.animations)) return Promise.resolve(deja);
  const m = memLire(lang);
  const memo = m ? lireJSON(m.programme, null) : null;
  if (memo && Array.isArray(memo.animations)) {
    brut.programme = m.programme;
    if (!rafraichissement) rafraichissement = demanderProgramme();
    return Promise.resolve(memo);
  }
  if (attenteProgramme) return attenteProgramme.promesse;
  const a = {};
  a.promesse = new Promise((res, rej) => { a.res = res; a.rej = rej; });
  a.minuteurs = demanderProgramme();
  a.minuteurs.push(setTimeout(() => { attenteProgramme = null; a.rej(new Error('programme non reçu')); }, PROGRAMME_ABANDON_MS));
  attenteProgramme = a;
  return a.promesse;
}
function programmeArrive(val) {
  const avant = brut.programme;
  brut.programme = val;
  const p = lireJSON(val, null);
  if (p && Array.isArray(p.animations)) memEcrire(lang, 'programme', val);
  if (rafraichissement) { rafraichissement.forEach(clearTimeout); rafraichissement = null; }
   
  if (!attenteProgramme && p && Array.isArray(p.animations) && val !== avant && app && app.programmeFrais) { app.programmeFrais(p); return; }
  if (!attenteProgramme || !p || !Array.isArray(p.animations)) return;
  const a = attenteProgramme;
  attenteProgramme = null;
  a.minuteurs.forEach(clearTimeout);
  a.res(p);
}

class RdrEntete extends HTMLElement {
  static get observedAttributes() { return ['lang', 'base', 'hero', 'reglages', 'menus', 'posts', 'skippers', 'programme', 'temoin', 'notifications']; }

  attributeChangedCallback(nom, avant, val) {
    if (nom === 'temoin') { if (avant !== val) this._temoin(val); return; }
    if (nom === 'notifications') { if (val && avant !== val) this._remettreNotifications(val); return; }
    if (avant === val || val === null) return;    
    if (nom === 'programme') { programmeArrive(val); return; }
    if (nom === 'lang') { lang = val === 'en' ? 'en' : 'fr'; return; }
    if (nom === 'hero') { hero = hero || val === 'dessus'; return; }
    if (nom === 'base') { base = val.replace(/\/+$/, ''); return; }
    if (val === brut[nom]) return;
    brut[nom] = val;
    memEcrire(lang, nom, val);
    if (!this.isConnected) return;
    if (!app) this._demarrer();
    else if (nom !== 'reglages') app.donnees();
  }

  connectedCallback() {
    courant = this;
    injecterStyle();
    lang = this.getAttribute('lang') === 'en' ? 'en' : (this.getAttribute('lang') ? 'fr' : lang);
    base = (this.getAttribute('base') || base || '').replace(/\/+$/, '');
     
    const m = memLire(lang) || {};
    DONNEES.forEach((k) => {
      const v = this.getAttribute(k);
      if (v) { brut[k] = v; memEcrire(lang, k, v); } else if (!brut[k] && m[k]) brut[k] = m[k];
    });
    const prog = this.getAttribute('programme'); if (prog) programmeArrive(prog);
    hero = hero || this.getAttribute('hero') === 'dessus';
    let racine = null;
    if (hero) {
       
      racine = document.getElementById('rdr-entete-dessus');
      if (!racine) {
        racine = document.createElement('div');
        racine.id = 'rdr-entete-dessus';
        racine.className = 'gl gl--dessus';
        document.body.insertBefore(racine, document.body.firstChild);
      }
      this.classList.add('est-dessus');
      document.documentElement.setAttribute('data-rdr-entete', 'dessus');
    } else {
      racine = this.querySelector(':scope > .gl');
      if (!racine) {
        this.innerHTML = '<div class="gl" id="gl-entete"></div>';
        racine = this.firstElementChild;
      }
    }
    this._racine = racine;
    this._demarrer();
    this._brancherRelaisNotifications();
    const temoin = this.getAttribute('temoin'); if (temoin) this._temoin(temoin);
    const notifs = this.getAttribute('notifications'); if (notifs) this._remettreNotifications(notifs);
  }

  disconnectedCallback() {
    this._debrancherRelaisNotifications();
    clearTimeout(this._temoinMinuteur); this._temoinMinuteur = null;
    if (courant === this) courant = null;
    

  }

  _demarrer() {
    const r = lireJSON(brut.reglages, null);
    if (!r || !this._racine) return;
    if (app) { app.attacher(this._racine); return; }
    app = creerEnteteD({
      lang, base, hero, reglages: r,
      racine: this._racine,
      portail: portail(),
      chemin: () => cheminCourant(base),
      autreLangue,
      donnees,
      programme,
      indexUrl: INDEX_URL,
      indexRepli: INDEX_REPLI
    });
    window.__rdrEntete = app;
  }

  

  _temoin(val) {
    clearTimeout(this._temoinMinuteur); this._temoinMinuteur = null;
    if (val === 'ecrit') { window.__rdrTemoinEcrit = true; return; }
    if (val !== 'membre' || window.__rdrTemoinEcrit) return;
    let envois = 0;
    const envoyer = () => {
      this._temoinMinuteur = null;
      if (!this.isConnected || window.__rdrTemoinEcrit || this.getAttribute('temoin') !== 'membre') return;
      const detail = { octet: 0, transfert: 0, navigateur: navigateurCourt() };
      try {
        const nav = (performance.getEntriesByType('navigation') || [])[0];
        if (nav) { detail.octet = Math.round(nav.responseStart || 0); detail.transfert = nav.transferSize || 0; }
      } catch (e) {   }
      this.dispatchEvent(new CustomEvent('navigation-temoin', { detail, bubbles: false }));
      if (++envois < TEMOIN_ENVOIS) this._temoinMinuteur = setTimeout(envoyer, TEMOIN_PAS_MS);
    };
    this._temoinMinuteur = setTimeout(envoyer, TEMOIN_PREMIER_MS);
  }

  

  _remettreNotifications(json) {
    clearTimeout(this._guetNotifs); this._guetNotifs = null;
    if (json === window.__rdrNotifsRemises) return;
    const module = document.querySelector('rdr-notify');
    if (module) {
      window.__rdrNotifsRemises = json;
      try { module.setAttribute('payload', json); } catch (e) {   }
      return;
    }
    if (!this._guetNotifsDebut) this._guetNotifsDebut = Date.now();
    if (Date.now() - this._guetNotifsDebut > NOTIFS_GUET_MS) return;
    this._guetNotifs = setTimeout(() => this._remettreNotifications(json), 400);
  }
  _brancherRelaisNotifications() {
    if (this._relaisNotifs) return;
    this._relaisNotifs = (e) => {
      if (!e || !e.target || e.target.tagName !== 'RDR-NOTIFY') return;
      this.dispatchEvent(new CustomEvent('rn-' + e.type, { bubbles: false, detail: e.detail || {} }));
    };
    NOTIFS_EVENEMENTS.forEach((t) => document.addEventListener(t, this._relaisNotifs));
  }
  _debrancherRelaisNotifications() {
    if (this._relaisNotifs) { NOTIFS_EVENEMENTS.forEach((t) => document.removeEventListener(t, this._relaisNotifs)); this._relaisNotifs = null; }
    clearTimeout(this._guetNotifs); this._guetNotifs = null;
  }
}

window.customElements.define('rdr-entete', RdrEntete);

return {  };
})();
})();
})();
