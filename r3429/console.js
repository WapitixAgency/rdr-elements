/* rdr-elements console | source route-du-rhum b3d6496 | rdr-console.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["console"]="b3d6496";performance.mark("rdr-elements:console")}catch(e){}
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
    { id: 'photo',    label: 'Concours photo' },
    { id: 'village',  label: 'Village' },
    { id: 'mobilite', label: 'Mobilité' }
  ];

   
  var CANAL_LABELS = {
    organic_search: 'Recherche Google', direct: 'Accès direct', social: 'Réseaux sociaux',
    referral: 'Sites référents', email_marketing: 'E-mailing', paid: 'Publicité',
    ai_platform: 'Assistants IA', inconnu: 'Non identifié'
  };
  var APPAREIL_LABELS = { mobile: 'Mobile', desktop: 'Ordinateur', tablet: 'Tablette', inconnu: 'Inconnu' };

   
   
   
   
   
   
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

    



    '.rdrc-manque{grid-column:1 / -1;padding:16px 18px 16px;background:#FFF6E6;border:1px solid #F0D398;',
    'border-left:4px solid var(--amber);border-radius:12px}',
    '.rdrc-manque-h{display:flex;align-items:center;gap:10px;margin:0 0 6px}',
    '.rdrc-manque-h svg{width:20px;height:20px;color:var(--warn);flex:0 0 auto;display:block}',
    '.rdrc-manque-t{font-size:15px;font-weight:800;color:var(--navy);margin:0;line-height:1.3}',
    '.rdrc-manque-p{margin:0 0 12px;font-size:12px;line-height:1.55;color:var(--ink-2)}',
    '.rdrc-manque-l{list-style:none;margin:0;padding:0;display:grid;gap:8px}',
    '.rdrc-manque-i{display:grid;grid-template-columns:24px minmax(0,1fr) 150px;gap:12px;align-items:start;',
    'background:#fff;border:1px solid #F0E0BC;border-radius:10px;padding:11px 13px}',
    '.rdrc-manque-n{width:24px;height:24px;border-radius:50%;background:var(--amber);color:#fff;font-size:11px;font-weight:800;',
    'display:flex;align-items:center;justify-content:center}',
    '.rdrc-manque-q{display:block;font-size:12.5px;font-weight:800;color:var(--navy);margin:2px 0 3px}',
    '.rdrc-manque-d{display:block;font-size:11.5px;line-height:1.5;color:var(--ink-2)}',
    '.rdrc-manque-qui{font-size:12px;font-weight:800;color:var(--navy);text-align:right;line-height:1.35;padding-top:2px}',
    '.rdrc-manque-qui i{display:block;font-style:normal;font-size:9px;font-weight:700;letter-spacing:.08em;',
    'text-transform:uppercase;color:var(--warn);margin-bottom:2px}',
    '.rdrc-pret-l{list-style:none;margin:0;padding:0;display:grid;gap:1px}',
    '.rdrc-pret-i{display:grid;grid-template-columns:22px minmax(0,1fr);gap:10px;align-items:start;padding:10px 8px;border-radius:8px}',
    '.rdrc-pret-i:nth-child(odd){background:var(--bg)}',
    '.rdrc-pret-ic{width:22px;height:22px;border-radius:50%;background:var(--teal-soft);color:var(--ok);',
    'display:flex;align-items:center;justify-content:center}',
    '.rdrc-pret-ic svg{width:13px;height:13px;display:block}',
    '.rdrc-pret-q{display:block;font-size:12.5px;font-weight:800;color:var(--navy);margin:2px 0 3px}',
    '.rdrc-pret-d{display:block;font-size:11.5px;line-height:1.5;color:var(--ink-2)}',
    '.rdrc-pret-d a{color:var(--teal);font-weight:700}',
    '.rdrc-pret-d code{font:inherit;font-weight:700;color:var(--navy);white-space:nowrap}',
    '.rdrc-pret-ic.is-n{background:var(--line-2);color:var(--ink-3);font-size:11px;font-weight:800}',
    '@media(max-width:640px){.rdrc-manque{padding:14px 13px}.rdrc-manque-i{grid-template-columns:22px minmax(0,1fr)}',
    '.rdrc-manque-qui{grid-column:2;text-align:left;padding-top:0}}',
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
    valide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/></svg>'
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
    var s = String(v == null ? '' : v);
    return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
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

  class RdrConsole extends HTMLElement {
    static get observedAttributes() { return ['payload']; }

    constructor() {
      super();
      this._payload = null;
      this._view = 'audience';
       
       
       
      this._periode = 30;
      this._instaView = 'todo';    
      this._busy = {};    
      



      this._toast = null;
      this._toastId = 0;          
      this._toastTimer = null;
    }

    connectedCallback() { injectStyles(); this._render(); }

    disconnectedCallback() {
      if (this._toastTimer) { clearTimeout(this._toastTimer); this._toastTimer = null; }
    }

    attributeChangedCallback(name, oldV, newV) {
      if (name !== 'payload' || oldV === newV) return;
      try { this._payload = newV ? JSON.parse(newV) : null; }
      catch (e) { this._payload = null; }
       
      if (this._payload && this._payload.view) this._view = this._payload.view;
      this._busy = {};    
      this._lireToast();
      this._render();
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
        courbe + cardProv + cardApp + cardArts + cardPays + '</div>' + note;
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
      var jourVu = this._mobJour || m.jour || (jours[0] && jours[0].jour) || '';
      var final = this._mobJour === 'final';
      var enCours = jours.find(function (j) { return j.jour === jourVu; }) || {};
      var libelle = function (jour) {
        var d = new Date(jour + 'T12:00:00Z');
        if (isNaN(d.getTime())) return jour;
        return new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d);
      };

      var chips = jours.map(function (j) {
        return '<button type="button" class="rdrc-jour" data-mob-jour="' + esc(j.jour) + '" aria-pressed="' + (!final && j.jour === jourVu ? 'true' : 'false') + '"' +
          (j.tirage ? ' data-tire="1"' : '') + '>' + esc(libelle(j.jour)) + '<small>' + (j.total || 0) + ' inscrit' + (j.total > 1 ? 's' : '') + (j.tirage ? ' · tiré' : '') + '</small></button>';
      }).join('') +
        '<button type="button" class="rdrc-jour" data-mob-jour="final" aria-pressed="' + (final ? 'true' : 'false') + '"' + (m.final ? ' data-tire="1"' : '') + '>Grand tirage<small>' + (m.eligiblesFinal || 0) + ' éligibles' + (m.final ? ' · tiré' : '') + '</small></button>';

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Participations', nfmt(m.total || 0), '', 'sur les 13 jours', 'lead') +
        (final
          ? kpi('Éligibles au final', nfmt(m.eligiblesFinal || 0), '', 'justificatif validé, mode éligible')
          : kpi('Ce jour', nfmt(enCours.total || 0), '', (enCours.aVerifier || 0) + ' à vérifier') +
            kpi('Validées', nfmt(enCours.valides || 0), '', (enCours.refuses || 0) + ' refusée' + (enCours.refuses > 1 ? 's' : '')) +
            kpi('Éligibles au tirage', nfmt(enCours.eligibles || 0), '', 'ce jour', enCours.eligibles ? '' : 'alert')) +
      '</div>';

      

      var champContact = final ? 'grandContact' : 'contactGagnant';
      var contactDe = function (g) { return (g && g[champContact]) || ''; };
      var tirageHtml = function (t, gagnant, quoi) {
        var quand = t.effectueLe ? new Date(t.effectueLe).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
        var g = gagnant || {};
        var contact = contactDe(g);
        var lot = final ? (g.grandLot || t.lot) : g.lot;
        return '<div class="rdrc-gagnant"><span class="rdrc-mob-trophee">🏆 ' + esc(quoi) + ' effectué le ' + esc(quand) + ' · ' + esc(t.nbEligibles) + ' éligible' + (t.nbEligibles > 1 ? 's' : '') + '</span><br>' +
          '<b>' + esc(t.gagnantNom || g.prenom + ' ' + g.nom) + '</b> <span class="rdrc-mob-id">' + esc(t.gagnantId) + '</span>' +
          (g.email ? '<p>' + esc(g.email) + ' · ' + esc(g.telephone || '') + (lot ? ' · lot : ' + esc(lot) : '') +
            (final && g.gagnant ? ' · a aussi gagné le lot du jour' + (g.lot ? ' (' + esc(g.lot) + ')' : '') : '') + '</p>' : '') +
          (g.id ? '<div class="rdrc-mob-acts">' +
            '<span class="rdrc-mob-st" data-s="' + (contact === 'Contacté' ? 'Validé' : contact === 'Injoignable' ? 'Refusé' : 'À vérifier') + '">' + esc(contact || 'À contacter') + '</span>' +
            '<button type="button" class="rdrc-btn rdrc-ok" data-mob-statut="' + esc(g.id) + '" data-champ="' + champContact + '" data-valeur="Contacté">Contacté</button>' +
            '<button type="button" class="rdrc-btn rdrc-no" data-mob-statut="' + esc(g.id) + '" data-champ="' + champContact + '" data-valeur="Injoignable">Injoignable</button>' +
          '</div>' : '') +
        '</div>';
      };

       
      var tirageBloc;
      var t = final ? m.final : enCours.tirage;
      var gagnantDuTirage = !t ? null : final
        ? (m.finalGagnant && m.finalGagnant.id === t.gagnantId ? m.finalGagnant : null)
        : (m.participations || []).find(function (x) { return x.id === t.gagnantId; });
      if (t && !(gagnantDuTirage && contactDe(gagnantDuTirage) === 'Injoignable')) {
        tirageBloc = tirageHtml(t, gagnantDuTirage, final ? 'Grand tirage final' : 'Tirage du jour');
      } else {
        var n = final ? (m.eligiblesFinal || 0) : (enCours.eligibles || 0);
        var arme = this._mobConfirme === (final ? 'final' : jourVu);
        tirageBloc = (t ? tirageHtml(t, gagnantDuTirage, final ? 'Grand tirage final' : 'Tirage du jour') : '') +
          '<div class="rdrc-tirage">' +
            '<div class="rdrc-tirage-t">' + (t ? 'Le gagnant est injoignable. On peut retirer au sort parmi les autres' + (final ? ', sans aucune de ses participations. ' : '. ') : '') +
              (n ? '<b>' + n + '</b> participation' + (n > 1 ? 's' : '') + ' éligible' + (n > 1 ? 's' : '') + (final ? ' au grand tirage final' : ' pour ce jour') + '.'
                 : 'Aucune participation éligible' + (final ? '' : ' ce jour') + ' : validez d\'abord les justificatifs.') + '</div>' +
            (arme
              ? '<button type="button" class="rdrc-btn rdrc-go" data-mob-tirer="' + (final ? 'final' : esc(jourVu)) + '">Confirmer le tirage</button>' +
                '<button type="button" class="rdrc-btn" data-mob-annuler="1">Annuler</button>'
              : '<button type="button" class="rdrc-btn rdrc-go" data-mob-armer="' + (final ? 'final' : esc(jourVu)) + '"' + (n ? '' : ' disabled') + '>' + (final ? 'Effectuer le grand tirage final' : 'Effectuer le tirage du jour') + '</button>') +
          '</div>';
      }

      var lignes = (m.participations || []).map(function (x) {
        var inscrit = x.inscritLe ? new Date(x.inscritLe).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
        var statut = x.statutParticipation === 'Exclue' ? 'Exclue' : x.statutJustificatif;
        return '<div class="rdrc-mob"' + (x.gagnant || x.grandGagnant ? ' data-gagnant="1"' : '') + '>' +
          '<span class="rdrc-mob-id">' + esc(x.id) + '</span>' +
          '<span class="rdrc-mob-nom">' + esc(x.prenom + ' ' + x.nom) + (x.gagnant ? ' <span class="rdrc-mob-trophee">🏆</span>' : '') +
            (x.grandGagnant ? ' <span class="rdrc-mob-trophee">🏆 grand tirage</span>' : '') +
            '<small>' + esc(x.email) + ' · ' + esc(x.telephone) + ' · inscrit le ' + esc(inscrit) + '</small></span>' +
          '<span class="rdrc-mob-mode">' + esc(x.mode) + (x.precision ? ' (' + esc(x.precision) + ')' : '') +
            (x.justificatifUrl ? '<a href="' + esc(x.justificatifUrl) + '" target="_blank" rel="noopener">Voir le justificatif' + (x.justificatifNom ? ' · ' + esc(x.justificatifNom) : '') + '</a>' : '<a>aucun fichier</a>') + '</span>' +
          '<span class="rdrc-mob-st" data-s="' + esc(statut) + '">' + esc(statut) + '</span>' +
          '<span class="rdrc-mob-acts">' +
            (x.statutJustificatif !== 'Validé' ? '<button type="button" class="rdrc-btn rdrc-ok" data-mob-statut="' + esc(x.id) + '" data-champ="statutJustificatif" data-valeur="Validé">Valider</button>' : '') +
            (x.statutJustificatif !== 'Refusé' ? '<button type="button" class="rdrc-btn rdrc-no" data-mob-statut="' + esc(x.id) + '" data-champ="statutJustificatif" data-valeur="Refusé">Refuser</button>' : '') +
            (x.statutParticipation !== 'Exclue' ? '<button type="button" class="rdrc-btn" data-mob-statut="' + esc(x.id) + '" data-champ="statutParticipation" data-valeur="Exclue" title="Écarter des tirages">Exclure</button>'
                                                : '<button type="button" class="rdrc-btn" data-mob-statut="' + esc(x.id) + '" data-champ="statutParticipation" data-valeur="Éligible">Réintégrer</button>') +
          '</span>' +
        '</div>';
      }).join('');

      var modes = Object.keys(m.modes || {}).map(function (k) { return { label: k, count: m.modes[k] }; }).sort(function (a, b) { return b.count - a.count; });

      return '<div class="rdrc-jours">' + chips + '</div>' + kpis +
        '<div class="rdrc-grid">' +
          card(final ? 'Le grand tirage final' : 'Le tirage du ' + libelle(jourVu), (m.reglages && m.reglages.ouvert) ? 'challenge ouvert' : 'challenge fermé au public', tirageBloc, true) +
          (final ? '' : card('Les participations du ' + libelle(jourVu), (enCours.total || 0) + ' inscrit' + (enCours.total > 1 ? 's' : ''),
            (lignes || '<div class="rdrc-state">Personne n\'a encore choisi ce jour.</div>') +
            '<p class="rdrc-note">Le justificatif s\'ouvre dans un nouvel onglet. « Valider » fait entrer la participation dans les tirages, « Refuser » l\'en écarte, « Exclure » l\'écarte définitivement (fraude, doublon). L\'export CSV se fait depuis le gestionnaire de contenu, collection « Mobilité · les participations ».</p>', true)) +
          card('Modes de transport déclarés', nfmt(m.total || 0) + ' participations',
            modes.length ? barsH(modes, { whole: m.total || 1 }) : '<div class="rdrc-state">Rien encore.</div>', false) +
          card('Par jour', '13 jours du village',
            jours.map(function (j) { return { label: libelle(j.jour), count: j.total || 0 }; }).some(function (x) { return x.count; })
              ? barsH(jours.map(function (j) { return { label: libelle(j.jour), count: j.total || 0 }; }), { whole: m.total || 1 })
              : '<div class="rdrc-state">Rien encore.</div>', false) +
        '</div>';
    }

    




















    _photoHtml() {
      var manque = [
        ['Le règlement du Challenge photo',
         'Un jeu doté d\'un lot en demande un. La page Règlements, en ligne depuis le 23/09, '
         + 'lui donnera sa propre adresse et le publiera le jour de l\'annonce du concours.',
         'Alexis et le juridique d\'OC Sport'],
        ['La modération',
         'Qui relit chaque photo avant sa mise en ligne (la stagiaire, selon le call du 27/08, '
         + 'à confirmer), et ce qui fait refuser une image, par exemple une personne reconnaissable, '
         + 'une marque concurrente, un mauvais cadrage ou une photo floue.',
         'Alexis'],
        ['Les données GPS des photos',
         'Une photo de téléphone garde la position exacte de la prise de vue. Nous proposons '
         + 'de l\'effacer dès la réception, avant tout stockage. Il reste à le valider.',
         'Alexis'],
        ['Les dates',
         'L\'ouverture et la clôture des dépôts, puis la clôture des votes. Sans elles, '
         + 'le concours n\'a pas d\'échéance.',
         'Alexis'],
        ['Le lot',
         'Ce que gagne la photo la plus étoilée. Il sera écrit dans le règlement.',
         'Alexis et le juridique d\'OC Sport'],
        ['Le nom du challenge',
         '« Challenge photo Alpina » avec le bloc de la marque, ou un autre nom. '
         + 'L\'aperçu sait déjà s\'afficher sans le bloc.',
         'Alexis']
      ];
      var encart = '<section class="rdrc-manque" aria-labelledby="rdrc-manque-t">' +
        '<div class="rdrc-manque-h">' + IC.alerte +
          '<h3 class="rdrc-manque-t" id="rdrc-manque-t">Ce qu\'il nous manque pour finaliser le concours photo</h3></div>' +
        '<p class="rdrc-manque-p">Le concours n\'est pas encore ouvert, et il ne peut pas l\'être sans ces six réponses. '
          + 'Aucune n\'est technique. Dès qu\'elles arrivent, il nous faut deux à trois jours pour le construire et l\'ouvrir.</p>' +
        '<ol class="rdrc-manque-l">' + manque.map(function (x, i) {
          return '<li class="rdrc-manque-i">' +
            '<span class="rdrc-manque-n" aria-hidden="true">' + (i + 1) + '</span>' +
            '<span><span class="rdrc-manque-q">' + esc(x[0]) + '</span><span class="rdrc-manque-d">' + esc(x[1]) + '</span></span>' +
            '<span class="rdrc-manque-qui"><i>À fournir par</i>' + esc(x[2]) + '</span>' +
          '</li>';
        }).join('') + '</ol>' +
      '</section>';

      var coche = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12.5 10 17.5 19 7"/></svg>';
      var pret = [
        ['L\'aperçu en ligne',
         'La page <a href="/concours-photo-2026" target="_blank" rel="noopener">/concours-photo-2026</a>, masquée des menus '
         + 'et non indexée, se montre en interne et aux partenaires. Ses 600 photos viennent de la médiathèque du site, '
         + 'les auteurs, les cœurs et les étoiles sont inventés.'],
        ['La fenêtre de dépôt',
         'Dessinée et visible dans l\'aperçu, en ajoutant <code>?etat=aucune</code> à l\'adresse. L\'envoi y est encore simulé, '
         + 'aucune photo ne part à la médiathèque.'],
        ['Les situations à montrer',
         'Un visiteur sans compte (<code>?etat=visiteur</code>), une photo en attente ou refusée (<code>?etat=attente</code>, '
         + '<code>?etat=refusee</code>), la page sans le bloc Alpina (<code>?marque=sans</code>).'],
        ['Le référencement',
         'Le titre, la description et le texte pour les moteurs sont prêts pour le jour de l\'ouverture. '
         + 'La page reste hors des moteurs tant que c\'est un aperçu.']
      ].map(function (x) {
        return '<li class="rdrc-pret-i"><span class="rdrc-pret-ic" aria-hidden="true">' + coche + '</span>' +
          '<span><span class="rdrc-pret-q">' + esc(x[0]) + '</span><span class="rdrc-pret-d">' + x[1] + '</span></span></li>';
      }).join('');

      var suite = ['Le vrai dépôt, qui envoie la photo à la médiathèque du site sans sa position GPS',
        'Les cœurs et l\'étoile enregistrés sur le compte du membre, et l\'encart dans son Espace Rhum',
        'Dans cet onglet, la file des photos en attente (aperçu, auteur, date), avec Accepter ou Refuser et le motif renvoyé à l\'auteur',
        'Le compte des dépôts par jour, pour voir si l\'animation prend',
        'La version anglaise de la page'
      ].map(function (t, i) {
        return '<li class="rdrc-pret-i"><span class="rdrc-pret-ic is-n" aria-hidden="true">' + (i + 1) + '</span>' +
          '<span class="rdrc-pret-d">' + esc(t) + '</span></li>';
      }).join('');

      return '<div class="rdrc-grid">' + encart +
        card('Ce qui est prêt', 'pour montrer le concours', '<ul class="rdrc-pret-l">' + pret + '</ul>', false, IC.valide) +
        card('Ce que nous construirons ensuite', 'deux à trois jours, une fois les réponses reçues',
          '<ol class="rdrc-pret-l">' + suite + '</ol>' +
          '<p class="rdrc-help" style="margin:12px 0 0">La file de modération fonctionnera comme celle '
          + 'd\'Instagram, un onglet plus haut.</p>',
          false, IC.people) +
      '</div>';
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
      


      if (this._view === 'mobilite' || this._view === 'photo') return false;
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

      var tabs = VIEWS.map(function (v) {
        var on = v.id === self._view;
        var extra = '';
        if (v.id === 'insta') {
          extra = '<span class="rdrc-badge" data-zero="' + (claims.length ? '0' : '1') + '">' + claims.length + '</span>';
        }
        return '<button class="rdrc-tab" type="button" role="tab" data-view="' + v.id + '"' +
          ' aria-selected="' + (on ? 'true' : 'false') + '">' +
          esc(v.label) + extra + '</button>';
      }).join('');

       
       
      var body = this._view === 'insta' ? this._instaHtml(p)
               : this._view === 'photo' ? this._photoHtml()
               : this._view === 'village' ? this._villageHtml(p)
               : this._view === 'profils' ? this._profilsHtml(p)
               : this._view === 'contenu' ? this._contenuHtml(p)
               : this._view === 'mobilite' ? this._mobiliteHtml(p)
               : this._audienceHtml(p);

       
       
       
       
       
       
       
      var perime = false;
      if (p.audience && p.audience.derniereNuit) {
        var age = (Date.now() - new Date(p.audience.derniereNuit).getTime()) / 3600000;
        perime = age > 30;
      }

      var stamp = '';
      if (this._view === 'contenu') {
        stamp = p.contenu && p.contenu.calculeLe ? 'Instantané ' + since(p.contenu.calculeLe) : '';
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
          '<div class="rdrc-nav" role="tablist" aria-label="Panneaux de la console">' + tabs + '</div>' +
          '<div class="rdrc-body" role="tabpanel">' + body + '</div>' +
        '</div>';

      this._wire();
    }

    _wire() {
      var self = this;

       
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
          self._emit('rc-mob-tirage', quoi === 'final' ? { final: true } : { jour: quoi });
        });
      });
      this.querySelectorAll('[data-mob-statut]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.disabled = true;
          self._emit('rc-mob-statut', { id: btn.getAttribute('data-mob-statut'), champ: btn.getAttribute('data-champ'), valeur: btn.getAttribute('data-valeur') });
        });
      });

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
