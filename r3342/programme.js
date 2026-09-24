/* rdr-elements programme | source route-du-rhum 3bf0e8e | rdr-programme.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["programme"]="3bf0e8e";performance.mark("rdr-elements:programme")}catch(e){}
;(function(){
(() => {
  'use strict';
  if (customElements.get('rdr-programme')) return;

   

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const pli = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/\s+/g, ' ').trim();

  


  const urlSure = (u, repli = '') => {
    if (u == null) return repli;
    let v = String(u).trim();
    if (!v) return repli;
    const m = v.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) v = 'https://static.wixstatic.com/media/' + m[1];
    const schema = /^https?:/i.test(v);
    const relatif = /^(\/|#|\?|\.\/|\.\.\/)/.test(v) || !/^[a-z][a-z0-9+.\-]*:/i.test(v);
    if (!schema && !relatif) return repli;
    return v.replace(/"/g, '%22').replace(/'/g, '%27');
  };

  





















  














  const SHAPES = 'https://static.wixstatic.com/shapes/';
  const CLASSES = {
    'ultim':         { lib: 'Ultim',         c: '#429991', f: '7bb303_0ed87d76a89f4e6ebd6008778014958e.svg' },
    'ocean fifty':   { lib: 'Ocean Fifty',   c: '#72B9F1', f: '7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
    'oceanfifty':    { lib: 'Ocean Fifty',   c: '#72B9F1', f: '7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
    'ocean 50':      { lib: 'Ocean Fifty',   c: '#72B9F1', f: '7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
    'imoca':         { lib: 'IMOCA',         c: '#76BCBE', f: '7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg' },
    'class40':       { lib: 'Class40',       c: '#7E93EF', f: '7bb303_b13535fe4621478fb5fb52e98c751b11.svg' },
    'class 40':      { lib: 'Class40',       c: '#7E93EF', f: '7bb303_b13535fe4621478fb5fb52e98c751b11.svg' },
    'vintage mono':  { lib: 'Vintage Mono',  c: '#F9F06E', f: '7bb303_9b4ee8478c6b4453b668b04eb278406c.svg' },
    'rhum mono':     { lib: 'Vintage Mono',  c: '#F9F06E', f: '7bb303_9b4ee8478c6b4453b668b04eb278406c.svg' },
    'vintage multi': { lib: 'Vintage Multi', c: '#F19F39', f: '7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg' },
    'rhum multi':    { lib: 'Vintage Multi', c: '#F19F39', f: '7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg' }
  };

  const ecussons = (liste) => {
    if (!Array.isArray(liste) || !liste.length) return '';
    return liste.slice(0, 4).map(nom => {
      const cle = String(nom || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
        .toLowerCase().replace(/\s+/g, ' ').trim();
      const c = CLASSES[cle];
      


      



      if (!c || !c.f) {
        const couleur = c ? c.c : '#8A9BB5';
        const lib = c ? c.lib : String(nom).trim();
        return '<span class="rp-ecusson" style="--e:' + couleur + '">' + esc(lib) + '</span>';
      }
      return '<img class="rp-fanion" src="' + esc(SHAPES + c.f) + '"' +
        ' alt="' + esc(c.lib) + '" title="' + esc(c.lib) + '"' +
        ' width="144" height="240" loading="lazy" decoding="async">';
    }).join('');
  };

  const minutes = (hhmm) => {
    const m = /^(\d{1,2}):(\d{2})/.exec(hhmm || '');
    return m ? +m[1] * 60 + +m[2] : 0;
  };

  






  const finMinutes = (a) => {
    const d = minutes(a.debut);
    if (!/^\d{1,2}:\d{2}/.test(a.fin || '')) return d + 60;
    const f = minutes(a.fin);
    return f <= d ? f + 1440 : f;
  };

  












  const maintenantA = (fuseau) => {
    try {
      const p = new Intl.DateTimeFormat('en-CA', {
        timeZone: fuseau, year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(new Date());
      const g = (t) => (p.find(x => x.type === t) || {}).value;
      return {
        jour: g('year') + '-' + g('month') + '-' + g('day'),
        




        minute: ((+g('hour') || 0) % 24) * 60 + (+g('minute') || 0)
      };
    } catch (e) {
      const d = new Date();
      return { jour: d.toISOString().slice(0, 10), minute: d.getHours() * 60 + d.getMinutes() };
    }
  };

  const JOURS_COURTS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const MOIS_COURTS = ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin',
                       'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];

  






  const JOURS_COURTS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MOIS_COURTS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  

















  const i18nNorm = s => String(s).replace(/[‘’]/g, "'").replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ').trim();

  const ER_EN = {
     
    


    'Programmation': 'Programme',
    'Officielle': 'Official',
    'Type de programmation': 'Programme type',
    'Revoir la programmation du village de Saint-Malo': 'Back to the Saint-Malo village programme',
    



    'Pour plus d’informations sur les animations organisées par la ville de Saint-Malo, rendez-vous sur l’application Le Lien Malouin.':
      'For more information on the events organised by the City of Saint-Malo, see the Le Lien Malouin app.',
    '(nouvel onglet)': '(new tab)',
     
    'Choix du jour': 'Choose a day',
    'Jours précédents': 'Previous days',
    'Jours suivants': 'Next days',
     
    'Tous les horaires': 'All times',
    'Matin, avant 12 h': 'Morning, before 12pm',
    'Après-midi, 12 h à 18 h': 'Afternoon, 12pm to 6pm',
    'Soirée, après 18 h': 'Evening, after 6pm',
    'Les lieux': 'Venues',
    'Les catégories': 'Categories',
    'Thématique': 'Theme',
    'Tout afficher': 'Show all',
    'Partager cette sélection de la programmation': 'Share this selection of the programme',
    'Lien copié': 'Link copied',
     
    'Matin': 'Morning',
    'Horaire à préciser': 'Time to be confirmed',
    'Après-midi': 'Afternoon',
    'Soirée': 'Evening',
     
    'Durée': 'Duration',
    'Lieu': 'Venue',
    'Accès': 'Access',
    'Gratuit, accès libre': 'Free, open access',
    'Sur réservation': 'Booking required',
    'Réserver': 'Book',
    'En savoir plus': 'Find out more',
    'Sur la carte': 'On the map',
    'Voir la carte complète': 'See the full map',
    'Revenir à la programmation': 'Back to the programme',
    'Écouter sur Spotify': 'Listen on Spotify',
    'Le détail de cette animation n’est pas encore publié.': 'The details of this event are not published yet.',
    'Il le sera au fil des semaines.': 'They will be, over the coming weeks.',
     
    'Annulé': 'Cancelled',
    'Complet': 'Full',
    'En ce moment': 'Happening now',
     
    'Journée thématisée': 'Themed day',
    'Journée thématique': 'Themed day',
    'Présenté par': 'Presented by',
    'Tous les soirs': 'Every evening',
    'Tous les jours': 'Every day',
     
    'Rien à cette date': 'Nothing on this date',
    'Aucun rendez-vous avec ces filtres': 'No events match these filters',
    'Ce jour-là, rien ne correspond à ce que vous avez choisi. En retirer un suffit souvent.': 'Nothing that day matches what you picked. Removing one filter is usually enough.',
    




    'Ce jour n’a pas encore de programmation publiée. Elle se remplit au fil des semaines.': 'This day has no published programme yet. It fills up over the coming weeks.',
     
    'Programmation indisponible': 'Programme unavailable',
    'La programmation n’a pas pu être chargée.': 'The programme could not be loaded.',
    'Rafraîchir la page suffit le plus souvent.': 'Refreshing the page usually does it.',
    'La programmation n’a pas pu être chargée': 'The programme could not be loaded',
    'La connexion a été trop longue. La programmation est bien là,': 'The connection took too long. The programme is there,',
    'elle n’est pas encore arrivée jusqu’ici.': 'it just has not reached this page yet.',
    'Réessayer': 'Try again',
    'Chargement de la programmation…': 'Loading the programme…',
     
    'Chargement de la carte': 'Loading the map',
    'La carte n’a pas pu s’afficher ici.': 'The map could not be displayed here.',
    'Le bouton ci-dessous l’ouvre en entier, dans un nouvel onglet.': 'The button below opens it in full, in a new tab.',
    'Le point sera posé dès que l’implantation sera arrêtée.': 'The marker will be placed as soon as the layout is fixed.',
     
    'Route du Rhum, là où les rêves': 'Route du Rhum, where dreams',
    'prennent le large': 'set sail',
    'Ville de Saint-Malo': 'City of Saint-Malo',
    






    'Route du Rhum': 'Route du Rhum',
    'Off du Rhum': 'Off du Rhum',
    'Route du Rhum, destination Guadeloupe': 'Route du Rhum, destination Guadeloupe'
  };
  const ER_EN_NORM = {};
  for (const k in ER_EN) ER_EN_NORM[i18nNorm(k)] = ER_EN[k];

   
  const dateDe = (iso) => new Date(iso + 'T12:00:00');

   
  


  const IC = {
    horloge: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    etiquette: 'M3 11V5a2 2 0 0 1 2-2h6l10 10-8 8L3 11Zm4-4h.01',
    epingle: 'M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    liste: 'M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01',
    fleche: 'M5 12h14M13 6l6 6-6 6',
    chevron: 'M6 9l6 6 6-6',
    croix: 'M6 6l12 12M18 6L6 18',
    ancre: 'M12 8v13M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5 13a7 7 0 0 0 14 0M4 13h2m12 0h2',
    note: 'M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    micro: 'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm7-3a7 7 0 0 1-14 0M12 19v3',
    bulle: 'M21 12a8 8 0 0 1-8 8H7l-4 3v-5.5A8 8 0 1 1 21 12Z',
    etoile: 'M12 3l2.7 5.7 6.3.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.3-.9L12 3Z',
    etincelle: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18',
    cadre: 'M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6',
    famille: 'M16 20v-1a4 4 0 0 0-8 0v1M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 20v-.5a3 3 0 0 1 2-2.8M19 20v-.5a3 3 0 0 0-2-2.8',
    lune: 'M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z',
    feu: 'M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.4-2-1-2.8M12 21a6 6 0 0 1-6-6c0-2 1-3.5 2-5',
    billet: 'M4 8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 8v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-8Z',
    



    partage: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
    coche: 'M20 6 9 17l-5-5',
    carte: 'M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 7 9 4Zm0 0v13m6-10v12.5',
    

    silence: 'M11 5 6 9H3v6h3l5 4V5ZM22 9l-6 6M16 9l6 6'
  };

  const svg = (d, cls) =>
    '<svg class="' + (cls || 'rp-ic') + '" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="' + d + '" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  

  const svgPlein = (d, cls) =>
    '<svg class="' + (cls || 'rp-ic') + '" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="' + d + '" fill="currentColor"/></svg>';

  






  const HOTES_SPOTIFY = ["open.spotify.com", "play.spotify.com", "spotify.com", "www.spotify.com"];
  const lienSpotify = (u) => {
    const v = urlSure(u);
    if (!v || !/^https?:/i.test(v)) return '';
    try {
      return HOTES_SPOTIFY.indexOf(new URL(v).hostname.toLowerCase()) > -1 ? v : '';
    } catch (e) { return ''; }
  };

  



















  




  const PREFIXE_WIX = 'https://static.wixstatic.com/media/';
  const wixTaille = (u, l, h, q) => {
    const v = urlSure(u);
    if (!v) return '';
    if (v.slice(0, PREFIXE_WIX.length) !== PREFIXE_WIX) return v;
    const id = v.slice(PREFIXE_WIX.length);
    

    if (!id || id.indexOf('/') !== -1 || id.indexOf('?') !== -1 || id.indexOf('#') !== -1) return v;
    const ext = (id.split('.').pop() || 'jpg').toLowerCase();
    return PREFIXE_WIX + id + '/v1/fill/w_' + l +
      ',h_' + h + ',al_c,q_' + (q || 80) + ',enc_auto/img.' + ext;
  };
  



  const wixDensite = (u, l, h, q) => {
    const un = wixTaille(u, l, h, q);
    if (!un || un.indexOf('/v1/fill/') === -1) return '';
    return un + ' 1x, ' + wixTaille(u, l * 2, h * 2, q) + ' 2x';
  };

  























  const wixContenu = (u, cote, q) => {
    const v = urlSure(u);
    if (!v) return '';
    if (v.slice(0, PREFIXE_WIX.length) !== PREFIXE_WIX) return v;
    const id = v.slice(PREFIXE_WIX.length);
    if (!id || id.indexOf('/') !== -1 || id.indexOf('?') !== -1 || id.indexOf('#') !== -1) return v;
    const ext = (id.split('.').pop() || 'png').toLowerCase();
    return PREFIXE_WIX + id + '/v1/fit/w_' + cote + ',h_' + cote +
      ',q_' + (q || 85) + ',enc_auto/img.' + ext;
  };
  const wixContenuDensite = (u, cote, q) => {
    const un = wixContenu(u, cote, q);
    if (!un || un.indexOf('/v1/fit/') === -1) return '';
    return un + ' 1x, ' + wixContenu(u, cote * 2, q) + ' 2x';
  };

  

















  const LUM = (couleur) => {
    const brut = String(couleur || '').trim().replace('#', '');
    const h = brut.length === 3 ? brut.split('').map(c => c + c).join('') : brut;
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
    const v = [0, 2, 4].map(i => {
      const c = parseInt(h.slice(i, i + 2), 16) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  };

  const ENCRE_SOMBRE = '#0B1B33';
  const ENCRE_CLAIRE = '#FFFFFF';

  


  const couleurSure = (c) => {
    const v = String(c || '').trim();
    return /^#[0-9a-fA-F]{3}$|^#[0-9a-fA-F]{6}$|^[a-zA-Z]{3,20}$/.test(v) ? v : '';
  };

  const encreSur = (fond) => {
    const L = LUM(fond);
    if (L === null) return ENCRE_SOMBRE;    
    const ratio = (l) => (Math.max(L, l) + 0.05) / (Math.min(L, l) + 0.05);
    return ratio(LUM(ENCRE_SOMBRE)) >= ratio(1) ? ENCRE_SOMBRE : ENCRE_CLAIRE;
  };

  


  


























  const LOGO_OFF_MONO = 'https://static.wixstatic.com/media/df962b_09a245c0cfda4eac844a9e628f7a4a48~mv2.png';
  const LOGO_OFF_COULEUR = 'https://static.wixstatic.com/media/df962b_6f0de756d3484f569f50aaf7ddfc6e86~mv2.png';

  















































  const LOGO_SAINT_MALO = 'https://static.wixstatic.com/media/39ab9f_f112168288214cf19017f35a640c237b~mv2.avif' +
    '/v1/crop/x_67,y_178,w_366,h_144,q_85,enc_auto/img.avif';

  const LOGO_SPOTIFY = 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 ' +
    '17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 ' +
    '4.56-1.021 8.52-.6 11.64 1.32.42.18.479.601.301.98zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 ' +
    '9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 ' +
    '4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z';

   
  




  







  const CATS = {
    ceremonie:  { ic: IC.etoile,    c: '#FCF150' },   
    nautique:   { ic: IC.ancre,     c: '#56BCF6' },   
    concert:    { ic: IC.note,      c: '#7894F7' },   
    conference: { ic: IC.micro,     c: '#5DBFC0' },   
    talk:       { ic: IC.bulle,     c: '#479ED7' },   
    spectacle:  { ic: IC.etincelle, c: '#F5BE41' },   
    exposition: { ic: IC.cadre,     c: '#85D8D5' },   
    animation:  { ic: IC.etoile,    c: '#F19F39' },   
    famille:    { ic: IC.famille,   c: '#C1E1D9' },   
    soiree:     { ic: IC.lune,      c: '#4F5BA5' },   
    feu:        { ic: IC.feu,       c: '#F8D849' }    
  };
  










  const VIFS = {
    ceremonie:  '#FFE94A',
    nautique:   '#22D3F0',
    concert:    '#8B5CFF',
    conference: '#3EDCC8',
    talk:       '#3FB6FF',
    spectacle:  '#FFB020',
    exposition: '#5FE3DC',
    animation:  '#FF9A2E',
    famille:    '#9BE8D2',
    soiree:     '#6C7BFF',
    feu:        '#FFD93D'
  };

  






  const SIGNES = {
    

    


    egaliseur: [8, 14, 22, 17, 29, 24, 36, 30, 41, 33, 38, 26, 32, 21, 27, 18, 22, 14, 17, 10],
    

    tempos: [730, 910, 640, 1090, 830, 1210, 690, 970, 770, 1150, 610, 880],
    onde: 'M0 12 Q 9 2 18 12 T 36 12 T 54 12 T 72 12 T 90 12 T 108 12',
    rayons: [0, 1, 2, 3, 4, 5, 6, 7],
    

    assistance: [7, 10, 8, 11, 9, 12, 8],
    

    cimaise: [[26, 20], [18, 26], [30, 16]],
    








    guirlande: [
      [5, 9.3], [16.3, 13.5], [27.5, 16.6], [38.8, 18.4], [50, 19],
      [61.3, 18.4], [72.5, 16.6], [83.8, 13.5], [95, 9.3]
    ]
  };

  

  const SIGNE_DE = {
    concert: 'egaliseur', soiree: 'egaliseur',
    nautique: 'onde', feu: 'rayons', spectacle: 'rayons',
    






    ceremonie: 'ruban',
    conference: 'tribune', talk: 'tribune',
    






    exposition: 'cimaise', expo: 'cimaise',
    



    animation: 'guirlande', famille: 'guirlande'
  };

  










  const LOGO_RDR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><g><path fill="none" d="M41.292 36.64c-.989-1.417-2.076-2.524-2.766-3.194q-.152-.15-.278-.271a13 13 0 0 0-2.739-1.984c-1.51-.944-3.592-1.31-5.875-1.535 2.98 1.601 7.963 4.928 8.247 5.577v.006c.123 2.318-1.404 4.803-3.563 7.84-2.628 3.689-15.895 16.772-18.35 23.812-2.905 8.353.357 12.841 2.858 16.9.906 1.468 2.192 2.904 3.71 4.106q.007.007.013.016c.73.577 1.514 1.097 2.335 1.546.004 0 .004.005.007.004 1.833 1.001 2.611 1.618 4.626 1.603.054.002.1.002.15 0-3.057-1.501-6.043-3.29-7.966-4.849-.14-1.521 1.617-3.255 2.487-4.966 2.734-5.374 13.38-14.236 17.807-22.016 1.84-3.234 3.686-5.85 3.83-11.073.15-5.433-3.805-10.662-4.533-11.522"/><path fill="currentColor" d="M20.73 59.042c-.934 1.252-1.831 2.48-2.576 3.653H39.72c.886-1.215 1.702-2.42 2.358-3.6q.014-.027.03-.053z"/><path fill="currentColor" d="M37.872 34.782v.005c.13 2.351-1.18 4.886-3.334 7.982a17 17 0 0 1-.607.807h11.165c-1.122-3.742-3.265-6.758-3.802-7.395-.995-1.43-2.086-2.543-2.78-3.217a13 13 0 0 0-3.028-2.261c-1.517-.947-3.604-1.302-5.888-1.51 2.988 1.6 7.988 4.934 8.274 5.589"/><path fill="currentColor" d="m31.906 71.745-17.027.057c-.122 1.3-.021 2.458.127 3.517H28.65c.983-1.129 2.165-2.364 3.256-3.574"/><path fill="currentColor" d="M28.48 49.843h17.23c.076-.629.125-1.295.143-2.011.012-.475-.05-.947-.096-1.415H31.53c-.892 1.031-1.975 2.188-3.05 3.426"/><path fill="currentColor" d="M16.534 65.536a14 14 0 0 0-.642 1.539 25 25 0 0 0-.554 1.886h19.118c1-1.131 2.055-2.278 2.996-3.425z"/><path fill="currentColor" d="M24.28 81.573c.508-1.022 1.008-2.17 1.977-3.413H15.715c.81 2.303 2.08 4.211 3.2 6.033.91 1.483 2.202 2.93 3.727 4.134l.014.017c.733.579 1.52 1.1 2.342 1.548.003 0 .003.005.006.005 1.84 1 3.863 1.61 5.881 1.577q.08.004.15 0c-3.064-1.497-6.061-3.288-7.992-4.854-.144-1.541.37-3.305 1.236-5.047"/><path fill="currentColor" d="M25.98 52.684c-.973 1.147-2.028 2.33-2.98 3.516h20.726a19.3 19.3 0 0 0 1.438-3.516z"/><path fill="none" d="M14.6 71.219c1.736 1.275 6.117 3.24 7.916 3.36-2.248-.029-4.486-.76-6.506-1.91-.004 0-.004-.005-.008-.005-.606-.426-1.07-.913-1.402-1.445"/><path fill="currentColor" d="M29.2 8.348c.744.487 1.362 1.099 1.803 1.88-.929-.985-5.359-3.24-8.321-3.715 2.54.3 4.853.754 6.518 1.835"/><path fill="currentColor" d="M22.682 74.584q-.078.001-.166-.005c-1.799-.12-6.18-2.085-7.917-3.36a4.7 4.7 0 0 1-.691-2.191c2.11 1.771 5.401 3.823 8.774 5.556"/><path fill="none" d="M31.672 12.11q.07.38.08.77c-.301-.725-5.782-4.526-9.07-6.367 2.962.476 7.392 2.73 8.322 3.716a5.9 5.9 0 0 1 .668 1.88"/><path fill="currentColor" d="M31.004 10.229c-.441-.783-1.06-1.395-1.803-1.881.807.459 1.954 1.212 3.012 2.26l.302.306c1.237 1.314 2.277 3.043 2.377 5.173.138 2.837-.71 5.386-2.767 8.565-4.639 7.178-19.051 20.797-22.194 27.244-3.25 6.662-3.23 9.529-.557 14.35-2.698-4.555-6.232-9.603-2.797-18.792 2.901-7.743 18.001-21.935 21.02-25.963 2.479-3.314 4.24-6.033 4.156-8.605v-.006a5.9 5.9 0 0 0-.749-2.65z"/><path fill="currentColor" d="M35.527 14.517c.791.97 5.081 6.855 4.79 12.87-.282 5.785-2.401 8.64-4.529 12.18-5.117 8.521-17.2 18.096-20.373 23.987-1.01 1.876-1.626 3.784-1.506 5.473a4.7 4.7 0 0 0 .691 2.192c.332.532.797 1.019 1.403 1.445a18.5 18.5 0 0 1-2.57-1.768l-.014-.016c-3.081-2.953-3.79-6.08-1.824-10.748C14.88 52.337 29.01 39.783 33.021 33.62c1.235-1.898 4.666-6.278 4.918-11.614.137-2.861-1.045-5.456-2.412-7.49z"/><path fill="none" d="M35.526 14.517c1.367 2.034 2.549 4.629 2.411 7.49-.251 5.336-3.683 9.716-4.917 11.613-4.011 6.163-18.142 18.718-21.426 26.513-1.966 4.668-1.258 7.795 1.824 10.747-1.667-1.365-3.068-2.986-4.045-4.634-2.673-4.821-2.693-7.688.558-14.35 3.142-6.447 17.554-20.066 22.194-27.244 2.056-3.179 2.904-5.728 2.766-8.565-.1-2.13-1.14-3.858-2.377-5.173.754.76 1.941 2.011 3.012 3.603"/><path fill="currentColor" d="M31.906 71.745H14.884c-.095 1.015-.005 2.112.19 3.518l13.576.056c.984-1.129 2.165-2.362 3.256-3.574"/><path fill="currentColor" d="M65.29 60.24h-1.174v3.612H61.49V52.904h4.16c2.751 0 4.363 1.44 4.363 3.707 0 1.502-.736 2.612-2.064 3.113l2.502 4.128h-3.112zm.53-2.096c.97 0 1.503-.485 1.503-1.407 0-.908-.5-1.455-1.518-1.455h-1.689v2.862z"/><path fill="currentColor" d="M76.646 52.685c3.347 0 5.77 2.346 5.77 5.693s-2.423 5.692-5.77 5.692-5.771-2.345-5.771-5.692 2.424-5.693 5.77-5.693m0 8.9c1.813 0 3.128-1.252 3.128-3.207 0-1.97-1.315-3.221-3.128-3.221s-3.129 1.25-3.129 3.22c0 1.956 1.314 3.207 3.129 3.207"/><path fill="currentColor" d="M93.195 58.972c0 3.3-1.907 5.099-4.769 5.099-2.878 0-4.77-1.798-4.77-5.099v-6.068h2.658v5.99c0 1.878.72 2.69 2.143 2.69 1.408 0 2.143-.812 2.143-2.69v-5.99h2.595z"/><path fill="currentColor" d="M100.314 55.345v8.507h-2.627v-8.507H94.34v-2.44h9.32v2.44z"/><path fill="currentColor" d="M104.898 52.904h7.976v2.44h-5.349v1.877h3.941v2.19h-3.941v2.001h5.427v2.44h-8.054z"/><path fill="currentColor" d="M47.801 67.131c3.268 0 5.771 2.221 5.771 5.521s-2.518 5.427-5.755 5.427h-4.676V67.13zm-.141 8.507c1.628 0 3.27-.828 3.27-2.986 0-2.143-1.642-3.082-3.27-3.082h-1.892v6.068z"/><path fill="currentColor" d="M64.349 73.2c0 3.3-1.908 5.098-4.77 5.098-2.878 0-4.77-1.799-4.77-5.099v-6.068h2.658v5.99c0 1.877.72 2.69 2.144 2.69 1.408 0 2.142-.813 2.142-2.69v-5.99h2.596z"/><path fill="currentColor" d="M73.47 74.465h-1.173v3.613H69.67V67.131h4.16c2.753 0 4.363 1.439 4.363 3.707 0 1.5-.734 2.61-2.064 3.112l2.503 4.128h-3.113zm.532-2.095c.97 0 1.502-.485 1.502-1.407 0-.908-.5-1.455-1.518-1.455h-1.689v2.862z"/><path fill="currentColor" d="M86.47 73.777h-4.207v4.301h-2.628V67.131h2.628v4.128h4.206v-4.128h2.628v10.947H86.47z"/><path fill="currentColor" d="M100.172 73.2c0 3.3-1.908 5.098-4.77 5.098-2.878 0-4.77-1.799-4.77-5.099v-6.068h2.658v5.99c0 1.877.72 2.69 2.144 2.69 1.407 0 2.142-.813 2.142-2.69v-5.99h2.596z"/><path fill="currentColor" d="M110.106 75.404c0-2.596.032-3.879.032-3.894h-.032c-.016.015-.547 1-1.079 1.94l-1.063 1.923h-1.47l-1.064-1.892c-.546-.97-1.064-1.955-1.079-1.97h-.046c0 .015.031 1.297.031 3.894v2.674h-2.627V67.13h2.783l2.752 4.895h.048l2.767-4.895h2.675v10.95h-2.628z"/><path fill="currentColor" d="M37.21 84.23c2.531 0 4.47 1.72 4.47 4.275 0 2.568-1.95 4.202-4.457 4.202h-3.621V84.23zm-.108 6.588c1.259 0 2.53-.642 2.53-2.313 0-1.659-1.271-2.386-2.53-2.386h-1.466v4.7z"/><path fill="currentColor" d="M42.527 84.23h6.176v1.89h-4.141v1.452h3.051v1.696h-3.051v1.55h4.203v1.889h-6.237z"/><path fill="currentColor" d="M51.37 90.067c.17.643.764 1.018 1.685 1.018.774 0 1.246-.266 1.246-.811 0-.812-1.017-.763-2.058-1.018-1.15-.278-2.58-.811-2.58-2.603 0-1.732 1.307-2.592 3.209-2.592 1.732 0 2.967.703 3.44 2.216l-1.939.521c-.205-.617-.689-.957-1.537-.957-.775 0-1.102.303-1.102.75 0 .716.812.825 1.998 1.066 1.247.243 2.628.775 2.628 2.605 0 1.743-1.223 2.615-3.294 2.615-1.477 0-3.15-.448-3.633-2.289z"/><path fill="currentColor" d="M61.485 86.12v6.587H59.45v-6.588h-2.59V84.23h7.216v1.89z"/><path fill="currentColor" d="M64.963 84.23h2.034v8.477h-2.034z"/><path fill="currentColor" d="M70.233 87.645h-.038c0 .012.024 1.053.024 2.156v2.906h-2.033V84.23h2.059l3.608 4.965h.036c0-.011-.012-1.102-.012-2.022V84.23h2.035v8.477h-2.07z"/><path fill="currentColor" d="m79.232 91.303-.51 1.404H76.58l3.269-8.477h2.313l3.282 8.477h-2.18l-.508-1.404zm2.253-3.537c-.267-.703-.46-1.235-.473-1.247h-.036c-.012.012-.207.533-.472 1.236l-.607 1.695h2.193z"/><path fill="currentColor" d="M89.103 86.12v6.587h-2.035v-6.588h-2.591V84.23h7.218v1.89z"/><path fill="currentColor" d="M92.582 84.23h2.035v8.477h-2.035z"/><path fill="currentColor" d="M99.93 84.062c2.592 0 4.47 1.816 4.47 4.407s-1.878 4.408-4.47 4.408c-2.59 0-4.467-1.817-4.467-4.408 0-2.59 1.877-4.407 4.468-4.407m0 6.89c1.406 0 2.423-.97 2.423-2.483 0-1.526-1.017-2.495-2.422-2.495s-2.422.97-2.422 2.495c0 1.513 1.017 2.482 2.422 2.482"/><path fill="currentColor" d="M107.299 87.645h-.038c0 .012.024 1.053.024 2.156v2.906h-2.033V84.23h2.058l3.609 4.965h.036c0-.011-.013-1.102-.013-2.022V84.23h2.036v8.477h-2.072z"/><path fill="currentColor" d="M39.439 105.078c0-.484.012-.533.012-.593h-.024c-.484.411-1.404.763-2.385.763-2.362 0-4.36-1.78-4.36-4.421 0-2.591 1.865-4.395 4.396-4.395 1.926 0 3.402 1.066 3.947 2.446l-2.009.545c-.328-.545-.957-1.078-2.035-1.078-1.368 0-2.253 1.018-2.253 2.495 0 1.501.981 2.482 2.483 2.482 1.162 0 1.89-.509 2.155-.871v-.401h-2.131v-1.889h4.02v4.917z"/><path fill="currentColor" d="M49.613 101.3c0 2.554-1.478 3.948-3.693 3.948-2.228 0-3.693-1.394-3.693-3.948v-4.699h2.058v4.638c0 1.453.557 2.084 1.66 2.084 1.089 0 1.657-.631 1.657-2.084v-4.638h2.01z"/><path fill="currentColor" d="m52.292 103.674-.509 1.405H49.64l3.27-8.478h2.313l3.282 8.478h-2.18l-.51-1.405zm2.252-3.536c-.267-.703-.46-1.235-.472-1.248h-.037c-.012.013-.205.533-.472 1.236l-.605 1.695h2.191z"/><path fill="currentColor" d="M62.78 96.601c2.531 0 4.469 1.72 4.469 4.275s-1.95 4.203-4.456 4.203h-3.621v-8.478zm-.108 6.588c1.26 0 2.53-.642 2.53-2.313 0-1.659-1.27-2.385-2.53-2.385h-1.466v4.698z"/><path fill="currentColor" d="M68.102 96.601h6.176v1.89h-4.144v1.453h3.052v1.695h-3.052v1.55h4.204v1.89h-6.236z"/><path fill="currentColor" d="M75.357 96.601h2.033v6.588h3.803v1.89h-5.836z"/><path fill="currentColor" d="M85.783 96.432c2.592 0 4.47 1.817 4.47 4.408s-1.878 4.408-4.47 4.408-4.468-1.817-4.468-4.408c0-2.59 1.877-4.408 4.468-4.408m0 6.89c1.406 0 2.423-.969 2.423-2.482 0-1.526-1.017-2.495-2.423-2.495-1.405 0-2.421.97-2.421 2.495 0 1.513 1.016 2.482 2.421 2.482"/><path fill="currentColor" d="M98.525 101.3c0 2.554-1.477 3.948-3.693 3.948-2.228 0-3.693-1.394-3.693-3.948v-4.699h2.058v4.638c0 1.453.557 2.084 1.66 2.084 1.089 0 1.658-.631 1.658-2.084v-4.638h2.01z"/><path fill="currentColor" d="M102.802 96.601c2.084 0 3.343 1.103 3.343 2.92 0 1.779-1.259 2.918-3.343 2.918h-1.126v2.64h-2.033v-8.478zm.062 4.069c.859 0 1.247-.448 1.247-1.113 0-.666-.388-1.104-1.247-1.104h-1.188v2.217z"/><path fill="currentColor" d="M106.91 96.601h6.176v1.89h-4.143v1.453h3.052v1.695h-3.052v1.55h4.203v1.89h-6.236z"/><path fill="currentColor" d="M7.191 112.257c.052.385.393.697 1.016.697.49 0 .809-.192.809-.608 0-.556-.57-.594-1.298-.749-.526-.119-1.15-.326-1.15-1.143 0-.801.586-1.209 1.55-1.209.883 0 1.47.349 1.654 1.024l-.69.178c-.095-.363-.385-.586-.92-.586-.503 0-.8.193-.8.556 0 .43.416.52 1.075.645.535.105 1.372.305 1.372 1.269 0 .861-.668 1.232-1.602 1.232-.69 0-1.55-.2-1.728-1.121z"/><path fill="currentColor" d="m12.266 112.502-.363.98h-.794l1.624-4.155h.942l1.625 4.155h-.808l-.364-.98zm1.322-1.468c-.269-.713-.372-1.046-.38-1.054h-.022l-.4 1.098-.275.749h1.373z"/><path fill="currentColor" d="M16.885 109.327h.778v4.155h-.778z"/><path fill="currentColor" d="m22.508 113.482-2.114-2.96h-.022c0 .007.015.452.015.942v2.018h-.78v-4.155h.802l2.114 2.901h.016c0-.007-.009-.415-.009-.853v-2.048h.78v4.155z"/><path fill="currentColor" d="M27.193 110.054v3.427h-.779v-3.427h-1.41v-.727h3.59v.727z"/><path fill="currentColor" d="M30.14 111.7v-.682h2.887v.682z"/><path fill="currentColor" d="m38.608 111.501.007-1.031h-.021l-1.07 2.01h-.511l-1.084-2.054h-.014c0 .007.008.652.008 1.031v2.025h-.757v-4.155h.95l.763 1.395c.267.482.415.801.423.801h.023c.014 0 .17-.319.437-.809l.75-1.387h.875v4.155h-.779z"/><path fill="currentColor" d="m42.127 112.502-.362.98h-.794l1.623-4.155h.943l1.625 4.155h-.809l-.363-.98zm1.322-1.468c-.268-.713-.372-1.046-.38-1.054h-.021l-.401 1.098-.275.749h1.373z"/><path fill="currentColor" d="M46.746 109.327h.778v3.427h2.048v.728h-2.826z"/><path fill="currentColor" d="M52.978 109.245c1.262 0 2.212.906 2.212 2.158 0 1.262-.95 2.16-2.212 2.16-1.253 0-2.195-.898-2.195-2.16 0-1.252.942-2.158 2.195-2.158m0 3.606c.817 0 1.418-.587 1.418-1.448s-.6-1.445-1.418-1.445c-.817 0-1.408.585-1.408 1.445s.593 1.448 1.408 1.448"/><path fill="currentColor" d="M65.768 113.481c0-.416.007-.49.007-.519h-.014c-.2.23-.682.601-1.432.601-1.23 0-2.173-.898-2.173-2.16 0-1.245.927-2.158 2.211-2.158.823 0 1.623.379 1.98 1.224l-.711.193c-.194-.371-.632-.711-1.262-.711-.845 0-1.432.555-1.432 1.452 0 .869.594 1.455 1.529 1.455.593 0 1.12-.297 1.29-.527v-.43h-1.195v-.69h1.9v2.27z"/><path fill="currentColor" d="M71.92 111.619c0 1.329-.696 1.944-1.84 1.944-1.142 0-1.832-.615-1.832-1.944v-2.292h.795v2.367c0 .786.34 1.157 1.053 1.157.705 0 1.053-.371 1.053-1.157v-2.367h.771z"/><path fill="currentColor" d="m74.356 112.502-.362.98H73.2l1.623-4.155h.943l1.625 4.155h-.809l-.363-.98zm1.322-1.468c-.268-.713-.373-1.046-.38-1.054h-.021l-.401 1.098-.275.749h1.373z"/><path fill="currentColor" d="M80.495 109.327c1.335 0 2.307.786 2.307 2.092 0 1.314-.972 2.063-2.284 2.063h-1.543v-4.155zm.015 3.427c.898 0 1.505-.414 1.505-1.335 0-.912-.6-1.365-1.527-1.365h-.736v2.7z"/><path fill="currentColor" d="M84.498 109.327h3.033v.727h-2.255v.95h1.7v.69h-1.7v1.06h2.293v.728h-3.071z"/><path fill="currentColor" d="M89.351 109.327h.778v3.427h2.048v.728H89.35z"/><path fill="currentColor" d="M95.585 109.245c1.262 0 2.211.906 2.211 2.158 0 1.262-.95 2.16-2.211 2.16-1.254 0-2.196-.898-2.196-2.16 0-1.252.942-2.158 2.196-2.158m0 3.606c.816 0 1.418-.587 1.418-1.448s-.602-1.445-1.418-1.445-1.41.585-1.41 1.445.594 1.448 1.41 1.448"/><path fill="currentColor" d="M103.096 111.619c0 1.329-.698 1.944-1.84 1.944-1.141 0-1.832-.615-1.832-1.944v-2.292h.793v2.367c0 .786.341 1.157 1.054 1.157.704 0 1.053-.371 1.053-1.157v-2.367h.772z"/><path fill="currentColor" d="M106.459 109.327c1.061 0 1.67.542 1.67 1.365 0 .831-.609 1.35-1.67 1.35h-.689v1.44h-.78v-4.155zm.029 2.07c.564 0 .847-.274.847-.69 0-.4-.275-.69-.847-.69h-.718v1.38z"/><path fill="currentColor" d="M109.74 109.327h3.036v.727h-2.256v.95h1.699v.69h-1.699v1.06h2.292v.728h-3.072z"/><path fill="currentColor" d="m57.806 113.618-.679-.058 2.436-3.953.666.057z"/></g></svg>';

  const signeSvg = (cle) => {
    const t = SIGNE_DE[pli(cle).replace(/[^a-z]/g, '')];
    if (!t) return '';

    







    if (t === 'egaliseur') {
      return '<span class="rp-signe rp-signe--eq" aria-hidden="true">' +
        '<span class="rp-signe-axe"></span>' +
        '<span class="rp-signe-barres">' +
          SIGNES.egaliseur.map((h, i) =>
            '<i style="height:' + h + 'px;animation-duration:' + SIGNES.tempos[i % SIGNES.tempos.length] + 'ms;' +
              'animation-delay:' + (i * 55) + 'ms"></i>').join('') +
        '</span>' +
      '</span>';
    }

    













    if (t === 'onde') {
      return '<span class="rp-signe rp-signe--sillage" aria-hidden="true">' +
        '<span class="rp-sil-eau"></span>' +
        '<span class="rp-sil-trace"><i></i><i></i><i></i></span>' +
        '<span class="rp-sil-coque">' +
          '<svg viewBox="0 0 28 22" fill="none">' +
             
            '<path d="M14 2 L14 15 L5 15 Z" fill="currentColor"/>' +
            '<path d="M16 5 L23 15 L16 15 Z" fill="currentColor" opacity=".68"/>' +
            '<path d="M2 16 L26 16 L22 21 L6 21 Z" fill="currentColor"/>' +
          '</svg>' +
        '</span>' +
      '</span>';
    }

    



    if (t === 'cimaise') {
      return '<span class="rp-signe rp-signe--cim" aria-hidden="true">' +
        '<span class="rp-cim-rail"></span>' +
        '<span class="rp-cim-cadres">' +
          SIGNES.cimaise.map((d, i) =>
            '<i style="width:' + d[0] + 'px;height:' + d[1] + 'px;' +
              'animation-delay:' + (i * 620) + 'ms"></i>').join('') +
        '</span>' +
      '</span>';
    }

    


    if (t === 'guirlande') {
      


      return '<span class="rp-signe rp-signe--gui" aria-hidden="true">' +
        '<svg class="rp-gui-cable" viewBox="0 0 100 34" fill="none" preserveAspectRatio="none">' +
          '<path d="M0 7 Q 50 31 100 7" stroke="currentColor" stroke-width="1.1" ' +
            'stroke-linecap="round" opacity=".44" vector-effect="non-scaling-stroke"/>' +
        '</svg>' +
        SIGNES.guirlande.map((p, i) =>
          '<i style="left:' + p[0] + '%;top:' + p[1] + 'px;animation-delay:' +
            (i * 140) + 'ms"></i>').join('') +
      '</span>';
    }

    














    if (t === 'ruban') {
      return '<span class="rp-signe rp-signe--cer" aria-hidden="true">' +
        '<i class="rp-cer-g"></i>' +
        '<i class="rp-cer-d"></i>' +
        '<span class="rp-cer-noeud"></span>' +
      '</span>';
    }

    








    if (t === 'tribune') {
      return '<span class="rp-signe rp-signe--trib" aria-hidden="true">' +
        '<span class="rp-trib-sol"></span>' +
        '<span class="rp-trib-pupitre"></span>' +
        '<span class="rp-trib-voix"><i></i><i></i><i></i></span>' +
        '<span class="rp-trib-salle">' +
          SIGNES.assistance.map((h, i) =>
            '<i style="height:' + h + 'px;animation-delay:' + (i * 130) + 'ms"></i>').join('') +
        '</span>' +
      '</span>';
    }

    if (t === 'rayons') {
      return '<span class="rp-signe rp-signe--rayons" aria-hidden="true">' +
        SIGNES.rayons.map(i => '<i style="animation-delay:' + (i * 110) + 'ms"></i>').join('') +
      '</span>';
    }

    

    return '';
  };
  const catDe = (cle) => CATS[pli(cle).replace(/[^a-z]/g, '')] || { ic: IC.etoile, c: '#7894F7' };
  const vifDe = (cle) => VIFS[pli(cle).replace(/[^a-z]/g, '')] || catDe(cle).c;

   
  












  


  const DELAI_ATTENTE = 8000;

  const MOTIF = "data:image/svg+xml,%3Csvg id='Calque_1' data-name='Calque 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1584 1080'%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: none; %7D .cls-2 %7B fill: %23fff; %7D .cls-3 %7B clip-path: url(%23clippath); %7D %3C/style%3E %3CclipPath id='clippath'%3E %3Crect class='cls-1' x='3.11' y='1.32' width='1625.83' height='1090.77'/%3E %3C/clipPath%3E %3C/defs%3E %3Cg class='cls-3'%3E %3Cg%3E %3Cpath class='cls-2' d='M196.32,606.55c-28.07,20.3-51.81,46.52-69.6,77.59-13.61,23.76-23.01,49.16-28.24,75.29h-3.23s-85.67,0-85.67,0c5.91-40.98,19.45-81.5,41.21-119.49,16.14-28.18,35.91-53.4,58.6-75.29h86.94v41.9Z'/%3E %3Cpath class='cls-2' d='M389.54,593.24c-31.54,21.34-58.86,50.04-79.09,85.37-14.77,25.78-24.56,53.09-29.81,80.81h-66.77c5.83-39.09,18.86-77.72,39.62-113.96,17.84-31.15,40.05-58.19,65.4-80.81h70.64v28.59Z'/%3E %3Cpath class='cls-2' d='M528.91,759.43h53.84v15.22c-36.19,23.08-66.56,54.76-88.58,93.22-15.77,27.53-26.12,56.73-31.49,86.34h-44.49c5.76-37.19,18.25-73.94,38.02-108.44,19.19-33.51,43.86-62.55,72.71-86.34'/%3E %3Cpath class='cls-2' d='M775.97,761.86c-39.41,23.77-73.54,57.63-98.08,100.49-16.76,29.27-27.69,60.35-33.17,91.86h-22.18c5.67-35.3,17.6-70.16,36.36-102.91,21.24-37.07,49.14-67.88,81.27-91.87h35.79v2.43Z'/%3E %3Cpath class='cls-2' d='M866.37,859.58c-17.27,30.14-28.46,62.17-33.98,94.62h-11.08c5.63-34.35,17.31-68.26,35.57-100.15,21.79-38.04,50.99-70.06,85.58-94.62h19.77c-39.23,24.59-72.11,58.68-95.86,100.15'/%3E %3Cpath class='cls-2' d='M127.5,506.33c-17.46,17.6-31.58,37.32-42.4,58.32H3.11v-77.61c13.21-20.87,28.83-40.63,46.9-58.84,23.06-23.24,48.81-42.77,76.54-58.32h69.78v88.25c-25.28,11.63-48.58,27.8-68.82,48.2'/%3E %3Cpath class='cls-2' d='M389.54,446.04c-28.22,12.28-54.18,29.91-76.57,52.48-19.46,19.61-35.2,41.95-47,66.14h-69.65v-56.43c14.71-26.12,33.01-50.4,54.65-72.2,27.39-27.61,58.7-49.83,92.67-66.14h45.9v76.16Z'/%3E %3Cpath class='cls-2' d='M582.76,628.93c-30.7,12.64-59.45,31.48-84.32,56.56-21.89,22.07-39,47.16-51.34,73.95h-57.56v-32.18c15.32-32.05,36.07-62.1,62.4-88.64,33.28-33.54,72.09-58.13,113.48-73.95h17.34v64.27Z'/%3E %3Cpath class='cls-2' d='M1162.41,570.18v46.9c-33.56,13.16-65.02,33.31-92.07,60.58-24.08,24.28-42.55,52.09-55.54,81.77h-45.61v-4.44c15.19-39.58,38.52-76.69,70.15-108.58,35.73-36.01,78.05-61.37,123.07-76.23'/%3E %3Cpath class='cls-2' d='M1355.62,605.28c-36.42,13.64-70.59,35.12-99.82,64.58-25.93,26.13-46.09,56.52-59.93,89.57h-23.6c14.93-38.98,37.84-74.77,68.03-105.2,33.56-33.84,73.16-57.96,115.32-72.44v23.49Z'/%3E %3Cpath class='cls-2' d='M1548.84,601.7c-38.01,13.85-73.68,36.06-104.1,66.72-26.35,26.56-46.85,57.43-60.96,91.01h-11.87c14.68-36.55,36.59-70.1,65.08-98.82,32.59-32.86,70.97-56.4,111.85-70.68v11.77Z'/%3E %3Cpath class='cls-2' d='M3.11,252.58v-.07c16.28-13.91,33.9-26.46,52.77-37.44,32.86-19.13,67.52-32.32,102.77-39.98h37.68v92.17s0,35.52,0,35.52c-25.62,4.35-50.9,13.27-74.69,27.11-18.9,11-35.81,24.49-50.46,39.98H3.11v-117.3Z'/%3E %3Cpath class='cls-2' d='M254.57,224.65c42.79-24.91,88.73-39.47,134.97-44.49v68.55s0,42.87,0,42.87c-27.5,4.44-54.66,13.91-80.17,28.75-23.11,13.45-43.03,30.31-59.65,49.54h-53.4v-67.08s0-35.53,0-35.53c17.56-15.92,37-30.25,58.25-42.62'/%3E %3Cpath class='cls-2' d='M582.76,385.85v89.26c-29.78,4.63-58.77,14.78-85.65,30.43-27.04,15.74-49.95,35.95-68.46,59.11h-39.11v-87.53c18.87-18.18,40.15-34.4,63.73-48.13,40.46-23.55,84.42-38.02,129.49-43.14'/%3E %3Cpath class='cls-2' d='M775.97,464.07c-31.25,4.6-62.16,15.04-91.13,31.9-30.5,17.75-56.52,41.13-77.06,68.68h-25.03v-72.06c20.3-20.81,43.45-39.04,69.21-54.03,39.34-22.9,81.52-36.45,124.01-41.4v66.9Z'/%3E %3Cpath class='cls-2' d='M969.19,452.74c-33.61,4.79-66.33,16.04-96.61,33.67-34.23,19.92-63.05,46.62-85.15,78.25h-11.46v-56.03c21.38-23.61,46.44-44.05,74.69-60.5,37.07-21.57,77.28-34.95,118.53-39.97v44.58Z'/%3E %3Cpath class='cls-2' d='M1162.41,419.27v22.28c-35.52,4.86-70.12,16.67-102.09,35.29-36.93,21.49-67.81,50.56-91.13,85.08v-36.58c22.3-26.74,49.27-49.65,80.17-67.64,35.37-20.59,73.71-33.45,113.05-38.43'/%3E %3Cpath class='cls-2' d='M1355.62,438.53c-36.07,4.73-71.82,16.54-105.23,35.99-35.13,20.44-64.84,47.64-87.99,79.75v-17.95c22.27-27.98,49.88-52.38,82.5-71.37,35.14-20.45,72.77-32.77,110.71-37.55v11.13Z'/%3E %3Cpath class='cls-2' d='M196.32,40.03c21.68-11.01,44.63-19.87,68.63-26.35,41.24-11.14,83.3-14.68,124.59-10.89v133.68c-10.69-1.59-21.55-2.46-32.52-2.46-19.17,0-38.65,2.5-58.02,7.73-25.83,6.98-49.75,18.32-71,33.35h-31.67V40.03Z'/%3E %3Cpath class='cls-2' d='M460.73,220.66c40.93-11.05,82.14-14.15,122.03-10.27v111.27c-10.8-1.55-21.75-2.39-32.81-2.39-20.1,0-40.54,2.62-60.86,8.11-31.22,8.44-59.78,22.95-84.47,42.49h-15.08v-78.3s0-42.87,0-42.87c22.39-11.81,46.18-21.29,71.19-28.04'/%3E %3Cpath class='cls-2' d='M870.13,304.5c-35.48,9.58-67.2,26.29-94.16,48.11v-80.07c23.7-13.72,49.52-24.61,77.14-32.06,38.43-10.38,77.64-13.5,116.08-9.6v54.47s0,12.29,0,12.29c-32.71-4.19-66.25-1.98-99.06,6.88'/%3E %3Cpath class='cls-2' d='M1162.41,242.14v44.47c-10.73-1.33-21.59-2.02-32.54-2.02-22.91,0-46.2,2.99-69.36,9.25-34.03,9.19-64.73,24.68-91.32,44.81v-41.01s0-12.29,0-12.29c24.38-14.78,51.16-26.41,79.97-34.2,38-10.26,76.27-12.94,113.24-9'/%3E %3Cpath class='cls-2' d='M1548.84,272.36c-35.23-4.12-71.27-1.59-106.55,7.94-31.82,8.59-60.89,22.38-86.66,40.13v-13.32c25.21-16.43,53.31-29.24,83.83-37.48,36.23-9.78,73.21-12.45,109.39-8.38v11.11Z'/%3E %3Cpath class='cls-2' d='M177.36,759.43c-26.67,29.95-46.22,65.97-56.85,105.97-7.91,29.77-10.3,59.73-7.85,88.81H46.56c-2.3-35.19,1.12-70.9,10.43-105.97,8.46-31.82,21.4-61.65,38.25-88.81h3.24s78.88,0,78.88,0Z'/%3E %3Cpath class='cls-2' d='M301.64,759.43h54.64c-24.23,29.2-42.73,63.98-53.13,103.11-8.06,30.34-10.81,61.26-8.4,91.67h-43.92c-2.32-34.24.91-68.99,9.98-103.11,8.9-33.47,22.86-64.22,40.84-91.67'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";

   

  const CSS = `





rdr-programme{display:block;width:100%;}
.rp-root{
  --rp-encre:#FFFFFF;
  --rp-encre-2:rgba(255,255,255,.72);
  --rp-encre-3:rgba(255,255,255,.52);
  --rp-jaune:#FCF150;    
  --rp-verre:rgba(255,255,255,.055);
  --rp-verre-fort:rgba(255,255,255,.10);
  --rp-filet:rgba(255,255,255,.14);
  --rp-filet-fort:rgba(255,255,255,.26);
  








  --rp-actif:#FFFFFF;
  --rp-halo:rgba(255,255,255,.34);
  

  


  --rp-fond-1:#7894F7;                 
  --rp-fond-1b:#4F5BA5;                
  --rp-fond-2:#16355D;                 
  --rp-fond-3:#0C1A31;                 
  




  --rp-r-bloc:28px 3px 16px 3px;       
  --rp-r-carte:0 16px 4px 0;           
  --rp-r-btn:3px 15px 3px 15px;        
  --rp-r-tag:2px 8px 2px 8px;          
  --rp-r:14px;

  













  --rp-chevauche:min(96px,14vh);

  












  

  --t-1:10px;     
  --t-2:12px;     
  --t-3:14px;     
  --t-4:16px;     
  --t-5:20px;     
  --t-6:26px;     
  --t-7:34px;     

  

  


  --rp-gout-h:22px; --rp-col-h:112px;
  





  --rp-marge-mob:14px;
  --e-1:4px;  --e-2:8px;  --e-3:12px; --e-4:16px;
  --e-5:24px; --e-6:32px; --e-7:48px; --e-8:64px;

  




  








  --o-pose:0 12px 26px -20px rgba(0,0,0,.95);
  --o-leve:0 18px 34px -18px rgba(0,0,0,1);
  --o-lueur:0 0 0 1px color-mix(in srgb, var(--c,#fff) 46%, transparent),
            0 10px 30px -8px color-mix(in srgb, var(--c,#fff) 62%, transparent),
            0 0 62px -14px color-mix(in srgb, var(--c,#fff) 88%, transparent);
  

  --o-arete:inset 0 1px 0 0 rgba(255,255,255,.07);
  position:relative;
  display:block;
  color:var(--rp-encre);
  font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  background:
    radial-gradient(105% 62% at 10% -6%, var(--rp-fond-1) 0%, transparent 58%),
    radial-gradient(120% 82% at 30% 4%, var(--rp-fond-1b) 0%, transparent 62%),
    radial-gradient(120% 90% at 92% 14%, var(--rp-fond-2) 0%, transparent 58%),
    var(--rp-fond-3);
  overflow:hidden;
  transition:background-color .5s ease;
}










.rp-root.est-off{
  --rp-halo:rgba(248,235,89,.34);
  --rp-fond-1:#60B9E9;                 
  --rp-fond-1b:#7A8EC7;                
  --rp-fond-2:#17355B;                 
  






  --rp-fond-3:#17355B;
  --rp-jaune:#F8EB59;                  
}



.rp-root.est-off{
  background:
    radial-gradient(105% 62% at 10% -6%, var(--rp-fond-1) 0%, transparent 58%),
    radial-gradient(120% 82% at 30% 4%, var(--rp-fond-1b) 0%, transparent 62%),
    radial-gradient(120% 90% at 92% 14%, var(--rp-fond-2) 0%, transparent 58%),
    radial-gradient(90% 44% at 78% 96%, rgba(96,185,233,.30) 0%, transparent 66%),
    radial-gradient(70% 36% at 6% 72%, rgba(122,142,199,.22) 0%, transparent 70%),
    var(--rp-fond-3);
}


.rp-root.est-off .rp-jour[aria-pressed="true"]{
  background:linear-gradient(165deg,#F8EB59 0%,#F6BE42 100%);
  border-color:rgba(255,255,255,.6);
}
.rp-root.est-off .rp-jour[aria-pressed="true"] b,
.rp-root.est-off .rp-jour[aria-pressed="true"] i{color:#17355B;}
















.rp-jour.est-auj{border-color:rgba(255,255,255,.42);}
.rp-jour.est-auj b::after{
  content:'';display:block;width:4px;height:4px;border-radius:50%;
  background:var(--rp-encre);margin:3px auto 0;
}
.rp-jour.est-auj[aria-pressed="true"] b::after{background:#fff;}


.rp-jour.est-we i{color:var(--rp-encre-2);}



.rp-jour.est-revolu{opacity:.42;}
.rp-jour.est-revolu[aria-pressed="true"]{opacity:1;}







.rp-root :where(h1,h2,h3,p,ul,li,figure,button,select,dl,dt,dd){margin:0;padding:0;}
.rp-root :where(ul){list-style:none;}
.rp-root :where(button,select){font:inherit;color:inherit;background:none;border:0;}
.rp-root *,.rp-root *::before,.rp-root *::after{box-sizing:border-box;}
.rp-root :where(button,select,a,summary):focus-visible{
  outline:2px solid var(--rp-actif);outline-offset:3px;border-radius:6px;
}










.rp-root .rp-ic{width:16px;height:16px;flex:none;}

 














.rp-hero{
  position:relative;isolation:isolate;
  display:grid;place-items:center;
   
  grid-template-columns:minmax(0,1fr);
  width:100%;margin:0;border-radius:0;
  aspect-ratio:2 / 1;
  





  max-height:min(66vh,650px);min-height:320px;
  overflow:hidden;
}
.rp-hero-img{position:absolute;inset:0;z-index:0;}
.rp-hero-img img{width:100%;height:100%;object-fit:cover;object-position:50% 50%;display:block;}





.rp-root.est-off .rp-hero-img img{object-position:50% 42%;}



@keyframes rp-fondu-heure{from{opacity:0;}to{opacity:1;}}
.rp-hero.est-bascule .rp-hero-img img{animation:rp-fondu-heure .6s ease both;}
@media (prefers-reduced-motion:reduce){
  .rp-hero.est-bascule .rp-hero-img img{animation:none;}
}




























.rp-hero-voile{
  position:absolute;inset:0;z-index:1;pointer-events:none;
  background:
    radial-gradient(56% 44% at 50% 46%,rgba(7,11,34,.66),rgba(7,11,34,0) 72%),
    linear-gradient(180deg,rgba(7,11,34,.62) 0%,rgba(7,11,34,.12) 22%,rgba(7,11,34,0) 40%),
    linear-gradient(0deg,var(--rp-fond) 0%,var(--rp-fond) 3%,rgba(7,11,34,.7) 17%,rgba(7,11,34,0) 44%);
}
.rp-hero.est-sans-image{background:linear-gradient(160deg,#2A2E7A,#111A44 62%,#0B1030);}






.rp-hero-fond{
  position:absolute;inset:0;z-index:2;
  display:flex;align-items:center;justify-content:space-between;
  padding:0;pointer-events:none;user-select:none;
  font-family:Varien,Impact,sans-serif;font-style:italic;line-height:.8;
  font-size:clamp(120px,calc(var(--rp-l,1180) * .3 * 1px),420px);
  
}
@supports not (-webkit-text-stroke:1px #000){
}














.rp-hero-dedans{
  position:relative;z-index:3;width:100%;text-align:center;
  



  padding:0 20px max(calc(var(--rp-chevauche) + 14px),min(clamp(52px,11%,132px),15vh));
  display:grid;justify-items:center;align-content:center;
  











  grid-template-columns:minmax(0,1fr);min-width:0;
}
.rp-logo{
  





  display:inline-block;width:auto;
  









  --rp-logo-h:min(clamp(58px,calc(var(--rp-l,1180) * .072 * 1px),104px),12vh);
  height:var(--rp-logo-h);
  margin:0 auto clamp(12px,2vw,26px);object-fit:contain;color:#fff;
  filter:drop-shadow(0 4px 22px rgba(6,10,30,.9));
}
.rp-logo svg{display:block;height:100%;width:auto;}



.rp-logo--svg{width:var(--rp-logo-h);}
.rp-logo--svg svg{width:100%;}



























.rp-logo--off{
  box-sizing:content-box;
  height:min(clamp(40px,calc(var(--rp-l,1180) * .05 * 1px),72px),8.5vh);
  max-width:min(240px,68%);
  padding:min(15px,2vh) min(26px,4vw);
  border-radius:16px 3px 16px 3px;
  background:rgba(9,20,40,.52);
  -webkit-backdrop-filter:blur(14px) saturate(1.15);
          backdrop-filter:blur(14px) saturate(1.15);
  border:1px solid rgba(255,255,255,.13);
  box-shadow:0 16px 34px -24px rgba(0,0,0,.95),var(--o-arete);
   
  filter:none;
}


@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){
  .rp-logo--off{background:rgba(9,20,40,.76);}
}




















.rp-marques{
  display:flex;align-items:center;justify-content:center;
  gap:clamp(10px,1.8vw,22px);flex-wrap:wrap;
  margin:0 auto clamp(12px,2vw,26px);
}


.rp-marques .rp-logo{margin:0;}





.rp-logo-tiers{
  




  box-sizing:content-box;display:block;width:auto;
  height:min(clamp(26px,calc(var(--rp-l,1180) * .033 * 1px),48px),5.6vh);
  max-width:min(190px,42%);object-fit:contain;
  padding:min(13px,1.8vh) min(18px,2.8vw);
  border-radius:16px 3px 16px 3px;
  background:rgba(9,20,40,.52);
  -webkit-backdrop-filter:blur(14px) saturate(1.15);
          backdrop-filter:blur(14px) saturate(1.15);
  border:1px solid rgba(255,255,255,.13);
  box-shadow:0 16px 34px -24px rgba(0,0,0,.95),var(--o-arete);
}
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){
  .rp-logo-tiers{background:rgba(9,20,40,.76);}
}
@media (max-width:520px){
  

  .rp-marques{gap:10px;}
  .rp-logo-tiers{max-width:52%;}
}
.rp-logo-vide{
  justify-self:center;margin:0 auto clamp(12px,2vw,26px);
  display:inline-flex;align-items:center;justify-content:center;
  padding:7px 18px;border-radius:var(--rp-r-tag);
  border:1px solid rgba(255,255,255,.34);background:rgba(9,14,38,.42);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  font:800 var(--t-2)/1 Montserrat,sans-serif;letter-spacing:.26em;color:#fff;
}


.rp-titre{
  margin:0 auto;max-width:15ch;
  font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;
  font-size:min(clamp(32px,calc(var(--rp-l,1180) * .092 * 1px),92px),9vh);
  line-height:.92;letter-spacing:.005em;
  text-transform:uppercase;text-wrap:balance;color:#fff;
  text-shadow:0 2px 30px rgba(6,10,30,.55);
}
.rp-titre span{display:block;}
.rp-titre .rp-t2{
  color:transparent;-webkit-text-stroke:1.6px rgba(255,255,255,.94);
}
@supports not (-webkit-text-stroke:1px #000){.rp-titre .rp-t2{color:var(--rp-encre);}}



























.rp-sstitre{
  position:relative;
  width:max-content;max-width:min(100%,60ch);
  margin:min(clamp(14px,2vw,26px),3vh) auto 0;
  padding:min(13px,1.8vh) 26px min(14px,1.9vh);
  border-radius:20px 4px 20px 4px;
  background:rgba(9,20,40,.5);
  -webkit-backdrop-filter:blur(14px) saturate(1.15);
          backdrop-filter:blur(14px) saturate(1.15);
  border:1px solid rgba(255,255,255,.13);
  box-shadow:0 14px 30px -22px rgba(0,0,0,.95),var(--o-arete);
  text-wrap:balance;
  font-size:var(--t-3);line-height:1.6;color:#FFFFFF;
}


@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){
  .rp-sstitre{background:rgba(9,20,40,.74);}
}
.rp-root.sous-720 .rp-sstitre{padding:11px 18px 12px;border-radius:16px 3px 16px 3px;}











.rp-illus{
  position:relative;z-index:1;margin:14px auto 0;width:min(100%,1180px);
  aspect-ratio:22/7;max-height:min(38vh,380px);
  









  overflow:visible;
  -webkit-mask-image:
    linear-gradient(to bottom, transparent 0%, #000 11%, #000 66%, transparent 100%),
    linear-gradient(to right, transparent 0%, #000 13%, #000 87%, transparent 100%);
          mask-image:
    linear-gradient(to bottom, transparent 0%, #000 11%, #000 66%, transparent 100%),
    linear-gradient(to right, transparent 0%, #000 13%, #000 87%, transparent 100%);
  -webkit-mask-composite:source-in;mask-composite:intersect;
}





.rp-halo{
  position:absolute;inset:-14% -7% -22%;z-index:0;pointer-events:none;
  filter:blur(64px) saturate(1.45);opacity:.5;
  -webkit-mask-image:radial-gradient(72% 72% at 50% 46%, #000 30%, transparent 78%);
          mask-image:radial-gradient(72% 72% at 50% 46%, #000 30%, transparent 78%);
}
.rp-halo img{width:100%;height:100%;object-fit:cover;display:block;}




.rp-illus > img{position:relative;z-index:1;width:100%;height:100%;
  object-fit:cover;object-position:center 26%;display:block;}
.rp-illus-vide{
  position:relative;width:100%;height:100%;display:grid;place-items:center;text-align:center;
  background:
    radial-gradient(60% 90% at 50% 100%, rgba(168,85,247,.30), transparent 70%),
    radial-gradient(40% 70% at 18% 100%, rgba(56,189,248,.26), transparent 70%),
    radial-gradient(40% 70% at 82% 100%, rgba(236,72,153,.22), transparent 70%);
  color:var(--rp-encre-3);font-size:var(--t-2);letter-spacing:.16em;text-transform:uppercase;
}



.rp-illus-vide::before{
  content:'';position:absolute;inset:auto 0 0;height:62%;
  background:
    linear-gradient(90deg,transparent 6%,rgba(255,255,255,.10) 6%,rgba(255,255,255,.10) 11%,transparent 11%,
      transparent 16%,rgba(255,255,255,.07) 16%,rgba(255,255,255,.07) 24%,transparent 24%,
      transparent 30%,rgba(255,255,255,.12) 30%,rgba(255,255,255,.12) 33%,transparent 33%,
      transparent 44%,rgba(255,255,255,.08) 44%,rgba(255,255,255,.08) 58%,transparent 58%,
      transparent 66%,rgba(255,255,255,.11) 66%,rgba(255,255,255,.11) 70%,transparent 70%,
      transparent 78%,rgba(255,255,255,.07) 78%,rgba(255,255,255,.07) 90%,transparent 90%);
  -webkit-mask-image:linear-gradient(transparent,#000 45%);mask-image:linear-gradient(transparent,#000 45%);
}
.rp-illus-vide span{position:relative;z-index:1;}

 
 











.rp-socle{
  position:relative;z-index:3;
  margin:calc(-1 * min(var(--rp-chevauche),7vw)) auto 0;
  width:min(100%,1180px);
}










.rp-socle{--rp-meuble-x:var(--e-4);}
.rp-root.sous-720 .rp-socle{--rp-meuble-x:var(--e-2);}
.rp-socle > .rp-jours-cadre,
.rp-socle > .rp-socle-pied{
  margin-left:calc(var(--rp-meuble-x) + var(--e-2));
  margin-right:calc(var(--rp-meuble-x) + var(--e-2));
}
 
.rp-socle::before{
  content:'';position:absolute;inset:0 var(--rp-meuble-x);z-index:-1;
  border-radius:var(--rp-r-bloc);
  background:linear-gradient(180deg,rgba(10,18,44,.72),rgba(10,18,44,.88));
  backdrop-filter:blur(18px) saturate(1.2);
  -webkit-backdrop-filter:blur(18px) saturate(1.2);
  border:1px solid rgba(255,255,255,.16);
  box-shadow:var(--o-leve),var(--o-arete);
}





















.rp-socle .rp-jours{
  padding:var(--e-4) var(--e-3) var(--e-3);
  border-color:transparent;background:none;
  backdrop-filter:none;-webkit-backdrop-filter:none;
  border-radius:0;
}
 
.rp-socle-pied{
  display:flex;align-items:center;justify-content:space-between;
  gap:var(--e-4);flex-wrap:wrap;
  padding:var(--e-3) 0 var(--e-4);
  border-top:1px solid rgba(255,255,255,.1);
}
.rp-socle-jour{
  display:flex;align-items:baseline;gap:var(--e-2);margin-left:auto;
  font-size:var(--t-2);color:var(--rp-encre-3);
}




.rp-socle-pied > .rp-socle-jour:only-child{margin-left:0;}
.rp-socle-jour b{
  font:800 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.16em;
  text-transform:uppercase;color:var(--rp-encre);
}




















.rp-hero-img img{
  -webkit-mask-image:linear-gradient(180deg,#000 48%,rgba(0,0,0,.86) 70%,rgba(0,0,0,.42) 88%,transparent 100%);
  mask-image:linear-gradient(180deg,#000 48%,rgba(0,0,0,.86) 70%,rgba(0,0,0,.42) 88%,transparent 100%);
}


.rp-hero-voile{
  background:
    radial-gradient(56% 44% at 50% 46%,rgba(7,11,34,.66),rgba(7,11,34,0) 72%),
    linear-gradient(180deg,rgba(7,11,34,.62) 0%,rgba(7,11,34,.12) 22%,rgba(7,11,34,0) 40%),
    linear-gradient(0deg,var(--rp-fond) 0%,rgba(7,11,34,.42) 9%,rgba(7,11,34,0) 26%);
}












.rp-jours-cadre{position:relative;z-index:2;--rp-fondu:64px;}











.rp-fl{
  position:absolute;top:50%;transform:translateY(-50%);z-index:3;
  width:32px;height:32px;display:grid;place-items:center;
  border-radius:var(--rp-r-btn);border:1px solid var(--rp-filet);
  background:rgba(9,20,40,.92);color:var(--rp-encre-2);cursor:pointer;
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  transition:opacity .2s,border-color .2s,color .2s;
}
.rp-fl[hidden]{display:none;}
.rp-fl .rp-ic{width:15px;height:15px;}













.rp-jours-cadre.a-gauche:not(.a-droite) .rp-jours{
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 var(--rp-fondu));
          mask-image:linear-gradient(90deg,transparent 0,#000 var(--rp-fondu));
}
.rp-jours-cadre.a-droite:not(.a-gauche) .rp-jours{
  -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - var(--rp-fondu)),transparent 100%);
          mask-image:linear-gradient(90deg,#000 calc(100% - var(--rp-fondu)),transparent 100%);
}
.rp-jours-cadre.a-gauche.a-droite .rp-jours{
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 var(--rp-fondu),
    #000 calc(100% - var(--rp-fondu)),transparent 100%);
          mask-image:linear-gradient(90deg,transparent 0,#000 var(--rp-fondu),
    #000 calc(100% - var(--rp-fondu)),transparent 100%);
}



.rp-fl{top:50%;transform:translateY(-50%);}



.rp-fl::before{
  content:'';position:absolute;top:-14px;bottom:-14px;width:70px;z-index:-1;
  pointer-events:none;
}



.rp-fl--g::before,.rp-fl--d::before{display:none;}
.rp-fl--g{left:4px;}
.rp-fl--g .rp-ic{transform:rotate(90deg);}
.rp-fl--d .rp-ic{transform:rotate(-90deg);}
.rp-fl--d{right:4px;}
@media (hover:hover) and (pointer:fine){
  .rp-fl:hover{border-color:var(--rp-filet-fort);color:var(--rp-encre);}
}
@media (hover:none){ .rp-fl{height:40px;} }
.rp-jours{
  display:flex;gap:var(--e-2);padding:8px 10px;overflow-x:auto;scroll-snap-type:x proximity;
  border-radius:var(--rp-r-bloc);border:1px solid var(--rp-filet);
  background:rgba(9,20,40,.62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  scrollbar-width:none;
  




  scroll-padding-inline:10px;
}
.rp-jours::-webkit-scrollbar{display:none;height:0;}
.rp-jour{
  flex:1 0 auto;min-width:62px;scroll-snap-align:center;
  display:grid;gap:1px;padding:8px 6px 9px;border-radius:var(--rp-r-btn);
  border:1px solid transparent;cursor:pointer;text-align:center;
  transition:background .18s,border-color .18s,transform .18s;
}
.rp-jour b{display:block;font-size:var(--t-5);font-weight:800;line-height:1.05;}
.rp-jour i{display:block;font-style:normal;font-size:var(--t-1);letter-spacing:.1em;
  text-transform:uppercase;color:var(--rp-encre-3);}













.rp-jour[aria-pressed="true"]{
  background:linear-gradient(165deg,#7894F7 0%,#4F5BA5 100%);
  border-color:rgba(255,255,255,.5);
  box-shadow:var(--o-arete);
}
.rp-jour[aria-pressed="true"] b,.rp-jour[aria-pressed="true"] i{color:#fff;}
 
.rp-jour[aria-pressed="true"] .rp-jour-pastille{background:#FCF150;}
.rp-jour-pastille{
  display:block;width:5px;height:5px;margin:3px auto 0;border-radius:50%;
  background:var(--rp-jaune);
}
.rp-jour-pastille[hidden]{display:none;}

 



.rp-outils{
  position:relative;z-index:2;width:min(100%,1180px);margin:var(--e-5) auto 0;padding:0 20px;
  display:grid;gap:var(--e-3);
}









.rp-bascules{display:flex;flex-wrap:wrap;align-items:center;gap:var(--e-5);
  width:max-content;max-width:100%;}
.rp-bascule{display:flex;flex-wrap:wrap;align-items:center;gap:var(--e-1);padding:4px;border-radius:var(--rp-r-btn);border:1px solid var(--rp-filet);
  background:var(--rp-verre);width:max-content;max-width:100%;}






















.rp-root.sous-520 .rp-bascules{width:100%;gap:var(--e-3);}
.rp-root.sous-520 .rp-bascule{width:100%;}
.rp-root.sous-520 .rp-bascule button{flex:1 1 0;min-width:0;text-align:center;}
.rp-bascule button{
  padding:9px 18px;border-radius:var(--rp-r-btn);font-size:var(--t-2);font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;color:var(--rp-encre-3);cursor:pointer;
  transition:background .2s,color .2s;white-space:nowrap;
}
.rp-bascule button[aria-pressed="true"]{background:#FFFFFF;color:#16355D;}









.rp-root.est-off .rp-bascule button[aria-pressed="true"]{
  background:linear-gradient(165deg,#F8EB59 0%,#F6BE42 100%);
  color:#16355D;
}
.rp-filtres{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--e-2);}














.rp-champ{
  position:relative;display:flex;align-items:center;gap:var(--e-2);min-width:0;
  padding:0 var(--e-3);border-radius:var(--rp-r-btn);
  





  border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.03);
  transition:border-color .2s,background .2s;
}
 
.rp-champ.est-pose{
  border-style:solid;border-color:var(--rp-actif);
  background:var(--rp-verre-fort);box-shadow:var(--o-arete);
}
.rp-champ > .rp-ic{flex:none;width:15px;height:15px;color:var(--rp-encre-3);}
.rp-champ.est-pose > .rp-ic{color:var(--rp-actif);}








.rp-champ-btn{
  flex:1 1 auto;min-width:0;padding:11px 22px 11px 0;text-align:left;
  font-size:var(--t-2);font-weight:600;color:var(--rp-encre);cursor:pointer;
  text-overflow:ellipsis;white-space:nowrap;overflow:hidden;
}
.rp-champ-btn[data-vide="true"]{color:var(--rp-encre-2);font-weight:500;}
.rp-champ .rp-chev{position:absolute;right:11px;width:14px;height:14px;
  color:var(--rp-encre-3);pointer-events:none;transition:transform .2s;}
.rp-champ.est-ouvert .rp-chev{transform:rotate(180deg);}



















.rp-pop{
  position:fixed;z-index:2147483000;min-width:220px;max-width:min(92vw,340px);
  max-height:min(52vh,360px);overflow:auto;overscroll-behavior:contain;
  padding:6px;border-radius:14px;
  border:1px solid var(--rp-filet-fort);
  background:#0C1A31;
  box-shadow:0 24px 60px -18px rgba(0,0,0,.75);
  scrollbar-width:thin;scrollbar-color:var(--rp-filet-fort) transparent;
}
.rp-pop[hidden]{display:none;}



.rp-opt{
  display:flex;align-items:center;gap:var(--e-2);width:100%;padding:10px 11px;
  border-radius: 9px;text-align:left;cursor:pointer;
  font-size:var(--t-2);font-weight:600;color:#FFFFFF;line-height:1.3;
  transition:background .15s;
}
.rp-opt[aria-selected="true"]{background:color-mix(in srgb, var(--rp-actif) 26%, transparent);}
.rp-opt[aria-selected="true"]::after{content:'✓';margin-left:auto;color:#FFFFFF;font-weight:800;}
.rp-opt-sep{height:1px;margin:5px 8px;background:var(--rp-filet);}
@media (hover:hover) and (pointer:fine){
  .rp-opt:hover{background:var(--rp-verre-fort);}
}
@media (hover:none){ .rp-opt{min-height:46px;} }




.rp-compte{
  display:flex;align-items:baseline;justify-content:space-between;gap:var(--e-4);
  padding-top:2px;
}
.rp-compte b{
  font:800 var(--t-2)/1 Montserrat,sans-serif;letter-spacing:.14em;text-transform:uppercase;
  color:var(--rp-encre);
}
.rp-compte i{
  font-style:normal;font:600 var(--t-2)/1 Montserrat,sans-serif;color:var(--rp-encre-3);
}
.rp-compte em{font-style:normal;color:var(--rp-filet-fort);margin:0 3px;}
.rp-raz{
  padding:7px 14px;border-radius:var(--rp-r-btn);border:1px solid var(--rp-filet);
  font-size:var(--t-2);font-weight:700;letter-spacing:.08em;text-transform:uppercase;
  cursor:pointer;color:var(--rp-encre-2);transition:border-color .2s,color .2s;
}
.rp-raz[hidden]{display:none;}
 













.rp-partage{
  display:inline-flex;align-items:center;justify-content:center;gap:var(--e-2);
  justify-self:end;align-self:stretch;width:max-content;max-width:100%;
  padding:0 var(--e-4);min-height:38px;
  border-radius:var(--rp-r-btn);
  background:linear-gradient(180deg,rgba(10,18,44,.72),rgba(10,18,44,.88));
  -webkit-backdrop-filter:blur(18px) saturate(1.2);
          backdrop-filter:blur(18px) saturate(1.2);
  border:1px solid rgba(255,255,255,.16);
  box-shadow:var(--o-arete);
  font:700 var(--t-2)/1 Montserrat,sans-serif;
  letter-spacing:.08em;text-transform:uppercase;
  color:var(--rp-encre-2);cursor:pointer;white-space:nowrap;
  transition:border-color .2s,color .2s;
}
.rp-partage .rp-ic{width:15px;height:15px;flex:none;}



.rp-partage.est-dit{border-color:var(--rp-actif);color:var(--rp-actif);}
@media (hover:hover){
  .rp-partage:hover{border-color:var(--rp-filet-fort);color:var(--rp-encre);}
}
@media (hover:none){ .rp-partage{min-height:44px;} }


.rp-root.sous-420 .rp-partage{width:100%;justify-self:stretch;}

 





.rp-jb{
  --rp-jb-encre:#0B1B33;
  position:relative;isolation:isolate;overflow:hidden;
  width:100%;margin:30px 0 8px;
  background:var(--rp-jaune);color:var(--rp-jb-encre);
   
  min-height:clamp(146px,calc(var(--rp-l,1180) * .136 * 1px),200px);
  





  display:grid;grid-template-columns:minmax(0,1fr);align-items:center;
}
.rp-jb[hidden]{display:none;}


.rp-jb::before{
  content:'';position:absolute;inset:0;z-index:0;pointer-events:none;
  background:var(--rp-jb-encre);opacity:.075;
  -webkit-mask-image:var(--rp-motif);mask-image:var(--rp-motif);
  -webkit-mask-size:cover;mask-size:cover;
  -webkit-mask-position:left center;mask-position:left center;
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
}



.rp-jb-vue{position:absolute;right:0;top:0;bottom:0;width:min(48%,660px);z-index:1;}
.rp-jb-vue img{width:100%;height:100%;object-fit:cover;display:block;}





.rp-jb-biais{
  position:absolute;left:-1px;top:-1px;bottom:-1px;width:clamp(70px,9vw,140px);
  background:var(--rp-jaune);
  clip-path:polygon(0 0,100% 0,0 100%);
}


.rp-jb-vue::after{
  content:'';position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(90deg,color-mix(in srgb, var(--rp-jaune) 55%, transparent),transparent 46%);
}




.rp-jb-in{
  position:relative;z-index:2;
  width:min(100% - 40px,1140px);margin:0 auto;
  display:flex;align-items:center;justify-content:space-between;gap:var(--e-5);
  padding:clamp(18px,2.4vw,30px) 0;
}
.rp-jb-texte{display:grid;gap:6px;min-width:0;}









.rp-jb.est-avec-vue .rp-jb-in{display:block;}
.rp-jb.est-avec-vue .rp-jb-texte{max-width:min(54%,620px);}
.rp-jb.est-avec-vue .rp-jb-part{
  justify-items:start;grid-auto-flow:column;align-items:center;
  justify-content:start;gap:var(--e-3);margin-top:clamp(10px,1.4vw,16px);
  

  width:max-content;max-width:min(54%,620px);
}




.rp-jb-sur{
  font:800 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.2em;
  text-transform:uppercase;color:var(--rp-jb-encre);opacity:.62;
}
.rp-jb-t{
  margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;
  font-size:clamp(23px,calc(var(--rp-l,1180) * .038 * 1px),44px);
  line-height:1;color:var(--rp-jb-encre);text-transform:uppercase;
  overflow-wrap:anywhere;
}








.rp-jb-part{display:grid;justify-items:end;gap:7px;flex:none;max-width:34%;}
.rp-jb-by{
  font:800 var(--t-2)/1 Montserrat,sans-serif;letter-spacing:.13em;
  text-transform:uppercase;color:var(--rp-jb-encre);opacity:.7;
}











.rp-jb-plaque{
  display:grid;place-items:center;
  padding:clamp(12px,1.3vw,18px) clamp(18px,1.9vw,26px);
  border-radius:var(--rp-r-btn);
  background:#fff;box-shadow:0 8px 26px -12px rgba(11,27,51,.6);
}
.rp-jb-plaque img{
  height:clamp(46px,calc(var(--rp-l,1180) * .052 * 1px),74px);
  width:auto;max-width:min(280px,42vw);object-fit:contain;display:block;
}
.rp-jb-nom{
  font-family:Varien,Impact,sans-serif;font-style:italic;
  font-size:clamp(16px,calc(var(--rp-l,1180) * .026 * 1px),28px);
  line-height:1.05;color:var(--rp-jb-encre);text-transform:uppercase;
   
  overflow-wrap:anywhere;text-align:right;
}




.rp-root.sous-720 .rp-jb{margin:22px 0 6px;min-height:0;}


.rp-root.sous-720 .rp-jb-t{font-size:clamp(19px,5.6vw,26px);}
.rp-root.sous-720 .rp-jb-vue{
  position:relative;width:100%;height:clamp(84px,26vw,120px);inset:auto;
}
.rp-root.sous-720 .rp-jb-biais{
  left:-1px;right:-1px;top:auto;bottom:-1px;width:auto;height:clamp(24px,7vw,40px);
  clip-path:polygon(0 100%,100% 100%,0 0);
}
.rp-root.sous-720 .rp-jb-vue::after{
  background:linear-gradient(180deg,transparent 40%,color-mix(in srgb, var(--rp-jaune) 55%, transparent));
}

















.rp-root.sous-720 .rp-jb-in{
  width:min(100% - 32px,1140px);
  display:grid;grid-template-columns:minmax(0,1fr) fit-content(38%);
  align-items:center;gap:var(--e-4);
  padding:16px 0 18px;
}
.rp-root.sous-720 .rp-jb.est-avec-vue .rp-jb-in{
  display:grid;grid-template-columns:minmax(0,1fr) auto;
}
.rp-root.sous-720 .rp-jb-texte{grid-column:1;max-width:none;}
.rp-root.sous-720 .rp-jb.est-avec-vue .rp-jb-texte{max-width:none;}


.rp-root.sous-720 .rp-jb-part,
.rp-root.sous-720 .rp-jb.est-avec-vue .rp-jb-part{
  grid-column:2;grid-row:1;margin-top:0;
  grid-auto-flow:row;justify-items:end;justify-content:end;gap:9px;
  width:auto;max-width:none;
}




.rp-root.sous-720 .rp-jb-part{
  justify-items:start;grid-auto-flow:row;justify-content:start;
  gap:10px;width:auto;max-width:100%;
}
.rp-root.sous-720 .rp-jb.est-avec-vue .rp-jb-part{
  grid-auto-flow:row;justify-content:start;gap:10px;
  margin-top:clamp(14px,3.4vw,20px);
}


.rp-root.sous-720 .rp-jb-plaque{padding:11px 13px;}
.rp-root.sous-720 .rp-jb-plaque img{height:42px;max-width:min(150px,34vw);}
.rp-root.sous-720 .rp-jb-by{font-size:var(--t-1);letter-spacing:.1em;}
.rp-root.sous-720 .rp-jb-nom{font-size:clamp(15px,4.6vw,22px);text-align:right;}
 







.rp-motif{
  position:absolute;
  left:30.56%; top:0%; right:auto;
  width:69.44%; height:43.94%;
  pointer-events:none;z-index:0;
  background:var(--rp-motif-c,#7894F7);
  opacity:.13;
  -webkit-mask-image:var(--rp-motif),linear-gradient(255deg,#000 8%,transparent 76%);
          mask-image:var(--rp-motif),linear-gradient(255deg,#000 8%,transparent 76%);
  -webkit-mask-size:cover,cover;mask-size:cover,cover;
  -webkit-mask-position:right top,center;mask-position:right top,center;
  -webkit-mask-repeat:no-repeat,no-repeat;mask-repeat:no-repeat,no-repeat;
  -webkit-mask-composite:source-in;mask-composite:intersect;
}
.rp-root.est-off .rp-motif{--rp-motif-c:#60B9E9;opacity:.13;}

















.rp-trait-cadre{
  position:absolute;
  left:-46.57%; top:21.06%; right:auto;
  width:166.05%; height:95.18%;
  pointer-events:none;z-index:0;
  -webkit-mask-image:linear-gradient(75deg,#000 6%,transparent 72%);
          mask-image:linear-gradient(75deg,#000 6%,transparent 72%);
}
.rp-trait{
  position:absolute;inset:0;
  background:var(--rp-motif-c,#7894F7);opacity:.34;
  transform:scaleX(-1);
  -webkit-mask-image:var(--rp-motif),var(--rp-motif);
          mask-image:var(--rp-motif),var(--rp-motif);
  -webkit-mask-size:100% 100%,calc(100% - 4px) calc(100% - 4px);
          mask-size:100% 100%,calc(100% - 4px) calc(100% - 4px);
  -webkit-mask-position:center,center;mask-position:center,center;
  -webkit-mask-repeat:no-repeat,no-repeat;mask-repeat:no-repeat,no-repeat;
  -webkit-mask-composite:xor;mask-composite:exclude;
}
.rp-root.est-off .rp-trait{--rp-motif-c:#F8EB59;opacity:.26;}






 









@keyframes rp-arrive{
  from{opacity:0;transform:translateY(12px);}
  to{opacity:1;transform:none;}
}
@keyframes rp-arrive-haut{
  from{opacity:0;transform:translateY(-8px);}
  to{opacity:1;transform:none;}
}
.rp-root.est-arrivee .rp-socle{animation:rp-arrive-haut .5s .04s both cubic-bezier(.2,.7,.3,1);}
.rp-root.est-arrivee .rp-outils{animation:rp-arrive .5s .14s both cubic-bezier(.2,.7,.3,1);}
.rp-root.est-arrivee .rp-moment{animation:rp-arrive .45s .2s both cubic-bezier(.2,.7,.3,1);}
.rp-root.est-arrivee .rp-tuile{
  animation:rp-arrive .52s both cubic-bezier(.2,.7,.3,1);
  animation-delay:calc(220ms + min(var(--i,1),12) * 52ms);
}


.rp-root.est-arrivee .rp-motif,
.rp-root.est-arrivee .rp-trait-cadre{animation:rp-fondu .9s both;}
@keyframes rp-fondu{from{opacity:0;}}


@media (prefers-reduced-motion:reduce){
  .rp-root.est-arrivee .rp-socle,
  .rp-root.est-arrivee .rp-outils,
  .rp-root.est-arrivee .rp-moment,
  .rp-root.est-arrivee .rp-tuile,
  .rp-root.est-arrivee .rp-motif,
  .rp-root.est-arrivee .rp-trait-cadre{animation:none;}
  .rp-vfond img{transition:none;}
  .rp-tuile--vedette:hover .rp-vfond img{transform:none;}
}

 

















.rp-hors{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;}







.rp-liste:empty{display:none;}
















.rp-creux{
  display:flex;align-items:center;
  min-height:var(--e-5);margin:calc(var(--e-2) * -1) 0;padding-left:var(--e-1);
  font:800 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.14em;
  text-transform:uppercase;color:var(--rp-encre-3);opacity:.6;
}
.rp-creux span{padding-left:0;}

.rp-liste{
  position:relative;width:min(100%,1180px);margin:14px auto 0;
  padding:var(--e-5) 20px 44px 20px;display:grid;gap:var(--e-4);
}



.rp-now{
  position:relative;display:flex;align-items:center;gap:var(--e-3);
  margin:3px 0;padding-left:84px;
}
.rp-now::before{
  content:'';position:absolute;left:0;right:0;top:50%;height:1px;
  background:linear-gradient(90deg,var(--rp-actif) 0 62px,color-mix(in srgb, var(--rp-actif) 30%, transparent) 62px,transparent);
}
.rp-now span{
  position:relative;padding:3px 10px;border-radius:var(--rp-r-tag);
  background:#FFFFFF;color:#16355D;
  font-size:var(--t-1);font-weight:800;letter-spacing:.12em;text-transform:uppercase;
}


















.rp-silence{
  

  display:grid;grid-template-columns:var(--rp-col-h) minmax(0,1fr);
  gap:0 var(--e-5);align-items:center;
  border-radius:var(--rp-r-carte);
  border:1px dashed var(--rp-filet-fort);border-left:0;
  box-shadow:inset 2px 0 0 0 var(--rp-filet-fort);
  background:
    repeating-linear-gradient(115deg,
      rgba(255,255,255,.045) 0 6px, transparent 6px 14px);
}


.rp-silence .rp-h{padding:var(--e-3) 0;}
.rp-silence .rp-h .rp-h1,
.rp-silence .rp-h .rp-h2{font-size:var(--t-4);color:var(--rp-encre-2);}
.rp-silence .rp-h .rp-hs{color:var(--rp-encre-3);}
.rp-silence-tete{
  display:grid;grid-template-columns:auto auto minmax(0,1fr) auto;
  align-items:center;gap:var(--e-3);width:100%;
  padding:var(--e-3) var(--e-4) var(--e-3) 0;
  border:0;background:none;color:var(--rp-encre);cursor:pointer;
  font:800 var(--t-2)/1.3 Montserrat,sans-serif;letter-spacing:.14em;
  text-transform:uppercase;text-align:left;
}
.rp-silence-tete:disabled{cursor:default;}
.rp-silence-tete > .rp-ic{width:16px;height:16px;color:var(--rp-encre-2);}
.rp-silence-chev{width:14px;height:14px;color:var(--rp-encre-3);transition:transform .2s;}
.rp-silence.est-ouvert .rp-silence-chev{transform:rotate(180deg);}



.rp-silence-txt{
  min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  font:400 var(--t-3)/1.5 Montserrat,sans-serif;letter-spacing:0;
  text-transform:none;color:var(--rp-encre-2);
}





.rp-silence.est-ouvert .rp-silence-txt{white-space:normal;overflow:visible;}



@media (hover:hover) and (pointer:fine){
  .rp-silence:hover .rp-silence-txt{white-space:normal;overflow:visible;}
  .rp-silence:hover .rp-silence-chev{transform:rotate(180deg);}
}
@media (prefers-reduced-motion:reduce){
  .rp-silence-chev{transition:none;}
}




.rp-root.sous-720 .rp-silence{
  grid-template-columns:78px minmax(0,1fr);
  gap:0 var(--e-3);align-items:start;
  padding-left:var(--rp-marge-mob);
}
.rp-root.sous-720 .rp-silence-tete{padding-right:var(--rp-marge-mob);}





.rp-root.sous-720 .rp-silence-tete{
  grid-template-columns:auto minmax(0,1fr) auto;
  row-gap:var(--e-2);
}






.rp-root.sous-720 .rp-silence-chev{grid-row:1;grid-column:3;}
.rp-root.sous-720 .rp-silence-txt{
  grid-row:2;grid-column:1 / -1;white-space:normal;
  display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
  font-size:var(--t-2);
}
.rp-root.sous-720 .rp-silence.est-ouvert .rp-silence-txt{-webkit-line-clamp:unset;}





.rp-root.sous-420 .rp-silence{padding-left:18px;}



















.rp-tuile{
  --c:250 60% 72%;
  position:relative;border-radius:var(--rp-r-carte);
  border:1px solid rgba(255,255,255,.11);border-left:0;
  background:linear-gradient(180deg,rgba(255,255,255,.095),rgba(255,255,255,.062));
  



  box-shadow:inset 2px 0 0 0 color-mix(in srgb, var(--c) 52%, transparent),
             var(--o-arete),
             var(--o-pose);
  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
  








  transition:border-color .2s,background .2s,transform .2s,box-shadow .2s;
}

















.rp-tete{
  



  display:grid;grid-template-columns:var(--rp-col-h) minmax(0,1fr) auto;
  justify-content:stretch;align-items:center;gap:var(--e-5);
  


  


  position:relative;width:100%;padding:23px 46px 23px 0;text-align:left;cursor:pointer;
}
























.rp-h{
  display:grid;justify-items:center;align-content:center;gap:0;
  font-variant-numeric:tabular-nums;text-align:center;
}
.rp-h .rp-h1,.rp-h .rp-h2{
  font-family:Varien,Impact,sans-serif;font-style:italic;
  font-size:var(--t-5);line-height:1;letter-spacing:.01em;color:var(--rp-encre);
  



  width:var(--rp-bloc-h,3.6em);text-align:center;white-space:nowrap;
}



















.rp-h .rp-h2{color:var(--rp-encre-2);}



.rp-h .rp-hs{
  font-size:var(--t-3);line-height:1;color:var(--rp-filet-fort);
  margin:7px 0;
}
.rp-h em{display:none;}

















.rp-tete > .rp-h{
  border-right:1px solid var(--rp-filet-fort);height:100%;
  padding:0 var(--rp-gout-h);
  display:grid;align-content:center;
}
.rp-titre-t{
  min-width:0;font-size:var(--t-4);font-weight:700;line-height:1.35;
  overflow-wrap:anywhere;
}





.rp-meta{
  display:grid;grid-template-columns:minmax(0,1fr) 132px;
  align-items:center;gap:var(--e-4);flex:none;width:min(100%,420px);
}



.rp-meta-cat{
  display:inline-flex;align-items:center;gap:var(--e-2);min-width:0;
  font:700 var(--t-2) Montserrat,sans-serif;letter-spacing:.03em;color:var(--c);
}
.rp-meta-cat span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rp-meta-cat .rp-ic{width:15px;height:15px;flex:none;color:var(--c);}







.rp-zone{
  position:absolute;inset:0;z-index:0;border:0;background:none;cursor:pointer;
}
















.rp-tete > *:not(.rp-zone):not(.rp-ouvre):not(.rp-vlieu--carte):not(.rp-vfond):not(.rp-lum){
  position:relative;z-index:1;pointer-events:none;}


.rp-tete > .rp-vlieu--carte{position:relative;z-index:1;}
.rp-tete > .rp-ouvre{z-index:1;}






.rp-ouvre{
  position:absolute;right:10px;top:50%;transform:translateY(-50%);
  width:28px;height:28px;display:grid;place-items:center;
  border-radius:var(--rp-r-tag);color:var(--rp-encre-3);
  transition:transform .25s,color .2s,background .2s;pointer-events:none;
}
.rp-ouvre .rp-ic{width:14px;height:14px;}
.rp-tuile.est-ouvert .rp-ouvre{transform:translateY(-50%) rotate(180deg);
  color:var(--rp-encre);background:var(--rp-verre-fort);}
@media (hover:hover) and (pointer:fine){
  .rp-tuile:hover .rp-ouvre{color:var(--rp-encre);}
   
  .rp-tuile:not(.rp-tuile--vedette):hover{
    background:linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,.085));
    border-color:rgba(255,255,255,.2);
    box-shadow:inset 4px 0 0 0 var(--c),inset 0 1px 0 0 rgba(255,255,255,.1),
               var(--o-leve);
  }
}



.rp-meta-i{display:inline-flex;align-items:center;gap:var(--e-2);
  padding:5px 10px;border-radius:8px 2px 8px 2px;
  background:rgba(4,12,26,.55);border:1px solid var(--rp-filet);
  font:700 var(--t-2) Montserrat,sans-serif;letter-spacing:.04em;
  color:var(--rp-encre-2);white-space:nowrap;}
.rp-meta-i .rp-ic{width:14px;height:14px;flex:none;color:var(--rp-encre-3);}



















.rp-meta-i--carte{
  pointer-events:auto;cursor:pointer;
  border-color:rgba(255,255,255,.30);color:var(--rp-encre);
  transition:border-color .2s,background .2s,color .2s;
}
.rp-meta-i--carte .rp-ic{color:var(--rp-actif);}
.rp-meta-i--carte .rp-ic--carte{width:12px;height:12px;margin-left:1px;opacity:1;}
@media (hover:hover) and (pointer:fine){
  .rp-meta-i--carte:hover{background:rgba(255,255,255,.10);color:var(--rp-encre);
    border-color:var(--rp-encre-3);}
}
 













.rp-root.est-v2 .rp-tete{padding-right:62px;}
.rp-root.est-v2 .rp-meta--v2{
  display:flex;align-items:center;justify-content:flex-end;
  gap:var(--e-4);flex:none;width:auto;max-width:340px;
}
.rp-root.est-v2 .rp-dest{
  display:grid;gap:5px;min-width:0;text-align:right;justify-items:end;
}




.rp-root.est-v2 .rp-dest-cat{
  display:inline-flex;align-items:center;gap:6px;min-width:0;
  font:800 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.13em;
  





  text-transform:uppercase;color:var(--rp-encre-3);
}
.rp-root.est-v2 .rp-dest-cat span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rp-root.est-v2 .rp-dest-cat .rp-ic{width:13px;height:13px;flex:none;color:var(--c);}




.rp-root.est-v2 .rp-dest-lieu{
  font:600 var(--t-3)/1.25 Montserrat,sans-serif;color:var(--rp-encre);
  max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}




























.rp-root.est-v2 .rp-dest-b{
  pointer-events:auto;cursor:pointer;flex:none;
  display:grid;place-items:center;width:44px;height:44px;padding:0;
  border:0;border-radius:0;
  background:var(--c);
  color:#16355D;
  clip-path:polygon(0 0,100% 0,100% calc(100% - 13px),calc(100% - 13px) 100%,0 100%);
  filter:drop-shadow(3px 3px 0 color-mix(in srgb, var(--c) 30%, #05091A));
  transition:filter .16s ease,transform .16s ease;
}
.rp-root.est-v2 .rp-dest-b .rp-ic{width:20px;height:20px;}
@media (hover:hover) and (pointer:fine){
  .rp-root.est-v2 .rp-dest-b:hover{
    transform:translate(2px,2px);
    filter:drop-shadow(1px 1px 0 color-mix(in srgb, var(--c) 30%, #05091A));
  }
}
.rp-root.est-v2 .rp-dest-b:active{transform:translate(3px,3px);filter:none;}







.rp-root.est-v2 .rp-tuile--vedette .rp-dest-b{
  background:#fff;color:#16355D;
  filter:drop-shadow(3px 3px 0 rgba(5,9,26,.6));
}
@media (hover:hover) and (pointer:fine){
  .rp-root.est-v2 .rp-tuile--vedette .rp-dest-b:hover{
    filter:drop-shadow(1px 1px 0 rgba(5,9,26,.6));
  }
}


.rp-root.est-v2 .rp-dest-b:focus-visible{
  outline:none;
  filter:drop-shadow(0 0 0 #fff) drop-shadow(3px 3px 0 #fff);
}






.rp-root.est-v2 .rp-dest-p{width:44px;height:44px;flex:none;}








@media (hover:none){
  .rp-meta-i--carte,.rp-champ-btn,.rp-fl,.rp-jour,.rp-bascule button,
  .rp-raz,.rp-cta,.rp-mod-ici button{min-height:44px;}
  .rp-fl{width:44px;}
}
.rp-sep{display:none;}



.rp-badges{display:flex;gap:var(--e-2);flex-wrap:wrap;}






.rp-badge{
  position:relative;display:inline-flex;align-items:center;
  padding:3px 9px 3px 11px;border-radius:var(--rp-r-tag);
  font-size:var(--t-1);font-weight:800;letter-spacing:.11em;text-transform:uppercase;
  white-space:nowrap;color:var(--b,var(--rp-encre-2));
  border:1px solid color-mix(in srgb, var(--b,#fff) 34%, transparent);
  background:color-mix(in srgb, var(--b,#fff) 9%, transparent);
}
.rp-badge::before{
  content:'';position:absolute;left:0;top:2px;bottom:2px;width:2px;
  background:var(--b,#fff);border-radius:0 2px 2px 0;
}


.rp-badge--complet{--b:#F19F39;}
.rp-badge--annule{--b:#F19F39;text-decoration:line-through;text-decoration-thickness:1px;}
.rp-badge--gratuit{--b:#85D8D5;}
.rp-badge--resa{--b:#FCF150;}
.rp-badge--live{--b:#5DBFC0;}
.rp-badge--live::after{
  content:'';width:5px;height:5px;margin-left:7px;border-radius:50%;
  background:#5DBFC0;box-shadow:0 0 0 0 rgba(93,191,192,.7);
  animation:rp-pouls 2s ease-out infinite;
}
@keyframes rp-pouls{
  70%{box-shadow:0 0 0 7px rgba(93,191,192,0);}
  100%{box-shadow:0 0 0 0 rgba(93,191,192,0);}
}
.rp-badge--off{--b:#56BCF6;}

.rp-tuile.est-passe{opacity:.45;}






















.rp-tuile--lumiere{
  border-color:color-mix(in srgb, var(--c) 34%, transparent);
  background:#0B1330;
  box-shadow:inset 2px 0 0 0 color-mix(in srgb, var(--c) 78%, transparent),
             0 0 0 1px color-mix(in srgb, var(--c) 22%, transparent),
             0 8px 26px -12px color-mix(in srgb, var(--c) 55%, transparent);
}
.rp-lum{
  position:absolute;inset:0;z-index:0;overflow:hidden;
  border-radius:var(--rp-r-carte);pointer-events:none;
  


  background:
    radial-gradient(120% 90% at 100% 100%, color-mix(in srgb, var(--c) 15%, transparent), transparent 60%),
    linear-gradient(180deg, transparent 40%, rgba(4,10,30,.55));
}





.rp-lum::before,.rp-lum::after{
  content:"";position:absolute;top:-60%;bottom:-60%;left:-30%;width:30%;
  background:linear-gradient(90deg, transparent, color-mix(in srgb, var(--c) 45%, #fff) 50%, transparent);
  opacity:.15;transform:skewX(-22deg) translateX(0);
  animation:rp-faisceau 14s cubic-bezier(.45,.05,.55,.95) infinite alternate;
  will-change:transform;
}
.rp-lum::after{
  opacity:.09;animation-duration:21s;animation-delay:-8s;
  background:linear-gradient(90deg, transparent, #fff 50%, transparent);
}
@keyframes rp-faisceau{
  from{transform:skewX(-22deg) translateX(0);}
  to{transform:skewX(-22deg) translateX(520%);}
}
 
.rp-lum-bande{
  display:flex;align-items:center;gap:var(--e-4);flex-wrap:wrap;margin-top:7px;
}
.rp-tuile--lumiere .rp-signe--rayons{height:26px;color:var(--c);}
.rp-lum-chip{
  display:inline-flex;align-items:center;gap:5px;
  padding:4px 9px 4px 7px;border-radius:var(--rp-r-tag);
  border:1px solid color-mix(in srgb, var(--c) 40%, transparent);
  background:color-mix(in srgb, var(--c) 12%, transparent);
  font:700 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.08em;text-transform:uppercase;
  color:color-mix(in srgb, var(--c) 78%, #fff);white-space:nowrap;
}
.rp-lum-chip .rp-ic{width:12px;height:12px;flex:none;}


.rp-tuile--lumiere.est-passe .rp-lum::before,
.rp-tuile--lumiere.est-passe .rp-lum::after{animation-play-state:paused;}
@media (prefers-reduced-motion:reduce){
  .rp-lum::before,.rp-lum::after{animation:none;transform:skewX(-22deg) translateX(260%);}
}
.rp-root.sous-720 .rp-tuile--lumiere .rp-signe--rayons{height:20px;}
.rp-root.sous-720 .rp-lum-bande{gap:var(--e-3);margin-top:6px;}
.rp-tuile.est-annule .rp-titre-t{text-decoration:line-through;text-decoration-thickness:1px;}










.rp-tuile.est-live{
  border-color:rgba(255,255,255,.55);
  background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.09));
}
.rp-tuile.est-live::after{
  content:'';position:absolute;inset:-1px;border-radius:inherit;pointer-events:none;
  border:1px solid rgba(255,255,255,.85);
  animation:rp-live 2.4s ease-in-out infinite;
}
@keyframes rp-live{0%,100%{opacity:.25;}50%{opacity:.9;}}


.rp-tuile.est-live .rp-badge--live::after{animation-duration:2.4s;}

 


















.rp-tuile--vedette{
  border-color:var(--c);
  background:#0B1330;
  box-shadow:0 0 0 1px color-mix(in srgb, var(--c) 46%, transparent),
             0 10px 30px -8px color-mix(in srgb, var(--c) 62%, transparent),
             0 0 62px -14px color-mix(in srgb, var(--c) 88%, transparent);
}







.rp-tuile--vedette .rp-tete{
  grid-template-columns:var(--rp-col-h) minmax(0,1fr) auto auto auto;gap:0 24px;
  












  min-height:172px;
  







  padding:var(--e-4) 62px var(--e-4) 0;
  




  

}
.rp-tuile--vedette .rp-vfilet{grid-column:4;grid-row:1;}







.rp-vfilet{
  position:relative;z-index:1;width:1px;height:64px;align-self:center;
  background:linear-gradient(180deg,transparent,rgba(255,255,255,.62),transparent);
}





.rp-tuile--vedette .rp-h{grid-column:1;grid-row:1;}
.rp-tuile--vedette .rp-vscene{grid-column:2;grid-row:1;}
.rp-tuile--vedette .rp-vlieu{grid-column:3;grid-row:1;align-self:center;justify-self:end;}




.rp-root.est-v2 .rp-tuile--vedette .rp-vlieu-bloc{
  grid-column:3;grid-row:1;align-self:center;justify-self:end;
  display:flex;align-items:center;gap:var(--e-3);
}
.rp-root.est-v2 .rp-tuile--vedette .rp-vlieu{justify-self:auto;}
.rp-tuile--vedette  
.rp-vpast > .rp-signe{display:none;}
.rp-vpast{grid-column:5;grid-row:1;}






.rp-tuile--vedette .rp-h{height:100%;align-content:center;}


.rp-tuile--vedette .rp-h .rp-h1,.rp-tuile--vedette .rp-h .rp-h2{
  color:#fff;font-size:var(--t-5);text-shadow:0 2px 14px rgba(0,0,0,.7);
}
.rp-tuile--vedette .rp-h .rp-hs{color:rgba(255,255,255,.55);}
.rp-tuile--vedette .rp-tete > .rp-h{border-right-color:rgba(255,255,255,.22);}







.rp-vfond{
  position:absolute;inset:0;z-index:0;overflow:hidden;
  border-radius:var(--rp-r-carte);pointer-events:none;
}
 
.rp-vfond img{width:100%;height:100%;object-fit:cover;display:block;opacity:.92;}





.rp-vfond img{transition:transform 1.1s cubic-bezier(.22,.61,.24,1);}
@media (hover:hover) and (pointer:fine){
  .rp-tuile--vedette:hover .rp-vfond img{
    transform:scale(1.055);
    transition-duration:.9s;
  }
}










.rp-vfond::after{
  content:'';position:absolute;inset:0;
  background:
    linear-gradient(90deg,rgba(6,11,32,.94) 0%,rgba(6,11,32,.78) 24%,rgba(6,11,32,.3) 48%,rgba(6,11,32,.08) 66%,rgba(6,11,32,.42) 100%),
    linear-gradient(90deg, color-mix(in srgb, var(--c) 52%, transparent) 0%, color-mix(in srgb, var(--c) 10%, transparent) 58%, transparent 78%);
}











.rp-vscene{
  position:relative;z-index:1;align-self:center;min-width:0;
  display:grid;grid-template-columns:auto;justify-content:start;
  align-items:start;row-gap:0;
  padding:0;align-content:center;justify-items:start;
}
.rp-vtitre{grid-column:1;grid-row:1;}
.rp-vscene .rp-signe{grid-column:1;grid-row:2;margin-top:8px;}







.rp-vbande{
  grid-column:1;grid-row:2;margin-top:8px;min-width:0;
  display:flex;align-items:center;gap:var(--e-5);flex-wrap:wrap;
}
.rp-vbande .rp-signe{grid-column:auto;grid-row:auto;margin-top:0;}


.rp-vecus{display:flex;align-items:flex-start;gap:var(--e-2);flex-wrap:wrap;}
 







.rp-fanion{
  height:70px;width:auto;display:block;flex:none;
  filter:drop-shadow(0 7px 16px rgba(4,10,26,.58));
}


.rp-vecus .rp-fanion:nth-child(even){margin-top:9px;}
.rp-root.sous-720 .rp-fanion{height:56px;}
.rp-root.sous-720 .rp-vecus .rp-fanion:nth-child(even){margin-top:7px;}
.rp-vligne{grid-column:1;grid-row:3;}
 
.rp-vligne{
  display:flex;align-items:center;gap:var(--e-4);flex-wrap:wrap;margin-top:14px;
}
.rp-vbadges{margin-top:0;}


.rp-vnom{
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
  overflow:hidden;
}


.rp-vtitre{
  font-family:Varien,Impact,sans-serif;font-style:italic;color:#fff;
  font-size:clamp(26px,calc(var(--rp-l,1180) * .046 * 1px),52px);
  line-height:.94;text-transform:uppercase;letter-spacing:.005em;
  text-shadow:0 3px 24px rgba(0,0,0,.75);overflow-wrap:anywhere;
}





.rp-root.est-v2 .rp-vtitre{
  font-size:clamp(19px,calc(var(--rp-l,1180) * .030 * 1px),34px);
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
  overflow:hidden;
}
.rp-vnom{
  font:700 var(--t-3)/1.35 Montserrat,sans-serif;color:rgba(255,255,255,.9);
  text-shadow:0 2px 12px rgba(0,0,0,.8);overflow-wrap:anywhere;
}
 





.rp-signe{
  position:relative;z-index:1;display:block;
  width:clamp(150px,calc(var(--rp-l,1180) * .17 * 1px),210px);height:34px;
  margin-top:12px;color:var(--c);pointer-events:none;
}






.rp-signe{
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 76%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 12%,#000 76%,transparent);
}

 


.rp-signe-axe{
  position:absolute;left:0;right:0;top:50%;height:1px;
  background:linear-gradient(90deg,transparent,currentColor 22%,currentColor 78%,transparent);
  opacity:.34;
}
.rp-signe-barres{
  position:absolute;inset:0;display:flex;align-items:center;
  justify-content:space-between;gap:0;
}



.rp-signe--eq i,.rp-signe--pts i{
  display:block;flex:none;width:2.5px;border-radius:2px;
  background:linear-gradient(180deg,
    color-mix(in srgb,currentColor 55%,transparent),currentColor 50%,
    color-mix(in srgb,currentColor 55%,transparent));
  transform-origin:center;
  animation:rp-eq 1s ease-in-out infinite alternate;
  box-shadow:0 0 14px -3px currentColor,0 1px 5px rgba(4,8,24,.85);
}
.rp-signe--pts i{width:3px;border-radius:3px;}
@keyframes rp-eq{from{transform:scaleY(.3);}to{transform:scaleY(1);}}

 


.rp-sil-eau{
  position:absolute;left:0;right:0;top:72%;height:1px;
  background:linear-gradient(90deg,transparent,currentColor 18%,currentColor 82%,transparent);
  opacity:.4;
}



.rp-sil-trace{position:absolute;left:0;right:0;top:72%;}
.rp-sil-trace i{
  position:absolute;height:2px;border-radius:2px;background:currentColor;
  transform-origin:right center;opacity:0;
  animation:rp-sil-trace 3.6s ease-out infinite;
  box-shadow:0 0 10px -2px currentColor;
}
.rp-sil-trace i:nth-child(1){left:6%;width:26%;top:-1px;animation-delay:.9s;}
.rp-sil-trace i:nth-child(2){left:14%;width:18%;top:4px;height:1.5px;animation-delay:1.15s;}
.rp-sil-trace i:nth-child(3){left:22%;width:11%;top:8px;height:1px;animation-delay:1.4s;}
@keyframes rp-sil-trace{
  0%{opacity:0;transform:scaleX(.2);}
  10%{opacity:.9;transform:scaleX(1);}
  62%{opacity:.5;transform:scaleX(1);}
  86%{opacity:0;transform:scaleX(1);}
  100%{opacity:0;transform:scaleX(1);}
}


.rp-sil-coque{
  position:absolute;left:0;top:72%;width:22px;height:20px;
  margin-top:-17px;
  animation:rp-sil-avance 3.6s ease-in-out infinite;
}
.rp-sil-coque svg{
  width:100%;height:100%;display:block;
  filter:drop-shadow(0 0 9px currentColor) drop-shadow(0 2px 6px rgba(4,8,24,.9));
  animation:rp-sil-tangue 1.5s ease-in-out infinite alternate;
}






@keyframes rp-sil-avance{
  0%{transform:translateX(-12%);opacity:0;}
  5%{opacity:1;}
  93%{opacity:1;}
  100%{transform:translateX(740%);opacity:0;}
}
@keyframes rp-sil-tangue{
  from{transform:rotate(-5deg) translateY(0);}
  to{transform:rotate(4deg) translateY(-1.5px);}
}

 


.rp-signe--rayons{display:flex;align-items:center;gap:var(--e-1);height:30px;}
.rp-signe--rayons i{
  display:block;flex:none;width:2.5px;height:100%;border-radius:2px;
  background:linear-gradient(180deg,transparent,currentColor 45%,transparent);
  opacity:.28;animation:rp-rayon 1.6s ease-in-out infinite;
  box-shadow:0 0 12px -2px currentColor;
}
@keyframes rp-rayon{0%,100%{opacity:.22;}45%{opacity:1;}}

 
.rp-signe--cer{height:34px;}



.rp-cer-g,.rp-cer-d{
  position:absolute;top:50%;height:10px;width:calc(50% - 2px);margin-top:-5px;
  background:linear-gradient(180deg,
    color-mix(in srgb,currentColor 92%,transparent),
    color-mix(in srgb,currentColor 58%,transparent));
  box-shadow:inset 0 1px 0 0 color-mix(in srgb,currentColor 60%,transparent);
}
.rp-cer-g{
  left:0;transform-origin:left center;
  clip-path:polygon(0 0,100% 0,86% 50%,100% 100%,0 100%);
  animation:rp-cer-g 3.8s cubic-bezier(.35,0,.2,1) infinite;
}
.rp-cer-d{
  right:0;transform-origin:right center;
  clip-path:polygon(14% 50%,0 0,100% 0,100% 100%,0 100%);
  animation:rp-cer-d 3.8s cubic-bezier(.35,0,.2,1) infinite;
}


.rp-cer-noeud{
  position:absolute;left:50%;top:50%;width:11px;height:11px;
  margin:-5.5px 0 0 -5.5px;border-radius:3px;
  background:currentColor;z-index:1;
  animation:rp-cer-noeud 3.8s cubic-bezier(.35,0,.2,1) infinite;
}
.rp-cer-noeud::before,.rp-cer-noeud::after{
  content:'';position:absolute;top:50%;width:15px;height:12px;margin-top:-6px;
  background:color-mix(in srgb,currentColor 78%,transparent);
}
.rp-cer-noeud::before{right:9px;border-radius:60% 22% 22% 60%;transform:rotate(-9deg);}
.rp-cer-noeud::after{left:9px;border-radius:22% 60% 60% 22%;transform:rotate(9deg);}



@keyframes rp-cer-g{
  0%,24%{transform:translateX(0) rotate(0deg);}
  52%,70%{transform:translateX(-9px) rotate(6.5deg);}
  92%,100%{transform:translateX(0) rotate(0deg);}
}
@keyframes rp-cer-d{
  0%,24%{transform:translateX(0) rotate(0deg);}
  52%,70%{transform:translateX(9px) rotate(-6.5deg);}
  92%,100%{transform:translateX(0) rotate(0deg);}
}
@keyframes rp-cer-noeud{
  0%,24%{transform:scale(1);opacity:1;}
  46%,70%{transform:scale(.24);opacity:0;}
  90%,100%{transform:scale(1);opacity:1;}
}



 
.rp-signe--trib{height:34px;}
 
.rp-trib-sol{
  position:absolute;left:0;right:0;bottom:8px;height:1px;
  background:linear-gradient(90deg,transparent,currentColor 14%,currentColor 88%,transparent);
  opacity:.3;
}


.rp-trib-pupitre{
  position:absolute;left:8px;bottom:8px;width:3px;height:17px;
  background:currentColor;opacity:.9;
}
.rp-trib-pupitre::after{
  content:'';position:absolute;left:-3px;top:-4px;width:13px;height:3px;
  background:currentColor;transform:rotate(-14deg);transform-origin:left center;
}



.rp-trib-voix{position:absolute;left:24px;bottom:11px;width:34px;height:26px;}
.rp-trib-voix i{
  position:absolute;left:0;top:50%;width:9px;height:9px;margin-top:-4.5px;
  border:1.5px solid currentColor;border-radius:50%;
  clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%);
  opacity:0;animation:rp-trib-voix 2.6s ease-out infinite;
}
.rp-trib-voix i:nth-child(2){width:19px;height:19px;margin-top:-9.5px;animation-delay:.26s;}
.rp-trib-voix i:nth-child(3){width:27px;height:27px;margin-top:-13.5px;animation-delay:.52s;}


.rp-trib-salle{
  position:absolute;right:4px;bottom:9px;
  display:flex;align-items:flex-end;gap:6px;
}
.rp-trib-salle i{
  display:block;width:3.5px;border-radius:2px 2px 0 0;
  background:currentColor;opacity:.26;
  animation:rp-trib-salle 2.6s ease-in-out infinite;
  box-shadow:0 0 10px -3px currentColor;
}
@keyframes rp-trib-voix{
  0%{opacity:0;transform:scale(.5);}
  22%{opacity:.85;}
  70%,100%{opacity:0;transform:scale(1);}
}
@keyframes rp-trib-salle{
  0%,100%{opacity:.24;}
  40%{opacity:.92;}
}

@media (prefers-reduced-motion:reduce){
  .rp-cer-g,.rp-cer-d,.rp-cer-noeud{animation:none;}
  .rp-trib-voix i{animation:none;opacity:.5;}
  .rp-trib-salle i{animation:none;opacity:.55;}
}

 
.rp-signe--cim{height:34px;}


.rp-cim-rail{
  position:absolute;left:0;right:0;top:4px;height:1px;
  background:currentColor;opacity:.34;
}
.rp-cim-cadres{
  position:absolute;inset:4px 0 0;display:flex;align-items:flex-start;
  justify-content:space-around;
}


.rp-cim-cadres i{
  position:relative;display:block;flex:none;margin-top:5px;
  border:1.5px solid currentColor;border-radius:1px;
  background:color-mix(in srgb,currentColor 16%,transparent);
  opacity:.3;animation:rp-cim 2.4s ease-in-out infinite;
  box-shadow:0 0 14px -4px currentColor;
}
.rp-cim-cadres i::before{
  content:'';position:absolute;left:50%;top:-6px;width:1px;height:5px;
  background:currentColor;opacity:.7;
}


@keyframes rp-cim{
  0%,100%{opacity:.26;}
  12%{opacity:1;}
  40%{opacity:.4;}
}

 
.rp-signe--gui{height:34px;}
.rp-gui-cable{position:absolute;left:0;top:0;width:100%;height:34px;}






.rp-signe--gui i{
  position:absolute;width:6px;height:6px;margin:-3px 0 0 -3px;
  border-radius:50%;background:currentColor;opacity:.24;
  animation:rp-gui 1.9s ease-in-out infinite;
  box-shadow:0 0 13px -1px currentColor;
}
 
.rp-signe--gui i::after{
  content:'';position:absolute;left:50%;top:50%;width:15px;height:15px;
  margin:-7.5px 0 0 -7.5px;border-radius:50%;
  background:radial-gradient(circle,currentColor 0%,transparent 68%);
  opacity:.5;
}



@keyframes rp-gui{
  0%,100%{opacity:.2;}
  10%{opacity:1;}
  45%{opacity:.34;}
}

@media (prefers-reduced-motion:reduce){
  .rp-cim-cadres i{animation:none;opacity:.62;}
  .rp-gui-lampes i{animation:none;opacity:.62;}
}





.rp-vpast{
  position:relative;z-index:1;display:grid;place-items:center;gap:var(--e-2);
  padding:0 4px;text-align:center;
}


.rp-vpast .rp-rond{
  width:52px;height:52px;border-radius:50%;display:grid;place-items:center;
  background:rgba(9,14,38,.42);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  border:1px solid var(--c);color:#fff;
  

  box-shadow:0 0 0 4px color-mix(in srgb, var(--c) 12%, transparent);
}
.rp-vpast .rp-rond .rp-ic{width:22px;height:22px;}


.rp-vbadges{margin-top:8px;}
.rp-vbadges .rp-badge{
  background:rgba(6,11,32,.62);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);
  border-color:color-mix(in srgb, var(--b,#fff) 52%, transparent);
}















 
.rp-tuile--vedette .rp-vlieu .rp-ic{color:#fff;opacity:.9;}
.rp-vpast small{
  font:800 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.09em;
  text-transform:uppercase;color:var(--c);text-shadow:0 2px 10px rgba(0,0,0,.8);
}

 



.rp-plus{display:grid;grid-template-rows:0fr;transition:grid-template-rows .32s ease;}





.rp-ecusson{
  display:inline-flex;align-items:center;
  padding:3px 9px;border-radius:3px;
  background:var(--e);color:#16355D;
  font:800 var(--t-1)/1 Montserrat,sans-serif;
  letter-spacing:.07em;text-transform:uppercase;white-space:nowrap;
}





.rp-accroche{
  margin:5px 0 0;font:500 var(--t-2)/1.42 Montserrat,sans-serif;
  color:var(--rp-encre-3);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  max-width:100%;
}


.rp-tuile.est-ouvert .rp-accroche{display:none;}



.rp-tuile--vedette .rp-accroche{display:none;}
.rp-root.sous-720 .rp-accroche{font-size:var(--t-1);margin-top:4px;}

.rp-tuile.est-ouvert .rp-plus{grid-template-rows:1fr;}



.rp-plus > div{overflow:hidden;}




.rp-plus-in{
  padding:15px 0 0;display:grid;gap:var(--e-3);
  border-top:1px solid var(--rp-filet);
}



.rp-tuile--vedette .rp-plus-in{margin:0 var(--e-6) var(--e-5) 120px;padding-top:var(--e-4);}
.rp-desc{font-size:var(--t-3);color:var(--rp-encre-2);}
.rp-actions{display:flex;gap:var(--e-2);flex-wrap:wrap;}
.rp-cta{
  display:inline-flex;align-items:center;gap:var(--e-2);padding:10px 18px;border-radius:var(--rp-r-btn);
  font-size:var(--t-2);font-weight:700;letter-spacing:.04em;cursor:pointer;text-decoration:none;
  border:1px solid var(--rp-filet-fort);color:var(--rp-encre);
  transition:background .2s,border-color .2s;
}
.rp-cta--fort{background:#FFFFFF;border-color:transparent;color:#16355D;}
.rp-cta .rp-ic{width:15px;height:15px;}
.rp-photo{
  max-height:280px;object-fit:cover;border-radius:var(--rp-r-carte);display:block;
  border:1px solid var(--rp-filet);
}

 










.rp-modale{
  position:fixed;inset:0;z-index:2147483100;display:grid;place-items:center;
  padding:16px;background:rgba(6,14,28,.78);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  animation:rp-fondu .22s ease-out;
}
.rp-modale[hidden]{display:none;}
@keyframes rp-fondu{from{opacity:0;}to{opacity:1;}}
.rp-mod{
  



  position:relative;width:min(100%,860px);height:min(88vh,720px);
  display:grid;grid-template-rows:auto minmax(0,1fr) auto auto;
  border-radius:var(--rp-r-bloc);overflow:hidden;
  border:1px solid var(--rp-filet-fort);background:#0C1A31;
  box-shadow:0 40px 90px -30px rgba(0,0,0,.85);
}
 


.rp-mod-rond{
  flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;
  background:color-mix(in srgb, var(--c) 16%, transparent);
  border:1px solid color-mix(in srgb, var(--c) 62%, transparent);color:var(--c);
}
.rp-mod-rond .rp-ic{width:20px;height:20px;}
.rp-mod-txt{min-width:0;}
.rp-mod-cr{
  display:inline-flex;align-items:center;padding:3px 9px;border-radius:var(--rp-r-tag);
  border:1px solid color-mix(in srgb, var(--c) 46%, transparent);
  color:var(--c);font-weight:800;font-size:var(--t-2);letter-spacing:.04em;
  font-variant-numeric:tabular-nums;
}
.rp-mod-ti{color:var(--rp-encre-2);}





.rp-mod-ici{
  border-top:1px solid var(--rp-filet);padding:12px 20px 0;
}
.rp-mod-ici-t{
  display:flex;align-items:center;gap:var(--e-2);margin-bottom:8px;
  font:800 var(--t-1) Montserrat,sans-serif;letter-spacing:.12em;text-transform:uppercase;
  color:var(--rp-encre-3);
}
.rp-mod-ici-t .rp-ic{width:13px;height:13px;color:var(--c);}
.rp-mod-ici ul{display:grid;gap:var(--e-1);}
.rp-mod-ici button{
  width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;gap:var(--e-3);text-align:left;cursor:pointer;
  padding:9px 12px;border-radius:8px 2px 8px 2px;
  border:1px solid transparent;background:rgba(255,255,255,.05);
  transition:background .18s,border-color .18s;
}
@media (hover:hover) and (pointer:fine){
  .rp-mod-ici button:hover{background:rgba(255,255,255,.11);border-color:rgba(255,255,255,.2);}
}
.rp-mod-ici-h{
  font-family:Varien,Impact,sans-serif;font-style:italic;font-size:var(--t-4);
  color:var(--rp-encre);font-variant-numeric:tabular-nums;
}
.rp-mod-ici-n{
  font-size:var(--t-3);font-weight:600;color:var(--rp-encre);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.rp-mod-ici-c .rp-ic{width:15px;height:15px;color:var(--c);}
 
.rp-tuile.est-visee{
  border-color:var(--rp-actif);
  box-shadow:inset 4px 0 0 0 var(--c),0 0 0 2px var(--rp-halo),0 0 34px -8px var(--rp-halo);
}

.rp-mod-tete{
  display:flex;align-items:center;gap:var(--e-4);padding:16px 20px;
  border-bottom:1px solid var(--rp-filet);
}
.rp-mod-tete h2{
  font-family:Varien,Impact,sans-serif;font-style:italic;text-transform:uppercase;
  font-size:clamp(20px,4.4vw,28px);line-height:1.04;
}
.rp-mod-sous{margin-top:5px;font-size:var(--t-2);color:var(--rp-encre-2);
  display:flex;align-items:center;gap:var(--e-2);flex-wrap:wrap;}
.rp-mod-x{
  flex:none;margin-left:auto;width:38px;height:38px;display:grid;place-items:center;
  border-radius:var(--rp-r-btn);border:1px solid var(--rp-filet);
  color:var(--rp-encre-2);cursor:pointer;
}
.rp-mod-x .rp-ic{width:16px;height:16px;}
.rp-mod-vue{position:relative;min-height:240px;background:#08131F;}
.rp-mod-vue iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;}
.rp-mod-attente{
  position:absolute;inset:0;display:grid;place-items:center;gap:var(--e-3);
  align-content:center;text-align:center;color:var(--rp-encre-3);font-size:var(--t-2);
  letter-spacing:.12em;text-transform:uppercase;
}
.rp-mod-attente::before{
  content:'';width:26px;height:26px;border-radius:50%;
  border:2px solid var(--rp-filet-fort);border-top-color:var(--rp-actif);
  animation:rp-tourne .8s linear infinite;
}
@keyframes rp-tourne{to{transform:rotate(360deg);}}






.rp-mod-hors{
  position:absolute;inset:0;display:grid;place-items:center;align-content:center;
  gap:var(--e-4);padding:26px;text-align:center;
}


.rp-mod-hors .rp-ic{
  width:22px;height:22px;box-sizing:content-box;padding:13px;
  border-radius:var(--rp-r-btn);border:1px solid var(--rp-filet-fort);
  background:rgba(255,255,255,.04);color:var(--c,var(--rp-actif));
}
.rp-mod-hors p{font-size:var(--t-3);line-height:1.6;color:var(--rp-encre-2);max-width:38ch;}
.rp-mod-hors b{display:block;font-size:var(--t-4);color:var(--rp-encre);margin-bottom:3px;}
.rp-mod-pied{display:flex;gap:var(--e-2);flex-wrap:wrap;padding:14px 20px 18px;
  border-top:1px solid var(--rp-filet);}
@media (max-width:560px){
  .rp-modale{padding:0;place-items:stretch;}
  .rp-mod{width:100%;max-height:100%;height:100%;border-radius:0;border:0;}
  .rp-mod-pied{padding-bottom:max(18px,env(safe-area-inset-bottom));}
  






  .rp-mod-pied [data-fermer]{display:none;}
  .rp-mod-pied .rp-cta--fort{flex:1;justify-content:center;}
  



  .rp-mod-x{width:44px;height:44px;}
}

 



.rp-plus-in{
  margin:0 var(--e-6) var(--e-5) 118px;padding-left:var(--e-4);
  border-left:2px solid color-mix(in srgb, var(--c) 62%, transparent);
  display:grid;gap:var(--e-3);justify-items:start;
}


.rp-faits{
  display:flex;flex-wrap:wrap;gap:var(--e-2) var(--e-5);
  padding-bottom:var(--e-1);
}
.rp-faits > div{display:grid;gap:2px;}
.rp-faits dt{
  font:800 var(--t-1)/1 Montserrat,sans-serif;letter-spacing:.14em;
  text-transform:uppercase;color:var(--rp-encre-3);
}
.rp-faits dd{font-size:var(--t-3);font-weight:600;color:var(--rp-encre);}


.rp-desc{max-width:68ch;font-size:var(--t-3);line-height:1.62;color:var(--rp-encre-2);}
.rp-desc--attente{color:var(--rp-encre-3);font-style:italic;}
.rp-photo{
  width:min(100%,520px);margin:0;border-radius:var(--rp-r-carte);overflow:hidden;
  border:1px solid var(--rp-filet);box-shadow:var(--o-pose);
}
.rp-photo img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;}
.rp-actions{display:flex;gap:var(--e-2);flex-wrap:wrap;}





.rp-plus-in > *{opacity:0;transform:translateY(6px);}
.rp-tuile.est-ouvert .rp-plus-in > *{
  opacity:1;transform:none;transition:opacity .3s ease,transform .3s cubic-bezier(.22,.61,.36,1);
}
.rp-tuile.est-ouvert .rp-plus-in > *:nth-child(2){transition-delay:.05s;}
.rp-tuile.est-ouvert .rp-plus-in > *:nth-child(3){transition-delay:.1s;}
.rp-tuile.est-ouvert .rp-plus-in > *:nth-child(4){transition-delay:.15s;}





.rp-root.sous-720 .rp-plus-in{margin:0 var(--e-4) var(--e-4);padding-top:var(--e-3);}

 



.rp-moment{
  display:flex;align-items:center;gap:var(--e-3);
  margin:var(--e-5) 0 var(--e-1);padding:0 var(--e-1);
  font:800 var(--t-1)/1 Montserrat,sans-serif;
  letter-spacing:.18em;text-transform:uppercase;color:var(--rp-encre-3);
}
.rp-moment:first-child{margin-top:0;}
.rp-moment span{flex:none;}
 
.rp-moment::after{
  content:'';order:1;flex:1 1 auto;height:1px;
  background:linear-gradient(90deg,var(--rp-filet-fort),transparent);
}
.rp-moment i{
  order:2;flex:none;font-style:normal;font-size:var(--t-1);
  color:var(--rp-encre-3);letter-spacing:.08em;
}

 



.rp-sig-off{
  display:flex;justify-content:center;padding:0 20px;
  margin:clamp(52px,7%,104px) auto clamp(16px,2.2vw,28px);
}
.rp-sig-off img{
  display:block;width:auto;
  height:clamp(38px,calc(var(--rp-l,1180) * .044 * 1px),62px);
  max-width:min(180px,64%);object-fit:contain;
}
.rp-root.est-off .rp-signature{margin-top:0;}


.rp-mention-off{
  max-width:640px;margin:clamp(40px,5.5%,72px) auto 0;padding:0 20px;text-align:center;
  font:500 var(--t-2) Montserrat,sans-serif;line-height:1.6;color:var(--rp-encre-2);
}
.rp-mention-off p{margin:0;text-wrap:balance;}
.rp-mention-off .rp-mention-liens{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:14px;}
.rp-mention-liens a{
  display:inline-flex;align-items:center;min-height:44px;padding:0 20px;
  border:1.5px solid var(--rp-encre-3);border-radius:999px;
  font:700 var(--t-2) Montserrat,sans-serif;letter-spacing:.04em;color:var(--rp-encre);
  text-decoration:none;transition:border-color .2s,background-color .2s;
}
.rp-mention-liens a:hover,.rp-mention-liens a:focus-visible{border-color:#FFFFFF;background-color:rgba(255,255,255,.08);}





.rp-retour{
  margin:clamp(30px,4%,54px) auto 0;padding:0 20px;text-align:center;
}
.rp-retour a{
  display:inline-block;min-height:44px;padding:12px 6px;
  font:600 var(--t-2) Montserrat,sans-serif;letter-spacing:.06em;
  color:var(--rp-encre-3);text-decoration:underline;text-underline-offset:4px;
  transition:color .2s;
}
.rp-retour a:hover,.rp-retour a:focus-visible{color:#FFFFFF;}
.rp-signature{
  display:flex;align-items:center;justify-content:center;gap:var(--e-4);
  margin:clamp(52px,7%,104px) auto clamp(34px,4.5%,64px);padding:0 20px;
  font:800 var(--t-2) Montserrat,sans-serif;letter-spacing:.28em;text-transform:uppercase;
  color:var(--rp-encre-3);text-align:center;
}


.rp-sig-fil{
  flex:1 1 0;height:1px;max-width:150px;
  background:linear-gradient(90deg,transparent,var(--rp-filet-fort));
}
.rp-signature .rp-sig-fil:last-of-type{
  background:linear-gradient(270deg,transparent,var(--rp-filet-fort));
}


.rp-sig-pts{display:flex;align-items:center;gap:var(--e-1);flex:none;}
.rp-sig-pts i{
  display:block;border-radius:50%;background:var(--rp-filet-fort);
  width:3px;height:3px;
}
.rp-sig-pts i:nth-child(2){width:4px;height:4px;background:var(--rp-encre-3);}
.rp-sig-pts i:nth-child(3){width:5px;height:5px;background:var(--rp-actif);}
 
.rp-sig-pts--d{flex-direction:row-reverse;}
.rp-sig-ic{width:14px;height:14px;vertical-align:-2px;margin:0 2px;color:var(--rp-actif);}
.rp-root.sous-420 .rp-signature{letter-spacing:.18em;font-size:var(--t-1);gap:var(--e-2);}

 
.rp-vide-ic{
  display:grid;place-items:center;width:22px;height:22px;box-sizing:content-box;
  padding:var(--e-3);margin-bottom:var(--e-1);
  border-radius:var(--rp-r-btn);border:1px solid var(--rp-filet-fort);
  background:rgba(255,255,255,.04);color:var(--rp-encre-3);
}
.rp-vide-actions{display:flex;gap:var(--e-2);flex-wrap:wrap;justify-content:center;margin-top:var(--e-2);}
 
.rp-vide-actions em{
  font-style:normal;margin-left:var(--e-2);padding:2px var(--e-2);
  border-radius:var(--rp-r-tag);background:rgba(255,255,255,.12);
  font-size:var(--t-1);font-weight:800;
}









.rp-sk{width:min(100%,1180px);margin:0 auto;padding:0 20px;position:relative;z-index:2;}
.rp-sk-b{
  position:relative;overflow:hidden;
  background:var(--rp-verre);border-radius:var(--rp-r);
}
.rp-sk-b::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(100deg,transparent 20%,rgba(255,255,255,.07) 50%,transparent 80%);
  background-size:200% 100%;
  animation:rp-sk-balai 1.6s linear infinite;
}
@keyframes rp-sk-balai{0%{background-position:200% 0;}100%{background-position:-200% 0;}}






.rp-sk-hero{
  display:grid;place-items:center;align-content:center;gap:var(--e-4);
  width:100%;aspect-ratio:2 / 1;
  max-height:min(66vh,650px);min-height:320px;
}
.rp-sk-logo{width:104px;height:104px;border-radius:14px;}
.rp-sk-titre{width:min(620px,86%);height:169px;}
.rp-sk-stitre{width:min(420px,70%);height:38px;}

.rp-sk-rail{display:flex;gap:10px;overflow:hidden;padding-bottom:var(--e-5);}
.rp-sk-jour{flex:none;width:96px;height:64px;border-radius:var(--rp-r-btn);}

.rp-sk-outils{display:flex;gap:12px;flex-wrap:wrap;padding-bottom:var(--e-5);}
.rp-sk-champ{flex:1 1 180px;min-width:0;height:46px;border-radius:var(--rp-r-btn);}

.rp-sk-liste{display:grid;gap:10px;}
.rp-sk-rang{display:grid;grid-template-columns:var(--rp-col-h) minmax(0,1fr);gap:18px;align-items:center;
  border:1px solid var(--rp-filet);border-radius:var(--rp-r-carte);padding:16px 18px;}
.rp-sk-h{height:34px;}
.rp-sk-corps{display:grid;gap:9px;min-width:0;}
.rp-sk-titre-r{width:min(420px,72%);height:22px;}
.rp-sk-meta{width:min(260px,46%);height:14px;}

.rp-root.sous-720 .rp-sk-hero{aspect-ratio:auto;min-height:clamp(400px,calc(var(--rp-l,390) * 1.16 * 1px),520px);max-height:none;}
.rp-root.sous-720 .rp-sk-rang{grid-template-columns:64px minmax(0,1fr);gap:12px;padding:13px var(--rp-marge-mob);}
.rp-root.sous-720 .rp-sk-titre{height:clamp(96px,calc(var(--rp-l,390) * .30 * 1px),150px);}
.rp-root.sous-720 .rp-sk-logo{width:72px;height:72px;}




@media (prefers-reduced-motion:reduce){
  .rp-sk-b::after{animation:none;background:rgba(255,255,255,.04);}
}



.rp-sr-seul{
  position:absolute;width:1px;height:1px;overflow:hidden;
  clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;margin:-1px;padding:0;border:0;
}

.rp-vide{
  width:min(100%,1180px);margin:0 auto;
  padding:var(--e-6) 20px var(--e-7);text-align:center;
  display:grid;justify-items:center;
}
.rp-vide[hidden]{display:none;}
.rp-vide h3{font-family:Varien,Impact,sans-serif;font-style:italic;font-size:var(--t-6);
  text-transform:uppercase;margin-bottom:8px;}
.rp-vide p{font-size:var(--t-3);color:var(--rp-encre-3);max-width:44ch;margin:0 auto 18px;}

 



@media (hover:hover) and (pointer:fine){
  .rp-jour:hover{background:var(--rp-verre-fort);}
  .rp-tuile:hover{border-color:var(--rp-filet-fort);background:var(--rp-verre-fort);}
  .rp-tuile--vedette:hover{border-color:color-mix(in srgb, var(--c) 80%, transparent);}
  .rp-cta:hover{background:var(--rp-verre-fort);}
  .rp-cta--fort:hover{filter:brightness(1.12);}
  .rp-raz:hover{border-color:var(--rp-filet-fort);color:var(--rp-encre);}
  .rp-champ:hover{border-color:var(--rp-filet-fort);}
}

 


@media (hover:none){
  .rp-jour{min-height:56px;}
  .rp-champ select{padding-top:14px;padding-bottom:14px;}
  .rp-bascule button{min-height:44px;}
  .rp-raz{min-height:44px;}
  .rp-cta{min-height:44px;}
  .rp-tete{min-height:60px;}
}

 









.rp-root.sous-1080 .rp-filtres{grid-template-columns:repeat(2,minmax(0,1fr));}

.rp-root.sous-720 .rp-illus{
  aspect-ratio:16/9;max-height:min(30vh,260px);
  


  -webkit-mask-image:
    linear-gradient(to bottom, transparent 0%, #000 9%, #000 70%, transparent 100%),
    linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%);
          mask-image:
    linear-gradient(to bottom, transparent 0%, #000 9%, #000 70%, transparent 100%),
    linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%);
}


.rp-root.sous-720 .rp-outils,






.rp-root.sous-720 .rp-liste,







.rp-root.sous-720 .rp-vide{padding-left:14px;padding-right:14px;}
.rp-root.sous-720 .rp-jours{padding:6px;gap:var(--e-1);}





.rp-root.sous-720 .rp-socle-pied{flex-direction:column;align-items:flex-start;gap:var(--e-3);}
.rp-root.sous-720 .rp-socle-jour{margin-left:0;}
.rp-root.sous-720 .rp-jour{min-width:56px;}



.rp-root.sous-720 .rp-tete{grid-template-columns:78px minmax(0,1fr);gap:var(--e-3);
  align-items:start;}
.rp-root.sous-720 .rp-now{padding-left:56px;}







.rp-root.sous-720{--rp-gout-h:0px;}
.rp-root.sous-720 .rp-h{font-size:var(--t-3);justify-items:start;}


.rp-root.sous-720 .rp-h .rp-h1,.rp-root.sous-720 .rp-h .rp-h2{text-align:left;width:auto;}














.rp-root.sous-720 .rp-h .rp-cat{font-size:9px;letter-spacing:.07em;margin-top:5px;}
.rp-root.sous-720 .rp-h em{display:none;}
.rp-root.sous-720 .rp-h{gap:0;line-height:1.3;}
.rp-root.sous-720 .rp-titre-t{font-size:var(--t-3);}








.rp-root.sous-720 .rp-meta{grid-column:2;display:grid;justify-items:start;margin-top:5px;}
.rp-root.sous-720 .rp-sep{display:none;}
.rp-root.sous-720 .rp-meta-i{font-size:var(--t-2);align-items:flex-start;}
.rp-root.sous-720 .rp-meta-i span{white-space:normal;overflow-wrap:anywhere;max-width:none;}
.rp-root.sous-720 .rp-meta-i .rp-ic{margin-top:1px;}
 


.rp-root.sous-720 .rp-meta{grid-template-columns:minmax(0,1fr);gap:var(--e-2);width:100%;}
.rp-kicker{display:none;}
.rp-root.sous-720 .rp-kicker{
  display:flex;align-items:center;gap:var(--e-2);width:max-content;max-width:100%;margin-bottom:4px;
  font-size:var(--t-1);font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  color:var(--c);
}
.rp-kicker .rp-ic{width:13px;height:13px;flex:none;}












.rp-root.sous-720 .rp-tuile--vedette .rp-tete{
  grid-template-columns:78px minmax(0,1fr);
  grid-template-rows:auto auto auto;
  height:auto;min-height:0;
  padding:12px 44px 14px var(--rp-marge-mob);
}










.rp-root.sous-720 .rp-tuile--vedette .rp-h{padding:12px 0 0 0;font-size:var(--t-4);}
.rp-root.sous-720 .rp-tuile--vedette .rp-vlieu{grid-column:2;grid-row:1;align-self:center;
  padding-top:12px;color:var(--rp-encre-2);display:flex;align-items:center;gap:var(--e-2);}







.rp-tuile--vedette .rp-vlieu{
  display:flex;align-items:center;gap:var(--e-2);
  color:#fff;font-size:var(--t-3);font-weight:700;letter-spacing:.01em;
  white-space:normal;max-width:190px;line-height:1.32;
  padding:7px 12px;border-radius:8px 2px 8px 2px;
  background:rgba(6,11,32,.62);border:1px solid rgba(255,255,255,.26);
  backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);
  box-shadow:0 6px 22px -10px rgba(0,0,0,.9);text-shadow:none;
}
.rp-root.sous-720 .rp-tuile--vedette .rp-vscene{grid-column:1 / -1;}
 
.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-vlieu-bloc{
  grid-column:2;grid-row:1;align-self:center;justify-self:start;padding-top:12px;
}
.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-vlieu{padding-top:0;}
.rp-vlieu .rp-ic{width:13px;height:13px;flex:none;color:var(--rp-encre-3);}









.rp-tuile--vedette .rp-vlieu--carte{
  cursor:pointer;pointer-events:auto;
  border-color:rgba(255,255,255,.5);background:rgba(6,11,32,.7);
  transition:border-color .2s,background .2s;
}
.rp-tuile--vedette .rp-vlieu--carte .rp-ic{color:#fff;}
.rp-tuile--vedette .rp-vlieu--carte .rp-ic--carte{width:12px;height:12px;opacity:1;}
@media (hover:hover) and (pointer:fine){
  .rp-tuile--vedette .rp-vlieu--carte:hover{background:rgba(0,0,0,.34);border-color:#fff;}
}
 
@media (hover:none){ .rp-tuile--vedette .rp-vlieu--carte{min-height:44px;} }





.rp-root.sous-720 .rp-tuile--vedette .rp-vlieu--carte{
  padding:6px 11px;margin-top:10px;width:max-content;max-width:100%;
}


.rp-root.sous-720 .rp-vscene{grid-column:1 / -1;grid-row:2;min-height:104px;padding:14px;margin-top:10px;}



.rp-tuile--vedette .rp-meta .rp-meta-cat,
.rp-tuile--vedette .rp-meta .rp-sep{display:none;}









.rp-root.sous-720 .rp-tuile--vedette .rp-vpast{
  display:inline-flex;align-items:center;gap:var(--e-2);
  justify-self:start;grid-column:1 / -1;grid-row:3;padding:0 0 0 2px;
}
.rp-root.sous-720 .rp-vpast .rp-rond{width:34px;height:34px;}
.rp-root.sous-720 .rp-vpast .rp-rond .rp-ic{width:17px;height:17px;}
.rp-root.sous-720 .rp-vpast small{letter-spacing:.11em;}










 
.rp-root.sous-720 .rp-tuile--vedette .rp-vscene{padding:8px 0 2px;}










.rp-root.sous-720 .rp-vfond::after{
  background:
    linear-gradient(180deg,rgba(6,11,32,.94) 0%,rgba(6,11,32,.72) 22%,
      rgba(6,11,32,.34) 46%,rgba(6,11,32,.74) 76%,rgba(6,11,32,.94) 100%),
    linear-gradient(180deg, color-mix(in srgb, var(--c) 40%, transparent) 0%,
      transparent 55%, color-mix(in srgb, var(--c) 26%, transparent) 100%);
}



.rp-root.sous-720 .rp-tuile--vedette .rp-vtitre{
  font-size:clamp(24px,8.4vw,36px);line-height:.98;
}








.rp-root.sous-720 .rp-tuile--vedette .rp-vscene .rp-signe{display:none;}
.rp-root.sous-720 .rp-vpast{
  display:inline-flex;align-items:center;gap:var(--e-3);padding-top:2px;
}
.rp-root.sous-720 .rp-vpast .rp-signe{
  display:block;width:clamp(96px,26vw,150px);height:26px;margin:0;
}
.rp-root.sous-720 .rp-vligne{margin-top:10px;gap:var(--e-3);}
.rp-root.sous-720 .rp-vpast{padding-top:2px;}
.rp-root.sous-720 .rp-vtitre{font-size:clamp(21px,calc(var(--rp-l,390) * .085 * 1px),38px);}
 




.rp-root.sous-420 .rp-tete{grid-template-columns:70px minmax(0,1fr);gap:var(--e-3);}
.rp-root.sous-420 .rp-h .rp-cat{font-size:8.5px;letter-spacing:.05em;}
.rp-root.sous-420 .rp-titre-t{font-size:var(--t-3);}



.rp-root.sous-420 .rp-filtres{grid-template-columns:minmax(0,1fr);}




@media (max-width:720px){
  .rp-tete{grid-template-columns:62px minmax(0,1fr);}
  .rp-filtres{grid-template-columns:repeat(2,minmax(0,1fr));}
}

 
@media (prefers-reduced-motion:reduce){
  .rp-root *,.rp-root *::before,.rp-root *::after{
    transition-duration:.01ms !important;animation-duration:.01ms !important;
  }
}

 


@media print{
  .rp-root{background:#fff !important;color:#000;}
  .rp-hero,.rp-jours-cadre,.rp-outils,.rp-vide{display:none !important;}
  .rp-liste{display:block;padding:0;}
  .rp-tuile{break-inside:avoid;border:1px solid #ccc;background:#fff !important;
    box-shadow:none;margin-bottom:6px;backdrop-filter:none;}
  .rp-tuile .rp-titre-t,.rp-tuile .rp-h{color:#000;}
  .rp-meta-i,.rp-h span:last-child{color:#444;}
  .rp-vscene img,.rp-photo{display:none;}
  .rp-plus{grid-template-rows:1fr;}
}
 










.rp-root.est-v2.sous-720 .rp-meta--v2{
  display:flex;align-items:center;justify-content:space-between;
  width:100%;max-width:none;gap:var(--e-3);
}


.rp-root.est-v2.sous-720 .rp-dest{text-align:left;justify-items:start;}


.rp-root.est-v2.sous-720 .rp-dest-p{display:none;}
 






.rp-plus-in--actions{
  grid-template-columns:minmax(0,1fr) auto;
  align-items:start;column-gap:var(--e-6);
}
.rp-plus-in--actions > .rp-actions{
  grid-column:2;grid-row:1 / -1;align-self:start;
  display:grid;gap:var(--e-2);width:100%;
}


.rp-root.sous-900 .rp-plus-in--actions{grid-template-columns:minmax(0,1fr);}
.rp-root.sous-900 .rp-plus-in--actions > .rp-actions{grid-column:1;grid-row:auto;}










.rp-spotify{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  

  width:auto;justify-self:start;padding:11px 20px;border-radius:500px;
  background:#1ED760;color:#000;text-decoration:none;
  







  font:600 14px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,
    "Helvetica Neue",Arial,sans-serif;
  letter-spacing:0;white-space:nowrap;
  transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
  box-shadow:0 5px 18px -10px rgba(30,215,96,.75);
}
.rp-spotify .rp-ic--spotify{width:19px;height:19px;flex:none;}
@media (hover:hover) and (pointer:fine){
  .rp-spotify:hover{
    background:#25E86B;transform:scale(1.022);
    box-shadow:0 10px 30px -10px rgba(30,215,96,1);
  }
}
.rp-spotify:active{transform:scale(.99);}
.rp-spotify:focus-visible{outline:2px solid #fff;outline-offset:3px;}
@media (prefers-reduced-motion:reduce){
  .rp-spotify,.rp-spotify:hover{transform:none;transition:none;}
}


.rp-tuile--vedette .rp-plus-in--actions{grid-template-columns:minmax(0,1fr) auto;}

























.rp-root.sous-1080:not(.sous-720) .rp-vtitre{
  font-size:clamp(16px,calc(var(--rp-l,768) * .0245 * 1px),22px);
  -webkit-line-clamp:3;
}
.rp-root.est-v2.sous-720 .rp-vtitre{
  font-size:clamp(17px,calc(var(--rp-l,390) * .052 * 1px),26px);
  -webkit-line-clamp:3;
}
 




















.rp-root.sous-720 .rp-h .rp-hs{font-size:13px;}


.rp-root.sous-720 .rp-tete,
.rp-root.sous-420 .rp-tete{grid-template-columns:78px minmax(0,1fr);}
.rp-root.sous-720 .rp-tuile--vedette .rp-tete{grid-template-columns:78px minmax(0,1fr);}




.rp-root.est-v2.sous-720 .rp-tete{padding-right:54px;}
.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-tete{padding-right:54px;}







.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-vlieu-bloc{
  grid-column:2;grid-row:1;width:100%;
  display:flex;align-items:center;gap:var(--e-3);
}
.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-dest-b{margin-left:auto;}
 
.rp-root.sous-720 .rp-vfilet{display:none;}







.rp-root.sous-900 .rp-plus-in--actions > .rp-actions{justify-items:start;}
.rp-root.sous-900 .rp-spotify{
  width:auto;padding:11px 20px;gap:9px;
  font-size:14px;letter-spacing:0;
  box-shadow:0 4px 14px -8px rgba(30,215,96,.8);
}
.rp-root.sous-900 .rp-spotify .rp-ic--spotify{width:19px;height:19px;}







.rp-root.est-v2.sous-720 .rp-dest-lieu{
  white-space:normal;overflow:visible;text-overflow:clip;line-height:1.3;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
}
 








.rp-root.est-v2.sous-720 .rp-meta--v2{
  grid-column:1 / -1;width:100%;max-width:none;
  margin-top:var(--e-3);
}
.rp-root.est-v2.sous-720 .rp-dest-lieu{-webkit-line-clamp:2;}




.rp-root.sous-720 .rp-h .rp-h1{font-size:20px;}
.rp-root.sous-720 .rp-h .rp-h2{font-size:16px;}
.rp-root.sous-420 .rp-h .rp-h1{font-size:19px;}
.rp-root.sous-420 .rp-h .rp-h2{font-size:15px;}
.rp-root.sous-720 .rp-h .rp-hs{font-size:13px;margin:6px 0;}



.rp-root.est-v2.sous-720 .rp-dest-b{width:46px;height:46px;}
.rp-root.est-v2.sous-720 .rp-dest-b .rp-ic{width:23px;height:23px;}





.rp-root.sous-720 .rp-tuile--vedette .rp-vlieu{
  padding:7px 13px;font-size:13px;line-height:1.2;
}





.rp-root.sous-720 .rp-tete{padding:14px 54px 16px 18px;}
.rp-root.sous-420 .rp-tete{padding:14px 54px 16px 18px;}
.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-tete{padding:14px 54px 16px 18px;}
.rp-root.sous-720 .rp-liste{padding-left:16px;padding-right:16px;}
.rp-root.sous-720 .rp-liste{gap:var(--e-4);}






.rp-root.est-v2.sous-720 .rp-tuile--vedette .rp-vlieu{
  padding:8px 13px;font-size:13px;line-height:1.25;
}








.rp-root.sous-720 .rp-ouvre{
  top:16px;bottom:auto;transform:none;right:14px;
}
.rp-root.sous-720 .rp-tuile.est-ouvert .rp-ouvre{transform:rotate(180deg);}
 









.rp-root.sous-720 .rp-hero{
  min-height:clamp(400px,calc(var(--rp-l,390) * 1.16 * 1px),520px);
  padding:0;
}
.rp-root.sous-720 .rp-hero-dedans{
  padding:clamp(26px,calc(var(--rp-l,390) * .07 * 1px),40px) 18px
          clamp(64px,calc(var(--rp-l,390) * .17 * 1px),96px);
  align-content:center;
}


.rp-root.sous-720 .rp-sstitre{font-size:13px;max-width:30ch;margin-top:18px;}












.rp-root.sous-1080 .rp-hero-fond{
  align-items:flex-start;
  padding-top:clamp(58px,calc(var(--rp-l,390) * .175 * 1px),104px);
  padding-left:clamp(12px,3.4vw,20px);padding-right:clamp(12px,3.4vw,20px);
  font-size:clamp(40px,calc(var(--rp-l,390) * .135 * 1px),62px);
  -webkit-text-stroke-width:2px;-webkit-text-stroke-color:rgba(255,255,255,.52);
  color:rgba(255,255,255,.07);
}


.rp-root.sous-1080 .rp-hero-fond .rp-hf-g i{
  font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,.78);margin-bottom:.16em;
}
.rp-root.sous-1080 .rp-hero-fond .rp-hf-d{font-size:.66em;}






.rp-root.sous-1080:not(.sous-720) .rp-hero-fond{padding-top:8px;}







.rp-root.sous-1080:not(.sous-720) .rp-hero{min-height:452px;}
.rp-root.sous-1080:not(.sous-720) .rp-hero-dedans{
  padding-bottom:clamp(104px,22%,148px);align-content:center;
}








.rp-hero-fond{
  color:rgba(255,255,255,.045);
  -webkit-text-stroke:2.5px rgba(255,255,255,.30);
}
@supports not (-webkit-text-stroke:1px #000){
  .rp-hero-fond{color:rgba(255,255,255,.16);}
}






































.rp-hero-fond{
  align-items:center;gap:clamp(12px,2vw,32px);
  padding-left:clamp(14px,2%,36px);padding-right:clamp(14px,2%,36px);
}
.rp-hero-fond .rp-hf-g{
  display:grid;justify-items:start;line-height:.82;margin-left:0;
}



.rp-hero-fond .rp-hf-g i{
  font-family:Montserrat,sans-serif;font-style:normal;font-weight:800;
  font-size:.135em;letter-spacing:.22em;line-height:1;
  color:rgba(255,255,255,.78);-webkit-text-stroke:0;
  


  margin:0 0 .06em .04em;
  text-shadow:0 2px 14px rgba(6,10,30,.85);
}
.rp-hero-fond .rp-hf-g b{font-weight:inherit;display:block;}


.rp-hero-fond .rp-hf-d{margin-right:0;font-size:.66em;}





















.rp-root:not(.sous-1080) .rp-hero-fond{
  padding-bottom:clamp(40px,7%,92px);
  font-size:clamp(90px,calc(var(--rp-l,1180) * .115 * 1px),165px);
  -webkit-text-stroke:3px rgba(255,255,255,.62);
  color:rgba(255,255,255,.10);
}
 


.rp-h-badges{
  display:flex;flex-wrap:wrap;justify-content:center;gap:6px;
  margin-top:clamp(10px,1.4vw,16px);
}
 
.rp-root.sous-720 .rp-h-badges{justify-content:flex-start;margin-top:8px;}
`;

  













  const REGISTRES = ['officielle', 'off', 'guadeloupe'];

  






  const REGISTRE_NOMS = {
    officielle: { onglet: 'Village', titre: 'Officielle' },
    off: { onglet: 'Off du Rhum', titre: 'Off du Rhum' },
    guadeloupe: { onglet: 'Guadeloupe', titre: 'Guadeloupe' }
  };

  















  const GROUPES_REGISTRES = [['officielle', 'off'], ['guadeloupe']];

  const estRegistre = (t) => REGISTRES.indexOf(t) !== -1;

   

  class RdrProgramme extends HTMLElement {
    












    






    static get observedAttributes() {
      return ['payload', 'jour', 'lang', 'type', 'heure', 'lieu', 'cat', 'url'];
    }

    constructor() {
      super();
      this._p = null;
      this._jour = '';
      this._lg = 'fr';
      this._type = 'officielle';
      





      this._typeChoisi = false;
      this._f = { heure: '', theme: '', lieu: '', cat: '' };
      this._ouverts = new Set();
      


      this._silenceOuvert = false;
      this._monte = false;
      





      this._pilote = false;
      this._jourChoisi = false;
      this._demande = null;
    }

    
















    connectedCallback() {
      if (this._monte) return;
      this._monte = true;
      this._attente = true;
      this._injecterCss();
      this._lireAttributs();
      this._lirePayload();
      




      this._honorerDemande();
      this._rendre();
      this._observerLargeur();
      this._mesurerChiffre();
       
      this._minuteur = setTimeout(() => {
        if (!this._p) { this._attente = false; this._rendre(); }
      }, DELAI_ATTENTE);
    }

    


    



    _arrivee() {
      if (this._deja) return;
      this._deja = true;
      const racine = this.querySelector('.rp-root');
      if (!racine) return;
      racine.classList.add('est-arrivee');
      setTimeout(() => racine.classList.remove('est-arrivee'), 1600);
    }

    _mesurerChiffre() {
      const appliquer = () => {
        const racine = this.querySelector('.rp-root');
        if (racine && this._chiffre) {
          racine.style.setProperty('--rp-bloc-h', this._chiffre);
          return;
        }
        const ref = this.querySelector('.rp-h .rp-h1');
        if (!racine || !ref) return;
        const cs = getComputedStyle(ref);
        const t = document.createElement('span');
        t.style.cssText = 'position:absolute;left:-9999px;top:0;white-space:pre;' +
          'font-family:' + cs.fontFamily + ';font-style:' + cs.fontStyle +
          ';font-weight:' + cs.fontWeight + ';font-size:' + cs.fontSize +
          ';letter-spacing:' + cs.letterSpacing + ';';
        document.body.appendChild(t);
        let large = 0;
        for (let k = 0; k < 10; k++) {
          t.textContent = String(k);
          large = Math.max(large, t.getBoundingClientRect().width);
        }
        t.textContent = ':';
        const sep = t.getBoundingClientRect().width;
        t.remove();
        if (!large) return;
        








        const corps = parseFloat(cs.fontSize) || 20;
        this._chiffre = (Math.ceil((large * 4 + sep) / corps * 1000) / 1000) + 'em';
        racine.style.setProperty('--rp-bloc-h', this._chiffre);
      };
      appliquer();
      

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          this._chiffre = null;
          appliquer();
        }).catch(() => {});
      }
    }

    disconnectedCallback() {
      if (this._ro) { this._ro.disconnect(); this._ro = null; }
      if (this._minuteur) { clearTimeout(this._minuteur); this._minuteur = null; }
      



      if (this._horsChamp) {
        removeEventListener('click', this._horsChamp, true);
        removeEventListener('keydown', this._echap, true);
        removeEventListener('scroll', this._suivre, true);
        removeEventListener('resize', this._suivre);
        this._horsChamp = null;
      }
    }

    






    _observerLargeur() {
      const juger = () => {
        const racine = this.querySelector('.rp-root');
        if (!racine) return;
        const L = this.clientWidth || racine.clientWidth || 0;
        if (!L) return;
        racine.classList.toggle('sous-1080', L <= 1080);
        

        racine.classList.toggle('sous-900', L <= 900);
        racine.classList.toggle('sous-720', L <= 720);
        





        racine.classList.toggle('sous-520', L <= 520);
        racine.classList.toggle('sous-420', L <= 420);
        




        racine.style.setProperty('--rp-l', String(L));
        



        if (this._jugerFleches) this._jugerFleches();
      };
      juger();
      this._juger = juger;
      if (typeof ResizeObserver === 'undefined') {
        addEventListener('resize', juger, { passive: true });
        return;
      }
      this._ro = new ResizeObserver(juger);
      this._ro.observe(this);
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres || !this._monte) return;
      if (nom === 'url') { this._pilote = apres === '1'; return; }
      




      if (nom === 'type' || nom === 'heure' || nom === 'lieu' || nom === 'cat') {
        this._demande = this._demande || {};
        this._demande[nom] = apres || null;
        if (this._p) { this._honorerDemande(); this._rendre(); }
        return;
      }
      if (nom === 'lang') { this._lg = apres === 'en' ? 'en' : 'fr'; this._rendre(); return; }
      if (nom === 'payload') { this._lirePayload(); this._honorerDemande(); this._rendre(); }
      if (nom === 'jour' && apres) { this._jour = apres; this._jourChoisi = true; this._rendre(); }
    }

    







    _lang() { return this._lg === 'en' ? 'en' : 'fr'; }

    

    _jc(d) { return (this._lang() === 'en' ? JOURS_COURTS_EN : JOURS_COURTS)[d.getDay()]; }
    _mc(d) { return (this._lang() === 'en' ? MOIS_COURTS_EN : MOIS_COURTS)[d.getMonth()]; }

    _i18nLookup(brut) {
      const clef = String(brut == null ? '' : brut).trim();
      if (!clef) return undefined;
      const trouve = ER_EN[clef] !== undefined ? ER_EN[clef] : ER_EN_NORM[i18nNorm(clef)];
      if (trouve !== undefined) return trouve;
      return this._i18nDynamic(clef);
    }

    



    _i18nDynamic(clef) {
      let m = clef.match(/^(\d+)\srendez-vous$/);
      if (m) return m[1] + (m[1] === '1' ? ' event' : ' events');
      m = clef.match(/^(\d+)\srendez-vous ici aujourd’hui$/);
      if (m) return m[1] + (m[1] === '1' ? ' event' : ' events') + ' here today';
       
      m = clef.match(/^(\d+)\sh(?:\s(\d{2}))?$/);
      if (m) return m[1] + ' hr' + (m[2] ? ' ' + m[2] : '');
      return undefined;
    }

    


    _compte(n) {
      return this._lang() === 'en' ? n + (n === 1 ? ' event' : ' events') : n + ' rendez-vous';
    }

    

    _surLaCarte(lieu) {
      return this._lang() === 'en' ? 'See ' + lieu + ' on the map' : 'Voir ' + lieu + ' sur la carte';
    }

    

    _t(chaine) {
      if (this._lang() !== 'en' || !chaine) return chaine;
      const en = this._i18nLookup(chaine);
      return en === undefined ? chaine : en;
    }

    _i18n(racine) {
      if (this._lang() !== 'en' || !racine) return;
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

    











    _honorerDemande() {
      const d = this._demande;
      if (!d || !this._p) return;
      if (estRegistre(d.type)) { this._type = d.type; this._typeChoisi = true; }
      if (d.heure === 'matin' || d.heure === 'apresmidi' || d.heure === 'soir') {
        this._f.heure = d.heure;
      }
      if (d.lieu) {
        const t = (this._p.lieux || []).find(l => pli(l.nom) === pli(d.lieu) ||
          String(l.id || l.nom) === d.lieu);
        if (t) this._f.lieu = t.id || t.nom;
      }
      if (d.cat) {
        const t = (this._p.categories || []).find(c => pli(c) === pli(d.cat));
        if (t) this._f.cat = pli(t);
      }
      this._demande = null;
    }

    


    _injecterCss() {
      if (document.getElementById('rp-css')) return;
      const s = document.createElement('style');
      s.id = 'rp-css';
      s.textContent = CSS;
      document.head.appendChild(s);
    }

    






















    _lireAttributs() {
      





      if (this.hasAttribute('lang')) this._lg = this.getAttribute('lang') === 'en' ? 'en' : 'fr';
      const t = this.getAttribute('type');
      if (estRegistre(t)) { this._type = t; this._typeChoisi = true; }
      const j = this.getAttribute('jour');
      if (j) { this._jour = j; this._jourChoisi = true; }
      this._pilote = this.getAttribute('url') === '1';
      const d = {};
      ['heure', 'lieu', 'cat'].forEach(k => {
        const v = this.getAttribute(k);
        if (v) d[k] = v;
      });
      if (Object.keys(d).length) this._demande = Object.assign(this._demande || {}, d);
    }

    _lirePayload() {
      const brut = this.getAttribute('payload');
      

      if (!brut) { this._p = null; return; }
      


      this._attente = false;
      if (this._minuteur) { clearTimeout(this._minuteur); this._minuteur = null; }
      this._rec = null;
      try { this._p = JSON.parse(brut); }
      catch (e) {
        console.error('[rdr-programme] payload illisible', e);
        this._p = null;
        return;
      }
      



      this._reglerRegistre();
      const jours = this._jours();
      if (!this._jour || !jours.includes(this._jour)) {
         
         
        const auj = this._maintenant().jour;
        this._jour = jours.includes(auj) ? auj : (jours[0] || '');
      }
    }

     
     
    setPayload(p) {
      this._p = p || null;
      this._rec = null;
      this._reglerRegistre();
      const jours = this._jours();
      const auj = this._maintenant().jour;
      if (!this._jour || !jours.includes(this._jour)) {
        this._jour = jours.includes(auj) ? auj : (jours[0] || '');
      }
      if (this._monte) this._rendre();
    }

    






    _jours() {
      const p = this._p;
      if (!p) return [];
      const gp = this._type === 'guadeloupe';
      const declares = gp ? p.joursGuadeloupe : p.jours;
      if (Array.isArray(declares) && declares.length) return declares.slice().sort();
      return [...new Set((p.animations || [])
        .filter(a => (a.type === 'guadeloupe') === gp)
        .map(a => a.date).filter(Boolean))].sort();
    }

    



    

    _maintenant() {
      return maintenantA(this._type === 'guadeloupe' ? 'America/Guadeloupe' : 'Europe/Paris');
    }

    _registreParDefaut() {
      return (this._p && this._p.phaseGuadeloupe === true) ? 'guadeloupe' : 'officielle';
    }

    


    _reglerRegistre() {
      if (this._typeChoisi || !this._p) return;
      this._type = this._registreParDefaut();
    }

    






    _registresVisibles() {
      if (this._registreParDefaut() !== 'guadeloupe') return REGISTRES;
      return this._type === 'guadeloupe' ? ['guadeloupe'] : REGISTRES;
    }

    _barreRegistres() {
      const visibles = this._registresVisibles();
      if (visibles.length < 2) return '';
      const bouton = (t) =>
        '<button type="button" data-type="' + t + '" aria-pressed="' +
          (this._type === t ? 'true' : 'false') + '">' +
          esc(REGISTRE_NOMS[t].onglet) + '</button>';
      


      const groupes = GROUPES_REGISTRES
        .map(g => g.filter(t => visibles.indexOf(t) !== -1))
        .filter(g => g.length);
      


      return '<div class="rp-bascules" role="group" aria-label="Type de programmation">' +
        groupes.map((g, i) =>
          '<div class="rp-bascule' + (i > 0 ? ' rp-bascule--loin' : '') + '">' +
            g.map(bouton).join('') +
          '</div>').join('') +
        '</div>';
    }

    



    _choisirRegistre(t) {
      if (!estRegistre(t) || this._type === t) return;
      this._type = t;
      this._typeChoisi = true;
      


      this._f = { heure: '', theme: '', lieu: '', cat: '' };
      const jours = this._jours();
       
      const auj = this._maintenant().jour;
      if (!jours.includes(this._jour)) this._jour = jours.includes(auj) ? auj : (jours[0] || '');
      this._rendre();
      this._emit('programme-type', { type: this._type });
    }

    







    _lienSaintMalo() {
      if (this._registreParDefaut() !== 'guadeloupe') return '';
      if (this._type !== 'guadeloupe') return '';
      return '<p class="rp-retour">' +
        '<a href="?type=officielle" id="rpRetourSM">' +
          'Revoir la programmation du village de Saint-Malo' +
        '</a></p>';
    }

    






    _mentionOff() {
      const p = this._p || {};
      if (this._type !== 'off' || !p.mentionOff) return '';
      const sur = (u) => (/^https:\/\//i.test(String(u || '').trim()) ? urlSure(u) : '');
      const liens = [['App Store', sur(p.mentionOffAppStore)], ['Google Play', sur(p.mentionOffGooglePlay)]].filter(l => l[1]);
      return '<div class="rp-mention-off">' +
        '<p>' + esc(p.mentionOff) + '</p>' +
        (liens.length
          ? '<p class="rp-mention-liens">' + liens.map(l =>
              '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + l[0] +
                '<span class="rp-sr-seul"> (nouvel onglet)</span></a>').join('') + '</p>'
          : '') +
      '</div>';
    }

    _anims() { return (this._p && this._p.animations) || []; }

    

    _filtrees(jour) {
      const f = this._f;
      const t = this._type;
      return this._anims().filter(a => {
        if ((a.type || 'officielle') !== t) return false;
        if (jour && a.date !== jour) return false;
        if (f.lieu && (a.lieuId || a.lieu) !== f.lieu && a.lieu !== f.lieu) return false;
        if (f.cat && pli(a.cat || a.catLib) !== f.cat) return false;
        if (f.theme && pli(a.theme || a.themeLib) !== f.theme) return false;
         
         
        if (f.heure && /^\d{1,2}:\d{2}/.test(a.debut || '')) {
          const d = minutes(a.debut);
          if (f.heure === 'matin' && !(d < 12 * 60)) return false;
          if (f.heure === 'apresmidi' && !(d >= 12 * 60 && d < 18 * 60)) return false;
          if (f.heure === 'soir' && !(d >= 18 * 60)) return false;
        }
        return true;
      }).sort((a, b) => minutes(a.debut) - minutes(b.debut));
    }

    














    _squelette() {
      const bloc = (cl) => '<div class="rp-sk-b ' + cl + '"></div>';
      const jour = '<div class="rp-sk-b rp-sk-jour"></div>';
      const champ = '<div class="rp-sk-b rp-sk-champ"></div>';
      const rangee = '<div class="rp-sk-rang">' +
        '<div class="rp-sk-b rp-sk-h"></div>' +
        '<div class="rp-sk-corps">' +
          '<div class="rp-sk-b rp-sk-titre-r"></div>' +
          '<div class="rp-sk-b rp-sk-meta"></div>' +
        '</div></div>';
      return '' +
        '<div class="rp-root est-v2" aria-busy="true" style="--rp-motif:url(&quot;' + MOTIF + '&quot;)">' +
          '<div class="rp-motif" aria-hidden="true"></div>' +
          '<div class="rp-trait-cadre" aria-hidden="true"><div class="rp-trait"></div></div>' +
          '<div class="rp-sk" aria-hidden="true">' +
            '<div class="rp-sk-hero">' +
              bloc('rp-sk-logo') + bloc('rp-sk-titre') + bloc('rp-sk-stitre') +
            '</div>' +
            '<div class="rp-sk-rail">' + jour.repeat(7) + '</div>' +
            '<div class="rp-sk-outils">' + champ.repeat(4) + '</div>' +
            '<div class="rp-sk-liste">' + rangee.repeat(5) + '</div>' +
          '</div>' +
          '<p class="rp-sr-seul" role="status">Chargement de la programmation…</p>' +
        '</div>';
    }

    _rendre() {
      if (!this._p) {
        this.innerHTML = this._attente ? this._squelette()
          : '<div class="rp-root"><div class="rp-vide">' +
            '<h3>Programmation indisponible</h3><p>La programmation n’a pas pu être chargée. ' +
            'Rafraîchir la page suffit le plus souvent.</p></div></div>';
        this._i18n(this);
        return;
      }
      const p = this._p;
      const jours = this._jours();
      const liste = this._filtrees(this._jour);
      










      const journee = this._type !== 'officielle' ? null
        : (p.journees || []).find(j => j.date === this._jour && j.actif !== false);

      this.innerHTML =
        '<div class="rp-root' + (this._type === 'off' ? ' est-off' : '') +
          ' est-v2" style="--rp-motif:url(&quot;' + MOTIF + '&quot;)">' +
          '<div class="rp-motif" aria-hidden="true"></div>' +
          '<div class="rp-trait-cadre" aria-hidden="true"><div class="rp-trait"></div></div>' +
          this._hero() +
          this._barreJours(jours) +
          this._outils() +
          this._bandeauJournee(journee, liste.length) +
          '<div class="rp-liste" id="rpListe">' + this._avecMaintenant(liste) + '</div>' +
          this._vide(liste.length) +
          


          




          this._mentionOff() +
          (this._type === 'off'
            ? '<div class="rp-sig-off" aria-hidden="true">' +
                '<img src="' + esc(wixContenu(urlSure(p.logoOffPied) || LOGO_OFF_COULEUR, 180)) + '"' +
                  ' srcset="' + esc(wixContenuDensite(urlSure(p.logoOffPied) || LOGO_OFF_COULEUR, 180)) + '"' +
                  ' alt="" loading="lazy" decoding="async">' +
              '</div>'
            : '') +
          this._lienSaintMalo() +
          '<p class="rp-signature" aria-hidden="true">' +
            '<span class="rp-sig-pts"><i></i><i></i><i></i></span>' +
            '<span class="rp-sig-fil"></span>' +
            'Route du Rhum, là où les rêves ' + svg(IC.ancre, 'rp-ic rp-sig-ic') + ' prennent le large' +
            '<span class="rp-sig-fil"></span>' +
            '<span class="rp-sig-pts rp-sig-pts--d"><i></i><i></i><i></i></span>' +
          '</p>' +
        '</div>';

      



      this._i18n(this);
      this._brancher();
      




      this.querySelectorAll('img[data-repli]').forEach(img => {
        const cacher = () => { img.style.display = 'none'; };
        if (img.complete && img.naturalWidth === 0) cacher();
        else img.addEventListener('error', cacher, { once: true });
      });
      



      if (this._juger) this._juger();
      this._centrerJour();
      this._rang = 0;
      this._arrivee();
      







      this._mesurerChiffre();
      



      this._ecrireAdresse();
    }

    










    
















    _estNuit() {
      const h = this._f && this._f.heure;
      if (h === 'soir') return true;
      if (h === 'matin' || h === 'apresmidi') return false;
      return this._maintenant().minute >= 18 * 60;
    }

    _hero() {
      const p = this._p;
      const d = this._jour ? dateDe(this._jour) : null;
      const nuit = this._estNuit();
      const off = this._type === 'off';
      const gp = this._type === 'guadeloupe';
      


      const logo = off ? (urlSure(p.logoOff) || LOGO_OFF_MONO) : urlSure(p.logo);
      


      const logoVille = off ? (urlSure(p.logoSaintMalo) || LOGO_SAINT_MALO) : '';
      









      




      const illus = urlSure(
        (gp && p.illustrationGuadeloupe) ? p.illustrationGuadeloupe
          : (off && p.illustrationOff) ? p.illustrationOff
          : (nuit && p.illustrationNuit) ? p.illustrationNuit
          : p.illustration);
      









      const bascule = this._illusAvant !== undefined && this._illusAvant !== illus;
      this._illusAvant = illus;
      return '<header class="rp-hero' + (illus ? '' : ' est-sans-image') +
        (bascule ? ' est-bascule' : '') + '">' +
        (illus
          ? '<div class="rp-hero-img" aria-hidden="true">' +
              '<img src="' + esc(wixTaille(illus, 1400, 640)) + '"' +
                ' srcset="' + esc(wixTaille(illus, 1400, 640) + ' 1400w, ' +
                               wixTaille(illus, 2800, 1280) + ' 2800w') + '"' +
                ' sizes="100vw" alt="" loading="eager" decoding="async" fetchpriority="high">' +
            '</div>'
          : '') +
        '<div class="rp-hero-voile" aria-hidden="true"></div>' +
        

        








        '<div class="rp-hero-fond" aria-hidden="true">' +
          '<span class="rp-hf-g"><i>' + (d ? this._jc(d).toUpperCase() + '.' : '') +
            '</i><b>' + (d ? String(d.getDate()).padStart(2, '0') : '') + '</b></span>' +
          '<span class="rp-hf-d">' +
            (d ? this._mc(d).toUpperCase() + '.' : '') + '</span>' +
        '</div>' +
        '<div class="rp-hero-dedans">' +
          



          (logoVille ? '<div class="rp-marques">' : '') +
          (logo
            ? '<img class="rp-logo' + (off ? ' rp-logo--off' : '') + '"' +
                

                ' src="' + esc(wixContenu(logo, 240)) + '"' +
                (wixContenuDensite(logo, 240) ? ' srcset="' + esc(wixContenuDensite(logo, 240)) + '"' : '') +
                ' alt="' + esc(this._t(off ? 'Off du Rhum' : 'Route du Rhum')) + '" loading="eager" decoding="async">'
            : '<div class="rp-logo rp-logo--svg" role="img" aria-label="Route du Rhum, destination Guadeloupe">' +
                LOGO_RDR + '</div>') +
          (logoVille
            ? '<img class="rp-logo-tiers"' +
                ' src="' + esc(wixContenu(logoVille, 320)) + '"' +
                (wixContenuDensite(logoVille, 320) ? ' srcset="' + esc(wixContenuDensite(logoVille, 320)) + '"' : '') +
                ' alt="' + esc(this._t('Ville de Saint-Malo')) + '" loading="eager" decoding="async"' +
                


                ' onerror="this.remove()">'
            : '') +
          (logoVille ? '</div>' : '') +
          '<h1 class="rp-titre"><span>Programmation</span><span class="rp-t2">' +
            esc((REGISTRE_NOMS[this._type] || REGISTRE_NOMS.officielle).titre) + '</span></h1>' +
          























          (gp && !p.sousTitreGuadeloupe
            ? ''
            : '<p class="rp-sstitre">' +
                (gp ? esc(p.sousTitreGuadeloupe)
                  : (off && p.sousTitreOff) ? esc(p.sousTitreOff)
                  : p.sousTitre ? esc(p.sousTitre)
                  : 'Du mardi 20 octobre au dimanche 1<sup>er</sup> novembre 2026, ' +
                    'treize jours de fête sur les quais de Saint-Malo.') +
              '</p>') +
        '</div>' +
      '</header>';
    }
    _barreJours(jours) {
      const auj = this._maintenant().jour;
      const parJour = new Map();
      this._anims().forEach(a => {
        if ((a.type || 'officielle') !== this._type) return;
        parJour.set(a.date, (parJour.get(a.date) || 0) + 1);
      });
      const journees = new Set((this._p.journees || []).filter(j => j.actif !== false).map(j => j.date));

      








      const dj = this._jour ? dateDe(this._jour) : null;
      const jourLong = dj
        ? this._jc(dj) + '. ' + dj.getDate() + ' ' + this._mc(dj) + '.'
        : '';
      const combien = this._filtrees(this._jour).length;

      












      return '<nav class="rp-socle" aria-label="Choix du jour">' +
        '<div class="rp-jours-cadre">' +
        '<button type="button" class="rp-fl rp-fl--g" id="rpFlG" aria-label="Jours précédents" hidden>' +
          svg(IC.chevron) + '</button>' +
        '<button type="button" class="rp-fl rp-fl--d" id="rpFlD" aria-label="Jours suivants" hidden>' +
          svg(IC.chevron) + '</button>' +
        '<div class="rp-jours" id="rpJours">' +
        jours.map(iso => {
          const d = dateDe(iso);
          const actif = iso === this._jour;
          const n = parJour.get(iso) || 0;
          






          const jd = dateDe(iso);
          const finDeSemaine = jd.getDay() === 0 || jd.getDay() === 6;
          const cEstAuj = iso === auj;
          const revolu = iso < auj;
          const marques = (cEstAuj ? ' est-auj' : '') +
                          (finDeSemaine ? ' est-we' : '') +
                          (revolu ? ' est-revolu' : '');
          return '<button type="button" class="rp-jour' + marques + '" data-jour="' + esc(iso) + '"' +
            ' aria-pressed="' + (actif ? 'true' : 'false') + '"' +
            


            ' aria-label="' + esc(this._jc(d) + ' ' + d.getDate() + ' ' +
              this._mc(d) + ', ' + this._compte(n) +
              (iso === auj ? (this._lang() === 'en' ? ', today' : ", aujourd'hui") : '')) + '">' +
            '<i>' + esc(this._jc(d)) + '</i>' +
            '<b>' + String(d.getDate()).padStart(2, '0') + '</b>' +
            '<i>' + esc(this._mc(d)) + '</i>' +
            '<span class="rp-jour-pastille"' + (journees.has(iso) ? '' : ' hidden') + '></span>' +
          '</button>';
        }).join('') +
        '</div>' +
        '</div>' +
        '<div class="rp-socle-pied">' +
          this._barreRegistres() +
          '<p class="rp-socle-jour" aria-live="polite">' +
            '<b>' + esc(jourLong) + '</b>' +
            '<span>' + combien + ' rendez-vous</span>' +
          '</p>' +
        '</div>' +
      '</nav>';
    }

    _outils() {
      const p = this._p;
      const f = this._f;
      const pose = f.heure || f.theme || f.lieu || f.cat;
      const n = this._filtrees(this._jour).length;
      const dj = this._jour ? dateDe(this._jour) : null;
      const jourLong = dj
        ? this._jc(dj) + '. ' + dj.getDate() + ' ' + this._mc(dj) + '.'
        : '';

      


      const sel = (cle, icone, libelle, valeur, options) => {
        const choisi = options.find(o => o[0] === valeur);
        return '<div class="rp-champ' + (valeur ? ' est-pose' : '') + '" data-champ="' + esc(cle) + '">' +
          svg(icone) +
          '<button type="button" class="rp-champ-btn" data-vide="' + (valeur ? 'false' : 'true') + '"' +
            ' aria-haspopup="listbox" aria-expanded="false">' +
            esc(choisi ? choisi[1] : libelle) +
          '</button>' +
          svg(IC.chevron, 'rp-ic rp-chev') +
          '<div class="rp-pop" role="listbox" aria-label="' + esc(libelle) + '" hidden>' +
            '<button type="button" class="rp-opt" role="option" data-val=""' +
              ' aria-selected="' + (valeur ? 'false' : 'true') + '">' + esc(libelle) + '</button>' +
            '<div class="rp-opt-sep" aria-hidden="true"></div>' +
            options.map(o => '<button type="button" class="rp-opt" role="option" data-val="' + esc(o[0]) + '"' +
              ' aria-selected="' + (o[0] === valeur ? 'true' : 'false') + '">' + esc(o[1]) + '</button>').join('') +
          '</div>' +
        '</div>';
      };

      
















      const nomsDuType = new Set();
      this._anims().forEach(a => {
        if ((a.type || 'officielle') !== this._type) return;
        if (a.lieu) nomsDuType.add(a.lieu);
        if (a.lieuId) nomsDuType.add(a.lieuId);
      });
      const lieux = (p.lieux || [])
        .filter(l => nomsDuType.has(l.nom) || nomsDuType.has(l.id) || (l.id || l.nom) === f.lieu)
        .map(l => [l.id || l.nom, l.nom]);
      const cats = (p.categories || []).map(c => [pli(c), c]);
      const themes = (p.thematiques || []).map(t => [pli(t), t]);

      return '<div class="rp-outils">' +
        















        '<div class="rp-filtres">' +
          sel('heure', IC.horloge, 'Tous les horaires', f.heure,
              [['matin', 'Matin, avant 12 h'], ['apresmidi', 'Après-midi, 12 h à 18 h'], ['soir', 'Soirée, après 18 h']]) +
          







          sel('lieu', IC.epingle, 'Les lieux', f.lieu, lieux) +
          sel('cat', IC.liste, 'Les catégories', f.cat, cats) +
          (this._pilote && (pose || this._type !== this._registreParDefaut() || this._jourChoisi)
            ? '<button type="button" class="rp-partage" id="rpPartage"' +
                ' aria-label="Partager cette sélection de la programmation">' +
                svg(IC.partage, 'rp-ic') + '<span>Partager</span></button>'
            : '') +
        '</div>' +
        

        










        '<div class="rp-compte">' +
          '<button type="button" class="rp-raz" id="rpRaz"' + (pose ? '' : ' hidden') + '>Tout afficher</button>' +
        '</div>' +
      '</div>';
    }

    




    





















    _bandeauJournee(j, combien) {
      if (!j || !combien) return '<div class="rp-jb" hidden></div>';
      const logo = urlSure(j.logo);
      const vue = urlSure(j.image);
      


      const c = couleurSure(j.couleur);
      const teinte = c
        ? ' style="--rp-jaune:' + c + ';--rp-jb-encre:' + encreSur(c) + '"'
        : '';
      return '<section class="rp-jb' + (vue ? ' est-avec-vue' : '') + '"' + teinte +
          ' aria-label="Journée thématique">' +
        (vue
          ? '<div class="rp-jb-vue" aria-hidden="true">' +
              '<img src="' + esc(wixTaille(vue, 700, 280)) + '"' +
                (wixDensite(vue, 700, 280) ? ' srcset="' + esc(wixDensite(vue, 700, 280)) + '"' : '') +
                ' alt="" loading="lazy" decoding="async" data-repli>' +
              '<span class="rp-jb-biais"></span>' +
            '</div>'
          : '') +
        '<div class="rp-jb-in">' +
          '<div class="rp-jb-texte">' +
            








            '<span class="rp-jb-sur">Journée thématisée</span>' +
            '<h2 class="rp-jb-t">' + esc(j.titre) + '</h2>' +
          '</div>' +
          (j.partenaire || logo
            ? '<div class="rp-jb-part">' +
                '<span class="rp-jb-by">Présenté par</span>' +
                (logo
                  ? '<span class="rp-jb-plaque">' +
                      '<img src="' + esc(logo) + '" alt="' + esc(j.partenaire || '') + '"' +
                        ' loading="lazy" decoding="async" data-repli>' +
                    '</span>'
                  : '<span class="rp-jb-nom">' + esc(j.partenaire) + '</span>') +
              '</div>'
            : '') +
        '</div>' +
      '</section>';
    }


    



    










    _moments() {
      return [
        { cle: 'matin',      lib: 'Matin',        fin: 12 * 60 },
        { cle: 'apresmidi',  lib: 'Après-midi',   fin: 18 * 60 },
        { cle: 'soir',       lib: 'Soirée',       fin: 24 * 60 * 2 }
      ];
    }

    









    _silence() {
      const s = this._p && this._p.heureSilencieuse;
      if (!s || !s.debut || !s.fin) return null;
      if (this._type !== 'officielle') return null;
      const j = this._jour;
      if (!j || (s.du && j < s.du) || (s.au && j > s.au)) return null;
      return s;
    }

    _bandeSilence() {
      const s = this._silence();
      if (!s) return '';
      const ouvert = this._silenceOuvert;
      

      const txt = s.texte || '';
      return '<div class="rp-silence' + (ouvert ? ' est-ouvert' : '') + '" data-silence>' +
        '<div class="rp-h">' +
          '<span class="rp-h1">' + esc(s.debut) + '</span>' +
          


          '<span class="rp-hs" aria-hidden="true">–</span>' +
          '<span class="rp-h2">' + esc(s.fin) + '</span>' +
        '</div>' +
        






        '<button type="button" class="rp-silence-tete"' +
          ' aria-expanded="' + (ouvert ? 'true' : 'false') + '"' +
          (txt ? '' : ' disabled') + '>' +
          svg(IC.silence, 'rp-ic') +
          '<span class="rp-silence-nom">Heure silencieuse</span>' +
          (txt ? '<span class="rp-silence-txt">' + esc(txt) + '</span>' : '') +
          (txt ? svg(IC.chevron, 'rp-ic rp-silence-chev') : '') +
        '</button>' +
      '</div>';
    }

    _avecMaintenant(tout) {
      const now = this._maintenant();
      const moments = this._moments();
      





      const aHeure = (a) => /^\d{1,2}:\d{2}/.test(a.debut || '');
      const liste = tout.filter(aHeure);
      const sansHeure = tout.filter(a => !aHeure(a));
      const remplis = moments.filter(m =>
        liste.some(a => minutes(a.debut) < m.fin &&
          minutes(a.debut) >= (moments[moments.indexOf(m) - 1] || { fin: -1 }).fin));

      const morceaux = [];
      let borneBasse = -1;
      moments.forEach(m => {
        const dedans = liste.filter(a => minutes(a.debut) > borneBasse && minutes(a.debut) <= m.fin);
        borneBasse = m.fin;
        if (!dedans.length) return;
        if (remplis.length > 1) {
          morceaux.push('<h3 class="rp-moment"><span>' + esc(m.lib) + '</span>' +
            '<i>' + dedans.length + '</i></h3>');
        }
        







        dedans.forEach((a, k) => {
          const prec = dedans[k - 1];
          if (prec) {
            const fin = finMinutes(prec);
            const creux = minutes(a.debut) - fin;
            if (creux >= 90) {
              const h = Math.floor(creux / 60), m = creux % 60;
              morceaux.push('<p class="rp-creux" aria-hidden="true"><span>' +
                (h ? h + ' h' + (m ? ' ' + String(m).padStart(2, '0') : '') : m + ' min') +
                ' de libre</span></p>');
            }
          }
          morceaux.push(this._tuile(a));
        });
      });

      if (sansHeure.length) {
         
        if (remplis.length) {
          morceaux.push('<h3 class="rp-moment"><span>' + esc('Horaire à préciser') + '</span>' +
            '<i>' + sansHeure.length + '</i></h3>');
        }
        sansHeure.forEach(a => morceaux.push(this._tuile(a)));
      }

      








      const sil = this._bandeSilence();
      if (sil && morceaux.length) {
        const debut = minutes(this._silence().debut);
        const apres = liste.find(a => minutes(a.debut) >= debut);
        const ou = apres
          ? morceaux.findIndex(x => x.indexOf('data-id="' + apres.id + '"') >= 0)
          : -1;
        if (ou >= 0) morceaux.splice(ou, 0, sil);
        else morceaux.push(sil);
      }

      if (this._jour !== now.jour) return morceaux.join('');
      


      const suivante = liste.find(a => minutes(a.debut) > now.minute);
      if (!suivante) return morceaux.join('');
      const rang = morceaux.findIndex(x => x.indexOf('data-id="' + suivante.id + '"') >= 0);
      if (rang <= 0) return morceaux.join('');
      const h = String(Math.floor(now.minute / 60)).padStart(2, '0') + ':' +
                String(now.minute % 60).padStart(2, '0');
      morceaux.splice(rang, 0, '<div class="rp-now" aria-hidden="true"><span>' + h + '</span></div>');
      return morceaux.join('');
    }

    _tuile(a) {
      const cat = catDe(a.cat || a.catLib);
      const now = this._maintenant();
      const ceJour = a.date === now.jour;
      const d = minutes(a.debut), f = finMinutes(a);
      

      const heuree = /^\d{1,2}:\d{2}/.test(a.debut || '');
      const live = heuree && ceJour && now.minute >= d && now.minute < f;
      const passe = ceJour ? (heuree && now.minute >= f) : a.date < now.jour;
      const annule = a.statut === 'annule';
      const ouvert = this._ouverts.has(a.id);
      const photo = urlSure(a.photo);
      const lien = urlSure(a.lienExterne);
      








      const detail = true;
      const lumiere = !!a.illuminee && !a.vedette;

      const badges =
        (live ? '<span class="rp-badge rp-badge--live">En ce moment</span>' : '') +
        (annule ? '<span class="rp-badge rp-badge--annule">Annulé</span>' : '') +
        (a.statut === 'complet' ? '<span class="rp-badge rp-badge--complet">Complet</span>' : '') +
        (a.reservation ? '<span class="rp-badge rp-badge--resa">Sur réservation</span>' : '') +
        (a.gratuit ? '<span class="rp-badge rp-badge--gratuit">Gratuit</span>' : '') +
        



        (a.vedette ? '' : ecussons(a.classes));

      








      









      const creneau =
        '<span class="rp-h1">' + esc(a.debut || '') + '</span>' +
        



        (a.fin ? '<span class="rp-hs" aria-hidden="true">\u2013</span>' +
                 '<span class="rp-h2">' + esc(a.fin) + '</span>' : '') ;
      const heures = '<div class="rp-h">' + creneau + '</div>';
      const heuresEtat = '<div class="rp-h rp-h--etat">' + creneau +
        (badges ? '<div class="rp-badges rp-h-badges">' + badges + '</div>' : '') + '</div>';

      


      








      const versCarte = a.lieu && a.poiId && (this._p.carteUrl || '');
      














      const meta = '<div class="rp-meta rp-meta--v2">' +
            '<span class="rp-dest">' +
              (a.catLib
                ? '<span class="rp-dest-cat">' + svg(cat.ic) + '<span>' + esc(a.catLib) + '</span></span>'
                : '') +
              (a.lieu ? '<span class="rp-dest-lieu">' + esc(a.lieu) + '</span>' : '') +
            '</span>' +
            (versCarte
              ? '<button type="button" class="rp-dest-b" data-carte="' + esc(a.id) + '"' +
                  ' title="' + esc(this._surLaCarte(a.lieu)) + '"' +
                  ' aria-label="' + esc(this._surLaCarte(a.lieu)) + '">' +
                  svg(IC.carte, 'rp-ic') + '</button>'
              : (a.lieu ? '<span class="rp-dest-p" aria-hidden="true"></span>' : '')) +
          '</div>';

      const classes = ['rp-tuile'];
      if (a.vedette) classes.push('rp-tuile--vedette');
       
      if (lumiere) classes.push('rp-tuile--lumiere');
      if (passe && !live) classes.push('est-passe');
      if (annule) classes.push('est-annule');
      if (live) classes.push('est-live');
      if (ouvert) classes.push('est-ouvert');

      const corps = a.vedette
        ? heuresEtat +
          





          




          (a.lieu
            ? '<span class="rp-vlieu-bloc">' +
                    '<span class="rp-vlieu">' + svg(IC.epingle) +
                      '<span>' + esc(a.lieu) + '</span></span>' +
                    (versCarte
                      ? '<button type="button" class="rp-dest-b" data-carte="' + esc(a.id) + '"' +
                          ' title="' + esc(this._surLaCarte(a.lieu)) + '"' +
                          ' aria-label="' + esc(this._surLaCarte(a.lieu)) + '">' +
                          svg(IC.carte, 'rp-ic') + '</button>'
                      : '') +
                  '</span>'
            : '') +
          









          (photo
            ? '<div class="rp-vfond" aria-hidden="true">' +
                '<img src="' + esc(wixTaille(photo, 1180, 340)) + '"' +
                  (wixDensite(photo, 1180, 340) ? ' srcset="' + esc(wixDensite(photo, 1180, 340)) + '"' : '') +
                  ' alt="" loading="lazy" decoding="async" data-repli>' +
              '</div>'
            : '') +
          '<div class="rp-vscene">' +
            










            '<span class="rp-vtitre">' + esc(a.titre || a.catLib) + '</span>' +
            




            














            (function () {
              const sg = signeSvg(a.cat || a.catLib);
              const ec = a.vedette ? ecussons(a.classes) : '';
              if (!sg && !ec) return '';
              return '<span class="rp-vbande">' + sg +
                (ec ? '<span class="rp-vecus">' + ec + '</span>' : '') + '</span>';
            })() +
            




            








            

            


          '</div>' +
          


          '<span class="rp-vfilet" aria-hidden="true"></span>' +
          '<div class="rp-vpast">' +
            '<span class="rp-rond">' + svg(cat.ic) + '</span>' +
            




            (a.catLib ? '<small>' + esc(a.catLib) + '</small>' : '') +
            



            signeSvg(a.cat || a.catLib) +
          '</div>'
        : (lumiere ? '<div class="rp-lum" aria-hidden="true"></div>' : '') +
          heures +
          '<div class="rp-titre-t">' +
            esc(a.titre) +
            

            (lumiere ? this._bandeLumiere(a) : '') +
            








            (a.desc ? '<p class="rp-accroche">' + esc(a.desc) + '</p>' : '') +
            (badges ? '<div class="rp-badges" style="margin-top:6px">' + badges + '</div>' : '') +
          '</div>' +
          meta;

      const balise = 'div';
      




      const teinte = a.vedette ? vifDe(a.cat || a.catLib) : cat.c;
      



      return '<article class="' + classes.join(' ') + '" style="--c:' + teinte +
        ';--i:' + (this._rang = (this._rang || 0) + 1) + '" data-id="' + esc(a.id) + '">' +
        '<div class="rp-tete">' +
          '<button type="button" class="rp-zone" aria-expanded="' + (ouvert ? 'true' : 'false') +
            '" aria-controls="rp-d-' + esc(a.id) + '"><span class="rp-hors">' +
            esc(a.titre) + ', ' + esc(a.debut) + '</span></button>' +
          corps +
          




          '<span class="rp-ouvre" aria-hidden="true">' + svg(IC.chevron) + '</span>' +
        '</div>' +
        





        (detail ? this._detail(a, photo, lien) : '') +
      '</article>';
    }

    













    










    _recurrence(a) {
      if (!this._rec) {
        const m = new Map();
        this._anims().forEach(x => {
          const k = (x.type || '') + '|' + pli(x.titre);
          if (!m.has(k)) m.set(k, new Set());
          m.get(k).add(x.date);
        });
        this._rec = m;
      }
      const dates = this._rec.get((a.type || '') + '|' + pli(a.titre));
      return dates ? dates.size : 0;
    }
    _bandeLumiere(a) {
      const n = this._recurrence(a);
      const soir = minutes(a.debut) >= 18 * 60;
      const mention = n >= 5 ? (soir ? 'Tous les soirs' : 'Tous les jours') : '';
      const sg = signeSvg(a.cat || a.catLib);
      if (!sg && !mention) return '';
      return '<span class="rp-lum-bande">' + sg +
        (mention ? '<span class="rp-lum-chip">' + svg(IC.etincelle, 'rp-ic') + mention + '</span>' : '') +
      '</span>';
    }

    _detail(a, photo, lien) {
      const cat = catDe(a.cat || a.catLib);

      

       
      








      const AFFICHER_DUREE = false;
      const d = minutes(a.debut), f = /^\d{1,2}:\d{2}/.test(a.fin || '') ? finMinutes(a) : 0;
      let duree = '';
      if (AFFICHER_DUREE && f > d) {
        const m = f - d, h = Math.floor(m / 60), r = m % 60;
        duree = h ? (h + ' h' + (r ? ' ' + String(r).padStart(2, '0') : '')) : (m + ' min');
      }

      


      const acces = a.statut === 'complet' ? 'Complet'
        : a.reservation ? 'Sur réservation'
        : a.gratuit ? 'Gratuit, accès libre'
        : '';

      const faits = [
        duree ? ['Durée', duree] : null,
        acces ? ['Accès', acces] : null,
        a.themeLib ? ['Thématique', a.themeLib] : null,
        a.lieu ? ['Lieu', a.lieu] : null
      ].filter(Boolean);

      

      const vide = !a.desc && !photo && !lien && faits.length < 2;

      

      const ecoute = lienSpotify(a.spotify);

      const actions = (lien
        ? '<a class="rp-cta rp-cta--fort" href="' + esc(lien) + '" target="_blank" rel="noopener noreferrer">' +
            (a.reservation ? 'Réserver' : 'En savoir plus') + svg(IC.fleche) + '</a>'
        : '') +
        (ecoute
          ? '<a class="rp-spotify" href="' + esc(ecoute) + '" target="_blank" rel="noopener noreferrer">' +
              svgPlein(LOGO_SPOTIFY, 'rp-ic rp-ic--spotify') +
              '<span>Écouter sur Spotify</span></a>'
          : '');

      return '<div class="rp-plus" id="rp-d-' + esc(a.id) + '"><div><div class="rp-plus-in' +
          (actions ? ' rp-plus-in--actions' : '') + '">' +
        






        (faits.length
          ? '<dl class="rp-faits">' + faits.map(([k, v]) =>
              '<div><dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd></div>').join('') + '</dl>'
          : '') +
        (a.desc ? '<p class="rp-desc">' + esc(a.desc) + '</p>' : '') +
        (vide ? '<p class="rp-desc rp-desc--attente">' +
          'Le détail de cette animation n’est pas encore publié. ' +
          'Il le sera au fil des semaines.</p>' : '') +
        (photo && !a.vedette
          ? '<figure class="rp-photo"><img src="' + esc(photo) + '" alt="" loading="lazy" decoding="async" data-repli></figure>'
          : '') +
        



        (actions ? '<div class="rp-actions">' + actions + '</div>' : '') +
      '</div></div></div>';
    }
    








    _vide(n) {
      if (n) return '<div class="rp-vide" hidden></div>';

      









      if (this._p && this._p.complet === false && !this._anims().length) {
        return '<div class="rp-vide">' +
          '<span class="rp-vide-ic" aria-hidden="true">' + svg(IC.horloge) + '</span>' +
          '<h3>La programmation n’a pas pu être chargée</h3>' +
          '<p>La connexion a été trop longue. La programmation est bien là, ' +
            'elle n’est pas encore arrivée jusqu’ici.</p>' +
          '<div class="rp-vide-actions">' +
            '<button type="button" class="rp-cta rp-cta--fort" id="rpRecharger">Réessayer</button>' +
          '</div>' +
        '</div>';
      }

      const filtre = this._f.heure || this._f.theme || this._f.lieu || this._f.cat;

      

      const jours = this._jours();
      const ici = jours.indexOf(this._jour);
      let proche = null, ecart = Infinity;
      if (ici >= 0) jours.forEach((d, k) => {
        if (d === this._jour) return;
        const combien = this._anims().filter(a =>
          a.date === d && (a.type || 'officielle') === this._type).length;
        if (!combien) return;
        const e = Math.abs(k - ici) * 2 + (k < ici ? 1 : 0);
        if (e < ecart) { ecart = e; proche = { date: d, combien }; }
      });

      const nomDe = (iso) => {
        const d = dateDe(iso);
        return this._jc(d) + '. ' + d.getDate() + ' ' + this._mc(d) + '.';
      };

      return '<div class="rp-vide">' +
        '<span class="rp-vide-ic" aria-hidden="true">' + svg(IC.horloge) + '</span>' +
        '<h3>' + (filtre ? 'Aucun rendez-vous avec ces filtres' : 'Rien à cette date') + '</h3>' +
        '<p>' + (filtre
          ? 'Ce jour-là, rien ne correspond à ce que vous avez choisi. En retirer un suffit souvent.'
          : 'Ce jour n’a pas encore de programmation publiée. Elle se remplit au fil des semaines.') + '</p>' +
        '<div class="rp-vide-actions">' +
          (filtre ? '<button type="button" class="rp-cta rp-cta--fort" id="rpRaz2">Tout afficher</button>' : '') +
          (proche
            ? '<button type="button" class="rp-cta" data-aller-jour="' + esc(proche.date) + '">' +
                'Aller au ' + esc(nomDe(proche.date)) +
                ' <em>' + proche.combien + '</em>' + svg(IC.fleche) + '</button>'
            : '') +
        '</div>' +
      '</div>';
    }
     

    _brancher() {
      const q = (s) => this.querySelector(s);

      


      const barre = q('#rpJours'), flG = q('#rpFlG'), flD = q('#rpFlD');
      if (barre && flG && flD) {
        const juger = () => {
          const reste = barre.scrollWidth - barre.clientWidth;
          flG.hidden = reste < 4 || barre.scrollLeft < 6;
          flD.hidden = reste < 4 || barre.scrollLeft > reste - 6;
           
          const cadre = barre.parentElement;
          if (cadre) {
            cadre.classList.toggle('a-gauche', !flG.hidden);
            cadre.classList.toggle('a-droite', !flD.hidden);
          }
        };
        const bond = () => Math.max(120, Math.round(barre.clientWidth * 0.7));
        flG.addEventListener('click', () => barre.scrollBy({ left: -bond(), behavior: 'smooth' }));
        flD.addEventListener('click', () => barre.scrollBy({ left: bond(), behavior: 'smooth' }));
        barre.addEventListener('scroll', juger, { passive: true });
        this._jugerFleches = juger;
        juger();
      }

      this.querySelectorAll('.rp-jour').forEach(b =>
        b.addEventListener('click', () => {
          this._jour = b.dataset.jour; this._jourChoisi = true; this._rendre();
        }));

      this.querySelectorAll('.rp-bascule button').forEach(b =>
        b.addEventListener('click', () => this._choisirRegistre(b.dataset.type)));

      const retour = q('#rpRetourSM');
      if (retour) retour.addEventListener('click', (ev) => {
        ev.preventDefault();
        this._choisirRegistre('officielle');
      });

      this._brancherChamps();

      const raz = () => { this._f = { heure: '', theme: '', lieu: '', cat: '' }; this._rendre(); };
      const r1 = q('#rpRaz'); if (r1) r1.addEventListener('click', raz);
      const r2 = q('#rpRaz2'); if (r2) r2.addEventListener('click', raz);

      








      const bp = q('#rpPartage');
      if (bp) bp.addEventListener('click', async () => {
        const url = this._adresse();
        if (!url) return;
        const titre = document.title || (this._lang() === 'en' ? 'Programme' : 'Programmation') + ', Route du Rhum';
        try {
          if (navigator.share) { await navigator.share({ title: titre, url }); return; }
          await navigator.clipboard.writeText(url);
          this._direPartage('Lien copié');
        } catch (e) {
          if (e && e.name === 'AbortError') return;
          this._direPartage('Copie impossible');
        }
      });
      



      const rc = q('#rpRecharger');
      if (rc) rc.addEventListener('click', () => {
        try { location.reload(); } catch (e) {   }
      });
      


      this.querySelectorAll('[data-aller-jour]').forEach(b =>
        b.addEventListener('click', () => {
          this._jour = b.dataset.allerJour;
          this._jourChoisi = true;
          this._rendre();
          const so = this.querySelector('.rp-socle');
          if (so) so.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }));

      



      const liste = q('#rpListe');
      if (liste) liste.addEventListener('click', (e) => {
         
         
        const bc = e.target.closest('[data-carte]');
        if (bc) {
          const a = this._anims().find(x => x.id === bc.dataset.carte);
          if (a) this._ouvrirCarte(a);
          return;
        }
        

        const bs = e.target.closest('.rp-silence-tete');
        if (bs) {
          const bande = bs.closest('.rp-silence');
          this._silenceOuvert = !this._silenceOuvert;
          if (bande) bande.classList.toggle('est-ouvert', this._silenceOuvert);
          bs.setAttribute('aria-expanded', this._silenceOuvert ? 'true' : 'false');
          return;
        }
        const zone = e.target.closest('.rp-zone');
        if (!zone) return;
        const tete = zone.parentElement;
        const art = tete.closest('.rp-tuile');
        const id = art && art.dataset.id;
        if (!id) return;
        const ouvert = this._ouverts.has(id);
        if (ouvert) this._ouverts.delete(id); else this._ouverts.add(id);
        art.classList.toggle('est-ouvert', !ouvert);
        zone.setAttribute('aria-expanded', ouvert ? 'false' : 'true');
        this._emit('programme-animation', { id, ouvert: !ouvert });
      });
    }

     

    _ouvrirCarte(a) {
      const carte = urlSure(this._p.carteUrl || '');
      const cat = catDe(a.cat || a.catLib);
      












      









      const carteNue = urlSure(this._p.carteEncadreUrl || '') || carte;
      const joindre = (u, q) => u + (u.includes('?') ? '&' : '?') + q;
      const lien = a.poiId ? joindre(carte, 'poi=' + encodeURIComponent(a.poiId)) : carte;
      const lienCadre = a.poiId ? joindre(carteNue, 'poi=' + encodeURIComponent(a.poiId)) : carteNue;

      

      const ici = pli(a.lieu || '');
      const autresIci = !ici ? [] : this._anims()
        .filter(x => x.id !== a.id && x.date === a.date && pli(x.lieu || '') === ici)
        .sort((x, y) => minutes(x.debut) - minutes(y.debut))
        .slice(0, 4);

      const hote = document.createElement('div');
      hote.className = 'rp-root' + (this._type === 'off' ? ' est-off' : '');
      hote.innerHTML =
        '<div class="rp-modale" role="dialog" aria-modal="true" aria-label="' +
            esc(this._t(a.lieu || 'Sur la carte')) + '">' +
          '<div class="rp-mod" style="--c:' + cat.c + '">' +
            




            '<div class="rp-mod-tete">' +
              '<span class="rp-mod-rond">' + svg(cat.ic) + '</span>' +
              '<div class="rp-mod-txt">' +
                '<h2>' + esc(a.lieu || '') + '</h2>' +
                '<div class="rp-mod-sous">' +
                  '<span class="rp-mod-cr">' + esc(a.debut || '') +
                    (a.fin ? ' – ' + esc(a.fin) : '') + '</span>' +
                  '<span class="rp-mod-ti">' + esc(a.titre) + '</span>' +
                '</div>' +
              '</div>' +
              '<button type="button" class="rp-mod-x" aria-label="Fermer">' + svg(IC.croix) + '</button>' +
            '</div>' +
            '<div class="rp-mod-vue">' +
              (a.poiId
                ? '<div class="rp-mod-attente">Chargement de la carte</div>'
                : '<div class="rp-mod-hors">' + svg(IC.epingle) +
                  '<p><b>' + esc(a.lieu || 'Ce lieu') + ' n’est pas sur le plan du village.</b>' +
                  'Le point sera posé dès que l’implantation sera arrêtée.</p></div>') +
            '</div>' +
            






            (autresIci.length
              ? '<div class="rp-mod-ici">' +
                  '<p class="rp-mod-ici-t">' + svg(IC.epingle) +
                    '<span>' + autresIci.length + ' autre' + (autresIci.length > 1 ? 's' : '') +
                    ' rendez-vous ici aujourd’hui</span></p>' +
                  '<ul>' + autresIci.map(x => {
                    const c2 = catDe(x.cat || x.catLib);
                    return '<li><button type="button" data-aller="' + esc(x.id) + '">' +
                      '<span class="rp-mod-ici-h">' + esc(x.debut || '') + '</span>' +
                      '<span class="rp-mod-ici-n">' + esc(x.titre) + '</span>' +
                      '<span class="rp-mod-ici-c" style="--c:' + c2.c + '">' + svg(c2.ic) + '</span>' +
                    '</button></li>';
                  }).join('') + '</ul>' +
                '</div>'
              : '') +
            '<div class="rp-mod-pied">' +
              '<a class="rp-cta rp-cta--fort" href="' + esc(lien) + '">' +
                'Voir la carte complète' + svg(IC.fleche) + '</a>' +
              '<button type="button" class="rp-cta" data-fermer>Revenir à la programmation</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      


      this._i18n(hote);
      document.body.appendChild(hote);

      


      if (a.poiId) {
        const vue = hote.querySelector('.rp-mod-vue');
        const cadre = document.createElement('iframe');
        cadre.title = 'Carte du village, ' + (a.lieu || '');
        cadre.loading = 'eager';
        cadre.src = joindre(lienCadre, 'encadre=1');
        







        const ATTENTE_MAX = 12000;
        const minuteur = setTimeout(() => {
          if (!hote.isConnected) return;
          const att = hote.querySelector('.rp-mod-attente');
          if (!att) return;
          cadre.remove();
          att.className = 'rp-mod-hors';
          att.innerHTML = svg(IC.epingle) +
            '<p><b>La carte n’a pas pu s’afficher ici.</b>' +
            'Le bouton ci-dessous l’ouvre en entier, dans un nouvel onglet.</p>';
          this._i18n(att);
        }, ATTENTE_MAX);
        cadre.addEventListener('load', () => {
          clearTimeout(minuteur);
          const att = hote.querySelector('.rp-mod-attente');
          if (att) att.remove();
        }, { once: true });
        vue.appendChild(cadre);
      }

       
       
      const y = window.scrollY;
      const htm = document.documentElement;
      const styleAvant = htm.style.cssText;
      htm.style.overflow = 'hidden';

      const rendu = document.activeElement;
      const fermer = () => {
        hote.remove();
        htm.style.cssText = styleAvant;
        window.scrollTo(0, y);
        removeEventListener('keydown', auClavier, true);
        if (rendu && rendu.focus) rendu.focus();
      };
      const auClavier = (e) => { if (e.key === 'Escape') { e.stopPropagation(); fermer(); } };
      addEventListener('keydown', auClavier, true);

      hote.querySelector('.rp-mod-x').addEventListener('click', fermer);
      


      hote.querySelectorAll('[data-aller]').forEach(b => b.addEventListener('click', () => {
        const id = b.dataset.aller;
        fermer();
        this._ouverts.add(id);
        this._rendre();
        const cible = this.querySelector('.rp-tuile[data-id="' + id.replace(/"/g, '') + '"]');
        if (cible) {
          cible.scrollIntoView({ block: 'center', behavior: 'smooth' });
          cible.classList.add('est-visee');
          setTimeout(() => cible.classList.remove('est-visee'), 1800);
        }
      }));
      hote.querySelector('[data-fermer]').addEventListener('click', fermer);
       
      hote.querySelector('.rp-modale').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) fermer();
      });
      hote.querySelector('.rp-mod-x').focus();
      this._emit('programme-carte', { id: a.id, lieu: a.lieu || '', poiId: a.poiId || '' });
    }

     

    _fermerChamps(sauf) {
      this.querySelectorAll('.rp-champ').forEach(ch => {
        if (ch === sauf) return;
        ch.classList.remove('est-ouvert');
        const pop = ch._pop || ch.querySelector('.rp-pop');
        const btn = ch.querySelector('.rp-champ-btn');
        if (pop) pop.hidden = true;
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }

    





    _poserPop(champ) {
      const pop = champ._pop || champ.querySelector('.rp-pop');
      const btn = champ.querySelector('.rp-champ-btn');
      if (!pop || !btn) return;
      const r = champ.getBoundingClientRect();
      pop.style.visibility = 'hidden';
      pop.hidden = false;
      const h = pop.offsetHeight;
      const dessous = innerHeight - r.bottom - 10;
      const dessus = r.top - 10;
      const versLeHaut = dessous < Math.min(h, 200) && dessus > dessous;
      pop.style.top = versLeHaut ? Math.max(8, r.top - h - 6) + 'px' : (r.bottom + 6) + 'px';
      pop.style.maxHeight = Math.max(120, (versLeHaut ? dessus : dessous)) + 'px';
       
      const l = Math.min(Math.max(8, r.left), innerWidth - pop.offsetWidth - 8);
      pop.style.left = l + 'px';
      pop.style.minWidth = Math.min(r.width, innerWidth - 16) + 'px';
      pop.style.visibility = '';
    }

    _brancherChamps() {
      const champs = [...this.querySelectorAll('.rp-champ')];
      champs.forEach(champ => {
        const btn = champ.querySelector('.rp-champ-btn');
        const pop = champ._pop || champ.querySelector('.rp-pop');
        const cle = champ.dataset.champ;
        if (!btn || !pop || !cle) return;

        






















        const racine = this.querySelector('.rp-root');
        if (racine && pop.parentElement !== racine) {
          racine.appendChild(pop);
          champ._pop = pop;
        }

        btn.addEventListener('click', () => {
          const ouvert = champ.classList.contains('est-ouvert');
          this._fermerChamps(ouvert ? null : champ);
          if (ouvert) {
            champ.classList.remove('est-ouvert');
            pop.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
          } else {
            champ.classList.add('est-ouvert');
            this._poserPop(champ);
            btn.setAttribute('aria-expanded', 'true');
            const choisi = pop.querySelector('.rp-opt[aria-selected="true"]');
            if (choisi) choisi.focus();
          }
        });

        pop.addEventListener('click', (e) => {
          const opt = e.target.closest('.rp-opt');
          if (!opt) return;
          this._f[cle] = opt.dataset.val || '';
          this._rendre();
        });
      });

      if (!champs.length) return;
       
      if (this._horsChamp) {
        removeEventListener('click', this._horsChamp, true);
        removeEventListener('keydown', this._echap, true);
        removeEventListener('scroll', this._suivre, true);
        removeEventListener('resize', this._suivre);
      }
      





      this._horsChamp = (e) => {
        const c = e.target.closest;
        if (!c || (!e.target.closest('.rp-champ') && !e.target.closest('.rp-pop'))) this._fermerChamps(null);
      };
      this._echap = (e) => { if (e.key === 'Escape') this._fermerChamps(null); };
      

      this._suivre = () => {
        const ouvert = this.querySelector('.rp-champ.est-ouvert');
        if (ouvert) this._poserPop(ouvert);
      };
      addEventListener('click', this._horsChamp, true);
      addEventListener('keydown', this._echap, true);
      addEventListener('scroll', this._suivre, true);
      addEventListener('resize', this._suivre);
    }

    




    _centrerJour() {
      const barre = this.querySelector('#rpJours');
      const actif = this.querySelector('.rp-jour[aria-pressed="true"]');
      if (!barre || !actif) return;
      const cible = actif.offsetLeft - (barre.clientWidth - actif.offsetWidth) / 2;
      const doux = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      try { barre.scrollTo({ left: Math.max(0, cible), behavior: doux ? 'smooth' : 'auto' }); }
      catch (e) { barre.scrollLeft = Math.max(0, cible); }
      if (this._jugerFleches) setTimeout(this._jugerFleches, 420);
    }

    


    _direPartage(mot) {
      const b = this.querySelector('#rpPartage');
      if (!b) return;
      clearTimeout(this._minutPartage);
      const texte = b.querySelector('span');
      if (!texte) return;
      if (!this._motPartage) this._motPartage = texte.textContent;
      texte.textContent = mot;
      b.classList.add('est-dit');
      this._minutPartage = setTimeout(() => {
        texte.textContent = this._motPartage;
        b.classList.remove('est-dit');
      }, 2200);
    }

    _emit(nom, detail) {
      try { this.dispatchEvent(new CustomEvent(nom, { detail, bubbles: true, composed: true })); }
      catch (e) {   }
    }

    







    _params() {
      const p = new URLSearchParams();
      



      if (this._type !== this._registreParDefaut()) p.set('type', this._type);
      if (this._jourChoisi) p.set('jour', this._jour);
      if (this._f.heure) p.set('heure', this._f.heure);
      if (this._f.lieu) {
        const l = (this._p && this._p.lieux || []).find(x => (x.id || x.nom) === this._f.lieu);
        p.set('lieu', pli(l ? l.nom : this._f.lieu));
      }
      if (this._f.cat) p.set('cat', this._f.cat);
      return p;
    }

    _adresse() {
      try {
        const p = this._params().toString();
        return location.origin + location.pathname + (p ? '?' + p : '');
      } catch (e) { return ''; }
    }

    









    _ecrireAdresse() {
      if (!this._pilote || !this._p) return;
      try {
        const p = this._params().toString();
        history.replaceState(history.state, '', location.pathname + (p ? '?' + p : '') + location.hash);
        this._titrer();
      } catch (e) {   }
    }

    


    _titrer() {
      try {
        if (!this._titreOrigine) this._titreOrigine = document.title;
        const bouts = [];
        if (this._jourChoisi && this._jour) {
          const d = dateDe(this._jour);
          bouts.push(this._jc(d) + ' ' + d.getDate() + ' ' + this._mc(d));
        }
        if (this._type !== this._registreParDefaut()) bouts.push(REGISTRE_NOMS[this._type].titre);
        document.title = bouts.length
          ? (this._lang() === 'en' ? 'Programme, ' : 'Programmation, ') + bouts.join(', ') + ' | Route du Rhum'
          : this._titreOrigine;
      } catch (e) {   }
    }
  }

  customElements.define('rdr-programme', RdrProgramme);
})();
})();
