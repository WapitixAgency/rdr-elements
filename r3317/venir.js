/* rdr-elements venir | source route-du-rhum b0e1218 | rdr-venir.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["venir"]="b0e1218";performance.mark("rdr-elements:venir")}catch(e){}
;(function(){
(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-venir')) return;

  


  const T = {
    marine: '#16355D', marine900: '#0A1A35', marine2: 'rgba(22,53,93,.72)', blanc: '#FFFFFF',
    teal: '#429991', tealClair: '#5DBFC0', tealSombre: '#00676E',
    ambre: '#F5BE41', ambreVif: '#FCF150', rouge: '#E63946', creme: '#F6F4EE',
    texte: 'rgba(255,255,255,.92)', texte2: 'rgba(255,255,255,.72)', texte3: 'rgba(255,255,255,.5)',
    filet: 'rgba(255,255,255,.14)', voile: 'rgba(255,255,255,.06)',
    filetClair: 'rgba(22,53,93,.14)', voileClair: 'rgba(22,53,93,.05)'
  };
  const POLICE_TEXTE = "'Montserrat', system-ui, -apple-system, 'Segoe UI', sans-serif";
  const POLICE_TITRE = "'Varien', 'Archivo Black', Impact, sans-serif";

   
  const TYMAL_VELO = 'https://static.wixstatic.com/shapes/7bb303_1805678ec9994470a1b9c049e7de1ca4.svg';
  const TYMAL_CLIN = 'https://static.wixstatic.com/shapes/7bb303_18789740b75547869e150140259392d6.svg';
  

  const HERO_PHOTO = 'wix:image://v1/917afd_e0eebf0366d24fc796355528036cfb34~mv2.avif/RDR_2026_MOLLOW21.avif#originWidth=1797&originHeight=1198';

  const ENDPOINT_URL = '/_functions/mobiliteJustificatifUrl';
  const ENDPOINT_PARTICIPER = '/_functions/mobiliteParticiper';
  const MORCEAU = 4 * 1024 * 1024;
  const REPRISES = [1000, 3000, 6000];
  const CLE_PARTICIPE = 'rdrMobiliteParticipe';
  const CLE_FERME = 'rdrMobiliteTymalFerme';

  





  const BLOCS = ['hero', 'co2', 'mobilite', 'regions', 'pratique'];
  

  const ANCRES = { regions: 'regions', 'd-ou-venez-vous': 'regions', co2: 'co2', 'pourquoi-ca-compte': 'co2', 'sur-place': 'pratique', pratique: 'pratique', mobilite: 'mobilite' };
  

  const ORDRE_DEFAUT = ['train', 'bus', 'velo', 'covoiturage'];

  const TRAITS = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const TRACES = {
    train: '<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1"/><path d="m9 15-1-1"/><path d="m15 15 1-1"/><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"/><path d="m8 19-2 3"/><path d="m16 19 2 3"/>',
    bus: '<path d="M4 6 2 7"/><path d="M10 6h4"/><path d="m22 7-2-1"/><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M8 15h.01"/><path d="M16 15h.01"/><path d="M6 19v2"/><path d="M18 21v-2"/>',
    covoiturage: '<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/>',
    individuelle: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    velo: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
    pied: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
    autre: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    cadeau: '<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',
    vague: '<path d="M2 12q2.5 2 5 0t5 0 5 0 5 0"/><path d="M2 19q2.5 2 5 0t5 0 5 0 5 0"/><path d="M2 5q2.5 2 5 0t5 0 5 0 5 0"/>',
    fichier: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    croix: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    fleche: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    gauche: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    bas: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    note: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    astuce: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    bagage: '<path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/>',
    pmr: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',
    parking: '<circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    externe: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
  };
  const ico = (nom, classe) => TRACES[nom] ? '<svg class="' + (classe || '') + '" viewBox="0 0 24 24" ' + TRAITS + ' aria-hidden="true" focusable="false">' + TRACES[nom] + '</svg>' : '';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const i18nNorm = (s) => String(s).replace(/[‘’]/g, "'").replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim();

 
const ER_EN = {
     
    'Tous les chemins mènent à la Route du Rhum': 'All roads lead to the Route du Rhum',
    'L’aventure commence chez vous': 'The adventure starts at your door',
    'Trouvez en 30 secondes le meilleur moyen de rejoindre le village de départ à Saint-Malo.':
      'Find the best way to reach the start village in Saint-Malo, in thirty seconds.',
    'Trouver mon trajet': 'Find my route',
    'TyMAL, la mascotte, sur un quai de gare devant un TER': 'TyMAL, the mascot, on a station platform in front of a regional train',
    'Pourquoi ça compte': 'Why it matters',
    'Sur place': 'On site',
    'Une fois arrivé·e sur place, on pense à vous !': 'Once you are here, we have got you covered',

     
    'Le saviez-vous ?': 'Did you know?',
    '64,4 % des émissions de l’événement': '64.4% of the event’s emissions',
    'proviennent des déplacements des spectateurs pour se rendre sur le village départ de la course. Faire le choix du train, du bus, du vélo ou du covoiturage, c’est agir ensemble pour une course plus respectueuse de l’environnement.':
      'come from spectators travelling to the race village. Choosing the train, the bus, the bike or car sharing means taking part in a race that treads more lightly.',
    'Source : ADEME, pour un aller': 'Source: ADEME, one way',
    'Comment expliquer ce chiffre ?': 'How is this figure explained?',
    'Simulateur de l’ADEME': 'ADEME simulator',
    'Source : ADEME, pour un aller et par personne.': 'Source: ADEME, one way, per person.',
    'Simulateur d’empreinte carbone de l’ADEME': 'ADEME carbon footprint simulator',
    'Le simulateur de l’ADEME n’a pas pu se charger.': 'The ADEME simulator could not load.',
    'L’ouvrir sur impactco2.fr': 'Open it on impactco2.fr',
    'Train TGV': 'TGV train', 'Train TER': 'Regional train',
    'Car': 'Coach', 'Autocar thermique': 'Diesel coach', 'Avion': 'Plane',
    'Voiture électrique à 4': 'Electric car, four people',
    'Voiture thermique à 4': 'Petrol car, four people',
    'Voiture hybride à 4': 'Hybrid car, four people',
    'Voiture électrique seul.e': 'Electric car, alone',
    'Voiture thermique seul.e': 'Petrol car, alone',
    'Voiture hybride seul.e': 'Hybrid car, alone',

     
    'Challenge Mobilité': 'Mobility Challenge',
    'Jeu-concours': 'Prize draw',
    'Participer au challenge': 'Enter the challenge',
    'Chaque jour à 11 h': 'Every day at 11 am',
    'À la fin du challenge': 'At the end of the challenge',
    'tentez de gagner': 'try to win',
    'un grand tirage au sort pour gagner': 'a grand prize draw to win',
    'Participation soumise au règlement du jeu-concours.': 'Entry subject to the competition rules.',
    'Je participe !': 'Count me in!',
    'Venez sans voiture, gagnez des expériences Route du Rhum': 'Come without a car, win Route du Rhum experiences',
    'Ouvrir le formulaire du Challenge Mobilité': 'Open the Mobility Challenge form',
    'Ne plus afficher': 'Hide',
    'Fermer': 'Close',
    'billet': 'ticket',
    'Votre': 'Your',
    'de participation': 'to enter',
    'Trois étapes, deux minutes. Vous recevez votre identifiant tout de suite.': 'Three steps, two minutes. You get your entry number right away.',
    'Vous venez le': 'You are coming on',
    'Vos informations': 'Your details',
    'Prénom': 'First name',
    'Nom': 'Last name',
    'Date de naissance': 'Date of birth',
    'Adresse e-mail': 'Email address',
    'Numéro de téléphone': 'Phone number',
    'Pour vous appeler si vous gagnez.': 'So we can call you if you win.',
    'Votre venue': 'Your visit',
    'Quel jour venez-vous au village ?': 'Which day are you coming to the village?',
    'Choisissez un jour': 'Choose a day',
    'Comment venez-vous au village ?': 'How are you getting to the village?',
    'Jours précédents': 'Previous days', 'Jours suivants': 'Next days',
    'Train': 'Train', 'Bus': 'Bus', 'Covoiturage': 'Car-sharing', 'Vélo': 'Bike', 'À pied': 'On foot', 'Autre': 'Other',
    'Précisez votre mode de transport': 'Tell us more about your transport',
    'Votre justificatif de transport': 'Your proof of transport',
    'Déposez ici votre justificatif de mobilité.': 'Upload your proof of mobility here.',
    'Exemples de justificatifs acceptés : billet de train ou de bus, titre de transport, photo de votre vélo, justificatif de covoiturage.': 'Accepted proofs include: train or bus ticket, travel pass, a photo of your bike, car-sharing confirmation.',
    'PDF, JPG ou PNG, 10 Mo au plus.': 'PDF, JPG or PNG, up to 10 MB.',
    'Choisir un fichier': 'Choose a file',
    'ou glissez-le ici': 'or drag it here',
    'Changer de fichier': 'Change file',
    'Préparation…': 'Preparing…',
    'Envoi…': 'Uploading…',
    'Connexion perdue, reprise…': 'Connection lost, resuming…',
    'Vérification…': 'Checking…',
    'Fichier reçu': 'File received',
    "J'ai lu et j'accepte le": 'I have read and accept the',
    'règlement du Challenge Mobilité': 'Mobility Challenge rules',
    "J'accepte que mes données soient traitées pour ma participation, selon la": 'I agree to my data being processed for my entry, as set out in the',
    'politique de confidentialité': 'privacy policy',
    'Je participe au challenge': 'Enter the challenge',
    'Envoi en cours…': 'Sending…',
    'Participation enregistrée !': 'Entry registered!',
    'Merci pour votre participation au Challenge Mobilité de la Route du Rhum – Destination Guadeloupe !': 'Thank you for entering the Route du Rhum – Destination Guadeloupe Mobility Challenge!',
    'Votre participation pour la journée du': 'Your entry for',
    'est bien enregistrée.': 'is registered.',
    'Votre identifiant de participation': 'Your entry number',
    'Vous participez automatiquement au tirage au sort quotidien correspondant à votre venue, et vous êtes aussi enregistré pour le grand tirage au sort final, à l’issue des 13 jours du village.': 'You are automatically entered into the daily prize draw for your visit day, and also registered for the grand final draw at the end of the village’s 13 days.',
    'Chaque jour': 'Every day',
    'Grand tirage final': 'Grand final draw',
    'Découvrir le programme du village': 'Discover the village programme',
    'Ce champ est requis.': 'This field is required.',
    'Adresse e-mail invalide.': 'Invalid email address.',
    'Numéro de téléphone invalide.': 'Invalid phone number.',
    'Date invalide.': 'Invalid date.',
    'Trop long.': 'Too long.',
    'Ajoutez votre justificatif.': 'Please add your proof.',
    'Format non accepté : PDF, JPG ou PNG.': 'Format not accepted: PDF, JPG or PNG.',
    'Fichier trop lourd (10 Mo au plus).': 'File too large (10 MB max).',
    'Fichier vide ou illisible.': 'Empty or unreadable file.',
    'Vous participez déjà pour ce jour. Une seule participation par personne et par jour.': 'You have already entered for this day. One entry per person per day.',
    'Le challenge est fermé pour le moment.': 'The challenge is closed for now.',
    'Trop de tentatives, réessayez dans quelques minutes.': 'Too many attempts, please try again in a few minutes.',
    'Envoi impossible pour le moment, réessayez.': 'Cannot send right now, please try again.',
    'Vérifiez les champs signalés.': 'Please check the highlighted fields.',

     
    'D’où venez-vous ?': 'Where are you coming from?',
    'Choisissez votre région de départ': 'Choose where you are travelling from',
    'Contenu à venir': 'Content coming soon',
    'En savoir plus': 'Find out more',
    'Carte ou visuel à ajouter': 'Map or image to be added',
    'Voiture individuelle': 'Driving yourself',
    'Parkings, navettes et bornes de recharge : tout est regroupé plus bas sur cette page.':
      'Car parks, shuttles and charging points are all further down this page.',
    'Voir les infos pratiques voiture': 'See practical information for drivers',
    'Trajet': 'Route',
    'Plein tarif': 'Full fare',
    'Carte Avantage moins de 26 ans': 'Avantage card, under 26',

     
    'Saint-Malo Agglo': 'Greater Saint-Malo',
    'Bretagne': 'Brittany',
    'Normandie': 'Normandy',
    'Île-de-France': 'Paris region',
    'Ailleurs': 'Elsewhere',

     
    "La circulation sur place lors de l'événement est restreinte, les parkings ne se trouvent pas à proximité immédiate des entrées et le parking grand public est payant. Autant de raisons de privilégier les mobilités alternatives si vous n'êtes pas loin !":
      'Traffic around the village is restricted during the event, the car parks are not right next to the entrances, and the public car park is chargeable. All good reasons to choose another way in if you are not coming from far.',
    "La circulation sur place lors de l'événement est restreinte, les parkings ne se trouvent pas à proximité immédiate des entrées et le parking grand public est payant. Autant de raisons de privilégier les mobilités partagées, en plus de réduire l'empreinte carbone de votre déplacement !":
      'Traffic around the village is restricted during the event, the car parks are not right next to the entrances, and the public car park is chargeable. All good reasons to travel together, and to cut the carbon footprint of your journey along the way.',

     
    'Venez en train': 'Come by train',
    'Venez en train avec TER BreizhGo': 'Come by train with TER BreizhGo',
    'Venez en bus': 'Come by bus',
    'Venez en bus/car': 'Come by bus or coach',
    'Venez à vélo': 'Come by bike',
    'Venez à pied ou à vélo': 'Come on foot or by bike',
    'Covoiturez avec StadiumGO': 'Share a ride with StadiumGO',

     
    "+20 trains supplémentaires entre Rennes et Saint-Malo à l'occasion de la Route du Rhum !":
      'Over 20 extra trains between Rennes and Saint-Malo for the Route du Rhum.',
    "+20 trains supplémentaires entre Rennes et Saint-Malo à l'occasion de la Route du Rhum ! Ce large réseau de TER n'attend que vous.":
      'Over 20 extra trains between Rennes and Saint-Malo for the Route du Rhum. This wide regional network is waiting for you.',
    "Le réseau ferroviaire ne couvre pas toute la Bretagne, mais la région compte de nombreuses lignes de cars BreizhGo permettant de rejoindre les gares — notamment Rennes, d'où un train direct rejoint Saint-Malo.":
      'The rail network does not reach every corner of Brittany, but the region runs many BreizhGo coach lines to the stations, Rennes in particular, where a direct train takes you on to Saint-Malo.',
    'Quelques options pour rejoindre Saint-Malo depuis la Normandie (une seule correspondance) :':
      'A few ways to reach Saint-Malo from Normandy, with a single change:',
    'Bus directs depuis la région parisienne — retrouvez tous les bus dans l\'onglet "bus" sur SNCF Connect.':
      'Direct coaches from the Paris region. You will find them all under the "bus" tab on SNCF Connect.',
    'Retrouvez tous les bus dans l\'onglet "bus" sur SNCF Connect.':
      'You will find them all under the "bus" tab on SNCF Connect.',
    'Un large réseau de bus est disponible à Saint-Malo, profitez-en !':
      'Saint-Malo has a wide bus network. Make the most of it.',
    'Si vous le pouvez, privilégiez la marche ou le vélo !':
      'If you can, come on foot or by bike.',
    "Envie de profiter de l'événement pour s'organiser une sortie vélo ? Vous avez bien raison !":
      'Fancy turning the event into a cycling trip? Very good idea.',
    "Venez à Saint-Malo avec d'autres fans de voile !":
      'Travel to Saint-Malo with other sailing fans.',
    'Contenu à compléter — non détaillé dans le cahier des charges actuel.':
      'Content still to be written.',

     
    'Vous souhaitez venir avec votre vélo dans le train ?':
      'Would you like to bring your bike on the train?',
    "Vous venez d'une autre ville": 'Coming from another city',
    'Paris : train direct, 2h20': 'Paris: direct train, 2h20',
    'Depuis la France métropolitaine': 'From mainland France',
    "Depuis l'étranger": 'From abroad',
    'Barcelone': 'Barcelona',
    'Bruxelles': 'Brussels',
    'Genève': 'Geneva',
    'Londres': 'London',
    "Depuis la Guadeloupe : une fois arrivé à Paris, privilégiez le train !":
      'From Guadeloupe: once you land in Paris, take the train.',
    "L'option car + train peut être très pertinente, par exemple depuis Loudéac, Pontivy ou Fougères.":
      'Coach plus train can work very well, for example from Loudéac, Pontivy or Fougères.',
    'Depuis Caen : bus direct Flixbus, 2h40': 'From Caen: direct Flixbus coach, 2h40',
    "Depuis Cherbourg : train jusqu'à Caen (1h10) puis bus Flixbus (2h40)":
      'From Cherbourg: train to Caen (1h10), then Flixbus coach (2h40)',
    "Depuis Le Havre : bus 122 jusqu'à Caen (1h40) puis bus Flixbus (2h40)":
      'From Le Havre: bus 122 to Caen (1h40), then Flixbus coach (2h40)',
    "Depuis Rouen : TER jusqu'à Caen (1h40) puis bus Flixbus (2h40)":
      'From Rouen: regional train to Caen (1h40), then Flixbus coach (2h40)',
    'Achat du ticket : dans le bus (cash ou carte), en ligne si vous êtes local, ou en point de vente physique':
      'Tickets: on board (cash or card), online if you live locally, or from a sales point.',
    'Tarifs : 1,40 € en ligne ou en point de vente, 2 € directement dans le bus':
      'Fares: €1.40 online or from a sales point, €2 on board.',
    'Horaires disponibles en temps réel': 'Live timetables available',
    'Pour trouver toutes les lignes, arrêts et horaires': 'To find every line, stop and timetable',
    'Les vélos à assistance électrique en libre-service St Malo Vélo MAT sont disponibles dans toute la ville.':
      'The St Malo Vélo MAT shared e-bikes are available all over the city.',
    'Depuis Rennes : 1 à 2 jours, 100 à 120 km': 'From Rennes: 1 to 2 days, 100 to 120 km',
    'Depuis Saint-Brieuc : 1 à 2 jours, 121 km via la Vélomaritime':
      'From Saint-Brieuc: 1 to 2 days, 121 km along the Vélomaritime',
    'Depuis Morlaix : 3 à 6 jours, 337 km via la Vélomaritime':
      'From Morlaix: 3 to 6 days, 337 km along the Vélomaritime',
    'Depuis Vannes : 3 à 5 jours, 285 km via la V45 puis la V42':
      'From Vannes: 3 to 5 days, 285 km along the V45 then the V42',
    'Eurovélo 4 / Vélomaritime : Roscoff → frontière belge':
      'EuroVelo 4 / Vélomaritime: Roscoff → Belgian border',
    'V42 : Océan Atlantique → Manche via Redon et Rennes':
      'V42: Atlantic Ocean → English Channel via Redon and Rennes',
    'Des parkings sécurisés sont prévus pour vos vélos à chaque entrée du village':
      'Secure bike parking is provided at every village entrance',
    'Parkings sécurisés à chaque entrée du village':
      'Secure parking at every village entrance',
    'Les alentours du village seront parfaitement balisés jusqu\'aux entrées et parkings vélo':
      'The area around the village will be clearly signposted to the entrances and bike parks',
    "Une telle aventure, ça se partage. Sur StadiumGO, notre partenaire covoiturage, vous trouverez d'autres véhicules qui se rendent spécialement au départ de la Route du Rhum.":
      'An adventure like this is worth sharing. On StadiumGO, our car-sharing partner, you will find other cars heading to the start of the Route du Rhum.',
    'Vous pourrez aussi proposer vos propres places à des passagers qui cherchent à rejoindre le village.':
      'You can also offer your own spare seats to people looking for a ride to the village.',
    'Si vous ne trouvez pas de trajet sur StadiumGo, allez voir Blablacar':
      'If you cannot find a ride on StadiumGO, try BlaBlaCar',
    'Ou BlablaDaily': 'Or BlaBlaCar Daily',

     
    "Le temps passé dans le train, c'est du temps que vous ne perdez pas au volant : pour échanger, lire, jouer, travailler ou préparer votre séjour à Saint-Malo. Le trajet peut sembler plus long qu'en voiture, mais c'est un temps que vous pouvez réellement mettre à profit.":
      'Time on the train is time you do not spend at the wheel: to talk, read, play, work or plan your stay in Saint-Malo. The journey may look longer than by car, but it is time you can actually use.',
    "Envie de prendre la mer aussi ? Avec la Compagnie Corsaire, rejoignez Saint-Malo depuis Cancale, Saint-Cast-le-Guildo ou Dinard. Navettes régulières Dinard ↔ Saint-Malo en 10 min, d'avril à début novembre":
      'Fancy taking to the water too? With Compagnie Corsaire you can reach Saint-Malo from Cancale, Saint-Cast-le-Guildo or Dinard. Regular 10-minute shuttles between Dinard and Saint-Malo, from April to early November.',
    "Venir à pied ou à vélo, même en octobre, c'est l'occasion de profiter de l'air breton, vivifiant et tonique, que toute la France envie !":
      'Coming on foot or by bike, even in October, is a chance to enjoy the bracing Breton air that the rest of France envies.',
    "Challenge Strava ! Plusieurs segments ont été conçus spécialement pour l'événement : c'est votre moment de briller":
      'Strava challenge. Several segments have been created specially for the event: your moment to shine.',
    "En plus d'être plus écologique, le covoiturage est aussi plus convivial et plus économique ! Plus d'excuse pour ne pas tenter l'expérience.":
      'Car-sharing is not only greener, it is friendlier and cheaper too. No excuse left not to try it.'
  };






function traduireDynamique(clef) {
    let m;
     
    if ((m = clef.match(/^(.+) \((\d+) correspondances? à (.+)\)\s*:\s*(.+)$/)))
      return m[1] + ' (' + m[2] + ' change' + (m[2] === '1' ? '' : 's') + ' at ' + m[3] + '): ' + m[4];
     
    if ((m = clef.match(/^(.+) \((\d+) correspondances?\)\s*:\s*(.+)$/)))
      return m[1] + ' (' + m[2] + ' change' + (m[2] === '1' ? '' : 's') + '): ' + m[3];
     
    if ((m = clef.match(/^(.+) \(direct\)\s*:\s*(.+)$/)))
      return m[1] + ' (direct): ' + m[2];
     
    if ((m = clef.match(/^(\d+)(?:,(\d+))?\s*€$/)))
      return '€' + m[1] + (m[2] ? '.' + m[2] : '');
     
    if ((m = clef.match(/^Chaque jour à (\d{1,2}) h(?: (\d{2}))?$/))) {
      const h = Number(m[1]);
      return 'Every day at ' + (h % 12 === 0 ? 12 : h % 12) + (m[2] ? ':' + m[2] : '') + (h < 12 ? ' am' : ' pm');
    }
     
    if ((m = clef.match(/^(\d+)(?:,(\d+))?\s(kg CO2e)$/)))
      return m[1] + (m[2] ? '.' + m[2] : '') + ' ' + m[3];
     
    if ((m = clef.match(/^(\d+)(?:,(\d+))?\s*%$/)))
      return m[1] + (m[2] ? '.' + m[2] : '') + '%';
    return undefined;
  }
 
  const ER_EN_NORM = {};
  for (const k of Object.keys(ER_EN)) ER_EN_NORM[i18nNorm(k)] = ER_EN[k];

  



  const DEFAUT_PAGE = {
    heroKick: 'Tous les chemins mènent à la Route du Rhum',
    heroTitre: 'L’aventure commence chez vous',
    heroTexte: 'Trouvez en 30 secondes le meilleur moyen de rejoindre le village de départ à Saint-Malo.',
    heroBouton: 'Trouver mon trajet',
    heroImage: HERO_PHOTO,
    heroImageAlt: 'TyMAL, la mascotte, sur un quai de gare devant un TER',
    titreCo2: 'Pourquoi ça compte',
    titreRegions: 'D’où venez-vous ?',
    sousTitreRegions: 'Choisissez votre région de départ',
    kickPratique: 'Sur place',
    titrePratique: 'Une fois arrivé·e sur place, on pense à vous !',
    


    voitureTitre: 'Voiture individuelle',
    voitureTexte: 'Parkings, navettes et bornes de recharge : tout est regroupé plus bas sur cette page.',
    voitureBouton: 'Voir les infos pratiques voiture',
    tarifsTrajet: 'Trajet',
    tarifsPlein: 'Plein tarif',
    tarifsReduit: 'Carte Avantage moins de 26 ans'
  };

  


  const DEFAUT_MOB = {
    bouton: 'Participer au challenge',
    mention: 'Participation soumise au règlement du jeu-concours.',
    etiquette: 'Jeu-concours',
    bulle: 'Venez sans voiture, gagnez des expériences Route du Rhum',
    bulleBouton: 'Je participe !'
  };

  


  const DEFAUT_CO2 = {
    chiffre: '64,4 %',
    amorce: 'Le saviez-vous ?',
    fort: '64,4 % des émissions de l’événement',
    suite: 'proviennent des déplacements des spectateurs pour se rendre sur le village départ de la course. Faire le choix du train, du bus, du vélo ou du covoiturage, c’est agir ensemble pour une course plus respectueuse de l’environnement.',
    source: 'Source : ADEME, pour un aller',
    titreExplication: 'Comment expliquer ce chiffre ?',
    titreSimulateur: 'Simulateur de l’ADEME',
    sourceComparatif: 'Source : ADEME, pour un aller et par personne.'
  };
  const DEFAUT_TRAJETS = [
    { nom: 'Paris → Saint-Malo', modes: [
      { libelle: 'Train TGV', valeur: 1.2, famille: 'douce' },
      { libelle: 'Voiture électrique à 4', valeur: 6.7, famille: 'partage' },
      { libelle: 'Voiture thermique à 4', valeur: 14.2, famille: 'partage' },
      { libelle: 'Voiture hybride à 4', valeur: 14.6, famille: 'partage' },
      { libelle: 'Car', valeur: 14.9, famille: 'partage' },
      { libelle: 'Voiture électrique seul.e', valeur: 26.8, famille: 'seul' },
      { libelle: 'Voiture thermique seul.e', valeur: 56.6, famille: 'seul' },
      { libelle: 'Voiture hybride seul.e', valeur: 58.3, famille: 'seul' },
      { libelle: 'Avion', valeur: 68.1, famille: 'avion' }
    ] },
    { nom: 'Rennes → Saint-Malo', modes: [
      { libelle: 'Vélo', valeur: 0, famille: 'douce' },
      { libelle: 'Voiture électrique à 4', valeur: 0.86, famille: 'partage' },
      { libelle: 'Train TER', valeur: 1.4, famille: 'douce' },
      { libelle: 'Voiture thermique à 4', valeur: 1.8, famille: 'partage' },
      { libelle: 'Autocar thermique', valeur: 1.9, famille: 'partage' },
      { libelle: 'Voiture hybride à 4', valeur: 1.9, famille: 'partage' },
      { libelle: 'Voiture électrique seul.e', valeur: 3.4, famille: 'seul' },
      { libelle: 'Voiture thermique seul.e', valeur: 7.3, famille: 'seul' },
      { libelle: 'Voiture hybride seul.e', valeur: 7.5, famille: 'seul' }
    ] }
  ];
  const TEINTE = { douce: T.tealClair, partage: T.teal, seul: T.ambre, avion: T.rouge };
  const PANNEAUX = [
    { clef: 'explication', titre: 'titreExplication' },
    { clef: 'simulateur', titre: 'titreSimulateur' }
  ];
  

  const SIMULATEUR = {
    src: 'https://impactco2.fr/iframe.js',
    attrs: { name: 'impact-co2', 'data-type': 'transport', 'data-search': '?theme=default&tabs=distance,itineraire,teletravail&language=fr&km=10' },
    secours: 'https://impactco2.fr/outils/transport',
    delai: 8000
  };

  


  function adresseSure(u) {
    const v = String(u == null ? '' : u).trim();
    if (!v) return '';
    if (v.charAt(0) === '/' || v.charAt(0) === '#') return v;
    if (!/^[a-z][a-z0-9+.-]*:/i.test(v)) return '';
    try {
      const url = new URL(v);
      if (url.protocol === 'https:' || url.protocol === 'http:' || url.protocol === 'mailto:' || url.protocol === 'tel:') return url.href;
      return '';
    } catch (e) { return ''; }
  }
  

  function imageWix(valeur, largeur, hauteur, mode) {
    const v = String(valeur == null ? '' : valeur).trim();
    if (!v) return '';
    if (v.indexOf('http') === 0) return v;
    const m = v.match(/^wix:image:\/\/v1\/([^/]+)\/([^#?]*)/);
    if (!m) return '';
    return 'https://static.wixstatic.com/media/' + m[1] + '/v1/' + (mode || 'fill') + '/w_' + largeur + ',h_' + hauteur + ',q_85,enc_auto/' + (m[2] || 'image.jpg');
  }
  


  function couperLien(ligne) {
    const parts = String(ligne == null ? '' : ligne).split(' → ');
    if (parts.length === 1) return { texte: parts[0].trim(), libelle: '', lien: '' };
    const queue = parts[parts.length - 1].trim();
    const m = queue.match(/^\[([^\]]*)\]\s*(.*)$/);
    return { texte: parts.slice(0, -1).join(' → ').trim(), libelle: m ? m[1].trim() : '', lien: m ? m[2].trim() : queue };
  }
  function lireLignes(texte) {
    if (!texte) return [];
    return String(texte).split('\n').map(l => l.trim()).filter(Boolean).map(ligne => {
      if (ligne.indexOf('## ') === 0) return { type: 'titre', texte: ligne.slice(3).trim() };
      const c = couperLien(ligne);
      c.type = 'item';
      return c;
    });
  }

  


  const CSS = `
rdr-venir{display:block;width:100%;font-family:${POLICE_TEXTE};color:${T.marine};}
rdr-venir *,rdr-venir *::before,rdr-venir *::after,.rv-fen,.rv-fen *,.rv-fen *::before,.rv-fen *::after,.rv-flot,.rv-flot *{box-sizing:border-box;}
rdr-venir [hidden],.rv-fen [hidden],.rv-flot [hidden]{display:none!important;}
rdr-venir .rv-bloc{position:relative;scroll-margin-top:110px;}
rdr-venir .rv-int{width:100%;max-width:1200px;margin:0 auto;padding:0 clamp(16px,4vw,40px);}


rdr-venir .rv-sombre{position:relative;color:${T.texte};
  background:radial-gradient(55% 45% at 88% 0%,rgba(93,191,192,.16) 0%,rgba(93,191,192,0) 62%),radial-gradient(40% 30% at 0% 70%,rgba(245,190,65,.08) 0%,rgba(245,190,65,0) 60%),linear-gradient(180deg,#0B1E3F 0%,${T.marine} 55%,#10284D 100%);}
rdr-venir .rv-sombre .rv-bloc{padding:clamp(36px,4.5vw,64px) 0;}
rdr-venir .rv-sombre .rv-bloc--hero{padding-top:clamp(40px,5vw,72px);}
rdr-venir .rv-sombre .rv-bloc:last-of-type{padding-bottom:clamp(56px,7vw,96px);}
rdr-venir .rv-vague-cadre{overflow:hidden;line-height:0;margin-bottom:-1px;}
rdr-venir .rv-vague-cadre--haut{margin:-1px 0 0;}
rdr-venir .rv-vague{display:block;width:calc(100% + 120px);margin-left:-60px;height:clamp(34px,5vw,64px);animation:rvHoule 11s ease-in-out infinite alternate;}
rdr-venir .rv-vague--haut{transform:scaleY(-1);}
@keyframes rvHoule{from{translate:-40px 0}to{translate:40px 0}}
rdr-venir .rv-clair{background:${T.blanc};color:${T.marine};}
rdr-venir .rv-clair .rv-bloc{padding:clamp(56px,7vw,96px) 0;}
rdr-venir .rv-creme{background:${T.creme};color:${T.marine};}
rdr-venir .rv-creme .rv-bloc{padding:clamp(56px,7vw,96px) 0 clamp(64px,8vw,112px);}


rdr-venir .rv-tete{max-width:760px;margin:0 0 clamp(28px,3.5vw,44px);}
rdr-venir .rv-tete--centre{margin-left:auto;margin-right:auto;text-align:center;}
rdr-venir .rv-kick{display:flex;align-items:center;gap:10px;margin:0 0 12px;font-family:${POLICE_TEXTE};font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:${T.tealClair};}
rdr-venir .rv-tete--centre .rv-kick{justify-content:center;}
rdr-venir .rv-clair .rv-kick,rdr-venir .rv-creme .rv-kick{color:${T.tealSombre};}
rdr-venir .rv-kick svg{width:16px;height:16px;flex:none;}
rdr-venir .rv-titre{margin:0;font-family:${POLICE_TITRE};font-style:italic;font-weight:400;font-size:clamp(28px,3.6vw,46px);line-height:.98;letter-spacing:.005em;text-transform:uppercase;color:inherit;text-wrap:balance;}
rdr-venir .rv-titre em{font-style:inherit;color:${T.ambreVif};}
 
rdr-venir .rv-tete .rv-titre::after{content:'';display:block;width:44px;height:3px;margin-top:18px;border-radius:2px;background:linear-gradient(90deg,${T.ambreVif},${T.ambre});}
rdr-venir .rv-tete--centre .rv-titre::after{margin-left:auto;margin-right:auto;}
rdr-venir .rv-sous{margin:14px 0 0;font-family:${POLICE_TEXTE};font-size:clamp(15px,1.15vw,17px);line-height:1.6;color:${T.texte2};max-width:640px;text-wrap:pretty;}
rdr-venir .rv-tete--centre .rv-sous{margin-left:auto;margin-right:auto;}
rdr-venir .rv-clair .rv-sous,rdr-venir .rv-creme .rv-sous{color:${T.marine2};}
 
rdr-venir .rv-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:54px;padding:0 26px;border:0;border-radius:3px 16px 3px 16px;cursor:pointer;text-decoration:none;
  background:linear-gradient(135deg,${T.ambreVif} 0%,${T.ambre} 100%);color:${T.marine};font-family:${POLICE_TEXTE};font-size:12.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  box-shadow:0 10px 24px -14px rgba(252,241,80,.7);transition:transform .18s ease,box-shadow .18s ease,filter .18s ease;}
rdr-venir .rv-btn:hover{transform:translateY(-2px);box-shadow:0 16px 30px -12px rgba(252,241,80,.75);filter:brightness(1.04);}
rdr-venir .rv-btn:active{transform:translateY(0);}
rdr-venir .rv-btn:focus-visible{outline:2px solid ${T.tealClair};outline-offset:3px;}
rdr-venir .rv-btn svg{width:17px;height:17px;flex:none;}
 
rdr-venir .rv-btn--invite svg{animation:rvInvite 2.4s ease-in-out infinite;}
@keyframes rvInvite{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}
 
rdr-venir .rv-btn--ligne{background:transparent;color:${T.marine};box-shadow:inset 0 0 0 1.5px rgba(22,53,93,.3);}
rdr-venir .rv-btn--ligne:hover{box-shadow:inset 0 0 0 1.5px ${T.marine};filter:none;}
rdr-venir .rv-btn--clair{background:rgba(255,255,255,.04);color:${T.blanc};box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.4);}
rdr-venir .rv-btn--clair:hover{background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.8);filter:none;}

 
rdr-venir .rv-hero{display:grid;gap:clamp(28px,4vw,52px);}


rdr-venir .rv-bloc--hero{overflow:hidden;}
rdr-venir .rv-bloc--hero::before{content:'';position:absolute;right:0;top:clamp(60px,9vw,140px);width:min(52%,760px);aspect-ratio:760/340;pointer-events:none;opacity:.16;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 340' fill='none' stroke='%23ffffff' stroke-linecap='round'%3E%3Cpath d='M0 54C110 10 210 100 330 62S560 6 760 58' stroke-width='1.8' stroke-opacity='.9'/%3E%3Cpath d='M0 128C130 84 240 174 360 136S590 80 760 130' stroke-width='1.6' stroke-opacity='.7'/%3E%3Cpath d='M0 204C100 160 230 248 350 210S600 154 760 206' stroke-width='1.4' stroke-opacity='.5'/%3E%3Cpath d='M0 282C140 238 250 328 370 290S610 232 760 284' stroke-width='1.2' stroke-opacity='.34'/%3E%3C/svg%3E") right top/contain no-repeat;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 55%);mask-image:linear-gradient(90deg,transparent 0%,#000 55%);
  animation:rvDerive 14s ease-in-out infinite alternate;}
@keyframes rvDerive{from{translate:0 0}to{translate:-28px 8px}}
rdr-venir .rv-hero__photo[data-prete="1"]::before{display:none;}
rdr-venir .rv-hero__texte{max-width:940px;}
rdr-venir .rv-hero__titre{font-size:clamp(34px,4.7vw,64px);}
rdr-venir .rv-hero__p{margin:18px 0 0;font-family:${POLICE_TEXTE};font-size:clamp(16px,1.3vw,19px);line-height:1.6;color:${T.texte2};max-width:600px;text-wrap:pretty;}


rdr-venir .rv-hero__actions{display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin-top:28px;}
rdr-venir .rv-hero__photo{position:relative;margin:0;border-radius:28px 6px 28px 6px;overflow:hidden;aspect-ratio:2.4/1;max-height:460px;background:${T.voile};box-shadow:0 40px 80px -40px rgba(0,0,0,.6),inset 0 0 0 1px rgba(255,255,255,.08);}
rdr-venir .rv-hero__photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:60% 50%;opacity:0;transition:opacity .6s ease;will-change:transform;}
 
rdr-venir .rv-hero__photo img[data-prete="1"]{opacity:1;animation:rvRespire 26s ease-in-out infinite alternate;}
@keyframes rvRespire{from{transform:scale(1)}to{transform:scale(1.07) translate(-1%,-1.5%)}}


rdr-venir .rv-hero__photo::before{content:'';position:absolute;inset:0;background:linear-gradient(100deg,rgba(255,255,255,.04) 30%,rgba(255,255,255,.1) 50%,rgba(255,255,255,.04) 70%);background-size:220% 100%;animation:rvReflet 1.6s linear infinite;}
@keyframes rvReflet{from{background-position:120% 0}to{background-position:-120% 0}}



rdr-venir .rv-sq{display:block;position:relative;overflow:hidden;border-radius:10px;background:rgba(22,53,93,.08);}
rdr-venir .rv-sq::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,rgba(255,255,255,0) 30%,rgba(255,255,255,.55) 50%,rgba(255,255,255,0) 70%);background-size:220% 100%;animation:rvReflet 1.5s linear infinite;}
rdr-venir .rv-sq--pilule{display:inline-block;width:132px;height:46px;border-radius:100px;}
rdr-venir .rv-sq--mot{height:64px;border-radius:14px;margin:0 0 28px;}
rdr-venir .rv-sq--rond{width:44px;height:44px;border-radius:50%;flex:none;}
rdr-venir .rv-sq--titre{height:22px;width:46%;}
rdr-venir .rv-sq--ligne{height:13px;width:100%;margin-top:14px;}
rdr-venir .rv-sq--ligne:nth-child(2n){width:88%;}
rdr-venir .rv-sq--ligne:nth-child(3n){width:70%;}
rdr-venir .rv-sq--photo{aspect-ratio:4/3;border-radius:16px;}
rdr-venir .rv-sq-tete{display:flex;align-items:center;gap:14px;margin:0 0 6px;}
rdr-venir .rv-sq-pilules{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:0 0 clamp(28px,3vw,40px);}
rdr-venir .rv-fiche--sq,rdr-venir .rv-carte--sq{box-shadow:none;}
rdr-venir .rv-apparait{animation:rvApparait .45s ease both;}
 
rdr-venir [data-revele]{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s cubic-bezier(.16,1,.3,1);transition-delay:var(--rv-delai,0s);}
rdr-venir [data-revele="vu"]{opacity:1;transform:none;}
rdr-venir .rv-co2__jauge{transition:width .8s cubic-bezier(.16,1,.3,1);transition-delay:var(--rv-delai,0s);}
@keyframes rvApparait{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){
  rdr-venir .rv-apparait,rdr-venir .rv-sq::after,rdr-venir .rv-hero__photo::before{animation:none;}
  rdr-venir .rv-hero__photo img{transition:none;opacity:1;}
}
rdr-venir .rv-hero__photo::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,30,63,0) 60%,rgba(11,30,63,.35) 100%);pointer-events:none;}

 
rdr-venir .rv-co2{border-radius:24px 6px 24px 6px;padding:clamp(26px,3.4vw,46px);overflow:hidden;color:${T.texte};
  background:linear-gradient(158deg,rgba(255,255,255,.07) 0%,rgba(255,255,255,.03) 60%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1);}
rdr-venir .rv-co2__hero{display:grid;grid-template-columns:minmax(0,auto) minmax(0,1fr);gap:clamp(18px,3vw,44px);align-items:center;}
rdr-venir .rv-co2__chiffre{margin:0;font-family:${POLICE_TITRE};font-style:italic;font-weight:400;font-size:clamp(58px,8.6vw,112px);line-height:.86;color:${T.ambreVif};font-variant-numeric:tabular-nums;white-space:nowrap;}
rdr-venir .rv-co2__texte{margin:0;font-family:${POLICE_TEXTE};font-size:clamp(14.5px,1.05vw,16.5px);line-height:1.62;color:rgba(255,255,255,.86);text-wrap:pretty;}
rdr-venir .rv-co2__fort{color:${T.blanc};font-weight:700;}
rdr-venir .rv-co2__srcHaut{margin:10px 0 0;font-family:${POLICE_TEXTE};font-size:12px;font-style:italic;color:rgba(255,255,255,.5);}
rdr-venir .rv-co2__plis{margin-top:clamp(22px,2.6vw,34px);}
rdr-venir .rv-co2__pli{border-top:1px solid rgba(255,255,255,.13);}
rdr-venir .rv-co2__bt{appearance:none;margin:0;border:0;background:none;display:flex;width:100%;min-height:44px;padding:17px 0;align-items:center;justify-content:space-between;gap:14px;cursor:pointer;text-align:left;
  font-family:${POLICE_TEXTE};font-size:14.5px;font-weight:700;color:${T.ambreVif};transition:color .2s;}
rdr-venir .rv-co2__bt:hover{color:${T.blanc};}
rdr-venir .rv-co2__bt:focus-visible{outline:2px solid ${T.ambreVif};outline-offset:3px;border-radius:3px;}
rdr-venir .rv-co2__chev{flex:none;width:16px;height:16px;transition:transform .25s ease;}
rdr-venir .rv-co2__bt[aria-expanded="true"] .rv-co2__chev{transform:rotate(180deg);}
rdr-venir .rv-co2__vol{padding:4px 0 28px;}
rdr-venir .rv-co2__trajets{display:flex;gap:10px;margin:0 0 24px;flex-wrap:wrap;}
rdr-venir .rv-co2__tr{appearance:none;margin:0;padding:10px 18px;border-radius:100px;border:1px solid rgba(255,255,255,.25);background:transparent;color:rgba(255,255,255,.85);
  font-family:${POLICE_TEXTE};font-size:14px;font-weight:700;cursor:pointer;transition:background .2s,color .2s,border-color .2s;}
rdr-venir .rv-co2__tr:hover{border-color:${T.tealClair};color:${T.blanc};}
rdr-venir .rv-co2__tr[aria-selected="true"]{background:${T.tealClair};color:${T.marine};border-color:${T.tealClair};}
rdr-venir .rv-co2__tr:focus-visible{outline:2px solid ${T.blanc};outline-offset:2px;}
rdr-venir .rv-co2__lignes{list-style:none;margin:0;padding:0;}
rdr-venir .rv-co2__l{display:grid;grid-template-columns:190px 1fr 112px;align-items:center;gap:14px;margin-bottom:13px;}
rdr-venir .rv-co2__nom{font-family:${POLICE_TEXTE};font-size:14px;font-weight:600;color:rgba(255,255,255,.85);}
rdr-venir .rv-co2__rail{display:block;height:12px;border-radius:100px;background:rgba(255,255,255,.1);overflow:hidden;}
rdr-venir .rv-co2__jauge{display:block;height:100%;border-radius:100px;}
rdr-venir .rv-co2__val{font-family:${POLICE_TEXTE};font-size:13.5px;font-weight:700;text-align:right;color:rgba(255,255,255,.92);white-space:nowrap;font-variant-numeric:tabular-nums;}
rdr-venir .rv-co2__src{margin:16px 0 0;font-family:${POLICE_TEXTE};font-size:12px;font-style:italic;color:rgba(255,255,255,.55);}
rdr-venir .rv-co2__sim{border-radius:14px;overflow:hidden;background:rgba(255,255,255,.04);min-height:120px;}
rdr-venir .rv-co2__sim iframe{width:100%;min-height:520px;border:0;border-radius:14px;display:block;}
rdr-venir .rv-co2__secours{margin:0;border:1px dashed rgba(255,255,255,.3);border-radius:14px;padding:26px;text-align:center;font-family:${POLICE_TEXTE};font-size:13.5px;font-weight:600;color:rgba(255,255,255,.72);line-height:1.7;}
rdr-venir .rv-co2__secours a{color:${T.tealClair};text-decoration:underline;text-underline-offset:3px;}








rdr-venir .rv .rv-mob{isolation:isolate;padding:38px 36px 34px;
  background:radial-gradient(70% 90% at 0% 0%,rgba(245,190,65,.42) 0%,rgba(245,190,65,0) 58%),radial-gradient(55% 70% at 100% 100%,rgba(93,191,192,.26) 0%,rgba(93,191,192,0) 60%),linear-gradient(160deg,#22477F 0%,${T.marine} 52%,${T.marine900} 100%);
  box-shadow:inset 0 0 0 2px rgba(245,190,65,.6),0 0 0 6px rgba(245,190,65,.08),0 34px 70px -30px rgba(245,190,65,.4),0 24px 50px -24px rgba(10,26,53,.7);}
rdr-venir .rv .rv-mob::before{content:'';position:absolute;right:-30px;top:-10px;width:min(58%,560px);aspect-ratio:760/340;pointer-events:none;opacity:.13;z-index:-1;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 340' fill='none' stroke='%23ffffff' stroke-linecap='round'%3E%3Cpath d='M0 54C110 10 210 100 330 62S560 6 760 58' stroke-width='1.8' stroke-opacity='.9'/%3E%3Cpath d='M0 128C130 84 240 174 360 136S590 80 760 130' stroke-width='1.6' stroke-opacity='.7'/%3E%3Cpath d='M0 204C100 160 230 248 350 210S600 154 760 206' stroke-width='1.4' stroke-opacity='.5'/%3E%3Cpath d='M0 282C140 238 250 328 370 290S610 232 760 284' stroke-width='1.2' stroke-opacity='.34'/%3E%3C/svg%3E") right top/contain no-repeat;-webkit-mask-image:linear-gradient(90deg,transparent,#000 50%);mask-image:linear-gradient(90deg,transparent,#000 50%);}
rdr-venir .rv .rv-mob::after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  background:linear-gradient(115deg,rgba(255,255,255,0) 42%,rgba(255,255,255,.13) 50%,rgba(255,255,255,0) 58%);background-size:260% 100%;background-repeat:no-repeat;background-position:130% 0;animation:rvEclat 7s ease-in-out infinite;}
@keyframes rvEclat{0%{background-position:130% 0}32%{background-position:-130% 0}100%{background-position:-130% 0}}
rdr-venir .rv .rv-mob__tag{position:absolute;top:0;right:40px;z-index:1;padding:9px 14px 10px;border-radius:0 0 10px 10px;background:linear-gradient(180deg,${T.ambreVif},${T.ambre});color:${T.marine};
  font-family:${POLICE_TEXTE};font-size:10.5px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;box-shadow:0 8px 18px -8px rgba(252,241,80,.6);}
rdr-venir .rv .rv-mob__tymal{animation:rvPedale 9s ease-in-out infinite;}


@keyframes rvPedale{
  0%,100%{transform:rotate(-4deg) translate(0,0)}
  6%{transform:rotate(-4deg) translate(0,-4px)}
  10%{transform:rotate(-2.5deg) translate(3px,0)}
  14%{transform:rotate(-4deg) translate(0,-4px)}
  18%{transform:rotate(-5.5deg) translate(0,0)}
  24%{transform:rotate(-4deg) translate(2px,-2px)}
  58%{transform:rotate(-3.5deg) translate(-8px,0)}
  80%{transform:rotate(-4deg) translate(-2px,0)}
}
@media (max-width:767px){
  rdr-venir .rv .rv-mob{padding:56px 22px 24px;}
  rdr-venir .rv .rv-mob__tag{right:22px;}
  rdr-venir .rv .rv-mob::before{width:90%;top:40px;}
}
@media (prefers-reduced-motion:reduce){
  rdr-venir .rv .rv-mob::after,rdr-venir .rv .rv-mob__tymal{animation:none;}
}

 
rdr-venir .rv-reg__onglets{display:flex;gap:10px;justify-content:center;margin:0 0 clamp(28px,3vw,40px);flex-wrap:wrap;}
rdr-venir .rv-reg__r{appearance:none;margin:0;padding:12px 22px;border-radius:100px;background:${T.creme};border:1px solid ${T.filetClair};color:${T.marine};cursor:pointer;
  font-family:${POLICE_TEXTE};font-size:14px;font-weight:700;transition:background .2s,color .2s,border-color .2s;}
rdr-venir .rv-reg__r:hover{border-color:${T.tealSombre};color:${T.tealSombre};}
rdr-venir .rv-reg__r[aria-selected="true"]{background:${T.marine};color:${T.blanc};border-color:${T.marine};}
rdr-venir .rv-reg__r:focus-visible{outline:2px solid ${T.tealSombre};outline-offset:2px;}
rdr-venir .rv-reg__mot{display:flex;gap:14px;align-items:flex-start;margin:0 0 28px;padding:18px 24px;border-radius:14px;background:${T.creme};font-family:${POLICE_TEXTE};font-size:14.5px;line-height:1.6;color:${T.marine2};}
rdr-venir .rv-reg__mot svg{flex:none;width:20px;height:20px;margin-top:2px;color:${T.tealSombre};}
rdr-venir .rv-reg__vide{margin:0;padding:40px;text-align:center;font-family:${POLICE_TEXTE};font-size:14px;color:${T.marine2};}
rdr-venir .rv-cartes{display:grid;gap:22px;}


rdr-venir .rv-fiche{display:grid;grid-template-columns:minmax(0,1fr);gap:clamp(20px,2.6vw,36px);padding:clamp(24px,3vw,36px);border:1px solid ${T.filetClair};border-radius:22px;background:${T.blanc};box-shadow:0 24px 50px -40px rgba(22,53,93,.35);}
rdr-venir .rv-fiche--photo{grid-template-columns:minmax(0,1fr) minmax(240px,320px);align-items:start;}
rdr-venir .rv-fiche__t{display:flex;align-items:center;gap:14px;margin:0 0 10px;font-family:${POLICE_TITRE};font-style:italic;font-weight:400;font-size:clamp(20px,2vw,25px);line-height:1.05;text-transform:uppercase;color:${T.marine};}
rdr-venir .rv-pico{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:rgba(0,103,110,.09);color:${T.tealSombre};}
rdr-venir .rv-pico svg{width:22px;height:22px;}
rdr-venir .rv-fiche__tag{margin:0 0 16px;font-family:${POLICE_TEXTE};font-size:15px;line-height:1.55;color:${T.marine2};text-wrap:pretty;}
rdr-venir .rv-liste{margin:0 0 6px;padding-left:20px;list-style:disc;}
rdr-venir .rv-liste li{margin-bottom:7px;font-family:${POLICE_TEXTE};font-size:14.5px;line-height:1.6;color:${T.marine2};}
rdr-venir .rv-liste li::marker{color:${T.tealSombre};}
rdr-venir .rv-a{color:${T.tealSombre};font-weight:700;text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px;}
rdr-venir .rv-a:hover{text-decoration-thickness:2px;}
rdr-venir .rv-a:focus-visible{outline:2px solid ${T.tealSombre};outline-offset:2px;border-radius:2px;}
rdr-venir .rv-st{margin:16px 0 8px;font-family:${POLICE_TEXTE};font-size:15px;font-weight:700;color:${T.marine};}
rdr-venir .rv-astuce{display:flex;gap:12px;align-items:flex-start;margin:18px 0 0;padding:14px 18px;border-radius:12px;background:${T.creme};font-family:${POLICE_TEXTE};font-size:13.5px;line-height:1.55;color:${T.marine2};}
rdr-venir .rv-astuce svg{flex:none;width:20px;height:20px;margin-top:1px;color:${T.ambre};}
rdr-venir .rv-fiche__photo{margin:0;border-radius:16px;overflow:hidden;aspect-ratio:4/3;background:${T.voileClair};}
rdr-venir .rv-fiche__photo img{display:block;width:100%;height:100%;object-fit:cover;}
rdr-venir .rv-fiche__attente{display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:14px;text-align:center;font-family:${POLICE_TEXTE};font-size:12.5px;font-weight:600;color:${T.marine2};border:1px dashed ${T.filetClair};border-radius:16px;}
rdr-venir .rv-cadre{margin:16px 0 4px;overflow-x:auto;}
rdr-venir .rv-prix{width:100%;border-collapse:collapse;font-family:${POLICE_TEXTE};font-size:13.5px;min-width:420px;}
rdr-venir .rv-prix th,rdr-venir .rv-prix td{border:1px solid ${T.filetClair};padding:10px 12px;text-align:left;font-family:${POLICE_TEXTE};}
rdr-venir .rv-prix th{background:${T.creme};font-weight:700;color:${T.marine};font-size:13px;}
rdr-venir .rv-prix td{color:${T.marine2};}
rdr-venir .rv-prix .rv-num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}
rdr-venir .rv-fiche--indiv{background:${T.creme};border-color:transparent;box-shadow:none;}
rdr-venir .rv-fiche--indiv .rv-pico{background:rgba(22,53,93,.08);color:${T.marine};}
rdr-venir .rv-fiche__actions{margin-top:6px;}

 
rdr-venir .rv-pastilles{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin:0 0 clamp(24px,3vw,36px);}
rdr-venir .rv-pastille{display:inline-flex;align-items:center;gap:10px;min-height:46px;padding:0 20px 0 14px;border-radius:100px;background:${T.blanc};border:1px solid ${T.filetClair};font-family:${POLICE_TEXTE};font-size:14px;font-weight:700;color:${T.marine};}
rdr-venir .rv-pastille svg{width:20px;height:20px;color:${T.tealSombre};}
rdr-venir .rv-prat{display:grid;grid-template-columns:minmax(0,1fr);gap:22px;}
rdr-venir .rv-prat--2{grid-template-columns:repeat(2,minmax(0,1fr));}
rdr-venir .rv-carte{display:grid;gap:14px;padding:clamp(24px,3vw,36px);border-radius:22px;background:${T.blanc};border:1px solid rgba(22,53,93,.08);box-shadow:0 24px 50px -40px rgba(22,53,93,.35);}
rdr-venir .rv-carte__t{display:flex;align-items:center;gap:14px;margin:0;font-family:${POLICE_TITRE};font-style:italic;font-weight:400;font-size:clamp(20px,2vw,25px);line-height:1.05;text-transform:uppercase;color:${T.marine};}
rdr-venir .rv-carte__p{margin:0;font-family:${POLICE_TEXTE};font-size:15px;line-height:1.6;color:${T.marine2};text-wrap:pretty;}
rdr-venir .rv-carte .rv-liste{columns:2;column-gap:36px;margin:4px 0 0;}
rdr-venir .rv-carte .rv-liste li{break-inside:avoid;}
rdr-venir .rv-carte__note{display:flex;gap:12px;align-items:flex-start;margin:6px 0 0;padding:16px 18px;border-radius:12px;background:rgba(0,103,110,.07);font-family:${POLICE_TEXTE};font-size:14px;line-height:1.6;color:${T.marine};}
rdr-venir .rv-carte__note svg{flex:none;width:20px;height:20px;margin-top:2px;color:${T.tealSombre};}
rdr-venir .rv-carte__photo{margin:0;border-radius:14px;overflow:hidden;aspect-ratio:16/9;}
rdr-venir .rv-carte__photo img{display:block;width:100%;height:100%;object-fit:cover;}

@media (max-width:900px){
  rdr-venir .rv-fiche--photo{grid-template-columns:1fr;}
  rdr-venir .rv-fiche__photo{aspect-ratio:16/9;order:-1;}
  rdr-venir .rv-prat--2{grid-template-columns:1fr;}
  rdr-venir .rv-carte .rv-liste{columns:1;}
}
@media (max-width:720px){
  rdr-venir .rv-co2__hero{grid-template-columns:1fr;gap:14px;}
  rdr-venir .rv-hero__photo{aspect-ratio:4/3;border-radius:18px 4px 18px 4px;}
  rdr-venir .rv-bloc{scroll-margin-top:80px;}
}
@media (max-width:640px){
  rdr-venir .rv-co2__l{grid-template-columns:1fr auto;grid-template-areas:"nom nom" "rail val";row-gap:8px;}
  rdr-venir .rv-co2__nom{grid-area:nom;font-size:13px;}
  rdr-venir .rv-co2__rail{grid-area:rail;}
  rdr-venir .rv-co2__val{grid-area:val;font-size:12.5px;}
  rdr-venir .rv-fiche{padding:22px 20px;}
  rdr-venir .rv-reg__onglets{gap:8px;}
  rdr-venir .rv-reg__r{padding:10px 16px;font-size:13px;}
  rdr-venir .rv-btn{width:100%;}
  rdr-venir .rv-bloc--hero::before{display:none;}
}
@media (prefers-reduced-motion:reduce){
  rdr-venir .rv-co2__chev,rdr-venir .rv-co2__tr,rdr-venir .rv-reg__r,rdr-venir .rv-btn,rdr-venir .rv-co2__jauge{transition:none;}
  rdr-venir [data-revele]{opacity:1;transform:none;transition:none;}
  rdr-venir .rv-btn--invite svg,rdr-venir .rv-hero__photo img[data-prete="1"],rdr-venir .rv-vague,rdr-venir .rv-bloc--hero::before{animation:none;}
}

 
rdr-venir .rv-mob{position:relative;overflow:hidden;border-radius:20px 4px 20px 4px;padding:30px 30px 28px;color:${T.texte};
  background:radial-gradient(70% 90% at 0% 0%,rgba(245,190,65,.22) 0%,rgba(245,190,65,0) 60%),linear-gradient(160deg,#1E3A66 0%,${T.marine} 55%,${T.marine900} 100%);
  box-shadow:inset 0 0 0 1.5px rgba(245,190,65,.35),0 22px 50px -24px rgba(10,26,53,.6);}
rdr-venir .rv-mob__grille{display:grid;grid-template-columns:minmax(0,1fr) 190px;gap:26px;align-items:center;}
rdr-venir .rv-mob__kick{display:flex;align-items:center;gap:8px;margin:0 0 8px;font-size:10.5px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:${T.ambre};}
rdr-venir .rv-mob__kick svg{width:16px;height:16px;}
rdr-venir .rv-mob__titre{margin:0;font-family:${POLICE_TITRE};font-style:italic;font-size:clamp(24px,3.4vw,34px);line-height:1;text-transform:uppercase;color:${T.blanc};}
rdr-venir .rv-mob__accroche{margin:12px 0 0;font-size:15px;font-weight:700;line-height:1.4;color:${T.blanc};}
rdr-venir .rv-mob__texte{margin:10px 0 0;font-size:13.5px;line-height:1.55;color:${T.texte2};}
rdr-venir .rv-mob__lots{list-style:none;margin:16px 0 0;padding:0;display:grid;gap:8px;}
rdr-venir .rv-mob__lots li{display:flex;align-items:flex-start;gap:10px;font-size:13px;line-height:1.45;color:${T.texte};}
rdr-venir .rv-mob__lots svg{flex:none;width:18px;height:18px;margin-top:1px;color:${T.ambre};}
rdr-venir .rv-mob__lots b{color:${T.ambreVif};}
rdr-venir .rv-mob__actions{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:20px;}
rdr-venir .rv-mob__mention{margin:0;font-size:11px;color:${T.texte3};font-style:italic;}
rdr-venir .rv-mob__tymal{position:relative;justify-self:end;width:190px;height:190px;object-fit:contain;filter:drop-shadow(0 14px 22px rgba(0,0,0,.45));transform:rotate(-4deg);}
@media (max-width:767px){
  rdr-venir .rv-mob{padding:22px 20px 22px;border-radius:16px 3px 16px 3px;}
  rdr-venir .rv-mob__grille{grid-template-columns:1fr;gap:6px;}
  rdr-venir .rv-mob__tymal{width:120px;height:120px;justify-self:center;order:-1;margin-bottom:-6px;}
  }

 
body .rv-flot{position:fixed;right:18px;bottom:18px;z-index:9000;display:flex;align-items:flex-end;gap:10px;
  transform:translateY(0);transition:transform .45s cubic-bezier(.16,1,.3,1),opacity .3s;}
body .rv-flot[data-cache="1"]{transform:translateY(140%);opacity:0;pointer-events:none;}
.rv-flot .rv-flot__bulle{position:relative;max-width:230px;padding:11px 14px;border-radius:14px 14px 3px 14px;background:${T.blanc};color:${T.marine};
  font-size:12.5px;font-weight:700;line-height:1.35;box-shadow:0 14px 34px -14px rgba(10,26,53,.55),0 0 0 1px rgba(22,53,93,.08);
  animation:rvBulle .6s .8s cubic-bezier(.16,1,.3,1) both;}
.rv-flot .rv-flot__bulle small{display:block;margin-top:4px;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:${T.teal};}
.rv-flot .rv-flot__x{position:absolute;top:-9px;left:-9px;width:22px;height:22px;border-radius:50%;border:0;background:${T.marine};color:${T.blanc};display:grid;place-items:center;cursor:pointer;padding:0;}
.rv-flot .rv-flot__x svg{width:11px;height:11px;}
.rv-flot .rv-flot__btn{flex:none;width:92px;height:92px;padding:0;border:0;border-radius:50%;cursor:pointer;overflow:hidden;
  background:#FFFFFF;box-shadow:0 16px 34px -12px rgba(10,26,53,.7),inset 0 0 0 3px rgba(245,190,65,.9);
  display:grid;place-items:center;transition:transform .2s ease;}
.rv-flot .rv-flot__btn:hover{transform:translateY(-3px) rotate(-3deg);}
.rv-flot .rv-flot__btn img{width:82px;height:82px;object-fit:contain;transform:translateY(2px);animation:rvPedale 2.6s ease-in-out infinite;}
@keyframes rvPedale{0%,100%{transform:translateY(-2px) rotate(0)}50%{transform:translateY(-5px) rotate(-3deg)}}
@keyframes rvBulle{from{opacity:0;transform:translateY(8px) scale(.94)}to{opacity:1;transform:none}}
@media (max-width:767px){.rv-flot{right:12px;bottom:12px;}.rv-flot__bulle{display:none;}.rv-flot__btn{width:72px;height:72px;}.rv-flot__btn img{width:64px;height:64px;}}
@media (prefers-reduced-motion:reduce){.rv-flot__btn img,.rv-flot__bulle{animation:none;}}









body .rv-fen{position:fixed;inset:0;z-index:10002;display:grid;place-items:center;padding:20px;opacity:0;visibility:hidden;transition:opacity .2s,visibility 0s .2s;font-family:${POLICE_TEXTE};}
body .rv-fen[data-open="true"]{opacity:1;visibility:visible;transition:opacity .25s,visibility 0s;}
.rv-fen .rv-fen__fond{position:absolute;inset:0;background:rgba(5,18,43,.76);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);}
.rv-fen .rv-fen__panneau{position:relative;width:100%;max-width:700px;max-height:min(92vh,960px);display:flex;flex-direction:column;color:${T.texte};
  background:linear-gradient(160deg,#1C3763 0%,${T.marine} 46%,${T.marine900} 100%);border-radius:22px 4px 22px 4px;box-shadow:0 30px 70px rgba(0,0,0,.55),inset 0 0 0 1.5px rgba(245,190,65,.45);
  transform:translateY(14px) scale(.98);transition:transform .35s cubic-bezier(.16,1,.3,1);overflow:hidden;}
body .rv-fen[data-open="true"] .rv-fen__panneau{transform:none;}


.rv-fen .rv-fen__tete{position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:14px;padding:30px 36px 26px;
  background:radial-gradient(70% 120% at 0% 0%,rgba(245,190,65,.24) 0%,rgba(245,190,65,0) 62%);}
.rv-fen .rv-fen__tete::after{content:'';position:absolute;left:28px;right:28px;bottom:0;border-top:2px dashed rgba(245,190,65,.38);}
.rv-fen .rv-fen__encoche{position:absolute;bottom:-11px;width:22px;height:22px;border-radius:50%;background:#07142A;box-shadow:inset 0 0 0 1.5px rgba(245,190,65,.35);}
.rv-fen .rv-fen__encoche--g{left:-11px;}
.rv-fen .rv-fen__encoche--d{right:-11px;}
.rv-fen .rv-fen__kick{margin:0 0 6px;display:flex;align-items:center;gap:8px;font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:${T.ambre};}
.rv-fen .rv-fen__kick svg{width:14px;height:14px;}
.rv-fen .rv-fen__titre{margin:0;font-family:${POLICE_TITRE};font-style:italic;font-size:30px;line-height:.95;text-transform:uppercase;color:${T.blanc};}
.rv-fen .rv-fen__titre em{font-style:inherit;color:${T.ambreVif};}
.rv-fen .rv-fen__sous{margin:8px 0 0;font-size:12px;line-height:1.45;color:${T.texte2};}
.rv-fen .rv-fen__x{flex:none;width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.04);color:${T.texte2};display:grid;place-items:center;cursor:pointer;padding:0;transition:color .15s,border-color .15s,transform .15s;}
.rv-fen .rv-fen__x:hover{color:#fff;border-color:#fff;transform:rotate(90deg);}
.rv-fen .rv-fen__x svg{width:16px;height:16px;}
.rv-fen .rv-fen__corps{overflow:auto;padding:8px 36px 36px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.2) transparent;}
.rv-fen .rv-form{display:block;}
.rv-fen .rv-form fieldset{margin:0;padding:0;border:0;min-width:0;}
.rv-fen .rv-form legend{padding:0;float:left;width:100%;}


.rv-fen .rv-form .rv-etape{position:relative;display:grid;grid-template-columns:52px minmax(0,1fr);gap:0 22px;padding:44px 0 52px;}
.rv-fen .rv-etape+.rv-etape{border-top:1px solid rgba(255,255,255,.08);}
.rv-fen .rv-etape__n{grid-column:1;grid-row:1/3;font-family:${POLICE_TITRE};font-style:italic;font-size:34px;line-height:1;color:transparent;-webkit-text-stroke:1.2px rgba(245,190,65,.75);transition:color .3s;position:relative;}
.rv-fen .rv-etape__n::after{content:'';position:absolute;left:14px;top:46px;bottom:-72px;width:1px;background:linear-gradient(180deg,rgba(245,190,65,.5),rgba(245,190,65,0));}
.rv-fen .rv-etape:last-of-type .rv-etape__n::after{display:none;}
.rv-fen .rv-etape[data-complete="1"] .rv-etape__n{color:${T.ambreVif};-webkit-text-stroke:0;}
.rv-fen .rv-etape__t{grid-column:2;grid-row:1;margin:9px 0 30px;font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:${T.blanc};}
.rv-fen .rv-etape__t small{display:block;margin-top:5px;font-size:12px;font-weight:500;letter-spacing:0;text-transform:none;color:${T.texte3};}
.rv-fen .rv-etape__corps{grid-column:2;grid-row:2;display:grid;grid-template-columns:minmax(0,1fr);gap:24px;min-width:0;}
.rv-fen .rv-2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px 32px;}



.rv-fen .rv-champ{position:relative;display:grid;gap:6px;padding:4px 0 8px;border-bottom:1.5px solid rgba(255,255,255,.22);transition:border-color .2s;}
.rv-fen .rv-champ:focus-within{border-color:${T.ambre};}
.rv-fen .rv-champ[data-ok="1"]{border-color:rgba(93,191,192,.7);}
.rv-fen .rv-champ[data-erreur]{border-color:${T.rouge};}
.rv-fen .rv-champ label,.rv-fen .rv-lbl{font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.62);}
.rv-fen .rv-champ:focus-within label{color:${T.ambreVif};}
.rv-fen .rv-champ input{width:100%;min-height:36px;padding:2px 28px 2px 0;border:0;background:transparent;color:${T.blanc};font-family:${POLICE_TEXTE};font-size:16px;font-weight:600;outline:none;}
.rv-fen .rv-champ input::placeholder{color:rgba(255,255,255,.28);font-weight:500;}
.rv-fen .rv-champ input:-webkit-autofill{-webkit-text-fill-color:${T.blanc};-webkit-box-shadow:0 0 0 40px #17325A inset;}
.rv-fen .rv-champ::after{content:'';position:absolute;right:0;bottom:16px;width:16px;height:16px;border-radius:50%;background:${T.tealClair};opacity:0;transform:scale(.5);transition:opacity .2s,transform .2s;
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.2 4.2L19 7.5' fill='none' stroke='%23000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/16px no-repeat;
  mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.2 4.2L19 7.5' fill='none' stroke='%23000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/16px no-repeat;}
.rv-fen .rv-champ[data-ok="1"]::after{opacity:1;transform:none;}
.rv-fen .rv-champ small{font-size:11px;color:${T.texte3};margin-top:2px;}
.rv-fen .rv-err{display:none;font-size:11px;font-weight:700;color:#FF8A94;margin-top:4px;}
.rv-fen .rv-champ[data-erreur] .rv-err,.rv-fen .rv-bloc[data-erreur] .rv-err{display:block;}


.rv-fen .rv-date{display:flex;align-items:baseline;gap:6px;}
.rv-fen .rv-date input{width:2.4ch;min-width:2.4ch;text-align:center;padding:2px 0;font-variant-numeric:tabular-nums;}
.rv-fen .rv-date input[name="naissAn"]{width:4.6ch;min-width:4.6ch;}
.rv-fen .rv-date i{font-style:normal;color:rgba(255,255,255,.3);font-weight:600;}
 
.rv-fen .rv-jours-tete{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 12px;}
.rv-fen .rv-jours-tete .rv-lbl{margin:0;}
.rv-fen .rv-jours-nav{display:flex;gap:6px;}
.rv-fen .rv-jours-nav button{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.05);color:${T.blanc};display:grid;place-items:center;cursor:pointer;padding:0;transition:background .15s,border-color .15s,opacity .15s;}
.rv-fen .rv-jours-nav button:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.5);}
.rv-fen .rv-jours-nav button:disabled{opacity:.3;cursor:default;}
.rv-fen .rv-jours-nav svg{width:15px;height:15px;}
.rv-fen .rv-jours{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:6px 2px 12px;margin:0 -2px;scrollbar-width:none;
  -webkit-mask-image:linear-gradient(90deg,#000 92%,transparent);mask-image:linear-gradient(90deg,#000 92%,transparent);}
.rv-fen .rv-jours::-webkit-scrollbar{display:none;}
.rv-fen .rv-jour{position:relative;flex:0 0 72px;scroll-snap-align:start;display:grid;justify-items:center;gap:3px;padding:12px 4px 11px;border-radius:12px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.05);cursor:pointer;
  color:${T.texte2};transition:border-color .15s,background .15s,color .15s,transform .15s;}
.rv-fen .rv-jour input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer;}
.rv-fen .rv-jour small{font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.62);}
.rv-fen .rv-jour b{font-family:${POLICE_TITRE};font-style:italic;font-weight:400;font-size:26px;line-height:1;color:${T.blanc};}
.rv-fen .rv-jour i{font-style:normal;font-size:9.5px;font-weight:700;color:${T.texte3};}
.rv-fen .rv-jour[data-we="1"]{border-color:rgba(245,190,65,.45);}
.rv-fen .rv-jour[data-we="1"] small{color:${T.ambre};}
.rv-fen .rv-jour:hover{border-color:rgba(255,255,255,.4);transform:translateY(-2px);}
.rv-fen .rv-jour input:checked+small,.rv-fen .rv-jour[data-choisi="1"]{}
.rv-fen .rv-jour[data-choisi="1"]{background:${T.ambreVif};border-color:${T.ambreVif};color:${T.marine};}
.rv-fen .rv-jour[data-choisi="1"] b,.rv-fen .rv-jour[data-choisi="1"] i,.rv-fen .rv-jour[data-choisi="1"] small{color:${T.marine};}
.rv-fen .rv-jour input:focus-visible~b{outline:2px solid ${T.tealClair};outline-offset:6px;border-radius:4px;}
.rv-fen .rv-bloc[data-erreur] .rv-jour{border-color:rgba(230,57,70,.6);}
.rv-fen .rv-jours-choix{margin:4px 0 0;font-size:13px;color:${T.texte2};}
.rv-fen .rv-jours-choix b{color:${T.ambreVif};}
 
.rv-fen .rv-modes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;}
.rv-fen .rv-mode{position:relative;}
.rv-fen .rv-mode input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer;}
.rv-fen .rv-mode span{position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;min-height:96px;padding:20px 8px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.05);
  font-size:11.5px;font-weight:700;text-align:center;color:${T.texte2};transition:border-color .15s,background .15s,color .15s,transform .15s;}
.rv-fen .rv-mode span::after{content:'';position:absolute;top:9px;right:9px;width:14px;height:14px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);transition:background .15s,border-color .15s;}
.rv-fen .rv-mode svg{width:30px;height:30px;color:rgba(255,255,255,.88);transition:color .15s;}
.rv-fen .rv-mode:hover span{border-color:rgba(255,255,255,.4);transform:translateY(-2px);}
.rv-fen .rv-mode input:checked+span{border-color:${T.ambre};background:rgba(245,190,65,.14);color:${T.blanc};}
.rv-fen .rv-mode input:checked+span::after{background:${T.ambreVif};border-color:${T.ambreVif};box-shadow:inset 0 0 0 3px #2A3A5A;}
.rv-fen .rv-mode input:checked+span svg{color:${T.ambreVif};}
.rv-fen .rv-mode input:focus-visible+span{box-shadow:0 0 0 3px rgba(93,191,192,.35);}
.rv-fen .rv-bloc[data-erreur] .rv-mode span{border-color:rgba(230,57,70,.6);}
 
.rv-fen .rv-depot{position:relative;display:grid;gap:8px;justify-items:center;padding:28px 22px 24px;border-radius:14px;text-align:center;
  border:1.5px dashed rgba(245,190,65,.45);background:repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 6px,rgba(255,255,255,0) 6px 14px),rgba(255,255,255,.03);transition:border-color .15s,background .15s;}
.rv-fen .rv-depot[data-survol="1"]{border-color:${T.tealClair};background:rgba(93,191,192,.12);}
.rv-fen .rv-bloc[data-erreur] .rv-depot{border-color:${T.rouge};}
.rv-fen .rv-depot input{position:absolute;inset:0;opacity:0;cursor:pointer;}
.rv-fen .rv-depot svg{width:34px;height:34px;color:${T.ambre};}
.rv-fen .rv-depot b{font-size:14px;color:${T.blanc};}
.rv-fen .rv-depot__btn{display:inline-flex;align-items:center;gap:8px;margin-top:8px;padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.3);color:${T.blanc};font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;}
.rv-fen .rv-depot span{font-size:12px;color:${T.texte3};}
.rv-fen .rv-depot__aide{margin:6px 0 0;font-size:12px;line-height:1.5;color:${T.texte3};max-width:440px;}
.rv-fen .rv-fichier{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);}
.rv-fen .rv-fichier svg{width:26px;height:26px;color:${T.tealClair};}
.rv-fen .rv-fichier b{display:block;font-size:13px;color:${T.blanc};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rv-fen .rv-fichier span{display:block;font-size:11px;color:${T.texte3};margin-top:2px;}
.rv-fen .rv-fichier button{border:0;background:transparent;color:${T.tealClair};font-family:${POLICE_TEXTE};font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;padding:6px 0;}
.rv-fen .rv-fichier[data-etat="recu"]{border-color:rgba(93,191,192,.5);}
.rv-fen .rv-fichier[data-etat="recu"] svg{color:${T.ambreVif};}
.rv-fen .rv-jauge{grid-column:1/-1;height:4px;border-radius:2px;background:rgba(255,255,255,.12);overflow:hidden;}
.rv-fen .rv-jauge i{display:block;height:100%;width:var(--pct,0%);background:linear-gradient(90deg,${T.teal},${T.ambreVif});transition:width .25s;}
 
.rv-fen .rv-case{display:flex;align-items:flex-start;gap:14px;font-size:13px;line-height:1.55;color:${T.texte};cursor:pointer;}
.rv-fen .rv-case input{position:absolute;opacity:0;width:1px;height:1px;}
.rv-fen .rv-case i{flex:none;width:20px;height:20px;margin-top:1px;border-radius:6px;border:1.5px solid rgba(255,255,255,.35);background:rgba(255,255,255,.04);display:grid;place-items:center;transition:background .15s,border-color .15s;}
.rv-fen .rv-case i::after{content:'';width:11px;height:11px;background:${T.marine};opacity:0;transform:scale(.4);transition:opacity .15s,transform .15s;
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.2 4.2L19 7.5' fill='none' stroke='%23000' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/11px no-repeat;
  mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.2 4.2L19 7.5' fill='none' stroke='%23000' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/11px no-repeat;}
.rv-fen .rv-case input:checked+i{background:${T.ambreVif};border-color:${T.ambreVif};}
.rv-fen .rv-case input:checked+i::after{opacity:1;transform:none;}
.rv-fen .rv-case input:focus-visible+i{box-shadow:0 0 0 3px rgba(93,191,192,.35);}
.rv-fen .rv-case a{color:${T.ambreVif};font-weight:700;text-decoration:underline;text-underline-offset:2px;}
.rv-fen .rv-bloc[data-erreur] .rv-case i{border-color:${T.rouge};}
.rv-fen .rv-piege{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;}
 
.rv-fen .rv-pied{padding:10px 0 0;display:grid;gap:14px;}
.rv-fen .rv-envoyer{display:inline-flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:58px;padding:0 20px;border:0;border-radius:3px 16px 3px 16px;cursor:pointer;
  background:${T.ambreVif};color:${T.marine};font-family:${POLICE_TEXTE};font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;transition:transform .15s,box-shadow .15s,opacity .15s;}
.rv-fen .rv-envoyer:hover{transform:translateY(-1px);box-shadow:0 12px 30px -12px rgba(252,241,80,.7);}
.rv-fen .rv-envoyer:disabled{opacity:.55;cursor:default;transform:none;box-shadow:none;}
.rv-fen .rv-envoyer svg{width:16px;height:16px;}
.rv-fen .rv-general{margin:0;padding:12px 14px;border-radius:10px;background:rgba(230,57,70,.16);border:1px solid rgba(230,57,70,.5);font-size:12.5px;font-weight:700;color:#FFB3BA;}
.rv-fen .rv-general[hidden]{display:none;}
.rv-fen .rv-mention{margin:0;font-size:11px;font-style:italic;color:${T.texte3};text-align:center;}
@media (max-width:640px){
  body .rv-fen{padding:0;align-items:end;}
  .rv-fen .rv-fen__panneau{max-height:94vh;border-radius:20px 20px 0 0;}
  .rv-fen .rv-fen__tete{padding:24px 22px 20px;}
  .rv-fen .rv-fen__tete::after{left:16px;right:16px;}
  .rv-fen .rv-fen__corps{padding-left:22px;padding-right:22px;}
  .rv-fen .rv-form .rv-etape{grid-template-columns:36px minmax(0,1fr);gap:0 14px;padding:32px 0 40px;}
  .rv-fen .rv-etape__corps{gap:20px;}
  .rv-fen .rv-etape__n{font-size:28px;}
  .rv-fen .rv-etape__n::after{left:11px;top:36px;}
  .rv-fen .rv-2{grid-template-columns:1fr;}
  .rv-fen .rv-modes{grid-template-columns:repeat(3,1fr);gap:8px;}
  .rv-fen .rv-mode span{min-height:82px;padding:14px 4px 11px;font-size:10.5px;}
  .rv-fen .rv-jour{flex-basis:64px;}
}
@media (prefers-reduced-motion:reduce){.rv-fen .rv-fen__panneau,.rv-fen .rv-jour,.rv-fen .rv-mode span{transition:none;}}

 
.rv-fen .rv-ok{display:grid;gap:14px;text-align:center;padding:6px 0 10px;}
.rv-fen .rv-ok__tymal{width:120px;height:120px;margin:0 auto;object-fit:contain;filter:drop-shadow(0 12px 20px rgba(0,0,0,.5));animation:rvSaut .7s cubic-bezier(.34,1.56,.64,1) both;}
@keyframes rvSaut{from{opacity:0;transform:translateY(16px) scale(.8)}to{opacity:1;transform:none}}
.rv-fen .rv-ok__titre{margin:0;font-family:${POLICE_TITRE};font-style:italic;font-size:28px;line-height:1;text-transform:uppercase;color:${T.ambreVif};}
.rv-fen .rv-ok p{margin:0;font-size:13.5px;line-height:1.5;color:${T.texte2};}
.rv-fen .rv-ok p b{color:${T.blanc};}
.rv-fen .rv-ok__id{display:inline-grid;gap:3px;justify-self:center;padding:12px 22px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(245,190,65,.4);}
.rv-fen .rv-ok__id small{font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:${T.texte3};}
.rv-fen .rv-ok__id b{font-family:${POLICE_TITRE};font-style:italic;font-size:26px;letter-spacing:.04em;color:${T.blanc};}
.rv-fen .rv-ok__lots{list-style:none;margin:4px 0 0;padding:14px 16px;display:grid;gap:8px;border-radius:12px;background:rgba(255,255,255,.05);text-align:left;}
.rv-fen .rv-ok__lots li{display:flex;gap:10px;align-items:flex-start;font-size:13px;line-height:1.45;color:${T.texte};}
.rv-fen .rv-ok__lots svg{flex:none;width:18px;height:18px;color:${T.ambre};margin-top:1px;}
.rv-fen .rv-ok__lots b{color:${T.ambreVif};}
.rv-fen .rv-ok__cta{display:inline-flex;align-items:center;gap:8px;justify-self:center;margin-top:4px;padding:12px 18px;border-radius:999px;border:1px solid rgba(255,255,255,.22);color:${T.tealClair};
  font-size:11.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;}
.rv-fen .rv-ok__cta svg{width:14px;height:14px;}
@media (prefers-reduced-motion:reduce){.rv-fen .rv-ok__tymal{animation:none;}}
`;

  class RdrVenir extends HTMLElement {
    static get observedAttributes() { return ['payload', 'lang', 'simulateur', 'ordre']; }

    constructor() {
      super();
      this._initialise = false;
      this._p = {};
      this._etat = {
        lang: 'fr', simulateur: '',
        

        co2: { trajet: 0, ouverts: { explication: false, simulateur: false } },
        regions: { active: 0 },
        

        reglages: null, fichier: null, envoi: null, resultat: null, ouvert: false
      };
      this._attente = {};
      this._simMonte = false;
      




      this._chargeRecue = false;
    }

    connectedCallback() {
      if (this._initialise) return;
      this._initialise = true;
      if (!document.getElementById('rv-style')) {
        const s = document.createElement('style');
        s.id = 'rv-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }
      

      if (this._attente.lang) this._etat.lang = this._attente.lang;
      if (this._attente.simulateur !== undefined) this._etat.simulateur = this._attente.simulateur;
      if (this._attente.payload) { this._p = this._attente.payload; this._chargeRecue = true; }
      this._attente = {};
      if (this.hasAttribute('lang')) this._etat.lang = this.getAttribute('lang') === 'en' ? 'en' : 'fr';
      if (this.hasAttribute('simulateur')) this._etat.simulateur = this.getAttribute('simulateur') || '';
      if (this.hasAttribute('payload') && !Object.keys(this._p).length) this._lire(this.getAttribute('payload'));

      this._batir();
      

      this.addEventListener('click', (ev) => this._auClic(ev));
      this._rendreTout();
      this._suivreAncre();
      if (!this._chargeRecue) {
        this._minuteurSquelette = setTimeout(() => {
          if (this._chargeRecue) return;
          this._chargeRecue = true;
          this._rendreRegions();
          this._rendrePratique();
        }, 8000);
      }
    }

    disconnectedCallback() {
      this._retirerFlottant();
      this._retirerFenetre();
      if (this._minuteurSim) { clearTimeout(this._minuteurSim); this._minuteurSim = null; }
      if (this._minuteurSquelette) { clearTimeout(this._minuteurSquelette); this._minuteurSquelette = null; }
      if (this._ioReveles) { this._ioReveles.disconnect(); this._ioReveles = null; }
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres) return;
      if (nom === 'lang') {
        const l = apres === 'en' ? 'en' : 'fr';
        if (!this._initialise) { this._attente.lang = l; return; }
        this._etat.lang = l;
        

        this._rendreTout();
        return;
      }
      if (nom === 'simulateur') {
        if (!this._initialise) { this._attente.simulateur = apres || ''; return; }
        this._etat.simulateur = apres || '';
        return;
      }
      if (nom === 'ordre') {
        if (!this._initialise) return;
        this._retirerFenetre();
        this._batir();
        this._rendreTout();
        return;
      }
      if (!this._initialise) {
        try { this._attente.payload = JSON.parse(apres || 'null') || {}; } catch (e) {   }
        return;
      }
      this._lire(apres);
      this._rendreTout();
    }

    _lire(brut) {
      try { this._p = JSON.parse(brut || 'null') || {}; }
      catch (e) { console.error('[rdr-venir] payload illisible', e); this._p = {}; }
      this._chargeRecue = true;
    }

    


    _sq(classe) { return '<span class="rv-sq ' + classe + '" aria-hidden="true"></span>'; }
    _sqFiche(avecPhoto) {
      return '<section class="rv-fiche rv-fiche--sq' + (avecPhoto ? ' rv-fiche--photo' : '') + '" aria-hidden="true">' +
        '<div class="rv-fiche__corps"><div class="rv-sq-tete">' + this._sq('rv-sq--rond') + this._sq('rv-sq--titre') + '</div>' +
        this._sq('rv-sq--ligne') + this._sq('rv-sq--ligne') + this._sq('rv-sq--ligne') + this._sq('rv-sq--ligne') + '</div>' +
        (avecPhoto ? this._sq('rv-sq--photo') : '') + '</section>';
    }
    _squeletteRegions() {
      return '<div class="rv-sq-pilules">' + [0, 1, 2, 3, 4, 5].map(() => this._sq('rv-sq--pilule')).join('') + '</div>' +
        this._sq('rv-sq--mot') + '<div class="rv-cartes">' + this._sqFiche(true) + this._sqFiche(false) + '</div>';
    }
    _squelettePratique() {
      return '<div class="rv-sq-pilules">' + this._sq('rv-sq--pilule') + this._sq('rv-sq--pilule') + '</div>' +
        '<div class="rv-prat">' + '<article class="rv-carte rv-carte--sq" aria-hidden="true"><div class="rv-sq-tete">' + this._sq('rv-sq--rond') + this._sq('rv-sq--titre') + '</div>' +
        this._sq('rv-sq--ligne') + this._sq('rv-sq--ligne') + this._sq('rv-sq--ligne') + '</article></div>';
    }
    

    _apparait(html, classe) {
      return '<div class="' + (classe || 'rv-apparait') + '">' + html + '</div>';
    }

     
    _lang() { return this._etat.lang === 'en' ? 'en' : 'fr'; }
    _en() { return this._lang() === 'en'; }

    

    _cmsDe(objet, cle, defauts) {
      const o = objet || {};
      const en = this._en() ? o[cle + 'En'] : '';
      const v = en || o[cle];
      if (v !== undefined && v !== null && String(v).trim() !== '') return String(v);
      return defauts && defauts[cle] !== undefined ? defauts[cle] : '';
    }
    _page(cle) { return this._cmsDe(this._p.page, cle, DEFAUT_PAGE); }
    _cms(cle) { return this._cmsDe(this._etat.reglages, cle, DEFAUT_MOB); }

    


    _chaqueJour() {
      const m = String(this._cms('heureTirage') || '11:00').match(/^(\d{1,2})(?::(\d{2}))?$/);
      const h = m ? Number(m[1]) : 11, mn = m && m[2] && m[2] !== '00' ? ' ' + m[2] : '';
      return 'Chaque jour à ' + h + ' h' + mn;
    }

    _i18nLookup(brut) {
      const clef = String(brut == null ? '' : brut).trim();
      if (!clef) return undefined;
      const trouve = ER_EN[clef] !== undefined ? ER_EN[clef] : ER_EN_NORM[i18nNorm(clef)];
      if (trouve !== undefined) return trouve;
      return traduireDynamique(clef);
    }

    _t(chaine) {
      if (!this._en() || !chaine) return chaine;
      const en = this._i18nLookup(chaine);
      return en === undefined ? chaine : en;
    }

    

    _i18n(racine) {
      if (!this._en() || !racine) return;
      const marcheur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, null);
      const noeuds = [];
      while (marcheur.nextNode()) noeuds.push(marcheur.currentNode);
      for (const n of noeuds) {
        const brut = n.nodeValue;
        if (!brut || !/[A-Za-zÀ-ÿ0-9]/.test(brut)) continue;
        const en = this._i18nLookup(brut);
        if (en !== undefined && en !== brut.trim()) n.nodeValue = brut.replace(brut.trim(), () => en);
      }
      racine.querySelectorAll('[aria-label],[title],[placeholder],[alt]').forEach(el => {
        for (const a of ['aria-label', 'title', 'placeholder', 'alt']) {
          if (!el.hasAttribute(a)) continue;
          const v = el.getAttribute(a);
          const en = this._i18nLookup(v);
          if (en !== undefined && en !== v.trim()) el.setAttribute(a, en);
        }
      });
    }

    


    



    _ordre() {
      const brut = String(this.getAttribute('ordre') || '').split(',').map(x => x.trim()).filter(x => BLOCS.indexOf(x) >= 0);
      const vus = {};
      const ordre = brut.filter(x => (vus[x] ? false : (vus[x] = true)));
      BLOCS.forEach(id => { if (!vus[id]) ordre.push(id); });
      return ordre;
    }

    _batir() {
      const fond = (id) => id === 'regions' ? 'clair' : id === 'pratique' ? 'creme' : 'sombre';
      const teinte = { clair: T.blanc, creme: T.creme };
      const ordre = this._ordre();
      let html = '';
      let courant = '';
      ordre.forEach((id, i) => {
        const f = fond(id);
        if (f !== courant) {
          


          if (courant === 'sombre') html += this._vague(teinte[f] || T.blanc, 'bas') + '</div>';
          else if (courant) html += '</div>';
          html += '<div class="rv-' + f + '">';
          if (f === 'sombre' && courant) html += this._vague(teinte[courant] || T.blanc, 'haut');
          courant = f;
        }
        html += '<section class="rv-bloc rv-bloc--' + id + '" data-bloc="' + id + '" id="venir-' + id + '"' +
          (id === 'mobilite' ? ' hidden' : '') + '><div class="rv-int"></div></section>';
        if (i === ordre.length - 1) html += (courant === 'sombre' ? this._vague(T.creme, 'bas') : '') + '</div>';
      });
      this.innerHTML = '<div class="rv">' + html + '</div>';
    }

    


    _vague(couleur, bord) {
      return '<div class="rv-vague-cadre' + (bord === 'haut' ? ' rv-vague-cadre--haut' : '') + '">' +
        '<svg class="rv-vague' + (bord === 'haut' ? ' rv-vague--haut' : '') + '" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false">' +
        '<path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z" fill="' + couleur + '" fill-opacity=".34"/>' +
        '<path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z" fill="' + couleur + '"/></svg></div>';
    }

    _section(id) { const s = this.querySelector('[data-bloc="' + id + '"]'); return s ? s.querySelector('.rv-int') : null; }

    _rendreTout() {
      if (!this.querySelector('.rv')) return;
      this._rendreHero();
      this._rendreCo2(true);
      this._rendreMobilite();
      this._rendreRegions();
      this._rendrePratique();
      this._observerReveles();
    }

    

    _suivreAncre() {
      const h = String(location.hash || '').replace(/^#/, '').replace(/^venir-/, '');
      if (ANCRES[h]) setTimeout(() => this._aller(ANCRES[h]), 350);
    }

    _aller(id) {
      const s = this.querySelector('[data-bloc="' + id + '"]');
      if (!s || s.hidden) return;
      try { s.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { s.scrollIntoView(); }
    }

    _emettre(nom, detail) {
      try { this.dispatchEvent(new CustomEvent(nom, { bubbles: true, composed: true, detail: detail })); } catch (e) {   }
    }

     
    _rendreHero() {
      const s = this._section('hero');
      if (!s) return;
      const src = imageWix(this._page('heroImage'), 1800, 772);
      const alt = this._page('heroImageAlt');
      


      const signature = [this._lang(), src, alt, 'heroKick', 'heroTitre', 'heroTexte', 'heroBouton', 'titreCo2'].map(k => /^(hero|titre)/.test(k) ? this._page(k) : k).join('');
      if (s.firstChild && this._signatureHero === signature) return;
      this._signatureHero = signature;
      s.innerHTML =
        '<div class="rv-hero">' +
          '<div class="rv-hero__texte">' +
            '<p class="rv-kick">' + esc(this._page('heroKick')) + '</p>' +
            '<h1 class="rv-titre rv-hero__titre">' + esc(this._page('heroTitre')) + '</h1>' +
            '<p class="rv-hero__p">' + esc(this._page('heroTexte')) + '</p>' +
            '<div class="rv-hero__actions">' +
              '<button type="button" class="rv-btn rv-btn--invite" data-aller="co2">' + esc(this._page('titreCo2')) + ico('bas') + '</button>' +
              '<button type="button" class="rv-btn rv-btn--clair" data-aller="regions">' + esc(this._page('heroBouton')) + ico('fleche') + '</button>' +
            '</div>' +
          '</div>' +
          (src ? '<figure class="rv-hero__photo"><img src="' + esc(src) + '" alt="' + esc(alt) + '" width="1800" height="772" fetchpriority="high" decoding="async"></figure>' : '') +
        '</div>';
      this._i18n(s);
      const img = s.querySelector('.rv-hero__photo img');
      if (img) {
        const prete = () => { img.setAttribute('data-prete', '1'); img.parentNode.setAttribute('data-prete', '1'); };
        if (img.complete && img.naturalWidth) prete();
        else { img.addEventListener('load', prete, { once: true }); img.addEventListener('error', prete, { once: true }); }
      }
    }

    



    _observerReveles() {
      const cibles = [...this.querySelectorAll('.rv-co2, .rv-mob, .rv-reg__mot, .rv-fiche, .rv-pastilles, .rv-carte')].filter(e => !e.hasAttribute('data-revele'));
      if (!cibles.length) return;
      const doux = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (doux || typeof IntersectionObserver !== 'function') { cibles.forEach(e => e.setAttribute('data-revele', 'vu')); return; }
      if (!this._ioReveles) {
        this._ioReveles = new IntersectionObserver((entrees) => {
          entrees.forEach(en => {
            if (!en.isIntersecting) return;
            en.target.setAttribute('data-revele', 'vu');
            this._ioReveles.unobserve(en.target);
            if (en.target.classList.contains('rv-co2')) this._compterChiffre(en.target);
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      }
      cibles.forEach(e => {
        const freres = e.parentNode ? [...e.parentNode.children].filter(x => x.hasAttribute('data-revele') || x === e) : [e];
        e.style.setProperty('--rv-delai', Math.min(freres.indexOf(e), 6) * 0.08 + 's');
        e.setAttribute('data-revele', '');
        this._ioReveles.observe(e);
      });
    }

    


    _compterChiffre(carte) {
      const el = carte.querySelector('.rv-co2__chiffre');
      if (!el || el.getAttribute('data-compte') === '1') return;
      const m = String(this._co2('chiffre')).match(/^(\d+)(?:,(\d+))?\s*%$/);
      if (!m || typeof requestAnimationFrame !== 'function') return;
      el.setAttribute('data-compte', '1');
      const cible = Number(m[1] + (m[2] ? '.' + m[2] : ''));
      const dec = m[2] ? m[2].length : 0;
      const en = this._en();
      const ecrire = (v) => { el.textContent = en ? v.toFixed(dec) + '%' : v.toFixed(dec).replace('.', ',') + ' %'; };
      


      ecrire(cible);
      const largeur = el.getBoundingClientRect().width;
       
      if (largeur) { el.style.minWidth = (Math.ceil(largeur) + 8) + 'px'; el.style.textAlign = 'left'; }
      const t0 = performance.now(), duree = 1400;
      const pas = (t) => {
        const x = Math.min(1, (t - t0) / duree);
        const e = 1 - Math.pow(1 - x, 3);
        ecrire(cible * e);
        if (x < 1) requestAnimationFrame(pas); else ecrire(cible);
      };
      ecrire(0);
      requestAnimationFrame(pas);
    }

    


    _co2(clef) {
      const v = this._p.co2 && this._p.co2[clef];
      if (v === undefined || v === null || v === '') return DEFAUT_CO2[clef];
      return v;
    }
    _trajets() {
      const t = this._p.co2 && this._p.co2.trajets;
      if (!Array.isArray(t)) return DEFAUT_TRAJETS;
      const bons = t.filter(x => x && x.nom && Array.isArray(x.modes) && x.modes.length);
      return bons.length ? bons : DEFAUT_TRAJETS;
    }

    _rendreCo2(rebatir) {
      const s = this._section('co2');
      if (!s) return;
      if (rebatir || !s.firstChild) {
        this._simMonte = false;
        this._etat.co2.trajet = 0;
        const pli = (p) =>
          '<section class="rv-co2__pli">' +
            '<button type="button" class="rv-co2__bt" data-pli="' + esc(p.clef) + '" aria-expanded="false" aria-controls="rv-co2-vol-' + esc(p.clef) + '">' +
              '<span>' + esc(this._co2(p.titre)) + '</span>' + ico('chevron', 'rv-co2__chev') +
            '</button>' +
            '<div class="rv-co2__vol" id="rv-co2-vol-' + esc(p.clef) + '" hidden>' +
              (p.clef === 'explication'
                ? '<div class="rv-co2__trajets" role="tablist"></div><ul class="rv-co2__lignes"></ul>' +
                  '<p class="rv-co2__src">' + esc(this._co2('sourceComparatif')) + '</p>'
                : '<div class="rv-co2__sim"></div>') +
            '</div>' +
          '</section>';
        s.innerHTML =
          '<div class="rv-tete"><h2 class="rv-titre" id="rv-co2-titre">' + esc(this._page('titreCo2')) + '</h2></div>' +
          '<div class="rv-co2" aria-labelledby="rv-co2-titre">' +
            '<div class="rv-co2__hero">' +
              '<p class="rv-co2__chiffre">' + esc(this._co2('chiffre')) + '</p>' +
              '<div>' +
                 
                '<p class="rv-co2__texte">' + esc(this._co2('amorce')) + ' <span class="rv-co2__fort">' + esc(this._co2('fort')) + '</span> ' + esc(this._co2('suite')) + '</p>' +
                '<p class="rv-co2__srcHaut">' + esc(this._co2('source')) + '</p>' +
              '</div>' +
            '</div>' +
            '<div class="rv-co2__plis">' + PANNEAUX.map(pli).join('') + '</div>' +
          '</div>';
      }
      const onglets = s.querySelector('.rv-co2__trajets');
      if (onglets) onglets.innerHTML = this._trajets().map((tr, i) =>
        '<button type="button" class="rv-co2__tr" role="tab" data-trajet="' + i + '" aria-selected="' + (i === this._etat.co2.trajet ? 'true' : 'false') + '">' + esc(tr.nom) + '</button>').join('');
      this._majBarres(s);
      this._majPanneaux(s);
      this._i18n(s);
    }

    _majBarres(s) {
      const liste = s.querySelector('.rv-co2__lignes');
      const tous = this._trajets();
      const tr = tous[this._etat.co2.trajet] || tous[0];
      if (liste && tr) {
        const max = Math.max.apply(null, tr.modes.map(m => Number(m.valeur) || 0).concat([0.01]));
        liste.innerHTML = tr.modes.map((m, i) => {
          const v = Number(m.valeur) || 0;
          const part = Math.max((v / max) * 100, v === 0 ? 4 : 3);
          return '<li class="rv-co2__l"><span class="rv-co2__nom">' + esc(m.libelle) + '</span>' +
            '<span class="rv-co2__rail"><span class="rv-co2__jauge" data-cible="' + part.toFixed(1) + '" style="width:0;--rv-delai:' + (i * 0.05).toFixed(2) + 's;background:' + (TEINTE[m.famille] || T.ambre) + '"></span></span>' +
            '<span class="rv-co2__val">' + esc(String(v).replace('.', ',') + ' kg CO2e') + '</span></li>';
        }).join('');
      }
      s.querySelectorAll('.rv-co2__tr').forEach(b => b.setAttribute('aria-selected', Number(b.getAttribute('data-trajet')) === this._etat.co2.trajet ? 'true' : 'false'));
      this._pousserBarres(s);
    }

    


    _pousserBarres(s) {
      const jauges = s.querySelectorAll('.rv-co2__jauge');
      if (!jauges.length) return;
      const poser = () => jauges.forEach(j => { j.style.width = j.getAttribute('data-cible') + '%'; });
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(poser)); else poser();
    }

    _majPanneaux(s) {
      PANNEAUX.forEach(p => {
        const ouvert = this._etat.co2.ouverts[p.clef] === true;
        const bt = s.querySelector('.rv-co2__bt[data-pli="' + p.clef + '"]');
        const vol = s.querySelector('#rv-co2-vol-' + p.clef);
        if (bt) bt.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
        if (vol) vol.hidden = !ouvert;
      });
    }

    


    _monterSimulateur() {
      if (this._simMonte) return;
      const hote = this.querySelector('.rv-co2__sim');
      if (!hote) return;
      this._simMonte = true;
      const impose = String(this._etat.simulateur || '').trim();
      if (/^https:\/\//i.test(impose)) {
        hote.innerHTML = '<iframe src="' + esc(impose) + '" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" title="Simulateur d’empreinte carbone de l’ADEME"></iframe>';
        this._i18n(hote);
        return;
      }
      const sc = document.createElement('script');
      Object.keys(SIMULATEUR.attrs).forEach(k => sc.setAttribute(k, SIMULATEUR.attrs[k]));
      sc.src = SIMULATEUR.src;
      sc.addEventListener('error', () => this._simSecours(hote));
      hote.appendChild(sc);
      if (this._minuteurSim) clearTimeout(this._minuteurSim);
      this._minuteurSim = setTimeout(() => this._simSecours(hote), SIMULATEUR.delai);
    }

    _simSecours(hote) {
      if (!hote || !hote.isConnected || hote.querySelector('iframe')) return;
      hote.innerHTML = '<p class="rv-co2__secours">' + esc('Le simulateur de l’ADEME n’a pas pu se charger.') + ' ' +
        '<a href="' + esc(SIMULATEUR.secours) + '" target="_blank" rel="noopener">' + esc('L’ouvrir sur impactco2.fr') + '</a></p>';
      this._i18n(hote);
    }

    


    _ouvertAuPublic() {
      const r = this._etat.reglages;
      return !!(r && r.ouvert === true && Array.isArray(r.jours) && r.jours.length);
    }

    

    _periode() {
      const j = this._jours();
      if (!j.length) return '';
      const en = this._en();
      const f = (iso) => {
        const d = new Date(iso + 'T12:00:00Z');
        if (isNaN(d.getTime())) return iso;
        try {
          const s = new Intl.DateTimeFormat(en ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(d);
          return (!en && d.getUTCDate() === 1) ? s.replace(/^1 /, '1er ') : s;
        } catch (e) { return iso; }
      };
      return en ? 'From ' + f(j[0]) + ' to ' + f(j[j.length - 1]) : 'Du ' + f(j[0]) + ' au ' + f(j[j.length - 1]);
    }

    _rendreMobilite() {
      this._etat.reglages = this._p.mobilite || null;
      const bloc = this.querySelector('[data-bloc="mobilite"]');
      const s = this._section('mobilite');
      if (!bloc || !s) return;
      if (!this._ouvertAuPublic()) {
        bloc.hidden = true;
        s.innerHTML = '';
        this._retirerFlottant();
        this._retirerFenetre();
        return;
      }
      bloc.hidden = false;
      const lots = this._cms('lotsQuotidiens');
      const grand = this._cms('grandLot');
      s.innerHTML =
        '<section class="rv-mob" aria-labelledby="rv-mob-titre">' +
          '<span class="rv-mob__tag">' + esc(this._cms('etiquette')) + '</span>' +
          '<div class="rv-mob__grille">' +
            '<div>' +
              '<p class="rv-mob__kick">' + ico('velo') + esc(this._periode()) + '</p>' +
              '<h2 class="rv-mob__titre" id="rv-mob-titre">' + esc(this._cms('titre')) + '</h2>' +
              '<p class="rv-mob__accroche">' + esc(this._cms('accroche')) + '</p>' +
              '<p class="rv-mob__texte">' + esc(this._cms('texte')) + '</p>' +
              '<ul class="rv-mob__lots">' +
                '<li>' + ico('cadeau') + '<span><b>' + esc(this._chaqueJour()) + '</b> : <span>tentez de gagner</span> ' + esc(lots) + '.</span></li>' +
                '<li>' + ico('vague') + '<span><b>À la fin du challenge</b> : <span>un grand tirage au sort pour gagner</span> ' + esc(grand) + '.</span></li>' +
              '</ul>' +
              '<div class="rv-mob__actions">' +
                '<button type="button" class="rv-btn" data-ouvrir>' + ico('fleche') + esc(this._cms('bouton')) + '</button>' +
                '<p class="rv-mob__mention">' + esc(this._cms('mention')) + '</p>' +
              '</div>' +
            '</div>' +
            '<img class="rv-mob__tymal" src="' + esc(imageWix(this._cms('visuelEncart'), 380, 380, 'fit') || TYMAL_VELO) + '" alt="" aria-hidden="true" loading="lazy">' +
          '</div>' +
        '</section>';
      this._i18n(s);
      

      if (!this._etat.ouvert) this._retirerFenetre();
      this._poserFlottant();
      this._observerEncart();
      if (/challenge-mobilite/.test(String(location.hash || ''))) setTimeout(() => this._ouvrirFenetre(), 300);
    }

    


    _poserFlottant() {
      this._retirerFlottant();
      if (!this._ouvertAuPublic() || this._aParticipe() || this._flottantFerme()) return;
      const visuel = imageWix(this._cms('visuelPastille'), 240, 240, 'fit') || TYMAL_VELO;
      const f = document.createElement('div');
      f.className = 'rv-flot';
      f.setAttribute('data-cache', '0');
      f.innerHTML =
        '<div class="rv-flot__bulle">' +
          '<button type="button" class="rv-flot__x" aria-label="Ne plus afficher">' + ico('croix') + '</button>' +
          esc(this._cms('bulle')) +
          '<small>' + esc(this._cms('bulleBouton')) + '</small>' +
        '</div>' +
        '<button type="button" class="rv-flot__btn" aria-label="Ouvrir le formulaire du Challenge Mobilité">' +
          '<img src="' + esc(visuel) + '" alt="" aria-hidden="true" loading="lazy" width="120" height="120">' +
        '</button>';
      this._i18n(f);
      f.querySelector('.rv-flot__btn').addEventListener('click', () => this._ouvrirFenetre());
      f.querySelector('.rv-flot__bulle').addEventListener('click', (e) => { if (!e.target.closest('.rv-flot__x')) this._ouvrirFenetre(); });
      f.querySelector('.rv-flot__x').addEventListener('click', () => {
        try { sessionStorage.setItem(CLE_FERME, '1'); } catch (e) {   }
        this._retirerFlottant();
      });
      document.body.appendChild(f);
      this._flottant = f;
    }

     
    _regions() {
      const r = Array.isArray(this._p.regions) ? this._p.regions : [];
      return r.slice().sort((a, b) => (Number(a && a.ordre) || 0) - (Number(b && b.ordre) || 0));
    }

    _rendreRegions() {
      const s = this._section('regions');
      if (!s) return;
      const regions = this._regions();
      const tete = '<div class="rv-tete rv-tete--centre"><h2 class="rv-titre" id="rv-reg-titre">' + esc(this._page('titreRegions')) + '</h2>' +
        '<p class="rv-sous">' + esc(this._page('sousTitreRegions')) + '</p></div>';
      if (!this._chargeRecue) {
        s.innerHTML = tete + this._squeletteRegions();
        this._i18n(s);
        return;
      }
      const fondu = s.querySelector('.rv-sq') ? true : false;
      if (!regions.length) {
        s.innerHTML = tete + '<p class="rv-reg__vide">Contenu à venir</p>';
        this._i18n(s);
        return;
      }
      if (this._etat.regions.active >= regions.length) this._etat.regions.active = 0;
      const r = regions[this._etat.regions.active];
      s.innerHTML = tete +
        '<div class="rv-reg__onglets" role="tablist" aria-labelledby="rv-reg-titre">' +
          regions.map((x, i) => '<button type="button" class="rv-reg__r" role="tab" data-i="' + i + '" aria-selected="' + (i === this._etat.regions.active ? 'true' : 'false') + '">' + esc(x && x.nom) + '</button>').join('') +
        '</div>' +
        (fondu ? this._apparait('<div class="rv-reg__res">' + this._rendreRegion(r) + '</div>') : '<div class="rv-reg__res">' + this._rendreRegion(r) + '</div>');
      this._i18n(s);
      this._observerReveles();
    }

    _rendreRegion(region) {
      const brut = String((region && region.ordreModes) || '').split(',').map(x => x.trim()).filter(Boolean);
      const ordre = brut.length ? brut : ORDRE_DEFAUT;
      const parMode = {};
      ((region && region.fiches) || []).forEach(f => { if (f && f.modeKey) parMode[f.modeKey] = f; });
      let cartes = '';
      ordre.forEach(mode => { if (parMode[mode]) cartes += this._rendreFiche(parMode[mode]); });
      

      const oubliees = Object.keys(parMode).filter(m => ordre.indexOf(m) === -1);
      if (oubliees.length) {
        try { console.warn('[rdr-venir] région « ' + ((region && region.nom) || '?') + ' » : ' + oubliees.length + ' fiche(s) hors de l’ordre déclaré (' + oubliees.join(', ') + '), affichées en fin de liste. Compléter « ordreModes » au CMS.'); } catch (e) {   }
        oubliees.forEach(m => { cartes += this._rendreFiche(parMode[m]); });
      }
      cartes += this._rendreIndividuelle();
      const mot = (region && region.callout) ? region.callout : '';
      return (mot ? '<p class="rv-reg__mot">' + ico('note') + '<span>' + esc(mot) + '</span></p>' : '') +
        '<div class="rv-cartes">' + cartes + '</div>';
    }

    _rendreLignes(texte, classeListe) {
      let corps = '';
      let liste = false;
      lireLignes(texte).forEach(it => {
        if (it.type === 'titre') {
          if (liste) { corps += '</ul>'; liste = false; }
          corps += '<p class="rv-st">' + esc(it.texte) + '</p>';
          return;
        }
        if (!liste) { corps += '<ul class="' + (classeListe || 'rv-liste') + '">'; liste = true; }
        corps += '<li>' + esc(it.texte) + this._rendreLien(it) + '</li>';
      });
      if (liste) corps += '</ul>';
      return corps;
    }

    _rendreFiche(fiche) {
      const corps = this._rendreLignes(fiche.lignes);
      

      const tag = couperLien(fiche.tagline);
      const a = lireLignes(fiche.tipTexte)[0];
      const tip = (a && a.texte) ? '<p class="rv-astuce">' + ico('astuce') + '<span>' + esc(a.texte) + this._rendreLien(a) + '</span></p>' : '';
      const prix = fiche.afficheTableauPrix === true ? this._rendreTarifs() : '';
      let photo = '';
      if (fiche.afficheCarte === true) {
        const src = imageWix(fiche.image, 960, 720);
        photo = '<figure class="rv-fiche__photo">' + (src
          ? '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async" width="960" height="720">'
          : '<span class="rv-fiche__attente">Carte ou visuel à ajouter</span>') + '</figure>';
      }
      return '<section class="rv-fiche' + (photo ? ' rv-fiche--photo' : '') + '">' +
        '<div class="rv-fiche__corps">' +
          '<h3 class="rv-fiche__t"><span class="rv-pico">' + ico(fiche.modeKey) + '</span><span>' + esc(fiche.titre) + '</span></h3>' +
          (tag.texte ? '<p class="rv-fiche__tag">' + esc(tag.texte) + this._rendreLien(tag) + '</p>' : '') +
          corps + prix + tip +
        '</div>' + photo +
      '</section>';
    }

    _rendreLien(it) {
      const href = adresseSure(it.lien);
      if (!href) return '';
      const libelle = it.libelle || 'En savoir plus';
      

      const sep = this._en() ? ': ' : ' : ';
      const titre = it.libelle ? this._t(libelle) : this._t(libelle) + sep + this._t(it.texte);
      const externe = /^https?:/i.test(href);
      return ' <a class="rv-a" href="' + esc(href) + '" aria-label="' + esc(titre) + '"' + (externe ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + esc(libelle) + '</a>';
    }

    _rendreTarifs() {
      const tarifs = Array.isArray(this._p.tarifs) ? this._p.tarifs : [];
      if (!tarifs.length) return '';
      const prix = (v) => (v == null || v === '') ? '' : String(v).replace('.', ',') + ' €';
      return '<div class="rv-cadre"><table class="rv-prix"><thead><tr>' +
        '<th scope="col">' + esc(this._page('tarifsTrajet')) + '</th><th scope="col" class="rv-num">' + esc(this._page('tarifsPlein')) + '</th><th scope="col" class="rv-num">' + esc(this._page('tarifsReduit')) + '</th></tr></thead><tbody>' +
        tarifs.map(t => '<tr><td>' + esc(t && t.ville) + '</td><td class="rv-num">' + esc(prix(t && t.prixPlein)) + '</td><td class="rv-num">' + esc(prix(t && t.prixReduit)) + '</td></tr>').join('') +
        '</tbody></table></div>';
    }

    

    _rendreIndividuelle() {
      const aCible = !!this._section('pratique');
      return '<section class="rv-fiche rv-fiche--indiv">' +
        '<div class="rv-fiche__corps">' +
          '<h3 class="rv-fiche__t"><span class="rv-pico">' + ico('individuelle') + '</span><span>' + esc(this._page('voitureTitre')) + '</span></h3>' +
          '<p class="rv-fiche__tag">' + esc(this._page('voitureTexte')) + '</p>' +
          (aCible ? '<div class="rv-fiche__actions"><button type="button" class="rv-btn rv-btn--ligne" data-aller="pratique">' + esc(this._page('voitureBouton')) + ico('bas') + '</button></div>' : '') +
        '</div></section>';
    }

    


    _rendrePratique() {
      const s = this._section('pratique');
      if (!s) return;
      const lignes = (Array.isArray(this._p.pratique) ? this._p.pratique : [])
        .filter(l => l && l.actif !== false && (l.titre || l.titreEn))
        .sort((a, b) => (Number(a.ordre) || 0) - (Number(b.ordre) || 0));
      const tete = '<div class="rv-tete rv-tete--centre"><p class="rv-kick">' + esc(this._page('kickPratique')) + '</p>' +
        '<h2 class="rv-titre">' + esc(this._page('titrePratique')) + '</h2></div>';
      if (!this._chargeRecue) {
        this.querySelector('[data-bloc="pratique"]').hidden = false;
        s.innerHTML = tete + this._squelettePratique();
        this._i18n(s);
        return;
      }
      const fondu = s.querySelector('.rv-sq') ? true : false;
      const texteDe = (l, k) => this._cmsDe(l, k, null);
      const pastilles = lignes.filter(l => !texteDe(l, 'texte') && !texteDe(l, 'lignes') && !texteDe(l, 'note'));
      const cartes = lignes.filter(l => pastilles.indexOf(l) === -1);
      let html = tete;
      if (pastilles.length) {
        html += '<div class="rv-pastilles">' + pastilles.map(l =>
          '<span class="rv-pastille">' + ico(TRACES[l.picto] ? l.picto : 'info') + '<span>' + esc(texteDe(l, 'titre')) + '</span></span>').join('') + '</div>';
      }
      if (cartes.length) {
        html += '<div class="rv-prat' + (cartes.length > 1 ? ' rv-prat--2' : '') + '">' + cartes.map(l => {
          const note = couperLien(texteDe(l, 'note'));
          const src = imageWix(l.image, 1200, 675);
          return '<article class="rv-carte">' +
            '<h3 class="rv-carte__t"><span class="rv-pico">' + ico(TRACES[l.picto] ? l.picto : 'info') + '</span><span>' + esc(texteDe(l, 'titre')) + '</span></h3>' +
            (src ? '<figure class="rv-carte__photo"><img src="' + esc(src) + '" alt="" loading="lazy" decoding="async" width="1200" height="675"></figure>' : '') +
            (texteDe(l, 'texte') ? '<p class="rv-carte__p">' + esc(texteDe(l, 'texte')) + '</p>' : '') +
            this._rendreLignes(texteDe(l, 'lignes')) +
            (note.texte ? '<p class="rv-carte__note">' + ico('astuce') + '<span>' + esc(note.texte) + this._rendreLien(note) + '</span></p>' : '') +
          '</article>';
        }).join('') + '</div>';
      }
      if (!pastilles.length && !cartes.length) { s.innerHTML = ''; this.querySelector('[data-bloc="pratique"]').hidden = true; return; }
      this.querySelector('[data-bloc="pratique"]').hidden = false;
      s.innerHTML = fondu ? tete + this._apparait(html.slice(tete.length)) : html;
      this._i18n(s);
      this._observerReveles();
    }

     
    _auClic(ev) {
      const cible = ev && ev.target && ev.target.closest ? ev.target.closest('[data-aller], .rv-co2__bt, .rv-co2__tr, .rv-reg__r, [data-ouvrir]') : null;
      if (!cible || !this.contains(cible)) return;
      if (cible.hasAttribute('data-aller')) { this._aller(cible.getAttribute('data-aller')); return; }
      if (cible.hasAttribute('data-ouvrir')) { this._ouvrirFenetre(); return; }
      if (cible.classList.contains('rv-co2__bt')) {
        const clef = cible.getAttribute('data-pli');
        this._etat.co2.ouverts[clef] = !this._etat.co2.ouverts[clef];
        this._majPanneaux(this._section('co2'));
        if (clef === 'simulateur' && this._etat.co2.ouverts[clef]) this._monterSimulateur();
        if (clef === 'explication' && this._etat.co2.ouverts[clef]) this._majBarres(this._section('co2'));
        return;
      }
      if (cible.classList.contains('rv-co2__tr')) {
        this._etat.co2.trajet = Number(cible.getAttribute('data-trajet')) || 0;
        const s = this._section('co2');
        this._majBarres(s);
        this._i18n(s);
        return;
      }
      if (cible.classList.contains('rv-reg__r')) {
        this._etat.regions.active = Number(cible.getAttribute('data-i')) || 0;
        this._rendreRegions();
        const meme = this.querySelector('.rv-reg__r[data-i="' + this._etat.regions.active + '"]');
        if (meme) meme.focus();
        this._emettre('venir-region', { index: this._etat.regions.active, nom: (this._regions()[this._etat.regions.active] || {}).nom || '' });
      }
    }

    

    _retirerFlottant() {
      if (this._flottant) { this._flottant.remove(); this._flottant = null; }
      if (this._io) { this._io.disconnect(); this._io = null; }
    }

    

    _observerEncart() {
      if (this._io) this._io.disconnect();
      if (typeof IntersectionObserver !== 'function') return;
      const encart = this.querySelector('.rv-mob');
      if (!encart) return;
      this._io = new IntersectionObserver((entrees) => {
        const visible = entrees.some(e => e.isIntersecting && e.intersectionRatio >= 0.25);
        if (this._flottant) this._flottant.setAttribute('data-cache', visible || this._etat.ouvert ? '1' : '0');
      }, { threshold: [0, 0.25] });
      this._io.observe(encart);
    }

    _aParticipe() { try { return !!localStorage.getItem(CLE_PARTICIPE); } catch (e) { return false; } }
    _flottantFerme() { try { return sessionStorage.getItem(CLE_FERME) === '1'; } catch (e) { return false; } }

     
    _ouvrirFenetre() {
      if (!this._ouvertAuPublic()) return;
      if (!this._fenetre) this._construireFenetre();
      this._etat.ouvert = true;
      if (this._flottant) this._flottant.setAttribute('data-cache', '1');
      this._fenetre.setAttribute('data-open', 'true');
      this._verrou = this._verrouiller();
      const premier = this._fenetre.querySelector('input:not([type="hidden"]):not(.rv-piege input), .rv-fen__x');
      setTimeout(() => { try { (premier || this._fenetre).focus(); } catch (e) {   } }, 60);
    }

    _fermerFenetre() {
      if (!this._fenetre) return;
      this._etat.ouvert = false;
      this._fenetre.setAttribute('data-open', 'false');
      if (this._verrou) { this._verrou(); this._verrou = null; }
      if (this._flottant && !this._aParticipe()) this._flottant.setAttribute('data-cache', '0');
      if (this._etat.resultat) this._poserFlottant();
    }

    _retirerFenetre() {
      if (this._verrou) { this._verrou(); this._verrou = null; }
      if (this._fenetre) { this._fenetre.remove(); this._fenetre = null; }
      if (this._surTouche) { document.removeEventListener('keydown', this._surTouche); this._surTouche = null; }
    }

     
    _verrouiller() {
      const b = document.body;
      const y = window.scrollY || 0;
      const avant = { position: b.style.position, top: b.style.top, left: b.style.left, right: b.style.right, width: b.style.width, overflow: b.style.overflow };
      Object.assign(b.style, { position: 'fixed', top: -y + 'px', left: '0', right: '0', width: '100%', overflow: 'hidden' });
      return () => { Object.assign(b.style, avant); try { window.scrollTo(0, y); } catch (e) {   } };
    }

    _construireFenetre() {
      const f = document.createElement('div');
      f.className = 'rv-fen';
      f.setAttribute('role', 'dialog');
      f.setAttribute('aria-modal', 'true');
      f.setAttribute('aria-labelledby', 'rv-fen-titre');
      f.setAttribute('data-open', 'false');
      f.innerHTML =
        '<div class="rv-fen__fond"></div>' +
        '<div class="rv-fen__panneau" tabindex="-1">' +
          '<div class="rv-fen__tete">' +
            '<div><p class="rv-fen__kick">' + ico('velo') + 'Challenge Mobilité</p><h3 class="rv-fen__titre" id="rv-fen-titre">Votre <em>billet</em> de participation</h3>' +
            '<p class="rv-fen__sous">Trois étapes, deux minutes. Vous recevez votre identifiant tout de suite.</p></div>' +
            '<button type="button" class="rv-fen__x" aria-label="Fermer">' + ico('croix') + '</button>' +
            '<span class="rv-fen__encoche rv-fen__encoche--g" aria-hidden="true"></span><span class="rv-fen__encoche rv-fen__encoche--d" aria-hidden="true"></span>' +
          '</div>' +
          '<div class="rv-fen__corps"></div>' +
        '</div>';
      this._i18n(f);
      document.body.appendChild(f);
      this._fenetre = f;
      f.querySelector('.rv-fen__x').addEventListener('click', () => this._fermerFenetre());
      f.querySelector('.rv-fen__fond').addEventListener('click', () => { if (!this._etat.envoi) this._fermerFenetre(); });
      this._surTouche = (e) => { if (e.key === 'Escape' && this._etat.ouvert && !this._etat.envoi) this._fermerFenetre(); };
      document.addEventListener('keydown', this._surTouche);
      this._rendreFormulaire();
    }

    _jours() {
      const r = this._etat.reglages || {};
      return Array.isArray(r.jours) ? r.jours : [];
    }

    _libelleJour(jour) {
      const d = new Date(jour + 'T12:00:00Z');
      if (isNaN(d.getTime())) return jour;
      try {
        return new Intl.DateTimeFormat(this._en() ? 'en-GB' : 'fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(d);
      } catch (e) { return jour; }
    }

    _rendreFormulaire() {
      const corps = this._fenetre.querySelector('.rv-fen__corps');
      const r = this._etat.reglages || {};
      const modes = Array.isArray(r.modes) && r.modes.length ? r.modes : [
        { cle: 'train', libelle: 'Train' }, { cle: 'bus', libelle: 'Bus' }, { cle: 'covoiturage', libelle: 'Covoiturage' },
        { cle: 'velo', libelle: 'Vélo' }, { cle: 'pied', libelle: 'À pied' }, { cle: 'autre', libelle: 'Autre' }];
      const lienR = r.lienReglement ? esc(r.lienReglement) : '';
      const lienC = r.lienConfidentialite ? esc(r.lienConfidentialite) : '';
      const lien = (href, texte) => href ? '<a href="' + href + '" target="_blank" rel="noopener">' + texte + '</a>' : '<a href="#" data-lien-absent>' + texte + '</a>';
      const max = Number(r.tailleMaxMo) > 0 ? Math.min(10, Number(r.tailleMaxMo)) : 10;
      const en = this._en();
      

      const tuileJour = (j) => {
        const d = new Date(j + 'T12:00:00Z');
        const we = d.getUTCDay() === 0 || d.getUTCDay() === 6;
        let sem = '', mois = '';
        try {
          sem = new Intl.DateTimeFormat(en ? 'en-GB' : 'fr-FR', { weekday: 'short', timeZone: 'UTC' }).format(d).replace('.', '');
          mois = new Intl.DateTimeFormat(en ? 'en-GB' : 'fr-FR', { month: 'short', timeZone: 'UTC' }).format(d).replace('.', '');
        } catch (e) { sem = ''; mois = ''; }
        return '<label class="rv-jour"' + (we ? ' data-we="1"' : '') + '><input type="radio" name="jourChoix" value="' + esc(j) + '" aria-label="' + esc(this._libelleJour(j)) + '">' +
          '<small>' + esc(sem) + '</small><b>' + d.getUTCDate() + '</b><i>' + esc(mois) + '</i></label>';
      };
      corps.innerHTML =
        '<form class="rv-form" novalidate autocomplete="on">' +
          '<p class="rv-general" hidden data-general></p>' +
          '<fieldset class="rv-etape" data-etape="1">' +
            '<span class="rv-etape__n" aria-hidden="true">01</span>' +
            '<legend class="rv-etape__t">Vos informations<small>Pour vous appeler si vous gagnez.</small></legend>' +
            '<div class="rv-etape__corps">' +
              '<div class="rv-2">' +
                '<div class="rv-champ" data-champ="prenom"><label for="rv-prenom">Prénom</label><input id="rv-prenom" name="prenom" type="text" autocomplete="given-name" maxlength="80" required><span class="rv-err"></span></div>' +
                '<div class="rv-champ" data-champ="nom"><label for="rv-nom">Nom</label><input id="rv-nom" name="nom" type="text" autocomplete="family-name" maxlength="80" required><span class="rv-err"></span></div>' +
              '</div>' +
              '<div class="rv-2">' +
                '<div class="rv-champ" data-champ="dateNaissance"><label for="rv-naiss-j">Date de naissance</label>' +
                  '<div class="rv-date" data-date>' +
                    '<input id="rv-naiss-j" name="naissJour" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="JJ" autocomplete="bday-day"><i>/</i>' +
                    '<input name="naissMois" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="MM" autocomplete="bday-month"><i>/</i>' +
                    '<input name="naissAn" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="AAAA" autocomplete="bday-year">' +
                    '<input type="hidden" name="dateNaissance">' +
                  '</div><span class="rv-err"></span></div>' +
                '<div class="rv-champ" data-champ="telephone"><label for="rv-tel">Numéro de téléphone</label><input id="rv-tel" name="telephone" type="tel" autocomplete="tel" inputmode="tel" maxlength="30" placeholder="06 12 34 56 78" required><span class="rv-err"></span></div>' +
              '</div>' +
              '<div class="rv-champ" data-champ="email"><label for="rv-email">Adresse e-mail</label><input id="rv-email" name="email" type="email" autocomplete="email" inputmode="email" maxlength="120" placeholder="prenom@exemple.fr" required><span class="rv-err"></span></div>' +
            '</div>' +
          '</fieldset>' +
          '<fieldset class="rv-etape" data-etape="2">' +
            '<span class="rv-etape__n" aria-hidden="true">02</span>' +
            '<legend class="rv-etape__t">Votre venue</legend>' +
            '<div class="rv-etape__corps">' +
              '<div class="rv-bloc" data-champ="jour">' +
                '<div class="rv-jours-tete"><p class="rv-lbl">Quel jour venez-vous au village ?</p>' +
                  '<div class="rv-jours-nav"><button type="button" data-rail="-1" aria-label="Jours précédents">' + ico('gauche') + '</button><button type="button" data-rail="1" aria-label="Jours suivants">' + ico('fleche') + '</button></div></div>' +
                '<div class="rv-jours" role="radiogroup" aria-label="Quel jour venez-vous au village ?">' + this._jours().map(tuileJour).join('') + '</div>' +
                '<input type="hidden" name="jour">' +
                '<p class="rv-jours-choix" data-jour-choix>Choisissez un jour</p><span class="rv-err"></span></div>' +
              '<div class="rv-bloc" data-champ="mode"><p class="rv-lbl" style="margin:0 0 8px">Comment venez-vous au village ?</p>' +
                '<div class="rv-modes" role="radiogroup">' +
                  modes.map(m => '<label class="rv-mode"><input type="radio" name="mode" value="' + esc(m.cle) + '"><span>' + ico(m.cle) + esc(m.libelle) + '</span></label>').join('') +
                '</div><span class="rv-err"></span></div>' +
              '<div class="rv-champ" data-champ="precision" hidden data-precision><label for="rv-precision">Précisez votre mode de transport</label><input id="rv-precision" name="precision" type="text" maxlength="200"><span class="rv-err"></span></div>' +
            '</div>' +
          '</fieldset>' +
          '<fieldset class="rv-etape" data-etape="3">' +
            '<span class="rv-etape__n" aria-hidden="true">03</span>' +
            '<legend class="rv-etape__t">Votre justificatif de transport</legend>' +
            '<div class="rv-etape__corps">' +
              '<div class="rv-bloc" data-champ="justificatif">' +
                '<div class="rv-depot" data-depot>' +
                  '<input type="file" name="justificatif" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" aria-label="Choisir un fichier">' +
                  ico('fichier') + '<b>Déposez ici votre justificatif de mobilité.</b>' +
                  '<span class="rv-depot__btn">' + ico('fleche') + 'Choisir un fichier</span><span>ou glissez-le ici</span>' +
                  '<p class="rv-depot__aide">Exemples de justificatifs acceptés : billet de train ou de bus, titre de transport, photo de votre vélo, justificatif de covoiturage.</p>' +
                  '<p class="rv-depot__aide">' + esc(this._t('PDF, JPG ou PNG, 10 Mo au plus.').replace('10', String(max))) + '</p>' +
                '</div>' +
                '<div class="rv-fichier" hidden data-fichier></div>' +
                '<span class="rv-err"></span>' +
              '</div>' +
              '<div class="rv-bloc" data-champ="consentReglement"><label class="rv-case"><input type="checkbox" name="consentReglement"><i></i><span>J\'ai lu et j\'accepte le ' + lien(lienR, 'règlement du Challenge Mobilité') + '.</span></label><span class="rv-err"></span></div>' +
              '<div class="rv-bloc" data-champ="consentDonnees"><label class="rv-case"><input type="checkbox" name="consentDonnees"><i></i><span>J\'accepte que mes données soient traitées pour ma participation, selon la ' + lien(lienC, 'politique de confidentialité') + '.</span></label><span class="rv-err"></span></div>' +
            '</div>' +
          '</fieldset>' +
          '<div class="rv-piege" aria-hidden="true"><label>Site web <input type="text" name="siteweb" tabindex="-1" autocomplete="off"></label></div>' +
          '<div class="rv-pied">' +
            '<button type="submit" class="rv-envoyer" data-envoyer>' + ico('check') + '<span>Je participe au challenge</span></button>' +
            '<p class="rv-mention">Participation soumise au règlement du jeu-concours.</p>' +
          '</div>' +
        '</form>';
      this._i18n(corps);
      const form = corps.querySelector('form');
      form.addEventListener('submit', (e) => { e.preventDefault(); this._envoyer(form); });

      

      const rail = form.querySelector('.rv-jours');
      const flèches = form.querySelectorAll('[data-rail]');
      const majFleches = () => {
        const fin = rail.scrollWidth - rail.clientWidth;
        flèches.forEach(b => { const d = Number(b.getAttribute('data-rail')); b.disabled = d < 0 ? rail.scrollLeft <= 2 : rail.scrollLeft >= fin - 2; });
      };
      flèches.forEach(b => b.addEventListener('click', () => { rail.scrollBy({ left: Number(b.getAttribute('data-rail')) * (rail.clientWidth - 60), behavior: 'smooth' }); }));
      rail.addEventListener('scroll', majFleches, { passive: true });
      rail.addEventListener('wheel', (e) => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); rail.scrollLeft += e.deltaY; } }, { passive: false });
      setTimeout(majFleches, 50);

       
      const cacheJour = form.querySelector('input[name="jour"]');
      const phraseJour = form.querySelector('[data-jour-choix]');
      form.querySelectorAll('input[name="jourChoix"]').forEach(rd => rd.addEventListener('change', () => {
        cacheJour.value = rd.value;
        form.querySelectorAll('.rv-jour').forEach(t => t.removeAttribute('data-choisi'));
        rd.closest('.rv-jour').setAttribute('data-choisi', '1');
        try { rd.closest('.rv-jour').scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); } catch (e) {   }
        phraseJour.innerHTML = (en ? 'You are coming on ' : 'Vous venez le ') + '<b>' + esc(this._libelleJour(rd.value)) + '</b>';
        this._effacerErreur(form, 'jour');
        this._etapes(form);
      }));

      

      const dj = form.querySelector('input[name="naissJour"]'), dm = form.querySelector('input[name="naissMois"]'), da = form.querySelector('input[name="naissAn"]');
      const cacheNaiss = form.querySelector('input[name="dateNaissance"]');
      const recomposer = () => {
        const j = dj.value.replace(/\D/g, ''), m = dm.value.replace(/\D/g, ''), a = da.value.replace(/\D/g, '');
        cacheNaiss.value = (j.length >= 1 && m.length >= 1 && a.length === 4) ? a + '-' + m.padStart(2, '0') + '-' + j.padStart(2, '0') : '';
        this._effacerErreur(form, 'dateNaissance');
        this._etapes(form);
      };
      [[dj, dm, 2], [dm, da, 2], [da, null, 4]].forEach(([ch, suivant, n]) => {
        ch.addEventListener('input', () => { ch.value = ch.value.replace(/\D/g, '').slice(0, n); recomposer(); if (suivant && ch.value.length === n) suivant.focus(); });
        ch.addEventListener('keydown', (e) => { if (e.key === 'Backspace' && !ch.value && ch !== dj) (ch === dm ? dj : dm).focus(); });
      });

      form.querySelectorAll('input[name="mode"]').forEach(rd => rd.addEventListener('change', () => {
        const prec = form.querySelector('[data-precision]');
        if (prec) prec.hidden = form.querySelector('input[name="mode"]:checked')?.value !== 'autre';
        this._effacerErreur(form, 'mode');
        this._etapes(form);
      }));
      form.querySelectorAll('.rv-champ input').forEach(ch => ch.addEventListener('input', () => {
        const c = ch.closest('[data-champ]');
        if (c) this._effacerErreur(form, c.getAttribute('data-champ'));
        this._etapes(form);
      }));
      form.querySelectorAll('input[type="checkbox"]').forEach(ch => ch.addEventListener('change', () => {
        const c = ch.closest('[data-champ]');
        if (c) this._effacerErreur(form, c.getAttribute('data-champ'));
        this._etapes(form);
      }));
      const depot = form.querySelector('[data-depot]');
      const entree = depot.querySelector('input[type="file"]');
      entree.addEventListener('change', () => { if (entree.files && entree.files[0]) this._prendreFichier(form, entree.files[0]); });
      ['dragenter', 'dragover'].forEach(ev => depot.addEventListener(ev, (e) => { e.preventDefault(); depot.setAttribute('data-survol', '1'); }));
      ['dragleave', 'drop'].forEach(ev => depot.addEventListener(ev, (e) => { e.preventDefault(); depot.removeAttribute('data-survol'); }));
      depot.addEventListener('drop', (e) => { const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) this._prendreFichier(form, f); });
      form.querySelectorAll('[data-lien-absent]').forEach(a => a.addEventListener('click', (e) => e.preventDefault()));
      this._t0 = Date.now();
    }

    


    _etapes(form) {
      const d = this._lireFormulaire(form);
      const ok = {
        prenom: d.prenom.length >= 2, nom: d.nom.length >= 2,
        dateNaissance: /^\d{4}-\d{2}-\d{2}$/.test(d.dateNaissance) && Number(d.dateNaissance.slice(0, 4)) >= 1900 && Number(d.dateNaissance.slice(0, 4)) <= new Date().getFullYear() && !isNaN(new Date(d.dateNaissance + 'T12:00:00Z').getTime()),
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email),
        telephone: /^\d{9,15}$/.test(d.telephone.replace(/[^\d+]/g, '').replace(/^00/, '+').replace(/^\+33/, '0').replace(/^\+/, '')),
        precision: d.precision.length > 0
      };
      Object.keys(ok).forEach(k => {
        const c = form.querySelector('.rv-champ[data-champ="' + k + '"]');
        if (c) { if (ok[k]) c.setAttribute('data-ok', '1'); else c.removeAttribute('data-ok'); }
      });
      const e1 = ok.prenom && ok.nom && ok.dateNaissance && ok.email && ok.telephone;
      const e2 = !!d.jour && !!d.mode;
      const e3 = !!d.fileId && d.consentReglement && d.consentDonnees;
      [[1, e1], [2, e2], [3, e3]].forEach(([n, v]) => {
        const et = form.querySelector('.rv-etape[data-etape="' + n + '"]');
        if (et) et.setAttribute('data-complete', v ? '1' : '0');
      });
    }

    _effacerErreur(form, champ) {
      const c = form.querySelector('[data-champ="' + champ + '"]');
      if (c) { c.removeAttribute('data-erreur'); const e = c.querySelector('.rv-err'); if (e) e.textContent = ''; }
    }

    _poserErreur(form, champ, message) {
      const c = form.querySelector('[data-champ="' + champ + '"]');
      if (!c) return;
      c.setAttribute('data-erreur', '1');
      const e = c.querySelector('.rv-err');
      if (e) e.textContent = this._t(message);
    }

     
    _controlerFichier(file) {
      if (!file) return 'Fichier vide ou illisible.';
      const ext = (/\.([a-z0-9]+)$/i.exec(file.name || '') || [])[1];
      if (!ext || !/^(pdf|jpe?g|png)$/i.test(ext)) return 'Format non accepté : PDF, JPG ou PNG.';
      const r = this._etat.reglages || {};
      const max = (Number(r.tailleMaxMo) > 0 ? Math.min(10, Number(r.tailleMaxMo)) : 10) * 1024 * 1024;
      if (file.size > max) return 'Fichier trop lourd (10 Mo au plus).';
      if (file.size < 1024) return 'Fichier vide ou illisible.';
      return null;
    }

    async _prendreFichier(form, file) {
      const err = this._controlerFichier(file);
      if (err) { this._poserErreur(form, 'justificatif', err); return; }
      this._effacerErreur(form, 'justificatif');
      if (this._envoiCtrl) this._envoiCtrl.abort();
      const ctrl = new AbortController();
      this._envoiCtrl = ctrl;
      this._etat.fichier = { nom: file.name, taille: file.size, id: null, pct: 0, texte: 'Préparation…' };
      this._rendreFichier(form);
      const retenir = (e) => { e.preventDefault(); e.returnValue = ''; };
      window.addEventListener('beforeunload', retenir);
      try {
        const adresse = await this._postJson(ENDPOINT_URL, { fileName: file.name, size: file.size, piege: this._piege(form) }, ctrl.signal);
        if (!adresse || !adresse.uploadUrl || !adresse.uploadToken) throw new Error(this._codeVersMessage(adresse && adresse.code));
        const mo = (n) => (n / 1024 / 1024).toFixed(n < 10 * 1024 * 1024 ? 1 : 0);
        const envoye = await this._envoyerTus(adresse, file, ctrl.signal, (octets, reprise) => {
          const pct = Math.min(100, Math.round((octets / file.size) * 100));
          this._etat.fichier = Object.assign(this._etat.fichier || {}, {
            pct, texte: reprise ? 'Connexion perdue, reprise…' : pct >= 100 ? 'Vérification…' : ('Envoi…' + ' ' + pct + ' % (' + mo(octets) + ' / ' + mo(file.size) + ' Mo)')
          });
          this._rendreFichier(form);
        });
        const fileId = envoye && envoye.file && envoye.file.id;
        if (!fileId) throw new Error('Envoi impossible pour le moment, réessayez.');
        this._etat.fichier = { nom: file.name, taille: file.size, id: fileId, pct: 100, texte: 'Fichier reçu' };
        this._rendreFichier(form);
        this._etapes(form);
      } catch (e) {
        if (ctrl.signal.aborted) return;
        this._etat.fichier = null;
        this._rendreFichier(form);
        this._poserErreur(form, 'justificatif', (e && e.message) || 'Envoi impossible pour le moment, réessayez.');
      } finally {
        window.removeEventListener('beforeunload', retenir);
        if (this._envoiCtrl === ctrl) this._envoiCtrl = null;
      }
    }

    _rendreFichier(form) {
      const depot = form.querySelector('[data-depot]');
      const carte = form.querySelector('[data-fichier]');
      const f = this._etat.fichier;
      if (!f) { depot.hidden = false; carte.hidden = true; carte.innerHTML = ''; const inp = depot.querySelector('input'); if (inp) inp.value = ''; return; }
      depot.hidden = true;
      carte.hidden = false;
      carte.setAttribute('data-etat', f.id ? 'recu' : 'envoi');
      carte.innerHTML = ico('fichier') +
        '<div><b>' + esc(f.nom) + '</b><span>' + esc(this._t(f.texte)) + '</span></div>' +
        '<button type="button" data-changer>Changer de fichier</button>' +
        (f.id ? '' : '<div class="rv-jauge"><i style="--pct:' + f.pct + '%"></i></div>');
      this._i18n(carte);
      carte.querySelector('[data-changer]').addEventListener('click', () => {
        if (this._envoiCtrl) this._envoiCtrl.abort();
        this._etat.fichier = null;
        this._rendreFichier(form);
        this._etapes(form);
        const inp = depot.querySelector('input');
        if (inp) inp.click();
      });
    }

    _piege(form) { const p = form.querySelector('input[name="siteweb"]'); return p && p.value ? p.value : ''; }

     
    _lireFormulaire(form) {
      const v = (n) => { const el = form.querySelector('[name="' + n + '"]'); return el ? el.value : ''; };
      const mode = form.querySelector('input[name="mode"]:checked');
      return {
        prenom: v('prenom').trim(), nom: v('nom').trim(), dateNaissance: v('dateNaissance'), email: v('email').trim(),
        telephone: v('telephone').trim(), jour: v('jour'), mode: mode ? mode.value : '', precision: v('precision').trim(),
        consentReglement: !!form.querySelector('input[name="consentReglement"]:checked'),
        consentDonnees: !!form.querySelector('input[name="consentDonnees"]:checked'),
        fileId: this._etat.fichier && this._etat.fichier.id ? this._etat.fichier.id : '',
        lang: this._lang(), piege: this._piege(form), t0: this._t0 || 0
      };
    }

    _controler(form, d) {
      const erreurs = {};
      if (d.prenom.length < 2) erreurs.prenom = 'Ce champ est requis.';
      if (d.nom.length < 2) erreurs.nom = 'Ce champ est requis.';
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d.dateNaissance)) erreurs.dateNaissance = 'Ce champ est requis.';
      else { const an = Number(d.dateNaissance.slice(0, 4)); if (an < 1900 || an > new Date().getFullYear()) erreurs.dateNaissance = 'Date invalide.'; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) erreurs.email = 'Adresse e-mail invalide.';
      if (!/^\d{9,15}$/.test(d.telephone.replace(/[^\d+]/g, '').replace(/^00/, '+').replace(/^\+33/, '0').replace(/^\+/, ''))) erreurs.telephone = 'Numéro de téléphone invalide.';
      if (!d.jour) erreurs.jour = 'Ce champ est requis.';
      if (!d.mode) erreurs.mode = 'Ce champ est requis.';
      if (d.precision.length > 200) erreurs.precision = 'Trop long.';
      if (!d.fileId) erreurs.justificatif = this._etat.fichier ? 'Vérification…' : 'Ajoutez votre justificatif.';
      if (!d.consentReglement) erreurs.consentReglement = 'Ce champ est requis.';
      if (!d.consentDonnees) erreurs.consentDonnees = 'Ce champ est requis.';
      Object.keys(erreurs).forEach(k => this._poserErreur(form, k, erreurs[k]));
      return Object.keys(erreurs).length === 0;
    }

    _codeVersMessage(code) {
      return ({
        doublon: 'Vous participez déjà pour ce jour. Une seule participation par personne et par jour.',
        ferme: 'Le challenge est fermé pour le moment.',
        trop: 'Trop de tentatives, réessayez dans quelques minutes.',
        champs: 'Vérifiez les champs signalés.',
        format: 'Format non accepté : PDF, JPG ou PNG.',
        poids: 'Fichier trop lourd (10 Mo au plus).',
        vide: 'Fichier vide ou illisible.'
      })[code] || 'Envoi impossible pour le moment, réessayez.';
    }

    async _envoyer(form) {
      if (this._etat.envoi) return;
      const general = form.querySelector('[data-general]');
      general.hidden = true;
      ['prenom', 'nom', 'dateNaissance', 'email', 'telephone', 'jour', 'mode', 'precision', 'justificatif', 'consentReglement', 'consentDonnees'].forEach(k => this._effacerErreur(form, k));
      const d = this._lireFormulaire(form);
      if (!this._controler(form, d)) {
        general.textContent = this._t('Vérifiez les champs signalés.');
        general.hidden = false;
        const premier = form.querySelector('[data-erreur]');
        if (premier) premier.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }
      const bouton = form.querySelector('[data-envoyer]');
      this._etat.envoi = true;
      bouton.disabled = true;
      bouton.querySelector('span').textContent = this._t('Envoi en cours…');
      try {
        const res = await this._postJson(ENDPOINT_PARTICIPER, d, null);
        if (!res || !res.ok) {
          if (res && res.erreurs) Object.keys(res.erreurs).forEach(k => this._poserErreur(form, k, 'Ce champ est requis.'));
          general.textContent = this._t(this._codeVersMessage(res && res.code));
          general.hidden = false;
          return;
        }
        this._etat.resultat = res;
        try { localStorage.setItem(CLE_PARTICIPE, res.identifiant || '1'); } catch (e) {   }
        this._retirerFlottant();
        this._rendreConfirmation(res);
      } catch (e) {
        general.textContent = this._t((e && e.message) || 'Envoi impossible pour le moment, réessayez.');
        general.hidden = false;
      } finally {
        this._etat.envoi = false;
        bouton.disabled = false;
        bouton.querySelector('span').textContent = this._t('Je participe au challenge');
      }
    }

    _rendreConfirmation(res) {
      const corps = this._fenetre.querySelector('.rv-fen__corps');
      corps.innerHTML =
        '<div class="rv-ok">' +
          '<img class="rv-ok__tymal" src="' + TYMAL_CLIN + '" alt="" aria-hidden="true">' +
          '<h4 class="rv-ok__titre">Participation enregistrée !</h4>' +
          '<p>Merci pour votre participation au Challenge Mobilité de la Route du Rhum – Destination Guadeloupe !</p>' +
          '<p>Votre participation pour la journée du <b>' + esc(res.jourLabel || this._libelleJour(res.jour)) + '</b> est bien enregistrée.</p>' +
          '<div class="rv-ok__id"><small>Votre identifiant de participation</small><b>' + esc(res.identifiant || '') + '</b></div>' +
          '<p>Vous participez automatiquement au tirage au sort quotidien correspondant à votre venue, et vous êtes aussi enregistré pour le grand tirage au sort final, à l’issue des 13 jours du village.</p>' +
          '<ul class="rv-ok__lots">' +
            '<li>' + ico('cadeau') + '<span><b>Chaque jour</b> : ' + esc(res.lotsQuotidiens || this._cms('lotsQuotidiens')) + '</span></li>' +
            '<li>' + ico('vague') + '<span><b>Grand tirage final</b> : ' + esc(res.grandLot || this._cms('grandLot')) + '</span></li>' +
          '</ul>' +
          '<a class="rv-ok__cta" href="' + (this._en() ? '/en/programme' : '/programme') + '">Découvrir le programme du village' + ico('fleche') + '</a>' +
        '</div>';
      this._i18n(corps);
      corps.scrollTop = 0;
    }

     
    async _postJson(url, body, signal) {
      let res;
      try {
        res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal });
      } catch (e) {
        if (signal && signal.aborted) throw new Error('annulé');
        throw new Error('Envoi impossible pour le moment, réessayez.');
      }
      let data = null;
      try { data = await res.json(); } catch (e) { data = null; }
      if (!res.ok) {
        const code = (data && data.code) || '';
        const err = new Error(this._codeVersMessage(code));
        err.code = code;
        err.erreurs = data && data.erreurs;
        if (url === ENDPOINT_PARTICIPER) return Object.assign({ ok: false, code }, data || {});
        throw err;
      }
      return data;
    }

    

    async _envoyerTus(adresse, file, signal, onProgress) {
      const { uploadUrl, uploadToken } = adresse;
      const nom = adresse.fileName || file.name;
      const mime = adresse.mime || file.type || 'application/octet-stream';
      const b64 = (s) => btoa(unescape(encodeURIComponent(s)));
      const tus = { 'Tus-Resumable': '1.0.0' };
      const creation = await this._xhr('POST', uploadUrl, Object.assign({}, tus, {
        'Upload-Length': String(file.size),
        'Upload-Metadata': 'filename ' + b64(nom) + ',contentType ' + b64(mime) + ',token ' + b64(uploadToken)
      }), null, signal);
      const lieu = creation.status === 201 ? creation.header('Location') : '';
      if (!lieu) throw new Error('Envoi impossible pour le moment, réessayez.');
      const session = new URL(lieu, uploadUrl).href;
      let position = 0, echecs = 0;
      while (position < file.size) {
        const fin = Math.min(file.size, position + MORCEAU);
        try {
          const depart = position;
          const r = await this._xhr('PATCH', session, Object.assign({}, tus, { 'Upload-Offset': String(depart), 'Content-Type': 'application/offset+octet-stream' }),
            file.slice(depart, fin), signal, (charge) => onProgress(depart + charge, false), 120000);
          const suivante = Number(r.header('Upload-Offset'));
          if (r.status < 200 || r.status >= 300 || !(suivante > depart)) throw new Error('morceau ' + r.status);
          position = suivante; echecs = 0;
          onProgress(position, false);
        } catch (e) {
          if (e && e.message === 'annulé') throw e;
          if (echecs >= REPRISES.length) throw new Error('Envoi impossible pour le moment, réessayez.');
          onProgress(position, true);
          await new Promise((ok) => setTimeout(ok, REPRISES[echecs]));
          echecs++;
          if (signal && signal.aborted) throw new Error('annulé');
          try {
            const h = await this._xhr('HEAD', session, tus, null, signal);
            const connue = Number(h.header('Upload-Offset'));
            if (h.status >= 200 && h.status < 300 && connue >= 0) position = connue;
          } catch (e2) { if (e2 && e2.message === 'annulé') throw e2; }
        }
      }
      const final = await this._xhr('PUT', uploadUrl + '/' + uploadToken + '?filename=' + encodeURIComponent(nom), {}, null, signal);
      let parsed = null;
      try { parsed = JSON.parse(final.text); } catch (e) { parsed = null; }
      if (final.status < 200 || final.status >= 300) throw new Error('Envoi impossible pour le moment, réessayez.');
      return parsed;
    }

    _xhr(method, url, headers, body, signal, onUpload, timeout) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.timeout = timeout || 60000;
        Object.keys(headers || {}).forEach((k) => xhr.setRequestHeader(k, headers[k]));
        const onAbort = () => { try { xhr.abort(); } catch (e) {   } reject(new Error('annulé')); };
        if (signal) { if (signal.aborted) return onAbort(); signal.addEventListener('abort', onAbort, { once: true }); }
        const fin = () => { if (signal) signal.removeEventListener('abort', onAbort); };
        if (onUpload && xhr.upload) xhr.upload.addEventListener('progress', (e) => { if (e.lengthComputable) onUpload(e.loaded); });
        xhr.ontimeout = () => { fin(); reject(new Error('délai dépassé')); };
        xhr.onerror = () => { fin(); reject(new Error('connexion interrompue')); };
        xhr.onload = () => { fin(); resolve({ status: xhr.status, text: xhr.responseText, header: (n) => xhr.getResponseHeader(n) }); };
        try { xhr.send(body); } catch (e) { fin(); reject(new Error('connexion interrompue')); }
      });
    }
  }

  customElements.define('rdr-venir', RdrVenir);
})();
})();
