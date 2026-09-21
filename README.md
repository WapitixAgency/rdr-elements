# rdr-elements

Les custom elements de routedurhum.com, assemblés en paquets et servis par
jsDelivr, pour qu'un snippet d'en-tête du site les définisse avant le runtime
de Wix. Ils sont déjà servis publiquement par Wix : rien ici n'est secret.

**Ne rien éditer ici.** Tout est produit par `route-du-rhum/outils/assembler-paquets.mjs`
depuis `src/public/custom-elements/` ; source, preuve et méthode dans le dépôt
privé, `docs/RECHERCHE-CHARGEMENT-CUSTOM-ELEMENTS.md`.

| Paquet | Contenu | Poids |
| --- | --- | --- |
| `socle.js` | les six méga menus, les deux horloges de l'en-tête et le haut du pied de page, sur toutes les pages : rdr-menu-actus, rdr-menu-cartes, timer-clock-simple, alpina-clock, rdr-pied-haut | 105.5 Ko, 20.8 Ko brotli |
| `accueil.js` | les modules de l'accueil ; assemblé, pas encore chargé par le snippet (lot 5 de l'audit) : home-news, skippers-showcase, rdr-espace-promo | 76.1 Ko, 17.1 Ko brotli |
| `carte.js` | la carte du village ; ses données sont déjà dans le HTML servi, et MapLibre est préchargé avec elle :  | 445.5 Ko, 97.9 Ko brotli |
| `espace.js` | l'Espace Rhum ; le module arrive en parallèle du runtime, en priorité réseau basse (il ne peut rien dessiner avant la vérification du membre), et le dernier état connu du membre s'affiche à l'instant : espace-rhum | 847.1 Ko, 136.1 Ko brotli |
| `skipper.js` | la fiche skipper (page dynamique) et la liste de tous les skippers ; leurs charges utiles sont déjà dans le HTML servi : skipper-gallery, skipper-outro, skippers-carousel, rdr-espace-promo, rdr-skipper, skippers-list | 450.7 Ko, 84.2 Ko brotli |
| `actus.js` | le hub des actualités et chaque page de post (en-tête et suite de lecture) ; un seul paquet parce qu'on va de l'un à l'autre, leurs charges utiles sont déjà dans le HTML servi : rdr-news, rdr-post-head, rdr-post-more | 282.3 Ko, 52.9 Ko brotli |
| `test-rdr.js` | banc du chargement précoce sur TEST RDR26 (menus, figé au 20/09) | |

Source : `WapitixAgency/route-du-rhum a154f4f`.
