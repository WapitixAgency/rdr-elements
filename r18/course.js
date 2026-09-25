/* rdr-elements course | source route-du-rhum 7b2eabf | heritage-timeline.js boat-diagram.js pactes-tabs.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["course"]="7b2eabf";performance.mark("rdr-elements:course")}catch(e){}
;(function(){
if (!customElements.get('heritage-timeline')) {
const template = document.createElement('template');
template.innerHTML = `
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  :host{display:block;width:100%;background:transparent;padding:3rem 0}
  @keyframes ht-in{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  .year-item{animation:ht-in 1.4s cubic-bezier(0.22,1,0.36,1) both;}
  .track-outer{overflow:visible;width:100%}
  .track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:20px 200px 0 16px;cursor:grab;user-select:none;-webkit-user-select:none;-webkit-overflow-scrolling:touch;align-items:flex-end;gap:20px;touch-action:pan-y;height:420px}
  .track::-webkit-scrollbar{display:none}
  .track.grabbing{cursor:grabbing}
  .year-item{flex:0 0 108px;scroll-snap-align:center;display:flex;flex-direction:column;align-items:center;gap:14px;padding:1rem 0;cursor:pointer;transition:all 0.2s;justify-content:flex-end}
  .year-item:focus-visible{outline:2px solid #5DBFC0;outline-offset:2px;border-radius:8px}
  .year-dot{width:6px;height:6px;border-radius:50%;background:rgba(0,0,0,0.15);transition:all 0.3s;flex-shrink:0}
  .year-label{font-family:'Varien',sans-serif;font-style:normal;-webkit-font-smoothing:antialiased;font-size:30px;color:rgba(245,190,65,0.25);writing-mode:vertical-lr;transform:rotate(180deg);transition:color 0.35s cubic-bezier(0.25,0,0,1),font-size 0.35s cubic-bezier(0.25,0,0,1),letter-spacing 0.35s cubic-bezier(0.25,0,0,1);letter-spacing:4px;line-height:0.9;text-rendering:geometricPrecision;white-space:nowrap}
  .year-edition-wrap{display:flex;flex-direction:column;align-items:center;gap:3px}
  .year-num{font-size:10px;font-weight:700;-webkit-font-smoothing:antialiased;color:rgba(0,103,110,0.3);letter-spacing:2px;text-transform:uppercase;text-align:center;transition:all 0.3s;font-family:'Montserrat',sans-serif}
  .year-ed{font-size:10px;font-weight:700;-webkit-font-smoothing:antialiased;color:rgba(0,103,110,0.3);letter-spacing:2px;text-transform:uppercase;text-align:center;transition:all 0.3s;font-family:'Montserrat',sans-serif}
  .year-item.active .year-dot{background:#5DBFC0;width:10px;height:10px}
  .year-item.active .year-label{color:#00676E;font-size:88px;letter-spacing:4px}
  .year-item.active .year-num{color:#00676E;font-size:11px}
  .year-item.active .year-ed{color:#00676E;font-size:11px}
  .year-item.near .year-label{color:rgba(245,190,65,0.7);font-size:54px;letter-spacing:4px}
  .year-item.near .year-dot{background:rgba(245,190,65,0.5)}
  .year-item.near .year-num{color:rgba(0,103,110,0.5)}
  .year-item.near .year-ed{color:rgba(0,103,110,0.5)}
  .year-item.near:hover .year-label{color:rgba(245,190,65,0.9);font-size:60px;letter-spacing:4px}
  .year-item.near:hover .year-dot{background:rgba(245,190,65,0.8);width:9px;height:9px}
  .year-item.near:hover .year-num{color:rgba(0,103,110,0.8)}
  .year-item.near:hover .year-ed{color:rgba(0,103,110,0.8)}
  .year-item:not(.active):not(.near):hover .year-label{color:rgba(245,190,65,0.6);font-size:37px;letter-spacing:4px}
  .year-item:not(.active):not(.near):hover .year-dot{background:rgba(245,190,65,0.6);width:8px;height:8px}
  .year-item:not(.active):not(.near):hover .year-num{color:rgba(0,103,110,0.7)}
  .year-item:not(.active):not(.near):hover .year-ed{color:rgba(0,103,110,0.7)}
  .nav{display:flex;justify-content:center;gap:2rem;padding:2rem 0 0.5rem}
  .nav-btn{width:52px;height:52px;border-radius:50%;border:1.5px solid rgba(245,190,65,0.5);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}
  .nav-btn::before{content:'';position:absolute;inset:0;background:#F5BE41;opacity:0;transition:opacity 0.3s;border-radius:50%}
  .nav-btn svg{position:relative;z-index:1;transition:transform 0.3s}
  .nav-btn:hover{border-color:#F5BE41}
  .nav-btn:hover::before{opacity:0.12}
  .nav-btn:hover svg{transform:scale(1.15)}
  .nav-btn:active svg{transform:scale(0.9)}
  @media(max-width:768px){
    :host{padding:1.25rem 0}
    .track{padding:0 calc(50% - 54px);height:320px;gap:14px}
    .year-item{flex:0 0 90px;gap:14px}
    .year-label{font-size:25px}
    .year-item.active .year-label{font-size:68px;letter-spacing:3px}
    .year-item.near .year-label{font-size:42px;letter-spacing:3px}
    .nav{gap:1rem;padding:1.25rem 0 0.25rem}
    .nav-btn{width:46px;height:46px}
  }
   
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
  }
</style>
<div class="track-outer">
  <div class="track" id="track"></div>
</div>
<div class="nav">
  <button class="nav-btn" id="prev" type="button" aria-label="Précédent">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 5L7 10L12 15" stroke="#F5BE41" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <button class="nav-btn" id="next" type="button" aria-label="Suivant">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5L13 10L8 15" stroke="#F5BE41" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
</div>
`;

class HeritageTimeline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._current = 0;
    this._editions = [];
    this._fontsReady = false;
    this._suppressClickUntil = 0;
    this._navBound = false;  
    this._drag = { active: false, pointerId: null, startX: 0, scrollLeft: 0, moved: false };
  }

  static get observedAttributes() { return ['editions', 'lang']; }

  connectedCallback() {
    this._loadEditions();
    this._waitFonts().then(() => {
      this._build();
      this._bindNav();
      this._setActive(0, true);
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) return;
    if (name === 'lang') { this._build(); return; }
    if (name !== 'editions') return;
    this._loadEditions();
    if (!this.isConnected) return;
    this._waitFonts().then(() => {
      this._build();
      this._setActive(0, true);
    });
  }

  _waitFonts() {
    if (this._fontsReady) return Promise.resolve();
    if (!document.fonts?.load) { this._fontsReady = true; return Promise.resolve(); }
    return Promise.allSettled([
      document.fonts.load('normal 67px "Varien"'),
      document.fonts.load('normal 30px "Varien"'),
      document.fonts.load('normal 110px "Varien"')
    ]).then(() => { this._fontsReady = true; });
  }

  _loadEditions() {
    const attr = this.getAttribute('editions');
    if (attr) {
      try {
        const parsed = JSON.parse(attr);
        if (Array.isArray(parsed) && parsed.length) { this._editions = parsed; return; }
      } catch(e) {}
    }
    this._editions = [
      {year:2022,num:'12ème'},{year:2018,num:'11ème'},
      {year:2014,num:'10ème'},{year:2010,num:'9ème'},
      {year:2006,num:'8ème'},{year:2002,num:'7ème'},
      {year:1998,num:'6ème'},{year:1994,num:'5ème'},
      {year:1990,num:'4ème'},{year:1986,num:'3ème'},
      {year:1982,num:'2ème'},{year:1978,num:'1ère'}
    ];
  }

   
   
  _esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  _build() {
    const track = this.shadowRoot.getElementById('track');
    if (!track) return;
    const lang = this.getAttribute('lang') || 'fr';
    const edLabel = lang === 'en' ? 'EDITION' : 'ÉDITION';
     
    const prevBtn = this.shadowRoot.getElementById('prev');
    const nextBtn = this.shadowRoot.getElementById('next');
    if (prevBtn) prevBtn.setAttribute('aria-label', lang === 'en' ? 'Previous' : 'Précédent');
    if (nextBtn) nextBtn.setAttribute('aria-label', lang === 'en' ? 'Next' : 'Suivant');
    const cur = this._current;
    track.innerHTML = '';
    this._editions.forEach((ed, i) => {
      const item = document.createElement('div');
      item.className = 'year-item';
       
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', (lang === 'en' ? 'Edition ' : 'Édition ') + ed.year);
      item.innerHTML = `
        <div class="year-dot"></div>
        <div class="year-label">${this._esc(ed.year)}</div>
        <div class="year-edition-wrap">
          <div class="year-num">${this._esc(String(ed.num || '').replace(/édition/i, '').trim())}</div>
          <div class="year-ed">${edLabel}</div>
        </div>`;
      item.style.animationDelay = `${i * 120}ms`;
      item.addEventListener('click', () => {
        if (Date.now() < this._suppressClickUntil) return;
        this._setActive(i, false);
      });
       
       
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); this._setActive(i, false); }
      });
      track.appendChild(item);
    });
    this._setActive(cur, true);
  }

  _bindNav() {
     
     
     
     
    if (this._navBound) return;
    this._navBound = true;
    this.shadowRoot.getElementById('prev').addEventListener('click', () => {
      if (this._current > 0) this._setActive(this._current - 1, false);
    });
    this.shadowRoot.getElementById('next').addEventListener('click', () => {
      if (this._current < this._editions.length - 1) this._setActive(this._current + 1, false);
    });

    const track = this.shadowRoot.getElementById('track');

    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      this._drag.active = true;
      this._drag.pointerId = e.pointerId;
      this._drag.startX = e.clientX;
      this._drag.scrollLeft = track.scrollLeft;
      this._drag.moved = false;
      track.classList.add('grabbing');
    });

    track.addEventListener('pointermove', (e) => {
      if (!this._drag.active || e.pointerId !== this._drag.pointerId) return;
      const deltaX = e.clientX - this._drag.startX;
      if (Math.abs(deltaX) > 4) this._drag.moved = true;
      if (this._drag.moved) track.scrollLeft = this._drag.scrollLeft - deltaX * 1.5;
    });

    const endDrag = (e) => {
      if (e && this._drag.pointerId !== null && e.pointerId !== this._drag.pointerId) return;
      if (this._drag.moved) this._suppressClickUntil = Date.now() + 120;
      this._drag = { active: false, pointerId: null, startX: 0, scrollLeft: 0, moved: false };
      track.classList.remove('grabbing');
    };

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('lostpointercapture', endDrag);
  }

  _setActive(index, isInit = false) {
    this._current = Math.max(0, Math.min(index, this._editions.length - 1));
    const items = this.shadowRoot.querySelectorAll('.year-item');
    items.forEach((item, i) => {
      item.classList.remove('active', 'near');
      if (i === this._current) item.classList.add('active');
      else if (Math.abs(i - this._current) === 1) item.classList.add('near');
    });
    if (!isInit) {
      items[this._current]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    const ed = this._editions[this._current];
    this.dispatchEvent(new CustomEvent('editionChange', {
      detail: { year: ed.year, num: ed.num },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('heritage-timeline', HeritageTimeline);
}
})();
;(function(){
if (!customElements.get('boat-diagram')) {

const SVG_ICONS = {
  default:`<svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.3"/><circle cx="7" cy="7" r="2" fill="currentColor"/></svg>`,
  mat:    `<svg viewBox="0 0 14 14" fill="none"><line x1="7" y1="12.5" x2="7" y2="1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polyline points="4.5,4.5 7,1.5 9.5,4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="5" y1="12.5" x2="9" y2="12.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  quille: `<svg viewBox="0 0 14 14" fill="none"><line x1="7" y1="2" x2="7" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 8 Q4 10 3 13 L11 13 Q10 10 7 8Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  foils:  `<svg viewBox="0 0 14 14" fill="none"><path d="M2 12 Q4 6 8 4 Q11 3 12.5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 1.5 L12.5 2 L11.5 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  safrans:`<svg viewBox="0 0 14 14" fill="none"><path d="M7 2.5 L7 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 8.5 Q4 9.5 3.5 12 Q5.5 13 7 11.5 Q8.5 13 10.5 12 Q10 9.5 7 8.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
  cockpit:`<svg viewBox="0 0 14 14" fill="none"><path d="M2.5 9 Q2.5 12.5 7 12.5 Q11.5 12.5 11.5 9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M2.5 9 L4 5.5 L10 5.5 L11.5 9" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><line x1="7" y1="2" x2="7" y2="5.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  voiles: `<svg viewBox="0 0 14 14" fill="none"><path d="M5 13 L5 1.5 Q9.5 4 11 13 Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><line x1="5" y1="7.5" x2="10" y2="9" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.6"/></svg>`,
  derive: `<svg viewBox="0 0 14 14" fill="none"><line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 5 Q2 8.5 7 12 Q12 8.5 10.5 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function getIcon(id, label) {
  const src = (label||id||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  if (src.includes('mat') || src.includes('mât')) return SVG_ICONS.mat;
  if (src.includes('quille')) return SVG_ICONS.quille;
  if (src.includes('foil')) return SVG_ICONS.foils;
  if (src.includes('safran')) return SVG_ICONS.safrans;
  if (src.includes('cockpit')) return SVG_ICONS.cockpit;
  if (src.includes('voile') || src.includes('derive') || src.includes('dérive')) return SVG_ICONS.voiles;
  const k = (id||'').toLowerCase().replace(/\d+/g,'');
  return SVG_ICONS[k] || SVG_ICONS.default;
}

function wixToUrl(v) {
  if (!v) return '';
  if (v.startsWith('http')) return v;
  const m = v.match(/wix:image:\/\/v1\/([^\/#]+)/);
  if (m) return 'https://static.wixstatic.com/media/' + m[1];
  const s = v.match(/wix:vector:\/\/v1\/([^\/#]+)/);
  if (s) return 'https://static.wixstatic.com/shapes/' + s[1];
  return v;
}

 
function isSafeUrl(u, fallback) {
  fallback = arguments.length > 1 ? fallback : '';
  if (u == null) return fallback;
  let s = String(u).trim();
  if (!s) return fallback;
  let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
  if (m) s = 'https://static.wixstatic.com/media/' + m[1];
  else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
  const okScheme = /^https?:/i.test(s);
  const relative = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
  if (!okScheme && !relative) return fallback;
  return s.replace(/"/g, '%22').replace(/'/g, '%27');
}
function isSafeColor(c, fallback) {
  fallback = arguments.length > 1 ? fallback : '#5DBFC0';
  if (c == null) return fallback;
  const hex = String(c).trim().replace(/^#/, '');
  return /^[0-9a-fA-F]{3,8}$/.test(hex) ? '#' + hex : fallback;
}

class BoatDiagram extends HTMLElement {
  constructor() {
    super();
    this._activePoint = null;
    this._points = [];
    this._onDocClick = this._onDocClick.bind(this);
  }

  static get observedAttributes() { return ['image','points','color','class-label']; }
  attributeChangedCallback() { requestAnimationFrame(() => this._render()); }

  connectedCallback() {
    requestAnimationFrame(() => this._render());
  }

  disconnectedCallback() {}
  _onDocClick(e) { if (!this.contains(e.target)) this._close(); }

  _render() {
    const color = isSafeColor(this.getAttribute('color') || '#5DBFC0');
    const imageUrl = isSafeUrl(wixToUrl(this.getAttribute('image') || ''));
    try { this._points = JSON.parse(this.getAttribute('points') || '[]'); } catch { this._points = []; }

    this.innerHTML = `
<style>
  .bd-wrap{position:relative;width:100%;user-select:none;}
  .bd-wrap img.bd-img{display:block;width:100%;height:auto;pointer-events:none;}
  .bd-point{position:absolute;transform:translate(-50%,-50%);cursor:pointer;z-index:10;}
  .bd-dot-w{position:relative;width:16px;height:16px;}
  .bd-dot{position:absolute;inset:0;border-radius:50%;background:${color};border:2px solid rgba(255,255,255,0.9);box-shadow:0 2px 10px rgba(0,0,0,0.3),0 0 0 4px rgba(93,191,192,0.14);transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;z-index:2;}
  .bd-point:hover .bd-dot,.bd-point.bd-active .bd-dot{transform:scale(1.4);box-shadow:0 4px 18px rgba(0,0,0,0.4),0 0 0 7px rgba(93,191,192,0.18);}
  .bd-ring{position:absolute;border-radius:50%;border:1.5px solid ${color};opacity:0;z-index:1;animation:bd-rip 3s ease-out infinite;}
  .bd-ring-1{inset:-8px;animation-delay:0s;}.bd-ring-2{inset:-16px;animation-delay:1.1s;}
  @keyframes bd-rip{0%{opacity:.4;transform:scale(.5);}100%{opacity:0;transform:scale(1);}}
  .bd-point.bd-active .bd-ring{animation-play-state:paused;opacity:0;}
  .bd-info{margin-top:0;background:linear-gradient(160deg,#0e111d 0%,#101726 60%,#0c1520 100%);border:1px solid rgba(93,191,192,0.13);border-top:none;border-radius:0 0 12px 12px;overflow:hidden;opacity:0;min-height:0;max-height:0;transition:opacity .3s ease,max-height .35s cubic-bezier(.16,1,.3,1);pointer-events:none;}
  .bd-info.bd-vis{opacity:1;max-height:400px;pointer-events:auto;}
  .bd-content{opacity:1;transition:opacity .18s ease;}
  .bd-content.bd-fade{opacity:0;}
  .bd-acc{height:2px;background:linear-gradient(90deg,transparent 0%,${color} 25%,${color} 75%,transparent 100%);}
  .bd-hdr{padding:14px 16px 11px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,0.06);background:linear-gradient(90deg,rgba(93,191,192,0.04) 0%,transparent 60%);}
  .bd-ico{width:28px;height:28px;border-radius:7px;background:rgba(93,191,192,0.08);border:1px solid rgba(93,191,192,0.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .bd-ico svg{width:17px;height:17px;}
  .bd-ttl{font-family:'Varien',sans-serif;font-style:italic;font-size:22px;letter-spacing:0.05em;text-transform:uppercase;line-height:1;}
  .bd-bdy{padding:12px 16px 14px;min-height:60px;}
  .bd-det{font-family:'Montserrat',sans-serif;font-size:13px;line-height:1.7;color:rgba(255,255,255,0.85);margin:0;}
  .bd-ftr{padding:7px 16px 11px;border-top:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;gap:8px;}
  .bd-fline{height:1px;flex:1;background:linear-gradient(90deg,rgba(93,191,192,0.25),transparent);}
  .bd-cls{font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;white-space:nowrap;}
</style>
<div class="bd-wrap">
  ${imageUrl ? `<img class="bd-img" src="${imageUrl}" />` : '<div style="width:100%;aspect-ratio:1;background:#0a1829;border-radius:8px 8px 0 0;"></div>'}
</div>
<div class="bd-info" id="bd-info">
  <div class="bd-content" id="bd-content">
    <div class="bd-acc" id="bd-acc"></div>
    <div class="bd-hdr">
      <div class="bd-ico" id="bd-ico"></div>
      <div class="bd-ttl" id="bd-ttl"></div>
    </div>
    <div class="bd-bdy"><p class="bd-det" id="bd-det"></p></div>
    <div class="bd-ftr" id="bd-ftr">
      <div class="bd-fline"></div>
      <div class="bd-cls" id="bd-cls"></div>
    </div>
  </div>
</div>`;

    const img = this.querySelector('.bd-img');
    if (img) {
      img.onload = () => this._placePoints();
      if (img.complete && img.naturalHeight > 0) this._placePoints();
    }
  }

  _placePoints() {
    const wrap = this.querySelector('.bd-wrap');
    if (!wrap) return;
    wrap.querySelectorAll('.bd-point').forEach(p => p.remove());
    this._points.forEach(p => {
      const el = document.createElement('div');
      el.className = 'bd-point';
      el.style.left = p.x + '%'; el.style.top = p.y + '%';
      el.innerHTML = `<div class="bd-dot-w"><div class="bd-ring bd-ring-1"></div><div class="bd-ring bd-ring-2"></div><div class="bd-dot"></div></div>`;
      el.addEventListener('click', e => { e.stopPropagation(); this._show(el, p); });
      el.addEventListener('mouseenter', () => this._show(el, p));
      wrap.appendChild(el);
    });
  }

  _show(pointEl, data) {
    const info = this.querySelector('#bd-info');
    if (!info) return;
    if (this._activePoint === pointEl) return;
    if (this._activePoint) this._activePoint.classList.remove('bd-active');
    this._activePoint = pointEl;
    pointEl.classList.add('bd-active');
    const color = this.getAttribute('color') || '#5DBFC0';
    const content = this.querySelector('#bd-content');
    if (info.classList.contains('bd-vis') && content) {
      content.classList.add('bd-fade');
      setTimeout(() => { this._updateContent(color, data); content.classList.remove('bd-fade'); }, 160);
    } else {
      this._updateContent(color, data);
      info.classList.add('bd-vis');
    }
  }

  _updateContent(color, data) {
    const classLabel = this.getAttribute('class-label') || '';
    const icoEl = this.querySelector('#bd-ico');
    icoEl.style.color = color;
    icoEl.innerHTML = getIcon(data.id, data.label);
    const ttl = this.querySelector('#bd-ttl');
    ttl.textContent = data.label || '';
    ttl.style.color = color;
    this.querySelector('#bd-det').textContent = data.detail || '';
    const acc = this.querySelector('#bd-acc');
    if (acc) acc.style.background = `linear-gradient(90deg,transparent 0%,${color} 25%,${color} 75%,transparent 100%)`;
    const clsEl = this.querySelector('#bd-cls');
    clsEl.textContent = classLabel;
    clsEl.style.color = color;
    clsEl.style.opacity = '0.55';
    const ftr = this.querySelector('#bd-ftr');
    if (ftr) ftr.style.display = classLabel ? 'flex' : 'none';
  }

  _close() {
    const info = this.querySelector('#bd-info');
    if (info) info.classList.remove('bd-vis');
    if (this._activePoint) { this._activePoint.classList.remove('bd-active'); this._activePoint = null; }
  }
}

customElements.define('boat-diagram', BoatDiagram);
}
})();
;(function(){
(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('pactes-tabs')) return;

   
  const T = {
    marine:   '#0B1E30',
    offWhite: '#F4F2EC',
    ink:      '#0B1E30',
    inkSoft:  '#4A5A6A',
    line:     '#DCD6C4',
    dotIdle:  '#C9C3AE',
    credit:   '#6B6247'    
  };
   
   
   
   
   
   
   
  const COULEURS = {
    durable:     '#00676E',
    territorial: '#5DBFC0',
    heritage:    '#F5BE41'
  };
  const COULEUR_DEFAUT = COULEURS.durable;
  const MARINE = '#16355D';    

   
   
   
   
  function luminance(hex) {
    const c = String(hex).replace('#', '');
    if (c.length !== 6) return 0;
    const v = [0, 2, 4].map(i => parseInt(c.substr(i, 2), 16) / 255)
      .map(x => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)));
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  }
  function contraste(a, b) {
    const x = luminance(a), y = luminance(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function texteSur(fond) {
    return contraste('#FFFFFF', fond) >= contraste(MARINE, fond) ? '#FFFFFF' : MARINE;
  }

  const I18N = {
    fr: { vide: 'Contenu à venir', image: 'Image à ajouter', pactes: 'Nos pactes d’engagement' },
    en: { vide: 'Content coming soon', image: 'Image to add', pactes: 'Our commitment pacts' }
  };

  const CSS = `
    pactes-tabs { display: block; width: 100%; }

    .pt-root, .pt-root *, .pt-root *::before, .pt-root *::after { box-sizing: border-box; }
    .pt-root {
      font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
      color: ${T.ink};
      --pt-c: ${COULEUR_DEFAUT};
      --pt-c-txt: #fff;
      



      overflow: hidden;
      overflow: clip;
    }
    

    .pt-root button {
      appearance: none; -webkit-appearance: none;
      background: none; border: 0; padding: 0; margin: 0;
      font: inherit; color: inherit; cursor: pointer; text-align: left;
    }
    .pt-root p, .pt-root h2, .pt-root h3, .pt-root ul, .pt-root li { margin: 0; padding: 0; }
    .pt-root ul { list-style: none; }
    .pt-root img { max-width: 100%; display: block; }

    .pt-vide { padding: 40px; text-align: center; color: ${T.inkSoft}; font-size: 14px; }

     
    .pt-route { display: flex; align-items: flex-start; margin-bottom: 40px; position: relative; }
    

    .pt-route::before {
      content: ''; position: absolute; top: 26px; height: 2px; z-index: 0;
      left: calc(100% / (2 * var(--pt-n))); right: calc(100% / (2 * var(--pt-n)));
      background: repeating-linear-gradient(90deg, ${T.dotIdle} 0 8px, transparent 8px 16px);
    }
    






    .pt-root .pt-stop {
      flex: 1 1 0; min-width: 0; position: relative; z-index: 1;
      display: flex; flex-direction: column; align-items: center; gap: 12px;
      padding: 0 8px;
    }
    .pt-pastille {
      width: 52px; height: 52px; border-radius: 50%; background: ${T.offWhite};
      border: 2px solid ${T.dotIdle}; display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 15px; color: ${T.inkSoft};
      transition: background-color .25s ease, border-color .25s ease, color .25s ease;
    }
    .pt-etiquette {
      font-size: 14px; font-weight: 700; color: ${T.inkSoft}; text-align: center;
      transition: color .25s ease; line-height: 1.3;
    }
    .pt-stop[aria-selected="true"] .pt-pastille {
      background: var(--pt-stop); border-color: var(--pt-stop); color: var(--pt-stop-txt);
    }
    .pt-stop[aria-selected="true"] .pt-etiquette { color: ${T.ink}; }
    


    @media (hover: hover) and (pointer: fine) {
      .pt-stop:hover .pt-pastille { border-color: var(--pt-stop); }
    }
    


    .pt-stop:focus-visible { outline: none; }
    .pt-stop:focus-visible .pt-pastille { outline: 2px solid var(--pt-stop); outline-offset: 3px; }

     
    .pt-panneau { display: none; }
    .pt-panneau.pt-on { display: block; animation: pt-monte .35s ease; }
    @keyframes pt-monte { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

    .pt-tete {
      display: grid; grid-template-columns: 1.3fr .7fr; gap: 40px; align-items: start;
      margin-bottom: 36px; padding-bottom: 36px; border-bottom: 1px solid ${T.line};
    }
    .pt-tag {
      display: inline-block; font-size: 12px; font-weight: 800; letter-spacing: .08em;
      text-transform: uppercase; padding: 6px 14px; border-radius: 100px; color: var(--pt-c-txt);
      margin-bottom: 16px; background: var(--pt-c);
    }
    .pt-root .pt-titre { font-weight: 800; font-size: clamp(24px, 3vw, 32px); margin-bottom: 14px; line-height: 1.2; }
    .pt-desc { font-size: 15.5px; line-height: 1.65; color: ${T.inkSoft}; margin-bottom: 16px; }
    .pt-desc p { margin-bottom: 10px; }
    .pt-desc p:last-child { margin-bottom: 0; }
    .pt-question { font-style: italic; font-weight: 600; font-size: 16px; color: ${T.ink}; }

    .pt-visuel {
      aspect-ratio: 5 / 4; border-radius: 14px; overflow: hidden; background: #E4E0D4;
      display: flex; align-items: center; justify-content: center;
    }
    .pt-visuel--vide { border: 1px dashed #B9B29B; }
    .pt-visuel img { width: 100%; height: 100%; object-fit: cover; }
    .pt-visuel span { color: #5F5A45; font-size: 13px; font-weight: 600; text-align: center; padding: 16px; }

     
    .pt-acc { border-top: 1px solid ${T.line}; }
    .pt-item { border-bottom: 1px solid ${T.line}; }
    .pt-root .pt-declencheur {
      width: 100%; display: flex; align-items: center; justify-content: space-between;
      gap: 16px; padding: 20px 4px;
    }
    .pt-declencheur:focus-visible { outline: 2px solid var(--pt-c); outline-offset: -2px; }
    .pt-nom { font-weight: 700; font-size: 17px; color: ${T.ink}; }
    .pt-chevron {
      width: 28px; height: 28px; flex: 0 0 28px; border-radius: 50%;
      border: 1.5px solid ${T.dotIdle}; position: relative;
    }
    .pt-chevron::before, .pt-chevron::after {
      content: ''; position: absolute; top: 50%; left: 50%; background: ${T.inkSoft};
    }
    .pt-chevron::before { width: 12px; height: 2px; transform: translate(-50%, -50%); }
    .pt-chevron::after  { width: 2px; height: 12px; transform: translate(-50%, -50%); transition: transform .2s ease; }
    .pt-item.pt-ouvert .pt-chevron::after { transform: translate(-50%, -50%) rotate(90deg); }
    .pt-item.pt-ouvert .pt-chevron { border-color: var(--pt-c); }

    


    .pt-tiroir { overflow: hidden; height: 0; transition: height .3s ease; }
    .pt-root.pt-net .pt-tiroir, .pt-root.pt-net .pt-chevron::after { transition: none; }
    .pt-tiroir-dedans { padding: 0 4px 24px; }
    .pt-liste { display: grid; gap: 12px; }
    .pt-liste li { font-size: 15px; line-height: 1.55; color: ${T.inkSoft}; padding-left: 18px; position: relative; }
    .pt-liste li::before {
      content: ''; position: absolute; left: 0; top: 9px; width: 6px; height: 6px;
      border-radius: 50%; background: var(--pt-c);
    }
    .pt-liste li a { color: var(--pt-c); font-weight: 700; text-decoration: none; }
    .pt-liste li a:hover { text-decoration: underline; }
    .pt-credit { font-size: 12.5px; color: ${T.credit}; font-style: italic; }
    .pt-credit a { color: ${T.credit}; font-style: italic; text-decoration: underline; }

    

    .pt-intro { font-size: 14.5px; line-height: 1.6; color: ${T.inkSoft}; margin-bottom: 16px; }

    .pt-boutons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
    .pt-root .pt-bouton {
      display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; border-radius: 100px;
      border: 1.5px solid var(--pt-c); color: var(--pt-c); font-weight: 700; font-size: 13.5px;
      text-decoration: none; transition: background-color .2s ease, color .2s ease;
    }
    .pt-root .pt-bouton:hover { background: var(--pt-c); color: var(--pt-c-txt); }

    @media (max-width: 860px) {
      .pt-tete { grid-template-columns: 1fr; gap: 28px; }
      .pt-visuel { aspect-ratio: 16 / 9; }
      .pt-etiquette { font-size: 12px; }
      .pt-pastille { width: 44px; height: 44px; font-size: 13px; }
      .pt-route::before { top: 22px; }
      .pt-root .pt-declencheur { padding: 18px 4px; min-height: 56px; }
    }
    @media (max-width: 520px) {
      



      .pt-route { display: grid; grid-template-columns: repeat(var(--pt-n), minmax(0, 1fr)); }
      .pt-pastille { width: 40px; height: 40px; font-size: 12.5px; }
      .pt-route::before { top: 20px; }
      .pt-root .pt-stop { padding: 0 2px; gap: 10px; }
      .pt-etiquette { font-size: 11.5px; }

      

      .pt-route.pt-pile { grid-template-columns: repeat(2, 1fr); gap: 16px 8px; }
      .pt-route.pt-pile::before { display: none; }
      

      .pt-route.pt-pile .pt-stop { flex-direction: row; justify-content: flex-start; min-height: 44px; }
      .pt-route.pt-pile .pt-etiquette { text-align: left; }
    }
    @media (prefers-reduced-motion: reduce) {
      .pt-panneau.pt-on { animation: none; }
      .pt-tiroir, .pt-pastille, .pt-etiquette, .pt-chevron::after { transition: none; }
    }
  `;

   

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

   
   
   
   
  function estHtml(s) {
    return typeof s === 'string' && /<\/?[a-z][\s\S]*>/i.test(s);
  }

   
   
   
  function htmlSur(s) {
    return String(s || '')
      .replace(/<\s*(script|style|iframe|object|embed)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
      .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
      .replace(/javascript:/gi, '');
  }

  function texteDepuisHtml(s) {
    return String(s || '')
      .replace(/<\s*br\s*\/?\s*>/gi, '\n')
      .replace(/<\s*\/\s*(p|li|div|h[1-6])\s*>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"').replace(/&#39;/gi, "'");
  }

   
   
  const SEP_CREDIT = ' — ';
   
   
   
   
   
  const SEP_LIEN = ' → ';

  function lireInitiatives(valeur) {
    if (!valeur) return [];
    const brut = estHtml(valeur) ? texteDepuisHtml(valeur) : String(valeur);
    return brut
      .split('\n')
      .map(l => l.trim())
      .filter(Boolean)
      .map(ligne => {
        const iCredit = ligne.lastIndexOf(SEP_CREDIT);
        const partieTexte = iCredit === -1 ? ligne : ligne.slice(0, iCredit).trim();
        const partieCredit = iCredit === -1 ? '' : ligne.slice(iCredit + SEP_CREDIT.length).trim();

        let texte = partieTexte, lien = '';
        const iLien = partieTexte.lastIndexOf(SEP_LIEN);
        if (iLien !== -1) {
          texte = partieTexte.slice(0, iLien).trim();
          lien = partieTexte.slice(iLien + SEP_LIEN.length).trim();
        }

        const credits = partieCredit
          ? partieCredit.split(' / ').map(seg => {
              const s = seg.trim();
              const j = s.lastIndexOf(SEP_LIEN);
              return j === -1 ? { nom: s, lien: '' } : { nom: s.slice(0, j).trim(), lien: s.slice(j + SEP_LIEN.length).trim() };
            }).filter(c => c.nom)
          : [];

        return { texte, lien, credits };
      });
  }

   
  function lireBoutons(valeur) {
    if (!valeur) return [];
    const brut = estHtml(valeur) ? texteDepuisHtml(valeur) : String(valeur);
    return brut
      .split('\n')
      .map(l => l.trim())
      .filter(Boolean)
      .map(ligne => {
        const i = ligne.lastIndexOf(SEP_LIEN);
        if (i === -1) return null;
        return { label: ligne.slice(0, i).trim(), url: ligne.slice(i + SEP_LIEN.length).trim() };
      })
      .filter(Boolean);
  }

   
   
  function urlImage(entree) {
    if (!entree) return '';
    if (typeof entree === 'object') {
      return urlImage(entree.src || entree.url || entree.uri ||
                      (entree.relativeUri ? 'https://static.wixstatic.com/media/' + entree.relativeUri : ''));
    }
    if (typeof entree !== 'string') return '';
    if (entree.startsWith('http')) return entree;
    if (/^data:image\//i.test(entree)) return entree;
    let m = entree.match(/^wix:image:\/\/v1\/([^/#]+)/);
    if (m) return 'https://static.wixstatic.com/media/' + m[1];
    m = entree.match(/^wix:vector:\/\/v1\/([^/#]+)/);
    if (m) return 'https://static.wixstatic.com/shapes/' + m[1];
    return '';
  }

   
   
  function tailleOrigine(entree) {
    const s = typeof entree === 'string' ? entree
            : (entree && typeof entree === 'object' ? String(entree.src || entree.url || '') : '');
    const l = s.match(/originWidth=(\d+)/), h = s.match(/originHeight=(\d+)/);
    return (l && h) ? { l: Number(l[1]), h: Number(h[1]) } : null;
  }

  function urlImageDim(entree, l, h, q) {
     
    const src = tailleOrigine(entree);
    if (src && src.l > 0 && src.h > 0 && src.l < l) {
      h = Math.max(1, Math.round(h * (src.l / l)));
      l = src.l;
    }
    const base = urlImage(entree);
    if (!base || base.indexOf('static.wixstatic.com/media/') === -1) return base;    
    if (base.indexOf('/v1/fill/') !== -1) return base;
    const m = base.match(/\/media\/([^/]+)$/);
    if (!m) return base;
    return 'https://static.wixstatic.com/media/' + m[1] +
           '/v1/fill/w_' + l + ',h_' + h + ',al_c,q_' + (q || 82) + ',enc_auto/' + m[1];
  }

  function couleurDe(cle) {
    return COULEURS[String(cle || '').toLowerCase()] || COULEUR_DEFAUT;
  }

   
   
   
   
  function trierParOrdre(liste) {
    return Array.isArray(liste)
      ? liste.filter(x => x && typeof x === 'object')
             .sort((a, b) => (Number(a.ordre) || 0) - (Number(b.ordre) || 0))
      : [];
  }

   

  class PactesTabs extends HTMLElement {
    static get observedAttributes() { return ['payload', 'lang']; }

    constructor() {
      super();
      this._initialized = false;
      this._teardown = [];
      this._pactes = [];
      this._lang = 'fr';
      this._actif = 0;
       
       
      this._ouverts = {};
      this._pendingPayload = null;
      this._pendingLang = null;
    }

    connectedCallback() {
       
       
       
       
      if (this._initialized) {
        if (this._root && !this._teardown.length && this._pactes.length) {
          this._brancher();
          this._majTiroirs(true);
        }
        return;
      }
      this._initialized = true;

      this.innerHTML = '<style>' + CSS + '</style><div class="pt-root"></div>';
      this._root = this.querySelector('.pt-root');

      if (this._pendingLang)    { this._lang = this._pendingLang; this._pendingLang = null; }
      if (this._pendingPayload) { this._appliquer(this._pendingPayload); this._pendingPayload = null; return; }
      this._rendre();
    }

    disconnectedCallback() {
      this._teardown.forEach(fn => { try { fn(); } catch (e) {   } });
      this._teardown = [];
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres) return;
      if (!this._initialized) {
        if (nom === 'payload') { try { this._pendingPayload = JSON.parse(apres || '[]'); } catch (e) {   } }
        if (nom === 'lang')    { this._pendingLang = apres; }
        return;
      }
      if (nom === 'payload') {
        let v = null;
        try { v = JSON.parse(apres || '[]'); }
        catch (e) { console.error('[pactes-tabs] payload illisible', e); return; }
        this._appliquer(v);
      } else if (nom === 'lang') {
        this._lang = apres === 'en' ? 'en' : 'fr';
        this._rendre();
      }
    }

     
     
    setPayload(v) { this._initialized ? this._appliquer(v) : (this._pendingPayload = v); }
    setLang(l)    { if (this._initialized) { this._lang = l === 'en' ? 'en' : 'fr'; this._rendre(); } else { this._pendingLang = l; } }

    _appliquer(v) {
      this._pactes = trierParOrdre(v);
      if (this._actif >= this._pactes.length) this._actif = 0;
       
       
       
      this._ouverts = {};
      this._rendre();
    }

    _t(cle) { return (I18N[this._lang] || I18N.fr)[cle]; }

    _rendre() {
      if (!this._root) return;
       
       
      this._teardown.forEach(fn => { try { fn(); } catch (e) {   } });
      this._teardown = [];

      if (!this._pactes.length) {
        this._root.innerHTML = '<div class="pt-vide">' + esc(this._t('vide')) + '</div>';
        return;
      }

      this._root.style.setProperty('--pt-n', String(this._pactes.length));
      this._root.innerHTML =
        this._routeHtml() +
        this._pactes.map((p, i) => this._panneauHtml(p, i)).join('');

      this._brancher();
      this._majTiroirs(true);
    }

    _routeHtml() {
      const stops = this._pactes.map((p, i) => {
        const actif = i === this._actif;
        const coul = couleurDe(p.couleurCle);
        const nom = p.nomCourt || p.titre || '';
        return '' +
          '<button class="pt-stop" type="button" role="tab"' +
                 ' id="pt-tab-' + i + '" aria-controls="pt-panel-' + i + '"' +
                 ' aria-selected="' + (actif ? 'true' : 'false') + '"' +
                 ' tabindex="' + (actif ? '0' : '-1') + '"' +
                 ' data-i="' + i + '" style="--pt-stop:' + coul + ';--pt-stop-txt:' + texteSur(coul) + '">' +
            '<span class="pt-pastille" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
            '<span class="pt-etiquette">' + esc(nom) + '</span>' +
          '</button>';
      }).join('');
      const pile = this._pactes.length > 4 ? ' pt-pile' : '';
      return '<div class="pt-route' + pile + '" role="tablist" aria-label="' +
             esc(this._t('pactes')) + '">' + stops + '</div>';
    }

    _panneauHtml(pacte, index) {
      const actif = index === this._actif;
      const couleur = couleurDe(pacte.couleurCle);
      const sousThemes = trierParOrdre(pacte.sousThemes);

      const src = urlImageDim(pacte.image, 720, 576);
       
       
       
       
      const visuel = src
        ? '<img ' + (actif ? 'src' : 'data-src') + '="' + esc(src) + '"' +
          ' alt="' + esc(pacte.titre || '') + '" decoding="async">'
        : '<span>' + esc(this._t('image')) + '</span>';

      const desc = pacte.description
        ? (estHtml(pacte.description) ? htmlSur(pacte.description) : '<p>' + esc(pacte.description) + '</p>')
        : '';

      const acc = sousThemes.map((st, i) => {
        const ouvert = this._estOuvert(index, i);
        const puces = lireInitiatives(st.initiatives).map(it => {
          const texteHtml = it.lien
            ? '<a href="' + esc(it.lien) + '" target="_blank" rel="noopener">' + esc(it.texte) + '</a>'
            : esc(it.texte);
          const creditHtml = it.credits.length
            ? ' <span class="pt-credit">' + SEP_CREDIT + it.credits.map(c =>
                c.lien
                  ? '<a href="' + esc(c.lien) + '" target="_blank" rel="noopener">' + esc(c.nom) + '</a>'
                  : esc(c.nom)
              ).join(' / ') + '</span>'
            : '';
          return '<li>' + texteHtml + creditHtml + '</li>';
        }).join('');

        const introBrut = st.introTexte;
        const intro = introBrut
          ? '<p class="pt-intro">' + (estHtml(introBrut) ? htmlSur(introBrut) : esc(introBrut)) + '</p>'
          : '';

        const boutons = lireBoutons(st.boutons);
        const boutonsHtml = boutons.length
          ? '<div class="pt-boutons">' + boutons.map(b =>
              '<a class="pt-bouton" href="' + esc(b.url) + '" target="_blank" rel="noopener">' + esc(b.label) + ' ↗</a>'
            ).join('') + '</div>'
          : '';

        return '' +
          '<div class="pt-item' + (ouvert ? ' pt-ouvert' : '') + '" data-p="' + index + '" data-s="' + i + '">' +
            '<button class="pt-declencheur" type="button" aria-expanded="' + (ouvert ? 'true' : 'false') + '"' +
                   ' aria-controls="pt-tiroir-' + index + '-' + i + '">' +
              '<span class="pt-nom" id="pt-nom-' + index + '-' + i + '">' + esc(st.nom || '') + '</span>' +
              '<span class="pt-chevron" aria-hidden="true"></span>' +
            '</button>' +
            '<div class="pt-tiroir" id="pt-tiroir-' + index + '-' + i + '" role="region"' +
                 ' aria-labelledby="pt-nom-' + index + '-' + i + '">' +
              '<div class="pt-tiroir-dedans">' + intro + '<ul class="pt-liste">' + puces + '</ul>' + boutonsHtml + '</div>' +
            '</div>' +
          '</div>';
      }).join('');

      return '' +
        '<section class="pt-panneau' + (actif ? ' pt-on' : '') + '" id="pt-panel-' + index + '"' +
                ' role="tabpanel" aria-labelledby="pt-tab-' + index + '"' +
                (actif ? '' : ' hidden') +
                ' style="--pt-c:' + couleur + ';--pt-c-txt:' + texteSur(couleur) + '">' +
          '<div class="pt-tete">' +
            '<div>' +
              (pacte.tag ? '<span class="pt-tag">' + esc(pacte.tag) + '</span>' : '') +
              '<h3 class="pt-titre">' + esc(pacte.titre || '') + '</h3>' +
              (desc ? '<div class="pt-desc">' + desc + '</div>' : '') +
              (pacte.questionRhetorique ? '<p class="pt-question">' + esc(pacte.questionRhetorique) + '</p>' : '') +
            '</div>' +
            '<div class="pt-visuel' + (src ? '' : ' pt-visuel--vide') + '">' + visuel + '</div>' +
          '</div>' +
          (acc ? '<div class="pt-acc">' + acc + '</div>' : '') +
        '</section>';
    }

     
     
     
     
     
     
     
     
    _seau(pacte) {
      if (!this._ouverts[pacte]) this._ouverts[pacte] = { 0: true };
      return this._ouverts[pacte];
    }

    _estOuvert(pacte, sous) {
      return !!this._seau(pacte)[sous];
    }

    _brancher() {
      const ctrl = new AbortController();
      this._teardown.push(() => ctrl.abort());
      const opt = { signal: ctrl.signal };

      this._root.querySelectorAll('.pt-stop').forEach(btn => {
        btn.addEventListener('click', () => this._changerOnglet(Number(btn.dataset.i)), opt);
        btn.addEventListener('keydown', (e) => this._clavierOnglets(e, Number(btn.dataset.i)), opt);
      });

      this._root.querySelectorAll('.pt-declencheur').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.pt-item');
          if (item) this._basculerTiroir(Number(item.dataset.p), Number(item.dataset.s));
        }, opt);
      });

       
       
       
      if (typeof ResizeObserver === 'function') {
        const ro = new ResizeObserver(() => this._majTiroirs());
        this._root.querySelectorAll('.pt-tiroir-dedans').forEach(d => ro.observe(d));
        this._teardown.push(() => ro.disconnect());
      }
    }

     
     
     
    _changerOnglet(i) {
      if (!(i >= 0) || i >= this._pactes.length || i === this._actif) return;
      this._actif = i;
      this._root.querySelectorAll('.pt-stop').forEach((b, k) => {
        const on = k === i;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.setAttribute('tabindex', on ? '0' : '-1');
      });
      this._root.querySelectorAll('.pt-panneau').forEach((p, k) => {
        const on = k === i;
        p.classList.toggle('pt-on', on);
        if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
      });
      this._chargerVisuel(i);
      this._majTiroirs(true);
      this.dispatchEvent(new CustomEvent('pt-pacte-change', {
        bubbles: true, composed: true,
        detail: { index: i, id: this._pactes[i] && this._pactes[i].id, titre: this._pactes[i] && this._pactes[i].titre }
      }));
    }

     
     
    _clavierOnglets(e, i) {
      const n = this._pactes.length;
      let cible = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') cible = (i + 1) % n;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') cible = (i - 1 + n) % n;
      else if (e.key === 'Home') cible = 0;
      else if (e.key === 'End') cible = n - 1;
      else return;
      e.preventDefault();
      this._changerOnglet(cible);
      const btn = this._root.querySelector('.pt-stop[data-i="' + cible + '"]');
      if (btn) btn.focus();
    }

    _basculerTiroir(p, s) {
      const seau = this._seau(p);
      seau[s] = !seau[s];

      const item = this._root.querySelector('.pt-item[data-p="' + p + '"][data-s="' + s + '"]');
      if (!item) return;
      item.classList.toggle('pt-ouvert', seau[s]);
      const btn = item.querySelector('.pt-declencheur');
      if (btn) btn.setAttribute('aria-expanded', seau[s] ? 'true' : 'false');
      this._majTiroirs();
    }

     
    _chargerVisuel(i) {
      const p = this._root && this._root.querySelector('#pt-panel-' + i);
      const img = p && p.querySelector('img[data-src]');
      if (!img) return;
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    }

     
     
    _majTiroirs(sansAnimation) {
      if (!this._root) return;
      if (sansAnimation) this._root.classList.add('pt-net');
      this._root.querySelectorAll('.pt-item').forEach(item => {
        const tiroir = item.querySelector('.pt-tiroir');
        const dedans = item.querySelector('.pt-tiroir-dedans');
        if (!tiroir || !dedans) return;
        const ouvert = item.classList.contains('pt-ouvert');
        tiroir.style.height = ouvert ? (dedans.offsetHeight + 'px') : '0px';
      });
      if (sansAnimation) {
        void this._root.offsetHeight;    
        this._root.classList.remove('pt-net');
      }
    }
  }

  customElements.define('pactes-tabs', PactesTabs);
})();
})();
