/* rdr-elements console | source route-du-rhum d0565e2 | rdr-console.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["console"]="d0565e2";performance.mark("rdr-elements:console")}catch(e){}
;(function(){
(function () {
  'use strict';

  var STYLE_ID = 'rdrc-styles';

   
  var CLASS_COLORS = {
    'Ultim': '#429991', 'Ocean Fifty': '#72b9f1', 'Class40': '#7e93ef',
    'IMOCA': '#76bcbe', 'Vintage Mono': '#d9c93a', 'Vintage Multi': '#f19f39'
  };

   
  var INSTA_COMPTE = 'route_du_rhum';
  var INSTA_FOLLOWERS_URL = 'https://www.instagram.com/' + INSTA_COMPTE + '/followers/';

  


  var VIEWS = [
    { id: 'audience', label: 'Audience' },
    { id: 'contenu',  label: 'Contenu' },
    { id: 'profils',  label: 'Profils' },
    { id: 'insta',    label: 'Instagram' },
    { id: 'village',  label: 'Village' },
    { id: 'jeux',     label: 'Jeux concours', groupe: true }
  ];

  



  var JEUX = [
    { id: 'justetemps', nom: 'Le Juste Temps', panneau: '_justeTempsHtml' },
    { id: 'mobilite',   nom: 'Challenge Mobilité', panneau: '_mobiliteHtml' },
    { id: 'photo',      nom: 'Challenge photo', panneau: '_photoHtml' },
    { id: 'roue',       nom: 'Jeu de la roue', panneau: '_roueHtml' }
  ];
  function jeuDe(id) {
    for (var i = 0; i < JEUX.length; i++) if (JEUX[i].id === id) return JEUX[i];
    return null;
  }
  

  var ALIAS_VUES = {
    'le-juste-temps': 'justetemps', 'juste-temps': 'justetemps',
    'challenge-mobilite': 'mobilite', 'concours-photo': 'photo', 'challenge-photo': 'photo', 'jeu-de-la-roue': 'roue'
  };
  function vueCanonique(v, dernierJeu) {
    var x = String(v || '');
    if (Object.prototype.hasOwnProperty.call(ALIAS_VUES, x)) x = ALIAS_VUES[x];
    if (x === 'jeux') x = jeuDe(dernierJeu) ? dernierJeu : JEUX[0].id;
    return x;
  }
  

  var CLE_DERNIER_JEU = 'rdrcDernierJeu';
  function lireDernierJeu() {
    try { var v = window.localStorage.getItem(CLE_DERNIER_JEU); return jeuDe(v) ? v : ''; } catch (e) { return ''; }
  }
  function garderDernierJeu(id) {
    try { window.localStorage.setItem(CLE_DERNIER_JEU, id); } catch (e) {   }
  }
  function survolPossible() {
    try { return window.matchMedia('(hover: hover) and (pointer: fine)').matches; } catch (e) { return false; }
  }

  



  var JT_REPERES_2022 = {
    'Ultim': 6 * 86400 + 19 * 3600 + 47 * 60, 'Ocean Fifty': 10 * 86400 + 21 * 3600 + 35 * 60,
    'IMOCA': 11 * 86400 + 17 * 3600 + 36 * 60, 'Class40': 14 * 86400 + 3 * 3600 + 8 * 60,
    'Vintage Mono': 16 * 86400 + 13 * 3600 + 57 * 60, 'Vintage Multi': 16 * 86400 + 6 * 3600 + 37 * 60
  };

   
  var CANAL_LABELS = {
    organic_search: 'Recherche Google', direct: 'Accès direct', social: 'Réseaux sociaux',
    referral: 'Sites référents', email_marketing: 'E-mailing', paid: 'Publicité', paid_ads: 'Publicité',
    wix_automations: 'Automatisations Wix', ai_platform: 'Assistants IA', inconnu: 'Non identifié'
  };
  var APPAREIL_LABELS = { mobile: 'Mobile', desktop: 'Ordinateur', tablet: 'Tablette', inconnu: 'Inconnu' };
   
  var ROBOT_LABELS = {
    chatgptUtilisateur: 'ChatGPT, pour répondre à une question', perplexityUtilisateur: 'Perplexity, pour répondre à une question',
    openaiRecherche: 'OpenAI, index de recherche', openaiEntrainement: 'OpenAI, entraînement',
    claudeEntrainement: 'Claude, entraînement', perplexityEntrainement: 'Perplexity, entraînement',
    amazonEntrainement: 'Amazon, entraînement', metaEntrainement: 'Meta, entraînement',
    googleEntrainement: 'Google Gemini, entraînement'
  };

   
   
   
   
   
   
  var RDR_LOGO = 'https://static.wixstatic.com/shapes/7bb303_520140cd1a1e4d5faab4c5ab489ab525.svg';

  var CSS = [
    


    'rdr-console{',
    '--navy:#0A1A35;--teal:#00676E;--teal-soft:#E4F0F0;--line:#E1E6EE;--line-2:#EEF2F7;',
    '--ink:#16233A;--ink-2:#45536E;--ink-3:#7B8AA0;--bg:#EEF2F7;',
    '--ok:#1E8E5A;--no:#C0392B;--warn:#B3541E;--amber:#F19F39;--teal-lite:#5DBFC0;',
    "--body:'Montserrat',system-ui,-apple-system,sans-serif;",
    "--display:'Varien',Georgia,serif;",
    




    'display:block;font-family:var(--body);color:var(--ink);font-size:13px;',
    'padding:0 clamp(8px,2vw,24px)}',
    'rdr-console *{box-sizing:border-box}',

    










    '.rdrc-app{background:#fff;border:1px solid #D7DEE9;border-radius:14px;overflow:hidden;',
    'max-width:1180px;margin-inline:auto;',
    'box-shadow:0 1px 2px rgba(10,26,53,.05),0 10px 30px -12px rgba(10,26,53,.22)}',

    

    '.rdrc-bar{display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding:13px 18px;',
    'background:var(--navy);border-bottom:2px solid var(--amber)}',
    '.rdrc-brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}',
    


    '.rdrc-logo{flex:0 0 auto;width:52px;height:52px;border-radius:12px 3px 12px 3px;display:block;object-fit:contain}',
    '.rdrc-mark{flex:0 0 auto;width:52px;height:52px;border-radius:12px 3px 12px 3px;background:#12294A;color:var(--amber);',
    'display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;letter-spacing:.04em}',
    '.rdrc-kick{font-size:9px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--teal-lite);margin:0 0 3px}',
    '.rdrc-brand-t{font-family:var(--display);font-style:italic;text-transform:uppercase;font-size:20px;',
    'line-height:1;letter-spacing:.005em;color:#fff;margin:0;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}',
    '.rdrc-brand-sep{color:rgba(255,255,255,.28);font-style:normal}',
    '.rdrc-brand-dest{color:var(--amber)}',
    '.rdrc-bar-r{display:flex;align-items:center;gap:10px;flex:0 0 auto}',
    '.rdrc-stamp{font-size:11px;color:rgba(255,255,255,.55);font-weight:600}',
    

    '.rdrc-stamp.is-perime{display:inline-flex;align-items:center;gap:6px;color:#FFCF6B;font-weight:700}',
    '.rdrc-stamp.is-perime svg{width:14px;height:14px;flex:0 0 auto}',

     
    '.rdrc-alerte{display:flex;align-items:flex-start;gap:11px;margin:0 0 14px;padding:12px 15px;',
    'background:#FFF6E6;border:1px solid #F0D398;border-radius:10px;font-size:12px;line-height:1.55;color:var(--ink-2)}',
    '.rdrc-alerte b{color:var(--navy);display:block}',
    '.rdrc-alerte b:not(:first-child){display:inline}',
    '.rdrc-alerte-ic{flex:0 0 auto;color:var(--warn)}',
    '.rdrc-alerte-ic svg{width:17px;height:17px;display:block}',
    '.rdrc-alerte.is-depasse{background:#FCEDEB;border-color:#F2C4BE}',
    '.rdrc-alerte.is-depasse .rdrc-alerte-ic{color:var(--no)}',
     
    '.rdrc-refresh{border:1px solid rgba(255,255,255,.22);background:transparent;color:rgba(255,255,255,.88);',
    'font:inherit;font-size:12px;font-weight:700;padding:7px 13px;border-radius:9px;cursor:pointer}',
    '.rdrc-refresh:hover{background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.4)}',
    '.rdrc-refresh:disabled{opacity:.4;cursor:default}',
    '.rdrc-refresh:focus-visible,.rdrc-export:focus-visible{outline:2px solid var(--amber);outline-offset:2px}',

    







    '.rdrc-nav{display:flex;gap:2px;padding:0 10px;border-bottom:1px solid var(--line);background:var(--bg);',
    'overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none}',
    '.rdrc-nav::-webkit-scrollbar{display:none}',
    '.rdrc-tab{position:relative;border:0;background:none;font:inherit;font-size:12.5px;font-weight:700;color:var(--ink-3);',
    'padding:11px 14px 10px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:7px;',
    'border-bottom:2px solid transparent;margin-bottom:-1px}',
    '.rdrc-tab:hover{color:var(--navy)}',
    '.rdrc-tab[aria-selected="true"]{color:var(--navy);border-bottom-color:var(--teal)}',
    '.rdrc-tab[disabled]{opacity:.45;cursor:default}',
    '.rdrc-tab:focus-visible{outline:2px solid var(--teal);outline-offset:-2px}',
    '.rdrc-badge{font-size:10px;font-weight:800;line-height:1;padding:3px 6px;border-radius:999px;background:var(--no);color:#fff}',
    '.rdrc-badge[data-zero="1"]{background:var(--line);color:var(--ink-3)}',

    




    '.rdrc-navwrap{position:relative}',
    '.rdrc-caret{width:12px;height:12px;flex:0 0 auto;transition:transform .15s ease}',
    '.rdrc-tab[aria-expanded="true"] .rdrc-caret{transform:rotate(180deg)}',
    '.rdrc-tab[aria-expanded="true"]{color:var(--navy)}',
    '.rdrc-menu{position:absolute;top:calc(100% - 3px);left:0;z-index:30;min-width:260px;padding:6px;display:grid;gap:2px;',
    'background:#fff;border:1px solid #D7DEE9;border-radius:12px 3px 12px 3px;box-shadow:0 16px 36px -14px rgba(10,26,53,.4)}',
    '.rdrc-menu[hidden]{display:none}',
    '.rdrc-menu-k{margin:4px 10px 6px;font-size:9.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)}',
    '.rdrc-menu-i{appearance:none;-webkit-appearance:none;border:0;background:none;font:inherit;font-size:13px;font-weight:700;color:var(--ink-2);',
    'text-align:left;cursor:pointer;padding:10px 12px;border-radius:8px 2px 8px 2px;display:flex;align-items:center;justify-content:space-between;gap:14px}',
    '.rdrc-menu-i:hover{background:var(--bg);color:var(--navy)}',
    '.rdrc-menu-i:focus-visible{outline:2px solid var(--teal);outline-offset:-2px;background:var(--bg);color:var(--navy)}',
    '.rdrc-menu-i[aria-current="true"]{background:var(--teal-soft);color:var(--navy)}',
    '.rdrc-menu-i small{font-size:10px;font-weight:700;color:var(--ink-3);white-space:nowrap}',
    '.rdrc-jeu-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:12px 18px;flex-wrap:wrap;margin:0 0 16px}',
    '.rdrc-jeu-k{margin:0 0 4px;font-size:9.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--teal)}',
    '.rdrc-jeu-t{margin:0;font-family:var(--display);font-style:italic;font-weight:400;text-transform:uppercase;font-size:24px;line-height:1.05;color:var(--navy)}',
    '.rdrc-jeu-tete .rdrc-sub{margin:0}',

    

    '.rdrc-body{padding:18px;background:var(--bg)}',
    '.rdrc-state{padding:44px 18px;text-align:center;color:var(--ink-3);font-size:13px}',
    '.rdrc-state b{display:block;color:var(--navy);font-size:15px;margin-bottom:5px}',
    '.rdrc-err{padding:14px 16px;color:var(--no);font-size:13px;font-weight:600;background:#FCEDEB;',
    'border:1px solid #F2C4BE;border-radius:10px}',

     
    '.rdrc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}',
    '.rdrc-card{background:#fff;border:1px solid #DCE3ED;border-radius:12px;padding:14px 15px 15px;min-width:0;',
    'box-shadow:0 1px 2px rgba(10,26,53,.05)}',
    '.rdrc-card--wide{grid-column:1 / -1}',
    '.rdrc-card-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:0 0 12px}',
    '.rdrc-card-t{font-size:12.5px;font-weight:800;color:var(--navy);margin:0}',
    '.rdrc-card-s{font-size:10.5px;color:var(--ink-3);font-weight:600;text-align:right}',

     
    



    '.rdrc-kpis{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-bottom:16px}',
    '.rdrc-kpi{position:relative;overflow:hidden;border:1px solid #DCE3ED;border-radius:12px 3px 12px 3px;',
    'padding:13px 14px 12px;min-width:0;background:#fff;box-shadow:0 1px 2px rgba(10,26,53,.05)}',
    '.rdrc-kpi::before{content:"";position:absolute;inset:0 0 auto 0;height:3px;background:var(--teal);opacity:.55}',
    '.rdrc-kpi-l{font-size:9.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:0 0 7px}',
    '.rdrc-kpi-line{display:flex;align-items:baseline;gap:3px}',
    '.rdrc-kpi-v{font-size:27px;font-weight:800;color:var(--navy);line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em}',
    '.rdrc-kpi-u{font-size:12px;font-weight:700;color:var(--ink-3)}',
    '.rdrc-kpi-sub{font-size:10.5px;color:var(--ink-3);font-weight:600;margin-top:6px;line-height:1.4}',
    '.rdrc-kpi-sub b{color:var(--teal)}',
    '.rdrc-kpi--lead{background:var(--navy);border-color:var(--navy)}',
    '.rdrc-kpi--lead::before{background:#FCF150;opacity:1}',
    '.rdrc-kpi--lead .rdrc-kpi-l{color:rgba(255,255,255,.62)}',
    '.rdrc-kpi--lead .rdrc-kpi-v{color:#fff}',
    '.rdrc-kpi--lead .rdrc-kpi-u{color:rgba(255,255,255,.55)}',
    '.rdrc-kpi--lead .rdrc-kpi-sub{color:rgba(255,255,255,.7)}',
    '.rdrc-kpi--lead .rdrc-kpi-sub b{color:#FCF150}',
    '.rdrc-kpi--alert::before{background:var(--no);opacity:1}',
    '.rdrc-kpi--alert .rdrc-kpi-v{color:var(--no)}',

     
    '.rdrc-hb{display:flex;flex-direction:column;gap:1px}',
    '.rdrc-hb-row{display:grid;grid-template-columns:minmax(78px,auto) 1fr auto;align-items:center;gap:10px;',
    'padding:5px 7px;border-radius:7px 2px 7px 2px}',
    '.rdrc-hb-row:nth-child(odd){background:var(--bg)}',
    '.rdrc-hb-row.is-lead{background:var(--teal-soft)}',
    '.rdrc-hb-row.is-lead .rdrc-hb-l,.rdrc-hb-row.is-lead .rdrc-hb-v{color:var(--navy);font-weight:800}',
    '.rdrc-hb-l{font-size:11.5px;font-weight:700;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.rdrc-hb-t{height:8px;border-radius:4px;background:rgba(10,26,53,.07);overflow:hidden;min-width:0}',
    '.rdrc-hb-f{height:100%;border-radius:4px;background:var(--teal);display:block}',
    '.rdrc-hb-v{font-size:11.5px;font-weight:800;color:var(--navy);font-variant-numeric:tabular-nums;white-space:nowrap}',
    '.rdrc-hb-v i{font-style:normal;font-weight:600;color:var(--ink-3);margin-left:5px}',
    '.rdrc-hb-row.is-zero .rdrc-hb-l,.rdrc-hb-row.is-zero .rdrc-hb-v{color:var(--ink-3);font-weight:600}',

     
    '.rdrc-chart{width:100%;height:auto;display:block;overflow:visible}',
    '.rdrc-chart .grid{stroke:rgba(10,26,53,.09);stroke-width:1}',
    '.rdrc-chart .axis{font-size:8px;font-weight:700;fill:var(--ink-3);font-family:var(--body)}',
    '.rdrc-chart .bar{fill:var(--teal)}',
    '.rdrc-chart .bar-peak{fill:var(--navy)}',
    '.rdrc-chart .bar-empty{fill:rgba(10,26,53,.08)}',
    '.rdrc-chart .lbl{font-size:8.5px;font-weight:700;fill:var(--ink-3);font-family:var(--body)}',
    '.rdrc-chart .lbl-last{fill:var(--navy);font-weight:800}',
    '.rdrc-chart .val{font-size:9px;font-weight:800;fill:var(--ink-2);font-family:var(--body)}',
    '.rdrc-chart .val-peak{fill:var(--navy)}',
    '.rdrc-chart .area{fill:url(#rdrcArea)}',
    '.rdrc-chart .line{fill:none;stroke:var(--teal);stroke-width:2.4;stroke-linejoin:round;stroke-linecap:round}',
    '.rdrc-chart .dot{fill:var(--teal)}',
    '.rdrc-chart .dot-ghost{fill:transparent}',
    '.rdrc-chart .dot-last{fill:var(--navy);stroke:#fff;stroke-width:2.4}',

    


    '.rdrc-seg-row{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;margin:0 0 14px}',
    '.rdrc-seg{display:inline-flex;gap:2px;padding:3px;background:rgba(10,26,53,.07);border-radius:999px}',
    '.rdrc-seg button{appearance:none;-webkit-appearance:none;border:0;background:transparent;font:700 12.5px/1 var(--body);' +
      'color:var(--ink-2);padding:9px 15px;border-radius:999px;cursor:pointer;letter-spacing:.02em;transition:background .15s,color .15s}',
    '.rdrc-seg button:hover:not([aria-pressed="true"]){background:rgba(255,255,255,.7);color:var(--navy)}',
    '.rdrc-seg button[aria-pressed="true"]{background:var(--navy);color:#fff;box-shadow:0 3px 8px -3px rgba(10,26,53,.55)}',
    '.rdrc-seg button:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',
    '.rdrc-seg-note{font:600 12px/1.45 var(--body);color:var(--ink-3);margin:0;max-width:46ch}',

    


    '.rdrc-tell{background:var(--navy);border-radius:16px;padding:20px 22px;margin:0 0 14px}',
    '.rdrc-tell-h{display:flex;align-items:center;gap:9px;margin:0 0 13px}',
    '.rdrc-tell-h svg{width:17px;height:17px;flex:none;color:#E0A83B}',
    '.rdrc-tell-h span{font:800 11px/1 var(--body);letter-spacing:.15em;text-transform:uppercase;color:#E0A83B}',
    '.rdrc-tell ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}',
    '.rdrc-tell li{font:500 14.5px/1.55 var(--body);color:rgba(255,255,255,.9);padding-left:19px;position:relative}',
    '.rdrc-tell li::before{content:"";position:absolute;left:0;top:.62em;width:7px;height:7px;border-radius:50%;background:#E0A83B}',
    '.rdrc-tell b{font-weight:800;color:#fff}',

     
    '.rdrc-card-ic{flex:0 0 auto;width:26px;height:26px;border-radius:8px 3px 8px 3px;background:var(--navy);',
    'color:#FCF150;display:grid;place-items:center}',
    '.rdrc-card-ic svg{width:14px;height:14px}',

     
    '.rdrc-sub{display:inline-flex;gap:4px;padding:4px;margin-bottom:16px;background:#E3E9F1;',
    'border:1px solid var(--line);border-radius:10px}',
    '.rdrc-subtab{border:0;background:none;font:inherit;font-size:12px;font-weight:700;color:var(--ink-3);',
    'padding:7px 13px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:7px}',
    '.rdrc-subtab:hover{color:var(--navy)}',
    '.rdrc-subtab[aria-selected="true"]{background:var(--navy);color:#fff;box-shadow:0 2px 6px rgba(10,26,53,.28)}',
    '.rdrc-subtab:focus-visible{outline:2px solid var(--teal);outline-offset:-2px}',
    '.rdrc-subn{font-size:10px;font-weight:800;line-height:1;padding:3px 6px;border-radius:999px;',
    'background:rgba(10,26,53,.08);color:var(--ink-2)}',
    '.rdrc-subtab[aria-selected="true"] .rdrc-subn{background:rgba(255,255,255,.22);color:#fff}',
    '.rdrc-tick{flex:0 0 auto;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;',
    'background:rgba(30,142,90,.12);color:var(--ok)}',
    '.rdrc-tick svg{width:12px;height:12px}',

     
    '.rdrc-export{display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(255,255,255,.22);background:transparent;',
    'color:rgba(255,255,255,.88);font:inherit;font-size:12px;font-weight:700;padding:7px 13px;border-radius:9px;cursor:pointer}',
    '.rdrc-export:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.4);color:#fff}',
    '.rdrc-export svg{width:14px;height:14px}',
    '.rdrc-export:disabled{opacity:.35;cursor:default}',
    '.rdrc-export:disabled:hover{background:transparent;border-color:rgba(255,255,255,.22);color:rgba(255,255,255,.88)}',

     
    '.rdrc-ring{display:flex;align-items:center;gap:14px}',
    '.rdrc-ring svg{flex:0 0 auto}',
    '.rdrc-ring-bg{fill:none;stroke:rgba(10,26,53,.09);stroke-width:9}',
    '.rdrc-ring-fg{fill:none;stroke:var(--teal);stroke-width:9;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%}',
    '.rdrc-ring-n{font-size:19px;font-weight:800;fill:var(--navy);font-family:var(--body);font-variant-numeric:tabular-nums}',
    '.rdrc-ring-t{font-size:12px;color:var(--ink-2);line-height:1.45;font-weight:600}',

     
    '.rdrc-split{display:flex;height:26px;border-radius:7px;overflow:hidden;background:var(--line-2)}',
    '.rdrc-split span{display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:800;color:#fff}',
    '.rdrc-split-lg{display:flex;justify-content:space-between;margin-top:8px;font-size:11px;font-weight:700;color:var(--ink-2)}',
    '.rdrc-split-lg i{font-style:normal;display:inline-block;width:9px;height:9px;border-radius:3px;margin-right:5px}',

     
    'font-size:12.5px;line-height:1.55;color:var(--ink-2)}',
    'font-size:12px;font-weight:700;padding:8px 14px;border-radius:9px;cursor:pointer}',

    

    '.rdrc-funnel{display:flex;align-items:center;gap:14px;flex-wrap:wrap;',
    'padding:14px 16px;background:var(--teal-soft);border-radius:10px 3px 10px 3px}',
    '.rdrc-funnel-step{display:flex;flex-direction:column;gap:2px;min-width:0}',
    '.rdrc-funnel-step b{font-size:26px;font-weight:800;color:var(--navy);line-height:1;font-variant-numeric:tabular-nums}',
    '.rdrc-funnel-step span{font-size:11px;font-weight:600;color:var(--ink-2)}',
    '.rdrc-funnel-step.is-end b{color:var(--teal)}',
    '.rdrc-funnel-arrow{flex:0 0 auto;color:var(--ink-3)}',
    '.rdrc-funnel-arrow svg{width:18px;height:18px;display:block}',
    '.rdrc-funnel-rate{margin-left:auto;flex:0 0 auto;font-size:13px;font-weight:800;color:#fff;',
    'background:var(--teal);padding:6px 12px;border-radius:999px;font-variant-numeric:tabular-nums}',

     
    '.rdrc-flow{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px}',
    '.rdrc-flow li{display:flex;align-items:center;gap:9px;padding:7px 9px;border-radius:7px 2px 7px 2px;',
    'font-size:12px;font-weight:700;color:var(--ink-2)}',
    '.rdrc-flow li:nth-child(odd){background:var(--bg)}',
    '.rdrc-flow li svg{width:14px;height:14px;flex:0 0 auto;color:var(--ink-3)}',
    '.rdrc-flow li span:last-of-type{color:var(--teal);font-weight:800}',
    '.rdrc-flow li b{margin-left:auto;color:var(--navy);font-weight:800;font-variant-numeric:tabular-nums}',

     
    

    '.rdrc-arts{display:flex;flex-direction:column;gap:1px}',
    '.rdrc-art{display:grid;grid-template-columns:26px minmax(0,1fr) 62px 62px 52px;align-items:center;gap:10px;',
    'padding:7px 8px;border-radius:7px 2px 7px 2px;font-size:12px}',
    '.rdrc-art:nth-child(odd){background:var(--bg)}',
    '.rdrc-art.is-lead{background:var(--teal-soft)}',
    '.rdrc-art-r{font-size:11px;font-weight:800;color:var(--ink-3);text-align:center}',
    '.rdrc-art.is-lead .rdrc-art-r{color:var(--teal)}',
    '.rdrc-art-t{font-weight:700;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.rdrc-art.is-lead .rdrc-art-t{color:var(--navy);font-weight:800}',
    



    '.rdrc-art--libre{align-items:start;padding-top:12px;padding-bottom:12px}',
    '.rdrc-art--libre .rdrc-art-t{white-space:normal;overflow:visible;text-overflow:clip;line-height:1.5}',
    '.rdrc-art--libre .rdrc-art-s{align-self:start}',
    '.rdrc-art-v,.rdrc-art-l,.rdrc-art-s{text-align:right;font-weight:800;color:var(--navy);',
    'font-variant-numeric:tabular-nums;white-space:nowrap}',
    '.rdrc-art-l,.rdrc-art-s{color:var(--ink-2);font-weight:700}',
    '.rdrc-art i{display:block;font-style:normal;font-size:9px;font-weight:600;color:var(--ink-3);',
    'text-transform:uppercase;letter-spacing:.06em;margin-top:1px}',
    '@media(max-width:640px){.rdrc-art{grid-template-columns:22px minmax(0,1fr) 54px}',
    '.rdrc-art-l,.rdrc-art-s{display:none}}',

     
    '.rdrc-note-act{display:block;margin-top:11px}',
    '.rdrc-goto{border:1px solid var(--line);background:#fff;color:var(--navy);font:inherit;',
    'font-size:12px;font-weight:700;padding:8px 14px;border-radius:9px;cursor:pointer}',
    '.rdrc-goto:hover{background:var(--navy);border-color:var(--navy);color:#fff}',
    '.rdrc-goto:disabled{opacity:.5;cursor:default}',
    '.rdrc-goto:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',

    '.rdrc-note{margin:14px 0 0;padding:11px 13px;background:#fff;border:1px solid #DCE3ED;',
    'border-radius:10px;font-size:11.5px;line-height:1.5;color:var(--ink-2)}',
    '.rdrc-note b{color:var(--navy)}',

     
    '.rdrc-help{margin:0 0 12px;font-size:11.5px;line-height:1.5;color:var(--ink-3)}',

     
    '.rdrc-methode{margin:0 0 14px;padding:13px 15px;background:#fff;border:1px solid #DCE3ED;',
    'border-left:3px solid var(--teal);border-radius:10px}',
    '.rdrc-methode-t{margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:.1em;',
    'text-transform:uppercase;color:var(--teal)}',
    '.rdrc-methode-l{margin:0;padding-left:18px;font-size:12px;line-height:1.7;color:var(--ink-2)}',
    '.rdrc-methode-l b{color:var(--navy)}',
    '.rdrc-methode-l a{color:var(--navy);font-weight:700}',
    '.rdrc-methode-l a svg{width:11px;height:11px;margin-left:3px;vertical-align:-1px}',
    '.rdrc-methode-n{margin:10px 0 0;font-size:11px;line-height:1.5;color:var(--ink-3)}',

     
    '.rdrc-pseudo-line{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.rdrc-copy{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--line);background:#fff;',
    'color:var(--ink-3);font:inherit;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:999px;cursor:pointer}',
    '.rdrc-copy svg{width:12px;height:12px}',
    '.rdrc-copy:hover{color:var(--navy);border-color:var(--ink-3)}',
    '.rdrc-copy:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',
    '.rdrc-copy.is-done{color:var(--ok);border-color:rgba(30,142,90,.45);background:rgba(30,142,90,.08)}',
    '.rdrc-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}',
    '.rdrc-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:14px 16px;background:#fff;' + 'border:1px solid #DCE3ED;border-radius:12px 3px 12px 3px;box-shadow:0 1px 2px rgba(10,26,53,.05);' + 'transition:box-shadow .16s ease,border-color .16s ease}',
    '.rdrc-row:hover{border-color:#C3CFDF;box-shadow:0 3px 10px rgba(10,26,53,.09)}',
    '.rdrc-who{flex:1 1 210px;min-width:0}',
    '.rdrc-pseudo{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:800;color:var(--navy);',
    'text-decoration:none;word-break:break-all}',
    '.rdrc-pseudo:hover{color:var(--teal);text-decoration:underline}',
    '.rdrc-pseudo svg{width:12px;height:12px;flex:0 0 auto;opacity:.6}',
    '.rdrc-meta{font-size:11px;color:var(--ink-3);font-weight:600;margin-top:3px}',
    '.rdrc-warn{color:var(--warn)}',
    '.rdrc-acts{flex:0 0 auto;display:flex;gap:8px}',
    '.rdrc-btn{border:1px solid var(--line);background:#fff;font:inherit;font-size:12px;font-weight:800;',
    'padding:8px 14px;border-radius:9px;cursor:pointer}',
    '.rdrc-ok{border-color:var(--ok);color:var(--ok)}.rdrc-ok:hover{background:var(--ok);color:#fff}',
    '.rdrc-no{border-color:var(--no);color:var(--no)}.rdrc-no:hover{background:var(--no);color:#fff}',
    '.rdrc-btn:disabled{opacity:.45;cursor:default}',
    '.rdrc-btn:disabled:hover{background:#fff;color:inherit}',

    






    '.rdrc-toast{display:flex;align-items:flex-start;gap:10px;margin:0;padding:11px 15px;',
    'border-bottom:1px solid var(--line);font-size:12.5px;line-height:1.5;font-weight:600;',
    'background:#E8F5EE;color:#14603D}',
    '.rdrc-toast.is-err{background:#FCEDEB;color:#8E2B20}',
    '.rdrc-toast-ic{flex:0 0 auto;margin-top:1px}',
    '.rdrc-toast-ic svg{width:16px;height:16px;display:block}',
    '.rdrc-toast-x{margin-left:auto;flex:0 0 auto;border:0;background:none;font:inherit;font-size:15px;',
    'line-height:1;color:inherit;opacity:.55;cursor:pointer;padding:2px 3px}',
    '.rdrc-toast-x:hover{opacity:1}',
    '.rdrc-toast-x:focus-visible{outline:2px solid currentColor;outline-offset:2px;border-radius:4px}',

    '@media(max-width:900px){.rdrc-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}',
    '.rdrc-grid{grid-template-columns:minmax(0,1fr)}}',
     
    '.rdrc-jours{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px}',
    '.rdrc-jour{appearance:none;border:1px solid var(--line);background:#fff;border-radius:10px;padding:7px 9px;min-width:64px;',
    'font:700 11.5px/1.2 var(--body);color:var(--ink-2);cursor:pointer;text-align:center;display:grid;gap:3px}',
    '.rdrc-jour small{font:600 10px/1 var(--body);color:var(--ink-3)}',
    '.rdrc-jour[aria-pressed="true"]{background:var(--navy);border-color:var(--navy);color:#fff}',
    '.rdrc-jour[aria-pressed="true"] small{color:rgba(255,255,255,.7)}',
    '.rdrc-jour[data-tire="1"]{border-color:var(--ok)}',
    '.rdrc-jour[data-tire="1"] small{color:var(--ok)}',
    '.rdrc-jour[aria-pressed="true"][data-tire="1"] small{color:#8CE0B5}',
    '.rdrc-mob{display:grid;grid-template-columns:42px minmax(0,1.4fr) minmax(0,1fr) 96px auto;align-items:center;gap:10px;',
    'padding:9px 10px;border:1px solid var(--line-2);border-radius:10px;background:#fff;margin:0 0 6px;font-size:12.5px}',
    '.rdrc-mob-id{font:800 10px/1.2 var(--body);color:var(--ink-3);letter-spacing:.04em}',
    '.rdrc-mob-nom{font-weight:700;color:var(--ink)}.rdrc-mob-nom small{display:block;font-weight:500;color:var(--ink-3);font-size:11px;margin-top:2px}',
    '.rdrc-mob-mode{color:var(--ink-2)}.rdrc-mob-mode a{color:var(--teal);font-weight:700;text-decoration:underline;text-underline-offset:2px;display:block;font-size:11.5px;margin-top:2px}',
    '.rdrc-mob-st{font:800 10px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;padding:6px 8px;border-radius:999px;text-align:center;white-space:nowrap}',
    '.rdrc-mob-st[data-s="À vérifier"]{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-mob-st[data-s="Validé"]{background:#E1F5EA;color:var(--ok)}',
    '.rdrc-mob-st[data-s="Refusé"]{background:#FBE3E0;color:var(--no)}',
    '.rdrc-mob-st[data-s="Exclue"]{background:#EEF2F7;color:var(--ink-3)}',
    '.rdrc-mob-acts{display:flex;gap:6px;justify-content:flex-end}.rdrc-mob-acts .rdrc-btn{padding:6px 10px;font-size:11px}',
    '.rdrc-mob[data-gagnant="1"]{border-color:var(--amber);background:#FFFBEE}',
    '.rdrc-mob-trophee{color:var(--amber);font-weight:800;font-size:11px}',
    '.rdrc-tirage{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:14px;border:1px solid var(--line);border-radius:12px;background:#fff}',
    '.rdrc-tirage-t{flex:1 1 220px;font-size:13px;color:var(--ink-2)}.rdrc-tirage-t b{color:var(--ink)}',
    '.rdrc-tirage .rdrc-btn.rdrc-go{border-color:var(--navy);background:var(--navy);color:#fff}',
    '.rdrc-tirage .rdrc-btn.rdrc-go:hover{background:#12294A}',
    '.rdrc-gagnant{padding:14px;border-radius:12px;background:#FFFBEE;border:1px solid var(--amber)}',
    '.rdrc-gagnant b{font-size:15px;color:var(--ink)}.rdrc-gagnant p{margin:6px 0 0;font-size:12.5px;color:var(--ink-2)}',
    '.rdrc-gagnant .rdrc-mob-acts{justify-content:flex-start;margin-top:10px}',
    '@media(max-width:760px){.rdrc-mob{grid-template-columns:minmax(0,1fr) auto}.rdrc-mob-id,.rdrc-mob-mode{grid-column:1/-1}}',
     
    '.rdrc-mob-q{flex:1 1 100%;font-size:12.5px;color:var(--ink);font-weight:600}',
    '.rdrc-mob-equipe{display:inline-block;margin-left:4px;padding:2px 6px;border-radius:999px;background:#EEF2F7;color:var(--ink-3);font:800 9.5px/1.2 var(--body);letter-spacing:.06em;text-transform:uppercase;vertical-align:1px}',
    '.rdrc-mob-avis{margin:0 0 10px;padding:10px 12px;border-radius:10px;font-size:12.5px;line-height:1.45;display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px}',
    '.rdrc-mob-avis[data-ton="alerte"]{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-mob-avis[data-ton="info"]{background:var(--line-2);color:var(--ink-2)}',
    '.rdrc-lots{display:grid;gap:10px;margin:12px 0 0}',
    '.rdrc-lot{border:1px solid var(--line);border-radius:12px;background:#fff;overflow:hidden}',
    '.rdrc-lot-h{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;padding:9px 12px;background:var(--line-2)}',
    '.rdrc-lot-t{flex:1 1 260px;font-weight:700;font-size:12.5px;color:var(--ink);line-height:1.35}',
    '.rdrc-lot-n{font:800 11px/1 var(--body);color:var(--ink-3);white-space:nowrap}',
    '.rdrc-lot-a{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.rdrc-lot-a .rdrc-btn{padding:6px 10px;font-size:11px}',
    '.rdrc-lot-a .rdrc-btn.rdrc-go{border-color:var(--navy);background:var(--navy);color:#fff}',
    '.rdrc-place{display:grid;grid-template-columns:22px minmax(0,1fr) auto;align-items:center;gap:6px 10px;padding:8px 12px;border-top:1px solid var(--line-2);font-size:12.5px}',
    '.rdrc-place-n{font:800 11px/1 var(--body);color:var(--ink-3);text-align:center}',
    '.rdrc-place-g b{color:var(--ink)}.rdrc-place-g small{display:block;color:var(--ink-3);font-size:11px;margin-top:2px}',
    '.rdrc-place-vide{color:var(--ink-3);font-style:italic}',
    '.rdrc-place[data-statut="attribuee"]{background:#FFFBEE}',
    '.rdrc-place[data-statut="a-retirer"]{background:#FBE3E0}',
    '.rdrc-place-r{grid-column:2/-1;display:flex;flex-wrap:wrap;align-items:center;gap:6px}.rdrc-place-r .rdrc-btn{padding:6px 10px;font-size:11px}',
    '.rdrc-place-r .rdrc-btn.rdrc-go{border-color:var(--navy);background:var(--navy);color:#fff}',
    '@media(max-width:760px){.rdrc-place{grid-template-columns:22px minmax(0,1fr)}.rdrc-place .rdrc-mob-acts{grid-column:2/-1;justify-content:flex-start}}',
    

    '.rdrc-mob-outils{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 10px}',
    '.rdrc-mob-outils select,.rdrc-mob-outils input{font:600 12.5px/1.2 var(--body);color:var(--ink);border:1px solid var(--line);border-radius:9px;padding:8px 10px;background:#fff;min-height:36px;max-width:100%}',
    '.rdrc-mob-outils input{flex:1 1 240px;min-width:0}',
    '.rdrc-mob-outils select:focus-visible,.rdrc-mob-outils input:focus-visible{outline:2px solid var(--teal);outline-offset:1px}',
    '.rdrc-mob-compte{font-size:12px;color:var(--ink-3);margin:0 0 8px}',
    '.rdrc-mob-jourv{display:block;font:800 10.5px/1.2 var(--body);color:var(--teal);letter-spacing:.02em;margin:0 0 2px}',
    '.rdrc-mob-chaine{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;padding:14px 16px;margin:0 0 14px;border-radius:12px;background:var(--navy);color:#fff}',
    '.rdrc-mob-chaine p{margin:0;flex:1 1 260px;font-size:13px;line-height:1.45;color:rgba(255,255,255,.82)}.rdrc-mob-chaine p b{color:#fff}',
    '.rdrc-mob-chaine .rdrc-btn{background:var(--amber);border-color:var(--amber);color:var(--navy);padding:11px 18px;font-size:13px}',
    '.rdrc-mob-chaine .rdrc-btn:hover{background:#FFB65C;color:var(--navy)}',
    '.rdrc-mob-plus{display:flex;justify-content:center;margin:10px 0 0}',
    '.rdrc-ch{--navy:#0A1A35;--teal:#00676E;--teal-soft:#E4F0F0;--line:#E1E6EE;--line-2:#EEF2F7;--ink:#16233A;--ink-2:#45536E;--ink-3:#7B8AA0;',
    '--ok:#1E8E5A;--no:#C0392B;--warn:#B3541E;--amber:#F19F39;--teal-lite:#5DBFC0;' + "--body:'Montserrat',system-ui,-apple-system,sans-serif;",
    'position:fixed;inset:0;z-index:2147483100;display:flex;flex-direction:column;background:var(--navy);font-family:var(--body);color:var(--ink);font-size:13px}',
    '.rdrc-ch *{box-sizing:border-box}',
    '.rdrc-ch-h{flex:0 0 auto;display:flex;align-items:center;gap:10px 16px;padding:10px clamp(12px,2vw,24px);color:#fff}',
    '.rdrc-ch-t{font:800 10.5px/1.2 var(--body);letter-spacing:.14em;text-transform:uppercase;color:var(--teal-lite);white-space:nowrap}',
    '.rdrc-ch-n{font:800 15px/1.2 var(--body);white-space:nowrap}.rdrc-ch-n small{font-weight:600;font-size:12px;color:rgba(255,255,255,.65);margin-left:6px}',
    '.rdrc-ch-barre{flex:1 1 120px;height:6px;border-radius:99px;background:rgba(255,255,255,.16);overflow:hidden}',
    '.rdrc-ch-barre i{display:block;height:100%;background:var(--amber);transition:width .2s}',
    '.rdrc-ch-x{appearance:none;border:1px solid rgba(255,255,255,.35);background:none;color:#fff;border-radius:9px;padding:8px 12px;font:700 12px/1 var(--body);cursor:pointer;white-space:nowrap}',
    '.rdrc-ch-x:hover{background:rgba(255,255,255,.1)}.rdrc-ch-x:focus-visible{outline:2px solid var(--amber);outline-offset:2px}',
    '.rdrc-ch-c{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) clamp(300px,27vw,400px)}',
    '.rdrc-ch-vue{position:relative;min-height:0;background:#18263F;overflow:hidden}',
    '.rdrc-ch-f{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:12px}',
    '.rdrc-ch-f[data-etat="cache"]{visibility:hidden;pointer-events:none}',
    '.rdrc-ch-f img{display:block;max-width:100%;max-height:100%;object-fit:contain;cursor:zoom-in;transition:transform .15s;background:#fff}',
    '.rdrc-ch-f.is-zoom{overflow:auto;align-items:flex-start;justify-content:flex-start}',
    '.rdrc-ch-f.is-zoom img{max-width:none;max-height:none;cursor:zoom-out}',
    '.rdrc-ch-f iframe{display:block;width:100%;height:100%;border:0;border-radius:6px;background:#fff}',
    '.rdrc-ch-f-vide{color:rgba(255,255,255,.75);font-size:14px;text-align:center;max-width:340px;line-height:1.5}',
    '.rdrc-ch-out{position:absolute;left:12px;bottom:12px;z-index:2;display:flex;flex-wrap:wrap;gap:6px}',
    '.rdrc-ch-out button,.rdrc-ch-out a{appearance:none;border:0;border-radius:8px;background:rgba(10,26,53,.82);color:#fff;font:700 11.5px/1 var(--body);padding:8px 10px;cursor:pointer;text-decoration:none}',
    '.rdrc-ch-out button:hover,.rdrc-ch-out a:hover{background:var(--navy)}',
    '.rdrc-ch-p{min-height:0;overflow:auto;background:#fff;display:flex;flex-direction:column;padding:18px clamp(14px,1.4vw,20px)}',
    '.rdrc-ch-id{font:800 11px/1.2 var(--body);color:var(--ink-3);letter-spacing:.05em;display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.rdrc-ch-nom{font:800 clamp(17px,1.5vw,21px)/1.2 var(--body);color:var(--ink);margin:6px 0 0;overflow-wrap:anywhere}',
    '.rdrc-ch-dl{display:grid;grid-template-columns:auto minmax(0,1fr);gap:6px 12px;margin:14px 0;font-size:13px}',
    '.rdrc-ch-dl dt{color:var(--ink-3);font-weight:600}.rdrc-ch-dl dd{margin:0;font-weight:700;color:var(--ink);overflow-wrap:anywhere}',
    '.rdrc-ch-dl dd small{display:block;font-weight:500;color:var(--ink-3);font-size:11.5px;margin-top:1px}',
    '.rdrc-ch-regle{background:var(--teal-soft);border-radius:10px;padding:10px 12px;font-size:12.5px;line-height:1.45;color:var(--ink-2)}',
    '.rdrc-ch-regle b{display:block;color:var(--teal);font-size:10px;letter-spacing:.1em;text-transform:uppercase;margin:0 0 4px}',
    '.rdrc-ch-avis{margin:0 0 10px;padding:9px 11px;border-radius:9px;background:#FBE3E0;color:var(--no);font-size:12.5px;line-height:1.4;font-weight:600}',
    '.rdrc-ch-acts{margin-top:auto;padding-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px}',
    '.rdrc-ch-b{appearance:none;border:2px solid transparent;border-radius:12px;padding:13px 8px;font:800 15px/1.1 var(--body);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px}',
    '.rdrc-ch-b kbd{font:700 10.5px/1 var(--body);opacity:.72}',
    '.rdrc-ch-b:focus-visible{outline:3px solid var(--amber);outline-offset:2px}',
    '.rdrc-ch-b[data-v="Validé"]{grid-column:1/-1;background:var(--ok);color:#fff;padding:18px 8px;font-size:17px}',
    '.rdrc-ch-b[data-v="Validé"]:hover{background:#17784B}',
    '.rdrc-ch-b[data-v="Refusé"]{background:#FBE3E0;color:var(--no);border-color:#F2C2BC}',
    '.rdrc-ch-b[data-v="Exclue"]{background:var(--line-2);color:var(--ink-2);border-color:var(--line)}',
    '.rdrc-ch-b[data-v="Refusé"][data-arme="1"]{background:var(--no);color:#fff;border-color:var(--no)}',
    '.rdrc-ch-b[data-v="Exclue"][data-arme="1"]{background:var(--ink-2);color:#fff;border-color:var(--ink-2)}',
    '.rdrc-ch-b[data-v="passer"]{grid-column:1/-1;flex-direction:row;justify-content:center;gap:8px;background:#fff;border-color:var(--line);color:var(--ink-2);padding:10px 8px;font-size:13px}',
    '.rdrc-ch-q{grid-column:1/-1;margin:0;font-size:12.5px;font-weight:700;color:var(--no)}',
    '.rdrc-ch-pied{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:4px 10px;margin-top:2px}',
    '.rdrc-ch-annul{appearance:none;background:none;border:0;padding:6px 0;font:700 12px/1.2 var(--body);color:var(--teal);text-decoration:underline;text-underline-offset:2px;cursor:pointer}',
    '.rdrc-ch-annul:disabled{color:var(--ink-3);text-decoration:none;cursor:default}',
    '.rdrc-ch-touches{font-size:11px;color:var(--ink-3)}',
    '.rdrc-ch-fin{grid-column:1/-1;display:flex;align-items:center;justify-content:center;background:var(--line-2);padding:24px;min-height:0;overflow:auto}',
    '.rdrc-ch-fin-c{background:#fff;border-radius:16px;padding:28px;max-width:520px;width:100%;text-align:center}',
    '.rdrc-ch-fin-c h2{font:800 22px/1.2 var(--body);color:var(--ink);margin:0 0 10px}.rdrc-ch-fin-c p{margin:0 0 16px;color:var(--ink-2);font-size:14px;line-height:1.5}',
    '.rdrc-ch-fin-a{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}',
    '.rdrc-ch-fin-a .rdrc-ch-b{padding:12px 18px;font-size:14px}',
    '.rdrc-ch-fin-a .rdrc-ch-b[data-v="fermer"]{background:var(--navy);color:#fff}',
    '.rdrc-ch-fin-a .rdrc-ch-b[data-v="revoir"]{background:#fff;border-color:var(--line);color:var(--ink)}',
    '@media(max-height:780px){.rdrc-ch-h{padding-top:7px;padding-bottom:7px}.rdrc-ch-p{padding-top:12px;padding-bottom:12px}.rdrc-ch-dl{margin:10px 0;gap:4px 10px;font-size:12.5px}',
    '.rdrc-ch-b{padding:10px 8px}.rdrc-ch-b[data-v="Validé"]{padding:13px 8px}.rdrc-ch-regle{padding:8px 10px;font-size:12px}}',
    '@media(max-width:860px){.rdrc-ch-c{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(220px,1fr) auto}.rdrc-ch-p{max-height:58vh}.rdrc-ch-touches{display:none}}',

    




    '.rdrc-jt-tete{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 12px}',
    '.rdrc-jt-statut{display:inline-flex;align-items:center;gap:7px;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:800;background:var(--line-2);color:var(--ink-2)}',
    '.rdrc-jt-statut::before{content:"";width:8px;height:8px;border-radius:50%;background:currentColor;flex:0 0 auto}',
    '.rdrc-jt-statut[data-s="ouvert"]{background:#E1F5EA;color:var(--ok)}',
    '.rdrc-jt-statut[data-s="alerte"]{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-jt-tete small{font-size:11.5px;font-weight:600;color:var(--ink-3)}',
    '.rdrc-jt-etat{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:0}',
    '.rdrc-jt-f{background:var(--bg);border-radius:10px 3px 10px 3px;padding:10px 12px;min-width:0;margin:0}',
    '.rdrc-jt-f dt{font-size:9.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:0 0 5px}',
    '.rdrc-jt-f dd{margin:0;font-size:12.5px;font-weight:700;color:var(--navy);line-height:1.4}',
    '.rdrc-jt-f dd small{display:block;font-size:11px;font-weight:600;color:var(--ink-3);margin-top:2px}',
    '.rdrc-jt-f a{color:var(--teal);font-weight:800}',
    '.rdrc-jt-f[data-s="retenue"] dd{color:var(--ok)}',
    '.rdrc-jt-f[data-s="illisible"]{background:#FCEDEB}',
    '.rdrc-jt-defil{overflow:auto;max-height:min(70vh,620px);border:1px solid var(--line-2);border-radius:10px;background:#fff}',
    '.rdrc-jt-defil--libre{max-height:none}',
    '.rdrc-jt-t{width:100%;border-collapse:separate;border-spacing:0;font-size:11.5px;font-variant-numeric:tabular-nums}',
    '.rdrc-jt-t th{position:sticky;top:0;z-index:1;background:#F4F7FB;text-align:left;font-size:9.5px;font-weight:800;letter-spacing:.06em;',
    'text-transform:uppercase;color:var(--ink-3);padding:8px 9px;border-bottom:1px solid var(--line);white-space:nowrap}',
    '.rdrc-jt-t td{padding:7px 9px;border-bottom:1px solid var(--line-2);color:var(--ink-2);white-space:nowrap;vertical-align:middle}',
    '.rdrc-jt-t tbody tr:last-child td{border-bottom:0}',
    '.rdrc-jt-t tbody tr:nth-child(even) td{background:#FAFBFD}',
    '.rdrc-jt-t .rdrc-jt-num{text-align:right}',
    '.rdrc-jt-t .rdrc-jt-nom{font-weight:800;color:var(--navy);white-space:normal;min-width:200px}',
    '.rdrc-jt-nom small{display:block;font-weight:600;color:var(--ink-3);font-size:11px;margin-top:1px;overflow-wrap:anywhere}',
    '.rdrc-jt-t th.rdrc-jt-cl{white-space:normal}',
    '.rdrc-jt-mod{display:block;font-size:9px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--warn);margin-top:2px}',
    '.rdrc-jt-t .rdrc-jt-vide{color:var(--ink-3)}',
    '.rdrc-jt-pt{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}',
    '.rdrc-jt-tag{display:inline-block;margin-left:6px;padding:2px 7px;border-radius:999px;font-size:9.5px;font-weight:800;letter-spacing:.06em;',
    'text-transform:uppercase;background:#E8EEF7;color:var(--ink-2);vertical-align:1px}',
    '.rdrc-jt-tag--mod{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-jt-tag--ex{background:#FCEDEB;color:var(--no)}',
    '.rdrc-jt-outils{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 12px}',
    '.rdrc-jt-cherche{flex:1 1 260px;max-width:380px;font:inherit;font-size:12.5px;padding:8px 12px;border:1px solid var(--line);border-radius:9px;background:#fff;color:var(--ink)}',
    '.rdrc-jt-cherche:focus-visible{outline:2px solid var(--teal);outline-offset:1px}',
    '.rdrc-ro-p{margin:0 0 10px;font-size:12.5px;line-height:1.5;color:var(--ink-2)}',
    '.rdrc-ro-lien{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:0 0 10px}',
    '.rdrc-ro-lien .rdrc-jt-cherche{max-width:none;font-family:ui-monospace,Consolas,monospace;font-size:11.5px}',
    '.rdrc-ro-lien .rdrc-btn{text-decoration:none;padding:8px 12px}',
    '.rdrc-ro-filtres{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px}',
    '.rdrc-ro-filtre{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:#fff;font:inherit;font-size:11.5px;font-weight:700;color:var(--ink-2);cursor:pointer}',
    '.rdrc-ro-filtre span{font-size:10.5px;color:var(--ink-3)}',
    '.rdrc-ro-filtre[aria-pressed="true"]{background:#0E1B3A;border-color:#0E1B3A;color:#fff}',
    '.rdrc-ro-filtre[aria-pressed="true"] span{color:#FCF150}',
    '.rdrc-ro-filtre:focus-visible{outline:2px solid var(--teal);outline-offset:1px}',
    '.rdrc-ro-num{font:800 12px/1 ui-monospace,Consolas,monospace;letter-spacing:.06em}',
    '.rdrc-ro-qui small,.rdrc-ro-mode small,.rdrc-ro-quand{display:block;margin-top:2px;font-size:10.5px;color:var(--ink-3);white-space:normal}',
    '.rdrc-ro-hist{margin-top:4px;font-size:10.5px;color:var(--ink-3)}',
    '.rdrc-ro-hist summary{cursor:pointer;font-weight:600;color:var(--ink-2)}',
    '.rdrc-ro-hist ol{margin:4px 0 0;padding:0 0 0 14px;white-space:normal}',
    '.rdrc-ro-hist li{margin:1px 0}',
    '.rdrc-ro-mode small{max-width:240px}',
    '.rdrc-ro-st{display:inline-block;font:800 10px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;padding:6px 8px;border-radius:999px;white-space:nowrap;background:#FFF1DA;color:var(--warn)}',
    '.rdrc-ro-st[data-s="contacte"]{background:#E6F0FB;color:#1F5FA8}',
    '.rdrc-ro-st[data-s="remis"],.rdrc-ro-st[data-s="expedie"]{background:#E1F5EA;color:var(--ok)}',
    '.rdrc-ro-st[data-s="sans-suite"]{background:#EEF2F7;color:var(--ink-3)}',
    '.rdrc-ro-t td{vertical-align:top}',
    '.rdrc-ro-vide{margin:12px 0 0;font-size:12px;color:var(--ink-3)}',
    '.rdrc-jt-compte{font-size:11.5px;font-weight:700;color:var(--ink-3)}',
    '.rdrc-jt-sous{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin:18px 0 8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--navy)}',
    '.rdrc-jt-sous span{font-size:11px;font-weight:600;letter-spacing:0;text-transform:none;color:var(--ink-3)}',
    '.rdrc-jt-leg{display:flex;gap:16px;flex-wrap:wrap;margin-top:6px;font-size:11px;font-weight:700;color:var(--ink-2)}',
    '.rdrc-jt-leg i{display:inline-block;width:9px;height:9px;border-radius:3px;margin-right:5px;vertical-align:-1px}',
    '.rdrc-jt-histo{display:block;width:170px;height:32px;overflow:visible}',
    '.rdrc-jt-deux{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:16px;align-items:start}',
    '.rdrc-jt-regle{margin:0;padding-left:18px;font-size:12px;line-height:1.6;color:var(--ink-2)}',
    '.rdrc-jt-regle li+li{margin-top:5px}',
    '.rdrc-jt-regle b{color:var(--navy)}',
    '.rdrc-jt-h{margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--teal)}',
    '.rdrc-jt-gagnants{display:grid;gap:10px;margin:0 0 14px}',
    '@media(max-width:900px){.rdrc-jt-deux{grid-template-columns:minmax(0,1fr)}}',
    



    '.rdrc-jr .rdrc-jt-t td{vertical-align:top;white-space:normal}',
    '.rdrc-jr .rdrc-jt-t .rdrc-jt-nom{min-width:110px}',
    '.rdrc-jr-st{display:inline-block;font:800 10px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;padding:6px 8px;border-radius:999px;white-space:nowrap;background:var(--line-2);color:var(--ink-3)}',
    '.rdrc-jr-st[data-s="confirmee"]{background:#E1F5EA;color:var(--ok)}',
    '.rdrc-jr-st[data-s="non-retenue"]{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-jr-st[data-s="illisible"]{background:#FBE3E0;color:var(--no)}',
    '.rdrc-jr-petit{display:block;margin-top:2px;font-size:10.5px;font-weight:600;color:var(--ink-3);overflow-wrap:anywhere}',
    '.rdrc-jr-acts{display:flex;flex-wrap:wrap;gap:6px}',
    '.rdrc-jr-acts .rdrc-btn{padding:6px 10px;font-size:11px;white-space:nowrap}',
    '.rdrc-jr .rdrc-btn.rdrc-go{border-color:var(--navy);background:var(--navy);color:#fff}',
    '.rdrc-jr .rdrc-btn.rdrc-go:hover{background:#12294A}',
    '.rdrc-jr .rdrc-btn:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',
    '.rdrc-jr-form{margin:14px 0 0;padding:14px 15px;border:1px solid var(--line);border-left:3px solid var(--navy);border-radius:10px;background:#FAFBFD}',
    '.rdrc-jr-form-t{margin:0 0 10px;font-size:13px;font-weight:800;color:var(--navy)}',
    '.rdrc-jr-form-t small{display:block;margin-top:3px;font-size:11.5px;font-weight:600;color:var(--ink-3)}',
    '.rdrc-jr-champs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:10px 12px;max-width:780px}',
    '.rdrc-jr-c{display:flex;flex-direction:column;gap:4px;min-width:0;margin:0;padding:0;border:0;font-size:11px;font-weight:800;color:var(--ink-2)}',
    '.rdrc-jr-c--large{grid-column:1/-1}',
    '.rdrc-jr-c input,.rdrc-jr-c select{font:600 13px/1.2 var(--body);color:var(--ink);border:1px solid var(--line);border-radius:8px;padding:8px 10px;background:#fff;min-height:36px;width:100%;box-sizing:border-box}',
    '.rdrc-jr-c input:focus-visible,.rdrc-jr-c select:focus-visible{outline:2px solid var(--teal);outline-offset:1px}',
    '.rdrc-jr-c[data-err] input,.rdrc-jr-c[data-err] select{border-color:var(--no)}',
    '.rdrc-jr-err{font-size:11px;font-weight:700;color:var(--no)}',
    '.rdrc-jr-temps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;max-width:480px}',
    '.rdrc-jr .rdrc-jt-t .rdrc-btn{padding:5px 10px;font-size:11px}',
    '.rdrc-jr-temps label{display:flex;align-items:center;gap:4px;font-size:11px;font-weight:700;color:var(--ink-3)}',
    '.rdrc-jr-temps input{min-width:0}',
    '.rdrc-jr-boutons{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:12px 0 0}',
    '.rdrc-jr-recap{display:grid;grid-template-columns:auto minmax(0,1fr);gap:6px 14px;margin:0;font-size:12.5px}',
    '.rdrc-jr-recap dt{color:var(--ink-3);font-weight:700}',
    '.rdrc-jr-recap dd{margin:0;font-weight:700;color:var(--ink);overflow-wrap:anywhere}',
    '.rdrc-jr-recap dd small{display:block;font-weight:600;color:var(--ink-3);font-size:11px;margin-top:2px}',
    '.rdrc-jr-avis{margin:10px 0 0;padding:9px 11px;border-radius:9px;font-size:12px;line-height:1.45;font-weight:600;background:#FFF1DA;color:var(--warn)}',
    '.rdrc-jr-avis[data-ton="err"]{background:#FBE3E0;color:var(--no)}',
    '.rdrc-jr-avis[data-ton="info"]{background:var(--line-2);color:var(--ink-2)}',
    '.rdrc-jr-choix{display:grid;gap:6px;margin:0 0 10px}',
    '.rdrc-jr-choix label{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:#fff;font-size:12.5px;font-weight:700;color:var(--ink);cursor:pointer}',
    '.rdrc-jr-choix label small{font-weight:600;color:var(--ink-3)}',
    '.rdrc-jr-journal{margin:14px 0 0;font-size:12px;color:var(--ink-2)}',
    '.rdrc-jr-journal summary{cursor:pointer;font-weight:800;color:var(--navy)}',
    '.rdrc-jr-journal ol{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:6px;max-height:min(50vh,420px);overflow:auto}',
    '.rdrc-jr-journal li{padding:8px 10px;border:1px solid var(--line-2);border-radius:8px;background:#fff;line-height:1.45}',
    '.rdrc-jr-journal li b{color:var(--navy)}',
    '.rdrc-jr-journal li small{display:block;color:var(--ink-3);font-size:11px}',
    '.rdrc-jr-valide{margin:0 0 12px;padding:12px 14px;border-radius:12px;background:#E8F5EE;border:1px solid rgba(30,142,90,.45);font-size:12.5px;color:#14603D;line-height:1.5}',
    '.rdrc-jr-valide b{color:#0E4A2F}',
    '.rdrc-jr-valide .rdrc-jr-acts{margin-top:8px}',
    '.rdrc-jr-bloc{margin:0 0 12px}',
    '.rdrc-jr-ecartes{margin:12px 0 0;padding:0;display:grid;gap:6px}',
    '.rdrc-jr-ecartes li{list-style:none;display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;padding:8px 10px;border:1px solid var(--line-2);border-radius:8px;background:#fff;font-size:12px}',
    '.rdrc-jr-ecartes li > span{flex:1 1 260px;min-width:0}',

    


    





    '.rdrc-ph-l{display:grid;gap:14px;margin:0 0 16px}',
    '.rdrc-ph{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,340px);background:#fff;border:1px solid #DCE3ED;',
    'border-radius:14px 3px 14px 3px;overflow:hidden;box-shadow:0 1px 2px rgba(10,26,53,.05)}',
    '.rdrc-ph-img{display:flex;align-items:center;justify-content:center;min-height:240px;background:#0A1A35}',
    '.rdrc-ph-img a{display:flex;align-items:center;justify-content:center;width:100%;height:100%}',
    '.rdrc-ph-img img{display:block;max-width:100%;max-height:min(62vh,560px);width:auto;height:auto;object-fit:contain}',
    '.rdrc-ph-info{display:flex;flex-direction:column;gap:10px;padding:16px 16px 15px;min-width:0}',
    '.rdrc-ph-qui{margin:0;font-size:15px;font-weight:800;color:var(--navy);line-height:1.3;overflow-wrap:anywhere}',
    '.rdrc-ph-qui small{display:block;margin-top:2px;font-size:10.5px;font-weight:700;color:var(--ink-3)}',
    '.rdrc-ph-tags{display:flex;flex-wrap:wrap;gap:6px}',
    '.rdrc-ph-tag{padding:3px 8px;border-radius:999px;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;background:#E8EEF7;color:var(--ink-2)}',
    '.rdrc-ph-tag--essai{background:#E4F0F0;color:var(--teal)}',
    '.rdrc-ph-tag--redepot{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-ph-meta{margin:0;font-size:11.5px;font-weight:600;color:var(--ink-3)}',
    '.rdrc-ph-leg{margin:0;padding:9px 11px;border-left:3px solid var(--teal-lite);background:var(--bg);border-radius:0 8px 8px 0;',
    'font-size:13px;font-style:italic;line-height:1.45;color:var(--ink);overflow-wrap:anywhere}',
    '.rdrc-ph-leg.is-vide{font-style:normal;color:var(--ink-3);border-left-color:var(--line)}',
    '.rdrc-ph-alerte{display:flex;gap:9px;align-items:flex-start;padding:10px 11px;background:#FFF6E6;border:1px solid #F0D398;border-radius:9px;',
    'font-size:12px;line-height:1.5;color:var(--ink-2)}',
    '.rdrc-ph-alerte svg{flex:0 0 auto;width:16px;height:16px;color:var(--warn);margin-top:1px}',
    '.rdrc-ph-alerte b{color:var(--navy)}',
    '.rdrc-ph-acts{display:flex;flex-wrap:wrap;gap:8px}',
    '.rdrc-ph-acts .rdrc-btn{flex:1 1 auto;padding:10px 14px;font-size:12.5px;white-space:nowrap}',
    '.rdrc-ph-form{display:grid;gap:8px;margin:0;padding:12px;border:1px solid var(--line);border-radius:10px;background:#FBFCFE}',
    '.rdrc-ph-form legend{padding:0 4px;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}',
    '.rdrc-ph-motif{display:flex;align-items:flex-start;gap:8px;font-size:12.5px;line-height:1.4;color:var(--ink-2);cursor:pointer}',
    '.rdrc-ph-motif input{margin:2px 0 0;flex:0 0 auto;accent-color:var(--no)}',
    '.rdrc-ph-autre{width:100%;font:inherit;font-size:12.5px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--ink)}',
    '.rdrc-ph-autre:focus-visible{outline:2px solid var(--teal);outline-offset:1px}',
    '.rdrc-ph-note{margin:0;font-size:11px;line-height:1.45;color:var(--ink-3)}',
    '.rdrc-btn.rdrc-go-no{border-color:var(--no);background:var(--no);color:#fff}',
    '.rdrc-btn.rdrc-go-no:hover{background:#A33025}',
    '.rdrc-ph-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px}',
    '.rdrc-ph-v{display:flex;flex-direction:column;background:#fff;border:1px solid #DCE3ED;border-radius:12px 3px 12px 3px;overflow:hidden;min-width:0}',
    '.rdrc-ph-v img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#0A1A35}',
    '.rdrc-ph-v-c{display:flex;flex-direction:column;gap:4px;padding:10px 11px 11px;min-width:0;flex:1}',
    '.rdrc-ph-v-c b{font-size:12.5px;color:var(--navy);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.rdrc-ph-v-c i{font-size:11.5px;color:var(--ink-2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.rdrc-ph-v-n{display:flex;gap:12px;font-size:11.5px;font-weight:800;color:var(--ink-2);font-variant-numeric:tabular-nums}',
    '.rdrc-ph-v .rdrc-btn{margin-top:auto;padding:6px 10px;font-size:11px}',
    '.rdrc-ph-retrait{display:grid;grid-template-columns:120px minmax(0,1fr);gap:14px;align-items:start;margin:0 0 14px;padding:14px;',
    'background:#fff;border:1px solid #F2C4BE;border-left:4px solid var(--no);border-radius:12px}',
    '.rdrc-ph-retrait img{display:block;width:120px;aspect-ratio:4/3;object-fit:cover;border-radius:8px;background:#0A1A35}',
    '.rdrc-ph-retrait h3{margin:0 0 8px;font-size:13.5px;font-weight:800;color:var(--navy)}',
    '.rdrc-ph-pages{display:flex;align-items:center;justify-content:center;gap:12px;margin:14px 0 0;font-size:12px;font-weight:700;color:var(--ink-3)}',
    '.rdrc-ph-tete{list-style:none;margin:0;padding:0;display:grid;gap:4px}',
    '.rdrc-ph-tete li{display:grid;grid-template-columns:26px minmax(0,1fr) auto;gap:10px;align-items:center;padding:7px 9px;border-radius:8px 2px 8px 2px;font-size:12.5px}',
    '.rdrc-ph-tete li:nth-child(odd){background:var(--bg)}',
    '.rdrc-ph-tete b{font-weight:800;color:var(--navy);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.rdrc-ph-tete span{font-weight:800;color:var(--ink-3);text-align:center}',
    '.rdrc-ph-tete em{font-style:normal;font-weight:800;color:var(--ink-2);font-variant-numeric:tabular-nums;white-space:nowrap}',
    '@media(max-width:760px){.rdrc-ph{grid-template-columns:minmax(0,1fr)}.rdrc-ph-img{min-height:180px}',
    '.rdrc-ph-retrait{grid-template-columns:minmax(0,1fr)}}',
    '@media(max-width:560px){.rdrc-body{padding:13px}.rdrc-row{align-items:flex-start}',
    '.rdrc-acts{width:100%}.rdrc-btn{flex:1}.rdrc-bar-r{width:100%;justify-content:space-between}}'
  ].join('');

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  var ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return ESCAPES[c]; });
  }

   
  function since(iso) {
    if (!iso) return '';
    var ms = Date.now() - new Date(iso).getTime();
    if (!isFinite(ms) || ms < 0) return '';
    var h = Math.floor(ms / 3600000);
    if (h < 1) return "il y a moins d'une heure";
    if (h < 24) return 'il y a ' + h + ' h';
    return 'il y a ' + Math.floor(h / 24) + ' j';
  }

  function nfmt(n) {
    var v = Number(n) || 0;
    return v.toLocaleString('fr-FR');
  }

  






  function photoListe(x) {
    if (Array.isArray(x)) return x;
    if (x && Array.isArray(x.photos)) return x.photos;
    if (x && Array.isArray(x.items)) return x.items;
    return [];
  }
  function photoImg(img, l, h, mode) {
    var s = String(img || '').trim();
    var m = s.match(/^wix:image:\/\/v1\/([^/#]+)/);
    var base = m ? 'https://static.wixstatic.com/media/' + m[1]
      : /^https:\/\/static\.wixstatic\.com\/media\/[^/]+$/.test(s) ? s
      : (/^[\w-]+~mv2\.[a-z0-9]{2,5}$/i.test(s) || /^[\w-]{6,}\.[a-z0-9]{2,5}$/i.test(s)) ? 'https://static.wixstatic.com/media/' + s : '';
    if (!base) return '';
    return base + '/v1/' + (mode || 'fit') + '/w_' + l + ',h_' + h + ',q_85,enc_auto/photo.jpg';
  }
  



  var PHOTO_MOTIFS_DEFAUT = [
    'Photo floue ou de trop faible qualité',
    'Photo sans lien avec la Route du Rhum',
    'Contenu inapproprié',
    'Personne reconnaissable sans son accord',
    'Photo qui ne semble pas être la tienne',
    'Texte, cadre ou logo ajouté sur la photo'
  ];
   
   
   
   
   
  function pct(part, whole) {
    var w = Number(whole) || 0;
    if (!w) return 0;
    return Math.min(100, Math.round((Number(part) || 0) / w * 100));
  }
  function dayMonth(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.getDate() + '/' + (d.getMonth() + 1);
  }

  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  var ICON_EXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

   
   
   
   
  var IC = {
    badge:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><polyline points="8.2 13.9 7 22 12 19 17 22 15.8 13.9"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>',
    trend:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>',
    boat:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18l-2 3H5z"/><path d="M12 3v12"/><path d="M12 5 5 15h14z"/></svg>',
    pulse:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 12 7 12 10 4 14 20 17 12 22 12"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>',
    clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
    leaf:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12"/></svg>',
    down:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><path d="M4 20h16"/></svg>',
    pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    train:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14"/><circle cx="8.5" cy="13" r="1"/><circle cx="15.5" cy="13" r="1"/><path d="m7 21 2-3M17 21l-2-3"/></svg>',
    swap:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 8 16 13"/><path d="M21 8H8a5 5 0 0 0-5 5"/><polyline points="8 21 3 16 8 11"/><path d="M3 16h13a5 5 0 0 0 5-5"/></svg>',
    alerte: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    copy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    valide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/></svg>',
     
    flag:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/></svg>'
  };

   
   
   
   
   
  function barsH(rows, opts) {
    var o = opts || {};
    var max = 0;
    rows.forEach(function (r) { if (r.count > max) max = r.count; });
    var whole = o.whole || 0;
    return '<div class="rdrc-hb">' + rows.map(function (r, i) {
      var w = max ? Math.max(r.count ? 3 : 0, Math.round(r.count / max * 100)) : 0;
      var lead = i === 0 && r.count > 0;
      var color = r.color || (lead ? 'var(--navy)' : 'var(--teal)');
      var share = whole ? '<i>' + pct(r.count, whole) + '&nbsp;%</i>' : '';
      var cls = 'rdrc-hb-row' + (r.count ? '' : ' is-zero') + (lead ? ' is-lead' : '');
      return '<div class="' + cls + '">' +
          '<span class="rdrc-hb-l">' + esc(r.label) + '</span>' +
          '<span class="rdrc-hb-t"><span class="rdrc-hb-f" style="width:' + w + '%;background:' + esc(color) + '"></span></span>' +
          '<span class="rdrc-hb-v">' + nfmt(r.count) + share + '</span>' +
        '</div>';
    }).join('') + '</div>';
  }

   
   
   
  function areaChart(points, opts) {
    var o = opts || {};
    var n = points.length;
    if (!n) return '';
    var W = 460, H = 168, padB = 24, padT = 20, padL = 26, padR = 8;
    var vals = points.map(function (p) { return p.value; });
    var max = Math.max.apply(null, vals.concat([1]));
    var plotH = H - padB - padT;
    var step = n > 1 ? (W - padL - padR) / (n - 1) : 0;
    var xy = points.map(function (p, i) {
      return [padL + i * step, H - padB - (p.value / max) * plotH];
    });

    var grid = '';
    [0, 0.5, 1].forEach(function (f) {
      var y = H - padB - f * plotH;
      grid += '<line class="grid" x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '"/>' +
        '<text class="axis" x="' + (padL - 7) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="end">' +
        Math.round(max * f) + '</text>';
    });

    var line = xy.map(function (c, i) { return (i ? 'L' : 'M') + c[0].toFixed(1) + ' ' + c[1].toFixed(1); }).join(' ');
    var area = line + ' L' + xy[n - 1][0].toFixed(1) + ' ' + (H - padB) + ' L' + xy[0][0].toFixed(1) + ' ' + (H - padB) + ' Z';
     
     
     
     
    var dense = n > 40;
    var dots = xy.map(function (c, i) {
      var last = i === n - 1;
      return '<circle class="dot' + (last ? ' dot-last' : (dense ? ' dot-ghost' : '')) +
        '" cx="' + c[0].toFixed(1) + '" cy="' + c[1].toFixed(1) +
        '" r="' + (last ? 4.6 : (dense ? 3.4 : 2.8)) + '"><title>' +
        esc(o.tip ? o.tip(i) : String(points[i].value)) + '</title></circle>';
    }).join('');

     
     
     
     
     
     
    var LARG_LBL = 30;
    var placeLbl = Math.max(2, Math.floor((W - padL - padR) / LARG_LBL));
    var pasLbl = Math.max(1, Math.ceil(n / placeLbl));
    var labels = points.map(function (p, i) {
      var last = i === n - 1;
      if (!last && (i % pasLbl !== 0 || (n - 1 - i) * step < LARG_LBL)) return '';
      return '<text class="lbl' + (last ? ' lbl-last' : '') + '" x="' + xy[i][0].toFixed(1) + '" y="' + (H - padB + 14) +
        '" text-anchor="middle">' + esc(o.label ? o.label(i) : '') + '</text>';
    }).join('');

    return '<svg class="rdrc-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' +
      esc(o.aria || 'Évolution') + '">' +
      '<defs><linearGradient id="rdrcArea" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#00676E" stop-opacity=".26"/>' +
      '<stop offset="100%" stop-color="#00676E" stop-opacity="0"/></linearGradient></defs>' +
      grid + '<path class="area" d="' + area + '"/><path class="line" d="' + line + '"/>' + dots + labels + '</svg>';
  }

   
   
  function ring(percent, title, sub) {
    var p = Math.max(0, Math.min(100, Number(percent) || 0));
    var r = 30, c = 2 * Math.PI * r;
    return '<div class="rdrc-ring">' +
      '<svg width="76" height="76" viewBox="0 0 76 76" role="img" aria-label="' + esc(title + ' : ' + p + ' %') + '">' +
        '<circle class="rdrc-ring-bg" cx="38" cy="38" r="' + r + '"/>' +
        '<circle class="rdrc-ring-fg" cx="38" cy="38" r="' + r + '" stroke-dasharray="' +
          (c * p / 100).toFixed(1) + ' ' + c.toFixed(1) + '"/>' +
        '<text class="rdrc-ring-n" x="38" y="43" text-anchor="middle">' + p + '%</text>' +
      '</svg>' +
      '<div class="rdrc-ring-t">' + esc(sub) + '</div>' +
    '</div>';
  }

   
  function mobJourLibelle(jour) {
    var d = new Date(jour + 'T12:00:00Z');
    if (isNaN(d.getTime())) return String(jour || '');
    var s = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d);
    return d.getUTCDate() === 1 ? s.replace(/(^|\s)1(?=\s)/, '$11er') : s;
  }

  function card(title, sub, body, wide, icon) {
    return '<section class="rdrc-card' + (wide ? ' rdrc-card--wide' : '') + '">' +
      '<div class="rdrc-card-h">' +
        (icon ? '<span class="rdrc-card-ic" aria-hidden="true">' + icon + '</span>' : '') +
        '<h3 class="rdrc-card-t">' + esc(title) + '</h3>' +
        (sub ? '<span class="rdrc-card-s">' + esc(sub) + '</span>' : '') +
      '</div>' + body + '</section>';
  }

   
   
  function kpi(label, value, unit, sub, tone) {
    var cls = 'rdrc-kpi' + (tone ? ' rdrc-kpi--' + tone : '');
    return '<div class="' + cls + '">' +
      '<p class="rdrc-kpi-l">' + esc(label) + '</p>' +
      '<div class="rdrc-kpi-line"><span class="rdrc-kpi-v">' + esc(value) + '</span>' +
      (unit ? '<span class="rdrc-kpi-u">' + esc(unit) + '</span>' : '') + '</div>' +
      (sub ? '<div class="rdrc-kpi-sub">' + sub + '</div>' : '') +
    '</div>';
  }

   
   
   
  







  function csvCell(v) {
    if (typeof v === 'number') return String(v);
    var s = String(v == null ? '' : v);
    if (/^[=+\-@\t\r]/.test(s)) s = '\'' + s;
    return /[";\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function csvDownload(filename, rows) {
     
     
    var body = rows.map(function (r) { return r.map(csvCell).join(';'); }).join('\r\n');
    var blob = new Blob(['﻿' + body], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 0);
  }
  function stamp() {
    var d = new Date();
    var p = function (x) { return String(x).padStart(2, '0'); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

   
   
   
  function jtDuree(sec, aLaMinute) {
    if (sec == null || !isFinite(sec)) return '';
    var s = Math.round(Math.abs(sec));
    if (aLaMinute) s = Math.round(s / 60) * 60;
    var j = Math.floor(s / 86400), r = s % 86400;
    var h = Math.floor(r / 3600), m = Math.floor((r % 3600) / 60), x = r % 60;
    return j + ' j ' + h + ' h ' + String(m).padStart(2, '0') + ' min' + (x ? ' ' + String(x).padStart(2, '0') + ' s' : '');
  }
   
   
  function jtCourt(sec) {
    if (sec == null || !isFinite(sec)) return '';
    var s = Math.round(Math.abs(sec));
    var j = Math.floor(s / 86400), r = s % 86400;
    var deux = function (n) { return String(n).padStart(2, '0'); };
    return j + ' j ' + deux(Math.floor(r / 3600)) + ':' + deux(Math.floor((r % 3600) / 60)) + (r % 60 ? ':' + deux(r % 60) : '');
  }
  

  function jtParties(t, opts) {
    try {
      var o = {};
      new Intl.DateTimeFormat('fr-FR', Object.assign({ timeZone: 'Europe/Paris' }, opts)).formatToParts(new Date(t)).forEach(function (x) { o[x.type] = x.value; });
      return o;
    } catch (e) { return null; }
  }
  function jtHeure(t) {
    var o = t == null ? null : jtParties(t, { hour: 'numeric', minute: '2-digit', hourCycle: 'h23' });
    return o ? o.hour + ' h ' + o.minute : '';
  }
  function jtJour(t) {
    var o = t == null ? null : jtParties(t, { year: 'numeric', month: '2-digit', day: '2-digit' });
    return o ? o.year + '-' + o.month + '-' + o.day : '';
  }
  function jtDateCourte(t) {
    var o = t == null ? null : jtParties(t, { day: '2-digit', month: '2-digit' });
    return o ? o.day + '/' + o.month + ' ' + jtHeure(t) : '';
  }
  function jtDateLongue(isoDate) {
    var t = Date.parse(isoDate || '');
    var o = isFinite(t) ? jtParties(t, { weekday: 'long', day: 'numeric', month: 'long' }) : null;
    return o ? o.weekday + ' ' + o.day + ' ' + o.month + ' à ' + jtHeure(t) : 'non posée';
  }
  function jtPct(x, decimales) {
    return x == null || !isFinite(x) ? '' : (x * 100).toFixed(decimales).replace('.', ',') + ' %';
  }

   
  

  function jtMoment(t, tz) {
    var o = t == null || !isFinite(t) ? null : jtParties(t, { timeZone: tz || 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
    if (!o) return '';
    return o.weekday + ' ' + (o.day === '1' ? '1er' : o.day) + ' ' + o.month + ' à ' + Number(o.hour) + ' h ' + o.minute + ' min ' + o.second + ' s';
  }
   
  function jtChampsParis(t) {
    var o = t == null || !isFinite(t) ? null : jtParties(t, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
    return o ? { date: o.year + '-' + o.month + '-' + o.day, heure: o.hour + ':' + o.minute + ':' + o.second } : { date: '', heure: '' };
  }
  


  function jtDecalageParis(t) {
    var o = jtParties(t, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
    if (!o) return 3600000;
    var vu = Date.UTC(Number(o.year), Number(o.month) - 1, Number(o.day), Number(o.hour), Number(o.minute), Number(o.second));
    return isFinite(vu) ? vu - Math.floor(t / 1000) * 1000 : 3600000;
  }
  function jtInstantParis(date, heure) {
    var d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(date || ''));
    var h = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(String(heure || ''));
    if (!d || !h || Number(h[1]) > 23 || Number(h[2]) > 59 || Number(h[3] || 0) > 59) return NaN;
    var brut = Date.UTC(Number(d[1]), Number(d[2]) - 1, Number(d[3]), Number(h[1]), Number(h[2]), Number(h[3] || 0));
    var t = brut - jtDecalageParis(brut);
    return brut - jtDecalageParis(t);
  }
  

  function jtTempsSaisi(v) {
    var x = [v.jours, v.heures, v.minutes, v.secondes === '' || v.secondes == null ? 0 : v.secondes].map(function (n) { return n === '' || n == null ? NaN : Number(n); });
    if (!x.every(function (n) { return isFinite(n) && Math.floor(n) === n && n >= 0; })) return null;
    if (x[1] > 23 || x[2] > 59 || x[3] > 59) return null;
    var s = x[0] * 86400 + x[1] * 3600 + x[2] * 60 + x[3];
    return s >= 2 * 86400 && s <= 60 * 86400 ? s : null;
  }
  var JR_ACTIONS = {
    saisir: 'Saisie', corriger: 'Correction', nonRetenue: 'Classe non retenue', effacer: 'Remise en attente',
    ecarter: 'Participant écarté', retablir: 'Participant rétabli', tirage: 'Tirage au sort enregistré',
    annulerTirage: 'Tirage au sort annulé', valider: 'Résultat validé', devalider: 'Validation retirée'
  };
  

  var JR_ECART_DEPART_MS = 3600000;
  function jrDecision(d, sansMotif) {
    if (!d) return 'en attente';
    if (d.etat === 'non-retenue') return 'non retenue' + (d.motif && !sansMotif ? ' (' + d.motif + ')' : '');
    return (d.bateau ? d.bateau + ', ' : '') + jtDuree(d.tempsCourseSec) + (d.arriveeLe ? ', arrivé ' + jtDateCourte(Date.parse(d.arriveeLe)) : '');
  }

   
   
  function jtBarresJours(points) {
    var n = points.length;
    if (!n) return '';
    var W = 900, H = 170, padB = 22, padT = 18, padL = 26, padR = 6;
    var max = Math.max.apply(null, points.map(function (p) { return (p.premiers || 0) + (p.modifs || 0); }).concat([1]));
    var plotH = H - padB - padT;
    var pas = (W - padL - padR) / n;
    var larg = Math.max(3, Math.min(36, pas * 0.62));
    var tous = Math.max(1, Math.ceil(n / Math.floor((W - padL - padR) / 34)));
    var grid = '';
    [0, 0.5, 1].forEach(function (f) {
      var y = H - padB - f * plotH;
      grid += '<line class="grid" x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '"/>' +
        '<text class="axis" x="' + (padL - 7) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="end">' + Math.round(max * f) + '</text>';
    });
    var cols = points.map(function (p, i) {
      var x = padL + i * pas + (pas - larg) / 2;
      var hP = (p.premiers || 0) / max * plotH, hM = (p.modifs || 0) / max * plotH;
      var yP = H - padB - hP, yM = yP - hM;
      var etiq = p.jour.slice(8, 10) + '/' + p.jour.slice(5, 7);
      var dernier = i === n - 1;
      return '<g><title>' + esc(etiq + ' : ' + (p.premiers || 0) + ' premier' + (p.premiers > 1 ? 's' : '') + ' dépôt' + (p.premiers > 1 ? 's' : '') +
          ', ' + (p.modifs || 0) + ' dernière' + (p.modifs > 1 ? 's' : '') + ' modification' + (p.modifs > 1 ? 's' : '')) + '</title>' +
        (hP ? '<rect class="' + (dernier ? 'bar-peak' : 'bar') + '" x="' + x.toFixed(1) + '" y="' + yP.toFixed(1) + '" width="' + larg.toFixed(1) + '" height="' + hP.toFixed(1) + '" rx="2"/>'
            : '<rect class="bar-empty" x="' + x.toFixed(1) + '" y="' + (H - padB - 2) + '" width="' + larg.toFixed(1) + '" height="2"/>') +
        (hM ? '<rect fill="#F19F39" x="' + x.toFixed(1) + '" y="' + yM.toFixed(1) + '" width="' + larg.toFixed(1) + '" height="' + hM.toFixed(1) + '" rx="2"/>' : '') +
        (p.premiers ? '<text class="val' + (dernier ? ' val-peak' : '') + '" x="' + (x + larg / 2).toFixed(1) + '" y="' + (yM - 4).toFixed(1) + '" text-anchor="middle">' + p.premiers + '</text>' : '') +
        ((i % tous === 0 || dernier) ? '<text class="lbl' + (dernier ? ' lbl-last' : '') + '" x="' + (x + larg / 2).toFixed(1) + '" y="' + (H - padB + 14) + '" text-anchor="middle">' + esc(etiq) + '</text>' : '') +
      '</g>';
    }).join('');
    return '<svg class="rdrc-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Dépôts par jour">' + grid + cols + '</svg>';
  }

   
   
   
   
  function jtHisto(cl, repere) {
    if (!cl || !cl.n) return '';
    var W = 170, H = 32;
    var bacs = cl.bacs || [];
    var lo = Math.min(cl.min, repere || cl.min), hi = Math.max(cl.max, repere || cl.max);
    var etendue = hi - lo;
    var xDe = function (s) { return etendue > 0 ? (s - lo) / etendue * W : W / 2; };
    var pas = (cl.max - cl.min) / (bacs.length || 1);
    var maxB = Math.max.apply(null, bacs.concat([1]));
    var barres = bacs.map(function (n, i) {
      if (!n) return '';
      var h = Math.max(2, n / maxB * (H - 4));
      var x = pas > 0 ? xDe(cl.min + i * pas) : xDe(cl.min) - 2;
      var l = pas > 0 ? Math.max(1.5, pas / (etendue || 1) * W - 1) : 4;
      return '<rect x="' + x.toFixed(1) + '" y="' + (H - h).toFixed(1) + '" width="' + l.toFixed(1) + '" height="' + h.toFixed(1) + '" fill="#00676E" fill-opacity=".55"/>';
    }).join('');
    var trait = function (s, couleur, tirets) {
      var x = xDe(s).toFixed(1);
      return '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + H + '" stroke="' + couleur + '" stroke-width="2"' + (tirets ? ' stroke-dasharray="3 2"' : '') + '/>';
    };
    return '<svg class="rdrc-jt-histo" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' +
      esc('Répartition de ' + jtDuree(cl.min) + ' à ' + jtDuree(cl.max) + ', médiane ' + jtDuree(cl.mediane)) + '">' +
      '<line x1="0" y1="' + (H - 0.5) + '" x2="' + W + '" y2="' + (H - 0.5) + '" stroke="rgba(10,26,53,.15)"/>' + barres +
      (repere ? trait(repere, '#F19F39', true) : '') + trait(cl.mediane, '#0A1A35', false) + '</svg>';
  }

  class RdrConsole extends HTMLElement {
    static get observedAttributes() { return ['payload']; }

    constructor() {
      super();
      this._payload = null;
      this._view = 'audience';
       
       
       
      this._periode = 30;
      this._instaView = 'todo';    
      this._jtCherche = '';        
      




      this._jr = null;
      this._jrRes = null;
      this._jrRetourN = 0;
      this._roueCherche = '';      
      this._roueFiltre = 'tous';
      this._busy = {};    
      



      this._toast = null;
      this._toastId = 0;          
      this._toastTimer = null;
      


      this._dernierJeu = lireDernierJeu();
      this._menuJeux = false;
      this._menuFocus = -1;
      this._menuTimer = null;
      this._pointeur = '';
      this._focusApres = '';
      var self = this;
       
      this._dehors = function (e) {
        if (!self._menuJeux) return;
        var t = e.target;
        if (t && t.closest && (t.closest('[data-jeux-tab]') || t.closest('.rdrc-menu'))) return;
        self._fermerMenu(false);
      };
    }

    connectedCallback() {
      injectStyles();
      document.addEventListener('pointerdown', this._dehors, true);
      this._render();
    }

    disconnectedCallback() {
      if (this._toastTimer) { clearTimeout(this._toastTimer); this._toastTimer = null; }
      if (this._menuTimer) { clearTimeout(this._menuTimer); this._menuTimer = null; }
      document.removeEventListener('pointerdown', this._dehors, true);
    }

    attributeChangedCallback(name, oldV, newV) {
      if (name !== 'payload' || oldV === newV) return;
      try { this._payload = newV ? JSON.parse(newV) : null; }
      catch (e) { this._payload = null; }
       
      


      if (this._payload && this._payload.view) {
        var demandee = String(this._payload.view);
        this._view = vueCanonique(demandee, this._dernierJeu);
        if (this._view !== demandee) {
          var self = this, vue = this._view;
          setTimeout(function () { self._emit('rc-view', { view: vue }); }, 0);
        }
      }
      this._busy = {};    
      

      var ph = this._payload && this._payload.photo;
      if (ph) {
        var reste = function (liste, id) { return photoListe(liste).some(function (x) { return String(x.memberId) === id; }); };
        if (this._photoRefus && !reste(ph.attente, this._photoRefus)) { this._photoRefus = null; this._photoMotif = ''; }
        if (this._photoRetrait && !reste(ph.enLigne, this._photoRetrait)) { this._photoRetrait = null; this._photoMotif = ''; }
      }
      this._jrLireRetour();
      this._lireToast();
      this._render();
    }

    



    _jrLireRetour() {
      var r = this._payload && this._payload.jtRetour;
      if (!r || !r.n || r.n === this._jrRetourN) return;
      this._jrRetourN = r.n;
      var ouvert = this._jr || this._jrRes;
      if (!ouvert) return;
      ouvert.envoi = false;
      if (r.ok || r.raison === 'conflit') {
        if (this._jr) this._focusApres = this._jr.retour || '';
        this._jr = null;
        this._jrRes = null;
        return;
      }
      ouvert.erreur = String(r.message || 'Rien n’a été enregistré.');
      var champs = Array.isArray(r.champs) ? r.champs : [];
      if (this._jr && champs.length) {
        var e = {};
        champs.forEach(function (c) { e[c === 'arrivee' ? 'date' : c] = 'À vérifier.'; });
        this._jr.erreurs = e;
        this._jr.etape = 'saisie';
      }
    }

    



    _lireToast() {
      var t = this._payload && this._payload.toast;
      if (!t || !t.message || t.id === this._toastId) return;
      this._toastId = t.id;
      this._toast = { message: String(t.message), type: t.type === 'error' ? 'error' : 'success' };
      if (this._toastTimer) clearTimeout(this._toastTimer);
      var self = this;
       
      this._toastTimer = setTimeout(function () { self._fermerToast(); }, 4000);
    }

    _fermerToast() {
      if (this._toastTimer) { clearTimeout(this._toastTimer); this._toastTimer = null; }
      if (!this._toast) return;
      this._toast = null;
      this._render();
    }

    _emit(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true, detail: detail || {} }));
    }

    








    _placerMenu() {
      var tab = this.querySelector('[data-jeux-tab]');
      var menu = this.querySelector('.rdrc-menu');
      var nav = this.querySelector('.rdrc-nav');
      var wrap = this.querySelector('.rdrc-navwrap');
      if (!tab || !menu || !nav || !wrap) return;
      var gauche = tab.offsetLeft - nav.scrollLeft;
      var max = wrap.clientWidth - menu.offsetWidth - 8;
      menu.style.left = Math.max(8, Math.min(gauche, max)) + 'px';
    }

    _ouvrirMenu(focus) {
      if (this._menuTimer) { clearTimeout(this._menuTimer); this._menuTimer = null; }
      var tab = this.querySelector('[data-jeux-tab]');
      var menu = this.querySelector('.rdrc-menu');
      if (!tab || !menu) return;
      this._menuJeux = true;
      menu.hidden = false;
      tab.setAttribute('aria-expanded', 'true');
      this._placerMenu();
      if (typeof focus === 'number') this._focusMenu(focus);
    }

    _fermerMenu(rendreFocus) {
      if (this._menuTimer) { clearTimeout(this._menuTimer); this._menuTimer = null; }
      this._menuJeux = false;
      this._menuFocus = -1;
      var tab = this.querySelector('[data-jeux-tab]');
      var menu = this.querySelector('.rdrc-menu');
      if (menu) menu.hidden = true;
      if (tab) {
        tab.setAttribute('aria-expanded', 'false');
        if (rendreFocus) tab.focus();
      }
    }

    _focusMenu(i) {
      var items = this.querySelectorAll('.rdrc-menu-i');
      if (!items.length) return;
      var n = ((i % items.length) + items.length) % items.length;
      this._menuFocus = n;
      items[n].focus();
    }

    _indexJeu(id) {
      for (var i = 0; i < JEUX.length; i++) if (JEUX[i].id === id) return i;
      return 0;
    }

    _choisirJeu(id, parClavier) {
      if (!jeuDe(id)) return;
      this._menuJeux = false;
      this._menuFocus = -1;
      if (this._menuTimer) { clearTimeout(this._menuTimer); this._menuTimer = null; }
       
      this._focusApres = parClavier ? '[data-jeu-sub="' + id + '"]' : '';
      var change = id !== this._view;
      this._view = id;
      this._render();
      if (change) this._emit('rc-view', { view: id });
    }

    

    _jeuEnteteHtml(jeu) {
      var self = this;
      return '<div class="rdrc-jeu-tete"><div><p class="rdrc-jeu-k">Jeux concours</p><h2 class="rdrc-jeu-t">' + esc(jeu.nom) + '</h2></div>' +
        '<div class="rdrc-sub" role="tablist" aria-label="Jeux concours">' + JEUX.map(function (j) {
          var on = j.id === self._view;
          return '<button class="rdrc-subtab" type="button" role="tab" data-jeu-sub="' + esc(j.id) + '" aria-selected="' + (on ? 'true' : 'false') + '"' +
            ' tabindex="' + (on ? '0' : '-1') + '">' + esc(j.nom) + '</button>';
        }).join('') + '</div></div>';
    }

     
    _audienceHtml(p) {
      if (p.audienceError) return '<p class="rdrc-err">' + esc(p.audienceError) + '</p>';
      var a = p.audience;
      if (!a) return '<div class="rdrc-state">Chargement des chiffres…</div>';

      var k = a.kpi || {};
      var total = k.total || 0;
      if (!total) {
        return '<div class="rdrc-state"><b>Aucune donnée</b>La base membres est vide, ou la passe nocturne ' +
          "n'a encore rien calculé.</div>";
      }

      var kpis = '<div class="rdrc-kpis">' +
        




        kpi('Membres actifs', nfmt(total), '', k.inscrits
          ? '<b>' + nfmt(k.inscrits) + '</b> inscrits · ' + nfmt(k.dormants || 0) + ' jamais revenus'
          : pct(k.actifs, total) + ' % avec au moins une action', 'lead') +
        kpi('Profils complets', nfmt(k.profilsComplets), '', '<b>' + pct(k.profilsComplets, total) + ' %</b> de la base') +
        kpi('Instagram validés', nfmt(k.instaApproved), '',
            (k.instaPending ? '<b>' + nfmt(k.instaPending) + '</b> en attente' : 'aucune demande en attente'),
            k.instaPending > 0 ? 'alert' : '') +
        kpi('Badges par membre', (k.badgesMoyen || 0).toFixed(1), '/ ' + (k.badgeTotal || 18), 'moyenne sur toute la base') +
        kpi('Articles lus', (k.articlesMoyen || 0).toFixed(1), '', 'par membre, en moyenne') +
      '</div>';

       
       
       
       
      var dist = Array.isArray(a.distribution) ? a.distribution : [];
      var maxB = k.badgeTotal || 18;
      var PALIERS = [
        { nom: 'La totale',   de: maxB,           a: maxB,     ton: 'or'   },
        { nom: 'Tout en haut', de: maxB - 1,      a: maxB - 1, ton: 'or'   },
        { nom: 'Collectionneur', de: Math.ceil(maxB * 0.66), a: maxB - 2 },
        { nom: 'Habitué',     de: Math.ceil(maxB * 0.44), a: Math.ceil(maxB * 0.66) - 1 },
        { nom: 'Équipier',    de: Math.ceil(maxB * 0.22), a: Math.ceil(maxB * 0.44) - 1 },
        { nom: 'Mousse',      de: 1,              a: Math.ceil(maxB * 0.22) - 1 },
        { nom: 'Aucun badge', de: 0,              a: 0,        ton: 'zero' }
      ];
      var sommePaliers = function (de, a2) {
        var s = 0;
        for (var i = de; i <= a2 && i < dist.length; i++) s += (dist[i] || 0);
        return s;
      };
      var lignesPaliers = PALIERS
        .filter(function (p2) { return p2.de <= p2.a; })
        .map(function (p2) {
          var etendue = p2.de === p2.a ? p2.de + ' badge' + (p2.de > 1 ? 's' : '')
                                       : p2.de + ' à ' + p2.a + ' badges';
          return {
            label: p2.nom + ' · ' + etendue,
            count: sommePaliers(p2.de, p2.a),
             
             
            color: p2.ton === 'zero' ? 'var(--ink-3)' : (p2.ton === 'or' ? '#E0A83B' : null)
          };
        });
      var cardDist = card('Paliers de collection', 'sur ' + maxB + ' badges',
        barsH(lignesPaliers, { whole: total }) +
        '<p class="rdrc-help" style="margin:12px 0 0">Ce sont ces paliers qui décideront de la carte-trophée ' +
        'de fin de course. Un membre à 0 badge n\'a encore rien fait de mesurable, c\'est le premier chiffre ' +
        'à faire baisser.</p>',
        true, IC.badge);

      var ins = Array.isArray(a.inscriptions) ? a.inscriptions : [];
      var insTotal = ins.reduce(function (s, p2) { return s + p2.value; }, 0);
      var cardIns = card('Inscriptions par semaine',
        nfmt(insTotal) + ' sur 12 semaines',
        areaChart(ins, {
          label: function (i) { return dayMonth(ins[i].week); },
          tip: function (i) { return 'semaine du ' + dayMonth(ins[i].week) + ' : ' + ins[i].value; },
          aria: 'Inscriptions hebdomadaires sur les 12 dernières semaines'
        }), true, IC.trend);

      var badges = Array.isArray(a.badges) ? a.badges : [];
      var cardBadges = card('Badges débloqués', 'catalogue complet',
        barsH(badges.map(function (b) { return { label: b.label, count: b.count }; }), { whole: total }), false, IC.badge);

      var classes = Array.isArray(a.classes) ? a.classes : [];
      var cardClasses = classes.length
        ? card('Classe préférée', 'déduite de la navigation',
            barsH(classes.map(function (c) {
              return { label: c.nom, count: c.count, color: CLASS_COLORS[c.nom] || 'var(--teal)' };
            }), { whole: total }), false, IC.boat)
        : card('Classe préférée', '', '<div class="rdrc-state">Pas encore assez de navigation pour dégager une préférence.</div>', false, IC.boat);

      var eng = a.engagement || {};
      var cardEng = card('Engagement', 'répartition des membres',
        '<div style="display:grid;gap:14px">' +
          '<div><p class="rdrc-kpi-l">Articles lus</p>' + barsH(eng.articles || [], { whole: total }) + '</div>' +
          '<div><p class="rdrc-kpi-l">Skippers suivis</p>' + barsH(eng.skippers || [], { whole: total }) + '</div>' +
          '<div><p class="rdrc-kpi-l">Jours de connexion</p>' + barsH(eng.jours || [], { whole: total }) + '</div>' +
        '</div>', false, IC.pulse);

      var ry = a.rythme || { soir: 0, matin: 0 };
      var somme = (ry.soir || 0) + (ry.matin || 0);
      var pSoir = somme ? Math.round(ry.soir / somme * 100) : 50;
      var cardRythme = card('Rythme de visite', somme ? nfmt(somme) + ' visites situées' : '',
        somme
          ? '<div class="rdrc-split">' +
              '<span style="width:' + pSoir + '%;background:var(--navy)">' + (pSoir > 12 ? pSoir + ' %' : '') + '</span>' +
              '<span style="width:' + (100 - pSoir) + '%;background:#E0A83B">' + (100 - pSoir > 12 ? (100 - pSoir) + ' %' : '') + '</span>' +
            '</div>' +
            '<div class="rdrc-split-lg"><span><i style="background:var(--navy)"></i>Soirée</span>' +
            '<span><i style="background:#E0A83B"></i>Matin</span></div>'
          : '<div class="rdrc-state">Pas encore de visites situées dans la journée.</div>', true, IC.clock);

      var cardTaux = card('Taux de qualification', 'objectif : connaître l\'audience',
        '<div style="display:grid;gap:14px">' +
          ring(pct(k.profilsComplets, total), 'Profils complets', 'profils renseignés à 100 %') +
          ring(pct(k.instaApproved, total), 'Instagram', 'comptes Instagram validés') +
        '</div>', false, IC.target);

      var note = '<p class="rdrc-note"><b>Ce que dit cet onglet, et ce qu\'il ne dit pas.</b> Ces chiffres ' +
        'décrivent des COMPORTEMENTS : ce que les membres lisent, suivent et débloquent. Le portrait de ' +
        'l\'audience (âge, civilité, géographie, lien avec la voile) a son propre onglet <b>Profils</b>, ' +
        'et les réponses sur la venue à Saint-Malo l\'onglet <b>Village</b>.</p>' +
        (a.tronque ? '<p class="rdrc-note"><b>Lecture tronquée.</b> La base dépasse le plafond de sécurité ' +
          'de cette page : les chiffres ci-dessus portent sur un sous-ensemble.</p>' : '');

       
       
       
       
       
       
       
       
       
      return kpis + '<div class="rdrc-grid">' +
        cardIns + cardEng + cardTaux + cardDist + cardClasses + cardBadges + cardRythme +
        '</div>' + note;
    }

     
     
     
     
     
    _contenuHtml(p) {
      if (p.contenuError) return '<p class="rdrc-err">' + esc(p.contenuError) + '</p>';
      if (!p.contenu) return '<div class="rdrc-state">Chargement des chiffres d\'audience…</div>';
      var c = p.contenu;

      if (!c.configure) {
        return '<div class="rdrc-methode" style="margin-bottom:16px">' +
          '<p class="rdrc-methode-t">Une étape à faire une seule fois</p>' +
          '<ol class="rdrc-methode-l">' +
            '<li>Créer une clé API dans <b>Gérer le compte, Clés API</b>, avec la permission de lecture des statistiques du site.</li>' +
            '<li>Dans le gestionnaire de secrets du site, ajouter un secret nommé <b>RDR_ANALYTICS_KEY</b> contenant cette clé.</li>' +
            '<li>Revenir ici : la passe nocturne prendra le relais toute seule.</li>' +
          '</ol>' +
          '<p class="rdrc-methode-n">Sans cette clé, la capture nocturne ne peut pas interroger Wix. ' +
          'L\'historique déjà enregistré reste consultable ci-dessous.</p>' +
        '</div>' + this._contenuCorps(c);
      }
      return this._contenuCorps(c);
    }

     
     
     
    _periodes() {
      return [{ id: 3, label: '3 j' }, { id: 7, label: '7 j' }, { id: 30, label: '30 j' },
              { id: 90, label: '90 j' }, { id: 0, label: 'Tout' }];
    }

    






    _contenuRetenir(x) {
      var dits = [];
      var jour = x.jours === 1 ? 'jour' : 'jours';

      if (x.evol !== null && Math.abs(x.evol) >= 5) {
        dits.push('Sur ces ' + x.jours + ' ' + jour + ', <b>' + nfmt(x.sessions) + ' visites</b>, soit ' +
          nfmt(x.moyJour) + ' par jour. C\'est <b>' + (x.evol > 0 ? 'en hausse de ' + x.evol : 'en baisse de ' + Math.abs(x.evol)) +
          '&nbsp;%</b> par rapport aux ' + x.jours + ' ' + jour + ' précédents.');
      } else {
        dits.push('Sur ces ' + x.jours + ' ' + jour + ', <b>' + nfmt(x.sessions) + ' visites</b>, soit ' +
          nfmt(x.moyJour) + ' par jour' + (x.evol === null ? '.' : ', un niveau stable par rapport à la période précédente.'));
      }

      var p1 = x.prov[0];
      if (p1 && x.sessions) {
        var partP1 = pct(p1.count, x.sessions);
        var social = 0;
        x.prov.forEach(function (p) { if (/sociaux|social/i.test(p.label)) social = p.count; });
         
         
        var canal = p1.label.charAt(0).toLowerCase() + p1.label.slice(1);
        var phrase = '<b>' + partP1 + '&nbsp;% de l\'audience arrive par ' + esc(canal) + '</b>';
        if (/google|recherche/i.test(p1.label)) {
          phrase += '. Le site vit donc de son référencement, pas de sa diffusion' +
            (social ? ' : les réseaux sociaux n\'en apportent que ' + pct(social, x.sessions) + '&nbsp;%' : '') + '.';
        } else {
          phrase += ', c\'est le premier canal d\'arrivée.';
        }
        dits.push(phrase);
      }

      var mob = 0;
      x.app.forEach(function (a) { if (/mobile|téléphone/i.test(a.label)) mob = a.count; });
      if (mob && x.sessions) {
        var partMob = pct(mob, x.sessions);
        dits.push('<b>' + partMob + '&nbsp;% des visites se font sur téléphone.</b> ' +
          (partMob >= 50 ? 'La majorité du public lit debout, sur un petit écran : c\'est ce format qui doit décider des titres et du choix des images.'
                         : 'L\'ordinateur reste majoritaire, mais le mobile pèse déjà lourd dans les arbitrages de mise en page.'));
      }

      





      if (x.pays.length) {
        var totPays = x.pays.reduce(function (s, p) { return s + p.sessions; }, 0);
        var horsFr = totPays - (x.pays[0] && /france/i.test(x.pays[0].pays) ? x.pays[0].sessions : 0);
        var gp = null, rangGp = 0;
        x.pays.forEach(function (p, i) { if (/guadeloupe/i.test(p.pays)) { gp = p; rangGp = i + 1; } });
        if (gp && rangGp <= 3) {
          dits.push('<b>La Guadeloupe est le ' + (rangGp === 1 ? '1<sup>er</sup>' : rangGp + '<sup>e</sup>') +
            ' territoire d\'audience</b> avec ' + nfmt(gp.sessions) + ' visites. La destination suit la course toute l\'année, ' +
            'pas seulement à l\'arrivée.');
        } else if (totPays && horsFr) {
          dits.push('<b>' + pct(horsFr, totPays) + '&nbsp;% de l\'audience est hors de France</b>, ce qui donne sa mesure à la version anglaise du site.');
        }
      }

      if (x.sessions && x.partMembres <= 5) {
        dits.push('Seules <b>' + x.partMembres + '&nbsp;% des visites sont connectées</b> (' + nfmt(x.sessMembres) +
          '). L\'Espace Rhum ne touche encore qu\'une frange de l\'audience : c\'est la marge de progression la plus nette.');
      }

      return dits.slice(0, 6);
    }

    _contenuCorps(c) {
      var self = this;
      var tous = c.jours || [];
      if (!tous.length) {
        return '<div class="rdrc-state"><b>Aucun historique pour l\'instant</b>' +
          'La passe nocturne le constituera. Le bouton « Rattraper l\'historique » ci-dessous ' +
          'récupère tout de suite ce que Wix conserve encore.' +
          '<div style="margin-top:16px"><button class="rdrc-goto" type="button" data-rattraper>Rattraper l\'historique</button></div></div>';
      }

       
       
       
       
       
      var demande = this._periode == null ? 30 : this._periode;
      var jours = (demande > 0 && tous.length > demande) ? tous.slice(-demande) : tous;
      var nJours = jours.length;

      var som = function (arr, f) { return arr.reduce(function (s, j) { return s + f(j); }, 0); };
      var sessTotal   = som(jours, function (j) { return j.sessions; });
      var visiteurs   = som(jours, function (j) { return j.visiteurs; });
      var vues        = som(jours, function (j) { return j.vues; });
      var sessMembres = som(jours, function (j) { return j.sessMembres; });
      var partMembres = sessTotal ? pct(sessMembres, sessTotal) : 0;
      var moyJour = nJours ? Math.round(sessTotal / nJours) : 0;

       
       
      var fusion = function (champ) {
        var acc = {};
        jours.forEach(function (j) {
          var o = j[champ] || {};
          for (var k in o) acc[k] = (acc[k] || 0) + o[k];
        });
        return Object.keys(acc).map(function (k) { return { label: k, count: acc[k] }; })
          .sort(function (a, b) { return b.count - a.count; });
      };

       
       
       
       
       
       
       
       
       
      var evol = null, baseEvol = 'pas encore de période de référence';
      var precedent = tous.slice(Math.max(0, tous.length - 2 * nJours), tous.length - nJours);
      var assez = Math.max(1, Math.ceil(nJours * 0.6));
      if (precedent.length >= assez && nJours > 0) {
        var moyAvant = som(precedent, function (j) { return j.sessions; }) / precedent.length;
        if (moyAvant > 0) {
          evol = Math.round((moyJour - moyAvant) / moyAvant * 100);
          baseEvol = 'contre ' + nfmt(Math.round(moyAvant)) + ' par jour sur les ' +
            precedent.length + (precedent.length > 1 ? ' jours précédents' : ' jour précédent');
        }
      }

      var libPeriode = demande > 0 && tous.length > demande
        ? nJours + (nJours > 1 ? ' derniers jours' : ' dernier jour')
        : 'tout l\'historique, ' + nJours + (nJours > 1 ? ' jours' : ' jour');

      var seg = '<div class="rdrc-seg-row"><div class="rdrc-seg" role="group" aria-label="Période analysée">' +
        this._periodes().map(function (pe) {
           
           
           
          var inutile = pe.id > 0 && pe.id > tous.length;
          return '<button type="button" data-periode="' + pe.id + '" aria-pressed="' +
            (pe.id === demande ? 'true' : 'false') + '"' +
            (inutile ? ' disabled title="L\'historique ne remonte pas encore si loin"' : '') +
            '>' + esc(pe.label) + '</button>';
        }).join('') + '</div>' +
        '<p class="rdrc-seg-note">Le découpage porte sur les visites, les provenances et les appareils. ' +
        'Les articles et les pays restent sur 30 jours : ils sont mesurés globalement, pas jour par jour.</p></div>';

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Visites', nfmt(sessTotal), '', 'sur ' + libPeriode, 'lead') +
        kpi('Par jour', nfmt(moyJour), '', 'en moyenne sur la période') +
        kpi('Visiteurs', nfmt(visiteurs), '', nfmt(vues) + ' pages vues') +
        kpi('Tendance', evol === null ? '—' : (evol > 0 ? '+' : '') + evol, evol === null ? '' : '%',
            baseEvol, (evol !== null && evol < 0) ? 'alert' : '') +
        kpi('Part des membres', partMembres, '%',
            nfmt(sessMembres) + ' visites connectées') +
      '</div>';

      var courbe = card('Visites par jour',
        nJours ? 'du ' + jours[0].jour + ' au ' + jours[nJours - 1].jour : '',
        areaChart(jours.map(function (j) { return { week: j.jour, value: j.sessions }; }), {
          label: function (i) { return jours[i].jour.slice(8) + '/' + jours[i].jour.slice(5, 7); },
          tip: function (i) { return jours[i].jour + ' : ' + jours[i].sessions + ' visites'; },
          aria: 'Visites quotidiennes sur la période choisie'
        }), true, IC.trend);

      var prov = fusion('provenance').map(function (x) {
        return { label: CANAL_LABELS[x.label] || x.label, count: x.count };
      });
      var cardProv = card('D\'où viennent les visiteurs', nfmt(sessTotal) + ' visites',
        prov.length ? barsH(prov, { whole: sessTotal })
                    : '<div class="rdrc-state">Pas encore de données.</div>', false, IC.pin);

      var app = fusion('appareils').map(function (x) {
        return { label: APPAREIL_LABELS[x.label] || x.label, count: x.count };
      });
      var cardApp = card('Sur quel appareil', nfmt(sessTotal) + ' visites',
        app.length ? barsH(app, { whole: sessTotal })
                   : '<div class="rdrc-state">Pas encore de données.</div>', false, IC.target);

      


















      var arts = c.articles || [];
      var cardArts = card('Les articles qui marchent',
        arts.length ? (c.syntheseFenetre || 30) + ' derniers jours, période fixe' : '',
        arts.length
          ? '<div class="rdrc-arts">' + arts.map(function (a, i) {
              return '<div class="rdrc-art' + (i === 0 ? ' is-lead' : '') + '">' +
                '<span class="rdrc-art-r">' + (i + 1) + '</span>' +
                '<span class="rdrc-art-t" title="' + esc(a.titre) + '">' + esc(a.titre) + '</span>' +
                '<span class="rdrc-art-v">' +
                  (a.lecteurs ? nfmt(a.lecteurs) + '<i>lecteurs</i>'
                              : nfmt(a.vues) + '<i>vues</i>') + '</span>' +
                '<span class="rdrc-art-l">' + (a.lecture ? a.lecture + ' s' : '—') + '<i>lecture</i></span>' +
                '<span class="rdrc-art-s">' + (a.lecteurs ? nfmt(a.vues) : '—') + '<i>affichages</i></span>' +
              '</div>';
            }).join('') + '</div>' +
            '<p class="rdrc-help" style="margin:12px 0 0">' +
            (arts[0] && arts[0].lecteurs
              ? 'Un <b>lecteur</b> est une visite qui a ouvert l\'article. Un <b>affichage</b> compte aussi ' +
                'les fois où l\'article est apparu en carte, sur le hub ou l\'accueil : il y en a environ ' +
                'quatre fois plus, et c\'est normal. Le temps de lecture dit si l\'article a tenu ' +
                'ce que son titre promettait.'
              : 'Chiffres en <b>vues</b>, qui comptent aussi les affichages en carte : ils valent environ ' +
                'quatre fois le nombre de lecteurs réels. Le compte des lecteurs apparaîtra à la ' +
                'prochaine passe de nuit.') +
            '</p>'
          : '<div class="rdrc-state">Pas encore de données par article.</div>',
        true, IC.badge);

      var pays = (c.pays || []).map(function (x) { return { label: x.pays, count: x.sessions }; });
      var cardPays = card('Depuis quels pays',
        (c.syntheseFenetre || 30) + ' derniers jours, période fixe',
        pays.length ? barsH(pays, { whole: pays.reduce(function (s, x) { return s + x.count; }, 0) })
                    : '<div class="rdrc-state">Pas encore de données.</div>', true, IC.pin);

      





      var joursRobots = jours.filter(function (j) { return j.robotsIA; });
      var cardRobots = '';
      if (joursRobots.length) {
        var requetes = function (j) { return (j.robotsIA.chatgptUtilisateur || 0) + (j.robotsIA.perplexityUtilisateur || 0); };
        var totalReq = som(joursRobots, requetes);
        var parRobot = {};
        joursRobots.forEach(function (j) { for (var k in j.robotsIA) parRobot[k] = (parRobot[k] || 0) + j.robotsIA[k]; });
        var robots = Object.keys(parRobot).map(function (k) { return { label: ROBOT_LABELS[k] || k, count: parRobot[k] }; })
          .sort(function (a, b) { return b.count - a.count; });
        cardRobots = card('Les IA qui lisent le site',
          nfmt(totalReq) + ' requêtes d\'utilisateurs',
          '<p class="rdrc-help" style="margin:0 0 10px"><b>' + nfmt(totalReq) + ' fois</b>' +
            (joursRobots.length < nJours ? ' depuis le ' + joursRobots[0].jour : ' sur la période') +
            ', ChatGPT ou Perplexity sont venus lire une page du site pour répondre à la question de quelqu\'un, ' +
            'soit ' + nfmt(Math.round(totalReq / joursRobots.length)) + ' par jour.</p>' +
           
           
          '<div style="display:flex;flex-wrap:wrap;gap:16px 28px;align-items:center">' +
            '<div style="flex:1 1 360px;min-width:0">' +
              areaChart(joursRobots.map(function (j) { return { week: j.jour, value: requetes(j) }; }), {
                label: function (i) { return joursRobots[i].jour.slice(8) + '/' + joursRobots[i].jour.slice(5, 7); },
                tip: function (i) { return joursRobots[i].jour + ' : ' + requetes(joursRobots[i]) + ' requêtes d\'utilisateurs'; },
                aria: 'Requêtes d\'utilisateurs des IA, par jour'
              }) + '</div>' +
            '<div style="flex:1 1 360px;min-width:0">' +
              barsH(robots, { whole: som(robots, function (x) { return x.count; }) }) + '</div>' +
          '</div>' +
          '<p class="rdrc-help" style="margin:12px 0 0">Un passage est une page lue par le robot d\'une IA. ' +
            'Les robots de recherche et d\'entraînement ne répondent à personne sur le moment : ils indexent ou apprennent. ' +
            'Mesuré par Wix depuis le 1<sup>er</sup>&nbsp;août.</p>',
          true, IC.pulse);
      }

       
       
      var dits = this._contenuRetenir({
        jours: nJours, sessions: sessTotal, moyJour: moyJour, evol: evol,
        prov: prov, app: app, partMembres: partMembres, sessMembres: sessMembres,
        articles: arts, pays: c.pays || []
      });
      var retenir = dits.length
        ? '<div class="rdrc-tell"><div class="rdrc-tell-h">' + IC.pulse +
            '<span>Ce qu\'il faut retenir</span></div><ul><li>' + dits.join('</li><li>') + '</li></ul></div>'
        : '';

      var note = '<p class="rdrc-note"><b>D\'où viennent ces chiffres.</b> Ils sont mesurés par Wix sur ' +
        'l\'ensemble du site, visiteurs non connectés compris, et rangés chez nous chaque nuit. ' +
        '<b>Wix ne conserve ses propres mesures que 62 jours</b> : sans cet enregistrement, comparer novembre ' +
        'à septembre serait impossible. Cette page ne déclenche aucun appel externe, elle lit l\'historique. ' +
        'Les onglets Audience et Profils décrivent autre chose : les membres inscrits, que Wix ne connaît pas.' +
        '<span class="rdrc-note-act"><button class="rdrc-goto" type="button" data-rattraper>Rattraper l\'historique</button></span></p>';

      return seg + retenir + kpis + '<div class="rdrc-grid">' +
        courbe + cardProv + cardApp + cardArts + cardPays + cardRobots + '</div>' + note;
    }

     
     
     
     
     
     
     
     
    _profilsHtml(p) {
      if (p.audienceError) return '<p class="rdrc-err">' + esc(p.audienceError) + '</p>';
      if (!p.audience) return '<div class="rdrc-state">Chargement du portrait d\'audience…</div>';

      var d = p.audience.demographie || {};
      





      var total = (p.audience.kpi || {}).total || 0;
      var inscrits = (p.audience.kpi || {}).inscrits || 0;
      var baseNombre = inscrits || total;
      var baseNom = inscrits ? 'des inscrits' : 'des membres actifs';
      var ages = d.ages || [], civ = d.civilites || [], reg = d.regions || [];
      var dep = d.departements || [], voile = d.voile || [];
      var courses = d.courses || [], canaux = d.canaux || [], pays = d.pays || [];

      if (!d.agesBase && !d.civilitesBase && !d.geoBase && !d.voileBase
          && !d.coursesBase && !d.canauxBase && !d.paysBase) {
        return '<div class="rdrc-state"><b>Portrait pas encore constitué</b>' +
          'Les tranches se rangent au fil des visites, quand un membre enregistre son profil. ' +
          'Aucune n\'existe pour l\'instant.</div>';
      }

      var dominante = function (serie) {
        var vrais = serie.filter(function (x) { return x.key !== '_autres'; });
        if (!vrais.length) return null;
        return vrais.reduce(function (a, b) { return b.count > a.count ? b : a; });
      };
      var domAge = dominante(ages), domReg = dominante(reg);
       
       
      var pratiquants = voile.filter(function (x) { return x.key === 'pratiquant' || x.key === 'occasionnel'; })
                             .reduce(function (s, x) { return s + x.count; }, 0);

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Profils renseignés', nfmt(d.agesBase || 0), '',
            baseNombre ? '<b>' + pct(d.agesBase || 0, baseNombre) + ' %</b> ' + baseNom +
                   (inscrits ? ' (' + nfmt(inscrits) + ')' : '') : '', 'lead') +
        kpi('Tranche dominante', domAge ? domAge.label.replace(' ans', '') : '—', domAge ? 'ans' : '',
            domAge ? pct(domAge.count, d.agesBase) + ' % des répondants' : 'pas encore de tranche') +
        kpi('Région dominante', domReg ? domReg.label : '—', '',
            domReg ? pct(domReg.count, d.geoBase) + ' % des localisés' : 'pas encore de localisation') +
        kpi('Touchent à la voile', d.voileBase ? pct(pratiquants, d.voileBase) : '—', d.voileBase ? '%' : '',
            d.voileBase ? 'sur ' + nfmt(d.voileBase) + ' réponses' : 'question pas encore répondue') +
        kpi('Hors de France', d.paysBase ? pct(d.horsFrance || 0, d.paysBase) : '—', d.paysBase ? '%' : '',
            d.paysBase ? 'sur ' + nfmt(d.paysBase) + ' résidences déclarées' : 'résidence pas encore déclarée') +
      '</div>';

      var base = function (n) { return n ? nfmt(n) + ' ' + (n > 1 ? 'répondants' : 'répondant') : 'aucun répondant'; };
      var vide = function (quoi) { return '<div class="rdrc-state">Personne n\'a encore renseigné ' + quoi + '.</div>'; };

      
















      var seuil = (d.seuil || 5);
      var toutMasque = function (serie) {
        return serie.length > 0 && serie.every(function (x) { return x.key === '_autres'; });
      };
      var attente = function (n) {
        return '<div class="rdrc-state"><b>Pas encore assez de répondants</b>' +
          'Aucune réponse n\'atteint ' + seuil + ' personnes, le seuil sous lequel une ' +
          'tranche croisée avec une autre permettrait de reconnaître quelqu\'un. ' +
          (n ? 'Les ' + nfmt(n) + ' réponses reçues sont comptées, elles ne sont ' +
               'simplement pas encore montrables.' : '') + '</div>';
      };
      

      var serieOuMot = function (serie, n, quoi, corps) {
        if (!serie.length) return vide(quoi);
        if (toutMasque(serie)) return attente(n);
        return corps();
      };

      var cardAge = card('Pyramide des âges', base(d.agesBase),
        serieOuMot(ages, d.agesBase, 'sa date de naissance', function () {
          return barsH(ages.map(function (a) { return { label: a.label, count: a.count }; }),
                       { whole: d.agesBase }); }),
        false, IC.people);

      var cardCiv = card('Civilité déclarée', base(d.civilitesBase),
        serieOuMot(civ, d.civilitesBase, 'sa civilité', function () {
          return barsH(civ.map(function (c) { return { label: c.label, count: c.count }; }),
                       { whole: d.civilitesBase }) +
            '<p class="rdrc-help" style="margin:12px 0 0">Forme d\'adresse choisie par le membre. ' +
            'Ce n\'est pas une donnée de sexe et ne doit pas être présentée comme telle.</p>'; }),
        false, IC.target);

      var cardReg = card('Régions', base(d.geoBase),
        serieOuMot(reg, d.geoBase, 'son code postal', function () {
          return barsH(reg.map(function (r) { return { label: r.label, count: r.count }; }),
                       { whole: d.geoBase }); }),
        false, IC.pin);

      



      var cardDep = card('Départements',
        (!dep.length || toutMasque(dep)) ? base(d.geoBase) : 'les ' + dep.length + ' premiers',
        serieOuMot(dep, d.geoBase, 'son code postal', function () {
          return barsH(dep.map(function (x) { return { label: x.label, count: x.count }; }),
                       { whole: d.geoBase }); }),
        false, IC.pin);

      var cardVoile = card('Lien avec la voile', base(d.voileBase),
        !voile.length
          ? '<div class="rdrc-state"><b>Question posée, pas encore de réponse</b>' +
            'Elle apparaît dans le pop-up de profil, sous le questionnaire village.</div>'
          : toutMasque(voile) ? attente(d.voileBase)
          : barsH(voile.map(function (v) { return { label: v.label, count: v.count }; }), { whole: d.voileBase }),
        true, IC.boat);

       
       
       
      var cardCourses = card('Habitude de suivi des courses', base(d.coursesBase),
        !courses.length
          ? '<div class="rdrc-state">Question posée, pas encore de réponse.</div>'
          : toutMasque(courses) ? attente(d.coursesBase)
          : barsH(courses.map(function (x) { return { label: x.label, count: x.count }; }),
                  { whole: d.coursesBase }) +
            '<p class="rdrc-help" style="margin:12px 0 0">Une réponse par personne. C\'est le chiffre qui dit si ' +
            'cette audience est native de la course au large ou propre à la Route du Rhum.</p>',
        true, IC.boat);

      var cardCanal = card('Comment ils ont connu la course', base(d.canauxBase),
        !canaux.length
          ? '<div class="rdrc-state">Question posée, pas encore de réponse.</div>'
          : toutMasque(canaux) ? attente(d.canauxBase)
          : barsH(canaux.map(function (x) { return { label: x.label, count: x.count }; }),
                  { whole: d.canauxBase }),
        false, IC.trend);

      var cardPays = card('Pays de résidence',
        d.paysBase ? base(d.paysBase) + ' · les ' + pays.length + ' premiers' : base(0),
        !pays.length
          ? '<div class="rdrc-state">Question posée, pas encore de réponse.</div>'
          : toutMasque(pays) ? attente(d.paysBase)
          : barsH(pays.map(function (x) { return { label: x.label, count: x.count }; }),
                  { whole: d.paysBase }),
        false, IC.pin);

      var note = '<p class="rdrc-note"><b>Comment ces chiffres sont obtenus.</b> La fiche du membre garde ses ' +
        'valeurs exactes ; cette page ne voit que des TRANCHES larges, rangées au moment où il enregistre son ' +
        'profil. Aucun calcul n\'est fait pendant la course, aucune donnée nominative ne remonte ici. ' +
        'Une tranche comptant moins de ' + (d.seuil || 5) + ' personnes est fondue dans « Autres » : en dessous, ' +
        'un croisement permettrait de reconnaître quelqu\'un. Les pourcentages se rapportent au nombre de ' +
        'répondants indiqué sur chaque bloc, pas à la base entière.</p>';

      return kpis + '<div class="rdrc-grid">' + cardVoile + cardCourses +
             cardAge + cardCiv + cardReg + cardDep + cardCanal + cardPays + '</div>' + note;
    }

     
     
     
     
     
     
     
    _villageHtml(p) {
      if (p.audienceError) return '<p class="rdrc-err">' + esc(p.audienceError) + '</p>';
      if (!p.audience) return '<div class="rdrc-state">Chargement des réponses…</div>';

      var vil = (p.audience && p.audience.village) || {};
      var rep = vil.repondu || 0;
      if (!rep) {
        return '<div class="rdrc-state"><b>Aucune réponse au questionnaire</b>' +
          'Les réponses arriveront au fil des visites, depuis le pop-up « Mon profil » de l\'Espace Rhum.</div>';
      }

      var att  = vil.attendus || { oui: 0, peutetre: 0 };
      var mob  = vil.mobilite || { doux: 0, voiture: 0, autre: 0, total: 0 };
      var lect = vil.lectures || 0;
      var conv = vil.convaincus || 0;
      var pDoux = mob.total ? Math.round(mob.doux / mob.total * 100) : 0;
      var tauxConv = lect ? Math.round(conv / lect * 100) : 0;

       
       
      var baseMembres = ((p.audience || {}).kpi || {}).total || 0;

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Réponses', nfmt(rep), '',
            baseMembres ? '<b>' + pct(rep, baseMembres) + ' %</b> des membres ont répondu' : 'au questionnaire village',
            'lead') +
        kpi('Comptent venir', nfmt(att.oui), '',
            att.peutetre ? '<b>' + nfmt(att.peutetre) + '</b> encore indécis' : 'aucun indécis') +
        kpi('Mobilité douce', mob.total ? pDoux : '—', mob.total ? '%' : '',
            'des trajets annoncés', pDoux >= 50 ? '' : 'alert') +
        kpi('Argumentaire lu', nfmt(lect), '', lect ? 'panneau mobilité ouvert' : 'jamais ouvert') +
        kpi('Ont changé d\'avis', nfmt(conv), '',
            lect ? '<b>' + tauxConv + ' %</b> des lecteurs' : 'aucune lecture pour l\'instant') +
      '</div>';

      var cardVenue = card('Qui compte venir', nfmt(rep) + ' réponses',
        barsH((vil.venues || []).map(function (v) { return { label: v.label, count: v.count }; }),
              { whole: rep }), false, IC.pin);

      var cardTransport = card('Comment ils comptent venir',
        mob.total ? nfmt(mob.total) + ' trajets annoncés' : 'aucun trajet annoncé',
        mob.total
          ? barsH((vil.transports || []).map(function (t) { return { label: t.label, count: t.count }; }),
                  { whole: mob.total })
          : '<div class="rdrc-state">Personne n\'a encore indiqué son mode de transport.</div>',
        false, IC.train);

       
       
      var pVoit  = mob.total ? Math.round(mob.voiture / mob.total * 100) : 0;
      var pAutre = Math.max(0, 100 - pDoux - pVoit);
      var cardEmpreinte = card('Empreinte des trajets', 'part de mobilité douce',
        mob.total
          ? '<div class="rdrc-split">' +
              '<span style="width:' + pDoux + '%;background:var(--teal)">' + (pDoux > 12 ? pDoux + ' %' : '') + '</span>' +
              '<span style="width:' + pVoit + '%;background:var(--warn)">' + (pVoit > 12 ? pVoit + ' %' : '') + '</span>' +
              '<span style="width:' + pAutre + '%;background:var(--ink-3)">' + (pAutre > 12 ? pAutre + ' %' : '') + '</span>' +
            '</div>' +
            '<div class="rdrc-split-lg">' +
              '<span><i style="background:var(--teal)"></i>Douce (' + nfmt(mob.doux) + ')</span>' +
              '<span><i style="background:var(--warn)"></i>Voiture (' + nfmt(mob.voiture) + ')</span>' +
              '<span><i style="background:var(--ink-3)"></i>Autre (' + nfmt(mob.autre) + ')</span>' +
            '</div>' +
            '<p class="rdrc-help" style="margin:12px 0 0">Mobilité douce = train, covoiturage, bus ou car, vélo, à pied. ' +
            '« Autre » n\'est jamais compté comme doux : le mode n\'est pas connu.</p>'
          : '<div class="rdrc-state">Rien à mesurer tant qu\'aucun trajet n\'est annoncé.</div>',
        false, IC.leaf);

       
      var bascules = Array.isArray(vil.bascules) ? vil.bascules : [];
      var cardEffet = card('Effet de l\'argumentaire mobilité',
        lect ? nfmt(lect) + ' ' + (lect > 1 ? 'lectures' : 'lecture') : 'jamais lu',
        (lect
          ? '<div class="rdrc-funnel">' +
              '<div class="rdrc-funnel-step"><b>' + nfmt(lect) + '</b><span>ont ouvert le panneau</span></div>' +
              '<div class="rdrc-funnel-arrow" aria-hidden="true">' + IC.swap + '</div>' +
              '<div class="rdrc-funnel-step is-end"><b>' + nfmt(conv) + '</b><span>ont changé de mode</span></div>' +
              '<div class="rdrc-funnel-rate">' + tauxConv + ' %</div>' +
            '</div>'
          : '<div class="rdrc-state">Personne n\'a encore ouvert le panneau « En savoir plus ».</div>') +
        (bascules.length
          ? '<p class="rdrc-kpi-l" style="margin:14px 0 8px">Trajectoires observées</p>' +
            '<ul class="rdrc-flow">' + bascules.map(function (b) {
              return '<li><span>' + esc(b.de) + '</span>' + IC.swap + '<span>' + esc(b.vers) + '</span>' +
                     '<b>' + nfmt(b.count) + '</b></li>';
            }).join('') + '</ul>'
          : (conv
            ? '<p class="rdrc-help" style="margin:12px 0 0">Le mode de départ n\'a pas été enregistré pour ces bascules : ' +
              'il n\'est tracé que depuis la mise en place de cette mesure.</p>'
            : '')),
        true, IC.swap);

      var note = '<p class="rdrc-note"><b>Comment lire ces chiffres.</b> Ce sont des réponses déclaratives, ' +
        'données librement dans le pop-up de profil : elles indiquent une intention, pas une présence. ' +
        'Le taux de changement d\'avis se rapporte aux membres qui ont ouvert l\'argumentaire, pas à tous les ' +
        'répondants. Aucune réponse n\'est reliée à un nom dans cette page, et une demande d\'effacement les ' +
        'emporte avec le reste des préférences.</p>';

      return kpis + '<div class="rdrc-grid">' + cardEffet + cardVenue + cardTransport + cardEmpreinte + '</div>' + note;
    }

     
     
     
    _rowHtml(c, approved) {
      var pseudo = c && c.pseudo ? c.pseudo : '';
      var url = 'https://instagram.com/' + encodeURIComponent(pseudo);
      var age = since(c && c.claimedAt);
      var att = Number(c && c.attempts) || 0;
      var meta = [age, att > 1 ? att + ' envois' : ''].filter(Boolean).join(' · ');
      var busy = !!this._busy[c.memberId];
      var acts = approved
        ? '<button class="rdrc-btn rdrc-no" type="button" data-revoke="1"' + (busy ? ' disabled' : '') + '>Retirer</button>'
        : '<button class="rdrc-btn rdrc-ok" type="button" data-approve="1"' + (busy ? ' disabled' : '') + '>Valider</button>' +
          '<button class="rdrc-btn rdrc-no" type="button" data-approve="0"' + (busy ? ' disabled' : '') + '>Refuser</button>';
      return '<li class="rdrc-row" data-member="' + esc(c.memberId) + '">' +
        (approved ? '<span class="rdrc-tick" aria-hidden="true">' + ICON_CHECK + '</span>' : '') +
        '<div class="rdrc-who">' +
          '<div class="rdrc-pseudo-line">' +
            '<a class="rdrc-pseudo" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">@' + esc(pseudo) + ICON_EXT + '</a>' +
             
             
            '<button class="rdrc-copy" type="button" data-copy="' + esc(pseudo) + '" ' +
              'title="Copier le pseudo pour le coller dans la recherche des abonnés">' + IC.copy + '<span>Copier</span></button>' +
          '</div>' +
          (meta ? '<div class="rdrc-meta' + (!approved && att > 2 ? ' rdrc-warn' : '') + '">' + esc(meta) + '</div>' : '') +
        '</div>' +
        '<div class="rdrc-acts">' + acts + '</div>' +
      '</li>';
    }

     
     
     
     
     
     
     
    _methodeHtml() {
      return '<div class="rdrc-methode">' +
        '<p class="rdrc-methode-t">Comment vérifier</p>' +
        '<ol class="rdrc-methode-l">' +
          '<li>Copie le pseudo (bouton <b>Copier</b> sur la ligne).</li>' +
          '<li>Ouvre <a href="' + esc(INSTA_FOLLOWERS_URL) + '" target="_blank" rel="noopener noreferrer">' +
            'la liste des abonnés de @' + esc(INSTA_COMPTE) + ICON_EXT + '</a>, connecté au compte de la course.</li>' +
          '<li>Colle le pseudo dans le champ de recherche de cette liste : s\'il apparaît, il suit bien le compte.</li>' +
          '<li>Reviens ici et valide ou refuse.</li>' +
        '</ol>' +
        '<p class="rdrc-methode-n">Ouvrir le profil de la personne ne suffit pas : la plupart sont privés. ' +
        'Un refus n\'est pas définitif, le membre le voit dans son espace, corrige son pseudo et renvoie sa demande.</p>' +
      '</div>';
    }

     
     
     
     
    _retardHtml(claims) {
      if (!Array.isArray(claims) || !claims.length) return '';
      var maintenant = Date.now();
      var pire = 0;
      claims.forEach(function (c) {
        var t = c && c.claimedAt ? new Date(c.claimedAt).getTime() : 0;
        if (!t) return;
        var h = (maintenant - t) / 3600000;
        if (h > pire) pire = h;
      });
      if (pire < 48) return '';
      var depasse = pire >= 72;
      var jours = Math.floor(pire / 24);
      var duree = jours >= 1 ? jours + ' jour' + (jours > 1 ? 's' : '') : Math.round(pire) + ' h';
      return '<div class="rdrc-alerte' + (depasse ? ' is-depasse' : '') + '">' +
        '<span class="rdrc-alerte-ic" aria-hidden="true">' + (depasse ? IC.alerte : IC.clock) + '</span>' +
        '<div><b>' + (depasse ? 'Délai dépassé' : 'Délai bientôt atteint') + '</b>' +
        'La plus ancienne demande attend depuis <b>' + esc(duree) + '</b>. ' +
        (depasse
          ? 'La promesse faite au membre dans son espace était une réponse sous 72 h.'
          : 'Au-delà de 72 h, la promesse faite au membre dans son espace n\'est plus tenue.') +
        '</div></div>';
    }

    






















    _mobiliteHtml(p) {
      var self = this;
      var m = p.mobilite;
      if (p.mobiliteError) return '<div class="rdrc-state">' + esc(p.mobiliteError) + '</div>';
      if (!m) return '<div class="rdrc-state">' + (p.loading ? 'Lecture des participations…' : 'Aucune donnée pour l\'instant.') + '</div>';
      var jours = m.jours || [];
      


      var tous = this._mobJour === 'tous' || (!this._mobJour && m.jour === 'tous');
      var enRoute = tous ? m.jour !== 'tous' : (m.jour === 'tous' && this._mobJour !== 'final');
      if (p.mobiliteEchec && p.mobiliteEchec.n !== this._chEchecVu) { this._chEchecVu = p.mobiliteEchec.n; this._chaineEchec(p.mobiliteEchec); }
      var jourVu = this._mobJour && this._mobJour !== 'final' ? this._mobJour : (m.jour || (jours[0] && jours[0].jour) || '');
      if (this._mobJour && this._mobJour !== 'final' && m.jour && m.jour !== this._mobJour && m.jour !== 'tous') jourVu = m.jour;
      if (tous) jourVu = 'tous';
      var final = this._mobJour === 'final';
      this._mobJourVu = jourVu;
      var enCours = jours.find(function (j) { return j.jour === jourVu; }) || {};
      var reg = m.reglages || {};
      

      if (m !== this._mobVu) { this._mobVu = m; this._mobDecalage = m.maintenant ? Date.parse(m.maintenant) - Date.now() : 0; }
      var maintenant = Date.now() + (this._mobDecalage || 0);
      var libelle = function (jour) {
        var d = new Date(jour + 'T12:00:00Z');
        if (isNaN(d.getTime())) return jour;
        var s = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d);
        return d.getUTCDate() === 1 ? s.replace(/(^|\s)1(?=\s)/, '$11er') : s;
      };
      var heureParis = function (iso) {
        var d = new Date(iso);
        if (isNaN(d.getTime())) return '';
        try { return new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }).format(d).replace(':', ' h '); }
        catch (e) { return d.toISOString().slice(11, 16); }
      };
      var jourParis = function (iso) {
        try { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(iso)); }
        catch (e) { return String(iso).slice(0, 10); }
      };
       
      var quandParis = function (iso) { return isNaN(Date.parse(iso)) ? '' : libelle(jourParis(iso)) + ' à ' + heureParis(iso); };
      var pluriel = function (n, un, plusieurs) { return n + ' ' + (n > 1 ? (plusieurs || un + 's') : un); };

      var aVerifierTous = jours.reduce(function (n, j) { return n + (j.aVerifier || 0); }, 0);
      var chips = '<button type="button" class="rdrc-jour" data-mob-jour="tous" aria-pressed="' + (tous ? 'true' : 'false') + '">Tous les jours<small>' + (aVerifierTous ? aVerifierTous + ' à vérifier' : pluriel(m.total || 0, 'inscrit')) + '</small></button>' +
        jours.map(function (j) {
        return '<button type="button" class="rdrc-jour" data-mob-jour="' + esc(j.jour) + '" aria-pressed="' + (!final && !tous && j.jour === jourVu ? 'true' : 'false') + '"' +
          (j.tire ? ' data-tire="1"' : '') + '>' + esc(libelle(j.jour)) + '<small>' + pluriel(j.total || 0, 'inscrit') + (j.tire ? ' · tiré' : '') + '</small></button>';
      }).join('') +
        '<button type="button" class="rdrc-jour" data-mob-jour="final" aria-pressed="' + (final ? 'true' : 'false') + '"' + (m.final ? ' data-tire="1"' : '') + '>Grand tirage<small>' + (m.eligiblesFinal || 0) + ' éligibles' + (m.final ? ' · tiré' : '') + '</small></button>';

      if (enRoute) return '<div class="rdrc-jours">' + chips + '</div><div class="rdrc-state">' + (tous ? 'Lecture de toutes les participations…' : 'Lecture des participations du jour…') + '</div>';
      if (tous) return '<div class="rdrc-jours">' + chips + '</div>' + this._mobTousHtml(m);

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Participations', nfmt(m.total || 0), '', 'sur les 13 jours', 'lead') +
        (final
          ? kpi('Éligibles au final', nfmt(m.eligiblesFinal || 0), '', 'justificatif validé, mode éligible')
          : kpi('Ce jour', nfmt(enCours.total || 0), '', (enCours.aVerifier || 0) + ' à vérifier') +
            kpi('Validées', nfmt(enCours.valides || 0), '', (enCours.refuses || 0) + ' refusée' + (enCours.refuses > 1 ? 's' : '')) +
            kpi('Dans le tirage', nfmt(enCours.dansLeTirage || 0), '', 'pour ' + pluriel(enCours.nbLots || 0, 'lot') + (enCours.equipe ? ', équipe écartée (' + enCours.equipe + ')' : ''), !enCours.dansLeTirage && enCours.libres ? 'alert' : '')) +
      '</div>';

      var parId = {};
      (m.participations || []).forEach(function (x) { parId[x.id] = x; });

       
      var contactActs = function (g, champ) {
        var contact = (g && g[champ]) || '';
        return '<div class="rdrc-mob-acts">' +
          '<span class="rdrc-mob-st" data-s="' + (contact === 'Contacté' ? 'Validé' : contact === 'Injoignable' ? 'Refusé' : 'À vérifier') + '">' + esc(contact || 'À contacter') + '</span>' +
          '<button type="button" class="rdrc-btn rdrc-ok" data-mob-statut="' + esc(g.id) + '" data-champ="' + champ + '" data-valeur="Contacté">Contacté</button>' +
          '<button type="button" class="rdrc-btn rdrc-no" data-mob-statut="' + esc(g.id) + '" data-champ="' + champ + '" data-valeur="Injoignable">Injoignable</button>' +
        '</div>';
      };

       
      var deuxClics = function (cle, libelleBouton, question, actif) {
        if (self._mobConfirme === cle) {
          return '<span class="rdrc-mob-q">' + question + '</span>' +
            '<button type="button" class="rdrc-btn rdrc-go" data-mob-tirer="' + esc(cle) + '">Confirmer le tirage</button>' +
            '<button type="button" class="rdrc-btn" data-mob-annuler="1">Annuler</button>';
        }
        return '<button type="button" class="rdrc-btn rdrc-go" data-mob-armer="' + esc(cle) + '"' + (actif ? '' : ' disabled') + '>' + libelleBouton + '</button>';
      };

      var tirageBloc;
      if (final) {
         
        var tf = m.final;
        var gf = tf && m.finalGagnant && m.finalGagnant.id === tf.gagnantId ? m.finalGagnant : null;
        var finalHtml = function () {
          var g = gf || {};
          return '<div class="rdrc-gagnant"><span class="rdrc-mob-trophee">🏆 Grand tirage final effectué le ' + esc(tf.effectueLe ? new Date(tf.effectueLe).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '') + ' · ' + esc(tf.nbEligibles) + ' éligible' + (tf.nbEligibles > 1 ? 's' : '') + '</span><br>' +
            '<b>' + esc(tf.gagnantNom || ((g.prenom || '') + ' ' + (g.nom || ''))) + '</b> <span class="rdrc-mob-id">' + esc(tf.gagnantId) + '</span>' +
            (g.email ? '<p>' + esc(g.email) + ' · ' + esc(g.telephone || '') + ((g.grandLot || tf.lot) ? ' · lot : ' + esc(g.grandLot || tf.lot) : '') +
              (g.gagnant ? ' · a aussi gagné le lot du jour' + (g.lot ? ' (' + esc(g.lot) + ')' : '') : '') + '</p>' : '') +
            (g.id ? contactActs(g, 'grandContact') : '') + '</div>';
        };
        if (tf && !(gf && gf.grandContact === 'Injoignable')) tirageBloc = finalHtml();
        else {
          var nf = m.eligiblesFinal || 0;
          tirageBloc = (tf ? finalHtml() : '') +
            '<div class="rdrc-tirage"><div class="rdrc-tirage-t">' + (tf ? 'Le gagnant est injoignable. On peut retirer au sort parmi les autres, sans aucune de ses participations. ' : '') +
              (nf ? '<b>' + nf + '</b> participation' + (nf > 1 ? 's' : '') + ' éligible' + (nf > 1 ? 's' : '') + ' au grand tirage final.' : 'Aucune participation éligible : validez d\'abord les justificatifs.') + '</div>' +
              deuxClics('final', 'Effectuer le grand tirage final', 'Tirer le grand lot parmi ' + pluriel(nf, 'participation') + ' ?', nf > 0) +
            '</div>';
        }
      } else {
        var lots = m.lots || { lignes: [], places: [] };
        var places = lots.places || [];
        var ouvertureT = Date.parse(enCours.ouverture || '');
        var ouvert = isFinite(ouvertureT) && maintenant >= ouvertureT;
        var parLot = reg.tirageParLot === true;
        var n = enCours.dansLeTirage || 0;
        var libres = places.filter(function (x) { return x.statut === 'libre'; });
        var aVerifier = enCours.aVerifier || 0;
        var avisVerif = aVerifier ? ' ' + pluriel(aVerifier, 'justificatif') + ' encore à vérifier ' + (aVerifier > 1 ? 'n’y seront pas' : 'n’y sera pas') + '.' : '';

         
        if (this._mobMinuteur) { clearTimeout(this._mobMinuteur); this._mobMinuteur = null; }
        if (!ouvert && isFinite(ouvertureT)) {
          var attente = Math.min(2147000000, Math.max(0, ouvertureT - maintenant) + 250);
          this._mobMinuteur = setTimeout(function () { self._mobMinuteur = null; if (self.isConnected) self._render(); }, attente);
        }

        var etat;
        if (lots.illisibles) etat = '<div class="rdrc-mob-avis" data-ton="alerte">Les lots de ce jour sont illisibles (collection « Mobilité · les lots du jour » absente ou en panne) : le tirage ne part pas. « Actualiser » dans un instant.</div>';
        else if (!places.length) etat = '<div class="rdrc-mob-avis" data-ton="alerte">Aucun lot au CMS pour ce jour (collection « Mobilité · les lots du jour ») : le tirage ne part pas.</div>';
        else etat = '';

        var resume = '';
        if (places.length) {
          var ops = m.operations || [];
          var dernier = ops[ops.length - 1];
          if (!ouvert) {
            resume = 'Le tirage s’ouvre le <b>' + esc(libelle(jourVu)) + ' à ' + esc(heureParis(enCours.ouverture)) + '</b> (heure de Paris), pas avant. ' +
              pluriel(enCours.nbLots || 0, 'lot') + ' en jeu ; ' + pluriel(n, 'participant') + ' dans le tirage à cette heure-ci.' + avisVerif;
          } else if (libres.length) {
            

            resume = (dernier ? pluriel(libres.length, 'lot') + ' encore à tirer. ' : 'Ouvert depuis ' + esc(heureParis(enCours.ouverture)) + '. ') +
              (n ? '<b>' + pluriel(n, 'participant') + '</b> dans le tirage, une chance par personne.' : 'Aucune participation éligible ce jour : validez d’abord les justificatifs.') +
              (n ? '' : avisVerif);
          } else {
            resume = 'Tiré' + (dernier ? ' le ' + esc(quandParis(dernier.effectueLe)) + (dernier.par ? ' par ' + esc(dernier.par) : '') : '') + ' : <b>' +
              pluriel(enCours.attribues + enCours.aRetirer, 'lot attribué', 'lots attribués') + '</b> sur ' + (enCours.nbLots || 0) + '.' +
              (enCours.aRetirer ? ' ' + pluriel(enCours.aRetirer, 'gagnant injoignable', 'gagnants injoignables') + ' : ' + (enCours.aRetirer > 1 ? 'leurs lots peuvent' : 'son lot peut') + ' être remis en jeu.' : '');
          }
          if (enCours.nonAttribues) {
            etat += '<div class="rdrc-mob-avis" data-ton="info">' + pluriel(enCours.nonAttribues, 'lot non attribué', 'lots non attribués') +
              ' : pas assez de participants éligibles au moment du tirage. Le règlement ne prévoit rien : ' + (enCours.nonAttribues > 1 ? 'ils restent' : 'il reste') + ' non attribué' + (enCours.nonAttribues > 1 ? 's' : '') + '.</div>';
          }
          if (enCours.aReparer) {
            etat += '<div class="rdrc-mob-avis" data-ton="alerte">' + pluriel(enCours.aReparer, 'fiche de gagnant', 'fiches de gagnants') + ' pas encore à jour au CMS (le tirage, lui, est enregistré). ' +
              '<button type="button" class="rdrc-btn" data-mob-reparer="' + esc(jourVu) + '">Remettre les fiches à jour</button></div>';
          }
        }

        var bouton = '';
        if (places.length && libres.length && !parLot) {
          bouton = ouvert
            ? deuxClics(jourVu, 'Effectuer le tirage du jour (' + pluriel(libres.length, 'lot') + ')', 'Tirer ' + pluriel(libres.length, 'lot') + ' parmi ' + pluriel(n, 'participant') + ' ?' + avisVerif, n > 0)
            : '<button type="button" class="rdrc-btn rdrc-go" disabled data-mob-attente>S’ouvre à ' + esc(heureParis(enCours.ouverture)) + '</button>';
        }
        tirageBloc = etat + (places.length ? '<div class="rdrc-tirage"><div class="rdrc-tirage-t">' + resume + '</div>' + bouton + '</div>' : '');

         
        var lignes = (lots.lignes || []).slice();
        places.forEach(function (x) { if (x.horsListe && !lignes.some(function (l) { return l.ligneId === x.ligneId; })) lignes.push({ ligneId: x.ligneId, lot: x.lot, nbGagnants: 0, horsListe: true }); });
        var lotsHtml = lignes.map(function (l) {
          var ps = places.filter(function (x) { return x.ligneId === l.ligneId; });
          var libresLigne = ps.filter(function (x) { return x.statut === 'libre'; }).length;
          var acte = '';
          if (parLot && libresLigne) {
            acte = ouvert ? deuxClics('L|' + l.ligneId, 'Tirer ce lot (' + pluriel(libresLigne, 'gagnant') + ')', 'Tirer ' + pluriel(libresLigne, 'gagnant') + ' pour ce lot parmi ' + pluriel(n, 'participant') + ' ?', n > 0)
                          : '<button type="button" class="rdrc-btn" disabled>S’ouvre à ' + esc(heureParis(enCours.ouverture)) + '</button>';
          }
          return '<div class="rdrc-lot" data-ligne="' + esc(l.ligneId) + '">' +
            '<div class="rdrc-lot-h"><span class="rdrc-lot-t">' + esc(l.lot) + '</span><span class="rdrc-lot-n">' + (l.horsListe ? 'retiré du CMS' : '× ' + l.nbGagnants) + '</span>' + (acte ? '<span class="rdrc-lot-a">' + acte + '</span>' : '') + '</div>' +
            ps.map(function (x) {
              var t = x.titulaire;
              var g = t ? (parId[t.gagnantId] || { id: t.gagnantId }) : null;
              var corps;
              if (!t) corps = '<span class="rdrc-place-g rdrc-place-vide">' + (x.statut === 'non-attribuee' ? 'non attribué' : ouvert ? 'à tirer' : 'à tirer à ' + esc(heureParis(enCours.ouverture))) + '</span>';
              else {
                corps = '<span class="rdrc-place-g"><b>' + esc(t.gagnantNom || ((g.prenom || '') + ' ' + (g.nom || ''))) + '</b> <span class="rdrc-mob-id">' + esc(t.gagnantId) + '</span>' +
                  (g.email ? '<small>' + esc(g.telephone || '') + ' · ' + esc(g.email) + '</small>' : '') +
                  ((x.anciens || []).length ? '<small>remplace ' + x.anciens.map(function (a) { return esc(a.gagnantNom || a.gagnantId); }).join(', ') + ' (injoignable)</small>' : '') + '</span>' +
                  (g.id ? contactActs(g, 'contactGagnant') : '') +
                  (x.statut === 'a-retirer' ? '<span class="rdrc-place-r">' + deuxClics('P|' + x.place, 'Remettre ce lot en jeu', 'Remettre ce lot en jeu, sans ' + esc(t.gagnantNom || t.gagnantId) + ' ni personne déjà tiré ce jour ?', true) + '</span>' : '');
              }
              return '<div class="rdrc-place" data-place="' + esc(x.place) + '" data-statut="' + esc(x.statut) + '"><span class="rdrc-place-n">' + (x.rang || '·') + '</span>' + corps + '</div>';
            }).join('') +
          '</div>';
        }).join('');
        if (lotsHtml) tirageBloc += '<div class="rdrc-lots">' + lotsHtml + '</div>';
        if (places.some(function (x) { return x.titulaire; })) tirageBloc += '<p class="rdrc-note">« Exporter », en haut à droite, télécharge les gagnants de ce jour en CSV : le fichier contient leurs coordonnées, à garder dans l’équipe.</p>';
      }

      var lignesParticipations = (m.participations || []).map(function (x) { return self._mobLigne(x, false); }).join('');
      var restentJour = this._chaineFile(m.participations).length;

      var modes = Object.keys(m.modes || {}).map(function (k) { return { label: k, count: m.modes[k] }; }).sort(function (a, b) { return b.count - a.count; });
       
      var finJeu = reg.finJeu && !isNaN(Date.parse(reg.finJeu)) ? quandParis(new Date(Date.parse(reg.finJeu) - 60000).toISOString()) : '';
      var sousTitre = reg.ouvert ? 'challenge ouvert' + (finJeu ? ' · se ferme seul le ' + finJeu : '')
                    : (reg.ouvertCoche ? 'challenge terminé (article 2)' : 'challenge fermé au public');

      return '<div class="rdrc-jours">' + chips + '</div>' + kpis +
        (restentJour && !final ? this._mobChaineBandeau(restentJour, 'de ce jour') : '') +
        '<div class="rdrc-grid">' +
          card(final ? 'Le grand tirage final' : 'Le tirage du ' + libelle(jourVu), sousTitre, tirageBloc, true) +
          (final ? '' : card('Les participations du ' + libelle(jourVu), pluriel(enCours.total || 0, 'inscrit'),
            (lignesParticipations || '<div class="rdrc-state">Personne n\'a encore choisi ce jour.</div>') +
            '<p class="rdrc-note">Le justificatif s\'ouvre dans un nouvel onglet. « Valider » fait entrer la participation dans les tirages, « Refuser » l\'en écarte, « Exclure » l\'écarte définitivement (fraude, doublon). Une adresse de l\'équipe est listée mais jamais tirée. L\'export complet des participations se fait depuis le gestionnaire de contenu, collection « Mobilité · les participations ».</p>', true)) +
          card('Modes de transport déclarés', nfmt(m.total || 0) + ' participations',
            modes.length ? barsH(modes, { whole: m.total || 1 }) : '<div class="rdrc-state">Rien encore.</div>', false) +
          card('Par jour', '13 jours du village',
            jours.map(function (j) { return { label: libelle(j.jour), count: j.total || 0 }; }).some(function (x) { return x.count; })
              ? barsH(jours.map(function (j) { return { label: libelle(j.jour), count: j.total || 0 }; }), { whole: m.total || 1 })
              : '<div class="rdrc-state">Rien encore.</div>', false) +
        '</div>';
    }

    

    _mobLigne(x, avecJour) {
        var inscrit = x.inscritLe ? new Date(x.inscritLe).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
        var statut = x.statutParticipation === 'Exclue' ? 'Exclue' : x.statutJustificatif;
        return '<div class="rdrc-mob" data-mob-id="' + esc(x.id) + '"' + (x.gagnant || x.grandGagnant ? ' data-gagnant="1"' : '') + '>' +
          '<span class="rdrc-mob-id">' + esc(x.id) + '</span>' +
          '<span class="rdrc-mob-nom">' + esc(x.prenom + ' ' + x.nom) + (x.gagnant ? ' <span class="rdrc-mob-trophee">🏆</span>' : '') +
            (x.grandGagnant ? ' <span class="rdrc-mob-trophee">🏆 grand tirage</span>' : '') +
            (x.equipe ? ' <span class="rdrc-mob-equipe" title="Adresse de l’équipe (règlement, article 3.4) : jamais tirée">équipe</span>' : '') +
            '<small>' + esc(x.email) + ' · ' + esc(x.telephone) + ' · inscrit le ' + esc(inscrit) + '</small></span>' +
          '<span class="rdrc-mob-mode">' + (avecJour ? '<span class="rdrc-mob-jourv">' + esc(mobJourLibelle(x.jour)) + '</span>' : '') + esc(x.mode) + (x.precision ? ' (' + esc(x.precision) + ')' : '') +
            (x.justificatifUrl ? '<a href="' + esc(x.justificatifUrl) + '" target="_blank" rel="noopener">Voir le justificatif' + (x.justificatifNom ? ' · ' + esc(x.justificatifNom) : '') + '</a>' : '<a>aucun fichier</a>') + '</span>' +
          '<span class="rdrc-mob-st" data-s="' + esc(statut) + '">' + esc(statut) + '</span>' +
          '<span class="rdrc-mob-acts">' +
            (x.statutJustificatif !== 'Validé' ? '<button type="button" class="rdrc-btn rdrc-ok" data-mob-statut="' + esc(x.id) + '" data-champ="statutJustificatif" data-valeur="Validé">Valider</button>' : '') +
            (x.statutJustificatif !== 'Refusé' ? '<button type="button" class="rdrc-btn rdrc-no" data-mob-statut="' + esc(x.id) + '" data-champ="statutJustificatif" data-valeur="Refusé">Refuser</button>' : '') +
            (x.statutParticipation !== 'Exclue' ? '<button type="button" class="rdrc-btn" data-mob-statut="' + esc(x.id) + '" data-champ="statutParticipation" data-valeur="Exclue" title="Écarter des tirages">Exclure</button>'
                                                : '<button type="button" class="rdrc-btn" data-mob-statut="' + esc(x.id) + '" data-champ="statutParticipation" data-valeur="Éligible">Réintégrer</button>') +
          '</span>' +
        '</div>';
    }

    







    _mobTousHtml(m) {
      var liste = m.participations || [];
      var n = { total: liste.length, aVerifier: 0, valides: 0, refuses: 0, exclues: 0 };
      liste.forEach(function (x) {
        if (x.statutParticipation === 'Exclue') n.exclues++;
        if (x.statutJustificatif === 'Validé') n.valides++;
        else if (x.statutJustificatif === 'Refusé') n.refuses++;
        else if (x.statutParticipation !== 'Exclue') n.aVerifier++;
      });
      var restent = this._chaineFile(liste).length;
      var f = this._mobFiltreTous();
      var modes = {};
      liste.forEach(function (x) { if (x.mode) modes[x.mode] = (modes[x.mode] || 0) + 1; });
      var opt = function (val, txt, actuel) { return '<option value="' + esc(val) + '"' + (val === actuel ? ' selected' : '') + '>' + esc(txt) + '</option>'; };
      var kpis = '<div class="rdrc-kpis">' +
        kpi('Participations', nfmt(n.total), '', 'sur les 13 jours', 'lead') +
        kpi('À vérifier', nfmt(n.aVerifier), '', n.aVerifier ? 'seuls les validés entrent au tirage' : 'tout est vérifié', n.aVerifier ? 'alert' : '') +
        kpi('Validées', nfmt(n.valides), '', 'dans le tirage de leur jour') +
        kpi('Refusées', nfmt(n.refuses), '', n.exclues ? n.exclues + ' exclue' + (n.exclues > 1 ? 's' : '') + ' des tirages' : 'aucune exclue') +
      '</div>';
      var outils = '<div class="rdrc-mob-outils" role="search">' +
        '<select data-mob-filtre="statut" aria-label="Statut du justificatif">' +
          opt('À vérifier', 'À vérifier', f.statut) + opt('Validé', 'Validés', f.statut) + opt('Refusé', 'Refusés', f.statut) +
          opt('Exclue', 'Exclus', f.statut) + opt('', 'Tous les statuts', f.statut) + '</select>' +
        '<select data-mob-filtre="jour" aria-label="Jour de venue">' + opt('', 'Tous les jours', f.jour) +
          (m.jours || []).map(function (j) { return opt(j.jour, mobJourLibelle(j.jour), f.jour); }).join('') + '</select>' +
        '<select data-mob-filtre="mode" aria-label="Mode de transport">' + opt('', 'Tous les modes', f.mode) +
          Object.keys(modes).sort().map(function (k) { return opt(k, k, f.mode); }).join('') + '</select>' +
        '<input type="search" data-mob-filtre="q" value="' + esc(f.q) + '" placeholder="Nom, e-mail, téléphone ou MOB-…" aria-label="Rechercher une participation" autocomplete="off" spellcheck="false">' +
      '</div>';
      return kpis + (restent ? this._mobChaineBandeau(restent, 'sur les 13 jours') : '') +
        '<div class="rdrc-grid">' +
          card('Toutes les participations', 'les 13 jours du village',
            outils + '<div data-mob-liste>' + this._mobListeTousHtml(m) + '</div>' +
            '<p class="rdrc-note">Le jour le plus proche du tirage d’abord, puis l’ordre d’arrivée. Le justificatif s’ouvre dans un nouvel onglet ; pour les vérifier l’un après l’autre sans quitter la console, « Vérifier à la chaîne ». Une adresse de l’équipe est listée mais jamais tirée.</p>', true) +
        '</div>';
    }

    _mobFiltreTous() {
      if (!this._mobFiltre) this._mobFiltre = { statut: 'À vérifier', jour: '', mode: '', q: '' };
      return this._mobFiltre;
    }

    

    _mobOrdre(a, b) {
      return String(a.jour || '').localeCompare(String(b.jour || '')) || String(a.inscritLe || '').localeCompare(String(b.inscritLe || '')) || String(a.id).localeCompare(String(b.id));
    }

    _mobFiltrer(liste, f) {
      var sansAccent = function (v) { return String(v || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
      var chiffres = function (v) { var d = String(v || '').replace(/\D/g, ''); return d.indexOf('33') === 0 && d.length > 9 ? '0' + d.slice(2) : d; };
      var q = sansAccent(f.q).trim().replace(/\s+/g, ' ');
      var qChiffres = /\d/.test(q) && !/[a-z]/.test(q) ? chiffres(q) : '';
      return (liste || []).filter(function (x) {
        if (f.statut === 'Exclue') { if (x.statutParticipation !== 'Exclue') return false; }
        else if (f.statut && (x.statutParticipation === 'Exclue' || x.statutJustificatif !== f.statut)) return false;
        if (f.jour && x.jour !== f.jour) return false;
        if (f.mode && x.mode !== f.mode) return false;
        if (q) {
          if (qChiffres) return chiffres(x.telephone).indexOf(qChiffres) >= 0 || sansAccent(x.id).indexOf(q) >= 0;
          var foin = sansAccent([x.prenom, x.nom, x.prenom, x.email, x.id].join(' '));
          return foin.indexOf(q) >= 0;
        }
        return true;
      }).sort(this._mobOrdre);
    }

    _mobListeTousHtml(m) {
      var self = this;
      var tri = this._mobFiltrer(m.participations || [], this._mobFiltreTous());
      var max = this._mobMax || 100;
      var html = tri.slice(0, max).map(function (x) { return self._mobLigne(x, true); }).join('');
      var reste = tri.length - max;
      return '<p class="rdrc-mob-compte" aria-live="polite">' + tri.length + ' participation' + (tri.length > 1 ? 's' : '') +
          (reste > 0 ? ', les ' + max + ' premières affichées' : '') + '</p>' +
        (html || '<div class="rdrc-state">Aucune participation ne correspond.</div>') +
        (reste > 0 ? '<div class="rdrc-mob-plus"><button type="button" class="rdrc-btn" data-mob-plus>Afficher ' + Math.min(100, reste) + ' de plus (' + reste + ' restantes)</button></div>' : '');
    }

    _mobChaineBandeau(n, ou) {
      return '<div class="rdrc-mob-chaine"><p><b>' + n + ' justificatif' + (n > 1 ? 's' : '') + ' à vérifier</b> ' + esc(ou) +
        '. Un à la fois, en grand, le jour le plus proche du tirage d’abord.</p>' +
        '<button type="button" class="rdrc-btn" data-mob-chaine>Vérifier à la chaîne</button></div>';
    }

    

    _chaineFile(liste) {
      return (liste || []).filter(function (x) { return x.statutJustificatif === 'À vérifier' && x.statutParticipation !== 'Exclue'; }).sort(this._mobOrdre);
    }

    _mobBrancherStatuts(racine) {
      var self = this;
      racine.querySelectorAll('[data-mob-statut]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.disabled = true;
          self._emit('rc-mob-statut', { id: btn.getAttribute('data-mob-statut'), champ: btn.getAttribute('data-champ'), valeur: btn.getAttribute('data-valeur') });
        });
      });
    }

    _mobBrancherTous() {
      var self = this;
      this.querySelectorAll('[data-mob-chaine]').forEach(function (b) { b.addEventListener('click', function () { self._chaineOuvrir(b); }); });
      var liste = this.querySelector('[data-mob-liste]');
      var m = this._payload && this._payload.mobilite;
      if (!liste || !m) return;
      var brancherPlus = function () {
        var b = liste.querySelector('[data-mob-plus]');
        if (b) b.addEventListener('click', function () { self._mobMax = (self._mobMax || 100) + 100; redessiner(); });
      };
      var redessiner = function () { liste.innerHTML = self._mobListeTousHtml(m); self._mobBrancherStatuts(liste); brancherPlus(); };
      brancherPlus();
      this.querySelectorAll('[data-mob-filtre]').forEach(function (c) {
        var cle = c.getAttribute('data-mob-filtre');
        c.addEventListener(c.tagName === 'INPUT' ? 'input' : 'change', function () { self._mobFiltreTous()[cle] = c.value; self._mobMax = 100; redessiner(); });
        if (cle === 'q') {
          c.addEventListener('focus', function () { self._mobQActif = true; });
          c.addEventListener('blur', function () { self._mobQActif = false; });
          

          if (self._mobQActif) { c.focus({ preventScroll: true }); try { c.setSelectionRange(c.value.length, c.value.length); } catch (e) {} }
        }
      });
    }

    











    _chaineOuvrir(depuis) {
      var m = this._payload && this._payload.mobilite;
      if (!m || this._ch) return;
      var file = this._chaineFile(m.participations).map(function (x) { return Object.assign({}, x); });
      if (!file.length) return;
      var self = this;
      this._ch = { file: file, i: 0, hist: [], arme: '', avis: '', echecs: [], jours: m.jours || [], vu: m.jour, cadres: {}, depuis: 0, retour: depuis || null };
      var o = document.createElement('div');
      o.className = 'rdrc-ch';
      o.setAttribute('role', 'dialog');
      o.setAttribute('aria-modal', 'true');
      o.setAttribute('aria-label', 'Vérifier les justificatifs à la chaîne');
      o.innerHTML = '<div class="rdrc-ch-h"><span class="rdrc-ch-t">Vérifier à la chaîne</span><span class="rdrc-ch-n" data-ch-n aria-live="polite"></span>' +
        '<span class="rdrc-ch-barre" aria-hidden="true"><i data-ch-barre></i></span>' +
        '<button type="button" class="rdrc-ch-x" data-ch-quitter>Quitter <span aria-hidden="true">(Échap)</span></button></div>' +
        '<div class="rdrc-ch-c" data-ch-c></div>';
      o.addEventListener('click', function (e) {
        var b = e.target.closest && e.target.closest('[data-ch-dec],[data-ch-annuler],[data-ch-quitter],[data-ch-fin],[data-ch-zoom],[data-ch-pivot]');
        if (!b || b.disabled) {
          var img = e.target.closest && e.target.closest('.rdrc-ch-f img');
          if (img) img.parentNode.classList.toggle('is-zoom');
          return;
        }
        if (b.hasAttribute('data-ch-dec')) self._chaineDecider(b.getAttribute('data-ch-dec'), e.detail === 0);
        else if (b.hasAttribute('data-ch-annuler')) self._chaineAnnuler();
        else if (b.hasAttribute('data-ch-quitter')) self._chaineFermer();
        else if (b.hasAttribute('data-ch-zoom')) b.closest('.rdrc-ch-f').classList.toggle('is-zoom');
        else if (b.hasAttribute('data-ch-pivot')) {
          var im = b.closest('.rdrc-ch-f').querySelector('img');
          if (im) { var r = ((+im.getAttribute('data-r') || 0) + 90) % 360; im.setAttribute('data-r', r); im.style.transform = r ? 'rotate(' + r + 'deg)' : ''; }
        } else if (b.getAttribute('data-ch-fin') === 'revoir') self._chaineRevoir();
        else self._chaineFermer();
      });
      this._chTouche = function (e) {
        var ch = self._ch;
        if (!ch) return;
        if (!self.isConnected) { self._chaineFermer(); return; }
        if (e.repeat) { if (/^[vreVRE]$|^Arrow|^Enter$/.test(e.key)) e.preventDefault(); return; }
        var t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
        if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); self._chaineAnnuler(); return; }
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        var k = e.key;
        if (k === 'Escape') { e.preventDefault(); if (ch.arme) { ch.arme = ''; self._chaineDessiner(); } else self._chaineFermer(); return; }
        if (k === 'ArrowLeft' || k === 'Backspace') { e.preventDefault(); self._chaineAnnuler(); return; }
        if (ch.i >= ch.file.length) return;
        var v = k === 'v' || k === 'V' ? 'Validé' : k === 'r' || k === 'R' ? 'Refusé' : k === 'e' || k === 'E' ? 'Exclue'
              : k === 'ArrowRight' ? 'passer' : k === 'Enter' && ch.arme ? ch.arme : '';
        if (!v) return;
        e.preventDefault();
        self._chaineDecider(v, true);
      };
      document.addEventListener('keydown', this._chTouche, true);
      this._chDebordement = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      document.body.appendChild(o);
      this._chEl = o;
      this._chaineDessiner();
    }

    _chaineDecider(v, clavier) {
      var ch = this._ch;
      if (!ch || ch.i >= ch.file.length) return;
      

      if (!clavier && Date.now() - ch.depuis < 350) return;
      var x = ch.file[ch.i];
      if ((v === 'Refusé' || v === 'Exclue') && ch.arme !== v) { ch.arme = v; ch.avis = ''; this._chaineDessiner(); return; }
      ch.arme = '';
      ch.avis = '';
      if (v === 'passer') ch.hist.push({ i: ch.i, id: x.id, passe: true });
      else {
        var champ = v === 'Exclue' ? 'statutParticipation' : 'statutJustificatif';
        ch.hist.push({ i: ch.i, id: x.id, champ: champ, ancien: x[champ], valeur: v });
        x[champ] = v;
        this._emit('rc-mob-chaine', { id: x.id, champ: champ, valeur: v });
      }
      ch.i++;
      ch.depuis = Date.now();
      this._chaineDessiner();
    }

    _chaineAnnuler() {
      var ch = this._ch;
      if (!ch) return;
      var h = ch.hist.pop();
      if (!h) return;
      ch.arme = '';
      ch.i = h.i;
      var x = ch.file[h.i];
      if (h.passe) ch.avis = '';
      else {
        x[h.champ] = h.ancien;
        this._emit('rc-mob-chaine', { id: h.id, champ: h.champ, valeur: h.ancien });
        ch.avis = 'Décision annulée : « ' + (h.valeur === 'Exclue' ? 'Exclure' : h.valeur) + ' » est retirée, la participation est de nouveau ' + (h.champ === 'statutParticipation' ? 'éligible' : 'à vérifier') + '.';
      }
      ch.depuis = Date.now();
      this._chaineDessiner();
    }

    

    _chaineEchec(e) {
      var ch = this._ch;
      if (!ch || !e) return;
      if (ch.echecs.indexOf(e.id) < 0) ch.echecs.push(e.id);
      for (var k = ch.hist.length - 1; k >= 0; k--) { if (ch.hist[k].id === e.id && !ch.hist[k].passe) { ch.hist[k].echec = true; break; } }
      var x = ch.file.filter(function (y) { return y.id === e.id; })[0];
      if (x) { x.statutJustificatif = 'À vérifier'; x.statutParticipation = 'Éligible'; }
      ch.avis = 'La décision « ' + e.valeur + ' » sur ' + e.id + ' n’a pas été enregistrée : la participation reste à vérifier. Elle vous sera reproposée à la fin de la file.';
      this._chaineDessiner();
    }

    

    _chaineRevoir() {
      var ch = this._ch;
      if (!ch) return;
      var vues = {};
      var file = [];
      ch.hist.forEach(function (h) { if (h.passe || ch.echecs.indexOf(h.id) >= 0) vues[h.id] = true; });
      ch.file.forEach(function (x) { if (vues[x.id] && x.statutJustificatif === 'À vérifier' && x.statutParticipation !== 'Exclue') file.push(x); });
      if (!file.length) return;
      Object.keys(ch.cadres).forEach(function (k) { ch.cadres[k].remove(); });
      Object.assign(ch, { file: file, i: 0, hist: [], arme: '', avis: '', echecs: [], cadres: {}, depuis: Date.now() });
      this._chaineDessiner();
    }

    _chaineFermer() {
      var ch = this._ch;
      if (!ch) return;
      this._ch = null;
      document.removeEventListener('keydown', this._chTouche, true);
      document.documentElement.style.overflow = this._chDebordement || '';
      if (this._chEl) this._chEl.remove();
      this._chEl = null;
       
      if (this.isConnected && ch.vu) this._emit('rc-mob-jour', { jour: ch.vu });
      var b = this.querySelector('[data-mob-chaine]');
      if (b) b.focus({ preventScroll: true });
       
      this._focusApres = '[data-mob-chaine]';
    }

    _chaineCadreHtml(x) {
      var url = x.justificatifUrl || '';
      if (!url) return '<p class="rdrc-ch-f-vide">Aucun fichier joint à cette participation.</p>';
      var lien = '<a href="' + esc(url) + '" target="_blank" rel="noopener">Ouvrir dans un onglet</a>';
      if (x.justificatifImage) {
        return '<img src="' + esc(url) + '" alt="Justificatif de ' + esc(x.prenom + ' ' + x.nom) + '" decoding="async">' +
          '<div class="rdrc-ch-out"><button type="button" data-ch-zoom>Agrandir</button><button type="button" data-ch-pivot>Pivoter</button>' + lien + '</div>';
      }
      

      return '<iframe src="' + esc(url) + '#navpanes=0&amp;view=FitH" title="Justificatif de ' + esc(x.prenom + ' ' + x.nom) + '"></iframe>' +
        '<div class="rdrc-ch-out">' + lien.replace('Ouvrir dans un onglet', 'PDF vide ? L’ouvrir dans un onglet') + '</div>';
    }

    _chaineDessiner() {
      var ch = this._ch, o = this._chEl;
      if (!ch || !o) return;
      var self = this;
      var total = ch.file.length;
      var compte = { 'Validé': 0, 'Refusé': 0, 'Exclue': 0, passe: 0, echec: 0 };
      ch.hist.forEach(function (h) { compte[h.passe ? 'passe' : h.echec ? 'echec' : h.valeur]++; });
      var resume = [compte['Validé'] ? compte['Validé'] + ' validé' + (compte['Validé'] > 1 ? 's' : '') : '',
        compte['Refusé'] ? compte['Refusé'] + ' refusé' + (compte['Refusé'] > 1 ? 's' : '') : '',
        compte.Exclue ? compte.Exclue + ' exclu' + (compte.Exclue > 1 ? 's' : '') : '',
        compte.passe ? compte.passe + ' passé' + (compte.passe > 1 ? 's' : '') : '',
        compte.echec ? compte.echec + ' non enregistré' + (compte.echec > 1 ? 's' : '') : ''].filter(Boolean).join(' · ');
      var fin = ch.i >= total;
      o.querySelector('[data-ch-n]').innerHTML = (fin ? 'Terminé' : (ch.i + 1) + ' sur ' + total) + (resume ? '<small>' + resume + '</small>' : '');
      o.querySelector('[data-ch-barre]').style.width = Math.round(100 * Math.min(ch.i, total) / total) + '%';
      var c = o.querySelector('[data-ch-c]');

      if (fin) {
        Object.keys(ch.cadres).forEach(function (k) { ch.cadres[k].remove(); });
        ch.cadres = {};
        var aRevoir = {};
        ch.hist.forEach(function (h) { if (h.passe || ch.echecs.indexOf(h.id) >= 0) aRevoir[h.id] = true; });
        var nRevoir = ch.file.filter(function (x) { return aRevoir[x.id] && x.statutJustificatif === 'À vérifier' && x.statutParticipation !== 'Exclue'; }).length;
        c.innerHTML = '<div class="rdrc-ch-fin"><div class="rdrc-ch-fin-c">' +
          (ch.avis ? '<p class="rdrc-ch-avis" role="alert">' + esc(ch.avis) + '</p>' : '') +
          '<h2>File terminée</h2><p>' + (resume ? esc(resume) + '.' : 'Aucune décision.') + (nRevoir ? ' ' + nRevoir + ' participation' + (nRevoir > 1 ? 's restent' : ' reste') + ' à vérifier.' : '') + '</p>' +
          '<div class="rdrc-ch-fin-a">' + (nRevoir ? '<button type="button" class="rdrc-ch-b" data-v="revoir" data-ch-fin="revoir">Revoir ' + (nRevoir > 1 ? 'les ' + nRevoir + ' restantes' : 'la restante') + '</button>' : '') +
          '<button type="button" class="rdrc-ch-b" data-v="fermer" data-ch-fin="fermer">Revenir à la console</button></div>' +
          '<div class="rdrc-ch-pied" style="justify-content:center;margin-top:14px"><button type="button" class="rdrc-ch-annul" data-ch-annuler' + (ch.hist.length ? '' : ' disabled') + '>Annuler la dernière décision</button></div>' +
          '</div></div>';
        var bf = c.querySelector('[data-ch-fin]');
        if (bf) bf.focus({ preventScroll: true });
        return;
      }

      var vue = c.querySelector('[data-ch-vue]');
      if (!vue) {
        c.innerHTML = '<div class="rdrc-ch-vue" data-ch-vue></div><aside class="rdrc-ch-p" data-ch-p aria-label="La participation"></aside>';
        vue = c.querySelector('[data-ch-vue]');
      }
      var x = ch.file[ch.i];
      var garder = {};
      [ch.i - 1, ch.i, ch.i + 1].forEach(function (k) { if (ch.file[k]) garder[ch.file[k].id] = true; });
      Object.keys(ch.cadres).forEach(function (k) { if (!garder[k]) { ch.cadres[k].remove(); delete ch.cadres[k]; } });
      var cadre = function (y) {
        var el = ch.cadres[y.id];
        if (!el) {
          el = document.createElement('div');
          el.className = 'rdrc-ch-f';
          el.setAttribute('data-etat', 'cache');
          el.innerHTML = self._chaineCadreHtml(y);
          vue.appendChild(el);
          ch.cadres[y.id] = el;
        }
        return el;
      };
      Object.keys(ch.cadres).forEach(function (k) { ch.cadres[k].setAttribute('data-etat', 'cache'); });
      cadre(x).setAttribute('data-etat', 'vu');
      

      if (ch.file[ch.i + 1]) cadre(ch.file[ch.i + 1]);
      var apres = ch.file[ch.i + 2];
      if (apres && apres.justificatifImage && apres.justificatifUrl) { var pre = new Image(); pre.decoding = 'async'; pre.src = apres.justificatifUrl; }

      var j = ch.jours.filter(function (d) { return d.jour === x.jour; })[0] || {};
      var heure = j.heure ? String(j.heure).replace(/^(\d\d):00$/, '$1 h').replace(':', ' h ') : '';
      var envoi = x.inscritLe ? new Date(x.inscritLe).toLocaleString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
      var statut = x.statutParticipation === 'Exclue' ? 'Exclue' : x.statutJustificatif;
      

      var EXIGE = {
        'Train': 'Un billet de train nominatif (TGV, TER…).',
        'Bus': 'Autocar ou car : un billet nominatif, ou une photo dans ou devant le véhicule. Bus urbain : un ticket de bus, et idéalement une photo dans le bus.',
        'Covoiturage': 'Au moins 4 personnes dans le véhicule : des photos dans la voiture, ou idéalement sur le parking officiel avec les 4 personnes.',
        'Vélo': 'Une photographie.',
        'À pied': 'Une photographie.'
      };
      var a = ch.arme;
      c.querySelector('[data-ch-p]').innerHTML =
        (ch.avis ? '<p class="rdrc-ch-avis" role="alert">' + esc(ch.avis) + '</p>' : '') +
        '<div class="rdrc-ch-id"><span>' + esc(x.id) + '</span><span class="rdrc-mob-st" data-s="' + esc(statut) + '">' + esc(statut) + '</span>' +
          (x.equipe ? '<span class="rdrc-mob-equipe" title="Adresse de l’équipe (règlement, article 3.4) : jamais tirée">équipe</span>' : '') + '</div>' +
        '<h2 class="rdrc-ch-nom">' + esc(x.prenom + ' ' + x.nom) + '</h2>' +
        '<dl class="rdrc-ch-dl">' +
          '<dt>Vient le</dt><dd>' + esc(mobJourLibelle(x.jour)) + (heure ? '<small>tirage ce jour-là à ' + esc(heure) + '</small>' : '') + '</dd>' +
          '<dt>Mode</dt><dd>' + esc(x.mode || '—') + (x.precision ? '<small>' + esc(x.precision) + '</small>' : '') + '</dd>' +
          '<dt>Envoyé le</dt><dd>' + esc(envoi || '—') + '</dd>' +
          '<dt>Fichier</dt><dd>' + esc(x.justificatifNom || '—') + '</dd>' +
          '<dt>Contact</dt><dd>' + esc(x.email || '') + '<small>' + esc(x.telephone || '') + '</small></dd>' +
        '</dl>' +
        '<div class="rdrc-ch-regle"><b>Le règlement demande (article 3.6)</b>' +
          esc(EXIGE[x.mode] || 'Un mode que le règlement ne prévoit pas : la participation n’entre jamais au tirage.') + '</div>' +
        '<div class="rdrc-ch-acts">' +
          '<button type="button" class="rdrc-ch-b" data-v="Validé" data-ch-dec="Validé">Valider<kbd>V</kbd></button>' +
          '<button type="button" class="rdrc-ch-b" data-v="Refusé" data-ch-dec="Refusé"' + (a === 'Refusé' ? ' data-arme="1"' : '') + '>' + (a === 'Refusé' ? 'Confirmer le refus' : 'Refuser') + '<kbd>' + (a === 'Refusé' ? 'R ou Entrée' : 'R') + '</kbd></button>' +
          '<button type="button" class="rdrc-ch-b" data-v="Exclue" data-ch-dec="Exclue"' + (a === 'Exclue' ? ' data-arme="1"' : '') + '>' + (a === 'Exclue' ? 'Confirmer l’exclusion' : 'Exclure') + '<kbd>' + (a === 'Exclue' ? 'E ou Entrée' : 'E') + '</kbd></button>' +
          (a ? '<p class="rdrc-ch-q">' + (a === 'Refusé' ? 'Refuser ce justificatif : la participation sort du tirage de son jour.' : 'Exclure cette participation de tous les tirages (fraude, doublon).') + ' Échap pour revenir.</p>' : '') +
          '<button type="button" class="rdrc-ch-b" data-v="passer" data-ch-dec="passer">Passer<kbd>→</kbd></button>' +
          '<div class="rdrc-ch-pied"><button type="button" class="rdrc-ch-annul" data-ch-annuler' + (ch.hist.length ? '' : ' disabled') + '>Annuler la dernière décision</button>' +
            '<span class="rdrc-ch-touches">V valider · R refuser · E exclure · → passer · ← annuler · Échap quitter</span></div>' +
        '</div>';
      var focus = c.querySelector(a ? '[data-ch-dec="' + a + '"]' : '[data-ch-dec="Validé"]');
      if (focus) focus.focus({ preventScroll: true });
    }

    















    _justeTempsHtml(p) {
      if (p.justeTempsError) return '<p class="rdrc-err">' + esc(p.justeTempsError) + '</p>';
      var v = p.justeTemps;
      if (!v) return '<div class="rdrc-state">' + (p.loading ? 'Lecture du jeu…' : 'Aucune donnée pour l\'instant.') + '</div>';
      var jeu = v.jeu || {};
      if (!jeu.existe) {
        return '<div class="rdrc-state"><b>Aucun jeu configuré</b>La ligne « rdr-2026 » de PRONOSTICS_COURSE est absente, ou sans date de fermeture ni classes.</div>';
      }
      var classes = jeu.classes || [];
      var c = v.chiffres || {};
      var it = jeu.interrupteur || {};
      var r = v.resultat || {};
      var parts = v.participants || [];
      var calcule = Date.parse(v.calculeLe || '') || Date.now();
      var pastille = function (cl) { return '<span class="rdrc-jt-pt" style="background:' + esc(CLASS_COLORS[cl] || 'var(--teal)') + '"></span>'; };
      var alerte = function (titre, texte) {
        return '<div class="rdrc-alerte"><span class="rdrc-alerte-ic" aria-hidden="true">' + IC.alerte + '</span><div><b>' + esc(titre) + '</b>' + texte + '</div></div>';
      };
      var fiche = function (titre, valeur, petit, etat) {
        return '<dl class="rdrc-jt-f"' + (etat ? ' data-s="' + esc(etat) + '"' : '') + '><dt>' + esc(titre) + '</dt><dd>' + valeur + (petit ? '<small>' + petit + '</small>' : '') + '</dd></dl>';
      };

       
      var statut, ton = 'ferme';
      if (jeu.phase === 'avant') statut = 'Pas encore ouvert';
      else if (jeu.phase === 'ouvert') {
        if (it.lisible === false) { statut = 'Dans ses dates, interrupteur illisible'; ton = 'alerte'; }
        else if (it.enService) { statut = 'Ouvert aux membres'; ton = 'ouvert'; }
        else { statut = 'Dans ses dates, mais interrupteur éteint'; ton = 'alerte'; }
      } else if (jeu.phase === 'depouille') statut = 'Fermé, dépouillé';
      else statut = 'Fermé, en attente des temps officiels';
      var inter = it.lisible === false ? 'Illisible'
        : it.ligne === false ? 'Allumé'
        : !it.actif ? 'Éteint'
        : it.enService ? 'Allumé' : 'Allumé, hors de ses dates';
      var interPetit = it.lisible === false ? 'lecture en panne, réessayer'
        : it.ligne === false ? 'pas de ligne : allumé par défaut' : 'ER_ANIMATIONS, ligne « pronostics »';
      var reste = jeu.phase === 'ouvert' ? jtDuree(Math.round((jeu.resteMs || 0) / 60000) * 60)
        : jeu.phase === 'avant' ? 'pas encore ouvert' : 'terminé';
      var etat = '<div class="rdrc-jt-tete"><span class="rdrc-jt-statut" data-s="' + ton + '">' + esc(statut) + '</span>' +
          '<small>' + esc(jeu.libelle || 'Le Juste Temps') + ' · ' + classes.length + ' classes · lu à ' + esc(jtHeure(calcule)) + '</small></div>' +
        '<div class="rdrc-jt-etat">' +
          fiche('Ouverture', esc(jtDateLongue(jeu.ouvertureLe))) +
          fiche('Fermeture', esc(jtDateLongue(jeu.fermetureLe))) +
          fiche('Temps restant', esc(reste), jeu.phase === 'ouvert' ? 'au moment de la lecture' : '') +
          fiche('Interrupteur', esc(inter), esc(interPetit)) +
          fiche('Règlement', jeu.reglementUrl
            ? '<a href="' + esc(jeu.reglementUrl) + '" target="_blank" rel="noopener">Ouvrir le règlement</a>'
            : 'Lien non posé', jeu.reglementUrl ? esc(jeu.reglementUrl) : 'reglementUrl de la ligne « pronostics »') +
        '</div>';
      var bandeaux = (v.lectureRatee ? alerte('Lecture en panne', ' Ces chiffres sont ceux de la dernière lecture réussie, à ' + esc(jtHeure(calcule)) + '. « Actualiser » dans un instant.') : '') +
        (jeu.phase === 'ouvert' && it.lisible !== false && !it.enService
          ? alerte('Le jeu est dans ses dates, mais aucun membre ne le voit.', ' Son interrupteur est éteint : au CMS, collection ER_ANIMATIONS, ligne « pronostics », case « actif ».') : '');

       
      var aujourdHui = jtJour(calcule);
      var dernierJour = c.dernierDepot ? jtJour(c.dernierDepot) : '';
      var hier = jtJour(calcule - 86400000);
      var kpis = '<div class="rdrc-kpis">' +
        kpi('Joueurs', nfmt(c.joueurs), '', 'hors équipe · <b>' + nfmt(c.nouveauxAujourdhui) + '</b> nouveau' + (c.nouveauxAujourdhui > 1 ? 'x' : '') + ' aujourd\'hui', 'lead') +
        kpi('Pronos complets', nfmt(c.complets), '', '<b>' + pct(c.complets, c.joueurs) + ' %</b> des joueurs' + (c.incomplets ? ' · ' + nfmt(c.incomplets) + ' incomplet' + (c.incomplets > 1 ? 's' : '') : ', six classes')) +
        kpi('Modifiés', nfmt(c.modifies), '', 'après leur premier dépôt') +
        kpi('Comptes de l\'équipe', nfmt(c.equipe), '', 'jouent, hors classement' + (c.introuvables ? ' · ' + nfmt(c.introuvables) + ' fiche' + (c.introuvables > 1 ? 's' : '') + ' introuvable' + (c.introuvables > 1 ? 's' : '') : '')) +
        kpi('Dernier dépôt', c.dernierDepot ? jtHeure(c.dernierDepot) : '', '', c.dernierDepot
          ? (dernierJour === aujourdHui ? 'aujourd\'hui' : dernierJour === hier ? 'hier' : 'le ' + esc(jtDateCourte(c.dernierDepot).slice(0, 5)))
          : 'aucun joueur encore') +
      '</div>';

       
      var parJour = v.parJour || [];
      var cardJours = card('Dépôts par jour', nfmt(c.joueurs) + ' joueur' + (c.joueurs > 1 ? 's' : '') + ' depuis l\'ouverture',
        (parJour.some(function (x) { return x.premiers || x.modifs; })
          ? jtBarresJours(parJour) +
            '<div class="rdrc-jt-leg"><span><i style="background:var(--teal)"></i>Premiers dépôts du jour</span>' +
            '<span><i style="background:#F19F39"></i>Dernière modification faite ce jour-là</span></div>'
          : '<div class="rdrc-state">Pas encore de dépôt.</div>'), true, IC.trend);

       
      var lignesClasses = (v.parClasse || []).map(function (cl) {
        var rep = JT_REPERES_2022[cl.classe] || null;
        var vide = '<span class="rdrc-jt-vide">aucun</span>';
        return '<tr><td class="rdrc-jt-nom">' + pastille(cl.classe) + esc(cl.classe) + '</td>' +
          '<td class="rdrc-jt-num">' + nfmt(cl.n) + '</td>' +
          '<td><b>' + (cl.n ? esc(jtDuree(cl.mediane, true)) : vide) + '</b></td>' +
          '<td>' + (cl.n ? esc(jtDuree(cl.min, true)) : vide) + '</td>' +
          '<td>' + (cl.n ? esc(jtDuree(cl.max, true)) : vide) + '</td>' +
          '<td>' + (rep ? esc(jtDuree(rep)) : '') + '</td>' +
          '<td>' + jtHisto(cl, rep) + '</td></tr>';
      }).join('');
      var cardClasses = card('Les temps proposés, par classe', 'joueurs seulement, hors équipe',
        '<div class="rdrc-jt-defil rdrc-jt-defil--libre"><table class="rdrc-jt-t"><thead><tr><th>Classe</th><th class="rdrc-jt-num">Pronos</th><th>Médiane</th><th>Plus court</th><th>Plus long</th><th>Vainqueur 2022</th><th>Répartition</th></tr></thead>' +
          '<tbody>' + lignesClasses + '</tbody></table></div>' +
        '<div class="rdrc-jt-leg"><span><i style="background:#00676E;opacity:.55"></i>Joueurs par tranche de temps, du plus court au plus long</span>' +
          '<span><i style="background:var(--navy)"></i>Médiane</span><span><i style="background:#F19F39"></i>Temps du vainqueur 2022, le repère montré au joueur</span></div>', true, IC.boat);

       
      var s = v.saisie;
      var decidees = s ? (s.classes || []).filter(function (x) { return x.etat === 'confirmee' || x.etat === 'non-retenue'; }).length : 0;
      var cardSaisie = s ? card('Les temps officiels', !s.ouverte ? 'la saisie ouvre à la fermeture du jeu'
        : decidees + ' classe' + (decidees > 1 ? 's' : '') + ' sur ' + classes.length + ' décidée' + (decidees > 1 ? 's' : '') + (s.journalTotal ? ' · ' + nfmt(s.journalTotal) + ' modification' + (s.journalTotal > 1 ? 's' : '') + ' au journal' : ''),
        this._jrSaisieHtml(v, alerte), true, IC.flag) : '';

       
      var cardResultat = card('Le résultat', ({ attente: 'en attente des temps officiels', provisoire: 'provisoire', complet: 'toutes les classes décidées', 'sans-classe': 'aucune classe retenue' })[r.etat] || '',
        this._jtResultatHtml(r, classes, alerte, fiche, v), true, IC.target);

       
      var avecRang = !!(r.classement && r.classement.length);
      var entete = '<thead><tr><th>Participant</th><th>Premier dépôt</th><th>Dernière modif.</th>' +
        classes.map(function (cl) { return '<th class="rdrc-jt-cl">' + pastille(cl) + esc(cl) + '</th>'; }).join('') +
        (avecRang ? '<th class="rdrc-jt-num">Rang</th><th class="rdrc-jt-num">Score</th>' : '') + '</tr></thead>';
      var ligne = function (x) {
        var tags = (x.equipe ? '<span class="rdrc-jt-tag">équipe</span>' : '') + (x.introuvable ? '<span class="rdrc-jt-tag rdrc-jt-tag--ex">fiche introuvable</span>' : '') +
          (!x.complet ? '<span class="rdrc-jt-tag rdrc-jt-tag--ex">incomplet</span>' : '');
        return '<tr data-jt-q="' + esc(((x.nom || '') + ' ' + (x.email || '')).toLowerCase()) + '">' +
          '<td class="rdrc-jt-nom">' + esc(x.nom || 'Sans nom') + tags + '<small>' + esc(x.email || 'adresse inconnue') + '</small></td>' +
          '<td>' + esc(jtDateCourte(x.premier)) + '</td>' +
          '<td>' + esc(jtDateCourte(x.dernier)) + (x.modifie ? '<small class="rdrc-jt-mod">modifié</small>' : '') + '</td>' +
          (x.temps || []).map(function (s) { return s == null ? '<td class="rdrc-jt-vide">vide</td>' : '<td title="' + esc(jtDuree(s)) + '">' + esc(jtCourt(s)) + '</td>'; }).join('') +
          (avecRang ? '<td class="rdrc-jt-num">' + (x.rang || '') + '</td><td class="rdrc-jt-num">' + (x.score != null ? esc(jtPct(x.score, 3)) : '') + '</td>' : '') +
        '</tr>';
      };
      var tableau = function (liste) {
        return '<div class="rdrc-jt-defil"><table class="rdrc-jt-t">' + entete + '<tbody>' + liste.map(ligne).join('') + '</tbody></table></div>';
      };
      var joueurs = parts.filter(function (x) { return !x.equipe && !x.introuvable; });
      var equipe = parts.filter(function (x) { return x.equipe; });
      var introuvables = parts.filter(function (x) { return x.introuvable; });
      var cardListe = card('Les participants', nfmt(parts.length) + ' compte' + (parts.length > 1 ? 's' : '') + ' ont joué',
        '<div class="rdrc-jt-outils"><input class="rdrc-jt-cherche" type="search" data-jt-cherche placeholder="Chercher un nom ou une adresse" aria-label="Chercher un participant par son nom ou son adresse" value="' + esc(this._jtCherche || '') + '">' +
          '<span class="rdrc-jt-compte" data-jt-compte>' + nfmt(parts.length) + ' affiché' + (parts.length > 1 ? 's' : '') + '</span></div>' +
        (joueurs.length ? '<p class="rdrc-jt-sous">Joueurs <span>' + nfmt(joueurs.length) + ', la dernière modification en tête ; temps en jours et heures:minutes</span></p>' + tableau(joueurs)
                        : '<div class="rdrc-state">Aucun joueur pour l\'instant.</div>') +
        (equipe.length ? '<p class="rdrc-jt-sous">Comptes de l\'équipe <span>' + nfmt(equipe.length) + ', jouent normalement mais ne comptent dans aucun chiffre ni classement et ne gagnent rien</span></p>' + tableau(equipe) : '') +
        (introuvables.length ? '<p class="rdrc-jt-sous">Fiches introuvables <span>' + nfmt(introuvables.length) + ', comptes supprimés depuis leur dépôt : écartés des chiffres</span></p>' + tableau(introuvables) : '') +
        '<p class="rdrc-note"><b>D\'où viennent ces chiffres.</b> Des lignes PRONOSTICS (une par joueur et par classe), de la ligne « rdr-2026 » de PRONOSTICS_COURSE et de l\'interrupteur « pronostics » d\'ER_ANIMATIONS, relus à la demande et gardés deux minutes. ' +
          'L\'adresse est celle de connexion du compte, pour joindre le gagnant. Les comptes de l\'équipe (adresses @ocsport.com, @ocgroup.com, @wapitix.fr, comptes d\'aperçu, comptes créés avant le 14/09) sont à part. ' +
          '« Exporter » télécharge cette liste en CSV : elle contient des adresses, à garder dans l\'équipe.</p>', true, IC.people);

      return bandeaux + '<div class="rdrc-grid" style="margin-bottom:14px">' + card('L\'état du jeu', 'Le Juste Temps, montre Alpina', etat, true, IC.clock) + '</div>' + kpis +
        '<div class="rdrc-grid">' + cardJours + cardClasses + cardSaisie + cardResultat + cardListe + '</div>';
    }

    








    _jrSaisieHtml(v, alerte) {
      var s = v.saisie || {};
      var jeu = v.jeu || {};
      var self = this;
      var pastille = function (cl) { return '<span class="rdrc-jt-pt" style="background:' + esc(CLASS_COLORS[cl] || 'var(--teal)') + '"></span>'; };
      var ferme = !s.ouverte;
      var busy = !!((this._jr && this._jr.envoi) || (this._jrRes && this._jrRes.envoi));
      var bouton = function (action, classe, libelle, go) {
        var ouvert = self._jr && self._jr.classe === classe && self._jr.mode === action;
        return '<button type="button" class="rdrc-btn' + (go ? ' rdrc-go' : '') + '" data-jr-ouvrir="' + esc(action) + '" data-jr-classe="' + esc(classe) + '"' +
          (ferme || busy ? ' disabled' : '') + (ouvert ? ' aria-expanded="true"' : '') + '>' + esc(libelle) + '</button>';
      };
      var lignes = (s.classes || []).map(function (x) {
        var t = Date.parse(x.arriveeLe || '');
        var par = x.par ? (x.par.nom || x.par.email || '') : '';
        var etat = x.etat === 'confirmee' ? '<span class="rdrc-jr-st" data-s="confirmee">Confirmé</span>'
          : x.etat === 'non-retenue' ? '<span class="rdrc-jr-st" data-s="non-retenue">Non retenue</span>'
          : x.etat === 'illisible' ? '<span class="rdrc-jr-st" data-s="illisible">Illisible</span>'
          : '<span class="rdrc-jr-st">En attente</span>';
        var actions = x.etat === 'attente'
          ? bouton('saisir', x.classe, 'Saisir', true) + bouton('nonRetenue', x.classe, 'Non retenue')
          : x.etat === 'non-retenue'
            ? bouton('saisir', x.classe, 'Saisir un temps') + bouton('effacer', x.classe, 'Remettre en attente')
            : bouton('saisir', x.classe, 'Corriger') + bouton('nonRetenue', x.classe, 'Non retenue') + bouton('effacer', x.classe, 'Remettre en attente');
        var bateau = x.etat === 'confirmee' ? esc(x.bateau) + (x.source ? '<small class="rdrc-jr-petit">' + esc(x.source) + '</small>' : '')
          : x.etat === 'non-retenue' ? '<span class="rdrc-jt-vide">article 6.4</span>' + (x.motif ? '<small class="rdrc-jr-petit">' + esc(x.motif) + '</small>' : '')
          : '<span class="rdrc-jt-vide">·</span>';
        return '<tr data-jr-ligne="' + esc(x.classe) + '"><td class="rdrc-jt-nom">' + pastille(x.classe) + esc(x.classe) + '</td>' +
          '<td>' + bateau + '</td>' +
          '<td>' + (isFinite(t) ? esc(jtMoment(t)) + '<small class="rdrc-jr-petit">soit ' + esc(jtMoment(t, 'America/Guadeloupe')) + ' en Guadeloupe</small>' : '<span class="rdrc-jt-vide">·</span>') + '</td>' +
          '<td>' + (x.etat === 'confirmee' ? '<b>' + esc(jtDuree(x.tempsCourseSec)) + '</b>' + (x.departDeduit ? '<small class="rdrc-jr-petit">départ déduit : ' + esc(jtDateCourte(Date.parse(x.departDeduit))) + '</small>' : '') : '<span class="rdrc-jt-vide">·</span>') + '</td>' +
          '<td>' + etat + (par ? '<small class="rdrc-jr-petit">par ' + esc(par) + (x.le ? ', le ' + esc(jtDateCourte(Date.parse(x.le))) : '') + '</small>' : '') + '</td>' +
          '<td><div class="rdrc-jr-acts">' + actions + '</div></td></tr>';
      }).join('');
      var tete = '<p class="rdrc-help">Pour chaque classe, le temps de course officiel du <b>premier bateau à franchir la ligne</b>, tel que la Direction de course le publie (article 6.2), avec la date et l’heure de son arrivée à l’heure de Paris. ' +
        'Chaque saisie se relit avant d’être confirmée ; une correction demande son motif ; tout reste au journal. Rien de ce qui se saisit ici n’est public.</p>';
      var avis = '';
      if (ferme) avis += '<div class="rdrc-jr-avis" data-ton="info">La saisie ouvre à la fermeture du jeu, ' + esc(jtDateLongue(jeu.fermetureLe)) + ' (heure de Paris) : tant que les joueurs peuvent modifier, aucun résultat ne s’enregistre.</div>';
      if (s.alerteDepart) avis += alerte('Les départs déduits ne concordent pas.', ' Arrivée moins temps de course : ' + s.alerteDepart.ecartMin + ' minutes d’écart entre deux classes. Si toutes les classes sont parties ensemble, une saisie est fausse : relis les arrivées et les temps.');
      if (s.resultatsCmsIgnores) avis += alerte('Le champ « resultats » de PRONOSTICS_COURSE est rempli au CMS.', ' Il n’est plus lu : les temps officiels se saisissent ici, et seulement ici.');
      var table = '<div class="rdrc-jt-defil rdrc-jt-defil--libre"><table class="rdrc-jt-t"><thead><tr><th>Classe</th><th>Premier bateau</th><th>Arrivée (heure de Paris)</th><th>Temps de course</th><th>Saisie</th><th>Gestes</th></tr></thead><tbody>' + lignes + '</tbody></table></div>';
      return '<div class="rdrc-jr">' + tete + avis + table + this._jrFormHtml(v) + this._jrJournalHtml(s) + '</div>';
    }

     
    _jrFormHtml(v) {
      var f = this._jr;
      var s = v.saisie || {};
      if (!f) return '';
      var ligne = (s.classes || []).filter(function (x) { return x.classe === f.classe; })[0] || { etat: 'attente' };
      var dejaDecidee = ligne.etat !== 'attente';
      var val = f.v || {};
      var err = f.erreurs || {};
      var champ = function (nom, libelle, type, extra, large) {
        return '<label class="rdrc-jr-c' + (large ? ' rdrc-jr-c--large' : '') + '"' + (err[nom] ? ' data-err' : '') + '><span>' + esc(libelle) + '</span>' +
          '<input type="' + type + '" data-jr-champ="' + nom + '" value="' + esc(val[nom] == null ? '' : val[nom]) + '"' + (extra || '') + '>' +
          (err[nom] ? '<span class="rdrc-jr-err">' + esc(err[nom]) + '</span>' : '') + '</label>';
      };
      var serveur = f.erreur ? '<div class="rdrc-jr-avis" data-ton="err" role="alert">' + esc(f.erreur) + '</div>' : '';
      var change = Number(s.version) !== Number(f.version)
        ? '<div class="rdrc-jr-avis">La saisie a changé depuis l’ouverture de ce formulaire (version ' + esc(String(s.version)) + ') : la confirmation sera refusée. Annule et rouvre.</div>' : '';
      var boutonsSaisie = '<div class="rdrc-jr-boutons"><button type="submit" class="rdrc-btn rdrc-go">Relire</button><button type="button" class="rdrc-btn" data-jr-annuler>Annuler</button></div>';
      var boutonsRelecture = '<div class="rdrc-jr-boutons"><button type="button" class="rdrc-btn rdrc-go" data-jr-confirmer' + (f.envoi ? ' disabled' : '') + '>' + (f.envoi ? 'Enregistrement…' : 'Confirmer et enregistrer') + '</button>' +
        '<button type="button" class="rdrc-btn" data-jr-modifier' + (f.envoi ? ' disabled' : '') + '>Modifier</button><button type="button" class="rdrc-btn" data-jr-annuler' + (f.envoi ? ' disabled' : '') + '>Annuler</button></div>';
      var titre, corps;
      if (f.mode === 'saisir') {
        titre = esc(f.classe) + (dejaDecidee ? ' : corriger la saisie' : ' : saisir le temps officiel') +
          '<small>' + (dejaDecidee ? 'Saisie actuelle : ' + esc(jrDecision(ligne.etat === 'confirmee' ? ligne : { etat: 'non-retenue', motif: ligne.motif })) + '. La correction demande son motif.' : 'Le premier bateau de la classe à franchir la ligne à Pointe-à-Pitre.') + '</small>';
        if (f.etape !== 'relecture') {
          corps = '<div class="rdrc-jr-champs">' +
            champ('bateau', 'Premier bateau (et son skipper)', 'text', ' maxlength="120" autocomplete="off"', true) +
            champ('date', 'Date d’arrivée (heure de Paris)', 'date', '') +
            champ('heure', 'Heure d’arrivée (heure de Paris)', 'time', ' step="1"') +
            '<div class="rdrc-jr-c rdrc-jr-c--large" role="group" aria-labelledby="rdrc-jr-temps-t"' + (err.temps ? ' data-err' : '') + '><span id="rdrc-jr-temps-t">Temps de course officiel</span><div class="rdrc-jr-temps">' +
              ['jours', 'heures', 'minutes', 'secondes'].map(function (k) {
                var u = { jours: 'j', heures: 'h', minutes: 'min', secondes: 's' }[k];
                return '<label><input type="number" inputmode="numeric" min="0" step="1" data-jr-champ="' + k + '" value="' + esc(val[k] == null ? '' : val[k]) + '" aria-label="' + esc(k) + '">' + u + '</label>';
              }).join('') +
            '</div>' + (err.temps ? '<span class="rdrc-jr-err">' + esc(err.temps) + '</span>' : '') + '</div>' +
            champ('source', 'Source (facultatif) : le communiqué, la page de la Direction de course', 'text', ' maxlength="300" autocomplete="off"', true) +
            (dejaDecidee ? champ('motif', 'Motif de la correction (obligatoire)', 'text', ' maxlength="300" autocomplete="off"', true) : '') +
          '</div>' + change + serveur + boutonsSaisie;
        } else {
          var t = jtInstantParis(val.date, val.heure);
          var sec = jtTempsSaisi(val);
          var depart = t - sec * 1000;
          var autres = (s.classes || []).filter(function (x) { return x.classe !== f.classe && x.departDeduit; }).map(function (x) { return { classe: x.classe, t: Date.parse(x.departDeduit) }; });
          var loin = autres.filter(function (x) { return Math.abs(x.t - depart) > JR_ECART_DEPART_MS; });
          corps = '<dl class="rdrc-jr-recap">' +
            '<dt>Classe</dt><dd>' + esc(f.classe) + '</dd>' +
            '<dt>Premier bateau</dt><dd>' + esc(String(val.bateau || '').trim()) + '</dd>' +
            '<dt>Arrivée</dt><dd>' + esc(jtMoment(t)) + ', heure de Paris<small>soit ' + esc(jtMoment(t, 'America/Guadeloupe')) + ' en Guadeloupe</small></dd>' +
            '<dt>Temps de course</dt><dd>' + esc(jtDuree(sec)) + '<small>' + nfmt(sec) + ' secondes ; départ déduit : ' + esc(jtMoment(depart)) + '</small></dd>' +
            (String(val.source || '').trim() ? '<dt>Source</dt><dd>' + esc(String(val.source).trim()) + '</dd>' : '') +
            (dejaDecidee ? '<dt>Motif</dt><dd>' + esc(String(val.motif || '').trim()) + '</dd><dt>Remplace</dt><dd>' + esc(jrDecision(ligne.etat === 'confirmee' ? ligne : { etat: 'non-retenue', motif: ligne.motif })) + '</dd>' : '') +
          '</dl>' +
          (loin.length ? '<div class="rdrc-jr-avis">Ce départ déduit est à plus d’une heure de celui de ' + esc(loin.map(function (x) { return x.classe + ' (' + jtDateCourte(x.t) + ')'; }).join(', ')) + '. Si toutes les classes sont parties ensemble, une des saisies est fausse.</div>' : '') +
          change + serveur + boutonsRelecture;
        }
      } else {
        var nr = f.mode === 'nonRetenue';
        titre = esc(f.classe) + (nr ? ' : déclarer la classe non retenue' : ' : remettre en attente') +
          '<small>' + (nr ? 'Article 6.4 : aucun bateau de la classe n’a franchi la ligne dans les délais de la course. La classe ne compte pour personne, le score se calcule sur les autres.'
            : 'La saisie actuelle (' + esc(jrDecision(ligne.etat === 'confirmee' ? ligne : { etat: 'non-retenue', motif: ligne.motif })) + ') est retirée ; elle reste au journal.') + '</small>';
        if (f.etape !== 'relecture') {
          corps = '<div class="rdrc-jr-champs">' + champ('motif', nr ? 'Motif (obligatoire) : temps limite, décision de la Direction de course…' : 'Motif (obligatoire)', 'text', ' maxlength="300" autocomplete="off"', true) + '</div>' + change + serveur + boutonsSaisie;
        } else {
          corps = '<dl class="rdrc-jr-recap"><dt>Classe</dt><dd>' + esc(f.classe) + '</dd><dt>Geste</dt><dd>' + (nr ? 'Non retenue (article 6.4)' : 'Remise en attente') + '</dd><dt>Motif</dt><dd>' + esc(String(val.motif || '').trim()) + '</dd></dl>' + change + serveur + boutonsRelecture;
        }
      }
      return '<form class="rdrc-jr-form" data-jr-form novalidate aria-labelledby="rdrc-jr-form-t"><p class="rdrc-jr-form-t" id="rdrc-jr-form-t">' + titre + '</p>' + corps + '</form>';
    }

     
    _jrJournalHtml(s) {
      var j = s.journal || [];
      if (!j.length) return '<p class="rdrc-note"><b>Journal des saisies.</b> Vide : rien n’a encore été saisi.</p>';
      var nomDe = function (p) { return p ? (p.nom || '') + (p.email ? (p.nom ? ' (' + p.email + ')' : p.email) : '') : ''; };
      var items = j.map(function (e) {
        var quoi = JR_ACTIONS[e.action] || e.action;
        var detail = '';
        if (e.classe) detail += esc(e.classe) + ' : ' + esc(jrDecision(e.avant)) + ' → ' + esc(jrDecision(e.apres, e.action === 'nonRetenue'));
        if (e.email && e.action !== 'valider' && e.action !== 'devalider') detail += esc((e.nom ? e.nom + ' ' : '') + '(' + e.email + ')') + (e.motif && (e.action === 'ecarter' || e.action === 'retablir') ? ', motif ' + esc(e.motif) : '');
        if (e.gagnant) detail += 'gagnant ' + esc((e.gagnant.nom || '') + ' (' + (e.gagnant.email || '') + ')');
        var texte = [e.motif && e.action !== 'ecarter' && e.action !== 'retablir' ? 'motif : ' + e.motif : '', e.note ? 'note : ' + e.note : ''].filter(Boolean).join(' · ');
        return '<li><b>' + esc(quoi) + '</b> ' + detail +
          (texte ? '<small>' + esc(texte) + '</small>' : '') +
          (e.validationRetiree ? '<small>La validation du résultat a été retirée par ce geste.</small>' : '') +
          '<small>n° ' + esc(String(e.n || '')) + ', le ' + esc(jtDateCourte(Date.parse(e.le || ''))) + ', par ' + esc(nomDe(e.par) || 'inconnu') + '</small></li>';
      }).join('');
      return '<details class="rdrc-jr-journal"' + (this._jrJournalOuvert ? ' open' : '') + ' data-jr-journal><summary>Journal des saisies (' + nfmt(s.journalTotal || j.length) + ')' +
        ((s.journalTotal || 0) > j.length ? ', les ' + j.length + ' plus récentes' : '') + '</summary><ol>' + items + '</ol></details>';
    }

    





    _jtResultatHtml(r, classes, alerte, fiche, v) {
      var s = (v && v.saisie) || null;
      var gestes = !!(s && s.ouverte);
      var busy = !!((this._jr && this._jr.envoi) || (this._jrRes && this._jrRes.envoi));
      var nomDe = function (p) { return p ? (p.nom || p.email || '') : ''; };
      var bouton = function (action, libelle, attrs, go) {
        return '<button type="button" class="rdrc-btn' + (go ? ' rdrc-go' : '') + '" data-jr-res="' + action + '"' + (attrs || '') + (busy ? ' disabled' : '') + '>' + esc(libelle) + '</button>';
      };
      var REGLE = '<p class="rdrc-jt-h">La règle (article 6 du règlement)</p><ol class="rdrc-jt-regle">' +
        '<li>Le temps de référence d\'une classe est le temps officiel du <b>premier bateau</b> de la classe.</li>' +
        '<li>Écart d\'une classe : <b>|pronostic − référence| ÷ référence</b>. Score : la <b>moyenne des écarts</b> sur les classes retenues. Le plus faible gagne.</li>' +
        '<li>Une classe sans arrivée dans les délais n\'est <b>pas retenue</b>.</li>' +
        '<li>Score égal : la <b>dernière modification la plus ancienne</b> gagne ; si l\'égalité persiste, <b>tirage au sort</b>.</li>' +
        '<li>Seuls les joueurs aux six classes renseignées, qui remplissent l\'article 3 ; l\'équipe jamais (article 3.4).</li></ol>';
      var RESTE = '<p class="rdrc-jt-h">Ce qui reste à l\'équipe</p><ol class="rdrc-jt-regle">' +
        '<li><b>Saisir chaque classe</b> dans « Les temps officiels », au fil des arrivées ; une classe sans arrivée dans les délais se déclare <b>non retenue</b>.</li>' +
        '<li><b>Égalité persistante</b> : le tirage au sort se fait hors de la console, qui enregistre le nom tiré et la note (qui a tiré, comment, devant qui).</li>' +
        '<li><b>Avant de contacter le gagnant</b> : une participation par foyer (3.5), majeur et résidant en France ou dans les DROM (3.2). Le site ne connaît ni l\'adresse postale ni l\'âge. Sinon « Écarter », avec son motif : le suivant devient gagnant (6.3).</li>' +
        '<li><b>Valider le résultat</b>, puis contacter le gagnant dans les 2 jours qui suivent l\'arrivée du premier bateau de la dernière classe (6.6). La validation ne publie rien.</li></ol>';
      var refs = (r.reference || []).map(function (x) {
        var val = x.etat === 'retenue' ? esc(jtDuree(x.sec)) : x.etat === 'non-retenue' ? 'Non retenue' : x.etat === 'illisible' ? 'Saisie illisible' : 'En attente';
        var petit = x.etat === 'retenue' ? 'temps officiel' : x.etat === 'non-retenue' ? 'article 6.4' : x.etat === 'illisible' ? 'à corriger dans la saisie' : 'pas encore arrivée';
        return fiche(x.classe, val, petit, x.etat);
      }).join('');
      var grille = '<div class="rdrc-jt-etat" style="margin-bottom:14px">' + refs + '</div>';
      if (r.etat === 'attente' || !r.etat) {
        return '<p class="rdrc-help">Cette carte se remplit seule dès qu\'un temps officiel est confirmé dans « Les temps officiels » : temps de référence, écart de chaque joueur, gagnant selon le règlement et son départage. Rien à faire avant les arrivées.</p>' +
          grille + '<div class="rdrc-jt-deux"><div>' + REGLE + '</div><div>' + RESTE + '</div></div>';
      }
      var tete = '';
      if (r.etat === 'provisoire') {
        tete += alerte('Résultat provisoire.', ' ' + r.retenues + ' classe' + (r.retenues > 1 ? 's' : '') + ' retenue' + (r.retenues > 1 ? 's' : '') + ' pour l\'instant : le classement bouge jusqu\'à la dernière classe décidée.');
      } else if (r.etat === 'sans-classe') {
        tete += alerte('Aucune classe retenue.', ' Le règlement ne prévoit pas ce cas : à trancher par l\'organisateur.');
      }

      

      var val = r.validation || null;
      var valide = !!(val && !val.perimee);
      if (val && val.perimee) {
        tete += alerte('La validation du ' + jtDateCourte(Date.parse(val.le || '')) + ' ne vaut plus.', ' Ce qui fait le résultat a changé depuis : le résultat est à revalider.');
      }
      var blocValide = valide
        ? '<div class="rdrc-jr-valide" data-jr-valide><b>Résultat validé</b> par ' + esc(nomDe(val.par) || 'inconnu') + ', le ' + esc(jtDateCourte(Date.parse(val.le || ''))) +
            '. Gagnant : <b>' + esc((val.gagnant && val.gagnant.nom) || 'Sans nom') + '</b> (' + esc((val.gagnant && val.gagnant.email) || '') + ').' +
            (val.note ? ' Note : ' + esc(val.note) + '.' : '') + ' Rien n\'est publié : le gagnant peut être contacté.' +
            (gestes ? '<div class="rdrc-jr-acts">' + bouton('devalider', 'Retirer la validation') + '</div>' : '') + '</div>'
        : '';

      var g = r.gagnant;
      var t = r.tirage || null;
      var gagnants = '';
      if (g) {
        gagnants = '<div class="rdrc-gagnant"><span class="rdrc-mob-trophee">' + (r.etat === 'complet' ? 'Gagnant selon le règlement' : 'En tête pour l\'instant') + '</span><br>' +
          '<b>' + esc(g.nom || 'Sans nom') + '</b>' +
          '<p>' + esc(g.email || '') + ' · score ' + esc(jtPct(g.score, 3)) + ' · dernière modification le ' + esc(jtDateCourte(g.dernier)) +
          (g.par === 'modification' ? ' · départagé de ' + (g.exAequo - 1) + ' ex aequo au score par sa modification la plus ancienne (article 6.5)' : '') +
          (g.par === 'tirage' && t ? ' · désigné par tirage au sort parmi ' + g.exAequo + ' ex aequo (article 6.5), enregistré le ' + esc(jtDateCourte(Date.parse(t.le || ''))) + ' par ' + esc(nomDe(t.par) || 'inconnu') + (t.note ? ' : ' + esc(t.note) : '') : '') + '</p>' +
          (gestes && (r.etat === 'complet' && !valide || g.par === 'tirage') ? '<div class="rdrc-jr-acts" style="margin-top:10px">' +
            (r.etat === 'complet' && !valide ? bouton('valider', 'Valider le résultat', '', true) : '') +
            (g.par === 'tirage' ? bouton('annulerTirage', 'Annuler le tirage') : '') + '</div>' : '') +
          (r.etat !== 'complet' && gestes ? '<p>La validation s\'ouvre quand les six classes sont décidées.</p>' : '') + '</div>';
      } else if (r.aTirer && r.aTirer.length) {
        gagnants = '<div class="rdrc-gagnant"><span class="rdrc-mob-trophee">Égalité persistante : tirage au sort à faire (article 6.5)</span>' +
          '<p>Même score et même dernière modification : ' + r.aTirer.map(function (x) { return '<b>' + esc(x.nom || 'Sans nom') + '</b> (' + esc(x.email || '') + ')'; }).join(', ') + '.</p>' +
          (gestes ? '<p>Le tirage se fait hors de la console ; elle enregistre le nom tiré et la note.</p><div class="rdrc-jr-acts" style="margin-top:10px">' + bouton('tirage', 'Enregistrer le tirage', '', true) + '</div>' : '') + '</div>';
      }
      if (t && t.perime) {
        tete += alerte('Le tirage enregistré le ' + jtDateCourte(Date.parse(t.le || '')) + ' (' + (t.nom || t.gagnant || '') + ') ne vaut plus.', ' La liste des ex aequo a changé depuis : il ne désigne plus personne.' +
          (gestes ? '<span class="rdrc-jr-acts" style="margin-top:8px">' + bouton('annulerTirage', 'Annuler ce tirage') + '</span>' : ''));
      }

      var retenues = (r.reference || []).map(function (x) { return x.etat === 'retenue'; });
      var tire = !!(t && t.applique);
      var lignes = (r.classement || []).map(function (x) {
        var tag = x.egalite === 'tirage'
          ? (tire ? (g && g.email === x.email ? '<span class="rdrc-jt-tag rdrc-jt-tag--mod">tiré au sort</span>' : '<span class="rdrc-jt-tag">ex aequo, non tiré</span>') : '<span class="rdrc-jt-tag rdrc-jt-tag--ex">à tirer au sort</span>')
          : x.egalite === 'score' ? '<span class="rdrc-jt-tag rdrc-jt-tag--mod">ex aequo au score</span>' : '';
        return '<tr><td class="rdrc-jt-num"><b>' + x.rang + '</b></td>' +
          '<td class="rdrc-jt-nom">' + esc(x.nom || 'Sans nom') + tag +
            '<small>' + esc(x.email || '') + '</small></td>' +
          '<td class="rdrc-jt-num"><b>' + esc(jtPct(x.score, 3)) + '</b></td>' +
          (x.ecarts || []).map(function (e, i) { return retenues[i] ? '<td class="rdrc-jt-num">' + esc(jtPct(e, 2)) + '</td>' : '<td class="rdrc-jt-num rdrc-jt-vide">·</td>'; }).join('') +
          '<td>' + esc(jtDateCourte(x.dernier)) + '</td>' +
          (gestes ? '<td>' + (x.email ? bouton('ecarter', 'Écarter', ' data-jr-email="' + esc(x.email) + '" data-jr-nom="' + esc(x.nom || '') + '"') : '') + '</td>' : '') + '</tr>';
      }).join('');
      var table = lignes
        ? '<div class="rdrc-jt-defil rdrc-jt-defil--libre"><table class="rdrc-jt-t"><thead><tr><th class="rdrc-jt-num">Rang</th><th>Joueur</th><th class="rdrc-jt-num">Score</th>' +
            classes.map(function (cl) { return '<th class="rdrc-jt-num">' + esc(cl) + '</th>'; }).join('') + '<th>Dernière modif.</th>' + (gestes ? '<th>Geste</th>' : '') + '</tr></thead><tbody>' + lignes + '</tbody></table></div>'
        : '<div class="rdrc-state">Aucun joueur à classer.</div>';
      var motifs = {};
      ((s && s.motifs) || []).forEach(function (m) { motifs[m.code] = m.libelle; });
      var ecartes = (r.ecartes || []).length
        ? '<p class="rdrc-jt-sous">Écartés <span>' + r.ecartes.length + ', hors du classement (articles 3 et 6.3)</span></p><ul class="rdrc-jr-ecartes">' + r.ecartes.map(function (x) {
            return '<li><span><b>' + esc(x.nom || 'Sans nom') + '</b> (' + esc(x.email || '') + ') : ' + esc(motifs[x.motif] || ('article ' + x.motif)) +
              (x.note ? '<small class="rdrc-jr-petit">' + esc(x.note) + (x.par ? ' · par ' + esc(nomDe(x.par)) + (x.le ? ', le ' + esc(jtDateCourte(Date.parse(x.le))) : '') : '') + '</small>' : '') + '</span>' +
              (gestes ? bouton('retablir', 'Rétablir', ' data-jr-email="' + esc(x.email || '') + '" data-jr-nom="' + esc(x.nom || '') + '"') : '') + '</li>';
          }).join('') + '</ul>'
        : '';
      var exporter = (r.classement || []).length || (r.ecartes || []).length
        ? '<div class="rdrc-jr-boutons"><button type="button" class="rdrc-btn" data-jr-export>Exporter le résultat</button><span class="rdrc-jt-compte">le classement, les écarts et les écartés, en CSV, pour contacter le gagnant (adresses comprises : le fichier reste dans l\'équipe)</span></div>'
        : '';
      return '<div class="rdrc-jr">' + tete + grille + blocValide + '<div class="rdrc-jt-gagnants">' + gagnants + '</div>' + this._jrResHtml(r, s) + table + ecartes + exporter +
        '<p class="rdrc-note"><b>' + nfmt(r.eligibles) + ' joueurs classés</b>' + (r.incompletsEcartes ? ', ' + nfmt(r.incompletsEcartes) + ' incomplet' + (r.incompletsEcartes > 1 ? 's' : '') + ' écarté' + (r.incompletsEcartes > 1 ? 's' : '') : '') +
          ', l\'équipe jamais. Les écarts sont relatifs (écart ÷ temps officiel) ; le classement entier est dans la liste des participants et dans l\'export (colonnes Rang et Score).</p>' +
        '<div class="rdrc-jt-deux" style="margin-top:14px"><div>' + REGLE + '</div><div>' + RESTE + '</div></div></div>';
    }

    


    _jrResHtml(r, s) {
      var f = this._jrRes;
      if (!f || !s) return '';
      var g = r.gagnant || {};
      var err = f.erreur ? '<div class="rdrc-jr-avis" data-ton="err" role="alert">' + esc(f.erreur) + '</div>' : '';
      var champ = function (nom, libelle, aide) {
        return '<label class="rdrc-jr-c rdrc-jr-c--large"><span>' + esc(libelle) + '</span><input type="text" maxlength="300" autocomplete="off" data-jr-res-champ="' + nom + '" value="' + esc(f[nom] || '') + '">' +
          (aide ? '<span class="rdrc-jr-petit">' + esc(aide) + '</span>' : '') + '</label>';
      };
      var boutons = function (libelle) {
        return '<div class="rdrc-jr-boutons"><button type="button" class="rdrc-btn rdrc-go" data-jr-res-confirmer' + (f.envoi ? ' disabled' : '') + '>' + (f.envoi ? 'Enregistrement…' : esc(libelle)) + '</button>' +
          '<button type="button" class="rdrc-btn" data-jr-res-annuler' + (f.envoi ? ' disabled' : '') + '>Annuler</button></div>';
      };
      var titre = '', corps = '';
      if (f.action === 'valider') {
        titre = 'Valider le résultat';
        corps = '<dl class="rdrc-jr-recap"><dt>Gagnant</dt><dd>' + esc(g.nom || 'Sans nom') + '<small>' + esc(g.email || '') + '</small></dd>' +
          '<dt>Score</dt><dd>' + esc(jtPct(g.score, 3)) + '<small>' + ({ score: 'le plus faible', modification: 'départagé par la modification la plus ancienne (6.5)', tirage: 'désigné par le tirage enregistré (6.5)' }[g.par] || '') + '</small></dd>' +
          '<dt>Classes</dt><dd>' + esc(String(r.retenues)) + ' retenue' + (r.retenues > 1 ? 's' : '') + ' sur ' + esc(String((r.reference || []).length)) + '</dd></dl>' +
          '<div class="rdrc-jr-avis" data-ton="info">Valider ne publie rien et n\'écrit à personne : c\'est le feu vert de l\'équipe pour contacter le gagnant. Toute correction ultérieure retire la validation.</div>' +
          '<div class="rdrc-jr-champs" style="margin-top:10px">' + champ('note', 'Note (facultatif) : qui a relu, vérifications faites') + '</div>' + err + boutons('Confirmer la validation');
      } else if (f.action === 'devalider') {
        titre = 'Retirer la validation';
        corps = '<div class="rdrc-jr-champs">' + champ('motif', 'Motif (obligatoire)', 'Il reste au journal.') + '</div>' + err + boutons('Retirer la validation');
      } else if (f.action === 'tirage') {
        titre = 'Enregistrer le tirage au sort (article 6.5)';
        corps = '<p class="rdrc-help">Le tirage s\'est fait hors de la console. Choisir la personne tirée, et dire dans la note qui a tiré, comment et devant qui.</p>' +
          '<div class="rdrc-jr-choix" role="radiogroup" aria-label="Personne tirée au sort">' + (r.aTirer || []).map(function (x) {
            return '<label><input type="radio" name="rdrc-jr-tire" value="' + esc(x.email || '') + '" data-jr-res-champ="email"' + (f.email === x.email ? ' checked' : '') + '>' + esc(x.nom || 'Sans nom') + ' <small>' + esc(x.email || '') + '</small></label>';
          }).join('') + '</div>' +
          '<div class="rdrc-jr-champs">' + champ('note', 'Note (obligatoire)') + '</div>' + err + boutons('Enregistrer le tirage');
      } else if (f.action === 'annulerTirage') {
        titre = 'Annuler le tirage au sort';
        corps = '<div class="rdrc-jr-champs">' + champ('note', 'Pourquoi (obligatoire)', 'Le tirage reste au journal.') + '</div>' + err + boutons('Annuler le tirage');
      } else if (f.action === 'ecarter') {
        titre = 'Écarter ' + (f.nom || f.email);
        corps = '<p class="rdrc-help">' + esc(f.email || '') + ' ne compte plus au classement, et le suivant prend sa place (article 6.3). Le geste reste au journal et se défait par « Rétablir ».</p>' +
          '<div class="rdrc-jr-champs"><label class="rdrc-jr-c rdrc-jr-c--large"><span>Motif (articles du règlement)</span><select data-jr-res-champ="motif"><option value="">Choisir…</option>' +
            (s.motifs || []).map(function (m) { return '<option value="' + esc(m.code) + '"' + (f.motif === m.code ? ' selected' : '') + '>' + esc(m.libelle) + '</option>'; }).join('') + '</select></label>' +
            champ('note', 'Note (obligatoire) : ce qui a été vérifié, comment') + '</div>' +
          (s.remiseAuSuivant ? '' : '<p class="rdrc-jr-petit" style="margin-top:8px">Un gagnant injoignable sous 48 heures (7.2) n\'est pas un motif proposé : le règlement dit « remettre la dotation en jeu » sans dire comment, c\'est à trancher.</p>') +
          err + boutons('Écarter ce participant');
      } else if (f.action === 'retablir') {
        titre = 'Rétablir ' + (f.nom || f.email);
        corps = '<div class="rdrc-jr-champs">' + champ('note', 'Pourquoi (obligatoire)') + '</div>' + err + boutons('Rétablir');
      }
      return '<div class="rdrc-jr-form" data-jr-res-form role="group" aria-labelledby="rdrc-jr-res-t"><p class="rdrc-jr-form-t" id="rdrc-jr-res-t">' + esc(titre) + '</p>' + corps + '</div>';
    }

    

    _jrOuvrir(mode, classe) {
      var v = (this._payload || {}).justeTemps || {};
      var s = v.saisie || {};
      var ligne = (s.classes || []).filter(function (x) { return x.classe === classe; })[0] || {};
      var val = { bateau: '', date: '', heure: '', jours: '', heures: '', minutes: '', secondes: '', source: '', motif: '' };
      if (mode === 'saisir' && ligne.etat === 'confirmee') {
        var champs = jtChampsParis(Date.parse(ligne.arriveeLe || ''));
        var sec = Number(ligne.tempsCourseSec) || 0;
        val = { bateau: ligne.bateau || '', date: champs.date, heure: champs.heure,
          jours: String(Math.floor(sec / 86400)), heures: String(Math.floor((sec % 86400) / 3600)), minutes: String(Math.floor((sec % 3600) / 60)), secondes: String(sec % 60),
          source: ligne.source || '', motif: '' };
      }
      this._jrRes = null;
      this._jr = { mode: mode, classe: classe, etape: 'saisie', v: val, erreurs: {}, version: Number(s.version) || 0, envoi: false, erreur: '',
                   retour: '[data-jr-ouvrir="' + mode + '"][data-jr-classe="' + classe.replace(/"/g, '') + '"]' };
      this._render();
      var premier = this.querySelector('[data-jr-form] input');
      if (premier) premier.focus();
    }

    

    _jrRelire() {
      var f = this._jr;
      var v = f.v;
      var e = {};
      var corrige = (((((this._payload || {}).justeTemps || {}).saisie || {}).classes || []).filter(function (x) { return x.classe === f.classe; })[0] || {}).etat;
      var correction = corrige && corrige !== 'attente';
      if (f.mode === 'saisir') {
        if (String(v.bateau || '').trim().length < 2) e.bateau = 'Le nom du bateau, deux caractères au moins.';
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(v.date || ''))) e.date = 'La date d’arrivée.';
        if (!/^\d{2}:\d{2}(:\d{2})?$/.test(String(v.heure || ''))) e.heure = 'L’heure d’arrivée, à la seconde (heure de Paris).';
        var t = jtInstantParis(v.date, v.heure);
        if (!e.date && !e.heure && !isFinite(t)) e.heure = 'Cette heure n’existe pas.';
        else if (!e.date && !e.heure && t > Date.now() + 10 * 60000) e.date = 'Cette arrivée est dans le futur.';
        if (jtTempsSaisi(v) == null) e.temps = 'Entre 2 et 60 jours ; heures de 0 à 23, minutes et secondes de 0 à 59, en nombres entiers.';
        if (correction && String(v.motif || '').trim().length < 5) e.motif = 'Le motif de la correction, cinq caractères au moins.';
      } else if (String(v.motif || '').trim().length < 5) {
        e.motif = 'Le motif, cinq caractères au moins.';
      }
      f.erreurs = e;
      f.erreur = '';
      var cles = Object.keys(e);
      f.etape = cles.length ? 'saisie' : 'relecture';
      this._render();
      var cible = cles.length ? this.querySelector('[data-jr-champ="' + (cles[0] === 'temps' ? 'jours' : cles[0]) + '"]') : this.querySelector('[data-jr-confirmer]');
      if (cible) cible.focus();
    }

    _jrEnvoyer() {
      var f = this._jr;
      if (!f || f.envoi) return;
      var v = f.v;
      var d = { action: f.mode, version: f.version, classe: f.classe, motif: String(v.motif || '').trim() };
      if (f.mode === 'saisir') {
        d.bateau = String(v.bateau || '').trim();
        d.arrivee = { date: String(v.date || ''), heure: String(v.heure || '') };
        d.tempsCourse = { jours: Number(v.jours), heures: Number(v.heures), minutes: Number(v.minutes), secondes: Number(v.secondes || 0) };
        d.source = String(v.source || '').trim();
      }
      f.envoi = true;
      f.erreur = '';
      this._render();
      this._emit('rc-jt-resultat', d);
    }

    _jrResEnvoyer() {
      var f = this._jrRes;
      if (!f || f.envoi) return;
      var note = String(f.note || '').trim(), motif = String(f.motif || '').trim();
      var manque = f.action === 'devalider' && motif.length < 5 ? 'Le motif, cinq caractères au moins.'
        : f.action === 'tirage' && !f.email ? 'Choisir la personne tirée au sort.'
        : f.action === 'ecarter' && !motif ? 'Choisir le motif.'
        : f.action !== 'valider' && f.action !== 'devalider' && note.length < 5 ? 'La note, cinq caractères au moins.' : '';
      if (manque) { f.erreur = manque; this._render(); return; }
      var d = { action: f.action, version: f.version };
      if (f.email) d.email = f.email;
      if (motif) d.motif = motif;
      if (note) d.note = note;
      f.envoi = true;
      f.erreur = '';
      this._render();
      this._emit('rc-jt-resultat', d);
    }

    _jrWire() {
      var self = this;
      this.querySelectorAll('[data-jr-ouvrir]').forEach(function (b) {
        b.addEventListener('click', function () { if (!b.disabled) self._jrOuvrir(b.getAttribute('data-jr-ouvrir'), b.getAttribute('data-jr-classe')); });
      });
      var form = this.querySelector('[data-jr-form]');
      if (form && this._jr) {
        form.addEventListener('submit', function (e) { e.preventDefault(); self._jrRelire(); });
        form.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !self._jr.envoi) { e.preventDefault(); var retour = self._jr.retour; self._jr = null; self._render(); var b = retour && self.querySelector(retour); if (b) b.focus(); } });
        form.querySelectorAll('[data-jr-champ]').forEach(function (i) {
          i.addEventListener('input', function () { self._jr.v[i.getAttribute('data-jr-champ')] = i.value; });
        });
        form.querySelectorAll('[data-jr-annuler]').forEach(function (b) {
          b.addEventListener('click', function () { var retour = self._jr.retour; self._jr = null; self._render(); var x = retour && self.querySelector(retour); if (x) x.focus(); });
        });
        var modifier = form.querySelector('[data-jr-modifier]');
        if (modifier) modifier.addEventListener('click', function () { self._jr.etape = 'saisie'; self._render(); var i = self.querySelector('[data-jr-form] input'); if (i) i.focus(); });
        var confirmer = form.querySelector('[data-jr-confirmer]');
        if (confirmer) confirmer.addEventListener('click', function () { self._jrEnvoyer(); });
      }
      this.querySelectorAll('[data-jr-res]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (b.disabled) return;
          var s = ((self._payload || {}).justeTemps || {}).saisie || {};
          self._jr = null;
          self._jrRes = { action: b.getAttribute('data-jr-res'), email: b.getAttribute('data-jr-email') || '', nom: b.getAttribute('data-jr-nom') || '',
                          motif: '', note: '', envoi: false, erreur: '', version: Number(s.version) || 0 };
          if (self._jrRes.action === 'tirage') self._jrRes.email = '';
          self._render();
          var zone = self.querySelector('[data-jr-res-form]');
          var premier = zone && zone.querySelector('input, select, button');
          if (zone) zone.scrollIntoView({ block: 'nearest' });
          if (premier) premier.focus();
        });
      });
      var zone = this.querySelector('[data-jr-res-form]');
      if (zone && this._jrRes) {
        zone.querySelectorAll('[data-jr-res-champ]').forEach(function (i) {
          var garder = function () { if (i.type !== 'radio' || i.checked) self._jrRes[i.getAttribute('data-jr-res-champ')] = i.value; };
          i.addEventListener('input', garder);
          i.addEventListener('change', garder);
        });
        zone.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && !self._jrRes.envoi) { e.preventDefault(); self._jrRes = null; self._render(); }
          else if (e.key === 'Enter' && e.target && e.target.tagName === 'INPUT' && e.target.type === 'text') { e.preventDefault(); self._jrResEnvoyer(); }
        });
        var ok = zone.querySelector('[data-jr-res-confirmer]');
        if (ok) ok.addEventListener('click', function () { self._jrResEnvoyer(); });
        var non = zone.querySelector('[data-jr-res-annuler]');
        if (non) non.addEventListener('click', function () { self._jrRes = null; self._render(); });
      }
      var journal = this.querySelector('[data-jr-journal]');
      if (journal) journal.addEventListener('toggle', function () { self._jrJournalOuvert = journal.open; });
      var exp = this.querySelector('[data-jr-export]');
      if (exp) exp.addEventListener('click', function () { self._jrExport(); });
    }

    



    _jrExport() {
      var v = (this._payload || {}).justeTemps || {};
      var r = v.resultat || {};
      var cls = (v.jeu || {}).classes || [];
      var val = r.validation;
      var statut = val && !val.perimee ? 'validé le ' + jtDateCourte(Date.parse(val.le || '')) + ' par ' + ((val.par && (val.par.nom || val.par.email)) || 'inconnu')
        : r.etat === 'complet' ? 'non validé' : 'provisoire';
      var pct = function (x) { return x == null || !isFinite(x) ? '' : (x * 100).toFixed(4).replace('.', ','); };
      var rows = [['Résultat', 'Rang', 'Nom', 'E-mail', 'Score (%)'].concat(cls.map(function (cl) { return 'Écart ' + cl + ' (%)'; }), ['Dernière modification', 'Égalité', 'Écarté (motif)', 'Note'])];
      var g = r.gagnant;
      (r.classement || []).forEach(function (x) {
        rows.push([statut, x.rang, x.nom || '', x.email || '', pct(x.score)].concat(cls.map(function (cl, i) { return pct((x.ecarts || [])[i]); }),
          [jtDateCourte(x.dernier), (g && g.email === x.email ? 'gagnant' : '') + (x.egalite === 'tirage' ? (g && g.email === x.email ? ', ' : '') + 'ex aequo à tirer au sort' : x.egalite === 'score' ? (g && g.email === x.email ? ', ' : '') + 'ex aequo au score' : ''), '', '']));
      });
      (r.ecartes || []).forEach(function (x) {
        rows.push([statut, '', x.nom || '', x.email || '', ''].concat(cls.map(function () { return ''; }), ['', '', 'article ' + (x.motif || ''), x.note || '']));
      });
      csvDownload('rdr-juste-temps-resultat-' + stamp() + '.csv', rows);
    }

    














    _photoMethodeHtml() {
      return '<div class="rdrc-methode">' +
        '<p class="rdrc-methode-t">Comment relire</p>' +
        '<ol class="rdrc-methode-l">' +
          '<li><b>Valider</b> met la photo en ligne sous le nom indiqué, celui du mur des fans (« Fan anonyme » si le membre l\'a demandé). '
          + 'Elle paraît sur le mur dans les cinq minutes, et son auteur est prévenu dans son Espace.</li>' +
          '<li><b>Refuser</b> demande un motif, que le membre lit dans son Espace. Il peut proposer une autre photo une fois ; au second refus, c\'est fini.</li>' +
          '<li><b>Ressemble à</b> signale une photo presque identique déjà déposée par un autre compte. C\'est un indice pour l\'œil, rien n\'est automatique.</li>' +
          '<li><b>Retirer</b>, dans « En ligne », enlève une photo du mur dans les cinq minutes. Ses étoiles tombent au décompte de la nuit, et ses électeurs peuvent revoter.</li>' +
        '</ol>' +
        '<p class="rdrc-methode-n">Les comptes de l\'équipe participent comme les autres, mais ne gagnent rien. « Essai » marque la photo d\'un compte d\'aperçu, que le mur public ne montre jamais.</p>' +
      '</div>';
    }

    _photoMotifs(p) {
      var st = p.photo && p.photo.stats;
      var a = p.photo && p.photo.attente;
      var l = (st && Array.isArray(st.motifsRefus) && st.motifsRefus) || (a && !Array.isArray(a) && Array.isArray(a.motifsRefus) && a.motifsRefus) || [];
      l = l.map(function (x) { return String(x || '').trim(); }).filter(Boolean);
      return l.length ? l : PHOTO_MOTIFS_DEFAUT;
    }

    _photoTags(x, enLigne) {
      return '<span class="rdrc-ph-tags">' +
        (x.equipe ? '<span class="rdrc-ph-tag" title="Compte de l\'équipe : il participe, mais ne gagne rien">Équipe</span>' : '') +
        (x.essai ? '<span class="rdrc-ph-tag rdrc-ph-tag--essai" title="Photo d\'un compte d\'aperçu : le mur public ne la montre jamais">Essai</span>' : '') +
        (!enLigne && Number(x.refus) > 0 ? '<span class="rdrc-ph-tag rdrc-ph-tag--redepot" title="Une première photo a déjà été refusée : un nouveau refus sera le dernier">Redépôt après un refus</span>' : '') +
      '</span>';
    }

    


    _photoMotifsHtml(p, id, retrait) {
      var choisi = this._photoMotif || '';
      var motifs = this._photoMotifs(p);
      var radios = motifs.map(function (m, i) {
        return '<label class="rdrc-ph-motif"><input type="radio" name="rdrc-motif-' + esc(id) + '" value="' + esc(m) + '" data-photo-motif' +
          (m === choisi ? ' checked' : '') + (i === 0 ? ' data-photo-premier' : '') + '><span>' + esc(m) + '</span></label>';
      }).join('');
      var autre = retrait
        ? '<label class="rdrc-ph-motif"><input type="radio" name="rdrc-motif-' + esc(id) + '" value="" data-photo-motif data-photo-autre' + (choisi === '\u0000autre' ? ' checked' : '') + '><span>Autre motif</span></label>' +
          '<input class="rdrc-ph-autre" type="text" maxlength="200" data-photo-autre-texte placeholder="Le motif, en une phrase" aria-label="Autre motif du retrait"' + (choisi === '\u0000autre' ? '' : ' hidden') + '>'
        : '';
      var pret = !!choisi && choisi !== '\u0000autre';
      return '<fieldset class="rdrc-ph-form"><legend>' + (retrait ? 'Motif du retrait' : 'Motif montré au membre') + '</legend>' + radios + autre +
        '<div class="rdrc-ph-acts">' +
          '<button class="rdrc-btn rdrc-go-no" type="button" ' + (retrait ? 'data-photo-confirmer-retrait' : 'data-photo-confirmer-refus') + '="' + esc(id) + '"' + (pret ? '' : ' disabled') + '>' +
            (retrait ? 'Confirmer le retrait' : 'Confirmer le refus') + '</button>' +
          '<button class="rdrc-btn" type="button" data-photo-annuler>Annuler</button>' +
        '</div>' +
        (retrait ? '' : '<p class="rdrc-ph-note">' + (this._photoMotifs(p) === PHOTO_MOTIFS_DEFAUT ? 'Les motifs par défaut du concours, tant que les réglages n\'en donnent pas d\'autres.' : 'Les motifs viennent des réglages du concours, au CMS.') + '</p>') +
      '</fieldset>';
    }

    _photoAttenteHtml(p, liste) {
      var self = this;
      if (!liste.length) {
        return '<div class="rdrc-state"><b>Rien à relire</b>Les photos déposées par les membres arriveront ici, la plus ancienne en premier.</div>';
      }
      return '<div class="rdrc-ph-l">' + liste.map(function (x) {
        var id = String(x.memberId || '');
        var busy = !!self._busy[id];
        var nom = x.auteurPropose || x.auteur || '';
        var grande = photoImg(x.img, 1600, 1600, 'fit');
        var img = photoImg(x.img, 1100, 900, 'fit');
        var quand = x.deposeLe ? since(x.deposeLe) + ' · ' + jtDateCourte(Date.parse(x.deposeLe)) : '';
        var proches = Array.isArray(x.ressembleA) ? x.ressembleA : [];
        var alerte = proches.length ? '<div class="rdrc-ph-alerte">' + IC.alerte + '<span>Ressemble à ' + proches.map(function (r) {
            var d = Number(r.distance);
            return (r.auteur ? 'la photo de <b>' + esc(r.auteur) + '</b>' : 'la photo d\'un autre membre') + ' <span title="Écart des empreintes, sur 64 : 0 pour deux photos identiques">(' +
              (isFinite(d) && d <= 4 ? 'très proche' : 'proche') + ')</span>';
          }).join(', ') + '. À comparer avant de valider.</span></div>' : '';
        var refus = self._photoRefus === id;
        var acts = refus ? self._photoMotifsHtml(p, id, false)
          : '<div class="rdrc-ph-acts">' +
              '<button class="rdrc-btn rdrc-ok" type="button" data-photo-valider="' + esc(id) + '"' + (busy ? ' disabled' : '') + '>Valider</button>' +
              '<button class="rdrc-btn rdrc-no" type="button" data-photo-refuser="' + esc(id) + '"' + (busy ? ' disabled' : '') + '>Refuser</button>' +
            '</div>';
        return '<article class="rdrc-ph" data-photo="' + esc(id) + '">' +
          '<div class="rdrc-ph-img">' + (img ? '<a href="' + esc(grande) + '" target="_blank" rel="noopener" title="Voir en grand dans un nouvel onglet"><img src="' + esc(img) + '" alt="' + esc('Photo proposée par ' + (nom || 'un membre')) + '" loading="lazy" decoding="async"></a>' : '') + '</div>' +
          '<div class="rdrc-ph-info">' +
            '<p class="rdrc-ph-qui">' + esc(nom || 'Nom introuvable') + '<small>nom affiché sur le mur s\'il est validé</small></p>' +
            self._photoTags(x) +
            (quand ? '<p class="rdrc-ph-meta">Déposée ' + esc(quand) + '</p>' : '') +
            (x.legende ? '<p class="rdrc-ph-leg">« ' + esc(x.legende) + ' »</p>' : '<p class="rdrc-ph-leg is-vide">Sans légende</p>') +
            alerte + acts +
          '</div>' +
        '</article>';
      }).join('') + '</div>';
    }

    _photoEnLigneHtml(p, en, stats) {
      var self = this;
      var liste = photoListe(en);
      var tete = Array.isArray(stats && stats.enTete) ? stats.enTete : [];
      var nuit = stats && stats.calculeLe ? 'chiffres de la nuit du ' + jtDateCourte(Date.parse(stats.calculeLe)) : 'pas encore de décompte de nuit';
      var carteTete = card('En tête des étoiles', nuit,
        tete.length ? '<ol class="rdrc-ph-tete">' + tete.map(function (t) {
          return '<li><span>' + esc(t.rang) + '</span><b>' + esc(t.auteur || '?') + '</b><em>★ ' + nfmt(t.etoiles) + ' · ♥ ' + nfmt(t.coeurs) + '</em></li>';
        }).join('') + '</ol><p class="rdrc-help" style="margin:10px 0 0">Sans les comptes de l\'équipe. À égalité d\'étoiles, le rang est partagé.</p>'
          : '<div class="rdrc-state">Aucune étoile comptée pour l\'instant.</div>', true, IC.badge);
      var retrait = '';
      var cible = this._photoRetrait ? liste.filter(function (x) { return String(x.memberId) === self._photoRetrait; })[0] : null;
      if (cible) {
        retrait = '<div class="rdrc-ph-retrait">' + (photoImg(cible.img, 400, 300, 'fill') ? '<img src="' + esc(photoImg(cible.img, 400, 300, 'fill')) + '" alt="">' : '<span></span>') +
          '<div><h3>Retirer la photo de ' + esc(cible.auteur || 'ce membre') + ' du mur</h3>' + this._photoMotifsHtml(p, String(cible.memberId), true) + '</div></div>';
      }
      var grille = liste.length ? '<div class="rdrc-ph-g">' + liste.map(function (x) {
        var id = String(x.memberId || '');
        var busy = !!self._busy[id];
        var img = photoImg(x.img, 400, 300, 'fill');
        return '<div class="rdrc-ph-v" data-photo="' + esc(id) + '">' + (img ? '<img src="' + esc(img) + '" alt="' + esc('Photo de ' + (x.auteur || 'un membre')) + '" loading="lazy" decoding="async">' : '') +
          '<div class="rdrc-ph-v-c"><b>' + esc(x.auteur || 'Fan anonyme') + '</b>' + (x.legende ? '<i>« ' + esc(x.legende) + ' »</i>' : '') +
          '<span class="rdrc-ph-v-n"><span>♥ ' + nfmt(x.coeurs) + '</span><span>★ ' + nfmt(x.etoiles) + '</span></span>' + self._photoTags(x, true) +
          (x.modereLe ? '<span class="rdrc-ph-meta">validée ' + esc(since(x.modereLe)) + '</span>' : '') +
          '<button class="rdrc-btn rdrc-no" type="button" data-photo-retirer="' + esc(id) + '"' + (busy || self._photoRetrait === id ? ' disabled' : '') + '>Retirer</button></div></div>';
      }).join('') + '</div>' : '<div class="rdrc-state"><b>Aucune photo en ligne</b>Les photos validées apparaîtront ici.</div>';
      var page = Number(en && en.page) || 1, pages = Number(en && en.pages) || 1;
      var nav = pages > 1 ? '<div class="rdrc-ph-pages">' +
        '<button class="rdrc-btn" type="button" data-photo-page="' + (page - 1) + '"' + (page <= 1 ? ' disabled' : '') + '>Précédentes</button>' +
        '<span>Page ' + page + ' sur ' + pages + '</span>' +
        '<button class="rdrc-btn" type="button" data-photo-page="' + (page + 1) + '"' + (page >= pages ? ' disabled' : '') + '>Suivantes</button></div>' : '';
      return '<div class="rdrc-grid" style="margin-bottom:14px">' + carteTete + '</div>' +
        '<p class="rdrc-help"><b>' + nfmt((en && en.total) || liste.length) + ' photos sur le mur</b>, les plus récemment validées d\'abord. Les cœurs et les étoiles sont ceux du dernier décompte de nuit.</p>' +
        retrait + grille + nav;
    }

    _photoHtml(p) {
      p = p || {};
      var corps;
      if (p.photoError) corps = '<p class="rdrc-err" style="margin-bottom:16px">' + esc(p.photoError) + '</p>';
      else if (!p.photo) corps = '<div class="rdrc-state">' + (p.loading ? 'Lecture du concours…' : 'Aucune donnée pour l\'instant.') + '</div>';
      else {
        var d = p.photo;
        var attente = photoListe(d.attente);
        var st = d.stats || {};
        var nAttente = isFinite(Number(st.enAttente)) && st.enAttente !== undefined ? Number(st.enAttente) : attente.length;
        var kpis = '<div class="rdrc-kpis">' +
          kpi('À relire', nfmt(nAttente), '', nAttente ? 'la plus ancienne en premier' : 'rien en attente', 'lead') +
          kpi('En ligne', nfmt(st.validees), '', 'sur le mur') +
          kpi('Refusées', nfmt(st.refusees), '', nfmt(st.retirees) + ' retirée' + (Number(st.retirees) > 1 ? 's' : '') + ' après coup') +
          kpi('Déposants', nfmt(st.deposants), '', 'membres qui ont déposé' + (Number(st.essais) ? ', dont ' + nfmt(st.essais) + ' essai' + (Number(st.essais) > 1 ? 's' : '') : '')) +
          kpi('Votants', nfmt(st.votants), '', 'une étoile posée') +
        '</div>';
        var vue = this._photoVue === 'enligne' ? 'enligne' : 'attente';
        var nEnLigne = (d.enLigne && d.enLigne.total) || st.validees || 0;
        var sous = '<div class="rdrc-sub" role="tablist" aria-label="Vues du Challenge photo">' +
          '<button class="rdrc-subtab" type="button" role="tab" data-photo-vue="attente" aria-selected="' + (vue === 'attente') + '">À relire<span class="rdrc-subn">' + nfmt(attente.length) + '</span></button>' +
          '<button class="rdrc-subtab" type="button" role="tab" data-photo-vue="enligne" aria-selected="' + (vue === 'enligne') + '">En ligne<span class="rdrc-subn">' + nfmt(nEnLigne) + '</span></button>' +
        '</div>';
        corps = kpis + sous + (vue === 'enligne' ? this._photoEnLigneHtml(p, d.enLigne, st) : this._photoAttenteHtml(p, attente));
      }
      return corps + this._photoMethodeHtml();
    }

    _instaHtml(p) {
      if (p.error) return '<p class="rdrc-err">' + esc(p.error) + '</p>';
      var sub = this._instaView === 'ok' ? 'ok' : 'todo';
      var claims = Array.isArray(p.claims) ? p.claims : null;
      var approved = Array.isArray(p.approved) ? p.approved : null;

      var switcher = '<div class="rdrc-sub" role="tablist" aria-label="Vues Instagram">' +
        '<button class="rdrc-subtab" type="button" role="tab" data-insta-view="todo" aria-selected="' + (sub === 'todo') + '">' +
          'À vérifier' + (claims ? '<span class="rdrc-subn">' + claims.length + '</span>' : '') + '</button>' +
        '<button class="rdrc-subtab" type="button" role="tab" data-insta-view="ok" aria-selected="' + (sub === 'ok') + '">' +
          'Déjà validés' + (approved ? '<span class="rdrc-subn">' + approved.length + '</span>' : '') + '</button>' +
        '</div>';

      var body;
      if (sub === 'ok') {
        if (!approved) body = '<div class="rdrc-state">Chargement de la liste…</div>';
        else if (!approved.length) body = '<div class="rdrc-state"><b>Aucun compte validé</b>Les pseudos validés apparaîtront ici.</div>';
        else body = '<p class="rdrc-help">Retirer une validation fait repartir le badge Instagram du membre à la ' +
              'prochaine passe nocturne. Il repasse en « à corriger » dans son espace et peut renvoyer un pseudo.</p>' +
            '<ul class="rdrc-list">' + approved.map(function (c) { return this._rowHtml(c, true); }, this).join('') + '</ul>';
      } else {
        if (!claims) body = '<div class="rdrc-state">Chargement de la file…</div>';
        else if (!claims.length) body = '<div class="rdrc-state"><b>Rien à vérifier</b>Aucun pseudo en attente.</div>';
        else body = this._retardHtml(claims) + this._methodeHtml() +
            '<ul class="rdrc-list">' + claims.map(function (c) { return this._rowHtml(c, false); }, this).join('') + '</ul>';
      }
      return switcher + body;
    }

     
     
     
     
    _canExport(p) {
      



      if (this._view === 'photo') return false;
      if (this._view === 'mobilite') {
        var mob = p.mobilite;
        return !!(mob && this._mobJour !== 'final' && mob.lots && (mob.lots.places || []).some(function (x) { return x.titulaire; }));
      }
      if (this._view === 'justetemps') return !!(p.justeTemps && (p.justeTemps.participants || []).length);
      if (this._view === 'insta') return !!(p.claims || p.approved);
      if (this._view === 'village') return !!(p.audience && p.audience.village && p.audience.village.repondu);
      if (this._view === 'contenu') return !!(p.contenu && (p.contenu.jours || []).length);
      if (this._view === 'profils') {
        var dd = (p.audience || {}).demographie;
        return !!(dd && (dd.agesBase || dd.geoBase || dd.civilitesBase || dd.voileBase));
      }
      return !!(p.audience && p.audience.kpi && p.audience.kpi.total);
    }

    _exportCsv() {
      var p = this._payload || {};
      if (!this._canExport(p)) return;

      



      if (this._view === 'mobilite') {
        var mob = p.mobilite;
        var fiche = {};
        (mob.participations || []).forEach(function (x) { fiche[x.id] = x; });
        var rm = [['Jour', 'Lot', 'Statut', 'Identifiant', 'Prénom', 'Nom', 'E-mail', 'Téléphone', 'Contact', 'Tirage']];
        var ligneDe = function (x, id, statut, tirage) {
          var f = fiche[id] || {};
          rm.push([mob.jour, x.lot, statut, id, f.prenom || '', f.nom || '', f.email || '', f.telephone || '', f.contactGagnant || '', tirage || f.tirageId || '']);
        };
        (mob.lots.places || []).forEach(function (x) {
          if (!x.titulaire) return;
          ligneDe(x, x.titulaire.gagnantId, x.statut === 'a-retirer' ? 'gagnant injoignable' : 'gagnant', x.titulaire.operation);
          (x.anciens || []).forEach(function (a) { ligneDe(x, a.gagnantId, 'remplacé (injoignable)', ''); });
        });
        csvDownload('rdr-mobilite-gagnants-' + mob.jour + '-' + stamp() + '.csv', rm);
        return;
      }

      if (this._view === 'insta') {
        var ok = this._instaView === 'ok';
        var src = (ok ? p.approved : p.claims) || [];
        var rows = [['Pseudo Instagram', 'Demande du', 'Envois', 'Statut']];
        src.forEach(function (c) {
          rows.push(['@' + (c.pseudo || ''), c.claimedAt ? c.claimedAt.slice(0, 10) : '',
                     Number(c.attempts) || 0, ok ? 'validé' : 'en attente']);
        });
        csvDownload('rdr-instagram-' + (ok ? 'valides' : 'a-verifier') + '-' + stamp() + '.csv', rows);
        return;
      }

      



      if (this._view === 'justetemps') {
        var jt = p.justeTemps || {};
        var cls = (jt.jeu || {}).classes || [];
        var avecRang = !!((jt.resultat || {}).classement || []).length;
        var dateCsv = function (t) {
          var o = t == null ? null : jtParties(t, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
          return o ? o.year + '-' + o.month + '-' + o.day + ' ' + o.hour + ':' + o.minute : '';
        };
        var en = ['Nom', 'Adresse de connexion', 'Statut', 'Premier dépôt', 'Dernière modification', 'Modifié', 'Six classes']
          .concat(cls, cls.map(function (cl) { return cl + ' (secondes)'; }), avecRang ? ['Rang', 'Score (%)'] : []);
        var rj = [en];
        (jt.participants || []).forEach(function (x) {
          var t = x.temps || [];
          rj.push([x.nom || '', x.email || '', x.introuvable ? 'fiche introuvable' : x.equipe ? 'équipe' : 'joueur',
            dateCsv(x.premier), dateCsv(x.dernier), x.modifie ? 'oui' : 'non', x.complet ? 'oui' : 'non']
            .concat(cls.map(function (cl, i) { return t[i] == null ? '' : jtDuree(t[i]); }),
                    cls.map(function (cl, i) { return t[i] == null ? '' : t[i]; }),
                    avecRang ? [x.rang || '', x.score != null ? (x.score * 100).toFixed(4).replace('.', ',') : ''] : []));
        });
        csvDownload('rdr-juste-temps-participants-' + stamp() + '.csv', rj);
        return;
      }

       
      if (this._view === 'contenu') {
        var ct = p.contenu || {};
        var rc = [['Jour', 'Sessions', 'Visiteurs', 'Pages vues', 'Sessions membres', 'Sessions non membres']];
        (ct.jours || []).forEach(function (j) {
          rc.push([j.jour, j.sessions, j.visiteurs, j.vues, j.sessMembres, j.sessVisiteurs]);
        });
        rc.push([]);
        rc.push(['Provenance', 'Sessions', 'Part', '']);
        (ct.provenance || []).forEach(function (x) {
          rc.push([CANAL_LABELS[x.label] || x.label, x.count, pct(x.count, (ct.totaux || {}).sessions) + ' %', '']);
        });
        rc.push([]);
        rc.push(['Appareil', 'Sessions', 'Part', '']);
        (ct.appareils || []).forEach(function (x) {
          rc.push([APPAREIL_LABELS[x.label] || x.label, x.count, pct(x.count, (ct.totaux || {}).sessions) + ' %', '']);
        });
        rc.push([]);
         
        rc.push(['Article', 'Vues', 'Lecture (s)', 'Lecteurs']);
        (ct.articles || []).forEach(function (a) { rc.push([a.titre, a.vues, a.lecture, a.lecteurs || '']); });
        rc.push([]);
        rc.push(['Pays', 'Sessions', '', '']);
        (ct.pays || []).forEach(function (x) { rc.push([x.pays, x.sessions, '', '']); });
        csvDownload('rdr-audience-site-' + stamp() + '.csv', rc);
        return;
      }

       
       
       
      if (this._view === 'profils') {
        var dm = ((p.audience || {}).demographie) || {};
        var tot = ((p.audience || {}).kpi || {}).total || 0;
        var rp = [['Bloc', 'Modalité', 'Membres', 'Part des répondants']];
        var bloc = function (titre, serie, baseN) {
          rp.push([]);
          rp.push([titre, 'base : ' + (baseN || 0) + ' répondants',
                   tot ? pct(baseN || 0, tot) + ' % de la base' : '', '']);
          (serie || []).forEach(function (x) { rp.push([titre, x.label, x.count, pct(x.count, baseN) + ' %']); });
        };
        bloc('Âge', dm.ages, dm.agesBase);
        bloc('Civilité déclarée', dm.civilites, dm.civilitesBase);
        bloc('Région', dm.regions, dm.geoBase);
        bloc('Département', dm.departements, dm.geoBase);
        bloc('Lien avec la voile', dm.voile, dm.voileBase);
        bloc('Habitude de suivi des courses', dm.courses, dm.coursesBase);
        bloc('Canal de découverte', dm.canaux, dm.canauxBase);
        bloc('Pays de résidence', dm.pays, dm.paysBase);
        rp.push([]);
        rp.push(['Lecture', 'Une seule réponse par personne sur chaque question : les lignes se somment à la base', '', '']);
        rp.push(['Méthode', 'Tranches larges rangées à l\'enregistrement du profil, jamais de valeur exacte', '', '']);
        rp.push(['Anonymat', 'Toute modalité de moins de ' + (dm.seuil || 5) + ' personnes est fondue dans « Autres »', '', '']);
        csvDownload('rdr-profils-audience-' + stamp() + '.csv', rp);
        return;
      }

       
       
      if (this._view === 'village') {
        var vl = ((p.audience || {}).village) || {};
        var mb = vl.mobilite || { doux: 0, voiture: 0, autre: 0, total: 0 };
        var rv = [['Indicateur', 'Valeur', 'Détail']];
        var pv = function (l, v, d) { rv.push([l, v, d || '']); };
        pv('Réponses au questionnaire', vl.repondu, '');
        pv('Comptent venir', (vl.attendus || {}).oui || 0, pct((vl.attendus || {}).oui || 0, vl.repondu) + ' %');
        pv('Encore indécis', (vl.attendus || {}).peutetre || 0, pct((vl.attendus || {}).peutetre || 0, vl.repondu) + ' %');
        pv('Trajets annoncés', mb.total, '');
        pv('Mobilité douce', mb.doux, pct(mb.doux, mb.total) + ' %');
        pv('Voiture', mb.voiture, pct(mb.voiture, mb.total) + ' %');
        pv('Autre mode', mb.autre, pct(mb.autre, mb.total) + ' %');
        pv('Argumentaire mobilité ouvert', vl.lectures || 0, '');
        pv('Ont changé de mode après lecture', vl.convaincus || 0, pct(vl.convaincus || 0, vl.lectures || 0) + ' % des lecteurs');

        rv.push([]);
        rv.push(['Venue déclarée', 'Membres', 'Part']);
        (vl.venues || []).forEach(function (v) { rv.push([v.label, v.count, pct(v.count, vl.repondu) + ' %']); });

        rv.push([]);
        rv.push(['Mode de transport', 'Membres', 'Part']);
        (vl.transports || []).forEach(function (t) { rv.push([t.label, t.count, pct(t.count, mb.total) + ' %']); });

        rv.push([]);
        rv.push(['Trajectoire : depuis', 'vers', 'Membres']);
        (vl.bascules || []).forEach(function (b) { rv.push([b.de, b.vers, b.count]); });

        csvDownload('rdr-village-rse-' + stamp() + '.csv', rv);
        return;
      }

      var a = p.audience || {};
      var k = a.kpi || {};
      var rows2 = [['Indicateur', 'Valeur', 'Détail']];
      var push = function (l, v, d) { rows2.push([l, v, d || '']); };
      

      push('Membres inscrits', k.inscrits || '', k.inscrits ? '' : 'comptage indisponible');
      push('Membres actifs', k.total, k.inscrits ? pct(k.total, k.inscrits) + ' % des inscrits' : '');
      push('Avec au moins une action', k.actifs, pct(k.actifs, k.total) + ' % des actifs');
      push('Profils complets', k.profilsComplets, pct(k.profilsComplets, k.total) + ' %');
      push('Instagram validés', k.instaApproved, pct(k.instaApproved, k.total) + ' %');
      push('Instagram en attente', k.instaPending, '');
      push('Badges par membre', (k.badgesMoyen || 0).toFixed(2), 'sur ' + (k.badgeTotal || 18));
      push('Articles lus par membre', (k.articlesMoyen || 0).toFixed(2), '');
      push('Skippers suivis par membre', (k.skippersMoyen || 0).toFixed(2), '');
      push('Jours de connexion par membre', (k.joursMoyen || 0).toFixed(2), '');

      rows2.push([]);
      rows2.push(['Badge', 'Membres', 'Part']);
      (a.badges || []).forEach(function (b) { rows2.push([b.label, b.count, pct(b.count, k.total) + ' %']); });

      rows2.push([]);
      rows2.push(['Classe préférée', 'Membres', 'Part']);
      (a.classes || []).forEach(function (c) { rows2.push([c.nom, c.count, pct(c.count, k.total) + ' %']); });

      rows2.push([]);
      rows2.push(['Nombre de badges', 'Membres']);
      (a.distribution || []).forEach(function (v, i) { rows2.push([i, v]); });

      rows2.push([]);
      rows2.push(['Semaine du', 'Inscriptions']);
      (a.inscriptions || []).forEach(function (w) { rows2.push([w.week, w.value]); });

      var eng = a.engagement || {};
      [['Articles lus', eng.articles], ['Skippers suivis', eng.skippers], ['Jours de connexion', eng.jours]]
        .forEach(function (pair) {
          rows2.push([]);
          rows2.push([pair[0], 'Membres', 'Part']);
          (pair[1] || []).forEach(function (b) { rows2.push([b.label, b.count, pct(b.count, k.total) + ' %']); });
        });

       
       
      csvDownload('rdr-audience-' + stamp() + '.csv', rows2);
    }

    







    _roueHtml(p) {
      if (p.roueError) return '<p class="rdrc-err">' + esc(p.roueError) + '</p>';
      var v = p.roue;
      if (!v) return '<div class="rdrc-state">' + (p.loading ? 'Lecture des gagnants…' : 'Aucune donnée pour l\'instant.') + '</div>';
      var c = v.chiffres || {}, reg = v.reglages || {}, lots = v.lots || [], gagnants = v.gagnants || [];
      var pl = function (n, un, plusieurs) { return nfmt(n) + ' ' + (n > 1 ? (plusieurs || un + 's') : un); };
      var date = function (iso) {
        var d = new Date(iso);
        if (!iso || isNaN(d.getTime())) return '';
        try { return new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(d).replace(':', ' h '); }
        catch (e) { return d.toISOString().slice(0, 16); }
      };
      var STATUT = { 'a-contacter': 'À traiter', contacte: 'Contacté', expedie: 'Envoyé', remis: 'Remis', 'sans-suite': 'Sans suite' };
      var MODE = { village: 'Au village', envoi: 'Par la poste', '': 'À choisir' };

      var tete = '<div class="rdrc-jt-tete"><span class="rdrc-jt-statut" data-s="' + (reg.actif ? 'ouvert' : 'alerte') + '">' + (reg.actif ? 'Ouverte aux membres' : 'Éteinte : aperçu de l\'équipe seulement') + '</span>' +
        '<small>' + pl(gagnants.length, 'gagnant') + ' de lot · lu à ' + esc(date(v.lu).slice(-7)) + '</small></div>';
      var kpis = '<div class="rdrc-kpis">' +
        kpi('Tours joués', nfmt(c.tours), '', '<b>' + nfmt(c.toursAujourdhui) + '</b> aujourd\'hui, hors essais de l\'équipe', 'lead') +
        kpi('Lots gagnés', nfmt(c.gagnants), '', 'lots physiques · <b>' + nfmt(c.codes) + '</b> code' + (c.codes > 1 ? 's' : '') + ' -10 %') +
        kpi('À remettre au village', nfmt(c.aRemettre), '', '<b>' + nfmt(c.remis) + '</b> déjà remis', c.aRemettre ? 'alert' : '') +
        kpi('À envoyer', nfmt(c.aEnvoyer), '', '<b>' + nfmt(c.expedies) + '</b> déjà envoyé' + (c.expedies > 1 ? 's' : '')) +
        kpi('Mode à choisir', nfmt(c.aChoisir), '', 'le gagnant n\'a pas encore dit comment il le récupère') +
      '</div>';

      var lignesLots = lots.map(function (l) {
        return '<tr><td class="rdrc-jt-nom">' + esc(l.libelle) + '</td><td class="rdrc-jt-num">' + nfmt(l.tires) + '</td>' +
          '<td class="rdrc-jt-num">' + (l.physique ? nfmt(l.gagnants) : '') + '</td>' +
          '<td class="rdrc-jt-num">' + (l.physique && l.stockMax ? nfmt(Math.max(0, l.stockMax - l.gagnants)) + ' sur ' + nfmt(l.stockMax) : (l.physique ? 'non fixé' : '')) + '</td></tr>';
      }).join('');
      var cardLots = card('Les lots', 'tirés depuis l\'ouverture, hors essais',
        lots.length ? '<div class="rdrc-jt-defil rdrc-jt-defil--libre"><table class="rdrc-jt-t"><thead><tr><th>Case</th><th class="rdrc-jt-num">Tirée</th><th class="rdrc-jt-num">Gagnants</th><th class="rdrc-jt-num">Restant</th></tr></thead><tbody>' + lignesLots + '</tbody></table></div>'
          : '<div class="rdrc-state">Aucun lot actif dans ROUE_LOTS.</div>', false, IC.trend);

      var cardLien = card('Page de retrait des lots', 'office de tourisme, à donner en privé',
        (reg.lienRetrait
          ? '<p class="rdrc-ro-p">Une page pour le téléphone, sans compte, en deux panneaux, « À remettre » et « Remis ». On y trouve les gagnants qui ont choisi le village et ceux qui n\'ont encore rien choisi, avec leur numéro de retrait, leur prénom et l\'initiale de leur nom, et leur lot. On cherche par numéro ou par prénom, on confirme, et une erreur s\'annule. Le QR code du gagnant se lit depuis la page, bouton « Scanner un QR code », et ouvre directement sa fiche. L\'équipe garde la page en favori : son adresse contient la clé, rien n\'est gardé dans le téléphone. Ni e-mail, ni téléphone, ni adresse. Le statut est le même qu\'ici, et chaque geste s\'inscrit à l\'historique de la ligne.</p>' +
            '<div class="rdrc-ro-lien"><input class="rdrc-jt-cherche" type="text" readonly value="' + esc(reg.lienRetrait) + '" aria-label="Lien de la page de retrait" data-roue-lien>' +
            '<button type="button" class="rdrc-btn" data-roue-copier>Copier</button><a class="rdrc-btn" href="' + esc(reg.lienRetrait) + '" target="_blank" rel="noopener noreferrer">Ouvrir</a></div>' +
            '<p class="rdrc-note">Ce lien donne accès à la liste sans connexion : à ne transmettre qu\'à l\'équipe qui remet les lots à l\'office de tourisme (tous les jours de 14 h à 15 h, jusqu\'au 1er novembre inclus). Pour le couper, demande une nouvelle clé (la ligne « roue » d\'ER_ANIMATIONS, champ cleRetrait).</p>'
          : '<div class="rdrc-state"><b>Pas encore de lien</b>Aucune clé n\'est posée sur la ligne « roue » d\'ER_ANIMATIONS (champ cleRetrait).</div>'), false, IC.people);

      var filtre = this._roueFiltre || 'tous';
      var compteFiltre = {
        tous: gagnants.length,
        traiter: gagnants.filter(function (g) { return g.statut === 'a-contacter' || g.statut === 'contacte'; }).length,
        village: gagnants.filter(function (g) { return g.mode === 'village'; }).length,
        envoi: gagnants.filter(function (g) { return g.mode === 'envoi'; }).length,
        choisir: gagnants.filter(function (g) { return !g.mode; }).length,
        remis: c.remis || 0, expedie: c.expedies || 0, 'sans-suite': c.sansSuite || 0
      };
      var FILTRES = [['tous', 'Tous'], ['traiter', 'À traiter'], ['village', 'Au village'], ['envoi', 'Par la poste'], ['choisir', 'Mode à choisir'], ['remis', 'Remis'], ['expedie', 'Envoyés'], ['sans-suite', 'Sans suite']];
      var puces = '<div class="rdrc-ro-filtres" role="group" aria-label="Filtrer les gagnants">' + FILTRES.map(function (f) {
        return '<button type="button" class="rdrc-ro-filtre" data-roue-filtre="' + f[0] + '" aria-pressed="' + (filtre === f[0]) + '">' + esc(f[1]) + '<span>' + nfmt(compteFiltre[f[0]]) + '</span></button>';
      }).join('') + '</div>';
      var etats = function (g) {
        var e = ['tous', g.statut === 'a-contacter' || g.statut === 'contacte' ? 'traiter' : '', g.mode === 'village' ? 'village' : g.mode === 'envoi' ? 'envoi' : 'choisir', g.statut];
        return e.filter(Boolean).join(' ');
      };
      var bouton = function (g, statut, libelle, ton) {
        return '<button type="button" class="rdrc-btn' + (ton ? ' ' + ton : '') + '" data-roue-statut="' + esc(g.id) + '" data-valeur="' + statut + '">' + esc(libelle) + '</button>';
      };
      var actions = function (g) {
        if (g.statut === 'remis' || g.statut === 'expedie' || g.statut === 'sans-suite') return '<div class="rdrc-mob-acts">' + bouton(g, 'a-contacter', 'Rouvrir', '') + '</div>';
        return '<div class="rdrc-mob-acts">' +
          (g.mode !== 'envoi' ? bouton(g, 'remis', 'Remis', 'rdrc-ok') : '') +
          (g.mode !== 'village' ? bouton(g, 'expedie', 'Envoyé', 'rdrc-ok') : '') +
          (g.statut !== 'contacte' ? bouton(g, 'contacte', 'Contacté', '') : '') +
          bouton(g, 'sans-suite', 'Sans suite', 'rdrc-no') + '</div>';
      };
      

      var gesteLib = function (e) { return e.geste === 'remise-annulee' ? 'Remise annulée' : (STATUT[e.statut] || e.statut || '?'); };
      var historique = function (g) {
        var j = Array.isArray(g.journal) ? g.journal : [];
        if (!j.length) return '';
        return '<details class="rdrc-ro-hist"><summary>Historique (' + j.length + ')</summary><ol>' + j.slice().reverse().map(function (e) {
          return '<li>' + esc(date(e.le)) + ' · ' + esc(gesteLib(e)) + (e.par ? ' · ' + esc(e.par) : '') + '</li>';
        }).join('') + '</ol></details>';
      };
      var ligne = function (g) {
        var adresse = g.mode === 'envoi' ? [g.adresse, [g.codePostal, g.ville].filter(Boolean).join(' '), g.pays].filter(Boolean).join(', ') : '';
        var q = [g.numero, g.prenom, g.nom, g.email, g.telephone, g.lot, g.ville].join(' ').toLowerCase();
        return '<tr data-roue-ligne data-roue-q="' + esc(q) + '" data-roue-etats="' + esc(etats(g)) + '">' +
          '<td>' + esc(date(g.gagneLe)) + '</td>' +
          '<td><span class="rdrc-ro-num">' + esc(g.numero || '') + '</span></td>' +
          '<td class="rdrc-ro-qui"><b>' + esc([g.prenom, g.nom].filter(Boolean).join(' ') || '(sans nom)') + '</b>' +
            (g.email ? '<small>' + esc(g.email) + '</small>' : '') + (g.telephone ? '<small>' + esc(g.telephone) + '</small>' : '') + '</td>' +
          '<td>' + esc(g.lot) + '</td>' +
          '<td class="rdrc-ro-mode"><b>' + esc(MODE[g.mode] || MODE['']) + '</b>' + (adresse ? '<small>' + esc(adresse) + '</small>' : '') + '</td>' +
          '<td><span class="rdrc-ro-st" data-s="' + esc(g.statut) + '">' + esc(STATUT[g.statut] || g.statut) + '</span>' +
            (g.statut === 'remis' && g.remisLe ? '<small class="rdrc-ro-quand">' + esc(date(g.remisLe)) + (g.traitePar ? ' · ' + esc(g.traitePar) : '') + '</small>' : '') +
            (g.statut === 'expedie' && g.expedieLe ? '<small class="rdrc-ro-quand">' + esc(date(g.expedieLe)) + '</small>' : '') + historique(g) + '</td>' +
          '<td>' + actions(g) + '</td></tr>';
      };
      var cardGagnants = card('Les gagnants', pl(gagnants.length, 'lot physique', 'lots physiques') + ', le plus récent en tête',
        '<div class="rdrc-jt-outils"><input class="rdrc-jt-cherche" type="search" data-roue-cherche placeholder="Numéro, nom, e-mail ou lot" aria-label="Chercher un gagnant" value="' + esc(this._roueCherche || '') + '">' +
          '<span class="rdrc-jt-compte" data-roue-compte></span>' +
          '<button type="button" class="rdrc-btn" data-roue-export' + (gagnants.length ? '' : ' disabled') + '>Exporter</button></div>' + puces +
        (gagnants.length
          ? '<div class="rdrc-jt-defil"><table class="rdrc-jt-t rdrc-ro-t"><thead><tr><th>Gagné le</th><th>Numéro</th><th>Gagnant</th><th>Lot</th><th>Récupération</th><th>Statut</th><th></th></tr></thead><tbody>' + gagnants.map(ligne).join('') + '</tbody></table></div>' +
            '<p class="rdrc-ro-vide" data-roue-vide hidden>Aucun gagnant pour ce filtre.</p>'
          : '<div class="rdrc-state">' + (reg.actif ? 'Aucun lot physique gagné pour l\'instant.' : 'Aucun gagnant : la roue est éteinte, et les essais de l\'équipe ne comptent pas.') + '</div>') +
        '<p class="rdrc-note"><b>D\'où viennent ces lignes.</b> De ROUE_GAGNANTS : un lot physique tiré par un instant gagnant, avec les coordonnées copiées au moment du gain et, pour la poste, l\'adresse donnée par le gagnant. Les codes -10 % n\'y sont pas (un code commun, sans suivi). ' +
          '« Exporter » télécharge les lignes affichées en CSV : elles contiennent des adresses, à garder dans l\'équipe.</p>', true, IC.people);

      return tete + kpis + '<div class="rdrc-grid">' + cardLots + cardLien + cardGagnants + '</div>';
    }

    _roueExport() {
      var v = (this._payload && this._payload.roue) || {};
      var tous = v.gagnants || [];
      var lignes = this.querySelectorAll('tr[data-roue-ligne]');
      var rows = [['Gagné le', 'Numéro', 'Prénom', 'Nom', 'E-mail', 'Téléphone', 'Lot', 'Mode', 'Adresse', 'Code postal', 'Ville', 'Pays', 'Statut', 'Remis le', 'Envoyé le', 'Traité par', 'Source', 'Historique']];
      tous.forEach(function (g, i) {
        if (lignes[i] && lignes[i].hidden) return;
        var hist = (Array.isArray(g.journal) ? g.journal : []).map(function (e) { return e.le + ' ' + (e.geste || e.statut) + (e.par ? ' (' + e.par + ')' : ''); }).join(' | ');
        rows.push([g.gagneLe, g.numero, g.prenom, g.nom, g.email, g.telephone, g.lot, g.mode, g.adresse, g.codePostal, g.ville, g.pays, g.statut, g.remisLe, g.expedieLe, g.traitePar, g.source, hist]);
      });
      csvDownload('rdr-roue-gagnants-' + stamp() + '.csv', rows);
    }

     
     
    _copieDeSecours(txt, fait) {
      var z = document.createElement('textarea');
      z.value = txt;
      z.setAttribute('readonly', '');
      z.style.cssText = 'position:absolute;left:-9999px;top:0;opacity:0';
      this.appendChild(z);
      z.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      this.removeChild(z);
      if (ok && typeof fait === 'function') fait();
    }

     
    _render() {
      var p = this._payload || {};
      var self = this;
      var claims = Array.isArray(p.claims) ? p.claims : [];

      


      var actif = document.activeElement, focusGarde = '', curseur = null;
      if (actif && actif !== this && this.contains(actif)) {
        if (actif.hasAttribute('data-jeu-sub')) focusGarde = '[data-jeu-sub="' + actif.getAttribute('data-jeu-sub') + '"]';
        else if (actif.hasAttribute('data-jeux-tab')) focusGarde = '[data-jeux-tab]';
        

        else if (actif.hasAttribute('data-jr-champ')) focusGarde = '[data-jr-champ="' + actif.getAttribute('data-jr-champ') + '"]';
        else if (actif.hasAttribute('data-jr-res-champ')) focusGarde = '[data-jr-res-champ="' + actif.getAttribute('data-jr-res-champ') + '"]' + (actif.type === 'radio' ? '[value="' + String(actif.value).replace(/"/g, '') + '"]' : '');
        if (focusGarde && actif.type === 'text') { try { curseur = [actif.selectionStart, actif.selectionEnd]; } catch (e) { curseur = null; } }
      }

      var jeu = jeuDe(this._view);
      if (jeu && jeu.id !== this._dernierJeu) { this._dernierJeu = jeu.id; garderDernierJeu(jeu.id); }

      var tabs = VIEWS.map(function (v) {
        if (v.groupe) {
          return '<button class="rdrc-tab" type="button" role="tab" id="rdrc-tab-jeux" data-jeux-tab aria-haspopup="menu" aria-controls="rdrc-menu-jeux"' +
            ' aria-expanded="' + (self._menuJeux ? 'true' : 'false') + '" aria-selected="' + (jeu ? 'true' : 'false') + '">' + esc(v.label) +
            '<svg class="rdrc-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button>';
        }
        var on = v.id === self._view;
        var extra = '';
        if (v.id === 'insta') {
          extra = '<span class="rdrc-badge" data-zero="' + (claims.length ? '0' : '1') + '">' + claims.length + '</span>';
        }
        return '<button class="rdrc-tab" type="button" role="tab" data-view="' + v.id + '"' +
          ' aria-selected="' + (on ? 'true' : 'false') + '">' +
          esc(v.label) + extra + '</button>';
      }).join('');

       
       
      var body = jeu ? this._jeuEnteteHtml(jeu) + this[jeu.panneau](p)
               : this._view === 'insta' ? this._instaHtml(p)
               : this._view === 'village' ? this._villageHtml(p)
               : this._view === 'profils' ? this._profilsHtml(p)
               : this._view === 'contenu' ? this._contenuHtml(p)
               : this._audienceHtml(p);
      var dernier = this._dernierJeu;
      var menu = '<div class="rdrc-menu" id="rdrc-menu-jeux" role="menu" aria-labelledby="rdrc-tab-jeux"' + (this._menuJeux ? '' : ' hidden') + '>' +
        '<p class="rdrc-menu-k" aria-hidden="true">Choisir un jeu</p>' +
        JEUX.map(function (j) {
          var ouvert = j.id === self._view;
          return '<button class="rdrc-menu-i" type="button" role="menuitem" tabindex="-1" data-jeu="' + esc(j.id) + '"' + (ouvert ? ' aria-current="true"' : '') + '>' +
            '<span>' + esc(j.nom) + '</span>' + (ouvert ? '<small>ouvert</small>' : j.id === dernier ? '<small>dernier consulté</small>' : '') + '</button>';
        }).join('') + '</div>';

       
       
       
       
       
       
       
      var perime = false;
      

      if (!jeu && p.audience && p.audience.derniereNuit) {
        var age = (Date.now() - new Date(p.audience.derniereNuit).getTime()) / 3600000;
        perime = age > 30;
      }

      var stamp = '';
      if (this._view === 'contenu') {
        stamp = p.contenu && p.contenu.calculeLe ? 'Instantané ' + since(p.contenu.calculeLe) : '';
      } else if (this._view === 'justetemps') {
        

        stamp = p.justeTemps && p.justeTemps.calculeLe ? 'Lu à ' + jtHeure(Date.parse(p.justeTemps.calculeLe)) : '';
      } else if (this._view === 'photo') {
         
        stamp = p.photo && p.photo.lu ? 'Lu à ' + jtHeure(Date.parse(p.photo.lu)) : '';
      } else if (this._view !== 'insta' && p.audience && p.audience.generatedAt) {
        stamp = 'Calculé ' + since(p.audience.generatedAt);
      } else if (this._view === 'insta' && claims.length) {
        stamp = claims.length + (claims.length > 1 ? ' demandes en attente' : ' demande en attente');
      }

      this.innerHTML =
        '<div class="rdrc-app">' +
          '<div class="rdrc-bar">' +
            '<div class="rdrc-brand">' +
              (RDR_LOGO
                ? '<img class="rdrc-logo" src="' + esc(RDR_LOGO) + '" alt="Route du Rhum, Destination Guadeloupe" width="52" height="52" decoding="async">'
                : '<span class="rdrc-mark" aria-hidden="true">RDR</span>') +
              '<div><p class="rdrc-kick">Console interne</p>' +
              '<h1 class="rdrc-brand-t"><span>Route du Rhum 2026</span>' +
              '<span class="rdrc-brand-sep" aria-hidden="true">|</span>' +
              '<span class="rdrc-brand-dest">Destination Guadeloupe</span></h1></div>' +
            '</div>' +
            '<div class="rdrc-bar-r">' +
              (stamp ? '<span class="rdrc-stamp' + (perime ? ' is-perime' : '') + '"' +
                (perime ? ' title="La dernière passe nocturne date de plus de 30 h : elle n\'a probablement pas tourné."' : '') +
                '>' + (perime ? IC.alerte : '') + esc(stamp) + '</span>' : '') +
              '<button class="rdrc-export" type="button" data-export' + (this._canExport(p) ? '' : ' disabled') + '>' +
                IC.down + '<span>Exporter</span></button>' +
              '<button class="rdrc-refresh" type="button" data-refresh' + (p.loading ? ' disabled' : '') + '>' +
                (p.loading ? 'Actualisation…' : 'Actualiser') + '</button>' +
            '</div>' +
          '</div>' +
          


          (this._toast
            ? '<div class="rdrc-toast' + (this._toast.type === 'error' ? ' is-err' : '') + '"' +
              ' role="' + (this._toast.type === 'error' ? 'alert' : 'status') + '">' +
              '<span class="rdrc-toast-ic" aria-hidden="true">' +
                (this._toast.type === 'error' ? IC.alerte : IC.valide) + '</span>' +
              '<span>' + esc(this._toast.message) + '</span>' +
              '<button class="rdrc-toast-x" type="button" data-toast-x aria-label="Fermer ce message">✕</button>' +
            '</div>'
            : '') +
          '<div class="rdrc-navwrap"><div class="rdrc-nav" role="tablist" aria-label="Panneaux de la console">' + tabs + '</div>' + menu + '</div>' +
          '<div class="rdrc-body" role="tabpanel">' + body + '</div>' +
        '</div>';

      this._wire();
      


      if (this._menuJeux) {
        this._placerMenu();
        if (this._menuFocus >= 0) this._focusMenu(this._menuFocus);
      }
      if (this._focusApres) {
        var cible = this.querySelector(this._focusApres);
        this._focusApres = '';
        if (cible) cible.focus();
      } else if (focusGarde && !this._menuJeux) {
        var garde = this.querySelector(focusGarde);
        if (garde) garde.focus();
        if (garde && curseur) { try { garde.setSelectionRange(curseur[0], curseur[1]); } catch (e) {   } }
      }
    }

    _wire() {
      var self = this;

       
      var tabJeux = this.querySelector('[data-jeux-tab]');
      var menuJeux = this.querySelector('.rdrc-menu');
      if (tabJeux && menuJeux) {
        var plusTard = function () {
          if (self._menuTimer) clearTimeout(self._menuTimer);
          self._menuTimer = setTimeout(function () { self._menuTimer = null; if (self._menuFocus < 0) self._fermerMenu(false); }, 220);
        };
        var resterOuvert = function () { if (self._menuTimer) { clearTimeout(self._menuTimer); self._menuTimer = null; } };
        tabJeux.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse' && survolPossible()) self._ouvrirMenu(); });
        tabJeux.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse' && survolPossible()) plusTard(); });
        menuJeux.addEventListener('pointerenter', resterOuvert);
        menuJeux.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse' && survolPossible()) plusTard(); });
        tabJeux.addEventListener('pointerdown', function (e) { self._pointeur = e.pointerType || ''; });
        tabJeux.addEventListener('click', function (e) {
          var souris = self._pointeur === 'mouse' && e.detail > 0 && survolPossible();
          self._pointeur = '';
          


          if (souris) { self._choisirJeu(self._dernierJeu || JEUX[0].id, false); return; }
          if (self._menuJeux) self._fermerMenu(e.detail === 0);
          else self._ouvrirMenu(e.detail === 0 ? self._indexJeu(self._dernierJeu) : undefined);
        });
        tabJeux.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
            e.preventDefault();
            self._ouvrirMenu(self._indexJeu(self._dernierJeu));
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            self._ouvrirMenu(JEUX.length - 1);
          } else if (e.key === 'Escape' && self._menuJeux) {
            e.preventDefault();
            self._fermerMenu(true);
          }
        });
        menuJeux.addEventListener('keydown', function (e) {
          var i = self._menuFocus;
          if (e.key === 'ArrowDown') { e.preventDefault(); self._focusMenu(i + 1); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); self._focusMenu(i - 1); }
          else if (e.key === 'Home') { e.preventDefault(); self._focusMenu(0); }
          else if (e.key === 'End') { e.preventDefault(); self._focusMenu(JEUX.length - 1); }
          else if (e.key === 'Escape') { e.preventDefault(); self._fermerMenu(true); }
          else if (e.key === 'Tab') { self._fermerMenu(false); }
        });
        menuJeux.querySelectorAll('[data-jeu]').forEach(function (b, i) {
          b.addEventListener('focus', function () { self._menuFocus = i; });
          b.addEventListener('click', function (e) { self._choisirJeu(b.getAttribute('data-jeu'), e.detail === 0); });
        });
        var nav = this.querySelector('.rdrc-nav');
        if (nav) nav.addEventListener('scroll', function () { if (self._menuJeux) self._placerMenu(); });
      }
      var subs = Array.prototype.slice.call(this.querySelectorAll('[data-jeu-sub]'));
      subs.forEach(function (b, i) {
        b.addEventListener('click', function (e) { self._choisirJeu(b.getAttribute('data-jeu-sub'), e.detail === 0); });
        b.addEventListener('keydown', function (e) {
          var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
          if (!d) return;
          e.preventDefault();
          subs[(i + d + subs.length) % subs.length].focus();
        });
      });

       
      this.querySelectorAll('[data-mob-jour]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var j = btn.getAttribute('data-mob-jour');
          self._mobJour = j;
          self._mobConfirme = null;
          self._render();
          if (j !== 'final') self._emit('rc-mob-jour', { jour: j });
        });
      });
      this.querySelectorAll('[data-mob-armer]').forEach(function (btn) {
        btn.addEventListener('click', function () { self._mobConfirme = btn.getAttribute('data-mob-armer'); self._render(); });
      });
      this.querySelectorAll('[data-mob-annuler]').forEach(function (btn) {
        btn.addEventListener('click', function () { self._mobConfirme = null; self._render(); });
      });
      

      this.querySelectorAll('[data-mob-tirer]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var quoi = btn.getAttribute('data-mob-tirer');
          self._mobConfirme = null;
          btn.disabled = true;
          var jour = self._mobJourVu;
          self._emit('rc-mob-tirage', quoi === 'final' ? { final: true }
            : quoi.indexOf('L|') === 0 ? { jour: jour, ligne: quoi.slice(2) }
            : quoi.indexOf('P|') === 0 ? { jour: jour, place: quoi.slice(2) }
            : { jour: quoi });
        });
      });
       
      this.querySelectorAll('[data-mob-reparer]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.disabled = true;
          self._emit('rc-mob-tirage', { jour: btn.getAttribute('data-mob-reparer'), reparer: true });
        });
      });
      this._mobBrancherStatuts(this);
      this._mobBrancherTous();

       
      this.querySelectorAll('[data-photo-vue]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-photo-vue');
          if (v === self._photoVue || (!self._photoVue && v === 'attente')) return;
          self._photoVue = v;
          self._photoRefus = null; self._photoRetrait = null; self._photoMotif = '';
          self._render();
        });
      });
      this.querySelectorAll('[data-photo-valider]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-photo-valider');
          if (!id || self._busy[id]) return;
          self._busy[id] = true;
          var art = btn.closest('[data-photo]');
          if (art) art.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
          self._emit('rc-photo-decider', { memberId: id, decision: 'valider' });
        });
      });
      this.querySelectorAll('[data-photo-refuser]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          self._photoRefus = btn.getAttribute('data-photo-refuser');
          self._photoRetrait = null; self._photoMotif = '';
          self._focusApres = '[data-photo="' + self._photoRefus + '"] [data-photo-premier]';
          self._render();
        });
      });
      this.querySelectorAll('[data-photo-retirer]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          self._photoRetrait = btn.getAttribute('data-photo-retirer');
          self._photoRefus = null; self._photoMotif = '';
          self._focusApres = '.rdrc-ph-retrait [data-photo-premier]';
          self._render();
          var bloc = self.querySelector('.rdrc-ph-retrait');
          if (bloc && bloc.scrollIntoView) bloc.scrollIntoView({ block: 'nearest' });
        });
      });
      this.querySelectorAll('[data-photo-annuler]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = self._photoRefus;
          self._photoRefus = null; self._photoRetrait = null; self._photoMotif = '';
          self._focusApres = id ? '[data-photo-refuser="' + id + '"]' : '';
          self._render();
        });
      });
       
      var armer = function (form) {
        var b = form && form.querySelector('[data-photo-confirmer-refus], [data-photo-confirmer-retrait]');
        var texte = form && form.querySelector('[data-photo-autre-texte]');
        var autre = self._photoMotif === '\u0000autre';
        if (texte) texte.hidden = !autre;
        if (b) b.disabled = !self._photoMotif || (autre && !(texte && texte.value.trim()));
      };
      this.querySelectorAll('[data-photo-motif]').forEach(function (r) {
        r.addEventListener('change', function () {
          self._photoMotif = r.hasAttribute('data-photo-autre') ? '\u0000autre' : r.value;
          var form = r.closest('.rdrc-ph-form');
          armer(form);
          if (r.hasAttribute('data-photo-autre')) { var t = form.querySelector('[data-photo-autre-texte]'); if (t) t.focus(); }
        });
      });
      this.querySelectorAll('[data-photo-autre-texte]').forEach(function (t) {
        t.addEventListener('input', function () { armer(t.closest('.rdrc-ph-form')); });
      });
      this.querySelectorAll('[data-photo-confirmer-refus]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-photo-confirmer-refus');
          var motif = self._photoMotif;
          if (!id || !motif || motif === '\u0000autre' || self._busy[id]) return;
          self._busy[id] = true;
          btn.closest('.rdrc-ph-form').querySelectorAll('button, input').forEach(function (b) { b.disabled = true; });
          self._emit('rc-photo-decider', { memberId: id, decision: 'refuser', motif: motif });
        });
      });
      this.querySelectorAll('[data-photo-confirmer-retrait]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-photo-confirmer-retrait');
          var form = btn.closest('.rdrc-ph-form');
          var texte = form && form.querySelector('[data-photo-autre-texte]');
          var motif = self._photoMotif === '\u0000autre' ? (texte ? texte.value.replace(/\s+/g, ' ').trim() : '') : self._photoMotif;
          if (!id || !motif || self._busy[id]) return;
          self._busy[id] = true;
          form.querySelectorAll('button, input').forEach(function (b) { b.disabled = true; });
          self._emit('rc-photo-retirer', { memberId: id, motif: motif.slice(0, 200) });
        });
      });
      this.querySelectorAll('[data-photo-page]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var n = parseInt(btn.getAttribute('data-photo-page'), 10);
          if (!(n >= 1) || btn.disabled) return;
          btn.disabled = true;
          self._photoRetrait = null; self._photoMotif = '';
          self._emit('rc-photo-page', { page: n });
        });
      });

      

      var cherche = this.querySelector('[data-jt-cherche]');
      if (cherche) {
        var filtrer = function () {
          var q = String(self._jtCherche || '').trim().toLowerCase();
          var lignes = self.querySelectorAll('tr[data-jt-q]');
          var n = 0;
          lignes.forEach(function (tr) {
            var vu = !q || tr.getAttribute('data-jt-q').indexOf(q) >= 0;
            tr.hidden = !vu;
            if (vu) n++;
          });
          var compte = self.querySelector('[data-jt-compte]');
          if (compte) compte.textContent = q ? n + ' sur ' + lignes.length : lignes.length + ' affiché' + (lignes.length > 1 ? 's' : '');
        };
        cherche.addEventListener('input', function () { self._jtCherche = cherche.value; filtrer(); });
        if (this._jtCherche) filtrer();
      }
      this._jrWire();

      

      var roueCherche = this.querySelector('[data-roue-cherche]');
      if (this.querySelector('[data-roue-filtre]')) {
        var roueFiltrer = function () {
          var q = String(self._roueCherche || '').trim().toLowerCase();
          var f = self._roueFiltre || 'tous';
          var lignes = self.querySelectorAll('tr[data-roue-ligne]');
          var n = 0;
          lignes.forEach(function (tr) {
            var vu = (!q || tr.getAttribute('data-roue-q').indexOf(q) >= 0) && (' ' + tr.getAttribute('data-roue-etats') + ' ').indexOf(' ' + f + ' ') >= 0;
            tr.hidden = !vu;
            if (vu) n++;
          });
          var compte = self.querySelector('[data-roue-compte]');
          if (compte) compte.textContent = n + ' affiché' + (n > 1 ? 's' : '') + (n < lignes.length ? ' sur ' + lignes.length : '');
          var vide = self.querySelector('[data-roue-vide]');
          if (vide) vide.hidden = n > 0 || !lignes.length;
        };
        if (roueCherche) roueCherche.addEventListener('input', function () { self._roueCherche = roueCherche.value; roueFiltrer(); });
        this.querySelectorAll('[data-roue-filtre]').forEach(function (b) {
          b.addEventListener('click', function () {
            self._roueFiltre = b.getAttribute('data-roue-filtre');
            self.querySelectorAll('[data-roue-filtre]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
            roueFiltrer();
          });
        });
        roueFiltrer();
      }
      this.querySelectorAll('[data-roue-statut]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.disabled = true;
          self._emit('rc-roue-statut', { id: btn.getAttribute('data-roue-statut'), statut: btn.getAttribute('data-valeur') });
        });
      });
      var roueExport = this.querySelector('[data-roue-export]');
      if (roueExport) roueExport.addEventListener('click', function () { self._roueExport(); });
      var roueCopier = this.querySelector('[data-roue-copier]');
      if (roueCopier) {
        roueCopier.addEventListener('click', function () {
          var champ = self.querySelector('[data-roue-lien]');
          if (!champ) return;
          var fait = function () { roueCopier.textContent = 'Copié'; setTimeout(function () { roueCopier.textContent = 'Copier'; }, 1800); };
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(champ.value).then(fait, function () { self._copieDeSecours(champ.value, fait); });
          else self._copieDeSecours(champ.value, fait);
        });
      }

      var refresh = this.querySelector('[data-refresh]');
      if (refresh) refresh.addEventListener('click', function () { self._emit('rc-refresh', { view: self._view }); });

      var toastX = this.querySelector('[data-toast-x]');
      if (toastX) toastX.addEventListener('click', function () { self._fermerToast(); });

       
       
      this.querySelectorAll('[data-periode]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          var v = Number(btn.getAttribute('data-periode'));
          if (v === self._periode) return;
          self._periode = v;
          self._render();
        });
      });

      this.querySelectorAll('.rdrc-tab[data-view]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-view');
          if (!v || v === self._view || btn.disabled) return;
          self._view = v;
          self._render();                     
          self._emit('rc-view', { view: v });  
        });
      });

      var exportBtn = this.querySelector('[data-export]');
      if (exportBtn) exportBtn.addEventListener('click', function () { self._exportCsv(); });

       
       
       
      this.querySelectorAll('[data-rattraper]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          btn.disabled = true;
          btn.textContent = 'Récupération en cours…';
          self._emit('rc-rattraper', {});
        });
      });

       
       
      this.querySelectorAll('[data-view-link]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-view-link');
          if (!v || v === self._view) return;
          self._view = v;
          self._render();
          self._emit('rc-view', { view: v });
        });
      });

       
       
       
      this.querySelectorAll('[data-copy]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var txt = btn.getAttribute('data-copy') || '';
          var fait = function () {
            btn.classList.add('is-done');
            var lbl = btn.querySelector('span');
            if (lbl) lbl.textContent = 'Copié';
            setTimeout(function () {
              btn.classList.remove('is-done');
              if (lbl) lbl.textContent = 'Copier';
            }, 1600);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).then(fait, function () { self._copieDeSecours(txt, fait); });
          } else {
            self._copieDeSecours(txt, fait);
          }
        });
      });

       
      this.querySelectorAll('[data-insta-view]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-insta-view');
          if (!v || v === self._instaView) return;
          self._instaView = v;
          self._render();
          self._emit('rc-insta-view', { view: v });    
        });
      });

      this.querySelectorAll('.rdrc-row').forEach(function (row) {
        var lock = function () {
          row.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
        };
        row.querySelectorAll('[data-approve]').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var memberId = row.getAttribute('data-member');
            if (!memberId || self._busy[memberId]) return;
            self._busy[memberId] = true;
            lock();
            self._emit('rc-resolve', { memberId: memberId, approve: btn.getAttribute('data-approve') === '1' });
          });
        });
        var revoke = row.querySelector('[data-revoke]');
        if (revoke) {
          revoke.addEventListener('click', function () {
            var memberId = row.getAttribute('data-member');
            if (!memberId || self._busy[memberId]) return;
            self._busy[memberId] = true;
            lock();
            self._emit('rc-revoke', { memberId: memberId });
          });
        }
      });
    }
  }

  if (!customElements.get('rdr-console')) customElements.define('rdr-console', RdrConsole);
})();
})();
