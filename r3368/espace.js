/* rdr-elements espace | source route-du-rhum ede21c7 | espace-rhum.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["espace"]="ede21c7";performance.mark("rdr-elements:espace")}catch(e){}
;(function(){
if (!customElements.get('espace-rhum')) {

   
  const STYLE_ID_TOKENS = 'er-tokens-style';

  













   
   
   
  const CLASSES_CONFIG = [
     
     
    { key: 'ultim',         label: 'Ultim',         col: '#659FBF', id: 'b859b1f9-39d1-4264-8a19-daf691dd47dd', icon: 'https://static.wixstatic.com/shapes/7bb303_0ed87d76a89f4e6ebd6008778014958e.svg' },
    { key: 'ocean-fifty',   label: 'Ocean Fifty',   col: '#72b9f1', id: 'cdad4012-7ff9-4207-a238-1c0daf0c6572', icon: 'https://static.wixstatic.com/shapes/7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
    { key: 'class40',       label: 'Class40',       col: '#7e93ef', id: 'efb7ffa1-2686-40a0-81d6-aa6ac49fd04d', icon: 'https://static.wixstatic.com/shapes/7bb303_b13535fe4621478fb5fb52e98c751b11.svg' },
    { key: 'imoca',         label: 'IMOCA',         col: '#76bcbe', id: 'd08f2d1d-2e91-4a9f-90cf-daa18f0de81d', icon: 'https://static.wixstatic.com/shapes/7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg' },
    { key: 'vintage-mono',  label: 'Vintage Mono',  col: '#f9f06e', id: '94a27971-6083-4f1e-8a6c-8aa84af02058', icon: 'https://static.wixstatic.com/shapes/7bb303_9b4ee8478c6b4453b668b04eb278406c.svg' },
    { key: 'vintage-multi', label: 'Vintage Multi', col: '#f19f39', id: 'c26817ae-c541-4a85-b132-48da38e31c14', icon: 'https://static.wixstatic.com/shapes/7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg' }
  ];

   
  const CARD_ROTATIONS = [-0.5, 0.4, -0.3, 0.5, -0.4, 0.3, -0.5, 0.4, -0.2, 0.5, -0.4, 0.3, 0.5, -0.3, 0.4, -0.5, 0.2, -0.4, 0.5, -0.3, 0.5, -0.2, 0.4, -0.5, 0.3, -0.4, 0.5, -0.3];

   
  const ICON_DASHBOARD    = '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>';
  const ICON_SKIPPER_JOUR = '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  const ICON_SKIPPERS     = '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
  const ICON_ACTUS        = '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="13" y2="18"/></svg>';
  const ICON_BADGES       = '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>';
  const ICON_STATS        = '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>';
  const ICON_TROPHY       = '<svg class="er-sidebar-rank-icon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>';
  const ICON_GEAR         = '<svg class="er-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>';
  const ICON_ARROW_RIGHT  = '<svg class="er-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  const ICON_PLUS         = '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  const ICON_LOCK         = '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

  const HEART_SVG = '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  

















  const ICON_CHECK   = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
  const ICON_TROPHY_LARGE = '<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>';
  const ICON_CHEVRON_DOWN = '<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  const ICON_SORTIE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>';
  const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>';
   
   
  const ICON_CLOCK_SM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>';
  const MEDIA_GLYPHS = {
    video:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>',
    image:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.1-2h8.4l1.1 2h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.4"/></svg>',
    audio:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><line x1="12" y1="18" x2="12" y2="21.5"/></svg>',
    interview: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 6.5c-2.4 0-4 1.8-4 4.1 0 2.2 1.5 3.9 3.7 3.9.3 0 .6 0 .9-.1-.5 1.7-1.9 2.8-3.6 3.2l.5 1.9c3.3-.7 5.6-3.4 5.6-7.2 0-3.4-1.4-5.8-3.1-5.8zm9 0c-2.4 0-4 1.8-4 4.1 0 2.2 1.5 3.9 3.7 3.9.3 0 .6 0 .9-.1-.5 1.7-1.9 2.8-3.6 3.2l.5 1.9c3.3-.7 5.6-3.4 5.6-7.2 0-3.4-1.4-5.8-3.1-5.8z"/></svg>'
  };
  const MEDIA_LABELS = { video: 'Vidéo', image: 'Photo', audio: 'Audio', interview: 'Entretien' };

   
   
   
   
   
  const CIVILITE_OPTIONS = [
    { v: 'madame',   l: 'Madame' },
    { v: 'monsieur', l: 'Monsieur' },
    { v: 'autre',    l: 'Autre' },
    { v: 'nsp',      l: 'Je préfère ne pas dire' }
  ];
   
   
   
  const IC_ = (d, extra) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + (extra || '') + '</svg>';
  const VILLAGE_VENUE_OPTIONS = [
    { v: 'oui',      l: 'Oui, c\'est sûr',      ic: IC_('<polyline points="20 6 9 17 4 12"/>') },
    { v: 'peutetre', l: 'Peut-être',            ic: IC_('<circle cx="12" cy="12" r="9"/><path d="M9.2 9.2a3 3 0 0 1 5.6 1.1c0 2-2.8 2.5-2.8 4"/><circle cx="12" cy="17.4" r="0.8" fill="currentColor" stroke="none"/>') },
    { v: 'non',      l: 'Non, pas cette fois',  ic: IC_('<path d="M18 6 6 18M6 6l12 12"/>') }
  ];
  const VILLAGE_TRANSPORT_OPTIONS = [
    { v: 'train',       l: 'Train',       ic: IC_('<rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 11h14"/><path d="M8 20l-2 2M16 20l2 2"/><circle cx="8.6" cy="13.6" r="1" fill="currentColor" stroke="none"/><circle cx="15.4" cy="13.6" r="1" fill="currentColor" stroke="none"/><path d="M7 16h10"/>') },
    { v: 'covoiturage', l: 'Covoiturage', ic: IC_('<circle cx="9" cy="7.5" r="2.6"/><circle cx="16.5" cy="9" r="2"/><path d="M3.5 20v-1.6A4.4 4.4 0 0 1 7.9 14h2.2a4.4 4.4 0 0 1 4.4 4.4V20"/><path d="M16.2 13.6h.6a3.7 3.7 0 0 1 3.7 3.7V20"/>') },
    { v: 'bus',         l: 'Bus ou car',  ic: IC_('<rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 9h16"/><path d="M7 21v-2M17 21v-2"/><circle cx="8" cy="13.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="16" cy="13.5" r="1.1" fill="currentColor" stroke="none"/>') },
    { v: 'voiture',     l: 'Voiture',     ic: IC_('<path d="M5 16.5V19a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-2.5"/><path d="M21.5 16.5V19a1 1 0 0 1-1 1H20a1 1 0 0 1-1-1v-2.5"/><path d="M2.5 16.5v-4l2-5A2 2 0 0 1 6.4 6h11.2a2 2 0 0 1 1.9 1.5l2 5v4z"/><path d="M5 10.5h14"/><circle cx="6.5" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="17.5" cy="14" r="1" fill="currentColor" stroke="none"/>') },
    { v: 'velo',        l: 'Vélo',        ic: IC_('<circle cx="5.8" cy="17" r="3.4"/><circle cx="18.2" cy="17" r="3.4"/><path d="M5.8 17 10 8h4l4.2 9"/><path d="M9 8h5"/><circle cx="16" cy="5" r="1.2" fill="currentColor" stroke="none"/>') },
    { v: 'pied',        l: 'À pied',      ic: IC_('<circle cx="12.5" cy="4" r="1.8"/><path d="M11 21l1.2-5.2-2.4-2.3.9-4.2 3.4 1.6 2.3 2.1"/><path d="M9.7 9.3 7 11.4"/><path d="M12.2 15.8 9.4 21"/>') },
    { v: 'autre',       l: 'Autre',       ic: IC_('<circle cx="12" cy="12" r="9"/><path d="M8.5 12h7M12 8.5v7"/>') }
  ];
   
   
   
   
  const VOILE_OPTIONS = [
    { v: 'pratiquant',  l: 'Je navigue régulièrement', ic: IC_('<path d="M3 18h18l-2 3H5z"/><path d="M12 3v12"/><path d="M12 5 5 15h14z"/>') },
    { v: 'occasionnel', l: 'De temps en temps',        ic: IC_('<path d="M3 18.5c1.6 0 1.6 1.2 3.2 1.2s1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2"/><path d="M12 4v10"/><path d="M12 6 6.5 14h11z"/>') },
    { v: 'ancien',      l: 'J\'ai navigué avant',      ic: IC_('<path d="M3.05 11a9 9 0 1 1 .5 4"/><polyline points="3 4 3 10 9 10"/><polyline points="12 8 12 12 15 13.5"/>') },
    { v: 'passionne',   l: 'Je suis, sans pratiquer',  ic: IC_('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/>') },
    { v: 'decouvre',    l: 'Je découvre',              ic: IC_('<path d="M12 3v3M12 18v3M4.2 7.2l2.1 2.1M17.7 14.7l2.1 2.1M3 12h3M18 12h3M4.2 16.8l2.1-2.1M17.7 9.3l2.1-2.1"/><circle cx="12" cy="12" r="2.4"/>') }
  ];
   
   
   
   
   
  const COURSES_OPTIONS = [
    { v: 'regulierement', l: 'Oui, régulièrement',  ic: IC_('<path d="M3 18h18l-2 3H5z"/><path d="M12 3v12"/><path d="M12 5 5 15h14z"/>') },
    { v: 'parfois',       l: 'De temps en temps',   ic: IC_('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>') },
    { v: 'non',           l: 'Non, juste la Route du Rhum',  ic: IC_('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" opacity=".0"/><circle cx="12" cy="12" r="9"/><path d="M9 12h6"/>') }
  ];
   
  const CANAL_OPTIONS = [
    { v: 'tv',      l: 'À la télévision',        ic: IC_('<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M8 21h8"/><path d="m8 6 4-3 4 3"/>') },
    { v: 'presse',  l: 'Presse ou radio',        ic: IC_('<path d="M4 5h11v14H4z"/><path d="M15 9h5v8a2 2 0 0 1-2 2h-3"/><path d="M7 8.5h5M7 12h5M7 15.5h5"/>') },
    { v: 'reseaux', l: 'Sur les réseaux',        ic: IC_('<circle cx="18" cy="5.5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="18.5" r="2.6"/><path d="m8.3 10.7 7.4-3.9M8.3 13.3l7.4 3.9"/>') },
    { v: 'bouche',  l: 'Par quelqu\'un',         ic: IC_('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>') },
    { v: 'deja',    l: 'J\'ai déjà suivi une édition', ic: IC_('<path d="M3.05 11a9 9 0 1 1 .5 4"/><polyline points="3 4 3 10 9 10"/>') },
    { v: 'autre',   l: 'Autrement',              ic: IC_('<circle cx="12" cy="12" r="9"/><path d="M8.5 12h7M12 8.5v7"/>') }
  ];
   
   
  const RESIDENCE_OPTIONS = [
    { v: 'fr',    l: 'En France',      ic: IC_('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>') },
    { v: 'hors',  l: 'Hors de France', ic: IC_('<circle cx="12" cy="12" r="9"/><path d="M3.2 9h17.6M3.2 15h17.6"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/>') }
  ];

   
   
   
   
   
   
  const TYMAL_BASE = 'https://static.wixstatic.com/shapes/7bb303_';
  const TYMAL = {
    velo:    TYMAL_BASE + '1805678ec9994470a1b9c049e7de1ca4.svg',   
    train:   TYMAL_BASE + 'b8922093d6774b6c8654b1ff29cd8404.svg',   
    face:    TYMAL_BASE + '83ec85561f9a491a821ec98cefcf2dac.svg',   
    pouce:   TYMAL_BASE + '98093ad4f3ad4d25a610d305e966268d.svg',   
    megaphone: TYMAL_BASE + 'ef3c64b596574b289a24797a4e2b68f3.svg',  
    clinOeil: TYMAL_BASE + '18789740b75547869e150140259392d6.svg',  
    





    assis:    TYMAL_BASE + '02d58828422d4a1a89bc86d81e61e7f6.svg',  
    detente:  TYMAL_BASE + 'ed0e9c1143a044a09444d3a0c88c709a.svg'   
  };
  const ICON_LEAF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>';

  const MOIS_FR = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                   'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const JOURS_FR = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const ICON_CHEVRON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
  const ICON_CAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>';

   
  const ICON_COLLAPSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"/></svg>';
   
  

  const ICON_INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="7.6" r="0.1"/></svg>';
  const ICON_SPARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M12 18v3M4.2 7.2l2.1 2.1M17.7 14.7l2.1 2.1M3 12h3M18 12h3M4.2 16.8l2.1-2.1M17.7 9.3l2.1-2.1"/><circle cx="12" cy="12" r="2.4"/></svg>';
  




  





  const ICON_CADEAU = '<svg class="er-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z"/></svg>';
  

  const PACK_VR_ACTIVATION = Date.UTC(2026, 8, 30, 22, 0, 0);
   
  const ICON_COPIER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>';
   
  
























  const ICON_R_SKIPPER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15.6 8.4 13.4 13.4 8.4 15.6 10.6 10.6Z"/></svg>';
  const ICON_R_CLASSE  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v14"/><path d="M12 5.5c3.4 1.9 5.6 5.6 6 11.5H12"/><path d="M4 20.5h16"/></svg>';
  const ICON_R_THEME   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 11.3V4.6a1 1 0 0 1 1-1h6.7a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-6.7 6.7a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7Z"/><circle cx="7.8" cy="7.8" r="1.4"/></svg>';
  const ICON_R_AFFIN   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 16.5 8 11l3.5 3.5L21 5"/><polyline points="15.5 5 21 5 21 10.5"/></svg>';

  



  const ICON_PILE_LIRE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.5h11"/><path d="M4 12h11"/><path d="M4 17.5h7"/><path d="M18.5 15.5v5M16 18h5"/></svg>';

  



















  








  const NEWS_VISIBLE = 5;    
  const NEWS_RESERVE = 4;    

  const LUS_KEY = 'rdrLusV1';
  const LUS_MAX = 300;

  




  const MASQUER_KEY = 'rnMasquerLus';

  

















  const MEMOIRE_KEY = 'erDernierEtatV1';
  const MEMOIRE_TTL_MS = 24 * 3600 * 1000;
  function lireMemoire(membre, lang) {
    try {
      const m = JSON.parse(localStorage.getItem(MEMOIRE_KEY) || 'null');
      if (!m || !membre || m.membre !== membre || m.lang !== lang || !m.payload || typeof m.le !== 'number') return null;
      if (Date.now() - m.le > MEMOIRE_TTL_MS) { localStorage.removeItem(MEMOIRE_KEY); return null; }
      return m;
    } catch (e) { return null; }
  }
  


  function sansCodes(codes) {
    if (!codes || typeof codes !== 'object') return codes;
    const o = {};
    Object.keys(codes).forEach((k) => { const c = codes[k]; o[k] = c && typeof c === 'object' ? Object.assign({}, c, { code: c.code ? true : c.code }) : c; });
    return o;
  }
  function ecrireMemoire(membre, lang, payload) {
    if (!membre || !payload) return;
    try {
      const packFan = payload.packFan ? Object.assign({}, payload.packFan, { codes: sansCodes(payload.packFan.codes) }) : payload.packFan;
      const copie = Object.assign({}, payload, { newlyUnlockedBadges: [], packFanCode: null, profilePrompt: null, packFan });
      localStorage.setItem(MEMOIRE_KEY, JSON.stringify({ membre, lang, le: Date.now(), payload: copie }));
    } catch (e) {
      

      try { localStorage.removeItem(MEMOIRE_KEY); } catch (e2) {   }
    }
  }
  function oublierMemoire() { try { localStorage.removeItem(MEMOIRE_KEY); } catch (e) {   } }
  const MEMOIRE_CSS = `
    espace-rhum.er-memoire > *:not(.er-memoire-pill) { pointer-events: none; }
    espace-rhum .er-memoire-pill { position: fixed; top: 84px; left: 50%; transform: translateX(-50%); z-index: 60; padding: 7px 14px; border-radius: 999px; background: rgba(29, 34, 67, 0.92); color: #fff; font: 600 13px/1 system-ui, -apple-system, "Segoe UI", sans-serif; letter-spacing: 0.02em; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25); animation: er-sk-pulse 1.2s ease-in-out infinite; pointer-events: none; }
    espace-rhum.er-rafraichi .er-dashboard > *, espace-rhum.er-rafraichi .er-cockpit, espace-rhum.er-rafraichi .er-mobile-topbar, espace-rhum.er-rafraichi .er-mobile-shell { animation: none !important; }
    @media (prefers-reduced-motion: reduce) { espace-rhum .er-memoire-pill { animation: none; } }
  `;
  



  function masquerLusActif() {
    try { return localStorage.getItem(MASQUER_KEY) === '1'; } catch (e) { return false; }
  }
  function poserMasquerLus(v) {
    try { localStorage.setItem(MASQUER_KEY, v ? '1' : '0'); } catch (e) {   }
  }
  function slugDArticle(a) {
    const u = String((a && (a.postPageUrl || a.url)) || '');
    const parts = u.split('?')[0].split('#')[0].split('/').filter(Boolean);
    if (!parts.length) return '';
    try { return decodeURIComponent(parts[parts.length - 1]).toLowerCase(); }
    catch (e) { return parts[parts.length - 1].toLowerCase(); }
  }
  function lusLocaux() {
    try { const a = JSON.parse(localStorage.getItem(LUS_KEY) || '[]'); return new Set(Array.isArray(a) ? a : []); }
    catch (e) { return new Set(); }
  }
  
















  const COUP_POUCE_KEY = 'erCoupPouceV1';
  const CP_DELAI_VU = 7000;
  const CP_DUREE = 20000;
  const CP_ESPACE = 20 * 60 * 1000;
  const CP_PAR_JOUR = 3;
  const CP_SILENCE = 24 * 60 * 60 * 1000;
  let cpSansMemoire = 0;
  function coupPouceMemoire() {
    try {
      const m = JSON.parse(localStorage.getItem(COUP_POUCE_KEY) || '{}');
      return m && typeof m === 'object' ? m : {};
    } catch (e) { return null; }
  }
  function coupPoucePermis(maintenant) {
    const m = coupPouceMemoire();
    if (!m) return cpSansMemoire === 0;
    if (m.silence && maintenant < m.silence) return false;
    if (m.dernier && maintenant - m.dernier < CP_ESPACE) return false;
    return !(m.jour === new Date(maintenant).toDateString() && (m.n || 0) >= CP_PAR_JOUR);
  }
  function coupPouceNoter(maintenant, silence) {
    const m = coupPouceMemoire();
    if (!m) { cpSansMemoire++; return; }
    if (silence) m.silence = maintenant + CP_SILENCE;
    else {
      const jour = new Date(maintenant).toDateString();
      m.n = (m.jour === jour ? (m.n || 0) : 0) + 1;
      m.jour = jour;
      m.dernier = maintenant;
    }
    try { localStorage.setItem(COUP_POUCE_KEY, JSON.stringify(m)); } catch (e) { cpSansMemoire++; }
  }

  


  function suffixeEn(k) {
    const d = k % 10, c = k % 100;
    return d === 1 && c !== 11 ? 'st' : d === 2 && c !== 12 ? 'nd' : d === 3 && c !== 13 ? 'rd' : 'th';
  }
  function fansDe(k, en) {
    return Number(k).toLocaleString(en ? 'en-GB' : 'fr-FR') + (k > 1 ? ' fans' : ' fan');
  }
  function prenomDe(sk) {
    return String((sk && (sk.prenom || String(sk.name || '').split(' ')[0])) || '').trim();
  }
  function listeNoms(noms, en) {
    if (noms.length < 2) return noms[0] || '';
    return noms.slice(0, -1).join(', ') + (en ? ' and ' : ' et ') + noms[noms.length - 1];
  }

  




  function textesCoupPouce(d, en) {
    const p = escapeHtml(prenomDe(d.moi));
    





    if (d.cas === 'sans-rang') {
      return en
        ? { kick: 'Your favourite skipper', titre: 'Help <em>' + p + '</em> enter the ranking',
            txt: 'Share their card on social media. The fan ranking is updated every night.',
            rangTxt: 'not yet<br>in the ranking', cta: 'Share their card', fermer: 'Close' }
        : { kick: 'Ton skipper préféré', titre: 'Aide <em>' + p + '</em> à entrer dans le classement',
            txt: 'Partage sa carte sur les réseaux. Le classement des fans se met à jour chaque nuit.',
            rangTxt: 'pas encore<br>au classement', cta: 'Partager sa carte', fermer: 'Fermer' };
    }
    const k = d.egaux.length;
    const et = en ? ' and ' : ' et ';
    const qui = k === 1 ? escapeHtml(prenomDe(d.egaux[0]))
      : k === 2 ? escapeHtml(prenomDe(d.egaux[0])) + et + escapeHtml(prenomDe(d.egaux[1])) : '';
    const ecart = d.devant ? d.devant.n - d.n + 1 : 0;
    const devantNom = d.devant ? escapeHtml(d.devant.name || '') : '';
    const egal = d.cas === 'egal-tete' || d.cas === 'egal';
    if (en) {
      const encore = ecart > 1 ? ecart + ' more fans' : '1 more fan';
      const objectif = !d.devant ? '' : !d.dansTop ? encore + ' to make the top 5. '
        : d.devant.rang === 1 ? encore + ' to take the lead. ' : encore + ' to overtake ' + devantNom + '. ';
      return {
        kick: d.cas === 'egal-tete' ? (k === 1 ? 'Neck and neck at the top' : (k + 1) + '-way tie at the top')
          : d.cas === 'egal' ? (k === 1 ? 'Neck and neck, ' : (k + 1) + '-way tie, ') + d.rang + suffixeEn(d.rang) + ' place'
          : 'Your favourite skipper',
        titre: egal ? (qui ? 'Help <em>' + p + '</em> pull ahead of ' + qui : 'Help <em>' + p + '</em> break away from the pack')
          : d.cas === 'tete' ? 'Help <em>' + p + '</em> keep first place in the fan ranking'
          : 'Help <em>' + p + '</em> climb the ranking',
        txt: egal ? 'Share their card on social media. The next fan makes the difference.'
          : d.cas === 'tete' ? 'Share their card on social media to widen the gap.'
          : objectif + 'Share their card on social media.',
        rangTxt: 'with<br>' + fansDe(d.n, true),
        cta: 'Share their card', fermer: 'Close'
      };
    }
    const encore = 'Encore ' + fansDe(ecart, false);
    const objectif = !d.devant ? '' : !d.dansTop ? encore + ' pour entrer dans le top 5. '
      : d.devant.rang === 1 ? encore + ' pour prendre la tête. ' : encore + ' pour passer devant ' + devantNom + '. ';
    return {
      kick: d.cas === 'egal-tete' ? (k === 1 ? 'Coude à coude en tête' : 'Coude à coude à ' + (k + 1) + ' en tête')
        : d.cas === 'egal' ? (k === 1 ? 'Coude à coude, ' : 'Coude à coude à ' + (k + 1) + ', ') + d.rang + 'e place'
        : 'Ton skipper préféré',
      titre: egal ? (qui ? 'Aide <em>' + p + '</em> à passer devant ' + qui : 'Aide <em>' + p + '</em> à se détacher du groupe')
        : d.cas === 'tete' ? 'Aide <em>' + p + '</em> à garder sa première position au classement des fans'
        : 'Aide <em>' + p + '</em> à monter dans le classement',
      txt: egal ? 'Partage sa carte sur les réseaux. Le prochain fan fera la différence.'
        : d.cas === 'tete' ? 'Partage sa carte sur les réseaux pour creuser l’écart.'
        : objectif + 'Partage sa carte sur les réseaux.',
      rangTxt: 'avec<br>' + fansDe(d.n, false),
      cta: 'Partager sa carte', fermer: 'Fermer'
    };
  }

  function marquerLuLocal(slug) {
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

  


  const ICON_LU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12.5 9.5 18 20 6.5"/></svg>';

   
   
   
  



  const ICON_ANNULER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 14 4 9 9 4"/><path d="M4 9h9.5a5.5 5.5 0 0 1 0 11H11"/></svg>';
   
   
  const ICON_LATER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.05 11a9 9 0 1 1 .5 4"/><polyline points="3 4 3 10 9 10"/><polyline points="12 8 12 12 15 13.5"/></svg>';
  








  const ICON_NOT_FOR_ME = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line x1="8.2" y1="12" x2="15.8" y2="12"/></svg>';
   
  const ICON_ALERT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line x1="12" y1="7.5" x2="12" y2="13"/><circle cx="12" cy="16.5" r="0.9" fill="currentColor" stroke="none"/></svg>';
  const ICON_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>';

   
  const ICON_SEARCH = '<svg class="er-prefs-sico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
   
  const ICON_AVATAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"/><path d="M4.5 20.1a7.5 7.5 0 0 1 15 0 .9.9 0 0 1-.9.9H5.4a.9.9 0 0 1-.9-.9Z"/></svg>';
  

  const ICON_BOUCLIER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>';
  

  const ICON_ALERTE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>';
  const ICON_FLECHE_D = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
   
  


  const ICON_HEART_PLEIN = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

   
  const ICON_TOP50_LISTE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>';
  const ICON_TOP50_HORLOGE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const ICON_TOP50_AIDE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
  const ICON_TOP50_REGLEMENT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/></svg>';
  const ICON_TOP50_FLECHE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const ICON_TOP50_BADGE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5"/></svg>';
  

  const ICON_TOP50_COFFRE = '<svg viewBox="0 0 48 48" fill="none" stroke="#14203F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M7 22C7 13 14 9 24 9s17 4 17 13" fill="rgba(20,32,63,.22)"/>'
    + '<rect x="7" y="22" width="34" height="18" rx="2.5" fill="rgba(20,32,63,.10)"/>'
    + '<path d="M7 22h34M16 10v30M32 10v30"/>'
    + '<rect x="20" y="19" width="8" height="9" rx="2" fill="#FCF150" stroke="#C08457"/>'
    + '<circle cx="24" cy="23" r="1.2" fill="#C08457" stroke="none"/>'
    + '<path d="M24 6V2M13 7l-2-3.5M35 7l2-3.5" stroke="#FCF150"/>'
    + '<circle cx="11" cy="44" r="2.4" fill="#FCF150" stroke="#C08457" stroke-width="1.2"/><circle cx="37" cy="44" r="2.4" fill="#FCF150" stroke="#C08457" stroke-width="1.2"/>'
    + '</svg>';
  

  const ICON_TOP50_SAC = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 26h44l-3 28H13z"/><path d="M22 26v-6a10 10 0 0 1 20 0v6"/><path d="M10 26c0-4 3-6 8-6h28c5 0 8 2 8 6"/><path d="M26 36h12"/><path d="M4 30l6-4M60 30l-6-4"/></svg>';
  const ICON_TOP50_CADEAU = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 28h44v28H10z"/><path d="M6 18h52v10H6z"/><path d="M32 18v38M32 18c-6-2-12-8-8-12s10 4 8 12zm0 0c6-2 12-8 8-12s-10 4-8 12z"/></svg>';
  


  const TOP50_METAUX = {
    1: ['#FFF1BE', '#F5B041', '#B9771C'],
    2: ['#FFFFFF', '#C8D2DC', '#7E8A98'],
    3: ['#F3CDA6', '#C08457', '#7A4A27']
  };
  let top50MedailleN = 0;
  function medailleTop50(rang) {
    const [clair, teinte, ombre] = TOP50_METAUX[Math.min(3, Math.max(1, Number(rang) || 1))];
    const id = 'erTop50Met' + (++top50MedailleN);
    return '<svg viewBox="0 0 50 64" aria-hidden="true">'
      + '<defs><radialGradient id="' + id + '" cx="38%" cy="30%" r="70%"><stop offset="0" stop-color="' + clair + '"/><stop offset=".45" stop-color="' + teinte + '"/><stop offset="1" stop-color="' + ombre + '"/></radialGradient></defs>'
      + '<path d="M14 0h10l4 22-11 5z" fill="#E63946"/><path d="M36 0H26l-4 22 11 5z" fill="#B42A35"/>'
      + '<circle cx="25" cy="42" r="20" fill="url(#' + id + ')"/>'
      + '<circle cx="25" cy="42" r="20" fill="none" stroke="' + ombre + '" stroke-width="1.5" opacity=".7"/>'
      + '<circle cx="25" cy="42" r="15" fill="none" stroke="#10162F" stroke-width="1" stroke-dasharray="1.6 2.4" opacity=".35"/>'
      + '<ellipse cx="18" cy="31" rx="7" ry="3.5" fill="#fff" opacity=".35" transform="rotate(-30 18 31)"/>'
      + '<text x="25" y="49.5" text-anchor="middle" font-size="21" fill="#10162F">' + escapeHtml(String(rang)) + '</text>'
      + '</svg>';
  }
  



  const TOP50_BALISES = new Set(['P', 'BR', 'STRONG', 'B', 'EM', 'I', 'U', 'UL', 'OL', 'LI', 'H1', 'H2', 'H3', 'H4', 'A', 'SPAN', 'DIV', 'BLOCKQUOTE']);
  function sanitizeRichText(html) {
    if (!html || typeof DOMParser !== 'function') return '';
    let doc;
    try { doc = new DOMParser().parseFromString('<div>' + String(html) + '</div>', 'text/html'); } catch (e) { return ''; }
    const racine = doc.body && doc.body.firstElementChild;
    if (!racine) return '';
    const marcher = (el) => {
      [...el.children].forEach(enfant => {
        if (!TOP50_BALISES.has(enfant.tagName)) { enfant.replaceWith(doc.createTextNode(enfant.textContent || '')); return; }
        [...enfant.attributes].forEach(a => {
          const garder = enfant.tagName === 'A' && a.name === 'href' && /^https?:\/\//i.test(a.value);
          if (!garder) enfant.removeAttribute(a.name);
        });
        if (enfant.tagName === 'A') { enfant.setAttribute('rel', 'noopener'); enfant.setAttribute('target', '_blank'); }
        marcher(enfant);
      });
    };
    marcher(racine);
    return racine.innerHTML;
  }
  const ICON_PARTAGER_CARTE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>';
  const ICON_HEART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
   
  const PREFS_CLASSES = CLASSES_CONFIG.map(c => ({ id: c.id, n: c.label, col: c.col, ic: c.icon }));
  const PREFS_CL_BYNAME = Object.create(null); PREFS_CLASSES.forEach(c => { PREFS_CL_BYNAME[c.n] = c; });
  



























  const PREFS_THEMES = ['Départ', 'Arrivée', 'Direct', 'Classement', 'Météo', 'Avarie', 'Record', 'Interview', 'Portrait', 'Coulisses', 'Décryptage', 'Rookies', 'Femmes', 'Écologie & Océan'];
  















  function prefsWixImg(u) {
    if (!u) return ''; const s = String(u);
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i); if (m) return 'https://static.wixstatic.com/media/' + m[1];
    m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i); if (m) return 'https://static.wixstatic.com/shapes/' + m[1];
    return /^https?:/i.test(s) ? s : '';
  }

   
  const BADGE_ICONS = {
    'premier-pas':       '<circle cx="6" cy="6" r="3"/><path d="M4 12v10"/><circle cx="18" cy="6" r="3"/><path d="M20 12v10"/>',
    'fidele':            '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14.5a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2c0 3-4 5-4 5s-4-2-4-5z"/>',
    'supporter-fidele':  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'veteran':           '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
    'explorateur':       '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    'journaliste':       '<rect x="3" y="4" width="18" height="16" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="13" y2="18"/>',
    'analyste':          '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    'collectionneur':    '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
    'supporter':         '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    'photographe':       '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    'spectateur-depart': '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    'cap-finisterre':    '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    'mi-parcours':       '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
    'premiere-arrivee':  '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    'noctambule':        '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    'matinal':           '<path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/>',
     
    'profil-complet':    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    'instagram':         '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
     
    'newsletter':        '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
  };
   
  const BADGE_ICON_FALLBACK = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>';

   
   
   
  const BADGE_ICON_URLS = {
    'premier-pas':       'https://static.wixstatic.com/media/7bb303_7d9de58d59e8421eb068034880357a61~mv2.webp',
    'supporter-fidele':  'https://static.wixstatic.com/media/7bb303_3d2b438b77de43d7864ff0025b59841f~mv2.webp',
    'veteran':           'https://static.wixstatic.com/media/7bb303_47eccc5dead64860ad007ad76b6c0ed3~mv2.webp',
    'explorateur':       'https://static.wixstatic.com/media/7bb303_b7db7397017947b889656cea0d6c98be~mv2.webp',
    'journaliste':       'https://static.wixstatic.com/media/7bb303_2321af4b440345f7b9e952e9b1cbe593~mv2.webp',
    'analyste':          'https://static.wixstatic.com/media/7bb303_82bd1f4340834bf2988ce7399d5e137d~mv2.webp',
    'collectionneur':    'https://static.wixstatic.com/media/7bb303_6af7ea0876fa447ebe40349620711567~mv2.webp',
    'supporter':         'https://static.wixstatic.com/media/7bb303_b9b5a8e9dc61476f885624879bebebd2~mv2.webp',
    'photographe':       'https://static.wixstatic.com/media/7bb303_d4490cb89e9c4e74af530ef3d8fef28d~mv2.webp',
    'spectateur-depart': 'https://static.wixstatic.com/media/7bb303_a07aaedf6e8e404ba6032d3d315c4f08~mv2.webp',
    'cap-finisterre':    'https://static.wixstatic.com/media/7bb303_2aeddccd21864a38a76cb0cf653b9b5a~mv2.webp',
    'mi-parcours':       'https://static.wixstatic.com/media/7bb303_fac708ef78a04396b5a93b4be1cbab0f~mv2.webp',
    'premiere-arrivee':  'https://static.wixstatic.com/media/7bb303_9df0936e41f842339c0cf8b44ec4697b~mv2.webp',
    'noctambule':        'https://static.wixstatic.com/media/7bb303_8b1663cdfa52444897e42488cc8a32d2~mv2.webp',
    'matinal':           'https://static.wixstatic.com/media/7bb303_36e5b8f3dc8042b8987a2b613bae0542~mv2.webp',

    












    'fidele':            'https://static.wixstatic.com/media/df962b_ec370a13e64d4fc8bdf6193fd8b6e135~mv2.png',
    'profil-complet':    'https://static.wixstatic.com/media/df962b_252a12cbd3d8467bbe4c21905d730aed~mv2.png',
    'instagram':         'https://static.wixstatic.com/media/df962b_dda7012dccd14ff0b438a9d03af55442~mv2.png'
  };

   
   
   
  










  function badgeIconInner(key, grand) {
    const url = BADGE_ICON_URLS[key];
    if (url) {
      const src = (!grand && /~mv2\.png$/.test(url))
        ? url + '/v1/fill/w_96,h_96,al_c,q_85,quality_auto/img.png'
        : url;
      return `<image href="${escapeHtml(src)}" x="0" y="0" width="24" height="24" preserveAspectRatio="xMidYMid meet"/>`;
    }
    return BADGE_ICONS[key] || BADGE_ICON_FALLBACK;
  }

   
   
  const NAV_ITEMS = [
    { key: 'dashboard',    label: 'Tableau de bord', icon: ICON_DASHBOARD },
    { key: 'skipper-jour', label: 'Skipper du jour', icon: ICON_SKIPPER_JOUR },
    { key: 'skippers',     label: 'Mes skippers',    icon: ICON_SKIPPERS },
    { key: 'actus',        label: 'Mes actus',       icon: ICON_ACTUS },
    { key: 'stats',        label: 'Mes stats',       icon: ICON_STATS },
    { key: 'badges',       label: 'Mes badges',      icon: ICON_BADGES }
  ];

   
   
   
  const TOTAL_BADGES_FALLBACK = 18;
  const badgesTotal = (payload) => {
    const n = Array.isArray(payload?.badges) ? payload.badges.length : 0;
    return n || TOTAL_BADGES_FALLBACK;
  };

   
  const SKIPPERS_PAGE_PATH = '/skippers';
  const ACTUS_PAGE_PATH    = '/medias-actualites';

   
   
   
   
   
  






  const i18nNorm = s => s.replace(/[‘’]/g, "'").replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ').trim();
  const ER_EN = {
     
    'Tableau de bord': 'Dashboard', 'Skipper du jour': 'Skipper of the day',
    'Mes skippers': 'My skippers', 'Pour toi': 'For you', 'Mes actus': 'My news',
    'Mes badges': 'My badges', 'Mes stats': 'My stats', 'Mes statistiques': 'My statistics',
    'Mon Espace': 'My Space', 'Mon Espace Rhum': 'My Espace Rhum',
    'Ton skipper du jour': 'Your skipper of the day', 'Actu du jour': 'News of the day',
    'Mes skippers suivis': 'My followed skippers', 'Skippers suivis': 'Skippers followed',
    'Mes classes de bateaux': 'My boat classes', 'Mes sujets': 'My topics', 'Thèmes': 'Topics',
    'Mes préférences': 'My preferences', 'En chiffres': 'By the numbers',
    'Ma collection': 'My collection', 'Ton rang': 'Your rank',
     
    '+ Suivre': '+ Follow', 'Suivre': 'Follow', 'Suivi': 'Followed', 'Voir le profil': 'View profile',
    'Ajoute un skipper': 'Add a skipper', 'Annuler': 'Cancel',
    'Enregistrer': 'Save', 'Réessayer': 'Try again', 'Voir toutes les actus': 'See all news',
    'Découvre le plateau': 'Discover the fleet',
    'Menu': 'Menu', 'Naviguer': 'Navigate',
     
    'Tous': 'All', 'Débloqués': 'Unlocked', 'À venir': 'Upcoming',
     
    'Actus': 'News', 'Skippers': 'Skippers', 'Badges': 'Badges', 'Suivis': 'Followed',
    'Profils vus': 'Profiles viewed', 'Articles lus': 'Articles read',
    'Jours de suite': 'Day streak', 'Top des fans': 'Top fans', 'Classement à venir': 'Leaderboard coming soon',
    'Pas encore classé': 'Not ranked yet',
    'Nouveau badge': 'New badge', 'Ceux que tu suis de près': 'The ones you follow closely',
    'On pense qu\'ils vont te plaire': 'We think you\'ll like them',

    'Ta collection grandit à chaque visite': 'Your collection grows with every visit',
    'Ton engagement depuis ton arrivée': 'Your engagement since you joined',
    'Ton aventure commence': 'Your adventure begins',
    'Explore le site, chaque action compte.': 'Explore the site, every action counts.',
    'Navigue, suis des skippers, lis des articles, et débloque tes premiers badges.': 'Browse, follow skippers, read articles, and unlock your first badges.',
    'Complète tes préférences pour des suggestions sur mesure': 'Complete your preferences for tailored suggestions',
    'Complète tes préférences pour l\'activer.': 'Complete your preferences to unlock it.',

    'On te proposera en priorité les skippers et actus de ces classes.': 'We\'ll prioritise skippers and news from these classes.',
    'Enregistré sur ton compte, modifiable à tout moment.': 'Saved to your account, editable anytime.',

    'Il grimpe surtout avec tes jours de visite, puis tes lectures, tes skippers suivis et tes badges. Un palier atteint reste acquis.': 'It climbs mostly with the days you visit, then your reading, the skippers you follow and your badges. A tier once reached is yours to keep.',
    'Voir tous les paliers': 'See all tiers',
    'Le top 50 des fans les plus actifs sera dévoilé au grand départ.': 'The top 50 most active fans will be revealed at the grand départ.',
    'Tes favoris apparaissent ici. Ajoute-en depuis la recherche.': 'Your favourites appear here. Add some from the search.',
    'Tu ne suis encore personne': 'You\'re not following anyone yet',

    'Aucun skipper suivi, ajoute-en ci-dessus.': 'No skipper followed, add some above.',
    'Aucun skipper trouvé': 'No skipper found', 'Catalogue skippers indisponible': 'Skipper catalogue unavailable',
    'Aucun badge débloqué pour l\'instant': 'No badge unlocked yet',
    'Tu as débloqué tous les badges !': 'You\'ve unlocked every badge!',
    'Tu es un véritable passionné de la Route du Rhum.': 'You\'re a true Route du Rhum enthusiast.',
    'Pas d\'actu fraîche': 'No fresh news',
    'Reviens plus tard pour la dernière info de la course.': 'Come back later for the latest race update.',
    'À découvrir': 'To discover', 'activé à la course': 'unlocked during the race',
    'arrive bientôt': 'coming soon', 'Destination Guadeloupe': 'Destination Guadeloupe',
     
    'Le chargement est un peu plus long que d\'habitude. Merci de patienter, ton espace arrive.': 'Loading is taking a little longer than usual. Please hold on, your space is on its way.',
    'On est très nombreux à bord !': 'We\'re all aboard in force!',
    'Gros grain passager': 'A passing squall',
    'Vous êtes exceptionnellement nombreux à vous connecter en ce moment. Le chargement peut prendre un peu plus de temps que d\'habitude. Merci de patienter, ton espace arrive.': 'Exceptionally many of you are connecting right now. Loading may take a little longer than usual. Please hold on, your space is on its way.',
    'Impossible de charger ton espace pour l\'instant : nos serveurs encaissent une belle vague. Réessaie dans quelques instants, tout devrait rentrer dans l\'ordre rapidement.': 'We can\'t load your space right now: our servers are riding a big wave. Try again in a few moments, everything should settle quickly.',
    'Reconnexion automatique en cours…': 'Reconnecting automatically…',
     
    'Curieux': 'Curious', 'Passionné': 'Enthusiast', 'Inconditionnel': 'Devoted',
    'Fan': 'Fan', 'Suiveur': 'Follower', 'Légende': 'Legend',
     
    'Départ': 'Start', 'Arrivée': 'Finish', 'Direct': 'Live', 'Classement': 'Rankings',
    'Météo': 'Weather', 'Avarie': 'Breakdown', 'Record': 'Record', 'Interview': 'Interview',
    'Portrait': 'Portrait', 'Coulisses': 'Behind the scenes', 'Décryptage': 'Analysis',
    'Rookies': 'Rookies', 'Femmes': 'Women', 'Écologie & Océan': 'Ecology & Ocean',
     
    'Fidélité': 'Loyalty', 'Exploration': 'Exploration', 'Habitudes': 'Habits',
    'À ta portée': 'Within reach',
     
    'Débloqué': 'Unlocked',
    'Événement | Saint-Malo': 'Event | Saint-Malo', 'Événement | Pointe-à-Pitre': 'Event | Pointe-à-Pitre',
    'Continue d\'explorer': 'Keep exploring',
     

    'À lire': 'To read', 'de lecture': 'read', 'Nouveau': 'New',
     


    'On a coché le train pour ne pas te laisser sans réponse. Change pour le covoiturage, le bus ou autre chose si ça te va mieux.':
      'We ticked the train so your answer isn\'t left empty. Switch to car-sharing, bus or anything else that suits you better.',




     
    'Filtrer mes actus': 'Filter my stories',
    'Écartées': 'Dismissed',
    "Choisi d'après ce que tu suis": 'Picked from what you follow',
    "L'actu de la course, en attendant que tu suives des skippers":
      'Race news, until you start following skippers',
    'Rien en attente': 'Nothing waiting',
    'Sur une actu, « Plus tard » la range ici pour la lire quand tu veux.':
      'On a story, “Later” files it here so you can read it whenever you want.',
    "Rien d'écarté": 'Nothing dismissed',
    'Les actus que tu écartes atterrissent ici, et tu peux les remettre.':
      'Stories you dismiss land here, and you can put them back.',
    'Retirer': 'Remove', 'Remettre': 'Put back',
    'Retirer de ma liste': 'Remove from my list',
    'Remettre dans mes actus': 'Put back in my stories',
    'Rangé dans « Plus tard »': 'Filed under “Later”',
     
    'Ne voir que ça dans mes actus': 'Show only this in my stories',
    'Tu ne vois que': 'You only see',
    'Tout revoir': 'Show all',
     
     
    'Lu': 'Read',
    'Masquer les lus': 'Hide read',
    'Ranger les actus que tu as déjà lues': 'File away the stories you have already read',
    "Tout ce qui te restait ici, tu l'as déjà lu.": 'You have already read everything left here.',
    'Les revoir': 'Show them again',
    "Voir plus d'actus": 'See more stories',
    'Remis dans tes actus.': 'Put back in your stories.',
     
     
     
    'Tu as écarté plusieurs actus sur': 'You have dismissed several stories about',
    ". On arrête de t'en proposer ?": '. Shall we stop suggesting them?',
    'Oui, retirer': 'Yes, remove it',
    'Non, garde-le': 'No, keep it',
    'Le remettre dans mes recommandations': 'Put it back in my picks',
    'Retiré de tes recos': 'Removed from your picks',
    "Ça n'a pas pu être enregistré, l'actu est remise en place.":
      "That couldn't be saved, the story is back where it was.",
    'Impossible de charger cette liste pour le moment. Recharge la page dans un instant, rien n\'est perdu.':
      'This list could not be loaded right now. Reload the page in a moment, nothing is lost.',
     
     
    'Ton espace ne te connaît pas encore': "Your space doesn't know you yet",
    "Dis-nous quels skippers et quels sujets tu suis : on ne te montrera que ça ici, et rien d'autre.":
      "Tell us which skippers and which topics you follow: that is all we will show you here, and nothing else.",
    'Tu es à jour': "You're all caught up",
    "Tu as vu tout ce qui te concerne. Le reste de l'actu t'attend sur la page Actualités.":
      'You have seen everything that concerns you. The rest of the news is waiting on the News page.',
    'Rien de neuf sur ce que tu suis': 'Nothing new on what you follow',
    "Rien de récent ne correspond à tes préférences. Élargis-les un peu, ou va voir tout le fil.":
      'Nothing recent matches your preferences. Widen them a little, or go and see the whole feed.',
    'Tes actus sont indisponibles': 'Your stories are unavailable',
    "On n'a pas pu charger tes recommandations. Recharge la page dans un instant, rien n'est perdu.":
      "We could not load your picks. Reload the page in a moment, nothing is lost.",
    'Régler mes préférences': 'Set my preferences',
    "Ou voir toute l'actu de la course": 'Or see all the race news',
     
     
     
    'Parce que tu suis': 'Because you follow',
    ', une de tes classes': ', one of your classes',
    ', un de tes sujets': ', one of your topics',
    'Tu ouvres souvent ce sujet': 'You often open this topic',
    "L'actu de la course": 'Race news',
     
    'Plus tard : ranger cette actu dans ma liste': 'Later: file this story in my list',
    'La ranger dans « Plus tard », pour la lire quand tu veux':
      'File it under “Later”, to read whenever you want',
    'Pas pour moi : retirer cette actu de mes recommandations':
      'Not for me: remove this story from my picks',
    'La retirer de mes recommandations, elle reste consultable dans « Écartées »':
      'Remove it from my picks, it stays available under “Dismissed”',
    'Actu': 'News', 'Vidéo': 'Video', 'Photo': 'Photo', 'Audio': 'Audio', 'Entretien': 'Interview',
     
    'Plus tard': 'Later', 'Pas pour moi': 'Not for me',




     
    'Replier les suggestions': 'Collapse suggestions',
    'Afficher les suggestions': 'Show suggestions',
    'Réafficher la colonne « Pour toi »': 'Show the “For you” column again',
     
    'Prochain palier :': 'Next tier:',
    'Palier maximum atteint': 'Top tier reached',
    "Le classement s'ouvrira quand nous serons assez nombreux.":
      'The leaderboard opens once there are enough of us.',
     
    'Démonstration': 'Demo',
    "Rien n'est encore configuré : cet écran est simulé, personne d'autre ne le voit.":
      'Nothing is set up yet: this screen is simulated, and nobody else sees it.',
    'simulé': 'simulated',
     
     
     
    'Mon rang': 'My rank',
    'Où tu en es': 'Where you stand',
    "Tu viens d'arriver. Tout est encore devant toi.":
      'You have just arrived. Everything is still ahead of you.',
    "Tu passes de temps en temps, et tu lis ce qui t'attire.":
      'You drop by now and then, and read what draws you in.',
    'Tu as choisi ton camp : des skippers, des sujets, des habitudes.':
      'You have picked your side: skippers, topics, habits.',
    'Tu portes les couleurs. Tu reviens voir ce qui bouge, souvent.':
      'You fly the colours. You come back often to see what is happening.',
    'Tu ne manques presque rien, et plusieurs classes à la fois.':
      'You miss almost nothing, across several classes at once.',
    'La course fait partie de tes journées. Peu de monde en est là.':
      'The race is part of your days. Few people get this far.',
    'Le sommet. Tu la connais mieux que ceux qui la commentent.':
      'The summit. You know it better than those who commentate it.',
    '· ton palier actuel': '· your current tier',
     
     
     
    'Comment on monte ?': 'How do you move up?',
    'Comment on monte': 'How you move up',
    'Ton palier suit ce que tu fais sur le site et monte tout seul, à condition de toucher un peu à tout.':
      'Your tier follows what you do on the site and rises on its own, as long as you try a bit of everything.',
    'Revenir souvent': 'Come back often',
    'Chaque nouvelle journée compte, encore plus au village et en course.': 'Every new day counts, even more at the village and during the race.',
    'Lire les actus': 'Read the news',
    'Chaque article ne compte qu\'une fois, alors ce sont les nouveaux qui te font avancer.': 'Each article only counts once, so it\'s the new ones that move you forward.',
    'Explorer les fiches skippers': 'Explore the skipper profiles',
    'Une fiche jamais ouverte, c\'est un pas de plus.': 'A profile you had never opened is one more step.',
    'Suivre des skippers': 'Follow skippers',
    'Plus tu en accompagnes, plus ton palier s\'en souvient.': 'The more you follow, the more your tier remembers it.',
    'Choisir ton préféré': 'Pick your favourite',
    'Un seul par compte, et les plus hauts paliers le remarquent.': 'One per account, and the highest tiers notice it.',
    'Jouer aux animations': 'Play the activities',
    'La roue, les pronostics et les votes ne durent qu\'un temps, et il y a souvent des cadeaux à la clé.': 'The wheel, predictions and votes only last for a while, and there are often gifts to be won.',
    'Débloquer des badges': 'Unlock badges',
    'Ils racontent ton parcours, et ton palier les compte.': 'They tell your story, and your tier counts them.',
    'Suivre la course en direct': 'Follow the race live',
    'Chaque jour passé à suivre les bateaux rapproche du sommet.': 'Every day spent following the boats brings you closer to the top.',
    'Aucun geste ne suffit à lui seul. C\'est en touchant à tout, régulièrement, qu\'on monte.':
      'No single action is enough on its own. Trying a bit of everything, regularly, is how you climb.',
    'Chaque nuit': 'Every night',
    'On refait les comptes': 'We tally it all up',
    'Tu ne grimperas pas tous les jours, et c\'est normal. Reviens demain pour voir si ce que tu as fait aujourd\'hui t\'a fait monter.':
      'You won\'t climb every day, and that\'s normal. Come back tomorrow to see if what you did today moved you up.',
    'Compris': 'Got it',
     
    'Ouvrir le calendrier': 'Open the calendar',
    'Tape ta date, par exemple 08/01/1997, ou ouvre le calendrier.': 'Type your date, for example 08/01/1997, or open the calendar.',
    'Date incomplète ou impossible. Format attendu : 08/01/1997.': 'Incomplete or impossible date. Expected format: 08/01/1997.',
     
    'Et toi, tu navigues ?': 'Do you sail?',
    'Je navigue régulièrement': 'I sail regularly',
    'De temps en temps': 'Now and then',
    'J\'ai navigué avant': 'I used to sail',
    'Je suis, sans pratiquer': 'I follow, without sailing',
    'Je découvre': 'I\'m discovering it',
     
    'Mieux te connaître': 'Getting to know you',




    'Vendée Globe': 'Vendée Globe', 'Transat Jacques Vabre': 'Transat Jacques Vabre',
    'Solitaire du Figaro': 'Solitaire du Figaro', 'The Ocean Race': 'The Ocean Race',

    'Comment as-tu connu la Route du Rhum ?': 'How did you hear about the Route du Rhum?',
    'À la télévision': 'On television', 'Presse ou radio': 'Press or radio',
    'Sur les réseaux': 'On social media', 'Par quelqu\'un': 'Through someone',
    'J\'ai déjà suivi une édition': 'I followed a previous edition', 'Autrement': 'Some other way',
    'Tu habites…': 'You live…',
    'En France': 'In France', 'Hors de France': 'Outside France',
    'Ton pays de résidence': 'Your country of residence',

     
    'Ton profil': 'Your profile', 'Fais-nous mieux te connaître': 'Help us get to know you',
    'Renseigne tes infos pour débloquer le badge': 'Fill in your details to unlock the badge',
    'Profil complet': 'Complete profile',
    'Pseudo': 'Nickname', 'Ton nom de fan': 'Your fan name',
    'Civilité': 'Title', 'À préciser': 'To be specified',
    'Madame': 'Ms', 'Monsieur': 'Mr', 'Autre': 'Other', 'Je préfère ne pas dire': 'Prefer not to say',
    'Date de naissance': 'Date of birth', 'Choisir une date': 'Pick a date',
    'Année': 'Year', 'Mois': 'Month', 'Effacer': 'Clear',
    'Choisis d\'abord une année et un mois.': 'Pick a year and a month first.',
    'Choisir ta date de naissance': 'Pick your date of birth',
    'Janvier': 'January', 'Février': 'February', 'Mars': 'March', 'Avril': 'April',
    'Mai': 'May', 'Juin': 'June', 'Juillet': 'July', 'Août': 'August',
    'Septembre': 'September', 'Octobre': 'October', 'Novembre': 'November', 'Décembre': 'December',
    'Code postal': 'Postcode', 'Nationalité': 'Nationality', 'Téléphone': 'Phone',
    'Numéro invalide, vérifie ta saisie.': 'Invalid number, please check what you typed.',
    'Ne plus me montrer': 'Stop showing this',
    'Mon profil': 'My profile',



     
    'Le village de Saint-Malo': 'The Saint-Malo village',


    'Comptes-tu venir au village ?': 'Are you planning to come to the village?',
    'Oui, c\'est sûr': 'Yes, definitely', 'Peut-être': 'Maybe', 'Non, pas cette fois': 'No, not this time',
    'Comment comptes-tu venir ?': 'How are you planning to get there?',
    'Train': 'Train', 'Covoiturage': 'Car sharing', 'Bus ou car': 'Bus or coach',
    'Voiture': 'Car', 'Vélo': 'Bike', 'À pied': 'On foot',
    'Précise ton moyen de transport': 'Tell us how you\'ll travel',
    'Et si tu laissais la voiture ?': 'What if you left the car behind?',
    'Le stationnement à Saint-Malo est le point noir du week-end de départ, et les trajets des visiteurs pèsent le plus lourd dans l\'empreinte carbone de la course. Le train et le covoiturage évitent les bouchons à l\'entrée de la ville et la chasse à la place.':
      'Parking in Saint-Malo is the sore point of the start weekend, and visitor journeys weigh heaviest in the race\'s carbon footprint. Train and car sharing spare you the queues into town and the hunt for a space.',
    'En savoir plus': 'Find out more',
    'Venir au village': 'Getting to the village',
    'Le train et le covoiturage changent le week-end': 'Train and car sharing change the weekend',



     
    'Premier pas': 'First step', 'Fidèle': 'Loyal', 'Supporter fidèle': 'Loyal supporter',
    'Vétéran': 'Veteran', 'Explorateur': 'Explorer', 'Journaliste': 'Journalist',
    'Analyste': 'Analyst', 'Collectionneur': 'Collector', 'Supporter': 'Supporter',
    'Photographe': 'Photographer', 'Spectateur du départ': 'Start spectator',
    'Cap Finisterre': 'Cape Finisterre', 'Mi-parcours': 'Halfway', 'Première arrivée': 'First finish',
    'Noctambule': 'Night owl', 'Matinal': 'Early bird',
     
    'Première connexion': 'First login', '10 jours de visite': '10 days visited',
    '30 jours de visite': '30 days visited', '8 badges débloqués et 30 jours de visite': '8 badges unlocked and 30 days visited',
    '20 skippers découverts': '20 skippers discovered', '15 articles différents lus': '15 different articles read',
    '50 articles différents lus': '50 different articles read', '15 skippers en favoris': '15 skippers favourited',
    '5 skippers en favoris': '5 skippers favourited', '5 articles photo différents lus': '5 different photo articles read',
    'Connecté le jour J': 'Online on race day', 'Connecté au passage Finisterre': 'Online at Finisterre',
    'Connecté à mi-course': 'Online at mid-race', 'Connecté à la première arrivée': 'Online for the first finish',
    '3 soirées sur le site (22h–5h)': '3 evenings on the site (10pm–5am)',
    


    '3 matins sur le site (5h–8h)': '3 mornings on the site (5am–8am)',
    


    'Profil rempli à 100 %': 'Profile 100% complete',
    'Renseigne tous les champs de ton profil pour le débloquer.': 'Fill in every field of your profile to unlock it.',
    'Profil complété. Merci de nous aider à mieux te connaître !': 'Profile complete. Thanks for helping us get to know you better!',
    'Suivre la course sur Instagram': 'Follow the race on Instagram',
    'Ajoute ton pseudo Instagram, on valide sous 72 h que tu nous suis.': 'Add your Instagram handle, we check within 72 hours that you follow us.',
    'Merci de nous suivre sur Instagram !': 'Thanks for following us on Instagram!',
    'On vérifie ton pseudo, réponse sous 72 h.': 'We are checking your handle, you will hear back within 72 hours.',
    'Pseudo introuvable dans nos abonnés. Corrige-le et renvoie.': 'Handle not found among our followers. Correct it and send it again.',
    'Ajoute ton pseudo Instagram, validé sous 72 h.': 'Add your Instagram handle, confirmed within 72 hours.',
    'Ajouter': 'Add',
     
    'Abonné à la newsletter': 'Newsletter subscriber',
    "Abonne-toi avec l'e-mail de ton compte.": 'Subscribe with your account email.',
    "Bienvenue dans Rhum Express ! L'actu de la course arrive dans ta boîte.": 'Welcome to Rhum Express! Race news is heading to your inbox.',
    "M'abonner": 'Subscribe',
     
    'Tu as franchi le pas. Bienvenue dans l\'aventure.': 'You took the plunge. Welcome to the adventure.',
    'Ton assiduité paie. Dix jours d\'aventure ensemble.': 'Your dedication pays off. Ten days of adventure together.',
    'Jour après jour, tu es là. Respect.': 'Day after day, you show up. Respect.',
    'Tu étais là avant tout le monde. Un vrai vétéran.': 'You were here before everyone else. A true veteran.',
    'Tu connais le plateau. Explorateur confirmé.': 'You know the fleet. A seasoned explorer.',
    'Tu dévores les articles. Rien ne t\'échappe.': 'You devour the articles. Nothing escapes you.',
    '50 articles ? Tu maîtrises la course comme un pro.': '50 articles? You know the race like a pro.',
    'Ta liste de favoris impressionne. Collectionneur aguerri.': 'Your favourites list is impressive. A seasoned collector.',
    'Cinq skippers au cœur. Tu t\'investis.': 'Five skippers at heart. You\'re invested.',
    'Tu as l\'œil. Les plus belles images de la course n\'ont plus de secret pour toi.': 'You have an eye for it. The finest images of the race hold no secrets for you.',
    'Tu étais là pour le grand départ. Moment historique.': 'You were there for the grand départ. A historic moment.',
    'Le cap a été passé sous tes yeux.': 'The cape was rounded before your eyes.',
    'À mi-chemin, tu es toujours fidèle au poste.': 'Halfway through, you\'re still at your post.',
    'Guadeloupe ! Tu as vu la première arrivée en direct.': 'Guadeloupe! You watched the first finish live.',
    'Fan nocturne. L\'océan la nuit, c\'est ton truc.': 'Night fan. The ocean at night is your thing.',
    'Tu te lèves avec les marins. Matinal confirmé.': 'You rise with the sailors. A confirmed early bird.',
     

     
    'International': 'International', 'Locaux': 'Locals',
    'Voir tous les skippers': 'See all skippers',
     
    'Tes premiers pas': 'Your first steps', 'Premiers pas': 'First steps',
    'Plus long que la course': 'Longer than the race', 'Déjà une quinzaine !': 'Already a fortnight!',
    'Continue comme ça': 'Keep it up', 'Un vrai lecteur': 'A true reader',
    'Tu suis le fil': 'You\'re following along',
     
    'Confidentialité': 'Privacy',
    'Suivre mon activité pour personnaliser mon espace et faire progresser mes badges': 'Track my activity to personalise my space and progress my badges',
    'Sans suivi, ton espace reste accessible mais tes stats et badges ne progressent plus.': 'Without tracking, your space stays accessible but your stats and badges no longer progress.',
    'Supprimer mes données': 'Delete my data',

    'Tout effacer': 'Erase everything',

    'Aucun choix disponible': 'No option available',

     
    'Prix de la combativité': 'Fighting spirit award',
    'Le plus combatif': 'Most combative',
    'Pourquoi lui ou elle ?': 'Why them?',
    'Nommer': 'Nominate',
    'Vote enregistré': 'Vote saved',
    'Ma nomination': 'My nomination',
    'Pas de nomination': 'No nomination',
    'Le vote': 'The vote',
    'Mon vote': 'My vote',
    'Aucun nommé': 'Nobody nominated',
    'Les nominations sont closes.': 'Nominations are closed.',
    'Le vote est clos.': 'Voting is closed.',
    "Ce skipper n'est pas au bulletin.": 'This skipper is not on the ballot.',
    'Choisis un skipper': 'Choose a skipper',

     
    'Jour': 'Day',
    'Heure': 'Time',
    'Celui qui ne lâche rien': 'The one who never gives up',
    'Mon skipper préféré': 'My favourite skipper',
    'Retirer mon skipper préféré': 'Remove my favourite skipper',
    'Désigner comme mon skipper préféré': 'Set as my favourite skipper',
     
     
     
    'Ne plus suivre': 'Unfollow',
    'Retirer des préférés': 'Remove from favourites',
    'En faire mon préféré': 'Make them my favourite',
    'Choisis ton skipper': 'Choose your skipper',
    'Concours de pronostics': 'Prediction contest',
    'Qui gagne, et quand ?': 'Who wins, and when?',
    'classes': 'classes',
    'Vainqueur': 'Winner',

    'Valider': 'Confirm',
    'Modifier': 'Change',
    'Envoi…': 'Sending…',
    'Enregistré': 'Saved',

    'Mon pronostic': 'My prediction',
    'Le consensus': 'The consensus',
    'Résultat': 'Result',
    'Pas de pronostic': 'No prediction',
    'En attente': 'Pending',
    'Indisponible': 'Unavailable',
    "La liste des skippers ne s'est pas chargée. Recharge la page dans un instant.":
      'The skipper list did not load. Reload the page in a moment.',
    "Le vote est clos. Les résultats seront saisis à l'arrivée.":
      'Voting is closed. The results will be entered on arrival.',
    'Les résultats sont tombés.': 'The results are in.',
    'Le vote est clos, le départ est donné.': 'Voting is closed, the race has started.',
    "Le concours n'est pas encore ouvert.": 'The contest is not open yet.',
    'Ce skipper ne court pas dans cette classe.': 'This skipper does not race in this class.',
    'Ce skipper est introuvable.': 'This skipper could not be found.',

    "Ça n'a pas été enregistré. Réessaie.": 'That was not saved. Try again.',

     
    'La roue du jour': 'The daily wheel',





    'Tourner la roue': 'Spin the wheel',
    'Ça tourne…': 'Spinning…',
    'Reviens demain': 'Come back tomorrow',
    "La roue n'a pas répondu. Réessaie dans un instant.": 'The wheel did not answer. Try again in a moment.',


     
    'Mon Pack Fan': 'My Fan Pack',
    'Pack Fan': 'Fan Pack',
    'Ton pack, offert': 'Your pack, on us',
    'Un code à saisir dans Virtual Regatta, pour courir la Route du Rhum aux couleurs de TyMAL.':
      'A code to enter in Virtual Regatta, to race the Route du Rhum in TyMAL colours.',
    'La livrée TyMAL': 'The TyMAL livery',
    "La mascotte de la course sur ton bateau, pendant toute l'épreuve.":
      "The race mascot on your boat, for the whole race.",
    'Une surprise en plus': 'A surprise on top',
    'Une ou deux options de performance, et le Full Pack pour quelques-uns.':
      'One or two performance options, and the Full Pack for a lucky few.',
    'Ton code Virtual Regatta': 'Your Virtual Regatta code',
    'Copier le code': 'Copy the code',
    'Où le saisir': 'Where to enter it',
    'En bas de la fiche de la course, colle ton code dans le champ « Code partenaire ».':
      'At the bottom of the race page, paste your code into the “Partner code” field.',
    "Déjà inscrit ? Tu peux aussi le saisir plus tard, depuis le menu de l'écran de jeu.":
      'Already registered? You can also enter it later, from the menu of the game screen.',
    'Un seul code partenaire par course. Si tu en saisis un autre, celui-ci est annulé avec ses avantages.':
      'One partner code per race. If you enter another one, this one is cancelled along with its rewards.',
    'Jouer sur Virtual Regatta': 'Play on Virtual Regatta',
    'Comment utiliser mon code': 'How to use my code',
    'Ton code reste ici. Tu le retrouveras en revenant sur cette page.':
      'Your code stays here. You will find it again next time you come to this page.',
    'Un seul code, valable sur une seule course.': 'One code, valid for one race only.',
    'Chaque classe a sa propre course dans le jeu. Choisis celle sur laquelle tu vas jouer, ton code ne marchera que là.':
      'Each class has its own race in the game. Choose the one you will play, your code will only work there.',
    'Ta course sur Virtual Regatta': 'Your race on Virtual Regatta',
    'Choisis ta classe': 'Choose your class',
    'Choisis une classe pour recevoir ton code.': 'Choose a class to receive your code.',
    'Trois questions, si tu veux bien': 'Three questions, if you would',
    'facultatif': 'optional',
    'Tu viens au village de Saint-Malo ?': 'Are you coming to the Saint-Malo village?',
    "Tu seras en Guadeloupe pour l'arrivée ?": 'Will you be in Guadeloupe for the finish?',
    'Tu navigues ?': 'Do you sail?',
    'Oui': 'Yes',
    'Non': 'No',
    'Jamais': 'Never',
    'Régulièrement': 'Regularly',
    'En régate': 'Racing',
    'Recevoir mon code': 'Get my code',
    'Un instant…': 'One moment…',
    'Fermer': 'Close', 'Fermer la liste': 'Close the list',
    'Lire plus tard': 'Read later',
    "Les angles d'actu que « Mes actus » fait remonter en priorité.":
      'The angles that My news brings to the top for you.',
    'fans dans son sillage': 'fans in their wake', 'fan dans son sillage': 'fan in their wake',
    "aujourd'hui": 'today', 'hier': 'yesterday',

    











    'Voir ma collection': 'See my collection',
    'Ma collection de badges': 'My badge collection',
    'Voir toute ma collection de badges': 'See my whole badge collection',
    'Le top 5 des préférés': 'Top 5 favourites',
    'Classement mis à jour une fois par jour.': 'Ranking updated once a day.',
    



    'Chiffres recalculés tous les jours': 'Figures recalculated every day',
    'Mise à jour': 'Update',
    'Rythme de mise à jour des statistiques': 'How often statistics are updated',
    'Tes lectures et découvertes sont comptabilisées une fois par jour. Tes favoris, eux, sont pris en compte tout de suite.':
      'Your reads and discoveries are counted every night. Your favourites, though, count straight away.',
    'Comment ça marche ?': 'How does it work?',
    'Le jeu des badges': 'The badge game',
    'Collectionne les badges de la course': 'Collect the race badges',
    "Les badges accompagnent et récompensent ta navigation tout au long de la Route du Rhum. Explore le site, suis tes skippers, ne manque pas les moments clés de la course, et débloque-les au fil de l'aventure.":
      'Badges follow and reward your journey through the Route du Rhum. Explore the site, follow your skippers, do not miss the key moments of the race, and unlock them as the adventure unfolds.',
    "Les plus assidus iront le plus loin dans la collection… et qui sait ce que la ligne d'arrivée réserve aux plus grands fans.":
      'The most dedicated will go furthest in the collection, and who knows what the finish line has in store for the greatest fans.',
    'Événements': 'Events',
    'Tu es': 'You are',
    "Il n'y a rien au-dessus.": 'There is nothing above.',
    'ton palier actuel': 'your current tier',

     
    ', et nous aider à mieux te connaître.': ', and help us get to know you better.',
    "Ces infos nous aident à mieux connaître le public de la course et à améliorer ce qu'on te propose. Elles nourrissent nos statistiques en grandes tendances, jamais nominatives.":
      'These details help us understand the race audience better and improve what we offer you. They feed our statistics as broad trends, never by name.',
    'Prénom': 'First name',
    'ton prénom': 'your first name',
    'Sur le mur des fans et les classements, tu apparaîtras sous':
      'On the fan wall and in the rankings, you will appear as',
    'Utiliser mon pseudo plutôt que mon prénom': 'Use my nickname instead of my first name',
    'Progression de ton profil': 'Your profile progress',
    'Infos renseignées': 'Details filled in',
    'Ex. Française': 'e.g. French',
    'Ajouter un skipper : nom ou prénom…': 'Add a skipper: name or first name…',
    'Mes paramètres': 'My settings',
    'Confidentialité et compte': 'Privacy and account',
    'Se déconnecter': 'Log out',
    'Ton espace reste tel quel : tu le retrouves en te reconnectant.':
      'Your space stays as it is: log back in to find it.',
    'Suivre mon activité': 'Track my activity',
    'Suivi de mon activité, export et suppression de mes données.':
      'Activity tracking, data export and deletion.',
    'Ce que ton espace retient de toi, ce que tu peux en récupérer, et comment tout effacer.':
      'What your space remembers about you, what you can get back, and how to erase it all.',
    'Exporter mes données': 'Export my data',
    'Récupère dans un fichier tout ce que ton espace sait de toi.':
      'Download everything your space knows about you in a single file.',
    'Télécharger': 'Download',
    'Efface tout ce que ton espace a retenu de toi : tes stats, tes badges, tes favoris, tes préférences et tes participations. Ton compte repart de zéro, sauf aux jeux : un tour de roue joué et un code reçu restent acquis. Irréversible.':
      'Erases everything your space has remembered: your stats, badges, favourites, preferences and entries. Your account starts from scratch, except in the games: a wheel spin played and a code received stay with the account. Irreversible.',
    'Ton compte, tes infos et tout ton espace disparaissent définitivement. Tu seras déconnecté immédiatement. Cette action ne peut pas être annulée.':
      'Your account, your details and your whole space disappear for good. You will be logged out immediately. This action cannot be undone.',
    "Ces réglages s'appliquent immédiatement.": 'These settings apply immediately.',
    'Prénom, pseudo, civilité, date de naissance, code postal, nationalité, téléphone.':
      'First name, nickname, title, date of birth, postcode, nationality, phone.',
    'Déployer le menu': 'Open the menu',

     
    'Suis la course sur Instagram': 'Follow the race on Instagram',
    'Ajoute ton pseudo : on vérifie sous 72 h que tu suis la Route du Rhum, et ton badge se débloque.':
      'Add your handle: we check within 72 hours that you follow the Route du Rhum, and your badge unlocks.',
    "Deux questions rapides, pour dimensionner l'accueil du public.":
      'Two quick questions, to size up how we welcome the public.',
    'Quatre questions à un clic. Elles comptent pour ton badge Profil complet.':
      'Four one-click questions. They count towards your Complete profile badge.',
    'Oui, régulièrement': 'Yes, regularly',
    'Non, juste la Route du Rhum': 'No, just the Route du Rhum',
    "Le départ de la Route du Rhum rassemble des centaines de milliers de visiteurs sur quelques jours, dans une ville qui n'est pas dimensionnée pour ça. Les trajets du public représentent la plus grosse part de l'empreinte carbone de l'événement, très loin devant l'organisation elle-même.":
      'The start of the Route du Rhum draws hundreds of thousands of visitors over a few days, into a town that is not built for it. Getting there accounts for the largest share of the event carbon footprint, far ahead of the organisation itself.',
    'Tu évites la place de parking.': 'You skip the parking space.',
    "C'est le vrai sujet du week-end de départ : les abords du village saturent avant même l'ouverture.":
      'That is the real issue on start weekend: the streets around the village fill up before it even opens.',
    'Tu évites les bouchons.': 'You skip the traffic jams.',
    "L'entrée dans Saint-Malo se fait au compte-gouttes aux heures de pointe.":
      'Getting into Saint-Malo slows to a trickle at peak times.',
    'Tu partages les frais.': 'You share the cost.',
    'À plusieurs dans une voiture ou en train réservé tôt, le trajet coûte souvent moins cher que seul au volant.':
      'Sharing a car, or booking a train early, often costs less than driving alone.',
    'Tu laisses la ville respirer.': 'You let the city breathe.',
    "Moins de voitures, c'est plus de place pour les habitants et pour ceux qui n'ont pas le choix.":
      'Fewer cars means more room for residents, and for those who have no choice.',

     
    'On prépare ton espace': 'Setting up your space',
    'Tes skippers, tes actus et tes badges arrivent.': 'Your skippers, stories and badges are on their way.',
    'Chargement de ton espace en cours': 'Loading your space',

    


    'Aucun nom ne correspond.': 'No name matches.',
    "C'est parti": "Let's go",
    "Tu suis d'autres courses au large ?": 'Do you follow other offshore races?',
    'Ton pseudo Instagram': 'Your Instagram handle',
    'Pseudo invalide : lettres, chiffres, « . » et « _ » uniquement.':
      'Invalid handle: letters, numbers, ". " and "_" only.',
    'Merci, je vais regarder pour venir autrement': 'Thanks, I will look into coming another way',
    'Je viens en voiture': 'I am coming by car',
    'Mes informations personnelles': 'My personal details',
    'Supprimer mon compte': 'Delete my account',
    'Menu et filtres': 'Menu and filters',
    'Fermer le menu': 'Close the menu',
    'Navigation et filtres Espace Rhum': 'Espace Rhum navigation and filters',
    'Filtrer les badges': 'Filter badges',
    'Fermer la modale': 'Close the dialogue',
    'Rechercher un skipper': 'Search for a skipper',
    'ton.pseudo': 'your.handle',

    


    'Suggestions pour toi': 'Suggestions for you',
    "Aperçu d'équipe": 'Team preview',
    'Choix du vainqueur': 'Winner pick',
    'Temps de course': 'Race time',
    'Changer de skipper': 'Change skipper',
    'Numéro, rue, code postal, ville': 'Number, street, postcode, town',
    "Tu as joué ton tour. Il n'y en a qu'un.": 'You have taken your spin. There is only one.',
    'La roue a disparu de ton espace.': 'The wheel has left your space.',
    'Filtrer la liste': 'Filter the list', 'Taper un nom…': 'Type a name…',
    'Enregistrement…': 'Saving…',
    'Ta demande n\'a pas été validée': 'Your request was not approved',
    'Demande en cours de vérification': 'Request being checked',
    'On regarde ça sous 72 h. Tu peux encore corriger ton pseudo si tu as fait une faute.':
      'We will look into it within 72 hours. You can still fix your handle if you made a typo.',
    'Nous n\'avons pas trouvé ton pseudo dans les abonnés du compte de la course. Vérifie bien son orthographe, assure-toi de nous suivre sur Instagram, puis renvoie ta demande.':
      'We could not find your handle among the race account followers. Check the spelling, make sure you follow us on Instagram, then send your request again.',
    'Plus de code pour cette classe': 'No codes left for this class',
    "Les codes de cette classe sont tous partis pour l'instant. D'autres arrivent, reviens dans quelques jours.":
      'The codes for this class have all gone for now. More are on the way, come back in a few days.',
    'Beaucoup de monde en même temps': 'A lot of people at once',
    "Réessaie dans quelques secondes, ton code t'attend.": 'Try again in a few seconds, your code is waiting for you.',
    "Ça n'a pas marché": 'That did not work',
    'Réessaie dans un instant. Si cela persiste, écris-nous.': 'Try again in a moment. If it keeps happening, write to us.',
  };
   
  const ER_EN_NORM = {};
  for (const k in ER_EN) ER_EN_NORM[i18nNorm(k)] = ER_EN[k];

   
   
   
   
   
  const MOTIF_MASK_URI = "data:image/svg+xml,%3Csvg id='Calque_1' data-name='Calque 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1584 1080'%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: none; %7D .cls-2 %7B fill: %23fff; %7D .cls-3 %7B clip-path: url(%23clippath); %7D %3C/style%3E %3CclipPath id='clippath'%3E %3Crect class='cls-1' x='3.11' y='1.32' width='1625.83' height='1090.77'/%3E %3C/clipPath%3E %3C/defs%3E %3Cg class='cls-3'%3E %3Cg%3E %3Cpath class='cls-2' d='M196.32,606.55c-28.07,20.3-51.81,46.52-69.6,77.59-13.61,23.76-23.01,49.16-28.24,75.29h-3.23s-85.67,0-85.67,0c5.91-40.98,19.45-81.5,41.21-119.49,16.14-28.18,35.91-53.4,58.6-75.29h86.94v41.9Z'/%3E %3Cpath class='cls-2' d='M389.54,593.24c-31.54,21.34-58.86,50.04-79.09,85.37-14.77,25.78-24.56,53.09-29.81,80.81h-66.77c5.83-39.09,18.86-77.72,39.62-113.96,17.84-31.15,40.05-58.19,65.4-80.81h70.64v28.59Z'/%3E %3Cpath class='cls-2' d='M528.91,759.43h53.84v15.22c-36.19,23.08-66.56,54.76-88.58,93.22-15.77,27.53-26.12,56.73-31.49,86.34h-44.49c5.76-37.19,18.25-73.94,38.02-108.44,19.19-33.51,43.86-62.55,72.71-86.34'/%3E %3Cpath class='cls-2' d='M775.97,761.86c-39.41,23.77-73.54,57.63-98.08,100.49-16.76,29.27-27.69,60.35-33.17,91.86h-22.18c5.67-35.3,17.6-70.16,36.36-102.91,21.24-37.07,49.14-67.88,81.27-91.87h35.79v2.43Z'/%3E %3Cpath class='cls-2' d='M866.37,859.58c-17.27,30.14-28.46,62.17-33.98,94.62h-11.08c5.63-34.35,17.31-68.26,35.57-100.15,21.79-38.04,50.99-70.06,85.58-94.62h19.77c-39.23,24.59-72.11,58.68-95.86,100.15'/%3E %3Cpath class='cls-2' d='M127.5,506.33c-17.46,17.6-31.58,37.32-42.4,58.32H3.11v-77.61c13.21-20.87,28.83-40.63,46.9-58.84,23.06-23.24,48.81-42.77,76.54-58.32h69.78v88.25c-25.28,11.63-48.58,27.8-68.82,48.2'/%3E %3Cpath class='cls-2' d='M389.54,446.04c-28.22,12.28-54.18,29.91-76.57,52.48-19.46,19.61-35.2,41.95-47,66.14h-69.65v-56.43c14.71-26.12,33.01-50.4,54.65-72.2,27.39-27.61,58.7-49.83,92.67-66.14h45.9v76.16Z'/%3E %3Cpath class='cls-2' d='M582.76,628.93c-30.7,12.64-59.45,31.48-84.32,56.56-21.89,22.07-39,47.16-51.34,73.95h-57.56v-32.18c15.32-32.05,36.07-62.1,62.4-88.64,33.28-33.54,72.09-58.13,113.48-73.95h17.34v64.27Z'/%3E %3Cpath class='cls-2' d='M1162.41,570.18v46.9c-33.56,13.16-65.02,33.31-92.07,60.58-24.08,24.28-42.55,52.09-55.54,81.77h-45.61v-4.44c15.19-39.58,38.52-76.69,70.15-108.58,35.73-36.01,78.05-61.37,123.07-76.23'/%3E %3Cpath class='cls-2' d='M1355.62,605.28c-36.42,13.64-70.59,35.12-99.82,64.58-25.93,26.13-46.09,56.52-59.93,89.57h-23.6c14.93-38.98,37.84-74.77,68.03-105.2,33.56-33.84,73.16-57.96,115.32-72.44v23.49Z'/%3E %3Cpath class='cls-2' d='M1548.84,601.7c-38.01,13.85-73.68,36.06-104.1,66.72-26.35,26.56-46.85,57.43-60.96,91.01h-11.87c14.68-36.55,36.59-70.1,65.08-98.82,32.59-32.86,70.97-56.4,111.85-70.68v11.77Z'/%3E %3Cpath class='cls-2' d='M3.11,252.58v-.07c16.28-13.91,33.9-26.46,52.77-37.44,32.86-19.13,67.52-32.32,102.77-39.98h37.68v92.17s0,35.52,0,35.52c-25.62,4.35-50.9,13.27-74.69,27.11-18.9,11-35.81,24.49-50.46,39.98H3.11v-117.3Z'/%3E %3Cpath class='cls-2' d='M254.57,224.65c42.79-24.91,88.73-39.47,134.97-44.49v68.55s0,42.87,0,42.87c-27.5,4.44-54.66,13.91-80.17,28.75-23.11,13.45-43.03,30.31-59.65,49.54h-53.4v-67.08s0-35.53,0-35.53c17.56-15.92,37-30.25,58.25-42.62'/%3E %3Cpath class='cls-2' d='M582.76,385.85v89.26c-29.78,4.63-58.77,14.78-85.65,30.43-27.04,15.74-49.95,35.95-68.46,59.11h-39.11v-87.53c18.87-18.18,40.15-34.4,63.73-48.13,40.46-23.55,84.42-38.02,129.49-43.14'/%3E %3Cpath class='cls-2' d='M775.97,464.07c-31.25,4.6-62.16,15.04-91.13,31.9-30.5,17.75-56.52,41.13-77.06,68.68h-25.03v-72.06c20.3-20.81,43.45-39.04,69.21-54.03,39.34-22.9,81.52-36.45,124.01-41.4v66.9Z'/%3E %3Cpath class='cls-2' d='M969.19,452.74c-33.61,4.79-66.33,16.04-96.61,33.67-34.23,19.92-63.05,46.62-85.15,78.25h-11.46v-56.03c21.38-23.61,46.44-44.05,74.69-60.5,37.07-21.57,77.28-34.95,118.53-39.97v44.58Z'/%3E %3Cpath class='cls-2' d='M1162.41,419.27v22.28c-35.52,4.86-70.12,16.67-102.09,35.29-36.93,21.49-67.81,50.56-91.13,85.08v-36.58c22.3-26.74,49.27-49.65,80.17-67.64,35.37-20.59,73.71-33.45,113.05-38.43'/%3E %3Cpath class='cls-2' d='M1355.62,438.53c-36.07,4.73-71.82,16.54-105.23,35.99-35.13,20.44-64.84,47.64-87.99,79.75v-17.95c22.27-27.98,49.88-52.38,82.5-71.37,35.14-20.45,72.77-32.77,110.71-37.55v11.13Z'/%3E %3Cpath class='cls-2' d='M196.32,40.03c21.68-11.01,44.63-19.87,68.63-26.35,41.24-11.14,83.3-14.68,124.59-10.89v133.68c-10.69-1.59-21.55-2.46-32.52-2.46-19.17,0-38.65,2.5-58.02,7.73-25.83,6.98-49.75,18.32-71,33.35h-31.67V40.03Z'/%3E %3Cpath class='cls-2' d='M460.73,220.66c40.93-11.05,82.14-14.15,122.03-10.27v111.27c-10.8-1.55-21.75-2.39-32.81-2.39-20.1,0-40.54,2.62-60.86,8.11-31.22,8.44-59.78,22.95-84.47,42.49h-15.08v-78.3s0-42.87,0-42.87c22.39-11.81,46.18-21.29,71.19-28.04'/%3E %3Cpath class='cls-2' d='M870.13,304.5c-35.48,9.58-67.2,26.29-94.16,48.11v-80.07c23.7-13.72,49.52-24.61,77.14-32.06,38.43-10.38,77.64-13.5,116.08-9.6v54.47s0,12.29,0,12.29c-32.71-4.19-66.25-1.98-99.06,6.88'/%3E %3Cpath class='cls-2' d='M1162.41,242.14v44.47c-10.73-1.33-21.59-2.02-32.54-2.02-22.91,0-46.2,2.99-69.36,9.25-34.03,9.19-64.73,24.68-91.32,44.81v-41.01s0-12.29,0-12.29c24.38-14.78,51.16-26.41,79.97-34.2,38-10.26,76.27-12.94,113.24-9'/%3E %3Cpath class='cls-2' d='M1548.84,272.36c-35.23-4.12-71.27-1.59-106.55,7.94-31.82,8.59-60.89,22.38-86.66,40.13v-13.32c25.21-16.43,53.31-29.24,83.83-37.48,36.23-9.78,73.21-12.45,109.39-8.38v11.11Z'/%3E %3Cpath class='cls-2' d='M177.36,759.43c-26.67,29.95-46.22,65.97-56.85,105.97-7.91,29.77-10.3,59.73-7.85,88.81H46.56c-2.3-35.19,1.12-70.9,10.43-105.97,8.46-31.82,21.4-61.65,38.25-88.81h3.24s78.88,0,78.88,0Z'/%3E %3Cpath class='cls-2' d='M301.64,759.43h54.64c-24.23,29.2-42.73,63.98-53.13,103.11-8.06,30.34-10.81,61.26-8.4,91.67h-43.92c-2.32-34.24.91-68.99,9.98-103.11,8.9-33.47,22.86-64.22,40.84-91.67'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
  const MOTIF_FILAIRE_URI = "data:image/svg+xml,%3Csvg id='Calque_1' data-name='Calque 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600.3 972.66'%3E %3Cdefs%3E %3Cstyle%3E .cls-1 %7B fill: none; stroke: %23f5fcfb; stroke-miterlimit: 10; %7D %3C/style%3E %3C/defs%3E %3Cpath class='cls-1' d='M74.69,649.22c-21.75,37.99-35.3,78.52-41.21,119.49h85.66c-16.85,27.16-29.79,56.99-38.25,88.81-9.32,35.07-12.73,70.78-10.43,105.97h66.1c-2.45-29.08-.06-59.04,7.85-88.81,10.63-40,30.18-76.02,56.85-105.97h-78.88c5.23-26.14,14.63-51.53,28.24-75.29,17.79-31.06,41.53-57.29,69.6-77.59v-41.9h-86.94c-22.69,21.89-42.46,47.11-58.6,75.29Z'/%3E %3Cpath class='cls-1' d='M277.39,654.75c-20.76,36.24-33.79,74.88-39.62,113.96h66.77c5.25-27.72,15.04-55.03,29.81-80.81,20.24-35.34,47.55-64.03,79.09-85.37v-28.59h-70.64c-25.35,22.63-47.56,49.67-65.4,80.81Z'/%3E %3Cpath class='cls-1' d='M480.11,855.06c-19.76,34.5-32.26,71.25-38.02,108.44h44.49c5.37-29.62,15.72-58.81,31.49-86.34,22.02-38.46,52.39-70.14,88.58-93.22v-15.22h-53.84c-28.84,23.79-53.52,52.83-72.71,86.34Z'/%3E %3Cpath class='cls-1' d='M682.81,860.58c-18.76,32.76-30.69,67.62-36.36,102.91h22.18c5.48-31.51,16.41-62.59,33.17-91.86,24.54-42.86,58.67-76.72,98.08-100.49v-2.43h-35.79c-32.14,23.99-60.03,54.8-81.27,91.87Z'/%3E %3Cpath class='cls-1' d='M880.78,863.34c-18.26,31.89-29.94,65.8-35.57,100.15h11.08c5.53-32.46,16.72-64.48,33.98-94.62,23.75-41.47,56.62-75.56,95.86-100.15h-19.77c-34.59,24.56-63.79,56.59-85.58,94.62Z'/%3E %3Cpath class='cls-1' d='M151.4,515.61c20.24-20.4,43.54-36.58,68.82-48.2v-88.25h-69.78c-27.73,15.56-53.48,35.08-76.54,58.32-18.07,18.21-33.68,37.97-46.9,58.84v77.61h82c10.82-21.01,24.94-40.72,42.4-58.32Z'/%3E %3Cpath class='cls-1' d='M274.87,445.3c-21.64,21.81-39.94,46.09-54.65,72.2v56.43h69.65c11.8-24.18,27.54-46.52,47-66.14,22.39-22.57,48.35-40.2,76.57-52.48v-76.16h-45.9c-33.96,16.31-65.28,38.53-92.67,66.14Z'/%3E %3Cpath class='cls-1' d='M475.84,647.89c-26.33,26.54-47.08,56.59-62.4,88.64v32.18h57.56c12.33-26.79,29.45-51.88,51.34-73.95,24.87-25.08,53.62-43.92,84.32-56.56v-64.27h-17.34c-41.39,15.82-80.2,40.41-113.48,73.95Z'/%3E %3Cpath class='cls-1' d='M993.09,764.28v4.44h45.61c12.99-29.68,31.46-57.48,55.54-81.77,27.05-27.27,58.51-47.42,92.07-60.58v-46.9c-45.02,14.86-87.35,40.22-123.07,76.23-31.63,31.89-54.96,69-70.15,108.58Z'/%3E %3Cpath class='cls-1' d='M1196.18,768.71h23.6c13.83-33.06,34-63.44,59.93-89.57,29.23-29.46,63.4-50.94,99.82-64.58v-23.49c-42.16,14.49-81.75,38.6-115.32,72.44-30.19,30.43-53.09,66.22-68.03,105.2Z'/%3E %3Cpath class='cls-1' d='M1395.82,768.72h11.87c14.11-33.58,34.61-64.44,60.96-91.01,30.42-30.67,66.09-52.87,104.1-66.72v-11.77c-40.88,14.28-79.26,37.82-111.85,70.68-28.48,28.71-50.4,62.27-65.07,98.82Z'/%3E %3Cpath class='cls-1' d='M145.53,339.18c23.79-13.84,49.07-22.76,74.69-27.11v-127.69h31.67c21.25-15.04,45.17-26.38,71-33.35,19.37-5.23,38.86-7.73,58.02-7.73,10.97,0,21.83.87,32.52,2.46V12.07c-41.29-3.79-83.35-.25-124.59,10.89-24,6.48-46.95,15.34-68.63,26.35v135.07h-37.68c-35.24,7.65-69.91,20.85-102.77,39.98-18.87,10.98-36.49,23.53-52.77,37.44v117.37h68.07c14.65-15.49,31.56-28.98,50.46-39.98Z'/%3E %3Cpath class='cls-1' d='M413.44,486.4v87.53h39.11c18.51-23.17,41.42-43.37,68.46-59.11,26.88-15.65,55.87-25.8,85.65-30.43v-89.26c-45.07,5.12-89.03,19.6-129.49,43.14-23.58,13.73-44.86,29.95-63.73,48.13Z'/%3E %3Cpath class='cls-1' d='M708.74,505.25c28.97-16.86,59.88-27.3,91.13-31.9v-66.9c-42.49,4.95-84.67,18.5-124.01,41.4-25.76,14.99-48.91,33.22-69.21,54.03v72.06h25.03c20.54-27.55,46.56-50.93,77.06-68.68Z'/%3E %3Cpath class='cls-1' d='M993.09,462.02v-44.58c-41.25,5.02-81.46,18.4-118.53,39.97-28.25,16.45-53.3,36.89-74.69,60.5v56.03h11.46c22.11-31.63,50.92-58.33,85.15-78.25,30.28-17.62,63-28.88,96.61-33.67Z'/%3E %3Cpath class='cls-1' d='M993.09,534.61v36.58c23.32-34.51,54.2-63.58,91.13-85.08,31.98-18.61,66.57-30.43,102.09-35.29v-22.28c-39.34,4.97-77.68,17.84-113.05,38.43-30.9,17.99-57.87,40.89-80.17,67.64Z'/%3E %3Cpath class='cls-1' d='M1186.31,545.62v17.95c23.14-32.11,52.86-59.31,87.99-79.75,33.41-19.45,69.16-31.26,105.23-35.99v-11.13c-37.94,4.78-75.57,17.1-110.71,37.55-32.63,18.99-60.23,43.39-82.5,71.37Z'/%3E %3Cpath class='cls-1' d='M428.52,379.16c24.68-19.54,53.24-34.06,84.47-42.49,20.32-5.49,40.76-8.11,60.86-8.11,11.06,0,22.01.84,32.81,2.39v-111.27c-39.89-3.88-81.1-.78-122.03,10.27-25,6.75-48.79,16.24-71.18,28.04v-68.55c-46.24,5.03-92.18,19.59-134.97,44.49-21.25,12.37-40.69,26.7-58.25,42.62v102.61h53.4c16.61-19.23,36.54-36.1,59.65-49.54,25.51-14.85,52.67-24.31,80.17-28.75v78.3h15.08Z'/%3E %3Cpath class='cls-1' d='M993.09,306.91h0v41.02c26.59-20.12,57.29-35.61,91.32-44.81,23.16-6.25,46.45-9.25,69.36-9.25,10.95,0,21.81.69,32.54,2.02v-44.47c-36.97-3.94-75.24-1.27-113.24,9-28.81,7.79-55.6,19.42-79.97,34.2h0v-54.47c-38.44-3.9-77.65-.78-116.08,9.6-27.62,7.46-53.43,18.35-77.14,32.06v80.07c26.96-21.82,58.68-38.52,94.16-48.11,32.81-8.86,66.34-11.07,99.06-6.88Z'/%3E %3Cpath class='cls-1' d='M1463.35,278.91c-30.52,8.25-58.62,21.06-83.83,37.48v13.32c25.77-17.75,54.85-31.54,86.66-40.13,35.29-9.53,71.32-12.06,106.55-7.94v-11.11c-36.18-4.07-73.16-1.4-109.39,8.38Z'/%3E %3Cpath class='cls-1' d='M284.7,860.38c-9.07,34.12-12.3,68.88-9.98,103.11h43.92c-2.41-30.41.34-61.34,8.4-91.67,10.4-39.12,28.9-73.91,53.13-103.11h-54.64c-17.97,27.45-31.94,58.2-40.84,91.67Z'/%3E %3C/svg%3E";

   
  const TOKENS_CSS = `
    espace-rhum {
       
      --er-bg-base:           #16355D;
      --er-bg-section:        #0F2345;
      --er-bg-section-alt:    #0F2345;
      --er-bg-elevated:       #1E4478;
      --er-bg-card:           #0A1A35;
      --er-bg-overlay:        rgba(10, 18, 40, 0.82);
      --er-surface:           rgba(255, 255, 255, 0.06);
      --er-border-soft:       rgba(255, 255, 255, 0.08);
      --er-border-hover:      rgba(255, 255, 255, 0.22);

      --er-white:             #FFFFFF;
      --er-text-primary:      #FFFFFF;
      --er-text-secondary:    rgba(255, 255, 255, 0.78);
      --er-text-muted:        rgba(255, 255, 255, 0.48);
      --er-text-label:        rgba(255, 255, 255, 0.58);

      --er-teal:              #5DBFC0;
      --er-teal-deep:         #429991;
      --er-teal-soft:         rgba(93, 191, 192, 0.14);
      --er-amber-bright:      #FCF150;
      --er-amber:             #F5BE41;

      --er-danger:            #E63946;
      --er-warning:           #F5BE41;
      --er-success:           #5DBFC0;

      


      --er-class-ultim:        #659FBF;
      --er-class-ocean-fifty:  #71B9F0;
      --er-class-class40:      #7E92EF;
      --er-class-imoca:        #76BCBE;
      --er-class-vintage-mono: #F9F06D;
      --er-class-vintage-multi:#F19F39;

      













      --er-pastille-critical:   #FFFFFF;
      --er-pastille-major:      #FCF150;
      --er-pastille-editorial:  #F5BE41;
      --er-pastille-contextual: #56BCF6;
      --er-pastille-core:       #5DBFC0;

      --er-font-display: 'Varien', serif;
      --er-font-body:    'Montserrat', system-ui, -apple-system, sans-serif;

      --er-radius-xs:           6px;
      --er-radius-sm:           10px;
      --er-radius-md:           14px;
      --er-radius-lg:           20px;
      --er-radius-full:         9999px;
      --er-radius-btn:          3px 15px 3px 15px;
      --er-radius-btn-inverse:  15px 3px 15px 3px;
      --er-radius-card:         28px 3px 16px 3px;
      --er-radius-card-sm:      14px 3px 10px 3px;
      --er-radius-card-inverse: 3px 28px 3px 16px;

      --er-shadow-sm:   0 2px 8px rgba(0, 0, 0, 0.2);
      --er-shadow-md:   0 8px 24px rgba(0, 0, 0, 0.35);
      --er-shadow-lg:   0 16px 48px rgba(0, 0, 0, 0.55);
      --er-shadow-glow: 0 0 32px rgba(93, 191, 192, 0.18);

      --er-ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --er-ease-entry:  cubic-bezier(0.22, 1, 0.36, 1);
      --er-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
      --er-dur-fast: 200ms;
      --er-dur-med:  400ms;
      --er-dur-slow: 650ms;

      display: block;
      font-family: var(--er-font-body);
      color: var(--er-text-primary);
      min-height: 100vh;
      min-height: 100dvh;  
      background:
        radial-gradient(ellipse 80% 50% at 88% 12%, rgba(93, 191, 192, 0.18) 0%, transparent 55%),
        radial-gradient(ellipse 70% 60% at 8% 92%, rgba(252, 241, 80, 0.09) 0%, transparent 50%),
        var(--er-bg-base);
       
      background-attachment: fixed;
    }

    espace-rhum *,
    espace-rhum *::before,
    espace-rhum *::after { box-sizing: border-box; }

     
    espace-rhum.er-theme-course, espace-rhum .er-theme-course { }
    espace-rhum.er-theme-marque, espace-rhum .er-theme-marque {
      --er-bg-base: #191D31; --er-bg-section: #10142A; --er-bg-elevated: #2A2F4A; --er-bg-card: #0E1122;
      --er-teal: #419992; --er-teal-deep: #00676E; --er-amber-bright: #FCDD00; --er-amber: #F5BE41;
    }
    espace-rhum.er-theme-histoire, espace-rhum .er-theme-histoire {
      --er-bg-base: #20515E; --er-bg-section: #173F4A; --er-bg-elevated: #2A646D; --er-bg-card: #12333C;
      --er-teal: #5DBFC0; --er-teal-deep: #2A646D; --er-amber-bright: #F5BE41; --er-amber: #C1E1D9;
    }
    espace-rhum.er-theme-evenement-sm, espace-rhum .er-theme-evenement-sm {
      --er-bg-base: #16355D; --er-bg-section: #0F2345; --er-bg-elevated: #4F5BA5; --er-bg-card: #0A1F3D;
      --er-teal: #56BCF6; --er-teal-deep: #479ED7; --er-amber-bright: #FCF150; --er-amber: #7894F7;
    }
    espace-rhum.er-theme-evenement-pap, espace-rhum .er-theme-evenement-pap {
      --er-bg-base: #16355D; --er-bg-section: #1E2E50; --er-bg-elevated: #F19F39; --er-bg-card: #0A1F3D;
      --er-teal: #85D8D5; --er-teal-deep: #5DBFC0; --er-amber-bright: #FCF150; --er-amber: #F19F39;
    }
    espace-rhum.er-theme-bilan, espace-rhum .er-theme-bilan {
      --er-bg-base: #20515E; --er-bg-section: #173F4A; --er-bg-elevated: #2A646D; --er-bg-card: #12333C;
      --er-teal: #5DBFC0; --er-amber-bright: #F5BE41; --er-amber: #F19F39;
    }

     
    



    









    espace-rhum .er-motif-host { position: relative; isolation: isolate; }
    espace-rhum .er-motif-host::before {
      content: ''; position: absolute; inset: 0; pointer-events: none; z-index: -1;
      background: var(--er-motif-c, rgba(255, 255, 255, 0.05));
      -webkit-mask-image: url("${MOTIF_MASK_URI}"), var(--er-motif-fondu, linear-gradient(var(--er-motif-fade, to left), #000 38%, transparent 94%));
      mask-image: url("${MOTIF_MASK_URI}"), var(--er-motif-fondu, linear-gradient(var(--er-motif-fade, to left), #000 38%, transparent 94%));
      -webkit-mask-repeat: no-repeat, no-repeat;
      mask-repeat: no-repeat, no-repeat;
      -webkit-mask-size: var(--er-motif-size, 150% auto), 100% 100%;
      mask-size: var(--er-motif-size, 150% auto), 100% 100%;
      -webkit-mask-position: var(--er-motif-pos, right bottom), center;
      mask-position: var(--er-motif-pos, right bottom), center;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
      transform: var(--er-motif-flip, none);
    }
    espace-rhum .er-motif-host--filaire::before {
      -webkit-mask-image: url("${MOTIF_FILAIRE_URI}"), var(--er-motif-fondu, linear-gradient(var(--er-motif-fade, to left), #000 38%, transparent 94%));
      mask-image: url("${MOTIF_FILAIRE_URI}"), var(--er-motif-fondu, linear-gradient(var(--er-motif-fade, to left), #000 38%, transparent 94%));
    }


     
    @keyframes er-fadeup {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes er-pulse-ring {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0.5; }
    }
    @keyframes er-halo-pulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50%      { opacity: 1; transform: scale(1.15); }
    }

     
    espace-rhum .er-cockpit {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 24px;
      align-items: start;
      padding: clamp(64px, 7vh, 112px) clamp(16px, 3vw, 32px);
      max-width: 1440px;
      margin: 0 auto;
    }
    

    





























    espace-rhum .er-cockpit,
    espace-rhum .er-mobile-topbar,
    espace-rhum .er-mobile-shell {
      animation: er-dash-in 0.4s var(--er-ease-smooth) backwards;
    }
    @keyframes er-dash-in { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-cockpit,
      espace-rhum .er-mobile-topbar,
      espace-rhum .er-mobile-shell { animation: none; }
    }

     
    espace-rhum .er-sidebar {
      


      display: flex; flex-direction: column; align-items: stretch;
      position: sticky;
      top: 24px;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: 20px 4px 14px 4px;
      padding: 24px 20px;
      

      --er-motif-c: rgba(255, 255, 255, 0.05);
      --er-motif-size: 200% auto; --er-motif-pos: -55% 120%;
      --er-motif-fade: to top;
      --er-motif-flip: scaleX(-1);
      max-height: calc(100vh - 48px);
      max-height: calc(100dvh - 48px);  
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--er-teal-soft) transparent;
    }
    espace-rhum .er-sidebar > * { position: relative; z-index: 1; }

    

    espace-rhum .er-profile-panel,
    espace-rhum .er-prefs-body,
    espace-rhum .er-vilmob-panel,
    espace-rhum .er-pick-list {
      scrollbar-width: thin;
      scrollbar-color: rgba(93, 191, 192, 0.45) transparent;
    }
    espace-rhum .er-profile-panel::-webkit-scrollbar,
    espace-rhum .er-prefs-body::-webkit-scrollbar,
    espace-rhum .er-vilmob-panel::-webkit-scrollbar,
    espace-rhum .er-pick-list::-webkit-scrollbar { width: 8px; }
    espace-rhum .er-profile-panel::-webkit-scrollbar-track,
    espace-rhum .er-prefs-body::-webkit-scrollbar-track,
    espace-rhum .er-vilmob-panel::-webkit-scrollbar-track,
    espace-rhum .er-pick-list::-webkit-scrollbar-track { background: transparent; }
    espace-rhum .er-profile-panel::-webkit-scrollbar-thumb,
    espace-rhum .er-prefs-body::-webkit-scrollbar-thumb,
    espace-rhum .er-vilmob-panel::-webkit-scrollbar-thumb,
    espace-rhum .er-pick-list::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(93, 191, 192, 0.55), rgba(93, 191, 192, 0.28));
      border-radius: 99px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-profile-panel::-webkit-scrollbar-thumb:hover,espace-rhum .er-prefs-body::-webkit-scrollbar-thumb:hover,espace-rhum .er-vilmob-panel::-webkit-scrollbar-thumb:hover,espace-rhum .er-pick-list::-webkit-scrollbar-thumb:hover{
      background: linear-gradient(180deg, var(--er-teal), rgba(93, 191, 192, 0.5));
      background-clip: padding-box;
    }}

     
    espace-rhum .er-sidebar::-webkit-scrollbar { width: 6px; }
    espace-rhum .er-sidebar::-webkit-scrollbar-track { background: transparent; }
    espace-rhum .er-sidebar::-webkit-scrollbar-thumb {
      background: rgba(93, 191, 192, 0.2);
      border-radius: 6px;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-sidebar::-webkit-scrollbar-thumb:hover{
      background: rgba(93, 191, 192, 0.4);
    }}

    espace-rhum::-webkit-scrollbar { width: 10px; }
    espace-rhum::-webkit-scrollbar-track { background: transparent; }
    espace-rhum::-webkit-scrollbar-thumb {
      background: rgba(93, 191, 192, 0.18);
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum::-webkit-scrollbar-thumb:hover{
      background: rgba(93, 191, 192, 0.32);
      background-clip: padding-box;
    }}

    espace-rhum .er-sidebar-branding { padding-bottom: 18px; border-bottom: 1px solid var(--er-border-soft); margin-bottom: 18px; }

     
    espace-rhum .er-branding-label {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 4px;
      column-gap: 6px;
      font-family: var(--er-font-body);
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      line-height: 1.3;
    }
    espace-rhum .er-branding-label-rdr { color: var(--er-white); }
    espace-rhum .er-branding-label-sep { color: var(--er-text-muted); opacity: 0.5; font-weight: 400; letter-spacing: 0; }
    espace-rhum .er-branding-label-destination { color: #F19F39; }
    espace-rhum .er-sidebar-branding .er-branding-label { margin-bottom: 4px; }
     
    espace-rhum .er-sidebar .er-branding-label-sep { display: none; }
    espace-rhum .er-sidebar-branding-title { font-family: var(--er-font-display); font-style: italic; font-size: 28px; text-transform: uppercase; line-height: 0.95; letter-spacing: -0.01em; background: linear-gradient(135deg, var(--er-white) 0%, var(--er-teal) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }

    












    espace-rhum .er-sidebar-identity { display: flex; align-items: center; gap: 8px; padding-bottom: 18px; border-bottom: 1px solid var(--er-border-soft); margin-bottom: 18px; z-index: 40; }
    espace-rhum .er-sidebar-tymal { flex: none; width: 74px; height: 74px; margin: -6px 0 -8px -10px; }
    espace-rhum .er-sidebar-tymal img { display: block; width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.45)); }
    espace-rhum .er-sidebar-identity-text { min-width: 0; }
    espace-rhum .er-sidebar-greeting { font-family: var(--er-font-body); font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--er-teal); margin-bottom: 2px; }
    espace-rhum .er-sidebar-name { font-family: var(--er-font-display); font-style: italic; font-size: 22px; text-transform: uppercase; line-height: 1; overflow-wrap: anywhere; }
    


    espace-rhum .er-sidebar-rang-ligne { display: flex; flex-wrap: wrap; align-items: center; gap: 3px 5px; margin-top: 6px; white-space: nowrap; }
    

    espace-rhum .er-sidebar-rang {
      display: inline-flex; align-items: center; gap: 3px; min-width: 0;
      padding: 0 0 2px; border: 0; cursor: pointer;
      font-family: var(--er-font-body); font-size: 10.5px; font-weight: 800;
      letter-spacing: 0.05em; text-transform: uppercase; color: var(--er-amber-bright);
      background: linear-gradient(90deg, rgba(252, 241, 80, 0.5) 50%, transparent 50%) 0 100% / 4px 1px repeat-x;
    }
    espace-rhum .er-sidebar-rang svg { width: 11px; height: 11px; flex: none; stroke-width: 2.4; opacity: 0.8; transition: transform var(--er-dur-fast) var(--er-ease-smooth); }
    espace-rhum .er-sidebar-identity.est-ouvert .er-sidebar-rang svg { transform: rotate(180deg); }
    espace-rhum .er-sidebar-rang-pct {
      flex: none; padding: 2px 5px; border-radius: 999px;
      background: rgba(238, 242, 248, 0.07);
      font-family: var(--er-font-body); font-size: 8.5px; font-weight: 700;
      letter-spacing: 0.04em; text-transform: uppercase; color: rgba(238, 242, 248, 0.5);
    }

    espace-rhum .er-sidebar-stats-row { display: flex; gap: 8px; margin-bottom: 18px; }
    espace-rhum .er-sidebar-stat { flex: 1; padding: 10px 8px; background: var(--er-surface); border-radius: 10px; text-align: center; }
    espace-rhum .er-sidebar-stat-num { font-family: var(--er-font-display); font-style: italic; font-size: 20px; color: var(--er-teal); line-height: 1; }
    espace-rhum .er-sidebar-stat-label { font-family: var(--er-font-body); font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--er-text-muted); margin-top: 4px; }

    





    espace-rhum .er-rang-pop {
      position: absolute; z-index: 30; left: -6px; right: -6px; top: calc(100% - 12px);
      padding: 14px 14px 12px; border-radius: 14px; background: #13204A; text-align: left;
      font-family: var(--er-font-body);
      box-shadow: 0 22px 44px -14px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(93, 191, 192, 0.28);
      opacity: 0; visibility: hidden; transform: translateY(-6px); pointer-events: none;
      transition: opacity var(--er-dur-fast) var(--er-ease-smooth), transform var(--er-dur-fast) var(--er-ease-smooth), visibility var(--er-dur-fast);
    }
    espace-rhum .er-rang-pop::before {
      content: ""; position: absolute; top: -6px; left: 112px; width: 12px; height: 12px;
      transform: rotate(45deg); background: #13204A; box-shadow: inset 1px 1px 0 rgba(93, 191, 192, 0.28);
    }
    espace-rhum .er-sidebar-identity.est-ouvert .er-rang-pop { opacity: 1; visibility: visible; transform: none; pointer-events: auto; }
    espace-rhum .er-rang-titre { margin: 0 0 8px; font-size: 10px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: var(--er-teal); }
    espace-rhum .er-rank-bar {
      height: 3px; border-radius: 999px; margin: 0 0 8px;
      background: rgba(255, 255, 255, 0.08); overflow: hidden;
    }
    espace-rhum .er-rank-bar span {
      display: block; height: 100%; border-radius: 999px;
      background: var(--er-teal); opacity: 0.75;
    }
    espace-rhum .er-rank-next {
      margin: 0 0 6px; font-size: 12px; line-height: 1.45; color: rgba(238, 242, 248, 0.72);
    }
    espace-rhum .er-rank-next b { color: var(--er-white); font-weight: 800; }
    espace-rhum .er-rank-next.is-max { color: var(--er-amber); }
    espace-rhum .er-rang-explique { margin: 0 0 8px; font-size: 11px; line-height: 1.45; color: rgba(238, 242, 248, 0.55); }
     
    espace-rhum .er-sidebar-rank-icon { width: 14px; height: 14px; flex-shrink: 0; stroke: var(--er-amber); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    espace-rhum .er-sidebar-rank-text { font-weight: 700; color: var(--er-amber); letter-spacing: 0.02em; }
    espace-rhum .er-sidebar-rank-text strong { color: var(--er-amber-bright); margin-right: 4px; }

    espace-rhum .er-sidebar-nav { display: flex; flex-direction: column; gap: 2px; margin-bottom: 24px; }
    espace-rhum .er-sidebar-nav-link { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 12px; border: none; background: none; text-align: left; border-radius: 10px; color: var(--er-text-muted); text-decoration: none; font-family: var(--er-font-body); font-size: 13px; font-weight: 600; cursor: pointer; transition: all var(--er-dur-fast) var(--er-ease-smooth); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-sidebar-nav-link:hover{ background: var(--er-teal-soft); color: var(--er-text-secondary); }}
    espace-rhum .er-sidebar-nav-link--active { background: rgba(93, 191, 192, 0.18); color: var(--er-teal); }
    espace-rhum .er-sidebar-nav-link svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }

    espace-rhum .er-sidebar-section-title { font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--er-text-label); margin-bottom: 10px; padding-left: 4px; }


    espace-rhum .er-sidebar-preferences-btn { width: 100%; justify-content: center; margin-top: 8px; }

    







    espace-rhum .er-sidebar-pack-mini {
      order: 3; width: 100%; margin-top: 10px;
      display: flex; align-items: center; gap: 8px;
      padding: 9px 12px; border-radius: 10px;
      border: 1px solid var(--er-border-soft); background: rgba(255,255,255,0.03);
      color: var(--er-text-muted); cursor: pointer;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase; text-align: left;
      transition: border-color 0.18s ease, color 0.18s ease;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-sidebar-pack-mini:hover{ border-color: var(--er-border-hover); color: var(--er-text-secondary); }}
    espace-rhum .er-sidebar-pack-mini:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-sidebar-pack-mini > svg { width: 15px; height: 15px; flex: none; }
    espace-rhum .er-sidebar-pack-mini > span:first-of-type { flex: 1; min-width: 0; }
     
    espace-rhum .er-sidebar-pack-mini-ok { flex: none; display: grid; place-items: center;
      width: 17px; height: 17px; border-radius: 50%; background: var(--er-teal-soft); }
    espace-rhum .er-sidebar-pack-mini-ok svg { width: 11px; height: 11px; fill: none;
      stroke: var(--er-teal); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }

     
    espace-rhum .er-btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px;
      font-family: var(--er-font-body); font-size: 13px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase;
      border-radius: var(--er-radius-btn);
      cursor: pointer; white-space: nowrap;
      




      text-decoration: none;
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  transform var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-btn--ghost { background: var(--er-teal-soft); border: 1.5px solid rgba(93, 191, 192, 0.35); color: var(--er-teal); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-btn--ghost:hover{ background: rgba(93, 191, 192, 0.22); border-color: var(--er-teal); transform: translateY(-1px); }}
    espace-rhum .er-btn--primary { background: var(--er-amber-bright); color: var(--er-bg-base); font-weight: 800; border: none; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-btn--primary:hover{ background: #FFE500; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(252, 241, 80, 0.25); }}
    espace-rhum .er-btn--outline { background: transparent; border: 1.5px solid rgba(255, 255, 255, 0.35); color: var(--er-text-primary); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-btn--outline:hover{ background: rgba(255, 255, 255, 0.08); border-color: var(--er-text-primary); }}
    espace-rhum .er-btn .er-icon { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }

     
    espace-rhum .er-status-screen {
      min-height: 70vh;
      display: grid; place-items: center;
      padding: clamp(48px, 10vh, 120px) 24px;
    }
    espace-rhum .er-status-inner {
      max-width: 460px; text-align: center;
      display: flex; flex-direction: column; align-items: center; gap: 16px;
    }
    espace-rhum .er-status-icon {
      width: 72px; height: 72px;
      display: grid; place-items: center;
      border-radius: 50%;
      background: var(--er-teal-soft);
      color: var(--er-teal);
    }
    espace-rhum .er-status-icon svg { width: 40px; height: 40px; }
    espace-rhum .er-status-title {
      font-family: var(--er-font-display); font-style: italic; text-transform: uppercase;
      font-size: clamp(24px, 4vw, 34px); line-height: 1.05;
      color: var(--er-white); margin: 0;
    }
    espace-rhum .er-status-text {
      font-family: var(--er-font-body); font-size: 14px; line-height: 1.6;
      color: var(--er-text-secondary); margin: 0;
    }
    espace-rhum .er-status-sub {
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--er-text-muted);
    }
    espace-rhum .er-status-spinner {
      width: 28px; height: 28px; margin-top: 4px;
      border-radius: 50%;
      border: 3px solid var(--er-teal-soft);
      border-top-color: var(--er-teal);
      animation: er-status-spin 0.9s linear infinite;
    }
    @keyframes er-status-spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-status-spinner { animation: none; opacity: 0.6; }
    }
    espace-rhum .er-status-retry { margin-top: 8px; }

     
    

    espace-rhum .er-skeleton { position: relative; padding: clamp(64px, 7vh, 112px) clamp(16px, 3vw, 32px); }

    











    espace-rhum .er-sk-mot {
      position: absolute; inset: 0; z-index: 3; pointer-events: none;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 14px; text-align: center;
      padding: 0 24px;
      background: radial-gradient(46% 34% at 50% 50%,
                  rgba(13, 36, 69, 0.86), rgba(13, 36, 69, 0.42) 58%, transparent 82%);
    }
    espace-rhum .er-sk-mot-titre {
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: clamp(21px, 3vw, 30px); line-height: 1;
      text-transform: uppercase; letter-spacing: -0.01em;
      color: var(--er-text-primary);
      text-shadow: 0 6px 26px rgba(0, 0, 0, 0.6);
    }
    espace-rhum .er-sk-mot-sous {
      font-family: var(--er-font-body); font-size: 13px;
      color: var(--er-text-secondary);
    }
    espace-rhum .er-sk-jauge {
      position: relative; width: 212px; max-width: 60vw; height: 4px;
      border-radius: 999px; background: rgba(255, 255, 255, 0.12); overflow: hidden;
    }
    espace-rhum .er-sk-jauge i {
      position: absolute; left: 0; top: 0; bottom: 0; width: 0;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--er-teal), var(--er-amber-bright, #FCF150));
      animation: er-sk-jauge 2.6s cubic-bezier(0.3, 0, 0.2, 1) infinite;
    }
    @keyframes er-sk-jauge {
      0%   { width: 0;    opacity: 1; }
      82%  { width: 100%; opacity: 1; }
      100% { width: 100%; opacity: 0; }
    }
    


    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-sk-jauge i { animation: none; width: 60%; opacity: 0.75; }
    }
    espace-rhum .er-sk-cockpit {
      display: grid; grid-template-columns: 248px minmax(0, 1fr); gap: 24px;
      max-width: 1440px; margin: 0 auto;
    }
    espace-rhum .er-sk-sidebar { display: flex; flex-direction: column; gap: 14px; }
    espace-rhum .er-sk-main { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
    espace-rhum .er-sk-nav-group { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
    espace-rhum .er-sk-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    espace-rhum .er-sk-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
     
    espace-rhum .er-sk-box {
      position: relative; overflow: hidden;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
    }
    espace-rhum .er-sk-box::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(100deg, transparent 20%, rgba(255, 255, 255, 0.09) 50%, transparent 80%);
      background-size: 200% 100%;
      animation: er-sk-shimmer 1.6s linear infinite;
    }
    @keyframes er-sk-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    espace-rhum .er-sk-topbar { display: none; height: 56px; margin-bottom: 16px; border-radius: 14px; }
    espace-rhum .er-sk-rank  { height: 54px; border-radius: 14px; }
    espace-rhum .er-sk-nav   { height: 40px; border-radius: 10px; }
    espace-rhum .er-sk-chip  { width: 74px; height: 30px; border-radius: 999px; }
    espace-rhum .er-sk-hero  { height: 300px; border-radius: 20px; }
    espace-rhum .er-sk-card  { height: 200px; border-radius: 16px; }
    espace-rhum .er-sk-block { height: 240px; border-radius: 18px; }
     
    espace-rhum .er-sk-slow {
      max-width: 1440px; margin: 0 auto 16px;
      display: flex; align-items: center; gap: 10px;
      padding: 12px 18px; border-radius: 12px;
      background: var(--er-teal-soft); color: var(--er-teal);
      font-family: var(--er-font-body); font-size: 13px; font-weight: 600;
      opacity: 0; transform: translateY(-6px);
      transition: opacity 0.4s var(--er-ease-smooth), transform 0.4s var(--er-ease-smooth);
    }
    espace-rhum .er-sk-slow.is-visible { opacity: 1; transform: none; }
    espace-rhum .er-sk-slow-dot {
      width: 8px; height: 8px; border-radius: 50%; background: var(--er-teal); flex: 0 0 auto;
      animation: er-sk-pulse 1.2s ease-in-out infinite;
    }
    @keyframes er-sk-pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
    @media (max-width: 767px) {
      espace-rhum .er-sk-cockpit { grid-template-columns: 1fr; }
      espace-rhum .er-sk-sidebar { display: none; }
      espace-rhum .er-sk-topbar { display: block; }
      espace-rhum .er-sk-row { grid-template-columns: 1fr 1fr; }
      espace-rhum .er-sk-hero { height: 360px; }
      













      espace-rhum .er-sk-mot {
        justify-content: flex-start;
        padding-top: clamp(56px, 17vh, 150px);
        gap: 12px;
        background: radial-gradient(78% 26% at 50% 21%,
                    rgba(13, 36, 69, 0.9), rgba(13, 36, 69, 0.5) 56%, transparent 84%);
      }
      espace-rhum .er-sk-mot-sous { max-width: 24ch; }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-sk-box::after { animation: none; }
      espace-rhum .er-sk-slow-dot { animation: none; }
    }

     
    espace-rhum .er-dashboard { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
     
    espace-rhum [data-slot], espace-rhum [data-section="badges"], espace-rhum .er-dashboard { scroll-margin-top: 100px; }
    espace-rhum .er-dashboard > * { animation: er-fadeup 0.6s var(--er-ease-entry) both; }
    espace-rhum .er-dashboard > *:nth-child(2) { animation-delay: 60ms; }
    espace-rhum .er-dashboard > *:nth-child(3) { animation-delay: 120ms; }
    espace-rhum .er-dashboard > *:nth-child(4) { animation-delay: 180ms; }
    espace-rhum .er-dashboard > *:nth-child(5) { animation-delay: 240ms; }
    espace-rhum .er-dashboard > *:nth-child(6) { animation-delay: 300ms; }
    espace-rhum .er-dashboard > *:nth-child(7) { animation-delay: 360ms; }
    espace-rhum .er-dashboard > *:nth-child(8) { animation-delay: 420ms; }

    espace-rhum .er-widget {
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-card);
      padding: 24px;
      position: relative;
      overflow: hidden;
    }
    espace-rhum .er-widget--placeholder {
      min-height: 180px;
      display: flex; align-items: center; justify-content: center;
      border: 1px dashed rgba(93, 191, 192, 0.3);
      color: var(--er-text-muted);
      font-family: var(--er-font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; text-align: center;
    }

     
    espace-rhum .er-widget-label {
      display: inline-flex; align-items: center; gap: 6px;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.2em; text-transform: uppercase; color: var(--er-teal);
      margin-bottom: 10px;
    }
    espace-rhum .er-widget-label::before {
      content: ''; width: 18px; height: 1.5px; background: currentColor;
    }

     
    espace-rhum .er-flag-circle {
      display: inline-block;
      width: 18px; height: 18px;
      border-radius: 50%;
      background-size: cover; background-position: center;
      border: 1px solid rgba(255, 255, 255, 0.3);
      flex-shrink: 0;
    }

     
    espace-rhum .er-pastille {
      display: inline-flex; align-items: center;
      padding: 4px 10px;
      border-radius: var(--er-radius-full);
      font-family: var(--er-font-body);
      font-size: 10px; font-weight: 800;
      letter-spacing: 0.12em; text-transform: uppercase;
      align-self: flex-start;
      margin-bottom: 10px;
    }
    espace-rhum .er-pastille[data-tier="critical"]   { background: var(--er-pastille-critical); color: var(--er-bg-base); animation: er-pulse-ring 2s ease-in-out infinite; }
    espace-rhum .er-pastille[data-tier="major"]      { background: var(--er-pastille-major); color: var(--er-bg-base); }
    espace-rhum .er-pastille[data-tier="editorial"]  { background: var(--er-pastille-editorial); color: var(--er-bg-card); }
    espace-rhum .er-pastille[data-tier="contextual"] { background: var(--er-pastille-contextual); color: var(--er-bg-base); }
    espace-rhum .er-pastille[data-tier="core"]       { background: var(--er-pastille-core); color: var(--er-bg-base); }

     
    

    espace-rhum .er-widget--hero {
      grid-column: span 8;
      grid-row: span 2;
      padding: 0;
      min-height: 560px;
      background: var(--er-bg-card);
    }
    





























    espace-rhum .er-hero-photo-bg {
      position: absolute; inset: 0;
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
      z-index: 0;
    }
     
    espace-rhum .er-hero-photo-bg.is-empty {
      background-position: center;
    }
    


    espace-rhum .er-hero-photo-bg::after {
      content: ''; position: absolute; inset: 0;
      background:
        linear-gradient(to top right, rgba(10, 26, 53, 0.97) 0%, rgba(10, 26, 53, 0.80) 24%, rgba(10, 26, 53, 0.30) 46%, transparent 66%),
        linear-gradient(to top, rgba(10, 26, 53, 0.92) 0%, rgba(10, 26, 53, 0.25) 32%, transparent 54%);
    }
    




    espace-rhum .er-hero-class-flag {
      position: absolute; top: -2px; right: 32px;
      width: 84px; height: auto; z-index: 3;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
      pointer-events: none;
    }
    espace-rhum .er-hero-class-flag img { width: 100%; height: auto; display: block; }
    espace-rhum .er-hero-inner {
      position: relative; z-index: 2;
      height: 100%; min-height: 600px;
      padding: 40px;
      display: flex; flex-direction: column; justify-content: space-between;
    }
    espace-rhum .er-hero-top { display: flex; flex-direction: column; align-items: flex-start; }
    espace-rhum .er-hero-reason {
      font-family: var(--er-font-body); font-size: 13px;
      color: var(--er-text-secondary);
      font-style: italic;
      margin-bottom: 24px;
      padding-left: 12px;
      border-left: 2px solid var(--er-amber-bright);
      max-width: 60%;
    }
    








    


    espace-rhum .er-hero-content { max-width: 62%; }
    espace-rhum .er-hero-firstname {
      font-family: var(--er-font-body); font-size: 13px; font-weight: 700;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--er-text-muted);
      margin-bottom: 8px;
      display: flex; align-items: center; gap: 10px;
    }
    espace-rhum .er-hero-lastname {
      font-family: var(--er-font-display); font-style: italic;
      font-size: clamp(40px, 5.8vw, 72px);
      text-transform: uppercase; line-height: 0.9;
      color: var(--er-text-primary);
      letter-spacing: -0.02em;
      margin-bottom: 14px;
      text-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      white-space: nowrap;
    }
     
    espace-rhum .er-hero-lastname[data-len="9"],
    espace-rhum .er-hero-lastname[data-len="10"]  { font-size: clamp(36px, 5.2vw, 64px); }
    espace-rhum .er-hero-lastname[data-len="11"],
    espace-rhum .er-hero-lastname[data-len="12"]  { font-size: clamp(30px, 4.5vw, 56px); }
    espace-rhum .er-hero-lastname[data-len="13"],
    espace-rhum .er-hero-lastname[data-len="14"]  { font-size: clamp(26px, 4vw, 50px); }
    espace-rhum .er-hero-lastname[data-len="15"],
    espace-rhum .er-hero-lastname[data-len="16"]  { font-size: clamp(22px, 3.5vw, 44px); }
    espace-rhum .er-hero-lastname.er-hero-lastname--wrap {
      font-size: clamp(20px, 3vw, 38px);
      white-space: normal;
      line-height: 0.95;
    }
    espace-rhum .er-hero-boat {
      font-family: var(--er-font-body); font-size: 14px;
      color: var(--er-text-secondary);
      margin-bottom: 28px; font-weight: 500;
    }
    

    espace-rhum .er-hero-actions {
      display: flex !important;
      flex-direction: row !important;
      gap: 12px;
      flex-wrap: wrap;
      align-items: stretch;
    }
    espace-rhum .er-hero-actions .er-btn {
      flex: 1 1 0 !important;
      min-width: 0;
      justify-content: center;
    }
    



    espace-rhum .er-hero-suivre-icone { display: inline-flex; width: 14px; height: 14px; }
    espace-rhum .er-hero-suivre-icone svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2.4; stroke-linecap: round; }

     
    espace-rhum .er-hero-suivre-btn[data-following="true"] {
      background: var(--er-teal);
      color: var(--er-white);
      border-color: var(--er-teal);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-hero-suivre-btn[data-following="true"]:hover{
      filter: brightness(.92);
    }}

     
    espace-rhum .er-hero-empty {
      position: relative; z-index: 2;
      height: 100%; min-height: 600px;
      padding: 40px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center;
    }
    espace-rhum .er-hero-empty-title {
      font-family: var(--er-font-display); font-style: italic;
      font-size: clamp(28px, 4vw, 48px);
      text-transform: uppercase; line-height: 1;
      color: var(--er-text-secondary);
      margin-top: 18px;
    }
    espace-rhum .er-hero-empty-sub {
      font-family: var(--er-font-body); font-size: 14px;
      color: var(--er-text-muted); margin-top: 10px;
    }

     
    














    espace-rhum .er-widget--flash-news {
      grid-column: span 4;
      background: linear-gradient(135deg, rgba(252, 241, 80, 0.10) 0%, var(--er-bg-card) 60%);
      border-color: rgba(252, 241, 80, 0.26);
      min-height: 270px;
      display: flex; flex-direction: column;
    }
     
    espace-rhum .er-widget--flash-news .er-widget-label { color: var(--er-amber-bright); }
    





    espace-rhum .er-flash-title {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 22px; text-transform: uppercase;
      line-height: 1.05; color: var(--er-text-primary);
      margin: 0 0 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      overflow: hidden;
    }
    














    espace-rhum .er-flash-excerpt {
      margin: 0 0 12px;
      flex: 0 0 auto;
      min-height: 0;
      font-family: var(--er-font-body);
      font-size: 13px;
      line-height: 1.5;
      color: var(--er-text-secondary);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    espace-rhum .er-flash-meta {
      display: flex; gap: 10px; margin-top: auto;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase; color: var(--er-text-muted);
    }
    espace-rhum .er-flash-meta span:not(:last-child)::after { content: '·'; margin-left: 10px; }

     
    espace-rhum .er-widget--badges-mini {
      grid-column: span 4;
      min-height: 270px;
    }
    espace-rhum .er-badges-mini-header {
      display: flex; justify-content: space-between; align-items: flex-start;
      margin-bottom: 18px;
    }
    espace-rhum .er-badges-mini-counter {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 40px; line-height: 0.9;
      color: var(--er-teal);
    }
    espace-rhum .er-badges-mini-counter span {
      font-size: 22px; color: var(--er-text-muted);
    }
    espace-rhum .er-badges-mini-label {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--er-amber); text-align: right; line-height: 1.3;
    }
    




    espace-rhum .er-badges-mini-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
    }
    espace-rhum .er-badge-tile-mini {
      aspect-ratio: 1/1;
      display: flex; align-items: center; justify-content: center;
      border-radius: var(--er-radius-card-sm);
      background: var(--er-surface);
      border: 1px solid var(--er-border-soft);
    }
    


    espace-rhum .er-badge-tile-mini svg {
      width: 40px; height: 40px;
      fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
    }
    




    espace-rhum .er-badge-tile-mini.is-art svg { width: 64px; height: 64px; }

    











    espace-rhum .er-badge-tile-mini.is-obtenu {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--er-border);
    }
    

    espace-rhum .er-badge-tile-mini.is-teal:not(.is-art)  svg { stroke: var(--er-teal); }
    espace-rhum .er-badge-tile-mini.is-amber:not(.is-art) svg { stroke: var(--er-amber); }
    espace-rhum .er-badge-tile-mini.is-locked  svg { stroke: var(--er-text-muted); }
    espace-rhum .er-badge-tile-mini.is-locked          { background: rgba(255, 255, 255, 0.02); border-style: dashed; }
    espace-rhum .er-badge-tile-mini[data-badge-key] { cursor: pointer; transition: transform var(--er-dur-fast) var(--er-ease-smooth), border-color var(--er-dur-fast) var(--er-ease-smooth); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile-mini[data-badge-key]:hover{ transform: translateY(-2px); border-color: var(--er-border-hover); }}
    espace-rhum .er-badge-tile-mini[data-badge-key]:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
     
    espace-rhum .er-badges-mini-more {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      width: 100%; margin-top: 12px; padding: 8px;
      background: transparent; border: none; border-radius: 8px;
      color: var(--er-text-muted);
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.06em; text-transform: uppercase;
      cursor: pointer; opacity: 0.65;
      transition: opacity var(--er-dur-fast), color var(--er-dur-fast), background var(--er-dur-fast);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-widget--badges-mini:hover .er-badges-mini-more{ opacity: 1; }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badges-mini-more:hover{ color: var(--er-teal); background: var(--er-teal-soft); opacity: 1; }}
    espace-rhum .er-badges-mini-more:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; opacity: 1; }
    espace-rhum .er-badges-mini-more svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

     
    espace-rhum .er-widget-fav-skippers {
      grid-column: span 12;
      background: transparent;
      border: none;
      padding: 0;
    }
     
    espace-rhum .er-section-header {
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: 20px 8px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--er-border-soft);
      margin-bottom: 24px;
    }
    espace-rhum .er-section-header-left { min-width: 0; }
     
    espace-rhum .er-section-header-right {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      flex-shrink: 0;
    }
    espace-rhum .er-section-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      background: transparent;
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-full);
      color: var(--er-teal);
      font-family: var(--er-font-body);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-section-link svg {
      width: 12px; height: 12px;
      stroke: currentColor; fill: none;
      stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
      transition: transform var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-section-link:hover{
      border-color: var(--er-teal);
      background: var(--er-teal-soft);
    }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-section-link:hover svg{ transform: translateX(3px); }}
    espace-rhum .er-section-title {
      font-family: var(--er-font-display); font-style: italic;
      font-size: clamp(28px, 3.5vw, 44px);
      text-transform: uppercase; line-height: 1;
      letter-spacing: -0.01em; margin: 0;
    }
    espace-rhum .er-section-sub {
      font-family: var(--er-font-body); font-size: 13px;
      color: var(--er-text-muted); font-weight: 500;
      margin: 6px 0 0;
    }
    espace-rhum .er-section-count {
      text-align: right;
    }
     
    @media (min-width: 768px) {
      espace-rhum .er-section-count {
        padding-left: 16px;
        border-left: 1px solid var(--er-border-soft);
      }
    }
    espace-rhum .er-section-count-num {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 28px; color: var(--er-teal); line-height: 0.9;
    }
    espace-rhum .er-section-count-label {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--er-text-label); margin-top: 4px;
    }

    espace-rhum .er-skippers-masonry {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 14px;
      height: 560px;
    }
    espace-rhum .er-skipper-card {
      position: relative;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-card);
      


      overflow: visible;
      cursor: pointer;
      transform: rotate(var(--rot, 0deg));
      transition: transform var(--er-dur-med) var(--er-ease-smooth),
                  border-color var(--er-dur-med) var(--er-ease-smooth),
                  box-shadow var(--er-dur-med) var(--er-ease-smooth),
                  opacity var(--er-dur-med) var(--er-ease-smooth);
      padding: 0;
      font: inherit; color: inherit;
      text-align: left;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card:hover{
      transform: rotate(0) translateY(-4px);
      box-shadow: var(--er-shadow-lg);
      border-color: rgba(93, 191, 192, 0.5);
    }}
    espace-rhum .er-skipper-card--big { grid-row: span 2; }

    espace-rhum .er-skipper-card.is-removing {
      opacity: 0;
      transform: rotate(0deg) scale(0.88);
      pointer-events: none;
    }

    espace-rhum .er-skipper-card-photo {
      position: absolute; inset: 0;
      background-size: cover; background-position: center top;
      overflow: hidden; border-radius: inherit;
    }
    


    espace-rhum .er-skipper-card-photo::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to top,
        rgba(10, 26, 53, 0.96) 0%,
        rgba(10, 26, 53, 0.72) 22%,
        rgba(10, 26, 53, 0.28) 42%,
        transparent 62%);
    }
     
    espace-rhum .er-hero-photo-bg.is-empty,
    espace-rhum .er-skipper-card-photo.is-empty,
    espace-rhum .er-suggestion-photo.is-empty {
      background-color: var(--er-bg-elevated);
      background-image: radial-gradient(120% 110% at 50% -10%, var(--er-teal-soft) 0%, transparent 68%);
    }
    espace-rhum .er-photo-empty {
      position: absolute; inset: 0;
      display: grid; place-items: center;
      pointer-events: none;
    }
    espace-rhum .er-photo-empty svg { width: 46%; height: 46%; color: rgba(255, 255, 255, 0.22); }
    espace-rhum .er-hero-photo-bg.is-empty .er-photo-empty svg { width: 26%; height: 26%; }
    espace-rhum .er-skipper-card-overlay {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 18px 16px 16px; z-index: 2;
    }
    espace-rhum .er-skipper-card-flag-firstname {
      display: flex; align-items: center; gap: 8px;
      margin-bottom: 4px;
    }
    espace-rhum .er-skipper-card-firstname {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--er-white); opacity: 0.85;
    }
    espace-rhum .er-skipper-card-name {
      font-family: var(--er-font-display); font-style: italic;
      text-transform: uppercase; line-height: 1;
      color: var(--er-white);
      font-size: 22px; margin-bottom: 4px;
    }
    espace-rhum .er-skipper-card--big .er-skipper-card-name { font-size: 38px; }

     
    espace-rhum .er-skipper-card-name[data-len="10"],
    espace-rhum .er-skipper-card-name[data-len="11"]  { font-size: 20px; }
    espace-rhum .er-skipper-card-name[data-len="12"],
    espace-rhum .er-skipper-card-name[data-len="13"]  { font-size: 18px; }
    espace-rhum .er-skipper-card-name[data-len="14"],
    espace-rhum .er-skipper-card-name[data-len="15"]  { font-size: 16px; }
    espace-rhum .er-skipper-card-name[data-len="16"],
    espace-rhum .er-skipper-card-name[data-len="17"]  { font-size: 15px; }
    espace-rhum .er-skipper-card-name[data-len="18"],
    espace-rhum .er-skipper-card-name[data-len="19"]  { font-size: 14px; }
    espace-rhum .er-skipper-card-name.er-skipper-card-name--wrap {
      font-size: 13px;
      white-space: normal;
      line-height: 1.1;
    }

     
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="10"],
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="11"]  { font-size: 34px; }
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="12"],
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="13"]  { font-size: 30px; }
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="14"],
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="15"]  { font-size: 26px; }
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="16"],
    espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="17"]  { font-size: 22px; }
    espace-rhum .er-skipper-card--big .er-skipper-card-name.er-skipper-card-name--wrap {
      font-size: 20px;
      white-space: normal;
      line-height: 1.05;
    }
    espace-rhum .er-skipper-card-boat {
      font-family: var(--er-font-body); font-size: 11px;
      color: rgba(255, 255, 255, 0.65);
      margin-top: 2px;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    espace-rhum .er-skipper-card--big .er-skipper-card-boat { font-size: 13px; }

    





    espace-rhum .er-skipper-card-class-flag {
      position: absolute; top: -9px; right: 8px;
      width: 46px; height: auto; z-index: 3;
      filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
      pointer-events: none;
    }
    espace-rhum .er-skipper-card--big .er-skipper-card-class-flag { width: 62px; top: -11px; right: 12px; }
    espace-rhum .er-skipper-card-class-flag img { width: 100%; height: auto; display: block; }

    












    espace-rhum .er-skipper-card-fav {
      position: absolute; top: 10px; left: 10px;
      width: 30px; height: 30px;
      background: rgba(9, 20, 40, 0.62);
      -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; z-index: 3;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.34);
      padding: 0;
      transition: transform var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast), border-color var(--er-dur-fast);
    }
    espace-rhum .er-skipper-card-fav svg {
      width: 14px; height: 14px;
      fill: none; stroke: var(--er-teal); stroke-width: 3;
      stroke-linecap: round; stroke-linejoin: round;
      transition: stroke var(--er-dur-fast), opacity .14s, transform .14s;
    }
    

    espace-rhum .er-skipper-card-fav::before,
    espace-rhum .er-skipper-card-fav::after {
      content: ""; position: absolute; width: 13px; height: 2.6px; border-radius: 2px;
      background: var(--er-white); opacity: 0; transform: rotate(0deg) scale(.6);
      transition: opacity .16s, transform .16s;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover{ transform: scale(1.08); background: var(--er-danger); border-color: transparent; }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover svg{ opacity: 0; transform: scale(.6); }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover::before{ opacity: 1; transform: rotate(45deg) scale(1); }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover::after{ opacity: 1; transform: rotate(-45deg) scale(1); }}
    espace-rhum .er-skipper-card-fav:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    
















    espace-rhum .er-bulle {
      position: absolute; top: calc(100% + 9px); left: 50%;
      transform: translate(-50%, -4px);
      z-index: 40; pointer-events: none;
      width: max-content; max-width: 190px;
      padding: 7px 11px;
      border-radius: 12px 3px 10px 3px;
      background: rgba(9, 20, 40, 0.95);
      -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.14);
      box-shadow: 0 12px 28px -14px rgba(0, 0, 0, 0.95), var(--o-arete);
      font-family: var(--er-font-body); font-size: 11px; line-height: 1.4;
      color: var(--er-text-primary); text-align: center; white-space: normal;
      opacity: 0; visibility: hidden;
      transition: opacity .16s var(--er-ease-smooth), transform .16s var(--er-ease-smooth), visibility .16s;
    }
    

    espace-rhum .er-bulle::after {
      content: ""; position: absolute; bottom: 100%; left: 50%;
      margin-left: -5px; border: 5px solid transparent;
      border-bottom-color: rgba(9, 20, 40, 0.95);
    }
    espace-rhum .er-bulle b { color: var(--er-amber-bright); font-weight: 700; }
    espace-rhum [data-bulle]:focus-visible > .er-bulle{
      opacity: 1; visibility: visible; transform: translate(-50%, 0);
    }@media (hover:hover) and (pointer:fine){espace-rhum [data-bulle]:hover > .er-bulle{
      opacity: 1; visibility: visible; transform: translate(-50%, 0);
    }}
    

    espace-rhum .er-skipper-card-fav .er-bulle,
    espace-rhum .er-skipper-card-vote .er-bulle { left: 0; transform: translate(-6px, -4px); }
    espace-rhum .er-skipper-card-fav .er-bulle::after,
    espace-rhum .er-skipper-card-vote .er-bulle::after { left: 21px; }
    espace-rhum .er-skipper-card-fav:focus-visible > .er-bulle,espace-rhum .er-skipper-card-vote:focus-visible > .er-bulle{ transform: translate(-6px, 0); }@media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover > .er-bulle,espace-rhum .er-skipper-card-vote:hover > .er-bulle{ transform: translate(-6px, 0); }}
    














    espace-rhum .er-skipper-card-fav:focus-within,espace-rhum .er-skipper-card-vote:focus-within{ z-index: 60; }@media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover,espace-rhum .er-skipper-card-vote:hover{ z-index: 60; }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card:has(.er-skipper-card-fav:hover),espace-rhum .er-skipper-card:has(.er-skipper-card-vote:hover),espace-rhum .er-skipper-card:has(.er-bulle:hover){ z-index: 60; }}
     
    espace-rhum .er-skipper-card { position: relative; }

    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-bulle { transition: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-skipper-card-fav,
      espace-rhum .er-skipper-card-fav svg,
      espace-rhum .er-skipper-card-fav::before,
      espace-rhum .er-skipper-card-fav::after { transition: none; }
      @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-fav:hover{ transform: none; }}
    }

    

    espace-rhum .er-skipper-card-vote {
      



      position: absolute; top: 52px; left: 10px; z-index: 3;
      width: 32px; height: 32px; padding: 0;
      display: flex; align-items: center; justify-content: center;
      border: 1px solid rgba(255,255,255,.28); border-radius: 50%;
      background: rgba(10,18,40,.55); cursor: pointer;
      transition: transform .18s ease, background .18s ease, border-color .18s ease;
    }
    espace-rhum .er-skipper-card-vote svg { width: 15px; height: 15px; fill: rgba(255,255,255,.72); }
    


    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-vote:hover{ transform: scale(1.08); border-color: var(--er-danger); }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-vote:hover svg{ fill: var(--er-danger); }}
    



    espace-rhum .er-skipper-card-vote.is-on {
      background: var(--er-danger); border-color: var(--er-danger);
      box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.22), 0 4px 14px -4px rgba(230, 57, 70, 0.8);
    }
    espace-rhum .er-skipper-card-vote.is-on svg { fill: var(--er-white); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-vote.is-on:hover{ border-color: var(--er-white); }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-vote.is-on:hover svg{ fill: var(--er-white); }}
    espace-rhum .er-skipper-card-vote:focus-visible { outline: 2px solid var(--er-amber-bright); outline-offset: 2px; }

    

    espace-rhum .er-skipper-card-fans {
      margin-top: 4px; font-size: 11px; letter-spacing: .04em; text-transform: uppercase;
      color: var(--er-amber-bright); opacity: .92;
    }

    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-skipper-card-vote { transition: none; }
      @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-card-vote:hover{ transform: none; }}
    }

     
    espace-rhum .er-skipper-placeholder {
      position: relative;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
      background: var(--er-surface);
      border: 1.5px dashed rgba(93, 191, 192, 0.25);
      border-radius: var(--er-radius-card);
      color: var(--er-text-muted);
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.12em; text-transform: uppercase;
      cursor: pointer;
      transition: all var(--er-dur-fast) var(--er-ease-smooth);
      padding: 20px;
      text-align: center;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skipper-placeholder:hover{
      border-color: var(--er-teal);
      color: var(--er-teal);
      background: var(--er-teal-soft);
    }}
    espace-rhum .er-skipper-placeholder svg {
      width: 22px; height: 22px;
      stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-skipper-placeholder--big { grid-row: span 2; }

    espace-rhum .er-skippers-empty {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
      padding: 40px;
      background: var(--er-bg-card);
      border: 1px dashed rgba(93, 191, 192, 0.25);
      border-radius: var(--er-radius-card);
      text-align: center;
    }
    espace-rhum .er-skippers-empty-text {
      font-family: var(--er-font-display); font-style: italic;
      font-size: clamp(22px, 3vw, 32px);
      text-transform: uppercase; line-height: 1;
      color: var(--er-text-secondary);
    }
     
    espace-rhum .er-skippers-expand-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      margin-top: 14px;
      padding: 12px 18px;
      background: var(--er-teal-soft);
      border: 1px solid rgba(93, 191, 192, 0.3);
      border-radius: 22px 4px 16px 4px;
      color: var(--er-teal);
      font-family: var(--er-font-body); font-size: 12px; font-weight: 800;
      letter-spacing: 0.12em; text-transform: uppercase;
      cursor: pointer;
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-skippers-expand-btn:hover{
      background: rgba(93, 191, 192, 0.22);
      border-color: var(--er-teal);
    }}
    espace-rhum .er-skippers-expand-btn svg {
      width: 14px; height: 14px;
      stroke: currentColor; fill: none; stroke-width: 2.2;
      stroke-linecap: round; stroke-linejoin: round;
      transition: transform var(--er-dur-med) var(--er-ease-smooth);
    }
    espace-rhum .er-skippers-expand-btn[aria-expanded="true"] svg { transform: rotate(180deg); }

    espace-rhum .er-skippers-expanded-zone {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      margin-top: 0;
      transition: max-height 0.65s var(--er-ease-smooth),
                  opacity 0.4s var(--er-ease-smooth),
                  margin-top 0.65s var(--er-ease-smooth);
    }
    espace-rhum .er-skippers-expanded-zone[data-expanded="true"] {
      max-height: 2400px;
      opacity: 1;
      margin-top: 20px;
    }
    espace-rhum .er-skippers-expanded-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }

     
    espace-rhum .er-skipper-card--grid { aspect-ratio: 3 / 4; }
    espace-rhum .er-skipper-card--grid .er-skipper-card-photo img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    espace-rhum .er-skipper-card--grid .er-skipper-card-name { font-size: 20px; }
    espace-rhum .er-skipper-card--grid .er-skipper-card-class-flag { width: 48px; }

     
    espace-rhum .er-widget-news-mix {
      grid-column: span 8;
      background: transparent;
      border: none;
      padding: 0;
    }
    espace-rhum .er-news-mix-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    

    @media (min-width: 768px) {
      espace-rhum .er-widget-news-mix > .er-section-header,
      espace-rhum .er-widget-suggestions > .er-section-header {
        min-height: 108px;
      }
    }
    espace-rhum .er-news-card {
      position: relative;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: 18px 3px 14px 3px;
      overflow: hidden;
      cursor: pointer;
      transition: transform var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  box-shadow var(--er-dur-fast) var(--er-ease-smooth);
      padding: 0;
      font: inherit;
      color: inherit;
      text-align: left;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-card:hover{
      border-color: var(--er-border-hover);
      transform: translateY(-2px);
      box-shadow: var(--er-shadow-md);
    }}
    espace-rhum .er-news-card--big {
      grid-column: span 2;
      min-height: 405px;
    }
    espace-rhum .er-news-card--full-image .er-news-card-img {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
    }
    espace-rhum .er-news-card--full-image .er-news-card-img::after {
      content: '';
      position: absolute;
      inset: 0;
      

      background: linear-gradient(to top, rgba(10, 26, 53, 0.96) 0%, rgba(10, 26, 53, 0.66) 26%, rgba(10, 26, 53, 0) 55%);
    }
    espace-rhum .er-news-card--full-image .er-news-card-content {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      padding: 20px 18px 18px;
      z-index: 1;
      display: flex; flex-direction: column; align-items: flex-start;
    }
    espace-rhum .er-news-card--full-image .er-news-title {
      font-size: 22px;
    }

    espace-rhum .er-news-card-split {
      display: grid;
      grid-template-columns: 132px 1fr;
      min-height: 148px;
    }
    espace-rhum .er-news-card-split .er-news-card-img {
      background-size: cover;
      background-position: center;
      min-height: 148px;
    }
    espace-rhum .er-news-card-split .er-news-card-content {
      padding: 15px 16px;
      display: flex; flex-direction: column; align-items: flex-start;
    }
     
    espace-rhum .er-news-card-split .er-news-title {
      font-size: 15px; line-height: 1.16;
      -webkit-line-clamp: 3;
    }

    espace-rhum .er-news-title {
      font-family: var(--er-font-display); font-style: italic;
      text-transform: uppercase;
      font-size: 16px; line-height: 1.14;
      color: var(--er-white);
      margin: 0 0 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    

    espace-rhum .er-news-meta {
      display: flex; align-items: center; gap: 9px; flex-wrap: wrap;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 600;
      letter-spacing: 0.03em;
      color: var(--er-text-muted);
      margin-top: auto;
    }
    espace-rhum .er-news-meta-clock { display: inline-flex; align-items: center; gap: 4px; }
    espace-rhum .er-news-meta-clock svg {
      width: 11px; height: 11px; stroke: currentColor; stroke-width: 2;
      fill: none; stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-news-meta span:not(:last-child)::after {
      content: '·'; margin-left: 9px; opacity: 0.6;
    }

    espace-rhum .er-news-placeholder {
      position: relative;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
      padding: 24px;
      min-height: 120px;
      background: var(--er-surface);
      border: 1.5px dashed rgba(93, 191, 192, 0.25);
      border-radius: 18px 3px 14px 3px;
      color: var(--er-text-muted);
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.12em; text-transform: uppercase;
      cursor: pointer;
      text-align: center;
      transition: all var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-placeholder:hover{
      border-color: var(--er-teal);
      color: var(--er-teal);
      background: var(--er-teal-soft);
    }}
    espace-rhum .er-news-placeholder svg {
      width: 18px; height: 18px;
      stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
    }

    espace-rhum .er-news-empty {
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
      padding: 40px 24px;
      background: var(--er-bg-card);
      border: 1px dashed rgba(93, 191, 192, 0.25);
      border-radius: var(--er-radius-card);
      text-align: center;
    }
    espace-rhum .er-news-empty-text {
      font-family: var(--er-font-display); font-style: italic;
      font-size: clamp(22px, 2.8vw, 28px);
      text-transform: uppercase; line-height: 1;
      color: var(--er-text-secondary);
    }

    



    


    espace-rhum [hidden] { display: none !important; }

    






    















    espace-rhum .er-widget-news-mix {
      --ern-surface: #E7F1ED;
      --ern-ink:     #0A1A35;
      --ern-ink-2:   rgba(10, 26, 53, 0.66);
      --ern-ink-3:   rgba(10, 26, 53, 0.5);
      --ern-line:    rgba(10, 26, 53, 0.10);
      --ern-teal:    #00676E;
    }
    espace-rhum .er-news-panel {
      background: transparent;
      padding: 0;
    }
    espace-rhum .er-news-feed {
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: stretch;
    }
    







    espace-rhum .er-news-feed .er-news2--lead { margin-bottom: 10px; }
    espace-rhum .er-news-feed .er-news2--lead::before {
      content: ''; position: absolute; left: 0; right: 0; bottom: -16px;
      height: 1px; background: var(--er-border-soft); z-index: 1;
    }
    espace-rhum .er-news2 {
      position: relative; min-width: 0; overflow: hidden;
      border-radius: 14px 3px 14px 3px;
      background: var(--ern-surface);
      border: 1px solid rgba(255, 255, 255, 0.1);
      

      box-shadow: 0 10px 24px -14px rgba(0, 0, 0, 0.65);
      touch-action: pan-y;
      transition: transform 0.22s var(--er-ease-smooth), opacity 0.22s var(--er-ease-smooth),
                  box-shadow var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    









    













    espace-rhum .er-news2.est-lue .er-news2-img { opacity: 0.42; }
    espace-rhum .er-news2.est-lue .er-news2-title { color: var(--ern-ink-2); }
    espace-rhum .er-news2--lead.est-lue .er-news2-title { color: inherit; opacity: 0.82; }
    espace-rhum .er-news2.est-lue .er-news2-excerpt { opacity: 0.75; }
    


    espace-rhum .er-news2.est-lue .er-news2-new { display: none; }
    



    




    




    espace-rhum .er-news2-marques {
      position: absolute; z-index: 4;
      right: 8px; bottom: 8px;
      max-width: calc(100% - 16px);
      display: flex; align-items: center; justify-content: flex-end;
      flex-wrap: wrap; gap: 6px;
    }
    espace-rhum .er-news2--lead .er-news2-marques { bottom: auto; top: 12px; right: 12px; gap: 8px; }
    




    



    


    espace-rhum .er-news2-pavillons { display: flex; align-items: center; }
    espace-rhum .er-news2-pavillon { flex: 0 0 auto; }
    espace-rhum .er-news2-pavillons .er-news2-pavillon + .er-news2-pavillon {
      margin-left: calc(var(--pas, 23px) - var(--pav, 26px));
    }
    espace-rhum .er-news2-lu {
      padding: 3px 9px; border-radius: 999px;
      background: var(--ern-ink); color: rgba(255, 255, 255, 0.92);
      font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase;
    }
    espace-rhum .er-news2--lead .er-news2-lu { font-size: 10px; }
    










    espace-rhum .er-news2-pavillon {
      width: var(--pav, 26px); height: var(--pav, 26px);
      object-fit: contain; display: block;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.55));
    }
    

    espace-rhum .er-news2.est-lue .er-news2-pavillon { opacity: 0.6; }

    

     
    espace-rhum .er-news-barre {
      display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin: 0 0 16px;
    }
    espace-rhum .er-news-barre .er-news-onglets { margin: 0; flex: 1 1 auto; }
    

    espace-rhum .er-news-lus {
      display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
      padding: 7px 12px; cursor: pointer;
      background: transparent; border: 1px solid transparent; border-radius: 999px;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 600;
      color: var(--er-text-secondary); white-space: nowrap;
      transition: color var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-news-lus svg { width: 13px; height: 13px; flex: 0 0 auto; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-lus:hover{ border-color: var(--er-border-soft); color: var(--er-text-primary); }}
    espace-rhum .er-news-lus:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-news-lus[aria-pressed="true"] {
      background: var(--er-teal-soft); border-color: var(--er-teal); color: var(--er-teal);
    }
    espace-rhum .er-news-lus b {
      font-size: 10px; line-height: 1; padding: 2px 6px; border-radius: 999px;
      background: rgba(255, 255, 255, 0.10); font-weight: 700;
    }
    espace-rhum .er-news-lus[aria-pressed="true"] b { background: var(--er-teal); color: var(--er-bg-base); }

    


    espace-rhum .er-news2[data-filtre-lu] { display: none; }

    espace-rhum .er-news2[data-dragging="true"] { transition: none; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news2:hover{
      border-color: rgba(93, 191, 192, 0.55);
      box-shadow: 0 14px 30px -14px rgba(0, 0, 0, 0.72);
    }}

    

    espace-rhum .er-news2-hit {
      position: absolute; inset: 0; z-index: 2;
      border: 0; background: none; padding: 0; cursor: pointer;
    }
    espace-rhum .er-news2-hit:focus-visible { outline: 2px solid var(--ern-teal); outline-offset: -3px; }

    

    espace-rhum .er-news2-media {
      position: relative; overflow: hidden; background: rgba(10, 26, 53, 0.06);
    }

    




    espace-rhum .er-news2.a-classe { position: relative; }
    espace-rhum .er-news2.a-classe::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
      background: var(--cl); z-index: 3; pointer-events: none;
      border-radius: 0 0 var(--er-radius-sm) var(--er-radius-sm);
    }
    









    espace-rhum .er-news2.a-classe .er-news2-kicker {
      color: color-mix(in srgb, var(--cl) 35%, var(--ern-ink));
    }
    espace-rhum .er-news2-img {
      width: 100%; height: 100%; display: block;
      object-fit: cover; object-position: center 38%;
      transition: transform 0.5s var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news2:hover .er-news2-img{ transform: scale(1.04); }}
    espace-rhum .er-news2-img.is-empty {
      background: linear-gradient(140deg, rgba(0, 103, 110, 0.16), rgba(10, 26, 53, 0.10));
    }

    



    









    espace-rhum .er-news2-fmt {
      position: absolute; left: 8px; top: 8px; bottom: auto; z-index: 3;
      height: 22px; padding: 0 9px 0 7px; gap: 5px; border-radius: 999px;
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--ern-ink); color: var(--er-amber);
      font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase;
    }
    espace-rhum .er-news2-fmt svg { width: 12px; height: 12px; display: block; flex: 0 0 auto; }
    

    espace-rhum .er-news2-fmt b { font: inherit; }
    espace-rhum .er-news2-fmt[data-lead="1"] {
      width: auto; height: 28px; gap: 7px;
      padding: 0 12px 0 10px; border-radius: 999px;
      left: 10px; bottom: 10px;
    }
    espace-rhum .er-news2-fmt[data-lead="1"] svg { width: 14px; height: 14px; }
    espace-rhum .er-news2-fmt b {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.12em; text-transform: uppercase; color: #fff;
    }
     
    espace-rhum .er-sr-only {
      position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap;
    }
     
    espace-rhum .er-news2-new {
      position: absolute; left: 8px; top: 8px; z-index: 3;
      font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: #06283b; background: var(--er-amber);
      padding: 3px 8px; transform: skewX(-12deg);
    }
    espace-rhum .er-news2-new span { display: block; transform: skewX(12deg); }

    


    



    espace-rhum .er-news-onglets {
      display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
      margin: 0 0 16px;
    }
    





    espace-rhum .er-news-onglet {
      position: relative;
      display: inline-flex; align-items: center; gap: 8px;
      padding: 9px 15px 10px; cursor: pointer;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-full);
      font-family: var(--er-font-body); font-size: 12px; font-weight: 700;
      letter-spacing: 0.05em; text-transform: uppercase;
      







      color: var(--er-text-secondary); white-space: nowrap;
      transition: color var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-news-onglet svg { width: 14px; height: 14px; flex: 0 0 auto; opacity: 0.8; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-onglet:hover{
      color: var(--er-text-primary); border-color: rgba(93, 191, 192, 0.45);
      background: rgba(255, 255, 255, 0.06);
    }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-onglet:hover svg{ opacity: 1; }}
    espace-rhum .er-news-onglet:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-news-onglet[aria-selected="true"] {
      background: var(--er-teal-soft); border-color: var(--er-teal); color: var(--er-teal);
    }
    espace-rhum .er-news-onglet[aria-selected="true"] svg { opacity: 1; }
    


    espace-rhum .er-news-onglet[aria-selected="true"]::after {
      content: ''; position: absolute; left: 50%; bottom: -7px;
      width: 20px; height: 2px; border-radius: 2px;
      transform: translateX(-50%); background: var(--er-teal);
    }
    espace-rhum .er-news-onglet b {
      font-size: 10px; line-height: 1; padding: 3px 7px; border-radius: 999px;
      background: rgba(255, 255, 255, 0.10); letter-spacing: 0;
      font-variant-numeric: tabular-nums;
    }
    espace-rhum .er-news-onglet[aria-selected="true"] b {
      background: var(--er-teal); color: var(--er-bg-base);
    }
    



    






    espace-rhum .er-news-onglet--discret {
      margin-left: auto; border-color: transparent; background: transparent;
      text-transform: none;
      letter-spacing: 0.02em; font-weight: 600; font-size: 11px;
      



      opacity: 0.72;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-onglet--discret:hover{ opacity: 1; }}
    espace-rhum .er-news-onglet--discret b {
      background: rgba(255, 255, 255, 0.07); font-weight: 600;
    }
    espace-rhum .er-news-onglet--discret[aria-selected="true"] {
      background: transparent; border-color: rgba(93, 191, 192, 0.35);
    }

     
    espace-rhum .er-news-pile .er-news-feed { display: grid; gap: 12px; }
    @media (min-width: 720px) {
      espace-rhum .er-news-pile .er-news-feed { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    espace-rhum .er-news-pile-reste {
      margin: 12px 0 0; font-size: 11px; line-height: 1.5; color: var(--er-text-muted);
    }
    espace-rhum .er-news-pile-vide {
      padding: 28px 20px; text-align: center;
      border: 1px dashed var(--er-border-soft); border-radius: var(--er-radius-sm);
    }
    espace-rhum .er-news-pile-vide-t {
      font-family: var(--er-font-title); font-size: 15px; color: var(--er-text-primary);
      margin-bottom: 6px;
    }
    espace-rhum .er-news-pile-vide p {
      margin: 0; font-size: 12px; line-height: 1.6; color: var(--er-text-muted);
    }

    




    espace-rhum .er-news-annul {
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      padding: 12px 14px; border-radius: var(--er-radius-sm);
      background: rgba(93, 191, 192, 0.08); border: 1px solid rgba(93, 191, 192, 0.28);
      font-family: var(--er-font-body); font-size: 12px; color: var(--er-text-secondary);
    }
    espace-rhum .er-news-annul.est-erreur {
      background: rgba(252, 241, 80, 0.10); border-color: rgba(252, 241, 80, 0.32);
      color: var(--er-amber-bright, var(--er-text-primary)); display: block;
    }
    











    espace-rhum .er-news-annul-btn {
      position: relative; overflow: hidden; isolation: isolate;
      display: inline-flex; align-items: center; gap: 6px; flex: 0 0 auto;
      padding: 6px 12px; cursor: pointer;
      background: transparent; border: 1px solid var(--er-teal); border-radius: 999px;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.06em; text-transform: uppercase; color: var(--er-teal);
    }
    espace-rhum .er-news-annul-btn::before {
      content: ''; position: absolute; z-index: -1;
      left: 0; top: 0; bottom: 0; width: 0;
      background: rgba(93, 191, 192, 0.22);
      animation: er-annul-jauge var(--annul-ms, 7000ms) linear forwards;
    }
    @keyframes er-annul-jauge { from { width: 0; } to { width: 100%; } }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-news-annul-btn::before { animation: none; width: 0; }
    }
    espace-rhum .er-news-annul-btn svg { width: 13px; height: 13px; }
    espace-rhum .er-news-annul-btn:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    



    espace-rhum .er-news2-raison {
      display: flex; align-items: flex-start; gap: 6px;
      margin: 6px 0 0; font-family: var(--er-font-body);
      font-size: 11px; line-height: 1.4;
      







      color: var(--ern-teal);
    }
    

    


    espace-rhum .er-news2-raison svg {
      width: 13px; height: 13px; flex: 0 0 auto; overflow: visible;
    }
    espace-rhum .er-news2-raison > svg {
      box-sizing: content-box; padding: 3px; margin: -1px 0 0 -1px;
      border-radius: 50%; background: color-mix(in srgb, currentColor 12%, transparent);
    }
    









    espace-rhum .er-news2-raison span {
      min-width: 0; overflow: hidden;
      display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
    }
    


    espace-rhum .er-news2-raison i { font-style: normal; }
    espace-rhum .er-news2-raison b { font-weight: 700; }
    

    



    







    espace-rhum button.er-news2-raison {
      position: relative; z-index: 4;
      background: none; border: 0; padding: 0; margin: 6px 0 0;
      font: inherit; text-align: left; cursor: pointer;
      color: var(--ern-teal);
      font-size: 11px; line-height: 1.4;
    }
    espace-rhum button.er-news2-raison b { text-decoration: underline; text-decoration-color: transparent;
      text-underline-offset: 2px; transition: text-decoration-color var(--er-dur-fast) var(--er-ease-smooth); }
    espace-rhum button.er-news2-raison:focus-visible b{ text-decoration-color: currentColor; }@media (hover:hover) and (pointer:fine){espace-rhum button.er-news2-raison:hover b{ text-decoration-color: currentColor; }}
    espace-rhum button.er-news2-raison:focus-visible { outline: 2px solid var(--ern-teal); outline-offset: 3px; border-radius: 4px; }

    




    espace-rhum .er-news-filtre {
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      margin: 0 0 14px; padding: 10px 12px 10px 14px;
      border-radius: var(--er-radius-sm);
      background: rgba(93, 191, 192, 0.10);
      border: 1px solid rgba(93, 191, 192, 0.30);
    }
    espace-rhum .er-news-filtre-txt {
      display: flex; align-items: center; gap: 8px; min-width: 0;
      font-family: var(--er-font-body); font-size: 12.5px;
      color: var(--er-text-secondary);
    }
    espace-rhum .er-news-filtre-txt svg { width: 14px; height: 14px; flex: 0 0 auto; color: var(--er-teal); }
    espace-rhum .er-news-filtre-txt i { font-style: normal; }
    espace-rhum .er-news-filtre-txt b {
      color: var(--er-text-primary); font-weight: 700;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    espace-rhum .er-news-filtre-txt em {
      font-style: normal; flex: 0 0 auto;
      font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
      padding: 3px 8px; border-radius: 999px;
      background: var(--er-teal); color: var(--er-bg-base);
    }
    espace-rhum .er-news-filtre-btn {
      display: inline-flex; align-items: center; gap: 6px; flex: 0 0 auto;
      height: 30px; padding: 0 12px; cursor: pointer;
      background: transparent; border: 1px solid var(--er-teal); border-radius: 999px;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.05em; text-transform: uppercase; color: var(--er-teal);
    }
    espace-rhum .er-news-filtre-btn svg { width: 13px; height: 13px; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-filtre-btn:hover{ background: rgba(93, 191, 192, 0.14); }}
    espace-rhum .er-news-filtre-btn:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    @media (max-width: 767px) {
      

      espace-rhum .er-news-filtre { flex-wrap: wrap; }
      espace-rhum .er-news-filtre-btn { margin-left: auto; }

      









      espace-rhum .er-news-onglet--discret { margin-left: 0; }
      



      espace-rhum .er-news-barre {
        flex-direction: column; align-items: stretch; gap: 6px; margin-bottom: 22px;
      }
      espace-rhum .er-news-barre .er-news-onglets { margin: 0; }
      espace-rhum .er-news-lus { align-self: flex-end; padding: 6px 10px; }
    }

    espace-rhum .er-news2-raison.est-neutre { color: var(--ern-ink-2); }
    espace-rhum .er-news2-raison.est-neutre svg { opacity: 0.55; }

    espace-rhum .er-news2-acts {
      position: relative; z-index: 4;
      display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;
    }
    








    espace-rhum .er-news2-act {
      display: inline-flex; align-items: center; gap: 6px;
      height: 30px; padding: 0 13px 0 11px;
      border-radius: 999px; cursor: pointer;
      border: 1px solid rgba(0, 103, 110, 0.28);
      background: rgba(0, 103, 110, 0.06);
      color: var(--ern-teal);
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 700;
      letter-spacing: 0.01em; white-space: nowrap;
      transition: color var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-news2-act svg { width: 14px; height: 14px; display: block; flex: 0 0 auto; }
    espace-rhum .er-news2-act:focus-visible{
      border-color: var(--ern-teal); background: rgba(0, 103, 110, 0.13);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-news2-act:hover{
      border-color: var(--ern-teal); background: rgba(0, 103, 110, 0.13);
    }}
    

    espace-rhum .er-news2-act--no {
      border-color: rgba(10, 26, 53, 0.16); background: rgba(10, 26, 53, 0.035);
      color: var(--ern-ink-2);
    }
    espace-rhum .er-news2-act--no:focus-visible{
      color: #B0341F; border-color: rgba(176, 52, 31, 0.45); background: rgba(176, 52, 31, 0.07);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-news2-act--no:hover{
      color: #B0341F; border-color: rgba(176, 52, 31, 0.45); background: rgba(176, 52, 31, 0.07);
    }}
    espace-rhum .er-news2-act:focus-visible { outline: 2px solid var(--ern-teal); outline-offset: 2px; }

    espace-rhum .er-news2-body {
      display: flex; flex-direction: column; min-width: 0;
      padding: 12px 14px 12px; gap: 6px;
    }
    espace-rhum .er-news2-kicker {
      font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--ern-teal);
    }
    espace-rhum .er-news2-title {
      font-family: var(--er-font-display); font-style: italic; text-transform: uppercase;
      color: var(--ern-ink); margin: 0;
      display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;
    }
    espace-rhum .er-news2-meta {
      display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
      font-family: var(--er-font-body); font-size: 10.5px; font-weight: 600;
      letter-spacing: 0.02em; color: var(--ern-ink-3); margin-top: auto;
    }
    espace-rhum .er-news2-clock { display: inline-flex; align-items: center; gap: 4px; }
    espace-rhum .er-news2-clock svg { width: 10px; height: 10px; }
    espace-rhum .er-news2-meta span:not(:last-child)::after {
      content: '·'; margin-left: 8px; opacity: 0.55;
    }

    

    




















    espace-rhum .er-news2--lead {
      grid-column: 1 / -1; display: flex; flex-direction: column;
      position: relative;
    }
    espace-rhum .er-news2--lead .er-news2-media {
      aspect-ratio: 16 / 10; width: 100%;
    }
    





    @media (min-width: 768px) {
      espace-rhum .er-news2--lead .er-news2-media { aspect-ratio: 16 / 9; }
    }
    




















    espace-rhum .er-news2--lead .er-news2-media::after {
      content: ''; position: absolute; inset: auto 0 0 0; height: 82%;
      background: linear-gradient(to bottom,
        rgba(10, 26, 53, 0) 0%, rgba(10, 26, 53, 0.18) 40%,
        rgba(10, 26, 53, 0.42) 72%, rgba(10, 26, 53, 0.55) 100%);
      z-index: 2; pointer-events: none;
    }
    



    espace-rhum .er-news2--compact .er-news2-une { display: none; }

    espace-rhum .er-news2--lead .er-news2-une {
      position: absolute; left: 0; right: 0; bottom: 0; z-index: 3;
      padding: 44px 22px 20px; display: flex; flex-direction: column; gap: 8px;
      pointer-events: none;
      














      background: linear-gradient(to bottom,
        rgba(10, 26, 53, 0) 0px, rgba(10, 26, 53, 0.65) 44px,
        rgba(10, 26, 53, 0.74) 100%);
    }
    

    espace-rhum .er-news2--lead .er-news2-une .er-news2-kicker { color: rgba(255, 255, 255, 0.92); }
    


    espace-rhum .er-news2--lead.a-classe .er-news2-une .er-news2-kicker { color: rgba(255, 255, 255, 0.92); }
    espace-rhum .er-news2--lead .er-news2-une .er-news2-title {
      color: #FFFFFF; margin: 0;
      font-size: clamp(21px, 2.6vw, 32px); line-height: 1.06;
      -webkit-line-clamp: 3; line-clamp: 3;
      text-shadow: 0 2px 14px rgba(10, 26, 53, 0.5);
    }
    espace-rhum .er-news2--lead .er-news2-une .er-news2-excerpt {
      color: rgba(255, 255, 255, 0.90); -webkit-line-clamp: 2; line-clamp: 2;
      max-width: 62ch;
    }
    












    





    espace-rhum .er-news2--lead .er-news2-body {
      padding: 12px 18px 13px;
      display: flex; flex-direction: row; flex-wrap: nowrap;
      align-items: center; gap: 10px 16px;
    }
    








    espace-rhum .er-news2--lead .er-news2-body > .er-news2-raison,
    espace-rhum .er-news2--lead .er-news2-body > button.er-news2-raison {
      margin: 0; flex: 1 1 auto; min-width: 0;
    }
    espace-rhum .er-news2--lead .er-news2-body > button.er-news2-raison span {
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block;
    }
    espace-rhum .er-news2--lead .er-news2-meta { margin: 0; flex: 0 0 auto; }
    






    espace-rhum .er-news2--lead .er-news2-acts {
      margin: 0 0 0 auto; flex: 0 0 auto; flex-wrap: nowrap;
    }
    @media (max-width: 767px) {
      espace-rhum .er-news2--lead .er-news2-body { flex-direction: column; align-items: flex-start; }
      espace-rhum .er-news2--lead .er-news2-acts { margin-left: 0; }
    }
    





    espace-rhum .er-news2--lead.a-classe::after { z-index: 4; }
    espace-rhum .er-news2--lead.a-classe .er-news2-media::before {
      content: ''; position: absolute; left: 0; right: 0; top: 0; height: 3px;
      background: var(--cl); z-index: 4; pointer-events: none;
    }
    espace-rhum .er-news2-excerpt {
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.55;
      color: var(--ern-ink-2); margin: 0;
      display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }

    

    





    espace-rhum .er-news2--compact {
      display: grid; grid-template-columns: 128px 1fr; min-height: 124px;
    }
    espace-rhum .er-news2--compact .er-news2-media { height: 100%; }
    espace-rhum .er-news2--compact .er-news2-body { padding: 11px 13px; gap: 4px; }
    espace-rhum .er-news2--compact .er-news2-title {
      font-size: 14px; line-height: 1.18; -webkit-line-clamp: 2; line-clamp: 2;
    }
    espace-rhum .er-news2--compact .er-news2-meta { margin-top: 4px; }
    espace-rhum .er-news2--compact .er-news2-acts { margin-top: 8px; }
    espace-rhum .er-news2--compact .er-news2-new { font-size: 8px; padding: 2px 6px; }
    




    espace-rhum .er-news2--compact .er-news2-fmt {
      width: auto; height: 20px; left: 6px; top: 6px; bottom: auto;
      padding: 0 8px 0 6px; gap: 4px; font-size: 8.5px;
    }
    espace-rhum .er-news2--compact .er-news2-fmt svg { width: 11px; height: 11px; }
    
















    espace-rhum .er-news2--compact .er-news2-act {
      width: 36px; height: 36px; padding: 0; gap: 0; justify-content: center;
    }
    espace-rhum .er-news2--compact .er-news2-act span { display: none; }
    espace-rhum .er-news2--compact .er-news2-acts { gap: 8px; }

    






    espace-rhum [data-news-pile] .er-news2--compact .er-news2-act:first-child {
      width: auto; padding: 0 13px 0 11px; gap: 6px;
    }
    espace-rhum [data-news-pile] .er-news2--compact .er-news2-act:first-child span {
      display: inline; font-size: 11.5px; font-weight: 700;
    }

     
    












    





















    espace-rhum .er-news2-swipe {
      position: absolute; inset: 0; z-index: 6;
      display: flex; align-items: center; justify-content: center;
      padding: 0 16px;
      pointer-events: none; overflow: hidden;
      border-radius: inherit;
      --er-sw: 0;
    }
    

    espace-rhum .er-news2-swipe-face {
      position: absolute; left: 16px; right: 16px;
      display: flex; align-items: center; justify-content: center; gap: 11px;
      opacity: 0; transform: scale(.82);
      color: #fff;
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      text-transform: uppercase;
      font-size: clamp(17px, 4.6vw, 22px); letter-spacing: 0.01em; line-height: 1;
      text-align: center;
      text-shadow: 0 2px 14px rgba(0, 0, 0, .34);
    }
    espace-rhum .er-news2-swipe-face svg {
      width: 24px; height: 24px; flex: 0 0 auto;
      fill: none; stroke: currentColor; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
    }
     
    espace-rhum .er-news2-swipe[data-dir="later"] {
      background: linear-gradient(105deg,
        rgba(0, 103, 110, calc(0.97 * var(--er-sw))),
        rgba(52, 155, 148, calc(0.97 * var(--er-sw))));
    }
    espace-rhum .er-news2-swipe[data-dir="later"] .er-news2-swipe-face--later {
      opacity: calc(var(--er-sw) * 1.15); transform: scale(calc(.82 + .18 * var(--er-sw)));
    }
     
    espace-rhum .er-news2-swipe[data-dir="no"] {
      background: linear-gradient(105deg,
        rgba(186, 45, 22, calc(0.97 * var(--er-sw))),
        rgba(232, 122, 38, calc(0.97 * var(--er-sw))));
    }
    espace-rhum .er-news2-swipe[data-dir="no"] .er-news2-swipe-face--no {
      opacity: calc(var(--er-sw) * 1.15); transform: scale(calc(.82 + .18 * var(--er-sw)));
    }
     
    espace-rhum .er-news2-swipe[data-arme] .er-news2-swipe-face {
      transform: scale(1.08);
      transition: transform .16s var(--er-ease-entry, ease-out);
    }
    espace-rhum .er-news2-swipe[data-arme][data-dir="later"] {
      background: linear-gradient(105deg, #00676E, #349B94);
    }
    espace-rhum .er-news2-swipe[data-arme][data-dir="no"] {
      background: linear-gradient(105deg, #BA2D16, #E87A26);
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-news2-swipe-face { transition: none; }
    }

     
    espace-rhum .er-news-done {
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      padding: 30px 24px; text-align: center;
      background: var(--ern-surface, #EFF5F9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px 3px 14px 3px;
      box-shadow: 0 10px 24px -14px rgba(0, 0, 0, 0.65);
    }
    espace-rhum .er-news-done-ico { width: 74px; height: 74px; display: block; }
    espace-rhum .er-news-done-ico--fallback {
      width: 38px; height: 38px; border-radius: 50%;
      display: grid; place-items: center;
      background: rgba(0, 103, 110, 0.10); color: #00676E;
      font-size: 18px; font-weight: 800;
    }
    espace-rhum .er-news-done-title {
      font-family: var(--er-font-display); font-style: italic; text-transform: uppercase;
      font-size: 21px; line-height: 1.05; color: #0A1A35;
    }
    espace-rhum .er-news-done-text {
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5;
      color: rgba(10, 26, 53, 0.62); max-width: 42ch;
    }
    espace-rhum .er-news-done .er-btn--ghost {
      border-color: rgba(10, 26, 53, 0.18); color: #0A1A35;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-done .er-btn--ghost:hover{
      border-color: #00676E; color: #00676E; background: rgba(0, 103, 110, 0.07);
    }}
    

    espace-rhum .er-news-done-actions {
      display: flex; align-items: center; justify-content: center;
      gap: 8px 16px; flex-wrap: wrap; margin-top: 6px;
    }
    




    espace-rhum .er-news-done .er-btn--primary {
      background: var(--ern-ink); color: #FFFFFF;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-done .er-btn--primary:hover{
      background: #00676E; box-shadow: 0 6px 18px rgba(0, 103, 110, 0.28);
    }}
    espace-rhum .er-news-done-lien {
      font-family: var(--er-font-body); font-size: 12px;
      color: rgba(10, 26, 53, 0.66); text-decoration: underline;
      text-underline-offset: 3px; text-decoration-color: rgba(10, 26, 53, 0.28);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-done-lien:hover{
      color: #00676E; text-decoration-color: currentColor;
    }}

    




    espace-rhum .er-news-vide-lus {
      display: flex; flex-direction: column; align-items: center; gap: 12px;
      padding: 22px 18px; text-align: center;
      border: 1px dashed var(--er-border-soft); border-radius: 12px 3px 12px 3px;
    }
    


    




    









    espace-rhum .er-apercu {
      display: block; margin: 0 0 14px; padding: 11px 14px;
      border: 1px dashed rgba(226, 78, 78, 0.75); border-radius: 12px 3px 12px 3px;
      background: rgba(226, 78, 78, 0.08);
    }
    espace-rhum .er-apercu[data-charge] { opacity: 0.5; pointer-events: none; }
    espace-rhum .er-apercu-tete {
      display: flex; align-items: center; gap: 8px; margin-bottom: 9px;
    }
    espace-rhum .er-apercu-pastille {
      padding: 2px 8px; border-radius: 999px; background: #E24E4E;
      color: #FFFFFF; font-family: var(--er-font-body);
      font-size: 9px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
    }
    espace-rhum .er-apercu-qui {
      font-family: var(--er-font-body); font-size: 11px; color: var(--er-text-secondary);
    }
    espace-rhum .er-apercu-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    espace-rhum .er-apercu-chip {
      padding: 6px 11px; cursor: pointer; border-radius: 999px;
      background: transparent; border: 1px solid var(--er-border-soft);
      color: var(--er-text-secondary);
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 600;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-apercu-chip:hover{ border-color: #E24E4E; color: var(--er-text-primary); }}
    espace-rhum .er-apercu-chip[aria-pressed="true"] {
      background: var(--er-amber); border-color: var(--er-amber); color: var(--er-bg-base);
    }
    espace-rhum .er-apercu-chip:focus-visible { outline: 2px solid #E24E4E; outline-offset: 2px; }
    


    espace-rhum .er-apercu-chip em {
      font-style: normal; margin-left: 6px; opacity: 0.72;
      font-size: 10px; font-weight: 600;
    }
    espace-rhum .er-apercu-chip[data-vide] { opacity: 0.62; }
    espace-rhum .er-apercu-action {
      padding: 6px 11px; cursor: pointer; border-radius: 999px;
      background: #E24E4E; border: 1px solid #E24E4E; color: #FFFFFF;
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 700;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-apercu-action:hover{ background: #C93F3F; border-color: #C93F3F; }}
    espace-rhum .er-apercu-action:focus-visible { outline: 2px solid #E24E4E; outline-offset: 2px; }
    espace-rhum .er-apercu-note {
      margin: 9px 0 0; font-family: var(--er-font-body); font-size: 10.5px;
      line-height: 1.45; color: var(--er-text-muted, rgba(255,255,255,0.55));
    }

    


    espace-rhum .er-news-plus {
      display: flex; align-items: center; justify-content: center; gap: 9px;
      width: 100%; margin-top: 12px; padding: 11px 14px; cursor: pointer;
      background: transparent; border: 1px dashed var(--er-border-soft);
      border-radius: 12px 3px 12px 3px;
      font-family: var(--er-font-body); font-size: 12.5px; font-weight: 700;
      letter-spacing: 0.04em; color: var(--er-text-secondary);
      transition: border-color var(--er-dur-fast) var(--er-ease-smooth),
                  color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-plus:hover{ border-color: var(--er-teal); color: var(--er-text-primary); }}
    espace-rhum .er-news-plus:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-news-plus svg { width: 15px; height: 15px; }
    espace-rhum .er-news-plus b {
      padding: 1px 8px; border-radius: 999px; background: rgba(255, 255, 255, 0.09);
      font-size: 11px; font-weight: 800;
    }
    @media (max-width: 767px) { espace-rhum .er-news-plus { margin: 12px 16px 0; width: auto; } }

    












    

    espace-rhum .er-rank-plus {
      padding: 0; cursor: pointer;
      background: none; border: 0;
      font-family: var(--er-font-body); font-size: 12px; font-weight: 700;
      color: var(--er-white); text-decoration: underline;
      text-underline-offset: 3px; text-decoration-color: rgba(255, 255, 255, 0.4);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-rank-plus:hover{ color: var(--er-text-primary); text-decoration-color: currentColor; }}
    espace-rhum .er-rank-plus:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    espace-rhum .er-frise {
      position: relative; overflow: hidden; grid-column: 1 / -1;
      margin: 22px 0 0; padding: 22px 0 0;
      border: 1px solid var(--er-border-soft); border-radius: 20px 5px 20px 5px;
      background: linear-gradient(178deg, #17396D 0%, #0E2A52 52%, #071A36 100%);
      

      --er-motif-c: rgba(255, 255, 255, 0.115);
      --er-motif-size: 118% auto;
      --er-motif-pos: right -8% top -88%;
      --er-motif-fondu: linear-gradient(214deg, #000 4%, rgba(0,0,0,.55) 34%, transparent 66%);
    }
    

    espace-rhum .er-frise-astre {
      position: absolute; top: 38%; left: var(--sx, 50%);
      width: 420px; height: 420px; transform: translate(-50%, -50%); pointer-events: none;
      background: radial-gradient(circle, rgba(245,190,65,.22) 0%, rgba(245,190,65,.06) 36%, transparent 68%);
    }
    























    espace-rhum .er-frise-mer {
      position: absolute; left: 0; right: 0; top: 42%; bottom: 0; pointer-events: none;
      background: linear-gradient(180deg,
        rgba(0,103,110,0) 0%,
        rgba(0,103,110,.06) 24%,
        rgba(0,103,110,.22) 47%,
        rgba(0,103,110,.34) 75%,
        rgba(0,103,110,.40) 100%);
    }
    espace-rhum .er-frise-tete { position: relative; padding: 0 28px; }
    espace-rhum .er-frise-kick {
      font-family: var(--er-font-body); font-size: 9.5px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-teal);
    }
    espace-rhum .er-frise-titre {
      margin: 3px 0 0; font-family: var(--er-font-display); font-style: italic;
      font-size: 27px; text-transform: uppercase; color: var(--er-text-primary);
    }
    espace-rhum .er-frise-phrase {
      margin: 6px 0 0; font-family: var(--er-font-body); font-size: 13.5px;
      color: var(--er-text-secondary);
    }
    espace-rhum .er-frise-phrase b { color: var(--er-amber); font-weight: 700; }

    espace-rhum .er-frise-piste { position: relative; padding: 118px 26px 52px; }
    espace-rhum .er-frise-rangee { position: relative; display: flex; height: 18px; align-items: center; }
    espace-rhum .er-frise-rangee::before {
      content: ''; position: absolute; left: 7.14%; right: 7.14%; top: 50%; height: 2px;
      transform: translateY(-50%); border-radius: 2px;
      background: linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.17), rgba(255,255,255,.06));
    }
    espace-rhum .er-frise-jauge {
      position: absolute; left: 7.14%; top: 50%; height: 3px; width: 0;
      transform: translateY(-50%); border-radius: 3px;
      background: linear-gradient(90deg, var(--er-teal-deep, #00676E), var(--er-teal) 55%, var(--er-amber));
      box-shadow: 0 0 16px rgba(93,191,192,.55);
      animation: er-frise-remplir 1.7s .3s cubic-bezier(.35,0,.15,1) forwards;
    }
    @keyframes er-frise-remplir { to { width: var(--jusqua); } }

    espace-rhum .er-frise-et {
      flex: 1; position: relative; height: 100%; background: none; border: 0;
      padding: 0; cursor: pointer; color: inherit;
      display: flex; align-items: center; justify-content: center;
    }
    espace-rhum .er-frise-illu {
      position: absolute; bottom: calc(100% + var(--lift)); left: 50%;
      

      width: 64px; height: 64px; object-fit: contain; transform: translateX(-50%);
      transition: transform var(--er-dur-slow, .3s) var(--er-ease-smooth), filter .3s;
    }
    



    espace-rhum .er-frise-et[data-etat="a-venir"] .er-frise-illu,
    espace-rhum .er-frise-et[data-etat="attente"] .er-frise-illu {
      filter: brightness(0) invert(1) opacity(.16);
    }
    espace-rhum .er-frise-et[data-etat="acquis"] .er-frise-illu { filter: saturate(.9) opacity(.94); }
    espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-illu {
      width: 104px; height: 104px; bottom: calc(100% + var(--lift) - 6px);
      filter: drop-shadow(0 12px 22px rgba(0,0,0,.5));
      animation: er-frise-flotte 3.8s ease-in-out infinite;
    }
    @keyframes er-frise-flotte {
      0%, 100% { transform: translate(-50%, 0); }
      50% { transform: translate(-50%, -8px); }
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-frise-et:hover .er-frise-illu{ filter: none; transform: translateX(-50%) scale(1.09); }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-frise-et[data-etat="actuel"]:hover .er-frise-illu{ transform: translate(-50%, -4px) scale(1.04); }}

    espace-rhum .er-frise-halo {
      position: absolute; bottom: calc(100% + var(--lift) - 34px); left: 50%;
      width: 190px; height: 190px; transform: translateX(-50%); pointer-events: none; opacity: 0;
      background: radial-gradient(circle, rgba(245,190,65,.30) 0%, rgba(245,190,65,0) 62%);
    }
    espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-halo {
      opacity: 1; animation: er-frise-respire 3.8s ease-in-out infinite;
    }
    @keyframes er-frise-respire {
      0%, 100% { opacity: .8; transform: translateX(-50%) scale(1); }
      50% { opacity: 1; transform: translateX(-50%) scale(1.09); }
    }
     
    espace-rhum .er-frise-fil {
      content: ''; position: absolute; left: 50%; bottom: calc(50% + 7px);
      width: 1px; height: var(--lift); transform: translateX(-50%);
      background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.22));
    }
    espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-fil {
      background: linear-gradient(180deg, rgba(245,190,65,.05), rgba(245,190,65,.65));
    }
    espace-rhum .er-frise-pt {
      position: relative; z-index: 2; width: 11px; height: 11px; border-radius: 50%;
      background: #0B2244; border: 2px solid rgba(255,255,255,.24); transition: transform .25s;
    }
    espace-rhum .er-frise-et[data-etat="acquis"] .er-frise-pt {
      background: var(--er-teal); border-color: rgba(255,255,255,.55);
    }
    espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-pt {
      width: 17px; height: 17px; background: var(--er-amber-bright); border-color: #fff;
      box-shadow: 0 0 0 6px rgba(245,190,65,.16), 0 0 22px rgba(245,190,65,.7);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-frise-et:hover .er-frise-pt{ transform: scale(1.25); }}
    espace-rhum .er-frise-et:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 4px; border-radius: 6px; }

    espace-rhum .er-frise-nom {
      position: absolute; top: calc(100% + 14px); left: 50%; transform: translateX(-50%);
      white-space: nowrap; font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.10em; text-transform: uppercase; color: var(--er-text-muted, rgba(255,255,255,.32));
      transition: color .25s;
    }
    espace-rhum .er-frise-et[data-etat="acquis"] .er-frise-nom { color: var(--er-text-secondary); }
    espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-nom { color: var(--er-amber); font-size: 11.5px; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-frise-et:hover .er-frise-nom{ color: var(--er-text-primary); }}
    







    espace-rhum .er-frise-pts {
      position: absolute; top: calc(100% + 32px); left: 50%; transform: translateX(-50%);
      white-space: nowrap; font-family: var(--er-font-body); font-size: 10.5px; font-weight: 800;
      letter-spacing: 0.02em; color: var(--er-amber-bright);
      padding: 2px 7px; border-radius: 999px; background: rgba(245, 190, 65, 0.12);
    }
    espace-rhum .er-frise-pts--suite {
      font-weight: 600; color: var(--er-text-secondary); background: rgba(255, 255, 255, 0.06);
    }

     
    espace-rhum .er-frise-note {
      position: relative; margin: 0; padding: 13px 28px 18px;
      border-top: 1px solid rgba(255,255,255,.09);
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5;
      color: var(--er-text-secondary); min-height: 52px;
    }
    espace-rhum .er-frise-note b { color: var(--er-amber); font-weight: 700; }
    


    espace-rhum .er-frise-aide {
      display: inline-flex; align-items: center; gap: 6px;
      margin: 2px 0 16px; padding: 6px 12px 6px 9px; border-radius: 999px;
      background: var(--er-teal-soft); border: 1px solid rgba(93, 191, 192, 0.3);
      color: var(--er-teal); font-family: var(--er-font-body); font-size: 12px;
      font-weight: 700; cursor: pointer;
      transition: all var(--er-dur-fast) var(--er-ease-smooth);
    }
    

    espace-rhum .er-frise > .er-frise-aide { margin-left: 28px; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-frise-aide:hover{ background: rgba(93, 191, 192, 0.2); border-color: var(--er-teal); }}
    espace-rhum .er-frise-aide:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-frise-aide-ico {
      width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0;
    }

    


    











    espace-rhum .er-monte .er-monte-panel {
      width: 700px; padding: 24px 32px 22px;
      scrollbar-width: thin; scrollbar-color: var(--er-teal-soft) transparent;
    }
    espace-rhum .er-monte .er-monte-text { font-size: 14.5px; max-width: 540px; margin: 0 auto 16px; }
    espace-rhum .er-monte-liste {
      list-style: none; margin: 0 0 18px; padding: 0; text-align: left;
      display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px;
    }
    espace-rhum .er-monte-liste li {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 11px 14px; border-radius: 14px;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    espace-rhum .er-monte-ico {
      flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      background: var(--er-teal-soft); border: 1px solid rgba(93, 191, 192, 0.28);
      color: var(--er-teal);
    }
    espace-rhum .er-monte-ico svg {
      width: 17px; height: 17px; fill: none; stroke: currentColor;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-monte-geste-titre {
      display: block; margin: 1px 0 3px;
      font-family: var(--er-font-body); font-size: 13.5px; font-weight: 700; line-height: 1.3;
      color: var(--er-white);
    }
    espace-rhum .er-monte-geste-texte {
      display: block; font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5;
      color: rgba(238, 242, 248, 0.66);
    }
    

    espace-rhum .er-monte-doux {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin: 2px auto 14px; max-width: 600px;
      font-family: var(--er-font-body); font-size: 13px; font-style: italic; line-height: 1.5;
      color: rgba(238, 242, 248, 0.72);
    }
    espace-rhum .er-monte-doux svg { width: 15px; height: 15px; flex: none; color: var(--er-teal); }
     
    espace-rhum .er-monte-nuit {
      position: relative; overflow: hidden;
      display: flex; align-items: center; gap: 16px; text-align: left;
      margin: 0 0 16px; padding: 16px 18px 16px 22px;
      border-radius: 18px 4px 18px 4px;
      background:
        radial-gradient(circle at 88% 18%, rgba(252, 241, 80, 0.16), transparent 42%),
        linear-gradient(135deg, #1D2C6E 0%, #101E4C 55%, #0A1433 100%);
      border: 1px solid rgba(160, 172, 255, 0.24);
    }
    espace-rhum .er-monte-nuit::before {
      content: ''; position: absolute; inset: 0; pointer-events: none; opacity: 0.55;
      background-image:
        radial-gradient(1.2px 1.2px at 12% 22%, #fff 50%, transparent 55%),
        radial-gradient(1px 1px at 34% 70%, #fff 50%, transparent 55%),
        radial-gradient(1.4px 1.4px at 58% 16%, #fff 50%, transparent 55%),
        radial-gradient(1px 1px at 71% 58%, #fff 50%, transparent 55%),
        radial-gradient(1.2px 1.2px at 46% 40%, #fff 50%, transparent 55%),
        radial-gradient(1px 1px at 22% 84%, #fff 50%, transparent 55%);
    }
    espace-rhum .er-monte-nuit-corps { position: relative; flex: 1 1 auto; min-width: 0; }
    espace-rhum .er-monte-nuit-kick {
      display: flex; align-items: center; gap: 6px;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: #C4CBFF;
    }
    espace-rhum .er-monte-nuit-kick svg { width: 13px; height: 13px; color: var(--er-amber-bright); fill: currentColor; }
    espace-rhum .er-monte-nuit-titre {
      margin: 5px 0 6px; font-family: var(--er-font-display); font-style: italic;
      font-size: 20px; line-height: 1.05; text-transform: uppercase; color: var(--er-white);
    }
    espace-rhum .er-monte-nuit-texte {
      margin: 0; font-family: var(--er-font-body); font-size: 13px; line-height: 1.55;
      color: rgba(238, 242, 248, 0.82);
    }
    espace-rhum .er-monte-nuit-tymal {
      position: relative; flex: none; width: 110px; height: 100px; margin: -10px -4px -14px 0; object-fit: contain;
      filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.5));
    }
    @media (max-width: 600px) {
      espace-rhum .er-monte .er-monte-panel { padding: 26px 16px 18px; }
      espace-rhum .er-monte .er-monte-text { font-size: 14px; margin-bottom: 18px; }
      espace-rhum .er-monte-liste { grid-template-columns: minmax(0, 1fr); gap: 8px; }
      espace-rhum .er-monte-liste li { padding: 11px 12px; }
      espace-rhum .er-monte-nuit { padding: 16px 14px 16px 16px; gap: 10px; }
      espace-rhum .er-monte-nuit-tymal { width: 70px; height: 70px; }
      espace-rhum .er-monte-nuit-titre { font-size: 18px; }
      espace-rhum .er-monte-doux { flex-direction: column; gap: 4px; }
    }

    espace-rhum .er-frise-cur { color: var(--er-text-muted, rgba(255,255,255,.32)); font-size: 11px; }

    








    @media (max-width: 767px) {
      espace-rhum .er-frise { margin: 18px 0 0; border-radius: 18px 4px 18px 4px; }
      espace-rhum .er-frise-tete { padding: 0 18px; }
      












      espace-rhum .er-frise-titre { font-size: 22px; line-height: 1.06; margin-top: 8px; }
      espace-rhum .er-frise-kick { line-height: 1.4; }
      espace-rhum .er-frise-phrase { font-size: 12.5px; }
      espace-rhum .er-frise-defil {
        overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
        mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
      }
      espace-rhum .er-frise-defil::-webkit-scrollbar { display: none; }
      espace-rhum .er-frise-piste { width: 820px; padding: 196px 20px 52px; }
      espace-rhum .er-frise-et { scroll-snap-align: center; --lift: calc(10px + var(--rang, 0) * 11px); }
      espace-rhum .er-frise-illu { width: 60px; height: 60px; }
      espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-illu { width: 96px; height: 96px; }
      espace-rhum .er-frise-halo { width: 170px; height: 170px; }
      espace-rhum .er-frise-nom { font-size: 9.5px; letter-spacing: 0.08em; }
      espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-nom { font-size: 11px; }
      espace-rhum .er-frise-note { padding: 12px 18px 16px; font-size: 12px; min-height: 58px; }
    }
    

    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-frise-jauge { animation: none; width: var(--jusqua); }
      espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-illu,
      espace-rhum .er-frise-et[data-etat="actuel"] .er-frise-halo { animation: none; }
    }

    espace-rhum .er-news-vide-lus-ico {
      width: 62px; height: 62px; display: block; margin-bottom: -2px;
    }
    espace-rhum .er-news-vide-lus-txt {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin: 0; font-family: var(--er-font-body); font-size: 13px;
      line-height: 1.45; color: var(--er-text-secondary);
    }
    espace-rhum .er-news-vide-lus-txt svg {
      width: 15px; height: 15px; flex: 0 0 auto; color: var(--er-teal);
    }
    espace-rhum .er-news-vide-lus-acts {
      display: flex; align-items: center; justify-content: center;
      gap: 8px 16px; flex-wrap: wrap;
    }
    espace-rhum .er-news-vide-lus .er-news-done-lien {
      color: var(--er-text-secondary);
      text-decoration-color: rgba(255, 255, 255, 0.28);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-vide-lus .er-news-done-lien:hover{
      color: var(--er-text-primary); text-decoration-color: currentColor;
    }}

    








    espace-rhum .er-news-lassitude {
      display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
      margin: 0 0 12px; padding: 12px 14px;
      background: var(--er-bg-elevated); border: 1px solid var(--er-border-soft);
      border-radius: 12px 3px 12px 3px;
    }
    espace-rhum .er-news-lassitude-txt {
      display: flex; align-items: center; gap: 9px; margin: 0; flex: 1 1 220px;
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.45;
      color: var(--er-text-primary);
    }
    espace-rhum .er-news-lassitude-txt svg {
      width: 16px; height: 16px; flex: 0 0 auto; color: var(--er-teal);
    }
    

    espace-rhum .er-news-lassitude-txt i { font-style: normal; }
    espace-rhum .er-news-lassitude-txt b { color: var(--er-teal); font-weight: 700; }
    espace-rhum .er-news-lassitude-acts {
      display: flex; align-items: center; gap: 8px; flex: 0 0 auto;
    }
    espace-rhum .er-news-lassitude-oui,
    espace-rhum .er-news-lassitude-non {
      padding: 7px 13px; cursor: pointer; border-radius: 999px;
      font-family: var(--er-font-body); font-size: 12px; font-weight: 700;
      white-space: nowrap;
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  color var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-news-lassitude-oui {
      background: var(--er-teal); border: 1px solid var(--er-teal);
      color: var(--er-bg-base);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-lassitude-oui:hover{ background: var(--er-text-primary); border-color: var(--er-text-primary); }}
    espace-rhum .er-news-lassitude-non {
      background: transparent; border: 1px solid var(--er-border-soft);
      color: var(--er-text-secondary);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-news-lassitude-non:hover{ border-color: var(--er-text-primary); color: var(--er-text-primary); }}
    espace-rhum .er-news-lassitude-oui:focus-visible,
    espace-rhum .er-news-lassitude-non:focus-visible {
      outline: 2px solid var(--er-teal); outline-offset: 2px;
    }
    @media (max-width: 767px) {
      espace-rhum .er-news-lassitude { margin: 0 16px 12px; }
      espace-rhum .er-news-lassitude-acts { width: 100%; justify-content: flex-end; }

    }

     
    espace-rhum .er-news-saved { margin-top: 22px; }
    espace-rhum .er-news-saved-head {
      display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800;
      letter-spacing: 0.09em; text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-news-saved-n {
      background: rgba(255, 255, 255, 0.07); border-radius: 999px;
      padding: 2px 8px; letter-spacing: 0; color: var(--er-text-muted);
    }

     
    

    espace-rhum .er-widget--prefere {
      grid-column: span 4;
      display: flex; flex-direction: column; gap: 14px;
      padding: 18px 16px 16px;
      border-radius: 18px 3px 14px 3px;
      background: linear-gradient(158deg, rgba(0, 103, 110, 0.30), rgba(10, 26, 53, 0.62) 62%);
      border: 1px solid rgba(0, 194, 168, 0.26);
      box-shadow: 0 18px 40px -30px rgba(0, 0, 0, 0.9), var(--o-arete);
      overflow: hidden; position: relative; isolation: isolate;
    }
    espace-rhum .er-prefere-tete { display: flex; flex-direction: column; gap: 4px; }
    espace-rhum .er-prefere-kick {
      font-family: var(--er-font-title); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-teal);
    }
    espace-rhum .er-prefere-titre {
      margin: 0; font-family: var(--er-font-title); font-style: italic;
      font-size: 21px; line-height: 1.05; text-transform: uppercase;
      color: var(--er-text-primary);
    }
    espace-rhum .er-prefere-sous {
      margin: 0; font-family: var(--er-font-body); font-size: 12px; line-height: 1.5;
      color: var(--er-text-secondary);
    }
    


    







    espace-rhum .er-widget--prefere .er-votesk {
      background: none; border: 0; padding: 0; margin: 0;
      flex-direction: column; flex-wrap: nowrap; align-items: stretch;
    }
    

    espace-rhum .er-widget--prefere .er-votesk-gauche {
      flex-direction: column; flex-wrap: nowrap; align-items: stretch;
    }
    espace-rhum .er-widget--prefere .er-top5 { flex: 0 0 auto; width: 100%; }
    espace-rhum .er-widget--prefere .er-votesk-texte { display: none; }
    espace-rhum .er-widget--prefere .er-votesk .er-pick { flex: 1 1 auto; }

     
    espace-rhum .er-top5 {
      margin-top: 12px; padding-top: 12px;
      border-top: 1px solid var(--er-border-soft);
      flex: 1 1 100%; min-width: 0;
    }
    espace-rhum .er-top5-tete {
      display: flex; align-items: center; gap: 7px; margin-bottom: 9px;
      font-family: var(--er-font-title); font-size: 11px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase; color: var(--er-amber-bright);
    }
    espace-rhum .er-top5-tete svg { width: 14px; height: 14px; flex: none; }
    espace-rhum .er-top5-liste { list-style: none; margin: 0; padding: 0; display: grid; gap: 5px; }
    espace-rhum .er-top5-l {
      display: flex; align-items: center; gap: 9px;
      padding: 5px 8px; border-radius: 8px;
      background: rgba(255, 255, 255, 0.04);
      border-left: 3px solid var(--cl, var(--er-border-soft));
    }
    

    espace-rhum .er-top5-liste [data-top5-skipper] {
      cursor: pointer;
      transition: transform var(--er-dur-fast) var(--er-ease-smooth), box-shadow var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top5-liste [data-top5-skipper]:hover{
      transform: translateX(3px);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
    }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top5-liste [data-top5-skipper]:hover .er-top5-nom{ color: var(--er-amber-bright); }}
    espace-rhum .er-top5-liste [data-top5-skipper]:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-top5-rang {
      flex: none; width: 16px; text-align: center;
      font-family: var(--er-font-title); font-size: 13px; font-weight: 800;
      color: var(--er-text-muted);
    }
    espace-rhum .er-top5-rond {
      flex: none; width: 24px; height: 24px; border-radius: 50%;
      background: rgba(255, 255, 255, 0.08) center top / cover no-repeat;
    }
    espace-rhum .er-top5-nom {
      flex: 1 1 auto; min-width: 0;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: var(--er-font-body); font-size: 12px; font-weight: 600;
      color: var(--er-text-primary);
    }
    espace-rhum .er-top5-n {
      flex: none; font-family: var(--er-font-title); font-size: 12px; font-weight: 800;
      color: var(--er-teal);
    }
    espace-rhum .er-top5-quand {
      margin: 8px 0 0; font-family: var(--er-font-body); font-size: 10px;
      line-height: 1.45; color: var(--er-text-muted);
    }

    








    






    espace-rhum .er-top5-l.er-top5-l--m1,
    espace-rhum .er-top5-l.er-top5-l--m2,
    espace-rhum .er-top5-l.er-top5-l--m3 { padding: 7px 9px; }
    espace-rhum .er-top5-l.er-top5-l--m1 {
      --metal: #F5B041; border-left-color: #F5B041;
      background: linear-gradient(90deg, rgba(245, 176, 65, 0.16), rgba(255, 255, 255, 0.04) 62%);
    }
    espace-rhum .er-top5-l.er-top5-l--m2 {
      --metal: #C8D2DC; border-left-color: #C8D2DC;
      background: linear-gradient(90deg, rgba(200, 210, 220, 0.13), rgba(255, 255, 255, 0.04) 62%);
    }
    espace-rhum .er-top5-l.er-top5-l--m3 {
      --metal: #C08457; border-left-color: #C08457;
      background: linear-gradient(90deg, rgba(192, 132, 87, 0.13), rgba(255, 255, 255, 0.04) 62%);
    }
     
    espace-rhum .er-top5-l--m1 .er-top5-rang { color: #F5B041; font-size: 16px; }
    espace-rhum .er-top5-l--m2 .er-top5-rang { color: #C8D2DC; font-size: 14px; }
    espace-rhum .er-top5-l--m3 .er-top5-rang { color: #C08457; font-size: 14px; }
    

    espace-rhum .er-top5-l--m1 .er-top5-rond {
      width: 30px; height: 30px; box-shadow: 0 0 0 2px #F5B041, 0 4px 12px -4px rgba(0,0,0,.7);
    }
    espace-rhum .er-top5-l--m2 .er-top5-rond,
    espace-rhum .er-top5-l--m3 .er-top5-rond { width: 27px; height: 27px; }
    espace-rhum .er-top5-l--m1 .er-top5-nom { font-size: 13px; font-weight: 700; }
    espace-rhum .er-top5-l--m1 .er-top5-n { color: var(--er-amber-bright); font-size: 13px; }
    












    espace-rhum .er-top5-liste .er-top5-l.est-moi {
      background: linear-gradient(115deg, var(--er-navy-900, #0A1A35) 0%, rgba(10, 26, 53, 0.72) 100%);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 18px -10px rgba(0, 0, 0, 0.8);
    }
    espace-rhum .er-top5-liste .er-top5-l.est-moi .er-top5-nom { font-weight: 700; }
    



    espace-rhum .er-top5-liste .er-top5-l.est-moi .er-top5-nom { flex: 0 1 auto; }
    espace-rhum .er-top5-coeur {
      flex: none; margin-right: auto; display: inline-grid; place-items: center;
      width: 14px; height: 14px; color: #E63946;
    }
    espace-rhum .er-top5-coeur svg { width: 13px; height: 13px; filter: drop-shadow(0 0 4px rgba(230, 57, 70, .55)); }
    


    espace-rhum .er-top5-l.er-top5-l--egal { position: relative; }
    espace-rhum .er-top5-l--egal::before {
      content: '='; position: absolute; left: 9px; top: -11px; z-index: 1;
      width: 16px; height: 16px; border-radius: 50%;
      display: grid; place-items: center;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800; line-height: 1; color: #10162F;
      background: var(--metal, #8A94A6); box-shadow: 0 0 0 2px rgba(16, 22, 47, 0.95);
    }
    

    espace-rhum .er-top5-plus {
      margin: 7px 0 0 3px; font-family: var(--er-font-body); font-size: 11px;
      font-weight: 700; line-height: 1.3; color: rgba(255, 255, 255, 0.62);
    }
    


    espace-rhum .er-top5-l--appel .er-top5-rond { animation: erCpAnneau 1.6s ease-out 3; }
    espace-rhum .er-top5-l--appel .er-top5-coeur { animation: erCpBat 1.1s ease-in-out infinite; }
    @keyframes erCpAnneau {
      0% { box-shadow: 0 0 0 2px var(--metal, #E63946), 0 0 0 2px rgba(230, 57, 70, .9); }
      100% { box-shadow: 0 0 0 2px var(--metal, #E63946), 0 0 0 12px rgba(230, 57, 70, 0); }
    }
    @keyframes erCpBat { 0%, 100% { transform: scale(1); } 15% { transform: scale(1.3); } 30% { transform: scale(1); } 45% { transform: scale(1.2); } }

    











    @media (min-width: 1024px) {
      espace-rhum .er-widget-fav-skippers .er-votesk {
        display: grid; grid-template-columns: minmax(0, 1fr) 340px;
        column-gap: 24px; align-items: start;
      }
      



      espace-rhum .er-widget-fav-skippers .er-votesk > .er-votesk-gauche {
        grid-column: 1; grid-row: 1;
        flex-direction: column; align-items: stretch; flex: 1 1 auto;
      }
      





      espace-rhum .er-widget-fav-skippers .er-votesk-gauche > * { flex: 0 0 auto; }
      espace-rhum .er-widget-fav-skippers .er-votesk > .er-top5 {
        grid-column: 2; grid-row: 1;
        margin: 0; padding: 2px 0 0 24px;
        border-top: 0; border-left: 1px solid var(--er-border-soft);
        align-self: start;
      }
    }

    













    espace-rhum .er-widget-fav-skippers .er-top5 { position: relative; }
    espace-rhum .er-widget-fav-skippers .er-top5.er-cp-en-jeu { overflow: hidden; }
    espace-rhum .er-widget-fav-skippers .er-top5 > .er-top5-tete,
    espace-rhum .er-widget-fav-skippers .er-top5 > .er-top5-liste,
    espace-rhum .er-widget-fav-skippers .er-top5 > .er-top5-plus,
    espace-rhum .er-widget-fav-skippers .er-top5 > .er-top5-quand {
      transition: opacity .4s .28s, transform .55s .2s cubic-bezier(.16, 1, .3, 1);
    }
    espace-rhum .er-widget-fav-skippers .er-top5.er-cp-couvert > .er-top5-tete,
    espace-rhum .er-widget-fav-skippers .er-top5.er-cp-couvert > .er-top5-liste,
    espace-rhum .er-widget-fav-skippers .er-top5.er-cp-couvert > .er-top5-plus,
    espace-rhum .er-widget-fav-skippers .er-top5.er-cp-couvert > .er-top5-quand {
      opacity: 0; transform: translateX(-40px);
      transition: opacity .3s, transform .45s cubic-bezier(.5, 0, .75, 0);
    }
    espace-rhum .er-cp {
      position: absolute; z-index: 6; top: 0; bottom: 0; left: 14px; right: 0; box-sizing: border-box;
      display: flex; flex-direction: column; justify-content: center; align-items: flex-start;
      padding: 18px 18px 24px; border-radius: 14px; text-align: left;
      color: var(--er-text-primary); font-family: var(--er-font-body);
      background:
        radial-gradient(90% 70% at 100% 0%, rgba(230, 57, 70, .22) 0%, rgba(230, 57, 70, 0) 70%),
        linear-gradient(160deg, rgba(255, 255, 255, .07) 0%, rgba(255, 255, 255, .025) 100%);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .09);
      opacity: 0; transform: translateX(100%); pointer-events: none;
    }
    @media (max-width: 1023px) {
      espace-rhum .er-cp { top: 12px; left: 0; }
    }
    espace-rhum .er-cp.est-ouverte { animation: erCpEntre .62s .1s cubic-bezier(.16, 1, .3, 1) both; pointer-events: auto; }
    espace-rhum .er-cp.est-fermee { animation: erCpSort .42s cubic-bezier(.5, 0, .75, 0) both; pointer-events: none; }
    @keyframes erCpEntre { from { opacity: .3; transform: translateX(100%); } to { opacity: 1; transform: none; } }
    @keyframes erCpSort { from { opacity: 1; transform: none; } to { opacity: .3; transform: translateX(100%); } }
    espace-rhum .er-cp.est-ouverte > * { animation: erCpMonte .5s cubic-bezier(.16, 1, .3, 1) both; }
    espace-rhum .er-cp.est-ouverte > :nth-child(1) { animation-delay: .3s; }
    espace-rhum .er-cp.est-ouverte > :nth-child(2) { animation-delay: .38s; }
    espace-rhum .er-cp.est-ouverte > :nth-child(3) { animation-delay: .46s; }
    espace-rhum .er-cp.est-ouverte > :nth-child(4) { animation-delay: .54s; }
    espace-rhum .er-cp.est-ouverte > :nth-child(5) { animation-delay: .62s; }
    @keyframes erCpMonte { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: none; } }

    espace-rhum .er-cp-x {
      position: absolute; top: 9px; right: 9px; width: 28px; height: 28px; padding: 0;
      display: grid; place-items: center; border: 0; border-radius: 50%; cursor: pointer;
      background: rgba(255, 255, 255, .07); color: rgba(255, 255, 255, .7);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-cp-x:hover{ background: rgba(255, 255, 255, .16); color: var(--er-text-primary); }}
    espace-rhum .er-cp-x:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-cp-x svg { width: 14px; height: 14px; }
    espace-rhum .er-cp-kick {
      display: flex; align-items: center; gap: 6px; padding-right: 30px;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800; line-height: 1.2;
      letter-spacing: .12em; text-transform: uppercase; color: #FF8A93;
    }
    espace-rhum .er-cp-kick svg { width: 12px; height: 12px; flex: none; color: #E63946; }

    


    espace-rhum .er-cp-duel {
      align-self: stretch; display: grid; grid-template-columns: auto 1fr auto;
      align-items: center; gap: 10px; margin: 14px 0;
    }
    espace-rhum .er-cp-sk { display: flex; align-items: center; gap: 7px; min-width: 0; }
    espace-rhum .er-cp-sk--rival { flex-direction: row-reverse; }
    espace-rhum .er-cp-rond {
      width: 34px; height: 34px; border-radius: 50%; flex: none;
      background: rgba(255, 255, 255, .08) center top / cover no-repeat;
      box-shadow: 0 0 0 2px #E63946;
    }
    espace-rhum .er-cp-sk--rival .er-cp-rond { box-shadow: 0 0 0 2px rgba(255, 255, 255, .35); }
    espace-rhum .er-cp-pile { display: flex; flex-direction: row-reverse; }
    espace-rhum .er-cp-pile .er-cp-rond { width: 28px; height: 28px; box-shadow: 0 0 0 2px #1D1838; }
    espace-rhum .er-cp-pile .er-cp-rond + .er-cp-rond { margin-right: -10px; }
    espace-rhum .er-cp-rond--plus {
      display: grid; place-items: center; background: #2A2F55;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800; line-height: 1; color: var(--er-text-primary);
    }
    espace-rhum .er-cp-id { display: flex; flex-direction: column; line-height: 1.1; min-width: 0; }
    espace-rhum .er-cp-sk--rival .er-cp-id { align-items: flex-end; }
    espace-rhum .er-cp-id b { font-family: var(--er-font-body); font-size: 17px; font-weight: 800; line-height: 1; }
    espace-rhum .er-cp-id span {
      max-width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 600; line-height: 1.3; color: rgba(255, 255, 255, .6);
    }
    espace-rhum .er-cp-barre { position: relative; height: 6px; border-radius: 99px; background: rgba(255, 255, 255, .14); }
    espace-rhum .er-cp-barre i {
      position: absolute; left: 0; top: 0; bottom: 0; width: 50%; border-radius: 99px;
      background: linear-gradient(90deg, #E63946, #FF6B6B); transform-origin: left;
      animation: erCpBarre .9s .75s cubic-bezier(.16, 1, .3, 1) both;
    }
    espace-rhum .er-cp-barre em {
      position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
      min-width: 22px; height: 22px; padding: 0 5px; box-sizing: border-box; border-radius: 99px;
      display: grid; place-items: center; font-style: normal;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800; line-height: 1; color: #10162F;
      background: #FCF150; box-shadow: 0 0 0 3px #1C1838;
      animation: erCpPouls 1.3s 1.5s ease-in-out 2;
    }
    @keyframes erCpBarre { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes erCpPouls { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.22); } }

     
    espace-rhum .er-cp-rang { display: flex; align-items: center; gap: 12px; margin: 14px 0; }
    espace-rhum .er-cp-rang .er-cp-rond { width: 44px; height: 44px; }
    espace-rhum .er-cp-rang-n {
      font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 38px;
      line-height: 1; white-space: nowrap; color: #FCF150;
      animation: erCpPop .6s .7s cubic-bezier(.34, 1.56, .64, 1) both;
    }
    espace-rhum .er-cp-rang-n small,
    espace-rhum .er-cp-rang-n sup { font-size: 15px; vertical-align: 1em; margin-right: 1px; }
    espace-rhum .er-cp-rang-txt {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700; line-height: 1.35;
      letter-spacing: .1em; text-transform: uppercase; color: rgba(255, 255, 255, .6);
    }
    @keyframes erCpPop { from { transform: scale(.5); opacity: 0; } to { transform: none; opacity: 1; } }

    espace-rhum .er-cp-titre {
      margin: 0; font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 20px; line-height: 1.08; letter-spacing: 0; text-transform: uppercase;
    }
    espace-rhum .er-cp-titre em { font-style: inherit; color: #FCF150; }
    espace-rhum .er-cp-txt {
      margin: 7px 0 0; font-family: var(--er-font-body); font-size: 12px; font-weight: 500;
      line-height: 1.45; color: rgba(255, 255, 255, .74);
    }
    espace-rhum .er-cp-cta {
      margin-top: 13px; display: inline-flex; align-items: center; gap: 8px; padding: 10px 15px;
      border: 0; border-radius: 10px; cursor: pointer; background: #FCF150; color: #0A1228;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800; line-height: 1;
      letter-spacing: .08em; text-transform: uppercase; box-shadow: 0 8px 20px -8px rgba(252, 241, 80, .55);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-cp-cta:hover{ background: var(--er-text-primary); }}
    espace-rhum .er-cp-cta:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-cp-cta svg { width: 15px; height: 15px; }
    

    espace-rhum .er-cp-temps {
      position: absolute; left: 18px; right: 18px; bottom: 10px; height: 2px;
      border-radius: 2px; background: rgba(255, 255, 255, .1); overflow: hidden;
    }
    espace-rhum .er-cp-temps::after {
      content: ''; position: absolute; inset: 0; transform-origin: left;
      background: linear-gradient(90deg, #E63946, #FCF150);
      animation: erCpTemps var(--er-cp-duree, 20s) linear forwards;
    }
    espace-rhum .er-cp.est-tenu .er-cp-temps::after { animation-play-state: paused; }
    @media (hover: hover) {
      espace-rhum .er-cp:hover .er-cp-temps::after { animation-play-state: paused; }
    }
    @keyframes erCpTemps { from { transform: scaleX(1); } to { transform: scaleX(0); } }
    


    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-cp.est-ouverte, espace-rhum .er-cp.est-ouverte > *, espace-rhum .er-cp.est-fermee,
      espace-rhum .er-cp-barre i, espace-rhum .er-cp-barre em, espace-rhum .er-cp-rang-n,
      espace-rhum .er-top5-l--appel .er-top5-rond, espace-rhum .er-top5-l--appel .er-top5-coeur { animation: none; }
      espace-rhum .er-cp.est-ouverte { opacity: 1; transform: none; }
      espace-rhum .er-cp.est-fermee { opacity: 0; }
      espace-rhum .er-widget-fav-skippers .er-top5 > * { transition: none; }
    }

     
    espace-rhum .er-widget-suggestions {
      grid-column: span 4;
      background: transparent;
      border: none;
      padding: 0;
    }
    



    espace-rhum .er-widget-suggestions[data-collapsed="true"] { display: none; }
    espace-rhum .er-dashboard[data-pour-toi-replie="true"] .er-widget-news-mix { grid-column: span 12; }

    

    espace-rhum .er-dashboard[data-pour-toi-replie="true"] .er-news2--lead {
      display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); align-items: stretch;
    }
    espace-rhum .er-dashboard[data-pour-toi-replie="true"] .er-news2--lead .er-news2-media {
      aspect-ratio: auto; height: 100%; min-height: 244px;
    }
    espace-rhum .er-dashboard[data-pour-toi-replie="true"] .er-news2--lead .er-news2-body {
      justify-content: center; padding: 20px 24px;
    }
    espace-rhum .er-dashboard[data-pour-toi-replie="true"] .er-news2--lead .er-news2-excerpt {
      -webkit-line-clamp: 3; line-clamp: 3;
    }

     
    espace-rhum .er-news-recall { display: none; }
    espace-rhum .er-dashboard[data-pour-toi-replie="true"] .er-news-recall {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 8px 12px; cursor: pointer;
      border: 1px solid var(--er-border-soft); background: transparent;
      border-radius: 999px; color: var(--er-text-secondary);
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap;
      transition: color var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-news-recall svg { width: 13px; height: 13px; flex: 0 0 auto; }
    espace-rhum .er-news-recall b {
      font-size: 10px; line-height: 1; padding: 3px 6px; border-radius: 999px;
      background: rgba(93, 191, 192, 0.16); color: var(--er-teal); letter-spacing: 0;
    }
    espace-rhum .er-news-recall:focus-visible{
      color: var(--er-white); border-color: rgba(93, 191, 192, 0.6);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-news-recall:hover{
      color: var(--er-white); border-color: rgba(93, 191, 192, 0.6);
    }}
    espace-rhum .er-suggestions-toggle {
      flex: 0 0 auto; width: 30px; height: 30px; padding: 0;
      display: grid; place-items: center;
      border-radius: 50%; cursor: pointer;
      border: 1px solid var(--er-border-soft); background: transparent;
      color: var(--er-text-muted);
      transition: color var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  transform var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-suggestions-toggle svg { width: 15px; height: 15px; display: block; transform: rotate(90deg); }
    espace-rhum .er-suggestions-toggle[aria-expanded="false"] svg { transform: rotate(-90deg); }
    espace-rhum .er-suggestions-toggle:focus-visible{
      color: var(--er-white); border-color: rgba(93, 191, 192, 0.6);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-suggestions-toggle:hover{
      color: var(--er-white); border-color: rgba(93, 191, 192, 0.6);
    }}
    espace-rhum .er-section-header--compact {
      padding: 20px 8px;
    }
    espace-rhum .er-section-title--sm {
      font-size: 28px !important;
    }
    espace-rhum .er-suggestions-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    espace-rhum .er-suggestion-item {
      position: relative;
      display: grid;
      grid-template-columns: 48px 1fr 32px;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: 14px 3px 10px 3px;
      cursor: pointer;
      transition: transform var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth);
      font: inherit;
      color: inherit;
      text-align: left;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-suggestion-item:hover{
      border-color: rgba(93, 191, 192, 0.3);
      transform: translateX(-2px);
    }}
    espace-rhum .er-suggestion-photo {
      position: relative;
      width: 48px; height: 48px;
      border-radius: 12px 3px 8px 3px;
      background-size: cover;
      background-position: center top;
      background-color: var(--er-surface);
      flex-shrink: 0;
    }
    espace-rhum .er-suggestion-class-dot {
      position: absolute;
      top: -4px; right: -4px;
      width: 10px; height: 10px;
      border-radius: 50%;
      border: 2px solid var(--er-bg-card);
    }
    espace-rhum .er-suggestion-content { min-width: 0; overflow: hidden; }
    










    espace-rhum .er-suggestion-name {
      font-family: var(--er-font-display); font-style: italic;
      text-transform: uppercase;
      line-height: 1;
      color: var(--er-white);
      min-width: 0;
    }
    espace-rhum .er-suggestion-prenom {
      display: block; margin-bottom: 3px;
      font-family: var(--er-font-body); font-style: normal; font-weight: 700;
      font-size: 10px; letter-spacing: .22em; line-height: 1.2;
      color: var(--er-text-muted);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    espace-rhum .er-suggestion-nom {
      display: block; font-size: var(--er-sugg-nom, 14px); line-height: 1.05;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    espace-rhum .er-suggestion-tag {
      font-family: var(--er-font-body);
      font-size: 10px; color: var(--er-text-muted);
      margin-top: 3px;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    espace-rhum .er-suggestion-tag strong {
      color: var(--er-teal); font-weight: 700;
    }
     
    





    espace-rhum .er-suggestion-acts {
      position: relative; display: flex; flex-direction: column;
      align-items: center; gap: 6px;
    }
    




    espace-rhum .er-suggestion-item:focus-within{ z-index: 5; }@media (hover:hover) and (pointer:fine){espace-rhum .er-suggestion-item:hover{ z-index: 5; }}
    espace-rhum .er-suggestion-item:has(.er-sugg-why[aria-expanded="true"]) { z-index: 6; }
    



    espace-rhum .er-widget-suggestions:has(.er-sugg-why[aria-expanded="true"]),espace-rhum .er-widget-suggestions:focus-within{ position: relative; z-index: 30; }@media (hover:hover) and (pointer:fine){espace-rhum .er-widget-suggestions:has(.er-suggestion-item:hover){ position: relative; z-index: 30; }}
    

    espace-rhum .er-suggestion-item:last-child .er-sugg-why-pop {
      top: auto; bottom: calc(100% + 8px); transform: translateY(4px);
    }
    espace-rhum .er-suggestion-item:last-child .er-sugg-why:focus-visible + .er-sugg-why-pop,espace-rhum .er-suggestion-item:last-child .er-sugg-why[aria-expanded="true"] + .er-sugg-why-pop{
      transform: translateY(0);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-suggestion-item:last-child .er-sugg-why:hover + .er-sugg-why-pop{
      transform: translateY(0);
    }}
    espace-rhum .er-suggestion-item:last-child .er-sugg-why-pop::before {
      top: auto; bottom: -5px;
      border-left: 0; border-top: 0;
      border-right: 1px solid rgba(93, 191, 192, 0.35);
      border-bottom: 1px solid rgba(93, 191, 192, 0.35);
    }
    


















    espace-rhum .er-sugg-why {
      position: relative;
      width: 22px; height: 22px; padding: 0; flex: 0 0 auto;
      display: grid; place-items: center;
      border-radius: 50%; cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: transparent; color: rgba(238, 242, 248, 0.5);
      transition: color var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-sugg-why svg { width: 13px; height: 13px; display: block; }
    @media (max-width: 767px) {
      espace-rhum .er-sugg-why { width: 24px; height: 24px; }
      espace-rhum .er-sugg-why svg { width: 14px; height: 14px; }
      espace-rhum .er-sugg-why::after {
        content: ''; position: absolute; top: 50%; left: 50%;
        width: 44px; height: 44px; transform: translate(-50%, -50%);
      }
    }
    espace-rhum .er-sugg-why:focus-visible,espace-rhum .er-sugg-why[aria-expanded="true"]{
      color: var(--er-white); border-color: rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.06);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-sugg-why:hover{
      color: var(--er-white); border-color: rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.06);
    }}
    espace-rhum .er-sugg-why:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    espace-rhum .er-sugg-why-pop {
      position: absolute; right: 0; top: calc(100% + 8px); z-index: 40;
      width: max-content; max-width: min(250px, 66vw);
      padding: 10px 12px;
      background: var(--er-bg-elevated, #10294B);
      border: 1px solid rgba(93, 191, 192, 0.35);
      border-radius: 12px 3px 10px 3px;
      box-shadow: var(--er-shadow-md);
      font-family: var(--er-font-body); font-size: 11px; font-weight: 600;
      line-height: 1.45; color: var(--er-text-secondary);
      opacity: 0; visibility: hidden; transform: translateY(-4px);
      pointer-events: none;
      transition: opacity var(--er-dur-fast) var(--er-ease-smooth),
                  transform var(--er-dur-fast) var(--er-ease-smooth),
                  visibility var(--er-dur-fast);
    }
    espace-rhum .er-sugg-why-pop::before {
      content: ''; position: absolute; right: 8px; top: -5px;
      width: 9px; height: 9px; transform: rotate(45deg);
      background: var(--er-bg-elevated, #10294B);
      border-left: 1px solid rgba(93, 191, 192, 0.35);
      border-top: 1px solid rgba(93, 191, 192, 0.35);
    }
    

    @media (hover: hover) {
      espace-rhum .er-sugg-why:hover + .er-sugg-why-pop { opacity: 1; visibility: visible; transform: translateY(0); }
    }
    espace-rhum .er-sugg-why:focus-visible + .er-sugg-why-pop,
    espace-rhum .er-sugg-why[aria-expanded="true"] + .er-sugg-why-pop {
      opacity: 1; visibility: visible; transform: translateY(0);
    }
    espace-rhum .er-suggestion-add {
      width: 32px; height: 32px;
      padding: 0;
      background: var(--er-teal-soft);
      border: 1px solid rgba(93, 191, 192, 0.3);
      border-radius: 50%;
      color: var(--er-teal);
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all var(--er-dur-fast) var(--er-ease-smooth);
    }
    









    @media (hover:hover) and (pointer:fine){espace-rhum .er-suggestion-add:hover{
      background: var(--er-amber-bright);
      border-color: var(--er-amber-bright);
      color: #0B1B33;
      transform: scale(1.06);
    }}
    espace-rhum .er-suggestion-add svg {
      width: 15px; height: 15px;
      stroke: currentColor; fill: none; stroke-width: 2.2;
      stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-suggestion-add.is-favorited {
      background: var(--er-teal-soft);
      border-color: rgba(93, 191, 192, 0.55);
      color: var(--er-teal);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-suggestion-add.is-favorited:hover{
      background: rgba(230, 57, 70, 0.16);
      border-color: rgba(230, 57, 70, 0.6);
      color: var(--er-danger);
    }}

    espace-rhum .er-suggestions-empty {
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
      padding: 28px 20px;
      background: var(--er-bg-card);
      border: 1px dashed rgba(93, 191, 192, 0.25);
      border-radius: var(--er-radius-card);
      text-align: center;
    }
    espace-rhum .er-suggestions-empty-text {
      font-family: var(--er-font-body);
      font-size: 13px; color: var(--er-text-secondary);
      line-height: 1.5;
    }

     
    espace-rhum .er-widget--stats {
      grid-column: span 8;
      padding: 28px;
      position: relative;
      overflow: hidden;
    }
    

    espace-rhum .er-widget--stats > * { position: relative; z-index: 1; }

     
    espace-rhum .er-widget--flash-news {
      --er-motif-c: rgba(252, 241, 80, 0.08);
      --er-motif-size: 160% auto; --er-motif-pos: 120% -35%;
      --er-motif-fade: to left;
    }
    espace-rhum .er-widget--flash-news > * { position: relative; z-index: 1; }
    espace-rhum .er-widget--flash-news .er-flash-cover {
      position: absolute; inset: 0; z-index: 0;
      background-size: cover; background-position: center;
      border-radius: inherit; pointer-events: none;
    }
    espace-rhum .er-flash-clickable { cursor: pointer; transition: transform var(--er-dur-fast) var(--er-ease-smooth), box-shadow var(--er-dur-fast) var(--er-ease-smooth); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-flash-clickable:hover{ transform: translateY(-2px); box-shadow: var(--er-shadow-md); }}
    espace-rhum .er-flash-clickable:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

     
    espace-rhum .er-widget--leaderboard-teaser > * { position: relative; z-index: 1; }
    espace-rhum .er-stats-heading {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 36px; text-transform: uppercase;
      line-height: 1;
      letter-spacing: -0.01em;
      margin: 0 0 4px;
    }
    



    espace-rhum .er-stats-grid {
      display: grid;
      grid-template-columns: repeat(var(--er-stats-n, 4), 1fr);
      gap: 20px;
      margin-top: 20px;
    }
    espace-rhum .er-stat-block {
      text-align: center;
      padding: 16px 8px;
      border-right: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-stat-block:last-child { border-right: none; }
    espace-rhum .er-stat-block-num {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 52px; color: var(--er-teal);
      line-height: 0.95;
    }
    espace-rhum .er-stat-block-num span { font-size: 32px; }
    espace-rhum .er-stat-block-label {
      font-family: var(--er-font-body);
      font-size: 11px; font-weight: 800;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--er-text-label);
      margin-top: 6px;
    }
    espace-rhum .er-stat-block-sub {
      font-family: var(--er-font-body);
      font-size: 11px; font-style: italic;
      color: var(--er-text-muted);
      margin-top: 4px;
      line-height: 1.3;
    }
    espace-rhum .er-stats-updated {
      display: inline-flex; align-items: center; gap: 6px;
      margin-top: 16px; padding: 5px 2px; max-width: 100%;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 600;
      color: var(--er-text-muted); letter-spacing: 0.01em;
      position: relative; cursor: help;
    }
    espace-rhum .er-stats-updated:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 3px; border-radius: 6px; }
    espace-rhum .er-stats-updated-ico { width: 13px; height: 13px; flex-shrink: 0; stroke: var(--er-text-muted); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; opacity: 0.85; }
    espace-rhum .er-stats-updated b { color: var(--er-text-secondary); font-weight: 700; }
    espace-rhum .er-stats-tip {
      position: absolute; bottom: calc(100% + 8px); left: 0; z-index: 40; width: 244px; max-width: 78vw;
      padding: 11px 13px; background: var(--er-bg-card); border: 1px solid var(--er-border-soft);
      border-radius: 12px 3px 10px 3px; box-shadow: var(--er-shadow-md);
      font-size: 11px; font-weight: 500; line-height: 1.5; color: var(--er-text-secondary); text-align: left;
      opacity: 0; visibility: hidden; transform: translateY(5px); pointer-events: none;
      transition: opacity var(--er-dur-fast) var(--er-ease-smooth), transform var(--er-dur-fast) var(--er-ease-smooth), visibility var(--er-dur-fast);
    }
    espace-rhum .er-stats-tip strong { display: block; color: var(--er-teal); font-size: 11px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .05em; font-weight: 800; }
    espace-rhum .er-stats-updated:focus-visible .er-stats-tip,espace-rhum .er-stats-updated:focus-within .er-stats-tip{ opacity: 1; visibility: visible; transform: translateY(0); }@media (hover:hover) and (pointer:fine){espace-rhum .er-stats-updated:hover .er-stats-tip{ opacity: 1; visibility: visible; transform: translateY(0); }}

     
    espace-rhum .er-widget--leaderboard-teaser {
      grid-column: span 4;
      background: linear-gradient(135deg, rgba(245, 190, 65, 0.15) 0%, var(--er-bg-card) 70%);
      border-color: rgba(245, 190, 65, 0.3);
      padding: 28px 24px;
      text-align: center;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
      



      --er-motif-c: rgba(241, 159, 57, 0.18);
      --er-motif-size: 140% auto; --er-motif-pos: left bottom;
      --er-motif-fondu: linear-gradient(to top right, #000 40%, transparent 92%);
    }
    espace-rhum .er-leaderboard-icon {
      width: 56px; height: 56px;
      border-radius: 50%;
      background: rgba(245, 190, 65, 0.18);
      border: 1.5px solid var(--er-amber-bright);
      display: flex; align-items: center; justify-content: center;
    }
    espace-rhum .er-leaderboard-icon svg {
      width: 28px; height: 28px;
      stroke: var(--er-amber);
      fill: none; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-leaderboard-teaser-title {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 22px; text-transform: uppercase;
      line-height: 1.05;
      color: var(--er-amber-bright);
      margin: 0;
    }
    espace-rhum .er-leaderboard-teaser-text {
      font-family: var(--er-font-body);
      font-size: 12px; color: var(--er-text-secondary);
      line-height: 1.5;
      margin: 0;
    }
    espace-rhum .er-leaderboard-teaser-date {
      font-family: var(--er-font-body);
      font-size: 10px; font-weight: 800;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--er-amber);
      margin-top: 4px;
    }

    





















    espace-rhum .er-dashboard--top50 .er-widget--stats {
      grid-column: span 12; padding: 22px 28px;
      display: grid; grid-template-columns: minmax(220px, 3fr) minmax(0, 9fr); grid-template-rows: auto auto auto;
      column-gap: 32px; row-gap: 0; align-items: center;
    }
    espace-rhum .er-dashboard--top50 .er-widget--stats > .er-widget-label { grid-column: 1; grid-row: 1; }
    espace-rhum .er-dashboard--top50 .er-widget--stats > .er-stats-heading { grid-column: 1; grid-row: 2; margin: 4px 0 0; }
    espace-rhum .er-dashboard--top50 .er-widget--stats > .er-section-sub { grid-column: 1; grid-row: 3; margin: 4px 0 0; }
    espace-rhum .er-dashboard--top50 .er-widget--stats > .er-stats-grid { grid-column: 2; grid-row: 1 / span 3; margin: 0; gap: 12px; }
    espace-rhum .er-dashboard--top50 .er-widget--stats > .er-stats-updated { grid-column: 1 / -1; grid-row: 4; margin-top: 10px; }
    espace-rhum .er-dashboard--top50 .er-stat-block { padding: 6px 8px; }
    espace-rhum .er-dashboard--top50 .er-stat-block-num { font-size: 40px; }

    espace-rhum .er-widget--top50 {
      grid-column: span 12; padding: 28px 30px 16px; overflow: visible;
      display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); grid-template-rows: auto auto;
      column-gap: 36px; row-gap: 16px;
      background:
        radial-gradient(55% 80% at 0% 0%, rgba(255, 246, 222, .75) 0%, rgba(255, 246, 222, 0) 62%),
        radial-gradient(50% 70% at 100% 100%, rgba(226, 150, 60, .45) 0%, rgba(226, 150, 60, 0) 65%),
        linear-gradient(135deg, #F4CD82 0%, #EFB85E 50%, #E8A54B 100%);
      border-color: transparent;
      box-shadow: 0 30px 60px -30px rgba(240, 180, 90, .5);
      --er-motif-c: rgba(120, 60, 10, .12); --er-motif-size: 120% auto; --er-motif-pos: left bottom;
      --er-motif-fondu: linear-gradient(to top right, #000 30%, transparent 88%);
      --t50-encre: #14203F; --t50-encre-2: rgba(20, 32, 63, .74); --t50-encre-3: rgba(20, 32, 63, .5);
      --t50-filet: rgba(20, 32, 63, .14);
    }
    espace-rhum .er-widget--top50 > * { position: relative; z-index: 1; }
    espace-rhum .er-top50-gauche { position: relative; display: flex; flex-direction: column; gap: 14px; min-width: 0; }
    espace-rhum .er-top50-droite { display: flex; flex-direction: column; gap: 12px; min-width: 0; padding-right: 28px; }
    espace-rhum .er-top50-pied { grid-column: 1 / -1; }
    

    espace-rhum .er-top50-tymal {
      position: absolute; top: -26px; left: calc(100% - 128px); z-index: 0; width: 164px; height: 164px; object-fit: contain;
      transform: rotate(-6deg); opacity: .92; filter: drop-shadow(0 10px 16px rgba(0, 0, 0, .28)); pointer-events: none;
      animation: erTop50Tymal .8s .2s cubic-bezier(.34, 1.56, .64, 1) both;
    }
    @keyframes erTop50Tymal { from { opacity: 0; transform: rotate(-14deg) translate(10px, -14px) scale(.85); } to { opacity: .92; transform: rotate(-6deg); } }
    espace-rhum .er-top50-tete { position: relative; z-index: 1; }
    espace-rhum .er-top50-kick {
      display: flex; align-items: center; gap: 8px; margin: 0 0 6px;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; color: var(--t50-encre-2);
    }
    espace-rhum .er-top50-kick svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    espace-rhum .er-top50-titre {
      margin: 0; font-family: var(--er-font-display); font-style: italic; font-size: 32px; line-height: 1; text-transform: uppercase; color: var(--t50-encre);
    }
    espace-rhum .er-top50-titre em { font-style: inherit; color: var(--t50-encre); }
    espace-rhum .er-top50-sous { margin: 8px 0 0; font-family: var(--er-font-body); font-size: 12px; line-height: 1.5; color: var(--t50-encre-2); max-width: 38ch; }

     
    espace-rhum .er-top50-lot {
      display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px;
      margin-top: 6px; padding: 12px 0; border: 0; border-top: 1px solid var(--t50-filet); border-bottom: 1px solid var(--t50-filet);
      background: transparent; text-align: left; cursor: pointer; color: inherit; font: inherit;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top50-lot:hover .er-top50-lot-fleche{ transform: translateX(3px); }}
    espace-rhum .er-top50-coffre { width: 60px; height: 60px; flex: none; filter: drop-shadow(0 8px 12px rgba(0, 0, 0, .25)); }
    espace-rhum .er-top50-coffre svg { width: 100%; height: 100%; overflow: visible; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top50-lot:hover .er-top50-coffre{ animation: erTop50Coffre .6s ease; }}
    @keyframes erTop50Coffre { 0%, 100% { transform: rotate(0); } 30% { transform: rotate(-6deg); } 60% { transform: rotate(5deg); } }
    espace-rhum .er-top50-lot-txt { min-width: 0; font-family: var(--er-font-body); }
    espace-rhum .er-top50-lot-txt b { display: block; font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 18px; line-height: 1.05; text-transform: uppercase; color: var(--t50-encre); }
    espace-rhum .er-top50-lot-txt span { display: block; font-size: 11.5px; line-height: 1.45; color: var(--t50-encre-2); margin-top: 4px; }
    espace-rhum .er-top50-lot-fleche { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; background: rgba(20, 32, 63, .12); transition: transform .15s ease; }
    espace-rhum .er-top50-lot-fleche svg { width: 14px; height: 14px; stroke: var(--t50-encre); fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }

     
    espace-rhum .er-top50-moi { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px; padding: 4px 0 2px; }
    espace-rhum .er-top50-moi-rang { font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 40px; line-height: 1; color: var(--t50-encre); }
    espace-rhum .er-top50-moi-rang sup { font-size: .45em; vertical-align: .75em; }
    espace-rhum .er-top50-moi-rang small { font-size: .5em; vertical-align: .55em; }
    espace-rhum .er-top50-moi-sur { font-family: var(--er-font-body); font-style: normal; font-weight: 700; font-size: 10px; letter-spacing: .06em; color: var(--t50-encre-3); margin-left: 4px; vertical-align: baseline; }
    espace-rhum .er-top50-moi-rang--vide { font-size: 22px; }
    espace-rhum .er-top50-moi-txt { min-width: 0; font-family: var(--er-font-body); }
    espace-rhum .er-top50-moi-txt b { display: block; font-size: 10px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: var(--t50-encre); }
    espace-rhum .er-top50-moi-txt span { display: block; font-size: 11.5px; color: var(--t50-encre-2); margin-top: 2px; }
    espace-rhum .er-top50-pts { font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 18px; line-height: 1; color: var(--t50-encre); white-space: nowrap; }
    espace-rhum .er-top50-pts small { font-family: var(--er-font-body); font-style: normal; font-weight: 700; font-size: 8.5px; letter-spacing: .1em; color: var(--t50-encre-3); margin-left: 2px; }
    espace-rhum .er-top50-tout {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px; align-self: stretch;
      min-height: 46px; padding: 0 18px; border: 0; border-radius: 3px 14px 3px 14px; cursor: pointer;
      background: #14203F; color: #F4CD82;
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
      box-shadow: 0 10px 24px -12px rgba(0, 0, 0, .5); transition: transform .15s ease, filter .15s ease;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top50-tout:hover{ transform: translateY(-1px); filter: brightness(1.08); }}
    espace-rhum .er-top50-tout svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
    espace-rhum .er-top50-liens { display: flex; justify-content: center; flex-wrap: wrap; gap: 2px 18px; margin-top: -6px; }
    espace-rhum .er-top50-lien {
      display: inline-flex; align-items: center; gap: 6px; padding: 6px 4px; border: 0; background: transparent; cursor: pointer;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: var(--t50-encre-3);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top50-lien:hover{ color: var(--t50-encre); }}
    espace-rhum .er-top50-lien svg { width: 13px; height: 13px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

     
    espace-rhum .er-top50-pied {
      display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 6px 14px; margin: 0;
      padding-top: 12px; border-top: 1px solid var(--t50-filet);
      font-family: var(--er-font-body); font-size: 10.5px; color: var(--t50-encre-3);
    }
    espace-rhum .er-top50-pied svg { width: 12px; height: 12px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    espace-rhum .er-top50-pied b { font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: var(--t50-encre); }
    espace-rhum .er-top50-chrono { display: inline-flex; gap: 8px; font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 13px; color: var(--t50-encre); font-variant-numeric: tabular-nums; }
    espace-rhum .er-top50-chrono span small { font-family: var(--er-font-body); font-style: normal; font-weight: 700; font-size: 8.5px; letter-spacing: .08em; color: var(--t50-encre-3); margin-left: 2px; }

    


    espace-rhum .er-top50-podium { position: relative; display: grid; grid-template-columns: 1fr 1.15fr 1fr; align-items: end; gap: 8px; margin-top: 34px; }
    espace-rhum .er-top50-podium--2 { grid-template-columns: 1fr 1.15fr; }
    espace-rhum .er-top50-podium--1 { grid-template-columns: 1fr; max-width: 240px; }
    espace-rhum .er-top50-marche {
      position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px;
      padding: 14px 8px 12px; border-radius: 14px 14px 4px 4px; text-align: center;
      background: linear-gradient(180deg, rgba(20, 32, 63, .90), rgba(20, 32, 63, .78));
      box-shadow: 0 18px 30px -18px rgba(0, 0, 0, .6);
      animation: erTop50Monte .6s cubic-bezier(.16, 1, .3, 1) both;
    }
    espace-rhum .er-top50-marche > * { position: relative; z-index: 1; }
    espace-rhum .er-top50-pos-2 { order: 1; animation-delay: .15s; }
    espace-rhum .er-top50-pos-1 { order: 2; padding-top: 16px; padding-bottom: 22px; animation-delay: 0s; background: linear-gradient(180deg, #1A2B55, #14203F); box-shadow: 0 22px 40px -18px rgba(0, 0, 0, .7); }
    espace-rhum .er-top50-pos-3 { order: 3; animation-delay: .3s; }
    espace-rhum .er-top50-pos-1::before {
      content: ''; position: absolute; left: 50%; top: 38px; width: 150px; height: 150px; margin-left: -75px; margin-top: -75px; border-radius: 50%; z-index: 0;
      background: radial-gradient(closest-side, rgba(245, 176, 65, .30), rgba(245, 176, 65, .06) 55%, rgba(245, 176, 65, 0) 100%); pointer-events: none;
    }
    @keyframes erTop50Monte { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    


    espace-rhum .er-top50-medaille { display: block; width: 50px; height: 64px; margin: -30px 0 -2px; filter: drop-shadow(0 8px 10px rgba(0, 0, 0, .45)); transform-origin: 50% 0; animation: erTop50Balance 4s ease-in-out infinite; }
    espace-rhum .er-top50-medaille svg { width: 100%; height: 100%; overflow: visible; }
    espace-rhum .er-top50-medaille text { font-family: var(--er-font-display); font-style: italic; font-weight: 900; }
    espace-rhum .er-top50-pos-1 .er-top50-medaille { width: 60px; height: 77px; margin-top: -38px; }
    espace-rhum .er-top50-pos-2 .er-top50-medaille { animation-delay: -1.3s; }
    espace-rhum .er-top50-pos-3 .er-top50-medaille { animation-delay: -2.6s; }
    @keyframes erTop50Balance { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
    espace-rhum .er-top50-nom { max-width: 100%; font-family: var(--er-font-body); font-size: 12px; font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    espace-rhum .er-top50-pos-1 .er-top50-nom { font-size: 13px; }
    espace-rhum .er-top50-palier { font-family: var(--er-font-body); font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: rgba(255, 255, 255, .6); margin-top: -3px; }
    espace-rhum .er-top50-marche .er-top50-pts { color: var(--er-amber-bright); }
    espace-rhum .er-top50-marche .er-top50-pts small { color: rgba(255, 255, 255, .5); }
    espace-rhum .er-top50-badges { display: inline-flex; align-items: center; gap: 4px; font-family: var(--er-font-body); font-size: 10.5px; font-weight: 700; color: var(--t50-encre-2); white-space: nowrap; }
    espace-rhum .er-top50-marche .er-top50-badges { color: rgba(255, 255, 255, .75); }
    espace-rhum .er-top50-badges svg { width: 12px; height: 12px; stroke: var(--er-teal); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    espace-rhum .er-top50-suite .er-top50-badges svg { stroke: #14203F; }
    espace-rhum .er-top50-etoile { position: absolute; z-index: 2; font-size: 12px; line-height: 1; color: #fff; opacity: 0; animation: erTop50Etoile 3.2s ease-in-out infinite; pointer-events: none; }
    espace-rhum .er-top50-etoile--a { left: 6%; top: 14px; animation-delay: .4s; }
    espace-rhum .er-top50-etoile--b { right: 8%; top: 38px; font-size: 9px; animation-delay: 1.6s; }
    espace-rhum .er-top50-etoile--c { left: 31%; top: 4px; font-size: 8px; animation-delay: 2.4s; }
    @keyframes erTop50Etoile { 0%, 100% { opacity: 0; transform: scale(.6) rotate(0); } 50% { opacity: 1; transform: scale(1) rotate(45deg); } }

     
    espace-rhum .er-top50-suite { list-style: none; margin: 0; padding: 0; }
    espace-rhum .er-top50-l { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto auto; align-items: center; gap: 10px; padding: 7px 4px; border-top: 1px solid var(--t50-filet); font-family: var(--er-font-body); }
    espace-rhum .er-top50-l:first-child { border-top: 0; }
    espace-rhum .er-top50-l-rang { font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 18px; line-height: 1; color: transparent; -webkit-text-stroke: 1px var(--t50-encre-2); text-align: center; }
    espace-rhum .er-top50-l-nom { min-width: 0; font-size: 12px; font-weight: 700; color: var(--t50-encre); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    espace-rhum .er-top50-l-nom small { display: block; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--t50-encre-3); margin-top: 1px; }
    espace-rhum .er-top50-l-pts { font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 13px; color: var(--t50-encre); white-space: nowrap; min-width: 54px; text-align: right; }
    espace-rhum .er-top50-l-pts small { font-family: var(--er-font-body); font-style: normal; font-weight: 700; font-size: 8.5px; letter-spacing: .08em; color: var(--t50-encre-3); margin-left: 3px; }
    espace-rhum .er-top50-l.est-moi .er-top50-l-rang { color: var(--t50-encre); -webkit-text-stroke: 0; }
    espace-rhum .er-top50-l.est-moi .er-top50-l-nom small::after { content: ' · ' attr(data-toi); }

     
    espace-rhum .er-top50-fen { position: fixed; inset: 0; z-index: 10002; display: grid; place-items: center; padding: 20px; opacity: 0; visibility: hidden; transition: opacity .2s, visibility 0s .2s; }
    espace-rhum .er-top50-fen[data-open="true"] { opacity: 1; visibility: visible; transition: opacity .25s, visibility 0s; }
    espace-rhum .er-top50-fen-fond { position: absolute; inset: 0; background: rgba(5, 18, 43, .72); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
    espace-rhum .er-top50-fen-panneau {
      position: relative; width: 100%; max-width: 720px; max-height: min(86vh, 900px); display: flex; flex-direction: column;
      background: linear-gradient(145deg, var(--er-bg-card) 0%, #0a1a35 100%);
      border: 1px solid transparent; border-radius: 24px 3px 18px 3px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, .5); transform: scale(.95); transition: transform .3s cubic-bezier(.16, 1, .3, 1); overflow: hidden;
    }
    espace-rhum .er-top50-fen[data-open="true"] .er-top50-fen-panneau { transform: scale(1); }
    espace-rhum .er-top50-fen-tete {
      display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 26px 28px 22px;
      background: linear-gradient(135deg, #F4CD82 0%, #EFB85E 50%, #E8A54B 100%);
    }
    espace-rhum .er-top50-fen-tete .er-top50-kick { color: rgba(20, 32, 63, .72); }
    espace-rhum .er-top50-fen-titre { margin: 0; font-family: var(--er-font-display); font-style: italic; font-size: 26px; line-height: 1; text-transform: uppercase; color: #14203F; }
    espace-rhum .er-top50-fen-titre em { font-style: inherit; color: #fff; }
    espace-rhum .er-top50-fen-sous { margin: 6px 0 0; font-family: var(--er-font-body); font-size: 12px; line-height: 1.5; color: rgba(20, 32, 63, .72); }
    espace-rhum .er-top50-fen-x { flex: none; width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(20, 32, 63, .35); background: transparent; color: #14203F; display: grid; place-items: center; cursor: pointer; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-top50-fen-x:hover{ background: #14203F; color: #F4CD82; border-color: #14203F; }}
    espace-rhum .er-top50-fen-x svg { width: 16px; height: 16px; }
    espace-rhum .er-top50-fen-moi {
      margin: 14px 28px 12px; padding: 10px 14px; border-radius: 12px;
      background: linear-gradient(115deg, var(--er-navy-900, #0A1A35) 0%, rgba(10, 26, 53, .72) 100%);
      box-shadow: inset 0 0 0 1px rgba(93, 191, 192, .45);
      --t50-encre: #fff; --t50-encre-2: rgba(255, 255, 255, .7); --t50-encre-3: rgba(255, 255, 255, .5);
    }
    espace-rhum .er-top50-fen-moi .er-top50-moi-rang { font-size: 28px; color: var(--er-teal); }
    espace-rhum .er-top50-fen-moi .er-top50-moi-txt b { color: var(--er-teal); }
    espace-rhum .er-top50-fen-moi .er-top50-pts { color: var(--er-amber-bright); }
    espace-rhum .er-top50-fen-corps { overflow: auto; padding: 0 28px 24px; scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, .2) transparent; }
    espace-rhum .er-top50-tab { width: 100%; border-collapse: separate; border-spacing: 0; font-family: var(--er-font-body); }
    espace-rhum .er-top50-tab thead th { position: sticky; top: 0; z-index: 2; padding: 10px 10px 9px; text-align: left; font-size: 9.5px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; color: var(--er-amber); background: #0d1b38; border-bottom: 1px solid rgba(245, 176, 65, .35); }
    espace-rhum .er-top50-tab th.num, espace-rhum .er-top50-tab td.num { text-align: right; }
    espace-rhum .er-top50-tab td { padding: 9px 10px; border-bottom: 1px solid rgba(255, 255, 255, .07); font-size: 12.5px; color: var(--er-text-primary); vertical-align: middle; }
    espace-rhum .er-top50-tab tr:nth-child(even) td { background: rgba(255, 255, 255, .025); }
    espace-rhum .er-top50-tab td.rang { width: 52px; font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 15px; color: rgba(255, 255, 255, .7); }
    espace-rhum .er-top50-tab tr.m1 td.rang { color: #F5B041; }
    espace-rhum .er-top50-tab tr.m2 td.rang { color: #C8D2DC; }
    espace-rhum .er-top50-tab tr.m3 td.rang { color: #C08457; }
    espace-rhum .er-top50-tab td.rang i { display: inline-block; margin-left: 5px; width: 14px; height: 14px; border-radius: 50%; background: rgba(255, 255, 255, .14); font-style: normal; font-family: var(--er-font-body); font-size: 9px; font-weight: 800; line-height: 14px; text-align: center; color: var(--er-text-secondary); vertical-align: 2px; }
    espace-rhum .er-top50-tab td.nom { font-weight: 600; }
    espace-rhum .er-top50-tab td.palier { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--er-text-muted); }
    espace-rhum .er-top50-tab td.pts { font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 14px; white-space: nowrap; }
    espace-rhum .er-top50-tab td.pts small { font-family: var(--er-font-body); font-style: normal; font-weight: 700; font-size: 8.5px; letter-spacing: .08em; color: var(--er-text-muted); margin-left: 3px; }
    espace-rhum .er-top50-tab tr.est-moi td { background: linear-gradient(90deg, rgba(93, 191, 192, .16), rgba(93, 191, 192, .04)); color: var(--er-teal); }
    espace-rhum .er-top50-tab tr.est-moi td.nom::after { content: ' · ' attr(data-toi); font-size: 10px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
    espace-rhum .er-top50-fen-note { margin: 14px 0 0; font-family: var(--er-font-body); font-size: 10.5px; line-height: 1.5; color: var(--er-text-muted); }
     
    espace-rhum .er-top50-fen--lots .er-top50-fen-panneau {
      background:
        radial-gradient(55% 80% at 0% 0%, rgba(255, 246, 222, .75) 0%, rgba(255, 246, 222, 0) 62%),
        radial-gradient(50% 70% at 100% 100%, rgba(226, 150, 60, .45) 0%, rgba(226, 150, 60, 0) 65%),
        linear-gradient(135deg, #F4CD82 0%, #EFB85E 50%, #E8A54B 100%);
      box-shadow: 0 30px 70px rgba(0, 0, 0, .55);
    }
    espace-rhum .er-top50-fen--lots .er-top50-fen-tete { background: transparent; padding-bottom: 14px; }
    espace-rhum .er-top50-lots { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 4px 28px 8px; }
    espace-rhum .er-top50-lots--2 { grid-template-columns: repeat(2, 1fr); }
    espace-rhum .er-top50-lots--1 { grid-template-columns: 1fr; max-width: 320px; margin: 0 auto; }
    espace-rhum .er-top50-lotcarte {
      position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 0 14px 18px; border-radius: 16px; text-align: center; overflow: hidden;
      background: linear-gradient(180deg, #1A2B55, #14203F); box-shadow: 0 22px 40px -22px rgba(0, 0, 0, .6);
      animation: erTop50Monte .5s cubic-bezier(.16, 1, .3, 1) both;
    }
    espace-rhum .er-top50-lotcarte:nth-child(2) { animation-delay: .1s; }
    espace-rhum .er-top50-lotcarte:nth-child(3) { animation-delay: .2s; }
    espace-rhum .er-top50-lotcarte--or { --metal: #F5B041; background: linear-gradient(180deg, #203568, #14203F); }
    espace-rhum .er-top50-lotcarte--argent { --metal: #C8D2DC; }
    espace-rhum .er-top50-lotcarte--bronze { --metal: #C08457; }
    espace-rhum .er-top50-lotcarte-rang {
      align-self: stretch; padding: 8px 0 7px; font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; color: #10162F;
      background: linear-gradient(90deg, color-mix(in srgb, var(--metal) 70%, #fff), var(--metal));
    }
    espace-rhum .er-top50-lotcarte-visuel { width: 104px; height: 104px; margin-top: 8px; border-radius: 50%; display: grid; place-items: center; background: radial-gradient(closest-side, rgba(255, 255, 255, .12), rgba(255, 255, 255, 0)); }
    espace-rhum .er-top50-lotcarte-visuel img { width: 96px; height: 96px; object-fit: contain; filter: drop-shadow(0 10px 18px rgba(0, 0, 0, .6)); }
    espace-rhum .er-top50-lotcarte-visuel svg { width: 64px; height: 64px; stroke: var(--metal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 8px 14px rgba(0, 0, 0, .5)); }
    espace-rhum .er-top50-lotcarte-nom { margin: 2px 0 0; font-family: var(--er-font-display); font-style: italic; font-weight: 900; font-size: 17px; line-height: 1.05; text-transform: uppercase; color: var(--er-text-primary); }
    espace-rhum .er-top50-lotcarte--or .er-top50-lotcarte-nom { color: var(--er-amber-bright); }
    espace-rhum .er-top50-lotcarte-txt { margin: 0; font-family: var(--er-font-body); font-size: 11px; line-height: 1.45; color: var(--er-text-secondary); }
    espace-rhum .er-top50-lots-note { margin: 10px 28px 22px; font-family: var(--er-font-body); font-size: 10.5px; line-height: 1.5; color: rgba(20, 32, 63, .62); text-align: center; }
     
    espace-rhum .er-top50-reglement { font-family: var(--er-font-body); font-size: 13px; line-height: 1.6; color: var(--er-text-secondary); padding-top: 14px; }
    espace-rhum .er-top50-reglement h1, espace-rhum .er-top50-reglement h2, espace-rhum .er-top50-reglement h3 { font-family: var(--er-font-display); font-style: italic; text-transform: uppercase; color: var(--er-text-primary); margin: 18px 0 6px; line-height: 1.1; }
    espace-rhum .er-top50-reglement h2 { font-size: 18px; }
    espace-rhum .er-top50-reglement h3 { font-size: 15px; }
    espace-rhum .er-top50-reglement p { margin: 0 0 10px; }
    espace-rhum .er-top50-reglement ul, espace-rhum .er-top50-reglement ol { margin: 0 0 10px; padding-left: 20px; }
    espace-rhum .er-top50-reglement a { color: var(--er-teal); }
    espace-rhum .er-top50-reglement strong { color: var(--er-text-primary); }

    @media (max-width: 1023px) {
      espace-rhum .er-dashboard--top50 .er-widget--stats { grid-template-columns: 1fr; }
      espace-rhum .er-dashboard--top50 .er-widget--stats > .er-stats-grid { grid-column: 1; grid-row: 4; margin-top: 14px; }
      espace-rhum .er-dashboard--top50 .er-widget--stats > .er-stats-updated { grid-row: 5; }
      espace-rhum .er-widget--top50 { grid-template-columns: 1fr; padding: 22px 20px 14px; }
      espace-rhum .er-top50-gauche { display: contents; }
      espace-rhum .er-top50-droite { padding-right: 0; }
      espace-rhum .er-top50-tymal { left: auto; right: -10px; top: -30px; width: 120px; height: 120px; }
      espace-rhum .er-top50-tete { order: 1; } espace-rhum .er-top50-lot { order: 2; } espace-rhum .er-top50-droite { order: 3; }
      espace-rhum .er-top50-moi { order: 4; } espace-rhum .er-top50-tout { order: 5; } espace-rhum .er-top50-liens { order: 6; } espace-rhum .er-top50-pied { order: 7; }
    }
    @media (max-width: 640px) {
      espace-rhum .er-top50-fen { padding: 0; align-items: end; }
      espace-rhum .er-top50-fen-panneau { max-height: 92vh; border-radius: 20px 20px 0 0; }
      espace-rhum .er-top50-fen-tete, espace-rhum .er-top50-fen-corps { padding-left: 18px; padding-right: 18px; }
      espace-rhum .er-top50-fen-moi { margin-left: 18px; margin-right: 18px; }
      espace-rhum .er-top50-tab th.palier, espace-rhum .er-top50-tab td.palier { display: none; }
      espace-rhum .er-top50-lots { grid-template-columns: 1fr; padding-left: 18px; padding-right: 18px; }
      espace-rhum .er-top50-lotcarte { flex-direction: row; text-align: left; padding: 0 14px 0 0; gap: 12px; }
      espace-rhum .er-top50-lotcarte-rang { align-self: auto; writing-mode: vertical-rl; transform: rotate(180deg); padding: 14px 7px; }
      espace-rhum .er-top50-lotcarte-visuel { width: 72px; height: 72px; margin: 8px 0; }
      espace-rhum .er-top50-lotcarte-visuel img { width: 64px; height: 64px; }
      espace-rhum .er-top50-lotcarte-visuel svg { width: 44px; height: 44px; }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-top50-etoile, espace-rhum .er-top50-tymal, espace-rhum .er-top50-marche, espace-rhum .er-top50-lotcarte, espace-rhum .er-top50-coffre, espace-rhum .er-top50-medaille { animation: none !important; }
      espace-rhum .er-top50-etoile { opacity: .7; }
    }

     
    espace-rhum .er-mobile-shell { display: none; }

    espace-rhum .er-mobile-topbar {
      position: sticky; top: 0; z-index: 30;
      display: none; align-items: center; justify-content: space-between;
      gap: 12px; padding: 12px 16px;
      background: rgba(22, 53, 93, 0.92);
      -webkit-backdrop-filter: blur(16px);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-mobile-topbar-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
    











    espace-rhum .er-mobile-topbar-left {
      opacity: 0; visibility: hidden; transform: translateX(-28px);
      transition: opacity 0.25s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0s linear 0.45s;
    }
    espace-rhum .er-mobile-topbar[data-identite="visible"] .er-mobile-topbar-left {
      opacity: 1; visibility: visible; transform: none;
      transition: opacity 0.25s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0s;
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-mobile-topbar-left,
      espace-rhum .er-mobile-topbar[data-identite="visible"] .er-mobile-topbar-left { transition: none; transform: none; }
    }
    


    espace-rhum .er-mobile-tymal { position: relative; flex: none; width: 50px; height: 54px; margin: -2px 2px -10px -6px; align-self: flex-end; }
    espace-rhum .er-mobile-tymal img { display: block; width: 100%; height: 100%; object-fit: contain; object-position: 50% 100%; filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.45)); }
    espace-rhum .er-mobile-topbar-info { display: flex; flex-direction: column; line-height: 1.1; min-width: 0; }
    espace-rhum .er-mobile-topbar-name {
      font-family: var(--er-font-body); font-weight: 800; font-size: 13px;
      text-transform: uppercase; letter-spacing: 0.04em; line-height: 1.25;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    espace-rhum .er-mobile-topbar-rang {
      

      margin-top: 1px; font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.06em; line-height: 1.3; text-transform: uppercase; color: var(--er-amber-bright);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    espace-rhum .er-mobile-topbar-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    espace-rhum .er-mobile-badge-counter {
      display: flex; align-items: center; gap: 4px;
      padding: 4px 10px;
      background: var(--er-teal-soft);
      border: 1px solid rgba(93, 191, 192, 0.25);
      border-radius: var(--er-radius-full);
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      color: var(--er-teal);
    }
    espace-rhum .er-mobile-badge-counter svg {
      width: 10px; height: 10px; stroke: var(--er-teal); fill: none; stroke-width: 2;
    }
    espace-rhum .er-mobile-icon-btn {
      width: 40px; height: 40px; padding: 0;
      background: var(--er-teal-soft);
      border: 1px solid rgba(93, 191, 192, 0.32);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: var(--er-teal); flex-shrink: 0;
      transition: background var(--er-dur-fast) var(--er-ease-smooth), transform var(--er-dur-fast);
    }
    espace-rhum .er-mobile-icon-btn:active { transform: scale(0.93); }
    espace-rhum .er-mobile-icon-btn svg { width: 19px; height: 19px; stroke: var(--er-teal); fill: none; stroke-width: 2; }
     
    espace-rhum .er-mobile-menu-btn { background: var(--er-teal); border-color: var(--er-teal); }
    espace-rhum .er-mobile-menu-btn svg { stroke: var(--er-bg-base); }

    espace-rhum .er-mobile-branding { padding: 28px 16px 16px; text-align: center; }
    espace-rhum .er-mobile-branding .er-branding-label {
      justify-content: center;
      margin-bottom: 8px;
      max-width: 260px;
      margin-inline: auto;
    }
     
    espace-rhum .er-mobile-branding .er-branding-label-sep { display: none; }
    espace-rhum .er-mobile-branding-title {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 32px; text-transform: uppercase; line-height: 0.95;
      letter-spacing: -0.01em;
      background: linear-gradient(135deg, var(--er-white) 0%, var(--er-teal) 100%);
      -webkit-background-clip: text; background-clip: text;
      color: transparent;
    }

    


    espace-rhum .er-mobile-id {
      display: grid; grid-template-columns: 108px minmax(0, 1fr); align-items: center; gap: 8px;
      margin: 14px auto 0; max-width: 320px; text-align: left;
    }
    espace-rhum .er-mobile-id-tymal { position: relative; width: 108px; height: 104px; }
    espace-rhum .er-mobile-id-tymal img { position: relative; z-index: 1; display: block; width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 10px 12px rgba(0, 0, 0, 0.5)); }
    espace-rhum .er-mobile-id-halo { position: absolute; inset: 6%; border-radius: 50%; background: radial-gradient(closest-side, rgba(252, 241, 80, 0.2), rgba(93, 191, 192, 0.1) 58%, rgba(93, 191, 192, 0)); }
    espace-rhum .er-mobile-id-bonjour { margin: 0; font-family: var(--er-font-body); font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--er-teal); }
    espace-rhum .er-mobile-id-nom { margin: 2px 0 7px; font-family: var(--er-font-display); font-style: italic; font-size: 25px; line-height: 1; text-transform: uppercase; color: var(--er-white); overflow-wrap: anywhere; }
    espace-rhum .er-mobile-id-rang {
      display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
      padding: 0 0 3px; border: 0; cursor: pointer;
      font-family: var(--er-font-display); font-style: italic; font-size: 16px; line-height: 1;
      text-transform: uppercase; color: var(--er-amber-bright);
      background: linear-gradient(90deg, rgba(252, 241, 80, 0.45) 50%, transparent 50%) 0 100% / 5px 1.5px repeat-x;
    }
    espace-rhum .er-mobile-id-rang svg { width: 12px; height: 12px; flex: none; stroke-width: 2.4; opacity: 0.75; }

    


    espace-rhum .er-rang-sheet { display: none; position: fixed; inset: 0; z-index: 100; pointer-events: none; }
    espace-rhum .er-rang-sheet[data-open="true"] { display: block; pointer-events: auto; }
    espace-rhum .er-rang-sheet-tete { display: flex; align-items: center; gap: 12px; margin: -6px 0 14px; }
    espace-rhum .er-rang-sheet-tete img { flex: none; width: 64px; height: 64px; object-fit: contain; filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.45)); }
    espace-rhum .er-rang-sheet-palier { margin: 0; font-family: var(--er-font-display); font-style: italic; font-size: 24px; line-height: 1; text-transform: uppercase; color: var(--er-amber-bright); }
    espace-rhum .er-rang-sheet .er-rank-next { font-size: 13px; }
    espace-rhum .er-rang-sheet .er-rang-explique { font-size: 12px; margin-bottom: 14px; }

     
    espace-rhum .er-mobile-rank-strip {
      padding: 16px;
      background: linear-gradient(135deg, rgba(245, 190, 65, 0.1) 0%, transparent 100%);
      border-top: 1px solid var(--er-border-soft);
      border-bottom: 1px solid var(--er-border-soft);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      margin-top: 8px;
    }
    espace-rhum .er-mobile-rank-item {
      text-align: center;
      padding: 0 6px;
      border-right: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-mobile-rank-item:last-child { border-right: none; }
    espace-rhum .er-mobile-rank-item-value {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 22px; color: var(--er-teal); line-height: 1;
    }
    espace-rhum .er-mobile-rank-item-value span { font-size: 14px; }
    espace-rhum .er-mobile-rank-item-value--rank { color: var(--er-amber-bright); }
    espace-rhum .er-mobile-rank-item-label {
      font-family: var(--er-font-body);
      font-size: 9px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--er-text-muted);
      margin-top: 6px;
      line-height: 1.2;
    }

     
    espace-rhum .er-mobile-filter-sheet {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 100;
      pointer-events: none;
    }
    espace-rhum .er-mobile-filter-sheet[data-open="true"] {
      display: block;
      pointer-events: auto;
    }
    espace-rhum .er-mobile-filter-sheet-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(10, 18, 40, 0.7);
      -webkit-backdrop-filter: blur(6px);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      animation: er-fadeup 0.25s var(--er-ease-entry) both;
    }
    espace-rhum .er-mobile-filter-sheet-panel {
      position: absolute;
      left: 0; right: 0; bottom: 0;
      max-height: 70vh;
      background: var(--er-bg-elevated);
      border-top: 1px solid var(--er-border-soft);
      border-radius: 20px 20px 0 0;
      padding: 12px 20px 32px;
      overflow-y: auto;
      animation: er-sheet-slide-up 0.3s var(--er-ease-spring) both;
    }
    @keyframes er-sheet-slide-up {
      from { transform: translateY(100%); }
      to   { transform: translateY(0); }
    }
    espace-rhum .er-mobile-filter-sheet-handle {
      width: 40px; height: 4px;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 2px;
      margin: 0 auto 12px;
    }
    espace-rhum .er-mobile-filter-sheet-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 20px;
    }
    espace-rhum .er-mobile-filter-sheet-title {
      font-family: var(--er-font-display); font-style: italic;
      font-size: 22px; text-transform: uppercase;
      color: var(--er-text-primary);
    }
    espace-rhum .er-mobile-filter-sheet-close {
      width: 32px; height: 32px;
      background: transparent;
      border: 1px solid var(--er-border-soft);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      color: var(--er-text-secondary);
      padding: 0;
    }
    espace-rhum .er-mobile-filter-sheet-close svg {
      width: 14px; height: 14px;
      stroke: currentColor; fill: none;
    }
    espace-rhum .er-mobile-filter-sheet-section-title {
      font-family: var(--er-font-body);
      font-size: 10px; font-weight: 800;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--er-text-label);
      margin-bottom: 10px; padding-left: 4px;
    }
    espace-rhum .er-mobile-sheet-nav {
      display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
      margin-bottom: 24px;
    }
    espace-rhum .er-mobile-sheet-nav-link {
      display: flex; align-items: center; gap: 10px;
      padding: 12px;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: 12px 3px 10px 3px;
      color: var(--er-text-secondary);
      font-family: var(--er-font-body); font-size: 12.5px; font-weight: 600;
      cursor: pointer; text-align: left;
      transition: background var(--er-dur-fast), border-color var(--er-dur-fast);
    }
    espace-rhum .er-mobile-sheet-nav-link svg { width: 16px; height: 16px; stroke: var(--er-teal); fill: none; stroke-width: 2; flex-shrink: 0; }
    espace-rhum .er-mobile-sheet-nav-link:active { background: var(--er-teal-soft); border-color: var(--er-teal); }
    espace-rhum .er-mobile-sheet-prefs { width: 100%; justify-content: center; margin-top: 4px; }

     
    espace-rhum .er-sidebar-toggle { display: none; }
    espace-rhum .er-sidebar-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(10, 18, 40, 0.6);
      -webkit-backdrop-filter: blur(4px);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 99;
      



      animation: er-fadeup 0.2s var(--er-ease-entry) backwards;
    }

     
    espace-rhum .er-section-badges {
      grid-column: span 12;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-card);
      padding: 28px 32px 32px;
      margin-top: 8px;
    }
    espace-rhum .er-section-badges-inner {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    espace-rhum .er-badges-filters {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    espace-rhum .er-badges-filter {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-full);
      font-family: var(--er-font-body);
      font-size: 12px; font-weight: 600;
      color: var(--er-text-muted);
      letter-spacing: 0.05em; text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badges-filter:hover{
      color: var(--er-text-primary);
      border-color: rgba(93, 191, 192, 0.4);
    }}
    espace-rhum .er-badges-filter[aria-selected="true"] {
      background: var(--er-teal-soft);
      border-color: var(--er-teal);
      color: var(--er-text-primary);
    }

    espace-rhum .er-badges-categories {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px 32px;
    }
    espace-rhum .er-badges-category[data-category="exploration"] { grid-column: span 2; }
    espace-rhum .er-badges-category[data-category="fidelite"],
    espace-rhum .er-badges-category[data-category="evenement-sm"],
    espace-rhum .er-badges-category[data-category="evenement-pap"],
    espace-rhum .er-badges-category[data-category="habitudes"] { grid-column: span 1; }

    espace-rhum .er-badges-category-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-badges-category-title {
      font-family: var(--er-font-display);
      font-style: italic;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: var(--er-text-primary);
      margin: 0;
    }
    espace-rhum .er-badges-category[data-category="fidelite"]      .er-badges-category-title { color: var(--er-amber); }
    espace-rhum .er-badges-category[data-category="exploration"]   .er-badges-category-title { color: var(--er-teal); }
    espace-rhum .er-badges-category[data-category="evenement-sm"]  .er-badges-category-title { color: #7894F7; }
    espace-rhum .er-badges-category[data-category="evenement-pap"] .er-badges-category-title { color: #F19F39; }
    espace-rhum .er-badges-category[data-category="habitudes"]     .er-badges-category-title { color: var(--er-teal); }
    espace-rhum .er-badges-category-count {
      font-family: var(--er-font-body);
      font-size: 11px; font-weight: 700;
      color: var(--er-text-muted);
      letter-spacing: 0.05em;
    }
    espace-rhum .er-badges-category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 14px;
    }
    espace-rhum .er-badges-category[data-category="evenement-pap"] .er-badges-category-grid {
      grid-template-columns: minmax(140px, 200px);
    }

     
    espace-rhum .er-badge-tile {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      




      padding: 24px 14px 18px;
      min-height: 260px;
      background: var(--er-bg-card);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px 3px 10px 3px;
      cursor: pointer;
      transform: rotate(var(--rot, 0deg));
      transition: transform 0.4s var(--er-ease-smooth),
                  border-color 0.2s,
                  box-shadow 0.3s,
                  background 0.3s;
      animation: er-fadeup 0.5s var(--er-ease-entry) both;
      font-family: inherit;
      color: inherit;
      text-align: center;
    }
    espace-rhum .er-badge-tile:focus-visible{
      transform: rotate(0deg) translateY(-3px);
      border-color: rgba(93, 191, 192, 0.3);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }@media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile:hover{
      transform: rotate(0deg) translateY(-3px);
      border-color: rgba(93, 191, 192, 0.3);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }}

    

    espace-rhum .er-badge-tile-icon-wrap {
      position: relative;
      width: 112px; height: 112px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
    }
    espace-rhum .er-badge-tile-icon {
      width: 80px; height: 80px;
      stroke-width: 1.8; fill: none;
      stroke: var(--er-text-muted);
      stroke-linecap: round; stroke-linejoin: round;
      transition: stroke 0.3s;
      z-index: 2;
    }
    espace-rhum .er-badge-tile-halo {
      position: absolute;
      inset: -8px;
      border-radius: 50%;
      background: radial-gradient(closest-side, var(--halo-color, transparent), transparent 70%);
      opacity: 0;
      pointer-events: none;
      z-index: 1;
    }

     
    espace-rhum .er-badge-tile[data-state="unlocked"] {
      background: linear-gradient(145deg, var(--tile-bg-from, rgba(93, 191, 192, 0.08)) 0%, var(--er-bg-card) 60%);
      border-color: var(--tile-border, rgba(93, 191, 192, 0.25));
    }
    espace-rhum .er-badge-tile[data-state="unlocked"] .er-badge-tile-icon {
      stroke: var(--tile-icon, var(--er-teal));
    }
     
    espace-rhum .er-badge-tile:not([data-state="unlocked"]) .er-badge-tile-icon {
      filter: grayscale(1) contrast(1.25) brightness(1.05);
      opacity: 0.62;
    }
    espace-rhum .er-badge-tile[data-state="unlocked"] .er-badge-tile-halo {
      opacity: 1;
      animation: er-halo-pulse 2.4s ease-in-out infinite;
      --halo-color: var(--tile-halo, rgba(93, 191, 192, 0.4));
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile[data-state="unlocked"]:hover{
      border-color: var(--tile-icon, var(--er-teal));
      box-shadow: 0 8px 28px var(--tile-shadow, rgba(93, 191, 192, 0.2));
    }}
    espace-rhum .er-badge-tile[data-state="unlocked"][data-category="fidelite"] {
      --tile-bg-from: rgba(245, 190, 65, 0.08);
      --tile-border: rgba(245, 190, 65, 0.25);
      --tile-icon: var(--er-amber);
      --tile-halo: rgba(245, 190, 65, 0.4);
      --tile-shadow: rgba(245, 190, 65, 0.2);
    }
    espace-rhum .er-badge-tile[data-state="unlocked"][data-category="exploration"] {
      --tile-bg-from: rgba(93, 191, 192, 0.08);
      --tile-border: rgba(93, 191, 192, 0.25);
      --tile-icon: var(--er-teal);
      --tile-halo: rgba(93, 191, 192, 0.4);
      --tile-shadow: rgba(93, 191, 192, 0.2);
    }
    espace-rhum .er-badge-tile[data-state="unlocked"][data-category="evenement-sm"] {
      --tile-bg-from: rgba(120, 148, 247, 0.09);
      --tile-border: rgba(120, 148, 247, 0.28);
      --tile-icon: #7894F7;
      --tile-halo: rgba(120, 148, 247, 0.45);
      --tile-shadow: rgba(120, 148, 247, 0.22);
    }
    espace-rhum .er-badge-tile[data-state="unlocked"][data-category="evenement-pap"] {
      --tile-bg-from: rgba(241, 159, 57, 0.1);
      --tile-border: rgba(241, 159, 57, 0.3);
      --tile-icon: #F19F39;
      --tile-halo: rgba(241, 159, 57, 0.45);
      --tile-shadow: rgba(241, 159, 57, 0.22);
    }
    espace-rhum .er-badge-tile[data-state="unlocked"][data-category="habitudes"] {
      --tile-bg-from: rgba(93, 191, 192, 0.08);
      --tile-border: rgba(93, 191, 192, 0.25);
      --tile-icon: var(--er-teal);
      --tile-halo: rgba(93, 191, 192, 0.4);
      --tile-shadow: rgba(93, 191, 192, 0.2);
    }

     
    espace-rhum .er-badge-tile[data-state="discovered"] { opacity: 0.85; }
    espace-rhum .er-badge-tile[data-state="discovered"] .er-badge-tile-name,
    espace-rhum .er-badge-tile[data-state="mystery"] .er-badge-tile-name {
      color: var(--er-text-muted);
      font-style: italic;
      letter-spacing: 0.1em;
    }
    

    espace-rhum .er-badge-tile[data-state="mystery"] { opacity: 0.55; cursor: pointer; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile[data-state="mystery"]:hover,espace-rhum .er-badge-tile[data-state="discovered"]:hover{
      opacity: 0.9;
      border-color: rgba(93, 191, 192, 0.35);
      box-shadow: none;
    }}

     
    espace-rhum .er-badge-tile[data-state="action"] {
      cursor: pointer;
      border-color: rgba(245, 190, 65, 0.28);
      background: linear-gradient(145deg, rgba(245, 190, 65, 0.06) 0%, var(--er-bg-card) 60%);
    }
    espace-rhum .er-badge-tile[data-state="action"] .er-badge-tile-icon { filter: none; opacity: 1; stroke: var(--er-amber); }
    espace-rhum .er-badge-tile[data-state="action"] .er-badge-tile-name { color: var(--er-text-primary); font-style: italic; letter-spacing: 0.02em; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile[data-state="action"]:hover{
      border-color: var(--er-amber);
      box-shadow: 0 8px 28px rgba(245, 190, 65, 0.18);
    }}
    espace-rhum .er-badge-tile[data-state="action"][aria-disabled="true"] { cursor: default; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile[data-state="action"][aria-disabled="true"]:hover{
      transform: rotate(var(--rot, 0deg)); border-color: rgba(245, 190, 65, 0.28); box-shadow: none;
    }}
    espace-rhum .er-badge-tile-action-hint {
      font-family: var(--er-font-body); font-size: 11px; line-height: 1.3; color: var(--er-text-muted);
      text-align: center; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }
    espace-rhum .er-badge-tile-cta {
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800; color: var(--er-amber);
      text-transform: uppercase; letter-spacing: 0.04em;
    }
    espace-rhum .er-badge-tile-cta.is-soon { color: var(--er-text-muted); }

    


    espace-rhum .er-badge-tile-flag {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 3px 8px; border-radius: 999px;
      font-family: var(--er-font-body); font-size: 9.5px; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap;
    }
    espace-rhum .er-badge-tile-flag svg {
      width: 11px; height: 11px; flex: 0 0 11px; stroke-width: 2.4;
    }
    espace-rhum .er-badge-tile[data-tone="error"] .er-badge-tile-flag {
      color: #ffb4ae; background: rgba(224, 62, 45, 0.18); border: 1px solid rgba(224, 62, 45, 0.5);
    }
    espace-rhum .er-badge-tile[data-tone="wait"] .er-badge-tile-flag {
      color: var(--er-text-muted); background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.14);
    }
     
    espace-rhum .er-badge-tile[data-state="action"][data-tone="error"] {
      border-color: rgba(224, 62, 45, 0.5);
      background: linear-gradient(145deg, rgba(224, 62, 45, 0.1) 0%, var(--er-bg-card) 62%);
    }
    espace-rhum .er-badge-tile[data-state="action"][data-tone="error"] .er-badge-tile-icon { stroke: #ff8a7d; }
    espace-rhum .er-badge-tile[data-state="action"][data-tone="error"] .er-badge-tile-cta { color: #ff8a7d; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-tile[data-state="action"][data-tone="error"]:hover{
      border-color: #e03e2d;
      box-shadow: 0 8px 28px rgba(224, 62, 45, 0.22);
    }}
    espace-rhum .er-badge-tile[data-tone="error"] .er-badge-tile-action-hint { color: #ffb4ae; }

    

    espace-rhum .er-badges-category[data-category="a-debloquer"] .er-badges-category-title { color: var(--er-amber); }

     
    espace-rhum .er-badge-tile-name {
      font-family: var(--er-font-display);
      font-style: italic;
      font-size: 18px;
      line-height: 1.05;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      color: var(--er-text-primary);
      margin-bottom: 12px;
    }
    espace-rhum .er-badge-tile-name[data-len="12"],
    espace-rhum .er-badge-tile-name[data-len="13"] { font-size: 16px; }
    espace-rhum .er-badge-tile-name[data-len="14"],
    espace-rhum .er-badge-tile-name[data-len="15"] { font-size: 15px; }
    espace-rhum .er-badge-tile-name[data-len="16"],
    espace-rhum .er-badge-tile-name[data-len="17"] { font-size: 14px; }
    espace-rhum .er-badge-tile-name.er-badge-tile-name--wrap {
      font-size: 13px;
      white-space: normal;
      line-height: 1.1;
    }

     
    espace-rhum .er-badge-tile-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 100%;
      min-height: 32px;
    }
    espace-rhum .er-badge-tile-achievement {
      font-family: var(--er-font-body);
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: var(--er-text-muted);
      text-align: center;
      max-width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    espace-rhum .er-badge-tile-date {
      font-family: var(--er-font-body);
      font-size: 11px; font-weight: 600;
      color: var(--tile-icon, var(--er-teal));
      text-transform: uppercase; letter-spacing: 0.05em;
    }
    espace-rhum .er-badge-tile-progress {
      width: 100%;
      display: flex; flex-direction: column; gap: 4px;
    }
    espace-rhum .er-badge-tile-progress-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 2px;
      overflow: hidden;
    }
    espace-rhum .er-badge-tile-progress-fill {
      height: 100%;
      width: var(--progress, 0%);
      background: var(--er-teal);
      border-radius: inherit;
      transition: width 0.4s ease;
    }
    espace-rhum .er-badge-tile-progress-text {
      font-family: var(--er-font-body);
      font-size: 11px; font-weight: 600;
      color: var(--er-text-muted);
      letter-spacing: 0.05em;
      text-align: center;
    }
    espace-rhum .er-badge-tile-hint {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--er-font-body);
      font-size: 11px;
      color: var(--er-text-muted);
      font-style: italic;
    }
    espace-rhum .er-badge-tile-lock {
      width: 12px; height: 12px;
      stroke: currentColor; fill: none; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
    }

     
    espace-rhum .er-badges-empty {
      padding: 40px 24px;
      text-align: center;
      background: rgba(255, 255, 255, 0.02);
      border: 1px dashed var(--er-border-soft);
      border-radius: 14px 3px 10px 3px;
      color: var(--er-text-muted);
    }
    espace-rhum .er-empty-icon { font-size: 42px; margin-bottom: 12px; }
    espace-rhum .er-empty-title {
      font-family: var(--er-font-display);
      font-style: italic;
      text-transform: uppercase;
      font-size: 16px;
      color: var(--er-text-primary);
      margin: 0 0 8px;
    }
    espace-rhum .er-empty-text {
      font-family: var(--er-font-body);
      font-size: 13px;
      margin: 0;
      line-height: 1.5;
    }

    




    















    espace-rhum .er-votesk {
      display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
      padding: 20px 22px 22px; margin-bottom: 16px;
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-card);
    }
    











    espace-rhum .er-widget-fav-skippers .er-votesk {
      background:
        radial-gradient(60% 110% at 0% 0%, rgba(230, 57, 70, .30) 0%, rgba(230, 57, 70, 0) 70%),
        radial-gradient(50% 80% at 100% 100%, rgba(230, 57, 70, .12) 0%, rgba(230, 57, 70, 0) 70%),
        linear-gradient(160deg, #2B1831 0%, #18183A 55%, #121834 100%);
      border-color: transparent;
      box-shadow: inset 0 0 0 1.5px rgba(230, 57, 70, .7), 0 0 44px -12px rgba(230, 57, 70, .5);
    }
    

    espace-rhum .er-votesk-gauche {
      display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
      flex: 1 1 100%; min-width: 0;
    }
    espace-rhum .er-votesk-texte { display: flex; flex-direction: column; gap: 5px; flex: 1 1 220px; min-width: 0; }
    




    


    espace-rhum .er-votesk-titre-rangee { display: flex; align-items: center; gap: 9px; min-width: 0; }
    




    espace-rhum .er-votesk-coeur-titre svg {
      width: 18px; height: 18px; color: #FF4D6D; display: block; flex: 0 0 auto;
      transform-origin: 50% 55%;
      animation: er-coeur-bat 2.8s ease-in-out -1.4s infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-votesk-coeur-titre svg { animation: none; }
    }
    




    espace-rhum .er-votesk-label {
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 21px; line-height: 1.05; letter-spacing: 0;
      text-transform: uppercase; color: var(--er-text-primary);
    }
    espace-rhum .er-votesk-aide { font-family: var(--er-font-body); font-size: 12px; color: var(--er-text-muted); }
    





    espace-rhum .er-votesk .er-pick { flex: 0 1 380px; min-width: 0; }
    espace-rhum .er-votesk .er-pick-btn { padding: 10px 12px; border-radius: var(--er-radius-xs); }
    espace-rhum .er-votesk-etat {
      font-family: var(--er-font-body); font-size: 11.5px; color: var(--er-text-muted);
      min-width: 76px;
    }
    espace-rhum .er-votesk-etat[data-tone="ok"] { color: var(--er-teal); font-weight: 700; }
    espace-rhum .er-reglement {
      display: inline-flex; align-items: center; min-height: 44px;
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 600;
      color: var(--er-text-muted); text-decoration: underline; text-underline-offset: 3px;
    }
    


    






    






    espace-rhum .er-votesk-carte {
      flex: 1 1 100%;
      display: flex; align-items: center; gap: 22px; flex-wrap: wrap;
      padding: 20px 24px; border-radius: var(--er-radius-md, 14px);
      background: linear-gradient(115deg,
        var(--er-navy-900, #0A1A35) 0%,
        rgba(255, 255, 255, 0.04) 100%);
      border: 1px solid var(--er-border, rgba(255, 255, 255, 0.1));
      border-left: 3px solid var(--er-vsk-col, var(--er-teal));
    }
    espace-rhum .er-votesk-med { position: relative; flex: none; }
    








    espace-rhum .er-widget-fav-skippers .er-votesk-med::before {
      content: ''; position: absolute; inset: -16px; border-radius: 50%; z-index: 0;
      background: radial-gradient(closest-side, rgba(230, 57, 70, .55), rgba(230, 57, 70, .18) 55%, rgba(230, 57, 70, 0) 100%);
      filter: blur(7px); opacity: 0; transform: scale(.8); pointer-events: none;
      animation: erOndeDouce 18s ease-in-out 5s infinite;
    }
    


    espace-rhum .er-widget-fav-skippers .er-votesk-rond { position: relative; z-index: 1; }
    espace-rhum .er-widget-fav-skippers .er-votesk-couronne { z-index: 2; }
    @keyframes erOndeDouce {
      0%   { opacity: 0; transform: scale(.8); }
      5%   { opacity: .9; transform: scale(1.12); }
      10%  { opacity: 0; transform: scale(1.2); }
      100% { opacity: 0; transform: scale(.8); }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-widget-fav-skippers .er-votesk-med::before { animation: none; }
    }
    espace-rhum .er-votesk-rond {
      display: block; width: 96px; height: 96px; border-radius: 50%;
      background-size: cover; background-position: top center;
      border: 3px solid var(--er-vsk-col, var(--er-teal));
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
    }
    espace-rhum .er-votesk-rond--vide {
      display: flex; align-items: center; justify-content: center;
      background: rgba(255, 255, 255, 0.06);
    }
    espace-rhum .er-votesk-rond--vide svg { width: 44%; height: 44%; opacity: 0.5; }
    

    espace-rhum .er-votesk-couronne {
      position: absolute; bottom: -7px; left: 50%; transform: translateX(-50%);
      background: var(--er-amber-bright, #FCF150); color: var(--er-navy-900, #0A1A35);
      font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap;
      padding: 3px 10px; border-radius: 99px;
    }
    espace-rhum .er-votesk-ident { flex: 1; min-width: 0; }
    espace-rhum .er-votesk-prenom {
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--er-text-secondary); margin-bottom: 1px;
    }
    espace-rhum .er-votesk-nom {
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: clamp(24px, 3vw, 34px); line-height: 0.92;
      text-transform: uppercase; letter-spacing: -0.02em;
      color: var(--er-text-primary);
      overflow: hidden; text-overflow: ellipsis;
    }
    espace-rhum .er-votesk-sous {
      font-family: var(--er-font-body); font-size: 12px;
      color: var(--er-text-secondary); margin-top: 5px;
    }
    




    





    espace-rhum .er-votesk-cote {
      flex: none; display: grid; grid-template-columns: auto auto; justify-content: end; justify-items: end;
      align-items: center; column-gap: 10px; row-gap: 0;
    }
    espace-rhum .er-votesk-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 10px; grid-column: 1; grid-row: 2; }
    espace-rhum .er-votesk-actions .er-btn { padding: 9px 16px; font-size: 11px; }
    espace-rhum .er-votesk-fans { flex: none; text-align: right; grid-column: 1 / -1; grid-row: 1; margin-bottom: 12px; }
    





    espace-rhum .er-votesk-fans-n {
      display: flex; align-items: center; justify-content: flex-end; gap: 7px;
    }
    


    






















    espace-rhum .er-votesk-coeur svg {
      width: 24px; height: 24px; color: #FF4D6D; display: block;
      position: relative; top: 1px; transform-origin: 50% 55%;
      animation: er-coeur-bat 2.8s ease-in-out infinite;
    }
    @keyframes er-coeur-bat {
      0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 0 rgba(255,77,109,0)); }
      6%       { transform: scale(1.30); filter: drop-shadow(0 0 14px rgba(255,77,109,.85)); }
      14%      { transform: scale(.98);  filter: drop-shadow(0 0 4px rgba(255,77,109,.30)); }
      21%      { transform: scale(1.16); filter: drop-shadow(0 0 10px rgba(255,77,109,.60)); }
      31%      { transform: scale(1);    filter: drop-shadow(0 0 0 rgba(255,77,109,0)); }
    }
     
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-votesk-coeur svg { animation: none; }
    }
    espace-rhum .er-votesk-fans b {
      display: block;
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 32px; line-height: 1; color: var(--er-amber-bright, #FCF150);
    }
    



    espace-rhum .er-votesk-fans-lib {
      display: block; margin-top: 3px;
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase; color: var(--er-text-secondary);
    }
    

    espace-rhum .er-votesk--elu .er-pick { display: none; }
    



    espace-rhum .er-votesk--elu.er-votesk--ouvert .er-pick { display: block; flex: 0 1 380px; }
    espace-rhum .er-votesk--elu .er-votesk-etat { display: none; }

    espace-rhum .er-votesk-rang {
      flex: 1 0 100%; margin: 10px 0 0; display: flex; align-items: center; gap: 12px;
    }
    espace-rhum .er-votesk-rang-n {
      font-family: var(--er-font-title, Montserrat), sans-serif; font-size: 24px;
      font-weight: 800; color: var(--er-amber-bright, #FCF150); line-height: 1; white-space: nowrap;
    }
    espace-rhum .er-votesk-rang-n sup { font-size: 11px; }
    espace-rhum .er-votesk-rang-n small { font-size: 12px; margin-right: 2px; vertical-align: 0.45em; }
    espace-rhum .er-votesk-rang-txt {
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.45; color: rgba(255, 255, 255, 0.72);
    }
    espace-rhum .er-votesk-rang-txt b { color: var(--er-text-primary); font-weight: 700; }
    espace-rhum .er-votesk-retirer {
      padding: 7px 12px; font-family: var(--er-font-body); font-size: 11.5px; font-weight: 700;
      cursor: pointer; color: var(--er-text-muted); background: transparent;
      border: 1px solid var(--er-border-soft); border-radius: var(--er-radius-full);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-votesk-retirer:hover{ color: var(--er-text-primary); border-color: var(--er-border-hover); }}
    



    espace-rhum .er-votesk-partager {
      grid-column: 2; grid-row: 2;
      position: relative; flex: none; display: inline-flex; align-items: center; justify-content: center;
      width: 36px; height: 36px; padding: 0; cursor: pointer;
      color: var(--er-teal); background: transparent;
      border: 1px solid var(--er-border-soft); border-radius: 50%;
      transition: color .2s ease, border-color .2s ease, background-color .2s ease;
    }
    espace-rhum .er-votesk-partager svg { width: 15px; height: 15px; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-votesk-partager:hover{ color: var(--er-text-primary); border-color: var(--er-teal); background: var(--er-teal-soft); }}
    espace-rhum .er-votesk-partager:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-votesk-partager::after {
      content: attr(data-bulle); position: absolute; top: calc(100% + 8px); right: 0; transform: translateY(-4px);
      padding: 6px 10px; border-radius: 8px; white-space: nowrap; pointer-events: none;
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700; letter-spacing: .04em;
      color: #fff; background: #0A1A35; box-shadow: 0 8px 20px -8px rgba(0,0,0,.6);
      opacity: 0; visibility: hidden; transition: opacity .18s ease, transform .18s ease, visibility 0s linear .18s;
    }
    @media (hover: hover) {
      espace-rhum .er-votesk-partager:hover::after { opacity: 1; visibility: visible; transform: translateY(0); transition: opacity .18s ease, transform .18s ease; }
    }
    espace-rhum .er-votesk-partager:focus-visible::after { opacity: 1; visibility: visible; transform: translateY(0); }
     
    @media (hover: none) { espace-rhum .er-votesk-partager::after { display: none; } }
    @media (max-width: 860px) {
      espace-rhum .er-votesk { gap: 10px; }
      espace-rhum .er-votesk .er-pick { flex: 1 1 100%; }
      espace-rhum .er-votesk .er-pick-btn { padding: 13px 12px; font-size: 15px; }
      espace-rhum .er-votesk-etat { min-width: 0; }
    }
    


    @media (max-width: 767px) {
      espace-rhum .er-votesk-carte { gap: 14px; padding: 16px; }
      


      espace-rhum .er-votesk-cote {
        flex: 1 1 100%;
        grid-template-columns: minmax(0, 1fr) auto; justify-content: stretch; justify-items: stretch;
      }
      espace-rhum .er-votesk-fans { text-align: left; grid-column: 1; }
      espace-rhum .er-votesk-partager { grid-column: 2; grid-row: 1; justify-self: end; width: 40px; height: 40px; margin-bottom: 12px; }
      espace-rhum .er-votesk-fans-n { justify-content: flex-start; }
      espace-rhum .er-votesk-actions {
        flex-wrap: nowrap; justify-content: flex-start; gap: 10px; grid-column: 1 / -1;
      }
      espace-rhum .er-votesk-actions .er-btn {
        flex: 1 1 auto; justify-content: center; padding: 10px 12px;
      }
    }

    



    espace-rhum .er-prono-bulletin {
      position: relative; overflow: hidden;
      display: grid; grid-template-columns: auto minmax(0, 1fr) auto;
      gap: 18px; align-items: center;
      padding: 18px 20px;
      background: linear-gradient(150deg, rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.045));
      border: 1px solid var(--er-border-soft); border-radius: 16px;
    }
    

    espace-rhum .er-prono-bulletin::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(--pc);
    }
    espace-rhum .er-prono-bull-photo {
      width: 66px; height: 66px; border-radius: 50%; flex: none;
      background-size: cover; background-position: center top;
      border: 2px solid var(--pc); background-color: rgba(255, 255, 255, 0.06);
    }
    espace-rhum .er-prono-bull-photo--vide { border-style: dashed; }
    espace-rhum .er-prono-bull-ident { min-width: 0; }
    espace-rhum .er-prono-bull-eyebrow {
      display: block; font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.18em; text-transform: uppercase; color: var(--pc); margin-bottom: 5px;
    }
    espace-rhum .er-prono-bull-nom {
      display: block; font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 24px; line-height: 1; text-transform: uppercase; margin-bottom: 5px;
    }
    espace-rhum .er-prono-bull-sous { font-size: 12px; color: var(--er-text-muted); }
    espace-rhum .er-prono-bull-temps { text-align: right; flex: none; }
    espace-rhum .er-prono-bull-temps-lab {
      display: block; font-family: var(--er-font-body); font-size: 9px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-text-label); margin-bottom: 5px;
    }
    espace-rhum .er-prono-bull-temps-val {
      display: block; font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 22px; line-height: 1; font-variant-numeric: tabular-nums;
    }
    espace-rhum .er-prono-bull-pied {
      grid-column: 1 / -1; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
      padding-top: 14px; border-top: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-prono-bull-note { font-size: 11px; color: var(--er-text-muted); margin-left: auto; }
    


    @media (max-width: 640px) {
      espace-rhum .er-prono-bulletin { grid-template-columns: auto minmax(0, 1fr); gap: 14px; padding: 15px 16px; }
      espace-rhum .er-prono-bull-photo { width: 52px; height: 52px; }
      espace-rhum .er-prono-bull-nom { font-size: 19px; }
      espace-rhum .er-prono-bull-temps { grid-column: 1 / -1; text-align: left; }
      espace-rhum .er-prono-bull-temps-val { font-size: 19px; }
      espace-rhum .er-prono-bull-note { margin-left: 0; flex-basis: 100%; }
      espace-rhum .er-prono-bull-pied .er-btn { width: 100%; justify-content: center; }
    }

    


    espace-rhum .er-pronos-participation {
      margin: 16px 0 0; padding: 12px 16px; border-radius: 12px;
      background: rgba(93, 191, 192, 0.07); border: 1px solid rgba(93, 191, 192, 0.2);
      font-family: var(--er-font-body); font-size: 12.5px; color: var(--er-text-secondary);
    }
    espace-rhum .er-pronos-participation b {
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 18px; color: var(--er-teal); margin-right: 3px;
      font-variant-numeric: tabular-nums;
    }
    espace-rhum .er-pronos-participation span { color: var(--er-text-muted); }

     
    espace-rhum .er-cons {
      margin-top: 18px; padding: 16px 18px; border-radius: 14px;
      background: rgba(93, 191, 192, 0.07); border: 1px solid rgba(93, 191, 192, 0.22);
    }
    espace-rhum .er-cons-entete {
      display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 14px;
    }
    espace-rhum .er-cons-titre {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-teal);
    }
    espace-rhum .er-cons-total { font-size: 11px; color: var(--er-text-muted); }
    


    espace-rhum .er-cons-grille {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px;
    }
    espace-rhum .er-cons-bloc {
      padding: 12px 14px; border-radius: 11px;
      background: rgba(255, 255, 255, 0.035); border-left: 3px solid var(--pc);
    }
    espace-rhum .er-cons-tete {
      display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 10px;
    }
    espace-rhum .er-cons-classe {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.14em; text-transform: uppercase; color: var(--pc);
    }
    espace-rhum .er-cons-n { font-size: 10.5px; color: var(--er-text-muted); }
    espace-rhum .er-cons-rang {
      display: grid; grid-template-columns: minmax(0, 1fr) 64px 34px;
      gap: 8px; align-items: center; margin-bottom: 7px;
    }
    espace-rhum .er-cons-rang:last-of-type { margin-bottom: 0; }
    espace-rhum .er-cons-nom {
      font-size: 12px; font-weight: 600; color: var(--er-text-secondary);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    espace-rhum .er-cons-piste {
      height: 7px; border-radius: 99px; background: rgba(255, 255, 255, 0.08); overflow: hidden;
    }
    espace-rhum .er-cons-piste i { display: block; height: 100%; border-radius: inherit; background: var(--pc); }
    espace-rhum .er-cons-pct {
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 800;
      color: var(--er-text-secondary); text-align: right; font-variant-numeric: tabular-nums;
    }
    

    espace-rhum .er-cons-rang.est-moi .er-cons-nom,
    espace-rhum .er-cons-rang.est-moi .er-cons-pct { color: var(--er-amber-bright); }
    espace-rhum .er-cons-median {
      margin: 10px 0 0; padding-top: 9px; border-top: 1px solid var(--er-border-soft);
      font-size: 11px; color: var(--er-text-muted);
    }
    espace-rhum .er-cons-median b { color: var(--er-text-secondary); font-weight: 700; }

    


    


    espace-rhum .er-demo-bandeau {
      display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap;
      margin: 0 0 16px; padding: 10px 14px; border-radius: 10px;
      background: rgba(245, 176, 65, 0.12);
      border: 1px solid rgba(245, 176, 65, 0.34);
    }
    espace-rhum .er-demo-tag {
      flex: 0 0 auto; padding: 2px 8px; border-radius: 999px;
      background: #f5b041; color: #10243d;
      font-family: var(--er-font-title); font-size: 10px; font-weight: 800;
      letter-spacing: 0.08em; text-transform: uppercase;
    }
    espace-rhum .er-demo-txt {
      flex: 1 1 240px; min-width: 0;
      font-family: var(--er-font-body); font-size: 12px; line-height: 1.5;
      color: #f7d9a8;
    }
    espace-rhum .er-demo-txt b { color: #ffe9c4; font-weight: 700; }

    espace-rhum .er-widget--combat { grid-column: span 12; overflow: visible; }
    espace-rhum .er-combat-tete {
      display: flex; align-items: flex-start; justify-content: space-between;
      gap: 16px; margin-bottom: 6px;
    }
    espace-rhum .er-combat-eyebrow {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-amber);
    }
    espace-rhum .er-combat-titre {
      font-family: var(--er-font-display); font-style: italic; font-size: 24px;
      font-weight: 700; color: var(--er-white); margin: 4px 0 0;
    }
    espace-rhum .er-combat-jauge { flex: 0 0 auto; text-align: right; font-family: var(--er-font-body); }
    espace-rhum .er-combat-jauge-val {
      display: block; font-size: 26px; font-weight: 800; color: var(--er-teal);
      font-variant-numeric: tabular-nums;
    }
    espace-rhum .er-combat-jauge-tot { font-size: 16px; color: var(--er-text-muted); }
    espace-rhum .er-combat-jauge-lab {
      font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-combat-sub {
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.5;
      color: var(--er-text-secondary); margin: 0 0 18px; max-width: 76ch;
    }

    espace-rhum .er-combat-grille { display: flex; flex-direction: column; gap: 10px; }

    







    






    espace-rhum .er-combat-grille:has(.er-combat-carte) {
      display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px;
    }
    @media (min-width: 900px) {
      espace-rhum .er-combat-grille:has(.er-combat-carte) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    espace-rhum .er-combat-carte {
      position: relative; overflow: hidden;
      padding: 16px; border-radius: var(--er-radius-sm);
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
    }
     
    espace-rhum .er-combat-carte::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--cc);
    }
    espace-rhum .er-combat-carte-tete {
      display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px;
    }
    espace-rhum .er-combat-carte-classe {
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800;
      letter-spacing: 0.14em; text-transform: uppercase; color: var(--cc);
    }
    espace-rhum .er-combat-carte-etat {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase; color: var(--er-text-muted);
    }
    espace-rhum .er-combat-carte-etat.est-fait { color: var(--er-teal); }
    espace-rhum .er-combat-carte-seul {
      margin: 10px 0 0; font-size: 11px; line-height: 1.5; color: var(--er-text-muted);
    }
    espace-rhum .er-combat-carte .er-combat-bulletin {
      display: flex; flex-direction: column; gap: 7px;
    }
    espace-rhum .er-combat-carte .er-combat-choix {
      display: flex; align-items: center; gap: 10px; width: 100%; text-align: left;
      padding: 8px 10px; border-radius: 10px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid transparent;
      font-family: var(--er-font-body); font-size: 13px; font-weight: 600;
      color: var(--er-text-secondary); cursor: pointer;
      transition: border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth),
                  color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-combat-carte .er-combat-choix:hover{ border-color: var(--er-border-hover); color: var(--er-white); }}
    espace-rhum .er-combat-carte .er-combat-choix.is-on {
      border-color: var(--cc); color: var(--er-white);
      background: color-mix(in srgb, var(--cc) 16%, transparent);
    }
    espace-rhum .er-combat-choix-ph {
      width: 28px; height: 28px; border-radius: 50%; flex: none;
      background-size: cover; background-position: center top;
      background-color: rgba(255, 255, 255, 0.07);
    }
    espace-rhum .er-combat-choix-ph--vide { border: 1px dashed var(--er-border-soft); }
    espace-rhum .er-combat-choix-nom { flex: 1; min-width: 0; }
    espace-rhum .er-combat-choix-ok { flex: none; display: grid; place-items: center; width: 16px; height: 16px; }
    espace-rhum .er-combat-choix-ok svg {
      width: 14px; height: 14px; fill: none; stroke: var(--cc);
      stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-combat-ligne {
      display: grid; align-items: end; gap: 12px;
      grid-template-columns: 150px minmax(0, 1fr) minmax(0, 1.5fr) auto 128px;
      padding: 12px 14px; border-radius: var(--er-radius-sm);
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-combat-ligne--lecture { grid-template-columns: 150px minmax(0, 1.2fr) minmax(0, 1fr); align-items: center; }
    espace-rhum .er-combat-ligne--vote { grid-template-columns: 150px minmax(0, 1fr) 128px; align-items: center; }
    espace-rhum .er-combat-classe {
      font-family: var(--er-font-body); font-size: 13px; font-weight: 800;
      letter-spacing: 0.04em; text-transform: uppercase; color: var(--er-white);
    }
    espace-rhum .er-combat-champ, espace-rhum .er-combat-cell, espace-rhum .er-combat-laureat {
      display: flex; flex-direction: column; gap: 5px; min-width: 0;
    }
    espace-rhum .er-combat-cell-label {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-combat-optionnel {
      font-size: 9px; letter-spacing: 0.06em; padding: 1px 6px; margin-left: 4px;
      border-radius: var(--er-radius-full); background: rgba(255,255,255,.08);
      color: var(--er-text-muted); font-weight: 700;
    }
    espace-rhum .er-combat-cell-val {
      font-family: var(--er-font-body); font-size: 13.5px; color: var(--er-text-primary);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    espace-rhum .er-combat-cell-val.est-juste { color: var(--er-amber-bright); font-weight: 700; }

    espace-rhum .er-combat-champ .er-pick-btn {
      padding: 9px 11px; border-radius: var(--er-radius-xs); font-size: 13.5px;
    }
    espace-rhum .er-combat-mot {
      width: 100%; box-sizing: border-box; padding: 9px 11px;
      font-family: var(--er-font-body); font-size: 13.5px; color: var(--er-text-primary);
      background: rgba(255,255,255,.05); border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-xs);
    }
    espace-rhum .er-combat-mot::placeholder { color: var(--er-text-muted); }
    espace-rhum .er-combat-mot:focus-visible {
      outline: none; border-color: var(--er-teal); box-shadow: 0 0 0 3px rgba(93, 191, 192, 0.18);
    }

    

    espace-rhum .er-combat-bulletin { display: flex; flex-wrap: wrap; gap: 8px; }
    espace-rhum .er-combat-choix {
      padding: 8px 15px; font-family: var(--er-font-body); font-size: 13px;
      font-weight: 600; cursor: pointer; color: var(--er-text-secondary);
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-full);
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-combat-choix:hover{ border-color: var(--er-border-hover); }}
    espace-rhum .er-combat-choix.is-on {
      background: var(--er-amber-bright); border-color: var(--er-amber-bright);
      color: var(--er-bg-base); font-weight: 800;
    }
    espace-rhum .er-combat-choix:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    espace-rhum .er-combat-valider {
      padding: 9px 16px; font-family: var(--er-font-body); font-size: 12px;
      font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
      cursor: pointer; white-space: nowrap;
      color: var(--er-bg-base); background: var(--er-teal); border: none;
      border-radius: var(--er-radius-btn);
      transition: filter var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-combat-valider:hover{ filter: brightness(1.08); }}
    espace-rhum .er-combat-valider:disabled { opacity: .55; cursor: default; }
    espace-rhum .er-combat-valider:focus-visible { outline: 2px solid var(--er-white); outline-offset: 2px; }

    espace-rhum .er-combat-etat {
      font-family: var(--er-font-body); font-size: 11.5px; line-height: 1.35;
      color: var(--er-text-muted); min-height: 16px;
    }
    espace-rhum .er-combat-etat[data-tone="ok"]    { color: var(--er-teal); font-weight: 700; }
    espace-rhum .er-combat-etat[data-tone="error"] { color: #ff6b6b; }

    espace-rhum .er-combat-laureat-nom {
      font-family: var(--er-font-display); font-style: italic; font-size: 19px;
      font-weight: 700; color: var(--er-amber-bright);
    }
    espace-rhum .er-combat-laureat-voix {
      font-family: var(--er-font-body); font-size: 11.5px; color: var(--er-text-muted);
      font-variant-numeric: tabular-nums;
    }

    @media (max-width: 1100px) {
      espace-rhum .er-combat-ligne,
      espace-rhum .er-combat-ligne--lecture,
      espace-rhum .er-combat-ligne--vote { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: end; }
      espace-rhum .er-combat-classe { grid-column: 1 / -1; }
      espace-rhum .er-combat-bulletin,
      espace-rhum .er-combat-valider,
      espace-rhum .er-combat-etat { grid-column: 1 / -1; }
      espace-rhum .er-combat-valider { width: 100%; }
    }
    @media (max-width: 640px) {
      espace-rhum .er-combat-ligne,
      espace-rhum .er-combat-ligne--lecture,
      espace-rhum .er-combat-ligne--vote { grid-template-columns: minmax(0, 1fr); }
      espace-rhum .er-combat-tete { flex-direction: column; gap: 10px; }
      espace-rhum .er-combat-jauge { text-align: left; }
      espace-rhum .er-combat-champ .er-pick-btn,
      espace-rhum .er-combat-mot { font-size: 15px; padding: 12px; }
      espace-rhum .er-combat-choix { padding: 12px 16px; font-size: 14px; }
      espace-rhum .er-combat-valider { padding: 13px 16px; }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-combat-choix, espace-rhum .er-combat-valider { transition: none; }
    }

    


    espace-rhum .er-widget--pronos { grid-column: span 12; overflow: visible; }
    espace-rhum .er-pronos-tete {
      display: flex; align-items: flex-start; justify-content: space-between;
      gap: 16px; margin-bottom: 6px;
    }
    espace-rhum .er-pronos-eyebrow {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-amber);
    }
    espace-rhum .er-pronos-titre {
      font-family: var(--er-font-display); font-style: italic; font-size: 24px;
      font-weight: 700; color: var(--er-white); margin: 4px 0 0;
    }
    espace-rhum .er-pronos-jauge {
      flex: 0 0 auto; text-align: right; font-family: var(--er-font-body);
    }
    espace-rhum .er-pronos-jauge-val {
      display: block; font-size: 26px; font-weight: 800; color: var(--er-teal);
      font-variant-numeric: tabular-nums;
    }
    espace-rhum .er-pronos-jauge-tot { font-size: 16px; color: var(--er-text-muted); }
    espace-rhum .er-pronos-jauge-lab {
      font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-pronos-sub {
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.5;
      color: var(--er-text-secondary); margin: 0 0 18px;
    }
    



    espace-rhum .er-pronos-sub[data-urgent="alerte"] { color: var(--er-amber-bright); }
    espace-rhum .er-pronos-sub[data-urgent="final"] {
      color: var(--er-amber-bright); font-weight: 700;
      font-variant-numeric: tabular-nums;
    }

    espace-rhum .er-pronos-grille { display: flex; flex-direction: column; gap: 10px; }
    espace-rhum .er-pronos-ligne {
      display: grid; align-items: end; gap: 12px;
      grid-template-columns: 150px minmax(0, 1.15fr) minmax(0, 1.25fr) auto 116px;
      padding: 12px 14px; border-radius: var(--er-radius-sm);
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-pronos-ligne--lecture { grid-template-columns: 150px repeat(3, minmax(0, 1fr)) auto; align-items: center; }
    espace-rhum .er-pronos-classe {
      font-family: var(--er-font-body); font-size: 13px; font-weight: 800;
      letter-spacing: 0.04em; text-transform: uppercase; color: var(--er-white);
    }
    espace-rhum .er-pronos-champ, espace-rhum .er-pronos-cell { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
    espace-rhum .er-pronos-cell-label {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-pronos-cell-val {
      font-family: var(--er-font-body); font-size: 13.5px; color: var(--er-text-primary);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
     
    espace-rhum .er-pronos-cell-val.est-juste { color: var(--er-amber-bright); font-weight: 700; }

    


    espace-rhum .er-pronos-champ .er-pick-btn {
      padding: 9px 11px; border-radius: var(--er-radius-xs); font-size: 13.5px;
    }
    


    espace-rhum .er-pronos-quand { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: 7px; }
    espace-rhum .er-pronos-quand .er-pick-list { min-width: 122px; }

    espace-rhum .er-pronos-valider {
      padding: 9px 16px; font-family: var(--er-font-body); font-size: 12px;
      font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
      cursor: pointer; white-space: nowrap;
      color: var(--er-bg-base); background: var(--er-teal); border: none;
      border-radius: var(--er-radius-btn);
      transition: filter var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pronos-valider:hover{ filter: brightness(1.08); }}
    espace-rhum .er-pronos-valider:disabled { opacity: .55; cursor: default; }
    espace-rhum .er-pronos-valider:focus-visible { outline: 2px solid var(--er-white); outline-offset: 2px; }

    espace-rhum .er-pronos-etat {
      font-family: var(--er-font-body); font-size: 11.5px; line-height: 1.35;
      color: var(--er-text-muted); min-height: 16px;
    }
    espace-rhum .er-pronos-etat[data-tone="ok"]    { color: var(--er-teal); font-weight: 700; }
    espace-rhum .er-pronos-etat[data-tone="error"] { color: #ff6b6b; }

    espace-rhum .er-pronos-points {
      font-family: var(--er-font-body); font-size: 15px; font-weight: 800;
      color: var(--er-amber-bright); white-space: nowrap; font-variant-numeric: tabular-nums;
    }
    espace-rhum .er-pronos-points--vide { min-width: 34px; }

    @media (max-width: 1100px) {
      espace-rhum .er-pronos-ligne,
      espace-rhum .er-pronos-ligne--lecture {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        align-items: end;
      }
      espace-rhum .er-pronos-classe { grid-column: 1 / -1; }
      espace-rhum .er-pronos-valider { grid-column: 1 / -1; width: 100%; }
      espace-rhum .er-pronos-etat, espace-rhum .er-pronos-points { grid-column: 1 / -1; }
    }
    @media (max-width: 640px) {
      espace-rhum .er-pronos-ligne,
      espace-rhum .er-pronos-ligne--lecture { grid-template-columns: minmax(0, 1fr); }
      espace-rhum .er-pronos-tete { flex-direction: column; gap: 10px; }
      espace-rhum .er-pronos-jauge { text-align: left; }
       
      espace-rhum .er-pronos-champ .er-pick-btn { font-size: 15px; padding: 12px; }
      espace-rhum .er-pronos-quand { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
      espace-rhum .er-pronos-valider { padding: 13px 16px; }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-pronos-valider { transition: none; }
    }

    


    espace-rhum .er-widget--roue { grid-column: span 12; }
    espace-rhum .er-roue-inner {
      display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
    }
    espace-rhum .er-roue-plateau {
      position: relative; flex: 0 0 auto; width: 260px; height: 260px;
    }
    espace-rhum .er-roue-svg { width: 100%; height: 100%; display: block; }
    espace-rhum [data-roue-disque] { transform-box: view-box; transform-origin: 130px 130px; }
    espace-rhum .er-roue-txt {
      font-family: var(--er-font-body); font-size: 11px; font-weight: 700;
      fill: var(--er-bg-base); text-anchor: middle; dominant-baseline: middle;
    }
    

    espace-rhum .er-roue-aiguille {
      position: absolute; top: -4px; left: 50%; transform: translateX(-50%);
      width: 0; height: 0; z-index: 2;
      border-left: 11px solid transparent; border-right: 11px solid transparent;
      border-top: 20px solid var(--er-amber-bright);
      filter: drop-shadow(0 2px 4px rgba(0,0,0,.5));
    }
    espace-rhum .er-roue-texte { flex: 1 1 260px; min-width: 0; }
    espace-rhum .er-roue-eyebrow {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-amber);
    }
    espace-rhum .er-roue-titre {
      font-family: var(--er-font-display); font-style: italic; font-size: 24px;
      font-weight: 700; color: var(--er-white); margin: 4px 0 8px;
    }
    espace-rhum .er-roue-sub {
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.5;
      color: var(--er-text-secondary); margin: 0 0 16px; max-width: 46ch;
    }
    espace-rhum .er-roue-resultat {
      padding: 14px 16px; margin-bottom: 16px; border-radius: var(--er-radius-md);
      background: rgba(252, 241, 80, 0.07); border: 1px dashed var(--er-amber-bright);
    }
    espace-rhum .er-roue-resultat-lot {
      font-family: var(--er-font-body); font-size: 16px; font-weight: 800;
      color: var(--er-amber-bright); margin-bottom: 3px;
    }
    espace-rhum .er-roue-resultat-msg {
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.45;
      color: var(--er-text-secondary);
    }
    espace-rhum .er-roue-resultat-msg:empty { display: none; }
    espace-rhum .er-roue-btn:disabled { opacity: .55; cursor: default; transform: none; }
    espace-rhum .er-roue-compte {
      margin-top: 9px; font-family: var(--er-font-body); font-size: 12px;
      color: var(--er-text-muted);
    }

    @media (max-width: 860px) {
      espace-rhum .er-roue-inner { gap: 20px; justify-content: center; }
      espace-rhum .er-roue-plateau { width: 210px; height: 210px; }
      espace-rhum .er-roue-texte { flex: 1 1 100%; text-align: center; }
      espace-rhum .er-roue-sub { margin-left: auto; margin-right: auto; }
      espace-rhum .er-roue-btn { width: 100%; justify-content: center; }
    }
    @media (prefers-reduced-motion: reduce) {
      

      espace-rhum [data-roue-disque] { transition: none !important; }
    }

    



    espace-rhum .er-sidebar-pack-btn { width: 100%; justify-content: center; margin-top: 14px; }

    espace-rhum .er-pack {
      position: fixed; inset: 0; z-index: 10001;
      display: flex; align-items: center; justify-content: center; padding: 20px;
      opacity: 0; pointer-events: none;
      transition: opacity var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-pack[data-open="true"] { opacity: 1; pointer-events: auto; }
    espace-rhum .er-pack-backdrop {
      position: absolute; inset: 0; background: var(--er-bg-overlay);
      -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);
    }
    espace-rhum .er-pack-panel {
      position: relative; width: 480px; max-width: 100%; max-height: 90vh; max-height: 90dvh; overflow-y: auto;
      background: linear-gradient(160deg, #0F2748, #0A1A35);
      border: 1px solid var(--er-border-soft); border-radius: var(--er-radius-lg);
      padding: 26px; box-shadow: var(--er-shadow-md);
      transform: scale(0.94); transition: transform var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-pack[data-open="true"] .er-pack-panel { transform: scale(1); }
    espace-rhum .er-pack-close {
      position: absolute; top: 14px; right: 14px; width: 32px; height: 32px;
      border-radius: 50%; border: 1px solid var(--er-border-soft);
      background: rgba(255, 255, 255, 0.04); color: var(--er-text-muted);
      display: flex; align-items: center; justify-content: center; cursor: pointer;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pack-close:hover{ background: rgba(255, 255, 255, 0.1); color: var(--er-text-secondary); }}
    espace-rhum .er-pack-close svg { width: 15px; height: 15px; }
    espace-rhum .er-pack-eyebrow {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-amber);
    }
    espace-rhum .er-pack-title {
      font-family: var(--er-font-display); font-style: italic; font-size: 21px;
      font-weight: 700; color: var(--er-white); margin: 4px 0 6px;
    }
    espace-rhum .er-pack-sub {
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5;
      color: var(--er-text-secondary); margin: 0 0 18px;
    }

    espace-rhum .er-pack-alert {
      display: flex; gap: 10px; align-items: flex-start;
      margin: 0 0 16px; padding: 12px 13px; border-radius: var(--er-radius-sm);
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
      border-left-width: 3px; text-align: left;
    }
    espace-rhum .er-pack-alert[data-tone="error"] { border-left-color: var(--er-danger); }
    espace-rhum .er-pack-alert[data-tone="wait"]  { border-left-color: var(--er-amber); }
    espace-rhum .er-pack-alert-ico { color: var(--er-text-secondary); flex: 0 0 auto; }
    espace-rhum .er-pack-alert-ico svg { width: 16px; height: 16px; display: block; }
    espace-rhum .er-pack-alert-body { display: flex; flex-direction: column; gap: 3px; }
    espace-rhum .er-pack-alert-title { font-family: var(--er-font-body); font-size: 12.5px; font-weight: 700; color: var(--er-white); }
    espace-rhum .er-pack-alert-text { font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.45; color: var(--er-text-secondary); }

    

    espace-rhum .er-pack-code {
      display: flex; flex-direction: column; gap: 6px; align-items: center;
      padding: 22px 16px; border-radius: var(--er-radius-md); text-align: center;
      background: rgba(252, 241, 80, 0.07); border: 1px dashed var(--er-amber-bright);
    }
    espace-rhum .er-pack-code-label {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.12em; text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-pack-code-value {
      font-family: var(--er-font-body); font-size: 24px; font-weight: 800;
      letter-spacing: 0.06em; color: var(--er-amber-bright);
      user-select: all; -webkit-user-select: all; word-break: break-all;
    }
    espace-rhum .er-pack-code-hint { display: block; text-align: center; font-family: var(--er-font-body); font-size: 11.5px; color: var(--er-text-muted); }

    




    espace-rhum .er-pack-dons { list-style: none; margin: 0 0 18px; padding: 0; display: grid; gap: 10px; }
    espace-rhum .er-pack-dons[hidden] { display: none; }
    espace-rhum .er-pack-don {
      display: flex; gap: 12px; align-items: flex-start;
      padding: 12px 14px; border-radius: var(--er-radius-sm);
      background: rgba(255, 255, 255, 0.04); border: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-pack-don-ico {
      flex: 0 0 auto; width: 34px; height: 34px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      background: rgba(252, 241, 80, 0.1); color: var(--er-amber-bright);
    }
    espace-rhum .er-pack-don-ico svg { width: 17px; height: 17px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    espace-rhum .er-pack-don-txt { display: flex; flex-direction: column; gap: 2px; font-family: var(--er-font-body); }
    espace-rhum .er-pack-don-txt strong { font-size: 13px; font-weight: 700; color: var(--er-white); }
    espace-rhum .er-pack-don-txt span { font-size: 12.5px; line-height: 1.45; color: var(--er-text-secondary); }

    espace-rhum .er-pack-regle {
      display: flex; flex-direction: column; gap: 3px; margin: 0 0 16px;
      padding: 11px 13px; border-radius: var(--er-radius-sm);
      background: rgba(93, 191, 192, 0.08); border-left: 3px solid var(--er-teal);
      font-family: var(--er-font-body);
    }
    espace-rhum .er-pack-regle strong { font-size: 12.5px; font-weight: 700; color: var(--er-white); }
    espace-rhum .er-pack-regle span { font-size: 12.5px; line-height: 1.45; color: var(--er-text-secondary); }

    espace-rhum .er-pack-recu { display: flex; flex-direction: column; gap: 16px; }
    espace-rhum .er-pack-recu[hidden] { display: none; }
    espace-rhum .er-pack-code-classe {
      padding: 3px 10px; border-radius: var(--er-radius-full);
      background: rgba(252, 241, 80, 0.14); color: var(--er-amber-bright);
      font-family: var(--er-font-body); font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;
    }
    espace-rhum .er-pack-code-classe[hidden] { display: none; }
    espace-rhum .er-pack-copier {
      display: inline-flex; align-items: center; gap: 7px; margin-top: 6px;
      padding: 8px 14px; border-radius: var(--er-radius-full); cursor: pointer;
      font-family: var(--er-font-body); font-size: 12px; font-weight: 700;
      color: var(--er-text-primary); background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--er-border-soft);
      transition: background var(--er-dur-fast) var(--er-ease-smooth), border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pack-copier:hover{ background: rgba(255, 255, 255, 0.12); border-color: var(--er-border-hover); }}
    espace-rhum .er-pack-copier.is-ok { color: var(--er-teal); border-color: var(--er-teal); }
    espace-rhum .er-pack-copier-ico svg { width: 14px; height: 14px; display: block; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

    espace-rhum .er-pack-activation {
      margin: 0; font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5;
      color: var(--er-text-secondary); text-align: center;
    }
    espace-rhum .er-pack-ou .er-pack-label { margin-bottom: 9px; }
    espace-rhum .er-pack-etapes { margin: 0; padding: 0; list-style: none; counter-reset: etape; display: grid; gap: 9px; }
    espace-rhum .er-pack-etapes li {
      counter-increment: etape; position: relative; padding-left: 32px;
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.5; color: var(--er-text-primary);
    }
    espace-rhum .er-pack-etapes li::before {
      content: counter(etape); position: absolute; left: 0; top: 0;
      width: 22px; height: 22px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: 800; color: var(--er-bg-base); background: var(--er-teal);
    }
    espace-rhum .er-pack-attention {
      display: flex; gap: 9px; align-items: flex-start; margin: 0;
      font-family: var(--er-font-body); font-size: 12px; line-height: 1.45; color: var(--er-text-muted);
    }
    espace-rhum .er-pack-attention-ico { flex: 0 0 auto; color: var(--er-amber); }
    espace-rhum .er-pack-attention-ico svg { width: 15px; height: 15px; display: block; }
    espace-rhum .er-pack-liens { display: flex; flex-direction: column; align-items: stretch; gap: 4px; }
    espace-rhum .er-pack-jouer { justify-content: center; text-decoration: none; }
    espace-rhum .er-pack-jouer[hidden], espace-rhum .er-pack-aide[hidden] { display: none; }
    espace-rhum .er-pack-aide {
      display: block; padding: 10px; text-align: center; text-decoration: underline; text-underline-offset: 3px;
      font-family: var(--er-font-body); font-size: 12.5px; font-weight: 600; color: var(--er-text-secondary);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pack-aide:hover{ color: var(--er-text-primary); }}

    espace-rhum .er-pack-field { display: block; margin-bottom: 18px; }
    espace-rhum .er-pack-label {
      display: block; margin-bottom: 7px; font-family: var(--er-font-body);
      font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
      text-transform: uppercase; color: var(--er-text-label);
    }
    



    espace-rhum .er-pack-field .er-pick-btn { padding: 10px 12px; border-radius: var(--er-radius-sm); }
    espace-rhum .er-pack-field .er-pick[data-invalid] .er-pick-btn {
      border-color: #ff6b6b; box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.15);
    }
    espace-rhum .er-pack-err { display: block; margin-top: 6px; font-family: var(--er-font-body); font-size: 11px; font-weight: 600; color: #ff6b6b; }

    espace-rhum .er-pack-quali { margin: 0 0 18px; padding: 0; border: none; }
    espace-rhum .er-pack-quali-legend {
      padding: 0; margin-bottom: 12px; font-family: var(--er-font-body);
      font-size: 12.5px; color: var(--er-text-secondary);
      display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
    }
    espace-rhum .er-pack-optionnel {
      font-size: 9.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
      padding: 2px 7px; border-radius: var(--er-radius-full);
      background: var(--er-surface); color: var(--er-text-muted);
    }
    espace-rhum .er-pack-q { margin-bottom: 13px; }
    espace-rhum .er-pack-q-label { display: block; margin-bottom: 7px; font-family: var(--er-font-body); font-size: 12.5px; color: var(--er-text-muted); }
    espace-rhum .er-pack-choices { display: flex; gap: 8px; flex-wrap: wrap; }
    espace-rhum .er-pack-choice {
      padding: 7px 14px; font-family: var(--er-font-body); font-size: 12.5px;
      font-weight: 600; cursor: pointer; color: var(--er-text-secondary);
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-full);
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth),
                  color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pack-choice:hover{ border-color: var(--er-border-hover); }}
    espace-rhum .er-pack-choice.is-on {
      background: var(--er-amber-bright); border-color: var(--er-amber-bright);
      color: var(--er-bg-base); font-weight: 800;
    }
    espace-rhum .er-pack-choice:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    espace-rhum .er-pack-save { width: 100%; justify-content: center; }
    espace-rhum .er-pack-save:disabled { opacity: .6; cursor: default; transform: none; }
    espace-rhum .er-pack-later {
      width: 100%; margin-top: 9px; padding: 10px; cursor: pointer;
      font-family: var(--er-font-body); font-size: 12.5px;
      color: var(--er-text-muted); background: transparent; border: none;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pack-later:hover{ color: var(--er-text-primary); }}

    @media (max-width: 860px) {
      espace-rhum .er-pack { padding: 14px; }
      espace-rhum .er-pack-panel { padding: 22px 18px; }
      espace-rhum .er-pack-code-value { font-size: 21px; }
      espace-rhum .er-pack-copier { padding: 11px 18px; font-size: 13px; }
      espace-rhum .er-pack-aide { padding: 14px; }
      espace-rhum .er-pack-field .er-pick-btn { padding: 13px 12px; font-size: 15px; }
       
      espace-rhum .er-pack-choice { padding: 12px 16px; font-size: 13px; }
      espace-rhum .er-pack-later { padding: 14px; }
      espace-rhum .er-mobile-sheet-pack { width: 100%; justify-content: center; margin-bottom: 8px; }
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-pack,
      espace-rhum .er-pack-panel,
      espace-rhum .er-pack-choice { transition: none; }
      espace-rhum .er-pack-panel { transform: none; }
    }

     
    espace-rhum .er-prefs { position: fixed; inset: 0; z-index: 10001; display: grid; place-items: center; padding: 20px; opacity: 0; pointer-events: none; transition: opacity .28s var(--er-ease-entry); }
    espace-rhum .er-prefs[data-open="true"] { opacity: 1; pointer-events: auto; }
    espace-rhum .er-prefs-backdrop { position: absolute; inset: 0; background: rgba(6,12,28,.86); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
    espace-rhum .er-prefs-panel { position: relative; width: 100%; max-width: 640px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; background: linear-gradient(180deg,#123159 0%,#0F2345 60%,#0C1D3A 100%); border: 1px solid var(--er-border-soft); border-radius: var(--er-radius-lg); box-shadow: 0 16px 48px rgba(0,0,0,.55), 0 0 32px rgba(93,191,192,.18); transform: translateY(16px) scale(.985); transition: transform .3s var(--er-ease-entry); }
    espace-rhum .er-prefs[data-open="true"] .er-prefs-panel { transform: none; }
    espace-rhum .er-prefs-head { position: relative; padding: 24px 26px 18px; border-bottom: 1px solid var(--er-border-soft); background: radial-gradient(600px 120px at 15% 0%, rgba(93,191,192,.10), transparent); }
    espace-rhum .er-prefs-eyebrow { font-size: 11px; letter-spacing: .24em; text-transform: uppercase; color: var(--er-teal); font-weight: 600; }
    espace-rhum .er-prefs-title { font-family: var(--er-font-display); font-size: 28px; line-height: 1.05; margin-top: 7px; }
    espace-rhum .er-prefs-sub { margin-top: 7px; color: var(--er-text-secondary); font-size: 13px; max-width: 46ch; line-height: 1.5; }
    espace-rhum .er-prefs-close { position: absolute; top: 18px; right: 18px; width: 38px; height: 38px; border-radius: 50%; background: var(--er-surface); border: 1px solid var(--er-border-soft); color: var(--er-text-secondary); display: grid; place-items: center; cursor: pointer; transition: all .2s; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-close:hover{ background: rgba(230,57,70,.16); border-color: rgba(230,57,70,.4); color: #fff; transform: rotate(90deg); }}
    espace-rhum .er-prefs-close svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
    espace-rhum .er-prefs-body { padding: 20px 26px; overflow-y: auto; }
    espace-rhum .er-prefs-sec { margin-bottom: 22px; }
    espace-rhum .er-prefs-sec-title { font-size: 15px; font-weight: 700; display: flex; align-items: center; gap: 10px; margin-bottom: 5px; }
    espace-rhum .er-prefs-count { font-size: 12px; color: var(--er-teal); font-weight: 600; }
    espace-rhum .er-prefs-badge { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--er-amber); font-weight: 700; background: rgba(245,190,65,.12); border: 1px solid rgba(245,190,65,.28); padding: 3px 9px; border-radius: var(--er-radius-full); }
    espace-rhum .er-prefs-hint { font-size: 12px; color: var(--er-text-muted); margin-bottom: 12px; line-height: 1.5; }
    espace-rhum .er-prefs-chips { display: flex; flex-wrap: wrap; gap: 9px; }
    espace-rhum .er-prefs-chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: var(--er-surface); border: 1px solid var(--er-border-soft); border-radius: var(--er-radius-full); font: inherit; font-size: 12.5px; font-weight: 600; color: var(--er-text-secondary); cursor: pointer; transition: all .2s var(--er-ease-entry); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-chip:hover{ border-color: var(--er-border-hover); color: #fff; transform: translateY(-1px); }}
    espace-rhum .er-prefs-ci { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; }
    espace-rhum .er-prefs-chip[aria-pressed="true"] { color: #fff; border-color: var(--cc,var(--er-teal)); background: color-mix(in srgb, var(--cc,var(--er-teal)) 18%, var(--er-bg-card)); }
    espace-rhum .er-prefs-chip[aria-pressed="true"]::after { content: "✓"; font-size: 12px; color: var(--cc,var(--er-teal)); }
    espace-rhum .er-prefs-chip:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-prefs-search { position: relative; margin-bottom: 12px; }
    espace-rhum .er-prefs-search input { width: 100%; padding: 12px 15px 12px 42px; border-radius: var(--er-radius-md); background: var(--er-bg-card); border: 1px solid var(--er-border-soft); color: #fff; font: inherit; font-size: 14px; }
    espace-rhum .er-prefs-search input:focus { outline: none; border-color: var(--er-teal); box-shadow: 0 0 0 3px var(--er-teal-soft); }
    espace-rhum .er-prefs-search-field { position: relative; }
    espace-rhum .er-prefs-sico { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; stroke: var(--er-text-muted); }
    espace-rhum .er-prefs-res { margin-top: 8px; background: var(--er-bg-card); border: 1px solid var(--er-border-soft); border-radius: var(--er-radius-md); overflow: hidden auto; max-height: 256px; display: none; }
    espace-rhum .er-prefs-res.open { display: block; }
    espace-rhum .er-prefs-ri { display: flex; align-items: center; gap: 11px; padding: 8px 13px; width: 100%; text-align: left; background: none; border: 0; color: inherit; font: inherit; cursor: pointer; }
    espace-rhum .er-prefs-ri + .er-prefs-ri { border-top: 1px solid var(--er-border-soft); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-ri:hover{ background: var(--er-surface); }}
    espace-rhum .er-prefs-empty { padding: 14px; color: var(--er-text-muted); font-size: 13px; text-align: center; }
    espace-rhum .er-prefs-av { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; flex-shrink: 0; background: var(--er-bg-elevated); box-shadow: 0 0 0 2px var(--cc,var(--er-teal)), 0 2px 6px rgba(0,0,0,.35); }
    espace-rhum .er-prefs-who { display: flex; flex-direction: column; min-width: 0; }
    espace-rhum .er-prefs-nm { font-size: 13.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    espace-rhum .er-prefs-cl { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: var(--er-text-muted); text-transform: uppercase; letter-spacing: .05em; }
    espace-rhum .er-prefs-cmini { width: 13px; height: 13px; object-fit: contain; }
    espace-rhum .er-prefs-plus { margin-left: auto; font-size: 12px; font-weight: 700; color: var(--er-teal); white-space: nowrap; }
    espace-rhum .er-prefs-favs { display: flex; flex-direction: column; gap: 8px; }
    espace-rhum .er-prefs-fav { display: flex; align-items: center; gap: 11px; padding: 8px 11px; background: var(--er-surface); border: 1px solid var(--er-border-soft); border-radius: 14px 3px 10px 3px; }
    espace-rhum .er-prefs-rm { margin-left: auto; width: 30px; height: 30px; border-radius: 50%; background: none; border: 1px solid var(--er-border-soft); color: var(--er-text-muted); display: grid; place-items: center; cursor: pointer; transition: all .18s; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-rm:hover{ background: rgba(230,57,70,.16); border-color: rgba(230,57,70,.4); color: #fff; }}
    espace-rhum .er-prefs-rm svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
    espace-rhum .er-prefs-fav-empty { padding: 16px; text-align: center; color: var(--er-text-muted); font-size: 13px; border: 1px dashed var(--er-border-soft); border-radius: var(--er-radius-md); }
    espace-rhum .er-prefs-foot { padding: 16px 26px; border-top: 1px solid var(--er-border-soft); display: flex; align-items: center; gap: 12px; background: linear-gradient(0deg,#0C1D3A,transparent); }
    espace-rhum .er-prefs-note { font-size: 12px; color: var(--er-text-muted); flex: 1; line-height: 1.4; }
    espace-rhum .er-prefs-btn { padding: 12px 20px; border-radius: 3px 15px 3px 15px; font: inherit; font-weight: 700; font-size: 13px; cursor: pointer; border: 1px solid transparent; }
    espace-rhum .er-prefs-btn--ghost { background: transparent; border-color: var(--er-border-soft); color: var(--er-text-secondary); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-btn--ghost:hover{ border-color: var(--er-border-hover); }}
    espace-rhum .er-prefs-btn--save { color: #06283b; background: linear-gradient(135deg,#7BD3D0,#5DBFC0); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-btn--save:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(93,191,192,.4); }}
    espace-rhum .er-prefs-btn--save:disabled { opacity: .6; transform: none; box-shadow: none; cursor: default; }
    




    espace-rhum .er-pick { position: relative; }
    espace-rhum .er-pick-btn {
      width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px;
      padding: 11px 13px; cursor: pointer; text-align: left;
      background: var(--er-surface);
      border: 1px solid var(--er-border-soft);
      border-radius: 10px;
      font-family: var(--er-font-body); font-size: 14px;
      color: var(--er-text-primary);
      transition: border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pick-btn:hover{ border-color: var(--er-border-hover); }}
    espace-rhum .er-pick-btn[aria-expanded="true"] { border-color: var(--er-teal); }
    espace-rhum .er-pick-btn:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-pick-btn svg { width: 15px; height: 15px; flex: 0 0 15px; color: var(--er-text-muted); }
    espace-rhum .er-pick-val { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    espace-rhum .er-pick-val[data-empty="true"] { color: var(--er-text-muted); }

    espace-rhum .er-pick-list {
      position: absolute; z-index: 30; left: 0; right: 0; top: calc(100% + 5px);
      max-height: 232px; overflow-y: auto;
      



      padding: 0;
      background: #10233f;
      border: 1px solid rgba(93, 191, 192, 0.35);
      border-radius: 10px;
      box-shadow: 0 14px 34px rgba(3, 12, 28, 0.55);
    }
    

    espace-rhum .er-pick-opts { padding: 5px; }
    


    espace-rhum .er-pick-list--haut { top: auto; bottom: calc(100% + 5px); }
    






    espace-rhum .er-pick-list--portail {
      position: fixed; z-index: 10003;
      left: var(--er-pick-x, 0); top: var(--er-pick-y, 0);
      right: auto; width: var(--er-pick-w, 320px);
    }
    espace-rhum .er-pick-list--portail.er-pick-list--haut {
      top: auto; bottom: calc(100vh - var(--er-pick-haut, 0px));
    }
    















    espace-rhum .er-pick-voile {
      position: fixed; inset: 0; z-index: 10002;
      background: rgba(3, 12, 28, 0.6);
      -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px);
      animation: er-pick-voile-in 0.18s var(--er-ease-smooth, ease-out);
    }
    @keyframes er-pick-voile-in { from { opacity: 0; } to { opacity: 1; } }
    

    espace-rhum .er-pick-fermer { display: none; }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-pick-voile { animation: none; }
    }
    espace-rhum .er-pick--vide .er-pick-btn { cursor: default; opacity: .6; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pick--vide .er-pick-btn:hover{ border-color: var(--er-border-soft); }}
    espace-rhum .er-pick-opt {
      display: block; width: 100%; text-align: left;
      padding: 9px 11px; border: 0; border-radius: 7px; cursor: pointer;
      background: transparent;
      font-family: var(--er-font-body); font-size: 13px;
      color: var(--er-text-secondary);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-pick-opt:hover{ background: rgba(255, 255, 255, 0.06); color: var(--er-white); }}
    espace-rhum .er-pick-opt[aria-selected="true"] {
      background: rgba(93, 191, 192, 0.16); color: var(--er-white); font-weight: 700;
    }
    espace-rhum .er-pick-opt:focus-visible { outline: 2px solid var(--er-teal); outline-offset: -2px; }

    

    espace-rhum .er-datepick { position: relative; }
    


    espace-rhum .er-datepick-field {
      display: flex; align-items: stretch;
      background: var(--er-surface);
      border: 1px solid var(--er-border-soft);
      border-radius: 10px;
      transition: border-color var(--er-dur-fast) var(--er-ease-smooth),
                  box-shadow var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-datepick-field:focus-within {
      border-color: var(--er-teal); box-shadow: 0 0 0 3px rgba(93, 191, 192, 0.18);
    }
    espace-rhum .er-datepick-text {
      flex: 1; min-width: 0; padding: 11px 13px;
      background: none; border: 0; outline: none;
      font-family: var(--er-font-body); font-size: 14px;
      color: var(--er-text-primary);
      font-variant-numeric: tabular-nums; letter-spacing: 0.02em;
    }
    espace-rhum .er-datepick-text::placeholder { color: var(--er-text-muted); letter-spacing: 0.06em; }
    espace-rhum .er-datepick-field:has(.er-datepick-text[aria-invalid="true"]) { border-color: #ff6b6b; }
    espace-rhum .er-datepick-open {
      flex: 0 0 auto; width: 42px; padding: 0; cursor: pointer;
      display: grid; place-items: center;
      background: none; border: 0; border-left: 1px solid var(--er-border-soft);
      color: var(--er-text-muted);
      transition: color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-datepick-open:hover{ color: var(--er-teal); }}
    espace-rhum .er-datepick-open:focus-visible { outline: 2px solid var(--er-teal); outline-offset: -2px; }
    espace-rhum .er-datepick-open svg { width: 16px; height: 16px; display: block; }
    espace-rhum .er-datepick-aide {
      margin: 6px 2px 0; font-family: var(--er-font-body); font-size: 10.5px;
      line-height: 1.4; color: var(--er-text-muted);
    }
    espace-rhum .er-datepick-aide[data-err="true"] { color: #ff9c92; font-weight: 700; }
    

    espace-rhum .er-datepick-panel {
      position: absolute; z-index: 30; left: 0; top: calc(100% + 5px);
      width: min(100%, 368px);
      padding: 12px;
      background: #10233f;
      border: 1px solid rgba(93, 191, 192, 0.35);
      border-radius: 12px;
      box-shadow: 0 14px 34px rgba(3, 12, 28, 0.55);
    }
    espace-rhum .er-datepick-head { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
    espace-rhum .er-pick--inline .er-pick-btn { padding: 8px 10px; font-size: 12.5px; border-radius: 8px; }
    espace-rhum .er-datepick-week {
      display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 4px;
    }
    espace-rhum .er-datepick-week span {
      text-align: center; font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.06em; color: var(--er-text-muted);
    }
    espace-rhum .er-datepick-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
    espace-rhum .er-datepick-day {
      height: 40px; display: grid; place-items: center;
      border: 0; border-radius: 7px; cursor: pointer; background: transparent;
      font-family: var(--er-font-body); font-size: 12.5px; color: var(--er-text-secondary);
    }
    espace-rhum .er-datepick-day.is-void { cursor: default; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-datepick-day:hover{ background: rgba(255, 255, 255, 0.07); color: var(--er-white); }}
    espace-rhum .er-datepick-day[aria-selected="true"] {
      background: var(--er-teal); color: #06283b; font-weight: 800;
    }
    espace-rhum .er-datepick-day:focus-visible { outline: 2px solid var(--er-teal); outline-offset: -2px; }
    espace-rhum .er-datepick-hint {
      grid-column: 1 / -1; margin: 10px 0; text-align: center;
      font-family: var(--er-font-body); font-size: 12px; color: var(--er-text-muted);
    }
    espace-rhum .er-datepick-foot {
      display: flex; justify-content: flex-end; margin-top: 8px;
      padding-top: 8px; border-top: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-datepick-clear {
      border: 0; background: none; cursor: pointer; padding: 4px 6px;
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 700; color: var(--er-text-muted);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-datepick-clear:hover{ color: var(--er-white); }}

    



    


    espace-rhum .er-prefs-tetes {
      display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 22px;
    }
    espace-rhum .er-prefs-tete {
      position: relative; display: block; width: 100%; text-align: left;
      padding: 16px 34px 16px 16px; cursor: pointer;
      background: var(--er-surface); border: 1px solid var(--er-border-soft);
      border-radius: 12px; font-family: var(--er-font-body); color: inherit;
      transition: border-color var(--er-dur-fast) var(--er-ease-smooth),
                  transform var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-tete:hover{ border-color: var(--er-border-hover); transform: translateY(-2px); }}
    espace-rhum .er-prefs-tete:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-prefs-tete-ico {
      display: grid; place-items: center; width: 34px; height: 34px;
      border-radius: 10px; margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.06); color: var(--er-text-secondary);
    }
    espace-rhum .er-prefs-tete-ico svg { width: 17px; height: 17px; }
    espace-rhum .er-prefs-tete-titre { display: block; font-size: 14px; font-weight: 700; }
    espace-rhum .er-prefs-tete-hint {
      display: block; margin-top: 3px; font-size: 12px; line-height: 1.5; color: var(--er-text-muted);
    }
    espace-rhum .er-prefs-tete-fleche {
      position: absolute; right: 13px; top: 15px; color: var(--er-text-muted);
    }
    espace-rhum .er-prefs-tete-fleche svg { width: 15px; height: 15px; display: block; }

    



    espace-rhum .er-prefs-tete--maj {
      background: linear-gradient(150deg, rgba(252, 241, 80, 0.10), var(--er-surface) 62%);
      border-color: rgba(252, 241, 80, 0.24);
    }
    espace-rhum .er-prefs-tete--maj .er-prefs-tete-ico {
      background: rgba(252, 241, 80, 0.14); color: var(--er-amber-bright);
    }
    espace-rhum .er-prefs-tete--sobre { background: rgba(255, 255, 255, 0.035); }
    espace-rhum .er-prefs-tete--sobre .er-prefs-tete-titre { color: var(--er-text-secondary); }
    espace-rhum .er-prefs-tete--sobre[aria-expanded="true"] .er-prefs-tete-fleche { transform: rotate(90deg); }
    espace-rhum .er-prefs-tete-fleche { transition: transform var(--er-dur-fast) var(--er-ease-smooth); }

    espace-rhum .er-prefs-jauge { display: block; margin-top: 13px; }
    espace-rhum .er-prefs-jauge-piste {
      display: block; height: 6px; border-radius: 99px;
      background: rgba(255, 255, 255, 0.10); overflow: hidden;
    }
    espace-rhum .er-prefs-jauge-piste i {
      display: block; height: 100%; border-radius: inherit;
      background: linear-gradient(90deg, var(--er-teal), var(--er-amber-bright));
      transition: width 0.4s var(--er-ease-smooth);
    }
    espace-rhum .er-prefs-jauge-txt {
      display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
      margin-top: 7px; font-size: 11px; font-weight: 700; color: var(--er-text-secondary);
    }
    espace-rhum .er-prefs-jauge-txt b {
      font-family: var(--er-font-display); font-style: italic; font-weight: 900;
      font-size: 18px; line-height: 1; color: var(--er-amber-bright);
    }
    espace-rhum .er-prefs-jauge-txt em { font-style: normal; color: var(--er-text-muted); }

    








    @media (max-width: 640px) {
      espace-rhum .er-prefs-tetes { grid-template-columns: 1fr; gap: 10px; }
      espace-rhum .er-prefs-tete { padding: 13px 32px 13px 13px; }
      espace-rhum .er-prefs-tete--maj .er-prefs-tete-hint { display: none; }
      espace-rhum .er-prefs-tete--maj .er-prefs-jauge { margin-top: 10px; }
      espace-rhum .er-prefs-tete-ico { width: 28px; height: 28px; margin-bottom: 8px; border-radius: 8px; }
      espace-rhum .er-prefs-tete-ico svg { width: 15px; height: 15px; }
      espace-rhum .er-prefs-jauge-txt { font-size: 10.5px; }
      espace-rhum .er-prefs-jauge-txt b { font-size: 16px; }
      





      espace-rhum .er-prefs-jauge-txt em { display: none; }
      espace-rhum .er-prefs-jauge-txt { justify-content: flex-start; gap: 5px; }
    }

     
    espace-rhum .er-prefs-profile {
      display: flex; align-items: center; justify-content: space-between; gap: 18px; flex-wrap: wrap;
      padding: 14px 15px; margin-bottom: 22px;
      background: var(--er-surface);
      border: 1px solid var(--er-border-soft);
      border-radius: 12px;
    }
    espace-rhum .er-prefs-profile-txt { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1 1 220px; }
    espace-rhum .er-prefs-profile-title { font-size: 13px; font-weight: 700; color: var(--er-text-secondary); }
    espace-rhum .er-prefs-profile-hint { font-size: 12px; line-height: 1.5; color: var(--er-text-muted); }
    espace-rhum .er-prefs-profile-btn {
      flex: 0 0 auto; display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 16px; cursor: pointer;
      background: transparent; border: 1px solid rgba(93, 191, 192, 0.5);
      border-radius: 3px 15px 3px 15px;
      font-family: var(--er-font-body); font-size: 13px; font-weight: 700; color: var(--er-teal);
      transition: background var(--er-dur-fast) var(--er-ease-smooth),
                  border-color var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-profile-btn:hover{ background: rgba(93, 191, 192, 0.12); border-color: var(--er-teal); }}
    espace-rhum .er-prefs-profile-btn svg { width: 15px; height: 15px; }

    


    espace-rhum .er-vil {
      margin-top: 32px; padding-top: 26px;
      border-top: 1px solid var(--er-border-soft);
      display: flex; flex-direction: column; gap: 16px;
      

    }
    espace-rhum .er-vil[data-village] .er-vil-kicker { color: #98ACF9; }
    espace-rhum .er-vil-head { display: flex; flex-direction: column; gap: 5px; }
    

    espace-rhum .er-vil--portrait { gap: 20px; }
    espace-rhum .er-vil-label em {
      font-style: normal; font-weight: 600; text-transform: none;
      letter-spacing: 0.01em; color: var(--er-text-muted); margin-left: 8px;
    }
    

    espace-rhum .er-vil-chip--multi[aria-pressed="true"]::after {
      content: ''; flex: 0 0 auto; width: 13px; height: 13px; margin-left: 2px;
      background: currentColor;
      -webkit-mask: var(--er-tick) center / contain no-repeat;
      mask: var(--er-tick) center / contain no-repeat;
    }
    espace-rhum .er-vil { --er-tick: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E"); }
    

    espace-rhum .er-vil-kicker {
      font-family: var(--er-font-display); font-style: italic; font-size: 21px;
      letter-spacing: 0.01em; text-transform: uppercase; line-height: 1;
      color: var(--er-amber);
    }
    espace-rhum .er-vil-intro {
      font-family: var(--er-font-body); font-size: 11.5px; line-height: 1.5;
      color: var(--er-text-muted); margin: 0;
    }
    espace-rhum .er-vil-q { display: flex; flex-direction: column; gap: 9px; }
    espace-rhum .er-vil-label {
      font-family: var(--er-font-body); font-size: 10px; font-weight: 800;
      letter-spacing: 0.12em; text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-vil-chips { display: flex; flex-wrap: wrap; gap: 8px; }
    espace-rhum .er-vil-chip {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 9px 15px 9px 12px; cursor: pointer;
      background: var(--er-surface);
      border: 1px solid var(--er-border-soft);
      border-radius: var(--er-radius-full);
      font-family: var(--er-font-body); font-size: 12.5px; font-weight: 600;
      color: var(--er-text-secondary);
      transition: transform 0.16s var(--er-ease-entry), border-color 0.2s var(--er-ease-entry),
                  background 0.2s var(--er-ease-entry), color 0.2s var(--er-ease-entry);
    }
    espace-rhum .er-vil-chip svg {
      width: 15px; height: 15px; flex: 0 0 15px;
      color: var(--er-text-muted); transition: color 0.2s var(--er-ease-entry);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vil-chip:hover{ border-color: var(--er-border-hover); color: #fff; transform: translateY(-1px); }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vil-chip:hover svg{ color: var(--er-text-secondary); }}
    espace-rhum .er-vil-chip:active { transform: translateY(0) scale(0.97); }
    

    espace-rhum .er-vil-chip[aria-pressed="true"] {
      background: var(--er-teal); border-color: var(--er-teal);
      color: #06283B; font-weight: 800;
      box-shadow: 0 4px 14px -6px rgba(93, 191, 192, 0.55);
    }
    espace-rhum .er-vil-chip[aria-pressed="true"] svg { color: #06283B; }
    espace-rhum .er-vil-chip:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-vil-autre { margin-top: 2px; }
    

    espace-rhum .er-vil-note {
      margin: 2px 0 0; padding: 8px 11px;
      background: var(--er-teal-soft); border-radius: 8px 2px 8px 2px;
      font-family: var(--er-font-body); font-size: 11px; line-height: 1.45;
      color: var(--er-text-secondary);
    }

     
    espace-rhum .er-vil-nudge {
      display: flex; gap: 12px; align-items: flex-start;
      padding: 13px 14px; border-radius: 10px;
      background: rgba(93, 191, 192, 0.09);
      border: 1px solid rgba(93, 191, 192, 0.32);
    }
    espace-rhum .er-vil-nudge-ico { flex: 0 0 20px; color: var(--er-teal); margin-top: 1px; }
    espace-rhum .er-vil-nudge-ico svg { width: 20px; height: 20px; display: block; }
    espace-rhum .er-vil-nudge-body { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
    espace-rhum .er-vil-nudge-title {
      font-family: var(--er-font-body); font-size: 12.5px; font-weight: 800; color: var(--er-white);
    }
    espace-rhum .er-vil-nudge-text {
      font-family: var(--er-font-body); font-size: 11.5px; line-height: 1.5;
      color: var(--er-text-secondary); margin: 0;
    }
    espace-rhum .er-vil-nudge-more {
      align-self: flex-start; margin-top: 7px;
      display: inline-flex; align-items: center; gap: 5px;
      padding: 7px 13px; cursor: pointer;
      border: 1px solid rgba(93, 191, 192, 0.45); border-radius: var(--er-radius-full);
      background: rgba(93, 191, 192, 0.1);
      font-family: var(--er-font-body); font-size: 11.5px; font-weight: 800;
      color: var(--er-teal);
      transition: background 0.2s var(--er-ease-entry), color 0.2s var(--er-ease-entry),
                  border-color 0.2s var(--er-ease-entry), transform 0.16s var(--er-ease-entry);
    }
    espace-rhum .er-vil-nudge-more svg { width: 12px; height: 12px; transition: transform 0.2s var(--er-ease-entry); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vil-nudge-more:hover{
      background: var(--er-teal); border-color: var(--er-teal); color: #06283b; transform: translateY(-1px);
    }}
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vil-nudge-more:hover svg{ transform: translateX(2px); }}
     
    espace-rhum .er-vil-tymal {
      flex: 0 0 54px; width: 54px; height: auto; align-self: center;
      object-fit: contain; display: block;
    }
    


    espace-rhum .er-vilmob-tymal {
      position: absolute; top: -54px; right: 78px;
      width: 96px; height: auto; object-fit: contain;
      z-index: 0;
      pointer-events: none; filter: drop-shadow(0 10px 20px rgba(3, 12, 28, 0.5));
    }
    @media (max-width: 520px) { espace-rhum .er-vilmob-tymal { width: 72px; top: -42px; right: 62px; } }

     
    espace-rhum .er-vilmob {
      position: fixed; inset: 0; z-index: 10040;
      display: grid; place-items: center; padding: 20px;
      opacity: 0; visibility: hidden;
      transition: opacity 0.2s var(--er-ease-smooth), visibility 0s 0.2s;
    }
    espace-rhum .er-vilmob[data-open="true"] {
      opacity: 1; visibility: visible;
      transition: opacity 0.25s var(--er-ease-entry), visibility 0s;
    }
    espace-rhum .er-vilmob-backdrop {
      position: absolute; inset: 0; background: rgba(5, 18, 43, 0.76);
      -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
    }
    

    espace-rhum .er-vilmob-panel {
      position: relative; width: min(560px, 100%); overflow: visible;
      padding: 30px 30px 24px;
      background: var(--er-bg-card);
      border: 1px solid var(--er-border-soft);
      border-radius: 3px 22px 3px 22px;
      box-shadow: 0 26px 70px rgba(3, 12, 28, 0.6);
    }
    espace-rhum .er-vilmob-close {
      position: absolute; top: 14px; right: 14px; z-index: 2;
      width: 32px; height: 32px; display: grid; place-items: center;
      border-radius: 50%; cursor: pointer;
      background: rgba(255, 255, 255, 0.06); border: 1px solid var(--er-border-soft);
      color: var(--er-text-muted);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vilmob-close:hover{ color: #fff; border-color: var(--er-border-hover); }}
    espace-rhum .er-vilmob-close svg { width: 15px; height: 15px; }
    espace-rhum .er-vilmob-eyebrow {
      font-family: var(--er-font-body); font-size: 9.5px; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-teal); margin-bottom: 6px;
    }
    espace-rhum .er-vilmob-title {
      font-family: var(--er-font-display); font-style: italic; text-transform: uppercase;
      font-size: clamp(20px, 3vw, 26px); line-height: 1.08;
      color: var(--er-text-primary); margin: 0 0 16px;
    }
    espace-rhum .er-vilmob-body p {
      font-family: var(--er-font-body); font-size: 13px; line-height: 1.6;
      color: var(--er-text-secondary); margin: 0 0 14px;
    }
    espace-rhum .er-vilmob-list { list-style: none; margin: 0 0 6px; padding: 0; display: grid; gap: 10px; }
    espace-rhum .er-vilmob-list li {
      position: relative; padding-left: 20px;
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.55;
      color: var(--er-text-secondary);
    }
    espace-rhum .er-vilmob-list li::before {
      content: ''; position: absolute; left: 0; top: 7px;
      width: 7px; height: 7px; border-radius: 2px; background: var(--er-teal);
    }
    espace-rhum .er-vilmob-list strong { color: var(--er-white); }
    


    espace-rhum .er-vilmob-scroll {
      position: relative; z-index: 1;
      max-height: min(80vh, 760px); overflow-y: auto;
      margin: -30px -30px -24px; padding: 30px 30px 24px;
      border-radius: inherit;
    }
    espace-rhum .er-vilmob-foot {
      display: flex; flex-direction: column; gap: 10px; align-items: stretch;
      margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--er-border-soft);
    }
    


    espace-rhum .er-vilmob-choice {
      padding: 13px 18px; cursor: pointer; border: 1px solid transparent;
      border-radius: 3px 15px 3px 15px; text-align: center;
      font-family: var(--er-font-body); font-size: 13.5px; font-weight: 800;
      transition: transform var(--er-dur-fast) var(--er-ease-smooth),
                  box-shadow var(--er-dur-fast) var(--er-ease-smooth);
    }
    espace-rhum .er-vilmob-choice--go {
      background: linear-gradient(135deg, #7BD3D0, #5DBFC0); color: #06283b;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vilmob-choice--go:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(93, 191, 192, 0.4); }}
    espace-rhum .er-vilmob-choice--car {
      background: #FFFFFF; color: #0B2545; border-color: rgba(255, 255, 255, 0.85);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-vilmob-choice--car:hover{ transform: translateY(-2px); box-shadow: 0 8px 22px rgba(255, 255, 255, 0.22); }}
    espace-rhum .er-vilmob-choice:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 3px; }
    @media (max-width: 520px) {
      espace-rhum .er-vilmob-panel { padding: 24px 20px 20px; }
      espace-rhum .er-vilmob-scroll { margin: -24px -20px -20px; padding: 24px 20px 20px; }
    }

     
    espace-rhum .er-prefs-sec--privacy { border-top: 1px solid var(--er-border-soft); padding-top: 18px; }
    espace-rhum .er-prefs-switch { display: flex; align-items: flex-start; gap: 12px; cursor: pointer; margin-bottom: 6px; }
    espace-rhum .er-prefs-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
    espace-rhum .er-prefs-switch-track { flex: 0 0 auto; width: 42px; height: 24px; border-radius: 999px; background: var(--er-border-soft); position: relative; transition: background var(--er-dur-fast) var(--er-ease-smooth); margin-top: 1px; }
    espace-rhum .er-prefs-switch-thumb { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: transform var(--er-dur-fast) var(--er-ease-smooth); }
    espace-rhum .er-prefs-switch input:checked + .er-prefs-switch-track { background: var(--er-teal); }
    espace-rhum .er-prefs-switch input:checked + .er-prefs-switch-track .er-prefs-switch-thumb { transform: translateX(18px); }
    espace-rhum .er-prefs-switch input:focus-visible + .er-prefs-switch-track { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-prefs-switch-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
    espace-rhum .er-prefs-switch-text { font-size: 13px; line-height: 1.45; color: var(--er-text-secondary); }
    


    espace-rhum .er-prefs-switch-hint { font-size: 12px; line-height: 1.5; color: var(--er-text-muted); }
    espace-rhum .er-prefs-danger {
      display: flex; align-items: center; justify-content: space-between; gap: 18px; flex-wrap: wrap;
      margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-prefs-danger-txt { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1 1 240px; }
    espace-rhum .er-prefs-danger-title { font-size: 13px; font-weight: 700; color: var(--er-text-secondary); }
    espace-rhum .er-prefs-danger-hint { font-size: 12px; line-height: 1.5; color: var(--er-text-muted); }
    espace-rhum .er-prefs-btn--danger { flex: 0 0 auto; background: transparent; border: 1px solid rgba(230,57,70,.5); color: #ff6b78; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-btn--danger:hover{ background: rgba(230,57,70,.12); border-color: #E63946; color: #ff8a94; }}
    espace-rhum .er-prefs-btn:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }

    


    espace-rhum .er-prefs-sec--params { border-top: 1px solid var(--er-border-soft); padding-top: 18px; }
    espace-rhum .er-prefs-params { display: flex; flex-direction: column; gap: 8px; }
    espace-rhum .er-prefs-param {
      display: flex; align-items: center; gap: 12px; width: 100%;
      padding: 13px 14px; cursor: pointer;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid var(--er-border-soft); border-radius: 11px;
      font-family: var(--er-font-body); color: inherit; text-align: left;
      transition: border-color var(--er-dur-fast) var(--er-ease-smooth),
                  background var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-param:hover{ border-color: var(--er-border-hover); background: rgba(255, 255, 255, 0.055); }}
    espace-rhum .er-prefs-param:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-prefs-param > svg:first-child { width: 17px; height: 17px; flex: none; color: var(--er-text-muted); }
    espace-rhum .er-prefs-param > svg:last-child { width: 14px; height: 14px; flex: none; color: var(--er-text-muted); }
    espace-rhum .er-prefs-param-txt { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
    espace-rhum .er-prefs-param-txt b { font-size: 13px; font-weight: 700; color: var(--er-text-secondary); }
    espace-rhum .er-prefs-param-txt em { font-style: normal; font-size: 12px; line-height: 1.45; color: var(--er-text-muted); }
    

    espace-rhum .er-prefs-param-ok {
      flex: none; display: grid; place-items: center; width: 19px; height: 19px;
      border-radius: 50%; background: var(--er-teal-soft);
    }
    espace-rhum .er-prefs-param-ok svg {
      width: 12px; height: 12px; fill: none; stroke: var(--er-teal);
      stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;
    }

    



    espace-rhum .er-conf { z-index: 10050; }

    


    espace-rhum .er-grave { position: fixed; inset: 0; z-index: 10100; display: grid; place-items: center; padding: 20px; }
    espace-rhum .er-grave-voile { position: absolute; inset: 0; background: rgba(4, 10, 22, 0.72); backdrop-filter: blur(3px); }
    espace-rhum .er-grave-panneau {
      position: relative; width: min(440px, 100%); padding: 24px;
      background: var(--er-bg-card);
      border: 1px solid rgba(230, 57, 70, 0.34); border-radius: 16px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
    }
    espace-rhum .er-grave-ico {
      width: 40px; height: 40px; border-radius: 11px; display: grid; place-items: center;
      background: rgba(230, 57, 70, 0.12); color: #ff8189; margin-bottom: 14px;
    }
    espace-rhum .er-grave-ico svg { width: 20px; height: 20px; }
    espace-rhum .er-grave-titre { margin: 0 0 8px; font-family: var(--er-font-body); font-size: 17px; font-weight: 700; }
    espace-rhum .er-grave-txt { margin: 0 0 16px; font-size: 13px; line-height: 1.55; color: var(--er-text-secondary); }
    espace-rhum .er-grave-label {
      display: block; margin-bottom: 6px; font-size: 11px; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase; color: var(--er-text-label);
    }
    espace-rhum .er-grave-input {
      width: 100%; padding: 12px 13px; margin-bottom: 16px;
      background: rgba(255, 255, 255, 0.04); color: var(--er-white);
      border: 1px solid var(--er-border-soft); border-radius: 10px;
      font-family: var(--er-font-body); font-size: 13px;
    }
    espace-rhum .er-grave-input:focus { outline: none; border-color: var(--er-teal); }
    espace-rhum .er-grave-actions { display: flex; justify-content: flex-end; gap: 10px; flex-wrap: wrap; }
    


    espace-rhum .er-grave-actions .er-prefs-btn[disabled] {
      opacity: 0.5; cursor: not-allowed; font-variant-numeric: tabular-nums;
    }
    @media (max-width: 520px) {
      espace-rhum .er-grave-actions .er-prefs-btn { flex: 1 1 auto; justify-content: center; }
    }

    





    espace-rhum .er-prefs-compte {
      display: flex; flex-direction: column; align-items: flex-start; gap: 4px;
      margin-top: 22px; padding: 16px;
      border: 1px solid rgba(230, 57, 70, 0.32); border-radius: 12px;
      background: rgba(230, 57, 70, 0.06);
    }
    espace-rhum .er-prefs-compte-titre { font-size: 13px; font-weight: 700; color: #ff8189; }
    espace-rhum .er-prefs-compte-hint {
      font-size: 12px; line-height: 1.5; color: var(--er-text-muted); margin-bottom: 10px;
    }
    espace-rhum .er-prefs-btn--ghost {
      flex: 0 0 auto; background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.18); color: var(--er-text-secondary);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-prefs-btn--ghost:hover{ border-color: var(--er-border-hover); color: var(--er-white); }}
    espace-rhum .er-prefs-btn[disabled] { opacity: 0.55; cursor: default; }
    @media (max-width: 520px) { espace-rhum .er-prefs-title { font-size: 24px; } espace-rhum .er-prefs-body, espace-rhum .er-prefs-head, espace-rhum .er-prefs-foot { padding-left: 20px; padding-right: 20px; } espace-rhum .er-prefs-note { display: none; } espace-rhum .er-prefs-foot { justify-content: flex-end; gap: 10px; } espace-rhum .er-prefs-btn { flex: 1; } }

    


    espace-rhum .er-badge-modal {
      position: fixed;
      inset: 0;
      z-index: 10002;
      display: grid;
      place-items: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s var(--er-ease-smooth), visibility 0s 0.2s;
    }
    espace-rhum .er-badge-modal[data-open="true"] {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.25s var(--er-ease-entry), visibility 0s;
    }
    espace-rhum .er-badge-modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(5, 18, 43, 0.72);
      -webkit-backdrop-filter: blur(6px);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }
    espace-rhum .er-badge-modal-panel {
      position: relative;
      max-width: 420px;
      width: 100%;
      background: linear-gradient(145deg, var(--er-bg-card) 0%, #0a1a35 100%);
      border: 1px solid rgba(93, 191, 192, 0.25);
      border-radius: 24px 3px 18px 3px;
      padding: 36px 28px 28px;
      text-align: center;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
      transform: scale(0.95);
      transition: transform 0.3s var(--er-ease-entry);
    }
    espace-rhum .er-badge-modal[data-open="true"] .er-badge-modal-panel { transform: scale(1); }
    espace-rhum .er-badge-modal-panel[data-category="fidelite"]      { border-color: rgba(245, 190, 65, 0.35); }
    espace-rhum .er-badge-modal-panel[data-category="evenement-sm"]  { border-color: rgba(120, 148, 247, 0.35); }
    espace-rhum .er-badge-modal-panel[data-category="evenement-pap"] { border-color: rgba(241, 159, 57, 0.35); }
    espace-rhum .er-badge-modal-close {
      position: absolute;
      top: 12px; right: 12px;
      width: 36px; height: 36px;
      background: transparent;
      border: 1px solid var(--er-border-soft);
      border-radius: 50%;
      color: var(--er-text-muted);
      cursor: pointer;
      display: grid; place-items: center;
      transition: all 0.2s;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badge-modal-close:hover{
      color: var(--er-text-primary);
      border-color: var(--er-teal);
    }}
    espace-rhum .er-badge-modal-close svg { width: 16px; height: 16px; }
    espace-rhum .er-badge-modal-icon-wrap {
      position: relative;
      width: 190px; height: 190px;
      margin: 0 auto 20px;
      display: grid;
      place-items: center;
    }
    espace-rhum .er-badge-modal-icon {
      width: 150px; height: 150px;
      stroke: var(--er-teal);
      stroke-width: 1.6;
      fill: none;
      stroke-linecap: round; stroke-linejoin: round;
      z-index: 2;
    }
    espace-rhum .er-badge-modal-icon[data-category="fidelite"]      { stroke: var(--er-amber); }
    espace-rhum .er-badge-modal-icon[data-category="evenement-sm"]  { stroke: #7894F7; }
    espace-rhum .er-badge-modal-icon[data-category="evenement-pap"] { stroke: #F19F39; }
    espace-rhum .er-badge-modal-halo {
      position: absolute;
      inset: -24px;
      border-radius: 50%;
      background: radial-gradient(closest-side, rgba(93, 191, 192, 0.45), transparent 70%);
      animation: er-halo-pulse 2.4s ease-in-out infinite;
    }
    


    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-badge-tile[data-state="unlocked"] .er-badge-tile-halo,
      espace-rhum .er-badge-modal-halo,
      espace-rhum .er-pastille[data-tier="critical"] { animation: none; }
    }
    espace-rhum .er-badge-modal-title {
      font-family: var(--er-font-display);
      font-style: italic;
      font-size: clamp(24px, 4vw, 30px);
      text-transform: uppercase;
      letter-spacing: 0.02em;
      color: var(--er-text-primary);
      margin: 0 0 8px;
    }
    espace-rhum .er-badge-modal-date {
      font-family: var(--er-font-body);
      font-size: 12px; font-weight: 600;
      color: var(--er-teal);
      text-transform: uppercase; letter-spacing: 0.05em;
      margin: 0 0 20px;
    }
    



    





    espace-rhum .er-badge-modal-panel[data-state="mystery"] .er-badge-modal-icon,
    espace-rhum .er-badge-modal-panel[data-state="discovered"] .er-badge-modal-icon {
      stroke: rgba(255, 255, 255, 0.55);
      filter: grayscale(1) contrast(1.3) brightness(1.08) opacity(0.82);
    }
    espace-rhum .er-badge-modal-panel[data-state="mystery"] .er-badge-modal-halo,
    espace-rhum .er-badge-modal-panel[data-state="discovered"] .er-badge-modal-halo {
      background: radial-gradient(closest-side, rgba(255, 255, 255, 0.1), transparent 70%);
      animation: none;
    }
    espace-rhum .er-badge-modal-panel[data-state="mystery"] .er-badge-modal-title,
    espace-rhum .er-badge-modal-panel[data-state="discovered"] .er-badge-modal-title {
      color: var(--er-text-muted); letter-spacing: 0.16em;
    }
    espace-rhum .er-badge-modal-progress { margin: 18px auto 0; max-width: 260px; }
    espace-rhum .er-badge-modal-progress-bar {
      height: 6px; border-radius: 3px; background: rgba(255, 255, 255, 0.1); overflow: hidden;
    }
    espace-rhum .er-badge-modal-progress-fill {
      display: block; height: 100%; border-radius: 3px; background: var(--er-teal);
      transition: width 0.5s ease;
    }
    espace-rhum .er-badge-modal-progress-text {
      font-family: var(--er-font-body); font-size: 12px; font-weight: 700;
      color: var(--er-teal); margin-top: 7px; letter-spacing: 0.04em;
    }
    espace-rhum .er-badge-modal-message {
      font-family: var(--er-font-body);
      font-size: 15px; line-height: 1.55;
      color: var(--er-text-secondary);
      margin: 0;
    }

     
    espace-rhum .er-badges-help {
      display: inline-flex; align-items: center; gap: 6px; margin-top: 10px;
      padding: 6px 12px 6px 9px; border-radius: 999px;
      background: var(--er-teal-soft); border: 1px solid rgba(93, 191, 192, 0.3);
      color: var(--er-teal); font-family: var(--er-font-body); font-size: 12px; font-weight: 700;
      cursor: pointer; transition: all var(--er-dur-fast) var(--er-ease-smooth);
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badges-help:hover{ background: rgba(93, 191, 192, 0.2); border-color: var(--er-teal); }}
    espace-rhum .er-badges-help:focus-visible { outline: 2px solid var(--er-teal); outline-offset: 2px; }
    espace-rhum .er-badges-help-ico { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
    espace-rhum .er-badges-info,
    espace-rhum .er-monte {
      position: fixed; inset: 0; z-index: 10002; display: flex; align-items: center; justify-content: center; padding: 20px;
      opacity: 0; visibility: hidden; transition: opacity var(--er-dur-fast) var(--er-ease-smooth), visibility var(--er-dur-fast);
    }
    espace-rhum .er-badges-info[data-open="true"],
    espace-rhum .er-monte[data-open="true"] { opacity: 1; visibility: visible; }
    espace-rhum .er-badges-info-backdrop,
    espace-rhum .er-monte-backdrop { position: absolute; inset: 0; background: var(--er-bg-overlay); backdrop-filter: blur(3px); }
    espace-rhum .er-badges-info-panel,
    espace-rhum .er-monte-panel {
      position: relative; width: 420px; max-width: 100%; max-height: 88vh; overflow-y: auto;
      background: linear-gradient(160deg, #0F2748, #0A1A35); border: 1px solid rgba(245, 190, 65, 0.28);
      border-radius: 20px; padding: 26px 26px 24px; box-shadow: var(--er-shadow-md);
      transform: scale(0.94); transition: transform var(--er-dur-fast) var(--er-ease-smooth); text-align: center;
    }
    espace-rhum .er-badges-info[data-open="true"] .er-badges-info-panel,
    espace-rhum .er-monte[data-open="true"] .er-monte-panel { transform: scale(1); }
    espace-rhum .er-badges-info-close,
    espace-rhum .er-monte-close {
      position: absolute; top: 14px; right: 14px; width: 32px; height: 32px; border-radius: 50%;
      border: 1px solid var(--er-border-soft); background: rgba(255, 255, 255, 0.04); color: var(--er-text-muted);
      display: flex; align-items: center; justify-content: center; cursor: pointer;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-badges-info-close:hover,espace-rhum .er-monte-close:hover{ background: rgba(255, 255, 255, 0.1); color: var(--er-text-secondary); }}
    espace-rhum .er-badges-info-close svg,
    espace-rhum .er-monte-close svg { width: 15px; height: 15px; }
    espace-rhum .er-binfo-heap { position: relative; height: 96px; margin: 6px 0 4px; display: flex; align-items: center; justify-content: center; }
    espace-rhum .er-binfo-b {
      position: absolute; width: 58px; height: 58px; border-radius: 16px 5px 14px 5px;
      background: linear-gradient(140deg, #16355D, #0F2345); display: grid; place-items: center; overflow: hidden;
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35); transform: rotate(var(--r)) translateX(var(--x));
    }
    espace-rhum .er-binfo-b svg { width: 46px; height: 46px; }
    espace-rhum .er-binfo-b.is-grey { filter: grayscale(1) brightness(0.9); opacity: 0.78; }
    espace-rhum .er-binfo-b.is-live { z-index: 3; border: 1px solid rgba(93, 191, 192, 0.5); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); }
    espace-rhum .er-binfo-kicker,
    espace-rhum .er-monte-kicker { font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: var(--er-teal); margin-top: 8px; }
    espace-rhum .er-binfo-title,
    espace-rhum .er-monte-title { font-family: var(--er-font-display); font-style: italic; font-size: 21px; font-weight: 700; color: var(--er-white); margin: 4px 0 6px; line-height: 1.15; }
    espace-rhum .er-binfo-rule,
    espace-rhum .er-monte-rule { width: 40px; height: 3px; background: var(--er-amber); border-radius: 2px; margin: 0 auto 14px; }
    espace-rhum .er-binfo-text,
    espace-rhum .er-monte-text { font-family: var(--er-font-body); font-size: 13.5px; line-height: 1.6; color: rgba(255, 255, 255, 0.82); margin: 0 0 12px; }
    espace-rhum .er-binfo-tease { font-family: var(--er-font-body); font-size: 13px; line-height: 1.55; color: var(--er-amber); margin: 0 0 18px; }
    espace-rhum .er-binfo-fams { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 20px; }
    espace-rhum .er-binfo-fam { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #9fe1cb; background: rgba(93, 191, 192, 0.14); border: 1px solid rgba(93, 191, 192, 0.28); border-radius: 999px; padding: 4px 10px; }
    espace-rhum .er-binfo-cta,
    espace-rhum .er-monte-cta { display: block; width: 100%; padding: 12px; border: none; border-radius: 12px; background: var(--er-teal); color: #062033; font-family: var(--er-font-body); font-size: 14px; font-weight: 800; cursor: pointer; transition: background var(--er-dur-fast) var(--er-ease-smooth); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-binfo-cta:hover,espace-rhum .er-monte-cta:hover{ background: var(--er-teal-deep); }}

     
    espace-rhum .er-profile { position: fixed; inset: 0; z-index: 10002; display: flex; align-items: center; justify-content: center; padding: 20px; opacity: 0; visibility: hidden; transition: opacity var(--er-dur-fast) var(--er-ease-smooth), visibility var(--er-dur-fast); }
    espace-rhum .er-profile[data-open="true"] { opacity: 1; visibility: visible; }
    espace-rhum .er-profile-backdrop { position: absolute; inset: 0; background: var(--er-bg-overlay); backdrop-filter: blur(3px); }
    espace-rhum .er-profile-panel { position: relative; width: min(580px, 100%); max-width: 100%; max-height: 90vh; overflow-y: auto; background: linear-gradient(160deg, #0F2748, #0A1A35); border: 1px solid var(--er-border-soft); border-radius: 20px; padding: 26px; box-shadow: var(--er-shadow-md); transform: scale(0.94); transition: transform var(--er-dur-fast) var(--er-ease-smooth); }
    espace-rhum .er-profile[data-open="true"] .er-profile-panel { transform: scale(1); }
    espace-rhum .er-profile-close { position: absolute; top: 14px; right: 14px; width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--er-border-soft); background: rgba(255, 255, 255, 0.04); color: var(--er-text-muted); display: flex; align-items: center; justify-content: center; cursor: pointer; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-profile-close:hover{ background: rgba(255, 255, 255, 0.1); color: var(--er-text-secondary); }}
    espace-rhum .er-profile-close svg { width: 15px; height: 15px; }
    espace-rhum .er-profile-eyebrow { font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-teal); }
    espace-rhum .er-profile-title { font-family: var(--er-font-display); font-style: italic; font-size: 21px; font-weight: 700; color: var(--er-white); margin: 4px 0 6px; }
    espace-rhum .er-profile-sub { font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5; color: var(--er-text-secondary); margin: 0 0 14px; }
    

    espace-rhum .er-profile-conf {
      font-family: var(--er-font-body); font-size: 12px; line-height: 1.55;
      color: var(--er-text-muted);
      margin: 0 0 18px; padding: 12px 14px;
      background: rgba(93, 191, 192, 0.07);
      border-left: 2px solid var(--er-teal);
      border-radius: 3px 10px 10px 3px;
    }
    espace-rhum .er-ident {
      display: flex; flex-direction: column; gap: 9px;
      padding: 12px 14px; border-radius: 12px 3px 10px 3px;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid var(--er-border-soft);
    }
    espace-rhum .er-ident-line {
      margin: 0; font-family: var(--er-font-body); font-size: 12.5px;
      line-height: 1.5; color: var(--er-text-secondary);
    }
    espace-rhum .er-ident-line strong { color: var(--er-amber-bright); font-weight: 800; }
    espace-rhum .er-ident-check {
      display: flex; align-items: flex-start; gap: 9px; cursor: pointer;
      font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.4;
      color: var(--er-text-secondary);
    }
    espace-rhum .er-ident-check input {
      width: 16px; height: 16px; margin: 1px 0 0; flex: 0 0 auto;
      accent-color: var(--er-teal); cursor: pointer;
    }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-ident-check:hover{ color: var(--er-text-primary); }}
    espace-rhum .er-ident-note {
      margin: 0; font-family: var(--er-font-body); font-size: 11.5px;
      line-height: 1.5; color: var(--er-text-muted); font-style: italic;
    }
    espace-rhum .er-profile-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 14px; margin-bottom: 4px; }
     
    espace-rhum .er-profile-field--wide { grid-column: 1 / -1; }
    @media (max-width: 560px) { espace-rhum .er-profile-fields { grid-template-columns: 1fr; } }
    espace-rhum .er-profile-field { display: flex; flex-direction: column; gap: 5px; }
    espace-rhum .er-profile-label { font-family: var(--er-font-body); font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--er-text-label); }
    espace-rhum .er-profile-input { width: 100%; box-sizing: border-box; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--er-border-soft); background: var(--er-surface); color: var(--er-text-primary); font-family: var(--er-font-body); font-size: 14px; }
    espace-rhum .er-profile-input:focus { outline: none; border-color: var(--er-teal); box-shadow: 0 0 0 3px rgba(93, 191, 192, 0.18); }
    espace-rhum .er-profile-save { display: flex; align-items: center; justify-content: center; gap: 9px; width: 100%; margin-top: 22px; padding: 14px; border: none; border-radius: 3px 18px 3px 18px; background: linear-gradient(135deg, #7BD3D0, #5DBFC0); color: #062033; font-family: var(--er-font-body); font-size: 14px; font-weight: 800; letter-spacing: 0.01em; cursor: pointer; transition: transform var(--er-dur-fast) var(--er-ease-smooth), box-shadow var(--er-dur-fast) var(--er-ease-smooth); }
    espace-rhum .er-profile-save svg { width: 16px; height: 16px; stroke-width: 2.6; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-profile-save:hover{ transform: translateY(-2px); box-shadow: 0 10px 26px rgba(93, 191, 192, 0.38); }}
    espace-rhum .er-profile-save:active { transform: translateY(0); }
    
    espace-rhum .er-profile-prog { margin: 2px 0 18px; }
    espace-rhum .er-profile-prog-line { display: flex; align-items: center; gap: 10px; }
    espace-rhum .er-profile-prog-track { flex: 1; min-width: 0; height: 5px; background: rgba(255, 255, 255, 0.09); border-radius: 3px; overflow: hidden; }
    espace-rhum .er-profile-prog-fill { display: block; height: 100%; width: 0%; border-radius: inherit; background: linear-gradient(90deg, var(--er-teal), var(--er-amber)); transition: width 0.4s var(--er-ease-smooth); }
    espace-rhum .er-profile-prog-medal { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--er-bg-card); border: 1px solid var(--er-border-soft); transition: transform 0.35s var(--er-ease-smooth), border-color 0.35s ease, box-shadow 0.35s ease; }
    espace-rhum .er-profile-prog-medal svg { width: 17px; height: 17px; fill: none; stroke: var(--er-text-muted); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; opacity: 0.5; filter: grayscale(1); transition: opacity 0.35s ease, stroke 0.35s ease; }
    espace-rhum .er-profile-prog[data-complete="true"] .er-profile-prog-medal { border-color: var(--er-amber); box-shadow: 0 0 0 3px rgba(245, 190, 65, 0.15), 0 4px 14px rgba(245, 190, 65, 0.3); transform: scale(1.08); }
    espace-rhum .er-profile-prog[data-complete="true"] .er-profile-prog-medal svg { stroke: var(--er-amber); opacity: 1; filter: none; }
    espace-rhum .er-profile-prog-cap { margin: 8px 0 0; font-family: var(--er-font-body); font-size: 11.5px; font-weight: 600; color: var(--er-text-muted); letter-spacing: 0.01em; }
    espace-rhum .er-profile-prog[data-complete="true"] .er-profile-prog-cap { color: var(--er-teal); }
    espace-rhum .er-profile-err { font-family: var(--er-font-body); font-size: 11px; font-weight: 600; color: #ff6b6b; }
    espace-rhum .er-profile-input[aria-invalid="true"] { border-color: #ff6b6b; box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.15); }
     
    espace-rhum .er-insta { position: fixed; inset: 0; z-index: 10002; display: flex; align-items: center; justify-content: center; padding: 20px; opacity: 0; visibility: hidden; transition: opacity var(--er-dur-fast) var(--er-ease-smooth), visibility var(--er-dur-fast); }
    espace-rhum .er-insta[data-open="true"] { opacity: 1; visibility: visible; }
    espace-rhum .er-insta-backdrop { position: absolute; inset: 0; background: var(--er-bg-overlay); backdrop-filter: blur(3px); }
    espace-rhum .er-insta-panel { position: relative; width: 420px; max-width: 100%; max-height: 90vh; overflow-y: auto; background: linear-gradient(160deg, #0F2748, #0A1A35); border: 1px solid var(--er-border-soft); border-radius: 20px; padding: 26px; box-shadow: var(--er-shadow-md); transform: scale(0.94); transition: transform var(--er-dur-fast) var(--er-ease-smooth); }
    espace-rhum .er-insta[data-open="true"] .er-insta-panel { transform: scale(1); }
    espace-rhum .er-insta-close { position: absolute; top: 14px; right: 14px; width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--er-border-soft); background: rgba(255, 255, 255, 0.04); color: var(--er-text-muted); display: flex; align-items: center; justify-content: center; cursor: pointer; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-insta-close:hover{ background: rgba(255, 255, 255, 0.1); color: var(--er-text-secondary); }}
    espace-rhum .er-insta-close svg { width: 15px; height: 15px; }
    espace-rhum .er-insta-eyebrow { font-family: var(--er-font-body); font-size: 10px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: var(--er-amber); }
    espace-rhum .er-insta-title { font-family: var(--er-font-display); font-style: italic; font-size: 21px; font-weight: 700; color: var(--er-white); margin: 4px 0 6px; }
    espace-rhum .er-insta-sub { font-family: var(--er-font-body); font-size: 12.5px; line-height: 1.5; color: var(--er-text-secondary); margin: 0 0 18px; }
    espace-rhum .er-insta-field { display: flex; flex-direction: column; gap: 5px; }
    espace-rhum .er-insta-label { font-family: var(--er-font-body); font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--er-text-label); }
    espace-rhum .er-insta-inwrap { display: flex; align-items: center; border: 1px solid var(--er-border-soft); border-radius: 10px; background: var(--er-surface); overflow: hidden; }
    espace-rhum .er-insta-inwrap:focus-within { border-color: var(--er-teal); box-shadow: 0 0 0 3px rgba(93, 191, 192, 0.18); }
    espace-rhum .er-insta-inwrap[data-invalid="true"] { border-color: #ff6b6b; box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.15); }
    espace-rhum .er-insta-at { padding: 0 2px 0 12px; color: var(--er-text-muted); font-family: var(--er-font-body); font-size: 14px; }
    espace-rhum .er-insta-input { flex: 1; min-width: 0; box-sizing: border-box; padding: 10px 12px 10px 2px; border: none; background: transparent; color: var(--er-text-primary); font-family: var(--er-font-body); font-size: 14px; }
    espace-rhum .er-insta-input:focus { outline: none; }
    espace-rhum .er-insta-err { font-family: var(--er-font-body); font-size: 11px; font-weight: 600; color: #ff6b6b; margin-top: 5px; }
    

    espace-rhum .er-insta-alert {
      display: flex; gap: 10px; align-items: flex-start;
      margin: 0 0 16px; padding: 12px 13px; border-radius: 10px;
      border: 1px solid transparent; text-align: left;
    }
    espace-rhum .er-insta-alert[data-tone="error"] {
      background: rgba(224, 62, 45, 0.14); border-color: rgba(224, 62, 45, 0.55);
    }
    espace-rhum .er-insta-alert[data-tone="wait"] {
      background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.16);
    }
    espace-rhum .er-insta-alert-ico { display: block; flex: 0 0 18px; margin-top: 1px; }
    espace-rhum .er-insta-alert-ico svg { width: 18px; height: 18px; display: block; }
    espace-rhum .er-insta-alert[data-tone="error"] .er-insta-alert-ico { color: #ff8a7d; }
    espace-rhum .er-insta-alert[data-tone="wait"] .er-insta-alert-ico { color: var(--er-text-muted); }
    espace-rhum .er-insta-alert-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    espace-rhum .er-insta-alert-title {
      font-family: var(--er-font-body); font-size: 12.5px; font-weight: 800; line-height: 1.25;
    }
    espace-rhum .er-insta-alert[data-tone="error"] .er-insta-alert-title { color: #ffb4ae; }
    espace-rhum .er-insta-alert[data-tone="wait"] .er-insta-alert-title { color: var(--er-text-primary); }
    espace-rhum .er-insta-alert-text {
      font-family: var(--er-font-body); font-size: 11.5px; line-height: 1.45; color: var(--er-text-secondary);
    }
    espace-rhum .er-insta-save { display: block; width: 100%; margin-top: 16px; padding: 12px; border: none; border-radius: 12px; background: var(--er-amber); color: #062033; font-family: var(--er-font-body); font-size: 14px; font-weight: 800; cursor: pointer; transition: filter var(--er-dur-fast) var(--er-ease-smooth); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-insta-save:hover{ filter: brightness(1.06); }}
    espace-rhum .er-insta-later { display: block; width: 100%; margin-top: 8px; padding: 8px; border: none; background: none; color: var(--er-text-muted); font-family: var(--er-font-body); font-size: 12px; cursor: pointer; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-insta-later:hover{ color: var(--er-text-secondary); }}
    espace-rhum .er-profile-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; }
    espace-rhum .er-profile-later, espace-rhum .er-profile-never { background: none; border: none; cursor: pointer; font-family: var(--er-font-body); font-size: 12px; padding: 4px; }
    espace-rhum .er-profile-later { color: var(--er-text-secondary); font-weight: 600; }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-profile-later:hover{ color: var(--er-white); }}
    espace-rhum .er-profile-never { color: var(--er-text-muted); }
    @media (hover:hover) and (pointer:fine){espace-rhum .er-profile-never:hover{ color: var(--er-text-secondary); text-decoration: underline; }}

     
    

    espace-rhum .er-toasts-container {
      position: fixed;
      bottom: 80px;
      right: 24px;
      z-index: 10001;
      display: flex;
      flex-direction: column-reverse;
      gap: 10px;
      pointer-events: none;
      max-width: 360px;
    }
    espace-rhum .er-toast {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 18px 14px 14px;
      background: linear-gradient(145deg, var(--er-bg-card) 0%, #0a1a35 100%);
      border: 1px solid var(--toast-border, rgba(93, 191, 192, 0.4));
      border-left: 3px solid var(--toast-accent, var(--er-teal));
      border-radius: 12px 3px 10px 3px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
      opacity: 0;
      transform: translateX(120%);
      transition: transform 0.35s var(--er-ease-entry), opacity 0.25s;
    }
    espace-rhum .er-toast[data-visible="true"] {
      opacity: 1;
      transform: translateX(0);
    }
    espace-rhum .er-toast[data-category="fidelite"]      { --toast-accent: var(--er-amber); --toast-border: rgba(245, 190, 65, 0.4); }
    espace-rhum .er-toast[data-category="evenement-sm"]  { --toast-accent: #7894F7; --toast-border: rgba(120, 148, 247, 0.4); }
    espace-rhum .er-toast[data-category="evenement-pap"] { --toast-accent: #F19F39; --toast-border: rgba(241, 159, 57, 0.4); }
    espace-rhum .er-toast-icon {
      width: 40px; height: 40px;
      display: grid; place-items: center;
      border-radius: 50%;
      background: rgba(93, 191, 192, 0.1);
      flex-shrink: 0;
    }
    espace-rhum .er-toast-icon svg {
      width: 22px; height: 22px;
      stroke: var(--toast-accent, var(--er-teal));
      stroke-width: 1.8;
      fill: none;
      stroke-linecap: round; stroke-linejoin: round;
    }
    espace-rhum .er-toast-content { flex: 1; min-width: 0; }
    espace-rhum .er-toast-label {
      font-family: var(--er-font-body);
      font-size: 10px; font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--toast-accent);
      margin-bottom: 2px;
    }
    espace-rhum .er-toast-title {
      font-family: var(--er-font-display);
      font-style: italic;
      font-size: 15px;
      text-transform: uppercase;
      color: var(--er-text-primary);
      letter-spacing: 0.02em;
    }

     
    espace-rhum button:focus-visible,
    espace-rhum a:focus-visible,
    espace-rhum [role="button"]:focus-visible,
    espace-rhum [role="tab"]:focus-visible {
      outline: 2px solid var(--er-teal);
      outline-offset: 2px;
      border-radius: 4px;
    }
    espace-rhum .sr-only {
      position: absolute;
      width: 1px; height: 1px;
      padding: 0; margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

     
    @media (min-width: 768px) and (max-width: 1099px) {
      espace-rhum .er-cockpit { grid-template-columns: 72px 1fr; }
      espace-rhum .er-sidebar { padding: 16px 10px; }
      















      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-branding,
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-identity-text,
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-stats-row,
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-rang-pop,
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-section-title,
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-preferences-btn span,
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-nav-link span { display: none; }
      espace-rhum .er-sidebar-nav-link { justify-content: center; padding: 12px 0; }
      espace-rhum .er-sidebar-identity { justify-content: center; padding-bottom: 12px; margin-bottom: 12px; }
       
      espace-rhum .er-sidebar:not([data-expanded="true"]) .er-sidebar-tymal { width: 50px; height: 50px; margin: 0; }
      espace-rhum .er-sidebar-preferences-btn { padding: 12px; }

       
      espace-rhum .er-widget--hero {
        grid-column: span 12;
        grid-row: span 1;
        min-height: 460px;
      }
      


      espace-rhum .er-hero-inner { min-height: 520px; padding: 32px; }
      espace-rhum .er-hero-photo-bg { position: absolute; inset: 0; }
      espace-rhum .er-hero-class-flag { width: 72px; }
      espace-rhum .er-hero-lastname { font-size: clamp(40px, 6vw, 72px); }
      espace-rhum .er-hero-content { max-width: 60%; }
      espace-rhum .er-hero-reason { max-width: 60%; }

      espace-rhum .er-widget--flash-news,
      espace-rhum .er-widget--badges-mini { grid-column: span 6; }

       
      espace-rhum .er-skippers-masonry {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: none;
        grid-auto-rows: 260px;
        height: auto;
        gap: 14px;
      }
       
      espace-rhum .er-skippers-expanded-grid { grid-template-columns: repeat(3, 1fr); }
      espace-rhum .er-skipper-card--big,
      espace-rhum .er-skipper-placeholder--big { grid-row: auto; }
      espace-rhum .er-skipper-card--big .er-skipper-card-name { font-size: 28px; }
      espace-rhum .er-skipper-card--big .er-skipper-card-class-flag { width: 60px; }

       
      espace-rhum .er-section-link { padding: 6px 10px; font-size: 10px; }

       
      espace-rhum .er-widget-news-mix,
      espace-rhum .er-widget-suggestions,
      espace-rhum .er-widget--prefere,
      espace-rhum .er-widget--stats,
      espace-rhum .er-widget--leaderboard-teaser { grid-column: span 12; }
      espace-rhum .er-stats-grid { grid-template-columns: repeat(2, 1fr); }
      espace-rhum .er-stat-block:nth-child(2) { border-right: none; }
      espace-rhum .er-stat-block:nth-child(3) { border-right: 1px solid var(--er-border-soft); }

       
      espace-rhum .er-badges-categories { grid-template-columns: 1fr; }
      espace-rhum .er-badges-category[data-category="exploration"] { grid-column: span 1; }

       
      espace-rhum .er-sidebar-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        margin: 0 auto 16px;
        background: var(--er-amber-bright);
        border: 1.5px solid var(--er-amber);
        border-radius: 12px 3px 10px 3px;
        cursor: pointer;
        color: var(--er-bg-base);
        padding: 0;
        transition: all var(--er-dur-fast) var(--er-ease-smooth);
        box-shadow: 0 4px 12px rgba(252, 241, 80, 0.25);
      }
      espace-rhum .er-sidebar-toggle svg {
        width: 18px; height: 18px;
        stroke: currentColor; fill: none;
      }
      @media (hover:hover) and (pointer:fine){espace-rhum .er-sidebar-toggle:hover{
        background: #FFE500;
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(252, 241, 80, 0.4);
      }}

       
      espace-rhum .er-sidebar[data-expanded="true"] {
        width: 260px;
        padding: 24px 20px;
        z-index: 100;
        box-shadow: var(--er-shadow-lg);
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-identity {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        padding-bottom: 18px;
        margin-bottom: 18px;
        border-bottom: 1px solid var(--er-border-soft);
      }
       
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-identity-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-greeting {
        font-family: var(--er-font-body);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--er-teal);
        margin-bottom: 2px;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-name {
        font-family: var(--er-font-display);
        font-style: italic;
        font-size: 22px;
        text-transform: uppercase;
        line-height: 1;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-stats-row {
        display: flex;
        gap: 8px;
        margin-bottom: 18px;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-section-title {
        margin-bottom: 10px;
        padding-left: 4px;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-nav-link {
        justify-content: flex-start;
        padding: 10px 12px;
        gap: 12px;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-preferences-btn {
        padding: 14px 22px;
        width: 100%;
        justify-content: center;
        margin-top: 8px;
      }
      espace-rhum .er-sidebar[data-expanded="true"] .er-sidebar-toggle svg {
        transform: rotate(90deg);
        transition: transform var(--er-dur-fast) var(--er-ease-smooth);
      }
    }

    @media (max-width: 767px) {
      


       
      espace-rhum .er-mobile-shell { display: block; }
      espace-rhum .er-mobile-topbar { display: flex; }  
      espace-rhum .er-sidebar { display: none !important; }
       
      espace-rhum .er-sidebar-backdrop { display: none !important; }

      espace-rhum .er-cockpit { display: block; padding: 0; }

      


      espace-rhum .er-dashboard {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;
        padding: 4px 16px 24px;
      }
       
      espace-rhum .er-mobile-rank-strip { margin-bottom: 20px; }
      espace-rhum .er-dashboard > * {
        grid-column: 1 / -1 !important;
        grid-row: auto !important;
        min-width: 0;
        max-width: 100%;
      }

       
      espace-rhum .er-widget--hero {
        min-height: 440px;
      }
      espace-rhum .er-hero-inner {
        min-height: 440px;
        padding: 24px;
      }
      espace-rhum .er-hero-content { max-width: 100%; }
      





      

      


      espace-rhum .er-hero-reason {
        max-width: calc(100% - 56px);
        font-size: 12px;
        margin-bottom: 16px;
        padding-left: 10px;
      }
      espace-rhum .er-hero-firstname {
        font-size: 12px;
        margin-bottom: 6px;
      }
      espace-rhum .er-hero-lastname {
        font-size: clamp(28px, 8vw, 40px);
        margin-bottom: 10px;
      }
      espace-rhum .er-hero-boat {
        font-size: 13px;
        margin-bottom: 16px;
      }
      espace-rhum .er-hero-class-flag { width: 56px; right: 14px; }
       
      espace-rhum .er-hero-actions { gap: 8px; }
      espace-rhum .er-hero-actions .er-btn {
        padding: 11px 12px;
        font-size: 10.5px;
        letter-spacing: 0.06em;
      }

      espace-rhum .er-widget--flash-news { min-height: auto; }
      espace-rhum .er-widget--badges-mini { min-height: auto; }

      espace-rhum .er-widget-fav-skippers,
      espace-rhum .er-widget-news-mix,
      espace-rhum .er-widget-suggestions {
        padding: 0;
      }

       
      espace-rhum .er-widget-fav-skippers,
      espace-rhum .er-widget-news-mix {
        max-width: 100%;
        box-sizing: border-box;
      }
      espace-rhum .er-widget-fav-skippers .er-section-header,
      espace-rhum .er-widget-news-mix .er-section-header {
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
      }
      espace-rhum .er-section-header-right {
        max-width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }
      espace-rhum .er-skippers-masonry {
        max-width: 100%;
        box-sizing: border-box;
      }

       
      espace-rhum .er-section-header {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 20px 16px 14px;
      }
      espace-rhum .er-section-header-left {
        flex: 1 1 auto;
        min-width: 0;
      }
      espace-rhum .er-section-header-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        order: 2;
        gap: 10px;
      }
      espace-rhum .er-section-link { order: 1; padding: 6px 10px; font-size: 10px; }
      


















      











































      espace-rhum .er-pick-list {
        max-height: min(56vh, 388px);
      }
      




      




      espace-rhum .er-pick-list--portail,
      espace-rhum .er-pick-list--portail.er-pick-list--haut {
        left: 10px; right: 10px; width: auto;
        top: auto;
        bottom: calc(var(--er-pick-clavier, 0px) + env(safe-area-inset-bottom, 0px) + 10px);
        max-height: min(62vh, calc(100vh - var(--er-pick-clavier, 0px) - 88px));
        border-radius: 16px 4px 16px 4px;
        box-shadow: 0 -10px 44px rgba(3, 12, 28, .72);
      }
      


      espace-rhum .er-pick-fermer {
        position: sticky; top: 0; z-index: 3;
        display: flex; align-items: center; justify-content: space-between; gap: 10px;
        width: 100%; min-height: 46px; padding: 10px 14px;
        background: #10233f; border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
        color: var(--er-text-secondary); cursor: pointer;
        font-family: var(--er-font-body); font-size: 11px; font-weight: 800;
        letter-spacing: 0.12em; text-transform: uppercase; text-align: left;
      }
      espace-rhum .er-pick-fermer svg { width: 17px; height: 17px; flex: 0 0 auto; }
      espace-rhum .er-pick-list--portail .er-pick-chercher { top: 46px; }
       
      espace-rhum .er-pick-opt { min-height: 46px; }

      espace-rhum .er-section-count {
        order: 2; display: flex; align-items: baseline; gap: 7px; text-align: left;
      }
      espace-rhum .er-section-count-num { font-size: 24px; }
      espace-rhum .er-section-count-label { margin-top: 0; }
       
      espace-rhum .er-section-header { padding-bottom: 16px; margin-bottom: 20px; }

       
      espace-rhum .er-widget-fav-skippers .er-section-header {
        padding: 16px 16px 14px;
        margin-bottom: 4px;
      }
      


      espace-rhum .er-widget-fav-skippers > .er-section-header + .er-votesk { margin-top: 18px; }
      espace-rhum .er-skippers-masonry {
        display: flex;
        gap: 12px;
        grid-template-columns: none;
        grid-template-rows: none;
        grid-auto-rows: auto;
        height: auto;
        padding: 14px 16px 16px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      espace-rhum .er-skippers-masonry::-webkit-scrollbar { display: none; }

      espace-rhum .er-skipper-card {
        flex: 0 0 160px;
        aspect-ratio: 3/4;
        grid-row: auto;
        grid-column: auto;
        scroll-snap-align: start;
        transform: rotate(0deg);
      }
      espace-rhum .er-skipper-card--big { grid-row: auto; }
      











      espace-rhum .er-skipper-card-class-flag,
      espace-rhum .er-skipper-card--big .er-skipper-card-class-flag {
        top: -9px; right: -6px; width: 40px;
      }

      

      espace-rhum .er-skipper-card-name,
      espace-rhum .er-skipper-card--big .er-skipper-card-name { font-size: 24px; }
      espace-rhum .er-skipper-card-name[data-len="10"],
      espace-rhum .er-skipper-card-name[data-len="11"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="10"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="11"]  { font-size: 22px; }
      espace-rhum .er-skipper-card-name[data-len="12"],
      espace-rhum .er-skipper-card-name[data-len="13"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="12"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="13"]  { font-size: 20px; }
      espace-rhum .er-skipper-card-name[data-len="14"],
      espace-rhum .er-skipper-card-name[data-len="15"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="14"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="15"]  { font-size: 18px; }
      espace-rhum .er-skipper-card-name[data-len="16"],
      espace-rhum .er-skipper-card-name[data-len="17"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="16"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="17"]  { font-size: 16px; }
      espace-rhum .er-skipper-card-name[data-len="18"],
      espace-rhum .er-skipper-card-name[data-len="19"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="18"],
      espace-rhum .er-skipper-card--big .er-skipper-card-name[data-len="19"]  { font-size: 15px; }
      espace-rhum .er-skipper-card-name.er-skipper-card-name--wrap,
      espace-rhum .er-skipper-card--big .er-skipper-card-name.er-skipper-card-name--wrap { font-size: 14px; }
      espace-rhum .er-skipper-card-class-flag { width: 40px; }
      espace-rhum .er-skipper-card-fav { width: 28px; height: 28px; }
      espace-rhum .er-skipper-card-fav svg { width: 12px; height: 12px; }
      

      espace-rhum .er-skipper-card-vote { width: 28px; height: 28px; top: 46px; }
      espace-rhum .er-skipper-card-vote svg { width: 13px; height: 13px; }

      espace-rhum .er-skipper-placeholder,
      espace-rhum .er-skipper-placeholder--big {
        flex: 0 0 160px;
        aspect-ratio: 3/4;
        grid-row: auto;
      }

      espace-rhum .er-skippers-empty {
        grid-column: auto;
        grid-row: auto;
        flex: 1 0 auto;
      }

       
      espace-rhum .er-skippers-expand-btn {
        width: calc(100% - 32px);
        margin: 14px 16px 0;
      }
      espace-rhum .er-skippers-expanded-zone[data-expanded="true"] {
        max-height: 500px;
        margin-top: 14px;
      }
      espace-rhum .er-skippers-expanded-grid {
        display: flex;
        grid-template-columns: none;
        gap: 12px;
         
        padding: 14px 16px 16px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      espace-rhum .er-skippers-expanded-grid::-webkit-scrollbar { display: none; }
      espace-rhum .er-skipper-card--grid {
        flex: 0 0 160px;
        scroll-snap-align: start;
        transform: rotate(0deg);
      }
      espace-rhum .er-skipper-card--grid .er-skipper-card-name { font-size: 24px; }
      espace-rhum .er-skipper-card--grid .er-skipper-card-class-flag { width: 40px; }

       
      espace-rhum img,
      espace-rhum svg { max-width: 100%; }

       
       
      espace-rhum .er-news-panel { margin: 0; padding: 0; }
      espace-rhum .er-news-feed {
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 0 16px 16px;
      }
      espace-rhum .er-news2--lead .er-news2-body { padding: 14px 15px 14px; }
      espace-rhum .er-news2--lead .er-news2-title { font-size: 21px; }
      espace-rhum .er-news2--compact { grid-template-columns: 92px 1fr; min-height: 120px; }
      espace-rhum .er-news2--compact .er-news2-body { padding: 10px 12px; }
      











      espace-rhum .er-news2--compact .er-news2-acts { gap: 8px; }
      



      


      espace-rhum .er-news2--compact .er-news2-act { width: 44px; height: 44px; }
      espace-rhum .er-news2--compact .er-news2-act svg { width: 15px; height: 15px; }
      espace-rhum .er-news-mix-grid {
        grid-template-columns: 1fr;
        padding: 0 16px 16px;
      }
      espace-rhum .er-news-card--big { grid-column: auto; min-height: 320px; }
      espace-rhum .er-news-card-split {
        grid-template-columns: 110px 1fr;
        min-height: 104px;
      }
      espace-rhum .er-news-card-split .er-news-card-img { min-height: 104px; }
      espace-rhum .er-news-card--full-image .er-news-title { font-size: 18px; }

      espace-rhum .er-widget-suggestions .er-suggestions-list {
        padding: 0 16px 16px;
      }

      espace-rhum .er-widget--stats { padding: 20px 18px; }
      espace-rhum .er-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
      espace-rhum .er-stat-block { padding: 12px 6px; border-right: none; border-bottom: 1px solid var(--er-border-soft); }
      espace-rhum .er-stat-block:nth-child(n+3) { border-bottom: none; }
      espace-rhum .er-stat-block-num { font-size: 38px; }
      espace-rhum .er-stat-block-num span { font-size: 24px; }

      espace-rhum .er-widget--leaderboard-teaser { padding: 24px 20px; }

       
      espace-rhum .er-suggestion-item {
        grid-template-columns: 64px 1fr 36px;
        gap: 14px;
        padding: 12px;
      }
      espace-rhum .er-suggestion-photo { width: 64px; height: 64px; }
      espace-rhum .er-suggestion-class-dot {
        width: 12px; height: 12px;
        top: -3px; right: -3px;
      }
      espace-rhum .er-suggestion-add { width: 36px; height: 36px; }
      espace-rhum .er-suggestion-nom { font-size: var(--er-sugg-nom, 15px); }

       
      espace-rhum .er-section-badges {
        padding: 20px 16px 24px;
        border-radius: 20px 3px 14px 3px;
      }
      espace-rhum .er-badges-categories {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      espace-rhum .er-badges-category[data-category="exploration"] { grid-column: span 1; }
      espace-rhum .er-badges-category-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
      espace-rhum .er-badges-category[data-category="evenement-pap"] .er-badges-category-grid {
        grid-template-columns: 1fr;
      }
      




      espace-rhum .er-badge-tile {
        min-height: 240px;
        padding: 20px 10px 14px;
      }
      espace-rhum .er-badge-tile-icon-wrap { width: 96px; height: 96px; margin-bottom: 10px; }
      espace-rhum .er-badge-tile-icon { width: 68px; height: 68px; }
      espace-rhum .er-badge-tile-name { font-size: 15px; margin-bottom: 10px; }
      espace-rhum .er-badge-tile-name[data-len="12"],
      espace-rhum .er-badge-tile-name[data-len="13"] { font-size: 14px; }
      espace-rhum .er-badge-tile-name[data-len="14"],
      espace-rhum .er-badge-tile-name[data-len="15"] { font-size: 13px; }
      espace-rhum .er-badge-tile-name[data-len="16"],
      espace-rhum .er-badge-tile-name[data-len="17"] { font-size: 12px; }
      espace-rhum .er-badge-tile-name--wrap { font-size: 11px; }

       
      espace-rhum .er-toasts-container {
        bottom: 72px;
        right: 16px;
        left: 16px;
        max-width: none;
      }
      espace-rhum .er-toast { transform: translateY(120%); }
      espace-rhum .er-toast[data-visible="true"] { transform: translateY(0); }
    }
  
    






    @media (max-width: 860px) {
      espace-rhum input[type="text"],
      espace-rhum input[type="tel"],
      espace-rhum input[type="email"],
      espace-rhum input[type="search"],
      espace-rhum input[type="number"],
      espace-rhum input[type="password"],
      espace-rhum input:not([type]),
      espace-rhum select,
      espace-rhum textarea { font-size: 16px; }
    }

    



    espace-rhum .er-roue-retrait {
      display: grid; gap: 10px; margin-top: 14px; padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, .1);
    }
    espace-rhum .er-roue-retrait[hidden] { display: none; }
    espace-rhum .er-roue-retrait-q {
      margin: 0; font: 600 13px Montserrat, system-ui, sans-serif;
      color: var(--er-white, #F4F7FB);
    }
    espace-rhum .er-roue-retrait-choix { display: flex; gap: 8px; flex-wrap: wrap; }
    espace-rhum .er-roue-retrait-btn {
      flex: 1 1 140px; min-height: 44px;
      border: 1px solid rgba(255, 255, 255, .16); border-radius: 999px;
      background: rgba(255, 255, 255, .04); color: var(--er-white, #F4F7FB);
      font: 600 13px Montserrat, system-ui, sans-serif; cursor: pointer;
    }
    espace-rhum .er-roue-retrait-btn.est-actif {
      border-color: var(--er-teal, #5DBFC0); background: rgba(93, 191, 192, .16);
    }
    espace-rhum .er-roue-adresse { display: grid; gap: 8px; }
    espace-rhum .er-roue-adresse[hidden] { display: none; }
    espace-rhum .er-roue-adresse-lbl {
      font: 700 10px Montserrat, system-ui, sans-serif; letter-spacing: .1em;
      text-transform: uppercase; color: rgba(244, 247, 251, .6);
    }
    espace-rhum .er-roue-adresse-champ {
      width: 100%; box-sizing: border-box; padding: 12px; resize: vertical;
      border: 1px solid rgba(255, 255, 255, .16); border-radius: 12px;
      background: rgba(255, 255, 255, .04); color: var(--er-white, #F4F7FB);
       
      font: 500 16px Montserrat, system-ui, sans-serif;
      -webkit-appearance: none; appearance: none;
    }
    espace-rhum .er-roue-adresse-note {
      margin: 0; font: 500 11.5px Montserrat, system-ui, sans-serif;
      color: rgba(244, 247, 251, .5);
    }
    espace-rhum .er-roue-retrait-ok {
      margin: 0; font: 600 13px Montserrat, system-ui, sans-serif;
      color: var(--er-teal, #5DBFC0);
    }
    espace-rhum .er-roue-retrait-etat {
      font: 500 12px Montserrat, system-ui, sans-serif; color: rgba(244, 247, 251, .6);
    }
    espace-rhum .er-roue-retrait-etat[data-tone="error"] { color: var(--er-danger, #E63946); }

    


    espace-rhum .er-prono-parcours {
      display: grid; gap: 14px;
      padding: 16px; border-radius: 16px;
      background: rgba(255, 255, 255, .03);
      border: 1px solid rgba(255, 255, 255, .07);
    }
    espace-rhum .er-prono-etape { display: grid; gap: 12px; }
    espace-rhum .er-prono-etape[hidden] { display: none; }

    






    @keyframes er-prono-entre {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: none; }
    }
    espace-rhum .er-prono-etape--entre {
      animation: er-prono-entre 260ms cubic-bezier(.22, .61, .36, 1) both;
    }
    @media (prefers-reduced-motion: reduce) {
      espace-rhum .er-prono-etape--entre { animation: none; }
    }

     
    espace-rhum .er-prono-choisi {
      display: flex; align-items: center; gap: 10px;
      width: 100%; min-height: 44px; padding: 6px 12px 6px 6px;
      border: 1px solid rgba(255, 255, 255, .12); border-radius: 999px;
      background: rgba(255, 255, 255, .04); cursor: pointer; text-align: left;
    }
    espace-rhum .er-prono-choisi-img {
      width: 32px; height: 32px; border-radius: 50%; object-fit: cover; flex: none;
      background: rgba(255, 255, 255, .08);
    }
    espace-rhum .er-prono-choisi-nom {
      flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font: 700 13px Montserrat, system-ui, sans-serif; color: var(--er-white, #F4F7FB);
    }
    espace-rhum .er-prono-choisi-chg {
      flex: none; font: 600 11px Montserrat, system-ui, sans-serif;
      color: var(--er-teal, #5DBFC0); text-transform: uppercase; letter-spacing: .06em;
    }

    

    espace-rhum .er-prono-duree { display: flex; gap: 8px; align-items: stretch; }
    espace-rhum .er-prono-case {
      flex: 1 1 0; min-width: 0;
      display: flex; align-items: center; gap: 4px;
      padding: 0 8px; min-height: 48px;
      border: 1px solid rgba(255, 255, 255, .16); border-radius: 12px;
      background: rgba(255, 255, 255, .04);
    }
    espace-rhum .er-prono-case:focus-within { border-color: var(--er-teal, #5DBFC0); }
    espace-rhum .er-prono-case-champ {
      width: 100%; min-width: 0; border: none; background: none; padding: 0;
      color: var(--er-white, #F4F7FB); text-align: right;
       
      font: 700 16px Montserrat, system-ui, sans-serif;
      -webkit-appearance: none; appearance: none;
    }
    espace-rhum .er-prono-case-champ:focus { outline: none; }
    espace-rhum .er-prono-case-champ::placeholder { color: rgba(244, 247, 251, .3); }
    espace-rhum .er-prono-case-unite {
      flex: none; font: 600 12px Montserrat, system-ui, sans-serif;
      color: rgba(244, 247, 251, .5);
    }

     
    espace-rhum .er-prono-carte {
      display: flex; align-items: center; gap: 14px;
      padding: 14px; border-radius: 14px;
      background: linear-gradient(135deg, rgba(93, 191, 192, .14), rgba(93, 191, 192, .04));
      border: 1px solid rgba(93, 191, 192, .28);
    }
    espace-rhum .er-prono-carte-img {
      width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex: none;
      background: rgba(255, 255, 255, .08);
    }
    espace-rhum .er-prono-carte-txt { display: grid; gap: 2px; min-width: 0; }
    espace-rhum .er-prono-carte-eyebrow {
      font: 700 10px Montserrat, system-ui, sans-serif; letter-spacing: .1em;
      text-transform: uppercase; color: var(--er-teal, #5DBFC0);
    }
    espace-rhum .er-prono-carte-nom {
      font: 800 16px Montserrat, system-ui, sans-serif; color: var(--er-white, #F4F7FB);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    espace-rhum .er-prono-carte-temps {
      font: 600 13px Montserrat, system-ui, sans-serif; color: rgba(244, 247, 251, .74);
    }
    espace-rhum .er-prono-modifier {
      min-height: 44px; padding: 0 16px;
      border: 1px dashed rgba(255, 255, 255, .22); border-radius: 999px;
      background: none; color: rgba(244, 247, 251, .74); cursor: pointer;
      font: 600 12px Montserrat, system-ui, sans-serif;
    }

    



    







    espace-rhum .er-pick-chercher {
      position: sticky; top: 0; z-index: 2;
      padding: 8px; background: #10233f;
      border-bottom: 1px solid rgba(255, 255, 255, .10);
      box-shadow: 0 6px 12px rgba(3, 12, 28, .45);
    }
    espace-rhum .er-pick-recherche {
      width: 100%; box-sizing: border-box;
      padding: 10px 12px; min-height: 44px;
      border: 1px solid rgba(255, 255, 255, .16); border-radius: 10px;
      background: rgba(255, 255, 255, .04); color: var(--er-white, #F4F7FB);
      


      font: 500 16px Montserrat, system-ui, sans-serif;
      -webkit-appearance: none; appearance: none;
    }
    espace-rhum .er-pick-recherche::placeholder { color: rgba(244, 247, 251, .42); }
    espace-rhum .er-pick-recherche:focus-visible {
      outline: 2px solid var(--er-teal, #5DBFC0); outline-offset: 1px;
    }
    espace-rhum .er-pick-vide {
      margin: 0; padding: 14px 12px; text-align: center;
      font: 500 13px Montserrat, system-ui, sans-serif; color: rgba(244, 247, 251, .55);
    }
    espace-rhum .er-pick-opt--img { display: flex; align-items: center; gap: 10px; }
    espace-rhum .er-pick-opt-img {
      width: 28px; height: 28px; border-radius: 50%; object-fit: cover; flex: none;
      background: rgba(255, 255, 255, .08);
    }
    espace-rhum .er-pick-opt-txt { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    








    espace-rhum .er-pick-opt--riche { align-items: center; gap: 12px; padding-top: 9px; padding-bottom: 9px; }
    espace-rhum .er-pick-opt--riche .er-pick-opt-img {
      width: 40px; height: 40px;
      border: 2px solid var(--er-opt-col, var(--er-teal));
      box-shadow: 0 4px 12px rgba(0, 0, 0, .35);
    }
    espace-rhum .er-pick-opt-corps { min-width: 0; flex: 1; display: block; text-align: left; }
    espace-rhum .er-pick-opt--riche .er-pick-opt-txt {
      display: block; font-weight: 700; letter-spacing: .01em;
    }
    espace-rhum .er-pick-opt-sub {
      display: block; margin-top: 2px;
      font: 700 10px Montserrat, system-ui, sans-serif;
      letter-spacing: .13em; text-transform: uppercase;
      color: var(--er-opt-col, var(--er-teal));
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    espace-rhum .er-pick-opt-meta {
      flex: none; white-space: nowrap;
      font: 600 11px Montserrat, system-ui, sans-serif;
      color: var(--er-text-secondary);
    }

    










    @media (pointer: coarse) {

      

      espace-rhum .er-btn,
      espace-rhum .er-pick-btn,
      espace-rhum .er-vil-chip,
      espace-rhum .er-news2-act,
      espace-rhum .er-pack-choice,
      espace-rhum .er-pack-later,
      espace-rhum .er-combat-choix,
      espace-rhum .er-pronos-valider,
      espace-rhum .er-combat-valider,
      espace-rhum .er-badges-filter,
      espace-rhum .er-badges-help,
      espace-rhum .er-badges-mini-more,
      



      espace-rhum .er-frise-aide,
      espace-rhum .er-news-onglet,
      espace-rhum .er-news-plus,
      espace-rhum .er-prefs-btn,
      espace-rhum .er-prefs-profile-btn,
      espace-rhum .er-votesk-retirer,
      espace-rhum .er-binfo-cta,
      espace-rhum .er-profile-save,
      espace-rhum .er-profile-input,
      espace-rhum .er-insta-input,
      espace-rhum .er-insta-save,
      espace-rhum .er-insta-later,
      espace-rhum .er-datepick-text { min-height: 44px; }

      


      espace-rhum .er-section-link { min-height: 44px; align-items: center; }

      

      espace-rhum .er-badge-modal-close,
      espace-rhum .er-datepick-open,
      

      espace-rhum .er-sugg-why,
      espace-rhum .er-suggestions-toggle { min-width: 44px; min-height: 44px; }

      









      espace-rhum .er-mobile-icon-btn,
      espace-rhum .er-suggestion-add { position: relative; }

      espace-rhum .er-badges-info-close::after,
      espace-rhum .er-insta-close::after,
      espace-rhum .er-pack-close::after,
      espace-rhum .er-prefs-close::after,
      espace-rhum .er-profile-close::after,
      espace-rhum .er-vilmob-close::after,
      espace-rhum .er-mobile-icon-btn::after,
      espace-rhum .er-suggestion-add::after {
        content: ''; position: absolute; top: 50%; left: 50%;
        width: 44px; height: 44px; transform: translate(-50%, -50%);
      }

      






      espace-rhum .er-btn,
      espace-rhum .er-section-link { font-size: 11.5px; }
      espace-rhum .er-datepick-aide { font-size: 12px; }

      













      espace-rhum .er-skipper-card-fav,
      espace-rhum .er-skipper-card-vote { width: 36px; height: 36px; }
      espace-rhum .er-skipper-card-fav  { top: 10px; }
      espace-rhum .er-skipper-card-vote { top: 54px; }
      espace-rhum .er-skipper-card-fav svg  { width: 15px; height: 15px; }
      espace-rhum .er-skipper-card-vote svg { width: 16px; height: 16px; }
      espace-rhum .er-skipper-card-fav::after,
      espace-rhum .er-skipper-card-vote::after {
        content: ''; position: absolute; top: 50%; left: 50%;
        width: 44px; height: 44px; transform: translate(-50%, -50%);
      }

      






      espace-rhum .er-frise-et::after {
        content: ''; position: absolute; left: 0; right: 0; top: 50%;
        height: 44px; transform: translateY(-50%);
      }
    }
`;

   
  



























  function sansSurvolTactile(css) {
    let prof = 0, debut = 0;
    const normal = [], survol = [], mediaSurvol = [];
    for (let i = 0; i < css.length; i++) {
      const c = css[i];
      if (c === '{') prof++;
      else if (c === '}') {
        prof--;
        if (prof !== 0) continue;
        const regle = css.slice(debut, i + 1);
        debut = i + 1;
        const sel = regle.slice(0, regle.indexOf('{'));
        if (sel.indexOf('@') < 0) { (sel.indexOf(':hover') >= 0 ? survol : normal).push(regle); continue; }

         
         
        if (regle.indexOf(':hover') < 0) { normal.push(regle); continue; }
        if (sel.indexOf('prefers-reduced-motion') >= 0) { mediaSurvol.push(regle); continue; }

        





        const cond = sel.trim();
        const dedans = regle.slice(regle.indexOf('{') + 1, regle.lastIndexOf('}'));
        let p2 = 0, d2 = 0; const dSurvol = [], dNormal = [];
        for (let k = 0; k < dedans.length; k++) {
          const c2 = dedans[k];
          if (c2 === '{') p2++;
          else if (c2 === '}') {
            p2--;
            if (p2 !== 0) continue;
            const r2 = dedans.slice(d2, k + 1); d2 = k + 1;
            (r2.slice(0, r2.indexOf('{')).indexOf(':hover') >= 0 ? dSurvol : dNormal).push(r2);
          }
        }
         
         
         
         
        if (dNormal.length) normal.push(cond + '{' + dNormal.join('') + '}');
        if (dSurvol.length) normal.push(cond + ' and (hover: hover) and (pointer: fine){' + dSurvol.join('') + '}');
      }
    }
    if (debut < css.length) normal.push(css.slice(debut));    
    const protege = survol.length
      ? '\n@media (hover: hover) and (pointer: fine){' + survol.join('') + '}\n'
      : '';
    return normal.join('') + protege + mediaSurvol.join('');
  }

  function injectGlobalStyle(id, css) {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }

   
  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

   
  function computeGreeting() {
    const h = new Date().getHours();
    if (h < 6)  return 'Salut';
    if (h < 12) return 'Bonjour';
    if (h < 18) return 'Salut';
    return 'Bonsoir';
  }

  




  











  const RANG_FRISE = [
    { label: 'Curieux',        pose: '83ec85561f9a491a821ec98cefcf2dac',
      texte: "Tu viens d'arriver. Tout est encore devant toi." },
    { label: 'Suiveur',        pose: '343a0ef9efd048bca6fdc22cffca14ed',
      texte: "Tu passes de temps en temps, et tu lis ce qui t'attire." },
    { label: 'Supporter',      pose: 'b5fd53d83d734fb495151da65ae33e62',
      texte: 'Tu as choisi ton camp : des skippers, des sujets, des habitudes.' },
    { label: 'Fan',            pose: 'f988a7dcb4b84d7da9025f998a5cb6a2',
      texte: 'Tu portes les couleurs. Tu reviens voir ce qui bouge, souvent.' },
    { label: 'Inconditionnel', pose: 'd99ba7b1de9d420aa49cd55bfa7bc716',
      texte: 'Tu ne manques presque rien, et plusieurs classes à la fois.' },
    { label: 'Passionné',      pose: '6af3efd96c624815b2c19c7935ff36c5',
      texte: 'La course fait partie de tes journées. Peu de monde en est là.' },
    { label: 'Légende',        pose: '18789740b75547869e150140259392d6',
      texte: 'Le sommet. Tu la connais mieux que ceux qui la commentent.' }
  ];
  const RANG_POSE_BASE = 'https://static.wixstatic.com/shapes/7bb303_';

  











  function tymalPalier(payload, label, taille) {
    const t = payload && payload.tymalRangs && payload.tymalRangs[label];
    if (t && t.image) {
      const id = String(t.image).split('/media/')[1] || '';
      const src = id ? t.image + '/v1/fit/w_' + taille + ',h_' + taille + ',q_90,enc_auto/' + id : t.image;
      return { src, echelle: Number(t.echelle) || 0 };
    }
    const pose = (RANG_FRISE.find(p => p.label === label) || {}).pose;
    return pose ? { src: RANG_POSE_BASE + pose + '.svg', echelle: RANG_POSE_ECHELLE[pose] || 0 } : null;
  }

  

















  const RANG_POSE_ECHELLE = {
    'b5fd53d83d734fb495151da65ae33e62': 88,    
    'f988a7dcb4b84d7da9025f998a5cb6a2': 84     
  };

  



  function rangIndex(label) {
    if (!label) return -1;
    return RANG_FRISE.findIndex(p => p.label === label);
  }


  function countUnlockedBadges(payload) {
    const badges = payload?.badges;
    if (!Array.isArray(badges)) return 0;
    return badges.filter(b => b && b.state === 'unlocked').length;
  }

   
  





  function dessinerCarteFan(o) {
    const L = 1080, H = 1920;
    const accent = /^#[0-9a-f]{6}$/i.test(String(o.accent || '')) ? o.accent : '#5DBFC0';
    const c = document.createElement('canvas');
    c.width = L; c.height = H;
    const ctx = c.getContext('2d');
     
    const espace = (t, x, y, e) => { let cx = x; for (const ch of t) { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + e; } return cx - x - e; };
    const largeur = (t, e) => { let w = 0; for (const ch of t) w += ctx.measureText(ch).width + e; return w - e; };
     
    const espaceAjuste = (t, poids, x, y, max, taille, mini, e) => {
      let z = taille;
      do { ctx.font = poids + ' ' + z + 'px Montserrat'; if (largeur(t, e * z / taille) <= max) break; z -= 1; } while (z > mini);
      return espace(t, x, y, e * z / taille);
    };
    const ajuster = (t, police, max, taille, mini) => {
      let z = taille;
      do { ctx.font = police.replace('{t}', z); if (ctx.measureText(t).width <= max) break; z -= 4; } while (z > mini);
      return z;
    };
    const couvrir = (img, x, y, w, h) => {
      const r = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const iw = img.naturalWidth * r, ih = img.naturalHeight * r;
      ctx.drawImage(img, x + (w - iw) / 2, y, iw, ih);
    };
    const coeur = (x, y, t, couleur) => {
      ctx.save(); ctx.translate(x, y); ctx.scale(t / 24, t / 24); ctx.fillStyle = couleur;
      ctx.beginPath(); ctx.moveTo(12, 21); ctx.bezierCurveTo(12, 21, 4.5, 16.4, 2.5, 11.7); ctx.bezierCurveTo(1, 8, 3.4, 4.5, 7, 4.5);
      ctx.bezierCurveTo(9, 4.5, 10.6, 5.6, 12, 7.5); ctx.bezierCurveTo(13.4, 5.6, 15, 4.5, 17, 4.5); ctx.bezierCurveTo(20.6, 4.5, 23, 8, 21.5, 11.7);
      ctx.bezierCurveTo(19.5, 16.4, 12, 21, 12, 21); ctx.fill(); ctx.restore();
    };
    const rondeur = (x, y, w, h, r) => { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); };

     
    let g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#16355D'); g.addColorStop(0.55, '#141A36'); g.addColorStop(1, '#0E111D');
    ctx.fillStyle = g; ctx.fillRect(0, 0, L, H);
    g = ctx.createRadialGradient(L * 0.85, 260, 0, L * 0.85, 260, 700);
    g.addColorStop(0, 'rgba(230,57,70,.38)'); g.addColorStop(1, 'rgba(230,57,70,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, L, H);
    g = ctx.createRadialGradient(120, 1500, 0, 120, 1500, 760);
    g.addColorStop(0, accent + '66'); g.addColorStop(1, accent + '00');
    ctx.fillStyle = g; ctx.fillRect(0, 0, L, H);

     
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
    coeur(90, 118, 44, '#F2636E');
    ctx.fillStyle = '#F2636E';
    espaceAjuste(o.kicker, '800', 150, 152, L - 240, 32, 20, 7);
    ctx.fillStyle = '#fff';
    const tAnnee = ajuster(o.annee, 'italic 400 {t}px Varien', L - 176, 86, 50);
    ctx.font = 'italic 400 ' + tAnnee + 'px Varien';
    ctx.fillText(o.annee, 88, 262);

     
    const cw = 780, ch = 1040;
    ctx.save(); ctx.translate(L / 2, 900); ctx.rotate(-4 * Math.PI / 180);
    ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 80; ctx.shadowOffsetY = 40;
    rondeur(-cw / 2, -ch / 2, cw, ch, [56, 10, 56, 10]); ctx.fillStyle = accent; ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.save(); rondeur(-cw / 2, -ch / 2, cw, ch, [56, 10, 56, 10]); ctx.clip();
    if (o.portrait) couvrir(o.portrait, -cw / 2, -ch / 2, cw, ch);
    g = ctx.createLinearGradient(0, ch * 0.05, 0, ch / 2);
    g.addColorStop(0, 'rgba(14,17,29,0)'); g.addColorStop(1, 'rgba(14,17,29,.95)');
    ctx.fillStyle = g; ctx.fillRect(-cw / 2, 0, cw, ch / 2);
    ctx.restore();
    rondeur(-cw / 2, -ch / 2, cw, ch, [56, 10, 56, 10]); ctx.lineWidth = 6; ctx.strokeStyle = '#E63946'; ctx.stroke();
    if (o.ecusson && o.ecusson.naturalHeight) {
      const eh = 190, ew = eh * o.ecusson.naturalWidth / o.ecusson.naturalHeight;
      ctx.drawImage(o.ecusson, cw / 2 - ew - 44, -ch / 2 - 18, ew, eh);
    }
     
    ctx.font = '800 28px Montserrat';
    const lr = Math.min(cw - 120, largeur(o.numeroUn, 3) + 110);
    ctx.fillStyle = '#E63946'; rondeur(-cw / 2 + 36, -ch / 2 + 40, lr, 70, [26, 6, 26, 6]); ctx.fill();
    coeur(-cw / 2 + 58, -ch / 2 + 54, 40, '#fff');
    ctx.fillStyle = '#fff';
    espaceAjuste(o.numeroUn, '800', -cw / 2 + 112, -ch / 2 + 85, lr - 96, 28, 18, 3);
     
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    espaceAjuste(o.prenom, '400', -cw / 2 + 50, ch / 2 - 250, cw - 110, 40, 22, 14);
    const tNom = ajuster(o.nom, 'italic 400 {t}px Varien', cw - 100, 150, 70);
    ctx.font = 'italic 400 ' + tNom + 'px Varien';
    ctx.fillStyle = '#fff'; ctx.fillText(o.nom, -cw / 2 + 46, ch / 2 - 250 + tNom * 0.95);
    ctx.fillStyle = accent;
    if (o.bateau) espaceAjuste(o.bateau, '700', -cw / 2 + 50, ch / 2 - 250 + tNom * 0.95 + 62, cw - 110, 30, 18, 4);
    ctx.restore();

     
    ctx.fillStyle = '#fff';
    const tAppel = ajuster(o.appel, 'italic 400 {t}px Varien', L - 176, 96, 56);
    ctx.font = 'italic 400 ' + tAppel + 'px Varien';
    ctx.fillText(o.appel, 88, 1600);
    ctx.fillStyle = '#F7EC4B';
    const tAdresse = ajuster(o.adresse, '800 {t}px Montserrat', L - 180, 34, 18);
    ctx.font = '800 ' + tAdresse + 'px Montserrat';
    ctx.fillText(o.adresse, 90, H - 150);
    ctx.fillStyle = 'rgba(238,242,248,.7)';
    espaceAjuste(o.ligne1, '700', 90, H - 96, L - 180, 26, 16, 4);
    ctx.fillStyle = 'rgba(238,242,248,.5)';
    espaceAjuste(o.ligne2, '600', 90, H - 58, L - 180, 24, 16, 3);
    return c;
  }
  



















  function ouvrirCarteFan(o) {
    const t = o.en
      ? { titre: 'Share their card', partager: 'Share', lien: 'Share the link', enregistrer: 'Save', image: 'Save the image', faite: 'Image saved', copier: 'Copy link', copie: 'Link copied', fermer: 'Close', attente: 'Making the card…', panne: 'Card unavailable', alt: o.nom + ' fan card' }
      : { titre: 'Partager sa carte', partager: 'Partager', lien: 'Partager le lien', enregistrer: 'Enregistrer', image: 'Enregistrer l’image', faite: 'Image enregistrée', copier: 'Copier le lien', copie: 'Lien copié', fermer: 'Fermer', attente: 'Fabrication de la carte…', panne: 'Carte indisponible', alt: 'Carte de fan de ' + o.nom };
    const esc = (v) => String(v == null ? '' : v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const ic = (d, w) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
    const icPartager = ic('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>', 2.2);
    const icTelecharger = ic('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>');
    const F = 'font-family:Montserrat,system-ui,sans-serif;';

    if (!document.getElementById('rdr-cartepop-feuille')) {
      const feuille = document.createElement('style');
      feuille.id = 'rdr-cartepop-feuille';
      feuille.textContent = [
        '.rdr-cartepop{position:fixed;inset:0;z-index:10003;box-sizing:border-box;width:100%;height:100%;max-width:none;max-height:none;margin:0;',
        'padding:max(16px,env(safe-area-inset-top)) 16px max(16px,env(safe-area-inset-bottom));border:0;background:transparent;color:#fff;overflow:hidden;',
        F + '--h:min(560px,calc(100vh - 230px));--w:calc(var(--h) * 9 / 16)}',
        '@supports (height:100dvh){.rdr-cartepop{--h:min(560px,calc(100dvh - 230px))}}',
        '.rdr-cartepop[open]{display:grid;place-items:center}',
        '.rdr-cartepop::backdrop{background:transparent}',
        '.rdr-cartepop *{box-sizing:border-box}',
        '.rdr-cartepop-fond{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(22,53,93,.86),rgba(5,10,24,.94) 70%);',
        '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;transition:opacity .25s ease}',
        '.rdr-cartepop-x{position:absolute;top:max(14px,env(safe-area-inset-top));right:14px;width:44px;height:44px;margin:0;padding:0;border-radius:50%;',
        'display:grid;place-items:center;cursor:pointer;color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.18);',
        'opacity:0;transition:opacity .25s ease,background .15s ease,border-color .15s ease}',
        '@media (hover:hover) and (pointer:fine){.rdr-cartepop-x:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.4)}}',
        '.rdr-cartepop-x svg{width:18px;height:18px}',
        '.rdr-cartepop-corps{position:relative;display:flex;flex-direction:column;align-items:center;gap:18px;width:max(var(--w),310px);max-width:100%;',
        'outline:none;opacity:0;transform:translateY(28px) scale(.94);transition:opacity .3s ease,transform .55s cubic-bezier(.2,.9,.25,1.15)}',
        '.rdr-cartepop[data-ouvert] .rdr-cartepop-fond,.rdr-cartepop[data-ouvert] .rdr-cartepop-x,.rdr-cartepop[data-ouvert] .rdr-cartepop-corps{opacity:1}',
        '.rdr-cartepop[data-ouvert] .rdr-cartepop-corps{transform:none}',
        '.rdr-cartepop-titre{margin:0;padding:0;' + F + 'font-size:12px;font-weight:700;line-height:1;letter-spacing:.2em;text-transform:uppercase;color:#5DBFC0}',
        '.rdr-cartepop-scene{position:relative;width:var(--w);height:var(--h);perspective:900px}',
        '.rdr-cartepop-ombre{position:absolute;left:8%;right:8%;top:12%;bottom:-2%;border-radius:30px;background:rgba(0,0,0,.7);filter:blur(26px);will-change:transform}',
        '.rdr-cartepop-carte{position:absolute;inset:0;border-radius:18px;overflow:hidden;background:#151A33;will-change:transform;touch-action:none;cursor:grab;',
        'box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}',
        '.rdr-cartepop-carte.est-prise{cursor:grabbing}',
        '.rdr-cartepop-carte img{display:block;width:100%;height:100%;max-width:none;object-fit:cover;opacity:0;transition:opacity .35s ease;',
        '-webkit-user-drag:none;user-select:none;pointer-events:none}',
        '.rdr-cartepop-carte[data-etat="prete"] img{opacity:1}',
        

        '.rdr-cartepop-reflet,.rdr-cartepop-holo{position:absolute;pointer-events:none;will-change:transform}',
        '.rdr-cartepop-reflet{left:-50%;top:-50%;width:200%;height:200%;',
        'background:radial-gradient(closest-side,rgba(255,255,255,.42),rgba(255,255,255,.12) 45%,rgba(255,255,255,0) 75%);mix-blend-mode:overlay}',
        '.rdr-cartepop-holo{left:-100%;top:0;width:300%;height:100%;mix-blend-mode:soft-light;',
        'background:linear-gradient(105deg,rgba(255,255,255,0) 40%,rgba(252,241,80,.1) 46%,rgba(255,255,255,.22) 50%,rgba(93,191,192,.14) 54%,rgba(255,255,255,0) 60%)}',
        '.rdr-cartepop-attente{position:absolute;inset:0;display:grid;place-items:center;padding:0 16px;text-align:center;' + F,
        'font-size:11px;font-weight:600;line-height:1.4;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55);',
        'background:linear-gradient(110deg,#151A33 30%,#1E2547 50%,#151A33 70%) 0 0/300% 100%;animation:rdr-cartepop-lueur 1.4s linear infinite}',
        '.rdr-cartepop-carte[data-etat="prete"] .rdr-cartepop-attente{display:none}',
        '.rdr-cartepop-carte[data-etat="panne"] .rdr-cartepop-attente{animation:none}',
        '@keyframes rdr-cartepop-lueur{to{background-position:-150% 0}}',
        '.rdr-cartepop-gestes{display:flex;flex-direction:column;gap:10px;width:100%}',
        '.rdr-cartepop-partager{display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;margin:0;padding:0 20px;border:0;',
        'border-radius:3px 15px 3px 15px;cursor:pointer;background:#FCF150;color:#16355D;' + F + 'font-size:13px;font-weight:800;letter-spacing:.08em;',
        'text-transform:uppercase;transition:background .15s ease,transform .15s ease,box-shadow .15s ease}',
        '@media (hover:hover) and (pointer:fine){.rdr-cartepop-partager:hover{background:#FFE500;transform:translateY(-1px);box-shadow:0 6px 18px rgba(252,241,80,.25)}}',
        '.rdr-cartepop-partager:disabled{opacity:.5;cursor:default;transform:none;box-shadow:none}',
        '.rdr-cartepop svg{flex:none}',
        '.rdr-cartepop-partager svg,.rdr-cartepop-second svg{width:16px;height:16px}',
        '.rdr-cartepop-seconds{display:flex;flex-wrap:wrap;justify-content:center;gap:4px}',
        '.rdr-cartepop-second{display:inline-flex;align-items:center;gap:7px;max-width:100%;min-height:44px;margin:0;padding:0 10px;border:0;border-radius:10px;',
        'background:transparent;cursor:pointer;white-space:nowrap;' + F + 'font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;',
        'color:#5DBFC0;transition:color .15s ease,background .15s ease}',
        '.rdr-cartepop-second span{overflow:hidden;text-overflow:ellipsis}',
        '@media (hover:hover) and (pointer:fine){.rdr-cartepop-second:hover{color:#fff;background:rgba(255,255,255,.06)}}',
        '.rdr-cartepop-second[hidden]{display:none}',
        '.rdr-cartepop :focus-visible{outline:2px solid #5DBFC0;outline-offset:3px}',
        

        '.rdr-cartepop-corps:focus,.rdr-cartepop-corps:focus-visible{outline:none}',
        '@media (prefers-reduced-motion:reduce){.rdr-cartepop-corps{transform:none;transition:opacity .2s ease}.rdr-cartepop-attente{animation:none}}'
      ].join('');
      document.head.appendChild(feuille);
    }

    const d = document.createElement('dialog');
    d.className = 'rdr-cartepop';
    d.setAttribute('aria-labelledby', 'rdr-cartepop-titre');
    d.innerHTML =
      '<div class="rdr-cartepop-fond" data-fermer></div>' +
      '<button class="rdr-cartepop-x" type="button" data-fermer aria-label="' + esc(t.fermer) + '">' + ic('<path d="M6 6l12 12M18 6L6 18"/>') + '</button>' +
      '<div class="rdr-cartepop-corps" tabindex="-1" autofocus>' +
        '<h2 class="rdr-cartepop-titre" id="rdr-cartepop-titre">' + esc(t.titre) + '</h2>' +
        '<div class="rdr-cartepop-scene"><div class="rdr-cartepop-ombre"></div>' +
          '<div class="rdr-cartepop-carte" data-etat="attente"><img alt="' + esc(t.alt) + '">' +
          '<span class="rdr-cartepop-attente">' + esc(t.attente) + '</span>' +
          '<span class="rdr-cartepop-holo"></span><span class="rdr-cartepop-reflet"></span></div>' +
        '</div>' +
        '<div class="rdr-cartepop-gestes" aria-live="polite">' +
          '<button class="rdr-cartepop-partager" type="button" disabled>' + icPartager + '<span>' + esc(t.partager) + '</span></button>' +
          '<div class="rdr-cartepop-seconds">' +
            '<button class="rdr-cartepop-second" type="button" data-geste="enregistrer" hidden>' + icTelecharger + '<span>' + esc(t.enregistrer) + '</span></button>' +
            '<button class="rdr-cartepop-second" type="button" data-geste="copier">' +
              ic('<path d="M10 14a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 5.43"/><path d="M14 10a5 5 0 0 0-7.07 0L4.1 12.83a5 5 0 0 0 7.07 7.07l1.33-1.33"/>') +
              '<span>' + esc(t.copier) + '</span></button>' +
          '</div>' +
        '</div>' +
      '</div>';

    const carte = d.querySelector('.rdr-cartepop-carte');
    const ombre = d.querySelector('.rdr-cartepop-ombre');
    const reflet = d.querySelector('.rdr-cartepop-reflet');
    const holo = d.querySelector('.rdr-cartepop-holo');
    const bPartager = d.querySelector('.rdr-cartepop-partager');
    const bTelecharger = d.querySelector('[data-geste="enregistrer"]');
    const bCopier = d.querySelector('[data-geste="copier"]');
    let fichier = null, objet = '', ferme = false, raf = 0;
    const signaler = (methode) => { if (typeof o.surPartage === 'function') o.surPartage(methode); };

     
    const b = document.body;
    const y = window.scrollY || window.pageYOffset || 0;
    const avant = { position: b.style.position, top: b.style.top, left: b.style.left, right: b.style.right, width: b.style.width, overflow: b.style.overflow };
    let verrou = b.style.position !== 'fixed';
    if (verrou) Object.assign(b.style, { position: 'fixed', top: -y + 'px', left: '0', right: '0', width: '100%', overflow: 'hidden' });
    const deverrouiller = () => {
      if (!verrou) return;
      verrou = false;
      Object.assign(b.style, avant);
      try { window.scrollTo(0, y); } catch (e) {   }
    };

     
    const doux = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const borne = (v) => Math.max(-1, Math.min(1, v));
    let cible = { x: 0, y: 0 }, cour = { x: doux ? 0 : -0.9, y: doux ? 0 : 0.35 }, souris = false, prise = null;
    const t0 = performance.now();
    const image = (maintenant) => {
      if (!souris && !prise) {
        const s = (maintenant - t0) / 1000;
        cible = { x: 0.3 * Math.sin(s * 0.9), y: 0.14 * Math.sin(s * 0.63 + 1) };
      }
      cour.x += (cible.x - cour.x) * 0.09;
      cour.y += (cible.y - cour.y) * 0.09;
      carte.style.transform = 'rotateX(' + (-cour.y * 16).toFixed(2) + 'deg) rotateY(' + (cour.x * 22).toFixed(2) + 'deg)';
      ombre.style.transform = 'translate3d(' + (-cour.x * 22).toFixed(1) + 'px,' + (18 - cour.y * 14).toFixed(1) + 'px,0)';
      reflet.style.transform = 'translate3d(' + (cour.x * 30).toFixed(1) + '%,' + (cour.y * 30).toFixed(1) + '%,0)';
      holo.style.transform = 'translate3d(' + (-cour.x * 22 - cour.y * 6).toFixed(1) + '%,0,0)';
      raf = requestAnimationFrame(image);
    };
    if (!doux) {
      

      d.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
          souris = true;
          const r = carte.getBoundingClientRect();
          cible = { x: borne((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)), y: borne((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)) };
        } else if (prise && e.pointerId === prise.id) {
          cible = { x: borne(prise.x + (e.clientX - prise.cx) / 110), y: borne(prise.y + (e.clientY - prise.cy) / 150) };
        }
      });
      d.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') cible = { x: 0, y: 0 }; });
      carte.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') return;
        prise = { id: e.pointerId, cx: e.clientX, cy: e.clientY, x: cour.x, y: cour.y };
        carte.classList.add('est-prise');
        try { carte.setPointerCapture(e.pointerId); } catch (err) {   }
      });
      const lacher = () => { if (!prise) return; prise = null; souris = false; cible = { x: 0, y: 0 }; carte.classList.remove('est-prise'); };
      carte.addEventListener('pointerup', lacher);
      carte.addEventListener('pointercancel', lacher);
      raf = requestAnimationFrame(image);
    }

     
    const fermer = () => {
      if (ferme) return;
      ferme = true;
      cancelAnimationFrame(raf);
      deverrouiller();
      d.removeAttribute('data-ouvert');
      setTimeout(() => {
        try { if (d.open) d.close(); } catch (e) {   }
        d.remove();
        if (objet) URL.revokeObjectURL(objet);
        try { if (o.declencheur && o.declencheur.isConnected) o.declencheur.focus({ preventScroll: true }); } catch (e) {   }
      }, 260);
    };
    d.querySelectorAll('[data-fermer]').forEach((x) => x.addEventListener('click', fermer));
    d.addEventListener('cancel', (e) => { e.preventDefault(); fermer(); });
    d.addEventListener('close', fermer);

     
    const dire = (bouton, texte) => {
      const s = bouton.querySelector('span');
      if (!s.dataset.texte) s.dataset.texte = s.textContent;
      s.textContent = texte;
      clearTimeout(bouton.minuteur);
      bouton.minuteur = setTimeout(() => { s.textContent = s.dataset.texte; }, 2200);
    };
    const peutFichier = () => { try { return !!fichier && typeof navigator.canShare === 'function' && navigator.canShare({ files: [fichier] }); } catch (e) { return false; } };
    const enregistrer = (bouton) => {
      if (!fichier) return;
      const a = document.createElement('a');
      a.href = objet; a.download = fichier.name; a.style.display = 'none';
      document.body.appendChild(a); a.click(); a.remove();
      dire(bouton, t.faite);
      signaler('telechargement');
    };
    const copier = async (bouton) => {
      try { await navigator.clipboard.writeText(o.url); dire(bouton, t.copie); signaler('copie'); } catch (e) { dire(bouton, o.url); }
    };
    bPartager.addEventListener('click', async () => {
      if (!fichier) {
        try {
          if (typeof navigator.share === 'function') { await navigator.share({ title: o.titre, text: o.texte, url: o.url }); signaler('natif'); return; }
        } catch (e) { if (e && e.name === 'AbortError') return; }
        copier(bPartager);
        return;
      }
      if (peutFichier()) {
        try {
          

          await navigator.share({ files: [fichier], title: o.titre, text: o.texte + ' ' + o.url });
          signaler('image');
          return;
        } catch (e) { if (e && e.name === 'AbortError') return; }
      }
      enregistrer(bPartager);
    });
    bTelecharger.addEventListener('click', () => enregistrer(bTelecharger));
    bCopier.addEventListener('click', () => copier(bCopier));

     
    document.body.appendChild(d);
    try {
      if (typeof d.showModal === 'function') d.showModal();
      else { d.setAttribute('open', ''); d.querySelector('.rdr-cartepop-corps').focus({ preventScroll: true }); }
    } catch (e) { d.setAttribute('open', ''); }
    requestAnimationFrame(() => requestAnimationFrame(() => { if (!ferme) d.setAttribute('data-ouvert', ''); }));

     
    Promise.resolve(o.fichier).catch(() => null).then((f) => {
      if (ferme) return;
      bPartager.disabled = false;
      if (!f) {
        carte.dataset.etat = 'panne';
        d.querySelector('.rdr-cartepop-attente').textContent = t.panne;
        bPartager.querySelector('span').textContent = t.lien;
        return;
      }
      fichier = f;
      objet = URL.createObjectURL(f);
      const img = carte.querySelector('img');
      img.onload = () => { carte.dataset.etat = 'prete'; };
      img.src = objet;
      

      if (peutFichier()) bTelecharger.hidden = false;
      else bPartager.innerHTML = icTelecharger + '<span>' + esc(t.image) + '</span>';
    });

    return fermer;
  }
   

  function findClassConfig(classeName) {
    if (!classeName) return null;
    const needle = String(classeName).toLowerCase();
    return CLASSES_CONFIG.find(c => c.label.toLowerCase() === needle) || null;
  }

   
   
   
  function formatTimeAgoLang(isoDate, lang) {
    if (lang !== 'en') return formatTimeAgo(isoDate);
    if (!isoDate) return '';
    const ms = Date.now() - new Date(isoDate).getTime();
    if (!Number.isFinite(ms) || ms < 0) return '';
    const min = Math.round(ms / 60000);
    if (min < 1) return 'just now';
    if (min < 60) return `${min} min ago`;
    const h = Math.round(min / 60);
    if (h < 24) return `${h} h ago`;
    const d = Math.round(h / 24);
    if (d < 7) return `${d} d ago`;
    return `${Math.round(d / 7)} w ago`;
  }

   
  function formatTimeAgo(isoDate) {
    if (!isoDate) return '';
    const ms = Date.now() - new Date(isoDate).getTime();
    if (!Number.isFinite(ms) || ms < 0) return '';
    const min = Math.round(ms / 60000);
    if (min < 1) return "à l'instant";
    if (min < 60) return `il y a ${min} min`;
    const h = Math.round(min / 60);
    if (h < 24) return `il y a ${h} h`;
    const d = Math.round(h / 24);
    if (d < 7) return `il y a ${d} j`;
    return `il y a ${Math.round(d / 7)} sem`;
  }

  function computeStatFact(key, value, rangLabel) {
    if (key === 'percentile') return rangLabel || 'Pas encore classé';
    if (value === 0 || value == null) return 'Tes premiers pas';
    if (key === 'daysStreak') {
      if (value > 30) return 'Plus long que la course';
      if (value > 14) return 'Déjà une quinzaine !';
      return 'Continue comme ça';
    }
    if (key === 'articlesRead') {
      if (value > 100) return 'Un vrai lecteur';
      if (value > 30) return 'Tu suis le fil';
      return 'Premiers pas';
    }
    if (key === 'profilesViewed') {
      if (value > 20) return 'Explorateur';
      if (value > 5) return 'Curieux';
      return 'À découvrir';
    }
    return '';
  }

  function pickFlashNews(payload) {
    const reco = payload?.recoArticles;
    if (!Array.isArray(reco) || !reco.length) return null;
    const tierOrder = ['critical', 'major', 'editorial', 'contextual', 'core'];
    for (const tier of tierOrder) {
      const hit = reco.find(a => Array.isArray(a?.pastilles) && a.pastilles.some(p => p?.tier === tier));
      if (hit) {
        const pastille = hit.pastilles.find(p => p?.tier === tier);
        return { article: hit, pastille };
      }
    }
    return { article: reco[0], pastille: null };
  }

   
  class EspaceRhum extends HTMLElement {
    constructor() {
      super();
      this._payload = null;
      this._removeTimers = [];
      this._escFilterSheetHandler = null;
      this._escSidebarHandler = null;
       
      this._escBadgeModalHandler = null;
      this._badgeTileHandlers = [];
      this._badgesFilterHandlers = [];
      this._toastTimers = [];
      this._observers = [];
      this._lastFocused = null;
    }

    connectedCallback() {
      injectGlobalStyle(STYLE_ID_TOKENS, sansSurvolTactile(TOKENS_CSS));
      





      const aller = this.getAttribute('aller');
      if (aller) { this._aller = aller; this._allerVu = true; }
      const suiviRejoue = this.getAttribute('suivi-rejoue');
      if (suiviRejoue) this._suiviRejoue = suiviRejoue;
      injectGlobalStyle('er-memoire-style', MEMOIRE_CSS);
      const membre = this.getAttribute('membre');
      if (membre) this._membre = membre;
      this._depuisMemoire();
      this._tenirLeHaut();
      


      if (!this._surAllerNotif) {
        this._surAllerNotif = (e) => {
          const vers = String(e?.detail?.vers || '');
          if (!vers || vers === 'dashboard') {
            try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (err) { window.scrollTo(0, 0); }
            return;
          }
          this._aller = vers;
          this._allerVu = true;
          this._honorerAller();
        };
        window.addEventListener('rdr-espace-aller', this._surAllerNotif);
      }
      this._brancherRelaisNotifications();
      const notifs = this.getAttribute('notifications');
      if (notifs) { this._notifsEnAttente = notifs; this._remettreNotifications(); }
      this._render();
    }

    










    _tenirLeHaut() {
      if (EspaceRhum._hautTenu) return;
      EspaceRhum._hautTenu = true;
      try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {   }
      let touche = false;
      const marque = () => { touche = true; };
      ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(t => window.addEventListener(t, marque, { once: true, passive: true }));
      this._remonter = () => {
        if (touche || this._allerVu || this._bodyLockY != null) return;
        if (location.hash || /[?&]go=/.test(location.search)) return;
        if ((window.scrollY || window.pageYOffset || 0) <= 0) return;
        try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); }
      };
      this._remonter();
      window.addEventListener('load', () => this._remonter(), { once: true });
      window.addEventListener('pageshow', () => this._remonter(), { once: true });
    }

    disconnectedCallback() {
      clearInterval(this._top50Timer); this._top50Timer = null;
      if (this._top50Esc) { document.removeEventListener('keydown', this._top50Esc); this._top50Esc = null; }
      if (this._ioCarteFan) { this._ioCarteFan.disconnect(); this._ioCarteFan = null; }
      this._desarmerCoupPouce();
       
      if (this._fermerCarteFan) { this._fermerCarteFan(); this._fermerCarteFan = null; }
      if (this._surAllerNotif) { window.removeEventListener('rdr-espace-aller', this._surAllerNotif); this._surAllerNotif = null; }
      this._debrancherRelaisNotifications();
      this._teardown();
       
       
      this._renderedSig = null;
    }

    _teardown() {
       
       
      if (this._roNomsSugg) { this._roNomsSugg.disconnect(); this._roNomsSugg = null; }
      if (this._escPackHandler) {
        document.removeEventListener('keydown', this._escPackHandler);
        this._escPackHandler = null;
      }
      if (this._escProfileHandler) {
        document.removeEventListener('keydown', this._escProfileHandler);
        this._escProfileHandler = null;
      }
      if (this._trapProfileHandler) {
        document.removeEventListener('keydown', this._trapProfileHandler);
        this._trapProfileHandler = null;
      }
      if (this._escInstaHandler) {
        document.removeEventListener('keydown', this._escInstaHandler);
        this._escInstaHandler = null;
      }
      if (this._escBadgesInfoHandler) {
        document.removeEventListener('keydown', this._escBadgesInfoHandler);
        this._escBadgesInfoHandler = null;
      }
      clearTimeout(this._roueTimer);
      clearInterval(this._roueCompteTimer);
      clearInterval(this._pronosCompteTimer);
       
      if (this._skeletonSlowTimer) { clearTimeout(this._skeletonSlowTimer); this._skeletonSlowTimer = null; }
      








      if (this._profilePromptTimer) { clearTimeout(this._profilePromptTimer); this._profilePromptTimer = null; }
       
      this._removeTimers.forEach(id => clearTimeout(id));
      this._removeTimers = [];
      (this._toastTimers || []).forEach(id => clearTimeout(id));
      this._toastTimers = [];

       
      if (this._rangDehorsHandler) {
        document.removeEventListener('click', this._rangDehorsHandler);
        this._rangDehorsHandler = null;
      }
      if (this._escRangHandler) {
        document.removeEventListener('keydown', this._escRangHandler);
        this._escRangHandler = null;
      }
      this._fermerRangPop = null;
      this._fermerRangSheet = null;
      if (this._escFilterSheetHandler) {
        document.removeEventListener('keydown', this._escFilterSheetHandler);
        this._escFilterSheetHandler = null;
      }
      if (this._escSidebarHandler) {
        document.removeEventListener('keydown', this._escSidebarHandler);
        this._escSidebarHandler = null;
      }
      if (this._escBadgeModalHandler) {
        document.removeEventListener('keydown', this._escBadgeModalHandler);
        this._escBadgeModalHandler = null;
      }
      if (this._escPrefsHandler) {
        document.removeEventListener('keydown', this._escPrefsHandler);
        this._escPrefsHandler = null;
      }
       
      if (this._pickOutsideHandler) {
        document.removeEventListener('click', this._pickOutsideHandler);
        this._pickOutsideHandler = null;
      }
      if (this._pickScrollHandler) {
        window.removeEventListener('scroll', this._pickScrollHandler);
        this._pickScrollHandler = null;
      }
      

      this._pickFeuilleFermer();
      if (this._pickEscHandler) {
        document.removeEventListener('keydown', this._pickEscHandler);
        this._pickEscHandler = null;
      }
      if (this._whyOutsideHandler) {
        document.removeEventListener('click', this._whyOutsideHandler);
        this._whyOutsideHandler = null;
      }
      if (this._escVilmobHandler) {
        document.removeEventListener('keydown', this._escVilmobHandler);
        this._escVilmobHandler = null;
      }
      if (this._dateOutsideHandler) {
        document.removeEventListener('click', this._dateOutsideHandler);
        this._dateOutsideHandler = null;
      }
      this._datePickState = null;
      this._datePickPaint = null;

       
      (this._badgeTileHandlers || []).forEach(({ tile, handler, evt }) => {
        tile.removeEventListener(evt || 'click', handler);
      });
      this._badgeTileHandlers = [];
      (this._badgesFilterHandlers || []).forEach(({ btn, handler }) => {
        btn.removeEventListener('click', handler);
      });
      this._badgesFilterHandlers = [];

       
      (this._observers || []).forEach(obs => obs.disconnect());
      this._observers = [];

       
      this._unlockBodyScroll();

       
      this.querySelector?.('.er-toasts-container')?.replaceChildren();

      this._lastFocused = null;
    }

     
     
     
    static get observedAttributes() { return ['payload', 'state', 'lang', 'aller', 'membre', 'suivi-rejoue', 'notifications','pack-result', 'roue-result', 'prono-result', 'combat-result', 'export-result', 'account-result', 'article-state-result']; }

    _lang() { return this.getAttribute('lang') === 'en' ? 'en' : 'fr'; }

    attributeChangedCallback(name, _oldVal, newVal) {
      if (name === 'payload') {
         
         
         
        if (_oldVal === newVal) return;
        try { this._payload = newVal ? JSON.parse(newVal) : null; }
        catch { this._payload = null; }
        


        if (this._payload && this._enMemoire) { this._enMemoire = false; this._rafraichi = !!this._memoireVue; }
        this._memoireVue = false;
        if (this.isConnected) this._render();
        if (this._payload) ecrireMemoire(this._membre || (this._payload.member && this._payload.member.id) || '', this._lang(), this._payload);
      }
      if (name === 'membre') {
        this._membre = newVal || '';
        if (this.isConnected) this._depuisMemoire();
      }
      if (name === 'lang') {
        if (_oldVal === newVal) return;
        if (this.isConnected) this._render();
      }
      if (name === 'aller') {
        if (!newVal) return;
        this._aller = newVal;
        this._allerVu = true;
        

        if (this.isConnected) this._honorerAller();
      }
      if (name === 'suivi-rejoue') {
        if (!newVal) return;
        this._suiviRejoue = newVal;
        if (this.isConnected) this._honorerSuiviRejoue();
      }
      if (name === 'notifications') {
        if (!newVal) return;
        this._notifsEnAttente = newVal;
        this._remettreNotifications();
      }
      if (name === 'export-result') {
        if (!newVal) return;
        let res = null;
        try { res = JSON.parse(newVal); } catch { res = null; }
        


        this.exportDataResultat(res ? res.donnees : null);
      }
      if (name === 'account-result') {
        if (!newVal) return;
        let res = null;
        try { res = JSON.parse(newVal); } catch { res = null; }
        this.deleteAccountResultat(res);
      }
      if (name === 'article-state-result') {
        


        if (!newVal) return;
        this._retourEtatArticle(newVal);
      }
      if (name === 'combat-result') {
        if (!newVal) return;
        let res = null;
        try { res = JSON.parse(newVal); } catch { res = null; }
        if (res) this.combatResultat(res);
      }
      if (name === 'prono-result') {
         
        if (!newVal) return;
        let res = null;
        try { res = JSON.parse(newVal); } catch { res = null; }
        if (res) this.pronoResultat(res);
      }
      if (name === 'roue-result') {
         
        if (!newVal) return;
        let res = null;
        try { res = JSON.parse(newVal); } catch { res = null; }
        if (res) this.roueResultat(res);
      }
      if (name === 'pack-result') {
         
         
        if (!newVal) return;
        let res = null;
        try { res = JSON.parse(newVal); } catch { res = null; }
        if (res) this.packFanResultat(res);
      }
      if (name === 'state') {
         
         
        this._state = newVal || '';
        

        if (this._state === 'indispo' && this._enMemoire) { this._payload = null; this._enMemoire = false; }
        if (this.isConnected) this._render();
      }
    }

    _depuisMemoire() {
      if (this._payload || !this._membre) return;
      const m = lireMemoire(this._membre, this._lang());
      if (!m) return;
      this._payload = m.payload; this._enMemoire = true; this._memoireLe = m.le;
      if (this.isConnected) this._render();
      

      this._memoireVue = false;
      const vue = () => { if (this._enMemoire) this._memoireVue = true; };
      try { requestAnimationFrame(() => requestAnimationFrame(vue)); } catch (e) {   }
    }

    




    _finirEntrees() {
      if (typeof this.getAnimations !== 'function') return;
      try {
        this.getAnimations({ subtree: true }).forEach(a => {
          const t = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : null;
          if (t && isFinite(t.endTime)) a.finish();
        });
      } catch (e) {   }
    }

    _poserEtatMemoire() {
      this.classList.toggle('er-memoire', !!this._enMemoire);
      if (this._enMemoire) {
        const pill = document.createElement('div');
        pill.className = 'er-memoire-pill'; pill.setAttribute('role', 'status'); pill.setAttribute('aria-live', 'polite');
        pill.textContent = this._lang() === 'en' ? 'Updating…' : 'Mise à jour…';
        this.appendChild(pill);
      }
    }

    _render() {
       
       
       
       
       
       
      const sig = `${this.getAttribute('payload') || (this._enMemoire ? 'memoire:' + this._memoireLe : '')}|${this._lang()}|${this._state || ''}`;
      if (this._renderedSig === sig && this.childElementCount > 0) return;
      this._renderedSig = sig;
      this._teardown();
      

      this.classList.toggle('er-memoire', !!(this._enMemoire && this._payload));
       
      if (!this._payload && this._state === 'indispo') {
        this.innerHTML = this._buildStatusScreen('indispo');
        this._i18n(this);
        const reload = this.querySelector('[data-action="er-reload"]');
        if (reload) reload.addEventListener('click', () => window.location.reload());
        return;
      }
       
       
       
      if (!this._payload) {
        this.innerHTML = this._buildSkeleton();
        this._i18n(this);
        this._startSkeletonSlowTimer();
        return;
      }
      








      const rafraichi = !!this._rafraichi;
      this.classList.toggle('er-rafraichi', rafraichi);
      this._rafraichi = false;
      this.innerHTML = this._buildHtml();
      this._i18n(this);
      this._wireNavLinks();
      this._wireApercu();
      this._wireFrise();
      this._wireRangIdentite();
      this._wireMonte();
      this._wireTop50();
      this._wirePreferencesButton();
      this._wireOpenProfileButton();
      this._wirePrefsModal();
      this._wireConfModal();
      this._wirePackFan();
      this._wireRoue();
      this._wirePronos();
      this._wireCombat();
      this._wireProfilePrompt();
      this._wireInstaClaim();
      this._wireNewsReco();
      this._maybeOpenProfilePrompt();
      this._wireHeroActions();
      this._wireSkipperCards();
      this._wireVoteSkipper();
      this._wireNavCtas();
      this._wireMobileFilterSheet();
      this._wireSidebarToggle();
      this._wireNewsCards();
      this._wireSuggestions();
      this._wireSuggestionsToggle();
      this._wireSectionLinks();
      this._wireSkippersExpand();
      this._wireBadges();
      this._poserEtatMemoire();
      if (rafraichi) this._finirEntrees();
       
      if (this._remonter && !this._remonteAuRendu) { this._remonteAuRendu = true; this._remonter(); }
      this._honorerAller();
      this._honorerSuiviRejoue();
    }

    









    _honorerSuiviRejoue() {
      const brut = this._suiviRejoue;
      if (!brut || !this._payload || !this.querySelector('.er-toasts-container')) return;
      this._suiviRejoue = null;
      try { this.removeAttribute('suivi-rejoue'); } catch (e) {   }
      let info = null;
      try { info = JSON.parse(brut); } catch (e) { info = null; }
      const prenom = String((info && info.prenom) || '').trim().slice(0, 60);
      const deja = !!(info && info.deja);
      const en = this._lang() === 'en';
      let texte;
      if (en) {
        texte = deja
          ? (prenom ? prenom + ' was already one of your skippers.' : 'This skipper was already one of your skippers.')
          : (prenom ? 'Done: ' + prenom + ' has joined your skippers.' : 'Done: this skipper has joined your skippers.');
      } else {
        texte = deja
          ? (prenom ? prenom + ' faisait déjà partie de tes skippers.' : 'Ce skipper faisait déjà partie de tes skippers.')
          : (prenom ? 'C’est fait : ' + prenom + ' a rejoint tes skippers.' : 'C’est fait : ce skipper a rejoint tes skippers.');
      }
      this._toastSimple(texte);
    }

    










    










    _remettreNotifications() {
      const json = this._notifsEnAttente;
      if (!json) return;
      const module = document.querySelector('rdr-notify');
      if (module) {
        this._notifsEnAttente = null;
        try { module.setAttribute('payload', json); } catch (e) {   }
        return;
      }
      if (!this._guetNotifsDebut) this._guetNotifsDebut = Date.now();
      if (Date.now() - this._guetNotifsDebut > 15000) return;
      clearTimeout(this._guetNotifs);
      this._guetNotifs = setTimeout(() => this._remettreNotifications(), 400);
    }

    _brancherRelaisNotifications() {
      if (this._relaisNotifs) return;
      this._relaisNotifs = (e) => {
        if (!e || !e.target || e.target.tagName !== 'RDR-NOTIFY') return;
        this.dispatchEvent(new CustomEvent('er-' + e.type, { bubbles: true, composed: true, detail: e.detail || {} }));
      };
      ['notify-seen', 'notify-dismiss', 'notify-refresh', 'notify-aller'].forEach(t =>
        document.addEventListener(t, this._relaisNotifs));
    }

    _debrancherRelaisNotifications() {
      if (!this._relaisNotifs) return;
      ['notify-seen', 'notify-dismiss', 'notify-refresh', 'notify-aller'].forEach(t =>
        document.removeEventListener(t, this._relaisNotifs));
      this._relaisNotifs = null;
      clearTimeout(this._guetNotifs);
    }

    _honorerAller() {
      const cle = this._aller;
      if (!cle) return;
      const SECTION = {
        'skipper-jour': '[data-slot="hero"]',
        'skippers':     '[data-slot="skippers-favoris"]',
        'actus':        '[data-slot="news-mix"]',
        'badges':       '[data-section="badges"]',
        'rangs':        '[data-section="rangs"]',
        'stats':        '[data-slot="stats"]',
        'pronos':       '[data-slot="pronos"]',
        'roue':         '[data-slot="roue"]'
      };
      const sel = SECTION[cle];
      const dest = sel ? this.querySelector(sel) : null;
      


      if (!dest) return;
      this._aller = null;
      try { this.removeAttribute('aller'); } catch (e) {   }
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => {
        try { dest.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
        catch (e) { dest.scrollIntoView(); }
      });
    }

    _wireSkippersExpand() {
      const btn = this.querySelector('[data-action="toggle-expand-skippers"]');
      if (!btn) return;
      const zone  = this.querySelector('#er-skippers-expanded-zone');
      const label = btn.querySelector('.er-skippers-expand-label');
      const count = parseInt(btn.dataset.overflowCount || '0', 10);
      const plural = count > 1 ? 's' : '';
      btn.addEventListener('click', () => {
        const currently = btn.getAttribute('aria-expanded') === 'true';
        const next = !currently;
        btn.setAttribute('aria-expanded', String(next));
        if (zone) {
          zone.dataset.expanded = String(next);
          zone.setAttribute('aria-hidden', String(!next));
        }
        if (label) {
          label.textContent = next ? 'Réduire' : `Voir les ${count} suivi${plural}`;
        }
      });
    }

    _resolveSkipperUrl(id) {
      const all = [this._payload?.skipperDuJour, ...(this._payload?.favSkippers || []), ...(this._payload?.recoSkippers || [])].filter(Boolean);
      const s = all.find(x => (x._id || x.id) === id);
      if (s?.['link-skippers-prenomNom']) return s['link-skippers-prenomNom'];
       
      const c = (this._payload?.skipperCatalog || []).find(x => x && x.id === id);
      return c?.lien || '';
    }

    _resolveArticleUrl(id) {
      








      const all = [
        ...(this._payload?.recoArticles || []),
        ...(this._payload?.articlesPlusTard || []),
        ...(this._payload?.articlesEcartes || [])
      ];
      const a = all.find(x => (x._id || x.id) === id);
      return a?.postPageUrl || '';
    }

     
     
    _navExternal(url, evtName, detail) {
      const touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      if (url && !touch) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        this.dispatchEvent(new CustomEvent(evtName, { bubbles: true, composed: true, detail }));
      }
    }

    _wireSectionLinks() {
      this.querySelectorAll('[data-action="go-page"]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = link.dataset.page;
          this._navExternal(page === 'actus' ? ACTUS_PAGE_PATH : SKIPPERS_PAGE_PATH, 'er-go-page', { page });
        });
      });
    }

    _wireMobileFilterSheet() {
      const sheet = this.querySelector('.er-mobile-filter-sheet');
      if (!sheet) return;

      const openBtn = this.querySelector('[data-action="mobile-filter"]');
      if (openBtn) {
        openBtn.addEventListener('click', () => this._openFilterSheet());
      }

      this.querySelectorAll('[data-action="close-filter-sheet"]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this._closeFilterSheet();
        });
      });

      const escHandler = (e) => {
        if (e.key === 'Escape' && sheet.dataset.open === 'true') {
          this._closeFilterSheet();
        }
      };
      document.addEventListener('keydown', escHandler);
      this._escFilterSheetHandler = escHandler;

       
      const SHEET_SECTION = { 'dashboard': null, 'skipper-jour': '[data-slot="hero"]', 'skippers': '[data-slot="skippers-favoris"]', 'actus': '[data-slot="news-mix"]', 'badges': '[data-section="badges"]', 'stats': '[data-slot="stats"]' };
      sheet.querySelectorAll('[data-sheet-nav]').forEach(link => {
        link.addEventListener('click', () => {
          const target = link.dataset.sheetNav;
          this._closeFilterSheet();
          const el = SHEET_SECTION[target] ? this.querySelector(SHEET_SECTION[target]) : null;
          const dest = (target === 'dashboard' || !el) ? (this.querySelector('.er-dashboard') || this) : el;
          const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          requestAnimationFrame(() => {
            const top = dest.getBoundingClientRect().top + window.pageYOffset - 76;
            window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
          });
        });
      });

       
      const sheetPrefs = sheet.querySelector('.er-mobile-sheet-prefs');
      if (sheetPrefs) sheetPrefs.addEventListener('click', () => { this._closeFilterSheet(); this._openPrefsModal(); });

      const sheetPack = sheet.querySelector('.er-mobile-sheet-pack');
      if (sheetPack) sheetPack.addEventListener('click', () => { this._closeFilterSheet(); this._openPackFan(); });
    }

     
     
     
    _lockBodyScroll() {
      if (this._bodyLockY != null) return;
      const y = window.scrollY || window.pageYOffset || 0;
      this._bodyLockY = y;
      const b = document.body;
      b.style.position = 'fixed'; b.style.top = -y + 'px';
      b.style.left = '0'; b.style.right = '0'; b.style.width = '100%'; b.style.overflow = 'hidden';
    }
    _unlockBodyScroll() {
      if (this._bodyLockY == null) return;
      const b = document.body, y = this._bodyLockY;
      b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.width = ''; b.style.overflow = '';
      this._bodyLockY = null;
      try { window.scrollTo(0, y); } catch (e) {   }
    }

    _openFilterSheet() {
      const sheet = this.querySelector('.er-mobile-filter-sheet');
      if (!sheet) return;
      sheet.dataset.open = 'true';
      sheet.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
    }

    _closeFilterSheet() {
      const sheet = this.querySelector('.er-mobile-filter-sheet');
      if (!sheet) return;
      sheet.dataset.open = 'false';
      sheet.setAttribute('aria-hidden', 'true');
      this._unlockBodyScroll();
    }

    _wireSidebarToggle() {
      const toggle   = this.querySelector('.er-sidebar-toggle');
      const sidebar  = this.querySelector('.er-sidebar');
      const backdrop = this.querySelector('.er-sidebar-backdrop');
      if (!toggle || !sidebar) return;

      const closeSidebar = () => {
        sidebar.dataset.expanded = 'false';
        toggle.setAttribute('aria-expanded', 'false');
        if (backdrop) backdrop.style.display = 'none';
      };
      const openSidebar = () => {
        sidebar.dataset.expanded = 'true';
        toggle.setAttribute('aria-expanded', 'true');
        if (backdrop) backdrop.style.display = 'block';
      };

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = sidebar.dataset.expanded === 'true';
        if (isOpen) closeSidebar();
        else openSidebar();
      });

      if (backdrop) {
        backdrop.addEventListener('click', closeSidebar);
      }

      this.querySelectorAll('.er-sidebar-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          if (window.matchMedia && window.matchMedia('(min-width: 768px) and (max-width: 1099px)').matches) {
            closeSidebar();
          }
        });
      });

      const escHandler = (e) => {
        if (e.key === 'Escape' && sidebar.dataset.expanded === 'true') {
          closeSidebar();
        }
      };
      document.addEventListener('keydown', escHandler);
      this._escSidebarHandler = escHandler;
    }

     
     
     
     
    _buildSkeleton() {
      const navRows = Array.from({ length: 6 }, () => '<div class="er-sk-box er-sk-nav"></div>').join('');
      const chips   = Array.from({ length: 6 }, () => '<div class="er-sk-box er-sk-chip"></div>').join('');
      const cards   = Array.from({ length: 4 }, () => '<div class="er-sk-box er-sk-card"></div>').join('');
      return `
        <div class="er-skeleton" role="status" aria-busy="true" aria-label="Chargement de ton espace en cours">
          <div class="er-sk-slow" data-slot="sk-slow" aria-hidden="true">
            <span class="er-sk-slow-dot"></span>
            <span>Le chargement est un peu plus long que d'habitude. Merci de patienter, ton espace arrive.</span>
          </div>
          <div class="er-sk-box er-sk-topbar"></div>
          <div class="er-sk-cockpit">
            <aside class="er-sk-sidebar">
              <div class="er-sk-box er-sk-rank"></div>
              <div class="er-sk-nav-group">${navRows}</div>
              <div class="er-sk-chips">${chips}</div>
            </aside>
            <main class="er-sk-main">
              <div class="er-sk-box er-sk-hero"></div>
              <div class="er-sk-row">${cards}</div>
              <div class="er-sk-box er-sk-block"></div>
            </main>
          </div>
          <div class="er-sk-mot" aria-hidden="true">
            <div class="er-sk-mot-titre">On prépare ton espace</div>
            <div class="er-sk-mot-sous">Tes skippers, tes actus et tes badges arrivent.</div>
            <div class="er-sk-jauge"><i></i></div>
          </div>
        </div>
      `;
    }

    _startSkeletonSlowTimer() {
      if (this._skeletonSlowTimer) clearTimeout(this._skeletonSlowTimer);
      this._skeletonSlowTimer = setTimeout(() => {
        const slow = this.querySelector('[data-slot="sk-slow"]');
        if (slow) { slow.classList.add('is-visible'); slow.setAttribute('aria-hidden', 'false'); }
      }, 8000);
    }

     
     
    _i18nLookup(raw) {
      const key = raw.trim();
      if (!key) return undefined;
      const hit = ER_EN[key] ?? ER_EN_NORM[i18nNorm(key)];
      if (hit !== undefined) return hit;
      return this._i18nDynamic(key);
    }

    _i18nDynamic(key) {
      let m;
      if ((m = key.match(/^Voir les (\d+) suivis?$/)))          return `See ${m[1]} followed`;
      if ((m = key.match(/^Voir la fiche de (.+)$/)))           return `See ${m[1]}'s profile`;
       
      if ((m = key.match(/^encore ([\d.,\s  ]+) pts$/))) return `${m[1].trim()} pts to go`;
      


      if ((m = key.match(/^(\d+) suivis?$/)))                   return `${m[1]} followed`;
      if ((m = key.match(/^\/\s*(\d+) débloqués?$/)))           return `/ ${m[1]} unlocked`;
      if ((m = key.match(/^débloqué le (.+)$/)))                return `unlocked on ${m[1]}`;
      if ((m = key.match(/^Débloqué le (.+)$/)))                return `Unlocked on ${m[1]}`;
      if (key === 'débloqué')                                   return 'unlocked';
      if ((m = key.match(/^Parce que tu suis la classe (.+)$/)))return `Because you follow the ${m[1]} class`;
      if ((m = key.match(/^Voir (\d+) skippers? supplémentaires?$/))) return `See ${m[1]} more skippers`;
      if ((m = key.match(/^Ajouter (.+) à mes favoris$/)))      return `Add ${m[1]} to my favourites`;
       
      if ((m = key.match(/^Pourquoi (.+) t'est proposé$/)))     return `Why ${m[1]} is suggested to you`;
      if ((m = key.match(/^Retirer (.+)$/)))                    return `Remove ${m[1]}`;
      if ((m = key.match(/^Lire l'actu : (.+)$/)))              return `Read the article: ${m[1]}`;
       
       
      if ((m = key.match(/^, à partir du top (\d+)\s*%$/)))     return `, from the top ${m[1]}%`;
       
       
      if ((m = key.match(/^, encore (\d+) points?$/)))         return `, ${m[1]} points to go`;

      







      if ((m = key.match(/^\/(\d+) infos renseignées$/)))      return `/${m[1]} details filled in`;
      if ((m = key.match(/^plus que (\d+) pour le badge$/)))   return `${m[1]} more for the badge`;
      if (key === 'plus qu’une pour le badge' ||
          key === "plus qu'une pour le badge")                 return 'one more for the badge';
      if ((m = key.match(/^Encore (\d+) infos? à renseigner sur (\d+)\.$/)))
        return `${m[1]} more details to fill in out of ${m[2]}.`;
      if ((m = key.match(/^plus que (\d+) infos? pour débloquer ton badge$/)))
        return `${m[1]} more details to unlock your badge`;
      if (key === 'plus qu’une info pour débloquer ton badge' ||
          key === "plus qu'une info pour débloquer ton badge")
        return 'one more detail to unlock your badge';
      if ((m = key.match(/^\. Encore un cran et tu passes (.+)\.$/)))
        return `. One more step and you reach ${ER_EN[m[1]] || m[1]}.`;
      


      if ((m = key.match(/^—\s+(.+)$/))) {
        const suite = this._i18nLookup(m[1]);
        if (suite !== undefined) return '— ' + suite;
      }
      return undefined;
    }

    



















    _t(chaine) {
      if (this._lang() !== 'en' || !chaine) return chaine;
      const en = this._i18nLookup(chaine);
      return en === undefined ? chaine : en;
    }

     
     
     
    _i18n(root) {
      if (this._lang() !== 'en' || !root) return;
       
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const n of nodes) {
        const raw = n.nodeValue;
        if (!raw || !/[A-Za-zÀ-ÿ]/.test(raw)) continue;
        const en = this._i18nLookup(raw);
        if (en !== undefined && en !== raw.trim()) {
          n.nodeValue = raw.replace(raw.trim(), () => en);
        }
      }
      














      const PAR_ENDROIT = [
        ['.er-news-annul-btn span', 'Undo']
      ];
      for (const [sel, en] of PAR_ENDROIT) {
        root.querySelectorAll?.(sel).forEach(el => { el.textContent = en; });
      }

       
      const ATTRS = ['aria-label', 'placeholder', 'title', 'alt'];
      const els = root.querySelectorAll('[aria-label],[placeholder],[title],[alt]');
      const list = root.nodeType === 1 ? [root, ...els] : Array.from(els);
      for (const el of list) {
        if (!el.getAttribute) continue;
        for (const a of ATTRS) {
          if (!el.hasAttribute(a)) continue;
          const v = el.getAttribute(a);
          const en = this._i18nLookup(v);
          if (en !== undefined && en !== v.trim()) el.setAttribute(a, en);
        }
      }
    }

     
     
    _buildStatusScreen(kind) {
      const isPatience = kind === 'patience';
      const title = isPatience ? 'On est très nombreux à bord !' : 'Gros grain passager';
      const text  = isPatience
        ? "Vous êtes exceptionnellement nombreux à vous connecter en ce moment. Le chargement peut prendre un peu plus de temps que d'habitude. Merci de patienter, ton espace arrive."
        : "Impossible de charger ton espace pour l'instant : nos serveurs encaissent une belle vague. Réessaie dans quelques instants, tout devrait rentrer dans l'ordre rapidement.";
      const foot = isPatience
        ? '<div class="er-status-spinner" aria-hidden="true"></div><div class="er-status-sub">Reconnexion automatique en cours…</div>'
        : '<button class="er-btn er-btn--primary er-status-retry" type="button" data-action="er-reload">Réessayer</button>';
      return `
        <div class="er-status-screen" role="status" aria-live="polite">
          <div class="er-status-inner">
            <div class="er-status-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M2 20c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M12 3v7"/><path d="M8 6l4-3 4 3"/></svg>
            </div>
            <h2 class="er-status-title">${title}</h2>
            <p class="er-status-text">${text}</p>
            ${foot}
          </div>
        </div>
      `;
    }

    _buildHtml() {
      return `
        ${this._buildApercuWidget()}
        ${this._buildMobileShell()}
        <div class="er-cockpit">
          <!-- ⚠️⚠️ LE VOILE VIT DANS LE COCKPIT, ET CE N EST PAS UN DETAIL DE
               RANGEMENT. Il etait FRERE du cockpit, donc dans un autre contexte
               d empilement que la barre laterale qu il accompagne. Consequence
               mesuree sur tablette en portrait : on ouvre le rail, l ecran se
               floute, et la barre se deplie DERRIERE le voile. Rien n apparait.

               Le detail qui tranche : er-cockpit porte une animation
               d opacite, et un element dont l opacite n est pas 1 cree un
               contexte d empilement. Le z-index 100 de la barre y est alors
               ENFERME, tandis que le cockpit lui-meme reste static : il ne
               peut pas battre un voile en position fixed a 99, quoi qu on
               ecrive sur la barre. Monter son z-index ne sert a rien, c est le
               contexte qui decide, pas le nombre.

               Range ICI, le voile et la barre sont dans le MEME contexte quoi
               qu il arrive au cockpit, et 100 passe devant 99. Il reste en
               position fixed et couvre toujours tout l ecran : une opacite
               ne fait pas bloc conteneur, seuls transform, filter et consorts
               le font, et le cockpit n en porte aucun. -->
          <div class="er-sidebar-backdrop" data-action="toggle-sidebar" aria-hidden="true"></div>
          ${this._buildSidebar()}
          <main class="er-dashboard${this._payload?.top50 && this._payload.top50.lignes?.length ? ' er-dashboard--top50' : ''}">
            ${this._buildHeroWidget()}
            ${this._buildFlashNewsWidget()}
            ${this._buildBadgesMiniWidget()}
            ${this._buildRoueWidget()}
            ${this._buildPronosWidget()}
            ${this._buildCombatWidget()}
            ${
















 ''}
            ${this._buildPrefereWidget()}
            ${this._buildSkippersFavorisWidget()}
            ${this._buildNewsMixWidget()}
            ${this._buildSuggestionsWidget()}
            ${this._buildStatsWidget()}
            ${this._buildTop50Widget()}
            ${this._buildBadgesSection()}
            ${this._buildRangsWidget()}
          </main>
        </div>
        ${this._buildBadgeModal()}
        ${this._buildBadgesInfoModal()}
        ${this._buildTop50Fenetres()}
        ${this._buildMonteModal()}
        ${this._buildProfilePrompt()}
        ${this._buildInstaClaim()}
        ${this._buildVillageMobility()}
        ${this._buildPrefsModal()}
        ${this._buildConfModal()}
        ${this._buildPackFan()}
        <div class="er-toasts-container" aria-live="polite" aria-label="Notifications"></div>
      `;
    }

    _renderBrandingLabel() {
      return `
        <div class="er-branding-label">
          <span class="er-branding-label-rdr">Route du Rhum 2026</span>
          <span class="er-branding-label-sep" aria-hidden="true">—</span>
          <span class="er-branding-label-destination">Destination Guadeloupe</span>
        </div>
      `;
    }

    _buildMobileShell() {
      const payload    = this._payload;
      const prenom     = payload?.member?.prenom || 'Fan';
      const greeting   = computeGreeting();
      const ident      = this._rangIdentite();

      const nbSkippers = payload?.favSkippers?.length || 0;
      const nbArticles = payload?.stats?.nbArticlesLus || 0;
      const nbBadges   = countUnlockedBadges(payload);
      const total      = badgesTotal(payload);

      const percentile = payload?.stats?.percentile;
      const showTop    = typeof percentile === 'number' && percentile < 100;

      


















      const profilsVus = payload?.stats?.nbSkippersVus ?? 0;
      const rankValueHtml = showTop
        ? `${escapeHtml(percentile)}<span>%</span>`
        : (profilsVus > 0 ? String(profilsVus) : '—');
      



      const rankLabelText = showTop ? 'Top des fans' : 'Profils vus';
      const articlesDisplay = nbArticles > 0 ? String(nbArticles) : '—';
      





      const joursSuite = payload?.stats?.nbJoursConnecte ?? 0;
      const joursDisplay = joursSuite > 0 ? String(joursSuite) : '—';

      




      return `
        <div class="er-mobile-topbar">
            <div class="er-mobile-topbar-left">
              <div class="er-mobile-tymal" aria-hidden="true"><img src="${escapeHtml(ident.tymal(162))}" alt="" loading="lazy" decoding="async"></div>
              <div class="er-mobile-topbar-info">
                <div class="er-mobile-topbar-name">${escapeHtml(prenom)}</div>
                <div class="er-mobile-topbar-rang">${escapeHtml(ident.label)}</div>
              </div>
            </div>
            <div class="er-mobile-topbar-right">
              <div class="er-mobile-badge-counter">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                ${nbBadges}/${total}
              </div>
              <button class="er-mobile-icon-btn" type="button" data-action="go-preferences" aria-label="Mes préférences">
                ${ICON_GEAR}
              </button>
              <button class="er-mobile-icon-btn er-mobile-menu-btn" type="button" data-action="mobile-filter" aria-label="Menu et filtres" aria-haspopup="dialog">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              </button>
            </div>
        </div>
        <div class="er-mobile-shell">
          <div class="er-mobile-branding">
            ${this._renderBrandingLabel()}
            <div class="er-mobile-branding-title">Mon Espace Rhum</div>
            <div class="er-mobile-id">
              <div class="er-mobile-id-tymal" aria-hidden="true"><span class="er-mobile-id-halo"></span><img src="${escapeHtml(ident.tymal(324))}" alt="" loading="lazy" decoding="async"></div>
              <div>
                <p class="er-mobile-id-bonjour">${escapeHtml(greeting)}</p>
                <p class="er-mobile-id-nom">${escapeHtml(prenom)}</p>
                <button class="er-mobile-id-rang" type="button" data-action="ouvrir-rang" aria-haspopup="dialog">${escapeHtml(ident.label)}${ICON_CHEVRON}</button>
              </div>
            </div>
          </div>

          <div class="er-rang-sheet" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="er-rang-sheet-titre">
            <div class="er-mobile-filter-sheet-backdrop" data-action="fermer-rang"></div>
            <div class="er-mobile-filter-sheet-panel">
              <div class="er-mobile-filter-sheet-handle"></div>
              <div class="er-mobile-filter-sheet-header">
                <div class="er-mobile-filter-sheet-title" id="er-rang-sheet-titre">Ton rang</div>
                <button class="er-mobile-filter-sheet-close" type="button" data-action="fermer-rang" aria-label="Fermer">
                  <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div class="er-rang-sheet-tete">
                <img src="${escapeHtml(ident.tymal(192))}" alt="" loading="lazy" decoding="async">
                <p class="er-rang-sheet-palier">${escapeHtml(ident.label)}</p>
              </div>
              ${ident.detail}
            </div>
          </div>
          <div class="er-mobile-rank-strip">
            <div class="er-mobile-rank-item">
              <div class="er-mobile-rank-item-value er-mobile-rank-item-value--rank">${rankValueHtml}</div>
              <div class="er-mobile-rank-item-label">${rankLabelText}</div>
            </div>
            <div class="er-mobile-rank-item">
              <div class="er-mobile-rank-item-value">${articlesDisplay}</div>
              <div class="er-mobile-rank-item-label">Articles lus</div>
            </div>
            <div class="er-mobile-rank-item">
              <div class="er-mobile-rank-item-value">${joursDisplay}</div>
              <div class="er-mobile-rank-item-label">Jours de suite</div>
            </div>
          </div>

          <div class="er-mobile-filter-sheet" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Filtres">
            <div class="er-mobile-filter-sheet-backdrop" data-action="close-filter-sheet"></div>
            <div class="er-mobile-filter-sheet-panel">
              <div class="er-mobile-filter-sheet-handle"></div>
              <div class="er-mobile-filter-sheet-header">
                <div class="er-mobile-filter-sheet-title">Menu</div>
                <button class="er-mobile-filter-sheet-close" type="button" data-action="close-filter-sheet" aria-label="Fermer le menu">
                  <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div class="er-mobile-filter-sheet-section-title">Naviguer</div>
              <div class="er-mobile-sheet-nav">
                ${NAV_ITEMS.map(item => `
                  <button class="er-mobile-sheet-nav-link" type="button" data-sheet-nav="${item.key}">
                    ${item.icon}<span>${escapeHtml(item.label)}</span>
                  </button>
                `).join('')}
              </div>
              ${















 ''}
              ${this._animationActive('pack-fan') ? `
              <button class="er-btn ${this._packDejaPris() ? 'er-btn--ghost' : 'er-btn--primary'} er-mobile-sheet-pack" type="button">
                ${ICON_CADEAU}<span>Mon Pack Fan</span>
              </button>` : ''}
              <button class="er-btn er-btn--ghost er-mobile-sheet-prefs" type="button">
                ${ICON_GEAR}<span>Mes préférences</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    









    _rangIdentite() {
      const payload    = this._payload;
      
















      const percentile = payload?.stats?.percentile;
      const centile    = typeof percentile === 'number' && percentile < 100;
      const prog       = payload?.stats?.rangProgression || null;
      const label      = payload?.stats?.rangLabel || (prog && prog.label) || 'Pas encore classé';
      


      const auSommet   = !!(prog && !prog.next);
      const avance     = prog ? prog.progress : 0;
      const barre      = !auSommet && !!prog;
      const suite      = prog && prog.next
        ? `Prochain palier : <b>${escapeHtml(prog.next)}</b>`
        : 'Le classement s\'ouvrira quand nous serons assez nombreux.';
      const pastille   = centile ? `Top ${percentile}%` : '';

      



















      const i = rangIndex(label);
      const tymal = (taille) => {
        const t = i >= 0 ? tymalPalier(payload, RANG_FRISE[i].label, taille) : null;
        return (t && t.src) || TYMAL.face;
      };

      const detail = `
        ${barre ? `<div class="er-rank-bar" aria-hidden="true"><span style="width: ${Math.round(avance * 100)}%"></span></div>` : ''}
        <p class="er-rank-next${auSommet ? ' is-max' : ''}">${auSommet ? 'Palier maximum atteint' : suite}</p>
        <p class="er-rang-explique">Il grimpe surtout avec tes jours de visite, puis tes lectures, tes skippers suivis et tes badges. Un palier atteint reste acquis.</p>
        <button class="er-rank-plus" type="button" data-action="voir-rangs">Voir tous les paliers</button>
      `;
      return { label, pastille, tymal, detail };
    }

    _buildSidebar() {
      const payload    = this._payload;
      const prenom     = payload?.member?.prenom || 'Fan';
      const greeting   = computeGreeting();
      const ident      = this._rangIdentite();

      const nbSkippers = payload?.favSkippers?.length || 0;
      







      const nbArticles = payload?.stats?.nbArticlesLus || 0;
      const nbBadges   = countUnlockedBadges(payload);

      const navHtml = NAV_ITEMS.map((item, i) => `
        <button type="button" class="er-sidebar-nav-link${i === 0 ? ' er-sidebar-nav-link--active' : ''}"
           data-target="${item.key}">
          ${item.icon}<span>${escapeHtml(item.label)}</span>
        </button>
      `).join('');

      return `
        <aside class="er-sidebar er-motif-host" aria-label="Navigation et filtres Espace Rhum">
          <button class="er-sidebar-toggle" type="button" data-action="toggle-sidebar"
                  aria-label="Déployer le menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <div class="er-sidebar-branding">
            ${this._renderBrandingLabel()}
            <div class="er-sidebar-branding-title">Mon Espace<br>Rhum</div>
          </div>

          <div class="er-sidebar-identity" data-rang-bloc>
            <div class="er-sidebar-tymal" aria-hidden="true"><img src="${escapeHtml(ident.tymal(222))}" alt="" loading="lazy" decoding="async"></div>
            <div class="er-sidebar-identity-text">
              <div class="er-sidebar-greeting">${escapeHtml(greeting)}</div>
              <div class="er-sidebar-name">${escapeHtml(prenom)}</div>
              <div class="er-sidebar-rang-ligne">
                <button class="er-sidebar-rang" type="button" aria-expanded="false" aria-controls="er-rang-pop">${escapeHtml(ident.label)}${ICON_CHEVRON}</button>
                ${ident.pastille ? `<span class="er-sidebar-rang-pct">${escapeHtml(ident.pastille)}</span>` : ''}
              </div>
            </div>
            <div class="er-rang-pop" id="er-rang-pop">
              <p class="er-rang-titre">Ton rang</p>
              ${ident.detail}
            </div>
          </div>

          <div class="er-sidebar-stats-row">
            <div class="er-sidebar-stat"><div class="er-sidebar-stat-num">${nbSkippers}</div><div class="er-sidebar-stat-label">Skippers</div></div>
            <div class="er-sidebar-stat"><div class="er-sidebar-stat-num">${nbArticles}</div><div class="er-sidebar-stat-label">Actus</div></div>
            <div class="er-sidebar-stat"><div class="er-sidebar-stat-num">${nbBadges}</div><div class="er-sidebar-stat-label">Badges</div></div>
          </div>

          <nav class="er-sidebar-nav" aria-label="Navigation Espace Rhum">
            ${navHtml}
          </nav>

          ${this._animationActive('pack-fan') ? (this._packDejaPris()
            










            ? `
          <button class="er-sidebar-pack-mini" type="button" data-action="open-pack">
            ${ICON_CADEAU}<span>Mon Pack Fan</span>
            <span class="er-sidebar-pack-mini-ok" aria-hidden="true">${ICON_CHECK}</span>
          </button>`
            : `
          <button class="er-btn er-btn--primary er-sidebar-pack-btn"
                  type="button" data-action="open-pack">
            ${ICON_CADEAU}<span>Mon Pack Fan</span>
          </button>`) : ''}

          <button class="er-btn er-btn--ghost er-sidebar-preferences-btn"
                  type="button" data-action="go-preferences">
            ${ICON_GEAR}<span>Mes préférences</span>
          </button>

        </aside>
      `;
    }

    _buildHeroWidget() {
      const s = this._payload?.skipperDuJour;
      const reason = this._payload?.skipperDuJourReason || '';

      if (!s) {
        return `
          <div class="er-widget er-widget--hero" data-slot="hero" role="region" aria-label="Skipper du jour">
            <div class="er-hero-empty">
              ${ICON_SKIPPER_JOUR.replace('<svg', '<svg style="width:48px;height:48px;stroke:rgba(93,191,192,0.6);fill:none;stroke-width:1.5"')}
              <div class="er-hero-empty-title">Ton skipper du jour<br>arrive bientôt</div>
              <div class="er-hero-empty-sub">Complète tes préférences pour l'activer.</div>
            </div>
          </div>
        `;
      }

      const id        = s._id || s.id || '';
      const prenom    = s.prenom || '';
      const nom       = s.nom || '';
      const bateau    = s.bateau || '';
      const photo     = s.photoLarge || s.photoVignette || '';   
      const drapeau   = s.drapeau || '';
      const classCfg  = findClassConfig(s.classes?.nom);

      const favList    = this._payload?.favSkippers;
      const isFollowing = Array.isArray(favList)
        && favList.some(f => (f?._id || f?.id) === id);

      const flagCircleStyle = drapeau ? `style="background-image: url('${escapeHtml(drapeau)}')"` : '';
      const heroClassFlag = classCfg
        ? `<div class="er-hero-class-flag"><img src="${escapeHtml(classCfg.icon)}" alt="${escapeHtml(classCfg.label)}" /></div>`
        : '';
      const heroReason = reason
        ? `<div class="er-hero-reason">${escapeHtml(reason)}</div>`
        : '';

      


      



      return `
        <div class="er-widget er-widget--hero" data-slot="hero" role="region" aria-label="Skipper du jour">
          <div class="er-hero-photo-bg${photo ? '' : ' is-empty'}"${photo ? ` style="background-image: url('${escapeHtml(photo)}');"` : ''}>${photo ? '' : `<span class="er-photo-empty">${ICON_AVATAR}</span>`}</div>
          ${heroClassFlag}
          <div class="er-hero-inner">
            <div class="er-hero-top">
              <div class="er-widget-label">Skipper du jour</div>
              ${heroReason}
            </div>
            <div class="er-hero-content">
              <div class="er-hero-firstname">
                <span class="er-flag-circle" ${flagCircleStyle}></span>
                ${escapeHtml(prenom)}
              </div>
              <div class="er-hero-lastname${nom.length >= 17 ? ' er-hero-lastname--wrap' : ''}" data-len="${nom.length}">${escapeHtml(nom)}</div>
              <div class="er-hero-boat">${escapeHtml(bateau)}</div>
              <div class="er-hero-actions">
                <button class="er-btn er-btn--primary" type="button"
                        data-action="go-skipper" data-skipper-id="${escapeHtml(id)}">
                  Voir le profil
                  ${ICON_ARROW_RIGHT}
                </button>
                <button class="er-btn er-btn--outline er-hero-suivre-btn"
                        type="button"
                        data-action="hero-fav"
                        data-skipper-id="${escapeHtml(id)}"
                        data-following="${isFollowing}"
                        aria-pressed="${isFollowing}">
                  <span class="er-hero-suivre-icone" aria-hidden="true">${isFollowing ? ICON_CHECK : ICON_PLUS}</span>
                  <span class="er-hero-suivre-label">${isFollowing ? 'Suivi' : 'Suivre'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    _buildFlashNewsWidget() {
      const flash = pickFlashNews(this._payload);
      if (!flash) {
        return `
          <div class="er-widget er-widget--flash-news er-motif-host" data-slot="flash-news" role="region" aria-label="Actu du jour">
            <div class="er-widget-label">Actu du jour</div>
            <h3 class="er-flash-title">Pas d'actu fraîche</h3>
            <p class="er-flash-excerpt">Reviens plus tard pour la dernière info de la course.</p>
          </div>
        `;
      }
      const { article, pastille } = flash;
      const tier = pastille?.tier || 'core';
      const pastilleLabel = pastille?.label || 'News';
      const timeAgo  = formatTimeAgoLang(article.publishedDate, this._lang());
      const readTime = Number.isFinite(article.minutesToRead) ? `${article.minutesToRead} min` : '';
      const cover = article.coverImage || '';

      return `
        <div class="er-widget er-widget--flash-news er-flash-clickable${cover ? ' has-cover' : ' er-motif-host'}" data-slot="flash-news" data-article-id="${escapeHtml(article._id || '')}" role="button" tabindex="0" aria-label="Lire l'actu : ${escapeHtml(article.title || '')}">
          ${cover ? `<div class="er-flash-cover" style="background-image: linear-gradient(105deg, rgba(10,26,53,0.94) 0%, rgba(10,26,53,0.82) 42%, rgba(10,26,53,0.5) 100%), url('${escapeHtml(cover)}');"></div>` : ''}
          <span class="er-pastille" data-tier="${escapeHtml(tier)}">${escapeHtml(pastilleLabel)}</span>
          <div class="er-widget-label">Actu du jour</div>
          <h3 class="er-flash-title">${escapeHtml(article.title || '')}</h3>
          <p class="er-flash-excerpt">${escapeHtml(article.excerpt || '')}</p>
          <div class="er-flash-meta">
            ${timeAgo ? `<span>${escapeHtml(timeAgo)}</span>` : ''}
            ${readTime ? `<span>${escapeHtml(readTime)}</span>` : ''}
          </div>
        </div>
      `;
    }

    _buildBadgesMiniWidget() {
      const payload = this._payload;
      const badges = Array.isArray(payload?.badges) ? payload.badges : [];
      const nbBadges = countUnlockedBadges(payload);
      const total = badgesTotal(payload);

      const percentile = payload?.stats?.percentile;
      const rangLabel  = payload?.stats?.rangLabel || '';
      const showTop    = typeof percentile === 'number' && percentile < 100;
      const rankLabel  = showTop
        ? `Top ${percentile}%<br>${escapeHtml(rangLabel)}`
        : escapeHtml(rangLabel || '—');

      const sorted = [...badges].sort((a, b) => {
        if (a.state === 'unlocked' && b.state !== 'unlocked') return -1;
        if (a.state !== 'unlocked' && b.state === 'unlocked') return 1;
        return 0;
      });
      

      const tiles = sorted.slice(0, 6);
      while (tiles.length < 6) tiles.push(null);

      const tilesHtml = tiles.map(b => {
        if (!b) {
          return `<div class="er-badge-tile-mini is-locked">${ICON_LOCK}</div>`;
        }
        if (b.state === 'unlocked') {
          


          const amber = b.category === 'fidelite' || b.category === 'evenement';
          const cls = 'is-obtenu ' + (amber ? 'is-amber' : 'is-teal');
           
          return `<div class="er-badge-tile-mini ${cls} is-art" data-badge-key="${escapeHtml(b.key || '')}" role="button" tabindex="0" title="${escapeHtml(b.label || '')}"><svg viewBox="0 0 24 24" aria-hidden="true">${badgeIconInner(b.key)}</svg></div>`;
        }
        return `<div class="er-badge-tile-mini is-locked" title="${escapeHtml(b.label || '')}">${ICON_LOCK}</div>`;
      }).join('');

      return `
        <div class="er-widget er-widget--badges-mini" data-slot="badges-mini" role="region" aria-label="Ma collection de badges">
          <div class="er-badges-mini-header">
            <div>
              <div class="er-badges-mini-counter">${nbBadges}<span>/${total}</span></div>
              <div class="er-widget-label" style="margin: 4px 0 0">Ma collection</div>
            </div>
            <div class="er-badges-mini-label">${rankLabel}</div>
          </div>
          <div class="er-badges-mini-grid">${tilesHtml}</div>
          <button class="er-badges-mini-more" type="button" data-action="scroll-badges" aria-label="Voir toute ma collection de badges">
            <span>Voir ma collection</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="5 12 12 19 19 12"/></svg>
          </button>
        </div>
      `;
    }

     
     
     
     
     
     
     
     
     
     
    












    _buildTop5() {
      const top = this._payload?.topPreferes || [];
      if (!Array.isArray(top) || !top.length) return '';
      const en = this._lang() === 'en';
      




      const cinq = top.slice(0, 5);
      



      let rangPrecedent = null;
      const lignes = cinq.map((x, i) => {
        const sk = (this._payload?.skipperCatalog || [])
          .find(c => c && c.id === x.skipperId) || {};
        const nom = x.prenomNom || sk.name || '';
        if (!nom) return '';
        const cfg = findClassConfig(sk.class);
        const moi = this._payload?.monVoteSkipperId === x.skipperId;
        const rang = Number(x.rang) || i + 1;
        const suite = rang === rangPrecedent;
        rangPrecedent = rang;
        const exAequo = cinq.filter(y => (Number(y.rang) || 0) === rang).length > 1;
        const classes = ['er-top5-l'];
        if (moi) classes.push('est-moi');
        if (rang <= 3) classes.push('er-top5-l--m' + rang);
        if (suite) classes.push('er-top5-l--egal');
        const aria = (en ? 'See the profile of ' : 'Voir la fiche de ') + nom
          + (exAequo ? (en ? ', tied' : ', ex æquo') : '')
          + (moi ? (en ? ', your favourite skipper' : ', ton skipper préféré') : '');
        return `
          <li class="${classes.join(' ')}"${cfg?.col ? ` style="--cl:${escapeHtml(cfg.col)}"` : ''}
              role="link" tabindex="0" data-top5-skipper="${escapeHtml(x.skipperId)}"
              aria-label="${escapeHtml(aria)}">
            <span class="er-top5-rang">${rang}</span>
            ${sk.photo ? `<span class="er-top5-rond" style="background-image:url('${escapeHtml(sk.photo)}')"></span>` : '<span class="er-top5-rond"></span>'}
            <span class="er-top5-nom">${escapeHtml(nom)}</span>
            ${moi ? `<span class="er-top5-coeur" aria-hidden="true">${ICON_HEART_PLEIN}</span>` : ''}
            <span class="er-top5-n">${Number(x.nbVotes || 0).toLocaleString('fr-FR')}</span>
          </li>`;
      }).join('');
      if (!lignes) return '';
      


      let plus = '';
      const dernier = cinq[cinq.length - 1];
      const nDernier = Number(dernier && dernier.nbVotes) || 0;
      if (nDernier > 0) {
        const cf = this._payload?.compteursFans || {};
        const reste = Object.keys(cf).filter(id => Number(cf[id]) === nDernier).length
          - cinq.filter(y => Number(y.nbVotes) === nDernier).length;
        const r = Number(dernier.rang) || cinq.length;
        if (reste > 0) {
          plus = `<p class="er-top5-plus">${en
            ? `+ ${reste} other${reste > 1 ? 's' : ''} tied in ${r}${suffixeEn(r)} place`
            : `+ ${reste} autre${reste > 1 ? 's' : ''} à égalité à la ${r}e place`}</p>`;
        }
      }
      return `
        <div class="er-top5">
          <div class="er-top5-tete">
            ${ICON_TROPHY}
            <span>Le top 5 des préférés</span>
          </div>
          <ol class="er-top5-liste">${lignes}</ol>
          ${plus}
          <p class="er-top5-quand">Classement mis à jour une fois par jour.</p>
        </div>`;
    }

    












    _buildPrefereWidget() {
      if (!this._animationActive('compteur-fans')) return '';
      if (this._payload?.monVoteSkipperId) return '';
      const bloc = this._buildVoteSkipper();
      if (!bloc) return '';
      const en = this._lang() === 'en';
      return `
        <section class="er-widget er-widget--prefere er-motif-host er-motif-host--filaire"
                 data-slot="prefere-promu" aria-label="Mon skipper préféré">
          <div class="er-prefere-tete">
            <span class="er-prefere-kick">À toi de jouer</span>
            <h3 class="er-prefere-titre">Qui est ton skipper préféré ?</h3>
            <p class="er-prefere-sous">${escapeHtml(en
              ? 'One choice, and it counts in the public ranking. Teams are watching.'
              : 'Un seul choix, et il compte dans le classement public. Les équipes regardent.')}</p>
          </div>
          ${bloc}
        </section>`;
    }

    _buildVoteSkipper() {
      if (!this._animationActive('compteur-fans')) return '';
      const cat = this._payload?.skipperCatalog || [];
      if (!cat.length) return '';

      const compteurs = this._payload?.compteursFans || {};
      const mien = this._payload?.monVoteSkipperId || '';
      const en = this._lang() === 'en';

      



      const options = cat
        .slice()
        .sort((a, b) => String(a.name).localeCompare(String(b.name)))
        .map(sk => {
          const n = Number(compteurs[sk.id] || 0);
          return {
            v: sk.id,
            l: sk.name,
            img: sk.photo || '',
            sub: [sk.class, sk.bateau].filter(Boolean).join(' · '),
            meta: n ? `♥ ${n.toLocaleString('fr-FR')}` : '',
            col: findClassConfig(sk.class)?.col || ''
          };
        });

      const elu = mien ? cat.find(sk => sk.id === mien) : null;

      return `
        <div class="er-votesk${elu ? ' er-votesk--elu' : ''}" data-slot="vote-skipper">
          <!-- ══════════════════════════════════════════════════════════
               ⚠️⚠️ CE CONTENEUR N EST PAS DECORATIF, IL TIENT LA MISE EN PAGE.

               Sur grand ecran, ce bloc est une grille de deux colonnes et le
               Top 5 occupe la droite en s etendant sur TOUTES les lignes. Les
               cinq elements de gauche etaient donc cinq lignes distinctes, et
               la hauteur du Top 5, plus grande, se repartissait entre elles :
               un vide de deux cents pixels s ouvrait entre le titre et la
               carte du skipper, qui se retrouvait collee en bas.

               Signale par Jules le 8 septembre : « le skipper, il s est mis
               tout en bas, ca a cree un gros ecart ».

               Les rassembler dans UNE cellule supprime la repartition. Ce
               conteneur reprend exactement le comportement que le parent avait
               avant, pour que rien ne bouge en dessous de mille vingt-quatre
               pixels, ou l empilement etait deja bon.
               ══════════════════════════════════════════════════════════ -->
          <div class="er-votesk-gauche">
            <div class="er-votesk-texte">
              <span class="er-votesk-titre-rangee">
                <span class="er-votesk-coeur-titre" aria-hidden="true">${ICON_HEART_PLEIN}</span>
                <span class="er-votesk-label" id="er-votesk-lbl">Mon skipper préféré</span>
              </span>
              <span class="er-votesk-aide">${escapeHtml(en
                ? 'One per account. You can change your mind at any time.'
                : 'Un seul par compte. Tu peux changer d\'avis quand tu veux.')}</span>
            </div>
            ${elu ? this._carteVoteSkipper(elu, Number(compteurs[elu.id] || 0), en) : ''}
            ${this._buildPick('voteskipper', options, 'Choisis ton skipper', 'er-votesk-lbl', 'data-votesk')}
            <div class="er-votesk-etat" data-votesk-etat>${elu ? 'Enregistré' : ''}</div>
            ${this._voteskRang()}
          </div>
          ${this._buildTop5()}
        </div>`;
    }

    









    _carteVoteSkipper(sk, nbFans, en) {
      const cfg = findClassConfig(sk.class);
      const sous = [sk.class, sk.bateau].filter(Boolean).join(' · ');
      const fans = nbFans > 0
        ? `<div class="er-votesk-fans">
             <div class="er-votesk-fans-n">
               <b>${nbFans.toLocaleString('fr-FR')}</b>
               <span class="er-votesk-coeur">${ICON_HEART_PLEIN}</span>
             </div>
             ${




















 ''}
             <span class="er-votesk-fans-lib">${escapeHtml(en ? (nbFans > 1 ? 'fans in their wake' : 'fan in their wake') : (nbFans > 1 ? 'fans dans son sillage' : 'fan dans son sillage'))}</span>
           </div>`
        : '';
      return `
        <div class="er-votesk-carte"${cfg?.col ? ` style="--er-vsk-col: ${escapeHtml(cfg.col)}"` : ''}>
          <div class="er-votesk-med">
            ${sk.photo
              ? `<span class="er-votesk-rond" style="background-image: url('${escapeHtml(sk.photoCarte || sk.photo)}')"></span>`
              : `<span class="er-votesk-rond er-votesk-rond--vide">${ICON_AVATAR}</span>`}
            <span class="er-votesk-couronne">${escapeHtml(en ? 'Your no. 1' : 'N° 1 pour toi')}</span>
          </div>
          <div class="er-votesk-ident">
            <div class="er-votesk-prenom">${escapeHtml(sk.prenom || '')}</div>
            <div class="er-votesk-nom">${escapeHtml(sk.nom || sk.name || '')}</div>
            ${sous ? `<div class="er-votesk-sous">${escapeHtml(sous)}</div>` : ''}
          </div>
          <div class="er-votesk-cote">
            ${fans}
            <div class="er-votesk-actions">
              <button class="er-btn er-btn--outline er-votesk-modifier" type="button" data-action="modifier-vote-sk">
                ${escapeHtml(en ? 'Change my pick' : 'Modifier mon choix')}
              </button>
              <button class="er-btn er-btn--ghost er-votesk-retirer" type="button" data-action="retirer-vote-sk">
                ${escapeHtml(en ? 'Remove' : 'Retirer')}
              </button>
            </div>
            <button class="er-votesk-partager" type="button" data-action="partager-carte-sk" aria-label="${escapeHtml(en ? 'Share their card' : 'Partager sa carte')}" data-bulle="${escapeHtml(en ? 'Share their card' : 'Partager sa carte')}">${ICON_PARTAGER_CARTE}</button>
          </div>
        </div>`;
    }

    








    _lienReglement(cle) {
      const url = this._payload && this._payload.reglements && this._payload.reglements[cle];
      if (!url || !/^https?:\/\/|^\//.test(String(url))) return '';
      return `<a class="er-reglement" href="${escapeHtml(url)}" target="_blank" rel="noopener">Règlement du jeu</a>`;
    }

    






    _voteskRang() {
      const d = this._duelPrefere();
      if (!d) return '';
      const en = this._lang() === 'en';
      


      const chiffre = d.rang === 1
        ? `<small>${en ? 'No.' : 'N°'}</small>1`
        : `${d.rang}<sup>${en ? suffixeEn(d.rang) : 'e'}</sup>`;
      let txt = (en ? 'in the public ranking, with ' : 'au classement du public, avec ') + fansDe(d.n, en);
      




      if (d.egaux.length) {
        const noms = d.egaux.map(s => '<b>' + escapeHtml(s.name || '') + '</b>');
        const qui = noms.length <= 3 ? listeNoms(noms, en)
          : noms.length + (en ? ' other skippers' : ' autres skippers');
        txt += en
          ? (noms.length === 1 ? ', neck and neck with ' : ', level with ') + qui
          : (noms.length === 1 ? ', au coude à coude avec ' : ', à égalité avec ') + qui;
      }
      return `
        <p class="er-votesk-rang">
          <b class="er-votesk-rang-n">${chiffre}</b>
          <span class="er-votesk-rang-txt">${txt}</span>
        </p>`;
    }

    












    _duelPrefere() {
      const p = this._payload || {};
      const moi = p.monVoteSkipperId;
      if (!moi) return null;
      const cf = p.compteursFans || {};
      const nb = (id) => Number(cf[id]) || 0;
      const r = p.monVoteRang;
      let rang, n;
      if (r && r.rang && (!r.skipperId || r.skipperId === moi)) {
        rang = Number(r.rang);
        n = Number(r.nbVotes) || 0;
      } else {
        n = nb(moi);
        if (!n) return null;
        rang = 1 + Object.keys(cf).filter(id => nb(id) > n).length;
      }
      const cat = p.skipperCatalog || [];
      const sk = (id) => cat.find(c => c && c.id === id) || null;
      const avec = (id) => Object.assign({ n: nb(id) }, sk(id));
      const parNom = (a, b) => String(a.name || '').localeCompare(String(b.name || ''));
      const ids = Object.keys(cf).filter(id => id !== moi && sk(id));
      const egaux = n > 0 ? ids.filter(id => nb(id) === n).map(avec).sort(parNom) : [];
      const plus = ids.filter(id => nb(id) > n);
      const nDevant = plus.length ? Math.min(...plus.map(nb)) : 0;
      const groupeDevant = plus.filter(id => nb(id) === nDevant).map(avec).sort(parNom);
      const devant = groupeDevant.length
        ? Object.assign(groupeDevant[groupeDevant.length - 1], { rang: 1 + ids.filter(id => nb(id) > nDevant).length })
        : null;
      const moins = ids.filter(id => nb(id) > 0 && nb(id) < n);
      const nDerriere = moins.length ? Math.max(...moins.map(nb)) : 0;
      const derriere = moins.length ? moins.filter(id => nb(id) === nDerriere).map(avec).sort(parNom)[0] : null;
      let cas, rival;
      if (egaux.length) { cas = rang === 1 ? 'egal-tete' : 'egal'; rival = egaux[0]; }
      else if (rang === 1) { cas = 'tete'; rival = derriere; }
      else { cas = 'chasse'; rival = devant; }
      const dansTop = (Array.isArray(p.topPreferes) ? p.topPreferes : []).slice(0, 5).some(x => x.skipperId === moi);
      return { rang, n, cas, moi: sk(moi) || {}, dansTop, rival, egaux, devant, derriere };
    }

    _wireVoteSkipper() {
      const box = this.querySelector('.er-votesk');
      if (!box) return;
      this._wirePicks(box);

       
       
      const champ = box.querySelector('[data-votesk="voteskipper"]');
      const mien = this._payload?.monVoteSkipperId || '';
      if (champ && mien) { champ.value = mien; this._pronosSyncPicks(box); }

       
       
      champ?.addEventListener('input', () => {
        const id = champ.value;
        if (!id) return;
        this._voteSkipperEnvoyer(id);
      });

      this._wireCarteVoteSk(box);
      this._armerCoupPouce();
    }

    













    _nomSkipper(id) {
      if (!id) return '';
      const cat = this._payload?.skipperCatalog || [];
      const sk = cat.find(x => x && (x.id === id || x._id === id));
      if (!sk) return '';
      return String(sk.name || ((sk.prenom || '') + ' ' + (sk.nom || ''))).trim();
    }

    _voteSkipperEnvoyer(skipperId, action) {
      const box = this.querySelector('.er-votesk');
      const etat = box && box.querySelector('[data-votesk-etat]');

      const avant = this._payload?.monVoteSkipperId || '';
      if (action !== 'clear' && avant && avant !== skipperId) {
        const neuf = this._nomSkipper(skipperId);
        const vieux = this._nomSkipper(avant);
        if (neuf && vieux) {
          this._toastSimple(this._lang() === 'en'
            ? neuf + ' replaces ' + vieux + ' as your favourite skipper.'
            : neuf + ' remplace ' + vieux + ' comme ton skipper préféré.');
        }
      }
      if (etat) { etat.textContent = 'Envoi…'; etat.dataset.tone = ''; this._i18n(etat); }
       
      this.dispatchEvent(new CustomEvent('er-vote-skipper', { bubbles: true, composed: true,
        detail: { action: action === 'clear' ? 'clear' : 'set', skipperId } }));

       
       
      const nouveau = action === 'clear' ? null : skipperId;
      if (this._payload) this._payload.monVoteSkipperId = nouveau;
      this.querySelectorAll('.er-skipper-card-vote').forEach(b => {
        const on = !!nouveau && b.dataset.skipperId === nouveau;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      if (etat) {
        etat.textContent = action === 'clear' ? '' : 'Enregistré';
        etat.dataset.tone = action === 'clear' ? '' : 'ok';
        this._i18n(etat);
      }
      this._rafraichirCarteVoteSk();
    }

    












    _rafraichirCarteVoteSk() {
      const box = this.querySelector('.er-votesk');
      if (!box) return;
      const cat = this._payload?.skipperCatalog || [];
      const mien = this._payload?.monVoteSkipperId || '';
      const elu = mien ? cat.find(sk => sk.id === mien) : null;
      const ancienne = box.querySelector('.er-votesk-carte');

      





      const pick = box.querySelector('.er-pick');
      const champ = pick && pick.querySelector('input[data-pick-input]');
      const val = pick && pick.querySelector('[data-pick-val]');
      if (champ) champ.value = mien || '';
      




      if (pick) this._pickTous(pick, '.er-pick-opt').forEach(o =>
        o.setAttribute('aria-selected', String(o.dataset.val === mien)));
      if (val) {
        const opt = mien && this._pickUn(pick, '.er-pick-opt[aria-selected="true"]');
        val.textContent = opt ? (opt.dataset.nom || opt.textContent) : (val.dataset.placeholder || '');
        val.dataset.empty = mien ? 'false' : 'true';
      }

      if (!elu) {
        if (ancienne) ancienne.remove();
        box.classList.remove('er-votesk--elu', 'er-votesk--ouvert');
        return;
      }

      const compteurs = this._payload?.compteursFans || {};
      const html = this._carteVoteSkipper(elu, Number(compteurs[elu.id] || 0), this._lang() === 'en');
      const gabarit = document.createElement('div');
      gabarit.innerHTML = html;
      const neuve = gabarit.firstElementChild;
      if (!neuve) return;

      if (ancienne) ancienne.replaceWith(neuve);
      else box.querySelector('.er-votesk-texte')?.after(neuve);

      box.classList.add('er-votesk--elu');
      box.classList.remove('er-votesk--ouvert');    
      this._wireCarteVoteSk(box);
    }

    






    _skipperPrefere() {
      const id = this._payload?.monVoteSkipperId || '';
      return id ? ((this._payload?.skipperCatalog || []).find(sk => sk.id === id) || null) : null;
    }

    _preparerCarteFan() {
      const sk = this._skipperPrefere();
      if (!sk) return null;
      if (this._carteFan && this._carteFan.id === sk.id) return this._carteFan.promesse;
      const essai = document.createElement('canvas');
      if (typeof File !== 'function' || !essai.getContext || typeof essai.toBlob !== 'function') return null;
      const en = this._lang() === 'en';
      const etat = { id: sk.id, fichier: null, promesse: null };
      this._carteFan = etat;
      

      const idPortrait = (String(sk.photoCarte || sk.photo || '').match(/static\.wixstatic\.com\/media\/([^/#?]+)/) || [])[1];
      const portrait = idPortrait ? 'https://static.wixstatic.com/media/' + idPortrait + '/v1/fill/w_900,h_1200,al_t,q_90,enc_auto/' + idPortrait : '';
      const cfg = findClassConfig(sk.class);
      const charger = (src) => new Promise((ok) => {
        if (!src) { ok(null); return; }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.onload = () => ok(img);
        img.onerror = () => ok(null);
        img.src = src;
      });
      const polices = document.fonts && typeof document.fonts.load === 'function'
        ? Promise.all(['italic 400 100px Varien', '400 40px Montserrat', '600 40px Montserrat', '700 40px Montserrat', '800 40px Montserrat'].map(f => document.fonts.load(f).catch(() => null)))
        : Promise.resolve();
      let slug = String(sk.lien || '').split('/').filter(Boolean).pop() || '';
      try { slug = decodeURIComponent(slug); } catch (e) {   }
      const maj = (v) => String(v || '').toLocaleUpperCase(en ? 'en' : 'fr');
      etat.promesse = Promise.all([charger(portrait), charger(cfg && cfg.icon), polices]).then(([p, ec]) => new Promise((ok, ko) => {
        try {
          const canvas = dessinerCarteFan({
            portrait: p, ecusson: ec, accent: cfg && cfg.col,
            prenom: maj(sk.prenom), nom: maj(sk.nom), bateau: maj(sk.bateau),
            kicker: en ? 'MY FAVOURITE SKIPPER' : 'MON SKIPPER PRÉFÉRÉ', annee: 'ROUTE DU RHUM 2026',
            numeroUn: en ? 'MY NO. 1' : 'N° 1 POUR MOI', appel: en ? 'JOIN THEIR FANS' : 'REJOINS SES FANS',
            adresse: 'routedurhum.com' + (en ? '/en' : '') + '/skippers' + (slug ? '/' + slug : ''),
            ligne1: 'ROUTE DU RHUM · DESTINATION GUADELOUPE',
            ligne2: en ? 'START ON 1 NOVEMBER 2026 · SAINT-MALO' : 'DÉPART LE 1ER NOVEMBRE 2026 · SAINT-MALO'
          });
          canvas.toBlob((blob) => ok(blob), 'image/jpeg', 0.9);
        } catch (err) { ko(err); }
      })).then((blob) => {
        if (!blob || this._carteFan !== etat) return null;
        const base = [sk.prenom, sk.nom].join(' ').normalize('NFD').replace(/[^\x20-\x7e]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        etat.fichier = new File([blob], (base || 'skipper') + '-route-du-rhum-2026.jpg', { type: 'image/jpeg' });
        return etat.fichier;
      }).catch((err) => {
        console.warn('[espace-rhum] carte de partage indisponible, le partage garde le lien', err);
        return null;
      });
      return etat.promesse;
    }

    _partagerCarteFan(declencheur) {
      const sk = this._skipperPrefere();
      if (!sk) return;
      const en = this._lang() === 'en';
      const nom = [sk.prenom, sk.nom].filter(Boolean).join(' ') || sk.name || '';
      const chemin = String(sk.lien || '');
      const url = window.location.origin + (en ? '/en' : '') + (chemin.charAt(0) === '/' ? chemin : '/skippers');
      const titre = nom + ' | Route du Rhum 2026';
      const texte = en
        ? nom + ' is my favourite skipper for the Route du Rhum 2026. Check out their profile and join their fans.'
        : nom + ' est mon skipper préféré pour la Route du Rhum 2026. Découvre sa fiche et rejoins ses fans.';
      const carte = this._preparerCarteFan();
      if (!carte) { this._partagerLienFan(titre, texte, url); return; }
      if (this._fermerCarteFan) this._fermerCarteFan();
      this._fermerCarteFan = ouvrirCarteFan({ en, nom, url, titre, texte, fichier: carte, declencheur });
    }

     
    async _partagerLienFan(titre, texte, url) {
      const en = this._lang() === 'en';
      try {
        if (typeof navigator.share === 'function') { await navigator.share({ title: titre, text: texte, url }); return; }
      } catch (e) { if (e && e.name === 'AbortError') return; }
      try {
        await navigator.clipboard.writeText(url);
        this._toastSimple(en ? 'Profile link copied' : 'Lien de la fiche copié');
      } catch (e) { this._toastSimple(url); }
    }

    











    


    _cibleCoupPouce() {
      const d = this._duelPrefere();
      if (d) return d;
      const moi = this._payload?.monVoteSkipperId;
      const sk = moi ? (this._payload?.skipperCatalog || []).find(c => c && c.id === moi) : null;
      return sk ? { cas: 'sans-rang', moi: sk, rang: 0, n: 0, egaux: [], devant: null, derriere: null, rival: null, dansTop: false } : null;
    }

    _armerCoupPouce() {
      this._desarmerCoupPouce();
      if (!this._animationActive('compteur-fans')) return;
      if (typeof IntersectionObserver !== 'function') return;
      const top5 = this.querySelector('.er-widget-fav-skippers .er-top5');
      if (!top5 || !this._cibleCoupPouce()) return;
      if (typeof this._cpCumul !== 'number') this._cpCumul = 0;
      this._cpVu = false;
      this._cpDepuis = null;
      const arreter = () => {
        clearTimeout(this._cpAttente);
        if (this._cpDepuis !== null) { this._cpCumul += Date.now() - this._cpDepuis; this._cpDepuis = null; }
      };
      const reprendre = () => {
        if (!this._cpVu || document.visibilityState === 'hidden' || this._cpDepuis !== null) return;
        if (this.querySelector('.er-cp')) return;
        this._cpDepuis = Date.now();
        this._cpAttente = setTimeout(() => {
          this._cpDepuis = null;
          this._cpCumul = 0;
          


          if (coupPoucePermis(Date.now())) this._ouvrirCoupPouce();
          else reprendre();
        }, Math.max(0, CP_DELAI_VU - this._cpCumul));
      };
      this._cpReprendre = reprendre;
      this._cpIo = new IntersectionObserver((entrees) => {
        this._cpVu = entrees.some(e => e.intersectionRatio >= 0.6);
        if (this._cpVu) reprendre(); else arreter();
      }, { threshold: [0, 0.6] });
      this._cpIo.observe(top5);
      this._cpVisibilite = () => { if (document.visibilityState === 'hidden') arreter(); else reprendre(); };
      document.addEventListener('visibilitychange', this._cpVisibilite);
      this._cpArreter = arreter;
    }

    _desarmerCoupPouce() {
      if (this._cpArreter) this._cpArreter();
      if (this._cpIo) { this._cpIo.disconnect(); this._cpIo = null; }
      if (this._cpVisibilite) { document.removeEventListener('visibilitychange', this._cpVisibilite); this._cpVisibilite = null; }
      clearTimeout(this._cpAttente);
      clearTimeout(this._cpFermeture);
      clearTimeout(this._cpAppel);
      this._cpReprendre = null;
      this._cpArreter = null;
    }

    _ouvrirCoupPouce() {
      const top5 = this.querySelector('.er-widget-fav-skippers .er-top5');
      const d = this._cibleCoupPouce();
      if (!top5 || !d || top5.querySelector('.er-cp')) return;
      const en = this._lang() === 'en';
      const t = textesCoupPouce(d, en);
      const rond = (s, classe) => `<span class="er-cp-rond${classe || ''}"${s && s.photo ? ` style="background-image:url('${escapeHtml(s.photo)}')"` : ''}></span>`;
      const egal = (d.cas === 'egal-tete' || d.cas === 'egal') && d.rival;
      let milieu;
      if (egal) {
        const groupe = d.egaux.length > 1;
        const visages = groupe
          ? `<span class="er-cp-pile">${d.egaux.slice(0, 3).map(s => rond(s)).join('')}${d.egaux.length > 3 ? `<span class="er-cp-rond er-cp-rond--plus">+${d.egaux.length - 3}</span>` : ''}</span>`
          : rond(d.rival);
        milieu = `
          <div class="er-cp-duel" aria-hidden="true">
            <span class="er-cp-sk">${rond(d.moi)}<span class="er-cp-id"><b>${d.n}</b><span>${escapeHtml(prenomDe(d.moi))}</span></span></span>
            <span class="er-cp-barre"><i></i><em>=</em></span>
            <span class="er-cp-sk er-cp-sk--rival">${visages}<span class="er-cp-id"><b>${d.rival.n}</b><span>${groupe ? d.egaux.length + ' skippers' : escapeHtml(prenomDe(d.rival))}</span></span></span>
          </div>`;
      } else if (d.cas === 'sans-rang') {
        milieu = `
          <div class="er-cp-rang" aria-hidden="true">
            ${rond(d.moi)}
            <span class="er-cp-rang-txt">${t.rangTxt}</span>
          </div>`;
      } else {
        const chiffre = d.rang === 1
          ? `<small>${en ? 'No.' : 'N°'}</small>1`
          : `${d.rang}<sup>${en ? suffixeEn(d.rang) : 'e'}</sup>`;
        milieu = `
          <div class="er-cp-rang" aria-hidden="true">
            ${rond(d.moi)}
            <b class="er-cp-rang-n">${chiffre}</b>
            <span class="er-cp-rang-txt">${t.rangTxt}</span>
          </div>`;
      }
      const w = document.createElement('aside');
      w.className = 'er-cp';
      w.setAttribute('role', 'status');
      w.setAttribute('aria-live', 'polite');
      w.style.setProperty('--er-cp-duree', CP_DUREE + 'ms');
      w.innerHTML = `
        <span class="er-cp-kick">${ICON_HEART_PLEIN}${escapeHtml(t.kick)}</span>
        ${milieu}
        <p class="er-cp-titre">${t.titre}</p>
        <p class="er-cp-txt">${t.txt}</p>
        <button class="er-cp-cta" type="button">${ICON_PARTAGER_CARTE}${escapeHtml(t.cta)}</button>
        <span class="er-cp-temps" aria-hidden="true"></span>
        <button class="er-cp-x" type="button" aria-label="${escapeHtml(t.fermer)}">${ICON_CLOSE}</button>`;
      top5.appendChild(w);
      top5.classList.add('er-cp-en-jeu');
      

      if (w.scrollHeight > top5.clientHeight) top5.style.minHeight = w.scrollHeight + 'px';
      coupPouceNoter(Date.now(), false);

      w.querySelector('.er-cp-x').addEventListener('click', () => this._fermerCoupPouce(true));
      w.querySelector('.er-cp-cta').addEventListener('click', (e) => {
        this._partagerCarteFan(e.currentTarget);
        this._fermerCoupPouce(true);
      });
       
       
      w.querySelector('.er-cp-temps').addEventListener('animationend', (e) => {
        if (e.animationName === 'erCpTemps') this._fermerCoupPouce(false);
      });
       
       
      const tenir = (oui) => () => w.classList.toggle('est-tenu', oui);
      w.addEventListener('pointerdown', tenir(true));
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => w.addEventListener(ev, tenir(false)));
      requestAnimationFrame(() => requestAnimationFrame(() => {
        top5.classList.add('er-cp-couvert');
        w.classList.add('est-ouverte');
      }));
    }

    


    _fermerCoupPouce(silence) {
      if (silence) coupPouceNoter(Date.now(), true);
      const top5 = this.querySelector('.er-widget-fav-skippers .er-top5');
      const w = top5 && top5.querySelector('.er-cp');
      if (!w || w.classList.contains('est-fermee')) return;
      w.classList.remove('est-ouverte');
      w.classList.add('est-fermee');
      top5.classList.remove('er-cp-couvert');
      clearTimeout(this._cpFermeture);
      this._cpFermeture = setTimeout(() => {
        w.remove();
        top5.classList.remove('er-cp-en-jeu');
        top5.style.minHeight = '';
        const ligne = top5.querySelector('.er-top5-l.est-moi');
        if (ligne) {
          ligne.classList.add('er-top5-l--appel');
          clearTimeout(this._cpAppel);
          this._cpAppel = setTimeout(() => ligne.classList.remove('er-top5-l--appel'), 4000);
        }
        if (this._cpReprendre) this._cpReprendre();
      }, 620);
    }

     
     
    _wireCarteVoteSk(box) {
      box.querySelector('[data-action="partager-carte-sk"]')?.addEventListener('click', (e) => { this._partagerCarteFan(e.currentTarget); });
      const carteVote = box.querySelector('.er-votesk-carte');
      if (this._ioCarteFan) { this._ioCarteFan.disconnect(); this._ioCarteFan = null; }
      if (carteVote && typeof IntersectionObserver === 'function') {
        const io = new IntersectionObserver((entrees) => {
          if (!entrees.some(e => e.isIntersecting)) return;
          io.disconnect();
          if (this._ioCarteFan === io) this._ioCarteFan = null;
          const lancer = () => this._preparerCarteFan();
          if (typeof requestIdleCallback === 'function') requestIdleCallback(lancer, { timeout: 2500 }); else setTimeout(lancer, 300);
        }, { rootMargin: '600px 0px 600px 0px' });
        io.observe(carteVote);
        this._ioCarteFan = io;
      }
      box.querySelector('[data-action="retirer-vote-sk"]')?.addEventListener('click', () => {
        this._voteSkipperEnvoyer('', 'clear');
      });
      







      box.querySelector('[data-action="modifier-vote-sk"]')?.addEventListener('click', () => {
        box.classList.add('er-votesk--ouvert');
        box.querySelector('[data-pick-btn]')?.click();
      });
    }

    _buildSkippersFavorisWidget() {
      const favs = Array.isArray(this._payload?.favSkippers) ? this._payload.favSkippers : [];
      const n = favs.length;

      const header = `
        <div class="er-section-header">
          <div class="er-section-header-left">
            <h2 class="er-section-title">Mes skippers</h2>
            <p class="er-section-sub">Ceux que tu suis de près</p>
          </div>
          <div class="er-section-header-right">
            <div class="er-section-count">
              <div class="er-section-count-num">${n}</div>
              <div class="er-section-count-label">Suivis</div>
            </div>
            <a class="er-section-link" href="${SKIPPERS_PAGE_PATH}" data-action="go-page" data-page="skippers">
              Voir tous les skippers
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      `;

      if (n === 0) {
        return `
          <div class="er-widget-fav-skippers" data-slot="skippers-favoris" role="region" aria-label="Mes skippers suivis">
            ${header}
            ${this._payload?.monVoteSkipperId ? this._buildVoteSkipper() : ''}
            <div class="er-skippers-masonry">
              <div class="er-skippers-empty">
                <div class="er-skippers-empty-text">Tu ne suis encore personne</div>
                <button class="er-btn er-btn--ghost" type="button"
                        data-action="nav-skippers">Découvre le plateau</button>
              </div>
            </div>
          </div>
        `;
      }

       
       
      const isMobile = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
      const shown = isMobile ? favs : favs.slice(0, 5);
      const overflow = isMobile ? [] : favs.slice(5);
      const cardsHtml = shown.map((s, i) => this._buildSkipperCard(s, i, i === 0 ? 'big' : undefined)).join('');

      let placeholdersHtml = '';
      const slotsNeeded = 5 - shown.length;
      for (let i = 0; i < slotsNeeded; i++) {
        const isBig = (shown.length === 0) && (i === 0);
        placeholdersHtml += `
          <button class="er-skipper-placeholder${isBig ? ' er-skipper-placeholder--big' : ''}"
                  type="button" data-action="open-skipper-search">
            ${ICON_PLUS}
            <span>Ajoute un skipper</span>
          </button>
        `;
      }

      const expandedHtml = overflow.length > 0 ? this._buildExpandedSkippers(overflow) : '';

      return `
        <div class="er-widget-fav-skippers" data-slot="skippers-favoris">
          ${header}
          ${this._payload?.monVoteSkipperId ? this._buildVoteSkipper() : ''}
          <div class="er-skippers-masonry">
            ${cardsHtml}
            ${placeholdersHtml}
          </div>
          ${expandedHtml}
        </div>
      `;
    }

    _buildExpandedSkippers(overflow) {
      const count = overflow.length;
       
      const cardsHtml = overflow.map((s, i) => this._buildSkipperCard(s, i + 5, 'grid')).join('');
      const plural = count > 1 ? 's' : '';
      return `
        <button class="er-skippers-expand-btn" type="button"
                data-action="toggle-expand-skippers"
                data-overflow-count="${count}"
                aria-expanded="false"
                aria-controls="er-skippers-expanded-zone"
                aria-label="Voir ${count} skipper${plural} supplémentaire${plural}">
          <span class="er-skippers-expand-label">Voir les ${count} suivi${plural}</span>
          ${ICON_CHEVRON_DOWN}
        </button>
        <div id="er-skippers-expanded-zone" class="er-skippers-expanded-zone"
             data-expanded="false" aria-hidden="true">
          <div class="er-skippers-expanded-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }

    _buildSkipperCard(s, index, variant) {
       
      const id       = s?._id || s?.id || '';
      const prenom   = s?.prenom || '';
      const nom      = s?.nom || '';
      const bateau   = s?.bateau || '';
      const photo    = s?.photoVignette || '';
      const drapeau  = s?.drapeau || '';
      const classCfg = findClassConfig(s?.classes?.nom);
      const rot      = CARD_ROTATIONS[index % CARD_ROTATIONS.length];
       
       
      const nbFans    = Number(this._payload?.compteursFans?.[id] || 0);
      const estPrefere = !!id && this._payload?.monVoteSkipperId === id;
       
       
       
      const voteOuvert = this._animationActive('compteur-fans');
      const modifier = variant === 'big'  ? ' er-skipper-card--big'
                     : variant === 'grid' ? ' er-skipper-card--grid'
                     : '';

      const flagCircleStyle = drapeau ? `style="background-image: url('${escapeHtml(drapeau)}')"` : '';
      const classFlagHtml = classCfg
        ? `<div class="er-skipper-card-class-flag"><img src="${escapeHtml(classCfg.icon)}" alt="${escapeHtml(classCfg.label)}" /></div>`
        : '';

       
       
      const photoHtml = !photo
        ? `<div class="er-skipper-card-photo is-empty"><span class="er-photo-empty">${ICON_AVATAR}</span></div>`
        : variant === 'grid'
          ? `<div class="er-skipper-card-photo"><img src="${escapeHtml(photo)}" alt="${escapeHtml(prenom + ' ' + nom)}" loading="lazy" /></div>`
          : `<div class="er-skipper-card-photo" style="background-image: url('${escapeHtml(photo)}');"></div>`;

      return `
        <div class="er-skipper-card${modifier}"
             role="button" tabindex="0"
             style="--rot: ${rot}deg;"
             data-action="go-skipper" data-skipper-id="${escapeHtml(id)}">
          ${photoHtml}
          ${classFlagHtml}
          <button class="er-skipper-card-fav" type="button" data-bulle
                  data-action="card-fav" data-skipper-id="${escapeHtml(id)}"
                  aria-label="Ne plus suivre ${escapeHtml(prenom + ' ' + nom)}">
            ${ICON_CHECK}
            <!-- ══════════════════════════════════════════════════════════
                 ⚠️ UNE BULLE POSEE SUR UN BOUTON NOMME L ACTION, PAS L ETAT.

                 Elle disait « Tu le suis. Ne plus suivre » : deux messages
                 pour un seul geste, dont le premier repete ce que la coche
                 montre deja. Retour de Jules du 8 septembre, et il a raison :
                 on survole un bouton pour savoir ce qu il va faire.
                 ══════════════════════════════════════════════════════════ -->
            <span class="er-bulle">Ne plus suivre</span>
          </button>
          ${voteOuvert ? `
          <button class="er-skipper-card-vote${estPrefere ? ' is-on' : ''}" type="button"
                  data-action="card-vote" data-skipper-id="${escapeHtml(id)}"
                  aria-pressed="${estPrefere ? 'true' : 'false'}"
                  aria-label="${estPrefere ? 'Retirer mon skipper préféré' : 'Désigner comme mon skipper préféré'}"
                  data-bulle>
            ${HEART_SVG}
            <!-- ⚠️ COURTE PAR NECESSITE : sur la carte la plus a droite, une
                 bulle de deux lignes sortait du cadre et se faisait couper. Le
                 remplacement du prefere est de toute facon annonce par le
                 message qui suit le clic, en nommant les deux skippers.

                 Et comme la coche voisine, elle nomme le GESTE : « C est ton
                 prefere » decrivait un etat que le coeur plein disait deja. -->
            <span class="er-bulle">${estPrefere
              ? 'Retirer des préférés'
              : 'En faire mon préféré'}</span>
          </button>` : ''}
          <div class="er-skipper-card-overlay">
            <div class="er-skipper-card-flag-firstname">
              <span class="er-flag-circle" ${flagCircleStyle}></span>
              <span class="er-skipper-card-firstname">${escapeHtml(prenom)}</span>
            </div>
            <div class="er-skipper-card-name${nom.length >= 20 ? ' er-skipper-card-name--wrap' : ''}" data-len="${nom.length}">${escapeHtml(nom)}</div>
            <div class="er-skipper-card-boat">${escapeHtml(bateau)}</div>
            ${nbFans ? `<div class="er-skipper-card-fans">${nbFans} fan${nbFans > 1 ? 's' : ''}</div>` : ''}
          </div>
        </div>
      `;
    }

     
     
    



















    _buildNewsMixWidget() {
       
       
      const VISIBLE = NEWS_VISIBLE;
      const RESERVE = NEWS_RESERVE;

      

      this._lus = lusLocaux();

      const recos     = Array.isArray(this._payload?.recoArticles) ? this._payload.recoArticles : [];
      const plusTard  = Array.isArray(this._payload?.articlesPlusTard) ? this._payload.articlesPlusTard : [];
      const ecartes   = Array.isArray(this._payload?.articlesEcartes) ? this._payload.articlesEcartes : [];
      const nTard     = Number(this._payload?.articlesPlusTardTotal) || plusTard.length;
      const nEcart    = Number(this._payload?.articlesEcartesTotal) || ecartes.length;
      const exhausted = this._payload?.recoArticlesExhausted === true;
      const perso     = this._payload?.recoArticlesPersonnalise === true;

      



      this._resteHors = {
        later:  Math.max(0, nTard  - plusTard.length),
        hidden: Math.max(0, nEcart - ecartes.length)
      };

      


      const flash = pickFlashNews(this._payload);
      const flashId = flash && flash.article ? (flash.article._id || flash.article.id) : undefined;    
      const eligibles = recos.filter(a => (a._id || a.id) && (a._id || a.id) !== flashId);

      






      const estLu = (a) => {
        const sl = slugDArticle(a);
        return a?.dejaLu === true || !!(sl && this._lus && this._lus.has(sl));
      };
      const queue = eligibles.filter(a => !estLu(a)).concat(eligibles.filter(estLu));
      const shown = queue.slice(0, VISIBLE + RESERVE);

      const nbSugg = Array.isArray(this._payload?.recoSkippers) ? this._payload.recoSkippers.length : 0;
      const rappelSugg = `
        <button class="er-news-recall" type="button" data-action="toggle-suggestions"
                aria-label="Réafficher la colonne « Pour toi »">
          ${ICON_SPARK}<span>Pour toi</span>${nbSugg ? `<b>${nbSugg}</b>` : ''}
        </button>
      `;

      



      const sousTitre = perso
        ? "Choisi d'après ce que tu suis"
        : "L'actu de la course, en attendant que tu suives des skippers";

      const header = `
        <div class="er-section-header">
          <div class="er-section-header-left">
            <h2 class="er-section-title">Mes actus</h2>
            <p class="er-section-sub">${escapeHtml(sousTitre)}</p>
          </div>
          <div class="er-section-header-right">
            ${rappelSugg}
            <div class="er-section-count">
              <div class="er-section-count-num">${queue.length}</div>
              <div class="er-section-count-label">À lire</div>
            </div>
            <a class="er-section-link" href="${ACTUS_PAGE_PATH}" data-action="go-page" data-page="actus">
              Voir toutes les actus
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      `;

      









      








      const idV = (k) => `er-vue-${k}`;
      const idO = (k) => `er-ong-${k}`;
      








      const masquerLus = masquerLusActif();
      const ongletsHtml = `
        <div class="er-news-barre">
          <div class="er-news-onglets" role="tablist" aria-label="Filtrer mes actus">
            <button class="er-news-onglet" type="button" role="tab" data-news-onglet="lire"
                    id="${idO('lire')}" aria-controls="${idV('lire')}" tabindex="0"
                    aria-selected="true">${ICON_PILE_LIRE}<span>À lire</span><b data-nb="lire"${queue.length ? '' : ' hidden'}>${queue.length}</b></button>
            <button class="er-news-onglet" type="button" role="tab" data-news-onglet="later"
                    id="${idO('later')}" aria-controls="${idV('later')}" tabindex="-1"
                    aria-selected="false">${ICON_LATER}<span>Plus tard</span><b data-nb="later"${nTard ? '' : ' hidden'}>${nTard}</b></button>
            <button class="er-news-onglet er-news-onglet--discret" type="button" role="tab"
                    id="${idO('hidden')}" aria-controls="${idV('hidden')}" tabindex="-1"
                    data-news-onglet="hidden" aria-selected="false"${nEcart ? '' : ' hidden'}>${ICON_NOT_FOR_ME}<span>Écartées</span><b data-nb="hidden">${nEcart}</b></button>
          </div>
          <button class="er-news-lus" type="button" data-action="bascule-lus" hidden
                  aria-pressed="${masquerLus}"
                  title="Ranger les actus que tu as déjà lues">
            ${ICON_LU}<span>Masquer les lus</span><b data-nb-lus>0</b>
          </button>
        </div>
      `;

      const cardsHtml = shown.map((a, i) =>
        this._buildRecoCard(a, i === 0 ? 'lead' : 'compact', i >= VISIBLE, 'reco')
      ).join('');

      



      






      const enReserve = Math.max(0, shown.length - VISIBLE);
      const plusHtml = enReserve ? `
        <button class="er-news-plus" type="button" data-action="news-plus">
          ${ICON_PILE_LIRE}<span>Voir plus d'actus</span><b>${enReserve}</b>
        </button>` : '';

      const lass = shown.length ? this._payload?.recoArticlesLassitude : null;
      const lassitudeHtml = (lass && lass.valeur) ? `
        <div class="er-news-lassitude" role="status" data-lassitude
             data-lass-type="${escapeHtml(lass.type)}" data-lass-valeur="${escapeHtml(lass.valeur)}">
          <p class="er-news-lassitude-txt">${ICON_R_THEME}<span><i>Tu as écarté plusieurs actus sur</i> <b>${escapeHtml(lass.valeur)}</b><i>. On arrête de t'en proposer ?</i></span></p>
          <div class="er-news-lassitude-acts">
            <button class="er-news-lassitude-oui" type="button" data-action="lass-oui">Oui, retirer</button>
            <button class="er-news-lassitude-non" type="button" data-action="lass-non">Non, garde-le</button>
          </div>
        </div>` : '';

      












      const motifVide = this._payload?.recoArticlesMotifVide || (exhausted ? 'a-jour' : '');
      const nbSources = Number(this._payload?.recoArticlesNbSources) || 0;

      const VIDES = {
        'sans-preferences': {
          art: TYMAL.megaphone,
          t: 'Ton espace ne te connaît pas encore',
          s: "Dis-nous quels skippers et quels sujets tu suis : on ne te montrera que ça ici, et rien d'autre.",
          cta: 'prefs'
        },
        'a-jour': {
          art: TYMAL.pouce,
          t: 'Tu es à jour',
          s: "Tu as vu tout ce qui te concerne. Le reste de l'actu t'attend sur la page Actualités.",
          cta: 'actus'
        },
        'rien-ne-matche': {
          art: TYMAL.megaphone,
          t: 'Rien de neuf sur ce que tu suis',
          s: "Rien de récent ne correspond à tes préférences. Élargis-les un peu, ou va voir tout le fil.",
          cta: 'prefs'
        },
        'panne': {
          art: '',
          t: 'Tes actus sont indisponibles',
          s: "On n'a pas pu charger tes recommandations. Recharge la page dans un instant, rien n'est perdu.",
          cta: 'actus'
        }
      };
      const vide = VIDES[motifVide] || (nbSources ? VIDES['a-jour'] : VIDES['sans-preferences']);

      const doneIco = vide.art
        ? `<img class="er-news-done-ico" src="${escapeHtml(vide.art)}" alt="" loading="lazy" decoding="async">`
        : '<div class="er-news-done-ico--fallback" aria-hidden="true">!</div>';

      


      const ctaHtml = vide.cta === 'prefs'
        ? `<button class="er-btn er-btn--primary" type="button" data-action="go-preferences">${ICON_GEAR}<span>Régler mes préférences</span></button>
           <a class="er-news-done-lien" href="${ACTUS_PAGE_PATH}" data-action="go-page" data-page="actus">Ou voir toute l'actu de la course</a>`
        : `<a class="er-btn er-btn--ghost" href="${ACTUS_PAGE_PATH}" data-action="go-page" data-page="actus">Voir toutes les actus</a>`;

      const doneHtml = `
        <div class="er-news-done" data-news-done${shown.length ? ' hidden' : ''} role="status">
          ${doneIco}
          <div class="er-news-done-title">${escapeHtml(vide.t)}</div>
          <div class="er-news-done-text">${escapeHtml(vide.s)}</div>
          <div class="er-news-done-actions">${ctaHtml}</div>
        </div>
      `;

      return `
        <div class="er-widget-news-mix" data-slot="news-mix" role="region" aria-label="Mes actus">
          ${header}
          ${ongletsHtml}
          <div class="er-news-vue" data-news-vue="lire" role="tabpanel"
               id="${idV('lire')}" aria-labelledby="${idO('lire')}">
            <div class="er-news-panel">
              ${lassitudeHtml}
              <div class="er-news-feed" data-news-queue>${cardsHtml}</div>
              ${plusHtml}
              ${doneHtml}
            </div>
          </div>
          <div class="er-news-vue" data-news-vue="later" role="tabpanel"
               id="${idV('later')}" aria-labelledby="${idO('later')}" hidden>
            ${this._buildPile(plusTard, 'later', nTard)}
          </div>
          <div class="er-news-vue" data-news-vue="hidden" role="tabpanel"
               id="${idV('hidden')}" aria-labelledby="${idO('hidden')}" hidden>
            ${this._buildPile(ecartes, 'hidden', nEcart)}
          </div>
        </div>
      `;
    }

    


    _buildPile(items, mode, total) {
      


      if (this._payload && this._payload.pilesLues === false) {
        return `<div class="er-news-pile-vide" role="status">
          <p>Impossible de charger cette liste pour le moment. Recharge la page dans un instant, rien n'est perdu.</p>
        </div>`;
      }
      const vide = mode === 'later'
        ? { t: 'Rien en attente', s: "Sur une actu, « Plus tard » la range ici pour la lire quand tu veux." }
        : { t: 'Rien d\'écarté', s: "Les actus que tu écartes atterrissent ici, et tu peux les remettre." };
      



      const videHtml = `<div class="er-news-pile-vide" data-pile-vide role="status"${items.length ? ' hidden' : ''}>
          <div class="er-news-pile-vide-t">${escapeHtml(vide.t)}</div>
          <p>${escapeHtml(vide.s)}</p>
        </div>`;
      


      const reste = total > items.length
        ? `<p class="er-news-pile-reste">${total - items.length} autre${total - items.length > 1 ? 's' : ''} plus bas dans ta liste, non affichée${total - items.length > 1 ? 's' : ''} ici.</p>`
        : '';
      return `
        <div class="er-news-pile" data-news-pile="${escapeHtml(mode)}">
          <div class="er-news-feed">${items.map(a => this._buildRecoCard(a, 'compact', false, mode)).join('')}</div>
          ${reste}
          ${videHtml}
        </div>`;
    }

    


    











    _calerPavillons(wrap, estUne) {
      const m = wrap.querySelector('.er-news2-marques');
      if (!m) return;
      const nb = m.querySelectorAll('.er-news2-pavillon').length;
      

      const etroit = (window.innerWidth || 1280) < 768;
      const taille = estUne ? (etroit ? 42 : 60) : 26;
      const dispo  = estUne ? (etroit ? 210 : 400) : (etroit ? 76 : 112);
      const pas = nb > 1 ? Math.min(taille * 0.88, (dispo - taille) / (nb - 1)) : taille;
      m.style.setProperty('--pav', taille + 'px');
      m.style.setProperty('--pas', pas.toFixed(2) + 'px');
    }

    _formatCarte(wrap, variant) {
      const veut = variant === 'lead';
      if (veut === wrap.classList.contains('er-news2--lead')) return;
      const une   = wrap.querySelector('.er-news2-une');
      const body  = wrap.querySelector('.er-news2-body');
      const titre = wrap.querySelector('.er-news2-title');
      const kick  = wrap.querySelector('.er-news2-kicker');
      if (!une || !body || !titre) return;

      wrap.classList.toggle('er-news2--lead', veut);
      wrap.classList.toggle('er-news2--compact', !veut);

      

      if (veut) {
        une.insertBefore(titre, une.firstChild);
        if (kick) une.insertBefore(kick, titre);
      } else {
        body.insertBefore(titre, body.firstChild);
        if (kick) body.insertBefore(kick, titre);
      }

      



      const img = wrap.querySelector('.er-news2-img');
      const src = veut ? wrap.dataset.coverUne : wrap.dataset.coverVig;
      if (img && src && img.getAttribute('src') !== src) img.setAttribute('src', src);

      const fmt = wrap.querySelector('.er-news2-fmt');
      if (fmt) { if (veut) fmt.setAttribute('data-lead', '1'); else fmt.removeAttribute('data-lead'); }

      this._calerPavillons(wrap, veut);
    }

    _majFormats() {
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return;
      const file = w.querySelector('[data-news-queue]');
      if (file) {
        

        const cartes = [...file.querySelectorAll('.er-news2')];
        const vivantes = cartes.filter(c => !c.hidden
          && !c.hasAttribute('data-consumed') && !c.hasAttribute('data-filtre-lu'));
        cartes.forEach(c => this._formatCarte(c, c === vivantes[0] ? 'lead' : 'compact'));
      }
      

      w.querySelectorAll('[data-news-pile] .er-news2')
        .forEach(c => this._formatCarte(c, 'compact'));
    }

    _habillerCarte(wrap, mode) {
      const zone = wrap.querySelector('.er-news2-acts');
      if (!zone) return;
      if (mode === 'reco') {
        zone.innerHTML =
          `<button class="er-news2-act" type="button" data-action="reco-later"
                   title="La ranger dans « Plus tard », pour la lire quand tu veux"
                   aria-label="Plus tard : ranger cette actu dans ma liste">${ICON_LATER}<span>Plus tard</span></button>` +
          `<button class="er-news2-act er-news2-act--no" type="button" data-action="reco-hidden"
                   title="La retirer de mes recommandations, elle reste consultable dans « Écartées »"
                   aria-label="Pas pour moi : retirer cette actu de mes recommandations">${ICON_NOT_FOR_ME}<span>Pas pour moi</span></button>`;
      } else if (mode === 'later') {
        







        zone.innerHTML =
          `<button class="er-news2-act" type="button" data-action="reco-none"
                   title="Retirer de ma liste"
                   aria-label="Retirer de ma liste">${ICON_ANNULER}<span>Retirer</span></button>`;
      } else {
        zone.innerHTML =
          `<button class="er-news2-act" type="button" data-action="reco-none"
                   title="Le remettre dans mes recommandations"
                   aria-label="Remettre dans mes actus">${ICON_ANNULER}<span>Remettre</span></button>`;
      }
      


      this._i18n(zone);
      this._cablerActions(zone);
      

      const r = wrap.querySelector('.er-news2-raison');
      if (r) r.hidden = (mode !== 'reco');
    }

    _cablerActions(racine) {
      const ETATS = { 'reco-later': 'later', 'reco-hidden': 'hidden', 'reco-none': 'none' };
      racine.querySelectorAll('[data-action="reco-later"], [data-action="reco-hidden"], [data-action="reco-none"]')
        .forEach(btn => {
          if (btn.dataset.cable === '1') return;    
          btn.dataset.cable = '1';
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const carte = btn.closest('.er-news2');
            this._rangerArticle(carte, ETATS[btn.getAttribute('data-action')]);
          });
        });
    }

    








    














    _appliquerFiltreLus() {
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return 0;
      const queue = w.querySelector('[data-news-queue]');
      const masquer = masquerLusActif();
      let lues = 0;
      if (queue) {
        queue.querySelectorAll('.er-news2.est-lue').forEach(c => {
          if (c.hasAttribute('data-consumed')) return;
          lues++;
          if (masquer) c.setAttribute('data-filtre-lu', '');
          else c.removeAttribute('data-filtre-lu');
        });
      }
      const vueLire = w.querySelector('[data-news-vue="lire"]');
      const surLire = !!vueLire && !vueLire.hidden;
      const b = w.querySelector('[data-action="bascule-lus"]');
      if (b) {
        b.hidden = !surLire || lues === 0;
        b.setAttribute('aria-pressed', String(masquer));
        const n = b.querySelector('[data-nb-lus]');
        if (n) n.textContent = String(lues);
      }
      return lues;
    }

    










    _majDone() {
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return;
      



      this._majFormats();
      const queue = w.querySelector('[data-news-queue]');
      if (!queue) return;
      const visibles = queue.querySelectorAll(
        '.er-news2:not([hidden]):not([data-consumed]):not([data-filtre-lu])').length;
      const masques = queue.querySelectorAll('.er-news2[data-filtre-lu]').length;
      



      const parLeFiltre = visibles === 0 && masques > 0;
      const doneEl = w.querySelector('[data-news-done]');
      if (doneEl) doneEl.hidden = visibles > 0 || parLeFiltre;
      this._bandeToutLu(parLeFiltre ? masques : 0);
    }

    



    _bandeToutLu(combien) {
      const w = this.querySelector('.er-widget-news-mix');
      const queue = w && w.querySelector('[data-news-queue]');
      if (!queue || !queue.parentElement) return;
      let el = queue.parentElement.querySelector('.er-news-vide-lus');
      if (!combien) { if (el) el.remove(); return; }
      if (!el) {
        el = document.createElement('div');
        el.className = 'er-news-vide-lus';
        el.setAttribute('role', 'status');
        queue.parentElement.insertBefore(el, queue.nextSibling);
      }
      




      const POSES_PAUSE = [TYMAL.assis, TYMAL.detente];
      const pose = POSES_PAUSE[new Date().getDate() % POSES_PAUSE.length];
      el.innerHTML =
        `<img class="er-news-vide-lus-ico" src="${escapeHtml(pose)}" alt="" loading="lazy" decoding="async">` +
        `<p class="er-news-vide-lus-txt">${ICON_LU}<span>Tout ce qui te restait ici, tu l'as déjà lu.</span></p>` +
        `<div class="er-news-vide-lus-acts">` +
        `<button class="er-btn er-btn--ghost" type="button" data-action="revoir-lus">Les revoir</button>` +
        `<a class="er-news-done-lien" href="${ACTUS_PAGE_PATH}" data-action="go-page" data-page="actus">Ou voir toute l'actu de la course</a>` +
        `</div>`;
      this._i18n(el);
      const b = el.querySelector('[data-action="revoir-lus"]');
      if (b) b.addEventListener('click', () => {
        poserMasquerLus(false);
        this._appliquerFiltreLus();
        this._majVolet();
      });
    }

    _majVolet() {
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return;
      this._appliquerFiltreLus();
      this._majDone();
      const vivantes = (sel) => w.querySelectorAll(sel).length;
      const nb = {
        

        lire:   vivantes('[data-news-queue] .er-news2:not([data-consumed]):not([data-filtre-lu])'),
        later:  vivantes('[data-news-pile="later"] .er-news2:not([data-consumed])') + (this._resteHors?.later || 0),
        hidden: vivantes('[data-news-pile="hidden"] .er-news2:not([data-consumed])') + (this._resteHors?.hidden || 0)
      };
      Object.keys(nb).forEach(k => {
        const b = w.querySelector(`[data-nb="${k}"]`);
        if (b) { b.textContent = String(nb[k]); b.hidden = !nb[k]; }
        const ong = w.querySelector(`[data-news-onglet="${k}"]`);
        


        if (ong && k === 'hidden') ong.hidden = !nb[k];
      });
      const tete = w.querySelector('.er-section-count-num');
      if (tete) tete.textContent = String(nb.lire);
      ['later', 'hidden'].forEach(k => {
        const pile = w.querySelector(`[data-news-pile="${k}"]`);
        if (!pile) return;
        const videEl = pile.querySelector('[data-pile-vide]');
        const reste = pile.querySelector('.er-news-pile-reste');
        const visibles = pile.querySelectorAll('.er-news2:not([data-consumed])').length;
        if (videEl) videEl.hidden = visibles > 0;
        if (reste) reste.hidden = visibles === 0;
      });
      

      const actif = w.querySelector('[data-news-onglet][aria-selected="true"]');
      if (actif && actif.hidden) {
        const lire = w.querySelector('[data-news-onglet="lire"]');
        if (lire) lire.click();
      }
    }

     
     
     
     
     
    _buildRecoCard(a, variant, hidden, mode) {
      const id      = a?._id || a?.id || '';
      const isLead  = variant === 'lead';
      













      const coverUne = a?.coverMedium || a?.coverImage || '';
      const coverVig = a?.coverThumb  || a?.coverImage || '';
      const cover   = isLead ? coverUne : coverVig;
      const title   = a?.title || '';
      const excerpt = a?.excerpt || '';
      const kind    = a?.mediaKind || '';
      










      




      const clefsCl = Array.isArray(a?.classes) && a.classes.length ? a.classes
                    : (a?.classe ? [a.classe] : []);
      const cfgsCl = clefsCl.map(k => CLASSES_CONFIG.find(c => c.key === k)).filter(Boolean);
      




      const cfgKick = cfgsCl.length === 1 ? cfgsCl[0] : null;
      











      const CAT_MUETTES = ['actualites', 'actualite', 'news', 'video', 'audio', 'image', 'photo'];
      const catNorm = String(a?.mainCategoryLabel || '').normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      const kicker  = (cfgKick && cfgKick.label)
        || (a?.mainCategoryLabel && !CAT_MUETTES.includes(catNorm) ? a.mainCategoryLabel : '');
      const timeAgo = formatTimeAgoLang(a?.publishedDate, this._lang());
      const read    = Number.isFinite(a?.minutesToRead) && a.minutesToRead > 0 ? `${a.minutesToRead} min` : '';

      const meta = [
        timeAgo ? `<span class="er-news2-clock">${ICON_CLOCK_SM}${escapeHtml(timeAgo)}</span>` : '',
        read ? `<span>${escapeHtml(read)}</span>` : ''
      ].filter(Boolean).join('');

      const fmtLabel = MEDIA_LABELS[kind] || '';
      


      const fmtGlyph = MEDIA_GLYPHS[kind]
        ? `<span class="er-news2-fmt"${isLead ? ' data-lead="1"' : ''}>` +
          `<span aria-hidden="true">${MEDIA_GLYPHS[kind]}</span>` +
          (fmtLabel ? `<b>${escapeHtml(fmtLabel)}</b>` : '') +
          '</span>'
        : '';
      const newFlag = a?.isNew ? '<span class="er-news2-new"><span>Nouveau</span></span>' : '';

      const media = cover
        ? `<img class="er-news2-img" src="${escapeHtml(cover)}" alt="" loading="lazy" decoding="async">`
        : '<div class="er-news2-img is-empty"></div>';

      const acts = mode === 'reco' ? `
            <div class="er-news2-acts">
              <button class="er-news2-act" type="button" data-action="reco-later"
                      title="La ranger dans « Plus tard », pour la lire quand tu veux"
                      aria-label="Plus tard : ranger cette actu dans ma liste">${ICON_LATER}<span>Plus tard</span></button>
              <button class="er-news2-act er-news2-act--no" type="button" data-action="reco-hidden"
                      title="La retirer de mes recommandations, elle reste consultable dans « Écartées »"
                      aria-label="Pas pour moi : retirer cette actu de mes recommandations">${ICON_NOT_FOR_ME}<span>Pas pour moi</span></button>
            </div>` : mode === 'later' ? `
            <div class="er-news2-acts">
              <button class="er-news2-act" type="button" data-action="reco-none"
                      title="Retirer de ma liste"
                      aria-label="Retirer de ma liste">${ICON_ANNULER}<span>Retirer</span></button>
            </div>` : `
            <div class="er-news2-acts">
              <button class="er-news2-act" type="button" data-action="reco-none"
                      title="Le remettre dans mes recommandations"
                      aria-label="Remettre dans mes actus">${ICON_ANNULER}<span>Remettre</span></button>
            </div>`;

      



      const r = (mode === 'reco' && a && a.raison) ? a.raison : null;
      








      const val = r && r.valeur ? escapeHtml(r.valeur) : '';
      













      const filtrable = r && (r.type === 'skipper' || r.type === 'classe' || r.type === 'theme');
      const enTete = (ico, dedans) => filtrable
        ? `<button class="er-news2-raison est-filtre" type="button" data-action="filtre-raison"
                  data-raison-type="${escapeHtml(r.type)}" data-raison-valeur="${val}"
                  title="Ne voir que ça dans mes actus">${ico}<span>${dedans}</span></button>`
        : `<p class="er-news2-raison${r && r.type === 'aucune' ? ' est-neutre' : ''}">${ico}<span>${dedans}</span></p>`;
      const raisonHtml = !r ? ''
        : r.type === 'skipper'
          ? enTete(ICON_R_SKIPPER, `<i>Parce que tu suis</i> <b>${val}</b>`)
        : r.type === 'classe'
          ? enTete(ICON_R_CLASSE, `<b>${val}</b><i>, une de tes classes</i>`)
        : r.type === 'theme'
          ? enTete(ICON_R_THEME, `<b>${val}</b><i>, un de tes sujets</i>`)
        : r.type === 'affinite'
          ? enTete(ICON_R_AFFIN, '<i>Tu ouvres souvent ce sujet</i>')
        : r.type === 'aucune'
          ? enTete('', '<i>L\'actu de la course</i>')
        : '';

      






      const cfgCl = cfgsCl.length === 1 ? cfgsCl[0] : null;
      




      const slug = slugDArticle(a);
      const dejaLu = a?.dejaLu === true || (slug && this._lus && this._lus.has(slug));

      
















      







      const seul = cfgsCl.length === 1;
      





















      const etroit = (window.innerWidth || 1280) < 768;
      const estUne = variant === 'lead';
      








      const taillePav = estUne ? (etroit ? 42 : 60) : 26;
      










      const dispoPav = estUne ? (etroit ? 210 : 400) : (etroit ? 76 : 112);
      


      const pasPav = cfgsCl.length > 1
        ? Math.min(taillePav * 0.88, (dispoPav - taillePav) / (cfgsCl.length - 1))
        : taillePav;
      const flagHtml = cfgsCl.map((c, i) =>
        `<img class="er-news2-pavillon" src="${escapeHtml(prefsWixImg(c.icon))}" alt="${seul ? '' : escapeHtml(c.label)}" loading="lazy" decoding="async" title="${escapeHtml(c.label)}">`).join('');
      const luHtml = dejaLu ? '<span class="er-news2-lu">Lu</span>' : '';
      




      const marquesHtml = (flagHtml || luHtml)
        ? `<div class="er-news2-marques" style="--pav:${taillePav}px;--pas:${pasPav.toFixed(2)}px">${luHtml}` +
          `${flagHtml ? `<span class="er-news2-pavillons">${flagHtml}</span>` : ''}</div>`
        : '';
      return `
        <article class="er-news2 er-news2--${escapeHtml(variant)}${cfgCl ? ' a-classe' : ''}${dejaLu ? ' est-lue' : ''}"${slug ? ` data-slug="${escapeHtml(slug)}"` : ''}
                 data-reco-id="${escapeHtml(id)}"${kind ? ` data-kind="${escapeHtml(kind)}"` : ''}
                 data-cover-une="${escapeHtml(coverUne)}" data-cover-vig="${escapeHtml(coverVig)}"${cfgCl ? ` style="--cl: ${escapeHtml(cfgCl.col)}"` : ''}${hidden ? ' hidden' : ''}>
          <div class="er-news2-media">
            ${media}
            ${fmtGlyph}
            ${newFlag}
            ${marquesHtml}
            <div class="er-news2-une">
              ${isLead && kicker ? `<span class="er-news2-kicker">${escapeHtml(kicker)}</span>` : ''}
              ${isLead ? `<h3 class="er-news2-title">${escapeHtml(title)}</h3>` : ''}
              ${excerpt ? `<p class="er-news2-excerpt">${escapeHtml(excerpt)}</p>` : ''}
            </div>
          </div>
          <div class="er-news2-body">
            ${!isLead && kicker ? `<span class="er-news2-kicker">${escapeHtml(kicker)}</span>` : ''}
            ${isLead ? '' : `<h3 class="er-news2-title">${escapeHtml(title)}</h3>`}
            ${raisonHtml}
            <div class="er-news2-meta">${meta}</div>
            ${acts}
          </div>
          <button class="er-news2-hit" type="button" data-action="go-article"
                  data-article-id="${escapeHtml(id)}" aria-label="Lire : ${escapeHtml(title)}"></button>
          ${mode === 'reco' ? `<div class="er-news2-swipe" aria-hidden="true"><span class="er-news2-swipe-face er-news2-swipe-face--later">${ICON_CLOCK}<b>Lire plus tard</b></span><span class="er-news2-swipe-face er-news2-swipe-face--no">${ICON_NOT_FOR_ME}<b>Pas pour moi</b></span></div>` : ''}
        </article>
      `;
    }

    
















    _rangerArticle(wrap, etat) {
      if (!wrap || wrap.hasAttribute('data-consumed')) return;
      const postId = wrap.getAttribute('data-reco-id') || '';
      if (!postId) return;
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return;

      const pileSource = wrap.closest('[data-news-pile]');
      const source = pileSource ? pileSource.getAttribute('data-news-pile') : 'reco';
      const slug = this._resolveArticleUrl(postId) || '';

      this.dispatchEvent(new CustomEvent('er-article-state', {
        bubbles: true, composed: true, detail: { postId, state: etat, slug }
      }));

      



      





      if (source === 'reco') wrap._placeFile = { suivant: wrap.nextElementSibling };
      wrap._retour = { parent: wrap.parentElement, suivant: wrap.nextElementSibling, mode: source };

      


      const bande = (source === 'reco') ? this._bandeAnnulation(wrap, postId, etat) : null;

      



      if (etat === 'none') {
        










        const file = w.querySelector('[data-news-queue]');
        if (source !== 'reco' && file) {
          const p = wrap._placeFile;
          const ancre = p && p.suivant && p.suivant.isConnected && p.suivant.parentElement === file
            ? p.suivant : null;
          


          file.insertBefore(wrap, ancre || file.firstElementChild);
          this._habillerCarte(wrap, 'reco');
          wrap.hidden = false;
          wrap.removeAttribute('data-consumed');
          wrap.style.transform = ''; wrap.style.opacity = '';
          this._toastSimple(this._lang() === 'en'
            ? 'Put back in your stories.'
            : 'Remis dans tes actus.');
        } else {
          wrap.hidden = true;
          wrap.setAttribute('data-consumed', '');
        }
      } else {
        const cible = w.querySelector(`[data-news-pile="${etat}"] .er-news-feed`);
        if (cible) {
          cible.insertBefore(wrap, cible.firstChild);
          this._habillerCarte(wrap, etat);
          wrap.hidden = false;
          wrap.style.transform = ''; wrap.style.opacity = '';
          wrap.removeAttribute('data-consumed');
        } else {
          wrap.hidden = true;
          wrap.setAttribute('data-consumed', '');
        }
      }
      if (bande) bande.__carte = wrap;

      if (source === 'reco') {
        const queue = w.querySelector('[data-news-queue]');
        




        const rec = queue && (queue.querySelector('.er-news2[hidden]:not([data-consumed]):not([data-filtre-lu])') ||
                              queue.querySelector('.er-news2[hidden]:not([data-consumed])'));
        if (rec) rec.hidden = false;
      }
      this._majVolet();
    }

    













    _bandeAnnulation(wrap, postId, etat) {
      const ANNUL_MS = 7000;
      const mot = etat === 'later' ? 'Rangé dans « Plus tard »' : 'Retiré de tes recos';
      const bande = document.createElement('div');
      bande.className = 'er-news-annul';
      bande.setAttribute('role', 'status');
      bande.setAttribute('data-annul-post', postId);
      




      bande.style.setProperty('--annul-ms', ANNUL_MS + 'ms');
      bande.innerHTML = `<span class="er-news-annul-txt">${escapeHtml(mot)}</span>` +
        `<button class="er-news-annul-btn" type="button" data-action="annuler-rangement">${ICON_ANNULER}<span>Annuler</span></button>`;
      





      this._i18n(bande);
      wrap.insertAdjacentElement('afterend', bande);

      bande.querySelector('[data-action="annuler-rangement"]').addEventListener('click', (e) => {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('er-article-state', {
          bubbles: true, composed: true, detail: { postId, state: 'none' }
        }));
        this._remettreCarte(bande.__carte || wrap, bande);
      });

      const t = setTimeout(() => { if (bande.parentNode) bande.remove(); }, ANNUL_MS);
      this._removeTimers.push(t);
      return bande;
    }

    


    _remettreCarte(wrap, bande) {
      if (bande && bande.parentNode) bande.remove();
      if (!wrap) return;
      const r = wrap._retour;
      if (r && r.parent && r.parent.isConnected) {
        r.parent.insertBefore(wrap, r.suivant && r.suivant.isConnected ? r.suivant : null);
        this._habillerCarte(wrap, r.mode === 'reco' ? 'reco' : r.mode);
      }
      wrap.hidden = false;
      wrap.removeAttribute('data-consumed');
      wrap.style.transform = '';
      wrap.style.opacity = '';
      


      const queue = this.querySelector('[data-news-queue]');
      if (queue && wrap.parentElement === queue) {
        const visibles = [...queue.querySelectorAll('.er-news2:not([hidden])')];
        if (visibles.length > 5) visibles[visibles.length - 1].hidden = true;
      }
      this._majVolet();
    }

    


    _retourEtatArticle(brut) {
      let d = null;
      try { d = JSON.parse(brut || '{}'); } catch (e) { return; }
      if (!d || !d.postId || d.ok !== false) return;
      const wrap = this.querySelector(`.er-news2[data-reco-id="${CSS.escape(d.postId)}"]`);
      const bande = this.querySelector(`.er-news-annul[data-annul-post="${CSS.escape(d.postId)}"]`);
      this._remettreCarte(wrap, bande);
      


      if (wrap && wrap.parentNode) {
        const err = document.createElement('div');
        err.className = 'er-news-annul est-erreur';
        err.setAttribute('role', 'alert');
        err.textContent = "Ça n'a pas pu être enregistré, l'actu est remise en place.";
        wrap.insertAdjacentElement('afterend', err);
        const t = setTimeout(() => { if (err.parentNode) err.remove(); }, 6000);
        this._removeTimers.push(t);
      }
    }

    













    _filtrerParRaison(type, valeur) {
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return;
      const queue = w.querySelector('[data-news-queue]');
      if (!queue) return;

      this._filtreRaison = { type, valeur };
      let gardees = 0;
      queue.querySelectorAll('.er-news2').forEach(c => {
        if (c.hasAttribute('data-consumed')) return;
        const b = c.querySelector('[data-raison-type]');
        const va = b && b.getAttribute('data-raison-type') === type &&
                        b.getAttribute('data-raison-valeur') === valeur;
        c.hidden = !va;
        if (va) gardees++;
      });

      this._majDone();
      this._bandeFiltre(valeur, gardees);
    }

    _bandeFiltre(valeur, combien) {
      const w = this.querySelector('.er-widget-news-mix');
      const vue = w && w.querySelector('[data-news-vue="lire"]');
      if (!vue) return;
      let bande = vue.querySelector('.er-news-filtre');
      if (!bande) {
        bande = document.createElement('div');
        bande.className = 'er-news-filtre';
        bande.setAttribute('role', 'status');
        vue.insertBefore(bande, vue.firstChild);
      }
      bande.innerHTML =
        `<span class="er-news-filtre-txt">${ICON_R_SKIPPER}` +
        `<i>Tu ne vois que</i> <b>${escapeHtml(valeur)}</b>` +
        `<em>${combien} actu${combien > 1 ? 's' : ''}</em></span>` +
        `<button class="er-news-filtre-btn" type="button" data-action="filtre-tout">` +
        `${ICON_CLOSE}<span>Tout revoir</span></button>`;
      this._i18n(bande);
      bande.querySelector('[data-action="filtre-tout"]')
        .addEventListener('click', () => this._retirerFiltreRaison());
    }

    _retirerFiltreRaison() {
      this._filtreRaison = null;
      const w = this.querySelector('.er-widget-news-mix');
      if (!w) return;
      const queue = w.querySelector('[data-news-queue]');
      


      const vivantes = [...queue.querySelectorAll('.er-news2:not([data-consumed])')];
      vivantes.forEach((c, i) => { c.hidden = i >= 5; });
      const bande = w.querySelector('.er-news-filtre');
      if (bande) bande.remove();
      this._appliquerFiltreLus();
      this._majDone();
    }

    _wireNewsReco() {
       
      const onglets = Array.from(this.querySelectorAll('[data-news-onglet]'));
      const vues = Array.from(this.querySelectorAll('[data-news-vue]'));
      


      const choisir = (btn) => {
        const cible = btn.getAttribute('data-news-onglet');
        onglets.forEach(b => {
          const on = b === btn;
          b.setAttribute('aria-selected', String(on));
          

          b.setAttribute('tabindex', on ? '0' : '-1');
        });
        


        vues.forEach(v => { v.hidden = v.getAttribute('data-news-vue') !== cible; });
        this._appliquerFiltreLus();
        this._majDone();
      };
      onglets.forEach(btn => {
        btn.addEventListener('click', () => choisir(btn));
        btn.addEventListener('keydown', (e) => {
          const pas = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
          const bord = e.key === 'Home' ? 'debut' : e.key === 'End' ? 'fin' : '';
          if (!pas && !bord) return;
          e.preventDefault();
          const vis = onglets.filter(b => !b.hidden);
          if (!vis.length) return;
          let i = vis.indexOf(btn);
          if (bord) i = bord === 'debut' ? 0 : vis.length - 1;
          else i = (i + pas + vis.length) % vis.length;
          choisir(vis[i]);
          vis[i].focus();
        });
      });

       
      


      this.querySelectorAll('.er-news2-acts').forEach(zone => this._cablerActions(zone));

       
      const plus = this.querySelector('[data-action="news-plus"]');
      if (plus) {
        plus.addEventListener('click', () => {
          const w = this.querySelector('.er-widget-news-mix');
          const file = w && w.querySelector('[data-news-queue]');
          if (!file) return;
          

          const caches = [...file.querySelectorAll('.er-news2[hidden]:not([data-consumed])')];
          caches.slice(0, NEWS_RESERVE).forEach(c => { c.hidden = false; });
          const reste = caches.length - Math.min(NEWS_RESERVE, caches.length);
          if (reste > 0) {
            const n = plus.querySelector('b');
            if (n) n.textContent = String(reste);
          } else {
            plus.remove();
          }
          this._majVolet();
        });
      }

       
      




      const bandeLass = this.querySelector('[data-lassitude]');
      if (bandeLass) {
        const type = bandeLass.getAttribute('data-lass-type') || '';
        const valeur = bandeLass.getAttribute('data-lass-valeur') || '';
        const repondre = (accepte) => {
          bandeLass.remove();
          this.dispatchEvent(new CustomEvent('er-lassitude', {
            bubbles: true, composed: true, detail: { type, valeur, accepte }
          }));
          if (accepte) {
            






            this._toastSimple(this._lang() === 'en'
              ? 'Noted, we will stop suggesting it.'
              : "C'est noté, on arrête de t'en proposer.");
          }
        };
        bandeLass.querySelector('[data-action="lass-oui"]')
          ?.addEventListener('click', () => repondre(true));
        bandeLass.querySelector('[data-action="lass-non"]')
          ?.addEventListener('click', () => repondre(false));
      }

       
      const bascule = this.querySelector('[data-action="bascule-lus"]');
      if (bascule) {
        bascule.addEventListener('click', () => {
          poserMasquerLus(!masquerLusActif());
          this._appliquerFiltreLus();
          this._majVolet();
        });
      }

       
      this.querySelectorAll('[data-action="filtre-raison"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();    
          this._filtrerParRaison(btn.getAttribute('data-raison-type'),
                                 btn.getAttribute('data-raison-valeur'));
        });
      });

      const queue = this.querySelector('[data-news-queue]');
      if (!queue) return;

      






















       
       
      const SEUIL = 68;
      queue.querySelectorAll('.er-news2').forEach(wrap => {
        const card  = wrap;
        const hint  = wrap.querySelector('.er-news2-swipe');
        if (!hint) return;
        let x0 = 0, y0 = 0, dx = 0, active = false, decided = false, consumedAt = 0;

        const reset = () => {
          card.style.transform = '';
          card.style.opacity = '';
          hint.removeAttribute('data-dir');
          hint.removeAttribute('data-arme');
          hint.style.removeProperty('--er-sw');
          wrap.removeAttribute('data-dragging');
          active = false; decided = false; dx = 0;
        };

        wrap.addEventListener('touchstart', (e) => {
          if (e.touches.length !== 1 || wrap.hasAttribute('data-consumed')) return;
          x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
          active = true; decided = false; dx = 0;
        }, { passive: true });

        wrap.addEventListener('touchmove', (e) => {
          if (!active) return;
          dx = e.touches[0].clientX - x0;
          const dy = e.touches[0].clientY - y0;
          if (!decided) {
            if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return;
            if (Math.abs(dy) > Math.abs(dx)) { active = false; return; }   
            decided = true;
            wrap.setAttribute('data-dragging', 'true');
          }
          

          const dir = dx < 0 ? 'later' : 'no';
          hint.setAttribute('data-dir', dir);
          

          const p = Math.min(1, Math.abs(dx) / SEUIL);
          hint.style.setProperty('--er-sw', p.toFixed(3));
          if (Math.abs(dx) >= SEUIL) hint.setAttribute('data-arme', 'true');
          else hint.removeAttribute('data-arme');
          card.style.transform = `translateX(${dx}px)`;
          


        }, { passive: true });

        wrap.addEventListener('touchend', () => {
          if (!active || !decided) { reset(); return; }
          const go = Math.abs(dx) >= SEUIL;
          

          const etat = dx < 0 ? 'later' : 'hidden';
          if (go) {
            consumedAt = Date.now();
            card.style.transform = `translateX(${dx > 0 ? 420 : -420}px)`;
            card.style.opacity = '0';
            wrap.removeAttribute('data-dragging');
            const t = setTimeout(() => { this._rangerArticle(wrap, etat); reset(); }, 200);
            this._removeTimers.push(t);
          } else {
            reset();
          }
        }, { passive: true });

        wrap.addEventListener('touchcancel', reset, { passive: true });

         
        wrap.addEventListener('click', (e) => {
          if (Date.now() - consumedAt < 500) { e.stopPropagation(); e.preventDefault(); }
        }, true);
      });

      












      this._majVolet();
    }

    _buildSuggestionsWidget() {
      const recos = Array.isArray(this._payload?.recoSkippers) ? this._payload.recoSkippers : [];

       
       
      const collapsed = this._suggestionsCollapsed();
      const header = `
        <div class="er-section-header er-section-header--compact">
          <div class="er-section-header-left">
            <h2 class="er-section-title er-section-title--sm">Pour toi</h2>
            <p class="er-section-sub">On pense qu'ils vont te plaire</p>
          </div>
          <button class="er-suggestions-toggle" type="button" data-action="toggle-suggestions"
                  aria-expanded="${collapsed ? 'false' : 'true'}"
                  aria-label="${collapsed ? 'Afficher les suggestions' : 'Replier les suggestions'}"
                  title="${collapsed ? 'Afficher les suggestions' : 'Replier les suggestions'}">
            ${ICON_COLLAPSE}
          </button>
        </div>
      `;

      if (!recos.length) {
        return `
          <div class="er-widget-suggestions" data-slot="suggestions" data-collapsed="${collapsed}" role="region" aria-label="Suggestions pour toi">
            ${header}
            <div class="er-suggestions-empty">
              <div class="er-suggestions-empty-text">Complète tes préférences pour des suggestions sur mesure</div>
              <button class="er-btn er-btn--ghost" type="button" data-action="go-preferences">
                ${ICON_GEAR}<span>Mes préférences</span>
              </button>
            </div>
          </div>
        `;
      }

      const items = recos.slice(0, 4);
      const itemsHtml = items.map(s => {
        const id       = s?._id || s?.id || '';
        const prenom   = s?.prenom || '';
        const nom      = s?.nom || '';
        const photo    = s?.photoVignette || '';
        const classCfg = findClassConfig(s?.classes?.nom);
        const classSlug = classCfg?.key || 'ultim';
        const boat      = s?.bateau || '';
        const className = s?.classes?.nom || '';
        const infoLine  = [className, boat].filter(Boolean).join(' · ') || 'À découvrir';
         
         
         
        const why       = s?.recoReason || '';

        return `
          <div class="er-suggestion-item"
               role="button" tabindex="0"
               data-action="go-skipper" data-skipper-id="${escapeHtml(id)}">
            <div class="er-suggestion-photo${photo ? '' : ' is-empty'}"${photo ? ` style="background-image: url('${escapeHtml(photo)}');"` : ''}>
              ${photo ? '' : `<span class="er-photo-empty">${ICON_AVATAR}</span>`}
              <div class="er-suggestion-class-dot" style="background: var(--er-class-${escapeHtml(classSlug)});"></div>
            </div>
            <div class="er-suggestion-content">
              <div class="er-suggestion-name">${prenom ? `<span class="er-suggestion-prenom">${escapeHtml(prenom)}</span> ` : ''}<span class="er-suggestion-nom">${escapeHtml(nom)}</span></div>
              <div class="er-suggestion-tag">${escapeHtml(infoLine)}</div>
            </div>
            <div class="er-suggestion-acts">
              <button class="er-suggestion-add" type="button"
                      data-action="add-skipper" data-skipper-id="${escapeHtml(id)}"
                      data-fav="false" aria-pressed="false" title="Suivre ${escapeHtml(prenom + ' ' + nom)}"
                      data-nom="${escapeHtml(prenom + ' ' + nom)}"
                      aria-label="Suivre ${escapeHtml(prenom + ' ' + nom)}">
                ${ICON_PLUS}
              </button>
              ${why ? `
              <button class="er-sugg-why" type="button" data-action="reco-why"
                      aria-expanded="false" aria-describedby="er-why-${escapeHtml(id)}"
                      aria-label="Pourquoi ${escapeHtml(prenom + ' ' + nom)} t'est proposé">${ICON_INFO}</button>
              <span class="er-sugg-why-pop" id="er-why-${escapeHtml(id)}" role="tooltip">${escapeHtml(why)}</span>` : ''}
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="er-widget-suggestions" data-slot="suggestions" data-collapsed="${collapsed}">
          ${header}
          <div class="er-suggestions-list">${itemsHtml}</div>
        </div>
      `;
    }

    _buildStatsWidget() {
      const stats = this._payload?.stats || {};
      const daysStreak     = stats.nbJoursConnecte ?? 0;
      const articlesRead   = stats.nbArticlesLus   ?? 0;
      const profilesViewed = stats.nbSkippersVus   ?? 0;
      const percentile     = stats.percentile;
      



      const rangLabel      = stats.rangLabel || '';

      const display = (value) => value === 0 || value == null ? '—' : String(value);
      























      const classeAuTop = typeof percentile === 'number' && percentile < 100;
      const displayPercent = () => `${percentile}<span>%</span>`;

      const factDays     = computeStatFact('daysStreak', daysStreak);
      const factArticles = computeStatFact('articlesRead', articlesRead);
      const factProfiles = computeStatFact('profilesViewed', profilesViewed);
      const factPercent  = computeStatFact('percentile', percentile, rangLabel);

       
       
      



      const statsAge = (iso) => {
        if (!iso) return '';
        const t = new Date(iso).getTime();
        if (isNaN(t)) return '';
        const jours = Math.floor((Date.now() - t) / 86400000);
        if (jours <= 0) return "aujourd'hui";
        return jours === 1 ? 'hier' : `il y a ${jours} jours`;
      };
      const age = statsAge(stats.lastComputedAt);

      return `
        <div class="er-widget er-widget--stats" data-slot="stats" role="region" aria-label="Mes statistiques">
          <div class="er-widget-label">Mes statistiques</div>
          <h3 class="er-stats-heading">En chiffres</h3>
          <p class="er-section-sub">Ton engagement depuis ton arrivée</p>
          <div class="er-stats-grid" style="--er-stats-n: ${classeAuTop ? 4 : 3}">
            <div class="er-stat-block">
              <div class="er-stat-block-num">${display(daysStreak)}</div>
              <div class="er-stat-block-label">Jours de suite</div>
              <div class="er-stat-block-sub">${escapeHtml(factDays)}</div>
            </div>
            <div class="er-stat-block">
              <div class="er-stat-block-num">${display(articlesRead)}</div>
              <div class="er-stat-block-label">Articles lus</div>
              <div class="er-stat-block-sub">${escapeHtml(factArticles)}</div>
            </div>
            <div class="er-stat-block">
              <div class="er-stat-block-num">${display(profilesViewed)}</div>
              <div class="er-stat-block-label">Profils vus</div>
              <div class="er-stat-block-sub">${escapeHtml(factProfiles)}</div>
            </div>
            ${classeAuTop ? `
            <div class="er-stat-block">
              <div class="er-stat-block-num">${displayPercent()}</div>
              <div class="er-stat-block-label">Top des fans</div>
              <div class="er-stat-block-sub">${escapeHtml(factPercent)}</div>
            </div>` : ''}
          </div>
          <div class="er-stats-updated" tabindex="0" role="note" aria-label="Rythme de mise à jour des statistiques">
            <svg class="er-stats-updated-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <span>Chiffres recalculés tous les jours${age ? ` — <b>${age}</b>` : ''}</span>
            <span class="er-stats-tip">
              <strong>Mise à jour</strong>
              Tes lectures et découvertes sont comptabilisées une fois par jour. Tes favoris, eux, sont pris en compte tout de suite.
            </span>
          </div>
        </div>
      `;
    }

    












    _buildApercuWidget() {
      if (this._payload?.apercuAutorise !== true) return '';
      const actifs = Array.isArray(this._payload?.apercuActif) ? this._payload.apercuActif : [];
      const CHIPS = [
        { k: 'roue',          n: 'Roue' },
        { k: 'pronostics',    n: 'Pronostics' },
        { k: 'combativite',   n: 'Combativité' },
        { k: 'pack-fan',      n: 'Pack Fan' },
        { k: 'compteur-fans', n: 'Compteur de fans' },
        { k: 'top-50',        n: 'Top 50 des fans' }
      ];
      




      const ETATS_AP = {
        'prete':        { t: '',                  ok: true },
        'sans-donnees': { t: 'table vide',        ok: false },
        'tour-joue':    { t: 'tour déjà joué',    ok: true },
        'deja-active':  { t: 'déjà en ligne',     ok: true },
        

        'demonstration': { t: 'simulé',           ok: true }
      };
      const diag = this._payload?.apercuEtat || {};
      const chips = CHIPS.map(c => {
        const on = actifs.includes(c.k);
        const e = ETATS_AP[diag[c.k]] || { t: '', ok: true };
        return `<button class="er-apercu-chip" type="button" role="switch"
                aria-pressed="${on}"${e.ok ? '' : ' data-vide'}
                data-apercu="${escapeHtml(c.k)}">${escapeHtml(c.n)}${e.t ? `<em>${escapeHtml(e.t)}</em>` : ''}</button>`;
      }).join('');

      

      const rejouer = diag.roue === 'tour-joue'
        ? '<button class="er-apercu-action" type="button" data-action="rejouer-roue">Rejouer la roue</button>'
        : '';
      return `
        <aside class="er-apercu" data-slot="apercu" aria-label="Aperçu d'équipe">
          <div class="er-apercu-tete">
            <span class="er-apercu-pastille">Aperçu</span>
            <span class="er-apercu-qui">visible de toi seul</span>
          </div>
          <div class="er-apercu-chips">${chips}${rejouer}</div>
          <p class="er-apercu-note">Force l'affichage d'une animation éteinte.
             Une table vide ne montre rien : ce sont les données du site.</p>
        </aside>
      `;
    }

    










    _buildRangsWidget() {
      const stats = this._payload?.stats || {};
      const label = stats.rangLabel || '';
      const ici = rangIndex(label);
      const derniere = RANG_FRISE.length - 1;
      const suivant = (ici >= 0 && ici < derniere) ? RANG_FRISE[ici + 1].label : '';
      

      const nombre = (n) => Math.max(0, Math.round(Number(n) || 0)).toLocaleString(this._lang() === 'en' ? 'en-GB' : 'fr-FR');
      const manque = Number(stats.rangProgression?.manque) || 0;
      const aPoints = typeof stats.points === 'number';

      const etapes = RANG_FRISE.map((p, i) => {
        const etat = ici < 0 ? 'attente'
          : (i < ici ? 'acquis' : (i === ici ? 'actuel' : 'a-venir'));
        const pts = !aPoints || ici < 0 ? ''
          : (i === ici ? `<span class="er-frise-pts">${nombre(stats.points)} pts</span>`
            : (i === ici + 1 && manque > 0 ? `<span class="er-frise-pts er-frise-pts--suite">encore ${nombre(manque)} pts</span>` : ''));
        return `<button class="er-frise-et" type="button" data-etat="${etat}"
                data-frise="${i}" style="--lift:${16 + i * 15}px;--rang:${i}"
                aria-label="${escapeHtml(p.label)}">
          <span class="er-frise-halo"></span>
          <img class="er-frise-illu" src="${escapeHtml((tymalPalier(this._payload, p.label, 288) || {}).src || '')}"
               alt="" loading="lazy" decoding="async">
          <span class="er-frise-fil"></span><span class="er-frise-pt"></span>
          <span class="er-frise-nom">${escapeHtml(p.label)}</span>
          ${pts}
        </button>`;
      }).join('');

      

      const part = ici < 0 ? 0.5 : (ici / derniere);
      const solX = (7.14 + part * 85.72).toFixed(1) + '%';
      const jusqua = (ici < 0 ? 0 : part * 100).toFixed(1) + '%';

      const phrase = ici < 0
        ? 'Le classement s\'ouvrira quand nous serons assez nombreux.'
        : (suivant
          ? `Tu es <b>${escapeHtml(label)}</b>. Encore un cran et tu passes ${escapeHtml(suivant)}.`
          : `Tu es <b>${escapeHtml(label)}</b>. Il n'y a rien au-dessus.`);

      return `
        <section class="er-frise er-motif-host er-motif-host--filaire"
                 data-section="rangs" style="--sx:${solX}" aria-label="Mon rang">
          <span class="er-frise-mer" aria-hidden="true"></span>
          <span class="er-frise-astre" aria-hidden="true"></span>
          <div class="er-frise-tete">
            <span class="er-frise-kick">Mon rang</span>
            <h2 class="er-frise-titre">Où tu en es</h2>
            <p class="er-frise-phrase">${phrase}</p>
          </div>
          <div class="er-frise-defil">
            <div class="er-frise-piste">
              <div class="er-frise-rangee">
                <span class="er-frise-jauge" style="--jusqua:${jusqua}"></span>
                ${etapes}
              </div>
            </div>
          </div>
          <p class="er-frise-note" data-frise-note role="status"></p>
          <!-- ══════════════════════════════════════════════════════════════
               ⚠️ LA FRISE DISAIT OU L ON EST, PAS COMMENT ON AVANCE.

               Demande d Alexis au point du 7 septembre, reprise par Jules :
               « tu n as pas de rappel de comment je fais pour changer de
               statut ». « Encore 188 points » repond a COMBIEN, pas a QUOI
               FAIRE. Un palier qu on ne sait pas atteindre est une note, pas
               un objectif.

               ⚠️⚠️ MAIS AFFICHER LE BAREME INVITE A LE JOUER. Premiere
               version : quatre gestes avec leur valeur en clair, dont
               « +5 suivre un skipper ». Jules l a vu tout de suite, le 8
               septembre : quelqu un qui lit cette ligne suit les cent dix-huit
               skippers d affilee et se hisse en deux minutes plus haut qu un
               lecteur d une saison entiere. Le chiffre transforme une mesure
               d interet en objectif a optimiser, et ce n est pas ce qu on
               mesure.

               On garde donc le QUOI FAIRE, et on retire le COMBIEN : une
               pastille discrete ouvre une explication qui nomme les gestes
               sans jamais donner un poids.
               ══════════════════════════════════════════════════════════════ -->
          <button class="er-frise-aide" type="button" data-action="open-monte"
                  aria-haspopup="dialog">
            <svg class="er-frise-aide-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>Comment on monte ?</span>
          </button>
        </section>
      `;
    }


    













    _top50Nombre(n) {
      return Math.max(0, Math.round(Number(n) || 0)).toLocaleString(this._lang() === 'en' ? 'en-GB' : 'fr-FR');
    }
    _top50Rang(r, en) {
      const n = Number(r) || 0;
      if (n <= 0) return '';
      if (n === 1) return `<small>${en ? 'No.' : 'N°'}</small>1`;
      return `${n}<sup>${en ? suffixeEn(n) : 'e'}</sup>`;
    }
    


    _top50LigneMoi(en, classe) {
      const t = this._payload?.top50;
      const p = (t && t.maPlace) || {};
      const badges = Number(p.nbBadges) || 0;
      const detail = [p.palier, badges + ' ' + (en ? (badges > 1 ? 'badges' : 'badge') : (badges > 1 ? 'badges' : 'badge'))].filter(Boolean).join(' · ');
      const rang = p.rang
        ? `${this._top50Rang(p.rang, en)}${p.dansTop ? '' : `<small class="er-top50-moi-sur">/ ${this._top50Nombre(p.membres)}</small>`}`
        : `<span class="er-top50-moi-rang--vide">${en ? 'Not ranked yet' : 'Pas encore classé'}</span>`;
      return `<div class="er-top50-moi${classe ? ' ' + classe : ''}">
        <span class="er-top50-moi-rang">${rang}</span>
        <span class="er-top50-moi-txt"><b>${en ? 'Your place' : 'Ta place'}</b><span>${escapeHtml(detail)}</span></span>
        <span class="er-top50-pts">${this._top50Nombre(p.points)}<small>PTS</small></span>
      </div>`;
    }
    _top50Chrono(en) {
      const r = this._payload?.topReglages;
      const cible = r && r.cloture ? new Date(r.cloture).getTime() : 0;
      if (!cible || isNaN(cible)) return '';
      let d = Math.max(0, cible - Date.now());
      const j = Math.floor(d / 86400000); d -= j * 86400000;
      const h = Math.floor(d / 3600000); d -= h * 3600000;
      const m = Math.floor(d / 60000); d -= m * 60000;
      const s = Math.floor(d / 1000);
      const p = (x) => String(x).padStart(2, '0');
      return `<span>${j}<small>${en ? 'd' : 'j'}</small></span><span>${p(h)}<small>h</small></span><span>${p(m)}<small>min</small></span><span>${p(s)}<small>s</small></span>`;
    }

    _buildTop50Widget() {
      const t = this._payload?.top50;
      if (!t || !Array.isArray(t.lignes) || !t.lignes.length) return this._buildLeaderboardTeaserWidget();
      const en = this._lang() === 'en';
      const r = this._payload?.topReglages || null;
      const lignes = t.lignes;
      const toi = en ? 'you' : 'toi';
      const tymal = tymalPalier(this._payload, 'Légende', 288);
      const marche = (l, i) => `<div class="er-top50-marche er-top50-pos-${i + 1} er-top50-marche--m${Math.min(3, l.rang)}">
          <span class="er-top50-medaille">${medailleTop50(l.rang)}</span>
          <span class="er-top50-nom">${escapeHtml(l.nom)}</span>
          <span class="er-top50-palier">${escapeHtml(this._t(l.palier))}</span>
          <span class="er-top50-pts">${this._top50Nombre(l.score)}<small>PTS</small></span>
          <span class="er-top50-badges">${ICON_TOP50_BADGE}${this._top50Nombre(l.nbBadges)} ${en ? 'badges' : 'badges'}</span>
        </div>`;
      const podium = lignes.slice(0, 3);
      const suite = lignes.slice(3, 10).map(l => `<li class="er-top50-l${l.moi ? ' est-moi' : ''}">
          <span class="er-top50-l-rang">${l.rang}</span>
          <span class="er-top50-l-nom">${escapeHtml(l.nom)}<small data-toi="${toi}">${escapeHtml(this._t(l.palier))}</small></span>
          <span class="er-top50-badges">${ICON_TOP50_BADGE}${this._top50Nombre(l.nbBadges)}</span>
          <span class="er-top50-l-pts">${this._top50Nombre(l.score)}<small>PTS</small></span>
        </li>`).join('');
      const lots = r && (r.lots.length || r.accroche);
      const nb = r && r.nbPremiers ? r.nbPremiers : 10;
      const coffre = !lots ? '' : `
        <button class="er-top50-lot" type="button" data-top50-fen="lots">
          <span class="er-top50-coffre">${ICON_TOP50_COFFRE}</span>
          <span class="er-top50-lot-txt"><b>${en ? `Up for grabs for the top ${nb}` : `À gagner pour les ${nb} premiers`}</b>${r.accroche ? `<span>${escapeHtml(r.accroche)}</span>` : ''}</span>
          <span class="er-top50-lot-fleche">${ICON_TOP50_FLECHE}</span>
        </button>`;
      const chrono = this._top50Chrono(en);
      const pied = !chrono ? '' : `
        <p class="er-top50-pied" role="timer" aria-label="${en ? 'Time left before the ranking closes' : 'Temps restant avant la clôture du classement'}">${ICON_TOP50_HORLOGE}<b>${en ? 'Ranking closes' : 'Clôture du classement'}</b> ${escapeHtml(r.clotureTexte || '')} <span class="er-top50-chrono">${chrono}</span></p>`;
      const reglement = r && r.reglement ? `<button class="er-top50-lien" type="button" data-top50-fen="reglement">${ICON_TOP50_REGLEMENT}${en ? 'Rules' : 'Règlement'}</button>` : '';
      return `
        <div class="er-widget er-widget--top50 er-motif-host" data-slot="leaderboard-teaser" role="region" aria-label="${en ? 'Fan ranking' : 'Classement des fans'}">
          <div class="er-top50-gauche">
            ${tymal && tymal.src ? `<img class="er-top50-tymal" src="${escapeHtml(tymal.src)}" alt="" aria-hidden="true" loading="lazy">` : ''}
            <div class="er-top50-tete">
              <p class="er-top50-kick">${ICON_TROPHY_LARGE}${en ? 'Fan ranking' : 'Classement des fans'}</p>
              <h3 class="er-top50-titre">${en ? 'The <em>top 50</em> fans' : 'Le <em>top 50</em> des fans'}</h3>
              <p class="er-top50-sous">${en ? 'The 50 most active members of the community, recalculated every night. Read, come back, follow your skippers: every move counts.' : 'Les 50 plus actifs de la communauté, recalculés chaque nuit. Lis, reviens, suis tes skippers : chaque geste compte.'}</p>
            </div>
            ${coffre}
            ${this._top50LigneMoi(en)}
            <button class="er-top50-tout" type="button" data-top50-fen="tableau">${ICON_TOP50_LISTE}${en ? 'See the full ranking' : 'Voir tout le classement'}</button>
            <div class="er-top50-liens">
              <button class="er-top50-lien" type="button" data-action="open-monte" aria-haspopup="dialog">${ICON_TOP50_AIDE}${en ? 'How do I climb?' : 'Comment on monte ?'}</button>
              ${reglement}
            </div>
          </div>
          <div class="er-top50-droite">
            <div class="er-top50-podium er-top50-podium--${podium.length}">${podium.map(marche).join('')}<span class="er-top50-etoile er-top50-etoile--a" aria-hidden="true">✦</span><span class="er-top50-etoile er-top50-etoile--b" aria-hidden="true">✦</span><span class="er-top50-etoile er-top50-etoile--c" aria-hidden="true">✦</span></div>
            ${suite ? `<ol class="er-top50-suite">${suite}</ol>` : ''}
          </div>
          ${pied}
        </div>`;
    }

    



    _buildTop50Fenetres() {
      const t = this._payload?.top50;
      if (!t || !Array.isArray(t.lignes) || !t.lignes.length) return '';
      const en = this._lang() === 'en';
      const r = this._payload?.topReglages || null;
      const toi = en ? 'you' : 'toi';
      const fermer = en ? 'Close' : 'Fermer';
      const date = t.calculeLe ? new Date(t.calculeLe) : null;
      const dateTxt = date && !isNaN(date.getTime()) ? date.toLocaleDateString(en ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long' }) : '';
      const egaux = new Set();
      t.lignes.forEach(l => { if (t.lignes.filter(x => x.score === l.score).length > 1) egaux.add(l.rang); });
      const lignes = t.lignes.map(l => `<tr class="${[l.rang <= 3 ? 'm' + l.rang : '', l.moi ? 'est-moi' : ''].filter(Boolean).join(' ')}">
          <td class="rang">${l.rang}${egaux.has(l.rang) ? '<i title=' + JSON.stringify(en ? 'tie' : 'ex æquo') + '>=</i>' : ''}</td>
          <td class="nom" data-toi="${toi}">${escapeHtml(l.nom)}</td>
          <td class="palier">${escapeHtml(this._t(l.palier))}</td>
          <td class="num">${this._top50Nombre(l.nbBadges)}</td>
          <td class="pts num">${this._top50Nombre(l.score)}<small>PTS</small></td>
        </tr>`).join('');
      const tableau = `
        <div class="er-top50-fen" data-top50-fen="tableau" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="er-top50-fen-titre-tableau" data-open="false">
          <div class="er-top50-fen-fond" data-top50-fermer></div>
          <div class="er-top50-fen-panneau">
            <div class="er-top50-fen-tete">
              <div>
                <h3 class="er-top50-fen-titre" id="er-top50-fen-titre-tableau">${en ? 'The <em>top 50</em> fans' : 'Le <em>top 50</em> des fans'}</h3>
                <p class="er-top50-fen-sous">${en ? `Ranking${dateTxt ? ' of ' + escapeHtml(dateTxt) : ''}, recalculated every night from the points of the last 60 days.` : `Classement${dateTxt ? ' du ' + escapeHtml(dateTxt) : ''}, recalculé chaque nuit à partir des points des 60 derniers jours.`}</p>
              </div>
              <button class="er-top50-fen-x" type="button" data-top50-fermer aria-label="${fermer}">${ICON_CLOSE}</button>
            </div>
            ${this._top50LigneMoi(en, 'er-top50-fen-moi')}
            <div class="er-top50-fen-corps">
              <table class="er-top50-tab">
                <thead><tr><th>${en ? 'Rank' : 'Rang'}</th><th>Fan</th><th class="palier">${en ? 'Tier' : 'Palier'}</th><th class="num">Badges</th><th class="num">Points</th></tr></thead>
                <tbody>${lignes}</tbody>
              </table>
              <p class="er-top50-fen-note">${en ? 'The name shown is the one from your profile (first name and initial, or your nickname if you chose it in My preferences). Ties share the same rank.' : 'Le nom affiché est celui de ton profil (prénom et initiale, ou ton pseudo si tu l\'as choisi dans Mes préférences). Les ex æquo partagent le même rang.'}</p>
            </div>
          </div>
        </div>`;
      let lots = '';
      if (r && (r.lots.length || r.accroche)) {
        const cartes = r.lots.map(l => `<div class="er-top50-lotcarte er-top50-lotcarte--${l.metal}">
            <span class="er-top50-lotcarte-rang">${escapeHtml(l.palier)}</span>
            <span class="er-top50-lotcarte-visuel">${l.image ? `<img src="${escapeHtml(l.image)}" alt="" loading="lazy">` : (l.metal === 'or' ? ICON_TOP50_CADEAU : ICON_TOP50_SAC)}</span>
            <p class="er-top50-lotcarte-nom">${escapeHtml(l.titre)}</p>
            ${l.texte ? `<p class="er-top50-lotcarte-txt">${escapeHtml(l.texte)}</p>` : ''}
          </div>`).join('');
        const nb = r.nbPremiers || 10;
        lots = `
        <div class="er-top50-fen er-top50-fen--lots" data-top50-fen="lots" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="er-top50-fen-titre-lots" data-open="false">
          <div class="er-top50-fen-fond" data-top50-fermer></div>
          <div class="er-top50-fen-panneau">
            <div class="er-top50-fen-tete">
              <div>
                <p class="er-top50-kick">${ICON_TROPHY_LARGE}${en ? 'Up for grabs' : 'À gagner'}</p>
                <h3 class="er-top50-fen-titre" id="er-top50-fen-titre-lots">${en ? `The <em>top ${nb}</em> prizes` : `Les lots du <em>top ${nb}</em>`}</h3>
                ${r.lotsIntro ? `<p class="er-top50-fen-sous">${escapeHtml(r.lotsIntro)}</p>` : ''}
              </div>
              <button class="er-top50-fen-x" type="button" data-top50-fermer aria-label="${fermer}">${ICON_CLOSE}</button>
            </div>
            ${cartes ? `<div class="er-top50-lots er-top50-lots--${Math.min(3, r.lots.length)}">${cartes}</div>` : ''}
            ${r.lotsNote ? `<p class="er-top50-lots-note">${escapeHtml(r.lotsNote)}</p>` : ''}
          </div>
        </div>`;
      }
      let reglement = '';
      if (r && r.reglement) {
        reglement = `
        <div class="er-top50-fen" data-top50-fen="reglement" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="er-top50-fen-titre-reglement" data-open="false">
          <div class="er-top50-fen-fond" data-top50-fermer></div>
          <div class="er-top50-fen-panneau">
            <div class="er-top50-fen-tete">
              <div>
                <p class="er-top50-kick">${ICON_TOP50_REGLEMENT}${en ? 'Fan ranking' : 'Classement des fans'}</p>
                <h3 class="er-top50-fen-titre" id="er-top50-fen-titre-reglement">${en ? 'The <em>rules</em>' : 'Le <em>règlement</em>'}</h3>
              </div>
              <button class="er-top50-fen-x" type="button" data-top50-fermer aria-label="${fermer}">${ICON_CLOSE}</button>
            </div>
            <div class="er-top50-fen-corps"><div class="er-top50-reglement">${sanitizeRichText(r.reglement)}</div></div>
          </div>
        </div>`;
      }
      return tableau + lots + reglement;
    }

    _wireTop50() {
      clearInterval(this._top50Timer);
      this._top50Timer = null;
      const brique = this.querySelector('.er-widget--top50');
      if (!brique) return;
      const fenetres = [...this.querySelectorAll('.er-top50-fen')];
      const ouvrir = (nom) => {
        const f = fenetres.find(x => x.dataset.top50Fen === nom);
        if (!f) return;
        this._top50Focus = document.activeElement;
        f.dataset.open = 'true';
        f.setAttribute('aria-hidden', 'false');
        this._lockBodyScroll();
        requestAnimationFrame(() => { f.querySelector('.er-top50-fen-x')?.focus(); });
      };
      const fermer = () => {
        let ouverte = false;
        fenetres.forEach(f => { if (f.dataset.open === 'true') ouverte = true; f.dataset.open = 'false'; f.setAttribute('aria-hidden', 'true'); });
        if (!ouverte) return;
        this._unlockBodyScroll();
        this._top50Focus?.focus?.();
        this._top50Focus = null;
      };
      this.querySelectorAll('[data-top50-fen]:not(.er-top50-fen)').forEach(b => b.addEventListener('click', () => ouvrir(b.dataset.top50Fen)));
      this.querySelectorAll('[data-top50-fermer]').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); fermer(); }));
      

      if (this._top50Esc) document.removeEventListener('keydown', this._top50Esc);
      this._top50Esc = (e) => { if (e.key === 'Escape') fermer(); };
      document.addEventListener('keydown', this._top50Esc);
      

      const chrono = brique.querySelector('.er-top50-chrono');
      if (chrono) {
        const en = this._lang() === 'en';
        this._top50Timer = setInterval(() => {
          if (!chrono.isConnected) { clearInterval(this._top50Timer); this._top50Timer = null; return; }
          chrono.innerHTML = this._top50Chrono(en);
        }, 1000);
      }
    }

    _buildLeaderboardTeaserWidget() {
      return `
        <div class="er-widget er-widget--leaderboard-teaser er-motif-host" data-slot="leaderboard-teaser" role="region" aria-label="Classement à venir">
          <div class="er-leaderboard-icon">${ICON_TROPHY_LARGE}</div>
          <h3 class="er-leaderboard-teaser-title">Classement à venir</h3>
          <p class="er-leaderboard-teaser-text">Le top 50 des fans les plus actifs sera dévoilé au grand départ.</p>
          <div class="er-leaderboard-teaser-date">20 Octobre 2026 · St-Malo</div>
        </div>
      `;
    }

    


    _wireApercu() {
      const volet = this.querySelector('[data-slot="apercu"]');
      if (!volet) return;
      const rej = volet.querySelector('[data-action="rejouer-roue"]');
      if (rej) rej.addEventListener('click', () => {
        volet.setAttribute('data-charge', '');
        this.dispatchEvent(new CustomEvent('er-rejouer-roue', { bubbles: true, composed: true }));
      });
      volet.querySelectorAll('[data-apercu]').forEach(btn => {
        btn.addEventListener('click', () => {
          const cle = btn.getAttribute('data-apercu');
          const on = btn.getAttribute('aria-pressed') === 'true';
          const actifs = new Set(Array.isArray(this._payload?.apercuActif) ? this._payload.apercuActif : []);
          if (on) actifs.delete(cle); else actifs.add(cle);
          btn.setAttribute('aria-pressed', String(!on));
          volet.setAttribute('data-charge', '');
          this.dispatchEvent(new CustomEvent('er-apercu', {
            bubbles: true, composed: true, detail: { cles: [...actifs] }
          }));
        });
      });
    }

    













    _wireRangIdentite() {
      


      const barre = this.querySelector('.er-mobile-topbar');
      const entete = this.querySelector('.er-mobile-id');
      if (barre && entete) {
        if (typeof IntersectionObserver !== 'function') {
          barre.setAttribute('data-identite', 'visible');
        } else {
          const haut = barre.offsetHeight || 64;
          const io = new IntersectionObserver((entrees) => {
            const x = entrees[entrees.length - 1];
            

            const passee = !x.isIntersecting && x.boundingClientRect.top < window.innerHeight / 2;
            barre.setAttribute('data-identite', passee ? 'visible' : 'cachee');
          }, { rootMargin: '-' + haut + 'px 0px 0px 0px' });
          io.observe(entete);
          this._observers.push(io);
        }
      }

      const bloc = this.querySelector('[data-rang-bloc]');
      const btn = bloc && bloc.querySelector('.er-sidebar-rang');
      if (bloc && btn) {
        const survol = !!(window.matchMedia && window.matchMedia('(hover: hover)').matches);
        let epingle = false;
        const poser = (ouvert) => {
          bloc.classList.toggle('est-ouvert', ouvert);
          btn.setAttribute('aria-expanded', String(ouvert));
          if (!ouvert) epingle = false;
        };
        if (survol) {
          btn.addEventListener('mouseenter', () => poser(true));
          bloc.addEventListener('mouseleave', () => { if (!epingle) poser(false); });
        }
        btn.addEventListener('click', () => {
          const ouvert = bloc.classList.contains('est-ouvert');
          if (ouvert && (epingle || !survol)) { poser(false); return; }
          poser(true);
          epingle = true;
        });
        bloc.addEventListener('focusout', (ev) => { if (!bloc.contains(ev.relatedTarget)) poser(false); });
        bloc.addEventListener('keydown', (ev) => {
          if (ev.key === 'Escape' && bloc.classList.contains('est-ouvert')) { poser(false); btn.focus(); }
        });
        this._rangDehorsHandler = (ev) => {
          if (bloc.classList.contains('est-ouvert') && !bloc.contains(ev.target)) poser(false);
        };
        document.addEventListener('click', this._rangDehorsHandler);
        this._fermerRangPop = () => poser(false);
      }

      const sheet = this.querySelector('.er-rang-sheet');
      const ouvrir = this.querySelector('[data-action="ouvrir-rang"]');
      if (!sheet || !ouvrir) return;
      const fermer = (rendreFocus) => {
        if (sheet.dataset.open !== 'true') return;
        sheet.dataset.open = 'false';
        sheet.setAttribute('aria-hidden', 'true');
        this._unlockBodyScroll();
        if (rendreFocus !== false) ouvrir.focus({ preventScroll: true });
      };
      ouvrir.addEventListener('click', () => {
        sheet.dataset.open = 'true';
        sheet.setAttribute('aria-hidden', 'false');
        this._lockBodyScroll();
        const croix = sheet.querySelector('.er-mobile-filter-sheet-close');
        if (croix) croix.focus({ preventScroll: true });
      });
      sheet.querySelectorAll('[data-action="fermer-rang"]').forEach(el => {
        el.addEventListener('click', (ev) => { ev.stopPropagation(); fermer(); });
      });
      this._escRangHandler = (ev) => { if (ev.key === 'Escape') fermer(); };
      document.addEventListener('keydown', this._escRangHandler);
      this._fermerRangSheet = fermer;
    }

    

    _wireFrise() {
      const sec = this.querySelector('[data-section="rangs"]');
      if (!sec) return;

      



      this.querySelectorAll('[data-action="voir-rangs"]').forEach(b => {
        b.addEventListener('click', () => {
          

          if (this._fermerRangPop) this._fermerRangPop();
          if (this._fermerRangSheet) this._fermerRangSheet(false);
          const doux = !(window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches);
          sec.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'center' });
        });
      });
      const note = sec.querySelector('[data-frise-note]');
      if (!note) return;
      const label = this._payload?.stats?.rangLabel || '';
      const ici = rangIndex(label);
      const dire = (i) => {
        const p = RANG_FRISE[i];
        if (!p) return;
        note.innerHTML = `<b>${escapeHtml(p.label)}</b> — ${escapeHtml(p.texte)}` +
          (i === ici ? ' <span class="er-frise-cur">· ton palier actuel</span>' : '');
        this._i18n(note);
      };
      sec.querySelectorAll('[data-frise]').forEach(el => {
        const i = Number(el.getAttribute('data-frise'));
        ['mouseenter', 'focus', 'click'].forEach(ev =>
          el.addEventListener(ev, () => dire(i)));
      });
      sec.addEventListener('mouseleave', () => dire(ici < 0 ? 0 : ici));
      dire(ici < 0 ? 0 : ici);

      


      const defil = sec.querySelector('.er-frise-defil');
      const cible = ici >= 0 ? sec.querySelectorAll('[data-frise]')[ici] : null;
      





      if (defil && cible) {
        const centrer = () => {
          if (defil.scrollWidth <= defil.clientWidth) return;
          defil.scrollLeft = cible.offsetLeft - (defil.clientWidth - cible.offsetWidth) / 2;
        };
        requestAnimationFrame(() => requestAnimationFrame(centrer));
      }
    }

     
    _wireNavLinks() {
       
       
       
      const SECTION = {
        'skipper-jour': '[data-slot="hero"]',
        'skippers':     '[data-slot="skippers-favoris"]',
        'actus':        '[data-slot="news-mix"]',
        'badges':       '[data-section="badges"]',
        'rangs':        '[data-section="rangs"]',
        'stats':        '[data-slot="stats"]'
      };
      const links = this.querySelectorAll('.er-sidebar-nav-link');
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          links.forEach(l => l.classList.remove('er-sidebar-nav-link--active'));
          link.classList.add('er-sidebar-nav-link--active');
          const target = link.dataset.target;
          const el = SECTION[target] ? this.querySelector(SECTION[target]) : null;
          const dest = (target === 'dashboard' || !el) ? (this.querySelector('.er-dashboard') || this) : el;
           
           
           
           
           
          requestAnimationFrame(() => {
            try { dest.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
            catch (e) { dest.scrollIntoView(); }
          });
           
          const sb = this.querySelector('.er-sidebar');
          if (sb && sb.dataset.expanded === 'true') sb.dataset.expanded = 'false';
        });
      });
    }

     
     
    _wireOpenProfileButton() {
      this.querySelectorAll('[data-action="open-profile"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          this._closePrefsModal();
          this._openProfilePrompt();
        });
      });
    }

    _wirePreferencesButton() {
       
       
      this.querySelectorAll('[data-action="go-preferences"]').forEach(btn => {
        btn.addEventListener('click', () => this._openPrefsModal());
      });

    }

     
     
     
     
    _syncLocalFav(skipperId, action) {
      const p = this._payload;
      if (!p || !skipperId) return;
      const sid = String(skipperId);
      const idOf = s => String((s && (s.id || s._id)) || '');
      const favs = Array.isArray(p.favSkippers) ? p.favSkippers : [];
      if (action === 'remove') {
        p.favSkippers = favs.filter(s => idOf(s) !== sid);
        return;
      }
      if (favs.some(s => idOf(s) === sid)) return;                
       
       
      const pools = [p.skipperDuJour].concat(p.recoSkippers || []).concat(p.skipperCatalog || []);
      const found = pools.find(s => s && idOf(s) === sid);
      if (found) p.favSkippers = favs.concat([found]);
    }

    _wireHeroActions() {
      const primary = this.querySelector('.er-widget--hero [data-action="go-skipper"]');
      if (primary) {
        primary.addEventListener('click', () => {
          const skipperId = primary.dataset.skipperId;
          this._navExternal(this._resolveSkipperUrl(skipperId), 'er-go-skipper', { skipperId });
        });
      }
      const follow = this.querySelector('.er-widget--hero [data-action="hero-fav"]');
      if (follow) {
        follow.addEventListener('click', () => {
          const skipperId = follow.dataset.skipperId;
          const currently = follow.dataset.following === 'true';
          const action = currently ? 'remove' : 'add';
          this._syncLocalFav(skipperId, action);
          this.dispatchEvent(new CustomEvent('er-fav-toggle', {
            bubbles: true, composed: true,
            detail: { skipperId, action }
          }));

          const next = !currently;
          follow.dataset.following = String(next);
          follow.setAttribute('aria-pressed', String(next));
          const label = follow.querySelector('.er-hero-suivre-label');
          if (label) label.textContent = next ? 'Suivi' : 'Suivre';
           
          const icone = follow.querySelector('.er-hero-suivre-icone');
          if (icone) icone.innerHTML = next ? ICON_CHECK : ICON_PLUS;
          this._i18n(follow);
        });
      }
    }

    _wireSkipperCards() {
      this.querySelectorAll('.er-skipper-card').forEach(card => {
        const skipperId = card.dataset.skipperId;
        const goSkipper = () => {
          this._navExternal(this._resolveSkipperUrl(skipperId), 'er-go-skipper', { skipperId });
        };
        card.addEventListener('click', goSkipper);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goSkipper();
          }
        });
      });

      this.querySelectorAll('.er-skipper-card-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const skipperId = btn.dataset.skipperId;
          this._syncLocalFav(skipperId, 'remove');
          this.dispatchEvent(new CustomEvent('er-fav-toggle', {
            bubbles: true, composed: true,
            detail: { skipperId, action: 'remove' }
          }));
          const card = btn.closest('.er-skipper-card');
          if (card) {
            card.classList.add('is-removing');
            const t = setTimeout(() => card.remove(), 450);
            this._removeTimers.push(t);
          }
        });
      });

       
       
       
      this.querySelectorAll('.er-skipper-card-vote').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const skipperId = btn.dataset.skipperId;
          if (!skipperId) return;
          const etaitPrefere = this._payload?.monVoteSkipperId === skipperId;
          const action = etaitPrefere ? 'clear' : 'set';
          if (this._payload) this._payload.monVoteSkipperId = etaitPrefere ? null : skipperId;
          this.querySelectorAll('.er-skipper-card-vote').forEach(b => {
            const on = !etaitPrefere && b.dataset.skipperId === skipperId;
            b.classList.toggle('is-on', on);
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
          });
          this.dispatchEvent(new CustomEvent('er-vote-skipper', {
            bubbles: true, composed: true,
            detail: { skipperId, action }
          }));
          





          this._rafraichirCarteVoteSk();
        });
      });
    }

    _wireNavCtas() {
      const fire = (target) => {
        const active = this.querySelector('.er-sidebar-nav-link--active');
        if (active) active.classList.remove('er-sidebar-nav-link--active');
        const next = this.querySelector(`.er-sidebar-nav-link[data-target="${target}"]`);
        if (next) next.classList.add('er-sidebar-nav-link--active');
        const url = target === 'actus' ? ACTUS_PAGE_PATH : target === 'skippers' ? SKIPPERS_PAGE_PATH : '';
        this._navExternal(url, 'er-nav', { target });
      };

      this.querySelectorAll('[data-action="nav-skippers"]').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); fire('skippers'); });
      });
      this.querySelectorAll('[data-action="nav-actus"]').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); fire('actus'); });
      });
       
       
      this.querySelectorAll('[data-action="open-skipper-search"]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this._openPrefsModal();
          setTimeout(() => {
            const input = this.querySelector('[data-prefs="q"]');
            if (input) { input.focus(); }
          }, 80);
        });
      });
    }

    _wireNewsCards() {
       
      this.querySelectorAll('.er-news-card, .er-news2-hit[data-article-id], .er-flash-clickable[data-article-id]').forEach(card => {
        const articleId = card.dataset.articleId;
        const fire = () => {
          


          




          const carteOuverte = card.closest ? card.closest('.er-news2') : null;
          const slugOuvert = carteOuverte ? (carteOuverte.getAttribute('data-slug') || '') : '';
          if (slugOuvert) {
            marquerLuLocal(slugOuvert);
            if (this._lus) this._lus.add(slugOuvert);
            carteOuverte.classList.add('est-lue');
          }
          this._navExternal(this._resolveArticleUrl(articleId), 'er-go-article', { articleId });
        };
        card.addEventListener('click', fire);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fire();
          }
        });
      });
    }

     
     
    _suggestionsCollapsed() {
      try { return localStorage.getItem('erPourToiReplie') === '1'; }
      catch (e) { return false; }
    }

     
     
     
    _wireSuggestionsToggle() {
      const btns = Array.from(this.querySelectorAll('[data-action="toggle-suggestions"]'));
      const box = this.querySelector('.er-widget-suggestions');
      const cockpit = this.querySelector('.er-dashboard');
      if (!btns.length || !box) return;
      const chevron = this.querySelector('.er-suggestions-toggle');
      const apply = (collapsed) => {
        box.dataset.collapsed = String(collapsed);
        if (cockpit) cockpit.dataset.pourToiReplie = String(collapsed);
        if (!chevron) return;
        chevron.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        

        const label = this._t(collapsed ? 'Afficher les suggestions' : 'Replier les suggestions');
        chevron.setAttribute('aria-label', label);
        chevron.setAttribute('title', label);
      };
      apply(this._suggestionsCollapsed());
      btns.forEach(btn => btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const next = box.dataset.collapsed !== 'true';
        apply(next);
        try { localStorage.setItem('erPourToiReplie', next ? '1' : '0'); } catch (err) {   }
      }));
    }

    _wireSuggestions() {
      

      this.querySelectorAll('[data-top5-skipper]').forEach(li => {
        const skipperId = li.dataset.top5Skipper;
        const aller = () => this._navExternal(this._resolveSkipperUrl(skipperId), 'er-go-skipper', { skipperId });
        li.addEventListener('click', aller);
        li.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); aller(); }
        });
      });

      this.querySelectorAll('.er-suggestion-item').forEach(item => {
        const skipperId = item.dataset.skipperId;
        const fire = () => {
          this._navExternal(this._resolveSkipperUrl(skipperId), 'er-go-skipper', { skipperId });
        };
        item.addEventListener('click', fire);
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fire();
          }
        });
      });

      this.querySelectorAll('.er-suggestion-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const skipperId = btn.dataset.skipperId;
          const currently = btn.dataset.fav === 'true';
          const action = currently ? 'remove' : 'add';
          this._syncLocalFav(skipperId, action);
           
          this.dispatchEvent(new CustomEvent('er-fav-toggle', {
            bubbles: true, composed: true,
            detail: { skipperId, action }
          }));
           
          const next = !currently;
          btn.dataset.fav = String(next);
          btn.classList.toggle('is-favorited', next);
          btn.setAttribute('aria-pressed', String(next));
          



          var qui = btn.getAttribute('data-nom') || '';
          var verbe = next ? 'Ne plus suivre' : 'Suivre';
          btn.setAttribute('aria-label', qui ? verbe + ' ' + qui : verbe);
          btn.setAttribute('title', qui ? verbe + ' ' + qui : verbe);
          

          btn.innerHTML = next ? ICON_CHECK : ICON_PLUS;
        });
      });

       
       
       
      const whyBtns = Array.from(this.querySelectorAll('[data-action="reco-why"]'));
      whyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();           
          const ouvert = btn.getAttribute('aria-expanded') === 'true';
          whyBtns.forEach(b => b.setAttribute('aria-expanded', 'false'));
          btn.setAttribute('aria-expanded', ouvert ? 'false' : 'true');
        });
      });
      if (whyBtns.length && !this._whyOutsideHandler) {
        this._whyOutsideHandler = (e) => {
          if (e.target.closest && e.target.closest('[data-action="reco-why"]')) return;
          this.querySelectorAll('[data-action="reco-why"][aria-expanded="true"]')
            .forEach(b => b.setAttribute('aria-expanded', 'false'));
        };
        document.addEventListener('click', this._whyOutsideHandler);
      }

      this._ajusterNomsSuggestions();
    }

    




    _ajusterNomsSuggestions() {
      if (this._roNomsSugg) { this._roNomsSugg.disconnect(); this._roNomsSugg = null; }
      const liste = this.querySelector('.er-suggestions-list');
      if (!liste) return;
      let largeur = -1;
      const caler = () => {
        const noms = Array.from(liste.querySelectorAll('.er-suggestion-nom'));
        if (!noms.length || !liste.clientWidth) return;
        if (Math.abs(liste.clientWidth - largeur) < 0.5) return;
        largeur = liste.clientWidth;
        liste.style.removeProperty('--er-sugg-nom');
        const depart = parseFloat(getComputedStyle(noms[0]).fontSize) || 14;
        let t = depart;
        const deborde = () => noms.some(n => n.scrollWidth > n.clientWidth + 0.5);
        while (t > 12 && deborde()) {
          t -= 0.5;
          liste.style.setProperty('--er-sugg-nom', t + 'px');
        }
      };
      caler();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { largeur = -1; caler(); }).catch(() => {});
      if (typeof ResizeObserver === 'function') {
        let prevu = 0;
        this._roNomsSugg = new ResizeObserver(() => {
          if (prevu) return;
          prevu = requestAnimationFrame(() => { prevu = 0; caler(); });
        });
        this._roNomsSugg.observe(liste);
      }
    }

     
     
     

    _badgeRotation(key) {
       
      let hash = 0;
      const k = String(key || '');
      for (let i = 0; i < k.length; i++) hash = (hash * 31 + k.charCodeAt(i)) | 0;
      const r = ((hash % 13) - 6) / 10;
      return `${r.toFixed(2)}deg`;
    }

    _formatFrDate(iso) {
      if (!iso) return '';
      const d = new Date(iso);
      if (!Number.isFinite(d.getTime())) return '';
      

      const MONTHS = this._lang() === 'en'
        ? ['January','February','March','April','May','June','July','August','September','October','November','December']
        : ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
      return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    }

    _buildBadgesSection() {
      const badges = Array.isArray(this._payload?.badges) ? this._payload.badges : [];
      const totalCount = badges.length;
      const unlockedCount = badges.filter(b => b && b.state === 'unlocked').length;

       
       
       
      const CATEGORIES = [
        { key: 'a-debloquer',   title: 'À ta portée' },
        { key: 'fidelite',      title: 'Fidélité' },
        { key: 'exploration',   title: 'Exploration' },
        { key: 'evenement-sm',  title: 'Événement | Saint-Malo' },
        { key: 'evenement-pap', title: 'Événement | Pointe-à-Pitre' },
        { key: 'habitudes',     title: 'Habitudes' }
      ];

      const byCategory = {};
      CATEGORIES.forEach(c => { byCategory[c.key] = []; });
      badges.forEach(b => {
        if (b && byCategory[b.category]) byCategory[b.category].push(b);
      });

      const categoriesHtml = CATEGORIES.map(cat => {
        const items = byCategory[cat.key];
        if (!items.length) return '';    
        const unlockedInCat = items.filter(b => b.state === 'unlocked').length;
        const tilesHtml = items.map(b => this._renderBadgeTile(b)).join('');
        return `
          <div class="er-badges-category" data-category="${escapeHtml(cat.key)}">
            <div class="er-badges-category-header">
              <h3 class="er-badges-category-title">${escapeHtml(cat.title)}</h3>
              <div class="er-badges-category-count">${unlockedInCat}/${items.length}</div>
            </div>
            <div class="er-badges-category-grid">${tilesHtml}</div>
          </div>
        `;
      }).join('');

      return `
        <section class="er-section-badges" data-section="badges"
                 role="region" aria-labelledby="er-badges-title">
          <div class="er-section-badges-inner">
            <header class="er-section-header">
              <div class="er-section-header-left">
                <h2 class="er-section-title" id="er-badges-title">Mes badges</h2>
                <p class="er-section-sub">Ta collection grandit à chaque visite</p>
                <button class="er-badges-help" type="button" data-action="open-badges-info" aria-haspopup="dialog">
                  <svg class="er-badges-help-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <span>Comment ça marche ?</span>
                </button>
              </div>
              <div class="er-section-header-right">
                <div class="er-section-count">
                  <div class="er-section-count-num">${unlockedCount}</div>
                  <div class="er-section-count-label">/ ${totalCount} débloqués</div>
                </div>
              </div>
            </header>

            <div class="er-badges-filters" role="tablist" aria-label="Filtrer les badges">
              <button class="er-badges-filter" type="button" role="tab" aria-selected="true"  data-filter="all">Tous</button>
              <button class="er-badges-filter" type="button" role="tab" aria-selected="false" data-filter="unlocked">Débloqués</button>
              <button class="er-badges-filter" type="button" role="tab" aria-selected="false" data-filter="locked">À venir</button>
            </div>

            <div class="er-badges-categories" data-active-filter="all">
              ${categoriesHtml}
            </div>

            <div class="er-badges-empty" hidden role="status"></div>
          </div>
        </section>
      `;
    }

    _renderBadgeTile(badge) {
      if (!badge) return '';
      const key = badge.key || '';
      const category = badge.category || '';
      const state = badge.state || 'mystery';
      const title = badge.title || badge.label || '???';

      const iconInner = badgeIconInner(key);
      const rot = this._badgeRotation(key);
      const displayName = (state === 'unlocked' || state === 'action') ? title : '???';
      const nameLen = displayName.length;
      const wrapCls = nameLen >= 20 ? ' er-badge-tile-name--wrap' : '';

      let footerHtml = '';
      let ariaLabel;
      let tone = '';    
      if (state === 'unlocked') {
        const dateStr = this._formatFrDate(badge.unlockedAt);
        const condition = badge.condition || '';
        const achievementHtml = condition
          ? `<div class="er-badge-tile-achievement">${escapeHtml(condition)}</div>`
          : '';
        footerHtml = `
          ${achievementHtml}
          <div class="er-badge-tile-date">${escapeHtml(dateStr || 'Débloqué')}</div>
        `;
        ariaLabel = `Badge ${title}${condition ? ', ' + condition : ''}, débloqué${dateStr ? ' le ' + dateStr : ''}`;
      } else if (state === 'discovered') {
        const cur = badge.progress?.current ?? 0;
        const tgt = badge.progress?.target ?? 1;
        const pct = tgt > 0 ? Math.max(0, Math.min(100, Math.round((cur / tgt) * 100))) : 0;
        const label = badge.progressLabel || `${cur} / ${tgt}`;
        footerHtml = `
          <div class="er-badge-tile-progress">
            <div class="er-badge-tile-progress-bar">
              <div class="er-badge-tile-progress-fill" style="--progress: ${pct}%;"></div>
            </div>
            <div class="er-badge-tile-progress-text">${escapeHtml(label)}</div>
          </div>
        `;
        ariaLabel = `Badge à découvrir, progression ${label}`;
      } else if (state === 'action') {
         
         
         
        const desc = badge.actionHint || badge.condition || '';
        const cta = badge.actionCta || 'Débloquer';
        const muted = badge.actionMuted === true;
        tone = badge.actionTone || '';
        const flagLabel = tone === 'error' ? 'Non validé' : (tone === 'wait' ? 'En vérification' : '');
        const flagHtml = flagLabel
          ? `<div class="er-badge-tile-flag">${tone === 'error' ? ICON_ALERT : ICON_CLOCK}<span>${escapeHtml(flagLabel)}</span></div>`
          : '';
        footerHtml = `
          ${flagHtml}
          <div class="er-badge-tile-action-hint">${escapeHtml(desc)}</div>
          <div class="er-badge-tile-cta${muted ? ' is-soon' : ''}">${escapeHtml(cta)}</div>
        `;
        ariaLabel = `Badge ${title}${flagLabel ? ', ' + flagLabel : ''}, ${desc}`;
      } else {
        const hint = badge.hint || "Continue d'explorer";
        footerHtml = `
          <div class="er-badge-tile-hint">
            <svg class="er-badge-tile-lock" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>${escapeHtml(hint)}</span>
          </div>
        `;
        ariaLabel = `Badge verrouillé, ${hint}`;
      }

      return `
        <button class="er-badge-tile" type="button"
                data-badge-key="${escapeHtml(key)}"
                data-category="${escapeHtml(category)}"
                data-state="${escapeHtml(state)}"
                data-tone="${escapeHtml(tone)}"
                style="--rot: ${rot};"
                aria-label="${escapeHtml(ariaLabel)}">
          <div class="er-badge-tile-icon-wrap">
            <svg class="er-badge-tile-icon" viewBox="0 0 24 24" aria-hidden="true">${iconInner}</svg>
            <div class="er-badge-tile-halo" aria-hidden="true"></div>
          </div>
          <div class="er-badge-tile-name${wrapCls}" data-len="${nameLen}">${escapeHtml(displayName)}</div>
          <div class="er-badge-tile-footer">${footerHtml}</div>
        </button>
      `;
    }

    _buildBadgeModal() {
      return `
        <div class="er-badge-modal" data-open="false" aria-hidden="true"
             role="dialog" aria-modal="true" aria-labelledby="er-badge-modal-title">
          <div class="er-badge-modal-backdrop" data-action="close-badge-modal"></div>
          <div class="er-badge-modal-panel">
            <button class="er-badge-modal-close" type="button"
                    data-action="close-badge-modal" aria-label="Fermer la modale">
              ${ICON_CLOSE}
            </button>
            <div class="er-badge-modal-icon-wrap">
              <svg class="er-badge-modal-icon" viewBox="0 0 24 24" aria-hidden="true"></svg>
              <div class="er-badge-modal-halo" aria-hidden="true"></div>
            </div>
            <h2 class="er-badge-modal-title" id="er-badge-modal-title"></h2>
            <p class="er-badge-modal-date"></p>
            <p class="er-badge-modal-message"></p>
            <div class="er-badge-modal-progress" hidden>
              <div class="er-badge-modal-progress-bar"><span class="er-badge-modal-progress-fill"></span></div>
              <div class="er-badge-modal-progress-text"></div>
            </div>
          </div>
        </div>
      `;
    }

     
     
     
    _buildBadgesInfoModal() {
      const heap = [
        { k: 'cap-finisterre', c: 'is-grey', s: '--r:-17deg;--x:-64px;' },
        { k: 'noctambule',     c: 'is-grey', s: '--r:13deg;--x:60px;' },
        { k: 'explorateur',    c: 'is-grey', s: '--r:-9deg;--x:-34px;' },
        { k: 'collectionneur', c: 'is-grey', s: '--r:10deg;--x:32px;' },
        { k: 'premier-pas',    c: 'is-live', s: '--r:0deg;--x:0;' }
      ].map(b => `<span class="er-binfo-b ${b.c}" style="${b.s}"><svg viewBox="0 0 24 24">${badgeIconInner(b.k)}</svg></span>`).join('');
      return `
        <div class="er-badges-info" data-open="false" aria-hidden="true"
             role="dialog" aria-modal="true" aria-labelledby="er-binfo-title">
          <div class="er-badges-info-backdrop" data-action="close-badges-info"></div>
          <div class="er-badges-info-panel">
            <button class="er-badges-info-close" type="button" data-action="close-badges-info" aria-label="Fermer">${ICON_CLOSE}</button>
            <div class="er-binfo-heap" aria-hidden="true">${heap}</div>
            <div class="er-binfo-kicker">Le jeu des badges</div>
            <h2 class="er-binfo-title" id="er-binfo-title">Collectionne les badges de la course</h2>
            <div class="er-binfo-rule"></div>
            <p class="er-binfo-text">Les badges accompagnent et récompensent ta navigation tout au long de la Route du Rhum. Explore le site, suis tes skippers, ne manque pas les moments clés de la course, et débloque-les au fil de l'aventure.</p>
            <p class="er-binfo-tease">Les plus assidus iront le plus loin dans la collection… et qui sait ce que la ligne d'arrivée réserve aux plus grands fans.</p>
            <div class="er-binfo-fams">
              <span class="er-binfo-fam">Fidélité</span>
              <span class="er-binfo-fam">Exploration</span>
              <span class="er-binfo-fam">Événements</span>
              <span class="er-binfo-fam">Habitudes</span>
            </div>
            <button class="er-binfo-cta" type="button" data-action="close-badges-info">C'est parti</button>
          </div>
        </div>
      `;
    }

    





















    _buildMonteModal() {
      const ICON_DIRECT = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/></svg>';
      const ICON_LUNE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
      const gestes = [
        [ICON_CLOCK,        'Revenir souvent', 'Chaque nouvelle journée compte, encore plus au village et en course.'],
        [ICON_ACTUS,        'Lire les actus', 'Chaque article ne compte qu\'une fois, alors ce sont les nouveaux qui te font avancer.'],
        [ICON_SKIPPERS,     'Explorer les fiches skippers', 'Une fiche jamais ouverte, c\'est un pas de plus.'],
        [ICON_PLUS,         'Suivre des skippers', 'Plus tu en accompagnes, plus ton palier s\'en souvient.'],
        [ICON_HEART,        'Choisir ton préféré', 'Un seul par compte, et les plus hauts paliers le remarquent.'],
        [ICON_SKIPPER_JOUR, 'Jouer aux animations', 'La roue, les pronostics et les votes ne durent qu\'un temps, et il y a souvent des cadeaux à la clé.'],
        [ICON_BADGES,       'Débloquer des badges', 'Ils racontent ton parcours, et ton palier les compte.'],
        [ICON_DIRECT,       'Suivre la course en direct', 'Chaque jour passé à suivre les bateaux rapproche du sommet.']
      ].map(g => `<li><span class="er-monte-ico" aria-hidden="true">${g[0]}</span><span><span class="er-monte-geste-titre">${g[1]}</span><span class="er-monte-geste-texte">${g[2]}</span></span></li>`).join('');
      return `
        <div class="er-monte" data-open="false" aria-hidden="true"
             role="dialog" aria-modal="true" aria-labelledby="er-monte-title">
          <div class="er-monte-backdrop" data-action="close-monte"></div>
          <div class="er-monte-panel">
            <button class="er-monte-close" type="button" data-action="close-monte" aria-label="Fermer">${ICON_CLOSE}</button>
            <div class="er-monte-kicker">Mon rang</div>
            <h2 class="er-monte-title" id="er-monte-title">Comment on monte</h2>
            <div class="er-monte-rule"></div>
            <p class="er-monte-text">Ton palier suit ce que tu fais sur le site et monte tout seul, à condition de toucher un peu à tout.</p>
            <ul class="er-monte-liste">${gestes}</ul>
            <p class="er-monte-doux">${ICON_SPARK}<span>Aucun geste ne suffit à lui seul. C'est en touchant à tout, régulièrement, qu'on monte.</span></p>
            <div class="er-monte-nuit">
              <div class="er-monte-nuit-corps">
                <div class="er-monte-nuit-kick">${ICON_LUNE}<span>Chaque nuit</span></div>
                <p class="er-monte-nuit-titre">On refait les comptes</p>
                <p class="er-monte-nuit-texte">Tu ne grimperas pas tous les jours, et c'est normal. Reviens demain pour voir si ce que tu as fait aujourd'hui t'a fait monter.</p>
              </div>
              <img class="er-monte-nuit-tymal" src="${escapeHtml(TYMAL.assis)}" alt="" loading="lazy" decoding="async">
            </div>
            <button class="er-monte-cta" type="button" data-action="close-monte">Compris</button>
          </div>
        </div>
      `;
    }

    

    _openMonte() {
      const modal = this.querySelector('.er-monte');
      if (!modal) return;
      this._lastFocused = document.activeElement;
      modal.dataset.open = 'true';
      modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => { modal.querySelector('.er-monte-close')?.focus(); });
      if (!this._escMonteHandler) {
        this._escMonteHandler = (e) => {
          if (e.key === 'Escape' && modal.dataset.open === 'true') this._closeMonte();
        };
        document.addEventListener('keydown', this._escMonteHandler);
      }
    }

    _closeMonte() {
      const modal = this.querySelector('.er-monte');
      if (!modal) return;
      modal.dataset.open = 'false';
      modal.setAttribute('aria-hidden', 'true');
      this._unlockBodyScroll();
      if (this._escMonteHandler) {
        document.removeEventListener('keydown', this._escMonteHandler);
        this._escMonteHandler = null;
      }
      this._lastFocused?.focus?.();
      this._lastFocused = null;
    }

    _wireMonte() {
      this.querySelectorAll('[data-action="open-monte"]').forEach(b => {
        b.addEventListener('click', () => this._openMonte());
      });
      this.querySelectorAll('[data-action="close-monte"]').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); this._closeMonte(); });
      });
    }

     
    _attachBadgeListeners() {
       
       
       
      const tiles = this.querySelectorAll(
        '.er-badge-tile:not([data-state="action"]), .er-badge-tile-mini[data-badge-key]'
      );
      tiles.forEach(tile => {
        const handler = () => this._openBadgeModal(tile.dataset.badgeKey);
        tile.addEventListener('click', handler);
        const keyHandler = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } };
        tile.addEventListener('keydown', keyHandler);
        this._badgeTileHandlers.push({ tile, handler });
        this._badgeTileHandlers.push({ tile, handler: keyHandler, evt: 'keydown' });
      });
       
       
       
      this.querySelectorAll('.er-badge-tile[data-state="action"]').forEach(tile => {
        const key = tile.dataset.badgeKey;
        const handler = () => {
          if (key === 'profil-complet') this._openProfilePrompt();
          else if (key === 'instagram') this._openInstaClaim();
          else if (key === 'newsletter') this.dispatchEvent(new CustomEvent('er-newsletter', { bubbles: true, composed: true }));
        };
        tile.addEventListener('click', handler);
        const keyHandler = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } };
        tile.addEventListener('keydown', keyHandler);
        this._badgeTileHandlers.push({ tile, handler });
        this._badgeTileHandlers.push({ tile, handler: keyHandler, evt: 'keydown' });
      });
       
      const moreBtn = this.querySelector('.er-badges-mini-more[data-action="scroll-badges"]');
      if (moreBtn) {
        const h = () => this._scrollToDashSection('[data-section="badges"]');
        moreBtn.addEventListener('click', h);
        this._badgeTileHandlers.push({ tile: moreBtn, handler: h });
      }
    }

     
     
    _scrollToDashSection(sel) {
      const el = sel ? this.querySelector(sel) : null;
      const dest = el || this.querySelector('.er-dashboard') || this;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => {
        try { dest.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
        catch (e) { dest.scrollIntoView(); }
      });
    }

    _attachBadgesFilterListeners() {
      const buttons = this.querySelectorAll('.er-badges-filter');
      buttons.forEach(btn => {
        const handler = () => {
          const filter = btn.dataset.filter;
          buttons.forEach(b => b.setAttribute('aria-selected', b === btn ? 'true' : 'false'));
          this._applyBadgesFilter(filter);
        };
        btn.addEventListener('click', handler);
        this._badgesFilterHandlers.push({ btn, handler });
      });
    }

    _applyBadgesFilter(filter) {
       
       
      const tiles = this.querySelectorAll('.er-badges-categories .er-badge-tile');
      let visibleCount = 0;
      tiles.forEach(tile => {
        const state = tile.dataset.state;
        let show = true;
        if (filter === 'unlocked')    show = state === 'unlocked';
        else if (filter === 'locked') show = state !== 'unlocked';
        tile.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      this.querySelectorAll('.er-badges-category').forEach(cat => {
        const hasVisible = Array.from(cat.querySelectorAll('.er-badge-tile'))
          .some(t => t.style.display !== 'none');
        cat.style.display = hasVisible ? '' : 'none';
      });

      const container = this.querySelector('.er-badges-categories');
      if (container) container.dataset.activeFilter = filter;

      this._toggleBadgesEmpty(visibleCount === 0, filter);
    }

    _toggleBadgesEmpty(isEmpty, filter) {
      const empty = this.querySelector('.er-badges-empty');
      if (!empty) return;
      if (!isEmpty) { empty.hidden = true; empty.innerHTML = ''; return; }
      const MESSAGES = {
        all: `
          <div class="er-empty-icon" aria-hidden="true">🏆</div>
          <p class="er-empty-title">Ton aventure commence</p>
          <p class="er-empty-text">Navigue, suis des skippers, lis des articles, et débloque tes premiers badges.</p>
        `,
        unlocked: `
          <div class="er-empty-icon" aria-hidden="true">🔒</div>
          <p class="er-empty-title">Aucun badge débloqué pour l'instant</p>
          <p class="er-empty-text">Explore le site, chaque action compte.</p>
        `,
        locked: `
          <div class="er-empty-icon" aria-hidden="true">🎉</div>
          <p class="er-empty-title">Tu as débloqué tous les badges !</p>
          <p class="er-empty-text">Tu es un véritable passionné de la Route du Rhum.</p>
        `
      };
      empty.innerHTML = MESSAGES[filter] || MESSAGES.all;
      this._i18n(empty);
      empty.hidden = false;
    }

     
     
     
     
     
    _openBadgeModal(key) {
      const badge = (this._payload?.badges || []).find(b => b.key === key);
      if (!badge) return;
      const modal = this.querySelector('.er-badge-modal');
      if (!modal) return;

      const state = badge.state || 'mystery';
      const isUnlocked = state === 'unlocked';
       
       
       
      const enClair = isUnlocked || state === 'action';

      const iconEl = modal.querySelector('.er-badge-modal-icon');
       
      iconEl.innerHTML = badgeIconInner(key, true);
      iconEl.setAttribute('data-category', badge.category || '');

      const title = enClair ? (badge.title || badge.label || '') : '???';
      modal.querySelector('.er-badge-modal-title').textContent = title;

      const dateStr = isUnlocked ? this._formatFrDate(badge.unlockedAt) : '';
      modal.querySelector('.er-badge-modal-date').textContent = dateStr ? `Débloqué le ${dateStr}` : '';

       
       
       
       
       
      const message = isUnlocked ? (badge.message || '')
                    : (state === 'action' ? (badge.condition || '') : '');
      modal.querySelector('.er-badge-modal-message').textContent = message;

      const prog = modal.querySelector('.er-badge-modal-progress');
      if (prog) {
        const cur = badge.progress?.current ?? 0;
        const tgt = badge.progress?.target ?? 0;
        const showProg = !isUnlocked && tgt > 1;
        prog.hidden = !showProg;
        if (showProg) {
          const p = Math.max(0, Math.min(100, Math.round((cur / tgt) * 100)));
          prog.querySelector('.er-badge-modal-progress-fill').style.width = p + '%';
          prog.querySelector('.er-badge-modal-progress-text').textContent = badge.progressLabel || `${cur} / ${tgt}`;
        }
      }

      


      this._i18n(modal);

      const panel = modal.querySelector('.er-badge-modal-panel');
      panel.setAttribute('data-category', badge.category || '');
      panel.setAttribute('data-state', state);

      this._lastFocused = document.activeElement;
      modal.dataset.open = 'true';
      modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => {
        modal.querySelector('.er-badge-modal-close')?.focus();
      });

      if (!this._escBadgeModalHandler) {
        this._escBadgeModalHandler = (e) => {
          if (e.key === 'Escape' && modal.dataset.open === 'true') this._closeBadgeModal();
        };
        document.addEventListener('keydown', this._escBadgeModalHandler);
      }
    }

    _closeBadgeModal() {
      const modal = this.querySelector('.er-badge-modal');
      if (!modal) return;
      modal.dataset.open = 'false';
      modal.setAttribute('aria-hidden', 'true');
      this._unlockBodyScroll();
      if (this._escBadgeModalHandler) {
        document.removeEventListener('keydown', this._escBadgeModalHandler);
        this._escBadgeModalHandler = null;
      }
      this._lastFocused?.focus?.();
      this._lastFocused = null;
    }

    _wireBadgeModal() {
      this.querySelectorAll('[data-action="close-badge-modal"]').forEach(el => {
        const handler = (e) => { e.stopPropagation(); this._closeBadgeModal(); };
        el.addEventListener('click', handler);
         
         
      });
    }

     
     
    _openBadgesInfo() {
      const modal = this.querySelector('.er-badges-info');
      if (!modal) return;
      this._lastFocused = document.activeElement;
      modal.dataset.open = 'true';
      modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => { modal.querySelector('.er-badges-info-close')?.focus(); });
      if (!this._escBadgesInfoHandler) {
        this._escBadgesInfoHandler = (e) => {
          if (e.key === 'Escape' && modal.dataset.open === 'true') this._closeBadgesInfo();
        };
        document.addEventListener('keydown', this._escBadgesInfoHandler);
      }
    }

    _closeBadgesInfo() {
      const modal = this.querySelector('.er-badges-info');
      if (!modal) return;
      modal.dataset.open = 'false';
      modal.setAttribute('aria-hidden', 'true');
      this._unlockBodyScroll();
      if (this._escBadgesInfoHandler) {
        document.removeEventListener('keydown', this._escBadgesInfoHandler);
        this._escBadgesInfoHandler = null;
      }
      this._lastFocused?.focus?.();
      this._lastFocused = null;
    }

    _wireBadgesInfo() {
      const openBtn = this.querySelector('[data-action="open-badges-info"]');
      if (openBtn) openBtn.addEventListener('click', () => this._openBadgesInfo());
      this.querySelectorAll('[data-action="close-badges-info"]').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); this._closeBadgesInfo(); });
      });
    }

     
     
     
    _buildPick(field, options, placeholder, labelledBy, attr) {
      const liste = Array.isArray(options) ? options.filter(o => o && o.v !== undefined) : [];
      if (!liste.length) {
         
         
        const nomVide = attr || 'data-profile';
        return `
          <div class="er-pick er-pick--vide" data-pick="${escapeHtml(field)}">
            <input type="hidden" data-pick-input ${escapeHtml(nomVide)}="${escapeHtml(field)}" value="">
            <button class="er-pick-btn" type="button" disabled aria-disabled="true"
                    aria-labelledby="${escapeHtml(labelledBy || '')}">
              <span class="er-pick-val" data-pick-val data-empty="true">Aucun choix disponible</span>
            </button>
          </div>
        `;
      }
      








      












      const opts = liste.map(o =>
        `<button class="er-pick-opt${o.img ? ' er-pick-opt--img' : ''}${o.sub ? ' er-pick-opt--riche' : ''}"`
        + ` type="button" role="option" aria-selected="false" data-val="${escapeHtml(o.v)}" data-nom="${escapeHtml(o.l)}"`
        + (o.col ? ` style="--er-opt-col: ${escapeHtml(o.col)}"` : '') + '>'
        + (o.img ? `<img class="er-pick-opt-img" src="${escapeHtml(o.img)}" alt="" loading="lazy" decoding="async">` : '')
        + `<span class="er-pick-opt-corps"><span class="er-pick-opt-txt">${escapeHtml(o.l)}</span>`
        + (o.sub ? `<span class="er-pick-opt-sub">${escapeHtml(o.sub)}</span>` : '')
        + `</span>`
        + (o.meta ? `<span class="er-pick-opt-meta">${escapeHtml(o.meta)}</span>` : '')
        + `</button>`
      ).join('');
      const nom = attr || 'data-profile';

      














      const AVEC_RECHERCHE = liste.length > 12;
      const corpsListe = AVEC_RECHERCHE
        ? `<div class="er-pick-chercher">
             <input type="text" class="er-pick-recherche" data-pick-recherche
                    autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                    aria-label="Filtrer la liste" placeholder="Taper un nom…">
           </div>
           <div class="er-pick-opts" role="listbox">${opts}</div>
           <p class="er-pick-vide" data-pick-vide hidden>Aucun nom ne correspond.</p>`
        : `<div class="er-pick-opts" role="listbox">${opts}</div>`;

      return `
        <div class="er-pick${AVEC_RECHERCHE ? ' er-pick--cherchable' : ''}" data-pick="${escapeHtml(field)}">
          <input type="hidden" data-pick-input ${escapeHtml(nom)}="${escapeHtml(field)}" value="">
          <button class="er-pick-btn" type="button" data-pick-btn
                  aria-haspopup="listbox" aria-expanded="false" aria-labelledby="${escapeHtml(labelledBy || '')}">
            <span class="er-pick-val" data-pick-val data-empty="true" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(placeholder)}</span>
            ${ICON_CHEVRON}
          </button>
          <div class="er-pick-list" data-pick-list hidden>${corpsListe}</div>
        </div>
      `;
    }

     
     
    _buildDatePick(field, labelledBy) {
      const now = new Date().getFullYear();
      const years = [];
      for (let y = now; y >= now - 110; y--) years.push({ v: String(y), l: String(y) });
      const months = MOIS_FR.map((m, i) => ({ v: String(i), l: m }));
       
       
       
      return `
        <div class="er-datepick" data-datepick="${escapeHtml(field)}">
          <input type="hidden" data-profile="${escapeHtml(field)}" value="">
          <div class="er-datepick-field">
            <input class="er-datepick-text" type="text" data-date-text
                   inputmode="numeric" autocomplete="bday" maxlength="10" spellcheck="false"
                   placeholder="JJ/MM/AAAA" aria-labelledby="${escapeHtml(labelledBy || '')}"
                   aria-describedby="er-date-aide">
            <button class="er-datepick-open" type="button" data-date-btn
                    aria-haspopup="dialog" aria-expanded="false" aria-label="Ouvrir le calendrier">
              ${ICON_CAL}
            </button>
          </div>
          <p class="er-datepick-aide" id="er-date-aide" data-date-aide>Tape ta date, par exemple 08/01/1997, ou ouvre le calendrier.</p>
          <div class="er-datepick-panel" data-date-panel hidden role="dialog" aria-label="Choisir ta date de naissance">
            <div class="er-datepick-head">
              ${this._buildPickInline('year', years, 'Année')}
              ${this._buildPickInline('month', months, 'Mois')}
            </div>
            <div class="er-datepick-week" aria-hidden="true">${JOURS_FR.map(d => `<span>${d}</span>`).join('')}</div>
            <div class="er-datepick-grid" data-date-grid role="grid"></div>
            <div class="er-datepick-foot">
              <button class="er-datepick-clear" type="button" data-date-clear>Effacer</button>
            </div>
          </div>
        </div>
      `;
    }

     
     
    _buildPickInline(role, options, placeholder) {
      const opts = options.map(o =>
        `<button class="er-pick-opt" type="button" role="option" aria-selected="false" data-val="${escapeHtml(o.v)}">${escapeHtml(o.l)}</button>`
      ).join('');
      return `
        <div class="er-pick er-pick--inline" data-pick-role="${escapeHtml(role)}">
          <button class="er-pick-btn" type="button" data-pick-btn aria-haspopup="listbox" aria-expanded="false">
            <span class="er-pick-val" data-pick-val data-empty="true" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(placeholder)}</span>
            ${ICON_CHEVRON}
          </button>
          <div class="er-pick-list" data-pick-list role="listbox" hidden>${opts}</div>
        </div>
      `;
    }

     
     
     
     
    _buildVillageSurvey() {
      const chips = (name, opts) => opts.map(o =>
        `<button class="er-vil-chip" type="button" data-vil="${escapeHtml(name)}" data-val="${escapeHtml(o.v)}" aria-pressed="false">${o.ic || ''}<span>${escapeHtml(o.l)}</span></button>`
      ).join('');
       
      const tymalVelo = TYMAL.velo
        ? `<img class="er-vil-tymal" src="${escapeHtml(TYMAL.velo)}" alt="" loading="lazy" decoding="async">` : '';
      return `
        <div class="er-vil" data-village>
          <div class="er-vil-head">
            <span class="er-vil-kicker">Le village de Saint-Malo</span>
            <p class="er-vil-intro">Deux questions rapides, pour dimensionner l'accueil du public.</p>
          </div>
          <div class="er-vil-q">
            <span class="er-vil-label">Comptes-tu venir au village ?</span>
            <div class="er-vil-chips">${chips('venue', VILLAGE_VENUE_OPTIONS)}</div>
          </div>
          <div class="er-vil-q" data-vil-transport hidden>
            <span class="er-vil-label">Comment comptes-tu venir ?</span>
            <div class="er-vil-chips">${chips('transport', VILLAGE_TRANSPORT_OPTIONS)}</div>
            <input type="text" class="er-profile-input er-vil-autre" data-vil-autre maxlength="80"
                   placeholder="Précise ton moyen de transport" aria-label="Précise ton moyen de transport" hidden>
            <!-- Après l'argumentaire : on dit ce qu'on a coché à la place, sinon
                 la réponse change sous les yeux de la personne sans explication. -->
            <p class="er-vil-note" data-vil-note role="status" hidden>On a coché le train pour ne pas te laisser sans réponse. Change pour le covoiturage, le bus ou autre chose si ça te va mieux.</p>
          </div>
          <div class="er-vil-nudge" data-vil-nudge hidden>
            ${tymalVelo || `<div class="er-vil-nudge-ico" aria-hidden="true">${ICON_LEAF}</div>`}
            <div class="er-vil-nudge-body">
              <strong class="er-vil-nudge-title">Et si tu laissais la voiture ?</strong>
              <p class="er-vil-nudge-text">Le stationnement à Saint-Malo est le point noir du week-end de départ, et les trajets des visiteurs pèsent le plus lourd dans l'empreinte carbone de la course. Le train et le covoiturage évitent les bouchons à l'entrée de la ville et la chasse à la place.</p>
              <button class="er-vil-nudge-more" type="button" data-vil-more>
                <span>En savoir plus</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"/></svg>
              </button>
            </div>
          </div>
        </div>
        ${this._buildPortraitSurvey()}
      `;
    }

     
     
     
     
    _buildPortraitSurvey() {
      const chips = (name, opts, multi) => opts.map(o =>
        `<button class="er-vil-chip${multi ? ' er-vil-chip--multi' : ''}" type="button" ` +
        `data-vil${multi ? '-multi' : ''}="${escapeHtml(name)}" data-val="${escapeHtml(o.v)}" ` +
        `aria-pressed="false">${o.ic || ''}<span>${escapeHtml(o.l)}</span></button>`
      ).join('');
      return `
        <div class="er-vil er-vil--portrait" data-portrait>
          <div class="er-vil-head">
            <span class="er-vil-kicker">Mieux te connaître</span>
            <p class="er-vil-intro">Quatre questions à un clic. Elles comptent pour ton badge Profil complet.</p>
          </div>
          <div class="er-vil-q">
            <span class="er-vil-label">Et toi, tu navigues ?</span>
            <div class="er-vil-chips">${chips('voile', VOILE_OPTIONS)}</div>
          </div>
          <div class="er-vil-q">
            <span class="er-vil-label">Tu suis d'autres courses au large ?</span>
            <div class="er-vil-chips">${chips('suivi', COURSES_OPTIONS)}</div>
          </div>
          <div class="er-vil-q">
            <span class="er-vil-label">Comment as-tu connu la Route du Rhum ?</span>
            <div class="er-vil-chips">${chips('canal', CANAL_OPTIONS)}</div>
          </div>
          <div class="er-vil-q">
            <span class="er-vil-label">Tu habites…</span>
            <div class="er-vil-chips">${chips('residence', RESIDENCE_OPTIONS)}</div>
            <input type="text" class="er-profile-input er-vil-autre" data-vil-pays maxlength="40"
                   placeholder="Ton pays de résidence" aria-label="Ton pays de résidence" hidden>
          </div>
        </div>
      `;
    }

     
     
    _buildVillageMobility() {
      return `
        <div class="er-vilmob" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="er-vilmob-title">
          <div class="er-vilmob-backdrop" data-action="close-vilmob"></div>
          <div class="er-vilmob-panel">
            <button class="er-vilmob-close" type="button" data-action="close-vilmob" aria-label="Fermer">${ICON_CLOSE}</button>
            ${TYMAL.train ? `<img class="er-vilmob-tymal" src="${escapeHtml(TYMAL.train)}" alt="" loading="lazy" decoding="async">` : ''}
            <!-- Le défilement vit sur ce conteneur INTÉRIEUR, pas sur le panneau :
                 un panneau qui défile rogne tout ce qui dépasse de lui, donc la
                 mascotte posée en débord. En descendant d'un cran, elle peut
                 sortir du cadre sans qu'on renonce au défilement. -->
            <div class="er-vilmob-scroll">
            <div class="er-vilmob-eyebrow">Venir au village</div>
            <h2 class="er-vilmob-title" id="er-vilmob-title">Le train et le covoiturage changent le week-end</h2>
            <div class="er-vilmob-body">
              <p>Le départ de la Route du Rhum rassemble des centaines de milliers de visiteurs sur quelques jours, dans une ville qui n'est pas dimensionnée pour ça. Les trajets du public représentent la plus grosse part de l'empreinte carbone de l'événement, très loin devant l'organisation elle-même.</p>
              <ul class="er-vilmob-list">
                <li><strong>Tu évites la place de parking.</strong> C'est le vrai sujet du week-end de départ : les abords du village saturent avant même l'ouverture.</li>
                <li><strong>Tu évites les bouchons.</strong> L'entrée dans Saint-Malo se fait au compte-gouttes aux heures de pointe.</li>
                <li><strong>Tu partages les frais.</strong> À plusieurs dans une voiture ou en train réservé tôt, le trajet coûte souvent moins cher que seul au volant.</li>
                <li><strong>Tu laisses la ville respirer.</strong> Moins de voitures, c'est plus de place pour les habitants et pour ceux qui n'ont pas le choix.</li>
              </ul>
              <!-- ⚠️ À COMPLÉTER quand l'offre sera confirmée par l'organisation :
                   dessertes ferroviaires renforcées, navettes, partenaires de
                   covoiturage, tarifs. Ne rien promettre ici tant que ce n'est
                   pas acté : une offre annoncée puis absente le jour J se
                   retourne contre la course. -->
            </div>
            <!-- Le bouton n'engage PAS sur un mode précis. Ce qu'on cherche à
                 mesurer, c'est que l'argumentaire a fait rouvrir la question de
                 la voiture ; le mode finalement retenu se lit ensuite dans la
                 réponse elle-même. Le train est simplement pré-coché pour que
                 la réponse ne reste pas vide, et reste modifiable. -->
            <div class="er-vilmob-foot">
              <button class="er-vilmob-choice er-vilmob-choice--go" type="button" data-vil-convert>Merci, je vais regarder pour venir autrement</button>
              <button class="er-vilmob-choice er-vilmob-choice--car" type="button" data-action="close-vilmob">Je viens en voiture</button>
            </div>
            </div>
          </div>
        </div>
      `;
    }

    _buildProfilePrompt() {
      return `
        <div class="er-profile" data-open="false" aria-hidden="true"
             role="dialog" aria-modal="true" aria-labelledby="er-profile-title">
          <div class="er-profile-backdrop" data-action="close-profile"></div>
          <div class="er-profile-panel">
            <button class="er-profile-close" type="button" data-action="close-profile" aria-label="Fermer">${ICON_CLOSE}</button>
            <div class="er-profile-eyebrow">Ton profil</div>
            <h2 class="er-profile-title" id="er-profile-title">Fais-nous mieux te connaître</h2>
            <p class="er-profile-sub">Renseigne tes infos pour débloquer le badge <strong>Profil complet</strong>, et nous aider à mieux te connaître.</p>
            <div class="er-profile-prog" data-profile-prog data-complete="false" role="group" aria-label="Progression de ton profil">
              <div class="er-profile-prog-line">
                <div class="er-profile-prog-track" role="progressbar" aria-valuemin="0" aria-valuemax="13" aria-valuenow="0" aria-label="Infos renseignées">
                  <span class="er-profile-prog-fill" data-profile-prog-fill></span>
                </div>
                <span class="er-profile-prog-medal" data-profile-prog-medal aria-hidden="true">
                  <svg viewBox="0 0 24 24">${badgeIconInner('profil-complet')}</svg>
                </span>
              </div>
              <p class="er-profile-prog-cap"><span data-profile-prog-count>0</span>/<span data-profile-prog-total>13</span> · <span data-profile-prog-msg>remplis-les pour débloquer ton badge</span></p>
            </div>
            <!-- Le ton compte autant que le fond : on explique à quoi servent
                 les réponses, légèrement, sans dresser un tribunal de la donnée
                 qui inquiéterait plus qu'il ne rassure (retour client). -->
            <p class="er-profile-conf">Ces infos nous aident à mieux connaître le public de la course et à améliorer
              ce qu'on te propose. Elles nourrissent nos statistiques en grandes tendances, jamais nominatives.</p>
            <div class="er-profile-fields">
              <label class="er-profile-field">
                <span class="er-profile-label">Prénom</span>
                <!-- ⚠️ LES EXEMPLES SONT GENERIQUES, JAMAIS DES NOMS REELS. Le champ Nom
                     portait le patronyme d une personne de l equipe, affiche tel quel a
                     chaque visiteur qui ouvrait son profil. -->
                <input type="text" data-profile="prenom" maxlength="40" autocomplete="given-name" placeholder="Ex. Camille" class="er-profile-input">
              </label>
              <label class="er-profile-field">
                <span class="er-profile-label">Nom</span>
                <input type="text" data-profile="nom" maxlength="60" autocomplete="family-name" placeholder="Ex. Dupont" class="er-profile-input">
              </label>
              <label class="er-profile-field er-profile-field--wide">
                <span class="er-profile-label">Pseudo</span>
                <input type="text" data-profile="pseudo" maxlength="40" autocomplete="off" placeholder="Ton nom de fan" class="er-profile-input">
              </label>
              <!-- L'aperçu se met à jour à la frappe : montrer le résultat
                   exact vaut mieux qu'énoncer une règle. UN seul choix ici,
                   pseudo ou prénom ; le retrait des classements vit dans les
                   préférences, pas dans ce formulaire (retour client : ne pas
                   rendre ça compliqué). -->
              <div class="er-profile-field er-profile-field--wide er-ident">
                <p class="er-ident-line">Sur le mur des fans et les classements, tu apparaîtras sous
                  <strong data-ident-preview>ton prénom</strong>.</p>
                <label class="er-ident-check">
                  <input type="checkbox" data-profile="pseudoPrefere">
                  <span>Utiliser mon pseudo plutôt que mon prénom</span>
                </label>
              </div>
              <div class="er-profile-field">
                <span class="er-profile-label" id="er-lbl-civilite">Civilité</span>
                ${this._buildPick('civilite', CIVILITE_OPTIONS, 'À préciser', 'er-lbl-civilite')}
              </div>
              <label class="er-profile-field">
                <span class="er-profile-label">Code postal</span>
                <input type="text" data-profile="codePostal" maxlength="10" inputmode="numeric" autocomplete="postal-code" placeholder="Ex. 35400" class="er-profile-input">
              </label>
              <label class="er-profile-field">
                <span class="er-profile-label">Nationalité</span>
                <input type="text" data-profile="nationalite" maxlength="60" autocomplete="off" placeholder="Ex. Française" class="er-profile-input">
              </label>
              <label class="er-profile-field">
                <span class="er-profile-label">Téléphone</span>
                <input type="tel" data-profile="telephone" maxlength="30" inputmode="tel" autocomplete="tel" placeholder="Ex. 06 12 34 56 78" class="er-profile-input">
                <span class="er-profile-err" data-profile-err="telephone" role="alert" hidden>Numéro invalide, vérifie ta saisie.</span>
              </label>
              <!-- Le calendrier prend toute la largeur : à moitié de rangée ses
                   cases tombaient à 30 px, trop serrées pour viser un jour. -->
              <div class="er-profile-field er-profile-field--wide">
                <span class="er-profile-label" id="er-lbl-naissance">Date de naissance</span>
                ${this._buildDatePick('dateNaissance', 'er-lbl-naissance')}
              </div>
            </div>
            ${this._buildVillageSurvey()}
            <button class="er-profile-save" type="button" data-action="save-profile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Enregistrer</span>
            </button>
            <div class="er-profile-foot">
              <button class="er-profile-later" type="button" data-action="close-profile">Plus tard</button>
              <button class="er-profile-never" type="button" data-action="never-profile">Ne plus me montrer</button>
            </div>
          </div>
        </div>
      `;
    }

     
     
    _maybeOpenProfilePrompt() {
      if (this._profilePromptShown || this._enMemoire) return;
      const pp = this._payload?.profilePrompt;
      if (!pp || pp.filled >= pp.total || pp.optOut) return;
      const dc = pp.dismissCount || 0;
      if (dc >= 3) return;
      let eligible = dc === 0;
      if (!eligible && pp.lastDismissedAt) {
        const days = (Date.now() - new Date(pp.lastDismissedAt).getTime()) / 86400000;
        eligible = dc === 1 ? days >= 7 : (dc === 2 ? days >= 30 : false);
      }
      if (!eligible) return;
      this._profilePromptShown = true;
      this._profilePromptTimer = setTimeout(() => this._openProfilePrompt(), 1600);
    }

    _openProfilePrompt() {
      

      if (!this.isConnected) return;
      const modal = this.querySelector('.er-profile');
      if (!modal) return;
       
       
      const vals = this._payload?.profilePrompt?.values || {};
      modal.querySelectorAll('[data-profile]').forEach(el => {
        const v = vals[el.dataset.profile];
         
         
        if (el.type === 'checkbox') { if (v != null) el.checked = !!v; return; }
        if (v != null && v !== '' && !String(el.value || '').trim()) el.value = String(v);
      });
      this._updateIdentPreview();
      this._syncPicks();           
      this._syncVillage();         
      this._clearPhoneError();
      this._updateProfileProgress();
      this._lastFocused = document.activeElement;
      modal.dataset.open = 'true';
      modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => { modal.querySelector('[data-profile="pseudo"]')?.focus(); });
      if (!this._escProfileHandler) {
        this._escProfileHandler = (e) => { if (e.key === 'Escape' && modal.dataset.open === 'true') this._dismissProfile(false); };
        document.addEventListener('keydown', this._escProfileHandler);
      }
       
      if (!this._trapProfileHandler) {
        this._trapProfileHandler = (e) => {
          if (e.key !== 'Tab' || modal.dataset.open !== 'true') return;
          const foc = Array.from(modal.querySelectorAll('button, input, select, [tabindex]:not([tabindex="-1"])'))
            .filter(el => !el.disabled && el.getAttribute('aria-disabled') !== 'true' && el.offsetParent !== null);
          if (!foc.length) return;
          const first = foc[0], last = foc[foc.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        };
        document.addEventListener('keydown', this._trapProfileHandler);
      }
    }

    _closeProfilePromptUI() {
      const modal = this.querySelector('.er-profile');
      if (modal) { modal.dataset.open = 'false'; modal.setAttribute('aria-hidden', 'true'); }
      this._unlockBodyScroll();
      if (this._escProfileHandler) { document.removeEventListener('keydown', this._escProfileHandler); this._escProfileHandler = null; }
      if (this._trapProfileHandler) { document.removeEventListener('keydown', this._trapProfileHandler); this._trapProfileHandler = null; }
      if (this._profilePromptTimer) { clearTimeout(this._profilePromptTimer); this._profilePromptTimer = null; }
      this._lastFocused?.focus?.();
      this._lastFocused = null;
    }

    







    _nomPublic(prenom, nom, pseudo, preferePseudo) {
      const p = String(pseudo || '').trim();
      const pr = String(prenom || '').trim();
      const nm = String(nom || '').trim();
       
       
       
      const pseudoParDefaut = p && pr && p.toLowerCase() === `${pr} ${nm}`.toLowerCase().trim();
      if (preferePseudo && p && !pseudoParDefaut) return p;
      if (!pr) return (pseudoParDefaut ? '' : p) || '';
      return nm ? `${pr} ${nm.charAt(0).toUpperCase()}.` : pr;
    }

    _updateIdentPreview() {
      const modal = this.querySelector('.er-profile');
      if (!modal) return;
      const val = (n) => modal.querySelector(`[data-profile="${n}"]`);
      const aperçu = this._nomPublic(
        val('prenom')?.value, val('nom')?.value, val('pseudo')?.value,
        !!val('pseudoPrefere')?.checked
      );
      const cible = modal.querySelector('[data-ident-preview]');
       
      if (cible) cible.textContent = aperçu || this._t('ton prénom');
    }

     
    _dismissProfile(optOut) {
      this._closeProfilePromptUI();
      this.dispatchEvent(new CustomEvent('er-profile-dismiss', { bubbles: true, composed: true, detail: { optOut: !!optOut } }));
    }

     
     
    _saveProfile() {
      const modal = this.querySelector('.er-profile');
      if (!modal) return;
      const detail = {};
      modal.querySelectorAll('[data-profile]').forEach(el => {
         
         
         
        if (el.type === 'checkbox') { detail[el.dataset.profile] = !!el.checked; return; }
        const v = String(el.value || '').trim();
        if (v) detail[el.dataset.profile] = v;
      });
       
       
      if (detail.telephone && !this._isPlausiblePhone(detail.telephone)) {
        this._showPhoneError();
        modal.querySelector('[data-profile="telephone"]')?.focus();
        return;
      }
      this._closeProfilePromptUI();
      if (Object.keys(detail).length) {
        this.dispatchEvent(new CustomEvent('er-profile-save', { bubbles: true, composed: true, detail }));
      }
       
       
       
       
       
      const v = this._villageState();
      const paysEnvoye = v.residence === 'fr' ? 'France'
                       : (v.residence === 'hors' ? String(v.pays || '').trim() : '');
      const aRepondu = v.venue || v.voile || v.suivi || v.canal || paysEnvoye;
      if (aRepondu) {
        this.dispatchEvent(new CustomEvent('er-village-save', {
          bubbles: true, composed: true,
          detail: {
            venue: v.venue, transport: v.transport, transportAutre: v.transportAutre,
            convaincu: v.convaincu, transportAvant: v.transportAvant, nudgeVu: v.nudgeVu,
            voileLien: v.voile, suiviCourses: v.suivi, canal: v.canal, pays: paysEnvoye
          }
        }));
      }
    }

     
    _villageState() {
      if (!this._village) {
        this._village = {
          venue: '', transport: '', transportAutre: '', convaincu: false,
           
           
           
          transportAvant: '', nudgeVu: false,
           
           
           
           
          notePreCoche: false,
           
           
          voile: '', suivi: '', canal: '', residence: '', pays: ''
        };
      }
      return this._village;
    }

    _wireVillageSurvey() {
      const box = this.querySelector('[data-village]');
      if (!box) return;
      const st = this._villageState();
      const qTransport = box.querySelector('[data-vil-transport]');
      const autre      = box.querySelector('[data-vil-autre]');
      const nudge      = box.querySelector('[data-vil-nudge]');
      const note       = box.querySelector('[data-vil-note]');

      const refresh = () => {
         
        qTransport.hidden = !(st.venue === 'oui' || st.venue === 'peutetre');
        if (qTransport.hidden) { st.transport = ''; st.transportAutre = ''; }
        autre.hidden = st.transport !== 'autre';
        nudge.hidden = st.transport !== 'voiture';
         
         
        if (note) note.hidden = !(st.notePreCoche && st.transport === 'train');
        box.querySelectorAll('[data-vil]').forEach(chip => {
          const on = st[chip.dataset.vil] === chip.dataset.val;
          chip.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        this._updateProfileProgress();
      };

      box.querySelectorAll('[data-vil]').forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          const champ = chip.dataset.vil;
           
           
           
           
          if (st[champ] === chip.dataset.val) return;
          st[champ] = chip.dataset.val;
          st.notePreCoche = false;
          refresh();
          if (champ === 'transport' && st.transport === 'autre') autre.focus();
        });
      });

      autre.addEventListener('input', () => { st.transportAutre = autre.value; });
      box.querySelector('[data-vil-more]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this._openVillageMobility();
      });

      this._villageRefresh = refresh;
      refresh();
    }

     
     
     
    _wirePortraitSurvey() {
      const box = this.querySelector('[data-portrait]');
      if (!box) return;
      const st = this._villageState();
      const pays = box.querySelector('[data-vil-pays]');

      const refresh = () => {
         
        pays.hidden = st.residence !== 'hors';
        if (pays.hidden && st.residence === 'fr') st.pays = 'France';
        box.querySelectorAll('[data-vil]').forEach(chip => {
          chip.setAttribute('aria-pressed', st[chip.dataset.vil] === chip.dataset.val ? 'true' : 'false');
        });
         
         
        this._updateProfileProgress();
      };

      box.querySelectorAll('[data-vil]').forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          const champ = chip.dataset.vil;
          if (st[champ] === chip.dataset.val) return;    
          st[champ] = chip.dataset.val;
          if (champ === 'residence' && chip.dataset.val === 'hors') st.pays = '';
          refresh();
          if (champ === 'residence' && st.residence === 'hors') pays.focus();
        });
      });

      pays.addEventListener('input', () => { st.pays = pays.value; this._updateProfileProgress(); });
      if (st.pays && st.residence === 'hors') pays.value = st.pays;
      this._portraitRefresh = refresh;
      refresh();
    }

    _openVillageMobility() {
      const modal = this.querySelector('.er-vilmob');
      if (!modal) return;
       
       
      this._villageState().nudgeVu = true;
      modal.dataset.open = 'true';
      modal.setAttribute('aria-hidden', 'false');
      requestAnimationFrame(() => modal.querySelector('.er-vilmob-close')?.focus());
    }

    _closeVillageMobility() {
      const modal = this.querySelector('.er-vilmob');
      if (!modal) return;
      modal.dataset.open = 'false';
      modal.setAttribute('aria-hidden', 'true');
    }

    _wireVillageMobility() {
      const modal = this.querySelector('.er-vilmob');
      if (!modal) return;
      modal.querySelectorAll('[data-action="close-vilmob"]').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); this._closeVillageMobility(); });
      });
       
       
      modal.querySelector('[data-vil-convert]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const st = this._villageState();
         
         
        if (!st.transportAvant && st.transport && st.transport !== 'train') st.transportAvant = st.transport;
        st.transport = 'train';
        st.convaincu = true;
        st.notePreCoche = true;
        this._closeVillageMobility();
        if (this._villageRefresh) this._villageRefresh();
      });
      if (!this._escVilmobHandler) {
        this._escVilmobHandler = (e) => {
          if (e.key === 'Escape' && modal.dataset.open === 'true') { e.stopPropagation(); this._closeVillageMobility(); }
        };
        document.addEventListener('keydown', this._escVilmobHandler);
      }
    }

     
    _syncVillage() {
      const v = this._payload?.profilePrompt?.village;
      if (!v) return;
      const st = this._villageState();
      st.venue = v.venue || '';
      st.transport = v.transport || '';
      st.transportAutre = v.transportAutre || '';
      st.convaincu = v.convaincu === true;
      st.voile = v.voileLien || '';
      st.suivi = v.suiviCourses || '';
      st.canal = v.canal || '';
       
      st.pays = v.pays || '';
      st.residence = st.pays ? (st.pays === 'France' ? 'fr' : 'hors') : '';
      const autre = this.querySelector('[data-vil-autre]');
      if (autre) autre.value = st.transportAutre;
      const pays = this.querySelector('[data-vil-pays]');
      if (pays) pays.value = st.residence === 'hors' ? st.pays : '';
      if (this._villageRefresh) this._villageRefresh();
      if (this._portraitRefresh) this._portraitRefresh();
    }

     
    






















    _pickPortailOuvrir(list) {
      if (list._erHote) return;                        
      list._erHote  = list.parentElement;
      list._erApres = list.nextSibling;
      this.appendChild(list);
      list.classList.add('er-pick-list--portail');
      if (this._pickEnFeuille()) this._pickFeuilleOuvrir(list);
    }

    


    _pickEnFeuille() {
      return !!(window.matchMedia && window.matchMedia('(max-width: 767px)').matches);
    }

    _pickFeuilleOuvrir(list) {
      if (this._pickVoile) return;
      const voile = document.createElement('div');
      voile.className = 'er-pick-voile';
      voile.addEventListener('click', () => this._closeAllPicks(null));
      this.insertBefore(voile, list);
      this._pickVoile = voile;

      

      const invite = list._erHote?.querySelector('[data-pick-val]')?.dataset.placeholder || 'Fermer';
      const barre = document.createElement('button');
      barre.type = 'button';
      barre.className = 'er-pick-fermer';
      barre.setAttribute('aria-label', 'Fermer la liste');
      barre.innerHTML = '<span>' + escapeHtml(invite) + '</span>' + ICON_CLOSE;
      barre.addEventListener('click', (e) => { e.stopPropagation(); this._closeAllPicks(null); });
      list.insertBefore(barre, list.firstChild);
      










      this._i18n(barre);
      this._pickBarre = barre;

      this._pickClavierSuivre();
      



      if (this._bodyLockY == null) { this._lockBodyScroll(); this._pickVerrou = true; }
    }

    _pickFeuilleFermer() {
      if (this._pickVoile) { this._pickVoile.remove(); this._pickVoile = null; }
      if (this._pickBarre) { this._pickBarre.remove(); this._pickBarre = null; }
      this._pickClavierArreter();
      if (this._pickVerrou) { this._unlockBodyScroll(); this._pickVerrou = false; }
    }

    


    _pickClavierSuivre() {
      const vv = window.visualViewport;
      if (!vv || this._pickVV) return;
      const maj = () => {
        const bas = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop));
        this.style.setProperty('--er-pick-clavier', bas + 'px');
      };
      this._pickVV = maj;
      vv.addEventListener('resize', maj);
      vv.addEventListener('scroll', maj);
      maj();
    }
    _pickClavierArreter() {
      const vv = window.visualViewport;
      if (vv && this._pickVV) {
        vv.removeEventListener('resize', this._pickVV);
        vv.removeEventListener('scroll', this._pickVV);
      }
      this._pickVV = null;
      this.style.removeProperty('--er-pick-clavier');
    }
    _pickPortailFermer(list) {
      this._pickFeuilleFermer();
      if (!list._erHote) return;
      





      const hote  = list._erHote;
      const apres = list._erApres && list._erApres.parentNode === hote ? list._erApres : null;
      if (hote.isConnected) hote.insertBefore(list, apres);
      else list.remove();
      list.classList.remove('er-pick-list--portail');
      list._erHote = null; list._erApres = null;
    }

    



















    _pickPortee(pick) {
      const l = pick && pick._erListe;
      return (l && !pick.contains(l)) ? [pick, l] : [pick];
    }
    _pickUn(pick, sel) {
      for (const n of this._pickPortee(pick)) { const r = n.querySelector(sel); if (r) return r; }
      return null;
    }
    _pickTous(pick, sel) {
      const out = [];
      for (const n of this._pickPortee(pick)) out.push(...n.querySelectorAll(sel));
      return out;
    }

    








    _closeAllPicks(except, racine) {
      const sien = (list) => !racine || racine.contains(list) ||
        (list._erHote && racine.contains(list._erHote));
      this.querySelectorAll('[data-pick-list]').forEach(list => {
        if (list === except || !sien(list)) return;
        list.hidden = true;
        

        this._pickPortailFermer(list);
        list.previousElementSibling?.setAttribute('aria-expanded', 'false');
        


        const hote = list.closest('.er-widget') || list.closest('.er-prono-parcours');
        if (hote && hote.style.zIndex === '60') { hote.style.zIndex = ''; hote.style.position = ''; }
      });
    }

    


    _pickFiltrer(pick, saisie) {
      const sansAccent = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
      const q = sansAccent(saisie);
      let visibles = 0;
      

      this._pickTous(pick, '.er-pick-opt').forEach(opt => {
        const ok = !q || sansAccent(opt.textContent).indexOf(q) >= 0;
        opt.hidden = !ok;
        if (ok) visibles++;
      });
      const vide = this._pickUn(pick, '[data-pick-vide]');
      if (vide) vide.hidden = visibles > 0;
    }

    _wirePicks(root) {
      const scope = root || this;
      scope.querySelectorAll('.er-pick').forEach(pick => {
        const btn  = pick.querySelector('[data-pick-btn]');
        const list = pick.querySelector('[data-pick-list]');
        const val  = pick.querySelector('[data-pick-val]');
        if (!btn || !list || !val) return;
        

        pick._erListe = list;

        











        const hote = pick.closest('.er-widget') || pick.closest('.er-prono-parcours');
        const open = (yes) => {
          this._closeAllPicks(yes ? list : null);
          if (hote) {
            hote.style.position = yes ? 'relative' : '';
            hote.style.zIndex = yes ? '60' : '';
          }
          

          if (yes) this._pickPortailOuvrir(list); else this._pickPortailFermer(list);
          list.hidden = !yes;
          btn.setAttribute('aria-expanded', yes ? 'true' : 'false');
          if (!yes) { list.classList.remove('er-pick-list--haut'); return; }
          


          const rb = btn.getBoundingClientRect();
          list.style.setProperty('--er-pick-x', Math.round(rb.left) + 'px');
          list.style.setProperty('--er-pick-y', Math.round(rb.bottom + 5) + 'px');
          list.style.setProperty('--er-pick-w', Math.round(rb.width) + 'px');
          list.style.setProperty('--er-pick-haut', Math.round(rb.top - 5) + 'px');
           
           
           
          list.classList.remove('er-pick-list--haut');
          const r = btn.getBoundingClientRect();
          const h = list.getBoundingClientRect().height;
           
          const vh = (window.visualViewport && window.visualViewport.height) || window.innerHeight;
          


          if (r.bottom + h + 12 > vh && r.top - h - 12 > 0) {
            list.classList.add('er-pick-list--haut');
          }
          list.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'center' });

          





          



          const rech = this._pickUn(pick, '[data-pick-recherche]');
          if (rech) { rech.value = ''; this._pickFiltrer(pick, ''); rech.focus(); }
        };

        btn.addEventListener('click', (e) => { e.stopPropagation(); open(list.hidden); });
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(true); }
        });

        list.querySelectorAll('.er-pick-opt').forEach(opt => {
          opt.addEventListener('click', (e) => {
            e.stopPropagation();
            list.querySelectorAll('.er-pick-opt').forEach(o => o.setAttribute('aria-selected', 'false'));
            opt.setAttribute('aria-selected', 'true');
            


            val.textContent = opt.dataset.nom || opt.textContent;
            val.dataset.empty = 'false';
            const hidden = pick.querySelector('input[data-pick-input]') || pick.querySelector('input[data-profile]');
            if (hidden) {
              hidden.value = opt.dataset.val || '';
              hidden.dispatchEvent(new Event('input', { bubbles: true }));
            }
            pick.dispatchEvent(new CustomEvent('er-pick-change', {
              bubbles: true, detail: { role: pick.dataset.pickRole || '', value: opt.dataset.val || '' }
            }));
            open(false);
            btn.focus();
          });
        });

        







        const rech = pick.querySelector('[data-pick-recherche]');
        if (rech) {
          rech.addEventListener('input', () => this._pickFiltrer(pick, rech.value));
          rech.addEventListener('click', (e) => e.stopPropagation());
          rech.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { e.stopPropagation(); open(false); btn.focus(); }
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              list.querySelector('.er-pick-opt:not([hidden])')?.focus();
            }
          });
        }
      });

      if (!this._pickOutsideHandler) {
        



        this._pickOutsideHandler = (e) => {
          const t = e.target;
          if (t?.closest?.('.er-pick') || t?.closest?.('[data-pick-list]')) return;
          this._closeAllPicks(null);
        };
        document.addEventListener('click', this._pickOutsideHandler);
        this._pickEscHandler = (e) => { if (e.key === 'Escape') this._closeAllPicks(null); };
        document.addEventListener('keydown', this._pickEscHandler);
        






        this._pickScrollHandler = () => {
          if (this._pickEnFeuille()) return;
          if (this.querySelector('.er-pick-list--portail')) this._closeAllPicks(null);
        };
        window.addEventListener('scroll', this._pickScrollHandler, { passive: true });
      }
    }

     
    _syncPicks() {
      this.querySelectorAll('.er-pick[data-pick]').forEach(pick => {
        const hidden = pick.querySelector('input[data-pick-input]') || pick.querySelector('input[data-profile]');
        const val = pick.querySelector('[data-pick-val]');
        if (!hidden || !val) return;
        const opt = this._pickUn(pick, `.er-pick-opt[data-val="${CSS.escape(hidden.value || '~none~')}"]`);
        this._pickTous(pick, '.er-pick-opt').forEach(o => o.setAttribute('aria-selected', 'false'));
        if (opt) {
          opt.setAttribute('aria-selected', 'true');
          val.textContent = opt.textContent;
          val.dataset.empty = 'false';
        }
      });
      this._syncDatePick();
    }

     
     
     
     
    _parseDateFr(brut) {
      const s = String(brut || '').trim();
      let d, mo, y;
       
       
      const parts = s.split(/[^0-9]+/).filter(Boolean);
      if (parts.length === 3 && parts[2].length === 4) {
        d = Number(parts[0]); mo = Number(parts[1]); y = Number(parts[2]);
      } else {
         
        const ch = s.replace(/\D/g, '');
        if (ch.length !== 8) return null;
        d = Number(ch.slice(0, 2));
        mo = Number(ch.slice(2, 4));
        y = Number(ch.slice(4, 8));
      }
      if (!d || !mo || mo > 12 || d > 31) return null;
      if (d > new Date(y, mo, 0).getDate()) return null;    
      const now = new Date().getFullYear();
      if (y < now - 110 || y > now) return null;
      return { y, m: mo - 1, d };
    }

     
     
    _formatDateFr(brut) {
      const ch = String(brut || '').replace(/\D/g, '').slice(0, 8);
      let out = ch.slice(0, 2);
      if (ch.length > 2) out += '/' + ch.slice(2, 4);
      if (ch.length > 4) out += '/' + ch.slice(4, 8);
      return out;
    }

    _wireDatePick() {
      const box = this.querySelector('[data-datepick]');
      if (!box) return;
      const btn    = box.querySelector('[data-date-btn]');
      const panel  = box.querySelector('[data-date-panel]');
      const texte  = box.querySelector('[data-date-text]');
      const aide   = box.querySelector('[data-date-aide]');
      const grid   = box.querySelector('[data-date-grid]');
      const hidden = box.querySelector('input[data-profile]');
      if (!btn || !panel || !grid || !hidden || !texte) return;

      const state = { y: null, m: null, d: null };

      const AIDE_DEFAUT = 'Tape ta date, par exemple 08/01/1997, ou ouvre le calendrier.';
      const erreur = (on) => {
        texte.setAttribute('aria-invalid', on ? 'true' : 'false');
        aide.textContent = on ? 'Date incomplète ou impossible. Format attendu : 08/01/1997.' : AIDE_DEFAUT;
        aide.dataset.err = on ? 'true' : 'false';
      };

      const paint = () => {
        if (state.y == null || state.m == null) {
          grid.innerHTML = '<p class="er-datepick-hint">Choisis d\'abord une année et un mois.</p>';
          this._i18n(grid);
          return;
        }
        const first = new Date(state.y, state.m, 1);
        const decal = (first.getDay() + 6) % 7;             
        const nb = new Date(state.y, state.m + 1, 0).getDate();
        let html = '';
        for (let i = 0; i < decal; i++) html += '<span class="er-datepick-day is-void"></span>';
        for (let d = 1; d <= nb; d++) {
          const on = state.d === d;
          html += `<button class="er-datepick-day" type="button" role="gridcell" data-d="${d}" aria-selected="${on}">${d}</button>`;
        }
        grid.innerHTML = html;
        grid.querySelectorAll('[data-d]').forEach(cell => {
          cell.addEventListener('click', (e) => {
            e.stopPropagation();
            state.d = Number(cell.dataset.d);
            commit();
            paint();
            close();
          });
        });
      };

       
       
      const commit = (depuisTexte) => {
        if (state.y == null || state.m == null || state.d == null) return;
        const mm = String(state.m + 1).padStart(2, '0');
        const dd = String(state.d).padStart(2, '0');
        hidden.value = `${state.y}-${mm}-${dd}`;
        hidden.dispatchEvent(new Event('input', { bubbles: true }));
        if (!depuisTexte) texte.value = `${dd}/${mm}/${state.y}`;
        erreur(false);
      };

      

      const close = () => { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); this._closeAllPicks(null, box); };
      const open = () => { panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); paint(); };

      btn.addEventListener('click', (e) => { e.stopPropagation(); panel.hidden ? open() : close(); });
      panel.addEventListener('click', (e) => e.stopPropagation());
       
       
      texte.addEventListener('click', (e) => e.stopPropagation());

       
       
       
      const FORME_AUTO = /^\d{0,8}$|^\d{2}\/\d{0,3}$|^\d{2}\/\d{2}\/\d{0,4}$/;

      texte.addEventListener('input', () => {
        const enBout = texte.selectionStart === texte.value.length;
        if (enBout && FORME_AUTO.test(texte.value)) {
          const mis = this._formatDateFr(texte.value);
          if (mis !== texte.value) { texte.value = mis; }
        }
        const p = this._parseDateFr(texte.value);
        if (p) {
          state.y = p.y; state.m = p.m; state.d = p.d;
          commit(true);
          this._syncDatePickHead?.();
          paint();
        } else if (!texte.value.replace(/\D/g, '')) {
           
          state.y = state.m = state.d = null;
          hidden.value = '';
          hidden.dispatchEvent(new Event('input', { bubbles: true }));
          erreur(false);
        }
      });

       
       
      texte.addEventListener('blur', () => {
        const brut = texte.value.replace(/\D/g, '');
        if (!brut) { erreur(false); return; }
        erreur(!this._parseDateFr(texte.value));
      });
      texte.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); texte.blur(); }
      });

      box.addEventListener('er-pick-change', (e) => {
        const role = e.detail?.role;
        if (role === 'year')  state.y = Number(e.detail.value);
        if (role === 'month') state.m = Number(e.detail.value);
         
        if (state.y != null && state.m != null && state.d != null) {
          const max = new Date(state.y, state.m + 1, 0).getDate();
          if (state.d > max) state.d = max;
          commit();
        }
        paint();
      });

       
       
      const syncTete = () => {
        box.querySelectorAll('.er-pick--inline').forEach(p => {
          const vide = state.y == null || state.m == null;
          const want = p.dataset.pickRole === 'year' ? String(state.y) : String(state.m);
          const opt = vide ? null : p.querySelector(`.er-pick-opt[data-val="${CSS.escape(want)}"]`);
          p.querySelectorAll('.er-pick-opt').forEach(o => o.setAttribute('aria-selected', 'false'));
          const v = p.querySelector('[data-pick-val]');
          if (opt) {
            opt.setAttribute('aria-selected', 'true');
            v.textContent = opt.textContent;
            v.dataset.empty = 'false';
          } else {
            v.textContent = p.dataset.pickRole === 'year' ? 'Année' : 'Mois';
            v.dataset.empty = 'true';
          }
        });
      };

      box.querySelector('[data-date-clear]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        state.y = state.m = state.d = null;
        hidden.value = '';
        hidden.dispatchEvent(new Event('input', { bubbles: true }));
        texte.value = '';
        erreur(false);
        syncTete();
        paint();
      });

      if (!this._dateOutsideHandler) {
        



        this._dateOutsideHandler = (ev) => {
          if (panel.hidden) return;
          if (!ev.target.closest?.('.er-datepick')) close();
        };
        document.addEventListener('click', this._dateOutsideHandler);
      }
      this._datePickState = state;
      this._datePickPaint = paint;
      this._syncDatePickHead = syncTete;
    }

     
    _syncDatePick() {
      const box = this.querySelector('[data-datepick]');
      const state = this._datePickState;
      if (!box || !state) return;
      const hidden = box.querySelector('input[data-profile]');
      const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(hidden?.value || ''));
      if (!m) return;
      state.y = Number(m[1]); state.m = Number(m[2]) - 1; state.d = Number(m[3]);
      const texte = box.querySelector('[data-date-text]');
      if (texte) texte.value = `${m[3]}/${m[2]}/${m[1]}`;
      if (this._syncDatePickHead) this._syncDatePickHead();
      if (this._datePickPaint) this._datePickPaint();
    }

     
    _updateProfileProgress() {
      const modal = this.querySelector('.er-profile');
      if (!modal) return;
       
       
       
       
       
       
       
      const inputs = [...modal.querySelectorAll('[data-profile]')].filter(el => el.type !== 'checkbox');
      const v = this._villageState();
      const declaratif = [v.venue, v.voile, v.suivi, v.canal, v.residence];
      const total = inputs.length + declaratif.length;
      let filled = declaratif.filter(Boolean).length;
      inputs.forEach(el => { if (String(el.value || '').trim()) filled++; });
      const complete = filled >= total;
      const pct = total ? Math.round((filled / total) * 100) : 0;
      const fill = modal.querySelector('[data-profile-prog-fill]'); if (fill) fill.style.width = pct + '%';
      const count = modal.querySelector('[data-profile-prog-count]'); if (count) count.textContent = String(filled);
      const track = modal.querySelector('.er-profile-prog-track'); if (track) track.setAttribute('aria-valuenow', String(filled));
      const msg = modal.querySelector('[data-profile-prog-msg]');
      if (msg) {
        const left = total - filled;
        

        msg.textContent = this._t(complete
          ? 'badge Profil complet débloqué ✓'
          : (left === 1 ? 'plus qu’une info pour débloquer ton badge' : `plus que ${left} infos pour débloquer ton badge`));
      }
       
      modal.querySelector('[data-profile-prog]')?.setAttribute('data-complete', complete ? 'true' : 'false');
    }

     
     
    _isPlausiblePhone(raw) {
      let d = String(raw || '').replace(/\D/g, '');
       
      if (!String(raw || '').trim().startsWith('+')) {
        if (d.startsWith('00')) d = d.slice(2);
        else if (d.length === 10 && d.startsWith('0')) d = '33' + d.slice(1);
      }
      if (d.length < 8 || d.length > 15) return false;
      if (/^(\d)\1+$/.test(d)) return false;
      if (new Set(d).size < 4) return false;
      if (/(\d)\1{4,}/.test(d)) return false;
       
      const suite = (s) => {
        if (s.length < 5) return false;
        let up = true, down = true;
        for (let i = 1; i < s.length; i++) {
          const delta = s.charCodeAt(i) - s.charCodeAt(i - 1);
          if (delta !== 1) up = false;
          if (delta !== -1) down = false;
          if (!up && !down) return false;
        }
        return true;
      };
      if (suite(d)) return false;
      if (d.startsWith('33') && suite(d.slice(2))) return false;
      if (d.startsWith('33')) {
        const nat = d.slice(2);
        if (nat.length !== 9 || !/^[1-79]/.test(nat)) return false;
      }
      return true;
    }
    _showPhoneError() {
      const err = this.querySelector('[data-profile-err="telephone"]'); if (err) err.hidden = false;
      this.querySelector('[data-profile="telephone"]')?.setAttribute('aria-invalid', 'true');
    }
    _clearPhoneError() {
      const err = this.querySelector('[data-profile-err="telephone"]'); if (err) err.hidden = true;
      this.querySelector('[data-profile="telephone"]')?.removeAttribute('aria-invalid');
    }

     
    _buildInstaClaim() {
      return `
        <div class="er-insta" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="er-insta-title">
          <div class="er-insta-backdrop" data-action="close-insta"></div>
          <div class="er-insta-panel">
            <button class="er-insta-close" type="button" data-action="close-insta" aria-label="Fermer">${ICON_CLOSE}</button>
            <div class="er-insta-eyebrow">Badge Instagram</div>
            <h2 class="er-insta-title" id="er-insta-title">Suis la course sur Instagram</h2>
            <p class="er-insta-sub">Ajoute ton pseudo : on vérifie sous 72 h que tu suis la Route du Rhum, et ton badge se débloque.</p>
            <div class="er-insta-alert" data-insta-alert data-tone="" role="status" aria-live="polite" hidden>
              <span class="er-insta-alert-ico" data-insta-alert-ico aria-hidden="true"></span>
              <div class="er-insta-alert-body">
                <strong class="er-insta-alert-title" data-insta-alert-title></strong>
                <span class="er-insta-alert-text" data-insta-alert-text></span>
              </div>
            </div>
            <label class="er-insta-field">
              <span class="er-insta-label">Ton pseudo Instagram</span>
              <div class="er-insta-inwrap"><span class="er-insta-at" aria-hidden="true">@</span><input type="text" data-insta="pseudo" maxlength="30" autocomplete="off" spellcheck="false" placeholder="ton.pseudo" class="er-insta-input" aria-label="Ton pseudo Instagram"></div>
              <span class="er-insta-err" data-insta-err role="alert" hidden>Pseudo invalide : lettres, chiffres, « . » et « _ » uniquement.</span>
            </label>
            <button class="er-insta-save" type="button" data-action="save-insta">Envoyer</button>
            <button class="er-insta-later" type="button" data-action="close-insta">Plus tard</button>
          </div>
        </div>
      `;
    }

    _openInstaClaim() {
      const modal = this.querySelector('.er-insta');
      if (!modal) return;
      const insta = this._payload?.insta || {};
      const input = modal.querySelector('[data-insta="pseudo"]');
      if (input && insta.pseudo && !String(input.value || '').trim()) input.value = insta.pseudo;
       
      const alert = modal.querySelector('[data-insta-alert]');
      if (alert) {
        const ico   = alert.querySelector('[data-insta-alert-ico]');
        const title = alert.querySelector('[data-insta-alert-title]');
        const text  = alert.querySelector('[data-insta-alert-text]');
        if (insta.status === 'rejected') {
          alert.hidden = false; alert.dataset.tone = 'error';
          if (ico) ico.innerHTML = ICON_ALERT;
          if (title) title.textContent = this._t('Ta demande n\'a pas été validée');
          if (text) text.textContent = this._t("Nous n'avons pas trouvé ton pseudo dans les abonnés du compte de la course. Vérifie bien son orthographe, assure-toi de nous suivre sur Instagram, puis renvoie ta demande.");
        } else if (insta.status === 'pending') {
          alert.hidden = false; alert.dataset.tone = 'wait';
          if (ico) ico.innerHTML = ICON_CLOCK;
          if (title) title.textContent = this._t('Demande en cours de vérification');
          if (text) text.textContent = this._t('On regarde ça sous 72 h. Tu peux encore corriger ton pseudo si tu as fait une faute.');
        } else {
          alert.hidden = true; alert.dataset.tone = '';
          if (ico) ico.innerHTML = ''; if (title) title.textContent = ''; if (text) text.textContent = '';
        }
      }
      this._clearInstaError();
      this._lastFocused = document.activeElement;
      modal.dataset.open = 'true'; modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => input?.focus());
      if (!this._escInstaHandler) {
        this._escInstaHandler = (e) => { if (e.key === 'Escape' && modal.dataset.open === 'true') this._closeInstaClaimUI(); };
        document.addEventListener('keydown', this._escInstaHandler);
      }
    }

    _closeInstaClaimUI() {
      const modal = this.querySelector('.er-insta');
      if (modal) { modal.dataset.open = 'false'; modal.setAttribute('aria-hidden', 'true'); }
      this._unlockBodyScroll();
      if (this._escInstaHandler) { document.removeEventListener('keydown', this._escInstaHandler); this._escInstaHandler = null; }
      this._lastFocused?.focus?.(); this._lastFocused = null;
    }

    _saveInstaClaim() {
      const modal = this.querySelector('.er-insta');
      if (!modal) return;
      const raw = String(modal.querySelector('[data-insta="pseudo"]')?.value || '').trim().replace(/^@+/, '');
      if (!/^[A-Za-z0-9._]{1,30}$/.test(raw)) {
        const err = modal.querySelector('[data-insta-err]'); if (err) err.hidden = false;
        modal.querySelector('.er-insta-inwrap')?.setAttribute('data-invalid', 'true');
        modal.querySelector('[data-insta="pseudo"]')?.setAttribute('aria-invalid', 'true');
        modal.querySelector('[data-insta="pseudo"]')?.focus();
        return;
      }
      this._closeInstaClaimUI();
      this.dispatchEvent(new CustomEvent('er-insta-claim', { bubbles: true, composed: true, detail: { pseudo: raw } }));
    }

    _clearInstaError() {
      const modal = this.querySelector('.er-insta'); if (!modal) return;
      const err = modal.querySelector('[data-insta-err]'); if (err) err.hidden = true;
      modal.querySelector('.er-insta-inwrap')?.removeAttribute('data-invalid');
      modal.querySelector('[data-insta="pseudo"]')?.removeAttribute('aria-invalid');
    }

    _wireInstaClaim() {
      const modal = this.querySelector('.er-insta');
      if (!modal) return;
      modal.querySelectorAll('[data-action="close-insta"]').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); this._closeInstaClaimUI(); }));
      modal.querySelector('[data-action="save-insta"]')?.addEventListener('click', () => this._saveInstaClaim());
      modal.querySelector('[data-insta="pseudo"]')?.addEventListener('input', () => this._clearInstaError());
    }

    _wireProfilePrompt() {
      const modal = this.querySelector('.er-profile');
      if (!modal) return;
      modal.querySelectorAll('[data-action="close-profile"]').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); this._dismissProfile(false); });
      });
      const never = modal.querySelector('[data-action="never-profile"]');
      if (never) never.addEventListener('click', () => this._dismissProfile(true));
      const save = modal.querySelector('[data-action="save-profile"]');
      if (save) save.addEventListener('click', () => this._saveProfile());
       
       
      this._wirePicks(modal);
      this._wireDatePick();
      this._wireVillageSurvey();
      this._wirePortraitSurvey();
      this._wireVillageMobility();
       
       
       
       
      modal.querySelectorAll('[data-profile]').forEach(el => {
        const maj = () => {
          this._updateProfileProgress();
          this._updateIdentPreview();
          if (el.dataset.profile === 'telephone') this._clearPhoneError();
        };
        el.addEventListener('input', maj);
        if (el.type === 'checkbox') el.addEventListener('change', maj);
      });
    }

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

     
     
     
     
     
     
     
     

     
     
     
     
     
     
     

     
     
     
     
     
     
     
     
     
     
    _animationActive(cle) {
      const a = this._payload?.animations;
      if (!a || typeof a !== 'object') return true;
      return a[cle] !== false;
    }

    







    _packDejaPris() {
      const codes = this._payload?.packFan?.codes;
      if (!codes || typeof codes !== 'object') return false;
      return !!(codes.vr && codes.vr.code);
    }

    _combatEtat() {
      const c = this._payload?.combativite;
      return (c && c.disponible && Array.isArray(c.classes) && c.classes.length) ? c : null;
    }

    










    _bandeauDemo(etat, cle) {
      if (!etat || !etat.demo) return '';
      const ou = (this._payload?.apercuARemplir || {})[cle] || '';
      return `
        <div class="er-demo-bandeau" role="note">
          <span class="er-demo-tag">Démonstration</span>
          <span class="er-demo-txt">Rien n'est encore configuré : cet écran est simulé, personne d'autre ne le voit.${ou ? ` <b>${escapeHtml(ou)}</b>` : ''}</span>
        </div>`;
    }

    _buildCombatWidget() {
      const etat = this._combatEtat();
      if (!etat) return '';
      const ph = etat.phase;
      if (ph === 'avant' || ph === 'fini') return '';

      const nomine = ph === 'nominations';
      const vote   = ph === 'vote';
      const en     = this._lang() === 'en';

      const chapeau = nomine
        ? (en ? 'Who is fighting hardest out there? Name one skipper per class, and say why if you feel like it.'
              : 'Qui s\'accroche le plus, là-bas ? Nomme un skipper par classe, et dis pourquoi si tu veux.')
        : ph === 'entre-deux'
          ? (en ? 'Nominations are closed. The vote opens once the boats are in.'
                : 'Les nominations sont closes. Le vote ouvrira une fois les bateaux arrivés.')
          : vote
            ? (en ? 'Here are the skippers you nominated. One vote per class.'
                  : 'Voici les skippers que vous avez nommés. Un vote par classe.')
            : (en ? 'The prize has been awarded.' : 'Le prix est décerné.');

      const lignes = etat.classes.map(classe => {
        const court = String(classe).toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 14);
        const maNom = (etat.mesNominations || {})[classe];
        const monVote = (etat.mesVotes || {})[classe];
        const laureat = (etat.laureats || {})[classe];

         
        if (ph === 'laureats') {
          return `
            <div class="er-combat-ligne er-combat-ligne--lecture">
              <div class="er-combat-classe">${escapeHtml(classe)}</div>
              <div class="er-combat-laureat">
                <span class="er-combat-cell-label">Prix de la combativité</span>
                <span class="er-combat-laureat-nom">${laureat ? escapeHtml(laureat.prenomNom) : '—'}</span>
                ${laureat ? `<span class="er-combat-laureat-voix">${en
                    ? `${laureat.voix} votes out of ${laureat.total}${laureat.exAequo ? ' · tied, to be settled' : ''}`
                    : `${laureat.voix} voix sur ${laureat.total}${laureat.exAequo ? ' · ex aequo, à départager' : ''}`}</span>` : ''}
              </div>
              <div class="er-combat-cell">
                <span class="er-combat-cell-label">Mon vote</span>
                <span class="er-combat-cell-val${monVote && laureat && monVote.skipperId === laureat.skipperId ? ' est-juste' : ''}">${
                  monVote ? escapeHtml(monVote.prenomNom) : (en ? 'No vote' : 'Pas de vote')}</span>
              </div>
            </div>`;
        }

         
        if (ph === 'entre-deux') {
          return `
            <div class="er-combat-ligne er-combat-ligne--lecture">
              <div class="er-combat-classe">${escapeHtml(classe)}</div>
              <div class="er-combat-cell">
                <span class="er-combat-cell-label">Ma nomination</span>
                <span class="er-combat-cell-val">${maNom ? escapeHtml(maNom.prenomNom) : (en ? 'No nomination' : 'Pas de nomination')}</span>
              </div>
              <div class="er-combat-cell">
                <span class="er-combat-cell-label">Le vote</span>
                <span class="er-combat-cell-val">${en ? 'Opens after the finish' : 'Ouvre après l\'arrivée'}</span>
              </div>
            </div>`;
        }

         
        if (vote) {
          const bulletin = (etat.nommes || {})[classe] || [];
          if (!bulletin.length) {
            return `
              <div class="er-combat-ligne er-combat-ligne--lecture">
                <div class="er-combat-classe">${escapeHtml(classe)}</div>
                <div class="er-combat-cell" style="grid-column: 2 / -1;">
                  <span class="er-combat-cell-label">Aucun nommé</span>
                  <span class="er-combat-cell-val">${en ? 'Nobody was nominated in this class.' : 'Personne n\'a été nommé dans cette classe.'}</span>
                </div>
              </div>`;
          }
          


          const cat = this._payload?.skipperCatalog || [];
          const photoDe = (id) => {
            const s = cat.find(x => x.id === id);
            return s ? (s.photo || s.photoCarte || '') : '';
          };
          const choix = bulletin.map(sk => {
            const ph = photoDe(sk.skipperId);
            const on = monVote && monVote.skipperId === sk.skipperId;
            return `
            <button class="er-combat-choix${on ? ' is-on' : ''}"
                    type="button" data-combat-vote data-skipper="${escapeHtml(sk.skipperId)}"
                    aria-pressed="${on ? 'true' : 'false'}">
              ${ph ? `<span class="er-combat-choix-ph" style="background-image:url('${escapeHtml(ph)}')"></span>`
                   : '<span class="er-combat-choix-ph er-combat-choix-ph--vide"></span>'}
              <span class="er-combat-choix-nom">${escapeHtml(sk.prenomNom)}</span>
              ${on ? `<span class="er-combat-choix-ok" aria-hidden="true">${ICON_CHECK}</span>` : ''}
            </button>`;
          }).join('');
          const cfgV = findClassConfig(classe);
          



          const seul = bulletin.length === 1;
          return `
            <div class="er-combat-carte" data-combat-ligne="${escapeHtml(classe)}"
                 style="--cc: ${escapeHtml(cfgV && cfgV.col ? cfgV.col : 'var(--er-teal)')}">
              <div class="er-combat-carte-tete">
                <span class="er-combat-carte-classe">${escapeHtml(classe)}</span>
                <span class="er-combat-carte-etat${monVote ? ' est-fait' : ''}" data-combat-etat>${
                  monVote ? (en ? 'Voted' : 'Voté') : (en ? 'To vote' : 'À voter')}</span>
              </div>
              <div class="er-combat-bulletin" role="group" aria-label="${escapeHtml(classe)}">${choix}</div>
              ${seul ? `<p class="er-combat-carte-seul">${en
                ? 'Only one nomination in this class: your vote confirms it.'
                : 'Une seule nomination dans cette classe : ton vote la confirme.'}</p>` : ''}
            </div>`;
        }

         
        const options = this._pronosSkippers(classe).map(sk => ({ v: sk.id, l: sk.name }));
        return `
          <div class="er-combat-ligne" data-combat-ligne="${escapeHtml(classe)}" data-fait="${maNom ? '1' : '0'}">
            <div class="er-combat-classe">${escapeHtml(classe)}</div>
            <div class="er-combat-champ">
              <span class="er-combat-cell-label" id="er-combat-lbl-${court}">Le plus combatif</span>
              ${this._buildPick('skipper', options, 'Choisis un skipper', 'er-combat-lbl-' + court, 'data-combat')}
            </div>
            <label class="er-combat-champ er-combat-champ--mot">
              <span class="er-combat-cell-label">Pourquoi lui ou elle ? <span class="er-combat-optionnel">facultatif</span></span>
              <input class="er-combat-mot" type="text" maxlength="280" data-combat="justification"
                     value="${escapeHtml(maNom?.justification || '')}"
                     placeholder="${escapeHtml(en ? 'One line, if you want' : 'Une ligne, si tu veux')}">
            </label>
            <button class="er-combat-valider" type="button" data-action="valider-combat"
                    data-classe="${escapeHtml(classe)}">${maNom ? 'Modifier' : 'Nommer'}</button>
            <div class="er-combat-etat" data-combat-etat>${maNom ? 'Enregistré' : ''}</div>
          </div>`;
      }).join('');

      const compte = nomine
        ? Object.keys(etat.mesNominations || {}).length
        : Object.keys(etat.mesVotes || {}).length;

      return `
        <div class="er-widget er-widget--combat" data-slot="combat" role="region" aria-label="Prix de la combativité">
          ${this._bandeauDemo(etat, 'combativite')}
          <div class="er-combat-tete">
            <div>
              <div class="er-combat-eyebrow">Prix de la combativité</div>
              <h3 class="er-combat-titre">${escapeHtml(this._titreSansDoublon(etat.libelle, 'Prix de la combativité', 'Celui qui ne lâche rien'))}</h3>
            </div>
            ${(nomine || vote) ? `<div class="er-combat-jauge">
              <span class="er-combat-jauge-val">${compte}<span class="er-combat-jauge-tot">/${etat.classes.length}</span></span>
              <span class="er-combat-jauge-lab">classes</span>
            </div>` : ''}
          </div>
          <p class="er-combat-sub">${escapeHtml(chapeau)}</p>
          <div class="er-combat-grille">${lignes}</div>
        </div>`;
    }

    _wireCombat() {
      const w = this.querySelector('.er-widget--combat');
      if (!w) return;
      this._wirePicks(w);
       
       
       
      this._combatPrefill(w);
      this._pronosSyncPicks(w);

      w.addEventListener('click', (e) => {
        const nommer = e.target.closest('[data-action="valider-combat"]');
        if (nommer) { this._combatNommer(nommer.dataset.classe); return; }
        const bulletin = e.target.closest('[data-combat-vote]');
        if (bulletin) {
          const ligne = bulletin.closest('[data-combat-ligne]');
          this._combatVoter(ligne?.dataset.combatLigne, bulletin.dataset.skipper, bulletin);
        }
      });

      w.querySelectorAll('[data-combat-ligne]').forEach(ligne => {
        ligne.querySelectorAll('[data-combat]').forEach(champ => {
          champ.addEventListener('input', () => {
            const et = ligne.querySelector('[data-combat-etat]');
            if (et) { et.textContent = ''; et.dataset.tone = ''; }
          });
        });
      });
    }

     
    _combatPrefill(racine) {
      const etat = this._combatEtat();
      if (!etat || !racine) return;
      Object.entries(etat.mesNominations || {}).forEach(([classe, choix]) => {
        if (!choix?.skipperId) return;
        const ligne = racine.querySelector(`[data-combat-ligne="${CSS.escape(classe)}"]`);
        const champ = ligne && ligne.querySelector('[data-combat="skipper"]');
        if (champ) champ.value = choix.skipperId;
      });
    }

    _combatNommer(classe) {
      const ligne = this.querySelector(`[data-combat-ligne="${CSS.escape(classe)}"]`);
      if (!ligne) return;
      const skipperId = ligne.querySelector('[data-combat="skipper"]')?.value || '';
      const mot = ligne.querySelector('[data-combat="justification"]')?.value || '';
      const etat = ligne.querySelector('[data-combat-etat]');
      const bouton = ligne.querySelector('[data-action="valider-combat"]');
      if (!skipperId) {
        if (etat) { etat.textContent = 'Choisis un skipper'; etat.dataset.tone = 'error'; this._i18n(etat); }
        return;
      }
      if (bouton) bouton.disabled = true;
      if (etat) { etat.textContent = 'Envoi…'; etat.dataset.tone = ''; this._i18n(etat); }
      this.dispatchEvent(new CustomEvent('er-combativite', { bubbles: true, composed: true,
        detail: { action: 'nomination', classe, skipperId, justification: mot } }));
    }

    _combatVoter(classe, skipperId, bouton) {
      if (!classe || !skipperId) return;
      const ligne = this.querySelector(`[data-combat-ligne="${CSS.escape(classe)}"]`);
      const etat = ligne?.querySelector('[data-combat-etat]');
       
       
      ligne?.querySelectorAll('[data-combat-vote]').forEach(b => {
        b.classList.remove('is-on'); b.setAttribute('aria-pressed', 'false');
      });
      bouton.classList.add('is-on');
      bouton.setAttribute('aria-pressed', 'true');
      if (etat) { etat.textContent = 'Envoi…'; etat.dataset.tone = ''; this._i18n(etat); }
      this.dispatchEvent(new CustomEvent('er-combativite', { bubbles: true, composed: true,
        detail: { action: 'vote', classe, skipperId } }));
    }

     
    combatResultat(res) {
      const classe = res?.classe;
      const ligne = classe ? this.querySelector(`[data-combat-ligne="${CSS.escape(classe)}"]`) : null;
      if (!ligne) return;
      const etat = ligne.querySelector('[data-combat-etat]');
      const bouton = ligne.querySelector('[data-action="valider-combat"]');
      if (bouton) bouton.disabled = false;

      if (res?.ok) {
        if (bouton) { bouton.textContent = 'Modifier'; this._i18n(bouton); }
        ligne.dataset.fait = '1';
        if (etat) {
          etat.textContent = res.action === 'vote' ? 'Vote enregistré' : 'Enregistré';
          etat.dataset.tone = 'ok'; this._i18n(etat);
        }
        this._combatMemoriser(res, ligne);
        this._combatMajJauge();
        return;
      }
      const messages = {
        nominations_fermees: 'Les nominations sont closes.',
        vote_ferme:          'Le vote est clos.',
        pas_dans_le_bulletin:'Ce skipper n\'est pas au bulletin.',
        skipper_hors_classe: 'Ce skipper ne court pas dans cette classe.',
        skipper_inconnu:     'Ce skipper est introuvable.',
        choix_incomplet:     'Choisis un skipper'
      };
      if (etat) {
        etat.textContent = messages[res?.raison] || 'Ça n\'a pas été enregistré. Réessaie.';
        etat.dataset.tone = 'error'; this._i18n(etat);
      }
       
      if (res?.action === 'vote') {
        const etatC = this._combatEtat();
        const avant = etatC && (etatC.mesVotes || {})[classe];
        ligne.querySelectorAll('[data-combat-vote]').forEach(b => {
          const on = !!avant && b.dataset.skipper === avant.skipperId;
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      }
    }

     
     
    _combatMemoriser(res, ligne) {
      const etat = this._combatEtat();
      if (!etat || !res?.classe) return;
      const valeur = { skipperId: res.skipperId || '', prenomNom: res.prenomNom || '' };
      if (res.action === 'vote') {
        etat.mesVotes = etat.mesVotes || {};
        etat.mesVotes[res.classe] = valeur;
      } else {
        etat.mesNominations = etat.mesNominations || {};
        valeur.justification = ligne?.querySelector('[data-combat="justification"]')?.value || '';
        etat.mesNominations[res.classe] = valeur;
      }
    }

     
     
     
    _combatMajJauge() {
      const w = this.querySelector('.er-widget--combat');
      const val = w && w.querySelector('.er-combat-jauge-val');
      if (!val) return;
      const lignes = [...w.querySelectorAll('[data-combat-ligne]')];
      const faits = lignes.filter(l => l.dataset.fait === '1' || l.querySelector('[data-combat-vote].is-on')).length;
       
       
      const total = this._combatEtat()?.classes?.length ?? lignes.length;
      val.innerHTML = faits + `<span class="er-combat-jauge-tot">/${total}</span>`;
    }

    _pronosEtat() {
      const p = this._payload?.pronostics;
      return (p && p.disponible && Array.isArray(p.classes) && p.classes.length) ? p : null;
    }

     
     
    


    _pronosDecoupe(sec) {
      if (!Number.isFinite(sec) || sec <= 0) return { j: '', h: '', m: '', s: '' };
      const j = Math.floor(sec / 86400), r = sec % 86400;
      return { j: String(j), h: String(Math.floor(r / 3600)),
               m: String(Math.floor((r % 3600) / 60)), s: String(r % 60) };
    }

    








    _pronosChampDuree(nom, unite, valeur, max, court) {
      const id = 'er-prono-' + nom + '-' + court;
      return `
        <label class="er-prono-case" for="${id}">
          <input class="er-prono-case-champ" id="${id}" type="text" inputmode="numeric"
                 pattern="[0-9]*" maxlength="2" autocomplete="off"
                 data-prono-duree="${escapeHtml(nom)}" data-max="${max}"
                 value="${escapeHtml(valeur)}" placeholder="0" aria-label="${escapeHtml(nom)}">
          <span class="er-prono-case-unite">${escapeHtml(unite)}</span>
        </label>`;
    }

    _pronosSkippers(classe) {
      const cat = this._payload?.skipperCatalog || [];
      const norme = (x) => String(x || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      const c = norme(classe);
      const dedans = cat.filter(s => norme(s.class) === c);
       
       
      return (dedans.length ? dedans : cat).slice(0, 200);
    }

    _pronosDuree(ms) {
      if (!(ms > 0)) return '';
      const en = this._lang() === 'en';
      const j = Math.floor(ms / 86400000);
      const h = Math.floor((ms % 86400000) / 3600000);
      const m = Math.floor((ms % 3600000) / 60000);
      if (j > 0) return en ? `${j}d ${h}h` : `${j} j ${h} h`;
      if (h > 0) return en ? `${h}h ${String(m).padStart(2, '0')}` : `${h} h ${String(m).padStart(2, '0')}`;
      return `${m} min`;
    }


    _buildPronosWidget() {
      const etat = this._pronosEtat();
      if (!etat) return '';

      const ouvert = etat.phase === 'ouvert';
      const avant  = etat.phase === 'avant';
      const mesChoix = etat.mesChoix || {};
      const deposes = etat.classes.filter(c => mesChoix[c]).length;

      const en = this._lang() === 'en';
      const entete = avant
        ? (en ? `Opens on ${this._pronosDate(etat.ouvertureLe)}` : `Ouverture le ${this._pronosDate(etat.ouvertureLe)}`)
        : ouvert
          ? (en ? `Closes at the start, in ${this._pronosDuree(etat.fermeDansMs)}`
                : `Fermeture au départ, dans ${this._pronosDuree(etat.fermeDansMs)}`)
          : etat.phase === 'ferme'
            ? 'Le vote est clos. Les résultats seront saisis à l\'arrivée.'
            : 'Les résultats sont tombés.';

      const lignes = etat.classes.map(classe => {
        const mien = mesChoix[classe];
        const reel = etat.resultats && etat.resultats[classe];
        const cons = etat.consensus && etat.consensus[classe];

        if (!ouvert) {
           
           
          const favori = cons && cons.top && cons.top[0];
          return `
            <div class="er-pronos-ligne er-pronos-ligne--lecture">
              <div class="er-pronos-classe">${escapeHtml(classe)}</div>
              <div class="er-pronos-cell">
                <span class="er-pronos-cell-label">Mon pronostic</span>
                <span class="er-pronos-cell-val">${mien ? escapeHtml(mien.prenomNom || '—') : 'Pas de pronostic'}</span>
              </div>
              <div class="er-pronos-cell">
                <span class="er-pronos-cell-label">Le consensus</span>
                <span class="er-pronos-cell-val">${favori ? escapeHtml(favori.prenomNom) + ' · ' + favori.pct + ' %' : '—'}</span>
              </div>
              <div class="er-pronos-cell">
                <span class="er-pronos-cell-label">${reel ? 'Vainqueur' : 'Résultat'}</span>
                <span class="er-pronos-cell-val${reel && mien && reel.skipperId === mien.skipperId ? ' est-juste' : ''}">${
                  reel ? escapeHtml(reel.prenomNom || '—') : 'En attente'}</span>
              </div>
              ${mien && typeof mien.points === 'number'
                ? `<div class="er-pronos-points">${mien.points} pt${mien.points > 1 ? 's' : ''}</div>`
                : '<div class="er-pronos-points er-pronos-points--vide"></div>'}
            </div>`;
        }

         
        const slugCourt = String(classe).toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 14);
        const plateau = this._pronosSkippers(classe);
         
         
        if (!plateau.length) {
          return `
            <div class="er-pronos-ligne er-pronos-ligne--lecture">
              <div class="er-pronos-classe">${escapeHtml(classe)}</div>
              <div class="er-pronos-cell" style="grid-column: 2 / -1;">
                <span class="er-pronos-cell-label">Indisponible</span>
                <span class="er-pronos-cell-val">La liste des skippers ne s'est pas chargée. Recharge la page dans un instant.</span>
              </div>
            </div>`;
        }
        const options = plateau.map(sk => ({ v: sk.id, l: sk.name, img: sk.photo || '' }));
        const photoDe = (id) => (plateau.find(s => s.id === id) || {}).photo || '';
        const d = this._pronosDecoupe(mien && mien.tempsCourseSec);

        












        const etapeDepart = mien ? 'recap' : 'skipper';
        return `
          <div class="er-prono-parcours" data-prono-ligne="${escapeHtml(classe)}"
               data-etape="${etapeDepart}" data-fait="${mien ? '1' : '0'}">

            <section class="er-prono-etape" data-etape-nom="skipper" aria-label="Choix du vainqueur"
                     ${etapeDepart === 'skipper' ? '' : 'hidden'}>
              <span class="er-pronos-cell-label" id="er-prono-lbl-sk-${slugCourt}">Qui gagne la Route du Rhum ?</span>
              ${this._buildPick('skipper', options, 'Choisis un skipper', 'er-prono-lbl-sk-' + slugCourt, 'data-prono')}
              <button class="er-btn er-btn--primary er-prono-suivant" type="button"
                      data-action="prono-suivant" disabled>Continuer</button>
            </section>

            <section class="er-prono-etape" data-etape-nom="temps" aria-label="Temps de course"
                     ${etapeDepart === 'temps' ? '' : 'hidden'}>
              <button class="er-prono-choisi" type="button" data-action="prono-retour"
                      aria-label="Changer de skipper">
                <img class="er-prono-choisi-img" data-prono-choisi-img alt=""
                     src="${escapeHtml(mien ? photoDe(mien.skipperId) : '')}">
                <span class="er-prono-choisi-nom" data-prono-choisi-nom>${escapeHtml(mien?.prenomNom || '')}</span>
                <span class="er-prono-choisi-chg">changer</span>
              </button>
              <span class="er-pronos-cell-label" id="er-prono-lbl-dt-${slugCourt}">En combien de temps ?</span>
              <div class="er-prono-duree" role="group" aria-labelledby="er-prono-lbl-dt-${slugCourt}">
                ${this._pronosChampDuree('jours',    'j',   d.j, 60, slugCourt)}
                ${this._pronosChampDuree('heures',   'h',   d.h, 23, slugCourt)}
                ${this._pronosChampDuree('minutes',  'min', d.m, 59, slugCourt)}
                ${this._pronosChampDuree('secondes', 's',   d.s, 59, slugCourt)}
              </div>
              <button class="er-btn er-btn--primary er-pronos-valider" type="button"
                      data-action="valider-prono" data-classe="${escapeHtml(classe)}">Valider mon pronostic</button>
              <div class="er-pronos-etat" data-prono-etat></div>
            </section>

            <section class="er-prono-etape er-prono-etape--recap" data-etape-nom="recap"
                     aria-label="Mon pronostic" ${etapeDepart === 'recap' ? '' : 'hidden'}>
              ${this._pronoBulletin(mien, plateau, classe)}
            </section>
          </div>`;
      }).join('');

      return `
        <div class="er-widget er-widget--pronos" data-slot="pronos" role="region" aria-label="Concours de pronostics">
          ${this._bandeauDemo(etat, 'pronostics')}
          <div class="er-pronos-tete">
            <div>
              <div class="er-pronos-eyebrow">Concours de pronostics</div>
              <h3 class="er-pronos-titre">${escapeHtml(this._titreSansDoublon(etat.libelle, 'Concours de pronostics', 'Qui gagne, et quand ?'))}</h3>
            </div>
            <!-- ⚠️ La jauge ne compte que s'il y a plusieurs classes. Sur le
                 concours general, elle affichait « 1/1 CLASSES », ce qui ne dit
                 rien a personne : on ne mesure pas une progression sur une seule
                 etape. Vu a l'ecran, pas au code. -->
            <div class="er-pronos-jauge" ${etat.classes.length > 1 ? '' : 'hidden'}>
              <span class="er-pronos-jauge-val">${deposes}<span class="er-pronos-jauge-tot">/${etat.classes.length}</span></span>
              <span class="er-pronos-jauge-lab">classes</span>
            </div>
          </div>
          <p class="er-pronos-sub" data-pronos-sub>${escapeHtml(entete)}</p>
          <div class="er-pronos-grille">${lignes}</div>
          ${this._pronosSocial(etat)}
        </div>`;
    }

    



















    _pronoBulletin(mien, plateau, classe) {
      const en = this._lang() === 'en';
      if (!mien) return '';
      const sk = (plateau || []).find(x => x.id === mien.skipperId) || {};
      


      const cfg = findClassConfig(sk.class || classe);
      const col = cfg && cfg.col ? cfg.col : 'var(--er-teal)';
      








      const sous = sk.bateau || '';
      const photo = sk.photoCarte || sk.photo || '';
      return `
        <div class="er-prono-bulletin" style="--pc: ${escapeHtml(col)}">
          ${photo
            ? `<span class="er-prono-bull-photo" data-prono-recap-img
                     style="background-image:url('${escapeHtml(photo)}')"></span>`
            : '<span class="er-prono-bull-photo er-prono-bull-photo--vide" data-prono-recap-img></span>'}
          <div class="er-prono-bull-ident">
            <span class="er-prono-bull-eyebrow">${en ? 'My prediction' : 'Mon pronostic'}${sk.class ? ' · ' + escapeHtml(sk.class) : ''}</span>
            <b class="er-prono-bull-nom" data-prono-recap-nom>${escapeHtml(mien.prenomNom || sk.name || '')}</b>
            ${sous ? `<span class="er-prono-bull-sous">${escapeHtml(sous)}</span>` : ''}
          </div>
          <div class="er-prono-bull-temps">
            <span class="er-prono-bull-temps-lab">${en ? 'Race time' : 'Temps de course'}</span>
            <span class="er-prono-bull-temps-val" data-prono-recap-temps>${escapeHtml(mien.tempsCourse || '')}</span>
          </div>
          <div class="er-prono-bull-pied">
            <button class="er-btn er-btn--ghost er-prono-modifier" type="button" data-action="prono-modifier">
              ${en ? 'Change my prediction' : 'Modifier mon pronostic'}
            </button>
            <span class="er-prono-bull-note">${en
              ? 'You can change your mind until the starting gun.'
              : 'Tu peux changer d’avis jusqu’au coup de canon.'}</span>
          </div>
        </div>`;
    }

    









    _pronosSocial(etat) {
      const en = this._lang() === 'en';
      const part = etat && etat.participation;
      const cons = etat && etat.consensus;
      const total = part && Number(part.total) > 0 ? Number(part.total) : 0;

      if (!cons) {
        if (!total) return '';
        const nb = total.toLocaleString('fr-FR');
        return `
          <p class="er-pronos-participation">
            <b>${nb}</b> ${total > 1
              ? (en ? 'fans have already played.' : 'fans ont déjà joué.')
              : (en ? 'fan has already played.' : 'fan a déjà joué.')}
            <span>${en ? 'The consensus is revealed at closing.' : 'Le consensus se dévoile à la clôture.'}</span>
          </p>`;
      }

      


      const blocs = Object.entries(cons).map(([cl, v]) => {
        const top = Array.isArray(v.top) ? v.top : [];
        if (!top.length) return '';
        const cfg = findClassConfig(cl);
        const col = cfg && cfg.col ? cfg.col : 'var(--er-teal)';
        const mien = (etat.mesChoix && etat.mesChoix[cl]) || null;
        const rangs = top.map(t => `
          <div class="er-cons-rang${mien && mien.skipperId === t.skipperId ? ' est-moi' : ''}">
            <span class="er-cons-nom">${escapeHtml(t.prenomNom || '')}</span>
            <span class="er-cons-piste"><i style="width:${Math.max(2, Math.min(100, Number(t.pct) || 0))}%"></i></span>
            <span class="er-cons-pct">${Number(t.pct) || 0} %</span>
          </div>`).join('');
        return `
          <div class="er-cons-bloc" style="--pc: ${escapeHtml(col)}">
            <div class="er-cons-tete">
              <span class="er-cons-classe">${escapeHtml(cl)}</span>
              <span class="er-cons-n">${Number(v.total) || 0} ${en ? 'predictions' : 'pronostics'}</span>
            </div>
            ${rangs}
            ${v.tempsMedian ? `<p class="er-cons-median">${en ? 'Median predicted time' : 'Temps médian pronostiqué'} : <b>${escapeHtml(v.tempsMedian)}</b></p>` : ''}
          </div>`;
      }).filter(Boolean).join('');

      if (!blocs) return '';
      return `
        <div class="er-cons">
          <div class="er-cons-entete">
            <span class="er-cons-titre">${en ? 'What the fans predicted' : 'Ce que les fans ont pronostiqué'}</span>
            ${total ? `<span class="er-cons-total">${total.toLocaleString('fr-FR')} ${en ? 'predictions' : 'pronostics'}</span>` : ''}
          </div>
          <div class="er-cons-grille">${blocs}</div>
        </div>`;
    }

    

















    _titreSansDoublon(libelle, surtitre, repli) {
      const plier = (x) => String(x || '')
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .toLowerCase().replace(/[^a-z0-9]+/g, '');
      const l = String(libelle || '').trim();
      if (!l) return repli;
      return plier(l) === plier(surtitre) ? repli : l;
    }

    _pronosDate(iso) {
      if (!iso) return '';
      try {
        return new Date(iso).toLocaleDateString(this._lang() === 'en' ? 'en-GB' : 'fr-FR',
          { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
      } catch (e) { return ''; }
    }

    _wirePronos() {
      const w = this.querySelector('.er-widget--pronos');
      if (!w) return;
       
       
      this._wirePicks(w);
      this._pronosPrefill();
      this._pronosPartirCompte();
      w.addEventListener('click', (e) => {
        const b = e.target.closest('[data-action]');
        if (!b) return;
        const ligne = b.closest('[data-prono-ligne]');
        if (b.dataset.action === 'valider-prono') return this._pronoValider(b.dataset.classe);
        if (b.dataset.action === 'prono-suivant')  return this._pronoEtape(ligne, 'temps');
        if (b.dataset.action === 'prono-retour')   return this._pronoEtape(ligne, 'skipper');
        if (b.dataset.action === 'prono-modifier') return this._pronoEtape(ligne, 'temps');
      });

      



      w.querySelectorAll('[data-prono-ligne]').forEach(ligne => {
        const champ = ligne.querySelector('[data-prono="skipper"]');
        const suivant = ligne.querySelector('[data-action="prono-suivant"]');
        const refleter = () => {
          const id = champ?.value || '';
          if (suivant) suivant.disabled = !id;
          const opt = id && ligne.querySelector(`.er-pick-opt[data-val="${CSS.escape(id)}"]`);
          const nom = opt ? opt.textContent.trim() : '';
          const img = opt ? (opt.querySelector('img')?.getAttribute('src') || '') : '';
          ligne.querySelectorAll('[data-prono-choisi-nom],[data-prono-recap-nom]').forEach(e2 => { e2.textContent = nom; });
          ligne.querySelectorAll('[data-prono-choisi-img],[data-prono-recap-img]').forEach(e2 => {
            if (img) e2.setAttribute('src', img);
            e2.hidden = !img;
          });
        };
        champ?.addEventListener('input', refleter);
        refleter();

        


        const cases = [...ligne.querySelectorAll('[data-prono-duree]')];
        cases.forEach((c, i) => {
          c.addEventListener('input', () => {
            const propre = c.value.replace(/[^0-9]/g, '').slice(0, 2);
            if (propre !== c.value) c.value = propre;
            const max = Number(c.dataset.max);
            if (propre !== '' && Number(propre) > max) c.value = String(max);
            if (c.value.length === 2 && i < cases.length - 1) cases[i + 1].focus();
          });
           
           
          c.addEventListener('keydown', (ev) => {
            if (ev.key === 'Backspace' && c.value === '' && i > 0) { ev.preventDefault(); cases[i - 1].focus(); }
          });
        });
      });
       
       
      w.querySelectorAll('[data-prono-ligne]').forEach(ligne => {
        ligne.querySelectorAll('[data-prono]').forEach(champ => {
          champ.addEventListener('input', () => {
            const et = ligne.querySelector('[data-prono-etat]');
            if (et) { et.textContent = ''; et.dataset.tone = ''; }
          });
        });
      });
    }

     
     
    _pronosPrefill() {
      const etat = this._pronosEtat();
      const w = this.querySelector('.er-widget--pronos');
      if (!etat || !w) return;
      Object.entries(etat.mesChoix || {}).forEach(([classe, choix]) => {
        const ligne = w.querySelector(`[data-prono-ligne="${CSS.escape(classe)}"]`);
        if (!ligne || !choix) return;
        const poser = (champ, valeur) => {
          const input = ligne.querySelector(`[data-prono="${champ}"]`);
          if (input && valeur) input.value = valeur;
        };
        poser('skipper', choix.skipperId);
         
         
        const d = this._pronosDecoupe(choix.tempsCourseSec);
        [['jours', d.j], ['heures', d.h], ['minutes', d.m], ['secondes', d.s]].forEach(([n, v]) => {
          const c = ligne.querySelector('[data-prono-duree="' + n + '"]');
          if (c && v !== '') c.value = v;
        });
      });
      this._pronosSyncPicks(w);
    }

     
     
     
    _pronosSyncPicks(racine) {
      racine.querySelectorAll('.er-pick').forEach(pick => {
        const hidden = pick.querySelector('input[data-pick-input]');
        const val = pick.querySelector('[data-pick-val]');
        if (!hidden || !val || !hidden.value) return;
        const opt = this._pickUn(pick, `.er-pick-opt[data-val="${CSS.escape(hidden.value)}"]`);
        if (!opt) return;
        this._pickTous(pick, '.er-pick-opt').forEach(o => o.setAttribute('aria-selected', 'false'));
        opt.setAttribute('aria-selected', 'true');
        





        val.textContent = opt.dataset.nom || opt.textContent;
        val.dataset.empty = 'false';
      });
    }

    






    _pronoEtape(ligne, nom) {
      if (!ligne || ligne.dataset.etape === nom) return;
      ligne.dataset.etape = nom;
      ligne.querySelectorAll('.er-prono-etape').forEach(sec => {
        const actif = sec.dataset.etapeNom === nom;
        sec.hidden = !actif;
        if (!actif) return;
        sec.classList.remove('er-prono-etape--entre');
        void sec.offsetWidth;
        sec.classList.add('er-prono-etape--entre');
        








        sec.addEventListener('animationend', () => sec.classList.remove('er-prono-etape--entre'), { once: true });
      });
       
       
      if (nom === 'temps') ligne.querySelector('[data-prono-duree="jours"]')?.focus();
    }

    _pronoValider(classe) {
      const ligne = this.querySelector(`[data-prono-ligne="${CSS.escape(classe)}"]`);
      if (!ligne) return;
      const skipperId = ligne.querySelector('[data-prono="skipper"]')?.value || '';
      const etat      = ligne.querySelector('[data-prono-etat]');
      const bouton    = ligne.querySelector('[data-action="valider-prono"]');

      const lire = (nom) => {
        const c = ligne.querySelector(`[data-prono-duree="${nom}"]`);
        const v = (c?.value || '').trim();
        return v === '' ? 0 : Number(v);
      };
      const duree = { jours: lire('jours'), heures: lire('heures'),
                      minutes: lire('minutes'), secondes: lire('secondes') };

      const dire = (msg) => {
        if (!etat) return;
        etat.textContent = msg; etat.dataset.tone = 'error'; this._i18n(etat);
      };
      if (!skipperId) return dire('Choisis d\'abord un skipper.');
      if (!Object.values(duree).every(v => Number.isFinite(v) && v >= 0)) return dire('Le temps doit être en chiffres.');
      if (duree.heures > 23 || duree.minutes > 59 || duree.secondes > 59) return dire('Heures sous 24, minutes et secondes sous 60.');
       
       
      const total = duree.jours * 86400 + duree.heures * 3600 + duree.minutes * 60 + duree.secondes;
      if (total < 2 * 86400) return dire('Personne ne traverse en moins de deux jours.');
      if (total > 60 * 86400) return dire('Deux mois, c\'est trop long.');

      if (bouton) bouton.disabled = true;
      if (etat) { etat.textContent = 'Envoi…'; etat.dataset.tone = ''; this._i18n(etat); }

      this.dispatchEvent(new CustomEvent('er-pronostic', { bubbles: true, composed: true, detail: {
        action: 'set', classe, skipperId, tempsCourse: duree
      } }));
    }

     
    pronoResultat(res) {
      const classe = res?.classe;
      const ligne = classe ? this.querySelector(`[data-prono-ligne="${CSS.escape(classe)}"]`) : null;
      if (!ligne) return;
      const etat   = ligne.querySelector('[data-prono-etat]');
      const bouton = ligne.querySelector('[data-action="valider-prono"]');
      if (bouton) bouton.disabled = false;

      if (res?.ok) {
        if (etat) { etat.textContent = ''; etat.dataset.tone = ''; }
        ligne.dataset.fait = '1';
         
         
         
        const t = ligne.querySelector('[data-prono-recap-temps]');
        if (t) {
          const lu = (n) => (ligne.querySelector(`[data-prono-duree="${n}"]`)?.value || '0').padStart(2, '0');
          t.textContent = res.tempsCourse
            || (Number(lu('jours')) + ' j ' + lu('heures') + ' h ' + lu('minutes') + ' min ' + lu('secondes') + ' s');
        }
        this._pronoEtape(ligne, 'recap');
        this._pronosMemoriser(classe, ligne);
        this._pronosMajJauge();
        return;
      }
      const messages = {
        concours_ferme:     'Le vote est clos, le départ est donné.',
        pas_encore_ouvert:  'Le concours n\'est pas encore ouvert.',
        skipper_hors_classe:'Ce skipper ne court pas dans cette classe.',
        skipper_inconnu:    'Ce skipper est introuvable.',
        temps_invalide:     'Ce temps de course n\'est pas valable.'
      };
      if (etat) {
        etat.textContent = messages[res?.raison] || 'Ça n\'a pas été enregistré. Réessaie.';
        etat.dataset.tone = 'error';
        this._i18n(etat);
      }
    }

     
     
     
    _pronosMemoriser(classe, ligne) {
      const etat = this._pronosEtat();
      if (!etat || !classe || !ligne) return;
      const skipperId = ligne.querySelector('[data-prono="skipper"]')?.value || '';
      const opt = ligne.querySelector('[data-prono="skipper"]')?.closest('.er-pick')
                       ?.querySelector('.er-pick-opt[aria-selected="true"]');
      const nb = (n) => {
        const v = (ligne.querySelector('[data-prono-duree="' + n + '"]')?.value || '').trim();
        return v === '' ? 0 : Number(v) || 0;
      };
      const sec = nb('jours') * 86400 + nb('heures') * 3600 + nb('minutes') * 60 + nb('secondes');
      etat.mesChoix = etat.mesChoix || {};
      etat.mesChoix[classe] = {
        skipperId,
        prenomNom: opt ? opt.textContent.trim() : (etat.mesChoix[classe]?.prenomNom || ''),
        tempsCourseSec: sec > 0 ? sec : null
      };
    }

     
     
    _pronosDureeCourte(ms) {
      const t = Math.max(0, Math.floor(ms / 1000));
      const m = Math.floor(t / 60), sec = t % 60;
      return m + ' min ' + String(sec).padStart(2, '0') + ' s';
    }

     
     
     
     
     
     
     
    _pronosPartirCompte() {
      const etat = this._pronosEtat();
      clearInterval(this._pronosCompteTimer);
      this._pronosCompteTimer = null;
      if (!etat || etat.phase !== 'ouvert' || !(etat.fermeDansMs > 0)) return;

       
       
       
       
       
       
      const ALERTE = 3_600_000, FINAL = 120_000;

      this._pronosFin = Date.now() + etat.fermeDansMs;
      let cadence = null;

      const battre = () => {
        const w = this.querySelector('.er-widget--pronos');
        const sub = w && w.querySelector('[data-pronos-sub]');
        if (!w || !sub) { clearInterval(this._pronosCompteTimer); return; }
        const reste = this._pronosFin - Date.now();

        if (reste <= 0) {
          clearInterval(this._pronosCompteTimer);
          this._pronosCompteTimer = null;
           
           
           
          etat.phase = 'ferme';
          etat.fermeDansMs = 0;
          this._pronosRebuild();
          return;
        }

        const en = this._lang() === 'en';
        if (reste <= FINAL) {
          sub.textContent = en ? `Closing in ${this._pronosDureeCourte(reste)}`
                               : `Fermeture dans ${this._pronosDureeCourte(reste)}`;
          sub.dataset.urgent = 'final';
        } else if (reste <= ALERTE) {
           
           
          const min = Math.ceil(reste / 60000);
          sub.textContent = en ? `Only ${min} min left to predict`
                               : `Plus que ${min} min pour pronostiquer`;
          sub.dataset.urgent = 'alerte';
        } else {
          sub.textContent = en ? `Closes at the start, in ${this._pronosDuree(reste)}`
                               : `Fermeture au départ, dans ${this._pronosDuree(reste)}`;
          sub.dataset.urgent = 'non';
        }

         
         
         
        const voulue = reste <= FINAL ? 1000 : (reste <= ALERTE ? 15000 : 30000);
        if (voulue !== cadence) {
          cadence = voulue;
          clearInterval(this._pronosCompteTimer);
          this._pronosCompteTimer = setInterval(battre, cadence);
        }
      };

      battre();
    }

     
     
    _pronosRebuild() {
      const w = this.querySelector('.er-widget--pronos');
      if (!w) return;
      const html = this._buildPronosWidget();
      if (!html) { w.remove(); return; }
      const box = document.createElement('div');
      box.innerHTML = html;
      const neuf = box.firstElementChild;
      if (!neuf) return;
      w.replaceWith(neuf);
      this._i18n(neuf);
       
       
      this._wirePronos();
    }

     
     
     
    _pronosMajJauge() {
      const w = this.querySelector('.er-widget--pronos');
      const val = w && w.querySelector('.er-pronos-jauge-val');
      if (!val) return;
      const total = w.querySelectorAll('[data-prono-ligne]').length;
      const faits = w.querySelectorAll('[data-prono-ligne][data-fait="1"]').length;
      val.innerHTML = faits + `<span class="er-pronos-jauge-tot">/${total}</span>`;
    }

    _roueEtat() {
      const r = this._payload?.roue;
      return (r && r.disponible && Array.isArray(r.segments) && r.segments.length) ? r : null;
    }

     
     
     
     
     
     
     
     
     
     
     
     
    _roueTeinte(i, n) {
      const t = ['var(--er-teal)', 'var(--er-amber)', 'var(--er-white)'];
      if (!(n > 0)) return t[i % t.length];
      let k = i % t.length;
      if (i === n - 1 && n > 1) {
        const avant = (n - 2) % t.length;
        const premiere = 0;
        if (k === avant || k === premiere) k = [0, 1, 2].find(x => x !== avant && x !== premiere) ?? k;
      }
      return t[k];
    }

     
     
    _rouePoint(cx, cy, r, deg) {
      const a = (deg - 90) * Math.PI / 180;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    }

     
     
     
    _roueLignes(libelle, maxCar) {
      const mots = String(libelle || '').trim().split(/\s+/).filter(Boolean);
      if (!mots.length) return [];
      const lignes = [];
      let courante = '', reste = false;
      for (let i = 0; i < mots.length; i++) {
        const essai = courante ? courante + ' ' + mots[i] : mots[i];
        if (essai.length <= maxCar) { courante = essai; continue; }
        if (courante) lignes.push(courante);
        courante = mots[i];
        if (lignes.length === 2) { reste = true; break; }
      }
      if (courante && lignes.length < 2) lignes.push(courante);
       
      const out = lignes.slice(0, 2).map(l => l.length > maxCar ? l.slice(0, maxCar - 1) + '…' : l);
       
      if (reste && out.length && !out[out.length - 1].endsWith('…')) {
        const d = out[out.length - 1];
        out[out.length - 1] = (d.length >= maxCar ? d.slice(0, maxCar - 1) : d) + '…';
      }
      return out;
    }

    _buildRoueWidget() {
      const etat = this._roueEtat();
       
       
      if (!etat) return '';

      const segs = etat.segments;
      const n = segs.length;
      const pas = 360 / n;
      const cx = 130, cy = 130, R = 122;

      const parts = segs.map((sg, i) => {
        const d0 = i * pas, d1 = (i + 1) * pas;
        const [x0, y0] = this._rouePoint(cx, cy, R, d0);
        const [x1, y1] = this._rouePoint(cx, cy, R, d1);
        const grand = pas > 180 ? 1 : 0;
        const chemin = `M ${cx} ${cy} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${R} ${R} 0 ${grand} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
         
        const mid = d0 + pas / 2;
        const [tx, ty] = this._rouePoint(cx, cy, R * 0.60, mid);
         
         
         
        let ang = mid - 90;
        if (mid > 180) ang += 180;
        const lignes = this._roueLignes(sg.libelle, 13);
         
        const dy0 = lignes.length > 1 ? -5 : 0;
        const tspans = lignes.map((l, k) =>
          `<tspan x="${tx.toFixed(2)}" dy="${k === 0 ? dy0 : 11}">${escapeHtml(l)}</tspan>`).join('');
        return `
          <path d="${chemin}" fill="${this._roueTeinte(i, n)}" stroke="rgba(255,255,255,.14)" stroke-width="1"/>
          <text x="${tx.toFixed(2)}" y="${ty.toFixed(2)}" class="er-roue-txt"
                transform="rotate(${ang.toFixed(2)} ${tx.toFixed(2)} ${ty.toFixed(2)})">${tspans}</text>`;
      }).join('');

      const dejaJoue = !etat.peutTourner;

      return `
        <div class="er-widget er-widget--roue" data-slot="roue" role="region" aria-label="La roue du jour">
          <div class="er-roue-inner">
            <div class="er-roue-plateau">
              <div class="er-roue-aiguille" aria-hidden="true"></div>
              <svg class="er-roue-svg" viewBox="0 0 260 260" data-roue-svg aria-hidden="true">
                <g data-roue-disque>${parts}</g>
                <circle cx="${cx}" cy="${cy}" r="26" fill="var(--er-bg-card)" stroke="rgba(255,255,255,.18)"/>
              </svg>
            </div>
            <div class="er-roue-texte">
              <div class="er-roue-eyebrow">La roue</div>
              <h3 class="er-roue-titre">Un tour, un seul</h3>
              <p class="er-roue-sub" data-roue-sub>${dejaJoue
                ? 'Tu as joué ton tour. Il n\'y en a qu\'un.'
                : 'Ton tour t\'attend. Tu ne l\'auras qu\'une fois, prends ton temps.'}</p>

              <div class="er-roue-resultat" data-roue-resultat ${dejaJoue ? '' : 'hidden'}>
                <div class="er-roue-resultat-lot" data-roue-lot>${escapeHtml(etat.dejaTire?.libelle || '')}</div>
                <div class="er-roue-resultat-msg" data-roue-msg></div>
              </div>

              <button class="er-btn er-btn--primary er-roue-btn" type="button"
                      data-action="tourner-roue" ${dejaJoue ? 'hidden' : ''}>
                Tourner la roue
              </button>

              ${this._roueRetrait(etat)}

              <div class="er-roue-compte" data-roue-compte ${dejaJoue ? '' : 'hidden'}></div>
              ${this._lienReglement('roue')}
            </div>
          </div>
        </div>`;
    }

    







    _roueRetrait(etat) {
      const gagne = etat && !etat.peutTourner && etat.dejaTire && etat.dejaTire.physique === true;
      const fait = etat && etat.retrait;
      return `
        <div class="er-roue-retrait" data-roue-retrait ${gagne ? '' : 'hidden'}>
          ${fait ? `
            <p class="er-roue-retrait-ok" data-roue-retrait-ok>
              ${fait === 'village' ? 'À récupérer à l\'espace presse, sur le village.' : 'On te l\'envoie. Merci !'}
            </p>` : `
            <p class="er-roue-retrait-q">Comment veux-tu le récupérer ?</p>
            <div class="er-roue-retrait-choix">
              <button class="er-btn er-roue-retrait-btn" type="button" data-retrait="village">Sur le village</button>
              <button class="er-btn er-roue-retrait-btn" type="button" data-retrait="envoi">Par la poste</button>
            </div>
            <div class="er-roue-adresse" data-roue-adresse hidden>
              <label class="er-roue-adresse-lbl" for="er-roue-adr">Ton adresse postale</label>
              <textarea class="er-roue-adresse-champ" id="er-roue-adr" rows="3" maxlength="400"
                        data-roue-adresse-champ autocomplete="street-address"
                        placeholder="Numéro, rue, code postal, ville"></textarea>
              <p class="er-roue-adresse-note">Elle sert à cet envoi, et à rien d'autre. Elle ne rejoint pas ton profil.</p>
              <button class="er-btn er-btn--primary" type="button" data-action="roue-envoyer-adresse">Valider l'adresse</button>
            </div>
            <div class="er-roue-retrait-etat" data-roue-retrait-etat></div>`}
        </div>`;
    }

    _wireRoue() {
      const w = this.querySelector('.er-widget--roue');
      if (!w) return;
      w.querySelector('[data-action="tourner-roue"]')?.addEventListener('click', () => this._roueTourner());

       
       
       
      w.addEventListener('click', (e) => {
        const b = e.target.closest('[data-retrait]');
        if (b) {
          const mode = b.dataset.retrait;
          w.querySelectorAll('[data-retrait]').forEach(x => x.classList.toggle('est-actif', x === b));
          const bloc = w.querySelector('[data-roue-adresse]');
          if (bloc) bloc.hidden = mode !== 'envoi';
          if (mode === 'village') this._roueRetraitEnvoyer('village', '');
          else w.querySelector('[data-roue-adresse-champ]')?.focus();
          return;
        }
        if (e.target.closest('[data-action="roue-envoyer-adresse"]')) {
          const adr = (w.querySelector('[data-roue-adresse-champ]')?.value || '').trim();
          if (adr.length < 10) return this._roueRetraitDire('Il manque des éléments dans cette adresse.', 'error');
          this._roueRetraitEnvoyer('envoi', adr);
        }
      });

       
       
       
      const etat = this._roueEtat();
      if (etat && !etat.peutTourner && typeof etat.dejaTire?.index === 'number' && etat.dejaTire.index >= 0) {
        this._rouePoser(etat.dejaTire.index, false);
        this._rouePartirCompte(etat.disparaitDansMs);
      }
    }

    


    _roueOuvrirRetrait(lot) {
      const bloc = this.querySelector('[data-roue-retrait]');
      if (!bloc) return;
      bloc.hidden = !(lot && lot.physique === true);
    }

    _roueRetraitDire(msg, ton) {
      const e = this.querySelector('[data-roue-retrait-etat]');
      if (!e) return;
      e.textContent = msg; e.dataset.tone = ton || ''; this._i18n(e);
    }

    _roueRetraitEnvoyer(mode, adresse) {
      this._roueRetraitDire('Envoi…', '');
      this.dispatchEvent(new CustomEvent('er-roue-retrait', {
        bubbles: true, composed: true, detail: { mode, adresse }
      }));
    }

     
    roueRetraitResultat(res) {
      const bloc = this.querySelector('[data-roue-retrait]');
      if (!bloc) return;
      if (res?.ok) {
        bloc.innerHTML = '<p class="er-roue-retrait-ok">'
          + (res.mode === 'village' ? 'À récupérer à l\'espace presse, sur le village.' : 'On te l\'envoie. Merci !')
          + '</p>';
        this._i18n(bloc);
        return;
      }
      const messages = {
        adresse_incomplete: 'Il manque des éléments dans cette adresse.',
        lot_sans_retrait:   'Ce lot n\'a rien à retirer.',
        aucun_tour:         'Aucun tour trouvé.'
      };
      this._roueRetraitDire(messages[res?.raison] || 'Ça n\'a pas été enregistré. Réessaie.', 'error');
    }

     
     
    _rouePoser(index, anime) {
      const disque = this.querySelector('[data-roue-disque]');
      const etat = this._roueEtat();
       
       
      if (!disque || !etat || !(index >= 0) || index >= etat.segments.length) return;
      const pas = 360 / etat.segments.length;
       
      const cible = 360 - (index + 0.5) * pas;
      const reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const tours = (anime && !reduit) ? 5 : 0;
       
       
      this._roueTours = (this._roueTours || 0) + tours;
      disque.style.transition = (anime && !reduit) ? 'transform 4.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
      disque.style.transform = `rotate(${this._roueTours * 360 + cible}deg)`;
    }

    _roueTourner() {
      const btn = this.querySelector('[data-action="tourner-roue"]');
      if (!btn || btn.disabled) return;
      btn.disabled = true;
      btn.textContent = 'Ça tourne…';
      this._i18n(btn);
       
       
      let source = '';
      try { source = new URLSearchParams(window.location.search).get('src') || ''; } catch (e) {   }
      this.dispatchEvent(new CustomEvent('er-roue-tourner', { bubbles: true, composed: true, detail: { source } }));
    }

     
    roueResultat(res) {
      const w = this.querySelector('.er-widget--roue');
      if (!w) return;
      const btn = w.querySelector('[data-action="tourner-roue"]');
      const sub = w.querySelector('[data-roue-sub]');

      if (!res || res.ok !== true) {
        if (btn) { btn.disabled = false; btn.textContent = 'Tourner la roue'; this._i18n(btn); }
        if (sub) { sub.textContent = 'La roue n\'a pas répondu. Réessaie dans un instant.'; this._i18n(sub); }
        return;
      }

      const index = typeof res.lot?.index === 'number' ? res.lot.index : -1;
      this._rouePoser(index, !res.deja);

       
       
      const reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const attente = (res.deja || reduit) ? 0 : 4300;
      clearTimeout(this._roueTimer);
      this._roueTimer = setTimeout(() => {
        const boite = w.querySelector('[data-roue-resultat]');
        const lot   = w.querySelector('[data-roue-lot]');
        const msg   = w.querySelector('[data-roue-msg]');
        if (lot) lot.textContent = res.lot?.libelle || '';
        if (msg) msg.textContent = res.lot?.message || '';
        if (boite) { boite.hidden = false; this._i18n(boite); }
        if (sub) { sub.textContent = 'Tu as joué ton tour. Il n\'y en a qu\'un.'; this._i18n(sub); }
        if (btn) btn.hidden = true;
        this._rouePartirCompte(res.disparaitDansMs);
        this._roueOuvrirRetrait(res.lot);
      }, attente);
    }

     
     
    _rouePartirCompte(ms) {
       
       
       
      clearInterval(this._roueCompteTimer);
      const boite = this.querySelector('[data-roue-compte]');
      if (!boite || !(ms > 0)) return;
      let reste = ms;
      const peindre = () => {
        if (reste <= 0) {
          clearInterval(this._roueCompteTimer);
          boite.textContent = 'La roue a disparu de ton espace.';
          this._i18n(boite);
          return;
        }
        const h = Math.floor(reste / 3_600_000);
        const m = Math.floor((reste % 3_600_000) / 60_000);
        const en = this._lang() === 'en';
        const duree = h > 0
          ? (en ? `${h}h ${String(m).padStart(2, '0')}` : `${h} h ${String(m).padStart(2, '0')}`)
          : (en ? `${m} min` : `${m} min`);
        boite.textContent = (en ? 'Visible for another ' : 'Encore visible ') + duree;
        reste -= 60_000;
      };
      boite.hidden = false;
      peindre();
      this._roueCompteTimer = setInterval(peindre, 60_000);
    }

    













    _packClasses() {
      const p = this._payload || {};
      const enStock = p.packFan && Array.isArray(p.packFan.classesDisponibles)
        ? p.packFan.classesDisponibles.filter(Boolean)
        : null;
      if (enStock) return enStock;

       
       
      const brut = (p.catalogs && p.catalogs.classesRDR) || p.classesRDR || p.skipperCatalogClasses;
      return Array.isArray(brut)
        ? brut.map(c => (typeof c === 'string' ? c : c?.nom)).filter(Boolean)
        : [];
    }

    


    _packClasseSuggeree() {
      const p = this._payload || {};
      const id = p.monVoteSkipperId || (p.skippersSuivis && p.skippersSuivis[0] && p.skippersSuivis[0].id);
      if (!id) return '';
      const sk = (p.skipperCatalog || []).find(s => s.id === id);
      const dispo = this._packClasses();
      return sk && dispo.includes(sk.class) ? sk.class : '';
    }

    



































    _buildPackFan() {
      const classes = this._packClasses().map(n => ({ v: n, l: n }));
      return `
        <div class="er-pack" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="er-pack-title">
          <div class="er-pack-backdrop" data-action="close-pack"></div>
          <div class="er-pack-panel">
            <button class="er-pack-close" type="button" data-action="close-pack" aria-label="Fermer">${ICON_CLOSE}</button>
            <div class="er-pack-eyebrow">Pack Fan</div>
            <h2 class="er-pack-title" id="er-pack-title">Ton pack, offert</h2>
            <p class="er-pack-sub">Un code à saisir dans Virtual Regatta, pour courir la Route du Rhum aux couleurs de TyMAL.</p>

            <div class="er-pack-alert" data-pack-alert data-tone="" role="status" aria-live="polite" hidden>
              <span class="er-pack-alert-ico" data-pack-alert-ico aria-hidden="true"></span>
              <div class="er-pack-alert-body">
                <strong class="er-pack-alert-title" data-pack-alert-title></strong>
                <span class="er-pack-alert-text" data-pack-alert-text></span>
              </div>
            </div>

            <ul class="er-pack-dons" data-pack-dons>
              <li class="er-pack-don">
                <span class="er-pack-don-ico" aria-hidden="true">${ICON_SPARK}</span>
                <span class="er-pack-don-txt"><strong>La livrée TyMAL</strong><span>La mascotte de la course sur ton bateau, pendant toute l'épreuve.</span></span>
              </li>
              <li class="er-pack-don">
                <span class="er-pack-don-ico" aria-hidden="true">${ICON_CADEAU}</span>
                <span class="er-pack-don-txt"><strong>Une surprise en plus</strong><span>Une ou deux options de performance, et le Full Pack pour quelques-uns.</span></span>
              </li>
            </ul>

            <div class="er-pack-recu" data-pack-code hidden>
              <div class="er-pack-code">
                <span class="er-pack-code-label">Ton code Virtual Regatta</span>
                <span class="er-pack-code-classe" data-pack-code-classe hidden></span>
                <output class="er-pack-code-value" data-pack-code-value></output>
                <button class="er-pack-copier" type="button" data-action="copy-pack-code">
                  <span class="er-pack-copier-ico" aria-hidden="true" data-pack-copier-ico>${ICON_COPIER}</span><span data-pack-copier-txt>Copier le code</span>
                </button>
              </div>

              <p class="er-pack-activation" data-pack-activation></p>

              <div class="er-pack-ou">
                <span class="er-pack-label">Où le saisir</span>
                <ol class="er-pack-etapes">
                  <li data-pack-etape-course></li>
                  <li>En bas de la fiche de la course, colle ton code dans le champ « Code partenaire ».</li>
                  <li>Déjà inscrit ? Tu peux aussi le saisir plus tard, depuis le menu de l'écran de jeu.</li>
                </ol>
              </div>

              <p class="er-pack-attention">
                <span class="er-pack-attention-ico" aria-hidden="true">${ICON_INFO}</span>
                <span>Un seul code partenaire par course. Si tu en saisis un autre, celui-ci est annulé avec ses avantages.</span>
              </p>

              <div class="er-pack-liens">
                <a class="er-btn er-btn--primary er-pack-jouer" data-pack-lien="jeu" href="#" target="_blank" rel="noopener" hidden>
                  <span>Jouer sur Virtual Regatta</span>${ICON_ARROW_RIGHT}
                </a>
                <a class="er-pack-aide" data-pack-lien="aide" href="#" target="_blank" rel="noopener" hidden>Comment utiliser mon code</a>
              </div>

              <span class="er-pack-code-hint">Ton code reste ici. Tu le retrouveras en revenant sur cette page.</span>
            </div>

            <form class="er-pack-form" data-pack-form novalidate>
              <div class="er-pack-regle">
                <strong>Un seul code, valable sur une seule course.</strong>
                <span>Chaque classe a sa propre course dans le jeu. Choisis celle sur laquelle tu vas jouer, ton code ne marchera que là.</span>
              </div>

              <div class="er-pack-field">
                <span class="er-pack-label" id="er-pack-lbl-classe">Ta course sur Virtual Regatta</span>
                ${this._buildPick('classe', classes, 'Choisis ta classe', 'er-pack-lbl-classe', 'data-pack')}
                <span class="er-pack-err" data-pack-err role="alert" hidden>Choisis une classe pour recevoir ton code.</span>
              </div>

              <fieldset class="er-pack-quali">
                <legend class="er-pack-quali-legend">Trois questions, si tu veux bien <span class="er-pack-optionnel">facultatif</span></legend>

                <div class="er-pack-q">
                  <span class="er-pack-q-label">Tu viens au village de Saint-Malo ?</span>
                  <div class="er-pack-choices" role="group" aria-label="Tu viens au village de Saint-Malo ?">
                    <button type="button" class="er-pack-choice" data-q="stmalo" data-val="oui" aria-pressed="false">Oui</button>
                    <button type="button" class="er-pack-choice" data-q="stmalo" data-val="non" aria-pressed="false">Non</button>
                  </div>
                </div>

                <div class="er-pack-q">
                  <span class="er-pack-q-label">Tu seras en Guadeloupe pour l'arrivée ?</span>
                  <div class="er-pack-choices" role="group" aria-label="Tu seras en Guadeloupe pour l'arrivée ?">
                    <button type="button" class="er-pack-choice" data-q="guadeloupe" data-val="oui" aria-pressed="false">Oui</button>
                    <button type="button" class="er-pack-choice" data-q="guadeloupe" data-val="non" aria-pressed="false">Non</button>
                  </div>
                </div>

                <div class="er-pack-q">
                  <span class="er-pack-q-label">Tu navigues ?</span>
                  <div class="er-pack-choices" role="group" aria-label="Tu navigues ?">
                    <button type="button" class="er-pack-choice" data-q="voile" data-val="jamais" aria-pressed="false">Jamais</button>
                    <button type="button" class="er-pack-choice" data-q="voile" data-val="parfois" aria-pressed="false">De temps en temps</button>
                    <button type="button" class="er-pack-choice" data-q="voile" data-val="souvent" aria-pressed="false">Régulièrement</button>
                    <button type="button" class="er-pack-choice" data-q="voile" data-val="regate" aria-pressed="false">En régate</button>
                  </div>
                </div>
              </fieldset>

              <button class="er-btn er-btn--primary er-pack-save" type="button" data-action="save-pack">Recevoir mon code</button>
              <button class="er-pack-later" type="button" data-action="close-pack">Plus tard</button>
            </form>
          </div>
        </div>
      `;
    }

    _openPackFan() {
      const modal = this.querySelector('.er-pack');
      if (!modal) return;
       
       
      this._packAfficherCode(this._payload?.packFanCode || null);
      this._lastFocusedPack = document.activeElement;
      modal.dataset.open = 'true';
      modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      this._escPackHandler = (e) => {
        if (e.key === 'Escape' && modal.dataset.open === 'true') { e.stopPropagation(); this._closePackFan(); }
      };
      document.addEventListener('keydown', this._escPackHandler);
      const premier = modal.querySelector('.er-pick [data-pick-btn]');
      if (premier && !modal.querySelector('[data-pack-code]:not([hidden])')) setTimeout(() => premier.focus(), 60);
    }

    _closePackFan() {
      const modal = this.querySelector('.er-pack');
      if (!modal) return;
      modal.dataset.open = 'false';
      modal.setAttribute('aria-hidden', 'true');
      this._unlockBodyScroll();
      if (this._escPackHandler) {
        document.removeEventListener('keydown', this._escPackHandler);
        this._escPackHandler = null;
      }
      this._lastFocusedPack?.focus?.();
      this._lastFocusedPack = null;
    }

    _packAfficherCode(code) {
      const modal = this.querySelector('.er-pack');
      if (!modal) return;
      const boite = modal.querySelector('[data-pack-code]');
      const form  = modal.querySelector('[data-pack-form]');
      const dons  = modal.querySelector('[data-pack-dons]');
      const val   = modal.querySelector('[data-pack-code-value]');
      modal.dataset.etat = code ? 'code' : 'form';
      if (!code) {
        if (boite) boite.hidden = true;
        if (form) form.hidden = false;
        if (dons) dons.hidden = false;
        return;
      }
      const en = this._lang() === 'en';
      const pack = (this._payload && this._payload.packFan) || {};
      const classe = (pack.codes && pack.codes.vr && pack.codes.vr.classe) || '';
      if (val) val.textContent = code;

      const chip = modal.querySelector('[data-pack-code-classe]');
      if (chip) { chip.textContent = classe; chip.hidden = !classe; }

      


      const act = modal.querySelector('[data-pack-activation]');
      if (act) {
        act.textContent = Date.now() < PACK_VR_ACTIVATION
          ? (en ? 'Your code goes live on 1 October, when registrations open. It then stays valid for as long as the race is open, even after the start.'
                : "Ton code s'active le 1er octobre, à l'ouverture des inscriptions. Il reste ensuite valable tant que la course est ouverte, même après le départ.")
          : (en ? 'Your code is live. It stays valid for as long as the race is open, even after the start.'
                : 'Ton code est actif. Il reste valable tant que la course est ouverte, même après le départ.');
      }
      const etape = modal.querySelector('[data-pack-etape-course]');
      if (etape) {
        etape.textContent = classe
          ? (en ? `In Virtual Regatta, open the Route du Rhum ${classe} race.` : `Dans Virtual Regatta, ouvre la course ${classe} de la Route du Rhum.`)
          : (en ? 'In Virtual Regatta, open the Route du Rhum race for your class.' : 'Dans Virtual Regatta, ouvre la course de ta classe sur la Route du Rhum.');
      }

      const liens = pack.liens || {};
      modal.querySelectorAll('[data-pack-lien]').forEach(a => {
        const url = liens[a.dataset.packLien];
        const sur = typeof url === 'string' && /^https:\/\//.test(url);
        a.hidden = !sur;
        if (sur) a.href = url;
      });

      if (boite) boite.hidden = false;
      if (form) form.hidden = true;
      if (dons) dons.hidden = true;
      this._i18n(boite);
    }

    async _packCopier(bouton) {
      const modal = this.querySelector('.er-pack');
      const code = modal?.querySelector('[data-pack-code-value]')?.textContent || '';
      if (!code || !bouton) return;
      const txt = bouton.querySelector('[data-pack-copier-txt]');
      const ico = bouton.querySelector('[data-pack-copier-ico]');
      const en = this._lang() === 'en';
      let ok = false;
      try { await navigator.clipboard.writeText(code); ok = true; } catch (e) { ok = false; }
      if (!ok) {
         
         
        const out = modal.querySelector('[data-pack-code-value]');
        const sel = window.getSelection && window.getSelection();
        if (out && sel) { const r = document.createRange(); r.selectNodeContents(out); sel.removeAllRanges(); sel.addRange(r); }
      }
      if (txt) txt.textContent = ok ? (en ? 'Copied' : 'Copié') : (en ? 'Code selected' : 'Code sélectionné');
      if (ico && ok) ico.innerHTML = ICON_CHECK;
      bouton.classList.toggle('is-ok', ok);
      clearTimeout(this._packCopieTimer);
      this._packCopieTimer = setTimeout(() => {
        if (txt) txt.textContent = en ? 'Copy the code' : 'Copier le code';
        if (ico) ico.innerHTML = ICON_COPIER;
        bouton.classList.remove('is-ok');
      }, 2200);
    }

    _packAlerte(tone, titre, texte) {
      const modal = this.querySelector('.er-pack');
      const alert = modal && modal.querySelector('[data-pack-alert]');
      if (!alert) return;
      if (!tone) { alert.hidden = true; alert.dataset.tone = ''; return; }
      alert.hidden = false;
      alert.dataset.tone = tone;
      const ico = alert.querySelector('[data-pack-alert-ico]');
      if (ico) ico.innerHTML = tone === 'error' ? ICON_ALERT : ICON_CLOCK;
      const t = alert.querySelector('[data-pack-alert-title]');
      const x = alert.querySelector('[data-pack-alert-text]');
      if (t) t.textContent = titre || '';
      if (x) x.textContent = texte || '';
      this._i18n(alert);
    }

    _packSubmit() {
      const modal = this.querySelector('.er-pack');
      if (!modal) return;
      const champ  = modal.querySelector('[data-pack="classe"]');
      const pick   = champ?.closest('.er-pick');
      const err    = modal.querySelector('[data-pack-err]');
      const classe = String(champ?.value || '').trim();
      if (!classe) {
        if (err) err.hidden = false;
        pick?.setAttribute('data-invalid', 'true');
        pick?.querySelector('[data-pick-btn]')?.focus();
        return;
      }
      if (err) err.hidden = true;
      pick?.removeAttribute('data-invalid');

      const rep = {};
      modal.querySelectorAll('.er-pack-choice.is-on').forEach(b => { rep[b.dataset.q] = b.dataset.val; });

      const bouton = modal.querySelector('[data-action="save-pack"]');
      if (bouton) { bouton.disabled = true; bouton.textContent = 'Un instant…'; this._i18n(bouton); }
      this._packAlerte('', '', '');

      this.dispatchEvent(new CustomEvent('er-pack-claim', {
        bubbles: true, composed: true,
        detail: {
          classe,
          qualification: {
            vientSaintMalo:  rep.stmalo === 'oui',
            vientGuadeloupe: rep.guadeloupe === 'oui',
            pratiqueVoile:   rep.voile || ''
          }
        }
      }));
    }

     
    packFanResultat(res) {
      const modal = this.querySelector('.er-pack');
      const bouton = modal && modal.querySelector('[data-action="save-pack"]');
      if (bouton) { bouton.disabled = false; bouton.textContent = 'Recevoir mon code'; this._i18n(bouton); }
      if (!res || res.ok !== true) {
        const raison = res?.raison || '';
        if (raison === 'stock_epuise') {
           
           
          this._packAlerte('wait', 'Plus de code pour cette classe',
            "Les codes de cette classe sont tous partis pour l'instant. D'autres arrivent, reviens dans quelques jours.");
        } else if (raison === 'reessayer') {
          this._packAlerte('wait', 'Beaucoup de monde en même temps', 'Réessaie dans quelques secondes, ton code t\'attend.');
        } else {
          this._packAlerte('error', 'Ça n\'a pas marché', 'Réessaie dans un instant. Si cela persiste, écris-nous.');
        }
        return;
      }
      if (this._payload) {
        this._payload.packFanCode = res.code || null;
        



        const choisie = String(this.querySelector('.er-pack [data-pack="classe"]')?.value || '').trim();
        const pack = this._payload.packFan || (this._payload.packFan = {});
        pack.codes = Object.assign({}, pack.codes, { vr: { code: res.code || null, classe: res.classe || choisie } });
      }
      this._packAlerte('', '', '');
      this._packAfficherCode(res.code || null);
    }

    



















    _prefsTetes() {
      const { rempli, total } = this._profilCompte();
      const reste = Math.max(0, total - rempli);
      const pct = total ? Math.round((rempli / total) * 100) : 0;
      











      if (rempli >= total) return '';
      return `
        <div class="er-prefs-tetes">
          <button class="er-prefs-tete er-prefs-tete--maj" type="button" data-action="open-profile">
            <span class="er-prefs-tete-ico">${ICON_AVATAR}</span>
            <span class="er-prefs-tete-titre">Mes informations personnelles</span>
            <span class="er-prefs-tete-hint">Prénom, pseudo, civilité, date de naissance, code postal, nationalité, téléphone.</span>
            <span class="er-prefs-jauge">
              <span class="er-prefs-jauge-piste"><i style="width:${pct}%"></i></span>
              <span class="er-prefs-jauge-txt">
                <b>${rempli}</b>/${total} infos renseignées
                <em>${reste ? (reste === 1 ? "plus qu’une pour le badge" : "plus que " + reste + " pour le badge") : "badge débloqué ✓"}</em>
              </span>
            </span>
            <span class="er-prefs-tete-fleche" aria-hidden="true">${ICON_FLECHE_D}</span>
          </button>
        </div>`;
    }

    







    _profilCompte() {
      const v = this._payload?.profilePrompt?.values || {};
      const civil = ["prenom", "nom", "pseudo", "civilite", "dateNaissance",
                     "codePostal", "nationalite", "telephone"];
      









      const vil = this._villageState ? this._villageState() : {};
      const vp = this._payload?.profilePrompt?.village || {};
      const declaratif = [
        vil.venue     || vp.venue,
        vil.voile     || vp.voileLien,
        vil.suivi     || vp.suiviCourses,
        vil.canal     || vp.canal,
        vil.residence || vp.pays
      ];
      const rempli = civil.filter(k => String(v[k] || "").trim()).length
                   + declaratif.filter(Boolean).length;
      return { rempli, total: civil.length + declaratif.length };
    }

    




















    _buildConfModal() {
      return `
        <div class="er-prefs er-conf" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="er-conf-title">
          <div class="er-prefs-backdrop" data-action="close-conf"></div>
          <div class="er-prefs-panel">
            <div class="er-prefs-head">
              <div class="er-prefs-eyebrow">Espace Rhum</div>
              <h2 class="er-prefs-title" id="er-conf-title">Confidentialité et compte</h2>
              <p class="er-prefs-sub">Ce que ton espace retient de toi, ce que tu peux en récupérer, et comment tout effacer.</p>
              <button class="er-prefs-close" type="button" data-action="close-conf" aria-label="Fermer">${ICON_CLOSE}</button>
            </div>
            <div class="er-prefs-body">
              <section class="er-prefs-sec er-prefs-sec--privacy">
              
                <label class="er-prefs-switch">
                  <input type="checkbox" data-prefs="track" aria-label="Suivre mon activité">
                  <span class="er-prefs-switch-track" aria-hidden="true"><span class="er-prefs-switch-thumb"></span></span>
                  <span class="er-prefs-switch-body">
                    <span class="er-prefs-switch-text">Suivre mon activité pour personnaliser mon espace et faire progresser mes badges</span>
                    <span class="er-prefs-switch-hint">Sans suivi, ton espace reste accessible mais tes stats et badges ne progressent plus.</span>
                  </span>
                </label>
                <div class="er-prefs-danger">
                  <div class="er-prefs-danger-txt">
                    <span class="er-prefs-danger-title">Exporter mes données</span>
                    <span class="er-prefs-danger-hint">Récupère dans un fichier tout ce que ton espace sait de toi.</span>
                  </div>
                  <button class="er-prefs-btn er-prefs-btn--ghost" type="button" data-action="export-data">Télécharger</button>
                </div>
                <div class="er-prefs-danger">
                  <div class="er-prefs-danger-txt">
                    <span class="er-prefs-danger-title">Supprimer mes données</span>
                    <span class="er-prefs-danger-hint">Efface tout ce que ton espace a retenu de toi : tes stats, tes badges, tes favoris, tes préférences et tes participations. Ton compte repart de zéro, sauf aux jeux : un tour de roue joué et un code reçu restent acquis. Irréversible.</span>
                  </div>
                  <button class="er-prefs-btn er-prefs-btn--danger" type="button" data-action="delete-data">Tout effacer</button>
                </div>
                <!-- ⚠️ LA SUPPRESSION DU COMPTE A SA PROPRE ZONE, ET C EST VOULU.
                     Elle n est pas une ligne de plus dans une liste : c est le
                     seul geste de tout l espace qui detruise le compte lui-meme.
                     Un encadre rouge, en dernier, apres tout ce qui se repare. -->
                <div class="er-prefs-compte">
                  <span class="er-prefs-compte-titre">Supprimer mon compte</span>
                  <span class="er-prefs-compte-hint">Ton compte, tes infos et tout ton espace disparaissent définitivement. Tu seras déconnecté immédiatement. Cette action ne peut pas être annulée.</span>
                  <button class="er-prefs-btn er-prefs-btn--danger" type="button" data-action="delete-account">Supprimer mon compte</button>
                </div>
            </section>
            </div>
            <div class="er-prefs-foot">
              <span class="er-prefs-note">Ces réglages s'appliquent immédiatement.</span>
              <button class="er-prefs-btn er-prefs-btn--ghost" type="button" data-action="close-conf">Fermer</button>
            </div>
          </div>
        </div>`;
    }

    









    _seDeconnecter(btn) {
      if (!btn || btn.getAttribute('aria-busy') === 'true') return;
      const titre = btn.querySelector('.er-prefs-param-txt b');
      const avant = titre ? titre.textContent : '';
      btn.setAttribute('aria-busy', 'true');
      if (titre) titre.textContent = this._lang() === 'en' ? 'Logging out…' : 'Déconnexion…';
      oublierMemoire();
      this.dispatchEvent(new CustomEvent('er-logout', { bubbles: true, composed: true }));
      clearTimeout(this._decoGarde);
      this._decoGarde = setTimeout(() => {
        btn.removeAttribute('aria-busy');
        if (titre) titre.textContent = avant;
      }, 8000);
    }

    _openConfModal() {
      const modal = this.querySelector('.er-conf'); if (!modal) return;
      


      const track = modal.querySelector('[data-prefs="track"]');
      if (track) track.checked = !(this._payload?.prefs?.trackingOptOut === true);
      this._lastFocusedConf = document.activeElement;
      modal.dataset.open = 'true'; modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => modal.querySelector('.er-prefs-close')?.focus());
      if (!this._escConfHandler) {
        this._escConfHandler = (e) => {
          if (e.key === 'Escape' && modal.dataset.open === 'true') { e.stopPropagation(); this._closeConfModal(); }
        };
        document.addEventListener('keydown', this._escConfHandler);
      }
    }

    _closeConfModal() {
      const modal = this.querySelector('.er-conf'); if (!modal) return;
      modal.dataset.open = 'false'; modal.setAttribute('aria-hidden', 'true');
      



      const prefs = this.querySelector('.er-prefs:not(.er-conf)');
      if (!prefs || prefs.dataset.open !== 'true') this._unlockBodyScroll();
      if (this._escConfHandler) { document.removeEventListener('keydown', this._escConfHandler); this._escConfHandler = null; }
      this._lastFocusedConf?.focus?.(); this._lastFocusedConf = null;
    }

    

    _wireConfModal() {
      const modal = this.querySelector('.er-conf'); if (!modal) return;
      modal.addEventListener('click', (e) => {
        const t = e.target;
        if (t.closest('[data-action="close-conf"]')) { this._closeConfModal(); return; }
        if (t.closest('[data-action="export-data"]')) { this._requestExportData(t.closest('[data-action="export-data"]')); return; }
        if (t.closest('[data-action="delete-data"]')) { this._requestDeleteData(); return; }
        if (t.closest('[data-action="delete-account"]')) { this._requestDeleteAccount(); return; }
      });
      



      const track = modal.querySelector('[data-prefs="track"]');
      if (track) {
        track.addEventListener('change', () => {
          







          const p = this._payload?.prefs || {};
          this.dispatchEvent(new CustomEvent('er-prefs-save', {
            bubbles: true, composed: true,
            detail: {
              classes: Array.isArray(p.classes) ? p.classes : [],
              themes: Array.isArray(p.themes) ? p.themes : [],
              favAdd: [], favRemove: [],
              trackingOptOut: !track.checked
            }
          }));
          

          if (this._payload && this._payload.prefs) {
            this._payload.prefs.trackingOptOut = !track.checked;
          }
        });
      }
    }

    





    _paramProfil() {
      const { rempli, total } = this._profilCompte();
      const complet = rempli >= total;
      const reste = Math.max(0, total - rempli);
      const sous = complet
        ? 'Profil complet. Tu peux le modifier quand tu veux.'
        : (reste === 1
            ? 'Plus qu’une info à renseigner.'
            : 'Encore ' + reste + ' infos à renseigner sur ' + total + '.');
      return `
        <button class="er-prefs-param" type="button" data-action="open-profile">
          ${ICON_AVATAR}
          <span class="er-prefs-param-txt">
            <b>Mes informations personnelles</b>
            <em>${sous}</em>
          </span>
          ${complet ? '<span class="er-prefs-param-ok" aria-hidden="true">' + ICON_CHECK + '</span>' : ''}
          ${ICON_FLECHE_D}
        </button>`;
    }

    _buildPrefsModal() {
      return `
        <div class="er-prefs" data-open="false" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="er-prefs-title">
          <div class="er-prefs-backdrop" data-action="close-prefs"></div>
          <div class="er-prefs-panel">
            <div class="er-prefs-head">
              <div class="er-prefs-eyebrow">Espace Rhum</div>
              <h2 class="er-prefs-title" id="er-prefs-title">Mes préférences</h2>
              <p class="er-prefs-sub">Configure ton espace : on met en avant les skippers et les classes qui t’intéressent, le reste passe en second.</p>
              <button class="er-prefs-close" type="button" data-action="close-prefs" aria-label="Fermer">${ICON_CLOSE}</button>
            </div>
            <div class="er-prefs-body">
              ${this._prefsTetes()}
              <section class="er-prefs-sec">
                <h3 class="er-prefs-sec-title">Mes classes de bateaux</h3>
                <p class="er-prefs-hint">On te proposera en priorité les skippers et actus de ces classes.</p>
                <div class="er-prefs-chips" data-prefs="classes"></div>
              </section>
              <section class="er-prefs-sec">
                <h3 class="er-prefs-sec-title">Mes skippers suivis <span class="er-prefs-count" data-prefs="favcount"></span></h3>
                <p class="er-prefs-hint">Tes favoris apparaissent ici. Ajoute-en depuis la recherche.</p>
                <div class="er-prefs-search"><div class="er-prefs-search-field">${ICON_SEARCH}<input type="text" data-prefs="q" autocomplete="off" placeholder="Ajouter un skipper : nom ou prénom…" aria-label="Rechercher un skipper"></div><div class="er-prefs-res" data-prefs="res" role="listbox"></div></div>
                <div class="er-prefs-favs" data-prefs="favs"></div>
              </section>
              <section class="er-prefs-sec">
                <h3 class="er-prefs-sec-title">Mes sujets</h3>
                <p class="er-prefs-hint">Les angles d'actu que « Mes actus » fait remonter en priorité.</p>
                <div class="er-prefs-chips" data-prefs="themes"></div>
              </section>
              <!-- ⚠️ LE DERNIER BLOC DES PREFERENCES, ET IL N EN PORTE QUE LA PORTE.
                   Demande de Jules : « confidentialite et compte, ca doit etre
                   dans mes preferences, tout en bas. Il doit y avoir une section,
                   un petit titre Mes parametres, et en dessous tu mets
                   Confidentialite machin. »
                   Le contenu, lui, reste dans sa fenetre a part : on defile
                   jusqu ici sans jamais passer devant « supprimer mon compte ».
                   La section accueillera les prochains parametres du meme ordre. -->
              <section class="er-prefs-sec er-prefs-sec--params">
                <h3 class="er-prefs-sec-title">Mes paramètres</h3>
                <div class="er-prefs-params">
                  ${this._paramProfil()}
                  <button class="er-prefs-param" type="button" data-action="go-privacy">
                    ${ICON_BOUCLIER}
                    <span class="er-prefs-param-txt">
                      <b>Confidentialité et compte</b>
                      <em>Suivi de mon activité, export et suppression de mes données.</em>
                    </span>
                    ${ICON_FLECHE_D}
                  </button>
                  <!-- Se deconnecter (Jules, 18/09) : ICI SEULEMENT, pour eviter
                       les clics par erreur, et sans confirmation : le geste se
                       rattrape en se reconnectant. Pas de fleche, ce n est pas
                       une porte vers une autre fenetre mais une action. -->
                  <button class="er-prefs-param" type="button" data-action="logout">
                    ${ICON_SORTIE}
                    <span class="er-prefs-param-txt">
                      <b>Se déconnecter</b>
                      <em>Ton espace reste tel quel : tu le retrouves en te reconnectant.</em>
                    </span>
                  </button>
                </div>
              </section>
            </div>
            <div class="er-prefs-foot">
              <span class="er-prefs-note">Enregistré sur ton compte, modifiable à tout moment.</span>
              <button class="er-prefs-btn er-prefs-btn--ghost" type="button" data-action="close-prefs">Annuler</button>
              <button class="er-prefs-btn er-prefs-btn--save" type="button" data-action="save-prefs">Enregistrer</button>
            </div>
          </div>
        </div>`;
    }

    _prefsSkipper(raw) {
      if (!raw) return null;
      const name = raw.name || ((raw.prenom || '') + ' ' + (raw.nom || '')).replace(/\s+/g, ' ').trim();
      return { id: raw.id || raw._id, name, class: raw.class || (raw.classes && raw.classes.nom) || '', photo: prefsWixImg(raw.photo || raw.photoVignette) };
    }

    _openPrefsModal() {
      const modal = this.querySelector('.er-prefs'); if (!modal) return;
      const p = this._payload || {}, pref = p.prefs || {};
      this._prefs = {
        classes: new Set(Array.isArray(pref.classes) ? pref.classes : []),
        themes: new Set(Array.isArray(pref.themes) ? pref.themes : []),
        favorites: (p.favSkippers || []).map(s => this._prefsSkipper(s)).filter(s => s && s.id),
        catalog: (p.skipperCatalog || []).map(s => this._prefsSkipper(s)).filter(s => s && s.id),
        trackingOptOut: pref.trackingOptOut === true,
      };
      this._prefsFavInit = this._prefs.favorites.map(s => s.id);
      this._prefsFillClasses(); this._prefsFillThemes(); this._prefsRenderFavs();
       
      const trackBox = modal.querySelector('[data-prefs="track"]');
      if (trackBox) trackBox.checked = !this._prefs.trackingOptOut;

      this._lastFocused = document.activeElement;
      modal.dataset.open = 'true'; modal.setAttribute('aria-hidden', 'false');
      this._lockBodyScroll();
      requestAnimationFrame(() => modal.querySelector('.er-prefs-close')?.focus());
      if (!this._escPrefsHandler) {
        this._escPrefsHandler = (e) => { if (e.key === 'Escape' && modal.dataset.open === 'true') { e.stopPropagation(); this._closePrefsModal(); } };
        document.addEventListener('keydown', this._escPrefsHandler);
      }
    }

    _closePrefsModal() {
      const modal = this.querySelector('.er-prefs'); if (!modal) return;
      modal.dataset.open = 'false'; modal.setAttribute('aria-hidden', 'true');
      this._unlockBodyScroll();
      if (this._escPrefsHandler) { document.removeEventListener('keydown', this._escPrefsHandler); this._escPrefsHandler = null; }
      this._lastFocused?.focus?.(); this._lastFocused = null;
    }

    _prefsFillClasses() {
      const box = this.querySelector('[data-prefs="classes"]'); if (!box) return;
      box.innerHTML = PREFS_CLASSES.map(c => {
        const on = this._prefs.classes.has(c.id);
        return `<button class="er-prefs-chip" type="button" role="switch" aria-pressed="${on}" data-prefs-cl="${escapeHtml(c.id)}" style="--cc:${escapeHtml(c.col)}"><img class="er-prefs-ci" src="${escapeHtml(prefsWixImg(c.ic))}" alt="" loading="lazy">${escapeHtml(c.n)}</button>`;
      }).join('');
    }
    _prefsFillThemes() {
      const box = this.querySelector('[data-prefs="themes"]'); if (!box) return;
      box.innerHTML = PREFS_THEMES.map(t => `<button class="er-prefs-chip er-prefs-chip--theme" type="button" role="switch" aria-pressed="${this._prefs.themes.has(t)}" data-prefs-th="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('');
      

      this._i18n(box);
    }

    _prefsSkipRow(s, mode) {
      const cls = PREFS_CL_BYNAME[s.class] || {};
      const av = `<img class="er-prefs-av" src="${escapeHtml(s.photo)}" alt="" loading="lazy" style="--cc:${escapeHtml(cls.col || '#5DBFC0')}">`;
      const cl = s.class ? `<span class="er-prefs-cl">${cls.ic ? `<img class="er-prefs-cmini" src="${escapeHtml(prefsWixImg(cls.ic))}" alt="">` : ''}${escapeHtml(s.class)}</span>` : '';
      const who = `<span class="er-prefs-who"><span class="er-prefs-nm">${escapeHtml(s.name)}</span>${cl}</span>`;
      if (mode === 'add') return `<button class="er-prefs-ri" type="button" role="option" data-prefs-add="${escapeHtml(s.id)}">${av}${who}<span class="er-prefs-plus">+ Suivre</span></button>`;
      return `<div class="er-prefs-fav">${av}${who}<button class="er-prefs-rm" type="button" data-prefs-rm="${escapeHtml(s.id)}" aria-label="Retirer ${escapeHtml(s.name)}">${ICON_CLOSE}</button></div>`;
    }
    _prefsRenderFavs() {
      const list = this.querySelector('[data-prefs="favs"]'); if (!list) return;
      const n = this._prefs.favorites.length;
      



      const cnt = this.querySelector('[data-prefs="favcount"]');
      if (cnt) { cnt.textContent = n ? `${n} suivi${n > 1 ? 's' : ''}` : ''; this._i18n(cnt); }
      list.innerHTML = n ? this._prefs.favorites.map(s => this._prefsSkipRow(s, 'fav')).join('') : `<div class="er-prefs-fav-empty">Aucun skipper suivi, ajoute-en ci-dessus.</div>`;
      this._i18n(list);
    }
    _prefsSearch(q) {
      const res = this.querySelector('[data-prefs="res"]'); if (!res) return;
      q = (q || '').trim().toLowerCase();
      if (!q) { res.classList.remove('open'); return; }
      if (!this._prefs.catalog.length) { res.innerHTML = `<div class="er-prefs-empty">Catalogue skippers indisponible</div>`; this._i18n(res); res.classList.add('open'); return; }
      const favIds = new Set(this._prefs.favorites.map(s => s.id));
      const hits = this._prefs.catalog.filter(s => !favIds.has(s.id) && s.name.toLowerCase().includes(q)).slice(0, 8);
      res.innerHTML = hits.length ? hits.map(s => this._prefsSkipRow(s, 'add')).join('') : `<div class="er-prefs-empty">Aucun skipper trouvé</div>`;
      this._i18n(res);
      res.classList.add('open');
    }
    _prefsSave() {
      const btn = this.querySelector('[data-action="save-prefs"]');
      if (btn) { btn.disabled = true; btn.textContent = this._t('Enregistrement…'); }
      const ids = this._prefs.favorites.map(s => s.id);
      const init = new Set(this._prefsFavInit), now = new Set(ids);
       
      this.dispatchEvent(new CustomEvent('er-prefs-save', { bubbles: true, composed: true, detail: {
        classes: Array.from(this._prefs.classes),
        themes: Array.from(this._prefs.themes),
        favAdd: ids.filter(id => !init.has(id)),
        favRemove: this._prefsFavInit.filter(id => !now.has(id)),
        trackingOptOut: !!this._prefs.trackingOptOut,
      } }));
    }
    _wirePackFan() {
       
       
       
      this.querySelectorAll('[data-action="open-pack"]').forEach(btn => {
        btn.addEventListener('click', () => this._openPackFan());
      });
      const modal = this.querySelector('.er-pack');
      if (!modal) return;
       
       
      modal.addEventListener('click', (e) => {
        const t = e.target;
        if (t.closest('[data-action="close-pack"]')) { this._closePackFan(); return; }
        if (t.closest('[data-action="save-pack"]'))  { this._packSubmit(); return; }
        const copier = t.closest('[data-action="copy-pack-code"]');
        if (copier) { this._packCopier(copier); return; }
         
         
        const choix = t.closest('.er-pack-choice');
        if (!choix) return;
        const groupe = choix.dataset.q;
        const etait = choix.classList.contains('is-on');
        modal.querySelectorAll(`.er-pack-choice[data-q="${groupe}"]`).forEach(b => {
          b.classList.remove('is-on');
          b.setAttribute('aria-pressed', 'false');
        });
        if (!etait) { choix.classList.add('is-on'); choix.setAttribute('aria-pressed', 'true'); }
      });
      this._wirePicks(modal);
       
      modal.querySelector('[data-pack="classe"]')?.addEventListener('input', () => {
        const err = modal.querySelector('[data-pack-err]');
        if (err) err.hidden = true;
        modal.querySelector('.er-pick[data-invalid]')?.removeAttribute('data-invalid');
      });

      





      const champClasse = modal.querySelector('[data-pack="classe"]');
      const suggeree = this._packClasseSuggeree();
      if (champClasse && !champClasse.value && suggeree) {
        champClasse.value = suggeree;
        this._syncPicks();
      }
      this._packPrefillProfil(modal);
    }

    

    _packPrefillProfil(modal) {
      const prefs = (this._payload && (this._payload.preferences || this._payload.profil)) || {};
      const poser = (nom, valeur) => {
        if (valeur === undefined || valeur === null || valeur === '') return;
        const c = modal.querySelector('[data-pack="' + nom + '"]');
        if (!c || c.value) return;
        if (c.type === 'checkbox') c.checked = valeur === true;
        else c.value = String(valeur);
      };
      poser('vientSaintMalo', prefs.vientSaintMalo);
      poser('vientGuadeloupe', prefs.vientGuadeloupe);
      poser('pratiqueVoile', prefs.pratiqueVoile);
    }

    _wirePrefsModal() {
      const modal = this.querySelector('.er-prefs'); if (!modal) return;
       
      modal.addEventListener('click', (e) => {
        const t = e.target;
        if (t.closest('[data-action="close-prefs"]')) { this._closePrefsModal(); return; }
        if (t.closest('[data-action="save-prefs"]')) { this._prefsSave(); return; }
        


        if (t.closest('[data-action="go-privacy"]')) { this._openConfModal(); return; }
        if (t.closest('[data-action="logout"]')) { this._seDeconnecter(t.closest('[data-action="logout"]')); return; }
        if (t.closest('[data-action="delete-data"]')) { this._requestDeleteData(); return; }
        if (t.closest('[data-action="export-data"]')) { this._requestExportData(t.closest('[data-action="export-data"]')); return; }
        if (t.closest('[data-action="delete-account"]')) { this._requestDeleteAccount(); return; }
        const chip = t.closest('.er-prefs-chip');
        if (chip) {
          const on = chip.getAttribute('aria-pressed') === 'true'; chip.setAttribute('aria-pressed', String(!on));
          const cl = chip.getAttribute('data-prefs-cl');
          const th = chip.getAttribute('data-prefs-th');
          if (cl) { on ? this._prefs.classes.delete(cl) : this._prefs.classes.add(cl); }
          else if (th) { on ? this._prefs.themes.delete(th) : this._prefs.themes.add(th); }
          return;
        }
        const add = t.closest('[data-prefs-add]');
        if (add) {
          const s = this._prefs.catalog.find(x => x.id === add.getAttribute('data-prefs-add'));
          if (s && !this._prefs.favorites.some(f => f.id === s.id)) this._prefs.favorites.push(s);
          const q = modal.querySelector('[data-prefs="q"]'); if (q) q.value = '';
          modal.querySelector('[data-prefs="res"]')?.classList.remove('open');
          this._prefsRenderFavs(); return;
        }
        const rm = t.closest('[data-prefs-rm]');
        if (rm) { const id = rm.getAttribute('data-prefs-rm'); this._prefs.favorites = this._prefs.favorites.filter(s => s.id !== id); this._prefsRenderFavs(); return; }
      });
      const input = modal.querySelector('[data-prefs="q"]');
      if (input) input.addEventListener('input', () => this._prefsSearch(input.value));
       
      const trackBox = modal.querySelector('[data-prefs="track"]');
      if (trackBox) trackBox.addEventListener('change', () => { this._prefs.trackingOptOut = !trackBox.checked; });
    }

     
     
    






    _requestExportData(btn) {
      if (this._exportEnCours) return;
      this._exportEnCours = true;
      const en = this._lang() === 'en';
      if (btn) { btn.disabled = true; btn.textContent = en ? 'Preparing…' : 'Préparation…'; }
      this.dispatchEvent(new CustomEvent('er-export-data', { bubbles: true, composed: true, detail: {} }));
      

      this._exportFilet = setTimeout(() => this.exportDataResultat(null), 15000);
    }

     
    exportDataResultat(donnees) {
      clearTimeout(this._exportFilet);
      this._exportEnCours = false;
      const en = this._lang() === 'en';
      const btn = this.querySelector('[data-action="export-data"]');
      if (btn) { btn.disabled = false; btn.textContent = en ? 'Download' : 'Télécharger'; }
      if (!donnees) {
        this._toastSimple(en ? 'Export unavailable, try again later.'
                             : 'Export indisponible, réessaie plus tard.');
        return;
      }
      try {
        const blob = new Blob([JSON.stringify(donnees, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const lien = document.createElement('a');
        lien.href = url;
        lien.download = 'mon-espace-rhum-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(lien);
        lien.click();
        document.body.removeChild(lien);
        


        setTimeout(() => URL.revokeObjectURL(url), 4000);
      } catch (e) {
        this._toastSimple(en ? 'Download failed.' : 'Le téléchargement a échoué.');
      }
    }

    






    async _requestDeleteAccount() {
      const en = this._lang() === 'en';
      



      const saisi = await this._confirmerGrave({
        titre: en ? 'Delete your account?' : 'Supprimer ton compte ?',
        texte: en
          ? 'Your account, your details and your whole space disappear for good. You will be signed out immediately and nothing can be recovered.'
          : 'Ton compte, tes infos et tout ton espace disparaissent définitivement. Tu seras déconnecté immédiatement et rien ne pourra être récupéré.',
        saisie: en ? 'Type your account e-mail address to confirm'
                   : 'Saisis l’adresse e-mail de ton compte pour confirmer',
        bouton: en ? 'Delete my account' : 'Supprimer mon compte',
        delai: 5
      });
      if (!saisi) return;
      oublierMemoire();
      this.dispatchEvent(new CustomEvent('er-delete-account',
        { bubbles: true, composed: true, detail: { confirmation: String(saisi).trim() } }));
    }

    

    deleteAccountResultat(res) {
      const en = this._lang() === 'en';
      if (res && res.success) return;
      const raison = res && res.reason;
      if (raison === 'confirmation_invalide') {
        this._toastSimple(en ? 'The e-mail does not match. Nothing was deleted.'
                             : 'L’adresse ne correspond pas. Rien n’a été supprimé.');
        return;
      }
      


      if (raison === 'compte_non_supprime') {
        this._toastSimple(en
          ? 'Your data was erased but the account could not be deleted. Please contact us.'
          : 'Tes données ont été effacées mais le compte n’a pas pu être supprimé. Contacte-nous.');
        return;
      }
      this._toastSimple(en ? 'Deletion failed, nothing was changed.'
                           : 'La suppression a échoué, rien n’a été modifié.');
    }

     
    _toastSimple(texte) {
      const container = this.querySelector('.er-toasts-container');
      if (!container) return;
      const t = document.createElement('div');
      t.className = 'er-toast';
      t.setAttribute('role', 'status');
      t.innerHTML = '<div class="er-toast-content"><div class="er-toast-title"></div></div>';
      t.querySelector('.er-toast-title').textContent = texte;
      container.appendChild(t);
      setTimeout(() => { t.remove(); }, 5200);
    }

    






















    _confirmerGrave(opts) {
      return new Promise((resoudre) => {
        const en = this._lang() === 'en';
        const delai = Number(opts.delai) || 5;
        const hote = this.querySelector('.er-conf') || this;
        const ancienne = hote.querySelector('.er-grave');
        if (ancienne) ancienne.remove();

        const box = document.createElement('div');
        box.className = 'er-grave';
        box.setAttribute('role', 'alertdialog');
        box.setAttribute('aria-modal', 'true');
        box.innerHTML = `
          <div class="er-grave-voile"></div>
          <div class="er-grave-panneau">
            <div class="er-grave-ico">${ICON_ALERTE}</div>
            <h3 class="er-grave-titre"></h3>
            <p class="er-grave-txt"></p>
            ${opts.saisie ? `<label class="er-grave-label"></label>
              <input type="text" class="er-grave-input" autocomplete="off" spellcheck="false">` : ''}
            <div class="er-grave-actions">
              <button type="button" class="er-prefs-btn er-prefs-btn--ghost" data-grave="non"></button>
              <button type="button" class="er-prefs-btn er-prefs-btn--danger" data-grave="oui" disabled></button>
            </div>
          </div>`;
        box.querySelector('.er-grave-titre').textContent = opts.titre || '';
        box.querySelector('.er-grave-txt').textContent = opts.texte || '';
        box.querySelector('[data-grave="non"]').textContent = en ? 'Cancel' : 'Annuler';
        if (opts.saisie) box.querySelector('.er-grave-label').textContent = opts.saisie;
        hote.appendChild(box);

        const oui = box.querySelector('[data-grave="oui"]');
        const champ = box.querySelector('.er-grave-input');
        let reste = delai;
        const libelle = () => {
          if (reste > 0) { oui.textContent = (en ? 'Wait ' : 'Patiente ') + reste + ' s'; return; }
          oui.textContent = opts.bouton || (en ? 'Confirm' : 'Confirmer');
        };
        libelle();
        const tic = setInterval(() => {
          reste--;
          libelle();
          if (reste <= 0) {
            clearInterval(tic);
            

            oui.disabled = !!(champ && !champ.value.trim());
          }
        }, 1000);
        if (champ) {
          champ.addEventListener('input', () => {
            if (reste <= 0) oui.disabled = !champ.value.trim();
          });
        }

        const fermer = (reponse) => {
          clearInterval(tic);
          document.removeEventListener('keydown', auClavier);
          box.remove();
          resoudre(reponse);
        };
        const auClavier = (e) => { if (e.key === 'Escape') { e.stopPropagation(); fermer(null); } };
        document.addEventListener('keydown', auClavier);
        box.querySelector('.er-grave-voile').addEventListener('click', () => fermer(null));
        box.querySelector('[data-grave="non"]').addEventListener('click', () => fermer(null));
        oui.addEventListener('click', () => {
          if (oui.disabled) return;
          fermer(champ ? champ.value.trim() : true);
        });
        requestAnimationFrame(() => (champ || box.querySelector('[data-grave="non"]')).focus());
      });
    }

    async _requestDeleteData() {
      const en = this._lang() === 'en';
      const ok = await this._confirmerGrave({
        titre: en ? 'Delete all your data?' : 'Supprimer toutes tes données ?',
        texte: en
          ? 'Everything your space has learned about you is erased: your stats, your badges, your favourites, your preferences and your entries. Your account remains but starts from zero. One exception, the games: a wheel spin already played and codes already received stay with the account, without your name or contact details, so they cannot be played again. This cannot be undone.'
          : 'Tout ce que ton espace a retenu de toi est effacé : tes stats, tes badges, tes favoris, tes préférences et tes participations. Ton compte reste mais repart de zéro. Seule exception, les jeux : le tour de roue déjà joué et les codes déjà reçus restent acquis au compte, sans ton nom ni tes coordonnées, pour qu’ils ne se rejouent pas. Cette action est irréversible.',
        bouton: en ? 'Delete my data' : 'Supprimer mes données',
        delai: 5
      });
      if (!ok) return;
      oublierMemoire();
      this.dispatchEvent(new CustomEvent('er-delete-data', { bubbles: true, composed: true, detail: {} }));
    }

     
    _enqueueToasts(badgeKeys) {
      if (!Array.isArray(badgeKeys) || badgeKeys.length === 0) return;
      const allBadges = this._payload?.badges || [];
      const toToast = badgeKeys
        .map(k => allBadges.find(b => b.key === k))
        .filter(Boolean);
      toToast.forEach((b, i) => {
        const t = setTimeout(() => this._showToast(b), i * 800);
        this._toastTimers.push(t);
      });
    }

    _showToast(badge) {
      const container = this.querySelector('.er-toasts-container');
      if (!container || !badge) return;
      const iconInner = badgeIconInner(badge.key);
      const toast = document.createElement('div');
      toast.className = 'er-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('data-category', badge.category || '');
      toast.innerHTML = `
        <div class="er-toast-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">${iconInner}</svg>
        </div>
        <div class="er-toast-content">
          <div class="er-toast-label">Nouveau badge</div>
          <div class="er-toast-title">${escapeHtml(badge.title || badge.label || '')}</div>
        </div>
      `;
      this._i18n(toast);
      container.appendChild(toast);
      requestAnimationFrame(() => { toast.dataset.visible = 'true'; });
      const hideTimer = setTimeout(() => {
        toast.dataset.visible = 'false';
        const removeTimer = setTimeout(() => toast.remove(), 400);
        this._toastTimers.push(removeTimer);
      }, 4000);
      this._toastTimers.push(hideTimer);
    }

    _wireBadges() {
      this._attachBadgeListeners();
      this._attachBadgesFilterListeners();
      this._wireBadgeModal();
      this._wireBadgesInfo();
      









      const newly = this._payload?.newlyUnlockedBadges;
      if (Array.isArray(newly) && newly.length > 0) {
        const serie = newly.slice().sort().join('|');
        if (this._deblocagesSignales !== serie) {
          this._deblocagesSignales = serie;
          





          const cles = newly.slice();
          window.__rdrDeblocagesEnAttente = cles;
          window.dispatchEvent(new CustomEvent('rdr-badges-debloques', { detail: { keys: cles } }));
          const debut = Date.now();
          const guetter = () => {
            if (document.querySelector('rdr-notify')) return;
            if (Date.now() - debut < 8000) { this._toastTimers.push(setTimeout(guetter, 400)); return; }
            this._enqueueToasts(cles);
          };
          guetter();
        }
      }
    }
  }

  customElements.define('espace-rhum', EspaceRhum);
}
})();
