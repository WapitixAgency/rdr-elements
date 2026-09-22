/* rdr-elements tags | source route-du-rhum 187c82e | rdr-tags.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["tags"]="187c82e";performance.mark("rdr-elements:tags")}catch(e){}
;(function(){
(() => {
  'use strict';
  if (customElements.get('rdr-tags')) return;

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const pli = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/\s+/g, ' ').trim();

  




  const MARQUE_TETE = /^\s*route\s+du\s+rhum(?:\s*[-–—]\s*|\s+)destination\s+guadeloupe\s*(?:\d{4}\s*)?[-–—:|,.]+\s*/i;
  const sansMarque = (titre) => {
    const t = String(titre || '');
    const m = MARQUE_TETE.exec(t.normalize('NFD').replace(/[̀-ͯ]/g, ''));
    if (!m) return t.trim();
    const reste = t.slice(m[0].length).trim();
    return reste.length >= 15 ? reste.charAt(0).toUpperCase() + reste.slice(1) : t.trim();
  };
  const MOTS_VIDES = new Set(('a au aux avec ce cet cette ces c d de des du en et il ils elle elles je j l la le les leur leurs lui ' +
    'ma mes mon ne nos notre nous on ou par pas pour qu que qui sa se ses son sur ta tes ton tu un une vos votre vous y est sont ' +
    'ai as avons avez ont suis es sommes etes etre avoir ca cela ceci tres bien comme mais si dans chez vers ' +
    'an and are as at be by for from in into is it its of on or the to with s t').split(' '));
  

  const adresse = (titre) => {
    let mots = pli(sansMarque(titre)).replace(/[’']/g, ' ').replace(/œ/g, 'oe').replace(/æ/g, 'ae')
      .replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(m => m && !MOTS_VIDES.has(m));
    const txt = ' ' + mots.join(' ') + ' ';
    if (txt.indexOf(' route rhum destination guadeloupe ') >= 0 && mots.length > 6) mots = (txt.replace(' route rhum destination guadeloupe ', ' ')).trim().split(' ');
    let s = '';
    for (const m of mots) { const n = s ? s + '-' + m : m; if (n.length > 60) break; s = n; }
    return s;
  };
   
  const adresseParDefaut = (titre) => String(titre || '').toLowerCase().normalize('NFC')
    .replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
   
  const nettoyerAdresse = (s) => pli(s).replace(/[’']/g, '-').replace(/[^a-z0-9-]+/g, '-').replace(/-{2,}/g, '-').replace(/^-/, '');

  


  const SUJETS = [
    { fr: 'Départ', en: 'Start',
      quand: 'La ligne, la parade, la sortie d’écluse, les derniers préparatifs.',
      avec: ['top départ', 'Parade', 'écluse', 'Préparatifs'] },
    { fr: 'Arrivée', en: 'Arrivals',
      quand: 'L’arrivée à Pointe-à-Pitre et la Guadeloupe qui accueille.',
      avec: ['Guadeloupe'] },
    { fr: 'Direct', en: 'Live',
      quand: 'Le suivi pendant que ça se joue.',
      avec: ['Tête de course'] },
    { fr: 'Classement', en: 'Rankings',
      quand: 'Les positions, les écarts, les pointages.',
      avec: ['Tête de course', 'Chiffres clés'] },
    { fr: 'Météo', en: 'Weather',
      quand: 'La météo et la stratégie qu’elle commande.',
      avec: ['Stratégie'] },
    { fr: 'Avarie', en: 'Damage',
      quand: 'Tout ce qui tourne mal : casse, abandon, sauvetage, escale.',
      avec: ['Abandon', 'Sauvetage', 'Escale technique'] },
    { fr: 'Record', en: 'Record',
      quand: 'Un temps de référence battu, visé ou remis en jeu.', avec: [] },
    { fr: 'Interview', en: 'Interview',
      quand: 'La parole d’une personne, rapportée telle quelle.', avec: [] },
    { fr: 'Portrait', en: 'Portrait',
      quand: 'Qui est cette personne, d’où elle vient.', avec: [] },
    { fr: 'Coulisses', en: 'Behind the scenes',
      quand: 'Ce qu’on ne voit pas depuis la ligne : vie à bord, images, séries.',
      avec: ['Vie à bord', 'web série', 'photographie', 'teaser'] },
    { fr: 'Décryptage', en: 'Analysis',
      quand: 'Comprendre plutôt que suivre : analyse, technique, histoire.',
      avec: ['Technique & bateau', 'Histoire', 'Chiffres clés'] },
    { fr: 'Rookies', en: 'Rookies',
      quand: 'Une première participation. 53 skippers de la flotte portent ce tag.', avec: [] },
    { fr: 'Femmes', en: 'Women',
      quand: 'Les navigatrices. À cumuler avec Portrait ou Interview, jamais à la place.',
      avec: ['Alice Milliat Foundation'] },
    { fr: 'Écologie & Océan', en: 'A sustainable future',
      quand: 'Environnement, durabilité, vie marine, empreinte de la course.',
      avec: ['Un avenir durable', 'Oceans', 'Pacte territorial'] }
  ];


  





  const FLOTTE_BRUTE =
    'Alexis|THOMAS:R,Halvard|MABIRE,Antoine|BRUNET,Nicolas|ROUGER,Alexia|BARRIER:F,Gaëtan|THO' +
    'MAS:R,Davy|BEAUDART:R,Matéo|LE CALVIC:R,Axel|TRÉHIN,Jean-Baptiste|TERNON:R,Guillaume|PIR' +
    'OUELLE:R,Kieran|LE BORGNE,Kéni|PIPEROL,Thimoté|POLET:R,Sidney|GAVIGNET:R,Théa|KHELIF:FR,' +
    'Pierre|LEBOUCHER:R,Yohan|BERTRAND,Jean-Baptiste|DARAMY,Boris|HERRMANN,Maxime|SOREL,Robin' +
    '|MARAIS,Louis|BURTON,Francis|JOYON,Roland|JOURDAIN,Erwan|LE ROUX,Tom|LAPERCHE:R,Laurent|' +
    'BOURGUES:R,Erwan|LE DRAOULEC:R,Anne-Claire|LE BERRE:FR,Matthieu|PERRAUT:R,Pierre|QUIROGA' +
    ':R,Elodie|BONAFOUS:FR,Francesca|CLAPCICH:FR,Nicolas|D’ESTAIS,Corentin|HOREAU:R,Scott|SHA' +
    'WYER:R,Sébastien|SIMON:R,Aina|BAUZA  ROIG:FR,Stéphane|BODIN:R,Pep|COSTA:R,Fabien|DELAHAY' +
    'E:R,Sophie|FAGUET:FR,Robin|FOLLIN:R,Marco|GUERRA,Milan|KOLACEK:R,Sasha|LANIECE:FR,Guilla' +
    'ume|L’HOSTIS:R,Alexis|LOISON:R,Quentin|LE NABOUR:R,Ian|LIPINSKI,Goulven|MARIE:R,Achille|' +
    'NEBOUT:R,Matteo|SERICANO:R,Christophe|RATEAU:R,Luca|ROSETTI:R,Lomano|TAKASI:R,Djemila|TA' +
    'SSIN:FR,Thierry|ROGER:R,Christophe|BACHMANN:R,Tanguy|CARADEC:R,Amaury|DE JAMBLINNE DE ME' +
    'UX:R,Patrick|ISOARD:R,Titouan|PILLIARD:R,Frédéric|MAILHOS:R,Benoit|SINEAU:R,Masa|SUZUKI:' +
    'R,Basile|BOURGNON:R,Anthony|MARCHAND:R,Léonard|LEGRAND:R,Luke|BERRY,Jules|BONNIER,Ulysse' +
    '|POZZOLI,Yannick|REBUFFAT,Rodolphe|SEPHO,David|DUCOSSON,Armel|LE CLEAC’H,Baptiste|HULIN,' +
    'Thibaut|VAUCHEL-CAMUS,Fabrice|AMEDEO,Pierre-Louis|ATTWELL,Ambrogio|BECCARIA BALDUZZI,Jér' +
    'émie|BEYOU,Arnaud|BOISSIÈRES,Sam|GOODCHILD,Sébastien|MARSSET,Mathieu|CLAVEAU,Yves|COURBO' +
    'N,Corentin|DOUGUET,Loïc|FEQUET,Andrea|FORNARO,Jonas|GERCKENS,Emmanuel|HAMEZ,Rupert|HENRY' +
    ',William|MATHELIN MOREAUX,Mikael|MERGUI,Vincent|RIOU,Christophe|BOGRAND,Charlie|CAPELLE,' +
    'Laurent|ETHEIMER,Florian|GUEGUEN,Marc|GUILLEMOT,Gilles|LAMIRÉ,Eric|PÉRON,Romain|PILLIARD' +
    ',Damien|SEGUIN,Wilfrid|CLERTON,Gilles|COLUBI,Rémy|GÉRIN,Jean|LE CAM,Olivier|NEMSGUERN,Th' +
    'omas|LURTON,Manuel|COUSIN,Charles|CAUDRELIER,Thomas|COVILLE,Violette|DORANGE:FR';

  



  const LEXIQUE = {
    'Départ': ['grand depart', 'top depart', 'ligne de depart', 'coup d envoi', 'parade',
      'ecluse', 'avant le depart', 'veille du depart'],
    'Arrivée': ['flash arrivee', 'arrivee de', 'arrivee a', 'franchit la ligne',
      'boucle sa', 'remporte la route', 'vainqueur de la'],
    'Direct': ['en direct', 'suivez la course', 'minute par minute'],
    'Classement': ['classement', 'pointage', 'en tete de', 'coude a coude', 'ecart entre'],
    'Météo': ['meteo', 'depression', 'anticyclone', 'alize', 'routage', 'front froid',
      'vent de', 'houle', 'grain'],
    'Avarie': ['avarie', 'demate', 'dematage', 'chavire', 'abandon', 'abandonne',
      'secouru', 'sauvetage', 'escale technique', 'casse son'],
    'Record': ['record', 'temps de reference', 'meilleur temps'],
    'Interview': ['interview', 'entretien', 'trois questions', 'nous raconte', 'se confie'],
    'Portrait': ['portrait', 'qui est', 'parcours de', 'la benjamine', 'le doyen'],
    'Coulisses': ['coulisses', 'vie a bord', 'plus belles photos', 'reportage',
      'dans les pas', 'chantier', 'web serie'],
    'Décryptage': ['decryptage', 'on vous explique', 'pour comprendre', 'le bilan',
      'chiffres cles', 'analyse', 'ce qu il faut savoir'],
    'Rookies': ['premier rhum', 'premiere participation', 'rookie', 'bizuth'],
    'Femmes': ['navigatrice', 'skippeuse', 'les femmes', 'au feminin'],
    'Écologie & Océan': ['ecologie', 'environnement', 'avenir durable', 'biodiversite',
      'empreinte carbone', 'plastique', 'faune', 'vie marine']
  };

  


  const DRAP_FR = '<svg class="rt-drap" viewBox="0 0 18 12" aria-hidden="true">' +
    '<rect width="6" height="12" fill="#002395"/>' +
    '<rect x="6" width="6" height="12" fill="#F4F5F0"/>' +
    '<rect x="12" width="6" height="12" fill="#ED2939"/></svg>';
  const DRAP_EN = '<svg class="rt-drap" viewBox="0 0 18 12" aria-hidden="true">' +
    '<rect width="18" height="12" fill="#012169"/>' +
    '<path d="M0 0l18 12M18 0L0 12" stroke="#F4F5F0" stroke-width="2.8"/>' +
    '<path d="M0 0l18 12M18 0L0 12" stroke="#C8102E" stroke-width="1.5"/>' +
    '<path d="M9 0v12M0 6h18" stroke="#F4F5F0" stroke-width="4"/>' +
    '<path d="M9 0v12M0 6h18" stroke="#C8102E" stroke-width="2.2"/></svg>';

  



  const VAGUE = '<svg class="rt-vague" viewBox="0 0 1200 44" preserveAspectRatio="none" ' +
    'aria-hidden="true"><path d="M0 44V22c100-14 200-20 300-8s200 24 300 12 200-24 300-16 ' +
    '200 20 300 14v20z" fill="currentColor"/></svg>';

  const ICO_COPIE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="9" y="9" width="12" height="12" rx="2"/>' +
    '<path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>';
  const ICO_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 12.5l5 5L20 6.5"/></svg>';

  const CSS = `
    rdr-tags {
      --rt-encre: #0B1B33; --rt-encre-2: #3C5064; --rt-gris: #5D7280;
      --rt-fond: #EFF3F3; --rt-carte: #FFFFFF;
      --rt-trait: #C6D4D6; --rt-trait-fort: #9FB6B9;
      --rt-teal: #00676E; --rt-teal-doux: #DDEBEB;
      --rt-ambre: #F5BE41; --rt-ambre-doux: #FBEFD3;
      --rt-rouge: #B0341F; --rt-rouge-doux: #F6DFDA;
      display: block; background: var(--rt-fond); color: var(--rt-encre);
      font-family: Montserrat, system-ui, -apple-system, "Segoe UI", sans-serif;
      font-size: 15px; line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    rdr-tags *, rdr-tags *::before, rdr-tags *::after { box-sizing: border-box; }
    rdr-tags .rt-page { max-width: 1000px; margin: 0 auto; padding: 30px 22px 64px; }

    rdr-tags .rt-oeil {
      font-size: 10.5px; font-weight: 700; letter-spacing: .17em;
      text-transform: uppercase; color: var(--rt-teal);
    }
    rdr-tags .rt-h1 {
      margin: 8px 0 0; font-weight: 800; font-style: italic; text-transform: uppercase;
      font-size: clamp(28px, 5vw, 44px); line-height: 1; letter-spacing: -.02em;
    }
    rdr-tags .rt-h2 {
      margin: 0; font-weight: 800; font-style: italic; text-transform: uppercase;
      font-size: clamp(18px, 2.4vw, 23px); line-height: 1.08; letter-spacing: -.01em;
    }
    rdr-tags p { margin: 0; }

    







    


    rdr-tags .rt-mast {
      position: relative; background: #0B1B33; color: #EAF2F3; padding: 42px 0 0;
    }
    rdr-tags .rt-mast-in {
      max-width: 1000px; margin: 0 auto; padding: 0 22px 34px;
    }
    rdr-tags .rt-mast .rt-oeil { color: #7FD4D2; }
    rdr-tags .rt-mast .rt-h1 { color: #FFFFFF; }
    rdr-tags .rt-vague {
      display: block; width: 100%; height: 34px; color: var(--rt-fond);
      margin-bottom: -1px;
    }
    rdr-tags .rt-intro {
      margin-top: 18px; max-width: 62ch; font-size: 16.5px; color: #C3D6DC;
    }
    

    rdr-tags .rt-bandeau { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 18px; }
    

    rdr-tags .rt-jeton {
      display: inline-flex; align-items: center; gap: 7px; cursor: pointer;
      font: 500 13px/1 "IBM Plex Mono", ui-monospace, monospace;
      padding: 8px 11px; border-radius: 2px;
      color: #EAF2F3; background: rgba(93, 191, 192, .13);
      border: 1px solid rgba(93, 191, 192, .34);
      transition: background .14s ease, border-color .14s ease, color .14s ease;
    }
    rdr-tags .rt-jeton .rt-etat { width: 0; overflow: hidden; transition: width .14s ease; }
    rdr-tags .rt-jeton:hover { background: #5DBFC0; border-color: #5DBFC0; color: #06222B; }
    rdr-tags .rt-jeton:hover .rt-etat { width: 13px; }
    rdr-tags .rt-jeton:focus-visible { outline: 2px solid #7FD4D2; outline-offset: 2px; }
    rdr-tags .rt-jeton[data-fait="oui"] {
      background: #5DBFC0; border-color: #5DBFC0; color: #06222B;
    }
    rdr-tags .rt-jeton[data-fait="oui"] .rt-etat { width: 13px; }
    rdr-tags .rt-points {
      margin-top: 8px; display: grid; gap: 2px;
      background: var(--rt-ambre-doux); border-left: 3px solid var(--rt-ambre);
      padding: 18px 22px;
    }
    rdr-tags .rt-point { display: grid; grid-template-columns: auto 1fr; gap: 13px; align-items: baseline; }
    rdr-tags .rt-point + .rt-point { margin-top: 12px; }
    rdr-tags .rt-point-n {
      font-weight: 800; font-style: italic; font-size: 21px; line-height: 1;
      color: var(--rt-ambre); width: 17px; flex: 0 0 auto;
    }
    rdr-tags .rt-point p { font-size: 14.5px; }
    rdr-tags .rt-point b { font-weight: 700; color: var(--rt-encre); }
    


    rdr-tags .rt-garde {
      display: block; margin-top: 10px; padding: 10px 13px;
      background: rgba(255, 255, 255, 0.62);
      border-left: 3px solid var(--rt-encre);
      border-radius: 2px 10px 2px 10px;
      font-size: 13.5px; line-height: 1.52;
    }

    rdr-tags .rt-sec { margin-top: 46px; }
    rdr-tags .rt-sec-tete { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    rdr-tags .rt-sec-tete .rt-oeil { display: flex; align-items: center; gap: 10px; }
    rdr-tags .rt-sec-tete .rt-oeil::after {
      content: ''; flex: 1 1 auto; height: 1px; background: var(--rt-trait);
    }
    rdr-tags .rt-sec-tete p { max-width: 64ch; color: var(--rt-encre-2); font-size: 14.5px; }

     
    








    rdr-tags .rt-outil {
      --rt-encre: #EAF2F3; --rt-encre-2: #B7CAD3; --rt-gris: #92A9B7;
      --rt-fond: #08172E; --rt-trait: #23405E; --rt-trait-fort: #3A5D7E;
      

      --rt-teal: #5DBFC0; --rt-teal-doux: rgba(93, 191, 192, .17);
      background: linear-gradient(152deg, #0F2748 0%, #0A1A35 100%);
      color: var(--rt-encre); padding: 24px;
      border: 1px solid #1D3A58; border-radius: 3px;
      box-shadow: 0 18px 40px -26px rgba(6, 18, 36, .75);
    }
    rdr-tags .rt-outil-tete {
      display: flex; align-items: baseline; justify-content: space-between;
      gap: 14px; margin-bottom: 16px; padding-bottom: 13px;
      border-bottom: 1px solid var(--rt-trait);
    }
    rdr-tags .rt-outil-tete .rt-oeil { color: var(--rt-teal); }
    rdr-tags .rt-compte {
      font: 600 12.5px/1 Montserrat, sans-serif; color: var(--rt-teal);
      display: inline-flex; align-items: center; gap: 7px; white-space: nowrap;
    }
    rdr-tags .rt-pastille {
      width: 7px; height: 7px; border-radius: 50%; background: var(--rt-teal);
      box-shadow: 0 0 0 4px rgba(93, 191, 192, .18);
    }
    rdr-tags .rt-champs { display: grid; gap: 14px; }
    rdr-tags .rt-champ { display: flex; flex-direction: column; gap: 7px; }
    rdr-tags .rt-champ label { font-size: 12.5px; font-weight: 600; color: var(--rt-gris); }
    rdr-tags .rt-champ input, rdr-tags .rt-champ textarea {
      width: 100%; padding: 14px 15px; border-radius: 2px;
      font: 500 15.5px/1.5 Montserrat, system-ui, sans-serif;
      color: var(--rt-encre); background: var(--rt-fond);
      border: 1px solid var(--rt-trait-fort);
      transition: border-color .16s ease, box-shadow .16s ease;
    }
    rdr-tags .rt-champ input::placeholder, rdr-tags .rt-champ textarea::placeholder {
      color: var(--rt-gris);
    }
    rdr-tags .rt-champ input:hover, rdr-tags .rt-champ textarea:hover {
      border-color: var(--rt-teal);
    }
    rdr-tags .rt-champ input:focus, rdr-tags .rt-champ textarea:focus {
      border-color: var(--rt-teal); box-shadow: 0 0 0 3px rgba(93, 191, 192, .16);
    }
    rdr-tags .rt-champ textarea { resize: vertical; min-height: 74px; }
    rdr-tags .rt-champ input:focus-visible, rdr-tags .rt-champ textarea:focus-visible {
      outline: 2px solid var(--rt-teal); outline-offset: 1px;
    }
    rdr-tags .rt-sortie { margin-top: 20px; display: flex; flex-direction: column; }
    rdr-tags .rt-prop {
      display: flex; flex-wrap: wrap; gap: 10px 14px; align-items: center;
      padding: 12px 0; border-top: 1px solid var(--rt-trait);
    }
    rdr-tags .rt-prop:first-child { border-top: 0; }
    rdr-tags .rt-pourquoi { font-size: 13px; color: var(--rt-gris); flex: 1 1 220px; }
    rdr-tags .rt-vide {
      padding-top: 12px; border-top: 1px solid var(--rt-trait);
      font-size: 14px; color: var(--rt-gris);
    }
    rdr-tags .rt-note {
      margin-top: 16px; padding: 11px 13px; font-size: 12.5px;
      color: var(--rt-encre-2); background: var(--rt-teal-doux);
    }

     
    rdr-tags .rt-paire {
      display: inline-flex; align-items: stretch;
      border: 1px solid var(--rt-trait-fort); border-radius: 2px; overflow: hidden;
    }
    rdr-tags .rt-copie {
      display: inline-flex; align-items: center; gap: 7px; cursor: pointer;
      padding: 7px 10px; border: 0; background: transparent; color: var(--rt-encre);
      font: 500 12.5px/1 "IBM Plex Mono", ui-monospace, "SFMono-Regular", monospace;
      white-space: nowrap;
    }
    rdr-tags .rt-copie.rt-fr { background: var(--rt-teal-doux); }
    rdr-tags .rt-copie.rt-en { border-left: 1px solid var(--rt-trait-fort); color: var(--rt-gris); }
    rdr-tags .rt-copie:hover { background: var(--rt-teal); color: #fff; }
    rdr-tags .rt-copie:focus-visible { outline: 2px solid var(--rt-teal); outline-offset: -2px; }
    rdr-tags .rt-drap {
      width: 17px; height: 11.5px; flex: 0 0 auto; border-radius: 1.5px;
      box-shadow: 0 0 0 1px rgba(11, 27, 51, .22);
    }
    rdr-tags .rt-mot { line-height: 1; }
    

    rdr-tags .rt-etat { display: grid; width: 13px; height: 13px; flex: 0 0 auto; }
    rdr-tags .rt-etat svg { grid-area: 1 / 1; width: 13px; height: 13px; opacity: .45; }
    rdr-tags .rt-etat svg + svg { opacity: 0; }
    rdr-tags .rt-copie:hover .rt-etat svg { opacity: .95; }
    rdr-tags .rt-copie[data-fait="oui"] { background: var(--rt-teal); color: #fff; }
    rdr-tags .rt-copie[data-fait="oui"] .rt-etat svg { opacity: 0; }
    rdr-tags .rt-copie[data-fait="oui"] .rt-etat svg + svg { opacity: 1; }

     
    rdr-tags .rt-liste { display: flex; flex-direction: column; }
    rdr-tags .rt-item {
      display: grid; grid-template-columns: minmax(230px, 290px) 1fr; gap: 22px;
      padding: 16px 0; border-top: 1px solid var(--rt-trait);
    }
    rdr-tags .rt-item:first-child { border-top: 1px solid var(--rt-trait-fort); }
    

    @media (hover: hover) and (pointer: fine) {
      rdr-tags .rt-item { transition: background .14s ease; }
      rdr-tags .rt-item:hover { background: var(--rt-carte); }
    }
    rdr-tags .rt-item-g { display: flex; flex-direction: column; gap: 8px; }
    rdr-tags .rt-quand { font-size: 14.5px; }
    rdr-tags .rt-avec { font-size: 12.5px; color: var(--rt-gris); margin-top: 4px; }
    rdr-tags .rt-avec b { font-weight: 600; color: var(--rt-encre-2); }
    @media (max-width: 700px) {
      rdr-tags .rt-item { grid-template-columns: 1fr; gap: 10px; }
    }

     
    rdr-tags .rt-pieges { display: flex; flex-direction: column; gap: 12px; }
    rdr-tags .rt-piege { display: grid; grid-template-columns: auto 1fr; gap: 13px; align-items: start; }
    rdr-tags .rt-marque {
      font: 600 11px/1 "IBM Plex Mono", monospace; padding: 4px 8px; border-radius: 2px;
      background: var(--rt-rouge-doux); color: var(--rt-rouge); white-space: nowrap;
    }
    rdr-tags .rt-piege p { font-size: 14.5px; }
    rdr-tags .rt-piege em { font-style: normal; color: var(--rt-gris); }

    rdr-tags .rt-pied {
      margin-top: 44px; padding-top: 20px; border-top: 1px solid var(--rt-trait);
      font-size: 12.5px; color: var(--rt-gris);
      display: flex; flex-direction: column; gap: 6px;
    }

     
    rdr-tags .rt-jauge { display: flex; align-items: center; gap: 10px; font: 500 12px/1.3 Montserrat, sans-serif; color: var(--rt-gris); }
    rdr-tags .rt-jauge-barre { position: relative; flex: 0 0 120px; height: 4px; border-radius: 2px; background: var(--rt-trait); overflow: hidden; }
    rdr-tags .rt-jauge-barre i { position: absolute; left: 0; top: 0; bottom: 0; width: var(--p, 0%); background: var(--c, var(--rt-teal)); transition: width .15s ease; }
    rdr-tags .rt-jauge[data-etat="long"], rdr-tags .rt-jauge[data-etat="court"] { --c: #F5BE41; color: #F5BE41; }
    rdr-tags .rt-jauge[data-etat="trop"] { --c: #FF8A73; color: #FF8A73; }
    rdr-tags .rt-verdicts { margin-top: 22px; display: flex; flex-direction: column; }
    rdr-tags .rt-verdict { display: grid; grid-template-columns: 104px 1fr; gap: 16px; padding: 16px 0; border-top: 1px solid var(--rt-trait); }
    rdr-tags .rt-verdict-t { font: 700 11px/1.35 Montserrat, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: var(--rt-teal); padding-top: 4px; }
    rdr-tags .rt-verdict-c { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
    rdr-tags .rt-ligne { display: flex; gap: 9px; align-items: baseline; font-size: 13.5px; color: var(--rt-encre-2); }
    rdr-tags .rt-ligne b { color: var(--rt-encre); font-weight: 600; }
    rdr-tags .rt-signe { flex: 0 0 auto; width: 16px; text-align: center; font-weight: 800; }
    rdr-tags .rt-ligne[data-ton="ok"] .rt-signe { color: var(--rt-teal); }
    rdr-tags .rt-ligne[data-ton="alerte"] .rt-signe { color: #F5BE41; }
    rdr-tags .rt-propose { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 10px 12px; background: var(--rt-teal-doux); border-radius: 2px; }
    rdr-tags .rt-propose-t { flex: 1 1 260px; font-size: 14px; font-weight: 600; color: var(--rt-encre); }
    rdr-tags .rt-bouton {
      display: inline-flex; align-items: center; gap: 7px; cursor: pointer; padding: 8px 12px;
      border: 1px solid var(--rt-trait-fort); border-radius: 2px; background: transparent; color: var(--rt-encre);
      font: 600 12.5px/1 Montserrat, sans-serif; white-space: nowrap;
    }
    rdr-tags .rt-bouton:hover, rdr-tags .rt-bouton[data-fait="oui"] { background: var(--rt-teal); border-color: var(--rt-teal); color: #06222B; }
    rdr-tags .rt-bouton:focus-visible { outline: 2px solid var(--rt-teal); outline-offset: 2px; }
    rdr-tags .rt-bouton .rt-etat svg { opacity: .8; }
    rdr-tags .rt-bouton[data-fait="oui"] .rt-etat svg { opacity: 0; }
    rdr-tags .rt-bouton[data-fait="oui"] .rt-etat svg + svg { opacity: 1; }
    rdr-tags .rt-url { display: flex; align-items: stretch; flex-wrap: wrap; gap: 8px; }
    rdr-tags .rt-url-champ {
      flex: 1 1 320px; display: flex; align-items: stretch; min-width: 0;
      border: 1px solid var(--rt-trait-fort); border-radius: 2px; background: rgba(255, 255, 255, .04);
      font: 500 13px/1 "IBM Plex Mono", ui-monospace, monospace;
    }
    rdr-tags .rt-url-champ:focus-within { border-color: var(--rt-teal); }
    rdr-tags .rt-url-base { padding: 11px 0 11px 11px; color: var(--rt-gris); white-space: nowrap; }
    rdr-tags .rt-url-champ input { flex: 1 1 auto; min-width: 0; padding: 11px 11px 11px 1px; border: 0; background: transparent; color: var(--rt-encre); font: inherit; outline: none; }
    rdr-tags .rt-url-info { font-size: 12.5px; color: var(--rt-gris); }
    rdr-tags .rt-url-info b { color: var(--rt-encre-2); font-weight: 600; }
    rdr-tags .rt-avant {
      font: 500 12px/1.45 "IBM Plex Mono", ui-monospace, monospace; color: var(--rt-gris);
      padding: 9px 11px; border-left: 2px solid #FF8A73; background: rgba(255, 138, 115, .08); word-break: break-all;
    }
    rdr-tags .rt-avant b { font-family: Montserrat, sans-serif; font-weight: 600; color: #FFB4A5; word-break: normal; }
    rdr-tags .rt-ou { font-size: 12.5px; color: var(--rt-encre-2); }
    rdr-tags .rt-ou b { color: var(--rt-encre); }
    rdr-tags .rt-points + .rt-liste { margin-top: 24px; }
    rdr-tags .rt-verdict .rt-sortie { margin-top: 0; }
    rdr-tags .rt-verdict .rt-prop:first-child { padding-top: 0; }
    rdr-tags .rt-verdict .rt-vide { padding-top: 0; border-top: 0; }
    @media (max-width: 700px) {
      rdr-tags .rt-verdict { grid-template-columns: 1fr; gap: 8px; }
    }

    @media (prefers-reduced-motion: reduce) {
      rdr-tags * { transition: none !important; animation: none !important; }
    }
  `;

  class RdrTags extends HTMLElement {
    static get observedAttributes() { return ['payload']; }

    connectedCallback() {
      




      this.style.display = 'block';
      this.style.width = '100%';
      this._injecterCss();
      this._flotte = this._lireFlotte();
      this.innerHTML = this._html();
      this._cabler();
      this._verdictTitre();
      this._adresse(true);
      this._proposer();
    }

     
    _verdictTitre() {
      const zone = this.querySelector('[data-v-titre]');
      if (!zone) return;
      const t = ((this.querySelector('#rt-titre') || {}).value || '').trim();
      const n = t.length;
      const jauge = this.querySelector('[data-jauge]');
      if (jauge) {
        jauge.setAttribute('data-etat', !n ? '' : n < 30 ? 'court' : n <= 60 ? 'ok' : n <= 70 ? 'long' : 'trop');
        jauge.style.setProperty('--p', Math.min(100, Math.round(n / 70 * 100)) + '%');
        const txt = jauge.querySelector('[data-jauge-t]');
        if (txt) txt.textContent = n + ' caractères · idéal 40 à 60';
      }
      if (!n) { zone.innerHTML = '<p class="rt-ligne">Colle ton titre au-dessus.</p>'; return; }
      const propre = sansMarque(t);
      const avecMarque = propre !== t;
      const nn = propre.length;
      const lettres = t.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '');
      const toutCaps = lettres.length > 12 && lettres.replace(/[^A-ZÀ-ÖØ-Þ]/g, '').length / lettres.length > 0.7;
      const lignes = [];
      const ligne = (ton, html) => lignes.push('<p class="rt-ligne" data-ton="' + ton + '"><span class="rt-signe">' +
        (ton === 'ok' ? '✓' : '!') + '</span><span>' + html + '</span></p>');
      if (avecMarque) ligne('alerte', '<b>Commence par le sujet.</b> « Route du Rhum – Destination Guadeloupe » ' +
        'prend 40 caractères avant lui, et le site porte déjà la marque.');
      if (nn > 70) ligne('alerte', '<b>Trop long</b> (' + nn + ' caractères) : Google coupe vers 60. Garde l’essentiel.');
      else if (nn > 60) ligne('alerte', '<b>Un peu long</b> (' + nn + ' caractères) : Google coupe vers 60.');
      else if (nn < 30) ligne('alerte', '<b>Un peu court</b> (' + nn + ' caractères) : dis le sujet et ce qui se passe.');
      if (toutCaps) ligne('alerte', '<b>Pas tout en capitales</b> : le site les met lui-même là où il faut.');
      if (/\.\s*$/.test(t) && !/(\.\.\.|…)\s*$/.test(t)) ligne('alerte', '<b>Pas de point final</b> dans un titre.');
      if (!lignes.length) ligne('ok', '<b>Bon titre</b> : le sujet d’abord, ' + nn + ' caractères.');
      zone.innerHTML = lignes.join('') + (avecMarque
        ? '<div class="rt-propose"><span class="rt-propose-t">' + esc(propre) + '</span>' +
          '<button class="rt-bouton" type="button" data-copier="' + esc(propre) + '" title="Copier le titre proposé">' +
          'Copier ce titre<span class="rt-etat">' + ICO_COPIE + ICO_OK + '</span></button></div>'
        : '');
    }

     
    _adresse(depuisTitre) {
      const champ = this.querySelector('#rt-url');
      if (!champ) return;
      const titre = (this.querySelector('#rt-titre') || {}).value || '';
      if (depuisTitre && !this._urlTouchee) champ.value = adresse(titre);
      const s = champ.value.replace(/-+$/, '');
      const bouton = this.querySelector('[data-copier-url]');
      if (bouton) bouton.setAttribute('data-copier', s);
      const mots = s ? s.split('-').filter(Boolean).length : 0;
      const info = this.querySelector('[data-url-info]');
      if (info) info.innerHTML = s
        ? '<b>' + s.length + ' caractères, ' + mots + ' mot' + (mots > 1 ? 's' : '') + '</b> · minuscules, sans accents, ' +
          'des tirets' + (s.length > 60 || mots > 6 ? ' · un peu longue : garde les mots qui disent le sujet' : '')
        : 'Écris un titre, l’adresse suit.';
      const avant = this.querySelector('[data-avant]');
      const w = adresseParDefaut(titre);
      if (avant) {
        avant.hidden = !w || w === s;
        if (!avant.hidden) avant.innerHTML = '<b>Sans rien toucher, ton URL ressemblerait à :</b> /post/' +
          esc(w) + ' <b>(' + w.length + ' caractères' + (/[^\x00-\x7F]/.test(w) ? ', avec accents' : '') + ')</b>';
      }
    }

    attributeChangedCallback() {
      if (!this.isConnected) return;
      this._flotte = this._lireFlotte();
      this._proposer();
    }

     
    _injecterCss() {
      if (document.getElementById('rt-css')) return;
      const s = document.createElement('style');
      s.id = 'rt-css';
      s.textContent = CSS;
      document.head.appendChild(s);
    }

     
    _lireFlotte() {
      const brut = this.getAttribute('payload');
      if (brut) {
        try {
          const p = JSON.parse(brut);
          if (Array.isArray(p.flotte) && p.flotte.length) {
            return p.flotte.map(x => ({ nom: String(x.nom || ''), f: String(x.f || '') }))
              .filter(x => x.nom.length >= 4);
          }
        } catch (e) {   }
      }
      return FLOTTE_BRUTE.split(',').map(x => {
        const [avant, f] = x.split(':');
        const [prenom, nom] = avant.split('|');
        return { prenom: prenom || '', nom: nom || '', f: f || '' };
      }).filter(x => x.nom.length >= 4);
    }

    _paire(s) {
      const bouton = (cls, drapeau, mot, titre) =>
        '<button class="rt-copie ' + cls + '" type="button" data-copier="' + esc(mot) +
        '" title="' + titre + '">' + drapeau + '<span class="rt-mot">' + esc(mot) +
        '</span><span class="rt-etat">' + ICO_COPIE + ICO_OK + '</span></button>';
      return '<span class="rt-paire">' +
        bouton('rt-fr', DRAP_FR, s.fr, 'Copier le tag français') +
        bouton('rt-en', DRAP_EN, s.en, 'Copier le tag anglais') +
        '</span>';
    }

    _html() {
      const liste = SUJETS.map(s =>
        '<div class="rt-item">' +
          '<div class="rt-item-g">' + this._paire(s) +
            (s.avec.length ? '<p class="rt-avec">couvre aussi <b>' +
              s.avec.map(esc).join('</b>, <b>') + '</b></p>' : '') +
          '</div>' +
          '<div><p class="rt-quand">' + esc(s.quand) + '</p></div>' +
        '</div>').join('');

      return '' +
      '<header class="rt-mast">' +
        '<div class="rt-mast-in">' +
          '<span class="rt-oeil">Route du Rhum 2026 · consigne de publication</span>' +
          '<h1 class="rt-h1">Publier une actu</h1>' +
          '<p class="rt-intro">Trois gestes avant de cliquer sur Publier : le titre, l’adresse, ' +
          'les tags. L’outil plus bas fait le travail, tu vérifies. Les quatorze tags du site, ' +
          'un clic pour copier :</p>' +
          '<div class="rt-bandeau">' +
            SUJETS.map(x => '<button class="rt-jeton" type="button" data-copier="' +
              esc(x.fr) + '" title="Copier « ' + esc(x.fr) + ' »">' + esc(x.fr) +
              '<span class="rt-etat">' + ICO_COPIE + ICO_OK + '</span></button>').join('') +
          '</div>' +
        '</div>' +
        VAGUE +
      '</header>' +
      '<div class="rt-page">' +

        



        

        '<div class="rt-points">' +
          '<div class="rt-point"><span class="rt-point-n">1</span><p>' +
            '<b>Le titre commence par le sujet.</b> Qui ou quoi, dès les premiers mots : un ' +
            'skipper, un bateau, une classe, un lieu, un moment de la course. Entre 40 et 60 ' +
            'caractères. Pas de « Route du Rhum – Destination Guadeloupe » par réflexe : le site ' +
            'porte déjà la marque.' +
          '</p></div>' +
          '<div class="rt-point"><span class="rt-point-n">2</span><p>' +
            '<b>L’adresse se règle avant de publier.</b> Courte, sans accents, trois à six mots ' +
            'du sujet : l’outil la propose, tu la colles dans les réglages de l’article, onglet ' +
            'SEO. Une fois l’article publié, on n’y touche plus : les liens déjà partagés casseraient.' +
          '</p></div>' +
          '<div class="rt-point"><span class="rt-point-n">3</span><p>' +
            '<b>Au moins un tag du pool</b>, repris à la lettre. Deux valent mieux qu’un. ' +
            'Les règles des tags sont plus bas, avec les quatorze.' +
          '</p></div>' +
        '</div>' +

        '<section class="rt-sec">' +
          '<div class="rt-sec-tete">' +
            '<span class="rt-oeil">L’outil</span>' +
            '<h2 class="rt-h2">Colle ton titre, il fait le reste</h2>' +
            '<p>Il vérifie le titre, propose l’adresse, et propose les tags : il reconnaît les ' +
            'skippers de la flotte, repère une citation, lit les mots du texte. Il propose, tu décides.</p>' +
          '</div>' +
          '<div class="rt-outil">' +
            '<div class="rt-outil-tete">' +
              '<span class="rt-oeil">Avant de publier</span>' +
              '<span class="rt-compte" data-compte></span>' +
            '</div>' +
            '<div class="rt-champs">' +
              '<div class="rt-champ">' +
                '<label for="rt-titre">Titre de l’article</label>' +
                '<input id="rt-titre" type="text" autocomplete="off" spellcheck="false" ' +
                'value="Route du Rhum – Destination Guadeloupe – Violette Dorange : « c’est ma première et j’ai hâte d’y être ! »">' +
                '<div class="rt-jauge" data-jauge><span class="rt-jauge-barre"><i></i></span><span data-jauge-t></span></div>' +
              '</div>' +
              '<div class="rt-champ">' +
                '<label for="rt-chapo">Chapô ou résumé, si tu l’as déjà</label>' +
                '<textarea id="rt-chapo" spellcheck="false" placeholder="Colle ici le chapô : ' +
                'plus il y a de texte, meilleures sont les propositions de tags."></textarea>' +
              '</div>' +
            '</div>' +
            '<div class="rt-verdicts">' +
              '<div class="rt-verdict"><span class="rt-verdict-t">Le titre</span>' +
                '<div class="rt-verdict-c" data-v-titre></div></div>' +
              '<div class="rt-verdict"><span class="rt-verdict-t">L’adresse</span>' +
                '<div class="rt-verdict-c">' +
                  '<div class="rt-url">' +
                    '<label class="rt-url-champ" for="rt-url"><span class="rt-url-base">routedurhum.com/post/</span>' +
                      '<input id="rt-url" type="text" autocomplete="off" spellcheck="false" aria-label="Adresse de l’article"></label>' +
                    '<button class="rt-bouton" type="button" data-copier-url title="Copier l’adresse">Copier' +
                      '<span class="rt-etat">' + ICO_COPIE + ICO_OK + '</span></button>' +
                  '</div>' +
                  '<p class="rt-url-info" data-url-info></p>' +
                  '<p class="rt-avant" data-avant></p>' +
                  '<p class="rt-ou"><b>À coller avant de publier</b>, dans les réglages de l’article, ' +
                  'onglet SEO. Tu peux la retoucher ici : elle reste propre pendant que tu tapes.</p>' +
                '</div></div>' +
              '<div class="rt-verdict"><span class="rt-verdict-t">Les tags</span>' +
                '<div class="rt-verdict-c"><div class="rt-sortie" data-sortie></div>' +
                '<p class="rt-note">S’il ne propose rien, ça ne veut pas dire que l’article ' +
                'n’a pas de sujet. Regarde la liste et choisis.</p></div></div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        '<section class="rt-sec">' +
          '<div class="rt-sec-tete">' +
            '<span class="rt-oeil">Le pool</span>' +
            '<h2 class="rt-h2">Les quatorze, à copier</h2>' +
            '<p>Un clic sur une étiquette la copie. Un article français prend le tag français, ' +
            'un article anglais prend l’anglais : l’Espace Rhum réunit les deux tout seul.</p>' +
          '</div>' +
        '<div class="rt-points">' +
          '<div class="rt-point"><span class="rt-point-n">1</span><p>' +
            '<b>Sers-toi de ceux-là en priorité.</b> Ils sont faits pour que les outils du ' +
            'site filtrent correctement. Au moins un par article, deux valent mieux qu’un.' +
          '</p></div>' +
          '<div class="rt-point"><span class="rt-point-n">2</span><p>' +
            '<b>Reprends-les tels quels</b>, à la lettre, tels qu’ils sont écrits ici. Un mot ' +
            'approchant ou inventé ne filtre rien et ne sera proposé à personne.' +
          '</p></div>' +
          








          '<div class="rt-point"><span class="rt-point-n">3</span><p>' +
            '<b>Tu peux en ajouter d’autres</b> si c’est pertinent, autant que tu veux. ' +
            'Ça ne remplace rien, ça complète : classes, skippers, partenaires, tout continue.' +
            '<span class="rt-garde">' +
              '<b>Mais pioche d’abord dans ce qui existe.</b> Avant d’écrire un tag, ' +
              'cherche-le dans la liste du blog : « Femmes » et « femme » font deux tags ' +
              'différents, et aucun des deux ne ramasse les articles de l’autre. Un ' +
              'doublon ne filtre pas moins, il éparpille. On n’en crée un que si aucun ' +
              'mot déjà là ne dit la chose.' +
            '</span>' +
          '</p></div>' +
        '</div>' +

          '<div class="rt-liste">' + liste + '</div>' +
        '</section>' +

        '<section class="rt-sec">' +
          '<div class="rt-sec-tete">' +
            '<span class="rt-oeil">Vu dans le blog</span>' +
            '<h2 class="rt-h2">Cinq pièges</h2>' +
          '</div>' +
          '<div class="rt-pieges">' +
            '<div class="rt-piege"><span class="rt-marque">par défaut</span><div>' +
              '<p>L’adresse laissée telle qu’elle sort du titre. <em>C’est le cas de 689 ' +
              'articles sur 737 : des accents, souvent plus de 60 caractères, et pour Violette ' +
              'Dorange 92 caractères qui commencent par « route-du-rhum-destination-guadeloupe » ' +
              'et finissent coupés en plein mot.</em></p></div></div>' +
            '<div class="rt-piege"><span class="rt-marque">marque en tête</span><div>' +
              '<p>« Route du Rhum – Destination Guadeloupe – » devant le sujet. <em>Google ' +
              'n’affiche que 60 caractères environ : la marque en prend 40 et le sujet ' +
              'disparaît. Le site la porte déjà.</em></p></div></div>' +
            '<div class="rt-piege"><span class="rt-marque">à côté</span><div>' +
              '<p>Un entretien tagué <b>Écologie &amp; Océan</b> parce qu’on y parle de la mer. ' +
              '<em>C’est une Interview. Écologie se réserve aux articles qui parlent vraiment ' +
              'd’environnement.</em></p></div></div>' +
            '<div class="rt-piege"><span class="rt-marque">à moitié</span><div>' +
              '<p>Un portrait de navigatrice tagué <b>Portrait</b> seulement. ' +
              '<em>Il lui manque Femmes. Les deux, à chaque fois.</em></p></div></div>' +
            '<div class="rt-piege"><span class="rt-marque">inventé</span><div>' +
              '<p>Un tag de sujet créé à la volée. <em>Les préférences ne connaissent que ces ' +
              'quatorze angles : un quinzième mot ne sera proposé à personne.</em></p></div></div>' +
          '</div>' +
        '</section>' +

        '<div class="rt-pied">' +
          '<p>Les tags de <b>classe</b> et de <b>skipper</b> continuent comme avant : ils ' +
          'alimentent les deux autres portes de l’Espace Rhum.</p>' +
        '</div>' +
      '</div>';
    }

    


    _proposer() {
      const sortie = this.querySelector('[data-sortie]');
      if (!sortie) return;
      const titre = (this.querySelector('#rt-titre') || {}).value || '';
      const chapo = (this.querySelector('#rt-chapo') || {}).value || '';
      

      

      const t = pli(titre + ' ' + chapo).replace(/[^a-z0-9]+/g, ' ')
        .replace(/ocean fifty/g, ' ').replace(/s+/g, ' ').trim();
      const trouve = new Map();
      const ajoute = (nom, motif) => { if (!trouve.has(nom)) trouve.set(nom, motif); };

      



      const prenoms = new Set(this._flotte.map(x => pli(x.prenom)));
      const motEntier = (texte, mot) => (' ' + texte + ' ').indexOf(' ' + mot + ' ') >= 0;
      for (const s of this._flotte) {
        const nom = pli(s.nom), complet = pli(s.prenom + ' ' + s.nom);
        const ambigu = prenoms.has(nom);
        const cite = motEntier(t, complet) || (!ambigu && motEntier(t, nom));
        if (!cite) continue;
        if (s.f.indexOf('F') >= 0) ajoute('Femmes', 'le texte cite ' + s.prenom + ' ' + s.nom + ', qui est une navigatrice');
        





        



        if (s.f.indexOf('R') >= 0) ajoute('Rookies', 'la fiche de ' + s.prenom + ' ' + s.nom + ' porte le tag Rookie');
      }
      if (/[«»“”"].{4,}[«»“”"]/.test(titre) || /:\s*[«"“]/.test(titre)) {
        ajoute('Interview', 'le titre porte une citation entre guillemets');
      }
      for (const nom of Object.keys(LEXIQUE)) {
        const m = LEXIQUE[nom].find(x => t.indexOf(pli(x)) >= 0);
        if (m) ajoute(nom, 'le mot « ' + m + ' » apparaît dans le texte');
      }

      const compte = this.querySelector('[data-compte]');
      if (compte) {
        compte.innerHTML = trouve.size
          ? '<span class="rt-pastille"></span>' + trouve.size +
            (trouve.size > 1 ? ' propositions' : ' proposition')
          : '';
      }
      if (!trouve.size) {
        sortie.innerHTML = '<p class="rt-vide">Rien de reconnu pour l’instant. Continue à ' +
          'écrire, ou choisis dans la liste plus bas.</p>';
        return;
      }
      const parNom = {};
      SUJETS.forEach(s => { parNom[s.fr] = s; });
      sortie.innerHTML = [...trouve.entries()].map(([nom, motif]) =>
        '<div class="rt-prop">' + this._paire(parNom[nom]) +
        '<p class="rt-pourquoi">' + esc(motif) + '</p></div>').join('');
    }

    _cabler() {
      this.addEventListener('input', (e) => {
        if (e.target.id === 'rt-titre') { this._verdictTitre(); this._adresse(true); this._proposer(); }
        else if (e.target.id === 'rt-chapo') this._proposer();
        else if (e.target.id === 'rt-url') {
          

          const v = nettoyerAdresse(e.target.value);
          if (v !== e.target.value) e.target.value = v;
          this._urlTouchee = !!v;
          this._adresse(!v);
        }
      });
      this.addEventListener('change', (e) => {
        if (e.target.id === 'rt-url') { e.target.value = e.target.value.replace(/-+$/, ''); this._adresse(false); }
      });
      


      this.addEventListener('click', (e) => {
        const b = e.target.closest && e.target.closest('[data-copier]');
        if (!b) return;
        const texte = b.getAttribute('data-copier');
        


        const fini = () => {
          b.setAttribute('data-fait', 'oui');
          setTimeout(() => b.removeAttribute('data-fait'), 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(texte).then(fini, () => this._copieRepli(texte, fini));
        } else {
          this._copieRepli(texte, fini);
        }
      });
    }

    _copieRepli(texte, fini) {
      const z = document.createElement('textarea');
      z.value = texte;
      z.setAttribute('readonly', '');
      z.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(z);
      z.select();
      try { document.execCommand('copy'); fini(); } catch (err) {   }
      z.remove();
    }
  }

  customElements.define('rdr-tags', RdrTags);
})();
})();
