# rdr-elements

Les custom elements de routedurhum.com, assemblés en paquets et servis par
jsDelivr, pour qu'un snippet d'en-tête du site les définisse avant le runtime
de Wix. Ils sont déjà servis publiquement par Wix : rien ici n'est secret.

**Ne rien éditer ici.** Tout est produit par `route-du-rhum/outils/assembler-paquets.mjs`
depuis `src/public/custom-elements/` ; source, preuve et méthode dans le dépôt
privé, `docs/RECHERCHE-CHARGEMENT-CUSTOM-ELEMENTS.md`.

| Paquet | Contenu | Poids |
| --- | --- | --- |
| `socle.js` | les six méga menus et les deux horloges de l'en-tête, sur toutes les pages : rdr-menu-actus, rdr-menu-cartes, timer-clock-simple, alpina-clock | 57.4 Ko, 12.1 Ko brotli |
| `accueil.js` | les modules de l'accueil ; assemblé, pas encore chargé par le snippet (lot 5 de l'audit) : home-news, skippers-showcase, rdr-espace-promo, partners-grid | 89.0 Ko, 19.6 Ko brotli |
| `test-rdr.js` | banc du chargement précoce sur TEST RDR26 (menus, figé au 20/09) | |

Source : `WapitixAgency/route-du-rhum 702f8fb`, assemblé le 2026-09-19T13:40Z.
