/* rdr-elements actus | source route-du-rhum 4988f25 | rdr-news.js rdr-post-head.js rdr-post-more.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["actus"]="4988f25";performance.mark("rdr-elements:actus")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-news')) return;

   
  function escAttr(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }
  const escapeHTML = escAttr;
  function isSafeUrl(u, fallback) {
    fallback = arguments.length > 1 ? fallback : '';
    if (u == null) return fallback;
    let s = String(u).trim();
    if (!s) return fallback;
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) s = 'https://static.wixstatic.com/media/' + m[1];
    else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
    const okScheme = /^https?:/i.test(s);
    const relative = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
    if (!okScheme && !relative) return fallback;
    return s.replace(/"/g, '%22').replace(/'/g, '%27');
  }
  function isSafeColor(c, fallback) {
    fallback = arguments.length > 1 ? fallback : '#000000';
    if (c == null) return fallback;
    const hex = String(c).trim().replace(/^#/, '');
    return /^[0-9a-fA-F]{3,8}$/.test(hex) ? '#' + hex : fallback;
  }

  function rnImg(u, w, h, q) {
    const url = isSafeUrl(u);
    if (!url) return '';
    const m = url.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/#?]+)/);
    if (!m) return url;
    const id = m[1];
    const ext = (id.split('.').pop() || 'jpg').toLowerCase();
    return 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + w + ',h_' + h +
      ',al_c,q_' + (q || 75) + ',enc_auto/img.' + ext;
  }
  function rnSrcset(u, w, h) {
    const x1 = rnImg(u, w, h);
    if (!x1) return '';
    return x1 + ' ' + w + 'w, ' + rnImg(u, w * 2, h * 2) + ' ' + (w * 2) + 'w';
  }

  const SHAPES = 'https://static.wixstatic.com/shapes/';
   
   
   
  const FLAME_SVG = "<svg class=\"rn-flame\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"1473.61 623.30 83.73 162.62\"><path fill=\"#fff\" d=\"M 1498.37 741.84 C 1498.66 740.71 1498.99 739.54 1499.41 738.32 C 1499.71 737.41 1500.12 736.45 1500.6 735.45 L 1539.64 735.45 C 1537.89 737.59 1535.91 739.73 1534.05 741.84 Z M 1498.37 741.84 \"/><path fill=\"#fff\" d=\"M 1543.87 730.15 L 1503.63 730.15 C 1505.02 727.96 1506.69 725.67 1508.43 723.33 L 1548.33 723.33 C 1548.31 723.36 1548.29 723.4 1548.27 723.43 C 1547.05 725.63 1545.52 727.88 1543.87 730.15 \"/><path fill=\"#fff\" d=\"M 1512.67 718.03 C 1514.45 715.82 1516.41 713.61 1518.23 711.46 L 1554.03 711.46 C 1553.31 713.89 1552.41 716 1551.35 718.03 Z M 1512.67 718.03 \"/><path fill=\"#fff\" d=\"M 1555.32 702.41 C 1555.29 703.75 1555.19 704.99 1555.05 706.16 L 1522.9 706.16 C 1524.9 703.86 1526.93 701.7 1528.59 699.77 L 1555.14 699.77 C 1555.22 700.64 1555.34 701.52 1555.32 702.41 \"/><path fill=\"#fff\" d=\"M 1487.24 736.77 C 1482.21 728.27 1475.61 718.86 1482.02 701.7 C 1487.43 687.25 1515.62 660.77 1521.25 653.25 C 1525.88 647.07 1529.16 641.99 1529.01 637.19 L 1529.01 637.18 C 1528.45 635.83 1518.21 628.73 1512.08 625.3 C 1516.82 625.86 1521.14 626.7 1524.24 628.72 C 1525.75 629.58 1527.89 630.98 1529.86 632.94 C 1530.03 633.11 1530.22 633.3 1530.43 633.51 C 1532.74 635.96 1534.68 639.19 1534.86 643.16 C 1535.12 648.46 1533.54 653.21 1529.7 659.15 C 1521.04 672.55 1494.14 697.96 1488.28 709.99 C 1482.21 722.43 1482.25 727.78 1487.24 736.77 \"/><path fill=\"#fff\" d=\"M 1491.39 725.37 C 1497.51 710.82 1523.89 687.39 1531.37 675.89 C 1533.68 672.34 1540.08 664.17 1540.55 654.21 C 1540.8 648.88 1538.6 644.03 1536.05 640.23 C 1537.53 642.04 1545.53 653.03 1544.99 664.25 C 1544.76 668.91 1543.89 672.55 1542.67 675.71 C 1543.88 676.95 1545.39 678.64 1546.81 680.67 C 1547.81 681.86 1551.81 687.48 1553.91 694.47 L 1533.07 694.47 C 1533.52 693.9 1533.89 693.4 1534.2 692.96 C 1537.4 688.36 1539.6 684.43 1540.24 680.8 C 1539.08 682.88 1537.81 684.87 1536.54 686.99 C 1526.98 702.89 1504.43 720.76 1498.52 731.75 C 1496.63 735.25 1495.48 738.81 1495.7 741.97 C 1497.62 743.58 1500.06 745.31 1502.79 747.04 L 1529.29 747.04 C 1527.25 749.3 1525.05 751.6 1523.21 753.71 L 1497.75 753.71 C 1497.48 751.81 1497.3 749.74 1497.49 747.43 C 1496.57 746.82 1495.67 746.16 1494.82 745.46 C 1494.81 745.45 1494.8 745.43 1494.79 745.43 C 1489.04 739.91 1487.72 734.08 1491.39 725.37 \"/><path fill=\"#fff\" d=\"M 1516.4 780.91 C 1514.86 780.07 1513.39 779.1 1512.03 778.02 C 1512.02 778.01 1512.01 778 1512 777.98 C 1509.16 775.74 1506.74 773.04 1505.04 770.27 C 1502.95 766.87 1500.59 763.31 1499.07 759.01 L 1518.75 759.01 C 1516.94 761.33 1516 763.47 1515.05 765.38 C 1513.44 768.63 1512.48 771.92 1512.75 774.8 C 1516.35 777.72 1521.95 781.06 1527.66 783.86 C 1527.57 783.86 1527.48 783.86 1527.38 783.86 C 1523.62 783.92 1519.84 782.78 1516.41 780.91 C 1516.4 780.91 1516.4 780.91 1516.4 780.91 \"/></svg>";
  const CLASSES = [
    { key: 'ultim',         fr: 'Ultim',         en: 'Ultim',         col: '#429991', flag: SHAPES + '7bb303_0ed87d76a89f4e6ebd6008778014958e.svg' },
    { key: 'ocean-fifty',   fr: 'Ocean Fifty',   en: 'Ocean Fifty',   col: '#72b9f1', flag: SHAPES + '7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
    { key: 'imoca',         fr: 'IMOCA',         en: 'IMOCA',         col: '#76bcbe', flag: SHAPES + '7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg' },
    { key: 'class40',       fr: 'Class40',       en: 'Class40',       col: '#7e93ef', flag: SHAPES + '7bb303_b13535fe4621478fb5fb52e98c751b11.svg' },
    { key: 'vintage-mono',  fr: 'Vintage Mono',  en: 'Vintage Mono',  col: '#f9f06e', flag: SHAPES + '7bb303_9b4ee8478c6b4453b668b04eb278406c.svg' },
    { key: 'vintage-multi', fr: 'Vintage Multi', en: 'Vintage Multi', col: '#f19f39', flag: SHAPES + '7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg' }
  ];
  const classOf = k => CLASSES.find(c => c.key === k) || null;

  const CAT_STYLE = {
    actualites: { c: '#0B6E6B', bg: '#DCF2EF', ic: 'news' },
    news:       { c: '#0B6E6B', bg: '#DCF2EF', ic: 'news' },
    video:      { c: '#A14D00', bg: '#FBEAD6', ic: 'play' },
    image:      { c: '#5747C9', bg: '#E9E6FB', ic: 'cam' },
    audio:      { c: '#0E5B84', bg: '#DCEBF7', ic: 'mic2' },
    interview:  { c: '#8A6C00', bg: '#FBF3CD', ic: 'mic' }
  };
  const catStyleOf = slug => CAT_STYLE[String(slug || '').replace(/-en$/, '')] || CAT_STYLE.actualites;
  const CHIP_CATS = ['actualites', 'news', 'video', 'image', 'audio', 'interview'];
   
  function coverAR(u) {
    const m = String(u || '').match(/originWidth=(\d+).*?originHeight=(\d+)/);
    if (!m) return 0;
    const w = +m[1], h = +m[2];
    return (w > 0 && h > 0) ? w / h : 0;
  }

   
   
   
   
   
   
   
  const RN_STOPS = new Set(('le la les de du des un une et en au aux a pour sur avec qui que dans ce cette ces se sa son ses ou est sont ' +
    'the of in on for and to is are il elle nous vous ils par plus tout tous toute toutes comment pourquoi quand quel quelle quels quelles').split(' '));
  let _qMemo = null, _qMotsMemo = [];
  function motsDe(q) {
    const nq = norm(q);
    if (nq === _qMemo) return _qMotsMemo;
    _qMemo = nq;
    _qMotsMemo = nq.split(/[^a-z0-9]+/).filter(m => m && (/^\d+$/.test(m) || (m.length > 1 && !RN_STOPS.has(m))));
    return _qMotsMemo;
  }
  function scorePost(p, mots, nqFull) {
    if (!mots.length) return null;
    const t = norm(p.title || '');
    const k = norm((p.skippers || []).join(' ') + ' ' + (p.themes || []).join(' ') + ' ' + (p.classes || []).join(' ') + ' ' + (p.catLabel || ''));
    const e = norm(p.excerpt || '');
    let hits = 0, score = 0;
    for (const m of mots) {
      let h = 0;
      if (t.indexOf(m) !== -1) { score += 5; h = 1; }
      if (k.indexOf(m) !== -1) { score += 4; h = 1; }
      if (e.indexOf(m) !== -1) { score += 2; h = 1; }
      hits += h;
    }
    if (!hits) return null;
    if (hits === mots.length && mots.length > 1) score += 12;
    if (nqFull && mots.length > 1 && (t.indexOf(nqFull) !== -1 || e.indexOf(nqFull) !== -1)) score += 8;
    return { hits, score };
  }

  const THEMES_FALLBACK = {
    fr: { 'LA COURSE': ['Départ', 'Arrivées', 'Direct', 'Classement', 'Météo', 'Avarie', 'Record'], 'RÉCITS': ['Interview', 'Portrait', 'Coulisses', 'Décryptage', 'Histoire'], 'ANGLES': ['Rookies', 'Femmes', 'Un avenir durable'], 'TERRITOIRES': ['Saint-Malo', 'Guadeloupe', 'Village', 'Hospitalités'] },
    en: { 'THE RACE': ['Start', 'Arrivals', 'Live', 'Rankings', 'Weather', 'Damage', 'Record'], 'STORIES': ['Interview', 'Portrait', 'Behind the scenes', 'Analysis', 'History'], 'ANGLES': ['Rookies', 'Women', 'A sustainable future'], 'TERRITORIES': ['Saint-Malo', 'Guadeloupe', 'Race village', 'Hospitality'] }
  };

   
   
   
   
  const ESPACE_LIVE = false;

   
   
   
   
  const LUS_KEY = 'rdrLusV1';
  const LUS_MAX = 300;
  function slugDeUrl(u) {
    const parts = String(u || '').split('?')[0].split('#')[0].split('/').filter(Boolean);
    if (!parts.length) return '';
    try { return decodeURIComponent(parts[parts.length - 1]).toLowerCase(); }
    catch (e) { return parts[parts.length - 1].toLowerCase(); }
  }
  function lusEnsemble() {
    try { const a = JSON.parse(localStorage.getItem(LUS_KEY) || '[]'); return new Set(Array.isArray(a) ? a : []); }
    catch (e) { return new Set(); }
  }
  function marquerLu(slug) {
    if (!slug) return;
    try {
      let a = JSON.parse(localStorage.getItem(LUS_KEY) || '[]');
      if (!Array.isArray(a)) a = [];
      const i = a.indexOf(slug);
      if (i !== -1) a.splice(i, 1);
      a.push(slug);
      if (a.length > LUS_MAX) a = a.slice(a.length - LUS_MAX);
      localStorage.setItem(LUS_KEY, JSON.stringify(a));
    } catch (e) {   }
  }

   
  const DICT = {
    fr: {
      kicker: 'ROUTE DU RHUM — DESTINATION GUADELOUPE',
      title: 'Actualités',
      intro: "Toute l'info du plus mythique des sprints transatlantiques — départ le 1er novembre 2026, Saint-Malo → Pointe-à-Pitre.",
      all: 'TOUT', search: 'Rechercher', filters: 'Filtres', close: 'Fermer',
      mesprefs: 'Mes préférences',
      mesprefs_tip: 'Filtrer sur les skippers, les classes et les sujets que tu suis dans Mon Espace Rhum',
      mesprefs_vide: 'Rien à appliquer',
      mesprefs_rien_suivi: 'Aucune préférence',
      mesprefs_deja: 'Déjà appliquées',
      mesprefs_ko: 'Indisponible',
      hide_read: 'Masquer les déjà lus', show_read: 'Réafficher les déjà lus', read_hidden: 'Déjà lus masqués',
      search_ph: 'Un skipper, un sujet, un article…',
      search_hints: ['Qui sont les rookies 2026 ?', 'Le record de la traversée', 'Objectif Pointe-à-Pitre', 'Les coulisses de la course', 'Le village de Saint-Malo', 'La météo du départ'],
      seg_une: 'À LA UNE', seg_picks: 'À NE PAS MANQUER', seg_itw: 'LES GRANDS ENTRETIENS',
      seg_top: 'LES PLUS LUS', seg_all: 'TOUTES LES ACTUALITÉS & MÉDIAS',
      seg_media: 'À VOIR & À ÉCOUTER',
      all_audio: 'Tous les audios', all_video: 'Toutes les vidéos',
      title_archive: 'Archives',
      all_itw: 'Toutes les interviews', audio_eyebrow: 'Capsule audio',
      articles: 'articles', article: 'article', results: 'résultats', result: 'résultat',
      sort_recent: 'Récents', sort_views: 'Populaires',
      load_more: "Voir plus d'articles", loading: 'Chargement des actualités…',
      end_caught_up: "Vous avez tout vu", back_to_top: 'Revenir en haut',
      min_read: 'min', views_label: 'vues',
      today: "aujourd'hui", yesterday: 'hier', days_ago: 'il y a {n} j',
      new_flag: 'NOUVEAU', live_flag: 'EN DIRECT',
      cat_label: 'CATÉGORIE', themes_label: 'THÈMES', classes_label: 'CLASSES', edition_label: 'EXPLORER UNE ÉDITION',
      reset: 'Réinitialiser', apply: 'Voir les articles', apply_n: 'Voir {n} article{s}', apply_none: 'Aucun article', apply_counting: 'Chargement',
      skippers_hl: 'SKIPPERS DANS L’ACTU', topics_hl: 'SUJETS', latest_hl: 'DERNIÈRES ACTUALITÉS',
      sg_scope: 'Recherche dans l’archive « {y} »', sg_n_articles: '{n} article{s}',
      hint_enter: 'rechercher dans tout le site', hint_esc: 'fermer',
      sg_skippers: 'SKIPPERS', sg_topics: 'SUJETS', sg_articles: 'ARTICLES',
      sg_empty: 'Rien à l’horizon pour « {q} » — essayez un nom de skipper, une classe ou un thème.',
      empty_title: "Rien à l'horizon", empty_text: 'Aucun article ne correspond à ces filtres.', empty_reset: 'Tout réinitialiser',
      loading_title: 'CHARGEMENT EN COURS', loading_img: 'On rassemble les images, encore un petit instant…', loading_vid: 'On charge les vidéos, encore un petit instant…', loading_gen: 'On rassemble le contenu, encore un petit instant…',
      partner: 'PARTENAIRE', partner_content: 'CONTENU PARTENAIRE', partner_by: 'Proposé par {n}', partner_hide: 'Masquer ce partenaire',
      remove_filter: 'Retirer ce filtre', open_search: 'Ouvrir la recherche', open_filters: 'Ouvrir les filtres',
      deja_lu: 'Déjà lu', apply_my_filters: 'Appliquer mes filtres de mon Espace Rhum',
      route_from: 'SAINT-MALO', route_to: 'POINTE-À-PITRE', route_nm: '3 542 MILLES'
    },
    en: {
      kicker: 'ROUTE DU RHUM — DESTINATION GUADELOUPE',
      title: 'Latest news',
      intro: 'All the news from the most legendary of transatlantic sprints — start on 1 November 2026, Saint-Malo → Pointe-à-Pitre.',
      all: 'ALL', search: 'Search', filters: 'Filters', close: 'Close',
      mesprefs: 'My preferences',
      mesprefs_tip: 'Filter on the skippers, classes and topics you follow in My Espace Rhum',
      mesprefs_vide: 'Nothing to apply',
      mesprefs_rien_suivi: 'No preferences yet',
      mesprefs_deja: 'Already applied',
      mesprefs_ko: 'Unavailable',
      hide_read: 'Hide read articles', show_read: 'Show read articles', read_hidden: 'Read articles hidden',
      search_ph: 'A skipper, a topic, an article…',
      search_hints: ['Who are the 2026 rookies?', 'The crossing record', 'Destination Pointe-à-Pitre', 'Behind the scenes', 'The Saint-Malo village', 'Start weather'],
      seg_une: 'TOP STORY', seg_picks: 'NOT TO BE MISSED', seg_itw: 'THE BIG INTERVIEWS',
      seg_top: 'MOST READ', seg_all: 'ALL NEWS & MEDIA',
      seg_media: 'WATCH & LISTEN',
      all_audio: 'All audio', all_video: 'All videos',
      title_archive: 'Archives',
      all_itw: 'All interviews', audio_eyebrow: 'Audio capsule',
      articles: 'articles', article: 'article', results: 'results', result: 'result',
      sort_recent: 'Latest', sort_views: 'Popular',
      load_more: 'Load more articles', loading: 'Loading the news…',
      end_caught_up: "You're all caught up", back_to_top: 'Back to top',
      min_read: 'min read', views_label: 'views',
      today: 'today', yesterday: 'yesterday', days_ago: '{n} d ago',
      new_flag: 'NEW', live_flag: 'LIVE',
      cat_label: 'CATEGORY', themes_label: 'TOPICS', classes_label: 'CLASSES', edition_label: 'EXPLORE AN EDITION',
      reset: 'Reset', apply: 'See articles', apply_n: 'See {n} article{s}', apply_none: 'No article', apply_counting: 'Loading',
      skippers_hl: 'SKIPPERS IN THE NEWS', topics_hl: 'TOPICS', latest_hl: 'LATEST NEWS',
      sg_scope: 'Searching the “{y}” archive', sg_n_articles: '{n} article{s}',
      hint_enter: 'search the whole site', hint_esc: 'close',
      sg_skippers: 'SKIPPERS', sg_topics: 'TOPICS', sg_articles: 'ARTICLES',
      sg_empty: 'Nothing on the horizon for “{q}” — try a skipper name, a class or a topic.',
      empty_title: 'Nothing on the horizon', empty_text: 'No article matches these filters.', empty_reset: 'Reset everything',
      loading_title: 'LOADING', loading_img: 'Gathering the images, just a moment…', loading_vid: 'Loading the videos, just a moment…', loading_gen: 'Gathering the content, just a moment…',
      partner: 'PARTNER', partner_content: 'PARTNER CONTENT', partner_by: 'Brought to you by {n}', partner_hide: 'Hide this partner',
      remove_filter: 'Remove this filter', open_search: 'Open search', open_filters: 'Open filters',
      deja_lu: 'Read', apply_my_filters: 'Apply my Espace Rhum filters',
      route_from: 'SAINT-MALO', route_to: 'POINTE-À-PITRE', route_nm: '3,542 NM'
    }
  };

  const IC = {
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 0 2-2V8"/><path d="M4 5v13a2 2 0 0 0 2 2h13"/><path d="M8 9h6M8 13h6M8 17h4"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>',
    cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M9 7l1.2-2.4h3.6L15 7"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',
     
     
    eyelu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 11.5S5.5 5.5 12 5.5 22 11.5 22 11.5s-3.5 6-10 6-10-6-10-6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="11.5" r="2.6" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="17.6" r="5.2" fill="#FCF150" stroke="#0A1A35" stroke-width="1.1"/><path d="m15.9 17.6 1.5 1.5 2.7-2.8" stroke="#0A1A35" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mic2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 8c-3 1-5 3.5-5 7v3h6v-6H8.5C8.8 10.5 9.6 9.5 11 9zM20 8c-3 1-5 3.5-5 7v3h6v-6h-2.5c.3-1.5 1.1-2.5 2.5-3z"/></svg>',
    anchor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="5" r="2.5"/><path d="M12 7.5V21M12 21c-4.5 0-8-3-8.5-7H6M12 21c4.5 0 8-3 8.5-7H18"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.7 5.9 6.3.7-4.7 4.3 1.3 6.2L12 17.8 6.1 20.4l1.3-6.2L2.7 9.6l6.3-.7z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c1 3-1 5-2 6-1.5 1.5-2 3-2 5a6 6 0 0 0 12 0c0-3-2-5-3-7-.5 2-2 2.5-2.5 1C11 7 12 5 12 3z"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    searchIc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    filterIc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
     
     
    sparkIc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M12 18v3M4.2 7.2l2.1 2.1M17.7 14.7l2.1 2.1M3 12h3M18 12h3M4.2 16.8l2.1-2.1M17.7 9.3l2.1-2.1"/><circle cx="12" cy="12" r="2.4"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',
    boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 20c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M4 16 12 4l8 12"/><path d="M12 4v12"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M12 22V12M3 7l9 5 9-5"/></svg>'
  };
   
   
   
  const WAVE = cls => '<svg class="' + cls + '" viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true">' +
    '<path d="M0 54 Q 100 36 200 54 T 400 54 L 400 80 L 0 80 Z" fill="currentColor" opacity=".32"/>' +
    '<path d="M-40 66 Q 70 50 180 66 T 400 64 L 400 80 L -40 80 Z" fill="currentColor" opacity=".55"/>' +
    '<path d="M0 75 Q 110 64 220 75 T 440 74 L 440 80 L 0 80 Z" fill="currentColor"/>' +
    '</svg>';

  const CSS = `
.rn-root{
  --rn-bg:#F2F6F9; --rn-surface:#FFFFFF; --rn-ink:#0A1A35; --rn-ink-2:#45536E; --rn-ink-3:#8593A9;
  --rn-teal:#5DBFC0; --rn-teal-deep:#00676E; --rn-teal-ink:#04342C;
  --rn-navy-1:#0A1A35; --rn-navy-2:#123A5C; --rn-navy-3:#0E4B52;
  --rn-amber:#FCF150;
  --rn-line:#E1E6EE; --rn-line-strong:#C6CFDC;
  --rn-gold:#C8922A; --rn-gold-bg:#FBF1DC;
  --rn-live:#E24040;
  --rn-r-card:18px 4px 14px 4px; --rn-r-ui:9px;
  --rn-shadow:0 1px 2px rgba(10,26,53,.04),0 5px 18px rgba(10,26,53,.07);
  --rn-shadow-lift:0 3px 6px rgba(10,26,53,.07),0 14px 34px rgba(10,26,53,.13);
  --rn-font-display:'Varien','Archivo Black',Impact,sans-serif;
  --rn-font-body:'Montserrat',system-ui,-apple-system,sans-serif;
  font-family:var(--rn-font-body);font-size:15px;line-height:1.55;color:var(--rn-ink);
  background:
    radial-gradient(55% 38% at 88% -6%, rgba(93,191,192,.13), transparent 62%),
    radial-gradient(48% 34% at -8% 12%, rgba(114,185,241,.10), transparent 60%),
    var(--rn-bg);
  display:block;contain:layout style;
  -webkit-font-smoothing:antialiased;
}
.rn-root *,.rn-root *::before,.rn-root *::after{margin:0;padding:0;box-sizing:border-box}


.rn-root :where(button){font:inherit;cursor:pointer;border:none;background:none;color:inherit;text-align:inherit}
.rn-root :where(a){color:inherit;text-decoration:none}
.rn-root :where(a:hover,a:focus){color:inherit}
.rn-root :where(img){display:block;max-width:100%}
.rn-root :where(h1,h2,h3,p){font:inherit}
.rn-root :where(svg){display:block}
.rn-root :focus-visible{outline:2px solid var(--rn-teal-deep);outline-offset:2px;border-radius:4px}
.rn-root .rn-display{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;text-transform:uppercase;letter-spacing:.01em;line-height:1.08}
.rn__wrap{max-width:1280px;margin-inline:auto;padding-inline:clamp(20px,5vw,56px)}




.rn__head{padding-block:clamp(34px,5vw,62px) clamp(14px,2vw,22px);position:relative}
.rn__kicker{display:flex;align-items:center;gap:10px;font-size:11px;font-weight:800;letter-spacing:.18em;color:var(--rn-ink);margin-bottom:18px}
.rn__kicker-ic{width:28px;height:28px;border-radius:8px 3px 8px 3px;background:var(--rn-navy-1);color:var(--rn-amber);display:grid;place-items:center;flex:0 0 auto;overflow:hidden}
.rn__kicker-ic svg{width:13px;height:13px}
.rn__kicker-ic img{width:100%;height:100%;object-fit:cover;border-radius:inherit}
.rn__kicker-ic .rn-flame{width:auto;height:17px;display:block}
.rn__search-kick .rn-flame{width:auto;height:20px;flex:0 0 auto}
.rn__titlerow{display:flex;align-items:baseline;gap:.35em;flex-wrap:wrap}
.rn__h1{position:relative;font-size:clamp(36px,5.6vw,62px);color:var(--rn-ink);overflow-wrap:break-word;line-height:1}
.rn__h1txt{position:relative;z-index:1}
.rn__swash{position:absolute;left:-.1em;bottom:.02em;width:44%;height:.26em;background:var(--rn-amber);transform:skewX(-18deg);z-index:0;border-radius:3px 1px 3px 1px}
.rn__watermark{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;font-size:clamp(34px,5.2vw,58px);line-height:1;color:transparent;-webkit-text-stroke:1.8px rgba(93,191,192,.42);letter-spacing:.02em;pointer-events:none;user-select:none;transform:translateY(-1px)}



.rn__headart{position:absolute;right:clamp(48px,8vw,120px);bottom:clamp(10px,1.6vw,20px);width:clamp(156px,17vw,235px);pointer-events:none;user-select:none;filter:drop-shadow(0 6px 18px rgba(10,26,53,.10))}
.rn__headart img{width:100%;height:auto;display:block}
@media (max-width:1099px){.rn__headart{display:none}}
.rn__intro{color:var(--rn-ink-2);margin-top:14px;max-width:600px;font-size:clamp(13px,1.6vw,15px)}
.rn__gradbar{display:block;width:190px;height:4px;margin-top:22px;border-radius:2px;background:linear-gradient(90deg,var(--rn-amber),#72b9f1);transform:skewX(-18deg)}

.rn__sticky{position:sticky;top:0;z-index:60;background:transparent;border-bottom:1px solid transparent;transition:border-color .25s,box-shadow .25s,background .25s}
.rn__sticky.is-stuck{background:rgba(242,246,249,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom-color:var(--rn-line);box-shadow:0 6px 24px rgba(10,26,53,.08)}



.rn__sticky-in{display:flex;flex-direction:column;gap:10px;padding-block:12px}
.rn__toolrow{display:flex;align-items:center;gap:10px;min-width:0}
.rn__searchfield{flex:0 1 430px;min-width:0;height:44px;display:inline-flex;align-items:center;gap:10px;padding:0 16px;border-radius:12px 4px 12px 4px;border:1px solid var(--rn-line);background:var(--rn-surface);box-shadow:0 1px 2px rgba(10,26,53,.05),0 4px 12px rgba(10,26,53,.05);color:var(--rn-ink-3);font-size:12.5px;font-weight:500;transition:border-color .18s,box-shadow .18s,transform .12s;white-space:nowrap;overflow:hidden;position:relative}
.rn__searchfield::before{content:"";position:absolute;inset:0 auto 0 0;width:4px;background:linear-gradient(180deg,var(--rn-amber),var(--rn-teal));opacity:0;transition:opacity .18s}



.rn__searchfield:hover{border-color:var(--rn-teal);box-shadow:var(--rn-shadow-lift);transform:translateY(-1px)}
.rn__searchfield:focus-visible{border-color:var(--rn-teal);box-shadow:var(--rn-shadow-lift);transform:translateY(-1px)}
.rn__searchfield:hover::before{opacity:1}
.rn__searchfield:focus-visible::before{opacity:1}
.rn__searchfield svg{width:16px;height:16px;color:var(--rn-teal-deep);flex:0 0 auto}
.rn__searchfield .rn__sf-ph{overflow:hidden;text-overflow:ellipsis}
.rn__sf-scope{margin-left:auto;flex:0 0 auto;display:inline-flex;align-items:center;height:26px;padding:0 10px;border-radius:8px 3px 8px 3px;background:var(--rn-navy-1);color:var(--rn-amber);font-size:9.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}
.rn__clearbtn{flex:0 0 auto;width:44px;height:44px;border-radius:12px 4px 12px 4px;border:1px solid var(--rn-line);background:var(--rn-surface);color:var(--rn-ink-3);display:grid;place-items:center;box-shadow:0 1px 2px rgba(10,26,53,.05);transition:border-color .15s,color .15s,background .15s,transform .12s;animation:rn-sg-in .2s ease both}
.rn__clearbtn:hover{border-color:#C0392B;color:#C0392B;background:#FBEFED;transform:translateY(-1px)}
.rn__clearbtn svg{width:14px;height:14px}
.rn__searchfield.is-typing .rn__sf-ph::after{content:"";display:inline-block;width:1.5px;height:1.05em;background:var(--rn-teal-deep);margin-left:2px;vertical-align:-.15em;animation:rn-caret 1s steps(1) infinite}
@keyframes rn-caret{50%{opacity:0}}
@media (max-width:820px){.rn__searchfield{flex:1 1 auto}.rn__sf-scope{display:none}}
.rn__chipswrap{position:relative;flex:1;min-width:0;display:flex}
.rn__chips{display:flex;gap:9px;overflow-x:auto;scrollbar-width:none;flex:1;padding:5px 2px;-webkit-overflow-scrolling:touch}
.rn__chips::-webkit-scrollbar{display:none}


.rn__chips-hint{position:absolute;top:0;right:0;bottom:0;width:38px;display:flex;align-items:center;justify-content:flex-end;padding-right:2px;pointer-events:none;opacity:0;transition:opacity .22s;background:linear-gradient(90deg,rgba(242,246,249,0),var(--rn-bg) 68%)}
.rn__chipswrap.is-scrollable .rn__chips-hint{opacity:1}
.rn__chips-hint svg{width:15px;height:15px;color:var(--rn-teal-deep);transform:rotate(-90deg);animation:rn-hint-nudge 1.5s ease-in-out infinite}



@media (max-width:640px){.rn__chipswrap{margin-right:-20px}.rn__chips{padding-right:20px}}
@keyframes rn-hint-nudge{0%,100%{transform:rotate(-90deg) translateY(0)}50%{transform:rotate(-90deg) translateY(2.5px)}}
.rn__chip{flex:0 0 auto;height:44px;padding:0 16px 0 8px;border-radius:12px 4px 12px 4px;border:1px solid var(--rn-line);color:var(--rn-ink-2);font-size:10.5px;font-weight:800;letter-spacing:.09em;display:inline-flex;align-items:center;gap:9px;background:var(--rn-surface);box-shadow:0 1px 2px rgba(10,26,53,.05),0 4px 12px rgba(10,26,53,.05);transition:border-color .18s,color .18s,background .18s,transform .12s,box-shadow .18s;white-space:nowrap}
.rn__chipic{width:28px;height:28px;border-radius:8px 3px 8px 3px;display:grid;place-items:center;background:rgba(10,26,53,.06);color:var(--rn-ink-2);flex:0 0 auto;transition:background .18s,color .18s}
.rn__chipic svg{width:13px;height:13px}


@media (hover:hover){.rn__chip:hover{background:var(--cc,var(--rn-surface));border-color:var(--cc-deep,var(--rn-teal));color:var(--cc-deep,var(--rn-ink));transform:translateY(-1px);box-shadow:var(--rn-shadow-lift)}}
.rn__chip:active{transform:scale(.97)}
.rn__chip.is-on{background:var(--rn-navy-1);border-color:var(--rn-navy-1);color:#fff}
.rn__chip.is-on .rn__chipic{background:var(--rn-amber);color:var(--rn-navy-1)}
.rn__iconbtn{flex:0 0 auto;min-width:44px;height:44px;border-radius:12px 4px 12px 4px;border:1px solid var(--rn-line);background:var(--rn-surface);box-shadow:0 1px 2px rgba(10,26,53,.05),0 4px 12px rgba(10,26,53,.05);display:inline-flex;align-items:center;justify-content:center;color:var(--rn-ink);transition:border-color .18s,color .18s,transform .12s,box-shadow .18s}
.rn__iconbtn:hover{border-color:var(--rn-teal);color:var(--rn-teal-deep);transform:translateY(-1px);box-shadow:var(--rn-shadow-lift)}
.rn__iconbtn svg{width:17px;height:17px}
.rn__filterbtn{padding:0 16px;gap:9px;font-size:10.5px;font-weight:800;letter-spacing:.09em}
.rn__mesprefs{padding:0 16px;gap:9px;font-size:10.5px;font-weight:800;letter-spacing:.09em}
.rn__mesprefs.is-loading{opacity:.55;pointer-events:none}
.rn__mesprefs.is-loading svg{animation:rn-mp-spin 1.1s linear infinite}
@keyframes rn-mp-spin{to{transform:rotate(360deg)}}


@media (max-width:1023px){.rn__mesprefs span.rn__mpl{display:none}.rn__mesprefs{padding:0 13px}}
@media (prefers-reduced-motion:reduce){.rn__mesprefs.is-loading svg{animation:none}}
.rn__badge-n{min-width:19px;height:19px;border-radius:10px;background:var(--rn-amber);color:var(--rn-navy-1);font-size:11px;font-weight:800;display:grid;place-items:center;padding:0 5px}
@media (max-width:1023px){.rn__filterbtn span.rn__fbl{display:none}.rn__filterbtn{padding:0 13px}}

.rn__resultline{padding:14px 0 2px;color:var(--rn-ink-3);font-size:12.5px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;min-height:20px}
.rn__afilter{display:inline-flex;align-items:center;gap:7px;background:var(--rn-surface);border:1px solid var(--rn-line);border-radius:8px;padding:5px 8px 5px 12px;font-size:11.5px;font-weight:600;color:var(--rn-ink-2)}
.rn__afilter button{color:var(--rn-ink-3);display:grid;place-items:center}
.rn__afilter button:hover{color:var(--rn-ink)}
.rn__afilter button svg{width:12px;height:12px}
.rn__afilter .rn__dot{width:8px;height:8px;border-radius:50%}
.rn__sort{margin-left:auto;display:inline-flex;background:var(--rn-surface);border:1px solid var(--rn-line-strong);border-radius:var(--rn-r-ui);overflow:hidden;flex:0 0 auto}
.rn__sort button{padding:7px 13px;font-size:11px;font-weight:700;letter-spacing:.04em;color:var(--rn-ink-3);transition:background .15s,color .15s}
.rn__sort button.is-on{background:var(--rn-teal-deep);color:#fff}

.rn__seg{margin-top:clamp(42px,5.5vw,64px)}
.rn__seghead{display:flex;align-items:center;gap:14px;margin-bottom:18px}
.rn-root .rn__segtitle{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;text-transform:uppercase;font-size:clamp(17px,2.4vw,26px);letter-spacing:.01em;color:var(--rn-ink);display:inline-flex;align-items:center;gap:12px;line-height:1;white-space:nowrap}
.rn__segico{width:32px;height:32px;border-radius:9px 3px 9px 3px;background:var(--rn-navy-1);color:var(--rn-amber);display:grid;place-items:center;flex:0 0 auto}
.rn__segico svg{width:15px;height:15px}
.rn__segrule{flex:1;height:1px;background:var(--rn-line-strong);position:relative;top:2px}




@media (max-width:640px){
  .rn__kicker{white-space:nowrap;font-size:9.5px;letter-spacing:.06em;gap:8px}
  


  .rn-root .rn__segtitle{font-size:15px}
  .rn__seghead{flex-wrap:wrap;gap:6px 12px}
  .rn__seghead .rn__segrule{flex:1 0 30px}
  .rn__seghead .rn__segmore,.rn__seghead .rn__sort{margin-left:auto;margin-top:2px}
}
.rn__segmore{font-size:11px;font-weight:700;letter-spacing:.05em;color:var(--rn-teal-deep);display:inline-flex;align-items:center;gap:6px;white-space:nowrap;border:1.5px solid transparent;border-radius:var(--rn-r-ui);padding:7px 12px;transition:border-color .15s,background .15s}
.rn__segmore:hover{border-color:var(--rn-teal-deep);background:var(--rn-surface)}
.rn__segmore svg{width:13px;height:13px}
.rn__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px 24px;grid-auto-flow:dense}
@media (max-width:1023px){.rn__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.rn__grid{grid-template-columns:minmax(0,1fr);gap:16px}}





.rn__card--wide{grid-column:span 2}
.rn__card--wide .rn__thumb{flex:none;aspect-ratio:1.9;min-height:0}
.rn__card--wide .rn__body{justify-content:center;gap:11px;padding:24px 28px}
.rn-root .rn__card--wide .rn__cardtitle{font-size:22px;-webkit-line-clamp:3}
.rn__card--wide .rn__excerpt{-webkit-line-clamp:3}










.rn__magrow{grid-column:1/-1;display:flex;flex-direction:column;gap:24px}
.rn__magcol{display:flex;flex-direction:column;gap:24px;min-width:0}
.rn__card--mini .rn__body{gap:7px}



@media (min-width:641px){
  .rn__magrow{flex-direction:row;align-items:stretch}
  .rn__magrow--r{flex-direction:row-reverse}
  .rn__magrow>.rn__card--wide{flex:2 1 0;min-width:0}
  .rn__magcol{flex:1 1 0}
  .rn__magcol>.rn__card{flex:1 1 0;min-height:0}
  .rn__magcol>.rn__card>.rn__thumb{flex:1 1 auto;min-height:0}
  .rn__magcol .rn__card--mini .rn__excerpt,.rn__magcol .rn__card--mini .rn__classtags{display:none}
  .rn__card--mini .rn__body{padding:14px 16px 16px}
  .rn-root .rn__card--mini .rn__cardtitle{font-size:15.5px;-webkit-line-clamp:2}
}
@media (max-width:640px){.rn__card--wide{grid-column:auto}.rn__card--wide .rn__body{padding:18px 20px 20px}}

.rn__card--cover{position:relative;min-height:340px;justify-content:flex-end;color:#fff}
.rn__card--cover .rn__thumb{position:absolute;inset:0;aspect-ratio:auto}
.rn__card--cover .rn__thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(10,26,53,.97) 0%,rgba(10,26,53,.62) 42%,rgba(10,26,53,.14) 72%,rgba(10,26,53,.02) 90%);transition:opacity .3s ease}
.rn__card--cover:hover .rn__thumb::after{opacity:.28}
.rn__card--cover .rn__body{position:relative;z-index:2;padding:20px;gap:8px;flex:0}
.rn__card--cover .rn__meta{color:rgba(255,255,255,.75)}
.rn-root .rn__card--cover .rn__cardtitle{color:#fff;font-size:19px;text-shadow:0 2px 14px rgba(10,26,53,.65)}
.rn__card--cover .rn__meta{text-shadow:0 1px 8px rgba(10,26,53,.6)}
.rn-root .rn__card--cover .rn__cardtitle a{color:#fff}


.rn__card--cover .rn__cardhit{position:absolute;inset:0;z-index:1;cursor:pointer}
.rn__card--cover .rn__classtag{border-color:rgba(255,255,255,.3);color:rgba(255,255,255,.9)}

 
.rn__psl{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(250px,1fr);gap:20px;align-items:stretch}
.rn__psl-stage{position:relative;border-radius:18px 5px 18px 5px;overflow:hidden;min-height:400px;box-shadow:var(--rn-shadow-lift);background:linear-gradient(140deg,var(--rn-navy-2),var(--rn-navy-3))}
.rn__psl-slide{position:absolute;inset:0;opacity:0;transition:opacity .65s ease;pointer-events:none;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;z-index:1}
.rn__psl-slide.is-on{opacity:1;pointer-events:auto;z-index:2}
.rn__psl-slide img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.rn__psl-slide::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(10,26,53,.95) 0%,rgba(10,26,53,.5) 34%,rgba(10,26,53,.06) 64%,transparent 80%)}


.rn__psl-hit{position:absolute;inset:0;z-index:1;cursor:pointer}
.rn__psl-body{position:relative;z-index:2;padding:clamp(18px,3vw,30px);display:flex;flex-direction:column;gap:10px}
.rn__psl-body .rn__meta{color:rgba(255,255,255,.78)}
.rn-root .rn__psl-title{font-size:clamp(18px,2.2vw,27px);max-width:30ch;color:#fff;text-shadow:0 2px 12px rgba(10,26,53,.5);line-height:1.12}
.rn__psl-title a{color:#fff}
.rn__psl-title a::after{content:"";position:absolute;inset:0}
.rn__psl-slide:hover .rn__psl-title a{color:var(--rn-amber)}
.rn__psl-ex{color:rgba(255,255,255,.82);font-size:12.5px;max-width:60ch;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rn__psl-rail{display:flex;flex-direction:column;gap:12px;min-width:0}
.rn__psl-nav{flex:1;display:flex;gap:13px;align-items:center;text-align:left;background:var(--rn-surface);border:1px solid var(--rn-line);border-radius:13px 4px 11px 4px;padding:10px 14px 10px 10px;box-shadow:var(--rn-shadow);position:relative;overflow:hidden;transition:border-color .18s,background .18s,color .18s,transform .15s,box-shadow .18s;min-height:76px}
.rn__psl-nav:hover{transform:translateX(3px);box-shadow:var(--rn-shadow-lift);border-color:var(--rn-teal)}
.rn__psl-nav.is-on{border-color:var(--rn-navy-1);background:var(--rn-navy-1);color:#fff}
.rn__psl-nav.is-on .rn__psl-nmeta{color:rgba(255,255,255,.62)}
.rn__psl-nthumb{width:56px;height:56px;flex:0 0 56px;border-radius:9px 3px 9px 3px;overflow:hidden;position:relative;background:linear-gradient(140deg,var(--rn-navy-2),var(--rn-navy-3))}
.rn__psl-nthumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.rn__psl-nbody{min-width:0;display:flex;flex-direction:column;gap:3px}
.rn__psl-nt{font-size:12.5px;font-weight:700;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rn__psl-nmeta{font-size:10px;font-weight:600;color:var(--rn-ink-3)}
.rn__psl-prog{position:absolute;left:0;right:100%;bottom:0;height:3px;background:var(--rn-amber);border-radius:0 2px 2px 0}
.rn__psl-nav.is-on .rn__psl-prog{animation:rn-psl-prog var(--psl-dur,6s) linear forwards}
@keyframes rn-psl-prog{from{right:100%}to{right:0}}
.rn__psl.is-paused .rn__psl-prog{animation-play-state:paused}
.rn__psl-dots{grid-column:1/-1;display:none;justify-content:center;gap:8px;padding-top:2px}
.rn__psl-dots button{width:9px;height:9px;border-radius:50%;background:var(--rn-line-strong);transition:background .2s,transform .2s;padding:0}
.rn__psl-dots button.is-on{background:var(--rn-navy-1);transform:scale(1.3)}



@media (max-width:900px){.rn__psl{grid-template-columns:minmax(0,1fr)}.rn__psl-rail{display:none}.rn__psl-dots{display:flex}.rn__psl-stage{min-height:0;aspect-ratio:auto;height:clamp(280px,78vw,430px)}}




.rn__hero{border-radius:20px 5px 20px 5px;overflow:hidden;position:relative;box-shadow:var(--rn-shadow-lift);background:linear-gradient(118deg,var(--rn-navy-1) 0%,var(--rn-navy-2) 58%,var(--rn-navy-3) 100%);color:#fff;display:flex;align-items:stretch;height:clamp(380px,42vw,540px);margin-top:6px}
.rn__hero-img{position:absolute;inset:0}



.rn__hero-img img{width:100%;height:100%;object-fit:cover;object-position:50% 24%}
.rn__hero-img::after{content:"";position:absolute;inset:0;background:
  linear-gradient(to top,rgba(10,26,53,.94) 0%,rgba(10,26,53,.55) 32%,rgba(10,26,53,.08) 62%,transparent 78%),
  linear-gradient(100deg,rgba(10,26,53,.62) 0%,rgba(10,26,53,.22) 40%,transparent 68%)}
.rn__hero-img--blur img{filter:blur(26px) saturate(1.12) brightness(.68);transform:scale(1.16)}
.rn__hero--contain{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.92fr);grid-template-rows:minmax(0,1fr)}
.rn__hero--contain .rn__hero-main{max-width:none;grid-column:1;grid-row:1}
.rn__hero-media{position:relative;z-index:2;grid-column:2;grid-row:1;display:flex;align-items:center;justify-content:center;padding:clamp(16px,2.4vw,30px);min-width:0}
.rn__hero-media img{max-width:100%;max-height:100%;width:auto;height:auto;border-radius:12px 4px 12px 4px;box-shadow:0 18px 44px rgba(4,10,24,.5)}
.rn__hero-main{position:relative;padding:clamp(24px,4vw,48px);display:flex;flex-direction:column;justify-content:flex-end;gap:14px;flex:1;max-width:820px;z-index:2}
.rn__unebadge{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;background:var(--rn-amber);color:var(--rn-navy-1);font-size:10.5px;font-weight:800;letter-spacing:.14em;padding:7px 13px;border-radius:7px 2px 7px 2px;transform:skewX(-6deg)}
.rn__unebadge svg{width:13px;height:13px}
.rn__heroroute{display:flex;align-items:center;gap:12px;margin-top:16px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:9.5px;letter-spacing:.14em;color:rgba(255,255,255,.48);white-space:nowrap;overflow:hidden}
.rn__heroroute .rn__leg{flex:0 1 70px;height:1px;background:repeating-linear-gradient(to right,rgba(255,255,255,.45) 0 4px,transparent 4px 9px);position:relative}
.rn__heroroute .rn__leg::after{content:"";position:absolute;right:-1px;top:50%;transform:translateY(-50%);border:4px solid transparent;border-left:6px solid var(--rn-teal)}
.rn__heroroute b{font-weight:700;color:rgba(255,255,255,.62)}
.rn__hero-title{font-size:clamp(21px,2.5vw,32px);max-width:34ch;text-shadow:0 2px 14px rgba(10,26,53,.5)}
.rn__hero-ex{text-shadow:0 1px 10px rgba(10,26,53,.55)}
.rn__hero-title a{color:#fff}
.rn__hero-title a::after{content:"";position:absolute;inset:0}
.rn__hero-ex{color:rgba(255,255,255,.82);font-size:clamp(12.5px,1.5vw,14.5px);max-width:62ch;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rn__hero .rn__meta{color:rgba(255,255,255,.72)}
.rn__hero-waves{position:absolute;inset:auto 0 -12px 0;height:38%;opacity:.09;color:#fff;z-index:1;pointer-events:none}
@media (max-width:1023px){.rn__hero{height:clamp(340px,48vw,480px)}}
@media (max-width:640px){
  .rn__hero{height:auto;min-height:320px}
  .rn__hero-main{padding:22px;gap:11px}
  .rn__heroroute{display:none}
  .rn__hero--contain{display:flex;flex-direction:column;min-height:0}
  .rn__hero--contain .rn__hero-media{order:-1;max-height:300px;padding:14px 14px 0}
}

.rn__card{background:var(--rn-surface);border-radius:var(--rn-r-card);box-shadow:var(--rn-shadow);overflow:hidden;display:flex;flex-direction:column;transition:transform .22s,box-shadow .22s;position:relative;min-width:0}
.rn__card--pick{ }
.rn__card:hover{transform:translateY(-4px);box-shadow:var(--rn-shadow-lift)}
.rn__thumb{aspect-ratio:16/9;position:relative;overflow:hidden;background:linear-gradient(140deg,var(--rn-navy-2),var(--rn-navy-3))}
.rn__thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 30%;transition:transform .5s var(--rn-ease,cubic-bezier(.2,.6,.2,1))}
.rn__card:hover .rn__thumb img{transform:scale(1.045)}



.rn__thumb--tall{background:var(--rn-navy-3)}
.rn__thumb--tall .rn__thumb-bg{object-fit:cover;object-position:50% 50%;filter:blur(20px) saturate(1.15) brightness(.72);transform:scale(1.2)}
.rn__thumb--tall .rn__thumb-full{object-fit:contain;object-position:50% 50%}
.rn__card:hover .rn__thumb--tall .rn__thumb-bg{transform:scale(1.24)}
.rn__card:hover .rn__thumb--tall .rn__thumb-full{transform:scale(1.02)}



.rn__card{position:relative}




.rn__navloading{cursor:progress}
 
.rn__navloading .rn__thumb img,.rn__navloading .rn__hero-img img,.rn__navloading .rn__psl-slide img{filter:brightness(.78)}


.rn__navloading .rn__playdisc,.rn__navloading .rn__adisc,.rn__navloading .rn__fmtic,.rn__navloading .rn__newpatch{opacity:0;transition:opacity .18s}


.rn__navspin{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:24;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(10,26,53,.66);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);box-shadow:0 6px 16px rgba(7,16,34,.42);pointer-events:none;animation:rn-spin-in .18s ease both}


.rn__navspin svg{width:24px;height:24px;transform-origin:50% 50%;animation:rn-spin .9s linear .5s infinite}
.rn__navspin-trk{fill:none;stroke:rgba(255,255,255,.16);stroke-width:3.4}
.rn__navspin-arc{fill:none;stroke:url(#rn-spg);stroke-width:3.4;stroke-linecap:round;stroke-dasharray:94.2;stroke-dashoffset:94.2;transform:rotate(-90deg);transform-box:fill-box;transform-origin:50% 50%;animation:rn-arc-draw .55s cubic-bezier(.3,.75,.3,1) forwards}
@keyframes rn-arc-draw{to{stroke-dashoffset:24}}
@keyframes rn-spin{to{transform:rotate(360deg)}}
@keyframes rn-spin-in{from{opacity:0;transform:translate(-50%,-50%) scale(.6)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}
.rn__card .rn__cardtitle a::after{content:"";position:absolute;inset:0;z-index:1}
.rn__card .rn__classtags{position:relative;z-index:5}
.rn__hero .rn__hero-title a::after{content:"";position:absolute;inset:0;z-index:1}
.rn__thumb .rn__wavem{position:absolute;inset:auto 0 -6px 0;height:52%;opacity:.2;color:#fff;pointer-events:none}


.rn__fmtic{position:absolute;top:14px;right:14px;width:38px;height:38px;border-radius:12px 4px 12px 4px;background:var(--rn-navy-1);display:grid;place-items:center;color:var(--rn-amber);border:1px solid rgba(255,255,255,.16);box-shadow:0 4px 14px rgba(7,16,34,.42)}
.rn__fmtic svg{width:16px;height:16px}
 
.rn__card--photo .rn__fmtic{top:20px;right:20px}
.rn__fmtic--audio{width:auto;padding:0 12px 0 9px;gap:7px;display:inline-flex;align-items:center}
.rn__fmtic--audio i{font-style:normal;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#fff}
.rn__card--photo .rn__newpatch{top:18px;left:18px}
.rn__body{padding:18px 20px 20px;display:flex;flex-direction:column;gap:9px;flex:1}
.rn__meta{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:600;letter-spacing:.03em;color:var(--rn-ink-3);flex-wrap:wrap}
.rn__meta .rn__clock{display:inline-flex;align-items:center;gap:4px}
.rn__dejalu{display:inline-flex;align-items:center;gap:4px;font-size:9.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--rn-teal-deep);opacity:.85}
.rn__dejalu svg{width:11px;height:11px}
.rn__card--accent .rn__dejalu,.rn__card--video .rn__dejalu,.rn__card--cover .rn__dejalu,.rn__card--audio .rn__dejalu{color:rgba(255,255,255,.66)}
 
.rn__hero .rn__dejalu,.rn__psl-slide .rn__dejalu{color:rgba(255,255,255,.92);opacity:1;text-shadow:0 1px 8px rgba(10,26,53,.75)}
.rn__hero .rn__dejalu svg,.rn__psl-slide .rn__dejalu svg{filter:drop-shadow(0 1px 4px rgba(10,26,53,.75))}
 
.rn__luchip{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;background:rgba(10,26,53,.74);color:#fff;display:grid;place-items:center;z-index:2;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 2px 8px rgba(10,26,53,.25);pointer-events:none}
.rn__luchip svg{width:16px;height:16px}
.rn__newpatch~.rn__luchip{top:46px}
 
.rn__seghead .rn__lubtn{height:38px;margin-right:10px}


.rn__lubtn{color:var(--rn-teal-deep);width:auto;padding:0 15px;display:inline-flex;align-items:center;justify-content:center}
.rn__lubtn .lbl{max-width:0;overflow:hidden;white-space:nowrap;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;transition:max-width .25s ease,margin .25s ease;margin-left:0}
.rn__lubtn:hover .lbl,.rn__lubtn:focus-visible .lbl,.rn__lubtn.is-on .lbl{max-width:250px;margin-left:9px}
.rn__lubtn.is-on{background:var(--rn-navy-1);border-color:var(--rn-navy-1);color:#fff}
 
.rn__sheetlu{width:100%;display:flex;align-items:center;gap:12px;padding:14px 4px;margin:2px 0 10px;background:none;border:0;border-bottom:1px solid rgba(10,26,53,.1);cursor:pointer;font-family:inherit;font-size:13.5px;font-weight:700;color:#16233A;text-align:left}
.rn__sheetlu svg{width:19px;height:19px;color:var(--rn-teal-deep);flex:0 0 auto}
.rn__sheetlu .txt{flex:1}
.rn__switch{width:40px;height:23px;border-radius:999px;background:#C9D3DF;position:relative;transition:background .18s;flex:0 0 auto}
.rn__switch i{position:absolute;top:2.5px;left:2.5px;width:18px;height:18px;border-radius:50%;background:#fff;transition:left .18s;box-shadow:0 1px 3px rgba(10,26,53,.25)}
.rn__sheetlu.is-on .rn__switch{background:var(--rn-teal-deep)}
.rn__sheetlu.is-on .rn__switch i{left:19.5px}


@media (max-width:1023px){.rn__lubtn{padding:0 13px}.rn__lubtn .lbl{display:none}
.rn__seghead .rn__lubtn{display:none}
.rn__seghead .rn__lubtn.is-on{display:inline-flex}}
.rn__meta .rn__clock svg{width:11px;height:11px}
.rn__catbadge{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:6px 2px 6px 2px;font-size:9.5px;font-weight:800;letter-spacing:.1em;border:0;font-family:inherit;cursor:pointer;position:relative;z-index:2;transition:transform .12s,box-shadow .12s}
.rn__catbadge:hover{transform:translateY(-1px);box-shadow:0 2px 8px rgba(10,26,53,.2)}
.rn__catbadge svg{width:10px;height:10px}
.rn__newflag{display:inline-flex;align-items:center;gap:5px;font-size:9px;font-weight:800;letter-spacing:.12em;color:var(--rn-navy-1);background:var(--rn-amber);padding:3px 9px;border-radius:6px 2px 6px 2px}
.rn__newflag::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--rn-navy-1)}
.rn__newpatch{position:absolute;top:10px;left:10px;z-index:3;display:inline-flex;align-items:center;gap:6px;background:var(--rn-amber);color:var(--rn-navy-1);font-size:9px;font-weight:800;letter-spacing:.12em;padding:5px 11px;border-radius:7px 2px 7px 2px;transform:skewX(-6deg);box-shadow:0 3px 10px rgba(10,26,53,.32)}
.rn__newpatch::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--rn-navy-1)}
.rn__liveflag{display:inline-flex;align-items:center;gap:6px;font-size:9.5px;font-weight:800;letter-spacing:.12em;color:var(--rn-live)}
.rn__liveflag::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--rn-live);animation:rn-pulse 1.2s ease-in-out infinite}
@keyframes rn-pulse{0%,100%{opacity:.35}50%{opacity:1}}
.rn-root .rn__cardtitle{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;text-transform:uppercase;font-size:16.5px;line-height:1.16;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;padding-left:.09em;margin-left:-.09em;padding-right:.06em}
.rn__card h3 a{transition:color .15s}
.rn__card:hover h3 a{color:var(--rn-teal-deep)}


.rn-root .rn__card--cover:hover h3 a,.rn-root .rn__card--video:hover h3 a,.rn-root .rn__card--accent:hover h3 a{color:var(--rn-amber)}
.rn__card h3 a::after{content:"";position:absolute;inset:0}
.rn__excerpt{color:var(--rn-ink-2);font-size:12.5px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}


.rn__classtags{display:flex;gap:6px;margin-top:auto;padding-top:8px;flex-wrap:wrap;position:relative;z-index:2}
.rn__classtag{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;letter-spacing:.03em;color:var(--rn-ink-2);border:1px solid var(--rn-line);border-radius:7px 2px 7px 2px;padding:5px 10px;background:var(--rn-surface);cursor:pointer;transition:border-color .15s,background .15s,color .15s,transform .12s}
.rn__classtag:hover{border-color:var(--cc,var(--rn-teal));color:var(--rn-ink);transform:translateY(-1px)}
.rn__classtag.is-on{background:var(--rn-navy-1);border-color:var(--rn-navy-1);color:#fff}
.rn__classtag--more{color:var(--rn-ink-3);border-style:dashed;padding:5px 8px}
.rn__classtag--more:hover{border-color:var(--rn-teal);color:var(--rn-ink)}
.rn__classtag-extra{display:contents}
.rn__classtag-extra[hidden]{display:none}
.rn__classtag--more[hidden]{display:none}
.rn__classtag img{width:15px;height:15px;display:block;border-radius:3px 1px 3px 1px;flex:0 0 auto}
.rn__card--accent .rn__classtag,.rn__card--cover .rn__classtag{background:transparent}

.rn__card--accent{background:linear-gradient(155deg,#0B7078 0%,#02555C 62%,#04424A 100%);color:#fff}
.rn__card--accent .rn__bigquote{position:absolute;top:14px;right:16px;width:74px;height:74px;color:#fff;opacity:.10;pointer-events:none}
.rn__card--accent .rn__waveb{position:absolute;inset:auto 0 -6px 0;height:34%;opacity:.12;color:#fff;pointer-events:none}
.rn__card--accent .rn__body{position:relative;justify-content:space-between;gap:16px}
.rn__card--accent .rn__meta{color:rgba(255,255,255,.66)}
.rn-root .rn__card--accent .rn__cardtitle{font-size:19px;-webkit-line-clamp:4}
.rn__card--accent:hover h3 a{color:var(--rn-teal)}
.rn__card--accent .rn__excerpt{color:rgba(255,255,255,.8);font-style:italic}
.rn__card--accent .rn__classtag{border-color:rgba(255,255,255,.28);color:rgba(255,255,255,.88)}
.rn__card--accent:hover{box-shadow:0 14px 36px rgba(2,85,92,.4)}
.rn__itweyebrow{display:inline-flex;align-items:center;gap:7px;color:var(--rn-teal);font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.rn__itweyebrow svg{width:12px;height:12px}

.rn__card--video{background:linear-gradient(160deg,#101F3C 0%,#0A1A35 62%,#0C2440 100%);color:#fff}
.rn__card--video .rn__thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(10,26,53,.5),transparent 55%);transition:opacity .3s ease}
.rn__card--video:hover .rn__thumb::after{opacity:.2}
.rn__playdisc{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:50%;background:var(--rn-amber);color:var(--rn-navy-1);display:grid;place-items:center;box-shadow:0 6px 22px rgba(10,26,53,.5);transition:transform .2s;z-index:2;pointer-events:none}
.rn__playdisc svg{width:20px;height:20px;margin-left:2px}
.rn__card--video:hover .rn__playdisc{transform:translate(-50%,-50%) scale(1.12)}
.rn__card--video .rn__meta{color:rgba(255,255,255,.65)}
.rn-root .rn__card--video .rn__cardtitle{color:#fff}
.rn__card--video:hover h3 a{color:var(--rn-amber)}
.rn__card--video .rn__excerpt{color:rgba(255,255,255,.75)}
.rn__card--video .rn__classtag{border-color:rgba(255,255,255,.28);color:rgba(255,255,255,.88);background:transparent}
.rn__card--video:hover{box-shadow:0 14px 36px rgba(10,26,53,.45)}

.rn__card--photo .rn__thumb::before{content:"";position:absolute;inset:10px;border:1px solid rgba(255,255,255,.42);border-radius:12px 3px 10px 3px;z-index:3;pointer-events:none}

.rn__card--audio{flex-direction:row;align-items:stretch;background:linear-gradient(150deg,#0E3A54 0%,#0E5B84 120%);color:#fff}
.rn__card--audio .rn__thumb{flex:0 0 126px;aspect-ratio:auto;min-height:126px}
.rn__adisc{position:absolute;left:10px;bottom:10px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.92);color:#0E3A54;display:grid;place-items:center;z-index:2}
.rn__adisc svg{width:14px;height:14px;margin-left:1px}
.rn__card--audio .rn__body{padding:15px 18px;gap:7px}
.rn__card--audio .rn__meta{color:rgba(255,255,255,.68)}
.rn-root .rn__card--audio .rn__cardtitle{color:#fff;font-size:15px;-webkit-line-clamp:2}
.rn__card--audio:hover h3 a{color:var(--rn-amber)}
.rn__eq{display:flex;align-items:flex-end;gap:3px;height:16px;margin-top:auto;padding-top:6px}
.rn__eq i{width:3px;border-radius:2px;background:rgba(255,255,255,.45);transition:background .2s}
.rn__card--audio:hover .rn__eq i{background:var(--rn-amber)}

.rn__toplist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px clamp(20px,3vw,40px)}
@media (max-width:760px){.rn__toplist{grid-template-columns:minmax(0,1fr)}}
.rn__topitem{display:flex;align-items:center;gap:16px;padding:13px 8px;border-bottom:1px solid var(--rn-line);position:relative;transition:padding .15s}
.rn__topitem:hover{padding-left:14px}
.rn-root .rn__rank{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;font-size:40px;line-height:1;color:transparent;-webkit-text-stroke:1.6px var(--rn-teal);width:44px;flex:0 0 44px;text-align:center}
.rn__topitem:hover .rn__rank{-webkit-text-stroke-color:var(--rn-teal-deep)}
.rn__topitem h3{font-size:14px;font-weight:700;line-height:1.28;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rn__topitem h3 a::after{content:"";position:absolute;inset:0}
.rn__topitem:hover h3 a{color:var(--rn-teal-deep)}
.rn__tmeta{display:flex;align-items:center;gap:8px;font-size:10.5px;font-weight:600;color:var(--rn-ink-3);margin-top:4px}
.rn__views{display:inline-flex;align-items:center;gap:4px;color:var(--rn-teal-deep)}
.rn__views svg{width:11px;height:11px}
.rn__tbody{min-width:0;flex:1}

.rn__pbanner{position:relative;border-radius:14px 4px 14px 4px;margin:26px 0 10px;display:flex;align-items:center;gap:18px;padding:16px 20px;color:var(--rn-ink);background:var(--rn-surface);border:1px solid var(--rn-line);border-left:4px solid var(--rn-gold);box-shadow:var(--rn-shadow)}
.rn__plogo{width:56px;height:56px;flex:0 0 56px;border-radius:10px 3px 10px 3px;background:var(--rn-navy-1);color:#fff;display:grid;place-items:center;font-weight:800;font-size:9px;letter-spacing:.05em;text-align:center;line-height:1.2;padding:6px;overflow:hidden}
.rn__plogo img{width:100%;height:100%;object-fit:contain}
.rn__pbody{flex:1;min-width:0}
.rn__plabel{display:inline-flex;align-items:center;gap:5px;font-size:8.5px;font-weight:800;letter-spacing:.16em;color:var(--rn-gold);background:var(--rn-gold-bg);padding:3px 8px;border-radius:5px 2px 5px 2px;margin-bottom:6px}
.rn__plabel svg{width:9px;height:9px}
.rn__pbody b{font-size:14.5px;font-weight:800;display:block;color:var(--rn-ink)}
.rn__psub{font-size:12px;color:var(--rn-ink-2);display:block;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rn__pcta{flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;background:var(--rn-navy-1);color:#fff;border-radius:var(--rn-r-ui);padding:10px 16px;font-size:12px;font-weight:700;transition:background .15s,transform .12s}
.rn__pcta:hover{background:var(--rn-navy-2);transform:translateY(-1px)}
.rn__pcta svg{width:14px;height:14px}
.rn__pclose{flex:0 0 auto;align-self:flex-start;width:26px;height:26px;border-radius:8px;display:grid;place-items:center;color:var(--rn-ink-3);margin:-4px -8px 0 0}
.rn__pclose:hover{background:var(--rn-bg);color:var(--rn-ink)}
.rn__pclose svg{width:13px;height:13px}
@media (max-width:640px){.rn__pbanner{flex-wrap:wrap;gap:12px}.rn__psub{white-space:normal}.rn__pcta{width:100%;justify-content:center}}
.rn__card--partner{grid-column:1/-1;background:var(--rn-surface);border:1.5px solid var(--rn-gold-bg);display:grid;grid-template-columns:1.15fr 1fr;min-height:220px}
@media (max-width:820px){.rn__card--partner{grid-template-columns:minmax(0,1fr)}}
.rn__pthumb{position:relative;overflow:hidden;min-height:180px;background:linear-gradient(140deg,var(--rn-navy-2),var(--rn-navy-3))}
.rn__pthumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.rn__pcontent{padding:clamp(20px,3vw,34px);display:flex;flex-direction:column;justify-content:center;gap:11px}
.rn__plabel2{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;background:var(--rn-gold-bg);color:var(--rn-gold);font-size:9.5px;font-weight:800;letter-spacing:.12em;padding:5px 10px;border-radius:6px 2px 6px 2px}
.rn__plabel2 svg{width:11px;height:11px}
.rn-root .rn__ptitle{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;text-transform:uppercase;font-size:clamp(19px,2.3vw,25px);line-height:1.12;color:var(--rn-ink)}
.rn__pdesc{color:var(--rn-ink-2);font-size:13.5px;line-height:1.5}
.rn__pcta2{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;margin-top:4px;background:var(--rn-ink);color:#fff;border-radius:var(--rn-r-ui);padding:11px 20px;font-size:12.5px;font-weight:700;transition:background .15s}
.rn__pcta2:hover{background:var(--rn-navy-2)}
.rn__pcta2 svg{width:14px;height:14px}
.rn__pann{font-size:11px;color:var(--rn-ink-3);font-weight:600}

.rn__empty{grid-column:1/-1;text-align:center;padding:74px 20px;color:var(--rn-ink-2)}
.rn-root .rn__empty-title{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;text-transform:uppercase;font-size:27px;color:var(--rn-ink);margin:16px 0 6px}
.rn__empty svg{width:46px;height:46px;color:var(--rn-teal-deep);margin-inline:auto}
 
.rn__loadblock{grid-column:1/-1;text-align:center;padding:64px 20px;display:flex;flex-direction:column;align-items:center;gap:4px}
.rn__loadring{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;background:var(--rn-navy-1);box-shadow:0 8px 22px rgba(7,16,34,.18);margin-bottom:10px}
.rn__loadring svg{width:30px;height:30px;transform-origin:50% 50%;animation:rn-spin .9s linear .5s infinite}
.rn__loadring-arc{fill:none;stroke:url(#rn-lspg);stroke-width:3.4;stroke-linecap:round;stroke-dasharray:94.2;stroke-dashoffset:94.2;transform:rotate(-90deg);transform-box:fill-box;transform-origin:50% 50%;animation:rn-arc-draw .55s cubic-bezier(.3,.75,.3,1) forwards}
.rn-root .rn__loadblock-title{font-family:var(--rn-font-display) !important;font-style:italic;font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em;color:var(--rn-ink)}
.rn__loadblock p{font-size:13.5px;color:var(--rn-ink-3);max-width:38ch;margin:2px auto 0}
.rn__more{display:flex;align-items:center;gap:10px;margin:38px auto 0;height:48px;padding:0 32px;border-radius:var(--rn-r-ui);border:2px solid var(--rn-teal-deep);color:var(--rn-teal-deep);font-size:13px;font-weight:700;letter-spacing:.04em;transition:all .18s;background:transparent}
.rn__more svg{width:15px;height:15px}
.rn__more:hover{background:var(--rn-teal-deep);color:#fff}
.rn__more[disabled]{opacity:.5;pointer-events:none}
 
.rn__endcap{display:flex;flex-direction:column;align-items:center;gap:16px;margin:44px auto 0}
.rn__endcap-txt{display:inline-flex;align-items:center;gap:9px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--rn-ink-3)}
.rn__endcap-txt::before,.rn__endcap-txt::after{content:"";width:34px;height:1px;background:var(--rn-line-strong)}
.rn__endcap-txt svg{width:15px;height:15px;color:var(--rn-teal-deep)}
.rn__more--top{margin-top:0}
.rn__more--top svg{transform:rotate(180deg)}
.rn__resetbtn{margin-top:16px;height:44px;padding:0 26px;border-radius:var(--rn-r-ui);background:var(--rn-teal-deep);color:#fff;font-size:12.5px;font-weight:700}




.rn__fab{position:fixed;left:50%;transform:translateX(-50%);bottom:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:70;height:41px;padding:0 17px;border:none;cursor:pointer;font-family:var(--rn-font-body);border-radius:21px 7px 21px 7px;background:var(--rn-amber);color:var(--rn-navy-1);font-size:11.5px;font-weight:800;display:none;align-items:center;gap:8px;box-shadow:0 5px 16px rgba(10,26,53,.24);transition:transform .3s,opacity .3s}
.rn__fab svg{width:14px;height:14px}
.rn__fab .rn__badge-n{background:var(--rn-navy-1);color:var(--rn-amber)}
.rn__fab.is-hidden{transform:translateX(-50%) translateY(92px);opacity:0;pointer-events:none}
@media (max-width:1023px){.rn__fab{display:inline-flex}}

.rn-root dialog{border:none;padding:0;background:transparent;max-width:none;max-height:none;color:var(--rn-ink)}



.rn-root dialog:not([open]){display:none}
.rn-root dialog::backdrop{background:linear-gradient(160deg,rgba(7,16,34,.55),rgba(11,110,107,.30));-webkit-backdrop-filter:blur(7px) saturate(1.08);backdrop-filter:blur(7px) saturate(1.08)}


.rn-root dialog.rn__searchdlg{position:fixed;inset:0;margin:auto;margin-top:max(7vh,22px);width:min(900px,calc(100vw - 36px));height:fit-content;max-height:min(80vh,760px)}



.rn__search-panel{width:100%;background:var(--rn-bg);border-radius:20px 6px 20px 6px;box-shadow:0 34px 90px rgba(7,16,34,.4),0 8px 28px rgba(7,16,34,.2);overflow:hidden;font-family:var(--rn-font-body);display:flex;flex-direction:column;max-height:inherit}
dialog[open] .rn__search-panel{animation:rn-dlg-in .3s cubic-bezier(.22,1,.36,1) both}
@keyframes rn-dlg-in{from{opacity:0;transform:translateY(-16px) scale(.985)}to{opacity:1;transform:none}}
.rn__search-head{flex:0 0 auto;position:relative;background:linear-gradient(118deg,var(--rn-navy-1) 0%,var(--rn-navy-2) 62%,var(--rn-navy-3) 100%);padding:18px 22px 20px}
.rn__search-head::after{content:"";position:absolute;inset:auto 0 0 0;height:3px;background:linear-gradient(90deg,var(--rn-amber),#72b9f1,var(--rn-teal))}


.rn__search-kick{display:flex;align-items:center;gap:10px;margin:0 0 14px;min-height:38px;padding-right:56px;color:#fff;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.rn__search-kick img{width:22px;height:22px;display:block}
.rn__sk-scope{margin-left:6px;display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:8px 3px 8px 3px;background:var(--rn-amber);color:var(--rn-navy-1);font-size:9.5px;letter-spacing:.08em}
.rn__search-x{position:absolute;top:14px;right:16px;width:38px;height:38px;border-radius:12px 4px 12px 4px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);color:#fff;display:grid;place-items:center;transition:background .15s,border-color .15s,color .15s,transform .18s}
.rn__search-x:hover{background:var(--rn-amber);border-color:var(--rn-amber);color:var(--rn-navy-1);transform:rotate(90deg)}
.rn__search-x svg{width:15px;height:15px}


.rn__search-row{display:flex;align-items:center;gap:13px;height:58px;border-radius:14px 5px 14px 5px;background:#fff;padding:0 20px;box-shadow:0 10px 30px rgba(7,16,34,.35);transition:box-shadow .18s}
.rn__search-row:focus-within{box-shadow:0 10px 30px rgba(7,16,34,.35),0 0 0 4px rgba(252,241,80,.35)}
.rn__search-row>svg{width:20px;height:20px;color:var(--rn-teal-deep);flex:0 0 auto}
.rn__search-row input{flex:1;border:none!important;outline:none!important;box-shadow:none!important;background:transparent!important;-webkit-appearance:none;appearance:none;font:inherit;font-size:16.5px;font-weight:500;color:var(--rn-ink);min-width:0;height:100%;padding:0!important;margin:0!important}
.rn__search-row input::placeholder{color:var(--rn-ink-3);font-weight:400}
.rn__search-body{overflow-y:auto;overscroll-behavior:contain;padding:6px 22px 22px;scrollbar-width:thin;scrollbar-color:var(--rn-teal) transparent}
.rn__search-body::-webkit-scrollbar{width:9px}
.rn__search-body::-webkit-scrollbar-track{background:transparent}
.rn__search-body::-webkit-scrollbar-thumb{background:linear-gradient(180deg,var(--rn-amber),var(--rn-teal));border-radius:99px;border:3px solid var(--rn-bg)}
.rn__search-body::-webkit-scrollbar-thumb:hover{border-width:2px}
.rn__sglabel{font-size:10.5px;font-weight:800;letter-spacing:.15em;color:var(--rn-ink-3);padding:22px 2px 10px;display:flex;align-items:center;gap:9px}
.rn__sglabel .rn__sgtile{width:22px;height:22px;border-radius:7px 2px 7px 2px;background:var(--rn-navy-1);color:var(--rn-amber);display:grid;place-items:center}
.rn__sglabel svg{width:11px;height:11px}
.rn__sglabel::after{content:"";flex:1;height:1px;background:var(--rn-line)}
.rn__sgitem{display:flex;align-items:center;gap:14px;width:100%;text-align:left;padding:11px 14px;margin:0 0 8px;border-radius:12px 4px 12px 4px;background:var(--rn-surface);border:1px solid var(--rn-line);box-shadow:0 1px 2px rgba(10,26,53,.04);font-size:14px;font-weight:600;transition:border-color .14s,box-shadow .14s,transform .14s;animation:rn-sg-in .22s ease both}
@keyframes rn-sg-in{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}
.rn__sgitem:hover{border-color:var(--rn-teal);box-shadow:var(--rn-shadow);transform:translateY(-1px)}
.rn__sgitem:focus-visible{border-color:var(--rn-teal);box-shadow:var(--rn-shadow);transform:translateY(-1px)}
.rn__sgitem::after{content:"";width:8px;height:8px;border-top:2px solid var(--rn-teal-deep);border-right:2px solid var(--rn-teal-deep);transform:rotate(45deg);opacity:0;transition:opacity .13s;flex:0 0 auto;margin-left:4px}
.rn__sgitem:hover::after{opacity:1}
.rn__sgitem:focus-visible::after{opacity:1}
.rn__sgtxt{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
.rn__sgtitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.35}
.rn__sgmeta{font-size:11px;font-weight:600;letter-spacing:.03em;color:var(--rn-ink-3);display:flex;align-items:center;gap:6px;white-space:nowrap;overflow:hidden}
.rn__sgdot{width:8px;height:8px;border-radius:50%;flex:0 0 auto;display:inline-block}
.rn__sgava{width:52px;height:52px;border-radius:10px 3px 10px 3px;display:grid;place-items:center;font-size:14px;font-weight:800;color:var(--rn-navy-1);flex:0 0 auto;overflow:hidden;position:relative;box-shadow:inset 0 0 0 1px rgba(10,26,53,.06)}
.rn__sgava img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.rn__sgava svg{width:20px;height:20px}
.rn__sgitem--sk .rn__sgava{border-radius:50%;box-shadow:0 0 0 2px var(--rn-surface),0 0 0 3.5px var(--rn-line)}
.rn__sgitem--sk:hover .rn__sgava{box-shadow:0 0 0 2px var(--rn-surface),0 0 0 3.5px var(--rn-teal)}
.rn__sggrid{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}
@media (max-width:680px){.rn__sggrid{grid-template-columns:1fr}}
.rn__sgchips{display:flex;flex-wrap:wrap;gap:10px;padding:6px 2px 10px}
.rn__sgtopic{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 15px;border-radius:11px 4px 11px 4px;border:1px solid var(--rn-line);background:var(--rn-surface);font-size:12.5px;font-weight:600;color:var(--rn-ink-2);box-shadow:0 1px 2px rgba(10,26,53,.05);transition:border-color .15s,color .15s,background .15s,transform .12s,box-shadow .15s}
.rn__sgtopic b{font-size:10px;font-weight:800;min-width:18px;height:18px;border-radius:9px;background:rgba(10,26,53,.07);color:var(--rn-ink-2);display:grid;place-items:center;padding:0 5px;transition:background .15s,color .15s}
.rn__sgtopic:hover{border-color:var(--rn-teal-deep);color:var(--rn-teal-deep);background:#EAF6F4;transform:translateY(-1px);box-shadow:var(--rn-shadow)}
.rn__sgtopic:hover b{background:var(--rn-teal-deep);color:#fff}
.rn__sgempty{padding:44px 16px;text-align:center;color:var(--rn-ink-3);font-size:13.5px}
.rn__search-foot{flex:0 0 auto;display:flex;align-items:center;gap:18px;padding:12px 22px;border-top:1px solid var(--rn-line);background:var(--rn-surface);color:var(--rn-ink-3);font-size:11px;font-weight:600}
.rn__search-foot kbd{font:700 10px/1 var(--rn-font-body);border:1px solid var(--rn-line);border-bottom-width:2px;border-radius:6px;background:var(--rn-bg);padding:4px 7px;color:var(--rn-ink-2);margin-right:6px}
 
.rn__sgscope{display:flex;align-items:center;gap:10px;margin:18px 6px 0;padding:13px 16px;border-radius:13px 5px 13px 5px;background:linear-gradient(118deg,var(--rn-navy-1),var(--rn-navy-2));color:#fff;font-size:12.5px;font-weight:700;letter-spacing:.03em}
.rn__sgscope svg{width:15px;height:15px;color:var(--rn-amber);flex:0 0 auto}


@media (max-width:640px){
.rn-root dialog.rn__searchdlg{width:100vw;height:100vh;height:100dvh;max-height:none;margin:0}
.rn__search-panel{width:100vw;height:100vh;height:100dvh;border-radius:0}
dialog[open] .rn__search-panel{animation:rn-dlg-up .3s cubic-bezier(.22,1,.36,1) both}
@keyframes rn-dlg-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
.rn__search-head{padding:14px 14px 16px}
.rn__search-row{height:54px;padding:0 16px}
.rn__search-row input{font-size:16px}
.rn__search-body{max-height:none;flex:1;padding:4px 14px 22px;padding:4px 14px calc(22px + env(safe-area-inset-bottom))}
.rn__sgitem{min-height:64px}
.rn__sgava{width:48px;height:48px}
.rn__sgtopic{height:44px}
.rn__search-foot{display:none}
}
@media (prefers-reduced-motion:reduce){dialog[open] .rn__search-panel,.rn__sgitem,.rn__clearbtn{animation:none}.rn__search-x:hover{transform:none}}

.rn__sheet{background:var(--rn-surface);display:flex;flex-direction:column;box-shadow:var(--rn-shadow-lift);font-family:var(--rn-font-body)}
@media (max-width:1023px){.rn-root dialog.rn__sheetdlg{width:100vw;position:fixed;inset:auto 0 0 0;margin:0}.rn__sheet{width:100%;max-height:88vh;max-height:88dvh;border-radius:22px 22px 0 0}.rn__grip{width:44px;height:4px;border-radius:2px;background:var(--rn-line-strong);margin:6px auto 0;padding:10px 60px;background-clip:content-box;box-sizing:content-box;cursor:grab;touch-action:none}}
@media (min-width:1024px){.rn-root dialog.rn__sheetdlg{position:fixed;inset:0 0 0 auto;margin:0;height:100vh;height:100dvh}.rn__sheet{width:410px;height:100vh;height:100dvh}.rn__grip{display:none}}
.rn__sheethead{display:flex;align-items:center;justify-content:space-between;padding:18px 24px 12px}
.rn__sheethead h2{font-size:17px;font-weight:800;display:flex;align-items:center;gap:10px}
.rn__sheethead h2 svg{width:17px;height:17px;color:var(--rn-teal-deep)}
.rn__sheetx{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;color:var(--rn-ink-2)}
.rn__sheetx:hover{background:var(--rn-bg)}
.rn__sheetx svg{width:17px;height:17px}
.rn__sheetbody{flex:1;overflow-y:auto;padding:4px 24px 20px;overscroll-behavior:contain}
.rn__facc{border-bottom:1px solid var(--rn-line)}
.rn__facc summary{list-style:none;display:flex;align-items:center;gap:10px;padding:17px 0;cursor:pointer;font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--rn-ink)}
.rn__facc summary::-webkit-details-marker{display:none}
.rn__facc summary .rn__fic{width:15px;height:15px;color:var(--rn-teal-deep)}
.rn__facc summary .rn__chev{margin-left:auto;transition:transform .2s;color:var(--rn-ink-3)}
.rn__facc summary .rn__chev svg{width:15px;height:15px}
.rn__facc[open] summary .rn__chev{transform:rotate(180deg)}
.rn__faccin{padding:2px 0 18px;display:flex;flex-wrap:wrap;gap:8px}
.rn__fsub{flex-basis:100%;font-size:10px;font-weight:800;letter-spacing:.12em;color:var(--rn-ink-3);margin:9px 0 1px}
.rn__fsub:first-child{margin-top:0}
.rn__fchip{height:36px;padding:0 14px;border-radius:var(--rn-r-ui);border:1.5px solid var(--rn-line-strong);font-size:12px;font-weight:600;color:var(--rn-ink-2);display:inline-flex;align-items:center;gap:7px;background:var(--rn-surface);transition:all .15s}
.rn__fchip:hover{border-color:var(--rn-teal-deep);transform:translateY(-1px)}
.rn__fchip.is-on{background:var(--rn-navy-1);border-color:var(--rn-navy-1);color:#fff}
.rn__fchip i{width:8px;height:8px;border-radius:50%;display:inline-block}
.rn__fchip.is-on i{outline:2px solid rgba(255,255,255,.55)}
.rn__fchip--class{height:48px;padding:0 16px 0 10px;font-weight:700}
.rn__fchip--class img{width:28px;height:28px;flex:0 0 auto}
.rn__fchip--class.is-on img{filter:drop-shadow(0 0 3px rgba(255,255,255,.6))}
 
.rn__faccin--ed{gap:10px}
.rn__fchip--ed{font-weight:700;letter-spacing:.02em}
.rn__fchip--ed svg{width:13px;height:13px;color:var(--rn-teal-deep)}
.rn__fchip--ed.is-on{background:var(--rn-navy-1);border-color:var(--rn-navy-1);color:var(--rn-amber)}
.rn__fchip--ed.is-on svg{color:var(--rn-amber)}
.rn__sheetfoot{display:flex;align-items:center;gap:16px;padding:15px 24px 17px;padding:15px 24px calc(17px + env(safe-area-inset-bottom));border-top:1px solid var(--rn-line);background:var(--rn-surface)}
.rn__ghost{color:var(--rn-ink-2);font-size:13px;font-weight:600;text-decoration:underline;text-underline-offset:3px}
.rn__ghost:hover{color:var(--rn-ink)}
.rn__apply{flex:1;height:50px;border-radius:var(--rn-r-ui);background:var(--rn-amber);color:var(--rn-navy-1);font-size:14px;font-weight:800;transition:background .18s,transform .12s;text-align:center}
.rn__apply:hover{background:#FFE500;transform:translateY(-1px)}
.rn__apply.is-counting::after{content:'…';display:inline-block;margin-left:3px;animation:rnCountPulse .8s ease-in-out infinite}
@keyframes rnCountPulse{0%,100%{opacity:.15}50%{opacity:1}}

.rn__sk{padding-bottom:46px}
.rn__skbox{position:relative;overflow:hidden;background:rgba(10,26,53,.06);border-radius:12px}
.rn__skbox::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 20%,rgba(255,255,255,.65) 50%,transparent 80%);background-size:200% 100%;animation:rn-shimmer 1.6s linear infinite}
@keyframes rn-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.rn__sk-kicker{width:280px;height:14px;margin-bottom:14px}
.rn__sk-h1{width:min(420px,70%);height:52px;margin-bottom:14px}
.rn__sk-intro{width:min(540px,90%);height:14px}
.rn__sk-bar{display:flex;gap:10px;margin-top:26px}
.rn__sk-chip{width:110px;height:40px;border-radius:9px;flex:0 0 auto}
.rn__sk-hero{height:400px;border-radius:20px;margin-top:24px}
.rn__sk-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:34px}
.rn__sk-card{height:300px;border-radius:16px}
@media (max-width:1023px){.rn__sk-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rn__sk-hero{height:340px}}
@media (max-width:640px){.rn__sk-grid{grid-template-columns:minmax(0,1fr)}.rn__sk-hero{height:260px}.rn__sk-card{height:240px}}

.rn__main{padding-bottom:46px}
.rn__grid.is-refreshing{opacity:.55;transition:opacity .2s}

@media (prefers-reduced-motion:reduce){
  .rn-root *,.rn-root *::before,.rn-root *::after{animation-duration:.001ms !important;transition-duration:.001ms !important}
  .rn__skbox::after{animation:none}
  .rn__liveflag::before{animation:none}
}
`;

  const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const normTag = s => norm(s).replace(/[^a-z0-9]+/g, '');
  const byDate = (a, b) => String(b.publishedDate || '').localeCompare(String(a.publishedDate || ''));
  const byViews = (a, b) => (b.viewCount || 0) - (a.viewCount || 0);

  const PAGE_STEP = 9;           
  const QUERY_LIMIT = 18;        

  





  const MEM_CLE = 'rdrMemHubActusV1';
  const MEM_TTL_MS = 30 * 60 * 1000;
  const memLangue = () => /^\/en(\/|$)/.test((typeof location !== 'undefined' && location.pathname) || '') ? 'en' : 'fr';
  function memLire(suffixe) {
    try { const m = JSON.parse(sessionStorage.getItem(MEM_CLE + ':' + suffixe) || 'null'); return (m && typeof m.le === 'number' && Date.now() - m.le < MEM_TTL_MS) ? m : null; }
    catch (e) { return null; }
  }
  function memEcrire(suffixe, valeurs) {
    try { sessionStorage.setItem(MEM_CLE + ':' + suffixe, JSON.stringify(Object.assign({ le: Date.now() }, valeurs))); }
    catch (e) {   }
  }

class RdrNews extends HTMLElement {
    static get observedAttributes() { return ['payload', 'results', 'lang', 'deeplink', 'membre', 'mes-facettes']; }

    constructor() {
      super();
      this._initialized = false;
      this._teardown = [];
      this._renderRAF = null;
      this._state = {
        payload: null, lang: 'fr',
         
        membre: false, facettes: null, facettesEnCours: false,
        cat: 'all', themes: new Set(), classes: new Set(), q: '',
        sort: 'recent', shown: PAGE_STEP, bannerClosed: false,
         
        hideRead: (() => { try { return localStorage.getItem('rnMasquerLus') === '1'; } catch (e) { return false; } })(),
        server: { items: null, hasMore: false, cursor: null, total: 0, loading: false }
      };
      this._reqId = 0;
      this._pendingPayload = null;
      this._pendingLang = null;
      this._pendingMembre = false;
      this._pendingFacettes = null;
      this._searchTimer = null;
    }

    connectedCallback() {
      if (this._initialized) return;
      this._initialized = true;

      this.setAttribute('translate', 'no');
      this.classList.add('notranslate');
      this.setAttribute('data-gramm', 'false');
      this.setAttribute('data-enable-grammarly', 'false');

      this.innerHTML = '<style>' + CSS + '</style><div class="rn-root"><div class="rn__content"></div></div>';
      this._root = this.querySelector('.rn-root');
      this._content = this.querySelector('.rn__content');

      if (this._pendingLang) { this._state.lang = this._pendingLang === 'en' ? 'en' : 'fr'; this._pendingLang = null; }
      if (this._pendingPayload) { this._state.payload = this._pendingPayload; this._pendingPayload = null; if (this._brut) memEcrire(this._state.lang, { payload: this._brut }); }
      else if (!this._state.payload) {
         
        const m = memLire(this._pendingLang === 'en' || this._state.lang === 'en' || memLangue() === 'en' ? 'en' : 'fr');
        if (m && typeof m.payload === 'string') {
          try { this._state.payload = JSON.parse(m.payload); this._brut = m.payload; this._depuisMemoire = true; } catch (e) { this._state.payload = null; }
        }
      }
       
      this._state.membre = !!this._pendingMembre;
      if (this._pendingFacettes) { const v = this._pendingFacettes; this._pendingFacettes = null; setTimeout(() => this._recevoirFacettes(v), 0); }

       
       
      if (this._state.payload && this._isFiltering()) this._requestServer('replace');

       
       
       
      if (!this._onPageShow) {
        this._onPageShow = (e) => {
           
           
          try {
            this.querySelectorAll('.rn__navloading').forEach(n => n.classList.remove('rn__navloading'));
            this.querySelectorAll('.rn__navspin').forEach(n => n.remove());
          } catch (x) {   }
          if (!e || !e.persisted) return;  
          let r = null;
          try { r = JSON.parse(sessionStorage.getItem('rnRestore') || 'null'); } catch (x) {   }
          if (!r) return;
          try { sessionStorage.removeItem('rnRestore'); } catch (x) {   }
          if (Date.now() - (r.ts || 0) > 30 * 60000) return;
          const y = Number(r.y) || 0;
          if (y <= 2) return;
          const go = () => { try { window.scrollTo(0, y); } catch (x) {   } };
          requestAnimationFrame(() => requestAnimationFrame(go));
          setTimeout(go, 60); setTimeout(go, 220);  
        };
        window.addEventListener('pageshow', this._onPageShow);
      }

      this._render();
    }

    disconnectedCallback() {
      if (this._renderRAF) { cancelAnimationFrame(this._renderRAF); this._renderRAF = null; }
      if (this._renderTimer) { clearTimeout(this._renderTimer); this._renderTimer = null; }
      this._renderScheduled = false;
      if (this._searchTimer) { clearTimeout(this._searchTimer); this._searchTimer = null; }
      if (this._reqTimer) { clearTimeout(this._reqTimer); this._reqTimer = null; }
      if (this._retryTimer) { clearTimeout(this._retryTimer); this._retryTimer = null; }
      if (this._fabEl) { this._fabEl.remove(); this._fabEl = null; }  
      if (this._onFabScroll) { window.removeEventListener('scroll', this._onFabScroll); this._onFabScroll = null; }
      if (this._onPageShow) { window.removeEventListener('pageshow', this._onPageShow); this._onPageShow = null; }
      this._unlockScroll();  
      this._teardown.forEach(fn => { try { fn(); } catch (e) {   } });
      this._teardown = [];
      this._initialized = false;
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal === newVal) return;
      if (!this._initialized) {
        if (name === 'payload') { try { this._pendingPayload = JSON.parse(newVal || 'null'); this._brut = newVal; } catch (e) { console.error('[rn] payload parse', e); } }
        else if (name === 'lang') this._pendingLang = newVal;
        


        else if (name === 'membre') this._pendingMembre = newVal === '1';
        else if (name === 'mes-facettes') this._pendingFacettes = newVal;
        else if (name === 'deeplink') {
          try { this._applyDeeplink(JSON.parse(newVal || '{}')); }
          catch (e) {   }
        }
        return;
      }
      if (name === 'payload') {
        

        if (newVal) memEcrire(this._state.lang, { payload: newVal });
        

        if (this._depuisMemoire) { this._depuisMemoire = false; return; }
        this._depuisMemoire = false; this._brut = newVal;
        try { this._state.payload = JSON.parse(newVal || 'null'); }
        catch (e) { console.error('[rn] payload parse', e); return; }
        this._state.server = { items: null, hasMore: false, cursor: null, total: 0, loading: false };
        if (this._isFiltering()) this._requestServer('replace');
        this._scheduleRender();
      } else if (name === 'membre') {
        this._state.membre = newVal === '1';
        this._scheduleRender();
      } else if (name === 'mes-facettes') {
        this._recevoirFacettes(newVal);
      } else if (name === 'deeplink') {
         
         
         
         
        let d;
        try { d = JSON.parse(newVal || '{}'); } catch (e) { return; }
        this._applyDeeplink(d);
        if (this._initialized && this._state.payload) this._filterChange();
      } else if (name === 'results') {
        let r;
        try { r = JSON.parse(newVal || 'null'); } catch (e) { console.error('[rn] results parse', e); return; }
        this._onResults(r);
      } else if (name === 'lang') {
        this._state.lang = newVal === 'en' ? 'en' : 'fr';
        this._scheduleRender();
      }
    }

     
    setPayload(obj) {
      if (!this._initialized) { this._pendingPayload = obj; return; }
      this._state.payload = obj;
      this._state.server = { items: null, hasMore: false, cursor: null, total: 0, loading: false };
      this._scheduleRender();
    }
    setLang(l) {
      if (!this._initialized) { this._pendingLang = l; return; }
      this._state.lang = l === 'en' ? 'en' : 'fr';
      this._scheduleRender();
    }
    setResults(r) { this._onResults(r); }

    _t(key) { return (DICT[this._state.lang] || DICT.fr)[key] || key; }
    _emit(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { detail: detail || {}, bubbles: true, composed: true }));
    }
    _scheduleRender() {
      if (this._renderScheduled) return;
      this._renderScheduled = true;
      const run = () => {
        if (!this._renderScheduled) return;
        this._renderScheduled = false;
        if (this._renderRAF) { cancelAnimationFrame(this._renderRAF); this._renderRAF = null; }
        if (this._renderTimer) { clearTimeout(this._renderTimer); this._renderTimer = null; }
        this._render();
      };
      this._renderRAF = requestAnimationFrame(run);
      this._renderTimer = setTimeout(run, 80);
    }
    _reduced() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

    _isFiltering() {
      const s = this._state;
      return s.cat !== 'all' || s.themes.size > 0 || s.classes.size > 0 || s.q !== '';
    }
     
    _archiveEditionLabel() {
      const n = t => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      const ARCH = ['edition2018', 'edition2022', '2018edition', '2022edition'];
      return [...this._state.themes].find(t => ARCH.includes(n(t))) || '';
    }
    _isArchiveMode() { return !!this._archiveEditionLabel(); }
     
     
    _editionYear() {
      const m = this._archiveEditionLabel().match(/(19|20)\d{2}/);
      return m ? m[0] : '2026';
    }
     
     
    _isEdition(th) { return ['edition2018', 'edition2022', 'edition2026', '2018edition', '2022edition', '2026edition'].includes(normTag(th)); }
     
    _isArchiveEdition(th) { return ['edition2018', 'edition2022', '2018edition', '2022edition'].includes(normTag(th)); }

     
    _applyDeeplink(d) {
       
       
       
       
       
      const s = this._state;
      s.cat = d.cat ? String(d.cat) : 'all';
      const th = [];
      if (d.tag) th.push(String(d.tag));
      if (d.themes) String(d.themes).split(',').map(x => x.trim()).filter(Boolean).forEach(x => th.push(x));
      s.themes = new Set(th);
      s.classes = new Set(d.classes ? String(d.classes).split(',').map(x => x.trim()).filter(Boolean) : []);
      s.q = d.q ? String(d.q) : '';
      s.sort = d.sort === 'views' ? 'views' : 'recent';
    }
     
    _emitState() {
      const s = this._state;
      this._emit('rn-state', {
        cat: s.cat !== 'all' ? s.cat : '',
        themes: [...s.themes].join(','),
        classes: [...s.classes].join(','),
        q: s.q || '',
        sort: s.sort === 'views' ? 'views' : ''
      });
    }
     
    _markNavLoading(card) {
      if (!card || card.querySelector('.rn__navspin')) return;
      card.classList.add('rn__navloading');
       
      const host = card.querySelector('.rn__thumb, .rn__hero-media, .rn__psl-stage') || card;
      if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
      const spin = document.createElement('span');
      spin.className = 'rn__navspin';
      spin.setAttribute('aria-hidden', 'true');
      spin.innerHTML = '<svg viewBox="0 0 40 40">' +
        '<defs><linearGradient id="rn-spg" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#FCF150"></stop><stop offset="1" stop-color="#5DBFC0"></stop>' +
        '</linearGradient></defs>' +
        '<circle class="rn__navspin-trk" cx="20" cy="20" r="15"></circle>' +
        '<circle class="rn__navspin-arc" cx="20" cy="20" r="15"></circle></svg>';
      host.appendChild(spin);
      setTimeout(() => { try { card.classList.remove('rn__navloading'); spin.remove(); } catch (e) {   } }, 6000);
    }
    _saveRestorePoint(toUrl) {
      try {
        sessionStorage.setItem('rnRestore', JSON.stringify({
          y: window.scrollY || 0, shown: this._state.shown, ts: Date.now(),
           
           
           
           
          to: toUrl || '', hubUrl: location.pathname + location.search
        }));
         
         
        this._restored = false;
      } catch (e) {   }
    }
     
    _maybeRestore() {
      if (this._restored) return;
      if (!this._state.payload) return;
      if (this._isFiltering() && !this._state.server.items) return;
      let r = null;
      try { r = JSON.parse(sessionStorage.getItem('rnRestore') || 'null'); } catch (e) {   }
      this._restored = true;
      if (!r) return;
      try { sessionStorage.removeItem('rnRestore'); } catch (e) {   }
      if (Date.now() - (r.ts || 0) > 30 * 60000) return;  
      if (r.shown && r.shown > this._state.shown) {
        this._state.shown = r.shown;
        this._render();
        const s = this._state;
        const localAvail = this._isFiltering() ? this._filteredList().length : (this._homeRestCount || 0);
        if (r.shown > localAvail && ((s.payload && s.payload.hasMore) || s.server.hasMore) && !s.server.loading) {
          s.server.loading = true;
          this._requestServer(s.server.items ? 'append' : 'loadmore-beyond');
        }
      }
      const y = Number(r.y) || 0;
      if (y > 2) {
        const t0 = Date.now();
        let done = false;
        const settle = () => {
          if (done || !this.isConnected) return;  
          const doc = document.documentElement;
          const max = Math.max(0, (doc.scrollHeight || 0) - window.innerHeight);
          if (max >= y - 4 || Date.now() - t0 > 2500) {
            done = true;
            try { window.scrollTo(0, Math.min(y, max)); } catch (e) {   }
            return;
          }
          setTimeout(settle, 120);
        };
        requestAnimationFrame(() => requestAnimationFrame(settle));
        setTimeout(settle, 150);
      }
    }
    _activeCount() {
      const s = this._state;
      return (s.cat !== 'all' ? 1 : 0) + s.themes.size + s.classes.size + (s.q ? 1 : 0);
    }
    _posts() { return (this._state.payload && Array.isArray(this._state.payload.posts)) ? this._state.payload.posts : []; }
    _cats() {
      const lang = this._state.lang;
      const cats = (this._state.payload && this._state.payload.categories) || [];
      return cats.filter(c => (c.language || 'fr') === lang);
    }
    _chipCats() {
      return this._cats().filter(c => CHIP_CATS.includes(String(c.slug || '').replace(/-en$/, '')));
    }
    _themesConfig() {
      return (this._state.payload && this._state.payload.themes) || THEMES_FALLBACK[this._state.lang] || THEMES_FALLBACK.fr;
    }
    _matches(p) {
      const s = this._state;
      if (s.cat !== 'all') {
        const keys = (Array.isArray(p.catSlugs) && p.catSlugs.length ? p.catSlugs : [p.catSlug])
          .map(k => String(k || '').replace(/-en$/, ''));
        if (!keys.includes(s.cat)) return false;
      }
      if (s.themes.size) {
        const th = Array.isArray(p.themes) ? p.themes : [];
        const wanted = [...s.themes].map(normTag);
        if (!th.some(t => wanted.includes(normTag(t)))) return false;
      }
      if (s.classes.size) {
        const cl = Array.isArray(p.classes) ? p.classes : [];
        if (!cl.some(c => s.classes.has(c))) return false;
      }
      if (s.q) {
         
        if (!scorePost(p, motsDe(s.q), norm(s.q))) return false;
      }
       
      if (s.hideRead && this._estLu(p)) return false;
      return true;
    }
    _localFiltered() {
      const s = this._state;
      const list = this._posts().filter(p => this._matches(p));
      if (s.q) {
         
         
        const mots = motsDe(s.q), nq = norm(s.q);
        const cmp = s.sort === 'views' ? byViews : byDate;
        const sc = new Map();
        list.forEach(p => sc.set(p, scorePost(p, mots, nq) || { hits: 0, score: 0 }));
        list.sort((a, b) => {
          const A = sc.get(a), B = sc.get(b);
          return (B.hits - A.hits) || (B.score - A.score) || cmp(a, b);
        });
        return list;
      }
      list.sort(s.sort === 'views' ? byViews : byDate);
      return list;
    }
    _isNew(p) {
      if (!p.publishedDate) return false;
      const payload = this._state.payload || {};
      const hours = Number(payload.newWindowH) > 0 ? Number(payload.newWindowH) : 48;
      return (Date.now() - new Date(p.publishedDate).getTime()) < hours * 3600 * 1000;
    }

     
    _requestServer(reason, isRetry) {
      const s = this._state;
      const payload = s.payload || {};
       
       
      if (!payload.hasMore && reason !== 'loadmore-beyond' && !this._isArchiveMode()
        && !(reason === 'append' && s.server.hasMore)) return;
       
       
      if (!isRetry) { this._srvRetry = 0; this._noRespRetried = false; }
       
       
       
       
      this._appendMode = (reason === 'append');
      const reqId = ++this._reqId;
      s.server.loading = true;
      this._emit('rn-query', {
        reqId,
        cat: s.cat, themes: [...s.themes], classes: [...s.classes], q: s.q,
        sort: s.sort,
        cursor: reason === 'append' ? s.server.cursor : null,
        limit: QUERY_LIMIT,
        lang: s.lang
      });
       
       
       
       
       
      if (this._reqTimer) clearTimeout(this._reqTimer);
      this._reqTimer = setTimeout(() => {
        if (this._reqId !== reqId || !this._state.server.loading) return;
        if (!this._noRespRetried) {
          this._noRespRetried = true;
          try { this._requestServer(reason, true); } catch (e) {   }
          return;
        }
        this._state.server.loading = false;
        this._scheduleRender();
      }, 6000);
    }
    _onResults(r) {
      if (!r || r.reqId !== this._reqId) return;  
      if (this._reqTimer) { clearTimeout(this._reqTimer); this._reqTimer = null; }
      const s = this._state.server;
       
       
       
       
      if (r.error && this._isFiltering() && (this._srvRetry || 0) < 2) {
        this._srvRetry = (this._srvRetry || 0) + 1;
        s.loading = true;
        if (this._retryTimer) clearTimeout(this._retryTimer);
        this._retryTimer = setTimeout(() => { try { this._requestServer('replace', true); } catch (e) {   } }, 1400);
        this._scheduleRender();
        return;
      }
      const items = Array.isArray(r.items) ? r.items : [];
       
       
      if (this._appendMode && s.items) {
        const seen = new Set(s.items.map(x => x._id));
        s.items = s.items.concat(items.filter(it => it && !seen.has(it._id)));
      } else {
        s.items = items;
      }
      s.hasMore = !!r.hasMore;
      s.cursor = r.cursor || null;
      s.total = Number.isFinite(r.total) ? r.total : s.items.length;
      s.loading = false;
      this._scheduleRender();
    }

    _mediaKind(p) {
      const keys = (Array.isArray(p.catSlugs) && p.catSlugs.length ? p.catSlugs : [p.catSlug])
        .map(k => String(k || '').replace(/-en$/, ''));
      return ['video', 'image', 'audio', 'interview'].find(k => keys.includes(k)) || null;
    }
    _catLabel(slug) {
      const c = this._cats().find(x => String(x.slug || '').replace(/-en$/, '') === slug);
      return c ? (c.label || '') : '';
    }
    _catBadge(p, light) {
      const kind = this._mediaKind(p);
      const slug = kind || p.catSlug;
      const label = kind ? (this._catLabel(kind) || kind.toUpperCase()) : (p.catLabel || '');
      const st = catStyleOf(slug);
      const styl = light ? 'color:#B9E8E9;background:rgba(255,255,255,.12)' :
        'color:' + isSafeColor(st.c) + ';background:' + isSafeColor(st.bg);
      const key = String(slug || '').replace(/-en$/, '');
      if (!key || !label) return '';
      return '<button type="button" class="rn__catbadge" data-rn-cat="' + escAttr(key) + '" style="' + styl + '">' + (IC[st.ic] || IC.news) + escapeHTML(label) + '</button>';
    }
    _relDate(iso) {
      if (!iso) return '';
       
       
      const dt = new Date(String(iso).trim().replace(' ', 'T'));
      if (isNaN(dt.getTime())) return '';
      const d = Math.floor((Date.now() - dt.getTime()) / 864e5);
      if (d < 1) return this._t('today');
      if (d < 2) return this._t('yesterday');
      if (d < 30) return this._t('days_ago').replace('{n}', String(d));
      try {
        return dt.toLocaleDateString(this._state.lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'short', timeZone: 'Europe/Paris' });
      } catch (e) { return ''; }
    }
     
    _estLu(p) {
      return !!(this._lus && p && p.slug && this._lus.has(String(p.slug).toLowerCase()));
    }
    _metaLine(p, light, noNew) {
      const flags =
        (p.isDirect ? '<span class="rn__liveflag">' + this._t('live_flag') + '</span>' : '') +
        (!noNew && !p.isDirect && this._isNew(p) ? '<span class="rn__newflag">' + this._t('new_flag') + '</span>' : '');
      const lu = this._lus && p.slug && this._lus.has(String(p.slug).toLowerCase());
      return '<div class="rn__meta">' + this._catBadge(p, light) + flags +
        '<span>' + escapeHTML(this._relDate(p.publishedDate)) + '</span>' +
        (p.timeToRead ? '<span class="rn__clock">' + IC.clock + ' ' + escapeHTML(String(p.timeToRead)) + ' ' + this._t('min_read') + '</span>' : '') +
        (lu ? '<span class="rn__dejalu">' + IC.check + this._t('deja_lu') + '</span>' : '') +
        '</div>';
    }
    _classTags(p) {
      const cl = Array.isArray(p.classes) ? p.classes : [];
      if (!cl.length) return '';
      const lang = this._state.lang;
       
       
       
      let visibles = cl.slice(0, 2);
      const actives = cl.filter(k => this._state.classes.has(k));
      actives.forEach(k => { if (!visibles.includes(k)) visibles = [visibles[0], k]; });
      const extras = cl.filter(k => !visibles.includes(k));
      const puce = (k) => {
        const c = classOf(k); if (!c) return '';
        const on = this._state.classes.has(k);
        return '<button type="button" class="rn__classtag' + (on ? ' is-on' : '') + '" data-rn-class="' + escAttr(k) + '"' +
          ' style="--cc:' + isSafeColor(c.col) + '" aria-pressed="' + on + '">' +
          '<img src="' + isSafeUrl(c.flag) + '" alt="" loading="lazy" decoding="async">' + escapeHTML(c[lang] || c.fr) + '</button>';
      };
      return '<div class="rn__classtags">' + visibles.map(puce).join('') +
      (extras.length ? '<button type="button" class="rn__classtag rn__classtag--more" data-rn-classmore aria-expanded="false"' +
        ' aria-label="' + (lang === 'en' ? 'Show ' + extras.length + ' more classes' : 'Afficher ' + extras.length + ' autres classes') + '">+' + extras.length + '</button>' +
        '<span class="rn__classtag-extra" hidden>' + extras.map(puce).join('') + '</span>' : '') +
      '</div>';
    }
    _thumb(p, w, h, opts) {
      opts = opts || {};
      const kind = this._mediaKind(p);
      const fmt = opts.noFmt ? '' :
        kind === 'video' ? '<span class="rn__fmtic">' + IC.play + '</span>' :
        kind === 'image' ? '<span class="rn__fmtic">' + IC.cam + '</span>' :
        kind === 'audio' ? '<span class="rn__fmtic rn__fmtic--audio">' + IC.mic2 + '<i>Audio</i></span>' : '';
      const newPatch = (!p.isDirect && this._isNew(p))
        ? '<span class="rn__newpatch">' + this._t('new_flag') + '</span>' : '';
      const load = opts.eager ? ' loading="eager" fetchpriority="high"' : ' loading="lazy" fetchpriority="low"';
      const sizes = opts.sizes || '(max-width:640px) 100vw, (max-width:1023px) 50vw, 33vw';
       
       
       
       
       
       
       
       
       
      const ar = coverAR(p.cover);
       
       
       
      const boxAR = opts.boxAr || (h > 0 ? w / h : 1.6);
      const tall = ar > 0 && ar < 0.62 * boxAR;
      const boxStyle = opts.boxAr ? ' style="aspect-ratio:' + (Math.round(opts.boxAr * 100) / 100) + '"' : '';
      let img;
      if (!p.cover) {
        img = WAVE('rn__wavem');
      } else if (tall) {
        img = '<img class="rn__thumb-bg" src="' + rnImg(p.cover, Math.max(160, Math.round(w / 2)), Math.max(160, Math.round(h / 2)), 40) + '" alt="" aria-hidden="true"' + load + ' decoding="async">' +
          '<img class="rn__thumb-full" src="' + rnImg(p.cover, w, h) + '" srcset="' + rnSrcset(p.cover, w, h) + '"' +
          ' sizes="' + sizes + '" width="' + w + '" height="' + h + '" alt=""' + load + ' decoding="async">';
      } else {
        img = '<img src="' + rnImg(p.cover, w, h) + '" srcset="' + rnSrcset(p.cover, w, h) + '"' +
          ' sizes="' + sizes + '" width="' + w + '" height="' + h + '" alt=""' + load + ' decoding="async">';
      }
       
       
      const lu = this._estLu(p) ? '<span class="rn__luchip" aria-hidden="true">' + IC.eyelu + '</span>' : '';
      return '<div class="rn__thumb' + (tall ? ' rn__thumb--tall' : '') + '"' + boxStyle + '>' + img + fmt + newPatch + (opts.extra || '') + lu + '</div>';
    }
    _stdCard(p, pick) {
      return '<article class="rn__card' + (pick ? ' rn__card--pick' : '') + '">' +
        this._thumb(p, 640, 360) +
        '<div class="rn__body">' + this._metaLine(p, false, true) +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        (p.excerpt ? '<p class="rn__excerpt">' + escapeHTML(p.excerpt) + '</p>' : '') +
        this._classTags(p) + '</div></article>';
    }
    _accentCard(p) {
      const eyebrow = (p.skippers && p.skippers[0]) ? p.skippers[0] : this._t('audio_eyebrow');
      return '<article class="rn__card rn__card--accent"><span class="rn__bigquote">' + IC.mic2 + '</span>' + WAVE('rn__waveb') +
        '<div class="rn__body"><div style="display:flex;flex-direction:column;gap:9px">' +
        '<span class="rn__itweyebrow">' + IC.mic + ' ' + escapeHTML(eyebrow) + '</span>' +
        '<div class="rn__meta">' + this._catBadge(p, true) + '<span>' + escapeHTML(this._relDate(p.publishedDate)) + '</span>' +
        (p.timeToRead ? '<span class="rn__clock">' + IC.clock + ' ' + escapeHTML(String(p.timeToRead)) + ' ' + this._t('min_read') + '</span>' : '') + '</div></div>' +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        '<div style="display:flex;flex-direction:column;gap:12px">' +
        (p.excerpt ? '<p class="rn__excerpt">« ' + escapeHTML(p.excerpt) + ' »</p>' : '') +
        this._classTags(p) + '</div></div></article>';
    }
    _videoCard(p) {
      return '<article class="rn__card rn__card--video">' +
        this._thumb(p, 640, 360, { noFmt: true, extra: '<span class="rn__playdisc" aria-hidden="true">' + IC.play + '</span>' }) +
        '<div class="rn__body">' + this._metaLine(p, true, true) +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        (p.excerpt ? '<p class="rn__excerpt">' + escapeHTML(p.excerpt) + '</p>' : '') +
        this._classTags(p) + '</div></article>';
    }
    _audioCard(p) {
      const bars = [45, 78, 55, 92, 62, 82, 40, 70, 95, 50, 66, 86, 44, 74].map(x =>
        '<i style="height:' + x + '%"></i>').join('');
      return '<article class="rn__card rn__card--audio">' +
        this._thumb(p, 320, 320, { noFmt: true, sizes: '126px', extra: '<span class="rn__adisc" aria-hidden="true">' + IC.play + '</span>' }) +
        '<div class="rn__body">' + this._metaLine(p, true, true) +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        '<div class="rn__eq" aria-hidden="true">' + bars + '</div></div></article>';
    }
    _topItem(p, rank) {
      return '<div class="rn__topitem"><span class="rn__rank" aria-hidden="true">' + rank + '</span><div class="rn__tbody">' +
        '<h3><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        '<div class="rn__tmeta">' + escapeHTML(p.catLabel || '') + ' · ' + escapeHTML(this._relDate(p.publishedDate)) + '</div></div></div>';
    }
    _wideCard(p, boxArIn, extraCls) {
       
       
       
       
       
       
      const ar = coverAR(p.cover);
      const boxAr = boxArIn || Math.max(1.9, Math.min(2.4, ar || 1.9));
      return '<article class="rn__card rn__card--wide' + (extraCls || '') + '">' +
        this._thumb(p, 980, Math.round(980 / boxAr), { boxAr: boxAr, sizes: '(max-width:640px) 100vw, (max-width:1023px) 90vw, 66vw' }) +
        '<div class="rn__body">' + this._metaLine(p, false, true) +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        (p.excerpt ? '<p class="rn__excerpt">' + escapeHTML(p.excerpt) + '</p>' : '') +
        this._classTags(p) + '</div></article>';
    }
    _coverCard(p, photo) {
      return '<article class="rn__card rn__card--cover' + (photo ? ' rn__card--photo' : '') + '">' +
        this._thumb(p, 640, 800, { sizes: '(max-width:640px) 100vw, 33vw' }) +
        '<span class="rn__cardhit" data-rn-link data-url="' + escAttr(isSafeUrl(p.url, '#')) + '" aria-hidden="true"></span>' +
        '<div class="rn__body">' + this._metaLine(p, true, true) +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        this._classTags(p) + '</div></article>';
    }
     
     
     
     
     
    _miniCard(p) {
      return '<article class="rn__card rn__card--mini">' +
        this._thumb(p, 640, 360, { sizes: '(max-width:640px) 100vw, 33vw' }) +
        '<div class="rn__body">' + this._metaLine(p, false, true) +
        '<h3 class="rn__cardtitle"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
        (p.excerpt ? '<p class="rn__excerpt">' + escapeHTML(p.excerpt) + '</p>' : '') +
        this._classTags(p) + '</div></article>';
    }
     
     
     
    _magazineRow(big, m1, m2, droite) {
      const ar = coverAR(big.cover);
      const boxAr = Math.max(1.5, Math.min(2.0, ar || 1.78));
      return '<div class="rn__magrow' + (droite ? ' rn__magrow--r' : '') + '">' +
        this._wideCard(big, boxAr) +
        '<div class="rn__magcol">' + this._miniCard(m1) + this._miniCard(m2) + '</div>' +
        '</div>';
    }
    _rhythm(list) {
       
       
       
       
       
       
       
      const out = [];
      let land = 0;           
      let featDroite = false;  
      let saute = 0;           
      for (let idx = 0; idx < list.length; idx++) {
        if (saute > 0) { saute--; continue; }
        const p = list[idx];
        const kind = this._mediaKind(p);
        if (kind === 'video') { out.push(this._videoCard(p)); continue; }
        if (kind === 'audio') { out.push(this._accentCard(p)); continue; }
        const ar = coverAR(p.cover);
        if (p.cover && ar > 0 && ar < 0.92) { out.push(this._coverCard(p, kind === 'image')); continue; }
        if (kind === 'image' && p.cover) { out.push(this._coverCard(p, true)); continue; }
        const i = land++;
        if (p.cover && ar >= 1.2 && i % 6 === 2) {
          const m1 = list[idx + 1], m2 = list[idx + 2];
          if (m1 && m2) {
            out.push(this._magazineRow(p, m1, m2, featDroite));
            featDroite = !featDroite;
            saute = 2;
          } else {
            out.push(this._wideCard(p));  
          }
          continue;
        }
        if (p.cover && ar <= 1.5 && i % 9 === 7) { out.push(this._coverCard(p)); continue; }
        out.push(this._stdCard(p));
      }
      return out.join('');
    }
     
     
    _pickSlider(picks) {
      const slides = picks.map((p, i) => {
        const img = p.cover
          ? '<img src="' + rnImg(p.cover, 980, 620) + '" srcset="' + rnSrcset(p.cover, 980, 620) + '"' +
            ' sizes="(max-width:900px) 100vw, 62vw" width="980" height="620" alt=""' +
            (i === 0 ? ' loading="eager"' : ' loading="lazy"') + ' decoding="async">'
          : WAVE('rn__wavem');
        return '<article class="rn__psl-slide' + (i === 0 ? ' is-on' : '') + '" data-rn-psl-slide="' + i + '">' + img +
          '<span class="rn__psl-hit" data-rn-link data-url="' + escAttr(isSafeUrl(p.url, '#')) + '" aria-hidden="true"></span>' +
          '<div class="rn__psl-body">' + this._metaLine(p, true) +
          '<h3 class="rn__psl-title rn-display"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h3>' +
          (p.excerpt ? '<p class="rn__psl-ex">' + escapeHTML(p.excerpt) + '</p>' : '') +
          '</div></article>';
      }).join('');
      const navs = picks.map((p, i) => {
        const img = p.cover ? '<img src="' + rnImg(p.cover, 112, 112) + '" alt="" loading="lazy" decoding="async">' : '';
        return '<button type="button" class="rn__psl-nav' + (i === 0 ? ' is-on' : '') + '" data-rn-psl="' + i + '" aria-pressed="' + (i === 0) + '">' +
          '<span class="rn__psl-nthumb">' + img + '</span>' +
          '<span class="rn__psl-nbody"><span class="rn__psl-nt">' + escapeHTML(p.title || '') + '</span>' +
          '<span class="rn__psl-nmeta">' + escapeHTML((p.catLabel || '') + ' · ' + this._relDate(p.publishedDate)) + '</span></span>' +
          '<span class="rn__psl-prog" aria-hidden="true"></span></button>';
      }).join('');
      const dots = picks.map((p, i) =>
        '<button type="button" class="' + (i === 0 ? 'is-on' : '') + '" data-rn-psl="' + i + '" aria-label="' + escAttr(p.title || String(i + 1)) + '"></button>').join('');
      return '<div class="rn__psl" data-rn-psl-root>' +
        '<div class="rn__psl-stage">' + slides + '</div>' +
        '<div class="rn__psl-rail">' + navs + '</div>' +
        '<div class="rn__psl-dots">' + dots + '</div></div>';
    }

    _heroCard(p) {
      const ar = coverAR(p.cover);
      const fits = !ar || (ar >= 1.45 && ar <= 2.6);
      let img = '', media = '';
      if (p.cover && fits) {
        img = '<div class="rn__hero-img"><img src="' + rnImg(p.cover, 1280, 600) + '" srcset="' + rnSrcset(p.cover, 1280, 600) + '"' +
          ' sizes="(max-width:1280px) 100vw, 1280px" width="1280" height="600" alt="" loading="eager" fetchpriority="high" decoding="async"></div>';
      } else if (p.cover) {
        const fw = ar < 1 ? Math.max(320, Math.round(720 * ar)) : 800;
        const fh = Math.round(fw / ar);
        img = '<div class="rn__hero-img rn__hero-img--blur" aria-hidden="true"><img src="' + rnImg(p.cover, 480, 270, 40) + '" alt="" loading="eager" decoding="async"></div>';
        media = '<div class="rn__hero-media"><img src="' + rnImg(p.cover, fw, fh) + '" width="' + fw + '" height="' + fh + '" alt="" loading="eager" fetchpriority="high" decoding="async"></div>';
      }
      return '<article class="rn__hero' + (media ? ' rn__hero--contain' : '') + '">' + img + WAVE('rn__hero-waves') +
        '<div class="rn__hero-main"><span class="rn__unebadge">' + IC.anchor + ' ' + this._t('seg_une') + '</span>' +
        this._metaLine(p, true) +
        '<h2 class="rn__hero-title rn-display"><a href="' + isSafeUrl(p.url, '#') + '" data-rn-link>' + escapeHTML(p.title || '') + '</a></h2>' +
        (p.excerpt ? '<p class="rn__hero-ex">' + escapeHTML(p.excerpt) + '</p>' : '') +
        '<div class="rn__heroroute" aria-hidden="true"><b>' + this._t('route_from') + '</b><span class="rn__leg"></span>' +
        this._t('route_nm') + '<span class="rn__leg"></span><b>' + this._t('route_to') + '</b></div>' +
        '</div>' + media + '</article>';
    }
    _segHead(title, icon, right) {
      return '<div class="rn__seghead"><h2 class="rn__segtitle"><span class="rn__segico" aria-hidden="true">' + icon + '</span>' + title + '</h2>' +
        '<span class="rn__segrule" aria-hidden="true"></span>' + (right || '') + '</div>';
    }
    






















    _boutonMesPrefs() {
      const t = k => this._t(k);
      const s = this._state;
      const etat = s.facettesEnCours ? ' is-loading' : '';
      const lib = this._mesPrefsFlash || t('mesprefs');
      return '<button type="button" class="rn__iconbtn rn__mesprefs' + etat + '" data-rn-mes-prefs' +
        ' aria-label="' + escAttr(lib) + '" title="' + escAttr(t('mesprefs_tip')) + '">' +
        IC.sparkIc + '<span class="rn__mpl">' + escapeHTML(lib) + '</span></button>';
    }

    











    _facettesApplicables(libelles) {
      return (Array.isArray(libelles) ? libelles : []).slice(0, 12);
    }

    _recevoirFacettes(brut) {
      const s = this._state;
      s.facettesEnCours = false;
      let d = null;
      try { d = JSON.parse(brut || 'null'); } catch (e) { d = null; }
      

      if (!d || d.lu === false) { this._flashMesPrefs(this._t('mesprefs_ko')); this._render(); return; }
      const applicables = this._facettesApplicables(Array.isArray(d.libelles) ? d.libelles : []);
      




      if (!applicables.length) {
        const cle = !d.suivies ? 'mesprefs_rien_suivi'
                  : d.catalogueLu === false ? 'mesprefs_ko'
                  : 'mesprefs_vide';
        this._flashMesPrefs(this._t(cle)); this._render(); return;
      }
      s.facettes = applicables;
      applicables.forEach(x => s.themes.add(x));
      this._filterChange();
    }

    


    _flashMesPrefs(txt) {
      this._mesPrefsFlash = txt;
      clearTimeout(this._mesPrefsTimer);
      this._mesPrefsTimer = setTimeout(() => { this._mesPrefsFlash = null; this._render(); }, 3200);
    }

    _sortToggle() {
      const s = this._state.sort;
       
       
       
      const oeil = ((this._lus && this._lus.size) || this._state.hideRead
        ? '<button type="button" class="rn__iconbtn rn__lubtn' + (this._state.hideRead ? ' is-on' : '') + '" data-rn-lus aria-pressed="' + (this._state.hideRead ? 'true' : 'false') + '" aria-label="' + escAttr(this._t(this._state.hideRead ? 'show_read' : 'hide_read')) + '">' + IC.eye + '<span class="lbl">' + this._t(this._state.hideRead ? 'show_read' : 'hide_read') + '</span></button>'
        : '');
      return oeil + '<div class="rn__sort" role="group">' +
        '<button type="button" class="' + (s === 'recent' ? 'is-on' : '') + '" data-rn-sort="recent" aria-pressed="' + (s === 'recent') + '">' + this._t('sort_recent') + '</button>' +
        '<button type="button" class="' + (s === 'views' ? 'is-on' : '') + '" data-rn-sort="views" aria-pressed="' + (s === 'views') + '">' + this._t('sort_views') + '</button></div>';
    }
    _partnerBanner(pt) {
      const logo = pt.logo
        ? '<img src="' + rnImg(pt.logo, 112, 112) + '" alt="' + escAttr(pt.annonceur || '') + '" loading="lazy" decoding="async">'
        : escapeHTML(pt.annonceur || '');
      return '<div class="rn__pbanner">' +
        '<div class="rn__plogo">' + logo + '</div>' +
        '<div class="rn__pbody"><span class="rn__plabel">' + IC.star + ' ' + this._t('partner') + '</span><b>' + escapeHTML(pt.titre || '') + '</b>' +
        '<span class="rn__psub">' + escapeHTML(pt.sousTitre || '') + '</span></div>' +
        '<a class="rn__pcta" href="' + isSafeUrl(pt.lien, '#') + '" data-rn-partner="' + escAttr(pt.annonceur || '') + '">' + escapeHTML(pt.cta || '') + ' ' + IC.arrow + '</a>' +
        '<button type="button" class="rn__pclose" data-rn-close-banner aria-label="' + escAttr(this._t('partner_hide')) + '">' + IC.close + '</button>' +
        '</div>';
    }
    _partnerCard(pt) {
      const img = pt.image ? '<img src="' + rnImg(pt.image, 720, 440) + '" width="720" height="440" alt="" loading="lazy" decoding="async">' : WAVE('rn__wavem');
      return '<article class="rn__card rn__card--partner"><div class="rn__pthumb">' + img + '</div>' +
        '<div class="rn__pcontent"><span class="rn__plabel2">' + IC.star + ' ' + this._t('partner_content') + '</span>' +
        '<h3 class="rn__ptitle">' + escapeHTML(pt.titre || '') + '</h3>' +
        '<p class="rn__pdesc">' + escapeHTML(pt.sousTitre || '') + '</p>' +
        '<a class="rn__pcta2" href="' + isSafeUrl(pt.lien, '#') + '" data-rn-partner="' + escAttr(pt.annonceur || '') + '">' + escapeHTML(pt.cta || '') + ' ' + IC.arrow + '</a>' +
        '<span class="rn__pann">' + this._t('partner_by').replace('{n}', escapeHTML(pt.annonceur || '')) + '</span></div></article>';
    }
    _emptyBlock() {
      return '<div class="rn__seg"><div class="rn__grid"><div class="rn__empty">' + IC.anchor +
        '<div class="rn__empty-title">' + this._t('empty_title') + '</div><p>' + this._t('empty_text') + '</p>' +
        '<button type="button" class="rn__resetbtn" data-rn-reset>' + this._t('empty_reset') + '</button></div></div></div>';
    }
     
     
    _loadingBlock() {
      const t = k => this._t(k);
      const cat = this._state.cat;
      const msg = cat === 'image' ? t('loading_img') : (cat === 'video' ? t('loading_vid') : t('loading_gen'));
      return '<div class="rn__seg"><div class="rn__loadblock">' +
        '<span class="rn__loadring" aria-hidden="true"><svg viewBox="0 0 40 40">' +
        '<defs><linearGradient id="rn-lspg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FCF150"></stop><stop offset="1" stop-color="#5DBFC0"></stop></linearGradient></defs>' +
        '<circle class="rn__navspin-trk" cx="20" cy="20" r="15"></circle>' +
        '<circle class="rn__loadring-arc" cx="20" cy="20" r="15"></circle></svg></span>' +
        '<div class="rn__loadblock-title">' + t('loading_title') + '</div>' +
        '<p aria-live="polite">' + escapeHTML(msg) + '</p></div></div>';
    }

    _render() {
      this._lus = lusEnsemble();    
      if (!this._content) return;
       
       
      const openDlg = this.querySelector('dialog[open]');
      if (openDlg) {
        this._renderPending = true;
        if (openDlg.classList.contains('rn__sheetdlg')) this._syncSheetControls();
        return;
      }
      this._renderPending = false;
      const t = k => this._t(k);

      if (!this._state.payload) {
        this._content.innerHTML =
          '<div class="rn__wrap rn__sk" role="status" aria-busy="true" aria-label="' + escAttr(t('loading')) + '">' +
          '<div style="padding-top:clamp(30px,5vw,58px)">' +
          '<div class="rn__skbox rn__sk-kicker"></div><div class="rn__skbox rn__sk-h1"></div><div class="rn__skbox rn__sk-intro"></div>' +
          '<div class="rn__sk-bar">' + Array.from({ length: 5 }, () => '<div class="rn__skbox rn__sk-chip"></div>').join('') + '</div>' +
          '<div class="rn__skbox rn__sk-hero"></div>' +
          '<div class="rn__sk-grid">' + Array.from({ length: 6 }, () => '<div class="rn__skbox rn__sk-card"></div>').join('') + '</div>' +
          '</div></div>';
        return;
      }

      const filtering = this._isFiltering();
      const html =
        this._headHtml() +
        this._stickyHtml() +
        '<main class="rn__wrap rn__main">' +
        this._resultLineHtml() +
        '<div class="rn__stream">' + (filtering ? this._filteredHtml() : this._homeHtml()) + '</div>' +
        this._loadMoreHtml() +
        '</main>' +
        this._searchDialogHtml() +
        this._sheetDialogHtml();

      this._teardownRendered();
      this._content.innerHTML = html;
      this._wire();
      this._mountFab();      
      this._centerActiveChip();  
      this._maybeRestore();  
    }

    _headHtml() {
      const t = k => this._t(k);
      return '<header class="rn__wrap rn__head">' +
        '<div class="rn__kicker"><span class="rn__kicker-ic">' + FLAME_SVG + '</span>' + t('kicker') + '</div>' +
        '<div class="rn__titlerow">' +
        '<h1 class="rn__h1 rn-display"><span class="rn__swash" aria-hidden="true"></span><span class="rn__h1txt">' + (this._isArchiveMode() ? t('title_archive') : t('title')) + '</span></h1>' +
        '<span class="rn__watermark rn-display" aria-hidden="true">' + this._editionYear() + '</span>' +
        '</div>' +
        '<p class="rn__intro">' + t('intro') + '</p>' +
        '<span class="rn__gradbar" aria-hidden="true"></span>' +
        '<div class="rn__headart" aria-hidden="true">' +
        '<img src="https://static.wixstatic.com/shapes/7bb303_ee13808faae94a86a35cdcf223dec4f5.svg" width="180" height="178" alt="" loading="lazy" decoding="async">' +
        '</div>' +
        '</header>' +
        '<div class="rn__sentinel" aria-hidden="true"></div>';
    }
    _stickyHtml() {
      const t = k => this._t(k);
      const cats = this._chipCats();
      const chipIc = (inner, st) => '<span class="rn__chipic"' +
        (st ? ' style="background:' + isSafeColor(st.bg) + ';color:' + isSafeColor(st.c) + '"' : '') + '>' + inner + '</span>';
      const chips = ['<button type="button" class="rn__chip' + (this._state.cat === 'all' ? ' is-on' : '') + '" data-rn-cat="all" aria-pressed="' + (this._state.cat === 'all') + '">' + chipIc(IC.grid) + t('all') + '</button>']
        .concat(cats.map(c => {
          const key = String(c.slug || '').replace(/-en$/, '');
          const st = catStyleOf(c.slug);
          const on = this._state.cat === key;
          return '<button type="button" class="rn__chip' + (on ? ' is-on' : '') + '" data-rn-cat="' + escAttr(key) + '" aria-pressed="' + on + '"' +
            ' style="--cc:' + isSafeColor(st.bg) + ';--cc-deep:' + isSafeColor(st.c) + '">' +
            chipIc(IC[st.ic] || IC.news, on ? null : st) + escapeHTML(c.label || '') + '</button>';
        })).join('');
      const n = this._activeCount();
      const scopePill = this._isArchiveMode()
        ? '<span class="rn__sf-scope">' + escapeHTML(this._archiveEditionLabel()) + '</span>' : '';
      return '<div class="rn__sticky"><div class="rn__wrap rn__sticky-in">' +
        '<div class="rn__toolrow">' +
        '<button type="button" class="rn__searchfield" data-rn-open-search aria-label="' + escAttr(t('open_search')) + '">' + IC.searchIc + '<span class="rn__sf-ph">' + t('search_ph') + '</span>' + scopePill + '</button>' +
        '<button type="button" class="rn__iconbtn rn__filterbtn" data-rn-open-sheet aria-label="' + escAttr(t('open_filters')) + '">' + IC.filterIc + '<span class="rn__fbl">' + t('filters') + '</span>' +
        (n ? '<span class="rn__badge-n">' + n + '</span>' : '') + '</button>' +
        (n ? '<button type="button" class="rn__clearbtn" data-rn-reset aria-label="' + escAttr(t('reset')) + '" title="' + escAttr(t('reset')) + '">' + IC.close + '</button>' : '') +
        





        (this._state.membre ? this._boutonMesPrefs() : '') +
        '</div>' +
        '<div class="rn__chipswrap"><div class="rn__chips" role="group" aria-label="' + escAttr(t('cat_label')) + '">' + chips + '</div>' +
        '<span class="rn__chips-hint" aria-hidden="true">' + IC.chev + '</span></div>' +
        '</div></div>';
    }
    _resultLineHtml() {
      const t = k => this._t(k);
      const s = this._state;
      let chips = '';
      if (s.cat !== 'all') {
        const c = this._cats().find(x => String(x.slug || '').replace(/-en$/, '') === s.cat);
        chips += '<span class="rn__afilter">' + escapeHTML(c ? c.label : s.cat) + '<button type="button" data-rn-rm-cat aria-label="' + escAttr(t('remove_filter')) + '">' + IC.close + '</button></span>';
      }
      s.themes.forEach(th => {
        chips += '<span class="rn__afilter">' + escapeHTML(th) + '<button type="button" data-rn-rm-theme="' + escAttr(th) + '" aria-label="' + escAttr(t('remove_filter')) + '">' + IC.close + '</button></span>';
      });
      s.classes.forEach(k => {
        const c = classOf(k); if (!c) return;
        chips += '<span class="rn__afilter"><span class="rn__dot" style="background:' + isSafeColor(c.col) + '"></span>' + escapeHTML(c[s.lang] || c.fr) + '<button type="button" data-rn-rm-class="' + escAttr(k) + '" aria-label="' + escAttr(t('remove_filter')) + '">' + IC.close + '</button></span>';
      });
      if (s.q) chips += '<span class="rn__afilter">« ' + escapeHTML(s.q) + ' »<button type="button" data-rn-rm-q aria-label="' + escAttr(t('remove_filter')) + '">' + IC.close + '</button></span>';
       
      if (s.hideRead) chips += '<span class="rn__afilter">' + t('read_hidden') + '<button type="button" data-rn-lus aria-label="' + escAttr(t('show_read')) + '">' + IC.close + '</button></span>';

      if (this._isFiltering()) {
        if (this._state.server.loading && !this._state.server.items) {
          return '<div class="rn__resultline" aria-live="polite"><span>' + t('apply_counting') + '…</span>' + chips + this._sortToggle() + '</div>';
        }
        const total = this._filteredTotal();
        return '<div class="rn__resultline" aria-live="polite"><span><strong>' + total + '</strong> ' + (total > 1 ? t('results') : t('result')) + '</span>' + chips + this._sortToggle() + '</div>';
      }
      const totalAll = (this._state.payload.total != null) ? this._state.payload.total : this._posts().length;
      return '<div class="rn__resultline" aria-live="polite"><span><strong>' + totalAll + '</strong> ' + t('articles') + '</span></div>';
    }

    _filteredList() {
      const sv = this._state.server;
      if (sv.items) {
        let list = [...sv.items];
         
         
        if (this._state.hideRead) list = list.filter(p => !this._estLu(p));
         
         
        if (this._state.q) return list;
        list.sort(this._state.sort === 'views' ? byViews : byDate);
        return list;
      }
      return this._localFiltered();
    }
    _filteredTotal() {
      const sv = this._state.server;
      if (sv.items) return sv.total || sv.items.length;
      return this._localFiltered().length;
    }
    _filteredHtml() {
      const list = this._filteredList();
      if (!list.length) return this._state.server.loading ? this._loadingBlock() : this._emptyBlock();
      const shown = list.slice(0, this._state.shown);
      return '<section class="rn__seg" style="margin-top:20px"><div class="rn__grid' + (this._state.server.loading ? ' is-refreshing' : '') + '">' +
        this._rhythm(shown) +
        '</div></section>';
    }

    _homeHtml() {
      const t = k => this._t(k);
      const posts = [...this._posts()].sort(byDate);
      if (!posts.length) return this._emptyBlock();
      const used = new Set();
      let html = '';
      const partners = (this._state.payload.partners || []).filter(p => p && p.actif !== false);

      const banner = partners.find(p => p.type === 'bandeau');
      if (banner && !this._state.bannerClosed) html += this._partnerBanner(banner);

      const hero = posts.find(p => p.pinned) || posts.find(p => p.featured) || posts[0];
      used.add(hero._id);
      html += this._heroCard(hero);

       
      let picks = posts.filter(p => (p.pick || p.featured) && !used.has(p._id));
      picks = picks.slice(0, 4);
      if (picks.length) {
        picks.forEach(p => used.add(p._id));
        const picksHtml = picks.length >= 2 ? this._pickSlider(picks)
          : '<div class="rn__grid">' + this._wideCard(picks[0]) + '</div>';
        html += '<section class="rn__seg">' + this._segHead(t('seg_picks'), IC.star) + picksHtml + '</section>';
      }

       
       
       
       
      const medias = posts.filter(p => {
        const k = this._mediaKind(p);
        return (k === 'audio' || k === 'video') && !used.has(p._id);
      }).slice(0, 3);
      if (medias.length) {
        medias.forEach(p => used.add(p._id));
        html += '<section class="rn__seg">' + this._segHead(t('seg_media'), IC.play,
          '<button type="button" class="rn__segmore" data-rn-cat="video">' + t('all_video') + ' ' + IC.arrow + '</button>' +
          '<button type="button" class="rn__segmore" data-rn-cat="audio">' + t('all_audio') + ' ' + IC.arrow + '</button>') +
          '<div class="rn__grid">' + medias.map(p => this._mediaKind(p) === 'audio' ? this._accentCard(p) : this._videoCard(p)).join('') + '</div></section>';
      }

      const pcard = partners.find(p => p.type === 'carte');
      if (pcard) html += '<section class="rn__seg"><div class="rn__grid">' + this._partnerCard(pcard) + '</div></section>';

      const top = [...posts].sort(byViews).slice(0, 6);
      const topIds = new Set(top.map(p => p._id));
      html += '<section class="rn__seg">' + this._segHead(t('seg_top'), IC.flame) +
        '<div class="rn__toplist">' + top.map((p, i) => this._topItem(p, i + 1)).join('') + '</div></section>';

       
      const rest = posts.filter(p => !used.has(p._id) && !topIds.has(p._id)
        && !(this._state.hideRead && this._estLu(p)));
      rest.sort(this._state.sort === 'views' ? byViews : byDate);
      const sv = this._state.server;
      const chronoExtra = sv.items || [];
      const all = rest.concat(chronoExtra.filter(p => !used.has(p._id) && !topIds.has(p._id) && !rest.some(r => r._id === p._id)
        && !(this._state.hideRead && this._estLu(p))));
      const shown = all.slice(0, this._state.shown);
      if (shown.length) {
        html += '<section class="rn__seg">' + this._segHead(t('seg_all'), IC.news, this._sortToggle()) +
          '<div class="rn__grid' + (sv.loading ? ' is-refreshing' : '') + '">' + this._rhythm(shown) + '</div></section>';
      }
      this._homeRestCount = all.length;
      return html;
    }

    _loadMoreHtml() {
      const t = k => this._t(k);
      let show, count;
      if (this._isFiltering()) {
        count = this._filteredList().length;
        show = count > this._state.shown || this._state.server.hasMore;
      } else {
        count = this._homeRestCount || 0;
        show = count > this._state.shown || !!(this._state.payload && this._state.payload.hasMore) || this._state.server.hasMore;
      }
      if (show) {
        return '<button type="button" class="rn__more" data-rn-more' +
          (this._state.server.loading ? ' disabled' : '') + '>' + IC.down + t('load_more') + '</button>';
      }
       
       
       
      if (count <= 0) return '';
      return '<div class="rn__endcap">' +
        '<span class="rn__endcap-txt">' + IC.anchor + t('end_caught_up') + '</span>' +
        '<button type="button" class="rn__more rn__more--top" data-rn-top>' + IC.down + t('back_to_top') + '</button>' +
        '</div>';
    }
     
     
    _mountFab() {
      if (!this._state.payload) {
        if (this._fabEl) { this._fabEl.remove(); this._fabEl = null; }
        return;
      }
      let fab = this._fabEl;
      if (!fab || !document.body.contains(fab)) {
        fab = document.createElement('button');
        fab.type = 'button';
        fab.className = 'rn-root rn__fab is-hidden';  
        fab.addEventListener('click', () => this._showDialog(this.querySelector('.rn__sheetdlg')));
        document.body.appendChild(fab);
        this._fabEl = fab;
      }
      if (!this._onFabScroll) {
        let lastY = window.scrollY || 0;
        this._onFabScroll = () => {
          const f = this._fabEl; if (!f) return;
          const y = window.scrollY || 0;
          const up = y < lastY - 4, down = y > lastY + 4;
          if (y <= 420 || down) f.classList.add('is-hidden');
          else if (up) f.classList.remove('is-hidden');
          lastY = y;
        };
        window.addEventListener('scroll', this._onFabScroll, { passive: true });
      }
      const n = this._activeCount();
      fab.setAttribute('aria-label', escAttr(this._t('open_filters')));
      fab.innerHTML = IC.filterIc + this._t('filters') + (n ? '<span class="rn__badge-n">' + n + '</span>' : '');
    }

    _searchDialogHtml() {
      const t = k => this._t(k);
      const skScope = this._isArchiveMode()
        ? '<span class="rn__sk-scope">' + escapeHTML(this._archiveEditionLabel()) + '</span>' : '';
      return '<dialog class="rn__searchdlg" aria-label="' + escAttr(t('search')) + '"><div class="rn__search-panel">' +
        '<div class="rn__search-head">' +
        '<div class="rn__search-kick">' + FLAME_SVG + t('search') + skScope + '</div>' +
        '<button type="button" class="rn__search-x" data-rn-close-search aria-label="' + escAttr(t('close')) + '">' + IC.close + '</button>' +
        '<div class="rn__search-row">' + IC.searchIc +
        '<input type="search" data-rn-search-input placeholder="' + escAttr(t('search_ph')) + '" autocomplete="off">' +
        '</div></div>' +
        '<div class="rn__search-body" data-rn-search-body></div>' +
        '<div class="rn__search-foot"><span><kbd>↵</kbd>' + t('hint_enter') + '</span><span><kbd>Esc</kbd>' + t('hint_esc') + '</span></div>' +
        '</div></dialog>';
    }
    _sheetDialogHtml() {
      const t = k => this._t(k);
      const s = this._state;
      const cats = this._chipCats();
      const catChips = ['<button type="button" class="rn__fchip' + (s.cat === 'all' ? ' is-on' : '') + '" data-rn-cat-s="all">' + t('all') + '</button>']
        .concat(cats.map(c => {
          const key = String(c.slug || '').replace(/-en$/, '');
          return '<button type="button" class="rn__fchip' + (s.cat === key ? ' is-on' : '') + '" data-rn-cat-s="' + escAttr(key) + '">' + escapeHTML(c.label || '') + '</button>';
        })).join('');
       
       
      const themes = this._themesConfig();
      const editions = []; const edSeen = new Set();
      const themeChips = Object.keys(themes).map(g => {
        const rest = themes[g].filter(th => {
          if (this._isEdition(th)) {
            if (this._isArchiveEdition(th) && !edSeen.has(normTag(th))) { edSeen.add(normTag(th)); editions.push(th); }
            return false;
          }
          return true;
        });
        if (!rest.length) return '';
        return '<span class="rn__fsub">' + escapeHTML(g) + '</span>' +
          rest.map(th => '<button type="button" class="rn__fchip' + (s.themes.has(th) ? ' is-on' : '') + '" data-rn-theme="' + escAttr(th) + '" aria-pressed="' + s.themes.has(th) + '">' + escapeHTML(th) + '</button>').join('');
      }).join('');
      const editionChips = editions.map(ed =>
        '<button type="button" class="rn__fchip rn__fchip--ed' + (s.themes.has(ed) ? ' is-on' : '') + '" data-rn-edition="' + escAttr(ed) + '" aria-pressed="' + s.themes.has(ed) + '">' + IC.anchor + escapeHTML(ed) + '</button>'
      ).join('');
      const editionAcc = editionChips
        ? '<details class="rn__facc" open><summary><span class="rn__fic">' + IC.anchor + '</span>' + t('edition_label') + '<span class="rn__chev">' + IC.chev + '</span></summary><div class="rn__faccin rn__faccin--ed">' + editionChips + '</div></details>'
        : '';
      const classChips = CLASSES.map(c =>
        '<button type="button" class="rn__fchip rn__fchip--class' + (s.classes.has(c.key) ? ' is-on' : '') + '" data-rn-class="' + escAttr(c.key) + '" aria-pressed="' + s.classes.has(c.key) + '"><img src="' + isSafeUrl(c.flag) + '" alt="" loading="lazy" decoding="async">' + escapeHTML(c[s.lang] || c.fr) + '</button>'
      ).join('');
      return '<dialog class="rn__sheetdlg" aria-label="' + escAttr(t('filters')) + '"><div class="rn__sheet">' +
        '<div class="rn__grip" aria-hidden="true"></div>' +
        '<div class="rn__sheethead"><h2>' + IC.filterIc + t('filters') + '</h2>' +
        '<button type="button" class="rn__sheetx" data-rn-close-sheet aria-label="' + escAttr(t('close')) + '">' + IC.close + '</button></div>' +
        '<div class="rn__sheetbody">' +
         
         
         
        (((this._lus && this._lus.size) || s.hideRead)
          ? '<button type="button" class="rn__sheetlu' + (s.hideRead ? ' is-on' : '') + '" data-rn-lus aria-pressed="' + (s.hideRead ? 'true' : 'false') + '">' +
            IC.eye + '<span class="txt">' + t('hide_read') + '</span>' +
            '<span class="rn__switch" aria-hidden="true"><i></i></span></button>'
          : '') +
        '<details class="rn__facc" open><summary><span class="rn__fic">' + IC.grid + '</span>' + t('cat_label') + '<span class="rn__chev">' + IC.chev + '</span></summary><div class="rn__faccin">' + catChips + '</div></details>' +
        '<details class="rn__facc" open><summary><span class="rn__fic">' + IC.tag + '</span>' + t('themes_label') + '<span class="rn__chev">' + IC.chev + '</span></summary><div class="rn__faccin">' + themeChips + '</div></details>' +
        editionAcc +
        '<details class="rn__facc" open><summary><span class="rn__fic">' + IC.boat + '</span>' + t('classes_label') + '<span class="rn__chev">' + IC.chev + '</span></summary><div class="rn__faccin">' + classChips + '</div></details>' +
        '</div>' +
        (ESPACE_LIVE ? '<div class="rn__sheetespace"><button type="button" class="rn__ghost" data-rn-espace-filters>' + t('apply_my_filters') + '</button></div>' : '') +
        '<div class="rn__sheetfoot"><button type="button" class="rn__ghost" data-rn-reset>' + t('reset') + '</button>' +
        '<button type="button" class="rn__apply' + (this._applyCounting() ? ' is-counting' : '') + '" data-rn-close-sheet>' + this._applyLabel() + '</button></div>' +
        '</div></dialog>';
    }
    _applyLabel() {
      const t = k => this._t(k);
      if (!this._isFiltering()) return t('apply');
       
       
      if (this._state.server.loading) return t('apply_counting');
      const n = this._filteredTotal();
      if (!n) return t('apply_none');
      return t('apply_n').replace('{n}', String(n)).replace('{s}', n > 1 ? 's' : '');
    }
    _applyCounting() { return !!(this._state.server.loading && this._isFiltering()); }
     
     
     
     
    _warmEditions() {
      if (this._warmedEditions) return;
      const eds = [...new Set([...this.querySelectorAll('[data-rn-edition]')].map(c => c.dataset.rnEdition).filter(Boolean))];
      if (!eds.length) return;
      this._warmedEditions = true;
      this._emit('rn-warm', { editions: eds });
    }

     
    _suggestPosts() {
      const sv = this._state.server;
      if (this._isArchiveMode() && sv.items && sv.items.length) return sv.items;
      return this._posts();
    }
    _skippersInNews(src) {
      const byName = new Map();
      src.forEach(p => (p.skippers || []).forEach(name => {
        const d = p.publishedDate || '';
        const cur = byName.get(name);
        if (!cur) byName.set(name, { name, count: 1, latest: d });
        else { cur.count += 1; if (d > cur.latest) cur.latest = d; }
      }));
      const catalog = this._state.payload.skippers || [];
      const out = [...byName.values()].sort((a, b) => (a.latest < b.latest ? 1 : -1));
      out.forEach(s => {
        const ref = catalog.find(k => norm(k.name) === norm(s.name));
        if (ref) { s.photo = ref.photo; s.classKey = ref.classKey; }
      });
      return out;
    }
    _topicsInNews(src) {
       
      const n = t => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      const active = this._archiveEditionLabel();
      const excl = new Set(active ? [n(active)] : ['edition2026', '2026edition']);
      const seen = new Map();  
      src.forEach(p => (p.themes || []).forEach(th => {
        if (excl.has(n(th))) return;
        const k = norm(th);
        const cur = seen.get(k);
        if (cur) cur.n += 1; else seen.set(k, { label: th, n: 1 });
      }));
      return [...seen.values()].sort((a, b) => b.n - a.n);  
    }
    _renderSuggestions(q) {
      const body = this.querySelector('[data-rn-search-body]');
      if (!body) return;
      const t = k => this._t(k);
      const nq = norm(q);
      const src = this._suggestPosts();
      const skippers = this._skippersInNews(src);
      const topics = this._topicsInNews(src);
      const sgSkipper = s => {
        const c = classOf(s.classKey);
        const init = String(s.name || '').split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
         
        const ava = s.photo
          ? '<span class="rn__sgava"><img src="' + rnImg(s.photo, 76, 76) + '" alt="" loading="lazy" decoding="async"></span>'
          : '<span class="rn__sgava" style="background:' + isSafeColor(c ? c.col : '#5DBFC0') + '">' + escapeHTML(init) + '</span>';
        const nArts = t('sg_n_articles').replace('{n}', String(s.count)).replace('{s}', s.count > 1 ? 's' : '');
        const meta = (c ? '<span class="rn__sgdot" style="background:' + isSafeColor(c.col) + '"></span>' + escapeHTML(c[this._state.lang] || c.fr) + ' · ' : '') + escapeHTML(nArts);
        return '<button type="button" class="rn__sgitem rn__sgitem--sk" data-rn-sg-q="' + escAttr(s.name) + '">' + ava +
          '<span class="rn__sgtxt"><span class="rn__sgtitle">' + escapeHTML(s.name) + '</span>' +
          '<span class="rn__sgmeta">' + meta + '</span></span></button>';
      };
      const sgTopic = th => '<button type="button" class="rn__sgtopic" data-rn-sg-theme="' + escAttr(th.label) + '">' + escapeHTML(th.label) + '<b>' + th.n + '</b></button>';
      const label = (ic, txt) => '<div class="rn__sglabel"><span class="rn__sgtile">' + ic + '</span>' + txt + '</div>';
      const sgArticle = p => {
        const av = p.cover
          ? '<span class="rn__sgava"><img src="' + rnImg(p.cover, 76, 76) + '" alt="" loading="lazy" decoding="async"></span>'
          : '<span class="rn__sgava" style="background:#DCF2EF;color:#0B6E6B">' + IC.news + '</span>';
        const meta = [p.catLabel, this._relDate(p.publishedDate)].filter(Boolean).join(' · ');
        return '<button type="button" class="rn__sgitem" data-rn-sg-url="' + escAttr(isSafeUrl(p.url, '')) + '">' + av +
          '<span class="rn__sgtxt"><span class="rn__sgtitle">' + escapeHTML(p.title || '') + '</span>' +
          '<span class="rn__sgmeta">' + escapeHTML(meta) + '</span></span></button>';
      };
       
      const scope = this._isArchiveMode()
        ? '<div class="rn__sgscope">' + IC.anchor + escapeHTML(t('sg_scope').replace('{y}', this._archiveEditionLabel())) + '</div>' : '';
      const skGrid = list => '<div class="rn__sggrid">' + list.map(sgSkipper).join('') + '</div>';
      if (!nq) {
        body.innerHTML = scope +
          label(IC.news, t('latest_hl')) + src.slice(0, 3).map(sgArticle).join('') +
          (skippers.length ? label(IC.anchor, t('skippers_hl')) + skGrid(skippers.slice(0, 6)) : '') +
          (topics.length ? label(IC.tag, t('topics_hl')) + '<div class="rn__sgchips">' + topics.slice(0, 8).map(sgTopic).join('') + '</div>' : '');
        return;
      }
       
       
      const mots = motsDe(q);
      const scored = [];
      src.forEach(p => { const sc = scorePost(p, mots, nq); if (sc) scored.push([p, sc]); });
      scored.sort((a, b) => (b[1].hits - a[1].hits) || (b[1].score - a[1].score) || byDate(a[0], b[0]));
      const arts = scored.slice(0, 5).map(x => x[0]);
       
      const sks = skippers.filter(s => mots.length ? mots.every(m => norm(s.name).includes(m)) : norm(s.name).includes(nq)).slice(0, 4);
       
      const ths = topics.filter(th => mots.length ? mots.some(m => norm(th.label).includes(m)) : norm(th.label).includes(nq)).slice(0, 6);
      let html = scope;
      if (arts.length) html += label(IC.news, t('sg_articles')) + arts.map(sgArticle).join('');
      if (sks.length) html += label(IC.anchor, t('sg_skippers')) + skGrid(sks);
      if (ths.length) html += label(IC.tag, t('sg_topics')) + '<div class="rn__sgchips">' + ths.map(sgTopic).join('') + '</div>';
      body.innerHTML = (arts.length || sks.length || ths.length) ? html
        : scope + '<div class="rn__sgempty">' + t('sg_empty').replace('{q}', escapeHTML(q)) + '</div>';
    }

     
    _scrollTop() {
      try {
        const top = this.getBoundingClientRect().top + window.scrollY;
        const target = Math.max(0, top - 8);
        if (window.scrollY > target + 80) {
          window.scrollTo({ top: target, behavior: this._reduced() ? 'auto' : 'smooth' });
        }
      } catch (e) {   }
    }
     
     
     
     
    _centerActiveChip() {
      try {
        const strip = this._content && this._content.querySelector('.rn__chips');
        const cat = this._state.cat;
        if (!strip || strip.scrollWidth <= strip.clientWidth + 4) { this._lastCenteredCat = cat; return; }
        const changed = cat !== this._lastCenteredCat;
        this._lastCenteredCat = cat;
        let left = 0;  
        const active = cat !== 'all' && strip.querySelector('.rn__chip.is-on');
        if (active) {
          const sr = strip.getBoundingClientRect(), ar = active.getBoundingClientRect();
          const max = strip.scrollWidth - strip.clientWidth;
          left = Math.max(0, Math.min(strip.scrollLeft + (ar.left - sr.left) - (strip.clientWidth - ar.width) / 2, max));
        }
         
         
        try { strip.scrollTo({ left, behavior: (changed && !this._reduced()) ? 'smooth' : 'auto' }); }
        catch (e) { strip.scrollLeft = left; }
      } catch (e) {   }
    }
    _filterChange() {
       
       
      this._sheetDirty = true;
      this._state.shown = PAGE_STEP;
      this._state.server = { items: null, hasMore: false, cursor: null, total: 0, loading: false };
      if (this._isFiltering()) this._requestServer('replace');
      this._emitState();
      this._render();
      this._scrollTop();
    }
    _resetAll() {
      this._sheetDirty = true;
      const s = this._state;
      s.cat = 'all'; s.themes.clear(); s.classes.clear(); s.q = ''; s.shown = PAGE_STEP;
      s.server = { items: null, hasMore: false, cursor: null, total: 0, loading: false };
      this._emitState();
      this._render();
    }
    _loadMore() {
      const s = this._state;
      const localAvail = this._isFiltering() ? this._filteredList().length : (this._homeRestCount || 0);
      if (s.shown < localAvail) { s.shown += PAGE_STEP; this._render(); return; }
      if ((s.payload && s.payload.hasMore) || s.server.hasMore) {
        s.shown += PAGE_STEP;
        s.server.loading = true;
        this._requestServer(s.server.items ? 'append' : 'loadmore-beyond');
        this._render();
      }
    }

    _teardownRendered() {
       
       
      if (this._searchTimer) { clearTimeout(this._searchTimer); this._searchTimer = null; }
      this._teardown.forEach(fn => { try { fn(); } catch (e) {   } });
      this._teardown = [];
    }
    _on(el, evt, fn, opts) {
      el.addEventListener(evt, fn, opts);
      this._teardown.push(() => el.removeEventListener(evt, fn, opts));
    }
    _wire() {
      const root = this._content;
      const searchDlg = root.querySelector('.rn__searchdlg');
      const sheetDlg = root.querySelector('.rn__sheetdlg');

       
       
       
      if (!this._primed) this._primed = new Set();
      const prime = (e) => {
        const link = e.target && e.target.closest && e.target.closest('[data-rn-link]');
        if (!link) return;
        const url = link.getAttribute('href') || link.getAttribute('data-url') || '';
        const slug = url.split('?')[0].split('/').filter(Boolean).pop() || '';
        if (!slug || this._primed.has(slug)) return;
        this._primed.add(slug);
        this._emit('rn-prime', { slug });
      };
      this._on(root, 'mouseover', prime, { passive: true });
      this._on(root, 'touchstart', prime, { passive: true });

      this._on(root, 'click', (e) => {
        const link = e.target.closest('[data-rn-link]');
        if (link) {
          e.preventDefault();
          e.stopPropagation();
           
           
          if (this._pslSwipedAt && Date.now() - this._pslSwipedAt < 400) { this._pslSwipedAt = 0; return; }
           
          const url = link.getAttribute('href') || link.getAttribute('data-url') || '';
          const now = Date.now();
          if (this._lastNav && this._lastNav.url === url && now - this._lastNav.t < 1200) return;
          this._lastNav = { url, t: now };
          this._markNavLoading(link.closest('.rn__card, .rn__hero, .rn__topitem, .rn__psl-slide'));
          marquerLu(slugDeUrl(url));   
          this._saveRestorePoint(url);  
          this._emit('rn-navigate', { url });
          return;
        }
        const partner = e.target.closest('[data-rn-partner]');
        if (partner) {
          e.preventDefault();
          e.stopPropagation();
          const purl = partner.getAttribute('href') || '';
          const pnow = Date.now();
          if (this._lastNav && this._lastNav.url === purl && pnow - this._lastNav.t < 1200) return;
          this._lastNav = { url: purl, t: pnow };
          this._emit('rn-partner', { url: purl, annonceur: partner.getAttribute('data-rn-partner') || '' });
          return;
        }
        const more = e.target.closest('[data-rn-classmore]');
        if (more) {
          const extra = more.parentElement && more.parentElement.querySelector('.rn__classtag-extra');
          if (extra) { extra.hidden = false; more.setAttribute('aria-expanded', 'true'); more.hidden = true; }
          return;
        }
        const el = e.target.closest('[data-rn-cat],[data-rn-cat-s],[data-rn-theme],[data-rn-edition],[data-rn-class],[data-rn-sort],[data-rn-lus],[data-rn-rm-cat],[data-rn-rm-theme],[data-rn-rm-class],[data-rn-rm-q],[data-rn-reset],[data-rn-mes-prefs],[data-rn-more],[data-rn-top],[data-rn-open-search],[data-rn-open-sheet],[data-rn-close-search],[data-rn-close-sheet],[data-rn-close-banner],[data-rn-sg-q],[data-rn-sg-theme],[data-rn-sg-url]');
        if (!el) return;
        const d = el.dataset;
        if (d.rnMesPrefs !== undefined) {
          const st = this._state;
          if (st.facettesEnCours) return;
           
          if (st.facettes) {
            const neuves = st.facettes.filter(x => !st.themes.has(x));
            if (!neuves.length) { this._flashMesPrefs(this._t('mesprefs_deja')); this._render(); return; }
            neuves.forEach(x => st.themes.add(x));
            this._filterChange();
            return;
          }
          st.facettesEnCours = true;
          this._render();
          this._emit('rn-mes-preferences', {});
          

          clearTimeout(this._mesPrefsAttente);
          this._mesPrefsAttente = setTimeout(() => {
            if (!this._state.facettesEnCours) return;
            this._state.facettesEnCours = false;
            this._flashMesPrefs(this._t('mesprefs_ko'));
            this._render();
          }, 8000);
          return;
        }
        if (d.rnCat !== undefined) { this._state.cat = this._state.cat === d.rnCat ? 'all' : d.rnCat; this._filterChange(); }
        else if (d.rnCatS !== undefined) { this._state.cat = this._state.cat === d.rnCatS ? 'all' : d.rnCatS; this._filterChange(); }
        else if (d.rnTheme !== undefined) { const th = d.rnTheme; this._state.themes.has(th) ? this._state.themes.delete(th) : this._state.themes.add(th); this._filterChange(); }
        else if (d.rnEdition !== undefined) {
           
           
          const ed = d.rnEdition; const wasOn = this._state.themes.has(ed);
          [...this._state.themes].forEach(th => { if (this._isEdition(th)) this._state.themes.delete(th); });
          if (!wasOn) this._state.themes.add(ed);
          this._filterChange();
        }
        else if (d.rnClass !== undefined) { const k = d.rnClass; this._state.classes.has(k) ? this._state.classes.delete(k) : this._state.classes.add(k); this._filterChange(); }
        else if (d.rnSort !== undefined) {
           
           
           
           
          const y = window.scrollY || window.pageYOffset || 0;
          this._state.sort = d.rnSort;
          if (this._isFiltering()) this._requestServer('replace');
          this._emitState();
          this._render();
          requestAnimationFrame(() => { try { window.scrollTo(0, y); } catch (e) {   } });
          setTimeout(() => { try { window.scrollTo(0, y); } catch (e) {   } }, 60);
        }
        else if (d.rnLus !== undefined) {
           
           
           
           
          const dlgOuvert = !!this.querySelector('dialog[open]');
          const y2 = window.scrollY || window.pageYOffset || 0;
          const on = !this._state.hideRead;
          this._state.hideRead = on;
          try { localStorage.setItem('rnMasquerLus', on ? '1' : '0'); } catch (e2) {   }
           
           
           
          this.querySelectorAll('[data-rn-lus]').forEach(b => {
            b.classList.toggle('is-on', on);
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
            const l = b.querySelector('.lbl');
            if (l) l.textContent = this._t(on ? 'show_read' : 'hide_read');
          });
          this._render();
          if (!dlgOuvert) {
            requestAnimationFrame(() => { try { window.scrollTo(0, y2); } catch (e2) {   } });
            setTimeout(() => { try { window.scrollTo(0, y2); } catch (e2) {   } }, 60);
          }
        }
        else if (d.rnRmCat !== undefined) { this._state.cat = 'all'; this._filterChange(); }
        else if (d.rnRmTheme !== undefined) { this._state.themes.delete(d.rnRmTheme); this._filterChange(); }
        else if (d.rnRmClass !== undefined) { this._state.classes.delete(d.rnRmClass); this._filterChange(); }
        else if (d.rnRmQ !== undefined) { this._state.q = ''; this._filterChange(); }
        else if (d.rnEspaceFilters !== undefined) { this._emit('rn-espace-filters', {}); }
        else if (d.rnReset !== undefined) { this._resetAll(); }
        else if (d.rnMore !== undefined) { this._loadMore(); }
        else if (d.rnTop !== undefined) {
          try {
            const top = Math.max(0, this.getBoundingClientRect().top + window.scrollY - 8);
            window.scrollTo({ top, behavior: this._reduced() ? 'auto' : 'smooth' });
          } catch (x) {   }
        }
        else if (d.rnCloseBanner !== undefined) { this._state.bannerClosed = true; this._render(); }
        else if (d.rnOpenSearch !== undefined) { this._openSearch(); }
        else if (d.rnOpenSheet !== undefined) { this._showDialog(sheetDlg); this._warmEditions(); }
        else if (d.rnCloseSearch !== undefined) { this._dismissDialog(searchDlg); }
        else if (d.rnCloseSheet !== undefined) { this._dismissDialog(sheetDlg); }
        else if (d.rnSgQ !== undefined) { this._state.q = d.rnSgQ; this._dismissDialog(searchDlg); this._filterChange(); }
        else if (d.rnSgTheme !== undefined) { this._state.themes.add(d.rnSgTheme); this._dismissDialog(searchDlg); this._filterChange(); }
        else if (d.rnSgUrl !== undefined) { this._dismissDialog(searchDlg); this._saveRestorePoint(d.rnSgUrl); this._emit('rn-navigate', { url: d.rnSgUrl }); }
      });

      const searchInput = root.querySelector('[data-rn-search-input]');
      if (searchInput) {
        this._on(searchInput, 'input', () => {
          clearTimeout(this._searchTimer);
          this._searchTimer = setTimeout(() => this._renderSuggestions(searchInput.value), 160);
        });
        this._on(searchInput, 'keydown', (e) => {
          if (e.key === 'Enter') {
            this._state.q = searchInput.value.trim();
            this._dismissDialog(searchDlg);
            this._filterChange();
          }
        });
      }
      this._wireSheetDrag(root, sheetDlg);
       
      if (sheetDlg) this._on(sheetDlg, 'close', () => { this._render(); this._unlockScroll(); });
      if (searchDlg) this._on(searchDlg, 'close', () => { if (this._renderPending) this._render(); this._unlockScroll(); });
      if (searchDlg) this._on(searchDlg, 'click', (e) => { if (e.target === searchDlg) this._dismissDialog(searchDlg); });
      if (sheetDlg) this._on(sheetDlg, 'click', (e) => { if (e.target === sheetDlg) this._dismissDialog(sheetDlg); });

       
      this._initPicksSlider();

      const sentinel = root.querySelector('.rn__sentinel');
      const sticky = root.querySelector('.rn__sticky');
      if (sentinel && sticky && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(([entry]) => {
          sticky.classList.toggle('is-stuck', !entry.isIntersecting);
        }, { threshold: 0 });
        io.observe(sentinel);
        this._teardown.push(() => io.disconnect());
      }

      const chipsEl = root.querySelector('.rn__chips');
      const chipsWrap = root.querySelector('.rn__chipswrap');
      if (chipsEl && chipsWrap) {
        const updHint = () => {
          const more = chipsEl.scrollWidth - chipsEl.clientWidth - chipsEl.scrollLeft > 4;
          chipsWrap.classList.toggle('is-scrollable', more);
        };
        this._on(chipsEl, 'scroll', updHint, { passive: true });
        updHint();
        setTimeout(updHint, 140);  
      }

      this._startTypewriter();
       
    }
     
     
    _initPicksSlider() {
      const root = this._content.querySelector('[data-rn-psl-root]');
      if (!root) return;
      const slides = Array.from(root.querySelectorAll('[data-rn-psl-slide]'));
      const navs = Array.from(root.querySelectorAll('[data-rn-psl]'));
      if (slides.length < 2) return;
      const AUTO_MS = 6000;
      let idx = 0, timer = null;
      const restartBar = () => {
        const prog = root.querySelector('.rn__psl-nav.is-on .rn__psl-prog');
        if (prog) { prog.style.animation = 'none'; void prog.offsetWidth; prog.style.animation = ''; }
      };
      const go = (i) => {
        idx = ((i % slides.length) + slides.length) % slides.length;
        slides.forEach((sl, j) => sl.classList.toggle('is-on', j === idx));
        navs.forEach(n => {
          const on = Number(n.getAttribute('data-rn-psl')) === idx;
          n.classList.toggle('is-on', on);
          n.setAttribute('aria-pressed', String(on));
        });
        restartBar();
      };
      const arm = () => {
        if (timer) { clearTimeout(timer); timer = null; }
        if (this._reduced()) return;  
        timer = setTimeout(() => { go(idx + 1); arm(); }, AUTO_MS);
      };
      const pause = () => { if (timer) { clearTimeout(timer); timer = null; } root.classList.add('is-paused'); };
      const resume = () => { root.classList.remove('is-paused'); restartBar(); arm(); };
      this._on(root, 'click', (e) => {
        const btn = e.target.closest('[data-rn-psl]');
        if (btn) { go(Number(btn.getAttribute('data-rn-psl')) || 0); arm(); }
      });
      this._on(root, 'mouseenter', pause);
      this._on(root, 'mouseleave', resume);
      this._on(root, 'focusin', pause);
      this._on(root, 'focusout', resume);
       
       
       
       
      const stage = root.querySelector('.rn__psl-stage');
      if (stage) {
        let sx = 0, sy = 0, dx = 0, dy = 0, active = false;
        this._on(stage, 'touchstart', (e) => {
          if (!e.touches || !e.touches.length) return;
          sx = e.touches[0].clientX; sy = e.touches[0].clientY; dx = 0; dy = 0; active = true;
          pause();
        }, { passive: true });
        this._on(stage, 'touchmove', (e) => {
          if (!active || !e.touches || !e.touches.length) return;
          dx = e.touches[0].clientX - sx; dy = e.touches[0].clientY - sy;
           
          if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) && e.cancelable) e.preventDefault();
        }, { passive: false });
        const endSwipe = () => {
          if (!active) return;
          active = false;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            go(idx + (dx < 0 ? 1 : -1));
            this._pslSwipedAt = Date.now();  
          }
          arm();
        };
        this._on(stage, 'touchend', endSwipe);
        this._on(stage, 'touchcancel', endSwipe);
      }
      arm();
      this._teardown.push(() => { if (timer) clearTimeout(timer); });
    }
     
     
     
     
    _showDialog(dlg) {
      if (!dlg || dlg.open) return false;
      if (typeof dlg.showModal === 'function') { try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); } }
      else dlg.setAttribute('open', '');
      this._lockScroll();
      return true;
    }
    _lockScroll() {
      if (this._scrollLock != null) return;
      const y = window.scrollY || window.pageYOffset || 0;
      this._scrollLock = y;
      const b = document.body;
      b.style.position = 'fixed'; b.style.top = -y + 'px';
      b.style.left = '0'; b.style.right = '0'; b.style.width = '100%';
    }
    _unlockScroll() {
      if (this._scrollLock == null) return;
      const b = document.body, y = this._scrollLock;
      b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.width = '';
      this._scrollLock = null;
      try { window.scrollTo(0, y); } catch (e) {   }
    }
     
     
    _dismissDialog(dlg) {
      if (!dlg) return;
      try { if (dlg.open) dlg.close(); } catch (e) { dlg.removeAttribute('open'); }
       
       
      const isSheet = dlg.classList.contains('rn__sheetdlg');
      if (isSheet) this._render();
      else if (this._renderPending) this._render();
      this._unlockScroll();
       
       
       
       
       
       
       
      if (isSheet && this._sheetDirty) requestAnimationFrame(() => { try { this._scrollTop(); } catch (e) {   } });
      this._sheetDirty = false;
    }
    _wireSheetDrag(root, sheetDlg) {
      if (!sheetDlg) return;
      const sheet = sheetDlg.querySelector('.rn__sheet');
      const zones = [sheetDlg.querySelector('.rn__grip'), sheetDlg.querySelector('.rn__sheethead')].filter(Boolean);
      if (!sheet || !zones.length) return;
      let startY = 0, dy = 0, dragging = false;
      const start = (e) => { if (!e.touches || !e.touches.length) return; dragging = true; startY = e.touches[0].clientY; dy = 0; sheet.style.transition = 'none'; };
      const move = (e) => {
        if (!dragging || !e.touches || !e.touches.length) return;
        dy = Math.max(0, e.touches[0].clientY - startY);  
        if (dy > 6) { sheet.style.transform = 'translateY(' + dy + 'px)'; if (e.cancelable) e.preventDefault(); }
      };
      const end = () => {
        if (!dragging) return;
        dragging = false;
        sheet.style.transition = '';
        if (dy > 90) this._dismissDialog(sheetDlg);  
        else sheet.style.transform = 'translateY(0)';  
      };
      zones.forEach(z => {
        this._on(z, 'touchstart', start, { passive: true });
        this._on(z, 'touchmove', move, { passive: false });
        this._on(z, 'touchend', end);
        this._on(z, 'touchcancel', end);
      });
    }
    _syncSheetControls() {
      const root = this._content; const s = this._state;
      if (!root) return;
      root.querySelectorAll('[data-rn-cat-s]').forEach(c => c.classList.toggle('is-on', s.cat === c.dataset.rnCatS));
      root.querySelectorAll('[data-rn-theme]').forEach(c => c.classList.toggle('is-on', s.themes.has(c.dataset.rnTheme)));
      root.querySelectorAll('[data-rn-edition]').forEach(c => c.classList.toggle('is-on', s.themes.has(c.dataset.rnEdition)));
      root.querySelectorAll('.rn__fchip[data-rn-class]').forEach(c => c.classList.toggle('is-on', s.classes.has(c.dataset.rnClass)));
      const apply = root.querySelector('.rn__apply');
      if (apply) {
        apply.textContent = this._applyLabel();
        apply.classList.toggle('is-counting', this._applyCounting());
      }
    }
    _openSearch() {
      const dlg = this.querySelector('.rn__searchdlg');
      if (!this._showDialog(dlg)) return;
      this._renderSuggestions('');
       
       
      const input = dlg.querySelector('[data-rn-search-input]');
      if (input) { try { input.focus({ preventScroll: true }); } catch (e) { try { input.focus(); } catch (e2) {   } } }
    }

     
    _startTypewriter() {
      const field = this.querySelector('.rn__searchfield');
      const ph = this.querySelector('.rn__sf-ph');
      if (!field || !ph || this._reduced()) return;
      const base = (DICT[this._state.lang] || DICT.fr).search_hints || [];
       
       
       
      let reels = [];
      try {
        const src = this._posts();
        if (src.length) {
          const habille = (l) => {
            l = String(l || '').trim();
            if (!l) return '';
             
            if (!/\s/.test(l) && /^[a-zà-ÿ]/.test(l) && /s$/i.test(l)) return (this._state.lang === 'en' ? 'The ' : 'Les ') + l.toLowerCase();
            return l.charAt(0).toUpperCase() + l.slice(1);
          };
           
           
           
           
          const GRANDS_NOMS = ['Charlie Dalin', 'Guirec Soudée', 'Charles Caudrelier', 'Francis Joyon'];
          const dansActu = this._skippersInNews(src);
          const connus = GRANDS_NOMS.filter(n => dansActu.some(s => norm(s.name) === norm(n)));
          const sk = (connus.length ? connus : dansActu.map(s => s.name)).slice(0, 2);
          const su = this._topicsInNews(src).slice(0, 2).map(x => habille(x.label)).filter(Boolean);
          reels = [sk[0], su[0], sk[1], su[1]].filter(Boolean);
        }
      } catch (e) {   }
       
      const hints = [];
      for (let i = 0; hints.length < 5 && (i < reels.length || i < base.length); i++) {
        if (reels[i] && !hints.includes(reels[i])) hints.push(reels[i]);
        if (hints.length < 5 && base[i] && !hints.includes(base[i])) hints.push(base[i]);
      }
      if (!hints.length) return;
      field.classList.add('is-typing');
      let hi = 0, ci = 0, deleting = false, timer = null;
       
       
      const tick = () => {
        const word = hints[hi];
        if (!deleting) {
          ci++;
          ph.textContent = word.slice(0, ci);
          if (ci >= word.length) { deleting = true; timer = setTimeout(tick, 2100); return; }
          timer = setTimeout(tick, 70 + Math.random() * 50);
        } else {
          ci--;
          ph.textContent = word.slice(0, ci);
          if (ci <= 0) { deleting = false; hi = (hi + 1) % hints.length; timer = setTimeout(tick, 650); return; }
          timer = setTimeout(tick, 36);
        }
      };
      timer = setTimeout(tick, 1400);
      this._teardown.push(() => { if (timer) clearTimeout(timer); field.classList.remove('is-typing'); });
    }
  }

  customElements.define('rdr-news', RdrNews);
})();
})();
;(function(){
(function () {
  'use strict';

   
   
  






  

  var ESPACE_LIVE = true;

  

  var RPH_VOILES = "<path d=\"M74.69,649.22c-21.75,37.99-35.3,78.52-41.21,119.49h85.66c-16.85,27.16-29.79,56.99-38.25,88.81-9.32,35.07-12.73,70.78-10.43,105.97h66.1c-2.45-29.08-.06-59.04,7.85-88.81,10.63-40,30.18-76.02,56.85-105.97h-78.88c5.23-26.14,14.63-51.53,28.24-75.29,17.79-31.06,41.53-57.29,69.6-77.59v-41.9h-86.94c-22.69,21.89-42.46,47.11-58.6,75.29Z\"/><path d=\"M277.39,654.75c-20.76,36.24-33.79,74.88-39.62,113.96h66.77c5.25-27.72,15.04-55.03,29.81-80.81,20.24-35.34,47.55-64.03,79.09-85.37v-28.59h-70.64c-25.35,22.63-47.56,49.67-65.4,80.81Z\"/><path d=\"M480.11,855.06c-19.76,34.5-32.26,71.25-38.02,108.44h44.49c5.37-29.62,15.72-58.81,31.49-86.34,22.02-38.46,52.39-70.14,88.58-93.22v-15.22h-53.84c-28.84,23.79-53.52,52.83-72.71,86.34Z\"/><path d=\"M682.81,860.58c-18.76,32.76-30.69,67.62-36.36,102.91h22.18c5.48-31.51,16.41-62.59,33.17-91.86,24.54-42.86,58.67-76.72,98.08-100.49v-2.43h-35.79c-32.14,23.99-60.03,54.8-81.27,91.87Z\"/><path d=\"M151.4,515.61c20.24-20.4,43.54-36.58,68.82-48.2v-88.25h-69.78c-27.73,15.56-53.48,35.08-76.54,58.32-18.07,18.21-33.68,37.97-46.9,58.84v77.61h82c10.82-21.01,24.94-40.72,42.4-58.32Z\"/><path d=\"M274.87,445.3c-21.64,21.81-39.94,46.09-54.65,72.2v56.43h69.65c11.8-24.18,27.54-46.52,47-66.14,22.39-22.57,48.35-40.2,76.57-52.48v-76.16h-45.9c-33.96,16.31-65.28,38.53-92.67,66.14Z\"/><path d=\"M475.84,647.89c-26.33,26.54-47.08,56.59-62.4,88.64v32.18h57.56c12.33-26.79,29.45-51.88,51.34-73.95,24.87-25.08,53.62-43.92,84.32-56.56v-64.27h-17.34c-41.39,15.82-80.2,40.41-113.48,73.95Z\"/><path d=\"M145.53,339.18c23.79-13.84,49.07-22.76,74.69-27.11v-127.69h31.67c21.25-15.04,45.17-26.38,71-33.35,19.37-5.23,38.86-7.73,58.02-7.73,10.97,0,21.83.87,32.52,2.46V12.07c-41.29-3.79-83.35-.25-124.59,10.89-24,6.48-46.95,15.34-68.63,26.35v135.07h-37.68c-35.24,7.65-69.91,20.85-102.77,39.98-18.87,10.98-36.49,23.53-52.77,37.44v117.37h68.07c14.65-15.49,31.56-28.98,50.46-39.98Z\"/><path d=\"M413.44,486.4v87.53h39.11c18.51-23.17,41.42-43.37,68.46-59.11,26.88-15.65,55.87-25.8,85.65-30.43v-89.26c-45.07,5.12-89.03,19.6-129.49,43.14-23.58,13.73-44.86,29.95-63.73,48.13Z\"/><path d=\"M428.52,379.16c24.68-19.54,53.24-34.06,84.47-42.49,20.32-5.49,40.76-8.11,60.86-8.11,11.06,0,22.01.84,32.81,2.39v-111.27c-39.89-3.88-81.1-.78-122.03,10.27-25,6.75-48.79,16.24-71.18,28.04v-68.55c-46.24,5.03-92.18,19.59-134.97,44.49-21.25,12.37-40.69,26.7-58.25,42.62v102.61h53.4c16.61-19.23,36.54-36.1,59.65-49.54,25.51-14.85,52.67-24.31,80.17-28.75v78.3h15.08Z\"/><path d=\"M284.7,860.38c-9.07,34.12-12.3,68.88-9.98,103.11h43.92c-2.41-30.41.34-61.34,8.4-91.67,10.4-39.12,28.9-73.91,53.13-103.11h-54.64c-17.97,27.45-31.94,58.2-40.84,91.67Z\"/>";

  var STYLE_ID = 'rph-styles';
  var STYLE_ID_ART = 'rph-article-polish';
  var CIRC = 119.4;  

  




  var ART_CSS = [
    



    'html.rph-go .rph-corps,html.rph-go .wixui-rph-corps{opacity:1 !important}',
    '.wixui-rich-content-viewer{--rdr-navy:#0A1A35;--rdr-teal:#5DBFC0;--rdr-teal-deep:#00676E;--rdr-amber:#FCF150;--rdr-ink:#16233A;--rdr-ink-3:#7B8AA0}',
     
    '.wixui-rich-content-viewer p{line-height:1.75;margin:0 0 20px}',
    '.wixui-rich-content-viewer span[style*="rgb(0, 0, 0)"],.wixui-rich-content-viewer span[style*="#0E111D"],.wixui-rich-content-viewer span[style*="rgb(43, 43, 43)"]{color:var(--rdr-ink) !important}',
    



    '.wixui-rich-content-viewer h2,.wixui-rich-content-viewer h4,.wixui-rich-content-viewer h5,.wixui-rich-content-viewer h6{font-family:\'Varien\',\'Archivo Black\',Impact,sans-serif !important;font-style:italic !important;font-weight:400 !important;text-transform:uppercase;color:var(--rdr-teal-deep) !important;line-height:1.14;letter-spacing:.005em;margin:38px 0 14px}',
    '.wixui-rich-content-viewer h2{font-size:clamp(21px,3vw,27px)}',
    '.wixui-rich-content-viewer h4,.wixui-rich-content-viewer h5{font-size:20px}',
    '.wixui-rich-content-viewer h6{font-size:16px;letter-spacing:.04em}',
    '.wixui-rich-content-viewer h2 span,.wixui-rich-content-viewer h4 span,.wixui-rich-content-viewer h5 span,.wixui-rich-content-viewer h6 span{font-family:inherit !important}',
    '.wixui-rich-content-viewer h2 span[style*="rgb(0, 0, 0)"],.wixui-rich-content-viewer h4 span[style*="rgb(0, 0, 0)"],.wixui-rich-content-viewer h5 span[style*="rgb(0, 0, 0)"],.wixui-rich-content-viewer h6 span[style*="rgb(0, 0, 0)"],' +
    '.wixui-rich-content-viewer h2 span[style*="#0E111D"],.wixui-rich-content-viewer h4 span[style*="#0E111D"],.wixui-rich-content-viewer h5 span[style*="#0E111D"],.wixui-rich-content-viewer h6 span[style*="#0E111D"],' +
    '.wixui-rich-content-viewer h2 span[style*="rgb(43, 43, 43)"],.wixui-rich-content-viewer h4 span[style*="rgb(43, 43, 43)"],.wixui-rich-content-viewer h5 span[style*="rgb(43, 43, 43)"],.wixui-rich-content-viewer h6 span[style*="rgb(43, 43, 43)"]{color:var(--rdr-teal-deep) !important}',
     
    '.wixui-rich-content-viewer h3{font-family:Montserrat,system-ui,sans-serif !important;font-weight:600 !important;font-size:18px !important;line-height:1.55 !important;color:var(--rdr-ink) !important;margin:0 0 20px}',
    '.wixui-rich-content-viewer h3 span{color:var(--rdr-ink) !important;font-weight:600 !important}',
    




    '.wixui-rich-content-viewer blockquote{position:relative;overflow:hidden;margin:32px 0;padding:34px 38px 36px 42px;background:linear-gradient(135deg,#F8FBFC 0%,#EDF4F6 100%);border:1px solid #E1EAEC;border-left:1px solid #E1EAEC !important;border-radius:18px 5px 16px 5px;box-shadow:0 8px 24px rgba(10,26,53,.07);font-family:Montserrat,system-ui,sans-serif !important;font-style:italic;font-weight:500;font-size:17px;line-height:1.65;color:var(--rdr-navy) !important}',
    





    '.wixui-rich-content-viewer blockquote>*{position:relative;z-index:1}',
    '.wixui-rich-content-viewer blockquote::before{content:"\\201C";position:absolute;z-index:0;left:-22px;top:-66px;font-size:290px;line-height:1;font-family:Georgia,serif;font-style:normal;font-weight:700;color:transparent;-webkit-text-stroke:2px rgba(93,191,192,.42);pointer-events:none}',
    '.wixui-rich-content-viewer blockquote::after{content:"\\201D";position:absolute;z-index:0;right:-20px;bottom:-160px;font-size:290px;line-height:1;font-family:Georgia,serif;font-style:normal;font-weight:700;color:transparent;-webkit-text-stroke:2px rgba(93,191,192,.42);pointer-events:none}',
    '@media(max-width:560px){.wixui-rich-content-viewer blockquote::before{font-size:210px;left:-16px;top:-48px}.wixui-rich-content-viewer blockquote::after{font-size:210px;right:-14px;bottom:-116px}}',
    '.wixui-rich-content-viewer blockquote span{color:var(--rdr-navy) !important;font-family:inherit !important}',
    '.wixui-rich-content-viewer blockquote p{margin:0 0 12px !important;line-height:inherit !important}',
    '.wixui-rich-content-viewer blockquote p:last-child{margin-bottom:0 !important}',
    '.wixui-rich-content-viewer blockquote strong,.wixui-rich-content-viewer blockquote b,' +
    '.wixui-rich-content-viewer blockquote span[style*="font-weight:700"],.wixui-rich-content-viewer blockquote span[style*="font-weight: 700"],' +
    '.wixui-rich-content-viewer blockquote span[style*="font-weight:bold"],.wixui-rich-content-viewer blockquote span[style*="font-weight: bold"]' +
    '{display:block;font-family:\'Varien\',\'Archivo Black\',Impact,sans-serif !important;font-style:italic;font-weight:400 !important;text-transform:uppercase;font-size:clamp(20px,2.6vw,26px);line-height:1.18;letter-spacing:.01em;color:var(--rdr-navy) !important;margin:2px 0 12px}',
    


    '.wixui-rich-content-viewer blockquote.rph-qp{box-sizing:border-box;background:linear-gradient(150deg,#1B3E6B 0%,#16355D 40%,#0A1A35 100%) !important;border:none !important;padding:38px 42px 38px clamp(140px,34%,250px);min-height:240px;display:flex;flex-direction:column;justify-content:center;color:#fff !important}',
    '.wixui-rich-content-viewer blockquote.rph-qp::before,.wixui-rich-content-viewer blockquote.rph-qp::after{content:none !important}',
    '.wixui-rich-content-viewer blockquote.rph-qp>*:not(.rph-q):not(.rph-qglyph):not(.rph-qmotif){display:none !important}',
    '.wixui-rich-content-viewer blockquote.rph-qp .rph-qtxt span{color:inherit !important}',
    '.wixui-rich-content-viewer blockquote .rph-qglyph{position:absolute;left:-40px;top:-84px;font-size:560px;line-height:1;font-family:Georgia,serif;font-weight:700;font-style:normal;color:var(--rdr-amber) !important;opacity:.92;pointer-events:none;z-index:0}',
    '.wixui-rich-content-viewer blockquote .rph-qmotif{position:absolute;right:-30px;top:0;width:56%;height:100%;opacity:.3;pointer-events:none;stroke:#F5FCFB;fill:none;stroke-width:3;z-index:0}',
    '.wixui-rich-content-viewer blockquote.rph-qp .rph-qtxt{margin:0 !important;overflow-wrap:normal;word-break:normal;hyphens:none;font-family:\'Varien\',\'Archivo Black\',Impact,sans-serif !important;font-style:italic;text-transform:uppercase;line-height:1.08 !important;color:#fff !important;letter-spacing:.005em;font-size:clamp(30px,5vw,50px);text-wrap:balance}',
    '.wixui-rich-content-viewer blockquote.rph-qp .rph-qtxt .k{color:var(--rdr-amber) !important}',
    '.wixui-rich-content-viewer blockquote.rph-qp .rph-qattr{margin:20px 0 0 !important;line-height:1 !important}',
    '.wixui-rich-content-viewer blockquote .rph-qattr>span{display:inline-flex;align-items:center;background:var(--rdr-amber);color:#0A1A35 !important;font-family:Montserrat,system-ui,sans-serif !important;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;font-style:normal;padding:7px 14px;border-radius:9px 3px 9px 3px;transform:skewX(-6deg)}',
    '@media(max-width:600px){.wixui-rich-content-viewer blockquote.rph-qp{padding:30px 22px 30px 96px;min-height:180px}.wixui-rich-content-viewer blockquote .rph-qglyph{font-size:280px;top:-38px;left:-46px}.wixui-rich-content-viewer blockquote .rph-qattr>span{font-size:9px;letter-spacing:.06em;padding:5px 10px;line-height:1.4}}',
     
    '.wixui-rich-content-viewer blockquote.rph-qb .rph-qmotif{stroke:#CFE4E8;opacity:.55;width:38%;right:-20px}',
    '.wixui-rich-content-viewer blockquote strong::after{content:"";display:block;width:110px;height:5px;border-radius:2px;background:var(--rdr-amber);transform:skewX(-18deg);margin-top:7px;opacity:.9}',
    '.wixui-rich-content-viewer blockquote p.rph-qattr2{display:flex;align-items:center;gap:10px;font-size:11px !important;font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-family:Montserrat,system-ui,sans-serif !important;font-style:normal !important;color:var(--rdr-teal-deep) !important;margin:14px 0 0 !important}',
    '.wixui-rich-content-viewer blockquote p.rph-qattr2::before{content:"";width:26px;height:2px;background:var(--rdr-teal);flex:0 0 auto}',
    '.wixui-rich-content-viewer blockquote p.rph-qattr2 span{color:var(--rdr-teal-deep) !important;font-family:inherit !important}',
     
    '.wixui-rich-content-viewer figure{margin:28px 0}',
    '.wixui-rich-content-viewer figure>div{border-radius:16px 4px 14px 4px !important;overflow:hidden !important;box-shadow:0 14px 34px rgba(10,26,53,.16) !important}',
    '.wixui-rich-content-viewer figure img{border-radius:16px 4px 14px 4px !important}',
    '.wixui-rich-content-viewer figcaption{margin-top:9px;padding-left:13px;position:relative;font-size:12.5px;color:var(--rdr-ink-3) !important;font-weight:600}',
    '.wixui-rich-content-viewer figcaption::before{content:"";position:absolute;left:0;top:2px;bottom:2px;width:3px;border-radius:2px;background:var(--rdr-teal)}',
    



    '.wixui-rich-content-viewer a:not([data-hook*="button-viewer"]),.wixui-rich-content-viewer a:not([data-hook*="button-viewer"]):visited{color:var(--rdr-teal-deep) !important;font-weight:600;text-decoration:none !important;background-image:linear-gradient(var(--rdr-teal),var(--rdr-teal));background-repeat:no-repeat;background-position:0 100%;background-size:100% 0;padding:0 3px;margin:0 -1px;border-radius:4px;transition:background-size .28s cubic-bezier(.2,.7,.2,1),color .2s ease;-webkit-box-decoration-break:clone;box-decoration-break:clone}',
    '.wixui-rich-content-viewer a:not([data-hook*="button-viewer"]) span{color:inherit !important;font-weight:inherit !important;background:transparent !important}',
    '.wixui-rich-content-viewer a:not([data-hook*="button-viewer"]):hover,.wixui-rich-content-viewer a:not([data-hook*="button-viewer"]):focus-visible{background-size:100% 100%;color:var(--rdr-navy) !important}',
    '@media(prefers-reduced-motion:reduce){.wixui-rich-content-viewer a{transition:none}}',
    







    '.wixui-rich-content-viewer a[data-hook*="button-viewer"]{display:inline-flex;align-items:center;justify-content:center;text-align:center;background:var(--rdr-navy) !important;background-image:none !important;color:#fff !important;font-family:var(--body,inherit);font-size:12px !important;font-weight:800 !important;letter-spacing:.04em !important;text-transform:uppercase !important;line-height:1.2 !important;height:auto !important;min-height:0 !important;padding:13px 22px !important;margin:0 !important;border:none !important;border-radius:10px !important;white-space:normal !important;box-shadow:0 8px 20px rgba(10,26,53,.18);transition:transform .18s ease,background .18s ease}',
    '.wixui-rich-content-viewer a[data-hook*="button-viewer"] *{color:inherit !important;font-size:inherit !important;font-weight:inherit !important;letter-spacing:inherit !important;line-height:1.2 !important;white-space:normal !important;overflow:visible !important;text-overflow:clip !important;min-width:0 !important}',
    '.wixui-rich-content-viewer a[data-hook*="button-viewer"]:hover{background:#14294A !important;transform:translateY(-2px)}',
    '@media(prefers-reduced-motion:reduce){.wixui-rich-content-viewer a[data-hook*="button-viewer"]{transition:none}.wixui-rich-content-viewer a[data-hook*="button-viewer"]:hover{transform:none}}',
    

    '.rph-cast{margin:4px 0 26px;padding:18px 20px;background:linear-gradient(135deg,#fff,#EEF4F8);border:1px solid #E1E6EE;border-radius:16px 4px 14px 4px;box-shadow:0 4px 16px rgba(10,26,53,.05)}',
    '.rph-cast h2,.rph-cast h3,.rph-cast h4,.rph-cast h5,.rph-cast h6{display:flex;align-items:center;gap:9px;font-size:15px !important;margin:0 0 12px !important;color:var(--rdr-navy) !important}',
    '.rph-cast h2 span,.rph-cast h3 span,.rph-cast h4 span,.rph-cast h5 span,.rph-cast h6 span{color:var(--rdr-navy) !important}',
     
    '.rph-cast .ci{width:26px;height:26px;border-radius:7px 2px 7px 2px;background:var(--rdr-navy);color:var(--rdr-amber) !important;display:grid;place-items:center;flex:0 0 auto}',
    '.rph-cast .ci svg{width:14px;height:14px}',
    '.rph-cast .rph-cast-item{position:relative;padding-left:24px;margin:0 0 10px;font-size:15px;line-height:1.55}',
    '.rph-cast .rph-cast-item:last-child{margin-bottom:0}',
    '.rph-cast .rph-cast-item::before{content:"";position:absolute;left:3px;top:.5em;width:7px;height:7px;border-radius:50%;background:var(--rdr-teal-deep);box-shadow:0 0 0 4px rgba(0,103,110,.14)}',
    '.rph-cast .rph-cast-item span{color:var(--rdr-ink) !important}',

    






    '.wixui-rich-content-viewer .rph-a{border:1px solid rgba(93,191,192,.45);border-radius:16px 4px 14px 4px;padding:20px;margin:22px 0;background:#fff;transition:border-color .18s,box-shadow .18s,transform .18s}',
    '.wixui-rich-content-viewer .rph-a:hover{border-color:var(--rdr-teal-deep);box-shadow:0 6px 22px rgba(0,103,110,.10);transform:translateY(-2px)}',
    '.wixui-rich-content-viewer .rph-a__sur{padding-left:112px !important;margin:0 0 6px !important;font-size:11.5px !important;font-weight:700 !important;letter-spacing:.10em;text-transform:uppercase;color:var(--rdr-teal-deep) !important;line-height:1.4 !important}',
    '.wixui-rich-content-viewer .rph-a__sur span{font-size:inherit !important;font-weight:inherit !important;color:inherit !important;letter-spacing:inherit}',
    '.wixui-rich-content-viewer .rph-a--nopic .rph-a__sur{padding-left:0 !important}',
     
    '@media(max-width:560px){.wixui-rich-content-viewer .rph-a__sur{padding-left:0 !important}.wixui-rich-content-viewer .rph-a{padding:16px}}',
    


    '.wixui-rich-content-viewer [data-hook="audio-viewer"] div{border:0 !important;background:none !important;box-shadow:none !important}',
    '.wixui-rich-content-viewer .rph-a__vide{display:none !important}',
    








    '.wixui-rich-content-viewer [data-hook="audio-viewer"] wow-image{width:92px !important;height:92px !important;min-width:92px;display:block !important;border-radius:12px 3px 12px 3px;overflow:hidden;background:rgba(93,191,192,.12)}',
    '.wixui-rich-content-viewer [data-hook="audio-viewer"] img{width:92px !important;height:92px !important;border-radius:12px 3px 12px 3px;object-fit:cover;object-position:50% 30%}',
    




    '.wixui-rich-content-viewer [data-hook="audio-title"]{font-family:Varien,Impact,sans-serif !important;font-style:italic;text-transform:uppercase;font-weight:400 !important;font-size:21px !important;line-height:1.15;color:var(--rdr-navy) !important}',
    '.wixui-rich-content-viewer [data-hook="audio-creator"]{font-size:13.5px !important;font-weight:500 !important;color:var(--rdr-teal-deep) !important}',
    

    




    '.wixui-rich-content-viewer .rph-a__cit{position:relative;margin:16px 0 2px !important;padding:3px 0 3px 46px !important;min-height:32px;border:0 !important;background:none !important;font-size:15.5px !important;font-style:italic;line-height:1.64 !important;color:var(--rdr-ink) !important;opacity:.94}',
    '.wixui-rich-content-viewer .rph-a__cit::before{content:"";position:absolute;left:0;top:0;width:32px;height:32px;border-radius:10px 3px 10px 3px;background-color:rgba(93,191,192,.18);background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2300676E\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Crect x=\'9\' y=\'2\' width=\'6\' height=\'11\' rx=\'3\'/%3E%3Cpath d=\'M5 10v1a7 7 0 0 0 14 0v-1\'/%3E%3Cpath d=\'M12 18v3\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;background-size:17px}',
    '.wixui-rich-content-viewer .rph-a__cit span{font-size:15.5px !important;font-style:italic !important;color:var(--rdr-ink) !important;font-weight:400 !important}',
     
    '.wixui-rich-content-viewer .rph-a--joue .rph-a__cit::before{background-color:rgba(93,191,192,.32);animation:rph-a-pulse 1.9s ease-in-out infinite}',
    '@keyframes rph-a-pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,103,110,.22)}50%{box-shadow:0 0 0 6px rgba(0,103,110,0)}}',

    



    '.wixui-rich-content-viewer [data-hook="audio-slider"]{-webkit-appearance:none;appearance:none;height:6px !important;border-radius:99px !important;cursor:pointer;background:linear-gradient(90deg,var(--rdr-teal-deep) 0,var(--rdr-teal-deep) var(--rph-a-prog,0%),rgba(0,103,110,.16) var(--rph-a-prog,0%),rgba(0,103,110,.16) 100%) !important}',
     
    '.wixui-rich-content-viewer [data-hook="audio-slider"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--rdr-teal-deep);border:2px solid #fff;box-shadow:0 1px 5px rgba(0,103,110,.45);cursor:pointer;transition:transform .14s}',
    '.wixui-rich-content-viewer .rph-a:hover [data-hook="audio-slider"]::-webkit-slider-thumb{transform:scale(1.18)}',
    '.wixui-rich-content-viewer [data-hook="audio-slider"]::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:var(--rdr-teal-deep);border:2px solid #fff;box-shadow:0 1px 5px rgba(0,103,110,.45);cursor:pointer}',
     
    '.wixui-rich-content-viewer .rph-a--joue{border-color:var(--rdr-teal-deep) !important;box-shadow:0 4px 20px rgba(0,103,110,.14) !important}',
    '.wixui-rich-content-viewer .rph-a--joue [data-hook="audio-title"]{color:var(--rdr-teal-deep) !important}',

    

    '.wixui-rich-content-viewer [data-hook="audio-viewer"] button[aria-label="play"],.wixui-rich-content-viewer [data-hook="audio-viewer"] button[aria-label="pause"]{width:40px !important;height:40px !important;box-shadow:0 2px 10px rgba(252,221,0,.5)}',
    '.wixui-rich-content-viewer [data-hook="audio-viewer"] button[aria-label="play"] svg,.wixui-rich-content-viewer [data-hook="audio-viewer"] button[aria-label="pause"] svg{color:var(--rdr-navy) !important;fill:var(--rdr-navy) !important}',
    

    


    '.wixui-rich-content-viewer [data-hook="audio-viewer"] button:not([aria-label="play"]):not([aria-label="pause"]){border-color:rgba(0,103,110,.45) !important;color:var(--rdr-teal-deep) !important;background:#fff !important;transition:background .15s,border-color .15s}',
    '.wixui-rich-content-viewer [data-hook="audio-viewer"] button:not([aria-label="play"]):not([aria-label="pause"]) svg{color:var(--rdr-teal-deep) !important;fill:var(--rdr-teal-deep) !important}',
    '.wixui-rich-content-viewer [data-hook="audio-viewer"] button:not([aria-label="play"]):not([aria-label="pause"]) svg path{fill:var(--rdr-teal-deep) !important}',
    '.wixui-rich-content-viewer .rph-a button[aria-label="Mute"]:hover,.wixui-rich-content-viewer .rph-a button[aria-label="Unmute"]:hover,.wixui-rich-content-viewer .rph-a [data-hook="audio-context-menu"]:hover{background:rgba(0,103,110,.08) !important;border-color:var(--rdr-teal-deep) !important}'
  ].join('');

  









  var ER_EN = {
    'Retour': 'Back',
    'Retour aux actualités': 'Back to the news',
    'Explorer': 'Explore',
    'Explorer toutes les actualités': 'Explore all the news',
    "Fil d'ariane": 'Breadcrumb',
    "Partager l'article": 'Share the article',
    "Chargement de l'article": 'Loading the article',
    'Outils de lecture': 'Reading tools',
    'Partager sur X': 'Share on X',
    'Partager sur Facebook': 'Share on Facebook',
    'Copier le lien': 'Copy the link',
    'Partager': 'Share',
    'Enregistrer': 'Save',
    'Haut de page': 'Back to top',
    'À la une': 'Featured',
    'Actualités': 'News',
    'Voir le skipper ›': 'See the skipper ›',
    'Bientôt · Mon Espace Rhum': 'Soon · My Rhum Space',
    'Enregistrer dans Mon Espace Rhum': 'Save to My Rhum Space',
    'Retirer de Mon Espace Rhum': 'Remove from My Rhum Space',
    'Connecte-toi pour enregistrer cette actu': 'Sign in to save this article',
    'Enregistre dans Mon Espace Rhum': 'Saved to My Rhum Space',
    'Retire de Mon Espace Rhum': 'Removed from My Rhum Space',
    'Impossible d enregistrer pour le moment': 'Cannot save right now'
  };
  var enAnglais = function (brut) {
    var cle = String(brut == null ? '' : brut).trim();
    if (!cle) return undefined;
    if (ER_EN[cle] !== undefined) return ER_EN[cle];
    

    var m = cle.match(/^(\d+) min de lecture$/);
    if (m) return m[1] + ' min read';
    m = cle.match(/^Par (.+)$/);
    if (m) return 'By ' + m[1];
    return undefined;
  };

  var CSS = [
    ':root{}',
    '.rph-root,.rph-portal{',
    '--navy:#0A1A35;--navy-2:#123A5C;--navy-3:#0E4B52;',
    '--amber:#FCF150;--teal:#5DBFC0;--teal-deep:#00676E;',
    '--gold:#C8922A;--gold-bg:#FBF1DC;',
    '--bg:#F2F6F9;--surface:#fff;--ink:#0A1A35;--ink-2:#45536E;--ink-3:#8593A9;',
    '--line:#E1E6EE;--line-strong:#C6CFDC;',
    '--r-ui:12px 4px 12px 4px;--r-hero:20px 5px 20px 5px;--r-sm:8px 3px 8px 3px;',
    '--shadow:0 1px 2px rgba(10,26,53,.04),0 5px 18px rgba(10,26,53,.07);',
    '--shadow-lift:0 3px 6px rgba(10,26,53,.07),0 14px 34px rgba(10,26,53,.13);',
    "--dsp:'Varien','Archivo Black','Archivo',Impact,system-ui,sans-serif;",
    "--body:'Montserrat',system-ui,-apple-system,sans-serif;",
    'font-family:var(--body)}',

    '.rph-root *,.rph-portal *{box-sizing:border-box}',
    '.rph-root a{color:inherit;text-decoration:none}',
    '.rph-root .dsp,.rph-portal .dsp{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;letter-spacing:.01em;line-height:1.05}',
    '.rph-root .in{max-width:1180px;margin:0 auto;padding:0 24px}',

    

    '.rph-sub{background:var(--bg);border-bottom:1px solid var(--line)}',
    '.rph-sub .in{display:flex;align-items:center;gap:14px;min-height:60px;padding-top:10px;padding-bottom:10px}',
    '.rph-back{flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;background:var(--navy);color:#fff;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:9px 14px;border-radius:var(--r-ui);cursor:pointer;box-shadow:var(--shadow);border:none;font-family:var(--body)}',
    '.rph-back svg{width:14px;height:14px;color:var(--amber)}',
    '.rph-back:hover{background:var(--navy-2)}',
     
    '.rph-crumb{display:flex;align-items:center;gap:9px;font-size:12.5px;color:var(--ink-2);white-space:nowrap;font-weight:700;min-width:0;overflow:hidden}',
    '.rph-crumb a{cursor:pointer;padding:3px 1px;transition:color .15s}',
    '.rph-crumb a:hover{color:var(--teal-deep)}',
    '.rph-crumb .sep{opacity:.4;font-weight:600}',
    '.rph-crumb .cur{color:var(--navy);font-weight:800;display:inline-flex;align-items:center;gap:6px;overflow:hidden;text-overflow:ellipsis}',
    '.rph-crumb .cur::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--teal);flex:0 0 auto}',
    '.rph-crumb .cur:hover{text-decoration:underline;text-underline-offset:3px}',
    '.rph-rub{margin-left:auto;flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-2);padding:9px 14px;border-radius:var(--r-ui);border:1px solid var(--line);background:var(--surface);box-shadow:var(--shadow);cursor:pointer;transition:.16s}',
    '.rph-rub:hover{border-color:var(--teal);color:var(--navy);transform:translateY(-1px)}',
    '.rph-rub svg{width:13px;height:13px;color:var(--teal-deep)}',

     
    '.rph-hw{max-width:1180px;margin:0 auto;padding:26px 24px 8px}',
    '.rph-hero{border-radius:var(--r-hero);overflow:hidden;position:relative;box-shadow:var(--shadow-lift);color:#fff;background:linear-gradient(118deg,var(--navy) 0%,var(--navy-2) 58%,var(--navy-3) 100%);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.9fr);min-height:clamp(360px,40vw,470px)}',
    '.rph-blur{position:absolute;inset:0;z-index:0}',
    '.rph-blur img,.rph-blur .ph{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:blur(26px) saturate(1.1) brightness(.6);transform:scale(1.18)}',
    '.rph-blur::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,rgba(10,26,53,.88) 0%,rgba(10,26,53,.5) 46%,rgba(10,26,53,.2) 72%)}',
    '.rph-main{position:relative;z-index:2;padding:clamp(26px,3.4vw,44px);display:flex;flex-direction:column;justify-content:center;gap:14px}',
    '.rph-kick{display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
    '.rph-kic{width:30px;height:30px;border-radius:var(--r-sm);background:rgba(255,255,255,.10);color:var(--amber);display:grid;place-items:center;flex:0 0 auto}',
    '.rph-kic svg{width:16px;height:16px}',
    '.rph-b{font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 11px;border-radius:6px 2px 6px 2px}',
    '.rph-b.fmt{background:#FBF3CD;color:#8A6C00}',
    '.rph-b.ed{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)}',
    '.rph-b.une{background:var(--amber);color:var(--navy);transform:skewX(-6deg);display:inline-flex;align-items:center;gap:6px}',
    '.rph-b.une svg{width:13px;height:13px}',
    


    '.rph-hero h1{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:clamp(25px,3.3vw,42px);line-height:1.03;margin:6px 0 4px;text-shadow:0 2px 16px rgba(10,26,53,.5)}',
    '.rph-chap{font-size:clamp(14px,1.5vw,16.5px);line-height:1.5;color:rgba(255,255,255,.85);max-width:40ch;font-weight:500}',
    '.rph-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap;font-size:12.5px;color:rgba(255,255,255,.72);font-weight:600}',
    '.rph-meta .m{display:flex;align-items:center;gap:6px}.rph-meta svg{width:14px;height:14px;opacity:.8}',
    '.rph-ent{align-self:flex-start;display:inline-flex;align-items:center;gap:11px;margin-top:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);padding:8px 14px 8px 8px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer}',
    '.rph-ent .av{width:32px;height:32px;border-radius:50%;background:var(--amber);color:var(--navy);display:grid;place-items:center;font-weight:800;font-size:12px}',
    '.rph-ent .go{color:var(--amber);font-weight:800;font-size:12px}',
    '.rph-ent:hover{background:rgba(255,255,255,.13)}',
     
    '.rph-meta{margin-top:4px;margin-bottom:6px}',
    '.rph-media{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;padding:clamp(16px,2vw,26px);min-width:0}',
    '.rph-media .card{border-radius:12px 4px 12px 4px;overflow:hidden;box-shadow:0 18px 44px rgba(4,10,24,.5);max-height:100%;aspect-ratio:4/3;width:100%;background:linear-gradient(140deg,var(--navy-2),var(--navy-3))}',
    '.rph-media img,.rph-media .ph{width:100%;height:100%;object-fit:cover;display:block}',
    '.rph-waves{position:absolute;inset:auto 0 -10px 0;height:36%;opacity:.09;color:#fff;z-index:1;pointer-events:none}',

    

    '.rph-sklb{display:inline-block;background:linear-gradient(100deg,rgba(255,255,255,.07) 30%,rgba(255,255,255,.17) 50%,rgba(255,255,255,.07) 70%);background-size:200% 100%;animation:rphskl 1.3s linear infinite;border-radius:9px 3px 9px 3px}',
    '.rph-skl .rph-main>.rph-sklb{display:block;margin:0 0 10px}',
    '@keyframes rphskl{0%{background-position:200% 0}100%{background-position:-200% 0}}',
    '@media(prefers-reduced-motion:reduce){.rph-sklb{animation:none}}',

     
    '.rph-top{position:fixed;top:0;left:0;height:3px;width:0;z-index:90;background:linear-gradient(90deg,var(--amber),var(--teal));transition:width .1s linear}',

     
    '.rph-dock{position:fixed;left:max(12px,calc(50% - 590px - 60px));top:50%;transform:translateY(-50%);z-index:70;display:flex;flex-direction:column;gap:7px;background:var(--surface);border:1px solid var(--line);border-radius:16px 5px 16px 5px;padding:10px 8px;box-shadow:var(--shadow-lift)}',
    '.rph-ring{width:44px;height:44px;position:relative;margin:1px auto 3px}',
    '.rph-ring svg{transform:rotate(-90deg)}',
    '.rph-ring .pct{position:absolute;inset:0;display:grid;place-items:center;font-size:10.5px;font-weight:800;color:var(--navy)}',
    '.rph-d{width:44px;height:44px;border-radius:11px 3px 11px 3px;border:none;background:transparent;color:var(--navy);display:grid;place-items:center;cursor:pointer;position:relative;transition:.14s}',
    '.rph-d:hover{background:#EEF2F6}.rph-d svg{width:19px;height:19px}',
    '.rph-d.accent{background:var(--navy);color:#fff}.rph-d.accent:hover{background:var(--navy-2)}.rph-d.accent svg{color:var(--amber)}',
    '.rph-d .tip{position:absolute;left:54px;top:50%;transform:translateY(-50%) scale(.96);background:var(--navy);color:#fff;font-size:11.5px;font-weight:600;padding:6px 10px;border-radius:8px 3px 8px 3px;white-space:nowrap;opacity:0;pointer-events:none;transition:.14s}',
    '.rph-d:hover .tip{opacity:1;transform:translateY(-50%) scale(1)}',
    '.rph-d.save.on{color:var(--gold)}',
    '.rph-dock .div{height:1px;background:var(--line);margin:2px 6px}',
    '@media(max-width:1300px){.rph-dock{display:none}}',

    '.rph-edtag{position:absolute;right:16px;bottom:12px;z-index:3;font-size:9.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);pointer-events:none}',
    '.rph-d.is-soon,.rph-racts .save.is-soon{opacity:.35;cursor:default}',
    '.rph-d.is-soon:hover{transform:none}',
    '.rph-racts button.ok{color:var(--teal-deep)}',
    '.rph-rshare{flex:0 0 auto;width:38px;height:38px;border-radius:10px 3px 10px 3px;border:1px solid var(--line);background:var(--surface);color:var(--navy);display:grid;place-items:center;cursor:pointer;transition:.15s}',
    '.rph-rshare:hover{border-color:var(--teal);color:var(--teal-deep)}',
    '.rph-rshare svg{width:16px;height:16px}',
    '.rph-rshare.ok{color:var(--teal-deep);border-color:var(--teal)}',
     
    '.rph-read{position:fixed;top:0;left:0;right:0;z-index:85;background:rgba(255,255,255,.97);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid var(--line);box-shadow:0 4px 18px rgba(10,26,53,.07);transform:translateY(-102%);transition:transform .28s cubic-bezier(.2,.7,.2,1)}',
    '.rph-read.show{transform:none}',
    '.rph-read .in{display:flex;align-items:center;gap:14px;height:52px;max-width:1180px;margin:0 auto;padding:0 24px}',
    '.rph-rback{flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--navy);padding:8px 12px;border-radius:var(--r-ui);border:1px solid var(--line);background:var(--surface);cursor:pointer;font-family:var(--body)}',
    '.rph-rback svg{width:14px;height:14px;color:var(--teal-deep)}.rph-rback:hover{border-color:var(--teal)}',
    '.rph-rfmt{flex:0 0 auto;width:26px;height:26px;border-radius:7px 2px 7px 2px;background:#FBF3CD;color:#8A6C00;display:grid;place-items:center}.rph-rfmt svg{width:14px;height:14px}',
    '.rph-rtitle{flex:1;min-width:0;font-weight:700;font-size:13.5px;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.rph-racts{flex:0 0 auto;display:flex;gap:6px}',
    '.rph-racts button{width:36px;height:36px;border-radius:9px 3px 9px 3px;border:1px solid var(--line);background:var(--surface);color:var(--navy);display:grid;place-items:center;cursor:pointer}',
    '.rph-racts button:hover{border-color:var(--teal);color:var(--teal-deep)}',
    '.rph-racts button.save.on{color:var(--gold);border-color:var(--gold)}.rph-racts svg{width:16px;height:16px}',
    '.rph-rprog{position:absolute;left:0;bottom:-1px;height:3px;width:0;background:linear-gradient(90deg,var(--amber),var(--teal))}',

    '@media(max-width:1060px){.rph-hero{grid-template-columns:1fr}.rph-media{order:-1;max-height:280px;padding:16px 16px 0}}',
    '@media(max-width:860px){.rph-crumb{display:none}}',
    '@media(max-width:620px){.rph-hw,.rph-read .in{padding-left:14px;padding-right:14px}.rph-rtitle{font-size:12.5px}}',
    '@media(prefers-reduced-motion:reduce){.rph-root *,.rph-portal *{transition:none!important}}'
  ].join('');

  var IC = {
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3c1 3-1 5-2 6-1.5 1.5-2 3-2 5a6 6 0 0 0 12 0c0-3-2-5-3-7-.5 2-2 2.5-2.5 1C11 7 12 5 12 3z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v4M12 19v4M4 12H1M23 12h-3M6 6L4 4M18 6l2-2"/><circle cx="12" cy="12" r="4"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2h3.3l-7.2 8.3L23.5 22h-6.6l-5.2-6.8L5.8 22H2.5l7.7-8.8L1.9 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.1 3.9H5.2L17.7 20Z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.5 0 14.3 0 11.8 0 10 1.5 10 4.3V6H7v3h3v9h4V9Z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4-6 4z"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM6 11a6 6 0 0 0 12 0M12 18v3"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.4"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M16 5.2a3.4 3.4 0 0 1 0 6.4M18 20c0-2.4-1-4.2-2.6-5.2"/></svg>'
  };

   
   
  function stripLeadDash(p) {
    var w = document.createTreeWalker(p, NodeFilter.SHOW_TEXT, null);
    var n = w.nextNode();
    while (n && !n.textContent.trim()) n = w.nextNode();
    if (n) {
      var cleaned = n.textContent.replace(/^\s*[-–—]\s*/, '');
      if (cleaned !== n.textContent) n.textContent = cleaned;    
    }
  }

  var DEMO = {
    format: 'Interview', formatLabel: 'Interview', edition: 'Édition 2026', featured: true,
    title: 'Charlie Dalin : « je prépare ce Rhum comme un sommet »',
    excerpt: "À quatre mois du départ de Saint-Malo, le vainqueur du dernier Vendée Globe revient sur sa campagne IMOCA et sur ce qui rend la transatlantique si particulière.",
    date: '11 juillet 2026', readingTime: 7, author: 'la rédaction',
    entity: { name: 'Charlie Dalin', initials: 'CD' },
    cover: '', categories: ['Interviews']
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function coverPlaceholder() {
    return '<svg class="ph" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="rphc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(205,48%,20%)"/><stop offset="1" stop-color="hsl(215,55%,11%)"/></linearGradient></defs>' +
      '<rect width="400" height="300" fill="url(#rphc)"/><circle cx="315" cy="66" r="30" fill="#FCF150" opacity=".82"/>' +
      '<path d="M0 208 Q100 184 200 206 T400 203 V300 H0Z" fill="hsl(205,50%,15%)" opacity=".85"/>' +
      '<path d="M0 236 Q120 214 240 236 T400 232 V300 H0Z" fill="hsl(215,58%,10%)"/>' +
      '<path d="M178 86 L206 208 L152 208 Z" fill="#fff" opacity=".9"/><path d="M212 98 L212 208 L256 208 Z" fill="#5DBFC0" opacity=".92"/>' +
      '<rect x="150" y="206" width="112" height="9" rx="3" fill="#0A1A35"/></svg>';
  }

  function ensureStyles() {
    if (!document.getElementById(STYLE_ID)) {
      var s = document.createElement('style');
      s.id = STYLE_ID;
      s.textContent = CSS;
      document.head.appendChild(s);
    }
     
    if (!document.getElementById(STYLE_ID_ART)) {
      var a = document.createElement('style');
      a.id = STYLE_ID_ART;
      a.textContent = ART_CSS;
      document.head.appendChild(a);
    }
  }

  class RdrPostHead extends HTMLElement {
    connectedCallback() {
      if (this._wired) return;
      this._wired = true;
      var self = this;
      ensureStyles();
       
      this._lireEtatSave();
       
       
       
      try {
        var q = new URLSearchParams(location.search).get('slug');
        var parts = location.pathname.split('/').filter(Boolean);
        var slug = (q || (parts.length ? parts[parts.length - 1] : '') || '').toLowerCase();
        if (slug) {
          var lus = [];
          try { lus = JSON.parse(localStorage.getItem('rdrLusV1') || '[]'); } catch (e) { lus = []; }
          if (!Array.isArray(lus)) lus = [];
          var i = lus.indexOf(slug);
          if (i !== -1) lus.splice(i, 1);
          lus.push(slug);
          if (lus.length > 300) lus = lus.slice(lus.length - 300);
          localStorage.setItem('rdrLusV1', JSON.stringify(lus));
        }
      } catch (e) {   }
      this._render();
      this._mountPortal();
      this._onScroll = this._updateProgress.bind(this);
      window.addEventListener('scroll', this._onScroll, { passive: true });
      window.addEventListener('resize', this._onScroll);
      this._updateProgress();
       
       
       
       
       
      [200, 700, 1500].forEach(function (t) { setTimeout(self._onScroll, t); });
      if ('ResizeObserver' in window) {
        this._ro = new ResizeObserver(function () {
          if (self._roRaf) return;
          self._roRaf = requestAnimationFrame(function () { self._roRaf = 0; self._onScroll(); });
        });
        try { this._ro.observe(document.documentElement); } catch (e) {   }
      }
       
       
       
       
      var go = function () {
        self._signalReady();
        try { document.documentElement.classList.add('rph-go'); } catch (e) {   }
      };
      requestAnimationFrame(go);
      this._readyBackstop = setTimeout(go, 250);
       
       
       
       
      this._castTries = 0;
      this._enhanceCast();
      this._observeCast();
      this._castTimer = setInterval(function () {
        self._castTries++;
        self._enhanceCast();
        self._observeCast();                                    
        if (self._castTries > 24) { clearInterval(self._castTimer); self._castTimer = null; }
      }, 500);
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this._onScroll);
      window.removeEventListener('resize', this._onScroll);
      clearTimeout(this._readyBackstop);
      if (this._castTimer) { clearInterval(this._castTimer); this._castTimer = null; }
      if (this._castObs) { this._castObs.disconnect(); this._castObs = null; }
      clearTimeout(this._castHeal);
      if (this._bodyFedObs) { this._bodyFedObs.disconnect(); this._bodyFedObs = null; }
      




      if (this._obsAudio) { this._obsAudio.disconnect(); this._obsAudio = null; }
      clearTimeout(this._soonTimer);
      clearTimeout(this._bodyFedTimer);
      clearTimeout(this._bodyFedSettle);
      if (this._ro) { this._ro.disconnect(); this._ro = null; }
      if (this._roRaf) { cancelAnimationFrame(this._roRaf); this._roRaf = 0; }
      if (this._portal && this._portal.parentNode) this._portal.parentNode.removeChild(this._portal);
      this._portal = null;
      this._ready = false;
      this._wired = false;
    }

    static get observedAttributes() { return ['data-payload', 'data-body-fed', 'data-save-state', 'data-save-result', 'lang']; }
    _lang() { return this.getAttribute('lang') === 'en' ? 'en' : 'fr'; }
    

    _t(s) { if (this._lang() !== 'en') return s; var en = enAnglais(s); return en === undefined ? s : en; }
    


    _i18n() {
      if (this._lang() !== 'en') return;
      var racines = [this, this._portal].filter(Boolean);
      racines.forEach(function (racine) {
        var promeneur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, null);
        var noeuds = [];
        while (promeneur.nextNode()) noeuds.push(promeneur.currentNode);
        noeuds.forEach(function (n) {
          var brut = n.nodeValue;
          if (!brut || !/[A-Za-zÀ-ÿ0-9]/.test(brut)) return;
          var en = enAnglais(brut);
          if (en !== undefined && en !== brut.trim()) n.nodeValue = brut.replace(brut.trim(), en);
        });
        racine.querySelectorAll('[aria-label],[title]').forEach(function (el) {
          ['aria-label', 'title'].forEach(function (a) {
            var v = el.getAttribute(a);
            if (!v) return;
            var en = enAnglais(v);
            if (en !== undefined) el.setAttribute(a, en);
          });
        });
      });
    }
    attributeChangedCallback(name) {
      





      if (!this._wired) return;
      if (name === 'data-save-state') { this._lireEtatSave(); return; }
      if (name === 'data-save-result') { this._retourSave(); return; }
      if (name === 'data-body-fed') { this._onBodyFed(); return; }    
      this._render();
      this._syncPortalMeta();
    }

     
     
     
     
     
     
     
     
     
    _enhanceQuotes() {
      var self = this;
      var motif = '<svg class="rph-qmotif" viewBox="15 120 600 560" preserveAspectRatio="xMidYMin slice" aria-hidden="true">' + RPH_VOILES + '</svg>';
      var GRAS = /font-weight\s*:\s*(700|bold)/i;
      var estGras = function (el, stop) {
        while (el && el !== stop) {
          if (el.tagName === 'STRONG' || el.tagName === 'B') return true;
          var st = el.getAttribute && el.getAttribute('style');
          if (st && GRAS.test(st)) return true;
          el = el.parentElement;
        }
        return false;
      };
      var nettoie = function (t) {
        return t.replace(/\s+/g, ' ').replace(/^[\s«"']+|[\s»"']+$/g, '').trim();
      };
      document.querySelectorAll('.wixui-rich-content-viewer blockquote').forEach(function (bq) {
        if (bq.getAttribute('data-rph-q')) {
           
           
           
          if (bq.classList.contains('rph-qp') && bq.getAttribute('data-rph-fit') !== '1' && self._fitPoster(bq)) {
            bq.setAttribute('data-rph-fit', '1');
          }
          return;
        }
        var ps = [].slice.call(bq.querySelectorAll('p'));
         
         
         
        var gras = '', reste = '';
        var marche = document.createTreeWalker(bq, NodeFilter.SHOW_TEXT);
        var noeud;
        while ((noeud = marche.nextNode())) {
          if (estGras(noeud.parentElement, bq)) gras += noeud.nodeValue + ' ';
          else reste += noeud.nodeValue + ' ';
        }
        gras = nettoie(gras).replace(/[«»]/g, '').trim();
        reste = nettoie(reste).replace(/^[-–—]\s*/, '').trim();
        var phrase = null, auteur = null;
        if (gras) {
           
           
          if (gras.length <= 90 && reste.length <= 80) { phrase = gras; auteur = reste || null; }
        } else {
           
           
          var author = null;
          if (ps.length > 1) {
            var lastTxt = (ps[ps.length - 1].textContent || '').trim();
            if (/^[-–—]/.test(lastTxt)) author = lastTxt.replace(/^[-–—]\s*/, '').trim();
          }
          var corps = author ? ps.slice(0, -1) : ps;
          var texte = nettoie(corps.length ? corps.map(function (p) { return p.textContent; }).join(' ') : bq.textContent).replace(/[«»"]/g, '').trim();
          if (texte && texte.length <= 90 && corps.length <= 2) { phrase = texte; auteur = author; }
        }
        if (phrase) {
          bq.setAttribute('data-rph-q', 'poster');
          bq.classList.add('rph-qp');
          var mots = phrase.split(' ');
          var dernier = mots.pop();
          bq.insertAdjacentHTML('beforeend',
            '<span class="rph-qglyph" aria-hidden="true">\u201C</span>' + motif +
            '<div class="rph-q"><p class="rph-qtxt"><span class="rph-qline">' + esc(mots.join(' ')) + (mots.length ? ' ' : '') + '<span class="k">' + esc(dernier) + '</span></span></p>' +
            (auteur ? '<p class="rph-qattr"><span>' + esc(auteur) + '</span></p>' : '') + '</div>');
          if (self._fitPoster(bq)) bq.setAttribute('data-rph-fit', '1');
        } else {
          bq.setAttribute('data-rph-q', 'box');
          bq.classList.add('rph-qb');
          bq.insertAdjacentHTML('beforeend', motif);
          var pAttr = null;
          if (ps.length > 1) {
            var p9 = ps[ps.length - 1];
            var t9 = (p9.textContent || '').trim();
            var aGras = estGras(p9, bq) || !!p9.querySelector('strong,b') || GRAS.test(p9.innerHTML);
            if (/^[-–—]/.test(t9)) pAttr = p9;
            else if (gras && t9 && t9.length <= 80 && !aGras && !/[.!?…]$/.test(t9)) pAttr = p9;
          }
          if (pAttr) {
            pAttr.classList.add('rph-qattr2');
             
            var it = document.createTreeWalker(pAttr, NodeFilter.SHOW_TEXT);
            var tn;
            while ((tn = it.nextNode())) {
              if (tn.nodeValue.trim()) { tn.nodeValue = tn.nodeValue.replace(/^\s*[-\u2013\u2014]\s*/, ''); break; }
            }
          }
        }
      });
    }

     
     
     
     
     
     
    _fitPoster(bq) {
      var txtEl = bq.querySelector('.rph-qtxt');
      var lineEl = bq.querySelector('.rph-qline');
      if (!txtEl || !lineEl) return true;
      var dispo = txtEl.clientWidth;
      if (!dispo || dispo < 120) return false;                  
      var phrase = (lineEl.textContent || '').replace(/\s+/g, ' ').trim();
      var probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font-size:100px;font-style:italic;text-transform:uppercase;letter-spacing:.005em';
      probe.style.fontFamily = getComputedStyle(txtEl).fontFamily;
      probe.textContent = phrase;
      document.body.appendChild(probe);
      var w100 = probe.getBoundingClientRect().width || 1;
       
       
      var motLong = phrase.split(' ').reduce(function (a, b) { return b.length > a.length ? b : a; }, '');
      probe.textContent = motLong;
      var wMot100 = probe.getBoundingClientRect().width || 1;
      probe.parentNode.removeChild(probe);
       
       
       
      var etroit = dispo < 300;
      var n = phrase.length;
      var maxL = (n <= 22 ? 2 : n <= 50 ? 3 : n <= 78 ? 4 : 5) + (etroit ? 1 : 0);
      var plafond = etroit ? 46 : 54;                            
      var plancher = etroit ? 28 : 34;                           
       
       
      var fs = Math.min(plafond, Math.floor(100 * dispo * 0.84 / w100) - 2);
      if (fs < plancher) fs = plancher;
       
       
      var capMot = Math.floor(100 * dispo * 0.97 / wMot100);
      if (fs > capMot) fs = Math.max(18, capMot);
      txtEl.style.fontSize = fs + 'px';
      var lignes = function () {
        var t = {};
        [].forEach.call(lineEl.getClientRects(), function (r) { t[Math.round(r.top)] = 1; });
        return Object.keys(t).length;
      };
       
       
      var garde = 0;
      while (lignes() > maxL && fs > plancher && garde < 20) { fs -= 2; txtEl.style.fontSize = fs + 'px'; garde++; }
      return true;
    }

    _onBodyFed() {
      var self = this;
      if (this._bodyFedObs) { this._bodyFedObs.disconnect(); this._bodyFedObs = null; }
      clearTimeout(this._bodyFedTimer);
      clearTimeout(this._bodyFedSettle);
      var fired = false;
      var fire = function () {
        if (fired) return;
        fired = true;
        if (self._bodyFedObs) { self._bodyFedObs.disconnect(); self._bodyFedObs = null; }
        clearTimeout(self._bodyFedTimer);
        clearTimeout(self._bodyFedSettle);
        try { self._enhanceCast(); } catch (e) {   }
        self._emit('post-body-ready', {});
      };
      var v = document.querySelector('.wixui-rich-content-viewer');
      if (v && 'MutationObserver' in window) {
        this._bodyFedObs = new MutationObserver(function () {
          clearTimeout(self._bodyFedSettle);
          self._bodyFedSettle = setTimeout(fire, 120);    
        });
        this._bodyFedObs.observe(v, { childList: true, subtree: true, characterData: true });
        this._bodyFedTimer = setTimeout(fire, 700);        
      } else {
        fire();
      }
    }

     
     
     
     
    _data() {
      var raw = this.getAttribute('data-payload');
      if (raw) { try { return Object.assign({}, DEMO, JSON.parse(raw)); } catch (e) {   } }
      return null;
    }

     
     
     
    _renderSkeleton() {
      this.innerHTML =
        '<div class="rph-root">' +
          '<div class="rph-sub"><div class="in">' +
            '<button class="rph-back" data-rph-back>' + IC.back + 'Retour</button>' +
            '<nav class="rph-crumb" aria-label="Fil d\'ariane">' +
              '<a data-rph-hub>Actualités</a>' +
              '<span class="sep">›</span>' +
              '<span class="rph-sklb" style="width:86px;height:14px;background:linear-gradient(100deg,rgba(10,26,53,.06) 30%,rgba(10,26,53,.13) 50%,rgba(10,26,53,.06) 70%);background-size:200% 100%"></span>' +
            '</nav>' +
            '<a class="rph-rub" data-rph-hub aria-label="Explorer toutes les actualités">' + IC.grid + 'Explorer</a>' +
            '<button type="button" class="rph-rshare" data-rph-share="native" aria-label="Partager l\'article">' + IC.share + '</button>' +
          '</div></div>' +
          '<div class="rph-hw"><section class="rph-hero rph-skl" aria-busy="true" aria-label="Chargement de l\'article">' +
            '<div class="rph-main">' +
              '<div class="rph-kick"><span class="rph-sklb" style="width:104px;height:26px"></span><span class="rph-sklb" style="width:84px;height:26px"></span></div>' +
              '<span class="rph-sklb" style="width:88%;height:34px"></span>' +
              '<span class="rph-sklb" style="width:72%;height:34px"></span>' +
              '<span class="rph-sklb" style="width:46%;height:34px;margin-bottom:12px"></span>' +
              '<span class="rph-sklb" style="width:92%;height:13px"></span>' +
              '<span class="rph-sklb" style="width:78%;height:13px;margin-bottom:12px"></span>' +
              '<div class="rph-kick"><span class="rph-sklb" style="width:92px;height:12px"></span><span class="rph-sklb" style="width:118px;height:12px"></span></div>' +
            '</div>' +
            '<div class="rph-media"><div class="card rph-sklb" style="min-height:250px;border-radius:12px 4px 12px 4px"></div></div>' +
          '</section></div>' +
        '</div>';
      this._bindInFlow();
      this._i18n();
    }

    _render() {
      var d = this._data();
      if (!d) { this._renderSkeleton(); return; }
      var crumbCat = (d.categories && d.categories[0]) || (d.formatLabel || d.format) || 'Actualités';
      var crumbSlug = d.categorySlug || crumbCat;    
       
       
      var crumbDouble = /^(actualit|news$)/i.test(String(crumbCat).normalize('NFD').replace(/[̀-ͯ]/g, '').trim());
      var coverInner = d.cover ? '<img src="' + esc(d.cover) + '" alt="">' : coverPlaceholder();

      this.innerHTML =
        '<div class="rph-root">' +
          '<div class="rph-sub"><div class="in">' +
            '<button class="rph-back" data-rph-back>' + IC.back + 'Retour</button>' +
            '<nav class="rph-crumb" aria-label="Fil d\'ariane">' +
              (crumbDouble
                ? '<a class="cur" data-rph-hub title="Toutes les actualités">Actualités</a>'
                : '<a data-rph-hub>Actualités</a>' +
                  '<span class="sep">›</span>' +
                  '<a class="cur" data-rph-cat="' + esc(crumbSlug) + '" title="Voir la rubrique ' + esc(crumbCat) + '">' + esc(crumbCat) + '</a>') +
            '</nav>' +
            '<a class="rph-rub" data-rph-hub aria-label="Explorer toutes les actualités">' + IC.grid + 'Explorer</a>' +
            '<button type="button" class="rph-rshare" data-rph-share="native" aria-label="Partager l\'article">' + IC.share + '</button>' +
          '</div></div>' +
          '<div class="rph-hw"><section class="rph-hero">' +
            '<div class="rph-blur">' + (d.cover ? '<img src="' + esc(d.cover) + '" alt="">' : '<div class="ph"></div>') + '</div>' +
            '<div class="rph-main">' +
              '<div class="rph-kick">' +
                '<span class="rph-b fmt">' + esc(d.formatLabel || d.format) + '</span>' +
                (d.featured ? '<span class="rph-b une">' + IC.flame + 'À la une</span>' : '') +
              '</div>' +
              '<h1>' + esc(d.title) + '</h1>' +
              (d.excerpt ? '<p class="rph-chap">' + esc(d.excerpt) + '</p>' : '') +
              '<div class="rph-meta">' +
                '<span class="m">' + IC.cal + esc(d.date) + '</span>' +
                (d.readingTime ? '<span class="m">' + IC.clock + esc(d.readingTime) + ' min de lecture</span>' : '') +
                (d.author ? '<span class="m">Par ' + esc(d.author) + '</span>' : '') +
              '</div>' +
              (d.entity ? '<a class="rph-ent" data-rph-entity><span class="av">' + esc(d.entity.initials || '') + '</span>' + esc(d.entity.name) + '<span class="go">Voir le skipper ›</span></a>' : '') +
            '</div>' +
            '<div class="rph-media"><div class="card">' + coverInner + '</div></div>' +
            '<svg class="rph-waves" viewBox="0 0 1200 200" preserveAspectRatio="none"><path d="M0 100 Q150 60 300 100 T600 100 T900 100 T1200 100 V200 H0Z" fill="currentColor"/></svg>' +
            (d.edition ? '<span class="rph-edtag" aria-hidden="true">' + esc(d.edition) + '</span>' : '') +
          '</section></div>' +
        '</div>';

      this._bindInFlow();
      this._i18n();
    }

    _bindInFlow() {
      var self = this;
      this.querySelectorAll('[data-rph-share]').forEach(function (el) {
        el.onclick = function () { self._doShare(el); };
      });
      var back = this.querySelector('[data-rph-back]');
      if (back) back.onclick = function () { self._emitBack(); };
      var ent = this.querySelector('[data-rph-entity]');
      if (ent) ent.onclick = function () { self._emit('post-entity', (self._data() || {}).entity); };
       
      this.querySelectorAll('[data-rph-hub]').forEach(function (el) {
        el.onclick = function () { self._emitBack(); };
      });
       
      this.querySelectorAll('[data-rph-cat]').forEach(function (el) {
        el.onclick = function () { self._emit('post-category', el.getAttribute('data-rph-cat')); };
      });
    }

    _mountPortal() {
      var d = this._data() || {};
      var p = document.createElement('div');
      p.className = 'rph-portal';
      p.innerHTML =
        '<div class="rph-top" data-rph-top></div>' +
        '<div class="rph-dock" aria-label="Outils de lecture">' +
          '<div class="rph-ring"><svg viewBox="0 0 44 44" width="44" height="44">' +
            '<defs><linearGradient id="rphring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FCF150"/><stop offset="1" stop-color="#00676E"/></linearGradient></defs>' +
            '<circle cx="22" cy="22" r="19" fill="none" stroke="#E1E6EE" stroke-width="4"/>' +
            '<circle data-rph-ring cx="22" cy="22" r="19" fill="none" stroke="url(#rphring)" stroke-width="4" stroke-linecap="round" stroke-dasharray="' + CIRC + '" stroke-dashoffset="' + CIRC + '"/>' +
          '</svg><span class="pct" data-rph-pct>0%</span></div>' +
          '<div class="div"></div>' +
          '<button class="rph-d accent" data-rph-back aria-label="Retour aux actualités">' + IC.back + '<span class="tip">Retour aux actualités</span></button>' +
          '<button class="rph-d" data-rph-share="x" aria-label="Partager sur X">' + IC.x + '<span class="tip">Partager sur X</span></button>' +
          '<button class="rph-d" data-rph-share="fb" aria-label="Partager sur Facebook">' + IC.fb + '<span class="tip">Partager sur Facebook</span></button>' +
          '<button class="rph-d" data-rph-copy aria-label="Copier le lien">' + IC.link + '<span class="tip">Copier le lien</span></button>' +
          '<button class="rph-d save' + (ESPACE_LIVE ? '' : ' is-soon') + '" data-rph-save aria-label="Enregistrer"' + (ESPACE_LIVE ? '' : ' aria-disabled="true"') + '>' + IC.bookmark + '<span class="tip">' + (ESPACE_LIVE ? 'Enregistrer dans Mon Espace Rhum' : 'Bientôt · Mon Espace Rhum') + '</span></button>' +
          '<div class="div"></div>' +
          '<button class="rph-d" data-rph-up aria-label="Haut de page">' + IC.up + '<span class="tip">Haut de page</span></button>' +
        '</div>' +
        '<div class="rph-read" data-rph-read><div class="in">' +
          '<button class="rph-rback" data-rph-back>' + IC.back + 'Actualités</button>' +
          '<div class="rph-rtitle" data-rph-rtitle>' + esc(d.title) + '</div>' +
          '<div class="rph-racts"><button class="save' + (ESPACE_LIVE ? '' : ' is-soon') + '" data-rph-save aria-label="Enregistrer"' + (ESPACE_LIVE ? '' : ' aria-disabled="true" title="Bientôt · Mon Espace Rhum"') + '>' + IC.bookmark + '</button>' +
            '<button data-rph-share="native" aria-label="Partager">' + IC.share + '</button></div>' +
          '<span class="rph-rprog" data-rph-rprog></span>' +
        '</div></div>';
      document.body.appendChild(p);
      this._portal = p;
      this._dock = p.querySelector('.rph-dock');
      this._ring = p.querySelector('[data-rph-ring]');
      this._pct = p.querySelector('[data-rph-pct]');
      this._top = p.querySelector('[data-rph-top]');
      this._read = p.querySelector('[data-rph-read]');
      this._rprog = p.querySelector('[data-rph-rprog]');
      this._bindPortal();
      this._i18n();
    }

    _bindPortal() {
      var self = this;
      this._portal.querySelectorAll('[data-rph-back]').forEach(function (el) { el.onclick = function () { self._emitBack(); }; });
      this._portal.querySelectorAll('[data-rph-up]').forEach(function (el) { el.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); }; });
      this._portal.querySelectorAll('[data-rph-save]').forEach(function (el) {
        el.onclick = function () { if (ESPACE_LIVE) self._toggleSave(); else self._soonToast(); };
      });
      this._portal.querySelectorAll('[data-rph-share]').forEach(function (el) {
        el.onclick = function () { self._doShare(el); };
      });
      var copy = this._portal.querySelector('[data-rph-copy]');
      if (copy) copy.onclick = function () {
        var tip = copy.querySelector('.tip'), prev = tip ? tip.textContent : '';
        if (navigator.clipboard) { try { navigator.clipboard.writeText(location.href); } catch (e) {} }
        if (tip) { tip.textContent = 'Lien copié ✓'; setTimeout(function () { tip.textContent = prev; }, 1400); }
      };
    }

    


    _lireEtatSave() {
      var v = this.getAttribute('data-save-state') || '';
      this._anon = (v === 'anon');
      this._saved = (v === 'later');
      this._peindreSave();
    }

    _peindreSave() {
      if (!this._portal) return;
      var on = !!this._saved;
      var self = this;
      this._portal.querySelectorAll('[data-rph-save]').forEach(function (el) {
        el.classList.toggle('on', on);
        el.setAttribute('aria-pressed', on ? 'true' : 'false');
        

        el.setAttribute('aria-label', self._t(self._anon ? 'Enregistrer dans Mon Espace Rhum'
                                     : (on ? 'Retirer de Mon Espace Rhum' : 'Enregistrer dans Mon Espace Rhum')));
        var tip = el.querySelector('.tip');
        if (tip && ESPACE_LIVE) tip.textContent = self._t(on ? 'Retirer de Mon Espace Rhum' : 'Enregistrer dans Mon Espace Rhum');
      });
    }

    _toggleSave() {
      


      if (this._anon) { this._toast(this._t('Connecte-toi pour enregistrer cette actu')); return; }
      this._saved = !this._saved;
      this._peindreSave();
      this._emit('post-save', { saved: this._saved, state: this._saved ? 'later' : 'none' });
      this._toast(this._t(this._saved ? 'Enregistre dans Mon Espace Rhum' : 'Retire de Mon Espace Rhum'));
    }

    



    

    _retourSave() {
      var brut = this.getAttribute('data-save-result');
      if (!brut) return;
      var d = null;
      try { d = JSON.parse(brut); } catch (e) { return; }
      if (d && d.ok === false) this.saveResultat(false);
    }

    saveResultat(ok) {
      if (ok) return;
      this._saved = !this._saved;
      this._peindreSave();
      this._toast(this._t('Impossible d enregistrer pour le moment'));
    }

    _syncPortalMeta() {
      if (!this._portal) return;
      var t = this._portal.querySelector('[data-rph-rtitle]');
      if (t) t.textContent = (this._data() || {}).title || '';
    }

    

    _bounds() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var head = this.getBoundingClientRect();
      var start = head.top + y;                  
      var more = document.querySelector('rdr-post-more');
      var end;
      if (more) { end = more.getBoundingClientRect().top + y; }
      else { end = (document.body.scrollHeight) - Math.round(window.innerHeight * 0.4); }
      if (end <= start) end = start + window.innerHeight;
      return { start: start, end: end };
    }

    _updateProgress() {
      if (!this._portal) return;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var vh = window.innerHeight;
      var b = this._bounds();
       
       
       
       
      var span = (b.end - vh) - b.start;
      var done = span > 40 ? (y - b.start) / span : 0;
      done = Math.min(1, Math.max(0, done));
      var pc = Math.round(done * 100);
      this._top.style.width = pc + '%';
      this._rprog.style.width = pc + '%';
      this._ring.style.strokeDashoffset = (CIRC * (1 - done)).toFixed(1);
      this._pct.textContent = pc + '%';
       
       
      var heroEl = this.querySelector('.rph-hero');
      var show = y > 60 && (heroEl ? (heroEl.getBoundingClientRect().bottom < 8) : true);
      this._read.classList.toggle('show', show);
       
       
       
      if (this._dock) {
        var moreEl = document.querySelector('rdr-post-more');
        if (moreEl) {
          var H = this._dock.offsetHeight || 320;
          var parkTop = moreEl.getBoundingClientRect().bottom + y - H - 16;
          if ((y + vh / 2 - H / 2) >= parkTop) {
            this._dock.style.top = (parkTop - y) + 'px';    
            this._dock.style.transform = 'none';
          } else {
            this._dock.style.top = '50%';
            this._dock.style.transform = 'translateY(-50%)';
          }
        }
      }
    }

     
     
     
     
     
     
     
    _observeCast() {
      if (this._castObs) return;
      var v = document.querySelector('.wixui-rich-content-viewer');
      if (!v || !v.parentElement) return;
      var self = this;
      this._castObs = new MutationObserver(function () {
        clearTimeout(self._castHeal);
        self._castHeal = setTimeout(function () { self._enhanceCast(); }, 250);
      });
      this._castObs.observe(v.parentElement, { childList: true, subtree: true, characterData: true });
    }

    










    _enhanceAudio() {
      var estVide = function (el) { return !el.textContent.replace(/[\s ]/g, ''); };
      var precedentUtile = function (el) {
        var n = el.previousElementSibling;
        while (n && estVide(n)) n = n.previousElementSibling;
        return n;
      };
      var suivantUtile = function (el) {
        var n = el.nextElementSibling;
        while (n && estVide(n)) n = n.nextElementSibling;
        return n;
      };
       
       
       
      var contenuDe = function (el, tag) {
        if (!el) return null;
        if (el.tagName === tag) return el;
        if (el.children.length === 1 && el.firstElementChild.tagName === tag) return el.firstElementChild;
        return null;
      };
       
       
       
       
      var hautDe = function (lec) {
        var n = lec;
        for (var i = 0; i < 6 && n.parentElement; i++) {
          var f = n.parentElement.children;
          for (var k = 0; k < f.length; k++) {
            if (f[k] !== n && /^(P|H\d|BLOCKQUOTE)$/.test(f[k].tagName)) return n;
          }
          n = n.parentElement;
        }
        return n;
      };

      







      var cablerLecture = function (son, carte) {
        if (!son || son.getAttribute('data-rph-a-son')) return;
        son.setAttribute('data-rph-a-son', '1');
        var avance = function () {
          if (!son.duration || !isFinite(son.duration)) return;
          carte.style.setProperty('--rph-a-prog', (son.currentTime / son.duration * 100) + '%');
        };
        son.addEventListener('timeupdate', avance);
        son.addEventListener('seeked', avance);
        son.addEventListener('play', function () {
           
          var tous = document.querySelectorAll('.wixui-rich-content-viewer .rph-a audio');
          for (var t = 0; t < tous.length; t++) {
            if (tous[t] !== son && !tous[t].paused) { try { tous[t].pause(); } catch (e) {   } }
          }
          carte.classList.add('rph-a--joue');
        });
        son.addEventListener('pause', function () { carte.classList.remove('rph-a--joue'); });
        son.addEventListener('ended', function () {
          carte.classList.remove('rph-a--joue');
          carte.style.setProperty('--rph-a-prog', '0%');
        });
      };

       
       
       
       
       
       
      this._veilleAudio();

      var lecteurs = document.querySelectorAll('.wixui-rich-content-viewer [data-hook="audio-viewer"]');
      for (var i = 0; i < lecteurs.length; i++) {
        var lec = lecteurs[i];
        try {
          if (lec.getAttribute('data-rph-a')) continue;
           
           
           
           
           
           
          lec.setAttribute('data-rph-a', '1');

          var haut = hautDe(lec);
          var carte = document.createElement('div');
          carte.className = 'rph-a';
          haut.parentNode.insertBefore(carte, haut);

          var av = precedentUtile(carte);
          var creneau = contenuDe(av, 'P');
          if (creneau) {
            creneau.className += (creneau.className ? ' ' : '') + 'rph-a__sur';
            carte.appendChild(av);           
          }
          carte.appendChild(haut);

           
           
           
           
           
          var ap = suivantUtile(carte);
          var cit = contenuDe(ap, 'P');
          if (cit && /^\s*«/.test(cit.textContent)) {
            cit.className += (cit.className ? ' ' : '') + 'rph-a__cit';
            carte.appendChild(ap);
          }

          if (!lec.querySelector('img')) carte.className += ' rph-a--nopic';

          cablerLecture(lec.querySelector('audio'), carte);

           
           
           
          var masqueVoisinsVides = function (dep, sens) {
            var n = dep[sens];
            while (n && estVide(n)) {
              if (n.className.indexOf('rph-a__vide') < 0) n.className += (n.className ? ' ' : '') + 'rph-a__vide';
              n = n[sens];
            }
          };
          masqueVoisinsVides(carte, 'previousElementSibling');
          masqueVoisinsVides(carte, 'nextElementSibling');
        } catch (e) {   }
      }
    }

    














    _veilleAudio() {
      if (this._obsAudio || typeof MutationObserver === 'undefined') return;
      var cible = document.querySelector('.wixui-rich-content-viewer');
      if (!cible) return;
      var self = this;
      var RESTE = '.wixui-rich-content-viewer [data-hook="audio-viewer"]:not([data-rph-a])';
      var planifie = false;
       
       
      var passe = function () {
        planifie = false;
        if (!document.querySelector(RESTE)) return;
        try { self._enhanceAudio(); } catch (e) {   }
         
         
        self._veilleTours = (self._veilleTours || 0) + 1;
        if (document.querySelector(RESTE) && self._veilleTours < 90) requestAnimationFrame(passe);
        else self._veilleTours = 0;
      };
      var demande = function () {
         
         
        if (planifie) return;
        planifie = true;
        requestAnimationFrame(passe);
      };
      self._obsAudio = new MutationObserver(demande);
      self._obsAudio.observe(cible, { childList: true, subtree: true });
      demande();    
    }

    _enhanceCast() {
      try { this._enhanceQuotes(); } catch (e) {   }
       
       
       
      try { this._enhanceAudio(); } catch (e) {   }
       
       
      var existing = document.querySelector('.rph-cast');
      if (existing) {
        var its = existing.querySelectorAll('.rph-cast-item');
        for (var k = 0; k < its.length; k++) {
          try { stripLeadDash(its[k]); } catch (e) {   }
        }
        return;
      }
      var hs = document.querySelectorAll(
        '.wixui-rich-content-viewer h2,.wixui-rich-content-viewer h3,.wixui-rich-content-viewer h4,' +
        '.wixui-rich-content-viewer h5,.wixui-rich-content-viewer h6');
      for (var i = 0; i < hs.length; i++) {
        var h = hs[i];
        if (!/t[ée]moignent|intervenant/i.test(h.textContent || '')) continue;
         
         
         
         
        var items = [], el = h.nextElementSibling;
        while (el && items.length < 12) {
          var tag = el.tagName;
          if (tag === 'P' || tag === 'DIV') {
            if (tag === 'DIV' && el.querySelector('div,h1,h2,h3,h4,h5,h6,figure,ul,ol')) break;  
            var t = (el.textContent || '').trim();
            if (!t) { el = el.nextElementSibling; continue; }           
            if (/^[-–—]/.test(t)) { items.push(el); el = el.nextElementSibling; continue; }
          }
          break;
        }
        if (items.length < 2) continue;                                 
        try {
          var box = document.createElement('div');
          box.className = 'rph-cast';
          h.parentNode.insertBefore(box, h);
          box.appendChild(h);
          var ci = document.createElement('span');
          ci.className = 'ci';
          ci.setAttribute('aria-hidden', 'true');
          ci.innerHTML = IC.users;
          h.insertBefore(ci, h.firstChild);
          for (var j = 0; j < items.length; j++) {
            stripLeadDash(items[j]);
            items[j].classList.add('rph-cast-item');
            box.appendChild(items[j]);
          }
        } catch (e) {
           
          this._castTries = 99;
          if (this._castObs) { this._castObs.disconnect(); this._castObs = null; }
          clearTimeout(this._castHeal);
        }
        return;
      }
    }

     
     
     
    _signalReady() {
      if (this._ready) return;
      this._ready = true;
      var self = this;
      [0, 300, 700].forEach(function (d) {
        setTimeout(function () { self._emit('post-ready', {}); }, d);
      });
    }

     
     
     
     
     
     
     
    _hubBehind() {
      try {
        var r = JSON.parse(sessionStorage.getItem('rnRestore') || 'null');
        if (!r || !r.ts || Date.now() - r.ts > 30 * 60000) return null;
        var here = location.pathname.replace(/\/+$/, '');
        var target = '';
        try { target = new URL(r.to || '', location.origin).pathname.replace(/\/+$/, ''); } catch (e) { target = ''; }
        return { direct: !!target && target === here, hubUrl: r.hubUrl || '' };
      } catch (e) { return null; }
    }
     
     
     
    _doShare(el) {
      var mode = el.getAttribute('data-rph-share');
      var url = location.href;
      var d = this._data();
      var titre = (d && d.title) || document.title;
      if (mode === 'x') {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(titre) + '&url=' + encodeURIComponent(url), '_blank', 'noopener,width=600,height=460');
      } else if (mode === 'fb') {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank', 'noopener,width=600,height=460');
      } else if (navigator.share) {
        navigator.share({ title: titre, url: url }).catch(function () {   });
      } else if (navigator.clipboard) {
        try { navigator.clipboard.writeText(url); } catch (e) {   }
        el.classList.add('ok');
        setTimeout(function () { el.classList.remove('ok'); }, 1200);
      }
      this._emit('post-share', mode);
    }

     
     
     
    _soonToast() { this._toast('Bientôt · Mon Espace Rhum'); }

    _toast(texte) {
      var t = document.querySelector('.rph-soon-toast');
      if (!t) {
        t = document.createElement('div');
        t.className = 'rph-soon-toast';
        t.textContent = texte;
        t.style.cssText = 'position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(8px);background:#0A1A35;color:#fff;font:700 12px/1.3 Montserrat,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:12px 18px;border-radius:12px 4px 12px 4px;box-shadow:0 12px 30px rgba(10,26,53,.35);z-index:2147483000;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;text-align:center';
        document.body.appendChild(t);
      }
      t.textContent = texte;    
      clearTimeout(this._soonTimer);
      requestAnimationFrame(function () { t.style.opacity = '1'; t.style.transform = 'translateX(-50%)'; });
      this._soonTimer = setTimeout(function () { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(8px)'; }, 1900);
    }

    _emitBack() {
      var hub = this._hubBehind();
      if (hub && hub.direct && window.history.length > 1) {
        try { window.history.back(); return; } catch (e) {   }
      }
      this._emit('post-back', hub && hub.hubUrl ? { url: hub.hubUrl } : {});
    }
    _emit(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { detail: detail, bubbles: true, composed: true }));
    }
  }

  if (!customElements.get('rdr-post-head')) {
    customElements.define('rdr-post-head', RdrPostHead);
  }
})();
})();
;(function(){
(function () {
  'use strict';

  var STYLE_ID = 'rpm-styles';

   
  var CAT = {
    actualites: { c: '#0B6E6B', bg: '#DCF2EF', ic: 'news' },
    news: { c: '#0B6E6B', bg: '#DCF2EF', ic: 'news' },
    video: { c: '#A14D00', bg: '#FBEAD6', ic: 'play' },
    image: { c: '#5747C9', bg: '#E9E6FB', ic: 'cam' },
    audio: { c: '#0E5B84', bg: '#DCEBF7', ic: 'mic2' },
    interview: { c: '#8A6C00', bg: '#FBF3CD', ic: 'mic' }
  };


  var IC = {
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.7l6.8-4.4M8.6 13.3l6.8 4.4"/></svg>',
    xnet: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L2.2 3h6.4l4.4 5.9L17.5 3zm-1.1 16.1h1.7L7.7 4.7H5.9l10.5 14.4z"/></svg>',
    fbnet: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z"/></svg>',
    lien: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13.5a5 5 0 0 0 7.1 0l2.4-2.4a5 5 0 0 0-7.1-7.1l-1.2 1.2M14 10.5a5 5 0 0 0-7.1 0l-2.4 2.4a5 5 0 0 0 7.1 7.1l1.2-1.2"/></svg>',
    news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>',
    cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3.2"/><path d="M8 6l1.5-2h5L16 6"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM6 11a6 6 0 0 0 12 0M12 18v3"/></svg>',
    mic2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM6 11a6 6 0 0 0 12 0M12 18v3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3c1 3-1 5-2 6-1.5 1.5-2 3-2 5a6 6 0 0 0 12 0c0-3-2-5-3-7-.5 2-2 2.5-2.5 1C11 7 12 5 12 3z"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    play2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3l14 9-14 9z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg>',
    helm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="6.2"/><circle cx="12" cy="12" r="1.7"/><path d="M12 5.8V2.4M12 21.6v-3.4M18.2 12h3.4M2.4 12h3.4M16.4 7.6l2.4-2.4M5.2 18.8l2.4-2.4M16.4 16.4l2.4 2.4M5.2 5.2l2.4 2.4"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    duo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.8 20.4c.6-3.4 3.1-5.4 6.2-5.4s5.6 2 6.2 5.4"/><path d="M16.4 5.2a3.4 3.4 0 0 1 0 5.6M18.9 14.6c1.4.9 2.4 2.4 2.8 4.4"/></svg>'
  };

  var CSS = [
    '.rpm-root{',
    '--navy:#0A1A35;--navy-2:#123A5C;--navy-3:#0E4B52;',
    '--amber:#FCF150;--teal:#5DBFC0;--teal-deep:#00676E;',
    '--gold:#C8922A;--gold-bg:#FBF1DC;',
    '--bg:#F2F6F9;--surface:#fff;--ink:#0A1A35;--ink-2:#45536E;--ink-3:#8593A9;',
    '--line:#E1E6EE;--line-strong:#C6CFDC;',
    '--r-card:18px 4px 14px 4px;--r-ui:12px 4px 12px 4px;',
    '--shadow:0 1px 2px rgba(10,26,53,.04),0 5px 18px rgba(10,26,53,.07);',
    '--shadow-lift:0 3px 6px rgba(10,26,53,.07),0 14px 34px rgba(10,26,53,.13);',
    "--dsp:'Varien','Archivo Black','Archivo',Impact,system-ui,sans-serif;",
    "--body:'Montserrat',system-ui,-apple-system,sans-serif;",
    'font-family:var(--body);color:var(--ink);',
    'border-top:1px solid var(--line);background:linear-gradient(180deg,var(--bg),#eaf0f4);',
    'padding:52px 0 8px;display:block}',
    '.rpm-root *{box-sizing:border-box}',
    '.rpm-root a{color:inherit;text-decoration:none}',
    '.rpm-in{max-width:1180px;margin:0 auto;padding:0 24px}',

     
    '.rpm-seg{display:flex;align-items:center;gap:12px;margin:0 0 20px}',
    '.rpm-segic{width:32px;height:32px;border-radius:9px 3px 9px 3px;background:var(--navy);color:var(--amber);display:grid;place-items:center;flex:0 0 auto}',
    '.rpm-segic svg{width:16px;height:16px}',
    '.rpm-seg h3{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:clamp(17px,2.2vw,24px);letter-spacing:.01em;margin:0;color:var(--navy);line-height:1;white-space:nowrap}',
    '.rpm-seg .rule{flex:1;height:1px;background:var(--line-strong)}',
    '.rpm-seg .why{font-size:11px;font-weight:700;letter-spacing:.03em;color:var(--ink-3);white-space:nowrap}',
    '@media(max-width:600px){.rpm-seg .why{display:none}}',
    '.rpm-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-bottom:44px}',

     
    '.rpm-card{background:var(--surface);border-radius:var(--r-card);box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column;transition:transform .22s,box-shadow .22s;position:relative;min-width:0;cursor:pointer}',
    '.rpm-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift)}',
    


    '.rpm-hit{position:absolute;inset:0;z-index:1}',
    














    '.rpm-card[data-rpm-charge]{cursor:progress;pointer-events:none}',
    

    '.rpm-card[data-rpm-charge] .rpm-thumb img{filter:brightness(.78)}',
    '.rpm-card[data-rpm-charge] .rpm-playdisc,.rpm-card[data-rpm-charge] .rpm-fmtic,.rpm-card[data-rpm-charge] .rpm-newpatch{opacity:0;transition:opacity .18s}',
    '.rpm-navspin{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:24;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(10,26,53,.66);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);box-shadow:0 6px 16px rgba(7,16,34,.42);pointer-events:none;animation:rpm-spin-in .18s ease both}',
    '.rpm-navspin svg{width:24px;height:24px;transform-origin:50% 50%;animation:rpm-spin .9s linear .5s infinite}',
    '.rpm-navspin-trk{fill:none;stroke:rgba(255,255,255,.16);stroke-width:3.4}',
    '.rpm-navspin-arc{fill:none;stroke:url(#rpm-spg);stroke-width:3.4;stroke-linecap:round;stroke-dasharray:94.2;stroke-dashoffset:94.2;transform:rotate(-90deg);transform-box:fill-box;transform-origin:50% 50%;animation:rpm-arc-draw .55s cubic-bezier(.3,.75,.3,1) forwards}',
    '@keyframes rpm-arc-draw{to{stroke-dashoffset:24}}',
    '@keyframes rpm-spin{to{transform:rotate(360deg)}}',
    '@keyframes rpm-spin-in{from{opacity:0;transform:translate(-50%,-50%) scale(.6)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}',
    

    '@media (prefers-reduced-motion:reduce){.rpm-navspin,.rpm-navspin svg,.rpm-navspin-arc{animation:none}}',
    '.rpm-title a,.rpm-classtag{position:relative;z-index:2}',
    '.rpm-thumb{aspect-ratio:16/9;position:relative;overflow:hidden;background:linear-gradient(140deg,var(--navy-2),var(--navy-3))}',
    '.rpm-thumb img,.rpm-thumb .ph{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.6,.2,1)}',
    '.rpm-card:hover .rpm-thumb img,.rpm-card:hover .rpm-thumb .ph{transform:scale(1.045)}',
    '.rpm-fmtic{position:absolute;top:14px;right:14px;width:38px;height:38px;border-radius:12px 4px 12px 4px;background:var(--navy);display:grid;place-items:center;color:var(--amber);border:1px solid rgba(255,255,255,.16);box-shadow:0 4px 14px rgba(7,16,34,.42);z-index:3}',
    '.rpm-fmtic svg{width:16px;height:16px}',
    '.rpm-card--photo .rpm-fmtic{top:20px;right:20px}',
    '.rpm-card--photo .rpm-newpatch{top:18px;left:18px}',
    '.rpm-card--photo .rpm-thumb::before{content:"";position:absolute;inset:10px;border:1px solid rgba(255,255,255,.42);border-radius:12px 3px 10px 3px;z-index:3;pointer-events:none}',
    '.rpm-playdisc{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:50%;background:var(--amber);color:var(--navy);display:grid;place-items:center;box-shadow:0 6px 22px rgba(10,26,53,.5);z-index:2;pointer-events:none}',
    '.rpm-playdisc svg{width:20px;height:20px;margin-left:2px}',
    '.rpm-card--video:hover .rpm-playdisc{transform:translate(-50%,-50%) scale(1.12)}',
    '.rpm-newpatch{position:absolute;top:10px;left:10px;z-index:3;display:inline-flex;align-items:center;gap:6px;background:var(--amber);color:var(--navy);font-size:9px;font-weight:800;letter-spacing:.12em;padding:5px 11px;border-radius:7px 2px 7px 2px;transform:skewX(-6deg);box-shadow:0 3px 10px rgba(10,26,53,.32)}',
    '.rpm-newpatch::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--navy)}',
    '.rpm-body{padding:18px 20px 20px;display:flex;flex-direction:column;gap:9px;flex:1}',
    '.rpm-meta{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:600;letter-spacing:.03em;color:var(--ink-3);flex-wrap:wrap}',
    '.rpm-meta .clock{display:inline-flex;align-items:center;gap:4px}.rpm-meta .clock svg{width:11px;height:11px}',
    '.rpm-catbadge{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:6px 2px 6px 2px;font-size:9.5px;font-weight:800;letter-spacing:.1em}',
    '.rpm-catbadge svg{width:10px;height:10px}',
    '.rpm-title{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:16.5px;line-height:1.16;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}',
    '.rpm-title a{position:relative;transition:color .15s}.rpm-card:hover .rpm-title a{color:var(--teal-deep)}',
    '.rpm-title a::after{content:"";position:absolute;inset:0}',
    '.rpm-excerpt{color:var(--ink-2);font-size:12.5px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:0}',
    '.rpm-classtags{display:flex;gap:6px;margin-top:auto;padding-top:8px;flex-wrap:wrap;position:relative;z-index:2}',
    '.rpm-classtag{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;letter-spacing:.03em;color:var(--ink-2);border:1px solid var(--line);border-radius:7px 2px 7px 2px;padding:5px 10px;background:var(--surface);cursor:pointer;transition:.15s}',
    '.rpm-classtag:hover{border-color:var(--cc,var(--teal));color:var(--ink);transform:translateY(-1px)}',
     
    '.rpm-card--video{background:linear-gradient(160deg,#101F3C 0%,#0A1A35 62%,#0C2440 100%);color:#fff}',
    '.rpm-card--video .rpm-thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(10,26,53,.5),transparent 55%)}',
    '.rpm-card--video .rpm-title{color:#fff}.rpm-card--video:hover .rpm-title a{color:var(--amber)}',
    '.rpm-card--video .rpm-meta{color:rgba(255,255,255,.65)}',
    '.rpm-card--video .rpm-excerpt{color:rgba(255,255,255,.75)}',
    '.rpm-card--video .rpm-classtag{background:transparent;border-color:rgba(255,255,255,.28);color:rgba(255,255,255,.88)}',

    

    '.rpm-tools{margin-bottom:40px}',
    '.rpm-tgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}',
    '.rpm-tool{position:relative;border-radius:var(--r-card);padding:20px 18px;color:#fff;overflow:hidden;min-height:164px;display:flex;flex-direction:column;justify-content:flex-end;transition:transform .18s,box-shadow .18s;cursor:pointer;box-shadow:var(--shadow);isolation:isolate}',
    '.rpm-tool::after{content:"";position:absolute;inset:0;background:linear-gradient(160deg,rgba(255,255,255,.16),transparent 44%);z-index:1;pointer-events:none}',
    '.rpm-tool--rhum{background:linear-gradient(150deg,#0A1A35 0%,#123A5C 55%,#0E4B52 100%)}',
    '.rpm-tool--carto{background:linear-gradient(150deg,#0E4B52 0%,#00676E 52%,#0B6E6B 100%)}',
    '.rpm-tool--skip{background:linear-gradient(150deg,#241C63 0%,#3B2E9C 55%,#5747C9 100%)}',
    '.rpm-tool--pal{background:linear-gradient(150deg,#FCF150 0%,#F4D24B 60%,#E6B93E 100%);color:var(--navy)}',
     
    '.rpm-tool.is-soon{cursor:default;opacity:.78}',
    '.rpm-tool.is-soon:hover{transform:none;box-shadow:var(--shadow)}',
    '.rpm-soon{position:absolute;top:12px;left:14px;z-index:2;display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.35);color:#fff;font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:4px 9px;border-radius:7px 2px 7px 2px;backdrop-filter:blur(3px)}',
    '.rpm-soon::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--amber, #FCF150)}',
    '.rpm-tool .wm{position:absolute;right:-16px;bottom:-18px;width:108px;height:108px;color:#fff;opacity:.13;z-index:0;pointer-events:none;transform:rotate(-8deg)}',
    '.rpm-tool--pal .wm{color:var(--navy);opacity:.17}',
    '.rpm-tool .wm svg{width:100%;height:100%}',
     
    '.rpm-tool h5{position:relative;z-index:2;margin:0 0 6px;font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:19px;letter-spacing:.01em;line-height:1.08;color:#fff}',
    '.rpm-tool--pal h5{color:var(--navy)}',
    '.rpm-tool p{position:relative;z-index:2;margin:0;font-size:12px;color:rgba(255,255,255,.87);line-height:1.4;font-weight:500}',
    '.rpm-tool--pal p{color:rgba(10,26,53,.76)}',
    '.rpm-tool .arr{position:absolute;top:16px;right:15px;z-index:2;color:var(--amber);font-weight:800;font-size:18px}',
    '.rpm-tool--pal .arr{color:var(--navy)}',
    '.rpm-tool:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift)}',

     
     
    '.rpm-share{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:0 0 26px;padding:16px 20px;background:var(--surface);border:1px solid var(--line);border-radius:var(--r-card);box-shadow:var(--shadow)}',
    '.rpm-share-lb{display:flex;align-items:center;gap:9px;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--navy)}',
    '.rpm-share-lb svg{width:16px;height:16px;color:var(--teal-deep)}',
    '.rpm-share-row{display:flex;gap:8px;margin-left:auto}',
    '.rpm-sbtn{width:40px;height:40px;border-radius:10px 3px 10px 3px;border:1px solid var(--line-strong);background:var(--bg);color:var(--navy);display:grid;place-items:center;cursor:pointer;transition:.15s}',
    '.rpm-sbtn:hover{border-color:var(--teal);color:var(--teal-deep);transform:translateY(-1px)}',
    '.rpm-sbtn.ok{color:var(--teal-deep);border-color:var(--teal)}',
    '.rpm-sbtn svg{width:17px;height:17px}',
    '@media(max-width:560px){.rpm-share{gap:10px}.rpm-share-row{margin-left:0;width:100%;justify-content:flex-start}}',
    '.rpm-tags{margin:0 0 40px;background:linear-gradient(135deg,#fff,#EEF4F8);border:1px solid var(--line);border-radius:var(--r-card);padding:22px 22px 24px;box-shadow:var(--shadow)}',
    '.rpm-tags .rpm-seg{margin-bottom:16px}',
    '.rpm-tagrow{display:flex;flex-wrap:wrap;gap:10px}',
    '.rpm-tag{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--navy);background:var(--surface);border:1px solid var(--line-strong);padding:9px 15px;border-radius:999px;cursor:pointer;transition:.15s}',
    '.rpm-tag::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--gold);flex:0 0 auto}',
    '.rpm-tag:hover{border-color:var(--teal);background:#F0FBFB;transform:translateY(-1px);box-shadow:0 4px 12px rgba(10,26,53,.09)}',

     
    '.rpm-endnav{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;padding:6px 0 24px}',
    '.rpm-endnav button{font-family:var(--body);cursor:pointer;display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:13px 22px;border-radius:var(--r-ui);border:none}',
    '.rpm-endnav .primary{background:var(--navy);color:#fff;box-shadow:var(--shadow)}.rpm-endnav .primary svg{color:var(--amber)}',
    '.rpm-endnav .primary:hover{background:var(--navy-2)}',
    '.rpm-endnav .ghost{background:var(--surface);color:var(--ink-2);border:1px solid var(--line)}',
    '.rpm-endnav .ghost:hover{border-color:var(--teal);color:var(--navy)}',
    '.rpm-endnav svg{width:15px;height:15px}',

    '.rpm-rev{opacity:0;transform:translateY(14px);transition:.5s ease}.rpm-rev.in{opacity:1;transform:none}',

    '@media(max-width:1060px){.rpm-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rpm-tgrid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
    '@media(max-width:620px){.rpm-in{padding-left:14px;padding-right:14px}.rpm-grid{grid-template-columns:1fr;gap:14px}.rpm-tgrid{grid-template-columns:1fr}}',
    '@media(prefers-reduced-motion:reduce){.rpm-root *{transition:none!important}}'
  ].join('');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) {
    var s = String(u == null ? '' : u).trim();
    return /^(https?:|\/)/i.test(s) ? esc(s) : '#';
  }
  function safeColor(c) {
    return /^#[0-9a-f]{3,8}$/i.test(String(c || '')) ? c : '#0A1A35';
  }

  



  function wixImg(url, w, h) {
    var s = String(url || '');
    var id = '';
    var m = s.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/]+)/);
    if (m) { id = m[1]; }
    else { var u = s.match(/^wix:image:\/\/v1\/([^/]+)/); if (u) id = u[1]; }
    if (id) {
      return 'https://static.wixstatic.com/media/' + id +
        '/v1/fill/w_' + w + ',h_' + h + ',al_c,q_80,enc_auto/' + id;
    }
    return safeUrl(url);
  }
  function nrm(s) { return String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim(); }
  function shareCount(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) return 0;
    var setB = b.map(nrm);
    return a.filter(function (x) { return setB.indexOf(nrm(x)) >= 0; }).length;
  }
  function seedFrom(id) {
    var s = String(id || ''), n = 0;
    for (var i = 0; i < s.length; i++) n = (n + s.charCodeAt(i)) % 997;
    return n || 1;
  }
  

  var LANGUE = 'fr';
  function relDate(iso) {
    if (!iso) return '';
    try {
      var d = (iso instanceof Date) ? iso : new Date(String(iso).replace(' ', 'T'));
      if (isNaN(d.getTime())) return '';
      var days = Math.floor((Date.now() - d.getTime()) / 864e5);
      if (days < 1) return "aujourd'hui";
      if (days < 2) return 'hier';
      if (days < 30) return 'il y a ' + days + ' j';
      


      return d.toLocaleDateString(LANGUE === 'en' ? 'en-GB' : 'fr-FR',
        { day: 'numeric', month: 'short', timeZone: 'Europe/Paris' });
    } catch (e) { return ''; }
  }
  function isNewPost(iso) {
    if (!iso) return false;
    try { return (Date.now() - new Date(String(iso).replace(' ', 'T')).getTime()) < 48 * 3600e3; }
    catch (e) { return false; }
  }
  function placeholder(seed) {
    var h1 = 200 + ((seed * 17) % 40) - 20, h2 = h1 + 18;
    return '<svg class="ph" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="rpm' + seed + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(' + h1 + ',48%,20%)"/><stop offset="1" stop-color="hsl(' + h2 + ',55%,11%)"/></linearGradient></defs>' +
      '<rect width="400" height="300" fill="url(#rpm' + seed + ')"/><circle cx="315" cy="66" r="30" fill="#FCF150" opacity=".82"/>' +
      '<path d="M0 208 Q100 184 200 206 T400 203 V300 H0Z" fill="hsl(' + h1 + ',50%,15%)" opacity=".85"/>' +
      '<path d="M0 236 Q120 214 240 236 T400 232 V300 H0Z" fill="hsl(' + h2 + ',58%,10%)"/>' +
      '<path d="M178 86 L206 208 L152 208 Z" fill="#fff" opacity=".9"/><path d="M212 98 L212 208 L256 208 Z" fill="#5DBFC0" opacity=".92"/>' +
      '<rect x="150" y="206" width="112" height="9" rx="3" fill="#0A1A35"/></svg>';
  }

   
   
  var DEMO = {
    current: { skippers: ['Charlie Dalin'], classes: ['imoca'], themes: ['MACIF Santé Prévoyance', 'Préparatifs', 'Édition 2026'], catSlug: 'interview', catLabel: 'Interview' },
    tags: ['Charlie Dalin', 'MACIF Santé Prévoyance', 'IMOCA', 'Interview', 'Préparatifs', 'Édition 2026'],
    candidates: [
      { _id: 'd1', title: 'Dans les coulisses du chantier de MACIF Santé Prévoyance', catSlug: 'image', catSlugs: ['image'], catLabel: 'Coulisses', skippers: ['Charlie Dalin'], classes: ['imoca'], themes: ['MACIF Santé Prévoyance', 'Préparatifs'], publishedDate: '2026-07-08', timeToRead: 4 },
      { _id: 'd2', title: 'IMOCA : pourquoi les foils changent tout sur une transat', catSlug: 'actualites', catSlugs: ['actualites'], catLabel: 'Décryptage', skippers: [], classes: ['imoca'], themes: ['Technique & bateau'], publishedDate: '2026-07-02', timeToRead: 6, excerpt: 'Portance, traînée, prise de risque : la mécanique du vol expliquée.' },
      { _id: 'd3', title: 'Charlie Dalin en 5 dates qui ont marqué sa carrière', catSlug: 'actualites', catSlugs: ['actualites'], catLabel: 'Portrait', skippers: ['Charlie Dalin'], classes: [], themes: ['Portrait', 'Histoire'], publishedDate: '2026-06-24', timeToRead: 5 },
      { _id: 'd4', title: 'Thomas Ruyant : « je viens chercher la gagne »', catSlug: 'interview', catSlugs: ['interview'], catLabel: 'Interview', skippers: ['Thomas Ruyant'], classes: ['imoca'], themes: ['Préparatifs'], publishedDate: '2026-07-06', timeToRead: 7 },
      { _id: 'd5', title: 'La flotte IMOCA au grand complet pour 2026', catSlug: 'actualites', catSlugs: ['actualites'], catLabel: 'Décryptage', skippers: [], classes: ['imoca'], themes: ['Chiffres clés'], publishedDate: '2026-06-28', timeToRead: 4 },
      { _id: 'd6', title: 'Préparatifs : le grand carénage avant le départ', catSlug: 'video', catSlugs: ['video'], catLabel: 'Coulisses', skippers: [], classes: [], themes: ['Préparatifs', 'Coulisses'], publishedDate: '2026-07-12', timeToRead: 3 },
      { _id: 'd8', title: 'Saint-Malo se prépare à vibrer pour le grand départ', catSlug: 'actualites', catSlugs: ['actualites'], catLabel: 'Direct', skippers: [], classes: [], themes: ['Village', 'Départ'], publishedDate: '2026-07-10', timeToRead: 3, pick: true },
      { _id: 'd9', title: 'Un avenir durable : ces skippers qui courent pour l’océan', catSlug: 'actualites', catSlugs: ['actualites'], catLabel: 'Un avenir durable', skippers: [], classes: [], themes: ['Un avenir durable'], publishedDate: '2026-07-05', timeToRead: 6, pick: true },
      { _id: 'd10', title: '1978-2022 : la Route du Rhum en images d’archive', catSlug: 'image', catSlugs: ['image'], catLabel: 'Histoire', skippers: [], classes: [], themes: ['Histoire'], publishedDate: '2026-06-18', timeToRead: 8, pick: true },
      { _id: 'd12', title: 'Météo : à quoi ressemblera la fenêtre de départ ?', catSlug: 'video', catSlugs: ['video'], catLabel: 'Décryptage', skippers: [], classes: [], themes: ['Chiffres clés'], publishedDate: '2026-07-09', timeToRead: 5, pick: true }
    ]
  };

  


  var VIDE = (function () {
    var v = {};
    Object.keys(DEMO).forEach(function (k) {
      var d = DEMO[k];
      v[k] = Array.isArray(d) ? [] : (d && typeof d === 'object' ? {} : null);
    });
    return v;
  })();
   
  var DEMO_AUTORISEE = (function () {
    try {
      return location.hostname === 'localhost' ||
             location.search.indexOf('demoRebond=1') !== -1;
    } catch (e) { return false; }
  })();

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  













  const ER_EN = {
    'Partager cet article': 'Share this article',
    'Partager sur X': 'Share on X',
    'Partager sur Facebook': 'Share on Facebook',
    'Copier le lien': 'Copy the link',
    'Partager': 'Share',
    'Dans cet article': 'In this article',
    'THÈMES · SKIPPERS · BATEAUX': 'TOPICS · SKIPPERS · BOATS',
    'Sur le même bord': 'On the same tack',
    'MÊME SKIPPER · BATEAU · CLASSE': 'SAME SKIPPER · BOAT · CLASS',
    'Dans la même veine': 'In the same vein',
    'CATÉGORIE ET THÈMES PROCHES': 'RELATED CATEGORY AND TOPICS',
    'À ne pas manquer': 'Not to be missed',
    'SÉLECTION DE LA RÉDACTION': "EDITORS' PICKS",
    "Continuez l'aventure": 'Continue the adventure',
    'Mon Espace Rhum': 'My Rhum Space',
    'Skippers suivis, badges, lectures — votre tableau de bord.':
      'Skippers you follow, badges, reads — your dashboard.',
    'Cartographie': 'Race tracker',
    "Suivez la flotte en direct sur l'Atlantique.": 'Follow the fleet live across the Atlantic.',
    'Bientôt · au départ de la course': 'Soon · at the start of the race',
    'Les skippers': 'The skippers',
    'Les portraits des marins au départ.': 'Profiles of the sailors on the start line.',
    'Le palmarès': 'Roll of honour',
    'Tous les vainqueurs depuis 1978.': 'Every winner since 1978.',
    'Retour à toutes les actualités': 'Back to all news',
    'Haut de page': 'Back to top',
    'Actualité': 'News',
    "aujourd'hui": 'today',
    'hier': 'yesterday'
  };
  const enAnglais = (brut) => {
    const cle = String(brut == null ? '' : brut).trim();
    if (!cle) return undefined;
    if (ER_EN[cle] !== undefined) return ER_EN[cle];
     
     
     
    var m = cle.match(/^il y a (\d+) j$/);
    if (m) return m[1] + ' d ago';
    return undefined;
  };

  class RdrPostMore extends HTMLElement {
    connectedCallback() {
      if (this._wired) return;
      this._wired = true;
      ensureStyles();
      this._render();
      this._reveal();
    }
    disconnectedCallback() {
      if (this._io) { this._io.disconnect(); this._io = null; }
      this._wired = false;
    }
    static get observedAttributes() { return ['data-payload', 'lang']; }
    _lang() {
      LANGUE = this.getAttribute('lang') === 'en' ? 'en' : 'fr';
      return LANGUE;
    }
    

    _i18n() {
      if (this._lang() !== 'en') return;
      var promeneur = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null);
      var noeuds = [];
      while (promeneur.nextNode()) noeuds.push(promeneur.currentNode);
      noeuds.forEach(function (n) {
        var brut = n.nodeValue;
        if (!brut || !/[A-Za-zÀ-ÿ0-9]/.test(brut)) return;
        var en = enAnglais(brut);
        if (en !== undefined && en !== brut.trim()) n.nodeValue = brut.replace(brut.trim(), en);
      });
      this.querySelectorAll('[aria-label],[title]').forEach(function (el) {
        ['aria-label', 'title'].forEach(function (a) {
          var v = el.getAttribute(a);
          if (!v) return;
          var en = enAnglais(v);
          if (en !== undefined) el.setAttribute(a, en);
        });
      });
    }
    attributeChangedCallback() { if (this._wired) { this._render(); this._reveal(); } }

    



















    _data() {
      var raw = this.getAttribute('data-payload');
      if (raw) { try { return Object.assign({}, VIDE, JSON.parse(raw)); } catch (e) {   } }
      return Object.assign({}, DEMO_AUTORISEE ? DEMO : VIDE);
    }

    _score(p, cur) {
      cur = cur || {};
      var s = 0;
      s += shareCount(p.skippers, cur.skippers) * 5;    
      s += shareCount(p.classes, cur.classes) * 3;      
      s += shareCount(p.themes, cur.themes) * 2;         
      if (p.catSlug && cur.catSlug && p.catSlug === cur.catSlug) s += 2;
      if (p.pick) s += 0.5;
      return s;
    }

    _mediaKind(p) {
      var slugs = (p.catSlugs && p.catSlugs.length ? p.catSlugs : [p.catSlug])
        .map(function (s) { return String(s || '').replace(/-en$/, ''); });
      return ['video', 'image', 'audio', 'interview'].find(function (k) { return slugs.indexOf(k) >= 0; }) || null;
    }

    _catBadge(p) {
      var kind = this._mediaKind(p);
      var slug = kind || 'news';
      var label = p.catLabel || (kind ? kind.toUpperCase() : 'Actualité');
      var st = CAT[slug] || CAT.news;
      return '<span class="rpm-catbadge" style="color:' + safeColor(st.c) + ';background:' + safeColor(st.bg) + '">' +
        (IC[st.ic] || IC.news) + esc(label) + '</span>';
    }

    _thumb(p, opts) {
      opts = opts || {};
      var kind = this._mediaKind(p);
      var fmt = opts.noFmt ? '' :
        kind === 'video' ? '<span class="rpm-fmtic">' + IC.play + '</span>' :
        kind === 'image' ? '<span class="rpm-fmtic">' + IC.cam + '</span>' :
        kind === 'audio' ? '<span class="rpm-fmtic">' + IC.mic2 + '</span>' : '';
      var np = isNewPost(p.publishedDate) ? '<span class="rpm-newpatch">Nouveau</span>' : '';
      var img = p.cover
        ? '<img src="' + wixImg(p.cover, 640, 360) + '" width="640" height="360" alt="" loading="lazy" decoding="async">'
        : placeholder(seedFrom(p._id));
      return '<div class="rpm-thumb">' + img + fmt + np + (opts.extra || '') + '</div>';
    }

    _classTags(p) {
      var cl = Array.isArray(p.classes) ? p.classes : [];
      if (!cl.length) return '';
      return '<div class="rpm-classtags">' + cl.map(function (k) {
        return '<button type="button" class="rpm-classtag" data-rpm-tag="' + esc(k) + '" data-rpm-kind="class">' + esc(k) + '</button>';
      }).join('') + '</div>';
    }

    _card(p) {
      var kind = this._mediaKind(p);
      var variant = kind === 'video' ? ' rpm-card--video' : kind === 'image' ? ' rpm-card--photo' : '';
      var thumb = kind === 'video'
        ? this._thumb(p, { noFmt: true, extra: '<span class="rpm-playdisc" aria-hidden="true">' + IC.play + '</span>' })
        : this._thumb(p, {});
      return '<article class="rpm-card' + variant + '" data-rpm-open="' + safeUrl(p.url) + '">' +
        thumb +
        '<div class="rpm-body">' +
          '<div class="rpm-meta">' + this._catBadge(p) +
            '<span>' + esc(relDate(p.publishedDate)) + '</span>' +
            (p.timeToRead ? '<span class="clock">' + IC.clock + ' ' + esc(p.timeToRead) + ' min</span>' : '') +
          '</div>' +
          '<h3 class="rpm-title"><a href="' + safeUrl(p.url) + '" data-rpm-link>' + esc(p.title || '') + '</a></h3>' +
          (p.excerpt ? '<p class="rpm-excerpt">' + esc(p.excerpt) + '</p>' : '') +
          this._classTags(p) +
        '</div>' +
        

















        '<a class="rpm-hit" href="' + safeUrl(p.url) + '" tabindex="-1" aria-hidden="true"></a>' +
        '</article>';
    }

    _row(list) {
      return '<div class="rpm-grid">' + list.map(this._card, this).join('') + '</div>';
    }

    _rows(d) {
      var self = this, used = {}, cur = d.current || {};
      function pick(fn, n) {
        return (d.candidates || []).filter(function (p) { return !used[p._id] && fn(p); })
          .map(function (p) { return { p: p, s: self._score(p, cur) }; })
          .sort(function (a, b) { return b.s - a.s; })
          .slice(0, n).map(function (x) { used[x.p._id] = 1; return x.p; });
      }
       
      var same = pick(function (p) { return shareCount(p.skippers, cur.skippers) > 0 || shareCount(p.classes, cur.classes) > 0; }, 3);
       
      var vein = pick(function (p) { return (p.catSlug && cur.catSlug && p.catSlug === cur.catSlug) || shareCount(p.themes, cur.themes) > 0; }, 3);
       
      var picks = pick(function (p) { return p.pick; }, 3);
      return { same: same, vein: vein, pick: picks };
    }

    _seg(icon, title, why) {
       
      return '<div class="rpm-seg">' + (icon ? '<span class="rpm-segic">' + icon + '</span>' : '') +
        '<h3>' + esc(title) + '</h3><span class="rule"></span>' +
        (why ? '<span class="why">' + esc(why) + '</span>' : '') + '</div>';
    }

    _tools(d) {
      var tools = d.tools || [
        


        { key: 'espace-rhum', cls: 'rpm-tool--rhum', ic: 'monitor', title: 'Mon Espace Rhum', desc: 'Skippers suivis, badges, lectures — votre tableau de bord.' },
        { key: 'carto', cls: 'rpm-tool--carto', ic: 'compass', title: 'Cartographie', desc: 'Suivez la flotte en direct sur l\'Atlantique.', soon: 'Bientôt · au départ de la course' },
        { key: 'skippers', cls: 'rpm-tool--skip', ic: 'duo', title: 'Les skippers', desc: 'Les portraits des marins au départ.' },
        { key: 'palmares', cls: 'rpm-tool--pal', ic: 'trophy', title: 'Le palmarès', desc: 'Tous les vainqueurs depuis 1978.' }
      ];
      return '<div class="rpm-tools rpm-rev">' +
        this._seg(IC.play2, 'Continuez l\'aventure', '') +
        '<div class="rpm-tgrid">' + tools.map(function (t) {
          var ic = IC[t.ic] || IC.compass;
           
           
          if (t.soon) {
            return '<span class="rpm-tool is-soon ' + esc(t.cls) + '" aria-disabled="true">' +
              '<span class="wm" aria-hidden="true">' + ic + '</span>' +
              '<span class="rpm-soon">' + esc(t.soon) + '</span>' +
              '<h5>' + esc(t.title) + '</h5><p>' + esc(t.desc) + '</p></span>';
          }
          return '<a class="rpm-tool ' + esc(t.cls) + '" data-rpm-tool="' + esc(t.key) + '">' +
            '<span class="wm" aria-hidden="true">' + ic + '</span>' +
            '<h5>' + esc(t.title) + '</h5><p>' + esc(t.desc) + '</p><span class="arr">›</span></a>';
        }).join('') + '</div></div>';
    }

    _tagsBlock(d) {
      var tags = (d.tags || []).filter(Boolean);
      if (!tags.length) return '';
      return '<div class="rpm-tags rpm-rev">' +
        this._seg('', 'Dans cet article', 'THÈMES · SKIPPERS · BATEAUX') +
        '<div class="rpm-tagrow">' + tags.map(function (label) {
          return '<button type="button" class="rpm-tag" data-rpm-tag="' + esc(label) + '">' + esc(label) + '</button>';
        }).join('') + '</div></div>';
    }

    _render() {
      this._lang();
      var d = this._data();
      var r = this._rows(d);
      var html = '<div class="rpm-in">' + this._shareRow();
       
      html += this._tagsBlock(d);
      if (r.same.length) html += '<div class="rpm-rev">' + this._seg(IC.compass, 'Sur le même bord', 'MÊME SKIPPER · BATEAU · CLASSE') + this._row(r.same) + '</div>';
      if (r.vein.length) html += '<div class="rpm-rev">' + this._seg(IC.search, 'Dans la même veine', 'CATÉGORIE ET THÈMES PROCHES') + this._row(r.vein) + '</div>';
      if (r.pick.length) html += '<div class="rpm-rev">' + this._seg(IC.flame, 'À ne pas manquer', 'SÉLECTION DE LA RÉDACTION') + this._row(r.pick) + '</div>';
      html += this._tools(d);
      html += '<div class="rpm-endnav rpm-rev">' +
        '<button class="primary" data-rpm-back>' + IC.back + 'Retour à toutes les actualités</button>' +
        '<button class="ghost" data-rpm-up>' + IC.up + 'Haut de page</button></div>';
      html += '</div>';

      this.innerHTML = '<div class="rpm-root">' + html + '</div>';
      this._bind();
      this._i18n();
    }

    _shareRow() {
      return '<div class="rpm-share rpm-rev">' +
        '<span class="rpm-share-lb">' + IC.share + 'Partager cet article</span>' +
        '<div class="rpm-share-row">' +
        '<button type="button" class="rpm-sbtn" data-rpm-share="x" aria-label="Partager sur X">' + IC.xnet + '</button>' +
        '<button type="button" class="rpm-sbtn" data-rpm-share="fb" aria-label="Partager sur Facebook">' + IC.fbnet + '</button>' +
        '<button type="button" class="rpm-sbtn" data-rpm-share="copy" aria-label="Copier le lien">' + IC.lien + '</button>' +
        '<button type="button" class="rpm-sbtn" data-rpm-share="native" aria-label="Partager">' + IC.share + '</button>' +
        '</div></div>';
    }

    

    _marquerChargement(carte) {
      if (!carte || carte.querySelector('.rpm-navspin')) return;
      carte.setAttribute('data-rpm-charge', '1');
      var hote = carte.querySelector('.rpm-thumb') || carte;
      if (getComputedStyle(hote).position === 'static') hote.style.position = 'relative';
      var rond = document.createElement('span');
      rond.className = 'rpm-navspin';
      rond.setAttribute('aria-hidden', 'true');
      rond.innerHTML = '<svg viewBox="0 0 40 40">' +
        '<defs><linearGradient id="rpm-spg" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#FCF150"></stop><stop offset="1" stop-color="#5DBFC0"></stop>' +
        '</linearGradient></defs>' +
        '<circle class="rpm-navspin-trk" cx="20" cy="20" r="15"></circle>' +
        '<circle class="rpm-navspin-arc" cx="20" cy="20" r="15"></circle></svg>';
      hote.appendChild(rond);
      setTimeout(function () {
        try { carte.removeAttribute('data-rpm-charge'); rond.remove(); } catch (e) {   }
      }, 6000);
    }

    _bind() {
      var self = this;

      



      if (!this._retourCable) {
        this._retourCable = true;
        window.addEventListener('pageshow', function () {
          self.querySelectorAll('[data-rpm-charge]').forEach(function (c) {
            c.removeAttribute('data-rpm-charge');
          });
          self.querySelectorAll('.rpm-navspin').forEach(function (r) { r.remove(); });
        });
      }
      this.querySelectorAll('[data-rpm-share]').forEach(function (el) {
        el.onclick = function () {
          var mode = el.getAttribute('data-rpm-share');
          var url = location.href;
          var titre = document.title;
          var copie = function () {
            if (navigator.clipboard) { try { navigator.clipboard.writeText(url); } catch (e) {   } }
            el.classList.add('ok');
            setTimeout(function () { el.classList.remove('ok'); }, 1200);
          };
          if (mode === 'x') {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(titre) + '&url=' + encodeURIComponent(url), '_blank', 'noopener,width=600,height=460');
          } else if (mode === 'fb') {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank', 'noopener,width=600,height=460');
          } else if (mode === 'copy') {
            copie();
          } else if (navigator.share) {
            navigator.share({ title: titre, url: url }).catch(function () {   });
          } else {
            copie();
          }
          self._emit('post-share', { mode: mode });
        };
      });
      this.querySelectorAll('[data-rpm-open]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (e.target.closest('[data-rpm-tag]')) return;  
          












          var ev = new CustomEvent('post-open', { detail: { url: el.getAttribute('data-rpm-open') },
            bubbles: true, composed: true, cancelable: true });
          var priseEnCharge = !self.dispatchEvent(ev);
          if (priseEnCharge) e.preventDefault();

          



          var nouvelOnglet = e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;
          if (!nouvelOnglet) self._marquerChargement(el);
        });
      });
      this.querySelectorAll('[data-rpm-tool]').forEach(function (el) {
        el.addEventListener('click', function (e) { e.preventDefault(); self._emit('post-tool', el.getAttribute('data-rpm-tool')); });
      });
      this.querySelectorAll('[data-rpm-tag]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault(); e.stopPropagation();
          self._emit('post-tag', { label: el.getAttribute('data-rpm-tag'), kind: el.getAttribute('data-rpm-kind') });
        });
      });
      var back = this.querySelector('[data-rpm-back]');
      if (back) back.onclick = function () {
         
         
         
         
        var hub = null;
        try {
          var r = JSON.parse(sessionStorage.getItem('rnRestore') || 'null');
          if (r && r.ts && Date.now() - r.ts <= 30 * 60000) {
            var here = location.pathname.replace(/\/+$/, '');
            var target = '';
            try { target = new URL(r.to || '', location.origin).pathname.replace(/\/+$/, ''); } catch (e) { target = ''; }
            hub = { direct: !!target && target === here, hubUrl: r.hubUrl || '' };
          }
        } catch (e) { hub = null; }
        if (hub && hub.direct && window.history.length > 1) {
          try { window.history.back(); return; } catch (e) {   }
        }
        self._emit('post-back', hub && hub.hubUrl ? { url: hub.hubUrl } : {});
      };
      var up = this.querySelector('[data-rpm-up]');
      if (up) up.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    }

    _reveal() {
      var els = this.querySelectorAll('.rpm-rev');
      if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches) {
        els.forEach(function (el) { el.classList.add('in'); });
        return;
      }
      if (this._io) this._io.disconnect();
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); } });
      }, { threshold: 0.1 });
      this._io = io;
      els.forEach(function (el) { io.observe(el); });
    }

    _emit(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { detail: detail, bubbles: true, composed: true }));
    }
  }

  if (!customElements.get('rdr-post-more')) {
    customElements.define('rdr-post-more', RdrPostMore);
  }
})();
})();
