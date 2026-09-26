/* rdr-elements socle | source route-du-rhum ede21c7 | rdr-pied-haut.js rdr-notify.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["socle"]="ede21c7";performance.mark("rdr-elements:socle")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('rdr-pied-haut')) return;

  const TXT = {
    fr: {
      prenom: 'Prénom', email: 'Adresse e-mail', emailCourt: 'Email', langue: 'Langue de la newsletter', envoyer: "JE M'ABONNE !",
      envoi: 'Envoi en cours…', prenomVide: 'Indiquez votre prénom.', emailVide: 'Indiquez votre adresse e-mail.',
      emailFaux: 'Cette adresse ne semble pas valide.', erreur: "L'inscription n'a pas abouti. Réessayez dans un instant.",
      erreurDeja: 'Cette adresse est déjà inscrite.', reessayer: 'Réessayer', consentVide: 'Cochez la case pour vous abonner.', merciTitre: 'Merci pour votre inscription !',
      merciTexte: 'Vous recevrez bientôt nos prochaines actualités directement par e-mail.',
      partenaires: 'Nos partenaires', obligatoire: 'obligatoire'
    },
    en: {
      prenom: 'First name', email: 'Email address', emailCourt: 'Email', langue: 'Newsletter language', envoyer: 'SUBSCRIBE',
      envoi: 'Sending…', prenomVide: 'Please enter your first name.', emailVide: 'Please enter your email address.',
      emailFaux: 'This address does not look valid.', erreur: 'Your subscription could not be saved. Please try again in a moment.',
      erreurDeja: 'This address is already subscribed.', reessayer: 'Try again', consentVide: 'Tick the box to subscribe.', merciTitre: 'Thank you for subscribing!',
      merciTexte: 'You will soon receive our latest news directly by email.',
      partenaires: 'Our partners', obligatoire: 'required'
    }
  };

  const CATS = {
    fr: {
      'Majeur Exclusif': { label: 'PARTENAIRE MAJEUR EXCLUSIF', h: 190 }, 'Principaux': { label: 'PARTENAIRES PRINCIPAUX', h: 138 },
      'Officiels': { label: 'PARTENAIRES OFFICIELS', h: 124 }, 'Médias': { label: 'PARTENAIRES MÉDIAS', h: 124 },
      'Fournisseurs Officiels': { label: 'FOURNISSEURS OFFICIELS', h: 105 }, 'Fournisseurs Techniques': { label: 'FOURNISSEURS TECHNIQUES', h: 100 },
      'En collaboration avec': { label: 'AVEC LE SOUTIEN DE', h: 100 }, 'Un événement': { label: 'UN ÉVÉNEMENT', h: 100 }
    },
    en: {
      'Majeur Exclusif': { label: 'EXCLUSIVE MAJOR PARTNER', h: 190 }, 'Principaux': { label: 'MAIN PARTNERS', h: 138 },
      'Officiels': { label: 'OFFICIAL PARTNERS', h: 124 }, 'Médias': { label: 'MEDIA PARTNERS', h: 124 },
      'Fournisseurs Officiels': { label: 'OFFICIAL SUPPLIERS', h: 105 }, 'Fournisseurs Techniques': { label: 'TECHNICAL SUPPLIERS', h: 100 },
      'En collaboration avec': { label: 'WITH THE SUPPORT OF', h: 100 }, 'Un événement': { label: 'AN EVENT', h: 100 }
    }
  };
  


  const RANGS = [
    { cles: ['Majeur Exclusif', 'Principaux'], pleine: false },
    { cles: ['Officiels'], pleine: true }, { cles: ['Médias'], pleine: true },
    { cles: ['Fournisseurs Officiels'], pleine: true }, { cles: ['Fournisseurs Techniques'], pleine: true },
    { cles: ['En collaboration avec', 'Un événement'], pleine: false }
  ];

  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const DUREE_MIN_MS = 1500;
  const ATTENTE_REPONSE_MS = 12000;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
  function urlSure(u, repli) {
    if (u == null) return repli || '';
    let s = String(u).replace(/[\u0000-\u001F\u007F]/g, '').trim(); if (!s) return repli || '';
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) s = 'https://static.wixstatic.com/media/' + m[1];
    else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
    const http = /^https?:/i.test(s);
    const relatif = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
    if (!http && !relatif) return repli || '';
    return s.replace(/"/g, '%22').replace(/'/g, '%27');
  }
  

  function imageWix(u, w, h) {
    const s = urlSure(u); if (!s) return '';
    const m = s.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/?#]+)$/);
    if (!m) return s;
    return 'https://static.wixstatic.com/media/' + m[1] + '/v1/fit/w_' + w + ',h_' + h + ',q_85,enc_auto/' + m[1];
  }
  function lienInterne(u, lang) {
    const s = urlSure(u, '/'); if (lang === 'en' && /^\/(?!en(\/|$))/.test(s)) return '/en' + (s === '/' ? '' : s);
    return s;
  }

  


  const pbSvg = (d, w) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  const PB = {
    externe: pbSvg('<path d="M7 7h10v10"/><path d="M7 17 17 7"/>', 2.4),
    chevron: '<svg class="pb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    boutique: pbSvg('<path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>'),
    courrier: pbSvg('<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>'),
    badge: pbSvg('<path d="M13.5 8h-3"/><path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/><path d="M16.899 22A5 5 0 0 0 7.1 22"/><path d="m9 2 3 6"/><circle cx="12" cy="15" r="3"/>'),
    voilier: pbSvg('<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>')
  };
  const PB_ETROIT = '(max-width:759.98px)';
  function iconeReseau(u) {
    const s = urlSure(u); if (!s) return '';
    return /\/v1\/fill\/w_\d+,h_\d+/.test(s) ? s.replace(/\/v1\/fill\/w_\d+,h_\d+/, '/v1/fill/w_44,h_44') : imageWix(s, 44, 44);
  }
  function ouvrirCookies() {
    try {
      const o = window.__ucCmp || window.UC_UI;
      if (o && typeof o.showSecondLayer === 'function') { o.showSecondLayer(); return true; }
      if (typeof window.openCookieSettings === 'function') { window.openCookieSettings(); return true; }
    } catch (e) {   }
    return false;
  }
  const etroit = () => { try { return !!(window.matchMedia && window.matchMedia(PB_ETROIT).matches); } catch (e) { return false; } };

  const CSS = `
rdr-pied-haut{display:block;width:100%;color:#fff;font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;
  --pd-jaune:#FCDD00;--pd-jaune-2:#FCF150;--pd-marine:#0E111D;--pd-filet:rgba(255,255,255,.42);--pd-t2:rgba(255,255,255,.72);--pd-titre:'Varien','Archivo Black',Impact,sans-serif}
rdr-pied-haut *,rdr-pied-haut *::before,rdr-pied-haut *::after{box-sizing:border-box}
rdr-pied-haut .pd{width:100%;max-width:1440px;margin:0 auto;padding:56px 40px 24px;display:flex;flex-direction:column;gap:64px}
rdr-pied-haut h2,rdr-pied-haut h3,rdr-pied-haut p{margin:0}

 
rdr-pied-haut .pd-news{width:100%;max-width:620px;margin:0 auto;text-align:center}
rdr-pied-haut .pd-titre{font-family:var(--pd-titre);font-style:italic;font-size:28px;line-height:1.1;text-transform:uppercase;color:var(--pd-jaune);letter-spacing:.01em}
rdr-pied-haut .pd-accroche{margin-top:22px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
rdr-pied-haut .pd-desc{margin-top:4px;font-size:12px;line-height:1.5;text-transform:uppercase;color:var(--pd-t2);letter-spacing:.02em}
rdr-pied-haut form{margin-top:30px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22px 36px;align-items:end;text-align:left}
rdr-pied-haut .pd-champ{position:relative;display:flex;flex-direction:column;gap:6px}
rdr-pied-haut .pd-champ.pd-large{grid-column:1 / -1}






rdr-pied-haut label.pd-etq{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0}
rdr-pied-haut input.pd-in{width:100%;background:transparent;border:0;border-bottom:1px solid var(--pd-filet);border-radius:0;color:#fff;font:inherit;font-size:15px;line-height:1.3;padding:10px 2px 11px;outline:none;transition:border-color .2s,box-shadow .2s}
rdr-pied-haut input.pd-in::placeholder{color:rgba(255,255,255,.62)}
rdr-pied-haut input.pd-in:focus{border-bottom-color:#fff}
rdr-pied-haut input.pd-in:focus-visible{box-shadow:0 2px 0 0 var(--pd-jaune)}
rdr-pied-haut .pd-champ.pd-erreur input.pd-in{border-bottom-color:#FF8A80}
rdr-pied-haut .pd-msg{font-size:12px;line-height:1.35;color:#FFB3AD;min-height:0;display:none;padding-left:18px;position:relative}
rdr-pied-haut .pd-msg::before{content:'!';position:absolute;left:0;top:1px;width:13px;height:13px;border-radius:50%;border:1px solid currentColor;font-size:9px;font-weight:700;line-height:12px;text-align:center}
rdr-pied-haut .pd-champ.pd-erreur .pd-msg{display:block}
rdr-pied-haut .pd-langue{display:flex;flex-direction:column;align-items:flex-start;gap:14px;padding-bottom:2px}
rdr-pied-haut .pd-langue-etq{display:block;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--pd-t2)}
rdr-pied-haut .pd-seg{display:inline-flex;border:1px solid var(--pd-filet);border-radius:999px;padding:3px;gap:2px;background:rgba(255,255,255,.04)}
rdr-pied-haut .pd-seg label{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:52px;height:34px;padding:0 14px;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:.06em;cursor:pointer;color:rgba(255,255,255,.85);transition:background .18s,color .18s}
rdr-pied-haut .pd-seg input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer}
rdr-pied-haut .pd-seg input:checked + span{color:var(--pd-marine)}
rdr-pied-haut .pd-seg label:has(input:checked){background:var(--pd-jaune)}
rdr-pied-haut .pd-seg label:has(input:focus-visible){outline:2px solid var(--pd-jaune);outline-offset:2px}
rdr-pied-haut .pd-seg span{position:relative;pointer-events:none}
rdr-pied-haut .pd-piege{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
rdr-pied-haut .pd-actions{grid-column:1 / -1;display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:4px}
rdr-pied-haut button.pd-btn{appearance:none;border:1px solid #fff;background:transparent;color:#fff;border-radius:8px;min-width:280px;height:44px;padding:0 28px;font:inherit;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:10px;transition:background .18s,color .18s,transform .18s}
@media (hover:hover) and (pointer:fine){rdr-pied-haut button.pd-btn:hover{background:#fff;color:var(--pd-marine)}}
rdr-pied-haut button.pd-btn:focus-visible{outline:2px solid var(--pd-jaune);outline-offset:3px}
rdr-pied-haut button.pd-btn[disabled]{opacity:.7;cursor:progress}
rdr-pied-haut .pd-spin{width:14px;height:14px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:pd-rot .8s linear infinite}
@keyframes pd-rot{to{transform:rotate(360deg)}}
rdr-pied-haut .pd-consent{grid-column:1 / -1;display:none;margin-top:-6px}
rdr-pied-haut .pd-consent.pd-on{display:block;animation:pd-app .35s ease}
@keyframes pd-app{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
rdr-pied-haut .pd-case{display:flex;align-items:flex-start;gap:12px;cursor:pointer;font-size:13px;line-height:1.5;color:#fff}
rdr-pied-haut .pd-case input{position:absolute;opacity:0;width:1px;height:1px;margin:0}
rdr-pied-haut .pd-case .pd-coche{flex:0 0 20px;width:20px;height:20px;margin-top:2px;border:1.5px solid var(--pd-filet);border-radius:5px;display:grid;place-items:center;transition:background .18s,border-color .18s;background:transparent}
rdr-pied-haut .pd-case .pd-coche::after{content:'';width:11px;height:6px;border-left:2.5px solid var(--pd-marine);border-bottom:2.5px solid var(--pd-marine);transform:rotate(-45deg) translate(1px,-1px);opacity:0;transition:opacity .15s}
rdr-pied-haut .pd-case input:checked + .pd-coche{background:var(--pd-jaune);border-color:var(--pd-jaune)}
rdr-pied-haut .pd-case input:checked + .pd-coche::after{opacity:1}
rdr-pied-haut .pd-case input:focus-visible + .pd-coche{outline:2px solid var(--pd-jaune);outline-offset:2px}
rdr-pied-haut .pd-case a{color:var(--pd-jaune);text-decoration:underline;text-underline-offset:2px}
rdr-pied-haut .pd-case .pd-etoile{color:var(--pd-jaune)}
rdr-pied-haut .pd-consent .pd-msg{margin-top:6px;margin-left:32px}
rdr-pied-haut .pd-consent.pd-erreur .pd-msg{display:block}
rdr-pied-haut .pd-consent.pd-erreur .pd-coche{border-color:#FF8A80}
rdr-pied-haut .pd-global{grid-column:1 / -1;display:none;font-size:13px;line-height:1.45;padding:12px 14px;border-radius:8px;background:rgba(255,138,128,.14);border:1px solid rgba(255,138,128,.5);color:#fff}
rdr-pied-haut .pd-global.pd-on{display:flex;align-items:center;justify-content:space-between;gap:12px}
rdr-pied-haut .pd-global button{appearance:none;border:0;background:#fff;color:var(--pd-marine);border-radius:6px;padding:6px 12px;font:inherit;font-size:12px;font-weight:700;cursor:pointer}
rdr-pied-haut .pd-merci{display:none;margin-top:26px;padding:26px 24px;border:1px solid rgba(252,221,0,.5);border-radius:12px;background:rgba(252,221,0,.06)}
rdr-pied-haut .pd-merci.pd-on{display:block}
rdr-pied-haut .pd-merci h3{font-family:var(--pd-titre);font-style:italic;font-size:22px;text-transform:uppercase;color:var(--pd-jaune);line-height:1.15}
rdr-pied-haut .pd-merci p{margin-top:10px;font-size:14px;line-height:1.5;color:#fff}
rdr-pied-haut .pd-news.pd-fini form{display:none}

 
rdr-pied-haut .pd-identite{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:24px 40px;max-width:1100px;margin:0 auto;width:100%}
rdr-pied-haut .pd-logo{justify-self:end;display:block;width:172px;height:172px;line-height:0}
rdr-pied-haut .pd-logo img{width:100%;height:100%;object-fit:contain;display:block}
rdr-pied-haut .pd-affiche{display:block;width:min(440px,42vw);line-height:0}
rdr-pied-haut .pd-affiche img{width:100%;height:auto;display:block}
rdr-pied-haut .pd-annee{justify-self:start;font-family:var(--pd-titre);font-style:italic;font-size:clamp(56px,7vw,96px);line-height:1;color:#fff}
rdr-pied-haut .pd-slogan{grid-column:1 / -1;text-align:center;font-family:var(--pd-titre);font-style:italic;font-size:clamp(26px,3.2vw,40px);line-height:1.1;text-transform:uppercase;color:#fff;margin-top:8px}

 
rdr-pied-haut .pd-pg{width:100%}
rdr-pied-haut .pd-rang{display:flex;flex-wrap:wrap;width:100%}
rdr-pied-haut .pd-bloc{flex:1 1 200px;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:22px 16px}
rdr-pied-haut .pd-lab{display:flex;align-items:center;gap:12px;width:100%;justify-content:center}
rdr-pied-haut .pd-lab::before,rdr-pied-haut .pd-lab::after{content:'';flex:1;max-width:56px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.32));transition:background .35s}
rdr-pied-haut .pd-lab::after{background:linear-gradient(270deg,transparent,rgba(255,255,255,.32))}
rdr-pied-haut .pd-lab span{font-size:9px;font-weight:500;letter-spacing:.28em;text-transform:uppercase;color:var(--pd-t2);white-space:nowrap;flex-shrink:0;transition:color .35s}
@media (hover:hover) and (pointer:fine){rdr-pied-haut .pd-bloc:hover .pd-lab span{color:rgba(255,255,255,.9)}}
@media (hover:hover) and (pointer:fine){rdr-pied-haut .pd-bloc:hover .pd-lab::before{background:linear-gradient(90deg,transparent,rgba(252,220,80,.5))}}
@media (hover:hover) and (pointer:fine){rdr-pied-haut .pd-bloc:hover .pd-lab::after{background:linear-gradient(270deg,transparent,rgba(252,220,80,.5))}}
rdr-pied-haut .pd-logos{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px}
rdr-pied-haut .pd-logos.pd-pleine{gap:12px 20px}
rdr-pied-haut .pd-item{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;line-height:0;flex-shrink:0;border-radius:6px}
rdr-pied-haut .pd-item:focus-visible{outline:2px solid var(--pd-jaune);outline-offset:2px}
rdr-pied-haut .pd-img{display:block;object-fit:contain;opacity:.82;transform:translateY(0);transition:opacity .5s ease,transform .5s cubic-bezier(.16,1,.3,1),filter .28s,scale .28s cubic-bezier(.34,1.56,.64,1)}
rdr-pied-haut .pd-pg.pd-anime .pd-img:not(.pd-vu){opacity:0;transform:translateY(10px)}
@media (hover:hover) and (pointer:fine){
  rdr-pied-haut .pd-logos:hover .pd-img{opacity:.28}
  rdr-pied-haut .pd-logos:hover .pd-item:hover .pd-img{opacity:1;scale:1.1;filter:drop-shadow(0 6px 18px rgba(255,255,255,.22))}
}

 
@media (max-width:1100px){
  rdr-pied-haut .pd{padding:48px 28px 20px;gap:52px}
  rdr-pied-haut .pd-logo{width:140px;height:140px}
}
@media (max-width:760px){
  rdr-pied-haut .pd{padding:40px 16px 16px;gap:44px}
  rdr-pied-haut .pd-titre{font-size:24px}
  rdr-pied-haut form{grid-template-columns:1fr;gap:18px}
  

  rdr-pied-haut .pd-champ{order:1}
  rdr-pied-haut .pd-langue{order:0;flex-direction:row;align-items:center;justify-content:space-between;gap:16px;padding:6px 0 2px}
  rdr-pied-haut .pd-piege{order:3}
  rdr-pied-haut .pd-consent{order:4;margin-top:0}
  rdr-pied-haut .pd-global{order:5}
  rdr-pied-haut .pd-actions{order:6}
  rdr-pied-haut button.pd-btn{min-width:0;width:100%}
  rdr-pied-haut .pd-identite{grid-template-columns:auto 1fr;gap:18px 20px;align-items:center}
  rdr-pied-haut .pd-logo{width:96px;height:96px;justify-self:start;grid-row:1;grid-column:1}
  rdr-pied-haut .pd-annee{justify-self:end;font-size:64px;grid-row:1;grid-column:2}
  rdr-pied-haut .pd-affiche{grid-row:2;grid-column:1 / -1;width:min(360px,80vw);justify-self:center}
  rdr-pied-haut .pd-slogan{font-size:28px}
  rdr-pied-haut .pd-bloc{flex-basis:100%;padding:12px 10px;gap:12px}
  rdr-pied-haut .pd-logos{gap:6px 8px}
  rdr-pied-haut .pd-logos.pd-pleine{gap:6px 10px}
  rdr-pied-haut .pd-img{width:var(--hm)!important;height:var(--hm)!important}
  rdr-pied-haut .pd-lab span{white-space:normal;text-align:center}
  rdr-pied-haut .pd-lab::before,rdr-pied-haut .pd-lab::after{max-width:20px}
}
@media (prefers-reduced-motion:reduce){
  rdr-pied-haut *,rdr-pied-haut *::before,rdr-pied-haut *::after{animation-duration:.001ms!important;transition-duration:.001ms!important}
  rdr-pied-haut .pd-pg.pd-anime .pd-img:not(.pd-vu){opacity:.82;transform:none}
}





rdr-pied-haut{position:relative;overflow:hidden;isolation:isolate}
rdr-pied-haut .pb-arcs{position:absolute;left:0;bottom:0;z-index:-1;width:clamp(760px,87vw,1250px);aspect-ratio:276/223;background:#1D2243;-webkit-mask:center/100% 100% no-repeat;mask:center/100% 100% no-repeat;transform:scaleX(-1);pointer-events:none}
rdr-pied-haut .pb{--pb-nuit:#0E111D;--pb-texte:rgba(255,255,255,.76);--pb-filet:rgba(255,255,255,.13);--pb-jaune:#FCDD00;--pb-marge:clamp(20px,4vw,56px);color:#fff}
rdr-pied-haut .pb ul{list-style:none;margin:0;padding:0}
rdr-pied-haut .pb-dedans{max-width:1320px;margin:0 auto;padding:clamp(44px,5.5vw,72px) var(--pb-marge) 0;display:grid;grid-template-columns:1fr auto;grid-template-areas:"identite social" "outils outils" "plan plan" "orga legal" "credit credit"}
rdr-pied-haut .pb-identite{grid-area:identite;display:flex;align-items:center;gap:22px}
rdr-pied-haut .pb-logo{display:block;flex:none;width:clamp(84px,7vw,104px);aspect-ratio:1;background:#fff;border-radius:4px;overflow:hidden;line-height:0}
rdr-pied-haut .pb-logo img{display:block;width:100%;height:100%}
rdr-pied-haut .pb-nom{margin:0;font-family:var(--pd-titre);font-style:italic;text-transform:uppercase;font-size:clamp(17px,1.5vw,22px);line-height:1.1;max-width:15em}
rdr-pied-haut .pb-nom sup{font-size:.68em;line-height:0;vertical-align:.5em}
rdr-pied-haut .pb-nom span{display:block;margin-top:6px;font-family:'Montserrat',system-ui,sans-serif;font-style:normal;text-transform:none;font-size:13px;font-weight:500;color:var(--pb-texte)}
rdr-pied-haut .pb-social{grid-area:social;display:flex;align-items:center;gap:20px;justify-self:end}
rdr-pied-haut .pb-hashtag{margin:0;font-family:var(--pd-titre);font-style:italic;text-transform:uppercase;font-size:clamp(16px,1.4vw,19px)}
rdr-pied-haut .pb-reseaux{display:flex;gap:10px}
rdr-pied-haut .pb-reseaux a{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.16);transition:background-color .2s ease,transform .2s ease}
rdr-pied-haut .pb-reseaux img{width:22px;height:22px;display:block}
rdr-pied-haut .pb-outils{grid-area:outils;display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(24px,2.8vw,32px);padding-bottom:clamp(28px,3.2vw,38px);border-bottom:1px solid var(--pb-filet)}
rdr-pied-haut .pb-outil{display:inline-flex;align-items:center;gap:9px;height:42px;padding:0 16px 0 13px;border-radius:10px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.24);color:#fff;font-size:11.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap;text-decoration:none;transition:background-color .2s ease,box-shadow .2s ease,filter .2s ease}
rdr-pied-haut .pb-outil svg{flex:none;width:16px;height:16px}
rdr-pied-haut .pb-mascotte{flex:none;display:block;width:18px;height:21px;margin:-2px -1px -2px -2px;object-fit:contain}
rdr-pied-haut .pb-outil .pb-ext{width:12px;height:12px;margin-left:-2px;opacity:.7}
rdr-pied-haut .pb-outil--blanc{background:#fff;color:var(--pb-nuit);box-shadow:none}
rdr-pied-haut .pb-outil--espace{background:linear-gradient(0deg,#FCDD00 0%,#FFB338 100%);color:var(--pb-nuit);box-shadow:none}
rdr-pied-haut .pb-plan{grid-area:plan;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:34px clamp(18px,2.2vw,34px);padding:clamp(34px,4.2vw,54px) 0 clamp(38px,4.6vw,58px)}
rdr-pied-haut .pb-rub{--c:#FCF150;min-width:0}
rdr-pied-haut .pb-rub summary{list-style:none;display:flex;align-items:center;gap:10px;margin:0 0 18px;font-family:var(--pd-titre);font-style:italic;text-transform:uppercase;font-size:18px;line-height:1.15;letter-spacing:.01em;cursor:default;color:#fff}
rdr-pied-haut .pb-rub summary::-webkit-details-marker{display:none}
rdr-pied-haut .pb-rub summary::before{content:'';flex:none;width:16px;height:3px;border-radius:2px;background:var(--c)}
rdr-pied-haut .pb-rub summary .pb-chevron{display:none}
rdr-pied-haut .pb-rub ul{display:grid;gap:11px}
rdr-pied-haut .pb-rub a{color:var(--pb-texte);font-size:14px;font-weight:500;line-height:1.35;text-decoration:none;background:linear-gradient(var(--c),var(--c)) 0 100%/0 1.5px no-repeat;padding-bottom:2px;transition:color .2s ease,background-size .3s ease}
rdr-pied-haut .pb-rub a svg{width:12px;height:12px;margin-left:5px;vertical-align:-1px;opacity:.55}
rdr-pied-haut .pb-rub a[aria-current="page"]{color:#fff;background-size:100% 1.5px}
rdr-pied-haut .pb-insec{white-space:nowrap}
rdr-pied-haut .pb-bientot{font-size:14px;font-weight:500;line-height:1.35;color:rgba(255,255,255,.4)}
rdr-pied-haut .pb-bientot em{display:inline-block;white-space:nowrap;margin-left:7px;padding:1px 6px;border-radius:999px;background:rgba(255,255,255,.06);font-style:normal;font-size:7.5px;font-weight:700;line-height:1.5;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5);vertical-align:2px}
rdr-pied-haut .pb-orga{grid-area:orga;display:flex;align-items:center;gap:clamp(18px,2vw,28px);padding:clamp(28px,3.2vw,38px) 0;border-top:1px solid var(--pb-filet)}
rdr-pied-haut .pb-orga p{margin:0;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--pb-texte)}
rdr-pied-haut .pb-orga > div{display:flex;align-items:center;gap:clamp(22px,2.4vw,34px)}
rdr-pied-haut .pb-orga a{display:block;line-height:0;opacity:.92;transition:opacity .2s ease}
rdr-pied-haut .pb-orga img{display:block;max-width:none}
rdr-pied-haut .pb-legal{grid-area:legal;display:flex;align-items:center;justify-content:flex-end;padding:clamp(28px,3.2vw,38px) 0;border-top:1px solid var(--pb-filet)}
rdr-pied-haut .pb-legal ul{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:10px 30px;font-size:13px}
rdr-pied-haut .pb-legal a,rdr-pied-haut .pb-legal button{color:var(--pb-texte);text-decoration:none;transition:color .2s ease}
rdr-pied-haut .pb-legal button{appearance:none;-webkit-appearance:none;margin:0;padding:0;border:0;background:none;font:inherit;font-size:13px;line-height:inherit;cursor:pointer}
rdr-pied-haut .pb-credit{grid-area:credit;display:flex;justify-content:center;margin:0;padding:clamp(34px,4vw,46px) 0 clamp(44px,5vw,64px);border-top:1px solid var(--pb-filet)}
rdr-pied-haut .pb-credit a{color:var(--pb-texte);font-size:12.5px;text-decoration:none;transition:color .2s ease}
rdr-pied-haut .pb-credit b{font-weight:800;letter-spacing:.06em;color:#fff}
@media (hover:hover) and (pointer:fine){
  rdr-pied-haut .pb-reseaux a:hover{background:rgba(252,221,0,.18);transform:translateY(-2px)}
  rdr-pied-haut .pb-outil--blanc:hover,rdr-pied-haut .pb-outil--espace:hover{filter:brightness(.94)}
  rdr-pied-haut .pb-outil:not(.pb-outil--blanc):not(.pb-outil--espace):hover{background:rgba(255,255,255,.07);box-shadow:inset 0 0 0 1px rgba(252,221,0,.6)}
  rdr-pied-haut .pb-rub a:hover{color:#fff;background-size:100% 1.5px}
  rdr-pied-haut .pb-orga a:hover{opacity:1}
  rdr-pied-haut .pb-legal a:hover,rdr-pied-haut .pb-legal button:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}
  rdr-pied-haut .pb-credit a:hover{color:#fff}
  rdr-pied-haut .pb-credit a:hover b{color:var(--pb-jaune)}
}
rdr-pied-haut .pb a:focus-visible,rdr-pied-haut .pb summary:focus-visible,rdr-pied-haut .pb button:focus-visible{outline:2px solid var(--pb-jaune);outline-offset:3px;border-radius:4px}
@media (max-width:1320px){ rdr-pied-haut .pb-plan{gap:30px 20px} rdr-pied-haut .pb-rub a{font-size:13.5px} }
@media (max-width:1100px){
  rdr-pied-haut .pb-plan{grid-template-columns:repeat(3,minmax(0,1fr));gap:36px 28px}
  rdr-pied-haut .pb-dedans{grid-template-columns:1fr;grid-template-areas:"identite" "social" "outils" "plan" "orga" "legal" "credit"}
  rdr-pied-haut .pb-social{justify-self:start;margin-top:22px}
  rdr-pied-haut .pb-legal{justify-content:flex-start;border-top:0;padding-top:0}
  rdr-pied-haut .pb-legal ul{justify-content:flex-start}
}



@media (max-width:759.98px){
  rdr-pied-haut .pb-dedans{padding-top:44px;grid-template-areas:"identite" "outils" "plan" "orga" "social" "legal" "credit"}
  rdr-pied-haut .pb-identite{flex-direction:column;text-align:center;gap:16px}
  rdr-pied-haut .pb-logo{width:136px}
  rdr-pied-haut .pb-nom{max-width:none;font-size:19px}
  rdr-pied-haut .pb-outils{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:26px}
  rdr-pied-haut .pb-outil{height:auto;min-height:44px;padding:7px 12px;justify-content:center;white-space:normal;line-height:1.2;font-size:11px;letter-spacing:.04em}
  rdr-pied-haut .pb-outil .pb-ext{display:none}
  

  rdr-pied-haut .pb-outil--espace{order:1;grid-column:1 / -1}
  rdr-pied-haut .pb-plan{grid-template-columns:1fr;gap:0;padding:14px 0 0}
  rdr-pied-haut .pb-rub{border-bottom:1px solid var(--pb-filet)}
  rdr-pied-haut .pb-rub summary{margin:0;padding:20px 2px;cursor:pointer;font-size:18px}
  rdr-pied-haut .pb-rub summary .pb-chevron{display:block;margin-left:auto;width:20px;height:20px;transition:transform .25s ease}
  rdr-pied-haut .pb-rub[open] summary .pb-chevron{transform:rotate(180deg)}
  rdr-pied-haut .pb-rub ul{padding:0 2px 18px 26px;gap:2px}
  rdr-pied-haut .pb-rub li{display:flex}
  rdr-pied-haut .pb-rub a,rdr-pied-haut .pb-bientot{display:block;padding:10px 0;font-size:16px}
  rdr-pied-haut .pb-orga{flex-direction:column;gap:14px;border-top:0;padding:48px 0 34px}
  rdr-pied-haut .pb-orga > div{gap:28px}
  rdr-pied-haut .pb-social{flex-direction:column;gap:14px;justify-self:center;margin:0;padding-bottom:34px}
  rdr-pied-haut .pb-legal{justify-content:center;padding:28px 0 30px;border-top:1px solid var(--pb-filet)}
  rdr-pied-haut .pb-legal ul{justify-content:center;gap:14px 26px;font-size:14px}
  rdr-pied-haut .pb-legal button{font-size:14px}
  rdr-pied-haut .pb-credit{padding:30px 0 48px}
  rdr-pied-haut .pb-arcs{width:245vw;left:-20vw}
}
@media (prefers-reduced-motion:reduce){ rdr-pied-haut .pb *{transition:none !important} }







rdr-pied-haut .pd-sq-news{width:100%;max-width:620px;margin:0 auto;min-height:342px;display:flex;flex-direction:column;align-items:center}
rdr-pied-haut .pd-sq-l,rdr-pied-haut .pd-sq-c{position:relative;display:block;overflow:hidden}
rdr-pied-haut .pd-sq-l{height:11px;border-radius:4px;background:rgba(255,255,255,.12)}
rdr-pied-haut .pd-sq-c{border-radius:22px 6px 22px 6px;background:rgba(255,255,255,.06)}
rdr-pied-haut .pd-sq-titre{width:min(380px,80%);height:26px;border-radius:6px;background:rgba(252,221,0,.24)}
rdr-pied-haut .pd-sq-accroche{width:min(300px,70%);margin-top:26px}
rdr-pied-haut .pd-sq-desc{width:min(520px,92%);margin-top:10px}
rdr-pied-haut .pd-sq-form{width:100%;margin-top:34px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22px 36px;align-items:end}
rdr-pied-haut .pd-sq-champ{display:flex;align-items:center;height:44px;border-bottom:1px solid rgba(255,255,255,.22)}
rdr-pied-haut .pd-sq-champ .pd-sq-l{width:96px}
rdr-pied-haut .pd-sq-large{grid-column:1 / -1}
rdr-pied-haut .pd-sq-seg{width:116px;height:40px;border-radius:999px}
rdr-pied-haut .pd-sq-bouton{grid-column:1 / -1;justify-self:center;display:block;width:280px;height:44px;margin-top:4px;border:1px solid rgba(255,255,255,.26);border-radius:8px}
rdr-pied-haut .pd-sq-id{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:24px 40px;max-width:1100px;margin:0 auto;width:100%}
rdr-pied-haut .pd-sq-logo{justify-self:end;width:172px;height:172px}
rdr-pied-haut .pd-sq-affiche{width:min(440px,42vw);aspect-ratio:440 / 436}
rdr-pied-haut .pd-sq-annee{justify-self:start;width:calc(2.3 * clamp(56px,7vw,96px));height:clamp(56px,7vw,96px);border-radius:8px}
rdr-pied-haut .pd-sq-slogan{grid-column:1 / -1;justify-self:center;width:min(640px,80%);height:clamp(29px,3.52vw,44px);margin-top:8px;border-radius:6px}
rdr-pied-haut .pd-sq-pg{display:flex;flex-direction:column;justify-content:space-around;min-height:clamp(1520px,calc(2816px - 90vw),1830px)}
rdr-pied-haut .pd-sq-rang{display:flex;flex-direction:column;align-items:center;gap:18px;padding:22px 16px}
rdr-pied-haut .pd-sq-lab{width:170px;height:9px}
rdr-pied-haut .pd-sq-logos{display:flex;flex-wrap:wrap;justify-content:center;gap:12px 20px;max-width:900px}
rdr-pied-haut .pd-sq-logos .pd-sq-c{width:96px;height:64px;border-radius:12px 4px 12px 4px}
rdr-pied-haut .pd-sq-grands .pd-sq-c{width:150px;height:120px}
rdr-pied-haut .pd-sq-l::after,rdr-pied-haut .pd-sq-c::after{content:'';position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent);animation:pd-sq-luire 1.6s ease-in-out infinite}
@keyframes pd-sq-luire{to{transform:translateX(100%)}}
@media (max-width:1100px){
  rdr-pied-haut .pd-sq-logo{width:140px;height:140px}
  rdr-pied-haut .pd-sq-pg{min-height:clamp(1792px,calc(3100px - 124vw),2260px)}
}
@media (max-width:760px){
  rdr-pied-haut .pd-sq-news{min-height:368px}
  rdr-pied-haut .pd-sq-form{grid-template-columns:1fr;gap:18px}
  rdr-pied-haut .pd-sq-seg{order:0;justify-self:end}
  rdr-pied-haut .pd-sq-champ{order:1}
  rdr-pied-haut .pd-sq-bouton{order:2;width:100%}
  rdr-pied-haut .pd-sq-id{grid-template-columns:auto 1fr;gap:18px 20px}
  rdr-pied-haut .pd-sq-logo{width:96px;height:96px;justify-self:start;grid-row:1;grid-column:1}
  rdr-pied-haut .pd-sq-annee{justify-self:end;width:147px;height:64px;grid-row:1;grid-column:2}
  rdr-pied-haut .pd-sq-affiche{grid-row:2;grid-column:1 / -1;width:min(360px,80vw);justify-self:center}
  rdr-pied-haut .pd-sq-slogan{height:31px}
  rdr-pied-haut .pd-sq-pg{min-height:calc(1920px - 52.5vw)}
  rdr-pied-haut .pd-sq-rang{gap:12px;padding:12px 10px}
  rdr-pied-haut .pd-sq-logos{gap:6px 10px}
  rdr-pied-haut .pd-sq-logos .pd-sq-c{width:64px;height:44px}
  rdr-pied-haut .pd-sq-grands .pd-sq-c{width:112px;height:96px}
}
@media (max-width:520px){
  rdr-pied-haut .pd-sq-slogan{height:62px;background:linear-gradient(rgba(255,255,255,.12) 0 42%,transparent 42% 58%,rgba(255,255,255,.12) 58%)}
  rdr-pied-haut .pd-sq-pg{min-height:2066px}
}
@media (max-width:400px){
  rdr-pied-haut .pd-sq-news{min-height:413px}
  rdr-pied-haut .pd-sq-pg{min-height:2352px}
}
@media (max-width:370px){
  rdr-pied-haut .pd-sq-pg{min-height:2661px}
}
rdr-pied-haut .pd-sq-bas{display:flex;flex-direction:column;gap:34px;min-height:var(--pd-sq-bas,830px);padding-top:clamp(44px,5.5vw,72px)}
rdr-pied-haut .pd-sq-outils{display:flex;flex-wrap:wrap;gap:10px}
rdr-pied-haut .pd-sq-outils .pd-sq-c{width:168px;height:42px;border-radius:10px}
rdr-pied-haut .pd-sq-plan{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:30px 24px}
rdr-pied-haut .pd-sq-col{display:flex;flex-direction:column;gap:16px}
rdr-pied-haut .pd-sq-col .pd-sq-l{width:78%}
rdr-pied-haut .pd-sq-col .pd-sq-l:first-child{width:62%;height:16px}
@media (max-width:1100px){ rdr-pied-haut .pd-sq-plan{grid-template-columns:repeat(3,minmax(0,1fr))} rdr-pied-haut .pd-sq-bas{--pd-sq-bas:1100px} }
@media (max-width:759.98px){
  rdr-pied-haut .pd-sq-bas{--pd-sq-bas:1350px;gap:26px}
  rdr-pied-haut .pd-sq-outils{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
  rdr-pied-haut .pd-sq-outils .pd-sq-c{width:auto;height:44px}
  rdr-pied-haut .pd-sq-outils .pd-sq-c:last-child{grid-column:1 / -1}
  rdr-pied-haut .pd-sq-plan{grid-template-columns:1fr;gap:0}
  rdr-pied-haut .pd-sq-col{padding:22px 0;border-bottom:1px solid rgba(255,255,255,.13)}
  rdr-pied-haut .pd-sq-col .pd-sq-l:not(:first-child){display:none}
}
@media (prefers-reduced-motion:reduce){
  rdr-pied-haut .pd-sq-l::after,rdr-pied-haut .pd-sq-c::after{animation:none;display:none}
}`;

  const sq = (c) => '<i class="' + c + '"></i>';
  const SQUELETTE = '<div class="pd pd-attente" aria-hidden="true">'
    + '<div class="pd-sq-news">' + sq('pd-sq-l pd-sq-titre') + sq('pd-sq-l pd-sq-accroche') + sq('pd-sq-l pd-sq-desc')
    + '<div class="pd-sq-form"><span class="pd-sq-champ">' + sq('pd-sq-l') + '</span>' + sq('pd-sq-c pd-sq-seg')
    + '<span class="pd-sq-champ pd-sq-large">' + sq('pd-sq-l') + '</span>' + sq('pd-sq-bouton') + '</div></div>'
    + '<div class="pd-sq-id">' + sq('pd-sq-c pd-sq-logo') + sq('pd-sq-c pd-sq-affiche') + sq('pd-sq-c pd-sq-annee') + sq('pd-sq-l pd-sq-slogan') + '</div>'
    + '<div class="pd-sq-pg">' + [3, 7, 6, 7, 8, 4].map((n, k) => '<div class="pd-sq-rang">' + sq('pd-sq-l pd-sq-lab')
      + '<span class="pd-sq-logos' + (k === 0 ? ' pd-sq-grands' : '') + '">' + sq('pd-sq-c').repeat(n) + '</span></div>').join('') + '</div>'
    + '<div class="pd-sq-bas"><span class="pd-sq-outils">' + sq('pd-sq-c').repeat(5) + '</span>'
    + '<span class="pd-sq-plan">' + [6, 7, 5, 3, 5, 6].map(n => '<span class="pd-sq-col">' + sq('pd-sq-l').repeat(n + 1) + '</span>').join('') + '</span></div>'
    + '</div>';
  


  const ATTENTE_MAX_MS = 12000;


  







  const MEM_CLE = 'rdrMemPiedHautV1';
   
  function navigateurCourt() {
    const ua = String(navigator.userAgent || '');
    const mobile = /iPhone|iPad|Android|Mobile/i.test(ua) ? '-mobile' : '';
    if (/Firefox\//.test(ua)) return 'firefox' + mobile;
    if (/Edg\//.test(ua)) return 'edge' + mobile;
    if (/Chrome\/|CriOS\//.test(ua)) return 'chrome' + mobile;
    if (/Safari\//.test(ua)) return 'safari' + mobile;
    return 'autre' + mobile;
  }
  const MEM_TTL_MS = 30 * 60 * 1000;
  const memTelephone = () => /Mobi|iPhone|Android.+Mobile/i.test((typeof navigator !== 'undefined' && navigator.userAgent) || '');
  const memLangue = () => /^\/en(\/|$)/.test((typeof location !== 'undefined' && location.pathname) || '') ? 'en' : 'fr';
  function memLire(suffixe) {
    try { const m = JSON.parse(sessionStorage.getItem(MEM_CLE + ':' + suffixe) || 'null'); return (m && typeof m.le === 'number' && Date.now() - m.le < MEM_TTL_MS) ? m : null; }
    catch (e) { return null; }
  }
  function memEcrire(suffixe, valeurs) {
    try { sessionStorage.setItem(MEM_CLE + ':' + suffixe, JSON.stringify(Object.assign({ le: Date.now() }, valeurs))); }
    catch (e) {   }
  }

  class PiedHaut extends HTMLElement {
    constructor() {
      super();
       
      this._lang = memLangue(); this._reglages = null; this._partenaires = []; this._pret = false; this._brut = { reglages: null, partenaires: null }; this._depuisMemoire = false;
      this._attente = null; this._minuteur = null; this._obs = null; this._filet = null; this._veille = null;
      this._cle = null; this._naissance = Date.now(); this._etatNews = 'repos';
      this._garde = null; this._abandon = false;
      this._mq = null; this._surMq = null; this._obsBas = null; this._surHistoire = null;
    }
    static get observedAttributes() { return ['lang', 'reglages', 'partenaires', 'pret', 'newsletter-etat', 'temoin']; }
    attributeChangedCallback(nom, avant, val) {
      if (avant === val) return;
      if (nom === 'lang') { this._lang = val === 'en' ? 'en' : 'fr'; }
      if (nom === 'reglages') { this._brut.reglages = val; this._depuisMemoire = false; try { this._reglages = JSON.parse(val || 'null'); } catch (e) { this._reglages = null; } if (val == null) { this._cle = null; this._etatNews = 'repos'; this._attente = null; } if (val && this.isConnected) this._memoriser(); }
      if (nom === 'partenaires') { this._brut.partenaires = val; try { const l = JSON.parse(val || '[]'); this._partenaires = Array.isArray(l) ? l : []; } catch (e) { this._partenaires = []; } if (this.isConnected) this._memoriser(); }
      if (nom === 'pret') { this._pret = val === 'oui'; if (this._pret && this._attente) this._emettre(this._attente); return; }
      if (nom === 'newsletter-etat') { this._reponse(String(val || '').replace(/#.*$/, '')); return; }
      if (nom === 'temoin') { this._temoin(); return; }
      if (this.isConnected) this._render();
    }
    



    _depuisLaMemoire() {
      if (this._brut.reglages != null || this._depuisMemoire) return;
      const m = memLire(this._lang);
      if (!m || typeof m.reglages !== 'string') return;
      this._depuisMemoire = true;
      this._brut.reglages = m.reglages; this._brut.partenaires = typeof m.partenaires === 'string' ? m.partenaires : '[]';
      try { this._reglages = JSON.parse(m.reglages); } catch (e) { this._reglages = null; }
      try { const l = JSON.parse(this._brut.partenaires); this._partenaires = Array.isArray(l) ? l : []; } catch (e) { this._partenaires = []; }
    }
    _memoriser() {
      if (!this._brut.reglages || !this._brut.partenaires) return;
      memEcrire(this._lang, { reglages: this._brut.reglages, partenaires: this._brut.partenaires });
    }
    connectedCallback() { this._depuisLaMemoire(); if (!this._depuisMemoire) this._memoriser(); this._render(); }
    disconnectedCallback() {
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._filet) { clearTimeout(this._filet); this._filet = null; }
      if (this._minuteur) { clearTimeout(this._minuteur); this._minuteur = null; }
      if (this._veille) { this._veille.disconnect(); this._veille = null; }
      if (this._garde) { clearTimeout(this._garde); this._garde = null; }
      this._lacherBas();
      this._cle = null;
    }
    get _t() { return TXT[this._lang]; }

     
    _render() {
      const r = this._reglages; if (!r) { this._attendre(); return; }
      if (this._garde) { clearTimeout(this._garde); this._garde = null; }
      


      const cle = this._lang + '|' + JSON.stringify(r) + '|' + this._partenaires.length + '|' + this._partenaires.map(p => p.logoBlanc + p.ordre).join(',');
      if (cle === this._cle) return;
      if (this._etatNews === 'envoi') return;
      this._cle = cle;
      const t = this._t; const lang = this._lang;
      const idp = 'pd-' + Math.random().toString(36).slice(2, 7);
      this.innerHTML = '<style>' + CSS + '</style><div class="pd">'
        + this._newsletter(r, t, idp)
        + this._identite(r, lang)
        + this._partenairesHtml(lang, t)
        + '</div>'
        + this._basHtml(r.bas, lang);
      this._brancher(idp);
      this._reveler();
      this._veiller();
      this._brancherBas();
    }
    


    _attendre() {
      if (this._abandon) return;
      if (!this.querySelector('.pd-news, .pd-attente')) { this.innerHTML = '<style>' + CSS + '</style>' + SQUELETTE; this._veiller(); }
      if (this._garde || !this.querySelector('.pd-attente')) return;
      this._garde = setTimeout(() => {
        this._garde = null;
        if (this._reglages) return;
        this._abandon = true;
        const a = this.querySelector('.pd-attente'); if (a) a.remove();
      }, ATTENTE_MAX_MS);
    }
    _newsletter(r, t, idp) {
      const politique = urlSure(r.politiqueUrl, '/politique-de-confidentialite');
      const consent = r.consentement ? esc(r.consentement).replace(/\[([^\]]+)\]/, '<a href="' + esc(lienInterne(politique, this._lang)) + '" target="_blank" rel="noopener">$1</a>') : '';
      return '<section class="pd-news" aria-labelledby="' + idp + '-titre">'
        + '<h2 class="pd-titre" id="' + idp + '-titre">' + esc(r.titre || '') + '</h2>'
        + (r.accroche ? '<p class="pd-accroche">' + esc(r.accroche) + '</p>' : '')
        + (r.description ? '<p class="pd-desc">' + esc(r.description) + '</p>' : '')
        + '<form novalidate autocomplete="on">'
        + '<div class="pd-champ"><label class="pd-etq" for="' + idp + '-prenom">' + t.prenom + ' (' + t.obligatoire + ')</label>'
        + '<input class="pd-in" id="' + idp + '-prenom" name="prenom" type="text" placeholder="' + t.prenom + '" autocomplete="given-name" maxlength="60" required aria-describedby="' + idp + '-prenom-msg">'
        + '<p class="pd-msg" id="' + idp + '-prenom-msg" aria-live="polite"></p></div>'
        + '<div class="pd-langue" role="radiogroup" aria-labelledby="' + idp + '-langue"><span class="pd-langue-etq" id="' + idp + '-langue">' + t.langue + '</span>'
        + '<span class="pd-seg">'
        + '<label><input type="radio" name="langue" value="FR"' + (this._lang === 'fr' ? ' checked' : '') + '><span>FR</span></label>'
        + '<label><input type="radio" name="langue" value="EN"' + (this._lang === 'en' ? ' checked' : '') + '><span>EN</span></label>'
        + '</span></div>'
        + '<div class="pd-champ pd-large"><label class="pd-etq" for="' + idp + '-email">' + t.email + ' (' + t.obligatoire + ')</label>'
        + '<input class="pd-in" id="' + idp + '-email" name="email" type="email" inputmode="email" placeholder="' + t.emailCourt + '" autocomplete="email" maxlength="120" required aria-describedby="' + idp + '-email-msg">'
        + '<p class="pd-msg" id="' + idp + '-email-msg" aria-live="polite"></p></div>'
        + '<div class="pd-piege" aria-hidden="true"><label>Site<input type="text" name="site" tabindex="-1" autocomplete="off"></label></div>'
        + '<div class="pd-global" role="alert"><span class="pd-global-txt"></span><button type="button" class="pd-global-btn">' + t.reessayer + '</button></div>'
        + (consent ? '<div class="pd-consent"><label class="pd-case"><input type="checkbox" name="consentement" value="oui" aria-describedby="' + idp + '-consent-msg"><span class="pd-coche" aria-hidden="true"></span><span>' + consent + ' <span class="pd-etoile" aria-hidden="true">*</span></span></label><p class="pd-msg" id="' + idp + '-consent-msg" aria-live="polite"></p></div>' : '')
        + '<div class="pd-actions"><button type="submit" class="pd-btn"><span class="pd-btn-txt">' + esc(r.boutonLibelle || t.envoyer) + '</span></button></div></form>'
        + '<div class="pd-merci" role="status" aria-live="polite"><h3>' + esc(r.merciTitre || t.merciTitre) + '</h3><p>' + esc(r.merciTexte || t.merciTexte) + '</p></div>'
        + '</section>';
    }
    _identite(r, lang) {
      const logo = imageWix(r.logo, 360, 360); const affiche = imageWix(r.affiche, 880, 880);
      return '<section class="pd-identite">'
        + (logo ? '<a class="pd-logo" href="' + esc(lienInterne(r.logoLien || '/', lang)) + '" aria-label="' + esc(r.logoAlt || 'Route du Rhum') + '"><img src="' + esc(logo) + '" alt="' + esc(r.logoAlt || 'Route du Rhum - Destination Guadeloupe') + '" width="172" height="172" loading="lazy" decoding="async"></a>' : '<span></span>')
        + (affiche ? '<div class="pd-affiche"><img src="' + esc(affiche) + '" alt="' + esc(r.afficheAlt || '') + '" width="440" height="440" loading="lazy" decoding="async"></div>' : '<span></span>')
        + '<p class="pd-annee" aria-hidden="true">' + esc(r.annee || '') + '</p>'
        + (r.slogan ? '<p class="pd-slogan">' + esc(r.slogan) + '</p>' : '')
        + '</section>';
    }
    _partenairesHtml(lang, t) {
      const cats = CATS[lang]; const liste = this._partenaires;
      if (!liste.length) return '';
      const de = (cle) => liste.filter(p => (Array.isArray(p.type) ? p.type : (p.type ? [p.type] : [])).includes(cle)).sort((a, b) => (a.ordre == null ? 999 : a.ordre) - (b.ordre == null ? 999 : b.ordre));
      const logos = (items, h) => items.map(p => {
        







        const url = imageWix(p.logoBlanc, h * 2, h * 2) || urlSure(p.logoBlanc); if (!url) return '';
        const alt = esc(p.logoAltText || 'Partenaire'); const lien = urlSure(p.link || ''); const hm = Math.round(h * 0.78);
        const img = '<img src="' + esc(url) + '" alt="' + alt + '" loading="lazy" decoding="async" class="pd-img" width="' + h + '" height="' + h + '" style="width:' + h + 'px;height:' + h + 'px;--hm:' + hm + 'px">';
        return lien ? '<a href="' + esc(lien) + '" class="pd-item" target="_blank" rel="noopener" aria-label="' + alt + '">' + img + '</a>' : '<span class="pd-item">' + img + '</span>';
      }).join('');
      const rangs = RANGS.map(rang => {
        const pleins = rang.cles.filter(c => de(c).length);
        if (!pleins.length) return '';
        return '<div class="pd-rang">' + pleins.map(c => '<div class="pd-bloc"><div class="pd-lab"><span>' + cats[c].label + '</span></div><div class="pd-logos' + (rang.pleine ? ' pd-pleine' : '') + '">' + logos(de(c), cats[c].h) + '</div></div>').join('') + '</div>';
      }).join('');
      return '<section class="pd-pg pd-anime" aria-label="' + esc(t.partenaires) + '">' + rangs + '</section>';
    }

     
    _basHtml(b, lang) {
      if (!b || !Array.isArray(b.plan) || !b.plan.length) return '';
      const cible = (l) => l.externe ? ' target="_blank" rel="noopener"' : '';
      const lien = (l) => {
        if (l.bientot) return '<span class="pb-bientot">' + esc(l.libelle) + '<em>' + esc(b.bientot || '') + '</em></span>';
        if (l.action === 'cookies') return '<button type="button" data-pb-cookies>' + esc(l.libelle) + '</button>';
        const u = lienInterne(l.lien, lang);
        

        const mots = String(l.libelle || '').split(' '); const dernier = mots.pop();
        const texte = l.externe ? esc(mots.join(' ')) + (mots.length ? ' ' : '') + '<span class="pb-insec">' + esc(dernier) + PB.externe + '</span>' : esc(l.libelle);
        return '<a href="' + esc(u) + '"' + cible(l) + (l.externe ? ' aria-label="' + esc(l.libelle + ' (' + (b.externe || '') + ')') + '"' : ' data-pb-ici') + '>' + texte + '</a>';
      };
      const ouvert = !etroit();
      const motif = urlSure(b.motif);
      const logo = urlSure(b.logo);
      const mascotte = imageWix(b.mascotte, 40, 46) || urlSure(b.mascotte);
      const picto = (o) => o.picto === 'mascotte' ? (mascotte ? '<img class="pb-mascotte" src="' + esc(mascotte) + '" alt="" width="18" height="21" loading="lazy" decoding="async">' : '') : (PB[o.picto] || '');
      const reseaux = (Array.isArray(b.reseaux) ? b.reseaux : []).filter(x => x && x.lien);
      return (motif ? '<div class="pb-arcs" aria-hidden="true" style="-webkit-mask-image:url(' + esc(motif) + ');mask-image:url(' + esc(motif) + ')"></div>' : '')
        + '<div class="pb"><div class="pb-dedans">'
        + '<div class="pb-identite">' + (logo ? '<a class="pb-logo" href="' + esc(lienInterne('/', lang)) + '"><img src="' + esc(logo) + '" alt="' + esc(b.nom || '') + '" width="104" height="104" loading="lazy" decoding="async"></a>' : '')
        + '<p class="pb-nom">' + esc(b.nom || '') + (b.sousNom ? '<span>' + esc(b.sousNom).replace(/\b1er\b/, '1<sup>er</sup>') + '</span>' : '') + '</p></div>'
        + (reseaux.length ? '<div class="pb-social">' + (b.hashtag ? '<p class="pb-hashtag">' + esc(b.hashtag) + '</p>' : '') + '<ul class="pb-reseaux" aria-label="' + esc(b.reseauxTitre || '') + '">'
          + reseaux.map(x => '<li><a href="' + esc(urlSure(x.lien)) + '" target="_blank" rel="noopener" aria-label="' + esc(x.nom) + '"><img src="' + esc(iconeReseau(x.icone)) + '" alt="" width="22" height="22" loading="lazy" decoding="async"></a></li>').join('') + '</ul></div>' : '')
        + '<nav class="pb-outils" aria-label="' + esc(b.outilsTitre || '') + '">'
          + (b.outils || []).map(o => '<a class="pb-outil' + (o.ton ? ' pb-outil--' + esc(o.ton) : '') + '" href="' + esc(lienInterne(o.lien, lang)) + '"' + cible(o) + '>' + picto(o) + '<span>' + esc(o.libelle) + '</span>' + (o.externe ? PB.externe.replace('<svg ', '<svg class="pb-ext" ') : '') + '</a>').join('')
        + '</nav>'
        + '<nav class="pb-plan" aria-label="' + esc(b.planTitre || '') + '">' + b.plan.map(r => '<details class="pb-rub" style="--c:' + esc(r.couleur || '#FCF150') + '"' + (ouvert ? ' open' : '') + '><summary' + (ouvert ? ' tabindex="-1"' : '') + '>' + esc(r.titre) + PB.chevron + '</summary><ul>'
          + (r.liens || []).map(l => '<li>' + lien(l) + '</li>').join('') + '</ul></details>').join('') + '</nav>'
        + '<div class="pb-orga"><p>' + esc(b.evenement || '') + '</p><div>' + (b.orga || []).map(o => '<a href="' + esc(urlSure(o.lien)) + '" target="_blank" rel="noopener" aria-label="' + esc(o.alt) + '"><img src="' + esc(urlSure(o.src)) + '" alt="' + esc(o.alt) + '" width="' + (Number(o.largeur) || 60) + '" height="' + (Number(o.hauteur) || 40) + '" loading="lazy" decoding="async"></a>').join('') + '</div></div>'
        + '<nav class="pb-legal" aria-label="' + esc(b.legalTitre || '') + '"><ul>' + (b.legal || []).map(l => '<li>' + lien(l) + '</li>').join('') + '</ul></nav>'
        + (b.wapitix ? '<p class="pb-credit"><a href="' + esc(urlSure(b.wapitix)) + '" target="_blank" rel="noopener">' + esc(b.credit || '') + ' <b>WAPITIX</b></a></p>' : '')
        + '</div></div>';
    }
    



    _brancherBas() {
      this._lacherBas();
      const bas = this.querySelector('.pb'); if (!bas) return;
      const caler = () => {
        const e = etroit();
        bas.querySelectorAll('.pb-rub').forEach(d => { d.open = !e; const s = d.querySelector('summary'); if (s) { if (e) s.removeAttribute('tabindex'); else s.setAttribute('tabindex', '-1'); } });
      };
      try {
        this._mq = window.matchMedia ? window.matchMedia(PB_ETROIT) : null; this._surMq = caler;
        if (this._mq) { if (this._mq.addEventListener) this._mq.addEventListener('change', caler); else if (this._mq.addListener) this._mq.addListener(caler); }
      } catch (e) { this._mq = null; }
      bas.addEventListener('click', (ev) => {
        const s = ev.target.closest('summary'); if (s && !etroit()) { ev.preventDefault(); return; }
        const c = ev.target.closest('[data-pb-cookies]');
        if (c) { ev.preventDefault(); if (!ouvrirCookies()) window.location.href = lienInterne('/politique-de-confidentialite#cookies', this._lang); }
      });
      this._marquerIci();
      if (typeof IntersectionObserver === 'function') {
        this._obsBas = new IntersectionObserver((entrees) => { if (entrees.some(e => e.isIntersecting)) this._marquerIci(); });
        this._obsBas.observe(bas);
      }
      this._surHistoire = () => this._marquerIci();
      window.addEventListener('popstate', this._surHistoire);
    }
    _lacherBas() {
      if (this._mq && this._surMq) { try { if (this._mq.removeEventListener) this._mq.removeEventListener('change', this._surMq); else if (this._mq.removeListener) this._mq.removeListener(this._surMq); } catch (e) {   } }
      this._mq = null; this._surMq = null;
      if (this._obsBas) { this._obsBas.disconnect(); this._obsBas = null; }
      if (this._surHistoire) { window.removeEventListener('popstate', this._surHistoire); this._surHistoire = null; }
    }
    _marquerIci() {
      const liens = this.querySelectorAll('.pb a[data-pb-ici]'); if (!liens.length) return;
      const norme = (p) => { let x = p; try { x = decodeURI(p); } catch (e) {   } return x.replace(/\/+$/, '') || '/'; };
      const loc = window.location; const ici = norme(loc.pathname); const memes = [];
      liens.forEach(a => {
        a.removeAttribute('aria-current');
        let u = null; try { u = new URL(a.getAttribute('href'), loc.origin); } catch (e) { return; }
        if (u.origin === loc.origin && norme(u.pathname) === ici) memes.push({ a, requete: u.search });
      });
      const exacts = memes.filter(m => m.requete === loc.search);
      (exacts.length ? exacts : memes.filter(m => !m.requete)).forEach(m => m.a.setAttribute('aria-current', 'page'));
    }

     
    _reveler() {
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._filet) clearTimeout(this._filet);
      const tout = () => this.querySelectorAll('.pd-img:not(.pd-vu)').forEach(i => i.classList.add('pd-vu'));
      this._filet = setTimeout(tout, 1500);
      if (typeof IntersectionObserver !== 'function') { tout(); return; }
      this._obs = new IntersectionObserver((entrees) => {
        entrees.forEach(e => { if (!e.isIntersecting) return; e.target.querySelectorAll('.pd-img').forEach((img, i) => setTimeout(() => img.classList.add('pd-vu'), i * 60)); this._obs && this._obs.unobserve(e.target); });
      }, { threshold: 0.1 });
      this.querySelectorAll('.pd-logos').forEach(b => this._obs.observe(b));
    }
     
    _veiller() {
      if (this._veille || typeof MutationObserver !== 'function') return;
      this._veille = new MutationObserver(() => { if (this.isConnected && !this.childElementCount) { this._cle = null; this._render(); } });
      this._veille.observe(this, { childList: true });
    }

     
    _brancher(idp) {
      const form = this.querySelector('form'); if (!form) return;
      const prenom = form.querySelector('[name=prenom]'), email = form.querySelector('[name=email]');
      const verifier = (champ, quoi) => {
        const bloc = champ.closest('.pd-champ'); const msg = bloc.querySelector('.pd-msg'); const v = champ.value.trim();
        let erreur = '';
        if (quoi === 'prenom' && !v) erreur = this._t.prenomVide;
        if (quoi === 'email') { if (!v) erreur = this._t.emailVide; else if (!EMAIL.test(v)) erreur = this._t.emailFaux; }
        bloc.classList.toggle('pd-erreur', !!erreur); msg.textContent = erreur; champ.setAttribute('aria-invalid', erreur ? 'true' : 'false');
        return !erreur;
      };
      const consent = form.querySelector('.pd-consent'); const caseC = consent && consent.querySelector('[name=consentement]');
      const reveler = () => { if (consent && !consent.classList.contains('pd-on') && email.value.trim()) consent.classList.add('pd-on'); };
      email.addEventListener('input', reveler); email.addEventListener('focus', reveler);
      if (caseC) caseC.addEventListener('change', () => { if (caseC.checked) { consent.classList.remove('pd-erreur'); consent.querySelector('.pd-msg').textContent = ''; } });
      const verifierConsent = () => { if (!consent) return true; consent.classList.add('pd-on'); const ok = !!(caseC && caseC.checked); consent.classList.toggle('pd-erreur', !ok); consent.querySelector('.pd-msg').textContent = ok ? '' : this._t.consentVide; return ok; };
      prenom.addEventListener('blur', () => verifier(prenom, 'prenom'));
      email.addEventListener('blur', () => verifier(email, 'email'));
      prenom.addEventListener('input', () => { if (prenom.closest('.pd-champ').classList.contains('pd-erreur')) verifier(prenom, 'prenom'); });
      email.addEventListener('input', () => { if (email.closest('.pd-champ').classList.contains('pd-erreur')) verifier(email, 'email'); });
      form.querySelector('.pd-global-btn').addEventListener('click', () => { this._etat('repos'); });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this._etatNews === 'envoi') return;
        const okP = verifier(prenom, 'prenom'), okE = verifier(email, 'email'), okC = verifierConsent();
        if (!okP) { prenom.focus(); return; }
        if (!okE) { email.focus(); return; }
        if (!okC) { caseC && caseC.focus(); return; }
        const langue = (form.querySelector('[name=langue]:checked') || {}).value === 'EN' ? 'EN' : 'FR';
        const detail = { prenom: prenom.value.trim().slice(0, 60), email: email.value.trim().slice(0, 120), langue, consentement: true, dureeMs: Date.now() - this._naissance, piege: form.querySelector('[name=site]').value || '' };
        this._etat('envoi');
        this._emettre(detail);
      });
    }
    _emettre(detail) {
      this._attente = detail;
      if (this._minuteur) clearTimeout(this._minuteur);
      this.dispatchEvent(new CustomEvent('pied-newsletter', { detail, bubbles: true, composed: true }));
      


      this._minuteur = setTimeout(() => { if (this._etatNews === 'envoi') this._etat('erreur', this._t.erreur); }, ATTENTE_REPONSE_MS);
    }
    _reponse(val) {
      if (!val) return;
      if (val === 'envoi') { this._etat('envoi'); return; }
      if (this._minuteur) { clearTimeout(this._minuteur); this._minuteur = null; }
      if (val === 'ok') { this._attente = null; this._etat('merci'); return; }
      const code = val.replace(/^erreur:?/, '');
      this._etat('erreur', code === 'deja' ? this._t.erreurDeja : this._t.erreur);
    }
    







    _temoin() {
      const detail = { octet: 0, transfert: 0, navigateur: navigateurCourt() };
      try {
        const nav = (performance.getEntriesByType('navigation') || [])[0];
        if (nav) { detail.octet = Math.round(nav.responseStart || 0); detail.transfert = nav.transferSize || 0; }
      } catch (e) {   }
      this.dispatchEvent(new CustomEvent('navigation-temoin', { detail, bubbles: true, composed: true }));
    }
    _etat(etat, message) {
      this._etatNews = etat;
      const news = this.querySelector('.pd-news'); if (!news) return;
      const btn = news.querySelector('.pd-btn'), txt = news.querySelector('.pd-btn-txt'), global = news.querySelector('.pd-global');
      if (etat === 'envoi') { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); txt.innerHTML = '<span class="pd-spin" aria-hidden="true"></span> ' + esc(this._t.envoi); global.classList.remove('pd-on'); return; }
      btn.disabled = false; btn.removeAttribute('aria-busy'); txt.textContent = (this._reglages && this._reglages.boutonLibelle) || this._t.envoyer;
      if (etat === 'merci') { news.classList.add('pd-fini'); news.querySelector('.pd-merci').classList.add('pd-on'); try { news.querySelector('.pd-merci').scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {   } return; }
      if (etat === 'erreur') { global.querySelector('.pd-global-txt').textContent = message || this._t.erreur; global.classList.add('pd-on'); return; }
      global.classList.remove('pd-on');
    }
  }
  window.customElements.define('rdr-pied-haut', PiedHaut);
})();
})();
;(function(){
(function () {
  'use strict';

  var STYLE_ID = 'rnf-styles';

  var CSS = [
    '.rnf-portal{--navy:#0A1A35;--navy-2:#123A5C;--amber:#FCF150;--teal:#5DBFC0;--teal-deep:#00676E;',
    '--ink:#16233A;--ink-2:#45536E;--ink-3:#7B8AA0;--line:#E1E6EE;',
    "--dsp:'Varien','Archivo Black','Archivo',Impact,system-ui,sans-serif;",
    "--body:'Montserrat',system-ui,-apple-system,sans-serif;",
    'font-family:var(--body)}',
    '.rnf-portal *{box-sizing:border-box}',

    















    '.rnf-cloche{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:95;',
    'width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.14);',
    'background:var(--navy);color:#fff;display:grid;place-items:center;cursor:pointer;padding:0;',
    'box-shadow:0 8px 24px rgba(10,26,53,.42);transition:transform .18s cubic-bezier(.2,.7,.2,1),background .18s}',
    '@media (hover:hover) and (pointer:fine){.rnf-cloche:hover{transform:translateY(-2px);background:var(--navy-2)}}',
    

    '@keyframes rnf-cl-in{from{opacity:0;transform:scale(.6) translateY(8px)}to{opacity:1;transform:none}}',
    '.rnf-cloche{animation:rnf-cl-in .28s cubic-bezier(.2,.7,.2,1) both}',
    '@media (prefers-reduced-motion:reduce){.rnf-cloche{animation:none}}',
    '.rnf-cloche:focus-visible{outline:2px solid var(--amber);outline-offset:3px}',
    '.rnf-cloche svg{width:20px;height:20px;color:var(--amber)}',

    

    '.rnf-compte{position:absolute;top:-3px;right:-3px;min-width:19px;height:19px;padding:0 5px;',
    'border-radius:999px;background:var(--amber);color:#0A1228;display:grid;place-items:center;',
    'font-family:var(--dsp);font-size:11px;font-weight:800;line-height:1;box-shadow:0 2px 8px rgba(0,0,0,.4)}',

     
    '.rnf-volet{position:fixed;right:14px;bottom:calc(70px + env(safe-area-inset-bottom,0px));z-index:97;',
    'width:min(360px,calc(100vw - 28px));max-height:min(70vh,520px);display:flex;flex-direction:column;',
    'background:#fff;border:1px solid var(--line);border-radius:16px 5px 14px 5px;',
    'box-shadow:0 18px 46px rgba(10,26,53,.3);overflow:hidden;',
    'transform:translateY(10px) scale(.98);opacity:0;transition:transform .22s cubic-bezier(.2,.7,.2,1),opacity .22s}',
    '.rnf-volet.in{transform:none;opacity:1}',
    

    '.rnf-volet-bar{height:4px;background:linear-gradient(90deg,var(--amber),var(--teal));flex:none}',
    '.rnf-volet-tete{display:flex;align-items:center;justify-content:space-between;gap:10px;',
    'padding:12px 14px 10px;border-bottom:1px solid var(--line)}',
    '.rnf-volet-kick{margin:0 0 1px;font-family:var(--body);font-size:9.5px;font-weight:800;',
    'letter-spacing:.16em;text-transform:uppercase;color:var(--teal-deep)}',
    '.rnf-volet-titre{margin:0;font-family:var(--dsp);font-style:italic;font-size:15px;',
    'text-transform:uppercase;color:var(--ink)}',
    '.rnf-volet-tout{background:none;border:none;padding:4px 2px;cursor:pointer;font-family:var(--body);',
    'font-size:11px;font-weight:700;color:var(--teal-deep);text-decoration:underline;text-underline-offset:3px}',
    '@media (hover:hover) and (pointer:fine){.rnf-volet-tout:hover{color:var(--navy)}}',
    





    '.rnf-liste{list-style:none;margin:0;padding:6px;overflow-y:auto;overflow-x:hidden;display:grid;grid-template-columns:minmax(0,1fr);gap:5px}',
    '.rnf-li{min-width:0;display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:11px 3px 9px 3px;',
    'background:#F6F8FB;border:1px solid var(--line)}',

    

    '.rnf-li[data-neuf]{border-left:3px solid var(--amber);background:#FFFDF2}',

     
    '.rnf-li[data-niv="marque"]{background:var(--navy);border-color:rgba(255,255,255,.1);',
    'border-left:3px solid var(--acc,var(--amber))}',
    '.rnf-li[data-niv="marque"] .rnf-li-t{color:#fff}',
    '.rnf-li[data-niv="marque"] .rnf-li-s{color:rgba(255,255,255,.62)}',
    '.rnf-li[data-niv="marque"] .rnf-li-art{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.14)}',
    '.rnf-li[data-niv="marque"] .rnf-li-vu{border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.6)}',
    '@media (hover:hover) and (pointer:fine){.rnf-li[data-niv="marque"] .rnf-li-vu:hover{background:#fff;border-color:#fff;color:var(--navy)}}',

     
    '.rnf-li[data-niv="eclat"]{background:linear-gradient(135deg,#12305A,var(--navy) 62%);',
    'border:1px solid rgba(252,241,80,.34);border-left:3px solid var(--amber);',
    'padding:12px 11px;box-shadow:inset 0 1px 0 rgba(255,255,255,.09)}',
    '.rnf-li[data-niv="eclat"] .rnf-li-t{color:#fff;font-size:13.5px}',
    '.rnf-li[data-niv="eclat"] .rnf-li-s{color:var(--amber);font-weight:700}',
    

    '.rnf-li[data-niv="eclat"] .rnf-li-art{width:48px;height:48px;background:none;border:0;',
    'filter:drop-shadow(0 0 12px rgba(252,241,80,.45))}',
    '.rnf-li[data-niv="eclat"] .rnf-li-art .rnf-pose{width:100%;height:100%}',
    '.rnf-li[data-niv="eclat"] .rnf-li-vu{border-color:rgba(255,255,255,.22);color:rgba(255,255,255,.66)}',
    '@media (hover:hover) and (pointer:fine){.rnf-li[data-niv="eclat"] .rnf-li-vu:hover{background:var(--amber);border-color:var(--amber);color:var(--navy)}}',

    

    '.rnf-li[data-niv="marque"][data-neuf]::after,.rnf-li[data-niv="eclat"][data-neuf]::after{',
    'content:"";position:absolute;top:9px;right:9px;width:6px;height:6px;border-radius:50%;',
    'background:var(--amber);box-shadow:0 0 8px rgba(252,241,80,.9)}',
    '.rnf-li{position:relative}',
    

    '.rnf-li-art{flex:none;width:36px;height:36px;border-radius:12px 3px 10px 3px;background:var(--navy);',
    'display:grid;place-items:center;overflow:hidden;border:1px solid rgba(255,255,255,.08)}',
    '.rnf-li-art .rnf-pose{width:88%;height:88%;object-fit:contain}',
    '.rnf-li-art img{width:100%;height:100%;object-fit:contain}',
    '.rnf-li-art svg{width:16px;height:16px;color:var(--amber)}',
    '.rnf-li-txt{flex:1;min-width:0}',
     
    '.rnf-li-t{margin:0;font-family:var(--body);font-size:12.5px;font-weight:700;color:var(--ink);line-height:1.3;',
    'overflow:hidden;overflow-wrap:anywhere;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',
    '.rnf-li-s{margin:1px 0 0;font-family:var(--body);font-size:11px;color:var(--ink-2);line-height:1.35;',
    'overflow:hidden;overflow-wrap:anywhere;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',
    '.rnf-li-vu{flex:none;background:none;border:1px solid var(--line);border-radius:50%;width:26px;',
    'height:26px;display:grid;place-items:center;cursor:pointer;color:var(--ink-3);',
    'transition:background .15s,color .15s,border-color .15s}',
    '@media (hover:hover) and (pointer:fine){.rnf-li-vu:hover{background:var(--teal-deep);border-color:var(--teal-deep);color:#fff}}',
    '.rnf-li-vu svg{width:13px;height:13px}',

    







    '.rnf-li-hit{position:absolute;inset:0;z-index:1;background:none;border:0;padding:0;',
    'cursor:pointer;border-radius:inherit;-webkit-appearance:none;appearance:none}',
    '.rnf-li-hit:focus-visible{outline:2px solid var(--teal-deep);outline-offset:2px}',
    '.rnf-li[data-niv="marque"] .rnf-li-hit:focus-visible,',
    '.rnf-li[data-niv="eclat"] .rnf-li-hit:focus-visible{outline-color:var(--amber)}',
    '.rnf-li-vu{position:relative;z-index:2}',
    

    '.rnf-li{transition:border-color .15s,box-shadow .15s}',
    '@media (hover:hover) and (pointer:fine){.rnf-li:hover{border-color:var(--teal-deep);box-shadow:0 2px 10px rgba(10,26,53,.10)}}',
    '@media (hover:hover) and (pointer:fine){.rnf-li[data-niv="marque"]:hover,.rnf-li[data-niv="eclat"]:hover{',
    'border-color:rgba(252,241,80,.5);box-shadow:0 3px 14px rgba(0,0,0,.28)}}',
    '@media (prefers-reduced-motion:reduce){.rnf-li{transition:none}}',
    '.rnf-volet-vide{padding:26px 18px;text-align:center;font-family:var(--body);font-size:12px;color:var(--ink-3)}',

    







    '.rnf-pile{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:96;',
    'width:min(360px,calc(100vw - 28px));display:flex;flex-direction:column-reverse;gap:10px;pointer-events:none}',
    '.rnf-portal[data-cloche] .rnf-pile{bottom:calc(70px + env(safe-area-inset-bottom,0px))}',
     
    '.rnf-portal[data-volet] .rnf-pile{opacity:0;visibility:hidden;pointer-events:none}',
    '.rnf-pile .rnf-toast{position:relative;right:auto;bottom:auto;width:100%;pointer-events:auto}',
    '.rnf-pile .rnf-toast.sort{opacity:0;transform:translateX(40px);transition:opacity .22s,transform .22s,height .28s ease .12s}',

    













    '.rnf-jauge{height:3px;background:rgba(10,26,53,.1);overflow:hidden}',
    '.rnf-jauge i{display:block;height:100%;width:100%;transform-origin:left center;',
    'background:linear-gradient(90deg,var(--amber),var(--teal));transform:scaleX(1)}',
    





    '.rnf-toast[data-file] .rnf-jauge i{transition:transform linear;transform:scaleX(0)}',
    '@media (prefers-reduced-motion:reduce){.rnf-jauge{display:none}}',
    '@media (prefers-reduced-motion:reduce){.rnf-cloche,.rnf-volet{transition:none}}',

     
    '.rnf-toast{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:96;',
    'width:min(360px,calc(100vw - 28px));background:#fff;border:1px solid var(--line);',
    'border-radius:16px 5px 14px 5px;box-shadow:0 10px 34px rgba(10,26,53,.22);overflow:hidden;',
    'transform:translateY(12px);opacity:0;transition:transform .35s cubic-bezier(.2,.7,.2,1),opacity .35s}',
    '.rnf-toast.in{transform:none;opacity:1}',
    '.rnf-bar{height:4px;background:linear-gradient(90deg,var(--amber),var(--teal))}',
    '.rnf-body{display:flex;align-items:center;gap:13px;padding:13px 40px 14px 14px;cursor:pointer}',
    '.rnf-art{flex:0 0 auto;width:64px;height:64px;border-radius:12px 4px 12px 4px;background:linear-gradient(140deg,var(--navy),var(--navy-2));display:grid;place-items:center;overflow:hidden}',
    '.rnf-art img{width:54px;height:54px;object-fit:contain}',
    '.rnf-art svg{width:32px;height:32px;color:var(--amber)}',
    '.rnf-txt{min-width:0}',
    '.rnf-kick{font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--teal-deep);margin:0 0 3px}',
    '.rnf-title{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:15.5px;line-height:1.15;color:var(--navy);margin:0}',
    '.rnf-sub{font-size:11.5px;color:var(--ink-3);font-weight:600;margin:3px 0 0;',
    'overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',
    '.rnf-title{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',
    '.rnf-x{position:absolute;top:8px;right:8px;width:26px;height:26px;border:none;background:transparent;color:var(--ink-3);cursor:pointer;display:grid;place-items:center;border-radius:8px 3px 8px 3px}',
     
    '@media (pointer:coarse){.rnf-li-vu::before,.rnf-volet-tout::before{content:"";position:absolute;inset:-9px}.rnf-volet-tout{position:relative}}',
    '@media (hover:hover) and (pointer:fine){.rnf-x:hover{background:#EEF2F6;color:var(--navy)}}',
    


    '@media (pointer:coarse){.rnf-x::after{content:"";position:absolute;top:50%;left:50%;width:44px;height:44px;transform:translate(-50%,-50%)}}',
    '.rnf-x svg{width:13px;height:13px}',

     
    '.rnf-ovl{position:fixed;inset:0;z-index:200;background:rgba(10,26,53,.55);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:grid;place-items:center;padding:20px;opacity:0;transition:opacity .25s}',
    '.rnf-ovl.in{opacity:1}',
    '.rnf-card{width:min(420px,100%);max-height:min(80vh,560px);overflow:auto;background:#fff;border-radius:18px 5px 16px 5px;box-shadow:0 24px 60px rgba(4,10,24,.45);padding:26px 24px 22px;text-align:center;position:relative;transform:translateY(10px);transition:transform .25s}',
    '.rnf-ovl.in .rnf-card{transform:none}',
    '.rnf-card .rnf-x{top:10px;right:10px}',
    '.rnf-bigart{width:110px;height:110px;margin:4px auto 12px;border-radius:18px 6px 16px 6px;background:linear-gradient(140deg,var(--navy),var(--navy-2));display:grid;place-items:center;overflow:hidden}',
    '.rnf-bigart img{width:92px;height:92px;object-fit:contain}',
    '.rnf-bigart svg{width:44px;height:44px;color:var(--amber)}',
    '.rnf-card .rnf-kick{font-size:11px}',
    '.rnf-card h3{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:22px;color:var(--navy);margin:2px 0 8px;line-height:1.1}',
    '.rnf-msg{font-size:14px;line-height:1.55;color:var(--ink-2);margin:0 0 4px}',
    '.rnf-cond{font-size:11.5px;font-weight:700;letter-spacing:.04em;color:var(--ink-3);margin:0 0 14px}',
    '.rnf-list{list-style:none;margin:0 0 14px;padding:0;display:flex;flex-direction:column;gap:10px;text-align:left}',
    '.rnf-list li{display:flex;align-items:center;gap:11px;border:1px solid var(--line);border-radius:12px 4px 12px 4px;padding:9px 12px}',
    '.rnf-list .rnf-art{width:40px;height:40px}.rnf-list .rnf-art img{width:34px;height:34px}.rnf-list .rnf-art svg{width:20px;height:20px}',
    '.rnf-list b{font-family:var(--dsp);font-style:italic;font-weight:800;text-transform:uppercase;font-size:13.5px;color:var(--navy);display:block}',
    '.rnf-list span{font-size:11px;color:var(--ink-3);font-weight:600}',
    '.rnf-cta{display:inline-flex;align-items:center;gap:8px;font-family:var(--body);font-size:12px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;background:var(--navy);color:#fff;border:none;border-radius:12px 4px 12px 4px;padding:13px 22px;cursor:pointer;box-shadow:0 6px 18px rgba(10,26,53,.25)}',
    '@media (hover:hover) and (pointer:fine){.rnf-cta:hover{background:var(--navy-2)}}',
    '.rnf-cta svg{width:14px;height:14px;color:var(--amber)}',

    









    '.rnf-toast[data-badge]{background:linear-gradient(135deg,#12305A,var(--navy) 62%);border-color:rgba(252,241,80,.34);',
    'box-shadow:0 14px 40px rgba(4,10,24,.55);transform:translateX(46px) scale(.96);',
    'transition:transform .45s cubic-bezier(.2,.9,.3,1.15),opacity .3s}',
    '.rnf-toast[data-badge].in{transform:none}',
    '.rnf-toast[data-badge] .rnf-body{position:relative;overflow:hidden}',
    '.rnf-toast[data-badge] .rnf-art{position:relative;overflow:visible;width:68px;height:68px;background:rgba(255,255,255,.06);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}',
    '.rnf-toast[data-badge] .rnf-art img{position:relative;z-index:1;width:58px;height:58px}',
    '.rnf-toast[data-badge] .rnf-art svg{position:relative;z-index:1;width:34px;height:34px}',
    '.rnf-toast[data-badge] .rnf-art::before{content:"";position:absolute;inset:-6px;border-radius:16px 6px 16px 6px;border:2px solid var(--amber);opacity:0}',
    '.rnf-toast[data-badge] .rnf-kick{color:var(--amber)}',
    '.rnf-toast[data-badge] .rnf-title{color:#fff;font-size:17px}',
    '.rnf-toast[data-badge] .rnf-sub{color:rgba(238,242,248,.68)}',
    '.rnf-toast[data-badge] .rnf-x{color:rgba(255,255,255,.6)}',
    '@media (hover:hover) and (pointer:fine){.rnf-toast[data-badge] .rnf-x:hover{background:rgba(255,255,255,.1);color:#fff}}',
    '.rnf-toast[data-badge] .rnf-jauge{background:rgba(255,255,255,.1)}',
    '.rnf-toast[data-badge] .rnf-body::after{content:"";position:absolute;inset:0;pointer-events:none;',
    'background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.14) 50%,transparent 70%);transform:translateX(-120%)}',
    '@keyframes rnf-art-pop{0%{transform:scale(.35) rotate(-12deg)}55%{transform:scale(1.14) rotate(4deg)}100%{transform:none}}',
    '@keyframes rnf-halo{0%{opacity:.9;transform:scale(.9)}100%{opacity:0;transform:scale(1.35)}}',
    '@keyframes rnf-reflet{from{transform:translateX(-120%)}to{transform:translateX(120%)}}',
    '.rnf-toast[data-badge].in .rnf-art{animation:rnf-art-pop .6s .12s cubic-bezier(.2,.9,.3,1.3) both}',
    '.rnf-toast[data-badge].in .rnf-art::before{animation:rnf-halo 1.1s .35s ease-out 2}',
    '.rnf-toast[data-badge].in .rnf-body::after{animation:rnf-reflet .9s .55s ease-in-out}',
    '.rnf-confettis{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:94}',
    '.rnf-date{font-size:11.5px;color:var(--ink-3);margin:-8px 0 14px}',
     
    '.rnf-ovl[data-badge]{background:rgba(5,18,43,.72);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}',
    '.rnf-card[data-badge]{background:linear-gradient(145deg,#0A1A35 0%,#0a1a35 100%);border:1px solid rgba(93,191,192,.25);',
    'border-radius:24px 3px 18px 3px;padding:36px 28px 28px;box-shadow:0 24px 60px rgba(0,0,0,.5);max-height:min(92vh,640px)}',
    '.rnf-card[data-badge] .rnf-x{top:12px;right:12px;width:36px;height:36px;border:1px solid rgba(255,255,255,.08);border-radius:50%;color:rgba(255,255,255,.48)}',
    '@media (hover:hover) and (pointer:fine){.rnf-card[data-badge] .rnf-x:hover{background:transparent;color:#fff;border-color:var(--teal)}}',
    '.rnf-bigwrap{position:relative;width:190px;height:190px;margin:0 auto 20px;display:grid;place-items:center}',
    '.rnf-bigwrap::before{content:"";position:absolute;inset:-24px;border-radius:50%;background:radial-gradient(closest-side,rgba(93,191,192,.45),transparent 70%);animation:rnf-halo-pulse 2.4s ease-in-out infinite}',
    '@keyframes rnf-halo-pulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}',
    '.rnf-bigwrap img{position:relative;z-index:1;width:150px;height:150px;object-fit:contain}',
    '.rnf-bigwrap svg{position:relative;z-index:1;width:84px;height:84px;color:var(--amber)}',
    '.rnf-card[data-badge] h3{color:#fff;font-size:clamp(24px,4vw,30px);letter-spacing:.02em;margin:0 0 8px}',
    '.rnf-card[data-badge] .rnf-date{font-size:12px;font-weight:600;color:var(--teal);text-transform:uppercase;letter-spacing:.05em;margin:0 0 20px}',
    '.rnf-card[data-badge] .rnf-msg{font-size:15px;line-height:1.55;color:rgba(255,255,255,.72);margin:0 0 16px}',
    '.rnf-card[data-badge] .rnf-cond{display:inline-block;font-size:11.5px;font-weight:700;letter-spacing:.03em;color:rgba(255,255,255,.66);',
    'border:1px solid rgba(255,255,255,.12);border-radius:10px 3px 10px 3px;padding:7px 12px;margin:0 0 22px}',
    '.rnf-card[data-badge] .rnf-cta{background:var(--amber);color:var(--navy);box-shadow:0 6px 18px rgba(252,241,80,.18)}',
    '@media (hover:hover) and (pointer:fine){.rnf-card[data-badge] .rnf-cta:hover{background:#fff}}',
    '.rnf-card[data-badge] .rnf-cta svg{color:var(--navy)}',
    '@media (max-width:420px){.rnf-bigwrap{width:150px;height:150px}.rnf-bigwrap img{width:120px;height:120px}}',
    '@media (prefers-reduced-motion:reduce){.rnf-bigwrap::before{animation:none}}',
    '@media (prefers-reduced-motion:reduce){.rnf-toast[data-badge].in .rnf-art,.rnf-toast[data-badge].in .rnf-art::before,.rnf-toast[data-badge].in .rnf-body::after{animation:none}}',

    '@media(prefers-reduced-motion:reduce){.rnf-portal *{transition:none!important}}'
  ].join('');

  var IC = {
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    go: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    cloche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    

    actu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z"/></svg>',
    voile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19h18"/><path d="M12 3v13"/><path d="M12 5 5 16h7z"/><path d="M14 8l5 8h-5z"/></svg>',
    jeu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>',
     
    lettre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
  };

  











  





















  function niveauDe(n) {
    var t = (n && n.type) || 'badge';
    if (t === 'rang') return 'eclat';
    if (t === 'badge' || t === 'mon-skipper-rang') return 'marque';
    return 'courant';
  }

  













  




  








  var LANGUE = 'fr';
  var EN = {
    'Nouveau palier': 'New level', 'Badge débloqué': 'Badge unlocked', 'Ton skipper': 'Your skipper',
    'Tes actus': 'Your news', 'À jouer': 'Play now', 'Espace Rhum': 'Espace Rhum',
    'Voir mes badges dans mon Espace': 'See my badges in My Espace Rhum', 'Lire l’article': 'Read the article',
    'Voir dans mon Espace Rhum': 'See in My Espace Rhum', 'Voir mes actus': 'See my news',
    'Voir mon rang': 'See my level', 'J’y vais': 'Let’s go',
    'Atteint le ': 'Reached on ', 'Débloqué le ': 'Unlocked on ',
    'Mes notifications': 'My notifications', 'Tout marquer vu': 'Mark all as seen', 'Retirer de la liste': 'Remove from the list',
    'Rien pour le moment.': 'Nothing for now.', 'Marquer comme vue': 'Mark as seen', 'Voir : ': 'See: ',
    'Badge : ': 'Badge: ', 'Nouveauté': 'New', 'Débloqué dans ton Espace Rhum': 'Unlocked in My Espace Rhum',
    'Voir le détail': 'See details', 'Badge débloqué !': 'Badge unlocked!',
    ' — clique pour découvrir': ', click to discover', ' nouveautés': ' new items',
    'Clique pour les découvrir': 'Click to discover them', 'Fermer la notification': 'Close notification',
    'Pour l’obtenir : ': 'How to get it: ', 'Bravo !': 'Well done!', 'Fermer': 'Close'
  };
  function T(fr) { return LANGUE === 'en' && EN[fr] !== undefined ? EN[fr] : fr; }
  function nonLues(n) {
    if (LANGUE === 'en') return n + ' unread notification' + (n > 1 ? 's' : '');
    return n + ' notification' + (n > 1 ? 's' : '') + ' non lue' + (n > 1 ? 's' : '');
  }

  function kickerDe(n) {
    var t = (n && n.type) || 'badge';
    if (t === 'rang') return T('Nouveau palier');
    if (t === 'badge') return T('Badge débloqué');
    if (t === 'mon-skipper' || t === 'mon-skipper-rang') return T('Ton skipper');
    if (t === 'actus') return T('Tes actus');
    if (t === 'animation') return T('À jouer');
    return T('Espace Rhum');
  }

  function destinationDe(n) {
    var t = (n && n.type) || 'badge';
    if (t === 'rang') return 'rangs';
    if (t === 'badge') return 'badges';
    if (t === 'mon-skipper' || t === 'mon-skipper-rang') return 'skippers';
    if (t === 'actus') return 'actus';
    if (t === 'animation') {
      var r = String((n && n.refId) || '');
      if (r.indexOf('prono') === 0) return 'pronos';
      if (r.indexOf('roue') === 0) return 'roue';
    }
    return 'dashboard';
  }

   
   
   
  var BADGE_ICON_URLS = {
    'premier-pas':       'https://static.wixstatic.com/media/7bb303_7d9de58d59e8421eb068034880357a61~mv2.webp',
    'supporter-fidele':  'https://static.wixstatic.com/media/7bb303_3d2b438b77de43d7864ff0025b59841f~mv2.webp',
    'veteran':           'https://static.wixstatic.com/media/7bb303_47eccc5dead64860ad007ad76b6c0ed3~mv2.webp',
    'explorateur':       'https://static.wixstatic.com/media/7bb303_b7db7397017947b889656cea0d6c98be~mv2.webp',
    'journaliste':       'https://static.wixstatic.com/media/7bb303_2321af4b440345f7b9e952e9b1cbe593~mv2.webp',
    'analyste':          'https://static.wixstatic.com/media/7bb303_82bd1f4340834bf2988ce7399d5e137d~mv2.webp',
    'collectionneur':    'https://static.wixstatic.com/media/7bb303_6af7ea0876fa447ebe40349620711567~mv2.webp',
    'supporter':         'https://static.wixstatic.com/media/7bb303_b9b5a8e9dc61476f885624879bebebd2~mv2.webp',
    'photographe':       'https://static.wixstatic.com/media/7bb303_d4490cb89e9c4e74af530ef3d8fef28d~mv2.webp',
    'spectateur-depart': 'https://static.wixstatic.com/media/7bb303_a07aaedf6e8e404ba6032d3d315c4f08~mv2.webp',
    'cap-finisterre':    'https://static.wixstatic.com/media/7bb303_2aeddccd21864a38a76cb0cf653b9b5a~mv2.webp',
    'mi-parcours':       'https://static.wixstatic.com/media/7bb303_fac708ef78a04396b5a93b4be1cbab0f~mv2.webp',
    'premiere-arrivee':  'https://static.wixstatic.com/media/7bb303_9df0936e41f842339c0cf8b44ec4697b~mv2.webp',
    'noctambule':        'https://static.wixstatic.com/media/7bb303_8b1663cdfa52444897e42488cc8a32d2~mv2.webp',
    'matinal':           'https://static.wixstatic.com/media/7bb303_36e5b8f3dc8042b8987a2b613bae0542~mv2.webp',
    




    'fidele':            'https://static.wixstatic.com/media/df962b_ec370a13e64d4fc8bdf6193fd8b6e135~mv2.png',
    'profil-complet':    'https://static.wixstatic.com/media/df962b_252a12cbd3d8467bbe4c21905d730aed~mv2.png',
    'instagram':         'https://static.wixstatic.com/media/df962b_dda7012dccd14ff0b438a9d03af55442~mv2.png'
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  



  

  function artHtml(refId, type, pose) {
    var url = BADGE_ICON_URLS[refId];
    if (url) return '<img src="' + esc(url) + '" alt="" loading="lazy" decoding="async">';
    if (type === 'rang' && pose) {
      var id = String(pose).split('/media/')[1] || '';
      return '<img class="rnf-pose" src="' + esc(id ? pose + '/v1/fit/w_240,h_240,q_90,enc_auto/' + id : pose) + '" alt="" loading="lazy" decoding="async">';
    }
    if (type === 'actus') return IC.actu;
    if (type === 'mon-skipper' || type === 'mon-skipper-rang') return IC.voile;
    if (type === 'animation') return IC.jeu;
    if (type === 'badge' && refId === 'newsletter') return IC.lettre;
    return IC.star;
  }
  function estBadge(n) { return ((n && n.type) || 'badge') === 'badge'; }

  

  function estMoment(n) { return estBadge(n) || (n && n.type === 'rang'); }

   
  function libelleAction(items) {
    if (items.every(estBadge)) return T('Voir mes badges dans mon Espace');
    var t = (items[0] && items[0].type) || '';
    if (t === 'mon-skipper') return items[0].lien ? T('Lire l’article') : T('Voir dans mon Espace Rhum');
    if (t === 'actus') return T('Voir mes actus');
    if (t === 'rang') return T('Voir mon rang');
    if (t === 'animation') return T('J’y vais');
    return T('Voir dans mon Espace Rhum');
  }

  






  var COULEURS_CONFETTIS = ['#FCF150', '#FCF150', '#5DBFC0', '#FFFFFF', '#F39C3D', '#8FD9DA'];
  function lancerConfettis(portal, toast) {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
    } catch (e) {   }
    var cv = document.createElement('canvas');
    cv.className = 'rnf-confettis';
    cv.setAttribute('aria-hidden', 'true');
    portal.appendChild(cv);
    var cx = cv.getContext('2d');
    if (!cx) { cv.remove(); return null; }
    var d = Math.min(2, window.devicePixelRatio || 1);
    var L = window.innerWidth, H = window.innerHeight;
    cv.width = L * d; cv.height = H * d;
    cx.setTransform(d, 0, 0, d, 0, 0);
    var parts = [];
    var r = function (a, b) { return a + Math.random() * (b - a); };
    var gerbe = function (x, y, o) {
      for (var i = 0; i < o.n; i++) {
        var a = r(o.aMin, o.aMax) * Math.PI / 180, v = r(o.vMin, o.vMax), f = Math.random();
        parts.push({ x: x + r(-4, 4), y: y + r(-10, 10), vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          g: r(0.2, 0.32), frein: r(0.965, 0.985), rot: r(0, 6.28), vrot: r(-0.25, 0.25),
          flip: r(0, 6.28), vflip: r(0.12, 0.3), w: r(o.min, o.max), h: r(o.min, o.max) * r(1.2, 1.9),
          c: COULEURS_CONFETTIS[(Math.random() * COULEURS_CONFETTIS.length) | 0],
          forme: f < 0.6 ? 'rect' : (f < 0.85 ? 'rond' : 'etoile'), vie: 0, fin: r(80, 130) });
      }
    };
    var box = toast.getBoundingClientRect();
    var y = box.top + box.height / 2;
    gerbe(L + 4, y + 10, { n: 130, aMin: 196, aMax: 262, vMin: 9, vMax: 21, min: 6, max: 10 });
    gerbe(L + 4, y + 40, { n: 60, aMin: 200, aMax: 245, vMin: 6, vMax: 13, min: 5, max: 8 });
    var art = toast.querySelector('.rnf-art');
    if (art) {
      var ab = art.getBoundingClientRect();
      gerbe(ab.left + ab.width / 2, ab.top + ab.height / 2, { n: 24, aMin: 0, aMax: 360, vMin: 2, vMax: 6, min: 3, max: 5 });
    }
    var etoile = function (s) {
      cx.beginPath();
      for (var i = 0; i < 10; i++) {
        var rr = i % 2 ? s * 0.45 : s, an = i * Math.PI / 5 - Math.PI / 2;
        cx.lineTo(Math.cos(an) * rr, Math.sin(an) * rr);
      }
      cx.closePath(); cx.fill();
    };
    var image = function () {
      if (!cv.isConnected) return;
      cx.clearRect(0, 0, L, H);
      parts = parts.filter(function (p) { return p.vie < p.fin && p.y < H + 40; });
      parts.forEach(function (p) {
        p.vie++; p.vx *= p.frein; p.vy = p.vy * p.frein + p.g; p.x += p.vx; p.y += p.vy;
        p.rot += p.vrot; p.flip += p.vflip;
        cx.save(); cx.globalAlpha = Math.min(1, (p.fin - p.vie) / 25);
        cx.translate(p.x, p.y); cx.rotate(p.rot); cx.fillStyle = p.c;
        if (p.forme === 'rect') { cx.scale(1, Math.cos(p.flip)); cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
        else if (p.forme === 'rond') { cx.beginPath(); cx.arc(0, 0, p.w * 0.45, 0, 6.283); cx.fill(); }
        else etoile(p.w * 0.8);
        cx.restore();
      });
      if (parts.length) requestAnimationFrame(image);
      else cv.remove();
    };
    requestAnimationFrame(image);
    return cv;
  }

   
  function dateDeDeblocage(n) {
    if (!n || !n.createdAt) return '';
    var dt = new Date(n.createdAt);
    if (isNaN(dt.getTime())) return '';
    var prefixe = n.type === 'rang' ? T('Atteint le ') : T('Débloqué le ');
    try { return prefixe + dt.toLocaleDateString(LANGUE === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }); }
    catch (e) { return ''; }
  }

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID; s.textContent = CSS;
    document.head.appendChild(s);
  }

  class RdrNotify extends HTMLElement {
    connectedCallback() {
      if (this._wired) return;
      this._wired = true;
      ensureStyles();
      this._portal = document.createElement('div');
      this._portal.className = 'rnf-portal';
      document.body.appendChild(this._portal);
      





      var self = this;
      this._surDeblocage = function (e) {
        window.__rdrDeblocagesEnAttente = null;    
        self._emit('notify-refresh', { keys: (e && e.detail && e.detail.keys) || [] });
      };
      window.addEventListener('rdr-badges-debloques', this._surDeblocage);
      

      if (Array.isArray(window.__rdrDeblocagesEnAttente) && window.__rdrDeblocagesEnAttente.length) {
        var enAttente = window.__rdrDeblocagesEnAttente;
        window.__rdrDeblocagesEnAttente = null;
        setTimeout(function () { self._emit('notify-refresh', { keys: enAttente }); }, 0);
      }
      this._renderFromAttr();
    }
    disconnectedCallback() {
      if (this._surDeblocage) { window.removeEventListener('rdr-badges-debloques', this._surDeblocage); this._surDeblocage = null; }
      

      this._arreterCartes();
      if (this._echapVolet) { document.removeEventListener('keydown', this._echapVolet); this._echapVolet = null; }
      if (this._dehors) { document.removeEventListener('click', this._dehors, true); this._dehors = null; }
      if (this._portal && this._portal.parentNode) this._portal.parentNode.removeChild(this._portal);
      this._portal = null;
      this._wired = false;
    }
    





















    static get observedAttributes() { return ['payload']; }
    attributeChangedCallback() { if (this._wired) this._renderFromAttr(); }

    _data() {
      var raw = this.getAttribute('payload');
      if (!raw) return null;
      try {
        var d = JSON.parse(raw);
        return (d && Array.isArray(d.items) && d.items.length) ? d : null;
      } catch (e) { return null; }
    }

    















    _renderFromAttr() {
      var d = this._data();
      var html = (document.documentElement.getAttribute('lang') || '').toLowerCase();
      LANGUE = d && d.lang ? (d.lang === 'en' ? 'en' : 'fr') : (html.indexOf('en') === 0 ? 'en' : 'fr');
      this._tous = d ? d.items : [];

      


      var dejaVues = this._presentees();
      



      var invitationVue = this._invitationPresentee();
      var aPresenter = this._tous.filter(function (n) {
        if (n.vu) return false;
        if (dejaVues.indexOf(n.id) !== -1) return false;    
        if (!n.famille || n.famille === 'evenement') return true;
        if (n.famille === 'invitation' && !invitationVue) { invitationVue = true; return true; }
        return false;
      });

      




      var signature = aPresenter.map(function (n) { return n.id; }).join('|');
      if (signature && signature === this._signatureAffichee && this._portal.querySelector('.rnf-pile')) {
        var ancienne = this._portal.querySelector('.rnf-cloche');
        if (ancienne) ancienne.remove();
        this._renderCloche();
        return;
      }
      this._items = aPresenter;

      this._arreterCartes();
      this._portal.innerHTML = '';
      this._portal.removeAttribute('data-volet');
      




      if (!this._nbNeufs()) {
        this._portal.removeAttribute('data-cloche');
        return;
      }
      this._portal.setAttribute('data-cloche', '1');
      this._renderCloche();
      if (this._items.length) this._renderCartes();
    }

    _nbNeufs() {
      return (this._tous || []).filter(function (n) { return !n.vu; }).length;
    }

    _renderCloche() {
      var self = this;
      var n = this._nbNeufs();
      var b = document.createElement('button');
      b.className = 'rnf-cloche';
      b.type = 'button';
      b.setAttribute('data-rnf-cloche', '');
      b.setAttribute('aria-label', n ? nonLues(n) : T('Mes notifications'));
      b.innerHTML = IC.cloche + (n ? '<span class="rnf-compte">' + (n > 99 ? '99+' : n) + '</span>' : '');
      b.onclick = function () { self._ouvrirVolet(); };
      this._portal.appendChild(b);
    }

    







    












    _fermerVolet() {
      var self = this;
      this._portal.querySelectorAll('.rnf-volet').forEach(function (v) { v.remove(); });
      if (this._portal.hasAttribute('data-volet')) {
        this._portal.removeAttribute('data-volet');
        (this._cartes || []).forEach(function (c) { if (c.poursuivre) c.poursuivre(); });
      }
      if (this._dehors) { document.removeEventListener('click', this._dehors, true); this._dehors = null; }
      if (this._echapVolet) { document.removeEventListener('keydown', this._echapVolet); this._echapVolet = null; }
      return self;
    }

    _ouvrirVolet() {
      var self = this;
      var vieux = this._portal.querySelector('.rnf-volet');
      if (vieux) { this._fermerVolet(); return; }    

      















      var ordonnees = (this._tous || []).slice().sort(function (a, b) {
        if (!a.vu !== !b.vu) return a.vu ? 1 : -1;
        return String(b.createdAt || '').localeCompare(String(a.createdAt || ''));
      });

      var lignes = ordonnees.map(function (n) {
        var art = artHtml(n.refId, n.type, n.pose);
        var titre = esc(n.titre || (n.label ? T('Badge : ') + n.label : T('Nouveauté')));
        var sous = esc(n.sous || (n.label ? T('Débloqué dans ton Espace Rhum') : ''));
        var niv = niveauDe(n);
        



        var acc = n.couleur ? ' style="--acc:' + esc(n.couleur) + '"' : '';
        return '<li class="rnf-li" data-niv="' + niv + '"' + acc +
          (n.vu ? '' : ' data-neuf') + ' data-id="' + esc(n.id) + '">' +
          '<button class="rnf-li-hit" data-rnf-go="' + esc(n.id) + '" ' +
            'aria-label="' + esc(T('Voir : ')) + titre + '"></button>' +
          '<span class="rnf-li-art">' + (art || IC.star) + '</span>' +
          '<div class="rnf-li-txt"><p class="rnf-li-t">' + titre + '</p>' +
          (sous ? '<p class="rnf-li-s">' + sous + '</p>' : '') + '</div>' +
          




          (n.vu
            ? '<button class="rnf-li-vu" data-rnf-retirer="' + esc(n.id) + '" aria-label="' + esc(T('Retirer de la liste')) + '">' + IC.check + '</button>'
            : '<button class="rnf-li-vu" data-rnf-vu="' + esc(n.id) + '" aria-label="' + esc(T('Marquer comme vue')) + '">' + IC.check + '</button>') +
          '</li>';
      }).join('');

      var box = document.createElement('div');
      box.className = 'rnf-volet';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', T('Mes notifications'));
      box.innerHTML =
        '<div class="rnf-volet-bar"></div>' +
        '<div class="rnf-volet-tete">' +
          '<div><p class="rnf-volet-kick">Espace Rhum</p>' +
          '<h2 class="rnf-volet-titre">' + esc(T('Mes notifications')) + '</h2></div>' +
          (this._nbNeufs() ? '<button class="rnf-volet-tout" data-rnf-tout>' + esc(T('Tout marquer vu')) + '</button>' : '') +
        '</div>' +
        (lignes ? '<ul class="rnf-liste">' + lignes + '</ul>'
                : '<p class="rnf-volet-vide">' + esc(T('Rien pour le moment.')) + '</p>');
      this._portal.appendChild(box);
      

      this._portal.setAttribute('data-volet', '');
      (this._cartes || []).forEach(function (c) { if (c.suspendre) c.suspendre(); });
      requestAnimationFrame(function () { box.classList.add('in'); });

      box.querySelectorAll('[data-rnf-vu]').forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();           
          var id = btn.getAttribute('data-rnf-vu');
          self._emit('notify-seen', { ids: [id] });
          self._marquerVu([id]);
        };
      });

      box.querySelectorAll('[data-rnf-retirer]').forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var id = btn.getAttribute('data-rnf-retirer');
          self._emit('notify-dismiss', { ids: [id] });
          self._tous = (self._tous || []).filter(function (n) { return n.id !== id; });
          var li = btn.closest('.rnf-li');
          if (li) li.remove();
          if (!box.querySelector('.rnf-li')) {
            var liste = box.querySelector('.rnf-liste');
            if (liste) liste.outerHTML = '<p class="rnf-volet-vide">' + esc(T('Rien pour le moment.')) + '</p>';
          }
        };
      });

      



      box.querySelectorAll('[data-rnf-go]').forEach(function (btn) {
        btn.onclick = function () {
          var id = btn.getAttribute('data-rnf-go');
          var n = (self._tous || []).filter(function (x) { return x.id === id; })[0];
          if (!n) return;
          


          if (estBadge(n) || n.type === 'rang') {
            self._fermerVolet();
            self._openPopup({ items: [n] });
            return;
          }
          if (!n.vu) { self._emit('notify-seen', { ids: [id] }); self._marquerVu([id]); }
          self._allerVers({ id: id, vers: destinationDe(n), type: n.type || '', refId: n.refId || '', lien: n.lien || '' });
          self._fermerVolet();
        };
      });
      var tout = box.querySelector('[data-rnf-tout]');
      if (tout) tout.onclick = function () {
        var ids = (self._tous || []).filter(function (n) { return !n.vu; })
          .map(function (n) { return n.id; });
        self._emit('notify-seen', { ids: ids });
        self._marquerVu(ids);
      };

      

      if (this._dehors) document.removeEventListener('click', this._dehors, true);
      this._dehors = function (e) {
        if (box.contains(e.target)) return;
        if (e.target.closest && e.target.closest('[data-rnf-cloche]')) return;
        self._fermerVolet();
      };
      setTimeout(function () { document.addEventListener('click', self._dehors, true); }, 0);

      


      if (this._echapVolet) document.removeEventListener('keydown', this._echapVolet);
      this._echapVolet = function (e) {
        if (e.key !== 'Escape') return;
        self._fermerVolet();
        var cl = self._portal.querySelector('.rnf-cloche');
        if (cl) cl.focus();
      };
      document.addEventListener('keydown', this._echapVolet);
    }

    

    _marquerVu(ids) {
      var vus = {};
      ids.forEach(function (i) { vus[i] = true; });
      (this._tous || []).forEach(function (n) { if (vus[n.id]) n.vu = true; });
      this._items = this._items.filter(function (n) { return !vus[n.id]; });
      var volet = this._portal.querySelector('.rnf-volet');
      var ouvert = !!volet;
      if (volet) volet.remove();
      var cl = this._portal.querySelector('.rnf-cloche');
      if (cl) cl.remove();
      


      if (!this._nbNeufs()) {
        this._portal.removeAttribute('data-cloche');
        return;
      }
      this._renderCloche();
      if (ouvert) this._ouvrirVolet();
    }

    _idsDe(items) { return (items || []).map(function (n) { return n.id; }); }

    







    _groupes(items) {
      

      var groupes = items.map(function (n) { return [n]; });
      var place = Math.max(1, Math.min(3, Math.floor(((window.innerHeight || 700) - 170) / 140)));
      return groupes.slice(0, place);
    }

    _arreterCartes() {
      (this._cartes || []).forEach(function (c) { clearTimeout(c.calme); clearTimeout(c.minuteur); clearTimeout(c.entree); clearTimeout(c.vue); });
      this._cartes = [];
    }

    _renderCartes() {
      var self = this;
      this._arreterCartes();
      this._signatureAffichee = this._idsDe(this._items).join('|');
      var pile = document.createElement('div');
      pile.className = 'rnf-pile';
      this._portal.appendChild(pile);
      

      this._groupes(this._items).forEach(function (items, rang) {
        var carte = { items: items };
        self._cartes.push(carte);
        carte.entree = setTimeout(function () {
          if (pile.isConnected) self._renderCarte(pile, carte);
        }, rang * 700);
      });
    }

    _renderCarte(pile, carte) {
      var self = this;
      var items = carte.items;
      var one = items.length === 1 ? items[0] : null;
      var badge = items.some(estMoment);
      var html =
        '<div class="rnf-toast" role="status" aria-live="polite"' + (badge ? ' data-badge' : '') + '>' +
          '<div class="rnf-bar"></div>' +
          '<div class="rnf-body" data-rnf-open tabindex="0" role="button" aria-label="' + esc(T('Voir le détail')) + '">' +
            '<span class="rnf-art">' + artHtml(one ? one.refId : (items[0] && items[0].refId),
              one ? one.type : (items[0] && items[0].type), one ? one.pose : (items[0] && items[0].pose)) + '</span>' +
            '<div class="rnf-txt">' +
              '<p class="rnf-kick">' + esc(kickerDe(one || items[0])) + '</p>' +
              







              (one && estBadge(one) && !one.titre && one.label
                ? '<p class="rnf-title">' + esc(one.label) + '</p>' +
                  '<p class="rnf-sub">' + esc(one.message || one.condition || '') + '</p>'
                : one
                ? '<p class="rnf-title">' + esc(one.titre || T('Badge débloqué !')) + '</p>' +
                  '<p class="rnf-sub">' + esc(one.sous || one.label || '') +
                  (one.titre ? '' : T(' — clique pour découvrir')) + '</p>'
                : '<p class="rnf-title">' + items.length + T(' nouveautés') + '</p>' +
                  '<p class="rnf-sub">' + T('Clique pour les découvrir') + '</p>') +
            '</div>' +
          '</div>' +
          '<button class="rnf-x" data-rnf-x aria-label="' + esc(T('Fermer la notification')) + '">' + IC.x + '</button>' +
          '<div class="rnf-jauge" aria-hidden="true"><i></i></div>' +
        '</div>';
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      var toast = tmp.firstChild;
      carte.el = toast;
      if (items.some(function (n) { return n.famille === 'invitation'; })) this._marquerInvitation();
      pile.appendChild(toast);
      requestAnimationFrame(function () { toast.classList.add('in'); });
      if (badge) {
        setTimeout(function () {
          if (toast.isConnected && self._portal) lancerConfettis(self._portal, toast);
        }, 260);
      }
      toast.querySelector('[data-rnf-x]').onclick = function (e) {
        e.stopPropagation();
        var ids = self._idsDe(items);
        self._emit('notify-dismiss', { ids: ids });
        




        self._marquerVu(ids);
        self._marquerPresentees(ids);
        self._retirerCarte(carte, true);
      };
      var open = toast.querySelector('[data-rnf-open]');
      open.onclick = function () { self._openPopup(carte); };
      open.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); self._openPopup(carte); } };
      this._armerRangement(carte);
    }

     
    _retirerCarte(carte, doux) {
      var self = this;
      clearTimeout(carte.calme); clearTimeout(carte.minuteur); clearTimeout(carte.entree); clearTimeout(carte.vue);
      this._cartes = (this._cartes || []).filter(function (c) { return c !== carte; });
      var partis = {};
      this._idsDe(carte.items).forEach(function (i) { partis[i] = true; });
      this._items = (this._items || []).filter(function (n) { return !partis[n.id]; });
      var el = carte.el;
      var apres = function () {
        if (el && el.parentNode) el.parentNode.removeChild(el);
        var pile = self._portal && self._portal.querySelector('.rnf-pile');
        if (pile && !pile.children.length && !(self._cartes || []).length) pile.remove();
        if (self._portal && self._nbNeufs() && !self._portal.querySelector('.rnf-cloche')) self._renderCloche();
      };
      if (!el || !el.isConnected || !doux) { apres(); return; }
      el.style.height = el.offsetHeight + 'px';
      void el.offsetHeight;
      el.classList.remove('in');
      el.classList.add('sort');
      el.style.height = '0px';
      setTimeout(apres, 420);
    }

    










    _armerRangement(carte) {
      var self = this;
      var toast = carte.el;
      var niv = niveauDe(carte.items[0] || {});
      var duree = niv === 'eclat' ? 16000 : (niv === 'marque' ? 12000 : 9000);
      var CALME = 3000;    

      var barre = toast.querySelector('.rnf-jauge i');
      var debut = 0, restant = duree, enPause = false;

      var partir = function () {
        if (!toast.isConnected) return;
        



        if (document.visibilityState === 'visible') self._marquerPresentees(self._idsDe(carte.items));
        self._retirerCarte(carte, true);
      };

      








      var VU_MS = 5000;
      var compterVue = function () {
        if (toast.isConnected && document.visibilityState === 'visible') self._marquerPresentees(self._idsDe(carte.items));
      };
      carte.vue = setTimeout(compterVue, VU_MS);

      var lancer = function () {
        if (!toast.isConnected || enPause) return;
        debut = Date.now();
        if (barre) {
          barre.style.transitionDuration = restant + 'ms';
          toast.setAttribute('data-file', '1');
        }
        carte.minuteur = setTimeout(partir, restant);
      };

      

      var pause = function () {
        if (enPause || !debut) return;
        enPause = true;
        clearTimeout(carte.minuteur);
        restant = Math.max(1200, restant - (Date.now() - debut));
        if (barre) {
          

          var vu = getComputedStyle(barre).transform;
          var m = vu && vu !== 'none' ? vu.match(/matrix\(([-\d.]+)/) : null;
          barre.style.transition = 'none';
          barre.style.transform = 'scaleX(' + (m ? m[1] : 1) + ')';
          toast.removeAttribute('data-file');
        }
      };
      var reprendre = function () {
        if (!enPause) return;
        enPause = false;
        if (barre) {
          


          void barre.offsetWidth;
          barre.style.transition = '';
          barre.style.transform = '';
        }
        lancer();
      };
      toast.addEventListener('mouseenter', pause);
      toast.addEventListener('mouseleave', reprendre);
      toast.addEventListener('focusin', pause);
      toast.addEventListener('focusout', reprendre);

      carte.calme = setTimeout(lancer, CALME);

      


      carte.suspendre = function () {
        clearTimeout(carte.calme); clearTimeout(carte.vue);
        if (debut) pause();
      };
      carte.poursuivre = function () {
        if (!toast.isConnected) return;
        if (enPause) reprendre();
        else if (!debut) carte.calme = setTimeout(lancer, CALME);
        carte.vue = setTimeout(compterVue, VU_MS);
      };
    }

    










    _presentees() {
      var ids = [];
      try { ids = JSON.parse(sessionStorage.getItem('rnfPresentees') || '[]') || []; }
      catch (e) { ids = []; }
      this._montrees().forEach(function (x) { if (ids.indexOf(x[0]) === -1) ids.push(x[0]); });
      return ids;
    }
    _montrees() {
      try {
        var t = JSON.parse(localStorage.getItem('rnfMontrees') || '[]');
        var limite = Date.now() - 60 * 24 * 3600 * 1000;
        return Array.isArray(t) ? t.filter(function (x) { return Array.isArray(x) && typeof x[0] === 'string' && x[1] > limite; }) : [];
      } catch (e) { return []; }
    }
    _marquerPresentees(ids) {
      ids = ids || [];
      try {
        var s = JSON.parse(sessionStorage.getItem('rnfPresentees') || '[]') || [];
        sessionStorage.setItem('rnfPresentees', JSON.stringify(s.concat(ids).slice(-60)));
      } catch (e) {   }
      try {
        var maintenant = Date.now();
        var t = this._montrees().filter(function (x) { return ids.indexOf(x[0]) === -1; });
        ids.forEach(function (id) { t.push([id, maintenant]); });
        localStorage.setItem('rnfMontrees', JSON.stringify(t.slice(-200)));
      } catch (e) {   }
    }
     
    _invitationPresentee() {
      try { return sessionStorage.getItem('rnfInvitation') === '1'; } catch (e) { return false; }
    }
    _marquerInvitation() {
      try { sessionStorage.setItem('rnfInvitation', '1'); } catch (e) {   }
    }

    _openPopup(carte) {
      var items = (carte && carte.items) || [];
      if (!items.length) return;
      var neufs = items.filter(function (n) { return !n.vu; }).map(function (n) { return n.id; });
      if (neufs.length) this._emit('notify-seen', { ids: neufs });
       
      this._marquerPresentees(this._idsDe(items));
      this._retirerCarte(carte, false);
      if (neufs.length) this._marquerVu(neufs);
      var one = items.length === 1 ? items[0] : null;
      var inner;
      







      var fenetreBadge = !!one && estMoment(one);
      if (fenetreBadge) {
        inner =
          '<div class="rnf-bigwrap">' + artHtml(one.refId, one.type, one.pose) + '</div>' +
          '<h3>' + esc(one.titre || one.label || '') + '</h3>' +
          (dateDeDeblocage(one) ? '<p class="rnf-date">' + esc(dateDeDeblocage(one)) + '</p>' : '') +
          (one.message ? '<p class="rnf-msg">' + esc(one.message) + '</p>' : '') +
          (one.type === 'rang' && one.sous ? '<p class="rnf-msg">' + esc(one.sous) + '</p>' : '') +
          (one.condition ? '<p class="rnf-cond">' + esc(T('Pour l’obtenir : ')) + esc(one.condition) + '</p>' : '');
      } else if (one) {
        

        inner =
          '<div class="rnf-bigart">' + artHtml(one.refId, one.type, one.pose) + '</div>' +
          '<p class="rnf-kick">' + esc(kickerDe(one)) + '</p>' +
          '<h3>' + esc(one.titre || one.label || '') + '</h3>' +
          (one.sous ? '<p class="rnf-msg">' + esc(one.sous) + '</p>' : '') +
          (one.message ? '<p class="rnf-msg">' + esc(one.message) + '</p>' : '') +
           
          (one.condition ? '<p class="rnf-cond">' + (estBadge(one) ? esc(T('Pour l’obtenir : ')) : '') + esc(one.condition) + '</p>' : '') +
          (estBadge(one) && dateDeDeblocage(one) ? '<p class="rnf-date">' + esc(dateDeDeblocage(one)) + '</p>' : '');
      } else {
        inner =
          '<p class="rnf-kick">' + esc(T('Bravo !')) + '</p>' +
          '<h3>' + items.length + esc(T(' nouveautés')) + '</h3>' +
          '<ul class="rnf-list">' + items.map(function (n) {
            return '<li><span class="rnf-art">' + artHtml(n.refId, n.type, n.pose) + '</span><div><b>' + esc(n.titre || n.label || '') + '</b>' +
              (n.sous || n.message ? '<span>' + esc(n.sous || n.message) + '</span>' : '') + '</div></li>';
          }).join('') + '</ul>';
      }
      var html =
        '<div class="rnf-ovl" data-rnf-ovl role="dialog" aria-modal="true" aria-label="' + esc(T('Badge débloqué')) + '"' + (fenetreBadge ? ' data-badge' : '') + '>' +
          '<div class="rnf-card"' + (fenetreBadge ? ' data-badge' : '') + '>' +
            '<button class="rnf-x" data-rnf-close aria-label="' + esc(T('Fermer')) + '">' + IC.x + '</button>' +
            inner +
            '<button class="rnf-cta" data-rnf-cta>' + esc(libelleAction(items)) + ' ' + IC.go + '</button>' +
          '</div>' +
        '</div>';
       
      this._fermerPopup();
      var det = document.createElement('div');
      det.innerHTML = html;
      while (det.firstChild) this._portal.appendChild(det.firstChild);
      var self = this;
      var ovl = this._portal.querySelector('[data-rnf-ovl]');
      requestAnimationFrame(function () { ovl.classList.add('in'); });
      var close = function () { self._fermerPopup(); };
      ovl.querySelector('[data-rnf-close]').onclick = close;
      ovl.addEventListener('click', function (e) { if (e.target === ovl) close(); });
      this._escHandler = function (e) { if (e.key === 'Escape') close(); };
      document.addEventListener('keydown', this._escHandler);
      ovl.querySelector('[data-rnf-cta]').onclick = function () {
        


        var tete = items[0] || {};
        self._allerVers({ id: tete.id || '', vers: destinationDe(tete),
          type: tete.type || '', refId: tete.refId || '', lien: tete.lien || '' });
        self._fermerPopup();
      };
      ovl.querySelector('[data-rnf-close]').focus();
    }

    


    _fermerPopup() {
      if (!this._portal) return;
      this._portal.querySelectorAll('.rnf-ovl').forEach(function (n) { n.remove(); });
      if (this._escHandler) { document.removeEventListener('keydown', this._escHandler); this._escHandler = null; }
      if (this._nbNeufs() && !this._portal.querySelector('.rnf-cloche')) this._renderCloche();
    }

    _emit(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { detail: detail, bubbles: true, composed: true }));
    }

    


    _allerVers(detail) {
       
      if (detail && /^\/(?!\/)/.test(String(detail.lien || ''))) {
        this._emit('notify-aller', detail);
        return;
      }
      if (document.querySelector('espace-rhum')) {
        window.dispatchEvent(new CustomEvent('rdr-espace-aller', { detail: detail }));
        return;
      }
      this._emit('notify-aller', detail);
    }
  }

  if (!customElements.get('rdr-notify')) customElements.define('rdr-notify', RdrNotify);
})();
})();
