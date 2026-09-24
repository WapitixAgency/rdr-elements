# rdr-elements

Les custom elements de routedurhum.com, assemblés en paquets et servis par
jsDelivr, pour qu'un snippet d'en-tête du site les définisse avant le runtime
de Wix. Ils sont déjà servis publiquement par Wix : rien ici n'est secret.

**Ne rien éditer ici.** Tout est produit par `route-du-rhum/outils/assembler-paquets.mjs`
depuis `src/public/custom-elements/` ; source, preuve et méthode dans le dépôt
privé, `docs/RECHERCHE-CHARGEMENT-CUSTOM-ELEMENTS.md`.

| Paquet | Contenu | Poids |
| --- | --- | --- |
| `socle.js` | les six méga menus, les deux horloges de l'en-tête, le haut du pied de page et les notifications (rdr-notify, posé sur toutes les pages, depuis le 22/09 : défini tôt, il est prêt quand la page lui passe la liste), sur toutes les pages : rdr-menu-actus, rdr-menu-cartes, timer-clock-simple, alpina-clock, rdr-pied-haut, rdr-notify | 159.5 Ko, 31.3 Ko brotli |
| `accueil.js` | les modules de l'accueil ; la vitrine des skippers a sa charge dans le HTML servi et la promo Espace Rhum se dessine seule ; home-news attend encore la passe navigateur (Accueil.bhup2.js sort avant loadNewsSection au rendu serveur) ; depuis le 23/09 au soir, sur ses seules balises : le nouvel accueil (rdr-accueil-apercu, paquet apercu) ne les porte plus, le paquet ne part donc plus pour rien sur / après la bascule : home-news, skippers-showcase, rdr-espace-promo | 76.1 Ko, 17.1 Ko brotli |
| `carte.js` | la carte du village ; ses données sont déjà dans le HTML servi, et MapLibre est préchargé avec elle :  | 456.5 Ko, 100.8 Ko brotli |
| `atelier.js` | l'atelier du village (village-atelier, l'outil de l'équipe pour éditer la carte, sur ordinateur) ; le plus gros module du site après l'Espace Rhum (168 Ko brotli), MapLibre préchargé comme pour la carte :  | 761.4 Ko, 173.4 Ko brotli |
| `espace.js` | l'Espace Rhum ; le module arrive en parallèle du runtime, en priorité réseau basse (il ne peut rien dessiner avant la vérification du membre), et le dernier état connu du membre s'affiche à l'instant : espace-rhum | 847.1 Ko, 136.1 Ko brotli |
| `skipper.js` | la fiche skipper (page dynamique) et la liste de tous les skippers ; leurs charges utiles sont déjà dans le HTML servi : skipper-gallery, skipper-outro, skippers-carousel, rdr-espace-promo, rdr-skipper, skippers-list | 453.9 Ko, 85.0 Ko brotli |
| `entete.js` | l'en-tête « mode village » (rdr-entete, 22/09), chargé sur toute page qui porte la balise : aujourd'hui la page test de Jules, demain toutes : rdr-entete | 269.1 Ko, 55.2 Ko brotli |
| `apercu.js` | le nouvel accueil (rdr-accueil-apercu), chargé dès l'en-tête sur / et /en, et sur toute autre page qui porte la balise ; la photo du hero y est annoncée tout de suite (photoHero) : rdr-accueil-apercu | 147.7 Ko, 30.6 Ko brotli |
| `actus.js` | le hub des actualités, ses pages de tag (/medias-actualites/tags/<tag>) et chaque page de post (en-tête et suite de lecture) ; un seul paquet parce qu'on va de l'un à l'autre, leurs charges utiles sont déjà dans le HTML servi : rdr-news, rdr-post-head, rdr-post-more | 282.3 Ko, 52.8 Ko brotli |
| `programme.js` | la Programmation ; sa charge utile (133 Ko) est dans le HTML servi, le module est la page : rdr-programme | 192.7 Ko, 40.9 Ko brotli |
| `venir.js` | Se rendre au village (rdr-venir, qui absorbe CO2, D'où venez-vous et le Challenge Mobilité) ; sa charge utile (24 Ko) est dans le HTML servi : rdr-venir | 147.2 Ko, 32.5 Ko brotli |
| `course.js` | les petits modules éditoriaux des pages La course et Engagements (Qu'est-ce que la Route du Rhum, Héritage, Bateaux, Terres d'engagements) ; leurs charges sont des attributs du HTML servi, 16 Ko brotli à eux cinq : faits-marquants, manifeste-cartes, heritage-timeline, boat-diagram, pactes-tabs | 76.3 Ko, 15.9 Ko brotli |
| `accreditations.js` | la page Accréditations presse ; sa charge utile est dans le HTML servi : rdr-accreditations | 54.2 Ko, 13.9 Ko brotli |
| `cgu.js` | les conditions d'utilisation ; le texte est dans le module, il se dessine seul : rdr-cgu | 64.9 Ko, 17.3 Ko brotli |
| `reglements.js` | les règlements des jeux et concours (23/09) ; les textes sont dans le module, il se dessine seul : rdr-reglements | 57.6 Ko, 13.4 Ko brotli |
| `confidentialite.js` | la politique de confidentialité (24/09) ; le texte est dans le module, il se dessine seul : rdr-confidentialite | 64.0 Ko, 14.9 Ko brotli |
| `mentions.js` | les mentions légales (24/09) ; le texte est dans le module, il se dessine seul : rdr-mentions | 35.7 Ko, 9.0 Ko brotli |
| `faq.js` | la page FAQ (23/09) : ses données arrivent en attribut jeu, posé par la page maître au rendu serveur :  | 51.6 Ko, 13.1 Ko brotli |
| `concours.js` | le Challenge photo (démonstration, page masquée et non indexée) ; le module va chercher ses données lui-même, le définir tôt avance d'autant sa lecture : rdr-concours-photo | 105.3 Ko, 20.5 Ko brotli |
| `tournee.js` | la carte des tournées (page plein écran) ; le module part tout de suite, MapLibre reste chargé par le module (sa version @5 est une redirection mise en cache 60 s : la précharger la ferait télécharger deux fois) ; les étapes arrivent avec la passe navigateur : tournee-map | 159.3 Ko, 34.0 Ko brotli |
| `console.js` | la console de l'équipe (rdr-console, page réservée), chargée sur la présence de sa balise : rdr-console | 128.0 Ko, 29.5 Ko brotli |
| `tags.js` | la page de consigne « Publier une actu » (rdr-tags, réservée à l'équipe), chargée sur la présence de sa balise : rdr-tags | 43.1 Ko, 11.7 Ko brotli |
| `inscription.js` | l'envoi des médias des skippers (skipper-media-uploader, page Inscription Skipper, ouverte par un lien à jeton), chargé sur la présence de sa balise : skipper-media-uploader | 65.0 Ko, 13.5 Ko brotli |
| `test-rdr.js` | banc du chargement précoce sur TEST RDR26 (menus, figé au 20/09) | |
| `recherche/fr.json`, `recherche/en.json` | l'index de la recherche de l'en-tête (skippers dévoilés, articles), relu sur le site toutes les 30 min par le workflow index-recherche de route-du-rhum | |
| `test-entete.js` | prototype de l'en-tête en module sur TEST RDR26 (rdr-entete, 21/09), déposé par `test-rdr/atelier/entete/assembler.mjs --paquet`, chargé à une adresse figée sur son commit | |

Source : `WapitixAgency/route-du-rhum ff2629c`.
