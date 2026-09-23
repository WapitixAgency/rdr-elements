/* rdr-elements faq | source route-du-rhum 4988f25 | rdr-faq.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["faq"]="4988f25";performance.mark("rdr-elements:faq")}catch(e){}
;(function(){
(function () {
  if (customElements.get("rdr-faq")) return;
  const CSS = "rdr-faq{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-faq .rfq-attente{min-height:clamp(560px,calc(100svh - 175px),900px);background:#0A1228}\nrdr-faq .rfq-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#0A1228;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-faq .rfq-vide h3{margin:0;font-size:22px}\nrdr-faq .rfq-vide p{margin:0;color:rgba(255,255,255,.7)}\nrdr-faq .rfq-vide button{height:42px;padding:0 20px;border:2px solid #fff;border-radius:10px 0 10px 0;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}\n@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien.woff2') format('woff2');font-style:normal;font-display:swap}\n@font-face{font-family:'VarienOutline';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic%20Outline.woff2') format('woff2');font-style:italic;font-display:swap}\nrdr-faq{--marine:#0E111D;--nuit:#0A1228;--nuit2:#101A36;--marine2:#16355D;--panneau:#1B2237;\n  --teal:#5DBFC0;--teal2:#14A79E;--vert:#006F7B;--jaune:#FCF150;--or:#F5BE41;--orange:#F19F39;--violet:#8B86E0;--corail:#FF7A3D;\n  --papier:#F4F1E8;--papier2:#EAE5D6;--encre:#0E111D;--encre2:#3A4256;--encre3:#6B7285;\n  --t2:rgba(255,255,255,.74);--t3:rgba(255,255,255,.52);--filet:rgba(255,255,255,.12);\n  --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;\n  --largeur:1260px;--marge:30px;\n  --ease:cubic-bezier(.22,.8,.3,1);}\nrdr-faq *{box-sizing:border-box}\nrdr-faq{margin:0;background:var(--nuit);color:#fff;font-family:var(--police);-webkit-font-smoothing:antialiased}\nrdr-faq a{color:inherit;text-decoration:none}\nrdr-faq h1,rdr-faq h2,rdr-faq h3,rdr-faq p{margin:0}\nrdr-faq button,rdr-faq input{font:inherit;color:inherit}\nrdr-faq svg.ico{width:1em;height:1em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}\nrdr-faq .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-faq .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.95;letter-spacing:0}\nrdr-faq .barre-j{display:block;width:54px;height:6px;border-radius:3px;background:var(--jaune)}\nrdr-faq .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-faq .depart{position:relative;overflow:hidden;background:\n  radial-gradient(70% 90% at 12% 0%,rgba(20,167,158,.22),transparent 62%),\n  radial-gradient(55% 80% at 100% 30%,rgba(255,122,61,.16),transparent 60%),\n  linear-gradient(180deg,var(--nuit) 0%,var(--nuit2) 100%);\n  padding:clamp(40px,7vh,78px) 0 clamp(70px,11vh,120px)}\nrdr-faq .depart::before{content:'';position:absolute;left:-140px;bottom:-150px;width:640px;aspect-ratio:1584/1080;background:var(--damier) no-repeat center/contain;opacity:.08;transform:rotate(-8deg);pointer-events:none}\nrdr-faq .grain{position:absolute;inset:0;opacity:.07;mix-blend-mode:overlay;pointer-events:none;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")}\nrdr-faq .rose{position:absolute;right:clamp(-60px,-2vw,0px);top:clamp(-70px,-4vw,-20px);width:clamp(260px,26vw,380px);height:auto;opacity:.16;pointer-events:none}\nrdr-faq .rose circle{fill:none;stroke:#fff;stroke-width:.8}\nrdr-faq .rose .br{fill:#fff}\nrdr-faq .rose .bs{fill:none;stroke:#fff;stroke-width:1}\nrdr-faq .rose .fin{fill:none;stroke:var(--jaune);stroke-width:1}\nrdr-faq .rose text{fill:var(--jaune);font:800 14px var(--police);text-anchor:middle}\nrdr-faq .rose .tourne{transform-origin:0 0;animation:rfq-rose 140s linear infinite}\n@keyframes rfq-rose{to{transform:rotate(360deg)}}\nrdr-faq .depart .trame{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,.85fr);gap:clamp(28px,4vw,64px);align-items:end}\nrdr-faq .fil{display:flex;align-items:center;gap:12px;margin-top:18px;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--t3)}\nrdr-faq .fil b{color:#fff}\nrdr-faq .depart h1{margin-top:18px;font-size:clamp(38px,4.7vw,68px)}\nrdr-faq .depart h1 .l1,rdr-faq .depart h1 .l2{display:block;white-space:nowrap}\nrdr-faq .depart h1 .l2{display:block;font-family:'VarienOutline',var(--titre);color:var(--jaune);-webkit-text-stroke:0}\nrdr-faq .chapo{margin-top:18px;max-width:50ch;color:var(--t2);font-size:clamp(14px,1.35vw,16.5px);line-height:1.6}\nrdr-faq .cherche{position:relative;margin-top:clamp(22px,3.4vh,34px);max-width:640px;display:flex;align-items:center;height:64px;padding:0 8px 0 22px;border-radius:18px;background:#fff;color:var(--encre);box-shadow:0 22px 50px -18px rgba(0,0,0,.55),0 0 0 0 rgba(252,241,80,0);transition:box-shadow .3s var(--ease),transform .3s var(--ease)}\nrdr-faq .cherche:focus-within{box-shadow:0 26px 60px -18px rgba(0,0,0,.6),0 0 0 5px rgba(252,241,80,.45);transform:translateY(-2px)}\nrdr-faq .cherche > .ico{font-size:20px;color:var(--encre3)}\nrdr-faq .cherche .champ{position:relative;flex:1;min-width:0;height:100%}\nrdr-faq .cherche input{width:100%;height:100%;padding:0 12px;border:0;background:none;outline:none;color:var(--encre);font-size:16px;font-weight:600}\nrdr-faq .cherche .ecrit{position:absolute;inset:0;display:flex;align-items:center;padding:0 12px;color:var(--encre3);font-size:16px;font-weight:500;white-space:nowrap;overflow:hidden;pointer-events:none}\nrdr-faq .cherche .ecrit::after{content:'';display:inline-block;width:2px;height:1.1em;margin-left:2px;background:var(--teal2);animation:rfq-curseur 1s steps(1) infinite}\n@keyframes rfq-curseur{50%{opacity:0}}\nrdr-faq .cherche:focus-within .ecrit,rdr-faq .cherche.plein .ecrit{display:none}\nrdr-faq .cherche input:not(:focus)::placeholder{color:transparent}\nrdr-faq .cherche input::placeholder{color:var(--encre3);font-weight:500}\nrdr-faq .cherche .compte{flex:none;display:none;margin-right:8px;padding:6px 11px;border-radius:999px;background:var(--papier);color:var(--encre2);font-size:12px;font-weight:800;white-space:nowrap}\nrdr-faq .cherche.actif .compte{display:inline-block;animation:rfq-entre .25s var(--ease)}\nrdr-faq .cherche .vider{flex:none;display:none;place-items:center;width:34px;height:34px;margin-right:6px;border:0;border-radius:50%;background:var(--papier);color:var(--encre2);cursor:pointer;font-size:16px}\nrdr-faq .cherche.plein .vider{display:grid}\nrdr-faq .cherche .aller{flex:none;display:grid;place-items:center;width:48px;height:48px;border:0;border-radius:12px;background:var(--jaune);color:var(--encre);cursor:pointer;font-size:20px;transition:transform .2s var(--ease)}\nrdr-faq .cherche .aller:hover{transform:scale(1.06)}\nrdr-faq .touche{position:absolute;right:-2px;top:-26px;font-size:11px;font-weight:600;color:var(--t3)}\nrdr-faq .touche kbd{display:inline-block;min-width:20px;padding:1px 6px;margin:0 2px;border:1px solid rgba(255,255,255,.25);border-bottom-width:2px;border-radius:5px;font:700 11px var(--police);color:#fff;text-align:center}\nrdr-faq .demandees{margin-top:18px;display:flex;flex-wrap:wrap;align-items:center;gap:8px}\nrdr-faq .demandees > span{margin-right:4px;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--t3)}\nrdr-faq .demandee{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;border:1px solid var(--filet);border-radius:999px;background:rgba(255,255,255,.05);color:#fff;font-size:13px;font-weight:700;cursor:pointer;transition:background .2s,border-color .2s,transform .2s var(--ease)}\nrdr-faq .demandee i{width:8px;height:8px;border-radius:50%;background:var(--cc)}\nrdr-faq .demandee:hover{background:rgba(255,255,255,.1);border-color:var(--cc);transform:translateY(-2px)}\nrdr-faq .reperes{display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,2.4vw,30px) clamp(16px,2vw,28px);padding:clamp(20px,2.6vw,30px);border-radius:22px;background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));border:1px solid var(--filet);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transform:rotate(-1.2deg)}\nrdr-faq .repere{position:relative;padding-left:16px}\nrdr-faq .repere::before{content:'';position:absolute;left:0;top:2px;bottom:2px;width:3px;border-radius:2px;background:var(--cc);transform:skewX(-8deg)}\nrdr-faq .repere b{display:flex;align-items:baseline;gap:6px;font-family:var(--titre);font-style:italic;font-weight:400;font-size:clamp(28px,3.1vw,42px);line-height:1;color:var(--cc)}\nrdr-faq .repere b small{font-family:var(--police);font-style:normal;font-size:13px;font-weight:800;color:#fff}\nrdr-faq .repere b.mot{font-size:clamp(24px,2.5vw,34px)}\nrdr-faq .repere b small.exp{align-self:flex-start;margin:2px 2px 0 -4px;font-size:.36em;color:var(--cc);text-transform:none}\nrdr-faq .repere span{display:block;margin-top:8px;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#fff}\nrdr-faq .repere em{display:block;margin-top:3px;font-style:normal;font-size:12.5px;color:var(--t3)}\nrdr-faq .houle{position:relative;display:block;width:100%;height:clamp(46px,6vw,86px);margin-top:calc(-1 * clamp(46px,6vw,86px));margin-bottom:-2px;z-index:2}\nrdr-faq .traversee{position:relative;background:var(--papier);color:var(--encre);padding:clamp(34px,5.5vh,64px) 0 clamp(60px,9vh,110px);overflow:clip}\nrdr-faq .traversee::before{content:'';position:absolute;inset:0;background:#16355D;-webkit-mask:var(--topo) repeat center top / 1200px auto;mask:var(--topo) repeat center top / 1200px auto;opacity:.06;pointer-events:none}\nrdr-faq .traversee .trame{display:grid;grid-template-columns:250px minmax(0,1fr);gap:clamp(28px,4.6vw,76px);align-items:start}\nrdr-faq .route{position:sticky;top:28px;padding:6px 0}\nrdr-faq .route .port{display:flex;align-items:center;gap:10px;font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--encre3)}\nrdr-faq .route .port i{width:10px;height:10px;border-radius:50%;border:2px solid var(--encre);background:var(--papier)}\nrdr-faq .route .port--arr i{background:var(--jaune)}\nrdr-faq .route ol{position:relative;list-style:none;margin:14px 0;padding:6px 0 6px 0}\nrdr-faq .route ol::before{content:'';position:absolute;left:4px;top:-10px;bottom:-10px;width:2px;background:repeating-linear-gradient(to bottom,var(--encre) 0 3px,transparent 3px 10px);opacity:.28}\nrdr-faq .route .fait{position:absolute;left:4px;top:-10px;width:2px;height:0;background:var(--encre);border-radius:2px;transition:height .15s linear}\nrdr-faq .route .bateau{position:absolute;left:-7px;top:-10px;width:24px;height:24px;display:grid;place-items:center;border-radius:50%;background:var(--encre);color:var(--jaune);font-size:13px;box-shadow:0 6px 14px -4px rgba(14,17,29,.5);transition:top .15s linear}\nrdr-faq .route li{position:relative}\nrdr-faq .route a{display:flex;align-items:center;gap:12px;padding:10px 10px 10px 26px;border-radius:12px;color:var(--encre2);font-size:14px;font-weight:700;transition:background .2s,color .2s}\nrdr-faq .route a::before{content:'';position:absolute;left:0;top:50%;width:10px;height:10px;margin-top:-5px;border-radius:50%;background:var(--papier);border:2px solid var(--cc);transition:background .2s,transform .2s var(--ease)}\nrdr-faq .route a:hover{background:rgba(14,17,29,.05);color:var(--encre)}\nrdr-faq .route a.est-vu{color:var(--encre)}\nrdr-faq .route a.est-vu::before{background:var(--cc);transform:scale(1.25)}\nrdr-faq .route a .n{font-family:'VarienOutline',var(--titre);font-style:italic;font-size:15px;color:var(--cc);-webkit-text-stroke:.3px var(--encre)}\nrdr-faq .route a .nb{margin-left:auto;min-width:24px;padding:2px 7px;border-radius:999px;background:rgba(14,17,29,.07);font-size:11px;font-weight:800;text-align:center;color:var(--encre3)}\nrdr-faq .route .aide{margin-top:24px;padding:16px;border-radius:16px;background:var(--encre);color:#fff}\nrdr-faq .route .aide b{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:800}\nrdr-faq .route .aide b .ico{color:var(--jaune);font-size:17px}\nrdr-faq .route .aide p{margin-top:6px;font-size:12.5px;line-height:1.5;color:var(--t2)}\nrdr-faq .route .aide a{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:0;font-size:12.5px;font-weight:800;color:var(--jaune)}\nrdr-faq .route .aide a::before{display:none}\nrdr-faq .rubrique{position:relative;margin-bottom:clamp(40px,6vh,64px);scroll-margin-top:20px}\nrdr-faq .rub-tete{display:grid;grid-template-columns:auto 1fr auto;align-items:end;gap:18px;padding-bottom:16px;margin-bottom:18px;border-bottom:2px solid var(--encre)}\nrdr-faq .rub-tete .num{font-family:'VarienOutline',var(--titre);font-style:italic;font-size:clamp(54px,6vw,84px);line-height:.8;color:var(--cc);-webkit-text-stroke:1px var(--encre)}\nrdr-faq .rub-tete h2{font-size:clamp(24px,2.8vw,38px);color:var(--encre)}\nrdr-faq .rub-tete p{margin-top:8px;font-size:13px;font-weight:600;color:var(--encre3)}\nrdr-faq .rub-tete .pastille{display:grid;place-items:center;width:52px;height:52px;border-radius:14px;background:var(--cc);color:var(--ci,var(--encre));font-size:24px;box-shadow:0 10px 22px -10px var(--cc);transform:rotate(-4deg)}\nrdr-faq .q{position:relative;margin-top:12px;border-radius:16px;background:#fff;overflow:clip;box-shadow:0 1px 0 rgba(14,17,29,.06),0 10px 24px -18px rgba(14,17,29,.35);transition:box-shadow .3s var(--ease),transform .3s var(--ease)}\nrdr-faq .q::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:4px;border-radius:0 3px 3px 0;background:var(--cc);transition:top .3s var(--ease),bottom .3s var(--ease)}\nrdr-faq .q:hover{box-shadow:0 1px 0 rgba(14,17,29,.06),0 18px 34px -20px rgba(14,17,29,.45);transform:translateY(-1px)}\nrdr-faq .q[open]{box-shadow:0 1px 0 rgba(14,17,29,.08),0 26px 50px -24px rgba(14,17,29,.5)}\nrdr-faq .q[open]::before{top:0;bottom:0;border-radius:16px 0 0 16px}\nrdr-faq .q summary{list-style:none;display:flex;align-items:center;gap:16px;padding:20px 20px 20px 26px;cursor:pointer;border-radius:16px}\nrdr-faq .q summary::-webkit-details-marker{display:none}\nrdr-faq .q summary:focus-visible{outline:3px solid var(--encre);outline-offset:-3px}\nrdr-faq .q .lib{flex:1;font-size:clamp(15px,1.45vw,17px);font-weight:800;line-height:1.35;color:var(--encre)}\nrdr-faq .q .chev{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--papier);color:var(--encre);font-size:16px;transition:transform .35s var(--ease),background .25s}\nrdr-faq .q[open] .chev{transform:rotate(180deg);background:var(--cc);color:var(--ci,var(--encre))}\nrdr-faq .q .ouvre{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s var(--ease)}\nrdr-faq .q[open] .ouvre{grid-template-rows:1fr}\nrdr-faq .q .coupe{overflow:hidden;min-height:0}\nrdr-faq .q .rep{padding:0 26px 22px 26px;color:var(--encre2);font-size:15px;line-height:1.7}\nrdr-faq .q .rep p + p{margin-top:10px}\nrdr-faq .q .rep ul{margin:10px 0 0;padding-left:20px}\nrdr-faq .q .rep p + ul{margin-top:8px}\nrdr-faq .q .rep ul + p{margin-top:10px}\nrdr-faq .q .rep li + li{margin-top:6px}\nrdr-faq .q .rep li a{color:var(--encre);font-weight:700;text-decoration:underline;text-decoration-color:var(--cc);text-decoration-thickness:3px;text-underline-offset:4px}\nrdr-faq .q .rep b{color:var(--encre);font-weight:800}\nrdr-faq .q .rep p a{color:var(--encre);font-weight:700;text-decoration:underline;text-decoration-color:var(--cc);text-decoration-thickness:3px;text-underline-offset:4px}\nrdr-faq .q .pied{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:16px;padding-top:14px;border-top:1px dashed #DCD6C5}\nrdr-faq .q .source{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 16px;border-radius:999px;background:var(--encre);color:#fff;font-size:12.5px;font-weight:800;text-decoration:none;transition:transform .2s var(--ease),background .2s}\nrdr-faq .q .source .ico{font-size:14px;color:var(--jaune);transition:transform .2s var(--ease)}\nrdr-faq .q .source:hover{background:#1f2640}\nrdr-faq .q .source:hover .ico{transform:translate(2px,-2px)}\nrdr-faq .q .copier{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border:1px solid #DCD6C5;border-radius:999px;background:none;color:var(--encre3);font-size:12px;font-weight:700;cursor:pointer;transition:color .2s,border-color .2s,background .2s}\nrdr-faq .q .copier:hover{color:var(--encre);border-color:var(--encre)}\nrdr-faq .q .copier.fait{background:var(--encre);border-color:var(--encre);color:var(--jaune)}\nrdr-faq .q .ancre{font:600 11.5px ui-monospace,Menlo,Consolas,monospace;color:#A39B84}\nrdr-faq .valider{display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:6px;background:#FFE9D2;color:#B2530C;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;vertical-align:1px}\nrdr-faq mark{background:linear-gradient(transparent 55%,rgba(252,241,80,.95) 55%);color:inherit;padding:0 1px}\nrdr-faq .rien{display:none;align-items:center;gap:22px;padding:26px;border-radius:20px;background:var(--encre);color:#fff}\nrdr-faq .rien.est-la{display:flex}\nrdr-faq .rien .bouee{flex:none;display:grid;place-items:center;width:74px;height:74px;border-radius:50%;background:var(--corail);color:#fff;font-size:40px;animation:rfq-tangue 3.4s ease-in-out infinite}\n@keyframes rfq-tangue{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(8deg) translateY(-4px)}}\nrdr-faq .rien b{display:block;font-size:18px;font-weight:800}\nrdr-faq .rien p{margin-top:6px;color:var(--t2);font-size:14px;line-height:1.5}\nrdr-faq .rien .liens{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}\nrdr-faq .rien .liens button{padding:7px 12px;border:1px solid var(--filet);border-radius:999px;background:rgba(255,255,255,.06);font-size:12.5px;font-weight:700;cursor:pointer}\nrdr-faq .rien .liens button:hover{border-color:var(--jaune)}\nrdr-faq .aiguillages{position:relative;margin-top:clamp(10px,2vh,24px);display:grid;grid-template-columns:1fr 1fr;gap:22px}\nrdr-faq .aig{position:relative;display:flex;flex-direction:column;min-height:220px;padding:26px;border:6px solid #fff;border-radius:24px;color:var(--encre);overflow:hidden;box-shadow:0 30px 60px -30px rgba(14,17,29,.55);transition:transform .35s var(--ease)}\nrdr-faq .aig--pro{background:linear-gradient(115deg,#FF7A3D 0%,#F5A23C 55%,#F5BE41 100%);transform:rotate(-1.4deg)}\nrdr-faq .aig--equipe{background:linear-gradient(115deg,#14A79E 0%,#5DBFC0 60%,#9BDDD6 100%);transform:rotate(1.2deg)}\nrdr-faq .aig:hover{transform:rotate(0) translateY(-4px)}\nrdr-faq .aig .pastille{display:grid;place-items:center;width:50px;height:50px;border-radius:14px;background:var(--encre);color:#fff;font-size:24px}\nrdr-faq .aig .sur{margin-top:18px;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;opacity:.72}\nrdr-faq .aig b{margin-top:6px;font-family:var(--titre);font-style:italic;font-weight:400;font-size:clamp(22px,2.3vw,30px);line-height:1;text-transform:uppercase}\nrdr-faq .aig p{margin-top:10px;max-width:40ch;font-size:14px;line-height:1.55;font-weight:500}\nrdr-faq .aig .aller{display:inline-flex;align-items:center;gap:10px;margin-top:auto;padding-top:18px;font-size:14px;font-weight:800}\nrdr-faq .aig .aller i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--encre);color:#fff;font-size:15px;font-style:normal;transition:transform .25s var(--ease)}\nrdr-faq .aig:hover .aller i{transform:translateX(4px)}\nrdr-faq .aig::after{content:attr(data-n);position:absolute;right:18px;top:6px;font-family:'VarienOutline',var(--titre);font-style:italic;font-size:92px;line-height:1;color:transparent;-webkit-text-stroke:1.5px rgba(14,17,29,.28)}\nrdr-faq .arrivee{position:relative;background:var(--jaune);color:var(--encre);padding:clamp(44px,7vh,80px) 0 clamp(50px,8vh,90px);overflow:hidden}\nrdr-faq .vague{position:absolute;left:0;right:0;top:-1px;width:100%;height:42px}\nrdr-faq .arrivee::before{content:'';position:absolute;inset:0;background:repeating-radial-gradient(circle at 88% 120%,transparent 0 38px,rgba(14,17,29,.05) 38px 40px);pointer-events:none}\nrdr-faq .arrivee .trame{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:clamp(22px,4vw,56px)}\nrdr-faq .arrivee .bouee{display:grid;place-items:center;width:clamp(92px,10vw,128px);height:clamp(92px,10vw,128px);border-radius:50%;background:var(--encre);color:var(--corail);font-size:clamp(52px,6vw,74px);animation:rfq-tangue 4s ease-in-out infinite;box-shadow:0 20px 40px -20px rgba(14,17,29,.6)}\nrdr-faq .arrivee h2{font-size:clamp(28px,3.6vw,50px)}\nrdr-faq .arrivee p{margin-top:10px;max-width:52ch;font-size:15px;line-height:1.6;font-weight:500;color:#2B3040}\nrdr-faq .arrivee .cta{display:inline-flex;align-items:center;gap:12px;padding:18px 26px;border-radius:16px;background:var(--encre);color:#fff;font-size:15px;font-weight:800;white-space:nowrap;box-shadow:0 18px 34px -16px rgba(14,17,29,.7);transition:transform .25s var(--ease)}\nrdr-faq .arrivee .cta:hover{transform:translateY(-3px)}\nrdr-faq .arrivee .cta .ico{color:var(--jaune);font-size:18px}\nrdr-faq .entre{opacity:0;transform:translateY(18px);animation:rfq-entre .8s var(--ease) forwards;animation-delay:calc(var(--i,0) * 90ms + 120ms)}\n@keyframes rfq-entre{to{opacity:1;transform:none}}\nrdr-faq .reperes.entre{animation-name:rfq-entre-penche}\n@keyframes rfq-entre-penche{from{opacity:0;transform:translateY(24px) rotate(-3deg)}to{opacity:1;transform:rotate(-1.2deg)}}\nrdr-faq .revele{opacity:0;translate:0 22px;transition:opacity .7s var(--ease),translate .7s var(--ease),transform .35s var(--ease),box-shadow .3s var(--ease)}\nrdr-faq .revele.est-vu{opacity:1;translate:0 0}\n@media (max-width:1100px){\nrdr-faq .depart .trame{grid-template-columns:minmax(0,1fr)}\nrdr-faq .reperes{max-width:640px;transform:none}\nrdr-faq .reperes.entre{animation-name:rfq-entre}\n}\n@media (max-width:900px){\nrdr-faq .traversee .trame{grid-template-columns:minmax(0,1fr)}\nrdr-faq .route{position:sticky;top:0;z-index:5;margin:0 calc(-1 * var(--marge));padding:10px var(--marge);background:rgba(244,241,232,.94);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid #DCD6C5}\nrdr-faq .route .port,rdr-faq .route .aide,rdr-faq .route .fait,rdr-faq .route .bateau{display:none}\nrdr-faq .route ol{display:flex;gap:6px;margin:0;padding:0;overflow-x:auto;scrollbar-width:none}\nrdr-faq .route ol::before{display:none}\nrdr-faq .route ol::-webkit-scrollbar{display:none}\nrdr-faq .route a{flex:none;padding:8px 12px 8px 24px;border:1px solid #DCD6C5;border-radius:999px;background:#fff;font-size:13px;white-space:nowrap}\nrdr-faq .route a::before{left:9px}\nrdr-faq .route a .n{display:none}\nrdr-faq .aiguillages{grid-template-columns:1fr}\nrdr-faq .arrivee .trame{grid-template-columns:auto 1fr}\nrdr-faq .arrivee .cta{grid-column:1 / -1;justify-self:start}\n}\n@media (max-width:760px){\nrdr-faq{--marge:22px}\nrdr-faq .depart h1{font-size:clamp(34px,10.4vw,50px)}\nrdr-faq .depart h1 .l1,rdr-faq .depart h1 .l2{white-space:normal}\nrdr-faq .fil .long{display:none}\nrdr-faq .rose{width:220px;right:-70px;top:-40px;opacity:.09}\nrdr-faq .cherche{height:58px;padding-left:16px}\nrdr-faq .cherche input,rdr-faq .cherche .ecrit{font-size:15px;padding:0 8px}\nrdr-faq .cherche .aller{width:44px;height:44px}\nrdr-faq .touche{display:none}\nrdr-faq .reperes{gap:18px 14px;padding:18px}\nrdr-faq .depart::before{left:-120px;bottom:-110px;width:420px}\nrdr-faq .repere b{font-size:28px}\nrdr-faq .rub-tete{grid-template-columns:auto 1fr;gap:12px}\nrdr-faq .rub-tete .pastille{display:none}\nrdr-faq .rub-tete .num{font-size:52px}\nrdr-faq .q summary{padding:17px 16px 17px 22px}\nrdr-faq .q .rep{padding:0 18px 20px 22px;font-size:14.5px}\nrdr-faq .rien{flex-direction:column;align-items:flex-start}\nrdr-faq .aig{min-height:0;padding:22px}\nrdr-faq .aig::after{font-size:70px}\nrdr-faq .arrivee .trame{grid-template-columns:1fr}\nrdr-faq .arrivee .bouee{width:84px;height:84px;font-size:46px}\n}\n@media (max-height:820px) and (min-width:1101px){\nrdr-faq .depart{padding:26px 0 64px}\nrdr-faq .fil{margin-top:12px}\nrdr-faq .depart h1{margin-top:12px;font-size:clamp(38px,4.6vw,60px)}\nrdr-faq .chapo{margin-top:12px;font-size:14px;line-height:1.5}\nrdr-faq .cherche{margin-top:18px;height:56px}\nrdr-faq .cherche .aller{width:42px;height:42px}\nrdr-faq .demandees{margin-top:12px}\nrdr-faq .demandee{padding:6px 12px 6px 9px;font-size:12.5px}\nrdr-faq .reperes{gap:16px 20px;padding:18px 20px}\nrdr-faq .repere b{font-size:32px}\nrdr-faq .repere span{margin-top:6px}\nrdr-faq .repere em{display:none}\nrdr-faq .traversee{padding-top:22px}\nrdr-faq .rub-tete{padding-bottom:12px;margin-bottom:12px}\nrdr-faq .rub-tete .num{font-size:56px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-faq *,rdr-faq *::before,rdr-faq *::after{animation:none!important;transition:none!important}\nrdr-faq .entre{opacity:1;transform:none}\nrdr-faq .revele{opacity:1;translate:0 0}\nrdr-faq .reperes.entre{transform:rotate(-1.2deg)}\n}";
  const PAGE = "<section class=\"depart\" aria-labelledby=\"titre-faq\">\n    <div class=\"grain\" aria-hidden=\"true\"></div>\n    <svg class=\"rose\" viewBox=\"-100 -100 200 200\" aria-hidden=\"true\"><g class=\"tourne\"><circle r=\"92\"/><circle r=\"70\"/><circle r=\"30\"/><path class=\"br\" d=\"M0-96 L10-10 L0 0 Z M0 96 L-10 10 L0 0 Z M96 0 L10 10 L0 0 Z M-96 0 L-10-10 L0 0 Z\"/><path class=\"bs\" d=\"M0-96 L-10-10 L0 0 Z M0 96 L10 10 L0 0 Z M96 0 L10-10 L0 0 Z M-96 0 L-10 10 L0 0 Z\"/><path class=\"fin\" d=\"M52-52 L6-2 L0 0 Z M-52 52 L-6 2 L0 0 Z M52 52 L2 6 L0 0 Z M-52-52 L-2-6 L0 0 Z\"/><text y=\"-78\">N</text></g></svg>\n    <div class=\"trame\">\n      <div>\n        <span class=\"barre-j entre\" style=\"--i:0\"></span>\n        <div class=\"fil entre\" style=\"--i:1\"><b>Route du Rhum</b><span class=\"long\">Destination Guadeloupe ·</span> Questions fréquentes</div>\n        <h1 class=\"titre entre\" id=\"titre-faq\" style=\"--i:2\"><span class=\"l1\">Vos questions,</span><span class=\"l2\">nos réponses.</span></h1>\n        <p class=\"chapo entre\" style=\"--i:3\">Le départ, le village, les bateaux, venir à Saint-Malo : cherchez un mot, la réponse s'ouvre. Et si elle n'y est pas, dites-le nous, c'est comme ça que cette page grandit.</p>\n        <form class=\"cherche entre\" id=\"cherche\" role=\"search\" style=\"--i:4\" onsubmit=\"return false\">\n          <span class=\"touche\" aria-hidden=\"true\">Appuyez sur <kbd>/</kbd> pour chercher</span>\n          <svg class=\"ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></svg>\n          <label class=\"sr\" for=\"q\">Chercher dans les questions</label>\n          <span class=\"champ\"><input id=\"q\" type=\"search\" autocomplete=\"off\" placeholder=\"Tapez un mot : départ, pontons, gratuit…\"><span class=\"ecrit\" id=\"ecrit\" aria-hidden=\"true\">Quand part la course ?</span></span>\n          <span class=\"compte\" id=\"compte\" aria-live=\"polite\"></span>\n          <button class=\"vider\" id=\"vider\" type=\"button\" aria-label=\"Effacer la recherche\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></button>\n          <button class=\"aller\" type=\"submit\" aria-label=\"Chercher\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg></button>\n        </form>\n        <div class=\"demandees entre\" id=\"demandees\" style=\"--i:5\"><span>Les plus demandées</span></div>\n      </div>\n      <div class=\"reperes entre\" style=\"--i:4\">\n        <div class=\"repere\" style=\"--cc:var(--teal)\"><b>1<small class=\"exp\">er</small>nov.</b><span>Grand départ</span><em>dimanche, à 13 h 02</em></div>\n        <div class=\"repere\" style=\"--cc:var(--jaune)\"><b>13</b><span>Jours de fête</span><em>du 20 oct. au 1er nov.</em></div>\n        <div class=\"repere\" style=\"--cc:var(--violet)\"><b class=\"mot\">Gratuit</b><span>Le village</span><em>accessible à tous</em></div>\n        <div class=\"repere\" style=\"--cc:var(--orange)\"><b>3&nbsp;542</b><span>Milles · 6 560 km</span><em>jusqu'en Guadeloupe</em></div>\n      </div>\n    </div>\n  </section>\n  <svg class=\"houle\" viewBox=\"0 0 1440 86\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n    <path d=\"M0 40 C 180 10, 360 70, 540 44 S 900 8, 1080 40 S 1320 70, 1440 36 L1440 86 L0 86 Z\" fill=\"#F4F1E8\"/>\n    <path d=\"M0 52 C 200 26, 380 80, 560 56 S 920 20, 1100 52 S 1330 78, 1440 50\" fill=\"none\" stroke=\"rgba(14,17,29,.10)\" stroke-width=\"2\" stroke-dasharray=\"2 10\"/>\n  </svg>\n  <section class=\"traversee\" aria-label=\"Les questions\">\n    <div class=\"trame\">\n      <nav class=\"route\" aria-label=\"Les rubriques\">\n        <div class=\"port\"><i></i>Saint-Malo</div>\n        <ol id=\"route\"><span class=\"fait\" id=\"fait\"></span><span class=\"bateau\" id=\"bateau\" aria-hidden=\"true\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M10 2v15\"/><path d=\"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z\"/><path d=\"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z\"/></svg></span></ol>\n        <div class=\"port port--arr\"><i></i>Pointe-à-Pitre</div>\n        <div class=\"aide\">\n          <b><svg class=\"ico\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg>Pas trouvé ?</b>\n          <p>Écrivez-nous : les questions qui reviennent finissent ici.</p>\n          <a href=\"/contact\">Poser ma question →</a>\n        </div>\n      </nav>\n      <div>\n        <div id=\"liste\"></div>\n        <div class=\"rien\" id=\"rien\" role=\"status\">\n          <span class=\"bouee\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg></span>\n          <div>\n            <b id=\"rien-titre\">Aucune réponse pour cette recherche</b>\n            <p>Elle n'est peut-être pas encore écrite. Essayez un autre mot, ou posez-nous la question.</p>\n            <div class=\"liens\" id=\"rien-liens\"></div>\n          </div>\n        </div>\n        <div class=\"aiguillages\">\n          <a class=\"aig aig--pro revele\" href=\"/offres-exposants\" data-n=\"01\">\n            <span class=\"pastille\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/></svg></span>\n            <span class=\"sur\">Vous n'êtes pas là pour une question</span>\n            <b>Exposant, partenaire, prestataire</b>\n            <p>Emplacements, offres et dossier de partenariat : tout part d'une seule page, et votre demande arrive au bon service.</p>\n            <span class=\"aller\">Voir les offres <i>→</i></span>\n          </a>\n          <a class=\"aig aig--equipe revele\" href=\"/contact\" data-n=\"02\">\n            <span class=\"pastille\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/></svg></span>\n            <span class=\"sur\">Vous n'êtes pas là pour une question</span>\n            <b>Rejoindre l'équipe</b>\n            <p>Emplois, stages et bénévolat sur le village : écrivez-nous pour proposer votre candidature.</p>\n            <span class=\"aller\">Postuler <i>→</i></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"arrivee\" id=\"arrivee\">\n    <svg class=\"vague\" viewBox=\"0 0 1440 42\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M0 0 H1440 V14 C 1260 40, 1080 2, 900 20 S 540 40, 360 18 S 120 4, 0 24 Z\" fill=\"#F4F1E8\"/></svg>\n    <div class=\"trame\">\n      <span class=\"bouee\" aria-hidden=\"true\"><svg class=\"ico\" viewBox=\"0 0 24 24\" style=\"stroke-width:1.6\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg></span>\n      <div>\n        <h2 class=\"titre\">Votre question<br>n'y est pas ?</h2>\n        <p>On lit tous les messages. Celles qui reviennent finissent sur cette page, et c'est vous qui la faites grandir.</p>\n      </div>\n      <a class=\"cta\" href=\"/contact\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/></svg>Nous écrire</a>\n    </div>\n  </section>";
  const TRAD = {"Questions fréquentes":"Frequently asked questions","Vos questions,":"Your questions,","nos réponses.":"our answers.","Le départ, le village, les bateaux, venir à Saint-Malo : cherchez un mot, la réponse s'ouvre. Et si elle n'y est pas, dites-le nous, c'est comme ça que cette page grandit.":"The start, the village, the boats, getting to Saint-Malo: type a word and the answer opens. And if it isn't here, let us know: that's how this page grows.","Appuyez sur":"Press","pour chercher":"to search","Chercher dans les questions":"Search the questions","Tapez un mot : départ, pontons, gratuit…":"Type a word: start, pontoons, free…","Quand part la course ?":"When does the race start?","Effacer la recherche":"Clear the search","Chercher":"Search","Les plus demandées":"Most asked","er":"st","nov.":"Nov.","Grand départ":"Race start","dimanche, à 13 h 02":"Sunday, at 1:02 pm","Jours de fête":"Festival days","du 20 oct. au 1er nov.":"20 Oct. to 1 Nov.","Gratuit":"Free","Le village":"The village","accessible à tous":"open to everyone","Milles · 6 560 km":"Miles · 6,560 km","3 542":"3,542","jusqu'en Guadeloupe":"to Guadeloupe","Les rubriques":"Sections","Pas trouvé ?":"Not found?","Écrivez-nous : les questions qui reviennent finissent ici.":"Write to us: the questions that keep coming up end up here.","Poser ma question →":"Ask my question →","Les questions":"The questions","Aucune réponse pour cette recherche":"No answer for this search","Elle n'est peut-être pas encore écrite. Essayez un autre mot, ou posez-nous la question.":"It may not be written yet. Try another word, or ask us.","Vous n'êtes pas là pour une question":"Not here with a question?","Exposant, partenaire, prestataire":"Exhibitor, partner, supplier","Emplacements, offres et dossier de partenariat : tout part d'une seule page, et votre demande arrive au bon service.":"Stands, offers and partnership pack: it all starts from one page, and your request reaches the right team.","Voir les offres":"See the offers","Rejoindre l'équipe":"Join the team","Emplois, stages et bénévolat sur le village : écrivez-nous pour proposer votre candidature.":"Jobs, internships and volunteering at the village: write to us with your application.","Postuler":"Apply","Votre question":"Your question","n'y est pas ?":"isn't here?","On lit tous les messages. Celles qui reviennent finissent sur cette page, et c'est vous qui la faites grandir.":"We read every message. The questions that keep coming up end up on this page: you are the ones who make it grow.","Nous écrire":"Write to us","Copier le lien":"Copy link","Lien copié":"Link copied","Aller à la page":"Go to the page"};
  const SOURCE = 'https://www.routedurhum.com/_functions/faq';

  function poserStyle() {
    if (document.getElementById('rdr-faq-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-faq-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  


  function enAnglais(t) {
    const k = t.trim();
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(TRAD, k)) return t.replace(k, TRAD[k]);
    let m = k.match(/^(\d+) réponses?$/);
    if (m) return t.replace(k, m[1] + (m[1] === '1' ? ' answer' : ' answers'));
    m = k.match(/^Aucune réponse pour « (.*) »$/);
    if (m) return t.replace(k, 'No answer for \u201c' + m[1] + '\u201d');
    return null;
  }
  function traduire(racine) {
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach((n) => { if (n.parentElement && n.parentElement.id === 'ecrit') return; const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; });
    const els = racine.nodeType === 1 ? [racine, ...racine.querySelectorAll('[placeholder],[aria-label],[title]')] : [];
    els.forEach((el) => ['placeholder', 'aria-label', 'title'].forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      const v = enAnglais(el.getAttribute(a));
      if (v != null && v !== el.getAttribute(a)) el.setAttribute(a, v);
    }));
  }
  function prefixerLiens(racine) {
    racine.querySelectorAll('a[href^="/"]').forEach((a) => {
      const h = a.getAttribute('href');
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('//')) return;
      a.setAttribute('href', '/en' + h);
    });
  }

   
  function demarrer(D) {






const ICO = {
  flag: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
  tent: '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
  bus: '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
  sailboat: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  lien: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  medal: '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
  fleche: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>'
};
const svg = (k) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + ICO[k] + '</svg>';
const AV = '<span class="valider">À valider</span>';

    const RUBRIQUES = D.rubriques, FAQ = D.questions, EXEMPLES = D.exemples || [], MEDIAS = D.medias || {};

 
const PAGE_FAQ = document.querySelector('.faq-page');
if (MEDIAS.topo) PAGE_FAQ.style.setProperty('--topo', 'url("' + MEDIAS.topo + '")');
if (MEDIAS.damier) PAGE_FAQ.style.setProperty('--damier', 'url("' + MEDIAS.damier + '")');

 
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const jetons = (q) => norm(q).replace(/[^a-z0-9œæ]+/g, ' ').trim().split(' ').filter(Boolean);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const $ = (id) => document.getElementById(id);
const liste = $('liste'), champ = $('q'), boite = $('cherche'), compte = $('compte'), rien = $('rien');
const rubDe = (id) => RUBRIQUES.find((r) => r.id === id);

 
$('demandees').insertAdjacentHTML('beforeend', FAQ.filter((f) => f.top).map((f) =>
  '<button type="button" class="demandee" data-aller="' + f.a + '" style="--cc:' + rubDe(f.r).cc + '"><i></i>' + esc(f.top) + '</button>').join(''));

 
$('route').insertAdjacentHTML('beforeend', RUBRIQUES.map((r, i) =>
  '<li><a href="#' + r.id + '" data-r="' + r.id + '" style="--cc:' + r.cc + '"><span class="n">0' + (i + 1) + '</span>' + esc(r.nom) + '<span class="nb">' + FAQ.filter((f) => f.r === r.id).length + '</span></a></li>').join(''));

 
function surligner(html, mots) {
  const ms = mots.filter((m) => m.length >= 2);
  if (!ms.length) return html;
  return html.replace(/>([^<]+)</g, (tout, texte) => {
    let sortie = texte;
    ms.forEach((m) => {
      let reste = sortie, res = '', i = norm(reste).indexOf(m);
      if (i < 0) return;
      while (i >= 0) { res += reste.slice(0, i) + '<mark>' + reste.slice(i, i + m.length) + '</mark>'; reste = reste.slice(i + m.length); i = norm(reste).indexOf(m); }
      sortie = res + reste;
    });
    return '>' + sortie + '<';
  });
}

let premierDessin = true;
function dessiner() {
  const mots = jetons(champ.value);
  const cherche = mots.length > 0 && champ.value.trim().length >= 2;
  let trouves = 0;
  const html = RUBRIQUES.map((r, ri) => {
    const dedans = FAQ.filter((f) => {
      if (f.r !== r.id) return false;
      if (!cherche) return true;
      const foin = norm(f.q + ' ' + f.cles.join(' ') + ' ' + (f.src ? f.src.t : '') + ' ' + f.rep.replace(/<[^>]*>/g, ' '));
      return mots.every((m) => foin.indexOf(m) >= 0);
    });
    if (!dedans.length) return '';
    trouves += dedans.length;
    return '<section class="rubrique" id="' + r.id + '" style="--cc:' + r.cc + (r.ci ? ';--ci:' + r.ci : '') + '">' +
      '<header class="rub-tete revele"><span class="num" aria-hidden="true">0' + (ri + 1) + '</span>' +
        '<div><h2 class="titre">' + esc(r.nom) + '</h2><p>' + esc(r.note) + '</p></div>' +
        '<span class="pastille" aria-hidden="true">' + svg(r.ico) + '</span></header>' +
      dedans.map((f) => {
        const ouvre = cherche || location.hash === '#' + f.a || (premierDessin && !location.hash && f === FAQ[0]);
        return '<details class="q revele" id="' + f.a + '"' + (ouvre ? ' open' : '') + '>' +
          '<summary><span class="lib">' + esc(f.q) + '</span><span class="chev" aria-hidden="true">' + svg('chevron') + '</span></summary>' +
          '<div class="ouvre"><div class="coupe"><div class="rep">' + f.rep +
            '<div class="pied">' + (f.src ? '<a class="source" href="' + f.src.u + '"><span class="sr">Aller à la page </span>' + esc(f.src.t) + svg('fleche') + '</a>' : '') +
            '<button type="button" class="copier" data-lien="' + f.a + '">' + svg('lien') + '<span>Copier le lien</span></button>' +
            '<span class="ancre">#' + f.a + '</span></div>' +
          '</div></div></div></details>';
      }).join('') + '</section>';
  }).join('');
  liste.innerHTML = cherche ? surligner(html, mots) : html;
  premierDessin = false;
  compte.textContent = trouves + (trouves > 1 ? ' réponses' : ' réponse');
  boite.classList.toggle('actif', cherche && trouves > 0);
  boite.classList.toggle('plein', !!champ.value);
  rien.classList.toggle('est-la', cherche && trouves === 0);
  if (cherche && trouves === 0) {
    $('rien-titre').textContent = 'Aucune réponse pour « ' + champ.value.trim() + ' »';
    $('rien-liens').innerHTML = FAQ.filter((f) => f.top).slice(0, 4).map((f) => '<button type="button" data-aller="' + f.a + '">' + esc(f.top) + '</button>').join('');
  }
  observerRevele();
  placerBateau();
}








liste.addEventListener('click', (e) => {
  const sum = e.target.closest('summary'); if (!sum) return;
  const d = sum.parentElement;
  if (d.open) return;    
  if (!(champ.value.trim().length >= 2)) liste.querySelectorAll('details[open]').forEach((x) => { if (x !== d) x.open = false; });
  history.replaceState(null, '', '#' + d.id);
});

 
liste.addEventListener('click', (e) => {
  const b = e.target.closest('.copier'); if (!b) return;
  const u = location.origin + location.pathname + '#' + b.dataset.lien;
  const fini = () => { b.classList.add('fait'); b.innerHTML = svg('check') + '<span>Lien copié</span>'; setTimeout(() => { b.classList.remove('fait'); b.innerHTML = svg('lien') + '<span>Copier le lien</span>'; }, 1800); };
  try { navigator.clipboard.writeText(u).then(fini, fini); } catch (err) { fini(); }
});

 
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-aller]'); if (!b) return;
  if (champ.value) { champ.value = ''; dessiner(); }
  const d = document.getElementById(b.dataset.aller); if (!d) return;
  liste.querySelectorAll('details[open]').forEach((x) => { if (x !== d) x.open = false; });
  d.open = true;
  history.replaceState(null, '', '#' + d.id);
  d.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

champ.addEventListener('input', dessiner);
$('vider').addEventListener('click', () => { champ.value = ''; champ.focus(); dessiner(); });
addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== champ) { e.preventDefault(); champ.focus(); champ.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  if (e.key === 'Escape' && document.activeElement === champ && champ.value) { champ.value = ''; dessiner(); }
});







(function ecrire() {
  const cal = $('ecrit');
  if (!cal || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let hi = 0, ci = EXEMPLES[0].length, efface = true;
  const tick = () => {
    const mot = EXEMPLES[hi];
    if (!efface) {
      ci++;
      cal.textContent = mot.slice(0, ci);
      if (ci >= mot.length) { efface = true; return setTimeout(tick, 1500); }
      return setTimeout(tick, 35 + Math.random() * 25);
    }
    ci--;
    cal.textContent = mot.slice(0, ci);
    if (ci <= 0) { efface = false; hi = (hi + 1) % EXEMPLES.length; return setTimeout(tick, 380); }
    setTimeout(tick, 20);
  };
  setTimeout(tick, 1800);
})();

 
let io = null;
function observerRevele() {
  if (!('IntersectionObserver' in window)) { document.querySelectorAll('.revele').forEach((x) => x.classList.add('est-vu')); return; }
  if (!io) io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('est-vu'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.revele:not(.est-vu)').forEach((x, i) => { x.style.transitionDelay = Math.min(i, 6) * 45 + 'ms'; io.observe(x); });
}

 
function placerBateau() {
  const liens = [...document.querySelectorAll('#route a')];
  const rubs = RUBRIQUES.map((r) => document.getElementById(r.id)).filter(Boolean);
  if (!rubs.length) return;
  const repere = scrollY + innerHeight * 0.35;
  let courante = rubs[0];
  rubs.forEach((s) => { if (s.getBoundingClientRect().top + scrollY <= repere) courante = s; });
  liens.forEach((a) => a.classList.toggle('est-vu', a.dataset.r === courante.id));
  


  const lien = liens.find((a) => a.dataset.r === courante.id);
  if (!lien) return;
  const i = rubs.indexOf(courante), suivante = rubs[i + 1];
  const haut = courante.getBoundingClientRect().top + scrollY;
  const bas = suivante ? suivante.getBoundingClientRect().top + scrollY : haut + courante.offsetHeight;
  const avance = Math.max(0, Math.min(1, (repere - haut) / Math.max(1, bas - haut)));
  const liSuivant = suivante ? liens.find((a) => a.dataset.r === suivante.id) : null;
  const y0 = lien.parentElement.offsetTop + lien.offsetHeight / 2;
  const y1 = liSuivant ? liSuivant.parentElement.offsetTop + liSuivant.offsetHeight / 2 : y0;
  const y = y0 + (y1 - y0) * avance;
  $('bateau').style.top = (y - 12) + 'px';
  $('fait').style.height = (y + 10) + 'px';
}
addEventListener('scroll', placerBateau, { passive: true });
addEventListener('resize', placerBateau);



const qAdresse = new URLSearchParams(location.search).get('q');
if (qAdresse) champ.value = qAdresse;
dessiner();
if (location.hash) {
  const cible = document.getElementById(location.hash.slice(1));
  if (cible) setTimeout(() => cible.scrollIntoView({ block: 'center' }), 80);
}

  }

  class RdrFaq extends HTMLElement {
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
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!D || !Array.isArray(D.questions) || !Array.isArray(D.rubriques) || !D.questions.length) {
        if (!this.firstChild) this.innerHTML = '<div class="rfq-attente" aria-hidden="true"></div>';
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="faq-page">' + PAGE + '</div>';
      if (en) { traduire(this); prefixerLiens(this); }
      try { demarrer(D); } catch (e) { console.error('[rdr-faq]', e); }
      if (en) {
        traduire(this); prefixerLiens(this);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (m.type === 'characterData') { const n = m.target; if (n.parentElement && n.parentElement.id === 'ecrit') return; const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; return; }
          m.addedNodes.forEach((n) => { if (n.nodeType === 1) { traduire(n); prefixerLiens(n); } else if (n.nodeType === 3 && !(n.parentElement && n.parentElement.id === 'ecrit')) { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; } });
        }));
        this._obs.observe(this, { childList: true, subtree: true, characterData: true });
      }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang();
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (j && j.questions) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="rfq-vide"><h3>' + (en ? 'The FAQ will be back in a moment' : 'La FAQ revient dans un instant') + '</h3><p>' + (en ? 'The questions could not be loaded.' : 'Les questions n\u2019ont pas pu être chargées.') + '</p><button type="button">' + (en ? 'Try again' : 'Réessayer') + '</button></div>';
      this.querySelector('button').addEventListener('click', () => { this.innerHTML = '<div class="rfq-attente" aria-hidden="true"></div>'; this._chercher(); });
    }
  }
  customElements.define("rdr-faq", RdrFaq);
})();
})();
