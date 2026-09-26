/* rdr-elements mentions | source route-du-rhum 490097c | rdr-mentions.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["mentions"]="490097c";performance.mark("rdr-elements:mentions")}catch(e){}
;(function(){
(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-mentions')) return;

   
  const IC = {
    landmark: '<path d="M10 18v-7"/><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.866 3.827A.44.44 0 0 1 20.556 7H3.444a.44.44 0 0 1-.19-.834z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    copyright: '<circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
  };
  const svg = (clef, classe) => {
    const d = IC[clef];
    if (!d) return '';
    return '<svg class="' + (classe || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + '</svg>';
  };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  













  const CONF = '/politique-de-confidentialite';
  const CGU = '/conditions-d-utilisation';
  const REGLEMENTS = '/reglements';
  const SUPPORT_WIX = 'https://support.wix.com/en/article/contacting-wix-customer-care-for-support';

  const I18N = {
    fr: {
      surtitre: 'Informations légales',
      titre: 'Mentions légales',
      sousTitre: 'La transparence est notre priorité. Retrouvez ici toutes les informations légales concernant notre entreprise, l’hébergement de ce site et vos droits.',
      maj: 'Dernière mise à jour :',
      sommaire: 'Sommaire',
      sommaireAria: 'Sommaire des mentions légales',
      parties: [
        {
          id: 'editeur', icone: 'building', court: 'Éditeur', titre: '1. Identification de l’éditeur',
          blocs: [
            { champs: [
              { label: 'Dénomination sociale', valeur: 'OC Sport Pen Duick' },
              { label: 'Siège social', valeur: '6 bis rue du sous-marin Vénus, 56100 Lorient' },
              { label: 'Forme juridique', valeur: 'SASU' },
              { label: 'Numéro SIRET', valeur: '52157339400074' },
              { label: 'Capital social', valeur: '884 000 €' },
              { label: 'Directeur de publication', valeur: 'Joseph Bizard' },
              { label: 'Immatriculation', valeur: 'RCS Lorient n° 521 573 394' },
              { label: 'Conception du site', lignes: ['{a:https://www.wapitix.fr/}Agence Wapitix{/a}'] }
            ] }
          ]
        },
        {
          id: 'contact', icone: 'mail', court: 'Contact', titre: '2. Contact',
          blocs: [
            'Pour toute question relative au site, à son contenu ou à son utilisation, vous pouvez nous contacter via les coordonnées suivantes :',
            { champs: [
              { label: 'Par email', lignes: ['{a:mailto:joseph.bizard@ocsport.com}joseph.bizard@ocsport.com{/a}'] }
            ] }
          ]
        },
        {
          id: 'hebergement', icone: 'server', court: 'Hébergement', titre: '3. Hébergement',
          blocs: [
            'Le site est hébergé par :',
            { champs: [
              { label: 'Wix Online Platform Limited', lignes: ['Wix Online Platform Limited', '1 Grant’s Row, Dublin 2 D02HX96,', 'Ireland'] },
              { label: 'Contact hébergeur', lignes: ['Site web : {a:https://wix.com/}https://wix.com/{/a}', 'Numéro de téléphone : {a:' + SUPPORT_WIX + '}Veuillez cliquer ici.{/a}'] }
            ] }
          ]
        },
        {
          id: 'propriete', icone: 'copyright', court: 'Propriété intellectuelle', titre: '4. Propriété intellectuelle',
          blocs: [
            'Le Support Numérique et son contenu, notamment les données, informations, logos, marques, commentaires, ouvrages, textes, illustrations et images, etc. sont protégés par les lois françaises, notamment par les dispositions du Code de la propriété intellectuelle, et les conventions internationales sur le droit d’auteur.',
            'Toute utilisation, notamment copie, reproduction, représentation, traduction, adaptation, diffusion, intégrale ou partielle, du contenu ou des informations présentes sur le Support Numérique, sous quelque forme et par quelque procédé que ce soit, est formellement interdite sauf autorisation écrite préalable de l’Éditeur (article L. 122-4 du Code de propriété intellectuelle). Pour obtenir une autorisation écrite de l’Éditeur, l’Utilisateur peut adresser une demande à l’adresse mail suivante : {a:mailto:communication@ocgroup.com}communication@ocgroup.com{/a}'
          ]
        },
        {
          id: 'cgu', icone: 'scale', court: 'Conditions d’utilisation', titre: '5. Conditions Générales d’Utilisation (CGU)',
          blocs: [
            { h3: '5.1 Accès au site' },
            'L’Editeur ne peut en aucun cas garantir une continuité de service sans interruption, ni les temps de transmission des données ou la sécurité des informations inhérents au réseau internet que l’Utilisateur déclare bien connaître et en accepter les caractéristiques et les limites.',
            { h3: '5.2 Responsabilité' },
            'En conséquence, l’Éditeur ne pourra être tenu responsable de tout préjudice ou dommage direct ou indirect, résultant de l’utilisation du Support Numérique ou d’une quelconque information obtenue sur ce Support Numérique.',
            { h3: '5.3 Liens hypertextes' },
            'Le Support Numérique peut contenir des liens vers des sites partenaires ou vers d’autres sites ou sources. L’Éditeur n’exerce aucun contrôle sur ces sites et n’assume par conséquent aucune responsabilité quant à leur accessibilité, leur contenu, publicités, produits, services, etc., disponibles sur ou à partir de ces sites.',
            { h3: '5.4 Loi applicable et juridiction compétente' },
            'Les présentes CGU sont soumises à la loi française. En cas de litige, la juridiction compétente sera déterminée selon les règles de droit commun.'
          ]
        },
        {
          id: 'donnees', icone: 'lock', court: 'Données personnelles', titre: '6. Données personnelles',
          blocs: [
            { h3: 'Protection de vos données' },
            'Le traitement des données personnelles collectées sur ce site est réalisé conformément à la réglementation en vigueur, notamment au Règlement Général sur la Protection des Données (RGPD).',
            'Les informations détaillées concernant la collecte, l’utilisation, la conservation des données et les droits des utilisateurs sont disponibles dans la politique dédiée.',
            { bouton: { libelle: 'Consulter la Politique de Confidentialité', href: CONF } }
          ]
        }
      ],
      lies: {
        titre: 'Documents liés',
        texte: 'Ces mentions se lisent avec la politique de confidentialité, les conditions d’utilisation de « Mon Espace Rhum » et les règlements des jeux.',
        liens: [
          { libelle: 'Politique de confidentialité', href: CONF },
          { libelle: 'Conditions d’utilisation', href: CGU },
          { libelle: 'Règlements', href: REGLEMENTS }
        ]
      }
    },

    en: {
      surtitre: 'Legal information',
      titre: 'Legal notices',
      sousTitre: 'Transparency is our priority. Here you will find all the legal information concerning our company, the hosting of this site, and your rights.',
      maj: 'Last updated:',
      sommaire: 'Contents',
      sommaireAria: 'Contents of the legal notices',
      parties: [
        {
          id: 'editeur', icone: 'building', court: 'Publisher', titre: '1. Publisher identification',
          blocs: [
            { champs: [
              { label: 'Company name', valeur: 'OC Sport Pen Duick' },
              { label: 'Registered office', valeur: '6 bis rue du sous-marin Vénus, 56100 Lorient' },
              { label: 'Legal form', valeur: 'SASU' },
              { label: 'SIRET number', valeur: '52157339400074' },
              { label: 'Share capital', valeur: '884 000 €' },
              { label: 'Publishing director', valeur: 'Joseph Bizard' },
              { label: 'Registration', valeur: 'RCS Lorient n° 521 573 394' },
              { label: 'Website design', lignes: ['{a:https://www.wapitix.fr/}Agence Wapitix{/a}'] }
            ] }
          ]
        },
        {
          id: 'contact', icone: 'mail', court: 'Contact', titre: '2. Contact',
          blocs: [
            'For any questions relating to the site, its content or its use, you can contact us using the following contact details:',
            { champs: [
              { label: 'By email', lignes: ['{a:mailto:joseph.bizard@ocsport.com}joseph.bizard@ocsport.com{/a}'] }
            ] }
          ]
        },
        {
          id: 'hebergement', icone: 'server', court: 'Hosting', titre: '3. Hosting',
          blocs: [
            'The site is hosted by:',
            { champs: [
              { label: 'Wix Online Platform Limited', lignes: ['Wix Online Platform Limited', '1 Grant’s Row, Dublin 2 D02HX96,', 'Ireland'] },
              { label: 'Host contact', lignes: ['Website: {a:https://wix.com/}https://wix.com/{/a}', 'Phone number: {a:' + SUPPORT_WIX + '}Please click here.{/a}'] }
            ] }
          ]
        },
        {
          id: 'propriete', icone: 'copyright', court: 'Intellectual property', titre: '4. Intellectual Property',
          blocs: [
            'The Digital Media and its content, including data, information, logos, trademarks, comments, works, texts, illustrations and images, etc., are protected by French law, in particular by the provisions of the Intellectual Property Code, and international conventions on copyright.',
            'Any use, including copying, reproduction, representation, translation, adaptation, or distribution, in whole or in part, of the content or information contained on the Digital Medium, in any form and by any means whatsoever, is strictly prohibited without the prior written authorization of the Publisher (Article L. 122-4 of the French Intellectual Property Code). To obtain written authorization from the Publisher, the User may send a request to the following email address: {a:mailto:communication@ocgroup.com}communication@ocgroup.com{/a}'
          ]
        },
        {
          id: 'cgu', icone: 'scale', court: 'Terms of use', titre: '5. General Terms and Conditions of Use (GTC)',
          blocs: [
            { h3: '5.1 Access to the site' },
            'The Publisher cannot under any circumstances guarantee uninterrupted service continuity, nor data transmission times or information security inherent to the internet network, which the User declares to be well aware of and accepts in terms of its characteristics and limitations.',
            { h3: '5.2 Liability' },
            'Consequently, the Publisher cannot be held liable for any direct or indirect harm or damage resulting from the use of the Digital Medium or any information obtained on this Digital Medium.',
            { h3: '5.3 Hyperlinks' },
            'The Digital Platform may contain links to partner sites or other sites or sources. The Publisher has no control over these sites and therefore assumes no responsibility for their accessibility, content, advertisements, products, services, etc., available on or from these sites.',
            { h3: '5.4 Applicable Law and Jurisdiction' },
            'These Terms of Use are governed by French law. In the event of a dispute, the competent court will be determined in accordance with the ordinary rules of law.'
          ]
        },
        {
          id: 'donnees', icone: 'lock', court: 'Personal data', titre: '6. Personal Data',
          blocs: [
            { h3: 'Data protection' },
            'The processing of personal data collected on this site is carried out in accordance with the regulations in force, in particular the General Data Protection Regulation (GDPR).',
            'Detailed information regarding the collection, use, storage of data and user rights is available in the dedicated policy.',
            { bouton: { libelle: 'View the Privacy Policy', href: CONF } }
          ]
        }
      ],
      lies: {
        titre: 'Related documents',
        texte: 'These notices are read together with the privacy policy, the terms of use of “My Espace Rhum” and the official rules of the games.',
        liens: [
          { libelle: 'Privacy policy', href: CONF },
          { libelle: 'Terms of use', href: CGU },
          { libelle: 'Official rules', href: REGLEMENTS }
        ]
      }
    }
  };

  const MOIS = {
    fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  

  function dateLisible(iso, lang) {
    const v = String(iso || '').trim();
    let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
    if (m && MOIS[lang][Number(m[2]) - 1]) return Number(m[3]) + ' ' + MOIS[lang][Number(m[2]) - 1] + ' ' + m[1];
    m = /^(\d{4})-(\d{2})$/.exec(v);
    if (m && MOIS[lang][Number(m[2]) - 1]) return MOIS[lang][Number(m[2]) - 1] + ' ' + m[1];
    return v;
  }

  




  const CSS = `
rdr-mentions{display:block;width:100%;}
rdr-mentions .mtl{
  --mtl-fond:#0E111D;
  --mtl-encre:#EEF2F8;
  --mtl-encre-douce:rgba(238,242,248,.72);
  --mtl-encre-sourde:rgba(238,242,248,.5);
  --mtl-filet-sombre:rgba(238,242,248,.14);
  --mtl-or:#FCDD00;
  --mtl-or-voile:rgba(252,221,0,.12);
  --mtl-or-filet:rgba(252,221,0,.4);
  --mtl-or-badge:rgba(252,221,0,.55);
  --mtl-carte:#FFFFFF;
  --mtl-carte-encre:#0E111D;
  --mtl-carte-texte:#2C3547;
  --mtl-carte-sourd:#6B7482;
  --mtl-carte-filet:#E4E8EE;
  --mtl-panneau:#F4F6F9;
  --mtl-vert:#006F7B;
  --mtl-t1:11px;
  --mtl-t2:13px;
  --mtl-t3:15px;
  --mtl-t4:17px;
  --mtl-t5:clamp(22px, 2.2vw, 30px);
  --mtl-t6:clamp(38px, 4.4vw, 62px);
  --mtl-e1:4px; --mtl-e2:8px; --mtl-e3:12px; --mtl-e4:16px;
  --mtl-e5:24px; --mtl-e6:32px; --mtl-e7:48px; --mtl-e8:64px;
  --mtl-r-carte:18px;
  --mtl-r-badge:14px;
  --mtl-r-lien:10px;
  --mtl-chrome:0px;
  --mtl-largeur:1180px;
  position:relative;
  display:block;
  background:var(--mtl-fond);
  color:var(--mtl-encre);
  font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-size:var(--mtl-t3);
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
rdr-mentions .mtl,rdr-mentions .mtl *,rdr-mentions .mtl *::before,rdr-mentions .mtl *::after{box-sizing:border-box;}
rdr-mentions .mtl p,rdr-mentions .mtl h1,rdr-mentions .mtl h2,rdr-mentions .mtl h3,rdr-mentions .mtl ul,rdr-mentions .mtl ol,rdr-mentions .mtl dl,rdr-mentions .mtl dd,rdr-mentions .mtl dt{margin:0;padding:0;}
rdr-mentions .mtl ul,rdr-mentions .mtl ol{list-style:none;}
rdr-mentions .mtl a{color:inherit;text-decoration:none;}
rdr-mentions .mtl svg{display:block;}

 
rdr-mentions .mtl .mtl-cadre{max-width:var(--mtl-largeur);margin:0 auto;padding:0 var(--mtl-e5);}
rdr-mentions .mtl .mtl-hero{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:var(--mtl-e6);align-items:center;padding:calc(var(--mtl-e8) + var(--mtl-e3)) 0 var(--mtl-e7);}
rdr-mentions .mtl .mtl-surtitre{display:inline-flex;align-items:center;gap:var(--mtl-e2);margin:0 0 var(--mtl-e4);font-size:var(--mtl-t2);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--mtl-or);}
rdr-mentions .mtl .mtl-surtitre::before{content:'';width:var(--mtl-e5);height:2px;background:var(--mtl-or);border-radius:2px;}
rdr-mentions .mtl .mtl-titre{margin:0 0 var(--mtl-e4);font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--mtl-t6);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}
rdr-mentions .mtl .mtl-sous{max-width:60ch;margin:0 0 var(--mtl-e5);font-size:var(--mtl-t4);line-height:1.6;color:var(--mtl-encre-douce);}
rdr-mentions .mtl .mtl-pastille{display:inline-flex;align-items:center;gap:var(--mtl-e2);padding:var(--mtl-e2) var(--mtl-e4);border:1px solid var(--mtl-or-filet);border-radius:999px;font-size:var(--mtl-t2);font-weight:500;color:var(--mtl-or);}
rdr-mentions .mtl .mtl-pastille svg{width:16px;height:16px;}
rdr-mentions .mtl .mtl-hero-icone{width:200px;height:200px;color:var(--mtl-or);opacity:.55;}
rdr-mentions .mtl .mtl-hero-icone svg{width:100%;height:100%;stroke-width:1.1;}

 
rdr-mentions .mtl .mtl-corps{display:grid;grid-template-columns:232px minmax(0,1fr);gap:var(--mtl-e7);align-items:start;padding-bottom:var(--mtl-e8);}
rdr-mentions .mtl .mtl-som{position:sticky;top:calc(var(--mtl-chrome) + var(--mtl-e6));max-height:calc(100vh - var(--mtl-chrome) - var(--mtl-e8));overflow-y:auto;overscroll-behavior:contain;padding-right:var(--mtl-e2);scrollbar-width:thin;scrollbar-color:var(--mtl-filet-sombre) transparent;}
rdr-mentions .mtl .mtl-som.deborde{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 16px,#000 calc(100% - 16px),transparent 100%);}
rdr-mentions .mtl .mtl-som-titre{margin:0 0 var(--mtl-e4);font-size:var(--mtl-t1);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--mtl-encre-sourde);}
rdr-mentions .mtl .mtl-som-liste{display:grid;gap:2px;}
rdr-mentions .mtl .mtl-som-liste li{min-width:0;}
rdr-mentions .mtl .mtl-som-lien{display:flex;align-items:center;gap:var(--mtl-e3);padding:var(--mtl-e2) var(--mtl-e3);border-left:2px solid transparent;border-radius:var(--mtl-r-lien);font-size:var(--mtl-t2);font-weight:500;line-height:1.3;color:var(--mtl-encre-douce);transition:background .15s,color .15s,border-color .15s;}
rdr-mentions .mtl .mtl-som-num{flex:0 0 auto;min-width:1.6em;font-variant-numeric:tabular-nums;font-size:var(--mtl-t1);font-weight:700;letter-spacing:.04em;color:var(--mtl-encre-sourde);transition:color .15s;}
rdr-mentions .mtl .mtl-som-lien svg{flex:0 0 auto;width:16px;height:16px;color:var(--mtl-or);}
rdr-mentions .mtl .mtl-som-lib{min-width:0;}
rdr-mentions .mtl .mtl-som-lien:hover{background:rgba(255,255,255,.06);color:#FFFFFF;}
rdr-mentions .mtl .mtl-som-lien:focus-visible{outline:2px solid var(--mtl-or);outline-offset:2px;}
rdr-mentions .mtl .mtl-som-lien.est-actif{background:var(--mtl-or-voile);border-left-color:var(--mtl-or);color:#FFFFFF;font-weight:600;}
rdr-mentions .mtl .mtl-som-lien.est-actif .mtl-som-num{color:var(--mtl-or);}
rdr-mentions .mtl .mtl-lecture{min-width:0;display:grid;gap:var(--mtl-e8);}

 
rdr-mentions .mtl .mtl-sec{min-width:0;scroll-margin-top:calc(var(--mtl-chrome) + var(--mtl-e5));}
rdr-mentions .mtl .mtl-sec-tete{display:flex;align-items:center;gap:var(--mtl-e4);margin:0 0 var(--mtl-e6);padding:0 0 var(--mtl-e4);border-bottom:1px solid var(--mtl-filet-sombre);}
rdr-mentions .mtl .mtl-badge{flex:0 0 auto;display:grid;place-items:center;width:48px;height:48px;border-radius:var(--mtl-r-badge);background:var(--mtl-or-badge);color:var(--mtl-fond);}
rdr-mentions .mtl .mtl-badge svg{width:24px;height:24px;}
rdr-mentions .mtl .mtl-sec-titre{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--mtl-t5);line-height:1.1;letter-spacing:.01em;text-transform:uppercase;color:#FFFFFF;text-wrap:balance;}

 
rdr-mentions .mtl .mtl-carte{display:grid;gap:var(--mtl-e4);padding:var(--mtl-e6);border-radius:var(--mtl-r-carte);background:var(--mtl-carte);color:var(--mtl-carte-texte);min-width:0;}
rdr-mentions .mtl .mtl-carte p{color:var(--mtl-carte-texte);}
rdr-mentions .mtl .mtl-carte a{color:var(--mtl-vert);font-weight:600;text-decoration:underline;text-decoration-color:rgba(0,111,123,.35);text-underline-offset:3px;overflow-wrap:anywhere;}
rdr-mentions .mtl .mtl-carte a:hover{text-decoration-color:var(--mtl-vert);}
rdr-mentions .mtl .mtl-carte a:focus-visible{outline:2px solid var(--mtl-vert);outline-offset:2px;border-radius:2px;}
rdr-mentions .mtl .mtl-carte strong{color:var(--mtl-carte-encre);font-weight:700;}
rdr-mentions .mtl .mtl-h3{margin:var(--mtl-e3) 0 0;font-size:var(--mtl-t4);font-weight:700;color:var(--mtl-carte-encre);}
rdr-mentions .mtl .mtl-h3:first-child{margin-top:0;}
rdr-mentions .mtl .mtl-champs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--mtl-e5) var(--mtl-e7);padding:var(--mtl-e2) 0;}
rdr-mentions .mtl .mtl-champ{display:grid;align-content:start;gap:var(--mtl-e1);min-width:0;}
rdr-mentions .mtl .mtl-champ-lib{font-size:var(--mtl-t1);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--mtl-vert);}
rdr-mentions .mtl .mtl-champ-val{color:var(--mtl-carte-encre);font-weight:500;overflow-wrap:anywhere;}
rdr-mentions .mtl .mtl-champ-val span{display:block;}

 
rdr-mentions .mtl .mtl-carte a.mtl-bouton{justify-self:start;display:inline-flex;align-items:center;gap:var(--mtl-e2);min-height:44px;margin-top:var(--mtl-e2);padding:0 var(--mtl-e5);border-radius:999px;background:var(--mtl-carte-encre);color:#FFFFFF;font-weight:700;font-size:var(--mtl-t2);letter-spacing:.04em;text-decoration:none;transition:background .15s;}
rdr-mentions .mtl .mtl-carte a.mtl-bouton svg{width:18px;height:18px;color:var(--mtl-or);transition:transform .15s;}
rdr-mentions .mtl .mtl-carte a.mtl-bouton:hover{background:#1E2640;}
rdr-mentions .mtl .mtl-carte a.mtl-bouton:hover svg{transform:translateX(3px);}
rdr-mentions .mtl .mtl-carte a.mtl-bouton:focus-visible{outline:2px solid var(--mtl-vert);outline-offset:3px;}

 
rdr-mentions .mtl .mtl-lies{display:flex;gap:var(--mtl-e6);align-items:flex-start;padding:var(--mtl-e6);border:1px solid var(--mtl-or-filet);border-radius:var(--mtl-r-carte);background:var(--mtl-or-voile);}
rdr-mentions .mtl .mtl-lies-icone{flex:0 0 auto;display:grid;place-items:center;width:60px;height:60px;border-radius:50%;background:rgba(252,221,0,.16);color:var(--mtl-or);}
rdr-mentions .mtl .mtl-lies-icone svg{width:26px;height:26px;}
rdr-mentions .mtl .mtl-lies-corps{flex:1 1 auto;min-width:0;}
rdr-mentions .mtl .mtl-lies-titre{margin:0 0 var(--mtl-e2);font-size:var(--mtl-t4);font-weight:700;color:#FFFFFF;}
rdr-mentions .mtl .mtl-lies p{margin:0 0 var(--mtl-e4);color:var(--mtl-encre-douce);}
rdr-mentions .mtl .mtl-lies-liens{display:flex;flex-wrap:wrap;gap:var(--mtl-e2) var(--mtl-e5);}
rdr-mentions .mtl .mtl-lies-liens a{display:inline-flex;align-items:center;gap:var(--mtl-e2);font-weight:600;color:var(--mtl-or);}
rdr-mentions .mtl .mtl-lies-liens a svg{width:18px;height:18px;transition:transform .15s;}
rdr-mentions .mtl .mtl-lies-liens a:hover svg{transform:translateX(3px);}
rdr-mentions .mtl .mtl-lies-liens a:focus-visible{outline:2px solid var(--mtl-or);outline-offset:3px;border-radius:2px;}

 
rdr-mentions .mtl.sous-900 .mtl-hero{grid-template-columns:minmax(0,1fr);padding-top:var(--mtl-e7);}
rdr-mentions .mtl.sous-900 .mtl-hero-icone{display:none;}
rdr-mentions .mtl.sous-900 .mtl-corps{grid-template-columns:minmax(0,1fr);gap:var(--mtl-e6);}
rdr-mentions .mtl.sous-900 .mtl-som{position:static;max-height:none;overflow:visible;padding-right:0;}
rdr-mentions .mtl.sous-900 .mtl-som.deborde{-webkit-mask-image:none;mask-image:none;}
rdr-mentions .mtl.sous-900 .mtl-som-liste{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--mtl-e1) var(--mtl-e4);}
rdr-mentions .mtl.sous-900 .mtl-som-lien,rdr-mentions .mtl.sous-900 .mtl-som-lien.est-actif{border-left:0;}
rdr-mentions .mtl.sous-900 .mtl-lecture{gap:var(--mtl-e7);}
rdr-mentions .mtl.sous-600 .mtl-cadre{padding:0 var(--mtl-e4);}
rdr-mentions .mtl.sous-600 .mtl-carte{padding:var(--mtl-e5) var(--mtl-e4);}
rdr-mentions .mtl.sous-600 .mtl-champs{grid-template-columns:minmax(0,1fr);gap:var(--mtl-e4);}
rdr-mentions .mtl.sous-600 .mtl-lies{flex-direction:column;gap:var(--mtl-e4);padding:var(--mtl-e5) var(--mtl-e4);}
rdr-mentions .mtl.sous-600 .mtl-sec-tete{gap:var(--mtl-e3);}
rdr-mentions .mtl.sous-600 .mtl-badge{width:40px;height:40px;border-radius:12px;}
rdr-mentions .mtl.sous-600 .mtl-badge svg{width:20px;height:20px;}
rdr-mentions .mtl.sous-420 .mtl-som-liste{grid-template-columns:minmax(0,1fr);}
@media(prefers-reduced-motion:reduce){
  rdr-mentions .mtl .mtl-som-lien,rdr-mentions .mtl .mtl-lies-liens a svg,rdr-mentions .mtl .mtl-carte a.mtl-bouton,rdr-mentions .mtl .mtl-carte a.mtl-bouton svg{transition:none;}
}
`;

  function lien(h, lang) {
    const v = String(h || '');
    if (lang === 'en' && v.charAt(0) === '/') return '/en' + v;
    return v;
  }

   
  const ancre = (h, lang) => '<a href="' + esc(lien(h, lang)) + '"' + (/^https?:\/\//i.test(h) ? ' target="_blank" rel="noopener"' : '') + '>';

  function html(texte, lang) {
    return String(texte)
      .replace(/\{b\}/g, '<strong>').replace(/\{\/b\}/g, '</strong>')
      .replace(/\{a:([^}]+)\}/g, (m, h) => ancre(h, lang))
      .replace(/\{\/a\}/g, '</a>');
  }

  function langueDeLaPage() {
    try {
      if (/^\/en(\/|$)/i.test(window.location.pathname)) return 'en';
      const l = String(document.documentElement.lang || '').toLowerCase();
      return l.indexOf('en') === 0 ? 'en' : 'fr';
    } catch (e) { return 'fr'; }
  }

  customElements.define('rdr-mentions', class extends HTMLElement {
    static get observedAttributes() { return ['lang', 'maj', 'chrome']; }

    constructor() {
      super();
      this._initialise = false;
      this._lang = 'fr';
       
      this._maj = '2025-09';
       
      this._chrome = null;
      this._attente = {};
      this._observateurs = [];
      this._ecouteurs = [];
      this._rafId = 0;
    }

    connectedCallback() {
      if (this._initialise) return;
      this._initialise = true;

      if (!document.getElementById('mtl-style')) {
        const s = document.createElement('style');
        s.id = 'mtl-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      

      const langPosee = this._attente.lang !== undefined || this.hasAttribute('lang');
      Object.keys(this._attente).forEach(k => this._appliquer(k, this._attente[k]));
      this._attente = {};
      ['lang', 'maj', 'chrome'].forEach(k => { if (this.hasAttribute(k)) this._appliquer(k, this.getAttribute(k)); });
      if (!langPosee) this._lang = langueDeLaPage();

      this.innerHTML = '<article class="mtl"></article>';
      this._racine = this.querySelector('.mtl');
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
      try {
        if (!document.querySelector('rdr-entete')) return 0;
        return window.matchMedia && window.matchMedia('(max-width: 750px)').matches ? 60 : 56;
      } catch (e) { return 0; }
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
      this._racine.style.setProperty('--mtl-chrome', this._haut() + 'px');
      this._racine.setAttribute('lang', lang);

      this._racine.innerHTML =
        '<div class="mtl-cadre">' +
          this._hero(T) +
          '<div class="mtl-corps">' +
            this._sommaire(T) +
            '<div class="mtl-lecture">' +
              T.parties.map(a => this._partie(a, lang)).join('') +
              this._lies(T, lang) +
            '</div>' +
          '</div>' +
        '</div>';

      this._brancher();
    }

    _hero(T) {
      return '<header class="mtl-hero">' +
        '<div class="mtl-hero-texte">' +
          '<p class="mtl-surtitre">' + esc(T.surtitre) + '</p>' +
          '<h1 class="mtl-titre">' + esc(T.titre) + '</h1>' +
          '<p class="mtl-sous">' + esc(T.sousTitre) + '</p>' +
          '<p class="mtl-pastille">' + svg('clock') + '<span>' + esc(T.maj) + ' ' +
            '<time datetime="' + esc(this._maj) + '">' + esc(dateLisible(this._maj, this._lang)) + '</time></span></p>' +
        '</div>' +
        '<div class="mtl-hero-icone">' + svg('landmark') + '</div>' +
      '</header>';
    }

    _sommaire(T) {
      return '<nav class="mtl-som" aria-label="' + esc(T.sommaireAria) + '">' +
        '<p class="mtl-som-titre">' + esc(T.sommaire) + '</p>' +
        '<ul class="mtl-som-liste">' +
          T.parties.map((a, i) =>
            '<li><a class="mtl-som-lien" href="#mtl-' + esc(a.id) + '" data-cible="mtl-' + esc(a.id) + '">' +
              '<span class="mtl-som-num">' + String(i + 1).padStart(2, '0') + '</span>' +
              svg(a.icone) +
              '<span class="mtl-som-lib">' + esc(a.court) + '</span>' +
            '</a></li>').join('') +
        '</ul>' +
      '</nav>';
    }

    _partie(a, lang) {
      return '<section class="mtl-sec" id="mtl-' + esc(a.id) + '">' +
        '<div class="mtl-sec-tete">' +
          '<span class="mtl-badge">' + svg(a.icone) + '</span>' +
          '<h2 class="mtl-sec-titre">' + esc(a.titre) + '</h2>' +
        '</div>' +
        '<div class="mtl-carte">' + a.blocs.map(b => this._bloc(b, lang)).join('') + '</div>' +
      '</section>';
    }

    _bloc(b, lang) {
      if (typeof b === 'string') return '<p>' + html(b, lang) + '</p>';
      if (b.h3) return '<h3 class="mtl-h3">' + esc(b.h3) + '</h3>';
      if (b.champs) {
        return '<div class="mtl-champs">' + b.champs.map(c =>
          '<div class="mtl-champ">' +
            '<span class="mtl-champ-lib">' + esc(c.label) + '</span>' +
            '<span class="mtl-champ-val">' + (c.lignes ? c.lignes.map(l => '<span>' + html(l, lang) + '</span>').join('') : esc(c.valeur)) + '</span>' +
          '</div>').join('') + '</div>';
      }
      if (b.bouton) return ancre(b.bouton.href, lang).replace('<a ', '<a class="mtl-bouton" ') + esc(b.bouton.libelle) + svg('arrowRight') + '</a>';
      return '';
    }

    _lies(T, lang) {
      const L = T.lies;
      return '<aside class="mtl-lies">' +
        '<div class="mtl-lies-icone">' + svg('fileText') + '</div>' +
        '<div class="mtl-lies-corps">' +
          '<p class="mtl-lies-titre">' + esc(L.titre) + '</p>' +
          '<p>' + esc(L.texte) + '</p>' +
          '<div class="mtl-lies-liens">' + L.liens.map(l =>
            '<a href="' + esc(lien(l.href, lang)) + '">' + esc(l.libelle) + svg('arrowRight') + '</a>').join('') + '</div>' +
        '</div>' +
      '</aside>';
    }

     
    _brancher() {
      const racine = this._racine;
      const som = racine.querySelector('.mtl-som');
      const liens = Array.from(racine.querySelectorAll('.mtl-som-lien'));
      const parId = new Map();
      liens.forEach(l => parId.set(l.getAttribute('data-cible'), l));
      const sections = Array.from(racine.querySelectorAll('.mtl-sec[id]')).filter(s => parId.has(s.id));

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
        const a = ev.target.closest('.mtl-som-lien');
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
       
      const surRedim = () => { racine.style.setProperty('--mtl-chrome', this._haut() + 'px'); demander(); marquerDebord(); };
      window.addEventListener('resize', surRedim, { passive: true });
      this._ecouteurs.push([window, 'resize', surRedim]);
    }
  });
})();
})();
