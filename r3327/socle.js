/* rdr-elements socle | source route-du-rhum 50f7bc8 | rdr-menu-actus.js rdr-menu-cartes.js timer-clock-simple.js AlpinaClock.js rdr-pied-haut.js rdr-notify.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["socle"]="50f7bc8";performance.mark("rdr-elements:socle")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('rdr-menu-actus')) return;

  const TXT = {
    fr: { titre: 'Actualités', tout: 'Tout', actu: 'Actu', photo: 'Photo', video: 'Vidéo', audio: 'Audio',
          voirTout: 'Voir toutes les actualités',
          lire: 'Lire l\'article', regarder: 'Regarder', ecouter: 'Écouter', voirPhotos: 'Voir le reportage', nouveau: 'Nouveau',
          ilYa: (n, u) => 'il y a ' + n + ' ' + u, hier: 'hier', min: 'min', h: 'h', j: 'j', lecture: (n) => n + ' min',
          sousTitre: 'La dernière actu, et la dernière de chaque média', vide: 'Les prochaines actualités arrivent', rubriques: 'Les rubriques' },
    en: { titre: 'News', tout: 'All', actu: 'News', photo: 'Photo', video: 'Video', audio: 'Audio',
          voirTout: 'See all news',
          lire: 'Read the article', regarder: 'Watch', ecouter: 'Listen', voirPhotos: 'See the story', nouveau: 'New',
          ilYa: (n, u) => n + ' ' + u + ' ago', hier: 'yesterday', min: 'min', h: 'h', j: 'd', lecture: (n) => n + ' min read',
          sousTitre: 'The latest news, and the latest of each medium', vide: 'The next news is on its way', rubriques: 'Sections' }
  };
  





  const ROUTES = {
    fr: { hub: '/medias-actualites', actu: '/medias-actualites?cat=actualites', photo: '/medias-actualites?cat=image', video: '/medias-actualites?cat=video', audio: '/medias-actualites?cat=audio' },
    en: { hub: '/en/medias-actualites', actu: '/en/medias-actualites?cat=news', photo: '/en/medias-actualites?cat=image', video: '/en/medias-actualites?cat=video', audio: '/en/medias-actualites?cat=audio' }
  };
   
  const HUB = {
    actu: { c: '#0B6E6B', bg: '#DCF2EF', v: '#14A79E' },
    photo: { c: '#5747C9', bg: '#E9E6FB', v: '#5DBFC0' },
    video: { c: '#A14D00', bg: '#FBEAD6', v: '#F19F39' },
    audio: { c: '#0E5B84', bg: '#DCEBF7', v: '#8B86E0' },
    interview: { c: '#8A6C00', bg: '#FBF3CD', v: '#F5BE41' }
  };
  const ICO = {
    actu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h10M7 17h6"/></svg>',
    photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.5v13l11-6.5z"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 12v2M8 8v8M12 5v14M16 9v6M20 11v2"/></svg>',
    interview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    fleche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    horloge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
     
    bouton: '<svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg>'
  };
  const NOUVEAU_H = 48;             
  const FENETRE_MEDIA_J = 14;       
   
  const TAGS_TUS = /^(partenaire|partenaires|interview|actualit[eé]s?|news|d[eé]part|amrae|kit p[eé]dagogique)$/i;
  





  const ATTENTE_MAX_MS = 12000;

  const CSS = `
rdr-menu-actus{display:block;width:100%;height:100%;color:rgba(255,255,255,.94);font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;
  --ma-titre:'Varien','Archivo Black',Impact,sans-serif;--ma-jaune:#FCF150;--ma-t2:rgba(255,255,255,.7);--ma-t3:rgba(255,255,255,.48);--ma-filet:rgba(255,255,255,.12);--ma-panneau:#1B2237}
rdr-menu-actus *,rdr-menu-actus *::before,rdr-menu-actus *::after{box-sizing:border-box}
rdr-menu-actus img{display:block}
rdr-menu-actus button{font-family:inherit;cursor:pointer}
rdr-menu-actus .ma{display:grid;grid-template-rows:auto minmax(0,1fr) auto;height:100%;gap:14px;width:100%;max-width:var(--ma-largeur-max,1440px);margin:0 auto}
rdr-menu-actus .ma-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
rdr-menu-actus .ma-titre{margin:0;font-family:var(--ma-titre);font-style:italic;font-size:40px;line-height:1;text-transform:uppercase;color:#fff}
rdr-menu-actus .ma-sous{margin:6px 0 0;font-size:12px;color:var(--ma-t3)}
rdr-menu-actus .ma-sous b{color:var(--ma-t2);font-weight:600}
rdr-menu-actus .ma-pied{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:44px}
rdr-menu-actus .ma-pied-note{display:flex;align-items:center;font-size:12px;color:var(--ma-t3)}
rdr-menu-actus .ma-btn{display:inline-flex;align-items:center;justify-content:center;gap:15px;height:44px;padding:10px 20px;border:2px solid #fff;border-radius:10px 0 10px 0;background:transparent;color:#fff;font-weight:700;font-size:14px;line-height:1;text-decoration:none;transition:background .15s}
rdr-menu-actus .ma-btn svg{width:20px;height:20px;fill:#fff;flex:none}
rdr-menu-actus .ma-btn:hover{background:rgba(255,255,255,.1)}
rdr-menu-actus .ma-onglets{display:flex;gap:4px;padding:4px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid var(--ma-filet)}
rdr-menu-actus .ma-onglet{display:inline-flex;align-items:center;gap:8px;border:0;background:transparent;color:var(--ma-t2);padding:5px 14px 5px 5px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:background .15s,color .15s}
rdr-menu-actus .ma-onglet i{width:24px;height:24px;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;background:var(--bg);color:var(--c)}
rdr-menu-actus .ma-onglet i svg{width:13px;height:13px}
rdr-menu-actus .ma-onglet:hover{color:#0E111D;background:#fff}
rdr-menu-actus .ma-onglet:focus-visible{outline:2px solid #5DBFC0;outline-offset:2px}
rdr-menu-actus .ma-cat{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;line-height:1;white-space:nowrap;background:var(--bg);color:var(--c);padding:6px 9px;border-radius:6px}
rdr-menu-actus .ma-cat svg{width:12px;height:12px;flex:none}
rdr-menu-actus .ma-quand{font-size:11.5px;color:var(--ma-t3);white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
rdr-menu-actus .ma-quand b{color:var(--ma-jaune);font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:10.5px}
rdr-menu-actus .ma-quand svg{width:12px;height:12px;opacity:.8}
rdr-menu-actus .ma-quand .ma-sep{opacity:.5}
rdr-menu-actus .ma-glyphe{position:absolute;right:12px;top:12px;z-index:2;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:999px;background:rgba(14,17,29,.72);color:#fff;backdrop-filter:blur(4px)}
rdr-menu-actus .ma-glyphe svg{width:16px;height:16px}
rdr-menu-actus .ma-glyphe--grand{left:50%;top:50%;right:auto;transform:translate(-50%,-50%);width:64px;height:64px;background:rgba(255,255,255,.92);color:#0E111D}
rdr-menu-actus .ma-glyphe--grand svg{width:28px;height:28px}
rdr-menu-actus .ma-carte:hover .ma-glyphe--grand{background:var(--ma-jaune)}
rdr-menu-actus .ma-sujets{display:flex;gap:6px;flex-wrap:wrap}
rdr-menu-actus .ma-sujet{display:inline-flex;align-items:center;padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.35);font-size:11px;font-weight:700;color:#fff;letter-spacing:.02em;white-space:nowrap}
rdr-menu-actus .ma-sujet--petit{border:0;padding:0;color:var(--cv);font-size:11px;letter-spacing:.06em;text-transform:uppercase}
rdr-menu-actus .ma-vide{display:flex;align-items:center;justify-content:center;height:100%;color:var(--ma-t3);font-size:14px;border:1px dashed var(--ma-filet);border-radius:14px}





rdr-menu-actus .ma-squel{position:relative;display:block;border-radius:16px;overflow:hidden;background:var(--ma-panneau);min-height:0}
rdr-menu-actus .ma-squel::after{content:'';position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.07) 50%,rgba(255,255,255,0) 100%);animation:ma-scintille 1.6s ease-in-out infinite}
rdr-menu-actus .ma-squel:nth-child(2)::after{animation-delay:.12s}
rdr-menu-actus .ma-squel:nth-child(3)::after{animation-delay:.24s}
rdr-menu-actus .ma-squel:nth-child(4)::after{animation-delay:.36s}
rdr-menu-actus .ma-squel:nth-child(5)::after{animation-delay:.48s}
rdr-menu-actus .ma-squel:nth-child(6)::after{animation-delay:.6s}
rdr-menu-actus .ma-squel i{position:absolute;display:block;border-radius:6px;background:rgba(255,255,255,.08)}
rdr-menu-actus .ma-squel .ma-s-cat{left:14px;top:14px;width:64px;height:22px}
rdr-menu-actus .ma-squel .ma-s-l1{left:16px;right:20%;bottom:50px;height:13px}
rdr-menu-actus .ma-squel .ma-s-l2{left:16px;right:44%;bottom:31px;height:13px}
rdr-menu-actus .ma-squel .ma-s-meta{left:16px;width:72px;bottom:14px;height:9px;opacity:.7}
rdr-menu-actus .ma-squel--une .ma-s-cat{left:26px;top:22px;width:96px}
rdr-menu-actus .ma-squel--une .ma-s-l1{left:26px;right:30%;bottom:96px;height:22px}
rdr-menu-actus .ma-squel--une .ma-s-l2{left:26px;right:50%;bottom:66px;height:22px}
rdr-menu-actus .ma-squel--une .ma-s-p{left:26px;right:38%;bottom:44px;height:10px;opacity:.7}
rdr-menu-actus .ma-squel--une .ma-s-meta{left:26px;width:120px;bottom:22px}
@keyframes ma-scintille{100%{transform:translateX(100%)}}
rdr-menu-actus .ma-corps{position:relative;min-height:0}
rdr-menu-actus .ma-rail{display:grid;grid-template-columns:2fr repeat(4,1fr);gap:12px;height:100%;min-height:0}
rdr-menu-actus .ma-rail--six{grid-template-columns:2fr repeat(5,1fr)}
rdr-menu-actus .ma-carte{position:relative;display:block;border-radius:16px;overflow:hidden;background:var(--ma-panneau);text-decoration:none;color:#fff;min-height:0;outline:0;opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s cubic-bezier(.22,.8,.3,1)}
rdr-menu-actus .ma-carte.est-la{opacity:1;transform:none}
rdr-menu-actus .ma-carte:focus-visible{box-shadow:0 0 0 3px #5DBFC0}
rdr-menu-actus .ma-carte img.ma-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
rdr-menu-actus .ma-carte:hover img.ma-img{transform:scale(1.04)}
rdr-menu-actus .ma-carte::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 32%);z-index:1;pointer-events:none}
rdr-menu-actus .ma-carte::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,0) 38%,rgba(14,17,29,.62) 66%,rgba(14,17,29,.95) 100%);z-index:1;pointer-events:none}
rdr-menu-actus .ma-txt{position:absolute;left:0;right:0;bottom:0;padding:16px;z-index:2;display:flex;flex-direction:column;gap:6px}
rdr-menu-actus .ma-carte--une .ma-txt{padding:24px 26px;gap:9px;max-width:640px}
rdr-menu-actus .ma-carte h4{margin:0;font-family:var(--ma-titre);font-style:italic;font-size:15px;line-height:1.15;text-transform:uppercase;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
rdr-menu-actus .ma-carte--une h4{font-size:clamp(20px,1.8vw,26px)}
rdr-menu-actus .ma-carte--une p{margin:0;font-size:13px;line-height:1.5;color:var(--ma-t2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-menu-actus .ma-haut{position:absolute;left:14px;top:14px;right:14px;z-index:2;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
rdr-menu-actus .ma-carte--une .ma-haut{left:26px;top:22px}
rdr-menu-actus .ma-meta{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
rdr-menu-actus .ma-cite{position:relative;margin:0;padding-left:34px;font-size:16px;line-height:1.45;color:#fff;font-weight:500;font-style:italic;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
rdr-menu-actus .ma-cite::before{content:'«';position:absolute;left:0;top:-14px;font-family:var(--ma-titre);font-size:54px;line-height:1;color:#F5BE41;font-style:italic}
rdr-menu-actus .ma-lire{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ma-jaune)}
rdr-menu-actus .ma-lire svg{width:14px;height:14px}
rdr-menu-actus .ma-onde{display:flex;align-items:center;gap:3px;height:28px}
rdr-menu-actus .ma-onde i{width:3px;border-radius:2px;background:#8B86E0;height:var(--h);opacity:.9}
rdr-menu-actus .ma-onde i:nth-child(odd){opacity:.55}













rdr-menu-actus[vague="oui"]{display:grid;grid-template-rows:17px minmax(0,1fr);height:clamp(430px,calc(100vh - 290px),var(--ma-hauteur,578px));min-height:0}
rdr-menu-actus .ma-vague{display:none;height:17px;width:100%;background:#fff;line-height:0;font-size:0;-webkit-mask:url("data:image/svg+xml;utf8,<svg width='360' height='12' viewBox='0 0 360 12' xmlns='http://www.w3.org/2000/svg'><path d='M0,1.092C37.3557,1.092,52.6443,12,90,12C127.356,12,142.633,1.092,180,1.092C217.356,1.092,232.644,12,270,12C307.356,12,322.644,1.092,360,1.092V0H0V1.092Z' fill='black'/></svg>");mask:url("data:image/svg+xml;utf8,<svg width='360' height='12' viewBox='0 0 360 12' xmlns='http://www.w3.org/2000/svg'><path d='M0,1.092C37.3557,1.092,52.6443,12,90,12C127.356,12,142.633,1.092,180,1.092C217.356,1.092,232.644,12,270,12C307.356,12,322.644,1.092,360,1.092V0H0V1.092Z' fill='black'/></svg>");-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-position:0 top;mask-position:0 top;animation:ma-vague 12s linear infinite}
rdr-menu-actus[vague="oui"] .ma-vague{display:block}
rdr-menu-actus[vague="oui"] .ma{padding:23px 30px 40px;min-height:0}









@media (max-height:820px){
rdr-menu-actus[vague="oui"] .ma{padding:16px 30px 24px;gap:10px}
rdr-menu-actus .ma-titre{font-size:30px}
rdr-menu-actus .ma-sous{margin-top:4px}
rdr-menu-actus .ma-pied{min-height:40px}
rdr-menu-actus .ma-btn{height:40px;padding:8px 16px;font-size:13px}
rdr-menu-actus .ma-onglet{padding:4px 12px 4px 4px;font-size:11px}
rdr-menu-actus .ma-txt{padding:12px;gap:5px}
rdr-menu-actus .ma-carte--une .ma-txt{padding:16px 20px;gap:7px}
rdr-menu-actus .ma-carte h4{font-size:13.5px}
rdr-menu-actus .ma-carte--une h4{font-size:clamp(17px,1.5vw,21px);-webkit-line-clamp:2}
rdr-menu-actus .ma-carte--une p{display:none}
rdr-menu-actus .ma-cite{font-size:14px;-webkit-line-clamp:2}
rdr-menu-actus .ma-glyphe--grand{width:52px;height:52px}
rdr-menu-actus .ma-glyphe--grand svg{width:22px;height:22px}
rdr-menu-actus .ma-squel--une .ma-s-l1{bottom:72px;height:18px}
rdr-menu-actus .ma-squel--une .ma-s-l2{bottom:46px;height:18px}
rdr-menu-actus .ma-squel--une .ma-s-p{display:none}
rdr-menu-actus .ma-squel--une .ma-s-meta{bottom:16px}
}
@keyframes ma-vague{0%{-webkit-mask-position:0 top;mask-position:0 top}100%{-webkit-mask-position:-360px top;mask-position:-360px top}}






rdr-menu-actus[fond]{position:relative;background:#0E111D;overflow:hidden}
rdr-menu-actus .ma-fond{position:absolute;left:-4px;top:-222px;width:1364px;height:924px;opacity:.15;pointer-events:none;display:none;z-index:0}
rdr-menu-actus[fond="vagues"] .ma-fond{display:block}
rdr-menu-actus .ma-vague,rdr-menu-actus .ma{position:relative;z-index:1}
@media (prefers-reduced-motion:reduce){rdr-menu-actus *{transition:none !important;animation:none !important}rdr-menu-actus .ma-carte{opacity:1 !important;transform:none !important}}
`;

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const nettoyer = (s) => String(s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const urlSure = (u) => { const s = String(u || ''); return /^(\/|https?:\/\/)/.test(s) && !/[<>"]/.test(s) ? s : ''; };
   
  function image(v, w, h) {
    const s = String(v || '');
    let id = '';
    if (s.startsWith('wix:image://')) { const m = s.match(/^wix:image:\/\/v1\/([^/#]+)/); id = m ? m[1] : ''; }
    else if (s.includes('static.wixstatic.com/media/')) { const m = s.match(/\/media\/([^/]+)/); id = m ? m[1] : ''; }
    if (!id) return urlSure(s);
    return 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + w + ',h_' + h + ',al_c,q_75,enc_auto/image.jpg';
  }
   
  function typeDe(cat) {
    const s = String((cat && (cat.slug || cat.label)) || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    if (/photo|image/.test(s)) return 'photo';
    if (/video/.test(s)) return 'video';
    if (/audio|podcast/.test(s)) return 'audio';
    return 'actu';
  }
  const cle = (p) => (p.type === 'actu' && /interview/i.test(p.label)) ? 'interview' : p.type;
  

  function sujets(tags) {
    const l = (Array.isArray(tags) ? tags : []).map(t => String(t || '').trim()).filter(t => t && !TAGS_TUS.test(t));
    const nominatif = (t) => /\b[A-ZÀ-Ý0-9]{3,}\b/.test(t) ? 0 : 1;
    return l.slice().sort((a, b) => nominatif(a) - nominatif(b));
  }
  function quand(iso, lang, maintenant) {
    const t = TXT[lang]; const d = (maintenant - Date.parse(iso)) / 60000;
    if (!(d >= 0)) return '';
    if (d < 60) return t.ilYa(Math.max(1, Math.round(d)), t.min);
    if (d < 24 * 60) return t.ilYa(Math.round(d / 60), t.h);
    if (d < 48 * 60) return t.hier;
    if (d < 14 * 24 * 60) return t.ilYa(Math.round(d / 1440), t.j);
    try { return new Date(iso).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'short' }); } catch (e) { return ''; }
  }


  

















  const MEM_CLE = 'rdrMemMenuActusV1';
  const MEM_TTL_MS = 12 * 3600 * 1000;
  const memTelephone = () => /Mobi|iPhone|Android.+Mobile/i.test((typeof navigator !== 'undefined' && navigator.userAgent) || '');
  const memLangue = () => /^\/en(\/|$)/.test((typeof location !== 'undefined' && location.pathname) || '') ? 'en' : 'fr';
  function memLire(suffixe) {
    try { const m = JSON.parse(localStorage.getItem(MEM_CLE + ':' + suffixe) || 'null'); return (m && typeof m.le === 'number' && Date.now() - m.le < MEM_TTL_MS) ? m : null; }
    catch (e) { return null; }
  }
  function memEcrire(suffixe, valeurs) {
    try { localStorage.setItem(MEM_CLE + ':' + suffixe, JSON.stringify(Object.assign({ le: Date.now() }, valeurs))); }
    catch (e) {   }
  }

  


  const TEMOIN_PREMIER_MS = 1000;
  const TEMOIN_PAS_MS = 2000;
  const TEMOIN_ENVOIS = 5;
   
  const NOTIFS_GUET_MS = 15000;
  const NOTIFS_EVENEMENTS = ['notify-seen', 'notify-dismiss', 'notify-refresh', 'notify-aller', 'notify-espace'];
  function navigateurCourt() {
    const ua = String(navigator.userAgent || '');
    const mobile = /iPhone|iPad|Android|Mobile/i.test(ua) ? '-mobile' : '';
    if (/Firefox\//.test(ua)) return 'firefox' + mobile;
    if (/Edg\//.test(ua)) return 'edge' + mobile;
    if (/Chrome\/|CriOS\//.test(ua)) return 'chrome' + mobile;
    if (/Safari\//.test(ua)) return 'safari' + mobile;
    return 'autre' + mobile;
  }

  class MenuActus extends HTMLElement {
    constructor() {
      super();
      this._posts = []; this._lang = memLangue(); this._obs = null; this._brut = null; this._depuisMemoire = false;
      this._garde = null; this._abandon = false; this._reserve = null; this._guet = null;
    }
     
    _enAttente() { return this._brut == null && !this._abandon; }
    _armerGarde() {
      if (this._garde || !this._enAttente()) return;
      this._garde = setTimeout(() => {
        this._garde = null;
        if (this._brut != null) return;
        this._abandon = true;
        if (this.isConnected) this._render();
      }, ATTENTE_MAX_MS);
    }
    _appliquerPosts(val) {
      this._brut = val;
      let l = [];
      try { l = JSON.parse(val || '[]'); } catch (e) { l = []; }
      this._posts = (Array.isArray(l) ? l : []).map(p => ({
        title: p.title || '', excerpt: p.excerpt || '', coverImage: p.coverImage || '', publishedDate: p.publishedDate || '',
        postPageUrl: urlSure(p.postPageUrl), timeToRead: Number(p.timeToRead) || 0, pinned: !!p.pinned,
        label: (p.categorie && p.categorie.label) || '', type: typeDe(p.categorie), tags: sujets(p.tags)
      })).filter(p => p.title && p.postPageUrl);
    }
     
    _depuisLaMemoire() {
      if (this._brut != null || this._depuisMemoire || memTelephone()) return;
      const m = memLire(this._lang);
      if (!m || typeof m.posts !== 'string') return;
      this._depuisMemoire = true;
      this._appliquerPosts(m.posts);
    }
    static get observedAttributes() { return ['posts', 'lang', 'vague', 'fond', 'temoin', 'notifications']; }
    attributeChangedCallback(nom, avant, val) {
      if (avant === val) return;
      if (nom === 'temoin') { this._temoin(val); return; }
      if (nom === 'notifications') { if (val) this._remettreNotifications(val); return; }
      








      if (val === null && (nom === 'posts' || nom === 'lang')) return;
      


      if (nom === 'lang') { const l = val === 'en' ? 'en' : 'fr'; if (l === this._lang) return; this._lang = l; }
      if (nom === 'posts') {
        

        if (val) memEcrire(this._lang, { posts: val });
        if (val === this._brut) { this._depuisMemoire = false; this._reserve = null; return; }
        

        if (this._depuisMemoire && val && this.getClientRects().length) { this._differer(val); return; }
        this._depuisMemoire = false; this._reserve = null;
        this._appliquerPosts(val);
      }
      if (nom === 'vague' || nom === 'fond') return;    
      if (this.isConnected) this._render();
    }
    



    _differer(val) {
      this._reserve = val;
      if (this._guet) return;
      const poser = () => {
        if (this._guet) { this._guet.disconnect(); this._guet = null; }
        const v = this._reserve; this._reserve = null;
        if (v == null || v === this._brut) return;
        this._depuisMemoire = false;
        this._appliquerPosts(v);
        if (this.isConnected) this._render();
      };
      if (typeof IntersectionObserver !== 'function') { poser(); return; }
      this._guet = new IntersectionObserver((entrees) => { if (!entrees.some(e => e.isIntersecting)) poser(); });
      this._guet.observe(this);
    }
    










    _temoin(val) {
      clearTimeout(this._temoinMinuteur); this._temoinMinuteur = null;
      if (val === 'ecrit') { window.__rdrTemoinEcrit = true; return; }
      if (val !== 'membre' || window.__rdrTemoinEcrit) return;
      let envois = 0;
      const envoyer = () => {
        this._temoinMinuteur = null;
        if (!this.isConnected || window.__rdrTemoinEcrit || this.getAttribute('temoin') !== 'membre') return;
        const detail = { octet: 0, transfert: 0, navigateur: navigateurCourt() };
        try {
          const nav = (performance.getEntriesByType('navigation') || [])[0];
          if (nav) { detail.octet = Math.round(nav.responseStart || 0); detail.transfert = nav.transferSize || 0; }
        } catch (e) {   }
        this.dispatchEvent(new CustomEvent('navigation-temoin', { detail, bubbles: true, composed: true }));
        if (++envois < TEMOIN_ENVOIS) this._temoinMinuteur = setTimeout(envoyer, TEMOIN_PAS_MS);
      };
      this._temoinMinuteur = setTimeout(envoyer, TEMOIN_PREMIER_MS);
    }
    











    _remettreNotifications(json) {
      clearTimeout(this._guetNotifs); this._guetNotifs = null;
      if (json === window.__rdrNotifsRemises) return;
      const module = document.querySelector('rdr-notify');
      if (module) {
        window.__rdrNotifsRemises = json;
        try { module.setAttribute('payload', json); } catch (e) {   }
        return;
      }
      if (!this._guetNotifsDebut) this._guetNotifsDebut = Date.now();
      if (Date.now() - this._guetNotifsDebut > NOTIFS_GUET_MS) return;
      this._guetNotifs = setTimeout(() => this._remettreNotifications(json), 400);
    }
    _brancherRelaisNotifications() {
      if (this._relaisNotifs) return;
      this._relaisNotifs = (e) => {
        if (!e || !e.target || e.target.tagName !== 'RDR-NOTIFY') return;
        this.dispatchEvent(new CustomEvent('rn-' + e.type, { bubbles: true, composed: true, detail: e.detail || {} }));
      };
      NOTIFS_EVENEMENTS.forEach(t => document.addEventListener(t, this._relaisNotifs));
    }
    _debrancherRelaisNotifications() {
      if (this._relaisNotifs) { NOTIFS_EVENEMENTS.forEach(t => document.removeEventListener(t, this._relaisNotifs)); this._relaisNotifs = null; }
      clearTimeout(this._guetNotifs); this._guetNotifs = null;
    }
    connectedCallback() { this._brancherRelaisNotifications(); this._depuisLaMemoire(); this._render(); this._armerGarde(); }
    disconnectedCallback() {
      this._debrancherRelaisNotifications();
      if (this._temoinMinuteur) { clearTimeout(this._temoinMinuteur); this._temoinMinuteur = null; }
      if (this._guet) { this._guet.disconnect(); this._guet = null; }
      if (this._garde) { clearTimeout(this._garde); this._garde = null; }
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._veille) { this._veille.disconnect(); this._veille = null; }
    }

    get _t() { return TXT[this._lang]; }
    get _r() { return ROUTES[this._lang]; }
    _emit(url) { if (url) this.dispatchEvent(new CustomEvent('ma-navigate', { detail: { url }, bubbles: true, composed: true })); }
    






    _aller(url) {
      if (!url) return;
      if (/^\/(?!\/)/.test(url) || url.indexOf(location.origin + '/') === 0) {
        try { this._naviguer(url); return; } catch (e) {   }
      }
      this._emit(url);
    }
    _naviguer(url) { window.location.assign(url); }

    

    _ordre(l, maintenant) {
      if (l.length < 2) return l;
      const une = l[0]; const pris = new Set([une]); const tete = [une];
      for (const k of ['actu', 'photo', 'video', 'audio']) {
        if (k === une.type) continue;
        const p = l.find(x => x.type === k && !pris.has(x) && (maintenant - Date.parse(x.publishedDate)) < FENETRE_MEDIA_J * 86400000);
        if (p) { pris.add(p); tete.push(p); }
      }
      return tete.concat(l.filter(p => !pris.has(p)));
    }
    _cat(p) { const k = cle(p); const h = HUB[k]; return '<span class="ma-cat" style="--c:' + h.c + ';--bg:' + h.bg + '">' + ICO[k] + esc(p.label) + '</span>'; }
    _quand(p, maintenant, lecture) {
      const t = this._t; const neuf = (maintenant - Date.parse(p.publishedDate)) < NOUVEAU_H * 3600000;
      const l = lecture && p.timeToRead ? '<span class="ma-sep">·</span>' + ICO.horloge + t.lecture(p.timeToRead) : '';
      return '<span class="ma-quand">' + (neuf ? '<b>' + t.nouveau + '</b>' : '') + quand(p.publishedDate, this._lang, maintenant) + l + '</span>';
    }
    _glyphe(p, grand) { return p.type === 'actu' ? '' : '<span class="ma-glyphe' + (grand ? ' ma-glyphe--grand' : '') + '">' + ICO[p.type] + '</span>'; }
     
    _rubriques() {
      const t = this._t;
      return '<nav class="ma-onglets" aria-label="' + t.rubriques + '">' + ['actu', 'photo', 'video', 'audio'].map(k => {
        const h = HUB[k]; const url = this._r[k];
        return '<a class="ma-onglet" href="' + url + '" data-url="' + url + '" style="--c:' + h.c + ';--bg:' + h.bg + '"><i>' + ICO[k] + '</i>' + t[k] + '</a>';
      }).join('') + '</nav>';
    }
    _bouton() { const url = this._r.hub; return '<a class="ma-btn" href="' + url + '" data-url="' + url + '">' + this._t.voirTout + ICO.bouton + '</a>'; }
    _combien() { return (this.clientWidth || 1381) >= 1700 ? 6 : 5; }

     
    _uneCorps(p, maintenant) {
      const t = this._t; const k = cle(p);
      const suj = p.tags.length ? '<span class="ma-sujets">' + p.tags.slice(0, 3).map(x => '<span class="ma-sujet">' + esc(x) + '</span>').join('') + '</span>' : '';
      const titre = '<h4>' + esc(p.title) + '</h4>';
      if (k === 'interview') return suj + titre + '<blockquote class="ma-cite">' + esc(nettoyer(p.excerpt)) + '</blockquote><span class="ma-meta">' + this._quand(p, maintenant, true) + '<span class="ma-lire">' + t.lire + ICO.fleche + '</span></span>';
      if (k === 'video') return suj + titre + '<span class="ma-meta">' + this._quand(p, maintenant) + '<span class="ma-lire">' + ICO.video + t.regarder + '</span></span>';
      if (k === 'audio') {
        const onde = '<span class="ma-onde">' + Array.from({ length: 34 }, (_, i) => '<i style="--h:' + (6 + Math.round(14 * Math.abs(Math.sin(i * 0.9)) + (i % 3) * 3)) + 'px"></i>').join('') + '</span>';
        return suj + titre + onde + '<span class="ma-meta">' + this._quand(p, maintenant) + '<span class="ma-lire">' + ICO.audio + t.ecouter + '</span></span>';
      }
      if (k === 'photo') return suj + titre + '<span class="ma-meta">' + this._quand(p, maintenant) + '<span class="ma-lire">' + t.voirPhotos + ICO.fleche + '</span></span>';
      return suj + titre + '<p>' + esc(nettoyer(p.excerpt)) + '</p><span class="ma-meta">' + this._quand(p, maintenant, true) + '<span class="ma-lire">' + t.lire + ICO.fleche + '</span></span>';
    }
    _carte(p, une, maintenant) {
      const k = cle(p); const cv = HUB[k].v;
      const sujet = !une && p.tags.length ? '<span class="ma-sujet ma-sujet--petit" style="--cv:' + cv + '">' + esc(p.tags[0]) + '</span>' : '';
      return '<a class="ma-carte' + (une ? ' ma-carte--une' : '') + '" href="' + esc(p.postPageUrl) + '" data-url="' + esc(p.postPageUrl) + '">'
        + '<img class="ma-img" data-src="' + image(p.coverImage, une ? 1000 : 520, une ? 700 : 620) + '" alt="">' + this._glyphe(p, une && k === 'video')
        + '<div class="ma-haut">' + this._cat(p) + '</div>'
        + '<div class="ma-txt">' + (une ? this._uneCorps(p, maintenant) : sujet + '<h4>' + esc(p.title) + '</h4>' + this._quand(p, maintenant)) + '</div></a>';
    }

     
    _squelette(n) {
      const une = '<span class="ma-squel ma-squel--une"><i class="ma-s-cat"></i><i class="ma-s-l1"></i><i class="ma-s-l2"></i><i class="ma-s-p"></i><i class="ma-s-meta"></i></span>';
      const petite = '<span class="ma-squel"><i class="ma-s-cat"></i><i class="ma-s-l1"></i><i class="ma-s-l2"></i><i class="ma-s-meta"></i></span>';
      return '<div class="ma-corps" aria-busy="true"><div class="ma-rail' + (n === 6 ? ' ma-rail--six' : '') + '" aria-hidden="true">'
        + une + Array.from({ length: n - 1 }, () => petite).join('') + '</div></div>';
    }

    _render() {
      const t = this._t; const maintenant = Date.now();
      const n = this._combien();
      const l = this._ordre(this._posts, maintenant).slice(0, n);
      const corps = l.length
        ? '<div class="ma-corps"><div class="ma-rail' + (n === 6 ? ' ma-rail--six' : '') + '">' + l.map((p, i) => this._carte(p, i === 0, maintenant)).join('') + '</div></div>'
        : (this._enAttente() ? this._squelette(n) : '<div class="ma-vide">' + t.vide + '</div>');
      this.innerHTML = '<style>' + CSS + '</style><img class="ma-fond" src="https://static.wixstatic.com/shapes/df962b_ab123c0a04db4300ace44b9c6f6e6e7e.svg" alt="" aria-hidden="true"><div class="ma-vague" aria-hidden="true"></div><div class="ma">'
        + '<div class="ma-tete"><div><h2 class="ma-titre">' + t.titre + '</h2><p class="ma-sous">' + t.sousTitre + '</p></div>' + this._rubriques() + '</div>'
        + corps
        + '<div class="ma-pied"><span class="ma-pied-note"></span>' + this._bouton() + '</div></div>';
      this._brancher();
      this._veiller();
    }
    







    _veiller() {
      if (this._veille || typeof MutationObserver !== 'function') return;
      this._veille = new MutationObserver(() => { if (this.isConnected && !this.childElementCount) this._render(); });
      this._veille.observe(this, { childList: true });
    }

    _brancher() {
      this.querySelectorAll('[data-url]').forEach(a => a.addEventListener('click', (e) => {
         
        if (a.tagName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return;
        e.preventDefault(); this._aller(a.dataset.url);
      }));
      

      if (this._obs) this._obs.disconnect();
      const charger = () => {
        this.querySelectorAll('img[data-src]').forEach(i => { i.src = i.dataset.src; i.removeAttribute('data-src'); });
         
        this.querySelectorAll('.ma-carte').forEach((c, i) => setTimeout(() => c.classList.add('est-la'), 60 + i * 110));
      };
      if (typeof IntersectionObserver !== 'function') { charger(); return; }
      this._obs = new IntersectionObserver((entrees) => { if (entrees.some(e => e.isIntersecting)) { charger(); this._obs.disconnect(); this._obs = null; } }, { threshold: 0.05 });
      this._obs.observe(this);
    }
  }
  window.customElements.define('rdr-menu-actus', MenuActus);
})();
})();
;(function(){
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('rdr-menu-cartes')) return;

  const TXT = {
    fr: { bientot: 'Bientôt', decouvrir: 'Découvrir', externe: 'Site externe', voirFiche: 'Voir le profil' },
    en: { bientot: 'Coming soon', decouvrir: 'Discover', externe: 'External site', voirFiche: 'View profile' }
  };
  const ICO = {
    bouton: '<svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg>',
    fleche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    externe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6"/></svg>',
    horloge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    calendrier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>'
  };
   
  const CLASSES = {
    'Ultim': { c: '#429991', icone: 'https://static.wixstatic.com/shapes/7bb303_0ed87d76a89f4e6ebd6008778014958e.svg' },
    'Ocean Fifty': { c: '#72b9f1', icone: 'https://static.wixstatic.com/shapes/7bb303_0b5383f285c8470089ae854bc67b13b5.svg' },
    'Class40': { c: '#7e93ef', icone: 'https://static.wixstatic.com/shapes/7bb303_b13535fe4621478fb5fb52e98c751b11.svg' },
    'IMOCA': { c: '#76bcbe', icone: 'https://static.wixstatic.com/shapes/7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg' },
    'Vintage Mono': { c: '#f9f06e', icone: 'https://static.wixstatic.com/shapes/7bb303_9b4ee8478c6b4453b668b04eb278406c.svg' },
    'Vintage Multi': { c: '#f19f39', icone: 'https://static.wixstatic.com/shapes/7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg' }
  };
  const ROTATIONS = [-0.5, 0.4, -0.3, 0.5, -0.4, 0.3];
  const STYLES_PASTILLE = { sombre: '', teal: ' mc-pastille--teal', jaune: ' mc-pastille--jaune' };
  



  const ATTENTE_MAX_MS = 12000;
  const CARTES_SQUELETTE = 4;

  const CSS = `
rdr-menu-cartes{display:block;width:100%;height:100%;color:rgba(255,255,255,.94);font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;
  --mc-titre:'Varien','Archivo Black',Impact,sans-serif;--mc-jaune:#FCF150;--mc-teal:#5DBFC0;--mc-t2:rgba(255,255,255,.7);--mc-t3:rgba(255,255,255,.48);--mc-filet:rgba(255,255,255,.12);--mc-panneau:#1B2237}
rdr-menu-cartes *,rdr-menu-cartes *::before,rdr-menu-cartes *::after{box-sizing:border-box}
rdr-menu-cartes img{display:block}
rdr-menu-cartes .mc{display:grid;grid-template-rows:auto minmax(0,1fr) auto;height:100%;gap:14px;width:100%;max-width:var(--mc-largeur-max,1440px);margin:0 auto}
rdr-menu-cartes .mc-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
rdr-menu-cartes .mc-titre{margin:0;font-family:var(--mc-titre);font-style:italic;font-size:40px;line-height:1;text-transform:uppercase;color:#fff}
rdr-menu-cartes .mc-sous{margin:6px 0 0;font-size:12.5px;color:var(--mc-t3);max-width:640px}
rdr-menu-cartes .mc-pied{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:44px}
rdr-menu-cartes .mc-pied-note{font-size:12px;color:var(--mc-t3)}
rdr-menu-cartes .mc-btn{display:inline-flex;align-items:center;justify-content:center;gap:15px;height:44px;padding:10px 20px;border:2px solid #fff;border-radius:10px 0 10px 0;background:transparent;color:#fff;font-weight:700;font-size:14px;line-height:1;text-decoration:none;transition:background .15s}
rdr-menu-cartes .mc-btn svg{width:20px;height:20px;fill:#fff;flex:none}
rdr-menu-cartes .mc-btn:hover{background:rgba(255,255,255,.1)}
rdr-menu-cartes .mc-corps{display:grid;gap:12px;min-height:0;height:100%}
rdr-menu-cartes .mc-corps--cartes{grid-template-columns:repeat(var(--n,4),minmax(0,1fr))}
rdr-menu-cartes .mc-corps--visuel{grid-template-columns:minmax(0,1fr) 260px minmax(0,1fr);align-items:stretch}
rdr-menu-cartes .mc-corps--groupe{grid-template-columns:minmax(0,3fr) minmax(280px,1fr)}
rdr-menu-cartes .mc-grille{display:grid;gap:12px;min-height:0;grid-template-columns:repeat(var(--n,3),minmax(0,1fr))}
rdr-menu-cartes .mc-carte{position:relative;display:block;border-radius:16px;overflow:hidden;background:var(--mc-panneau);text-decoration:none;color:#fff;min-height:0;outline:0;opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s cubic-bezier(.22,.8,.3,1),box-shadow .25s ease}
rdr-menu-cartes .mc-carte.est-la{opacity:1;transform:none}
rdr-menu-cartes .mc-visuel{opacity:0;transition:opacity .6s ease .3s}
rdr-menu-cartes .mc-visuel.est-la{opacity:1}
rdr-menu-cartes a.mc-carte.est-la:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,0,0,.45);transition:transform .25s ease,box-shadow .25s ease}
rdr-menu-cartes .mc-carte--grande{grid-column:span 2}
rdr-menu-cartes .mc-carte:focus-visible{box-shadow:0 0 0 3px var(--mc-teal)}
rdr-menu-cartes .mc-carte img.mc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s ease,filter .3s}
rdr-menu-cartes .mc-carte:hover img.mc-img{transform:scale(1.04)}
rdr-menu-cartes .mc-carte::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,.45) 0%,rgba(14,17,29,0) 30%);z-index:1;pointer-events:none}
rdr-menu-cartes .mc-carte::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,0) 40%,rgba(14,17,29,.6) 68%,rgba(14,17,29,.94) 100%);z-index:1;pointer-events:none}
rdr-menu-cartes .mc-txt{position:absolute;left:0;right:0;bottom:0;padding:16px;z-index:2;display:flex;flex-direction:column;gap:5px}
rdr-menu-cartes .mc-carte--grande .mc-txt{padding:22px 24px;max-width:560px}
rdr-menu-cartes .mc-carte h4{margin:0;font-family:var(--mc-titre);font-style:italic;font-size:19px;line-height:1.1;text-transform:uppercase;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-menu-cartes .mc-carte--large h4,rdr-menu-cartes .mc-carte--grande h4{font-size:26px}
rdr-menu-cartes .mc-carte--bandeau h4{font-size:15px}
rdr-menu-cartes .mc-carte p{margin:0;font-size:12px;line-height:1.45;color:var(--mc-t2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-menu-cartes .mc-carte--grande p{font-size:13px}
rdr-menu-cartes .mc-lire{display:inline-flex;align-items:center;gap:6px;margin-top:3px;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--mc-jaune);opacity:0;transform:translateY(4px);transition:opacity .2s,transform .2s}
rdr-menu-cartes .mc-lire svg{width:12px;height:12px}
rdr-menu-cartes .mc-carte:hover .mc-lire{opacity:1;transform:none}
rdr-menu-cartes .mc-haut{position:absolute;left:12px;top:12px;right:12px;z-index:2;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;pointer-events:none}
rdr-menu-cartes .mc-pastille{display:inline-flex;align-items:center;gap:5px;padding:6px 9px;border-radius:6px;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;line-height:1;background:rgba(14,17,29,.78);color:#fff;backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14)}
rdr-menu-cartes .mc-pastille--jaune{background:var(--mc-jaune);color:#0E111D;border-color:transparent}
rdr-menu-cartes .mc-pastille--teal{background:var(--mc-teal);color:#0E111D;border-color:transparent}
rdr-menu-cartes .mc-pastille svg{width:11px;height:11px}
rdr-menu-cartes .mc-externe{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:999px;background:rgba(14,17,29,.72);color:#fff;backdrop-filter:blur(4px)}
rdr-menu-cartes .mc-externe svg{width:12px;height:12px}
rdr-menu-cartes .mc-carte--bande .mc-txt{bottom:52px;padding-bottom:10px}
rdr-menu-cartes .mc-bande{position:absolute;left:0;right:0;bottom:0;z-index:2;height:52px;display:flex;align-items:center;justify-content:center;gap:10px;padding:0 16px;font-size:16px;font-weight:800;letter-spacing:.02em;color:var(--cb,var(--mc-teal));background:linear-gradient(180deg,rgba(14,17,29,.55),rgba(14,17,29,.92));border-top:3px solid var(--cb,var(--mc-teal));text-align:center;backdrop-filter:blur(6px)}
rdr-menu-cartes .mc-bande svg{width:18px;height:18px;flex:none}
rdr-menu-cartes .mc-bande--teal{--cb:var(--mc-teal)}
rdr-menu-cartes .mc-bande--jaune{--cb:var(--mc-jaune)}
rdr-menu-cartes .mc-bande--sombre{--cb:#fff}
rdr-menu-cartes .mc-carte--bientot{cursor:default}
rdr-menu-cartes .mc-carte--bientot img.mc-img{filter:grayscale(.75) brightness(.55)}
rdr-menu-cartes .mc-carte--bientot:hover img.mc-img{transform:none}
rdr-menu-cartes .mc-carte--bientot h4{color:rgba(255,255,255,.72)}
rdr-menu-cartes .mc-groupe{display:grid;grid-template-rows:auto minmax(0,1fr);gap:10px;min-height:0}
rdr-menu-cartes .mc-groupe-titre{margin:0;font-family:var(--mc-titre);font-style:italic;font-size:22px;line-height:1;text-transform:uppercase;color:#fff;padding-left:2px}
rdr-menu-cartes .mc-groupe-liste{display:grid;gap:10px;min-height:0;grid-template-rows:repeat(var(--n,2),minmax(0,1fr))}
rdr-menu-cartes .mc-visuel{display:flex;align-items:flex-end;justify-content:center;min-height:0;filter:drop-shadow(0 16px 24px rgba(0,0,0,.45))}
rdr-menu-cartes .mc-visuel img{width:100%;height:100%;object-fit:contain;object-position:bottom center}
rdr-menu-cartes .mc-corps--skippers{grid-template-columns:repeat(6,minmax(0,1fr));align-items:stretch;padding-top:24px}
rdr-menu-cartes .sk{position:relative;perspective:1000px;min-width:0;cursor:pointer;outline:0}
rdr-menu-cartes .sk:focus-visible .sk-front{box-shadow:0 0 0 3px var(--mc-teal)}
rdr-menu-cartes .sk-flip{position:relative;height:100%;transform-style:preserve-3d;transform:rotateY(180deg);transition:transform .7s cubic-bezier(.25,.46,.45,.94)}
rdr-menu-cartes .sk-flip.est-la{transform:rotateY(0) rotate(var(--rot,0deg))}
rdr-menu-cartes .sk:hover .sk-flip.est-la{transform:rotateY(0) rotate(0) translateY(-6px) scale(1.02);transition:transform .35s cubic-bezier(.34,1.2,.64,1)}
rdr-menu-cartes .sk-face{position:absolute;inset:0;border-radius:28px 3px 16px 3px;backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;background:#0f2238;border:1.5px solid transparent;transition:box-shadow .3s,border-color .3s}
rdr-menu-cartes .sk:hover .sk-front{border-color:var(--cc);box-shadow:0 0 0 1px var(--cc),0 20px 50px rgba(0,0,0,.5)}
rdr-menu-cartes .sk-front::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--cc);opacity:.4;transition:height .3s,opacity .3s}
rdr-menu-cartes .sk:hover .sk-front::after{opacity:1;height:4px;box-shadow:0 0 8px var(--cc)}
rdr-menu-cartes .sk-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .4s}
rdr-menu-cartes .sk:hover .sk-img{transform:scale(1.07)}
rdr-menu-cartes .sk-ov{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:44px 14px 16px;background:linear-gradient(to top,rgba(6,14,26,1) 0%,rgba(6,14,26,.92) 40%,rgba(6,14,26,.55) 70%,transparent 100%)}
rdr-menu-cartes .sk-prenom{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.7);margin-bottom:3px;white-space:nowrap;overflow:hidden}
rdr-menu-cartes .sk-prenom img{width:18px;height:18px;border-radius:50%;object-fit:cover;flex:none}
rdr-menu-cartes .sk-nom{font-family:var(--mc-titre);font-style:italic;font-size:clamp(22px,2vw,30px);text-transform:uppercase;line-height:.9;margin-bottom:5px;white-space:nowrap;overflow:hidden}
rdr-menu-cartes .sk-nom[data-len="9"],rdr-menu-cartes .sk-nom[data-len="10"]{font-size:clamp(20px,1.8vw,27px)}
rdr-menu-cartes .sk-nom[data-len="11"],rdr-menu-cartes .sk-nom[data-len="12"]{font-size:clamp(19px,1.7vw,25px)}
rdr-menu-cartes .sk-nom[data-len="13"],rdr-menu-cartes .sk-nom[data-len="14"]{font-size:clamp(17px,1.5vw,22px)}
rdr-menu-cartes .sk-nom[data-long="1"]{font-size:clamp(14px,1.2vw,18px);white-space:normal;line-height:1.05}
rdr-menu-cartes .sk-bateau{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--cc);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
rdr-menu-cartes .sk-back{transform:rotateY(180deg);background:linear-gradient(135deg,rgba(255,255,255,.06),#0a0f1e)}
rdr-menu-cartes .sk-classe{position:absolute;top:-30px;right:-8px;z-index:20;pointer-events:none}
rdr-menu-cartes .sk-classe img{height:clamp(80px,7vw,105px);width:auto}
rdr-menu-cartes .mc-vide{display:flex;align-items:center;justify-content:center;height:100%;color:var(--mc-t3);font-size:14px;border:1px dashed var(--mc-filet);border-radius:14px}





rdr-menu-cartes .mc-squel,rdr-menu-cartes .mc-s{position:relative;display:block;overflow:hidden;background:rgba(255,255,255,.08);border-radius:8px}
rdr-menu-cartes .mc-squel{border-radius:16px;background:var(--mc-panneau);min-height:0}
rdr-menu-cartes .mc-squel--sk{border-radius:28px 3px 16px 3px;background:#0f2238}
rdr-menu-cartes .mc-squel::after,rdr-menu-cartes .mc-s::after{content:'';position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.07) 50%,rgba(255,255,255,0) 100%);animation:mc-scintille 1.6s ease-in-out infinite}
rdr-menu-cartes .mc-squel:nth-child(2)::after{animation-delay:.12s}
rdr-menu-cartes .mc-squel:nth-child(3)::after{animation-delay:.24s}
rdr-menu-cartes .mc-squel:nth-child(4)::after{animation-delay:.36s}
rdr-menu-cartes .mc-squel:nth-child(5)::after{animation-delay:.48s}
rdr-menu-cartes .mc-squel:nth-child(6)::after{animation-delay:.6s}
rdr-menu-cartes .mc-squel i{position:absolute;display:block;border-radius:6px;background:rgba(255,255,255,.08)}
rdr-menu-cartes .mc-squel .mc-s-l1{left:16px;right:24%;bottom:42px;height:16px}
rdr-menu-cartes .mc-squel .mc-s-l2{left:16px;right:46%;bottom:22px;height:10px;opacity:.75}
rdr-menu-cartes .mc-squel--sk .mc-s-l1{left:14px;right:40%;bottom:40px;height:9px}
rdr-menu-cartes .mc-squel--sk .mc-s-l2{left:14px;right:18%;bottom:18px;height:18px;opacity:1}
rdr-menu-cartes .mc-s-titre{width:min(320px,40vw);height:36px}
rdr-menu-cartes .mc-s-sous{width:min(420px,50vw);height:11px;margin-top:10px;opacity:.75}
rdr-menu-cartes .mc-s-btn{width:210px;height:44px;border-radius:10px 0 10px 0;background:transparent;border:2px solid rgba(255,255,255,.14)}
@keyframes mc-scintille{100%{transform:translateX(100%)}}













rdr-menu-cartes[vague="oui"]{display:grid;grid-template-rows:17px minmax(0,1fr);height:clamp(430px,calc(100vh - 290px),var(--mc-hauteur,578px));min-height:0}
rdr-menu-cartes .mc-vague{display:none;height:17px;width:100%;background:#fff;line-height:0;font-size:0;-webkit-mask:url("data:image/svg+xml;utf8,<svg width='360' height='12' viewBox='0 0 360 12' xmlns='http://www.w3.org/2000/svg'><path d='M0,1.092C37.3557,1.092,52.6443,12,90,12C127.356,12,142.633,1.092,180,1.092C217.356,1.092,232.644,12,270,12C307.356,12,322.644,1.092,360,1.092V0H0V1.092Z' fill='black'/></svg>");mask:url("data:image/svg+xml;utf8,<svg width='360' height='12' viewBox='0 0 360 12' xmlns='http://www.w3.org/2000/svg'><path d='M0,1.092C37.3557,1.092,52.6443,12,90,12C127.356,12,142.633,1.092,180,1.092C217.356,1.092,232.644,12,270,12C307.356,12,322.644,1.092,360,1.092V0H0V1.092Z' fill='black'/></svg>");-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-position:0 top;mask-position:0 top;animation:mc-vague 12s linear infinite}
rdr-menu-cartes[vague="oui"] .mc-vague{display:block}
rdr-menu-cartes[vague="oui"] .mc{padding:23px 30px 40px;min-height:0}









@media (max-height:820px){
rdr-menu-cartes[vague="oui"] .mc{padding:16px 30px 24px;gap:10px}
rdr-menu-cartes .mc-titre{font-size:30px}
rdr-menu-cartes .mc-sous{margin-top:4px}
rdr-menu-cartes .mc-pied{min-height:40px}
rdr-menu-cartes .mc-btn{height:40px;padding:8px 16px;font-size:13px}
rdr-menu-cartes .mc-txt{padding:12px;gap:4px}
rdr-menu-cartes .mc-carte--grande .mc-txt{padding:16px 18px}
rdr-menu-cartes .mc-carte h4{font-size:16px}
rdr-menu-cartes .mc-carte--large h4,rdr-menu-cartes .mc-carte--grande h4{font-size:21px}
rdr-menu-cartes .mc-carte--bandeau h4{font-size:14px}
rdr-menu-cartes .mc-carte p{font-size:11.5px}
rdr-menu-cartes .mc-carte--grande p{font-size:12px}
rdr-menu-cartes .mc-carte--bande .mc-txt{bottom:44px;padding-bottom:8px}
rdr-menu-cartes .mc-bande{height:44px;font-size:14px}
rdr-menu-cartes .mc-corps--visuel{grid-template-columns:minmax(0,1fr) 200px minmax(0,1fr)}
rdr-menu-cartes .mc-groupe-titre{font-size:18px}
rdr-menu-cartes .mc-corps--skippers{padding-top:18px}
rdr-menu-cartes .sk-ov{padding:36px 12px 12px}
rdr-menu-cartes .sk-classe{top:-24px}
rdr-menu-cartes .sk-classe img{height:clamp(64px,5.5vw,84px)}
rdr-menu-cartes .mc-s-titre{height:28px}
rdr-menu-cartes .mc-s-sous{margin-top:8px}
rdr-menu-cartes .mc-s-btn{height:40px}
}
@keyframes mc-vague{0%{-webkit-mask-position:0 top;mask-position:0 top}100%{-webkit-mask-position:-360px top;mask-position:-360px top}}






rdr-menu-cartes[fond]{position:relative;background:#0E111D;overflow:hidden}
rdr-menu-cartes .mc-fond{position:absolute;left:-4px;top:-222px;width:1364px;height:924px;opacity:.15;pointer-events:none;display:none;z-index:0}
rdr-menu-cartes[fond="vagues"] .mc-fond{display:block}
rdr-menu-cartes .mc-vague,rdr-menu-cartes .mc{position:relative;z-index:1}
@media (prefers-reduced-motion:reduce){rdr-menu-cartes *{transition:none !important;animation:none !important}rdr-menu-cartes .sk-flip{transform:none !important}rdr-menu-cartes .mc-carte,rdr-menu-cartes .mc-visuel{opacity:1 !important;transform:none !important}}
`;

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const urlSure = (u) => { const s = String(u || ''); return /^(\/|https?:\/\/)/.test(s) && !/[<>"]/.test(s) ? s : ''; };
  function image(v, w, h) {
    const s = String(v || '');
    let id = '';
    if (s.startsWith('wix:image://')) { const m = s.match(/^wix:image:\/\/v1\/([^/#]+)/); id = m ? m[1] : ''; }
    else if (s.includes('static.wixstatic.com/media/')) { const m = s.match(/\/media\/([^/]+)/); id = m ? m[1] : ''; }
    if (!id) return urlSure(s);
    return 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + w + ',h_' + h + ',al_c,q_80,enc_auto/image.jpg';
  }
  const vecteur = (v) => { const s = String(v || ''); const m = s.match(/^wix:vector:\/\/v1\/([^/]+)/); return m ? 'https://static.wixstatic.com/shapes/' + m[1] : urlSure(s); };
  const lien = (url, lang) => { const u = urlSure(url); return (u && lang === 'en' && /^\/(?!en\/)/.test(u)) ? '/en' + u : u; };
  const externe = (url) => /^https?:\/\//.test(url) && !/^https?:\/\/(www\.)?routedurhum\.com/.test(url);
   
  const focale = (v) => { const m = String(v || '').match(/^\s*(\d{1,3})\s*[,;]\s*(\d{1,3})\s*$/); return m ? ' style="object-position:' + Math.min(100, +m[1]) + '% ' + Math.min(100, +m[2]) + '%"' : ''; };
  const lire = (val, repli) => { try { const v = JSON.parse(val || ''); return v == null ? repli : v; } catch (e) { return repli; } };


  







  const MEM_CLE = 'rdrMemMenuCartesV1';
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

  class MenuCartes extends HTMLElement {
    constructor() { super(); this._reglages = null; this._cartes = []; this._skippers = []; this._lang = memLangue(); this._obs = null; this._brut = { reglages: null, cartes: null, skippers: null }; this._depuisMemoire = false; this._garde = null; this._abandon = false; }
    


    _manque() {
      const d = this._reglages;
      if (!d) return this._brut.reglages == null;
      return d.disposition === 'skippers' ? this._brut.skippers == null : this._brut.cartes == null;
    }
    _enAttente() { return !this._abandon && this._manque(); }
    _armerGarde() {
      if (this._garde || !this._enAttente()) return;
      this._garde = setTimeout(() => {
        this._garde = null;
        if (!this._manque()) return;
        this._abandon = true;
        if (this.isConnected) this._render();
      }, ATTENTE_MAX_MS);
    }
    _squelCartes(n, sk) {
      const c = sk ? '<span class="mc-squel mc-squel--sk"><i class="mc-s-l1"></i><i class="mc-s-l2"></i></span>' : '<span class="mc-squel"><i class="mc-s-l1"></i><i class="mc-s-l2"></i></span>';
      return Array.from({ length: n }, () => c).join('');
    }
    _corpsSquelette(sk) {
      return sk
        ? '<div class="mc-corps mc-corps--skippers" aria-busy="true" aria-hidden="true">' + this._squelCartes(6, true) + '</div>'
        : '<div class="mc-corps mc-corps--cartes" style="--n:' + CARTES_SQUELETTE + '" aria-busy="true" aria-hidden="true">' + this._squelCartes(CARTES_SQUELETTE) + '</div>';
    }
    

    _rang() { return Array.prototype.indexOf.call(document.querySelectorAll('rdr-menu-cartes'), this); }
    _memSuffixe() { return this._rang() + ':' + this._lang; }
    _appliquer(nom, val) {
      this._brut[nom] = val;
      if (nom === 'reglages') { const r = lire(val, null); this._reglages = r && typeof r === 'object' ? r : null; }
      if (nom === 'cartes') { const l = lire(val, []); this._cartes = Array.isArray(l) ? l.filter(c => c && c.titre) : []; }
      if (nom === 'skippers') { const l = lire(val, []); this._skippers = Array.isArray(l) ? l : []; }
    }
    _depuisLaMemoire() {
      if (this._brut.reglages != null || this._depuisMemoire || memTelephone()) return;
      const m = memLire(this._memSuffixe());
      if (!m || typeof m.reglages !== 'string') return;
      this._depuisMemoire = true;
      this._appliquer('reglages', m.reglages);
      if (typeof m.cartes === 'string') this._appliquer('cartes', m.cartes);
      if (typeof m.skippers === 'string') this._appliquer('skippers', m.skippers);
    }
    _memoriser() {
      if (!this._brut.reglages) return;
      memEcrire(this._memSuffixe(), { reglages: this._brut.reglages, cartes: this._brut.cartes, skippers: this._brut.skippers });
    }
    static get observedAttributes() { return ['lang', 'reglages', 'cartes', 'skippers', 'vague', 'fond']; }
    attributeChangedCallback(nom, avant, val) {
      if (avant === val) return;
      








      if (val === null && (nom === 'reglages' || nom === 'cartes' || nom === 'skippers' || nom === 'lang')) return;
      


      if (nom === 'lang') { const l = val === 'en' ? 'en' : 'fr'; if (l === this._lang) return; this._lang = l; }
      if (nom === 'vague' || nom === 'fond') return;    
      if (nom === 'reglages' || nom === 'cartes' || nom === 'skippers') {
        

        const identique = val === this._brut[nom];
        if (nom === 'reglages') this._depuisMemoire = false;
        if (!identique) this._appliquer(nom, val); else this._brut[nom] = val;
        if (this.isConnected) this._memoriser();
        if (identique) return;
      }
      if (this.isConnected) this._render();
    }
    connectedCallback() { this._depuisLaMemoire(); if (!this._depuisMemoire) this._memoriser(); this._render(); this._armerGarde(); }
    disconnectedCallback() {
      if (this._garde) { clearTimeout(this._garde); this._garde = null; }
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._veille) { this._veille.disconnect(); this._veille = null; }
    }
    get _t() { return TXT[this._lang]; }
    _emit(url) { if (url) this.dispatchEvent(new CustomEvent('mc-navigate', { detail: { url }, bubbles: true, composed: true })); }
    













    _aller(url) {
      if (!url) return;
      if (/^\/(?!\/)/.test(url) || url.indexOf(location.origin + '/') === 0) {
        try { this._naviguer(url); return; } catch (e) {   }
      }
      this._emit(url);
    }
    _naviguer(url) { window.location.assign(url); }

    _carte(c, classe) {
      const t = this._t; const bientot = c.etat === 'bientot';
      const url = bientot ? '' : lien(c.lien, this._lang);
      const ext = !!url && externe(url);
      const enBande = !bientot && !!c.pastille && c.pastilleEmplacement === 'bande';
      const icone = c.pastilleIcone && ICO[c.pastilleIcone] ? ICO[c.pastilleIcone] : '';
      const pastille = bientot
        ? '<span class="mc-pastille mc-pastille--jaune">' + ICO.horloge + t.bientot + '</span>'
        : (c.pastille && !enBande ? '<span class="mc-pastille' + (STYLES_PASTILLE[c.pastilleStyle] || '') + '">' + icone + esc(c.pastille) + '</span>' : '<span></span>');
      const bande = enBande ? '<div class="mc-bande mc-bande--' + (c.pastilleStyle || 'teal') + '">' + icone + esc(c.pastille) + '</div>' : '';
      const bandeau = c.format === 'bandeau';
      const tag = url ? 'a' : 'div';
      return '<' + tag + ' class="mc-carte ' + (classe || '') + (c.format === 'grande' ? ' mc-carte--grande' : '') + (bandeau ? ' mc-carte--bandeau' : '') + (bientot ? ' mc-carte--bientot' : '') + (enBande ? ' mc-carte--bande' : '') + '" '
        + (url ? 'href="' + esc(url) + '" data-url="' + esc(url) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') : 'aria-disabled="true"') + '>'
        + '<img class="mc-img" data-src="' + image(c.image, bandeau ? 640 : 800, bandeau ? 240 : 560) + '" alt=""' + focale(c.focale) + '>'
        + '<div class="mc-haut">' + pastille + (ext ? '<span class="mc-externe" title="' + t.externe + '">' + ICO.externe + '</span>' : '') + '</div>'
        + '<div class="mc-txt"><h4>' + esc(c.titre) + '</h4>' + (c.sousTitre ? '<p>' + esc(c.sousTitre) + '</p>' : '') + (url ? '<span class="mc-lire">' + t.decouvrir + ICO.fleche + '</span>' : '') + '</div>' + bande
        + '</' + tag + '>';
    }
    _skipper(s, i) {
      const cfg = CLASSES[(s.classes && s.classes.nom) || ''] || {};
      const cc = /^#[0-9a-f]{3,8}$/i.test((s.classes && s.classes.couleur) || '') ? s.classes.couleur : (cfg.c || '#5dbfc0');
      const nom = String(s.nom || '').trim(); const url = s.ficheActive === true ? lien(s['link-skippers-prenomNom'] || '', this._lang) : '';
      const photo = urlSure(s.photoVignette || ''); const drapeau = vecteur(s.drapeau || '');
      return '<div class="sk" ' + (url ? 'data-url="' + esc(url) + '" role="button" tabindex="0"' : '') + ' style="--cc:' + cc + ';--rot:' + ROTATIONS[i % ROTATIONS.length] + 'deg" aria-label="' + esc(s.prenom) + ' ' + esc(nom) + '">'
        + '<div class="sk-flip"><div class="sk-face sk-front">' + (photo ? '<img class="sk-img" data-src="' + esc(photo) + '" alt="">' : '')
        + '<div class="sk-ov"><div class="sk-prenom">' + (drapeau ? '<img data-src="' + esc(drapeau) + '" alt="">' : '') + esc(s.prenom) + '</div>'
        + '<div class="sk-nom" data-len="' + nom.length + '"' + (nom.length > 14 ? ' data-long="1"' : '') + '>' + esc(nom) + '</div>'
        + (s.bateau ? '<div class="sk-bateau">' + esc(s.bateau) + '</div>' : '') + '</div></div>'
        + '<div class="sk-face sk-back"></div>'
        + (cfg.icone ? '<div class="sk-classe"><img data-src="' + cfg.icone + '" alt=""></div>' : '') + '</div></div>';
    }

     
    _squeletteComplet() {
      return '<style>' + CSS + '</style><img class="mc-fond" src="https://static.wixstatic.com/shapes/df962b_ab123c0a04db4300ace44b9c6f6e6e7e.svg" alt="" aria-hidden="true"><div class="mc-vague" aria-hidden="true"></div><div class="mc" aria-busy="true">'
        + '<div class="mc-tete" aria-hidden="true"><div><span class="mc-s mc-s-titre"></span><span class="mc-s mc-s-sous"></span></div></div>'
        + this._corpsSquelette(false)
        + '<div class="mc-pied" aria-hidden="true"><span></span><span class="mc-s mc-s-btn"></span></div></div>';
    }

    _render() {
      const d = this._reglages;
      if (!d) {
        if (this._enAttente()) { this.innerHTML = this._squeletteComplet(); this._veiller(); }
        else {
          

          if (this._veille) { this._veille.disconnect(); this._veille = null; }
          this.innerHTML = '';
        }
        return;
      }
      const cartes = this._cartes;
      let corps = '';
      if (d.disposition === 'skippers' && this._enAttente()) {
        corps = this._corpsSquelette(true);
      } else if (d.disposition !== 'skippers' && this._enAttente()) {
        corps = this._corpsSquelette(false);
      } else if (d.disposition === 'skippers') {
        corps = this._skippers.length
          ? '<div class="mc-corps mc-corps--skippers">' + this._skippers.slice(0, 6).map((s, i) => this._skipper(s, i)).join('') + '</div>'
          : '<div class="mc-vide"></div>';
      } else {
        const principales = cartes.filter(c => !c.groupe); const groupees = cartes.filter(c => c.groupe);
        const large = principales.length <= 2 ? 'mc-carte--large' : '';
        const visuel = urlSure(d.visuel || '');
        if (visuel && principales.length === 2) {
          corps = '<div class="mc-corps mc-corps--visuel">' + this._carte(principales[0], large) + '<div class="mc-visuel"><img data-src="' + esc(visuel) + '" alt=""></div>' + this._carte(principales[1], large) + '</div>';
        } else if (groupees.length) {
          corps = '<div class="mc-corps mc-corps--groupe"><div class="mc-grille" style="--n:' + principales.length + '">' + principales.map(c => this._carte(c)).join('') + '</div>'
            + '<div class="mc-groupe"><h3 class="mc-groupe-titre">' + esc(groupees[0].groupe) + '</h3><div class="mc-groupe-liste" style="--n:' + groupees.length + '">' + groupees.map(c => this._carte(c)).join('') + '</div></div></div>';
        } else {
          const colonnes = principales.reduce((n, c) => n + (c.format === 'grande' ? 2 : 1), 0);
          corps = principales.length
            ? '<div class="mc-corps mc-corps--cartes" style="--n:' + Math.min(6, Math.max(colonnes, 1)) + '">' + principales.map(c => this._carte(c, large)).join('') + '</div>'
            : '<div class="mc-vide"></div>';
        }
      }
      const bl = lien(d.boutonLien || '', this._lang);
      const bouton = d.boutonLibelle && bl ? '<a class="mc-btn" href="' + esc(bl) + '" data-url="' + esc(bl) + '">' + esc(d.boutonLibelle) + ICO.bouton + '</a>' : '';
      this.innerHTML = '<style>' + CSS + '</style><img class="mc-fond" src="https://static.wixstatic.com/shapes/df962b_ab123c0a04db4300ace44b9c6f6e6e7e.svg" alt="" aria-hidden="true"><div class="mc-vague" aria-hidden="true"></div><div class="mc">'
        + '<div class="mc-tete"><div><h2 class="mc-titre">' + esc(d.titre) + '</h2>' + (d.sousTitre ? '<p class="mc-sous">' + esc(d.sousTitre) + '</p>' : '') + '</div></div>'
        + corps
        + '<div class="mc-pied"><span class="mc-pied-note">' + esc(d.note || '') + '</span>' + bouton + '</div></div>';
      this._brancher();
      this._veiller();
    }
    







    _veiller() {
      if (this._veille || typeof MutationObserver !== 'function') return;
      this._veille = new MutationObserver(() => { if (this.isConnected && !this.childElementCount) this._render(); });
      this._veille.observe(this, { childList: true });
    }

    _brancher() {
      this.querySelectorAll('[data-url]').forEach(a => {
        a.addEventListener('click', (e) => {
          if (a.getAttribute('target') === '_blank') return;
          if (a.tagName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return;
          e.preventDefault(); this._aller(a.dataset.url);
        });
        a.addEventListener('keydown', (e) => { if (a.tagName !== 'A' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); this._aller(a.dataset.url); } });
      });
      


      if (this._obs) this._obs.disconnect();
      const reveler = () => {
        this.querySelectorAll('img[data-src]').forEach(i => { i.src = i.dataset.src; i.removeAttribute('data-src'); });
        this.querySelectorAll('.sk-flip').forEach((f, i) => setTimeout(() => f.classList.add('est-la'), i * 150));
         
        this.querySelectorAll('.mc-carte').forEach((c, i) => setTimeout(() => c.classList.add('est-la'), 60 + i * 110));
        this.querySelectorAll('.mc-visuel').forEach(v => v.classList.add('est-la'));
      };
      if (typeof IntersectionObserver !== 'function') { reveler(); return; }
      this._obs = new IntersectionObserver((entrees) => { if (entrees.some(e => e.isIntersecting)) { reveler(); this._obs.disconnect(); this._obs = null; } }, { threshold: 0.05 });
      this._obs.observe(this);
    }
  }
  window.customElements.define('rdr-menu-cartes', MenuCartes);
})();
})();
;(function(){
if (!customElements.get('timer-clock-simple')) {
  class TimerClockSimple extends HTMLElement {
    static get observedAttributes() { return ['target', 'color']; }

    constructor() {
      super();
      this._ints = [];
      this._targetISO = this.getAttribute('target') || '2026-11-01T12:02:00Z';
      this._color = this.getAttribute('color') || '#ffffff';
    }

    connectedCallback() {
       
      if (!this._mounted) {
        this._mounted = true;

        this.style.display = 'block';
        this.style.width = '100%';
        this.style.height = '100%';
        this.style.color = this._color;

        this.innerHTML = `
        <style>
          .outer {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          .timer {
            display: flex;
            align-items: baseline;
            justify-content: center;
            gap: 4px;
            white-space: nowrap;
            font-family: "Montserrat", sans-serif;
            text-transform: uppercase;
            line-height: 1;
            font-variant-numeric: tabular-nums;
            font-feature-settings: "tnum" 1;
          }
          .days {
            font-weight: 800;
            font-size: 18px;
            letter-spacing: -0.02em;
            min-width: 3ch;
            text-align: right;
          }
          .val {
            font-weight: 700;
            font-size: 13px;
            min-width: 2ch;
            text-align: right;
          }
          .lab {
            font-weight: 500;
            font-size: 9px;
            letter-spacing: 0.06em;
            opacity: 0.75;
          }
          @media (max-width: 640px) {
            .timer { gap: 5px; }
            .days { font-size: 22px; }
            .val { font-size: 16px; }
            .lab { font-size: 11px; }
          }
          @media (max-width: 420px) {
            .timer { gap: 4px; }
            .days { font-size: 20px; }
            .val { font-size: 14px; }
            .lab { font-size: 10px; }
          }
        </style>
        <div class="outer">
          <div class="timer">
            <span class="days" id="d">365</span>
            <span class="lab">j</span>
            <span class="val" id="h">00</span>
            <span class="lab">h</span>
            <span class="val" id="m">00</span>
            <span class="lab">m</span>
            <span class="val" id="s">00</span>
            <span class="lab">s</span>
          </div>
        </div>
      `;

        this.$d = this.querySelector('#d');
        this.$h = this.querySelector('#h');
        this.$m = this.querySelector('#m');
        this.$s = this.querySelector('#s');

        this._target = new Date(this._targetISO).getTime();
      }

       
       
       
      this._start();
    }

    attributeChangedCallback(n, o, v) {
      if (o === v) return;
      if (n === 'target') {
        this._targetISO = v || this._targetISO;
        this._target = new Date(this._targetISO).getTime();
        this._tickTimer();
      }
      if (n === 'color') {
        this.style.color = v || '#ffffff';
      }
    }

    disconnectedCallback() {
      this._ints.forEach(clearInterval);
      this._ints = [];
    }

    _start() {
      this._ints.forEach(clearInterval);
      this._ints = [];
      this._tickTimer();
      this._ints.push(setInterval(() => this._tickTimer(), 1000));
    }

    _pad(n, w = 2) {
      return n.toString().padStart(w, '0');
    }

    _tickTimer() {
      if (!this.$d || !this.$h || !this.$m || !this.$s) return;
      const t = this._target;
      if (!t || isNaN(t)) return;

      const now = Date.now();
      const diff = t - now;
      const base = diff >= 0 ? diff : now - t;

      const d = Math.floor(base / 86400000);
      const h = Math.floor((base % 86400000) / 3600000);
      const m = Math.floor((base % 3600000) / 60000);
      const s = Math.floor((base % 60000) / 1000);

      this.$d.textContent = this._pad(d, 3);
      this.$h.textContent = this._pad(h);
      this.$m.textContent = this._pad(m);
      this.$s.textContent = this._pad(s);
    }
  }

  customElements.define('timer-clock-simple', TimerClockSimple);
}
})();
;(function(){
(function () {
  'use strict';
  

  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('alpina-clock')) return;

  



  const MEDIA = 'https://static.wixstatic.com/media/';
  const MODELE = {
    cadran: MEDIA + 'df962b_6f374b182ba647af8ba5b808bcd0fc67~mv2.avif',
    heure: MEDIA + 'df962b_23e0b40b8b8749a3af6a736bd3ad18fe~mv2.webp',
    minute: MEDIA + 'df962b_bfb9d81ed5494964851d188bc89ab132~mv2.webp',
    seconde: MEDIA + 'df962b_e5d91ebdb4fb431bb0a875a1bb72c7ab~mv2.webp',
    centreX: 46.243,
    centreY: 49.991
  };
  const FUSEAU = 'Europe/Paris';

  const CSS = 'alpina-clock{display:block;position:relative;width:100%;height:100%;aspect-ratio:1/1;overflow:hidden;contain:layout paint style;}' +
     
    'alpina-clock img.ac-couche{position:absolute;inset:0;display:block;width:100%;height:100%;max-width:none;min-width:0;margin:0;padding:0;border:0;object-fit:contain;pointer-events:none;user-select:none;-webkit-user-drag:none;}' +
    'alpina-clock img.ac-aiguille{transform-origin:' + MODELE.centreX + '% ' + MODELE.centreY + '%;}' +
    'alpina-clock .ac-h{z-index:3}alpina-clock .ac-m{z-index:4}alpina-clock .ac-s{z-index:5}';

  let formateur = null;
  function heureDeParis(d) {
    try {
      if (!formateur) formateur = new Intl.DateTimeFormat('en-US', { timeZone: FUSEAU, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const parts = formateur.formatToParts(d);
      const get = (k) => Number((parts.find(p => p.type === k) || {}).value || 0);
      return { h: get('hour') % 12, m: get('minute'), s: get('second') };
    } catch (e) {
       
      return { h: d.getHours() % 12, m: d.getMinutes(), s: d.getSeconds() };
    }
  }

  class AlpinaClock extends HTMLElement {
    constructor() {
      super();
      this._minuteur = null;
      this._visible = true;
      this._io = null;
       
      this._surVisibilite = () => { if (!document.hidden && this.el) this._afficher(); this._planifier(); };
    }

    connectedCallback() {
      if (!this.el) {
         
        this.innerHTML = '<style>' + CSS + '</style>';
        const couche = (cls, src) => {
          const i = document.createElement('img');
          i.className = 'ac-couche ' + cls; i.alt = ''; i.decoding = 'async'; i.draggable = false;
          i.setAttribute('aria-hidden', 'true');
          i.src = src;
          this.appendChild(i);
          return i;
        };
        this.el = {
          cadran: couche('ac-cadran', MODELE.cadran),
          h: couche('ac-aiguille ac-h', MODELE.heure),
          m: couche('ac-aiguille ac-m', MODELE.minute),
          s: couche('ac-aiguille ac-s', MODELE.seconde)
        };
      }
      if (typeof IntersectionObserver === 'function') {
        this._io = new IntersectionObserver((e) => { this._visible = e.some(x => x.isIntersecting); if (this._visible) this._afficher(); this._planifier(); });
        this._io.observe(this);
      }
      document.addEventListener('visibilitychange', this._surVisibilite);
      this._afficher();
      this._planifier();
    }

    disconnectedCallback() {
      this._arreter();
      if (this._io) { this._io.disconnect(); this._io = null; }
      document.removeEventListener('visibilitychange', this._surVisibilite);
    }

    

    _planifier() {
      this._arreter();
      if (!this._visible || document.hidden || !this.isConnected) return;
      const suivant = 1000 - (Date.now() % 1000) + 5;
      this._minuteur = setTimeout(() => { this._minuteur = null; this._afficher(); this._planifier(); }, suivant);
    }
    _arreter() { if (this._minuteur) { clearTimeout(this._minuteur); this._minuteur = null; } }

    _afficher() {
      const { h, m, s } = heureDeParis(new Date());
      this.el.h.style.transform = 'rotate(' + (h + m / 60) * 30 + 'deg)';
      this.el.m.style.transform = 'rotate(' + (m + s / 60) * 6 + 'deg)';
      this.el.s.style.transform = 'rotate(' + s * 6 + 'deg)';
    }
  }

  window.customElements.define('alpina-clock', AlpinaClock);
})();
})();
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
    let s = String(u).trim(); if (!s) return repli || '';
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
rdr-pied-haut button.pd-btn:hover{background:#fff;color:var(--pd-marine)}
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
rdr-pied-haut .pd-bloc:hover .pd-lab span{color:rgba(255,255,255,.9)}
rdr-pied-haut .pd-bloc:hover .pd-lab::before{background:linear-gradient(90deg,transparent,rgba(252,220,80,.5))}
rdr-pied-haut .pd-bloc:hover .pd-lab::after{background:linear-gradient(270deg,transparent,rgba(252,220,80,.5))}
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
}`;


  







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
      this._cle = null;
    }
    get _t() { return TXT[this._lang]; }

     
    _render() {
      const r = this._reglages; if (!r) return;
      


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
        + '</div>';
      this._brancher(idp);
      this._reveler();
      this._veiller();
    }
    _newsletter(r, t, idp) {
      const politique = urlSure(r.politiqueUrl, '/politique-de-condidentialité');
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
    '.rnf-cloche:hover{transform:translateY(-2px);background:var(--navy-2)}',
    

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
    '.rnf-volet-tout:hover{color:var(--navy)}',
    





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
    '.rnf-li[data-niv="marque"] .rnf-li-vu:hover{background:#fff;border-color:#fff;color:var(--navy)}',

     
    '.rnf-li[data-niv="eclat"]{background:linear-gradient(135deg,#12305A,var(--navy) 62%);',
    'border:1px solid rgba(252,241,80,.34);border-left:3px solid var(--amber);',
    'padding:12px 11px;box-shadow:inset 0 1px 0 rgba(255,255,255,.09)}',
    '.rnf-li[data-niv="eclat"] .rnf-li-t{color:#fff;font-size:13.5px}',
    '.rnf-li[data-niv="eclat"] .rnf-li-s{color:var(--amber);font-weight:700}',
    

    '.rnf-li[data-niv="eclat"] .rnf-li-art{width:48px;height:48px;background:none;border:0;',
    'filter:drop-shadow(0 0 12px rgba(252,241,80,.45))}',
    '.rnf-li[data-niv="eclat"] .rnf-li-art .rnf-pose{width:100%;height:100%}',
    '.rnf-li[data-niv="eclat"] .rnf-li-vu{border-color:rgba(255,255,255,.22);color:rgba(255,255,255,.66)}',
    '.rnf-li[data-niv="eclat"] .rnf-li-vu:hover{background:var(--amber);border-color:var(--amber);color:var(--navy)}',

    

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
    '.rnf-li-vu:hover{background:var(--teal-deep);border-color:var(--teal-deep);color:#fff}',
    '.rnf-li-vu svg{width:13px;height:13px}',

    







    '.rnf-li-hit{position:absolute;inset:0;z-index:1;background:none;border:0;padding:0;',
    'cursor:pointer;border-radius:inherit;-webkit-appearance:none;appearance:none}',
    '.rnf-li-hit:focus-visible{outline:2px solid var(--teal-deep);outline-offset:2px}',
    '.rnf-li[data-niv="marque"] .rnf-li-hit:focus-visible,',
    '.rnf-li[data-niv="eclat"] .rnf-li-hit:focus-visible{outline-color:var(--amber)}',
    '.rnf-li-vu{position:relative;z-index:2}',
    

    '.rnf-li{transition:border-color .15s,box-shadow .15s}',
    '.rnf-li:hover{border-color:var(--teal-deep);box-shadow:0 2px 10px rgba(10,26,53,.10)}',
    '.rnf-li[data-niv="marque"]:hover,.rnf-li[data-niv="eclat"]:hover{',
    'border-color:rgba(252,241,80,.5);box-shadow:0 3px 14px rgba(0,0,0,.28)}',
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
    '.rnf-x:hover{background:#EEF2F6;color:var(--navy)}',
    


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
    '.rnf-cta:hover{background:var(--navy-2)}',
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
    '.rnf-toast[data-badge] .rnf-x:hover{background:rgba(255,255,255,.1);color:#fff}',
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
    '.rnf-card[data-badge] .rnf-x:hover{background:transparent;color:#fff;border-color:var(--teal)}',
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
    '.rnf-card[data-badge] .rnf-cta:hover{background:#fff}',
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
