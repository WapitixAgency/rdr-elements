/* rdr-elements reglements | source route-du-rhum 05212f4 | rdr-reglements.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["reglements"]="05212f4";performance.mark("rdr-elements:reglements")}catch(e){}
;(function(){
(function () {
  'use strict';

  

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-reglements')) return;

  


  const IC = {
    scrollText: '<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
    bike: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    calendarDays: '<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',
    listChecks: '<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',
    badgeCheck: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    trophy: '<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',
    phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    gavel: '<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"/><path d="m16 16 6-6"/><path d="m21.5 10.5-8-8"/><path d="m8 8 6-6"/><path d="m8.5 7.5 8 8"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
  };

  const svg = (clef, classe) => {
    const d = IC[clef];
    if (!d) return '';
    return '<svg class="' + (classe || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + '</svg>';
  };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  

















  const REGLEMENTS = [
    {
      id: 'challenge-mobilite',
      actif: true,
      icone: 'bike',
      nom: 'Challenge Mobilité',
      nature: { fr: 'Jeu-concours', en: 'Prize competition' },
      debut: '2026-10-20',
      fin: '2026-11-01',
      

      publieLe: '2026-09-23',
      version: '2026-09-23',
      organisateur: 'OC Sport Pen Duick',
      participer: { href: '/se-rendre-au-village#mobilite', fr: 'Page « Se rendre au village »', en: '“Getting to the village” page' },
      pdf: '',
      articles: [
        {
          num: '1', icone: 'building', court: 'Société organisatrice', titre: 'Société organisatrice',
          blocs: [
            'La société OC Sport Pen Duick, SASU (Société par actions simplifiée unipersonnelle) au capital de 884 000€, immatriculée au Registre du Commerce et des Sociétés de Lorient sous le numéro 521 573 394 00074, dont le siège social est situé 6 Bis Rue du Sous-Marin Vénus, 56100 Lorient (ci-après « l’Organisateur »), organise, du 20 octobre 2026 au 1er novembre 2026, un jeu-concours gratuit et sans obligation d’achat intitulé « Challenge Mobilité », dans le cadre de la Route du Rhum – Destination Guadeloupe 2026.'
          ]
        },
        {
          num: '2', icone: 'target', court: 'Objet du jeu', titre: 'Objet du jeu',
          blocs: [
            'Le Challenge Mobilité vise à encourager les visiteurs du village de la Route du Rhum – Destination Guadeloupe à privilégier, pour se rendre sur le village, des modes de transport décarbonés ou partagés (train, bus / transports en commun, covoiturage, vélo, marche à pied), dans le cadre de la démarche RSE « Terres d’engagements » de l’événement.'
          ]
        },
        {
          num: '3', icone: 'calendarDays', court: 'Durée du jeu', titre: 'Durée du jeu',
          blocs: [
            'Le jeu se déroule du 20 octobre 2026 au 1er novembre 2026 inclus, soit pendant les 13 jours d’ouverture du village de la Route du Rhum – Destination Guadeloupe.'
          ]
        },
        {
          num: '4', icone: 'listChecks', court: 'Participation', titre: 'Conditions et modalités de participation',
          blocs: [
            { h3: '4.1 Participants éligibles' },
            'Le jeu est ouvert à toute personne physique, à l’exclusion des membres du personnel de l’Organisateur, de ses prestataires directement impliqués dans l’organisation du jeu.',
            { h3: '4.2 Modalités de participation' },
            'Pour participer, le visiteur doit, depuis la page {a:/se-rendre-au-village}« Se rendre au village »{/a} du site de la Route du Rhum – Destination Guadeloupe :',
            { ul: [
              'Renseigner ses nom, prénom, date de naissance, adresse e-mail et numéro de téléphone ;',
              'Indiquer la date de sa venue au village, parmi les 13 jours d’ouverture ;',
              'Indiquer son mode de transport parmi : train (TGV/TER), bus / transports en commun, covoiturage, vélo, à pied ;',
              'Déposer un justificatif de mobilité correspondant au mode déclaré (billet de train ou de bus, confirmation de covoiturage, photo du vélo ou du participant à pied, etc.), au format PDF, JPG/JPEG ou PNG, dans la limite de 5 à 10 Mo ;',
              'Cocher la case d’acceptation du présent règlement, distincte de toute case relative à la newsletter ou aux données personnelles.'
            ] },
            { h3: '4.3 Nombre de participations' },
            'Chaque personne, identifiée par son adresse e-mail et/ou son numéro de téléphone, ne peut participer qu’une seule fois par jour d’ouverture du village. Toute participation supplémentaire pour une même journée sera considérée comme non valide.'
          ]
        },
        {
          num: '5', icone: 'badgeCheck', court: 'Contrôle des justificatifs', titre: 'Contrôle des justificatifs',
          blocs: [
            'Chaque participation fait l’objet d’un contrôle interne du justificatif déposé par l’équipe de l’Organisateur, avec l’un des statuts suivants : « à vérifier », « validé » ou « refusé ». Seules les participations dont le justificatif a été validé sont prises en compte dans les tirages au sort.'
          ]
        },
        {
          num: '6', icone: 'trophy', court: 'Tirages et dotations', titre: 'Tirages au sort et dotations',
          blocs: [
            { h3: '6.1 Tirages quotidiens' },
            'Un tirage au sort est organisé chaque jour à 10h, parmi l’ensemble des participations validées et éligibles pour la journée concernée. Le gagnant remporte une expérience liée à la Route du Rhum (à titre d’exemple : accès VIP, visite de bateau, accréditation journalière), dont la nature précise est déterminée par l’Organisateur avant chaque tirage.',
            { h3: '6.2 Tirage final' },
            'À l’issue des 13 jours du village, un tirage au sort final est organisé parmi l’ensemble des participations validées et éligibles sur toute la durée du jeu. Le gagnant remporte une sortie en mer à bord d’un Ocean Fifty. La date et lieu seront communiqués à l’issu du tirage au sort.',
            { h3: '6.3 Cumul des gains' },
            'Une participation ayant remporté un lot lors d’un tirage quotidien reste éligible au tirage final. Une même personne ne peut en revanche remporter qu’un seul lot quotidien sur l’ensemble du jeu ; ce contrôle est assuré manuellement par l’équipe de l’Organisateur.'
          ]
        },
        {
          num: '7', icone: 'phone', court: 'Information des gagnants', titre: 'Désignation et information des gagnants',
          blocs: [
            'Les gagnants sont désignés de manière aléatoire par le système de gestion des participations. Ils sont informés par téléphone par l’équipe de l’Organisateur, au numéro communiqué lors de leur participation.',
            'Si un gagnant ne peut être joint dans un délai de 1 heure, l’Organisateur se réserve le droit de procéder à un nouveau tirage au sort parmi les participations restantes.'
          ]
        },
        {
          num: '8', icone: 'lock', court: 'Données personnelles', titre: 'Données personnelles',
          blocs: [
            'Les données personnelles collectées (nom, prénom, date de naissance, e-mail, téléphone, justificatif de mobilité) sont traitées par l’Organisateur aux seules fins de la gestion du jeu (vérification de l’éligibilité, réalisation des tirages, contact des gagnants) et de l’établissement du bilan RSE de l’événement, sous forme agrégée et anonymisée s’agissant des données de mobilité.',
            'La participation au jeu n’est conditionnée ni à une inscription à la newsletter de la Route du Rhum – Destination Guadeloupe, ni à l’utilisation des données à des fins commerciales. Toute inscription à la newsletter fait l’objet d’une case à cocher distincte et facultative.',
            'Conformément au RGPD et à la loi Informatique et Libertés, les participants disposent d’un droit d’accès, de rectification, d’effacement et d’opposition, qu’ils peuvent exercer auprès de {a:mailto:rgpd@ocsport.com}rgpd@ocsport.com{/a}.',
            'Les données sont conservées pendant une durée de 3 ans, à l’issue de laquelle elles sont supprimées ou anonymisées.',
            



            'Pour en savoir plus sur la manière dont OC Sport traite les données personnelles, consultez la {a:/politique-de-confidentialite}politique de confidentialité{/a} du site.'
          ]
        },
        {
          num: '9', icone: 'shieldCheck', court: 'Sécurité et fraude', titre: 'Sécurité et lutte contre la fraude',
          blocs: [
            'Le formulaire de participation est accessible en connexion sécurisée (HTTPS) et les données sont stockées de façon sécurisée, avec un accès limité aux personnes habilitées d’OC Sport. Toute participation frauduleuse (fausse identité, justificatif falsifié, participations multiples non conformes, recours à des outils automatisés, etc.) entraîne l’exclusion immédiate et définitive du participant, sans préjudice des poursuites éventuelles.'
          ]
        },
        {
          num: '10', icone: 'alert', court: 'Responsabilité', titre: 'Responsabilité',
          blocs: [
            'L’Organisateur ne saurait être tenu responsable en cas de dysfonctionnement du réseau internet, du formulaire de participation, ou de tout événement extérieur à sa volonté, perturbant le bon déroulement du jeu. Il se réserve le droit d’annuler, de reporter ou de modifier le jeu si les circonstances l’exigent, sans que sa responsabilité ne puisse être engagée.'
          ]
        },
        {
          num: '12', icone: 'gavel', court: 'Loi applicable', titre: 'Loi applicable et litiges',
          blocs: [
            'Le présent règlement est soumis au droit français. Tout différend relatif à son interprétation ou à son application, qui n’aurait pu être réglé à l’amiable, sera soumis aux tribunaux compétents.'
          ]
        }
      ]
    }
  ];

   
  const CGU = '/conditions-d-utilisation';
  const CONF = '/politique-de-confidentialite';
  const MENTIONS = '/mentions-legales';

  const I18N = {
    fr: {
      surtitre: 'Jeux et concours',
      titre: 'Règlements',
      sousTitre: 'Les règlements des jeux et concours de la Route du Rhum, Destination Guadeloupe : sur le site, dans « Mon Espace Rhum » et au village. Chaque jeu a le sien, à lire avant de participer.',
      maj: 'Dernière mise à jour :',
      sommaire: 'Sommaire',
      sommaireAria: 'Sommaire des règlements',
      article: 'Article',
      fiche: { organisateur: 'Organisateur', periode: 'Période', participation: 'Participation', ouParticiper: 'Où participer', version: 'Version' },
      gratuit: 'Gratuite et sans obligation d’achat',
      periode: (d, f) => 'Du ' + d + ' au ' + f,
      versionDu: (v) => 'Règlement du ' + v,
      statut: { avenir: 'À venir', encours: 'En cours', termine: 'Terminé' },
      pdf: 'Télécharger le règlement (PDF)',
      avisLangue: '',
      vide: 'Aucun règlement n’est publié pour le moment.',
      nbJeux: (n) => n + ' jeux et concours',
      choixAria: 'Choisir un règlement',
      lire: 'Lire le règlement',
      tous: 'Tous les règlements',
      titreJeu: (nom) => 'Règlements · ' + nom,
      lies: {
        titre: 'Documents liés',
        texte: 'Les jeux proposés dans « Mon Espace Rhum » relèvent aussi de ses conditions d’utilisation ; en cas de contradiction, le règlement du jeu prévaut pour ce jeu. Les données personnelles sont traitées selon la politique de confidentialité du site.',
        liens: [
          { libelle: 'Conditions d’utilisation', href: CGU },
          { libelle: 'Politique de confidentialité', href: CONF },
          { libelle: 'Mentions légales', href: MENTIONS }
        ]
      }
    },
    en: {
      surtitre: 'Games and contests',
      titre: 'Official rules',
      sousTitre: 'The rules of the Route du Rhum, Destination Guadeloupe games and contests: on the website, in “My Espace Rhum” and at the village. Each game has its own, to be read before taking part.',
      maj: 'Last updated:',
      sommaire: 'Contents',
      sommaireAria: 'Table of contents of the rules',
      article: 'Article',
      fiche: { organisateur: 'Organiser', periode: 'Dates', participation: 'Entry', ouParticiper: 'Where to enter', version: 'Version' },
      gratuit: 'Free, no purchase necessary',
      periode: (d, f) => 'From ' + d + ' to ' + f,
      versionDu: (v) => 'Rules dated ' + v,
      statut: { avenir: 'Upcoming', encours: 'Open', termine: 'Closed' },
      pdf: 'Download the rules (PDF)',
      avisLangue: 'These rules are published in French. The French text below is the only version that applies.',
      vide: 'No rules are published yet.',
      nbJeux: (n) => n + ' games and contests',
      choixAria: 'Choose a set of rules',
      lire: 'Read the rules',
      tous: 'All rules',
      titreJeu: (nom) => 'Official rules · ' + nom,
      lies: {
        titre: 'Related documents',
        texte: 'Games offered in “My Espace Rhum” are also governed by its terms of use; in the event of a conflict, the rules of the game prevail for that game. Personal data is processed under the site’s privacy policy.',
        liens: [
          { libelle: 'Terms of use', href: CGU },
          { libelle: 'Privacy policy', href: CONF },
          { libelle: 'Legal notice', href: MENTIONS }
        ]
      }
    }
  };

  const MOIS = {
    fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  

  function dateLisible(iso, lang, sansAnnee) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || '').trim());
    if (!m) return String(iso || '');
    const mois = MOIS[lang][Number(m[2]) - 1];
    if (!mois) return String(iso);
    const j = Number(m[3]);
    const jour = lang === 'fr' && j === 1 ? '1er' : String(j);
    return jour + ' ' + mois + (sansAnnee ? '' : ' ' + m[1]);
  }

  

  function aujourdhuiParis() {
    try {
      return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    } catch (e) { return new Date().toISOString().slice(0, 10); }
  }

  function statutDe(r, jour) {
    if (r.debut && jour < r.debut) return 'avenir';
    if (r.fin && jour > r.fin) return 'termine';
    return 'encours';
  }

  






  const CSS = `
rdr-reglements{display:block;width:100%;}
rdr-reglements .rgl{
  --rgl-fond:#0E111D;
  --rgl-encre:#EEF2F8;
  --rgl-encre-douce:rgba(238,242,248,.72);
  --rgl-encre-sourde:rgba(238,242,248,.5);
  --rgl-filet-sombre:rgba(238,242,248,.14);
  --rgl-or:#FCDD00;
  --rgl-or-voile:rgba(252,221,0,.12);
  --rgl-or-filet:rgba(252,221,0,.4);
  --rgl-or-badge:rgba(252,221,0,.55);
  --rgl-carte:#FFFFFF;
  --rgl-carte-encre:#0E111D;
  --rgl-carte-texte:#2C3547;
  --rgl-carte-sourd:#6B7482;
  --rgl-carte-filet:#E4E8EE;
  --rgl-panneau:#F4F6F9;
  --rgl-vert:#006F7B;
  --rgl-t1:11px;
  --rgl-t2:13px;
  --rgl-t3:15px;
  --rgl-t4:17px;
  --rgl-t5:clamp(22px, 2.2vw, 30px);
  --rgl-t55:clamp(28px, 3.2vw, 44px);
  --rgl-t6:clamp(38px, 4.4vw, 62px);
  --rgl-e1:4px; --rgl-e2:8px; --rgl-e3:12px; --rgl-e4:16px;
  --rgl-e5:24px; --rgl-e6:32px; --rgl-e7:48px; --rgl-e8:64px;
  --rgl-r-carte:18px;
  --rgl-r-badge:14px;
  --rgl-r-lien:10px;
  --rgl-chrome:0px;
  --rgl-largeur:1180px;
  position:relative;
  display:block;
  background:var(--rgl-fond);
  color:var(--rgl-encre);
  font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-size:var(--rgl-t3);
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
rdr-reglements .rgl,rdr-reglements .rgl *,rdr-reglements .rgl *::before,rdr-reglements .rgl *::after{box-sizing:border-box;}
rdr-reglements .rgl p,rdr-reglements .rgl h1,rdr-reglements .rgl h2,rdr-reglements .rgl h3,rdr-reglements .rgl h4,rdr-reglements .rgl ul,rdr-reglements .rgl ol,rdr-reglements .rgl dl,rdr-reglements .rgl dd,rdr-reglements .rgl dt{margin:0;padding:0;}
rdr-reglements .rgl ul,rdr-reglements .rgl ol{list-style:none;}
rdr-reglements .rgl a{color:inherit;text-decoration:none;}
rdr-reglements .rgl svg{display:block;}

 
rdr-reglements .rgl .rgl-cadre{max-width:var(--rgl-largeur);margin:0 auto;padding:0 var(--rgl-e5);}
rdr-reglements .rgl .rgl-hero{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:var(--rgl-e6);align-items:center;padding:calc(var(--rgl-e8) + var(--rgl-e3)) 0 var(--rgl-e7);}
rdr-reglements .rgl .rgl-surtitre{display:inline-flex;align-items:center;gap:var(--rgl-e2);margin:0 0 var(--rgl-e4);font-size:var(--rgl-t2);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-surtitre::before{content:'';width:var(--rgl-e5);height:2px;background:var(--rgl-or);border-radius:2px;}
rdr-reglements .rgl .rgl-titre{margin:0 0 var(--rgl-e4);font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--rgl-t6);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-reglements .rgl .rgl-sous{max-width:60ch;margin:0 0 var(--rgl-e5);font-size:var(--rgl-t4);line-height:1.6;color:var(--rgl-encre-douce);}
rdr-reglements .rgl .rgl-pastille{display:inline-flex;align-items:center;gap:var(--rgl-e2);padding:var(--rgl-e2) var(--rgl-e4);border:1px solid var(--rgl-or-filet);border-radius:999px;font-size:var(--rgl-t2);font-weight:500;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-pastille svg{width:16px;height:16px;}
rdr-reglements .rgl .rgl-hero-icone{width:200px;height:200px;color:var(--rgl-or);opacity:.55;}
rdr-reglements .rgl .rgl-hero-icone svg{width:100%;height:100%;stroke-width:1.1;}

 
rdr-reglements .rgl .rgl-corps{display:grid;grid-template-columns:248px minmax(0,1fr);gap:var(--rgl-e7);align-items:start;padding-bottom:var(--rgl-e8);}
rdr-reglements .rgl .rgl-som{position:sticky;top:calc(var(--rgl-chrome) + var(--rgl-e6));max-height:calc(100vh - var(--rgl-chrome) - var(--rgl-e8));overflow-y:auto;overscroll-behavior:contain;padding-right:var(--rgl-e2);scrollbar-width:thin;scrollbar-color:var(--rgl-filet-sombre) transparent;}
rdr-reglements .rgl .rgl-som.deborde{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);}
rdr-reglements .rgl .rgl-som-titre{margin:0 0 var(--rgl-e4);font-size:var(--rgl-t1);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--rgl-encre-sourde);}
rdr-reglements .rgl .rgl-som-jeux{display:grid;gap:var(--rgl-e4);}
rdr-reglements .rgl .rgl-som-tete{display:flex;align-items:center;gap:var(--rgl-e3);padding:var(--rgl-e2) var(--rgl-e3);border-radius:var(--rgl-r-lien);font-size:var(--rgl-t3);font-weight:700;line-height:1.25;color:#FFFFFF;transition:background .15s,color .15s;}
rdr-reglements .rgl .rgl-som-tete svg{flex:0 0 auto;width:18px;height:18px;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-som-tete:hover{background:rgba(255,255,255,.06);}
rdr-reglements .rgl .rgl-som-tete:focus-visible{outline:2px solid var(--rgl-or);outline-offset:2px;}
rdr-reglements .rgl .rgl-som-tete.est-actif{background:var(--rgl-or-voile);color:var(--rgl-or);}
rdr-reglements .rgl .rgl-som-liste{display:grid;gap:2px;margin:var(--rgl-e1) 0 0 var(--rgl-e3);padding-left:var(--rgl-e2);border-left:1px solid var(--rgl-filet-sombre);}
rdr-reglements .rgl .rgl-som-liste li{min-width:0;}
rdr-reglements .rgl .rgl-som.multi .rgl-som-jeu:not(.est-ouvert) .rgl-som-liste{display:none;}
rdr-reglements .rgl .rgl-som-lien{display:flex;align-items:center;gap:var(--rgl-e3);padding:var(--rgl-e2) var(--rgl-e3);border-left:2px solid transparent;border-radius:var(--rgl-r-lien);font-size:var(--rgl-t2);font-weight:500;line-height:1.3;color:var(--rgl-encre-douce);transition:background .15s,color .15s,border-color .15s;}
rdr-reglements .rgl .rgl-som-num{flex:0 0 auto;min-width:1.6em;font-variant-numeric:tabular-nums;font-size:var(--rgl-t1);font-weight:700;letter-spacing:.04em;color:var(--rgl-encre-sourde);transition:color .15s;}
rdr-reglements .rgl .rgl-som-lien svg{flex:0 0 auto;width:16px;height:16px;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-som-lib{min-width:0;}
rdr-reglements .rgl .rgl-som-lien:hover{background:rgba(255,255,255,.06);color:#FFFFFF;}
rdr-reglements .rgl .rgl-som-lien:focus-visible{outline:2px solid var(--rgl-or);outline-offset:2px;}
rdr-reglements .rgl .rgl-som-lien.est-actif{background:var(--rgl-or-voile);border-left-color:var(--rgl-or);color:#FFFFFF;font-weight:600;}
rdr-reglements .rgl .rgl-som-lien.est-actif .rgl-som-num{color:var(--rgl-or);}
rdr-reglements .rgl .rgl-lecture{min-width:0;display:grid;gap:var(--rgl-e8);}
rdr-reglements .rgl .rgl-vide{padding:var(--rgl-e6);border:1px dashed var(--rgl-filet-sombre);border-radius:var(--rgl-r-carte);color:var(--rgl-encre-douce);}

 
rdr-reglements .rgl .rgl-index{padding-bottom:var(--rgl-e7);}
rdr-reglements .rgl .rgl-index-pied{padding-bottom:var(--rgl-e8);}
rdr-reglements .rgl .rgl-index-titre{margin:0 0 var(--rgl-e4);font-size:var(--rgl-t1);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--rgl-encre-sourde);}
rdr-reglements .rgl .rgl-choix{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--rgl-e5);}
rdr-reglements .rgl .rgl-choix li{min-width:0;display:flex;}
rdr-reglements .rgl .rgl-choix-carte{flex:1 1 auto;display:flex;flex-direction:column;gap:var(--rgl-e2);min-width:0;padding:var(--rgl-e6);border:2px solid transparent;border-radius:var(--rgl-r-carte);background:var(--rgl-carte);color:var(--rgl-carte-texte);transition:transform .15s,border-color .15s,box-shadow .15s;}
rdr-reglements .rgl .rgl-choix-carte:hover{transform:translateY(-3px);border-color:var(--rgl-or);box-shadow:0 12px 30px rgba(0,0,0,.35);}
rdr-reglements .rgl .rgl-choix-carte:focus-visible{outline:2px solid var(--rgl-or);outline-offset:3px;}
rdr-reglements .rgl .rgl-choix-carte.est-termine .rgl-choix-badge{background:var(--rgl-carte-filet);color:var(--rgl-carte-sourd);}
rdr-reglements .rgl .rgl-choix-carte.est-termine .rgl-choix-nom{color:var(--rgl-carte-texte);}
rdr-reglements .rgl .rgl-choix-haut{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--rgl-e3);margin:0 0 var(--rgl-e3);}
rdr-reglements .rgl .rgl-choix-badge{flex:0 0 auto;display:grid;place-items:center;width:52px;height:52px;border-radius:var(--rgl-r-badge);background:var(--rgl-or);color:var(--rgl-fond);}
rdr-reglements .rgl .rgl-choix-badge svg{width:26px;height:26px;}
rdr-reglements .rgl .rgl-choix .rgl-statut{margin-left:0;border-color:var(--rgl-carte-filet);color:var(--rgl-carte-sourd);}
rdr-reglements .rgl .rgl-choix .rgl-statut.est-encours{border-color:rgba(0,111,123,.35);background:rgba(0,111,123,.08);color:var(--rgl-vert);}
rdr-reglements .rgl .rgl-choix .rgl-statut.est-termine{background:var(--rgl-panneau);color:var(--rgl-carte-sourd);}
rdr-reglements .rgl .rgl-choix-nature{font-size:var(--rgl-t1);font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--rgl-vert);}
rdr-reglements .rgl .rgl-choix-nom{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--rgl-t5);line-height:1.1;letter-spacing:.01em;text-transform:uppercase;color:var(--rgl-carte-encre);text-wrap:balance;}
rdr-reglements .rgl .rgl-choix-dates{font-size:var(--rgl-t2);color:var(--rgl-carte-sourd);}
rdr-reglements .rgl .rgl-choix-lire{display:inline-flex;align-items:center;gap:var(--rgl-e2);margin-top:auto;padding-top:var(--rgl-e4);font-weight:700;color:var(--rgl-vert);}
rdr-reglements .rgl .rgl-choix-lire svg{width:18px;height:18px;transition:transform .15s;}
rdr-reglements .rgl .rgl-choix-carte:hover .rgl-choix-lire svg{transform:translateX(3px);}

 
rdr-reglements .rgl .rgl-fil{display:flex;align-items:center;padding:var(--rgl-e7) 0 var(--rgl-e6);}
rdr-reglements .rgl .rgl-retour{display:inline-flex;align-items:center;gap:var(--rgl-e2);padding:var(--rgl-e2) var(--rgl-e4);border:1px solid var(--rgl-or-filet);border-radius:999px;font-size:var(--rgl-t2);font-weight:700;color:var(--rgl-or);transition:background .15s;}
rdr-reglements .rgl .rgl-retour svg{width:16px;height:16px;transition:transform .15s;}
rdr-reglements .rgl .rgl-retour:hover{background:var(--rgl-or-voile);}
rdr-reglements .rgl .rgl-retour:hover svg{transform:translateX(-3px);}
rdr-reglements .rgl .rgl-retour:focus-visible{outline:2px solid var(--rgl-or);outline-offset:3px;}
rdr-reglements .rgl .rgl-cache{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;}

 
rdr-reglements .rgl .rgl-jeu{min-width:0;display:grid;gap:var(--rgl-e7);}
rdr-reglements .rgl .rgl-jeu-intro{min-width:0;scroll-margin-top:calc(var(--rgl-chrome) + var(--rgl-e5));}
rdr-reglements .rgl .rgl-jeu-tete{display:flex;align-items:center;gap:var(--rgl-e4);margin:0 0 var(--rgl-e5);}
rdr-reglements .rgl .rgl-jeu-badge{flex:0 0 auto;display:grid;place-items:center;width:64px;height:64px;border-radius:var(--rgl-r-carte);background:var(--rgl-or);color:var(--rgl-fond);}
rdr-reglements .rgl .rgl-jeu-badge svg{width:32px;height:32px;}
rdr-reglements .rgl .rgl-jeu-texte{min-width:0;display:grid;gap:var(--rgl-e1);}
rdr-reglements .rgl .rgl-jeu-nature{font-size:var(--rgl-t1);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-jeu-titre{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--rgl-t55);line-height:1.05;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-reglements .rgl .rgl-statut{display:inline-flex;align-items:center;gap:var(--rgl-e2);margin-left:auto;align-self:flex-start;padding:var(--rgl-e1) var(--rgl-e3);border-radius:999px;font-size:var(--rgl-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;border:1px solid var(--rgl-filet-sombre);color:var(--rgl-encre-douce);}
rdr-reglements .rgl .rgl-statut::before{content:'';width:8px;height:8px;border-radius:50%;background:currentColor;}
rdr-reglements .rgl .rgl-statut.est-encours{border-color:var(--rgl-or-filet);color:var(--rgl-or);}
rdr-reglements .rgl .rgl-statut.est-termine{color:var(--rgl-encre-sourde);}
rdr-reglements .rgl .rgl-fiche{display:grid;gap:var(--rgl-e4);padding:var(--rgl-e6);border:1px solid var(--rgl-or-filet);border-radius:var(--rgl-r-carte);background:var(--rgl-or-voile);}
rdr-reglements .rgl .rgl-fiche-champs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--rgl-e5) var(--rgl-e7);}
rdr-reglements .rgl .rgl-fiche-champ{display:grid;gap:var(--rgl-e1);min-width:0;}
rdr-reglements .rgl .rgl-fiche-lib{font-size:var(--rgl-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--rgl-encre-sourde);}
rdr-reglements .rgl .rgl-fiche-val{font-weight:600;color:#FFFFFF;overflow-wrap:anywhere;}
rdr-reglements .rgl .rgl-fiche-val a{display:inline-flex;align-items:center;gap:var(--rgl-e2);color:var(--rgl-or);}
rdr-reglements .rgl .rgl-fiche-val a svg{width:16px;height:16px;transition:transform .15s;}
rdr-reglements .rgl .rgl-fiche-val a:hover svg{transform:translateX(3px);}
rdr-reglements .rgl .rgl-fiche-val a:focus-visible,rdr-reglements .rgl .rgl-fiche-pdf:focus-visible{outline:2px solid var(--rgl-or);outline-offset:3px;border-radius:2px;}
rdr-reglements .rgl .rgl-fiche-pied{display:flex;flex-wrap:wrap;align-items:center;gap:var(--rgl-e2) var(--rgl-e5);padding-top:var(--rgl-e3);border-top:1px solid var(--rgl-or-filet);}
rdr-reglements .rgl .rgl-fiche-pied:empty{display:none;}
rdr-reglements .rgl .rgl-fiche-version{display:inline-flex;align-items:center;gap:var(--rgl-e2);font-size:var(--rgl-t2);color:var(--rgl-encre-douce);}
rdr-reglements .rgl .rgl-fiche-version svg{width:16px;height:16px;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-fiche-pdf{display:inline-flex;align-items:center;gap:var(--rgl-e2);font-weight:600;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-fiche-pdf svg{width:18px;height:18px;}
rdr-reglements .rgl .rgl-avis{display:flex;gap:var(--rgl-e3);align-items:flex-start;margin:var(--rgl-e4) 0 0;padding:var(--rgl-e3) var(--rgl-e4);border-radius:var(--rgl-r-badge);background:rgba(255,255,255,.06);font-size:var(--rgl-t2);color:var(--rgl-encre-douce);}
rdr-reglements .rgl .rgl-avis svg{flex:0 0 auto;width:18px;height:18px;margin-top:1px;color:var(--rgl-or);}

 
rdr-reglements .rgl .rgl-sec{min-width:0;scroll-margin-top:calc(var(--rgl-chrome) + var(--rgl-e5));}
rdr-reglements .rgl .rgl-sec-tete{display:flex;align-items:center;gap:var(--rgl-e4);margin:0 0 var(--rgl-e5);padding:0 0 var(--rgl-e4);border-bottom:1px solid var(--rgl-filet-sombre);}
rdr-reglements .rgl .rgl-badge{flex:0 0 auto;display:grid;place-items:center;width:48px;height:48px;border-radius:var(--rgl-r-badge);background:var(--rgl-or-badge);color:var(--rgl-fond);}
rdr-reglements .rgl .rgl-badge svg{width:24px;height:24px;}
rdr-reglements .rgl .rgl-sec-titre{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--rgl-t5);line-height:1.1;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-reglements .rgl .rgl-sec-num{display:block;margin:0 0 2px;font-family:Montserrat,sans-serif;font-style:normal;font-size:var(--rgl-t1);font-weight:700;letter-spacing:.16em;color:var(--rgl-or);}

 
rdr-reglements .rgl .rgl-carte{display:grid;gap:var(--rgl-e4);padding:var(--rgl-e6);border-radius:var(--rgl-r-carte);background:var(--rgl-carte);color:var(--rgl-carte-texte);}
rdr-reglements .rgl .rgl-carte p{color:var(--rgl-carte-texte);}
rdr-reglements .rgl .rgl-carte a{color:var(--rgl-vert);font-weight:600;text-decoration:underline;text-decoration-color:rgba(0,111,123,.35);text-underline-offset:3px;}
rdr-reglements .rgl .rgl-carte a:hover{text-decoration-color:var(--rgl-vert);}
rdr-reglements .rgl .rgl-carte a:focus-visible{outline:2px solid var(--rgl-vert);outline-offset:2px;border-radius:2px;}
rdr-reglements .rgl .rgl-carte strong{color:var(--rgl-carte-encre);font-weight:700;}
rdr-reglements .rgl .rgl-h3{margin:var(--rgl-e2) 0 0;font-size:var(--rgl-t4);font-weight:700;color:var(--rgl-carte-encre);}
rdr-reglements .rgl .rgl-h3:first-child{margin-top:0;}
rdr-reglements .rgl .rgl-puces{display:grid;gap:var(--rgl-e2);}
rdr-reglements .rgl .rgl-puces li{position:relative;padding-left:var(--rgl-e5);}
rdr-reglements .rgl .rgl-puces li::before{content:'';position:absolute;left:var(--rgl-e1);top:.68em;width:6px;height:6px;border-radius:50%;background:var(--rgl-vert);}

 
rdr-reglements .rgl .rgl-lies{display:flex;gap:var(--rgl-e6);align-items:flex-start;padding:var(--rgl-e6);border:1px solid var(--rgl-or-filet);border-radius:var(--rgl-r-carte);background:var(--rgl-or-voile);}
rdr-reglements .rgl .rgl-lies-icone{flex:0 0 auto;display:grid;place-items:center;width:60px;height:60px;border-radius:50%;background:rgba(252,221,0,.16);color:var(--rgl-or);}
rdr-reglements .rgl .rgl-lies-icone svg{width:26px;height:26px;}
rdr-reglements .rgl .rgl-lies-corps{flex:1 1 auto;min-width:0;}
rdr-reglements .rgl .rgl-lies-titre{margin:0 0 var(--rgl-e2);font-size:var(--rgl-t4);font-weight:700;color:#FFFFFF;}
rdr-reglements .rgl .rgl-lies p{margin:0 0 var(--rgl-e4);color:var(--rgl-encre-douce);}
rdr-reglements .rgl .rgl-lies-liens{display:flex;flex-wrap:wrap;gap:var(--rgl-e2) var(--rgl-e5);}
rdr-reglements .rgl .rgl-lies-liens a{display:inline-flex;align-items:center;gap:var(--rgl-e2);font-weight:600;color:var(--rgl-or);}
rdr-reglements .rgl .rgl-lies-liens a svg{width:18px;height:18px;transition:transform .15s;}
rdr-reglements .rgl .rgl-lies-liens a:hover svg{transform:translateX(3px);}
rdr-reglements .rgl .rgl-lies-liens a:focus-visible{outline:2px solid var(--rgl-or);outline-offset:3px;border-radius:2px;}

 
rdr-reglements .rgl.sous-900 .rgl-hero{grid-template-columns:minmax(0,1fr);padding-top:var(--rgl-e7);}
rdr-reglements .rgl.sous-900 .rgl-hero-icone{display:none;}
rdr-reglements .rgl.sous-900 .rgl-corps{grid-template-columns:minmax(0,1fr);gap:var(--rgl-e6);}
rdr-reglements .rgl.sous-900 .rgl-som{position:static;max-height:none;overflow:visible;padding-right:0;}
rdr-reglements .rgl.sous-900 .rgl-som.deborde{-webkit-mask-image:none;mask-image:none;}
rdr-reglements .rgl.sous-900 .rgl-som-liste{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--rgl-e1) var(--rgl-e4);}
rdr-reglements .rgl.sous-900 .rgl-som-lien,rdr-reglements .rgl.sous-900 .rgl-som-lien.est-actif{border-left:0;}
rdr-reglements .rgl.sous-900 .rgl-lecture{gap:var(--rgl-e7);}
rdr-reglements .rgl.sous-600 .rgl-cadre{padding:0 var(--rgl-e4);}
rdr-reglements .rgl.sous-600 .rgl-carte{padding:var(--rgl-e5) var(--rgl-e4);}
rdr-reglements .rgl.sous-600 .rgl-fiche{padding:var(--rgl-e5) var(--rgl-e4);}
rdr-reglements .rgl.sous-600 .rgl-fiche-champs{grid-template-columns:minmax(0,1fr);gap:var(--rgl-e4);}
rdr-reglements .rgl.sous-600 .rgl-jeu-tete{flex-wrap:wrap;gap:var(--rgl-e3);}
rdr-reglements .rgl.sous-600 .rgl-jeu-badge{width:52px;height:52px;border-radius:var(--rgl-r-badge);}
rdr-reglements .rgl.sous-600 .rgl-jeu-badge svg{width:26px;height:26px;}
rdr-reglements .rgl.sous-600 .rgl-statut{margin-left:0;}
rdr-reglements .rgl.sous-600 .rgl-lies{flex-direction:column;gap:var(--rgl-e4);padding:var(--rgl-e5) var(--rgl-e4);}
rdr-reglements .rgl.sous-600 .rgl-sec-tete{gap:var(--rgl-e3);}
rdr-reglements .rgl.sous-600 .rgl-badge{width:40px;height:40px;border-radius:12px;}
rdr-reglements .rgl.sous-600 .rgl-badge svg{width:20px;height:20px;}
rdr-reglements .rgl.sous-420 .rgl-som-liste{grid-template-columns:minmax(0,1fr);}
rdr-reglements .rgl.sous-900 .rgl-choix{grid-template-columns:repeat(2,minmax(0,1fr));}
rdr-reglements .rgl.sous-600 .rgl-choix{grid-template-columns:minmax(0,1fr);gap:var(--rgl-e4);}
rdr-reglements .rgl.sous-600 .rgl-choix-carte{padding:var(--rgl-e5);}
rdr-reglements .rgl.sous-600 .rgl-choix-haut{margin-bottom:var(--rgl-e2);}
rdr-reglements .rgl.sous-600 .rgl-choix-badge{width:44px;height:44px;}
rdr-reglements .rgl.sous-600 .rgl-choix-badge svg{width:22px;height:22px;}
rdr-reglements .rgl.sous-600 .rgl-choix-lire{padding-top:var(--rgl-e3);}
rdr-reglements .rgl.sous-600 .rgl-fil{padding-top:var(--rgl-e6);}
@media(prefers-reduced-motion:reduce){
  rdr-reglements .rgl .rgl-som-lien,rdr-reglements .rgl .rgl-som-tete,rdr-reglements .rgl .rgl-lies-liens a svg,rdr-reglements .rgl .rgl-fiche-val a svg,rdr-reglements .rgl .rgl-choix-carte,rdr-reglements .rgl .rgl-choix-lire svg,rdr-reglements .rgl .rgl-retour,rdr-reglements .rgl .rgl-retour svg{transition:none;}
  rdr-reglements .rgl .rgl-choix-carte:hover{transform:none;}
}
`;

  

  function html(texte, lang) {
    return String(texte)
      .replace(/\{b\}/g, '<strong>').replace(/\{\/b\}/g, '</strong>')
      .replace(/\{a:([^}]+)\}/g, (m, h) => '<a href="' + esc(lien(h, lang)) + '">')
      .replace(/\{\/a\}/g, '</a>');
  }

  function lien(h, lang) {
    const v = String(h || '');
    if (lang === 'en' && v.charAt(0) === '/') return '/en' + v;
    return v;
  }

  function langueDeLaPage() {
    try {
      if (/^\/en(\/|$)/i.test(window.location.pathname)) return 'en';
      const l = String(document.documentElement.lang || '').toLowerCase();
      return l.indexOf('en') === 0 ? 'en' : 'fr';
    } catch (e) { return 'fr'; }
  }

  const idArticle = (r, a) => r.id + '-a' + a.num;

  customElements.define('rdr-reglements', class extends HTMLElement {
    static get observedAttributes() { return ['lang', 'maj', 'chrome']; }

    constructor() {
      super();
      this._initialise = false;
      this._lang = 'fr';
      this._maj = '';
      this._chrome = null;
      this._attente = {};
      this._observateurs = [];
      this._ecouteurs = [];
      this._rafId = 0;
      

      this._vue = null;
      this._adresseLue = false;
      this._cibleAVenir = '';
      this._depuisChoix = false;
      this._retourSur = '';
    }

    connectedCallback() {
      if (this._initialise) return;
      this._initialise = true;

      if (!document.getElementById('rgl-style')) {
        const s = document.createElement('style');
        s.id = 'rgl-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      


      const langPosee = this._attente.lang !== undefined || this.hasAttribute('lang');
      Object.keys(this._attente).forEach(k => this._appliquer(k, this._attente[k]));
      this._attente = {};
      ['lang', 'maj', 'chrome'].forEach(k => { if (this.hasAttribute(k)) this._appliquer(k, this.getAttribute(k)); });
      if (!langPosee) this._lang = langueDeLaPage();

      this.innerHTML = '<article class="rgl"></article>';
      this._racine = this.querySelector('.rgl');
      this._rendre();
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres) return;
      if (!this._initialise) { this._attente[nom] = apres; return; }
      this._appliquer(nom, apres);
      this._rendre();
    }

    _appliquer(nom, valeur) {
      const v = String(valeur == null ? '' : valeur).trim();
      if (nom === 'lang') this._lang = v.toLowerCase().indexOf('en') === 0 ? 'en' : 'fr';
      else if (nom === 'maj') this._maj = v;
      else if (nom === 'chrome') { const n = parseInt(v, 10); this._chrome = Number.isFinite(n) && n > 0 ? n : null; }
    }

    

    




    _haut() {
      if (this._chrome != null) return this._chrome;
      if (!document.querySelector('rdr-entete')) return 0;
      return window.matchMedia('(max-width: 750px)').matches ? 60 : 56;
    }

    disconnectedCallback() {
      if (this._rafId) cancelAnimationFrame(this._rafId);
      this._rafId = 0;
      this._observateurs.forEach(o => { try { o.disconnect(); } catch (e) {   } });
      this._observateurs = [];
      this._ecouteurs.forEach(([cible, type, fn]) => {
        try { cible.removeEventListener(type, fn); } catch (e) {   }
      });
      this._ecouteurs = [];
      this._initialise = false;
    }

    setLang(l) { this.setAttribute('lang', l); }

     
    _rendre() {
      if (!this._racine) return;
      this.disconnectedCallback();
      this._initialise = true;

      const T = I18N[this._lang] || I18N.fr;
      const lang = this._lang;
      const jour = aujourdhuiParis();
      const liste = this._reglements(jour);
      const plusieurs = liste.length > 1;
      this._racine.style.setProperty('--rgl-chrome', this._haut() + 'px');
      this._racine.setAttribute('lang', lang);

      


      if (!this._adresseLue) {
        this._adresseLue = true;
        const a = this._lireAdresse(liste);
        this._vue = plusieurs ? a.jeu : null;
        this._cibleAVenir = a.cible || (plusieurs ? '' : a.jeu || '');
      }

      

      const maj = this._maj || liste.map(r => r.version || '').sort().pop() || '';
      const ouvert = plusieurs ? liste.find(r => r.id === this._vue) : liste[0];
      if (plusieurs && !ouvert) this._vue = null;

      let corps;
      if (plusieurs && !ouvert) {
         
        corps = this._hero(T, maj) + this._choix(T, liste, lang, jour) + '<div class="rgl-index-pied">' + this._lies(T, lang) + '</div>';
      } else {
        


        const montres = ouvert ? [ouvert] : [];
        corps = (plusieurs
          ? '<nav class="rgl-fil"><a class="rgl-retour" href="' + esc(this._adresseDuChoix()) + '" data-retour>' + svg('arrowLeft') + esc(T.tous) + '</a></nav>' +
            '<h1 class="rgl-cache">' + esc(T.titreJeu(ouvert.nom)) + '</h1>'
          : this._hero(T, maj)) +
          '<div class="rgl-corps">' +
            this._sommaire(T, montres) +
            '<div class="rgl-lecture">' +
              (montres.length ? montres.map(r => this._reglement(r, T, lang, jour)).join('') : '<p class="rgl-vide">' + esc(T.vide) + '</p>') +
              this._lies(T, lang) +
            '</div>' +
          '</div>';
      }
      this._racine.innerHTML = '<div class="rgl-cadre">' + corps + '</div>';

      this._brancher(liste);
    }

    


    _reglements(jour) {
      const rang = { encours: 0, avenir: 1, termine: 2 };
      const liste = REGLEMENTS.filter(r => r.actif !== false && Array.isArray(r.articles) && r.articles.length &&
        /^\d{4}-\d{2}-\d{2}$/.test(String(r.publieLe || '')) && jour >= r.publieLe);
      return liste.map((r, i) => ({ r, i, st: statutDe(r, jour) })).sort((a, b) =>
        (rang[a.st] - rang[b.st]) ||
        (a.st === 'termine' ? String(b.r.fin).localeCompare(String(a.r.fin)) : String(a.r.debut).localeCompare(String(b.r.debut))) ||
        (a.i - b.i)).map(x => x.r);
    }

    


    _lireAdresse(liste) {
      let h = '';
      try {
        h = decodeURIComponent(String(window.location.hash || '').replace(/^#/, ''));
        if (!h) h = new URLSearchParams(window.location.search).get('jeu') || '';
      } catch (e) { h = ''; }
      for (const r of liste) {
        if (h === r.id) return { jeu: r.id, cible: '' };
        if (r.articles.some(a => idArticle(r, a) === h)) return { jeu: r.id, cible: h };
      }
      return { jeu: null, cible: '' };
    }

     
    _adresseDuChoix() {
      try {
        const p = new URLSearchParams(window.location.search);
        p.delete('jeu');
        const q = p.toString();
        return window.location.pathname + (q ? '?' + q : '');
      } catch (e) { return window.location.pathname; }
    }

    _choix(T, liste, lang, jour) {
      return '<section class="rgl-index" aria-label="' + esc(T.choixAria) + '">' +
        '<div>' +
          '<p class="rgl-index-titre">' + esc(T.nbJeux(liste.length)) + '</p>' +
          '<ul class="rgl-choix">' + liste.map(r => {
            const st = statutDe(r, jour);
            const periode = T.periode(dateLisible(r.debut, lang, r.debut.slice(0, 4) === r.fin.slice(0, 4)), dateLisible(r.fin, lang));
            return '<li><a class="rgl-choix-carte est-' + st + '" href="#' + esc(r.id) + '" data-jeu="' + esc(r.id) + '">' +
              '<span class="rgl-choix-haut"><span class="rgl-choix-badge">' + svg(r.icone) + '</span>' +
                '<span class="rgl-statut est-' + st + '">' + esc(T.statut[st]) + '</span></span>' +
              '<span class="rgl-choix-nature">' + esc((r.nature && (r.nature[lang] || r.nature.fr)) || '') + '</span>' +
              '<h2 class="rgl-choix-nom">' + esc(r.nom) + '</h2>' +
              '<span class="rgl-choix-dates">' + esc(periode) + '</span>' +
              '<span class="rgl-choix-lire">' + esc(T.lire) + svg('arrowRight') + '</span>' +
            '</a></li>';
          }).join('') + '</ul>' +
        '</div>' +
      '</section>';
    }

    

    _allerEnHaut() {
      const y = this._racine.getBoundingClientRect().top + window.scrollY - this._haut();
      window.scrollTo(0, Math.max(0, Math.round(y)));
    }

    

    _changerVue(id, cible) {
      const avant = this._vue;
      this._vue = id;
      this._cibleAVenir = cible || '';
      this._retourSur = id ? '' : (avant || '');
      this._rendre();
      if (cible) return;
      const carte = this._retourSur && this._racine.querySelector('.rgl-choix-carte[data-jeu="' + this._retourSur + '"]');
      const placer = () => {
        if (!this.isConnected) return;
        if (carte && carte.isConnected) carte.scrollIntoView({ block: 'center' });
        else this._allerEnHaut();
      };
      placer();
      if (carte) { try { carte.focus({ preventScroll: true }); } catch (e) {   } }
      




      requestAnimationFrame(placer);
      setTimeout(placer, 120);
    }

    _hero(T, maj) {
      return '<header class="rgl-hero">' +
        '<div class="rgl-hero-texte">' +
          '<p class="rgl-surtitre">' + esc(T.surtitre) + '</p>' +
          '<h1 class="rgl-titre">' + esc(T.titre) + '</h1>' +
          '<p class="rgl-sous">' + esc(T.sousTitre) + '</p>' +
          (maj ? '<p class="rgl-pastille">' + svg('clock') + '<span>' + esc(T.maj) + ' ' +
            '<time datetime="' + esc(maj) + '">' + esc(dateLisible(maj, this._lang)) + '</time></span></p>' : '') +
        '</div>' +
        '<div class="rgl-hero-icone">' + svg('scrollText') + '</div>' +
      '</header>';
    }

    


    _sommaire(T, liste) {
      return '<nav class="rgl-som' + (liste.length > 1 ? ' multi' : '') + '" aria-label="' + esc(T.sommaireAria) + '">' +
        '<p class="rgl-som-titre">' + esc(T.sommaire) + '</p>' +
        '<ul class="rgl-som-jeux">' + liste.map(r =>
          '<li class="rgl-som-jeu" data-jeu="' + esc(r.id) + '">' +
            '<a class="rgl-som-tete" href="#' + esc(r.id) + '" data-cible="' + esc(r.id) + '">' + svg(r.icone) +
              '<span class="rgl-som-lib">' + esc(r.nom) + '</span></a>' +
            '<ul class="rgl-som-liste">' + r.articles.map(a =>
              '<li><a class="rgl-som-lien" href="#' + esc(idArticle(r, a)) + '" data-cible="' + esc(idArticle(r, a)) + '">' +
                '<span class="rgl-som-num">' + esc(String(a.num).padStart(2, '0')) + '</span>' +
                svg(a.icone) +
                '<span class="rgl-som-lib" lang="fr">' + esc(a.court) + '</span>' +
              '</a></li>').join('') +
            '</ul>' +
          '</li>').join('') +
        '</ul>' +
      '</nav>';
    }

    _reglement(r, T, lang, jour) {
      const st = statutDe(r, jour);
      const F = T.fiche;
      const champ = (lib, val) => '<div class="rgl-fiche-champ"><span class="rgl-fiche-lib">' + esc(lib) + '</span><span class="rgl-fiche-val">' + val + '</span></div>';
      const periode = T.periode(dateLisible(r.debut, lang, r.debut.slice(0, 4) === r.fin.slice(0, 4)), dateLisible(r.fin, lang));
      const participer = r.participer && r.participer.href
        ? '<a href="' + esc(lien(r.participer.href, lang)) + '">' + esc(r.participer[lang] || r.participer.fr) + svg('arrowRight') + '</a>'
        : '';
      return '<div class="rgl-jeu" data-jeu="' + esc(r.id) + '">' +
        '<section class="rgl-jeu-intro" id="' + esc(r.id) + '">' +
          '<div class="rgl-jeu-tete">' +
            '<span class="rgl-jeu-badge">' + svg(r.icone) + '</span>' +
            '<div class="rgl-jeu-texte">' +
              '<span class="rgl-jeu-nature">' + esc((r.nature && (r.nature[lang] || r.nature.fr)) || '') + '</span>' +
              '<h2 class="rgl-jeu-titre">' + esc(r.nom) + '</h2>' +
            '</div>' +
            '<span class="rgl-statut est-' + st + '">' + esc(T.statut[st]) + '</span>' +
          '</div>' +
          '<div class="rgl-fiche">' +
            '<div class="rgl-fiche-champs">' +
              champ(F.organisateur, esc(r.organisateur)) +
              champ(F.periode, esc(periode)) +
              champ(F.participation, esc(T.gratuit)) +
              (participer ? champ(F.ouParticiper, participer) : '') +
            '</div>' +
            '<div class="rgl-fiche-pied">' +
              (r.version ? '<span class="rgl-fiche-version">' + svg('fileText') + esc(T.versionDu(dateLisible(r.version, lang))) + '</span>' : '') +
              (r.pdf ? '<a class="rgl-fiche-pdf" href="' + esc(r.pdf) + '" target="_blank" rel="noopener">' + svg('download') + esc(T.pdf) + '</a>' : '') +
            '</div>' +
          '</div>' +
          (T.avisLangue ? '<p class="rgl-avis">' + svg('alert') + '<span>' + esc(T.avisLangue) + '</span></p>' : '') +
        '</section>' +
        r.articles.map(a => this._article(r, a, T)).join('') +
      '</div>';
    }

    _article(r, a, T) {
      return '<section class="rgl-sec" id="' + esc(idArticle(r, a)) + '" lang="fr">' +
        '<div class="rgl-sec-tete">' +
          '<span class="rgl-badge">' + svg(a.icone) + '</span>' +
          '<h3 class="rgl-sec-titre"><span class="rgl-sec-num">' + esc(T.article + ' ' + a.num) + '</span>' + esc(a.titre) + '</h3>' +
        '</div>' +
        '<div class="rgl-carte">' + a.blocs.map(b => this._bloc(b)).join('') + '</div>' +
      '</section>';
    }

    

    _bloc(b) {
      if (typeof b === 'string') return '<p>' + html(b, 'fr') + '</p>';
      if (b.h3) return '<h4 class="rgl-h3">' + esc(b.h3) + '</h4>';
      if (b.ul) return '<ul class="rgl-puces">' + b.ul.map(x => '<li>' + html(x, 'fr') + '</li>').join('') + '</ul>';
      return '';
    }

    _lies(T, lang) {
      const L = T.lies;
      return '<aside class="rgl-lies">' +
        '<div class="rgl-lies-icone">' + svg('fileText') + '</div>' +
        '<div class="rgl-lies-corps">' +
          '<p class="rgl-lies-titre">' + esc(L.titre) + '</p>' +
          '<p>' + esc(L.texte) + '</p>' +
          '<div class="rgl-lies-liens">' + L.liens.map(l =>
            '<a href="' + esc(lien(l.href, lang)) + '">' + esc(l.libelle) + svg('arrowRight') + '</a>').join('') + '</div>' +
        '</div>' +
      '</aside>';
    }

     
    _brancher(liste) {
      const racine = this._racine;
      const plusieurs = (liste || []).length > 1;

      




      const surNav = (ev) => {
        const carte = ev.target.closest('.rgl-choix-carte');
        const retour = !carte && ev.target.closest('[data-retour]');
        if (!carte && !retour) return;
        if (ev.button > 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;    
        ev.preventDefault();
        if (carte) {
          const id = carte.getAttribute('data-jeu');
          try { history.pushState(null, '', '#' + id); } catch (e) {   }
          this._depuisChoix = true;
          this._changerVue(id, '');
          const t = racine.querySelector('.rgl-retour');
          if (t) { try { t.focus({ preventScroll: true }); } catch (e) {   } }
          return;
        }
        if (this._depuisChoix) { this._depuisChoix = false; history.back(); return; }
        try { history.pushState(null, '', this._adresseDuChoix()); } catch (e) {   }
        this._changerVue(null, '');
      };
      if (plusieurs) {
        racine.addEventListener('click', surNav);
        this._ecouteurs.push([racine, 'click', surNav]);
      }

       
      const surAdresse = () => {
        const a = this._lireAdresse(liste || []);
        if (plusieurs && a.jeu !== this._vue) {
          this._depuisChoix = a.jeu !== null && this._vue === null;
          this._changerVue(a.jeu, a.cible);
          return;
        }
        if (a.cible) {
          const c = racine.querySelector('#' + (window.CSS && window.CSS.escape ? window.CSS.escape(a.cible) : a.cible));
          if (c) c.scrollIntoView({ block: 'start' });
        }
      };
      window.addEventListener('popstate', surAdresse);
      this._ecouteurs.push([window, 'popstate', surAdresse]);
      window.addEventListener('hashchange', surAdresse);
      this._ecouteurs.push([window, 'hashchange', surAdresse]);
      const som = racine.querySelector('.rgl-som');
      const liens = Array.from(racine.querySelectorAll('.rgl-som-lien, .rgl-som-tete'));
      const groupes = Array.from(racine.querySelectorAll('.rgl-som-jeu'));
      const parId = new Map();
      liens.forEach(l => parId.set(l.getAttribute('data-cible'), l));
      

      const sections = Array.from(racine.querySelectorAll('.rgl-jeu-intro[id], .rgl-sec[id]')).filter(s => parId.has(s.id));

      const marquerDebord = () => {
        if (som) som.classList.toggle('deborde', som.scrollHeight > som.clientHeight + 1);
      };

      const paliers = (L) => {
        racine.classList.toggle('sous-900', L <= 900);
        racine.classList.toggle('sous-600', L <= 600);
        racine.classList.toggle('sous-420', L <= 420);
      };
      paliers(racine.getBoundingClientRect().width || window.innerWidth);
      if (typeof ResizeObserver === 'function') {
        const ro = new ResizeObserver(entrees => {
          for (const e of entrees) paliers(e.contentRect.width);
          marquerDebord();
        });
        ro.observe(racine);
        this._observateurs.push(ro);
      }

      let actif = null;
      const marquer = (id) => {
        if (id === actif) return;
        actif = id;
        liens.forEach(l => l.classList.remove('est-actif'));
        const l = parId.get(id);
        if (!l) return;
        l.classList.add('est-actif');
        const g = l.closest('.rgl-som-jeu');
        groupes.forEach(x => x.classList.toggle('est-ouvert', x === g));
        marquerDebord();
        suivre(l);
      };

       
      const suivre = (l) => {
        if (!som || som.scrollHeight <= som.clientHeight + 1) return;
        const lr = l.getBoundingClientRect();
        const sr = som.getBoundingClientRect();
        if (lr.top < sr.top + 4) som.scrollTop -= sr.top - lr.top + 12;
        else if (lr.bottom > sr.bottom - 4) som.scrollTop += lr.bottom - sr.bottom + 12;
      };

      

      const parIdSec = (id) => {
        try { return racine.querySelector('#' + (window.CSS && window.CSS.escape ? window.CSS.escape(id) : id)); } catch (e) { return null; }
      };
      const aller = (id, doux) => {
        const cible = id && parIdSec(id);
        if (!cible) return false;
        cible.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
        marquer(cible.id);
        return true;
      };

      

      const surClic = (ev) => {
        const a = ev.target.closest('.rgl-som-lien, .rgl-som-tete');
        if (!a) return;
        const id = a.getAttribute('data-cible');
        if (!parIdSec(id)) return;
        ev.preventDefault();
        const doux = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        aller(id, doux);
        try { history.replaceState(null, '', '#' + id); } catch (e) {   }
      };
      if (som) {
        som.addEventListener('click', surClic);
        this._ecouteurs.push([som, 'click', surClic]);
      }

      


      const calcule = () => {
        if (!sections.length) return;
        const y = window.scrollY;
        const vue = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        const scrollMax = Math.max(0, docH - vue);
        const h = this._haut();
        let ligne = y + h + 24;
        const reste = scrollMax - y;
        if (reste < vue) {
          const p = Math.min(1, Math.max(0, (vue - reste) / vue));
          ligne += Math.max(0, vue - h - 24) * p;
        }
        let courant = sections[0];
        for (const s of sections) {
          const haut = s.getBoundingClientRect().top + y;
          if (haut <= ligne + 1) courant = s;
        }
        marquer(courant.id);
      };

      let enAttente = false;
      const demander = () => {
        if (enAttente) return;
        enAttente = true;
        this._rafId = requestAnimationFrame(() => {
          enAttente = false;
          this._rafId = 0;
          calcule();
        });
      };

      calcule();
      marquerDebord();
      window.addEventListener('scroll', demander, { passive: true });
      this._ecouteurs.push([window, 'scroll', demander]);
      const surRedim = () => { this._racine.style.setProperty('--rgl-chrome', this._haut() + 'px'); demander(); marquerDebord(); };
      window.addEventListener('resize', surRedim, { passive: true });
      this._ecouteurs.push([window, 'resize', surRedim]);

      




      const cible = this._cibleAVenir;
      this._cibleAVenir = '';
      {
        if (cible && parId.has(cible)) {
          





          let pose = -1;
          const recaler = () => {
            if (!this.isConnected) return;
            if (pose >= 0 && Math.abs(window.scrollY - pose) > 2) return;
            aller(cible, false);
            pose = window.scrollY;
          };
          requestAnimationFrame(() => requestAnimationFrame(recaler));
          try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(recaler)); } catch (e) {   }
          setTimeout(recaler, 600);
          setTimeout(recaler, 1500);
        }
      }
    }
  });
})();
})();
