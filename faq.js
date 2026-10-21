/* rdr-elements faq | source route-du-rhum 0089a60 | rdr-faq.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["faq"]="0089a60";performance.mark("rdr-elements:faq")}catch(e){}
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
      out.push({
        id, texte, rang: i,
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
      const signature = this._lang + '|' + reduit + '|' + rangeable + '|' + range + '|' + JSON.stringify(vis.map((x) => [x.id, x.niveau, x.texte, x.langue, x.lien, x.libelleLien]));
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
      const corps = badge + '<span class="rdi-texte"' + autre + '>' + esc(x.texte) + '</span>';
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
  if (customElements.get("rdr-faq")) return;
  const CSS = "rdr-faq{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-faq .rfq-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#F4F1E8}\nrdr-faq .rfq-sq-haut{display:flex;align-items:center;min-height:clamp(582px,calc(472px + 18vh),670px);background:radial-gradient(70% 90% at 12% 0%,rgba(20,167,158,.22),transparent 62%),radial-gradient(55% 80% at 100% 30%,rgba(255,122,61,.16),transparent 60%),linear-gradient(180deg,#0A1228 0%,#101A36 100%)}\nrdr-faq .rfq-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-faq .rfq-sq-l,rdr-faq .rfq-sq-c{position:relative;display:block;overflow:hidden}\nrdr-faq .rfq-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.12)}\nrdr-faq .rfq-sq-k{width:120px;height:11px}\nrdr-faq .rfq-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-faq .rfq-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-faq .rfq-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-faq .rfq-sq-p1{margin-top:30px}\nrdr-faq .rfq-sq-p3{width:min(380px,62%)}\nrdr-faq .rfq-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-faq .rfq-sq-sec .rfq-sq-l{background:rgba(14,17,29,.08)}\nrdr-faq .rfq-sq-sec .rfq-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-faq .rfq-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-faq .rfq-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-faq .rfq-sq-l::after,rdr-faq .rfq-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rfq-sq-luire 1.6s ease-in-out infinite}\nrdr-faq .rfq-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-faq .rfq-sq-sec .rfq-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-faq .rfq-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rfq-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-faq .rfq-sq-haut{min-height:calc(18vh + clamp(640px,807px - 28vw,720px))}rdr-faq .rfq-sq-cartes{grid-template-columns:1fr}rdr-faq .rfq-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-faq .rfq-sq-l::after,rdr-faq .rfq-sq-c::after{animation:none;display:none}}\n@media (min-width:751px) and (max-width:1100px){rdr-faq .rfq-sq-haut{min-height:clamp(760px,calc(650px + 18vh),850px)}}\n@media (min-width:1101px) and (max-height:820px){rdr-faq .rfq-sq-haut{min-height:474px}}\nrdr-faq .rfq-vide{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 24px;background:#0A1228;color:#fff;font-family:Montserrat,system-ui,sans-serif;text-align:center}\nrdr-faq .rfq-vide h3{margin:0;font-size:22px}\nrdr-faq .rfq-vide p{margin:0;color:rgba(255,255,255,.7)}\nrdr-faq .rfq-vide button{height:42px;padding:0 20px;border:2px solid #fff;border-radius:10px 0 10px 0;background:transparent;color:#fff;font:700 14px Montserrat,system-ui,sans-serif;cursor:pointer}\nrdr-faq{--barre-h:56px;\n  --marine:#0E111D;--nuit:#0A1228;--nuit2:#101A36;--marine2:#16355D;--panneau:#1B2237;\n  --teal:#5DBFC0;--teal2:#14A79E;--vert:#006F7B;--jaune:#FCF150;--or:#F5BE41;--orange:#F19F39;--violet:#8B86E0;--corail:#FF7A3D;\n  --papier:#F4F1E8;--papier2:#EAE5D6;--encre:#0E111D;--encre2:#3A4256;--encre3:#6B7285;\n  --t2:rgba(255,255,255,.74);--t3:rgba(255,255,255,.52);--filet:rgba(255,255,255,.12);\n  --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;\n  --largeur:1260px;--marge:30px;\n  --ease:cubic-bezier(.22,.8,.3,1);}\nrdr-faq *{box-sizing:border-box}\nrdr-faq{margin:0;background:var(--nuit);color:#fff;font-family:var(--police);-webkit-font-smoothing:antialiased}\nrdr-faq a{color:inherit;text-decoration:none}\nrdr-faq h1,rdr-faq h2,rdr-faq h3,rdr-faq p{margin:0}\nrdr-faq button,rdr-faq input{font:inherit;color:inherit}\nrdr-faq svg.ico{width:1em;height:1em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}\nrdr-faq .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-faq .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:.95;letter-spacing:0}\nrdr-faq .barre-j{display:block;width:54px;height:6px;border-radius:3px;background:var(--jaune)}\nrdr-faq .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-faq .depart{position:relative;overflow:hidden;background:\n  radial-gradient(70% 90% at 12% 0%,rgba(20,167,158,.22),transparent 62%),\n  radial-gradient(55% 80% at 100% 30%,rgba(255,122,61,.16),transparent 60%),\n  linear-gradient(180deg,var(--nuit) 0%,var(--nuit2) 100%);\n  padding:clamp(40px,7vh,78px) 0 clamp(70px,11vh,120px)}\nrdr-faq .depart::before{content:'';position:absolute;left:-140px;bottom:-150px;width:640px;aspect-ratio:1584/1080;background:var(--damier) no-repeat center/contain;opacity:.08;transform:rotate(-8deg);pointer-events:none}\nrdr-faq .grain{position:absolute;inset:0;opacity:.07;mix-blend-mode:overlay;pointer-events:none;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")}\nrdr-faq .rose{position:absolute;right:clamp(-60px,-2vw,0px);top:clamp(-70px,-4vw,-20px);width:clamp(260px,26vw,380px);height:auto;opacity:.16;pointer-events:none}\nrdr-faq .rose circle{fill:none;stroke:#fff;stroke-width:.8}\nrdr-faq .rose .br{fill:#fff}\nrdr-faq .rose .bs{fill:none;stroke:#fff;stroke-width:1}\nrdr-faq .rose .fin{fill:none;stroke:var(--jaune);stroke-width:1}\nrdr-faq .rose text{fill:var(--jaune);font:800 14px var(--police);text-anchor:middle}\nrdr-faq .rose .tourne{transform-origin:0 0;animation:rfq-rose 140s linear infinite}\n@keyframes rfq-rose{to{transform:rotate(360deg)}}\nrdr-faq .depart>rdr-dernieres-infos{display:flow-root;position:relative;z-index:1}\nrdr-faq .depart>rdr-dernieres-infos .rdi{margin-bottom:clamp(20px,3.4vh,34px)}\nrdr-faq .depart:has(>rdr-dernieres-infos .rdi){padding-top:clamp(14px,2.6vh,26px)}\nrdr-faq .depart .trame{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,.85fr);gap:clamp(28px,4vw,64px);align-items:end}\nrdr-faq .fil{display:flex;align-items:center;gap:12px;margin-top:18px;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--t3)}\nrdr-faq .fil b{color:#fff}\nrdr-faq .depart h1{margin-top:18px;font-size:clamp(38px,4.7vw,68px)}\nrdr-faq .depart h1 .l1,rdr-faq .depart h1 .l2{display:block;white-space:nowrap}\nrdr-faq .depart h1 .l2{display:block;font-family:'VarienOutline',var(--titre);color:var(--jaune);-webkit-text-stroke:0}\nrdr-faq .chapo{margin-top:18px;max-width:50ch;color:var(--t2);font-size:clamp(14px,1.35vw,16.5px);line-height:1.6}\nrdr-faq .cherche{position:relative;margin-top:clamp(22px,3.4vh,34px);max-width:640px;display:flex;align-items:center;height:64px;padding:0 8px 0 22px;border-radius:18px;background:#fff;color:var(--encre);box-shadow:0 22px 50px -18px rgba(0,0,0,.55),0 0 0 0 rgba(252,241,80,0);transition:box-shadow .3s var(--ease),transform .3s var(--ease)}\nrdr-faq .cherche:focus-within{box-shadow:0 26px 60px -18px rgba(0,0,0,.6),0 0 0 5px rgba(252,241,80,.45);transform:translateY(-2px)}\nrdr-faq .cherche > .ico{font-size:20px;color:var(--encre3)}\nrdr-faq .cherche .champ{position:relative;flex:1;min-width:0;height:100%}\nrdr-faq .cherche input{width:100%;height:100%;padding:0 12px;border:0;background:none;outline:none;color:var(--encre);font-size:16px;font-weight:600}\nrdr-faq .cherche .ecrit{position:absolute;inset:0;display:flex;align-items:center;padding:0 12px;color:var(--encre3);font-size:16px;font-weight:500;white-space:nowrap;overflow:hidden;pointer-events:none}\nrdr-faq .cherche .ecrit::after{content:'';display:inline-block;width:2px;height:1.1em;margin-left:2px;background:var(--teal2);animation:rfq-curseur 1s steps(1) infinite}\n@keyframes rfq-curseur{50%{opacity:0}}\nrdr-faq .cherche:focus-within .ecrit,rdr-faq .cherche.plein .ecrit{display:none}\nrdr-faq .cherche input:not(:focus)::placeholder{color:transparent}\nrdr-faq .cherche input::placeholder{color:var(--encre3);font-weight:500}\nrdr-faq .cherche .compte{flex:none;display:none;margin-right:8px;padding:6px 11px;border-radius:999px;background:var(--papier);color:var(--encre2);font-size:12px;font-weight:800;white-space:nowrap}\nrdr-faq .cherche.actif .compte{display:inline-block;animation:rfq-entre .25s var(--ease)}\nrdr-faq .cherche .vider{flex:none;display:none;place-items:center;width:34px;height:34px;margin-right:6px;border:0;border-radius:50%;background:var(--papier);color:var(--encre2);cursor:pointer;font-size:16px}\nrdr-faq .cherche.plein .vider{display:grid}\nrdr-faq .cherche .aller{flex:none;display:grid;place-items:center;width:48px;height:48px;border:0;border-radius:12px;background:var(--jaune);color:var(--encre);cursor:pointer;font-size:20px;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-faq .cherche .aller:hover{transform:scale(1.06)}}\nrdr-faq .touche{position:absolute;right:-2px;top:-26px;font-size:11px;font-weight:600;color:var(--t3)}\nrdr-faq .touche kbd{display:inline-block;min-width:20px;padding:1px 6px;margin:0 2px;border:1px solid rgba(255,255,255,.25);border-bottom-width:2px;border-radius:5px;font:700 11px var(--police);color:#fff;text-align:center}\nrdr-faq .demandees{margin-top:18px;display:flex;flex-wrap:wrap;align-items:center;gap:8px}\nrdr-faq .demandees > span{margin-right:4px;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--t3)}\nrdr-faq .demandee{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;border:1px solid var(--filet);border-radius:999px;background:rgba(255,255,255,.05);color:#fff;font-size:13px;font-weight:700;cursor:pointer;transition:background .2s,border-color .2s,transform .2s var(--ease)}\nrdr-faq .demandee i{width:8px;height:8px;border-radius:50%;background:var(--cc)}@media (hover:hover) and (pointer:fine){rdr-faq .demandee:hover{background:rgba(255,255,255,.1);border-color:var(--cc);transform:translateY(-2px)}}\nrdr-faq .reperes{display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,2.4vw,30px) clamp(16px,2vw,28px);padding:clamp(20px,2.6vw,30px);border-radius:22px;background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));border:1px solid var(--filet);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transform:rotate(-1.2deg)}\nrdr-faq .repere{position:relative;padding-left:16px}\nrdr-faq .repere::before{content:'';position:absolute;left:0;top:2px;bottom:2px;width:3px;border-radius:2px;background:var(--cc);transform:skewX(-8deg)}\nrdr-faq .repere b{display:flex;align-items:baseline;gap:6px;font-family:var(--titre);font-style:italic;font-weight:400;font-size:clamp(28px,3.1vw,42px);line-height:1;color:var(--cc)}\nrdr-faq .repere b small{font-family:var(--police);font-style:normal;font-size:13px;font-weight:800;color:#fff}\nrdr-faq .repere b.mot{font-size:clamp(24px,2.5vw,34px)}\nrdr-faq .repere b small.exp{align-self:flex-start;margin:2px 2px 0 -4px;font-size:.36em;color:var(--cc);text-transform:none}\nrdr-faq .repere span{display:block;margin-top:8px;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#fff}\nrdr-faq .repere em{display:block;margin-top:3px;font-style:normal;font-size:12.5px;color:var(--t3)}\nrdr-faq .houle{position:relative;display:block;width:100%;height:clamp(46px,6vw,86px);margin-top:calc(-1 * clamp(46px,6vw,86px));margin-bottom:-2px;z-index:2}\nrdr-faq .traversee{position:relative;background:var(--papier);color:var(--encre);padding:clamp(34px,5.5vh,64px) 0 clamp(60px,9vh,110px);overflow:clip}\nrdr-faq .traversee::before{content:'';position:absolute;inset:0;background:#16355D;-webkit-mask:var(--topo) repeat center top / 1200px auto;mask:var(--topo) repeat center top / 1200px auto;opacity:.06;pointer-events:none}\nrdr-faq .traversee .trame{display:grid;grid-template-columns:250px minmax(0,1fr);gap:clamp(28px,4.6vw,76px);align-items:start}\nrdr-faq .route{position:sticky;top:calc(var(--barre-h) + 28px);padding:6px 0}\nrdr-faq .route .port{display:flex;align-items:center;gap:10px;font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--encre3)}\nrdr-faq .route .port i{width:10px;height:10px;border-radius:50%;border:2px solid var(--encre);background:var(--papier)}\nrdr-faq .route .port--arr i{background:var(--jaune)}\nrdr-faq .route ol{position:relative;list-style:none;margin:14px 0;padding:6px 0 6px 0}\nrdr-faq .route ol::before{content:'';position:absolute;left:4px;top:-10px;bottom:-10px;width:2px;background:repeating-linear-gradient(to bottom,var(--encre) 0 3px,transparent 3px 10px);opacity:.28}\nrdr-faq .route .fait{position:absolute;left:4px;top:-10px;width:2px;height:0;background:var(--encre);border-radius:2px;transition:height .15s linear}\nrdr-faq .route .bateau{position:absolute;left:-7px;top:-10px;width:24px;height:24px;display:grid;place-items:center;border-radius:50%;background:var(--encre);color:var(--jaune);font-size:13px;box-shadow:0 6px 14px -4px rgba(14,17,29,.5);transition:top .15s linear}\nrdr-faq .route li{position:relative}\nrdr-faq .route a{display:flex;align-items:center;gap:12px;padding:10px 10px 10px 26px;border-radius:12px;color:var(--encre2);font-size:14px;font-weight:700;transition:background .2s,color .2s}\nrdr-faq .route a::before{content:'';position:absolute;left:0;top:50%;width:10px;height:10px;margin-top:-5px;border-radius:50%;background:var(--papier);border:2px solid var(--cc);transition:background .2s,transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-faq .route a:hover{background:rgba(14,17,29,.05);color:var(--encre)}}\nrdr-faq .route a.est-vu{color:var(--encre)}\nrdr-faq .route a.est-vu::before{background:var(--cc);transform:scale(1.25)}\nrdr-faq .route a .n{font-family:'VarienOutline',var(--titre);font-style:italic;font-size:15px;color:var(--cc);-webkit-text-stroke:.3px var(--encre)}\nrdr-faq .route a .nb{margin-left:auto;min-width:24px;padding:2px 7px;border-radius:999px;background:rgba(14,17,29,.07);font-size:11px;font-weight:800;text-align:center;color:var(--encre3)}\nrdr-faq .route .aide{margin-top:24px;padding:16px;border-radius:16px;background:var(--encre);color:#fff}\nrdr-faq .route .aide b{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:800}\nrdr-faq .route .aide b .ico{color:var(--jaune);font-size:17px}\nrdr-faq .route .aide p{margin-top:6px;font-size:12.5px;line-height:1.5;color:var(--t2)}\nrdr-faq .route .aide a{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:0;font-size:12.5px;font-weight:800;color:var(--jaune)}\nrdr-faq .route .aide a::before{display:none}\nrdr-faq .rubrique{position:relative;margin-bottom:clamp(40px,6vh,64px);scroll-margin-top:calc(var(--barre-h) + 20px)}\nrdr-faq .rub-tete{display:grid;grid-template-columns:auto 1fr auto;align-items:end;gap:18px;padding-bottom:16px;margin-bottom:18px;border-bottom:2px solid var(--encre)}\nrdr-faq .rub-tete .num{font-family:'VarienOutline',var(--titre);font-style:italic;font-size:clamp(54px,6vw,84px);line-height:.8;color:var(--cc);-webkit-text-stroke:1px var(--encre)}\nrdr-faq .rub-tete h2{font-size:clamp(24px,2.8vw,38px);color:var(--encre)}\nrdr-faq .rub-tete p{margin-top:8px;font-size:13px;font-weight:600;color:var(--encre3)}\nrdr-faq .rub-tete .pastille{display:grid;place-items:center;width:52px;height:52px;border-radius:14px;background:var(--cc);color:var(--ci,var(--encre));font-size:24px;box-shadow:0 10px 22px -10px var(--cc);transform:rotate(-4deg)}\nrdr-faq .q{position:relative;margin-top:12px;border-radius:16px;background:#fff;overflow:clip;box-shadow:0 1px 0 rgba(14,17,29,.06),0 10px 24px -18px rgba(14,17,29,.35);transition:box-shadow .3s var(--ease),transform .3s var(--ease)}\nrdr-faq .q::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:4px;border-radius:0 3px 3px 0;background:var(--cc);transition:top .3s var(--ease),bottom .3s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-faq .q:hover{box-shadow:0 1px 0 rgba(14,17,29,.06),0 18px 34px -20px rgba(14,17,29,.45);transform:translateY(-1px)}}\nrdr-faq .q[open]{box-shadow:0 1px 0 rgba(14,17,29,.08),0 26px 50px -24px rgba(14,17,29,.5)}\nrdr-faq .q[open]::before{top:0;bottom:0;border-radius:16px 0 0 16px}\nrdr-faq .q summary{list-style:none;display:flex;align-items:center;gap:16px;padding:20px 20px 20px 26px;cursor:pointer;border-radius:16px}\nrdr-faq .q summary::-webkit-details-marker{display:none}\nrdr-faq .q summary:focus-visible{outline:3px solid var(--encre);outline-offset:-3px}\nrdr-faq .q .lib{flex:1;font-size:clamp(15px,1.45vw,17px);font-weight:800;line-height:1.35;color:var(--encre)}\nrdr-faq .q .chev{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--papier);color:var(--encre);font-size:16px;transition:transform .35s var(--ease),background .25s}\nrdr-faq .q[open] .chev{transform:rotate(180deg);background:var(--cc);color:var(--ci,var(--encre))}\nrdr-faq .q .ouvre{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s var(--ease)}\nrdr-faq .q[open] .ouvre{grid-template-rows:1fr}\nrdr-faq .q .coupe{overflow:hidden;min-height:0}\nrdr-faq .q .rep{padding:0 26px 22px 26px;color:var(--encre2);font-size:15px;line-height:1.7}\nrdr-faq .q .rep p + p{margin-top:10px}\nrdr-faq .q .rep ul{margin:10px 0 0;padding-left:20px}\nrdr-faq .q .rep p + ul{margin-top:8px}\nrdr-faq .q .rep ul + p{margin-top:10px}\nrdr-faq .q .rep li + li{margin-top:6px}\nrdr-faq .q .rep li a{color:var(--encre);font-weight:700;text-decoration:underline;text-decoration-color:var(--cc);text-decoration-thickness:3px;text-underline-offset:4px}\nrdr-faq .q .rep b{color:var(--encre);font-weight:800}\nrdr-faq .q .rep p a{color:var(--encre);font-weight:700;text-decoration:underline;text-decoration-color:var(--cc);text-decoration-thickness:3px;text-underline-offset:4px}\nrdr-faq .q .pied{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:16px;padding-top:14px;border-top:1px dashed #DCD6C5}\nrdr-faq .q .source{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 16px;border-radius:999px;background:var(--encre);color:#fff;font-size:12.5px;font-weight:800;text-decoration:none;transition:transform .2s var(--ease),background .2s}\nrdr-faq .q .source .ico{font-size:14px;color:var(--jaune);transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-faq .q .source:hover{background:#1f2640}}@media (hover:hover) and (pointer:fine){rdr-faq .q .source:hover .ico{transform:translate(2px,-2px)}}\nrdr-faq .q .copier{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border:1px solid #DCD6C5;border-radius:999px;background:none;color:var(--encre3);font-size:12px;font-weight:700;cursor:pointer;transition:color .2s,border-color .2s,background .2s}@media (hover:hover) and (pointer:fine){rdr-faq .q .copier:hover{color:var(--encre);border-color:var(--encre)}}\nrdr-faq .q .copier.fait{background:var(--encre);border-color:var(--encre);color:var(--jaune)}\nrdr-faq .q .copier-adresse{display:inline-flex;align-items:center;gap:8px;flex:1 1 240px;min-width:0;max-width:100%;font-size:12px;font-weight:700;color:var(--encre3)}\nrdr-faq .q .copier-adresse input{flex:1 1 auto;min-width:0;padding:6px 10px;border:1px solid #DCD6C5;border-radius:8px;background:#fff;color:var(--encre);font:600 12px ui-monospace,Menlo,Consolas,monospace}\nrdr-faq .q .ancre{font:600 11.5px ui-monospace,Menlo,Consolas,monospace;color:#A39B84}\nrdr-faq .valider{display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:6px;background:#FFE9D2;color:#B2530C;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;vertical-align:1px}\nrdr-faq mark{background:linear-gradient(transparent 55%,rgba(252,241,80,.95) 55%);color:inherit;padding:0 1px}\nrdr-faq .rien{display:none;align-items:center;gap:22px;padding:26px;border-radius:20px;background:var(--encre);color:#fff}\nrdr-faq .rien.est-la{display:flex}\nrdr-faq .rien .bouee{flex:none;display:grid;place-items:center;width:74px;height:74px;border-radius:50%;background:var(--corail);color:#fff;font-size:40px;animation:rfq-tangue 3.4s ease-in-out infinite}\n@keyframes rfq-tangue{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(8deg) translateY(-4px)}}\nrdr-faq .rien b{display:block;font-size:18px;font-weight:800}\nrdr-faq .rien p{margin-top:6px;color:var(--t2);font-size:14px;line-height:1.5}\nrdr-faq .rien .liens{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}\nrdr-faq .rien .liens button{padding:7px 12px;border:1px solid var(--filet);border-radius:999px;background:rgba(255,255,255,.06);font-size:12.5px;font-weight:700;cursor:pointer}@media (hover:hover) and (pointer:fine){rdr-faq .rien .liens button:hover{border-color:var(--jaune)}}\nrdr-faq .aiguillages{position:relative;margin-top:clamp(10px,2vh,24px);display:grid;grid-template-columns:1fr 1fr;gap:22px}\nrdr-faq .aig{position:relative;display:flex;flex-direction:column;min-height:220px;padding:26px;border:6px solid #fff;border-radius:24px;color:var(--encre);overflow:hidden;box-shadow:0 30px 60px -30px rgba(14,17,29,.55);transition:transform .35s var(--ease)}\nrdr-faq .aig--pro{background:linear-gradient(115deg,#FF7A3D 0%,#F5A23C 55%,#F5BE41 100%);transform:rotate(-1.4deg)}\nrdr-faq .aig--equipe{background:linear-gradient(115deg,#14A79E 0%,#5DBFC0 60%,#9BDDD6 100%);transform:rotate(1.2deg)}@media (hover:hover) and (pointer:fine){rdr-faq .aig:hover{transform:rotate(0) translateY(-4px)}}\nrdr-faq .aig .pastille{display:grid;place-items:center;width:50px;height:50px;border-radius:14px;background:var(--encre);color:#fff;font-size:24px}\nrdr-faq .aig .sur{margin-top:18px;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;opacity:.72}\nrdr-faq .aig b{margin-top:6px;font-family:var(--titre);font-style:italic;font-weight:400;font-size:clamp(22px,2.3vw,30px);line-height:1;text-transform:uppercase}\nrdr-faq .aig p{margin-top:10px;max-width:40ch;font-size:14px;line-height:1.55;font-weight:500}\nrdr-faq .aig .aller{display:inline-flex;align-items:center;gap:10px;margin-top:auto;padding-top:18px;font-size:14px;font-weight:800}\nrdr-faq .aig .aller i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--encre);color:#fff;font-size:15px;font-style:normal;transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-faq .aig:hover .aller i{transform:translateX(4px)}}\nrdr-faq .aig::after{content:attr(data-n);position:absolute;right:18px;top:6px;font-family:'VarienOutline',var(--titre);font-style:italic;font-size:92px;line-height:1;color:transparent;-webkit-text-stroke:1.5px rgba(14,17,29,.28)}\nrdr-faq .arrivee{position:relative;background:var(--jaune);color:var(--encre);padding:clamp(44px,7vh,80px) 0 clamp(50px,8vh,90px);overflow:hidden}\nrdr-faq .vague{position:absolute;left:0;right:0;top:-1px;width:100%;height:42px}\nrdr-faq .arrivee::before{content:'';position:absolute;inset:0;background:repeating-radial-gradient(circle at 88% 120%,transparent 0 38px,rgba(14,17,29,.05) 38px 40px);pointer-events:none}\nrdr-faq .arrivee .trame{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:clamp(22px,4vw,56px)}\nrdr-faq .arrivee .bouee{display:grid;place-items:center;width:clamp(92px,10vw,128px);height:clamp(92px,10vw,128px);border-radius:50%;background:var(--encre);color:var(--corail);font-size:clamp(52px,6vw,74px);animation:rfq-tangue 4s ease-in-out infinite;box-shadow:0 20px 40px -20px rgba(14,17,29,.6)}\nrdr-faq .arrivee h2{font-size:clamp(28px,3.6vw,50px)}\nrdr-faq .arrivee p{margin-top:10px;max-width:52ch;font-size:15px;line-height:1.6;font-weight:500;color:#2B3040}\nrdr-faq .arrivee .cta{display:inline-flex;align-items:center;gap:12px;padding:18px 26px;border-radius:16px;background:var(--encre);color:#fff;font-size:15px;font-weight:800;white-space:nowrap;box-shadow:0 18px 34px -16px rgba(14,17,29,.7);transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-faq .arrivee .cta:hover{transform:translateY(-3px)}}\nrdr-faq .arrivee .cta .ico{color:var(--jaune);font-size:18px}\nrdr-faq .entre{opacity:0;transform:translateY(18px);animation:rfq-entre .8s var(--ease) forwards;animation-delay:calc(var(--i,0) * 90ms + 120ms)}\n@keyframes rfq-entre{to{opacity:1;transform:none}}\nrdr-faq .reperes.entre{animation-name:rfq-entre-penche}\n@keyframes rfq-entre-penche{from{opacity:0;transform:translateY(24px) rotate(-3deg)}to{opacity:1;transform:rotate(-1.2deg)}}\nrdr-faq .revele{opacity:0;translate:0 22px;transition:opacity .7s var(--ease),translate .7s var(--ease),transform .35s var(--ease),box-shadow .3s var(--ease)}\nrdr-faq .revele.est-vu{opacity:1;translate:0 0}\n@media (max-width:1100px){\nrdr-faq .depart .trame{grid-template-columns:minmax(0,1fr)}\nrdr-faq .reperes{max-width:640px;transform:none}\nrdr-faq .reperes.entre{animation-name:rfq-entre}\n}\n@media (max-width:900px){\nrdr-faq .traversee .trame{grid-template-columns:minmax(0,1fr)}\nrdr-faq .rubrique{scroll-margin-top:calc(var(--barre-h) + 76px)}\nrdr-faq .route{position:sticky;top:var(--barre-h);z-index:5;margin:0 calc(-1 * var(--marge));padding:10px var(--marge);background:rgba(244,241,232,.94);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid #DCD6C5}\nrdr-faq .route .port,rdr-faq .route .aide,rdr-faq .route .fait,rdr-faq .route .bateau{display:none}\nrdr-faq .route ol{display:flex;gap:6px;margin:0;padding:0;overflow-x:auto;scrollbar-width:none}\nrdr-faq .route ol::before{display:none}\nrdr-faq .route ol::-webkit-scrollbar{display:none}\nrdr-faq .route a{flex:none;padding:8px 12px 8px 24px;border:1px solid #DCD6C5;border-radius:999px;background:#fff;font-size:13px;white-space:nowrap}\nrdr-faq .route a::before{left:9px}\nrdr-faq .route a .n{display:none}\nrdr-faq .aiguillages{grid-template-columns:1fr}\nrdr-faq .arrivee .trame{grid-template-columns:auto 1fr}\nrdr-faq .arrivee .cta{grid-column:1 / -1;justify-self:start}\n}\n@media (max-width:750px){\nrdr-faq{--barre-h:60px}\n}\n@media (max-width:760px){\nrdr-faq{--marge:22px}\nrdr-faq .depart h1{font-size:clamp(34px,10.4vw,50px)}\nrdr-faq .depart h1 .l1,rdr-faq .depart h1 .l2{white-space:normal}\nrdr-faq .fil .long{display:none}\nrdr-faq .rose{width:220px;right:-70px;top:-40px;opacity:.09}\nrdr-faq .cherche{height:58px;padding-left:16px}\nrdr-faq .cherche input,rdr-faq .cherche .ecrit{font-size:15px;padding:0 8px}\nrdr-faq .cherche .aller{width:44px;height:44px}\nrdr-faq .touche{display:none}\nrdr-faq .reperes{gap:18px 14px;padding:18px}\nrdr-faq .depart::before{left:-120px;bottom:-110px;width:420px}\nrdr-faq .repere b{font-size:28px}\nrdr-faq .rub-tete{grid-template-columns:auto 1fr;gap:12px}\nrdr-faq .rub-tete .pastille{display:none}\nrdr-faq .rub-tete .num{font-size:52px}\nrdr-faq .q summary{padding:17px 16px 17px 22px}\nrdr-faq .q .rep{padding:0 18px 20px 22px;font-size:14.5px}\nrdr-faq .rien{flex-direction:column;align-items:flex-start}\nrdr-faq .aig{min-height:0;padding:22px}\nrdr-faq .aig::after{font-size:70px}\nrdr-faq .arrivee .trame{grid-template-columns:1fr}\nrdr-faq .arrivee .bouee{width:84px;height:84px;font-size:46px}\n}\n@media (max-height:820px) and (min-width:1101px){\nrdr-faq .depart{padding:26px 0 64px}\nrdr-faq .fil{margin-top:12px}\nrdr-faq .depart h1{margin-top:12px;font-size:clamp(38px,4.6vw,60px)}\nrdr-faq .chapo{margin-top:12px;font-size:14px;line-height:1.5}\nrdr-faq .cherche{margin-top:18px;height:56px}\nrdr-faq .cherche .aller{width:42px;height:42px}\nrdr-faq .demandees{margin-top:12px}\nrdr-faq .demandee{padding:6px 12px 6px 9px;font-size:12.5px}\nrdr-faq .reperes{gap:16px 20px;padding:18px 20px}\nrdr-faq .repere b{font-size:32px}\nrdr-faq .repere span{margin-top:6px}\nrdr-faq .repere em{display:none}\nrdr-faq .traversee{padding-top:22px}\nrdr-faq .rub-tete{padding-bottom:12px;margin-bottom:12px}\nrdr-faq .rub-tete .num{font-size:56px}\n}\n@media (prefers-reduced-motion:reduce){\nrdr-faq *,rdr-faq *::before,rdr-faq *::after{animation:none!important;transition:none!important}\nrdr-faq .entre{opacity:1;transform:none}\nrdr-faq .revele{opacity:1;translate:0 0}\nrdr-faq .reperes.entre{transform:rotate(-1.2deg)}\n}";
  const PAGE = "<section class=\"depart\" aria-labelledby=\"titre-faq\">\n    <div class=\"grain\" aria-hidden=\"true\"></div>\n    <svg class=\"rose\" viewBox=\"-100 -100 200 200\" aria-hidden=\"true\"><g class=\"tourne\"><circle r=\"92\"/><circle r=\"70\"/><circle r=\"30\"/><path class=\"br\" d=\"M0-96 L10-10 L0 0 Z M0 96 L-10 10 L0 0 Z M96 0 L10 10 L0 0 Z M-96 0 L-10-10 L0 0 Z\"/><path class=\"bs\" d=\"M0-96 L-10-10 L0 0 Z M0 96 L10 10 L0 0 Z M96 0 L10-10 L0 0 Z M-96 0 L-10 10 L0 0 Z\"/><path class=\"fin\" d=\"M52-52 L6-2 L0 0 Z M-52 52 L-6 2 L0 0 Z M52 52 L2 6 L0 0 Z M-52-52 L-2-6 L0 0 Z\"/><text y=\"-78\">N</text></g></svg>\n    <rdr-dernieres-infos page=\"faq\"></rdr-dernieres-infos>\n    <div class=\"trame\">\n      <div>\n        <span class=\"barre-j entre\" style=\"--i:0\"></span>\n        <div class=\"fil entre\" style=\"--i:1\"><b>Route du Rhum</b><span class=\"long\">Destination Guadeloupe ·</span> Questions fréquentes</div>\n        <h1 class=\"titre entre\" id=\"titre-faq\" style=\"--i:2\"><span class=\"l1\">Vos questions,</span><span class=\"l2\">nos réponses.</span></h1>\n        <p class=\"chapo entre\" style=\"--i:3\">Le départ, le village, les bateaux, venir à Saint-Malo : cherchez un mot, la réponse s'ouvre. Et si elle n'y est pas, dites-le nous, c'est comme ça que cette page grandit.</p>\n        <form class=\"cherche entre\" id=\"cherche\" role=\"search\" style=\"--i:4\" onsubmit=\"return false\">\n          <span class=\"touche\" aria-hidden=\"true\">Appuyez sur <kbd>/</kbd> pour chercher</span>\n          <svg class=\"ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></svg>\n          <label class=\"sr\" for=\"q\">Chercher dans les questions</label>\n          <span class=\"champ\"><input id=\"q\" type=\"search\" autocomplete=\"off\" placeholder=\"Tapez un mot : départ, pontons, gratuit…\"><span class=\"ecrit\" id=\"ecrit\" aria-hidden=\"true\">Quand part la course ?</span></span>\n          <span class=\"compte\" id=\"compte\" aria-live=\"polite\"></span>\n          <button class=\"vider\" id=\"vider\" type=\"button\" aria-label=\"Effacer la recherche\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></button>\n          <button class=\"aller\" type=\"submit\" aria-label=\"Chercher\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg></button>\n        </form>\n        <div class=\"demandees entre\" id=\"demandees\" style=\"--i:5\"><span>Les plus demandées</span></div>\n      </div>\n      <div class=\"reperes entre\" style=\"--i:4\">\n        <div class=\"repere\" style=\"--cc:var(--teal)\"><b>1<small class=\"exp\">er</small>nov.</b><span>Grand départ</span><em>dimanche, à 13 h 02</em></div>\n        <div class=\"repere\" style=\"--cc:var(--jaune)\"><b>13</b><span>Jours de fête</span><em>du 20 oct. au 1er nov.</em></div>\n        <div class=\"repere\" style=\"--cc:var(--violet)\"><b class=\"mot\">Gratuit</b><span>Le village</span><em>accessible à tous</em></div>\n        <div class=\"repere\" style=\"--cc:var(--orange)\"><b>3&nbsp;542</b><span>Milles · 6 560 km</span><em>jusqu'en Guadeloupe</em></div>\n      </div>\n    </div>\n  </section>\n  <svg class=\"houle\" viewBox=\"0 0 1440 86\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n    <path d=\"M0 40 C 180 10, 360 70, 540 44 S 900 8, 1080 40 S 1320 70, 1440 36 L1440 86 L0 86 Z\" fill=\"#F4F1E8\"/>\n    <path d=\"M0 52 C 200 26, 380 80, 560 56 S 920 20, 1100 52 S 1330 78, 1440 50\" fill=\"none\" stroke=\"rgba(14,17,29,.10)\" stroke-width=\"2\" stroke-dasharray=\"2 10\"/>\n  </svg>\n  <section class=\"traversee\" aria-label=\"Les questions\">\n    <div class=\"trame\">\n      <nav class=\"route\" aria-label=\"Les rubriques\">\n        <div class=\"port\"><i></i>Saint-Malo</div>\n        <ol id=\"route\"><span class=\"fait\" id=\"fait\"></span><span class=\"bateau\" id=\"bateau\" aria-hidden=\"true\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M10 2v15\"/><path d=\"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z\"/><path d=\"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z\"/></svg></span></ol>\n        <div class=\"port port--arr\"><i></i>Pointe-à-Pitre</div>\n        <div class=\"aide\">\n          <b><svg class=\"ico\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg>Pas trouvé ?</b>\n          <p>Écrivez-nous : les questions qui reviennent finissent ici.</p>\n          <a href=\"/contact\">Poser ma question →</a>\n        </div>\n      </nav>\n      <div>\n        <div id=\"liste\"></div>\n        <div class=\"rien\" id=\"rien\" role=\"status\">\n          <span class=\"bouee\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg></span>\n          <div>\n            <b id=\"rien-titre\">Aucune réponse pour cette recherche</b>\n            <p>Elle n'est peut-être pas encore écrite. Essayez un autre mot, ou posez-nous la question.</p>\n            <div class=\"liens\" id=\"rien-liens\"></div>\n          </div>\n        </div>\n        <div class=\"aiguillages\">\n          <a class=\"aig aig--pro revele\" href=\"/offres-exposants\" data-n=\"01\">\n            <span class=\"pastille\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/></svg></span>\n            <span class=\"sur\">Vous n'êtes pas là pour une question</span>\n            <b>Exposant, partenaire, prestataire</b>\n            <p>Emplacements, offres et dossier de partenariat : tout part d'une seule page, et votre demande arrive au bon service.</p>\n            <span class=\"aller\">Voir les offres <i>→</i></span>\n          </a>\n          <a class=\"aig aig--equipe revele\" href=\"/contact\" data-n=\"02\">\n            <span class=\"pastille\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/></svg></span>\n            <span class=\"sur\">Vous n'êtes pas là pour une question</span>\n            <b>Rejoindre l'équipe</b>\n            <p>Emplois, stages et bénévolat sur le village : écrivez-nous pour proposer votre candidature.</p>\n            <span class=\"aller\">Postuler <i>→</i></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"arrivee\" id=\"question-absente\">\n    <svg class=\"vague\" viewBox=\"0 0 1440 42\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M0 0 H1440 V14 C 1260 40, 1080 2, 900 20 S 540 40, 360 18 S 120 4, 0 24 Z\" fill=\"#F4F1E8\"/></svg>\n    <div class=\"trame\">\n      <span class=\"bouee\" aria-hidden=\"true\"><svg class=\"ico\" viewBox=\"0 0 24 24\" style=\"stroke-width:1.6\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg></span>\n      <div>\n        <h2 class=\"titre\">Votre question<br>n'y est pas ?</h2>\n        <p>On lit tous les messages. Celles qui reviennent finissent sur cette page, et c'est vous qui la faites grandir.</p>\n      </div>\n      <a class=\"cta\" href=\"/contact\"><svg class=\"ico\" viewBox=\"0 0 24 24\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/></svg>Nous écrire</a>\n    </div>\n  </section>";
  const TRAD = {"Questions fréquentes":"Frequently asked questions","Vos questions,":"Your questions,","nos réponses.":"our answers.","Le départ, le village, les bateaux, venir à Saint-Malo : cherchez un mot, la réponse s'ouvre. Et si elle n'y est pas, dites-le nous, c'est comme ça que cette page grandit.":"The start, the village, the boats, getting to Saint-Malo: type a word and the answer opens. And if it isn't here, let us know: that's how this page grows.","Appuyez sur":"Press","pour chercher":"to search","Chercher dans les questions":"Search the questions","Tapez un mot : départ, pontons, gratuit…":"Type a word: start, pontoons, free…","Quand part la course ?":"When does the race start?","Effacer la recherche":"Clear the search","Chercher":"Search","Les plus demandées":"Most asked","er":"st","nov.":"Nov.","Grand départ":"Race start","dimanche, à 13 h 02":"Sunday, at 1:02 pm","Jours de fête":"Festival days","du 20 oct. au 1er nov.":"20 Oct. to 1 Nov.","Gratuit":"Free","Le village":"The village","accessible à tous":"open to everyone","Milles · 6 560 km":"Miles · 6,560 km","3 542":"3,542","jusqu'en Guadeloupe":"to Guadeloupe","Les rubriques":"Sections","Pas trouvé ?":"Not found?","Écrivez-nous : les questions qui reviennent finissent ici.":"Write to us: the questions that keep coming up end up here.","Poser ma question →":"Ask my question →","Les questions":"The questions","Aucune réponse pour cette recherche":"No answer for this search","Elle n'est peut-être pas encore écrite. Essayez un autre mot, ou posez-nous la question.":"It may not be written yet. Try another word, or ask us.","Vous n'êtes pas là pour une question":"Not here with a question?","Exposant, partenaire, prestataire":"Exhibitor, partner, supplier","Emplacements, offres et dossier de partenariat : tout part d'une seule page, et votre demande arrive au bon service.":"Stands, offers and partnership pack: it all starts from one page, and your request reaches the right team.","Voir les offres":"See the offers","Rejoindre l'équipe":"Join the team","Emplois, stages et bénévolat sur le village : écrivez-nous pour proposer votre candidature.":"Jobs, internships and volunteering at the village: write to us with your application.","Postuler":"Apply","Votre question":"Your question","n'y est pas ?":"isn't here?","On lit tous les messages. Celles qui reviennent finissent sur cette page, et c'est vous qui la faites grandir.":"We read every message. The questions that keep coming up end up on this page: you are the ones who make it grow.","Nous écrire":"Write to us","Copier le lien":"Copy link","Lien copié":"Link copied","Copiez l'adresse":"Copy the address","Aller à la page":"Go to the page"};
  const SOURCE = 'https://www.routedurhum.com/_functions/faq';

  function poserStyle() {
    if (document.getElementById('rdr-faq-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-faq-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  


  function enAnglais(t) {
    const k = t.trim();
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(TRAD, k)) return t.replace(k, TRAD[k]);
    let m = k.match(/^(\d+) réponses?$/);
    if (m) return t.replace(k, m[1] + (m[1] === '1' ? ' answer' : ' answers'));
    m = k.match(/^Aucune réponse pour « (.*) »$/);
    if (m) return t.replace(k, 'No answer for \u201c' + m[1] + '\u201d');
    return null;
  }
  

  const dansInfos = (n) => { const e = n && (n.nodeType === 1 ? n : n.parentElement); return !!(e && e.closest && e.closest('rdr-dernieres-infos')); };
  function traduire(racine) {
    if (dansInfos(racine)) return;
    const w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    while (w.nextNode()) noeuds.push(w.currentNode);
    noeuds.forEach((n) => { if (n.parentElement && n.parentElement.id === 'ecrit') return; if (dansInfos(n)) return; const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; });
    const els = racine.nodeType === 1 ? [racine, ...racine.querySelectorAll('[placeholder],[aria-label],[title]')].filter((el) => !dansInfos(el)) : [];
    els.forEach((el) => ['placeholder', 'aria-label', 'title'].forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      const v = enAnglais(el.getAttribute(a));
      if (v != null && v !== el.getAttribute(a)) el.setAttribute(a, v);
    }));
  }
  function prefixerLiens(racine) {
    racine.querySelectorAll('a[href^="/"]').forEach((a) => {
      if (dansInfos(a)) return;
      const h = a.getAttribute('href');
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('//')) return;
      a.setAttribute('href', '/en' + h);
    });
  }

   
  function demarrer(D) {






const ICO = {
  flag: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
  tent: '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
  bus: '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
  sailboat: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  lien: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  medal: '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
  fleche: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>'
};
const svg = (k) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + ICO[k] + '</svg>';
const AV = '<span class="valider">À valider</span>';

    const RUBRIQUES = D.rubriques, FAQ = D.questions, EXEMPLES = D.exemples || [], MEDIAS = D.medias || {};

 
const PAGE_FAQ = document.querySelector('.faq-page');
if (MEDIAS.topo) PAGE_FAQ.style.setProperty('--topo', 'url("' + MEDIAS.topo + '")');
if (MEDIAS.damier) PAGE_FAQ.style.setProperty('--damier', 'url("' + MEDIAS.damier + '")');

 
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const jetons = (q) => norm(q).replace(/[^a-z0-9œæ]+/g, ' ').trim().split(' ').filter(Boolean);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const $ = (id) => document.getElementById(id);
const liste = $('liste'), champ = $('q'), boite = $('cherche'), compte = $('compte'), rien = $('rien');
const rubDe = (id) => RUBRIQUES.find((r) => r.id === id);




const lienSur = (u) => { const v = String(u || ''); return /^\/(?!\/)/.test(v) || /^https:\/\//i.test(v) ? v : ''; };

 
$('demandees').insertAdjacentHTML('beforeend', FAQ.filter((f) => f.top).map((f) =>
  '<button type="button" class="demandee" data-aller="' + esc(f.a) + '" style="--cc:' + esc(rubDe(f.r).cc) + '"><i></i>' + esc(f.top) + '</button>').join(''));

 
$('route').insertAdjacentHTML('beforeend', RUBRIQUES.map((r, i) =>
  '<li><a href="#' + esc(r.id) + '" data-r="' + esc(r.id) + '" style="--cc:' + esc(r.cc) + '"><span class="n">0' + (i + 1) + '</span>' + esc(r.nom) + '<span class="nb">' + FAQ.filter((f) => f.r === r.id).length + '</span></a></li>').join(''));





function surligner(html, mots) {
  const ms = mots.filter((m) => m.length >= 2);
  if (!ms.length) return html;
  const dans = (texte, m) => {
    let reste = texte, res = '', i = norm(reste).indexOf(m);
    if (i < 0) return texte;
    while (i >= 0) { res += reste.slice(0, i) + '<mark>' + reste.slice(i, i + m.length) + '</mark>'; reste = reste.slice(i + m.length); i = norm(reste).indexOf(m); }
    return res + reste;
  };
  return html.replace(/>([^<]+)</g, (tout, texte) => {
    let sortie = texte;
    ms.forEach((m) => { sortie = sortie.split(/(&#?\w+;|<\/?mark>)/).map((bout, k) => (k % 2 ? bout : dans(bout, m))).join(''); });
    return '>' + sortie + '<';
  });
}

let premierDessin = true;
function dessiner() {
  const mots = jetons(champ.value);
  const cherche = mots.length > 0 && champ.value.trim().length >= 2;
  let trouves = 0;
  const html = RUBRIQUES.map((r, ri) => {
    const dedans = FAQ.filter((f) => {
      if (f.r !== r.id) return false;
      if (!cherche) return true;
      const foin = norm(f.q + ' ' + f.cles.join(' ') + ' ' + (f.src ? f.src.t : '') + ' ' + f.rep.replace(/<[^>]*>/g, ' '));
      return mots.every((m) => foin.indexOf(m) >= 0);
    });
    if (!dedans.length) return '';
    trouves += dedans.length;
    return '<section class="rubrique" id="' + esc(r.id) + '" style="--cc:' + esc(r.cc) + (r.ci ? ';--ci:' + esc(r.ci) : '') + '">' +
      '<header class="rub-tete revele"><span class="num" aria-hidden="true">0' + (ri + 1) + '</span>' +
        '<div><h2 class="titre">' + esc(r.nom) + '</h2><p>' + esc(r.note) + '</p></div>' +
        '<span class="pastille" aria-hidden="true">' + svg(r.ico) + '</span></header>' +
      dedans.map((f) => {
        const ouvre = cherche || location.hash === '#' + f.a || (premierDessin && !location.hash && f === FAQ[0]);
        const source = f.src ? lienSur(f.src.u) : '';
        return '<details class="q revele" id="' + esc(f.a) + '"' + (ouvre ? ' open' : '') + '>' +
          '<summary><span class="lib">' + esc(f.q) + '</span><span class="chev" aria-hidden="true">' + svg('chevron') + '</span></summary>' +
          '<div class="ouvre"><div class="coupe"><div class="rep">' + f.rep +
            '<div class="pied">' + (source ? '<a class="source" href="' + esc(source) + '"><span class="sr">Aller à la page </span>' + esc(f.src.t) + svg('fleche') + '</a>' : '') +
            '<button type="button" class="copier" data-lien="' + esc(f.a) + '">' + svg('lien') + '<span>Copier le lien</span></button>' +
            '<span class="ancre">#' + esc(f.a) + '</span></div>' +
          '</div></div></div></details>';
      }).join('') + '</section>';
  }).join('');
  liste.innerHTML = cherche ? surligner(html, mots) : html;
  premierDessin = false;
  compte.textContent = trouves + (trouves > 1 ? ' réponses' : ' réponse');
  boite.classList.toggle('actif', cherche && trouves > 0);
  boite.classList.toggle('plein', !!champ.value);
  rien.classList.toggle('est-la', cherche && trouves === 0);
  if (cherche && trouves === 0) {
    $('rien-titre').textContent = 'Aucune réponse pour « ' + champ.value.trim() + ' »';
    $('rien-liens').innerHTML = FAQ.filter((f) => f.top).slice(0, 4).map((f) => '<button type="button" data-aller="' + esc(f.a) + '">' + esc(f.top) + '</button>').join('');
  }
  observerRevele();
  placerBateau();
}








liste.addEventListener('click', (e) => {
  const sum = e.target.closest('summary'); if (!sum) return;
  const d = sum.parentElement;
  if (d.open) return;    
  if (!(champ.value.trim().length >= 2)) liste.querySelectorAll('details[open]').forEach((x) => { if (x !== d) x.open = false; });
  history.replaceState(null, '', '#' + d.id);
});




liste.addEventListener('click', (e) => {
  const b = e.target.closest('.copier'); if (!b) return;
  const u = location.origin + location.pathname + '#' + b.dataset.lien;
  const fini = () => { b.classList.add('fait'); b.innerHTML = svg('check') + '<span>Lien copié</span>'; setTimeout(() => { b.classList.remove('fait'); b.innerHTML = svg('lien') + '<span>Copier le lien</span>'; }, 1800); };
  const rate = () => {
    let l = b.parentElement.querySelector('.copier-adresse');
    if (!l) { b.insertAdjacentHTML('afterend', '<label class="copier-adresse"><span>Copiez l\'adresse</span><input type="text" readonly></label>'); l = b.nextElementSibling; }
    const champAdresse = l.querySelector('input');
    champAdresse.value = u;
    champAdresse.focus();
    champAdresse.select();
  };
  try { navigator.clipboard.writeText(u).then(fini, rate); } catch (err) { rate(); }
});

 
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-aller]'); if (!b) return;
  if (champ.value) { champ.value = ''; dessiner(); }
  const d = document.getElementById(b.dataset.aller); if (!d) return;
  liste.querySelectorAll('details[open]').forEach((x) => { if (x !== d) x.open = false; });
  d.open = true;
  history.replaceState(null, '', '#' + d.id);
  d.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

champ.addEventListener('input', dessiner);
$('vider').addEventListener('click', () => { champ.value = ''; champ.focus(); dessiner(); });
addEventListener('keydown', (e) => {
   
  const saisie = (el) => !!el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
  if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !saisie(document.activeElement)) { e.preventDefault(); champ.focus(); champ.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  if (e.key === 'Escape' && document.activeElement === champ && champ.value) { champ.value = ''; dessiner(); }
});











(function ecrire() {
  const cal = $('ecrit');
  if (!cal || !EXEMPLES.length) return;
  cal.textContent = EXEMPLES[0];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let hi = 0, ci = EXEMPLES[0].length, efface = true;
  const tick = () => {
    const mot = EXEMPLES[hi];
    if (!efface) {
      ci++;
      cal.textContent = mot.slice(0, ci);
      if (ci >= mot.length) { efface = true; return setTimeout(tick, 1500); }
      return setTimeout(tick, 35 + Math.random() * 25);
    }
    ci--;
    cal.textContent = mot.slice(0, ci);
    if (ci <= 0) { efface = false; hi = (hi + 1) % EXEMPLES.length; return setTimeout(tick, 380); }
    setTimeout(tick, 20);
  };
  setTimeout(tick, 1800);
})();

 
let io = null;
function observerRevele() {
  if (!('IntersectionObserver' in window)) { document.querySelectorAll('.revele').forEach((x) => x.classList.add('est-vu')); return; }
  if (!io) io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('est-vu'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.revele:not(.est-vu)').forEach((x, i) => { x.style.transitionDelay = Math.min(i, 6) * 45 + 'ms'; io.observe(x); });
}

 
function placerBateau() {
  const liens = [...document.querySelectorAll('#route a')];
  const rubs = RUBRIQUES.map((r) => document.getElementById(r.id)).filter(Boolean);
  if (!rubs.length) return;
  const repere = scrollY + innerHeight * 0.35;
  let courante = rubs[0];
  rubs.forEach((s) => { if (s.getBoundingClientRect().top + scrollY <= repere) courante = s; });
  liens.forEach((a) => a.classList.toggle('est-vu', a.dataset.r === courante.id));
  


  const lien = liens.find((a) => a.dataset.r === courante.id);
  if (!lien) return;
  const i = rubs.indexOf(courante), suivante = rubs[i + 1];
  const haut = courante.getBoundingClientRect().top + scrollY;
  const bas = suivante ? suivante.getBoundingClientRect().top + scrollY : haut + courante.offsetHeight;
  const avance = Math.max(0, Math.min(1, (repere - haut) / Math.max(1, bas - haut)));
  const liSuivant = suivante ? liens.find((a) => a.dataset.r === suivante.id) : null;
  const y0 = lien.parentElement.offsetTop + lien.offsetHeight / 2;
  const y1 = liSuivant ? liSuivant.parentElement.offsetTop + liSuivant.offsetHeight / 2 : y0;
  const y = y0 + (y1 - y0) * avance;
  $('bateau').style.top = (y - 12) + 'px';
  $('fait').style.height = (y + 10) + 'px';
}
addEventListener('scroll', placerBateau, { passive: true });
addEventListener('resize', placerBateau);



const qAdresse = new URLSearchParams(location.search).get('q');
if (qAdresse) champ.value = qAdresse;
dessiner();
if (location.hash) {
  const cible = document.getElementById(location.hash.slice(1));
  if (cible) setTimeout(() => cible.scrollIntoView({ block: 'center' }), 80);
}

  }

  class RdrFaq extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      this._tenter();
      if (!this._monte && !this._minuteur) this._minuteur = setTimeout(() => this._chercher(), 3500);
    }
    disconnectedCallback() { clearTimeout(this._minuteur); this._minuteur = null; if (this._obs) this._obs.disconnect(); }
    attributeChangedCallback() { this._tenter(); }
    _lang() {
      const l = this.getAttribute('lang') || (document.documentElement.getAttribute('lang') || '') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : 'fr');
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    _tenter(jeu) {
      if (this._monte || !this.isConnected) return;
      let D = jeu || null;
      if (!D) { try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; } }
      if (!D || !Array.isArray(D.questions) || !Array.isArray(D.rubriques) || !D.questions.length) {
        if (!this.firstChild) this.innerHTML = "<div class=\"rfq-attente\" aria-hidden=\"true\"><div class=\"rfq-sq-haut\"><div class=\"rfq-sq-trame\"><i class=\"rfq-sq-l rfq-sq-k\"></i><i class=\"rfq-sq-l rfq-sq-t\"></i><i class=\"rfq-sq-l rfq-sq-t rfq-sq-t2\"></i><i class=\"rfq-sq-l rfq-sq-p rfq-sq-p1\"></i><i class=\"rfq-sq-l rfq-sq-p\"></i><i class=\"rfq-sq-l rfq-sq-p rfq-sq-p3\"></i></div></div><div class=\"rfq-sq-trame rfq-sq-sec\"><i class=\"rfq-sq-l rfq-sq-k\"></i><i class=\"rfq-sq-l rfq-sq-t\"></i><i class=\"rfq-sq-l rfq-sq-p rfq-sq-p1\"></i><i class=\"rfq-sq-l rfq-sq-p\"></i><i class=\"rfq-sq-l rfq-sq-p rfq-sq-p3\"></i></div><div class=\"rfq-sq-trame rfq-sq-cartes\"><i class=\"rfq-sq-c\"></i><i class=\"rfq-sq-c\"></i><i class=\"rfq-sq-c\"></i></div><div class=\"rfq-sq-trame rfq-sq-sec\"><i class=\"rfq-sq-l rfq-sq-k\"></i><i class=\"rfq-sq-l rfq-sq-t\"></i><i class=\"rfq-sq-l rfq-sq-p rfq-sq-p1\"></i><i class=\"rfq-sq-l rfq-sq-p\"></i><i class=\"rfq-sq-l rfq-sq-p rfq-sq-p3\"></i></div></div>";
        return;
      }
      this._monte = true;
      clearTimeout(this._minuteur); this._minuteur = null;
      const en = this._lang() === 'en';
      this.innerHTML = '<div class="faq-page">' + PAGE + '</div>';
      if (en) { traduire(this); prefixerLiens(this); }
      try { demarrer(D); } catch (e) { console.error('[rdr-faq]', e); }
      if (en) {
        traduire(this); prefixerLiens(this);
        this._obs = new MutationObserver((ms) => ms.forEach((m) => {
          if (dansInfos(m.target)) return;
          if (m.type === 'characterData') { const n = m.target; if (n.parentElement && n.parentElement.id === 'ecrit') return; const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; return; }
          m.addedNodes.forEach((n) => { if (n.nodeType === 1) { traduire(n); prefixerLiens(n); } else if (n.nodeType === 3 && !(n.parentElement && n.parentElement.id === 'ecrit')) { const v = enAnglais(n.nodeValue); if (v != null && v !== n.nodeValue) n.nodeValue = v; } });
        }));
        this._obs.observe(this, { childList: true, subtree: true, characterData: true });
      }
    }
    _chercher() {
      this._minuteur = null;
      if (this._monte) return;
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang();
      rdrLire(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        if (j && Array.isArray(j.questions) && j.questions.length) return this._tenter(j);
        this._panne();
      }).catch(() => this._panne());
    }
    _panne() {
      if (this._monte) return;
      rdrPanne(this, this._lang() === 'en', () => { this._chercher(); });
    }
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
  customElements.define("rdr-faq", RdrFaq);
})();
})();
