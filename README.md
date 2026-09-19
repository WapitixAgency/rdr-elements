# rdr-elements

Les custom elements de routedurhum.com, assemblés en paquets et servis par
jsDelivr, pour qu'un snippet d'en-tête du site les définisse avant le runtime
de Wix. Ils sont déjà servis publiquement par Wix : rien ici n'est secret.

**Ne rien éditer ici.** Tout est produit par `route-du-rhum/outils/assembler-paquets.mjs`
depuis `src/public/custom-elements/` ; source, preuve et méthode dans le dépôt
privé, `docs/RECHERCHE-CHARGEMENT-CUSTOM-ELEMENTS.md`.

| Paquet | Contenu | Poids |
| --- | --- | --- |
| `socle.js` | les six méga menus, les deux horloges de l'en-tête et le haut du pied de page, sur toutes les pages : rdr-menu-actus, rdr-menu-cartes, timer-clock-simple, alpina-clock, rdr-pied-haut | 86.8 Ko, 18.1 Ko brotli |
| `accueil.js` | les modules de l'accueil ; assemblé, pas encore chargé par le snippet (lot 5 de l'audit) : home-news, skippers-showcase, rdr-espace-promo | 76.1 Ko, 17.1 Ko brotli |
| `carte.js` | la carte du village ; ses données sont déjà dans le HTML servi, et MapLibre est préchargé avec elle : village-map | 490.7 Ko, 93.4 Ko brotli |
| `espace.js` | l'Espace Rhum ; le module arrive en parallèle du runtime, le dernier état connu du membre s'affiche à l'instant : espace-rhum | 846.4 Ko, 135.9 Ko brotli |
| `skipper.js` | la fiche skipper (page dynamique) ; sa charge utile est déjà dans le HTML servi : skipper-gallery, skipper-outro, skippers-carousel, rdr-espace-promo, rdr-skipper | 359.3 Ko, 69.2 Ko brotli |
| `test-rdr.js` | banc du chargement précoce sur TEST RDR26 (menus, figé au 20/09) | |

Source : `WapitixAgency/route-du-rhum 89e74d4`.
