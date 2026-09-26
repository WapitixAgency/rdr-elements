/* rdr-elements confidentialite | source route-du-rhum ede21c7 | rdr-confidentialite.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["confidentialite"]="ede21c7";performance.mark("rdr-elements:confidentialite")}catch(e){}
;(function(){
(function () {
  'use strict';

  

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-confidentialite')) return;

  



  const IC = {
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    hourglass: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
    share2: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    userCheck: '<path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    cookie: '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'
  };
  const svg = (clef, classe) => {
    const d = IC[clef];
    if (!d) return '';
    return '<svg class="' + (classe || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + '</svg>';
  };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  




















  const CGU = '/conditions-d-utilisation';
  const REGLEMENTS = '/reglements';
  const MENTIONS = '/mentions-legales';
  const ADRESSE = 'Zac de Keroman, 6 rue du sous-marin Vénus, 56100 Lorient';
  const EMAIL = 'rgpd@ocsport.com';

  const I18N = {
    fr: {
      surtitre: 'Données personnelles',
      titre: 'Politique de confidentialité',
      sousTitre: 'Nous accordons une importance capitale à la protection de votre vie privée. Ce document détaille nos pratiques concernant la collecte, l’utilisation et la sécurisation de vos données personnelles.',
      maj: 'Dernière mise à jour :',
      sommaire: 'Sommaire',
      sommaireAria: 'Sommaire de la politique de confidentialité',
      cookies: { bouton: 'Gérer mes cookies', repli: 'Le gestionnaire de cookies s’ouvre aussi depuis l’onglet « Cookies » présent en bas de chaque page.' },
      parties: [
        {
          id: 'responsable', icone: 'building', court: 'Responsable du traitement', titre: '1. Responsable du traitement des données',
          blocs: [
            { champs: [
              { label: 'Nom de l’entreprise', valeur: 'OC Sport Pen Duick' },
              { label: 'Adresse', valeur: ADRESSE },
              { label: 'Représentant légal', valeur: 'Monsieur Hervé Favre, Président' },
              { label: 'Email de contact RGPD', valeur: EMAIL, href: 'mailto:' + EMAIL, aide: 'Cet email est dédié aux demandes relatives à la protection des données personnelles.' }
            ] }
          ]
        },
        {
          id: 'collecte', icone: 'database', court: 'Collecte des données', titre: '2. Collecte des données',
          blocs: [
            'Nous recueillons différents types de données pour vous fournir nos services et améliorer votre expérience utilisateur :',
            { groupes: [
              { titre: 'Données fournies directement', ul: [
                'Les données d’identification et de contact (adresse e-mail, etc.) ;',
                'Les données d’identification en ligne (identifiant, mot de passe) ;',
                'Les données collectées lors de l’utilisation de notre site internet (type de terminal, type et version du navigateur que vous utilisez, les pages vues, centres d’intérêts, la fréquence et l’intensité d’utilisation de nos services, connexions, etc.).'
              ] },
              { titre: 'Données collectées automatiquement', ul: [
                'Adresse IP et données de connexion',
                'Type de navigateur et système d’exploitation',
                'Pages visitées et durée de navigation',
                'Préférences linguistiques'
              ], apres: 'Des données personnelles peuvent être communiquées par nos partenaires commerciaux ou d’autres sociétés du Groupe Télégramme si vous leur avez donné votre consentement. Selon votre consentement, ces données seront utilisées à des fins de prospection commerciale ou ciblage publicitaire.' }
            ] }
          ]
        },
        {
          id: 'utilisation', icone: 'target', court: 'Utilisation des données', titre: '3. Utilisation des données',
          blocs: [
            'Les données personnelles que nous collectons sont traitées conformément aux bases légales prévues par le RGPD. Nous les utilisons principalement pour :',
            { tableau: {
              entetes: ['Finalité du traitement', 'Fondement juridique'],
              lignes: [
                ['Gestion de votre compte client, traitement de vos commandes et accès à nos services.', 'Exécution du contrat'],
                ['Gestion des demandes d’assistance, support client et réclamations', 'Exécution du contrat / Intérêt légitime'],
                ['Amélioration des services, analyses d’usage et optimisation de l’expérience utilisateur dans le respect des droits et libertés des utilisateurs.', 'Intérêt légitime'],
                ['Sécurité du site, prévention des fraudes et abus', 'Intérêt légitime / Obligation légale'],
                ['Gestion des obligations comptables et fiscales', 'Obligation légale'],
                ['Envoi de communications commerciales et marketing', 'Consentement'],
                ['Mise à disposition d’un serveur photo et vidéo', 'Exécution du contrat'],
                ['Campagne d’emailing', 'Consentement'],
                ['Production de données à des fins de mesures d’audience, de compréhension du comportement de l’internaute, d’optimisation de l’ergonomie du site internet, optimisation parcours visiteurs', 'Consentement']
              ]
            } },
            { h3: 'Base légale des traitements' },
            'Les traitements de données personnelles sont réalisés sur l’une des bases légales suivantes, conformément à l’article 6 du RGPD :',
            { ul: [
              '{b}Exécution du contrat{/b} : lorsque le traitement est nécessaire à la fourniture des services demandés ou à la gestion de la relation client.',
              '{b}Obligation légale{/b} : lorsque le traitement est imposé par la loi, notamment en matière comptable ou fiscale.',
              '{b}Intérêt légitime{/b} : lorsque le traitement est nécessaire au bon fonctionnement du site, à la sécurité ou à l’amélioration des services, dans le respect des droits et libertés des utilisateurs.',
              '{b}Consentement{/b} : lorsque l’utilisateur a donné son accord explicite, notamment pour l’envoi de communications marketing ou l’utilisation de cookies non essentiels.'
            ] },
            


            { ajout: { titre: 'Jeux-concours', icone: 'trophy', texte: 'Les données collectées lors de la participation à un jeu-concours sont traitées pour la gestion de ce jeu, selon son règlement, qui précise les données recueillies, leurs finalités et leur durée de conservation. Les règlements sont consultables sur la page {a:' + REGLEMENTS + '}Règlements{/a}.' } }
          ]
        },
        {
          id: 'conservation', icone: 'hourglass', court: 'Durée de conservation', titre: '4. Durée de conservation des données',
          blocs: [
            'Les données personnelles sont conservées uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, conformément aux exigences du Règlement Général sur la Protection des Données (RGPD) et aux obligations légales applicables.',
            { tableau: {
              entetes: ['Type de données', 'Durée de conservation'],
              lignes: [
                ['Données liées au compte client et à la relation contractuelle', 'Pendant la durée de la relation contractuelle, puis archivées conformément aux obligations légales'],
                ['Données prospects (formulaires de contact, demandes d’information)', '3 ans à compter du dernier contact émanant du prospect'],
                ['Données de facturation et comptables', 'Durée légale en vigueur (généralement 10 ans)'],
                ['Données relatives au support client', 'Durée nécessaire au traitement de la demande, puis archivées pour une durée limitée'],
                ['Données techniques et logs de sécurité', 'Durée limitée, strictement nécessaire à des fins de sécurité et de prévention des abus'],
                ['Données utilisées à des fins marketing', 'Jusqu’au retrait du consentement par l’utilisateur']
              ]
            } },
            { h3: 'Archivage et suppression' },
            'À l’issue des durées de conservation définies, les données personnelles sont soit supprimées, soit anonymisées, soit archivées conformément aux obligations légales en vigueur.',
            


            { ajout: { titre: 'Trace de participation aux jeux de « Mon Espace Rhum »', icone: 'trophy', texte: 'Quand vous effacez vos données depuis « Mon Espace Rhum », ou quand votre compte est supprimé, une trace de chaque participation aux jeux est conservée, réduite au strict nécessaire : l’identifiant technique du compte, la date de participation et son résultat (le lot tiré à la roue, le code Virtual Regatta ou le code de réduction remis). Elle ne contient ni votre nom, ni votre adresse e-mail, ni votre adresse postale. Elle sert uniquement à garantir qu’un compte ne participe qu’une fois à chaque jeu et qu’un code n’est remis qu’une fois (intérêt légitime de l’organisateur à prévenir la fraude). Pour un lot gagné, la trace de son attribution et de sa livraison est conservée de la même façon, sans vos coordonnées. Ces traces sont supprimées à la clôture des jeux de l’édition 2026.' } }
          ]
        },
        {
          id: 'partage', icone: 'share2', court: 'Partage des données', titre: '5. Partage des données',
          blocs: [
            'Nous ne vendons jamais vos données personnelles. Nous pouvons être amenés à les partager ou à les traiter dans les cas suivants :',
            { paires: [
              ['Prestataires / Destinataires', 'Vos données personnelles ne sont utilisées que par des personnes identifiées et habilitées compte tenu des finalités décrites dans la présente politique. En fonction des finalités, les données peuvent être traitées par : le personnel de OC Sport Pen Duick, le prestataire de mesures d’audience, le prestataire d’envoi d’email, nos partenaires commerciaux et publicitaires (si vous y avez consenti), les réseaux sociaux (Facebook, Instagram, LinkedIn, X, Youtube).'],
              ['Obligations légales', 'Si la loi l’exige ou sur demande formelle d’une autorité judiciaire ou administrative.'],
              ['Transferts hors Union Européenne', [
                'Certains prestataires techniques ou services tiers utilisés pour l’hébergement, la gestion des paiements, l’envoi d’emails ou la mesure d’audience peuvent être situés en dehors de l’Union Européenne.',
                'Dans ce cas, les transferts de données sont encadrés par des garanties appropriées conformément au RGPD, notamment par l’utilisation de clauses contractuelles types approuvées par la Commission européenne ou de mécanismes équivalents assurant un niveau de protection adéquat.'
              ]],
              ['Personnes habilitées', [
                'Les données personnelles collectées sont accessibles uniquement aux personnes dûment habilitées au sein de l’organisation, dans la limite de leurs fonctions et exclusivement pour les finalités décrites dans la présente politique de confidentialité.',
                'Ces personnes sont soumises à une obligation de confidentialité et n’accèdent aux données que lorsque cela est nécessaire à l’exécution de leurs missions.'
              ]],
              ['Partenaires et plateformes tierces', 'L’utilisation des boutons des réseaux sociaux de type « Se connecter via… » ou « Partager… » entraîne une collecte de données personnelles par les réseaux sociaux concernés. OC Sport Pen Duick ne peut être tenue responsable du traitement de vos données effectué par ces réseaux sociaux tiers.'],
              ['Opérations d’entreprise', 'En cas de fusion, acquisition ou cession d’actifs, vos données pourraient être transférées.']
            ] }
          ]
        },
        {
          id: 'droits', icone: 'userCheck', court: 'Vos droits', titre: '6. Vos droits utilisateurs',
          blocs: [
            'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :',
            { paires: [
              ['6.1. Droit d’accès et de rectification', 'Vous pouvez demander l’accès aux données personnelles que nous détenons à votre sujet, en obtenir une copie, et demander la correction d’informations inexactes ou incomplètes.'],
              ['6.2. Droit à l’effacement', 'Vous pouvez demander la suppression de vos données personnelles, sauf lorsque leur conservation est requise pour respecter une obligation légale.'],
              ['6.3. Droit d’opposition', 'Vous pouvez vous opposer à tout moment au traitement de vos données personnelles à des fins de prospection ou pour des motifs liés à votre situation particulière.'],
              ['6.4. Droit à la limitation du traitement', 'Vous pouvez demander la limitation du traitement de vos données personnelles dans les cas prévus par la réglementation, notamment lorsque vous contestez l’exactitude ou la licéité du traitement.'],
              ['6.5. Droit à la portabilité des données', 'Vous avez le droit de recevoir les données personnelles que vous nous avez fournies dans un format structuré, couramment utilisé et lisible par machine, ou de demander leur transmission à un autre responsable de traitement lorsque cela est techniquement possible.'],
              ['6.6. Droit de réclamation', 'Si vous estimez que vos droits ne sont pas respectés, vous disposez du droit d’introduire une réclamation auprès de l’autorité de contrôle compétente, notamment la Commission Nationale de l’Informatique et des Libertés (CNIL).'],
              ['6.7. Retrait du consentement', [
                'Lorsque le traitement de vos données personnelles est fondé sur votre consentement, vous pouvez retirer ce consentement à tout moment, sans porter atteinte à la licéité du traitement effectué avant ce retrait.',
                'Le retrait du consentement peut notamment concerner les communications marketing ou l’utilisation de cookies non essentiels.'
              ]],
              ['6.8. Directives post-mortem', [
                'Conformément à la réglementation applicable, vous avez la possibilité de définir des directives relatives à la conservation, à l’effacement et à la communication de vos données personnelles après votre décès.',
                'Ces directives peuvent être générales ou particulières et peuvent être modifiées ou révoquées à tout moment.'
              ]]
            ] },
            { h3: 'Exercice de vos droits' },
            'Ces droits peuvent s’exercer par courrier électronique à l’adresse suivante : {a:mailto:' + EMAIL + '}' + EMAIL + '{/a}, ou par courrier postal : ' + ADRESSE + ', à l’attention du service juridique. Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à l’autorité de contrôle.'
          ]
        },
        {
          id: 'securite', icone: 'shieldCheck', court: 'Sécurité des données', titre: '7. Sécurité des données',
          blocs: [
            { h3: 'Mesures de sécurité mises en œuvre' },
            'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées',
            { mesures: [
              'Chiffrement des échanges (HTTPS/TLS)',
              'Accès limité aux personnes habilitées',
              'Mesures de sécurité et surveillance (selon prestataires)',
              'Procédures de protection et restauration (selon prestataires)'
            ] }
          ]
        },
        {
          id: 'cookies', icone: 'cookie', court: 'Politique de cookies', titre: '8. Politique de cookies',
          blocs: [
            'Lors de votre navigation sur le site, des cookies peuvent être déposés sur votre terminal. Ces fichiers permettent d’assurer le bon fonctionnement du site, de mesurer l’audience et d’améliorer l’expérience utilisateur, sous réserve de votre consentement lorsque celui-ci est requis.',
            'La liste détaillée des cookies peut varier selon les services activés sur le site.',
            { tableau: {
              entetes: ['Type de cookies', 'Base légale & Finalité', 'Durée'],
              lignes: [
                ['Essentiels', 'Intérêt légitime - Fonctionnement technique du site (cookies strictement nécessaires)', 'Session'],
                ['Analytiques', 'Consentement - Mesure d’audience et statistiques', '13 mois'],
                ['Marketing', 'Consentement - Personnalisation et prospection', '13 mois']
              ]
            } },
            { h3: 'Gestion des cookies' },
            'Lors de votre première visite sur le site, un bandeau de consentement vous permet d’accepter ou de refuser tout ou partie des cookies non essentiels.',
            'Vous pouvez à tout moment modifier vos préférences en matière de cookies via le gestionnaire de cookies accessible en permanence depuis le site.',
            'Le refus des cookies non essentiels n’altère pas l’accès aux fonctionnalités principales du site.',
            { cookies: true }
          ]
        },
        {
          id: 'contact', icone: 'mail', court: 'Contact RGPD', titre: '9. Contact RGPD',
          blocs: [
            'Pour toute question relative à la protection des données personnelles :',
            { champs: [
              { label: 'Protection des données – Contact RGPD', valeur: EMAIL, href: 'mailto:' + EMAIL },
              { label: 'Par courrier', valeur: ADRESSE + ' — à l’attention du service juridique' }
            ] }
          ]
        }
      ],
      lies: {
        titre: 'Documents liés',
        texte: 'Cette politique se lit avec les conditions d’utilisation de « Mon Espace Rhum », les règlements des jeux et les mentions légales du site.',
        liens: [
          { libelle: 'Conditions d’utilisation', href: CGU },
          { libelle: 'Règlements', href: REGLEMENTS },
          { libelle: 'Mentions légales', href: MENTIONS }
        ]
      }
    },

    en: {
      surtitre: 'Personal data',
      titre: 'Privacy policy',
      sousTitre: 'We place great importance on protecting your privacy. This document details our practices regarding the collection, use, and security of your personal data.',
      maj: 'Last updated:',
      sommaire: 'Contents',
      sommaireAria: 'Contents of the privacy policy',
      cookies: { bouton: 'Manage my cookies', repli: 'The cookie manager can also be opened from the “Cookies” tab at the bottom of every page.' },
      parties: [
        {
          id: 'responsable', icone: 'building', court: 'Data controller', titre: '1. Data Controller',
          blocs: [
            { champs: [
              { label: 'Company name', valeur: 'OC Sport Pen Duick' },
              { label: 'Address', valeur: ADRESSE },
              { label: 'Legal representative', valeur: 'Mr. Hervé Favre, President' },
              { label: 'GDPR contact email', valeur: EMAIL, href: 'mailto:' + EMAIL, aide: 'This email is dedicated to requests relating to the protection of personal data.' }
            ] }
          ]
        },
        {
          id: 'collecte', icone: 'database', court: 'Data collection', titre: '2. Data Collection',
          blocs: [
            'We collect different types of data to provide you with our services and improve your user experience:',
            { groupes: [
              { titre: 'Data provided directly', ul: [
                'Identification and contact data (email address, etc.);',
                'Online identification data (username, password);',
                'The data collected during the use of our website (type of terminal, type and version of the browser you use, pages viewed, areas of interest, frequency and intensity of use of our services, connections, etc.).'
              ] },
              { titre: 'Data collected automatically', ul: [
                'IP address and connection data',
                'Browser type and operating system',
                'Pages visited and browsing time',
                'Language preferences'
              ], apres: 'Personal data may be shared with our business partners or other companies within the Télégramme Group if you have given them your consent. Depending on your consent, this data will be used for marketing or targeted advertising purposes.' }
            ] }
          ]
        },
        {
          id: 'utilisation', icone: 'target', court: 'Use of data', titre: '3. Use of data',
          blocs: [
            'The personal data we collect is processed in accordance with the legal bases provided for by the GDPR. We primarily use it to:',
            { tableau: {
              entetes: ['Purpose of the processing', 'Legal basis'],
              lignes: [
                ['Managing your customer account, processing your orders and accessing our services.', 'Contract performance'],
                ['Handling support requests, customer support, and complaints', 'Contract performance / Legitimate interest'],
                ['Improving services, analyzing usage and optimizing the user experience while respecting users’ rights and freedoms.', 'Legitimate interest'],
                ['Site security, fraud and abuse prevention', 'Legitimate interest / Legal obligation'],
                ['Managing accounting and tax obligations', 'Legal obligation'],
                ['Sending commercial and marketing communications', 'Consent'],
                ['Providing a photo and video server', 'Contract performance'],
                ['Email campaign', 'Consent'],
                ['Producing data for audience measurement, understanding user behaviour, optimizing the website’s usability and visitor journeys', 'Consent']
              ]
            } },
            { h3: 'Legal basis for processing' },
            'The processing of personal data is carried out on one of the following legal bases, in accordance with Article 6 of the GDPR:',
            { ul: [
              '{b}Contract performance{/b}: when processing is necessary for the provision of the services requested or for customer relationship management.',
              '{b}Legal obligation{/b}: when the processing is required by law, particularly in accounting or tax matters.',
              '{b}Legitimate interest{/b}: when processing is necessary for the proper functioning of the site, for security or for the improvement of services, in compliance with the rights and freedoms of users.',
              '{b}Consent{/b}: when the user has given their explicit agreement, in particular for sending marketing communications or using non-essential cookies.'
            ] },
            { ajout: { titre: 'Games and contests', icone: 'trophy', texte: 'Data collected when you take part in a game or contest is processed to run that game, under its rules, which specify the data collected, its purposes and how long it is kept. The rules are available on the {a:' + REGLEMENTS + '}Official rules{/a} page.' } }
          ]
        },
        {
          id: 'conservation', icone: 'hourglass', court: 'Retention period', titre: '4. Data retention period',
          blocs: [
            'Personal data is kept only for as long as necessary to fulfill the purposes for which it was collected, in accordance with the requirements of the General Data Protection Regulation (GDPR) and applicable legal obligations.',
            { tableau: {
              entetes: ['Data type', 'Retention period'],
              lignes: [
                ['Data relating to the customer account and the contractual relationship', 'During the term of the contractual relationship, and then archived in accordance with legal obligations.'],
                ['Prospect data (contact forms, information requests)', '3 years from the date of the last contact from the prospect'],
                ['Billing and accounting data', 'Current legal duration (generally 10 years)'],
                ['Customer support data', 'Time required to process the request, then archived for a limited period'],
                ['Technical data and security logs', 'Limited duration, strictly necessary for security and abuse prevention purposes'],
                ['Data used for marketing purposes', 'Until the user withdraws their consent']
              ]
            } },
            { h3: 'Archiving and deletion' },
            'At the end of the defined retention periods, personal data is either deleted, anonymized, or archived in accordance with applicable legal obligations.',
            { ajout: { titre: 'Record of game entries in “Mon Espace Rhum”', icone: 'trophy', texte: 'When you erase your data from “Mon Espace Rhum”, or when your account is deleted, a record of each game entry is kept, limited to what is strictly necessary: the technical identifier of the account, the date of entry and its result (the prize drawn on the wheel, or the Virtual Regatta or discount code issued). It contains neither your name, nor your email address, nor your postal address. Its only purpose is to ensure that an account enters each game only once and that a code is issued only once (the organizer’s legitimate interest in preventing fraud). For a prize won, the record of its allocation and delivery is kept in the same way, without your contact details. These records are deleted when the games of the 2026 edition close.' } }
          ]
        },
        {
          id: 'partage', icone: 'share2', court: 'Data sharing', titre: '5. Data sharing',
          blocs: [
            'We never sell your personal data. We may share or process it in the following cases:',
            { paires: [
              ['Service providers / Recipients', 'Your personal data is used only by identified and authorized individuals for the purposes described in this policy. Depending on the purpose, the data may be processed by: OC Sport Pen Duick staff, the audience measurement provider, the email service provider, our commercial and advertising partners (if you have consented), and social networks (Facebook, Instagram, LinkedIn, X, YouTube).'],
              ['Legal obligations', 'If required by law or upon formal request from a judicial or administrative authority.'],
              ['Transfers outside the European Union', [
                'Some technical service providers or third-party services used for hosting, payment management, sending emails or audience measurement may be located outside the European Union.',
                'In this case, data transfers are governed by appropriate safeguards in accordance with the GDPR, in particular through the use of standard contractual clauses approved by the European Commission or equivalent mechanisms ensuring an adequate level of protection.'
              ]],
              ['Authorized persons', [
                'The personal data collected is accessible only to duly authorized persons within the organization, within the limits of their duties and exclusively for the purposes described in this privacy policy.',
                'These persons are bound by a duty of confidentiality and only access the data when this is necessary to carry out their tasks.'
              ]],
              ['Partners and third-party platforms', 'Using social media buttons such as “Log in with…” or “Share…” results in the collection of personal data by the social networks concerned. OC Sport Pen Duick cannot be held responsible for the processing of your data carried out by these third-party social networks.'],
              ['Business operations', 'In the event of a merger, acquisition or sale of assets, your data may be transferred.']
            ] }
          ]
        },
        {
          id: 'droits', icone: 'userCheck', court: 'Your rights', titre: '6. Your user rights',
          blocs: [
            'In accordance with the General Data Protection Regulation (GDPR), you have the following rights:',
            { paires: [
              ['6.1. Right of access and rectification', 'You may request access to the personal data we hold about you, obtain a copy of it, and request the correction of inaccurate or incomplete information.'],
              ['6.2. Right to erasure', 'You may request the deletion of your personal data, except where its retention is required to comply with a legal obligation.'],
              ['6.3. Right to object', 'You may object at any time to the processing of your personal data for direct marketing purposes, or on grounds relating to your particular situation.'],
              ['6.4. Right to restriction of processing', 'You may request the restriction of the processing of your personal data in the cases provided for by the regulations, in particular when you contest the accuracy or lawfulness of the processing.'],
              ['6.5. Right to data portability', 'You have the right to receive the personal data you have provided to us in a structured, commonly used and machine-readable format, or to request its transmission to another data controller where technically feasible.'],
              ['6.6. Right to lodge a complaint', 'If you believe that your rights are not being respected, you have the right to lodge a complaint with the competent supervisory authority, in particular the National Commission for Information Technology and Freedoms (CNIL).'],
              ['6.7. Withdrawal of consent', [
                'When the processing of your personal data is based on your consent, you may withdraw that consent at any time, without affecting the lawfulness of the processing carried out before that withdrawal.',
                'Withdrawal of consent may relate in particular to marketing communications or the use of non-essential cookies.'
              ]],
              ['6.8. Post-mortem directives', [
                'In accordance with applicable regulations, you have the option to define guidelines regarding the retention, deletion and communication of your personal data after your death.',
                'These guidelines may be general or specific and may be changed or revoked at any time.'
              ]]
            ] },
            { h3: 'Exercising your rights' },
            'These rights can be exercised by email at {a:mailto:' + EMAIL + '}' + EMAIL + '{/a}, or by mail to: ' + ADRESSE + ', France, addressed to the Legal Department. If, after contacting us, you believe your rights have not been respected, you can file a complaint with the supervisory authority.'
          ]
        },
        {
          id: 'securite', icone: 'shieldCheck', court: 'Data security', titre: '7. Data security',
          blocs: [
            { h3: 'Security measures implemented' },
            'We are implementing appropriate technical and organizational measures',
            { mesures: [
              'Encryption of exchanges (HTTPS/TLS)',
              'Access limited to authorized persons',
              'Security measures and monitoring (depending on service providers)',
              'Protection and restoration procedures (depending on service providers)'
            ] }
          ]
        },
        {
          id: 'cookies', icone: 'cookie', court: 'Cookie policy', titre: '8. Cookie Policy',
          blocs: [
            'When you browse the site, cookies may be placed on your device. These files ensure the proper functioning of the site, measure audience and improve the user experience, subject to your consent where required.',
            'The detailed list of cookies may vary depending on the services activated on the site.',
            { tableau: {
              entetes: ['Type of cookies', 'Legal basis & purpose', 'Duration'],
              lignes: [
                ['Essential', 'Legitimate interest - Technical operation of the website (strictly necessary cookies)', 'Session'],
                ['Analytics', 'Consent - Audience measurement and statistics', '13 months'],
                ['Marketing', 'Consent - Personalization and prospecting', '13 months']
              ]
            } },
            { h3: 'Cookie management' },
            'On your first visit to the site, a consent banner allows you to accept or refuse all or some non-essential cookies.',
            'You can change your cookie preferences at any time via the cookie manager, which is always accessible from the website.',
            'Refusing non-essential cookies does not affect access to the main features of the site.',
            { cookies: true }
          ]
        },
        {
          id: 'contact', icone: 'mail', court: 'GDPR contact', titre: '9. GDPR Contact',
          blocs: [
            'For any questions relating to the protection of personal data:',
            { champs: [
              { label: 'Data protection – GDPR contact', valeur: EMAIL, href: 'mailto:' + EMAIL },
              { label: 'By mail', valeur: 'Keroman Business Park, 6 rue du sous-marin Vénus, 56100 Lorient — To the attention of the legal department' }
            ] }
          ]
        }
      ],
      lies: {
        titre: 'Related documents',
        texte: 'This policy is read together with the terms of use of “My Espace Rhum”, the official rules of the games and the site’s legal notice.',
        liens: [
          { libelle: 'Terms of use', href: CGU },
          { libelle: 'Official rules', href: REGLEMENTS },
          { libelle: 'Legal notice', href: MENTIONS }
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
rdr-confidentialite{display:block;width:100%;}
rdr-confidentialite .cfd{
  --cfd-fond:#0E111D;
  --cfd-encre:#EEF2F8;
  --cfd-encre-douce:rgba(238,242,248,.72);
  --cfd-encre-sourde:rgba(238,242,248,.5);
  --cfd-filet-sombre:rgba(238,242,248,.14);
  --cfd-or:#FCDD00;
  --cfd-or-voile:rgba(252,221,0,.12);
  --cfd-or-filet:rgba(252,221,0,.4);
  --cfd-or-badge:rgba(252,221,0,.55);
  --cfd-carte:#FFFFFF;
  --cfd-carte-encre:#0E111D;
  --cfd-carte-texte:#2C3547;
  --cfd-carte-sourd:#6B7482;
  --cfd-carte-filet:#E4E8EE;
  --cfd-panneau:#F4F6F9;
  --cfd-vert:#006F7B;
  --cfd-vert-voile:rgba(0,111,123,.08);
  --cfd-t1:11px;
  --cfd-t2:13px;
  --cfd-t3:15px;
  --cfd-t4:17px;
  --cfd-t5:clamp(22px, 2.2vw, 30px);
  --cfd-t6:clamp(38px, 4.4vw, 62px);
  --cfd-e1:4px; --cfd-e2:8px; --cfd-e3:12px; --cfd-e4:16px;
  --cfd-e5:24px; --cfd-e6:32px; --cfd-e7:48px; --cfd-e8:64px;
  --cfd-r-carte:18px;
  --cfd-r-badge:14px;
  --cfd-r-lien:10px;
  --cfd-chrome:0px;
  --cfd-largeur:1180px;
  position:relative;
  display:block;
  background:var(--cfd-fond);
  color:var(--cfd-encre);
  font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-size:var(--cfd-t3);
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
rdr-confidentialite .cfd,rdr-confidentialite .cfd *,rdr-confidentialite .cfd *::before,rdr-confidentialite .cfd *::after{box-sizing:border-box;}
rdr-confidentialite .cfd p,rdr-confidentialite .cfd h1,rdr-confidentialite .cfd h2,rdr-confidentialite .cfd h3,rdr-confidentialite .cfd h4,rdr-confidentialite .cfd ul,rdr-confidentialite .cfd ol,rdr-confidentialite .cfd dl,rdr-confidentialite .cfd dd,rdr-confidentialite .cfd dt,rdr-confidentialite .cfd table,rdr-confidentialite .cfd th,rdr-confidentialite .cfd td{margin:0;padding:0;}
rdr-confidentialite .cfd ul,rdr-confidentialite .cfd ol{list-style:none;}
rdr-confidentialite .cfd a{color:inherit;text-decoration:none;}
rdr-confidentialite .cfd svg{display:block;}
rdr-confidentialite .cfd button{font:inherit;margin:0;}

 
rdr-confidentialite .cfd .cfd-cadre{max-width:var(--cfd-largeur);margin:0 auto;padding:0 var(--cfd-e5);}
rdr-confidentialite .cfd .cfd-hero{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:var(--cfd-e6);align-items:center;padding:calc(var(--cfd-e8) + var(--cfd-e3)) 0 var(--cfd-e7);}
rdr-confidentialite .cfd .cfd-surtitre{display:inline-flex;align-items:center;gap:var(--cfd-e2);margin:0 0 var(--cfd-e4);font-size:var(--cfd-t2);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cfd-or);}
rdr-confidentialite .cfd .cfd-surtitre::before{content:'';width:var(--cfd-e5);height:2px;background:var(--cfd-or);border-radius:2px;}
rdr-confidentialite .cfd .cfd-titre{margin:0 0 var(--cfd-e4);font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--cfd-t6);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-confidentialite .cfd .cfd-sous{max-width:60ch;margin:0 0 var(--cfd-e5);font-size:var(--cfd-t4);line-height:1.6;color:var(--cfd-encre-douce);}
rdr-confidentialite .cfd .cfd-pastille{display:inline-flex;align-items:center;gap:var(--cfd-e2);padding:var(--cfd-e2) var(--cfd-e4);border:1px solid var(--cfd-or-filet);border-radius:999px;font-size:var(--cfd-t2);font-weight:500;color:var(--cfd-or);}
rdr-confidentialite .cfd .cfd-pastille svg{width:16px;height:16px;}
rdr-confidentialite .cfd .cfd-hero-icone{width:200px;height:200px;color:var(--cfd-or);opacity:.55;}
rdr-confidentialite .cfd .cfd-hero-icone svg{width:100%;height:100%;stroke-width:1.1;}

 
rdr-confidentialite .cfd .cfd-corps{display:grid;grid-template-columns:232px minmax(0,1fr);gap:var(--cfd-e7);align-items:start;padding-bottom:var(--cfd-e8);}
rdr-confidentialite .cfd .cfd-som{position:sticky;top:calc(var(--cfd-chrome) + var(--cfd-e6));max-height:calc(100vh - var(--cfd-chrome) - var(--cfd-e8));overflow-y:auto;overscroll-behavior:contain;padding-right:var(--cfd-e2);scrollbar-width:thin;scrollbar-color:var(--cfd-filet-sombre) transparent;}
rdr-confidentialite .cfd .cfd-som.deborde{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);}
rdr-confidentialite .cfd .cfd-som-titre{margin:0 0 var(--cfd-e4);font-size:var(--cfd-t1);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cfd-encre-sourde);}
rdr-confidentialite .cfd .cfd-som-liste{display:grid;gap:2px;}
rdr-confidentialite .cfd .cfd-som-liste li{min-width:0;}
rdr-confidentialite .cfd .cfd-som-lien{display:flex;align-items:center;gap:var(--cfd-e3);padding:var(--cfd-e2) var(--cfd-e3);border-left:2px solid transparent;border-radius:var(--cfd-r-lien);font-size:var(--cfd-t2);font-weight:500;line-height:1.3;color:var(--cfd-encre-douce);transition:background .15s,color .15s,border-color .15s;}
rdr-confidentialite .cfd .cfd-som-num{flex:0 0 auto;min-width:1.6em;font-variant-numeric:tabular-nums;font-size:var(--cfd-t1);font-weight:700;letter-spacing:.04em;color:var(--cfd-encre-sourde);transition:color .15s;}
rdr-confidentialite .cfd .cfd-som-lien svg{flex:0 0 auto;width:16px;height:16px;color:var(--cfd-or);}
rdr-confidentialite .cfd .cfd-som-lib{min-width:0;}
@media (hover:hover) and (pointer:fine){rdr-confidentialite .cfd .cfd-som-lien:hover{background:rgba(255,255,255,.06);color:#FFFFFF;}}
rdr-confidentialite .cfd .cfd-som-lien:focus-visible{outline:2px solid var(--cfd-or);outline-offset:2px;}
rdr-confidentialite .cfd .cfd-som-lien.est-actif{background:var(--cfd-or-voile);border-left-color:var(--cfd-or);color:#FFFFFF;font-weight:600;}
rdr-confidentialite .cfd .cfd-som-lien.est-actif .cfd-som-num{color:var(--cfd-or);}
rdr-confidentialite .cfd .cfd-lecture{min-width:0;display:grid;gap:var(--cfd-e8);}

 
rdr-confidentialite .cfd .cfd-sec{min-width:0;scroll-margin-top:calc(var(--cfd-chrome) + var(--cfd-e5));}
rdr-confidentialite .cfd .cfd-sec-tete{display:flex;align-items:center;gap:var(--cfd-e4);margin:0 0 var(--cfd-e6);padding:0 0 var(--cfd-e4);border-bottom:1px solid var(--cfd-filet-sombre);}
rdr-confidentialite .cfd .cfd-badge{flex:0 0 auto;display:grid;place-items:center;width:48px;height:48px;border-radius:var(--cfd-r-badge);background:var(--cfd-or-badge);color:var(--cfd-fond);}
rdr-confidentialite .cfd .cfd-badge svg{width:24px;height:24px;}
rdr-confidentialite .cfd .cfd-sec-titre{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--cfd-t5);line-height:1.1;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}

 
rdr-confidentialite .cfd .cfd-carte{display:grid;gap:var(--cfd-e4);padding:var(--cfd-e6);border-radius:var(--cfd-r-carte);background:var(--cfd-carte);color:var(--cfd-carte-texte);min-width:0;}
rdr-confidentialite .cfd .cfd-carte p{color:var(--cfd-carte-texte);}
rdr-confidentialite .cfd .cfd-carte a{color:var(--cfd-vert);font-weight:600;text-decoration:underline;text-decoration-color:rgba(0,111,123,.35);text-underline-offset:3px;overflow-wrap:anywhere;}
@media (hover:hover) and (pointer:fine){rdr-confidentialite .cfd .cfd-carte a:hover{text-decoration-color:var(--cfd-vert);}}
rdr-confidentialite .cfd .cfd-carte a:focus-visible{outline:2px solid var(--cfd-vert);outline-offset:2px;border-radius:2px;}
rdr-confidentialite .cfd .cfd-carte strong{color:var(--cfd-carte-encre);font-weight:700;}
rdr-confidentialite .cfd .cfd-h3{margin:var(--cfd-e3) 0 0;font-size:var(--cfd-t4);font-weight:700;color:var(--cfd-carte-encre);}
rdr-confidentialite .cfd .cfd-champs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cfd-e5) var(--cfd-e7);padding:var(--cfd-e2) 0;}
rdr-confidentialite .cfd .cfd-champ{display:grid;align-content:start;gap:var(--cfd-e1);min-width:0;}
rdr-confidentialite .cfd .cfd-champ-lib{font-size:var(--cfd-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cfd-vert);}
rdr-confidentialite .cfd .cfd-champ-val{color:var(--cfd-carte-encre);font-weight:500;overflow-wrap:anywhere;}
rdr-confidentialite .cfd .cfd-champ-aide{font-size:var(--cfd-t2);font-style:italic;color:var(--cfd-vert);}
rdr-confidentialite .cfd .cfd-puces{display:grid;gap:var(--cfd-e2);}
rdr-confidentialite .cfd .cfd-puces li{position:relative;padding-left:var(--cfd-e5);}
rdr-confidentialite .cfd .cfd-puces li::before{content:'';position:absolute;left:var(--cfd-e1);top:.68em;width:6px;height:6px;border-radius:50%;background:var(--cfd-vert);}

 
rdr-confidentialite .cfd .cfd-groupes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cfd-e4);}
rdr-confidentialite .cfd .cfd-groupe{display:grid;align-content:start;gap:var(--cfd-e3);padding:var(--cfd-e5);border-radius:var(--cfd-r-badge);background:var(--cfd-panneau);min-width:0;}
rdr-confidentialite .cfd .cfd-groupe-titre{font-size:var(--cfd-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cfd-vert);}
rdr-confidentialite .cfd .cfd-groupe-apres{padding-top:var(--cfd-e3);border-top:1px solid var(--cfd-carte-filet);font-size:var(--cfd-t2);color:var(--cfd-carte-sourd);}




rdr-confidentialite .cfd .cfd-table-cadre{min-width:0;border:1px solid var(--cfd-carte-filet);border-radius:var(--cfd-r-badge);overflow:hidden;}
rdr-confidentialite .cfd .cfd-table{width:100%;border-collapse:collapse;font-size:var(--cfd-t2);line-height:1.5;}
rdr-confidentialite .cfd .cfd-table th{padding:var(--cfd-e3) var(--cfd-e4);background:var(--cfd-panneau);text-align:left;vertical-align:bottom;font-size:var(--cfd-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cfd-vert);}
rdr-confidentialite .cfd .cfd-table th:first-child{white-space:nowrap;}
rdr-confidentialite .cfd .cfd-table td{padding:var(--cfd-e3) var(--cfd-e4);border-top:1px solid var(--cfd-carte-filet);vertical-align:top;color:var(--cfd-carte-texte);}
rdr-confidentialite .cfd .cfd-table td:first-child{color:var(--cfd-carte-encre);font-weight:500;}
rdr-confidentialite .cfd .cfd-table td.cfd-td-base{white-space:nowrap;}
rdr-confidentialite .cfd .cfd-table td .cfd-etiq{display:none;}
rdr-confidentialite .cfd .cfd-pastille-base{display:inline-block;padding:2px 10px;border-radius:8px;background:var(--cfd-vert-voile);color:var(--cfd-vert);font-weight:600;font-size:var(--cfd-t2);white-space:normal;}

 
rdr-confidentialite .cfd .cfd-paires{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cfd-e3);}
rdr-confidentialite .cfd .cfd-paire{display:grid;align-content:start;gap:var(--cfd-e2);padding:var(--cfd-e4) var(--cfd-e5);border-radius:var(--cfd-r-badge);background:var(--cfd-panneau);min-width:0;}
rdr-confidentialite .cfd .cfd-paire-titre{font-weight:700;color:var(--cfd-carte-encre);line-height:1.35;}
rdr-confidentialite .cfd .cfd-paire p{font-size:var(--cfd-t2);line-height:1.6;}

 
rdr-confidentialite .cfd .cfd-mesures{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cfd-e3);}
rdr-confidentialite .cfd .cfd-mesure{display:flex;align-items:flex-start;gap:var(--cfd-e3);padding:var(--cfd-e3) var(--cfd-e4);border-radius:var(--cfd-r-badge);background:var(--cfd-panneau);font-weight:500;color:var(--cfd-carte-encre);}
rdr-confidentialite .cfd .cfd-mesure svg{flex:0 0 auto;width:18px;height:18px;margin-top:3px;color:var(--cfd-vert);}

 
rdr-confidentialite .cfd .cfd-ajout{display:flex;gap:var(--cfd-e4);align-items:flex-start;margin-top:var(--cfd-e2);padding:var(--cfd-e4) var(--cfd-e5);border-left:3px solid var(--cfd-vert);border-radius:0 var(--cfd-r-badge) var(--cfd-r-badge) 0;background:var(--cfd-vert-voile);}
rdr-confidentialite .cfd .cfd-ajout svg{flex:0 0 auto;width:22px;height:22px;margin-top:2px;color:var(--cfd-vert);}
rdr-confidentialite .cfd .cfd-ajout-titre{display:block;margin:0 0 var(--cfd-e1);font-weight:700;color:var(--cfd-carte-encre);}

 
rdr-confidentialite .cfd .cfd-cookies{display:flex;flex-wrap:wrap;align-items:center;gap:var(--cfd-e3) var(--cfd-e4);margin-top:var(--cfd-e2);}
rdr-confidentialite .cfd .cfd-bouton{display:inline-flex;align-items:center;gap:var(--cfd-e2);min-height:44px;padding:0 var(--cfd-e5);border:0;border-radius:999px;background:var(--cfd-carte-encre);color:#FFFFFF;font-weight:700;font-size:var(--cfd-t2);letter-spacing:.04em;cursor:pointer;transition:background .15s;}
rdr-confidentialite .cfd .cfd-bouton svg{width:18px;height:18px;color:var(--cfd-or);}
@media (hover:hover) and (pointer:fine){rdr-confidentialite .cfd .cfd-bouton:hover{background:#1E2640;}}
rdr-confidentialite .cfd .cfd-bouton:focus-visible{outline:2px solid var(--cfd-vert);outline-offset:3px;}
rdr-confidentialite .cfd .cfd-cookies-repli{font-size:var(--cfd-t2);color:var(--cfd-carte-sourd);}
rdr-confidentialite .cfd .cfd-cookies-repli[hidden]{display:none;}

 
rdr-confidentialite .cfd .cfd-lies{display:flex;gap:var(--cfd-e6);align-items:flex-start;padding:var(--cfd-e6);border:1px solid var(--cfd-or-filet);border-radius:var(--cfd-r-carte);background:var(--cfd-or-voile);}
rdr-confidentialite .cfd .cfd-lies-icone{flex:0 0 auto;display:grid;place-items:center;width:60px;height:60px;border-radius:50%;background:rgba(252,221,0,.16);color:var(--cfd-or);}
rdr-confidentialite .cfd .cfd-lies-icone svg{width:26px;height:26px;}
rdr-confidentialite .cfd .cfd-lies-corps{flex:1 1 auto;min-width:0;}
rdr-confidentialite .cfd .cfd-lies-titre{margin:0 0 var(--cfd-e2);font-size:var(--cfd-t4);font-weight:700;color:#FFFFFF;}
rdr-confidentialite .cfd .cfd-lies p{margin:0 0 var(--cfd-e4);color:var(--cfd-encre-douce);}
rdr-confidentialite .cfd .cfd-lies-liens{display:flex;flex-wrap:wrap;gap:var(--cfd-e2) var(--cfd-e5);}
rdr-confidentialite .cfd .cfd-lies-liens a{display:inline-flex;align-items:center;gap:var(--cfd-e2);font-weight:600;color:var(--cfd-or);}
rdr-confidentialite .cfd .cfd-lies-liens a svg{width:18px;height:18px;transition:transform .15s;}
@media (hover:hover) and (pointer:fine){rdr-confidentialite .cfd .cfd-lies-liens a:hover svg{transform:translateX(3px);}}
rdr-confidentialite .cfd .cfd-lies-liens a:focus-visible{outline:2px solid var(--cfd-or);outline-offset:3px;border-radius:2px;}

 
rdr-confidentialite .cfd.sous-900 .cfd-hero{grid-template-columns:minmax(0,1fr);padding-top:var(--cfd-e7);}
rdr-confidentialite .cfd.sous-900 .cfd-hero-icone{display:none;}
rdr-confidentialite .cfd.sous-900 .cfd-corps{grid-template-columns:minmax(0,1fr);gap:var(--cfd-e6);}
rdr-confidentialite .cfd.sous-900 .cfd-som{position:static;max-height:none;overflow:visible;padding-right:0;}
rdr-confidentialite .cfd.sous-900 .cfd-som.deborde{-webkit-mask-image:none;mask-image:none;}
rdr-confidentialite .cfd.sous-900 .cfd-som-liste{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--cfd-e1) var(--cfd-e4);}
rdr-confidentialite .cfd.sous-900 .cfd-som-lien,rdr-confidentialite .cfd.sous-900 .cfd-som-lien.est-actif{border-left:0;}
rdr-confidentialite .cfd.sous-900 .cfd-lecture{gap:var(--cfd-e7);}
rdr-confidentialite .cfd.sous-600 .cfd-cadre{padding:0 var(--cfd-e4);}
rdr-confidentialite .cfd.sous-600 .cfd-carte{padding:var(--cfd-e5) var(--cfd-e4);}
rdr-confidentialite .cfd.sous-600 .cfd-champs,rdr-confidentialite .cfd.sous-600 .cfd-groupes,rdr-confidentialite .cfd.sous-600 .cfd-paires,rdr-confidentialite .cfd.sous-600 .cfd-mesures{grid-template-columns:minmax(0,1fr);}
rdr-confidentialite .cfd.sous-600 .cfd-champs{gap:var(--cfd-e4);}
rdr-confidentialite .cfd.sous-600 .cfd-groupe{padding:var(--cfd-e4);}
rdr-confidentialite .cfd.sous-600 .cfd-lies{flex-direction:column;gap:var(--cfd-e4);padding:var(--cfd-e5) var(--cfd-e4);}
rdr-confidentialite .cfd.sous-600 .cfd-sec-tete{gap:var(--cfd-e3);}
rdr-confidentialite .cfd.sous-600 .cfd-badge{width:40px;height:40px;border-radius:12px;}
rdr-confidentialite .cfd.sous-600 .cfd-badge svg{width:20px;height:20px;}
rdr-confidentialite .cfd.sous-600 .cfd-table thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;}
rdr-confidentialite .cfd.sous-600 .cfd-table,rdr-confidentialite .cfd.sous-600 .cfd-table tbody,rdr-confidentialite .cfd.sous-600 .cfd-table tr,rdr-confidentialite .cfd.sous-600 .cfd-table td{display:block;width:100%;}
rdr-confidentialite .cfd.sous-600 .cfd-table tr{padding:var(--cfd-e3) var(--cfd-e4);border-top:1px solid var(--cfd-carte-filet);}
rdr-confidentialite .cfd.sous-600 .cfd-table tr:first-child{border-top:0;}
rdr-confidentialite .cfd.sous-600 .cfd-table td{padding:var(--cfd-e1) 0;border-top:0;}
rdr-confidentialite .cfd.sous-600 .cfd-table td.cfd-td-base{white-space:normal;}
rdr-confidentialite .cfd.sous-600 .cfd-table td .cfd-etiq{display:block;margin:0 0 2px;font-size:var(--cfd-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cfd-vert);}
rdr-confidentialite .cfd.sous-420 .cfd-som-liste{grid-template-columns:minmax(0,1fr);}
rdr-confidentialite .cfd.sous-420 .cfd-ajout{flex-direction:column;gap:var(--cfd-e2);}
@media(prefers-reduced-motion:reduce){
  rdr-confidentialite .cfd .cfd-som-lien,rdr-confidentialite .cfd .cfd-lies-liens a svg,rdr-confidentialite .cfd .cfd-bouton{transition:none;}
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

  


  function ouvrirCookies() {
    try {
      const o = window.__ucCmp || window.UC_UI;
      if (o && typeof o.showSecondLayer === 'function') { o.showSecondLayer(); return true; }
      if (typeof window.openCookieSettings === 'function') { window.openCookieSettings(); return true; }
    } catch (e) {   }
    return false;
  }

  customElements.define('rdr-confidentialite', class extends HTMLElement {
    static get observedAttributes() { return ['lang', 'maj', 'chrome']; }

    constructor() {
      super();
      this._initialise = false;
      this._lang = 'fr';
      


      this._maj = '2026-09-24';
      this._chrome = null;
      this._attente = {};
      this._observateurs = [];
      this._ecouteurs = [];
      this._rafId = 0;
    }

    connectedCallback() {
      if (this._initialise) return;
      this._initialise = true;

      if (!document.getElementById('cfd-style')) {
        const s = document.createElement('style');
        s.id = 'cfd-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      


      const langPosee = this._attente.lang !== undefined || this.hasAttribute('lang');
      Object.keys(this._attente).forEach(k => this._appliquer(k, this._attente[k]));
      this._attente = {};
      ['lang', 'maj', 'chrome'].forEach(k => { if (this.hasAttribute(k)) this._appliquer(k, this.getAttribute(k)); });
      if (!langPosee) this._lang = langueDeLaPage();

      this.innerHTML = '<article class="cfd"></article>';
      this._racine = this.querySelector('.cfd');
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
      this._racine.style.setProperty('--cfd-chrome', this._haut() + 'px');
      this._racine.setAttribute('lang', lang);

      this._racine.innerHTML =
        '<div class="cfd-cadre">' +
          this._hero(T) +
          '<div class="cfd-corps">' +
            this._sommaire(T) +
            '<div class="cfd-lecture">' +
              T.parties.map(a => this._partie(a, T, lang)).join('') +
              this._lies(T, lang) +
            '</div>' +
          '</div>' +
        '</div>';

      this._brancher(T);
    }

    _hero(T) {
      return '<header class="cfd-hero">' +
        '<div class="cfd-hero-texte">' +
          '<p class="cfd-surtitre">' + esc(T.surtitre) + '</p>' +
          '<h1 class="cfd-titre">' + esc(T.titre) + '</h1>' +
          '<p class="cfd-sous">' + esc(T.sousTitre) + '</p>' +
          '<p class="cfd-pastille">' + svg('clock') + '<span>' + esc(T.maj) + ' ' +
            '<time datetime="' + esc(this._maj) + '">' + esc(dateLisible(this._maj, this._lang)) + '</time></span></p>' +
        '</div>' +
        '<div class="cfd-hero-icone">' + svg('lock') + '</div>' +
      '</header>';
    }

    _sommaire(T) {
      return '<nav class="cfd-som" aria-label="' + esc(T.sommaireAria) + '">' +
        '<p class="cfd-som-titre">' + esc(T.sommaire) + '</p>' +
        '<ul class="cfd-som-liste">' +
          T.parties.map((a, i) =>
            '<li><a class="cfd-som-lien" href="#cfd-' + esc(a.id) + '" data-cible="cfd-' + esc(a.id) + '">' +
              '<span class="cfd-som-num">' + String(i + 1).padStart(2, '0') + '</span>' +
              svg(a.icone) +
              '<span class="cfd-som-lib">' + esc(a.court) + '</span>' +
            '</a></li>').join('') +
        '</ul>' +
      '</nav>';
    }

    _partie(a, T, lang) {
      return '<section class="cfd-sec" id="cfd-' + esc(a.id) + '">' +
        '<div class="cfd-sec-tete">' +
          '<span class="cfd-badge">' + svg(a.icone) + '</span>' +
          '<h2 class="cfd-sec-titre">' + esc(a.titre) + '</h2>' +
        '</div>' +
        '<div class="cfd-carte">' + a.blocs.map(b => this._bloc(b, T, lang)).join('') + '</div>' +
      '</section>';
    }

    _bloc(b, T, lang) {
      if (typeof b === 'string') return '<p>' + html(b, lang) + '</p>';
      if (b.h3) return '<h3 class="cfd-h3">' + esc(b.h3) + '</h3>';
      if (b.ul) return '<ul class="cfd-puces">' + b.ul.map(x => '<li>' + html(x, lang) + '</li>').join('') + '</ul>';
      if (b.champs) return this._champs(b.champs);
      if (b.groupes) {
        return '<div class="cfd-groupes">' + b.groupes.map(g =>
          '<div class="cfd-groupe">' +
            '<p class="cfd-groupe-titre">' + esc(g.titre) + '</p>' +
            '<ul class="cfd-puces">' + g.ul.map(x => '<li>' + html(x, lang) + '</li>').join('') + '</ul>' +
            (g.apres ? '<p class="cfd-groupe-apres">' + html(g.apres, lang) + '</p>' : '') +
          '</div>').join('') + '</div>';
      }
      if (b.tableau) return this._tableau(b.tableau, lang);
      if (b.paires) {
        return '<div class="cfd-paires">' + b.paires.map(([titre, texte]) =>
          '<div class="cfd-paire"><p class="cfd-paire-titre">' + esc(titre) + '</p>' +
          (Array.isArray(texte) ? texte : [texte]).map(t => '<p>' + html(t, lang) + '</p>').join('') +
          '</div>').join('') + '</div>';
      }
      if (b.mesures) {
        return '<ul class="cfd-mesures">' + b.mesures.map(m =>
          '<li class="cfd-mesure">' + svg('check') + '<span>' + html(m, lang) + '</span></li>').join('') + '</ul>';
      }
      if (b.ajout) {
        return '<div class="cfd-ajout">' + svg(b.ajout.icone) + '<div><b class="cfd-ajout-titre">' + esc(b.ajout.titre) + '</b>' +
          '<p>' + html(b.ajout.texte, lang) + '</p></div></div>';
      }
      if (b.cookies) {
        return '<div class="cfd-cookies">' +
          '<button type="button" class="cfd-bouton" data-cookies>' + svg('cookie') + '<span>' + esc(T.cookies.bouton) + '</span></button>' +
          '<p class="cfd-cookies-repli" role="status" hidden>' + esc(T.cookies.repli) + '</p>' +
        '</div>';
      }
      return '';
    }

    




    _tableau(t, lang) {
      const n = t.entetes.length;
      return '<div class="cfd-table-cadre"><table class="cfd-table">' +
        '<thead><tr>' + t.entetes.map(e => '<th scope="col">' + esc(e) + '</th>').join('') + '</tr></thead>' +
        '<tbody>' + t.lignes.map(l => '<tr>' + l.map((c, i) => {
          const pastille = n === 2 && i === 1 && c.length <= 44;
          return '<td' + (pastille ? ' class="cfd-td-base"' : '') + '><span class="cfd-etiq" aria-hidden="true">' + esc(t.entetes[i]) + '</span>' +
            (pastille ? '<span class="cfd-pastille-base">' + html(c, lang) + '</span>' : html(c, lang)) + '</td>';
        }).join('') + '</tr>').join('') + '</tbody>' +
      '</table></div>';
    }

    _champs(liste) {
      return '<div class="cfd-champs">' + liste.map(c =>
        '<div class="cfd-champ">' +
          '<span class="cfd-champ-lib">' + esc(c.label) + '</span>' +
          '<span class="cfd-champ-val">' + (c.href ? '<a href="' + esc(c.href) + '">' + esc(c.valeur) + '</a>' : esc(c.valeur)) + '</span>' +
          (c.aide ? '<span class="cfd-champ-aide">' + esc(c.aide) + '</span>' : '') +
        '</div>').join('') + '</div>';
    }

    _lies(T, lang) {
      const L = T.lies;
      return '<aside class="cfd-lies">' +
        '<div class="cfd-lies-icone">' + svg('fileText') + '</div>' +
        '<div class="cfd-lies-corps">' +
          '<p class="cfd-lies-titre">' + esc(L.titre) + '</p>' +
          '<p>' + esc(L.texte) + '</p>' +
          '<div class="cfd-lies-liens">' + L.liens.map(l =>
            '<a href="' + esc(lien(l.href, lang)) + '">' + esc(l.libelle) + svg('arrowRight') + '</a>').join('') + '</div>' +
        '</div>' +
      '</aside>';
    }

     
    _brancher() {
      const racine = this._racine;
      const som = racine.querySelector('.cfd-som');
      const liens = Array.from(racine.querySelectorAll('.cfd-som-lien'));
      const parId = new Map();
      liens.forEach(l => parId.set(l.getAttribute('data-cible'), l));
      const sections = Array.from(racine.querySelectorAll('.cfd-sec[id]')).filter(s => parId.has(s.id));

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
        const a = ev.target.closest('.cfd-som-lien');
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

      

      const surCookies = (ev) => {
        const b = ev.target.closest('[data-cookies]');
        if (!b) return;
        const repli = b.parentNode.querySelector('.cfd-cookies-repli');
        if (repli) repli.hidden = ouvrirCookies();
      };
      racine.addEventListener('click', surCookies);
      this._ecouteurs.push([racine, 'click', surCookies]);

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
      const surRedim = () => { this._racine.style.setProperty('--cfd-chrome', this._haut() + 'px'); demander(); marquerDebord(); };
      window.addEventListener('resize', surRedim, { passive: true });
      this._ecouteurs.push([window, 'resize', surRedim]);
    }
  });
})();
})();
