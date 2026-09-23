/* rdr-elements cgu | source route-du-rhum 538f3f8 | rdr-cgu.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["cgu"]="538f3f8";performance.mark("rdr-elements:cgu")}catch(e){}
;(function(){
(function () {
  'use strict';

  

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-cgu')) return;

  



  const IC = {
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    star: '<path d="M12 3.8 14.4 9l5.6.6-4.2 3.9 1.2 5.7L12 16.4l-5 2.8 1.2-5.7L4 9.6 9.6 9Z"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    copyright: '<circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    userOff: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="22" y2="13"/><line x1="22" y1="8" x2="17" y2="13"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  };

  const svg = (clef, classe) => {
    const d = IC[clef];
    if (!d) return '';
    return '<svg class="' + (classe || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + '</svg>';
  };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  




















  const CONF = '/politique-de-condidentialité';
  const MENTIONS = '/mentions-legales';
  const ESPACE = '/mon-espace-rhum';

  const I18N = {
    fr: {
      surtitre: 'Mon Espace Rhum',
      titre: 'Conditions d’utilisation',
      sousTitre: 'Les règles d’accès et d’usage de « Mon Espace Rhum », l’espace personnel des membres de routedurhum.com : suivi de skippers, badges, jeux et données. Elles complètent les Mentions légales et la Politique de confidentialité du site.',
      maj: 'Dernière mise à jour :',
      sommaire: 'Sommaire',
      sommaireAria: 'Sommaire des conditions d’utilisation',
      preambule: {
        titre: 'Préambule',
        champs: [
          { label: 'Éditeur du site', valeur: 'OC Sport Pen Duick' },
          { label: 'Forme juridique', valeur: 'SASU au capital de 884 000 €' },
          { label: 'Immatriculation', valeur: 'RCS Lorient n° 521 573 394' },
          { label: 'Siège social', valeur: '6 bis rue du sous-marin Vénus, 56100 Lorient' }
        ],
        blocs: [
          'Le site routedurhum.com est édité par OC Sport Pen Duick, organisatrice de la Route du Rhum, Destination Guadeloupe (ci-après « l’Organisateur »).',
          '« Mon Espace Rhum » (ci-après « l’Espace ») est l’espace personnel proposé aux personnes qui créent un compte sur le site. Il permet de suivre des skippers, d’accéder à des contenus et à des données personnalisés, de relever des défis, de collectionner des badges et de participer à des jeux et animations.',
          'Les présentes conditions générales d’utilisation (ci-après « les CGU ») définissent les règles d’accès et d’usage de l’Espace. {b}La création d’un compte vaut acceptation pleine et entière des CGU{/b}, de la {a:' + CONF + '}Politique de confidentialité{/a} et des {a:' + MENTIONS + '}Mentions légales{/a} du site. Une personne qui n’accepte pas ces documents ne doit pas créer de compte.',
          'Les CGU complètent les Mentions légales, qui portent les conditions communes à tout le site (accès, responsabilité, liens, propriété intellectuelle, loi applicable), et la Politique de confidentialité. Elles ne les répètent pas : elles précisent ce qui est propre à l’espace membre.'
        ]
      },
      articles: [
        {
          id: 'definitions', icone: 'fileText', court: 'Définitions', titre: '1. Définitions',
          blocs: [
            { defs: [
              ['Espace', 'l’espace personnel « Mon Espace Rhum », accessible après connexion, et l’ensemble des fonctionnalités qui y sont rattachées, y compris celles présentes sur d’autres pages du site lorsque la personne est connectée, comme le suivi d’un skipper depuis sa fiche.'],
              ['Membre', 'toute personne physique titulaire d’un compte.'],
              ['Compte', 'l’identifiant créé par le Membre, associé à une adresse e-mail ou à un compte Google.'],
              ['Jeux', 'les animations dotées de lots proposées dans l’Espace (roue du jour, pronostics, prix de la combativité, Pack Fan, concours photo), chacune régie par son propre règlement.'],
              ['Contenus du Membre', 'tout élément fourni par le Membre : pseudo, pseudo Instagram, photographies, réponses à un sondage.']
            ] }
          ]
        },
        {
          id: 'acces', icone: 'users', court: 'Accès et compte', titre: '2. Accès à l’Espace et création du compte',
          blocs: [
            '{cl}2.1 Gratuité.{/cl} L’accès à l’Espace est gratuit. Il ne donne lieu à aucun achat et ne conditionne aucun achat.',
            '{cl}2.2 Inscription.{/cl} L’inscription se fait sur le site, par la création d’un identifiant et d’un mot de passe, ou par l’intermédiaire d’un compte Google. Dans ce dernier cas, la connexion est régie par les conditions de Google, sur lesquelles l’Organisateur n’a aucune prise.',
            '{cl}2.3 Un compte par personne.{/cl} Le Membre crée un seul compte, à son nom, et fournit des informations exactes. Les Jeux étant limités à une participation par personne, la création de plusieurs comptes par une même personne constitue une fraude et entraîne l’exclusion de tous les comptes concernés.',
            '{cl}2.4 Âge.{/cl} L’inscription est ouverte aux personnes âgées d’au moins quinze ans. Les personnes de moins de quinze ans ne peuvent s’inscrire qu’avec l’accord de leur représentant légal. La participation aux Jeux dotés de lots est réservée aux personnes majeures, ou aux mineurs disposant de l’autorisation de leur représentant légal, laquelle pourra être demandée avant la remise d’un lot.',
            '{cl}2.5 Identifiants.{/cl} Le Membre est responsable de la confidentialité de ses identifiants et de tout usage fait de son compte. Il informe sans délai l’Organisateur de toute utilisation non autorisée.',
            '{cl}2.6 Newsletter.{/cl} L’abonnement à la lettre « Rhum Express » est proposé dans l’Espace, par le formulaire d’inscription à la newsletter du site, qui demande la langue souhaitée. Il n’est pas une condition d’accès à l’Espace et peut être retiré à tout moment par le lien présent dans chaque envoi. Il débloque le badge « Rhum Express » (article 3.3), qui reste acquis après un désabonnement.'
          ]
        },
        {
          id: 'fonctionnement', icone: 'star', court: 'Ce que fait l’Espace', titre: '3. Ce que fait l’Espace, et comment',
          blocs: [
            '{cl}3.1 Suivi de skippers et favoris.{/cl} Le Membre peut suivre des skippers. Ses favoris nourrissent la sélection de contenus qui lui est proposée, ainsi que le compteur de fans affiché sur la fiche de chaque skipper, qui est un nombre de personnes et ne désigne aucune d’elles.',
            '{cl}3.2 Données d’activité.{/cl} Pour faire fonctionner les badges, les défis et les contenus personnalisés, l’Espace enregistre, lorsque le Membre est connecté, un nombre limité d’événements : l’ouverture d’une session sur le site, la consultation d’une fiche de skipper, la lecture d’un article. Ces événements sont rattachés au compte du Membre et à lui seul. {b}Le Membre peut désactiver cet enregistrement à tout moment depuis les réglages de son Espace{/b} ; les badges et les statistiques cessent alors d’évoluer, sans que le reste de l’Espace soit affecté.',
            '{cl}3.3 Badges et classement.{/cl} Les badges se débloquent en fonction de l’activité du Membre : nombre d’articles lus, de skippers consultés, de jours de connexion, de favoris, moments de la journée, présence lors de temps forts de la course, profil complété, suivi de la course sur Instagram, abonnement à la lettre « Rhum Express ». {b}Un badge acquis n’est jamais retiré.{/b} Les compteurs sont mis à jour au fil de l’activité, puis vérifiés et consolidés chaque nuit : un écart de quelques heures entre une action et son effet est donc normal.',
            'Un classement des Membres les plus actifs est établi sur la base d’un score d’activité calculé sur une fenêtre glissante d’environ soixante jours, de sorte que l’activité récente compte davantage. Les badges obtenus entrent dans ce score. {b}Le classement par centile ne s’ouvre que lorsque le nombre de Membres est suffisant{/b} ; en deçà, l’Espace n’affiche qu’un palier. Le classement n’a aucune valeur contractuelle et ne confère par lui-même aucun droit à un lot, sauf disposition expresse du règlement d’un Jeu.',
            '{cl}3.4 Notifications.{/cl} L’Espace affiche des notifications liées à l’activité du Membre, comme l’obtention d’un badge. Elles sont internes au site et ne donnent lieu à aucun envoi d’e-mail hors abonnement volontaire.',
            '{cl}3.5 Sondage et informations complémentaires.{/cl} Le Membre peut, sans obligation, renseigner un pseudo, sa civilité, sa date de naissance, son pays de résidence, son pseudo Instagram, et répondre à un court sondage sur sa venue au village. Ces informations servent à personnaliser l’Espace et à établir un portrait d’audience {b}anonymisé{/b} : la date de naissance n’est jamais affichée, elle est réduite en tranche d’âge, et aucune donnée individuelle n’entre dans le portrait, seuls des groupes d’au moins cinq personnes y figurent.',
            '{cl}3.6 Évolutions.{/cl} L’Espace accompagne un événement. Ses fonctionnalités peuvent être ajoutées, modifiées, suspendues ou retirées à tout moment, en particulier au fil de la course. L’Organisateur s’efforce d’en informer les Membres dans l’Espace mais n’y est pas tenu.'
          ]
        },
        {
          id: 'jeux', icone: 'gift', court: 'Jeux et animations', titre: '4. Jeux et animations',
          blocs: [
            '{cl}4.1 Règlements.{/cl} Chaque Jeu fait l’objet d’un règlement propre, accessible depuis l’Espace, qui précise ses dates, ses conditions de participation, la nature et le nombre des lots, et les modalités de désignation des gagnants et de remise des lots. {b}En cas de contradiction, le règlement du Jeu prévaut sur les présentes CGU pour ce Jeu.{/b}',
            '{cl}4.2 La roue du jour.{/cl} Chaque compte dispose d’{b}un seul tour{/b}, à jouer jusqu’à une date butoir. Les lots sont limités en nombre par journée et attribués selon des instants gagnants tirés à l’avance : un tour gagne s’il tombe après un instant gagnant non encore réclamé. Un instant non réclamé un jour reste réclamable le lendemain. Pour recevoir un lot physique, le gagnant communique les informations nécessaires à sa remise ou à son envoi (nom, prénom, adresse e-mail, téléphone, adresse postale). Un lot ne peut être ni échangé ni converti en argent.',
            '{cl}4.3 Les pronostics.{/cl} Le Membre dépose, par classe, un pronostic sur le vainqueur, jusqu’à la fermeture du concours. Le pronostic peut être modifié ou retiré tant que le concours est ouvert. Un consensus des pronostics est publié après la fermeture, et un classement est établi une fois les résultats réels de la course connus.',
            '{cl}4.4 Le prix de la combativité.{/cl} Le Membre peut, pendant une période de nominations, proposer un skipper par classe, puis, pendant une période de vote, voter pour l’un des nommés. Les périodes sont fixées par le règlement et vérifiées à chaque dépôt. Un vote par Membre et par classe.',
            '{cl}4.5 Le Pack Fan.{/cl} Le Membre peut réclamer un code à usage unique donnant accès à une offre partenaire, notamment sur Virtual Regatta. Un code par personne et par série, dans la limite du stock disponible. {b}L’utilisation du code est régie par les conditions du partenaire qui le consomme{/b}, l’Organisateur ne garantissant que sa remise à une seule personne. Un code communiqué à un tiers par le Membre est réputé utilisé.',
            '{cl}4.6 Le concours photo.{/cl} Ses conditions de participation, la modération, l’usage des photographies et le traitement des données qu’elles contiennent, notamment la géolocalisation intégrée aux fichiers, sont précisés dans son règlement avant toute ouverture.',
            '{cl}4.7 Loyauté.{/cl} Toute tentative de fausser un Jeu, un compteur ou un classement, par quelque moyen que ce soit (comptes multiples, automatisation, manipulation des requêtes envoyées au site, usage d’un code obtenu par un tiers), entraîne l’exclusion du Membre des Jeux concernés, la perte des lots et, le cas échéant, la suppression du compte. L’Organisateur peut modifier, suspendre ou interrompre un Jeu en cas de fraude, d’incident technique ou de force majeure, sans que sa responsabilité puisse être engagée.'
          ]
        },
        {
          id: 'contenus', icone: 'message', court: 'Contenus et comportement', titre: '5. Contenus du Membre et comportement',
          blocs: [
            '{cl}5.1 Pseudo et pseudo Instagram.{/cl} Le pseudo choisi et le pseudo Instagram déclaré ne doivent pas usurper l’identité d’un tiers, ni contenir de propos injurieux, discriminatoires ou contraires à la loi. Le pseudo Instagram déclaré fait l’objet d’une vérification par l’Organisateur avant d’être pris en compte.',
            '{cl}5.2 Photographies.{/cl} Lorsqu’un concours photo est ouvert, en envoyant une photographie, le Membre garantit en détenir les droits et disposer de l’accord des personnes reconnaissables, et concède à l’Organisateur, pour la durée et le périmètre précisés dans le règlement du concours, le droit de la reproduire et de la représenter dans le cadre de la communication de l’événement.',
            '{cl}5.3 Modération.{/cl} L’Organisateur peut retirer tout Contenu du Membre contraire aux présentes, sans préavis.'
          ]
        },
        {
          id: 'donnees', icone: 'lock', court: 'Données personnelles', titre: '6. Données personnelles',
          blocs: [
            '{cl}6.1 Cadre.{/cl} Les traitements liés à l’Espace sont décrits dans la {a:' + CONF + '}Politique de confidentialité{/a} du site, à laquelle les présentes renvoient. Le responsable de traitement est OC Sport Pen Duick.',
            { champs: [
              { label: 'Contact données personnelles', valeur: 'rgpd@ocsport.com', href: 'mailto:rgpd@ocsport.com', aide: 'Cette adresse est dédiée aux demandes relatives à la protection des données.' },
              { label: 'Par courrier', valeur: 'Zac de Keroman, 6 rue du sous-marin Vénus, 56100 Lorient', aide: 'À l’attention du service juridique.' }
            ] },
            '{cl}6.2 Données propres à l’Espace.{/cl} En plus des données de compte, l’Espace traite : les événements d’activité décrits à l’article 3.2 ; les favoris ; les badges, compteurs, score et rang qui en découlent ; les préférences, dont le choix de désactiver l’enregistrement d’activité ; les informations facultatives de l’article 3.5 ; les participations aux Jeux (tour de roue, pronostics, nominations, votes, code Pack Fan attribué) ; et, pour un gagnant, les informations de remise du lot.',
            '{cl}6.3 Finalités et bases légales.{/cl} Le fonctionnement de l’Espace et des Jeux (exécution des présentes CGU) ; la personnalisation des contenus et le portrait d’audience anonymisé (intérêt légitime de l’Organisateur à comprendre son public, avec possibilité de s’y opposer par la désactivation prévue à l’article 3.2) ; la newsletter (consentement) ; la prévention des fraudes (intérêt légitime).',
            '{cl}6.4 Durée.{/cl} Les données de l’Espace sont conservées pendant la durée de vie du compte. À l’issue de l’édition 2026 de la course, les données d’activité et de Jeux sont supprimées ou anonymisées dans un délai de douze mois, et les informations de remise d’un lot sont conservées le temps nécessaire à cette remise, puis supprimées.',
            '{cl}6.5 Droits, exercés depuis l’Espace.{/cl} Le Membre dispose des droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, dans les conditions de la Politique de confidentialité. {b}Trois d’entre eux s’exercent directement depuis l’Espace, sans démarche{/b} :',
            { droits: [
              { icone: 'download', titre: 'Télécharger ses données', texte: 'Le Membre obtient, dans son navigateur, un fichier de l’ensemble de ses données d’Espace.' },
              { icone: 'trash', titre: 'Supprimer ses données', texte: 'Le Membre efface l’ensemble de ses données d’Espace (activité, favoris, préférences, badges, participations) tout en conservant son compte, qui repart de zéro. L’action est irréversible et fait l’objet d’une confirmation.' },
              { icone: 'userOff', titre: 'Supprimer son compte', texte: 'Le Membre efface ses données puis son compte, après avoir recopié son adresse e-mail. L’action est irréversible.' }
            ] },
            'La suppression n’emporte que les données du Membre qui l’a demandée, et rien d’autre.',
            '{cl}6.6 Ce qui survit à une suppression.{/cl} Lorsque le Membre a gagné un lot, la ligne correspondante n’est pas supprimée mais {b}anonymisée{/b} : le lot, sa date et l’état de sa remise sont conservés afin que l’Organisateur puisse honorer un envoi engagé et tenir sa comptabilité des lots ; le nom, l’adresse e-mail, le téléphone et l’adresse postale sont effacés.',
            '{cl}6.7 Stockage local.{/cl} L’Espace mémorise dans le navigateur du Membre, sans cookie tiers, deux informations techniques : le fait qu’une session a déjà été comptée, pour ne pas la compter deux fois, et le choix de désactiver l’enregistrement d’activité. Elles sont propres à l’appareil.'
          ]
        },
        {
          id: 'disponibilite', icone: 'clock', court: 'Disponibilité et fin', titre: '7. Disponibilité, suspension, fin de l’Espace',
          blocs: [
            '{cl}7.1 Disponibilité.{/cl} L’Espace est accessible en continu, sous réserve des interruptions de maintenance, des incidents et des limites du réseau internet, sans garantie de continuité. Les calculs nocturnes décrits à l’article 3.3 peuvent être retardés.',
            '{cl}7.2 Suspension ou suppression par l’Organisateur.{/cl} L’Organisateur peut suspendre ou supprimer un compte en cas de manquement aux présentes, de fraude avérée ou de comportement contraire à la loi. Sauf urgence, le Membre en est informé à l’adresse e-mail de son compte.',
            '{cl}7.3 Fin de l’Espace.{/cl} L’Espace est lié à l’édition 2026 de la course. L’Organisateur pourra le fermer à l’issue de l’événement, après en avoir informé les Membres au moins trente jours à l’avance dans l’Espace ou par e-mail, et appliquera alors les durées de l’article 6.4.'
          ]
        },
        {
          id: 'responsabilite', icone: 'copyright', court: 'Responsabilité', titre: '8. Responsabilité et propriété intellectuelle',
          blocs: [
            '{cl}8.1{/cl} Les dispositions des {a:' + MENTIONS + '}Mentions légales{/a} relatives à l’accès au site, à la responsabilité de l’Éditeur, aux liens hypertextes et à la propriété intellectuelle s’appliquent à l’Espace.',
            '{cl}8.2{/cl} Les badges, visuels, textes et mécaniques de l’Espace sont la propriété de l’Organisateur ou de ses partenaires. Les marques et noms des skippers, des bateaux et des partenaires appartiennent à leurs titulaires respectifs.',
            '{cl}8.3{/cl} L’Espace est fourni à titre gratuit. L’Organisateur ne saurait être tenu responsable d’une indisponibilité, d’une perte de badges ou de rang consécutive à une désactivation choisie par le Membre ou à un incident, ni de l’usage fait par un partenaire d’un code remis dans le cadre du Pack Fan.'
          ]
        },
        {
          id: 'modification', icone: 'rotate', court: 'Modifications', titre: '9. Modification des CGU',
          blocs: [
            'Les CGU peuvent être modifiées à tout moment, notamment pour accompagner l’ajout d’un Jeu. La version en vigueur est celle publiée sur le site, datée en tête. Une modification substantielle est signalée dans l’Espace ; la poursuite de l’utilisation de l’Espace après cette signalisation vaut acceptation. Un Membre qui refuse une nouvelle version peut supprimer son compte depuis l’Espace.'
          ]
        },
        {
          id: 'droit', icone: 'building', court: 'Droit applicable', titre: '10. Droit applicable',
          blocs: [
            'Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, la juridiction compétente est déterminée selon les règles de droit commun.'
          ]
        }
      ],
      lies: {
        titre: 'Documents liés',
        texte: 'Les CGU se lisent avec les deux documents qu’elles complètent. Une fois connecté, les réglages et les droits décrits à l’article 6.5 sont dans votre Espace.',
        liens: [
          { libelle: 'Politique de confidentialité', href: CONF },
          { libelle: 'Mentions légales', href: MENTIONS },
          { libelle: 'Mon Espace Rhum', href: ESPACE }
        ]
      }
    },

    en: {
      surtitre: 'My Espace Rhum',
      titre: 'Terms of use',
      sousTitre: 'The rules for accessing and using “My Espace Rhum”, the personal area for routedurhum.com members: following skippers, badges, games and data. They complement the site’s Legal notice and Privacy policy.',
      maj: 'Last updated:',
      sommaire: 'Contents',
      sommaireAria: 'Table of contents of the terms of use',
      preambule: {
        titre: 'Preamble',
        champs: [
          { label: 'Site publisher', valeur: 'OC Sport Pen Duick' },
          { label: 'Legal form', valeur: 'SASU with a share capital of €884,000' },
          { label: 'Registration', valeur: 'Lorient Trade and Companies Register no. 521 573 394' },
          { label: 'Registered office', valeur: '6 bis rue du sous-marin Vénus, 56100 Lorient, France' }
        ],
        blocs: [
          'The routedurhum.com website is published by OC Sport Pen Duick, organiser of the Route du Rhum, Destination Guadeloupe (hereafter “the Organiser”).',
          '“My Espace Rhum” (hereafter “the Space”) is the personal area offered to people who create an account on the site. It lets them follow skippers, access personalised content and data, take on challenges, collect badges and take part in games and activities.',
          'These terms of use (hereafter “the Terms”) set out the rules for accessing and using the Space. {b}Creating an account constitutes full acceptance of the Terms{/b}, of the site’s {a:' + CONF + '}Privacy policy{/a} and of its {a:' + MENTIONS + '}Legal notice{/a}. Anyone who does not accept these documents must not create an account.',
          'The Terms complement the Legal notice, which carries the conditions common to the whole site (access, liability, links, intellectual property, governing law), and the Privacy policy. They do not repeat them: they set out what is specific to the member area.'
        ]
      },
      articles: [
        {
          id: 'definitions', icone: 'fileText', court: 'Definitions', titre: '1. Definitions',
          blocs: [
            { defs: [
              ['Space', 'the personal area “My Espace Rhum”, available after signing in, together with every feature attached to it, including those found on other pages of the site while the person is signed in, such as following a skipper from their profile.'],
              ['Member', 'any natural person who holds an account.'],
              ['Account', 'the login created by the Member, linked to an e-mail address or to a Google account.'],
              ['Games', 'the prize-bearing activities offered in the Space (the daily wheel, predictions, the fighting spirit award, the Fan Pack, the photo contest), each governed by its own rules.'],
              ['Member Content', 'anything supplied by the Member: username, Instagram handle, photographs, survey answers.']
            ] }
          ]
        },
        {
          id: 'acces', icone: 'users', court: 'Access and account', titre: '2. Accessing the Space and creating an account',
          blocs: [
            '{cl}2.1 Free of charge.{/cl} Access to the Space is free. It involves no purchase and is not a condition of any purchase.',
            '{cl}2.2 Signing up.{/cl} Registration takes place on the site, by creating a login and a password, or through a Google account. In the latter case, the connection is governed by Google’s terms, over which the Organiser has no control.',
            '{cl}2.3 One account per person.{/cl} The Member creates a single account, in their own name, and provides accurate information. As the Games are limited to one entry per person, creating several accounts for the same person constitutes fraud and leads to the exclusion of every account involved.',
            '{cl}2.4 Age.{/cl} Registration is open to people aged fifteen or over. People under fifteen may only register with the consent of their legal guardian. Taking part in prize-bearing Games is reserved for adults, or for minors holding their legal guardian’s permission, which may be requested before a prize is handed over.',
            '{cl}2.5 Login details.{/cl} The Member is responsible for keeping their login details confidential and for any use made of their account. They inform the Organiser without delay of any unauthorised use.',
            '{cl}2.6 Newsletter.{/cl} Subscribing to the “Rhum Express” newsletter is offered within the Space, through the site’s newsletter sign-up form, which asks for the preferred language. It is not a condition of access to the Space and can be withdrawn at any time using the link in every issue. It unlocks the “Rhum Express” badge (article 3.3), which is kept after unsubscribing.'
          ]
        },
        {
          id: 'fonctionnement', icone: 'star', court: 'What the Space does', titre: '3. What the Space does, and how',
          blocs: [
            '{cl}3.1 Following skippers and favourites.{/cl} The Member can follow skippers. Their favourites feed the selection of content offered to them, as well as the fan counter shown on each skipper’s profile, which is a number of people and identifies none of them.',
            '{cl}3.2 Activity data.{/cl} To make badges, challenges and personalised content work, the Space records a limited number of events while the Member is signed in: opening a session on the site, viewing a skipper’s profile, reading an article. These events are attached to the Member’s account and to it alone. {b}The Member can switch this recording off at any time from the settings of their Space{/b}; badges and statistics then stop evolving, without the rest of the Space being affected.',
            '{cl}3.3 Badges and ranking.{/cl} Badges unlock according to the Member’s activity: number of articles read, skippers viewed, days signed in, favourites, times of day, presence during key moments of the race, completed profile, following the race on Instagram, subscribing to the “Rhum Express” newsletter. {b}A badge once earned is never taken away.{/b} Counters are updated as activity happens, then checked and consolidated every night: a gap of a few hours between an action and its effect is therefore normal.',
            'A ranking of the most active Members is drawn up from an activity score computed over a rolling window of about sixty days, so that recent activity counts for more. Badges earned count towards this score. {b}The percentile ranking only opens once there are enough Members{/b}; below that, the Space only shows a tier. The ranking has no contractual value and does not in itself confer any right to a prize, unless a Game’s rules expressly say so.',
            '{cl}3.4 Notifications.{/cl} The Space shows notifications related to the Member’s activity, such as earning a badge. They stay inside the site and trigger no e-mail outside a voluntary subscription.',
            '{cl}3.5 Survey and additional information.{/cl} The Member may, without obligation, provide a username, their title, their date of birth, their country of residence, their Instagram handle, and answer a short survey about their visit to the village. This information is used to personalise the Space and to build an {b}anonymised{/b} audience profile: the date of birth is never displayed, it is reduced to an age bracket, and no individual data enters the profile, only groups of at least five people appear in it.',
            '{cl}3.6 Changes.{/cl} The Space accompanies an event. Its features may be added, changed, suspended or withdrawn at any time, in particular as the race unfolds. The Organiser endeavours to inform Members within the Space but is not bound to.'
          ]
        },
        {
          id: 'jeux', icone: 'gift', court: 'Games and activities', titre: '4. Games and activities',
          blocs: [
            '{cl}4.1 Rules.{/cl} Each Game has its own rules, available from the Space, which set out its dates, its conditions of entry, the nature and number of prizes, and how winners are chosen and prizes delivered. {b}In the event of a conflict, the rules of the Game prevail over these Terms for that Game.{/b}',
            '{cl}4.2 The daily wheel.{/cl} Each account has {b}a single spin{/b}, to be played before a closing date. Prizes are limited in number per day and awarded according to winning moments drawn in advance: a spin wins if it lands after a winning moment not yet claimed. A moment left unclaimed one day remains claimable the next. To receive a physical prize, the winner provides the information needed to hand it over or send it (surname, first name, e-mail address, telephone, postal address). A prize can be neither exchanged nor converted into cash.',
            '{cl}4.3 Predictions.{/cl} The Member submits, for each class, a prediction of the winner, until the contest closes. The prediction can be changed or withdrawn while the contest is open. A consensus of predictions is published after closing, and a ranking is drawn up once the actual race results are known.',
            '{cl}4.4 The fighting spirit award.{/cl} During a nomination period, the Member may put forward one skipper per class, then, during a voting period, vote for one of the nominees. The periods are set by the rules and checked at every submission. One vote per Member and per class.',
            '{cl}4.5 The Fan Pack.{/cl} The Member may claim a single-use code giving access to a partner offer, in particular on Virtual Regatta. One code per person and per series, while stocks last. {b}Use of the code is governed by the terms of the partner that redeems it{/b}; the Organiser only guarantees that it is handed to a single person. A code passed on to a third party by the Member is deemed used.',
            '{cl}4.6 The photo contest.{/cl} Its conditions of entry, moderation, the use of the photographs and the processing of the data they contain, in particular the geolocation embedded in the files, are set out in its rules before it opens.',
            '{cl}4.7 Fair play.{/cl} Any attempt to distort a Game, a counter or a ranking, by any means whatsoever (multiple accounts, automation, tampering with the requests sent to the site, use of a code obtained from a third party), leads to the Member’s exclusion from the Games concerned, the loss of prizes and, where appropriate, the deletion of the account. The Organiser may change, suspend or stop a Game in the event of fraud, technical incident or force majeure, without incurring any liability.'
          ]
        },
        {
          id: 'contenus', icone: 'message', court: 'Content and conduct', titre: '5. Member Content and conduct',
          blocs: [
            '{cl}5.1 Username and Instagram handle.{/cl} The chosen username and the declared Instagram handle must not impersonate a third party, nor contain abusive, discriminatory or unlawful language. The declared Instagram handle is checked by the Organiser before being taken into account.',
            '{cl}5.2 Photographs.{/cl} When a photo contest is open, by sending a photograph the Member warrants that they hold the rights to it and have the consent of any recognisable person, and grants the Organiser, for the duration and scope set out in the contest rules, the right to reproduce and display it as part of the event’s communication.',
            '{cl}5.3 Moderation.{/cl} The Organiser may remove any Member Content that breaches these Terms, without notice.'
          ]
        },
        {
          id: 'donnees', icone: 'lock', court: 'Personal data', titre: '6. Personal data',
          blocs: [
            '{cl}6.1 Framework.{/cl} The processing linked to the Space is described in the site’s {a:' + CONF + '}Privacy policy{/a}, to which these Terms refer. The data controller is OC Sport Pen Duick.',
            { champs: [
              { label: 'Personal data contact', valeur: 'rgpd@ocsport.com', href: 'mailto:rgpd@ocsport.com', aide: 'This address is dedicated to data protection requests.' },
              { label: 'By post', valeur: 'Zac de Keroman, 6 rue du sous-marin Vénus, 56100 Lorient, France', aide: 'For the attention of the legal department.' }
            ] },
            '{cl}6.2 Data specific to the Space.{/cl} In addition to account data, the Space processes: the activity events described in article 3.2; favourites; the badges, counters, score and rank derived from them; preferences, including the choice to switch activity recording off; the optional information in article 3.5; entries in the Games (wheel spin, predictions, nominations, votes, Fan Pack code issued); and, for a winner, the prize delivery details.',
            '{cl}6.3 Purposes and legal bases.{/cl} Running the Space and the Games (performance of these Terms); personalising content and the anonymised audience profile (the Organiser’s legitimate interest in understanding its audience, with the option to object by switching recording off as provided in article 3.2); the newsletter (consent); fraud prevention (legitimate interest).',
            '{cl}6.4 Retention.{/cl} Space data is kept for the life of the account. After the 2026 edition of the race, activity and Game data is deleted or anonymised within twelve months, and prize delivery details are kept for as long as the delivery requires, then deleted.',
            '{cl}6.5 Rights, exercised from the Space.{/cl} The Member has the rights of access, rectification, erasure, restriction, objection and portability, under the conditions of the Privacy policy. {b}Three of them can be exercised directly from the Space, with no formalities{/b}:',
            { droits: [
              { icone: 'download', titre: 'Download your data', texte: 'The Member receives, in their browser, a file of all their Space data.' },
              { icone: 'trash', titre: 'Delete your data', texte: 'The Member erases all their Space data (activity, favourites, preferences, badges, entries) while keeping their account, which starts again from scratch. The action is irreversible and asks for confirmation.' },
              { icone: 'userOff', titre: 'Delete your account', texte: 'The Member erases their data and then their account, after typing their e-mail address again. The action is irreversible.' }
            ] },
            'Deletion only affects the data of the Member who requested it, and nothing else.',
            '{cl}6.6 What survives a deletion.{/cl} When the Member has won a prize, the corresponding record is not deleted but {b}anonymised{/b}: the prize, its date and its delivery status are kept so that the Organiser can honour a dispatch already under way and keep its prize accounts; the name, e-mail address, telephone and postal address are erased.',
            '{cl}6.7 Local storage.{/cl} The Space stores two technical pieces of information in the Member’s browser, without any third-party cookie: the fact that a session has already been counted, so that it is not counted twice, and the choice to switch activity recording off. They belong to the device.'
          ]
        },
        {
          id: 'disponibilite', icone: 'clock', court: 'Availability and closure', titre: '7. Availability, suspension and closure of the Space',
          blocs: [
            '{cl}7.1 Availability.{/cl} The Space is available around the clock, subject to maintenance interruptions, incidents and the limits of the internet, with no guarantee of continuity. The overnight calculations described in article 3.3 may be delayed.',
            '{cl}7.2 Suspension or deletion by the Organiser.{/cl} The Organiser may suspend or delete an account in the event of a breach of these Terms, proven fraud or unlawful conduct. Except in urgent cases, the Member is informed at the e-mail address of their account.',
            '{cl}7.3 Closure of the Space.{/cl} The Space is tied to the 2026 edition of the race. The Organiser may close it after the event, having informed Members at least thirty days in advance within the Space or by e-mail, and will then apply the retention periods of article 6.4.'
          ]
        },
        {
          id: 'responsabilite', icone: 'copyright', court: 'Liability', titre: '8. Liability and intellectual property',
          blocs: [
            '{cl}8.1{/cl} The provisions of the {a:' + MENTIONS + '}Legal notice{/a} relating to access to the site, the Publisher’s liability, hyperlinks and intellectual property apply to the Space.',
            '{cl}8.2{/cl} The badges, visuals, texts and mechanics of the Space belong to the Organiser or its partners. The trademarks and names of skippers, boats and partners belong to their respective owners.',
            '{cl}8.3{/cl} The Space is provided free of charge. The Organiser cannot be held liable for unavailability, for a loss of badges or rank following a switch-off chosen by the Member or an incident, nor for the use a partner makes of a code issued under the Fan Pack.'
          ]
        },
        {
          id: 'modification', icone: 'rotate', court: 'Changes to the Terms', titre: '9. Changes to the Terms',
          blocs: [
            'The Terms may be changed at any time, in particular to accompany the addition of a Game. The version in force is the one published on the site, dated at the top. A substantial change is flagged within the Space; continuing to use the Space after that notice constitutes acceptance. A Member who refuses a new version may delete their account from the Space.'
          ]
        },
        {
          id: 'droit', icone: 'building', court: 'Governing law', titre: '10. Governing law',
          blocs: [
            'These Terms are governed by French law. In the event of a dispute, and failing an amicable settlement, the competent court is determined under the ordinary rules of jurisdiction.'
          ]
        }
      ],
      lies: {
        titre: 'Related documents',
        texte: 'The Terms are read together with the two documents they complement. Once signed in, the settings and the rights described in article 6.5 are in your Space.',
        liens: [
          { libelle: 'Privacy policy', href: CONF },
          { libelle: 'Legal notice', href: MENTIONS },
          { libelle: 'My Espace Rhum', href: ESPACE }
        ]
      }
    }
  };

  const MOIS = {
    fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  


  function dateLisible(iso, lang) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || '').trim());
    if (!m) return String(iso || '');
    const mois = MOIS[lang][Number(m[2]) - 1];
    if (!mois) return String(iso);
    return Number(m[3]) + ' ' + mois + ' ' + m[1];
  }

  











  const CSS = `
rdr-cgu{display:block;width:100%;}
rdr-cgu .cgu{
  --cgu-fond:#0E111D;
  --cgu-encre:#EEF2F8;
  --cgu-encre-douce:rgba(238,242,248,.72);
  --cgu-encre-sourde:rgba(238,242,248,.5);
  --cgu-filet-sombre:rgba(238,242,248,.14);
  --cgu-or:#FCDD00;
  --cgu-or-voile:rgba(252,221,0,.12);
  --cgu-or-filet:rgba(252,221,0,.4);
  --cgu-or-badge:rgba(252,221,0,.55);
  --cgu-carte:#FFFFFF;
  --cgu-carte-encre:#0E111D;
  --cgu-carte-texte:#2C3547;
  --cgu-carte-sourd:#6B7482;
  --cgu-carte-filet:#E4E8EE;
  --cgu-panneau:#F4F6F9;
  --cgu-vert:#006F7B;
  --cgu-t1:11px;
  --cgu-t2:13px;
  --cgu-t3:15px;
  --cgu-t4:17px;
  --cgu-t5:clamp(22px, 2.2vw, 30px);
  --cgu-t6:clamp(38px, 4.4vw, 62px);
  --cgu-e1:4px; --cgu-e2:8px; --cgu-e3:12px; --cgu-e4:16px;
  --cgu-e5:24px; --cgu-e6:32px; --cgu-e7:48px; --cgu-e8:64px;
  --cgu-r-carte:18px;
  --cgu-r-badge:14px;
  --cgu-r-lien:10px;
  --cgu-chrome:0px;
  --cgu-largeur:1180px;
  position:relative;
  display:block;
  background:var(--cgu-fond);
  color:var(--cgu-encre);
  font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-size:var(--cgu-t3);
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
rdr-cgu .cgu,rdr-cgu .cgu *,rdr-cgu .cgu *::before,rdr-cgu .cgu *::after{box-sizing:border-box;}
rdr-cgu .cgu p,rdr-cgu .cgu h1,rdr-cgu .cgu h2,rdr-cgu .cgu h3,rdr-cgu .cgu ul,rdr-cgu .cgu ol,rdr-cgu .cgu dl,rdr-cgu .cgu dd,rdr-cgu .cgu dt{margin:0;padding:0;}
rdr-cgu .cgu ul,rdr-cgu .cgu ol{list-style:none;}
rdr-cgu .cgu a{color:inherit;text-decoration:none;}
rdr-cgu .cgu svg{display:block;}

 
rdr-cgu .cgu .cgu-cadre{max-width:var(--cgu-largeur);margin:0 auto;padding:0 var(--cgu-e5);}
rdr-cgu .cgu .cgu-hero{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:var(--cgu-e6);align-items:center;padding:calc(var(--cgu-e8) + var(--cgu-e3)) 0 var(--cgu-e7);}
rdr-cgu .cgu .cgu-surtitre{display:inline-flex;align-items:center;gap:var(--cgu-e2);margin:0 0 var(--cgu-e4);font-size:var(--cgu-t2);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cgu-or);}
rdr-cgu .cgu .cgu-surtitre::before{content:'';width:var(--cgu-e5);height:2px;background:var(--cgu-or);border-radius:2px;}
rdr-cgu .cgu .cgu-titre{margin:0 0 var(--cgu-e4);font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--cgu-t6);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-cgu .cgu .cgu-sous{max-width:60ch;margin:0 0 var(--cgu-e5);font-size:var(--cgu-t4);line-height:1.6;color:var(--cgu-encre-douce);}
rdr-cgu .cgu .cgu-pastille{display:inline-flex;align-items:center;gap:var(--cgu-e2);padding:var(--cgu-e2) var(--cgu-e4);border:1px solid var(--cgu-or-filet);border-radius:999px;font-size:var(--cgu-t2);font-weight:500;color:var(--cgu-or);}
rdr-cgu .cgu .cgu-pastille svg{width:16px;height:16px;}
rdr-cgu .cgu .cgu-hero-icone{width:200px;height:200px;color:var(--cgu-or);opacity:.55;}
rdr-cgu .cgu .cgu-hero-icone svg{width:100%;height:100%;stroke-width:1.1;}

 
rdr-cgu .cgu .cgu-corps{display:grid;grid-template-columns:232px minmax(0,1fr);gap:var(--cgu-e7);align-items:start;padding-bottom:var(--cgu-e8);}
rdr-cgu .cgu .cgu-som{position:sticky;top:calc(var(--cgu-chrome) + var(--cgu-e6));max-height:calc(100vh - var(--cgu-chrome) - var(--cgu-e8));overflow-y:auto;overscroll-behavior:contain;padding-right:var(--cgu-e2);scrollbar-width:thin;scrollbar-color:var(--cgu-filet-sombre) transparent;}
rdr-cgu .cgu .cgu-som.deborde{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);}
rdr-cgu .cgu .cgu-som-titre{margin:0 0 var(--cgu-e4);font-size:var(--cgu-t1);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cgu-encre-sourde);}
rdr-cgu .cgu .cgu-som-liste{display:grid;gap:2px;}
rdr-cgu .cgu .cgu-som-liste li{min-width:0;}
rdr-cgu .cgu .cgu-som-lien{display:flex;align-items:center;gap:var(--cgu-e3);padding:var(--cgu-e2) var(--cgu-e3);border-left:2px solid transparent;border-radius:var(--cgu-r-lien);font-size:var(--cgu-t2);font-weight:500;line-height:1.3;color:var(--cgu-encre-douce);transition:background .15s,color .15s,border-color .15s;}
rdr-cgu .cgu .cgu-som-num{flex:0 0 auto;min-width:1.6em;font-variant-numeric:tabular-nums;font-size:var(--cgu-t1);font-weight:700;letter-spacing:.04em;color:var(--cgu-encre-sourde);transition:color .15s;}
rdr-cgu .cgu .cgu-som-lien svg{flex:0 0 auto;width:16px;height:16px;color:var(--cgu-or);}
rdr-cgu .cgu .cgu-som-lib{min-width:0;}
rdr-cgu .cgu .cgu-som-lien:hover{background:rgba(255,255,255,.06);color:#FFFFFF;}
rdr-cgu .cgu .cgu-som-lien:focus-visible{outline:2px solid var(--cgu-or);outline-offset:2px;}
rdr-cgu .cgu .cgu-som-lien.est-actif{background:var(--cgu-or-voile);border-left-color:var(--cgu-or);color:#FFFFFF;font-weight:600;}
rdr-cgu .cgu .cgu-som-lien.est-actif .cgu-som-num{color:var(--cgu-or);}
rdr-cgu .cgu .cgu-lecture{min-width:0;display:grid;gap:var(--cgu-e8);}

 
rdr-cgu .cgu .cgu-sec{min-width:0;scroll-margin-top:calc(var(--cgu-chrome) + var(--cgu-e5));}
rdr-cgu .cgu .cgu-sec-tete{display:flex;align-items:center;gap:var(--cgu-e4);margin:0 0 var(--cgu-e6);padding:0 0 var(--cgu-e4);border-bottom:1px solid var(--cgu-filet-sombre);}
rdr-cgu .cgu .cgu-badge{flex:0 0 auto;display:grid;place-items:center;width:48px;height:48px;border-radius:var(--cgu-r-badge);background:var(--cgu-or-badge);color:var(--cgu-fond);}
rdr-cgu .cgu .cgu-badge svg{width:24px;height:24px;}
rdr-cgu .cgu .cgu-sec-titre{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--cgu-t5);line-height:1.1;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-cgu .cgu .cgu-sec-titre.cgu-sec-titre--sobre{text-transform:none;font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:var(--cgu-t4);letter-spacing:0;}

 
rdr-cgu .cgu .cgu-carte{display:grid;gap:var(--cgu-e4);padding:var(--cgu-e6) var(--cgu-e6);border-radius:var(--cgu-r-carte);background:var(--cgu-carte);color:var(--cgu-carte-texte);}
rdr-cgu .cgu .cgu-carte p{color:var(--cgu-carte-texte);}
rdr-cgu .cgu .cgu-carte a{color:var(--cgu-vert);font-weight:600;text-decoration:underline;text-decoration-color:rgba(0,111,123,.35);text-underline-offset:3px;}
rdr-cgu .cgu .cgu-carte a:hover{text-decoration-color:var(--cgu-vert);}
rdr-cgu .cgu .cgu-carte a:focus-visible{outline:2px solid var(--cgu-vert);outline-offset:2px;border-radius:2px;}
rdr-cgu .cgu .cgu-carte strong{color:var(--cgu-carte-encre);font-weight:700;}
rdr-cgu .cgu .cgu-cl{color:var(--cgu-carte-encre);font-weight:700;}
rdr-cgu .cgu .cgu-champs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cgu-e5) var(--cgu-e7);padding:var(--cgu-e4) 0;}
rdr-cgu .cgu .cgu-champs--ligne{padding:var(--cgu-e2) 0 var(--cgu-e4);border-bottom:1px solid var(--cgu-carte-filet);}
rdr-cgu .cgu .cgu-champ{display:grid;gap:var(--cgu-e1);min-width:0;}
rdr-cgu .cgu .cgu-champ-lib{font-size:var(--cgu-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cgu-vert);}
rdr-cgu .cgu .cgu-champ-val{color:var(--cgu-carte-encre);font-weight:500;overflow-wrap:anywhere;}
rdr-cgu .cgu .cgu-champ-aide{font-size:var(--cgu-t2);font-style:italic;color:var(--cgu-vert);}
rdr-cgu .cgu .cgu-defs{display:grid;gap:var(--cgu-e3);}
rdr-cgu .cgu .cgu-def{display:grid;grid-template-columns:150px minmax(0,1fr);gap:var(--cgu-e4);padding:var(--cgu-e3) 0;border-top:1px solid var(--cgu-carte-filet);}
rdr-cgu .cgu .cgu-def:first-child{border-top:0;padding-top:0;}
rdr-cgu .cgu .cgu-def dt{font-weight:700;color:var(--cgu-carte-encre);}
rdr-cgu .cgu .cgu-def dd{color:var(--cgu-carte-texte);}
rdr-cgu .cgu .cgu-puces{display:grid;gap:var(--cgu-e2);}
rdr-cgu .cgu .cgu-puces li{position:relative;padding-left:var(--cgu-e5);}
rdr-cgu .cgu .cgu-puces li::before{content:'';position:absolute;left:var(--cgu-e1);top:.68em;width:6px;height:6px;border-radius:50%;background:var(--cgu-vert);}
rdr-cgu .cgu .cgu-droits{display:grid;gap:var(--cgu-e3);}
rdr-cgu .cgu .cgu-droit{display:flex;gap:var(--cgu-e4);align-items:flex-start;padding:var(--cgu-e4) var(--cgu-e5);border-radius:var(--cgu-r-badge);background:var(--cgu-panneau);}
rdr-cgu .cgu .cgu-droit svg{flex:0 0 auto;width:22px;height:22px;margin-top:2px;color:var(--cgu-vert);}
rdr-cgu .cgu .cgu-droit-titre{display:block;margin:0 0 var(--cgu-e1);font-weight:700;color:var(--cgu-carte-encre);}
rdr-cgu .cgu .cgu-droit p{font-size:var(--cgu-t3);}
rdr-cgu .cgu .cgu-note{display:flex;gap:var(--cgu-e3);align-items:flex-start;padding:var(--cgu-e4) var(--cgu-e5);border-radius:var(--cgu-r-badge);background:var(--cgu-panneau);font-size:var(--cgu-t2);color:var(--cgu-carte-sourd);}
rdr-cgu .cgu .cgu-note svg{flex:0 0 auto;width:18px;height:18px;color:var(--cgu-vert);}
rdr-cgu .cgu .cgu-h3{margin:var(--cgu-e2) 0 0;font-size:var(--cgu-t4);font-weight:700;color:var(--cgu-carte-encre);}

 
rdr-cgu .cgu .cgu-lies{display:flex;gap:var(--cgu-e6);align-items:flex-start;padding:var(--cgu-e6);border:1px solid var(--cgu-or-filet);border-radius:var(--cgu-r-carte);background:var(--cgu-or-voile);}
rdr-cgu .cgu .cgu-lies-icone{flex:0 0 auto;display:grid;place-items:center;width:60px;height:60px;border-radius:50%;background:rgba(252,221,0,.16);color:var(--cgu-or);}
rdr-cgu .cgu .cgu-lies-icone svg{width:26px;height:26px;}
rdr-cgu .cgu .cgu-lies-corps{flex:1 1 auto;min-width:0;}
rdr-cgu .cgu .cgu-lies-titre{margin:0 0 var(--cgu-e2);font-size:var(--cgu-t4);font-weight:700;color:#FFFFFF;}
rdr-cgu .cgu .cgu-lies p{margin:0 0 var(--cgu-e4);color:var(--cgu-encre-douce);}
rdr-cgu .cgu .cgu-lies-liens{display:flex;flex-wrap:wrap;gap:var(--cgu-e2) var(--cgu-e5);}
rdr-cgu .cgu .cgu-lies-liens a{display:inline-flex;align-items:center;gap:var(--cgu-e2);font-weight:600;color:var(--cgu-or);}
rdr-cgu .cgu .cgu-lies-liens a svg{width:18px;height:18px;transition:transform .15s;}
rdr-cgu .cgu .cgu-lies-liens a:hover svg{transform:translateX(3px);}
rdr-cgu .cgu .cgu-lies-liens a:focus-visible{outline:2px solid var(--cgu-or);outline-offset:3px;border-radius:2px;}

 
rdr-cgu .cgu.sous-900 .cgu-hero{grid-template-columns:minmax(0,1fr);padding-top:var(--cgu-e7);}
rdr-cgu .cgu.sous-900 .cgu-hero-icone{display:none;}
rdr-cgu .cgu.sous-900 .cgu-corps{grid-template-columns:minmax(0,1fr);gap:var(--cgu-e6);}
rdr-cgu .cgu.sous-900 .cgu-som{position:static;max-height:none;overflow:visible;padding-right:0;}
rdr-cgu .cgu.sous-900 .cgu-som.deborde{-webkit-mask-image:none;mask-image:none;}
rdr-cgu .cgu.sous-900 .cgu-som-liste{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cgu-e1) var(--cgu-e4);}
rdr-cgu .cgu.sous-900 .cgu-som-lien,rdr-cgu .cgu.sous-900 .cgu-som-lien.est-actif{border-left:0;}
rdr-cgu .cgu.sous-900 .cgu-lecture{gap:var(--cgu-e7);}
rdr-cgu .cgu.sous-600 .cgu-cadre{padding:0 var(--cgu-e4);}
rdr-cgu .cgu.sous-600 .cgu-carte{padding:var(--cgu-e5) var(--cgu-e4);}
rdr-cgu .cgu.sous-600 .cgu-champs{grid-template-columns:minmax(0,1fr);gap:var(--cgu-e4);}
rdr-cgu .cgu.sous-600 .cgu-def{grid-template-columns:minmax(0,1fr);gap:var(--cgu-e1);}
rdr-cgu .cgu.sous-600 .cgu-lies{flex-direction:column;gap:var(--cgu-e4);padding:var(--cgu-e5) var(--cgu-e4);}
rdr-cgu .cgu.sous-600 .cgu-sec-tete{gap:var(--cgu-e3);}
rdr-cgu .cgu.sous-600 .cgu-badge{width:40px;height:40px;border-radius:12px;}
rdr-cgu .cgu.sous-600 .cgu-badge svg{width:20px;height:20px;}
rdr-cgu .cgu.sous-420 .cgu-som-liste{grid-template-columns:minmax(0,1fr);}
rdr-cgu .cgu.sous-420 .cgu-droit{flex-direction:column;gap:var(--cgu-e2);}
@media(prefers-reduced-motion:reduce){
  rdr-cgu .cgu .cgu-som-lien,rdr-cgu .cgu .cgu-lies-liens a svg{transition:none;}
}
`;

  

  function html(texte, lang) {
    return String(texte)
      .replace(/\{cl\}/g, '<b class="cgu-cl">').replace(/\{\/cl\}/g, '</b>')
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

  customElements.define('rdr-cgu', class extends HTMLElement {
    static get observedAttributes() { return ['lang', 'maj', 'chrome']; }

    constructor() {
      super();
      this._initialise = false;
      this._lang = 'fr';
      

      this._maj = '2026-09-14';
      this._chrome = 0;
      this._attente = {};
      this._observateurs = [];
      this._ecouteurs = [];
      this._rafId = 0;
    }

    connectedCallback() {
      if (this._initialise) return;
      this._initialise = true;

      if (!document.getElementById('cgu-style')) {
        const s = document.createElement('style');
        s.id = 'cgu-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      



      const langPosee = this._attente.lang !== undefined || this.hasAttribute('lang');
      Object.keys(this._attente).forEach(k => this._appliquer(k, this._attente[k]));
      this._attente = {};
      ['lang', 'maj', 'chrome'].forEach(k => { if (this.hasAttribute(k)) this._appliquer(k, this.getAttribute(k)); });
      


      if (!langPosee) this._lang = langueDeLaPage();

      this.innerHTML = '<article class="cgu"></article>';
      this._racine = this.querySelector('.cgu');
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
      else if (nom === 'maj') { if (v) this._maj = v; }
      else if (nom === 'chrome') { const n = parseInt(v, 10); this._chrome = Number.isFinite(n) && n > 0 ? n : 0; }
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
      this._racine.style.setProperty('--cgu-chrome', this._chrome + 'px');
      this._racine.setAttribute('lang', lang);

      this._racine.innerHTML =
        '<div class="cgu-cadre">' +
          this._hero(T) +
          '<div class="cgu-corps">' +
            this._sommaire(T) +
            '<div class="cgu-lecture">' +
              this._preambule(T, lang) +
              T.articles.map(a => this._article(a, lang)).join('') +
              this._lies(T, lang) +
            '</div>' +
          '</div>' +
        '</div>';

      this._brancher();
    }

    _hero(T) {
      return '<header class="cgu-hero">' +
        '<div class="cgu-hero-texte">' +
          '<p class="cgu-surtitre">' + esc(T.surtitre) + '</p>' +
          '<h1 class="cgu-titre">' + esc(T.titre) + '</h1>' +
          '<p class="cgu-sous">' + esc(T.sousTitre) + '</p>' +
          '<p class="cgu-pastille">' + svg('clock') + '<span>' + esc(T.maj) + ' ' +
            '<time datetime="' + esc(this._maj) + '">' + esc(dateLisible(this._maj, this._lang)) + '</time></span></p>' +
        '</div>' +
        '<div class="cgu-hero-icone">' + svg('scale') + '</div>' +
      '</header>';
    }

    

    _sommaire(T) {
      return '<nav class="cgu-som" aria-label="' + esc(T.sommaireAria) + '">' +
        '<p class="cgu-som-titre">' + esc(T.sommaire) + '</p>' +
        '<ul class="cgu-som-liste">' +
          T.articles.map((a, i) =>
            '<li><a class="cgu-som-lien" href="#cgu-' + esc(a.id) + '" data-cible="cgu-' + esc(a.id) + '">' +
              '<span class="cgu-som-num">' + String(i + 1).padStart(2, '0') + '</span>' +
              svg(a.icone) +
              '<span class="cgu-som-lib">' + esc(a.court) + '</span>' +
            '</a></li>').join('') +
        '</ul>' +
      '</nav>';
    }

    _preambule(T, lang) {
      const P = T.preambule;
      return '<section class="cgu-sec" id="cgu-preambule">' +
        '<div class="cgu-sec-tete">' +
          '<span class="cgu-badge">' + svg('building') + '</span>' +
          '<h2 class="cgu-sec-titre">' + esc(P.titre) + '</h2>' +
        '</div>' +
        '<div class="cgu-carte">' +
          this._champs(P.champs, true) +
          P.blocs.map(b => this._bloc(b, lang)).join('') +
        '</div>' +
      '</section>';
    }

    _article(a, lang) {
      return '<section class="cgu-sec" id="cgu-' + esc(a.id) + '">' +
        '<div class="cgu-sec-tete">' +
          '<span class="cgu-badge">' + svg(a.icone) + '</span>' +
          '<h2 class="cgu-sec-titre">' + esc(a.titre) + '</h2>' +
        '</div>' +
        '<div class="cgu-carte">' + a.blocs.map(b => this._bloc(b, lang)).join('') + '</div>' +
      '</section>';
    }

    _bloc(b, lang) {
      if (typeof b === 'string') return '<p>' + html(b, lang) + '</p>';
      if (b.h3) return '<h3 class="cgu-h3">' + esc(b.h3) + '</h3>';
      if (b.defs) {
        return '<dl class="cgu-defs">' + b.defs.map(d =>
          '<div class="cgu-def"><dt>' + esc(d[0]) + '</dt><dd>' + html(d[1], lang) + '</dd></div>').join('') + '</dl>';
      }
      if (b.ul) return '<ul class="cgu-puces">' + b.ul.map(x => '<li>' + html(x, lang) + '</li>').join('') + '</ul>';
      if (b.droits) {
        return '<div class="cgu-droits">' + b.droits.map(d =>
          '<div class="cgu-droit">' + svg(d.icone) + '<div><b class="cgu-droit-titre">' + esc(d.titre) + '</b>' +
          '<p>' + html(d.texte, lang) + '</p></div></div>').join('') + '</div>';
      }
      if (b.champs) return this._champs(b.champs, false);
      if (b.note) return '<div class="cgu-note">' + svg('alert') + '<div>' + html(b.note, lang) + '</div></div>';
      return '';
    }

    _champs(liste, ligne) {
      return '<div class="cgu-champs' + (ligne ? ' cgu-champs--ligne' : '') + '">' + liste.map(c =>
        '<div class="cgu-champ">' +
          '<span class="cgu-champ-lib">' + esc(c.label) + '</span>' +
          '<span class="cgu-champ-val">' + (c.href ? '<a href="' + esc(c.href) + '">' + esc(c.valeur) + '</a>' : esc(c.valeur)) + '</span>' +
          (c.aide ? '<span class="cgu-champ-aide">' + esc(c.aide) + '</span>' : '') +
        '</div>').join('') + '</div>';
    }

    _lies(T, lang) {
      const L = T.lies;
      return '<aside class="cgu-lies">' +
        '<div class="cgu-lies-icone">' + svg('fileText') + '</div>' +
        '<div class="cgu-lies-corps">' +
          '<p class="cgu-lies-titre">' + esc(L.titre) + '</p>' +
          '<p>' + esc(L.texte) + '</p>' +
          '<div class="cgu-lies-liens">' + L.liens.map(l =>
            '<a href="' + esc(lien(l.href, lang)) + '">' + esc(l.libelle) + svg('arrowRight') + '</a>').join('') + '</div>' +
        '</div>' +
      '</aside>';
    }

     
    _brancher() {
      const racine = this._racine;
      const som = racine.querySelector('.cgu-som');
      const liens = Array.from(racine.querySelectorAll('.cgu-som-lien'));
      const parId = new Map();
      liens.forEach(l => parId.set(l.getAttribute('data-cible'), l));
      

      const sections = Array.from(racine.querySelectorAll('.cgu-sec[id]')).filter(s => parId.has(s.id));

      const marquerDebord = () => {
        som.classList.toggle('deborde', som.scrollHeight > som.clientHeight + 1);
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

      


      const surClic = (ev) => {
        const a = ev.target.closest('.cgu-som-lien');
        if (!a) return;
        const cible = racine.querySelector('#' + a.getAttribute('data-cible'));
        if (!cible) return;
        ev.preventDefault();
        const doux = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        cible.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
        try { history.replaceState(null, '', '#' + a.getAttribute('data-cible')); } catch (e) {   }
        marquer(cible.id);
      };
      som.addEventListener('click', surClic);
      this._ecouteurs.push([som, 'click', surClic]);

      let actif = null;
      const marquer = (id) => {
        if (id === actif) return;
        actif = id;
        liens.forEach(l => l.classList.remove('est-actif'));
        const l = parId.get(id);
        if (!l) return;
        l.classList.add('est-actif');
        suivre(l);
      };

       
      const suivre = (l) => {
        if (som.scrollHeight <= som.clientHeight + 1) return;
        const lr = l.getBoundingClientRect();
        const sr = som.getBoundingClientRect();
        if (lr.top < sr.top + 4) som.scrollTop -= sr.top - lr.top + 12;
        else if (lr.bottom > sr.bottom - 4) som.scrollTop += lr.bottom - sr.bottom + 12;
      };

      






      const calcule = () => {
        if (!sections.length) return;
        const y = window.scrollY;
        const vue = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        const scrollMax = Math.max(0, docH - vue);
        const h = this._chrome;
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
      const surRedim = () => { demander(); marquerDebord(); };
      window.addEventListener('resize', surRedim, { passive: true });
      this._ecouteurs.push([window, 'resize', surRedim]);
    }
  });
})();
})();
