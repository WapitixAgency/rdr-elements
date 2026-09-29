# rdr-elements

Les custom elements de routedurhum.com, assemblés en paquets et servis par
jsDelivr, pour qu'un snippet d'en-tête du site les définisse avant le runtime
de Wix. Ils sont déjà servis publiquement par Wix : rien ici n'est secret.

**Ne rien éditer ici.** Tout est produit par `route-du-rhum/outils/assembler-paquets.mjs`
depuis `src/public/custom-elements/` ; source, preuve et méthode dans le dépôt
privé, `docs/RECHERCHE-CHARGEMENT-CUSTOM-ELEMENTS.md`.

| Paquet | Contenu | Poids |
| --- | --- | --- |
| `socle.js` | le haut du pied de page et les notifications (rdr-notify, posé sur toutes les pages, défini tôt, il est prêt quand la page lui passe la liste), sur toutes les pages ; depuis le 26/09 au soir, plus les anciens méga menus ni les horloges : l'en-tête en module (paquet entete) porte les siens, et l'horloge Alpina a rejoint le paquet du concours photo, seul à la poser : rdr-pied-haut, rdr-notify | 116.3 Ko, 24.7 Ko brotli |
| `carte.js` | la carte du village ; ses données sont déjà dans le HTML servi, et MapLibre est préchargé avec elle :  | 470.3 Ko, 104.0 Ko brotli |
| `atelier.js` | l'atelier du village (village-atelier, l'outil de l'équipe pour éditer la carte, sur ordinateur) ; le plus gros module du site après l'Espace Rhum (168 Ko brotli), MapLibre préchargé comme pour la carte :  | 780.7 Ko, 178.1 Ko brotli |
| `espace.js` | l'Espace Rhum ; le module arrive en parallèle du runtime, en priorité réseau basse (il ne peut rien dessiner avant la vérification du membre), et le dernier état connu du membre s'affiche à l'instant : espace-rhum | 849.2 Ko, 137.0 Ko brotli |
| `skipper.js` | la fiche skipper (page dynamique) et la liste de tous les skippers ; leurs charges utiles sont déjà dans le HTML servi : skipper-gallery, skipper-outro, skippers-carousel, rdr-espace-promo, rdr-skipper, skippers-list | 447.3 Ko, 83.9 Ko brotli |
| `entete.js` | l'en-tête « mode village » (rdr-entete, 22/09), chargé sur toute page qui porte la balise : aujourd'hui la page test de Jules, demain toutes : rdr-entete | 281.5 Ko, 57.1 Ko brotli |
| `apercu.js` | le nouvel accueil (rdr-accueil-apercu), chargé dès l'en-tête sur / et /en, et sur toute autre page qui porte la balise ; la photo du hero y est annoncée tout de suite (photoHero) : rdr-accueil-apercu | 147.9 Ko, 30.2 Ko brotli |
| `actus.js` | le hub des actualités, ses pages de tag (/medias-actualites/tags/<tag>) et chaque page de post (en-tête et suite de lecture) ; un seul paquet parce qu'on va de l'un à l'autre, leurs charges utiles sont déjà dans le HTML servi : rdr-news, rdr-post-head, rdr-post-more | 285.1 Ko, 53.0 Ko brotli |
| `programme.js` | la Programmation ; sa charge utile (133 Ko) est dans le HTML servi, le module est la page : rdr-programme | 194.7 Ko, 41.9 Ko brotli |
| `venir.js` | Se rendre au village (rdr-venir, qui absorbe CO2, D'où venez-vous et le Challenge Mobilité) ; sa charge utile (24 Ko) est dans le HTML servi : rdr-venir | 149.6 Ko, 32.8 Ko brotli |
| `accreditations.js` | la page Accréditations presse ; sa charge utile est dans le HTML servi : rdr-accreditations | 54.7 Ko, 14.0 Ko brotli |
| `cgu.js` | les conditions d'utilisation ; le texte est dans le module, il se dessine seul : rdr-cgu | 69.8 Ko, 18.5 Ko brotli |
| `reglements.js` | les règlements des jeux et concours (23/09) ; les textes sont dans le module, il se dessine seul : rdr-reglements | 58.0 Ko, 13.4 Ko brotli |
| `confidentialite.js` | la politique de confidentialité (24/09) ; le texte est dans le module, il se dessine seul : rdr-confidentialite | 67.9 Ko, 15.9 Ko brotli |
| `mentions.js` | les mentions légales (24/09) ; le texte est dans le module, il se dessine seul : rdr-mentions | 35.9 Ko, 9.0 Ko brotli |
| `faq.js` | la page FAQ (23/09) : ses données arrivent en attribut jeu, posé par la page maître au rendu serveur :  | 57.2 Ko, 14.0 Ko brotli |
| `saint-malo.js` | la page Saint-Malo (rdr-saint-malo, 24/09) : textes, photos et programme arrivent en attribut jeu, posé par la page maître au rendu serveur :  | 66.3 Ko, 15.2 Ko brotli |
| `guadeloupe.js` | la page Guadeloupe (rdr-guadeloupe, 24/09) : même maquette que Saint-Malo, sa ville fixée ; jeu en attribut posé par la page maître :  | 66.9 Ko, 15.3 Ko brotli |
| `bateaux.js` | la page Bateaux (24/09) : son jeu (textes fixes et six classes lues au CMS) arrive en attribut jeu, posé par la page maître au rendu serveur :  | 61.0 Ko, 15.2 Ko brotli |
| `la-course.js` | la page La course (Qu'est-ce que la Route du Rhum, 24/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur :  | 97.4 Ko, 23.0 Ko brotli |
| `heritage.js` | la page Héritage (rdr-heritage, 24/09) : son jeu, les douze éditions lues au CMS, arrive en attribut jeu, posé par la page maître au rendu serveur :  | 47.1 Ko, 11.9 Ko brotli |
| `edition2022.js` | la page Édition 2022 (rdr-edition-2022, 24/09), page d'archive : son jeu figé arrive en attribut jeu, posé par la page maître au rendu serveur :  | 65.9 Ko, 15.1 Ko brotli |
| `terres.js` | la page Terres d'engagements (25/09) : ses données arrivent en attribut jeu, posé par la page maître au rendu serveur ; les pactes sont lus au CMS :  | 54.2 Ko, 12.9 Ko brotli |
| `littoral.js` | la page Protéger le littoral (rdr-littoral, 24/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur ; ?go=benevolat tenu par le module :  | 47.1 Ko, 11.6 Ko brotli |
| `kit.js` | la page Kit pédagogique (rdr-kit-pedagogique, 24/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur :  | 40.8 Ko, 9.5 Ko brotli |
| `parcours.js` | la page Parcours (rdr-parcours, 25/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur ; la carte charge d3 et le fond des terres au premier dessin :  | 73.9 Ko, 18.2 Ko brotli |
| `partenaire.js` | la page Devenir partenaire (rdr-devenir-partenaire, 26/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur ; le formulaire HubSpot ne se charge qu'à l'approche de son bloc :  | 32.6 Ko, 8.5 Ko brotli |
| `exposants.js` | la page Offres exposants (rdr-offres-exposants, 26/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur :  | 25.5 Ko, 6.6 Ko brotli |
| `licence.js` | la page Licence de marque (rdr-licence-marque, 26/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur ; le formulaire part par la page maître (envoyerLicence) :  | 38.5 Ko, 9.5 Ko brotli |
| `contact.js` | la page Contact (rdr-contact, 26/09) : son jeu arrive en attribut jeu, posé par la page maître au rendu serveur ; le formulaire part par la page maître (envoyerContact) dans le formulaire Wix Forms « Contact » d'avant :  | 36.9 Ko, 10.1 Ko brotli |
| `partenaires.js` | le hall Nos partenaires (rdr-partenaires, 26/09) : son jeu, lu en direct au CMS, arrive en attribut jeu, posé par la page maître au rendu serveur :  | 45.5 Ko, 10.5 Ko brotli |
| `fiche-partenaire.js` | la fiche partenaire (rdr-partenaire, 26/09), page dynamique /nos-partenaires/<partenaire> : son jeu (la fiche lue au CMS et les partenaires de son rang) arrive en attribut jeu, posé par la page maître au rendu serveur :  | 27.7 Ko, 7.5 Ko brotli |
| `esk.js` | l'Espace skippers (rdr-espace-skippers, 26/09) : son jeu, lu en direct au CMS (ESPACESKIPPER), arrive en attribut jeu, posé par la page maître au rendu serveur :  | 35.7 Ko, 9.1 Ko brotli |
| `concours.js` | le Challenge photo (démonstration, page masquée et non indexée) ; le module va chercher ses données lui-même, le définir tôt avance d'autant sa lecture : rdr-concours-photo, alpina-clock | 109.8 Ko, 21.7 Ko brotli |
| `tournee.js` | la carte des tournées (page plein écran) ; le module part tout de suite, MapLibre reste chargé par le module (sa version @5 est une redirection mise en cache 60 s : la précharger la ferait télécharger deux fois) ; les étapes arrivent avec la passe navigateur : tournee-map | 157.5 Ko, 32.7 Ko brotli |
| `console.js` | la console de l'équipe (rdr-console, page réservée), chargée sur la présence de sa balise : rdr-console | 112.8 Ko, 25.2 Ko brotli |
| `tags.js` | la page de consigne « Publier une actu » (rdr-tags, réservée à l'équipe), chargée sur la présence de sa balise : rdr-tags | 43.5 Ko, 11.8 Ko brotli |
| `inscription.js` | l'envoi des médias des skippers (skipper-media-uploader, page Inscription Skipper, ouverte par un lien à jeton), chargé sur la présence de sa balise : skipper-media-uploader | 65.2 Ko, 13.4 Ko brotli |
| `test-rdr.js` | banc du chargement précoce sur TEST RDR26 (menus, figé au 20/09) | |
| `recherche/fr.json`, `recherche/en.json` | l'index de la recherche de l'en-tête (skippers dévoilés, articles), relu sur le site toutes les 30 min par le workflow index-recherche de route-du-rhum | |
| `test-entete.js` | prototype de l'en-tête en module sur TEST RDR26 (rdr-entete, 21/09), déposé par `test-rdr/atelier/entete/assembler.mjs --paquet`, chargé à une adresse figée sur son commit | |

Source : `WapitixAgency/route-du-rhum e112f0e`.
