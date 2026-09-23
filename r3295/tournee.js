/* rdr-elements tournee | source route-du-rhum c33f60e | tournee-map.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["tournee"]="c33f60e";performance.mark("rdr-elements:tournee")}catch(e){}
;(function(){
(function () {
'use strict';
if (typeof window === 'undefined' || !window.customElements) return;
if (customElements.get('tournee-map')) return;

 
const MAPLIBRE_JS = 'https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js';
const MAPLIBRE_CSS = 'https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css';
const STYLE_URL = 'https://tiles.openfreemap.org/styles/liberty';
const GEOCODE_URL = 'https://data.geopf.fr/geocodage/search';
const FRANCE_CENTER = [2.4, 46.6];
const FRANCE_ZOOM = 5;
const FRANCE_BOUNDS = [[-5.2, 41.3], [9.6, 51.1]];
 
 
const CADRAGE_ZOOM_MAX = 12;
 
 
const CADRAGE_ECART_MIN_KM = 25;
const MAX_ZOOM = 13;
 
 
 
 
 
const FOCUS_ZOOM = 12;
 
 
const HAUTEUR_MIN = 520;
 
 
 
 
const RETOUR_DEFAUT = '/';
const RAYON_DEFAUT = 40;
 
 
 
const TRACE_ECART_MAX_JOURS = 21;
 
 
const TRACE_SAUT_MIN_KM = 150;
 
 
 
 
 
 
const TRACE_PAR_DEFAUT = { mascotte: true, trophee: true };
const TRACE_COURBURE = 0.05;

 
 
 
 
const DEMO = false;
const TRACE_ACTIF = true;

 
 
 
 
 
const PARCOURS_REPLI = [
    { cle: 'mascotte', etapes: [], parDefaut: true },
    { cle: 'trophee', etapes: [], parDefaut: false }
];

 
 
 
 
 
 
 
 
 
 
 
 
 
const DICT = {
    fr: {
        parcours_mascotte: 'La tournée de Tymal',
        parcours_trophee: 'La tournée du Trophée',
        titre_mascotte: 'Vais-je croiser Tymal&nbsp;?',
        titre_trophee: 'Où voir le trophée&nbsp;?',
        eyebrow_mascotte: 'Tournée Route du Rhum 2026',
        eyebrow_trophee: 'Exposition du trophée 2026',
        liste_mascotte: 'Les étapes',
        liste_trophee: 'Les expositions',
         
         
        tab_mascotte: 'Croiser Tymal',
        tab_trophee: 'Voir le trophée',
        sujet_mascotte: 'Tymal',
        sujet_trophee: 'Le trophée',
        sous_titre: 'Indique où et quand tu es disponible.',

        retour: 'Le site',
        retour_titre: 'Retour au site',
        choisir_parcours: 'Choisir un parcours',
        langue: 'Changer de langue',
        trace: 'Parcours',

        geoloc: '📍 Utiliser ma position',
        ou_ville: 'Ou une ville',
        ville_ph: 'Saint-Malo, Rennes…',
        du: 'Du',
        au: 'Au',
        rayon: 'Rayon',
        chercher: 'Voir si je peux le croiser',
        res_position: 'Indique ta position (bouton 📍) ou une ville.',
        res_dates: 'Choisis tes dates de disponibilité.',
        res_oui: '✅ Oui&nbsp;!',
        res_est_a: ' est à ',
        res_non: '😕 Pas de croisement sur ta période.',
        res_proche: ' Le plus proche&nbsp;: ',

        f_tous: 'Toutes',
        f_a_venir: 'À venir',
        f_en_cours: 'En cours',
        f_passe: 'Passées',
        rechercher_ph: 'Rechercher une ville…',
        st_a_venir: 'À venir',
        st_en_cours: 'En cours',
        st_passe: 'Passé',
        st_annulee: 'Annulé',
        st_reportee: 'Reporté',
        vide: 'Aucune étape à afficher pour le moment.',
        charge_echec: 'Les étapes ne sont pas arrivées. Rechargez la page.',
        creneaux_a: 'Créneaux à ',
        tout_voir: '✕ Tout voir',
        filtre_actif: 'Filtre actif · ',
        tout_afficher: 'Tout afficher',

        dates_a_preciser: 'Dates bientôt communiquées',
        a_confirmer: 'à confirmer',
        lieu_a_confirmer: 'Lieu à confirmer',
        retour_images: 'Retour en images',
        annule_note: 'Cet événement a malheureusement été annulé.',
        passe_note: '✓ Cet événement est déjà passé',
        passe_merci: ', merci à tous ceux qui sont venus\u00a0! Revivez-le en images.',
        programme: 'Au programme',
        point_relais: 'Point relais',
        en_savoir_plus: 'En savoir plus',
        agenda: 'Agenda',
        emmener: "M'y emmener",
        ag_titre: 'Ajouter à mon agenda',
        ag_google: 'Google Agenda',
        ag_outlook: 'Outlook',
        ag_autre: 'Apple Calendrier, Thunderbird, autre',
        ag_note: "Les deux premiers ouvrent l'agenda directement. Le troisième télécharge un fichier .ics à ouvrir ensuite.",

        cur_ici_mascotte: 'Je suis ici\u00a0!',
        cur_ici_trophee: 'Le trophée est ici\u00a0!',
        cur_route: 'En route\u00a0!',
        cur_bientot: 'Bientôt\u00a0!',

        village_futur: 'Futur village',
        village_titre: 'Village de la Route du Rhum',
        village_dates: 'du 20 octobre au 1ᵉʳ novembre 2026',
        village_agenda: 'Ajouter au calendrier',
        it_titre: 'Ouvrir l’itinéraire',
        it_google: 'Google Maps',
        it_waze: 'Waze',
        it_plans: 'Plans (Apple)',
        it_note: 'Les trois reçoivent le point exact du lieu, et non son adresse écrite : aucun risque qu’une application le cherche et tombe à côté.',
        ag_creneaux: 'Horaires :',
        ag_voir: 'Voir sur la carte :',
        village_desc: 'Le grand village du départ ouvrira ses quais à Saint-Malo dans les jours précédant le grand départ. Animations, stands, rencontres skippers et bien plus à venir.',

        alt_mascotte: 'Tymal',
        alt_trophee: 'Trophée de la Route du Rhum',
        date_le: 'le ',
        date_du: 'du ',
        date_au: ' au '
    },
    en: {
        parcours_mascotte: "Tymal's tour",
        parcours_trophee: "The Trophy's tour",
        titre_mascotte: 'Will I run into Tymal?',
        titre_trophee: 'Where can I see the trophy?',
        eyebrow_mascotte: 'Route du Rhum tour 2026',
        eyebrow_trophee: 'Trophy exhibition 2026',
        liste_mascotte: 'The stops',
        liste_trophee: 'The exhibitions',
        tab_mascotte: 'Meet Tymal',
        tab_trophee: 'See the trophy',
        sujet_mascotte: 'Tymal',
        sujet_trophee: 'The trophy',
        sous_titre: 'Tell us where and when you are free.',

        retour: 'Website',
        retour_titre: 'Back to the website',
        choisir_parcours: 'Choose a tour',
        langue: 'Change language',
        trace: 'Route',

        geoloc: '📍 Use my location',
        ou_ville: 'Or a town',
        ville_ph: 'Saint-Malo, Rennes…',
        du: 'From',
        au: 'To',
        rayon: 'Radius',
        chercher: 'See if our paths cross',
        res_position: 'Give your location (📍 button) or a town.',
        res_dates: 'Choose the dates you are available.',
        res_oui: '✅ Yes!',
        res_est_a: ' will be in ',
        res_non: '😕 No match over those dates.',
        res_proche: ' Closest one: ',

        f_tous: 'All',
        f_a_venir: 'Upcoming',
        f_en_cours: 'On now',
        f_passe: 'Past',
        rechercher_ph: 'Search for a town…',
        st_a_venir: 'Upcoming',
        st_en_cours: 'On now',
        st_passe: 'Past',
        st_annulee: 'Cancelled',
        st_reportee: 'Postponed',
        vide: 'No stop to show yet.',
        charge_echec: 'The stops did not load. Please reload the page.',
        creneaux_a: 'Time slots in ',
        tout_voir: '✕ Show all',
        filtre_actif: 'Filter on · ',
        tout_afficher: 'Show all',

        dates_a_preciser: 'Dates to be announced',
        a_confirmer: 'to be confirmed',
        lieu_a_confirmer: 'Venue to be confirmed',
        retour_images: 'In pictures',
        annule_note: 'This event has unfortunately been cancelled.',
        passe_note: '✓ This event has already taken place',
        passe_merci: ' — thank you to everyone who came! Relive it in pictures.',
        programme: "What's on",
        point_relais: 'Partner shop',
        en_savoir_plus: 'Find out more',
        agenda: 'Calendar',
        emmener: 'Take me there',
        ag_titre: 'Add to my calendar',
        ag_google: 'Google Calendar',
        ag_outlook: 'Outlook',
        ag_autre: 'Apple Calendar, Thunderbird, other',
        ag_note: 'The first two open your calendar straight away. The third downloads an .ics file for you to open.',

        cur_ici_mascotte: "I'm here!",
        cur_ici_trophee: 'The trophy is here!',
        cur_route: 'On the way!',
        cur_bientot: 'Coming soon!',

        village_futur: 'Future village',
        village_titre: 'Route du Rhum Village',
        village_dates: 'from 20 October to 1 November 2026',
        village_agenda: 'Add to calendar',
        it_titre: 'Open directions',
        it_google: 'Google Maps',
        it_waze: 'Waze',
        it_plans: 'Apple Maps',
        it_note: 'All three receive the exact point, not the written address: no chance of an app looking it up and landing somewhere else.',
        ag_creneaux: 'Times:',
        ag_voir: 'See on the map:',
        village_desc: 'The great start village will open its quays in Saint-Malo in the days before the start. Entertainment, stands, meetings with skippers and much more to come.',

        alt_mascotte: 'Tymal',
        alt_trophee: 'Route du Rhum Trophy',
        date_le: 'on ',
        date_du: 'from ',
        date_au: ' to '
    }
};
const LANGUES = ['fr', 'en'];
const LANGUE_DEFAUT = 'fr';
 
 
const LOCALES = { fr: 'fr-FR', en: 'en-GB' };

 
 
 
 
const TEAL = '#5DBFC0';         
const TEAL_RGB = '93,191,192';
const NAVY = '#16355D';         
const JAUNE = '#FCF150';        
const ORANGE = '#F19F39';       
 
 
 
 
const AMBRE = '#F5BE41';        
const AMBRE_RGB = '245,190,65';
const AMBRE_SOMBRE = '#C98D1E';  
const ACCENTS = {
    mascotte: { c: TEAL, rgb: TEAL_RGB, sombre: '#3a9aa0', clair: '#7BD3D0', haut: JAUNE },
    trophee: { c: AMBRE, rgb: AMBRE_RGB, sombre: AMBRE_SOMBRE, clair: '#FFD87A', haut: '#FFE9A8' }
};
 
 
 
const ROUGE_ALERTE = '#E63946';
const COULEURS = { a_venir: TEAL, en_cours: JAUNE, passe: '#9AA7BA', annulee: ROUGE_ALERTE, reportee: ORANGE };
 
 
 
 
 
const COULEURS_PARCOURS = {
    mascotte: COULEURS,
    trophee: { a_venir: AMBRE, en_cours: JAUNE, passe: '#9AA7BA', annulee: ROUGE_ALERTE, reportee: ORANGE }
};
 
 
 
const RANG_LISTE = { en_cours: 0, a_venir: 1, reportee: 2, annulee: 3, passe: 4 };
const COULEURS_TXT = { a_venir: NAVY, en_cours: NAVY, passe: NAVY, annulee: '#fff', reportee: NAVY };
const STATUTS_MANUELS = ['annulee', 'reportee'];

 
const CARTE = { mer: '#15557f', merClair: '#3d7da6', terre: '#f1ead9', terre2: '#ece3d0', vert: '#cad7bd', route: '#e3d4b8', routeMaj: '#fdf6e7', label: '#16355d', merLabel: '#bcdcec', frontiere: '#c6b99f' };

 
 
 
 
 
 
 
 
 
 
 
 
const AGENDA_EMOJI = { mascotte: '⛵', trophee: '🏆', village: '🎪' };
const AGENDA_HORAIRE = '🕒';
const AGENDA_LIEU = '📍';
const AGENDA_LIEN = '🔗';

 
 
 
 
 
const VILLAGE = { actif: true, lng: -2.0257, lat: 48.6493, lieu: 'Saint-Malo', debut: '2026-10-20', fin: '2026-11-01' };

const TYMAL = {
    marche: 'https://static.wixstatic.com/shapes/7bb303_343a0ef9efd048bca6fdc22cffca14ed.svg',
    marcheLunettes: 'https://static.wixstatic.com/shapes/7bb303_25dae780ac224a2c90d15503f3097ae8.svg',
    marcheLunettes2: 'https://static.wixstatic.com/shapes/7bb303_9df0657ec19843d986bde541f1fc8fd7.svg',
    tri: 'https://static.wixstatic.com/shapes/7bb303_bc660dde37864a118df3a7f1ee947e5c.svg',
    velo: 'https://static.wixstatic.com/shapes/7bb303_1805678ec9994470a1b9c049e7de1ca4.svg',
    profil: 'https://static.wixstatic.com/shapes/7bb303_6fd636ee159147318eb3a60aa52daf87.svg',
    vol: 'https://static.wixstatic.com/shapes/7bb303_6af3efd96c624815b2c19c7935ff36c5.svg',
    ailesCroiseesLunettes: 'https://static.wixstatic.com/shapes/7bb303_ed0e9c1143a044a09444d3a0c88c709a.svg',
    assis: 'https://static.wixstatic.com/shapes/7bb303_02d58828422d4a1a89bc86d81e61e7f6.svg',
    ailesCroiseesLunettes2: 'https://static.wixstatic.com/shapes/7bb303_1c2ea46f80a34562a90df43aa1b95810.svg',
    clinOeil: 'https://static.wixstatic.com/shapes/7bb303_18789740b75547869e150140259392d6.svg',
    drapeauStMalo: 'https://static.wixstatic.com/shapes/7bb303_b8922093d6774b6c8654b1ff29cd8404.svg',
    drapeauBreton: 'https://static.wixstatic.com/shapes/7bb303_bd3398bde8394a8681b4cf98ac8b440d.svg',
    drapeauBreton2: 'https://static.wixstatic.com/shapes/7bb303_84854dee258c43788ea9a6a9cb852427.svg',
    drapeauGuadeloupe: 'https://static.wixstatic.com/shapes/7bb303_5be03146f3f24677afa6e68463b2c061.svg',
    heureux: 'https://static.wixstatic.com/shapes/7bb303_d99ba7b1de9d420aa49cd55bfa7bc716.svg',
    emu: 'https://static.wixstatic.com/shapes/7bb303_a631b739b84a4e4d95edb861a04a05cd.svg',
    face: 'https://static.wixstatic.com/shapes/7bb303_83ec85561f9a491a821ec98cefcf2dac.svg',
    drapeauRDR: 'https://static.wixstatic.com/shapes/7bb303_f988a7dcb4b84d7da9025f998a5cb6a2.svg',
    banderole: 'https://static.wixstatic.com/shapes/7bb303_b5fd53d83d734fb495151da65ae33e62.svg',
    pouce: 'https://static.wixstatic.com/shapes/7bb303_98093ad4f3ad4d25a610d305e966268d.svg',
    telephone: 'https://static.wixstatic.com/shapes/7bb303_4fa38e5e0e364b499077c5ef01718d06.svg',
    megaphone: 'https://static.wixstatic.com/shapes/7bb303_ef3c64b596574b289a24797a4e2b68f3.svg'
};
const TYMAL_STATUT = { a_venir: 'clinOeil', en_cours: 'marche', passe: 'assis', annulee: 'emu', reportee: 'telephone' };
const TYMAL_SCALE = { banderole: 1, drapeauBreton: 1.3, drapeauStMalo: 1.3, drapeauGuadeloupe: 1.3, assis: 1.7, clinOeil: 1.5, ailesCroiseesLunettes: 1.6, ailesCroiseesLunettes2: 1.6, marche: 1.55, marcheLunettes: 1.55, marcheLunettes2: 1.55, profil: 1.6, emu: 1.55, face: 1.55, heureux: 1.5, telephone: 1.55, megaphone: 1.45, pouce: 1.5, velo: 1.45, tri: 1.55, vol: 1.55 };
const TYMAL_BRETAGNE = ['rennes', 'brest', 'quimper', 'lorient', 'vannes', 'saint-brieuc', 'st-brieuc'];

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
const TROPHEE = 'https://static.wixstatic.com/shapes/df962b_5c53bd7ada884b219bbf484518b01364.svg';
const DOWS = ['lu', 'ma', 'me', 'je', 've', 'sa', 'di'];
const ICON_TARGET = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>';
const ICON_LIST = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="3.5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="3.5" cy="18" r="1" fill="currentColor" stroke="none"/></svg>';
const ICON_ROUTE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="5.5" r="2"/><path stroke-dasharray="2.4 2.4" d="M7 17 17 7"/></svg>';
const ICON_FUNNEL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="21 4 3 4 10 12.5 10 19 14 21 14 12.5 21 4"/></svg>';
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
const DRAPEAU_FR = () => '<svg class="tm-drapeau" viewBox="0 0 3 2" preserveAspectRatio="none" aria-hidden="true" focusable="false"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>';
 
 
 
const DRAPEAU_EN = (cle) => '<svg class="tm-drapeau" viewBox="0 0 60 30" preserveAspectRatio="none" aria-hidden="true" focusable="false">'
    + '<clipPath id="tm-uk-' + cle + '"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>'
    + '<rect width="60" height="30" fill="#012169"/>'
    + '<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>'
    + '<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#tm-uk-' + cle + ')" stroke="#C8102E" stroke-width="4"/>'
    + '<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>'
    + '<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>'
    + '</svg>';
const DRAPEAUX = { fr: DRAPEAU_FR, en: DRAPEAU_EN };

const ICON_RETOUR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 8 12l7 7"/></svg>';
const ICON_ARROW_DOWN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v15"/><path d="m6 13 6 6 6-6"/></svg>';
const ICON_CAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';

const DEMO_ETAPES = (function () {
    const j = (n) => { const d = new Date(); d.setDate(d.getDate() + n); d.setHours(10, 0, 0, 0); return d.toISOString(); };
    const villes = [
        ['Rennes', 'Place de la Mairie', 48.1173, -1.6778, 'Coup d\'envoi breton de la tournée.'],
        ['Nantes', 'Place du Bouffay', 47.2184, -1.5536, 'Tymal sur les bords de Loire.'],
        ['La Rochelle', 'Vieux-Port', 46.1603, -1.1511, 'Escale maritime au cœur du Vieux-Port.'],
        ['Bordeaux', 'Place de la Bourse', 44.8378, -0.5792, 'Tymal face au miroir d\'eau.'],
        ['Bayonne', 'Place de la Liberté', 43.4929, -1.4748, 'Étape basque festive.'],
        ['Pau', 'Boulevard des Pyrénées', 43.2951, -0.3708, 'Vue sur les Pyrénées.'],
        ['Toulouse', 'Place du Capitole', 43.6047, 1.4442, 'La ville rose accueille la mascotte.'],
        ['Carcassonne', 'La Cité', 43.2130, 2.3491, 'Tymal dans la cité médiévale.'],
        ['Montpellier', 'Place de la Comédie', 43.6108, 3.8767, 'Escale héraultaise.'],
        ['Nîmes', 'Les Arènes', 43.8367, 4.3601, 'Au pied des arènes romaines.'],
        ['Avignon', 'Palais des Papes', 43.9493, 4.8055, 'Tymal sous les remparts.'],
        ['Marseille', 'Vieux-Port', 43.2965, 5.3698, 'La cité phocéenne et son port.'],
        ['Toulon', 'Port de Toulon', 43.1242, 5.9280, 'Étape varoise en bord de rade.'],
        ['Nice', 'Promenade des Anglais', 43.7102, 7.2620, 'Tymal sur la Baie des Anges.'],
        ['Gap', 'Place Jean Marcellin', 44.5594, 6.0790, 'Escale alpine.'],
        ['Grenoble', 'Place Grenette', 45.1885, 5.7245, 'Au pied des Alpes.'],
        ['Lyon', 'Place Bellecour', 45.7640, 4.8357, 'Tymal entre Rhône et Saône.'],
        ['Dijon', 'Place de la Libération', 47.3220, 5.0415, 'Étape bourguignonne.'],
        ['Besançon', 'La Citadelle', 47.2378, 6.0241, 'Tymal dans la boucle du Doubs.'],
        ['Strasbourg', 'Place Kléber', 48.5734, 7.7521, 'Escale alsacienne.'],
        ['Nancy', 'Place Stanislas', 48.6921, 6.1844, 'Sur la plus belle place de France.'],
        ['Metz', 'Place de la République', 49.1193, 6.1757, 'Étape mosellane.'],
        ['Reims', 'Place Drouet d\'Erlon', 49.2583, 4.0317, 'Tymal en Champagne.'],
        ['Lille', 'Grand-Place', 50.6292, 3.0573, 'Étape nordiste.'],
        ['Amiens', 'Place Gambetta', 49.8941, 2.2958, 'Tymal en Picardie.'],
        ['Rouen', 'Place du Vieux-Marché', 49.4432, 1.0993, 'Escale normande.'],
        ['Le Havre', 'Place de l\'Hôtel de Ville', 49.4944, 0.1079, 'Tymal face à la Manche.'],
        ['Caen', 'Château de Caen', 49.1829, -0.3707, 'Étape calvadosienne.'],
        ['Cherbourg', 'La Cité de la Mer', 49.6337, -1.6110, 'Dernière escale avant le retour.'],
        ['Saint-Malo', 'Esplanade Saint-Vincent', 48.6493, -2.0257, 'Arrivée à Saint-Malo, terre de départ de la Route du Rhum.']
    ];
    const img = (s) => 'https://picsum.photos/seed/' + s + '/320/220';
    const gal = (s) => [img(s + '-a'), img(s + '-b'), img(s + '-c')];
    const mkAnims = (seed) => [
        { titre: 'Atelier petits matelots', type: 'Atelier', heureDebut: '10:30', heureFin: '12:00', description: 'Fabrique ton mini-bateau et apprends les nœuds marins avec Tymal. Atelier gratuit, encadré par les animateurs de la tournée.', image: img(seed + '1'), galerie: gal(seed + '1'), infos: 'Sur inscription le matin · 6-12 ans' },
        { titre: 'Rencontre avec un skipper', type: 'Rencontre', heureDebut: '14:00', heureFin: '15:00', description: 'Échange en direct avec un navigateur de la Route du Rhum, suivi d\'une séance de questions-réponses et de dédicaces.', image: img(seed + '2'), galerie: gal(seed + '2'), infos: 'Accès libre · scène centrale' },
        { titre: 'Show de matelotage', type: 'Spectacle', heureDebut: '17:30', heureFin: '18:30', description: 'Démonstration vivante de manœuvres et de matelotage par l\'équipage, sur le village de la tournée.', image: img(seed + '3'), galerie: gal(seed + '3'), infos: 'Tout public · durée 1h' }
    ];
    const sched = (i) => {
        if (i === 0) return [-12, -10];
        if (i === 1) return [-7, -6];
        if (i === 2) return [-1, 1];
        const s = Math.round(6 + (i - 3) * 5.5);
        return [s, s + 1];
    };
    const retro = (s) => [img(s + '-r1'), img(s + '-r2'), img(s + '-r3'), img(s + '-r4')];
    const RETRO = { 'Rennes': retro('rennes'), 'Nantes': retro('nantes') };
    const creneauxFor = (ville, a, b) => {
        if (ville === 'Bordeaux') {
            return [
                { dateDebut: j(a), dateFin: j(a), animations: mkAnims('bdx-j1') },
                { dateDebut: j(b), dateFin: j(b), animations: mkAnims('bdx-j2') }
            ];
        }
        const seed = ville.toLowerCase().replace(/[^a-z]/g, '');
        return [{ dateDebut: j(a), dateFin: j(b), animations: mkAnims(seed) }];
    };
    return villes.map((v, i) => {
        const [a, b] = sched(i);
        return { _id: 'demo' + i, ville: v[0], lieu: v[1], latitude: v[2], longitude: v[3], dateDebut: j(a), dateFin: j(b), description: v[4], infosPratiques: 'Accès libre. Animations sur place.', statutManuel: '', creneaux: creneauxFor(v[0], a, b), photosRetro: RETRO[v[0]] || [] };
    });
})();

class TourneeMap extends HTMLElement {
    static get observedAttributes() { return ['data-payload', 'data-focus', 'lang']; }

    



    static get ATTENTE_DONNEES_MS() { return 12000; }

    constructor() {
        super();
        this._map = null;
        this._pulseRAF = null;
        this._userMoved = false;
        this._ro = null;
        this._etapes = [];
        



















        this._charge = false;
        this._chargePerdue = false;
        this._minuteurCharge = 0;
        this._ready = false;
        this._filtre = 'tous';
        this._recherche = '';
        this._position = null;
        this._sheet = null;
        this._du = null;
        this._au = null;
        this._groupIds = null;
        this._traceOn = TRACE_ACTIF;
        this._calRef = new Date();
        this._parcours = [];
        this._cleActive = '';
        this._lang = LANGUE_DEFAUT;
    }

    connectedCallback() {
        this._injectStyles();
         
         
         
         
         
         
         
         
         
         
        this._lang = this._resoudreLangue(this.getAttribute('lang'));
        if (this.getAttribute('lang') !== this._lang) this.setAttribute('lang', this._lang);
        this._ajusterHauteur();
        this._ajusterAncrage();
        this._buildDom();
        this._appliquerTextes();
        this._syncRetour();
        this._syncLangue();
        this._bindUI();
        if (this._traceOn) { const tb = this._q('[data-el=traceBtn]'); if (tb) tb.classList.add('tm-on'); }
         
         
         
         
        if (this._parcours.length) {
            this._renderSwitch();
            this._appliquerParcours(this._cleActive || this._choisirParcoursInitial(), { silencieux: true });
        }
        this._loadMapLibre().then(() => this._initMap());
        this._refresh();
        

        if (!this._charge && !this._minuteurCharge) {
            this._minuteurCharge = setTimeout(() => {
                this._minuteurCharge = 0;
                if (this._charge) return;
                this._chargePerdue = true;
                this._renderListe();
            }, TourneeMap.ATTENTE_DONNEES_MS);
        }
        if (DEMO) setTimeout(() => {
            if (!this._etapes.length) { this._etapes = DEMO_ETAPES; this._refresh(); }
        }, 1500);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'data-payload' && newVal) {
            this._lirePayload(newVal);
            this._renderSwitch();
            this._appliquerParcours(this._choisirParcoursInitial(), { silencieux: true });
        }
        if (name === 'data-focus' && newVal) this._focusEtape(newVal);
         
         
         
        if (name === 'lang') {
            const l = this._resoudreLangue(newVal);
            if (l === this._lang) return;
            this._lang = l;
            if (this._q('[data-el=list]')) this._appliquerLangue();
        }
    }

     
     
     
     
     
    _lirePayload(brut) {
        let data = null;
        try { data = JSON.parse(brut); } catch (e) { data = null; }
        if (data && Array.isArray(data.parcours) && data.parcours.length) {
            this._parcours = data.parcours.map((p) => ({
                cle: String(p.cle || ''),
                libelle: p.libelle || '',
                sousTitre: p.sousTitre || '',
                messageVide: p.messageVide || '',
                parDefaut: p.parDefaut === true,
                 
                 
                 
                 
                 
                trace: p.trace === undefined ? TRACE_PAR_DEFAUT[p.cle] !== false : p.trace === true,
                etapes: Array.isArray(p.etapes) ? p.etapes : []
            })).filter((p) => p.cle);
        } else if (data && Array.isArray(data.etapes)) {
            this._parcours = [Object.assign({}, PARCOURS_REPLI[0], { etapes: data.etapes })];
        } else {
            this._parcours = PARCOURS_REPLI.map((p) => Object.assign({}, p));
            





            return;
        }
        this._charge = true;
        this._chargePerdue = false;
        if (this._minuteurCharge) { clearTimeout(this._minuteurCharge); this._minuteurCharge = 0; }
    }

     
    _choisirParcoursInitial() {
        const demande = this._paramUrl('parcours');
        if (demande && this._parcours.some((p) => p.cle === demande)) return demande;
        const parDefaut = this._parcours.find((p) => p.parDefaut);
        return (parDefaut || this._parcours[0] || {}).cle || '';
    }

    _paramUrl(nom) {
        try { return new URLSearchParams(window.location.search).get(nom) || ''; }
        catch (e) { return ''; }
    }

     
     
     
     
     
     
    _ouvrirDepuisUrl() {
        if (this._urlLue) return;
        const slug = this._paramUrl('etape');
        if (!slug) { this._urlLue = true; return; }
        if (!this._ready || !(this._etapes || []).length) return;
        const e = this._etapes.find((x) => String(x.slug || '') === slug);
        if (!e) { this._urlLue = true; return; }
        this._urlLue = true;
        this._ouvrirDetail(e);
        this._focusEtape(e._id);
    }

    _parcoursActif() {
        return this._parcours.find((p) => p.cle === this._cleActive) || this._parcours[0] || null;
    }

    _appliquerParcours(cle, opts) {
        const options = opts || {};
        const p = this._parcours.find((x) => x.cle === cle) || this._parcours[0];
        if (!p) return;
        this._cleActive = p.cle;
         
         
         
        this.setAttribute('data-parcours', p.cle);
        this._etapes = p.etapes || [];
        this._traceDispo = p.trace !== false;
         
         
         
        this._detailEtape = null;
        this._groupIds = null;
        this._fermerDetail();
        this._syncTextesParcours(p);
        this._syncIllustrations();
        this._marquerSwitch();
        this._syncTrace();
        this._refresh();
        if (!options.silencieux) this._recadrer({ anime: true });
        this._ouvrirDepuisUrl();
    }

    _syncTextesParcours(p) {
        const cle = p.cle || 'mascotte';
        const eyebrow = this._q('[data-el=eyebrowTxt]');
        if (eyebrow) eyebrow.textContent = this._t('eyebrow_' + cle);
        const titre = this._q('[data-el=panelTitre]');
        if (titre) titre.innerHTML = this._t('titre_' + cle);
         
         
        const sub = this._q('[data-el=panelSub]');
        if (sub) sub.textContent = this._cmsOuDict(p.sousTitre, 'sous_titre');
        const liste = this._q('[data-el=listeTitre]');
        if (liste) liste.textContent = this._t('liste_' + cle);
         
         
        const tabMatch = this._q('[data-el=tabMatch]');
        if (tabMatch) tabMatch.textContent = this._t('tab_' + cle);
        const tabListe = this._q('[data-el=tabListe]');
        if (tabListe) tabListe.textContent = this._t('liste_' + cle);
    }

     
     
    _estTrophee() { return this._cleActive === 'trophee'; }

     
     
     
    _illu(pose) { return this._estTrophee() ? TROPHEE : TYMAL[pose]; }

     
     
    _illuParcours(cle) { return cle === 'trophee' ? TROPHEE : TYMAL.face; }

     
    _couleurs() { return COULEURS_PARCOURS[this._cleActive] || COULEURS; }

     
     
    _tempsDebut(e) { const t = new Date(e && e.dateDebut).getTime(); return isNaN(t) ? 0 : t; }

    _altIllu() { return this._t(this._estTrophee() ? 'alt_trophee' : 'alt_mascotte'); }

     
     
     
    _syncIllustrations() {
        const src = this._illu('pouce');
        const alt = this._altIllu();
        const fixes = this.querySelectorAll('.tm-mascotte, .tm-sheet-masc');
        for (let i = 0; i < fixes.length; i++) {
            fixes[i].src = src;
            if (fixes[i].getAttribute('alt')) fixes[i].alt = alt;
        }
    }

     
     
     
     
     
     
    _renderSwitch() {
        const hotes = this.querySelectorAll('[data-el=switch]');
        if (!hotes.length) return;
        const html = this._parcours.length < 2 ? '' : this._parcours.map((p) =>
            '<button type="button" class="tm-switch-btn" data-act="parcours" data-cle="' + this._esc(p.cle) + '">'
            + '<img class="tm-switch-illu" src="' + this._illuParcours(p.cle) + '" alt="" aria-hidden="true">'
            + '<span>' + this._esc(this._cmsOuDict(p.libelle, 'parcours_' + p.cle) || p.cle) + '</span></button>').join('');
        for (let i = 0; i < hotes.length; i++) {
            hotes[i].innerHTML = html;
            hotes[i].hidden = !html;
        }
         
        this.classList.toggle('tm-un-parcours', !html);
        this._marquerSwitch();
    }

    _marquerSwitch() {
        const boutons = this.querySelectorAll('[data-act=parcours]');
        for (let i = 0; i < boutons.length; i++) {
            const actif = boutons[i].getAttribute('data-cle') === this._cleActive;
            boutons[i].classList.toggle('tm-on', actif);
            boutons[i].setAttribute('aria-pressed', actif ? 'true' : 'false');
        }
    }

     
     
     
     
     
     
     
    _bornesCadrage() {
        const pts = [];
        (this._etapes || []).forEach((e) => {
            const la = Number(e.latitude), lo = Number(e.longitude);
            if (!isNaN(la) && !isNaN(lo)) pts.push([lo, la]);
        });
        if (!pts.length) return FRANCE_BOUNDS;
        const coeur = this._coeurParcours(pts);
        const lngs = coeur.map((p) => p[0]), lats = coeur.map((p) => p[1]);
        const loMin = Math.min.apply(null, lngs), loMax = Math.max.apply(null, lngs);
        const laMin = Math.min.apply(null, lats), laMax = Math.max.apply(null, lats);
         
         
         
         
        const marge = Math.max(0.01, Math.max(loMax - loMin, laMax - laMin) * 0.06);
        return [[loMin - marge, laMin - marge], [loMax + marge, laMax + marge]];
    }

     
     
     
     
     
     
    _coeurParcours(pts) {
        if (pts.length < 4) return pts;
        const med = (a) => { const s = a.slice().sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
        const centre = [med(pts.map((p) => p[0])), med(pts.map((p) => p[1]))];
        const dists = pts.map((p) => this._km(centre, p));
        const seuil = Math.max(CADRAGE_ECART_MIN_KM, med(dists) * 4);
        const gardes = pts.filter((p, i) => dists[i] <= seuil);
         
         
        return gardes.length >= Math.ceil(pts.length * 0.75) ? gardes : pts;
    }

     
     
     
     
     
    _padCadrage() {
        const panel = this._q('.tm-panel');
        const feuille = !panel || getComputedStyle(panel).position === 'fixed';
        const boite = this._map ? this._map.getContainer() : null;
        const L = boite ? boite.clientWidth : 0;
        const H = boite ? boite.clientHeight : 0;
         
         
        const cote = this._q('.tm-side');
        const largCote = (!feuille && cote) ? (cote.offsetWidth || 362) : 0;
        const pad = feuille
            ? { top: 72, right: 26, bottom: 104, left: 26 }
            : { top: 96, right: largCote + 40, bottom: 76, left: (panel.offsetWidth || 340) + 54 };
         
         
        const dispoH = Math.max(40, L - 80), dispoV = Math.max(40, H - 80);
        if (pad.left + pad.right > dispoH) {
            const k = dispoH / (pad.left + pad.right);
            pad.left = Math.floor(pad.left * k); pad.right = Math.floor(pad.right * k);
        }
        if (pad.top + pad.bottom > dispoV) {
            const k = dispoV / (pad.top + pad.bottom);
            pad.top = Math.floor(pad.top * k); pad.bottom = Math.floor(pad.bottom * k);
        }
        return pad;
    }

    _recadrer(options) {
        if (!this._map) return;
        const anime = !!(options && options.anime);
        this._map.resize();
         
         
        const camFr = this._map.cameraForBounds(FRANCE_BOUNDS, { padding: 22 });
        if (camFr && typeof camFr.zoom === 'number') {
            this._map.setMinZoom(Math.max(2.5, camFr.zoom - 0.3));
        }
        const cam = this._map.cameraForBounds(this._bornesCadrage(), { padding: this._padCadrage() });
        if (!cam || typeof cam.zoom !== 'number') return;
        const vue = { center: cam.center, zoom: Math.min(cam.zoom, CADRAGE_ZOOM_MAX) };
        if (anime) this._map.easeTo({ center: vue.center, zoom: vue.zoom, duration: 620 });
        else this._map.jumpTo(vue);
        this._userMoved = false;
    }

     
     
    _estMobile() {
        try { return window.matchMedia('(max-width:768px), (max-height:520px)').matches; }
        catch (e) { return window.innerWidth <= 768; }
    }

    _esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

     
     
     
     
     
     
     
     
    _url(u, repli) {
        const fallback = arguments.length > 1 ? repli : '';
        if (u == null) return fallback;
        let s = String(u).trim();
        if (!s) return fallback;
        let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
        if (m) s = 'https://static.wixstatic.com/media/' + m[1];
        else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
        const okScheme = /^https?:/i.test(s);
        const relatif = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
        if (!okScheme && !relatif) return fallback;
        return s.replace(/"/g, '%22').replace(/'/g, '%27');
    }

    disconnectedCallback() {
        if (this._minuteurCharge) { clearTimeout(this._minuteurCharge); this._minuteurCharge = 0; }
        if (this._pulseRAF) cancelAnimationFrame(this._pulseRAF);
        if (this._ro) this._ro.disconnect();
        if (this._onKey) { window.removeEventListener('keydown', this._onKey); this._onKey = null; }
        if (this._onVisible) { document.removeEventListener('visibilitychange', this._onVisible); this._onVisible = null; }
        if (this._onDocClick) { document.removeEventListener('click', this._onDocClick); this._onDocClick = null; }
         
         
         
         
         
         
         
        if (this._map) { this._map.remove(); this._map = null; }
        this._currentMarker = null;
        this._villageMarker = null;
    }

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    _resoudreLangue(attr) {
        const a = String(attr || '').trim().toLowerCase().slice(0, 2);
        if (LANGUES.indexOf(a) !== -1) return a;
        let chemin = '';
        try { chemin = window.location.pathname || ''; } catch (e) { return LANGUE_DEFAUT; }
        const m = chemin.match(/^\/([a-z]{2})(\/|$)/i);
        const code = m ? m[1].toLowerCase() : '';
        return LANGUES.indexOf(code) !== -1 ? code : LANGUE_DEFAUT;
    }

     
     
     
    _t(cle) {
        const d = DICT[this._lang] || DICT[LANGUE_DEFAUT];
        const v = d[cle];
        return v === undefined ? (DICT[LANGUE_DEFAUT][cle] === undefined ? '' : DICT[LANGUE_DEFAUT][cle]) : v;
    }

     
     
    _tp(prefixe) { return this._t(prefixe + '_' + (this._cleActive || 'mascotte')); }

     
     
    _appliquerTextes() {
        this.querySelectorAll('[data-t]').forEach((n) => { n.innerHTML = this._t(n.getAttribute('data-t')); });
        this.querySelectorAll('[data-tph]').forEach((n) => { n.setAttribute('placeholder', this._t(n.getAttribute('data-tph'))); });
        const pill = this._q('[data-el=filtrePill]');
        if (pill) pill.innerHTML = this._t('filtre_actif') + '<b>' + this._t('tout_afficher') + '</b>';
         
         
         
         
        this._syncTextesParcours(this._parcoursActif() || { cle: this._cleActive || 'mascotte' });
        this.querySelectorAll('[data-ta]').forEach((n) => {
            const v = this._t(n.getAttribute('data-ta'));
            n.setAttribute('aria-label', v);
            if (n.hasAttribute('title')) n.setAttribute('title', v);
        });
    }

     
    _appliquerLangue() {
        this._appliquerTextes();
        this._syncRetour();
        this._syncLangue();
        const p = this._parcoursActif();
        if (p) this._syncTextesParcours(p);
        this._renderSwitch();
        this._refresh();
        this._addCurrent();
        if (this._villageOuvert) this._ouvrirVillage();
        else if (this._detailEtape) this._renderDetailBody();
    }

     
     
     
     
     
    _cheminVersLangue(chemin, lang) {
        const c = String(chemin || '/') || '/';
        const prefixe = /^\/en(\/|$)/i.test(c);
        if (lang === LANGUE_DEFAUT) return prefixe ? (c.replace(/^\/en/i, '') || '/') : c;
        return prefixe ? c : '/en' + c;
    }

     
     
     
    _retourDansLaLangue(cible) {
        const c = String(cible || '');
        if (this._lang === LANGUE_DEFAUT || !c) return c;
        if (c.charAt(0) === '/' && c.charAt(1) !== '/') return this._cheminVersLangue(c, this._lang);
        try {
            const u = new URL(c, window.location.href);
            if (u.origin !== window.location.origin) return c;
            return u.origin + this._cheminVersLangue(u.pathname, this._lang) + u.search + u.hash;
        } catch (e) {
            return c;
        }
    }

    _syncRetour() {
        const lien = this._q('[data-el=retour]');
        if (!lien) return;
        const cible = this._url(this.getAttribute('data-retour'), RETOUR_DEFAUT) || RETOUR_DEFAUT;
        lien.setAttribute('href', this._retourDansLaLangue(cible));
    }

     
     
     
     
     
     
     
     
    _syncLangue() {
        const boite = this._q('[data-el=langue]');
        const btn = this._q('[data-el=langueBtn]');
        const fr = this._q('[data-el=langueFr]');
        const en = this._q('[data-el=langueEn]');
        if (!boite || !btn || !fr || !en) return;
        let loc = null;
        try { loc = window.location; } catch (e) { return; }
         
         
         
        const proto = (loc.protocol || '').toLowerCase();
        if (proto !== 'http:' && proto !== 'https:') { boite.hidden = true; return; }
        const chemin = loc.pathname || '/';
        const versFr = this._cheminVersLangue(chemin, 'fr');
        const versEn = this._cheminVersLangue(chemin, 'en');
        const q = loc.search || '';
        boite.hidden = false;
        fr.setAttribute('href', versFr + q);
        en.setAttribute('href', versEn + q);
         
         
         
         
        fr.setAttribute('aria-current', this._lang === 'en' ? 'false' : 'true');
        en.setAttribute('aria-current', this._lang === 'en' ? 'true' : 'false');
        btn.setAttribute('title', this._t('langue'));
        btn.setAttribute('aria-label', btn.getAttribute('title'));
         
         
         
        if (btn.getAttribute('data-drapeau') !== this._lang) {
            btn.innerHTML = (DRAPEAUX[this._lang] || DRAPEAUX[LANGUE_DEFAUT])('bouton');
            btn.setAttribute('data-drapeau', this._lang);
        }
    }

    _basculerLangue() {
        const menu = this._q('[data-el=langueMenu]');
        const btn = this._q('[data-el=langueBtn]');
        if (!menu || !btn) return;
        const ouvert = !menu.hidden;
        menu.hidden = ouvert;
        btn.setAttribute('aria-expanded', ouvert ? 'false' : 'true');
    }

    _fermerLangue() {
        const menu = this._q('[data-el=langueMenu]');
        if (!menu || menu.hidden) return;
        menu.hidden = true;
        const btn = this._q('[data-el=langueBtn]');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    }

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    _ajusterAncrage() {
        let r;
        try { r = this.getBoundingClientRect(); } catch (e) { return; }
        const pleineLargeur = r.left <= 2 && r.right >= (window.innerWidth - 2);
        const assezHaute = r.height >= (window.innerHeight - 2);
        this.classList.toggle('tm-plein-ecran', pleineLargeur && assezHaute);
    }

    _ajusterHauteur() {
        const parent = this.parentElement;
        if (!parent) return;
        const mesure = Math.round(parent.getBoundingClientRect().height);
        const h = Math.max(HAUTEUR_MIN, mesure || 0);
        if (this._hauteurPosee === h) return;
        this._hauteurPosee = h;
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        this.style.height = h + 'px';
        this.style.minHeight = '0px';
        this.style.maxHeight = 'none';
        if (this._map) this._map.resize();
    }

     
    _injectStyles() {
        if (!document.getElementById('tm-maplibre-css')) {
            const link = document.createElement('link');
            link.id = 'tm-maplibre-css'; link.rel = 'stylesheet'; link.href = MAPLIBRE_CSS;
            document.head.appendChild(link);
        }
        if (!document.getElementById('tm-varien')) {
            const f = document.createElement('style');
            f.id = 'tm-varien';
            f.textContent = "@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien.woff2') format('woff2');font-weight:normal;font-style:normal;font-display:swap}@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-weight:normal;font-style:italic;font-display:swap}";
            document.head.appendChild(f);
        }
        if (document.getElementById('tm-style')) return;
        const style = document.createElement('style');
        style.id = 'tm-style';
        style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');





tournee-map{display:block;position:relative;width:100%;height:100%;min-height:520px;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#fff;}





tournee-map{--tm-ac:${ACCENTS.mascotte.c};--tm-ac-rgb:${ACCENTS.mascotte.rgb};--tm-ac-sombre:${ACCENTS.mascotte.sombre};--tm-ac-clair:${ACCENTS.mascotte.clair};--tm-ac-haut:${ACCENTS.mascotte.haut};--tm-st-avenir:${COULEURS_PARCOURS.mascotte.a_venir};--tm-st-encours:${JAUNE};--tm-st-passe:${COULEURS.passe};}
tournee-map[data-parcours="trophee"]{--tm-ac:${ACCENTS.trophee.c};--tm-ac-rgb:${ACCENTS.trophee.rgb};--tm-ac-sombre:${ACCENTS.trophee.sombre};--tm-ac-clair:${ACCENTS.trophee.clair};--tm-ac-haut:${ACCENTS.trophee.haut};--tm-st-avenir:${COULEURS_PARCOURS.trophee.a_venir};}
 
tournee-map,tournee-map *,tournee-map *::before,tournee-map *::after{box-sizing:border-box;}




@media (prefers-reduced-motion:reduce){
  tournee-map *{transition-duration:.01ms !important;animation-duration:.01ms !important;animation-iteration-count:1 !important;}
}











.tm-root{position:absolute;inset:0;max-height:100vh;max-height:100dvh;}

.tm-marker{width:22px;height:22px;border-radius:50%;border:3px solid #fff;cursor:pointer;box-shadow:0 2px 8px rgba(12,33,67,.55);transition:transform .15s ease;}
.tm-marker:hover{transform:scale(1.28);}
.tm-passe{opacity:.55;}
.tm-en_cours{position:relative;}
.tm-en_cours::after{content:"";position:absolute;inset:-7px;border-radius:50%;border:2px solid var(--tm-ac);animation:tm-pulse 1.7s ease-out infinite;}
@keyframes tm-pulse{0%{transform:scale(.65);opacity:.9;}100%{transform:scale(1.9);opacity:0;}}

.tm-glass{background:linear-gradient(180deg, rgba(10,24,48,.97) 0%, rgba(7,18,38,.97) 100%);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(var(--tm-ac-rgb),.2);box-shadow:0 12px 44px rgba(7,17,31,.5), inset 0 1px 0 rgba(255,255,255,.04);position:relative;}
.tm-glass::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--tm-ac),var(--tm-ac-haut),var(--tm-ac));border-radius:16px 16px 0 0;z-index:2;}





.tm-panel{position:absolute;top:18px;left:18px;width:340px;max-width:calc(100% - 36px);max-height:calc(100% - 36px);display:flex;flex-direction:column;border-radius:22px 3px 16px 3px;padding:20px;z-index:6;overflow:hidden;}
.tm-panel-body{min-height:0;overflow-y:auto;overflow-x:hidden;}
.tm-panel-body::-webkit-scrollbar{width:5px;}
.tm-panel-body::-webkit-scrollbar-thumb{background:rgba(var(--tm-ac-rgb),.35);border-radius:999px;}







.tm-switch{display:flex;gap:4px;padding:4px;margin:0 0 13px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:999px;}
.tm-switch-btn{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:9px;padding:8px 12px;border:1px solid transparent;border-radius:999px;background:rgba(255,255,255,.05);cursor:pointer;font-family:inherit;font-size:11.5px;font-weight:700;letter-spacing:.02em;color:rgba(255,255,255,.72);white-space:nowrap;overflow:hidden;transition:background .18s,color .18s,border-color .18s,box-shadow .18s;}


.tm-switch-btn > span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.tm-switch-illu{width:26px;height:26px;flex:0 0 auto;border-radius:50%;object-fit:contain;background:rgba(255,255,255,.16);}


.tm-switch-btn[data-cle="trophee"] .tm-switch-illu{background:none;}
.tm-switch-btn:hover:not(.tm-on){background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.22);color:#fff;}
.tm-switch-btn.tm-on{background:linear-gradient(135deg,var(--tm-ac-clair),var(--tm-ac));border-color:rgba(255,255,255,.35);color:#0b2545;font-weight:800;box-shadow:0 6px 16px -4px rgba(0,0,0,.6);}
.tm-switch-btn.tm-on .tm-switch-illu{background:rgba(255,255,255,.45);}
.tm-switch-btn[data-cle="trophee"].tm-on .tm-switch-illu{background:none;}
.tm-switch-btn:focus-visible{outline:2px solid #fff;outline-offset:2px;}




.tm-panel .tm-switch{display:none;}



.tm-topbar{position:absolute;top:18px;left:18px;z-index:16;display:flex;align-items:center;gap:8px;max-width:calc(100% - 36px);}
.tm-retour{flex:0 0 auto;align-self:stretch;display:inline-flex;align-items:center;gap:7px;padding:0 16px 0 13px;border-radius:999px;background:rgba(9,26,52,.82);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.86);font-family:inherit;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 10px 28px rgba(7,17,31,.45);transition:background .18s,color .18s;}
.tm-retour:hover{background:rgba(16,40,74,.92);color:#fff;}
.tm-retour:focus-visible{outline:2px solid #fff;outline-offset:2px;}
.tm-retour svg{width:17px;height:17px;flex:0 0 auto;}
.tm-switch-flottant{display:inline-flex;position:static;z-index:auto;width:auto;max-width:100%;margin:0;padding:4px;gap:4px;background:rgba(9,26,52,.82);border-color:rgba(255,255,255,.2);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 10px 28px rgba(7,17,31,.45);}
.tm-switch-flottant .tm-switch-btn{flex:0 0 auto;min-height:42px;padding:11px 20px;font-size:12.5px;color:rgba(255,255,255,.8);white-space:nowrap;overflow:visible;text-overflow:clip;}
.tm-switch-flottant .tm-switch-btn:not(.tm-on):hover{background:rgba(255,255,255,.11);color:#fff;}







@media (min-width:1025px) and (min-height:521px){
  

  

  tournee-map:not(.tm-un-parcours) .tm-panel{top:104px;max-height:calc(100% - 122px);}
}


.tm-apreciser{font-style:italic;color:rgba(255,255,255,.5);font-weight:500;}
.tm-note-event{margin:6px 0 0;font-size:12.5px;font-weight:700;color:#FCF150;}
.tm-creneaux{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 0;}
.tm-creneau{padding:5px 11px;border-radius:999px;background:rgba(var(--tm-ac-rgb),.16);border:1px solid rgba(var(--tm-ac-rgb),.4);font-size:12px;font-weight:700;color:#fff;}
.tm-relais{display:flex;align-items:center;gap:12px;margin:12px 0 0;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);}
.tm-relais-txt{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1 1 auto;}



.tm-relais-logo{flex:0 0 auto;width:62px;height:44px;object-fit:contain;background:#fff;border-radius:8px;padding:5px;}
.tm-relais-lab{font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(var(--tm-ac-rgb),.9);}
.tm-relais-nom{font-size:13px;font-weight:700;color:#fff;}
.tm-relais-adr{font-size:11.5px;color:rgba(255,255,255,.55);}
.tm-eyebrow{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;color:var(--tm-ac);margin-bottom:11px;}
.tm-eyebrow .tm-dot{width:7px;height:7px;border-radius:50%;background:var(--tm-ac);animation:tm-dotpulse 2s ease-in-out infinite;}
@keyframes tm-dotpulse{0%,100%{box-shadow:0 0 0 0 rgba(var(--tm-ac-rgb),.5)}50%{box-shadow:0 0 0 7px rgba(var(--tm-ac-rgb),0)}}



.tm-title{font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;line-height:1.06;letter-spacing:.01em;color:#fff;}
.tm-panel h2{margin:0 0 4px;font-size:27px;}
.tm-panel p.tm-sub{margin:0 0 15px;font-size:11.5px;color:rgba(255,255,255,.5);font-weight:500;}
.tm-field{display:flex;flex-direction:column;gap:5px;margin-bottom:11px;}
.tm-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.22em;color:rgba(var(--tm-ac-rgb),.7);}
.tm-field input[type=text]{width:100%;min-width:0;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-bottom:2px solid rgba(var(--tm-ac-rgb),.35);border-radius:8px;padding:10px 12px;font-size:14px;font-family:inherit;font-weight:600;color:#fff;outline:none;transition:border-color .2s,background .2s,box-shadow .2s;}
.tm-field input::placeholder{color:rgba(255,255,255,.35);font-weight:500;}
.tm-field input:focus{border-color:rgba(var(--tm-ac-rgb),.5);border-bottom-color:var(--tm-ac);background:rgba(var(--tm-ac-rgb),.1);box-shadow:0 0 0 3px rgba(var(--tm-ac-rgb),.1);}
.tm-dates{display:flex;gap:9px;}
.tm-datefield{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:4px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-bottom:2px solid rgba(var(--tm-ac-rgb),.35);border-radius:8px;padding:9px 12px;cursor:pointer;font-family:inherit;text-align:left;transition:border-color .2s;}
.tm-datefield:hover{border-bottom-color:var(--tm-ac);}
.tm-datefield-row{display:flex;align-items:center;gap:7px;width:100%;}
.tm-datefield-row svg{width:15px;height:15px;color:var(--tm-ac);flex:0 0 auto;}
.tm-dateval{font-size:14px;font-weight:600;color:#fff;}
.tm-dateval.empty{color:rgba(255,255,255,.4);}

.tm-cal{display:none;margin:12px 0 2px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:13px;}
.tm-cal.open{display:block;}
.tm-cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
.tm-cal-title{font-weight:800;font-size:13px;text-transform:capitalize;color:#fff;}
.tm-cal-nav{background:rgba(var(--tm-ac-rgb),.14);border:0;color:var(--tm-ac);width:28px;height:28px;border-radius:8px;cursor:pointer;font-size:16px;line-height:1;font-family:inherit;}
.tm-cal-nav:hover{background:rgba(var(--tm-ac-rgb),.26);}
.tm-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;}
.tm-cal-dow{font-size:9px;font-weight:700;text-transform:uppercase;color:rgba(255,255,255,.4);text-align:center;padding:3px 0 6px;}
.tm-cal-day{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;border-radius:7px;cursor:pointer;color:#fff;transition:background .12s;}
.tm-cal-day:hover{background:rgba(var(--tm-ac-rgb),.22);}
.tm-cal-day.empty{visibility:hidden;cursor:default;}
.tm-cal-day.today{box-shadow:inset 0 0 0 1.5px rgba(var(--tm-ac-rgb),.6);}
.tm-cal-day.in-range{background:rgba(var(--tm-ac-rgb),.2);border-radius:0;}
.tm-cal-day.edge{background:var(--tm-ac);color:${NAVY};font-weight:800;}
.tm-cal-day.edge.start{border-radius:7px 0 0 7px;}
.tm-cal-day.edge.end{border-radius:0 7px 7px 0;}
.tm-cal-day.edge.single{border-radius:7px;}
.tm-cal-foot{display:flex;justify-content:space-between;margin-top:11px;}
.tm-cal-link{background:none;border:0;color:var(--tm-ac);font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;text-transform:uppercase;letter-spacing:.06em;}

.tm-row{display:flex;align-items:center;gap:8px;margin:14px 0 7px;}
.tm-row .tm-label{flex:1;}
.tm-rayon-val{font-weight:700;font-size:13px;color:var(--tm-ac);}
input[type=range]{width:100%;accent-color:var(--tm-ac);cursor:pointer;}
.tm-btn{border:0;border-radius:10px 0 10px 0;padding:13px 14px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;font-family:inherit;width:100%;transition:filter .15s,transform .1s,box-shadow .2s;}
.tm-btn:hover{filter:brightness(1.06);transform:translateY(-1px);}
.tm-btn:active{transform:translateY(1px);}
.tm-btn-primary{background:linear-gradient(135deg,var(--tm-ac),var(--tm-ac-sombre));color:${NAVY};box-shadow:0 6px 18px rgba(var(--tm-ac-rgb),.4);}
.tm-btn-ghost{background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.16);}
.tm-geo{display:flex;align-items:center;justify-content:center;gap:7px;margin-bottom:12px;background:rgba(var(--tm-ac-rgb),.14);border:1px solid rgba(var(--tm-ac-rgb),.35);border-radius:9px;padding:11px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;cursor:pointer;color:var(--tm-ac);font-family:inherit;width:100%;transition:background .2s;}
.tm-geo:hover{background:rgba(var(--tm-ac-rgb),.24);}
.tm-result{margin-top:13px;font-size:13px;line-height:1.5;padding:12px 13px;border-radius:10px 0 10px 0;display:none;font-weight:600;}
.tm-result.tm-hit{background:rgba(var(--tm-ac-rgb),.14);border:1px solid rgba(var(--tm-ac-rgb),.45);color:#fff;display:block;}
.tm-result.tm-miss{background:rgba(255,237,0,.12);border:1px solid rgba(255,237,0,.45);color:#fff;display:block;}
.tm-result b{color:var(--tm-ac);}

.tm-mascotte{position:absolute;top:0;right:8px;width:118px;height:auto;z-index:7;pointer-events:none;filter:drop-shadow(0 12px 18px rgba(7,17,31,.55));}







.tm-side{position:absolute;top:26px;right:18px;width:362px;max-width:calc(100% - 36px);max-height:min(calc(100% - 52px),calc(100dvh - 52px));border-radius:3px 22px 3px 16px;display:flex;flex-direction:column;overflow:hidden;z-index:5;}
.tm-side-head{padding:18px 18px 14px;}
.tm-head-top{padding-right:126px;}
.tm-side-head h3{margin:0 0 14px;font-size:22px;}




.tm-filtres{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-bottom:11px;}



.tm-chip{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.07);border-radius:999px;padding:7px 12px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;cursor:pointer;color:rgba(255,255,255,.75);font-family:inherit;transition:background .18s,color .18s,border-color .18s;}
.tm-chip::before{content:'';width:8px;height:8px;border-radius:50%;flex:0 0 auto;}
.tm-chip[data-filtre="tous"]::before{display:none;}
.tm-chip[data-filtre="a_venir"]::before{background:var(--tm-st-avenir);}
.tm-chip[data-filtre="en_cours"]::before{background:var(--tm-st-encours);}
.tm-chip[data-filtre="passe"]::before{background:var(--tm-st-passe);}
.tm-chip:hover{color:#fff;background:rgba(255,255,255,.13);border-color:rgba(var(--tm-ac-rgb),.45);}
.tm-chip.tm-active{background:var(--tm-ac);border-color:var(--tm-ac);color:#0b2545;font-weight:800;}


.tm-chip.tm-active::before{box-shadow:0 0 0 2px rgba(255,255,255,.9);}
.tm-search{width:100%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-bottom:2px solid rgba(var(--tm-ac-rgb),.35);border-radius:8px;padding:9px 12px;font-size:13px;font-family:inherit;font-weight:600;color:#fff;outline:none;}
.tm-search::placeholder{color:rgba(255,255,255,.35);font-weight:500;}
.tm-search:focus{border-bottom-color:var(--tm-ac);background:rgba(var(--tm-ac-rgb),.08);}



.tm-list{flex:1;overflow-y:auto;padding:8px 14px 14px;min-height:0;-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 26px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 26px),transparent);}
.tm-list::-webkit-scrollbar{width:6px;}
.tm-list::-webkit-scrollbar-thumb{background:rgba(var(--tm-ac-rgb),.35);border-radius:999px;}
.tm-card{position:relative;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-left:3px solid var(--cc,var(--tm-ac));border-radius:0 12px 12px 0;padding:13px;margin-bottom:9px;cursor:pointer;transition:background .18s,transform .14s,box-shadow .18s;}
.tm-card:hover{background:rgba(var(--tm-ac-rgb),.1);transform:translateX(3px);box-shadow:0 6px 20px rgba(7,17,31,.3);}
.tm-card-top{display:flex;align-items:center;gap:8px;margin-bottom:5px;}
.tm-badge{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;padding:4px 9px;border-radius:999px;white-space:nowrap;}
.tm-card h4{margin:0;flex:1;font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;font-size:22px;line-height:.95;color:#fff;letter-spacing:-.01em;}
.tm-card .tm-meta{font-size:11.5px;color:rgba(255,255,255,.55);margin:3px 0 0;font-weight:500;}
.tm-dist{font-size:11px;font-weight:800;color:var(--tm-ac);white-space:nowrap;}
.tm-grpbanner{display:flex;align-items:center;justify-content:space-between;gap:10px;background:rgba(var(--tm-ac-rgb),.14);border:1px solid rgba(var(--tm-ac-rgb),.4);border-radius:10px;padding:9px 12px;margin:0 0 10px;font-size:12px;font-weight:700;color:#fff;}
.tm-grpbanner button{background:none;border:0;color:var(--tm-ac);font-weight:800;font-size:11px;cursor:pointer;font-family:inherit;text-transform:uppercase;letter-spacing:.04em;}
.tm-group-list{display:flex;flex-direction:column;gap:8px;margin-top:10px;}
.tm-group-item{display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:12px 13px;cursor:pointer;font-family:inherit;text-align:left;transition:background .15s,transform .12s;}
.tm-group-item:hover{background:rgba(var(--tm-ac-rgb),.12);transform:translateX(3px);}
.tm-group-when{font-weight:700;color:#fff;font-size:13px;}
.tm-group-lieu{font-size:12px;color:rgba(255,255,255,.55);width:100%;font-weight:500;}
.tm-empty{padding:26px 18px 30px;text-align:center;color:rgba(255,255,255,.4);font-size:13px;font-weight:600;}
.tm-empty img{width:84px;height:auto;margin-bottom:10px;opacity:.92;filter:drop-shadow(0 6px 12px rgba(7,17,31,.4));}

.tm-detail{position:absolute;bottom:22px;left:50%;width:min(540px,calc(100% - 36px));border-radius:16px;z-index:8;opacity:0;transform:translateX(-50%) translateY(26px);pointer-events:none;transition:opacity .25s ease,transform .25s ease;overflow:visible;}
.tm-detail.tm-open{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto;}
.tm-detail-scroll{max-height:74vh;overflow-y:auto;overflow-x:hidden;border-radius:16px;}
.tm-detail-scroll::-webkit-scrollbar{width:6px;}
.tm-detail-scroll::-webkit-scrollbar-thumb{background:rgba(var(--tm-ac-rgb),.35);border-radius:999px;}
.tm-detail-masc{position:absolute;bottom:calc(100% - 52px);right:46px;width:116px;height:auto;z-index:9;pointer-events:none;transform-origin:bottom center;filter:drop-shadow(0 10px 16px rgba(7,17,31,.5));}
.tm-detail-body{padding:24px;}



.tm-lien-externe{display:inline-block;margin-top:14px;color:var(--tm-ac);font-size:12px;font-weight:700;text-decoration:underline;text-underline-offset:3px;}
.tm-lien-externe:hover{color:#fff;}
.tm-lien-externe:focus-visible{outline:2px solid #fff;outline-offset:3px;}
.tm-detail-passe h3{opacity:.78;}
.tm-detail-passe .tm-meta{color:rgba(255,255,255,.48);}
.tm-detail-hero{width:100%;height:200px;object-fit:cover;border-radius:12px;margin-bottom:16px;display:block;background:rgba(255,255,255,.05);}
.tm-detail-body .tm-badge{display:inline-block;margin-bottom:12px;}
.tm-detail-body h3{margin:0 0 5px;padding-right:92px;font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;font-size:32px;line-height:.95;color:#fff;}
.tm-detail-body .tm-meta{color:rgba(255,255,255,.55);font-size:13px;margin:0 0 16px;font-weight:600;}
.tm-detail-body .tm-desc{font-size:14px;line-height:1.65;color:rgba(255,255,255,.85);font-weight:400;}
.tm-prog{margin:18px 0 4px;}
.tm-prog-title{font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;font-size:16px;color:#fff;margin:0 0 10px;}
.tm-anim{display:flex;gap:12px;padding:10px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);margin-bottom:8px;}
.tm-anim-img{width:72px;height:72px;border-radius:8px;object-fit:cover;flex:0 0 auto;background:rgba(255,255,255,.05);}
.tm-anim-body{flex:1;min-width:0;}
.tm-anim-head{display:flex;align-items:center;gap:8px;margin-bottom:3px;flex-wrap:wrap;}
.tm-anim-time{font-size:12px;font-weight:700;color:var(--tm-ac);}
.tm-anim-type{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:${NAVY};background:${JAUNE};padding:2px 7px;border-radius:999px;}
.tm-anim-titre{font-size:14px;font-weight:700;color:#fff;line-height:1.2;}
.tm-anim-desc{font-size:12px;color:rgba(255,255,255,.7);line-height:1.5;margin-top:3px;}
.tm-anim{cursor:pointer;transition:border-color .2s,background .2s;}
.tm-anim:hover{border-color:rgba(var(--tm-ac-rgb),.3);}
.tm-anim-caret{margin-left:auto;color:rgba(255,255,255,.4);font-size:15px;line-height:1;transition:transform .25s;}
.tm-anim-open .tm-anim-caret{transform:rotate(180deg);}
.tm-anim-detail{max-height:0;overflow:hidden;transition:max-height .3s ease;width:100%;}
.tm-anim-open .tm-anim-detail{max-height:360px;margin-top:10px;}
.tm-anim-gal{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;}
.tm-anim-gal img{height:66px;width:auto;border-radius:6px;flex:0 0 auto;object-fit:cover;}
.tm-anim-infos{font-size:11px;color:rgba(255,255,255,.6);margin-top:7px;}
.tm-passe-note{font-size:13px;font-weight:600;color:rgba(255,255,255,.78);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:12px 14px;margin-top:14px;line-height:1.5;}
.tm-passe-annule{color:#ffb4b4;border-color:rgba(255,80,80,.28);background:rgba(255,60,60,.08);}
.tm-retro{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:10px;}
.tm-car{position:relative;margin-top:10px;}
.tm-car-track{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;padding:2px 2px 8px;scrollbar-width:none;}
.tm-car-track::-webkit-scrollbar{height:0;display:none;}
.tm-slide{flex:0 0 62%;scroll-snap-align:center;padding:0;border:none;background:rgba(255,255,255,.05);border-radius:13px;overflow:hidden;cursor:pointer;position:relative;height:188px;box-shadow:0 6px 16px rgba(7,17,31,.35);}
.tm-slide img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease;}
.tm-slide:hover img{transform:scale(1.04);}
.tm-car-single .tm-slide{flex:0 0 96%;}
.tm-slide-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:30px;color:#fff;background:rgba(0,0,0,.3);}
.tm-car-arrow{position:absolute;top:50%;transform:translateY(-50%);width:38px;height:38px;border-radius:50%;border:none;background:rgba(7,18,38,.82);color:#fff;font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:3;box-shadow:0 4px 12px rgba(7,17,31,.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);}
.tm-car-prev{left:6px;}
.tm-car-next{right:6px;}
.tm-car-arrow:hover{background:${NAVY};}
.tm-agenda{position:absolute;inset:0;z-index:21;display:flex;align-items:center;justify-content:center;background:rgba(5,12,26,.62);opacity:0;pointer-events:none;transition:opacity .2s;padding:20px;}
.tm-agenda.tm-open{opacity:1;pointer-events:auto;}
.tm-agenda-card{width:min(340px,100%);border-radius:16px;padding:22px 20px 18px;position:relative;display:flex;flex-direction:column;gap:9px;}
.tm-agenda-card h4{margin:0 0 4px;font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;font-size:19px;color:#fff;padding-right:34px;}
.tm-agenda-choix{display:block;width:100%;text-align:left;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:11px;padding:13px 15px;color:#fff;font-family:inherit;font-size:13.5px;font-weight:700;text-decoration:none;cursor:pointer;transition:background .18s,border-color .18s;}
.tm-agenda-choix:hover{background:rgba(var(--tm-ac-rgb),.16);border-color:rgba(var(--tm-ac-rgb),.5);}
.tm-agenda-note{margin:4px 0 0;font-size:11px;line-height:1.45;color:rgba(255,255,255,.5);}
.tm-lightbox{position:absolute;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;background:rgba(4,9,18,.93);opacity:0;pointer-events:none;transition:opacity .2s;}
.tm-lightbox.tm-open{opacity:1;pointer-events:auto;}
.tm-lb-stage{max-width:90%;max-height:84%;display:flex;align-items:center;justify-content:center;}
.tm-lb-stage img,.tm-lb-stage video{max-width:100%;max-height:84vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.6);display:block;}




.tm-lb-stage iframe{width:min(90vw,1100px);aspect-ratio:16/9;max-height:84vh;border:0;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.6);display:block;background:#000;}
.tm-lb-close{position:absolute;top:18px;right:18px;width:42px;height:42px;border-radius:50%;border:none;background:rgba(255,255,255,.12);color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;}
.tm-lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;border:none;background:rgba(255,255,255,.12);color:#fff;font-size:26px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;}
.tm-lb-prev{left:18px;}
.tm-lb-next{right:18px;}
.tm-lb-nav:hover,.tm-lb-close:hover{background:rgba(255,255,255,.22);}
.tm-lb-counter{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);font-size:13px;font-weight:700;color:rgba(255,255,255,.85);background:rgba(0,0,0,.45);padding:5px 13px;border-radius:999px;}
.tm-datetabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;}
.tm-datechip{font-size:12px;font-weight:700;padding:5px 13px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:transparent;color:rgba(255,255,255,.7);cursor:pointer;font-family:inherit;text-transform:capitalize;}
.tm-datechip.tm-on{background:var(--tm-ac);border-color:var(--tm-ac);color:${NAVY};}
.tm-gallery{display:flex;gap:8px;overflow-x:auto;margin:16px 0 4px;padding-bottom:6px;}
.tm-gallery::-webkit-scrollbar{height:5px;}
.tm-gallery::-webkit-scrollbar-thumb{background:rgba(var(--tm-ac-rgb),.35);border-radius:999px;}
.tm-gallery img{height:84px;width:auto;border-radius:8px;flex:0 0 auto;object-fit:cover;}
.tm-detail-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px;}
.tm-detail-actions .tm-btn{width:auto;flex:1;min-width:110px;}
.tm-close{position:absolute;top:12px;right:12px;background:rgba(12,33,67,.85);border:1px solid rgba(255,255,255,.18);border-radius:50%;width:34px;height:34px;font-size:18px;line-height:1;cursor:pointer;color:#fff;z-index:11;}

.tm-village{display:flex;flex-direction:column;align-items:center;cursor:pointer;}
.tm-village-card{position:relative;background:linear-gradient(180deg,rgba(10,24,48,.97),rgba(7,18,38,.97));border:1px solid rgba(var(--tm-ac-rgb),.5);border-radius:10px;padding:7px 12px;text-align:center;box-shadow:0 8px 20px rgba(7,17,31,.5);white-space:nowrap;margin-bottom:7px;}
.tm-village-card::after{content:'';position:absolute;bottom:-5px;left:50%;transform:translateX(-50%) rotate(45deg);width:9px;height:9px;background:rgba(7,18,38,.97);border-right:1px solid rgba(var(--tm-ac-rgb),.5);border-bottom:1px solid rgba(var(--tm-ac-rgb),.5);}
.tm-village-eyebrow{display:block;font-size:8px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--tm-ac);}
.tm-village-title{display:block;font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;font-size:15px;color:#fff;line-height:1;margin:2px 0;}
.tm-village-dates{display:block;font-size:9px;font-weight:700;color:${JAUNE};}
.tm-village-masc{width:60px;height:auto;filter:drop-shadow(0 6px 10px rgba(7,17,31,.5));transition:transform .2s ease;}
.tm-village:hover .tm-village-masc{transform:translateY(-2px) scale(1.04);}
.tm-village-point{margin-top:2px;color:var(--tm-ac);filter:drop-shadow(0 2px 5px rgba(7,17,31,.5));}
.tm-village-point svg{width:17px;height:17px;display:block;}
.tm-village-min .tm-village-card{display:none;}
.tm-village-min .tm-village-masc{width:42px;}
.tm-village-min .tm-village-point{margin-top:0;}
.tm-village-min .tm-village-point svg{width:13px;height:13px;}
.tm-current{display:flex;flex-direction:column;align-items:center;pointer-events:none;}
.tm-current-bubble{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;background:${NAVY};padding:8px 15px;border-radius:12px;white-space:nowrap;border:1px solid rgba(255,255,255,.1);box-shadow:0 6px 18px rgba(7,17,31,.5);margin-bottom:6px;}
.tm-current-bubble::after{content:'';position:absolute;bottom:-5px;left:50%;transform:translateX(-50%) rotate(45deg);width:9px;height:9px;background:${NAVY};border-right:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);}
.tm-cur-eyebrow{font-family:'Varien',sans-serif;font-style:italic;text-transform:uppercase;font-size:11px;letter-spacing:.03em;line-height:1;}
.tm-cur-ici .tm-cur-eyebrow{color:${JAUNE};}
.tm-cur-route .tm-cur-eyebrow{color:var(--tm-ac);}
.tm-cur-info{font-size:12px;font-weight:700;color:#fff;line-height:1.15;}
.tm-current img{width:50px;height:auto;display:block;filter:drop-shadow(0 5px 8px rgba(7,17,31,.55));animation:tmBob 2.4s ease-in-out infinite;}
@keyframes tmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}









.tm-outils{position:absolute;left:370px;bottom:14px;z-index:6;display:flex;align-items:center;gap:8px;}
.tm-trace-btn{position:static;display:inline-flex;align-items:center;gap:7px;background:linear-gradient(180deg,rgba(10,24,48,.95),rgba(7,18,38,.95));border:1px solid rgba(255,255,255,.14);color:rgba(255,255,255,.6);border-radius:999px;padding:8px 13px;font-family:inherit;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;cursor:pointer;box-shadow:0 6px 16px rgba(7,17,31,.4);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}
.tm-trace-btn svg{width:15px;height:15px;flex:0 0 auto;}



.tm-trace-btn[hidden]{display:none;}
.tm-trace-btn.tm-on{border-color:rgba(var(--tm-ac-rgb),.55);color:var(--tm-ac);}





.tm-langue{position:relative;flex:0 0 auto;}
.tm-langue[hidden]{display:none;}




.tm-langue-btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border-radius:50%;background:rgba(7,18,38,.72);border:1px solid rgba(255,255,255,.18);cursor:pointer;overflow:hidden;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:border-color .18s,box-shadow .18s;}
.tm-langue-btn .tm-drapeau{width:19px;height:13px;border-radius:2.5px;display:block;box-shadow:0 0 0 1px rgba(255,255,255,.28);filter:saturate(.85);transition:filter .18s;}
.tm-langue-btn:hover,.tm-langue-btn[aria-expanded="true"]{border-color:rgba(255,255,255,.45);box-shadow:0 0 0 3px rgba(255,255,255,.08);}
.tm-langue-btn:hover .tm-drapeau,.tm-langue-btn[aria-expanded="true"] .tm-drapeau{filter:none;}
.tm-langue-btn:focus-visible{outline:2px solid #fff;outline-offset:2px;}
 
.tm-langue-menu{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);min-width:136px;padding:4px;border-radius:13px;background:rgba(9,22,44,.96);border:1px solid rgba(255,255,255,.14);box-shadow:0 14px 34px rgba(7,17,31,.5);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);}
.tm-langue-menu[hidden]{display:none;}
.tm-langue-item{display:flex;align-items:center;gap:10px;padding:8px 12px 8px 9px;border-radius:9px;font-family:inherit;font-size:12px;font-weight:600;color:rgba(255,255,255,.76);text-decoration:none;white-space:nowrap;transition:background .15s,color .15s;}
.tm-langue-item .tm-drapeau{width:22px;height:15px;flex:0 0 auto;border-radius:3px;display:block;box-shadow:0 0 0 1px rgba(255,255,255,.2);}
.tm-langue-item:hover{background:rgba(255,255,255,.1);color:#fff;}
.tm-langue-item:focus-visible{outline:2px solid #fff;outline-offset:-2px;}



.tm-langue-item[aria-current="true"]{color:#fff;background:rgba(255,255,255,.1);box-shadow:inset 2px 0 0 var(--tm-ac);}
.tm-devbar{position:absolute;bottom:14px;left:146px;z-index:7;display:flex;align-items:center;gap:5px;background:rgba(7,18,38,.72);border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:4px;box-shadow:0 4px 12px rgba(7,17,31,.32);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);opacity:.85;transition:opacity .2s;}
.tm-devbar:hover,.tm-devbar.tm-dev-open{opacity:1;}
.tm-devtoggle{width:30px;height:30px;border-radius:50%;border:0;background:rgba(255,255,255,.08);color:#fff;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 auto;}
.tm-devbar.tm-dev-open .tm-devtoggle{background:var(--tm-ac);}
.tm-devbtns{display:none;align-items:center;gap:4px;padding-right:4px;}
.tm-devbar.tm-dev-open .tm-devbtns{display:flex;}
.tm-devbtn{font-size:10px;font-weight:700;padding:5px 9px;border-radius:999px;border:1px solid transparent;background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);cursor:pointer;font-family:inherit;white-space:nowrap;}
.tm-devbtn.tm-on{background:var(--tm-ac);color:${NAVY};}










 



.tm-root .maplibregl-ctrl-bottom-right{margin-right:calc(380px + 14px);margin-bottom:14px;
  display:flex;flex-direction:row-reverse;align-items:center;gap:8px;}
.tm-root .maplibregl-ctrl-bottom-left{display:none;}










.tm-root .maplibregl-ctrl-group{display:flex;flex-direction:row-reverse;align-items:center;
  margin:0;border:1px solid rgba(255,255,255,.18);border-radius:999px;
  background:rgba(7,18,38,.72);box-shadow:0 6px 16px rgba(7,17,31,.4);
  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);overflow:hidden;}
.tm-root .maplibregl-ctrl-group button{width:36px;height:32px;background:none;border:0;
  border-radius:0;}


.tm-root .maplibregl-ctrl-group button + button{box-shadow:inset -1px 0 0 rgba(255,255,255,.16);}
.tm-root .maplibregl-ctrl-group button:hover{background:rgba(255,255,255,.08);}
.tm-root .maplibregl-ctrl-group button:focus-visible{outline:2px solid #fff;outline-offset:-2px;}


.tm-root .maplibregl-ctrl-group button .maplibregl-ctrl-icon{filter:invert(1) brightness(1.6);
  opacity:.82;}
.tm-root .maplibregl-ctrl-group button:hover .maplibregl-ctrl-icon{opacity:1;}




.maplibregl-ctrl-attrib{font-size:9px;}
.tm-root .maplibregl-ctrl-attrib.maplibregl-compact{position:relative;z-index:2;margin:0;
  background:rgba(7,18,38,.72);color:rgba(255,255,255,.72);
  border:1px solid rgba(255,255,255,.18);box-shadow:0 6px 16px rgba(7,17,31,.4);
  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}
.tm-root .maplibregl-ctrl-attrib.maplibregl-compact:not(.maplibregl-compact-show){width:32px;height:32px;
  min-height:0;padding:0;border-radius:50%;}








.tm-root .maplibregl-ctrl-attrib-button{width:32px;height:32px;border-radius:50%;opacity:.72;
  filter:none;background-color:transparent;background-repeat:no-repeat;
  background-position:center;background-size:17px 17px;
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%272%27 stroke-linecap=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%279%27/%3E%3Cpath d=%27M12 11.4v4.8%27/%3E%3Cpath d=%27M12 7.9h.01%27/%3E%3C/svg%3E");}
.tm-root .maplibregl-ctrl-attrib:hover .maplibregl-ctrl-attrib-button{opacity:1;}
.tm-root .maplibregl-ctrl-attrib-button:hover{opacity:1;}






.tm-root .maplibregl-ctrl-attrib.maplibregl-compact-show{z-index:19;display:flex;align-items:center;
  min-height:0;height:auto;max-width:none;width:auto;
  padding:8px 38px 9px 12px;border-radius:16px 3px 12px 3px;
  color:rgba(255,255,255,.78);font-size:10.5px;line-height:1.45;white-space:nowrap;}
.tm-root .maplibregl-ctrl-attrib.maplibregl-compact-show a{color:var(--tm-ac);text-decoration:underline;
  text-underline-offset:2px;}
.tm-root .maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-button{position:absolute;
  right:6px;top:50%;transform:translateY(-50%);margin:0;opacity:1;}
.tm-attsep{margin:0 3px;color:rgba(255,255,255,.4);}




@media (min-width:1025px){
  .tm-root .maplibregl-ctrl-attrib.maplibregl-compact-show{position:absolute;right:0;bottom:42px;}
}


@media (max-width:1200px) and (min-width:1025px){
  .tm-root .maplibregl-ctrl-attrib.maplibregl-compact-show{white-space:normal;
    max-width:min(340px,calc(100vw - 420px));}
}
.tm-handle{display:none;}
.tm-scrim{display:none;}
.tm-sheet-masc{display:none;}
.tm-sheet-close{display:none;}
.tm-tabbar{display:none;}
.tm-filterpill{display:none;position:absolute;top:14px;left:50%;transform:translateX(-50%);z-index:15;align-items:center;gap:8px;background:var(--tm-ac);border:0;color:${NAVY};border-radius:999px;padding:10px 17px;font-family:inherit;font-size:11.5px;font-weight:800;cursor:pointer;box-shadow:0 8px 24px rgba(7,17,31,.45);white-space:nowrap;text-transform:uppercase;letter-spacing:.03em;}
.tm-filterpill svg{width:15px;height:15px;color:${NAVY};flex:0 0 auto;}
.tm-filterpill b{text-decoration:underline;}
.tm-filterpill:hover{filter:brightness(1.06);}
tournee-map.tm-filtered .tm-filterpill{display:inline-flex;}



















@media (max-width:1024px), (max-height:520px){
  .tm-mascotte{display:none;}
  .tm-handle{display:block;width:40px;height:5px;border-radius:999px;background:rgba(255,255,255,.28);margin:9px auto 2px;flex:0 0 auto;}

  .tm-scrim{display:block;position:absolute;inset:0;background:rgba(5,12,26,.45);opacity:0;pointer-events:none;transition:opacity .25s ease;z-index:8;}
  .tm-scrim.tm-show{opacity:1;pointer-events:auto;}
  


  .tm-scrim.tm-sur-feuille{z-index:12;background:rgba(5,12,26,.6);}

  .tm-panel,.tm-side{position:absolute;left:0;right:0;bottom:0;top:auto;width:100%;max-width:100%;border-radius:22px 22px 0 0;transform:translateY(108%);transition:transform .34s cubic-bezier(.22,1,.36,1);z-index:9;display:flex;flex-direction:column;}
  .tm-panel.tm-sheet-open,.tm-side.tm-sheet-open{transform:translateY(0);}
  .tm-panel{padding:0;overflow:visible;}
  .tm-panel-body{max-height:88vh;max-height:88dvh;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:6px 16px calc(96px + env(safe-area-inset-bottom));}
  .tm-sheet-masc{display:block;position:absolute;top:-44px;right:50px;width:118px;height:auto;z-index:6;pointer-events:none;filter:drop-shadow(0 10px 14px rgba(7,17,31,.5));}
  .tm-panel::before,.tm-side::before{left:18px;right:18px;border-radius:999px;}
  .tm-sheet-close{display:flex;align-items:center;justify-content:center;top:10px;right:8px;width:32px;height:32px;z-index:14;}
  .tm-panel h2{font-size:23px;padding-right:130px;}
  .tm-panel .tm-eyebrow{margin-top:2px;padding-right:130px;}
  .tm-panel .tm-sub{padding-right:130px;}
  .tm-side .tm-head-top{padding-right:130px;}
  .tm-side{height:86vh;height:86dvh;max-height:86vh;max-height:86dvh;overflow:visible;}
  .tm-side-head{padding:2px 16px 12px;}
  .tm-head-top{padding-right:0;}
  .tm-list{padding:0 16px calc(96px + env(safe-area-inset-bottom));overflow-y:auto;-webkit-overflow-scrolling:touch;flex:1;}

  



  .tm-filtres{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:9px;}
  .tm-chip{min-height:34px;padding:7px 11px;font-size:10.5px;letter-spacing:.04em;gap:6px;}
  .tm-chip::before{width:7px;height:7px;}
  .tm-geo{padding:13px;}
  .tm-search{padding:12px 14px;font-size:15px;}
  .tm-field input,.tm-datefield{min-height:48px;}

  



  .tm-tabbar{display:inline-flex;position:absolute;left:auto;right:12px;bottom:calc(10px + env(safe-area-inset-bottom));z-index:12;gap:4px;width:auto;max-width:calc(100% - 88px);overflow:hidden;background:linear-gradient(180deg,rgba(10,24,48,.97),rgba(7,18,38,.97));border:1px solid rgba(var(--tm-ac-rgb),.22);border-radius:14px;padding:5px;box-shadow:0 10px 30px rgba(7,17,31,.5);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);}
  

  .tm-tab{flex:0 1 auto;min-width:0;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:6px;background:transparent;border:0;color:rgba(255,255,255,.66);font-family:inherit;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.02em;padding:0 11px;border-radius:11px;cursor:pointer;min-height:44px;white-space:nowrap;transition:background .18s,color .18s;}
  .tm-tab svg{width:17px;height:17px;flex:0 0 auto;}
  .tm-tab span{min-width:0;overflow:hidden;text-overflow:ellipsis;}
  




  @media (max-width:400px){
    .tm-tab{font-size:9px;padding:0 8px;gap:5px;}
    .tm-tab svg{width:15px;height:15px;}
  }
  .tm-tab.tm-active{background:rgba(var(--tm-ac-rgb),.18);color:var(--tm-ac);}

  .tm-detail{position:absolute;left:0;right:0;width:100%;bottom:0;border-radius:22px 22px 0 0;transform:translateY(100%);z-index:13;overflow:visible;}
  .tm-detail.tm-open{transform:translateY(0);}
  .tm-dhandle{display:block;position:absolute;top:8px;left:50%;transform:translateX(-50%);z-index:11;width:42px;height:5px;border-radius:999px;background:rgba(255,255,255,.42);margin:0;}
  



  .tm-detail-scroll{max-height:54vh;max-height:54dvh;border-radius:22px 22px 0 0;padding-top:6px;}
  





  .tm-detail-body{padding:24px 18px calc(84px + env(safe-area-inset-bottom));}
  .tm-detail-body h3{font-size:28px;padding-right:130px;}
  .tm-detail-hero{height:190px;}
  .tm-detail-masc{width:118px;top:-44px;bottom:auto;right:50px;}
  .tm-close{top:10px;right:8px;}

  .tm-detail-actions{flex-wrap:wrap;gap:9px;}
  .tm-detail-actions .tm-btn{min-height:50px;}
  .tm-detail-actions .tm-btn-primary{order:-1;flex:0 0 100%;width:100%;}
  .tm-detail-actions .tm-btn-ghost{flex:1;}

  .tm-datechip{padding:8px 15px;font-size:13px;min-height:40px;}
  .tm-anim{padding:11px;}
  .tm-anim-img{width:64px;height:64px;}

  .tm-slide{flex:0 0 78%;height:200px;}
  .tm-car-arrow{width:34px;height:34px;font-size:19px;opacity:.9;}


  .tm-lb-close{top:calc(14px + env(safe-area-inset-top));right:14px;width:44px;height:44px;}
  .tm-lb-nav{width:44px;height:44px;}
  .tm-lb-prev{left:10px;}
  .tm-lb-next{right:10px;}
  .tm-lb-counter{bottom:calc(18px + env(safe-area-inset-bottom));}

   
  .tm-panel .tm-switch{display:none;}
  




  .tm-topbar{position:absolute;top:calc(12px + env(safe-area-inset-top));left:12px;right:12px;max-width:none;gap:6px;z-index:15;}
  


  .tm-retour{padding:0 12px;}
  .tm-retour > span{display:none;}
  .tm-switch-flottant{display:flex;flex:1;min-width:0;position:static;width:auto;max-width:none;margin:0;background:rgba(9,26,52,.8);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 8px 24px rgba(7,17,31,.42);}
   
  


  .tm-switch-flottant .tm-switch-btn{flex:1;min-width:0;min-height:44px;gap:7px;padding:10px 9px;font-size:11.5px;overflow:hidden;}
  .tm-switch-flottant .tm-switch-illu{width:22px;height:22px;}
  



  .tm-switch-flottant .tm-switch-btn > span{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.18;text-align:left;}
  


  .tm-scrim.tm-show ~ .tm-topbar,
  .tm-scrim.tm-show ~ .tm-outils,
  .tm-scrim.tm-show ~ .tm-outils > *{opacity:0;pointer-events:none;transition:opacity .25s ease;}
   
  .tm-filterpill{top:calc(66px + env(safe-area-inset-top));font-size:12px;padding:10px 16px;transition:opacity .2s ease;}
  tournee-map.tm-un-parcours .tm-filterpill{top:calc(12px + env(safe-area-inset-top));}
  .tm-scrim.tm-show ~ .tm-filterpill{opacity:0;pointer-events:none;}
   
  .tm-close{width:40px;height:40px;font-size:20px;}
  

  .maplibregl-ctrl-group button{width:42px;height:42px;}
  .maplibregl-ctrl-group button .maplibregl-ctrl-icon{background-size:20px 20px;}
  

  input[type=range]{height:34px;}
  .tm-trace-btn{min-height:42px;}
  .tm-geo{min-height:46px;}
  



  .tm-root .maplibregl-ctrl-bottom-right{margin-right:10px;margin-bottom:calc(148px + env(safe-area-inset-bottom));}
  .tm-root .maplibregl-ctrl-attrib.maplibregl-compact-show{white-space:normal;
    max-width:calc(100vw - 32px);}
  .tm-root .maplibregl-ctrl-bottom-left{margin-bottom:calc(148px + env(safe-area-inset-bottom));}
  

  



  


  


  


  .tm-outils{display:contents;}
  .tm-langue{position:absolute;top:calc(82px + env(safe-area-inset-top));left:12px;bottom:auto;z-index:12;}
  



  tournee-map.tm-plein-ecran .tm-topbar,
  tournee-map.tm-plein-ecran .tm-tabbar,
  tournee-map.tm-plein-ecran .tm-langue,
  tournee-map.tm-plein-ecran .tm-trace-btn,
  tournee-map.tm-plein-ecran .tm-scrim,
  tournee-map.tm-plein-ecran .tm-panel,
  tournee-map.tm-plein-ecran .tm-side,
  tournee-map.tm-plein-ecran .tm-detail{position:fixed;}
  

  .tm-langue-menu{bottom:auto;top:calc(100% + 8px);left:0;transform:none;}
  .tm-langue-btn{width:34px;height:34px;}
  .tm-trace-btn{position:absolute;top:calc(82px + env(safe-area-inset-top));bottom:auto;left:auto;right:12px;z-index:12;padding:7px 12px;font-size:9.5px;letter-spacing:.05em;gap:6px;}
  .tm-trace-btn svg{width:13px;height:13px;}
  .tm-devbar{top:calc(12px + env(safe-area-inset-top));left:12px;bottom:auto;}
  .tm-devbar.tm-dev-open{flex-wrap:wrap;max-width:80vw;}
}




















@media (min-width:769px) and (max-width:1024px) and (orientation:portrait){
  




  












  .tm-panel,.tm-side,.tm-scrim,.tm-tabbar{position:fixed;}

  .tm-tabbar{left:50%;right:auto;transform:translateX(-50%);
    bottom:calc(20px + env(safe-area-inset-bottom));max-width:none;
    gap:6px;padding:6px;border-radius:16px;}
  .tm-tab{min-height:52px;padding:0 22px;font-size:12.5px;letter-spacing:.04em;}
  .tm-tab svg{width:17px;height:17px;}

  




  .tm-panel,.tm-side{max-width:min(680px,calc(100% - 40px));margin-inline:auto;}

  

  .tm-panel.tm-sheet-open,.tm-side.tm-sheet-open{z-index:14;}

  

  .tm-sheet-masc{width:96px;top:-38px;right:18px;}
}

@media (max-height:520px) and (orientation:landscape){
  .tm-topbar{max-width:min(600px,calc(100% - 24px));right:auto;}
  .tm-switch-flottant{flex:0 1 auto;}
  .tm-switch-flottant .tm-switch-btn{flex:0 1 auto;min-height:38px;padding:7px 12px;font-size:11px;}
  .tm-switch-flottant .tm-switch-btn > span{-webkit-line-clamp:1;white-space:nowrap;}
  .tm-switch-flottant .tm-switch-illu{width:19px;height:19px;}
  .tm-retour{padding:0 11px;}
  .tm-trace-btn,.tm-outils{top:calc(64px + env(safe-area-inset-top));}
}






tournee-map[data-parcours="trophee"] .tm-mascotte{width:96px;top:2px;right:14px;}
tournee-map[data-parcours="trophee"] .tm-detail-masc{width:84px;bottom:calc(100% - 40px);right:56px;}
tournee-map[data-parcours="trophee"] .tm-sheet-masc{width:86px;top:-34px;right:60px;}
tournee-map[data-parcours="trophee"] .tm-empty img{width:68px;}
tournee-map[data-parcours="trophee"] .tm-current img{width:44px;}
`;
        document.head.appendChild(style);
    }

     
    _buildDom() {
        this.innerHTML = `
<div class="tm-root"></div>
<div class="tm-panel tm-glass">
  <div class="tm-handle" data-act="handle"></div>
  <img class="tm-sheet-masc" src="${TYMAL.pouce}" alt="">
  <button class="tm-close tm-sheet-close" data-act="handle">×</button>
  <div class="tm-panel-body">
  <div class="tm-switch" data-el="switch" role="group" data-ta="choisir_parcours" hidden></div>
  <div class="tm-eyebrow"><span class="tm-dot"></span><span data-el="eyebrowTxt"></span></div>
  <h2 class="tm-title" data-el="panelTitre"></h2>
  <p class="tm-sub" data-el="panelSub"></p>
  <button class="tm-geo" data-act="geoloc" data-t="geoloc"></button>
  <div class="tm-field">
    <span class="tm-label" data-t="ou_ville"></span>
    <input type="text" data-f="ville" data-tph="ville_ph" autocomplete="off">
  </div>
  <div class="tm-dates">
    <button type="button" class="tm-datefield" data-el="duField"><span class="tm-label" data-t="du"></span><span class="tm-datefield-row">${ICON_CAL}<span class="tm-dateval empty" data-el="duVal">—</span></span></button>
    <button type="button" class="tm-datefield" data-el="auField"><span class="tm-label" data-t="au"></span><span class="tm-datefield-row">${ICON_CAL}<span class="tm-dateval empty" data-el="auVal">—</span></span></button>
  </div>
  <div class="tm-cal" data-el="cal"></div>
  <div class="tm-row"><span class="tm-label" data-t="rayon"></span><span class="tm-rayon-val" data-el="rayonVal">${RAYON_DEFAUT} km</span></div>
  <input type="range" min="5" max="200" step="5" value="${RAYON_DEFAUT}" data-f="rayon">
  <button class="tm-btn tm-btn-primary" data-act="match" data-t="chercher" style="margin-top:13px;"></button>
  <div class="tm-result" data-el="result"></div>
  </div>
</div>
<img class="tm-mascotte" src="${TYMAL.pouce}" alt="" aria-hidden="true">
<div class="tm-side tm-glass">
  <div class="tm-handle" data-act="handle"></div>
  <img class="tm-sheet-masc" src="${TYMAL.pouce}" alt="">
  <button class="tm-close tm-sheet-close" data-act="handle">×</button>
  <div class="tm-side-head">
    <div class="tm-head-top">
      <h3 class="tm-title" data-el="listeTitre"></h3>
      <div class="tm-filtres">
        <button class="tm-chip tm-active" data-filtre="tous" data-t="f_tous"></button>
        <button class="tm-chip" data-filtre="a_venir" data-t="f_a_venir"></button>
        <button class="tm-chip" data-filtre="en_cours" data-t="f_en_cours"></button>
        <button class="tm-chip" data-filtre="passe" data-t="f_passe"></button>
      </div>
    </div>
    <input type="text" class="tm-search" data-f="recherche" data-tph="rechercher_ph">
  </div>
  <div class="tm-list" data-el="list"></div>
</div>
<div class="tm-detail" data-el="detail">
  <div class="tm-handle tm-dhandle" data-el="detailHandle"></div>
  <button class="tm-close" data-act="closeDetail">×</button>
  <img class="tm-detail-masc" data-el="detailMascotte" src="" alt="" aria-hidden="true">
  <div class="tm-detail-scroll tm-glass" data-el="detailContent"></div>
</div>
<div class="tm-agenda" data-el="agenda">
  <div class="tm-agenda-card tm-glass">
    <button class="tm-close" data-act="fermerAgenda">×</button>
    <h4 data-t="ag_titre"></h4>
    <a class="tm-agenda-choix" data-el="agGoogle" href="#" target="_blank" rel="noopener noreferrer" data-t="ag_google"></a>
    <a class="tm-agenda-choix" data-el="agOutlook" href="#" target="_blank" rel="noopener noreferrer" data-t="ag_outlook"></a>
    <button class="tm-agenda-choix" data-act="agendaIcs" data-t="ag_autre"></button>
    <p class="tm-agenda-note" data-t="ag_note"></p>
  </div>
</div>
<div class="tm-agenda" data-el="itineraire">
  <div class="tm-agenda-card tm-glass">
    <button class="tm-close" data-act="fermerItineraire">×</button>
    <h4 data-t="it_titre"></h4>
    <a class="tm-agenda-choix" data-el="itGoogle" href="#" target="_blank" rel="noopener noreferrer" data-t="it_google"></a>
    <a class="tm-agenda-choix" data-el="itWaze" href="#" target="_blank" rel="noopener noreferrer" data-t="it_waze"></a>
    <a class="tm-agenda-choix" data-el="itPlans" href="#" target="_blank" rel="noopener noreferrer" data-t="it_plans"></a>
    <p class="tm-agenda-note" data-t="it_note"></p>
  </div>
</div>
<div class="tm-lightbox" data-el="lightbox">
  <button class="tm-lb-close" data-act="lbClose">×</button>
  <button class="tm-lb-nav tm-lb-prev" data-act="lbPrev">‹</button>
  <div class="tm-lb-stage" data-el="lbStage"></div>
  <button class="tm-lb-nav tm-lb-next" data-act="lbNext">›</button>
  <div class="tm-lb-counter" data-el="lbCounter"></div>
</div>
<div class="tm-scrim" data-act="scrim"></div>
<div class="tm-tabbar">
  <button class="tm-tab" data-sheet="match">${ICON_TARGET}<span data-el="tabMatch"></span></button>
  <button class="tm-tab" data-sheet="etapes">${ICON_LIST}<span data-el="tabListe"></span></button>
</div>
<div class="tm-topbar">
  <a class="tm-retour" data-el="retour" href="${RETOUR_DEFAUT}" title="" data-ta="retour_titre">${ICON_RETOUR}<span data-t="retour"></span></a>
  <div class="tm-switch tm-switch-flottant" data-el="switch" role="group" data-ta="choisir_parcours" hidden></div>
</div>
<button class="tm-filterpill" data-act="clearAll">${ICON_FUNNEL}<span data-el="filtrePill"></span></button>
<div class="tm-outils">
  <button class="tm-trace-btn" data-act="trace" data-el="traceBtn">${ICON_ROUTE}<span data-t="trace"></span></button>
  <div class="tm-langue" data-el="langue" hidden>
    <button class="tm-langue-btn" type="button" data-act="langue" data-el="langueBtn" aria-haspopup="true" aria-expanded="false"></button>
    <div class="tm-langue-menu" data-el="langueMenu" role="menu" hidden>
      <a class="tm-langue-item" data-el="langueFr" role="menuitem" href="#" lang="fr" hreflang="fr">${DRAPEAU_FR('menu')}<span>Français</span></a>
      <a class="tm-langue-item" data-el="langueEn" role="menuitem" href="#" lang="en" hreflang="en">${DRAPEAU_EN('menu')}<span>English</span></a>
    </div>
  </div>
</div>${DEMO ? '<div class="tm-devbar tm-dev-open"><button class="tm-devtoggle" data-act="devToggle" title="Test Tymal">🧪</button><div class="tm-devbtns"><button class="tm-devbtn tm-on" data-act="dev" data-mode="auto">Auto</button><button class="tm-devbtn" data-act="dev" data-mode="ici">Ici</button><button class="tm-devbtn" data-act="dev" data-mode="route">En route</button><button class="tm-devbtn" data-act="dev" data-mode="avant">Avant départ</button></div></div>' : ''}`;
    }

     
     
     
    _cmsOuDict(valeurCms, cle) {
        const v = String(valeurCms || '').trim();
        if (this._lang === LANGUE_DEFAUT && v) return v;
        return this._t(cle) || v;
    }

    _q(sel) { return this.querySelector(sel); }

    _bindUI() {
        this.addEventListener('click', (ev) => {
            const actEl = ev.target.closest('[data-act]');
            const act = actEl ? actEl.getAttribute('data-act') : null;
            if (act === 'parcours') {
                const cle = actEl.getAttribute('data-cle');
                if (cle && cle !== this._cleActive) this._appliquerParcours(cle);
            }
            if (act === 'geoloc') this._geoloc();
            if (act === 'match') this._matching();
            if (act === 'closeDetail') this._fermerDetail();
            if (act === 'handle') this._closeSheets();
            if (act === 'devToggle') { const db = this._q('.tm-devbar'); if (db) db.classList.toggle('tm-dev-open'); }
            if (act === 'scrim') { const d = this._q('[data-el=detail]'); if (d && d.classList.contains('tm-open')) this._fermerDetail(); else this._closeSheets(); }
            if (act === 'clearGroup') this._clearGroup();
            if (act === 'clearAll') this._clearAll();
            if (act === 'trace') this._toggleTrace();
            if (act === 'langue') this._basculerLangue();
            if (act === 'creneau') { this._creneauIdx = +actEl.getAttribute('data-i'); this._renderDetailBody(); }
            if (act === 'anim') { const cd = actEl.closest('.tm-anim'); if (cd) cd.classList.toggle('tm-anim-open'); }
            if (act === 'itineraire') this._itineraire(this._detailEtape);
            if (act === 'agenda') this._ouvrirAgenda(this._villageOuvert ? this._etapeVillage() : this._detailEtape);
            if (act === 'fermerAgenda') this._fermerAgenda();
            if (act === 'fermerItineraire') this._fermerItineraire();
            if (act === 'agendaIcs') { this._agenda(this._agendaCible || this._detailEtape); this._fermerAgenda(); }
            if (act === 'dev') { const m = actEl.getAttribute('data-mode'); this._forceCurrent = (m === 'auto') ? null : m; this.querySelectorAll('.tm-devbtn').forEach((b) => b.classList.toggle('tm-on', b === actEl)); this._addCurrent(); }
            if (act === 'lightbox') this._openLightbox(this._detailGallery, +actEl.getAttribute('data-i'));
            if (act === 'lbClose') this._closeLightbox();
            if (act === 'lbPrev') this._lightboxNav(-1);
            if (act === 'lbNext') this._lightboxNav(1);
            if (act === 'carPrev' || act === 'carNext') { const tr = this._q('[data-el=carTrack]'); if (tr) tr.scrollBy({ left: (act === 'carNext' ? 1 : -1) * tr.clientWidth * 0.62, behavior: 'smooth' }); }
            const tab = ev.target.closest('.tm-tab');
            if (tab) this._openSheet(tab.getAttribute('data-sheet'));
            const chip = ev.target.closest('.tm-chip');
            if (chip) this._setFiltre(chip.getAttribute('data-filtre'));
            if (!ev.target.closest('.tm-cal') && !ev.target.closest('.tm-datefield')) this._closeCal();
            if (!ev.target.closest('.tm-langue')) this._fermerLangue();
        });
        const rayon = this._q('[data-f=rayon]');
        if (rayon) rayon.addEventListener('input', () => { this._q('[data-el=rayonVal]').textContent = rayon.value + ' km'; });
        const rech = this._q('[data-f=recherche]');
        if (rech) rech.addEventListener('input', () => { this._recherche = rech.value.trim().toLowerCase(); this._refresh(); });
        const detail = this._q('[data-el=detail]');
        if (detail) detail.addEventListener('click', (ev) => { if (ev.target === detail) this._fermerDetail(); });
        const lb = this._q('[data-el=lightbox]');
        if (lb) lb.addEventListener('click', (ev) => { if (!ev.target.closest('[data-act]') && !ev.target.closest('[data-el=lbStage]')) this._closeLightbox(); });
         
         
         
        this._onKey = (ev) => {
            if (ev.key === 'Escape') this._fermerLangue();
            const box = this._q('[data-el=lightbox]');
            if (!box || !box.classList.contains('tm-open')) return;
            if (ev.key === 'Escape') this._closeLightbox();
            else if (ev.key === 'ArrowLeft') this._lightboxNav(-1);
            else if (ev.key === 'ArrowRight') this._lightboxNav(1);
        };
        window.addEventListener('keydown', this._onKey);
         
         
        this._onDocClick = (ev) => { if (!this.contains(ev.target)) this._fermerLangue(); };
        document.addEventListener('click', this._onDocClick);

        const duF = this._q('[data-el=duField]'), auF = this._q('[data-el=auField]');
        if (duF) duF.addEventListener('click', (e) => { e.stopPropagation(); this._openCal('du'); });
        if (auF) auF.addEventListener('click', (e) => { e.stopPropagation(); this._openCal('au'); });
        const cal = this._q('[data-el=cal]');
        if (cal) cal.addEventListener('click', (e) => {
            e.stopPropagation();
            const nav = e.target.getAttribute('data-cal');
            if (nav === 'prev') { this._calRef = new Date(this._calRef.getFullYear(), this._calRef.getMonth() - 1, 1); return this._renderCal(); }
            if (nav === 'next') { this._calRef = new Date(this._calRef.getFullYear(), this._calRef.getMonth() + 1, 1); return this._renderCal(); }
            if (nav === 'clear') { this._du = null; this._au = null; this._updateDateFields(); return this._renderCal(); }
            if (nav === 'close') { return this._closeCal(); }
            const day = e.target.getAttribute('data-day');
            if (day) this._pickDay(new Date(this._calRef.getFullYear(), this._calRef.getMonth(), parseInt(day, 10)));
        });
        this._bindMobileGestures();
        if (window.innerWidth <= 768) { const db = this._q('.tm-devbar'); if (db) db.classList.remove('tm-dev-open'); }
    }

     
    _openCal(which) {
        this._calRef = this._du ? new Date(this._du) : new Date();
        this._renderCal();
        this._q('[data-el=cal]').classList.add('open');
    }
    _closeCal() { const c = this._q('[data-el=cal]'); if (c) c.classList.remove('open'); }

    _pickDay(d) {
        const day = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        if (!this._du || (this._du && this._au)) { this._du = day; this._au = null; }
        else if (day.getTime() >= this._du.getTime()) { this._au = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59); }
        else { this._du = day; this._au = null; }
        this._updateDateFields();
        this._renderCal();
        if (this._du && this._au) setTimeout(() => this._closeCal(), 280);
    }

    _renderCal() {
        const cal = this._q('[data-el=cal]');
        if (!cal) return;
        const y = this._calRef.getFullYear(), m = this._calRef.getMonth();
        const first = new Date(y, m, 1);
        const startDow = (first.getDay() + 6) % 7;
        const nbDays = new Date(y, m + 1, 0).getDate();
        const moisFR = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(first);
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const du = this._du ? this._du.getTime() : null;
        const au = this._au ? new Date(this._au.getFullYear(), this._au.getMonth(), this._au.getDate()).getTime() : null;
        let cells = '';
        for (let i = 0; i < startDow; i++) cells += '<div class="tm-cal-day empty"></div>';
        for (let dn = 1; dn <= nbDays; dn++) {
            const t = new Date(y, m, dn).getTime();
            let cls = 'tm-cal-day';
            if (t === today.getTime()) cls += ' today';
            if (du && au && t > du && t < au) cls += ' in-range';
            const isStart = du && t === du, isEnd = au && t === au;
            if (isStart || isEnd) { cls += ' edge'; if (isStart && isEnd) cls += ' single'; else if (isStart) cls += ' start'; else cls += ' end'; }
            cells += '<div class="' + cls + '" data-day="' + dn + '">' + dn + '</div>';
        }
        cal.innerHTML = `<div class="tm-cal-head"><button class="tm-cal-nav" data-cal="prev">‹</button><span class="tm-cal-title">${moisFR}</span><button class="tm-cal-nav" data-cal="next">›</button></div>
<div class="tm-cal-grid">${DOWS.map((d) => '<div class="tm-cal-dow">' + d + '</div>').join('')}${cells}</div>
<div class="tm-cal-foot"><button class="tm-cal-link" data-cal="clear">Effacer</button><button class="tm-cal-link" data-cal="close">Fermer</button></div>`;
    }

    _updateDateFields() {
        const dv = this._q('[data-el=duVal]'), av = this._q('[data-el=auVal]');
        if (dv) { dv.textContent = this._du ? this._fmtJJMM(this._du) : '—'; dv.classList.toggle('empty', !this._du); }
        if (av) { av.textContent = this._au ? this._fmtJJMM(this._au) : '—'; av.classList.toggle('empty', !this._au); }
    }
    _fmtJJMM(d) { const p = (n) => String(n).padStart(2, '0'); return p(d.getDate()) + '/' + p(d.getMonth() + 1) + '/' + d.getFullYear(); }

     
    _loadMapLibre() {
        return new Promise((resolve) => {
            if (window.maplibregl) return resolve();
            const s = document.createElement('script');
            s.src = MAPLIBRE_JS; s.onload = () => resolve();
            document.head.appendChild(s);
        });
    }

    




    _brancherAttribution() {
        const racine = this._q('.tm-root') || this;
        const soigner = () => {
            const a = racine.querySelector('.maplibregl-ctrl-attrib');
            if (!a) return null;
            const inner = a.querySelector('.maplibregl-ctrl-attrib-inner') || a;
            if (inner.dataset.tmSoigne === inner.innerHTML) return a;
            if (inner.innerHTML.indexOf('|') >= 0) {
                inner.innerHTML = inner.innerHTML
                    .split(/\s*\|\s*/).join(' <span class="tm-attsep" aria-hidden="true">·</span> ');
            }
            inner.dataset.tmSoigne = inner.innerHTML;
            return a;
        };
        


        const replier = () => {
            const a = soigner();
            if (a) a.classList.remove('maplibregl-compact-show');
        };
        soigner();
        replier();
        this._map.on('movestart', replier);
        this._map.on('zoomstart', replier);
        this._map.on('sourcedata', soigner);
    }

    _initMap() {
        const container = this._q('.tm-root');
        if (!container || !window.maplibregl) return;
        const mobile = window.innerWidth <= 768;
        this._map = new window.maplibregl.Map({
            container, style: STYLE_URL,
            center: FRANCE_CENTER, zoom: FRANCE_ZOOM,
            minZoom: 2.5, maxZoom: MAX_ZOOM,
             
             
             
            maxBounds: mobile ? [[-9, 31], [14, 55]] : [[-16, 36], [19, 56]],
            








            attributionControl: false
        });
        this._map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
        this._map.addControl(new window.maplibregl.AttributionControl({
            compact: true,
            customAttribution: 'Carte développée par <a href="https://wapitix.fr" target="_blank" rel="noopener">Wapitix</a>'
            








        }), 'bottom-right');
        this._brancherAttribution();
        this._map.on('dragstart', () => { this._userMoved = true; });
        this._map.on('zoomstart', (e) => { if (e && e.originalEvent) this._userMoved = true; });
        const cvs = this._map.getCanvas();
        cvs.addEventListener('mousedown', () => { this._userMoved = true; });
        cvs.addEventListener('touchstart', () => { this._userMoved = true; }, { passive: true });

         
         
         
         
         
         
         
         
         
         
        cvs.addEventListener('webglcontextlost', (ev) => {
            ev.preventDefault();
            this._contextePerdu = true;
            this._ready = false;
        }, false);
        cvs.addEventListener('webglcontextrestored', () => { this._remonterCarte(); }, false);
         
         
         
        if (!this._onVisible) {
            this._onVisible = () => {
                if (document.visibilityState !== 'visible' || !this._map) return;
                const t = this._map.getCanvas();
                const gl = t.getContext('webgl2') || t.getContext('webgl');
                if (this._contextePerdu || (gl && gl.isContextLost())) this._remonterCarte();
            };
            document.addEventListener('visibilitychange', this._onVisible);
        }
        this._ro = new ResizeObserver(() => {
             
             
             
             
            this._ajusterHauteur();
            this._ajusterAncrage();
            if (!this._map) return;
             
             
            if (this._userMoved) this._map.resize();
            else this._recadrer({ anime: false });
        });
        this._ro.observe(this);
        if (this.parentElement) this._ro.observe(this.parentElement);
        this._map.on('load', () => {
            this._ready = true;
             
             
             
             
             
             
             
            const etape = (nom, fn) => { try { fn(); } catch (err) { console.error('[carte] ' + nom, err); } };
            etape('style', () => this._styleRDR());
            etape('couches', () => this._setupLayers());
            etape('village', () => this._addVillage());
            etape('repere', () => this._addCurrent());
             
             
            if (this._vueAvantPerte) {
                const v = this._vueAvantPerte;
                this._vueAvantPerte = null;
                this._userMoved = true;
                etape('vue', () => this._map.jumpTo({ center: v.centre, zoom: v.zoom }));
            } else {
                etape('cadrage', () => this._recadrer({ anime: false }));
                setTimeout(() => etape('cadrage differe', () => this._recadrer({ anime: false })), 350);
            }
            etape('lien profond', () => this._ouvrirDepuisUrl());
        });
    }

    _styleRDR() {
        const m = this._map;
        if (!m) return;
        let layers = [];
        try { layers = m.getStyle().layers || []; } catch (e) { return; }
        layers.forEach((l) => {
            const id = l.id || '';
            const sl = l['source-layer'] || '';
            const t = l.type;
            try {
                if (t === 'background') { m.setPaintProperty(id, 'background-color', CARTE.terre); return; }
                if (sl === 'water') {
                    if (t === 'fill') m.setPaintProperty(id, 'fill-color', CARTE.mer);
                    if (t === 'line') m.setPaintProperty(id, 'line-color', CARTE.mer);
                    return;
                }
                if (sl === 'waterway') { m.setPaintProperty(id, 'line-color', CARTE.merClair); return; }
                if (sl === 'water_name') { m.setPaintProperty(id, 'text-color', CARTE.merLabel); m.setPaintProperty(id, 'text-halo-color', CARTE.mer); m.setPaintProperty(id, 'text-halo-width', 1); return; }
                if (sl === 'landcover' || sl === 'park' || /wood|forest|grass|park|landcover|wetland/i.test(id)) {
                    if (t === 'fill') { m.setPaintProperty(id, 'fill-color', CARTE.vert); m.setPaintProperty(id, 'fill-opacity', 0.4); }
                    return;
                }
                if (sl === 'landuse') { if (t === 'fill') m.setPaintProperty(id, 'fill-color', CARTE.terre2); return; }
                if (sl === 'building') { m.setLayoutProperty(id, 'visibility', 'none'); return; }
                if (sl === 'poi' || sl === 'housenumber' || sl === 'aerodrome_label' || sl === 'mountain_peak') { m.setLayoutProperty(id, 'visibility', 'none'); return; }
                if (sl === 'boundary' && t === 'line') { m.setPaintProperty(id, 'line-color', CARTE.frontiere); m.setPaintProperty(id, 'line-opacity', 0.5); return; }
                if (sl === 'transportation' && t === 'line') {
                    const maj = /motorway|trunk|primary/i.test(id);
                    m.setPaintProperty(id, 'line-color', maj ? CARTE.routeMaj : CARTE.route);
                    return;
                }
                if (t === 'symbol' && (sl === 'place' || sl === 'transportation_name')) {
                    m.setPaintProperty(id, 'text-color', CARTE.label);
                    m.setPaintProperty(id, 'text-halo-color', CARTE.terre);
                    m.setPaintProperty(id, 'text-halo-width', 1.4);
                    return;
                }
            } catch (e) {   }
        });
    }

    _addCurrent() {
        if (!this._map || !window.maplibregl) return;
        if (this._currentMarker) { this._currentMarker.remove(); this._currentMarker = null; }
        const stops = this._etapes
            .filter((e) => !isNaN(Number(e.latitude)) && !isNaN(Number(e.longitude)))
            .slice()
            .sort((a, b) => new Date(a.dateDebut) - new Date(b.dateDebut));
        const uniq = [];
        const seen = new Set();
        stops.forEach((e) => {
            const lng = Number(e.longitude), lat = Number(e.latitude);
            const key = lng.toFixed(3) + ',' + lat.toFixed(3);
            if (seen.has(key)) return;
            seen.add(key);
            uniq.push({ c: [lng, lat], st: this._statut(e), ville: e.ville || e.titre || '', dateDebut: e.dateDebut, dateFin: e.dateFin });
        });
        if (!uniq.length) return;
        const mode = this._forceCurrent || 'auto';
        let pos, src, cls, eyebrow, info;
         
         
        const iciTxt = this._t(this._estTrophee() ? 'cur_ici_trophee' : 'cur_ici_mascotte');
        const setIci = (u) => { pos = u.c; src = this._illu('face'); cls = 'tm-cur-ici'; eyebrow = iciTxt; info = this._esc(u.ville) + ' \u00b7 ' + this._fmtPlage(u.dateDebut, u.dateFin); };
        const setRoute = (a, b) => { const arc = this._arc(a.c, b.c, 0.13); pos = arc[Math.floor(arc.length / 2)]; src = this._illu('velo'); cls = 'tm-cur-route'; eyebrow = this._t('cur_route'); info = '\u2192 ' + this._esc(b.ville) + ' \u00b7 ' + this._fmtJour(b.dateDebut); };
        const setAvant = (u) => { pos = u.c; src = this._illu('velo'); cls = 'tm-cur-route'; eyebrow = this._t('cur_bientot'); info = '\u2192 ' + this._esc(u.ville) + ' \u00b7 ' + this._fmtJour(u.dateDebut); };
        if (mode === 'ici') {
            setIci(uniq.find((u) => u.st === 'en_cours') || uniq[Math.floor(uniq.length / 2)]);
        } else if (mode === 'route') {
            const i = Math.max(0, Math.floor(uniq.length / 2) - 1);
            const a = uniq[i], b = uniq[Math.min(i + 1, uniq.length - 1)];
            if (a === b) setIci(a); else setRoute(a, b);
        } else if (mode === 'avant') {
            setAvant(uniq[0]);
        } else {
            const enCours = uniq.find((u) => u.st === 'en_cours');
            if (enCours) { setIci(enCours); }
            else {
                let lastPast = -1;
                for (let i = 0; i < uniq.length; i++) { if (uniq[i].st === 'passe' || uniq[i].st === 'annulee') lastPast = i; }
                const nextIdx = uniq.findIndex((u) => u.st === 'a_venir' || u.st === 'reportee');
                if (nextIdx === -1) return;
                if (lastPast === -1 || lastPast >= nextIdx) setAvant(uniq[nextIdx]);
                else setRoute(uniq[lastPast], uniq[nextIdx]);
            }
        }
        const el = document.createElement('div');
        el.className = 'tm-current';
        el.innerHTML = '<div class="tm-current-bubble ' + cls + '"><span class="tm-cur-eyebrow">' + eyebrow + '</span><span class="tm-cur-info">' + info + '</span></div><img src="' + src + '" alt="' + this._altIllu() + '">';
        this._currentMarker = new window.maplibregl.Marker({ element: el, anchor: 'bottom', offset: [14, -2] }).setLngLat(pos).addTo(this._map);
    }

    _addVillage() {
        if (!VILLAGE || !VILLAGE.actif || !this._map || !window.maplibregl) return;
        const el = document.createElement('div');
        el.className = 'tm-village';
        el.innerHTML = `<div class="tm-village-card"><span class="tm-village-eyebrow">${this._t('village_futur')}</span><span class="tm-village-title">Route du Rhum</span><span class="tm-village-dates">${this._t('village_dates')}</span></div><img class="tm-village-masc" src="${TYMAL.banderole}" alt="" aria-hidden="true"><div class="tm-village-point">${ICON_ARROW_DOWN}</div>`;
        el.addEventListener('click', (ev) => {
            ev.stopPropagation();
            this._ouvrirVillage();
            this._map.flyTo({ center: [VILLAGE.lng, VILLAGE.lat], zoom: Math.max(this._map.getZoom(), 8), speed: 0.8 });
        });
        this._villageMarker = new window.maplibregl.Marker({ element: el, anchor: 'bottom', offset: [0, -92] }).setLngLat([VILLAGE.lng, VILLAGE.lat]).addTo(this._map);
        this._villageEl = el;
        this._updateVillageZoom();
        this._map.on('zoom', () => this._updateVillageZoom());
    }

    _updateVillageZoom() {
        if (!this._map || !this._villageMarker || !this._villageEl) return;
        if (this._map.getZoom() < 7.5) {
            this._villageEl.classList.add('tm-village-min');
            this._villageMarker.setOffset([0, -12]);
        } else {
            this._villageEl.classList.remove('tm-village-min');
            this._villageMarker.setOffset([0, -92]);
        }
    }

     
     
     
    _etapeVillage() {
        return {
            titre: this._t('village_titre'),
            ville: VILLAGE.lieu,
             
             
             
            lieu: '',
            dateDebut: VILLAGE.debut,
            dateFin: VILLAGE.fin,
            description: this._t('village_desc'),
            latitude: VILLAGE.lat,
            longitude: VILLAGE.lng,
            horaires: [],
            infosPratiques: '',
            parcours: 'village'
        };
    }

    _ouvrirVillage() {
        const c = this._q('[data-el=detailContent]');
        const masc = this._q('[data-el=detailMascotte]');
        if (masc) { masc.src = TYMAL.banderole; masc.style.transform = 'scale(' + (TYMAL_SCALE.banderole || 1) + ')'; }
         
         
         
         
         
         
         
         
        c.innerHTML = `
<div class="tm-detail-body">
  <span class="tm-badge" style="background:${JAUNE};color:${NAVY}">${this._t('village_futur')}</span>
  <h3>${this._t('village_titre')}</h3>
  <p class="tm-meta">${VILLAGE.lieu} · ${this._t('village_dates')}</p>
  <div class="tm-desc">${this._t('village_desc')}</div>
  <div class="tm-detail-actions">
    <button class="tm-btn tm-btn-primary" data-act="agenda"><span aria-hidden="true">📅</span> ${this._t('village_agenda')}</button>
  </div>
</div>`;
        c.scrollTop = 0;
        this._villageOuvert = true;
        this._closeSheets();
        this._q('[data-el=detail]').classList.add('tm-open');
    }

     
    _statut(e) {
        if (e.statutManuel && STATUTS_MANUELS.indexOf(e.statutManuel) !== -1) return e.statutManuel;
        const d = new Date(e.dateDebut).getTime(), f = new Date(e.dateFin).getTime();
        if (isNaN(d) || isNaN(f)) return 'a_venir';
        const now = Date.now();
        if (now < d) return 'a_venir';
        if (now > f) return 'passe';
        return 'en_cours';
    }

    _haversine(lat1, lng1, lat2, lng2) {
        const R = 6371, toRad = (v) => (v * Math.PI) / 180;
        const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    _chevauche(d1, f1, d2, f2) {
        const a1 = new Date(d1).getTime(), a2 = new Date(f1).getTime(), b1 = new Date(d2).getTime(), b2 = new Date(f2).getTime();
        if ([a1, a2, b1, b2].some(isNaN)) return false;
        return a1 <= b2 && a2 >= b1;
    }

    _fmtPlage(d1, d2) {
        const a = new Date(d1), b = new Date(d2);
        if (isNaN(a) || isNaN(b)) return '';
         
         
         
        const loc = LOCALES[this._lang] || LOCALES.fr;
        const opt = { timeZone: 'Europe/Paris', day: 'numeric', month: 'long' };
        const f = (d) => new Intl.DateTimeFormat(loc, opt).format(d);
        const same = (d) => new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', day: 'numeric', month: 'numeric' }).format(d);
        return same(a) === same(b)
            ? this._t('date_le') + f(a)
            : this._t('date_du') + f(a) + this._t('date_au') + f(b);
    }

     
    _refresh() { this._updateSource(); this._renderListe(); this._updateFilterFlag(); }

    _geojson() {
        return {
            type: 'FeatureCollection',
            features: this._filtrer().map((e) => {
                const lat = Number(e.latitude), lng = Number(e.longitude);
                if (isNaN(lat) || isNaN(lng)) return null;
                const st = this._statut(e);
                return { type: 'Feature', geometry: { type: 'Point', coordinates: [lng, lat] }, properties: { id: String(e._id), statut: st, couleur: this._couleurs()[st] || JAUNE, ville: e.ville || e.titre || '' } };
            }).filter(Boolean)
        };
    }

    _setupLayers() {
        const m = this._map;
        if (!m || m.getSource('etapes')) return;
        m.addSource('trace', { type: 'geojson', data: this._buildTrace() });
        const tv = this._traceOn ? 'visible' : 'none';
        m.addLayer({ id: 'trace-passe', type: 'line', source: 'trace', filter: ['==', ['get', 'seg'], 'passe'], layout: { 'line-cap': 'round', 'line-join': 'round', visibility: tv }, paint: { 'line-color': '#9aa7ba', 'line-width': 2.4, 'line-opacity': 0.5 } });
        m.addLayer({ id: 'trace-avenir', type: 'line', source: 'trace', filter: ['==', ['get', 'seg'], 'a_venir'], layout: { 'line-cap': 'round', 'line-join': 'round', visibility: tv }, paint: { 'line-color': TEAL, 'line-width': 2, 'line-opacity': 0.5, 'line-dasharray': [1.2, 2.4] } });
        m.addLayer({ id: 'trace-encours', type: 'line', source: 'trace', filter: ['==', ['get', 'seg'], 'en_cours'], layout: { 'line-cap': 'round', 'line-join': 'round', visibility: tv }, paint: { 'line-color': JAUNE, 'line-width': 3, 'line-opacity': 0.95 } });
        m.addSource('etapes', { type: 'geojson', data: this._geojson(), cluster: true, clusterMaxZoom: 11, clusterRadius: 16 });
        m.addLayer({ id: 'clusters', type: 'circle', source: 'etapes', filter: ['has', 'point_count'], paint: { 'circle-color': NAVY, 'circle-opacity': 0.96, 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 3, 'circle-radius': ['step', ['get', 'point_count'], 16, 3, 19, 6, 23, 10, 28] } });
        m.addLayer({ id: 'cluster-count', type: 'symbol', source: 'etapes', filter: ['has', 'point_count'], layout: { 'text-field': ['get', 'point_count_abbreviated'],  
 
 
 
 
'text-font': ['Noto Sans Bold'], 'text-size': 13, 'text-allow-overlap': true }, paint: { 'text-color': '#ffffff' } });
        m.addLayer({ id: 'points-pulse', type: 'circle', source: 'etapes', filter: ['all', ['!', ['has', 'point_count']], ['==', ['get', 'statut'], 'en_cours']], paint: { 'circle-color': JAUNE, 'circle-opacity': 0.4, 'circle-radius': 8 } });
        m.addLayer({ id: 'points', type: 'circle', source: 'etapes', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': ['get', 'couleur'], 'circle-opacity': 1, 'circle-stroke-color': '#ffffff', 'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 4.5, 1.4, 7, 2.4, 10, 3], 'circle-radius': ['interpolate', ['linear'], ['zoom'], 4.5, 4.5, 7, 6.5, 10, 9, 12, 11] } });
        this._bindMapEvents();
        this._startPulse();
        this._syncTrace();
    }

     
     
     
    _remonterCarte() {
        if (this._remontage) return;
        this._remontage = true;
        const vue = this._map ? { centre: this._map.getCenter(), zoom: this._map.getZoom() } : null;
        try { if (this._map) this._map.remove(); } catch (e) {   }
        this._map = null;
        this._ready = false;
        this._contextePerdu = false;
        this._currentMarker = null;
        this._villageMarker = null;
        this._vueAvantPerte = vue;
        try { this._initMap(); } finally { this._remontage = false; }
    }

    _bindMapEvents() {
        const m = this._map;
        m.on('click', (e) => {
            const feats = m.queryRenderedFeatures(e.point, { layers: ['clusters', 'points'] });
            if (!feats.length) return;
            const f = feats[0];
            if (f.properties && (f.properties.cluster || f.properties.point_count)) { this._clusterClick(f); return; }
            const et = this._etapes.find((x) => String(x._id) === String(f.properties.id));
            if (et) { this._ouvrirDetail(et); this._approcher(f.geometry.coordinates); }
        });
        ['points', 'clusters'].forEach((l) => {
            m.on('mouseenter', l, () => { m.getCanvas().style.cursor = 'pointer'; });
            m.on('mouseleave', l, () => { m.getCanvas().style.cursor = ''; });
        });
    }

    _startPulse() {
        const start = performance.now();
        const step = (t) => {
            if (!this._map || !this._map.getLayer('points-pulse')) return;
            const k = ((t - start) % 1600) / 1600;
            this._map.setPaintProperty('points-pulse', 'circle-radius', 8 + k * 16);
            this._map.setPaintProperty('points-pulse', 'circle-opacity', 0.45 * (1 - k));
            this._pulseRAF = requestAnimationFrame(step);
        };
        this._pulseRAF = requestAnimationFrame(step);
    }

    _updateSource() {
        if (!this._ready || !this._map) return;
        const s = this._map.getSource('etapes');
        if (s) s.setData(this._geojson());
        const t = this._map.getSource('trace');
        if (t) t.setData(this._buildTrace());
        this._addCurrent();
    }

    _buildTrace() {
        if (this._traceDispo === false) return { type: 'FeatureCollection', features: [] };
        const stops = this._etapes
            .filter((e) => !isNaN(Number(e.latitude)) && !isNaN(Number(e.longitude)))
            .slice()
            .sort((a, b) => new Date(a.dateDebut) - new Date(b.dateDebut));
        const uniq = [];
        const seen = new Set();
        stops.forEach((e) => {
            const lng = Number(e.longitude), lat = Number(e.latitude);
            const key = lng.toFixed(3) + ',' + lat.toFixed(3);
            if (seen.has(key)) return;
            seen.add(key);
            uniq.push({ c: [lng, lat], st: this._statut(e), t: new Date(e.dateDebut).getTime() });
        });
         
         
         
         
        const sauts = [];
        for (let i = 0; i < uniq.length - 1; i++) sauts.push(this._km(uniq[i].c, uniq[i + 1].c));
        const tries = sauts.slice().sort((a, b) => a - b);
        const median = tries.length ? tries[Math.floor(tries.length / 2)] : 0;
        const seuilKm = Math.max(TRACE_SAUT_MIN_KM, median * 3);

        const feats = [];
        for (let i = 0; i < uniq.length - 1; i++) {
             
             
             
             
             
             
            const ecart = Math.abs(uniq[i + 1].t - uniq[i].t) / 86400000;
            if (!isFinite(ecart) || ecart > TRACE_ECART_MAX_JOURS) continue;
            if (sauts[i] > seuilKm) continue;
            const arr = uniq[i + 1].st;
            const seg = (arr === 'passe' || arr === 'annulee') ? 'passe' : (arr === 'en_cours' ? 'en_cours' : 'a_venir');
            feats.push({ type: 'Feature', properties: { seg }, geometry: { type: 'LineString', coordinates: this._arc(uniq[i].c, uniq[i + 1].c, TRACE_COURBURE) } });
        }
        return { type: 'FeatureCollection', features: feats };
    }

     
     
     
    _approcher(coords, cible) {
        if (!this._map) return;
        const vise = Math.min(MAX_ZOOM, Math.max(this._map.getZoom(), cible || FOCUS_ZOOM));
        this._userMoved = true;    
         
         
         
         
        this._map.flyTo({ center: coords, zoom: vise, speed: 0.9, offset: this._decalageFiche() });
    }

    _decalageFiche() {
        if (!this._estMobile()) return [0, 0];
        const fiche = this._q('[data-el=detail]');
        if (!fiche || !fiche.classList.contains('tm-open')) return [0, 0];
        const h = fiche.getBoundingClientRect().height;
        if (!h) return [0, 0];
         
        return [0, -Math.round(h / 2)];
    }

    _km(a, b) {
        const R = 6371, rad = (x) => x * Math.PI / 180;
        const dl = rad(b[1] - a[1]), dg = rad(b[0] - a[0]);
        const h = Math.sin(dl / 2) * Math.sin(dl / 2)
            + Math.cos(rad(a[1])) * Math.cos(rad(b[1])) * Math.sin(dg / 2) * Math.sin(dg / 2);
        return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
    }

    _arc(a, b, bend) {
        const cx = (a[0] + b[0]) / 2 - (b[1] - a[1]) * bend;
        const cy = (a[1] + b[1]) / 2 + (b[0] - a[0]) * bend;
        const pts = [], N = 26;
        for (let i = 0; i <= N; i++) {
            const t = i / N, u = 1 - t;
            pts.push([u * u * a[0] + 2 * u * t * cx + t * t * b[0], u * u * a[1] + 2 * u * t * cy + t * t * b[1]]);
        }
        return pts;
    }

    _toggleTrace() {
        this._traceOn = !this._traceOn;
        this._syncTrace();
    }

     
     
     
    _syncTrace() {
        const dispo = this._traceDispo !== false;
        const visible = dispo && this._traceOn;
        ['trace-passe', 'trace-avenir', 'trace-encours'].forEach((id) => {
            if (this._map && this._map.getLayer(id)) this._map.setLayoutProperty(id, 'visibility', visible ? 'visible' : 'none');
        });
         
         
         
        if (this._map && this._map.getLayer('trace-avenir')) this._map.setPaintProperty('trace-avenir', 'line-color', this._couleurs().a_venir);
        const b = this._q('[data-el=traceBtn]');
        if (b) { b.hidden = !dispo; b.classList.toggle('tm-on', visible); }
    }

    _clusterClick(feat) {
        const coords = feat.geometry.coordinates.slice();
        const lng = coords[0], lat = coords[1];
        const count = feat.properties.point_count || 0;
        const here = this._filtrer().filter((e) => Math.abs(Number(e.longitude) - lng) < 2e-3 && Math.abs(Number(e.latitude) - lat) < 2e-3);
        if (here.length > 1 && here.length >= count) {
            this._setGroup(here.map((e) => String(e._id)));
            this._approcher(coords, 10.5);
            if (window.innerWidth <= 768) this._openSheet('etapes');
            return;
        }
        const cur = this._map.getZoom();
        const fallback = Math.min(cur + 2.5, MAX_ZOOM);
        const goto = (zoom) => this._map.easeTo({ center: coords, zoom: Math.min(Math.max(zoom, cur + 1.4), MAX_ZOOM), speed: 0.9 });
        const src = this._map.getSource('etapes');
        if (src && src.getClusterExpansionZoom && feat.properties.cluster_id != null) {
            try {
                const ret = src.getClusterExpansionZoom(feat.properties.cluster_id, (err, zoom) => { if (!err && zoom != null) goto(zoom + 0.5); else goto(fallback); });
                if (ret && typeof ret.then === 'function') { ret.then((zoom) => goto((zoom != null ? zoom : cur + 2.5) + 0.5)).catch(() => goto(fallback)); }
            } catch (err) { goto(fallback); }
        } else {
            goto(fallback);
        }
    }

    _setGroup(ids) {
        this._groupIds = ids;
        this._filtre = 'tous';
        this.querySelectorAll('.tm-chip').forEach((c) => c.classList.remove('tm-active'));
        this._refresh();
    }

    _clearGroup() {
        this._groupIds = null;
        this._traceOn = TRACE_ACTIF;
        this._setFiltre('tous');
    }

    _updateFilterFlag() {
        const active = !!this._groupIds || this._filtre !== 'tous' || !!this._recherche;
        this.classList.toggle('tm-filtered', active);
    }

    _clearAll() {
        this._groupIds = null;
        this._traceOn = TRACE_ACTIF;
        this._filtre = 'tous';
        this._recherche = '';
        const s = this._q('[data-f=recherche]');
        if (s) s.value = '';
        this.querySelectorAll('.tm-chip').forEach((c) => c.classList.toggle('tm-active', c.getAttribute('data-filtre') === 'tous'));
        this._refresh();
    }

    _filtrer() {
        return this._etapes.filter((e) => {
            if (this._groupIds) return this._groupIds.indexOf(String(e._id)) !== -1;
            const st = this._statut(e);
            if (this._filtre !== 'tous' && st !== this._filtre) return false;
            if (this._recherche) {
                const hay = ((e.ville || '') + ' ' + (e.titre || '') + ' ' + (e.lieu || '')).toLowerCase();
                if (hay.indexOf(this._recherche) === -1) return false;
            }
            return true;
        });
    }

    _groupBanner() {
        if (!this._groupIds) return '';
        const e0 = this._etapes.find((x) => this._groupIds.indexOf(String(x._id)) !== -1);
        const v = e0 ? (e0.ville || e0.titre || '') : '';
        return '<div class="tm-grpbanner"><span>' + this._t('creneaux_a') + this._esc(v) + '</span><button data-act="clearGroup">' + this._t('tout_voir') + '</button></div>';
    }

    _renderListe() {
        const list = this._q('[data-el=list]');
        if (!list) return;
        let items = this._filtrer();
        const banner = this._groupBanner();
        if (this._position) {
            items = items.map((e) => ({ e, d: this._haversine(this._position.lat, this._position.lng, Number(e.latitude), Number(e.longitude)) }))
                .sort((a, b) => a.d - b.d).map((x) => Object.assign({}, x.e, { _dist: x.d }));
        } else {
             
             
             
             
            items = items.slice().sort((a, b) => {
                const ra = RANG_LISTE[this._statut(a)], rb = RANG_LISTE[this._statut(b)];
                const rangA = ra === undefined ? 9 : ra, rangB = rb === undefined ? 9 : rb;
                if (rangA !== rangB) return rangA - rangB;
                const da = this._tempsDebut(a), db = this._tempsDebut(b);
                return this._statut(a) === 'passe' ? db - da : da - db;
            });
        }
        if (!items.length) {
            





            if (!this._charge) {
                list.innerHTML = banner + (this._chargePerdue
                    ? '<div class="tm-empty"><img src="' + this._illu('banderole') + '" alt="' + this._altIllu() +
                      '"><div>' + this._esc(this._t('charge_echec')) + '</div></div>'
                    : '');
                return;
            }
             
             
             
             
             
            const p = this._parcoursActif() || {};
            const message = this._cmsOuDict(p.messageVide, 'vide');
            list.innerHTML = banner + '<div class="tm-empty"><img src="' + this._illu('banderole') + '" alt="' + this._altIllu() + '"><div>' + this._esc(message) + '</div></div>';
            return;
        }
        list.innerHTML = banner + items.map((e) => {
            const st = this._statut(e);
            const dist = (e._dist !== undefined && isFinite(e._dist)) ? '<span class="tm-dist">' + Math.round(e._dist) + ' km</span>' : '';
            return `<div class="tm-card" data-id="${e._id}" style="--cc:${this._couleurs()[st]}">
                <div class="tm-card-top">
                  <span class="tm-badge" style="background:${this._couleurs()[st]};color:${COULEURS_TXT[st]}">${this._t('st_' + st)}</span>
                  <h4>${this._esc(e.ville || e.titre || '')}</h4>${dist}
                </div>
                <p class="tm-meta">${this._esc(e.lieu || '')}</p>
                <p class="tm-meta">${this._fmtPlage(e.dateDebut, e.dateFin)}</p>
              </div>`;
        }).join('');
        list.querySelectorAll('.tm-card').forEach((card) => {
            card.addEventListener('click', () => {
                const e = this._etapes.find((x) => x._id === card.getAttribute('data-id'));
                if (e) { this._ouvrirDetail(e); this._focusEtape(e._id); }
            });
        });
    }

     
    _tymalFor(e, st) {
        const v = (e.ville || '').toLowerCase();
        if (v.includes('malo')) return 'drapeauStMalo';
        if (TYMAL_BRETAGNE.some((c) => v.includes(c))) return 'drapeauBreton';
        return TYMAL_STATUT[st] || 'face';
    }

     
     
     
     
    _joursAnimations(e) {
        if (Array.isArray(e.joursAnimations) && e.joursAnimations.length) return e.joursAnimations;
        if (Array.isArray(e.animations) && e.animations.length) {
            return [{ dateDebut: e.dateDebut, dateFin: e.dateFin, animations: e.animations }];
        }
        return [];
    }

    _fmtJour(d) {
        const a = new Date(d);
        if (isNaN(a)) return '';
        return new Intl.DateTimeFormat(LOCALES[this._lang] || LOCALES.fr, { timeZone: 'Europe/Paris', day: 'numeric', month: 'short' }).format(a);
    }

     
     
     
     
     
    _renderAnim(a, k) {
        const img = this._url(a.image);
        const det = '<div class="tm-anim-detail">'
            + (Array.isArray(a.galerie) && a.galerie.length
                ? '<div class="tm-anim-gal">' + a.galerie.map((u) => this._url(u)).filter(Boolean).map((u) => '<img src="' + u + '" alt="" loading="lazy">').join('') + '</div>'
                : '')
            + (a.infos ? '<div class="tm-anim-infos">\u2139\ufe0f ' + this._esc(a.infos) + '</div>' : '')
            + '</div>';
        return '<div class="tm-anim" data-act="anim" data-i="' + k + '">'
            + (img ? '<img class="tm-anim-img" src="' + img + '" alt="" loading="lazy">' : '')
            + '<div class="tm-anim-body"><div class="tm-anim-head"><span class="tm-anim-time">' + this._esc(a.heureDebut || '') + (a.heureFin ? '\u2013' + this._esc(a.heureFin) : '') + '</span>' + (a.type ? '<span class="tm-anim-type">' + this._esc(a.type) + '</span>' : '') + '<span class="tm-anim-caret">\u2304</span></div>'
            + '<div class="tm-anim-titre">' + this._esc(a.titre || '') + '</div>'
            + (a.description ? '<div class="tm-anim-desc">' + this._esc(a.description) + '</div>' : '')
            + det
            + '</div></div>';
    }

     
     
     
     
    _mediaItem(it) {
        if (typeof it === 'string') {
            const yt = this._idYoutube(it);
            if (yt) return { type: 'youtube', id: yt, src: it, poster: 'https://i.ytimg.com/vi/' + yt + '/hqdefault.jpg' };
            return { type: /\.(mp4|webm|mov|m4v)$/i.test(it) ? 'video' : 'image', src: it, poster: '' };
        }
        const m = Object.assign({ type: 'image', src: '', poster: '' }, it);
        if (m.type === 'youtube' && !m.id) m.id = this._idYoutube(m.src) || '';
        if (m.type === 'youtube' && !m.poster && m.id) m.poster = 'https://i.ytimg.com/vi/' + m.id + '/hqdefault.jpg';
        return m;
    }

    _idYoutube(url) {
        const s = String(url || '');
        const m = s.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
        return m ? m[1] : '';
    }

    _carouselHTML(arr) {
        const slides = arr.map((it, k) => {
            const m = this._mediaItem(it);
             
             
             
            const poster = (m.type === 'video' || m.type === 'youtube') ? (m.poster || m.src) : m.src;
            const jouable = m.type === 'video' || m.type === 'youtube';
            return '<button class="tm-slide' + (jouable ? ' tm-slide-vid' : '') + '" data-act="lightbox" data-i="' + k + '"><img src="' + this._url(poster) + '" alt="" loading="lazy">' + (jouable ? '<span class="tm-slide-play">\u25b6</span>' : '') + '</button>';
        }).join('');
        const arrows = arr.length > 1 ? '<button class="tm-car-arrow tm-car-prev" data-act="carPrev">\u2039</button><button class="tm-car-arrow tm-car-next" data-act="carNext">\u203a</button>' : '';
        return '<div class="tm-car' + (arr.length <= 1 ? ' tm-car-single' : '') + '">' + arrows + '<div class="tm-car-track" data-el="carTrack">' + slides + '</div></div>';
    }

     
     
    _blocCreneaux(e) {
        const cr = Array.isArray(e.horaires) ? e.horaires.filter((h) => h && h.texte) : [];
        if (!cr.length) return '';
        return '<div class="tm-creneaux">' + cr.map((c) =>
            '<span class="tm-creneau">' + this._esc(c.texte) + '</span>').join('') + '</div>';
    }

     
     
     
    _blocRelais(e) {
        const r = e.relais;
        if (!r || !r.nom) return '';
         
         
        const logo = r.logo
            ? '<img class="tm-relais-logo" src="' + this._url(r.logo) + '" alt="' + this._esc(r.nom) + '" loading="lazy">'
            : '';
        return '<div class="tm-relais"><div class="tm-relais-txt"><span class="tm-relais-lab">' + this._t('point_relais') + '</span>'
            + '<span class="tm-relais-nom">' + this._esc(r.nom) + '</span>'
            + (r.adresse ? '<span class="tm-relais-adr">' + this._esc(r.adresse) + '</span>' : '')
            + '</div>' + logo + '</div>';
    }

    _renderDetailBody() {
        const e = this._detailEtape;
        if (!e) return;
        const c = this._q('[data-el=detailContent]');
        const st = this._statut(e);
        const hero = e.imagePrincipale ? '<img class="tm-detail-hero" src="' + this._url(e.imagePrincipale) + '" alt="">' : '';
         
         
         
        const quand = e.datesAPreciser
            ? '<span class="tm-apreciser">' + this._t('dates_a_preciser') + '</span>'
            : this._fmtPlage(e.dateDebut, e.dateFin);
        const ou = e.lieuAPreciser
            ? (e.lieu ? this._esc(e.lieu) + ' <span class="tm-apreciser">' + this._t('a_confirmer') + '</span>' : '<span class="tm-apreciser">' + this._t('lieu_a_confirmer') + '</span>')
            : this._esc(e.lieu || '');
        const header = hero
            + '<span class="tm-badge" style="background:' + this._couleurs()[st] + ';color:' + COULEURS_TXT[st] + '">' + this._t('st_' + st) + '</span>'
            + '<h3>' + this._esc(e.ville || e.titre || '') + '</h3>'
            + '<p class="tm-meta">' + [ou, quand].filter(Boolean).join(' \u00b7 ') + '</p>'
            + (e.note ? '<p class="tm-note-event">' + this._esc(e.note) + '</p>' : '')
            + this._blocCreneaux(e)
            + this._blocRelais(e)
            + '<div class="tm-desc">' + this._esc(e.description || '') + '</div>';
        if (st === 'passe' || st === 'annulee') {
            const photos = Array.isArray(e.photosRetro) ? e.photosRetro : [];
            this._detailGallery = photos;
            const retro = photos.length
                ? '<h4 class="tm-prog-title" style="margin-top:20px;">' + this._t('retour_images') + '</h4>' + this._carouselHTML(photos)
                : '';
            const note = st === 'annulee'
                ? '<div class="tm-passe-note tm-passe-annule">' + this._t('annule_note') + '</div>'
                : '<div class="tm-passe-note">' + this._t('passe_note') + (retro ? this._t('passe_merci') : '.') + '</div>';
            c.innerHTML = '<div class="tm-detail-body tm-detail-passe">' + header + note + retro + '</div>';
            return;
        }
        const cr = this._joursAnimations(e);
        const idx = Math.max(0, Math.min(this._creneauIdx || 0, cr.length - 1));
        const cur = cr[idx] || { animations: [] };
        const photos = Array.isArray(e.galerie) ? e.galerie : [];
        this._detailGallery = photos;
        const gal = photos.length ? this._carouselHTML(photos) : '';
        const tabs = cr.length > 1 ? '<div class="tm-datetabs">' + cr.map((cc, kk) => '<button class="tm-datechip' + (kk === idx ? ' tm-on' : '') + '" data-act="creneau" data-i="' + kk + '">' + this._fmtJour(cc.dateDebut) + '</button>').join('') + '</div>' : '';
        const anims = (cur.animations || []).slice().sort((x, y) => (x.heureDebut || '').localeCompare(y.heureDebut || ''));
        const liste = anims.length ? anims.map((a, kk) => this._renderAnim(a, kk)).join('') : '';
         
         
         
        const prog = anims.length ? '<div class="tm-prog"><h4 class="tm-prog-title">' + this._t('programme') + '</h4>' + tabs + liste + '</div>' : '';
        c.innerHTML = '<div class="tm-detail-body">'
            + header
            + prog
            + gal
            + (e.infosPratiques ? '<p class="tm-meta" style="margin-top:14px;">\u2139\ufe0f ' + this._esc(e.infosPratiques) + '</p>' : '')
             
             
             
            + this._lienExterne(e)
             
             
             
             
             
             
             
             
             
            + '<div class="tm-detail-actions">'
            + (e.dateDebut ? '<button class="tm-btn tm-btn-ghost" data-act="agenda"><span aria-hidden="true">\ud83d\udcc5</span> ' + this._t('agenda') + '</button>' : '')
            + '<button class="tm-btn tm-btn-primary" data-act="itineraire"><span aria-hidden="true">\ud83d\ude97</span> ' + this._t('emmener') + '</button></div>'
            + '</div>';
    }

     
     
     
    _lienExterne(e) {
        const brut = String((e && e.lienExterne) || '').trim();
        if (!brut) return '';
        let u = null;
        try { u = new URL(brut, window.location.href); } catch (err) { return ''; }
        if (u.protocol !== 'http:' && u.protocol !== 'https:') return '';
        return '<a class="tm-lien-externe" href="' + this._esc(u.href)
            + '" target="_blank" rel="noopener noreferrer">' + this._t('en_savoir_plus') + '</a>';
    }

    _openLightbox(arr, i) {
        if (!Array.isArray(arr) || !arr.length) return;
        this._lb = { items: arr, idx: Math.max(0, Math.min(i, arr.length - 1)) };
        this._renderLightbox();
        this._q('[data-el=lightbox]').classList.add('tm-open');
    }

    _lightboxNav(d) {
        if (!this._lb) return;
        const n = this._lb.items.length;
        this._lb.idx = (this._lb.idx + d + n) % n;
        this._renderLightbox();
    }

    _closeLightbox() {
        const lb = this._q('[data-el=lightbox]');
        if (lb) lb.classList.remove('tm-open');
        const stage = this._q('[data-el=lbStage]');
        if (stage) stage.innerHTML = '';
    }

    _renderLightbox() {
        if (!this._lb) return;
        const m = this._mediaItem(this._lb.items[this._lb.idx]);
        const stage = this._q('[data-el=lbStage]');
         
         
         
         
        if (stage) {
            if (m.type === 'youtube') {
                stage.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + this._esc(m.id)
                    + '?autoplay=1&rel=0" title="Vidéo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            } else if (m.type === 'video') {
                const poster = this._url(m.poster);
                stage.innerHTML = '<video src="' + this._url(m.src) + '" controls autoplay playsinline' + (poster ? ' poster="' + poster + '"' : '') + '></video>';
            } else {
                stage.innerHTML = '<img src="' + this._url(m.src) + '" alt="">';
            }
        }
        const cnt = this._q('[data-el=lbCounter]');
        const multi = this._lb.items.length > 1;
        if (cnt) { cnt.textContent = (this._lb.idx + 1) + ' / ' + this._lb.items.length; cnt.style.display = multi ? '' : 'none'; }
        const p = this._q('[data-act=lbPrev]'), nx = this._q('[data-act=lbNext]');
        if (p) p.style.display = multi ? '' : 'none';
        if (nx) nx.style.display = multi ? '' : 'none';
    }

    _ouvrirDetail(e) {
        this._detailEtape = e;
        this._villageOuvert = false;
        this._creneauIdx = 0;
        const st = this._statut(e);
        const masc = this._q('[data-el=detailMascotte]');
         
         
        if (masc) { const mk = this._tymalFor(e, st); masc.src = this._illu(mk); masc.alt = this._altIllu(); masc.style.transform = this._estTrophee() ? 'none' : 'scale(' + (TYMAL_SCALE[mk] || 1.4) + ')'; }
        this._renderDetailBody();
        const c = this._q('[data-el=detailContent]');
        if (c) c.scrollTop = 0;
         
         
         
         
        if (this._estMobile()) this._closeSheets();
        this._q('[data-el=detail]').classList.add('tm-open');
        this._updateScrim();
         
         
         
        this.dispatchEvent(new CustomEvent('etapeClick', {
            bubbles: true, composed: true,
            detail: {
                _id: e._id || '', slug: e.slug || '', parcours: e.parcours || this._cleActive,
                titre: e.titre || '', ville: e.ville || ''
            }
        }));
    }

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    _itineraire(e) {
        if (!e) return;
        const la = Number(e.latitude), lo = Number(e.longitude);
        if (isNaN(la) || isNaN(lo)) return;
        const p = la + ',' + lo;
        const poser = (cle, url) => { const n = this._q('[data-el=' + cle + ']'); if (n) n.href = url; };
        poser('itGoogle', 'https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=' + encodeURIComponent(p));
        poser('itWaze', 'https://waze.com/ul?navigate=yes&ll=' + encodeURIComponent(p));
        poser('itPlans', 'https://maps.apple.com/?dirflg=d&daddr=' + encodeURIComponent(p));
        const boite = this._q('[data-el=itineraire]');
        if (boite) boite.classList.add('tm-open');
    }

    _fermerItineraire() {
        const b = this._q('[data-el=itineraire]');
        if (b) b.classList.remove('tm-open');
    }

     
     
     
     
     
     
     
     
     
     
     
     
    _urlEtape(e) {
        try {
            const u = new URL(window.location.href);
            u.hash = '';
            u.search = '';
            if (e && e.slug) {
                u.searchParams.set('parcours', e.parcours || this._cleActive);
                u.searchParams.set('etape', e.slug);
            }
            return u.toString();
        } catch (err) {
            return '';
        }
    }

     
     
     
     
     
     
     
    _agendaInfos(e) {
        const ville = String(e.ville || '').trim();
        const lieu = String(e.lieu || '').trim();

        let titre = String(e.titre || '').trim();
         
         
        if (!titre) titre = this._tp('sujet') + (ville ? ', ' + ville : '');
        else if (ville && titre.toLowerCase().indexOf(ville.toLowerCase()) === -1) titre += ', ' + ville;
        const emoji = AGENDA_EMOJI[e.parcours || this._cleActive] || AGENDA_EMOJI.mascotte;
        titre = emoji + ' ' + titre;

         
         
         
        const adresse = String(e.adresseComplete || '').trim();

        const pratique = [];
         
         
        if (lieu && adresse) pratique.push(AGENDA_LIEU + ' ' + lieu);
        const creneaux = (Array.isArray(e.horaires) ? e.horaires : []).map((h) => h && h.texte).filter(Boolean);
        if (creneaux.length) pratique.push(AGENDA_HORAIRE + ' ' + this._t('ag_creneaux') + ' ' + creneaux.join(', '));
        if (e.infosPratiques) pratique.push(String(e.infosPratiques).trim());

        const url = this._urlEtape(e);
        const morceaux = [];
        if (pratique.length) morceaux.push(pratique.join('\n'));
        if (e.description) morceaux.push(String(e.description).trim());
        if (url) morceaux.push(AGENDA_LIEN + ' ' + this._t('ag_voir') + ' ' + url);

        return {
            titre,
            lieu: adresse || [lieu, ville].filter(Boolean).join(', '),
            description: morceaux.join('\n\n'),
            url
        };
    }

    _ouvrirAgenda(e) {
        if (!e || !e.dateDebut) return;
         
         
         
        this._agendaCible = e;
        const d = this._datesAgenda(e);
        if (!d) return;
        const infos = this._agendaInfos(e);
        const titre = infos.titre, lieu = infos.lieu, desc = infos.description;
        const g = this._q('[data-el=agGoogle]');
        if (g) {
            g.href = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
                + '&text=' + encodeURIComponent(titre)
                + '&dates=' + d.compact + '/' + d.compactFin
                + '&location=' + encodeURIComponent(lieu)
                + '&details=' + encodeURIComponent(desc);
        }
        const o = this._q('[data-el=agOutlook]');
        if (o) {
            o.href = 'https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent'
                + '&subject=' + encodeURIComponent(titre)
                + '&startdt=' + d.iso + '&enddt=' + d.isoFin + '&allday=true'
                + '&location=' + encodeURIComponent(lieu)
                + '&body=' + encodeURIComponent(desc);
        }
        const boite = this._q('[data-el=agenda]');
        if (boite) boite.classList.add('tm-open');
    }

    _fermerAgenda() {
        const boite = this._q('[data-el=agenda]');
        if (boite) boite.classList.remove('tm-open');
    }

     
     
    _datesAgenda(e) {
        const dt = new Date(e.dateDebut);
        if (isNaN(dt)) return null;
        const fin = new Date(e.dateFin || e.dateDebut);
        const cible = isNaN(fin) ? new Date(dt) : fin;
        cible.setDate(cible.getDate() + 1);
        const compact = (x) => x.getFullYear() + String(x.getMonth() + 1).padStart(2, '0') + String(x.getDate()).padStart(2, '0');
        const iso = (x) => x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
        return { compact: compact(dt), compactFin: compact(cible), iso: iso(dt), isoFin: iso(cible) };
    }

    _agenda(e) {
        if (!e || !e.dateDebut) return;
        const jour = (d, finDeJournee) => {
            const x = new Date(d);
            if (isNaN(x)) return '';
            if (finDeJournee) x.setDate(x.getDate() + 1);        
            return x.getFullYear() + String(x.getMonth() + 1).padStart(2, '0') + String(x.getDate()).padStart(2, '0');
        };
        const debut = jour(e.dateDebut, false);
        if (!debut) return;
        const fin = jour(e.dateFin || e.dateDebut, true) || debut;
         
         
         
        const esc = (t) => String(t || '').replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\r?\n/g, '\\n');
        const infos = this._agendaInfos(e);
         
         
        const horodatage = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
        const la = Number(e.latitude), lo = Number(e.longitude);
        const lignes = [
            'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Route du Rhum//Carte//FR', 'CALSCALE:GREGORIAN',
            'BEGIN:VEVENT',
            'UID:' + (e._id || e.slug || debut) + '@routedurhum',
            'DTSTAMP:' + horodatage,
            'DTSTART;VALUE=DATE:' + debut,
            'DTEND;VALUE=DATE:' + fin,
            'SUMMARY:' + esc(infos.titre),
            'LOCATION:' + esc(infos.lieu),
            'DESCRIPTION:' + esc(infos.description)
        ];
         
         
         
        if (!isNaN(la) && !isNaN(lo)) lignes.push('GEO:' + la + ';' + lo);
        if (infos.url) lignes.push('URL:' + esc(infos.url));
        lignes.push('END:VEVENT', 'END:VCALENDAR');
         
         
         
         
         
        const enc = typeof TextEncoder === 'function' ? new TextEncoder() : null;
        const octets = (t) => (enc ? enc.encode(t).length : t.length);
        const plier = (l) => {
            if (octets(l) <= 75) return l;
            const bouts = [];
            let ligne = '', taille = 0, premier = true;
            for (const ch of l) {
                const n = octets(ch);
                const max = premier ? 75 : 74;    
                if (taille + n > max) { bouts.push(ligne); ligne = ''; taille = 0; premier = false; }
                ligne += ch; taille += n;
            }
            if (ligne) bouts.push(ligne);
            return bouts.join('\r\n ');
        };
        const ics = lignes.map(plier).join('\r\n');
        try {
            const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'route-du-rhum-' + (e.slug || e.ville || 'etape').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.ics';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 4000);
        } catch (err) {   }
    }

    _fermerDetail() { this._villageOuvert = false; const d = this._q('[data-el=detail]'); if (d) d.classList.remove('tm-open'); this._updateScrim(); }

     
    _setFiltre(f) {
        this._groupIds = null;
        this._traceOn = TRACE_ACTIF;
        this._filtre = f;
        this.querySelectorAll('.tm-chip').forEach((c) => c.classList.toggle('tm-active', c.getAttribute('data-filtre') === f));
        this._refresh();
    }

    _openSheet(name) {
        if (this._sheet === name) return this._closeSheets();
        this._sheet = name;
        const panel = this._q('.tm-panel'), side = this._q('.tm-side');
        if (panel) panel.classList.toggle('tm-sheet-open', name === 'match');
        if (side) side.classList.toggle('tm-sheet-open', name === 'etapes');
        this.querySelectorAll('.tm-tab').forEach((t) => t.classList.toggle('tm-active', t.getAttribute('data-sheet') === name));
        if (name) this._fermerDetail();
        this._updateScrim();
    }

    _closeSheets() {
        this._sheet = null;
        const panel = this._q('.tm-panel'), side = this._q('.tm-side');
        if (panel) panel.classList.remove('tm-sheet-open');
        if (side) side.classList.remove('tm-sheet-open');
        this.querySelectorAll('.tm-tab').forEach((t) => t.classList.remove('tm-active'));
        this._updateScrim();
    }

    _updateScrim() {
        const scrim = this._q('.tm-scrim');
        if (!scrim) return;
        const d = this._q('[data-el=detail]');
        const ficheOuverte = !!(d && d.classList.contains('tm-open'));
         
         
         
        const open = !!this._sheet || (ficheOuverte && !this._estMobile());
        scrim.classList.toggle('tm-show', open);
    }

    _dragSheet(handle, sheet, onClose) {
        if (!handle || !sheet) return;
        let y0 = 0, dy = 0, on = false;
        handle.addEventListener('touchstart', (e) => { on = true; y0 = e.touches[0].clientY; dy = 0; sheet.style.transition = 'none'; }, { passive: true });
        handle.addEventListener('touchmove', (e) => { if (!on) return; dy = Math.max(0, e.touches[0].clientY - y0); sheet.style.transform = 'translateY(' + dy + 'px)'; }, { passive: true });
        handle.addEventListener('touchend', () => { if (!on) return; on = false; sheet.style.transition = ''; sheet.style.transform = ''; if (dy > 80) onClose(); });
    }

    _bindMobileGestures() {
        const panel = this._q('.tm-panel');
        if (panel) this._dragSheet(panel.querySelector('.tm-handle'), panel, () => this._closeSheets());
        const side = this._q('.tm-side');
        if (side) this._dragSheet(side.querySelector('.tm-handle'), side, () => this._closeSheets());
        const detail = this._q('[data-el=detail]');
        if (detail) this._dragSheet(this._q('[data-el=detailHandle]'), detail, () => this._fermerDetail());
        const stage = this._q('[data-el=lbStage]');
        if (stage) {
            let x0 = 0, on = false;
            stage.addEventListener('touchstart', (e) => { on = true; x0 = e.touches[0].clientX; }, { passive: true });
            stage.addEventListener('touchend', (e) => { if (!on) return; on = false; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 45) this._lightboxNav(dx < 0 ? 1 : -1); });
        }
    }

    _geoloc() {
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition((pos) => {
            this._position = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            this._renderListe();
            if (this._map) this._map.flyTo({ center: [this._position.lng, this._position.lat], zoom: 7, speed: 0.8 });
        }, () => { }, { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 });
    }

    async _resoudrePosition() {
        const ville = (this._q('[data-f=ville]').value || '').trim();
        if (ville) {
            try {
                const r = await fetch(GEOCODE_URL + '?q=' + encodeURIComponent(ville) + '&limit=1');
                const data = await r.json();
                const f = data && data.features && data.features[0];
                if (f) return { lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0] };
            } catch (e) { }
        }
        return this._position;
    }

    async _matching() {
        const result = this._q('[data-el=result]');
        const rayon = Number(this._q('[data-f=rayon]').value) || RAYON_DEFAUT;
        const pos = await this._resoudrePosition();
        if (!pos) { this._showResult(result, 'miss', this._t('res_position')); return; }
        if (!this._du || !this._au) { this._showResult(result, 'miss', this._t('res_dates')); return; }
        this._position = pos;
        this._renderListe();
        const matchs = this._etapes
            .filter((e) => this._chevauche(e.dateDebut, e.dateFin, this._du, this._au) && this._haversine(pos.lat, pos.lng, Number(e.latitude), Number(e.longitude)) <= rayon)
            .map((e) => Object.assign({}, e, { _dist: this._haversine(pos.lat, pos.lng, Number(e.latitude), Number(e.longitude)) }))
            .sort((a, b) => new Date(a.dateDebut) - new Date(b.dateDebut));
        if (matchs.length) {
            const e = matchs[0];
            const sujet = this._tp('sujet');
            this._showResult(result, 'hit', this._t('res_oui') + ' ' + sujet + this._t('res_est_a') + '<b>' + this._esc(e.ville || e.titre) + '</b> (' + Math.round(e._dist) + ' km) ' + this._fmtPlage(e.dateDebut, e.dateFin) + '.');
            this._focusEtape(e._id);
        } else {
            const futurs = this._etapes
                .map((e) => Object.assign({}, e, { _dist: this._haversine(pos.lat, pos.lng, Number(e.latitude), Number(e.longitude)) }))
                .filter((e) => new Date(e.dateFin) >= new Date())
                .sort((a, b) => a._dist - b._dist);
            const p = futurs[0];
            const sugg = p ? this._t('res_proche') + '<b>' + this._esc(p.ville || p.titre) + '</b> (' + Math.round(p._dist) + ' km), ' + this._fmtPlage(p.dateDebut, p.dateFin) + '.' : '';
            this._showResult(result, 'miss', this._t('res_non') + sugg);
        }
    }

    _showResult(el, type, html) { el.className = 'tm-result tm-' + type; el.innerHTML = html; }

    _focusEtape(id) {
        const e = this._etapes.find((x) => x._id === id);
        if (!e || !this._map) return;
        const lat = Number(e.latitude), lng = Number(e.longitude);
        if (isNaN(lat) || isNaN(lng)) return;
        this._approcher([lng, lat]);
    }
}

customElements.define('tournee-map', TourneeMap);
})();
})();
