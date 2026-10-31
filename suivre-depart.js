/* rdr-elements suivre-depart | source route-du-rhum 44dfe05 | rdr-suivre-depart.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["suivre-depart"]="44dfe05";performance.mark("rdr-elements:suivre-depart")}catch(e){}
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
      ranger: 'Ranger les dernières infos',
      deplier: 'Lire tout le message', replier: 'Réduire le message'
    },
    en: {
      region: 'Latest news', etiquette: 'Latest news', info: 'Update', vigilance: 'Caution', alerte: 'Alert',
      suite: 'Read more', onglet: 'new tab',
      pause: 'Pause the news ticker', reprendre: 'Resume the news ticker',
      prec: 'Previous update', suiv: 'Next update', sur: (i, n) => i + ' of ' + n,
      nouvelle: 'New update', nouvelleVigilance: 'Caution', nouvelleAlerte: 'Alert',
      ranger: 'Hide the latest news',
      deplier: 'Read the full message', replier: 'Shorten the message'
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
    ranger: '<path d="m18 15-6-6-6 6"/>',
    deplier: '<path d="m6 9 6 6 6-6"/>'
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
     
    P + '.rdi-btn[hidden],' + P + '.rdi-cmd[hidden]{display:none}' +
    P + '.rdi--deplie.rdi--seule .rdi-corps,' + P + '.rdi--deplie.rdi--pas .rdi-corps{display:block;-webkit-line-clamp:none;overflow:visible}' +
    P + '.rdi--deplie .rdi-deplier svg{transform:rotate(180deg)}' +
    P + '.rdi--coupe span.rdi-item{cursor:pointer}' +
     
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
      if (this._roCoupe) { this._roCoupe.disconnect(); this._roCoupe = null; }
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
        if (mode !== 'defile') cmd += '<button type="button" class="rdi-btn rdi-deplier" data-rdi-deplier aria-expanded="false" aria-label="' + esc(L.deplier) + '" hidden>' + svg(ICO.deplier) + '</button>';
        if (rangeable) cmd += '<button type="button" class="rdi-btn rdi-ranger" data-rdi-ranger aria-label="' + esc(L.ranger) + '">' + svg(ICO.ranger) + '</button>';
        if (cmd) cmd = '<div class="rdi-cmd"' + (mode === 'seule' && !rangeable ? ' hidden' : '') + '>' + cmd + '</div>';
        this._hote.innerHTML =
          '<section class="rdi rdi--' + (rouge ? 'alerte' : 'info') + ' rdi--' + mode + '" aria-label="' + esc(L.region) + '" data-nombre="' + vis.length + '">' +
            '<div class="rdi-etiq">' + svg(ICO.megaphone) + '<span class="rdi-etiq-txt">' + esc(L.etiquette) + '</span>' + (vis.length > 1 ? '<span class="rdi-nb" aria-hidden="true">' + vis.length + '</span>' : '') + '</div>' +
            '<div class="rdi-fenetre"><div class="rdi-piste"><ul class="rdi-liste">' + items + '</ul></div></div>' + cmd +
          '</section>';
        if (mode === 'defile') this._monterDefilement();
        else this._mesurerCoupe();
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

    

    _mesurerCoupe() {
      const mesure = () => {
        const bande = this._hote && this._hote.querySelector('.rdi');
        const b = bande && bande.querySelector('[data-rdi-deplier]');
        if (!bande || !b) return;
        if (bande.classList.contains('rdi--deplie')) { b.hidden = false; return; }
        const corps = bande.querySelector('.rdi-li:not([hidden]) .rdi-corps');
        const coupe = !!corps && corps.scrollHeight > corps.clientHeight + 1;
        b.hidden = !coupe;
        bande.classList.toggle('rdi--coupe', coupe);
         
        if (b.parentElement && b.parentElement.querySelectorAll('.rdi-btn').length === 1) b.parentElement.hidden = !coupe;
      };
      requestAnimationFrame(mesure);
      if (window.ResizeObserver && !this._roCoupe) { this._roCoupe = new window.ResizeObserver(() => mesure()); this._roCoupe.observe(this._hote); }
    }
    _deplier(ouvrir) {
      const bande = this._hote && this._hote.querySelector('.rdi');
      const b = bande && bande.querySelector('[data-rdi-deplier]');
      if (!bande || !b) return;
      const L = T[this._lang];
      const ouvert = ouvrir == null ? !bande.classList.contains('rdi--deplie') : ouvrir;
      bande.classList.toggle('rdi--deplie', ouvert);
      b.setAttribute('aria-expanded', String(ouvert));
      b.setAttribute('aria-label', ouvert ? L.replier : L.deplier);
      if (!ouvert) this._mesurerCoupe();
    }

    _clic(e) {
      const b = e.target && e.target.closest ? e.target.closest('.rdi-btn') : null;
      if (!b) {
         
        const t = e.target && e.target.closest ? e.target.closest('span.rdi-item') : null;
        const bande = t && t.closest('.rdi');
        if (bande && (bande.classList.contains('rdi--coupe') || bande.classList.contains('rdi--deplie'))) this._deplier();
        return;
      }
      const L = T[this._lang];
      if (b.hasAttribute('data-rdi-deplier')) {
        this._deplier();
      } else if (b.hasAttribute('data-rdi-ranger')) {
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
        this._deplier(false);
        const compte = this._hote.querySelector('.rdi-compte');
        if (compte) compte.innerHTML = '<span aria-hidden="true">' + (this._indice + 1) + ' / ' + lis.length + '</span><span class="rdi-vh">' + esc(L.sur(this._indice + 1, lis.length)) + '</span>';
      }
    }
  }

  customElements.define('rdr-dernieres-infos', RdrDernieresInfos);
})();
 
(function () {
  if (customElements.get("rdr-suivre-depart")) return;
  const CSS = "rdr-suivre-depart{display:block;width:var(--customElementWidth,100%);line-height:normal;text-align:left}\nrdr-suivre-depart .rsd-page{display:block}\nrdr-suivre-depart .rsd-attente{display:block;min-height:clamp(1400px,220svh,2000px);background:#F4F1E8}\nrdr-suivre-depart .rsd-sq-haut{display:flex;align-items:center;min-height:clamp(480px,calc(100svh - 175px),700px);background:#101A36}\nrdr-suivre-depart .rsd-sq-trame{box-sizing:border-box;width:100%;max-width:calc(1240px + 2 * clamp(18px,4vw,40px));margin:0 auto;padding:0 clamp(18px,4vw,40px)}\nrdr-suivre-depart .rsd-sq-l,rdr-suivre-depart .rsd-sq-c{position:relative;display:block;overflow:hidden}\nrdr-suivre-depart .rsd-sq-l{height:13px;border-radius:4px;background:rgba(255,255,255,.14)}\nrdr-suivre-depart .rsd-sq-k{width:120px;height:11px}\nrdr-suivre-depart .rsd-sq-t{width:min(600px,80%);height:clamp(30px,3.6vw,52px);margin-top:18px;border-radius:6px}\nrdr-suivre-depart .rsd-sq-t2{width:min(430px,60%);margin-top:12px}\nrdr-suivre-depart .rsd-sq-p{width:min(560px,88%);margin-top:14px}\nrdr-suivre-depart .rsd-sq-p1{margin-top:30px}\nrdr-suivre-depart .rsd-sq-p3{width:min(380px,62%)}\nrdr-suivre-depart .rsd-sq-sec{padding-top:clamp(44px,7vh,76px);padding-bottom:clamp(8px,2vh,20px)}\nrdr-suivre-depart .rsd-sq-sec .rsd-sq-l{background:rgba(14,17,29,.08)}\nrdr-suivre-depart .rsd-sq-sec .rsd-sq-t{width:min(520px,72%);height:clamp(26px,2.8vw,40px)}\nrdr-suivre-depart .rsd-sq-cartes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding-top:clamp(28px,5vh,52px)}\nrdr-suivre-depart .rsd-sq-c{height:clamp(150px,22vh,220px);border-radius:22px 6px 22px 6px;background:rgba(14,17,29,.06)}\nrdr-suivre-depart .rsd-sq-l::after,rdr-suivre-depart .rsd-sq-c::after{content:\"\";position:absolute;inset:0;transform:translateX(-100%);animation:rsd-sq-luire 1.6s ease-in-out infinite}\nrdr-suivre-depart .rsd-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}\nrdr-suivre-depart .rsd-sq-sec .rsd-sq-l::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\nrdr-suivre-depart .rsd-sq-c::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}\n@keyframes rsd-sq-luire{to{transform:translateX(100%)}}\n@media (max-width:750px){rdr-suivre-depart .rsd-sq-haut{min-height:clamp(620px,170vw,760px)}rdr-suivre-depart .rsd-sq-cartes{grid-template-columns:1fr}rdr-suivre-depart .rsd-sq-c:nth-child(n+3){display:none}}\n@media (prefers-reduced-motion:reduce){rdr-suivre-depart .rsd-sq-l::after,rdr-suivre-depart .rsd-sq-c::after{animation:none;display:none}}\nrdr-suivre-depart{--nuit:#0A1228;--nuit2:#101A36;--marine:#0E111D;--marine2:#16355D; --jaune:#FCF150;--jaune-m:#FCDD00;--teal:#5DBFC0;--bleu:#56BCF6;--violet:#8B86E0;--or:#F5BE41;--orange:#F19F39; --papier:#F4F1E8;--papier2:#ECE7D8;--encre:#0E111D; --t1:#0E111D;--t2:#3A4256;--t3:#646B7E;--filet:rgba(14,17,29,.1);--bord2:rgba(14,17,29,.18); --ombre-carte:0 1px 2px rgba(14,17,29,.04),0 14px 30px -22px rgba(14,17,29,.38); --st-ferme:#FF6B6B;--rouge-f:#B42F2B;--bleu-f:#1B6A9E; --c-terre:var(--or);--f-terre:#8A5A00; --c-mer:var(--teal);--f-mer:#00676E; --c-canape:var(--violet);--f-canape:#4F5BA5; --c-dispo:var(--bleu);--f-dispo:var(--bleu-f); --police:'Montserrat',system-ui,sans-serif;--titre:'Varien','Archivo Black',Impact,sans-serif;--contour:'VarienOutline','Varien',sans-serif; --largeur:1240px;--marge:clamp(18px,4vw,40px); --entete:175px;--colle:56px; --angle:3px 15px 3px 15px;--angle-p:3px 10px 3px 10px;--carte:28px 3px 16px 3px;--photo:28px 4px 18px 4px;--petite:14px 3px 10px 3px; --pad:clamp(56px,10vh,112px); --ease:cubic-bezier(.22,.8,.3,1);}\n@media (max-width:750px){\nrdr-suivre-depart{--entete:120px;--colle:60px;--marge:18px;--pad:60px}\n}\nrdr-suivre-depart .haut,rdr-suivre-depart .volet-tete,rdr-suivre-depart .direct{--t1:#fff;--t2:rgba(255,255,255,.78);--t3:rgba(255,255,255,.56);--filet:rgba(255,255,255,.14);color:#fff}\nrdr-suivre-depart *{box-sizing:border-box}\n@media (prefers-reduced-motion:reduce){\nrdr-suivre-depart *,rdr-suivre-depart *::before,rdr-suivre-depart *::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important}\n}\nrdr-suivre-depart{margin:0;background:var(--papier);color:var(--t1);font:16px/1.65 var(--police);-webkit-font-smoothing:antialiased;overflow-x:clip}\nrdr-suivre-depart img{display:block;max-width:100%}\nrdr-suivre-depart a{color:inherit}\nrdr-suivre-depart h1,rdr-suivre-depart h2,rdr-suivre-depart h3,rdr-suivre-depart h4,rdr-suivre-depart p,rdr-suivre-depart figure,rdr-suivre-depart ol,rdr-suivre-depart ul{margin:0}\nrdr-suivre-depart ol,rdr-suivre-depart ul{padding:0;list-style:none}\nrdr-suivre-depart button{font:inherit;color:inherit}\nrdr-suivre-depart [hidden]{display:none !important}\nrdr-suivre-depart :focus-visible{outline:3px solid var(--marine2);outline-offset:3px}\nrdr-suivre-depart .haut :focus-visible{outline-color:var(--jaune)}\nrdr-suivre-depart .trame{position:relative;width:100%;max-width:calc(var(--largeur) + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-suivre-depart .titre{font-family:var(--titre);font-style:italic;font-weight:400;text-transform:uppercase;line-height:1.04;letter-spacing:.002em}\nrdr-suivre-depart .ico{width:1em;height:1em;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\nrdr-suivre-depart .rsd-main>header,rdr-suivre-depart .rsd-main>section,rdr-suivre-depart .volet-tete{scroll-margin-top:16px}\nrdr-suivre-depart .emp{position:relative;border:2px dashed rgba(176,140,0,.6);border-radius:14px;background:repeating-linear-gradient(-45deg,rgba(252,221,0,.1) 0 10px,transparent 10px 20px)}\nrdr-suivre-depart .direct .emp{border-color:rgba(252,241,80,.55);background:repeating-linear-gradient(-45deg,rgba(252,241,80,.06) 0 10px,transparent 10px 20px)}\nrdr-suivre-depart .emp-tag{display:inline-flex;align-items:center;gap:6px;padding:3px 8px;border-radius:6px;background:var(--jaune);color:var(--marine);font:800 10px/1.2 var(--police);letter-spacing:.12em;text-transform:uppercase}\nrdr-suivre-depart .rsd-page.sans-emp .emp,rdr-suivre-depart .rsd-page.sans-emp .emp-tag{display:none !important}\nrdr-suivre-depart .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:46px;padding:10px 20px;border:2px solid currentColor;border-radius:var(--angle);background:transparent;color:inherit;font:800 14px/1.2 var(--police);text-decoration:none;cursor:pointer;transition:background .15s,color .15s,border-color .15s,transform .2s var(--ease)}\nrdr-suivre-depart .btn .ico{width:18px;height:18px;stroke-width:2.4;transition:transform .2s var(--ease),color .15s}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .btn:hover .ico{transform:translateX(3px)}}\nrdr-suivre-depart .btn--jaune{background:var(--jaune);border-color:var(--jaune);color:var(--marine)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .btn--jaune:hover{background:#fff;border-color:#fff}}\nrdr-suivre-depart .btn--clair{color:#fff;border-color:rgba(255,255,255,.4)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .btn--clair:hover{background:#fff;border-color:#fff;color:var(--marine)}}\nrdr-suivre-depart .btn--plein{background:var(--encre);border-color:var(--encre);color:#fff}\nrdr-suivre-depart .btn--plein .ico{color:var(--jaune)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .btn--plein:hover{background:var(--jaune);border-color:var(--jaune);color:var(--encre)}}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .btn--plein:hover .ico{color:var(--encre)}}\nrdr-suivre-depart .btn--ligne{color:var(--t1);border-color:var(--bord2)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .btn--ligne:hover{border-color:var(--t1);background:#fff}}\nrdr-suivre-depart .lien{display:inline-flex;align-items:center;gap:8px;font:800 12px/1.3 var(--police);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:var(--cf,var(--marine2));background:none;border:0;padding:0;cursor:pointer}\nrdr-suivre-depart .lien .ico{width:15px;height:15px;stroke-width:2.6;transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .lien:hover{text-decoration:underline;text-underline-offset:4px}}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .lien:hover .ico{transform:translateX(3px)}}\nrdr-suivre-depart .surtitre{display:flex;align-items:center;gap:12px;font:800 12.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--cf,var(--marine2))}\nrdr-suivre-depart .surtitre::before{content:'';flex:none;width:28px;height:5px;background:var(--c,var(--jaune-m));transform:skewX(-20deg)}\nrdr-suivre-depart .sec-titre{margin-top:12px;font-size:clamp(30px,min(3.6vw,6.4vh),52px);text-wrap:balance}\nrdr-suivre-depart .pic{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:11px;background:var(--c);color:var(--marine)}\nrdr-suivre-depart .pic .ico{width:21px;height:21px;stroke-width:2.1}\nrdr-suivre-depart .haut{position:relative;isolation:isolate;overflow:hidden;min-height:clamp(480px,calc(100svh - var(--entete) - var(--bandeau,0px)),700px);display:flex;flex-direction:column;justify-content:flex-end;padding:clamp(28px,5vh,56px) 0 clamp(22px,3.4vh,34px);background:var(--nuit2)}\nrdr-suivre-depart .haut-photo{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;object-position:62% 40%;filter:saturate(1.08) brightness(1.06);transform:scale(1.04);animation:rsd-zoom 16s cubic-bezier(.2,.6,.3,1) forwards}\n@keyframes rsd-zoom{to{transform:scale(1)}}\nrdr-suivre-depart .haut::before{content:'';position:absolute;inset:0;z-index:-1;background: linear-gradient(90deg,rgba(10,18,40,.8) 0%,rgba(10,18,40,.5) 36%,rgba(10,18,40,0) 66%), linear-gradient(0deg,rgba(10,18,40,.9) 0%,rgba(10,18,40,.35) 34%,rgba(10,18,40,0) 60%)}\nrdr-suivre-depart .haut-grille{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(330px,.8fr);gap:clamp(24px,4vw,64px);align-items:end}\nrdr-suivre-depart .fil{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;font:800 11.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--t2)}\nrdr-suivre-depart .fil b{color:var(--jaune)}\nrdr-suivre-depart .fil .barre{width:46px;height:6px;border-radius:3px;background:var(--jaune);margin-right:4px}\nrdr-suivre-depart .haut h1{margin-top:clamp(14px,2.2vh,22px);font-size:clamp(40px,min(5.6vw,10vh),84px);line-height:.98}\nrdr-suivre-depart .haut h1 span{display:block}\nrdr-suivre-depart .haut h1 .l2{font-family:var(--contour);color:var(--jaune)}\nrdr-suivre-depart .chapo{margin-top:clamp(12px,2vh,20px);max-width:56ch;color:var(--t2);font-size:clamp(15px,1.2vw,17.5px);line-height:1.6;font-weight:500;text-wrap:pretty}\nrdr-suivre-depart .chapo b{color:#fff}\nrdr-suivre-depart .compte{position:relative;container-type:inline-size;padding:clamp(18px,2.4vh,24px) clamp(18px,1.8vw,26px);border-radius:var(--carte);background:rgba(16,26,54,.62);border:1px solid rgba(255,255,255,.14);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 30px 60px -30px rgba(0,0,0,.6)}\nrdr-suivre-depart .compte::before{content:'';position:absolute;left:clamp(18px,1.8vw,26px);top:-3px;width:54px;height:6px;border-radius:3px;background:var(--jaune)}\nrdr-suivre-depart .compte-tete{font:800 11.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--t3)}\nrdr-suivre-depart .compte-chiffres{--n:8;--fit:calc((100cqi - 100px) / (var(--n) * .78));display:flex;align-items:flex-end;gap:clamp(8px,3cqi,14px);margin-top:10px;font-family:var(--titre);font-style:italic;color:#fff}\nrdr-suivre-depart .compte-chiffres .u{display:flex;align-items:baseline;gap:3px}\nrdr-suivre-depart .compte-chiffres b{display:inline-flex;font-weight:400;font-size:clamp(24px,min(var(--fit),7vh),54px);line-height:.9;color:var(--jaune)}\nrdr-suivre-depart .compte-chiffres .c{display:inline-block;width:.78em;text-align:center}\nrdr-suivre-depart .compte-chiffres i{font:800 12px var(--police);font-style:normal;color:var(--t2);text-transform:uppercase}\nrdr-suivre-depart .compte-quand{margin-top:12px;padding-top:12px;border-top:1px solid var(--filet);font-size:13.5px;line-height:1.5;color:var(--t2)}\nrdr-suivre-depart .compte-quand b{color:#fff}\nrdr-suivre-depart .compte-direct{display:inline-flex;align-items:center;gap:8px;margin-top:2px;padding:6px 12px;border-radius:6px;background:#E8423F;color:#fff;font:800 12px var(--police);letter-spacing:.14em;text-transform:uppercase}\nrdr-suivre-depart .compte-direct::before{content:'';width:9px;height:9px;border-radius:50%;background:#fff;animation:rsd-pouls 1.4s ease-in-out infinite}\n@keyframes rsd-pouls{50%{opacity:.25}}\nrdr-suivre-depart .compte-titre{margin-top:10px;font-size:clamp(26px,2.6vw,36px)}\nrdr-suivre-depart .compte-liens{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}\nrdr-suivre-depart .compte-liens .btn{min-height:42px;padding:8px 16px;font-size:13.5px}\nrdr-suivre-depart .acces{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(20px,3.4vh,34px)}\nrdr-suivre-depart .acces a{position:relative;display:flex;align-items:center;gap:14px;min-height:64px;padding:10px 16px 12px 12px;border-radius:var(--angle);border:1px solid rgba(255,255,255,.2);background:rgba(14,17,29,.88);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:inset 0 -4px 0 var(--c),0 16px 32px -20px rgba(0,0,0,.8);text-decoration:none;font:800 15.5px/1.25 var(--police);color:#fff;transition:background .2s,border-color .2s,transform .2s var(--ease)}\nrdr-suivre-depart .acces a .n{font:italic 400 18px/1 var(--titre);letter-spacing:.02em}\nrdr-suivre-depart .acces a > .ico{flex:none;margin-left:auto;width:20px;height:20px;stroke-width:2.6;color:var(--c);transition:transform .2s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .acces a:hover{background:rgba(31,41,70,.96);border-color:var(--c);transform:translateY(-2px)}}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .acces a:hover > .ico{transform:translateY(3px)}}\nrdr-suivre-depart .recit{background:var(--papier);padding:var(--pad) 0 clamp(36px,6vh,64px)}\nrdr-suivre-depart .recit-grille{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.1fr);gap:clamp(28px,5vw,80px);align-items:start}\nrdr-suivre-depart .exergue{position:sticky;top:calc(var(--colle) + 24px)}\nrdr-suivre-depart .exergue-texte{margin-top:16px;font:italic 400 clamp(26px,min(2.7vw,5vh),40px)/1.14 var(--titre);text-transform:uppercase;text-wrap:balance;color:var(--t1)}\nrdr-suivre-depart .exergue-texte em{font-style:inherit;padding:0 .06em;background:linear-gradient(transparent 56%,var(--jaune) 56% 90%,transparent 90%);-webkit-box-decoration-break:clone;box-decoration-break:clone}\nrdr-suivre-depart .recit-texte p{font-size:clamp(15.5px,1.15vw,17px);line-height:1.75;color:var(--t2);text-wrap:pretty}\nrdr-suivre-depart .recit-texte p + p{margin-top:16px}\nrdr-suivre-depart .recit-texte b{color:var(--t1);font-weight:700}\nrdr-suivre-depart .volets-sec{background:var(--papier);padding:clamp(36px,6vh,64px) 0 var(--pad)}\nrdr-suivre-depart .top-depart{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 28px}\nrdr-suivre-depart .top-depart h2{margin-top:12px;font-size:clamp(30px,min(3.6vw,6.4vh),54px);line-height:1;color:var(--t1)}\nrdr-suivre-depart .top-depart h2 .l2{display:block;font-family:var(--contour);color:var(--t1)}\nrdr-suivre-depart .top-depart > p{max-width:34ch;font-size:14.5px;line-height:1.55;color:var(--t3)}\nrdr-suivre-depart .volets{display:grid;grid-template-columns:minmax(0,var(--g1,1fr)) minmax(0,var(--g2,1fr)) minmax(0,var(--g3,1fr));column-gap:16px;margin-top:clamp(22px,3.6vh,34px);transition:grid-template-columns .6s var(--ease)}\nrdr-suivre-depart .volet-tete{grid-row:1;grid-column:var(--col,auto);position:relative;display:flex;align-items:flex-end;min-width:0;height:clamp(190px,27vh,270px);padding:0;border:0;border-radius:18px;overflow:hidden;background:var(--marine2);text-align:left;cursor:pointer;isolation:isolate;box-shadow:0 24px 44px -30px rgba(14,17,29,.65);transition:box-shadow .3s}\nrdr-suivre-depart .volet-tete[data-v=\"terre\"]{--c:var(--c-terre)}\nrdr-suivre-depart .volet-tete[data-v=\"mer\"]{--c:var(--c-mer)}\nrdr-suivre-depart .volet-tete[data-v=\"canape\"]{--c:var(--c-canape)}\nrdr-suivre-depart .volet-tete img{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;opacity:.66;transition:opacity .5s,transform 6s linear}\nrdr-suivre-depart .volet-tete::before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(14,17,29,0) 0%,rgba(14,17,29,.25) 32%,rgba(14,17,29,.82) 66%,rgba(14,17,29,.97) 100%)}\nrdr-suivre-depart .volet-tete::after{content:'';position:absolute;left:0;right:0;bottom:0;height:5px;background:var(--c);transition:height .3s}rdr-suivre-depart .volet-tete[aria-expanded=\"true\"] img{opacity:.92}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .volet-tete:hover img{opacity:.92}}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .volet-tete:hover img{transform:scale(1.05)}}rdr-suivre-depart .volet-tete[aria-expanded=\"true\"]::after{height:9px}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .volet-tete:hover::after{height:9px}}\nrdr-suivre-depart .volet-tete[aria-expanded=\"true\"]{box-shadow:0 0 0 3px var(--c),0 24px 44px -30px rgba(14,17,29,.65)}\nrdr-suivre-depart .vt-txt{display:flex;flex-direction:column;gap:8px;width:100%;padding:20px 22px 24px}\nrdr-suivre-depart .vt-ligne{display:flex;align-items:center;gap:12px}\nrdr-suivre-depart .vt-ligne .pic{width:44px;height:44px;border-radius:12px}\nrdr-suivre-depart .vt-ligne .pic .ico{width:23px;height:23px}\nrdr-suivre-depart .vt-titre{font:italic 400 clamp(22px,2vw,30px)/1.02 var(--titre);text-transform:uppercase}\nrdr-suivre-depart .vt-etat{display:grid;place-items:center;flex:none;width:36px;height:36px;margin-left:auto;border-radius:50%;background:rgba(255,255,255,.14);transition:transform .3s var(--ease),background .3s}\nrdr-suivre-depart .vt-etat .ico{width:20px;height:20px;stroke-width:2.6}\nrdr-suivre-depart .volet-tete[aria-expanded=\"true\"] .vt-etat{transform:rotate(180deg);background:var(--c);color:var(--marine)}\nrdr-suivre-depart .vt-resume{max-width:44ch;max-height:0;opacity:0;overflow:hidden;font-size:14px;line-height:1.5;color:var(--t2);transition:max-height .5s ease,opacity .4s .1s}rdr-suivre-depart .volet-tete:focus-visible .vt-resume,rdr-suivre-depart .volet-tete[aria-expanded=\"true\"] .vt-resume{max-height:66px;opacity:1}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .volet-tete:hover .vt-resume{max-height:66px;opacity:1}}\nrdr-suivre-depart .volet{position:relative;grid-row:2;grid-column:1 / -1;min-width:0;--c:var(--vc);--cf:var(--vf);--pv:clamp(22px,3vw,40px);margin-top:18px;padding:0 var(--pv) var(--pv);border-radius:var(--carte);background:color-mix(in srgb,var(--vc) 6%,#fff);border:1px solid color-mix(in srgb,var(--vc) 42%,transparent);border-left:7px solid var(--vc);box-shadow:var(--ombre-carte)}\nrdr-suivre-depart .volet:not(.ouvert){display:none}\nrdr-suivre-depart .volet.ouvert{animation:rsd-deploie .5s var(--ease)}\n@keyframes rsd-deploie{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}\nrdr-suivre-depart .volet[data-v=\"terre\"]{--vc:var(--c-terre);--vf:var(--f-terre)}\nrdr-suivre-depart .volet[data-v=\"mer\"]{--vc:var(--c-mer);--vf:var(--f-mer)}\nrdr-suivre-depart .volet[data-v=\"canape\"]{--vc:var(--c-canape);--vf:var(--f-canape)}\nrdr-suivre-depart .volet-bandeau{display:flex;align-items:center;gap:16px;margin:0 calc(-1 * var(--pv));padding:clamp(14px,2.2vh,20px) var(--pv);border-radius:21px 2px 0 0;background:color-mix(in srgb,var(--vc) 20%,#fff);border-bottom:3px solid var(--vc)}\nrdr-suivre-depart .volet-bandeau .pic{width:50px;height:50px;border-radius:13px;box-shadow:0 10px 20px -12px color-mix(in srgb,var(--vf) 70%,transparent)}\nrdr-suivre-depart .volet-bandeau .pic .ico{width:26px;height:26px}\nrdr-suivre-depart .vb-titre{font:italic 400 clamp(24px,2.3vw,34px)/1 var(--titre);text-transform:uppercase;color:var(--vf)}\nrdr-suivre-depart .vb-resume{margin-top:5px;font-size:14.5px;line-height:1.45;color:var(--t2)}\nrdr-suivre-depart .fiche{display:grid;grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr);gap:clamp(18px,3vw,44px);align-items:start;padding:clamp(24px,3.6vh,36px) 0;border-top:1px solid color-mix(in srgb,var(--vc) 34%,transparent)}\nrdr-suivre-depart .fiche:first-of-type{border-top:0}\nrdr-suivre-depart .fiche:last-child{padding-bottom:0}\nrdr-suivre-depart .fiche--seule{grid-template-columns:minmax(0,1fr)}\nrdr-suivre-depart .fiche-media{position:relative;border-radius:var(--photo);overflow:hidden;background:color-mix(in srgb,var(--vc) 25%,#fff);aspect-ratio:4/3;box-shadow:0 22px 40px -28px rgba(14,17,29,.55)}\nrdr-suivre-depart .fiche-media img{width:100%;height:100%;object-fit:cover}\nrdr-suivre-depart .fiche-media--portrait img{object-position:50% 46%}\nrdr-suivre-depart .fiche-affiche{display:flex;flex-direction:column;align-items:flex-start;gap:12px;justify-self:start;width:min(100%,400px,max(260px,calc((100svh - 230px) * .707)));text-decoration:none}\nrdr-suivre-depart .fiche-affiche-img{display:block;width:100%;aspect-ratio:2481/3508;border-radius:var(--photo);overflow:hidden;background:#1F4E77;box-shadow:0 26px 50px -26px rgba(14,17,29,.55),0 0 0 1px rgba(14,17,29,.1)}\nrdr-suivre-depart .fiche-affiche img{width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.22,.8,.3,1)}rdr-suivre-depart .fiche-affiche:focus-visible img{transform:scale(1.03)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .fiche-affiche:hover img{transform:scale(1.03)}}\nrdr-suivre-depart .fiche-affiche-voir{display:inline-flex;align-items:center;gap:7px;padding:8px 12px;border-radius:var(--angle-p);background:var(--encre);color:#fff;font:800 12px/1.2 var(--police);letter-spacing:.06em;text-transform:uppercase}\nrdr-suivre-depart .fiche-affiche-voir .ico{width:15px;height:15px;stroke-width:2.4;color:var(--jaune);transition:transform .2s}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .fiche-affiche:hover .fiche-affiche-voir .ico{transform:translate(2px,-2px)}}\nrdr-suivre-depart .fiche-affiche:focus-visible{outline:3px solid var(--marine2);outline-offset:4px;border-radius:var(--angle-p)}\nrdr-suivre-depart .vh{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nrdr-suivre-depart .badge{display:inline-flex;align-self:flex-start;padding:5px 10px;border-radius:6px;background:var(--jaune);color:var(--marine);font:800 10.5px/1.2 var(--police);letter-spacing:.12em;text-transform:uppercase}\nrdr-suivre-depart .fiche h3{margin-top:10px;font:italic 400 clamp(22px,2vw,30px)/1.06 var(--titre);text-transform:uppercase;text-wrap:balance;color:var(--t1)}\nrdr-suivre-depart .fiche-texte{margin-top:12px}\nrdr-suivre-depart .fiche-texte p{font-size:15.5px;line-height:1.65;color:var(--t2);text-wrap:pretty}\nrdr-suivre-depart .fiche-texte p + p{margin-top:10px}\nrdr-suivre-depart .fiche-texte b{color:var(--t1);font-weight:700}\nrdr-suivre-depart .qr{display:grid;gap:6px;margin-top:18px}\nrdr-suivre-depart .qr li{display:grid;grid-template-columns:42px minmax(0,1fr);gap:14px;align-items:center;padding:12px 14px;border-radius:var(--petite);background:color-mix(in srgb,var(--vc) 15%,#fff)}\nrdr-suivre-depart .qr .p{display:grid;place-items:center;width:42px;height:42px;margin:0;border-radius:11px;background:#fff;color:var(--vf);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--vc) 65%,transparent)}\nrdr-suivre-depart .qr .p .ico{width:21px;height:21px}\nrdr-suivre-depart .qr b{display:block;font:800 11.5px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--vf)}\nrdr-suivre-depart .qr span{display:block;margin-top:3px;font-size:15px;line-height:1.5;color:var(--t1);font-weight:600;text-wrap:pretty}\nrdr-suivre-depart .fiche-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 22px;margin-top:18px}\nrdr-suivre-depart .aussi{display:flex;align-items:center;gap:14px;margin-top:12px;padding:14px 16px;border-radius:var(--petite);border:1.5px dashed color-mix(in srgb,var(--vc) 75%,transparent);background:#fff;font-size:14.5px;line-height:1.5;color:var(--t2)}\nrdr-suivre-depart .aussi > .ico{width:22px;height:22px;color:var(--vf);flex:none}\nrdr-suivre-depart .aussi b{color:var(--t1)}\nrdr-suivre-depart .aussi .lien{margin-left:auto;flex:none}\nrdr-suivre-depart .complement{margin-top:22px;padding:clamp(18px,2.2vw,26px);border-radius:var(--carte);background:#fff;border:1px solid color-mix(in srgb,var(--vc) 42%,transparent);box-shadow:var(--ombre-carte)}\nrdr-suivre-depart .complement-tete{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px}\nrdr-suivre-depart .complement-tete h4{font:800 13px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--vf)}\nrdr-suivre-depart .complement-tete .heure{display:inline-flex;align-items:baseline;gap:10px;font-size:14px;font-weight:700;color:var(--t2)}\nrdr-suivre-depart .complement-tete .heure b{font:italic 400 22px/1 var(--titre);color:var(--vf);white-space:nowrap}\nrdr-suivre-depart .mer-zones{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:16px}\nrdr-suivre-depart .mer-zone{padding:16px 18px;border-radius:16px 3px 12px 3px;background:var(--papier);border:1px solid var(--filet)}\nrdr-suivre-depart .mer-zone-tete{display:flex;align-items:center;gap:12px}\nrdr-suivre-depart .mer-zone-role{font:800 10.5px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase}\nrdr-suivre-depart .mer-zone--plais .mer-zone-role{color:var(--bleu-f)}\nrdr-suivre-depart .mer-zone--course .mer-zone-role{color:var(--rouge-f)}\nrdr-suivre-depart .mer-zone h5{margin:2px 0 0;font-size:15px;font-weight:800;line-height:1.3;color:var(--t1)}\nrdr-suivre-depart .mer-zone ul{margin-top:10px;display:grid;gap:6px}\nrdr-suivre-depart .mer-zone li{display:grid;grid-template-columns:16px minmax(0,1fr);gap:8px;font-size:14px;line-height:1.5;color:var(--t2)}\nrdr-suivre-depart .mer-zone li .ico{width:15px;height:15px;margin-top:3px;color:var(--bleu-f)}\nrdr-suivre-depart .mer-zone--course li .ico{color:var(--rouge-f)}\nrdr-suivre-depart .mer-bas{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;margin-top:12px}\nrdr-suivre-depart .interdits{padding:16px 18px;border-radius:16px 3px 12px 3px;background:rgba(255,107,107,.1);border:1px solid rgba(232,66,63,.3)}\nrdr-suivre-depart .interdits h5{display:flex;align-items:center;gap:8px;margin:0;font:800 11.5px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--rouge-f)}\nrdr-suivre-depart .interdits h5 .ico{width:16px;height:16px}\nrdr-suivre-depart .interdits ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 14px;margin-top:10px}\nrdr-suivre-depart .interdits li{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:var(--t1)}\nrdr-suivre-depart .interdits li::before{content:'';flex:none;width:7px;height:7px;border-radius:2px;background:var(--st-ferme);transform:rotate(45deg)}\nrdr-suivre-depart .bon{display:grid;gap:8px}\nrdr-suivre-depart .bon li{display:grid;grid-template-columns:38px minmax(0,1fr);gap:12px;align-items:center;padding:10px 12px;border-radius:var(--petite);background:color-mix(in srgb,var(--vc) 15%,#fff)}\nrdr-suivre-depart .bon .p{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:#fff;color:var(--vf);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--vc) 65%,transparent)}\nrdr-suivre-depart .bon .p .ico{width:19px;height:19px}\nrdr-suivre-depart .bon b{display:block;font-size:14px;line-height:1.35;color:var(--t1)}\nrdr-suivre-depart .bon span{display:block;font-size:13px;line-height:1.45;color:var(--t2)}\nrdr-suivre-depart .complement-pied{display:flex;flex-wrap:wrap;align-items:center;gap:10px 20px;margin-top:14px}\nrdr-suivre-depart .complement-pied small{font-size:12.5px;line-height:1.5;color:var(--t3)}\nrdr-suivre-depart .complement-pied small a{color:var(--t2)}\nrdr-suivre-depart .chez{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(14px,1.8vw,24px);margin-top:clamp(20px,3vh,28px);align-items:stretch}\nrdr-suivre-depart .direct{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:clamp(320px,48vh,460px);border-radius:var(--photo);overflow:hidden;background:#1B2440;isolation:isolate;text-decoration:none;box-shadow:0 26px 50px -30px rgba(14,17,29,.6)}\nrdr-suivre-depart .direct img{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .direct:hover img{transform:scale(1.03)}}\nrdr-suivre-depart .direct::before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(0deg,rgba(10,18,40,.95) 0%,rgba(10,18,40,.4) 58%,rgba(10,18,40,.1) 100%)}\nrdr-suivre-depart .direct-jeu{position:absolute;left:50%;top:38%;display:grid;place-items:center;width:clamp(64px,7vw,86px);height:clamp(64px,7vw,86px);border-radius:50%;background:var(--jaune);color:var(--marine);transform:translate(-50%,-50%);box-shadow:0 0 0 10px rgba(252,241,80,.18);transition:transform .25s var(--ease)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .direct:hover .direct-jeu{transform:translate(-50%,-50%) scale(1.06)}}\nrdr-suivre-depart .direct-jeu svg{width:42%;height:42%;margin-left:6%;fill:currentColor}\nrdr-suivre-depart .direct-texte{display:block;padding:clamp(20px,2.4vw,30px)}\nrdr-suivre-depart .direct-badge{display:inline-flex;align-items:center;gap:8px;padding:5px 10px;border-radius:6px;background:var(--c-canape);color:var(--marine);font:800 11px/1.2 var(--police);letter-spacing:.14em;text-transform:uppercase}\nrdr-suivre-depart .direct-badge.live{background:#E8423F;color:#fff}\nrdr-suivre-depart .direct-badge.live::before{content:'';width:8px;height:8px;border-radius:50%;background:#fff;animation:rsd-pouls 1.4s ease-in-out infinite}\nrdr-suivre-depart .direct h4{display:block;margin-top:10px;font:italic 400 clamp(22px,2.2vw,32px)/1.05 var(--titre);text-transform:uppercase}\nrdr-suivre-depart .direct-p{display:block;margin-top:8px;color:var(--t2);font-size:15px;line-height:1.55}\nrdr-suivre-depart .direct .emp{display:block;margin-top:12px;padding:8px 12px;font-size:12.5px;color:var(--t2)}\nrdr-suivre-depart .rdv{display:grid;gap:10px;align-content:start}\nrdr-suivre-depart .rdv-item{display:grid;grid-template-columns:46px minmax(0,1fr);gap:14px;align-items:start;padding:16px;border-radius:16px 3px 12px 3px;background:color-mix(in srgb,var(--vc) 15%,#fff)}\nrdr-suivre-depart .rdv-item .p{display:grid;place-items:center;width:46px;height:46px;border-radius:12px;background:#fff;color:var(--vf);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--vc) 65%,transparent)}\nrdr-suivre-depart .rdv-item .p .ico{width:22px;height:22px}\nrdr-suivre-depart .rdv-item h4{font-size:15.5px;font-weight:800;line-height:1.3;color:var(--t1)}\nrdr-suivre-depart .rdv-item p{margin-top:4px;font-size:14.5px;line-height:1.55;color:var(--t2)}\nrdr-suivre-depart .rdv-item p b{color:var(--t1)}\nrdr-suivre-depart .rdv-liens{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}\nrdr-suivre-depart .rdv-liens a{display:inline-flex;align-items:center;gap:8px;min-height:38px;padding:6px 12px 6px 8px;border-radius:var(--angle-p);border:1px solid var(--bord2);background:#fff;color:var(--t1);text-decoration:none;font-size:13px;font-weight:700;transition:border-color .2s,background .2s}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .rdv-liens a:hover{border-color:var(--t1)}}\nrdr-suivre-depart .rdv-liens img{width:20px;height:20px;filter:brightness(0);opacity:.86}\nrdr-suivre-depart .rdv-liens .ico{width:16px;height:16px;color:var(--vf,var(--t2))}\nrdr-suivre-depart .rdv-item .emp{margin-top:10px;padding:6px 10px;font-size:12.5px;color:var(--t2)}\nrdr-suivre-depart .carte{position:relative;background:var(--papier2);padding:var(--pad) 0 clamp(36px,6vh,64px)}\nrdr-suivre-depart .carte-tete{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px 24px;padding-bottom:clamp(18px,3vh,26px)}\nrdr-suivre-depart .carte-tete h2{margin-top:12px;font-size:clamp(26px,min(2.8vw,5.4vh),40px);color:var(--t1)}\nrdr-suivre-depart .carte-tete h2:focus{outline:none}\nrdr-suivre-depart .carte-tete .note{margin-top:8px;max-width:60ch;font-size:14px;line-height:1.5;color:var(--t3)}\nrdr-suivre-depart .puces{display:flex;flex-wrap:wrap;gap:8px}\nrdr-suivre-depart .puces button{--c:var(--encre);--cf:var(--t1);display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:8px 16px;border-radius:var(--angle-p);border:1.5px solid var(--bord2);background:#fff;color:var(--t1);font:800 13px/1 var(--police);cursor:pointer;transition:background .2s,border-color .2s,color .2s}\nrdr-suivre-depart .puces button .ico{width:16px;height:16px;color:var(--cf)}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .puces button:hover{border-color:var(--c)}}\nrdr-suivre-depart .puces button[aria-pressed=\"true\"]{background:color-mix(in srgb,var(--c) 22%,#fff);border-color:var(--c)}\nrdr-suivre-depart .puces button[data-cadre=\"tout\"][aria-pressed=\"true\"]{background:var(--encre);color:#fff}\nrdr-suivre-depart .puces button[data-cadre=\"tout\"][aria-pressed=\"true\"] .ico{color:var(--jaune)}\nrdr-suivre-depart .cadre-boite{position:relative;width:100%;max-width:calc(1600px + 2 * var(--marge));margin:0 auto;padding:0 var(--marge)}\nrdr-suivre-depart .cadre{position:relative;height:clamp(440px,74vh,780px);background:#20344F;border-radius:20px 4px 16px 4px;overflow:hidden;isolation:isolate;box-shadow:0 0 0 1px rgba(14,17,29,.12),0 30px 60px -36px rgba(14,17,29,.55)}\nrdr-suivre-depart .filet{position:absolute;z-index:3;width:clamp(56px,6vw,88px);height:6px;border-radius:3px;background:var(--fc);transform:skewX(-20deg);pointer-events:none}\nrdr-suivre-depart .filet--haut{--fc:var(--c-terre);top:-3px;left:calc(var(--marge) + clamp(22px,2.4vw,34px))}\nrdr-suivre-depart .filet--bas{--fc:var(--c-mer);bottom:-3px;right:calc(var(--marge) + clamp(22px,2.4vw,34px))}\nrdr-suivre-depart .cadre village-map{display:block;width:100%;height:100%}\nrdr-suivre-depart .cadre .vm,rdr-suivre-depart .cadre .vm.suit-ecran{height:100% !important;min-height:0 !important;max-height:100% !important}\nrdr-suivre-depart .cadre #vmGestes,rdr-suivre-depart .cadre #vmGVoile,rdr-suivre-depart .cadre #vmGTrou,rdr-suivre-depart .cadre #vmGMain{display:none !important}\nrdr-suivre-depart .cadre-attente{position:absolute;inset:0;display:grid;place-items:center;color:rgba(255,255,255,.6);font:700 13px var(--police);letter-spacing:.1em;text-transform:uppercase;pointer-events:none}\nrdr-suivre-depart .legende{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(16px,3vw,48px);margin-top:clamp(18px,3vh,26px)}\nrdr-suivre-depart .leg-groupe h3{font:800 11.5px/1.3 var(--police);letter-spacing:.16em;text-transform:uppercase;color:var(--lc,var(--t3))}\nrdr-suivre-depart .leg-liste{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:10px}\nrdr-suivre-depart .leg-liste li{display:flex;align-items:center;gap:9px;font-size:13.5px;font-weight:600;color:var(--t2)}\nrdr-suivre-depart .pastille{flex:none;width:14px;height:14px;border-radius:50%;background:var(--pc);box-shadow:0 0 0 3px rgba(14,17,29,.07),inset 0 0 0 1px rgba(14,17,29,.18)}\nrdr-suivre-depart .leg-zone{flex:none;width:26px;height:14px;border-radius:3px}\nrdr-suivre-depart .leg-zone--plais{background:rgba(86,188,246,.32);border:2px solid #56BCF6}\nrdr-suivre-depart .leg-zone--course{background:repeating-linear-gradient(-45deg,rgba(255,107,107,.75) 0 2px,transparent 2px 6px);border:2px dashed #FF6B6B}\nrdr-suivre-depart .leg-bouee{flex:none;width:14px;height:14px;border-radius:50%;background:#E8423F;border:2px solid #fff;box-shadow:0 0 0 1px rgba(14,17,29,.25)}\nrdr-suivre-depart .leg-card{flex:none;width:14px;height:14px;border-radius:50%;background:linear-gradient(#FCDD00 0 33%,#111 33% 66%,#FCDD00 66%);border:1.5px solid #111}\nrdr-suivre-depart .leg-neutre{flex:none;width:16px;height:16px;border-radius:50%;border:2px dashed var(--t2)}\nrdr-suivre-depart .leg-limite{flex:none;width:26px;height:0;border-top:3px dashed #D9B800}\nrdr-suivre-depart .leg-source{margin-top:10px;font-size:12px;line-height:1.5;color:var(--t3)}\nrdr-suivre-depart .sites{margin-top:clamp(18px,3vh,26px);border-top:1px solid var(--filet)}\nrdr-suivre-depart .sites summary{display:flex;align-items:center;justify-content:space-between;color:var(--t1);gap:16px;min-height:52px;padding:10px 0;cursor:pointer;list-style:none;font:800 14px/1.3 var(--police)}\nrdr-suivre-depart .sites summary::-webkit-details-marker{display:none}\nrdr-suivre-depart .sites summary .ico{width:20px;height:20px;transition:transform .25s var(--ease)}\nrdr-suivre-depart .sites[open] summary .ico{transform:rotate(180deg)}\nrdr-suivre-depart .sites-grille{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px clamp(14px,2vw,28px);padding:4px 0 18px}\nrdr-suivre-depart .sites-grille h4{display:flex;align-items:center;gap:8px;font:800 11px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--t2)}\nrdr-suivre-depart .sites-grille ul{margin-top:8px;display:grid;gap:2px}\nrdr-suivre-depart .sites-grille button{display:block;width:100%;padding:7px 0;border:0;border-bottom:1px solid var(--filet);background:none;color:var(--t1);text-align:left;font:600 14px/1.35 var(--police);cursor:pointer}@media (hover:hover) and (pointer:fine){rdr-suivre-depart .sites-grille button:hover{color:var(--marine2);text-decoration:underline;text-underline-offset:3px}}\nrdr-suivre-depart .sites-grille button small{display:block;font-size:12px;font-weight:500;color:var(--t3)}\nrdr-suivre-depart .carte-pied{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;margin-top:clamp(14px,2.4vh,22px)}\nrdr-suivre-depart .carte-pied p{font-size:13.5px;color:var(--t3);line-height:1.5}\nrdr-suivre-depart .dispositif{--c:var(--c-dispo);--cf:var(--f-dispo);background:var(--papier);padding:var(--pad) 0}\nrdr-suivre-depart .encart{position:relative;padding:clamp(24px,3.4vw,48px);border-radius:var(--carte);background:linear-gradient(160deg,color-mix(in srgb,var(--c-dispo) 16%,#fff) 0%,#fff 62%);border:1px solid color-mix(in srgb,var(--c-dispo) 42%,transparent);border-left:7px solid var(--c-dispo);box-shadow:var(--ombre-carte);overflow:hidden;isolation:isolate}\nrdr-suivre-depart .encart::before{content:'';position:absolute;right:-140px;top:-120px;width:560px;aspect-ratio:1584/1080;background:var(--c-dispo);-webkit-mask:var(--damier) no-repeat center/contain;mask:var(--damier) no-repeat center/contain;opacity:.12;transform:rotate(-8deg);z-index:-1}\nrdr-suivre-depart .encart-tete{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:12px 24px}\nrdr-suivre-depart .encart h2{margin-top:12px;font-size:clamp(26px,min(3vw,5.6vh),44px);text-wrap:balance;max-width:20ch;color:var(--t1)}\nrdr-suivre-depart .encart-sous{margin-top:10px;font-size:15.5px;line-height:1.55;color:var(--t2)}\nrdr-suivre-depart .encart > .emp-tag{position:absolute;right:clamp(24px,3.4vw,48px);top:clamp(24px,3.4vw,48px)}\nrdr-suivre-depart .reperes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:clamp(20px,3vh,28px)}\nrdr-suivre-depart .repere{padding:14px 16px;border-radius:var(--petite);background:color-mix(in srgb,var(--c-dispo) 13%,#fff)}\nrdr-suivre-depart .repere b{display:block;font:italic 400 clamp(30px,2.8vw,42px)/1 var(--titre);color:var(--f-dispo);white-space:nowrap}\nrdr-suivre-depart .repere span{display:block;margin-top:6px;font-size:13.5px;line-height:1.4;color:var(--t2)}\nrdr-suivre-depart .poles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(12px,1.4vw,18px);margin-top:clamp(14px,2vh,18px)}\nrdr-suivre-depart .pole{position:relative;padding:clamp(18px,1.8vw,24px);border-radius:var(--carte);background:#fff;border:1px solid var(--filet);box-shadow:var(--ombre-carte)}\nrdr-suivre-depart .pole::before{content:'';position:absolute;left:clamp(18px,1.8vw,24px);top:-3px;width:42px;height:6px;border-radius:3px;background:var(--c-dispo)}\nrdr-suivre-depart .pole-tete{display:flex;align-items:center;gap:12px}\nrdr-suivre-depart .pole-tete .n{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:11px;background:var(--c-dispo);color:var(--marine);font:italic 400 18px/1 var(--titre)}\nrdr-suivre-depart .pole h3{font:italic 400 clamp(19px,1.6vw,23px)/1.05 var(--titre);text-transform:uppercase;color:var(--t1)}\nrdr-suivre-depart .pole ul{display:grid;gap:10px;margin-top:14px}\nrdr-suivre-depart .pole li{display:grid;grid-template-columns:34px minmax(0,1fr);gap:10px;align-items:start;font-size:14px;line-height:1.5;color:var(--t2)}\nrdr-suivre-depart .pole li .p{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:color-mix(in srgb,var(--c-dispo) 15%,#fff);color:var(--f-dispo)}\nrdr-suivre-depart .pole li .p .ico{width:18px;height:18px}\nrdr-suivre-depart .pole li b{color:var(--t1)}\nrdr-suivre-depart .flux{margin-top:16px;padding-top:14px;border-top:1px solid var(--filet)}\nrdr-suivre-depart .flux h4{font:800 11px/1.3 var(--police);letter-spacing:.14em;text-transform:uppercase;color:var(--f-dispo)}\nrdr-suivre-depart .flux ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 14px;margin-top:10px;counter-reset:flux}\nrdr-suivre-depart .flux li{display:flex;align-items:center;gap:8px;font-size:12.5px;line-height:1.35;font-weight:600;color:var(--t2);counter-increment:flux}\nrdr-suivre-depart .flux li::before{content:counter(flux);flex:none;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:color-mix(in srgb,var(--c-dispo) 16%,#fff);font:800 10.5px var(--police);color:var(--f-dispo)}\nrdr-suivre-depart .flux li .ico{width:16px;height:16px;color:var(--f-dispo)}\nrdr-suivre-depart .questions{background:var(--papier2);color:var(--t1);padding:var(--pad) 0}\nrdr-suivre-depart .q-liste{margin-top:clamp(24px,4vh,36px);display:grid;gap:12px;max-width:980px}\nrdr-suivre-depart .q{border-radius:16px;background:#fff;box-shadow:0 1px 0 rgba(14,17,29,.06),0 14px 30px -24px rgba(14,17,29,.35);border-left:4px solid var(--qc,#5DBFC0)}\nrdr-suivre-depart .q h3{margin:0}\nrdr-suivre-depart .q button{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:64px;padding:16px 22px;border:0;background:none;text-align:left;cursor:pointer;font:800 16px/1.35 var(--police);color:var(--t1)}\nrdr-suivre-depart .q button .rond{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:50%;background:var(--papier);color:var(--t2);transition:transform .25s var(--ease),background .2s}\nrdr-suivre-depart .q button .rond .ico{width:18px;height:18px}\nrdr-suivre-depart .q button[aria-expanded=\"true\"] .rond{transform:rotate(180deg);background:var(--encre);color:#fff}\nrdr-suivre-depart .q-rep{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s var(--ease)}\nrdr-suivre-depart .q-rep > div{overflow:hidden}\nrdr-suivre-depart .q.ouvert .q-rep{grid-template-rows:1fr}\nrdr-suivre-depart .q-rep .in{padding:0 22px 20px;font-size:15px;line-height:1.65;color:var(--t2)}\nrdr-suivre-depart .q-rep .in p + p,rdr-suivre-depart .q-rep .in p + ul,rdr-suivre-depart .q-rep .in ul + p{margin-top:10px}\nrdr-suivre-depart .q-rep .in ul{padding-left:20px;list-style:disc}\nrdr-suivre-depart .q-rep .in li{margin:4px 0}\nrdr-suivre-depart .q-rep .in b{color:var(--t1)}\nrdr-suivre-depart .q-rep .in a{color:var(--marine2);font-weight:700}\nrdr-suivre-depart .q-rep .in a.q-lien{color:#fff}\nrdr-suivre-depart .q-lien{display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:9px 14px;border-radius:var(--angle-p);background:var(--encre);color:#fff;text-decoration:none;font:800 13px var(--police)}\nrdr-suivre-depart .q-lien .ico{width:14px;height:14px;color:var(--jaune)}\nrdr-suivre-depart .questions .tout{margin-top:22px}\nrdr-suivre-depart .apercu-pastille{display:inline-flex;align-items:center;gap:8px;margin-bottom:14px;padding:6px 12px;border-radius:6px;background:var(--jaune);color:var(--marine);font:800 11px/1.3 var(--police);letter-spacing:.1em;text-transform:uppercase}\nrdr-suivre-depart .apercu-pastille::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--marine)}\nrdr-suivre-depart .attente{margin-top:clamp(18px,3vh,28px);max-width:58ch}\nrdr-suivre-depart .attente-texte{margin-top:12px;font-size:clamp(15.5px,1.25vw,18px);line-height:1.6;font-weight:600;color:#fff;text-wrap:pretty}\nrdr-suivre-depart .attente-liens{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}\nrdr-suivre-depart .attente-liens .btn{min-height:44px;padding:9px 18px;font-size:14px}\nrdr-suivre-depart .haut--attente{min-height:clamp(480px,calc(100svh - var(--entete) - var(--bandeau,0px)),760px)}\n@media (max-height:820px) and (min-width:751px){\nrdr-suivre-depart .haut h1{font-size:clamp(40px,min(5vw,9.4vh),76px)}\nrdr-suivre-depart .volet-tete{height:clamp(170px,25vh,220px)}\nrdr-suivre-depart .fiche-media{aspect-ratio:16/11}\nrdr-suivre-depart .direct{min-height:clamp(300px,46vh,400px)}\nrdr-suivre-depart .cadre{height:clamp(420px,70vh,780px)}\n}\n@media (max-width:1000px) and (min-width:751px){\nrdr-suivre-depart .acces{grid-template-columns:repeat(3,minmax(0,1fr))}\n}\n@media (min-width:1101px){\nrdr-suivre-depart .fiche-media,rdr-suivre-depart .fiche-affiche{position:sticky;top:calc(var(--colle) + 24px)}\nrdr-suivre-depart .fiche-media.fiche-media--portrait{aspect-ratio:3/4;width:min(100%,calc((100svh - var(--colle) - 72px) * .75))}\nrdr-suivre-depart .fiche-media.fiche-media--portrait img{object-position:50% 50%}\n}\n@media (max-width:1100px){\nrdr-suivre-depart .reperes{grid-template-columns:repeat(2,minmax(0,1fr))}\nrdr-suivre-depart .poles{grid-template-columns:1fr}\nrdr-suivre-depart .sites-grille{grid-template-columns:repeat(2,minmax(0,1fr))}\nrdr-suivre-depart .fiche{grid-template-columns:minmax(0,1fr)}\nrdr-suivre-depart .fiche-media{aspect-ratio:16/8}\n}\n@media (max-width:750px){\nrdr-suivre-depart .haut{min-height:auto;padding-top:clamp(56px,10vh,96px)}\nrdr-suivre-depart .fil span:last-child{display:none}\nrdr-suivre-depart .haut::before{background:linear-gradient(0deg,rgba(10,18,40,.98) 0%,rgba(10,18,40,.82) 48%,rgba(10,18,40,.2) 80%,rgba(10,18,40,0) 100%)}\nrdr-suivre-depart .haut-photo{object-position:70% 30%;height:62%;bottom:auto}\nrdr-suivre-depart .haut-grille{grid-template-columns:1fr;gap:18px}\nrdr-suivre-depart .haut h1{font-size:clamp(34px,10.6vw,46px)}\nrdr-suivre-depart .chapo{font-size:15px}\nrdr-suivre-depart .compte{padding:14px 16px 12px}\nrdr-suivre-depart .compte-quand{margin-top:8px;padding-top:8px;font-size:13px}\nrdr-suivre-depart .compte-chiffres b{font-size:clamp(22px,var(--fit),34px)}\nrdr-suivre-depart .acces{grid-template-columns:1fr 1fr;gap:8px;margin-top:16px}\nrdr-suivre-depart .acces a:first-child{grid-column:1 / -1}\nrdr-suivre-depart .acces a{min-height:58px;padding:8px 10px 10px 8px;font-size:14px;gap:10px}\nrdr-suivre-depart .acces a .pic{width:34px;height:34px;border-radius:10px}\nrdr-suivre-depart .acces a .pic .ico{width:18px;height:18px}\nrdr-suivre-depart .acces a .n{font-size:16px}\nrdr-suivre-depart .acces a > .ico{display:none}\nrdr-suivre-depart .recit-grille{grid-template-columns:1fr;gap:20px}\nrdr-suivre-depart .exergue{position:static}\nrdr-suivre-depart .exergue-texte{font-size:24px}\nrdr-suivre-depart .volets{grid-template-columns:minmax(0,1fr);row-gap:10px}\nrdr-suivre-depart .volet-tete,rdr-suivre-depart .volet-tete[data-v]{grid-row:auto;grid-column:1;height:120px}\nrdr-suivre-depart .vt-txt{padding:14px 16px 16px}\nrdr-suivre-depart .vt-ligne .pic{width:38px;height:38px;border-radius:10px}\nrdr-suivre-depart .vt-ligne .pic .ico{width:20px;height:20px}\nrdr-suivre-depart .vt-resume{display:none}\nrdr-suivre-depart .volet-tete[aria-expanded=\"true\"]{border-radius:18px 18px 3px 3px}\nrdr-suivre-depart .volet{--pv:16px;grid-row:auto;margin-top:-10px;padding:0 16px 20px;border-radius:3px 3px 16px 3px;border-left-width:5px}\nrdr-suivre-depart .volet-bandeau{display:none}\nrdr-suivre-depart .fiche:first-of-type{padding-top:20px}\nrdr-suivre-depart .fiche-media{aspect-ratio:16/10}\nrdr-suivre-depart .qr li{grid-template-columns:36px minmax(0,1fr);padding:10px 12px;gap:12px}\nrdr-suivre-depart .qr .p{width:36px;height:36px}\nrdr-suivre-depart .aussi{flex-wrap:wrap}\nrdr-suivre-depart .aussi .lien{margin-left:36px}\nrdr-suivre-depart .mer-zones,rdr-suivre-depart .mer-bas,rdr-suivre-depart .chez{grid-template-columns:1fr}\nrdr-suivre-depart .interdits ul{grid-template-columns:1fr}\nrdr-suivre-depart .direct{min-height:390px}\nrdr-suivre-depart .direct-jeu{top:25%}\nrdr-suivre-depart .carte-tete{align-items:flex-start;flex-direction:column}\nrdr-suivre-depart .cadre{height:min(64svh,540px);border-radius:16px 4px 12px 4px}\nrdr-suivre-depart .legende{grid-template-columns:1fr}\nrdr-suivre-depart .sites-grille{grid-template-columns:1fr}\nrdr-suivre-depart .reperes{grid-template-columns:1fr 1fr}\nrdr-suivre-depart .encart{border-left-width:5px}\nrdr-suivre-depart .encart > .emp-tag{position:static;margin-bottom:12px}\nrdr-suivre-depart .q button{padding:14px 16px;font-size:15px}\nrdr-suivre-depart .q-rep .in{padding:0 16px 18px}\n}\nrdr-suivre-depart .emp,rdr-suivre-depart .emp-tag{display:none !important}";
  const GABARIT = "<div class=\"rsd-page\"><div id=\"sd-bandeau\"></div><div id=\"sd-page\" class=\"rsd-main\"></div></div>";
  const SQUELETTE = "<div class=\"rsd-attente\" aria-hidden=\"true\"><div class=\"rsd-sq-haut\"><div class=\"rsd-sq-trame\"><i class=\"rsd-sq-l rsd-sq-k\"></i><i class=\"rsd-sq-l rsd-sq-t\"></i><i class=\"rsd-sq-l rsd-sq-t rsd-sq-t2\"></i><i class=\"rsd-sq-l rsd-sq-p rsd-sq-p1\"></i><i class=\"rsd-sq-l rsd-sq-p\"></i><i class=\"rsd-sq-l rsd-sq-p rsd-sq-p3\"></i></div></div><div class=\"rsd-sq-trame rsd-sq-sec\"><i class=\"rsd-sq-l rsd-sq-k\"></i><i class=\"rsd-sq-l rsd-sq-t\"></i><i class=\"rsd-sq-l rsd-sq-p rsd-sq-p1\"></i><i class=\"rsd-sq-l rsd-sq-p\"></i><i class=\"rsd-sq-l rsd-sq-p rsd-sq-p3\"></i></div><div class=\"rsd-sq-trame rsd-sq-cartes\"><i class=\"rsd-sq-c\"></i><i class=\"rsd-sq-c\"></i><i class=\"rsd-sq-c\"></i></div><div class=\"rsd-sq-trame rsd-sq-sec\"><i class=\"rsd-sq-l rsd-sq-k\"></i><i class=\"rsd-sq-l rsd-sq-t\"></i><i class=\"rsd-sq-l rsd-sq-p rsd-sq-p1\"></i><i class=\"rsd-sq-l rsd-sq-p\"></i><i class=\"rsd-sq-l rsd-sq-p rsd-sq-p3\"></i></div></div>";
  const SOURCE = 'https://www.routedurhum.com/_functions/suivreDepart';
  const SOURCE_CARTE = 'https://www.routedurhum.com/_functions/suivreDepartCarte';
  const CARTE_CDN = "https://cdn.jsdelivr.net/gh/WapitixAgency/rdr-elements@";
  const CARTE_PAGES = "https://wapitixagency.github.io/rdr-elements/p/";
  const CARTE_SECOURS = "https://cdn.jsdelivr.net/gh/WapitixAgency/rdr-elements@main/carte.js";

  function poserStyle() {
    if (document.getElementById('rdr-suivre-depart-css')) return;
    const st = document.createElement('style');
    st.id = 'rdr-suivre-depart-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

   
  function bordDuHaut(hote) {
    for (const y of [2, 30]) {
      let n = document.elementFromPoint(innerWidth / 2, y);
      while (n && n !== document.body && n !== document.documentElement) {
        if (hote.contains(n)) break;
        const p = getComputedStyle(n).position;
        if (p === 'fixed' || p === 'sticky') { const b = n.getBoundingClientRect().bottom; if (b > 0 && b < 220) return Math.round(b); break; }
        n = n.parentElement;
      }
    }
    return 0;
  }

   
  function prefixerLiens(racine) {
    if (!racine || racine.nodeType !== 1) return;
    [racine, ...racine.querySelectorAll('a[href^="/"]')].forEach((a) => {
      if (!a.matches || !a.matches('a[href^="/"]')) return;
      const h = a.getAttribute('href');
      if (h === '/en' || h.startsWith('/en/') || h.startsWith('//')) return;
      a.setAttribute('href', '/en' + (h === '/' ? '' : h.replace(/^\/classement(?=[/?#]|$)/, '/ranking')));  
    });
  }

  


  function demarrer(D, HOTE, FOND, __minuteurs, __bord, __sources, LANG) {
    const document = {
      getElementById: (id) => HOTE.querySelector('#' + window.CSS.escape(String(id))),
      querySelector: (s) => HOTE.querySelector(s),
      querySelectorAll: (s) => HOTE.querySelectorAll(s),
      createElement: (t) => window.document.createElement(t),
      documentElement: FOND,
      body: FOND
    };
    const setInterval = (f, ms) => { const id = window.setInterval(f, ms); __minuteurs.push(id); return id; };
    const PAGE = D.page, MEDIAS = D.medias, LIENS = D.liens;
 
const PIC = {
  

  voilier: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  jumelles: '<path d="M10 10h4"/><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/><path d="M 22 16 L 2 16"/><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"/><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/>',
  canape: '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M12 4v9"/>',
  'monitor-play': '<path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/>',
  'film': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',
  'binoculars': '<path d="M10 10h4"/><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/><path d="M 22 16 L 2 16"/><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"/><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/>',
  'tv': '<path d="m17 2-5 5-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  'share-2': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  'gamepad-2': '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
  'helicopter': '<path d="M11 17v4"/><path d="M14 3v8a2 2 0 0 0 2 2h5.865"/><path d="M17 17v4"/><path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z"/><path d="M2 10v5"/><path d="M6 3h16"/><path d="M7 21h14"/><path d="M8 13H2"/>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
  'ship': '<path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  'radio-tower': '<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',
  'radio': '<path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/>',
  'life-buoy': '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/>',
  'calendar-days': '<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'footprints': '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
  'dog': '<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',
  'trash-2': '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  'leaf': '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'map': '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  'clock-3': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',
  'map-pinned': '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>',
  'sailboat': '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  'ban': '<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'flag': '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
  'video': '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  'camera': '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',
  'plane': '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  'satellite': '<path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/><path d="M16.5 7.5 19 5"/><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/><path d="M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>',
  'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  'car': '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  'bus': '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
  'backpack': '<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 10h8"/><path d="M8 18h8"/><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>',
  'bike': '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
  'euro': '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
  'ticket': '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  'file-text': '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  'languages': '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'play': '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
  'hand': '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
};
const ico = (k, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (PIC[k] || '') + '</svg>';
 
const PICTO = { terre: 'jumelles', mer: 'voilier', canape: 'canape' };
const pic = (id) => '<span class="pic">' + ico(PICTO[id]) + '</span>';

 
 












































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
 










const M = 'https://static.wixstatic.com/media/';

const img = (id, w, h) => M + id + '/v1/fill/w_' + w + ',h_' + h + ',al_c,q_82,enc_auto/' + id.split('~')[0] + '.jpg';


 
const Q = new URLSearchParams(location.search);
const ANCRES = { terre: 'terre', mer: 'mer', canape: 'canape', 'chez-soi': 'canape' };
const depuisAncre = ANCRES[(location.hash || '').slice(1)];
 
const ETAT = {
  moment: ['attente', 'direct', 'parti', 'rediffusion'].includes(Q.get('moment')) ? Q.get('moment') : 'avant',
  emp: Q.get('emplacements') !== 'non', infos: Q.get('infos'),
  volet: depuisAncre || (['terre', 'mer', 'canape'].includes(Q.get('volet')) ? Q.get('volet') : (Q.get('volet') === 'aucun' ? null : '')),
  rendu: ''
};


const typoTexte = (s) => s.replace(/« /g, '« ').replace(/ »/g, ' »').replace(/ ([:;?!])/g, ' $1')
  .replace(/(\d) (\d{3})(?!\d)/g, '$1 $2').replace(/(\d) h(?= \d)/g, '$1 h').replace(/(\d h) (\d)/g, '$1 $2').replace(/(\d) h\b/g, '$1 h');
const typo = (s) => String(s).replace(/(<[^>]*>)|([^<]+)/g, (m, balise, texte) => balise || typoTexte(texte));
const esc = (s) => typo(String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])));
const riche = (s) => typo(s);
const ext = (l) => /^https?:/.test(l) ? ' target="_blank" rel="noopener"' : '';







const CAL = rdrInstants(D.calendrier);
const I = { ouverture: CAL['ouverture-suivre-depart'], direct: CAL['direct-youtube'], depart: CAL.depart, rediffusion: CAL['rediffusion-depart'], fin: CAL['fin-suivre-depart'], cartographie: CAL['ouverture-cartographie'], classement: CAL['ouverture-classement'] };
const HORL = rdrHorloge(location.search, D.calendrier);
const maintenant = HORL.maintenant;
const APERCU = { passe: D.apercu === true, pastille: D.apercu === true || HORL.simulee, simulee: HORL.simulee };
 
const momentDe = (t) => {
  if (!APERCU.passe && !(I.ouverture <= t)) return 'attente';
  if (I.fin <= t) return 'rediffusion';
  if (I.depart <= t) return 'parti';
  if (I.direct <= t) return 'direct';
  return 'avant';
};



const directEtat = (t) => {
  if (I.fin <= t) return 'replay';
  const debut = Math.min(I.direct >= 0 ? I.direct : Infinity, I.depart >= 0 ? I.depart : Infinity);
  if (!(debut <= t)) return 'avant';
  const finDirect = I.rediffusion >= 0 ? I.rediffusion : I.depart >= 0 ? I.depart + 7200000 : Infinity;
  return t < finDirect ? 'live' : 'replay';
};
 
function dateEnLettres(t) {
  const U = PAGE.interface, d = new Date(t + rdrDecalageParis(t)), h = d.getUTCHours(), mm = String(d.getUTCMinutes()).padStart(2, '0');
  const heure = (mm === '00' ? U.heurePleine : U.heureMinutes).replace('{h}', String(h)).replace('{h12}', String(h % 12 || 12)).replace('{mm}', mm).replace('{ap}', h < 12 ? 'am' : 'pm');
  return U.date.replace('{jour}', U.jours[d.getUTCDay()]).replace('{n}', String(d.getUTCDate())).replace('{mois}', U.mois[d.getUTCMonth()]).replace('{heure}', heure);
}
function heureSimulee(t) {
  const d = new Date(t + rdrDecalageParis(t)), z = (n) => String(n).padStart(2, '0');
  return PAGE.interface.jours[d.getUTCDay()].slice(0, 3) + '. ' + d.getUTCDate() + ' ' + PAGE.interface.mois[d.getUTCMonth()] + ', ' + z(d.getUTCHours()) + ':' + z(d.getUTCMinutes()) + ':' + z(d.getUTCSeconds());
}
const emp = (t) => '<span class="emp-tag">' + esc(t) + '</span>';

 
function haut(etat) {
  const H = PAGE.haut, A = H.attente, U = PAGE.interface;
  const attente = etat === 'attente';
  return '<header class="haut' + (attente ? ' haut--attente' : '') + '" id="haut">' +
    '<img class="haut-photo" src="' + img(MEDIAS.haut, 1920, 900) + '" alt="' + esc(H.alt) + '" fetchpriority="high">' +
    '<div class="trame haut-grille">' +
      '<div class="haut-texte">' +
        (APERCU.pastille ? '<p class="apercu-pastille" id="apercuPastille">' + esc(U.apercu) + '</p>' : '') +
        '<p class="fil"><span class="barre"></span><b>' + esc(H.fil[0]) + '</b><span>' + esc(H.fil[1]) + '</span><span>' + esc(H.fil[2]) + '</span></p>' +
        '<h1 class="titre"><span class="l1">' + esc(H.l1) + '</span><span class="l2">' + esc(H.l2) + '</span></h1>' +
        '<p class="chapo">' + riche(H.chapo) + '</p>' +
        (attente ? '<div class="attente"><span class="badge">' + esc(A.badge) + '</span>' +
          '<p class="attente-texte">' + esc(A.texte.replace('{date}', Number.isFinite(I.ouverture) ? dateEnLettres(I.ouverture) : A.sansDate)) + '</p>' +
          '<div class="attente-liens">' + A.liens.map(([x, l], i) => '<a class="btn ' + (i ? 'btn--clair' : 'btn--jaune') + '" href="' + l + '">' + esc(x) + ico('arrow-right') + '</a>').join('') + '</div></div>' : '') +
      '</div>' +
      '<aside class="compte" id="compte" aria-label="' + esc(H.compte.tete) + '"></aside>' +
    '</div>' +
    (attente ? '' : '<nav class="trame" aria-label="' + esc(U.acces) + '"><div class="acces">' +
      H.acces.map(([id, n, t]) => '<a href="#' + id + '" data-aller="' + id + '" style="--c:var(--c-' + (id === 'dispositif' ? 'dispo' : id) + ')">' + (PICTO[id] ? pic(id) : '<span class="pic n">' + n + '</span>') + esc(t) + ico('chevron-down') + '</a>').join('') +
    '</div></nav>') +
  '</header>';
}





const decouper = (ms) => {
  const s = Math.floor(Math.max(0, ms) / 1000), deux = (n) => String(n).padStart(2, '0');
  return [String(Math.floor(s / 86400)), deux(Math.floor(s % 86400 / 3600)), deux(Math.floor(s % 3600 / 60)), deux(s % 60)];
};
const cases = (v) => v.split('').map((c) => '<span class="c">' + c + '</span>').join('');
function chiffres(parts, libelle) {
  const U = PAGE.haut.compte.u;
  return '<div class="compte-chiffres" role="timer" aria-live="off" aria-label="' + esc(libelle) + '" style="--n:' + (parts[0].length + 6) + '">' +
    parts.map((v, i) => '<span class="u"><b>' + cases(v) + '</b><i>' + U[i] + '</i></span>').join('') + '</div>';
}
 
function majPastille(t) {
  const p = document.getElementById('apercuPastille');
  if (!p) return;
  const U = PAGE.interface, v = U.apercu + ' · ' + (APERCU.simulee ? U.horloge + ' · ' + heureSimulee(t) : U.apercuAvant);
  if (p.textContent !== v) p.textContent = v;
}
function compte() {
  const C = PAGE.haut.compte, el = document.getElementById('compte');
  if (!el) return;
  const t = maintenant(), etat = momentDe(t);
  majPastille(t);
  const avant = etat === 'avant' || etat === 'attente', enCourse = etat === 'parti' || etat === 'rediffusion';
  const parts = !Number.isFinite(I.depart) ? null : avant ? decouper(I.depart - t) : enCourse ? decouper(t - I.depart) : null;
  

  const de = directEtat(t), revoir = etat === 'rediffusion' || (enCourse && de === 'replay'), enDirect = enCourse && !revoir && de === 'live';
  const ouverts = enCourse ? C.liens.filter(([, , k]) => !k || I[k] <= t) : [];
  const cle = etat + ':' + de + ':' + ouverts.map((l) => l[1]).join(',') + (parts ? ':' + parts[0].length : '');
  if (el.dataset.cle === cle) {
    if (parts) el.querySelectorAll('.compte-chiffres b').forEach((b, i) => { if (b.textContent !== parts[i]) b.innerHTML = cases(parts[i]); });
    return;
  }
  let html;
  if (avant) {
    html = '<p class="compte-tete">' + esc(C.tete) + '</p>' + (parts ? chiffres(parts, C.tete) : '') +
      '<p class="compte-quand">' + riche(C.quand) + '</p>';
  } else if (etat === 'direct') {
    html = '<span class="compte-direct">' + esc(C.direct) + '</span>' +
      '<p class="compte-titre titre">' + esc(C.directTitre) + '</p>' +
      '<p class="compte-quand">' + riche(C.directTexte) + '</p>' +
      '<div class="compte-liens"><a class="btn btn--jaune" href="#canape" data-aller="canape">' + esc(C.directBtn) + ico('arrow-right') + '</a></div>';
  } else {
    

    const liens = (revoir ? [[C.rediffusionBtn, LIENS.rediffusion || LIENS.youtube]] : enDirect ? [[C.directBtn, '#canape']] : []).concat(ouverts);
    const tous = ouverts.length === C.liens.length;
    const texte = revoir ? (tous ? C.rediffusionTexte : C.rediffusionTexteSeul) : (tous ? C.partiTexte : C.partiTexteDirect);
    html = '<p class="compte-tete">' + esc(C.ecoule) + '</p>' + (parts ? chiffres(parts, C.ecoule) : '') +
      '<p class="compte-quand"><b>' + esc(C.parti) + '</b> ' + esc(texte) + '</p>' +
      (liens.length ? '<div class="compte-liens">' + liens.map(([x, l], i) => '<a class="btn ' + (i ? 'btn--clair' : 'btn--jaune') + '" href="' + l + '"' + ext(l) + (l.charAt(0) === '#' ? ' data-aller="' + l.slice(1) + '"' : '') + '>' + esc(x) + ico(/^https?:/.test(l) ? 'arrow-up-right' : 'arrow-right') + '</a>').join('') + '</div>' : '');
  }
  el.innerHTML = html;
  el.dataset.cle = cle;
  el.setAttribute('aria-label', enCourse ? C.ecoule : etat === 'direct' ? C.directTitre : C.tete);
  brancherAller(el);
  majBarre();
}
function recit() {
  const R = PAGE.recit;
  return '<section class="recit" aria-label="' + esc(PAGE.interface.recit) + '"><div class="trame recit-grille">' +
    '<div class="exergue"><p class="surtitre" style="--c:var(--jaune)">' + esc(R.surtitre) + '</p><p class="exergue-texte">' + riche(R.exergue) + '</p></div>' +
    '<div class="recit-texte">' + R.p.map((p) => '<p>' + riche(p) + '</p>').join('') + '</div>' +
  '</div></section>';
}
function qr(liste) {
  return '<ul class="qr">' + liste.map(([p, b, t]) => '<li><span class="p">' + ico(p) + '</span><span><b>' + esc(b) + '</b><span>' + esc(t) + '</span></span></li>').join('') + '</ul>';
}
function lienCarte([texte, cible, cadre]) {
  if (cible === '#carte') return '<a class="lien" href="#carte" data-carte="' + esc(cadre) + '">' + esc(texte) + ico('arrow-right') + '</a>';
  return '<a class="lien" href="' + cible + '"' + ext(cible) + '>' + esc(texte) + ico(/^https?:/.test(cible) ? 'arrow-up-right' : 'arrow-right') + '</a>';
}
 
const pleine = (id) => M + id;
function media(F) {
   
  if (F.photo) return '<figure class="fiche-media' + (F.portrait ? ' fiche-media--portrait' : '') + '"><img src="' + (F.portrait ? img(MEDIAS[F.photo], 900, 1200) : img(MEDIAS[F.photo], 960, 720)) + '" alt="' + esc(F.alt) + '" loading="lazy"></figure>';
  if (F.affiche) return '<a class="fiche-affiche" href="' + pleine(MEDIAS[F.affiche]) + '" target="_blank" rel="noopener"><span class="fiche-affiche-img"><img src="' + M + MEDIAS[F.affiche] + '/v1/fill/w_800,h_1131,al_c,q_90,enc_auto/affiche.jpg" alt="' + esc(F.alt) + '" loading="lazy" width="800" height="1131"></span><span class="fiche-affiche-voir">' + esc(PAGE.interface.voirAffiche) + ico('arrow-up-right') + '<span class="vh"> (' + esc(PAGE.interface.onglet) + ')</span></span></a>';
  return '';
}
function fiche(F) {
  const corps = (F.badge ? '<span class="badge">' + esc(F.badge) + '</span>' : '') +
    '<h3>' + esc(F.titre) + '</h3>' +
    '<div class="fiche-texte">' + F.texte.map((p) => '<p>' + riche(p) + '</p>').join('') + '</div>' +
    (F.qr ? qr(F.qr) : '') +
    (F.aussi ? '<p class="aussi">' + ico('monitor-play') + '<span>' + riche(F.aussi.texte) + '</span><button type="button" class="lien" data-carte="' + F.aussi.carte + '">' + esc(F.aussi.lien) + ico('arrow-right') + '</button></p>' : '') +
    (F.docs ? '<div class="rdv-liens">' + F.docs.map(([t, l]) => '<a href="' + (l === 'affiche' ? pleine(MEDIAS[F.affiche]) : l) + '" target="_blank" rel="noopener">' + ico('file-text') + esc(t) + '</a>').join('') + '</div>' : '') +
    ((F.boutons || F.liens || F.actions) ? '<div class="fiche-actions">' +
      (F.boutons || []).map(([t, l]) => '<a class="btn btn--plein" href="' + l + '"' + ext(l) + '>' + esc(t) + ico(/^https?:/.test(l) ? 'arrow-up-right' : 'arrow-right') + '</a>').join('') +
      (F.actions || []).map(lienCarte).join('') +
      (F.liens || []).map(([t, poi]) => '<a class="lien" href="#carte" data-carte="' + poi + '">' + esc(t) + ico('arrow-right') + '</a>').join('') +
    '</div>' : '');
  const m = media(F);
  return '<article class="fiche' + (m ? '' : ' fiche--seule') + '" id="fiche-' + F.id + '">' + (m ? m + '<div>' + corps + '</div>' : '<div>' + corps + '</div>') + '</article>';
}
function volets() {
  const T = PAGE.top;
  const tete = (V, i) => '<button type="button" class="volet-tete" id="' + V.id + '" data-v="' + V.id + '" style="--col:' + (i + 1) + '" aria-expanded="' + (ETAT.volet === V.id) + '" aria-controls="volet-' + V.id + '">' +
    '<img src="' + img(MEDIAS[V.photo], 900, 560) + '" alt="" loading="lazy">' +
    '<span class="vt-txt"><span class="vt-ligne">' + pic(V.id) + '<span class="vt-titre">' + esc(V.titre) + '</span><span class="vt-etat">' + ico('chevron-down') + '</span></span>' +
    '<span class="vt-resume">' + esc(V.resume) + '</span></span></button>';
  const contenu = { terre: () => PAGE.terre.map(fiche).join(''), mer: () => PAGE.mer.map(fiche).join('') + arrete(), canape: chezSoi };
   
  const panneau = (V) => '<div class="volet' + (ETAT.volet === V.id ? ' ouvert' : '') + '" id="volet-' + V.id + '" data-v="' + V.id + '" role="region" aria-labelledby="' + V.id + '"' + (ETAT.volet === V.id ? '' : ' inert') + '>' +
    '<div class="volet-bandeau" style="--c:var(--vc)">' + pic(V.id) + '<div><p class="vb-titre">' + esc(V.titre) + '</p><p class="vb-resume">' + esc(V.resume) + '</p></div></div>' + contenu[V.id]() + '</div>';
  return '<section class="volets-sec" aria-labelledby="top-titre"><div class="trame">' +
    '<div class="top-depart"><div><p class="surtitre">' + esc(T.surtitre) + '</p><h2 class="titre" id="top-titre"><span>' + esc(T.l1) + '</span> <span class="l2">' + esc(T.l2) + '</span></h2></div><p>' + esc(T.aide) + '</p></div>' +
    '<div class="volets" id="volets">' + PAGE.volets.map((V, i) => tete(V, i) + panneau(V)).join('') + '</div>' +
  '</div></section>';
}
function arrete() {
  const A = PAGE.arrete;
  return '<div class="complement"><div class="complement-tete"><h4>' + esc(A.titre) + '</h4><span class="heure"><b>' + esc(A.heure[0]) + '</b>' + esc(A.heure[1]) + '</span></div>' +
    '<div class="mer-zones">' + A.zones.map((z) => '<div class="mer-zone mer-zone--' + z.id + '"><div class="mer-zone-tete"><span class="leg-zone leg-zone--' + z.id + '"></span><div><p class="mer-zone-role">' + esc(z.role) + '</p><h5>' + esc(z.nom) + '</h5></div></div>' +
      '<ul>' + z.qui.map((q) => '<li>' + ico(z.id === 'plais' ? 'sailboat' : 'ban') + '<span>' + esc(q) + '</span></li>').join('') + '</ul></div>').join('') + '</div>' +
    '<div class="mer-bas"><div class="interdits"><h5>' + ico('ban') + esc(A.interdits.titre) + '</h5><ul>' + A.interdits.liste.map((x) => '<li>' + esc(x) + '</li>').join('') + '</ul></div>' +
      '<ul class="bon">' + A.bon.map(([p, t, d]) => '<li><span class="p">' + ico(p) + '</span><span><b>' + esc(t) + '</b><span>' + esc(d) + '</span></span></li>').join('') + '</ul></div>' +
    '<div class="complement-pied"><a class="btn btn--plein" href="#carte" data-carte="mer">' + esc(A.voir) + ico('arrow-right') + '</a><small><a href="' + A.source[1] + '" target="_blank" rel="noopener">' + esc(A.source[0]) + '</a></small></div>' +
  '</div>';
}
function chezSoi() {
  const C = PAGE.canape, D = C.direct;
  const de = directEtat(maintenant()), live = de === 'live', replay = de === 'replay';
  

  const lien = live ? LIENS.direct || LIENS.youtube.replace(/\/+$/, '') + '/live' : replay ? LIENS.rediffusion || LIENS.youtube : LIENS.youtube;
  return '<div class="chez">' +
    '<a class="direct" href="' + lien + '" target="_blank" rel="noopener"><img src="' + img(MEDIAS.direct, 1100, 760) + '" alt="' + esc(D.alt) + '" loading="lazy">' +
      '<span class="direct-jeu" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span>' +
      '<span class="direct-texte"><span class="direct-badge' + (live ? ' live' : '') + '">' + esc(live ? D.badgeLive : replay ? D.badgeReplay : D.badge) + '</span><h4>' + esc(D.titre) + '</h4><span class="direct-p">' + esc(replay ? D.texteReplay : D.texte) + '</span>' +
      '<span class="emp"><span class="emp-tag">' + esc(PAGE.interface.emplacement) + '</span> ' + esc(D.emp) + '</span></span></a>' +
    '<ul class="rdv">' + C.rdv.map((r) => '<li class="rdv-item"><span class="p">' + ico(r.pic) + '</span><div><h4>' + esc(r.t) + '</h4><p>' + riche(r.d) + '</p>' +
      (r.liens ? '<div class="rdv-liens">' + r.liens.map(([t, l, k]) => '<a href="' + l + '"' + (/^https?:/.test(l) ? ' target="_blank" rel="noopener"' : '') + '>' + (MEDIAS.reseaux[k] ? '<img src="' + MEDIAS.reseaux[k] + '" alt="" width="20" height="20">' : ico(k)) + esc(t) + '</a>').join('') + '</div>' : '') +
      (r.emp ? '<div class="emp"><span class="emp-tag">' + esc(PAGE.interface.emplacement) + '</span> ' + esc(r.emp) + '</div>' : '') +
    '</div></li>').join('') + '</ul>' +
  '</div>';
}
function carte() {
  const S = PAGE.carte;
  const leg = { plais: 'leg-zone leg-zone--plais', course: 'leg-zone leg-zone--course', limite: 'leg-limite', bouee: 'leg-bouee', card: 'leg-card', neutre: 'leg-neutre' };
  return '<section class="carte" id="carte" aria-labelledby="carte-titre">' +
    '<div class="trame carte-tete"><div><p class="surtitre">' + esc(S.surtitre) + '</p><h2 class="titre" id="carte-titre" tabindex="-1">' + esc(S.titre) + '</h2><p class="note">' + esc(S.note) + '</p></div>' +
      '</div>' +
    '<div class="cadre-boite"><div class="cadre" id="cadre"><p class="cadre-attente">' + esc(S.attente) + '</p></div>' +
    '<span class="filet filet--haut" aria-hidden="true"></span><span class="filet filet--bas" aria-hidden="true"></span></div>' +
    '<div class="trame">' +
      '<div class="legende">' +
        '<div class="leg-groupe" style="--lc:var(--f-terre)"><h3>' + esc(S.terre) + '</h3><ul class="leg-liste">' + S.statuts.map(([, c, t]) => '<li><span class="pastille" style="--pc:' + c + '"></span>' + esc(t) + '</li>').join('') + '</ul></div>' +
        '<div class="leg-groupe" style="--lc:var(--f-mer)"><h3>' + esc(S.mer) + '</h3><ul class="leg-liste">' + S.merLeg.map(([k, t]) => '<li><span class="' + leg[k] + '"></span>' + esc(t) + '</li>').join('') + '</ul>' +
          '<p class="leg-source">' + esc(S.source) + '</p></div>' +
      '</div>' +
      '<details class="sites" id="sites"><summary><span>' + esc(S.sites) + ' <span id="sitesN"></span></span>' + ico('chevron-down') + '</summary><div class="sites-grille" id="sitesGrille"></div></details>' +
      '<div class="carte-pied"><p>' + esc(S.pied) + '</p></div>' +
    '</div>' +
  '</section>';
}
function dispositif() {
  const D = PAGE.dispositif;
  if (D.masque) return '';
  return '<section class="dispositif" id="dispositif" aria-labelledby="dispositif-titre"><div class="trame"><div class="encart">' +
    emp(D.emp) +
    '<div class="encart-tete"><div><p class="surtitre">' + esc(D.surtitre) + '</p><h2 class="titre" id="dispositif-titre" tabindex="-1">' + esc(D.titre) + '</h2><p class="encart-sous">' + esc(D.sous) + '</p></div></div>' +
    '<div class="reperes">' + D.reperes.map(([v, l]) => '<p class="repere"><b>' + esc(v) + '</b><span>' + esc(l) + '</span></p>').join('') + '</div>' +
    '<div class="poles">' + D.poles.map((p) => '<article class="pole"><div class="pole-tete"><span class="n">' + p.n + '</span><h3>' + esc(p.t) + '</h3></div>' +
      '<ul>' + p.items.map(([k, t]) => '<li><span class="p">' + ico(k) + '</span><span>' + riche(t) + '</span></li>').join('') + '</ul>' +
      (p.flux ? '<div class="flux"><h4>' + esc(p.flux.titre) + '</h4><ol>' + p.flux.etapes.map(([k, t]) => '<li>' + ico(k) + esc(t) + '</li>').join('') + '</ol></div>' : '') +
    '</article>').join('') + '</div>' +
  '</div></div></section>';
}
function questions() {
  const S = PAGE.questions;
  return '<section class="questions" id="questions" aria-labelledby="questions-titre"><div class="trame">' +
    '<p class="surtitre">' + esc(S.surtitre) + '</p><h2 class="titre sec-titre" id="questions-titre">' + esc(S.titre) + '</h2>' +
    '<div class="q-liste">' + S.items.map((q, i) => '<div class="q' + (i === 0 ? ' ouvert' : '') + '" id="' + q.id + '" style="--qc:' + q.c + '"><h3><button type="button" aria-expanded="' + (i === 0) + '" aria-controls="r-' + q.id + '">' + esc(q.q) + '<span class="rond">' + ico('chevron-down') + '</span></button></h3>' +
      '<div class="q-rep" id="r-' + q.id + '" role="region"' + (i === 0 ? '' : ' inert') + '><div><div class="in">' + typo(q.r) + (q.lien ? '<a class="q-lien" href="' + q.lien[1] + '">' + esc(q.lien[0]) + ico('arrow-right') + '</a>' : '') + '</div></div></div></div>').join('') + '</div>' +
    '<a class="lien tout" href="' + S.tout[1] + '">' + esc(S.tout[0]) + ico('arrow-right') + '</a>' +
  '</div></section>';
}



const cleRendu = (t) => (momentDe(t) === 'attente' ? 'attente' : 'page:' + directEtat(t));
function rendre() {
  const t = maintenant(), etat = momentDe(t);
  if (ETAT.volet === '') ETAT.volet = etat === 'rediffusion' ? 'canape' : 'terre';
  ETAT.rendu = cleRendu(t);
  document.documentElement.style.setProperty('--damier', 'url("' + MEDIAS.damier + '")');
  document.body.classList.toggle('sans-emp', !ETAT.emp);
  const ancienne = document.querySelector('#cadre village-map');
  document.getElementById('sd-page').innerHTML = etat === 'attente' ? haut(etat) : haut(etat) + recit() + volets() + carte() + dispositif() + questions();
  compte();
  brancher();
  largeurs();
  if (etat !== 'attente') {
    if (ancienne) { const c = document.getElementById('cadre'); c.innerHTML = ''; c.appendChild(ancienne); CARTE.prete && listeSites(); majPuces(CARTE.mode || ''); }
    else monterCarteQuandProche();
  }
  majBarre();
}
function tic() {
  if (cleRendu(maintenant()) !== ETAT.rendu) rendre(); else compte();
}

 
function largeurs(survole) {
  const v = document.getElementById('volets'); if (!v) return;
   
  PAGE.volets.forEach(({ id }, i) => v.style.setProperty('--g' + (i + 1), (survole ? (id === survole ? '2.1fr' : '1fr') : (id === ETAT.volet ? '1.6fr' : '1fr'))));
}
function ouvrirVolet(id, defiler) {
  ETAT.volet = ETAT.volet === id && !defiler ? null : id;
  document.querySelectorAll('.volet-tete').forEach((b) => b.setAttribute('aria-expanded', String(b.dataset.v === ETAT.volet)));
  document.querySelectorAll('.volet').forEach((p) => { const o = p.dataset.v === ETAT.volet; p.classList.toggle('ouvert', o); p.inert = !o; });
  largeurs();
  majBarre();
  if (ETAT.volet === 'terre') allerA('terre'); else if (ETAT.volet === 'mer') allerA('mer');
  if (defiler && ETAT.volet) defilerVers(document.getElementById(ETAT.volet), 16);
}
function brancherAller(racine) {
  racine.querySelectorAll('[data-aller]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.dataset.aller;
    if (id === 'dispositif') return;
    e.preventDefault();
    history.replaceState(null, '', '#' + id);
    ouvrirVolet(id, true);
  }));
}
function brancher() {
  brancherAller(document);
  const fin = matchMedia('(hover: hover)');
  document.querySelectorAll('.volet-tete').forEach((b) => {
    b.addEventListener('click', () => ouvrirVolet(b.dataset.v, false));
    b.addEventListener('pointerenter', () => { if (fin.matches && innerWidth > 750) largeurs(b.dataset.v); });
    b.addEventListener('pointerleave', () => largeurs());
  });
  document.querySelectorAll('.q button').forEach((b) => b.addEventListener('click', () => {
    const q = b.closest('.q'), ouvrir = !q.classList.contains('ouvert');
    document.querySelectorAll('.q.ouvert').forEach((x) => { if (x !== q) { x.classList.remove('ouvert'); x.querySelector('button').setAttribute('aria-expanded', 'false'); x.querySelector('.q-rep').inert = true; } });
    q.classList.toggle('ouvert', ouvrir); b.setAttribute('aria-expanded', String(ouvrir)); q.querySelector('.q-rep').inert = !ouvrir;
  }));
  document.querySelectorAll('[data-carte]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    versLaCarte(a.dataset.carte);
  }));
  document.querySelectorAll('[data-cadre]').forEach((b) => b.addEventListener('click', () => allerA(b.dataset.cadre)));
}






const doux = () => !matchMedia('(prefers-reduced-motion: reduce)').matches;

function hauteurFixe() { return Math.max(__bord(), parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--colle')) || 0); }
function defilerVers(el, marge) {
  const y = Math.max(0, Math.round(el.getBoundingClientRect().top + scrollY - hauteurFixe() - marge));
  return new Promise((ok) => {
    if (Math.abs(scrollY - y) < 2) return ok(y);
    let fini = false, dernier = -1, calme = 0;
    const fin = () => { if (fini) return; fini = true; removeEventListener('scrollend', fin); clearInterval(veille); ok(y); };
    const veille = setInterval(() => { if (Math.abs(scrollY - dernier) < 1) { if (++calme > 3) fin(); } else { calme = 0; dernier = scrollY; } }, 80);
    addEventListener('scrollend', fin);
    setTimeout(fin, 2000);
    scrollTo({ top: y, behavior: doux() ? 'smooth' : 'instant' });
  });
}
 
function garderPosition(y, ms) {
  let touche = false;
  const stop = () => { touche = true; };
  const ev = ['wheel', 'touchstart', 'keydown', 'mousedown'];
  ev.forEach((t) => addEventListener(t, stop, { passive: true }));
  const fin = Date.now() + ms;
  const veiller = () => {
    if (touche) return ev.forEach((t) => removeEventListener(t, stop));
    if (Math.abs(scrollY - y) > 4) scrollTo({ top: y, behavior: 'instant' });
    if (Date.now() < fin) requestAnimationFrame(veiller); else ev.forEach((t) => removeEventListener(t, stop));
  };
  requestAnimationFrame(veiller);
}
async function versLaCarte(cible) {
  const y = await defilerVers(document.querySelector('#carte .carte-tete'), 16);
  document.getElementById('carte-titre').focus({ preventScroll: true });
  CARTE.position = y;
  allerA(cible);
  if (CARTE.prete) garderPosition(y, 1500);
}

 
const CARTE = { prete: false, mode: '', donnees: null, el: null, attente: null, position: null };
const CADRES = { tout: [[-2.35, 48.628], [-1.83, 48.77]], terre: [[-2.34, 48.632], [-1.83, 48.712]], mer: [[-2.40, 48.66], [-1.82, 48.86]] };
const dodo = (ms) => new Promise((r) => setTimeout(r, ms));
function monterCarteQuandProche() {
  const cadre = document.getElementById('cadre');
  if (!('IntersectionObserver' in window)) { monterCarte(); return; }
  const io = new window.IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); monterCarte(); } }, { rootMargin: '900px 0px' });
  io.observe(cadre);
}

const cleApercu = () => { try { return String(new URLSearchParams(location.search).get('apercu') || '').slice(0, 80); } catch (e) { return ''; } };
const CARTE_DELAI_SOURCE = 8000, CARTE_DELAI_CHARGE = 15000, CARTE_DELAI_TOTAL = 30000;
function bornee(ms) {
  const C = window.AbortController ? new window.AbortController() : null;
  let minuteur = 0;
  return { signal: C ? C.signal : undefined, armer: () => { clearTimeout(minuteur); minuteur = setTimeout(() => { if (C) C.abort(); }, ms); }, fin: () => clearTimeout(minuteur) };
}
function lireCarte() {
  const cle = cleApercu(), b = bornee(CARTE_DELAI_CHARGE);
  b.armer();
  return fetch(__sources.carte + '?lang=' + LANG + (cle ? '&apercu=' + encodeURIComponent(cle) : ''), { signal: b.signal }).then((r) => (r.ok ? r.json() : null)).then((j) => (j && j.carte && Array.isArray(j.carte.poi) && j.carte.config ? j.carte : null)).catch(() => null).finally(b.fin);
}
function sourcesCarte() {
  const s = window.document.querySelector('script[data-rdr-paquet][src]'), src = s ? s.src : '';
  const v = (src.match(/rdr-elements@([0-9a-f]{7,40})\//) || src.match(/\/rdr-elements\/p\/([0-9a-f]{7,40})\//) || [])[1] || '';
  return [__sources.moduleCarte, v ? __sources.carteCdn + v + '/carte.js' : '', v ? __sources.cartePages + v + '/carte.js' : '', __sources.carteSecours].filter((u, i, l) => u && l.indexOf(u) === i);
}
async function lireTexte(u) {
  const b = bornee(CARTE_DELAI_SOURCE);
  b.armer();
  try {
    const r = await fetch(u, { signal: b.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    if (!r.body || !r.body.getReader || !window.TextDecoder) { b.armer(); return await r.text(); }
    const lecteur = r.body.getReader(), dec = new window.TextDecoder();
    let texte = '';
    for (;;) { b.armer(); const p = await lecteur.read(); if (p.done) break; texte += dec.decode(p.value, { stream: true }); }
    return texte + dec.decode();
  } finally { b.fin(); }
}
function evaluer(code) {
  const sc = window.document.createElement('script');
  sc.text = '(function (define, module, exports, require) {' + code + '\n}).call(window);';
  (window.document.head || window.document.documentElement).appendChild(sc);
  sc.remove();
}
async function chargerCarte() {
  const defini = () => !!window.customElements.get('village-map');
  if (defini()) return true;
  for (const u of sourcesCarte()) {
    try { evaluer(await lireTexte(u)); } catch (e) { console.warn('[rdr-suivre-depart] carte : ' + u + ' en échec (' + (e && e.name === 'AbortError' ? 'délai dépassé' : (e && e.message) || e) + ')'); }
    if (defini()) return true;
  }
  return false;
}
async function monterCarte() {
  if (CARTE.el) return;
  const el = window.document.createElement('village-map');
  el.setAttribute('lang', LANG); el.setAttribute('vue', 'depart'); el.setAttribute('integree', ''); el.setAttribute('mesure', '0');
  CARTE.el = el;
  const [charge, pret] = await Promise.race([Promise.all([lireCarte(), chargerCarte()]), dodo(CARTE_DELAI_TOTAL).then(() => [null, false])]);
  const cadre = document.getElementById('cadre');
  if (!cadre) { CARTE.el = null; return; }
  if (!charge || !pret) { const at = cadre.querySelector('.cadre-attente'); if (at) at.textContent = PAGE.carte.indispo; CARTE.el = null; return; }
  CARTE.donnees = { payload: charge };
  cadre.appendChild(el);
  el.setAttribute('payload', JSON.stringify(charge));
  for (let i = 0; i < 150; i++) { const m = el._map; if (m && m.loaded && m.loaded()) break; await dodo(120); }
  const at = cadre.querySelector('.cadre-attente'); if (at) at.remove();
  CARTE.prete = true;
  window.document.documentElement.dataset.rsdCarte = 'prete';
  listeSites();
  const enAttente = CARTE.attente;
  allerA(enAttente || (ETAT.volet === 'mer' ? 'mer' : ETAT.volet === 'terre' ? 'terre' : 'tout'));
  if (enAttente && CARTE.position != null && Math.abs(scrollY - CARTE.position) < 40) garderPosition(CARTE.position, 1500);
}
function allerA(cible) {
  if (!CARTE.prete) { CARTE.attente = cible; return; }
  const el = CARTE.el;
  if (CADRES[cible]) { CARTE.mode = cible; el.removeAttribute('poi'); el.removeAttribute('cadre'); el.setAttribute('cadre', cible); majPuces(cible); return; }
  const o = (CARTE.donnees.payload.poi || []).find((p) => p.id === cible);
  if (!o) return;
  majPuces(''); el.removeAttribute('poi'); el.setAttribute('poi', o.id);
}
function majPuces(cible) { document.querySelectorAll('[data-cadre]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cadre === cible))); }
function listeSites() {
  const S = PAGE.carte, poi = CARTE.donnees.payload.poi;
  const grille = document.getElementById('sitesGrille'); if (!grille) return;
  document.getElementById('sitesN').textContent = '(' + poi.filter((p) => /^littoral-/.test(p.id) || p.littoral).length + ')';
  grille.innerHTML = S.statuts.filter(([k]) => k !== 'depart-village').map(([k, c, t]) => {
    const l = poi.filter((p) => p.cat === k);
    return '<div><h4><span class="pastille" style="--pc:' + c + '"></span>' + esc(t) + ' · ' + l.length + '</h4><ul>' + l.map((p) => '<li><button type="button" data-site="' + p.id + '">' + esc(p.nom) + '<small>' + esc(p._departement || (p.zs && p.zs.dep) || '') + '</small></button></li>').join('') + '</ul></div>';
  }).join('');
  grille.querySelectorAll('[data-site]').forEach((b) => b.addEventListener('click', () => versLaCarte(b.dataset.site)));
}

 

function bandeau() {
  const hote = document.getElementById('sd-bandeau');
  if (!hote || hote.firstChild) return;
  const b = window.document.createElement('rdr-dernieres-infos');
  b.setAttribute('page', 'suivre-depart');
  b.setAttribute('lang', LANG);
  if (__sources.infos) b.setAttribute('infos', __sources.infos);
  hote.appendChild(b);
  const poser = () => document.documentElement.style.setProperty('--bandeau', Math.round(b.getBoundingClientRect().height) + 'px');
  if (window.ResizeObserver) new window.ResizeObserver(poser).observe(b);
  poser();
}


const majBarre = () => {};

rendre();
bandeau();
setInterval(tic, 1000);

if (location.hash) setTimeout(() => { let id = ''; try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { id = ''; } const c = id && document.getElementById(id); if (c) defilerVers(c, 16); }, 350);
  }

  class RdrSuivreDepart extends HTMLElement {
    static get observedAttributes() { return ['jeu']; }
    connectedCallback() {
      poserStyle();
      if (this._monte) return;
      if (this._jeu) { this._dessiner(this._jeu); return; }
      if (!this.firstChild) this.innerHTML = SQUELETTE;
      if (!this._depuisAttribut()) this._chercher();
    }
    disconnectedCallback() { this._arreter(); }
    attributeChangedCallback() { if (!this._monte && this.isConnected) this._depuisAttribut(); }
    _arreter() {
      (this._minuteurs || []).forEach((id) => clearInterval(id));
      this._minuteurs = [];
      if (this._obs) { this._obs.disconnect(); this._obs = null; }
      this._monte = false;
    }
    _lang() {
      const l = this.getAttribute('lang') || (/^\/en(\/|$)/.test(location.pathname) ? 'en' : '') || document.documentElement.getAttribute('lang') || 'fr';
      return String(l).slice(0, 2).toLowerCase() === 'en' ? 'en' : 'fr';
    }
    _cle() { try { return String(new URLSearchParams(location.search).get('apercu') || '').slice(0, 80); } catch (e) { return ''; } }
    _valide(D) { return !!(D && D.page && D.page.haut && Array.isArray(D.page.volets) && D.page.volets.length && D.medias && D.medias.haut && D.liens && D.calendrier && D.calendrier.moments); }
    

    _depuisAttribut() {
      if (this._cle()) return false;
      let D = null;
      try { D = JSON.parse(this.getAttribute('jeu') || 'null'); } catch (e) { D = null; }
      if (!this._valide(D) || (D.lang && D.lang !== this._lang())) return false;
      this._dessiner(D);
      return true;
    }
    _sources() {
      return { carte: this.getAttribute('source-carte') || SOURCE_CARTE, moduleCarte: this.getAttribute('carte-module') || '', carteCdn: CARTE_CDN, cartePages: CARTE_PAGES, carteSecours: CARTE_SECOURS, infos: this.getAttribute('infos') || '' };
    }
    _chercher() {
      if (this._enCours) return;
      this._enCours = true;
      const cle = this._cle();
      const u = (this.getAttribute('source') || SOURCE) + '?lang=' + this._lang() + (cle ? '&apercu=' + encodeURIComponent(cle) : '');
      fetch(u).then((r) => (r.ok ? r.json() : null)).then((j) => {
        this._enCours = false;
        if (this._valide(j)) this._dessiner(j); else this._panne();
      }).catch(() => { this._enCours = false; this._panne(); });
    }
    _dessiner(D) {
      this._jeu = D;
      if (!this.isConnected) return;
      this._arreter();
      this._monte = true;
      poserStyle();
      this.innerHTML = GABARIT;
      const FOND = this.firstElementChild;
      const lang = D.lang === 'en' ? 'en' : 'fr';
      if (lang === 'en') {
        this._obs = new MutationObserver((ms) => ms.forEach((m) => m.addedNodes.forEach((n) => prefixerLiens(n))));
        this._obs.observe(this, { childList: true, subtree: true });
      }
      try { demarrer(D, this, FOND, this._minuteurs, () => bordDuHaut(this), this._sources(), lang); } catch (e) { console.error('[rdr-suivre-depart]', e); }
      if (lang === 'en') prefixerLiens(this);
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
  customElements.define("rdr-suivre-depart", RdrSuivreDepart);
})();
})();
