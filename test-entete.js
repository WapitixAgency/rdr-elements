// rdr-elements/test-entete.js : GÉNÉRÉ par atelier/entete/assembler.mjs
// le 2026-09-21 20:53 ; ne pas éditer ici.
// L'en-tête de routedurhum.com en un seul custom element (prototype du 21/09/2026),
// avec les modules de production qu'il héberge (route-du-rhum 1b88a37).
// Source commentée : atelier/entete/rdr-entete-coeur.js.
/* ── AlpinaClock.js (route-du-rhum 1b88a37) ── */
;(function () {
  if (typeof window === 'undefined' || !window.customElements) return;
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

/* ── timer-clock-simple.js (route-du-rhum 1b88a37) ── */
;(function () {
  if (typeof window === 'undefined' || !window.customElements) return;
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

/* ── rdr-menu-actus.js (route-du-rhum 1b88a37) ── */
;(function () {
  if (typeof window === 'undefined' || !window.customElements) return;
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

/* ── rdr-menu-cartes.js (route-du-rhum 1b88a37) ── */
;(function () {
  if (typeof window === 'undefined' || !window.customElements) return;
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

/* ── rdr-entete-coeur.js ── */
;(function () {
  if (typeof window === 'undefined' || !window.customElements) return;
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('rdr-entete')) return;

  const MEMOIRE = 'rdrEnteteV1:';
  const MEMOIRE_MS = 12 * 60 * 60 * 1000;
  const ROTATION_MS = 4500;
  const OUVERTURE_MS = 90;     // l'intention : un passage de souris ne déplie rien
  const FERMETURE_MS = 260;    // le temps de descendre de l'entrée au menu
  const TABLETTE_MAX = 1000;   // le bouton Menu remplace les entrées (point de bascule de Wix)
  const TELEPHONE_MAX = 750;

  /* Montserrat du catalogue Wix (13 Ko par graisse) : la Montserrat Bold
     téléversée du thème (99 Ko, audit du 20/09, lot 0) a le même dessin. */
  const POLICES = "@font-face{font-family:'RDR Montserrat';font-style:normal;font-weight:400;font-display:swap;src:url(https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2')}" +
    "@font-face{font-family:'RDR Montserrat';font-style:normal;font-weight:700;font-display:swap;src:url(https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2')}" +
    "@font-face{font-family:'RDR Montserrat';font-style:italic;font-weight:700;font-display:swap;src:url(https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZcgvz_PZwjimrqw.woff2) format('woff2')}" +
    "@font-face{font-family:'Varien';font-style:italic;font-weight:normal;font-display:swap;src:url(https://static.wixstatic.com/ufonts/5fefd8_1e5b9ef92f5440db968e5ef2f46acb27/woff2/file.woff2) format('woff2')}";

  const ICO = {
    chevron: '<svg viewBox="0 0 10 10" aria-hidden="true" focusable="false"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    menu: '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M13 15h14M13 20h14M13 25h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    fermer: '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M14 14l12 12M26 14 14 26" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
    /* Les drapeaux, ronds par le CSS (border-radius), sans clipPath : un
       identifiant répété dans la barre, la liste et le tiroir se perdait
       quand sa première copie était masquée. */
    fr: '<svg class="re-drapeau" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="#002395" d="M0 0h7v20H0z"/><path fill="#fff" d="M7 0h6v20H7z"/><path fill="#ED2939" d="M13 0h7v20h-7z"/></svg>',
    en: '<svg class="re-drapeau" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="#012169" d="M0 0h20v20H0z"/><path d="M0 0l20 20M20 0 0 20" stroke="#fff" stroke-width="4"/><path d="M0 0l20 20M20 0 0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M10 0v20M0 10h20" stroke="#fff" stroke-width="6"/><path d="M10 0v20M0 10h20" stroke="#C8102E" stroke-width="3.4"/></svg>'
  };

  /* ⚠️ Les cadres de Wix posent leurs styles globaux sur img, a, ul, button :
     tout ce qui compte est redit ici, préfixé par la balise. */
  const CSS = POLICES + `
rdr-entete{display:block;position:relative;width:100%;height:175px;font-family:'RDR Montserrat','montserrat','Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  --re-marine:#0E111D;--re-teal:#006F7B;--re-jaune:#FCDD00;--re-bande:rgba(0,111,123,.7);--re-gouttiere:clamp(20px,2.4vw,35px)}
rdr-entete *,rdr-entete *::before,rdr-entete *::after{box-sizing:border-box}
rdr-entete a{text-decoration:none;color:inherit}
rdr-entete ul{list-style:none;margin:0;padding:0}
rdr-entete img{display:block;max-width:none;border:0}
rdr-entete button{font:inherit;color:inherit;background:none;border:0;margin:0;padding:0;cursor:pointer}
rdr-entete svg{display:block}
rdr-entete svg.re-drapeau,#rdr-entete-portail svg.re-drapeau{border-radius:50%;overflow:hidden;flex:none}
rdr-entete :focus-visible{outline:2px solid var(--re-jaune);outline-offset:2px}
/* La barre du haut */
rdr-entete .re-haut{display:flex;align-items:center;height:40px;background:var(--re-marine);padding:0 var(--re-gouttiere);color:#F7F7F7}
rdr-entete .re-reseaux{display:flex;gap:15px;align-items:center}
rdr-entete .re-reseaux a{display:block;width:18px;height:18px;border-radius:50%;transition:opacity .2s}
rdr-entete .re-reseaux a:hover{opacity:.75}
rdr-entete .re-reseaux img{width:18px;height:18px}
rdr-entete .re-haut-liens{display:flex;gap:30px;margin-left:auto;margin-right:34px}
rdr-entete .re-haut-liens a{font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.01em;white-space:nowrap;transition:color .2s}
rdr-entete .re-haut-liens a:hover{color:var(--re-jaune)}
/* L'onglet MON ESPACE RHUM et la langue : la boîte entière penchée de 10°,
   comme dans l'éditeur (skewX, relevé le 21/09), d'où l'italique. */
rdr-entete .re-espace{display:flex;align-items:center;justify-content:center;gap:10px;width:200px;height:40px;color:var(--re-marine);font-family:'RDR Montserrat',sans-serif;font-weight:700;font-size:11px;white-space:nowrap;transform:skewX(-10deg);background:linear-gradient(0deg,#FCDD00 0%,#FFB338 100%);transition:filter .2s}
rdr-entete .re-espace:hover{filter:brightness(1.05)}
rdr-entete .re-espace img{width:26px;height:30px;object-fit:contain}
rdr-entete .re-langue{position:relative;margin-left:-7px}
rdr-entete .re-langue-bouton{display:flex;align-items:center;gap:8px;height:40px;width:107px;padding:0 18px 0 22px;background:var(--re-marine);color:#fff;font-weight:700;font-size:11px;transform:skewX(-10deg)}
rdr-entete .re-langue-bouton svg{width:18px;height:18px}
rdr-entete .re-langue-bouton .re-chev{width:13px;height:13px;margin-left:auto;transition:transform .2s}
rdr-entete .re-langue-bouton[aria-expanded="true"] .re-chev{transform:rotate(180deg)}
rdr-entete .re-langue-liste{position:absolute;right:0;top:40px;z-index:30;min-width:107px;background:var(--re-marine);padding:4px 0 8px;display:none;box-shadow:0 10px 24px rgba(0,0,0,.3)}
rdr-entete .re-langue-liste.est-ouvert{display:block}
rdr-entete .re-langue-liste a{display:flex;align-items:center;gap:8px;padding:8px 22px;color:#fff;font-weight:700;font-size:11px}
rdr-entete .re-langue-liste a:hover,rdr-entete .re-langue-liste a[aria-current="true"]{color:var(--re-jaune)}
rdr-entete .re-langue-liste svg{width:18px;height:18px}
/* La barre blanche */
rdr-entete .re-barre{position:relative;display:flex;align-items:center;height:85px;background:#fff;padding:0 var(--re-gouttiere)}
rdr-entete .re-marque{position:relative;display:flex;align-items:center;flex:none;width:130px;height:65px;z-index:2}
rdr-entete .re-logo{display:block;width:65px;height:65px;position:relative;z-index:2}
rdr-entete .re-logo img{width:65px;height:65px}
rdr-entete .re-tymal{position:absolute;left:52px;top:-4px;width:72px;height:72px;opacity:0;transform:translateX(-26px) rotate(-8deg);transition:opacity .35s ease,transform .45s cubic-bezier(.3,1.4,.5,1);pointer-events:none;z-index:1}
rdr-entete .re-tymal img{width:72px;height:72px;object-fit:contain}
rdr-entete .re-barre:hover .re-tymal,rdr-entete .re-barre:focus-within .re-tymal,rdr-entete[data-panneau] .re-tymal{opacity:1;transform:none;pointer-events:auto}
/* Le menu centré 70 px à gauche du milieu de la page, comme le natif (relevé à
   1440 et à 1280). */
rdr-entete .re-nav{flex:1;display:flex;justify-content:center;position:relative;z-index:2;min-width:0;margin-right:70px}
rdr-entete .re-nav > ul{display:flex;align-items:center;gap:30px}
rdr-entete .re-entree{display:flex;align-items:center;gap:8px;position:relative}
rdr-entete .re-entree-lien{display:block;padding:8px 0;font-weight:700;font-size:11px;text-transform:uppercase;color:var(--re-teal);white-space:nowrap;position:relative;transition:color .2s}
rdr-entete .re-entree-lien::after{content:'';position:absolute;left:0;right:0;bottom:4px;height:2px;background:var(--re-jaune);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
rdr-entete .re-entree.est-actif .re-entree-lien,rdr-entete .re-entree.est-ouvert .re-entree-lien,rdr-entete .re-entree-lien:hover{color:var(--re-jaune)}
rdr-entete .re-entree.est-actif .re-entree-lien::after{transform:scaleX(1)}
rdr-entete .re-plus{display:flex;align-items:center;justify-content:center;width:18px;height:24px;margin:0 -4px;color:var(--re-teal)}
rdr-entete .re-plus svg{width:10px;height:10px;transition:transform .2s}
rdr-entete .re-entree.est-actif .re-plus,rdr-entete .re-entree.est-ouvert .re-plus{color:var(--re-jaune)}
rdr-entete .re-entree.est-ouvert .re-plus svg{transform:rotate(180deg)}
rdr-entete .re-decor{position:absolute;top:0;right:calc(var(--re-gouttiere) + 206px);width:187px;height:85px;pointer-events:none;z-index:0;opacity:.14}
rdr-entete .re-decor img{width:187px;height:85px}
rdr-entete .re-droite{position:relative;flex:none;width:206px;height:60px;margin-left:auto;padding-left:6px;z-index:2}
rdr-entete .re-droite::before{content:'';position:absolute;left:0;top:-4px;bottom:-4px;border-left:1px dashed #cfd8dc}
rdr-entete .re-etat{position:absolute;inset:0 0 0 6px;display:flex;align-items:center;justify-content:space-around;gap:10px;opacity:0;visibility:hidden;transition:opacity .6s ease,visibility 0s linear .6s}
rdr-entete .re-etat.est-la{opacity:1;visibility:visible;transition:opacity .6s ease}
rdr-entete .re-partenaire img{height:60px;width:auto;max-width:62px;object-fit:contain}
rdr-entete .re-partenaire:last-child img{height:45px}
rdr-entete .re-boutique{display:flex;flex-direction:column;align-items:center;gap:2px;width:90px;text-align:center;color:var(--re-teal);font-weight:700;font-size:9.5px;line-height:1.15;text-transform:uppercase}
/* Les logos de la boutique et du jeu sont des SVG carrés, le dessin au centre :
   une boîte de 50 px comme dans l'éditeur, sinon ils tombent à 20 px de large. */
rdr-entete .re-boutique img{width:50px;height:50px;object-fit:contain}
rdr-entete .re-menu-bouton{display:none;flex:none;width:40px;height:40px;margin-left:14px;color:var(--re-teal);position:relative;z-index:2}
rdr-entete .re-menu-bouton svg{width:40px;height:40px}
/* Le bandeau */
/* Le teal à 70 % posé sur du blanc, comme dans l'en-tête natif. */
rdr-entete .re-bande{display:flex;align-items:center;height:50px;background:linear-gradient(var(--re-bande),var(--re-bande)),#fff;padding:0 var(--re-gouttiere);color:#fff}
rdr-entete .re-dates{margin:0;font-weight:700;font-size:12px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
rdr-entete .re-dates b{font-weight:inherit;color:var(--re-jaune)}
rdr-entete .re-dates b.re-sep{margin:0 6px}
rdr-entete .re-montre{display:flex;align-items:center;gap:10px;margin-left:auto;flex:none}
rdr-entete .re-compte{display:block;width:152px;height:24px}
rdr-entete timer-clock-simple .timer{font-family:'RDR Montserrat','Montserrat',sans-serif}
rdr-entete .re-cadran{display:block;width:40px;height:40px;margin:0 10px 0 12px}
rdr-entete .re-alpina img{height:18px;width:auto}
/* Le squelette, avant toute donnée : les trois bandes, à leur hauteur */
rdr-entete .re-squelette .re-haut,rdr-entete .re-squelette .re-barre,rdr-entete .re-squelette .re-bande{display:block}
/* Tablette : le bouton Menu remplace les entrées */
@media (max-width:${TABLETTE_MAX}px){
  rdr-entete .re-reseaux{display:none}
  rdr-entete .re-nav{display:none}
  rdr-entete .re-menu-bouton{display:block}
  rdr-entete .re-marque{flex:1}
  rdr-entete .re-tymal{display:none}
  rdr-entete .re-decor{right:calc(var(--re-gouttiere) + 260px)}
}
@media (max-width:899px){
  rdr-entete .re-dates{display:none}
  rdr-entete .re-montre{margin:0 auto}
}
/* Téléphone */
@media (max-width:${TELEPHONE_MAX}px){
  rdr-entete{height:185px}
  rdr-entete .re-haut{padding:0 21px 0 0;justify-content:flex-end}
  rdr-entete .re-haut-liens{display:none}
  rdr-entete .re-espace{width:224px}
  rdr-entete .re-barre{height:95px;padding:0 16px 0 15px}
  rdr-entete .re-marque{flex:none;width:65px}
  rdr-entete .re-decor{right:auto;left:172px;width:140px;height:86px;top:5px;opacity:.14}
  rdr-entete .re-decor img{width:140px;height:86px}
  rdr-entete .re-droite{flex:1;width:auto;height:50px;margin:0 6px 0 30px;padding:0}
  rdr-entete .re-droite::before{display:none}
  rdr-entete .re-etat{inset:0;justify-content:center;gap:8px}
  rdr-entete .re-partenaire img{height:50px;max-width:52px}
  rdr-entete .re-partenaire:last-child img{height:40px}
  rdr-entete .re-boutique{width:84px;font-size:9px}
  rdr-entete .re-boutique img{width:42px;height:42px}
  rdr-entete .re-menu-bouton{margin-left:0}
  rdr-entete .re-compte{width:170px;height:26px}
  rdr-entete .re-alpina img{height:20px}
}
/* Le portail : méga menus et tiroir, hors de l'arbre de Wix */
#rdr-entete-portail{position:absolute;left:0;top:0;width:100%;height:0;z-index:2147483000;font-family:'RDR Montserrat','montserrat',system-ui,sans-serif}
#rdr-entete-portail *,#rdr-entete-portail *::before,#rdr-entete-portail *::after{box-sizing:border-box}
#rdr-entete-portail .re-panneau{position:absolute;left:0;width:100%;display:none}
#rdr-entete-portail .re-panneau.est-ouvert{display:block;animation:re-descend .22s ease-out}
@keyframes re-descend{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
#rdr-entete-portail .re-tiroir{position:fixed;inset:0;background:#fff;overflow-y:auto;overscroll-behavior:contain;display:none;color:#0E111D;-webkit-font-smoothing:antialiased}
#rdr-entete-portail .re-tiroir.est-ouvert{display:block;animation:re-apparait .22s ease-out}
@keyframes re-apparait{from{opacity:0}to{opacity:1}}
#rdr-entete-portail .re-tiroir a{text-decoration:none;color:inherit}
#rdr-entete-portail .re-tiroir ul{list-style:none;margin:0;padding:0}
#rdr-entete-portail .re-tiroir img{display:block;max-width:none;border:0}
#rdr-entete-portail .re-tiroir button{font:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer}
#rdr-entete-portail .re-t-tete{display:flex;align-items:center;gap:10px;padding:20px 20px 0}
#rdr-entete-portail .re-t-logo img{width:80px;height:80px}
#rdr-entete-portail .re-t-partenaires{flex:1;display:flex;justify-content:center;align-items:center;gap:8px}
#rdr-entete-portail .re-t-partenaires img{height:50px;width:auto;max-width:54px;object-fit:contain}
#rdr-entete-portail .re-t-partenaires a:last-child img{height:40px}
#rdr-entete-portail .re-t-fermer{width:40px;height:40px;color:#006F7B;align-self:flex-start}
#rdr-entete-portail .re-t-fermer svg{width:40px;height:40px;display:block}
#rdr-entete-portail .re-t-langues{display:flex;width:210px;margin:32px auto 34px;border:1.5px solid #006F7B;border-radius:22px;overflow:hidden}
#rdr-entete-portail .re-t-langues a{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;height:42px;font-weight:700;font-size:13px;color:#0E111D}
#rdr-entete-portail .re-t-langues a[aria-current="true"]{background:#006F7B;color:#fff}
#rdr-entete-portail .re-t-langues svg{width:20px;height:20px;display:block}
#rdr-entete-portail .re-t-section{margin:0 20px;padding:0 0 30px}
#rdr-entete-portail .re-t-section + .re-t-section{border-top:1px solid #e3e7ea;padding-top:30px}
#rdr-entete-portail .re-t-titre{margin:0 0 16px;text-align:center;font-weight:700;font-style:italic;font-size:19px;letter-spacing:.01em;text-transform:uppercase;color:#1B2A4E}
#rdr-entete-portail .re-t-titre a[aria-current="page"]{color:#006F7B}
#rdr-entete-portail .re-t-liste{background:#006F7B;padding:6px 0}
#rdr-entete-portail .re-t-liste a{display:flex;align-items:center;justify-content:center;min-height:52px;padding:6px 16px;text-align:center;color:#fff;font-weight:700;font-size:13.5px;text-transform:uppercase;transition:background .2s}
#rdr-entete-portail .re-t-liste a:hover,#rdr-entete-portail .re-t-liste a:focus-visible{background:rgba(255,255,255,.1)}
#rdr-entete-portail .re-t-liste a[aria-current="page"]{color:#FCDD00}
#rdr-entete-portail .re-t-pied{display:flex;justify-content:center;gap:34px;padding:10px 20px 44px;border-top:1px solid #e3e7ea;margin:0 20px}
#rdr-entete-portail .re-t-pied a{display:flex;flex-direction:column;align-items:center;gap:8px;width:110px;padding-top:24px;text-align:center;color:#006F7B;font-weight:700;font-size:11px;text-transform:uppercase}
#rdr-entete-portail .re-t-pied img{height:34px;width:auto;max-width:100px;object-fit:contain}
#rdr-entete-portail :focus-visible{outline:2px solid #FCDD00;outline-offset:2px}
@media (prefers-reduced-motion:reduce){
  rdr-entete *,#rdr-entete-portail *{transition:none!important;animation:none!important}
}`;

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lireJSON = (v, repli) => { if (!v) return repli; try { return JSON.parse(v); } catch (e) { return repli; } };
  const externe = (u) => /^https?:\/\//i.test(u || '') && !/^https?:\/\/(www\.)?routedurhum\.com/i.test(u || '');
  /* wix:image://v1/<id>/<nom>… ou wix:vector://v1/<id>/… : l'adresse servie. */
  function media(src) {
    if (!src) return '';
    const m = String(src).match(/^wix:(image|vector):\/\/v1\/([^/#]+)/);
    if (!m) return src;
    return m[1] === 'vector' ? 'https://static.wixstatic.com/shapes/' + m[2] : 'https://static.wixstatic.com/media/' + m[2];
  }
  /* Le chemin de la page, sans la base du site (/test-rdr sur un site gratuit)
     ni le /en du site anglais : c'est lui qu'on compare aux liens du menu. */
  function cheminCourant(base) {
    let p = '/';
    try { p = decodeURI(window.location.pathname || '/'); } catch (e) { p = window.location.pathname || '/'; }
    if (base && (p === base || p.indexOf(base + '/') === 0)) p = p.slice(base.length);
    p = p.replace(/\/+$/, '') || '/';
    return p.replace(/^\/en(?=\/|$)/, '') || '/';
  }
  function injecterStyle() {
    if (document.getElementById('rdr-entete-css')) return;
    const s = document.createElement('style');
    s.id = 'rdr-entete-css';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }
  function memLire(lang) {
    try {
      const m = JSON.parse(window.localStorage.getItem(MEMOIRE + lang) || 'null');
      return m && Date.now() - (m.t || 0) < MEMOIRE_MS ? m : null;
    } catch (e) { return null; }
  }
  function memEcrire(lang, champ, val) {
    try {
      const m = memLire(lang) || {};
      m[champ] = val; m.t = Date.now();
      window.localStorage.setItem(MEMOIRE + lang, JSON.stringify(m));
    } catch (e) { /* stockage plein ou refusé : la mémoire est un confort */ }
  }

  class RdrEntete extends HTMLElement {
    constructor() {
      super();
      this._lang = 'fr';
      this._base = '';
      this._brut = { reglages: null, menus: null, posts: null };
      this._ouvert = null;          // clé du méga menu ouvert
      this._minuteurs = {};
      this._rotation = null;
      this._etat = 0;
      this._surDocument = (e) => this._clicDehors(e);
      this._surTouche = (e) => this._touche(e);
      this._surFenetre = () => { if (this._ouvert) this._placer(); if (window.innerWidth > TABLETTE_MAX) this._fermerTiroir(); };
    }

    static get observedAttributes() { return ['lang', 'base', 'reglages', 'menus', 'posts']; }

    attributeChangedCallback(nom, avant, val) {
      if (avant === val || val === null) return;   // un retrait n'apprend rien (voir l'en-tête)
      if (nom === 'lang' || nom === 'base') {
        const v = nom === 'lang' ? (val === 'en' ? 'en' : 'fr') : val.replace(/\/+$/, '');
        if (v === this['_' + nom]) return;
        this['_' + nom] = v;
        if (this.isConnected) this._rendre();
        return;
      }
      if (val === this._brut[nom]) return;
      this._brut[nom] = val;
      memEcrire(this._lang, nom, val);
      if (!this.isConnected) return;
      /* Les données d'un menu changent : seul le panneau concerné se met à jour. */
      if (nom === 'reglages') this._rendre();
      else this._nourrirPanneaux();
    }

    connectedCallback() {
      injecterStyle();
      this._lang = this.getAttribute('lang') === 'en' ? 'en' : 'fr';
      this._base = (this.getAttribute('base') || this._base || '').replace(/\/+$/, '');
      /* Recréé par Wix sans attribut : la mémoire, le temps que la page repose. */
      const m = memLire(this._lang) || {};
      ['reglages', 'menus', 'posts'].forEach((k) => {
        const v = this.getAttribute(k);
        if (v) { this._brut[k] = v; memEcrire(this._lang, k, v); } else if (!this._brut[k] && m[k]) this._brut[k] = m[k];
      });
      this._rendre();
      document.addEventListener('pointerdown', this._surDocument, true);
      document.addEventListener('keydown', this._surTouche);
      window.addEventListener('resize', this._surFenetre, { passive: true });
    }

    disconnectedCallback() {
      document.removeEventListener('pointerdown', this._surDocument, true);
      document.removeEventListener('keydown', this._surTouche);
      window.removeEventListener('resize', this._surFenetre);
      this._arreterRotation();
      if (this._io) { this._io.disconnect(); this._io = null; }
      Object.keys(this._minuteurs).forEach((k) => clearTimeout(this._minuteurs[k]));
      /* Le portail reste : Wix détache puis rattache parfois le même élément,
         et une instance recréée le reprend (un seul portail par page). */
      this._fermerPanneau(true);
      this._fermerTiroir();
    }

    get _r() { return lireJSON(this._brut.reglages, null); }
    /* Un lien interne prend la base du site (vide en production) et, sur le
       site anglais, /en. */
    _lien(u) {
      if (!u || externe(u) || u.charAt(0) !== '/') return u || '';
      const en = this._lang === 'en' && !/^\/en(\/|$|\?)/.test(u);
      const chemin = en ? '/en' + (u === '/' ? '' : u) : u;
      return (this._base || '') + (this._base && chemin === '/' ? '' : chemin);
    }
    _cible(u) { return externe(u) ? ' target="_blank" rel="noopener"' : ''; }
    /* L'adresse de la même page dans l'autre langue : l'alternative hreflang
       du <head> quand Wix la sert, sinon le préfixe /en. */
    _autreLangue(code) {
      const alt = document.querySelector('link[rel="alternate"][hreflang^="' + code + '"]') || (code === 'fr' ? document.querySelector('link[rel="alternate"][hreflang="x-default"]') : null);
      if (alt && alt.getAttribute('href')) return alt.getAttribute('href');
      const p = cheminCourant(this._base);
      const chemin = code === 'en' ? '/en' + (p === '/' ? '' : p) : p;
      return (this._base || '') + (this._base && chemin === '/' ? '' : chemin);
    }
    _actif(entree) {
      const p = cheminCourant(this._base);
      const chemins = [entree.lien].concat((entree.liens || []).map((l) => l.lien)).concat(entree.prefixes || [])
        .filter((u) => u && u.charAt(0) === '/').map((u) => u.split('?')[0].replace(/\/+$/, '') || '/');
      return chemins.some((c) => c !== '/' && (p === c || p.indexOf(c + '/') === 0));
    }

    _rendre() {
      const r = this._r;
      this._fermerPanneau(true);
      if (!r) {
        this.innerHTML = '<div class="re-squelette" aria-hidden="true"><div class="re-haut"></div><div class="re-barre"></div><div class="re-bande"></div></div>';
        return;
      }
      const t = r.textes || {};
      const lg = this._lang;
      const reseaux = (r.reseaux || []).map((s) => '<li><a href="' + esc(s.lien) + '" target="_blank" rel="noopener" aria-label="' + esc(s.nom) + '"><img src="' + esc(media(s.icone)) + '" alt="" width="18" height="18" decoding="async"></a></li>').join('');
      const hautLiens = (r.liensHaut || []).map((l) => '<a href="' + esc(this._lien(l.lien)) + '"' + this._cible(l.lien) + '>' + esc(l.libelle) + '</a>').join('');
      const langues = (r.langues || [{ code: 'fr', libelle: 'FR' }, { code: 'en', libelle: 'EN' }]);
      const courante = langues.find((l) => l.code === lg) || langues[0];
      const listeLangues = langues.map((l) => '<li><a href="' + esc(this._autreLangue(l.code)) + '" hreflang="' + esc(l.code) + '" lang="' + esc(l.code) + '"' + (l.code === lg ? ' aria-current="true"' : '') + '>' + (ICO[l.code] || '') + esc(l.libelle) + '</a></li>').join('');
      const entrees = (r.menu || []).map((e) => {
        const actif = this._actif(e);
        const aPanneau = !!e.panneau;
        const lib = esc(e.libelle);
        const lien = e.lien
          ? '<a class="re-entree-lien" href="' + esc(this._lien(e.lien)) + '"' + (actif ? ' aria-current="page"' : '') + '>' + lib + '</a>'
          : '<button type="button" class="re-entree-lien" data-bascule="' + esc(e.cle) + '" aria-expanded="false" aria-controls="re-panneau-' + esc(e.cle) + '">' + lib + '</button>';
        const plus = aPanneau ? '<button type="button" class="re-plus" data-bascule="' + esc(e.cle) + '" aria-expanded="false" aria-controls="re-panneau-' + esc(e.cle) + '" aria-label="' + esc((t.plus || 'Plus de pages') + ' ' + e.libelle) + '">' + ICO.chevron + '</button>' : '';
        return '<li class="re-entree' + (actif ? ' est-actif' : '') + '" data-cle="' + esc(e.cle) + '"' + (aPanneau ? ' data-panneau-cle="' + esc(e.cle) + '"' : '') + '>' + lien + plus + '</li>';
      }).join('');
      const partenaires = (r.partenaires || []).map((p) => '<a class="re-partenaire" href="' + esc(this._lien(p.lien)) + '"' + this._cible(p.lien) + '><img src="' + esc(media(p.src)) + '" alt="' + esc(p.alt) + '" decoding="async"></a>').join('');
      const boutique = (r.boutique || []).map((b) => '<a class="re-boutique" href="' + esc(b.lien) + '"' + this._cible(b.lien) + '><span>' + esc(b.libelle) + '</span><img src="' + esc(media(b.image)) + '" alt="' + esc(b.alt || '') + '" decoding="async" loading="lazy"></a>').join('');
      const b = r.bandeau || {};
      /* Le texte du bandeau : ce qui est entre *étoiles* passe en jaune. */
      const dates = esc(b.texte || '').replace(/\*([^*]+)\*/g, (m, x) => (x.trim() === '|' ? '<b class="re-sep">|</b>' : '<b>' + x + '</b>'));
      const al = r.alpina || {};

      this.innerHTML =
        '<div class="re-haut">' +
          (reseaux ? '<ul class="re-reseaux" aria-label="' + esc(t.reseaux || 'Réseaux sociaux') + '">' + reseaux + '</ul>' : '') +
          '<nav class="re-haut-liens" aria-label="' + esc(t.services || 'Services') + '">' + hautLiens + '</nav>' +
          (r.espace ? '<a class="re-espace" href="' + esc(this._lien(r.espace.lien)) + '"><span>' + esc(r.espace.libelle) + '</span>' + (r.espace.icone ? '<img src="' + esc(media(r.espace.icone)) + '" alt="" width="26" height="30" decoding="async">' : '') + '</a>' : '') +
          '<div class="re-langue"><button type="button" class="re-langue-bouton" aria-expanded="false" aria-haspopup="true" aria-label="' + esc((t.langue || 'Langue') + ' : ' + courante.libelle) + '">' + (ICO[courante.code] || '') + '<span>' + esc(courante.libelle) + '</span><span class="re-chev">' + ICO.chevron + '</span></button>' +
          '<ul class="re-langue-liste">' + listeLangues + '</ul></div>' +
        '</div>' +
        '<div class="re-barre">' +
          '<div class="re-marque">' +
            (r.logo ? '<a class="re-logo" href="' + esc(this._lien(r.logo.lien || '/')) + '"><img src="' + esc(media(r.logo.src)) + '" alt="' + esc(r.logo.alt) + '" width="65" height="65" decoding="async" fetchpriority="high"></a>' : '') +
            (r.tymal ? '<a class="re-tymal" href="' + esc(this._lien(r.tymal.lien)) + '" tabindex="-1"><img src="' + esc(media(r.tymal.src)) + '" alt="' + esc(r.tymal.alt) + '" decoding="async" loading="lazy"></a>' : '') +
          '</div>' +
          '<nav class="re-nav" aria-label="' + esc(t.principal || 'Menu principal') + '"><ul>' + entrees + '</ul></nav>' +
          (r.decor ? '<div class="re-decor" aria-hidden="true"><img src="' + esc(media(r.decor)) + '" alt="" decoding="async"></div>' : '') +
          '<div class="re-droite">' +
            '<div class="re-etat est-la" data-etat="0">' + partenaires + '</div>' +
            (boutique ? '<div class="re-etat" data-etat="1" aria-hidden="true">' + boutique + '</div>' : '') +
          '</div>' +
          '<button type="button" class="re-menu-bouton" aria-expanded="false" aria-controls="re-tiroir" aria-label="' + esc(t.menu || 'Menu') + '">' + ICO.menu + '</button>' +
        '</div>' +
        '<div class="re-bande">' +
          '<p class="re-dates">' + dates + '</p>' +
          '<div class="re-montre">' +
            /* Dans une boîte : timer-clock-simple se pose width et height 100 %. */
            '<span class="re-compte" role="timer" aria-label="' + esc(t.compte || 'Compte à rebours jusqu\'au départ') + '"><timer-clock-simple target="' + esc(b.cible || '2026-11-01T12:02:00Z') + '" color="#ffffff"></timer-clock-simple></span>' +
            '<alpina-clock class="re-cadran" aria-hidden="true"></alpina-clock>' +
            (al.logo ? '<a class="re-alpina" href="' + esc(al.lien) + '" target="_blank" rel="noopener"><img src="' + esc(media(al.logo)) + '" alt="' + esc(al.alt || 'Alpina') + '" decoding="async"></a>' : '') +
          '</div>' +
        '</div>';

      this._brancher();
      this._construirePortail();
      this._lancerRotation();
    }

    _brancher() {
      const langue = this.querySelector('.re-langue-bouton');
      const liste = this.querySelector('.re-langue-liste');
      if (langue && liste) langue.addEventListener('click', () => {
        const ouvert = !liste.classList.contains('est-ouvert');
        liste.classList.toggle('est-ouvert', ouvert);
        langue.setAttribute('aria-expanded', String(ouvert));
      });
      const menu = this.querySelector('.re-menu-bouton');
      if (menu) menu.addEventListener('click', () => this._ouvrirTiroir());
      this.querySelectorAll('.re-entree[data-panneau-cle]').forEach((li) => {
        const cle = li.getAttribute('data-panneau-cle');
        li.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') this._planifierOuverture(cle); });
        li.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') this._planifierFermeture(); });
        li.querySelectorAll('[data-bascule]').forEach((b) => b.addEventListener('click', (e) => {
          e.preventDefault();
          if (this._ouvert === cle) this._fermerPanneau(); else this._ouvrirPanneau(cle);
        }));
        /* Au doigt (tablette en paysage, écran tactile) : le premier toucher
           déplie le menu, le second suit le lien. */
        const lien = li.querySelector('a.re-entree-lien');
        if (lien) lien.addEventListener('click', (e) => {
          if (this._dernierPointeur === 'touch' && this._ouvert !== cle) { e.preventDefault(); this._ouvrirPanneau(cle); }
        });
        li.addEventListener('pointerdown', (e) => { this._dernierPointeur = e.pointerType; });
      });
      const droite = this.querySelector('.re-droite');
      if (droite) {
        droite.addEventListener('pointerenter', () => { this._pause = true; });
        droite.addEventListener('pointerleave', () => { this._pause = false; });
        droite.addEventListener('focusin', () => { this._pause = true; });
        droite.addEventListener('focusout', () => { this._pause = false; });
      }
      this.addEventListener('focusout', (e) => {
        if (!this._ouvert) return;
        const vers = e.relatedTarget;
        if (vers && (this.contains(vers) || (this._portail && this._portail.contains(vers)))) return;
        if (vers) this._fermerPanneau();
      });
    }

    /* ─── Le portail : les méga menus et le tiroir ─── */
    _construirePortail() {
      const r = this._r;
      let p = document.getElementById('rdr-entete-portail');
      if (!p) {
        p = document.createElement('div');
        p.id = 'rdr-entete-portail';
        document.body.appendChild(p);
      }
      this._portail = p;
      const t = r.textes || {};
      const panneaux = (r.menu || []).filter((e) => e.panneau).map((e) => {
        const balise = e.panneau === 'actus' ? 'rdr-menu-actus' : 'rdr-menu-cartes';
        return '<div class="re-panneau" id="re-panneau-' + esc(e.cle) + '" data-cle="' + esc(e.cle) + '" role="region" aria-label="' + esc(e.libelle) + '">' +
          '<' + balise + ' lang="' + this._lang + '" vague="oui" fond="' + (e.fond || (e.panneau === 'actus' || e.panneau === 'les-skippers' ? 'vagues' : 'marine')) + '" data-source="' + esc(e.panneau) + '"></' + balise + '></div>';
      }).join('');
      p.innerHTML = panneaux + this._htmlTiroir(r, t);
      this._nourrirPanneaux();
      p.querySelectorAll('.re-panneau').forEach((el) => {
        el.addEventListener('pointerenter', () => this._annuler('fermer'));
        el.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') this._planifierFermeture(); });
        el.addEventListener('focusout', (e) => {
          const vers = e.relatedTarget;
          if (vers && !el.contains(vers) && !this.contains(vers)) this._fermerPanneau();
        });
      });
      /* Un lien externe sans nouvel onglet : les modules l'annoncent à la page
         maître en production ; ici, l'en-tête le suit. */
      if (!p._rdrBranche) {
        p._rdrBranche = true;
        ['ma-navigate', 'mc-navigate'].forEach((ev) => p.addEventListener(ev, (e) => { const u = e.detail && e.detail.url; if (u) window.location.assign(u); }));
      }
      const tiroir = p.querySelector('.re-tiroir');
      if (tiroir) {
        const f = tiroir.querySelector('.re-t-fermer');
        if (f) f.addEventListener('click', () => this._fermerTiroir(true));
      }
    }

    _nourrirPanneaux() {
      if (!this._portail) return;
      const menus = lireJSON(this._brut.menus, {});
      const posts = this._brut.posts;
      this._portail.querySelectorAll('.re-panneau > [data-source]').forEach((el) => {
        const src = el.getAttribute('data-source');
        if (src === 'actus') { if (posts && el.getAttribute('posts') !== posts) el.setAttribute('posts', posts); return; }
        const m = menus[src];
        if (!m) return;
        const reglages = JSON.stringify(m.reglages || {}), cartes = JSON.stringify(m.cartes || []);
        if (m.skippers && el.getAttribute('skippers') !== JSON.stringify(m.skippers)) el.setAttribute('skippers', JSON.stringify(m.skippers));
        if (el.getAttribute('reglages') !== reglages) el.setAttribute('reglages', reglages);
        if (el.getAttribute('cartes') !== cartes) el.setAttribute('cartes', cartes);
      });
    }

    _htmlTiroir(r, t) {
      const lg = this._lang;
      const langues = (r.langues || [{ code: 'fr', libelle: 'FR' }, { code: 'en', libelle: 'EN' }]).map((l) =>
        '<a href="' + esc(this._autreLangue(l.code)) + '" hreflang="' + esc(l.code) + '" lang="' + esc(l.code) + '"' + (l.code === lg ? ' aria-current="true"' : '') + '>' + (ICO[l.code] || '') + esc(l.libelle) + '</a>').join('');
      const p = cheminCourant(this._base);
      const courant = (u) => (u && u.charAt(0) === '/' && (u.split('?')[0].replace(/\/+$/, '') || '/') === p && u.indexOf('?') < 0) ? ' aria-current="page"' : '';
      const sections = (r.menu || []).map((e) => {
        const titre = e.lien ? '<a href="' + esc(this._lien(e.lien)) + '"' + courant(e.lien) + '>' + esc(e.libelle) + '</a>' : esc(e.libelle);
        const liens = (e.liens || []).map((l) => '<li><a href="' + esc(this._lien(l.lien)) + '"' + this._cible(l.lien) + courant(l.lien) + '>' + esc(l.libelle) + '</a></li>').join('');
        return '<section class="re-t-section"><h2 class="re-t-titre">' + titre + '</h2>' + (liens ? '<ul class="re-t-liste">' + liens + '</ul>' : '') + '</section>';
      }).join('');
      const partenaires = (r.partenaires || []).map((x) => '<a href="' + esc(this._lien(x.lien)) + '"><img src="' + esc(media(x.src)) + '" alt="' + esc(x.alt) + '" loading="lazy" decoding="async"></a>').join('');
      const pied = (r.boutique || []).map((x) => '<a href="' + esc(x.lienTiroir || x.lien) + '" target="_blank" rel="noopener"><span>' + esc(x.libelleTiroir || x.libelle) + '</span><img src="' + esc(media(x.image)) + '" alt="' + esc(x.alt || '') + '" loading="lazy" decoding="async"></a>').join('');
      return '<div class="re-tiroir" id="re-tiroir" role="dialog" aria-modal="true" aria-label="' + esc(t.menu || 'Menu') + '">' +
        '<div class="re-t-tete">' +
          (r.logo ? '<a class="re-t-logo" href="' + esc(this._lien(r.logo.lien || '/')) + '"><img src="' + esc(media(r.logo.src)) + '" alt="' + esc(r.logo.alt) + '" loading="lazy" decoding="async"></a>' : '') +
          '<div class="re-t-partenaires">' + partenaires + '</div>' +
          '<button type="button" class="re-t-fermer" aria-label="' + esc(t.fermer || 'Fermer le menu') + '">' + ICO.fermer + '</button>' +
        '</div>' +
        '<nav aria-label="' + esc(t.langue || 'Langue') + '"><div class="re-t-langues">' + langues + '</div></nav>' +
        '<nav aria-label="' + esc(t.principal || 'Menu principal') + '">' + sections + '</nav>' +
        (pied ? '<div class="re-t-pied">' + pied + '</div>' : '') +
      '</div>';
    }

    /* ─── Les méga menus ─── */
    _annuler(k) { if (this._minuteurs[k]) { clearTimeout(this._minuteurs[k]); this._minuteurs[k] = null; } }
    _planifierOuverture(cle) {
      this._annuler('fermer');
      this._annuler('ouvrir');
      if (this._ouvert === cle) return;
      /* Un menu est déjà ouvert : on passe de l'un à l'autre sans attendre. */
      if (this._ouvert) { this._ouvrirPanneau(cle); return; }
      this._minuteurs.ouvrir = setTimeout(() => this._ouvrirPanneau(cle), OUVERTURE_MS);
    }
    _planifierFermeture() {
      this._annuler('ouvrir');
      this._annuler('fermer');
      this._minuteurs.fermer = setTimeout(() => this._fermerPanneau(), FERMETURE_MS);
    }
    _placer() {
      const barre = this.querySelector('.re-barre');
      if (!barre || !this._portail) return;
      const b = barre.getBoundingClientRect();
      const haut = Math.round(b.bottom + (window.scrollY || window.pageYOffset || 0));
      this._portail.querySelectorAll('.re-panneau').forEach((el) => { el.style.top = haut + 'px'; });
    }
    _ouvrirPanneau(cle) {
      if (window.innerWidth <= TABLETTE_MAX || !this._portail) return;
      this._annuler('ouvrir'); this._annuler('fermer');
      this._placer();
      this._portail.querySelectorAll('.re-panneau').forEach((el) => el.classList.toggle('est-ouvert', el.getAttribute('data-cle') === cle));
      this.querySelectorAll('.re-entree').forEach((li) => {
        const oui = li.getAttribute('data-cle') === cle;
        li.classList.toggle('est-ouvert', oui);
        li.querySelectorAll('[data-bascule]').forEach((b) => b.setAttribute('aria-expanded', String(oui)));
      });
      this._ouvert = cle;
      this.setAttribute('data-panneau', cle);
    }
    _fermerPanneau(sansFocus) {
      this._annuler('ouvrir'); this._annuler('fermer');
      if (!this._ouvert) return;
      const cle = this._ouvert;
      this._ouvert = null;
      this.removeAttribute('data-panneau');
      if (this._portail) this._portail.querySelectorAll('.re-panneau.est-ouvert').forEach((el) => el.classList.remove('est-ouvert'));
      this.querySelectorAll('.re-entree').forEach((li) => {
        li.classList.remove('est-ouvert');
        li.querySelectorAll('[data-bascule]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
      });
      if (!sansFocus && this._portail && this._portail.contains(document.activeElement)) {
        const b = this.querySelector('.re-entree[data-cle="' + cle + '"] [data-bascule]:last-child');
        if (b) b.focus();
      }
    }
    _clicDehors(e) {
      const cible = e.target;
      const dansEntete = this.contains(cible);
      const dansPortail = this._portail && this._portail.contains(cible);
      if (this._ouvert && !dansEntete && !dansPortail) this._fermerPanneau(true);
      const liste = this.querySelector('.re-langue-liste.est-ouvert');
      if (liste && !(cible.closest && cible.closest('.re-langue'))) {
        liste.classList.remove('est-ouvert');
        const b = this.querySelector('.re-langue-bouton'); if (b) b.setAttribute('aria-expanded', 'false');
      }
    }
    _touche(e) {
      if (e.key !== 'Escape' && e.key !== 'Esc') {
        if (e.key === 'Tab' && this._tiroirOuvert) this._piegeFocus(e);
        else if (e.key === 'Tab' && this._ouvert) this._tabPanneau(e);
        return;
      }
      if (this._tiroirOuvert) { this._fermerTiroir(true); return; }
      if (this._ouvert) { const cle = this._ouvert; this._fermerPanneau(true); const b = this.querySelector('.re-entree[data-cle="' + cle + '"] [data-bascule]:last-child'); if (b) b.focus(); }
      const liste = this.querySelector('.re-langue-liste.est-ouvert');
      if (liste) { liste.classList.remove('est-ouvert'); const b = this.querySelector('.re-langue-bouton'); if (b) { b.setAttribute('aria-expanded', 'false'); b.focus(); } }
    }

    /* Au clavier, le menu ouvert suit son entrée : il est dans le portail, en
       fin de document, et la tabulation naturelle ne l'atteindrait jamais.
       Tab depuis le chevron entre dans le menu ; Tab depuis son dernier lien
       passe à l'entrée suivante ; Maj+Tab depuis son premier lien revient au
       chevron. */
    _tabPanneau(e) {
      const cle = this._ouvert;
      const panneau = this._portail && this._portail.querySelector('.re-panneau[data-cle="' + cle + '"]');
      const bascule = this.querySelector('.re-entree[data-cle="' + cle + '"] [data-bascule]:last-child') || this.querySelector('.re-entree[data-cle="' + cle + '"] [data-bascule]');
      if (!panneau || !bascule) return;
      const f = [...panneau.querySelectorAll('a[href], button')].filter((x) => x.getClientRects().length);
      if (!f.length) return;
      const actif = document.activeElement;
      if (!e.shiftKey && actif === bascule) { e.preventDefault(); f[0].focus(); return; }
      if (e.shiftKey && actif === f[0]) { e.preventDefault(); bascule.focus(); return; }
      if (!e.shiftKey && actif === f[f.length - 1]) {
        e.preventDefault();
        const li = bascule.closest('.re-entree');
        const suivante = li && li.nextElementSibling && li.nextElementSibling.querySelector('a, button');
        this._fermerPanneau(true);
        if (suivante) suivante.focus(); else bascule.focus();
      }
    }

    /* ─── Le tiroir du téléphone ─── */
    _ouvrirTiroir() {
      const tiroir = this._portail && this._portail.querySelector('.re-tiroir');
      if (!tiroir) return;
      this._fermerPanneau(true);
      tiroir.classList.add('est-ouvert');
      this._tiroirOuvert = true;
      this._defilementAvant = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      const b = this.querySelector('.re-menu-bouton'); if (b) b.setAttribute('aria-expanded', 'true');
      const f = tiroir.querySelector('.re-t-fermer'); if (f) f.focus();
    }
    _fermerTiroir(rendreFocus) {
      if (!this._tiroirOuvert) return;
      const tiroir = this._portail && this._portail.querySelector('.re-tiroir');
      if (tiroir) tiroir.classList.remove('est-ouvert');
      this._tiroirOuvert = false;
      document.documentElement.style.overflow = this._defilementAvant || '';
      const b = this.querySelector('.re-menu-bouton');
      if (b) { b.setAttribute('aria-expanded', 'false'); if (rendreFocus) b.focus(); }
    }
    _piegeFocus(e) {
      const tiroir = this._portail && this._portail.querySelector('.re-tiroir');
      if (!tiroir) return;
      const f = [...tiroir.querySelectorAll('a[href], button')].filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const premier = f[0], dernier = f[f.length - 1];
      if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
      else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
      else if (!tiroir.contains(document.activeElement)) { e.preventDefault(); premier.focus(); }
    }

    /* ─── La zone de droite qui alterne (partenaires, boutique et jeu) ─── */
    _lancerRotation() {
      this._arreterRotation();
      const etats = this.querySelectorAll('.re-etat');
      if (etats.length < 2) return;
      this._visible = true;
      if (typeof IntersectionObserver === 'function' && !this._io) {
        this._io = new IntersectionObserver((e) => { this._visible = e.some((x) => x.isIntersecting); });
        this._io.observe(this);
      }
      this._rotation = setInterval(() => {
        if (this._pause || !this._visible || document.hidden) return;
        const liste = this.querySelectorAll('.re-etat');
        if (liste.length < 2) return;
        this._etat = (this._etat + 1) % liste.length;
        liste.forEach((el, i) => {
          el.classList.toggle('est-la', i === this._etat);
          if (i === this._etat) el.removeAttribute('aria-hidden'); else el.setAttribute('aria-hidden', 'true');
        });
      }, ROTATION_MS);
    }
    _arreterRotation() { if (this._rotation) { clearInterval(this._rotation); this._rotation = null; } }
  }

  window.customElements.define('rdr-entete', RdrEntete);
})();

})();
