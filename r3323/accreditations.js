/* rdr-elements accreditations | source route-du-rhum bd0e5ed | rdr-accreditations.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["accreditations"]="bd0e5ed";performance.mark("rdr-elements:accreditations")}catch(e){}
;(function(){
(function () {
  'use strict';

  

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-accreditations')) return;

  




  const T = {
    abysse:   '#061321',
    marine:   '#0C2136',
    teal:     '#5DBFC0',
    tealMoy:  '#0E9AAA',
    tealFonce:'#00676E',
    ambre:    '#F5BE41',
    sable:    '#C9A96A',
    encre:    '#E8F1F5'
  };

  const POLICE_TEXTE = "'Montserrat', system-ui, -apple-system, sans-serif";
  const POLICE_TITRE = "Varien, Impact, sans-serif";

  






  const IC = {
    voilier:   'M12 3v13M12 16H4.5L12 3m0 13h6.5L12 6.5M3 19.6c1.6 1.3 3.2 1.3 4.8 0 1.6 1.3 3.2 1.3 4.8 0 1.6 1.3 3.2 1.3 4.8 0 1 .8 2 1.1 3 1',
    batiment:  'M4 20V8.5L12 4l8 4.5V20M9.5 20v-5h5v5M3 20h18',
    coeur:     'M12 20.5S5 16.2 5 11.1A4 4 0 0 1 12 8.2a4 4 0 0 1 7 2.9c0 5.1-7 9.4-7 9.4Z',
    poignee:   'm8.5 12.2 2.2 2.2a1.6 1.6 0 0 0 2.3 0l4.5-4.5M3 10.5 7 7l3.3 2.2a2 2 0 0 0 2.2 0L15 7.5 21 12v4l-3 3-3.5-3M3 10.5V16l3 3 2-2',
    appareil:  'M3 8.5h3.4l1.4-2.2h8.4l1.4 2.2H21v10H3z',
    ecran:     'M4 5.5h11v13H4zM15 10h3.4L21 12.5v6H15M7 9.5h5M7 13h5',
    personnes: 'M9 11.5a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2ZM2.8 19.5c0-3.1 2.7-4.8 6.2-4.8s6.2 1.7 6.2 4.8M16 5.6a2.9 2.9 0 0 1 0 5.7M17.5 14.9c2.3.4 3.7 1.9 3.7 4.6',
    carte:     'M3.2 5h17.6a2.6 2.6 0 0 1 2.6 2.6v8.8a2.6 2.6 0 0 1-2.6 2.6H3.2A2.6 2.6 0 0 1 .6 16.4V7.6A2.6 2.6 0 0 1 3.2 5ZM9 11a2.2 2.2 0 1 0 0-4.4A2.2 2.2 0 0 0 9 11ZM5.6 16.4c.5-1.6 1.8-2.4 3.4-2.4s2.9.8 3.4 2.4M15 10h3.4M15 13.6h3.4',
    document:  'M6.2 3.6h8.2L18.8 8v12.4H6.2zM14.2 3.8V8.2h4.4M9 12.4h6.2M9 15.8h6.2',
    etoile:    'M12 3.8 14.4 9l5.6.6-4.2 3.9 1.2 5.7L12 16.4l-5 2.8 1.2-5.7L4 9.6 9.6 9Z',
    globe:     'M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM3.5 12h17M12 3.5c4 4.6 4 12.4 0 17-4-4.6-4-12.4 0-17Z',
    ancre:     'M12 7.5v13M12 20.5c-3.6 0-6.5-2.9-6.5-6.5M12 20.5c3.6 0 6.5-2.9 6.5-6.5M8.6 10h6.8',
    personne:  'M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5',
    enveloppe: 'M3 5.5h18v13H3zM3.8 7l7.1 5.2a2 2 0 0 0 2.2 0L20.2 7',
    telephone: 'M7.5 3.8h9a1.8 1.8 0 0 1 1.8 1.8v12.8a1.8 1.8 0 0 1-1.8 1.8h-9a1.8 1.8 0 0 1-1.8-1.8V5.6a1.8 1.8 0 0 1 1.8-1.8ZM10.6 17.5h2.8',
    lignes:    'M4 6h16M4 12h16M4 18h10',
    cadenas:   'M6 10.5V8a6 6 0 0 1 12 0v2.5M4.5 10.5h15v9.5h-15z',
    fleche:    'M4 12h15M13 6l6 6-6 6',
    main:      'M9 11V5.4a1.6 1.6 0 0 1 3.2 0V10m0-1.4a1.6 1.6 0 0 1 3.2 0V10m0 0a1.6 1.6 0 0 1 3.2 0v5.7a4 4 0 0 1-4 4h-2.7a4 4 0 0 1-3-1.4l-4.6-5.4a1.7 1.7 0 0 1 2.4-2.4L9 13'
  };

  const svg = (clef, classe) => {
    const d = IC[clef];
    if (!d) return '';
    return '<svg class="' + (classe || '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path d="' + d + '"/></svg>';
  };

  


  const DEFAUT = {
    kicker: 'Saint-Malo → Guadeloupe · Édition 2026',
    titre: 'Accréditations',
    indice: 'Attrapez le badge',
    badgeNom: 'Jean Dupont',
    badgeType: 'Accès presse',
    badgeDosTitre: 'Accréditation nominative',
    badgeDosMention: 'Ce badge est personnel. Il doit rester visible sur toutes les zones accréditées et ne peut être cédé.',
    badgeDosBandeau: 'Là où les rêves prennent le large',
    sangle: 'ROUTE DU RHUM · DESTINATION GUADELOUPE · ',
    bandeau: 'Pré-demandes médias ouvertes, à déposer avant le 15 octobre 2026',
    formTitre: 'Formulaire d’inscription',
    formTexte: 'Demandez votre accréditation et rejoignez-nous pour vivre la Route du Rhum au plus près de l’action.',
    boutonAttente: 'Le formulaire arrive très prochainement',
    boutonOuvert: 'S’inscrire',
    signature: 'Route du Rhum, là où les rêves prennent le large',
    atouts: [
      { icone: 'appareil', libelle: 'Accès aux temps forts' },
      { icone: 'etoile', libelle: 'Une expérience unique' },
      { icone: 'globe', libelle: 'Au cœur d’un événement international' }
    ],
    blocs: [
      {
        numero: '01', accent: 'teal', icone: 'personnes',
        etiquette: 'Qui est concerné',
        



        titre: 'Demande d’accréditations médias et créateurs de contenu',
        texte: 'Ce formulaire de pré-demande d’accréditation est uniquement destiné aux journalistes, technicien·nes média, photographes de presse et créateur·ices de contenu disposant d’un {fort}projet éditorial précis et clairement identifié{/fort}.',
        profils: [
          { icone: 'appareil', libelle: 'Journalistes & photographes' },
          { icone: 'ecran', libelle: 'Créateur·ices de contenu' }
        ]
      },
      {
        numero: '02', accent: 'teal', icone: 'carte',
        etiquette: 'La règle',
        titre: 'Personnelle et nominative',
        texte: 'Pour les professionnel·les de la communication et des médias, la demande doit obligatoirement être liée à un média actif ou à une plateforme de création de contenu. Les candidatures de freelance ne pourront donc être retenues en l’absence d’une {fort}commande confirmée{/fort} ou d’un support de diffusion clairement identifié.',
        profils: []
      },
      {
        numero: '03', accent: 'or', icone: 'document',
        etiquette: 'Le dépôt',
        titre: 'Un seul canal, le formulaire',
        texte: '{fort}Aucune demande d’accréditation transmise par email ne sera traitée.{/fort} Les candidatures devront impérativement être déposées via le formulaire officiel ci-dessous. Un formulaire devra être rempli pour chaque personne souhaitant être accréditée, en prenant soin de renseigner l’intégralité des informations demandées.',
        profils: []
      }
    ]
  };

  


  const i18nNorm = s => String(s).replace(/[‘’]/g, "'").replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ').trim();

  const ER_EN = {
     
    'Saint-Malo → Guadeloupe · Édition 2026': 'Saint-Malo → Guadeloupe · 2026 edition',
    'Accréditations': 'Accreditation',
    'Attrapez le badge': 'Grab the badge',
    'Accréditation nominative': 'Named accreditation',
    'Ce badge est personnel. Il doit rester visible sur toutes les zones accréditées et ne peut être cédé.': 'This badge is personal. It must remain visible in all accredited areas and cannot be transferred.',
    'Là où les rêves prennent le large': 'Where dreams set sail',
    'Accès presse': 'Press access',
    'Pré-demandes médias ouvertes, à déposer avant le 15 octobre 2026': 'Media pre-applications are open, to be submitted before 15 October 2026',
     
    'Qui est concerné': 'Who it is for',
    'Demande d’accréditations médias et créateurs de contenu': 'Media and content creator accreditation requests',
    'Ce formulaire de pré-demande d’accréditation est uniquement destiné aux journalistes, technicien·nes média, photographes de presse et créateur·ices de contenu disposant d’un': 'This pre-application form is reserved for journalists, media technicians, press photographers and content creators with a',
    'projet éditorial précis et clairement identifié': 'clearly defined editorial project',
    'La règle': 'The rule',
    'Personnelle et nominative': 'Personal and named',
    'Pour les professionnel·les de la communication et des médias, la demande doit obligatoirement être liée à un média actif ou à une plateforme de création de contenu. Les candidatures de freelance ne pourront donc être retenues en l’absence d’une': 'For communications and media professionals, the request must be tied to an active outlet or a content platform. Freelance applications cannot be accepted without a',
    'commande confirmée': 'confirmed commission',
    'ou d’un support de diffusion clairement identifié.': 'or a clearly identified publishing channel.',
    'Le dépôt': 'Applying',
    'Un seul canal, le formulaire': 'One channel only, the form',
    'Aucune demande d’accréditation transmise par email ne sera traitée.': 'No accreditation request sent by email will be processed.',
    'Les candidatures devront impérativement être déposées via le formulaire officiel ci-dessous. Un formulaire devra être rempli pour chaque personne souhaitant être accréditée, en prenant soin de renseigner l’intégralité des informations demandées.': 'Applications must be submitted through the official form below. One form must be completed for each person seeking accreditation, with every requested detail filled in.',
     
    'Journalistes & photographes': 'Journalists & photographers',
    'Créateur·ices de contenu': 'Content creators',
     
    'Formulaire d’inscription': 'Registration form',
    'Demandez votre accréditation et rejoignez-nous pour vivre la Route du Rhum au plus près de l’action.': 'Request your accreditation and join us to experience the Route du Rhum up close.',
    'Accès aux temps forts': 'Access to the highlights',
    'Une expérience unique': 'A one-of-a-kind experience',
    'Au cœur d’un événement international': 'At the heart of an international event',
    'Le formulaire arrive très prochainement': 'The form is coming very soon',
    'S’inscrire': 'Apply',
    'Formulaire de demande d’accréditation': 'Accreditation request form',
    'Route du Rhum, là où les rêves prennent le large': 'Route du Rhum, where dreams set sail',
    'Badge d’accréditation Route du Rhum 2026, attrapez-le pour le faire bouger': 'Route du Rhum 2026 accreditation badge, grab it to make it move'
  };
  const ER_EN_NORM = {};
  for (const k in ER_EN) ER_EN_NORM[i18nNorm(k)] = ER_EN[k];

  const esc = (s) => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  



  function adresseSure(u, relatifOk) {
    const v = String(u == null ? '' : u).trim();
    if (!v) return '';
    if (relatifOk && /^\/[^/]/.test(v)) return v;
    if (!/^https:\/\//i.test(v)) return '';
    try { return new URL(v).href; } catch (e) { return ''; }
  }

  


  






  const RAPPORT_DEFAUT = 919 / 620;
  function dimensionsImage(u) {
    const v = String(u == null ? '' : u);
    const w = Number((v.match(/originWidth=(\d+)/) || [])[1]);
    const h = Number((v.match(/originHeight=(\d+)/) || [])[1]);
    return (w > 0 && h > 0) ? { w, h } : null;
  }

  function urlImage(u, largeur) {
    const v = String(u == null ? '' : u).trim();
    if (!v) return '';
    const m = v.match(/^wix:image:\/\/v1\/([^/]+)/);
    if (!m) return adresseSure(v);
    




    const base = 'https://static.wixstatic.com/media/' + m[1];
    if (!largeur) return base;
    const dim = dimensionsImage(v);
    const l = dim ? Math.min(largeur, dim.w) : largeur;
    const hauteur = Math.round(l * (dim ? dim.h / dim.w : RAPPORT_DEFAUT));
    return base + '/v1/fill/w_' + l + ',h_' + hauteur + ',al_c,q_90/' + m[1];
  }

  










  const R = 'rdr-accreditations .rac';
  const CSS = [
    


    'rdr-accreditations{display:block;width:100%;}',

    R + ',' + R + ' *,' + R + ' *::before,' + R + ' *::after{box-sizing:border-box;}',
    R + ' *{margin:0;padding:0;}',
    R + '{' +
      '--rac-abysse:' + T.abysse + ';--rac-marine:' + T.marine + ';' +
      '--rac-teal:' + T.teal + ';--rac-teal-m:' + T.tealMoy + ';--rac-teal-f:' + T.tealFonce + ';' +
      '--rac-or:' + T.ambre + ';--rac-sable:' + T.sable + ';--rac-encre:' + T.encre + ';' +
      '--rac-doux:rgba(232,241,245,.66);--rac-pale:rgba(232,241,245,.40);' +
      '--rac-filet:rgba(93,191,192,.22);' +
      '--rac-cadre:min(1180px, 100% - 2 * clamp(20px,5vw,64px));' +
      '--rac-corps:clamp(16px,.55vw + 14px,19px);' +
      'display:block;width:100%;overflow-x:hidden;' +
      'background:var(--rac-abysse);color:var(--rac-encre);' +
      'font-family:' + POLICE_TEXTE + ';font-size:var(--rac-corps);line-height:1.75;' +
      '-webkit-font-smoothing:antialiased;}',
    R + ' img{display:block;max-width:100%;}',
    R + ' button,' + R + ' input,' + R + ' select{font:inherit;color:inherit;}',
    R + ' :focus-visible{outline:2px solid var(--rac-teal);outline-offset:3px;border-radius:2px;}',
    R + ' h1,' + R + ' h2,' + R + ' h3{font-family:' + POLICE_TITRE + ';font-style:italic;font-weight:400;' +
      'line-height:.95;text-transform:uppercase;letter-spacing:.02em;}',
    R + ' .rac-cadre{width:var(--rac-cadre);margin-inline:auto;}',

     
    R + ' .rac-scene{position:relative;isolation:isolate;' +
      'padding:clamp(48px,7vh,96px) 0 clamp(56px,8vh,104px);overflow:hidden;' +
      'background:radial-gradient(120% 52% at 50% -8%, rgba(14,154,170,.30) 0%, rgba(14,154,170,0) 60%),' +
      'radial-gradient(66% 26% at 50% 30%, rgba(93,191,192,.13) 0%, rgba(93,191,192,0) 70%),' +
      'linear-gradient(180deg,#08192a 0%,#071624 34%,var(--rac-abysse) 62%,#081826 100%);}',
    R + ' .rac-houle{position:absolute;inset:-4% -14% auto;height:78%;z-index:0;opacity:.45;pointer-events:none;}',
    R + ' .rac-houle path{fill:none;stroke:var(--rac-teal);stroke-width:1;vector-effect:non-scaling-stroke;}',
     
    R + ' .rac-fx{position:absolute;inset:0;pointer-events:none;}',
    R + ' .rac-dedans{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;pointer-events:none;}',
    R + ' .rac-dedans > *{pointer-events:auto;}',

    R + ' .rac-kicker{font-size:clamp(10px,1.4vw,12px);letter-spacing:.42em;text-transform:uppercase;' +
      'font-weight:600;color:var(--rac-teal);line-height:1;margin-bottom:clamp(18px,3vh,28px);' +
      'text-indent:.42em;text-align:center;position:relative;z-index:2;}',
    R + ' .rac-titre{position:relative;display:inline-block;white-space:nowrap;' +
      'font-size:clamp(38px,8.6vw,124px);z-index:2;color:#fff;text-align:center;letter-spacing:.01em;' +
      'text-shadow:0 0 60px rgba(93,191,192,.45), 0 0 140px rgba(14,154,170,.28);}',
    

    R + ' .rac-place{width:100%;height:clamp(340px,46vh,470px);margin-top:clamp(-56px,-5vh,-24px);pointer-events:none;}',

    R + ' .rac-corde{position:absolute;inset:0;width:100%;height:100%;overflow:visible;z-index:1;}',
    R + ' .rac-sangle-fond{fill:none;stroke:#132C46;stroke-linecap:round;stroke-linejoin:round;}',
    R + ' .rac-sangle-face{fill:none;stroke:#16385A;stroke-linecap:round;stroke-linejoin:round;}',
    R + ' .rac-sangle-txt{font-family:' + POLICE_TEXTE + ';font-weight:700;letter-spacing:.28em;fill:rgba(255,255,255,.5);}',

    R + ' .rac-badge{position:absolute;top:0;left:0;width:var(--cw);aspect-ratio:var(--rac-format,620/919);' +
      'font-size:calc(var(--cw)/100);transform-style:preserve-3d;will-change:transform;' +
      'cursor:grab;touch-action:none;pointer-events:auto;z-index:1;' +
      'filter:drop-shadow(0 34px 46px rgba(0,0,0,.55));}',
    R + ' .rac-badge.est-pris{cursor:grabbing;}',
    R + ' .rac-face{position:absolute;inset:0;border-radius:5.5em;overflow:hidden;backface-visibility:hidden;' +
      'box-shadow:0 0 0 1px rgba(93,191,192,.55), 0 0 34px rgba(93,191,192,.30);}',
    R + ' .rac-recto{background:#0E2A3C;}',
    R + ' .rac-recto img{width:100%;height:100%;object-fit:cover;pointer-events:none;' +
      'user-select:none;-webkit-user-drag:none;}',
    R + ' .rac-verso{transform:rotateY(180deg);display:flex;flex-direction:column;align-items:center;' +
      'padding:9em 6em 0;text-align:center;' +
      'background:linear-gradient(168deg,#123049 0%,#0B2033 55%,#0D2739 100%);}',
    R + ' .rac-id{position:absolute;top:4.2%;right:6.2%;left:42%;text-align:right;z-index:2;pointer-events:none;}',
    R + ' .rac-id .rac-ev{font-size:2.1em;letter-spacing:.34em;font-weight:600;color:rgba(255,255,255,.55);line-height:1.3;text-indent:.34em;}',
    R + ' .rac-id .rac-nom{font-size:4.7em;font-weight:700;color:#fff;line-height:1.25;letter-spacing:-.005em;}',
    R + ' .rac-id .rac-type{font-size:5.2em;font-weight:700;color:var(--rac-sable);line-height:1.15;text-transform:uppercase;}',
    R + ' .rac-dos-titre{font-size:2.4em;letter-spacing:.3em;font-weight:600;color:var(--rac-teal);text-indent:.3em;line-height:1.4;text-transform:uppercase;}',
    R + ' .rac-qr{width:36em;height:36em;margin:4.5em 0 4em;border-radius:1.6em;background:#fff;padding:1.8em;box-shadow:0 0 26px rgba(93,191,192,.3);}',
    R + ' .rac-qr canvas{width:100%;height:100%;display:block;image-rendering:pixelated;}',
    R + ' .rac-dos-mention{font-size:2.4em;line-height:1.6;color:rgba(232,241,245,.6);font-weight:500;max-width:62em;}',
    R + ' .rac-dos-bande{margin-top:auto;width:calc(100% + 12em);padding:3.2em 2em;display:flex;align-items:center;justify-content:center;' +
      'background:linear-gradient(90deg,var(--rac-teal-f),var(--rac-teal-m) 55%,#1B4E66);}',
    R + ' .rac-dos-bande span{font-size:2.4em;font-weight:700;letter-spacing:.22em;color:rgba(255,255,255,.92);text-indent:.22em;text-transform:uppercase;line-height:1.3;}',

    R + ' .rac-indice{position:relative;z-index:2;display:inline-flex;align-items:center;gap:12px;' +
      'margin-top:clamp(2px,1.5vh,14px);font-size:13px;letter-spacing:.16em;text-transform:uppercase;' +
      'font-weight:600;color:var(--rac-pale);transition:opacity .6s ease;}',
    R + ' .rac-indice svg{width:20px;height:20px;flex:none;stroke:var(--rac-teal);fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}',
    R + ' .rac-indice.est-parti{opacity:0;}',

     
    R + ' .rac-bandeau{position:relative;overflow:hidden;z-index:5;padding:clamp(13px,1.9vh,20px) 0;' +
      'border-top:1px solid var(--rac-filet);border-bottom:1px solid var(--rac-filet);' +
      'background:linear-gradient(90deg,rgba(14,154,170,.10),rgba(93,191,192,.20) 50%,rgba(14,154,170,.10));}',
    R + ' .rac-bandeau-piste{display:flex;width:max-content;animation:rac-defile 46s linear infinite;}',
    R + ' .rac-bandeau-piste > span{display:inline-flex;align-items:center;gap:clamp(22px,3vw,44px);' +
      'padding-right:clamp(22px,3vw,44px);font-family:' + POLICE_TITRE + ';font-style:italic;' +
      'font-size:clamp(15px,1.9vw,25px);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;color:#fff;}',
    R + ' .rac-bandeau svg{width:1em;height:1em;flex:none;stroke:var(--rac-or);fill:none;stroke-width:1.6;stroke-linecap:round;}',
    R + ' .rac-bandeau:hover .rac-bandeau-piste{animation-play-state:paused;}',
    


    '@keyframes rac-defile{to{transform:translateX(-50%);}}',
     
    R + ' .rac-bande{padding:clamp(58px,9vh,112px) 0;}',
    R + ' .rac-bande--form{background:radial-gradient(90% 60% at 50% 0%, rgba(14,154,170,.20), rgba(14,154,170,0) 60%),' +
      'linear-gradient(180deg,#081826,#061321 70%);}',
    R + ' .rac-blocs{width:100%;margin-top:clamp(26px,5vh,54px);display:flex;flex-direction:column;gap:clamp(14px,1.8vw,22px);}',
    R + ' .rac-bloc{--acc:93,191,192;position:relative;display:grid;' +
      'grid-template-columns:clamp(98px,12vw,164px) minmax(0,1fr);' +
      'border:1px solid rgba(var(--acc),.20);border-radius:3px 28px 3px 28px;overflow:hidden;text-align:left;' +
      'background:linear-gradient(118deg, rgba(16,42,66,.88) 0%, rgba(10,27,44,.52) 62%);' +
      'opacity:0;transform:translateY(26px);' +
      'transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1), border-color .3s ease, box-shadow .3s ease;}',
    R + ' .rac-bloc.est-la{opacity:1;transform:none;}',
    R + ' .rac-bloc.est-la:hover{border-color:rgba(var(--acc),.45);' +
      'box-shadow:0 26px 60px -34px rgba(0,0,0,.9), 0 0 46px -16px rgba(var(--acc),.35);}',
    R + ' .rac-bloc--or{--acc:245,190,65;}',
    R + ' .rac-rail{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;' +
      'gap:14px;padding:clamp(22px,2.6vw,32px) 10px;overflow:hidden;' +
      'background:linear-gradient(168deg, rgba(var(--acc),.22) 0%, rgba(var(--acc),.03) 70%);' +
      'border-right:1px solid rgba(var(--acc),.18);}',
    R + ' .rac-rail::after{content:"";position:absolute;inset:auto -20% -30% -20%;height:70%;pointer-events:none;' +
      'background:radial-gradient(60% 100% at 50% 100%, rgba(var(--acc),.20), transparent 70%);}',
    R + ' .rac-num{font-family:' + POLICE_TITRE + ';font-style:italic;font-size:clamp(36px,5.2vw,62px);' +
      'line-height:.85;color:rgba(var(--acc),.92);}',
    R + ' .rac-regle{width:1px;flex:1;min-height:22px;background:linear-gradient(180deg,rgba(var(--acc),.5),transparent);}',
    R + ' .rac-rail > svg{width:clamp(20px,2.4vw,26px);height:clamp(20px,2.4vw,26px);stroke:rgba(var(--acc),.75);' +
      'fill:none;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;position:relative;z-index:1;}',
    R + ' .rac-texte{padding:clamp(24px,3vw,42px) clamp(22px,3vw,46px);}',
    R + ' .rac-etiq{font-size:11px;letter-spacing:.34em;text-transform:uppercase;font-weight:600;' +
      'color:rgb(var(--acc));line-height:1;margin-bottom:13px;text-indent:.34em;}',
    R + ' .rac-texte h2{font-size:clamp(20px,2.6vw,33px);color:#fff;margin-bottom:16px;}',
    R + ' .rac-texte p{color:var(--rac-doux);font-size:clamp(15.5px,.38vw + 14.6px,18px);line-height:1.8;max-width:64ch;}',
    R + ' .rac-texte b{color:rgba(var(--acc),1);font-weight:600;}',

    R + ' .rac-profils{display:flex;flex-wrap:wrap;gap:9px;margin-top:24px;}',
    R + ' .rac-profil{display:inline-flex;align-items:center;gap:10px;padding:9px 16px 9px 12px;' +
      'border:1px solid rgba(93,191,192,.22);border-radius:999px;background:rgba(93,191,192,.06);' +
      'font-size:13px;font-weight:600;color:var(--rac-encre);line-height:1.2;}',
    R + ' .rac-profil svg{width:17px;height:17px;flex:none;stroke:var(--rac-teal);fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}',

     
    R + ' .rac-panneau{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);' +
      'border:1px solid rgba(93,191,192,.28);border-radius:4px 30px 4px 30px;overflow:hidden;' +
      'background:rgba(8,24,38,.72);' +
      'box-shadow:0 40px 90px -40px rgba(0,0,0,.9), 0 0 70px -20px rgba(14,154,170,.35);}',
    R + ' .rac-aparte{padding:clamp(30px,3.4vw,46px);display:flex;flex-direction:column;gap:24px;' +
      'background:linear-gradient(165deg, rgba(14,154,170,.20), rgba(12,33,54,.5) 60%);' +
      'border-right:1px solid rgba(93,191,192,.18);}',
    R + ' .rac-aparte-mark{width:26px;height:26px;stroke:var(--rac-teal);fill:none;stroke-width:1.5;stroke-linecap:round;margin-bottom:16px;}',
    R + ' .rac-aparte h3{font-size:clamp(24px,2.7vw,34px);color:#fff;line-height:1.02;}',
    R + ' .rac-aparte > p{font-size:calc(var(--rac-corps) - 2px);color:var(--rac-doux);}',
    R + ' .rac-atouts{list-style:none;display:flex;flex-direction:column;gap:16px;margin-top:6px;' +
      'padding-top:26px;border-top:1px solid rgba(93,191,192,.18);}',
    R + ' .rac-atouts li{display:flex;gap:14px;align-items:flex-start;font-size:15px;line-height:1.5;}',
    R + ' .rac-atouts svg{width:20px;height:20px;flex:none;margin-top:3px;stroke:var(--rac-teal);fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}',

    




    R + ' .rac-form{padding:clamp(28px,3.4vw,44px);display:flex;flex-direction:column;justify-content:center;}',
    


    R + ' .rac-attente{display:flex;flex-direction:column;align-items:stretch;justify-content:center;' +
      'gap:clamp(18px,2.4vw,28px);text-align:center;}',
    R + ' .rac-attente[hidden]{display:none;}',
    R + ' .rac-envoi{width:100%;padding:clamp(18px,2vw,24px) 24px;font-size:clamp(15px,1.2vw,17px);display:flex;align-items:center;justify-content:center;gap:12px;' +
      'border:none;border-radius:2px 14px 2px 14px;color:#04141C;font-weight:700;' +
      'letter-spacing:.06em;text-transform:uppercase;cursor:pointer;' +
      'background:linear-gradient(94deg,var(--rac-teal-f),var(--rac-teal-m) 45%,var(--rac-teal));' +
      'transition:filter .2s ease, transform .12s ease;}',
    R + ' .rac-envoi:hover:not(:disabled){filter:brightness(1.12);}',
    R + ' .rac-envoi:active:not(:disabled){transform:translateY(1px);}',
    R + ' .rac-envoi svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s ease;}',
    R + ' .rac-envoi:hover:not(:disabled) svg{transform:translateX(4px);}',
    R + ' .rac-envoi:disabled{background:rgba(93,191,192,.14);color:var(--rac-pale);cursor:not-allowed;}',
    R + ' .rac-envoi:disabled svg{display:none;}',
    R + ' .rac-weez{display:none;}',
    R + ' .rac-weez.est-la{display:block;}',
    

    R + ' .rac-weez iframe{width:100%;height:1400px;min-height:640px;border:0;display:block;background:transparent;}',
    




    R + ' .rac-panneau.est-ouvert{grid-template-columns:1fr;}',
    R + ' .rac-panneau.est-ouvert .rac-aparte{border-right:none;border-bottom:1px solid rgba(93,191,192,.18);}',
    R + ' .rac-panneau.est-ouvert .rac-form{padding:0;}',
    '@media(min-width:901px){',
      R + ' .rac-panneau.est-ouvert .rac-aparte{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);' +
        'grid-template-areas:"t a" "p a";column-gap:clamp(28px,4vw,64px);row-gap:14px;align-items:start;}',
      R + ' .rac-panneau.est-ouvert .rac-aparte > div{grid-area:t;}',
      R + ' .rac-panneau.est-ouvert .rac-aparte > p{grid-area:p;}',
      R + ' .rac-panneau.est-ouvert .rac-atouts{grid-area:a;align-self:center;margin-top:0;padding-top:0;border-top:none;' +
        'padding-left:clamp(28px,4vw,64px);border-left:1px solid rgba(93,191,192,.18);}',
    '}',

     
    R + ' .rac-outro{padding:clamp(46px,7vh,80px) 0;background:var(--rac-abysse);}',
    R + ' .rac-outro-ligne{display:flex;align-items:center;gap:clamp(14px,2.4vw,28px);justify-content:center;text-align:center;' +
      'font-family:' + POLICE_TEXTE + ';font-weight:600;text-transform:uppercase;' +
      'font-size:clamp(10px,1.2vw,13px);letter-spacing:.26em;text-indent:.26em;color:var(--rac-pale);}',
    R + ' .rac-outro-ligne::before,' + R + ' .rac-outro-ligne::after{content:"";flex:1;max-width:180px;height:1px;' +
      'background:linear-gradient(90deg,transparent,var(--rac-filet),transparent);}',
    R + ' .rac-outro-ligne svg{width:1.5em;height:1.5em;flex:none;stroke:var(--rac-teal);fill:none;stroke-width:1.4;stroke-linecap:round;}',

     
    '@media(max-width:900px){',
      R + ' .rac-panneau{grid-template-columns:1fr;}',
      R + ' .rac-aparte{border-right:none;border-bottom:1px solid rgba(93,191,192,.18);}',
      R + ' .rac-atouts{margin-top:0;}',
    '}',
    '@media(max-width:700px){',
      R + ' .rac-bloc{grid-template-columns:1fr;}',
      R + ' .rac-rail{flex-direction:row;align-items:center;justify-content:flex-start;gap:14px;' +
        'padding:14px clamp(20px,5vw,26px);border-right:none;border-bottom:1px solid rgba(var(--acc),.18);}',
      R + ' .rac-num{font-size:30px;}',
      R + ' .rac-regle{width:auto;height:1px;flex:1;min-height:0;background:linear-gradient(90deg,rgba(var(--acc),.5),transparent);}',
      R + ' .rac-texte{padding:22px clamp(20px,5vw,26px) 26px;}',
      R + ' .rac-profil{font-size:12px;padding:8px 13px 8px 10px;gap:8px;}',
    '}',
    '@media(max-width:600px){',
      



      R + ' .rac-kicker{letter-spacing:.24em;text-indent:.24em;}',
      R + ' .rac-place{height:clamp(300px,40vh,360px);margin-top:-14px;}',
      R + ' .rac-outro-ligne::before,' + R + ' .rac-outro-ligne::after{max-width:34px;}',
      R + ' .rac-outro-ligne{font-size:11px;letter-spacing:.14em;gap:10px;}',
    '}',
    

    '@media(prefers-reduced-motion:reduce){',
      R + ' .rac-bandeau-piste{animation:none;}',      R + ' .rac-houle{display:none;}',
      R + ' .rac-bloc{opacity:1;transform:none;transition:none;}',
    '}'
  ].join('');

  customElements.define('rdr-accreditations', class extends HTMLElement {
    static get observedAttributes() { return ['payload', 'lang']; }

    constructor() {
      super();
      this._initialise = false;
      this._p = null;
      this._lang = 'fr';
      this._attente = {};
      this._minuteurs = [];
      this._observateurs = [];
      



      this._ecouteurs = [];
      this._rafId = 0;
    }

    connectedCallback() {
      if (this._initialise) return;
      this._initialise = true;

      if (!document.getElementById('rac-style')) {
        const s = document.createElement('style');
        s.id = 'rac-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      



      if (this._attente.lang) this._lang = this._attente.lang;
      if (this._attente.payload !== undefined) this._lirePayload(this._attente.payload);
      this._attente = {};
      if (this.hasAttribute('lang')) this._lang = this.getAttribute('lang') === 'en' ? 'en' : 'fr';
      if (this.hasAttribute('payload')) this._lirePayload(this.getAttribute('payload'));

      this.innerHTML = '<div class="rac"></div>';
      this._racine = this.querySelector('.rac');
      this._rendre();
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres) return;
      if (!this._initialise) { this._attente[nom] = apres; return; }
      if (nom === 'lang') { this._lang = apres === 'en' ? 'en' : 'fr'; }
      else { this._lirePayload(apres); }
      this._rendre();
    }

    



    disconnectedCallback() {
      if (this._rafId) cancelAnimationFrame(this._rafId);
      this._rafId = 0;
      this._minuteurs.forEach(clearTimeout);
      this._minuteurs = [];
      this._observateurs.forEach(o => { try { o.disconnect(); } catch (e) {   } });
      this._observateurs = [];
      this._ecouteurs.forEach(([cible, type, fn]) => {
        try { cible.removeEventListener(type, fn); } catch (e) {   }
      });
      this._ecouteurs = [];
      this._initialise = false;
    }

    _lirePayload(brut) {
      if (!brut) { this._p = null; return; }
      try { this._p = JSON.parse(brut); }
      catch (e) { console.error('[rdr-accreditations] payload illisible', e); this._p = null; }
    }

    setPayload(p) {
      this._p = p || null;
      if (this._initialise) this._rendre();
    }

    

    _c(clef) {
      const v = this._p && this._p[clef];
      if (Array.isArray(v)) return v.length ? v : DEFAUT[clef];
      if (v === undefined || v === null || v === '') return DEFAUT[clef];
      return v;
    }

     
    _i18nLookup(brut) {
      const clef = String(brut == null ? '' : brut).trim();
      if (!clef) return undefined;
      const t = ER_EN[clef] !== undefined ? ER_EN[clef] : ER_EN_NORM[i18nNorm(clef)];
      return t !== undefined ? t : this._i18nDate(i18nNorm(clef));
    }

    





    _i18nDate(norm) {
      const MOIS = { janvier: 'January', 'février': 'February', fevrier: 'February', mars: 'March', avril: 'April', mai: 'May', juin: 'June', juillet: 'July', 'août': 'August', aout: 'August', septembre: 'September', octobre: 'October', novembre: 'November', 'décembre': 'December', decembre: 'December' };
      let m = norm.match(/^Ouverture des demandes d'accréditations le (\d{1,2})(?:er)? ([a-zéû]+) (\d{4})$/i);
      if (m && MOIS[m[2].toLowerCase()]) return 'Accreditation requests open on ' + m[1] + ' ' + MOIS[m[2].toLowerCase()] + ' ' + m[3];
      m = norm.match(/^Ouverture le (\d{1,2})(?:er)? ([a-zéû]+)$/i);
      if (m && MOIS[m[2].toLowerCase()]) return 'Opens on ' + m[1] + ' ' + MOIS[m[2].toLowerCase()];
      return undefined;
    }

    



    _i18n(racine) {
      if (this._lang !== 'en' || !racine) return;
      const marcheur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, null);
      const noeuds = [];
      while (marcheur.nextNode()) noeuds.push(marcheur.currentNode);
      for (const n of noeuds) {
        const brut = n.nodeValue;
        if (!brut || !/[A-Za-zÀ-ÿ0-9]/.test(brut)) continue;
        const en = this._i18nLookup(brut);
        if (en !== undefined && en !== brut.trim()) n.nodeValue = brut.replace(brut.trim(), () => en);
      }
      const ATTRS = ['aria-label', 'title', 'placeholder', 'alt'];
      racine.querySelectorAll('[aria-label],[title],[placeholder],[alt]').forEach(el => {
        for (const a of ATTRS) {
          if (!el.hasAttribute(a)) continue;
          const v = el.getAttribute(a);
          const en = this._i18nLookup(v);
          if (en !== undefined && en !== v.trim()) el.setAttribute(a, en);
        }
      });
    }

     
    _rendre() {
      if (!this._racine) return;
      this.disconnectedCallback();
      this._initialise = true;

      this._racine.innerHTML =
        this._scene() +
        this._bandeau() +
        this._formulaire() +
        this._signature();

      this._i18n(this._racine);
      this._brancher();
    }

    _scene() {
      

      let houle = '';
      for (let i = 0; i < 7; i++) {
        const y = 110 + i * 94, amp = 26 + i * 5;
        houle += '<path d="M-100 ' + y + ' Q 150 ' + (y - amp) + ' 400 ' + y +
          ' T 900 ' + y + ' T 1400 ' + y + '" opacity="' + (0.30 - i * 0.035).toFixed(3) + '"/>';
      }

      const brutImage = this._c('badgeImage');
      const img = urlImage(brutImage, 620);
      const dim = img ? dimensionsImage(brutImage) : null;
      this._rapportH = dim ? dim.h / dim.w : RAPPORT_DEFAUT;
      const format = dim ? dim.w + '/' + dim.h : '620/919';

      return '<section class="rac-scene">' +
        '<svg class="rac-houle" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
          houle + '</svg>' +

        '<div class="rac-fx" data-rac="stage">' +
          '<svg class="rac-corde" data-rac="corde" aria-hidden="true">' +
            '<defs><path data-rac="chemin" id="rac-chemin" d=""></path></defs>' +
            '<use href="#rac-chemin" class="rac-sangle-fond" data-rac="sangleFond"></use>' +
            '<use href="#rac-chemin" class="rac-sangle-face" data-rac="sangleFace"></use>' +
            '<text class="rac-sangle-txt" data-rac="sangleTxt" dy="2.6">' +
              '<textPath href="#rac-chemin" startOffset="4%" data-rac="sangleLabel"></textPath></text>' +
            '<g data-rac="pince"></g>' +
          '</svg>' +

          



          '<div class="rac-badge" data-rac="badge" role="img" style="--rac-format:' + format + '"' +
            ' aria-label="Badge d’accréditation Route du Rhum 2026, attrapez-le pour le faire bouger">' +
            '<div class="rac-face rac-recto">' +
              




              (img
                ? '<img src="' + esc(img) + '" alt="" draggable="false" decoding="async">'
                : '<div class="rac-id">' +
                    '<div class="rac-ev">Route du Rhum</div>' +
                    '<div class="rac-nom">' + esc(this._c('badgeNom')) + '</div>' +
                    '<div class="rac-type">' + esc(this._c('badgeType')) + '</div>' +
                  '</div>') +
            '</div>' +
            '<div class="rac-face rac-verso">' +
              '<div class="rac-dos-titre">' + esc(this._c('badgeDosTitre')) + '</div>' +
              '<div class="rac-qr"><canvas data-rac="qr" width="25" height="25"></canvas></div>' +
              '<p class="rac-dos-mention">' + esc(this._c('badgeDosMention')) + '</p>' +
              '<div class="rac-dos-bande"><span>' + esc(this._c('badgeDosBandeau')) + '</span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="rac-dedans rac-cadre">' +
          '<p class="rac-kicker">' + esc(this._c('kicker')) + '</p>' +
          '<h1 class="rac-titre" data-rac="titre">' + esc(this._c('titre')) + '</h1>' +
          '<div class="rac-place" data-rac="place"></div>' +
          '<p class="rac-indice" data-rac="indice">' + svg('main') + esc(this._c('indice')) + '</p>' +
          '<div class="rac-blocs">' + this._blocs() + '</div>' +
        '</div>' +
      '</section>';
    }

    



    _riche(texte) {
      return esc(texte)
        .split('{fort}').join('<b>')
        .split('{/fort}').join('</b>');
    }

    _blocs() {
      const blocs = this._c('blocs') || [];
      return blocs.map((b, i) => {
        const or = String(b.accent || '').toLowerCase() === 'or';
        const profils = Array.isArray(b.profils) ? b.profils : [];
        return '<article class="rac-bloc' + (or ? ' rac-bloc--or' : '') + '" data-rang="' + i + '">' +
          '<div class="rac-rail">' +
            '<span class="rac-num">' + esc(b.numero || String(i + 1).padStart(2, '0')) + '</span>' +
            '<span class="rac-regle"></span>' +
            svg(b.icone || 'document') +
          '</div>' +
          '<div class="rac-texte">' +
            '<p class="rac-etiq">' + esc(b.etiquette || '') + '</p>' +
            '<h2>' + esc(b.titre || '') + '</h2>' +
            '<p>' + this._riche(b.texte || '') + '</p>' +
            (profils.length
              ? '<div class="rac-profils">' + profils.map(p =>
                  '<span class="rac-profil">' + svg(p.icone) + esc(p.libelle || '') + '</span>').join('') + '</div>'
              : '') +
          '</div>' +
        '</article>';
      }).join('');
    }

    _bandeau() {
      const unite = esc(this._c('bandeau')) + svg('ancre');
      let piste = '';
      for (let i = 0; i < 4; i++) piste += unite;
      return '<div class="rac-bandeau">' +
        '<div class="rac-bandeau-piste">' +
          '<span>' + piste + '</span><span aria-hidden="true">' + piste + '</span>' +
        '</div></div>';
    }

    












    _formulaire() {
      const atouts = this._c('atouts') || [];

      return '<section class="rac-bande rac-bande--form">' +
        '<div class="rac-cadre">' +
          '<div class="rac-panneau">' +
            '<aside class="rac-aparte">' +
              '<div>' + svg('personne', 'rac-aparte-mark') + '<h3>' + esc(this._c('formTitre')) + '</h3></div>' +
              '<p>' + esc(this._c('formTexte')) + '</p>' +
              '<ul class="rac-atouts">' + atouts.map(a =>
                '<li>' + svg(a.icone) + esc(a.libelle || '') + '</li>').join('') + '</ul>' +
            '</aside>' +

            '<div class="rac-form">' +
              





              '<div class="rac-attente" data-rac="attente">' +
                '<button class="rac-envoi" type="button" data-rac="envoi" disabled>' +
                  esc(this._c('boutonAttente')) + '</button>' +
              '</div>' +

              '<div class="rac-weez" data-rac="weez"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
    }

    _signature() {
      const phrase = String(this._c('signature'));
      

      const coupe = phrase.indexOf(' prennent ');
      const avant = coupe > 0 ? phrase.slice(0, coupe) : phrase;
      const apres = coupe > 0 ? phrase.slice(coupe) : '';
      return '<div class="rac-outro"><div class="rac-cadre">' +
        '<p class="rac-outro-ligne" aria-label="' + esc(phrase) + '">' +
          '<span>' + esc(avant) + '</span>' + svg('ancre') + (apres ? '<span>' + esc(apres) + '</span>' : '') +
        '</p>' +
      '</div></div>';
    }

     
    _q(nom) { return this._racine.querySelector('[data-rac="' + nom + '"]'); }

    _brancher() {
      this._ajusterTitre();
      this._revelerBlocs();
      this._qr();
      this._depots();
      this._corde();
    }

    


    _ajusterTitre() {
      const t = this._q('titre');
      if (!t || !t.parentElement) return;
      const MAX = 124;
      




      let vuePlace = -1;
      const caler = () => {
        const place = t.parentElement.clientWidth;
        if (!place || Math.abs(place - vuePlace) < 0.5) return;
        vuePlace = place;
        t.style.fontSize = '100px';
        const l = t.offsetWidth;
        if (!l) return;
        t.style.fontSize = Math.min(MAX, Math.floor(100 * place / l)) + 'px';
      };
      caler();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(caler).catch(() => {});
      if (typeof ResizeObserver === 'function') {
        const ro = new ResizeObserver(this._aLaProchaineImage(caler));
        ro.observe(t.parentElement);
        this._observateurs.push(ro);
      }
    }

    







    _aLaProchaineImage(fn) {
      let prevu = 0;
      return () => {
        if (prevu) return;
        prevu = requestAnimationFrame(() => { prevu = 0; fn(); });
      };
    }

    



    _revelerBlocs() {
      const blocs = [...this._racine.querySelectorAll('.rac-bloc')];
      if (!blocs.length) return;
      const tout = () => blocs.forEach(b => b.classList.add('est-la'));
      if (matchMedia('(prefers-reduced-motion: reduce)').matches ||
          typeof IntersectionObserver !== 'function') { tout(); return; }
      const io = new IntersectionObserver((entrees, obs) => {
        entrees.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.style.transitionDelay = (Number(e.target.dataset.rang) % 3) * 110 + 'ms';
          e.target.classList.add('est-la');
          obs.unobserve(e.target);
        });
      }, { threshold: .08, rootMargin: '0px 0px -60px 0px' });
      blocs.forEach(b => io.observe(b));
      this._observateurs.push(io);
      this._minuteurs.push(setTimeout(tout, 2600));
    }

    


    _qr() {
      const cv = this._q('qr');
      if (!cv || !cv.getContext) return;
      const c = cv.getContext('2d');
      let s = 20260915;
      const tire = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
      c.fillStyle = '#fff'; c.fillRect(0, 0, 25, 25);
      c.fillStyle = '#0A1B2C';
      for (let y = 0; y < 25; y++) for (let x = 0; x < 25; x++) if (tire() > .52) c.fillRect(x, y, 1, 1);
      c.fillStyle = '#fff'; c.fillRect(0, 0, 8, 8); c.fillRect(17, 0, 8, 8); c.fillRect(0, 17, 8, 8);
      const oeil = (x, y) => {
        c.fillStyle = '#0A1B2C'; c.fillRect(x, y, 7, 7);
        c.fillStyle = '#fff'; c.fillRect(x + 1, y + 1, 5, 5);
        c.fillStyle = '#0A1B2C'; c.fillRect(x + 2, y + 2, 3, 3);
      };
      oeil(0, 0); oeil(18, 0); oeil(0, 18);
    }

    













    _depots() {
      const bouton = this._q('envoi');
      const weez = this._q('weez');
      const attente = this._q('attente');
      if (!bouton || !weez || !attente) return;

      const adresse = adresseSure(this._p && this._p.formulaireUrl);
      const ouvrir = () => {
        if (!adresse) return;                        
        attente.hidden = true;
        weez.classList.add('est-la');
        const panneau = weez.closest('.rac-panneau');
        if (panneau) panneau.classList.add('est-ouvert');
        weez.innerHTML = '<iframe src="' + esc(adresse) + '" loading="lazy" ' +
          'sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" ' +
          'title="Formulaire de demande d’accréditation"></iframe>';
        this._hauteurFormulaire(weez.querySelector('iframe'), adresse);
        

        bouton.disabled = false;
        bouton.innerHTML = esc(this._c('boutonOuvert')) + svg('fleche');
        this._i18n(this._racine);
      };

      const quand = Date.parse(String((this._p && this._p.ouvertureLe) || '')) ;
      if (!isFinite(quand)) return;                  
      const reste = quand - Date.now();
      if (reste <= 0) { ouvrir(); return; }
      

      if (reste < 2147483647) this._minuteurs.push(setTimeout(ouvrir, reste));
    }

    



















    _hauteurFormulaire(cadre, adresse) {
      if (!cadre) return;
      let origine = '';
      try { origine = new URL(adresse, location.href).origin; } catch (e) { return; }
      const ecoute = (ev) => {
        if (ev.source !== cadre.contentWindow || ev.origin !== origine) return;
        const d = ev.data && typeof ev.data === 'object' ? ev.data : {};
        if (d.type === 'piglet-widget-auto-resize-syn') {
          try {
            cadre.contentWindow.postMessage({ type: 'piglet-widget-auto-resize-ack', page: location.origin + location.pathname, referrer: '' }, origine);
          } catch (e) {   }
          return;
        }
        if (d.type !== 'piglet-widget-auto-resize-change-dimensions' && d.type !== 'target-change-height') return;
        const p = d.payload && typeof d.payload === 'object' ? d.payload : d;
        const h = Number(p.blockSize || p.height);
        if (isFinite(h) && h >= 200 && h <= 20000) cadre.style.height = Math.ceil(h) + 'px';
      };
      window.addEventListener('message', ecoute);
      this._ecouteurs.push([window, 'message', ecoute]);
    }

    









    






























    _corde() {
      const scene = this._racine.querySelector('.rac-scene');
      const stage = this._q('stage');
      const badge = this._q('badge');
      const svgEl = this._q('corde');
      const chemin = this._q('chemin');
      const fond = this._q('sangleFond');
      const face = this._q('sangleFace');
      const txt = this._q('sangleTxt');
      const label = this._q('sangleLabel');
      const pince = this._q('pince');
      const place = this._q('place');
      const indice = this._q('indice');
      if (!scene || !stage || !badge || !svgEl || !chemin || !place) return;

      label.textContent = String(this._c('sangle')).repeat(6);
      




      pince.innerHTML =
        '<g data-rac="pinceG">' +
        '<path d="M0 -1 v-15" stroke="#9FB2C4" stroke-width="2.4" fill="none"/>' +
        '<circle cx="0" cy="-18" r="4.8" fill="none" stroke="#B9C8D6" stroke-width="2.2"/>' +
        '<rect x="-8.5" y="-2" width="17" height="14" rx="3" fill="#A7B7C6"/>' +
        '<rect x="-5.5" y="1" width="11" height="8" rx="1.6" fill="#78899B"/>' +
        '</g>';
      const pinceG = this._q('pinceG');

      const doux = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const grossier = !matchMedia('(hover: hover)').matches;

      const N = 16, GRAV = 0.70, AMORTI = 0.945, PASSES = 18, RAPPEL = 0.010;
      















      const PORTEE = 1.25;           
      const POIGNE = 0.034;          
      const MONTEE = 0.050, DESCENTE = 0.032;

      const p = [], avant = [];
      let W = 0, H = 0, cw = 0, ch = 0, seg = 1, repos = 0, ancre = { x: 0, y: 0 };
      let prise = null, viseur = null, aimant = 0;
      let vrille = 0, vrilleV = 0, devant = false, rafale = 0;
      let visible = true, sema = false, defilAvant = 0;

      







      let vuW = -1, vuH = -1, vuCw = -1;
      const mesurer = () => {
        const r = stage.getBoundingClientRect();
        if (!r.width) return;
        const sp = place.getBoundingClientRect();
        const rapportH = this._rapportH || RAPPORT_DEFAUT;
        const nCw = Math.max(150, Math.min(288, r.width * 0.30, sp.height * 0.86 / rapportH));
        if (Math.abs(r.width - vuW) < 0.5 && Math.abs(r.height - vuH) < 0.5 &&
            Math.abs(nCw - vuCw) < 0.5 && sema) return;
        vuW = r.width; vuH = r.height; vuCw = nCw;

        W = r.width; H = r.height;
        cw = nCw;
        ch = cw * rapportH;
        repos = (sp.top - r.top) + (sp.height - ch) / 2;
        badge.style.setProperty('--cw', cw + 'px');
        svgEl.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
        fond.setAttribute('stroke-width', (cw * 0.100).toFixed(1));
        face.setAttribute('stroke-width', (cw * 0.081).toFixed(1));
        txt.setAttribute('font-size', (cw * 0.034).toFixed(1));
        txt.setAttribute('dy', (cw * 0.012).toFixed(1));
        pinceG.setAttribute('transform', 'scale(' + (cw / 240).toFixed(3) + ')');
        ancre = { x: W / 2, y: -Math.max(90, cw * 0.62) };
        seg = (repos - ancre.y) / (N - 1);
        if (!sema) {
          for (let i = 0; i < N; i++) {
            p[i] = { x: ancre.x, y: ancre.y + i * seg };
            avant[i] = { x: p[i].x, y: p[i].y };
          }
          sema = true;
        }
      };

      


      const adoucir = (x) => x * x * (3 - 2 * x);

      











      const force = (x) => { const a = adoucir(x); return a * a; };

      const pas = () => {
        


        let voulu = 0;
        if (!prise && viseur && !grossier && !doux) {
          const cx = p[N - 1].x, cy = p[N - 1].y + ch * 0.34;
          const d = Math.hypot(viseur.x - cx, viseur.y - cy);
          const portee = cw * PORTEE;
          if (d < portee) voulu = force(1 - d / portee);
        }
        aimant += (voulu - aimant) * (voulu > aimant ? MONTEE : DESCENTE);
        if (aimant < 0.0015) aimant = 0;

        for (let i = 1; i < N; i++) {
          const vx = (p[i].x - avant[i].x) * AMORTI, vy = (p[i].y - avant[i].y) * AMORTI;
          avant[i].x = p[i].x; avant[i].y = p[i].y;
          p[i].x += vx; p[i].y += vy + GRAV;
        }

        












        if (!prise && aimant && viseur) {
          const k = POIGNE * aimant;
          p[N - 1].x += (viseur.x - p[N - 1].x) * k;
          p[N - 1].y += (viseur.y - ch * 0.34 - p[N - 1].y) * k;
        }

        if (!prise && !aimant && grossier) {
          



          const t = performance.now();
          p[N - 1].x += Math.sin(t * 0.00085) * 0.30 + Math.sin(t * 0.00031) * 0.16;
          if (t > rafale) {
            rafale = t + 4200 + Math.random() * 3600;
            avant[N - 1].x = p[N - 1].x + (Math.random() * 4 - 2);
          }
        }

        for (let k = 0; k < PASSES; k++) {
          p[0].x = ancre.x; p[0].y = ancre.y;
          if (prise) { p[N - 1].x = prise.x; p[N - 1].y = prise.y; }
          for (let i = 0; i < N - 1; i++) {
            const a = p[i], b = p[i + 1];
            let dx = b.x - a.x, dy = b.y - a.y;
            const d = Math.hypot(dx, dy) || 1e-4;
            const f = (d - seg) / d * 0.5;
            dx *= f; dy *= f;
            if (i !== 0) { a.x += dx; a.y += dy; }
            if (!(prise && i + 1 === N - 1)) { b.x -= dx; b.y -= dy; }
          }
        }

        






        if (!prise) {
          const part = RAPPEL * (1 - aimant);
          p[N - 1].x += (ancre.x - p[N - 1].x) * part;
          p[N - 1].y += (repos - p[N - 1].y) * part * 0.6;
        }

        

        const t = p[N - 1];
        const gauche = cw * 0.56, droite = W - cw * 0.56, bas = H - ch * 0.55;
        if (t.x < gauche) { const d = gauche - t.x; t.x += d; avant[N - 1].x += d; }
        if (t.x > droite) { const d = t.x - droite; t.x -= d; avant[N - 1].x -= d; }
        if (t.y > bas) { const d = t.y - bas; t.y -= d; avant[N - 1].y -= d; }
      };

      const dessiner = () => {
        let d = 'M ' + p[0].x.toFixed(1) + ' ' + p[0].y.toFixed(1);
        for (let i = 1; i < N - 1; i++) {
          d += ' Q ' + p[i].x.toFixed(1) + ' ' + p[i].y.toFixed(1) + ' ' +
               ((p[i].x + p[i + 1].x) / 2).toFixed(1) + ' ' + ((p[i].y + p[i + 1].y) / 2).toFixed(1);
        }
        d += ' L ' + p[N - 1].x.toFixed(1) + ' ' + p[N - 1].y.toFixed(1);
        chemin.setAttribute('d', d);

        




        const pointe = p[N - 1], haut = p[N - 4];
        let ang = Math.atan2(pointe.x - haut.x, pointe.y - haut.y) * 180 / Math.PI;
        ang = Math.max(-44, Math.min(44, ang));

        



        const vx = pointe.x - avant[N - 1].x;
        vrilleV = vrilleV * 0.82 + vx * 0.18;
        const vise = Math.max(-46, Math.min(46, vrilleV * 4.2));
        vrille += (vise - vrille) * 0.14;

        pince.setAttribute('transform',
          'translate(' + pointe.x.toFixed(1) + ' ' + pointe.y.toFixed(1) + ') rotate(' + (-ang).toFixed(2) + ')');

         
        const vitesse = Math.hypot(pointe.x - avant[N - 1].x, pointe.y - avant[N - 1].y);
        const enAvant = !!prise || aimant > 0.18 || vitesse > 1.1;
        if (enAvant !== devant) { devant = enAvant; badge.style.zIndex = devant ? '3' : '1'; }

        badge.style.transformOrigin = '50% ' + (-cw * 0.05).toFixed(1) + 'px';
        badge.style.transform =
          'translate3d(' + (pointe.x - cw / 2).toFixed(1) + 'px,' + (pointe.y + cw * 0.048).toFixed(1) + 'px,0)' +
          ' rotate(' + (-ang).toFixed(2) + 'deg)' +
          ' perspective(1100px) rotateY(' + vrille.toFixed(2) + 'deg) rotateX(' + (vrille * 0.10).toFixed(2) + 'deg)';
      };

      const boucle = () => {
        if (visible) { pas(); dessiner(); }
        this._rafId = requestAnimationFrame(boucle);
      };

      



      const surScene = (ev) => {
        const r = stage.getBoundingClientRect();
        return { x: ev.clientX - r.left, y: ev.clientY - r.top };
      };

      if (!grossier && !doux) {
        const suivre = (ev) => {
          viseur = surScene(ev);
          if (indice) indice.classList.add('est-parti');
        };
        const quitter = () => { viseur = null; };
        scene.addEventListener('pointermove', suivre, { passive: true });
        scene.addEventListener('pointerleave', quitter, { passive: true });
        this._ecouteurs.push([scene, 'pointermove', suivre], [scene, 'pointerleave', quitter]);
      }

      badge.addEventListener('pointerdown', (ev) => {
        const q = surScene(ev);
        viseur = null; aimant = 0;
        

        prise = { x: p[N - 1].x, y: p[N - 1].y, dx: p[N - 1].x - q.x, dy: p[N - 1].y - q.y };
        badge.classList.add('est-pris');
        try { badge.setPointerCapture(ev.pointerId); } catch (e) {   }
        if (indice) indice.classList.add('est-parti');
        ev.preventDefault();
      });
      badge.addEventListener('pointermove', (ev) => {
        if (!prise) return;
        const q = surScene(ev);
        


        avant[N - 1].x = p[N - 1].x; avant[N - 1].y = p[N - 1].y;
        prise.x = q.x + prise.dx; prise.y = q.y + prise.dy;
      });
      const lacher = (ev) => {
        if (!prise) return;
        prise = null;
        badge.classList.remove('est-pris');
        try { badge.releasePointerCapture(ev.pointerId); } catch (e) {   }
      };
      badge.addEventListener('pointerup', lacher);
      badge.addEventListener('pointercancel', lacher);

      









      const POUSSE_DEFIL = grossier ? 0.34 : 0.22;
      const auDefilement = () => {
        if (!visible || prise) { defilAvant = window.scrollY; return; }
        const d = Math.max(-70, Math.min(70, window.scrollY - defilAvant));
        defilAvant = window.scrollY;
        avant[N - 1].y = p[N - 1].y - d * POUSSE_DEFIL;
      };
      defilAvant = window.scrollY;
      window.addEventListener('scroll', auDefilement, { passive: true });
      this._ecouteurs.push([window, 'scroll', auDefilement]);

      











      let pousse = false;
      const pousser = () => {
        if (pousse) return;
        pousse = true;
        this._minuteurs.push(setTimeout(() => {
          const cote = Math.random() > 0.5 ? 1 : -1;
          avant[N - 1].x = p[N - 1].x + 4 * cote;
          avant[N - 1].y = p[N - 1].y + 2;
        }, 450));
      };

      mesurer();
      if (typeof ResizeObserver === 'function') {
        


        const plusTard = this._aLaProchaineImage(mesurer);
        const ro1 = new ResizeObserver(plusTard); ro1.observe(stage);
        const ro2 = new ResizeObserver(plusTard); ro2.observe(place);
        this._observateurs.push(ro1, ro2);
      }
      if (typeof IntersectionObserver === 'function') {
        const io = new IntersectionObserver(es => {
          visible = es.some(e => e.isIntersecting);
          if (visible && !doux) pousser();
        }, { threshold: 0 });
        io.observe(stage);
        this._observateurs.push(io);
      } else {
        pousser();    
      }

      if (doux) { pas(); dessiner(); return; }

      boucle();
      


      if (grossier) { if (indice) indice.style.display = 'none'; }
      else this._minuteurs.push(setTimeout(() => { if (indice) indice.classList.add('est-parti'); }, 12000));
    }
  });
})();
})();
