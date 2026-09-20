/* rdr-elements socle | source route-du-rhum e15c082 | rdr-menu-actus.js rdr-menu-cartes.js timer-clock-simple.js AlpinaClock.js rdr-pied-haut.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["socle"]="e15c082";performance.mark("rdr-elements:socle")}catch(e){}
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

  class MenuActus extends HTMLElement {
    constructor() {
      super();
      this._posts = []; this._lang = memLangue(); this._obs = null; this._brut = null; this._depuisMemoire = false;
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
    static get observedAttributes() { return ['posts', 'lang', 'vague', 'fond']; }
    attributeChangedCallback(nom, avant, val) {
      if (avant === val) return;
      if (nom === 'lang') this._lang = val === 'en' ? 'en' : 'fr';
      if (nom === 'posts') {
        

        const identique = val === this._brut;
        this._depuisMemoire = false;
        if (val) memEcrire(this._lang, { posts: val });
        if (identique) return;
        this._appliquerPosts(val);
      }
      if (nom === 'vague' || nom === 'fond') return;    
      if (this.isConnected) this._render();
    }
    connectedCallback() { this._depuisLaMemoire(); this._render(); }
    disconnectedCallback() {
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._veille) { this._veille.disconnect(); this._veille = null; }
    }

    get _t() { return TXT[this._lang]; }
    get _r() { return ROUTES[this._lang]; }
    _emit(url) { if (url) this.dispatchEvent(new CustomEvent('ma-navigate', { detail: { url }, bubbles: true, composed: true })); }

    

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

    _render() {
      const t = this._t; const maintenant = Date.now();
      const n = this._combien();
      const l = this._ordre(this._posts, maintenant).slice(0, n);
      const corps = l.length
        ? '<div class="ma-corps"><div class="ma-rail' + (n === 6 ? ' ma-rail--six' : '') + '">' + l.map((p, i) => this._carte(p, i === 0, maintenant)).join('') + '</div></div>'
        : '<div class="ma-vide">' + t.vide + '</div>';
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
      this.querySelectorAll('[data-url]').forEach(a => a.addEventListener('click', (e) => { e.preventDefault(); this._emit(a.dataset.url); }));
      

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
    constructor() { super(); this._reglages = null; this._cartes = []; this._skippers = []; this._lang = memLangue(); this._obs = null; this._brut = { reglages: null, cartes: null, skippers: null }; this._depuisMemoire = false; }
    

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
      if (nom === 'lang') this._lang = val === 'en' ? 'en' : 'fr';
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
    connectedCallback() { this._depuisLaMemoire(); if (!this._depuisMemoire) this._memoriser(); this._render(); }
    disconnectedCallback() {
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      if (this._veille) { this._veille.disconnect(); this._veille = null; }
    }
    get _t() { return TXT[this._lang]; }
    _emit(url) { if (url) this.dispatchEvent(new CustomEvent('mc-navigate', { detail: { url }, bubbles: true, composed: true })); }

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

    _render() {
      const d = this._reglages;
      if (!d) { this.innerHTML = ''; return; }
      const cartes = this._cartes;
      let corps = '';
      if (d.disposition === 'skippers') {
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
        a.addEventListener('click', (e) => { if (a.getAttribute('target') === '_blank') return; e.preventDefault(); this._emit(a.dataset.url); });
        a.addEventListener('keydown', (e) => { if (a.tagName !== 'A' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); this._emit(a.dataset.url); } });
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
    static get observedAttributes() { return ['lang', 'reglages', 'partenaires', 'pret', 'newsletter-etat']; }
    attributeChangedCallback(nom, avant, val) {
      if (avant === val) return;
      if (nom === 'lang') { this._lang = val === 'en' ? 'en' : 'fr'; }
      if (nom === 'reglages') { this._brut.reglages = val; this._depuisMemoire = false; try { this._reglages = JSON.parse(val || 'null'); } catch (e) { this._reglages = null; } if (val == null) { this._cle = null; this._etatNews = 'repos'; this._attente = null; } if (val && this.isConnected) this._memoriser(); }
      if (nom === 'partenaires') { this._brut.partenaires = val; try { const l = JSON.parse(val || '[]'); this._partenaires = Array.isArray(l) ? l : []; } catch (e) { this._partenaires = []; } if (this.isConnected) this._memoriser(); }
      if (nom === 'pret') { this._pret = val === 'oui'; if (this._pret && this._attente) this._emettre(this._attente); return; }
      if (nom === 'newsletter-etat') { this._reponse(String(val || '').replace(/#.*$/, '')); return; }
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
        const url = urlSure(p.logoBlanc); if (!url) return '';
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
