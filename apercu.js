/* rdr-elements apercu | source route-du-rhum c28fb79 | rdr-accueil-apercu.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["apercu"]="c28fb79";performance.mark("rdr-elements:apercu")}catch(e){}
;(function(){
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements) return;
  if (customElements.get('rdr-dernieres-infos')) return;

  const SOURCE = '/_functions/dernieresInfos';
  const CADENCE = 120000;
  const CADENCE_MAX = 900000;
  const ALEA = 20000;
  const MEMOIRE = 30000;
  const VITESSE = 52;
  const MAX = 6;
  const TOUTES = 'toutes';
  const PAGES = ['accueil', 'classement', 'cartographie', 'carte-village', 'suivre-depart', 'programmation', 'venir', 'faq', 'espace-rhum', 'actualites'];
  const RANG = { alerte: 0, vigilance: 1, info: 2 };
  const STOCK = 'rdrDernieresInfosV2:';

  const T = {
    fr: {
      region: 'Dernières infos', etiquette: 'Dernières infos', info: 'Info', vigilance: 'Attention', alerte: 'Alerte',
      suite: 'En savoir plus', onglet: 'nouvel onglet',
      pause: 'Mettre en pause le défilement des infos', reprendre: 'Reprendre le défilement des infos',
      prec: 'Info précédente', suiv: 'Info suivante', sur: (i, n) => i + ' sur ' + n,
      nouvelle: 'Nouvelle info', nouvelleVigilance: 'Attention', nouvelleAlerte: 'Alerte',
      ranger: 'Ranger les dernières infos'
    },
    en: {
      region: 'Latest news', etiquette: 'Latest news', info: 'Update', vigilance: 'Caution', alerte: 'Alert',
      suite: 'Read more', onglet: 'new tab',
      pause: 'Pause the news ticker', reprendre: 'Resume the news ticker',
      prec: 'Previous update', suiv: 'Next update', sur: (i, n) => i + ' of ' + n,
      nouvelle: 'New update', nouvelleVigilance: 'Caution', nouvelleAlerte: 'Alert',
      ranger: 'Hide the latest news'
    }
  };

  const svg = (corps, cls) => '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + corps + '</svg>';
   
  const ICO = {
    megaphone: '<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/>',
    alerte: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    fleche: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    pause: '<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',
    lecture: '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
    gauche: '<path d="m15 18-6-6 6-6"/>',
    droite: '<path d="m9 18 6-6-6-6"/>',
    ranger: '<path d="m18 15-6-6-6 6"/>'
  };

  const P = 'rdr-dernieres-infos ';
  const CSS =
    'rdr-dernieres-infos{display:block;position:relative;width:100%;line-height:normal;text-align:left}' +
    P + '.rdi-vh{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}' +
    P + '.rdi{--rdi-fond:#FCF150;--rdi-texte:#0E111D;--rdi-h:42px;--rdi-voile:rgba(14,17,29,.09);position:relative;display:flex;align-items:stretch;min-height:var(--rdi-h);background:transparent;color:var(--rdi-texte);font-family:"Montserrat",montserrat,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-size:14px;font-weight:600;-webkit-font-smoothing:antialiased;overflow:hidden;box-sizing:border-box}' +
    P + '.rdi *,' + P + '.rdi *::before,' + P + '.rdi *::after{box-sizing:border-box}' +
    P + '.rdi--alerte{--rdi-fond:#D62839;--rdi-texte:#fff;--rdi-voile:rgba(255,255,255,.16)}' +
    P + '.rdi ul{list-style:none;margin:0;padding:0}' +
    P + '.rdi a{color:inherit;text-decoration:none}' +
    P + '.rdi button{font:inherit;color:inherit;background:none;border:0;margin:0;padding:0;cursor:pointer}' +
    P + '.rdi svg{display:block;flex:none}' +
     
    P + '.rdi-etiq{position:relative;z-index:2;flex:none;display:flex;align-items:center;gap:9px;padding:0 30px 0 clamp(14px,2.2vw,30px);background:linear-gradient(to bottom right,#0E111D 50%,var(--rdi-fond) calc(50% + .5px)) right/14px 100% no-repeat,linear-gradient(#0E111D,#0E111D) left/calc(100% - 13.5px) 100% no-repeat;color:#FCF150;white-space:nowrap}' +
    P + '.rdi-etiq svg{width:18px;height:18px}' +
    P + '.rdi-etiq-txt{font-family:"Varien","Archivo Black",Impact,sans-serif;font-style:italic;font-weight:400;font-size:15px;line-height:1;text-transform:uppercase;letter-spacing:.01em;padding-top:2px}' +
    P + '.rdi-nb{display:grid;place-items:center;min-width:20px;height:20px;padding:0 6px;border-radius:10px;background:#FCF150;color:#0E111D;font-size:11px;font-weight:800;font-style:normal;line-height:1}' +
    P + '.rdi--alerte .rdi-etiq{color:#fff}' +
    P + '.rdi--alerte .rdi-nb{background:#D62839;color:#fff}' +
     
    P + '.rdi-fenetre{position:relative;flex:1 1 auto;min-width:0;display:flex;align-items:center;overflow:hidden;background:var(--rdi-fond)}' +
    P + '.rdi--defile .rdi-fenetre::before,' + P + '.rdi--defile .rdi-fenetre::after{content:"";position:absolute;z-index:1;top:0;bottom:0;pointer-events:none}' +
    P + '.rdi--defile .rdi-fenetre::before{left:0;width:16px;background:linear-gradient(90deg,var(--rdi-fond),transparent)}' +
    P + '.rdi--defile .rdi-fenetre::after{right:0;width:32px;background:linear-gradient(270deg,var(--rdi-fond),transparent)}' +
    P + '.rdi-piste{display:flex;flex:none;align-items:center;min-width:100%;padding-left:22px}' +
    P + '.rdi--defile .rdi-piste{will-change:transform}' +
    P + '.rdi-liste{display:flex;flex:none;align-items:center}' +
    P + '.rdi-li{display:flex;flex:none;align-items:center}' +
    P + '.rdi-li::after{content:"";flex:none;width:5px;height:15px;margin:0 24px;border-radius:1px;background:currentColor;opacity:.32;transform:skewX(-20deg)}' +
    P + '.rdi--seule .rdi-li::after,' + P + '.rdi--pas .rdi-li::after,' + P + '.rdi--fixe .rdi-li:last-child::after{display:none}' +
    P + '.rdi-item{display:flex;align-items:center;min-height:var(--rdi-h);padding:0 4px 0 0;white-space:nowrap;line-height:1.3}' +
    P + '.rdi-corps{display:flex;align-items:center;gap:10px;min-width:0}' +
    P + 'a.rdi-item:focus{outline:none}' +
    P + 'a.rdi-item:focus-visible{outline:2px solid currentColor;outline-offset:-5px;border-radius:4px}' +
    P + '.rdi-badge{flex:none;display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 8px;border-radius:3px 9px 3px 9px;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;line-height:1}' +
    P + '.rdi-badge svg{width:13px;height:13px}' +
    


    P + '.rdi-badge--alerte{background:#fff;color:#D62839}' +
    P + '.rdi-badge--vigilance{background:#0E111D;color:#FCF150}' +
    P + '.rdi-badge--info{background:#FCF150;color:#0E111D}' +
    P + '.rdi-texte{min-width:0}' +
    P + '.rdi-titre{font-weight:800}' +
    




    P + '.rdi-suite{flex:none;display:inline-block;font-weight:800;white-space:nowrap}' +
    P + '.rdi-suite-txt{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}' +
    P + '.rdi .rdi-suite svg{display:inline-block;width:1.05em;height:1.05em;margin-left:5px;vertical-align:-.17em;transition:transform .2s ease}' +
    '@media (hover:hover){' + P + 'a.rdi-item:hover .rdi-suite-txt{text-decoration-thickness:2px}' + P + 'a.rdi-item:hover .rdi-suite svg{transform:translateX(2px)}}' +
    '@media (prefers-reduced-motion:reduce){' + P + '.rdi .rdi-suite svg{transition:none}}' +
     
    P + '.rdi--seule .rdi-li{flex:1 1 auto;min-width:0}' +
    P + '.rdi--seule .rdi-liste,' + P + '.rdi--seule .rdi-piste{flex:1 1 auto;min-width:0}' +
    P + '.rdi--seule .rdi-item,' + P + '.rdi--pas .rdi-item{display:block;flex:1 1 auto;min-width:0;min-height:0;white-space:normal;padding-top:6px;padding-bottom:6px}' +
    P + '.rdi--seule .rdi-corps,' + P + '.rdi--pas .rdi-corps{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.35}' +
    P + '.rdi--seule .rdi-item{padding-right:clamp(14px,2.2vw,30px)}' +
    P + '.rdi--seule .rdi-badge,' + P + '.rdi--pas .rdi-badge{display:inline-flex;vertical-align:-1.5px;margin-right:9px}' +
    P + '.rdi--seule .rdi-texte,' + P + '.rdi--pas .rdi-texte{display:inline}' +
    P + '.rdi--seule .rdi-suite,' + P + '.rdi--pas .rdi-suite{display:inline;margin-left:9px}' +
     
    P + '.rdi--pas .rdi-liste,' + P + '.rdi--pas .rdi-piste{flex:1 1 auto;min-width:0}' +
    P + '.rdi--pas .rdi-li{flex:1 1 auto;min-width:0}' +
    P + '.rdi--pas .rdi-li[hidden]{display:none}' +
     
    P + '.rdi-cmd{position:relative;z-index:2;flex:none;display:flex;align-items:center;gap:2px;padding:0 clamp(8px,1.4vw,18px) 0 6px;background:var(--rdi-fond)}' +
    P + '.rdi--fixe .rdi-btn[data-rdi-pause]{display:none}' +
    P + '.rdi-btn{display:grid;place-items:center;width:32px;height:32px;border-radius:3px 12px 3px 12px;background:var(--rdi-voile)}' +
    P + '.rdi-btn svg{width:15px;height:15px}' +
    P + '.rdi-btn[data-rdi-pause] svg{fill:currentColor;stroke:none}' +
    P + '.rdi-btn:focus{outline:none}' +
    P + '.rdi-btn:focus-visible{outline:2px solid currentColor;outline-offset:2px}' +
    '@media (hover:hover){' + P + '.rdi-btn:hover{background:var(--rdi-texte);color:var(--rdi-fond)}}' +
    P + '.rdi-compte{min-width:46px;text-align:center;font-size:12px;font-weight:800;font-variant-numeric:tabular-nums}' +
     
    '@media (min-width:761px) and (max-height:820px){' + P + '.rdi{--rdi-h:38px;font-size:13.5px}' + P + '.rdi-etiq-txt{font-size:14px}}' +
     
    '@media (max-width:760px){' + P + '.rdi{--rdi-h:40px;font-size:13px}' + P + '.rdi-etiq{gap:7px;padding:0 24px 0 14px}' + P + '.rdi-etiq-txt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' + P + '.rdi-corps{gap:8px}' + P + '.rdi-piste{padding-left:18px}' + P + '.rdi--seule .rdi-item{padding-right:12px}' + P + '.rdi-suite-txt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' + P + '.rdi-badge{height:20px;padding:0 6px;font-size:9.5px;letter-spacing:.1em}' + P + '.rdi-li::after{margin:0 18px}' + P + '.rdi-cmd{padding-right:8px}' + P + '.rdi-compte{min-width:38px;font-size:11px}}' +
     
    '@media (orientation:landscape) and (max-height:500px){' + P + '.rdi{--rdi-h:34px;font-size:12.5px}' + P + '.rdi-etiq-txt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' + P + '.rdi--seule .rdi-item,' + P + '.rdi--pas .rdi-item{padding-top:0;padding-bottom:0}' + P + '.rdi--seule .rdi-corps,' + P + '.rdi--pas .rdi-corps{-webkit-line-clamp:1}' + P + '.rdi-btn{width:28px;height:28px}}';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const instant = (v) => { if (v == null || v === '') return null; const t = new Date(v).getTime(); return isNaN(t) ? null : t; };

  function langueDe(el) {
    const a = String(el.getAttribute('lang') || '').toLowerCase();
    if (a === 'fr' || a === 'en') return a;
    const l = String(document.documentElement.getAttribute('lang') || '').toLowerCase();
    return l.indexOf('en') === 0 || /^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr';
  }

   
  function adresse(lien, lang) {
    const l = String(lien || '').trim();
    if (/^https:\/\/[^\s"'<>]+$/i.test(l)) {
      return { href: l, externe: !/^https:\/\/(www\.)?routedurhum\.com([/?#]|$)/i.test(l) };
    }
    if (/^\/(?!\/)[^\s"'<>\\]*$/.test(l)) {
      let p = l;
      if (lang === 'en' && !/^\/en([/?#]|$)/.test(p)) p = '/en' + (p === '/' ? '' : p);
      return { href: p, externe: false };
    }
    return null;
  }

  const niveauDe = (v) => (v === 'alerte' || v === 'rouge' ? 'alerte' : v === 'vigilance' || v === 'jaune' ? 'vigilance' : 'info');
  


  const pagesDe = (v) => {
    const l = (Array.isArray(v) ? v : []).map((p) => (p === 'partout' ? TOUTES : String(p == null ? '' : p).trim())).filter(Boolean);
    return l.length ? l : [TOUTES];
  };

   
  function normaliser(jeu) {
    const brut = Array.isArray(jeu) ? jeu : (jeu && Array.isArray(jeu.infos) ? jeu.infos : []);
    const vus = new Set();
    const out = [];
    brut.forEach((x, i) => {
      if (!x || typeof x !== 'object') return;
      const texte = String(x.texte == null ? '' : x.texte).replace(/\s+/g, ' ').trim().slice(0, 280);
      if (!texte) return;
      const id = String(x.id == null || x.id === '' ? 'info-' + i : x.id).slice(0, 80);
      if (vus.has(id)) return;
      vus.add(id);
      

      const titre = String(x.titre == null ? '' : x.titre).replace(/\s+/g, ' ').trim();
      out.push({
        id, texte, rang: i,
        titre: titre && texte.indexOf(titre) === 0 ? titre : '',
        niveau: niveauDe(x.niveau),
        pages: pagesDe(x.pages),
        langue: x.langue === 'fr' || x.langue === 'en' ? x.langue : '',
        lien: String(x.lien || ''),
        libelleLien: String(x.libelleLien == null ? '' : x.libelleLien).replace(/\s+/g, ' ').trim().slice(0, 60),
        debut: instant(x.debut), fin: instant(x.fin)
      });
    });
    out.sort((a, b) => (RANG[a.niveau] - RANG[b.niveau]) || (a.rang - b.rang));
    return out;
  }
  const enCours = (x, t) => (x.debut == null || x.debut <= t) && (x.fin == null || x.fin > t);
  const pourPage = (l, page) => l.filter((x) => x.pages.indexOf(TOUTES) >= 0 || x.pages.indexOf(page) >= 0);
   
  const cadenceDe = (jeu) => {
    const s = Number(jeu && jeu.relire);
    return isFinite(s) && s > 0 ? Math.min(CADENCE_MAX, Math.max(CADENCE, s * 1000)) : CADENCE;
  };

   
  function stockLire(lang) {
    try {
      const v = JSON.parse(window.localStorage.getItem(STOCK + lang) || 'null');
      return v && typeof v.t === 'number' && v.jeu && typeof v.jeu === 'object' ? v : null;
    } catch (e) { return null; }
  }
  function stockEcrire(lang, jeu, t) {
    try { window.localStorage.setItem(STOCK + lang, JSON.stringify({ t, jeu })); } catch (e) {   }
  }

   
  const lectures = new Map();
  function lireSource(url, lang) {
    const c = lectures.get(url);
    if (c && Date.now() - c.t < MEMOIRE) return c.p;
    const t = Date.now();
    const p = fetch(url, { credentials: 'omit' }).then((r) => {
      if (!r.ok) throw new Error('dernieresInfos ' + r.status);
      return r.json();
    }).then((jeu) => { stockEcrire(lang, jeu, t); return jeu; });
    lectures.set(url, { t, p });
    p.catch(() => lectures.delete(url));
    return p;
  }

  class RdrDernieresInfos extends HTMLElement {
    static get observedAttributes() { return ['infos', 'page', 'lang', 'rangeable']; }

    constructor() {
      super();
      this._pret = false;
      this._toutes = [];
      this._signature = null;
      this._nombre = 0;
      this._connues = null;
      this._pause = false;
      this._survol = false;
      this._focus = false;
      this._indice = 0;
      this._lu = 0;
      this._cadence = CADENCE;
      this._attente = false;
      this._etat = '';
      this._gardesMemoire = null;
    }

    connectedCallback() {
      if (!document.getElementById('rdr-dernieres-infos-css')) {
        const st = document.createElement('style');
        st.id = 'rdr-dernieres-infos-css';
        st.textContent = CSS;
        document.head.appendChild(st);
      }
      this._lang = langueDe(this);
      this._signature = null;
      if (!this._pret) {
        this._pret = true;
        this.innerHTML = '<p class="rdi-vh" role="status" aria-live="polite"></p><div class="rdi-hote"></div>';
        this._statut = this.firstElementChild;
        this._hote = this.lastElementChild;
        this.addEventListener('click', (e) => this._clic(e));
        this.addEventListener('focusin', (e) => this._focusDedans(e));
        


        this.addEventListener('scroll', (e) => { const n = e.target; if (n && n.classList && (n.classList.contains('rdi-fenetre') || n.classList.contains('rdi')) && n.scrollLeft) n.scrollLeft = 0; }, true);
        this.addEventListener('focusout', (e) => { if (!this.contains(e.relatedTarget)) { this._focus = false; this._jouer(); } });
        this.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { this._survol = true; this._jouer(); } });
        this.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { this._survol = false; this._jouer(); } });
      }
      this._visibilite = () => this._surVisibilite();
      document.addEventListener('visibilitychange', this._visibilite);
      this._stock = (e) => this._surStock(e);
      window.addEventListener('storage', this._stock);
      this._mqReduit = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
      this._surReduit = () => { this._signature = null; this._peindre(); };
      if (this._mqReduit && this._mqReduit.addEventListener) this._mqReduit.addEventListener('change', this._surReduit);
      if (this.hasAttribute('infos')) this._depuisAttribut();
      else this._lire();
    }

    disconnectedCallback() {
      document.removeEventListener('visibilitychange', this._visibilite);
      window.removeEventListener('storage', this._stock);
      if (this._mqReduit && this._mqReduit.removeEventListener) this._mqReduit.removeEventListener('change', this._surReduit);
      clearTimeout(this._minuteur);
      clearTimeout(this._bascule);
      this._arreterDefilement();
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres || !this._pret || !this.isConnected) return;
      if (nom === 'infos') {
        if (apres == null) { this._toutes = []; this._signature = null; this._peindre(); this._lire(); }
        else this._depuisAttribut();
      } else if (nom === 'lang') {
        this._lang = langueDe(this);
        this._signature = null;
        if (this.hasAttribute('infos')) this._peindre(); else { this._lu = 0; this._lire(); }
      } else if (nom === 'page') {
        this._signature = null;
        if (this.hasAttribute('infos')) this._depuisAttribut(); else { this._lu = 0; this._lire(); }
      } else if (nom === 'rangeable') {
        this._signature = null;
        this._peindre();
      }
    }

     
    _cleRange() { return 'rdrInfosRangees:' + String(this.getAttribute('page') || 'partout'); }
    _gardes() {
      if (this._gardesMemoire) return this._gardesMemoire;
      try { const v = JSON.parse(window.sessionStorage.getItem(this._cleRange()) || 'null'); return Array.isArray(v) ? v : null; } catch (e) { return null; }
    }
    _garder(ids) {
      this._gardesMemoire = ids;
      try { if (ids) window.sessionStorage.setItem(this._cleRange(), JSON.stringify(ids)); else window.sessionStorage.removeItem(this._cleRange()); } catch (e) {   }
    }
    ranger() {
      const t = Date.now();
      this._garder(this._toutes.filter((x) => enCours(x, t)).map((x) => x.id));
      this._signature = null;
      this._peindre();
    }
    deplier() {
      this._garder(null);
      this._signature = null;
      this._peindre();
    }

     
    _page() {
      const p = String(this.getAttribute('page') || '').toLowerCase();
      return PAGES.indexOf(p) >= 0 ? p : TOUTES;
    }

    _depuisAttribut() {
      clearTimeout(this._minuteur);
      let jeu = null;
      try { jeu = JSON.parse(this.getAttribute('infos') || 'null'); } catch (e) { jeu = null; }
      this._toutes = pourPage(normaliser(jeu), this._page());
      this._peindre();
    }

     
    _url() { return SOURCE + '?page=' + TOUTES + '&lang=' + this._lang; }

    _recevoir(jeu) {
      this._cadence = cadenceDe(jeu);
      this._toutes = pourPage(normaliser(jeu), this._page());
      this._peindre();
    }

    _programmer(ms) {
      clearTimeout(this._minuteur);
      if (this.isConnected && !this.hasAttribute('infos')) this._minuteur = setTimeout(() => this._lire(), Math.max(5000, ms) + Math.round(Math.random() * ALEA));
    }

    

    _lire() {
      clearTimeout(this._minuteur);
      if (!this.isConnected || this.hasAttribute('infos')) return;
      if (document.visibilityState === 'hidden') { this._attente = true; return; }
      this._attente = false;
      const t = Date.now();
      const s = stockLire(this._lang);
      if (s && t - s.t >= 0 && t - s.t < cadenceDe(s.jeu)) {
        this._lu = s.t;
        this._recevoir(s.jeu);
        this._programmer(this._cadence - (t - s.t));
        return;
      }
      this._lu = t;
      lireSource(this._url(), this._lang)
        .then((jeu) => { if (this.isConnected && !this.hasAttribute('infos')) this._recevoir(jeu); })
        .catch(() => {})
        .then(() => this._programmer(this._cadence));
    }

     
    _surStock(e) {
      if (!e || e.key !== STOCK + this._lang || !e.newValue || this.hasAttribute('infos') || !this.isConnected) return;
      let v = null;
      try { v = JSON.parse(e.newValue); } catch (err) { v = null; }
      if (!v || typeof v.t !== 'number' || !v.jeu || typeof v.jeu !== 'object') return;
      this._lu = v.t;
      this._recevoir(v.jeu);
      if (document.visibilityState !== 'hidden') this._programmer(this._cadence - (Date.now() - v.t));
    }

    _surVisibilite() {
      if (document.visibilityState !== 'visible' || this.hasAttribute('infos')) return;
      if (this._attente || Date.now() - this._lu >= this._cadence) this._lire();
    }

     
    _peindre() {
      if (!this._hote) return;
      clearTimeout(this._bascule);
      const t = Date.now();
      const vis = this._toutes.filter((x) => enCours(x, t)).slice(0, MAX);
      const prochaine = this._toutes.reduce((m, x) => [x.debut, x.fin].reduce((mm, v) => (v != null && v > t && v < mm ? v : mm), m), Infinity);
      if (prochaine !== Infinity) this._bascule = setTimeout(() => this._peindre(), Math.min(prochaine - t + 50, 86400000));
      const reduit = !!(this._mqReduit && this._mqReduit.matches);
      const rangeable = this.hasAttribute('rangeable');
      const gardes = rangeable ? this._gardes() : null;
      const range = !!(rangeable && vis.length && gardes && vis.every((x) => gardes.indexOf(x.id) >= 0));
      if (rangeable && gardes && vis.length && !range) this._garder(null);
      const signature = this._lang + '|' + reduit + '|' + rangeable + '|' + range + '|' + JSON.stringify(vis.map((x) => [x.id, x.niveau, x.texte, x.titre, x.langue, x.lien, x.libelleLien]));
      if (signature === this._signature) return;
      this._signature = signature;
      this._annoncer(vis);
      this._arreterDefilement();
      this._focus = false;
      const L = T[this._lang];
      const rouge = vis.some((x) => x.niveau === 'alerte');
      const niveau = vis.length ? vis.reduce((m, x) => (RANG[x.niveau] < RANG[m] ? x.niveau : m), 'info') : null;
      if (!vis.length || range) {
        this._hote.innerHTML = '';
      } else {
        const mode = vis.length === 1 ? 'seule' : reduit ? 'pas' : 'defile';
        if (this._indice >= vis.length) this._indice = 0;
        const items = vis.map((x, i) => this._itemHTML(x, L, rouge, mode === 'pas' && i !== this._indice)).join('');
        let cmd = '';
        if (mode === 'defile') {
          cmd = '<button type="button" class="rdi-btn" data-rdi-pause aria-label="' + esc(this._pause ? L.reprendre : L.pause) + '">' + svg(this._pause ? ICO.lecture : ICO.pause) + '</button>';
        } else if (mode === 'pas') {
          cmd = '<button type="button" class="rdi-btn" data-rdi-prec aria-label="' + esc(L.prec) + '">' + svg(ICO.gauche) + '</button>' +
            '<span class="rdi-compte" aria-live="polite"><span aria-hidden="true">' + (this._indice + 1) + ' / ' + vis.length + '</span><span class="rdi-vh">' + esc(L.sur(this._indice + 1, vis.length)) + '</span></span>' +
            '<button type="button" class="rdi-btn" data-rdi-suiv aria-label="' + esc(L.suiv) + '">' + svg(ICO.droite) + '</button>';
        }
        if (rangeable) cmd += '<button type="button" class="rdi-btn rdi-ranger" data-rdi-ranger aria-label="' + esc(L.ranger) + '">' + svg(ICO.ranger) + '</button>';
        if (cmd) cmd = '<div class="rdi-cmd">' + cmd + '</div>';
        this._hote.innerHTML =
          '<section class="rdi rdi--' + (rouge ? 'alerte' : 'info') + ' rdi--' + mode + '" aria-label="' + esc(L.region) + '" data-nombre="' + vis.length + '">' +
            '<div class="rdi-etiq">' + svg(ICO.megaphone) + '<span class="rdi-etiq-txt">' + esc(L.etiquette) + '</span>' + (vis.length > 1 ? '<span class="rdi-nb" aria-hidden="true">' + vis.length + '</span>' : '') + '</div>' +
            '<div class="rdi-fenetre"><div class="rdi-piste"><ul class="rdi-liste">' + items + '</ul></div></div>' + cmd +
          '</section>';
        if (mode === 'defile') this._monterDefilement();
      }
      const etat = vis.length + '|' + range + '|' + niveau;
      if (etat !== this._etat) {
        this._etat = etat;
        this._nombre = vis.length;
        this.dispatchEvent(new CustomEvent('dernieres-infos', { bubbles: true, detail: { nombre: vis.length, range, alerte: rouge, niveau } }));
      }
    }

    _itemHTML(x, L, rouge, cache) {
      const badge = x.niveau === 'info'
        ? (rouge ? '<span class="rdi-badge rdi-badge--info">' + esc(L.info) + '</span>' : '')
        : '<span class="rdi-badge rdi-badge--' + x.niveau + '">' + svg(ICO.alerte) + esc(L[x.niveau]) + '</span>';
      const a = adresse(x.lien, this._lang);
       
      const autre = x.langue && x.langue !== this._lang ? ' lang="' + x.langue + '"' : '';
      const texte = x.titre ? '<b class="rdi-titre">' + esc(x.titre) + '</b>' + esc(x.texte.slice(x.titre.length)) : esc(x.texte);
      const corps = badge + '<span class="rdi-texte"' + autre + '>' + texte + '</span>';
      const li = '<li class="rdi-li" data-id="' + esc(x.id) + '" data-niveau="' + x.niveau + '"' + (cache ? ' hidden' : '') + '>';
      if (!a) return li + '<span class="rdi-item"><span class="rdi-corps">' + corps + '</span></span></li>';
      const libelle = x.libelleLien || L.suite;
      return li + '<a class="rdi-item" href="' + esc(a.href) + '"' + (a.externe ? ' target="_blank" rel="noopener"' : '') + '><span class="rdi-corps">' + corps +
        '<span class="rdi-suite"><span class="rdi-suite-txt">' + esc(libelle) + '</span>' + svg(ICO.fleche) + '</span></span>' +
        (a.externe ? '<span class="rdi-vh"> (' + esc(L.onglet) + ')</span>' : '') + '</a></li>';
    }

     
    _annoncer(vis) {
      const ids = new Set(vis.map((x) => x.id));
      if (this._connues) {
        const neuve = vis.find((x) => !this._connues.has(x.id));
        if (neuve && this._statut) {
          const L = T[this._lang];
          this._statut.textContent = (neuve.niveau === 'alerte' ? L.nouvelleAlerte : neuve.niveau === 'vigilance' ? L.nouvelleVigilance : L.nouvelle) + ' : ' + neuve.texte;
        }
      }
      this._connues = ids;
    }

    

    _monterDefilement() {
      const bande = this._hote.querySelector('.rdi');
      const fenetre = this._hote.querySelector('.rdi-fenetre');
      const piste = this._hote.querySelector('.rdi-piste');
      const liste = piste && piste.querySelector('.rdi-liste');
      if (!bande || !fenetre || !liste) return;
      const mesurer = () => {
        const largeur = liste.getBoundingClientRect().width;
        const deborde = largeur > fenetre.clientWidth + 1;
        let copie = piste.querySelector('.rdi-liste--copie');
        if (!deborde) {
          bande.classList.remove('rdi--defile');
          bande.classList.add('rdi--fixe');
          if (copie) copie.remove();
          if (this._anim) { this._anim.cancel(); this._anim = null; }
          this._distance = 0;
          return;
        }
        bande.classList.add('rdi--defile');
        bande.classList.remove('rdi--fixe');
        if (!copie) {
          copie = liste.cloneNode(true);
          copie.classList.add('rdi-liste--copie');
          copie.setAttribute('aria-hidden', 'true');
          copie.querySelectorAll('a,button').forEach((n) => n.setAttribute('tabindex', '-1'));
          piste.appendChild(copie);
        }
        if (Math.abs(largeur - (this._distance || 0)) < 1 && this._anim) return;
        const avancee = this._anim && this._distance ? ((this._anim.currentTime || 0) % (this._distance / VITESSE * 1000)) / (this._distance / VITESSE * 1000) : 0;
        if (this._anim) this._anim.cancel();
        this._distance = largeur;
        const duree = largeur / VITESSE * 1000;
        this._anim = piste.animate([{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(' + (-largeur) + 'px,0,0)' }], { duration: duree, iterations: Infinity, easing: 'linear' });
        this._anim.currentTime = avancee * duree;
        this._jouer();
      };
      mesurer();
      if (window.ResizeObserver) {
        this._ro = new window.ResizeObserver(() => mesurer());
        this._ro.observe(fenetre);
      }
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (this._hote.contains(liste)) mesurer(); });
    }

    _arreterDefilement() {
      if (this._ro) { this._ro.disconnect(); this._ro = null; }
      if (this._anim) { this._anim.cancel(); this._anim = null; }
      this._distance = 0;
    }

     
    _jouer() {
      if (!this._anim) return;
      if (this._pause || this._survol || this._focus) this._anim.pause();
      else this._anim.play();
    }

     
    _focusDedans(e) {
      const item = e.target && e.target.closest ? e.target.closest('.rdi-item') : null;
      let clavier = true;
      try { clavier = e.target.matches(':focus-visible'); } catch (err) { clavier = true; }
      this._focus = !!item;
      if (item && clavier && this._anim && this._distance) {
        const li = item.closest('.rdi-li');
        const decalage = Math.max(0, li.offsetLeft - 22);
        const duree = this._distance / VITESSE * 1000;
        this._anim.pause();
        this._anim.currentTime = Math.min(decalage, this._distance - 1) / this._distance * duree;
      }
      this._jouer();
    }

    _clic(e) {
      const b = e.target && e.target.closest ? e.target.closest('.rdi-btn') : null;
      if (!b) return;
      const L = T[this._lang];
      if (b.hasAttribute('data-rdi-ranger')) {
        this.ranger();
      } else if (b.hasAttribute('data-rdi-pause')) {
        this._pause = !this._pause;
        b.setAttribute('aria-label', this._pause ? L.reprendre : L.pause);
        b.innerHTML = svg(this._pause ? ICO.lecture : ICO.pause);
        this._jouer();
      } else if (b.hasAttribute('data-rdi-prec') || b.hasAttribute('data-rdi-suiv')) {
        const lis = [...this._hote.querySelectorAll('.rdi-li')];
        if (!lis.length) return;
        this._indice = (this._indice + (b.hasAttribute('data-rdi-suiv') ? 1 : lis.length - 1)) % lis.length;
        lis.forEach((li, i) => { li.hidden = i !== this._indice; });
        const compte = this._hote.querySelector('.rdi-compte');
        if (compte) compte.innerHTML = '<span aria-hidden="true">' + (this._indice + 1) + ' / ' + lis.length + '</span><span class="rdi-vh">' + esc(L.sur(this._indice + 1, lis.length)) + '</span>';
      }
    }
  }

  customElements.define('rdr-dernieres-infos', RdrDernieresInfos);
})();
 
(function () {
  'use strict';
  if (typeof customElements === 'undefined' || customElements.get('rdr-accueil-apercu')) return;

  const SOURCE = 'https://www.routedurhum.com/_functions/accueilApercu';
  









  const TRAD_EN = {"Là où les rêves prennent le large":"Where dreams set sail","Découvrir":"Discover","À l'affiche":"What's on","Les prochains temps forts, jour par jour":"The upcoming highlights, day by day","Toute la programmation":"The full programme","Aujourd'hui":"Today","Demain":"Tomorrow","lun.":"Mon","mar.":"Tue","mer.":"Wed","jeu.":"Thu","ven.":"Fri","sam.":"Sat","dim.":"Sun","janv.":"Jan","févr.":"Feb","mars":"Mar","avr.":"Apr","mai":"May","juin":"Jun","juil.":"Jul","août":"Aug","sept.":"Sep","oct.":"Oct","nov.":"Nov","déc.":"Dec","Actualités":"News","La une, la dernière vidéo, le dernier reportage":"The top story, the latest video, the latest photo story","Actu":"News","Photo":"Photo","Vidéo":"Video","Audio":"Audio","Interview":"Interview","À la une":"Featured","Nouveau":"New","aujourd'hui":"today","hier":"yesterday","La dernière vidéo":"The latest video","Le dernier reportage":"The latest photo story","Toutes les actualités":"All the news","Les skippers engagés":"The skippers in the race","1 seule ligne de départ, 115 navigateurs. Six visages au hasard, à chaque visite.":"A single start line, 115 sailors. Six faces picked at random on every visit.","bateaux":"boats","Explorez tous les skippers":"Explore all the skippers","3 542 milles · 6 560 km":"3,542 miles · 6,560 km","Mon Espace Rhum":"My Espace Rhum","Vivez":"Experience","votre":"your","Rhum":"Rhum","Rejoignez les passionnés du Rhum et partagez toute l'intensité de la course. Suivez vos skippers préférés, découvrez des contenus et données personnalisés, relevez des défis, participez à des jeux-concours exclusifs et collectionnez des badges au fil de l'aventure.":"Join the Route du Rhum community and experience all the intensity of the race. Follow your favourite skippers, discover personalised content and data, take part in exclusive competitions and collect badges throughout the adventure.","Créez votre espace":"Create my space","J'ai déjà un compte":"I already have an account","Badges et rangs":"Badges and ranks","Débloquez des badges":"Unlock badges","et montez dans les rangs":"and climb the ranks","Top 50 des fans":"Top 50 fans","Entrez dans le classement":"Get on the leaderboard","Skipper préféré":"Favourite skipper","Badge à débloquer":"Badge to unlock","La mascotte officielle":"The official mascot","TyMAL, en tournée avant le village":"TyMAL, on tour before the village","Macareux moine, natif des côtes bretonnes, TyMAL sillonne la Bretagne et la Guadeloupe avant de vous retrouver sur les bassins. Suivez sa tournée jusqu'aux bassins, et repartez avec lui dans votre Espace Rhum.":"An Atlantic puffin from the Breton coast, TyMAL is touring Brittany and Guadeloupe before joining you at the harbour basins. Follow the tour all the way to the village, then take TyMAL home with you in your Espace Rhum.","Où est TyMAL ?":"Where is TyMAL?","En savoir plus":"Find out more","TyMAL, la vidéo":"TyMAL, the video","Lire la vidéo":"Play the video","La vidéo est hébergée par YouTube":"This video is hosted on YouTube","Elle ne se charge pas tant que les cookies marketing sont refusés, pour que rien ne parte chez un tiers sans votre accord.":"It will not load while marketing cookies are declined, so that nothing is sent to a third party without your consent.","Gérer mes cookies":"Manage my cookies","Regarder sur YouTube":"Watch on YouTube","Voir toutes les questions":"See all questions","Le départ":"The start","Le village":"The village","Venir":"Getting there","La course":"The race","Pratique":"Practical info","À valider":"To be confirmed","Chercher dans les questions":"Search the questions","Chercher":"Search","Précédent":"Previous","Suivant":"Next","Temps fort":"Highlight","À lire aussi":"Also worth reading","Le dernier podcast":"The latest podcast"};
  const MOTIFS_EN = [
    [/^il y a (\d+) j$/, (m, n) => n + ' d ago'],
    [/^aujourd'hui$/, () => 'today'],
    [/^hier$/, () => 'yesterday'],
    [/^(\d+) min de lecture$/, (m, n) => n + ' min read'],
    [/^Dans (\d+) jours$/, (m, n) => 'In ' + n + ' days'],
    [/^N°(\d+)$/, (m, n) => 'No. ' + n],
    [/^1 seule ligne de départ, (\d+) navigateurs\. Six visages au hasard, à chaque visite\.$/, (m, n) => 'A single start line, ' + n + ' sailors. Six faces picked at random on every visit.']
  ];
  const morceauEn = (m) => {
    if (Object.prototype.hasOwnProperty.call(TRAD_EN, m)) return TRAD_EN[m];
    for (const [re, fn] of MOTIFS_EN) if (re.test(m)) return m.replace(re, fn);
    return null;
  };
  const aTraduire = (v) => {
    const brut = String(v || '');
    const net = brut.replace(/\s+/g, ' ').trim();
    if (!net) return null;
    const avant = brut.match(/^\s*/)[0], apres = brut.match(/\s*$/)[0];
    const entier = morceauEn(net);
    if (entier != null) return avant + entier + apres;
    



    if (net.indexOf('·') < 0) return null;
    let change = false;
    const t = net.split(/(\s*·\s*)/).map((m, i) => { if (i % 2 || !m) return m; const e = morceauEn(m.trim()); if (e != null) { change = true; return e; } return m; }).join('');
    return change ? avant + t + apres : null;
  };
  function traduireEn(racine) {
    if (!racine || !racine.querySelectorAll) return;
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = []; let n; while ((n = w.nextNode())) noeuds.push(n);
    noeuds.forEach((x) => {
      const p = x.parentElement;
      if (p && /^(STYLE|SCRIPT)$/.test(p.tagName)) return;
      const v = aTraduire(x.nodeValue);
      if (v != null && v !== x.nodeValue) x.nodeValue = v;
    });
    [racine].concat([...racine.querySelectorAll('[alt],[aria-label],[title],[placeholder]')]).forEach((e) => {
      ['alt', 'aria-label', 'title', 'placeholder'].forEach((a) => {
        if (!e.hasAttribute || !e.hasAttribute(a)) return;
        const v = aTraduire(e.getAttribute(a));
        if (v != null && v !== e.getAttribute(a)) e.setAttribute(a, v);
      });
    });
  }
  const langueDe = (el) => {
    const p = location.pathname || '';
    const l = el.getAttribute('lang') || (p === '/en' || p.indexOf('/en/') === 0 ? 'en' : document.documentElement.getAttribute('lang') || 'fr');
    return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
  };


  const CSS = `rdr-accueil-apercu{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}
rdr-accueil-apercu button{font-family:inherit;margin:0}
rdr-accueil-apercu .raa-attente{display:block;background:#0E111D}
rdr-accueil-apercu .raa-sq-l,rdr-accueil-apercu .raa-sq-c{position:relative;display:block;overflow:hidden}
rdr-accueil-apercu .raa-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}
rdr-accueil-apercu .raa-sq-c{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
rdr-accueil-apercu .raa-sq-l::after,rdr-accueil-apercu .raa-sq-c::after{content:"";position:absolute;inset:0;transform:translateX(-100%);animation:raa-sq-luire 1.6s ease-in-out infinite}
rdr-accueil-apercu .raa-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}
rdr-accueil-apercu .raa-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)}
@keyframes raa-sq-luire{to{transform:translateX(100%)}}
rdr-accueil-apercu .raa-sq-hero{--bas-titre:60px;position:relative;height:clamp(520px,calc(100svh - var(--haut-entete)),960px);overflow:hidden}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .raa-sq-hero{height:clamp(560px,100svh,1100px)}
rdr-accueil-apercu .raa-sq-scene{position:absolute;inset:0;overflow:hidden;background:linear-gradient(90deg,#0E111D 0%,#131A2C 45%,#1B2338 100%)}
rdr-accueil-apercu .raa-sq-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:62% 45%;transform:scale(1.08)}
rdr-accueil-apercu .raa-sq-scene::before{content:"";position:absolute;left:0;right:0;bottom:0;height:36%;z-index:1;background:linear-gradient(180deg,rgba(14,17,29,0) 0%,rgba(14,17,29,.72) 60%,#0E111D 100%)}
rdr-accueil-apercu .raa-sq-scene::after{content:"";position:absolute;inset:0;opacity:.5;background:linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 22%),linear-gradient(90deg,rgba(14,17,29,.8) 0%,rgba(14,17,29,.45) 36%,rgba(14,17,29,0) 64%),linear-gradient(180deg,rgba(14,17,29,0) 60%,#0E111D 100%)}
rdr-accueil-apercu .raa-sq-contenu{position:absolute;left:0;right:0;bottom:var(--bas-titre);z-index:2}
rdr-accueil-apercu .raa-sq-titre{display:flex;flex-direction:column;align-items:flex-start;gap:clamp(12px,2.2vh,22px);max-width:min(980px,76%)}
rdr-accueil-apercu .raa-sq-haut{display:flex;flex-wrap:wrap;align-items:flex-start;gap:8px;font-size:clamp(11px,1.02vw,14.5px)}
rdr-accueil-apercu .raa-sq-haut i{height:calc(1em + 13px);border-radius:6px}
rdr-accueil-apercu .raa-sq-signe{width:24.3em}
rdr-accueil-apercu .raa-sq-depart{width:29.2em}
rdr-accueil-apercu .raa-sq-t{display:flex;flex-direction:column;justify-content:space-around;width:100%;height:calc(2.2 * clamp(34px,min(4.6vw,7.4vh),78px))}
rdr-accueil-apercu .raa-sq-t i{height:calc(.78 * clamp(34px,min(4.6vw,7.4vh),78px));border-radius:6px}
rdr-accueil-apercu .raa-sq-t i:first-child{width:min(560px,58%)}
rdr-accueil-apercu .raa-sq-t i:last-child{width:min(760px,82%)}
rdr-accueil-apercu .raa-sq-faits{display:flex;flex-wrap:wrap;gap:6px 8px;padding-left:6px}
rdr-accueil-apercu .raa-sq-fait{height:37px;border-radius:0;transform:skewX(-14deg);border-left:3px solid rgba(93,191,192,.7)}
rdr-accueil-apercu .raa-sq-fait:nth-child(1){width:168px}
rdr-accueil-apercu .raa-sq-fait:nth-child(2){width:198px;border-left-color:rgba(252,241,80,.7)}
rdr-accueil-apercu .raa-sq-fait:nth-child(3){width:230px;border-left-color:rgba(139,134,224,.7)}
rdr-accueil-apercu .raa-sq-fait:nth-child(4){width:244px;border-left-color:rgba(245,190,65,.7)}
rdr-accueil-apercu .raa-sq-acces{padding:clamp(16px,2.6vh,28px) 0 44px}
rdr-accueil-apercu .raa-sq-cartes{display:flex;gap:16px;height:var(--haut-acces)}
rdr-accueil-apercu .raa-sq-cartes .raa-sq-c{flex:1;min-width:0;border-radius:18px}
rdr-accueil-apercu .raa-sq-suite{padding:26px 0 64px}
rdr-accueil-apercu .raa-sq-k{width:min(260px,60%);height:clamp(26px,2.4vw,34px);border-radius:6px}
rdr-accueil-apercu .raa-sq-p{width:min(300px,70%);margin-top:10px}
rdr-accueil-apercu .raa-sq-rail{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;padding-top:50px}
rdr-accueil-apercu .raa-sq-rail::before{content:"";position:absolute;left:0;right:0;top:27px;height:2px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.14) 0 8px,transparent 8px 16px)}
rdr-accueil-apercu .raa-sq-rail .raa-sq-c{height:120px;border-radius:16px}
rdr-accueil-apercu .raa-sq-actus{padding:60px 0 70px}
rdr-accueil-apercu .raa-sq-trait{display:block;width:54px;height:6px;border-radius:3px;transform:skewX(-20deg);background:rgba(252,241,80,.45)}
rdr-accueil-apercu .raa-sq-actus .raa-sq-k{margin-top:12px;width:min(300px,62%);height:clamp(34px,3.4vw,48px)}
rdr-accueil-apercu .raa-sq-grille{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:14px;height:clamp(420px,50vh,520px);margin-top:26px}
rdr-accueil-apercu .raa-sq-grille > div{display:grid;grid-template-rows:1fr 1fr;gap:14px;min-height:0}
rdr-accueil-apercu .raa-sq-grille .raa-sq-c{border-radius:18px}
@media (max-height:820px){rdr-accueil-apercu .raa-sq-titre{gap:12px}rdr-accueil-apercu .raa-sq-t{height:calc(2.2 * clamp(30px,min(4.6vw,7.2vh),60px))}rdr-accueil-apercu .raa-sq-t i{height:calc(.78 * clamp(30px,min(4.6vw,7.2vh),60px))}rdr-accueil-apercu .raa-sq-fait{height:35px}rdr-accueil-apercu .raa-sq-grille{height:clamp(380px,52vh,460px)}}
@media (min-width:761px) and (max-width:1500px){rdr-accueil-apercu .raa-sq-cartes{gap:22px}rdr-accueil-apercu .raa-sq-suite{padding:32px 0 76px}rdr-accueil-apercu .raa-sq-rail{gap:20px}rdr-accueil-apercu .raa-sq-actus{padding:72px 0 84px}rdr-accueil-apercu .raa-sq-grille{gap:18px}rdr-accueil-apercu .raa-sq-grille > div{gap:18px}}
@media (min-width:761px) and (max-width:1660px){rdr-accueil-apercu .raa-sq-hero{--bas-titre:112px}rdr-accueil-apercu .raa-sq-contenu .trame{padding-left:max(var(--marge),68px)}}
@media (max-width:1100px){rdr-accueil-apercu .raa-sq-titre{max-width:78%}rdr-accueil-apercu .raa-sq-rail{grid-template-columns:repeat(2,minmax(0,1fr));padding-top:18px}rdr-accueil-apercu .raa-sq-rail::before{display:none}rdr-accueil-apercu .raa-sq-grille{grid-template-columns:1fr;height:auto}rdr-accueil-apercu .raa-sq-une{aspect-ratio:16/9}rdr-accueil-apercu .raa-sq-grille > div{grid-template-rows:none;grid-template-columns:1fr 1fr}rdr-accueil-apercu .raa-sq-grille > div .raa-sq-c{aspect-ratio:4/3}}
@media (max-width:760px){rdr-accueil-apercu .raa-sq-hero,html[data-rdr-entete="dessus"] rdr-accueil-apercu .raa-sq-hero{height:auto;overflow:visible}rdr-accueil-apercu .raa-sq-scene{position:relative;height:clamp(320px,58svh,480px)}html[data-rdr-entete="dessus"] rdr-accueil-apercu .raa-sq-scene{height:calc(clamp(320px,58svh,480px) + var(--rdr-entete-h,120px))}rdr-accueil-apercu .raa-sq-contenu{position:relative;bottom:auto;margin-top:-118px;padding-bottom:18px}rdr-accueil-apercu .raa-sq-titre{max-width:none}rdr-accueil-apercu .raa-sq-haut{flex-direction:column}rdr-accueil-apercu .raa-sq-depart{width:21.4em}rdr-accueil-apercu .raa-sq-t{height:calc(2.1 * clamp(26px,7.8vw,33px))}rdr-accueil-apercu .raa-sq-t i{height:calc(.78 * clamp(26px,7.8vw,33px))}rdr-accueil-apercu .raa-sq-t i:first-child{width:56%}rdr-accueil-apercu .raa-sq-t i:last-child{width:92%}rdr-accueil-apercu .raa-sq-faits{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 12px;width:100%;padding:0 4px}rdr-accueil-apercu .raa-sq-fait,rdr-accueil-apercu .raa-sq-fait:nth-child(n){width:auto;height:calc(40.3px + .9 * clamp(16px,4.6vw,18px));transform:skewX(-6deg)}rdr-accueil-apercu .raa-sq-acces{padding:16px 0 36px}rdr-accueil-apercu .raa-sq-cartes{flex-direction:column;height:auto;gap:12px}rdr-accueil-apercu .raa-sq-cartes .raa-sq-c{flex:none;height:146px}rdr-accueil-apercu .raa-sq-suite{padding:10px 0 44px}rdr-accueil-apercu .raa-sq-rail{display:flex;gap:12px;overflow:hidden;margin:0 calc(-1 * var(--marge));padding:43px var(--marge) 8px}rdr-accueil-apercu .raa-sq-rail .raa-sq-c{flex:0 0 74%}rdr-accueil-apercu .raa-sq-actus{padding:48px 0 54px}rdr-accueil-apercu .raa-sq-grille > div{grid-template-columns:1fr}rdr-accueil-apercu .raa-sq-grille > div .raa-sq-c{aspect-ratio:16/9}rdr-accueil-apercu .raa-sq-grille > div .raa-sq-c + .raa-sq-c{display:none}rdr-accueil-apercu .raa-sq-une{aspect-ratio:4/3}}
@media (max-width:329px){rdr-accueil-apercu .raa-sq-t{height:calc(3.15 * clamp(26px,7.8vw,33px))}}
@media (min-width:561px) and (max-width:760px){rdr-accueil-apercu .raa-sq-depart{width:30em}}
@media (min-width:620px) and (max-width:760px){rdr-accueil-apercu .raa-sq-t{height:calc(1.05 * clamp(26px,7.8vw,33px))}rdr-accueil-apercu .raa-sq-t i:first-child{width:min(580px,90%)}rdr-accueil-apercu .raa-sq-t i:last-child{display:none}}
@media (min-width:660px) and (max-width:760px){rdr-accueil-apercu .raa-sq-haut{flex-direction:row}}
@media (prefers-reduced-motion:reduce){rdr-accueil-apercu .raa-sq-l::after,rdr-accueil-apercu .raa-sq-c::after{animation:none;display:none}}
rdr-accueil-apercu .raa-vide{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#0E111D;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center;padding:40px 20px}
rdr-accueil-apercu .raa-vide h3{margin:0;font-size:22px}
rdr-accueil-apercu .raa-vide button{height:42px;padding:0 20px;border:2px solid #fff;border-radius:10px 0 10px 0;background:transparent;color:#fff;font-weight:700;cursor:pointer}
rdr-accueil-apercu{--marine:#0E111D;--nuit:#0A1228;--marine2:#16355D;--panneau:#1B2237;--teal:#5DBFC0;--teal2:#14A79E;--vert:#006F7B;--jaune:#FCF150;--or:#F5BE41;--orange:#F19F39;
    --t2:rgba(255,255,255,.72);--t3:rgba(255,255,255,.5);--filet:rgba(255,255,255,.12);
    --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;
    --largeur:1380px;--marge:30px;
    --haut-entete:175px;}
rdr-accueil-apercu *{box-sizing:border-box}
rdr-accueil-apercu{margin:0;background:#0E111D;color:#0E111D;overflow-x:clip;font-family:var(--police);-webkit-font-smoothing:antialiased}
rdr-accueil-apercu img{display:block}
rdr-accueil-apercu a{color:inherit;text-decoration:none}
rdr-accueil-apercu h1,rdr-accueil-apercu h2,rdr-accueil-apercu h3,rdr-accueil-apercu h4,rdr-accueil-apercu p{margin:0}
rdr-accueil-apercu .trame{width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}
rdr-accueil-apercu .titre{font-family:var(--titre);font-style:italic;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .kicker{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:6px 10px;border-radius:6px;background:var(--teal);color:#0E111D;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .kicker--jaune{background:var(--jaune)}
rdr-accueil-apercu .kicker--sombre{background:#0E111D;color:#fff}
rdr-accueil-apercu .trait{display:inline-block;width:54px;height:6px;border-radius:3px;background:var(--jaune);transform:skewX(-20deg)}
rdr-accueil-apercu .btn{display:inline-flex;align-items:center;justify-content:center;gap:15px;height:44px;padding:10px 20px;border:2px solid currentColor;border-radius:10px 0 10px 0;background:transparent;color:#fff;font:700 14px/1 var(--police);text-decoration:none;transition:background .15s,color .15s;cursor:pointer;white-space:nowrap}
rdr-accueil-apercu .btn svg{width:20px;height:20px;fill:currentColor;flex:none}
rdr-accueil-apercu .btn:hover{background:rgba(255,255,255,.12)}
rdr-accueil-apercu .btn--sombre{color:#0E111D}
rdr-accueil-apercu .btn--sombre:hover{background:rgba(14,17,29,.08)}
rdr-accueil-apercu .btn--marine{background:#0E111D;border-color:#0E111D;color:#fff}
rdr-accueil-apercu .btn--marine:hover{background:#16355D;border-color:#16355D}
rdr-accueil-apercu{--haut-acces:clamp(200px,26vh,260px)}
rdr-accueil-apercu .hero{--bas-titre:60px;position:relative;height:clamp(520px,calc(100svh - var(--haut-entete)),960px);background:#0E111D;color:#fff;overflow:hidden}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .hero{height:clamp(560px,100svh,1100px)}
rdr-accueil-apercu .hv-scene{position:absolute;inset:0;overflow:hidden;background:#0E111D}
rdr-accueil-apercu .hv-fond{position:absolute;inset:0}
rdr-accueil-apercu .hero video,rdr-accueil-apercu .hero .hero-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
rdr-accueil-apercu .hero .hero-photo{object-position:62% 45%;transform:scale(1.08);transition:transform 18s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.est-photo .hero-photo{transform:scale(1)}
rdr-accueil-apercu .hv-nuit{position:absolute;inset:0;background:#0E111D;pointer-events:none}
rdr-accueil-apercu .hero.est-photo .hv-nuit{opacity:0}
rdr-accueil-apercu .hero video{background:#0E111D;transition:opacity 1.4s ease}
rdr-accueil-apercu .hero.est-photo video{opacity:0}
rdr-accueil-apercu .hv-fond::after{content:'';position:absolute;inset:0;pointer-events:none;transition:opacity 1s;background:
    linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 22%),
    linear-gradient(90deg,rgba(14,17,29,.8) 0%,rgba(14,17,29,.45) 36%,rgba(14,17,29,0) 64%),
    linear-gradient(180deg,rgba(14,17,29,0) 60%,#0E111D 100%)}
rdr-accueil-apercu .hero:not(.est-photo) .hv-fond::after{opacity:.5}
rdr-accueil-apercu .hero.entree-affiche .hero-photo{transition:transform 18s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.entree-affiche .hv-nuit{opacity:0;transition:opacity .6s ease}
rdr-accueil-apercu .hero.entree-douce video,rdr-accueil-apercu .hero.entree-douce .hv-marque{display:none}
rdr-accueil-apercu .hero.entree-douce .hero-photo{transition:transform 9s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.entree-douce .hv-nuit{transition:opacity 1s ease}
rdr-accueil-apercu .hero.sans-video .hero-photo{transition:transform 18s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.sans-video .hv-nuit{display:none}
rdr-accueil-apercu .hero.sans-video.entree-douce .hero-photo{transition:transform 9s cubic-bezier(.2,.6,.3,1)}
rdr-accueil-apercu .hero.entree-douce .hv-titre{transition-delay:.15s}
rdr-accueil-apercu .hv-fond::before{content:'';position:absolute;left:0;right:0;bottom:0;height:36%;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(14,17,29,0) 0%,rgba(14,17,29,.72) 60%,#0E111D 100%)}
rdr-accueil-apercu .hv-marque{position:absolute;left:0;right:0;top:50%;transform:translateY(-44%);z-index:3;text-align:center;padding:0 var(--marge);pointer-events:none;transition:opacity .7s ease,transform 1s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .hv-masque{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;margin:0}
rdr-accueil-apercu .hv-logo{display:block;margin:0 auto;width:clamp(140px,min(16vw,27vh),250px);height:auto;filter:drop-shadow(0 12px 34px rgba(0,0,0,.28))}
rdr-accueil-apercu .hv-devise{margin-top:clamp(16px,3vh,32px);font-size:clamp(22px,min(3vw,5.6vh),46px);line-height:1.05;text-shadow:0 6px 30px rgba(0,0,0,.45);text-wrap:balance}
rdr-accueil-apercu .hv-marque .hv-logo,rdr-accueil-apercu .hv-marque .hv-devise{animation:raa-marque 1.1s cubic-bezier(.22,.8,.3,1) both}
rdr-accueil-apercu .hv-marque .hv-devise{animation-delay:.45s}
rdr-accueil-apercu .hero.est-photo .hv-marque{opacity:0;transform:translateY(-70%)}
@keyframes raa-marque{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .hv-contenu{position:absolute;left:0;right:0;bottom:var(--bas-titre);z-index:3}
rdr-accueil-apercu .hv-ligne{display:flex;align-items:flex-end;justify-content:space-between;gap:28px}
rdr-accueil-apercu .hv-titre{max-width:min(980px,76%);display:flex;flex-direction:column;align-items:flex-start;gap:clamp(12px,2.2vh,22px)}
rdr-accueil-apercu .hero .hv-titre{opacity:.01;transform:translateY(26px);transition:opacity .9s ease .3s,transform 1.1s cubic-bezier(.22,.8,.3,1) .3s}
rdr-accueil-apercu .hero.est-photo .hv-titre{opacity:1;transform:none}
rdr-accueil-apercu .hero:not(.est-photo) .hv-contenu{z-index:-1}
rdr-accueil-apercu .hv-signe{display:inline-flex;align-items:baseline;gap:8px;font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:clamp(11px,1.02vw,14.5px);line-height:1;padding:6px 10px 5px;border-radius:6px;background:rgba(14,17,29,.55);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(6px)}
rdr-accueil-apercu .hv-signe b{color:var(--jaune);font-weight:400}
rdr-accueil-apercu .hv-titre h2{font-size:clamp(34px,min(4.6vw,7.4vh),78px);line-height:1.1;text-wrap:balance;text-shadow:0 8px 40px rgba(0,0,0,.35)}
rdr-accueil-apercu .hv-titre h2 em{font-style:inherit;color:var(--jaune);position:relative;white-space:nowrap}
rdr-accueil-apercu .hv-titre h2 em{display:inline-block}
rdr-accueil-apercu .hero.est-photo .hv-titre h2 em{animation:raa-vibre 10s ease-in-out 1.6s infinite}
@keyframes raa-vibre{0%,7%,100%{transform:none}1%{transform:translate(-2px,1px) rotate(-1deg)}2%{transform:translate(2px,-1px) rotate(1deg)}3%{transform:translate(-2px,0) rotate(-.6deg)}4%{transform:translate(2px,1px) rotate(.6deg)}5%{transform:translate(-1px,0)}6%{transform:translate(1px,0)}}
rdr-accueil-apercu .hv-faits{display:flex;flex-wrap:wrap;gap:6px 8px;padding-left:6px}
rdr-accueil-apercu .hv-fait{--c:var(--teal);position:relative;display:flex;align-items:center;gap:9px;padding:6px 16px 6px 13px;isolation:isolate;color:#fff}
rdr-accueil-apercu .hv-fait::before{content:'';position:absolute;inset:0;z-index:-1;transform:skewX(-14deg);background:linear-gradient(105deg,rgba(8,14,34,.82),rgba(8,14,34,.5));border-left:3px solid var(--c);backdrop-filter:blur(10px);box-shadow:0 14px 30px rgba(0,0,0,.24)}
rdr-accueil-apercu .hv-fait:nth-child(2){--c:var(--jaune)}
rdr-accueil-apercu .hv-fait:nth-child(3){--c:#8B86E0}
rdr-accueil-apercu .hv-fait:nth-child(4){--c:var(--or)}
rdr-accueil-apercu .hv-v{font-family:var(--titre);font-style:italic;font-size:clamp(22px,1.85vw,28px);line-height:.9;color:var(--c);white-space:nowrap;letter-spacing:-.01em;font-variant-numeric:tabular-nums;text-shadow:0 6px 20px rgba(0,0,0,.35)}
rdr-accueil-apercu .hv-v i{font-style:inherit}
rdr-accueil-apercu .hv-v small{font:800 .46em/1 var(--police);margin-left:4px;color:#fff;letter-spacing:0}
rdr-accueil-apercu .hv-l{display:flex;flex-direction:column;gap:3px;min-width:0}
rdr-accueil-apercu .hv-l b{font:800 9px/1.1 var(--police);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
rdr-accueil-apercu .hv-l span{font-size:10px;line-height:1.2;font-weight:600;color:var(--t2);white-space:nowrap}
rdr-accueil-apercu .hv-l .hv-n{font-size:8.5px;font-weight:600;color:rgba(255,255,255,.66);letter-spacing:.01em}
rdr-accueil-apercu .hero .hv-fait{opacity:0;transform:translateX(-16px)}
rdr-accueil-apercu .hero.est-photo .hv-fait{opacity:1;transform:none;transition:opacity .5s ease,transform .7s cubic-bezier(.22,.8,.3,1);transition-delay:calc(.5s + var(--i) * .09s)}
rdr-accueil-apercu .hv-defiler{display:none}
@keyframes raa-hv-descend{0%,100%{transform:translateY(-3px);opacity:.5}50%{transform:translateY(3px);opacity:1}}
rdr-accueil-apercu .hv-acces-sous{background:#0E111D;padding:clamp(16px,2.6vh,28px) 0 44px}
rdr-accueil-apercu .hero ~ .hv-acces-sous .cta{transition:flex .6s cubic-bezier(.22,.8,.3,1),box-shadow .3s,opacity .6s ease var(--d,0s),transform .8s cubic-bezier(.22,.8,.3,1) var(--d,0s)}
rdr-accueil-apercu .hero:not(.est-photo) ~ .hv-acces-sous .cta{opacity:0;transform:translateY(28px)}
rdr-accueil-apercu .hero.est-photo ~ .hv-acces-sous .cta{--d:.45s}
rdr-accueil-apercu .hero.est-photo ~ .hv-acces-sous .cta:nth-child(2){--d:.57s}
rdr-accueil-apercu .hero.est-photo ~ .hv-acces-sous .cta:nth-child(3){--d:.69s}
rdr-accueil-apercu .hero ~ rdr-dernieres-infos{background:#0E111D}
rdr-accueil-apercu .hero ~ rdr-dernieres-infos .rdi{margin:clamp(14px,2.6vh,26px) 0 clamp(4px,1vh,10px)}
rdr-accueil-apercu .hero:not(.est-photo) ~ rdr-dernieres-infos .rdi{opacity:0}
rdr-accueil-apercu .hero.est-photo ~ rdr-dernieres-infos .rdi{animation:raa-rdi-monte .7s cubic-bezier(.22,.8,.3,1) .3s both}
@keyframes raa-rdi-monte{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .cta-liste{display:flex;gap:16px;height:var(--haut-acces)}
rdr-accueil-apercu .cta{position:relative;flex:1;border-radius:18px;overflow:hidden;background:var(--panneau);color:#fff;transition:flex .6s cubic-bezier(.22,.8,.3,1),box-shadow .3s;display:flex;align-items:flex-end;min-width:0;border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 30px 60px rgba(0,0,0,.45)}
rdr-accueil-apercu .cta:hover,rdr-accueil-apercu .cta:focus-within{flex:2.1}
rdr-accueil-apercu .cta--bientot{pointer-events:none;cursor:default}
rdr-accueil-apercu .cta--bientot img{filter:grayscale(1);opacity:.4}
rdr-accueil-apercu .cta--bientot .cta-txt{opacity:.78}
rdr-accueil-apercu .cta--bientot .cta-prochainement{display:inline-flex;align-self:flex-start;padding:5px 10px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
rdr-accueil-apercu .cta img{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;opacity:.66;transition:opacity .5s,transform 6s linear}
rdr-accueil-apercu .cta:hover img{opacity:.92;transform:scale(1.05)}
rdr-accueil-apercu .cta::before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(14,17,29,0) 0%,rgba(14,17,29,.18) 30%,rgba(14,17,29,.78) 62%,rgba(14,17,29,.97) 100%)}
rdr-accueil-apercu .cta::after{content:'';position:absolute;left:0;right:0;bottom:0;z-index:2;height:5px;background:var(--c,var(--teal));transition:height .3s}
rdr-accueil-apercu .cta:hover::after{height:8px}
rdr-accueil-apercu .cta-num{position:absolute;right:18px;top:12px;z-index:2;font-family:var(--titre);font-style:italic;font-size:46px;line-height:1;color:transparent;-webkit-text-stroke:1.2px rgba(255,255,255,.45);transition:-webkit-text-stroke-color .3s,color .3s}
rdr-accueil-apercu .cta:hover .cta-num{-webkit-text-stroke-color:var(--c,var(--teal))}
rdr-accueil-apercu .cta-txt{position:relative;z-index:2;padding:22px 24px 24px;display:flex;flex-direction:column;gap:8px;width:100%}
rdr-accueil-apercu .cta-ico{width:46px;height:46px;border-radius:12px;background:var(--c,var(--teal));color:#0E111D;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px;box-shadow:0 10px 20px rgba(0,0,0,.3)}
rdr-accueil-apercu .cta-ico svg{width:22px;height:22px}
rdr-accueil-apercu .cta h3{font-family:var(--titre);font-style:italic;text-transform:uppercase;font-size:clamp(18px,1.6vw,24px);line-height:1.05;text-wrap:balance}
rdr-accueil-apercu .cta p{font-size:13px;line-height:1.5;color:var(--t2);max-width:520px;max-height:0;opacity:0;overflow:hidden;text-wrap:pretty;transition:max-height .5s ease,opacity .4s .1s}
rdr-accueil-apercu .cta:hover p,rdr-accueil-apercu .cta:focus-within p{max-height:80px;opacity:1}
rdr-accueil-apercu .cta .lire{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#fff}
rdr-accueil-apercu .cta .lire svg{width:14px;height:14px;color:var(--c,var(--teal))}
rdr-accueil-apercu .cta--teal{--c:var(--teal)}
rdr-accueil-apercu .cta--jaune{--c:var(--jaune)}
rdr-accueil-apercu .cta--bleu{--c:#8B86E0}
rdr-accueil-apercu .cta--or{--c:var(--or)}
rdr-accueil-apercu .affiche{background:#0E111D;color:#fff;padding:26px 0 64px}
rdr-accueil-apercu .affiche-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:8px}
rdr-accueil-apercu .affiche h2{font-size:clamp(26px,2.4vw,34px);text-wrap:balance}
rdr-accueil-apercu .affiche h2 small{display:block;font:500 12.5px var(--police);color:var(--t3);text-transform:none;font-style:normal;margin-top:6px}
rdr-accueil-apercu .affiche-lien{display:inline-flex;align-items:center;gap:8px;flex:none;font-size:11.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--jaune)}
rdr-accueil-apercu .affiche-lien svg{width:14px;height:14px}
rdr-accueil-apercu .af-rail{position:relative;display:grid;grid-template-columns:repeat(var(--af-n,4),minmax(0,1fr));gap:16px;padding-top:40px}
rdr-accueil-apercu .af-rail::before{content:'';position:absolute;left:0;right:0;top:17px;height:2px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.26) 0 8px,transparent 8px 16px)}
rdr-accueil-apercu .af{position:relative;display:flex;flex-direction:column;gap:10px;padding:18px 18px 16px;border-radius:16px;background:var(--panneau);border:1px solid var(--filet);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);transition:transform .25s,border-color .25s}
rdr-accueil-apercu .af::before{content:'';position:absolute;left:22px;top:-30px;width:12px;height:12px;border-radius:50%;background:#0E111D;border:3px solid var(--c)}
rdr-accueil-apercu .af::after{content:'';position:absolute;left:28px;top:-15px;width:2px;height:15px;background:var(--c);opacity:.55}
rdr-accueil-apercu .af:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.3)}
rdr-accueil-apercu .af:nth-child(4n+1){--c:var(--teal)}
rdr-accueil-apercu .af:nth-child(4n+2){--c:var(--jaune)}
rdr-accueil-apercu .af:nth-child(4n+3){--c:#8B86E0}
rdr-accueil-apercu .af:nth-child(4n+4){--c:var(--or)}
rdr-accueil-apercu .af-date{display:flex;align-items:center;gap:10px}
rdr-accueil-apercu .af-date b{font-family:var(--titre);font-style:italic;font-size:42px;line-height:.8;color:var(--c)}
rdr-accueil-apercu .af-date span{display:flex;flex-direction:column;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;line-height:1.3}
rdr-accueil-apercu .af-date span em{font-style:normal;color:var(--t3)}
rdr-accueil-apercu .af h3{font-size:15px;font-weight:800;line-height:1.25;text-wrap:balance}
rdr-accueil-apercu .af p{font-size:12.5px;color:var(--t3);display:flex;flex-wrap:wrap;gap:4px 10px}
rdr-accueil-apercu .af p span{display:inline-flex;align-items:center;gap:5px}
rdr-accueil-apercu .af p svg{width:13px;height:13px;color:var(--c)}
rdr-accueil-apercu .af p b{color:#fff;font-weight:700}
rdr-accueil-apercu .af-rel{position:absolute;right:14px;top:14px;font-size:9.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:4px 8px;border-radius:999px;background:rgba(252,241,80,.14);color:var(--jaune)}
rdr-accueil-apercu .vague-sep{position:relative;z-index:2;overflow:hidden;line-height:0;font-size:0;background:var(--avant);margin:-1px 0}
rdr-accueil-apercu .vague-sep svg{display:block;width:calc(100% + 120px);margin-left:-60px;height:clamp(34px,5vw,64px);animation:raa-houle 11s ease-in-out infinite alternate}
rdr-accueil-apercu .vague-sep path{fill:var(--apres)}
rdr-accueil-apercu .vague-sep path:first-child{fill-opacity:.34}
@keyframes raa-houle{from{translate:-40px 0}to{translate:40px 0}}
rdr-accueil-apercu .actus{position:relative;background:#0E111D;color:#fff;padding:60px 0 70px;overflow:hidden}
rdr-accueil-apercu .actus .filigrane{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:.45;pointer-events:none;-webkit-mask-image:linear-gradient(to bottom,#000 62%,transparent 96%);mask-image:linear-gradient(to bottom,#000 62%,transparent 96%)}
rdr-accueil-apercu .actus .trame{position:relative}
rdr-accueil-apercu .sec-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:26px}
rdr-accueil-apercu .sec-tete h2{font-size:clamp(34px,3.4vw,48px);line-height:1}
rdr-accueil-apercu .sec-tete .sous{margin-top:8px;font-size:13.5px;color:var(--t3)}
rdr-accueil-apercu .sec-tete .trait{margin-bottom:12px}
rdr-accueil-apercu .onglets{display:flex;gap:4px;padding:4px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid var(--filet)}
rdr-accueil-apercu .onglet{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 5px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--t2);transition:background .15s,color .15s}
rdr-accueil-apercu .onglet i{width:24px;height:24px;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;background:var(--bg);color:var(--c)}
rdr-accueil-apercu .onglet i svg{width:13px;height:13px}
rdr-accueil-apercu .onglet:hover{color:#0E111D;background:#fff}
rdr-accueil-apercu .actus-grille{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:14px;height:clamp(420px,50vh,520px)}
rdr-accueil-apercu .actus-grille > div{min-height:0}
rdr-accueil-apercu .actus-grille .carte{height:100%}
rdr-accueil-apercu .actus-droite{display:grid;grid-template-rows:1fr 1fr;gap:14px;min-height:0}
rdr-accueil-apercu .carte{position:relative;display:block;border-radius:18px;overflow:hidden;background:var(--panneau);min-height:0;opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s cubic-bezier(.22,.8,.3,1);border:1px solid rgba(255,255,255,.08)}
rdr-accueil-apercu .carte.est-la{opacity:1;transform:none}
rdr-accueil-apercu .actu-squel{background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.09),rgba(255,255,255,.04));background-size:200% 100%;animation:raa-actu-squel 1.4s ease-in-out infinite;pointer-events:none}
rdr-accueil-apercu .breve.actu-squel{height:102px}
@keyframes raa-actu-squel{0%{background-position:100% 0}100%{background-position:-100% 0}}
rdr-accueil-apercu .carte img.cover{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
rdr-accueil-apercu .carte:hover img.cover{transform:scale(1.04)}
rdr-accueil-apercu .carte::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 32%);z-index:1}
rdr-accueil-apercu .carte::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,29,0) 38%,rgba(14,17,29,.62) 66%,rgba(14,17,29,.95) 100%);z-index:1}
rdr-accueil-apercu .carte-haut{position:absolute;left:16px;top:16px;right:16px;z-index:2;display:flex;gap:8px;align-items:center;justify-content:space-between}
rdr-accueil-apercu .cat{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;line-height:1;background:var(--bg,#DCF2EF);color:var(--c,#0B6E6B);padding:6px 9px;border-radius:6px}
rdr-accueil-apercu .cat svg{width:12px;height:12px}
rdr-accueil-apercu .glyphe{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:999px;background:rgba(14,17,29,.72);color:#fff;backdrop-filter:blur(4px)}
rdr-accueil-apercu .glyphe svg{width:16px;height:16px}
rdr-accueil-apercu .glyphe--grand{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:64px;height:64px;background:rgba(255,255,255,.92);color:#0E111D;z-index:2}
rdr-accueil-apercu .glyphe--grand svg{width:28px;height:28px}
rdr-accueil-apercu .carte:hover .glyphe--grand{background:var(--jaune)}
rdr-accueil-apercu .carte-txt{position:absolute;left:0;right:0;bottom:0;padding:18px;z-index:2;display:flex;flex-direction:column;gap:7px}
rdr-accueil-apercu .carte--une .carte-txt{padding:26px 28px;gap:10px;max-width:680px}
rdr-accueil-apercu .carte h3{font-family:var(--titre);font-style:italic;font-size:16px;line-height:1.15;text-transform:uppercase;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-accueil-apercu .carte--une h3{font-size:clamp(22px,2vw,30px);-webkit-line-clamp:3}
rdr-accueil-apercu .carte--une p{font-size:13.5px;line-height:1.5;color:var(--t2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-accueil-apercu .quand{font-size:11.5px;color:var(--t3)}
rdr-accueil-apercu .quand b{color:var(--jaune);font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:10.5px}
rdr-accueil-apercu .sujets{display:flex;gap:6px;flex-wrap:wrap}
rdr-accueil-apercu .sujet{display:inline-flex;align-items:center;padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.35);font-size:11px;font-weight:700;color:#fff;white-space:nowrap}
rdr-accueil-apercu .breves{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:14px}
rdr-accueil-apercu .breve{display:grid;grid-template-columns:96px 1fr;gap:14px;align-items:center;padding:10px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid var(--filet);transition:background .2s,transform .25s;opacity:0;transform:translateY(12px)}
rdr-accueil-apercu .breve.est-la{opacity:1;transform:none}
rdr-accueil-apercu .breve:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}
rdr-accueil-apercu .breve img{width:96px;height:80px;border-radius:10px;object-fit:cover}
rdr-accueil-apercu .breve h3{font-size:13px;font-weight:800;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
rdr-accueil-apercu .breve .cat{margin-bottom:6px;font-size:9.5px;padding:4px 7px}
rdr-accueil-apercu .breve .quand{display:block;margin-top:5px}
rdr-accueil-apercu .actus-pied{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:26px;flex-wrap:wrap}
rdr-accueil-apercu .skippers{position:relative;background:#0A1228;color:#fff;padding:clamp(80px,10vh,110px) 0 clamp(124px,15vh,168px);overflow:hidden}
rdr-accueil-apercu .skippers .topo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none}
rdr-accueil-apercu .skippers::before{content:'';position:absolute;left:0;right:0;top:0;height:160px;background:linear-gradient(#0E111D,rgba(14,17,29,0));pointer-events:none}
rdr-accueil-apercu .skippers .trame{position:relative}
rdr-accueil-apercu .skippers .sec-tete{align-items:center;text-align:center;flex-direction:column;margin-bottom:26px}
rdr-accueil-apercu .sk-liste{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px;padding-top:26px}
rdr-accueil-apercu [data-hors],rdr-accueil-apercu [data-hors] *{animation-play-state:paused !important}
rdr-accueil-apercu .sk{display:block;position:relative;perspective:1000px;min-width:0;aspect-ratio:4/5;color:inherit;text-decoration:none}
rdr-accueil-apercu .sk-flip{position:relative;height:100%;transform-style:preserve-3d;transform:rotateY(180deg);transition:transform .7s cubic-bezier(.25,.46,.45,.94)}
rdr-accueil-apercu .sk-flip.est-la{transform:rotateY(0) rotate(var(--rot,0deg))}
rdr-accueil-apercu .sk:hover .sk-flip.est-la{transform:rotateY(0) rotate(0) translateY(-6px) scale(1.02);transition:transform .35s cubic-bezier(.34,1.2,.64,1)}
rdr-accueil-apercu .sk-face{position:absolute;inset:0;border-radius:28px 3px 16px 3px;backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;background:#0f2238;border:1.5px solid transparent;transition:box-shadow .3s,border-color .3s;box-shadow:0 20px 40px rgba(0,0,0,.45)}
rdr-accueil-apercu .sk:hover .sk-front{border-color:var(--cc);box-shadow:0 0 0 1px var(--cc),0 20px 50px rgba(0,0,0,.5)}
rdr-accueil-apercu .sk-front::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--cc);opacity:.4}
rdr-accueil-apercu .sk-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .4s}
rdr-accueil-apercu .sk:hover .sk-img{transform:scale(1.07)}
rdr-accueil-apercu .sk-ov{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:44px 14px 16px;background:linear-gradient(to top,rgba(6,14,26,1) 0%,rgba(6,14,26,.92) 40%,rgba(6,14,26,.55) 70%,transparent 100%);color:#fff}
rdr-accueil-apercu .sk-prenom{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.7);margin-bottom:3px;white-space:nowrap;overflow:hidden}
rdr-accueil-apercu .sk-prenom img{width:18px;height:18px;border-radius:50%;object-fit:cover;flex:none}
rdr-accueil-apercu .sk-nom{font-family:var(--titre);font-style:italic;font-size:clamp(20px,1.8vw,28px);text-transform:uppercase;line-height:.9;margin-bottom:5px;text-wrap:balance}
rdr-accueil-apercu .sk-bateau{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--cc);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
rdr-accueil-apercu .sk-back{transform:rotateY(180deg);background:linear-gradient(135deg,rgba(255,255,255,.06),#0a0f1e)}
rdr-accueil-apercu .sk-classe{position:absolute;top:-30px;right:-8px;z-index:20;pointer-events:none}
rdr-accueil-apercu .sk-classe img{height:clamp(72px,6.5vw,100px);width:auto}
rdr-accueil-apercu .classes{display:flex;justify-content:center;align-items:flex-end;gap:clamp(12px,2vw,30px);margin-top:48px}
rdr-accueil-apercu .classe{display:flex;flex-direction:column;align-items:center;gap:6px;transition:transform .35s cubic-bezier(.25,0,0,1)}
rdr-accueil-apercu .classe img{display:block;height:clamp(72px,7vw,96px);width:auto;filter:drop-shadow(0 14px 20px rgba(0,0,0,.4))}
rdr-accueil-apercu .classe:hover{transform:translateY(-8px)}
rdr-accueil-apercu .classe b{font-family:var(--titre);font-style:italic;font-weight:400;font-size:24px;line-height:1;color:var(--cc);letter-spacing:0}
rdr-accueil-apercu .classe small{font-size:9.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--t3)}
rdr-accueil-apercu .skippers .sec-pied{display:flex;justify-content:center;margin-top:40px}
rdr-accueil-apercu .espace{position:relative;background:#F4F1E8;padding:clamp(70px,9vh,100px) 0 clamp(120px,15vh,150px);overflow:hidden;clip-path:inset(0)}
rdr-accueil-apercu .espace .trame{position:relative;z-index:1}
rdr-accueil-apercu .espace{--promo-h:clamp(370px,46vh,420px)}
rdr-accueil-apercu[data-liaison="sillage"] .espace{--air-haut:clamp(124px,16vh,176px);--nuit-haut:calc(var(--air-haut) + var(--promo-h) / 2);padding-top:var(--air-haut)}
rdr-accueil-apercu[data-liaison="sillage"] .espace::before{content:'';position:absolute;left:0;right:0;top:0;height:var(--nuit-haut);background:#0A1228;z-index:0}
rdr-accueil-apercu .espace::after{content:'';position:absolute;inset:0;z-index:0;background:#16355D;opacity:.06;pointer-events:none;-webkit-mask:var(--topo) repeat center top/1200px auto;mask:var(--topo) repeat center top/1200px auto}
rdr-accueil-apercu[data-liaison="sillage"] .promo{box-shadow:0 30px 70px rgba(10,18,40,.35),0 34px 80px rgba(232,108,32,.22)}
rdr-accueil-apercu .promo{position:relative;border-radius:26px;background:radial-gradient(90% 120% at 0% 0%,#F4A23A 0%,rgba(244,162,58,0) 58%),linear-gradient(118deg,#EF8A2B 0%,#E86C20 46%,#DB5710 100%);color:#fff;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);min-height:var(--promo-h);box-shadow:0 34px 80px rgba(232,108,32,.3)}
rdr-accueil-apercu .promo::before{content:'';position:absolute;inset:0;border-radius:inherit;opacity:.5;pointer-events:none;background:repeating-linear-gradient(128deg,rgba(255,255,255,.07) 0 150px,rgba(255,255,255,0) 150px 330px)}
rdr-accueil-apercu .promo-txt{padding:58px 62px;display:flex;flex-direction:column;gap:14px;justify-content:center;position:relative;z-index:2}
rdr-accueil-apercu .promo .kicker{background:none;padding:0;color:#fff;font-size:13px;font-weight:700;letter-spacing:.06em}
rdr-accueil-apercu .promo h2{font-size:clamp(40px,4.4vw,66px);line-height:.9;color:#fff;text-shadow:0 4px 20px rgba(80,24,0,.18)}
rdr-accueil-apercu .promo h2 em{font-style:inherit;color:var(--jaune)}
rdr-accueil-apercu .promo p{font-size:15px;line-height:1.55;max-width:540px;color:#fff;font-weight:600}
rdr-accueil-apercu .promo-btns{display:flex;gap:14px 22px;flex-wrap:wrap;align-items:center;margin-top:10px}
rdr-accueil-apercu .cta-rhum{display:inline-flex;align-items:center;gap:10px;min-height:50px;padding:0 22px;border-radius:12px 3px 12px 3px;background:var(--jaune);color:#13204A;font:italic 400 19px/1 var(--titre);text-transform:uppercase;text-decoration:none;white-space:nowrap;box-shadow:0 12px 24px -12px rgba(80,24,0,.7);transition:transform .2s ease,box-shadow .2s ease}
rdr-accueil-apercu .cta-rhum svg{width:18px;height:18px;flex:none;transition:transform .2s ease}
rdr-accueil-apercu .cta-rhum:hover{transform:translateY(-2px);box-shadow:0 16px 28px -12px rgba(80,24,0,.8)}
rdr-accueil-apercu .cta-rhum:hover svg{transform:translateX(3px)}
rdr-accueil-apercu .lien-rhum{color:#fff;cursor:pointer;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-decoration:underline;text-underline-offset:5px;text-decoration-color:rgba(255,255,255,.5)}
rdr-accueil-apercu .lien-rhum:hover{text-decoration-color:#fff}
rdr-accueil-apercu .cta-rhum:focus-visible,rdr-accueil-apercu .lien-rhum:focus-visible{outline:3px solid #13204A;outline-offset:3px}
rdr-accueil-apercu .promo-visuel{position:relative;border-radius:0 26px 26px 0;overflow:visible}
rdr-accueil-apercu .promo-visuel .photo{position:absolute;inset:0;border-radius:0 26px 26px 0;overflow:hidden}
rdr-accueil-apercu .promo-visuel .photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top}
rdr-accueil-apercu .promo-visuel .photo::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#E4661C 0%,rgba(228,102,28,0) 45%);z-index:1}
rdr-accueil-apercu .pub-encart{--pub-hmax:clamp(240px,56vh,470px);position:relative;z-index:1;display:block;width:min(100%,calc(var(--pub-hmax) * var(--pub-ratio,3)));margin:var(--pub-haut) auto 0}
rdr-accueil-apercu .pub-encart[hidden]{display:none}
rdr-accueil-apercu .pub-cadre{position:relative;aspect-ratio:var(--pub-ratio,3);border-radius:22px;overflow:hidden;background:#0A1228;box-shadow:0 30px 70px -18px rgba(10,18,40,.4),0 10px 24px -12px rgba(10,18,40,.25)}
rdr-accueil-apercu .espace{--pub-haut:clamp(132px,16vh,176px);--pub-bas:clamp(120px,15vh,160px)}
@supports (overflow:clip){
rdr-accueil-apercu .espace{overflow:clip}
}
rdr-accueil-apercu .espace:has(.pub-encart:not([hidden])){padding-bottom:var(--pub-bas)}
rdr-accueil-apercu .pub-encart a,rdr-accueil-apercu .pub-encart picture{display:block;width:100%;height:100%}
rdr-accueil-apercu .pub-encart img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .pub-encart a:hover img{transform:scale(1.02)}
rdr-accueil-apercu .pub-encart a:focus-visible{outline:3px solid var(--teal);outline-offset:-3px}
rdr-accueil-apercu .jx{position:relative;z-index:1;margin-top:clamp(88px,12vh,120px)}
rdr-accueil-apercu .jx[hidden]{display:none}
rdr-accueil-apercu .jx + .pub-encart{margin-top:clamp(64px,9vh,96px)}
rdr-accueil-apercu .jx-tete{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px 40px;align-items:end;margin-bottom:clamp(22px,3.4vh,32px)}
rdr-accueil-apercu .jx-tete .kicker svg{width:13px;height:13px}
rdr-accueil-apercu .jx-tete .kicker{margin-bottom:clamp(10px,1.8vh,16px)}
rdr-accueil-apercu .jx-titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.92;margin:0;font-size:clamp(34px,3.6vw,54px);color:var(--marine2)}
rdr-accueil-apercu .jx-titre em{font-style:inherit;color:#E86C20}
rdr-accueil-apercu .jx-tete p{margin:12px 0 0;max-width:620px;font-size:15px;line-height:1.55;font-weight:500;color:#3A4256}
rdr-accueil-apercu .jx-tete p b{color:#0E111D;font-weight:800}
rdr-accueil-apercu .jx-fleches{display:flex;gap:10px}
rdr-accueil-apercu .jx-fleche{width:48px;height:48px;display:grid;place-items:center;border:2px solid var(--marine2);background:transparent;color:var(--marine2);border-radius:3px 12px 3px 12px;cursor:pointer;transition:background .2s,color .2s,opacity .2s}
rdr-accueil-apercu .jx-fleche:hover:not(:disabled){background:var(--marine2);color:#fff}
rdr-accueil-apercu .jx-fleche:disabled{opacity:.3;cursor:default}
rdr-accueil-apercu .jx-fleche svg{width:20px;height:20px}
rdr-accueil-apercu .jx-fleche:focus-visible{outline:3px solid var(--teal2);outline-offset:3px}
rdr-accueil-apercu .jx-piste{--gap:22px;--cartes:3.15;display:flex;gap:var(--gap);overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:var(--marge);padding:6px var(--marge) 26px;margin:0 calc(var(--marge) * -1);list-style:none;scrollbar-width:none;-webkit-overflow-scrolling:touch}
rdr-accueil-apercu .jx-piste::-webkit-scrollbar{display:none}
rdr-accueil-apercu .jx-carte{flex:0 0 calc((100% - (var(--cartes) - 1) * var(--gap) - var(--marge)) / var(--cartes));scroll-snap-align:start;display:flex;flex-direction:column;background:#fff;border-radius:28px 3px 16px 3px;overflow:hidden;box-shadow:0 18px 40px -22px rgba(14,17,29,.45),0 2px 0 rgba(14,17,29,.04);min-width:0;transition:transform .25s ease,box-shadow .25s ease}
rdr-accueil-apercu .jx-carte:hover{transform:translateY(-4px);box-shadow:0 26px 50px -24px rgba(14,17,29,.5)}
rdr-accueil-apercu .jx-vis{position:relative;height:clamp(168px,24vh,214px);overflow:hidden;background:var(--marine2);flex:none}
rdr-accueil-apercu .jx-vis img.jx-fond{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
rdr-accueil-apercu .jx-vis::after{content:'';position:absolute;inset:auto 0 0 0;height:50%;background:linear-gradient(0deg,rgba(10,18,40,.55),rgba(10,18,40,0));pointer-events:none}
rdr-accueil-apercu .jx-etiq{position:absolute;z-index:3;left:16px;top:16px;display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border-radius:3px 9px 3px 9px;background:var(--jaune);color:#0E111D;font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .jx-etiq svg{width:12px;height:12px}
rdr-accueil-apercu .jx-reste{position:absolute;z-index:3;right:14px;bottom:14px;display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border-radius:9px 3px 9px 3px;background:rgba(10,18,40,.72);backdrop-filter:blur(6px);color:#fff;font-size:11.5px;font-weight:700;line-height:1}
rdr-accueil-apercu .jx-reste svg{width:13px;height:13px;color:var(--jaune)}
rdr-accueil-apercu .jx-vis--photo{background:radial-gradient(90% 80% at 15% 0%,rgba(93,191,192,.45) 0%,rgba(93,191,192,0) 60%),linear-gradient(160deg,#0F4C5C 0%,#0B2C4A 60%,#0A1A35 100%)}
rdr-accueil-apercu .jx-vis--photo .jx-logo{position:absolute;z-index:2;left:50%;top:46%;transform:translate(-50%,-50%);width:min(64%,300px);filter:drop-shadow(0 8px 18px rgba(0,0,0,.35))}
rdr-accueil-apercu .jx-vis--plein .jx-etiq{display:none}
rdr-accueil-apercu .jx-vis--roue{background:radial-gradient(80% 90% at 85% 100%,rgba(252,241,80,.28) 0%,rgba(252,241,80,0) 60%),linear-gradient(150deg,#16355D 0%,#0F2747 100%)}
rdr-accueil-apercu .jx-vis--roue .jx-roue{position:absolute;right:-90px;top:50%;width:300px;height:300px;transform:translateY(-50%) rotate(-12deg);border-radius:50%;background:conic-gradient(var(--teal) 0 45deg,var(--jaune) 45deg 90deg,var(--orange) 90deg 135deg,#7894F7 135deg 180deg,var(--teal) 180deg 225deg,var(--jaune) 225deg 270deg,var(--orange) 270deg 315deg,#7894F7 315deg 360deg);box-shadow:0 0 0 8px #fff,0 0 0 12px rgba(255,255,255,.2);opacity:.95}
rdr-accueil-apercu .jx-vis--roue .jx-roue::after{content:'';position:absolute;inset:38%;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 6px var(--marine2)}
rdr-accueil-apercu .jx-vis--roue .jx-marque{position:absolute;z-index:2;left:16px;bottom:16px;width:104px}
rdr-accueil-apercu .jx-vis--roue .jx-lots{position:absolute;z-index:2;left:36%;right:16%;top:22px;bottom:10px;display:flex;align-items:flex-end;justify-content:center;gap:2px}
rdr-accueil-apercu .jx-vis--roue .jx-lots img{height:62%;max-width:44%;width:auto;object-fit:contain;filter:drop-shadow(0 10px 12px rgba(0,0,0,.35))}
rdr-accueil-apercu .jx-vis--roue .jx-lots img:nth-child(2){height:92%}
rdr-accueil-apercu .jx-vis--roue::after{display:none}
rdr-accueil-apercu .jx-vis--jt img.jx-fond{object-position:50% 77%;transform:scale(1.9);transform-origin:80% 58%}
rdr-accueil-apercu .jx-vis--mob img.jx-fond{object-position:30% 50%}
rdr-accueil-apercu .jx-corps{display:flex;flex-direction:column;gap:12px;padding:20px 22px 22px;flex:1}
rdr-accueil-apercu .jx-nom{margin:0;font:italic 400 clamp(21px,1.7vw,25px)/1 var(--titre);text-transform:uppercase;color:var(--marine2)}
rdr-accueil-apercu .jx-accroche{margin:0;font-size:13.5px;line-height:1.5;color:#3A4256;font-weight:500}
rdr-accueil-apercu .jx-gain{display:flex;gap:10px;align-items:flex-start;padding:11px 12px;border-radius:3px 12px 3px 12px;background:#FFF9D6;border:1px solid #F6E58A}
rdr-accueil-apercu .jx-gain svg{flex:none;width:18px;height:18px;color:#C9871B;margin-top:1px}
rdr-accueil-apercu .jx-gain div{font-size:12.5px;line-height:1.4;color:#3A4256}
rdr-accueil-apercu .jx-gain small{display:block;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#A86A0C;margin-bottom:2px}
rdr-accueil-apercu .jx-gain b{font-weight:800;color:#0E111D}
rdr-accueil-apercu .jx-meta{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:11.5px;font-weight:600;color:#6B7287}
rdr-accueil-apercu .jx-meta span{display:inline-flex;align-items:center;gap:5px}
rdr-accueil-apercu .jx-meta svg{width:14px;height:14px}
rdr-accueil-apercu .jx-meta .jx-chiffre{color:var(--vert)}
rdr-accueil-apercu .jx-actions{margin-top:auto;display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;padding-top:4px}
rdr-accueil-apercu .jx-carte .cta-rhum{min-height:46px;padding:0 18px;font-size:17px;gap:9px;box-shadow:0 10px 20px -12px rgba(80,60,0,.55)}
rdr-accueil-apercu .jx-carte .cta-rhum svg{width:16px;height:16px}
rdr-accueil-apercu .jx-lien{font-size:12px;font-weight:700;color:#6B7287;text-decoration:underline;text-underline-offset:3px}
rdr-accueil-apercu .jx-lien:hover{color:var(--marine2)}
rdr-accueil-apercu .jx-lien:focus-visible{outline:3px solid #13204A;outline-offset:3px}
rdr-accueil-apercu .jx-carte--inscr{background:linear-gradient(160deg,#16355D 0%,#0F2747 100%);color:#fff;position:relative}
rdr-accueil-apercu .jx-carte--inscr .jx-haut{position:relative;height:clamp(168px,24vh,214px);flex:none;overflow:hidden;background:radial-gradient(70% 80% at 50% 100%,rgba(93,191,192,.35),rgba(93,191,192,0) 70%)}
rdr-accueil-apercu .jx-carte--inscr .jx-haut::before{content:'';position:absolute;left:46%;top:54%;width:min(100%,330px);aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(133,216,213,.42) 0%,rgba(93,191,192,.24) 30%,rgba(93,191,192,.1) 52%,rgba(93,191,192,0) 70%);filter:blur(10px);pointer-events:none}
rdr-accueil-apercu .jx-carte--inscr .jx-haut img{position:absolute;left:50%;bottom:6px;height:88%;width:auto;max-width:none;transform:translateX(-50%);filter:drop-shadow(0 14px 18px rgba(0,0,0,.35))}
rdr-accueil-apercu .jx-carte--inscr .jx-nom{color:#fff}
rdr-accueil-apercu .jx-carte--inscr .jx-nom em{font-style:inherit;color:var(--jaune)}
rdr-accueil-apercu .jx-carte--inscr ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;font-size:13.5px;font-weight:600;color:rgba(255,255,255,.88)}
rdr-accueil-apercu .jx-carte--inscr li{display:flex;align-items:center;gap:9px}
rdr-accueil-apercu .jx-carte--inscr li svg{flex:none;width:16px;height:16px;color:var(--teal)}
rdr-accueil-apercu .jx-deja{font-size:12px;font-weight:600;color:rgba(255,255,255,.75)}
rdr-accueil-apercu .jx-deja a{color:#fff;font-weight:800;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
rdr-accueil-apercu .jx-pied{display:flex;align-items:center;gap:18px;margin-top:2px}
rdr-accueil-apercu .jx-avance{flex:1;height:4px;border-radius:4px;background:rgba(22,53,93,.12);overflow:hidden}
rdr-accueil-apercu .jx-avance i{display:block;height:100%;width:30%;border-radius:4px;background:var(--marine2);transition:transform .15s linear,width .2s}
rdr-accueil-apercu .jx-compte{font-size:12px;font-weight:700;color:#6B7287;white-space:nowrap}
@media (max-width:1180px){
rdr-accueil-apercu .jx-piste{--cartes:2.35}
}
@media (max-width:900px){
rdr-accueil-apercu .jx-tete{grid-template-columns:1fr}
rdr-accueil-apercu .jx-fleches{display:none}
rdr-accueil-apercu .jx-piste{--cartes:1.6}
}
@media (max-width:760px){
rdr-accueil-apercu .jx{margin-top:72px}
rdr-accueil-apercu .jx-piste{--cartes:1.12;--gap:14px}
rdr-accueil-apercu .jx-titre{font-size:34px}
rdr-accueil-apercu .jx-tete p{font-size:14px}
rdr-accueil-apercu .jx-corps{padding:18px 18px 20px}
rdr-accueil-apercu .jx-carte .cta-rhum{font-size:16px;padding:0 16px}
}
@media (max-height:760px) and (min-width:901px){
rdr-accueil-apercu .jx{margin-top:78px}
rdr-accueil-apercu .jx-tete{margin-bottom:18px}
rdr-accueil-apercu .jx-titre{font-size:clamp(32px,3.2vw,44px)}
rdr-accueil-apercu .jx-tete p{margin-top:8px;font-size:14px}
rdr-accueil-apercu .jx-vis,rdr-accueil-apercu .jx-carte--inscr .jx-haut{height:140px}
rdr-accueil-apercu .jx-corps{gap:9px;padding:15px 20px 16px}
rdr-accueil-apercu .jx-accroche{font-size:13px}
rdr-accueil-apercu .jx-gain{padding:9px 11px}
rdr-accueil-apercu .jx-carte .cta-rhum{min-height:42px;font-size:16px}
}
@keyframes raa-flotte{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
rdr-accueil-apercu .tymal{position:relative;background:var(--jaune);color:#0E111D;padding:clamp(100px,12vh,130px) 0 clamp(104px,13vh,136px);overflow:hidden;clip-path:inset(0)}
rdr-accueil-apercu .tymal .elem{position:absolute;left:-160px;bottom:-140px;width:640px;height:440px;object-fit:contain;opacity:.55;pointer-events:none;transform:rotate(12deg)}
rdr-accueil-apercu .tymal .trame{position:relative;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:50px;align-items:center}
rdr-accueil-apercu .tymal h2{font-size:clamp(32px,3.2vw,46px);line-height:1}
rdr-accueil-apercu .tymal p{margin-top:16px;font-size:15px;line-height:1.6;max-width:540px;font-weight:500}
rdr-accueil-apercu .tymal .btns{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
rdr-accueil-apercu .tymal .kicker{margin-bottom:14px}
rdr-accueil-apercu .faq-bloc[hidden]{display:none}
rdr-accueil-apercu .faq-acc{--encre:#0E111D;--encre2:#3A4256;--encre3:#6B7285;--papier:#F4F1E8;position:relative;overflow:clip;background:var(--papier);color:var(--encre);padding:clamp(56px,8vh,96px) 0 clamp(64px,10vh,112px)}
rdr-accueil-apercu .fa-topo{position:absolute;inset:0;background:#16355D;opacity:.06;pointer-events:none;-webkit-mask:var(--topo) repeat center top/1200px auto;mask:var(--topo) repeat center top/1200px auto}
rdr-accueil-apercu .faq-acc .trame{position:relative;z-index:1}
rdr-accueil-apercu .faq-acc:not(.fa-vu) .fa-q{opacity:0}
rdr-accueil-apercu .faq-acc.fa-vu .fa-q{animation:raa-fa-monte .6s cubic-bezier(.22,.8,.3,1) both;animation-delay:calc(var(--i,0) * 70ms)}
@keyframes raa-fa-monte{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .fa-rub{flex:none;display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--papier);color:var(--encre3);font-size:10.5px;font-style:normal;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
rdr-accueil-apercu .fa-rub::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--cc)}
rdr-accueil-apercu .fa-corps{max-width:980px;margin:0 auto}
rdr-accueil-apercu .fa-tete{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding-bottom:16px;border-bottom:2px solid var(--encre)}
rdr-accueil-apercu .fa-fil{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--encre3)}
rdr-accueil-apercu .fa-fil b{color:var(--encre);font-weight:800}
rdr-accueil-apercu .fa-tete h2 em{display:block;font-style:inherit}
rdr-accueil-apercu .fa-tete h2{margin-top:10px;font-size:clamp(28px,3vw,42px);line-height:.95;color:var(--encre)}
rdr-accueil-apercu .fa-toutes{flex:none;display:inline-flex;align-items:center;justify-content:space-between;gap:14px;height:54px;padding:0 10px 0 22px;border-radius:14px;background:var(--encre);color:var(--jaune);font-size:15px;font-weight:800;box-shadow:0 16px 30px -14px rgba(14,17,29,.55);transition:transform .2s,box-shadow .2s}
rdr-accueil-apercu .fa-toutes:hover{transform:translateY(-2px);box-shadow:0 20px 36px -14px rgba(14,17,29,.6)}
rdr-accueil-apercu .fa-toutes i{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:var(--jaune);color:var(--encre)}
rdr-accueil-apercu .fa-toutes i svg{width:18px;height:18px;transition:transform .2s}
rdr-accueil-apercu .fa-toutes:hover i svg{transform:translateX(3px)}
rdr-accueil-apercu .fa-toutes--bas{display:none}
rdr-accueil-apercu .fa-cherche{display:flex;align-items:center;height:56px;margin-top:22px;padding:0 7px 0 18px;border-radius:16px;background:#fff;color:var(--encre);box-shadow:0 1px 0 rgba(14,17,29,.06),0 10px 24px -18px rgba(14,17,29,.35);transition:box-shadow .25s}
rdr-accueil-apercu .fa-cherche:focus-within{box-shadow:0 0 0 4px rgba(252,241,80,.7),0 14px 30px -18px rgba(14,17,29,.4)}
rdr-accueil-apercu .fa-cherche > svg{flex:none;width:19px;height:19px;color:var(--encre3)}
rdr-accueil-apercu .fa-cherche input{flex:1;min-width:0;height:100%;padding:0 12px;border:0;background:none;outline:none;color:var(--encre);font:600 15.5px var(--police)}
rdr-accueil-apercu .fa-cherche input::placeholder{color:var(--encre3);font-weight:500}
rdr-accueil-apercu .fa-cherche button{flex:none;display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:11px;background:var(--jaune);color:var(--encre);cursor:pointer}
rdr-accueil-apercu .fa-cherche button svg{width:18px;height:18px}
rdr-accueil-apercu .fa-liste{margin-top:14px}
rdr-accueil-apercu .fa-q{--cc:var(--teal);position:relative;border-radius:14px;background:#fff;box-shadow:0 1px 0 rgba(14,17,29,.06),0 10px 24px -18px rgba(14,17,29,.35);transition:box-shadow .3s}
rdr-accueil-apercu .fa-q + .fa-q{margin-top:8px}
rdr-accueil-apercu .fa-q::before{content:'';position:absolute;left:0;top:12px;bottom:12px;width:4px;border-radius:0 3px 3px 0;background:var(--cc);transition:top .3s,bottom .3s}
rdr-accueil-apercu .fa-q[open]{box-shadow:0 1px 0 rgba(14,17,29,.08),0 22px 40px -24px rgba(14,17,29,.5)}
rdr-accueil-apercu .fa-q[open]::before{top:0;bottom:0;border-radius:14px 0 0 14px}
rdr-accueil-apercu .fa-q summary{display:flex;align-items:center;gap:14px;padding:14px 14px 14px 22px;border-radius:14px;cursor:pointer;list-style:none}
rdr-accueil-apercu .fa-q summary::-webkit-details-marker{display:none}
rdr-accueil-apercu .fa-q summary:focus-visible{outline:3px solid var(--encre);outline-offset:3px}
rdr-accueil-apercu .fa-q summary b{flex:1;font-size:15px;font-weight:800;line-height:1.35}
rdr-accueil-apercu .fa-q summary i{flex:none;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--papier);transition:transform .35s,background .25s}
rdr-accueil-apercu .fa-q summary i svg{width:15px;height:15px}
rdr-accueil-apercu .fa-q[open] summary i{transform:rotate(180deg);background:var(--cc)}
rdr-accueil-apercu .fa-rep{padding:0 22px 16px;color:var(--encre2);font-size:14.5px;line-height:1.65}
rdr-accueil-apercu .fa-q[open] .fa-rep{animation:raa-fa-ouvre .3s ease both}
@keyframes raa-fa-ouvre{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
rdr-accueil-apercu .fa-rep p + p{margin-top:6px}
rdr-accueil-apercu .fa-rep b{color:var(--encre);font-weight:800}
rdr-accueil-apercu .fa-rep sup{font-size:.65em;line-height:0}
rdr-accueil-apercu .fa-rep a{color:var(--encre);font-weight:700;text-decoration:underline;text-decoration-color:var(--cc);text-decoration-thickness:3px;text-underline-offset:4px}
rdr-accueil-apercu .fa-rep .fa-source{display:flex;width:fit-content;align-items:center;gap:8px;margin-top:12px;padding:7px 13px 7px 15px;border-radius:999px;background:var(--encre);color:#fff;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s}
rdr-accueil-apercu .fa-rep .fa-source svg{width:14px;height:14px;color:var(--jaune);transition:transform .2s}
rdr-accueil-apercu .fa-rep .fa-source:hover{background:#1f2640}
rdr-accueil-apercu .fa-rep .fa-source:hover svg{transform:translate(2px,-2px)}
rdr-accueil-apercu .fa-valider{display:inline-block;margin-right:7px;padding:3px 8px;border-radius:6px;background:rgba(241,159,57,.18);color:#B45A00;font-size:11px;font-weight:800;letter-spacing:.06em;line-height:1.3;text-transform:uppercase}
rdr-accueil-apercu .hv-haut{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px}
rdr-accueil-apercu .hv-depart{display:inline-flex;align-items:center;gap:7px;padding:6px 10px 5px;border-radius:6px;background:var(--jaune);color:#0E111D;font-family:var(--titre);font-style:italic;font-size:clamp(11px,1.02vw,14.5px);line-height:1;text-transform:uppercase}
rdr-accueil-apercu .hv-depart svg{width:13px;height:13px;flex:none}
rdr-accueil-apercu .hv-depart-court{display:none}
@media (max-width:560px){
rdr-accueil-apercu .hv-depart-long{display:none}
rdr-accueil-apercu .hv-depart-court{display:inline}
}
rdr-accueil-apercu .hv-depart sup{font-size:.62em;line-height:0;vertical-align:.55em;margin-left:1px}
rdr-accueil-apercu .video{position:relative;padding:0 40px 0 0}
rdr-accueil-apercu .video-cadre{position:relative;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:#0E111D;box-shadow:0 30px 56px -14px rgba(0,0,0,.34);transform:rotate(1.5deg);border:6px solid #fff}
rdr-accueil-apercu .video-cadre img,rdr-accueil-apercu .video-cadre iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}
rdr-accueil-apercu .video-cadre button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:84px;height:84px;border-radius:50%;border:0;background:var(--jaune);color:#0E111D;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 20px 40px rgba(0,0,0,.4);transition:transform .2s}
rdr-accueil-apercu .video-cadre button:hover{transform:translate(-50%,-50%) scale(1.08)}
rdr-accueil-apercu .video-cadre button svg{width:34px;height:34px;margin-left:5px}
rdr-accueil-apercu .video-cadre .duree{position:absolute;right:18px;bottom:16px;padding:6px 10px;border-radius:6px;background:rgba(14,17,29,.75);color:#fff;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
rdr-accueil-apercu .video-cadre .vc-cookies{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;padding:clamp(12px,3vw,26px);text-align:center;background:linear-gradient(rgba(14,17,29,.84),rgba(14,17,29,.93))}
rdr-accueil-apercu .video-cadre .vc-cookies .vc-ico{width:26px;height:26px;stroke:var(--jaune);fill:none;stroke-width:1.7;stroke-linecap:round}
rdr-accueil-apercu .video-cadre .vc-cookies b{color:#fff;font-size:clamp(13px,1.5vw,17px);font-weight:800}
rdr-accueil-apercu .video-cadre .vc-cookies p{margin:0;max-width:36ch;color:rgba(255,255,255,.84);font-size:clamp(11.5px,1.15vw,13.5px);line-height:1.5}
rdr-accueil-apercu .video-cadre .vc-cookies button{position:static;left:auto;top:auto;transform:none;width:auto;height:auto;min-height:38px;padding:9px 18px;border-radius:999px;background:var(--jaune);color:#0E111D;font-size:13px;font-weight:800;letter-spacing:.02em}
rdr-accueil-apercu .video-cadre .vc-cookies button:hover{transform:translateY(-1px)}
rdr-accueil-apercu .video-cadre .vc-cookies button svg{display:none}
rdr-accueil-apercu .video-cadre .vc-cookies a{color:rgba(255,255,255,.86);font-size:12px;text-decoration:underline;text-underline-offset:3px}
rdr-accueil-apercu .video-cadre .vc-cookies a:hover{color:#fff}
@media (max-width:760px){
rdr-accueil-apercu .video-cadre .vc-cookies{gap:7px}
rdr-accueil-apercu .video-cadre .vc-cookies .vc-ico{display:none}
rdr-accueil-apercu .video-cadre .vc-cookies p{max-width:30ch}
}
rdr-accueil-apercu .video-tymal{position:absolute;left:-70px;bottom:-60px;width:230px;filter:drop-shadow(0 20px 30px rgba(0,0,0,.25));transform:rotate(-6deg)}
rdr-accueil-apercu .sep{position:relative;z-index:4;line-height:0}
rdr-accueil-apercu .sep > div{display:none}
rdr-accueil-apercu[data-liaison="sillage"] .sep--liaison .sep-sillage{display:block}
rdr-accueil-apercu .sep-sillage{position:relative;height:150px;background:var(--avant);overflow:hidden;transform:scaleX(-1)}
rdr-accueil-apercu .sep-sillage .sl-port b{transform:scaleX(-1)}
rdr-accueil-apercu .sl-svg{position:absolute;left:0;top:0;width:100%;height:100%;display:block;overflow:visible}
rdr-accueil-apercu .sl-reste{fill:none;stroke:rgba(255,255,255,.24);stroke-width:1.5;stroke-dasharray:6 7}
rdr-accueil-apercu .sl-fait{fill:none;stroke:var(--jaune);stroke-width:2.5;stroke-linecap:round;stroke-dasharray:1000;stroke-dashoffset:0;animation:sl-trace-f 16s linear infinite}
rdr-accueil-apercu .sl-bateau{position:absolute;left:0;top:0;width:100px;offset-anchor:51% 88%;offset-rotate:auto;offset-distance:100%;filter:drop-shadow(0 4px 6px rgba(0,0,0,.35))}
rdr-accueil-apercu .sl-bateau svg{display:block;width:100%;height:auto;transform-origin:51% 88%;animation:raa-sl-tangue 3.4s ease-in-out infinite}
@keyframes raa-sl-tangue{0%,100%{transform:rotate(-1.2deg) translateY(0)}50%{transform:rotate(1deg) translateY(-1px)}}
rdr-accueil-apercu .sl-port{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%}
rdr-accueil-apercu .sl-port b{position:absolute;top:18px;white-space:nowrap;font:800 10px/1 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--t2)}
rdr-accueil-apercu .sl-port--dep{background:var(--teal)}
rdr-accueil-apercu .sl-port--dep b{left:-5px}
rdr-accueil-apercu .sl-port--dep::after{content:'';position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--teal);opacity:0;animation:raa-sl-pouls 2.2s ease-out infinite}
@keyframes raa-sl-pouls{from{transform:scale(.6);opacity:.9}to{transform:scale(2.4);opacity:0}}
rdr-accueil-apercu .sl-port--arr{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4);animation:sl-arrivee-f 16s linear infinite}
rdr-accueil-apercu .sl-port--arr b{right:-5px}
rdr-accueil-apercu .sl-milles{position:absolute;left:50%;transform:translateX(-50%) scaleX(-1);font-family:var(--titre);font-style:italic;font-size:13px;line-height:1;letter-spacing:.02em;color:rgba(255,255,255,.55);white-space:nowrap}
rdr-accueil-apercu .sl-six .sl-fait{stroke-dashoffset:100;animation:raa-sl6-trace 18s linear infinite}
rdr-accueil-apercu .sl-six .sl-port--arr{animation:raa-sl6-arrivee 18s linear infinite}
rdr-accueil-apercu .sl-six .sl-bateau{width:var(--l);offset-anchor:var(--ax) var(--ay);offset-distance:var(--pose)}
rdr-accueil-apercu .sl-six .sl-bateau svg{overflow:visible;transform-origin:var(--ax) var(--ay);animation-duration:var(--tangue)}
rdr-accueil-apercu .s6-lisere{fill:var(--cc);stroke:var(--cc)}
rdr-accueil-apercu .sl-six .sl6--ultim{--l:clamp(69px,6.71vw,96px);--ax:56.7%;--ay:86.7%;--pose:90%;--tangue:3.4s;animation:raa-sl6-ultim 18s linear infinite}
@keyframes raa-sl6-ultim{0%{offset-distance:0%;opacity:0}1.78%{opacity:1}44.44%{offset-distance:100%;opacity:1}45.78%{opacity:1}48%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-ultim-tel{0%{offset-distance:0%;opacity:0}1.68%{opacity:1}42.11%{offset-distance:100%;opacity:1}42.74%{opacity:1}44.53%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-six .sl6--o50{--l:clamp(59px,5.73vw,82px);--ax:58.7%;--ay:86%;--pose:76%;--tangue:3.1s;animation:raa-sl6-o50 18s linear infinite}
@keyframes raa-sl6-o50{0%,3.56%{offset-distance:0%;opacity:0}5.33%{opacity:1}51.11%{offset-distance:100%;opacity:1}52.44%{opacity:1}54.67%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-o50-tel{0%,6.32%{offset-distance:0%;opacity:0}8%{opacity:1}50%{offset-distance:100%;opacity:1}50.63%{opacity:1}52.42%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-six .sl6--c40{--l:clamp(48px,4.69vw,67px);--ax:64.2%;--ay:78.4%;--pose:62%;--tangue:2.4s;animation:raa-sl6-c40 18s linear infinite}
@keyframes raa-sl6-c40{0%,7.11%{offset-distance:0%;opacity:0}8.89%{opacity:1}57.78%{offset-distance:100%;opacity:1}59.11%{opacity:1}61.33%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-c40-tel{0%,12.63%{offset-distance:0%;opacity:0}14.32%{opacity:1}57.89%{offset-distance:100%;opacity:1}58.53%{opacity:1}60.32%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-six .sl6--imoca{--l:clamp(50px,4.83vw,69px);--ax:65.1%;--ay:80.1%;--pose:48%;--tangue:2.8s;animation:raa-sl6-imoca 18s linear infinite}
@keyframes raa-sl6-imoca{0%,10.67%{offset-distance:0%;opacity:0}12.44%{opacity:1}64.44%{offset-distance:100%;opacity:1}65.78%{opacity:1}68%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-imoca-tel{0%,18.95%{offset-distance:0%;opacity:0}20.63%{opacity:1}65.79%{offset-distance:100%;opacity:1}66.42%{opacity:1}68.21%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-six .sl6--vmono{--l:clamp(48px,4.62vw,66px);--ax:66.6%;--ay:86.4%;--pose:34%;--tangue:3s;animation:raa-sl6-vmono 18s linear infinite}
@keyframes raa-sl6-vmono{0%,14.22%{offset-distance:0%;opacity:0}16%{opacity:1}71.11%{offset-distance:100%;opacity:1}72.44%{opacity:1}74.67%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-vmono-tel{0%,25.26%{offset-distance:0%;opacity:0}26.95%{opacity:1}73.68%{offset-distance:100%;opacity:1}74.32%{opacity:1}76.11%,100%{offset-distance:100%;opacity:0}}
rdr-accueil-apercu .sl-six .sl6--vmulti{--l:clamp(52px,5.03vw,72px);--ax:66.9%;--ay:82.9%;--pose:20%;--tangue:2.6s;animation:raa-sl6-vmulti 18s linear infinite}
@keyframes raa-sl6-vmulti{0%,17.78%{offset-distance:0%;opacity:0}19.56%{opacity:1}77.78%{offset-distance:100%;opacity:1}79.11%{opacity:1}81.33%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-vmulti-tel{0%,31.58%{offset-distance:0%;opacity:0}33.26%{opacity:1}81.58%{offset-distance:100%;opacity:1}82.21%{opacity:1}84%,100%{offset-distance:100%;opacity:0}}
@keyframes raa-sl6-trace{0%{stroke-dashoffset:1000;opacity:1}44.44%{stroke-dashoffset:0;opacity:1}82.78%{stroke-dashoffset:0;opacity:1}91.67%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes raa-sl6-trace-tel{0%{stroke-dashoffset:1000;opacity:1}42.11%{stroke-dashoffset:0;opacity:1}86.32%{stroke-dashoffset:0;opacity:1}94.74%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes raa-sl6-arrivee{0%,42.78%,48.89%,49.44%,55.56%,56.11%,62.22%,62.78%,68.89%,69.44%,75.56%,76.11%,82.22%,100%{background:rgba(252,241,80,.4);box-shadow:0 0 0 0 rgba(252,241,80,0),0 0 0 0 rgba(252,241,80,0)}44.44%,47.22%,51.11%,53.89%,57.78%,60.56%,64.44%,67.22%,71.11%,73.89%,77.78%,80.56%{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4)}}
@keyframes raa-sl6-arrivee-tel{0%,40.53%,46.32%,48.42%,54.21%,56.32%,62.11%,64.21%,70%,72.11%,77.89%,80%,85.79%,100%{background:rgba(252,241,80,.4);box-shadow:0 0 0 0 rgba(252,241,80,0),0 0 0 0 rgba(252,241,80,0)}42.11%,44.74%,50%,52.63%,57.89%,60.53%,65.79%,68.42%,73.68%,76.32%,81.58%,84.21%{background:#FCF150;box-shadow:0 0 0 6px rgba(252,241,80,.22),0 0 18px 4px rgba(252,241,80,.4)}}
@media (prefers-reduced-motion:reduce){
rdr-accueil-apercu .sep-sillage *,rdr-accueil-apercu .sep-sillage *::before,rdr-accueil-apercu .sep-sillage *::after{animation:none !important}
}
rdr-accueil-apercu .pv-pile{position:absolute;inset:0;z-index:3;pointer-events:none}
rdr-accueil-apercu .pv-flotte{animation:raa-flotte 5s ease-in-out infinite}
rdr-accueil-apercu .pv-micro{display:inline-flex;align-items:center;gap:6px;font-size:9.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;line-height:1}
rdr-accueil-apercu .pv-badge{position:absolute;left:28px;top:30px;display:flex;align-items:center;gap:14px;padding:12px 18px 12px 12px;border-radius:18px;background:rgba(14,17,29,.84);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 20px 40px rgba(14,17,29,.35);color:#fff;animation-delay:-1.4s}
rdr-accueil-apercu .pv-medaille{position:relative;width:58px;height:58px;flex:none}
rdr-accueil-apercu .pv-anneau{position:absolute;inset:0;width:100%;height:100%}
rdr-accueil-apercu .pv-arc{animation:raa-arc 6s cubic-bezier(.4,0,.2,1) infinite}
@keyframes raa-arc{0%{stroke-dashoffset:100}78%,90%{stroke-dashoffset:0}100%{stroke-dashoffset:100}}
rdr-accueil-apercu .pv-medaille span.avec-art{inset:6px;background:#0E111D}
rdr-accueil-apercu .pv-medaille span img{display:block;width:100%;height:100%;object-fit:contain}
rdr-accueil-apercu .pv-medaille span{transition:opacity .28s ease,transform .28s ease}
rdr-accueil-apercu .pv-badge.est-change .pv-medaille span{opacity:0;transform:translateY(4px)}
rdr-accueil-apercu .pv-medaille span{position:absolute;inset:10px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#2B3D6B,#0E111D);display:flex;align-items:center;justify-content:center;color:var(--jaune);box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
rdr-accueil-apercu .pv-medaille span svg{width:18px;height:18px}
rdr-accueil-apercu .pv-badge .pv-micro{color:var(--teal)}
rdr-accueil-apercu .pv-badge b{display:block;font-size:13.5px;font-weight:800;margin-top:4px;line-height:1.25}
rdr-accueil-apercu .pv-badge small{display:block;font-size:11px;color:var(--t2);font-weight:600;margin-top:2px}
rdr-accueil-apercu .pv-badge > i{color:var(--t3);margin-left:4px}
rdr-accueil-apercu .pv-badge > i svg{width:16px;height:16px}
rdr-accueil-apercu .pv-top{position:absolute;right:26px;top:24px;width:174px;padding:12px 14px;border-radius:16px;background:#fff;color:#0E111D;box-shadow:0 24px 50px rgba(14,17,29,.3);animation-delay:-3s}
rdr-accueil-apercu .pv-top .pv-micro{color:#5b6477}
rdr-accueil-apercu .pv-podium{display:flex;align-items:flex-end;gap:5px;height:56px;margin-top:10px}
rdr-accueil-apercu .pv-podium i{position:relative;flex:1;height:var(--h);display:flex;align-items:flex-end;justify-content:center;padding-bottom:5px;font-style:normal}
rdr-accueil-apercu .pv-podium i::before{content:'';position:absolute;inset:0;border-radius:6px 6px 2px 2px;background:linear-gradient(180deg,#F5A23C,#FF7A3D);transform-origin:bottom;animation:raa-pousse 4s ease-in-out infinite}
rdr-accueil-apercu .pv-podium i:nth-child(2)::before{background:#0E111D;animation-delay:-1s}
rdr-accueil-apercu .pv-podium i:nth-child(3)::before{animation-delay:-2s}
rdr-accueil-apercu .pv-podium b{position:relative;font-family:var(--titre);font-style:italic;font-size:16px;line-height:1;color:#fff}
@keyframes raa-pousse{0%,100%{transform:scaleY(.86)}50%{transform:scaleY(1)}}
rdr-accueil-apercu .pv-top small{display:block;font-size:10px;color:#5b6477;margin-top:6px;font-weight:600}
rdr-accueil-apercu .pv-skipper{position:absolute;right:clamp(150px,30%,230px);bottom:-38px;width:178px;aspect-ratio:4/5;transform:rotate(-4deg);filter:drop-shadow(0 30px 40px rgba(14,17,29,.4))}
rdr-accueil-apercu .pv-sk{position:absolute;inset:0;border-radius:28px 3px 16px 3px;overflow:hidden;background:#0f2238;border:2px solid rgba(255,255,255,.75);opacity:0;transform:scale(.94) rotate(3deg);transition:opacity .7s ease,transform .8s cubic-bezier(.22,.8,.3,1)}
rdr-accueil-apercu .pv-sk.est-active{opacity:1;transform:none}
rdr-accueil-apercu .pv-sk > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center}
rdr-accueil-apercu .pv-sk > img.pv-sk-classe{inset:auto;right:6px;top:-2px;width:auto;height:64px;object-fit:contain;z-index:2}
rdr-accueil-apercu .pv-sk-ov{position:absolute;left:0;right:0;bottom:0;padding:36px 12px 12px;background:linear-gradient(to top,rgba(6,14,26,1),rgba(6,14,26,.86) 45%,transparent);color:#fff}
rdr-accueil-apercu .pv-sk-ov .pv-micro{color:#fff;letter-spacing:.12em;white-space:nowrap}
rdr-accueil-apercu .pv-sk-ov .pv-micro svg{width:11px;height:11px;color:#E63946}
rdr-accueil-apercu .pv-sk-ov b{display:block;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:7px}
rdr-accueil-apercu .pv-sk-ov strong{display:block;font-family:var(--titre);font-style:italic;font-weight:400;font-size:22px;line-height:.95;text-transform:uppercase;text-wrap:balance;margin-top:2px}
rdr-accueil-apercu .pv-sk-ov small{display:block;font-size:9.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cc);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@media (min-width:761px) and (max-width:1500px){
rdr-accueil-apercu{--marge:clamp(40px,3.4vw,52px)}
rdr-accueil-apercu .cta-liste{gap:22px}
rdr-accueil-apercu .actus{padding:72px 0 84px}
rdr-accueil-apercu .actus-grille{gap:18px}
rdr-accueil-apercu .breves{gap:18px;margin-top:18px}
rdr-accueil-apercu .sk-liste{gap:18px}
rdr-accueil-apercu .af-rail{gap:20px}
rdr-accueil-apercu .affiche{padding:32px 0 76px}
rdr-accueil-apercu .promo-txt{padding:56px 58px}
rdr-accueil-apercu .promo p{font-size:14px}
}
@media (min-width:761px) and (max-width:1660px){
rdr-accueil-apercu .hero{--bas-titre:112px}
rdr-accueil-apercu .hv-contenu .hv-ligne{padding-left:max(var(--marge),68px)}
}
@media (max-height:820px){
rdr-accueil-apercu{--haut-acces:clamp(172px,24vh,200px)}
rdr-accueil-apercu .hv-titre{gap:12px}
rdr-accueil-apercu .hv-titre h2{font-size:clamp(30px,min(4.6vw,7.2vh),60px)}
rdr-accueil-apercu .hv-fait{padding:5px 15px 5px 12px}
rdr-accueil-apercu .hv-v{font-size:clamp(20px,1.75vw,25px)}
rdr-accueil-apercu .cta-txt{padding:18px 20px 20px}
rdr-accueil-apercu .cta-num{font-size:36px}
rdr-accueil-apercu .cta-ico{width:40px;height:40px;margin-bottom:2px}
rdr-accueil-apercu .actus-grille{height:clamp(380px,52vh,460px)}
}
@media (max-width:1100px){
rdr-accueil-apercu .actus-grille{grid-template-columns:1fr;height:auto}
rdr-accueil-apercu .carte--une{aspect-ratio:16/9}
rdr-accueil-apercu .actus-droite{grid-template-rows:none;grid-template-columns:1fr 1fr}
rdr-accueil-apercu .actus-droite .carte{aspect-ratio:4/3}
rdr-accueil-apercu .breves{grid-template-columns:1fr 1fr}
rdr-accueil-apercu .sk-liste{grid-template-columns:repeat(3,minmax(0,1fr))}
rdr-accueil-apercu .af-rail{grid-template-columns:repeat(2,minmax(0,1fr));padding-top:10px}
rdr-accueil-apercu .af-rail::before,rdr-accueil-apercu .af::before,rdr-accueil-apercu .af::after{display:none}
rdr-accueil-apercu .af-rail > .af:last-child:nth-child(odd){grid-column:1/-1}
rdr-accueil-apercu .hv-titre{max-width:78%}
rdr-accueil-apercu .pv-top{display:none}
}
@media (max-width:760px){
rdr-accueil-apercu{--marge:22px;--haut-entete:120px}
rdr-accueil-apercu .hero{height:auto;min-height:0;overflow:visible}
rdr-accueil-apercu .hv-scene{position:relative;height:clamp(320px,58svh,480px)}
rdr-accueil-apercu .hv-logo{width:118px}
rdr-accueil-apercu .hv-devise{font-size:21px}
rdr-accueil-apercu .hv-contenu{position:relative;bottom:auto;margin-top:-118px;padding-bottom:18px}
rdr-accueil-apercu .hv-contenu:has(.hv-n){margin-top:-131px}
rdr-accueil-apercu .hv-ligne{flex-direction:column;align-items:flex-start;gap:22px}
rdr-accueil-apercu .hv-titre{max-width:none}
rdr-accueil-apercu .hv-titre h2{font-size:clamp(26px,7.8vw,33px);line-height:1.05}
rdr-accueil-apercu .hv-faits{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 12px;width:100%;padding:0 4px}
rdr-accueil-apercu .hv-fait{flex-direction:column;align-items:flex-start;padding:6px 9px 6px 11px;gap:4px}
rdr-accueil-apercu .hv-fait::before{transform:skewX(-6deg)}
rdr-accueil-apercu .hv-v{font-size:clamp(16px,4.6vw,18px)}
rdr-accueil-apercu .hv-l b{font-size:9px;letter-spacing:.1em;white-space:normal}
rdr-accueil-apercu .hv-l span{font-size:9.5px;white-space:normal}
rdr-accueil-apercu .hv-defiler{display:flex;position:absolute;right:var(--marge);bottom:18px;z-index:4;width:34px;height:34px;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.26);background:rgba(14,17,29,.45);color:#fff;pointer-events:none;transition:opacity .45s ease,transform .45s ease}
rdr-accueil-apercu .hv-defiler i{display:flex;animation:raa-hv-descend 1.9s ease-in-out infinite}
rdr-accueil-apercu .hv-defiler svg{width:13px;height:13px;transform:rotate(90deg)}
rdr-accueil-apercu .hero:not(.est-photo) .hv-defiler,rdr-accueil-apercu .hero.a-defile .hv-defiler{opacity:0;transform:translateY(8px)}
rdr-accueil-apercu .cta-liste{flex-direction:column;height:auto;gap:12px}
rdr-accueil-apercu .cta,rdr-accueil-apercu .cta:hover{flex:none;min-height:146px}
rdr-accueil-apercu .cta img{opacity:.6}
rdr-accueil-apercu .cta::before{background:linear-gradient(180deg,rgba(14,17,29,.25) 0%,rgba(14,17,29,.66) 45%,rgba(14,17,29,.96) 100%)}
rdr-accueil-apercu .cta p{display:none}
rdr-accueil-apercu .cta-txt{padding:16px 18px;gap:6px}
rdr-accueil-apercu .cta-ico{width:36px;height:36px;border-radius:10px;margin-bottom:2px}
rdr-accueil-apercu .cta-ico svg{width:18px;height:18px}
rdr-accueil-apercu .cta h3{font-size:20px}
rdr-accueil-apercu .cta-num{font-size:30px}
rdr-accueil-apercu .affiche{padding:10px 0 44px}
rdr-accueil-apercu .affiche-tete{flex-direction:column;align-items:flex-start;gap:10px}
rdr-accueil-apercu .af-rail,rdr-accueil-apercu .breves,rdr-accueil-apercu .sk-liste{scroll-padding-inline:var(--marge)}
rdr-accueil-apercu .af-rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px var(--marge) 8px;margin:0 calc(-1 * var(--marge));scrollbar-width:none}
rdr-accueil-apercu .af{flex:0 0 74%;scroll-snap-align:start}
rdr-accueil-apercu .sec-tete{flex-direction:column;align-items:flex-start;gap:14px}
rdr-accueil-apercu .sec-tete h2{font-size:34px}
rdr-accueil-apercu .onglets{max-width:100%;overflow-x:auto;scrollbar-width:none}
rdr-accueil-apercu .actus{padding:48px 0 54px}
rdr-accueil-apercu .actus-grille{grid-template-columns:1fr;height:auto;gap:12px}
rdr-accueil-apercu .carte--une{aspect-ratio:4/3}
rdr-accueil-apercu .carte--une .carte-txt{padding:18px}
rdr-accueil-apercu .carte--une h3{font-size:22px}
rdr-accueil-apercu .carte--une p{display:none}
rdr-accueil-apercu .actus-droite{grid-template-columns:1fr;gap:12px}
rdr-accueil-apercu .actus-droite .carte{aspect-ratio:16/9}
rdr-accueil-apercu .actus-droite .carte h3{font-size:14px}
rdr-accueil-apercu .actus-droite .carte + .carte{display:none}
rdr-accueil-apercu .breves{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px var(--marge) 14px;margin:14px calc(-1 * var(--marge)) 0;scrollbar-width:none}
rdr-accueil-apercu .breve{flex:0 0 78%;scroll-snap-align:start;opacity:1;transform:none}
rdr-accueil-apercu .actus-pied{gap:14px}
rdr-accueil-apercu .skippers{padding:64px 0 80px}
rdr-accueil-apercu .skippers .sec-tete{text-align:left;align-items:flex-start}
rdr-accueil-apercu .sk-liste{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:26px var(--marge) 16px;margin:0 calc(-1 * var(--marge));scrollbar-width:none}
rdr-accueil-apercu .sk{flex:0 0 52%;scroll-snap-align:start}
rdr-accueil-apercu .sk-nom{font-size:24px}
rdr-accueil-apercu .classes{justify-content:space-between;gap:4px;margin-top:24px}
rdr-accueil-apercu .classe{flex:1 1 0;min-width:0}
rdr-accueil-apercu .classe img{width:100%;height:auto}
rdr-accueil-apercu .classe b{font-size:17px}
rdr-accueil-apercu .classe small{display:none}
rdr-accueil-apercu .sep-sillage{height:112px}
rdr-accueil-apercu .sl-six .sl-fait{animation-name:raa-sl6-trace-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl-port--arr{animation-name:raa-sl6-arrivee-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl6--ultim{--l:53px;animation-name:raa-sl6-ultim-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl6--o50{--l:48px;animation-name:raa-sl6-o50-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl6--c40{--l:40px;animation-name:raa-sl6-c40-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl6--imoca{--l:39px;animation-name:raa-sl6-imoca-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl6--vmono{--l:40px;animation-name:raa-sl6-vmono-tel;animation-duration:19s}
rdr-accueil-apercu .sl-six .sl6--vmulti{--l:43px;animation-name:raa-sl6-vmulti-tel;animation-duration:19s}
rdr-accueil-apercu .sl-port b{top:14px}
rdr-accueil-apercu .sl-milles{font-size:9px;letter-spacing:.07em;color:rgba(255,255,255,.4)}
rdr-accueil-apercu .espace{padding:56px 0 100px}
rdr-accueil-apercu[data-liaison="sillage"] .espace{--nuit-haut:214px;padding-top:92px}
rdr-accueil-apercu .promo{grid-template-columns:1fr;min-height:0}
rdr-accueil-apercu .promo-txt{padding:30px 22px 26px}
rdr-accueil-apercu .promo h2{font-size:38px}
rdr-accueil-apercu .pub-encart{--pub-hmax:80vh;width:min(100%,calc(var(--pub-hmax) * var(--pub-ratio-tel,var(--pub-ratio,3))))}
rdr-accueil-apercu .pub-cadre{aspect-ratio:var(--pub-ratio-tel,var(--pub-ratio,3));border-radius:16px}
rdr-accueil-apercu .espace{--pub-haut:108px;--pub-bas:88px}
rdr-accueil-apercu .promo-visuel{min-height:300px;border-radius:0 0 26px 26px}
rdr-accueil-apercu .promo-visuel .photo{border-radius:0 0 26px 26px}
rdr-accueil-apercu .promo-visuel .photo::before{background:linear-gradient(180deg,#E4661C 0%,rgba(228,102,28,0) 40%)}
rdr-accueil-apercu .pv-badge{left:14px;top:14px;padding:10px 14px 10px 10px;gap:10px}
rdr-accueil-apercu .pv-medaille{width:46px;height:46px}
rdr-accueil-apercu .pv-medaille span{inset:8px}
rdr-accueil-apercu .pv-top{display:none}
rdr-accueil-apercu .pv-skipper{right:18px;bottom:-28px;width:132px}
rdr-accueil-apercu .pv-sk-ov strong{font-size:17px}
rdr-accueil-apercu .pv-sk > img.pv-sk-classe{height:46px}
rdr-accueil-apercu .tymal{padding:76px 0 84px}
rdr-accueil-apercu .tymal .trame{grid-template-columns:1fr;gap:30px}
rdr-accueil-apercu .fa-tete{flex-direction:column;align-items:stretch;gap:16px}
rdr-accueil-apercu .fa-toutes{height:52px}
rdr-accueil-apercu .fa-tete .fa-toutes{display:none}
rdr-accueil-apercu .fa-toutes--bas{display:flex;margin-top:18px}
rdr-accueil-apercu .fa-cherche{height:52px;padding-left:14px}
rdr-accueil-apercu .fa-cherche input{padding:0 8px;font-size:15px}
rdr-accueil-apercu .fa-cherche button{width:40px;height:40px}
rdr-accueil-apercu .fa-q summary{gap:10px;padding:13px 12px 13px 18px}
rdr-accueil-apercu .fa-q summary b{font-size:14.5px}
rdr-accueil-apercu .fa-rub{display:none}
rdr-accueil-apercu .fa-rep{padding:0 16px 14px 18px;font-size:14px}
rdr-accueil-apercu .tymal .elem{display:none}
rdr-accueil-apercu .video{padding:0;margin-top:56px}
rdr-accueil-apercu .video-cadre{transform:none;border-width:4px;box-shadow:10px 14px 28px -12px rgba(14,17,29,.32),0 4px 10px -4px rgba(14,17,29,.18)}
rdr-accueil-apercu .video-tymal{left:auto;right:6px;bottom:auto;top:-60px;width:108px;transform:rotate(6deg)}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .hero{height:auto}
html[data-rdr-entete="dessus"] rdr-accueil-apercu .hv-scene{height:calc(clamp(320px,58svh,480px) + var(--rdr-entete-h,120px))}
rdr-accueil-apercu .hv-acces-sous{padding:16px 0 36px}
rdr-accueil-apercu .onglets{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:100%;overflow:visible}
rdr-accueil-apercu .onglet{justify-content:center;gap:5px;padding:5px 6px;font-size:10px;letter-spacing:.04em}
rdr-accueil-apercu .onglet i{width:20px;height:20px;border-radius:6px}
rdr-accueil-apercu .glyphe--grand{display:none}
rdr-accueil-apercu .promo-btns .btn{width:100%}
rdr-accueil-apercu .pv-sk-ov .pv-micro{letter-spacing:.05em;font-size:8.5px}
}
@media (prefers-reduced-motion:reduce){
rdr-accueil-apercu *,rdr-accueil-apercu *::before,rdr-accueil-apercu *::after{animation:none !important;transition:none !important}
rdr-accueil-apercu .carte,rdr-accueil-apercu .breve,rdr-accueil-apercu .sk-flip{opacity:1;transform:none}
}`;

  const PAGE = `<section class="hero" id="hero">
  <div class="hv-scene">
    <div class="hv-fond">
      <img class="hero-photo" id="hero-photo" src="" alt="" fetchpriority="high" decoding="sync">
      <div class="hv-nuit"></div>
      <video autoplay muted loop playsinline data-media-affiche="videoAffiche">
        <source data-media="video" type="video/mp4">
      </video>
    </div>
    <div class="hv-marque"><h1 class="hv-masque">Route du Rhum, Destination Guadeloupe</h1><img class="hv-logo" data-media="logoIntro" alt=""><p class="hv-devise titre">Là où les rêves prennent le large</p></div>
  </div>
  <div class="hv-contenu"><div class="trame hv-ligne"><div class="hv-titre" id="hv-titre"></div></div></div>
  <span class="hv-defiler" id="hv-defiler" aria-hidden="true"></span>
</section>
<rdr-dernieres-infos page="accueil"></rdr-dernieres-infos>
<section class="hv-acces-sous"><div class="trame"><div class="cta-liste" id="ctas"></div></div></section>
<section class="affiche"><div class="trame">
  <div class="affiche-tete"><h2 class="titre">À l'affiche<small>Les prochains temps forts, jour par jour</small></h2><a class="affiche-lien" href="/programmation">Toute la programmation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="af-rail" id="affiche"></div>
</div></section>
<section class="actus">
  <img class="filigrane" data-media="filigrane" data-larg="1200" data-q="55" alt="" aria-hidden="true" loading="lazy" decoding="async">
  <div class="trame">
    <div class="sec-tete">
      <div><span class="trait"></span><h2 class="titre">Actualités</h2><p class="sous">La une, la dernière vidéo, le dernier reportage</p></div>
      <nav class="onglets" id="onglets"></nav>
    </div>
    <div class="actus-grille"><div id="une-actu"></div><div class="actus-droite" id="medias"></div></div>
    <div class="breves" id="breves"></div>
    <div class="actus-pied"><a class="btn" href="/medias-actualites">Toutes les actualités <svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg></a></div>
  </div>
</section>
<section class="skippers">
  <img class="topo" data-media="topo" data-larg="1200" data-q="55" alt="" aria-hidden="true" loading="lazy" decoding="async">
  <div class="trame">
    <div class="sec-tete"><div><span class="trait"></span><h2 class="titre">Les skippers engagés</h2><p class="sous">1 seule ligne de départ, 115 navigateurs. Six visages au hasard, à chaque visite.</p></div></div>
    <div class="sk-liste" id="skippers"></div>
    <div class="classes" id="classes"></div>
    <div class="sec-pied"><a class="btn" href="/skippers">Explorez tous les skippers <svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg></a></div>
  </div>
</section>
<div class="sep sep--liaison" style="--avant:#0A1228;--apres:#fff"></div>
<section class="espace">
  <div class="trame">
  <div class="promo">
    <div class="promo-txt">
      <span class="kicker">Mon Espace Rhum</span>
      <h2 class="titre">Vivez <em>votre</em> Rhum</h2>
      <p>Rejoignez les passionnés du Rhum et partagez toute l'intensité de la course. Suivez vos skippers préférés, découvrez des contenus et données personnalisés, relevez des défis, participez à des jeux-concours exclusifs et collectionnez des badges au fil de l'aventure.</p>
      <div class="promo-btns"><a class="cta-rhum" href="/mon-espace-rhum">Créez votre espace <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a><a class="lien-rhum" href="/mon-espace-rhum">J'ai déjà un compte</a></div>
    </div>
    <div class="promo-visuel">
      <div class="photo"><img data-media="espacePhoto" data-larg="900" alt="" loading="lazy" decoding="async"></div>
      <div class="pv-pile">
        <div class="pv-badge pv-flotte">
          <div class="pv-medaille"><svg class="pv-anneau" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="pvg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5DBFC0"/><stop offset="1" stop-color="#FCF150"/></linearGradient></defs><circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="5"/><circle class="pv-arc" cx="32" cy="32" r="27" fill="none" stroke="url(#pvg)" stroke-width="5" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" transform="rotate(-90 32 32)"/></svg><span id="pv-ico-badge"></span></div>
          <div><span class="pv-micro">Badges et rangs</span><b>Débloquez des badges</b><small>et montez dans les rangs</small></div>
          <i id="pv-ico-verrou"></i>
        </div>
        <div class="pv-top pv-flotte"><span class="pv-micro">Top 50 des fans</span><div class="pv-podium" aria-hidden="true"><i style="--h:72%"><b>2</b></i><i style="--h:100%"><b>1</b></i><i style="--h:54%"><b>3</b></i></div><small>Entrez dans le classement</small></div>
        <div class="pv-skipper" id="pv-skipper"></div>
      </div>
    </div>
  </div>
  <div class="jx" id="jx" role="region" aria-labelledby="jx-titre" hidden></div>
  <div class="pub-encart" id="pub-encart" hidden></div>
</div></section>
<div class="vague-sep" style="--avant:#F4F1E8;--apres:#FCF150"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z"/><path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z"/></svg></div>
<section class="tymal">
  <img class="elem" data-media="tymalFond" alt="" aria-hidden="true" loading="lazy" decoding="async">
  <div class="trame">
    <div>
      <span class="kicker kicker--sombre">La mascotte officielle</span>
      <h2 class="titre" id="tymal-titre">TyMAL, en tournée avant le village</h2>
      <p id="tymal-txt">Macareux moine, natif des côtes bretonnes, TyMAL sillonne la Bretagne et la Guadeloupe avant de vous retrouver sur les bassins. Suivez sa tournée jusqu'aux bassins, et repartez avec lui dans votre Espace Rhum.</p>
      <div class="btns"><a class="btn btn--marine" id="tymal-ou" href="/carte-tournee">Où est TyMAL ? <svg viewBox="0 0 200 200"><path d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm-9.999 126.345l-10.997-10.998 35.346-35.346-35.346-35.347 10.997-10.998L136.345 100l-46.344 46.345z"/></svg></a><a class="btn btn--sombre" href="/post/tymal-la-mascotte-de-l-édition-2026" data-en="/en/post/tymal-the-mascot-of-the-2026-edition">En savoir plus</a></div>
    </div>
    <div class="video">
      <div class="video-cadre" id="video">
        <img data-media="tymalVideo" alt="" loading="lazy" decoding="async">
        <button type="button" aria-label="Lire la vidéo"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.5v13l11-6.5z"/></svg></button>
        <span class="duree">TyMAL, la vidéo</span>
      </div>
      <img class="video-tymal" data-media="tymalDrapeau" alt="" loading="lazy" decoding="async">
    </div>
  </div>
</section>
<div class="faq-bloc" id="faq-bloc" hidden>
<div class="vague-sep" style="--avant:#FCF150;--apres:#F4F1E8"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z"/><path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z"/></svg></div>
<section class="faq-acc" id="faq-acc" aria-labelledby="fa-titre">
  <div class="fa-topo" id="fa-topo" aria-hidden="true"></div>
  <div class="trame"><div class="fa-corps">
    <div class="fa-tete">
      <div><span class="fa-fil" id="fa-fil"></span><h2 class="titre" id="fa-titre"></h2></div>
      <a class="fa-toutes" id="fa-toutes" href="/faq"></a>
    </div>
    <form class="fa-cherche" action="/faq" method="get" role="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg><input type="search" name="q" id="fa-q" autocomplete="off" aria-label="Chercher dans les questions"><button type="submit" aria-label="Chercher"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button></form>
    <div class="fa-liste" id="fa-liste"></div>
    <a class="fa-toutes fa-toutes--bas" id="fa-toutes-bas" href="/faq"></a>
  </div></div>
</section>
<div class="vague-sep" style="--avant:#F4F1E8;--apres:#0E111D"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 30c140 10 260 24 380 20s230-26 350-24 250 18 370 22 220-6 340-16v32H0z"/><path d="M0 40c120 20 240 26 360 18s240-30 360-30 240 22 360 30 240 2 360-18v24H0z"/></svg></div>
</div>`;

  const SQUELETTE = `<div class="raa-attente" aria-hidden="true"><div class="raa-sq-hero"><div class="raa-sq-scene"></div><div class="raa-sq-contenu"><div class="trame"><div class="raa-sq-titre"><div class="raa-sq-haut"><i class="raa-sq-l raa-sq-signe"></i><i class="raa-sq-l raa-sq-depart"></i></div><div class="raa-sq-t"><i class="raa-sq-l"></i><i class="raa-sq-l"></i></div><div class="raa-sq-faits"><i class="raa-sq-l raa-sq-fait"></i><i class="raa-sq-l raa-sq-fait"></i><i class="raa-sq-l raa-sq-fait"></i><i class="raa-sq-l raa-sq-fait"></i></div></div></div></div></div><div class="raa-sq-acces"><div class="trame"><div class="raa-sq-cartes"><i class="raa-sq-c"></i><i class="raa-sq-c"></i><i class="raa-sq-c"></i></div></div></div><div class="raa-sq-suite"><div class="trame"><i class="raa-sq-l raa-sq-k"></i><i class="raa-sq-l raa-sq-p"></i><div class="raa-sq-rail"><i class="raa-sq-c"></i><i class="raa-sq-c"></i><i class="raa-sq-c"></i><i class="raa-sq-c"></i></div></div></div><div class="raa-sq-actus"><div class="trame"><i class="raa-sq-trait"></i><i class="raa-sq-l raa-sq-k"></i><i class="raa-sq-l raa-sq-p"></i><div class="raa-sq-grille"><i class="raa-sq-c raa-sq-une"></i><div><i class="raa-sq-c"></i><i class="raa-sq-c"></i></div></div></div></div></div>`;

  function injecterCss() {
    if (document.getElementById('rdr-accueil-apercu-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-accueil-apercu-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  









  const jeuValide = (D) => !!(D && D.phases && D.medias && Array.isArray(D.actus) && Array.isArray(D.skippers));

  class RdrAccueilApercu extends HTMLElement {
    static get observedAttributes() { return ['jeu', 'skippers', 'effectifs', 'promos', 'actus', 'connexion', 'jeux', 'membre']; }

    connectedCallback() {
      if (this._monte) return;
      this._monte = true;
      const jeu = this._jeuAttribut();
      if (jeu && this._photoDabord(jeu)) return;
      if (jeu) { this._dessiner(jeu); return; }
      this._attendre();
      this._charger();
    }

    

























    _photoDabord(D) {
      const lien = document.querySelector('link[data-rdr-photo]');
      if (!lien || !lien.href) return false;
      




      if (!((document.documentElement.clientWidth || window.innerWidth || 0) < 760 && !/[?&]intro=oui/.test(location.search))) return false;
      



      try {
        const enCours = rdrPhaseForcee(location.search, D.phases) || rdrPhaseA(rdrHorloge(location.search, D.calendrier).maintenant(), D.phases, rdrInstants(D.calendrier)) || 'avant';
        if (!D.phases[enCours] || lien.getAttribute('data-rdr-photo') !== D.phases[enCours].photo) return false;
      } catch (e) { return false; }
      let rv = this.firstElementChild;
      if (!rv || !rv.classList.contains('raa-rv')) {
        if (this.firstChild) return false;
        this.innerHTML = '<i class="raa-rv v"><img alt="" decoding="sync" elementtiming="raa"></i>';
        rv = this.firstElementChild;
        rv.firstChild.src = lien.href;
      }
      const img = rv.querySelector('img');
      if (!img) return false;
      












      const jeton = this._jeton = {};
      const suite = () => { if (this._jeton === jeton && this._monte && !this._dessine) this._dessiner(D); };
      let lente = 0;
      const apresPeinture = () => {
        clearTimeout(lente);
        let po = null, fini = false;
        const go = () => { if (fini) return; fini = true; if (po) po.disconnect(); setTimeout(suite, 0); };
        try {
          const types = (window.PerformanceObserver && PerformanceObserver.supportedEntryTypes) || [];
          const type = types.indexOf('element') >= 0 ? 'element' : types.indexOf('largest-contentful-paint') >= 0 ? 'largest-contentful-paint' : '';
          if (type) {
            po = new PerformanceObserver((l) => { if (l.getEntries().some((e) => e.element === img)) go(); });
            po.observe({ type, buffered: true });
            setTimeout(go, 600);
            return;
          }
        } catch (e) {   }
        requestAnimationFrame(() => setTimeout(go, 0));
      };
      if (img.complete && img.naturalWidth) apresPeinture();
      else {
        img.addEventListener('load', apresPeinture, { once: true });
        img.addEventListener('error', suite, { once: true });
        lente = setTimeout(suite, 300);
      }
      setTimeout(suite, 3000);
      return true;
    }

    





    _attendre() {
      injecterCss();
      this._calerEntete();
      this.innerHTML = SQUELETTE;
      try {
        const lien = document.querySelector('link[data-rdr-photo]');
        const scene = this.querySelector('.raa-sq-scene');
        if (lien && lien.href && scene && (document.documentElement.clientWidth || window.innerWidth || 0) < 760) {
          const img = document.createElement('img');
          img.className = 'raa-sq-photo';
          img.alt = '';
          img.decoding = 'sync';
          img.src = lien.href;
          scene.prepend(img);
        }
      } catch (e) {   }
    }

    attributeChangedCallback(nom) {
      


      if (nom === 'skippers') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-skippers')); return; }
      


      if (nom === 'effectifs') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-effectifs')); return; }
      


      if (nom === 'promos') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-promos')); return; }
      


      if (nom === 'jeux') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-jeux')); return; }
      if (nom === 'membre') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-membre')); return; }
      


      if (nom === 'actus') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-actus')); return; }
      


      if (nom === 'connexion') { if (this._dessine) this.dispatchEvent(new CustomEvent('raa-connexion-prete')); return; }
      if (nom !== 'jeu' || !this._monte || this._dessine) return;
      const jeu = this._jeuAttribut();
      if (jeu) this._dessiner(jeu);
    }

    disconnectedCallback() {
      this._monte = false;
      this._dessine = false;
      if (this._defaire) { try { this._defaire(); } catch (e) {   } this._defaire = null; }
      if (this._obsEn) { this._obsEn.disconnect(); this._obsEn = null; }
    }

    _jeuAttribut() {
      const t = this.getAttribute('jeu');
      if (!t || this.getAttribute('source')) return null;
      try { const D = JSON.parse(t); return jeuValide(D) ? D : null; } catch (e) { return null; }
    }

    




    _calerEntete() {
      try {
        const e = document.querySelector('rdr-entete[hero="dessus"]');
        if (e && !document.documentElement.dataset.rdrEntete) document.documentElement.dataset.rdrEntete = 'dessus';
      } catch (err) {   }
    }

    


    _dessiner(D) {
      if (this._dessine) return;
      this._dessine = true;
      injecterCss();
      this._calerEntete();
      this.innerHTML = PAGE;
      



      try { this._defaire = monter(this, this, D); } catch (e) {
        console.warn('[rdr-accueil-apercu] accueil illisible', e && e.message);
        this._dessine = false;
        this._panne();
        return;
      }
       
      if (langueDe(this) === 'en') {
        traduireEn(this);
        try {
          this._obsEn = new MutationObserver((ms) => ms.forEach((m) => m.addedNodes.forEach((n) => {
            if (n.nodeType === 1) traduireEn(n);
            else if (n.nodeType === 3) { const v = aTraduire(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; }
          })));
          this._obsEn.observe(this, { childList: true, subtree: true });
        } catch (e) {   }
      }
    }

    async _charger() {
      try {
        const r = await rdrLire(this.getAttribute('source') || SOURCE + '?lang=' + langueDe(this), { credentials: 'omit' });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const D = await r.json();
        if (!this._monte || this._dessine) return;
        if (!jeuValide(D)) throw new Error('jeu incomplet');
        this._dessiner(D);
      } catch (e) {
        console.warn('[rdr-accueil-apercu] accueil indisponible', e && e.message);
        if (!this._monte || this._dessine) return;
        this._panne();
      }
    }

    


    _panne() {
      injecterCss();
      rdrPanne(this, langueDe(this) === 'en', () => { this._charger(); });
    }
  }

   
  






































  
  



  function rdrDecalageParis(t) {
    const a = new Date(t).getUTCFullYear();
    const dernierDimanche = (mois) => { const d = new Date(Date.UTC(a, mois + 1, 0, 1)); return d.getTime() - d.getUTCDay() * 86400000; };
    return t >= dernierDimanche(2) && t < dernierDimanche(9) ? 7200000 : 3600000;
  }
  
  

  function rdrInstantParis(texte) {
    const s = String(texte == null ? '' : texte).trim();
    const m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{1,2})[:h](\d{2})(?::(\d{2}))?)?$/.exec(s);
    if (!m) {
      if (!/(Z|[+-]\d{2}:?\d{2})$/i.test(s)) return null;
      const t = Date.parse(s);
      return isFinite(t) ? t : null;
    }
    const n = m.slice(1).map((x) => Number(x || 0));
    const local = Date.UTC(n[0], n[1] - 1, n[2], n[3], n[4], n[5]);
    const d = new Date(local);
    if (d.getUTCMonth() !== n[1] - 1 || d.getUTCDate() !== n[2] || n[3] > 23 || n[4] > 59 || n[5] > 59) return null;
    const essai = local - rdrDecalageParis(local - 3600000);
    return local - rdrDecalageParis(essai);
  }
  
  

  function rdrInstants(calendrier) {
    const out = {};
    const m = calendrier && calendrier.moments;
    if (!m || typeof m !== 'object') return out;
    Object.keys(m).forEach((k) => {
      if (k === '__proto__') return;
      const t = Date.parse(m[k]);
      if (isFinite(t)) out[k] = t;
    });
    return out;
  }
  
  





  function rdrPhaseA(t, phases, instants) {
    let choix = null, debutChoix = -Infinity;
    Object.keys(phases || {}).forEach((k) => {
      const p = phases[k];
      if (!p || typeof p !== 'object') return;
      if (!p.debut) { if (choix === null) choix = k; return; }
      if (p.provisoire) return;
      const d = instants[p.debut];
      if (typeof d !== 'number' || d > t) return;
      if (d >= debutChoix) { choix = k; debutChoix = d; }
    });
    return choix;
  }
  
   
  function rdrProchaineBascule(t, phases, instants) {
    let prochaine = null;
    Object.keys(phases || {}).forEach((k) => {
      const p = phases[k];
      if (!p || !p.debut || p.provisoire) return;
      const d = instants[p.debut];
      if (typeof d === 'number' && d > t && (prochaine === null || d < prochaine)) prochaine = d;
    });
    return prochaine;
  }
  
  



  function rdrEmpreinte(texte) {
    const s = String(texte == null ? '' : texte).trim();
    if (!s) return '';
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return ('0000000' + h.toString(16)).slice(-8);
  }
  
  const parametres = (recherche) => {
    try { return new URLSearchParams(String(recherche || '')); } catch (e) { return null; }
  };
  
  


  function rdrHorloge(recherche, calendrier, reel) {
    const maintenantReel = typeof reel === 'function' ? reel : () => Date.now();
    const p = parametres(recherche);
    const h = p && p.get('horloge');
    const cle = p && p.get('apercu');
    const attendue = calendrier && typeof calendrier.apercu === 'string' ? calendrier.apercu : '';
    const depart = h && cle && attendue && rdrEmpreinte(cle) === attendue ? rdrInstantParis(h) : null;
    if (depart === null) return { simulee: false, vitesse: 1, maintenant: maintenantReel, delai: (ms) => ms };
    const v = Math.min(3600, Math.max(1, Number(p.get('vitesse')) || 1));
    const t0 = maintenantReel();
    return { simulee: true, vitesse: v, depart, maintenant: () => depart + (maintenantReel() - t0) * v, delai: (ms) => ms / v };
  }
  
  


  function rdrPhaseForcee(recherche, phases) {
    const p = parametres(recherche);
    const demandee = p && p.get('phase');
    return demandee && phases && Object.prototype.hasOwnProperty.call(phases, demandee) ? demandee : null;
  }
  
  







  function rdrSuivrePhase(o) {
    const opt = o || {};
    const phases = opt.phases || {};
    const instants = rdrInstants(opt.calendrier);
    const horloge = opt.horloge || rdrHorloge(opt.recherche, opt.calendrier, opt.reel);
    const forcee = rdrPhaseForcee(opt.recherche, phases);
    const calcul = () => rdrPhaseA(horloge.maintenant(), phases, instants) || opt.parDefaut || null;
    const etat = { phase: forcee || calcul(), horloge, forcee: !!forcee, arreter: () => {} };
    if (forcee) return etat;
    let minuteur = 0, fini = false;
    const doc = opt.doc || null;
    const armer = () => {
      clearTimeout(minuteur); minuteur = 0;
      if (fini) return;
      const t = horloge.maintenant();
      const prochaine = rdrProchaineBascule(t, phases, instants);
      if (prochaine === null) return;
      minuteur = setTimeout(verifier, Math.min(2073600000, Math.max(0, horloge.delai(prochaine - t))) + 250);
    };
    function verifier() {
      if (fini) return;
      const p = calcul();
      if (p !== etat.phase) {
        etat.phase = p;
        try { if (typeof opt.quandChange === 'function') opt.quandChange(p); } catch (e) {   }
      }
      armer();
    }
    const auRetour = () => { if (!doc || doc.visibilityState !== 'hidden') verifier(); };
    if (doc && doc.addEventListener) doc.addEventListener('visibilitychange', auRetour);
    armer();
    etat.verifier = verifier;
    etat.arreter = () => {
      fini = true;
      clearTimeout(minuteur);
      if (doc && doc.removeEventListener) doc.removeEventListener('visibilitychange', auRetour);
    };
    return etat;
  }
  
   
   
function monter(racine, portail, D) {
  'use strict';
  const ecouteurs = [], minuteurs = [], observateurs = [];
  let heroTimer = null, liaisonTimer = null;
  const defaire = () => { ecouteurs.forEach(f => f()); minuteurs.forEach(t => clearInterval(t)); observateurs.forEach(o => o.disconnect()); clearTimeout(heroTimer); clearTimeout(liaisonTimer); };
  






  try {
  const ecoute = (cible, type, f) => { cible.addEventListener(type, f); ecouteurs.push(() => cible.removeEventListener(type, f)); };
  const repeter = (f, ms) => { const t = setInterval(f, ms); minuteurs.push(t); return t; };
  const tout = (s) => [...racine.querySelectorAll(s)].concat(portail === racine ? [] : [...portail.querySelectorAll(s)]);
  const un = (s) => racine.querySelector(s) || portail.querySelector(s);
  









  let libere = false;
  const retenues = [], apres = [];
  const retenir = (img) => {
    if (libere || img.closest('#hero, .hv-acces-sous')) return;
    const src = img.getAttribute('src'), srcset = img.getAttribute('srcset');
    if (!src && !srcset) return;
    retenues.push([img, src, srcset]);
    img.removeAttribute('srcset'); img.removeAttribute('src');
  };
  const guetImages = new MutationObserver((ms) => {
    if (libere) return;
    ms.forEach((m) => m.addedNodes.forEach((n) => {
      if (n.nodeType !== 1) return;
      if (n.matches('img[loading="lazy"]')) retenir(n);
      n.querySelectorAll('img[loading="lazy"]').forEach(retenir);
    }));
  });
  guetImages.observe(racine, { childList: true, subtree: true });
  if (portail !== racine) guetImages.observe(portail, { childList: true, subtree: true });
  observateurs.push(guetImages);
  const apresPhoto = (f) => { if (libere) f(); else apres.push(f); };
  






  const aLApproche = (el, f) => apresPhoto(() => {
    if (!el) return;
    if (typeof IntersectionObserver !== 'function') { f(); return; }
    const io = new IntersectionObserver((es) => { if (!es.some((e) => e.isIntersecting)) return; io.disconnect(); f(); }, { rootMargin: '100% 0px' });
    io.observe(el); observateurs.push(io);
  });
  const liberer = () => {
    if (libere) return;
    libere = true;
     
    window.removeEventListener('scroll', liberer);
    guetImages.disconnect();
    retenues.splice(0).forEach(([img, src, srcset]) => { if (srcset) img.setAttribute('srcset', srcset); if (src) img.setAttribute('src', src); });
    apres.splice(0).forEach((f) => { try { f(); } catch (e) {   } });
  };
  








  if ('IntersectionObserver' in window) {
    const horsEcran = new IntersectionObserver((es) => es.forEach((e) => e.target.toggleAttribute('data-hors', !e.isIntersecting)), { rootMargin: '120px 0px' });
    tout('section, .sep, .vague-sep').forEach((x) => horsEcran.observe(x));
    ecouteurs.push(() => horsEcran.disconnect());
  }
   
  const M = D.medias;
  

  










  const AU_TELEPHONE = (document.documentElement.clientWidth || window.innerWidth || 0) < 760;
  let forceIntro = null;
  try { forceIntro = new URLSearchParams(location.search).get('intro'); } catch (e) {   }
  const sansVideo = AU_TELEPHONE && forceIntro !== 'oui';
  if (sansVideo) { const v0 = un('.hv-fond video'); if (v0) v0.remove(); const h0 = un('#hero'); if (h0) h0.classList.add('sans-video'); }
  



  if (document.querySelector('rdr-entete[hero="dessus"]') && !document.documentElement.hasAttribute('data-rdr-entete')) document.documentElement.setAttribute('data-rdr-entete', 'dessus');
  




  







  const pourLarge = (px) => Math.max(160, Math.round(Math.min(px * Math.min(2, window.devicePixelRatio || 1), 1600) / 80) * 80);
  const etroit = () => (document.documentElement.clientWidth || innerWidth || 0) < 760;
  const retaille = (u, larg, q) => String(u || '').replace(/\/v1\/fill\/w_(\d+),h_(\d+)([^/]*)\//, (tout2, W, H, reste) => {
    const w = Math.min(Number(W), larg), h = Math.max(1, Math.round(Number(H) * (w / Number(W))));
    return '/v1/fill/w_' + w + ',h_' + h + String(reste).replace(/,q_\d+/, ',q_' + q) + '/';
  });
  tout('[data-media]').forEach(el => {
    if (el.tagName === 'SOURCE' || !M[el.dataset.media]) return;
    el.src = el.dataset.larg ? retaille(M[el.dataset.media], Math.min(Number(el.dataset.larg), pourLarge(document.documentElement.clientWidth || innerWidth)), Number(el.dataset.q) || 60) : M[el.dataset.media];
  });
  tout('img[loading="lazy"]').forEach(retenir);
  

  const chargerVideo = (v) => { if (v && !v.getAttribute('poster') && M[v.dataset.mediaAffiche]) v.poster = M[v.dataset.mediaAffiche]; const s = v && v.querySelector('source[data-media]'); if (s && !s.getAttribute('src') && M[s.dataset.media]) { s.src = M[s.dataset.media]; try { v.load(); } catch (e) {   } } };

  













  const INTRO_MS = 6 * 3600 * 1000;    
  function introDecision() {
    let d = window.__rdrIntro;
    if (d) return d;
    const f = new URLSearchParams(location.search).get('intro');
    let jouer = true;
    try {
      const t = Number(localStorage.getItem('rdrIntroV1') || 0);
      jouer = !t || Date.now() - t > INTRO_MS;
      if (f !== 'oui' && f !== 'non') localStorage.setItem('rdrIntroV1', String(Date.now()));
    } catch (e) {   }
    try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) jouer = false; } catch (e) {   }
    if (f === 'oui') jouer = true; else if (f === 'non') jouer = false;
    return (window.__rdrIntro = { jouer, vu: {} });
  }
  function introPour(qui) {
    const d = introDecision();
    if (!d.jouer || d.vu[qui]) return false;
    d.vu[qui] = true;
    return true;
  }
  const IMG = (id, w, h, q) => 'https://static.wixstatic.com/media/' + id + '/v1/fill/w_' + w + ',h_' + h + ',al_c,q_' + (q || 72) + ',enc_auto/x.jpg';
  const FLECHE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const ICO = {
    calendrier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    carte: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/></svg>',
    train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1-3M15 21l-1-3M8 15h.01M16 15h.01"/></svg>',
    boussole: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
    podium: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M6 20v-8h4v8M10 20V6h4v14M14 20v-5h4v5"/></svg>',
    lieu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    horloge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    billet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 0 0-6V6H3z"/><path d="M13 6v12"/></svg>',
    actu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h10M7 17h6"/></svg>',
    photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.5v13l11-6.5z"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 12v2M8 8v8M12 5v14M16 9v6M20 11v2"/></svg>',
    interview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>'
  };
  





  const PHASES = D.phases;

  const $ = (id) => racine.querySelector('#' + id) || portail.querySelector('#' + id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  



  const EN = /^\/en(\/|$)/.test((typeof location !== 'undefined' && location.pathname) || '');
  



  const lien = (u) => { u = String(u || ''); return (!EN || !/^\/(?!\/)/.test(u) || /^\/en(\/|$)/.test(u)) ? u : '/en' + u; };
  const href = (u) => (u ? ' href="' + esc(lien(u)) + '"' : '');
  if (EN) [racine, portail].forEach((z) => z && z.querySelectorAll && z.querySelectorAll('a[href^="/"], form[action^="/"]').forEach((a) => { const k = a.tagName === 'FORM' ? 'action' : 'href'; a.setAttribute(k, a.dataset && a.dataset.en ? a.dataset.en : lien(a.getAttribute(k))); }));
  










  const suiviPhase = rdrSuivrePhase({ phases: PHASES, calendrier: D.calendrier, recherche: location.search, parDefaut: 'avant', doc: document, quandChange: (p) => changerPhase(p) });
  ecouteurs.push(suiviPhase.arreter);
  const horloge = suiviPhase.horloge;
  let phase = suiviPhase.phase;
  racine.dataset.phase = phase;

  




  const pointage = () => { const p = $('ess-pointage'); if (!p) return; const t = horloge.maintenant(); const c = Math.ceil(t / 14400000) * 14400000 - t; p.textContent = Math.floor(c / 3600000) + ' h ' + String(Math.floor(c / 60000) % 60).padStart(2, '0'); };

  const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const JOURS = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
  const DRAPEAU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h12l-2.5 4.5L17 13H5"/></svg>';
  const CHEV_D = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  const COEUR = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 5 6.4 5c2 0 3.6 1.2 4.6 2.8C12 6.2 13.6 5 15.6 5 19 5 21.1 8.5 19.6 11.8 17.5 16.4 12 21 12 21z"/></svg>';
  const VERROU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  



  const SIX = [{"cle":"ultim","c":"#659fbf","svg":"<svg viewBox=\"-163.01 10.58 153.37 142.37\" aria-hidden=\"true\"><g transform=\"scale(-1 1) rotate(2 76 134)\"><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M118 135.5Q134 137.2 154 136\" stroke=\"rgba(255,255,255,.55)\" stroke-width=\"1.8\"/><path d=\"M108 138.5Q126 140.6 146 139.6\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"1.5\"/><path d=\"M74 140.2Q88 141.8 104 141.2\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.3\"/></g><g class=\"s6-corps\"><g class=\"s6-lisere\" stroke-width=\"7\" stroke-linejoin=\"round\"><path d=\"M43.55 129.17c3.14-3.35 30.76-7.53 30.76-7.53l1.69-92.06c-9.4 7.53-32.44 99.59-32.44 99.59\"/><path d=\"M81.18 36.35h-2.35v-.75h2.34c.63 0 .94-.23.94-.75 0-.52-.31-.75-.94-.75h-2.34v-.72h2.35c1.08 0 1.63.55 1.63 1.48 0 .94-.55 1.49-1.63 1.49m-2.35-4.32h3.21v-1.65h.7v2.39h-3.91zm0-4.32h.7v1.1h3.21v.74h-3.21v1.1h-.7zm0-1.21h3.91v.74h-3.91zm0-1.47 1.93-.94v-.02l-1.93-.93v-.8h3.91v.74h-1.23c-.85 0-1.44-.01-1.45-.01v.01c.01.01.35.15.8.36l.93.44v.45l-.92.43a16 16 0 0 1-.81.37v.02c.01 0 .6-.01 1.45-.01h1.23v.73h-3.91v-.84Zm8.66-3.21-11.51-4.18-1.67 103.98s23.22-6.9 26.15-6.28L87.49 21.83Z\"/></g><path d=\"M49.72 145.24s.47-6.2 4.55-7.62c4.08-1.41 65.75-12.4 65.75-12.4l4.16 1.15v2.3z\" fill=\"#ffffff\"/><path d=\"M23.28 137.05s26.62-2.85 40.02-5.24a54 54 0 0 0 6.98-1.74l3.01-.97-10.25-3.87-37.87 5.75z\" fill=\"#ffffff\"/><path d=\"m18.6 128.89 38.85-5.47-6.55-4.57-28.25 5.02\" fill=\"#ffffff\"/><path d=\"m80.43 115.8 11.75 4.3s1.67.98 7.04 1.39c5.37.42 6.9.84 6.9.84s6.92.33 8.44 3.85l-3.76.83-18.48-3.35-15.76-6.95 3.88-.9Z\" fill=\"#ffffff\"/><path d=\"m77.17 116.7 15.15 5.78c1.2.46 2.47.72 3.75.77l8.15.34c1.2.05 2.39.27 3.53.65 1.64.55 3.87 1.43 4.63 2.36l-30.62 5.58-25.08-11.24z\" fill=\"#cdcdcd\"/><path d=\"m76.79 133.09-2.4-2.72a6 6 0 0 0-2.43-1.66c-1.05-.38-2.26-.72-2.91-.95l-16.75-5.99 5.38-.84 17.49 6.08s4.47 1.93 6.6 5.16z\" fill=\"#ffffff\"/><path d=\"M93.73 138.91c-2.09-.04-3.77-2.62-3.77-2.62l-1.74.39s1.39 3.67 4.85 3z\" fill=\"#ffdf36\"/><path d=\"M94.76 131.23v2.97l.02 0-.07 2.62s.05 1.71-.98 2.09l-.66.77c1.41-.24 1.8-.44 2.54-1.12.7-.65.97-1.64 1.04-2.6l.16-2.29.01 0v-2.98l-2.06.55Z\" fill=\"#ffdf36\"/><path d=\"m93.56 135.01.1.44 4.59-1.01-.1-.44z\" fill=\"#ffffff\" fill-rule=\"evenodd\"/><path d=\"M43.55 129.17c3.14-3.35 30.76-7.53 30.76-7.53l1.69-92.06c-9.4 7.53-32.44 99.59-32.44 99.59\" fill=\"#ffffff\"/><path d=\"M120.8 125.52v-2.82l2.86.96v2.57l-2.86-.71Z\" fill=\"#ffdf36\"/><path d=\"m123.36 128.86-.85 4.89c-.05.29-.47.28-.51-.01l-.62-4.44z\" fill=\"#ffdf36\"/><path class=\"s6-gv\" d=\"M81.18 36.35h-2.35v-.75h2.34c.63 0 .94-.23.94-.75 0-.52-.31-.75-.94-.75h-2.34v-.72h2.35c1.08 0 1.63.55 1.63 1.48 0 .94-.55 1.49-1.63 1.49m-2.35-4.32h3.21v-1.65h.7v2.39h-3.91zm0-4.32h.7v1.1h3.21v.74h-3.21v1.1h-.7zm0-1.21h3.91v.74h-3.91zm0-1.47 1.93-.94v-.02l-1.93-.93v-.8h3.91v.74h-1.23c-.85 0-1.44-.01-1.45-.01v.01c.01.01.35.15.8.36l.93.44v.45l-.92.43a16 16 0 0 1-.81.37v.02c.01 0 .6-.01 1.45-.01h1.23v.73h-3.91v-.84Zm8.66-3.21-11.51-4.18-1.67 103.98s23.22-6.9 26.15-6.28L87.49 21.83Z\" fill=\"#cdcdcd\"/></g><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M24 134.5Q19 131.8 15 132.8M26 137Q20 138.2 15 137.4\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1.2\"/></g></g></svg>"},{"cle":"o50","c":"#71b9f0","svg":"<svg viewBox=\"-154.15 16.31 136.54 125.16\" aria-hidden=\"true\"><g transform=\"scale(-1 1) rotate(3 74 124)\"><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M108 125.5Q124 127.2 144 126\" stroke=\"rgba(255,255,255,.55)\" stroke-width=\"1.8\"/><path d=\"M98 128.5Q116 130.6 136 129.6\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"1.5\"/><path d=\"M64 130.2Q78 131.8 94 131.2\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.3\"/></g><g class=\"s6-corps\"><g class=\"s6-lisere\" stroke-width=\"7\" stroke-linejoin=\"round\"><path d=\"M72.61 35.56 50.96 120.96s20.68-3.01 28.88-8.59z\"/><path d=\"M78.4 52.46c-1.02.1-1.67-.43-1.75-1.28-.08-.85.44-1.49 1.47-1.59 1.02-.1 1.66.43 1.74 1.28.08.85-.44 1.49-1.46 1.59m-1.3-5.76.21.56a.75.75 0 0 0-.4.77c.05.5.44.76 1.12.7.7-.07 1.02-.43.98-.9-.04-.38-.28-.61-.61-.69l.1-.58c.58.14 1 .55 1.06 1.21.08.82-.43 1.46-1.47 1.57-1.03.1-1.66-.43-1.74-1.26-.07-.68.28-1.15.75-1.35m-1.04-2.31.55-.05.14 1.41.68-.07-.1-1.06.55-.05.1 1.06.76-.07-.14-1.42.55-.05.2 2.01-3.09.3-.19-1.99Zm-.2-2.01 2.99-1.34.06.62-.6.26.12 1.18.64.13.06.61-3.19-.74-.07-.71Zm-.19-1.96 1.91-1.48v-.01c0 0-.38.04-.74.08l-1.3.13-.06-.58 3.09-.3.06.6-1.91 1.48 0 .01c.01 0 .37-.05.76-.08l1.28-.12.06.58-3.09.3-.06-.6Zm-.52-5.33.55-.05.13 1.38.77-.07-.1-1.07.55-.05.11 1.07 1.23-.12.06.59-3.09.3-.19-1.97Zm-.09-.98 3.09-.3.06.59-3.09.3zm-.24-2.46.55-.05.14 1.38.76-.07-.1-1.07.55-.05.1 1.07 1.23-.12.06.59-3.09.3-.19-1.97Zm-.25-2.59.55-.05.09.87 2.54-.25.06.58-2.54.25.09.87-.55.05-.23-2.32Zm-.09-.86.86-.56c.2-.13.36-.23.37-.24v-.01c0 0-.18-.07-.4-.16l-.95-.4-.06-.62 1.96.85 1.23-.12.06.59-1.23.12-1.76 1.22-.07-.67Zm4.1-3.58-6.58-.81 6.48 90.02 9.33-4.45-9.23-84.75Z\"/></g><path d=\"M90.46 117.98c-12.39 8.69-43.45 11.26-43.45 11.26v-4.83s27.84-11.1 37.98-11.75h6.76l-1.29 5.31Z\" fill=\"#ffffff\"/><path d=\"M71.87 132.79s-.94-4.87 10.55-8.69c12.25-4.07 29.29-6.6 29.29-6.6h2.41v1.77s-36.44 14.27-42.25 13.52\" fill=\"#ffffff\"/><path d=\"M27.72 122.72s-.05-3.58 8.69-6.15l18.71-3.67-1.57 4.91s-21.24 5.4-25.83 4.92\" fill=\"#cccccc\"/><path d=\"M89.68 112.67h12.02c1.37 0 2.72.3 3.95.9 1.13.55 2.43 1.37 3.36 2.55l2.04 2.58h-1.93l-.2-.29c-1.34-1.91-3.39-3.21-5.69-3.54l-.22-.03c-2.68-.32-12.93.16-12.93.16z\" fill=\"#ffffff\"/><path d=\"M76.63 119.14h12.02c1.37 0 2.72.3 3.95.9 1.13.55 2.43 1.37 3.36 2.55l2.04 2.58h-1.93l-.2-.29c-1.34-1.91-3.39-3.21-5.69-3.54l-.22-.03c-2.68-.32-12.93.16-12.93.16z\" fill=\"#ffffff\"/><path d=\"m111.05 119.98.45 4.84.88-5.35-1.32.51Z\" fill=\"#f7de4a\"/><path d=\"M72.83 80.48c-.37.14-.69.26-.7.27l0 .02c.01.01.34.07.72.16l1 .21-.07-1z\" fill=\"#ffffff\"/><path d=\"M72.61 35.56 50.96 120.96s20.68-3.01 28.88-8.59z\" fill=\"#ffffff\"/><path d=\"M77.08 42.42c-.26.11-.56.23-.56.24l0 .01c.01 0 .31.07.59.13l.76.16-.08-.84z\" fill=\"#cccccc\"/><path d=\"M78.18 50.18c-.7.07-1.01.45-.96.95.05.5.43.81 1.13.74.7-.07 1.02-.45.97-.95s-.43-.81-1.13-.74\" fill=\"#cccccc\"/><path class=\"s6-gv\" d=\"M78.4 52.46c-1.02.1-1.67-.43-1.75-1.28-.08-.85.44-1.49 1.47-1.59 1.02-.1 1.66.43 1.74 1.28.08.85-.44 1.49-1.46 1.59m-1.3-5.76.21.56a.75.75 0 0 0-.4.77c.05.5.44.76 1.12.7.7-.07 1.02-.43.98-.9-.04-.38-.28-.61-.61-.69l.1-.58c.58.14 1 .55 1.06 1.21.08.82-.43 1.46-1.47 1.57-1.03.1-1.66-.43-1.74-1.26-.07-.68.28-1.15.75-1.35m-1.04-2.31.55-.05.14 1.41.68-.07-.1-1.06.55-.05.1 1.06.76-.07-.14-1.42.55-.05.2 2.01-3.09.3-.19-1.99Zm-.2-2.01 2.99-1.34.06.62-.6.26.12 1.18.64.13.06.61-3.19-.74-.07-.71Zm-.19-1.96 1.91-1.48v-.01c0 0-.38.04-.74.08l-1.3.13-.06-.58 3.09-.3.06.6-1.91 1.48 0 .01c.01 0 .37-.05.76-.08l1.28-.12.06.58-3.09.3-.06-.6Zm-.52-5.33.55-.05.13 1.38.77-.07-.1-1.07.55-.05.11 1.07 1.23-.12.06.59-3.09.3-.19-1.97Zm-.09-.98 3.09-.3.06.59-3.09.3zm-.24-2.46.55-.05.14 1.38.76-.07-.1-1.07.55-.05.1 1.07 1.23-.12.06.59-3.09.3-.19-1.97Zm-.25-2.59.55-.05.09.87 2.54-.25.06.58-2.54.25.09.87-.55.05-.23-2.32Zm-.09-.86.86-.56c.2-.13.36-.23.37-.24v-.01c0 0-.18-.07-.4-.16l-.95-.4-.06-.62 1.96.85 1.23-.12.06.59-1.23.12-1.76 1.22-.07-.67Zm4.1-3.58-6.58-.81 6.48 90.02 9.33-4.45-9.23-84.75Z\" fill=\"#cccccc\"/></g><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M32 124.5Q27 121.8 23 122.8M34 127Q28 128.2 23 127.4\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1.2\"/></g></g></svg>"},{"cle":"c40","c":"#7e92ef","svg":"<svg viewBox=\"-158.71 19.24 132 152.84\" aria-hidden=\"true\"><g transform=\"scale(-1 1) rotate(8 74 139)\"><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M103 140.5Q119 142.2 139 141\" stroke=\"rgba(255,255,255,.55)\" stroke-width=\"1.8\"/><path d=\"M93 143.5Q111 145.6 131 144.6\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"1.5\"/><path d=\"M59 145.2Q73 146.8 89 146.2\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.3\"/></g><g class=\"s6-corps\"><g class=\"s6-lisere\" stroke-width=\"7\" stroke-linejoin=\"round\"><path d=\"M38.79 137.47s34.6-3.74 41.66-7.25l-8.22-91.81-33.44 99.06Z\"/><path d=\"M79.66 56.27c-1.42.21-2.31-.48-2.48-1.62-.14-.93.3-1.6.95-1.92l.33.76c-.33.2-.57.56-.5 1.08.1.68.66 1.02 1.59.89.96-.14 1.38-.66 1.29-1.31-.08-.52-.42-.82-.88-.92l.1-.81c.81.15 1.41.69 1.55 1.59.17 1.12-.49 2.05-1.93 2.26m-2.85-4.74 3.49-.51-.26-1.79.76-.11.38 2.6-4.24.62-.12-.81Zm-.66-4.5 4.03-2.05.13.85-.81.4.24 1.61.89.14.12.84-4.45-.81-.14-.98Zm-.56-3.2c-.11-.76.12-1.39.86-1.68l.33.74c-.37.15-.52.41-.46.84.06.4.25.57.55.53.41-.06.45-.46.53-1.03.08-.6.25-1.27 1.13-1.4.83-.12 1.32.36 1.46 1.28.1.72-.04 1.48-.91 1.77l-.32-.74c.4-.11.58-.44.52-.92-.06-.41-.27-.62-.6-.57-.47.07-.44.56-.53 1.06-.1.56-.26 1.25-1.13 1.38-.77.11-1.28-.36-1.41-1.25m-.5-3.4c-.11-.76.12-1.39.86-1.68l.33.74c-.37.15-.52.41-.46.84.06.4.25.57.55.53.41-.06.45-.46.53-1.03.08-.6.25-1.27 1.13-1.4.82-.12 1.32.36 1.46 1.28.11.72-.04 1.48-.91 1.77l-.32-.74c.4-.11.58-.45.52-.92-.06-.4-.27-.62-.6-.57-.47.07-.44.56-.53 1.06-.1.56-.26 1.25-1.13 1.38-.77.11-1.28-.36-1.41-1.25m1.31-9.35c1.21-.18 1.84.22 1.96 1.04.12.82-.37 1.38-1.57 1.56-1.2.18-1.83-.22-1.95-1.04-.12-.82.37-1.38 1.57-1.55m2.32 3.97-.78.11.22 1.48-.68.1-2.1-.79-.17-1.16 1.96-.29-.07-.44.66-.1.07.44.78-.11.11.76Zm8.79-5.67-16.04-.68 8.52 96.34 16.9-4.46c1.06-17.59-9.37-91.19-9.37-91.19\"/></g><path d=\"M39.71 139.94c-.1.01.43 2.21.9 2.75 2.19 2.53 6.6 3.35 9.85 3.39 18.05.21 53.6-7.95 57.88-12.78l.39-3.09s-24.19 7.57-69.02 9.73\" fill=\"#ffffff\"/><path d=\"m93.65 125.04 15.08 5.18s-23.58 9.5-60.41 11.21c-1.83.08-7.35-.32-8.29-.98-1.98-1.37 3.67-3.54 3.67-3.54 9.38-2.62 39.29-11.41 49.95-11.87\" fill=\"#cccccc\"/><path d=\"M38.79 137.47s34.6-3.74 41.66-7.25l-8.22-91.81-33.44 99.06Z\" fill=\"#ffffff\"/><path d=\"m105.35 135.25 1.37 5.13.93.93s.07-3.88-.27-7.2z\" fill=\"#f7de4a\"/><path d=\"M81.81 153.38c-.15-.54-2.63-.33-5.41.28l-.47-10.33-4.09.72 1.4 10.5c-2.81 1.08-5.03 2.89-4.88 3.46.18.65 3.56-.38 6.97-1.3 3.41-.92 6.66-2.67 6.48-3.33\" fill=\"#f7de4a\"/><path d=\"M77.84 47.03c-.35.17-.75.36-.76.36l0 .02c.01.01.44.07.83.14l1.05.17-.17-1.15-.95.46Z\" fill=\"#cccccc\"/><path d=\"M76.68 32.91c.76-.11 1.04-.3.98-.69-.06-.39-.38-.5-1.14-.38-.75.11-1.04.31-.98.7.06.39.39.49 1.14.38\" fill=\"#cccccc\"/><path class=\"s6-gv\" d=\"M79.66 56.27c-1.42.21-2.31-.48-2.48-1.62-.14-.93.3-1.6.95-1.92l.33.76c-.33.2-.57.56-.5 1.08.1.68.66 1.02 1.59.89.96-.14 1.38-.66 1.29-1.31-.08-.52-.42-.82-.88-.92l.1-.81c.81.15 1.41.69 1.55 1.59.17 1.12-.49 2.05-1.93 2.26m-2.85-4.74 3.49-.51-.26-1.79.76-.11.38 2.6-4.24.62-.12-.81Zm-.66-4.5 4.03-2.05.13.85-.81.4.24 1.61.89.14.12.84-4.45-.81-.14-.98Zm-.56-3.2c-.11-.76.12-1.39.86-1.68l.33.74c-.37.15-.52.41-.46.84.06.4.25.57.55.53.41-.06.45-.46.53-1.03.08-.6.25-1.27 1.13-1.4.83-.12 1.32.36 1.46 1.28.1.72-.04 1.48-.91 1.77l-.32-.74c.4-.11.58-.44.52-.92-.06-.41-.27-.62-.6-.57-.47.07-.44.56-.53 1.06-.1.56-.26 1.25-1.13 1.38-.77.11-1.28-.36-1.41-1.25m-.5-3.4c-.11-.76.12-1.39.86-1.68l.33.74c-.37.15-.52.41-.46.84.06.4.25.57.55.53.41-.06.45-.46.53-1.03.08-.6.25-1.27 1.13-1.4.82-.12 1.32.36 1.46 1.28.11.72-.04 1.48-.91 1.77l-.32-.74c.4-.11.58-.45.52-.92-.06-.4-.27-.62-.6-.57-.47.07-.44.56-.53 1.06-.1.56-.26 1.25-1.13 1.38-.77.11-1.28-.36-1.41-1.25m1.31-9.35c1.21-.18 1.84.22 1.96 1.04.12.82-.37 1.38-1.57 1.56-1.2.18-1.83-.22-1.95-1.04-.12-.82.37-1.38 1.57-1.55m2.32 3.97-.78.11.22 1.48-.68.1-2.1-.79-.17-1.16 1.96-.29-.07-.44.66-.1.07.44.78-.11.11.76Zm8.79-5.67-16.04-.68 8.52 96.34 16.9-4.46c1.06-17.59-9.37-91.19-9.37-91.19\" fill=\"#cccccc\"/><path d=\"m77.29 35.26-.59.09c-.38.06-.78.11-.79.11l.01.03 1.47.57.02-.02-.06-.42z\" fill=\"#cccccc\"/></g><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M43 139.5Q38 136.8 34 137.8M45 142Q39 143.2 34 142.4\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1.2\"/></g></g></svg>"},{"cle":"imoca","c":"#76bcbe","svg":"<svg viewBox=\"-156.26 11.65 129.5 162.65\" aria-hidden=\"true\"><g transform=\"scale(-1 1) rotate(8 72 142)\"><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M99 143.5Q115 145.2 135 144\" stroke=\"rgba(255,255,255,.55)\" stroke-width=\"1.8\"/><path d=\"M89 146.5Q107 148.6 127 147.6\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"1.5\"/><path d=\"M55 148.2Q69 149.8 85 149.2\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.3\"/></g><g class=\"s6-corps\"><g class=\"s6-lisere\" stroke-width=\"7\" stroke-linejoin=\"round\"><path d=\"m76.04 47.09-28.49 92.6 45.27-9.33S75.77 50.58 76.04 47.09\"/><path d=\"M80.91 31.63c-1.34.02-2.09-.74-2.1-1.82-.01-.89.48-1.45 1.12-1.66l.21.74a.96.96 0 0 0-.6.95c.01.64.48 1.03 1.36 1.02.91-.01 1.37-.44 1.36-1.06-.01-.49-.29-.81-.71-.96l.19-.74c.73.24 1.23.82 1.24 1.67.01 1.06-.71 1.84-2.08 1.86m.06 4.1c-1.33.02-2.1-.74-2.12-1.84-.01-1.1.74-1.88 2.07-1.89s2.1.74 2.11 1.84c.02 1.11-.73 1.88-2.06 1.89m2.03 1.24-1.27.02c-.87.01-1.48.01-1.49.01v.01c.01.01.36.15.83.36l.96.44.01.46-.94.45c-.48.23-.83.39-.83.39v.02c.01 0 .62-.02 1.49-.03l1.27-.01.01.75-4.02.05-.01-.86 1.98-.99v-.02l-2-.93-.01-.83 4.02-.05zm.05 4.29-4.03.05-.01-.76 4.03-.05zm-4.21-15.62 4.01-1.4.01.81-.8.27.02 1.53.81.24.01.79-4.04-1.31zm12.34-4.88-13.75.17-1.71 26.47 16.19 82.21 8.21-1.4c4.73-28.34-8.93-107.44-8.93-107.44\"/></g><path d=\"m39.4 142.91 64.53-9.25.59 4.97s-35.86 7.29-64.28 8.5z\" fill=\"#ffffff\"/><path d=\"m81.68 130.12 22.25 3.54-64.53 9.25z\" fill=\"#cccccc\"/><path d=\"M78.44 160.06c1.37-.44 2.92-.72 2.57-1.09-.27-.29-4.33.21-4.33.21l.02-15.81-2.97.47 1.84 15.57-4.67 1.31\" fill=\"#f7de4a\"/><path d=\"m89.18 141.41.53 2.85.75-3.04z\" fill=\"#f7de4a\"/><path d=\"m101.95 139.13.89 6.93a.33.33 0 0 1-.04.21c-.13.23-.44.03-.5-.06-1.02-1.54-1.94-6.77-1.94-6.77z\" fill=\"#f7de4a\"/><path d=\"M78.99 142.63c1.62 4.13 4.71 4.35 4.71 4.35l-2.08.27c-2.42-.57-3.14-4.55-3.14-4.55l.51-.08Z\" fill=\"#f7de4a\"/><path d=\"M81.62 147.26s5.45.57 8.4-.53c2.86-1.06 2.96-2.8 2.96-2.8s-1.04 1.57-3.62 2.44c-2.44.82-5.67.62-5.67.62z\" fill=\"#f7de4a\"/><path d=\"m76.04 47.09-28.49 92.6 45.27-9.33S75.77 50.58 76.04 47.09\" fill=\"#ffffff\"/><path d=\"M59.3 132.1c-1.39.24-.5 3.13.77 2.57 1.39-.23.5-3.14-.77-2.56\" fill=\"#ffffff\"/><path d=\"M79.66 26.09v.02c.01.01.4.12.75.23l.96.29-.01-1.09-.94.31c-.35.11-.75.24-.75.25\" fill=\"#cccccc\"/><path d=\"M80.94 32.76c-.91.01-1.36.47-1.35 1.11.01.65.47 1.09 1.37 1.08.91-.01 1.36-.46 1.36-1.12-.01-.65-.47-1.09-1.38-1.08\" fill=\"#cccccc\"/><path class=\"s6-gv\" d=\"M80.91 31.63c-1.34.02-2.09-.74-2.1-1.82-.01-.89.48-1.45 1.12-1.66l.21.74a.96.96 0 0 0-.6.95c.01.64.48 1.03 1.36 1.02.91-.01 1.37-.44 1.36-1.06-.01-.49-.29-.81-.71-.96l.19-.74c.73.24 1.23.82 1.24 1.67.01 1.06-.71 1.84-2.08 1.86m.06 4.1c-1.33.02-2.1-.74-2.12-1.84-.01-1.1.74-1.88 2.07-1.89s2.1.74 2.11 1.84c.02 1.11-.73 1.88-2.06 1.89m2.03 1.24-1.27.02c-.87.01-1.48.01-1.49.01v.01c.01.01.36.15.83.36l.96.44.01.46-.94.45c-.48.23-.83.39-.83.39v.02c.01 0 .62-.02 1.49-.03l1.27-.01.01.75-4.02.05-.01-.86 1.98-.99v-.02l-2-.93-.01-.83 4.02-.05zm.05 4.29-4.03.05-.01-.76 4.03-.05zm-4.21-15.62 4.01-1.4.01.81-.8.27.02 1.53.81.24.01.79-4.04-1.31zm12.34-4.88-13.75.17-1.71 26.47 16.19 82.21 8.21-1.4c4.73-28.34-8.93-107.44-8.93-107.44\" fill=\"#cccccc\"/></g><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M43 142.5Q38 139.8 34 140.8M45 145Q39 146.2 34 145.4\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1.2\"/></g></g></svg>"},{"cle":"vmono","c":"#f9f06d","svg":"<svg viewBox=\"-158.95 1.46 133.51 146.39\" aria-hidden=\"true\"><g transform=\"scale(-1 1) rotate(6 70 128)\"><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M106 129.5Q122 131.2 142 130\" stroke=\"rgba(255,255,255,.55)\" stroke-width=\"1.8\"/><path d=\"M96 132.5Q114 134.6 134 133.6\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"1.5\"/><path d=\"M62 134.2Q76 135.8 92 135.2\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.3\"/></g><g class=\"s6-corps\"><g class=\"s6-lisere\" stroke-width=\"7\" stroke-linejoin=\"round\"><path d=\"M74.76 41.46S63.24 76.01 38.05 127.83l30.26-5.63s-3.83-12.09 6.45-80.74\"/><path d=\"M68.31 125.46h1.98L78.02 9.89h-.83l-8.88 115.57Z\"/><path d=\"m81.07 34.09-2.32 1.29 0 .01c.01 0 .41.01.84.04l1.4.08-.04.64-3.4-.19.04-.66 2.32-1.28v-.01c0 0-.42-.02-.81-.04l-1.43-.08.04-.64 3.4.19-.04.66Zm-2.02 5.53c-1.13-.06-1.73-.75-1.68-1.68.05-.93.73-1.54 1.86-1.48 1.13.07 1.73.75 1.67 1.68s-.72 1.54-1.85 1.48m1.64 1.16-1.07-.06c-.74-.04-1.25-.08-1.26-.08l0 .01c.01.01.29.15.68.36l.79.43-.02.39-.82.33c-.42.17-.72.28-.73.28l0 .02c.01 0 .52.02 1.26.06l1.07.06-.04.64-3.4-.19.04-.73 1.73-.72v-.01l-1.63-.91.04-.7 3.4.19-.04.65Zm-.35 6.21-3.4-.19.12-2.19.61.04-.09 1.54.74.04.07-1.17.6.04-.07 1.17.84.05.09-1.56.61.04-.13 2.21Zm-.05 2c-.05.83-.7 1.49-1.85 1.42-1.14-.06-1.72-.75-1.67-1.66.04-.74.49-1.2 1.04-1.33l.13.64c-.25.08-.53.3-.56.76-.03.54.35.91 1.08.95.76.04 1.19-.31 1.22-.88.03-.45-.2-.74-.37-.84l-.33-.02-.04.78-.61-.04.08-1.38 1.9.11-.03.58c-.23-.01-.27-.02-.3-.02v.01c.16.18.33.5.31.94m-.19 2.3-.69.18-.07 1.29.67.25-.04.67-3.34-1.34.04-.79 3.47-.95zm-.21 3.76-2.79-.16-.05.96-.61-.04.14-2.56.61.04-.05.96 2.8.16zm-.11 2.03-2.32 1.29 0 .01c.01 0 .41.01.84.04l1.41.08-.04.64-3.4-.19.04-.66 2.32-1.28 0-.01c0 0-.42-.02-.81-.04l-1.43-.08.04-.64 3.4.19-.04.66Zm-.18 3.25-3.4-.19.04-.65 3.4.19zm-.13 2.28-3.46.88.04-.72 1.73-.39c.69-.16 1.03-.23 1.04-.24v-.01c-.01-.01-.34-.12-.99-.34l-1.69-.6.04-.69 3.34 1.26zm.15-32.83c1.13.06 1.73.75 1.67 1.68-.05.93-.72 1.54-1.85 1.48-1.13-.06-1.73-.75-1.68-1.68.05-.93.73-1.54 1.86-1.48M78.01 9.89l-7.56 104.8 27.35-2C97.95 93.67 78.01 9.89 78.01 9.89\"/></g><path d=\"M35.67 128.22c-.31-.01 2.25 1.89 4.23 3.32a8.26 8.26 0 0 0 4.96 1.57c10.31-.13 47.17-1.27 67.5-10.7l-1.44-2.88s-33.94 9.71-75.24 8.69\" fill=\"#ffffff\"/><path d=\"m107.75 117.6 3.16 1.94s-34.1 9.87-75.24 8.69c0 0 58.77-9.77 72.08-10.63\" fill=\"#cccccc\"/><path d=\"M74.76 41.46S63.24 76.01 38.05 127.83l30.26-5.63s-3.83-12.09 6.45-80.74\" fill=\"#ffffff\"/><path d=\"M68.31 125.46h1.98L78.02 9.89h-.83l-8.88 115.57Z\" fill=\"#ffffff\"/><path d=\"M69.75 114.19v1.55l28.17-1.49c.57-.03.97-.5.83-.98-.11-.36-.5-.61-.94-.58l-28.05 1.51Z\" fill=\"#ffffff\"/><path d=\"m79.48 130.66 4.63 3.05 3.62.31-3.2-4.07z\" fill=\"#cccccc\"/><path d=\"m86.37 121.58 2.38 1.71s5.69-3.09 8.12-2.55l-2.44-1.09s-4.96-.04-8.05 1.94\" fill=\"#ffffff\"/><path d=\"m88.74 123.28 8.19-1.25-.07-1.29s-2.38-1.13-8.12 2.55\" fill=\"#ffffff\"/><path d=\"m110.05 123.33.56 2.03.41.39.77-3.12z\" fill=\"#cccccc\"/><path d=\"M79.19 37.12c-.77-.04-1.17.31-1.2.86-.03.55.33.95 1.09.99.77.04 1.18-.31 1.21-.86s-.33-.95-1.1-.99\" fill=\"#cccccc\"/><path d=\"m78.75 52.54.05-.92-.81.21c-.3.08-.64.16-.65.16v.01c0 .01.33.13.62.24l.79.3Z\" fill=\"#cccccc\"/><path d=\"M79.46 32.27c.77.04 1.18-.31 1.21-.86.03-.55-.33-.95-1.1-.99-.77-.04-1.17.31-1.2.86-.03.55.33.95 1.09.99\" fill=\"#cccccc\"/><path class=\"s6-gv\" d=\"m81.07 34.09-2.32 1.29 0 .01c.01 0 .41.01.84.04l1.4.08-.04.64-3.4-.19.04-.66 2.32-1.28v-.01c0 0-.42-.02-.81-.04l-1.43-.08.04-.64 3.4.19-.04.66Zm-2.02 5.53c-1.13-.06-1.73-.75-1.68-1.68.05-.93.73-1.54 1.86-1.48 1.13.07 1.73.75 1.67 1.68s-.72 1.54-1.85 1.48m1.64 1.16-1.07-.06c-.74-.04-1.25-.08-1.26-.08l0 .01c.01.01.29.15.68.36l.79.43-.02.39-.82.33c-.42.17-.72.28-.73.28l0 .02c.01 0 .52.02 1.26.06l1.07.06-.04.64-3.4-.19.04-.73 1.73-.72v-.01l-1.63-.91.04-.7 3.4.19-.04.65Zm-.35 6.21-3.4-.19.12-2.19.61.04-.09 1.54.74.04.07-1.17.6.04-.07 1.17.84.05.09-1.56.61.04-.13 2.21Zm-.05 2c-.05.83-.7 1.49-1.85 1.42-1.14-.06-1.72-.75-1.67-1.66.04-.74.49-1.2 1.04-1.33l.13.64c-.25.08-.53.3-.56.76-.03.54.35.91 1.08.95.76.04 1.19-.31 1.22-.88.03-.45-.2-.74-.37-.84l-.33-.02-.04.78-.61-.04.08-1.38 1.9.11-.03.58c-.23-.01-.27-.02-.3-.02v.01c.16.18.33.5.31.94m-.19 2.3-.69.18-.07 1.29.67.25-.04.67-3.34-1.34.04-.79 3.47-.95zm-.21 3.76-2.79-.16-.05.96-.61-.04.14-2.56.61.04-.05.96 2.8.16zm-.11 2.03-2.32 1.29 0 .01c.01 0 .41.01.84.04l1.41.08-.04.64-3.4-.19.04-.66 2.32-1.28 0-.01c0 0-.42-.02-.81-.04l-1.43-.08.04-.64 3.4.19-.04.66Zm-.18 3.25-3.4-.19.04-.65 3.4.19zm-.13 2.28-3.46.88.04-.72 1.73-.39c.69-.16 1.03-.23 1.04-.24v-.01c-.01-.01-.34-.12-.99-.34l-1.69-.6.04-.69 3.34 1.26zm.15-32.83c1.13.06 1.73.75 1.67 1.68-.05.93-.72 1.54-1.85 1.48-1.13-.06-1.73-.75-1.68-1.68.05-.93.73-1.54 1.86-1.48M78.01 9.89l-7.56 104.8 27.35-2C97.95 93.67 78.01 9.89 78.01 9.89\" fill=\"#cccccc\"/></g><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M40 128.5Q35 125.8 31 126.8M42 131Q36 132.2 31 131.4\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1.2\"/></g></g></svg>"},{"cle":"vmulti","c":"#f19f39","svg":"<svg viewBox=\"-154.5 13.37 126.37 133.49\" aria-hidden=\"true\"><g transform=\"scale(-1 1) rotate(8 70 124)\"><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M100 125.5Q116 127.2 136 126\" stroke=\"rgba(255,255,255,.55)\" stroke-width=\"1.8\"/><path d=\"M90 128.5Q108 130.6 128 129.6\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"1.5\"/><path d=\"M56 130.2Q70 131.8 86 131.2\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.3\"/></g><g class=\"s6-corps\"><g class=\"s6-lisere\" stroke-width=\"7\" stroke-linejoin=\"round\"><path d=\"m69.05 22.39 1.53.5-3.1 91.06-1.24-.13z\"/><path d=\"M69.21 22.74s-24.42 51.05-5.32 82.22c0 0-19.68 11.93-20.1 17.08 0 0-.33-42.18 25.43-99.3\"/><path d=\"M68 56.68s-18.44 51.28-15.16 65.19c0 0 5.46-10.15 13.52-11.76 0 0-2.79-41.25 1.64-53.43\"/><path d=\"M71.9 74.69c-1.03 0-1.6-.59-1.6-1.42 0-.67.38-1.11.88-1.26l.16.57a.72.72 0 0 0-.47.72c0 .5.37.81 1.03.81.7 0 1.07-.34 1.07-.86 0-.41-.22-.66-.38-.75h-.3v.71h-.55v-1.25h1.73v.53c-.21 0-.24 0-.27 0v.01c.15.15.33.44.33.83 0 .76-.56 1.38-1.61 1.38m1.56.71-.62.2v1.18l.62.19v.61l-3.09-1.04v-.72l3.1-1.04zm0 3.42h-2.54v.87h-.55v-2.33h.55v.87h2.54v.58Zm0 1.85-2.04 1.29v.01c.01 0 .38-.01.76-.01h1.28v.58H70.36v-.6l2.04-1.28v-.01c0 0-.38.01-.74.01H70.36v-.58h3.1zm0 2.96h-3.1v-.59h3.1zm0 2.07-3.09.97v-.66l1.55-.45c.62-.18.93-.27.93-.27v-.01c-.01 0-.32-.09-.92-.26l-1.56-.45v-.63l3.1.97zM70.36 69.5h.55v1.41h.68v-1.06h.55v1.06h.77v-1.42h.55v2.01h-3.09zm0-2.11 1.53-.75v-.01l-1.53-.74v-.64h3.1v.59h-.98c-.67 0-1.14-.01-1.14-.01v.01c0 .01.27.12.64.29l.74.35v.35l-.73.34c-.37.18-.64.29-.65.29v.02c0 0 .47-.01 1.15-.01h.98v.58h-3.09v-.66Zm0-3.2h1.85c.5 0 .74-.18.74-.6 0-.41-.24-.6-.74-.6H70.36v-.57h1.86c.85 0 1.29.44 1.29 1.18 0 .74-.44 1.18-1.29 1.18H70.36zm0-2.83h2.54v-1.31h.55v1.9H70.36zm0-3.42h.55v.87h2.54v.58h-2.54v.87h-.55zm0-.96h3.1v.59H70.36zm-.37-22.3-2.39 75.78 19.66-4.13S70.78 46.62 69.99 34.68\"/></g><path d=\"M102.54 116.55a5.39 5.39 0 0 1-4.1 3.39l-1.91.34c-13.07 2.32-47.88 8.47-50.97 8.89-3.81.51-4.76-2.34-4.76-2.34l-1.77-3.78 11.68-1.51 40.75-4.34 6.07-.65a14.9 14.9 0 0 0 4.17-1.07l1.49-.62-.65 1.7Z\" fill=\"#ffffff\"/><path d=\"m63.66 117.6 5.22-3.07-13.95 1.33h0l-.5.05.05.01c-1.96.24-9.97 1.13-17.69.94l1.16 1.84a4.55 4.55 0 0 0 2.84 2.02c.9.21 2.1.31 3.6.12 3.25-.42 15.72-2.6 19.79-3.32l.92.15\" fill=\"#cccccc\"/><path d=\"m91.72 117.49 4.81 2.79-14.36 2.55-5.93-4.02 15.22-1.62z\" fill=\"#cccccc\"/><path d=\"m99.23 122.56 6.25-.96c-1.88.29-4.02.62-6.25.96\" fill=\"#f6dd4a\"/><path d=\"M85.3 124.75c-2.86.46-5.13.84-6.26 1.05z\" fill=\"#f6dd4a\"/><path d=\"M85.21 125.6c-1.06-1.9-9.6-7.18-9.6-7.18l12.98-2.23c3.09.25 10.68 6.06 10.68 6.06l-14.06 3.34Zm27.16-5.05s-2.85.43-6.89 1.06l-.09.01c-1.83-1.53-9.51-7.79-12.43-7.88l-16.6-4.11-13.29 4.01-6.4 3.38-3.84 4.84 14.66-2.07s7.84 4.01 9.9 6.28l-.13.02 0 0c-5.22.72-16.47 1.35-16.47 1.35l-.04.37 1.85 2.76a5.33 5.33 0 0 0 3.77 2.1c2.85.25 5.81.02 12.02-1.11 8.05-1.46 29.48-7.51 31.86-8.63s2.13-2.4 2.13-2.4\" fill=\"#ffffff\"/><path d=\"m69.05 22.39 1.53.5-3.1 91.06-1.24-.13z\" fill=\"#ffffff\"/><path class=\"s6-gv\" d=\"M69.21 22.74s-24.42 51.05-5.32 82.22c0 0-19.68 11.93-20.1 17.08 0 0-.33-42.18 25.43-99.3\" fill=\"#cccccc\"/><path d=\"M68 56.68s-18.44 51.28-15.16 65.19c0 0 5.46-10.15 13.52-11.76 0 0-2.79-41.25 1.64-53.43\" fill=\"#ffffff\"/><path d=\"M72.3 76.61v-.84l-.73.23c-.27.09-.57.18-.58.18v.01c0 .01.3.1.57.19z\" fill=\"#cccccc\"/><path class=\"s6-gv\" d=\"M71.9 74.69c-1.03 0-1.6-.59-1.6-1.42 0-.67.38-1.11.88-1.26l.16.57a.72.72 0 0 0-.47.72c0 .5.37.81 1.03.81.7 0 1.07-.34 1.07-.86 0-.41-.22-.66-.38-.75h-.3v.71h-.55v-1.25h1.73v.53c-.21 0-.24 0-.27 0v.01c.15.15.33.44.33.83 0 .76-.56 1.38-1.61 1.38m1.56.71-.62.2v1.18l.62.19v.61l-3.09-1.04v-.72l3.1-1.04zm0 3.42h-2.54v.87h-.55v-2.33h.55v.87h2.54v.58Zm0 1.85-2.04 1.29v.01c.01 0 .38-.01.76-.01h1.28v.58H70.36v-.6l2.04-1.28v-.01c0 0-.38.01-.74.01H70.36v-.58h3.1zm0 2.96h-3.1v-.59h3.1zm0 2.07-3.09.97v-.66l1.55-.45c.62-.18.93-.27.93-.27v-.01c-.01 0-.32-.09-.92-.26l-1.56-.45v-.63l3.1.97zM70.36 69.5h.55v1.41h.68v-1.06h.55v1.06h.77v-1.42h.55v2.01h-3.09zm0-2.11 1.53-.75v-.01l-1.53-.74v-.64h3.1v.59h-.98c-.67 0-1.14-.01-1.14-.01v.01c0 .01.27.12.64.29l.74.35v.35l-.73.34c-.37.18-.64.29-.65.29v.02c0 0 .47-.01 1.15-.01h.98v.58h-3.09v-.66Zm0-3.2h1.85c.5 0 .74-.18.74-.6 0-.41-.24-.6-.74-.6H70.36v-.57h1.86c.85 0 1.29.44 1.29 1.18 0 .74-.44 1.18-1.29 1.18H70.36zm0-2.83h2.54v-1.31h.55v1.9H70.36zm0-3.42h.55v.87h2.54v.58h-2.54v.87h-.55zm0-.96h3.1v.59H70.36zm-.37-22.3-2.39 75.78 19.66-4.13S70.78 46.62 69.99 34.68\" fill=\"#cccccc\"/></g><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M43 124.5Q38 121.8 34 122.8M45 127Q39 128.2 34 127.4\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1.2\"/></g></g></svg>"}];

   
  const titreHtml = (t) => esc(t).replace(/\[([^\]]+)\]/, (_, m) => '<em>' + m + '</em>');

  





  function contenuHero() {
    const p = PHASES[phase];
    const dep = p.depart || null;
    const signe = '<span class="hv-signe">Route du Rhum <b>Destination Guadeloupe</b></span>';
    const ordinal = (t) => esc(t).replace(/\b1er\b/, '1<sup>er</sup>');
    return (dep ? '<span class="hv-haut">' + signe + '<span class="hv-depart">' + DRAPEAU + (dep.court ? '<span class="hv-depart-long">' + ordinal(dep.texte) + '</span><span class="hv-depart-court">' + ordinal(dep.court) + '</span>' : '<span>' + ordinal(dep.texte) + '</span>') + '</span></span>' : signe) +
      '<h2 class="titre">' + titreHtml(p.titre) + '</h2>' +
      '<div class="hv-faits">' + p.faits.map((f, i) => {
         
        const n = /^[0-9 ]+$/.test(f.v) ? Number(f.v.split(' ').join('')) : null;
         
        const etoile = f.n ? '*' : '';
        return '<div class="hv-fait" style="--i:' + i + '"><em class="hv-v"><i' + (f.id ? ' id="' + f.id + '"' : '') + (n !== null ? ' data-n="' + n + '"' : '') + '>' + esc(f.v) + '</i>' + (f.u || etoile ? '<small>' + esc(f.u || '') + etoile + '</small>' : '') + '</em>' +
          '<span class="hv-l"><b>' + esc(f.b) + '</b><span>' + esc(f.s) + '</span>' + (f.n ? '<span class="hv-n">*' + esc(f.n) + '</span>' : '') + '</span></div>';
      }).join('') + '</div>';
  }
  const largeurPhoto = () => Math.min(2560, Math.ceil((innerWidth * Math.min(2, window.devicePixelRatio || 1)) / 160) * 160);
  function rendreHero() {
    const p = PHASES[phase];
    



    


    const annoncee = document.querySelector('link[data-rdr-photo]');
    $('hero-photo').src = annoncee && annoncee.getAttribute('data-rdr-photo') === p.photo ? annoncee.href : IMG(p.photo, largeurPhoto(), Math.round(largeurPhoto() * 0.5625), 82);
    $('hv-titre').innerHTML = contenuHero(); pointage();
  }
  function rendreCtas() {
    

    $('ctas').innerHTML = PHASES[phase].ctas.map((k, i) => (k.bientot ? '<div class="cta cta--' + k.c + ' cta--bientot" aria-disabled="true">' : '<a class="cta cta--' + k.c + '"' + href(k.lien) + '>') + '<img loading="lazy" decoding="async" src="' + IMG(k.img, pourLarge(etroit() ? 380 : 460), Math.round(pourLarge(etroit() ? 380 : 460) * 0.52), 74) + '" alt="" loading="lazy"><span class="cta-num">0' + (i + 1) + '</span>' +
      '<div class="cta-txt"><span class="cta-ico">' + ICO[k.ico] + '</span><h3>' + esc(k.titre) + '</h3><p>' + esc(k.txt) + '</p>' + (k.bientot ? '<span class="lire cta-prochainement">' + esc(k.bientot) + '</span></div></div>' : '<span class="lire">Découvrir ' + FLECHE + '</span></div></a>')).join('');
    rendreAffiche();
  }
  








  const TYMAL_MAQUETTE = (() => { const t = $('tymal-titre'), p = $('tymal-txt'), a = $('tymal-ou'); return { titre: t ? t.textContent : '', txt: p ? p.textContent : '', lien: a ? a.getAttribute('href') : '' }; })();
  function rendreTymal() {
    const t = $('tymal-titre'), p = $('tymal-txt'), a = $('tymal-ou');
    if (!t || !p || !a) return;
    const y = PHASES[phase] && PHASES[phase].tymal;
    const titre = y && y.titre ? y.titre : TYMAL_MAQUETTE.titre;
    const txt = y && y.txt ? y.txt : TYMAL_MAQUETTE.txt;
    const cible = y && y.lien ? lien(y.lien) : TYMAL_MAQUETTE.lien;
    if (t.textContent !== titre) t.textContent = titre;
    if (p.textContent !== txt) p.textContent = txt;
    if (cible && a.getAttribute('href') !== cible) a.setAttribute('href', cible);
  }
  







  function changerPhase(nouvelle) {
    if (nouvelle === phase || !Object.prototype.hasOwnProperty.call(PHASES, nouvelle)) return;
    const h = $('hero'); if (!h) return;
    if (!h.classList.contains('est-photo')) { minuteurs.push(setTimeout(() => changerPhase(nouvelle), 1500)); return; }
    const img = new Image();
    img.src = IMG(PHASES[nouvelle].photo, largeurPhoto(), Math.round(largeurPhoto() * 0.5625), 82);
    let parti = false;
    const poser = () => {
      if (parti || !racine.isConnected) return;
      parti = true;
      const gen = ++heroGen; clearTimeout(heroTimer);
      const v = h.querySelector('video'); if (v) { try { v.pause(); } catch (e) {   } }
      h.classList.remove('entree-affiche', 'est-photo'); h.classList.add('entree-douce');
      heroTimer = setTimeout(() => {
        if (gen !== heroGen) return;
        phase = nouvelle; racine.dataset.phase = phase;
        rendreHero(); rendreCtas(); rendreTymal(); if (majHorloge) majHorloge();
        requestAnimationFrame(() => requestAnimationFrame(() => { if (gen !== heroGen) return; h.classList.add('est-photo'); compter(); }));
        try { racine.dispatchEvent(new CustomEvent('raa-phase', { detail: { phase } })); } catch (e) {   }
      }, 1000);
    };
    if (img.decode) img.decode().then(poser, poser); else { img.onload = poser; img.onerror = poser; }
    minuteurs.push(setTimeout(poser, 4000));
  }
  



  let majHorloge = null;
  function montrerHorloge() {
    const h = $('hero'); if (!h || !horloge.simulee) return;
    const b = document.createElement('div');
    b.className = 'raa-horloge';
    b.setAttribute('role', 'status');
    


    const etroit = (document.documentElement.clientWidth || innerWidth) < 760;
    const dessus = document.documentElement.dataset.rdrEntete === 'dessus';
    const place = etroit ? 'top:' + (dessus ? 'calc(var(--rdr-entete-h, 120px) + 10px)' : '10px') + ';font-size:11px' : 'bottom:14px';
    b.setAttribute('style', 'position:absolute;right:14px;' + place + ';z-index:40;max-width:calc(100% - 28px);padding:7px 12px;border-radius:3px 12px 3px 12px;background:#FCF150;color:#16355D;font-family:Montserrat,system-ui,sans-serif;font-weight:700;line-height:1.35;letter-spacing:.01em;pointer-events:none;box-shadow:0 6px 18px rgba(0,0,0,.25)');
    if (!etroit) b.style.fontSize = '12px';
    h.appendChild(b);
    const deux = (n) => String(n).padStart(2, '0');
    const maj = () => {
      const t = horloge.maintenant(); const d = new Date(t + rdrDecalageParis(t));
      b.textContent = 'Aperçu · horloge simulée · ' + JOURS[d.getUTCDay()] + ' ' + d.getUTCDate() + ' ' + MOIS[d.getUTCMonth()] + ' ' + deux(d.getUTCHours()) + ':' + deux(d.getUTCMinutes()) + ':' + deux(d.getUTCSeconds()) + (horloge.vitesse > 1 ? ' · ×' + horloge.vitesse : '') + ' · phase ' + phase;
    };
    majHorloge = maj; maj(); repeter(maj, 1000);
  }
  


















  const PARIS = (() => { try { return new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }); } catch (e) { return null; } })();
  let aujourdhui = () => {
    const d = new Date(horloge.maintenant());
    try {
      if (PARIS) { const x = {}; PARIS.formatToParts(d).forEach((m) => { x[m.type] = m.value; }); if (x.year && x.month && x.day) return x.year + '-' + x.month + '-' + x.day; }
    } catch (e) {   }
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };
  let jourAffiche = '';
  function rendreAffiche() {
    const p = PHASES[phase]; const el = $('affiche');
    jourAffiche = aujourdhui();
    const auj = new Date(jourAffiche + 'T12:00:00');
    const prog = (jour, type) => { const t = /^(officielle|off|guadeloupe)$/.test(type || '') ? type : (phase === 'course' ? 'guadeloupe' : ''); return '/programmation' + (t ? '?type=' + t + (jour ? '&jour=' + jour : '') : (jour ? '?jour=' + jour : '')); };
    const toutProg = un('.affiche-lien'); if (toutProg) toutProg.setAttribute('href', lien(prog('')));
    



    const venir = p.affiche.map((r) => { const d = new Date(r.d + 'T12:00:00'); return { r, d, ecart: Math.round((d - auj) / 86400000) }; }).filter((x) => x.ecart >= 0).slice(0, 4);
    const section = el.closest('.affiche'); if (section) section.hidden = !venir.length;
    el.style.setProperty('--af-n', String(Math.min(4, Math.max(1, venir.length))));
    el.innerHTML = venir.map(({ r, d, ecart }) => {
      const rel = ecart === 0 ? 'Aujourd\'hui' : ecart === 1 ? 'Demain' : ecart <= 7 ? 'Dans ' + ecart + ' jours' : '';
      const infos = '<p><span>' + ICO.lieu + esc(r.ou) + '</span>' + (r.quand ? '<span>' + ICO.horloge + '<b>' + esc(r.quand) + '</b></span>' : '') + '</p>';
      return '<a class="af"' + href(prog(r.d, r.type)) + '>' + (rel ? '<span class="af-rel">' + rel + '</span>' : '') +
        '<div class="af-date"><b>' + d.getDate() + '</b><span>' + JOURS[d.getDay()] + '<em>' + MOIS[d.getMonth()] + '</em></span></div>' +
        '<h3>' + esc(r.titre) + '</h3>' + infos + '</a>';
    }).join('');
  }
  


  repeter(() => { pointage(); if (jourAffiche && aujourdhui() !== jourAffiche) rendreAffiche(); if (suiviPhase.verifier) suiviPhase.verifier(); }, 30000);

  let heroGen = 0;
  




  const signal = (etape) => { if (window.__rdrIntro) window.__rdrIntro.etape = etape; try { window.dispatchEvent(new CustomEvent('rdr-intro', { detail: { etape } })); } catch (e) {   } };
  function jouerHero() {
    const h = $('hero'); h.classList.remove('est-photo');
    






    const gen = ++heroGen; let parti = false;
    


    const sansVideoIci = !h.querySelector('video');
    h.classList.toggle('entree-affiche', sansVideoIci);
    h.classList.remove('entree-douce');
    signal('debut');
    





    const arreterVideo = () => {
      const v2 = h.querySelector('video'); if (!v2) return;
      try { v2.pause(); } catch (e) {   }
      const s2 = v2.querySelector('source[data-media]');
      if (s2 && s2.getAttribute('src')) { s2.removeAttribute('src'); try { v2.load(); } catch (e) {   } }
    };
    const bascule = () => { if (gen !== heroGen) return; h.classList.add('est-photo'); compter(); signal('bascule'); minuteurs.push(setTimeout(() => { if (gen === heroGen) arreterVideo(); }, 1500)); };
    const partir = () => { if (gen !== heroGen || parti) return; parti = true; clearTimeout(heroTimer); heroTimer = setTimeout(bascule, 3200); };
    clearTimeout(heroTimer);
    const v = h.querySelector('video');
    if (v) {
      chargerVideo(v);
      v.addEventListener('playing', partir, { once: true });
      try { v.currentTime = 0; const p = v.play(); if (p && p.catch) p.catch(() => {   }); } catch (e) {   }
    }
    heroTimer = setTimeout(() => { if (!parti) { parti = true; bascule(); } }, sansVideoIci ? 2200 : 1500);
  }
  


  function entreeDouce() {
    const h = $('hero'); ++heroGen; clearTimeout(heroTimer);
    const v = h.querySelector('video'); if (v) { try { v.pause(); } catch (e) {   } }
    h.classList.remove('est-photo', 'entree-affiche'); h.classList.add('entree-douce');
    signal('douce');
    const gen = heroGen;
    requestAnimationFrame(() => requestAnimationFrame(() => { if (gen !== heroGen) return; h.classList.add('est-photo'); compter(); }));
  }
  



  function entree() { if (introPour('hero')) jouerHero(); else entreeDouce(); }
  




  const mouvementReduit = () => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
  function compter(direct) {
    direct = direct || mouvementReduit();
    tout('#hv-titre [data-n]').forEach((el, k) => {
      const fin = Number(el.dataset.n); const depart = performance.now() + 500 + k * 90; const duree = 1100;
       
      const ecrire = (x) => { el.textContent = Math.round(x).toLocaleString(EN || /^en/i.test((racine.getAttribute && racine.getAttribute('lang')) || '') ? 'en-GB' : 'fr-FR'); };
      if (direct) { ecrire(fin); return; }
      ecrire(0);
      const pas = (t) => { const p = Math.min(1, Math.max(0, (t - depart) / duree)); ecrire(fin * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(pas); };
      requestAnimationFrame(pas);
    });
  }

  







  const liaison = un('.sep--liaison');
  liaison.innerHTML =
    '<div class="sep-sillage sl-six" aria-hidden="true"><svg class="sl-svg"><path class="sl-reste"/><path class="sl-fait" pathLength="1000"/></svg>' +
    '<span class="sl-port sl-port--dep"><b>Saint-Malo</b></span><span class="sl-port sl-port--arr"><b>Pointe-à-Pitre</b></span><span class="sl-milles">3 542 milles · 6 560 km</span>' +
    SIX.map((k) => '<span class="sl-bateau sl6--' + k.cle + '" style="--cc:' + k.c + '">' + k.svg + '</span>').join('') + '</div>';
  racine.dataset.liaison = 'sillage';
  




  function dessinerSillage() {
    const el = liaison.querySelector('.sep-sillage'); const L = largeurPage(); const tel = L < 760; const H = el.clientHeight || (tel ? 112 : 150);
    const m = Math.round(L * (tel ? 0.08 : 0.06)); const y = Math.round(H * 0.78); const sommet = Math.round(H * 0.56);
    const d = 'M' + m + ' ' + y + ' Q ' + (L / 2) + ' ' + (2 * sommet - y) + ' ' + (L - m) + ' ' + y;
    const svg = el.querySelector('.sl-svg'); svg.setAttribute('viewBox', '0 0 ' + L + ' ' + H);
    svg.querySelectorAll('path').forEach(p => p.setAttribute('d', d));
    el.querySelectorAll('.sl-bateau').forEach(b => { b.style.offsetPath = "path('" + d + "')"; });
    const dep = el.querySelector('.sl-port--dep'), arr = el.querySelector('.sl-port--arr');
    dep.style.left = m + 'px'; dep.style.top = y + 'px'; arr.style.left = (L - m) + 'px'; arr.style.top = y + 'px';
    el.querySelector('.sl-milles').style.top = (sommet + (tel ? 14 : 18)) + 'px';
  }
  const largeurPage = () => document.documentElement.clientWidth || innerWidth;
  dessinerSillage();
  ecoute(window, 'resize', () => { clearTimeout(liaisonTimer); liaisonTimer = setTimeout(dessinerSillage, 150); });
  

  $('hv-defiler').innerHTML = '<i>' + CHEV_D + '</i>';
  const defiler = () => { if (scrollY <= 40) return; $('hero').classList.add('a-defile'); window.removeEventListener('scroll', defiler); };
  ecoute(window, 'scroll', defiler);
   
  const MEDAILLE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>'; $('pv-ico-verrou').innerHTML = VERROU;

  














  const LANGUE_PUB = /^\/en(\/|$)/.test(location.pathname || '') || /^en/i.test(document.documentElement.lang || '') ? 'en' : 'fr';
  let pubRecalage = 0;
  const promosAttribut = () => { try { const a = JSON.parse((racine.getAttribute && racine.getAttribute('promos')) || 'null'); return Array.isArray(a) ? a : null; } catch (e) { return null; } };
  




  const imgPub = (v) => {
    if (!v || typeof v !== 'object') return null;
    const s = String(v.src || '').trim();
    const m = s.match(/^wix:image:\/\/v1\/([\w~.-]+)(?=[/#?]|$)/) || s.match(/^https:\/\/static\.wixstatic\.com\/media\/([\w~.-]+)(?=[/#?]|$)/);
    if (!m) return null;
    const l = Math.max(0, Math.round(Number(v.l) || 0)), h = Math.max(0, Math.round(Number(v.h) || 0));
    return { id: m[1], l: l && h ? l : 0, h: l && h ? h : 0 };
  };
  const urlPub = (img, largeur) => {
    const w = img.l ? Math.min(largeur, img.l) : largeur;
    const h = img.l ? Math.round(w * img.h / img.l) : largeur;
    return 'https://static.wixstatic.com/media/' + img.id + '/v1/' + (img.l ? 'fill' : 'fit') + '/w_' + w + ',h_' + h + ',q_85,enc_auto/' + img.id;
  };
  const jeuPub = (img, largeurs) => { const vues = new Set(); return largeurs.map(l => img.l ? Math.min(l, img.l) : l).filter(l => !vues.has(l) && vues.add(l)).map(l => urlPub(img, l) + ' ' + l + 'w').join(', '); };
  const lienPub = (u) => { const s = String(u || '').trim(); return /^https:\/\/[^\s"'<>]+$/i.test(s) || /^\/(?!\/)[^\s"'<>]*$/.test(s) ? s : ''; };
  let pubDessinee = '';
  function rendrePub() {
    const boite = $('pub-encart');
    if (!boite) return;
    if (pubRecalage) { clearTimeout(pubRecalage); pubRecalage = 0; }
    const liste = promosAttribut() || [];
    const maintenant = horloge.maintenant();
    const promos = liste.filter((x) => x && x[LANGUE_PUB]);
    const p = promos.find((x) => (x.debut === null || x.debut === undefined || x.debut <= maintenant) && (x.fin === null || x.fin === undefined || x.fin > maintenant));
    const v = p && p[LANGUE_PUB];
    const o = v && (imgPub(v.ordinateur) || imgPub(v.mobile));
    if (!o) { boite.hidden = true; boite.innerHTML = ''; pubDessinee = ''; }
    else {
      const m = imgPub(v.mobile) || o;
      const lien = lienPub(v.lien);
      const cle = (p.id || '') + '|' + o.id + '|' + m.id + '|' + lien;
      if (cle !== pubDessinee) {
        pubDessinee = cle;
        const image = '<picture><source media="(max-width:760px)" srcset="' + jeuPub(m, [480, 760, 1080]) + '" sizes="100vw">' +
          '<img src="' + urlPub(o, 1400) + '" srcset="' + jeuPub(o, [900, 1400, 2000]) + '" sizes="(max-width:1500px) 92vw, 1240px" alt="' + esc(v.alt || '') + '" loading="lazy" decoding="async"></picture>';
        boite.innerHTML = '<div class="pub-cadre">' + (lien ? '<a href="' + esc(lien) + '"' + (p.nouvelOnglet ? ' target="_blank" rel="noopener"' : '') + '>' + image + '</a>' : image) + '</div>';
        boite.style.setProperty('--pub-ratio', o.l ? (o.l / o.h).toFixed(4) : '3');
        boite.style.setProperty('--pub-ratio-tel', m.l ? (m.l / m.h).toFixed(4) : '3');
      }
      boite.hidden = false;
    }
    let suivant = Infinity;
    promos.forEach((x) => [x.debut, x.fin].forEach((t) => { if (typeof t === 'number' && t > maintenant && t < suivant) suivant = t; }));
    if (suivant - maintenant <= 6 * 60 * 60 * 1000) { pubRecalage = setTimeout(() => { pubRecalage = 0; rendrePub(); }, horloge.delai(suivant - maintenant) + 500); minuteurs.push(pubRecalage); }
  }
  rendrePub();
  ecoute(racine, 'raa-promos', rendrePub);

  









  const JX = LANGUE_PUB === 'en' ? {
    kicker: 'Espace Rhum competitions', titre: 'Games <em>of the moment</em>',
    ouverts: (n) => n + ' open game' + (n > 1 ? 's' : ''),
    visiteur: ', free with no purchase necessary. One My Espace Rhum account is all you need to play them all.',
    membre: ' right now: your move.',
    gagner: 'To win', jusqua: (d) => 'Until ' + d, membres: 'Members only', reglement: 'Rules',
    reste: (n) => (n <= 0 ? 'Last day' : n === 1 ? '1 day left' : n + ' days left'),
    chiffre: (c) => (c.type === 'classes' ? c.n.toLocaleString('en-GB') + ' fans ranked' : c.n.toLocaleString('en-GB') + ' members have played'),
    precedent: 'Previous game', suivant: 'Next game', sur: (a, b) => a + ' of ' + b, liste: 'Open competitions',
    inscrTitre: 'Not a <em>member yet?</em>', inscr: ['Free, in one minute', 'Every game with one account', 'Your skippers, your badges, your ranking'],
    creer: 'Create my Espace', deja: 'Already a member?', connecter: 'Log in',
    mois: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], date: (j, m) => j + ' ' + m
  } : {
    kicker: 'Jeux-concours de l’Espace Rhum', titre: 'Les jeux <em>du moment</em>',
    ouverts: (n) => n + ' jeu' + (n > 1 ? 'x ouverts' : ' ouvert'),
    visiteur: ', gratuits et sans obligation d’achat. Un seul compte Mon Espace Rhum suffit pour tous les jouer.',
    membre: ' en ce moment : à vous de jouer.',
    gagner: 'À gagner', jusqua: (d) => 'Jusqu’au ' + d, membres: 'Réservé aux membres', reglement: 'Règlement',
    reste: (n) => (n <= 0 ? 'Dernier jour' : n === 1 ? 'Plus qu’un jour' : 'Plus que ' + n + ' jours'),
    chiffre: (c) => (c.type === 'classes' ? c.n.toLocaleString('fr-FR') + ' fans déjà classés' : c.n.toLocaleString('fr-FR') + ' membres ont déjà joué'),
    precedent: 'Jeu précédent', suivant: 'Jeu suivant', sur: (a, b) => a + ' sur ' + b, liste: 'Jeux-concours en cours',
    inscrTitre: 'Pas encore <em>membre&nbsp;?</em>', inscr: ['Gratuit, en une minute', 'Tous les jeux avec un seul compte', 'Vos skippers, vos badges, votre classement'],
    creer: 'Créer mon Espace', deja: 'Déjà membre&nbsp;?', connecter: 'Me connecter',
    mois: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'], date: (j, m) => (j === 1 ? '1er' : j) + ' ' + m
  };
  const JX_ICO = {
    cadeau: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
    fleche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    horloge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    calendrier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
    verrou: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    gens: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    etoile: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    coche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    gauche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    droite: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>'
  };
  const jeuxAttribut = () => { try { const a = JSON.parse((racine.getAttribute && racine.getAttribute('jeux')) || 'null'); return Array.isArray(a) ? a : null; } catch (e) { return null; } };
  if (!jeuxAttribut() && Array.isArray(D.jeuxDemo) && racine.setAttribute) racine.setAttribute('jeux', JSON.stringify(D.jeuxDemo));
  const estMembre = () => !!(racine.getAttribute && racine.getAttribute('membre') === 'oui');
  const idJx = (v) => (/^[\w~.-]+$/.test(String(v || '')) ? String(v) : '');
  const urlJx = (id, mode, l, h) => 'https://static.wixstatic.com/media/' + id + '/v1/' + mode + '/w_' + l + ',h_' + h + ',q_85,enc_auto/' + id;
  const jourParisJx = (t) => new Date(t).toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' });
  const joursJx = (fin) => Math.round((Date.parse(jourParisJx(fin)) - Date.parse(jourParisJx(horloge.maintenant()))) / 864e5);
  const dateJx = (fin) => { const p = jourParisJx(fin).split('-').map(Number); return JX.date(p[2], JX.mois[p[1] - 1]); };
  function visuelJx(c) {
    const v = c.visuel || {};
    const pastilles = '<span class="jx-etiq">' + (c.id === 'challenge-photo' ? JX_ICO.etoile : '') + esc(c.etiquette) + '</span>' +
      (typeof c.fin === 'number' ? '<span class="jx-reste">' + JX_ICO.horloge + esc(JX.reste(joursJx(c.fin))) + '</span>' : '');
    if (v.genre === 'photo' && idJx(v.logo) && !/\.png$/i.test(idJx(v.logo))) return '<div class="jx-vis jx-vis--photo jx-vis--plein"><img class="jx-fond" src="' + urlJx(idJx(v.logo), 'fit', 1024, 444) + '" alt="' + esc(c.nom) + '" loading="lazy" decoding="async">' + pastilles + '</div>';
    if (v.genre === 'photo' && idJx(v.logo)) return '<div class="jx-vis jx-vis--photo"><img class="jx-logo" src="' + urlJx(idJx(v.logo), 'fit', 620, 240) + '" alt="' + esc(c.nom) + '" loading="lazy" decoding="async">' + pastilles + '</div>';
    if (v.genre === 'roue' && idJx(v.marque)) return '<div class="jx-vis jx-vis--roue"><span class="jx-roue" aria-hidden="true"></span><div class="jx-lots">' + (v.lots || []).map(idJx).filter(Boolean).slice(0, 3).map((id) => '<img src="' + urlJx(id, 'fit', 200, 240) + '" alt="" loading="lazy" decoding="async">').join('') + '</div><img class="jx-marque" src="' + urlJx(idJx(v.marque), 'fit', 260, 120) + '" alt="Route du Rhum x Armor Lux" loading="lazy" decoding="async">' + pastilles + '</div>';
    if (v.genre === 'image' && idJx(v.image)) return '<div class="jx-vis jx-vis--' + esc(v.classe || '') + '"><img class="jx-fond" src="' + urlJx(idJx(v.image), 'fill', 800, 520) + '" alt="" loading="lazy" decoding="async">' + pastilles + '</div>';
    return '';
  }
  function carteJx(c) {
    const vis = visuelJx(c);
    const lien = lienPub(c.lien), reglement = lienPub(c.reglement);
    if (!vis || !lien) return '';
    const chiffre = c.chiffre && Number(c.chiffre.n) > 0 ? '<span class="jx-chiffre">' + JX_ICO.gens + esc(JX.chiffre({ type: c.chiffre.type, n: Number(c.chiffre.n) })) + '</span>' : '';
    return '<li class="jx-carte">' + vis + '<div class="jx-corps">' +
      '<h4 class="jx-nom">' + esc(c.nom) + '</h4>' +
      '<p class="jx-accroche">' + esc(c.accroche) + '</p>' +
      (c.lot ? '<div class="jx-gain">' + JX_ICO.cadeau + '<div><small>' + esc(JX.gagner) + '</small><b>' + esc(c.lot) + '</b></div></div>' : '') +
      '<div class="jx-meta">' + (typeof c.fin === 'number' ? '<span>' + JX_ICO.calendrier + esc(JX.jusqua(dateJx(c.fin))) + '</span>' : '') + chiffre +
        (c.sansCompte || estMembre() ? '' : '<span>' + JX_ICO.verrou + esc(JX.membres) + '</span>') + '</div>' +
      '<div class="jx-actions"><a class="cta-rhum" href="' + esc(lien) + '">' + esc(c.bouton) + JX_ICO.fleche + '</a>' + (reglement ? '<a class="jx-lien" href="' + esc(reglement) + '">' + esc(JX.reglement) + '</a>' : '') + '</div>' +
      '</div></li>';
  }
  function carteInscrJx() {
    const tymal = M.tymalDrapeau ? '<img src="' + esc(M.tymalDrapeau) + '/v1/fit/w_320,h_320,q_90,enc_auto/tymal.png" alt="" loading="lazy" decoding="async">' : '';
    const espace = LANGUE_PUB === 'en' ? '/en/mon-espace-rhum' : '/mon-espace-rhum';
    return '<li class="jx-carte jx-carte--inscr"><div class="jx-haut">' + tymal + '</div><div class="jx-corps">' +
      '<h4 class="jx-nom">' + JX.inscrTitre + '</h4>' +
      '<ul>' + JX.inscr.map((t) => '<li>' + JX_ICO.coche + esc(t) + '</li>').join('') + '</ul>' +
      '<div class="jx-actions"><a class="cta-rhum" href="' + espace + '">' + esc(JX.creer) + JX_ICO.fleche + '</a></div>' +
      '<span class="jx-deja">' + JX.deja + ' <a class="jx-connexion" href="' + espace + '">' + esc(JX.connecter) + '</a></span>' +
      '</div></li>';
  }
  let jxRecalage = 0, jxDessine = '';
  function rendreJeux() {
    const boite = $('jx');
    if (!boite) return;
    if (jxRecalage) { clearTimeout(jxRecalage); jxRecalage = 0; }
    const maintenant = horloge.maintenant();
    const jeux = (jeuxAttribut() || []).filter((c) => c && c.id && (typeof c.fin !== 'number' || c.fin > maintenant));
    const cartes = jeux.map(carteJx).filter(Boolean);
    if (!cartes.length) { boite.hidden = true; boite.innerHTML = ''; jxDessine = ''; return; }
    const membre = estMembre();
    const html = '<div class="jx-tete"><div>' +
        '<span class="kicker">' + JX_ICO.cadeau + esc(JX.kicker) + '</span>' +
        '<h3 class="jx-titre" id="jx-titre">' + JX.titre + '</h3>' +
        '<p><b>' + esc(JX.ouverts(cartes.length)) + '</b>' + esc(membre ? JX.membre : JX.visiteur) + '</p>' +
      '</div><div class="jx-fleches">' +
        '<button class="jx-fleche" type="button" data-sens="-1" aria-label="' + esc(JX.precedent) + '">' + JX_ICO.gauche + '</button>' +
        '<button class="jx-fleche" type="button" data-sens="1" aria-label="' + esc(JX.suivant) + '">' + JX_ICO.droite + '</button>' +
      '</div></div>' +
      '<ul class="jx-piste" aria-label="' + esc(JX.liste) + '">' + cartes.join('') + (membre ? '' : carteInscrJx()) + '</ul>' +
      '<div class="jx-pied" aria-hidden="true"><div class="jx-avance"><i></i></div><span class="jx-compte"></span></div>';
    boite.hidden = false;
    if (html !== jxDessine) {
      jxDessine = html;
      boite.innerHTML = html;
      const piste = boite.querySelector('.jx-piste');
      const barre = boite.querySelector('.jx-avance i');
      const compte = boite.querySelector('.jx-compte');
      const [prec, suiv] = boite.querySelectorAll('.jx-fleche');
      const maj = () => {
        const max = piste.scrollWidth - piste.clientWidth;
        const part = Math.min(1, piste.clientWidth / Math.max(1, piste.scrollWidth));
        const x = max > 0 ? piste.scrollLeft / max : 0;
        barre.style.width = (part * 100) + '%';
        barre.style.transform = 'translateX(' + (part < 1 ? x * (1 / part - 1) * 100 : 0) + '%)';
        prec.disabled = piste.scrollLeft <= 4;
        suiv.disabled = piste.scrollLeft >= max - 4;
        const liste = [...piste.children];
        const g = piste.getBoundingClientRect().left;
        const premiere = Math.max(0, liste.findIndex((c) => c.getBoundingClientRect().right > g + 40));
        const vues = liste.filter((c) => { const b = c.getBoundingClientRect(); return b.left >= g - 4 && b.right <= g + piste.clientWidth + 4; }).length || 1;
        compte.textContent = JX.sur((premiere + 1) + (vues > 1 ? '–' + Math.min(liste.length, premiere + vues) : ''), liste.length);
      };
      [prec, suiv].forEach((b) => ecoute(b, 'click', () => {
        const c = piste.children[0];
        piste.scrollBy({ left: Number(b.dataset.sens) * (c ? c.getBoundingClientRect().width + 22 : 300), behavior: mouvementReduit() ? 'auto' : 'smooth' });
      }));
      ecoute(piste, 'scroll', maj);
      ecoute(window, 'resize', maj);
      const connexionJx = boite.querySelector('.jx-connexion');
      if (connexionJx) ecoute(connexionJx, 'click', (ev) => {
        if (!(racine.getAttribute && racine.getAttribute('connexion') === 'velo')) return;
        ev.preventDefault();
        racine.dispatchEvent(new CustomEvent('raa-connexion', { bubbles: true, composed: true }));
      });
      maj();
      requestAnimationFrame(maj);
    }
    let suivant = Infinity;
    jeux.forEach((c) => { if (typeof c.fin === 'number' && c.fin > maintenant && c.fin < suivant) suivant = c.fin; });
    if (suivant - maintenant <= 6 * 60 * 60 * 1000) { jxRecalage = setTimeout(() => { jxRecalage = 0; rendreJeux(); }, horloge.delai(suivant - maintenant) + 500); minuteurs.push(jxRecalage); }
  }
  rendreJeux();
  ecoute(racine, 'raa-jeux', rendreJeux);
  ecoute(racine, 'raa-membre', rendreJeux);
   
  { const sectionEspace = un('.espace'); if (sectionEspace && M.topoFaq) aLApproche(sectionEspace, () => sectionEspace.style.setProperty('--topo', 'url("' + M.topoFaq + '")')); }

  










  const BADGES = (Array.isArray(D.badges) ? D.badges : []).filter((b) => b && b.image && b.fr);
  const icoBadge = $('pv-ico-badge'), pastilleBadge = un('.pv-badge');
  const poserBadge = (b) => {
    icoBadge.classList.add('avec-art');
    icoBadge.innerHTML = '<img src="' + esc(b.image) + '" alt="" width="96" height="96" decoding="async">';
  };
  if (!BADGES.length) icoBadge.innerHTML = MEDAILLE;
  else {
    let iBadge = 0;
    poserBadge(BADGES[0]);
    const calme = (() => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
    if (BADGES.length > 1 && !calme) {
      let prechargés = false;
      repeter(() => {
        if (document.hidden || pastilleBadge.closest('[data-hors]')) return;
        if (!prechargés) { prechargés = true; BADGES.slice(1).forEach((b) => { const im = new Image(); im.src = b.image; }); }
        pastilleBadge.classList.add('est-change');
        minuteurs.push(setTimeout(() => { iBadge = (iBadge + 1) % BADGES.length; poserBadge(BADGES[iBadge]); pastilleBadge.classList.remove('est-change'); }, 280));
      }, 3200);
    }
  }

   
  const HUB = { actu: { c: '#0B6E6B', bg: '#DCF2EF', lib: 'Actualités' }, photo: { c: '#5747C9', bg: '#E9E6FB', lib: 'Photo' }, video: { c: '#A14D00', bg: '#FBEAD6', lib: 'Vidéo' }, audio: { c: '#0E5B84', bg: '#DCEBF7', lib: 'Audio' }, interview: { c: '#8A6C00', bg: '#FBF3CD', lib: 'Interview' } };
  const CAT_HUB = { actu: 'actualites', photo: 'image', video: 'video', audio: 'audio' };
   
  $('onglets').innerHTML = ['actu', 'photo', 'video', 'audio'].map(k => '<a class="onglet"' + href('/medias-actualites?cat=' + (k === 'actu' && EN ? 'news' : CAT_HUB[k])) + ' style="--c:' + HUB[k].c + ';--bg:' + HUB[k].bg + '"><i>' + ICO[k] + '</i>' + (k === 'actu' ? 'Actu' : HUB[k].lib) + '</a>').join('');
   
  const wixImg = (v, w, h) => { const m = String(v || '').match(/^wix:image:\/\/v1\/([\w~.-]+)(?=[/#]|$)/); return m ? IMG(m[1], w, h) : esc(String(v || '')); };
  const ilYa = (iso) => { const d = (Date.now() - new Date(iso).getTime()) / 86400000; return d < 1 ? 'aujourd\'hui' : d < 2 ? 'hier' : 'il y a ' + Math.floor(d) + ' j'; };
  const cat = (t) => '<span class="cat" style="--c:' + HUB[t].c + ';--bg:' + HUB[t].bg + '">' + ICO[t] + HUB[t].lib + '</span>';
  










  const TAGS_TUS_ACC = /^(partenaire|partenaires|interview|actualit[eé]s?|news|d[eé]part|amrae|kit p[eé]dagogique)$/i;
  const typeDe = (p) => {
    const sl = String((p.categorie && p.categorie.slug) || '').toLowerCase();
    const lb = String(p._categoryLabel || (p.categorie && p.categorie.label) || '');
    if (sl === 'video' || /vid[ée]o/i.test(lb)) return 'video';
    if (sl === 'image' || sl === 'photo' || /photo|image/i.test(lb)) return 'photo';
    if (sl === 'audio' || /audio|podcast/i.test(lb)) return 'audio';
    if (sl === 'interview' || /interview/i.test(lb)) return 'interview';
    return 'actu';
  };
  const sujetsDe = (p) => (p._tags || p.tags || []).map((t) => String((t && typeof t === 'object' ? t.label : t) || '').trim()).filter((t) => t && !TAGS_TUS_ACC.test(t));
  const lienPost = (p) => p.lien || p.postPageUrl || (p.slug ? '/post/' + p.slug : '/medias-actualites');
  const recent = (p) => Date.now() - new Date(p.publishedDate).getTime() < 12 * 3600000;
  const lecture = (p) => (Number(p.timeToRead) > 0 ? ' · ' + Number(p.timeToRead) + ' min' : '');
  const DIRECT = String(racine.tagName || '').toLowerCase() === 'rdr-accueil-apercu';
  const actusAttribut = () => { try { const a = JSON.parse((racine.getAttribute && racine.getAttribute('actus')) || 'null'); return Array.isArray(a) && a.length ? a : null; } catch (e) { return null; } };
  function squelettesActus() {
    $('une-actu').innerHTML = '<div class="carte carte--une actu-squel est-la"></div>';
    $('medias').innerHTML = '<div class="carte actu-squel est-la"></div><div class="carte actu-squel est-la"></div>';
    $('breves').innerHTML = '<div class="breve actu-squel est-la"></div>'.repeat(4);
  }
  let actusDessines = '';
  const trierActus = (liste) => (Array.isArray(liste) ? liste : []).filter((p) => p && p.title && p.publishedDate)
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  


  const cleActus = (posts) => JSON.stringify(posts.map((p) => [p._id || '', p.title, p.excerpt || '', p.coverImage || '', p.publishedDate, p.postPageUrl || '', Number(p.timeToRead) || 0, (p.categorie && p.categorie.slug) || '', p.tags || []]));
  function rendreActus(liste) {
    const posts = trierActus(liste);
    if (!posts.length) return;
    const cle = cleActus(posts);
    if (cle === actusDessines) return;
    actusDessines = cle;
    const pris = new Set();
    const prendre = (ok) => { const p = posts.find((x) => !pris.has(x) && ok(x)); if (p) pris.add(p); return p || null; };
    const une = prendre((p) => typeDe(p) === 'actu' || typeDe(p) === 'interview') || prendre(() => true);
    




    const recentMedia = (p) => Date.now() - new Date(p.publishedDate).getTime() < 14 * 86400000;
    const video = prendre((p) => typeDe(p) === 'video' && recentMedia(p)) || prendre((p) => recentMedia(p) || typeDe(p) === 'actu' || typeDe(p) === 'interview');
    const photo = prendre((p) => typeDe(p) === 'photo' && recentMedia(p)) || prendre((p) => recentMedia(p) || typeDe(p) === 'actu' || typeDe(p) === 'interview');
    const breves = [0, 1, 2, 3].map(() => prendre(() => true)).filter(Boolean);
    const tu = typeDe(une);
    $('une-actu').innerHTML = '<a class="carte carte--une"' + href(lienPost(une)) + '><img class="cover" loading="lazy" decoding="async" src="' + wixImg(une.coverImage, pourLarge(etroit() ? 350 : 620), Math.round(pourLarge(etroit() ? 350 : 620) * 0.75)) + '" alt="">' +
      '<div class="carte-haut">' + cat(tu) + '<span class="kicker kicker--jaune">À la une</span></div>' +
      '<div class="carte-txt"><div class="sujets">' + sujetsDe(une).slice(0, 2).map((t) => '<span class="sujet">' + esc(t) + '</span>').join('') + '</div><h3>' + esc(String(une.title).trim()) + '</h3><p>' + esc(une.excerpt || '') + '</p><span class="quand">' + (recent(une) ? '<b>Nouveau</b> · ' : '') + ilYa(une.publishedDate) + (Number(une.timeToRead) > 0 ? ' · ' + Number(une.timeToRead) + ' min de lecture' : '') + '</span></div></a>';
    const libMedia = { video: 'La dernière vidéo', photo: 'Le dernier reportage', audio: 'Le dernier podcast' };
    $('medias').innerHTML = [video, photo].filter(Boolean).map((p) => {
      const t = typeDe(p);
      const lib = libMedia[t] || 'À lire aussi';
      return '<a class="carte"' + href(lienPost(p)) + '><img class="cover" loading="lazy" decoding="async" src="' + wixImg(p.coverImage, pourLarge(etroit() ? 350 : 420), Math.round(pourLarge(etroit() ? 350 : 420) * 0.625)) + '" alt=""><div class="carte-haut">' + cat(t) + (t === 'actu' ? '' : '<span class="glyphe">' + ICO[t] + '</span>') + '</div>' + (t === 'video' ? '<span class="glyphe glyphe--grand">' + ICO.video + '</span>' : '') +
        '<div class="carte-txt"><span class="quand" style="color:var(--teal);font-weight:800;letter-spacing:.1em;text-transform:uppercase;font-size:10.5px">' + lib + '</span><h3>' + esc(String(p.title).trim()) + '</h3><span class="quand">' + ilYa(p.publishedDate) + lecture(p) + '</span></div></a>';
    }).join('');
    $('breves').innerHTML = breves.map((p) => '<a class="breve"' + href(lienPost(p)) + '><img src="' + wixImg(p.coverImage, 240, 200) + '" alt="" loading="lazy"><div>' + cat(typeDe(p)) + '<h3>' + esc(String(p.title).trim()) + '</h3><span class="quand">' + ilYa(p.publishedDate) + lecture(p) + '</span></div></a>').join('');
    reveler('.actus .carte', 120); reveler('.breve', 90);
  }
  










  const sectionActus = racine.querySelector('.actus');
  let actusEnAttente = null, guetActus = null;
  const actusSousLesYeux = () => {
    if (!sectionActus || document.hidden) return false;
    const r = sectionActus.getBoundingClientRect();
    return r.height > 0 && r.bottom > 0 && r.top < (window.innerHeight || document.documentElement.clientHeight || 0);
  };
  const poserActusEnAttente = () => {
    if (guetActus) { guetActus.disconnect(); guetActus = null; }
    const l = actusEnAttente;
    actusEnAttente = null;
    if (l) rendreActus(l);
  };
  function actusFraiches(liste) {
    const posts = trierActus(liste);
    if (!posts.length || cleActus(posts) === actusDessines) { actusEnAttente = null; return; }
    if (!actusDessines || !actusSousLesYeux() || typeof IntersectionObserver !== 'function') { actusEnAttente = null; rendreActus(posts); return; }
    actusEnAttente = posts;
    if (guetActus) return;
    guetActus = new IntersectionObserver((ents) => { if (ents.some((e) => !e.isIntersecting)) poserActusEnAttente(); });
    observateurs.push(guetActus);
    guetActus.observe(sectionActus);
  }
  if (DIRECT) {
    const a = actusAttribut();
    if (a) rendreActus(a); else squelettesActus();
    ecoute(racine, 'raa-actus', () => { const a2 = actusAttribut(); if (a2) actusFraiches(a2); });
  } else Promise.resolve(D.actus).then((a) => rendreActus(Array.isArray(a) ? a : a.posts));

  






  const connexionVelo = () => !!(racine.getAttribute && racine.getAttribute('connexion') === 'velo');
  const brancherConnexion = () => {
    if (!connexionVelo()) return;
    tout('.lien-rhum').forEach((a) => {
      if (!a.hasAttribute('href')) return;
      a.removeAttribute('href');
      a.setAttribute('role', 'button');
      a.setAttribute('tabindex', '0');
    });
  };
  tout('.lien-rhum').forEach((a) => {
    ecoute(a, 'click', (ev) => {
      if (!connexionVelo()) return;
      ev.preventDefault();
      racine.dispatchEvent(new CustomEvent('raa-connexion', { bubbles: true, composed: true }));
    });
    ecoute(a, 'keydown', (ev) => {
      if (a.hasAttribute('href') || (ev.key !== 'Enter' && ev.key !== ' ')) return;
      ev.preventDefault();
      a.click();
    });
  });
  brancherConnexion();
  ecoute(racine, 'raa-connexion-prete', brancherConnexion);

   
  const CLASSES = D.classes;
  const ROT = [-0.5, 0.4, -0.3, 0.5, -0.4, 0.3];
  

  const teinte = (c) => (/^#[0-9a-f]{3,8}$/i.test(String(c || '')) ? c : '');
   
  const vecteur = (v) => { const s = String(v || ''); const m = s.match(/^wix:vector:\/\/v1\/([^/#]+)/); if (m) return 'https://static.wixstatic.com/shapes/' + m[1]; const i = s.match(/^wix:image:\/\/v1\/([^/#]+)/); return i ? 'https://static.wixstatic.com/media/' + i[1] + '/v1/fit/w_32,h_32,q_90,enc_auto/drapeau.png' : s; };
  $('classes').innerHTML = Object.keys(CLASSES).map(k => '<a class="classe" data-classe="' + k + '"' + href('/skippers?classe=' + k.toLowerCase().split(' ').join('-')) + ' style="--cc:' + CLASSES[k].c + '" title="' + k + '"><img loading="lazy" decoding="async" src="' + CLASSES[k].icone + '" alt="' + k + '"><b>' + CLASSES[k].n + '</b><small>bateaux</small></a>').join('');
  






  const effectifsAttribut = () => { try { const e = JSON.parse((racine.getAttribute && racine.getAttribute('effectifs')) || 'null'); return e && e.classes && typeof e.classes === 'object' && Number.isInteger(e.total) && e.total > 0 ? e : null; } catch (x) { return null; } };
  function poserEffectifs() {
    const e = effectifsAttribut();
    if (!e) return;
    tout('#classes .classe').forEach((a) => { const n = e.classes[a.getAttribute('data-classe')]; const b = a.querySelector('b'); if (b && Number.isInteger(n) && n >= 0 && b.textContent !== String(n)) b.textContent = String(n); });
    tout('.skippers .sous').forEach((p) => { const t = p.textContent.replace(/\d+(?= (navigateurs|sailors))/, String(e.total)); if (t !== p.textContent) p.textContent = t; });
  }
  poserEffectifs();
  ecoute(racine, 'raa-effectifs', poserEffectifs);
  







  const vivierAttribut = () => { try { const a = JSON.parse((racine.getAttribute && racine.getAttribute('skippers')) || 'null'); return Array.isArray(a) && a.length >= 6 ? a : null; } catch (e) { return null; } };
  const tirer = (arr, n) => { const a = arr.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a.slice(0, n); };
  let pvI = 0;
  function rendreSkippers(s) {
    const liste = tirer(Array.isArray(s) ? s : (s.skippers || Object.values(s)[0]), 6);
    pvI = 0;
    $('skippers').innerHTML = liste.map((k, i) => { const cfg = CLASSES[(k.classes && k.classes.nom) || ''] || {}; const cc = teinte(k.classes && k.classes.couleur) || cfg.c || '#5dbfc0';
      const fiche = /^\/skippers\/[^\s"'<>]+$/.test(String(k['link-skippers-prenomNom'] || '')) && k.ficheActive !== false ? k['link-skippers-prenomNom'] : '';
      const balise = fiche ? 'a' : 'div';
      return '<' + balise + ' class="sk"' + (fiche ? href(fiche) + ' aria-label="' + esc([k.prenom, k.nom].filter(Boolean).join(' ')) + '"' : '') + ' style="--cc:' + cc + ';--rot:' + ROT[i] + 'deg"><div class="sk-flip"><div class="sk-face sk-front"><img class="sk-img" src="' + esc(retaille(k.photoVignette, pourLarge(etroit() ? 190 : 215), 74)) + '" alt="" loading="lazy">' +
        '<div class="sk-ov"><div class="sk-prenom"><img loading="lazy" decoding="async" src="' + esc(vecteur(k.drapeau)) + '" alt="">' + esc(k.prenom) + '</div><div class="sk-nom">' + esc(k.nom) + '</div><div class="sk-bateau">' + esc(k.bateau || '') + '</div></div></div>' +
        '<div class="sk-face sk-back"></div>' + (cfg.icone ? '<div class="sk-classe"><img loading="lazy" decoding="async" src="' + cfg.icone + '" alt=""></div>' : '') + '</div></' + balise + '>'; }).join('');
     
    $('pv-skipper').innerHTML = liste.slice(0, 5).map((k, i) => { const cfg = CLASSES[(k.classes && k.classes.nom) || ''] || {}; const cc = teinte(k.classes && k.classes.couleur) || cfg.c || '#5dbfc0';
      return '<div class="pv-sk' + (i === 0 ? ' est-active' : '') + '" style="--cc:' + cc + '"><img loading="lazy" decoding="async" src="' + esc(retaille(k.photoVignette, pourLarge(etroit() ? 150 : 200), 74)) + '" alt="">' + (cfg.icone ? '<img class="pv-sk-classe" src="' + cfg.icone + '" alt="">' : '') +
        '<div class="pv-sk-ov"><span class="pv-micro">' + COEUR + 'Skipper préféré</span><b>' + esc(k.prenom) + '</b><strong>' + esc(k.nom) + '</strong><small>' + esc(k.bateau || '') + '</small></div></div>'; }).join('');
    reveler('#skippers .sk-flip', 150);
  }
  












  let vivierDessine = vivierAttribut() ? racine.getAttribute('skippers') : null;
  const tirageAnnonce = !!(racine.getAttribute && racine.getAttribute('tirage') === 'page');
  let skippersFiges = false;
  if (vivierDessine || !tirageAnnonce) rendreSkippers(vivierAttribut() || D.skippers);
  else {
    $('skippers').innerHTML = ROT.map((r) => '<div class="sk" aria-hidden="true" style="--rot:' + r + 'deg"><div class="sk-flip"><div class="sk-face sk-back"></div></div></div>').join('');
    minuteurs.push(setTimeout(() => { if (!skippersFiges && !vivierDessine) { skippersFiges = true; rendreSkippers(D.skippers); } }, 6000));
  }
  if (vivierDessine && tirageAnnonce) skippersFiges = true;
  ecoute(racine, 'raa-skippers', () => { if (skippersFiges) return; const brut = racine.getAttribute('skippers'); if (brut === vivierDessine) return; const v = vivierAttribut(); if (v) { vivierDessine = brut; if (tirageAnnonce) skippersFiges = true; rendreSkippers(v); } });
  


  const pastilleSkipper = $('pv-skipper');
  if (!mouvementReduit()) repeter(() => { if (document.hidden || pastilleSkipper.closest('[data-hors]')) return; const c = pastilleSkipper.querySelectorAll('.pv-sk'); if (c.length < 2) return; pvI = pvI % c.length; c[pvI].classList.remove('est-active'); pvI = (pvI + 1) % c.length; c[pvI].classList.add('est-active'); }, 3400);
  function reveler(sel, pas) {
    const els = [...tout(sel)];
    const io = new IntersectionObserver((ents) => { ents.forEach(e => { if (e.isIntersecting) { const i = els.indexOf(e.target); setTimeout(() => e.target.classList.add('est-la'), 60 + (i % 6) * pas); io.unobserve(e.target); } }); }, { threshold: .1 });
    observateurs.push(io); els.forEach(e => io.observe(e));
  }

  

















  const politiqueMarketing = () => {
    try {
      const p = window.consentPolicyManager && window.consentPolicyManager.getCurrentConsentPolicy();
      const pol = p && p.policy;
      return pol ? pol.advertising === true : true;
    } catch (e) { return true; }
  };
  function ouvrirCookies() {
    try {
      const o = window.__ucCmp || window.UC_UI;
      if (o && typeof o.showSecondLayer === 'function') { o.showSecondLayer(); return; }
      if (typeof window.openCookieSettings === 'function') { window.openCookieSettings(); return; }
    } catch (e) {   }
  }
  function lancerVideo() {
    $('video').innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(M.youtube) + '?autoplay=1&rel=0&playsinline=1" title="TyMAL, la vidéo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }
  const COOKIE_ICO = '<svg class="vc-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M11.5 12.5v.01"/></svg>';
  function demanderCookies() {
    const cadre = $('video');
    if (cadre.querySelector('.vc-cookies')) return;
    const carte = document.createElement('div');
    carte.className = 'vc-cookies';
    carte.innerHTML = COOKIE_ICO +
      '<b>La vidéo est hébergée par YouTube</b>' +
      '<p>Elle ne se charge pas tant que les cookies marketing sont refusés, pour que rien ne parte chez un tiers sans votre accord.</p>' +
      '<button type="button" data-rdr-cookies>Gérer mes cookies</button>' +
      '<a href="https://www.youtube.com/watch?v=' + encodeURIComponent(M.youtube) + '" target="_blank" rel="noopener">Regarder sur YouTube</a>';
    cadre.appendChild(carte);
    carte.querySelector('button').addEventListener('click', ouvrirCookies);
    carte.querySelector('button').focus();
    let tours = 0;
    const guet = setInterval(() => {
      if (++tours > 150) { clearInterval(guet); return; }
      if (!politiqueMarketing()) return;
      clearInterval(guet);
      lancerVideo();
    }, 600);
    minuteurs.push(guet);
  }
  $('video').querySelector('button').addEventListener('click', () => {
    if (politiqueMarketing()) lancerVideo(); else demanderCookies();
  });

  


  function rendreFaq() {
    const F = D.faq; const bloc = $('faq-bloc');
    if (!F) { bloc.hidden = true; return; }
    bloc.hidden = false;
    const ic = (p) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
     
    const CHEVRON = '<path d="m6 9 6 6 6-6"/>', FLECHE_D = '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', FLECHE_HD = '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>';
     
    const COULEUR = { depart: 'var(--teal)', village: 'var(--jaune)', venir: 'var(--orange)', course: '#8B86E0', pratique: 'var(--teal2)' };
    const RUBRIQUE = { depart: 'Le départ', village: 'Le village', venir: 'Venir', course: 'La course', pratique: 'Pratique' };
    const couleur = (a) => COULEUR[String(a).split('-')[0]] || 'var(--teal)';
    $('fa-fil').innerHTML = '<b>Route du Rhum</b> · ' + esc(F.kicker);
    $('fa-titre').innerHTML = titreHtml(F.titre);
    $('fa-q').placeholder = F.exemple || '';
    ['fa-toutes', 'fa-toutes-bas'].forEach((id) => { const a = $(id); if (!a) return; a.href = lien(F.toutes.url); a.innerHTML = esc(F.toutes.texte) + '<i>' + ic(FLECHE_D) + '</i>'; });
    

    const texte = (t, l) => {
      let s = esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
      if (l) s = s.replace(esc(l.texte), '<a href="' + esc(lien(l.url)) + '">' + esc(l.texte) + '</a>');
      return s.replace(/\b1er\b/g, '1<sup>er</sup>');
    };
    const valider = (t) => (t ? '<p><span class="fa-valider">À valider</span>' + esc(t) + '</p>' : '');
     
    $('fa-liste').innerHTML = F.questions.map((x, i) => '<details class="fa-q" id="faq-' + esc(x.ancre) + '" style="--cc:' + couleur(x.ancre) + ';--i:' + i + '"' + (i === 0 ? ' open' : '') + '><summary><b>' + esc(x.q) + '</b>' + (RUBRIQUE[String(x.ancre).split('-')[0]] ? '<em class="fa-rub">' + RUBRIQUE[String(x.ancre).split('-')[0]] + '</em>' : '') + '<i>' + ic(CHEVRON) + '</i></summary><div class="fa-rep">' +
      (x.p || []).map(t => '<p>' + texte(t, x.lien) + '</p>').join('') + valider(x.aValider) +
      (x.src ? '<a class="fa-source" href="' + esc(lien(x.src.url)) + '">' + esc(x.src.texte) + ic(FLECHE_HD) + '</a>' : '') + '</div></details>').join('');
    

    if (M.topoFaq) aLApproche($('faq-acc'), () => $('fa-topo').style.setProperty('--topo', 'url("' + M.topoFaq + '")'));
    const section = $('faq-acc');
    if (typeof IntersectionObserver !== 'function') section.classList.add('fa-vu');
    else {
      const io = new IntersectionObserver((e) => { if (e.some(x => x.isIntersecting)) { section.classList.add('fa-vu'); io.disconnect(); } }, { threshold: 0.15 });
      io.observe(section); observateurs.push(io);
    }
  }
  










  rendreFaq(); rendreHero(); rendreCtas(); rendreTymal(); entree(); montrerHorloge();
  {
    const ph = $('hero-photo');
    const prete = ph && ph.getAttribute('src') && ph.decode ? ph.decode().catch(() => 0) : Promise.resolve();
    prete.then(() => requestAnimationFrame(() => requestAnimationFrame(liberer)));
    minuteurs.push(setTimeout(liberer, 3000));
    ecoute(window, 'scroll', liberer);
  }
  return defaire;
  } catch (e) { defaire(); throw e; }
}
 

  function rdrPanne(hote, en, relancer) {
  var PALIERS = [8, 15, 30, 60, 120, 240];
  var d = document;
  if (!d.getElementById('rdrp-css')) {
    var st = d.createElement('style');
    st.id = 'rdrp-css';
    st.textContent = "@font-face{font-family:'Varien';src:url('https://cdn.jsdelivr.net/gh/WapitixAgency/fonts/Varien-Italic.woff2') format('woff2');font-style:italic;font-display:swap}"
      + ".rdrp.rdrp{all:initial;box-sizing:border-box;position:relative;isolation:isolate;overflow:hidden;display:flex;align-items:center;width:100%;min-height:clamp(440px,calc(100svh - 175px),640px);margin:0;padding:0;background:#16355D;color:#fff;font-family:Montserrat,montserrat,system-ui,sans-serif;text-align:left;-webkit-font-smoothing:antialiased}"
      + ".rdrp.rdrp *{box-sizing:border-box;margin:0;padding:0;border:0;background:none;font:inherit;color:inherit;text-transform:none;letter-spacing:normal;text-align:inherit}"
      + ".rdrp.rdrp::before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(120% 90% at 85% 20%,rgba(86,188,246,.22),transparent 60%)}"
      + ".rdrp.rdrp .rdrp-trame{width:100%;max-width:1240px;margin:0 auto;padding:clamp(40px,7vh,72px) clamp(16px,4vw,40px);display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(24px,5vw,72px);align-items:center}"
      + ".rdrp.rdrp .rdrp-marque{font-family:'Varien','Archivo Black',Impact,sans-serif;font-style:italic;font-size:15px;line-height:1.2;text-transform:uppercase;color:#fff;opacity:.92}"
      + ".rdrp.rdrp .rdrp-sur{margin-top:22px;font-weight:800;font-size:12px;line-height:1.3;letter-spacing:.16em;text-transform:uppercase;color:#FCF150}"
      + ".rdrp.rdrp .rdrp-titre{display:block;margin-top:12px;font-family:'Varien','Archivo Black',Impact,sans-serif;font-style:italic;font-weight:400;font-size:clamp(34px,min(4.2vw,7.4vh),58px);line-height:1.06;text-transform:uppercase;text-wrap:balance;color:#fff}"
      + ".rdrp.rdrp .rdrp-titre em{font-style:inherit;color:#FCF150;white-space:nowrap}"
      + ".rdrp.rdrp .rdrp-texte{margin-top:16px;max-width:52ch;font-size:16px;line-height:1.65;font-weight:500;color:rgba(255,255,255,.86)}"
      + ".rdrp.rdrp .rdrp-essai{display:flex;align-items:center;gap:12px;margin-top:22px;font-weight:600;font-size:13.5px;line-height:1.35;color:rgba(255,255,255,.8)}"
      + ".rdrp.rdrp .rdrp-anneau{width:34px;height:34px;flex:none;transform:rotate(-90deg)}"
      + ".rdrp.rdrp .rdrp-anneau circle{fill:none;stroke-width:3.2}"
      + ".rdrp.rdrp .rdrp-anneau .rdrp-fond{stroke:currentColor;opacity:.18}"
      + ".rdrp.rdrp .rdrp-anneau .rdrp-reste{stroke:#FCF150;stroke-linecap:round;stroke-dasharray:88;transition:stroke-dashoffset .9s linear}"
      + ".rdrp.rdrp .rdrp-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px;margin-top:26px}"
      + ".rdrp.rdrp .rdrp-btn{display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 22px;border-radius:3px 15px 3px 15px;background:#FCF150;color:#16355D;font-weight:800;font-size:14px;line-height:1;letter-spacing:.02em;cursor:pointer}"
      + ".rdrp.rdrp .rdrp-btn:hover,.rdrp.rdrp .rdrp-btn:focus-visible{background:#fff}"
      + ".rdrp.rdrp .rdrp-btn:focus-visible,.rdrp.rdrp .rdrp-lien:focus-visible{outline:2px solid #FCF150;outline-offset:3px}"
      + ".rdrp.rdrp .rdrp-btn svg{width:18px;height:18px;flex:none;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}"
      + ".rdrp.rdrp .rdrp-lien{font-weight:700;font-size:13.5px;line-height:1.2;color:#fff;text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1.5px;cursor:pointer}"
      + ".rdrp.rdrp .rdrp-scene{position:relative;aspect-ratio:1.25;max-width:520px;width:100%;justify-self:end}"
      + ".rdrp.rdrp .rdrp-scene svg{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;-webkit-mask:radial-gradient(ellipse 58% 60% at 50% 46%,#000 62%,transparent 100%);mask:radial-gradient(ellipse 58% 60% at 50% 46%,#000 62%,transparent 100%)}"
      + ".rdrp.rdrp .rdrp-bateau{transform-box:fill-box;transform-origin:50% 88%;animation:rdrp-gite 4.8s ease-in-out infinite}"
      + ".rdrp.rdrp .rdrp-houle1{animation:rdrp-houle 7s linear infinite}"
      + ".rdrp.rdrp .rdrp-houle2{animation:rdrp-houle 11s linear infinite reverse;opacity:.5}"
      + ".rdrp.rdrp .rdrp-risee{animation:rdrp-risee 3.2s ease-in-out infinite}"
      + ".rdrp.rdrp .rdrp-risee:nth-of-type(2){animation-delay:.8s}.rdrp.rdrp .rdrp-risee:nth-of-type(3){animation-delay:1.6s}"
      + "@keyframes rdrp-gite{0%,100%{transform:rotate(-6deg) translateY(0)}50%{transform:rotate(4deg) translateY(6px)}}"
      + "@keyframes rdrp-houle{from{transform:translateX(0)}to{transform:translateX(-200px)}}"
      + "@keyframes rdrp-risee{0%{opacity:0;transform:translateX(30px)}40%{opacity:.9}100%{opacity:0;transform:translateX(-60px)}}"
      + "@media (min-width:751px) and (max-height:820px){.rdrp.rdrp .rdrp-texte{font-size:15px;line-height:1.6}.rdrp.rdrp .rdrp-scene{max-width:420px}.rdrp.rdrp .rdrp-actions{margin-top:20px}.rdrp.rdrp .rdrp-sur{margin-top:16px}}"
      + "@media (max-width:750px){.rdrp.rdrp{min-height:clamp(440px,calc(100svh - 120px),640px)}.rdrp.rdrp .rdrp-trame{grid-template-columns:1fr;gap:8px;padding-top:28px}.rdrp.rdrp .rdrp-scene{order:-1;max-width:260px;justify-self:center}.rdrp.rdrp .rdrp-marque{font-size:13px}.rdrp.rdrp .rdrp-titre{font-size:clamp(30px,8.6vw,38px)}.rdrp.rdrp .rdrp-texte{font-size:15px}.rdrp.rdrp .rdrp-btn{width:100%;justify-content:center}}"
      + "@media (prefers-reduced-motion:reduce){.rdrp.rdrp *{animation:none!important;transition:none!important}}";
    (d.head || d.documentElement).appendChild(st);
  }
  var essai = hote.__rdrpEssais = (hote.__rdrpEssais || 0) + 1;
  var auto = essai <= PALIERS.length;
  var total = auto ? Math.round(PALIERS[essai - 1] * (essai > 2 ? 1 + Math.random() * 0.2 : 1)) : 0;
  var T = en ? {
    sur: 'Small technical hitch', surHors: 'No connection',
    titre: 'Getting the page back <em>afloat</em>',
    texte: 'This page couldn’t load its content. Nothing serious: it will try again on its own in a moment. If the problem persists, come back a little later, we’re on it.',
    texteHors: 'Your device seems to be offline. The page will try again as soon as the network is back.',
    dans: 'Trying again in ', encours: 'Trying again…', attente: 'Waiting for the network…', fin: 'The problem persists: try again in a few minutes.',
    btn: 'Try again now', lien: 'Back to home', accueil: '/en'
  } : {
    sur: 'Petit souci technique', surHors: 'Pas de connexion',
    titre: 'On remet la page <em>à flot</em>',
    texte: 'Cette page n’a pas réussi à charger son contenu. Rien de grave : elle réessaie toute seule dans un instant. Si le souci dure, revenez un peu plus tard, on s’en occupe.',
    texteHors: 'Votre appareil semble hors connexion. La page réessaiera dès que le réseau reviendra.',
    dans: 'Nouvel essai dans ', encours: 'Nouvel essai…', attente: 'En attente du réseau…', fin: 'Le souci dure : réessayez dans quelques minutes.',
    btn: 'Réessayer maintenant', lien: 'Retour à l’accueil', accueil: '/'
  };
  var hors = navigator.onLine === false;
  var surAccueil = /^\/(en\/?)?$/.test(location.pathname);
  hote.innerHTML = '<section class="rdrp" aria-labelledby="rdrp-t"><div class="rdrp-trame"><div>'
    + '<p class="rdrp-marque">Route du Rhum - Destination Guadeloupe</p>'
    + '<p class="rdrp-sur">' + (hors ? T.surHors : T.sur) + '</p>'
    + '<h2 class="rdrp-titre" id="rdrp-t">' + T.titre + '</h2>'
    + '<p class="rdrp-texte">' + (hors ? T.texteHors : T.texte) + '</p>'
    + '<div class="rdrp-essai"><svg class="rdrp-anneau" viewBox="0 0 34 34" aria-hidden="true"><circle class="rdrp-fond" cx="17" cy="17" r="14"/><circle class="rdrp-reste" cx="17" cy="17" r="14"/></svg><span class="rdrp-essai-t"></span></div>'
    + '<div class="rdrp-actions"><button class="rdrp-btn" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>' + T.btn + '</button>'
    + (surAccueil ? '' : '<a class="rdrp-lien" href="' + T.accueil + '">' + T.lien + '</a>') + '</div>'
    + '</div><div class="rdrp-scene" aria-hidden="true"><svg viewBox="0 0 500 400">'
    + '<g stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".55"><path class="rdrp-risee" d="M330 92h70"/><path class="rdrp-risee" d="M300 126h96"/><path class="rdrp-risee" d="M346 160h56"/></g>'
    + '<g class="rdrp-bateau"><path d="M250 70 L250 300" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M256 82 C 330 140, 350 220, 340 288 L 256 288 Z" fill="#fff"/><path d="M244 110 C 196 170, 184 236, 190 288 L 244 288 Z" fill="#56BCF6"/><path d="M150 300 L 356 300 L 334 334 L 176 334 Z" fill="#FCF150"/><path d="M150 300 L 356 300" stroke="#16355D" stroke-width="3"/></g>'
    + '<g><path class="rdrp-houle2" d="M-50 330 q50 -22 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 V420 H-50 Z" fill="#56BCF6"/><path class="rdrp-houle1" d="M-50 346 q50 -18 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 V420 H-50 Z" fill="#0E2744"/></g>'
    + '</svg></div></div></section>';
  var sec = hote.querySelector('.rdrp');
  var texte = sec.querySelector('.rdrp-essai-t'), anneau = sec.querySelector('.rdrp-reste');
  var reste = total, fini = false, minuteur = 0;
  var peindre = function () {
    if (hors) { texte.textContent = T.attente; anneau.style.strokeDashoffset = '0'; return; }
    if (!auto) { texte.textContent = T.fin; anneau.style.strokeDashoffset = '88'; return; }
    texte.textContent = reste > 0 ? T.dans + reste + ' s' : T.encours;
    anneau.style.strokeDashoffset = String(88 * (1 - reste / total));
  };
  var arreter = function () { fini = true; clearInterval(minuteur); window.removeEventListener('online', enLigne); };
  var partir = function () { if (fini) return; arreter(); texte.textContent = T.encours; anneau.style.strokeDashoffset = '0'; try { relancer(); } catch (e) {   } };
  var enLigne = function () { if (hote.isConnected && hote.contains(sec)) partir(); else arreter(); };
  minuteur = setInterval(function () {
    if (!hote.isConnected || !hote.contains(sec)) { arreter(); return; }
    if (hors || !auto) return;
    reste -= 1;
    peindre();
    if (reste <= 0) setTimeout(partir, 400);
  }, 1000);
  window.addEventListener('online', enLigne);
  sec.querySelector('.rdrp-btn').addEventListener('click', partir);
  peindre();
}
  function rdrLire(u, o) {
  var RDRL_MS = 9000, cle = 'rdrRepli:' + u, minuteur = 0;
  var Ctl = window.AbortController, ctl = Ctl ? new Ctl() : null;
  var reponse = function (status, texte) {
    return { ok: status >= 200 && status < 300, status: status, json: function () { return Promise.resolve().then(function () { return JSON.parse(texte); }); } };
  };
  var gardee = function () {
    try { var t = window.localStorage.getItem(cle); if (t) return reponse(200, t); } catch (e) {   }
    return null;
  };
  var opts = {};
  if (o) for (var k in o) opts[k] = o[k];
  if (ctl) opts.signal = ctl.signal;
  var delai = new Promise(function (_, non) {
    minuteur = setTimeout(function () { try { if (ctl) ctl.abort(); } catch (e) {   } non(new Error('rdrLire : pas de réponse en ' + RDRL_MS + ' ms')); }, RDRL_MS);
  });
  var lecture = fetch(u, opts).then(function (r) {
    return r.text().then(function (t) { return { status: r.status, texte: t }; });
  });
  return Promise.race([lecture, delai]).then(function (x) {
    clearTimeout(minuteur);
    if (x.status >= 200 && x.status < 300) {
      if (x.texte && x.texte.length > 200) { try { window.localStorage.setItem(cle, x.texte); } catch (e) {   } }
      return reponse(x.status, x.texte);
    }
    if (x.status >= 500) { var g = gardee(); if (g) return g; }
    return reponse(x.status, x.texte);
  }, function (e) {
    clearTimeout(minuteur);
    var g = gardee();
    if (g) return g;
    throw e;
  });
}
  customElements.define('rdr-accueil-apercu', RdrAccueilApercu);
})();
})();
