/* rdr-elements skipper | source route-du-rhum 9ca83c5 | rdr-skipper.js skippers-list.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["skipper"]="9ca83c5";performance.mark("rdr-elements:skipper")}catch(e){}
;(function(){
(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('rdr-skipper')) return;

  
















  const SOUS_MODULES = {
     
    'skipper-gallery': function () {
 
const CONFIG = {
  MAX_PHOTOS: 10,
  MOBILE_BREAKPOINT: 900,
  REVEAL_STAGGER_MS: 90,
  REVEAL_STAGGER_MOD: 4,
  PRELOAD_TIMEOUT_MS: 4000,
  ROW_GAP_PX: 16,
  ROW_MAX_HEIGHT: 560,
  

  ROW_VIEWPORT_MARGIN_PX: 110,
  ROW_MIN_CAP_PX: 240,
  RESIZE_DEBOUNCE_MS: 220,
  RESIZE_TOLERANCE_PX: 30,
  SWIPE_THRESHOLD_PX: 60,
  SWIPE_LOCK_PX: 8,
  HERO_TRANSITION_MS: 180,
  LIGHTBOX_TRANSITION_MS: 180,
  THUMB_WIDTH_PX: 90,
  ACCENT_DEFAULT: '#F5BE41',
  CDN_QUALITY: 80
};

const I18N = {
  fr: {
    label: 'Galerie photo',
    photo: 'photo',
    photos: 'photos',
    empty: 'Aucune photo disponible',
    prev: 'Précédent',
    next: 'Suivant',
    close: 'Fermer',
    photoOf: 'Photo'
  },
  en: {
    label: 'Photo gallery',
    photo: 'photo',
    photos: 'photos',
    empty: 'No photo available',
    prev: 'Previous',
    next: 'Next',
    close: 'Close',
    photoOf: 'Photo'
  }
};

const STYLE_ID = 'skipper-gallery-styles';

class SkipperGallery extends HTMLElement {
  constructor() {
    super();
    this._photos = [];
    this._lang = 'fr';
    this._accent = CONFIG.ACCENT_DEFAULT;
    this._activeIndex = 0;
    this._lightboxOpen = false;
    this._lbTrigger = null;    
    this._isMobile = false;
    this._lastDesktopWidth = 0;
    this._resizeObserver = null;
    this._resizeDebounce = null;
    this._intersectionObserver = null;
    this._renderToken = 0;
    this._rendered = false;
  }

  static get observedAttributes() {
    return ['photos', 'skipper-name', 'lang', 'accent-color'];
  }

  connectedCallback() {
    this._injectStyles();
    this._parseAttributes();
    this._setupResizeObserver();
    this._init();
    this._rendered = true;
  }

  disconnectedCallback() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
      this._intersectionObserver = null;
    }
    if (this._resizeDebounce) {
      clearTimeout(this._resizeDebounce);
      this._resizeDebounce = null;
    }
    removeEventListener('resize', this._onResizeFenetre);
    clearTimeout(this._resizeFenetreT);
    this._closeLightbox(true);
    this._retirerVisionneuse();
    document.removeEventListener('keydown', this._onKeyDown);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (!this._rendered || oldVal === newVal) return;
    this._parseAttributes();
    this._init();
  }

  _parseAttributes() {
    const raw = this.getAttribute('photos') || '[]';
    let parsed = [];
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = [];
    }
    if (!Array.isArray(parsed)) parsed = [];

    this._photos = parsed
      .map(p => {
        if (!p) return null;
        if (typeof p === 'string') return { src: p, ratio: null };
        const src = p.src || p.url || '';
        return src ? { src, ratio: null } : null;
      })
      .filter(Boolean)
      .slice(0, CONFIG.MAX_PHOTOS);

    const lang = (this.getAttribute('lang') || 'fr').toLowerCase();
    this._lang = I18N[lang] ? lang : 'fr';

    const color = this.getAttribute('accent-color') || CONFIG.ACCENT_DEFAULT;
    this._accent = this._safeColor(color, CONFIG.ACCENT_DEFAULT);
    this.style.setProperty('--sg-accent', this._accent);
  }

  _t(key) {
    return (I18N[this._lang] && I18N[this._lang][key]) || I18N.fr[key] || key;
  }

   
  _safeUrl(u) {
    let s = String(u == null ? '' : u).trim();
    if (!s) return '';
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) s = 'https://static.wixstatic.com/media/' + m[1];
    else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
    const okScheme = /^https?:/i.test(s);
    const relative = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
    if (!okScheme && !relative) return '';
    return s.replace(/"/g, '%22').replace(/'/g, '%27');
  }
  _safeColor(c, fallback) {
    fallback = arguments.length > 1 ? fallback : '#5DBFC0';
    if (c == null) return fallback;
    const hex = String(c).trim().replace(/^#/, '');
    return /^[0-9a-fA-F]{3,8}$/.test(hex) ? '#' + hex : fallback;
  }

  







  _wixUrl(url, width, hauteur, mode) {
    if (!url) return '';
    let fileId = null;

    if (url.startsWith('wix:image://')) {
      const m = url.match(/wix:image:\/\/v1\/([^/#]+)/);
      if (m) fileId = m[1];
    } else if (url.includes('static.wixstatic.com/media/')) {
      const m = url.match(/\/media\/([^/]+)/);
      if (m) fileId = m[1];
    } else if (url.startsWith('http')) {
      return url;
    }

    if (!fileId) return url;
    



    if (!width) width = 1200;

    const ext = (fileId.split('.').pop() || 'jpg').toLowerCase();
    const f = mode || 'fill';
    return `https://static.wixstatic.com/media/${fileId}/v1/${f}/w_${Math.round(width)},h_${Math.round(hauteur || width * 0.75) || 1}${f === 'fill' ? ',al_c' : ''},q_${CONFIG.CDN_QUALITY},enc_avif,quality_auto/img.${ext}`;
  }

  








  _parseRatioFromWixUrl(url) {
    if (!url) return null;
    const o = url.match(/originWidth=(\d+)&originHeight=(\d+)/);
    if (o) {
      const ow = parseInt(o[1], 10);
      const oh = parseInt(o[2], 10);
      if (ow > 0 && oh > 0) return ow / oh;
    }
    const m = url.match(/_d_(\d+)_(\d+)/);
    if (m) {
      const w = parseInt(m[1], 10);
      const h = parseInt(m[2], 10);
      if (w > 0 && h > 0) return w / h;
    }
    return null;
  }

  _measureImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        resolve(1.5);
      }, CONFIG.PRELOAD_TIMEOUT_MS);
      img.onload = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        const r = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1.5;
        resolve(r);
      };
      img.onerror = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(1.5);
      };
      img.src = src;
    });
  }

  async _preloadRatios() {
    const promises = this._photos.map(async (p) => {
      const fromUrl = this._parseRatioFromWixUrl(p.src);
      if (fromUrl) {
        p.ratio = fromUrl;
        return;
      }
       
      const measured = await this._measureImage(this._wixUrl(p.src, 400, 400, 'fit'));
      p.ratio = measured;
    });
    await Promise.all(promises);
  }

  _setupResizeObserver() {
    if (this._resizeObserver) return;
    this._resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const width = entry.contentRect.width;
      const nextMobile = width < CONFIG.MOBILE_BREAKPOINT;

      





      if (this._lightboxOpen) { this._renduEnAttente = true; return; }

      if (nextMobile !== this._isMobile) {
        this._isMobile = nextMobile;
        this._lastDesktopWidth = nextMobile ? 0 : width;
        if (this._rendered) this._render();
        return;
      }

      if (!nextMobile && this._rendered && Math.abs(width - this._lastDesktopWidth) > CONFIG.RESIZE_TOLERANCE_PX) {
        if (this._resizeDebounce) clearTimeout(this._resizeDebounce);
        this._resizeDebounce = setTimeout(() => {
          if (this._lightboxOpen) { this._renduEnAttente = true; return; }
          if (this._rendered && !this._isMobile) {
            this._lastDesktopWidth = this.getBoundingClientRect().width;
            this._render();
          }
        }, CONFIG.RESIZE_DEBOUNCE_MS);
      }
    });
    this._resizeObserver.observe(this);

    

    this._onResizeFenetre = () => {
      clearTimeout(this._resizeFenetreT);
      this._resizeFenetreT = setTimeout(() => {
        if (this._isMobile || this._plafondRendu == null || Math.abs(this._plafondRangee() - this._plafondRendu) <= CONFIG.RESIZE_TOLERANCE_PX) return;
        if (this._lightboxOpen) this._renduForce = true;
        else this._render();
      }, CONFIG.RESIZE_DEBOUNCE_MS);
    };
    addEventListener('resize', this._onResizeFenetre);
  }

  async _init() {
    const token = ++this._renderToken;
    this._isMobile = this.getBoundingClientRect().width < CONFIG.MOBILE_BREAKPOINT;
    this._activeIndex = 0;

    this._renderLoading();

    if (!this._photos.length) {
      if (token !== this._renderToken) return;
      this._renderEmpty();
      return;
    }

    await this._preloadRatios();
    if (token !== this._renderToken) return;

    this._render();
  }

  _renderLoading() {
     
    if (this._lightboxOpen) { this._renduForce = true; return; }
    this._retirerVisionneuse();
    this.innerHTML = `
      <div class="sg-wrap">
        ${this._renderHeader()}
        <div class="sg-loading" aria-live="polite"></div>
      </div>
    `;
  }

  _renderEmpty() {
     
    if (this._lightboxOpen) { this._renduForce = true; return; }
    this._retirerVisionneuse();
    this.innerHTML = `
      <div class="sg-wrap">
        ${this._renderHeader(true)}
        <div class="sg-empty">${this._t('empty')}</div>
      </div>
    `;
  }

  _renderHeader(isEmpty = false) {
    const n = this._photos.length;
    const word = n > 1 ? this._t('photos') : this._t('photo');
    const countHtml = isEmpty
      ? ''
      : `<div class="sg-header-right"><strong>${n}</strong> ${word}</div>`;
    return `
      <div class="sg-header">
        <div class="sg-header-left">${this._t('label')}</div>
        ${countHtml}
      </div>
    `;
  }

  _render() {
    






    if (this._lightboxOpen) { this._renduForce = true; return; }
    this.innerHTML = `
      <div class="sg-wrap">
        ${this._renderHeader()}
        <div class="sg-content"></div>
        ${this._renderLightbox()}
      </div>
    `;

    this._porterVisionneuse();

    const content = this.querySelector('.sg-content');
    if (this._isMobile) {
      this._renderMobile(content);
    } else {
      this._renderDesktop(content);
    }

    this._bindLightboxEvents();
    this._bindKeyboard();
  }

  _bindKeyboard() {
    document.removeEventListener('keydown', this._onKeyDown);
    this._onKeyDown = (e) => {
      if (!this._lightboxOpen) return;    
      if (e.key === 'Escape') this._closeLightbox();
      else if (e.key === 'ArrowLeft') this._prevLightbox();
      else if (e.key === 'ArrowRight') this._nextLightbox();
      else if (e.key === 'Tab') {
         
        const lb = this._lb;
        if (!lb) return;
        const f = this._focusables(lb);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1], active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || !lb.contains(active)) { e.preventDefault(); last.focus(); }
        } else {
          if (active === last || !lb.contains(active)) { e.preventDefault(); first.focus(); }
        }
      }
    };
    document.addEventListener('keydown', this._onKeyDown);
  }

  _buildRows(photos) {
    const rows = [];
    let current = [];

    photos.forEach((photo) => {
      current.push(photo);
      const isPanoramic = photo.ratio > 1.8;

      const totalRatio = current.reduce((s, p) => s + p.ratio, 0);
      const shouldClose =
        current.length >= 3 ||
        (current.length === 1 && isPanoramic) ||
        (current.length === 2 && totalRatio >= 2.7);

      if (shouldClose) {
        rows.push(current);
        current = [];
      }
    });

    if (current.length) rows.push(current);

    


    const last = rows[rows.length - 1];
    const before = rows[rows.length - 2];
    if (before && last.length === 1 && before.length === 3 && last[0].ratio <= 1.8) {
      last.unshift(before.pop());
    }
    return rows;
  }

  _renderDesktop(container) {
    container.innerHTML = '<div class="sg-grid" data-grid></div>';
    const grid = container.querySelector('[data-grid]');

    const containerWidth = grid.getBoundingClientRect().width
      || this.getBoundingClientRect().width
      || 1200;
    const gap = CONFIG.ROW_GAP_PX;
    const plafond = this._plafondRangee();
    this._plafondRendu = plafond;

    if (this._photos.length === 1) {
      const p = this._photos[0];
      const row = document.createElement('div');
      row.className = 'sg-row sg-row-single';
      const naturalHeight = containerWidth / p.ratio;
      


      const rowHeight = Math.min(plafond, naturalHeight);
      const rowWidth = rowHeight * p.ratio;
      row.appendChild(this._buildPhotoCard(p, 0, `${rowWidth}px`, `${rowHeight}px`));
      grid.appendChild(row);
      this._setupReveal(grid);
      return;
    }

    const rows = this._buildRows(this._photos);
    let globalIdx = 0;

    rows.forEach((rowPhotos) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'sg-row';

      const totalRatio = rowPhotos.reduce((s, p) => s + p.ratio, 0);
      const gapsTotal = (rowPhotos.length - 1) * gap;
      const availableWidth = containerWidth - gapsTotal;

      const naturalRowHeight = availableWidth / totalRatio;
      


      const rowHeight = Math.min(plafond, naturalRowHeight);

      rowPhotos.forEach((photo) => {
        const cardWidth = rowHeight * photo.ratio;
        rowEl.appendChild(this._buildPhotoCard(photo, globalIdx, `${cardWidth}px`, `${rowHeight}px`));
        globalIdx++;
      });

      grid.appendChild(rowEl);
    });

    this._setupReveal(grid);
  }

  







  _plafondRangee() {
    const s = document.createElement('div');
    s.style.cssText = 'position:fixed;height:100vh;height:100svh;visibility:hidden';
    document.body.appendChild(s);
    const h = s.offsetHeight || innerHeight;
    s.remove();
    return Math.max(CONFIG.ROW_MIN_CAP_PX, Math.min(CONFIG.ROW_MAX_HEIGHT, h - CONFIG.ROW_VIEWPORT_MARGIN_PX));
  }

  _buildPhotoCard(photo, idx, width, height) {
    const total = this._photos.length;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sg-photo';
    btn.dataset.index = String(idx);
    btn.style.width = width;
    btn.style.height = height;
    btn.setAttribute('aria-label', `${this._t('photoOf')} ${idx + 1}`);

    const widthPx = parseInt(width, 10) || 800;
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? Math.min(window.devicePixelRatio, 2) : 1;
    const targetCdnWidth = Math.max(800, Math.round(widthPx * dpr));
     
    const optimizedUrl = this._wixUrl(photo.src, targetCdnWidth, targetCdnWidth / (photo.ratio || 1.5));

    btn.innerHTML = `
      <img src="${this._safeUrl(optimizedUrl)}" alt="${this._t('photoOf')} ${idx + 1}" loading="lazy" draggable="false">
      <div class="sg-photo-index"><strong>${String(idx + 1).padStart(2, '0')}</strong> / ${String(total).padStart(2, '0')}</div>
      <div class="sg-photo-zoom">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      </div>
    `;

    btn.addEventListener('click', () => this._openLightbox(idx));
    return btn;
  }

  _setupReveal(container) {
    if (this._intersectionObserver) this._intersectionObserver.disconnect();
    const photos = container.querySelectorAll('.sg-photo');
    this._intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index, 10);
          const delay = (idx % CONFIG.REVEAL_STAGGER_MOD) * CONFIG.REVEAL_STAGGER_MS;
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          this._intersectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    photos.forEach(p => this._intersectionObserver.observe(p));
  }

  _renderMobile(container) {
    const total = this._photos.length;
    const showNav = total > 1;

    container.innerHTML = `
      <div class="sg-m-hero" data-hero>
        <img class="sg-m-hero-img" data-hero-img alt="${this._t('photoOf')} 1" draggable="false">
        <div class="sg-m-hero-badge"><strong data-hero-current>01</strong> / <span>${String(total).padStart(2, '0')}</span></div>
        <button type="button" class="sg-m-hero-nav sg-m-hero-prev${showNav ? '' : ' is-hidden'}" data-hero-prev aria-label="${this._t('prev')}">
          <span class="sg-m-hero-disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg></span>
        </button>
        <button type="button" class="sg-m-hero-nav sg-m-hero-next${showNav ? '' : ' is-hidden'}" data-hero-next aria-label="${this._t('next')}">
          <span class="sg-m-hero-disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
        </button>
      </div>
      <div class="sg-m-dots${showNav ? '' : ' is-hidden'}" data-dots></div>
      <div class="sg-m-thumbs${showNav ? '' : ' is-hidden'}" data-thumbs></div>
    `;

    const thumbs = container.querySelector('[data-thumbs]');
    const dots = container.querySelector('[data-dots]');

    this._photos.forEach((photo, idx) => {
      const thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'sg-m-thumb';
      thumb.dataset.index = String(idx);
      thumb.setAttribute('aria-label', `${this._t('photoOf')} ${idx + 1}`);
      thumb.innerHTML = `<img src="${this._safeUrl(this._wixUrl(photo.src, 200))}" alt="" loading="lazy" draggable="false">`;
      thumb.addEventListener('click', () => this._setMobileActive(idx, true));
      thumbs.appendChild(thumb);

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'sg-m-dot';
      dot.dataset.index = String(idx);
      dot.setAttribute('aria-label', `${this._t('photoOf')} ${idx + 1}`);
      dot.addEventListener('click', () => this._setMobileActive(idx, true));
      dots.appendChild(dot);
    });

    const hero = container.querySelector('[data-hero]');
    hero.addEventListener('click', (e) => {
      if (e.target.closest('[data-hero-prev]') || e.target.closest('[data-hero-next]')) return;
      if (hero.hasAttribute('data-swipe-blocked')) return;
      this._openLightbox(this._activeIndex);
    });

    if (showNav) {
      container.querySelector('[data-hero-prev]').addEventListener('click', (e) => {
        e.stopPropagation();
        this._setMobileActive((this._activeIndex - 1 + total) % total, true);
      });
      container.querySelector('[data-hero-next]').addEventListener('click', (e) => {
        e.stopPropagation();
        this._setMobileActive((this._activeIndex + 1) % total, true);
      });
      this._setupMobileSwipe(hero, total);
    }

    this._setMobileActive(0);
  }

  _setupMobileSwipe(hero, total) {
    const img = hero.querySelector('[data-hero-img]');
    let startX = 0, startY = 0, currentDx = 0;
    let isDragging = false;
    let isHorizontal = null;
    let pointerDown = false;

    hero.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      pointerDown = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentDx = 0;
      isHorizontal = null;
      isDragging = false;
    }, { passive: true });

    hero.addEventListener('touchmove', (e) => {
      if (!pointerDown || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;

      if (isHorizontal === null) {
        if (Math.abs(dx) > CONFIG.SWIPE_LOCK_PX || Math.abs(dy) > CONFIG.SWIPE_LOCK_PX) {
          isHorizontal = Math.abs(dx) > Math.abs(dy);
        }
      }

      if (isHorizontal === true) {
        if (e.cancelable) e.preventDefault();
        currentDx = dx;
        if (!isDragging) {
          isDragging = true;
          hero.classList.add('is-dragging');
        }
        let translateX = dx;
        if ((this._activeIndex === 0 && dx > 0) || (this._activeIndex === total - 1 && dx < 0)) {
          translateX = dx * 0.35;
        }
        img.style.transform = `translateX(${translateX}px)`;
      }
    }, { passive: false });

    hero.addEventListener('touchend', () => {
      if (!pointerDown) return;
      pointerDown = false;

      if (!isDragging) return;
      hero.classList.remove('is-dragging');
      hero.setAttribute('data-swipe-blocked', '');
      setTimeout(() => hero.removeAttribute('data-swipe-blocked'), 50);

      if (Math.abs(currentDx) > CONFIG.SWIPE_THRESHOLD_PX) {
        if (currentDx < 0 && this._activeIndex < total - 1) {
          img.style.transform = 'translateX(-100%)';
          setTimeout(() => {
            img.style.transform = 'translateX(0)';
            this._setMobileActive(this._activeIndex + 1, true);
          }, 200);
        } else if (currentDx > 0 && this._activeIndex > 0) {
          img.style.transform = 'translateX(100%)';
          setTimeout(() => {
            img.style.transform = 'translateX(0)';
            this._setMobileActive(this._activeIndex - 1, true);
          }, 200);
        } else {
          img.style.transform = 'translateX(0)';
        }
      } else {
        img.style.transform = 'translateX(0)';
      }
      currentDx = 0;
      isDragging = false;
    });

    hero.addEventListener('touchcancel', () => {
      if (isDragging) {
        hero.classList.remove('is-dragging');
        img.style.transform = 'translateX(0)';
      }
      pointerDown = false;
      isDragging = false;
      currentDx = 0;
    });
  }

  _setMobileActive(idx, fromUser = false) {
    if (idx < 0 || idx >= this._photos.length) return;
    this._activeIndex = idx;
    const photo = this._photos[idx];
    if (!photo) return;

    const img = this.querySelector('[data-hero-img]');
    if (img) {
      img.classList.add('is-out');
      setTimeout(() => {
        img.src = this._wixUrl(photo.src, 1200);
        img.alt = `${this._t('photoOf')} ${idx + 1}`;
        img.style.transform = 'translateX(0)';
        img.classList.remove('is-out');
      }, CONFIG.HERO_TRANSITION_MS);
    }
    const current = this.querySelector('[data-hero-current]');
    if (current) current.textContent = String(idx + 1).padStart(2, '0');

    this.querySelectorAll('.sg-m-thumb').forEach((t, i) => {
      t.classList.toggle('is-active', i === idx);
    });
    this.querySelectorAll('.sg-m-dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === idx);
    });

    if (fromUser) {
      const activeThumb = this.querySelector('.sg-m-thumb.is-active');
      if (activeThumb && activeThumb.scrollIntoView) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }

   
  _focusables(container) {
    const sel = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll(sel))
      .filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length);
  }

  











  _porterVisionneuse() {
    this._retirerVisionneuse();
     
    const lb = this.querySelector('[data-lb]');
    if (!lb) return;
    lb.style.setProperty('--sg-accent', this._accent || CONFIG.ACCENT_DEFAULT);
    document.body.appendChild(lb);
    this._lb = lb;
  }

  _retirerVisionneuse() {
    if (this._lb && this._lb.parentNode) this._lb.parentNode.removeChild(this._lb);
    this._lb = null;
  }

  _renderLightbox() {
    return `
      <div class="sg-lightbox" data-lb aria-hidden="true" role="dialog" aria-modal="true">
        <div class="sg-lb-header">
          <div class="sg-lb-counter"><strong data-lb-current>01</strong> / <span data-lb-total>01</span></div>
          <button class="sg-lb-close" data-lb-close aria-label="${this._t('close')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="sg-lb-stage" data-lb-stage>
          <button class="sg-lb-nav sg-lb-prev" data-lb-prev aria-label="${this._t('prev')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <img class="sg-lb-image" data-lb-image alt="" draggable="false">
          <button class="sg-lb-nav sg-lb-next" data-lb-next aria-label="${this._t('next')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  _bindLightboxEvents() {
    const lb = this._lb;
    if (!lb) return;

    lb.querySelector('[data-lb-close]').addEventListener('click', () => this._closeLightbox());
    lb.querySelector('[data-lb-prev]').addEventListener('click', () => this._prevLightbox());
    lb.querySelector('[data-lb-next]').addEventListener('click', () => this._nextLightbox());

    const stage = lb.querySelector('[data-lb-stage]');
    let touchStart = null;
    stage.addEventListener('touchstart', (e) => {
      touchStart = { x: e.touches[0].clientX, time: Date.now() };
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      if (!touchStart) return;
      const dx = (e.changedTouches[0]?.clientX || 0) - touchStart.x;
      const dt = Date.now() - touchStart.time;
      if (Math.abs(dx) > CONFIG.SWIPE_THRESHOLD_PX && dt < 500) {
        if (dx < 0) this._nextLightbox();
        else this._prevLightbox();
      }
      touchStart = null;
    });

    lb.addEventListener('click', (e) => {
      if (e.target === lb) this._closeLightbox();
    });
  }

   
   
  _lockBodyScroll() {
    if (this._bodyLockY != null) return;
    const y = window.scrollY || window.pageYOffset || 0;
    this._bodyLockY = y;
    const b = document.body;
    b.style.position = 'fixed'; b.style.top = -y + 'px';
    b.style.left = '0'; b.style.right = '0'; b.style.width = '100%'; b.style.overflow = 'hidden';
  }
  _unlockBodyScroll() {
    if (this._bodyLockY == null) return;
    const b = document.body, y = this._bodyLockY;
    b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.width = ''; b.style.overflow = '';
    this._bodyLockY = null;
    try { window.scrollTo(0, y); } catch (e) {   }
  }

  _openLightbox(index) {
    this._activeIndex = index;
    const lb = this._lb;
    if (!lb) return;
    this._lbTrigger = document.activeElement;    
    this._lightboxOpen = true;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    this._lockBodyScroll();
    this._updateLightbox();
    lb.querySelector('[data-lb-close]')?.focus();    
  }

  _closeLightbox(silent = false) {
    this._lightboxOpen = false;
     
    this._lbJeton = (this._lbJeton || 0) + 1;
    const lb = this._lb;
    if (lb) {
      lb.classList.remove('is-open', 'is-loading');
      lb.setAttribute('aria-hidden', 'true');
    }
    this._unlockBodyScroll();
    if (!silent && this._isMobile && this._photos.length) {
      this._setMobileActive(this._activeIndex);
    }
     
    const trigger = this._lbTrigger; this._lbTrigger = null;
    if (!silent && trigger && trigger.isConnected) { try { trigger.focus(); } catch {} }
    


     
     
     
    if (this._renduForce || this._renduEnAttente) {
      const force = this._renduForce;
      this._renduForce = this._renduEnAttente = false;
      requestAnimationFrame(() => {
        if (!this.isConnected || this._lightboxOpen || !this._rendered) return;
        const w = this.getBoundingClientRect().width;
        const mobile = w < CONFIG.MOBILE_BREAKPOINT;
        if (force || mobile !== this._isMobile || (!mobile && Math.abs(w - this._lastDesktopWidth) > CONFIG.RESIZE_TOLERANCE_PX)) {
          this._isMobile = mobile;
          this._lastDesktopWidth = mobile ? 0 : w;
          this._render();
        }
      });
    }
  }

  











  


  _largeurVisionneuse(photo) {
    const r = photo.ratio || 1.5;
    const l = Math.min(Math.max(320, innerWidth), Math.max(320, innerHeight) * r);
    const utile = Math.max(l, l / r) * Math.min(devicePixelRatio || 1, 2);
    return [800, 1200, 1600, 2000].find(p => p >= utile) || 2000;
  }

  _precharger(index) {
    const photo = this._photos[index];
    if (!photo) return null;
    const cote = this._largeurVisionneuse(photo);
    const url = this._wixUrl(photo.src, cote, cote, 'fit');
    if (!this._prets) this._prets = new Map();
    let e = this._prets.get(url);
    if (!e) {
      const im = new Image();

      e = { pret: false, promesse: null };
      e.promesse = new Promise((resoudre) => {
        im.onload = () => { e.pret = true; resoudre(true); };
        im.onerror = () => { this._prets.delete(url); resoudre(false); };
      });
      im.src = url;
      this._prets.set(url, e);
    }
    return { url, e };
  }

  _updateLightbox() {
    const photo = this._photos[this._activeIndex];
    if (!photo) return;
    const lb = this._lb;
    const img = lb && lb.querySelector('[data-lb-image]');
    if (!img) return;
    const index = this._activeIndex;
    const n = this._photos.length;
    const jeton = (this._lbJeton = (this._lbJeton || 0) + 1);

     
    const current = lb.querySelector('[data-lb-current]');
    const total = lb.querySelector('[data-lb-total]');
    if (current) current.textContent = String(index + 1).padStart(2, '0');
    if (total) total.textContent = String(n).padStart(2, '0');

    const cible = this._precharger(index);
    if (!cible) return;
    const poser = () => {
      if (jeton !== this._lbJeton) return;
      img.src = cible.url;
      img.alt = `${this._t('photoOf')} ${index + 1}`;
      img.classList.remove('is-changing');
      lb.classList.remove('is-loading');
      if (n > 1) { this._precharger((index + 1) % n); this._precharger((index - 1 + n) % n); }
    };

    if (cible.e.pret) {
       
      img.classList.add('is-changing');
      setTimeout(poser, CONFIG.LIGHTBOX_TRANSITION_MS);
      return;
    }
    lb.classList.add('is-loading');
    cible.e.promesse.then(poser);
  }

  _nextLightbox() {
    this._activeIndex = (this._activeIndex + 1) % this._photos.length;
    this._updateLightbox();
  }

  _prevLightbox() {
    this._activeIndex = (this._activeIndex - 1 + this._photos.length) % this._photos.length;
    this._updateLightbox();
  }

  _injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = this._css();
    document.head.appendChild(style);
  }

  _css() {
    return `
      skipper-gallery {
        --sg-accent: ${CONFIG.ACCENT_DEFAULT};
        --sg-text-muted: rgba(255, 255, 255, 0.55);
        --sg-accent-blue: #A8C8E8;
        --sg-radius: 14px;
        --sg-radius-sm: 8px;
        --sg-gap: 16px;
        display: block;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        box-sizing: border-box;
      }
      skipper-gallery *, skipper-gallery *::before, skipper-gallery *::after {
        box-sizing: border-box;
      }
      skipper-gallery button {
        font-family: inherit;
        margin: 0;
      }

      .sg-wrap { width: 100%; }

      .sg-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
        padding: 0 4px;
      }
      .sg-header-left {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--sg-text-muted);
      }
      .sg-header-left::before {
        content: '';
        width: 32px;
        height: 1px;
        background: var(--sg-accent);
      }
      .sg-header-right {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--sg-accent-blue);
      }
      .sg-header-right strong {
        color: var(--sg-accent);
        font-size: 16px;
        font-weight: 800;
        margin: 0 4px;
      }

      .sg-loading {
        min-height: 460px;
        background: linear-gradient(110deg, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 70%);
        background-size: 200% 100%;
        animation: sg-shimmer 1.4s ease-in-out infinite;
        border-radius: var(--sg-radius);
      }
       
      @media (prefers-reduced-motion: reduce) {
        skipper-gallery *, skipper-gallery *::before, skipper-gallery *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
      }
      @keyframes sg-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      .sg-empty {
        padding: 80px 20px;
        text-align: center;
        color: var(--sg-text-muted);
        font-size: 13px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        background: rgba(255,255,255,0.02);
        border: 1px dashed rgba(255,255,255,0.1);
        border-radius: var(--sg-radius);
      }

      .sg-grid { display: flex; flex-direction: column; gap: var(--sg-gap); }
      .sg-row {
        display: flex;
        gap: var(--sg-gap);
        width: 100%;
        justify-content: flex-start;
      }
      .sg-row-single { justify-content: center; }

      .sg-photo {
        position: relative;
        flex: 0 0 auto;
        border-radius: var(--sg-radius);
        overflow: hidden;
        background: rgba(255,255,255,0.04);
        cursor: pointer;
        border: none;
        padding: 0;
        display: block;
        transform: translateY(40px);
        opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .sg-photo.is-visible { opacity: 1; transform: translateY(0); }

      .sg-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
        transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
        -webkit-user-drag: none;
        user-select: none;
      }
      .sg-photo:hover img { transform: scale(1.04); filter: brightness(1.04); }

      .sg-photo-index {
        position: absolute;
        top: 18px; left: 18px; z-index: 3;
        background: rgba(13, 27, 58, 0.72);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 7px 12px;
        border-radius: 5px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.2em;
        color: white;
        opacity: 0;
        transform: translateY(-6px);
        transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        pointer-events: none;
      }
      .sg-photo-index strong { color: var(--sg-accent); }
      .sg-photo:hover .sg-photo-index { opacity: 1; transform: translateY(0); }

      .sg-photo-zoom {
        position: absolute;
        bottom: 18px; right: 18px; z-index: 3;
        width: 44px; height: 44px;
        background: rgba(13, 27, 58, 0.78);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        color: var(--sg-accent);
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: none;
      }
      .sg-photo:hover .sg-photo-zoom { opacity: 1; transform: scale(1); }
      .sg-photo-zoom svg { width: 18px; height: 18px; }

      .sg-photo::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.35) 100%);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
        z-index: 2;
      }
      .sg-photo:hover::after { opacity: 1; }

      .sg-m-hero {
        position: relative;
        width: 100%;
        aspect-ratio: 4 / 3;
        border-radius: var(--sg-radius);
        overflow: hidden;
        background: rgba(255,255,255,0.04);
        cursor: zoom-in;
        margin-bottom: 10px;
        touch-action: pan-y;
        user-select: none;
        -webkit-user-select: none;
      }
      .sg-m-hero-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        pointer-events: none;
        -webkit-user-drag: none;
      }
      .sg-m-hero-img.is-out { opacity: 0; }
      .sg-m-hero.is-dragging .sg-m-hero-img { transition: none; }

      .sg-m-hero-badge {
        position: absolute;
        top: 14px; left: 14px;
        background: rgba(13, 27, 58, 0.78);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 6px 10px;
        border-radius: 5px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.18em;
        color: white;
        z-index: 3;
        pointer-events: none;
      }
      .sg-m-hero-badge strong { color: var(--sg-accent); }

      .sg-m-hero-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 44px; height: 44px;
        border: none;
        background: none;
        display: flex; align-items: center; justify-content: center;
        z-index: 3;
        cursor: pointer;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
      }
      .sg-m-hero-disc {
        width: 30px; height: 30px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        background: rgba(13, 27, 58, 0.35);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        color: rgba(255, 255, 255, 0.75);
        opacity: 0.6;
        transition: opacity 0.25s ease, background 0.25s ease;
      }
      .sg-m-hero-nav:active .sg-m-hero-disc { opacity: 1; background: rgba(13, 27, 58, 0.6); }
      .sg-m-hero-nav:focus-visible { outline: none; }
      .sg-m-hero-nav:focus-visible .sg-m-hero-disc { opacity: 1; outline: 2px solid var(--sg-accent); outline-offset: 2px; }
      .sg-m-hero-prev { left: 1px; }
      .sg-m-hero-next { right: 1px; }
      .sg-m-hero-nav.is-hidden { display: none; }
      .sg-m-hero-nav svg { width: 12px; height: 12px; }

      .sg-m-dots {
        display: flex;
        justify-content: center;
        margin: 3px 0 5px;
      }
      .sg-m-dots.is-hidden { display: none; }
      .sg-m-dot {
        width: 24px; height: 24px;
        display: flex; align-items: center; justify-content: center;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }
      .sg-m-dot::before {
        content: '';
        width: 6px; height: 6px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.22);
        transition: background 0.3s ease, width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .sg-m-dot.is-active::before {
        background: var(--sg-accent);
        width: 22px;
        border-radius: 3px;
      }
      .sg-m-dot:focus-visible { outline: 2px solid var(--sg-accent); outline-offset: -2px; border-radius: 6px; }

      .sg-m-thumbs {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        scrollbar-width: none;
        padding: 2px;
        -webkit-overflow-scrolling: touch;
      }
      .sg-m-thumbs::-webkit-scrollbar { display: none; }
      .sg-m-thumbs.is-hidden { display: none; }

      .sg-m-thumb {
        flex: 0 0 auto;
        width: ${CONFIG.THUMB_WIDTH_PX}px;
        aspect-ratio: 4 / 3;
        border-radius: var(--sg-radius-sm);
        overflow: hidden;
        border: 2px solid transparent;
        background: rgba(255,255,255,0.04);
        padding: 0;
        opacity: 0.5;
        transition: opacity 0.3s ease, border-color 0.3s ease;
        cursor: pointer;
      }
      .sg-m-thumb img {
        width: 100%; height: 100%;
        object-fit: cover;
        -webkit-user-drag: none;
      }
      .sg-m-thumb.is-active {
        opacity: 1;
        border-color: var(--sg-accent);
      }

      


      .sg-lightbox *, .sg-lightbox *::before, .sg-lightbox *::after { box-sizing: border-box; }
      .sg-lightbox button { font-family: inherit; margin: 0; }
      .sg-lightbox {
        --sg-accent: ${CONFIG.ACCENT_DEFAULT};
        --sg-text-muted: rgba(255, 255, 255, 0.55);
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        box-sizing: border-box;
        position: fixed;
        inset: 0;
        background: rgba(5, 12, 28, 0.97);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 10002;
        display: flex;
        flex-direction: column;
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0s linear 0.3s;
      }
      



      .sg-lightbox.is-open { opacity: 1; pointer-events: auto; visibility: visible; transition: opacity 0.3s ease, visibility 0s; }

      .sg-lb-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 32px;
      }
      .sg-lb-counter {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.15em;
        color: var(--sg-text-muted);
      }
      .sg-lb-counter strong {
        color: var(--sg-accent);
        font-size: 22px;
        font-weight: 800;
        margin-right: 4px;
      }
      .sg-lb-close {
        width: 44px; height: 44px;
        border: 1px solid rgba(255,255,255,0.2);
        background: transparent;
        color: white;
        border-radius: 50%;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        padding: 0;
        transition: all 0.3s ease;
      }
      .sg-lb-close:hover {
        background: var(--sg-accent);
        color: #0d1b3a;
        border-color: var(--sg-accent);
        transform: rotate(90deg);
      }
      .sg-lb-close svg { width: 18px; height: 18px; }

      .sg-lb-stage {
        flex: 1 1 0;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 80px 32px;
        position: relative;
        overflow: hidden;
      }
      .sg-lb-image {
        display: block;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 6px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        transition: opacity 0.25s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        user-select: none;
        -webkit-user-drag: none;
      }
      .sg-lb-image.is-changing { opacity: 0; transform: scale(0.97); }
      

      .sg-lightbox.is-loading .sg-lb-image { opacity: 0.35; }

      .sg-lb-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 52px; height: 52px;
        border: 1px solid rgba(255,255,255,0.15);
        background: rgba(255,255,255,0.04);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: white;
        border-radius: 50%;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        padding: 0;
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        z-index: 10;
      }
      .sg-lb-prev { left: 16px; }
      .sg-lb-next { right: 16px; }
      .sg-lb-nav:hover {
        background: var(--sg-accent);
        border-color: var(--sg-accent);
        color: #0d1b3a;
      }
      .sg-lb-prev:hover { transform: translateY(-50%) translateX(-4px); }
      .sg-lb-next:hover { transform: translateY(-50%) translateX(4px); }
      .sg-lb-nav svg { width: 20px; height: 20px; }

      @media (max-width: 640px) {
        .sg-lb-stage { padding: 0 12px 16px; }
        .sg-lb-nav { width: 44px; height: 44px; }
        .sg-lb-prev { left: 8px; }
        .sg-lb-next { right: 8px; }
        .sg-lb-header { padding: 14px 16px; }
      }
    `;
  }
}

if (!customElements.get('skipper-gallery')) {
  customElements.define('skipper-gallery', SkipperGallery);
}
    },
     
    'skipper-outro': function () {
 
const FONT_FAMILY = 'Montserrat, Arial, sans-serif';
const TITLE_FONT = "'Varien', serif";

const I18N = {
  fr: {
    eyebrowBefore: 'Prochainement',
    eyebrowDuring: 'En direct',
    eyebrowAfter: 'Course terminée',
    titlePart1: 'Suivez',
    titlePart2: 'dans l\u2019aventure.',
    description: 'Dès le départ, retrouvez ici la cartographie live, les actualités officielles et tout ce qu\u2019il faut pour ne rien manquer de la traversée.',
    feature1Title: 'Cartographie live',
    feature1Desc: 'Position du bateau en temps réel, chaque mille parcouru',
    feature2Title: 'Actualités officielles',
    feature3Title: 'Dossier de presse',
    feature3Desc: 'Médias et documents officiels téléchargeables',
    feature1Soon: 'Dès le départ, le dimanche 1er novembre',
    feature2Link: 'Toutes les actus {deName} sur le site',
    feature3Link: 'Télécharger le dossier en PDF',
    followDesc: 'Dans ton Espace Rhum',
    pressDesc: 'Demandes d\u2019interview et d\u2019images',
    shareTitle: 'Partager la fiche',
    shareDesc: 'Envoyer le profil de {name}',
    ctaFollowAction: 'Suivre',
    ctaFollowDone: 'Skipper suivi',
    ctaPress: 'Contact presse',
    ctaShareCopied: 'Lien copié !',
    soonBadge: 'Bientôt',
    statusBefore: 'En préparation',
    statusDuring: 'Course en cours',
    statusAfter: 'Course terminée',
    footerLabel: 'Départ Route du Rhum 2026',
    departureDate: 'Dimanche 1er novembre',
    shareText: 'D\u00e9couvrez le profil de {name} sur la Route du Rhum 2026.'
  },
  en: {
    eyebrowBefore: 'Coming soon',
    eyebrowDuring: 'Live',
    eyebrowAfter: 'Race ended',
    titlePart1: 'Follow',
    titlePart2: 'on the adventure.',
    description: 'From the start, you\u2019ll find here live tracking, official news and everything you need to follow the crossing.',
    feature1Title: 'Live tracking',
    feature1Desc: 'Real-time boat position, every mile of the race',
    feature2Title: 'Official news',
    feature3Title: 'Press kit',
    feature3Desc: 'Official media and downloadable documents',
    feature1Soon: 'From the start, on Sunday 1 November',
    feature2Link: 'All the news about {name}',
    feature3Link: 'Download the press kit (PDF)',
    followDesc: 'In your Espace Rhum',
    pressDesc: 'Interview and image requests',
    shareTitle: 'Share the profile',
    shareDesc: 'Send {name}\u2019s profile',
    ctaFollowAction: 'Follow',
    ctaFollowDone: 'Skipper followed',
    ctaPress: 'Press contact',
    ctaShareCopied: 'Link copied!',
    soonBadge: 'Soon',
    statusBefore: 'In preparation',
    statusDuring: 'Race in progress',
    statusAfter: 'Race ended',
    footerLabel: 'Route du Rhum 2026 start',
    departureDate: 'Sunday, November 1st',
    shareText: 'Discover {name}\u2019s profile on the Route du Rhum 2026.'
  }
};

const ICONS = {
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  


  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  sail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3v14"/><path d="M11 4c3.5 3 6 7 7 11h-7"/><path d="M9 7c-2 2.5-3.5 5-4 8h4"/><path d="M3 19.5c4 1.4 14 1.4 18 0"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>'
};

class SkipperOutro extends HTMLElement {

  static get observedAttributes() {
    return ['first-name', 'accent-color', 'email-press', 'live-active', 'live-url', 'follow-active', 'is-followed', 'state', 'lang', 'trigger-share', 'layout', 'news-url', 'press-kit-url', 'press-kit-name'];
  }

  constructor() {
    super();
    this._resizeObserver = null;
    this._renderRAF = null;
  }

  connectedCallback() {
    this._scheduleRender();
    this._setupResize();
  }

  disconnectedCallback() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
    if (this._renderRAF) cancelAnimationFrame(this._renderRAF);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'trigger-share') {
      if (this.isConnected) this._handleShare(null, this._getAttrs());
      return;
    }
    if (this.isConnected) this._scheduleRender();
  }

  _scheduleRender() {
    if (this._renderRAF) cancelAnimationFrame(this._renderRAF);
    this._renderRAF = requestAnimationFrame(() => {
      this._renderRAF = null;
      this._render();
    });
  }

  _getAttrs() {
    const accent = (this.getAttribute('accent-color') || '#C0A8E5').trim();
    const lang = (this.getAttribute('lang') || 'fr').toLowerCase();
    return {
      firstName: this.getAttribute('first-name') || '',
      accent: accent.startsWith('#') ? accent : `#${accent}`,
      emailPress: (this.getAttribute('email-press') || '').trim(),
      liveActive: this.getAttribute('live-active') === 'true',
      liveUrl: (this.getAttribute('live-url') || '').trim(),
      followActive: this.getAttribute('follow-active') === 'true',
      isFollowed: this.getAttribute('is-followed') === 'true',
      state: (this.getAttribute('state') || 'before').toLowerCase(),
      



      layout: this.getAttribute('layout') === 'liste' ? 'liste' : '',
      newsUrl: this._lienSur(this.getAttribute('news-url')),
      pressKitUrl: this._lienSur(this.getAttribute('press-kit-url')),
      pressKitName: (this.getAttribute('press-kit-name') || '').trim(),
      lang: I18N[lang] ? lang : 'fr'
    };
  }

  _setupResize() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
    this._resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.classList.toggle('sout-tablet', width <= 1024 && width > 640);
        this.classList.toggle('sout-mobile', width <= 640);
      }
    });
    this._resizeObserver.observe(this);
  }

  _render() {
    const attrs = this._getAttrs();
    const t = I18N[attrs.lang];

    const eyebrowText = attrs.state === 'during' ? t.eyebrowDuring
                      : attrs.state === 'after' ? t.eyebrowAfter
                      : t.eyebrowBefore;

    const statusText = attrs.state === 'during' ? t.statusDuring
                     : attrs.state === 'after' ? t.statusAfter
                     : t.statusBefore;

    






    this.innerHTML = '<style>' + this._styles(attrs.accent) + '</style>' + this._renderListe(attrs, t, eyebrowText, statusText);
    this._bindEvents(attrs);
  }

  







  _gestes(attrs, t) {
    const nom = this._escape(attrs.firstName);
    const live = attrs.liveActive && attrs.liveUrl;
    return [
      { cle: 'follow', action: 'follow', icon: ICONS.sail, title: attrs.isFollowed ? t.ctaFollowDone : t.ctaFollowAction + ' ' + nom, desc: t.followDesc, go: attrs.isFollowed ? 'check' : 'plus', actif: attrs.isFollowed },
      attrs.newsUrl ? { cle: 'news', href: attrs.newsUrl, icon: ICONS.news, title: t.feature2Title, desc: t.feature2Link.replace('{deName}', (/^[aeiouyhàâäéèêëîïôöùûü]/i.test(nom) ? 'd’' : 'de ') + nom).replace('{name}', nom), go: 'arrow' } : null,
      attrs.pressKitUrl
        ? { cle: 'kit', href: attrs.pressKitUrl, download: true, icon: ICONS.file, title: t.feature3Title, desc: t.feature3Link, go: 'download' }
        : { cle: 'kit', soon: true, icon: ICONS.file, title: t.feature3Title, desc: t.feature3Desc },
      attrs.emailPress ? { cle: 'press', href: 'mailto:' + attrs.emailPress, icon: ICONS.mail, title: t.ctaPress, desc: t.pressDesc, go: 'arrow' } : null,
      { cle: 'share', action: 'share', icon: ICONS.share, title: t.shareTitle, desc: t.shareDesc.replace('{name}', nom), go: 'arrow' },
      live
        ? { cle: 'live', action: 'live', icon: ICONS.map, title: t.feature1Title, desc: t.feature1Desc, go: 'arrow' }
        : { cle: 'live', soon: true, icon: ICONS.map, title: t.feature1Title, desc: t.feature1Soon }
    ].filter(Boolean);
  }

  

  _ligne(g, t) {
    const partage = g.action === 'share';
    const titre = partage
      ? '<span class="sout-cta-label-default">' + g.title + '</span><span class="sout-cta-label-copied" style="display:none">' + t.ctaShareCopied + '</span>'
      : g.title;
    const icone = partage
      ? '<span class="sout-cta-icon-default">' + g.icon + '</span><span class="sout-cta-icon-check" style="display:none">' + ICONS.check + '</span>'
      : g.icon;
    const fin = g.soon ? '<span class="sout-badge">' + t.soonBadge + '</span>' : '<span class="sout-row-go">' + ICONS[g.go] + '</span>';
    const corps = '<span class="sout-row-icon">' + icone + '</span><span class="sout-row-text"><span class="sout-row-title">' + titre + '</span><span class="sout-row-desc">' + g.desc + '</span></span>' + fin;
    const classes = 'sout-row is-' + g.cle + (g.soon ? ' is-soon' : '') + (g.actif ? ' is-active' : '');
    if (g.soon) return '<div class="' + classes + '" aria-disabled="true">' + corps + '</div>';
    if (g.href) return '<a class="' + classes + '" href="' + this._escape(g.href) + '"' + (g.download ? ' target="_blank" rel="noopener" download' : '') + ' data-go="' + g.go + '">' + corps + '</a>';
    return '<button type="button" class="' + classes + '" data-action="' + g.action + '"' + (g.action === 'follow' ? ' aria-pressed="' + (g.actif ? 'true' : 'false') + '"' : '') + '>' + corps + '</button>';
  }

  _renderListe(attrs, t, eyebrowText, statusText) {
    return '<div class="sout-block sout-liste">' +
      '<div class="sout-left">' +
        '<div class="sout-eyebrow">' + eyebrowText + '</div>' +
        '<h2 class="sout-title">' + t.titlePart1 + ' <span class="sout-title-accent">' + this._escape(attrs.firstName) + '</span><br>' + t.titlePart2 + '</h2>' +
        '<p class="sout-description">' + t.description + '</p>' +
        '<p class="sout-status"><span class="sout-status-dot"></span><b>' + statusText + '</b><span>' + t.footerLabel + ' · <strong>' + t.departureDate + '</strong></span></p>' +
      '</div>' +
      '<ul class="sout-rows">' + this._gestes(attrs, t).map(g => '<li>' + this._ligne(g, t) + '</li>').join('') + '</ul>' +
    '</div>';
  }

  _lienSur(v) {
    const s = String(v || '').trim();
    return /^(https:\/\/|\/)[^\s"'<>]*$/i.test(s) ? s : '';
  }

  _bindEvents(attrs) {
    const liveBtn = this.querySelector('[data-action="live"]');
    if (liveBtn) {
      liveBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('live-click', {
          bubbles: true, composed: true,
          detail: { url: attrs.liveUrl }
        }));
        if (attrs.liveUrl) window.open(attrs.liveUrl, '_blank', 'noopener');
      });
    }

    const followBtn = this.querySelector('[data-action="follow"]');
    if (followBtn) {
      followBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('follow-toggle', {
          bubbles: true, composed: true,
          detail: { currentlyFollowed: attrs.isFollowed }
        }));
      });
    }

    const shareBtn = this.querySelector('[data-action="share"]');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this._handleShare(shareBtn, attrs));
    }
  }

  async _handleShare(button, attrs) {
    const url = window.location.href;
    const title = `${attrs.firstName} | Route du Rhum 2026`;
    const text = (I18N[attrs.lang] || I18N.fr).shareText.replace('{name}', attrs.firstName);

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        this.dispatchEvent(new CustomEvent('share-success', { bubbles: true, composed: true, detail: { method: 'native' } }));
        return;
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        if (button) this._showShareFeedback(button);
        this.dispatchEvent(new CustomEvent('share-success', { bubbles: true, composed: true, detail: { method: 'clipboard' } }));
      }
    } catch (e) {
      console.warn('Erreur partage :', e);
    }
  }

  _showShareFeedback(button) {
    if (!button) return;
    const iconDefault = button.querySelector('.sout-cta-icon-default');
    const iconCheck = button.querySelector('.sout-cta-icon-check');
    const labelDefault = button.querySelector('.sout-cta-label-default');
    const labelCopied = button.querySelector('.sout-cta-label-copied');
    if (iconDefault) iconDefault.style.display = 'none';
    if (iconCheck) iconCheck.style.display = '';
    if (labelDefault) labelDefault.style.display = 'none';
    if (labelCopied) labelCopied.style.display = '';
    button.classList.add('is-copied');
    setTimeout(() => {
      if (iconDefault) iconDefault.style.display = '';
      if (iconCheck) iconCheck.style.display = 'none';
      if (labelDefault) labelDefault.style.display = '';
      if (labelCopied) labelCopied.style.display = 'none';
      button.classList.remove('is-copied');
    }, 2000);
  }

  _escape(str) {
    return String(str || '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }

  _styles(accent) {
    return `
      skipper-outro {
        display: block;
        width: 100%;
        --sout-accent: ${accent};
        --sout-bg: #0d1b3a;
        --sout-bg-block: #0f1f44;
        --sout-rdr-yellow: #F5BE41;
        --sout-blue-light: #A8C8E8;
        --sout-text: #ffffff;
        --sout-text-muted: rgba(255, 255, 255, 0.6);
        --sout-text-dim: rgba(255, 255, 255, 0.55);
        --sout-soon-bg: rgba(255, 255, 255, 0.04);
        --sout-soon-border: rgba(255, 255, 255, 0.12);
        --sout-soon-color: rgba(255, 255, 255, 0.45);
      }

      skipper-outro,
      skipper-outro * { box-sizing: border-box; }

      .sout-block {
        font-family: ${FONT_FAMILY};
        position: relative;
        background: var(--sout-bg-block);
        border-radius: 24px;
        padding: 60px 64px 32px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1.5fr auto 1fr;
        gap: 56px;
        align-items: stretch;
        color: var(--sout-text);
      }

      .sout-block::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg,
          var(--sout-rdr-yellow) 0%,
          var(--sout-accent) 25%,
          var(--sout-blue-light) 50%,
          var(--sout-accent) 75%,
          var(--sout-rdr-yellow) 100%);
        background-size: 200% 100%;
        animation: sout-gradient-flow 6s ease-in-out infinite;
        border-radius: 2px;
      }
      @keyframes sout-gradient-flow {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      .sout-left { min-width: 0; padding-top: 6px; }

      .sout-eyebrow {
        font-family: ${FONT_FAMILY};
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: var(--sout-accent);
        margin-bottom: 18px;
      }

      .sout-title {
        font-family: ${TITLE_FONT};
        font-size: clamp(32px, 4vw, 54px);
        font-weight: normal;
        font-style: italic;
        line-height: 0.96;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        margin: 0 0 22px;
        color: var(--sout-text);
      }
      .sout-title-accent {
        color: var(--sout-accent);
      }

      .sout-description {
        font-family: ${FONT_FAMILY};
        font-size: 16px;
        line-height: 1.55;
        color: var(--sout-text-muted);
        margin: 0 0 36px;
        max-width: 540px;
      }

       
      .sout-block.sout-liste { grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 64px; padding: 60px; align-items: center; }
      .sout-liste .sout-title { margin: 0 0 20px; font-size: clamp(30px, 3.3vw, 46px); }
      .sout-liste .sout-description { margin: 0 0 22px; }
      .sout-status { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 12px; margin: 0; font-family: ${FONT_FAMILY}; font-size: 12px; color: var(--sout-text-dim); }
      .sout-status b { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--sout-text-muted); }
      .sout-status strong { color: var(--sout-accent); font-weight: 700; }
      .sout-badge {
        flex-shrink: 0; padding: 4px 9px; border-radius: 4px; line-height: 1;
        border: 1px solid color-mix(in srgb, var(--sout-accent) 40%, transparent);
        color: var(--sout-accent); font-family: ${FONT_FAMILY}; font-size: 10px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;
      }
      .sout-rows { list-style: none; margin: 0; padding: 0; min-width: 0; border-radius: 16px 2px 16px 2px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.025); overflow: hidden; }
      .sout-rows li + li { border-top: 1px solid rgba(255,255,255,0.08); }
      .sout-row {
        display: grid; grid-template-columns: 38px minmax(0, 1fr) auto; align-items: center; gap: 14px; width: 100%; padding: 14px 18px;
        border: 0; background: transparent; color: var(--sout-text); font: inherit; text-align: left; text-decoration: none; cursor: pointer;
        -webkit-tap-highlight-color: transparent; transition: background-color .25s ease;
      }
      .sout-row:hover { background: color-mix(in srgb, var(--sout-accent) 9%, transparent); }
      .sout-row:focus-visible { outline: 2px solid #fff; outline-offset: -3px; }
      .sout-row-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: color-mix(in srgb, var(--sout-accent) 14%, transparent); color: var(--sout-accent); }
      .sout-row-icon span { display: flex; }
      .sout-row-icon svg { width: 17px; height: 17px; }
      .sout-row-text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
      .sout-row-title { font-family: ${FONT_FAMILY}; font-size: 13px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; line-height: 1.2; }
      .sout-row-desc { font-family: ${FONT_FAMILY}; font-size: 12.5px; line-height: 1.35; color: var(--sout-text-muted); }
      .sout-row-go { display: flex; color: var(--sout-accent); }
      .sout-row-go svg { width: 18px; height: 18px; transition: translate .3s ease; }
      .sout-row:hover .sout-row-go svg { translate: 3px 0; }
      .sout-row[data-go="download"]:hover .sout-row-go svg { translate: 0 2px; }
       
      .sout-row.is-follow .sout-row-icon { background: rgba(252,241,80,0.13); color: #FCF150; }
      .sout-row.is-follow .sout-row-go { width: 30px; height: 30px; align-items: center; justify-content: center; border-radius: 50%; border: 1.5px solid rgba(252,241,80,0.6); color: #FCF150; transition: background-color .25s ease, color .25s ease; }
      .sout-row.is-follow .sout-row-go svg { width: 14px; height: 14px; }
      .sout-row.is-follow:hover { background: rgba(252,241,80,0.07); }
      .sout-row.is-follow:hover .sout-row-go { background: #FCF150; color: #0A1A35; }
      .sout-row.is-follow:hover .sout-row-go svg { translate: none; }
      


      .sout-row.is-follow.is-active .sout-row-go { background: #5DBFC0; border-color: #5DBFC0; color: #06283B; }
      .sout-row.is-follow.is-active:hover { background: rgba(93,191,192,0.08); }
      .sout-row.is-soon { cursor: default; color: var(--sout-soon-color); }
      .sout-row.is-soon:hover { background: transparent; }
      .sout-row.is-soon .sout-row-icon { opacity: .55; }
      @media (prefers-reduced-motion: reduce) { .sout-row, .sout-row-go, .sout-row-go svg { transition: none; } }

      .sout-status-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--sout-accent);
        box-shadow: 0 0 0 0 color-mix(in srgb, var(--sout-accent) 50%, transparent);
        animation: sout-dot-pulse 2s ease-in-out infinite;
      }
      @keyframes sout-dot-pulse {
        0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--sout-accent) 40%, transparent); }
        50% { box-shadow: 0 0 0 8px color-mix(in srgb, var(--sout-accent) 0%, transparent); }
      }
      skipper-outro.sout-tablet .sout-block {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 44px 36px 28px;
      }

      skipper-outro.sout-mobile .sout-block {
        grid-template-columns: 1fr;
        padding: 36px 22px 24px;
        border-radius: 18px;
        gap: 32px;
      }
      skipper-outro.sout-mobile .sout-title { font-size: 28px; }
      skipper-outro.sout-mobile .sout-description { font-size: 14px; margin-bottom: 28px; }
      skipper-outro.sout-tablet .sout-block.sout-liste { grid-template-columns: 1fr; gap: 36px; padding: 44px 36px; }
      skipper-outro.sout-mobile .sout-block.sout-liste { grid-template-columns: 1fr; gap: 28px; padding: 36px 22px 28px; }
      skipper-outro.sout-mobile .sout-liste .sout-description { margin-bottom: 18px; }
      skipper-outro.sout-mobile .sout-row { padding: 13px 14px; gap: 12px; grid-template-columns: 34px minmax(0, 1fr) auto; }
      skipper-outro.sout-mobile .sout-row-icon { width: 34px; height: 34px; }
       
      skipper-outro.sout-mobile .sout-row.is-soon { grid-template-columns: 34px minmax(0, 1fr); grid-template-areas: "icon badge" "icon text"; row-gap: 6px; }
      skipper-outro.sout-mobile .sout-row.is-soon .sout-row-icon { grid-area: icon; }
      skipper-outro.sout-mobile .sout-row.is-soon .sout-row-text { grid-area: text; }
      skipper-outro.sout-mobile .sout-row.is-soon .sout-badge { grid-area: badge; justify-self: start; padding: 3px 7px; font-size: 9px; }
    `;
  }
}

if (!customElements.get('skipper-outro')) {
  customElements.define('skipper-outro', SkipperOutro);
}
    },
     
    'skippers-carousel': function () {
 

if (!customElements.get('skippers-carousel')) {
class SkippersCarousel extends HTMLElement {
  static get observedAttributes() {
    return ['skippers', 'current-id', 'mystere-img', 'lang'];
  }

  

  _libelles() {
    const lang = (this.getAttribute('lang') || 'fr').toLowerCase().slice(0, 2);
    return lang === 'en'
      ? { prev: 'Previous', next: 'Next' }
      : { prev: 'Précédent', next: 'Suivant' };
  }

  constructor() {
    super();
    this.skippers = [];
    this.currentIndex = 0;
    this.mystereImg = 'https://static.wixstatic.com/media/7bb303_fc14c1d1fa984ca5aac30753d24e22cb~mv2.avif';
    this.holdInterval = null;
    this.ready = false;
    this.attachShadow({ mode: 'open' });
  }

   
  _esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }
  _safeUrl(u) {
    let s = String(u == null ? '' : u).trim();
    if (!s) return '';
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) s = 'https://static.wixstatic.com/media/' + m[1];
    else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
    const okScheme = /^https?:/i.test(s);
    const relative = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
    if (!okScheme && !relative) return '';
    return s.replace(/"/g, '%22').replace(/'/g, '%27');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'skippers') {
      try { this.skippers = JSON.parse(newVal) || []; } catch (e) { this.skippers = []; }
      this.ready = false;
      this.init();
    }
    if (name === 'current-id') {
      const idx = this.skippers.findIndex(s => s.id === newVal);
      this.currentIndex = idx >= 0 ? idx : 0;
      if (this.ready) this.update();
    }
    if (name === 'mystere-img') { this.mystereImg = newVal; }
    if (name === 'lang' && this.shadowRoot) {
      const l = this._libelles();
      const g = this.shadowRoot.querySelector('.arrow-left');
      const d = this.shadowRoot.querySelector('.arrow-right');
      if (g) g.setAttribute('aria-label', l.prev);
      if (d) d.setAttribute('aria-label', l.next);
    }
  }

  connectedCallback() {
    if (!this.ready) this.init();
    this._resizeHandler = () => {
      this.update();
      const hide = window.innerWidth < 768;
      const root = this.shadowRoot;
      if (root.querySelector('.arrow-left')) {
        root.querySelector('.arrow-left').style.display = hide ? 'none' : 'flex';
        root.querySelector('.arrow-right').style.display = hide ? 'none' : 'flex';
      }
    };
    window.addEventListener('resize', this._resizeHandler);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._resizeHandler);
  }

  wixToUrl(url) {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const m = url.match(/wix:image:\/\/v1\/([^/#]+)/);
    if (m) return `https://static.wixstatic.com/media/${m[1]}`;
    const s = url.match(/wix:vector:\/\/v1\/([^/#]+)/);
    if (s) return `https://static.wixstatic.com/shapes/${s[1]}`;
    return url;
  }

  getPositionStyle(offset) {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const w = this.shadowRoot.querySelector('.carousel-wrapper')?.offsetWidth || 360;
      const sideX = w * 0.38;
      const farX = w * 0.65;
      const positions = {
        '-2': { x: -farX,  z: -120, scale: 0.42, opacity: 0.0, zIndex: 1,  w: 130, h: 190, iw: 28, ih: 50 },
        '-1': { x: -sideX, z: -60,  scale: 0.62, opacity: 0.6, zIndex: 5,  w: 130, h: 190, iw: 28, ih: 50 },
         '0': { x: 0,      z: 0,    scale: 1,    opacity: 1,   zIndex: 10, w: 170, h: 248, iw: 34, ih: 60 },
         '1': { x: sideX,  z: -60,  scale: 0.62, opacity: 0.6, zIndex: 5,  w: 130, h: 190, iw: 28, ih: 50 },
         '2': { x: farX,   z: -120, scale: 0.42, opacity: 0.0, zIndex: 1,  w: 130, h: 190, iw: 28, ih: 50 },
      };
      return positions[String(offset)];
    }

    const positions = {
      '-2': { x: -430, z: -160, scale: 0.58, opacity: 0.32, zIndex: 1,  w: 200, h: 292, iw: 40, ih: 71 },
      '-1': { x: -240, z: -80,  scale: 0.76, opacity: 0.72, zIndex: 5,  w: 200, h: 292, iw: 40, ih: 71 },
       '0': { x: 0,    z: 0,    scale: 1,    opacity: 1,    zIndex: 10, w: 251, h: 367, iw: 50, ih: 89 },
       '1': { x: 240,  z: -80,  scale: 0.76, opacity: 0.72, zIndex: 5,  w: 200, h: 292, iw: 40, ih: 71 },
       '2': { x: 430,  z: -160, scale: 0.58, opacity: 0.32, zIndex: 1,  w: 200, h: 292, iw: 40, ih: 71 },
    };
    return positions[String(offset)];
  }

  navigate(dir) {
    const total = this.skippers.length;
    if (!total) return;
    this.currentIndex = (this.currentIndex + dir + total) % total;
    this.update();
  }

  updateArrowVisibility() {
    const root = this.shadowRoot;
    const hide = window.innerWidth < 768;
    const arrowLeft = root.querySelector('.arrow-left');
    const arrowRight = root.querySelector('.arrow-right');
    if (arrowLeft) arrowLeft.style.display = hide ? 'none' : 'flex';
    if (arrowRight) arrowRight.style.display = hide ? 'none' : 'flex';
  }

  update() {
    const root = this.shadowRoot;
    const total = this.skippers.length;
    if (!total) return;

     
    const focusedCard = root.activeElement && root.activeElement.classList && root.activeElement.classList.contains('card-item')
      ? root.activeElement : null;

    root.querySelectorAll('.card-item').forEach(el => {
      const skipperIdx = parseInt(el.dataset.skipperIdx);
      const offset = ((skipperIdx - this.currentIndex + total) % total + total) % total;
      const normalizedOffset = offset > total / 2 ? offset - total : offset;
      const p = this.getPositionStyle(normalizedOffset);

      if (!p) {
        el.style.transform = 'translateX(calc(0px - 50%)) translateZ(-300px) scale(0.3)';
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        el.style.zIndex = '0';
        el.dataset.offset = String(normalizedOffset);
        el.setAttribute('tabindex', '-1'); el.removeAttribute('role'); el.removeAttribute('aria-label');  
        return;
      }

      const isCenter = normalizedOffset === 0;
      const skipper = this.skippers[skipperIdx];
      const estMystere = !skipper.devoile;

      el.style.transform = `translateX(calc(${p.x}px - 50%)) translateZ(${p.z}px) scale(${p.scale})`;
      el.style.opacity = String(p.opacity);
      el.style.zIndex = String(p.zIndex);
      el.style.cursor = isCenter ? (skipper.devoile ? 'pointer' : 'default') : 'pointer';
      el.style.pointerEvents = 'auto';
      el.style.width = `${p.w}px`;
      el.style.height = `${p.h}px`;
      el.dataset.offset = String(normalizedOffset);

       
       
      if (isCenter && !estMystere) {
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        


        el.setAttribute('aria-label', [skipper.prenom, skipper.nom, skipper.sponsor].filter(Boolean).join(' '));
      } else {
        el.setAttribute('tabindex', '-1');
        el.removeAttribute('role');
        el.removeAttribute('aria-label');
      }

      const card = el.querySelector('.skipper-card');
      if (card) {
        card.style.width = `${p.w}px`;
        card.style.height = `${p.h}px`;
        card.dataset.slug = skipper.slug || '';

        

        const img = card.querySelector('.card-img');
        const photoCarte = estMystere ? this.mystereImg : this._safeUrl(this.wixToUrl(skipper.photo || ''));
        if (img && photoCarte && img.getAttribute('src') !== photoCarte) img.setAttribute('src', photoCarte);

        const overlay = card.querySelector('.card-overlay');
        if (overlay) overlay.className = `card-overlay${isCenter ? ' large' : ''}`;

        const drapeau = this.wixToUrl(skipper.drapeau || '');
        const flagEl = card.querySelector('.card-flag');
        const prenomEl = card.querySelector('.card-prenom');
        const nomEl = card.querySelector('.card-nom');
        const sponsorEl = card.querySelector('.card-sponsor');

        if (flagEl) { flagEl.src = drapeau; flagEl.style.display = drapeau && !estMystere ? 'block' : 'none'; }
        if (prenomEl) { prenomEl.textContent = skipper.prenom || ''; prenomEl.style.display = !estMystere && skipper.prenom ? 'block' : 'none'; }
        if (nomEl) nomEl.textContent = estMystere ? '???' : (skipper.nom || '');
        if (sponsorEl) { sponsorEl.textContent = skipper.sponsor || ''; sponsorEl.style.display = isCenter && !estMystere && skipper.sponsor ? 'block' : 'none'; }
      }

      const iconWrapper = el.querySelector('.card-classe-wrapper');
      if (iconWrapper) {
        const iconImg = iconWrapper.querySelector('img');
        const classeIcon = this.wixToUrl(skipper.classeIcon || '');
        if (iconImg) { iconImg.src = classeIcon; iconImg.style.width = `${p.iw}px`; iconImg.style.height = `${p.ih}px`; }
        iconWrapper.style.display = classeIcon ? 'block' : 'none';
      }
    });

     
     
     
    if (focusedCard && focusedCard.getAttribute('tabindex') === '-1') {
      const newCenter = root.querySelector('.card-item[tabindex="0"]');
      if (newCenter) newCenter.focus();
    }
  }

  init() {
    const total = this.skippers.length;

    this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :host { display: block; width: 100%; padding: 50px 0 60px; }

        .carousel-wrapper {
          position: relative; width: 100%; height: 500px; perspective: 1200px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; user-select: none; -webkit-user-select: none; cursor: grab;
        }
        .carousel-wrapper:active { cursor: grabbing; }

        @media (max-width: 767px) {
          .carousel-wrapper { height: 340px; perspective: 800px; }
        }

        .card-item {
          position: absolute; left: 50%; overflow: visible;
          transition: transform 0.6s cubic-bezier(0.34, 1.1, 0.64, 1), opacity 0.5s ease;
        }
        .card-item:not([data-offset="0"]):hover .skipper-card { filter: brightness(1.2); }

        .skipper-card {
          position: relative; overflow: hidden; background: #0d1f35;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 80px 3px 30px 3px; transition: filter 0.25s ease;
        }
        .card-item[data-offset="0"] .skipper-card { border-color: rgba(255,255,255,0.2); }

        .card-img {
          width: 100%; height: 100%; object-fit: cover; object-position: top center;
          display: block; -webkit-user-drag: none; user-select: none; pointer-events: none;
        }
        .card-drag-shield { position: absolute; inset: 0; z-index: 2; background: transparent; }

        .card-classe-wrapper {
          position: absolute; top: -30px; right: -20px; z-index: 30; pointer-events: none;
        }

        .card-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 16px 14px 14px; z-index: 3;
          background: linear-gradient(to top, rgba(25,29,49,1) 0%, rgba(25,29,49,0.92) 30%, rgba(25,29,49,0.6) 60%, transparent 100%);
        }
        .card-overlay.large {
          padding: 24px 20px 22px;
          background: linear-gradient(to top, rgba(25,29,49,1) 0%, rgba(25,29,49,0.95) 35%, rgba(25,29,49,0.65) 65%, transparent 100%);
        }

        .card-flag { width: 22px; height: 22px; object-fit: cover; border-radius: 50%; margin-bottom: 6px; display: block; pointer-events: none; }

        .card-prenom { color: white; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; line-height: 1.2; }
        .card-nom { color: white; font-family: 'Varien', sans-serif; font-size: 16px; font-style: italic; text-transform: uppercase; line-height: 1.05; }
        .card-sponsor { color: rgba(255,255,255,0.65); font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-top: 5px; letter-spacing: 0.5px; }

        .card-item[data-offset="0"] .card-prenom { font-size: 13px; letter-spacing: 2px; }
        .card-item[data-offset="0"] .card-nom { font-size: 28px; }
        .card-item[data-offset="0"] .card-sponsor { font-size: 12px; }

        .arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 50;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          user-select: none; -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
        }
        .arrow:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.8); transform: translateY(-50%) scale(1.1); }
        .arrow:active { transform: translateY(-50%) scale(0.92); }
        .arrow-left { left: 24px; }
        .arrow-right { right: 24px; }
        .arrow:focus-visible { outline: 2px solid #5DBFC0; outline-offset: 2px; }
        .card-item:focus-visible { outline: none; }
        .card-item:focus-visible .skipper-card { outline: 2px solid #5DBFC0; outline-offset: 3px; }
        .arrow svg { width: 18px; height: 18px; fill: none; stroke: white; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

         
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
        }
      </style>

      <div class="carousel-wrapper">
        <div class="arrow arrow-left" role="button" tabindex="0" aria-label="${this._libelles().prev}">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </div>

        ${this.skippers.map((skipper, skipperIdx) => {
          const offset = ((skipperIdx - this.currentIndex + total) % total + total) % total;
          const normalizedOffset = offset > total / 2 ? offset - total : offset;
          const p = this.getPositionStyle(normalizedOffset);
          const isCenter = normalizedOffset === 0;
          const estMystere = !skipper.devoile;
          const photo = estMystere ? this.mystereImg : this._safeUrl(this.wixToUrl(skipper.photo || ''));
          const classeIcon = this._safeUrl(this.wixToUrl(skipper.classeIcon || ''));
          const drapeau = this._safeUrl(this.wixToUrl(skipper.drapeau || ''));

          







          if (!p) return `
            <div class="card-item" data-skipper-idx="${skipperIdx}" data-offset="${normalizedOffset}"
              style="transform:translateX(calc(0px - 50%)) translateZ(-300px) scale(0.3);opacity:0;pointer-events:none;z-index:0;width:200px;height:292px;">
              <div class="skipper-card" data-slug="${this._safeUrl(skipper.slug || '')}" style="width:200px;height:292px;">
                <img class="card-img" alt="" draggable="false" loading="lazy" decoding="async" />
                <div class="card-drag-shield"></div>
                <div class="card-overlay">
                  <img class="card-flag" src="" style="display:none" alt="" />
                  <div class="card-prenom" style="display:none"></div>
                  <div class="card-nom"></div>
                  <div class="card-sponsor" style="display:none"></div>
                </div>
              </div>
              ${classeIcon ? `<div class="card-classe-wrapper"><img src="${classeIcon}" style="width:40px;height:71px;" alt="" draggable="false" /></div>` : ''}
            </div>`;

          return `
            <div class="card-item" data-skipper-idx="${skipperIdx}" data-offset="${normalizedOffset}"
              style="transform:translateX(calc(${p.x}px - 50%)) translateZ(${p.z}px) scale(${p.scale});opacity:${p.opacity};z-index:${p.zIndex};cursor:${isCenter ? 'default' : 'pointer'};width:${p.w}px;height:${p.h}px;">
              <div class="skipper-card" data-slug="${this._safeUrl(skipper.slug || '')}" style="width:${p.w}px;height:${p.h}px;">
                <img class="card-img" src="${photo}" alt="" draggable="false" loading="lazy" decoding="async" />
                <div class="card-drag-shield"></div>
                <div class="card-overlay${isCenter ? ' large' : ''}">
                  <img class="card-flag" src="${drapeau}" style="display:${drapeau && !estMystere ? 'block' : 'none'}" alt="" draggable="false" />
                  <div class="card-prenom" style="display:${!estMystere && skipper.prenom ? 'block' : 'none'}">${this._esc(skipper.prenom || '')}</div>
                  <div class="card-nom">${estMystere ? '???' : this._esc(skipper.nom || '')}</div>
                  <div class="card-sponsor" style="display:${isCenter && !estMystere && skipper.sponsor ? 'block' : 'none'}">${this._esc(skipper.sponsor || '')}</div>
                </div>
              </div>
              ${classeIcon ? `<div class="card-classe-wrapper"><img src="${classeIcon}" style="width:${p.iw}px;height:${p.ih}px;" alt="" draggable="false" /></div>` : ''}
            </div>`;
        }).join('')}

        <div class="arrow arrow-right" role="button" tabindex="0" aria-label="${this._libelles().next}">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    `;

    const root = this.shadowRoot;
    this.ready = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.update();
      this.updateArrowVisibility();
    }));

    const arrowLeft = root.querySelector('.arrow-left');
    const arrowRight = root.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', () => this.navigate(-1));
    arrowRight.addEventListener('click', () => this.navigate(1));
     
    const arrowKey = (arrow, dir) => arrow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); this.navigate(dir); }
    });
    arrowKey(arrowLeft, -1); arrowKey(arrowRight, 1);
    arrowLeft.addEventListener('mousedown', () => { this.holdInterval = setInterval(() => this.navigate(-1), 350); });
    arrowRight.addEventListener('mousedown', () => { this.holdInterval = setInterval(() => this.navigate(1), 350); });
    ['mouseup', 'mouseleave'].forEach(ev => {
      arrowLeft.addEventListener(ev, () => clearInterval(this.holdInterval));
      arrowRight.addEventListener(ev, () => clearInterval(this.holdInterval));
    });

    root.querySelectorAll('.card-item').forEach(el => {
      const activate = () => {
        if (el.dataset.wasDrag === 'true') return;
        const offset = parseInt(el.dataset.offset);
        const skipperIdx = parseInt(el.dataset.skipperIdx);
        const skipper = this.skippers[skipperIdx];

        if (offset === 0) {
          if (!skipper.devoile) return;
          const slug = el.querySelector('.skipper-card')?.dataset.slug;
          if (slug) this.dispatchEvent(new CustomEvent('navigate', { detail: { slug }, bubbles: true, composed: true }));
        } else {
          this.currentIndex = skipperIdx;
          this.update();
        }
      };
      el.addEventListener('click', activate);
       
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); activate(); }
      });
    });

    const wrapper = root.querySelector('.carousel-wrapper');
    let startX = 0;
    wrapper.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
    wrapper.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) this.navigate(diff > 0 ? 1 : -1);
    });

    let dragStartX = 0;
    let isDragging = false;
    wrapper.addEventListener('mousedown', (e) => {
      if (e.target.closest('.arrow')) return;
      dragStartX = e.clientX; isDragging = true;
      root.querySelectorAll('.card-item').forEach(el => { el.dataset.wasDrag = 'false'; });
    });
    wrapper.addEventListener('mousemove', (e) => { if (!isDragging) return; e.preventDefault(); });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diff = dragStartX - e.clientX;
      if (Math.abs(diff) > 60) {
        root.querySelectorAll('.card-item').forEach(el => { el.dataset.wasDrag = 'true'; });
        this.navigate(diff > 0 ? 1 : -1);
        setTimeout(() => { root.querySelectorAll('.card-item').forEach(el => { el.dataset.wasDrag = 'false'; }); }, 300);
      }
    };
    wrapper.addEventListener('mouseup', endDrag);
    wrapper.addEventListener('mouseleave', endDrag);
  }
}

customElements.define('skippers-carousel', SkippersCarousel);
}
    },
     
    'rdr-espace-promo': function () {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements) return;
  if (window.customElements.get('rdr-espace-promo')) return;

  const ADRESSES = {
    fr: { creer: '/mon-espace-rhum', connexion: '/mon-espace-rhum', ouvrir: '/mon-espace-rhum' },
    en: { creer: '/en/mon-espace-rhum', connexion: '/en/mon-espace-rhum', ouvrir: '/en/mon-espace-rhum' }
  };

  


  const TEXTES = {
    fr: {
      kicker: 'Mon Espace Rhum',
      titre: ['Vivez ', 'votre', ' Rhum'],
      corps: 'Rejoignez les passionnés du Rhum et partagez toute l’intensité de la course. Suivez vos skippers préférés, découvrez des contenus et données personnalisés, relevez des défis, participez à des jeux-concours exclusifs et collectionnez des badges au fil de l’aventure.',
      corpsPrenom: (p) => 'Rejoignez les passionnés du Rhum et partagez toute l’intensité de la course. Suivez ' + p + ' et vos skippers préférés, découvrez des contenus et données personnalisés, relevez des défis, participez à des jeux-concours exclusifs et collectionnez des badges au fil de l’aventure.',
      court: 'Suivez vos skippers préférés, jouez chaque jour et collectionnez des badges tout au long de la course.',
      courtPrenom: (p) => 'Suivez ' + p + ' et vos skippers préférés, jouez chaque jour et collectionnez des badges tout au long de la course.',
      creer: 'Créez votre espace',
      connexion: 'J’ai déjà un compte',
      ouvrir: 'Ouvrir mon espace',
      jeuChiffre: '1', jeuMots: ['jour', 'jeu'], jeuNote: 'Prêts à tenter votre chance ?!',
      region: 'Mon Espace Rhum'
    },
    en: {
      kicker: 'My Rhum Hub',
      titre: ['Experience ', 'your', ' Rhum'],
      corps: 'Join the Route du Rhum community and experience all the intensity of the race. Follow your favourite skippers, discover personalised content and data, take part in exclusive competitions and collect badges throughout the adventure.',
      corpsPrenom: (p) => 'Join the Route du Rhum community and experience all the intensity of the race. Follow ' + p + ' and your favourite skippers, discover personalised content and data, take part in exclusive competitions and collect badges throughout the adventure.',
      court: 'Follow your favourite skippers, play every day and collect badges throughout the race.',
      courtPrenom: (p) => 'Follow ' + p + ' and your favourite skippers, play every day and collect badges throughout the race.',
      creer: 'Create my space',
      connexion: 'I already have an account',
      ouvrir: 'Open my space',
      jeuChiffre: '1', jeuMots: ['day', 'game'], jeuNote: 'Sign up for a chance to win exclusive prizes!',
      region: 'My Rhum Hub'
    }
  };

  let numero = 0;
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  


  function urlVisuel(u, largeur) {
    const s = String(u || '').trim();
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/);
    if (!m) m = s.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/#?]+)/);
    if (!m) return '';
    return 'https://static.wixstatic.com/media/' + m[1] + '/v1/fit/w_' + largeur + ',h_' + largeur + ',q_85,enc_auto/' + m[1];
  }


  const FLECHE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CALENDRIER = '<svg class="rep-cal" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><rect x="6" y="12" width="52" height="46" rx="8" fill="#fff"/><rect x="10" y="16" width="44" height="38" rx="5" fill="#EB7424"/><rect x="10" y="16" width="44" height="10" fill="#F7EC4B"/><g fill="#fff" opacity=".9"><rect x="15" y="31" width="8" height="7" rx="1.5"/><rect x="28" y="31" width="8" height="7" rx="1.5"/><rect x="41" y="31" width="8" height="7" rx="1.5"/><rect x="15" y="42" width="8" height="7" rx="1.5"/><rect x="28" y="42" width="8" height="7" rx="1.5"/></g><rect x="40" y="41" width="10" height="9" rx="2" fill="#13204A"/><rect x="18" y="6" width="6" height="14" rx="3" fill="#fff"/><rect x="40" y="6" width="6" height="14" rx="3" fill="#fff"/></svg>';

  

  const CSS =
    'rdr-espace-promo{display:block;width:100%;container:rep / inline-size;background:transparent;}' +
    'rdr-espace-promo[hidden],rdr-espace-promo[masque="oui"]{display:none;}' +
     
    '.rep-root,.rep-root *,.rep-root *::before,.rep-root *::after{box-sizing:border-box;margin:0;padding:0;}' +
    '.rep-root a,.rep-root a:visited,.rep-root a:hover,.rep-root a:focus{color:inherit;text-decoration:none;background:none;border:0;font:inherit;}' +
    '.rep-root p,.rep-root h2{font:inherit;color:inherit;letter-spacing:inherit;text-transform:none;}' +
    '.rep-root img{display:block;max-width:none;min-width:0;border:0;}' +
    '.rep-root svg{display:block;}' +

    '.rep-root{position:relative;isolation:isolate;overflow:hidden;width:100%;border-radius:28px;color:#fff;font-family:Montserrat,system-ui,sans-serif;-webkit-font-smoothing:antialiased;' +
      'background:radial-gradient(90% 120% at 0% 0%,#F4A23A 0%,rgba(244,162,58,0) 58%),linear-gradient(118deg,#EF8A2B 0%,#E86C20 46%,#DB5710 100%);}' +
    '.rep-root::before{content:"";position:absolute;inset:0;z-index:-1;opacity:.5;pointer-events:none;background:repeating-linear-gradient(128deg,rgba(255,255,255,.07) 0 150px,rgba(255,255,255,0) 150px 330px);}' +
    '.rep-root .rep-texte{position:relative;z-index:2;}' +
    '.rep-root .rep-kicker{display:block;margin:0 0 12px;font:700 15px/1 Montserrat,system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;}' +
    '.rep-root .rep-titre{font:italic 400 clamp(46px,7.6cqi,92px)/.86 Varien,Impact,sans-serif;letter-spacing:-.01em;text-transform:uppercase;}' +
    '.rep-root .rep-titre em{font-style:inherit;color:#F7EC4B;}' +
    '.rep-root .rep-titre span{display:block;}' +
    '.rep-root .rep-corps{margin:22px 0 0;max-width:560px;font:600 16px/1.55 Montserrat,system-ui,sans-serif;}' +
    '.rep-root .rep-corps b{font-weight:700;color:#F7EC4B;}' +
    '.rep-root .rep-actions{display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;margin:28px 0 0;}' +
    '.rep-root a.rep-cta{display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 24px;border-radius:12px 3px 12px 3px;background:#F7EC4B;color:#13204A;white-space:nowrap;' +
      'font:italic 400 20px/1 Varien,Impact,sans-serif;text-transform:uppercase;box-shadow:0 12px 24px -12px rgba(80,24,0,.7);transition:transform .2s ease,box-shadow .2s ease;}' +
    '.rep-root a.rep-cta svg{width:18px;height:18px;transition:transform .2s ease;}' +
    '.rep-root a.rep-cta:hover{transform:translateY(-2px);box-shadow:0 16px 28px -12px rgba(80,24,0,.8);}' +
    '.rep-root a.rep-cta:hover svg{transform:translateX(3px);}' +
    '.rep-root a.rep-lien{font:700 12px/1.3 Montserrat,system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;text-decoration:underline;text-underline-offset:5px;text-decoration-color:rgba(255,255,255,.5);}' +
    '.rep-root a.rep-lien:hover{text-decoration-color:#fff;}' +
    '.rep-root a:focus-visible{outline:3px solid #13204A;outline-offset:3px;}' +
    '.rep-root .rep-visuel{position:absolute;z-index:1;pointer-events:none;}' +

    


    '.rep--bandeau a.rep-cta{max-width:100%;padding:0 18px;font-size:min(18px,5cqi);min-height:50px;}' +


     
    '.rep-root.rep--bandeau{display:grid;gap:14px;padding:28px 22px 30px;}' +
    '.rep--bandeau .rep-titre{font-size:min(clamp(36px,12.5cqi,56px),calc((100cqi - 44px) / var(--rep-mot,6)));}' +
    '.rep--bandeau .rep-titre span{display:inline;}' +
    '.rep--bandeau .rep-titre span:last-child{display:block;}' +
    '.rep--bandeau .rep-kicker{margin:0 0 8px;}' +
    '.rep--bandeau .rep-corps{margin:0;font-size:14px;max-width:none;}' +
    '.rep--bandeau .rep-actions{margin-top:18px;}' +
        '.rep--bandeau .rep-visuel,.rep--bandeau .rep-jeu{display:none;}' +
    '@container rep (min-width:700px){' +
      '.rep-root.rep--bandeau{grid-template-columns:auto minmax(0,1fr);align-items:center;gap:36px;padding:36px 40px;}' +
      '.rep--bandeau .rep-titre{font-size:min(clamp(40px,6.4cqi,66px),calc(42cqi / var(--rep-ligne,8)));}' +
      '.rep--bandeau .rep-corps{font-size:15px;}' +
      '.rep--bandeau a.rep-cta{padding:0 20px;font-size:18px;min-height:52px;}' +
    '}' +
    '@container rep (min-width:1000px){' +
      '.rep-root.rep--bandeau{grid-template-columns:auto minmax(340px,1fr) 24%;min-height:230px;padding:36px 0 36px 48px;}' +
      '.rep--bandeau .rep-titre{font-size:min(clamp(40px,5.2cqi,60px),calc(32cqi / var(--rep-ligne,8)));}' +
      '.rep--bandeau .rep-visuel{display:block;top:-30px;right:-40px;width:32%;height:auto;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 18%);mask-image:linear-gradient(90deg,transparent 0,#000 18%);}' +
      '.rep--bandeau.rep--sans-visuel{grid-template-columns:auto minmax(0,1fr);padding-right:48px;}' +
    '}' +
    '@media (prefers-reduced-motion:reduce){.rep-root a.rep-cta,.rep-root a.rep-cta svg,.rep--promo a.rep-promo{transition:none;}.rep-root a.rep-cta:hover,.rep--promo a.rep-promo:hover{transform:none;}}';

  class RdrEspacePromo extends HTMLElement {
    static get observedAttributes() { return ['lang', 'variante', 'membre', 'prenom', 'visuel', 'jeu', 'promo']; }

    constructor() {
      super();
      this._pret = false;
      this._id = 'rep-titre-' + (++numero);
      this._trame = 0;
      this._surClic = (ev) => {
        const a = ev.target && ev.target.closest && ev.target.closest('a[data-rep-action]');
        if (!a || !this.contains(a)) return;
        const action = a.getAttribute('data-rep-action');
        



        if (this.getAttribute('inscription') === 'page' && (action === 'creer' || action === 'connexion')) ev.preventDefault();
        this.dispatchEvent(new CustomEvent('rdr-espace-promo', { bubbles: true, composed: true, detail: { action, lang: this._lang() } }));
      };
    }

    connectedCallback() {
      if (!this._pret) {
        this._pret = true;
        this.addEventListener('click', this._surClic);
      }
      this._rendre();
    }

    disconnectedCallback() {
      if (this._trame) { cancelAnimationFrame(this._trame); this._trame = 0; }
    }

    


    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres || !this.isConnected || !this._pret) return;
      if (this._trame) return;
      this._trame = requestAnimationFrame(() => { this._trame = 0; this._rendre(); });
    }

    














    _lang() {
      const pose = this.getAttribute('lang');
      if (pose) return String(pose).toLowerCase().slice(0, 2) === 'en' ? 'en' : 'fr';
      try { return /^\/en(\/|$)/i.test(location.pathname) ? 'en' : 'fr'; } catch (e) { return 'fr'; }
    }


    _rendre() {
      const lang = this._lang();
      const T = TEXTES[lang];
      const A = ADRESSES[lang];
      const bandeau = this.getAttribute('variante') === 'bandeau';
      const membre = this.getAttribute('membre') === 'oui';
      const prenom = String(this.getAttribute('prenom') || '').replace(/\s+/g, ' ').trim().slice(0, 40);
      const brut = this.getAttribute('visuel');
      const src = urlVisuel(brut, bandeau ? 900 : 1400);
      const srcset = src ? urlVisuel(brut, 700) + ' 700w, ' + urlVisuel(brut, 1000) + ' 1000w, ' + urlVisuel(brut, 1400) + ' 1400w' : '';

      const titre = '<h2 class="rep-titre" id="' + this._id + '"><span>' + esc(T.titre[0]) + '<em>' + esc(T.titre[1]) + '</em></span><span>' + esc(T.titre[2]) + '</span></h2>';
      const phraseLongue = prenom ? esc(T.corpsPrenom('@@PRENOM@@')).replace('@@PRENOM@@', '<b>' + esc(prenom) + '</b>') : esc(T.corps);
      const phraseCourte = prenom ? esc(T.courtPrenom(prenom)) : esc(T.court);
      const actions = '<div class="rep-actions">' +
        (membre
          ? '<a class="rep-cta" href="' + esc(A.ouvrir) + '" data-rep-action="ouvrir">' + esc(T.ouvrir) + FLECHE + '</a>'
          : '<a class="rep-cta" href="' + esc(A.creer) + '" data-rep-action="creer">' + esc(T.creer) + FLECHE + '</a>' +
            '<a class="rep-lien" href="' + esc(A.connexion) + '" data-rep-action="connexion">' + esc(T.connexion) + '</a>') +
        '</div>';
      const visuel = src ? '<img class="rep-visuel" src="' + esc(src) + '" srcset="' + esc(srcset) + '" sizes="' + (bandeau ? '(min-width:1000px) 460px, 1px' : '(min-width:940px) 760px, 100vw') + '" alt="" loading="lazy" decoding="async">' : '';
       
      const avecJeu = this.getAttribute('jeu') === 'oui';
      const jeu = !avecJeu ? '' : '<p class="rep-jeu"><span class="rep-jeu-chiffre">' + esc(T.jeuChiffre) + '</span><span class="rep-jeu-mots"><span>' + esc(T.jeuMots[0]) + '</span><span>' + esc(T.jeuMots[1]) + '</span></span><span class="rep-jeu-note">' + esc(T.jeuNote) + '</span>' + CALENDRIER + '</p>';
      const classes = 'rep-root ' + (bandeau ? 'rep--bandeau' : 'rep--affiche') + (src ? '' : ' rep--sans-visuel');
      



      const mot = Math.max(...T.titre.join(' ').split(/\s+/).map(m => m.length)) * 0.7;
      const ligne = (T.titre[0] + T.titre[1]).length * 0.7;
      const aria = ' aria-labelledby="' + this._id + '" style="--rep-mot:' + mot.toFixed(2) + ';--rep-ligne:' + ligne.toFixed(2) + '"';

      this.innerHTML = '<style>' + CSS + '</style>' + (bandeau
        ? '<section class="' + classes + '"' + aria + ' lang="' + lang + '">' + titre +
            '<div class="rep-texte"><p class="rep-kicker">' + esc(T.kicker) + '</p><p class="rep-corps">' + phraseCourte + '</p>' + actions + '</div>' +
            visuel + '</section>'
        : '<section class="' + classes + '"' + aria + ' lang="' + lang + '">' +
            '<div class="rep-texte"><p class="rep-kicker">' + esc(T.kicker) + '</p>' + titre + '<p class="rep-corps">' + phraseLongue + '</p>' + actions + '</div>' +
            '<div class="rep-scene">' + visuel + jeu + '</div></section>');
    }
  }

  window.customElements.define('rdr-espace-promo', RdrEspacePromo);
})();
    }
  };

  










  const AJUSTABLES = [
    ['.sk-id-tuile dd', null, true, 12],
    ['.sk-hero--affiche .sk-hero-faits li', 'b', true, 12],
    ['.sk-pref-carte figcaption', null, false, 6],
    ['.sk-tete', '.sk-titre', false, 24],
    ['.sk-actu-titre', null, false, 14],
    ['.sk-palm-marque', null, false, 9],
    ['.sk-ligne dd', null, false, 11],
    ['.sk-hero-bateau', null, false, 11],
    ['.sk-en-attente-textes', '.sk-en-attente-titre', false, 16]
  ];
  

  function insecables(t) {
    return String(t == null ? '' : t).trim().split(/\s+/).filter(Boolean)
      .map(m => '<span class="sk-insecable">' + esc(m) + '</span>').join(' ');
  }
  function definirSousModule(nom) {
    if (!window.customElements || customElements.get(nom)) return false;
    const f = SOUS_MODULES[nom];
    if (typeof f !== 'function') return false;
    delete SOUS_MODULES[nom];
    try { f(); } catch (e) { console.warn('[rdr-skipper] module intégré ' + nom + ' indisponible', e); }
    return true;
  }

  const MEDIA = 'https://static.wixstatic.com/media/';
  const SHAPES = 'https://static.wixstatic.com/shapes/';
   
  const FOND_MOTIF = 'wix:image://v1/7bb303_a2fac4ae6e5f4029ad0212f1a403d7e8~mv2.png/motif.png#originWidth=3168&originHeight=2160';
  const FOND_FILIGRANE = 'wix:image://v1/7bb303_8e37810dab1b4b338994b8f710f0a628~mv2.avif/filigrane.avif#originWidth=1989&originHeight=1946';
   
  const TYMAL_PANCARTE = SHAPES + '7bb303_b5fd53d83d734fb495151da65ae33e62.svg';
  const MYSTERE = MEDIA + '7bb303_fc14c1d1fa984ca5aac30753d24e22cb~mv2.avif';
   
  const DEPART = Date.parse('2026-11-01T12:02:00Z');
  

  const SEUIL_SUIVIS = 20;
  

  const GUILLEMET = 'M40 58a20 20 0 1 1-40 3C0 38 12 14 42 4l5 9C30 21 22 32 22 42c10-2 18 6 18 16Z';
  

  const SILHOUETTE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'%3E%3Cpath fill='%23fff' d='M100 22c-22 0-38 18-38 42 0 17 8 32 20 39-38 7-64 38-68 137h172c-4-99-30-130-68-137 12-7 20-22 20-39 0-24-16-42-38-42Z'/%3E%3C/svg%3E";

  




  const COTES = [
    '20,68 14,68 12.5,66 10,64.3 8,63.2 5.2,62 5,60.5 5.3,59.2 6.8,58.1 8.1,58.1 10.6,57.7 8.1,56.5 8.6,55.4 8.7,54 7,53.6 5,53.3 4.6,52.8 3.6,51.4 2.5,51.1 1.6,50.9 1.4,50.1 0.2,49.6 -1.1,49.3 -1.3,49.7 -1.9,49.7 -1.6,49.2 -1.5,48.7 -2,48.65 -3,48.8 -4.1,48.7 -4.8,48.4 -4.3,48.1 -4.4,47.8 -3.5,47.7 -2.8,47.5 -2.2,47.1 -2.1,46.8 -1.8,46.4 -1.2,45.8 -1.2,45.1 -1.3,44.3 -1.5,43.5 -1.8,43.4 -3.8,43.45 -5.9,43.6 -7.7,43.75 -9.2,43.2 -9.3,42.9 -8.9,42.1 -8.7,41.2 -9,40.3 -9.4,39.4 -9.5,38.7 -8.9,38.5 -8.8,37.9 -9,37 -7.4,37.2 -6.4,36.8 -6.2,36.4 -5.6,36 -4.4,36.7 -2.1,36.7 -0.8,37.6 0.2,38.8 -0.3,39.5 0.9,41 3.2,41.9 3.1,43.1 4.8,43.4 7.5,43.8 8,44 20,44',
    '20,37 10,37.3 8,37 5,36.8 1.2,36.5 -1.3,35.3 -2.2,35.1 -5.3,35.9 -5.9,35.8 -6.3,35 -6.8,34 -7.6,33.6 -8.5,33.2 -9.3,32.4 -9.8,31.4 -9.6,30.4 -10.3,29.2 -11.1,28.3 -12.9,27.9 -13.4,27.3 -14.5,26.2 -15,24.8 -16,23.8 -16.5,22.4 -17.1,21 -16.5,19.5 -16.1,18.1 -16.5,16.5 -17.4,14.7 -16.8,13.5 -16.7,12.5 -15.5,11.3 -14.5,10.3 -13.3,9.4 -12.5,7.6 -11.4,6.9 -10,6 -7.5,4.4 -5,5 -2,4.7 1,6 4.3,6.3 6,4.3 8.5,4.5 9.5,3.5 9.8,2 9.4,0 9,-4 20,-4',
    '-5.7,50.05 -4.2,50.35 -3.4,50.6 -1.9,50.6 -0.8,50.75 1.4,51.15 1.75,52.5 1.3,52.9 0.3,53.4 -0.3,54.1 -1.3,54.9 -1.6,55.6 -2.6,56.3 -1.8,57.5 -3.4,57.7 -3.1,58.6 -5,58.6 -5.4,58 -5.8,57.3 -5.7,56.5 -6.1,55.6 -5.1,55.4 -4.9,54.9 -3.4,54.9 -3.2,54.2 -3,53.6 -3.1,53.25 -4.6,53.3 -4.1,52.8 -4.1,52.2 -5.3,51.8 -3.2,51.4 -4.2,51.2',
    '-6,55.2 -5.5,54.4 -6,53.4 -6.3,52.2 -7,52.1 -8.5,51.6 -10.1,51.6 -10.3,52.2 -9.4,53 -10.1,53.5 -9.9,54.3 -8.3,55.1 -7.3,55.3',
    '-24,65.5 -22.4,64.1 -18.5,63.4 -14.5,64.3 -13.5,65.2 -15,66.4 -18,66.2 -22.4,66.4',
    '-55,68 -53,66.5 -51.5,64 -49.5,62 -48,60.9 -45,60.1 -43.2,60.1 -42.4,61.2 -41,63.2 -39.5,65.2 -37,66 -32,68',
    '-90,68 -67,68 -64.5,60.3 -61.9,57.7 -60.1,55.3 -57.3,53.6 -55.8,52.1 -57.5,51.4 -60,50.2 -64,50.2 -66.4,50.2 -64.2,48.5 -65.3,47.9 -64.8,46.8 -63.6,46.1 -61.4,45.6 -60,46.2 -59.8,45.9 -61.2,45.1 -63.5,44.6 -65.8,43.6 -66.3,44.4 -67.4,44.7 -68.9,44.3 -70.2,43.6 -70.8,42.6 -70,41.8 -71.4,41.4 -73.9,40.6 -74.1,39.7 -74.9,38.9 -75.5,37.9 -76.1,37 -75.5,35.2 -76.6,34.7 -78,33.9 -79.3,33.1 -80.9,32 -81.4,30.7 -80.6,28.4 -80.1,26.7 -80.2,25.5 -81.1,25.1 -81.8,26.1 -82.7,27.5 -82.8,29.6 -84.3,30 -90,30',
    '-55.5,51.6 -53.6,49.4 -52.7,47.6 -53.6,46.7 -55.7,46.9 -56.2,47.6 -59.3,47.6 -58.4,49.2 -57.4,50.7',
    '-84.9,21.9 -82,23.1 -80.3,23.1 -78.4,22.4 -76.2,21.2 -74.2,20.2 -75.5,19.9 -77.6,19.9 -78.9,21.4 -81.2,22.1 -82.5,22.6 -84,22',
    '-74.4,19.8 -72.8,19.9 -71.1,19.9 -69.3,19.2 -68.3,18.6 -69.9,18.4 -71.7,17.8 -73.1,18.1 -74.4,18.4',
    '-67.2,18.5 -65.6,18.4 -65.6,18 -67.2,17.95',
    '-78.3,18.4 -76.2,18.2 -76.3,17.9 -78.2,18.1',
    '-90,-4 -90,8 -79.5,9.2 -77.3,8.6 -75.5,10.4 -74.2,11.2 -72.2,11.8 -71.2,12.3 -70,11.5 -68.4,10.5 -66.9,10.6 -64.3,10.4 -62.3,10.7 -61.6,9.9 -60,8.5 -58.3,6.9 -56,5.9 -54,5.7 -52.3,4.9 -51.1,3.9 -50.2,1.8 -50,0.2 -48.4,-1.2 -44.3,-2.5 -41,-2.9 -38.5,-3.7 -37,-4',
    '-61.9,10.8 -60.9,10.8 -61,10.1 -61.9,10.05',
    '-61.8,16.35 -61.55,16.3 -61.55,15.95 -61.8,15.98',
    '-61.55,16.5 -61.2,16.35 -61.25,16.2 -61.55,16.22'
  ];
  

  const ILES = '-25.7,37.8 -27.2,38.7 -28.3,38.5 -31.1,39.4 -25.1,36.95 -16.9,32.7 -15.5,28.1 -16.6,28.3 -13.9,28.5 -13.6,29 -17.9,27.7 -17.8,28.7 -23.6,15.1 -24.4,16.7 -22.9,16.1 -25.1,17.1 -64.75,32.3 -63.05,18.07 -62.85,17.9 -61.8,17.1 -61.35,15.4 -61,14.65 -60.97,13.9 -61.2,13.25 -59.55,13.15 -61.7,12.1 -60.7,11.2';
  


  const ROUTE_RDR = [[-2.02, 48.65], [-3.4, 49.15], [-5.4, 48.6], [-9.6, 45.4], [-13.6, 40], [-19, 33.5], [-27, 27], [-38, 21.6], [-50, 17.6], [-58.4, 16.3], [-61.1, 15.75], [-61.85, 16.05], [-61.53, 16.24]];

  const esc = (s) => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  





  function idImage(u) {
    const m = String(u || '').match(/^wix:image:\/\/v1\/([^/#]+)/);
    return m ? m[1] : '';
  }
  function dimsImage(u) {
    const v = String(u || '');
    const w = Number((v.match(/originWidth=(\d+)/) || [])[1]);
    const h = Number((v.match(/originHeight=(\d+)/) || [])[1]);
    return w > 0 && h > 0 ? { w, h } : null;
  }
  function urlImage(u, w, h, mode, cadrage) {
    const id = idImage(u);
    if (!id) return /^https:\/\//i.test(String(u || '')) ? String(u) : '';
    const d = dimsImage(u);
    if (mode === 'fit' || !h) {
      const lw = d ? Math.min(w, d.w) : w;
      return MEDIA + id + '/v1/fit/w_' + lw + ',h_' + (h || lw * 3) + ',q_85,enc_auto/' + id;
    }
    return MEDIA + id + '/v1/fill/w_' + w + ',h_' + h + ',al_' + (cadrage || 'c') + ',q_85,enc_auto/' + id;
  }
  


  function srcset(u, largeurs, rapport) {
    const d = dimsImage(u);
    const utiles = largeurs.filter(w => !d || w <= d.w * 1.05);
    if (d && !utiles.length) utiles.push(d.w);
    return utiles.map(w => urlImage(u, w, rapport ? Math.round(w * rapport) : 0, rapport ? 'fill' : 'fit') + ' ' + w + 'w').join(', ');
  }
   
  





  function dessinerCarteFan(o) {
    const L = 1080, H = 1920;
    const accent = /^#[0-9a-f]{6}$/i.test(String(o.accent || '')) ? o.accent : '#5DBFC0';
    const c = document.createElement('canvas');
    c.width = L; c.height = H;
    const ctx = c.getContext('2d');
     
    const espace = (t, x, y, e) => { let cx = x; for (const ch of t) { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + e; } return cx - x - e; };
    const largeur = (t, e) => { let w = 0; for (const ch of t) w += ctx.measureText(ch).width + e; return w - e; };
     
    const espaceAjuste = (t, poids, x, y, max, taille, mini, e) => {
      let z = taille;
      do { ctx.font = poids + ' ' + z + 'px Montserrat'; if (largeur(t, e * z / taille) <= max) break; z -= 1; } while (z > mini);
      return espace(t, x, y, e * z / taille);
    };
    const ajuster = (t, police, max, taille, mini) => {
      let z = taille;
      do { ctx.font = police.replace('{t}', z); if (ctx.measureText(t).width <= max) break; z -= 4; } while (z > mini);
      return z;
    };
    const couvrir = (img, x, y, w, h) => {
      const r = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const iw = img.naturalWidth * r, ih = img.naturalHeight * r;
      ctx.drawImage(img, x + (w - iw) / 2, y, iw, ih);
    };
    const coeur = (x, y, t, couleur) => {
      ctx.save(); ctx.translate(x, y); ctx.scale(t / 24, t / 24); ctx.fillStyle = couleur;
      ctx.beginPath(); ctx.moveTo(12, 21); ctx.bezierCurveTo(12, 21, 4.5, 16.4, 2.5, 11.7); ctx.bezierCurveTo(1, 8, 3.4, 4.5, 7, 4.5);
      ctx.bezierCurveTo(9, 4.5, 10.6, 5.6, 12, 7.5); ctx.bezierCurveTo(13.4, 5.6, 15, 4.5, 17, 4.5); ctx.bezierCurveTo(20.6, 4.5, 23, 8, 21.5, 11.7);
      ctx.bezierCurveTo(19.5, 16.4, 12, 21, 12, 21); ctx.fill(); ctx.restore();
    };
    const rondeur = (x, y, w, h, r) => { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); };

     
    let g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#16355D'); g.addColorStop(0.55, '#141A36'); g.addColorStop(1, '#0E111D');
    ctx.fillStyle = g; ctx.fillRect(0, 0, L, H);
    g = ctx.createRadialGradient(L * 0.85, 260, 0, L * 0.85, 260, 700);
    g.addColorStop(0, 'rgba(230,57,70,.38)'); g.addColorStop(1, 'rgba(230,57,70,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, L, H);
    g = ctx.createRadialGradient(120, 1500, 0, 120, 1500, 760);
    g.addColorStop(0, accent + '66'); g.addColorStop(1, accent + '00');
    ctx.fillStyle = g; ctx.fillRect(0, 0, L, H);

     
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
    coeur(90, 118, 44, '#F2636E');
    ctx.fillStyle = '#F2636E';
    espaceAjuste(o.kicker, '800', 150, 152, L - 240, 32, 20, 7);
    ctx.fillStyle = '#fff';
    const tAnnee = ajuster(o.annee, 'italic 400 {t}px Varien', L - 176, 86, 50);
    ctx.font = 'italic 400 ' + tAnnee + 'px Varien';
    ctx.fillText(o.annee, 88, 262);

     
    const cw = 780, ch = 1040;
    ctx.save(); ctx.translate(L / 2, 900); ctx.rotate(-4 * Math.PI / 180);
    ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 80; ctx.shadowOffsetY = 40;
    rondeur(-cw / 2, -ch / 2, cw, ch, [56, 10, 56, 10]); ctx.fillStyle = accent; ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.save(); rondeur(-cw / 2, -ch / 2, cw, ch, [56, 10, 56, 10]); ctx.clip();
    if (o.portrait) couvrir(o.portrait, -cw / 2, -ch / 2, cw, ch);
    g = ctx.createLinearGradient(0, ch * 0.05, 0, ch / 2);
    g.addColorStop(0, 'rgba(14,17,29,0)'); g.addColorStop(1, 'rgba(14,17,29,.95)');
    ctx.fillStyle = g; ctx.fillRect(-cw / 2, 0, cw, ch / 2);
    ctx.restore();
    rondeur(-cw / 2, -ch / 2, cw, ch, [56, 10, 56, 10]); ctx.lineWidth = 6; ctx.strokeStyle = '#E63946'; ctx.stroke();
    if (o.ecusson && o.ecusson.naturalHeight) {
      const eh = 190, ew = eh * o.ecusson.naturalWidth / o.ecusson.naturalHeight;
      ctx.drawImage(o.ecusson, cw / 2 - ew - 44, -ch / 2 - 18, ew, eh);
    }
     
    ctx.font = '800 28px Montserrat';
    const lr = Math.min(cw - 120, largeur(o.numeroUn, 3) + 110);
    ctx.fillStyle = '#E63946'; rondeur(-cw / 2 + 36, -ch / 2 + 40, lr, 70, [26, 6, 26, 6]); ctx.fill();
    coeur(-cw / 2 + 58, -ch / 2 + 54, 40, '#fff');
    ctx.fillStyle = '#fff';
    espaceAjuste(o.numeroUn, '800', -cw / 2 + 112, -ch / 2 + 85, lr - 96, 28, 18, 3);
     
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    espaceAjuste(o.prenom, '400', -cw / 2 + 50, ch / 2 - 250, cw - 110, 40, 22, 14);
    const tNom = ajuster(o.nom, 'italic 400 {t}px Varien', cw - 100, 150, 70);
    ctx.font = 'italic 400 ' + tNom + 'px Varien';
    ctx.fillStyle = '#fff'; ctx.fillText(o.nom, -cw / 2 + 46, ch / 2 - 250 + tNom * 0.95);
    ctx.fillStyle = accent;
    if (o.bateau) espaceAjuste(o.bateau, '700', -cw / 2 + 50, ch / 2 - 250 + tNom * 0.95 + 62, cw - 110, 30, 18, 4);
    ctx.restore();

     
    ctx.fillStyle = '#fff';
    const tAppel = ajuster(o.appel, 'italic 400 {t}px Varien', L - 176, 96, 56);
    ctx.font = 'italic 400 ' + tAppel + 'px Varien';
    ctx.fillText(o.appel, 88, 1600);
    ctx.fillStyle = '#F7EC4B';
    const tAdresse = ajuster(o.adresse, '800 {t}px Montserrat', L - 180, 34, 18);
    ctx.font = '800 ' + tAdresse + 'px Montserrat';
    ctx.fillText(o.adresse, 90, H - 150);
    ctx.fillStyle = 'rgba(238,242,248,.7)';
    espaceAjuste(o.ligne1, '700', 90, H - 96, L - 180, 26, 16, 4);
    ctx.fillStyle = 'rgba(238,242,248,.5)';
    espaceAjuste(o.ligne2, '600', 90, H - 58, L - 180, 24, 16, 3);
    return c;
  }
  



















  function ouvrirCarteFan(o) {
    const t = o.en
      ? { titre: 'Share their card', partager: 'Share', lien: 'Share the link', enregistrer: 'Save', image: 'Save the image', faite: 'Image saved', copier: 'Copy link', copie: 'Link copied', fermer: 'Close', attente: 'Making the card…', panne: 'Card unavailable', alt: o.nom + ' fan card' }
      : { titre: 'Partager sa carte', partager: 'Partager', lien: 'Partager le lien', enregistrer: 'Enregistrer', image: 'Enregistrer l’image', faite: 'Image enregistrée', copier: 'Copier le lien', copie: 'Lien copié', fermer: 'Fermer', attente: 'Fabrication de la carte…', panne: 'Carte indisponible', alt: 'Carte de fan de ' + o.nom };
    const esc = (v) => String(v == null ? '' : v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const ic = (d, w) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
    const icPartager = ic('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>', 2.2);
    const icTelecharger = ic('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>');
    const F = 'font-family:Montserrat,system-ui,sans-serif;';

    if (!document.getElementById('rdr-cartepop-feuille')) {
      const feuille = document.createElement('style');
      feuille.id = 'rdr-cartepop-feuille';
      feuille.textContent = [
        '.rdr-cartepop{position:fixed;inset:0;z-index:10003;box-sizing:border-box;width:100%;height:100%;max-width:none;max-height:none;margin:0;',
        'padding:max(16px,env(safe-area-inset-top)) 16px max(16px,env(safe-area-inset-bottom));border:0;background:transparent;color:#fff;overflow:hidden;',
        F + '--h:min(560px,calc(100vh - 230px));--w:calc(var(--h) * 9 / 16)}',
        '@supports (height:100dvh){.rdr-cartepop{--h:min(560px,calc(100dvh - 230px))}}',
        '.rdr-cartepop[open]{display:grid;place-items:center}',
        '.rdr-cartepop::backdrop{background:transparent}',
        '.rdr-cartepop *{box-sizing:border-box}',
        '.rdr-cartepop-fond{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(22,53,93,.86),rgba(5,10,24,.94) 70%);',
        '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;transition:opacity .25s ease}',
        '.rdr-cartepop-x{position:absolute;top:max(14px,env(safe-area-inset-top));right:14px;width:44px;height:44px;margin:0;padding:0;border-radius:50%;',
        'display:grid;place-items:center;cursor:pointer;color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.18);',
        'opacity:0;transition:opacity .25s ease,background .15s ease,border-color .15s ease}',
        '.rdr-cartepop-x:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.4)}',
        '.rdr-cartepop-x svg{width:18px;height:18px}',
        '.rdr-cartepop-corps{position:relative;display:flex;flex-direction:column;align-items:center;gap:18px;width:max(var(--w),310px);max-width:100%;',
        'outline:none;opacity:0;transform:translateY(28px) scale(.94);transition:opacity .3s ease,transform .55s cubic-bezier(.2,.9,.25,1.15)}',
        '.rdr-cartepop[data-ouvert] .rdr-cartepop-fond,.rdr-cartepop[data-ouvert] .rdr-cartepop-x,.rdr-cartepop[data-ouvert] .rdr-cartepop-corps{opacity:1}',
        '.rdr-cartepop[data-ouvert] .rdr-cartepop-corps{transform:none}',
        '.rdr-cartepop-titre{margin:0;padding:0;' + F + 'font-size:12px;font-weight:700;line-height:1;letter-spacing:.2em;text-transform:uppercase;color:#5DBFC0}',
        '.rdr-cartepop-scene{position:relative;width:var(--w);height:var(--h);perspective:900px}',
        '.rdr-cartepop-ombre{position:absolute;left:8%;right:8%;top:12%;bottom:-2%;border-radius:30px;background:rgba(0,0,0,.7);filter:blur(26px);will-change:transform}',
        '.rdr-cartepop-carte{position:absolute;inset:0;border-radius:18px;overflow:hidden;background:#151A33;will-change:transform;touch-action:none;cursor:grab;',
        'box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}',
        '.rdr-cartepop-carte.est-prise{cursor:grabbing}',
        '.rdr-cartepop-carte img{display:block;width:100%;height:100%;max-width:none;object-fit:cover;opacity:0;transition:opacity .35s ease;',
        '-webkit-user-drag:none;user-select:none;pointer-events:none}',
        '.rdr-cartepop-carte[data-etat="prete"] img{opacity:1}',
        

        '.rdr-cartepop-reflet,.rdr-cartepop-holo{position:absolute;pointer-events:none;will-change:transform}',
        '.rdr-cartepop-reflet{left:-50%;top:-50%;width:200%;height:200%;',
        'background:radial-gradient(closest-side,rgba(255,255,255,.42),rgba(255,255,255,.12) 45%,rgba(255,255,255,0) 75%);mix-blend-mode:overlay}',
        '.rdr-cartepop-holo{left:-100%;top:0;width:300%;height:100%;mix-blend-mode:soft-light;',
        'background:linear-gradient(105deg,rgba(255,255,255,0) 40%,rgba(252,241,80,.1) 46%,rgba(255,255,255,.22) 50%,rgba(93,191,192,.14) 54%,rgba(255,255,255,0) 60%)}',
        '.rdr-cartepop-attente{position:absolute;inset:0;display:grid;place-items:center;padding:0 16px;text-align:center;' + F,
        'font-size:11px;font-weight:600;line-height:1.4;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55);',
        'background:linear-gradient(110deg,#151A33 30%,#1E2547 50%,#151A33 70%) 0 0/300% 100%;animation:rdr-cartepop-lueur 1.4s linear infinite}',
        '.rdr-cartepop-carte[data-etat="prete"] .rdr-cartepop-attente{display:none}',
        '.rdr-cartepop-carte[data-etat="panne"] .rdr-cartepop-attente{animation:none}',
        '@keyframes rdr-cartepop-lueur{to{background-position:-150% 0}}',
        '.rdr-cartepop-gestes{display:flex;flex-direction:column;gap:10px;width:100%}',
        '.rdr-cartepop-partager{display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;margin:0;padding:0 20px;border:0;',
        'border-radius:3px 15px 3px 15px;cursor:pointer;background:#FCF150;color:#16355D;' + F + 'font-size:13px;font-weight:800;letter-spacing:.08em;',
        'text-transform:uppercase;transition:background .15s ease,transform .15s ease,box-shadow .15s ease}',
        '.rdr-cartepop-partager:hover{background:#FFE500;transform:translateY(-1px);box-shadow:0 6px 18px rgba(252,241,80,.25)}',
        '.rdr-cartepop-partager:disabled{opacity:.5;cursor:default;transform:none;box-shadow:none}',
        '.rdr-cartepop svg{flex:none}',
        '.rdr-cartepop-partager svg,.rdr-cartepop-second svg{width:16px;height:16px}',
        '.rdr-cartepop-seconds{display:flex;flex-wrap:wrap;justify-content:center;gap:4px}',
        '.rdr-cartepop-second{display:inline-flex;align-items:center;gap:7px;max-width:100%;min-height:44px;margin:0;padding:0 10px;border:0;border-radius:10px;',
        'background:transparent;cursor:pointer;white-space:nowrap;' + F + 'font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;',
        'color:#5DBFC0;transition:color .15s ease,background .15s ease}',
        '.rdr-cartepop-second span{overflow:hidden;text-overflow:ellipsis}',
        '.rdr-cartepop-second:hover{color:#fff;background:rgba(255,255,255,.06)}',
        '.rdr-cartepop-second[hidden]{display:none}',
        '.rdr-cartepop :focus-visible{outline:2px solid #5DBFC0;outline-offset:3px}',
        

        '.rdr-cartepop-corps:focus,.rdr-cartepop-corps:focus-visible{outline:none}',
        '@media (prefers-reduced-motion:reduce){.rdr-cartepop-corps{transform:none;transition:opacity .2s ease}.rdr-cartepop-attente{animation:none}}'
      ].join('');
      document.head.appendChild(feuille);
    }

    const d = document.createElement('dialog');
    d.className = 'rdr-cartepop';
    d.setAttribute('aria-labelledby', 'rdr-cartepop-titre');
    d.innerHTML =
      '<div class="rdr-cartepop-fond" data-fermer></div>' +
      '<button class="rdr-cartepop-x" type="button" data-fermer aria-label="' + esc(t.fermer) + '">' + ic('<path d="M6 6l12 12M18 6L6 18"/>') + '</button>' +
      '<div class="rdr-cartepop-corps" tabindex="-1" autofocus>' +
        '<h2 class="rdr-cartepop-titre" id="rdr-cartepop-titre">' + esc(t.titre) + '</h2>' +
        '<div class="rdr-cartepop-scene"><div class="rdr-cartepop-ombre"></div>' +
          '<div class="rdr-cartepop-carte" data-etat="attente"><img alt="' + esc(t.alt) + '">' +
          '<span class="rdr-cartepop-attente">' + esc(t.attente) + '</span>' +
          '<span class="rdr-cartepop-holo"></span><span class="rdr-cartepop-reflet"></span></div>' +
        '</div>' +
        '<div class="rdr-cartepop-gestes" aria-live="polite">' +
          '<button class="rdr-cartepop-partager" type="button" disabled>' + icPartager + '<span>' + esc(t.partager) + '</span></button>' +
          '<div class="rdr-cartepop-seconds">' +
            '<button class="rdr-cartepop-second" type="button" data-geste="enregistrer" hidden>' + icTelecharger + '<span>' + esc(t.enregistrer) + '</span></button>' +
            '<button class="rdr-cartepop-second" type="button" data-geste="copier">' +
              ic('<path d="M10 14a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 5.43"/><path d="M14 10a5 5 0 0 0-7.07 0L4.1 12.83a5 5 0 0 0 7.07 7.07l1.33-1.33"/>') +
              '<span>' + esc(t.copier) + '</span></button>' +
          '</div>' +
        '</div>' +
      '</div>';

    const carte = d.querySelector('.rdr-cartepop-carte');
    const ombre = d.querySelector('.rdr-cartepop-ombre');
    const reflet = d.querySelector('.rdr-cartepop-reflet');
    const holo = d.querySelector('.rdr-cartepop-holo');
    const bPartager = d.querySelector('.rdr-cartepop-partager');
    const bTelecharger = d.querySelector('[data-geste="enregistrer"]');
    const bCopier = d.querySelector('[data-geste="copier"]');
    let fichier = null, objet = '', ferme = false, raf = 0;
    const signaler = (methode) => { if (typeof o.surPartage === 'function') o.surPartage(methode); };

     
    const b = document.body;
    const y = window.scrollY || window.pageYOffset || 0;
    const avant = { position: b.style.position, top: b.style.top, left: b.style.left, right: b.style.right, width: b.style.width, overflow: b.style.overflow };
    let verrou = b.style.position !== 'fixed';
    if (verrou) Object.assign(b.style, { position: 'fixed', top: -y + 'px', left: '0', right: '0', width: '100%', overflow: 'hidden' });
    const deverrouiller = () => {
      if (!verrou) return;
      verrou = false;
      Object.assign(b.style, avant);
      try { window.scrollTo(0, y); } catch (e) {   }
    };

     
    const doux = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const borne = (v) => Math.max(-1, Math.min(1, v));
    let cible = { x: 0, y: 0 }, cour = { x: doux ? 0 : -0.9, y: doux ? 0 : 0.35 }, souris = false, prise = null;
    const t0 = performance.now();
    const image = (maintenant) => {
      if (!souris && !prise) {
        const s = (maintenant - t0) / 1000;
        cible = { x: 0.3 * Math.sin(s * 0.9), y: 0.14 * Math.sin(s * 0.63 + 1) };
      }
      cour.x += (cible.x - cour.x) * 0.09;
      cour.y += (cible.y - cour.y) * 0.09;
      carte.style.transform = 'rotateX(' + (-cour.y * 16).toFixed(2) + 'deg) rotateY(' + (cour.x * 22).toFixed(2) + 'deg)';
      ombre.style.transform = 'translate3d(' + (-cour.x * 22).toFixed(1) + 'px,' + (18 - cour.y * 14).toFixed(1) + 'px,0)';
      reflet.style.transform = 'translate3d(' + (cour.x * 30).toFixed(1) + '%,' + (cour.y * 30).toFixed(1) + '%,0)';
      holo.style.transform = 'translate3d(' + (-cour.x * 22 - cour.y * 6).toFixed(1) + '%,0,0)';
      raf = requestAnimationFrame(image);
    };
    if (!doux) {
      

      d.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
          souris = true;
          const r = carte.getBoundingClientRect();
          cible = { x: borne((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)), y: borne((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)) };
        } else if (prise && e.pointerId === prise.id) {
          cible = { x: borne(prise.x + (e.clientX - prise.cx) / 110), y: borne(prise.y + (e.clientY - prise.cy) / 150) };
        }
      });
      d.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') cible = { x: 0, y: 0 }; });
      carte.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') return;
        prise = { id: e.pointerId, cx: e.clientX, cy: e.clientY, x: cour.x, y: cour.y };
        carte.classList.add('est-prise');
        try { carte.setPointerCapture(e.pointerId); } catch (err) {   }
      });
      const lacher = () => { if (!prise) return; prise = null; souris = false; cible = { x: 0, y: 0 }; carte.classList.remove('est-prise'); };
      carte.addEventListener('pointerup', lacher);
      carte.addEventListener('pointercancel', lacher);
      raf = requestAnimationFrame(image);
    }

     
    const fermer = () => {
      if (ferme) return;
      ferme = true;
      cancelAnimationFrame(raf);
      deverrouiller();
      d.removeAttribute('data-ouvert');
      setTimeout(() => {
        try { if (d.open) d.close(); } catch (e) {   }
        d.remove();
        if (objet) URL.revokeObjectURL(objet);
        try { if (o.declencheur && o.declencheur.isConnected) o.declencheur.focus({ preventScroll: true }); } catch (e) {   }
      }, 260);
    };
    d.querySelectorAll('[data-fermer]').forEach((x) => x.addEventListener('click', fermer));
    d.addEventListener('cancel', (e) => { e.preventDefault(); fermer(); });
    d.addEventListener('close', fermer);

     
    const dire = (bouton, texte) => {
      const s = bouton.querySelector('span');
      if (!s.dataset.texte) s.dataset.texte = s.textContent;
      s.textContent = texte;
      clearTimeout(bouton.minuteur);
      bouton.minuteur = setTimeout(() => { s.textContent = s.dataset.texte; }, 2200);
    };
    const peutFichier = () => { try { return !!fichier && typeof navigator.canShare === 'function' && navigator.canShare({ files: [fichier] }); } catch (e) { return false; } };
    const enregistrer = (bouton) => {
      if (!fichier) return;
      const a = document.createElement('a');
      a.href = objet; a.download = fichier.name; a.style.display = 'none';
      document.body.appendChild(a); a.click(); a.remove();
      dire(bouton, t.faite);
      signaler('telechargement');
    };
    const copier = async (bouton) => {
      try { await navigator.clipboard.writeText(o.url); dire(bouton, t.copie); signaler('copie'); } catch (e) { dire(bouton, o.url); }
    };
    bPartager.addEventListener('click', async () => {
      if (!fichier) {
        try {
          if (typeof navigator.share === 'function') { await navigator.share({ title: o.titre, text: o.texte, url: o.url }); signaler('natif'); return; }
        } catch (e) { if (e && e.name === 'AbortError') return; }
        copier(bPartager);
        return;
      }
      if (peutFichier()) {
        try {
          

          await navigator.share({ files: [fichier], title: o.titre, text: o.texte + ' ' + o.url });
          signaler('image');
          return;
        } catch (e) { if (e && e.name === 'AbortError') return; }
      }
      enregistrer(bPartager);
    });
    bTelecharger.addEventListener('click', () => enregistrer(bTelecharger));
    bCopier.addEventListener('click', () => copier(bCopier));

     
    document.body.appendChild(d);
    try {
      if (typeof d.showModal === 'function') d.showModal();
      else { d.setAttribute('open', ''); d.querySelector('.rdr-cartepop-corps').focus({ preventScroll: true }); }
    } catch (e) { d.setAttribute('open', ''); }
    requestAnimationFrame(() => requestAnimationFrame(() => { if (!ferme) d.setAttribute('data-ouvert', ''); }));

     
    Promise.resolve(o.fichier).catch(() => null).then((f) => {
      if (ferme) return;
      bPartager.disabled = false;
      if (!f) {
        carte.dataset.etat = 'panne';
        d.querySelector('.rdr-cartepop-attente').textContent = t.panne;
        bPartager.querySelector('span').textContent = t.lien;
        return;
      }
      fichier = f;
      objet = URL.createObjectURL(f);
      const img = carte.querySelector('img');
      img.onload = () => { carte.dataset.etat = 'prete'; };
      img.src = objet;
      

      if (peutFichier()) bTelecharger.hidden = false;
      else bPartager.innerHTML = icTelecharger + '<span>' + esc(t.image) + '</span>';
    });

    return fermer;
  }
   

  function urlVecteur(u) {
    const v = String(u || '');
    const m = v.match(/^wix:vector:\/\/v1\/([^/#]+)/);
    if (m) return SHAPES + m[1];
    if (/^https:\/\//i.test(v)) return v;
    const id = idImage(v);
    return id ? MEDIA + id : '';
  }
  function attrsTaille(u, largeur) {
    const d = dimsImage(u);
    if (!d) return '';
    return ' width="' + largeur + '" height="' + Math.round(largeur * d.h / d.w) + '"';
  }
  const couleurSure = (c) => {
    const v = String(c || '').trim().replace(/^#/, '');
    return /^[0-9a-f]{6}$/i.test(v) ? '#' + v : '#5DBFC0';
  };
  const idSur = (v) => String(v || '').replace(/[^\w-]/g, '');
  const lienSur = (u) => (/^https:\/\/[^\s"'<>]+$/i.test(String(u || '')) ? String(u) : '');
  const casse = (s) => String(s || '').toLowerCase().replace(/(^|[\s'’-])([a-zà-ÿ])/g, (m, a, b) => a + b.toUpperCase());

  









  const PAYS = [
    ['France', 'France', 'francaise|francais|france|franco|french'],
    ['Belgique', 'Belgium', 'belge|belgique|belgo|belgian|belgium'],
    ['Suisse', 'Switzerland', 'suisse|helvete|helvetique|helveto|swiss|switzerland'],
    ['Italie', 'Italy', 'italienne|italien|italie|italo|italiana|italiano|italian|italy'],
    ['Allemagne', 'Germany', 'allemande|allemand|allemagne|germano|german|germany'],
    ['Espagne', 'Spain', 'espagnole|espagnol|espagne|hispano|spanish|spain'],
    ['Portugal', 'Portugal', 'portugaise|portugais|portugal|luso|portuguese'],
    ['Royaume-Uni', 'United Kingdom', 'britannique|anglaise|anglais|ecossaise|ecossais|galloise|gallois|royaume-uni|royaume uni|angleterre|anglo|british|english|scottish|welsh|uk|united kingdom'],
    ['Irlande', 'Ireland', 'irlandaise|irlandais|irlande|irish|ireland'],
    ['Pays-Bas', 'Netherlands', 'neerlandaise|neerlandais|hollandaise|hollandais|pays-bas|pays bas|dutch|netherlands'],
    ['Luxembourg', 'Luxembourg', 'luxembourgeoise|luxembourgeois|luxembourg'],
    ['Monaco', 'Monaco', 'monegasque|monaco'],
    ['Autriche', 'Austria', 'autrichienne|autrichien|autriche|austrian|austria'],
    ['Tchéquie', 'Czechia', 'tcheque|tchequie|republique tcheque|czech|czechia'],
    ['Pologne', 'Poland', 'polonaise|polonais|pologne|polish|poland'],
    ['Hongrie', 'Hungary', 'hongroise|hongrois|hongrie|hungarian|hungary'],
    ['Croatie', 'Croatia', 'croate|croatie|croatian|croatia'],
    ['Slovénie', 'Slovenia', 'slovene|slovenie|slovenian|slovenia'],
    ['Grèce', 'Greece', 'grecque|grec|grece|greek|greece'],
    ['Suède', 'Sweden', 'suedoise|suedois|suede|swedish|sweden'],
    ['Norvège', 'Norway', 'norvegienne|norvegien|norvege|norwegian|norway'],
    ['Danemark', 'Denmark', 'danoise|danois|danemark|danish|denmark'],
    ['Finlande', 'Finland', 'finlandaise|finlandais|finlande|finnish|finland'],
    ['Islande', 'Iceland', 'islandaise|islandais|islande|icelandic|iceland'],
    ['Estonie', 'Estonia', 'estonienne|estonien|estonie|estonian|estonia'],
    ['Ukraine', 'Ukraine', 'ukrainienne|ukrainien|ukraine|ukrainian'],
    ['Turquie', 'Turkey', 'turque|turc|turquie|turkish|turkey'],
    ['Israël', 'Israel', 'israelienne|israelien|israel|israeli'],
    ['Maroc', 'Morocco', 'marocaine|marocain|maroc|moroccan|morocco'],
    ['Sénégal', 'Senegal', 'senegalaise|senegalais|senegal|senegalese'],
    ['Afrique du Sud', 'South Africa', 'sud-africaine|sud-africain|afrique du sud|south african|south africa'],
    ['États-Unis', 'United States', 'americaine|americain|etats-unis|etats unis|usa|americano|american|united states'],
    ['Canada', 'Canada', 'canadienne|canadien|canada|canadian'],
    ['Brésil', 'Brazil', 'bresilienne|bresilien|bresil|brazilian|brazil'],
    ['Argentine', 'Argentina', 'argentine|argentin|argentina|argentinian'],
    ['Chili', 'Chile', 'chilienne|chilien|chili|chilean|chile'],
    ['Australie', 'Australia', 'australienne|australien|australie|australian|australia'],
    ['Nouvelle-Zélande', 'New Zealand', 'neo-zelandaise|neo-zelandais|nouvelle-zelande|new zealand|new zealander'],
    ['Japon', 'Japan', 'japonaise|japonais|japon|nippo|japanese|japan'],
    ['Chine', 'China', 'chinoise|chinois|chine|sino|chinese|china'],
    ['Singapour', 'Singapore', 'singapourienne|singapourien|singapour|singaporean|singapore']
  ];
  const PAYS_CLE = new Map();
  PAYS.forEach(p => p[2].split('|').forEach(c => PAYS_CLE.set(c, p)));
  function pays(v, lang) {
    const brut = String(v || '').trim();
    if (!brut) return '';
    const n = brut.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/\s+/g, ' ');
    const entier = PAYS_CLE.get(n);
     
    const trouves = entier ? [entier] : n.split(/\s*(?:[-/,&+]|\bet\b|\band\b)\s*/).filter(Boolean).map(m => PAYS_CLE.get(m));
    if (!trouves.length || !trouves.every(Boolean)) return casse(brut);
    return trouves.filter((p, i) => trouves.indexOf(p) === i).map(p => p[lang === 'en' ? 1 : 0]).join(' / ');
  }

  



   
  const deNom = (p) => (/^[aeiouyhàâäéèêëîïôöùûü]/i.test(String(p || '').trim()) ? 'd’' : 'de ') + p;

  const I18N = {
    fr: {
      locale: 'fr-FR',
      nav: { profil: 'Profil', actus: 'Actus', palmares: 'Palmarès', bateau: 'Bateau', medias: 'Médias', suivre: 'Suivre' },
      navAria: 'Sections de la fiche',
      kProfil: 'Informations', tProfil: 'Profil',
      kPalmares: 'Parcours', tPalmares: 'Palmarès',
      kBateau: 'Le bateau', tBateau: 'Bateau',
      kMedias: 'Médias', tMedias: 'En images',
      kClasse: 'Explorer', tClasse: 'Dans la même classe',
      suivre: 'Suivre', suivi: 'Suivi',
      suivreQui: (p) => 'Suivre ' + p, nePlusSuivre: (p) => 'Ne plus suivre ' + p,
      partager: 'Partager', partagerAria: (n) => 'Partager la fiche de ' + n, lienCopie: 'Lien copié',
      partageTexte: (n, c, b) => n + ', skipper ' + c + (b ? ' sur ' + b : '') + '. Route du Rhum 2026.',
      skipper: (c) => 'Skipper ' + c,
      participations: (n) => n > 1 ? 'participations' : 'participation',
      voile: 'n° de voile', port: 'port d’attache',
      descendre: 'Découvrir le profil',
      enCourse: 'En course', suivreDirect: 'Suivre en direct',
      identite: 'Identité', nationalite: 'Nationalité', age: 'Âge', ans: (n) => n + ' ans',
      classe: 'Classe', numeroVoile: 'Numéro de voile', portAttache: 'Port d’attache',
      rdr: 'Participations', rdrValeur: (n) => String(n),
      biographie: 'Biographie', lireSuite: 'Lire la suite', replier: 'Replier',
      tousSkippers: 'Tous les skippers', voirTousSkippers: 'Voir tous les skippers',
      attente: {
        bio: (n) => 'En attente de la biographie de ' + n,
        palmares: (n) => 'En attente du palmarès de ' + n,
        bateau: (n) => 'En attente des informations du bateau de ' + n,
        medias: (n) => 'En attente des photos de ' + n,
        bateauPhotos: (n) => 'En attente des photos du bateau de ' + n,
        photo: 'Photo en attente'
      },
      attenteTexte: {
        bio: 'Les fiches sont complétées avec les informations que nous transmettent les skippers et leurs équipes. Elle apparaîtra ici dès réception.',
        palmares: 'Les fiches sont complétées avec les informations que nous transmettent les skippers et leurs équipes. Il apparaîtra ici dès réception.',
        bateau: 'Les fiches sont complétées avec les informations que nous transmettent les skippers et leurs équipes. Elles apparaîtront ici dès réception.',
        medias: 'Les fiches sont complétées avec les informations que nous transmettent les skippers et leurs équipes. Elles apparaîtront ici dès réception.',
        bateauPhotos: 'Les fiches sont complétées avec les informations que nous transmettent les skippers et leurs équipes. Elles apparaîtront ici dès réception.'
      },
      enAttente: 'En attente',
      porteBonheur: 'Son porte-bonheur',
      reseaux: 'Sur les réseaux', site: 'Site web',
      reseauAria: (r, n) => r + ' de ' + n + ' (nouvel onglet)',
      victoires: (n) => n > 1 ? 'victoires' : 'victoire', podiums: (n) => n > 1 ? 'podiums' : 'podium',
      courses: (n) => n > 1 ? 'courses' : 'course',
      filtres: { tout: 'Tout', victoires: 'Victoires', podiums: 'Podiums', rdr: 'Route du Rhum' },
      filtresAria: 'Filtrer le palmarès',
      voirPlus: (n) => 'Voir ' + n + ' résultat' + (n > 1 ? 's' : '') + ' de plus', voirMoins: 'Réduire le palmarès',
      aucun: 'Aucun résultat pour ce filtre.',
      fiche: 'Fiche technique', longueur: 'Longueur', largeur: 'Largeur', tirant: 'Tirant d’eau',
      mat: 'Hauteur de mât', poids: 'Poids', construction: 'Mise à l’eau', chantier: 'Chantier', architecte: 'Architecte',
      echelle: 'À l’échelle', echelleNote: (c) => 'La silhouette de la classe ' + c + ', face à celle d’un marin.',
      ecusson: (c) => 'Classe ' + c,
      photoBateau: (b) => 'Le bateau ' + b, photoAerienne: (b) => b + ' vu du ciel', portrait: (n) => 'Portrait de ' + n,
      photosBateau: 'Photos du bateau',
      photoAction: (n) => n + ' en mer',
      chargement: 'Chargement de la fiche',
      kActus: (p) => 'Les actus ' + deNom(p), tActus: 'Actualités', actusTout: (p) => 'Toutes les actus ' + deNom(p), actusLire: 'Lire l’article', actusNouveau: 'Nouveau', actusDuree: (m) => m + ' min',
      prefChoisir: (p) => 'Choisir ' + p, prefPartagerCourt: 'Partager', prefClassementCourt: 'Classement', prefRetirerCourt: 'Retirer',
      prefConfirmer: 'Confirmer', prefConfirmerAide: 'Touche encore pour retirer ce choix.', prefActionsAria: 'Actions du skipper préféré',
      prefRetire: (p) => p + ' n’est plus ton skipper préféré.', annuler: 'Annuler',
      decompte: (j) => j > 1 ? ['J-' + j, 'avant le départ'] : j === 1 ? ['J-1', 'départ demain'] : ['Jour J', 'départ aujourd’hui'],
      suivisPar: (n) => n + ' membres suivent déjà ce skipper',
      meilleureRdr: 'meilleure Route du Rhum',
      epreuve: { 'course côtière': 'Course côtière', 'course océanique': 'Course océanique', 'course au large': 'Course au large' },
      niveau: { international: 'Internationale', national: 'Nationale' },
      victoire: 'Victoire', podium: 'Podium',
      jourCourse: (j) => ['J' + j, 'en course'], jourCourseAria: (j, p) => 'En course, jour ' + j + ', ' + p + ' % de la route parcourue',
      classement: 'Classement', surN: (n, c) => 'sur ' + n + (c ? ' en ' + c : ''),
      distanceArrivee: 'À l’arrivée', vitesse: 'Vitesse', ecartLeader: 'Écart au leader', cap: 'Cap',
      enTete: 'En tête', milles: 'milles', noeuds: 'nœuds',
      evolution: (d) => d > 0 ? '+' + d + (d > 1 ? ' places' : ' place') + ' en 24 h' : d < 0 ? '−' + (-d) + (d < -1 ? ' places' : ' place') + ' en 24 h' : 'Stable sur 24 h',
      positionIlYa: (m) => 'Position d’il y a ' + m + ' min',
      cartoLive: 'Cartographie live',
      liveAttente: 'Les positions arrivent dès le départ, le 1er novembre.',
      demo: 'Données fictives',
      saintMalo: 'Saint-Malo', pointeAPitre: 'Pointe-à-Pitre',
      parcours: 'Parcours', parcoursAria: (p, t) => p + ' % du parcours, le leader à ' + t + ' %',
      arriveeEstimee: 'Arrivée estimée', tempsCourse: (j, h) => j + ' j ' + h + ' h de course',
      statsAvancees: 'Stats avancées', vmg: 'VMG', vitesseMoy: 'Vitesse moy. 24 h', distance24: 'Distance 24 h',
      vent: 'Vent', position: 'Position', ecartSuivant: 'Écart au suivant', ecartPrecedent: 'Écart au précédent',
      ouvrirCarte: 'Ouvrir la carte live', leader: 'Leader', flotte: (c) => 'Flotte ' + c, oceanAtlantique: 'OCÉAN ATLANTIQUE',
      carteAria: (n, r, p) => 'Carte de la course : ' + n + ', ' + r + ', à ' + p + ' % de la route entre Saint-Malo et Pointe-à-Pitre',
      



      jeSuisFan: (p) => 'Suivre ' + p, tuEsFan: (p) => 'Tu suis ' + p,
      ouvertureInscription: 'Ouverture de l’inscription…', patience: 'Un instant…',
      prefKicker: 'Skipper préféré', prefNumeroUn: 'N° 1 pour toi',
      prefTitre: (p) => p + ', ton skipper préféré ?', prefTitreOui: (p) => p + ' est ton skipper préféré',
      prefTexte: 'Suis autant de skippers que tu veux, mais tu n’en as qu’un seul préféré. Ton choix compte au classement du public.',
      prefTexteOui: (p) => 'Partage sa carte et fais grimper ' + p + ' au classement du public.',
      prefBouton: 'C’est mon skipper préféré', prefPartager: 'Partager sa carte', prefRetirer: 'Retirer ce choix',
      prefDiscret: 'Ton skipper préféré :', prefRemplacer: (p) => 'Choisir ' + p + ' à la place', prefTitreInfo: (p) => p + ' au classement du public', prefZero: 'Pas encore de fan dans son sillage', prefZeroChoisi: 'Ton choix entre au classement cette nuit', prefClassement: 'Voir le classement', prefInscription: 'Il te faut un Espace Rhum. Il se crée en une minute, et ton choix est gardé.',
      prefFans: (n) => n > 1 ? 'fans dans son sillage' : 'fan dans son sillage', prefRang: 'au classement du public',
      prefCalcule: (d) => 'Classement du ' + d + ', recalculé chaque nuit',
      prefConfirme: (p) => 'C’est fait : ' + p + ' est ton skipper préféré.',
      prefRemplace: (n, a) => n + ' remplace ' + a + ' comme ton skipper préféré.',
      partageCarte: (n) => n + ' est mon skipper préféré pour la Route du Rhum 2026. Découvre sa fiche et rejoins ses fans.',
      carteKicker: 'MON SKIPPER PRÉFÉRÉ', carteAnnee: 'ROUTE DU RHUM 2026', carteNumeroUn: 'N° 1 POUR MOI', carteAppel: 'REJOINS SES FANS',
      carteLigne1: 'ROUTE DU RHUM · DESTINATION GUADELOUPE', carteLigne2: 'DÉPART LE 1ER NOVEMBRE 2026 · SAINT-MALO',
      pronoKicker: 'Pronostics', pronoTitre: (p) => 'Et si ' + p + ' gagnait ?', pronoTitreOui: (p) => 'Ton pronostic : ' + p + ' vainqueur',
      pronoTexte: (c) => 'Pronostique le vainqueur' + (c ? ' en ' + c : '') + ' et son temps de course. Les pronostics ferment au départ.',
      pronoFerme: (j) => j > 1 ? 'Fermeture dans ' + j + ' jours' : j === 1 ? 'Fermeture demain' : 'Fermeture aujourd’hui',
      pronoParticipants: (n) => n + (n > 1 ? ' pronostics déposés' : ' pronostic déposé'),
      pronoBouton: (p) => 'Pronostiquer ' + p + ' vainqueur', pronoModifier: 'Modifier mon pronostic',
      fanConfirme: (p) => 'C’est fait : tu suis ' + p + ' dans ton Espace Rhum.'
    },
    en: {
      locale: 'en-GB',
      nav: { profil: 'Profile', actus: 'News', palmares: 'Record', bateau: 'Boat', medias: 'Media', suivre: 'Follow' },
      navAria: 'Profile sections',
      kProfil: 'About', tProfil: 'Profile',
      kPalmares: 'Career', tPalmares: 'Record',
      kBateau: 'The boat', tBateau: 'Boat',
      kMedias: 'Media', tMedias: 'In pictures',
      kClasse: 'Explore', tClasse: 'In the same class',
      suivre: 'Follow', suivi: 'Following',
      suivreQui: (p) => 'Follow ' + p, nePlusSuivre: (p) => 'Unfollow ' + p,
      partager: 'Share', partagerAria: (n) => 'Share ' + n + '’s profile', lienCopie: 'Link copied',
      partageTexte: (n, c, b) => n + ', ' + c + ' skipper' + (b ? ' on ' + b : '') + '. Route du Rhum 2026.',
      skipper: (c) => c + ' skipper',
      participations: (n) => n > 1 ? 'starts' : 'start',
      voile: 'sail number', port: 'home port',
      descendre: 'Discover the profile',
      enCourse: 'Racing', suivreDirect: 'Follow live',
      identite: 'Identity', nationalite: 'Nationality', age: 'Age', ans: (n) => n + ' years old',
      classe: 'Class', numeroVoile: 'Sail number', portAttache: 'Home port',
      rdr: 'Route du Rhum starts', rdrValeur: (n) => String(n),
      biographie: 'Biography', lireSuite: 'Read more', replier: 'Show less',
      tousSkippers: 'All skippers', voirTousSkippers: 'See all skippers',
      attente: {
        bio: (n) => 'Waiting for ' + n + '’s biography',
        palmares: (n) => 'Waiting for ' + n + '’s race record',
        bateau: (n) => 'Waiting for details of ' + n + '’s boat',
        medias: (n) => 'Waiting for ' + n + '’s photos',
        bateauPhotos: (n) => 'Waiting for photos of ' + n + '’s boat',
        photo: 'Photo coming soon'
      },
      attenteTexte: {
        bio: 'Skipper profiles are completed with the information sent to us by the skippers and their teams. It will appear here as soon as we receive it.',
        palmares: 'Skipper profiles are completed with the information sent to us by the skippers and their teams. It will appear here as soon as we receive it.',
        bateau: 'Skipper profiles are completed with the information sent to us by the skippers and their teams. It will appear here as soon as we receive it.',
        medias: 'Skipper profiles are completed with the information sent to us by the skippers and their teams. They will appear here as soon as we receive them.',
        bateauPhotos: 'Skipper profiles are completed with the information sent to us by the skippers and their teams. They will appear here as soon as we receive them.'
      },
      enAttente: 'Pending',
      porteBonheur: 'Lucky charm',
      reseaux: 'On social media', site: 'Website',
      reseauAria: (r, n) => n + ' on ' + r + ' (new tab)',
      victoires: (n) => n > 1 ? 'wins' : 'win', podiums: (n) => n > 1 ? 'podiums' : 'podium',
      courses: (n) => n > 1 ? 'races' : 'race',
      filtres: { tout: 'All', victoires: 'Wins', podiums: 'Podiums', rdr: 'Route du Rhum' },
      filtresAria: 'Filter the record',
      voirPlus: (n) => 'Show ' + n + ' more result' + (n > 1 ? 's' : ''), voirMoins: 'Show less',
      aucun: 'No result for this filter.',
      fiche: 'Specifications', longueur: 'Length', largeur: 'Beam', tirant: 'Draught',
      mat: 'Mast height', poids: 'Weight', construction: 'Launched', chantier: 'Shipyard', architecte: 'Designer',
      echelle: 'To scale', echelleNote: (c) => 'The ' + c + ' class silhouette, next to a sailor.',
      ecusson: (c) => c + ' class',
      photoBateau: (b) => 'The boat ' + b, photoAerienne: (b) => b + ' from above', portrait: (n) => 'Portrait of ' + n,
      photosBateau: 'Boat photos',
      photoAction: (n) => n + ' at sea',
      chargement: 'Loading the profile',
      kActus: (p) => p + ' in the news', tActus: 'News', actusTout: (p) => 'All the news about ' + p, actusLire: 'Read the article', actusNouveau: 'New', actusDuree: (m) => m + ' min read',
      prefChoisir: (p) => 'Pick ' + p, prefPartagerCourt: 'Share', prefClassementCourt: 'Ranking', prefRetirerCourt: 'Remove',
      prefConfirmer: 'Confirm', prefConfirmerAide: 'Tap again to remove your pick.', prefActionsAria: 'Favourite skipper actions',
      prefRetire: (p) => p + ' is no longer your favourite skipper.', annuler: 'Undo',
      decompte: (j) => j > 1 ? [j + ' days', 'to the start'] : j === 1 ? ['1 day', 'to the start'] : ['Race day', 'start today'],
      suivisPar: (n) => n + ' members already follow this skipper',
      meilleureRdr: 'best Route du Rhum',
      epreuve: { 'course côtière': 'Coastal race', 'course océanique': 'Ocean race', 'course au large': 'Offshore race' },
      niveau: { international: 'International', national: 'National' },
      victoire: 'Win', podium: 'Podium',
      jourCourse: (j) => ['Day ' + j, 'racing'], jourCourseAria: (j, p) => 'Racing, day ' + j + ', ' + p + ' % of the route sailed',
      classement: 'Ranking', surN: (n, c) => 'of ' + n + (c ? ' in ' + c : ''),
      distanceArrivee: 'To the finish', vitesse: 'Speed', ecartLeader: 'Gap to leader', cap: 'Heading',
      enTete: 'Leading', milles: 'nm', noeuds: 'kn',
      evolution: (d) => d > 0 ? '+' + d + (d > 1 ? ' places' : ' place') + ' in 24 h' : d < 0 ? '−' + (-d) + (d < -1 ? ' places' : ' place') + ' in 24 h' : 'Steady over 24 h',
      positionIlYa: (m) => 'Position from ' + m + ' min ago',
      cartoLive: 'Live tracking',
      liveAttente: 'Positions go live at the start, on 1 November.',
      demo: 'Demo data',
      saintMalo: 'Saint-Malo', pointeAPitre: 'Pointe-à-Pitre',
      parcours: 'Progress', parcoursAria: (p, t) => p + ' % of the course, leader at ' + t + ' %',
      arriveeEstimee: 'Estimated arrival', tempsCourse: (j, h) => j + ' d ' + h + ' h racing',
      statsAvancees: 'Advanced stats', vmg: 'VMG', vitesseMoy: 'Avg speed 24 h', distance24: 'Distance 24 h',
      vent: 'Wind', position: 'Position', ecartSuivant: 'Gap to next boat', ecartPrecedent: 'Gap to boat ahead',
      ouvrirCarte: 'Open live map', leader: 'Leader', flotte: (c) => c + ' fleet', oceanAtlantique: 'ATLANTIC OCEAN',
      carteAria: (n, r, p) => 'Race map: ' + n + ', ' + r + ', ' + p + ' % of the route from Saint-Malo to Pointe-à-Pitre',
      jeSuisFan: (p) => 'Follow ' + p, tuEsFan: (p) => 'You follow ' + p,
      ouvertureInscription: 'Opening sign-up…', patience: 'One moment…',
      prefKicker: 'Favourite skipper', prefNumeroUn: 'Your no. 1',
      prefTitre: (p) => p + ', your favourite skipper?', prefTitreOui: (p) => p + ' is your favourite skipper',
      prefTexte: 'Follow as many skippers as you like, but you only get one favourite. Your pick counts in the public ranking.',
      prefTexteOui: (p) => 'Share their card and help ' + p + ' climb the public ranking.',
      prefBouton: 'My favourite skipper', prefPartager: 'Share their card', prefRetirer: 'Remove my pick',
      prefDiscret: 'Your favourite skipper:', prefRemplacer: (p) => 'Pick ' + p + ' instead', prefTitreInfo: (p) => p + ' in the public ranking', prefZero: 'No fans in their wake yet', prefZeroChoisi: 'Your pick joins the ranking tonight', prefClassement: 'See the ranking', prefInscription: 'You need an Espace Rhum. It takes a minute, and your pick is kept.',
      prefFans: (n) => n > 1 ? 'fans in their wake' : 'fan in their wake', prefRang: 'in the public ranking',
      prefCalcule: (d) => 'Ranking as of ' + d + ', updated nightly',
      prefConfirme: (p) => 'Done: ' + p + ' is your favourite skipper.',
      prefRemplace: (n, a) => n + ' replaces ' + a + ' as your favourite skipper.',
      partageCarte: (n) => n + ' is my favourite skipper for the Route du Rhum 2026. Check out their profile and join their fans.',
      carteKicker: 'MY FAVOURITE SKIPPER', carteAnnee: 'ROUTE DU RHUM 2026', carteNumeroUn: 'MY NO. 1', carteAppel: 'JOIN THEIR FANS',
      carteLigne1: 'ROUTE DU RHUM · DESTINATION GUADELOUPE', carteLigne2: 'START ON 1 NOVEMBER 2026 · SAINT-MALO',
      pronoKicker: 'Predictions', pronoTitre: (p) => 'What if ' + p + ' won?', pronoTitreOui: (p) => 'Your prediction: ' + p + ' wins',
      pronoTexte: (c) => 'Predict the winner' + (c ? ' in ' + c : '') + ' and their race time. Predictions close at the start.',
      pronoFerme: (j) => j > 1 ? 'Closes in ' + j + ' days' : j === 1 ? 'Closes tomorrow' : 'Closes today',
      pronoParticipants: (n) => n + (n > 1 ? ' predictions made' : ' prediction made'),
      pronoBouton: (p) => 'Predict ' + p + ' wins', pronoModifier: 'Change my prediction',
      fanConfirme: (p) => 'Done: you now follow ' + p + ' in your Espace Rhum.'
    }
  };

  function ordinal(n, lang) {
    if (!n) return '';
    if (lang === 'en') {
      const s = ['th', 'st', 'nd', 'rd'], v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }
    return n === 1 ? '1er' : n + 'e';
  }
  

  const ROSE = {
    fr: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'],
    en: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  };
  function rose(deg, lang) {
    const i = Math.round((((Number(deg) || 0) % 360) + 360) % 360 / 22.5) % 16;
    return ROSE[lang === 'en' ? 'en' : 'fr'][i];
  }
  function dms(v, axe, lang) {
    const n = Number(v) || 0, a = Math.abs(n);
    const deg = Math.floor(a), min = Math.round((a - deg) * 60);
    const lettre = axe === 'lat' ? (n >= 0 ? 'N' : 'S') : (n >= 0 ? 'E' : (lang === 'en' ? 'W' : 'O'));
    return deg + '°' + String(min).padStart(2, '0') + '′ ' + lettre;
  }
  



  let geoCache = null;
  function geoRoute() {
    if (geoCache) return geoCache;
    const LON0 = -70, LAT0 = 68, K = 12.09, COS = 0.848;
    const px = (lon, lat) => [(lon - LON0) * COS * K, (LAT0 - lat) * K];
    const f = (p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1);
    const pts = ROUTE_RDR.map(([lon, lat]) => px(lon, lat));
    let d = 'M' + f(pts[0]);
    const ech = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += 'C' + f(c1) + ' ' + f(c2) + ' ' + f(p2);
      for (let k = 1; k <= 16; k++) {
        const t = k / 16, u = 1 - t;
        ech.push([0, 1].map(j => u * u * u * p1[j] + 3 * u * u * t * c1[j] + 3 * u * t * t * c2[j] + t * t * t * p2[j]));
      }
    }
    const cumul = [0];
    for (let i = 1; i < ech.length; i++) cumul.push(cumul[i - 1] + Math.hypot(ech[i][0] - ech[i - 1][0], ech[i][1] - ech[i - 1][1]));
    const total = cumul[cumul.length - 1] || 1;
    const surRoute = (t) => {
      const cible = Math.max(0, Math.min(1, t)) * total;
      let i = 1;
      while (i < cumul.length - 1 && cumul[i] < cible) i++;
      const r = (cible - cumul[i - 1]) / ((cumul[i] - cumul[i - 1]) || 1);
      const a = ech[i - 1], b = ech[i];
      return { p: [a[0] + (b[0] - a[0]) * r, a[1] + (b[1] - a[1]) * r], i, dx: b[0] - a[0], dy: b[1] - a[1] };
    };
    const inverse = (p) => ({ lon: p[0] / (COS * K) + LON0, lat: LAT0 - p[1] / K });
    geoCache = { px, f, d, ech, surRoute, inverse };
    return geoCache;
  }

   
  const ESPACE_RHUM_SKIPPERS = '/mon-espace-rhum?go=skippers';
  


  const ESPACE_RHUM_PRONOSTICS = '/mon-espace-rhum?go=pronostics';

   
  function ordinalHtml(n, lang) {
    const o = ordinal(n, lang);
    const m = o.match(/^(\d+)(.*)$/);
    return m ? esc(m[1]) + (m[2] ? '<sup>' + esc(m[2]) + '</sup>' : '') : esc(o);
  }
  function nombre(v, T) {
    return new Intl.NumberFormat(T.locale, { maximumFractionDigits: 2 }).format(v);
  }
  function poids(v, T) {
    if (!v) return '';
    return v < 100 ? nombre(v, T) + ' t' : nombre(v, T) + ' kg';
  }

   
  const IC = {
    profil: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.6-3.8 3.6-5.8 7.5-5.8s6.9 2 7.5 5.8"/>',
    palmares: '<path d="M8 21h8M12 16.5V21M7 3.5h10v5.2a5 5 0 0 1-10 0V3.5Z"/><path d="M17 5h3v1.5a4 4 0 0 1-3.6 4M7 5H4v1.5a4 4 0 0 0 3.6 4"/>',
    bateau: '<path d="M12 3v13.5M12 4.5 5.5 15.5H12M13.2 7.5 18.5 15.5h-5.3M3 19.2c1.5 1.1 3 1.1 4.5 0 1.5 1.1 3 1.1 4.5 0 1.5 1.1 3 1.1 4.5 0 1.5 1.1 3 1.1 4.5 0"/>',
    medias: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="m21 15.5-4.6-4.6L7.5 19"/>',
    suivre: '<path d="M21.5 2.5 10.8 13.2M21.5 2.5 14.8 21.5l-4-8.3-8.3-4 19-6.7Z"/>',
    partager: '<circle cx="18" cy="5" r="2.8"/><circle cx="6" cy="12" r="2.8"/><circle cx="18" cy="19" r="2.8"/><path d="m8.5 13.4 7 4.2M15.5 6.4l-7 4.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    coeur: '<path d="M12 20.2s-7.6-4.6-7.6-10.3A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.6 2.5c0 5.7-7.6 10.3-7.6 10.3Z"/>',
    sortie: '<path d="M14 5h5v5M19 5l-8.5 8.5M17 13.5V19H5V7h5.5"/>',
    fleche: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    coche: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    bas: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    etoile: '<path d="M12 3.2 14.6 8.6l5.9.7-4.4 4 1.2 5.9L12 16.3 6.7 19.2l1.2-5.9-4.4-4 5.9-.7Z"/>',
    

    trefle: [45, 135, 225, 315].map(a => '<path transform="rotate(' + a + ' 12 10.2) translate(0 -.7)" d="M12 10.2C10.3 9.3 8.8 7.6 9.1 5.8 9.4 4.4 11.1 4.1 12 5.2 12.9 4.1 14.6 4.4 14.9 5.8 15.2 7.6 13.7 9.3 12 10.2Z"/>').join('') + '<path d="M12 11.6c.5 3.6 1.7 6.6 3.9 9.4"/>',
    ancre: '<circle cx="12" cy="5" r="2"/><path d="M12 7v14M4.8 13a7.2 7.2 0 0 0 14.4 0M8.5 10.5h7"/>',
    calendrier: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    depart: '<path d="M5 21V4M5 4.5c4-2 7 2 11 0v8.5c-4 2-7-2-11 0"/>',
    vitesse: '<path d="M4.2 17a8.5 8.5 0 1 1 15.6 0"/><path d="m12 13 4.5-4.5"/><circle cx="12" cy="13" r="1.4"/>',
    arrivee: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    boussole: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    ecart: '<path d="M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4"/>',
    direct: '<circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".9" fill="currentColor" stroke="none"/>',
    facebook: '<path d="M14.5 21v-7.5h2.6l.5-3.2h-3.1V8.4c0-.9.4-1.6 1.7-1.6h1.5V4a17 17 0 0 0-2.4-.2c-2.5 0-4 1.5-4 4.2v2.3H8.5v3.2h2.8V21"/>',
    x: '<path d="M4 4h4.4L20 20h-4.4L4 4Z"/><path d="M19.6 4 13 11.3M11 12.7 4.4 20"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.8 10.2V17M7.8 7.2v.1M11.6 17v-6.8M11.6 13.2c0-1.8 1-3 2.6-3s2.3 1.1 2.3 3V17"/>',
    actus: '<path d="M4 5.5h12.5v13a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2v-13Z"/><path d="M16.5 9H20v9.5a2 2 0 0 1-2 2M7.5 9h5.5M7.5 12.5h5.5M7.5 16h3.5"/>',
    croix: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    lecture: '<path d="M8 5.5v13l11-6.5z"/>',
    photo: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M9 7l1.2-2.4h3.6L15 7"/>',
    micro: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    casque: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    horloge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    site: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9M12 3C9.4 5.6 8.2 8.6 8.2 12s1.2 6.4 3.8 9"/>'
  };
  




  const CATEGORIES_ACTUS = {
    actualites: ['#0B6E6B', '#DCF2EF', '#0E9AAA', 'actus'],
    video: ['#A14D00', '#FBEAD6', '#C17B2A', 'lecture'],
    image: ['#5747C9', '#E9E6FB', '#7C6CE6', 'photo'],
    audio: ['#0E5B84', '#DCEBF7', '#3A8FC7', 'casque'],
    interview: ['#8A6C00', '#FBF3CD', '#D4A514', 'micro']
  };
  function categorieActu(libelle) {
    const n = String(libelle || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return CATEGORIES_ACTUS[/vid/.test(n) ? 'video' : /image|photo/.test(n) ? 'image' : /audio|podcast/.test(n) ? 'audio' : /interview/.test(n) ? 'interview' : 'actualites'];
  }
  const svg = (k, cls) => IC[k]
    ? '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + IC[k] + '</svg>'
    : '';

  





  const CSS = `
rdr-skipper{display:block;width:100%;}






rdr-skipper:not([data-pret]){min-height:max(100vh,600px);min-height:max(100svh,600px);background:#191D31;}
rdr-skipper .sk{
  --sk-abysse:#0E111D;--sk-nuit:#191D31;--sk-marine:#16355D;--sk-violet:#4F5BA5;--sk-bleu:#56BCF6;
  --sk-jaune:#FCF150;--sk-teal:#5DBFC0;--sk-encre:#EEF2F8;--sk-encre-2:rgba(238,242,248,.86);--sk-encre-3:rgba(238,242,248,.68);
  --sk-carte:#FFFFFF;--sk-carte-encre:#191D31;--sk-carte-label:#56617A;--sk-carte-filet:#E4E8F0;
  --sk-or:#FCF150;--sk-argent:#A8C8E8;--sk-bronze:#D18B55;
  --sk-accent:#5DBFC0;
  --t1:11px;--t2:13px;--t3:16px;--t4:19px;--t5:clamp(22px,2.4vw,30px);--t6:clamp(44px,6.4vw,92px);--t7:clamp(64px,10.5vw,168px);
  --e1:4px;--e2:8px;--e3:12px;--e4:16px;--e5:24px;--e6:32px;--e7:48px;--e8:64px;--e9:clamp(56px,7vw,104px);
  --r-bloc:44px 4px 44px 4px;--r-carte:26px 3px 26px 3px;--r-btn:14px 2px 14px 2px;
  --sk-nav-h:76px;
  --ombre:0 22px 48px -26px rgba(0,0,0,.75);
  position:relative;display:block;background:var(--sk-abysse);color:var(--sk-encre);
  font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:var(--t3);line-height:1.6;
  -webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;
}
rdr-skipper .sk,rdr-skipper .sk *,rdr-skipper .sk *::before,rdr-skipper .sk *::after{box-sizing:border-box;}




rdr-skipper .sk :is(h1,h2,h3,p,ul,ol,dl,dd,dt,figure,blockquote):not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){margin:0;padding:0;}
rdr-skipper .sk :is(ul,ol):not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){list-style:none;}
rdr-skipper .sk :is(h1,h2,h3):not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){font:inherit;}
rdr-skipper .sk a:not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){color:inherit;text-decoration:none;}
rdr-skipper .sk button:not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){appearance:none;-webkit-appearance:none;background:none;border:0;margin:0;padding:0;font:inherit;color:inherit;cursor:pointer;text-align:inherit;letter-spacing:inherit;}
rdr-skipper .sk img:not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){display:block;max-width:100%;}
rdr-skipper .sk svg:not(:is(skipper-outro,skipper-gallery,skippers-carousel) *){display:block;flex:none;}
rdr-skipper .sk [hidden]{display:none!important;}
rdr-skipper .sk :focus-visible{outline:2px solid var(--sk-teal);outline-offset:3px;}

rdr-skipper .sk .sk-cadre{width:100%;max-width:1280px;margin:0 auto;padding:0 clamp(20px,5vw,72px);}
rdr-skipper .sk .sk-kicker{display:flex;align-items:center;gap:var(--e3);font-size:var(--t2);font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-kicker::before{content:"";width:28px;height:2px;border-radius:2px;background:var(--sk-accent);flex:none;}

 
rdr-skipper .sk .sk-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 var(--e5);
  border-radius:var(--r-btn);font-size:var(--t2);font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1.1;
  transition:background-color .2s ease,color .2s ease,border-color .2s ease,transform .2s ease;}
rdr-skipper .sk .sk-btn svg{width:18px;height:18px;}
rdr-skipper .sk .sk-btn--suivre{background:var(--sk-jaune);color:#0B1B33;}
rdr-skipper .sk .sk-btn--suivre:hover{transform:translateY(-1px);}
rdr-skipper .sk .sk-btn--suivre[aria-pressed="true"]{background:var(--sk-teal);color:#06283B;}
rdr-skipper .sk .sk-btn--ligne{border:1.5px solid rgba(238,242,248,.55);color:var(--sk-encre);background:rgba(14,17,29,.28);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}
rdr-skipper .sk .sk-btn--ligne:hover{border-color:var(--sk-encre);background:rgba(14,17,29,.5);}

 
rdr-skipper .sk .sk-hero{position:relative;isolation:isolate;display:flex;align-items:flex-end;min-height:clamp(600px,88svh,880px);
  background:var(--sk-nuit);overflow:clip;}
rdr-skipper .sk .sk-hero-fond{position:absolute;inset:0;z-index:-3;overflow:clip;}
rdr-skipper .sk .sk-hero-img{width:100%;height:100%;object-fit:cover;object-position:50% 45%;transform-origin:60% 50%;
  animation:sk-kenburns 18s ease-in-out infinite alternate;will-change:transform;}
rdr-skipper .sk.sk--hero-cache .sk-hero-img{animation-play-state:paused;}
@keyframes sk-kenburns{from{transform:scale(1.02) translate3d(0,0,0);}to{transform:scale(1.12) translate3d(-1.6%,-1.2%,0);}}
rdr-skipper .sk .sk-hero-motif{position:absolute;z-index:-2;right:-6%;top:-10%;width:74%;height:120%;object-fit:cover;object-position:0% 50%;
  opacity:.2;pointer-events:none;-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 30%);mask-image:linear-gradient(90deg,transparent 0%,#000 30%);}


rdr-skipper .sk .sk-hero-voile{position:absolute;inset:0;z-index:-1;pointer-events:none;
  background:linear-gradient(18deg,rgba(14,17,29,.94) 0%,rgba(14,17,29,.7) 30%,rgba(14,17,29,.12) 58%,rgba(14,17,29,0) 72%),
             linear-gradient(0deg,rgba(14,17,29,.85) 0%,rgba(14,17,29,0) 36%);}
rdr-skipper .sk .sk-hero--portrait .sk-hero-fond{background:radial-gradient(120% 90% at 78% 100%,color-mix(in srgb,var(--sk-accent) 34%,transparent) 0%,transparent 60%),linear-gradient(160deg,#1E2550 0%,var(--sk-nuit) 60%);}
rdr-skipper .sk .sk-hero--portrait .sk-hero-img{position:absolute;right:0;top:0;width:min(62%,820px);height:100%;object-fit:cover;object-position:50% 16%;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,rgba(0,0,0,.55) 22%,#000 46%);mask-image:linear-gradient(90deg,transparent 0%,rgba(0,0,0,.55) 22%,#000 46%);}
rdr-skipper .sk .sk-retour{position:absolute;z-index:7;top:var(--e5);left:calc(max(0px, (100% - 1280px) / 2) + clamp(20px, 5vw, 72px));display:inline-flex;align-items:center;gap:8px;min-height:36px;padding:0 14px 0 10px;border-radius:12px 3px 12px 3px;
  background:rgba(14,17,29,.45);box-shadow:inset 0 0 0 1px rgba(255,255,255,.16);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:rgba(238,242,248,.82);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;transition:color .2s ease,background-color .2s ease;}
rdr-skipper .sk .sk-retour svg{width:14px;height:14px;transform:scaleX(-1);transition:transform .25s cubic-bezier(.22,1,.36,1);}
rdr-skipper .sk .sk-retour:hover{color:#fff;background-color:rgba(14,17,29,.7);}
rdr-skipper .sk .sk-retour--attente{opacity:.6;cursor:progress;}
rdr-skipper .sk .sk-retour--attente svg{animation:sk-retour-va .7s ease-in-out infinite alternate;}
@keyframes sk-retour-va{to{transform:scaleX(-1) translateX(6px);}}
rdr-skipper .sk .sk-retour:hover svg{transform:scaleX(-1) translateX(3px);}
rdr-skipper .sk .sk-retour:focus-visible{outline:2px solid #fff;outline-offset:3px;}
rdr-skipper .sk .sk-liste-pied{display:flex;justify-content:center;margin-top:var(--e7);}
rdr-skipper .sk .sk-liste-pied svg{width:16px;height:16px;}


rdr-skipper .sk .sk-hero-in{position:relative;padding-top:calc(var(--e8) + 40px);padding-bottom:calc(clamp(40px,7vh,88px) + var(--sk-nav-h) * .5);}


rdr-skipper .sk .sk-live{position:relative;display:inline-flex;align-items:baseline;gap:10px;margin-bottom:var(--e5);padding:9px 16px 11px 12px;overflow:hidden;border-radius:var(--r-btn);
  background:rgba(93,191,192,.12);box-shadow:inset 0 0 0 1px rgba(93,191,192,.42);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-live b{font-family:RDRNoir,Montserrat,sans-serif;font-style:italic;font-weight:900;font-size:22px;line-height:1;letter-spacing:-.02em;text-transform:none;color:#9EF4FD;}
rdr-skipper .sk .sk-live::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;
  background:linear-gradient(90deg,#9EF4FD var(--sk-fait,0%),rgba(93,191,192,.18) var(--sk-fait,0%));}
rdr-skipper .sk .sk-hero-origine{display:flex;flex-wrap:wrap;align-items:center;gap:6px var(--e3);margin-bottom:var(--e3);font-size:var(--t2);font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-hero-origine img{width:24px;height:24px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 2px rgba(255,255,255,.18);}
rdr-skipper .sk .sk-hero-origine b{width:5px;height:5px;border-radius:50%;background:var(--sk-accent);}
rdr-skipper .sk .sk-hero-nom{display:flex;flex-direction:column;gap:0;color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.35);}
rdr-skipper .sk .sk-hero-prenom{font-size:clamp(18px,1.9vw,26px);font-weight:300;letter-spacing:.38em;text-transform:uppercase;line-height:1.2;padding-left:.08em;}
rdr-skipper .sk .sk-hero-famille{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase;
  font-size:var(--t7);line-height:.86;letter-spacing:-.035em;margin-left:-.04em;overflow-wrap:normal;word-break:normal;}
rdr-skipper .sk .sk-hero-bateau{display:flex;align-items:center;gap:var(--e3);margin-top:var(--e4);font-size:var(--t4);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sk-accent);}
rdr-skipper .sk .sk-hero-bateau img{height:34px;width:auto;}
rdr-skipper .sk .sk-hero-faits{display:flex;flex-wrap:wrap;gap:var(--e2) var(--e6);margin-top:var(--e5);}
rdr-skipper .sk .sk-hero-faits li{display:flex;align-items:baseline;gap:var(--e2);font-size:var(--t2);color:var(--sk-encre-3);letter-spacing:.08em;text-transform:uppercase;}
rdr-skipper .sk .sk-hero-faits b{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:var(--t5);letter-spacing:.01em;color:#fff;text-transform:uppercase;}
rdr-skipper .sk .sk-hero-actions{display:flex;flex-wrap:wrap;gap:var(--e3);margin-top:var(--e6);}
rdr-skipper .sk .sk-hero-bas{position:absolute;right:clamp(20px,5vw,72px);bottom:clamp(40px,7vh,88px);display:grid;place-items:center;width:52px;height:52px;
  border-radius:50%;border:1.5px solid rgba(238,242,248,.45);color:var(--sk-encre);}
rdr-skipper .sk .sk-hero-bas svg{width:20px;height:20px;animation:sk-descend 2.4s ease-in-out infinite;}
@keyframes sk-descend{0%,100%{transform:translateY(-2px);}50%{transform:translateY(4px);}}
















rdr-skipper .sk .sk-hero--affiche{align-items:center;min-height:clamp(620px,86svh,860px);container-type:inline-size;
  background:radial-gradient(80% 70% at 12% 110%,rgba(79,91,165,.3) 0%,transparent 62%),linear-gradient(180deg,#151A33 0%,var(--sk-abysse) 100%);}
rdr-skipper .sk .sk-hero--affiche > *{--sk-cc:calc(min(100cqw,1280px) - 2 * clamp(20px,5cqw,72px));--sk-cg:calc((100cqw - min(100cqw,1280px)) / 2 + clamp(20px,5cqw,72px));
  --sk-sc-g:.4;--sk-sc-b:.175;--sk-sc-p:.425;}
rdr-skipper .sk .sk-scene{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:calc(var(--sk-cg) + var(--sk-cc) * var(--sk-sc-g));overflow:clip;isolation:isolate;
  clip-path:polygon(calc(var(--sk-cc) * var(--sk-sc-b)) 0,100% 0,100% 100%,0 100%);transition:background-color .5s ease;
  

  background-color:var(--sk-scene,color-mix(in srgb,var(--sk-accent) 80%,#16355D));}
rdr-skipper .sk .sk-scene::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(calc(var(--sk-cc) * .5) 52% at calc(var(--sk-cc) * var(--sk-sc-p)) 34%,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 70%);}
rdr-skipper .sk .sk-scene::after{content:"";position:absolute;inset:0;z-index:4;pointer-events:none;
  background:linear-gradient(90deg,rgba(14,17,29,.72) 0,rgba(14,17,29,.2) calc(var(--sk-cc) * .17),rgba(14,17,29,0) calc(var(--sk-cc) * .3)),linear-gradient(0deg,rgba(14,17,29,.55) 0%,rgba(14,17,29,0) 24%);}







rdr-skipper .sk .sk-hero-vagues{position:absolute;z-index:-2;left:calc(var(--sk-cg) - 1150px);bottom:-250px;width:1500px;max-width:none;height:auto;opacity:.11;pointer-events:none;
  -webkit-mask-image:linear-gradient(90deg,transparent 50%,#000 68%,#000 84%,transparent 99%),linear-gradient(0deg,#000 32%,transparent 80%);-webkit-mask-composite:source-in;
  mask-image:linear-gradient(90deg,transparent 50%,#000 68%,#000 84%,transparent 99%),linear-gradient(0deg,#000 32%,transparent 80%);mask-composite:intersect;}
rdr-skipper .sk .sk-scene-sujet{position:absolute;z-index:3;left:calc(var(--sk-cc) * var(--sk-sc-p));bottom:0;height:95%;transform:translate3d(-50%,calc(var(--sk-par,0) * .07px),0);}
rdr-skipper .sk .sk-scene-portrait{display:block;height:100%;width:auto;max-width:none;opacity:0;translate:0 22px;
  transition:opacity .7s ease,translate 1.1s cubic-bezier(.2,.7,.2,1);animation:sk-secours 0s linear 2.4s forwards;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 16%,#000 84%,transparent 100%),linear-gradient(180deg,transparent 0%,#000 14%);-webkit-mask-composite:source-in;
  mask-image:linear-gradient(90deg,transparent 0%,#000 16%,#000 84%,transparent 100%),linear-gradient(180deg,transparent 0%,#000 14%);mask-composite:intersect;}
rdr-skipper .sk .sk-scene-portrait.est-charge{opacity:1;translate:0 0;}
@keyframes sk-secours{to{opacity:1;}}
rdr-skipper .sk .sk-scene-ecusson{position:absolute;z-index:5;top:clamp(14px,1.8vw,28px);right:max(clamp(20px,4cqw,56px),calc(100cqw - var(--sk-cg) - var(--sk-cc) - 120px));width:auto;height:clamp(104px,12vw,160px);filter:drop-shadow(0 14px 20px rgba(0,0,0,.3));}



rdr-skipper .sk .sk-hero--photo-libre .sk-scene-sujet{left:0;top:0;width:100%;height:100%;transform:none;}
rdr-skipper .sk .sk-hero--photo-libre .sk-scene-portrait{width:100%;height:100%;object-fit:cover;object-position:50% 24%;-webkit-mask-image:none;mask-image:none;}
rdr-skipper .sk .sk-hero--affiche .sk-hero-in{width:100%;}



rdr-skipper .sk .sk-hero--affiche .sk-hero-bas{display:none;}
rdr-skipper .sk .sk-hero--affiche .sk-hero-texte{position:relative;max-width:min(48%,600px);}
rdr-skipper .sk .sk-hero--affiche .sk-hero-faits{padding-right:var(--e6);}


rdr-skipper .sk .sk-hero--affiche .sk-hero-famille{font-size:min(var(--t7),calc(min(38vw,520px) * 1.62 / var(--sk-lettres,7)));text-wrap:balance;overflow-wrap:normal;word-break:normal;}
rdr-skipper .sk .sk-decompte{display:inline-flex;align-items:baseline;gap:10px;margin:0 0 var(--e5);padding:9px 14px 9px 12px;border-radius:var(--r-btn);
  background:rgba(252,241,80,.1);box-shadow:inset 0 0 0 1px rgba(252,241,80,.36);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-decompte b{font-family:RDRNoir,Montserrat,sans-serif;font-style:italic;font-weight:900;font-size:22px;line-height:1;letter-spacing:-.02em;text-transform:none;color:var(--sk-jaune);}
rdr-skipper .sk .sk-suivis{display:flex;align-items:center;gap:var(--e2);margin-top:var(--e4);font-size:var(--t2);color:var(--sk-encre-3);}






rdr-skipper .sk.sk--attente{min-height:max(100vh,600px);min-height:max(100svh,600px);}
rdr-skipper .sk.sk--attente .sk-scene{background-color:#262E5C;}
rdr-skipper .sk .sk-att-silhouette{position:absolute;z-index:3;left:calc(var(--sk-cc) * var(--sk-sc-p));bottom:0;height:88%;aspect-ratio:200 / 240;transform:translateX(-50%);
  background:url("${SILHOUETTE}") 50% 100% / contain no-repeat;opacity:.12;animation:sk-respire 2.6s ease-in-out infinite;}
rdr-skipper .sk .sk-att-houle{position:absolute;z-index:4;left:0;right:0;bottom:0;height:120px;pointer-events:none;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 14' preserveAspectRatio='none'%3E%3Cpath d='M0 7 Q 15 2.2 30 7 T 60 7 T 90 7 T 120 7' fill='none' stroke='%23ffffff' stroke-opacity='.34' stroke-width='1.6'/%3E%3C/svg%3E") 0 70% / 240px 16px repeat-x,
             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 14' preserveAspectRatio='none'%3E%3Cpath d='M0 7 Q 15 3 30 7 T 60 7 T 90 7 T 120 7' fill='none' stroke='%239EF4FD' stroke-opacity='.3' stroke-width='1.4'/%3E%3C/svg%3E") 0 92% / 320px 20px repeat-x;
  animation:sk-houle 11s linear infinite;}
rdr-skipper .sk .sk-att-barre{display:block;height:14px;max-width:100%;border-radius:3px 10px 3px 10px;
  background:linear-gradient(100deg,rgba(238,242,248,.06) 30%,rgba(238,242,248,.2) 50%,rgba(238,242,248,.06) 70%) 0 0 / 300% 100%;animation:sk-reflet 1.7s linear infinite;}
rdr-skipper .sk .sk-att-barre--decompte{width:176px;height:40px;margin-bottom:var(--e5);}
rdr-skipper .sk .sk-att-barre--origine{width:230px;margin-bottom:var(--e4);}
rdr-skipper .sk .sk-att-barre--prenom{width:150px;height:18px;margin-bottom:var(--e3);}
rdr-skipper .sk .sk-att-barre--nom{width:min(420px,90%);height:clamp(64px,8vw,120px);}
rdr-skipper .sk .sk-att-barre--bateau{width:210px;height:18px;margin-top:var(--e4);}
rdr-skipper .sk .sk-att-nom{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase;line-height:.9;letter-spacing:-.02em;
  font-size:min(var(--t7),calc(min(38vw,520px) * 1.62 / var(--sk-lettres,9)));color:transparent;-webkit-background-clip:text;background-clip:text;
  background-image:linear-gradient(100deg,rgba(238,242,248,.22) 30%,rgba(238,242,248,.62) 50%,rgba(238,242,248,.22) 70%);background-size:300% 100%;animation:sk-reflet 1.7s linear infinite;}
rdr-skipper .sk .sk-att-faits{display:flex;gap:var(--e5);margin-top:var(--e5);}
rdr-skipper .sk .sk-att-faits .sk-att-barre{width:120px;height:26px;}
rdr-skipper .sk .sk-att-actions{display:flex;gap:var(--e3);margin-top:var(--e6);}
rdr-skipper .sk .sk-att-actions .sk-att-barre{width:190px;height:52px;border-radius:var(--r-btn);}
rdr-skipper .sk .sk-att-actions .sk-att-barre + .sk-att-barre{width:140px;}
rdr-skipper .sk .sk-att-legende{display:inline-block;margin-top:var(--e6);padding-bottom:10px;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--sk-encre-3);
  background-image:linear-gradient(90deg,transparent,#F9F06E 20%,#F19F39 46%,#72B9F1 74%,transparent),linear-gradient(90deg,rgba(255,255,255,.14),rgba(255,255,255,.14));
  background-size:34% 2px,100% 2px;background-position:-130% 100%,0 100%;background-repeat:no-repeat;animation:sk-balai 2s cubic-bezier(.62,0,.38,1) infinite;}
@keyframes sk-reflet{from{background-position:100% 0;}to{background-position:0 0;}}
@keyframes sk-respire{0%,100%{opacity:.09;}50%{opacity:.17;}}
@keyframes sk-houle{to{background-position:-240px 70%,-320px 92%;}}
@keyframes sk-balai{0%{background-position:-130% 100%,0 100%;}100%{background-position:230% 100%,0 100%;}}







rdr-skipper .sk .sk-hero--course{min-height:clamp(700px,94svh,920px);}
rdr-skipper .sk .sk-hero--course > *{--sk-sc-g:.5;--sk-sc-b:.1;}
rdr-skipper .sk .sk-hero--course .sk-scene{background:radial-gradient(90% 70% at 62% 42%,#1D4A7C 0%,#132F55 52%,#0B1A33 100%);}
rdr-skipper .sk .sk-hero--course .sk-scene::before{display:none;}
rdr-skipper .sk .sk-hero--course .sk-scene::after{background:linear-gradient(90deg,rgba(14,17,29,.5) 0,rgba(14,17,29,0) calc(var(--sk-cc) * .1)),linear-gradient(0deg,rgba(14,17,29,.5) 0%,rgba(14,17,29,0) 22%);}
 
rdr-skipper .sk .sk-hero--course .sk-hero-in{pointer-events:none;padding-top:var(--e6);padding-bottom:calc(var(--e6) + var(--sk-nav-h) * .5);}
rdr-skipper .sk .sk-hero--course .sk-hero-texte{pointer-events:auto;max-width:min(47%,580px);}
rdr-skipper .sk .sk-hero--course .sk-hero-famille{font-size:min(clamp(44px,4.6vw,78px),calc(min(30vw,380px) * 1.5 / var(--sk-lettres,7)));}
rdr-skipper .sk .sk-hero--course .sk-hero-origine{margin-bottom:var(--e2);}
rdr-skipper .sk .sk-course-id{display:flex;align-items:center;gap:var(--e4);min-width:0;}
rdr-skipper .sk .sk-course-id > div{min-width:0;}
rdr-skipper .sk .sk-course-visage{position:relative;flex:none;width:clamp(78px,6.6vw,100px);aspect-ratio:1;overflow:hidden;border-radius:24px 4px 24px 4px;
  background:color-mix(in srgb,var(--sk-accent) 70%,#16355D);box-shadow:0 16px 30px -18px rgba(0,0,0,.85),inset 0 0 0 1px rgba(255,255,255,.2);}
rdr-skipper .sk .sk-course-visage img{width:100%;height:100%;object-fit:cover;object-position:50% 6%;transform:scale(1.3);transform-origin:50% 14%;}

 
rdr-skipper .sk .sk-carto{position:absolute;inset:0;width:100%;height:100%;}
rdr-skipper .sk .sk-carto-terre{fill:rgba(238,242,248,.09);stroke:rgba(238,242,248,.24);stroke-width:1;stroke-linejoin:round;vector-effect:non-scaling-stroke;}
rdr-skipper .sk .sk-carto-ile{fill:rgba(238,242,248,.3);}
rdr-skipper .sk .sk-carto-grille{fill:none;stroke:rgba(238,242,248,.055);stroke-width:1;vector-effect:non-scaling-stroke;}
rdr-skipper .sk .sk-carto-route{fill:none;stroke:rgba(238,242,248,.36);stroke-width:1.6;stroke-dasharray:5 7;vector-effect:non-scaling-stroke;}
rdr-skipper .sk .sk-carto-sillage{fill:none;stroke:var(--sk-accent);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke;}
rdr-skipper .sk .sk-carto-flotte circle{fill:rgba(238,242,248,.5);}
rdr-skipper .sk .sk-carto-leader{fill:none;stroke:var(--sk-jaune);stroke-width:2;vector-effect:non-scaling-stroke;}
rdr-skipper .sk .sk-carto-port{fill:#EEF2F8;}
rdr-skipper .sk .sk-carto-arrivee{fill:none;stroke:var(--sk-jaune);stroke-width:2.4;vector-effect:non-scaling-stroke;}


rdr-skipper .sk .sk-carto-nom{fill:rgba(238,242,248,.86);font:700 calc(14px * var(--sk-carto-k,1)) Montserrat,sans-serif;letter-spacing:.04em;paint-order:stroke;stroke:#0B1A33;stroke-width:calc(3px * var(--sk-carto-k,1));stroke-linejoin:round;}
rdr-skipper .sk .sk-carto-nom--leader{fill:var(--sk-jaune);font-size:calc(12px * var(--sk-carto-k,1));}
rdr-skipper .sk .sk-carto-mer{fill:rgba(238,242,248,.3);font:600 italic calc(12px * var(--sk-carto-k,1)) Montserrat,sans-serif;letter-spacing:.24em;}
rdr-skipper .sk .sk-carto-balise,rdr-skipper .sk .sk-carto-leader,rdr-skipper .sk .sk-carto-flotte circle{transform-box:fill-box;transform-origin:center;transform:scale(var(--sk-carto-k,1));}
rdr-skipper .sk .sk-carto-bateau path{fill:var(--sk-accent);stroke:#0B1A33;stroke-width:1.6;stroke-linejoin:round;vector-effect:non-scaling-stroke;}
 
rdr-skipper .sk .sk-carto-halo{fill:none;stroke:var(--sk-accent);stroke-width:1.5;opacity:.5;vector-effect:non-scaling-stroke;}
rdr-skipper .sk .sk-carto-ui{position:absolute;z-index:5;left:calc(var(--sk-cc) * .12);right:max(clamp(20px,4cqw,56px),calc(100cqw - var(--sk-cg) - var(--sk-cc) - 40px));bottom:calc(var(--e6) + var(--sk-nav-h) * .5);
  display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--e3);pointer-events:none;}
rdr-skipper .sk .sk-carto-ui > *{pointer-events:auto;}
rdr-skipper .sk .sk-carto-legende{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;margin:0;padding:10px 14px;border-radius:12px 3px 12px 3px;background:rgba(11,26,51,.74);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:inset 0 0 0 1px rgba(238,242,248,.1);font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-carto-legende li{display:flex;align-items:center;gap:7px;white-space:nowrap;}
rdr-skipper .sk .sk-carto-legende i{display:block;width:10px;height:10px;border-radius:50%;}
rdr-skipper .sk .sk-carto-legende .est-moi{background:var(--sk-accent);box-shadow:0 0 0 2px rgba(11,26,51,.9),0 0 0 3px var(--sk-accent);}
rdr-skipper .sk .sk-carto-legende .est-leader{box-shadow:inset 0 0 0 2px var(--sk-jaune);}
rdr-skipper .sk .sk-carto-legende .est-flotte{background:rgba(238,242,248,.5);width:7px;height:7px;}
rdr-skipper .sk .sk-carto-ouvrir{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border-radius:14px 3px 14px 3px;background:#fff;color:#0B1B33;
  font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;box-shadow:0 14px 30px -14px rgba(0,0,0,.7);}
rdr-skipper .sk .sk-carto-ouvrir svg{width:16px;height:16px;}
rdr-skipper .sk .sk-carto-direct{position:absolute;z-index:5;top:var(--e6);left:calc(var(--sk-cc) * .16);display:inline-flex;align-items:center;gap:10px;padding:8px 12px;border-radius:12px 3px 12px 3px;
  background:rgba(11,26,51,.74);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-carto-direct svg{width:16px;height:16px;color:#9EF4FD;}

 
rdr-skipper .sk .sk-bord{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--e3);margin-top:var(--e5);}
rdr-skipper .sk .sk-bord-case{display:flex;flex-direction:column;gap:6px;min-width:0;margin:0;padding:var(--e4) var(--e5);border-radius:var(--r-carte);background:rgba(14,17,29,.64);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(238,242,248,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}
rdr-skipper .sk .sk-bord-lib{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-bord-lib svg{width:15px;height:15px;color:var(--sk-accent);}



rdr-skipper .sk .sk-bord-mesures .sk-bord-case{container-type:inline-size;}
rdr-skipper .sk .sk-bord-val{margin-top:auto;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:min(clamp(24px,2.2vw,32px),calc(100cqw * 1.5 / var(--sk-car,5)));line-height:1;color:#fff;white-space:nowrap;text-transform:uppercase;font-variant-numeric:tabular-nums;}
rdr-skipper .sk .sk-bord-val small{display:block;margin-top:6px;font-family:Montserrat,sans-serif;font-style:normal;font-size:12px;font-weight:700;letter-spacing:.04em;color:var(--sk-encre-2);text-transform:none;}
rdr-skipper .sk .sk-bord-rang{flex-direction:row;align-items:center;gap:var(--e4);}
rdr-skipper .sk .sk-bord-pos{font-family:RDRNoir,Montserrat,sans-serif;font-style:italic;font-weight:900;font-size:clamp(58px,5.4vw,84px);line-height:.86;letter-spacing:-.05em;color:var(--sk-jaune);white-space:nowrap;}
rdr-skipper .sk .sk-bord-pos sup{font-size:.4em;line-height:0;vertical-align:.95em;margin-left:.04em;letter-spacing:0;}
rdr-skipper .sk .sk-bord-rang-textes{display:flex;flex-direction:column;align-items:flex-start;gap:6px;min-width:0;}
rdr-skipper .sk .sk-bord-sur{font-size:13px;font-weight:600;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-bord-tendance{display:inline-flex;align-items:center;gap:6px;max-width:100%;padding:4px 9px;border-radius:var(--r-btn);font-size:11px;font-weight:700;line-height:1.3;background:rgba(93,191,192,.16);color:#9EF4FD;}
rdr-skipper .sk .sk-bord-tendance.est-baisse{background:rgba(245,190,65,.14);color:#F5BE41;}
rdr-skipper .sk .sk-bord-parcours{justify-content:center;gap:10px;}
rdr-skipper .sk .sk-bord-parcours-tete{display:flex;align-items:baseline;justify-content:space-between;gap:var(--e3);}
rdr-skipper .sk .sk-bord-parcours-tete b{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:clamp(24px,2.2vw,32px);line-height:1;color:#fff;}
rdr-skipper .sk .sk-bord-jauge{position:relative;height:8px;border-radius:8px;background:rgba(238,242,248,.12);}
rdr-skipper .sk .sk-bord-jauge i{position:absolute;top:0;bottom:0;left:0;width:var(--sk-jauge,0%);border-radius:8px;background:linear-gradient(90deg,color-mix(in srgb,var(--sk-accent) 55%,#fff),var(--sk-accent));}
rdr-skipper .sk .sk-bord-jauge b{position:absolute;top:50%;left:var(--sk-jauge-tete,0%);width:3px;height:16px;border-radius:2px;background:var(--sk-jaune);transform:translate(-50%,-50%);}
rdr-skipper .sk .sk-bord-eta{display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px 12px;font-size:12px;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-bord-eta strong{font-weight:700;color:#fff;}
rdr-skipper .sk .sk-bord-mesures{grid-column:1 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--e3);margin:0;}
rdr-skipper .sk .sk-bord-actions{grid-column:1 / -1;display:flex;flex-wrap:wrap;gap:var(--e3);}
rdr-skipper .sk .sk-bord-outils{grid-column:1 / -1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--e3);font-size:12px;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-bord-outils p{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;margin:0;}
rdr-skipper .sk .sk-bord-avance-btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border-radius:14px 3px 14px 3px;
  font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:rgba(238,242,248,.08);box-shadow:inset 0 0 0 1px rgba(238,242,248,.22);transition:background-color .2s ease;}
rdr-skipper .sk .sk-bord-avance-btn:hover{background:rgba(238,242,248,.14);}
rdr-skipper .sk .sk-bord-avance-btn svg{width:16px;height:16px;transition:transform .25s ease;}
rdr-skipper .sk .sk-bord-avance-btn[aria-expanded="true"] svg{transform:rotate(180deg);}
rdr-skipper .sk .sk-bord-avance{grid-column:1 / -1;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;margin:0;overflow:hidden;border-radius:var(--r-carte);background:rgba(238,242,248,.1);}
rdr-skipper .sk .sk-bord-avance > div{padding:12px 14px;background:rgba(14,17,29,.8);}
rdr-skipper .sk .sk-bord-avance dt{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-bord-avance dd{margin-top:4px;font-family:Varien,Impact,sans-serif;font-style:italic;font-size:19px;line-height:1.1;color:#fff;white-space:nowrap;font-variant-numeric:tabular-nums;}
rdr-skipper .sk .sk-bord-avance dd small{font-family:Montserrat,sans-serif;font-style:normal;font-size:11px;font-weight:700;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-bord-avance dd.est-coord{font-size:16px;}
rdr-skipper .sk .sk-bord-avance dd.est-coord small{display:block;margin:3px 0 0;font:inherit;color:inherit;}


rdr-skipper .sk .sk-bord-avance > div:last-child:nth-child(4n+3){grid-column:span 2;}
rdr-skipper .sk .sk-bord-avance > div:last-child:nth-child(4n+2){grid-column:span 3;}
rdr-skipper .sk .sk-bord-avance > div:last-child:nth-child(4n+1){grid-column:1 / -1;}
rdr-skipper .sk .sk-bord-demo{white-space:nowrap;padding:3px 8px;border-radius:3px 8px 3px 8px;background:rgba(245,190,65,.16);color:#F5BE41;font-weight:700;letter-spacing:.1em;text-transform:uppercase;font-size:10px;}
rdr-skipper .sk .sk-bord-attente{display:flex;align-items:center;gap:var(--e3);max-width:44ch;margin:var(--e5) 0 0;font-size:15px;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-bord-attente svg{width:22px;height:22px;color:var(--sk-teal);}









rdr-skipper .sk .sk-nav{position:sticky;top:0;z-index:40;height:var(--sk-nav-h);margin:calc(var(--sk-nav-h) * -.5) 0;pointer-events:none;}
rdr-skipper .sk .sk-nav > .sk-cadre{display:flex;align-items:center;height:100%;}
rdr-skipper .sk .sk-nav-in{position:relative;display:flex;align-items:center;gap:var(--e2);width:100%;height:60px;padding:0 8px 0 10px;pointer-events:auto;overflow:clip;
  border-radius:20px 4px 20px 4px;background:rgba(17,21,38,.8);-webkit-backdrop-filter:saturate(1.4) blur(18px);backdrop-filter:saturate(1.4) blur(18px);
  box-shadow:0 18px 44px -20px rgba(0,0,0,.72),inset 0 0 0 1px rgba(238,242,248,.1),inset 0 1px 0 rgba(255,255,255,.07);}
 
rdr-skipper .sk .sk-nav-in::after{content:"";position:absolute;left:20px;right:20px;bottom:0;height:2px;border-radius:2px;background:var(--sk-accent);transform-origin:0 50%;transform:scaleX(var(--sk-progres,0));pointer-events:none;}
rdr-skipper .sk .sk-nav-id{display:flex;align-items:center;gap:10px;flex:none;max-width:0;opacity:0;overflow:hidden;white-space:nowrap;
  transition:max-width .45s cubic-bezier(.2,.8,.2,1),opacity .25s ease,margin-right .45s ease;}


rdr-skipper .sk.sk--colle .sk-nav-id{max-width:260px;opacity:1;margin-right:var(--e2);}
rdr-skipper .sk .sk-nav-avatar{display:block;flex:none;width:42px;height:42px;padding:2px;border-radius:50%;background:conic-gradient(from 200deg,var(--sk-accent),rgba(255,255,255,.9) 45%,var(--sk-accent) 70%);}
rdr-skipper .sk .sk-nav-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:2px solid #111526;background:#28336B;}
rdr-skipper .sk .sk-nav-qui{display:flex;flex-direction:column;gap:4px;min-width:0;line-height:1;}
rdr-skipper .sk .sk-nav-qui b{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:16px;letter-spacing:.01em;text-transform:uppercase;color:#fff;}
rdr-skipper .sk .sk-nav-qui small{max-width:180px;overflow:hidden;text-overflow:ellipsis;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-nav-defile{position:relative;flex:1 1 auto;min-width:0;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;}
rdr-skipper .sk .sk-nav-defile::-webkit-scrollbar{display:none;}


rdr-skipper .sk .sk-nav-defile[data-deborde]{-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 var(--sk-fg,0px),#000 calc(100% - var(--sk-fd,0px)),transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 var(--sk-fg,0px),#000 calc(100% - var(--sk-fd,0px)),transparent 100%);}
rdr-skipper .sk .sk-nav-liste{position:relative;z-index:1;display:flex;align-items:center;gap:2px;height:44px;}


rdr-skipper .sk .sk-nav-indic{position:absolute;z-index:0;top:0;left:0;height:44px;width:var(--sk-indic-w,0px);transform:translateX(var(--sk-indic-x,0px));opacity:0;pointer-events:none;
  border-radius:14px 3px 14px 3px;background:rgba(255,255,255,.09);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);
  transition:transform .45s cubic-bezier(.2,.8,.2,1),width .45s cubic-bezier(.2,.8,.2,1),opacity .2s ease;}
rdr-skipper .sk .sk-nav-indic.est-pose{opacity:1;}
rdr-skipper .sk .sk-nav-lien{position:relative;display:flex;align-items:center;gap:8px;height:44px;padding:0 12px;white-space:nowrap;border-radius:14px 3px 14px 3px;
  font-size:12px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--sk-encre-3);transition:color .2s ease;}
rdr-skipper .sk .sk-nav-lien svg{width:16px;height:16px;transition:color .2s ease;}
rdr-skipper .sk .sk-nav-lien:hover,rdr-skipper .sk .sk-nav-lien[aria-current="true"]{color:#fff;}
rdr-skipper .sk .sk-nav-lien[aria-current="true"] svg{color:var(--sk-accent);}
rdr-skipper .sk .sk-nav-actions{display:flex;align-items:center;gap:6px;flex:none;}
rdr-skipper .sk .sk-nav-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 16px;border-radius:14px 3px 14px 3px;
  font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sk-encre);background:rgba(255,255,255,.06);box-shadow:inset 0 0 0 1px rgba(238,242,248,.16);
  transition:background-color .2s ease,box-shadow .2s ease,color .2s ease;}
rdr-skipper .sk .sk-nav-btn svg{width:16px;height:16px;}
rdr-skipper .sk .sk-nav-btn:hover{background:rgba(255,255,255,.12);}
rdr-skipper .sk .sk-nav-btn--suivre{background:var(--sk-jaune);box-shadow:none;color:#0B1B33;}
rdr-skipper .sk .sk-nav-btn--suivre:hover{background:#FFF36A;}
rdr-skipper .sk .sk-nav-btn--suivre[aria-pressed="true"]{background:var(--sk-teal);color:#06283B;}
 
rdr-skipper .sk .sk-nav + .sk-sec{padding-top:calc(var(--e9) + var(--sk-nav-h) * .5);}

 
rdr-skipper .sk .sk-sec{position:relative;isolation:isolate;padding:var(--e9) 0;overflow:clip;scroll-margin-top:calc(var(--sk-nav-h) - 1px);}








rdr-skipper .sk .sk-actus,rdr-skipper .sk .sk-palmares,rdr-skipper .sk .sk-bateau,rdr-skipper .sk .sk-medias,rdr-skipper .sk .sk-suivre{content-visibility:auto;contain-intrinsic-size:auto 1200px;}
rdr-skipper .sk.sk--deplie .sk-sec{content-visibility:visible;}
rdr-skipper .sk .sk-sec-fond{position:absolute;inset:0;z-index:-1;width:100%;height:100%;object-fit:cover;pointer-events:none;opacity:.42;}
rdr-skipper .sk .sk-tete{display:flex;align-items:flex-end;gap:var(--e6);margin-bottom:var(--e7);}
rdr-skipper .sk .sk-tete-textes{display:flex;flex-direction:column;gap:var(--e3);min-width:0;}
rdr-skipper .sk .sk-tete::after{content:"";flex:1 1 auto;height:2px;margin-bottom:.9em;min-width:40px;background:linear-gradient(90deg,rgba(238,242,248,.55),rgba(238,242,248,0));}
rdr-skipper .sk .sk-titre{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase;font-size:var(--t6);line-height:1.04;letter-spacing:-.01em;color:#fff;overflow-wrap:normal;word-break:normal;text-wrap:balance;}

 
rdr-skipper .sk .sk-profil{background:linear-gradient(360deg,#16355D 0%,#16355D 5%,#4F5BA5 52.63%);}
rdr-skipper .sk .sk-profil-grille{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(32px,4.5vw,72px);align-items:start;}
rdr-skipper .sk .sk-profil-grille--seule{grid-template-columns:minmax(0,1fr);max-width:880px;}
rdr-skipper .sk .sk-ecusson{position:absolute;top:-14px;right:-18px;width:auto;height:clamp(96px,11vw,150px);filter:drop-shadow(0 12px 18px rgba(0,0,0,.35));pointer-events:none;}






rdr-skipper .sk .sk-id-bande{display:grid;grid-template-columns:repeat(var(--sk-tuiles,5),minmax(0,1fr));gap:1px;margin:0 0 var(--e7);border-radius:var(--r-carte);overflow:hidden;
  background:var(--sk-carte-filet);box-shadow:var(--ombre);}
rdr-skipper .sk .sk-id-tuile{position:relative;display:flex;flex-direction:column;justify-content:center;gap:var(--e2);min-width:0;min-height:112px;padding:var(--e4) var(--e5);background:var(--sk-carte);}
rdr-skipper .sk .sk-id-tuile dt{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--sk-carte-label);}
rdr-skipper .sk .sk-id-tuile dt svg{width:16px;height:16px;color:#4F5BA5;}
rdr-skipper .sk .sk-id-tuile dd{display:flex;align-items:center;gap:10px;min-width:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase;
  font-size:clamp(19px,1.8vw,25px);line-height:1.05;color:var(--sk-carte-encre);overflow-wrap:normal;word-break:normal;}
rdr-skipper .sk .sk-id-tuile dt .sk-id-drapeau{width:18px;height:18px;border-radius:50%;object-fit:cover;flex:none;box-shadow:0 0 0 1px rgba(25,29,49,.12);}



rdr-skipper .sk .sk-id-tuile--classe{padding-right:calc(var(--e5) + 62px);}
rdr-skipper .sk .sk-id-tuile--classe .sk-id-fanion{position:absolute;top:50%;right:var(--e4);width:auto;height:92px;transform:translateY(-50%);filter:drop-shadow(0 8px 12px rgba(25,29,49,.2));pointer-events:none;}
rdr-skipper .sk .sk-profil-texte{display:flex;flex-direction:column;gap:var(--e6);min-width:0;}


rdr-skipper .sk .sk-profil-cote{position:sticky;top:calc(var(--sk-nav-h) + 24px);display:flex;flex-direction:column;gap:var(--e6);min-width:0;}
rdr-skipper .sk .sk-profil-photo{margin:0;}
 
rdr-skipper .sk .sk-sec--attente{contain-intrinsic-size:auto 560px;}
 
rdr-skipper .sk .sk-profil-photo--attente .sk-profil-photo-cadre{position:relative;background-color:#28336B;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'%3E%3Cpath fill='%23fff' fill-opacity='.2' d='M100 22c-22 0-38 18-38 42 0 17 8 32 20 39-38 7-64 38-68 137h172c-4-99-30-130-68-137 12-7 20-22 20-39 0-24-16-42-38-42Z'/%3E%3C/svg%3E"),radial-gradient(70% 70% at 50% 30%,rgba(255,255,255,.16),rgba(255,255,255,0) 70%),linear-gradient(160deg,var(--sk-accent) 0%,#16355D 100%);
  background-repeat:no-repeat;background-position:50% 100%,0 0,0 0;background-size:auto 84%,100% 100%,100% 100%;}
rdr-skipper .sk .sk-profil-photo-legende{position:absolute;left:var(--e4);bottom:var(--e4);padding:8px 12px;border-radius:12px 3px 12px 3px;background:rgba(14,17,29,.72);color:#fff;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;}
 
rdr-skipper .sk .sk-en-attente{display:grid;grid-template-columns:56px minmax(0,1fr);gap:var(--e4);align-items:start;max-width:880px;padding:clamp(20px,3vw,32px);border-radius:var(--r-bloc);background:rgba(14,17,29,.28);box-shadow:inset 0 0 0 1.5px rgba(238,242,248,.14);}
rdr-skipper .sk .sk-en-attente-picto{display:grid;place-items:center;width:56px;height:56px;border-radius:16px 4px 16px 4px;background:rgba(238,242,248,.1);color:rgba(238,242,248,.8);}
rdr-skipper .sk .sk-en-attente-picto svg{width:26px;height:26px;}
rdr-skipper .sk .sk-en-attente-textes{display:flex;flex-direction:column;gap:var(--e2);min-width:0;}
rdr-skipper .sk .sk-en-attente .sk-en-attente-titre{margin:0;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:clamp(22px,2.2vw,30px);line-height:1;text-transform:uppercase;color:#fff;text-wrap:balance;}
rdr-skipper .sk .sk-en-attente .sk-en-attente-texte{margin:0;font-size:15px;line-height:1.6;color:rgba(238,242,248,.8);}
rdr-skipper .sk .sk-profil-photo-cadre{aspect-ratio:var(--sk-photo-rapport,.8);border-radius:var(--r-bloc);overflow:hidden;background:#28336B;box-shadow:var(--ombre),inset 0 0 0 1px rgba(255,255,255,.14);}
rdr-skipper .sk .sk-profil-photo-cadre img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;}


rdr-skipper .sk .sk-profil-photo .sk-porte{position:relative;width:max-content;max-width:min(86%,360px);margin:-28px 0 0 calc(var(--e4) * -1);background:var(--sk-nuit);box-shadow:var(--ombre),inset 0 0 0 1px rgba(238,242,248,.16);}
rdr-skipper .sk .sk-carte{border-radius:var(--r-carte);background:var(--sk-carte);color:var(--sk-carte-encre);box-shadow:var(--ombre);}
rdr-skipper .sk .sk-carte-titre{margin-bottom:var(--e2);font-size:var(--t1);font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--sk-carte-label);}
rdr-skipper .sk .sk-ligne{display:flex;align-items:center;justify-content:space-between;gap:var(--e4);min-height:52px;padding:var(--e3) 0;border-top:1px solid var(--sk-carte-filet);}
rdr-skipper .sk .sk-ligne:first-child{border-top:0;}
rdr-skipper .sk .sk-ligne--attente dd{font-weight:600;font-style:italic;letter-spacing:.06em;color:var(--sk-carte-label);opacity:.75;}
rdr-skipper .sk .sk-ligne dt{white-space:nowrap;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--sk-carte-label);}
rdr-skipper .sk .sk-ligne dd{display:flex;align-items:center;gap:var(--e2);font-size:15px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:var(--sk-carte-encre);text-align:right;}
rdr-skipper .sk .sk-ligne dd img{width:22px;height:22px;border-radius:50%;object-fit:cover;}





rdr-skipper .sk .sk-citation{position:relative;isolation:isolate;overflow:hidden;padding:var(--e7) var(--e7) var(--e6) calc(var(--e7) + 4px);border-radius:var(--r-carte);
  background:radial-gradient(90% 130% at 100% 0%,color-mix(in srgb,var(--sk-accent) 26%,transparent) 0%,transparent 62%),linear-gradient(135deg,rgba(30,38,76,.94) 0%,rgba(14,17,29,.9) 100%);
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:var(--ombre),inset 4px 0 0 var(--sk-accent),inset 0 1px 0 rgba(255,255,255,.09);}
rdr-skipper .sk .sk-citation-guillemet{position:absolute;z-index:-1;right:clamp(-10px,-1vw,0px);top:50%;width:clamp(170px,19vw,250px);height:auto;transform:translateY(-54%) skewX(-8deg);fill:var(--sk-accent);opacity:.13;}
rdr-skipper .sk .sk-citation p{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(22px,2.2vw,30px);line-height:1.1;color:#fff;max-width:22ch;}
rdr-skipper .sk .sk-citation.sk-citation--longue p{max-width:60ch;font-family:Montserrat,sans-serif;text-transform:none;font-weight:500;font-size:clamp(17px,1.5vw,19px);line-height:1.6;}


rdr-skipper .sk .sk-citation footer{display:flex;align-items:center;gap:var(--e3);margin-top:var(--e5);}
rdr-skipper .sk .sk-citation-visage{display:block;flex:none;width:60px;height:60px;padding:2px;border-radius:50%;background:conic-gradient(from 200deg,var(--sk-accent),rgba(255,255,255,.9) 45%,var(--sk-accent) 70%);}
rdr-skipper .sk .sk-citation-visage span{display:block;width:100%;height:100%;overflow:hidden;border-radius:50%;border:2px solid #171C33;background:#28336B;}
rdr-skipper .sk .sk-citation-visage img{width:100%;height:100%;object-fit:cover;object-position:50% 0;transform:scale(1.5);transform-origin:50% 12%;}
rdr-skipper .sk .sk-citation-qui{display:flex;flex-direction:column;gap:5px;min-width:0;line-height:1.2;}
rdr-skipper .sk .sk-citation-qui b{font-size:var(--t2);font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#fff;}
rdr-skipper .sk .sk-citation-qui small{font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--sk-encre-3);}



rdr-skipper .sk .sk-bio{display:flex;flex-direction:column;gap:var(--e4);padding:var(--e5) var(--e6);border-radius:var(--r-bloc);
  background:rgba(14,17,29,.36);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 0 0 1px rgba(238,242,248,.1);}
rdr-skipper .sk .sk-bio-texte{position:relative;max-width:66ch;color:rgba(238,242,248,.95);font-size:17px;line-height:1.75;}
rdr-skipper .sk .sk-bio-texte p+p{margin-top:var(--e4);}
rdr-skipper .sk .sk-bio-texte.est-coupe{max-height:calc(1.75em * 7);overflow:hidden;
  -webkit-mask-image:linear-gradient(180deg,#000 55%,transparent 100%);mask-image:linear-gradient(180deg,#000 55%,transparent 100%);}
rdr-skipper .sk .sk-lien-plus{align-self:flex-start;display:inline-flex;align-items:center;gap:var(--e2);min-height:44px;font-size:var(--t2);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#fff;
  background-image:linear-gradient(var(--sk-accent),var(--sk-accent));background-size:100% 2px;background-position:0 78%;background-repeat:no-repeat;}
rdr-skipper .sk .sk-profil-pied{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--e5);}
rdr-skipper .sk .sk-porte{display:flex;align-items:center;gap:var(--e3);padding:10px var(--e4) 10px 10px;border-radius:var(--r-btn);background:rgba(14,17,29,.38);box-shadow:inset 0 0 0 1px rgba(238,242,248,.14);}
rdr-skipper .sk .sk-porte-picto{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:12px 3px 12px 3px;background:rgba(93,191,192,.16);color:#9EF4FD;}
rdr-skipper .sk .sk-porte svg{width:24px;height:24px;stroke-width:1.6;}
rdr-skipper .sk .sk-porte span{display:block;font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-porte b{display:block;margin-top:2px;font-size:15px;font-weight:600;line-height:1.3;color:#fff;}
rdr-skipper .sk .sk-reseaux{display:flex;flex-wrap:wrap;gap:var(--e3);}
rdr-skipper .sk .sk-reseau{display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 var(--e5);border-radius:var(--r-btn);
  font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--sk-encre);box-shadow:inset 0 0 0 1.5px rgba(238,242,248,.4);
  background:rgba(14,17,29,.22);transition:background-color .2s ease,box-shadow .2s ease;}
rdr-skipper .sk .sk-reseau svg{width:18px;height:18px;}
rdr-skipper .sk .sk-reseau:hover{background:rgba(14,17,29,.55);box-shadow:inset 0 0 0 1.5px var(--sk-encre);}






rdr-skipper .sk .sk-pref{--sk-coeur:#E63946;position:relative;isolation:isolate;display:flex;flex-direction:column;gap:0;overflow:hidden;padding:0;border-radius:var(--r-bloc);container:skpref / inline-size;
  background:radial-gradient(90% 70% at 100% 0%,rgba(230,57,70,.3) 0%,rgba(230,57,70,0) 70%),linear-gradient(160deg,#2B1831 0%,#18183A 55%,#121834 100%);
  box-shadow:var(--ombre),inset 0 0 0 1px rgba(230,57,70,.32),inset 0 1px 0 rgba(255,255,255,.08);transition:box-shadow .4s ease;}
rdr-skipper .sk .sk-pref.est-prefere{box-shadow:var(--ombre),inset 0 0 0 1.5px rgba(230,57,70,.75),0 0 44px -10px rgba(230,57,70,.55);}
rdr-skipper .sk .sk-pref .est-plein{fill:currentColor;stroke:none;}
rdr-skipper .sk .sk-pref-haut{display:grid;grid-template-columns:112px minmax(0,1fr);align-items:center;gap:var(--e4);}


rdr-skipper .sk .sk-pref-carte{position:relative;overflow:hidden;aspect-ratio:4 / 5.4;container-type:inline-size;border-radius:18px 3px 18px 3px;background:var(--sk-accent);
  box-shadow:0 18px 30px -16px rgba(0,0,0,.9),inset 0 0 0 1px rgba(255,255,255,.28);transform:rotate(-3deg);transition:transform .45s cubic-bezier(.2,.8,.2,1);}
rdr-skipper .sk .sk-pref.est-prefere .sk-pref-carte{transform:rotate(0deg) scale(1.03);box-shadow:0 18px 30px -16px rgba(0,0,0,.9),inset 0 0 0 2px var(--sk-coeur);}
rdr-skipper .sk .sk-pref-carte img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 0;}
rdr-skipper .sk .sk-pref-carte::after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(180deg,rgba(14,17,29,0),rgba(14,17,29,.92));}
rdr-skipper .sk .sk-pref-carte-no{position:absolute;z-index:1;top:6px;left:8px;font-family:Varien,Impact,sans-serif;font-style:italic;font-size:14px;line-height:1;color:rgba(255,255,255,.8);text-shadow:0 2px 8px rgba(0,0,0,.35);}
rdr-skipper .sk .sk-pref-carte figcaption{position:absolute;z-index:1;left:8px;right:8px;bottom:8px;display:flex;flex-direction:column;font-family:Varien,Impact,sans-serif;font-style:italic;font-size:min(13px,calc((100cqi - 16px) / var(--sk-mot,5.6)));line-height:1;text-transform:uppercase;color:#fff;overflow-wrap:normal;word-break:normal;}
rdr-skipper .sk .sk-pref-carte figcaption b{font-weight:400;}
rdr-skipper .sk .sk-insecable{white-space:nowrap;}




rdr-skipper .sk .sk-pref-ruban{position:absolute;z-index:2;top:6px;left:6px;right:6px;display:flex;align-items:center;justify-content:center;padding:4px 5px;border-radius:8px 2px 8px 2px;white-space:nowrap;
  background:var(--sk-coeur);color:#fff;font-style:normal;font-size:7px;font-weight:800;letter-spacing:.07em;line-height:1;text-transform:uppercase;box-shadow:0 4px 10px -4px rgba(0,0,0,.6);}
rdr-skipper .sk .sk-pref-ruban svg{display:none;}



rdr-skipper .sk .sk-pref[data-mode="invite"] .sk-pref-action[data-sk-prefere] svg,
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-kicker svg{transform-origin:50% 55%;animation:sk-coeur-bat 2.8s ease-in-out infinite;}
@keyframes sk-coeur-bat{
  0%,100%{transform:scale(1);filter:drop-shadow(0 0 0 rgba(255,77,109,0));}
  6%{transform:scale(1.3);filter:drop-shadow(0 0 10px rgba(255,77,109,.85));}
  14%{transform:scale(.98);filter:drop-shadow(0 0 3px rgba(255,77,109,.3));}
  21%{transform:scale(1.16);filter:drop-shadow(0 0 7px rgba(255,77,109,.6));}
  31%{transform:scale(1);filter:drop-shadow(0 0 0 rgba(255,77,109,0));}
}
@media (prefers-reduced-motion:reduce){rdr-skipper .sk .sk-pref svg{animation:none!important;}}
rdr-skipper .sk .sk-pref-textes{display:flex;flex-direction:column;gap:var(--e2);min-width:0;}
rdr-skipper .sk .sk-pref-kicker{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#FF6B76;}
rdr-skipper .sk .sk-pref-kicker svg{width:14px;height:14px;}
rdr-skipper .sk .sk-pref-titre{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:22px;line-height:1.05;text-transform:uppercase;color:#fff;text-wrap:balance;}
rdr-skipper .sk .sk-pref-chiffres{display:grid;grid-template-columns:repeat(2,minmax(0,max-content));gap:var(--e2) var(--e4);margin-top:2px;}
rdr-skipper .sk .sk-pref-chiffres div{display:flex;flex-direction:column;gap:2px;}
rdr-skipper .sk .sk-pref-chiffres dd{font-family:Varien,Impact,sans-serif;font-style:italic;font-size:26px;line-height:1;color:var(--sk-jaune);}
rdr-skipper .sk .sk-pref-chiffres dd sup{font-size:.5em;vertical-align:.8em;line-height:0;}
rdr-skipper .sk .sk-pref-chiffres dt{font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--sk-encre-3);}












rdr-skipper .sk .sk-pref-corps{display:flex;flex-direction:column;gap:var(--e4);padding:var(--e5) var(--e5) var(--e5);}
rdr-skipper .sk .sk-pref-texte{font-size:13px;line-height:1.5;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-pref-date{margin-top:2px;font-size:10px;line-height:1.4;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-pref-zero{font-size:12px;line-height:1.4;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-pref-zero-choisi,rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-zero-invite{display:none;}
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-zero-choisi{display:inline;}
rdr-skipper .sk .sk-pref-note{font-size:12px;line-height:1.5;color:var(--sk-encre-3);}
rdr-skipper .sk .sk-pref-actuel{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:14px 3px 14px 3px;background:rgba(230,57,70,.1);box-shadow:inset 0 0 0 1px rgba(230,57,70,.2);font-size:13px;line-height:1.35;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-pref-actuel svg{flex:none;width:15px;height:15px;color:#FF6B76;}
rdr-skipper .sk .sk-pref-actuel b{color:#fff;font-weight:700;}
rdr-skipper .sk .sk-pref-barre{display:flex;align-items:stretch;background:rgba(8,10,24,.46);box-shadow:inset 0 1px 0 rgba(238,242,248,.1);}
rdr-skipper .sk .sk-pref-action{position:relative;flex:1 1 0;min-width:0;display:flex;align-items:center;justify-content:center;gap:8px;min-height:56px;padding:6px var(--e3);
  font-size:11px;font-weight:800;letter-spacing:.1em;line-height:1.2;text-transform:uppercase;text-align:center;color:var(--sk-encre-2);transition:background-color .2s ease,color .2s ease,box-shadow .2s ease;}
rdr-skipper .sk .sk-pref-action:not(.est-premier){box-shadow:inset 1px 0 0 rgba(238,242,248,.1);}
rdr-skipper .sk .sk-pref-action svg{flex:none;width:16px;height:16px;}
 
rdr-skipper .sk .sk-pref-action.est-dernier{padding-right:calc(var(--e3) + 14px);}
rdr-skipper .sk .sk-pref-action:hover{background:rgba(238,242,248,.07);color:#fff;}
rdr-skipper .sk .sk-pref-action:focus-visible{outline:2px solid #fff;outline-offset:-4px;}



rdr-skipper .sk .sk-pref-action.est-principal{flex-grow:1.35;background:#D8323F;color:#fff;}
rdr-skipper .sk .sk-pref-action.est-principal:hover{background:#C92A37;}
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-action.est-principal{flex-grow:1.3;background:rgba(216,50,63,.24);color:#fff;}



rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-action.est-principal{flex-grow:1;background:transparent;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-action.est-principal svg{color:#F2636E;}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-action.est-principal:hover{background:rgba(216,50,63,.2);color:#fff;}
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-action.est-principal:hover{background:#D8323F;}
rdr-skipper .sk .sk-pref-action.est-retrait{color:var(--sk-encre-3);}
rdr-skipper .sk .sk-pref-action.est-retrait.est-armee{background:#D8323F;color:#fff;}


@container skpref (max-width:540px){
  rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-action{flex-direction:column;gap:5px;min-height:62px;font-size:10px;letter-spacing:.08em;}
   
  rdr-skipper .sk .sk-pref[data-mode="invite"] .sk-pref-action{gap:6px;padding-left:10px;padding-right:10px;letter-spacing:.06em;}
  rdr-skipper .sk .sk-pref[data-mode="invite"] .sk-pref-action.est-dernier{padding-right:22px;}
}
rdr-skipper .sk .sk-pref-action[aria-disabled="true"]{pointer-events:none;opacity:.55;}
rdr-skipper .sk .sk-pref-action[aria-busy="true"]{opacity:1;cursor:progress;}
rdr-skipper .sk .sk-pref-action[aria-busy="true"] svg{animation:sk-tourne 1s linear infinite;}
@keyframes sk-tourne{to{rotate:360deg;}}
rdr-skipper .sk .sk-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}


rdr-skipper .sk .sk-pref[data-mode="discret"]{background:linear-gradient(160deg,rgba(38,30,56,.66) 0%,rgba(20,24,50,.74) 100%);box-shadow:var(--ombre),inset 0 0 0 1px rgba(230,57,70,.16);}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-corps{gap:var(--e3);padding-bottom:var(--e4);}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-haut{grid-template-columns:72px minmax(0,1fr);}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-carte{transform:none;filter:saturate(.7) brightness(.92);box-shadow:0 12px 22px -14px rgba(0,0,0,.9),inset 0 0 0 1px rgba(255,255,255,.18);}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-carte figcaption{font-size:min(10px,calc((100cqi - 12px) / var(--sk-mot,5.6)));left:6px;bottom:6px;}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-carte-no{font-size:11px;}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-kicker{color:rgba(255,138,147,.8);}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-titre{font-size:17px;}
rdr-skipper .sk .sk-pref[data-mode="discret"] .sk-pref-chiffres dd{font-size:21px;}
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-corps{gap:var(--e3);}
rdr-skipper .sk .sk-pref.est-prefere .sk-pref-carte-no{display:none;}
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-haut{grid-template-columns:84px minmax(0,1fr);}
rdr-skipper .sk .sk-pref[data-mode="choisi"] .sk-pref-titre{font-size:19px;}
 
rdr-skipper .sk .sk-prono{display:flex;flex-direction:column;align-items:flex-start;gap:var(--e2);margin-top:var(--e4);padding:var(--e5);border-radius:var(--r-bloc);
  background:rgba(14,17,29,.42);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 0 0 1px rgba(158,244,253,.22);}
rdr-skipper .sk .sk-prono-kicker{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#9EF4FD;}
rdr-skipper .sk .sk-prono-kicker svg{width:14px;height:14px;}
rdr-skipper .sk .sk-prono-titre{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:20px;line-height:1.05;text-transform:uppercase;color:#fff;}
rdr-skipper .sk .sk-prono-texte{font-size:13px;line-height:1.5;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-prono-infos{display:flex;flex-wrap:wrap;gap:6px;}
rdr-skipper .sk .sk-prono-infos span{padding:3px 9px;border-radius:8px 2px 8px 2px;background:rgba(158,244,253,.1);font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9EF4FD;}
rdr-skipper .sk .sk-prono-btn{margin-top:var(--e1);min-height:46px;}
rdr-skipper .sk .sk-prono-btn svg{width:16px;height:16px;}

 




















rdr-skipper .sk .sk-palmares{background-color:#16355D;background-repeat:no-repeat;
  background-image:linear-gradient(180deg,#16355D 0,#16355D 80px,rgba(22,53,93,.9) 160px,rgba(22,53,93,.65) 240px,rgba(22,53,93,.38) 320px,rgba(22,53,93,.16) 400px,rgba(22,53,93,0) 480px),
  linear-gradient(0deg,#16355D 0,#16355D 60px,rgba(22,53,93,.9) 130px,rgba(22,53,93,.62) 200px,rgba(22,53,93,.34) 270px,rgba(22,53,93,.12) 340px,rgba(22,53,93,0) 400px),
  linear-gradient(323deg,rgba(22,53,93,.8) 0%,rgba(86,188,246,.8) 100%),linear-gradient(var(--sk-abysse),var(--sk-abysse));
  background-size:100% 100%,100% 100%,100% calc(100% - 8px),100% calc(100% - 8px);background-position:0 0,0 0,0 4px,0 4px;}
 
rdr-skipper .sk .sk-palmares .sk-sec-fond{opacity:.34;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 560px,#000 calc(100% - 420px),transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 560px,#000 calc(100% - 420px),transparent 100%);}
rdr-skipper .sk .sk-profil .sk-sec-fond{-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent 100%);mask-image:linear-gradient(180deg,#000 70%,transparent 100%);}
rdr-skipper .sk .sk-chiffres{display:flex;flex-wrap:wrap;gap:var(--e4) var(--e7);margin:calc(var(--e5) * -1) 0 var(--e6);}
rdr-skipper .sk .sk-chiffres li{display:flex;align-items:baseline;gap:var(--e2);font-size:var(--t2);font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-chiffres b{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:clamp(38px,4.4vw,56px);line-height:1;color:#fff;letter-spacing:0;text-transform:none;}
rdr-skipper .sk .sk-chiffres li.sk-chiffre--or b{color:var(--sk-or);}
rdr-skipper .sk .sk-chiffres li.sk-chiffre--rdr b{font-family:RDRNoir,Montserrat,sans-serif;font-weight:900;letter-spacing:-.05em;color:var(--sk-jaune);}
rdr-skipper .sk .sk-filtres{display:flex;flex-wrap:wrap;gap:var(--e2);margin-bottom:var(--e5);}
rdr-skipper .sk .sk-filtre{display:inline-flex;align-items:center;gap:var(--e2);min-height:44px;padding:0 var(--e4);border-radius:var(--r-btn);
  font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sk-encre);box-shadow:inset 0 0 0 1.5px rgba(238,242,248,.28);background:rgba(25,29,49,.82);transition:background-color .2s ease;}
rdr-skipper .sk .sk-filtre em{font-style:normal;font-weight:600;opacity:.7;}
@media (hover:hover){rdr-skipper .sk .sk-filtre:not([aria-pressed="true"]):hover{background:rgba(25,29,49,.96);}}
rdr-skipper .sk .sk-filtre[aria-pressed="true"]{background:#fff;color:var(--sk-carte-encre);box-shadow:none;}







rdr-skipper .sk .sk-palm-liste{display:flex;flex-direction:column;gap:var(--e4);}
rdr-skipper .sk .sk-palm{--sk-plaque:clamp(150px,15vw,204px);--sk-biais:30px;
  position:relative;isolation:isolate;display:grid;grid-template-columns:clamp(136px,12vw,166px) minmax(0,1fr) var(--sk-plaque);align-items:stretch;
  min-height:136px;border-radius:var(--r-bloc);
  background:linear-gradient(115deg,rgba(26,48,92,.96) 0%,rgba(22,28,52,.96) 56%,rgba(17,21,40,.97) 100%);
  box-shadow:0 24px 44px -32px rgba(0,0,0,.95),inset 0 1px 0 rgba(255,255,255,.07),inset 0 0 0 1px rgba(238,242,248,.06);
  transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease;}
@media (hover:hover){rdr-skipper .sk .sk-palm:hover{transform:translateY(-2px);box-shadow:0 30px 52px -30px rgba(0,0,0,.95),inset 0 1px 0 rgba(255,255,255,.1),inset 0 0 0 1px rgba(238,242,248,.14);}}
 
rdr-skipper .sk .sk-palm-annee{position:relative;display:flex;align-items:center;padding-left:clamp(26px,2.6vw,38px);
  font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;font-size:clamp(30px,2.8vw,40px);line-height:1;color:#3576A8;letter-spacing:-.01em;}
 
rdr-skipper .sk .sk-palm-annee::after{content:"";position:absolute;top:20%;bottom:20%;right:0;width:1px;background:linear-gradient(180deg,rgba(238,242,248,0),rgba(238,242,248,.18),rgba(238,242,248,0));}


rdr-skipper .sk .sk-palm-an{position:relative;display:inline-block;isolation:isolate;}
rdr-skipper .sk .sk-palm-an > span{position:relative;z-index:1;}
 
rdr-skipper .sk .sk-palm.est-suite .sk-palm-an > span{color:transparent;-webkit-text-stroke:1.2px rgba(62,130,184,.8);}




rdr-skipper .sk .sk-palm-tymal{position:absolute;z-index:0;left:50%;bottom:-.1em;height:2.7em;width:auto;max-width:none;transform:translateX(-50%);
  pointer-events:none;filter:drop-shadow(0 10px 16px rgba(0,0,0,.32));}
rdr-skipper .sk .sk-palm--rdr{background:radial-gradient(60% 120% at 0% 100%,rgba(252,241,80,.1) 0%,rgba(252,241,80,0) 60%),linear-gradient(115deg,rgba(26,52,98,.97) 0%,rgba(24,31,62,.97) 60%,rgba(18,23,44,.98) 100%);
  box-shadow:0 24px 44px -32px rgba(0,0,0,.95),inset 0 0 0 1.5px rgba(252,241,80,.34);}
rdr-skipper .sk .sk-palm--rdr .sk-palm-annee{align-items:flex-start;min-height:3.3em;}
rdr-skipper .sk .sk-palm--rdr .sk-palm-an{margin-top:1.25em;}
rdr-skipper .sk .sk-palm-corps{display:flex;flex-direction:column;justify-content:center;gap:var(--e3);min-width:0;padding:var(--e5) var(--e5) var(--e5) clamp(24px,2.6vw,36px);}
rdr-skipper .sk .sk-palm-tete{display:flex;align-items:center;gap:var(--e4);min-width:0;}
 


rdr-skipper .sk .sk-palm-logo{display:grid;place-items:center;flex:none;width:136px;height:56px;}
rdr-skipper .sk .sk-palm-logo img{display:block;width:var(--sk-logo-l,96px);height:var(--sk-logo-h,40px);max-width:100%;object-fit:contain;}
rdr-skipper .sk .sk-palm-titres{display:flex;flex-direction:column;gap:7px;min-width:0;}
rdr-skipper .sk .sk-palm--logo .sk-palm-titres{padding-left:var(--e4);box-shadow:inset 1px 0 0 rgba(238,242,248,.16);}
rdr-skipper .sk .sk-palm-course{font-family:Varien,Impact,sans-serif;font-style:normal;font-size:15px;letter-spacing:.22em;text-transform:uppercase;color:#fff;line-height:1.3;}
rdr-skipper .sk .sk-palm--rdr .sk-palm-course{color:var(--sk-jaune);}
 
rdr-skipper .sk .sk-palm-meta{display:flex;flex-wrap:wrap;align-items:center;row-gap:4px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(238,242,248,.6);}
rdr-skipper .sk .sk-palm-meta span+span::before{content:"";display:inline-block;width:4px;height:4px;margin:0 10px;vertical-align:.2em;background:currentColor;transform:rotate(45deg);}
rdr-skipper .sk .sk-palm-desc{max-width:68ch;font-size:15px;line-height:1.55;color:var(--sk-encre-2);}
 
rdr-skipper .sk .sk-palm-plaque{position:relative;isolation:isolate;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:5px;overflow:hidden;
  padding:var(--e4) clamp(26px,2.6vw,38px) var(--e4) calc(var(--sk-biais) + 10px);border-radius:0 4px 44px 0;text-align:right;color:rgba(238,242,248,.95);
  clip-path:polygon(var(--sk-biais) 0,100% 0,100% 100%,0 100%);
  background:linear-gradient(160deg,rgba(238,242,248,.085) 0%,rgba(238,242,248,.025) 100%);}
 
rdr-skipper .sk .sk-palm-plaque::after{content:"";position:absolute;z-index:-1;left:0;top:0;bottom:0;width:calc(var(--sk-biais) + 1px);
  background:linear-gradient(to bottom right,transparent calc(50% - 1.5px),rgba(238,242,248,.22) 50%,transparent calc(50% + 1.5px));}
 
rdr-skipper .sk .sk-palm-plaque::before{content:"";position:absolute;z-index:-1;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.22) 48%,transparent 60%) no-repeat;background-size:260% 100%;background-position:130% 0;transition:background-position .9s cubic-bezier(.2,.7,.2,1);}
@media (hover:hover){rdr-skipper .sk .sk-palm:hover .sk-palm-plaque::before{background-position:-30% 0;}}
rdr-skipper .sk .sk-palm--p1 .sk-palm-plaque{background:linear-gradient(155deg,#FFF8B8 0%,#FCF150 40%,#DDBE2B 100%);color:#15182B;}
rdr-skipper .sk .sk-palm--p2 .sk-palm-plaque{background:linear-gradient(155deg,#F5F9FD 0%,#CDDCEE 46%,#9AB5D4 100%);color:#15182B;}
rdr-skipper .sk .sk-palm--p3 .sk-palm-plaque{background:linear-gradient(155deg,#F7CDA8 0%,#D5905A 48%,#A95F30 100%);color:#15182B;}
rdr-skipper .sk :is(.sk-palm--p1,.sk-palm--p2,.sk-palm--p3) .sk-palm-plaque::after{display:none;}
rdr-skipper .sk .sk-palm--rdr:not(.sk-palm--p1,.sk-palm--p2,.sk-palm--p3) .sk-palm-plaque{background:linear-gradient(160deg,rgba(252,241,80,.18) 0%,rgba(252,241,80,.04) 100%);color:var(--sk-jaune);}
rdr-skipper .sk .sk-palm-pos{font-family:RDRNoir,Montserrat,sans-serif;font-style:italic;font-weight:900;text-transform:none;font-size:clamp(44px,4.2vw,62px);line-height:.9;letter-spacing:-.05em;white-space:nowrap;}
rdr-skipper .sk .sk-palm-pos sup{font-size:.42em;line-height:0;vertical-align:.98em;margin-left:.05em;letter-spacing:0;}
rdr-skipper .sk .sk-palm-podium{font-size:10px;font-weight:800;letter-spacing:.24em;text-transform:uppercase;opacity:.8;}
 
rdr-skipper .sk .sk-palm-meta span.sk-palm-mention{display:inline-flex;align-items:center;gap:5px;color:rgba(238,242,248,.9);}
rdr-skipper .sk .sk-palm-mention svg{width:13px;height:13px;color:#9EF4FD;}
rdr-skipper .sk .sk-palm--p1 .sk-palm-mention.est-temps{color:var(--sk-jaune);}
 
rdr-skipper .sk .sk-palm-marque{display:flex;align-items:center;justify-content:center;flex:none;width:136px;min-height:56px;padding:0 4px;text-align:center;
  font-family:Varien,Impact,sans-serif;font-style:italic;font-size:var(--sk-marque-t,15px);line-height:1.02;letter-spacing:.02em;text-transform:uppercase;color:rgba(255,255,255,.94);text-wrap:balance;overflow-wrap:normal;word-break:normal;}
rdr-skipper .sk .sk-palm--rdr .sk-palm-marque{color:var(--sk-jaune);}
rdr-skipper .sk .sk-palm--marque .sk-palm-titres{padding-left:var(--e4);box-shadow:inset 1px 0 0 rgba(238,242,248,.16);}
rdr-skipper .sk .sk-palm--marque .sk-palm-course{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;}
rdr-skipper .sk .sk-palm--marque .sk-palm-titres:not(:has(.sk-palm-meta)){box-shadow:none;}
 
rdr-skipper .sk .sk-palm--sans-place{grid-template-columns:clamp(136px,12vw,166px) minmax(0,1fr);}
rdr-skipper .sk .sk-palm--sans-place .sk-palm-plaque{display:none;}
 
rdr-skipper .sk .sk-palm--fanion .sk-palm-corps{padding-right:calc(var(--e5) + 66px);}
rdr-skipper .sk .sk-palm-fanion{position:absolute;z-index:2;top:-10px;right:calc(var(--sk-plaque) + var(--e2));height:74px;width:auto;filter:drop-shadow(0 10px 14px rgba(0,0,0,.4));pointer-events:none;}
rdr-skipper .sk .sk-palm--sans-place .sk-palm-fanion{right:var(--e5);}
rdr-skipper .sk .sk-palm-vide{padding:var(--e5);font-size:15px;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-palm-plus{margin-top:var(--e5);}

 
rdr-skipper .sk .sk-bateau{background:linear-gradient(360deg,#4F5BA5 47.37%,#16355D 100%);}
rdr-skipper .sk .sk-bateau-grille{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(28px,3.5vw,56px);align-items:start;}







rdr-skipper .sk .sk-bateau-visuel{position:relative;margin:0;}
rdr-skipper .sk .sk-bateau-cadre{position:relative;isolation:isolate;aspect-ratio:var(--sk-bateau-rapport,1.6);border-radius:var(--r-bloc);overflow:hidden;background:#1B2550;
  box-shadow:var(--ombre),inset 0 0 0 1px rgba(255,255,255,.14);}
rdr-skipper .sk .sk-bateau-flou{position:absolute;z-index:-1;inset:-8%;width:116%;height:116%;max-width:none;object-fit:cover;filter:blur(28px) saturate(1.15);opacity:.7;}
rdr-skipper .sk .sk-bateau-img{width:100%;height:100%;object-fit:contain;transition:opacity .25s ease;}
rdr-skipper .sk .sk-bateau-img.est-change{opacity:0;}
rdr-skipper .sk .sk-bateau-visuel .sk-ecusson{top:-14px;right:var(--e5);}
rdr-skipper .sk .sk-bateau-choix{display:flex;flex-wrap:wrap;gap:var(--e3);margin-top:var(--e4);}
rdr-skipper .sk .sk-bateau-choix button{display:block;width:clamp(96px,10vw,140px);aspect-ratio:16 / 10;overflow:hidden;border-radius:14px 3px 14px 3px;opacity:.6;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.16);transition:opacity .2s ease,box-shadow .2s ease;}
rdr-skipper .sk .sk-bateau-choix img{width:100%;height:100%;object-fit:cover;}
rdr-skipper .sk .sk-bateau-choix button:hover{opacity:.9;}
rdr-skipper .sk .sk-bateau-choix button[aria-pressed="true"]{opacity:1;box-shadow:0 0 0 2px var(--sk-accent);}
rdr-skipper .sk .sk-fiche{padding:var(--e5) var(--e6) var(--e3);}
rdr-skipper .sk .sk-echelle{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(24px,3vw,48px);align-items:center;margin-top:clamp(64px,7vw,104px);
  padding:clamp(24px,3vw,40px);border-radius:var(--r-bloc);background:rgba(10,13,28,.6);box-shadow:inset 0 0 0 1px rgba(238,242,248,.12);}
rdr-skipper .sk .sk-defs{position:absolute;width:0;height:0;overflow:hidden;}
 
rdr-skipper .sk .sk-echelle figure{position:relative;isolation:isolate;}
rdr-skipper .sk .sk-echelle figure::before{content:"";position:absolute;z-index:-1;inset:-6% -4%;
  background-image:linear-gradient(rgba(158,244,253,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(158,244,253,.07) 1px,transparent 1px);background-size:28px 28px;
  -webkit-mask-image:radial-gradient(closest-side,#000 40%,transparent 100%);mask-image:radial-gradient(closest-side,#000 40%,transparent 100%);}
rdr-skipper .sk .sk-echelle figure img{width:120%;max-width:none;height:auto;margin:-12% -10% -14%;object-fit:contain;filter:url(#sk-filtre-plan) drop-shadow(0 18px 24px rgba(0,0,0,.35));}
rdr-skipper .sk .sk-echelle-textes{display:flex;flex-direction:column;gap:var(--e5);}
rdr-skipper .sk .sk-echelle-chiffres{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--e3);}
rdr-skipper .sk .sk-echelle-chiffres li{display:flex;flex-direction:column;gap:var(--e1);padding:var(--e4) var(--e5);border-radius:var(--r-carte);background:rgba(79,91,165,.4);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);}
rdr-skipper .sk .sk-echelle-chiffres b{font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;white-space:nowrap;font-size:clamp(32px,3.2vw,46px);line-height:1;color:#9EF4FD;letter-spacing:-.01em;}
rdr-skipper .sk .sk-echelle-chiffres b small{font-size:.46em;margin-left:4px;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-echelle-chiffres span{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--sk-encre-2);}
rdr-skipper .sk .sk-echelle-note{font-size:var(--t2);color:var(--sk-encre-3);}

 
rdr-skipper .sk .sk-medias{background:#4F5BA5;padding-bottom:calc(var(--e9) + 40px);}
 
rdr-skipper .sk .sk-medias::after{content:"";position:absolute;left:-10%;right:-10%;bottom:-1px;height:70px;background:var(--sk-abysse);border-radius:50% 50% 0 0 / 100% 100% 0 0;}



rdr-skipper .sk .sk-suivre{background:var(--sk-abysse);padding-top:var(--e8);margin-top:-1px;}
rdr-skipper .sk .sk-promo{margin-top:var(--e5);}



rdr-skipper .sk .sk-classe{background:linear-gradient(180deg,var(--sk-abysse) 0%,#101A2E 100%);padding-top:0;padding-bottom:var(--e7);content-visibility:auto;contain-intrinsic-size:auto 720px;}
rdr-skipper .sk .sk-classe .sk-tete{margin-bottom:var(--e5);}
rdr-skipper .sk .sk-classe .sk-titre{font-size:clamp(36px,4.6vw,64px);}
rdr-skipper .sk skipper-gallery,rdr-skipper .sk skipper-outro,rdr-skipper .sk skippers-carousel{display:block;width:100%;}



rdr-skipper .sk skippers-carousel{padding:0;}

 











rdr-skipper .sk [data-sk-reveal]{opacity:0;translate:0 26px;filter:blur(10px);
  transition:opacity .9s cubic-bezier(.22,1,.36,1),translate .9s cubic-bezier(.22,1,.36,1),filter .7s ease;transition-delay:calc(var(--sk-i,0) * 90ms);}
rdr-skipper .sk [data-sk-reveal].est-vu{opacity:1;translate:none;filter:none;}
@media (pointer:coarse){rdr-skipper .sk [data-sk-reveal]{filter:blur(5px);}}
@media (prefers-reduced-motion:reduce){rdr-skipper .sk [data-sk-reveal]{opacity:1;translate:none;filter:none;transition:none;}}






rdr-skipper .sk .sk-actus{background:#16355D;}








rdr-skipper .sk .sk-actus-liste{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:minmax(236px,auto);gap:var(--e4);}
rdr-skipper .sk .sk-actus-liste .sk-actu{grid-column:span 5;}
rdr-skipper .sk .sk-actus-liste .sk-actu.est-une{grid-column:span 7;}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .sk-actu.est-une{grid-column:1 / -1;}
rdr-skipper .sk .sk-actus-liste[data-n="1"]{grid-auto-rows:auto;}
rdr-skipper .sk .sk-actus-liste[data-n="2"]{grid-auto-rows:minmax(400px,auto);}
rdr-skipper .sk .sk-actus-liste[data-n="2"] .sk-actu.est-une,rdr-skipper .sk .sk-actus-liste[data-n="2"] .sk-actu{grid-column:span 6;}




rdr-skipper .sk .sk-actus-liste[data-n="1"] .sk-actu-lien{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);align-items:stretch;background:#0F2447;}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .sk-actu-media{position:relative;inset:auto;z-index:auto;aspect-ratio:var(--sk-actu-format,1.5);min-height:0;}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .sk-actu-voile{display:none;}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .est-une .sk-actu-corps{justify-content:center;max-width:none;background:#0F2447;padding:var(--e7) var(--e7) var(--e7) calc(var(--e6) + 6px);}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .est-une .sk-actu-corps::before{top:var(--e7);bottom:var(--e7);}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .est-une .sk-actu-extrait{-webkit-line-clamp:4;}
rdr-skipper .sk .sk-actus-liste[data-n="1"] .est-une .sk-actu-titre{-webkit-line-clamp:4;}
rdr-skipper .sk .sk-actus-liste[data-n="3"] .sk-actu.est-une,rdr-skipper .sk .sk-actus-liste[data-n="5"] .sk-actu.est-une,rdr-skipper .sk .sk-actus-liste[data-n="6"] .sk-actu.est-une{grid-row:span 2;}
rdr-skipper .sk .sk-actus-liste[data-n="4"]{grid-auto-rows:minmax(196px,auto);}
rdr-skipper .sk .sk-actus-liste[data-n="4"] .sk-actu.est-une{grid-row:span 3;}
rdr-skipper .sk .sk-actus-liste[data-n="5"] .sk-actu:nth-child(n+4){grid-column:span 6;}
rdr-skipper .sk .sk-actus-liste[data-n="6"] .sk-actu:nth-child(n+4){grid-column:span 4;}



rdr-skipper .sk:not(.sous-600) .sk-actus-liste[data-sk-reveal],rdr-skipper .sk.sous-600 .sk-actu[data-sk-reveal]{opacity:1;translate:none;filter:none;transition:none;}
rdr-skipper .sk .sk-actu{display:flex;min-width:0;}
rdr-skipper .sk .sk-actu-lien{position:relative;isolation:isolate;display:flex;flex-direction:column;justify-content:flex-end;width:100%;overflow:hidden;border-radius:var(--r-carte);background:#0B1830;box-shadow:var(--ombre);}
rdr-skipper .sk .sk-actu-lien:focus-visible{outline:2px solid #fff;outline-offset:3px;}
rdr-skipper .sk .sk-actu-media{position:absolute;inset:0;z-index:-2;overflow:hidden;background:#0B1830;}
rdr-skipper .sk .sk-actu-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:scale .9s cubic-bezier(.22,1,.36,1);}
rdr-skipper .sk .sk-actu-voile{position:absolute;inset:0;z-index:-1;background:linear-gradient(to top,rgba(4,10,28,.97) 0%,rgba(4,10,28,.64) 46%,rgba(4,10,28,.08) 100%);transition:opacity .4s ease;}
rdr-skipper .sk .est-une .sk-actu-voile{background:linear-gradient(to top,rgba(4,10,28,.96) 0%,rgba(4,10,28,.6) 40%,rgba(4,10,28,0) 74%);}
rdr-skipper .sk .sk-actu-aller{position:absolute;top:var(--e4);right:var(--e4);display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:rgba(4,10,28,.42);box-shadow:inset 0 0 0 1px rgba(255,255,255,.34);color:#fff;
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:background-color .3s ease,color .3s ease,translate .35s cubic-bezier(.22,1,.36,1);}
rdr-skipper .sk .sk-actu-aller svg{width:16px;height:16px;}
rdr-skipper .sk .est-une .sk-actu-aller{top:var(--e5);right:var(--e5);width:48px;height:48px;}
rdr-skipper .sk .sk-actu-corps{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:var(--e2);padding:var(--e5) var(--e5) var(--e5) calc(var(--e5) + 3px);transition:translate .45s cubic-bezier(.22,1,.36,1);}
rdr-skipper .sk .est-une .sk-actu-corps{gap:var(--e3);max-width:760px;padding:var(--e7) var(--e7) var(--e6) calc(var(--e6) + 6px);}
rdr-skipper .sk .sk-actu-corps::before{content:"";position:absolute;left:0;top:var(--e5);bottom:var(--e5);width:3px;border-radius:0 2px 2px 0;background:var(--cat-vif,#0E9AAA);}
rdr-skipper .sk .est-une .sk-actu-corps::before{top:var(--e7);bottom:var(--e6);}
rdr-skipper .sk .sk-actu-meta{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;font-size:11px;font-weight:500;color:rgba(255,255,255,.76);}
rdr-skipper .sk .sk-actu-cat,rdr-skipper .sk .sk-actu-neuf{display:inline-flex;align-items:center;gap:5px;border-radius:6px 2px 6px 2px;font-weight:800;text-transform:uppercase;white-space:nowrap;}
rdr-skipper .sk .sk-actu-cat{padding:4px 9px;font-size:9.5px;letter-spacing:.1em;}
rdr-skipper .sk .sk-actu-cat svg{width:11px;height:11px;stroke-width:2.4;}
rdr-skipper .sk .sk-actu-neuf{padding:3px 9px;font-size:9px;letter-spacing:.12em;background:#FCF150;color:#0A1A35;}
rdr-skipper .sk .sk-actu-neuf::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;}
rdr-skipper .sk .sk-actu-duree{display:inline-flex;align-items:center;gap:4px;}
rdr-skipper .sk .sk-actu-duree svg{width:12px;height:12px;opacity:.75;}
rdr-skipper .sk .sk-actu-titre{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-family:Varien,Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase;font-size:clamp(15px,1.3vw,18px);line-height:1.14;color:#fff;text-wrap:balance;}
rdr-skipper .sk .est-une .sk-actu-titre{font-size:clamp(24px,2.4vw,36px);line-height:1.04;}
rdr-skipper .sk .sk-actu-extrait{display:none;}
rdr-skipper .sk .est-une .sk-actu-extrait{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-width:620px;font-size:14px;line-height:1.6;color:rgba(255,255,255,.8);}
@media (hover:hover){
  rdr-skipper .sk .sk-actu-lien:hover .sk-actu-img{scale:1.05;}
  rdr-skipper .sk .sk-actu-lien:hover .sk-actu-voile{opacity:.88;}
  rdr-skipper .sk .sk-actu-lien:hover .sk-actu-corps{translate:0 -6px;}
  rdr-skipper .sk .sk-actu-lien:hover .sk-actu-aller{background:#fff;color:#0A1A35;translate:3px 0;}
}


rdr-skipper .sk .est-classique .sk-actu-lien{justify-content:flex-start;background:#0F2447;}
rdr-skipper .sk .est-classique .sk-actu-media{position:relative;inset:auto;z-index:auto;flex:1 1 auto;min-height:104px;}
rdr-skipper .sk .est-classique .sk-actu-flou{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;scale:1.3;filter:blur(18px) saturate(1.15) brightness(.62);}
rdr-skipper .sk .est-classique .sk-actu-img{object-fit:contain;}
rdr-skipper .sk .est-classique .sk-actu-voile{display:none;}
rdr-skipper .sk .est-classique .sk-actu-corps{flex:none;background:#0F2447;}
rdr-skipper .sk .est-classique:not(.est-une) .sk-actu-titre{-webkit-line-clamp:2;}
rdr-skipper .sk .est-une.est-classique .sk-actu-corps{max-width:none;padding:var(--e5) var(--e6) var(--e6) calc(var(--e5) + 6px);}
rdr-skipper .sk .est-une.est-classique .sk-actu-corps::before{top:var(--e5);bottom:var(--e6);}
rdr-skipper .sk .sk-actus-points{display:none;}
rdr-skipper .sk .sk-actus-pied{display:flex;justify-content:center;margin-top:var(--e7);}






body > .rdr-sk-toast{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom,0px));z-index:99999;transform:translate(-50%,24px);opacity:0;pointer-events:none;max-width:calc(100vw - 32px);box-sizing:border-box;
  padding:14px 22px;border-radius:14px 2px 14px 2px;background:#fff;color:#191D31;font:700 14px/1.4 Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:0;text-align:center;box-shadow:0 18px 40px -16px rgba(0,0,0,.6);transition:opacity .25s ease,transform .25s ease;}
body > .rdr-sk-toast.est-visible{opacity:1;transform:translate(-50%,0);}
body > .rdr-sk-toast.a-une-action{display:flex;align-items:center;gap:14px;padding:10px 10px 10px 22px;text-align:left;}
body > .rdr-sk-toast.a-une-action.est-visible{pointer-events:auto;}
body > .rdr-sk-toast button{flex:none;min-height:40px;padding:0 14px;border:0;border-radius:10px 2px 10px 2px;background:#191D31;color:#fff;font:800 11px/1 Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;}
body > .rdr-sk-toast button:hover{background:#0B1B33;}
@media (prefers-reduced-motion:reduce){body > .rdr-sk-toast{transition:none;}}

 


rdr-skipper .sk.sous-1280 .sk-nav-lien{padding:0 10px;gap:0;}
rdr-skipper .sk.sous-1280 .sk-nav-lien svg{display:none;}
rdr-skipper .sk.sous-1100 .sk-nav-lien{padding:0 var(--e2);letter-spacing:.08em;}
rdr-skipper .sk.sous-1100 .sk-nav-btn span{display:none;}
rdr-skipper .sk.sous-1100 .sk-nav-btn{padding:0;width:44px;justify-content:center;}
rdr-skipper .sk.sous-1100 .sk--colle .sk-nav-id,rdr-skipper .sk.sous-1100.sk--colle .sk-nav-id{max-width:220px;}
rdr-skipper .sk.sous-1100 .sk-nav-qui small{display:none;}
rdr-skipper .sk.sous-860 .sk-profil-grille,rdr-skipper .sk.sous-860 .sk-bateau-grille,rdr-skipper .sk.sous-860 .sk-echelle{grid-template-columns:minmax(0,1fr);}
rdr-skipper .sk.sous-1100 .sk-hero--affiche > *{--sk-sc-g:.43;--sk-sc-b:.15;--sk-sc-p:.37;}
rdr-skipper .sk.sous-860 .sk-hero--affiche > *{--sk-sc-g:.455;--sk-sc-b:.12;--sk-sc-p:.35;}
rdr-skipper .sk.sous-860 .sk-hero--affiche .sk-hero-texte{max-width:52%;}
rdr-skipper .sk.sous-860 .sk-hero--affiche .sk-hero-famille{font-size:min(var(--t7),calc(44vw * 1.62 / var(--sk-lettres,7)));}
rdr-skipper .sk.sous-860 .sk-profil-cote{position:relative;top:auto;max-width:560px;}


rdr-skipper .sk.sous-860 .sk-id-bande{grid-template-columns:repeat(6,minmax(0,1fr));}
rdr-skipper .sk.sous-860 .sk-id-tuile{grid-column:span 2;}
rdr-skipper .sk.sous-860 .sk-id-bande[data-n="2"] .sk-id-tuile,rdr-skipper .sk.sous-860 .sk-id-bande[data-n="4"] .sk-id-tuile,rdr-skipper .sk.sous-860 .sk-id-bande[data-n="5"] .sk-id-tuile:nth-child(n+4){grid-column:span 3;}
rdr-skipper .sk.sous-860 .sk-id-bande[data-n="1"] .sk-id-tuile{grid-column:1 / -1;}
rdr-skipper .sk.sous-860 .sk-nav-id,rdr-skipper .sk.sous-860.sk--colle .sk-nav-id{display:none;}
rdr-skipper .sk.sous-860 .sk-palm{--sk-plaque:128px;--sk-biais:22px;grid-template-columns:112px minmax(0,1fr) var(--sk-plaque);}
rdr-skipper .sk.sous-860 .sk-palm--sans-place{grid-template-columns:112px minmax(0,1fr);}
rdr-skipper .sk.sous-860 .sk-palm-annee{padding-left:var(--e5);font-size:30px;}
rdr-skipper .sk.sous-860 .sk-palm-plaque{padding-right:var(--e5);}
rdr-skipper .sk.sous-860 .sk-palm-corps{padding-left:var(--e5);}
rdr-skipper .sk.sous-860 .sk-palm--fanion .sk-palm-corps{padding-right:calc(var(--e4) + 56px);}
rdr-skipper .sk.sous-860 .sk-palm-fanion{height:62px;}
rdr-skipper .sk.sous-860 .sk-bateau-visuel .sk-ecusson{right:var(--e4);height:92px;}
rdr-skipper .sk.sous-860 .sk-fiche{margin-top:var(--e5);}
rdr-skipper .sk.sous-600{--t1:12px;--sk-nav-h:66px;--t7:clamp(52px,16.5vw,92px);--r-bloc:30px 3px 30px 3px;--r-carte:20px 3px 20px 3px;}
rdr-skipper .sk.sous-600 .sk-hero{min-height:clamp(560px,92svh,760px);}
rdr-skipper .sk.sous-600 .sk-hero-img{object-position:44% 55%;}
rdr-skipper .sk.sous-600 .sk-hero-motif{width:130%;right:-50%;opacity:.14;}
rdr-skipper .sk.sous-600 .sk-hero-voile{background:linear-gradient(0deg,rgba(14,17,29,.96) 0%,rgba(14,17,29,.78) 34%,rgba(14,17,29,.1) 62%,rgba(14,17,29,0) 78%);}
rdr-skipper .sk.sous-600 .sk-hero--portrait .sk-hero-img{width:100%;height:78%;object-position:50% 12%;-webkit-mask-image:linear-gradient(180deg,#000 52%,transparent 100%);mask-image:linear-gradient(180deg,#000 52%,transparent 100%);}


rdr-skipper .sk.sous-600 .sk-hero--affiche{display:block;min-height:0;}



rdr-skipper .sk.sous-600 .sk-scene{position:relative;z-index:0;left:auto;right:auto;width:100%;height:clamp(330px,50svh,460px);clip-path:polygon(0 0,100% 0,100% 86%,0 100%);}
rdr-skipper .sk.sous-600 .sk-scene::before{background:radial-gradient(70% 52% at 50% 34%,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 70%);}
rdr-skipper .sk.sous-600 .sk-hero-vagues{opacity:.09;}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-faits{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--e3);margin-top:var(--e4);padding-right:0;}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-faits li{flex-direction:column;align-items:flex-start;gap:2px;min-width:0;font-size:10px;letter-spacing:.1em;}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-faits b{font-size:20px;line-height:1.05;overflow-wrap:normal;word-break:normal;}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-actions{margin-top:var(--e5);}
rdr-skipper .sk.sous-600 .sk-scene::after{background:linear-gradient(0deg,rgba(14,17,29,.92) 0%,rgba(14,17,29,.38) 24%,rgba(14,17,29,0) 44%);}
rdr-skipper .sk.sous-600 .sk-scene-sujet,rdr-skipper .sk.sous-600 .sk-att-silhouette{left:50%;height:96%;}
rdr-skipper .sk.sous-600 .sk-scene-sujet{transform:translate3d(-50%,0,0);}
rdr-skipper .sk.sous-600 .sk-hero--photo-libre .sk-scene-sujet{left:0;height:100%;transform:none;}
rdr-skipper .sk.sous-600 .sk-scene-ecusson{height:88px;right:var(--e4);}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-in{margin-top:-88px;padding-top:0;padding-bottom:calc(var(--e7) + var(--sk-nav-h) * .5);}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-texte{max-width:none;}
rdr-skipper .sk.sous-600 .sk-hero--affiche .sk-hero-famille,rdr-skipper .sk.sous-600 .sk-att-nom{font-size:min(var(--t7),calc((100vw - 40px) * 1.62 / var(--sk-lettres,7)));}
rdr-skipper .sk.sous-600 .sk-decompte{margin-bottom:var(--e4);}


rdr-skipper .sk.sous-860 .sk-hero--course{display:block;min-height:0;}
rdr-skipper .sk.sous-860 .sk-hero--course .sk-scene{position:relative;z-index:0;left:auto;right:auto;width:100%;height:clamp(330px,54svh,500px);clip-path:polygon(0 0,100% 0,100% 88%,0 100%);}
rdr-skipper .sk.sous-860 .sk-hero--course .sk-scene::after{background:linear-gradient(0deg,rgba(14,17,29,.92) 0%,rgba(14,17,29,.28) 24%,rgba(14,17,29,0) 42%);}
rdr-skipper .sk.sous-860 .sk-carto-ui{left:var(--e4);right:var(--e4);bottom:calc(12% + var(--e3));}
rdr-skipper .sk.sous-860 .sk-carto-direct{top:var(--e4);left:var(--e4);}
rdr-skipper .sk.sous-860 .sk-hero--course .sk-hero-in{margin-top:-36px;padding-top:0;}
rdr-skipper .sk.sous-860 .sk-hero--course .sk-hero-texte{max-width:none;}
rdr-skipper .sk.sous-860 .sk-hero--course .sk-hero-famille{font-size:min(clamp(40px,8vw,72px),calc((100cqw - 150px) * 1.45 / var(--sk-lettres,7)));}
rdr-skipper .sk.sous-600 .sk-bord{grid-template-columns:minmax(0,1fr);gap:var(--e2);}
rdr-skipper .sk.sous-600 .sk-bord-case{padding:var(--e3) var(--e4);}
rdr-skipper .sk.sous-600 .sk-bord-mesures{gap:var(--e2);}
rdr-skipper .sk.sous-600 .sk-bord-mesures .sk-bord-case{padding:var(--e3);}
rdr-skipper .sk.sous-600 .sk-bord-val{font-size:min(21px,calc(100cqw * 1.5 / var(--sk-car,5)));}
rdr-skipper .sk.sous-600 .sk-bord-val small{margin-top:5px;font-size:10px;}
rdr-skipper .sk.sous-600 .sk-bord-lib{font-size:9px;letter-spacing:.1em;}
rdr-skipper .sk.sous-600 .sk-bord-mesures .sk-bord-lib svg{display:none;}
rdr-skipper .sk.sous-600 .sk-bord-pos{font-size:58px;}
rdr-skipper .sk.sous-600 .sk-bord-actions{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--e2);}
rdr-skipper .sk.sous-600 .sk-bord-actions .sk-btn{padding:0 var(--e3);}
rdr-skipper .sk.sous-600 .sk-bord-avance{grid-template-columns:repeat(2,minmax(0,1fr));}
rdr-skipper .sk.sous-600 .sk-bord-avance > div:last-child:nth-child(n){grid-column:auto;}
rdr-skipper .sk.sous-600 .sk-bord-avance > div:last-child:nth-child(odd){grid-column:1 / -1;}
rdr-skipper .sk.sous-600 .sk-course-visage{width:64px;border-radius:18px 3px 18px 3px;}
rdr-skipper .sk.sous-600 .sk-carto-legende{display:none;}
rdr-skipper .sk.sous-600 .sk-carto-ui{justify-content:flex-end;}
rdr-skipper .sk.sous-600 .sk-att-faits .sk-att-barre{width:30%;}
rdr-skipper .sk.sous-600 .sk-att-actions{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);}
rdr-skipper .sk.sous-600 .sk-att-actions .sk-att-barre{width:auto;}
rdr-skipper .sk.sous-600 .sk-hero-bas{display:none;}
rdr-skipper .sk.sous-600 .sk-hero-origine{letter-spacing:.16em;font-size:12px;}
rdr-skipper .sk.sous-600 .sk-hero-prenom{letter-spacing:.3em;}
rdr-skipper .sk.sous-600 .sk-hero-bateau{font-size:15px;}
rdr-skipper .sk.sous-600 .sk-hero-bateau img{height:28px;}
rdr-skipper .sk.sous-600 .sk-hero-faits{gap:var(--e2) var(--e5);}
rdr-skipper .sk.sous-600 .sk-hero-faits b{font-size:22px;}
rdr-skipper .sk.sous-600 .sk-hero-actions{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);}
rdr-skipper .sk.sous-600 .sk-btn{padding:0 var(--e4);letter-spacing:.1em;}
rdr-skipper .sk.sous-600 .sk-nav > .sk-cadre{padding:0 10px;}
rdr-skipper .sk.sous-600 .sk-nav-in{height:52px;gap:6px;padding:0 4px 0 6px;border-radius:16px 3px 16px 3px;}
rdr-skipper .sk.sous-600 .sk-nav-defile{margin-left:0;}
rdr-skipper .sk.sous-600 .sk-nav-lien svg{display:none;}
rdr-skipper .sk.sous-600 .sk-nav-lien{font-size:12px;}
rdr-skipper .sk.sous-600 .sk-nav-actions{gap:6px;}
rdr-skipper .sk.sous-600 .sk-tete{margin-bottom:var(--e6);gap:var(--e4);}


rdr-skipper .sk.sous-600 .sk-tete::after{display:none;}
rdr-skipper .sk.sous-600 .sk-fiche{padding:var(--e4) var(--e5) var(--e2);}
rdr-skipper .sk.sous-600 .sk-id-bande{grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:var(--e6);}




rdr-skipper .sk.sous-600 .sk-id-bande[data-n] .sk-id-tuile:nth-child(n){grid-column:auto;min-height:88px;padding:var(--e3) var(--e4);}
rdr-skipper .sk.sous-600 .sk-id-bande[data-n="1"] .sk-id-tuile:nth-child(n),rdr-skipper .sk.sous-600 .sk-id-bande[data-n="3"] .sk-id-tuile:last-child,rdr-skipper .sk.sous-600 .sk-id-bande[data-n="5"] .sk-id-tuile:last-child{grid-column:1 / -1;}
rdr-skipper .sk.sous-600 .sk-id-tuile dt{font-size:10px;letter-spacing:.16em;}
rdr-skipper .sk.sous-600 .sk-id-tuile dd{font-size:clamp(15px,4.6vw,19px);}
rdr-skipper .sk.sous-600 .sk-id-tuile--classe{padding-right:calc(var(--e4) + 46px);}
rdr-skipper .sk.sous-600 .sk-id-tuile--classe .sk-id-fanion{height:70px;right:var(--e3);}
rdr-skipper .sk.sous-600 .sk-bio{padding:var(--e4) var(--e4);}
rdr-skipper .sk.sous-600 .sk-retour{top:12px;left:16px;min-height:34px;font-size:10px;}
rdr-skipper .sk.sous-600 .sk-en-attente{grid-template-columns:44px minmax(0,1fr);gap:var(--e3);}
rdr-skipper .sk.sous-600 .sk-en-attente-picto{width:44px;height:44px;}
rdr-skipper .sk.sous-600 .sk-en-attente .sk-en-attente-texte{font-size:14px;}
rdr-skipper .sk.sous-600 .sk-citation-visage{width:52px;height:52px;}
rdr-skipper .sk.sous-600 .sk-citation{padding:var(--e6) var(--e5) var(--e5) calc(var(--e5) + 6px);}
rdr-skipper .sk.sous-600 .sk-citation-guillemet{width:150px;top:var(--e4);transform:skewX(-8deg);}
rdr-skipper .sk.sous-600 .sk-bio-texte{font-size:16px;}
rdr-skipper .sk.sous-600 .sk-ecusson{height:92px;right:-6px;top:-12px;}
rdr-skipper .sk.sous-600 .sk-profil-cote{max-width:none;gap:var(--e5);}
rdr-skipper .sk.sous-600 .sk-profil-photo{margin-top:var(--e2);}
rdr-skipper .sk.sous-600 .sk-pref-corps{padding:var(--e4);}
rdr-skipper .sk.sous-600 .sk-pref-haut{grid-template-columns:96px minmax(0,1fr);}
rdr-skipper .sk.sous-600 .sk-pref-barre{flex-wrap:wrap;padding-right:0;}


rdr-skipper .sk.sous-600 .sk-pref-action{flex-direction:column;gap:5px;min-height:60px;font-size:10px;letter-spacing:.08em;}
rdr-skipper .sk.sous-600 .sk-pref[data-mode="invite"] .sk-pref-action.est-principal{flex-basis:100%;flex-direction:row;gap:8px;font-size:11px;}
rdr-skipper .sk.sous-600 .sk-pref[data-mode="invite"] .sk-pref-action:not(.est-principal){box-shadow:inset 0 1px 0 rgba(238,242,248,.1);}
rdr-skipper .sk.sous-600 .sk-prono{padding:var(--e4);}
rdr-skipper .sk.sous-600 .sk-prono-btn{width:100%;}
rdr-skipper .sk.sous-600 .sk-profil-photo-cadre{aspect-ratio:var(--sk-photo-rapport-mobile,1.1);}
rdr-skipper .sk.sous-600 .sk-profil-photo .sk-porte{margin:-26px 0 0 var(--e3);max-width:calc(100% - 24px);}
rdr-skipper .sk.sous-600 .sk-reseaux li{display:flex;}
rdr-skipper .sk.sous-600 .sk-reseau{width:100%;}
rdr-skipper .sk.sous-600 .sk-reseaux{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));}
rdr-skipper .sk.sous-600 .sk-reseau{justify-content:center;padding:0 var(--e3);}
rdr-skipper .sk.sous-600 .sk-chiffres{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--e3);margin-top:calc(var(--e4) * -1);}
rdr-skipper .sk.sous-600 .sk-chiffres[data-n="4"],rdr-skipper .sk.sous-600 .sk-chiffres[data-n="2"]{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:var(--e4);}
rdr-skipper .sk.sous-600 .sk-chiffres li{flex-direction:column;align-items:flex-start;gap:2px;font-size:12px;letter-spacing:.1em;}
rdr-skipper .sk.sous-600 .sk-chiffres b{font-size:40px;}
rdr-skipper .sk.sous-600 .sk-filtres{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin-right:calc(clamp(20px,5vw,72px) * -1);padding-right:clamp(20px,5vw,72px);}
rdr-skipper .sk.sous-600 .sk-filtres::-webkit-scrollbar{display:none;}
rdr-skipper .sk.sous-600 .sk-filtre{flex:none;}
 
 
rdr-skipper .sk.sous-600 .sk-palm{--sk-biais:18px;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"annee plaque" "corps corps";min-height:0;}
rdr-skipper .sk.sous-600 .sk-palm--sans-place{grid-template-columns:minmax(0,1fr);grid-template-areas:"annee" "corps";}
rdr-skipper .sk.sous-600 .sk-palm-annee{grid-area:annee;padding:var(--e4) 0 0 var(--e5);font-size:30px;}
rdr-skipper .sk.sous-600 .sk-palm-annee::after{display:none;}
rdr-skipper .sk.sous-600 .sk-palm-plaque{grid-area:plaque;min-width:112px;padding:var(--e3) var(--e5) var(--e3) calc(var(--sk-biais) + 12px);border-radius:0 4px 0 0;}
rdr-skipper .sk.sous-600 .sk-palm-corps{grid-area:corps;padding:var(--e3) var(--e5) var(--e5);}
rdr-skipper .sk.sous-600 .sk-palm--fanion .sk-palm-corps{padding-right:var(--e5);}
rdr-skipper .sk.sous-600 .sk-palm-fanion{height:52px;top:-8px;right:calc(112px + var(--e3));}
rdr-skipper .sk.sous-600 .sk-palm--rdr .sk-palm-annee{min-height:3.1em;}
rdr-skipper .sk.sous-600 .sk-palm-tete{gap:var(--e3);}
rdr-skipper .sk.sous-600 .sk-palm-logo{width:96px;height:44px;}
rdr-skipper .sk.sous-600 .sk-palm-logo img{width:calc(var(--sk-logo-l,96px) * .7);height:calc(var(--sk-logo-h,40px) * .7);}
rdr-skipper .sk.sous-600 .sk-palm--logo .sk-palm-titres{padding-left:var(--e3);}
rdr-skipper .sk.sous-600 .sk-palm-course{font-size:12px;letter-spacing:.16em;}
rdr-skipper .sk.sous-600 .sk-palm-meta{font-size:10px;letter-spacing:.12em;}
rdr-skipper .sk.sous-600 .sk-palm-pos{font-size:40px;}
rdr-skipper .sk.sous-600 .sk-palm-marque{width:96px;min-height:44px;font-size:calc(var(--sk-marque-t,15px) * .82);}
rdr-skipper .sk.sous-600 .sk-palm--marque .sk-palm-titres{padding-left:var(--e3);}
rdr-skipper .sk.sous-600 .sk-palm{min-height:0;}
rdr-skipper .sk.sous-600 .sk-palm-desc{font-size:14px;}
rdr-skipper .sk.sous-860 .sk-actus-liste{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:minmax(250px,auto);gap:var(--e3);}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n] .sk-actu:nth-child(n){grid-column:auto;grid-row:auto;}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n] .sk-actu.est-une{grid-column:1 / -1;grid-row:auto;min-height:380px;}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="2"] .sk-actu:last-child:nth-child(n),rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="4"] .sk-actu:last-child:nth-child(n),rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="6"] .sk-actu:last-child:nth-child(n){grid-column:1 / -1;}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="1"]{grid-template-columns:minmax(0,1fr);}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="1"] .sk-actu.est-une{min-height:0;}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="1"] .sk-actu-lien{grid-template-columns:minmax(0,1fr);min-height:0;}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="1"] .sk-actu-media{height:auto;bottom:auto;}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="1"] .est-une .sk-actu-corps{padding:var(--e5) var(--e5) var(--e6) calc(var(--e5) + 6px);}
rdr-skipper .sk.sous-860 .sk-actus-liste[data-n="1"] .est-une .sk-actu-corps::before{top:var(--e5);bottom:var(--e6);}
rdr-skipper .sk.sous-860 .est-une .sk-actu-corps{padding:var(--e6) var(--e6) var(--e5) calc(var(--e5) + 6px);}
rdr-skipper .sk.sous-860 .est-une .sk-actu-corps::before{top:var(--e6);bottom:var(--e5);}
 
rdr-skipper .sk.sous-600 .sk-actus-liste,rdr-skipper .sk.sous-600 .sk-actus-liste[data-n]{display:flex;gap:var(--e3);margin:0 calc(-1 * clamp(20px,5vw,72px));padding:0 clamp(20px,5vw,72px);overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scroll-padding-inline:clamp(20px,5vw,72px);scrollbar-width:none;}
rdr-skipper .sk.sous-600 .sk-actus-liste::-webkit-scrollbar{display:none;}
rdr-skipper .sk.sous-600 .sk-actus-liste .sk-actu{flex:0 0 86%;scroll-snap-align:start;}
rdr-skipper .sk.sous-600 .sk-actus-liste[data-n="1"] .sk-actu{flex-basis:100%;}
rdr-skipper .sk.sous-600 .sk-actu-lien{min-height:420px;background:#0B1830;}
rdr-skipper .sk.sous-600 .sk-actu-media{bottom:auto;height:60%;}
rdr-skipper .sk.sous-600 .est-classique .sk-actu-media{height:auto;}
rdr-skipper .sk.sous-600 .sk-actu-voile,rdr-skipper .sk.sous-600 .est-une .sk-actu-voile{background:linear-gradient(to top,#0B1830 0%,#0B1830 42%,rgba(11,24,48,.6) 56%,rgba(11,24,48,0) 76%);}
rdr-skipper .sk.sous-600 .sk-actu-corps,rdr-skipper .sk.sous-600 .est-une .sk-actu-corps{gap:var(--e2);padding:var(--e5) var(--e5) var(--e5) calc(var(--e5) + 3px);}
rdr-skipper .sk.sous-600 .sk-actu-corps::before,rdr-skipper .sk.sous-600 .est-une .sk-actu-corps::before{top:var(--e5);bottom:var(--e5);}
rdr-skipper .sk.sous-600 .sk-actu-titre,rdr-skipper .sk.sous-600 .est-une .sk-actu-titre{font-size:20px;line-height:1.1;-webkit-line-clamp:3;}
rdr-skipper .sk.sous-600 .sk-actu-extrait,rdr-skipper .sk.sous-600 .est-une .sk-actu-extrait{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:13px;line-height:1.5;}
rdr-skipper .sk.sous-600 .est-une .sk-actu-aller{top:var(--e4);right:var(--e4);width:40px;height:40px;}
rdr-skipper .sk.sous-600 .sk-actus-points{display:flex;justify-content:center;gap:6px;margin-top:var(--e4);}
rdr-skipper .sk.sous-600 .sk-actus-points i{width:8px;height:8px;border-radius:4px;background:rgba(255,255,255,.24);transition:width .3s cubic-bezier(.22,1,.36,1),background-color .3s ease;}
rdr-skipper .sk.sous-600 .sk-actus-points i.est-actif{width:28px;background:rgba(255,255,255,.9);}
rdr-skipper .sk.sous-600 .sk-actus-pied{margin-top:var(--e6);}
rdr-skipper .sk.sous-600 .sk-bateau-visuel .sk-ecusson{height:62px;right:var(--e3);top:-10px;}
rdr-skipper .sk.sous-600 .sk-bateau-choix{gap:var(--e2);}
rdr-skipper .sk.sous-600 .sk-bateau-choix button{width:calc((100% - 2 * var(--e2)) / 3);}
rdr-skipper .sk.sous-600 .sk-echelle{padding:var(--e5) var(--e4);}
rdr-skipper .sk.sous-600 .sk-echelle figure img{width:86%;margin:-6% auto -8%;}
rdr-skipper .sk.sous-600 .sk-echelle-chiffres{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--e2);}
rdr-skipper .sk.sous-600 .sk-echelle-chiffres li{padding:var(--e3) var(--e4);}
rdr-skipper .sk.sous-400 .sk-hero-actions{grid-template-columns:minmax(0,1fr) auto;}
rdr-skipper .sk.sous-400 .sk-hero-actions .sk-btn--ligne span{display:none;}
rdr-skipper .sk.sous-400 .sk-hero-actions .sk-btn--ligne{width:52px;padding:0;}
rdr-skipper .sk.sous-400 .sk-reseau span{letter-spacing:.08em;}
rdr-skipper .sk.sous-400 .sk-nav-lien{padding:0 10px;letter-spacing:.06em;}

@media (hover:none){rdr-skipper .sk .sk-btn--suivre:hover{transform:none;}}





@media (pointer:coarse){rdr-skipper .sk .sk-nav-in{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(17,21,38,.94);}}
@media (prefers-reduced-motion:reduce){
  rdr-skipper .sk .sk-hero-img,rdr-skipper .sk .sk-hero-bas svg,rdr-skipper .sk .sk-live i{animation:none;}
  rdr-skipper .sk .sk-nav-id,rdr-skipper .sk .sk-nav-indic{transition:none;}
  rdr-skipper .sk .sk-scene-portrait{transition:none;translate:0 0;}
  rdr-skipper .sk .sk-att-silhouette,rdr-skipper .sk .sk-att-houle,rdr-skipper .sk .sk-att-barre,rdr-skipper .sk .sk-att-nom,rdr-skipper .sk .sk-att-legende,rdr-skipper .sk .sk-carto-halo,rdr-skipper .sk .sk-carto-direct i{animation:none;}
}
`;

  





  const MEM = 'rdrMemFicheV1:';
  const memLire = (k) => { try { const m = JSON.parse(sessionStorage.getItem(MEM + k) || 'null'); return m && Date.now() - m.le < 18e5 ? m : null; } catch (e) { return null; } };
  const memEcrire = (k, v) => { try { sessionStorage.setItem(MEM + k, JSON.stringify(Object.assign({ le: Date.now() }, v))); } catch (e) {   } };
   
  const memSlug = () => { try { return decodeURIComponent(location.pathname.split('/').filter(Boolean).pop() || '').toLowerCase().slice(0, 80); } catch (e) { return ''; } };
  const memElaguer = () => { try {
    const le = (k) => (memLire(k.slice(MEM.length)) || {}).le || 0;
    const cles = Object.keys(sessionStorage).filter(k => k.indexOf(MEM) === 0).sort((x, y) => le(x) - le(y));
    cles.slice(0, Math.max(0, cles.length - 6)).forEach(k => sessionStorage.removeItem(k));
  } catch (e) {   } };

  class RdrSkipper extends HTMLElement {
    static get observedAttributes() { return ['lang', 'phase', 'suivi', 'payload', 'hero', 'nom-attente', 'membre', 'live-url', 'prefere', 'prefere-actuel', 'verifier-charge']; }

    constructor() {
      super();
      this._init = false;
      this._lang = 'fr';
      this._phase = 'avant';
      this._suivi = false;
      

      this._membre = '';
      this._fansDelta = 0;
      this._fanEnAttente = false;
      this._prefere = false;
      this._prefereActuel = '';
      this._prefereEnAttente = false;
      this._modeHero = 'affiche';
      this._p = null;
      this._attente = {};
      this._nettoyages = [];
      this._filtre = 'tout';
      this._palmDeplie = false;
      this._dernierId = null;
    }

    connectedCallback() {
      if (this._init) return;
      this._init = true;
      if (!document.getElementById('sk-style')) {
        const s = document.createElement('style');
        s.id = 'sk-style';
        s.textContent = CSS;
        document.head.appendChild(s);
      }
      

      Object.keys(this._attente).forEach(k => (k === 'payload' ? this._appliquerCharge(this._attente[k]) : this._appliquer(k, this._attente[k])));
      this._attente = {};
      ['lang', 'phase', 'suivi', 'hero', 'membre', 'prefere', 'prefere-actuel'].forEach(k => { if (this.hasAttribute(k)) this._appliquer(k, this.getAttribute(k)); });
      if (this.hasAttribute('payload')) this._appliquerCharge(this.getAttribute('payload'));
       
      if (!this._p) {
        const m = memLire(this._memCle());
        if (m && typeof m.payload === 'string' && this._appliquerCharge(m.payload)) this._depuisMemoire = true;
      } else if (this._chargeBrute) this._memoriser(this._chargeBrute);
      this._tenirLeHaut();
      this._rendre();
      if (this._verifierApresInit) {
        this._verifierApresInit = false;
        if (!this._p) this.dispatchEvent(new CustomEvent('sk-sans-charge', { bubbles: true }));
      }
    }

    attributeChangedCallback(nom, avant, apres) {
      if (avant === apres) return;
      


      if (nom === 'verifier-charge') {
        if (!this._init) this._verifierApresInit = true;
        else if (!this._p) this.dispatchEvent(new CustomEvent('sk-sans-charge', { bubbles: true }));
        return;
      }
      if (!this._init) { this._attente[nom] = apres; return; }
      

      if (nom === 'payload') {
        

        if (this._depuisMemoire) { this._depuisMemoire = false; this._memoriser(String(apres == null ? '' : apres).trim()); return; }
        if (this._appliquerCharge(apres)) { this._memoriser(this._chargeBrute); this._rendre(); }
        return;
      }
      this._appliquer(nom, apres);
      if (nom === 'suivi') this._confirmerSuivi();
      else if (nom === 'membre') { this._peindreSuivi(); this._rejouerGeste(); }
      else if (nom === 'prefere') this._confirmerPrefere();
      else if (nom === 'prefere-actuel') this._peindrePrefere();
      else if (nom === 'live-url') {   }
      else if (nom === 'nom-attente') { if (!this._p) this._rendre(); }
      else this._rendre();
    }

    disconnectedCallback() {
      this._nettoyer();
      this._init = false;
      if (this._toastEl) { this._toastEl.remove(); this._toastEl = null; }
      clearTimeout(this._toastMinuteur);
       
      if (this._fermerCarte) { this._fermerCarte(); this._fermerCarte = null; }
    }

    

    setPayload(o) { this._p = o || null; this._chargeBrute = ''; if (this._init) this._rendre(); }

    










    _memCle() { return this._lang + ':' + memSlug(); }
    _memoriser(brut) { if (brut) { memEcrire(this._memCle(), { payload: brut }); memElaguer(); } }

    _appliquerCharge(v) {
      const brut = String(v == null ? '' : v).trim();
      if (!brut || brut === this._chargeBrute) return false;
      try {
        this._p = JSON.parse(brut);
        this._chargeBrute = brut;
        return true;
      } catch (e) {
        console.warn('[rdr-skipper] charge illisible', e);
        return false;
      }
    }

    _appliquer(nom, v) {
      const s = String(v == null ? '' : v).trim();
      if (nom === 'lang') this._lang = s.toLowerCase().indexOf('en') === 0 ? 'en' : 'fr';
      else if (nom === 'phase') this._phase = ['avant', 'course', 'arrivee'].indexOf(s) >= 0 ? s : 'avant';
      else if (nom === 'suivi') this._suivi = s === 'true';
      else if (nom === 'hero') this._modeHero = s === 'photo' ? 'photo' : 'affiche';
      else if (nom === 'membre') this._membre = s === 'oui' || s === 'non' ? s : '';
      else if (nom === 'prefere') this._prefere = s === 'true';
      else if (nom === 'prefere-actuel') this._prefereActuel = s;
    }

    







    _tenirLeHaut() {
      if (RdrSkipper._hautTenu) return;
      RdrSkipper._hautTenu = true;
      try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {   }
      if (location.hash) return;
      let touche = false;
      const marque = () => { touche = true; };
      ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(t => window.addEventListener(t, marque, { once: true, passive: true }));
      const remonter = () => { if (!touche && window.scrollY > 0) window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); };
      remonter();
      window.addEventListener('load', remonter, { once: true });
      window.addEventListener('pageshow', remonter, { once: true });
    }

    _hautDePage() {
      if (window.scrollY > 0) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    _nettoyer() {
      this._nettoyages.forEach(fn => { try { fn(); } catch (e) {   } });
      this._nettoyages = [];
    }
    _ecoute(cible, type, fn, opts) {
      cible.addEventListener(type, fn, opts);
      this._nettoyages.push(() => cible.removeEventListener(type, fn, opts));
    }

     
    





    _prechargerListe() {
      if (this._listePrechargee) return;
      this._listePrechargee = true;
      try {
        if (!HTMLScriptElement.supports('speculationrules')) return;
        const sc = document.createElement('script'); sc.type = 'speculationrules';
        sc.textContent = '{"prefetch":[{"urls":["' + this._urlListe() + '"],"eagerness":"immediate"}]}';
        document.head.appendChild(sc);
      } catch (e) {   }
    }

    _rendre() {
      this._nettoyer();
      this._prechargerListe();
       
      this._heroObserve = false;
      this._fondreNav = null;
      this._premiereMesureNav = null;
      const p = this._p;
      if (!p || !p.skipper) {
        const avait = this._dernierId;
        this.removeAttribute('data-pret');
        this.innerHTML = this._squelette();
        this._racine = this.querySelector('.sk');
        this._ajusterNomQuandPret();
        if (avait) this._hautDePage();
        this._dernierId = null;
        return;
      }
      const T = I18N[this._lang];
      const s = p.skipper;
      const autreSkipper = this._dernierId !== null && this._dernierId !== s.id;
      if (autreSkipper) { this._fansDelta = 0; this._fanEnAttente = false; this._prefereEnAttente = false; }
      const premier = !this._dejaRendu;
      this._T = T;
      this._nomAffiche = [casse(s.prenom), casse(s.nom)].filter(Boolean).join(' ');
      this._prenomAffiche = casse(s.prenom) || this._nomAffiche;
      const accent = couleurSure(s.classe && s.classe.couleur);

      const sections = [];
      sections.push({ id: 'sk-profil', cle: 'profil', html: this._profil(s, T) });
       
      if (p.actus && (p.actus.liste || []).length) sections.push({ id: 'sk-actus', cle: 'actus', html: this._actus(s, p.actus, T) });
      



      sections.push({ id: 'sk-palmares', cle: 'palmares', html: (p.palmares || []).length ? this._palmares(p.palmares, T) : this._palmaresEnAttente(T) });
      sections.push({ id: 'sk-bateau', cle: 'bateau', html: this._bateau(s, p.modeleClasse, T) });
      sections.push({ id: 'sk-medias', cle: 'medias', html: (s.galerie || []).length ? this._medias(T) : this._mediasEnAttente(T) });
      sections.push({ id: 'sk-suivre', cle: 'suivre', html: '<section class="sk-sec sk-suivre" id="sk-suivre" aria-label="' + esc(T.nav.suivre) + '"><div class="sk-cadre"><skipper-outro data-sk-outro data-sk-reveal></skipper-outro>' +
        


        (p.promo && p.promo.actif === false ? '' : '<rdr-espace-promo class="sk-promo" data-sk-promo variante="bandeau" hidden></rdr-espace-promo>') +
        '</div></section>', nav: false });
      this._sections = sections;

      this.innerHTML =
        '<div class="sk' + this._classesPaliers() + '" lang="' + this._lang + '" style="--sk-accent:' + accent + '">' +
          this._hero(s, T) +
          this._nav(s, sections, T) +
          sections.map(x => x.html).join('') +
          ((p.memeClasse || []).length ? this._classe(s, T) : '<div class="sk-sec sk-classe">' + this._piedListe(T) + '</div>') +
        '</div>';
      this._racine = this.querySelector('.sk');
      this.setAttribute('data-pret', '');
      this._brancher();
      this._dernierId = s.id;
      this._dejaRendu = true;
      if (autreSkipper) this._hautDePage();
      else if (premier && location.hash) {
        const cible = this._racine.querySelector('#' + idSur(location.hash.slice(1)));
        if (cible) {
          const aller = () => cible.scrollIntoView({ block: 'start', behavior: 'instant' });
          if (this._definirTousLesIntegres()) requestAnimationFrame(() => requestAnimationFrame(aller));
          else aller();
        }
      }
    }

     
    _squelette() {
      const T = I18N[this._lang];
      const nom = String(this.getAttribute('nom-attente') || '').trim().slice(0, 60);
      const lettres = Math.max(6, nom.length > 12 ? Math.ceil(nom.length / 2) : nom.length);
      return '<div class="sk sk--attente' + this._classesPaliers() + '" lang="' + this._lang + '" aria-busy="true">' +
        '<header class="sk-hero sk-hero--affiche">' +
          '<div class="sk-scene" aria-hidden="true"><span class="sk-att-silhouette"></span><span class="sk-att-houle"></span></div>' +
          '<div class="sk-cadre sk-hero-in"><div class="sk-hero-texte">' +
            '<span class="sk-att-barre sk-att-barre--decompte"></span>' +
            '<span class="sk-att-barre sk-att-barre--origine"></span>' +
            (nom
              ? '<p class="sk-att-nom" style="--sk-lettres:' + lettres + '">' + esc(nom) + '</p>'
              : '<span class="sk-att-barre sk-att-barre--prenom"></span><span class="sk-att-barre sk-att-barre--nom"></span>') +
            '<span class="sk-att-barre sk-att-barre--bateau"></span>' +
            '<span class="sk-att-faits"><span class="sk-att-barre"></span><span class="sk-att-barre"></span><span class="sk-att-barre"></span></span>' +
            '<span class="sk-att-actions"><span class="sk-att-barre"></span><span class="sk-att-barre"></span></span>' +
            '<p class="sk-att-legende" role="status">' + esc(T.chargement) + '</p>' +
          '</div></div>' +
        '</header>' +
      '</div>';
    }

    








    _classesPaliers() {
      const w = window.innerWidth || 1440;
      return (w <= 1280 ? ' sous-1280' : '') + (w <= 1100 ? ' sous-1100' : '') + (w <= 860 ? ' sous-860' : '') + (w <= 600 ? ' sous-600' : '') + (w <= 400 ? ' sous-400' : '');
    }

     
    _paliers() {
      const R = this._racine;
      if (!R) return;
      const w = R.getBoundingClientRect().width || window.innerWidth;
      R.classList.toggle('sous-1280', w <= 1280);
      R.classList.toggle('sous-1100', w <= 1100);
      R.classList.toggle('sous-860', w <= 860);
      R.classList.toggle('sous-600', w <= 600);
      R.classList.toggle('sous-400', w <= 400);
    }

    



    _echelleCarte() {
      const svg = this._racine && this._racine.querySelector('.sk-carto');
      if (!svg) return;
      const r = svg.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const k = Math.max(1, Math.min(1.9, 0.78 / Math.max(r.width / 800, r.height / 870)));
      svg.style.setProperty('--sk-carto-k', k.toFixed(3));
    }

    

    _hero(s, T) {
      const h = this._modeHero === 'photo' ? this._heroPhoto(s, T) : this._heroAffiche(s, T);
      const i = h.indexOf('>') + 1;
      return h.slice(0, i) + '<a class="sk-retour" href="' + esc(this._urlListe()) + '" onclick="this.classList.add(\'sk-retour--attente\')">' + svg('fleche') + '<span>' + esc(T.tousSkippers) + '</span></a>' + h.slice(i);
    }

    _urlListe() { return (this._lang === 'en' ? '/en' : '') + '/skippers'; }
    

    _urlEspace(chemin) { return (this._lang === 'en' ? '/en' : '') + chemin; }

    _piedListe(T) {
      return '<div class="sk-cadre sk-liste-pied" data-sk-reveal><a class="sk-btn sk-btn--ligne" href="' + esc(this._urlListe()) + '"><span>' + esc(T.voirTousSkippers) + '</span>' + svg('fleche') + '</a></div>';
    }

    _faitsHero(s, T) {
      const faits = [];
      if (s.participation) faits.push('<li><b>' + esc(s.participation) + '</b>' + esc(T.participations(s.participation)) + '</li>');
      if (s.bateau && s.bateau.voile) faits.push('<li><b>' + esc(s.bateau.voile) + '</b>' + esc(T.voile) + '</li>');
      if (s.portDAttache) faits.push('<li><b>' + esc(s.portDAttache) + '</b>' + esc(T.port) + '</li>');
      return faits.length ? '<ul class="sk-hero-faits">' + faits.join('') + '</ul>' : '';
    }

    _identiteHero(s, T) {
      const classeNom = (s.classe && s.classe.nom) || '';
      

      if (this._phase === 'course' && s.photoProfil && !this._identiteSimple) {
        this._identiteSimple = true;
        const html = '<div class="sk-course-id"><span class="sk-course-visage"><img src="' + esc(urlImage(s.photoProfil, 220, 268, 'fill', 't')) + '" alt="" width="100" height="100" decoding="async"></span><div>' + this._identiteHero(s, T) + '</div></div>';
        this._identiteSimple = false;
        return html;
      }
      return '<p class="sk-hero-origine">' +
          (s.drapeau ? '<img src="' + esc(urlVecteur(s.drapeau)) + '" alt="" width="24" height="24">' : '') +
          (s.nationalite ? '<span>' + esc(pays(s.nationalite, this._lang)) + '</span><b></b>' : '') +
          '<span>' + esc(T.skipper(classeNom)) + '</span>' +
        '</p>' +
        '<h1 class="sk-hero-nom"><span class="sk-hero-prenom">' + esc(s.prenom) + '</span> <span class="sk-hero-famille">' + esc(s.nom) + '</span></h1>' +
        (s.bateau && s.bateau.nom ? '<p class="sk-hero-bateau"><span>' + esc(s.bateau.nom) + '</span></p>' : '');
    }

    _actionsHero(T) {
      return '<div class="sk-hero-actions">' +
          this._boutonSuivre('sk-btn sk-btn--suivre', true) +
          (this._phase === 'course'
            ? '<a class="sk-btn sk-btn--ligne" href="#sk-suivre" data-sk-ancre="sk-suivre">' + svg('direct') + '<span>' + esc(T.cartoLive) + '</span></a>'
            : '<button class="sk-btn sk-btn--ligne" type="button" data-sk-partager aria-label="' + esc(T.partagerAria(this._nomAffiche)) + '">' + svg('partager') + '<span>' + esc(T.partager) + '</span></button>') +
        '</div>';
    }

    _decompte(T) {
      if (this._phase !== 'avant') return '';
      const jours = Math.ceil((DEPART - Date.now()) / 86400000);
      if (!(jours >= 0)) return '';
      const [fort, texte] = T.decompte(jours);
      return '<p class="sk-decompte"><b>' + esc(fort) + '</b>' + esc(texte) + '</p>';
    }

    

    _lettres(nom) {
      const n = String(nom || '').trim();
      const plusLong = n.split(/\s+/).reduce((m, w) => Math.max(m, w.length), 0);
      return Math.max(5, n.length > 11 ? Math.max(plusLong, Math.ceil(n.length / 2)) : n.length);
    }

    _heroAffiche(s, T) {
      const portrait = s.photoProfil;
      const d = dimsImage(portrait);
      

      const libre = !!(d && d.w / d.h > 1.02);
      const enCourse = this._phase === 'course';
      const suivis = Number(this._p.nbSuivis) || 0;
      return '<header class="sk-hero sk-hero--affiche' + (libre ? ' sk-hero--photo-libre' : '') + (enCourse ? ' sk-hero--course' : '') + '" id="sk-haut" style="--sk-lettres:' + this._lettres(s.nom) + '">' +
        



        '<img class="sk-hero-vagues" src="' + esc(urlImage(FOND_MOTIF, 1100, 0, 'fit')) + '" alt="" decoding="async" aria-hidden="true">' +
        '<div class="sk-scene' + (enCourse ? ' sk-scene--carto' : '') + '" data-sk-scene' + (enCourse ? '' : ' aria-hidden="true"') + '>' +
          (enCourse ? this._carteLive(s, T) : '') +
          (portrait && !enCourse
            ? '<div class="sk-scene-sujet"><img class="sk-scene-portrait" data-sk-portrait src="' + esc(urlImage(portrait, 720, 0, 'fit')) + '"' +
              ' srcset="' + esc(srcset(portrait, [480, 720, 960, 1280])) + '" sizes="' + (libre ? '(max-width: 600px) 100vw, 58vw' : '(max-width: 600px) 82vw, 40vw') + '"' +
              ' alt="" fetchpriority="high" decoding="async" crossorigin="anonymous"' + attrsTaille(portrait, 720) + '></div>'
            : '') +
          (s.classe && s.classe.icone ? '<img class="sk-scene-ecusson" src="' + esc(urlVecteur(s.classe.icone)) + '" alt="" decoding="async"' + (enCourse ? ' aria-hidden="true"' : '') + '>' : '') +
        '</div>' +
        '<div class="sk-cadre sk-hero-in"><div class="sk-hero-texte">' +
          (enCourse ? this._badgeCourse(T) : this._decompte(T)) +
          this._identiteHero(s, T) +
          (enCourse ? this._tableauDeBord(s, T) : this._faitsHero(s, T)) +
          (enCourse && this._p.live && this._p.live.rang ? '' : this._actionsHero(T)) +
          (suivis >= SEUIL_SUIVIS ? '<p class="sk-suivis">' + esc(T.suivisPar(suivis)) + '</p>' : '') +
        '</div></div>' +
        '<a class="sk-hero-bas" href="#sk-profil" data-sk-ancre="sk-profil" aria-label="' + esc(T.descendre) + '">' + svg('bas') + '</a>' +
      '</header>';
    }

    _badgeCourse(T) {
      const L = this._p.live;
      const jour = L && L.jour ? L.jour : (Date.now() > DEPART ? Math.floor((Date.now() - DEPART) / 86400000) + 1 : 0);
      




      const pct = L && L.progression != null ? Math.max(0, Math.min(100, Math.round(Number(L.progression) * 100))) : 0;
      const [fort, texte] = jour ? T.jourCourse(jour) : ['', T.enCourse];
      return '<a class="sk-live" href="#sk-suivre" data-sk-ancre="sk-suivre" style="--sk-fait:' + pct + '%"' + (pct ? ' aria-label="' + esc(T.jourCourseAria(jour, pct)) + '"' : '') + '>' +
        (fort ? '<b>' + esc(fort) + '</b>' : '') + '<span>' + esc(texte) + '</span></a>';
    }

    











    _tableauDeBord(s, T) {
      const L = this._p.live;
      if (!L || !L.rang) return '<p class="sk-bord-attente">' + svg('direct') + '<span>' + esc(T.liveAttente) + '</span></p>';
      const nf = (v, dec) => new Intl.NumberFormat(T.locale, { maximumFractionDigits: dec || 0, minimumFractionDigits: dec || 0 }).format(v);
      const tendance = Number(L.evolution24h) || 0;
      const pct = (v) => Math.max(0, Math.min(100, Math.round((Number(v) || 0) * 100)));
      const rang = '<div class="sk-bord-case sk-bord-rang"><b class="sk-bord-pos">' + ordinalHtml(L.rang, this._lang) + '</b>' +
        '<div class="sk-bord-rang-textes"><span class="sk-bord-lib">' + svg('palmares') + esc(T.classement) + '</span>' +
          '<span class="sk-bord-sur">' + esc(T.surN(L.partants, (s.classe && s.classe.nom) || '')) + '</span>' +
          '<span class="sk-bord-tendance' + (tendance < 0 ? ' est-baisse' : '') + '">' + esc(T.evolution(tendance)) + '</span></div></div>';
      const eta = L.eta ? new Intl.DateTimeFormat(T.locale, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(L.eta)) : '';
      const h = Number(L.tempsCourseH) || 0;
      const parcours = '<div class="sk-bord-case sk-bord-parcours">' +
        '<div class="sk-bord-parcours-tete"><span class="sk-bord-lib">' + svg('depart') + esc(T.parcours) + '</span><b>' + pct(L.progression) + ' %</b></div>' +
        '<div class="sk-bord-jauge" style="--sk-jauge:' + pct(L.progression) + '%;--sk-jauge-tete:' + pct(L.progressionLeader || L.progression) + '%" role="img" aria-label="' + esc(T.parcoursAria(pct(L.progression), pct(L.progressionLeader || L.progression))) + '"><i></i>' + (L.rang > 1 ? '<b></b>' : '') + '</div>' +
        '<p class="sk-bord-eta">' + (eta ? '<span>' + esc(T.arriveeEstimee) + ' <strong>' + esc(eta) + '</strong></span>' : '') + (h ? '<span>' + esc(T.tempsCourse(Math.floor(h / 24), Math.round(h % 24))) + '</span>' : '') + '</p>' +
      '</div>';
      const mesures = '<dl class="sk-bord-mesures">' + [
        ['arrivee', T.distanceArrivee, nf(L.distanceArrivee), T.milles],
        ['vitesse', T.vitesse, nf(L.vitesse, 1), T.noeuds],
        ['ecart', T.ecartLeader, L.rang === 1 ? T.enTete : '+' + nf(L.ecartLeader, 1), L.rang === 1 ? '' : T.milles]
      ].map(([ic, lib, val, unite]) => '<div class="sk-bord-case"><dt class="sk-bord-lib">' + svg(ic) + esc(lib) + '</dt>' +
        '<dd class="sk-bord-val" style="--sk-car:' + Math.max(4, String(val).length) + '">' + esc(val) + (unite ? ' <small>' + esc(unite) + '</small>' : '') + '</dd></div>').join('') + '</dl>';
      

      const pos = L.position || (L.progression != null ? geoRoute().inverse(geoRoute().surRoute(Number(L.progression) || 0).p) : null);
      const avance = [
        [T.vmg, L.vmg != null ? nf(L.vmg, 1) : '', T.noeuds],
        [T.cap, L.cap != null ? nf(L.cap) + '°' : '', ''],
        [T.vitesseMoy, L.vitesseMoy24h != null ? nf(L.vitesseMoy24h, 1) : '', T.noeuds],
        [T.distance24, L.distance24h != null ? nf(L.distance24h) : '', T.milles],
        [T.vent, L.vent && L.vent.force != null ? nf(L.vent.force) : '', L.vent ? T.noeuds + (L.vent.direction != null ? ' · ' + rose(L.vent.direction, this._lang) : '') : ''],
        [T.position, pos ? dms(pos.lat, 'lat', this._lang) : '', pos ? dms(pos.lon, 'lon', this._lang) : ''],
        [T.ecartSuivant, L.ecartSuivant != null ? nf(L.ecartSuivant, 1) : '', T.milles],
        [T.ecartPrecedent, L.ecartPrecedent != null ? nf(L.ecartPrecedent, 1) : '', T.milles]
      ].filter(x => x[1]);
      const avanceHtml = avance.length
        ? '<dl class="sk-bord-avance" id="sk-bord-avance" hidden>' + avance.map(([lib, val, unite]) => '<div><dt>' + esc(lib) + '</dt><dd' + (lib === T.position ? ' class="est-coord"' : '') + '>' + esc(val) + (unite ? ' <small>' + esc(unite) + '</small>' : '') + '</dd></div>').join('') + '</dl>'
        : '';
      return '<div class="sk-bord">' + rang + parcours + mesures +
        '<div class="sk-bord-actions">' +
          '<a class="sk-btn sk-btn--suivre sk-bord-live" href="' + esc(this._urlCarto()) + '"' + (this._urlCarto().charAt(0) === '#' ? ' data-sk-ancre="sk-suivre"' : ' target="_blank" rel="noopener"') + '>' + svg('direct') + '<span>' + esc(T.cartoLive) + '</span></a>' +
          this._boutonSuivre('sk-btn sk-btn--ligne', true) +
        '</div>' +
        '<div class="sk-bord-outils">' +
          (avance.length ? '<button class="sk-bord-avance-btn" type="button" data-sk-avance aria-expanded="false" aria-controls="sk-bord-avance">' + esc(T.statsAvancees) + svg('bas') + '</button>' : '<span></span>') +
          '<p><span>' + esc(T.positionIlYa(L.ilYaMin || 0)) + '</span>' + (L.demo ? '<span class="sk-bord-demo">' + esc(T.demo) + '</span>' : '') + '</p>' +
        '</div>' +
        avanceHtml +
      '</div>';
    }

    

    _urlCarto() {
      return lienSur(this.getAttribute('live-url')) || '#sk-suivre';
    }

    




    _carteLive(s, T) {
      const L = this._p.live || {};
      const G = geoRoute();
      const px = G.px, f = G.f;
      const lire = (chaine) => chaine.split(' ').map(c => c.split(',').map(Number));
      const terres = COTES.map(c => '<path class="sk-carto-terre" d="M' + lire(c).map(([lon, lat]) => f(px(lon, lat))).join('L') + 'Z"/>').join('');
      const iles = lire(ILES).map(([lon, lat]) => { const p = px(lon, lat); return '<circle class="sk-carto-ile" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="2.6"/>'; }).join('');
      let grille = '';
      for (let lon = -60; lon <= 0; lon += 10) grille += 'M' + f(px(lon, 68)) + 'L' + f(px(lon, -4));
      for (let lat = 0; lat <= 60; lat += 10) grille += 'M' + f(px(-70, lat)) + 'L' + f(px(8, lat));
      const d = G.d, ech = G.ech, surRoute = G.surRoute;
      const placer = (x) => {
        if (x && Number.isFinite(x.lat) && Number.isFinite(x.lon)) return px(x.lon, x.lat);
        const o = surRoute(Number(x && x.progression) || 0);
        const n = Math.hypot(o.dx, o.dy) || 1, dec = Number(x && x.decalage) || 0;
        return [o.p[0] - o.dy / n * dec, o.p[1] + o.dx / n * dec];
      };

      const t = Math.max(0, Math.min(1, Number(L.progression) || 0));
      const ici = surRoute(t);
      const moi = L.position ? px(L.position.lon, L.position.lat) : ici.p;
      const sillage = ech.slice(0, ici.i).concat([moi]).map(f).join(' ');
      


      const lg = Math.hypot(ici.dx, ici.dy) || 1;
      const nordX = -ici.dy / lg, nordY = ici.dx / lg;
      const nom = (p, dx, dy, ancre, cls, texte) => '<text class="sk-carto-nom' + (cls ? ' ' + cls : '') + '" x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" dx="' + dx.toFixed(2) + 'em" dy="' + dy.toFixed(2) + 'em" text-anchor="' + ancre + '">' + esc(texte) + '</text>';
      const cote = (ux, uy, ecart) => [ux * ecart, uy * ecart + 0.36, ux < -0.38 ? 'end' : ux > 0.38 ? 'start' : 'middle'];
      const flotte = (L.flotte || []).filter(b => b && b.rang !== L.rang);
      const leader = L.rang === 1 ? null : flotte.find(b => b.rang === 1);
      const flotteSvg = flotte.filter(b => b !== leader).map(b => { const p = placer(b); return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.4"/>'; }).join('');
      const pl = leader ? placer(leader) : null;
      const depart = px(ROUTE_RDR[0][0], ROUTE_RDR[0][1]);
      const arrivee = px(ROUTE_RDR[ROUTE_RDR.length - 1][0], ROUTE_RDR[ROUTE_RDR.length - 1][1]);
      const mer = px(-43, 36);
      const cap = Number(L.cap) || 0;
      const classeNom = (s.classe && s.classe.nom) || '';
      

      const libre = (port) => [L.rang ? moi : null, pl].every(b => !b || Math.hypot(b[0] - port[0], b[1] - port[1]) > 90);

      return '<svg class="sk-carto" viewBox="0 0 800 870" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + esc(T.carteAria(this._nomAffiche, ordinal(L.rang, this._lang), Math.round(t * 100))) + '" focusable="false">' +
          '<path class="sk-carto-grille" d="' + grille + '"/>' +
          '<g>' + terres + iles + '</g>' +
          '<text class="sk-carto-mer" x="' + mer[0].toFixed(1) + '" y="' + mer[1].toFixed(1) + '" text-anchor="middle">' + esc(T.oceanAtlantique) + '</text>' +
          '<path class="sk-carto-route" d="' + d + '"/>' +
          (L.rang ? '<polyline class="sk-carto-sillage" points="' + sillage + '"/>' : '') +
          '<g class="sk-carto-flotte">' + flotteSvg + '</g>' +
          '<circle class="sk-carto-port" cx="' + depart[0].toFixed(1) + '" cy="' + depart[1].toFixed(1) + '" r="5"/>' +
          (libre(depart) ? nom(depart, -0.86, -0.86, 'end', '', T.saintMalo) : '') +
          '<circle class="sk-carto-arrivee" cx="' + arrivee[0].toFixed(1) + '" cy="' + arrivee[1].toFixed(1) + '" r="7"/>' +
          (libre(arrivee) ? nom(arrivee, 0.29, 2.14, 'start', '', T.pointeAPitre) : '') +
          (pl ? '<circle class="sk-carto-leader" cx="' + pl[0].toFixed(1) + '" cy="' + pl[1].toFixed(1) + '" r="6.5"/>' +
            nom(pl, ...cote(-nordX, -nordY, 1.25), 'sk-carto-nom--leader', leader.nom || T.leader) : '') +
          (L.rang
            ? '<g class="sk-carto-bateau" transform="translate(' + f(moi) + ')"><g class="sk-carto-balise"><circle class="sk-carto-halo" r="11"/><path transform="rotate(' + cap.toFixed(0) + ')" d="M0 -13 L8 10 L0 5.5 L-8 10 Z"/></g></g>' +
              nom(moi, ...cote(nordX, nordY, 1.55), '', this._prenomAffiche)
            : '') +
        '</svg>' +
        '<p class="sk-carto-direct">' + svg('direct') + esc(T.cartoLive) + '</p>' +
        '<div class="sk-carto-ui">' +
          (L.rang ? '<ul class="sk-carto-legende"><li><i class="est-moi"></i>' + esc(this._prenomAffiche) + '</li>' + (pl ? '<li><i class="est-leader"></i>' + esc(T.leader) + '</li>' : '') + (flotte.length ? '<li><i class="est-flotte"></i>' + esc(T.flotte(classeNom)) + '</li>' : '') + '</ul>' : '<span></span>') +
          '<a class="sk-carto-ouvrir" href="' + esc(this._urlCarto()) + '"' + (this._urlCarto().charAt(0) === '#' ? ' data-sk-ancre="sk-suivre"' : ' target="_blank" rel="noopener"') + '>' + esc(T.ouvrirCarte) + svg('sortie') + '</a>' +
        '</div>';
    }

    










    _encartPrefere(s, T) {
      const F = this._p.fans || {};
      const votes = Number(F.votes) || 0, rang = Number(F.rang) || 0;
      const portrait = s.photoProfil ? urlImage(s.photoProfil, 320, 400, 'fill', 't') : '';
      const nf = (v) => new Intl.NumberFormat(T.locale).format(v);
      const chiffres = (votes ? '<div><dd>' + esc(nf(votes)) + '</dd><dt>' + esc(T.prefFans(votes)) + '</dt></div>' : '') +
        (rang ? '<div><dd>' + ordinalHtml(rang, this._lang) + '</dd><dt>' + esc(T.prefRang) + '</dt></div>' : '');
      


      const chiffresHtml = chiffres ? '<dl class="sk-pref-chiffres">' + chiffres + '</dl>' : '<p class="sk-pref-zero"><span class="sk-pref-zero-invite">' + esc(T.prefZero) + '</span><span class="sk-pref-zero-choisi">' + esc(T.prefZeroChoisi) + '</span></p>';
      const date = F.calculeLe && (votes || rang)
        ? T.prefCalcule(new Intl.DateTimeFormat(T.locale, { day: 'numeric', month: 'long' }).format(new Date(F.calculeLe))) : '';
      

      return '<aside class="sk-pref" data-sk-pref data-mode="invite" aria-labelledby="sk-pref-titre" data-sk-reveal>' +
          '<div class="sk-pref-corps">' +
            '<div class="sk-pref-haut">' +
              '<figure class="sk-pref-carte" aria-hidden="true">' +
                (portrait ? '<img src="' + esc(portrait) + '" alt="" width="160" height="200" loading="lazy" decoding="async">' : '') +
                (s.bateau && s.bateau.voile ? '<span class="sk-pref-carte-no">' + esc(s.bateau.voile) + '</span>' : '') +
                


                '<figcaption style="--sk-mot:' + (Math.max(4, ...[s.prenom, s.nom].join(' ').split(/[\s-]+/).map(m => m.length)) * 0.7).toFixed(2) + '"><b>' + insecables(s.prenom) + '</b><b>' + insecables(s.nom) + '</b></figcaption>' +
                '<em class="sk-pref-ruban" data-sk-pref-ruban hidden>' + svg('coeur', 'est-plein') + esc(T.prefNumeroUn) + '</em>' +
              '</figure>' +
              '<div class="sk-pref-textes">' +
                '<p class="sk-pref-kicker">' + svg('coeur', 'est-plein') + esc(T.prefKicker) + '</p>' +
                '<h3 class="sk-pref-titre" id="sk-pref-titre" data-sk-pref-titre>' + esc(T.prefTitre(this._prenomAffiche)) + '</h3>' +
                chiffresHtml +
                (date ? '<p class="sk-pref-date">' + esc(date) + '</p>' : '') +
              '</div>' +
            '</div>' +
            '<p class="sk-pref-texte" data-sk-pref-texte>' + esc(T.prefTexte) + '</p>' +
            '<p class="sk-pref-actuel" data-sk-pref-actuel hidden>' + svg('coeur', 'est-plein') + '<span data-sk-pref-actuel-texte></span></p>' +
            '<p class="sk-pref-note" data-sk-pref-note hidden>' + esc(T.prefInscription) + '</p>' +
          '</div>' +
          '<div class="sk-pref-barre" role="group" aria-label="' + esc(T.prefActionsAria) + '">' +
            '<button class="sk-pref-action est-principal" type="button" data-sk-prefere data-sk-pref-mode="invite discret">' + svg('coeur') + '<span>' + esc(T.prefBouton) + '</span></button>' +
            '<button class="sk-pref-action" type="button" data-sk-partager-carte data-sk-pref-mode="invite choisi">' + svg('partager') + '<span>' + esc(T.prefPartager) + '</span></button>' +
            '<a class="sk-pref-action" href="' + esc(this._urlEspace(ESPACE_RHUM_SKIPPERS)) + '" data-sk-pref-mode="discret choisi">' + svg('palmares') + '<span>' + esc(T.prefClassementCourt) + '</span></a>' +
            '<button class="sk-pref-action est-retrait" type="button" data-sk-prefere-retirer data-sk-pref-mode="choisi" aria-describedby="sk-pref-aide">' + svg('croix') + '<span>' + esc(T.prefRetirerCourt) + '</span></button>' +
          '</div>' +
          '<p class="sk-sr" id="sk-pref-aide" aria-live="polite" data-sk-pref-aide></p>' +
        '</aside>';
    }

    







    _actus(s, A, T) {
      const liste = (A.liste || []).slice(0, 6);
      const nomComplet = [casse(s.prenom), casse(s.nom)].filter(Boolean).join(' ');
      const hub = (this._lang === 'en' ? '/en' : '') + '/medias-actualites?q=' + encodeURIComponent(nomComplet);
      const jour = new Intl.DateTimeFormat(T.locale, { day: 'numeric', month: 'short', year: 'numeric' });
      const maintenant = Date.now();
      const cartes = liste.map((a, i) => {
        const une = i === 0;
        const url = /^\/[^\s"'<>]*$/.test(String(a.url || '')) ? a.url : '';
        const [teinte, fond, vif, icone] = categorieActu(a.categorie);
        const t0 = a.date ? Date.parse(a.date) : NaN;
         
        const neuf = t0 > 0 && maintenant - t0 < 48 * 3600e3;
        






        const dims = a.image ? dimsImage(a.image) : null;
        const format = dims ? dims.w / dims.h : 0;
        const classique = format > 0 && (format < 1.3 || format > 1.9);
        const seule = liste.length === 1;
        const formatCarte = format > 0 ? Math.max(1.25, Math.min(1.78, format)) : 1.5;
        let visuel = '';
        if (a.image) {
          const [l1, h1, l2, h2] = une ? [800, 540, 1280, 864] : [480, 300, 760, 475];
           
          const img = (l, h) => classique || seule ? urlImage(a.image, l, 0, 'fit') : urlImage(a.image, l, h, 'fill');
          


          visuel = (classique ? '<img class="sk-actu-flou" src="' + esc(urlImage(a.image, 160, 100, 'fill')) + '" alt="" aria-hidden="true" loading="lazy" decoding="async">' : '') + '<img class="sk-actu-img" src="' + esc(img(l1, h1)) + '" srcset="' + esc(img(l1, h1) + ' ' + l1 + 'w, ' + img(l2, h2) + ' ' + l2 + 'w') + '" sizes="' + (une ? '(max-width: 600px) 86vw, (max-width: 860px) 100vw, 720px' : '(max-width: 600px) 86vw, (max-width: 860px) 50vw, 440px') + '" alt="" width="' + l1 + '" height="' + h1 + '" loading="lazy" decoding="async">';
        }
        return '<li class="sk-actu' + (une ? ' est-une' : '') + (classique ? ' est-classique' : '') + '" data-sk-reveal style="--sk-i:' + i + ';--cat-vif:' + vif + ';--sk-actu-format:' + formatCarte.toFixed(3) + '"><a class="sk-actu-lien" href="' + esc(url || hub) + '">' +
          '<span class="sk-actu-media">' + visuel + '</span><span class="sk-actu-voile" aria-hidden="true"></span>' +
          '<span class="sk-actu-aller" aria-hidden="true">' + svg('fleche') + '</span>' +
          '<span class="sk-actu-corps">' +
            '<span class="sk-actu-meta">' +
              (a.categorie ? '<span class="sk-actu-cat" style="color:' + teinte + ';background:' + fond + '">' + svg(icone) + esc(a.categorie) + '</span>' : '') +
              (neuf ? '<span class="sk-actu-neuf">' + esc(T.actusNouveau) + '</span>' : '') +
              (t0 > 0 ? '<time datetime="' + esc(a.date) + '">' + esc(jour.format(new Date(t0))) + '</time>' : '') +
              (a.lecture > 0 ? '<span class="sk-actu-duree">' + svg('horloge') + esc(T.actusDuree(a.lecture)) + '</span>' : '') +
            '</span>' +
            

            '<h3 class="sk-actu-titre">' + esc(a.titre).replace(/\s+([:;!?»])/g, ' $1').replace(/«\s+/g, '« ') + '</h3>' +
            (a.extrait ? '<span class="sk-actu-extrait">' + esc(a.extrait) + '</span>' : '') +
          '</span>' +
        '</a></li>';
      }).join('');
      const points = liste.length > 1 ? '<div class="sk-actus-points" aria-hidden="true">' + liste.map((a, i) => '<i' + (i ? '' : ' class="est-actif"') + '></i>').join('') + '</div>' : '';
      return '<section class="sk-sec sk-actus" id="sk-actus" aria-labelledby="sk-actus-titre"><div class="sk-cadre">' +
        '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kActus(this._prenomAffiche)) + '</p><h2 class="sk-titre" id="sk-actus-titre">' + esc(T.tActus) + '</h2></div></header>' +
        '<ul class="sk-actus-liste" data-n="' + liste.length + '" data-sk-reveal data-sk-actus-defile>' + cartes + '</ul>' + points +
        '<p class="sk-actus-pied" data-sk-reveal><a class="sk-btn sk-btn--ligne" href="' + esc(hub) + '">' + svg('actus') + '<span>' + esc(T.actusTout(this._prenomAffiche)) + '</span></a></p>' +
      '</div></section>';
    }

    





    _pronostic(s, T) {
      const P = this._p.pronostic;
      if (!P || P.phase !== 'ouvert') return '';
      const classe = P.classe || (s.classe && s.classe.nom) || '';
      const moi = P.monChoix && P.monChoix === s.id;
      const jours = P.fermetureLe ? Math.max(0, Math.ceil((Date.parse(P.fermetureLe) - Date.now()) / 86400000)) : null;
      const infos = [jours != null ? T.pronoFerme(jours) : '', P.participation ? T.pronoParticipants(P.participation) : ''].filter(Boolean);
      const lien = this._urlEspace(ESPACE_RHUM_PRONOSTICS) + '&skipper=' + encodeURIComponent(s.id) + (classe ? '&classe=' + encodeURIComponent(classe) : '');
      return '<aside class="sk-prono' + (moi ? ' est-joue' : '') + '" aria-labelledby="sk-prono-titre">' +
          '<p class="sk-prono-kicker">' + svg('palmares') + esc(T.pronoKicker) + '</p>' +
          '<h3 class="sk-prono-titre" id="sk-prono-titre">' + esc(moi ? T.pronoTitreOui(this._prenomAffiche) : T.pronoTitre(this._prenomAffiche)) + '</h3>' +
          '<p class="sk-prono-texte">' + esc(T.pronoTexte(classe)) + '</p>' +
          (infos.length ? '<p class="sk-prono-infos">' + infos.map(x => '<span>' + esc(x) + '</span>').join('') + '</p>' : '') +
          '<a class="sk-btn sk-btn--ligne sk-prono-btn" href="' + esc(lien) + '">' + esc(moi ? T.pronoModifier : T.pronoBouton(this._prenomAffiche)) + svg('fleche') + '</a>' +
        '</aside>';
    }

    _heroPhoto(s, T) {
      const couverture = s.photoCouverture;
      const image = couverture || s.photoProfil;
      const classeNom = (s.classe && s.classe.nom) || '';
      const faits = [];
      if (s.participation) faits.push('<li><b>' + esc(s.participation) + '</b>' + esc(T.participations(s.participation)) + '</li>');
      if (s.bateau && s.bateau.voile) faits.push('<li><b>' + esc(s.bateau.voile) + '</b>' + esc(T.voile) + '</li>');
      if (s.portDAttache) faits.push('<li><b>' + esc(s.portDAttache) + '</b>' + esc(T.port) + '</li>');
      const img = image
        ? '<img class="sk-hero-img" src="' + esc(urlImage(image, 1280, 0, 'fit')) + '" srcset="' + esc(srcset(image, [640, 960, 1280, 1920, 2560])) + '"' +
          ' sizes="100vw" alt="" fetchpriority="high" decoding="async"' + attrsTaille(image, 1280) + '>'
        : '';
      return '<header class="sk-hero' + (couverture ? '' : ' sk-hero--portrait') + '" id="sk-haut">' +
        '<div class="sk-hero-fond">' + img + '</div>' +
        (couverture ? '<img class="sk-hero-motif" src="' + esc(urlImage(FOND_MOTIF, 1600, 0, 'fit')) + '" alt="" decoding="async" aria-hidden="true">' : '') +
        '<div class="sk-hero-voile"></div>' +
        '<div class="sk-cadre sk-hero-in">' +
          (this._phase === 'course' ? this._badgeCourse(T) : '') +
          '<p class="sk-hero-origine">' +
            (s.drapeau ? '<img src="' + esc(urlVecteur(s.drapeau)) + '" alt="" width="24" height="24">' : '') +
            (s.nationalite ? '<span>' + esc(pays(s.nationalite, this._lang)) + '</span><b></b>' : '') +
            '<span>' + esc(T.skipper(classeNom)) + '</span>' +
          '</p>' +
          '<h1 class="sk-hero-nom"><span class="sk-hero-prenom">' + esc(s.prenom) + '</span> <span class="sk-hero-famille">' + esc(s.nom) + '</span></h1>' +
          (s.bateau && s.bateau.nom
            ? '<p class="sk-hero-bateau"><span>' + esc(s.bateau.nom) + '</span></p>'
            : '') +
          (faits.length ? '<ul class="sk-hero-faits">' + faits.join('') + '</ul>' : '') +
          '<div class="sk-hero-actions">' +
            this._boutonSuivre('sk-btn sk-btn--suivre', true) +
            '<button class="sk-btn sk-btn--ligne" type="button" data-sk-partager aria-label="' + esc(T.partagerAria(this._nomAffiche)) + '">' + svg('partager') + '<span>' + esc(T.partager) + '</span></button>' +
          '</div>' +
        '</div>' +
        '<a class="sk-hero-bas" href="#sk-profil" data-sk-ancre="sk-profil" aria-label="' + esc(T.descendre) + '">' + svg('bas') + '</a>' +
      '</header>';
    }

    

    _libelleSuivre(long, fan) {
      const T = this._T;
      const on = this._suivi;
      if (fan) return { icone: on ? 'coche' : 'plus', texte: on ? T.tuEsFan(this._prenomAffiche) : T.jeSuisFan(this._prenomAffiche) };
      return { icone: on ? 'coche' : 'plus', texte: on ? T.suivi : (long ? T.suivreQui(this._prenomAffiche) : T.suivre) };
    }

    _boutonSuivre(classes, long, fan) {
      const T = this._T;
      const on = this._suivi;
      const l = this._libelleSuivre(long, fan);
      return '<button class="' + classes + '" type="button" data-sk-suivre data-long="' + (long ? '1' : '0') + '"' + (fan ? ' data-fan="1"' : '') + ' aria-pressed="' + on + '"' +
        ' aria-label="' + esc(on ? T.nePlusSuivre(this._nomAffiche) : T.suivreQui(this._nomAffiche)) + '">' +
        svg(l.icone) + '<span>' + esc(l.texte) + '</span></button>';
    }

    _nav(s, sections, T) {
      const icone = { profil: 'profil', actus: 'actus', palmares: 'palmares', bateau: 'bateau', medias: 'medias', suivre: 'suivre' };
      

      const liens = sections.filter(x => x.nav !== false);
      

      const avatar = s.photoProfil ? urlImage(s.photoProfil, 112, 112, 'fill', 't') : '';
      const sous = [s.classe && s.classe.nom, s.bateau && s.bateau.nom].filter(Boolean).join(' · ');
      return '<nav class="sk-nav" aria-label="' + esc(T.navAria) + '">' +
        '<div class="sk-cadre"><div class="sk-nav-in">' +
          '<a class="sk-nav-id" href="#sk-haut" data-sk-ancre="sk-haut">' +
            (avatar ? '<span class="sk-nav-avatar"><img src="' + esc(avatar) + '" alt="" width="38" height="38" loading="lazy" decoding="async"></span>' : '') +
            '<span class="sk-nav-qui"><b>' + esc(this._nomAffiche) + '</b>' + (sous ? '<small>' + esc(sous) + '</small>' : '') + '</span></a>' +
          '<div class="sk-nav-defile"><span class="sk-nav-indic" aria-hidden="true"></span><ul class="sk-nav-liste">' +
            liens.map(x => '<li><a class="sk-nav-lien" href="#' + x.id + '" data-sk-ancre="' + x.id + '">' + svg(icone[x.cle]) + '<span>' + esc(T.nav[x.cle]) + '</span></a></li>').join('') +
          '</ul></div>' +
          '<div class="sk-nav-actions">' +
            this._boutonSuivre('sk-nav-btn sk-nav-btn--suivre', false) +
            '<button class="sk-nav-btn" type="button" data-sk-partager aria-label="' + esc(T.partagerAria(this._nomAffiche)) + '">' + svg('partager') + '<span>' + esc(T.partager) + '</span></button>' +
          '</div>' +
        '</div></div>' +
      '</nav>';
    }

    _profil(s, T) {
      

      

      const tuiles = [];
      if (s.nationalite) tuiles.push([s.drapeau ? '<img class="sk-id-drapeau" src="' + esc(urlVecteur(s.drapeau)) + '" alt="" width="18" height="18" loading="lazy">' : 'site', T.nationalite, '<span>' + esc(pays(s.nationalite, this._lang)) + '</span>']);
      if (s.age) tuiles.push(['calendrier', T.age, esc(T.ans(s.age))]);
      if (s.portDAttache) tuiles.push(['ancre', T.portAttache, esc(s.portDAttache)]);
      if (s.participation) tuiles.push(['depart', T.rdr, esc(T.rdrValeur(s.participation))]);
      if (s.classe && s.classe.nom) tuiles.push(['bateau', T.classe, '<span>' + esc(s.classe.nom) + '</span>', 'classe', s.classe.icone ? '<img class="sk-id-fanion" src="' + esc(urlVecteur(s.classe.icone)) + '" alt="" loading="lazy">' : '']);
      const bande = tuiles.length
        ? '<dl class="sk-id-bande" data-n="' + tuiles.length + '" style="--sk-tuiles:' + tuiles.length + '">' +
          tuiles.map((t, i) => '<div class="sk-id-tuile' + (t[3] ? ' sk-id-tuile--' + t[3] : '') + '" data-sk-reveal style="--sk-i:' + i + '"><dt>' + (t[0].charAt(0) === '<' ? t[0] : svg(t[0])) + esc(t[1]) + '</dt><dd>' + t[2] + (t[4] || '') + '</dd></div>').join('') + '</dl>'
        : '';
      const citation = s.citation
        ? '<blockquote class="sk-citation' + (s.citation.length > 150 ? ' sk-citation--longue' : '') + '" data-sk-reveal>' +
          '<svg class="sk-citation-guillemet" viewBox="0 0 120 100" aria-hidden="true" focusable="false"><path d="' + GUILLEMET + '"/><path transform="translate(56 0)" d="' + GUILLEMET + '"/></svg><p>' + esc(s.citation.replace(/^["“«\s]+|["”»\s]+$/g, '')) + '</p>' +
          '<footer>' +
            (s.photoProfil ? '<span class="sk-citation-visage" aria-hidden="true"><span><img src="' + esc(urlImage(s.photoProfil, 180, 220, 'fill', 't')) + '" alt="" width="56" height="56" loading="lazy" decoding="async"></span></span>' : '') +
            '<span class="sk-citation-qui"><b>' + esc(this._nomAffiche) + '</b>' + (s.classe && s.classe.nom ? '<small>' + esc(T.skipper(s.classe.nom)) + '</small>' : '') + '</span>' +
          '</footer></blockquote>'
        : '';
      const paras = String(s.biographie || '').split(/\n+/).map(x => x.trim()).filter(Boolean);
      const bio = paras.length
        ? '<div class="sk-bio" data-sk-reveal><p class="sk-kicker">' + esc(T.biographie) + '</p>' +
          '<div class="sk-bio-texte" data-sk-bio id="sk-bio-texte">' + paras.map(x => '<p>' + esc(x) + '</p>').join('') + '</div>' +
          '<button class="sk-lien-plus" type="button" data-sk-bio-plus aria-controls="sk-bio-texte" aria-expanded="false" hidden>' + esc(T.lireSuite) + '</button></div>'
        : this._enAttente('bio', T);
      const R = s.reseaux || {};
      const reseaux = [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['x', 'X'], ['linkedin', 'LinkedIn'], ['site', T.site]]
        .filter(([k]) => lienSur(R[k]))
        .map(([k, nom]) => '<li><a class="sk-reseau" href="' + esc(R[k]) + '" target="_blank" rel="noopener" aria-label="' + esc(T.reseauAria(nom, this._nomAffiche)) + '">' + svg(k) + '<span>' + esc(nom) + '</span></a></li>')
        .join('');
      const porte = s.porteBonheur
        ? '<div class="sk-porte"><i class="sk-porte-picto">' + svg('trefle') + '</i><div><span>' + esc(T.porteBonheur) + '</span><b>' + esc(s.porteBonheur) + '</b></div></div>'
        : '';
      



      const photoPrevue = this._modeHero === 'photo' ? (s.photoCouverture ? s.photoProfil : '') : s.photoCouverture;
      

      const photoSrc = photoPrevue || s.photoProfil;
      


      const dPhoto = dimsImage(photoSrc);
      const rapportPhoto = dPhoto ? Math.max(0.8, Math.min(1.5, dPhoto.w / dPhoto.h)) : 0.8;
      const photo = photoSrc
        ? '<figure class="sk-profil-photo" data-sk-reveal style="--sk-photo-rapport:' + rapportPhoto.toFixed(3) + ';--sk-photo-rapport-mobile:' + Math.max(1.1, rapportPhoto).toFixed(3) + '"><div class="sk-profil-photo-cadre"><img src="' + esc(urlImage(photoSrc, 960, 0, 'fit')) + '"' +
          ' srcset="' + esc(srcset(photoSrc, [480, 720, 960, 1280])) + '" sizes="(max-width: 600px) 92vw, (max-width: 860px) 520px, 460px"' +
          ' alt="' + esc(this._modeHero === 'photo' || !photoPrevue ? T.portrait(this._nomAffiche) : T.photoAction(this._nomAffiche)) + '" loading="lazy" decoding="async"' + attrsTaille(photoSrc, 960) + '></div>' +
          porte + '</figure>'
        

        : '<figure class="sk-profil-photo sk-profil-photo--attente" data-sk-reveal style="--sk-photo-rapport:1.5;--sk-photo-rapport-mobile:1.5"><div class="sk-profil-photo-cadre">' +
          '<span class="sk-profil-photo-legende">' + esc(T.attente.photo) + '</span></div>' + porte + '</figure>';

      return '<section class="sk-sec sk-profil" id="sk-profil" aria-labelledby="sk-profil-titre">' +
        '<img class="sk-sec-fond" src="' + esc(urlImage(FOND_FILIGRANE, 1440, 0, 'fit')) + '" srcset="' + esc(srcset(FOND_FILIGRANE, [800, 1440, 1989])) + '" sizes="100vw" alt="" loading="lazy" decoding="async" aria-hidden="true">' +
        '<div class="sk-cadre">' +
          '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kProfil) + '</p><h2 class="sk-titre" id="sk-profil-titre">' + esc(T.tProfil) + '</h2></div></header>' +
          bande +
          '<div class="sk-profil-grille' + (photo ? '' : ' sk-profil-grille--seule') + '">' +
            '<div class="sk-profil-texte">' +
              citation + bio +
              (((photo ? '' : porte) || reseaux) ? '<div class="sk-profil-pied" data-sk-reveal>' + (photo ? '' : porte) + (reseaux ? '<ul class="sk-reseaux" aria-label="' + esc(T.reseaux) + '">' + reseaux + '</ul>' : '') + '</div>' : '') +
              (photo ? '' : this._encartPrefere(s, T) + this._pronostic(s, T)) +
            '</div>' +
            (photo ? '<div class="sk-profil-cote">' + photo + this._encartPrefere(s, T) + this._pronostic(s, T) + '</div>' : '') +
          '</div>' +
        '</div>' +
      '</section>';
    }

    _palmares(lignes, T) {
      const classeActuelle = ((this._p && this._p.skipper && this._p.skipper.classe) || {}).nom || '';
      const victoires = lignes.filter(l => l.position === 1).length;
      const podiums = lignes.filter(l => l.position > 0 && l.position <= 3).length;
      const rdr = lignes.filter(l => l.routeDuRhum).length;
      

      const placesRdr = lignes.filter(l => l.routeDuRhum && l.position > 0).map(l => l.position);
      const meilleureRdr = placesRdr.length ? Math.min.apply(null, placesRdr) : 0;
      const chiffres = [
        victoires ? '<li class="sk-chiffre--or" data-sk-reveal style="--sk-i:0"><b>' + victoires + '</b>' + esc(T.victoires(victoires)) + '</li>' : '',
        podiums ? '<li data-sk-reveal style="--sk-i:1"><b>' + podiums + '</b>' + esc(T.podiums(podiums)) + '</li>' : '',
        '<li data-sk-reveal style="--sk-i:2"><b>' + lignes.length + '</b>' + esc(T.courses(lignes.length)) + '</li>',
        meilleureRdr ? '<li class="sk-chiffre--rdr" data-sk-reveal style="--sk-i:3"><b>' + esc(ordinal(meilleureRdr, this._lang)) + '</b>' + esc(T.meilleureRdr) + '</li>' : ''
      ].join('');
      const filtres = [['tout', lignes.length], ['victoires', victoires], ['podiums', podiums], ['rdr', rdr]]
        .filter(([k, n]) => k === 'tout' || (n > 0 && n < lignes.length));
      const filtresHtml = lignes.length >= 5 && filtres.length > 1
        ? '<div class="sk-filtres" data-sk-reveal role="group" aria-label="' + esc(T.filtresAria) + '">' +
          filtres.map(([k, n]) => '<button class="sk-filtre" type="button" data-sk-filtre="' + k + '" aria-pressed="' + (k === 'tout') + '">' + esc(T.filtres[k]) + ' <em>' + n + '</em></button>').join('') + '</div>'
        : '';
      






      const rangees = lignes.map((l, i) => {
         
        const pos = l.position > 0 ? l.position : 0;
        const fanion = !!(l.classe && l.classe.icone && l.classe.nom !== classeActuelle);
        const logo = this._logoCourse(l);
        const cls = 'sk-palm sk-palm--' + (logo ? 'logo' : 'marque') + (l.routeDuRhum ? ' sk-palm--rdr' : '') + (pos >= 1 && pos <= 3 ? ' sk-palm--p' + pos : '') +
          (fanion ? ' sk-palm--fanion' : '') + (!pos ? ' sk-palm--sans-place' : '');
         
        


        const niveau = String(l.niveau || '').toLowerCase();
        const meta = [T.epreuve[String(l.type || '').toLowerCase()], niveau === 'national' ? T.niveau.national : ''].filter(Boolean);
        const libellePlace = pos === 1 ? T.victoire : (pos === 2 || pos === 3) ? T.podium : '';
        




        const marque = logo ? '' : '<span class="sk-palm-marque" aria-hidden="true" style="--sk-marque-t:' +
          (l.course.length <= 12 ? 17 : l.course.length <= 22 ? 15 : 13) + 'px">' + esc(l.course) + '</span>';
        


        const duree = /\d\s*(j|jours?|h|min|s|days?)\b/i.test(l.mention || '');
        const mentionHtml = l.mention ? '<span class="sk-palm-mention' + (duree ? ' est-temps' : '') + '">' + (duree ? svg('vitesse') : '') + esc(l.mention) + '</span>' : '';
        return '<li class="' + cls + '" data-sk-reveal style="--sk-i:' + (i % 3) + '" data-sk-palm data-pos="' + pos + '" data-rdr="' + (l.routeDuRhum ? 1 : 0) + '" data-rang="' + i + '" data-annee="' + esc(l.annee || '') + '">' +
          '<div class="sk-palm-annee"><span class="sk-palm-an">' +
            (l.routeDuRhum ? '<img class="sk-palm-tymal" src="' + TYMAL_PANCARTE + '" alt="" loading="lazy" width="88" height="118">' : '') +
            '<span>' + esc(l.annee || '') + '</span></span></div>' +
          '<div class="sk-palm-corps">' +
            '<div class="sk-palm-tete">' + (logo || marque) +
              '<div class="sk-palm-titres"><p class="sk-palm-course">' + esc(l.course) + '</p>' +
                (meta.length || mentionHtml ? '<p class="sk-palm-meta">' + meta.map(m => '<span>' + esc(m) + '</span>').join('') + mentionHtml + '</p>' : '') +
              '</div>' +
            '</div>' +
            (l.description ? '<p class="sk-palm-desc">' + esc(l.description) + '</p>' : '') +
          '</div>' +
          '<div class="sk-palm-plaque">' +
            (pos ? '<b class="sk-palm-pos">' + ordinalHtml(pos, this._lang) + '</b>' : '') +
            (libellePlace ? '<span class="sk-palm-podium">' + esc(libellePlace) + '</span>' : '') +
          '</div>' +
          



          (fanion
            ? '<img class="sk-palm-fanion" src="' + esc(urlVecteur(l.classe.icone)) + '" alt="' + esc(T.ecusson(l.classe.nom || '')) + '" loading="lazy" height="86">'
            : '') +
        '</li>';
      }).join('');
      return '<section class="sk-sec sk-palmares" id="sk-palmares" aria-labelledby="sk-palmares-titre">' +
        '<img class="sk-sec-fond" src="' + esc(urlImage(FOND_MOTIF, 1600, 0, 'fit')) + '" srcset="' + esc(srcset(FOND_MOTIF, [900, 1600, 2400])) + '" sizes="100vw" alt="" loading="lazy" decoding="async" aria-hidden="true">' +
        '<div class="sk-cadre">' +
          '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kPalmares) + '</p><h2 class="sk-titre" id="sk-palmares-titre">' + esc(T.tPalmares) + '</h2></div></header>' +
          '<ul class="sk-chiffres" data-n="' + (chiffres.match(/<li/g) || []).length + '">' + chiffres + '</ul>' +
          filtresHtml +
          '<ol class="sk-palm-liste" data-sk-palm-liste>' + rangees + '</ol>' +
          '<p class="sk-palm-vide" data-sk-palm-vide hidden>' + esc(T.aucun) + '</p>' +
          '<button class="sk-btn sk-btn--ligne sk-palm-plus" type="button" data-sk-palm-plus hidden></button>' +
        '</div>' +
      '</section>';
    }

    


    _logoCourse(l) {
      


      const u = l.logoBlanc;
      if (!u) return '';
      




      const d = dimsImage(u);
      const r = d ? Math.max(0.5, Math.min(5, d.w / d.h)) : 2;
      const h = Math.round(Math.max(34, Math.min(46, Math.sqrt(2600 / r))));
      const w = Math.round(Math.min(136, h * r));
      return '<span class="sk-palm-logo" style="--sk-logo-l:' + w + 'px;--sk-logo-h:' + h + 'px"><img src="' + esc(urlImage(u, 336, 0, 'fit')) + '" alt="" width="' + w + '" height="' + Math.round(w / r) + '" loading="lazy" decoding="async"></span>';
    }

    _bateau(s, modele, T) {
      const b = s.bateau || {};
      const L = [];
      const m = (v) => v ? nombre(v, T) + ' m' : '';
       
      


      const lignes = [
        [T.numeroVoile, b.voile || ''], [T.longueur, m(b.longueur)], [T.largeur, m(b.largeur)],
        [T.tirant, m(b.tirantDeau)], [T.mat, m(b.hauteurMat)], [T.poids, b.poids ? poids(b.poids, T) : ''],
        [T.construction, b.construction ? String(b.construction) : ''], [T.chantier, b.chantier || ''], [T.architecte, b.architecte || '']
      ];
      lignes.filter(l => l[1]).forEach(l => L.push(l));
      const fiche = '<div class="sk-carte sk-fiche" data-sk-reveal style="--sk-i:1"><p class="sk-carte-titre">' + esc(T.fiche) + '</p><dl>' +
        lignes.map(l => '<div class="sk-ligne' + (l[1] ? '' : ' sk-ligne--attente') + '"><dt>' + esc(l[0]) + '</dt><dd>' + esc(l[1] || T.enAttente) + '</dd></div>').join('') + '</dl></div>';
      

      


      const couvProfil = this._modeHero === 'photo' ? '' : s.photoCouverture;
      const photos = [b.photo || (this._modeHero === 'photo' ? s.photoCouverture : ''), b.maquette]
        .filter((u, i, a) => u && u !== couvProfil && a.indexOf(u) === i)
        .map((u, i) => ({
          src: urlImage(u, 1200, 0, 'fit'), srcset: srcset(u, [640, 960, 1200, 1600]), flou: urlImage(u, 48, 0, 'fit'),
          vignette: urlImage(u, 280, 175), alt: i === 0 && u === b.photo ? T.photoBateau(b.nom || '') : T.photoAerienne(b.nom || '')
        }));
      this._photosBateau = photos;
      const d0 = dimsImage(b.photo && b.photo !== couvProfil ? b.photo : b.maquette);
      const rapport = d0 ? Math.max(0.9, Math.min(2.1, d0.w / d0.h)) : 1.6;
      const visuel = photos.length
        ? '<figure class="sk-bateau-visuel" data-sk-bateau data-sk-reveal>' +
            '<div class="sk-bateau-cadre" style="--sk-bateau-rapport:' + rapport.toFixed(3) + '">' +
              '<img class="sk-bateau-flou" src="' + esc(photos[0].flou) + '" alt="" aria-hidden="true" loading="lazy" decoding="async">' +
              '<img class="sk-bateau-img" data-sk-bateau-img src="' + esc(photos[0].src) + '" srcset="' + esc(photos[0].srcset) + '" sizes="(max-width: 860px) 92vw, 720px" alt="' + esc(photos[0].alt) + '" loading="lazy" decoding="async">' +
            '</div>' +
            (s.classe && s.classe.icone ? '<img class="sk-ecusson" src="' + esc(urlVecteur(s.classe.icone)) + '" alt="' + esc(T.ecusson(s.classe.nom)) + '" loading="lazy">' : '') +
            (photos.length > 1
              ? '<div class="sk-bateau-choix" role="group" aria-label="' + esc(T.photosBateau) + '">' + photos.map((ph, i) =>
                  '<button type="button" data-sk-bateau-choix="' + i + '" aria-pressed="' + (i === 0) + '" aria-label="' + esc(ph.alt) + '"><img src="' + esc(ph.vignette) + '" alt="" loading="lazy" decoding="async" width="140" height="88"></button>').join('') + '</div>'
              : '') +
          '</figure>'
        : this._enAttente('bateauPhotos', T);
      const chiffres = [[b.longueur, T.longueur], [b.largeur, T.largeur], [b.hauteurMat, T.mat], [b.tirantDeau, T.tirant]]
        .filter(x => x[0]).map(x => '<li><b>' + esc(nombre(x[0], T)) + '<small>m</small></b><span>' + esc(x[1]) + '</span></li>').join('');
      const echelle = modele && modele.image && chiffres
        







        ? '<div class="sk-echelle" data-sk-reveal><svg class="sk-defs" width="0" height="0" aria-hidden="true" focusable="false"><filter id="sk-filtre-plan" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">' +
            '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -2.7 -5.4 -0.9 3 0" result="sombre"/>' +
            '<feGaussianBlur in="sombre" stdDeviation="0.45" result="doux"/><feMorphology in="doux" operator="dilate" radius="0.5" result="epais"/><feFlood flood-color="#9EF4FD"/>' +
            '<feComposite in2="epais" operator="in" result="marin"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="marin"/></feMerge></filter></svg>' +
          '<figure><img src="' + esc(urlImage(modele.image, 720, 0, 'fit')) + '" alt="' + esc(T.echelleNote(s.classe.nom || modele.nom)) + '" loading="lazy" decoding="async"' + attrsTaille(modele.image, 720) + '></figure>' +
          '<div class="sk-echelle-textes"><p class="sk-kicker">' + esc(T.echelle) + '</p><ul class="sk-echelle-chiffres">' + chiffres + '</ul>' +
          '<p class="sk-echelle-note">' + esc(T.echelleNote(s.classe.nom || modele.nom)) + '</p></div></div>'
        : '';
      return '<section class="sk-sec sk-bateau" id="sk-bateau" aria-labelledby="sk-bateau-titre">' +
        '<img class="sk-sec-fond" src="' + esc(urlImage(FOND_FILIGRANE, 1440, 0, 'fit')) + '" srcset="' + esc(srcset(FOND_FILIGRANE, [800, 1440, 1989])) + '" sizes="100vw" alt="" loading="lazy" decoding="async" aria-hidden="true" style="transform:scaleX(-1)">' +
        '<div class="sk-cadre">' +
          '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kBateau) + '</p><h2 class="sk-titre" id="sk-bateau-titre">' + esc(b.nom || T.tBateau) + '</h2></div></header>' +
          '<div class="sk-bateau-grille">' + visuel + fiche + '</div>' +
          echelle +
        '</div>' +
      '</section>';
    }

     
    _enAttente(cle, T) {
      const icone = { bio: 'actus', palmares: 'palmares', bateau: 'bateau', bateauPhotos: 'medias', medias: 'medias' }[cle] || 'profil';
      return '<div class="sk-en-attente" data-sk-reveal role="note">' +
        '<span class="sk-en-attente-picto" aria-hidden="true">' + svg(icone) + '</span>' +
        '<div class="sk-en-attente-textes"><p class="sk-en-attente-titre">' + esc(T.attente[cle]('@@NOM@@')).replace('@@NOM@@', '<span class="sk-insecable">' + esc(this._nomAffiche) + '</span>') + '</p>' +
        '<p class="sk-en-attente-texte">' + esc(T.attenteTexte[cle]) + '</p></div></div>';
    }

    _palmaresEnAttente(T) {
      return '<section class="sk-sec sk-palmares sk-sec--attente" id="sk-palmares" aria-labelledby="sk-palmares-titre">' +
        '<img class="sk-sec-fond" src="' + esc(urlImage(FOND_MOTIF, 1600, 0, 'fit')) + '" srcset="' + esc(srcset(FOND_MOTIF, [900, 1600, 2400])) + '" sizes="100vw" alt="" loading="lazy" decoding="async" aria-hidden="true">' +
        '<div class="sk-cadre">' +
          '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kPalmares) + '</p><h2 class="sk-titre" id="sk-palmares-titre">' + esc(T.tPalmares) + '</h2></div></header>' +
          this._enAttente('palmares', T) +
        '</div></section>';
    }

    _mediasEnAttente(T) {
      return '<section class="sk-sec sk-medias sk-sec--attente" id="sk-medias" aria-labelledby="sk-medias-titre"><div class="sk-cadre">' +
        '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kMedias) + '</p><h2 class="sk-titre" id="sk-medias-titre">' + esc(T.tMedias) + '</h2></div></header>' +
        this._enAttente('medias', T) +
        '</div></section>';
    }

    _medias(T) {
      return '<section class="sk-sec sk-medias" id="sk-medias" aria-labelledby="sk-medias-titre"><div class="sk-cadre">' +
        '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kMedias) + '</p><h2 class="sk-titre" id="sk-medias-titre">' + esc(T.tMedias) + '</h2></div></header>' +
        '<skipper-gallery data-sk-galerie></skipper-gallery></div></section>';
    }

    _classe(s, T) {
      return '<section class="sk-sec sk-classe" id="sk-classe" aria-labelledby="sk-classe-titre"><div class="sk-cadre">' +
        '<header class="sk-tete" data-sk-reveal><div class="sk-tete-textes"><p class="sk-kicker">' + esc(T.kClasse) + ' · ' + esc((s.classe && s.classe.nom) || '') + '</p>' +
        '<h2 class="sk-titre" id="sk-classe-titre">' + esc(T.tClasse) + '</h2></div></header></div>' +
        '<skippers-carousel data-sk-carrousel data-sk-reveal></skippers-carousel>' + this._piedListe(T) + '</section>';
    }

     
    _brancher() {
      const R = this._racine;
      const p = this._p;
      const s = p.skipper;
      const T = this._T;

      








      this._peindrePrefere();
      this._appliquerFiltre();
      this._surPolices();
      if (typeof ResizeObserver === 'function') {
        let largeurVue = 0;
        const ro = new ResizeObserver((e) => {
          

          if (this._geoPerimee) this._geoPerimee();
          this._paliers();
          this._echelleCarte();
          this._mesurerBio();
          const w = Math.round(e[0].contentRect.width);
          if (w !== largeurVue) { largeurVue = w; this._ajusterNom(); if (this._fondreNav) this._fondreNav(); }
          if (!this._heroObserve) { this._heroObserve = true; this._observerHero(); }
          if (this._premiereMesureNav) { const f = this._premiereMesureNav; this._premiereMesureNav = null; f(); }
        });
        ro.observe(R);
        this._nettoyages.push(() => ro.disconnect());
      } else {
        this._paliers();
        this._ajusterNom();
        this._mesurerBio();
        this._heroObserve = true;
        requestAnimationFrame(() => this._observerHero());
      }

      this._mesurerScene(R, s);

       
      this._ecoute(R, 'click', (ev) => {
        const b = ev.target.closest('[data-sk-avance]');
        if (!b) return;
        const panneau = R.querySelector('#' + b.getAttribute('aria-controls'));
        if (!panneau) return;
        const ouvrir = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', String(ouvrir));
        panneau.hidden = !ouvrir;
      });

      


       
      this._ecoute(R, 'click', (ev) => {
        const a = ev.target.closest('[data-sk-ancre]');
        if (!a) return;
        const cible = R.querySelector('#' + a.getAttribute('data-sk-ancre'));
        if (!cible) return;
        ev.preventDefault();
        const doux = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        const aller = () => cible.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
        if (this._definirTousLesIntegres()) requestAnimationFrame(() => requestAnimationFrame(aller));
        else aller();
        try { history.replaceState(null, '', '#' + cible.id); } catch (e) {   }
      });

      this._brancherScrollspy();

       
      this._ecoute(R, 'click', (ev) => {
        const b = ev.target.closest('[data-sk-suivre]');
        if (!b) return;
        this._basculerSuivi();
      });

      this._ecoute(R, 'click', (ev) => {
        if (!ev.target.closest('[data-sk-partager]')) return;
        this._partager();
      });

      

      this._ecoute(R, 'click', (ev) => {
        if (ev.target.closest('[data-sk-prefere]')) this._basculerPrefere(true);
        else if (ev.target.closest('[data-sk-prefere-retirer]')) this._armerRetrait();
        else if (ev.target.closest('[data-sk-partager-carte]')) this._partager('carte', ev.target.closest('[data-sk-partager-carte]'));
      });

      

      const bateau = R.querySelector('[data-sk-bateau]');
      if (bateau) {
        this._ecoute(bateau, 'click', (ev) => {
          const b = ev.target.closest('[data-sk-bateau-choix]');
          const ph = b && (this._photosBateau || [])[Number(b.getAttribute('data-sk-bateau-choix'))];
          if (!ph || b.getAttribute('aria-pressed') === 'true') return;
          bateau.querySelectorAll('[data-sk-bateau-choix]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
          const img = bateau.querySelector('[data-sk-bateau-img]');
          const flou = bateau.querySelector('.sk-bateau-flou');
          img.classList.add('est-change');
          setTimeout(() => {
            img.addEventListener('load', () => img.classList.remove('est-change'), { once: true });
            img.srcset = ph.srcset; img.src = ph.src; img.alt = ph.alt;
            if (flou) flou.src = ph.flou;
          }, 180);
        });
      }

       
      this._ecoute(R, 'click', (ev) => {
        const f = ev.target.closest('[data-sk-filtre]');
        if (f) {
          this._filtre = f.getAttribute('data-sk-filtre');
          this._palmDeplie = false;
          R.querySelectorAll('[data-sk-filtre]').forEach(x => x.setAttribute('aria-pressed', String(x === f)));
          this._appliquerFiltre();
          return;
        }
        if (ev.target.closest('[data-sk-palm-plus]')) {
          this._palmDeplie = !this._palmDeplie;
          this._appliquerFiltre();
          if (!this._palmDeplie) R.querySelector('#sk-palmares').scrollIntoView({ block: 'start' });
        }
      });

      

      const defileActus = R.querySelector('[data-sk-actus-defile]');
      const pointsActus = R.querySelectorAll('.sk-actus-points i');
      if (defileActus && pointsActus.length) {
        let imageActus = 0;
        this._ecoute(defileActus, 'scroll', () => {
          if (imageActus) return;
          imageActus = requestAnimationFrame(() => {
            imageActus = 0;
            const course = defileActus.scrollWidth - defileActus.clientWidth;
            const n = pointsActus.length - 1;
            const k = course > 0 ? Math.round(defileActus.scrollLeft / course * n) : 0;
            pointsActus.forEach((pt, j) => pt.classList.toggle('est-actif', j === k));
          });
        }, { passive: true });
      }

       
      this._ecoute(R, 'click', (ev) => {
        const b = ev.target.closest('[data-sk-bio-plus]');
        if (!b) return;
        const t = R.querySelector('[data-sk-bio]');
        const ouvert = t.classList.toggle('est-coupe') === false;
        b.setAttribute('aria-expanded', String(ouvert));
        b.textContent = ouvert ? T.replier : T.lireSuite;
      });

      

      const galerie = R.querySelector('[data-sk-galerie]');
      if (galerie) {
        galerie.setAttribute('photos', JSON.stringify(s.galerie || []));
        galerie.setAttribute('skipper-name', this._nomAffiche);
        galerie.setAttribute('lang', this._lang);
        galerie.setAttribute('accent-color', couleurSure(s.classe && s.classe.couleur));
      }
      const outro = R.querySelector('[data-sk-outro]');
      if (outro) {
        outro.setAttribute('first-name', this._prenomAffiche);
        outro.setAttribute('accent-color', couleurSure(s.classe && s.classe.couleur));
        outro.setAttribute('email-press', s.contactPresse || '');
        outro.setAttribute('live-active', this._phase === 'course' ? 'true' : 'false');
        outro.setAttribute('follow-active', 'true');
        outro.setAttribute('is-followed', this._suivi ? 'true' : 'false');
        

        outro.setAttribute('state', this._phase === 'course' ? 'during' : 'before');
        outro.setAttribute('lang', this._lang);
        



        outro.setAttribute('layout', 'liste');
        if (p.actus && p.actus.total > 0) outro.setAttribute('news-url', (this._lang === 'en' ? '/en' : '') + '/medias-actualites?q=' + encodeURIComponent([casse(s.prenom), casse(s.nom)].filter(Boolean).join(' ')));
        else outro.removeAttribute('news-url');
        if (s.dossierPresse && s.dossierPresse.url) {
          outro.setAttribute('press-kit-url', s.dossierPresse.url);
          outro.setAttribute('press-kit-name', s.dossierPresse.nom || '');
        } else {
          outro.removeAttribute('press-kit-url');
          outro.removeAttribute('press-kit-name');
        }
        this._ecoute(outro, 'follow-toggle', (ev) => { ev.stopPropagation(); this._basculerSuivi(); });
      }
      const promo = R.querySelector('[data-sk-promo]');
      if (promo) {
        promo.setAttribute('lang', this._lang);
        promo.setAttribute('prenom', this._prenomAffiche);
        if (p.promo && p.promo.visuel) promo.setAttribute('visuel', p.promo.visuel);
        else promo.removeAttribute('visuel');
        this._peindrePromo();
        

        this._ecoute(promo, 'rdr-espace-promo', (ev) => {
          ev.stopPropagation();
          this.dispatchEvent(new CustomEvent('sk-espace', { bubbles: true, detail: { action: (ev.detail && ev.detail.action) || 'creer' } }));
        });
      }
      const carrousel = R.querySelector('[data-sk-carrousel]');
      if (carrousel) {
        


        const classe = s.classe || {};
        const liste = (p.memeClasse || []).map(x => ({
          id: x.id, slug: x.slug, prenom: x.prenom, nom: x.nom,
          photo: urlImage(x.photo, 600, 750), drapeau: urlVecteur(x.drapeau), sponsor: x.bateau || '',
          classeIcon: urlVecteur(x.classeIcone || classe.icone), classeNom: x.classeNom || classe.nom || '', devoile: x.devoile !== false
        }));
        


        for (let i = liste.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const x = liste[i]; liste[i] = liste[j]; liste[j] = x;
        }
        carrousel.setAttribute('lang', this._lang);
        carrousel.setAttribute('mystere-img', MYSTERE);
        carrousel.setAttribute('skippers', JSON.stringify(liste));
        this._ecoute(carrousel, 'navigate', (ev) => {
          const slug = ev.detail && ev.detail.slug;
          if (slug) this.dispatchEvent(new CustomEvent('sk-naviguer', { bubbles: true, detail: { slug } }));
        });
      }

      


      


      const aReveler = [...R.querySelectorAll('[data-sk-reveal]')];
      const sansAnimation = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      if (aReveler.length) {
        if (sansAnimation || typeof IntersectionObserver !== 'function') aReveler.forEach(el => el.classList.add('est-vu'));
        else {
          const ioVu = new IntersectionObserver((entrees) => {
            entrees.forEach(e => { if (!e.isIntersecting) return; ioVu.unobserve(e.target); e.target.classList.add('est-vu'); });
          }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
          aReveler.forEach(el => ioVu.observe(el));
          this._nettoyages.push(() => ioVu.disconnect());
        }
      }

      

      const encartPref = R.querySelector('[data-sk-pref]');
      if (encartPref && typeof IntersectionObserver === 'function') {
        const ioCarte = new IntersectionObserver((entrees) => {
          if (!entrees.some(e => e.isIntersecting)) return;
          ioCarte.disconnect();
          const lancer = () => this._preparerCarte();
          if (typeof requestIdleCallback === 'function') requestIdleCallback(lancer, { timeout: 2500 }); else setTimeout(lancer, 300);
        }, { rootMargin: '800px 0px 800px 0px' });
        ioCarte.observe(encartPref.closest('.sk-sec') || encartPref);
        this._nettoyages.push(() => ioCarte.disconnect());
      }

      const integres = [galerie, outro, carrousel, promo].filter(el => el && !customElements.get(el.localName));
      if (integres.length) {
        if (typeof IntersectionObserver === 'function') {
          const io = new IntersectionObserver((entrees) => {
            entrees.forEach(e => {
              if (!e.isIntersecting) return;
              io.unobserve(e.target);
              ((this._integresParSection && this._integresParSection.get(e.target)) || [e.target]).forEach(el => definirSousModule(el.localName));
            });
          }, { rootMargin: '1200px 0px 1200px 0px' });
          



          const parSection = new Map();
          integres.forEach(el => { const sec = el.closest('.sk-sec') || el; parSection.set(sec, (parSection.get(sec) || []).concat(el)); io.observe(sec); });
          this._integresParSection = parSection;
          this._nettoyages.push(() => io.disconnect());
        } else {
          integres.forEach(el => definirSousModule(el.localName));
        }
      }
    }

    






    _observerHero() {
      const R = this._racine;
      const hero = R && R.querySelector('.sk-hero');
      if (!hero || typeof IntersectionObserver !== 'function') return;
      const io = new IntersectionObserver(e => {
        const visible = e[0].isIntersecting;
        R.classList.toggle('sk--hero-cache', !visible);
        R.classList.toggle('sk--colle', !visible);
      }, { rootMargin: '-' + Math.round(parseFloat(getComputedStyle(R).getPropertyValue('--sk-nav-h')) || 76) + 'px 0px 0px 0px' });
      io.observe(hero);
      this._nettoyages.push(() => io.disconnect());
    }

    



    _definirTousLesIntegres() {
      let fait = false;
      if (this._racine && !this._racine.classList.contains('sk--deplie')) { this._racine.classList.add('sk--deplie'); fait = true; }
      ['skipper-gallery', 'skipper-outro', 'skippers-carousel', 'rdr-espace-promo'].forEach(nom => { if (definirSousModule(nom)) fait = true; });
      return fait;
    }

    








    _mesurerScene(R, s) {
      const hero = R.querySelector('.sk-hero--affiche');
      const scene = R.querySelector('[data-sk-scene]');
      const img = R.querySelector('[data-sk-portrait]');
      if (!hero || !scene || !img) return;
      




      let fait = false;
      const montrer = () => { if (!fait) { fait = true; img.classList.add('est-charge'); } };
      const secours = setTimeout(montrer, 2400);
      this._nettoyages.push(() => clearTimeout(secours));
      const mesurer = () => {
        if (!img.naturalWidth || hero.classList.contains('sk-hero--photo-libre')) { montrer(); return; }
        const e = img;
        try {
          const W = 40, Hh = 50;
          const c = document.createElement('canvas');
          c.width = W; c.height = Hh;
          const x = c.getContext('2d', { willReadFrequently: true });
          x.drawImage(e, 0, 0, W, Hh);
          const d = x.getImageData(0, 0, W, Hh).data;
          const px = [];
          const prendre = (u, v) => { const k = (v * W + u) * 4; px.push([d[k], d[k + 1], d[k + 2]]); };
          for (let u = 0; u < W; u++) { prendre(u, 0); prendre(u, 1); }
          for (let v = 2; v < 32; v++) { prendre(0, v); prendre(1, v); prendre(W - 2, v); prendre(W - 1, v); }
          const moy = [0, 1, 2].map(k => px.reduce((a, p) => a + p[k], 0) / px.length);
          const ecart = Math.sqrt(px.reduce((a, p) => a + [0, 1, 2].reduce((b, k) => b + (p[k] - moy[k]) * (p[k] - moy[k]), 0), 0) / px.length);
          if (ecart > 58) hero.classList.add('sk-hero--photo-libre');
          else scene.style.setProperty('--sk-scene', 'rgb(' + moy.map(Math.round).join(',') + ')');
          hero.setAttribute('data-fond', Math.round(ecart));
        } catch (err) {   }
        

        requestAnimationFrame(montrer);
      };
      if (img.complete && img.naturalWidth) mesurer();
      else {
        img.addEventListener('load', mesurer, { once: true });
        img.addEventListener('error', montrer, { once: true });
      }
    }

    





    

    _ajusterNomQuandPret() {
      this._ajusterNom();
      this._surPolices();
    }

     
    _surPolices() {
      const racine = this._racine;
      if (!racine) return;
      


      const pret = () => {
        if (this._racine !== racine) return;
        racine.classList.add('sk--polices');
        requestAnimationFrame(() => { if (this._racine === racine) this._ajusterNom(); });
      };
      if (document.fonts && document.fonts.load) {
        const secours = setTimeout(pret, 3000);
        this._nettoyages.push(() => clearTimeout(secours));
        document.fonts.load('italic 100px Varien').then(() => { clearTimeout(secours); pret(); }, pret);
      } else pret();
    }

    



    _ajusterMots() {
      const R = this._racine;
      if (!R) return;
      if (!this._roMots && typeof ResizeObserver === 'function') {
        const largeurs = new WeakMap();
        const ro = new ResizeObserver((entrees) => entrees.forEach((e) => {
          const w = Math.round(e.contentRect.width);
          if (!w || largeurs.get(e.target) === w) return;
          largeurs.set(e.target, w);
          this._ajusterBoite(e.target);
        }));
        this._roMots = ro;
        this._nettoyages.push(() => { ro.disconnect(); if (this._roMots === ro) this._roMots = null; });
      }
      AJUSTABLES.forEach(([boite, cible, uneLigne, plancher]) => R.querySelectorAll(boite).forEach((b) => {
        if (!b.__skMots) { b.__skMots = { cible, uneLigne, plancher }; if (this._roMots) this._roMots.observe(b); }
        this._ajusterBoite(b);
      }));
    }

    _ajusterBoite(b) {
      const cfg = b.__skMots;
      if (!cfg) return;
      const el = cfg.cible ? b.querySelector(cfg.cible) : b;
      if (!el) return;
      el.style.fontSize = '';
      el.style.whiteSpace = cfg.uneLigne ? 'nowrap' : '';
      const w = b.clientWidth;
      if (!w || b.scrollWidth <= w + 1) return;
      const base = parseFloat(getComputedStyle(el).fontSize) || 0;
      if (!base) return;
      let uneLigne = cfg.uneLigne;
      let t = base;
      for (let i = 0; i < 10 && b.scrollWidth > w + 1; i++) {
        if (t <= cfg.plancher) {
          

          if (!uneLigne) break;
          uneLigne = false;
          el.style.whiteSpace = '';
          el.style.fontSize = '';
          t = base;
          continue;
        }
        t = Math.max(cfg.plancher, Math.floor(t * (w / b.scrollWidth) * 0.97 * 10) / 10);
        el.style.fontSize = t + 'px';
      }
    }

    _ajusterNom() {
      const R = this._racine;
      if (!R) return;
      this._ajusterMots();
      R.querySelectorAll('.sk-hero--affiche .sk-hero-famille, .sk-att-nom').forEach(el => {
        el.style.fontSize = '';
        el.style.whiteSpace = '';
        const largeur = el.getBoundingClientRect().width;
        const mots = String(el.textContent || '').trim().split(/\s+/);
        const taille = parseFloat(getComputedStyle(el).fontSize) || 0;
        if (!largeur || !mots.length || !taille) return;
        const sonde = document.createElement('span');
        sonde.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;left:-9999px;top:0;font:inherit;letter-spacing:inherit;text-transform:inherit;';
        el.appendChild(sonde);
        const mesure = (t) => { sonde.textContent = t; return sonde.getBoundingClientRect().width; };
        


        let cible = mesure(mots.join(' '));
        if (cible > largeur && mots.length > 1) {
          let meilleure = Infinity;
          for (let k = 1; k < mots.length; k++) {
            meilleure = Math.min(meilleure, Math.max(mesure(mots.slice(0, k).join(' ')), mesure(mots.slice(k).join(' '))));
          }
          cible = meilleure;
        }
        sonde.remove();
        if (cible > largeur) el.style.fontSize = Math.floor(taille * largeur / cible * 0.97) + 'px';
      });
    }

    _mesurerBio() {
      const R = this._racine;
      if (!R) return;
      const t = R.querySelector('[data-sk-bio]');
      const b = R.querySelector('[data-sk-bio-plus]');
      if (!t || !b) return;
      if (b.getAttribute('aria-expanded') === 'true') return;
      t.classList.remove('est-coupe');
      const haut = t.scrollHeight;
      const ligne = parseFloat(getComputedStyle(t).lineHeight) || 28;
      const trop = haut > ligne * 8.5;
      t.classList.toggle('est-coupe', trop);
      b.hidden = !trop;
    }

    _appliquerFiltre() {
      const R = this._racine;
      const liste = R && R.querySelector('[data-sk-palm-liste]');
      if (!liste) return;
      const T = this._T;
      const PLAFOND = 6;
      const f = this._filtre;
      const rangs = [...liste.querySelectorAll('[data-sk-palm]')];
      const retenus = rangs.filter(li => {
        const pos = Number(li.getAttribute('data-pos'));
        if (f === 'victoires') return pos === 1;
        if (f === 'podiums') return pos >= 1 && pos <= 3;
        if (f === 'rdr') return li.getAttribute('data-rdr') === '1';
        return true;
      });
      rangs.forEach(li => { li.hidden = true; li.classList.remove('est-suite'); });
      



      let anneePrecedente = '';
      retenus.forEach((li, i) => {
        li.hidden = !this._palmDeplie && i >= PLAFOND;
        const annee = li.getAttribute('data-annee') || '';
        if (li.hidden) return;
        li.classList.toggle('est-suite', !!annee && annee === anneePrecedente && li.getAttribute('data-rdr') !== '1');
        anneePrecedente = annee;
      });
      R.querySelector('[data-sk-palm-vide]').hidden = retenus.length > 0;
      const plus = R.querySelector('[data-sk-palm-plus]');
      const reste = retenus.length - PLAFOND;
      plus.hidden = reste <= 0;
      if (reste > 0) plus.textContent = this._palmDeplie ? T.voirMoins : T.voirPlus(reste);
    }

    


    _brancherScrollspy() {
      const R = this._racine;
      const liens = [...R.querySelectorAll('.sk-nav-lien')];
      const cibles = liens.map(l => R.querySelector('#' + l.getAttribute('data-sk-ancre'))).filter(Boolean);
      if (!cibles.length) return;
      const defile = R.querySelector('.sk-nav-defile');
      const indic = R.querySelector('.sk-nav-indic');
      let actif = null;
      const fondre = () => {
        if (!defile) return;
        const reste = defile.scrollWidth - defile.clientWidth;
        if (reste <= 1) { defile.removeAttribute('data-deborde'); return; }
        defile.setAttribute('data-deborde', '');
        defile.style.setProperty('--sk-fg', Math.round(Math.min(28, defile.scrollLeft)) + 'px');
        defile.style.setProperty('--sk-fd', Math.round(Math.min(36, reste - defile.scrollLeft)) + 'px');
      };
      if (defile) this._ecoute(defile, 'scroll', fondre, { passive: true });
      

      const poserIndic = () => {
        if (!indic) return;
        const l = liens.find(x => x.getAttribute('aria-current') === 'true');
        if (!l) { indic.classList.remove('est-pose'); return; }
        indic.style.setProperty('--sk-indic-x', l.offsetLeft + 'px');
        indic.style.setProperty('--sk-indic-w', l.offsetWidth + 'px');
        indic.classList.add('est-pose');
      };
      const marquer = (id) => {
        if (id === actif) return;
        actif = id;
        liens.forEach(l => {
          const on = l.getAttribute('data-sk-ancre') === id;
          if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
          if (on && defile && defile.scrollWidth > defile.clientWidth) {
            const lr = l.getBoundingClientRect(), dr = defile.getBoundingClientRect();
            if (lr.left < dr.left + 12 || lr.right > dr.right - 28) defile.scrollBy({ left: lr.left - dr.left - 16, behavior: 'smooth' });
          }
        });
        poserIndic();
      };
       
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (this._racine === R) { poserIndic(); fondre(); } });
       
      this._fondreNav = () => { if (this._racine === R) fondre(); };
      

      const scene = R.querySelector('.sk-hero--affiche [data-sk-scene]');
      const hero = scene && scene.parentNode;
      const parallaxe = !!scene && !!window.matchMedia && window.matchMedia('(pointer: fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      


      const nav = R.querySelector('.sk-nav');
      








      let geo = null;
      const mesurer = (y, docH) => {
        const haut = (el) => el.getBoundingClientRect().top + y;
        geo = {
          docH, debut: haut(R), hh: hero ? hero.offsetHeight : 0,
          navH: parseFloat(getComputedStyle(R).getPropertyValue('--sk-nav-h')) || 64,
          hauts: cibles.map(haut)
        };
      };
      this._geoPerimee = () => { geo = null; };
      const calcule = () => {
        const y = window.scrollY, vue = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        if (!geo || geo.docH !== docH) mesurer(y, docH);
        const course = Math.max(1, docH - vue - geo.debut);
        const reste = Math.max(0, docH - vue) - y;
        let ligne = y + geo.navH + vue * 0.25;
        if (reste < vue) ligne += (vue - geo.navH) * Math.min(1, Math.max(0, (vue - reste) / vue));
        let courant = null;
        for (let i = 0; i < cibles.length; i++) if (geo.hauts[i] <= ligne) courant = cibles[i];
        if (nav) nav.style.setProperty('--sk-progres', Math.max(0, Math.min(1, (y - geo.debut) / course)).toFixed(4));
        if (parallaxe) {
          const dedans = Math.max(0, Math.min(geo.hh, y - geo.debut));
          if (dedans < geo.hh) scene.style.setProperty('--sk-par', dedans.toFixed(1));
        }
        marquer(courant ? courant.id : null);
      };
      let attente = false;
      const demander = () => {
        if (attente) return;
        attente = true;
        requestAnimationFrame(() => { attente = false; calcule(); });
      };
      



      if (typeof ResizeObserver === 'function') this._premiereMesureNav = () => { if (this._racine === R) calcule(); };
      else demander();
      this._ecoute(window, 'scroll', demander, { passive: true });
      this._ecoute(window, 'resize', () => { geo = null; demander(); poserIndic(); fondre(); }, { passive: true });
    }

    





    







    _garderGeste(geste) {
      this._gesteEnAttente = geste;
      if (geste.type === 'suivi') { this._fanEnAttente = true; this._peindreSuivi(); }
      else { this._prefereEnAttente = true; this._peindrePrefere(); }
      clearTimeout(this._gesteMinuteur);
      this._gesteMinuteur = setTimeout(() => {
        this._gesteEnAttente = null;
        this._fanEnAttente = false; this._prefereEnAttente = false;
        this._peindreSuivi();
      }, 9000);
    }

    _rejouerGeste() {
      const g = this._gesteEnAttente;
      if (!g || !this._membre || !this._p) return;
      this._gesteEnAttente = null;
      clearTimeout(this._gesteMinuteur);
      this._fanEnAttente = false; this._prefereEnAttente = false;
      if (g.type === 'suivi') this._basculerSuivi();
      else this._basculerPrefere(g.voter);
    }

    _basculerSuivi() {
      const s = this._p.skipper;
      if (!this._membre) { this._garderGeste({ type: 'suivi' }); return; }
      if (this._membre === 'non') {
        if (this._suivi) return;
        this._fanEnAttente = true;
        this._peindreSuivi();
        clearTimeout(this._attenteMinuteur);
        this._attenteMinuteur = setTimeout(() => { this._fanEnAttente = false; this._peindreSuivi(); }, 9000);
        this.dispatchEvent(new CustomEvent('sk-suivre', { bubbles: true, detail: { skipperId: s.id, slug: s.slug, prenom: this._prenomAffiche, suivre: true, inscription: true } }));
        return;
      }
      const suivre = !this._suivi;
      this._suivi = suivre;
      this._fansDelta += suivre ? 1 : -1;
      this._peindreSuivi();
      this.dispatchEvent(new CustomEvent('sk-suivre', { bubbles: true, detail: { skipperId: s.id, slug: s.slug, suivre } }));
    }

    


    _basculerPrefere(voter) {
      const s = this._p.skipper;
      const T = this._T;
      if (!this._membre) { this._garderGeste({ type: 'prefere', voter }); return; }
      if (this._membre === 'non') {
        if (!voter) return;
        this._prefereEnAttente = true;
        this._peindrePrefere();
        clearTimeout(this._attentePrefere);
        this._attentePrefere = setTimeout(() => { this._prefereEnAttente = false; this._peindrePrefere(); }, 9000);
        this.dispatchEvent(new CustomEvent('sk-prefere', { bubbles: true, detail: { skipperId: s.id, slug: s.slug, prenom: this._prenomAffiche, prefere: true, inscription: true } }));
        return;
      }
      if (voter === this._prefere || this._prefereEnCours) return;
      const ancien = voter ? this._prefereActuel : '';
      const avant = this._prefere;
      this._prefere = voter;
      if (voter) this._prefereActuel = '';
      this._desarmerRetrait();
      

      this._prefereEnCours = true;
      clearTimeout(this._prefereMinuteur);
      this._prefereMinuteur = setTimeout(() => { this._prefereEnCours = false; this._peindrePrefere(); }, 8000);
      this._peindrePrefere();
      

      const message = voter ? (ancien ? T.prefRemplace(this._nomAffiche, ancien) : T.prefConfirme(this._prenomAffiche)) : T.prefRetire(this._prenomAffiche);
      this._toast(message, { libelle: T.annuler, duree: 6000, action: () => this._annulerPrefere(avant, ancien) });
      this.dispatchEvent(new CustomEvent('sk-prefere', { bubbles: true, detail: { skipperId: s.id, slug: s.slug, prenom: this._prenomAffiche, prefere: voter, remplace: ancien } }));
    }

    

    _annulerPrefere(etaitPrefere, ancien) {
      const s = this._p && this._p.skipper;
      if (!s) return;
      this._prefereEnCours = false;
      this._prefere = !!etaitPrefere;
      this._prefereActuel = ancien || '';
      this._peindrePrefere();
      this.dispatchEvent(new CustomEvent('sk-prefere', { bubbles: true, detail: { skipperId: s.id, slug: s.slug, prenom: this._prenomAffiche, prefere: !!etaitPrefere, annuler: true, restaurer: ancien || '' } }));
    }

     
    _armerRetrait() {
      const R = this._racine;
      const b = R && R.querySelector('[data-sk-prefere-retirer]');
      if (!b || this._prefereEnCours) return;
      if (this._retraitArme) { this._desarmerRetrait(); this._basculerPrefere(false); return; }
      this._retraitArme = true;
      b.classList.add('est-armee');
      b.querySelector('span').textContent = this._T.prefConfirmer;
      const aide = R.querySelector('[data-sk-pref-aide]');
      if (aide) aide.textContent = this._T.prefConfirmerAide;
      clearTimeout(this._retraitMinuteur);
      this._retraitMinuteur = setTimeout(() => this._desarmerRetrait(), 4000);
    }

    _desarmerRetrait() {
      this._retraitArme = false;
      clearTimeout(this._retraitMinuteur);
      const R = this._racine;
      const b = R && R.querySelector('[data-sk-prefere-retirer]');
      if (b) { b.classList.remove('est-armee'); const sp = b.querySelector('span'); if (sp && this._T) sp.textContent = this._T.prefRetirerCourt; }
      const aide = R && R.querySelector('[data-sk-pref-aide]');
      if (aide) aide.textContent = '';
    }

     
    _confirmerPrefere() {
      this._prefereEnCours = false;
      clearTimeout(this._prefereMinuteur);
      if (this._prefereEnAttente && this._prefere) {
        this._prefereEnAttente = false;
        clearTimeout(this._attentePrefere);
        if (this._T) this._toast(this._T.prefConfirme(this._prenomAffiche));
      }
      this._peindrePrefere();
    }

    _peindrePrefere() {
      const R = this._racine;
      if (!R || !this._T || !this._p) return;
      const box = R.querySelector('[data-sk-pref]');
      if (!box) return;
      const T = this._T, on = this._prefere, attente = this._prefereEnAttente;
      


      const mode = on ? 'choisi' : (this._membre !== 'non' && this._prefereActuel ? 'discret' : 'invite');
      box.setAttribute('data-mode', mode);
      box.classList.toggle('est-prefere', on);
      box.querySelector('[data-sk-pref-titre]').textContent = mode === 'choisi' ? T.prefTitreOui(this._prenomAffiche)
        : mode === 'discret' ? T.prefTitreInfo(this._prenomAffiche) : T.prefTitre(this._prenomAffiche);
      const texte = box.querySelector('[data-sk-pref-texte]');
      texte.textContent = on ? T.prefTexteOui(this._prenomAffiche) : T.prefTexte;
      texte.hidden = mode === 'discret';
      const actuel = box.querySelector('[data-sk-pref-actuel]');
      actuel.hidden = mode !== 'discret';
      actuel.querySelector('[data-sk-pref-actuel-texte]').innerHTML = esc(T.prefDiscret) + ' <b>' + esc(this._prefereActuel) + '</b>';
      box.querySelector('[data-sk-pref-ruban]').hidden = !on;
      box.querySelector('[data-sk-pref-note]').hidden = !(this._membre === 'non' && !on);
      

      let premiere = true, derniere = null;
      box.querySelectorAll('[data-sk-pref-mode]').forEach(a => {
        const visible = a.getAttribute('data-sk-pref-mode').split(' ').indexOf(mode) >= 0;
        a.hidden = !visible;
        a.classList.toggle('est-premier', visible && premiere);
        if (visible) { premiere = false; derniere = a; }
        a.classList.remove('est-dernier');
        if (this._prefereEnCours) a.setAttribute('aria-disabled', 'true'); else a.removeAttribute('aria-disabled');
      });
      if (derniere) derniere.classList.add('est-dernier');
      const choisir = box.querySelector('.sk-pref-action[data-sk-prefere]');
      choisir.classList.toggle('est-principal', mode !== 'choisi');
      if (attente) choisir.setAttribute('aria-busy', 'true'); else choisir.removeAttribute('aria-busy');
      choisir.innerHTML = svg(attente ? 'direct' : 'coeur') + '<span>' + esc(attente ? (this._gesteEnAttente ? T.patience : T.ouvertureInscription) : mode === 'discret' ? T.prefChoisir(this._prenomAffiche) : T.prefBouton) + '</span>';
      box.querySelector('[data-sk-partager-carte]').classList.toggle('est-principal', mode === 'choisi');
      if (mode !== 'choisi') this._desarmerRetrait();
      const legende = box.querySelector('.sk-pref-carte figcaption');
      if (legende && legende.__skMots) this._ajusterBoite(legende);
    }

    _confirmerSuivi() {
      if (this._fanEnAttente && this._suivi) {
        this._fanEnAttente = false;
        clearTimeout(this._attenteMinuteur);
        this._fansDelta += 1;
        if (this._T) this._toast(this._T.fanConfirme(this._prenomAffiche));
      }
      this._peindreSuivi();
    }

    _peindreSuivi() {
      const R = this._racine;
      if (!R || !this._T || !this._p) return;
      const T = this._T;
      R.querySelectorAll('[data-sk-suivre]').forEach(b => {
        const l = this._libelleSuivre(b.getAttribute('data-long') === '1', b.getAttribute('data-fan') === '1');
        b.setAttribute('aria-pressed', String(this._suivi));
        b.setAttribute('aria-label', this._suivi ? T.nePlusSuivre(this._nomAffiche) : T.suivreQui(this._nomAffiche));
        if (this._fanEnAttente) b.setAttribute('aria-busy', 'true'); else b.removeAttribute('aria-busy');
        b.innerHTML = svg(this._fanEnAttente ? 'direct' : l.icone) + '<span>' + esc(this._fanEnAttente ? (this._gesteEnAttente ? T.patience : T.ouvertureInscription) : l.texte) + '</span>';
      });
      const outro = R.querySelector('[data-sk-outro]');
      if (outro) outro.setAttribute('is-followed', this._suivi ? 'true' : 'false');
      this._peindrePrefere();
      this._peindrePromo();
    }

    



    _peindrePromo() {
      const promo = this._racine && this._racine.querySelector('[data-sk-promo]');
      if (!promo) return;
      promo.hidden = this._membre !== 'non';
      if (this._membre) {
        promo.setAttribute('membre', this._membre);
        promo.setAttribute('inscription', 'page');
      }
    }

    







    





    _preparerCarte() {
      if (this._carteEnCours) return this._carteEnCours;
      const s = this._p && this._p.skipper;
      if (!s || typeof File !== 'function') return null;
      const essai = document.createElement('canvas');
      if (!essai.getContext || typeof essai.toBlob !== 'function') return null;
      const T = this._T;
      const majuscules = (v) => String(v || '').toLocaleUpperCase(this._lang === 'en' ? 'en' : 'fr');
      

       
      let slug = String(s.slug || '').split('/').filter(Boolean).pop() || '';
      try { slug = decodeURIComponent(slug); } catch (e) {   }
      const adresse = 'routedurhum.com' + (this._lang === 'en' ? '/en' : '') + '/skippers' + (slug ? '/' + slug : '');
      const charger = (src) => new Promise((ok) => {
        if (!src) { ok(null); return; }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.onload = () => ok(img);
        img.onerror = () => ok(null);
        img.src = src;
      });
      const polices = document.fonts && typeof document.fonts.load === 'function'
        ? Promise.all(['italic 400 100px Varien', '400 40px Montserrat', '600 40px Montserrat', '700 40px Montserrat', '800 40px Montserrat'].map(f => document.fonts.load(f).catch(() => null)))
        : Promise.resolve();
      this._carteEnCours = Promise.all([
        charger(s.photoProfil ? urlImage(s.photoProfil, 900, 1200, 'fill', 't') : ''),
        charger(s.classe && s.classe.icone ? urlVecteur(s.classe.icone) : ''),
        polices
      ]).then(([portrait, ecusson]) => new Promise((ok, ko) => {
        try {
          const canvas = dessinerCarteFan({
            portrait, ecusson,
            accent: s.classe && s.classe.couleur,
            prenom: majuscules(s.prenom), nom: majuscules(s.nom), bateau: majuscules(s.bateau && s.bateau.nom),
            kicker: T.carteKicker, annee: T.carteAnnee, numeroUn: T.carteNumeroUn, appel: T.carteAppel,
            adresse, ligne1: T.carteLigne1, ligne2: T.carteLigne2
          });
          canvas.toBlob((blob) => ok(blob), 'image/jpeg', 0.9);
        } catch (e) { ko(e); }
      })).then((blob) => {
        if (!blob) return null;
        const base = [s.prenom, s.nom].join(' ').normalize('NFD').replace(/[^\x20-\x7e]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        this._carteFichier = new File([blob], (base || 'skipper') + '-route-du-rhum-2026.jpg', { type: 'image/jpeg' });
        return this._carteFichier;
      }).catch((e) => {
        console.warn('[rdr-skipper] carte de partage indisponible, le partage garde le lien', e);
        return null;
      });
      return this._carteEnCours;
    }

    async _partager(contexte, declencheur) {
      const T = this._T;
      const s = this._p.skipper;
      const url = window.location.href.split('#')[0];
      const titre = this._nomAffiche + ' | Route du Rhum 2026';
      const texte = contexte === 'carte' ? T.partageCarte(this._nomAffiche) : T.partageTexte(this._nomAffiche, (s.classe && s.classe.nom) || '', s.bateau && s.bateau.nom);
      

      if (contexte === 'carte') {
        const carte = this._preparerCarte();
        if (carte) {
          if (this._fermerCarte) this._fermerCarte();
          this._fermerCarte = ouvrirCarteFan({
            en: this._lang === 'en', nom: this._nomAffiche, url, titre, texte, fichier: carte, declencheur,
            surPartage: (methode) => this.dispatchEvent(new CustomEvent('sk-partage', { bubbles: true, detail: { methode, contexte: 'carte' } }))
          });
          return;
        }
      }
      try {
        if (typeof navigator.share === 'function') {
          await navigator.share({ title: titre, text: texte, url });
          this.dispatchEvent(new CustomEvent('sk-partage', { bubbles: true, detail: { methode: 'natif', contexte: contexte || 'fiche' } }));
          return;
        }
      } catch (e) { if (e && e.name === 'AbortError') return; }
      try {
        await navigator.clipboard.writeText(url);
        this._toast(T.lienCopie);
        this.dispatchEvent(new CustomEvent('sk-partage', { bubbles: true, detail: { methode: 'copie', contexte: contexte || 'fiche' } }));
      } catch (e) { this._toast(url); }
    }

    

    _toast(message, action) {
      let t = this._toastEl;
      if (!t || !t.isConnected) {
        t = document.createElement('div');
        t.className = 'rdr-sk-toast';
        t.setAttribute('role', 'status');
        t.setAttribute('aria-live', 'polite');
        document.body.appendChild(t);
        this._toastEl = t;
      }
      t.textContent = '';
      const texte = document.createElement('span');
      texte.textContent = message;
      t.appendChild(texte);
      t.classList.toggle('a-une-action', !!action);
      if (action) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = action.libelle;
        b.addEventListener('click', () => { t.classList.remove('est-visible'); clearTimeout(this._toastMinuteur); action.action(); }, { once: true });
        t.appendChild(b);
      }
      t.classList.add('est-visible');
      clearTimeout(this._toastMinuteur);
      this._toastMinuteur = setTimeout(() => t.classList.remove('est-visible'), (action && action.duree) || 2200);
    }
  }

  customElements.define('rdr-skipper', RdrSkipper);
})();
})();
;(function(){
if (!customElements.get('skippers-list')) {

const MYSTERE_IMG = 'https://static.wixstatic.com/media/7bb303_cd1d1b1816354038b8c6ab40848c2094~mv2.avif';
const PAGE_SIZE = 28;

const CLASSES_CONFIG = {
  'Ultim':  { couleur: '#429991', icon: 'https://static.wixstatic.com/shapes/7bb303_0ed87d76a89f4e6ebd6008778014958e.svg', label: 'ULTIM' },
  'Ocean Fifty':  { couleur: '#72b9f1', icon: 'https://static.wixstatic.com/shapes/7bb303_0b5383f285c8470089ae854bc67b13b5.svg', label: 'OCEAN FIFTY' },
  'Class40':      { couleur: '#7e93ef', icon: 'https://static.wixstatic.com/shapes/7bb303_b13535fe4621478fb5fb52e98c751b11.svg', label: 'CLASS40' },
  'IMOCA':        { couleur: '#76bcbe', icon: 'https://static.wixstatic.com/shapes/7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg', label: 'IMOCA' },
  'Vintage Mono': { couleur: '#f9f06e', icon: 'https://static.wixstatic.com/shapes/7bb303_9b4ee8478c6b4453b668b04eb278406c.svg', label: 'VINTAGE MONO' },
  'Vintage Multi':{ couleur: '#f19f39', icon: 'https://static.wixstatic.com/shapes/7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg', label: 'VINTAGE MULTI' },
};

const PROFIL_CONFIG = {
  'ROOKIES':           { label: 'Rookies',           sub: 'Première participation',                    couleur: '#5DBFC0', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
  'FEMMES':            { label: 'Femmes',             couleur: '#76bcbe', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="9" y1="18" x2="15" y2="18"/></svg>', genre: true },
  'ANCIENS VAINQUEURS':{ label: 'Anciens vainqueurs', sub: 'Ayant déjà remporté la course',             couleur: '#FCF150', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
  'LOCAUX':            { label: 'Locaux',             sub: 'Skippers du Pays Malouin ou Guadeloupéen',  couleur: '#f19f39', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>' },
  'INTERNATIONAUX':    { label: 'Internationaux',     sub: 'Hors France',                               couleur: '#72b9f1', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
};




const URL_CLASSES = { 'ultim': 'Ultim', 'ocean-fifty': 'Ocean Fifty', 'class40': 'Class40', 'imoca': 'IMOCA', 'vintage-mono': 'Vintage Mono', 'vintage-multi': 'Vintage Multi' };
const URL_PROFILS = { 'rookies': 'ROOKIES', 'femmes': 'FEMMES', 'hommes': 'HOMMES', 'vainqueurs': 'ANCIENS VAINQUEURS', 'locaux': 'LOCAUX', 'internationaux': 'INTERNATIONAUX' };

 
const HOMMES_CFG = { label: 'Hommes', couleur: '#72b9f1', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="14" r="5"/><line x1="19" y1="5" x2="14.15" y2="9.85"/><polyline points="15 5 19 5 19 9"/></svg>' };

const CARD_ROTATIONS = [-0.5,0.4,-0.3,0.5,-0.4,0.3,-0.5,0.4,-0.2,0.5,-0.4,0.3,0.5,-0.3,0.4,-0.5,0.2,-0.4,0.5,-0.3,0.5,-0.2,0.4,-0.5,0.3,-0.4,0.5,-0.3];

const FAV_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
const FAV_ON  = '<svg viewBox="0 0 24 24" fill="#e63946" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

function escapeHTML(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

const _rgbCache = new Map();
const _wixUrlCache = new Map();
function hexToRGB(c) {
  if (_rgbCache.has(c)) return _rgbCache.get(c);
  const m = (c||'').match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  const v = m ? `${parseInt(m[1],16)},${parseInt(m[2],16)},${parseInt(m[3],16)}` : '93,191,192';
  _rgbCache.set(c, v);
  return v;
}

Object.values(CLASSES_CONFIG).forEach(c => hexToRGB(c.couleur));
Object.values(PROFIL_CONFIG).forEach(c => hexToRGB(c.couleur));

 
 
 
 
const SL_DICT = {
  fr: {
    filtres: 'Filtres',
    search_ph_mobile: 'Rechercher...',
    search_aria: 'Rechercher un skipper',
    search_ph: 'Nom, bateau...',
    search_ph_drawer: 'Rechercher un skipper...',
    label_profil: 'Profil',
    label_tri: 'Tri',
    label_classes: 'Classes',
    sort_random: 'Aléatoire',
    reset: 'Réinitialiser ×',
    view_grid: 'Vue grille',
    view_list: 'Vue liste',
    fab_open_aria: 'Ouvrir les filtres',
    close: 'Fermer',
    empty_title: 'Cap dans le vide',
    empty_sub: 'Aucun skipper ne correspond à ces filtres',
    empty_reset: 'Tout réinitialiser',
    see_profile: 'Voir le profil',
    profile_soon: 'Fiche bientôt disponible',
    fav_add: 'Ajouter aux favoris',
    fav_remove: 'Retirer des favoris',
    'pf_ROOKIES': 'Rookies', 'pf_ROOKIES_sub': 'Première participation',
    'pf_FEMMES': 'Femmes',
    'pf_HOMMES': 'Hommes',
    'pf_ANCIENS VAINQUEURS': 'Anciens vainqueurs', 'pf_ANCIENS VAINQUEURS_sub': 'Ayant déjà remporté la course',
    'pf_LOCAUX': 'Locaux', 'pf_LOCAUX_sub': 'Skippers du Pays Malouin ou Guadeloupéen',
    'pf_INTERNATIONAUX': 'Internationaux', 'pf_INTERNATIONAUX_sub': 'Hors France',
  },
  en: {
    filtres: 'Filters',
    search_ph_mobile: 'Search...',
    search_aria: 'Search for a skipper',
    search_ph: 'Name, boat...',
    search_ph_drawer: 'Search for a skipper...',
    label_profil: 'Profile',
    label_tri: 'Sort',
    label_classes: 'Classes',
    sort_random: 'Random',
    reset: 'Reset ×',
    view_grid: 'Grid view',
    view_list: 'List view',
    fab_open_aria: 'Open filters',
    close: 'Close',
    empty_title: 'Nothing on the horizon',
    empty_sub: 'No skipper matches these filters',
    empty_reset: 'Reset all',
    see_profile: 'View profile',
    profile_soon: 'Profile coming soon',
    fav_add: 'Add to favorites',
    fav_remove: 'Remove from favorites',
    'pf_ROOKIES': 'Rookies', 'pf_ROOKIES_sub': 'First-time entry',
    'pf_FEMMES': 'Women',
    'pf_HOMMES': 'Men',
    'pf_ANCIENS VAINQUEURS': 'Past winners', 'pf_ANCIENS VAINQUEURS_sub': 'Have already won the race',
    'pf_LOCAUX': 'Locals', 'pf_LOCAUX_sub': 'Skippers from the Saint-Malo or Guadeloupe regions',
    'pf_INTERNATIONAUX': 'International', 'pf_INTERNATIONAUX_sub': 'Outside France',
  },
};







  const MEM_CLE = 'rdrMemSkippersListeV1';
  const MEM_TTL_MS = 30 * 60 * 1000;
  const memLangue = () => /^\/en(\/|$)/.test((typeof location !== 'undefined' && location.pathname) || '') ? 'en' : 'fr';
  function memLire(suffixe) {
    try { const m = JSON.parse(sessionStorage.getItem(MEM_CLE + ':' + suffixe) || 'null'); return (m && typeof m.le === 'number' && Date.now() - m.le < MEM_TTL_MS) ? m : null; }
    catch (e) { return null; }
  }
  function memEcrire(suffixe, valeurs) {
    try { sessionStorage.setItem(MEM_CLE + ':' + suffixe, JSON.stringify(Object.assign({ le: Date.now() }, valeurs))); }
    catch (e) {   }
  }

class SkippersList extends HTMLElement {
  constructor() {
    super();
    this._all = [];
    this._filtered = [];
    this._page = 0;
    this._activeClasse = null;
    this._activeFilters = {};
    this._activeGenre = null;
    this._search = '';
    this._sort = 'random';
    this._view = 'grid';
    this._searchTimer = null;
    this._favoris = {};
    this._counterRaf = null;
    this._shellReady = false;
    this._pendingSkippers = null;
    this._pendingFavoris = null;
    this._dataLoaded = false;
    this._allById = null;
    this._shuffledAll = null;
    this._cleanups = [];
    this._portalRoot    = null;
    this._portalOverlay = null;
    this._portalDrawer  = null;
    this._portalSearch  = null;
    this._portalContent = null;
    this._vvCleanup     = null;
    this._closeDrawerBound = null;
    this._drawerTrapCleanup = null;   
    this._drawerTrigger     = null;   
  }

   
   
  _markNavLoading(card) {
    if (!card || card.querySelector('.sl-navspin')) return;
    card.classList.add('sl-navloading');
    const spin = document.createElement('span');
    spin.className = 'sl-navspin';
    spin.setAttribute('aria-hidden', 'true');
    spin.innerHTML = '<svg viewBox="0 0 40 40"><defs><linearGradient id="sl-spg" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#FCF150"></stop><stop offset="1" stop-color="#5DBFC0"></stop></linearGradient></defs>' +
      '<circle class="sl-navspin-trk" cx="20" cy="20" r="15"></circle>' +
      '<circle class="sl-navspin-arc" cx="20" cy="20" r="15"></circle></svg>';
    card.appendChild(spin);
    setTimeout(() => { try { card.classList.remove('sl-navloading'); spin.remove(); } catch (e) {   } }, 6000);
  }

  _lireAdresse() {
    let p;
    try { p = new URLSearchParams(window.location.search); } catch (e) { return; }
    const classe = URL_CLASSES[String(p.get('classe') || '').toLowerCase()];
    if (classe) this._activeClasse = classe;
    String(p.get('profil') || '').toLowerCase().split(',').map((x) => x.trim()).forEach((k) => {
      const f = URL_PROFILS[k];
      if (!f) return;
      if (f === 'HOMMES') { this._activeGenre = 'HOMMES'; this._activeFilters['FEMMES'] = false; return; }
      this._activeFilters[f] = true;
      if (f === 'FEMMES') this._activeGenre = null;
    });
    if (this._activeFilters['ROOKIES'] && this._activeFilters['ANCIENS VAINQUEURS']) this._activeFilters['ANCIENS VAINQUEURS'] = false;
    const q = String(p.get('q') || '').trim().slice(0, 60);
    if (q) this._search = q;
    if (p.get('tri') === 'az') this._sort = 'az';
  }

  _ecrireAdresse() {
    let u;
    try { u = new URL(window.location.href); } catch (e) { return; }
    const p = u.searchParams;
    const classe = Object.keys(URL_CLASSES).find((k) => URL_CLASSES[k] === this._activeClasse);
    if (classe) p.set('classe', classe); else p.delete('classe');
    const profils = Object.keys(URL_PROFILS).filter((k) => {
      const f = URL_PROFILS[k];
      return f === 'HOMMES' ? this._activeGenre === 'HOMMES' : !!this._activeFilters[f];
    });
    if (profils.length) p.set('profil', profils.join(',')); else p.delete('profil');
    if (this._search.trim()) p.set('q', this._search.trim()); else p.delete('q');
    if (this._sort === 'az') p.set('tri', 'az'); else p.delete('tri');
    const requete = p.toString().split('%2C').join(',');
    const cible = u.pathname + (requete ? '?' + requete : '') + u.hash;
    if (cible === location.pathname + location.search + location.hash) return;
    try { history.replaceState(history.state, '', cible); } catch (e) {   }
  }

  connectedCallback() {
    this.style.display = 'block';
    this.style.width = '100%';
    if (!this._adresseLue) { this._adresseLue = true; this._lireAdresse(); }
     
     
    if (!this._onPageShow) {
      this._onPageShow = () => {
        try {
          this.querySelectorAll('.sl-navloading').forEach(n => n.classList.remove('sl-navloading'));
          this.querySelectorAll('.sl-navspin').forEach(n => n.remove());
        } catch (e) {   }
      };
      window.addEventListener('pageshow', this._onPageShow);
    }
    this._renderShell();
    this._shellReady = true;
    this._appliedLang = this._lang();
    if (this._activeFilterCount() || this._sort !== 'random') {
      ['#sl-search', '#sl-search-mobile'].forEach((sel) => { const i = this.querySelector(sel); if (i) i.value = this._search; });
      this._updateFilterStyles();
    }
    if (this._pendingSkippers !== null) {
      this._processSkippers(this._pendingSkippers);
      this._pendingSkippers = null;
      if (this._brut) memEcrire(this._lang(), { skippers: this._brut });
    } else if (!this._dataLoaded) {
       
      const m = memLire(this._lang());
      if (m && typeof m.skippers === 'string') {
        let parsed = null;
        try { parsed = JSON.parse(m.skippers); } catch (e) { parsed = null; }
        if (Array.isArray(parsed) && parsed.length) { this._brut = m.skippers; this._depuisMemoire = true; this._processSkippers(parsed); }
      }
    }
    if (this._pendingFavoris !== null) {
      this._favoris = this._pendingFavoris;
      this._pendingFavoris = null;
    }
  }

  disconnectedCallback() {
    this._closeDrawer();
    if (this._onPageShow) { window.removeEventListener('pageshow', this._onPageShow); this._onPageShow = null; }
    this._cleanups.forEach(fn => fn());
    this._cleanups = [];
    if (this._counterRaf) cancelAnimationFrame(this._counterRaf);
    if (this._searchTimer) clearTimeout(this._searchTimer);
    if (this._vvCleanup) { this._vvCleanup(); this._vvCleanup = null; }
    if (this._portalRoot) {
      this._portalRoot.remove();
      this._portalRoot    = null;
      this._portalOverlay = null;
      this._portalDrawer  = null;
      this._portalSearch  = null;
      this._portalContent = null;
    }
  }

  static get observedAttributes() { return ['skippers','favoris','lang']; }

   
  _lang() { return this.getAttribute('lang') === 'en' ? 'en' : 'fr'; }
  _t(key) { return (SL_DICT[this._lang()] || SL_DICT.fr)[key]; }

   
   
  _key(el, fn) {
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); fn(e); }
    });
  }

   
   
  _applyLang() {
    const nl = this._lang();
    if (this._appliedLang === nl) return;
    this._appliedLang = nl;
    if (!this._shellReady) return;            
    this._cleanups.forEach(fn => fn());       
    this._cleanups = [];
    this._renderShell();
    if (this._dataLoaded) {
      const si = this.querySelector('#sl-search'); if (si) si.value = this._search || '';
      const sm = this.querySelector('#sl-search-mobile'); if (sm) sm.value = this._search || '';
      if (this._view === 'list') {
        this.querySelector('#sl-view-list')?.classList.add('active');
        this.querySelector('#sl-view-grid')?.classList.remove('active');
      }
      this._animateCounter(this._filtered.length);
      this._renderGrid();
      this._renderPagination();
      this._updateFilterStyles();
      this._refreshFavoriButtons();
      const block = this.querySelector('#sl-counter-block');
      if (block) block.classList.add('visible');
    }
  }

  attributeChangedCallback(name, _, val) {
    if (name === 'lang') { this._applyLang(); return; }
    if (name === 'skippers') {
      


      if (this._dataLoaded && !this._depuisMemoire) return;
      if (val && this._shellReady) memEcrire(this._lang(), { skippers: val });
      

      if (this._depuisMemoire) { this._depuisMemoire = false; return; }
      let parsed;
      try { parsed = JSON.parse(val || '[]'); } catch(e) { parsed = []; }
      this._brut = val; this._depuisMemoire = false;
      if (!this._shellReady) { this._pendingSkippers = parsed; return; }
      this._processSkippers(parsed);
    }
    if (name === 'favoris') {
      let parsed;
      try { parsed = JSON.parse(val || '{}'); } catch(e) { parsed = {}; }
      if (!this._shellReady) { this._pendingFavoris = parsed; return; }
      this._favoris = parsed;
      this._refreshFavoriButtons();
    }
  }

  _naviguer(url) {
    if (!url || this._navEnCours) return;
    this._navEnCours = true;
    try { location.assign(url); } catch (e) { this._navEnCours = false; }
  }

  _processSkippers(data) {
    this._dataLoaded = true;
    this._all = data.map(s => {
       
      const filtreArr = Array.isArray(s.filtre)
        ? s.filtre.map(f => (f||'').toUpperCase().trim())
        : (s.filtre ? [(s.filtre||'').toUpperCase().trim()] : []);
      return {
        ...s,
        _filtreArr: filtreArr,
        _searchKey: ((s.prenom||'')+' '+(s.nom||'')+' '+(s.bateau||'')+' '+(s.nationalite||'')).toLowerCase(),
      };
    });
    this._allById = new Map(this._all.map(s => [s._id, s]));
    this._shuffledAll = [...this._all];
    for (let i=this._shuffledAll.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[this._shuffledAll[i],this._shuffledAll[j]]=[this._shuffledAll[j],this._shuffledAll[i]];}
    this._applyFilters();
    this._animateCounter(this._filtered.length);
    this._renderGrid();
    this._renderPagination();
    const block = this.querySelector('#sl-counter-block');
    if (block) block.classList.add('visible');
  }


  










  _wixToUrl(url, largeur, hauteur) {
    if (!url) return '';
    const cle = largeur ? url + '|' + largeur + 'x' + hauteur : url;
    if (_wixUrlCache.has(cle)) return _wixUrlCache.get(cle);
    let fichier = null;
    let result = url;
    if (!url.startsWith('http')) {
      const m = url.match(/wix:image:\/\/v1\/([^/#]+)/);
      if (m) { fichier = m[1]; result = 'https://static.wixstatic.com/media/' + fichier; }
      else { const s = url.match(/wix:vector:\/\/v1\/([^/#]+)/); if (s) result = 'https://static.wixstatic.com/shapes/' + s[1]; }
    } else if (url.includes('static.wixstatic.com/media/') && !url.includes('/v1/')) {
      const m = url.match(/\/media\/([^/#?]+)$/);
      if (m) fichier = m[1];
    }
    if (fichier && largeur) {
      const ext = (fichier.split('.').pop() || 'jpg').toLowerCase();
      result = 'https://static.wixstatic.com/media/' + fichier +
        '/v1/fill/w_' + largeur + ',h_' + hauteur +
        ',al_c,q_70,enc_avif,quality_auto/img.' + ext;
    }
    _wixUrlCache.set(cle, result);
    return result;
  }

   
  _safeUrl(u) {
    let s = String(u == null ? '' : u).trim();
    if (!s) return '';
    let m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) s = 'https://static.wixstatic.com/media/' + m[1];
    else if ((m = s.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) s = 'https://static.wixstatic.com/shapes/' + m[1];
    const okScheme = /^https?:/i.test(s);
    const relative = /^(\/|#|\?|\.\/|\.\.\/)/.test(s) || !/^[a-z][a-z0-9+.\-]*:/i.test(s);
    if (!okScheme && !relative) return '';
    return s.replace(/"/g, '%22').replace(/'/g, '%27');
  }
  _safeColor(c, fallback) {
    fallback = arguments.length > 1 ? fallback : '#5DBFC0';
    if (c == null) return fallback;
    const hex = String(c).trim().replace(/^#/, '');
    return /^[0-9a-fA-F]{3,8}$/.test(hex) ? '#' + hex : fallback;
  }

  _applyFilters() {
    let r = this._sort === 'random' ? (this._shuffledAll ? [...this._shuffledAll] : [...this._all]) : [...this._all];
    if (this._activeClasse) r = r.filter(s => (s.classes?.nom || '') === this._activeClasse);
    if (this._activeGenre) r = r.filter(s => s._filtreArr.includes(this._activeGenre));
     
    Object.keys(this._activeFilters).forEach(key => {
      if (this._activeFilters[key]) {
        r = r.filter(s => s._filtreArr.includes(key));
      }
    });
    if (this._search.trim()) {
      const q = this._search.trim().toLowerCase();
      r = r.filter(s => (s._searchKey || '').includes(q));
    }
    if (this._sort === 'az') r.sort((a,b) => (a.nom||'').localeCompare(b.nom||''));
     
     
    this._filtered = r;
    this._page = 0;
  }

  _activeFilterCount() {
    let n = this._activeClasse ? 1 : 0;
    n += Object.values(this._activeFilters).filter(Boolean).length;
    if (this._activeGenre) n++;
    if (this._search.trim()) n++;
    return n;
  }

  _animateCounter(target) {
    const el = this.querySelector('#sl-counter-num');
    if (!el) return;
    if (this._counterRaf) cancelAnimationFrame(this._counterRaf);
     
     
     
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.val = String(target); el.textContent = target; return;
    }
    const start = Math.max(0, parseInt(el.dataset.val || '0', 10) || 0);
    el.dataset.val = String(start);
    if (start === target) { el.textContent = target; return; }
    const DURATION = 550;
    const t0 = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - t0) / DURATION, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.max(0, Math.round(start + (target - start) * ease));
      el.dataset.val = String(val);
      el.textContent = val;
      if (progress < 1) this._counterRaf = requestAnimationFrame(tick);
      else { el.dataset.val = String(target); el.textContent = target; }
    };
    this._counterRaf = requestAnimationFrame(tick);
  }

  _refreshFavoriButtons() {
    this.querySelectorAll('[data-favori-id]').forEach(btn => {
      const isFav = !!this._favoris[btn.dataset.favoriId];
      btn.classList.toggle('is-fav', isFav);
      btn.querySelector('.sl-fav-icon').innerHTML = isFav ? FAV_ON : FAV_OFF;
      btn.setAttribute('aria-label', isFav ? this._t('fav_remove') : this._t('fav_add'));
      btn.setAttribute('aria-pressed', String(isFav));
    });
  }

  _renderShell() {
    this.innerHTML = `<style>
      




      skippers-list, skippers-list *, skippers-list *::before, skippers-list *::after,
      [id^="sl-portal-"], [id^="sl-portal-"] *, [id^="sl-portal-"] *::before, [id^="sl-portal-"] *::after { box-sizing:border-box; margin:0; padding:0; }

      .sl-root { width:100%; min-height:100vh; min-height:100dvh; background:transparent; position:relative; overflow:hidden; }
      .sl-inner { max-width:1600px; margin:0 auto; padding:52px 40px 100px; position:relative; z-index:1; }

       
      .sl-mobile-bar { display:none; background:transparent; border:none; padding:0; gap:10px; align-items:center; margin:0 0 16px; }
      .sl-mobile-filter-btn { display:flex; align-items:center; gap:7px; padding:10px 16px; border-radius:24px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.22); color:#fff; font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; cursor:pointer; flex-shrink:0; transition:background 0.2s, border-color 0.2s, color 0.2s; }
      .sl-mobile-filter-btn.has-filters { background:rgba(93,191,192,0.12); border-color:rgba(93,191,192,0.4); color:#5DBFC0; }
      .sl-mobile-filter-btn svg { width:13px; height:13px; stroke:currentColor; fill:none; stroke-width:2; }
      .sl-mobile-badge { display:inline-flex; align-items:center; justify-content:center; width:17px; height:17px; border-radius:50%; background:#5DBFC0; color:#07111F; font-size:9px; font-weight:700; }
      .sl-mobile-search { flex:1; }
       
      .sl-mobile-search input { width:100%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:24px; padding:10px 16px; color:#fff; font-family:'Montserrat',sans-serif; font-size:16px; outline:none; transition:border-color 0.2s, background 0.2s; }
      .sl-mobile-search input::placeholder { color:rgba(255,255,255,0.28); }

       
      .sl-header { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:20px; }
      .sl-title-block { display:flex; align-items:center; gap:20px; }
      .sl-title { font-family:'Varien',sans-serif; font-style:italic; font-size:clamp(52px,6vw,88px); color:#fff; text-transform:uppercase; line-height:0.9; }

      .sl-counter-block { display:flex; flex-direction:column; align-items:flex-start; justify-content:center; padding-left:20px; border-left:2px solid rgba(93,191,192,0.35); opacity:0; transition:opacity 0.5s ease; }
      .sl-counter-block.visible { opacity:1; }
      .sl-counter-num { font-family:'Varien',sans-serif; font-style:italic; font-size:clamp(26px,2.8vw,40px); color:#fff; line-height:1; letter-spacing:-0.02em; }
      .sl-counter-label { font-family:'Montserrat',sans-serif; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.2em; color:rgba(93,191,192,0.6); }

      .sl-class-filters { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
      .sl-class-btn { cursor:pointer; border:none; background:none; padding:0; flex-shrink:0; transition:transform 0.3s cubic-bezier(0.25,0,0,1), opacity 0.3s ease; }
      .sl-class-btn img { display:block; height:100px; width:auto; pointer-events:none; }
      .sl-class-btn.filter-default { opacity:1; transform:translateY(0); }
      .sl-class-btn.filter-default:hover { transform:translateY(-8px); }
      .sl-class-btn.filter-active { opacity:1; transform:scale(1.12) translateY(-6px); }
      .sl-class-btn.filter-inactive { opacity:0.25; }
      .sl-class-btn.filter-inactive:hover { opacity:0.5; transform:translateY(-3px); }
      @media (hover:none) {
        .sl-class-btn.filter-default:hover { transform:translateY(0); }
        .sl-class-btn.filter-inactive:hover { opacity:0.25; transform:translateY(0); }
      }

      .sl-sep { height:2px; margin:20px 0 28px; background:linear-gradient(90deg, rgba(93,191,192,0.5) 0%, rgba(114,185,241,0.2) 40%, transparent 80%); }

       
      .sl-layout { display:flex; gap:28px; align-items:flex-start; }

       
      .sl-sidebar {
        width:256px; flex-shrink:0;
        background:linear-gradient(180deg, rgba(16,21,36,0.92) 0%, rgba(10,14,26,0.92) 100%);
        backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
        border:1px solid rgba(93,191,192,0.15);
        border-radius:14px; padding:22px 18px 26px;
        position:sticky; top:24px;
        display:flex; flex-direction:column; gap:28px;
        box-shadow:0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(93,191,192,0.1);
        transition:box-shadow 0.4s ease;
      }
      .sl-sidebar::before { content:''; position:absolute; top:0; left:20px; right:20px; height:1px; background:linear-gradient(90deg, transparent, rgba(93,191,192,0.5), transparent); border-radius:1px; }

      .sl-search-wrap { position:relative; }
      .sl-search { width:100%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-bottom:2px solid rgba(93,191,192,0.3); border-radius:8px; padding:10px 12px 10px 36px; color:#fff; font-family:'Montserrat',sans-serif; font-size:13px; outline:none; transition:border-color 0.25s, background 0.25s, box-shadow 0.25s; }
      .sl-search::placeholder { color:rgba(255,255,255,0.3); }
      .sl-search:hover { border-color:rgba(255,255,255,0.2); background:rgba(255,255,255,0.09); }
      .sl-search:focus { border-color:rgba(93,191,192,0.4); border-bottom-color:rgba(93,191,192,0.8); background:rgba(93,191,192,0.08); box-shadow:0 0 0 3px rgba(93,191,192,0.08), 0 4px 20px rgba(93,191,192,0.1); }
      .sl-search-icon { position:absolute; left:11px; top:50%; transform:translateY(-50%); color:rgba(255,255,255,0.3); pointer-events:none; }
      .sl-search-icon svg { display:block; width:14px; height:14px; stroke:currentColor; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }

      .sl-filter-section { display:flex; flex-direction:column; gap:8px; }
      .sl-filter-label { font-family:'Montserrat',sans-serif; font-size:9px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(93,191,192,0.5); display:flex; align-items:center; gap:10px; }
      .sl-filter-label::after { content:''; flex:1; height:1px; background:linear-gradient(90deg, rgba(93,191,192,0.2), transparent); }

      .sl-filter-pills { display:flex; flex-direction:column; gap:4px; }
      .sl-pill {
        cursor:pointer; display:flex; align-items:center; gap:10px;
        padding:10px 12px;
        background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.06);
        border-left:3px solid var(--pill-c, rgba(255,255,255,0.1));
        border-radius:0 6px 6px 0;
        font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700;
        color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:0.07em;
        transition:background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        user-select:none;
      }
      .sl-pill:hover { background:rgba(var(--pill-rgb),0.08); color:rgba(255,255,255,0.85); transform:translateX(2px); border-color:rgba(var(--pill-rgb),0.2); border-left-color:var(--pill-c); }
      .sl-pill.active { background:rgba(var(--pill-rgb),0.18); border-color:rgba(var(--pill-rgb),0.35); border-left-color:var(--pill-c); border-left-width:4px; color:var(--pill-c); box-shadow:0 0 16px rgba(var(--pill-rgb),0.2), inset 0 0 8px rgba(var(--pill-rgb),0.06); transform:translateX(4px); font-weight:800; }
      .sl-pill svg { width:14px; height:14px; flex-shrink:0; stroke:currentColor; opacity:0.6; transition:opacity 0.2s; }
      .sl-pill:hover svg, .sl-pill.active svg { opacity:1; }
      .sl-pill-text { display:flex; flex-direction:column; gap:1px; }
      .sl-pill-sub { font-size:9px; font-weight:500; color:rgba(255,255,255,0.38); text-transform:none; letter-spacing:0; line-height:1.2; transition:color 0.2s; }
      .sl-pill.active .sl-pill-sub { color:rgba(var(--pill-rgb),0.75); }
      .sl-pill:hover .sl-pill-sub { color:rgba(255,255,255,0.6); }

       
      .sl-sort-btns { display:flex; position:relative; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:3px; gap:0; }
      .sl-sort-slider { position:absolute; top:3px; height:calc(100% - 6px); background:rgba(93,191,192,0.18); border:1px solid rgba(93,191,192,0.4); border-radius:5px; transition:left 0.3s cubic-bezier(0.34,1.2,0.64,1), width 0.3s cubic-bezier(0.34,1.2,0.64,1); pointer-events:none; z-index:0; box-shadow:0 0 10px rgba(93,191,192,0.15); }
      .sl-sort-btn { flex:1; padding:7px 4px; border-radius:5px; cursor:pointer; border:none; background:transparent; font-family:'Montserrat',sans-serif; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:rgba(255,255,255,0.35); transition:color 0.2s; text-align:center; position:relative; z-index:1; }
      .sl-sort-btn + .sl-sort-btn::before { content:''; position:absolute; left:0; top:20%; height:60%; width:1px; background:rgba(255,255,255,0.08); transition:opacity 0.2s; }
      .sl-sort-btn.active + .sl-sort-btn::before, .sl-sort-btn + .sl-sort-btn.active::before { opacity:0; }
      .sl-sort-btn:hover { color:rgba(255,255,255,0.65); }
      .sl-sort-btn.active { color:#5DBFC0; }

      .sl-reset { padding-top:2px; display:none; }
      .sl-reset.visible { display:block; }
      .sl-reset-btn { width:100%; padding:9px; background:none; border:1px solid rgba(255,255,255,0.08); border-radius:6px; color:rgba(255,255,255,0.3); font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; cursor:pointer; transition:border-color 0.2s, color 0.2s; }
      .sl-reset-btn:hover { border-color:rgba(220,60,60,0.4); color:rgba(255,100,100,0.8); }

       
      .sl-main { flex:1; min-width:0; }
      .sl-toolbar { display:flex; align-items:center; justify-content:flex-end; margin-bottom:16px; gap:8px; }
      .sl-view-btn { width:34px; height:34px; border:1px solid rgba(255,255,255,0.1); border-radius:6px; background:rgba(255,255,255,0.03); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:border-color 0.2s, color 0.2s, background 0.2s; color:rgba(255,255,255,0.3); }
      .sl-view-btn:hover { border-color:rgba(255,255,255,0.25); color:rgba(255,255,255,0.7); }
      .sl-view-btn.active { background:rgba(93,191,192,0.12); border-color:rgba(93,191,192,0.4); color:#5DBFC0; }
      .sl-view-btn svg { width:16px; height:16px; fill:currentColor; }
       
      #sl-view-list { display:none !important; }

       
      .sl-pill-genre-wrap { display:flex; gap:0; align-items:stretch; width:100%; }
      .sl-pill-genre-wrap .sl-pill {
        flex:1; min-width:0;
        border-radius:0 0 0 0;
        border-right:none;
      }
      .sl-pill-hommes {
        flex:1; min-width:0; display:flex; align-items:center; justify-content:center; gap:6px;
        padding:10px 8px;
        background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.06);
        border-left:1px solid rgba(255,255,255,0.1);
        border-radius:0 6px 6px 0;
        font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700;
        text-transform:uppercase; letter-spacing:0.07em;
        color:rgba(255,255,255,0.4); cursor:pointer;
        transition:background 0.2s, color 0.2s, border-color 0.2s;
        user-select:none;
      }
      .sl-pill-hommes svg { width:12px; height:12px; stroke:currentColor; flex-shrink:0; opacity:0.6; transition:opacity 0.2s; }
      .sl-pill-hommes:hover { background:rgba(114,185,241,0.08); color:rgba(255,255,255,0.75); }
      .sl-pill-hommes:hover svg { opacity:1; }
      .sl-pill-hommes.active { background:rgba(114,185,241,0.18); border-color:rgba(114,185,241,0.35); color:#72b9f1; font-weight:800; }
      .sl-pill-hommes.active svg { opacity:1; }
       
      .sl-pill:focus-visible, .sl-pill-hommes:focus-visible, .sl-portal-drawer [data-classe]:focus-visible { outline:2px solid #5DBFC0; outline-offset:1px; }
       
      .sl-card-wrap:focus-visible { outline:none; }
      .sl-card-wrap:focus-visible .sl-card { outline:2px solid #5DBFC0; outline-offset:2px; }

       
      @keyframes shimmer { 0% { background-position:-600px 0; } 100% { background-position:600px 0; } }
      @media (prefers-reduced-motion:reduce) { .sl-skeleton-card { animation:none; } }
      .sl-skeleton-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; padding-top:4px; }
      .sl-skeleton-card { aspect-ratio:4/5; border-radius:28px 3px 16px 3px; background:linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.08) 300px, rgba(255,255,255,0.04) 600px); background-size:600px 100%; animation:shimmer 1.8s ease-in-out infinite; }
      .sl-skeleton-card:nth-child(2) { animation-delay:.15s; }
      .sl-skeleton-card:nth-child(3) { animation-delay:.3s; }
      .sl-skeleton-card:nth-child(4) { animation-delay:.45s; }

       
      .sl-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; padding-top:4px; }

      @keyframes sl-fadeup { from { opacity:0; transform:translateY(16px) rotate(var(--rot,0deg)); } to { opacity:1; transform:translateY(0) rotate(var(--rot,0deg)); } }

      .sl-card-wrap {
        position:relative;
        padding-top:18px; padding-right:12px;
        transform:rotate(var(--rot,0deg));
        transition:transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
        animation:sl-fadeup 0.4s ease both;
        cursor:default;
        isolation:isolate;
      }
      .sl-card-wrap--clickable { cursor:pointer; }
      .sl-card-wrap--clickable:hover,
      .sl-card-wrap--revealed:hover {
        transform:rotate(0deg) translateY(-10px) scale(1.035);
        transition:transform 0.35s cubic-bezier(0.34,1.2,0.64,1), filter 0.25s ease;
        will-change:transform;
      }
      .sl-card-wrap--clickable:hover { filter:brightness(1.08); }
      .sl-card-wrap--revealed:hover  { filter:brightness(1.06); }
      @media (hover:none) {
        .sl-card-wrap--clickable:hover,
        .sl-card-wrap--revealed:hover { transform:rotate(var(--rot,0deg)); filter:none; will-change:auto; }
        .sl-card-wrap--clickable:hover .sl-card,
        .sl-card-wrap--revealed:hover .sl-card { border-color:transparent; box-shadow:none; }
        .sl-card-wrap--clickable:hover .sl-card::after,
        .sl-card-wrap--revealed:hover .sl-card::after { opacity:0.4; height:2px; box-shadow:none; }
        .sl-card-wrap--clickable:hover .sl-card-img,
        .sl-card-wrap--revealed:hover .sl-card-img { transform:none; }
        .sl-card-wrap--clickable:hover .sl-card-cta { opacity:0; }
      }

      .sl-card {
        position:relative; overflow:hidden;
        border-radius:28px 3px 16px 3px;
        transform:translateZ(0);
        -webkit-mask-image:-webkit-radial-gradient(white, black);
        background:#0f2238;
        border:1.5px solid transparent;
        aspect-ratio:4/5;
        transition:box-shadow 0.3s ease, border-color 0.3s;
        contain:layout paint;
      }
      .sl-card-wrap--clickable:hover .sl-card,
      .sl-card-wrap--revealed:hover .sl-card { border-color:var(--cc); box-shadow:0 0 0 1px var(--cc), 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(var(--cc-rgb),0.12); }

      .sl-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:var(--cc); opacity:0.4; transition:opacity 0.3s, height 0.3s; }
      .sl-card.mystery-card::after { display:none; }
      .sl-card-wrap--clickable:hover .sl-card::after,
      .sl-card-wrap--revealed:hover .sl-card::after { opacity:1; height:4px; box-shadow:0 0 8px var(--cc); }

      .sl-card-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top center; }
      .sl-card-img.mystery-img { object-position:center center; }

      

      .sl-navloading { cursor:progress; }
      .sl-navloading .sl-card-img { filter:brightness(0.72); }
      .sl-navspin { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); z-index:6; width:38px; height:38px; border-radius:50%; display:grid; place-items:center; background:rgba(10,26,53,0.66); -webkit-backdrop-filter:blur(3px); backdrop-filter:blur(3px); box-shadow:0 6px 16px rgba(7,16,34,0.42); pointer-events:none; animation:sl-spin-in 0.18s ease both; }
      .sl-navspin svg { width:24px; height:24px; transform-origin:50% 50%; animation:sl-spin 0.9s linear 0.5s infinite; }
      .sl-navspin-trk { fill:none; stroke:rgba(255,255,255,0.16); stroke-width:3.4; }
      .sl-navspin-arc { fill:none; stroke:url(#sl-spg); stroke-width:3.4; stroke-linecap:round; stroke-dasharray:94.2; stroke-dashoffset:94.2; transform:rotate(-90deg); transform-origin:50% 50%; animation:sl-arc-draw 0.55s cubic-bezier(0.3,0.75,0.3,1) forwards; }
      @keyframes sl-arc-draw { to { stroke-dashoffset:24; } }
      @keyframes sl-spin { to { transform:rotate(360deg); } }
      @keyframes sl-spin-in { from { opacity:0; transform:translate(-50%,-50%) scale(0.6); } to { opacity:1; transform:translate(-50%,-50%) scale(1); } }
      .sl-grid[data-hover-classe] .sl-card-wrap:not([data-classe-match]) { opacity:0.35; transform:scale(0.97); }
      .sl-grid[data-hover-classe] .sl-card-wrap[data-classe-match] { transform:scale(1.01); }
      .sl-card-wrap--clickable:hover .sl-card-img,
      .sl-card-wrap--revealed:hover .sl-card-img { transform:scale(1.07); transition:transform 0.4s cubic-bezier(0.34,1.1,0.64,1); }

      @keyframes mystery-pulse { 0%,100%{opacity:0.35;} 50%{opacity:0.6;} }
      .sl-card.mystery-card { filter:saturate(0.72) brightness(0.85); }
      .sl-card.mystery-card .sl-card-img { object-position:center center; transform:scale(1.08); }
      .sl-card.mystery-card::before { content:''; position:absolute; inset:0; z-index:1; background:linear-gradient(135deg, rgba(var(--cc-rgb),0.08) 0%, transparent 60%); animation:mystery-pulse 4s ease-in-out infinite; }
      @media (max-width:860px) { .sl-card.mystery-card::before { animation:none; } }
      @media (prefers-reduced-motion:reduce) { .sl-card.mystery-card::before { animation:none; } .sl-fav-btn.popping { animation:none; } @keyframes sl-fadeup { from { opacity:0; } to { opacity:1; } } }

      .sl-card-soon-overlay { position:absolute; inset:0; z-index:5; background:rgba(6,14,26,0.82); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; padding:16px; opacity:0; pointer-events:none; transition:opacity 0.3s ease; border-radius:inherit; }
      .sl-card-soon-overlay.show { opacity:1; }
      .sl-card-soon-overlay-icon { font-size:22px; }
      .sl-card-soon-overlay-txt { font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:rgba(255,255,255,0.8); text-align:center; line-height:1.4; }

      .sl-card-overlay { position:absolute; bottom:0; left:0; right:0; z-index:3; padding:44px 14px 18px; background:linear-gradient(to top, rgba(6,14,26,1) 0%, rgba(6,14,26,0.92) 40%, rgba(6,14,26,0.55) 70%, transparent 100%); }
      .sl-card-cta { display:inline-flex; align-items:center; gap:5px; margin-top:6px; font-family:'Montserrat',sans-serif; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:var(--cc); opacity:0; transform:translateY(4px); transition:opacity 0.25s, transform 0.25s; }
      .sl-card-cta svg { width:10px; height:10px; stroke:currentColor; fill:none; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
      .sl-card-wrap--clickable:hover .sl-card-cta { opacity:1; transform:translateY(0); }

      .sl-card-class { position:absolute; top:-8px; right:0; z-index:10; pointer-events:none; }
      .sl-card-class img { height:clamp(67px, 6.5vw, 98px); width:auto; display:block; }

      .sl-card-flag-prenom { display:flex; align-items:center; gap:7px; margin-bottom:3px; }
      .sl-card-flag { width:18px; height:18px; border-radius:50%; object-fit:cover; display:block; flex-shrink:0; }
      .sl-card-prenom { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:rgba(255,255,255,0.7); line-height:1.2; white-space:nowrap; overflow:hidden; }
      .sl-card-nom { font-family:'Varien',sans-serif; font-style:italic; font-size:clamp(20px,2.2vw,36px); color:#fff; text-transform:uppercase; line-height:0.9; margin-bottom:5px; white-space:nowrap; overflow:hidden; text-overflow:clip; letter-spacing:-0.04em; }
      .sl-card-nom[data-len="7"], .sl-card-nom[data-len="8"] { font-size:clamp(19px,2.05vw,34px); }
      .sl-card-nom[data-len="9"], .sl-card-nom[data-len="10"] { font-size:clamp(18px,1.9vw,32px); }
      .sl-card-nom[data-len="11"], .sl-card-nom[data-len="12"] { font-size:clamp(17px,1.75vw,30px); }
      .sl-card-nom[data-len="13"], .sl-card-nom[data-len="14"] { font-size:clamp(15px,1.55vw,26px); }
      .sl-card-nom[data-len="15"], .sl-card-nom[data-len="16"] { font-size:clamp(13px,1.3vw,22px); }
      .sl-card-nom[data-len="17"], .sl-card-nom[data-len="18"], .sl-card-nom[data-len="19"], .sl-card-nom[data-len="20"] { font-size:clamp(12px,1vw,15px); white-space:normal; word-break:break-word; line-height:1.1; }
      .sl-card-nom[data-len="21"], .sl-card-nom[data-len="22"], .sl-card-nom[data-len="23"], .sl-card-nom[data-len="24"], .sl-card-nom[data-len="25"], .sl-card-nom[data-len="26"], .sl-card-nom[data-len="27"], .sl-card-nom[data-len="28"], .sl-card-nom[data-len="29"], .sl-card-nom[data-len="30"] { font-size:clamp(11px,0.9vw,13px); white-space:normal; word-break:break-word; line-height:1.1; }
      .sl-card-bateau { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; color:var(--cc); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

       
      





      .sl-fav-btn { display:none !important; }

       
      .sl-empty { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:100px 20px; gap:16px; }
      @keyframes boat-rock { 0%,100%{transform:rotate(-5deg);} 50%{transform:rotate(5deg);} }
      .sl-empty-boat { font-size:52px; animation:boat-rock 3s ease-in-out infinite; }
      .sl-empty-title { font-family:'Varien',sans-serif; font-style:italic; font-size:32px; color:rgba(255,255,255,0.3); text-transform:uppercase; }
      .sl-empty-sub { font-family:'Montserrat',sans-serif; font-size:13px; color:rgba(255,255,255,0.2); }
      .sl-empty-reset { margin-top:8px; padding:10px 24px; border-radius:6px; border:1px solid rgba(93,191,192,0.3); background:rgba(93,191,192,0.08); color:#5DBFC0; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; cursor:pointer; transition:background 0.2s; }
      .sl-empty-reset:hover { background:rgba(93,191,192,0.15); }

       
      .sl-list { display:flex; flex-direction:column; gap:6px; }
      .sl-list-item { display:grid; grid-template-columns:36px 72px 44px 20px 1fr auto auto 20px; align-items:center; gap:14px; padding:0 18px 0 0; border-radius:10px; background:rgba(9,21,37,0.8); border:1px solid rgba(255,255,255,0.06); border-left:3px solid var(--cc); height:100px; overflow:hidden; transition:background 0.2s, transform 0.2s; animation:sl-fadeup 0.3s ease both; }
      .sl-list-item:nth-child(even) { background:rgba(13,28,48,0.8); }
      .sl-list-item--clickable { cursor:pointer; }
      .sl-list-item--clickable:hover { background:rgba(93,191,192,0.06); transform:translateX(3px); box-shadow:0 4px 20px rgba(0,0,0,0.2); }
      .sl-list-item.mystery { opacity:0.4; cursor:default; }
      .sl-list-num { font-family:'VarienOutline',sans-serif; font-style:italic; font-size:15px; color:rgba(255,255,255,0.15); text-align:center; padding-left:10px; }
      .sl-list-img { width:60px; height:78px; border-radius:22px 2px 10px 2px; object-fit:cover; object-position:top; }
      .sl-list-class img { height:46px; width:auto; }
      .sl-list-flag { width:18px; height:18px; border-radius:50%; object-fit:cover; }
      .sl-list-name { min-width:0; }
      .sl-list-prenom { font-family:'Montserrat',sans-serif; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:rgba(255,255,255,0.5); margin-bottom:2px; }
      .sl-list-nom { font-family:'Varien',sans-serif; font-style:italic; font-size:26px; color:#fff; text-transform:uppercase; line-height:1; margin-bottom:4px; }
      .sl-list-bateau { font-family:'Montserrat',sans-serif; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; color:var(--cc); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      .sl-list-stats { display:flex; flex-direction:column; gap:5px; align-items:flex-end; flex-shrink:0; min-width:140px; }
      .sl-list-stat { display:flex; align-items:center; gap:5px; }
      .sl-list-stat-icon { width:12px; height:12px; stroke:rgba(255,255,255,0.3); fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; flex-shrink:0; }
      .sl-list-stat-val { font-family:'Montserrat',sans-serif; font-size:11px; font-weight:600; color:rgba(255,255,255,0.5); white-space:nowrap; }
      .sl-list-stat-val.accent { color:var(--cc); }
      .sl-list-tags { display:flex; gap:4px; flex-wrap:wrap; flex-shrink:0; max-width:120px; justify-content:flex-end; }
      .sl-list-tag { padding:3px 7px; border-radius:3px; font-family:'Montserrat',sans-serif; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.4); border:1px solid rgba(255,255,255,0.07); }
      .sl-list-chevron { color:rgba(255,255,255,0.15); transform:translateX(-4px); opacity:0; transition:transform 0.2s, opacity 0.2s; }
      .sl-list-item--clickable:hover .sl-list-chevron { transform:translateX(0); opacity:0.6; }
      .sl-list-chevron svg { width:14px; height:14px; stroke:currentColor; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }

       
      .sl-pagination { display:flex; align-items:center; justify-content:center; gap:5px; margin-top:48px; }
      .sl-page-btn { min-width:36px; height:36px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:rgba(255,255,255,0.35); font-family:'Varien',sans-serif; font-style:italic; font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s; padding:0 8px; }
      .sl-page-btn:hover:not(:disabled) { border-color:rgba(255,255,255,0.3); color:#fff; transform:translateY(-2px); }
      .sl-page-btn.active { background:rgba(93,191,192,0.15); border-color:rgba(93,191,192,0.5); color:#5DBFC0; }
      .sl-page-btn:disabled { opacity:0.2; cursor:default; }
      .sl-page-info { font-family:'Montserrat',sans-serif; font-size:11px; font-weight:600; color:rgba(255,255,255,0.35); letter-spacing:0.08em; padding:0 12px; line-height:36px; }
      .sl-page-ellipsis { color:rgba(255,255,255,0.2); font-family:'Montserrat',sans-serif; font-size:14px; padding:0 4px; line-height:36px; }

      


      .sl-fab-filter {
        position:fixed; left:50%; bottom:calc(20px + env(safe-area-inset-bottom)); z-index:60;
        transform:translateX(-50%) translateY(14px);
        display:none; align-items:center; gap:9px;
        padding:11px 18px; border-radius:999px;
        border:1px solid rgba(93,191,192,0.45);
        background:linear-gradient(135deg, rgba(10,26,53,0.97), rgba(15,35,93,0.97));
        color:#fff; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase;
        cursor:pointer; opacity:0; pointer-events:none;
        box-shadow:0 6px 22px rgba(0,0,0,0.35), 0 0 0 1px rgba(93,191,192,0.12);
        -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px);
        transition:transform 0.32s cubic-bezier(0.34,1.3,0.64,1), opacity 0.28s ease;
      }
      .sl-fab-filter.visible { opacity:1; pointer-events:auto; transform:translateX(-50%) translateY(0); }
      .sl-fab-filter.tucked { opacity:0; pointer-events:none; transform:translateX(-50%) translateY(140%); }
      .sl-fab-filter:active { transform:translateX(-50%) translateY(1px) scale(0.97); }
      .sl-fab-filter svg { width:16px; height:16px; stroke:#5DBFC0; fill:none; stroke-width:2; stroke-linecap:round; }
      .sl-fab-label { line-height:1; }
      .sl-fab-badge { display:none; align-items:center; justify-content:center; min-width:18px; height:18px; padding:0 5px; border-radius:999px; background:#5DBFC0; color:#0A1A35; font-family:'Montserrat',sans-serif; font-size:10px; font-weight:800; line-height:1; }
      .sl-fab-badge.show { display:inline-flex; }

       
      @media (min-width:1401px) { .sl-grid { grid-template-columns:repeat(5,1fr); } .sl-skeleton-grid { grid-template-columns:repeat(5,1fr); } }
      @media (max-width:1100px) { .sl-inner { padding:40px 24px 60px; } }
      @media (max-width:860px) {
        .sl-sidebar { display:none; }
        .sl-mobile-bar { display:flex; }
        .sl-fab-filter { display:flex; }
        .sl-inner { padding:50px 14px 60px; }
        .sl-header { flex-direction:column; align-items:flex-start; gap:18px; }
        .sl-class-filters { gap:4px; flex-wrap:nowrap; width:100%; }
        .sl-class-btn { flex:1 1 0; min-width:0; }
        .sl-class-btn img { width:100%; height:auto; display:block; }
        .sl-grid { grid-template-columns:repeat(2,1fr); gap:12px; }
        .sl-skeleton-grid { grid-template-columns:repeat(2,1fr); gap:12px; }
        .sl-title { font-size:clamp(42px,10vw,64px); }
        .sl-counter-num { font-size:clamp(22px,6vw,32px); }
        .sl-counter-block { padding-left:14px; }
        .sl-toolbar { margin-bottom:12px; }
        .sl-card-wrap { animation-duration:0.25s; }
        .sl-list-item { animation-duration:0.2s; }
        .sl-card-nom { font-size:clamp(22px,5vw,32px); }
        .sl-card-nom[data-len="7"], .sl-card-nom[data-len="8"] { font-size:clamp(21px,4.8vw,30px); }
        .sl-card-nom[data-len="9"], .sl-card-nom[data-len="10"] { font-size:clamp(20px,4.6vw,30px); }
        .sl-card-nom[data-len="11"], .sl-card-nom[data-len="12"] { font-size:clamp(19px,4.3vw,28px); }
        .sl-card-nom[data-len="13"], .sl-card-nom[data-len="14"] { font-size:clamp(17px,3.8vw,24px); }
        .sl-card-nom[data-len="15"], .sl-card-nom[data-len="16"] { font-size:clamp(15px,3.3vw,20px); }
        .sl-card-nom[data-len="17"], .sl-card-nom[data-len="18"], .sl-card-nom[data-len="19"], .sl-card-nom[data-len="20"] { font-size:clamp(13px,3vw,18px); }
        .sl-card-nom[data-len="21"], .sl-card-nom[data-len="22"], .sl-card-nom[data-len="23"], .sl-card-nom[data-len="24"], .sl-card-nom[data-len="25"], .sl-card-nom[data-len="26"], .sl-card-nom[data-len="27"], .sl-card-nom[data-len="28"], .sl-card-nom[data-len="29"], .sl-card-nom[data-len="30"] { font-size:clamp(12px,2.7vw,16px); }
      }
      @media (max-width:480px) { .sl-inner { padding:50px 12px 60px; } .sl-grid { gap:8px; } }

      

      @media (prefers-reduced-motion: reduce) {
        skippers-list *, skippers-list *::before, skippers-list *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
      }
    </style>

    <div class="sl-root"><div class="sl-inner">
      <div class="sl-header">
        <div class="sl-title-block">
          <h1 class="sl-title">Skippers</h1>
          <div class="sl-counter-block" id="sl-counter-block">
            <div class="sl-counter-num" id="sl-counter-num" data-val="0">0</div>
            <div class="sl-counter-label">Skippers</div>
          </div>
        </div>
        <div class="sl-class-filters">
          ${Object.entries(CLASSES_CONFIG).map(([nom, cfg]) => `<button class="sl-class-btn filter-default" data-classe="${nom}" title="${cfg.label}"><img src="${cfg.icon}" alt="${cfg.label}" /></button>`).join('')}
        </div>
      </div>

      <div class="sl-sep"></div>

      <div class="sl-mobile-bar" id="sl-mobile-bar">
        <button class="sl-mobile-filter-btn" id="sl-mobile-filter-btn">
          <svg viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
          ${this._t('filtres')}
        </button>
        <div class="sl-mobile-search"><div style="position:relative"><svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:14px;height:14px;stroke:rgba(255,255,255,0.45);fill:none;stroke-width:2;stroke-linecap:round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input id="sl-search-mobile" type="text" placeholder="${this._t('search_ph_mobile')}" autocomplete="off" aria-label="${this._t('search_aria')}" style="padding-left:34px;" /><button id="sl-search-mobile-clear" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,0.4);font-size:16px;cursor:pointer;display:none;line-height:1;padding:2px 4px">×</button></div></div>
      </div>

      <div class="sl-layout">
        <div class="sl-sidebar" id="sl-sidebar">
          <div class="sl-search-wrap">
            <div class="sl-search-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
            <input class="sl-search" id="sl-search" type="text" placeholder="${this._t('search_ph')}" autocomplete="off" />
          </div>
          <div class="sl-filter-section">
            <div class="sl-filter-label">${this._t('label_profil')}</div>
            <div class="sl-filter-pills">
              ${Object.entries(PROFIL_CONFIG).map(([key, cfg]) => {
                const rgb = hexToRGB(cfg.couleur);
                const lbl = this._t('pf_'+key) || cfg.label;
                const sub = this._t('pf_'+key+'_sub') || cfg.sub;
                const pill = `<div class="sl-pill" data-filter="${key}" role="button" tabindex="0" aria-pressed="false" style="--pill-c:${cfg.couleur};--pill-rgb:${rgb}">${cfg.icon}<div class="sl-pill-text"><span>${lbl}</span>${sub ? `<span class="sl-pill-sub">${sub}</span>` : ''}</div></div>`;
                if (key === 'FEMMES') {
                  return `<div class="sl-pill-genre-wrap">${pill}<div class="sl-pill-hommes" id="sl-hommes-btn" role="button" tabindex="0" aria-pressed="false">${HOMMES_CFG.icon}${this._t('pf_HOMMES') || HOMMES_CFG.label}</div></div>`;
                }
                return pill;
              }).join('')}
            </div>
          </div>
          <div class="sl-filter-section">
            <div class="sl-filter-label">${this._t('label_tri')}</div>
            <div class="sl-sort-btns" id="sl-sort-btns">
              <div class="sl-sort-slider" id="sl-sort-slider"></div>
              <button class="sl-sort-btn active" data-sort="random">${this._t('sort_random')}</button>
              <button class="sl-sort-btn" data-sort="az">A → Z</button>
              <!-- tri +rhums désactivé temporairement -->
            </div>
          </div>
          <div class="sl-reset" id="sl-reset">
            <button class="sl-reset-btn" id="sl-reset-btn">${this._t('reset')}</button>
          </div>
        </div>

        <div class="sl-main">
          <div class="sl-toolbar">
            <div style="display:flex;gap:4px">
              <button class="sl-view-btn active" id="sl-view-grid" title="${this._t('view_grid')}"><svg viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg></button>
              <button class="sl-view-btn" id="sl-view-list" title="${this._t('view_list')}"><svg viewBox="0 0 16 16"><rect x="1" y="2" width="4" height="4" rx="1"/><rect x="7" y="3" width="8" height="2" rx="1"/><rect x="1" y="7" width="4" height="4" rx="1"/><rect x="7" y="8" width="8" height="2" rx="1"/><rect x="1" y="12" width="4" height="2" rx="1"/><rect x="7" y="12" width="8" height="2" rx="1"/></svg></button>
            </div>
          </div>
          <div id="sl-content"><div class="sl-skeleton-grid">${Array.from({length:8},()=>'<div class="sl-skeleton-card"></div>').join('')}</div></div>
          <div id="sl-pagination" class="sl-pagination"></div>
        </div>
      </div>
    </div></div>

    <button class="sl-fab-filter" id="sl-fab-filter" type="button" aria-label="${this._t('fab_open_aria')}">
      <svg viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
      <span class="sl-fab-label">${this._t('filtres')}</span>
      <span class="sl-fab-badge" id="sl-fab-badge"></span>
    </button>`;

    this._initPortal();
    this._bindEvents();
    requestAnimationFrame(() => this._updateSortSlider());
  }

  _renderGrid() {
    const content = this.querySelector('#sl-content');
    if (!content) return;
    const total = this._filtered.length;
    if (!total) {
      content.innerHTML = `<div class="sl-empty"><div class="sl-empty-boat">⛵</div><div class="sl-empty-title">${this._t('empty_title')}</div><div class="sl-empty-sub">${this._t('empty_sub')}</div><button class="sl-empty-reset" id="sl-empty-reset">${this._t('empty_reset')}</button></div>`;
      content.querySelector('#sl-empty-reset')?.addEventListener('click', () => this._resetAll());
      return;
    }
    const page = Math.min(this._page, Math.max(0, Math.ceil(total / PAGE_SIZE) - 1));
    const items = this._filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    if (this._view === 'list') {
      content.innerHTML = `<div class="sl-list">${items.map((s,i) => this._renderListItem(s,i,page)).join('')}</div>`;
    } else {
      content.innerHTML = `<div class="sl-grid">${items.map((s,i) => this._renderCard(s,i)).join('')}</div>`;
    }
  }

  _renderCard(s, i) {
    const estMystere = !s.skipperDevoile;
    const ficheActive = s.ficheActive === true;
    const link = (!estMystere && ficheActive) ? this._safeUrl(s['link-skippers-prenomNom'] || '') : '';
    const isSoon = !estMystere && !ficheActive;
     
    const photo = estMystere ? MYSTERE_IMG : this._safeUrl(this._wixToUrl(s.photoVignette || '', 600, 750));
    const classeNom = s.classes?.nom || '';
    const cfg = CLASSES_CONFIG[classeNom] || {};
    const cc = this._safeColor(s.classes?.couleur, cfg.couleur || 'rgba(255,255,255,0.3)');
    const ccRGB = hexToRGB(cc);
    const drapeau = this._safeUrl(this._wixToUrl(s.drapeau || ''));
    const rot = CARD_ROTATIONS[i % CARD_ROTATIONS.length];
    const delay = Math.min(i * 35, 450);
    const isFav = !!this._favoris[s._id];
    const wrapClass = link ? 'sl-card-wrap--clickable' : (isSoon ? 'sl-card-wrap--revealed' : '');
    const wrapA11y = link ? 'role="button" tabindex="0"' : (isSoon ? 'role="button" tabindex="0"' : '');
    return `<div class="sl-card-wrap${wrapClass ? ' '+wrapClass : ''}${estMystere ? ' mystery' : ''}" ${link ? `data-link="${link}"` : ''} ${isSoon ? 'data-soon="1"' : ''} ${wrapA11y} style="--rot:${rot}deg;animation-delay:${delay}ms">
      <div class="sl-card${estMystere ? ' mystery-card' : ''}" style="--cc:${cc};--cc-rgb:${ccRGB}">
        <img class="sl-card-img" src="${photo}" alt="" loading="lazy" />
        ${!estMystere ? `<div class="sl-card-overlay">
          <div class="sl-card-flag-prenom">
            ${drapeau ? `<img class="sl-card-flag" src="${drapeau}" alt="" />` : ''}
            <div class="sl-card-prenom">${escapeHTML(s.prenom)}</div>
          </div>
          <div class="sl-card-nom" data-len="${(s.nom||'').length}">${escapeHTML(s.nom)}</div>
          ${s.bateau ? `<div class="sl-card-bateau">${escapeHTML(s.bateau)}</div>` : ''}
          ${link ? `<div class="sl-card-cta">${this._t('see_profile')} <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></div>` : ''}
        </div>` : ''}
        ${isSoon ? `<div class="sl-card-soon-overlay"><div class="sl-card-soon-overlay-icon">⚓</div><div class="sl-card-soon-overlay-txt">${this._t('profile_soon')}</div></div>` : ''}
        ${!estMystere ? `<button type="button" class="sl-fav-btn${isFav ? ' is-fav' : ''}" data-favori-id="${s._id}" aria-label="${isFav ? this._t('fav_remove') : this._t('fav_add')}" aria-pressed="${isFav}"><span class="sl-fav-icon">${isFav ? FAV_ON : FAV_OFF}</span></button>` : ''}
      </div>
      ${cfg.icon ? `<div class="sl-card-class"><img src="${this._safeUrl(cfg.icon)}" alt="${escapeHTML(classeNom)}" /></div>` : ''}
    </div>`;
  }

  _renderListItem(s, i, page) {
    const estMystere = !s.skipperDevoile;
    const ficheActive = s.ficheActive === true;
    const link = (!estMystere && ficheActive) ? this._safeUrl(s['link-skippers-prenomNom'] || '') : '';
     
    const photo = estMystere ? MYSTERE_IMG : this._safeUrl(this._wixToUrl(s.photoVignette || '', 600, 750));
    const classeNom = s.classes?.nom || '';
    const cfg = CLASSES_CONFIG[classeNom] || {};
    const cc = this._safeColor(s.classes?.couleur, cfg.couleur || 'rgba(255,255,255,0.2)');
    const drapeau = this._safeUrl(this._wixToUrl(s.drapeau || ''));
    const delay = Math.min(i * 22, 300);
    const num = page * PAGE_SIZE + i + 1;
    const tags = (s._filtreArr || []).map(t => {
      const cfg = PROFIL_CONFIG[t];
      return cfg ? (this._t('pf_'+t) || cfg.label) : t;
    }).filter(Boolean);
    const statsHtml = !estMystere ? `<div class="sl-list-stats">
      ${s.nationalite ? `<div class="sl-list-stat"><svg class="sl-list-stat-icon" viewBox="0 0 24 24"><path d="M3 6l9-3 9 3v9l-9 3-9-3V6z"/><path d="M12 3v18"/></svg><span class="sl-list-stat-val">${escapeHTML(s.nationalite)}</span></div>` : ''}
      ${s.portDAttache ? `<div class="sl-list-stat"><svg class="sl-list-stat-icon" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 16h14"/></svg><span class="sl-list-stat-val">${escapeHTML(s.portDAttache)}</span></div>` : ''}
    </div>` : '<div></div>';
    return `<div class="sl-list-item${estMystere?' mystery':''}${link?' sl-list-item--clickable':''}" ${link?`data-link="${link}"`:''} style="--cc:${cc};animation-delay:${delay}ms">
      <div class="sl-list-num">${num}</div>
      <img class="sl-list-img" src="${photo}" alt="" loading="lazy" />
      ${cfg.icon ? `<div class="sl-list-class"><img src="${this._safeUrl(cfg.icon)}" alt="${escapeHTML(classeNom)}" /></div>` : '<div></div>'}
      ${drapeau && !estMystere ? `<img class="sl-list-flag" src="${drapeau}" alt="" />` : '<div></div>'}
      <div class="sl-list-name">
        ${estMystere
          ? `<div class="sl-list-nom" style="font-family:'VarienOutline',sans-serif;font-size:22px;color:rgba(255,255,255,0.2)">???</div>`
          : `<div class="sl-list-prenom">${escapeHTML(s.prenom)}</div><div class="sl-list-nom">${escapeHTML(s.nom)}</div>${s.bateau?`<div class="sl-list-bateau">${escapeHTML(s.bateau)}</div>`:''}`}
      </div>
      ${statsHtml}
      ${tags.length ? `<div class="sl-list-tags">${tags.map(t=>`<span class="sl-list-tag">${escapeHTML(t)}</span>`).join('')}</div>` : '<div></div>'}
      <div class="sl-list-chevron"><svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></div>
    </div>`;
  }

  _renderPagination() {
    const el = this.querySelector('#sl-pagination');
    if (!el) return;
    const totalPages = Math.ceil(this._filtered.length / PAGE_SIZE);
    if (totalPages <= 1) { el.innerHTML = ''; return; }
    const p = this._page;
    const pages = [];
    if (totalPages <= 7) { for(let i=0;i<totalPages;i++) pages.push({type:'page',n:i}); }
    else {
      pages.push({type:'page',n:0});
      if(p>2) pages.push({type:'ellipsis'});
      for(let i=Math.max(1,p-1);i<=Math.min(totalPages-2,p+1);i++) pages.push({type:'page',n:i});
      if(p<totalPages-3) pages.push({type:'ellipsis'});
      pages.push({type:'page',n:totalPages-1});
    }
    el.innerHTML = `
      <div class="sl-page-info">${p+1} / ${totalPages}</div>
      <button class="sl-page-btn" id="sl-prev" ${p===0?'disabled':''}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg></button>
      ${pages.map(pg=>pg.type==='ellipsis'?`<span class="sl-page-ellipsis">…</span>`:`<button class="sl-page-btn${pg.n===p?' active':''}" data-page="${pg.n}">${pg.n+1}</button>`).join('')}
      <button class="sl-page-btn" id="sl-next" ${p>=totalPages-1?'disabled':''}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg></button>`;
    el.querySelector('#sl-prev')?.addEventListener('click', () => this._goPage(p-1));
    el.querySelector('#sl-next')?.addEventListener('click', () => this._goPage(p+1));
    el.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => this._goPage(parseInt(btn.dataset.page))));
  }

  _goPage(n) {
    const totalPages = Math.ceil(this._filtered.length / PAGE_SIZE);
    this._page = Math.max(0, Math.min(n, totalPages-1));
    this._renderGrid();
    this._renderPagination();
    this.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  _updateSortSlider() {
    const wrap = this.querySelector('#sl-sort-btns');
    const slider = this.querySelector('#sl-sort-slider');
    if (!wrap || !slider) return;
    const active = wrap.querySelector(`.sl-sort-btn[data-sort="${this._sort}"]`);
    if (!active) return;
    const wr = wrap.getBoundingClientRect();
    const ar = active.getBoundingClientRect();
    slider.style.left = (ar.left - wr.left) + 'px';
    slider.style.width = ar.width + 'px';
  }

  _updateFilterStyles() {
    this.querySelectorAll('.sl-class-btn').forEach(btn => {
      const wanted = !this._activeClasse ? 'filter-default' : (btn.dataset.classe === this._activeClasse ? 'filter-active' : 'filter-inactive');
      if (!btn.classList.contains(wanted)) {
        btn.classList.remove('filter-default','filter-active','filter-inactive');
        btn.classList.add(wanted);
      }
    });
    this.shadowRoot?.querySelectorAll('.sl-genre-btn')?.forEach(btn => btn.classList.toggle('active', btn.dataset.genre === this._activeGenre));
    this.querySelectorAll('.sl-pill').forEach(pill => { const on = !!this._activeFilters[pill.dataset.filter]; pill.classList.toggle('active', on); pill.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    const _hb = this.querySelector('#sl-hommes-btn'); if (_hb) { const on = this._activeGenre === 'HOMMES'; _hb.classList.toggle('active', on); _hb.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    this.querySelector('#sl-sort-btns')?.querySelectorAll('.sl-sort-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.sort === this._sort));
    const n = this._activeFilterCount();
    this.querySelector('#sl-reset')?.classList.toggle('visible', n > 0);
    const mobileBtn = this.querySelector('#sl-mobile-filter-btn');
    if (mobileBtn) {
      mobileBtn.classList.toggle('has-filters', n > 0);
      const badge = mobileBtn.querySelector('.sl-mobile-badge');
      if (n > 0) {
        if (!badge) mobileBtn.insertAdjacentHTML('beforeend', `<span class="sl-mobile-badge">${n}</span>`);
        else badge.textContent = n;
      } else badge?.remove();
    }
    const fabBadge = this.querySelector('#sl-fab-badge');
    if (fabBadge) { fabBadge.textContent = n; fabBadge.classList.toggle('show', n > 0); }
    const sidebar = this.querySelector('#sl-sidebar');
    if (sidebar) {
      const activeKey = Object.keys(this._activeFilters).find(k => this._activeFilters[k]);
      const glow = activeKey ? PROFIL_CONFIG[activeKey]?.couleur : null;
      sidebar.style.boxShadow = glow
        ? `0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(${hexToRGB(glow)},0.1), inset 0 1px 0 rgba(93,191,192,0.1)`
        : '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(93,191,192,0.1)';
    }
    requestAnimationFrame(() => this._updateSortSlider());
  }

  _filterChange() {
    this._applyFilters();
    this._animateCounter(this._filtered.length);
    this._updateFilterStyles();
    this._renderGrid();
    this._renderPagination();
    this._ecrireAdresse();
  }

  _reshuffle() {
    if (!this._shuffledAll) return;
    for (let i=this._shuffledAll.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[this._shuffledAll[i],this._shuffledAll[j]]=[this._shuffledAll[j],this._shuffledAll[i]];}
  }

  _resetAll() {
    this._activeClasse = null; this._activeFilters = {}; this._activeGenre = null; this._search = ''; this._sort = 'random';
    const si = this.querySelector('#sl-search'); if (si) si.value = '';
    const sm = this.querySelector('#sl-search-mobile'); if (sm) sm.value = '';
    if (this._portalSearch) this._portalSearch.value = '';
    this._filterChange();
  }

  _initFab() {
    const fab = this.querySelector('#sl-fab-filter');
    const mobileBar = this.querySelector('#sl-mobile-bar');
    if (!fab || !mobileBar) return;
     
    const io = new IntersectionObserver(([entry]) => {
      fab.classList.toggle('visible', !entry.isIntersecting);
    }, { threshold: 0 });
    io.observe(mobileBar);
    this._cleanups.push(() => io.disconnect());

     
     
    if (this._fabScrollAbort) this._fabScrollAbort.abort();
    this._fabScrollAbort = new AbortController();
    let lastY = window.scrollY, ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > lastY + 6) fab.classList.add('tucked');
        else if (y < lastY - 6) fab.classList.remove('tucked');
        lastY = y; ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true, signal: this._fabScrollAbort.signal });
    this._cleanups.push(() => { if (this._fabScrollAbort) { this._fabScrollAbort.abort(); this._fabScrollAbort = null; } });
  }

  _initStickyObserver() {
    const sidebar = this.querySelector('#sl-sidebar');
    const layout = this.querySelector('.sl-layout');
    if (!sidebar || !layout) return;
    let ticking = false;
    let cachedSidebarH = sidebar.offsetHeight;
    const ro = new ResizeObserver(() => { cachedSidebarH = sidebar.offsetHeight; });
    ro.observe(sidebar);
    this._cleanups.push(() => ro.disconnect());
    const update = () => {
      const layoutRect = layout.getBoundingClientRect();
      const offset = 24;
      if (layoutRect.top <= offset) {
        const top = Math.min(-layoutRect.top + offset, layoutRect.height - cachedSidebarH - offset);
        sidebar.style.transform = `translateY(${Math.max(0, top)}px)`;
      } else {
        sidebar.style.transform = 'translateY(0)';
      }
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    window.addEventListener('scroll', onScroll, { passive:true });
    this._cleanups.push(() => window.removeEventListener('scroll', onScroll));
  }

  _bindEvents() {
    this._initStickyObserver();
    requestAnimationFrame(() => this._initFab());

    const content = this.querySelector('#sl-content');
    if (content) {
      content.addEventListener('click', (e) => {
         
        const btn = e.target.closest('[data-favori-id]');
        if (btn) {
          e.stopPropagation();
          const id = btn.dataset.favoriId;
          const nowFav = !btn.classList.contains('is-fav');
          btn.classList.toggle('is-fav', nowFav);
          const favIcon = btn.querySelector('.sl-fav-icon');
          if (favIcon) favIcon.innerHTML = nowFav ? FAV_ON : FAV_OFF;
          btn.setAttribute('aria-label', nowFav ? this._t('fav_remove') : this._t('fav_add'));
          btn.setAttribute('aria-pressed', String(nowFav));
          btn.classList.add('popping');
          btn.addEventListener('animationend', () => btn.classList.remove('popping'), {once:true});
          this._favoris[id] = nowFav;
          const s = this._allById?.get(id);
          this.dispatchEvent(new CustomEvent('sl-toggle-favori', { detail:{ id, slug:s?.['link-skippers-prenomNom']||'', isFavori:nowFav }, bubbles:true, composed:true }));
          return;
        }
        const soon = e.target.closest('[data-soon]');
        if (soon) {
          const overlay = soon.querySelector('.sl-card-soon-overlay');
          if (overlay) { overlay.classList.add('show'); setTimeout(() => overlay.classList.remove('show'), 2200); }
          return;
        }
        const link = e.target.closest('[data-link]');
        if (link) {
          this._markNavLoading(link.closest('.sl-card') || link);
          this.dispatchEvent(new CustomEvent('sl-navigate', { detail:{ url:link.dataset.link }, bubbles:true, composed:true }));
          


          this._naviguer(link.dataset.link);
        }
      });
      content.addEventListener('keydown', (e) => {
        if (e.key!=='Enter' && e.key!==' ') return;
        const link = e.target.closest('[data-link]');
        if (link) { e.preventDefault(); link.click(); }
      });
    }

     
    const _hommesBtn = this.querySelector('#sl-hommes-btn');
    if (_hommesBtn) {
      const act = () => {
        if (this._activeGenre === 'HOMMES') { this._activeGenre = null; }
        else { this._activeGenre = 'HOMMES'; this._activeFilters['FEMMES'] = false; }
        this._filterChange();
      };
      _hommesBtn.addEventListener('click', act);
      this._key(_hommesBtn, act);
    }
    this.querySelectorAll('.sl-class-btn').forEach(btn => btn.addEventListener('click', () => {
      this._activeClasse = this._activeClasse === btn.dataset.classe ? null : btn.dataset.classe;
      this._filterChange();
    }));
    this.querySelectorAll('.sl-pill').forEach(pill => {
      const act = () => {
        this._activeFilters[pill.dataset.filter] = !this._activeFilters[pill.dataset.filter];
         
        if (pill.dataset.filter === 'FEMMES' && this._activeFilters['FEMMES']) { this._activeGenre = null; }
         
        if (pill.dataset.filter === 'ROOKIES' && this._activeFilters['ROOKIES']) { this._activeFilters['ANCIENS VAINQUEURS'] = false; }
        if (pill.dataset.filter === 'ANCIENS VAINQUEURS' && this._activeFilters['ANCIENS VAINQUEURS']) { this._activeFilters['ROOKIES'] = false; }
        this._filterChange();
      };
      pill.addEventListener('click', act);
      this._key(pill, act);
    });
    this.querySelectorAll('.sl-sort-btn').forEach(btn => btn.addEventListener('click', () => {
      if (btn.dataset.sort === 'random' && this._sort !== 'random') this._reshuffle();
      this._sort = btn.dataset.sort; this._filterChange();
    }));

    const si = this.querySelector('#sl-search');
    if (si) {
      const clrDesktop = document.createElement('button');
      clrDesktop.style.cssText = 'position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,0.4);font-size:16px;cursor:pointer;display:none;line-height:1;padding:2px 4px';
      clrDesktop.textContent = '×';
      si.parentElement.appendChild(clrDesktop);
      si.addEventListener('input', () => {
        clearTimeout(this._searchTimer);
        this._searchTimer = setTimeout(() => { this._search = si.value; this._filterChange(); }, 250);
        clrDesktop.style.display = si.value ? 'block' : 'none';
      });
      clrDesktop.addEventListener('click', () => { si.value=''; this._search=''; clrDesktop.style.display='none'; this._filterChange(); });
    }

    const sm = this.querySelector('#sl-search-mobile');
    const clearBtn = this.querySelector('#sl-search-mobile-clear');
    if (sm) {
      sm.addEventListener('input', () => {
        clearTimeout(this._searchTimer);
        this._searchTimer = setTimeout(() => { this._search = sm.value; if (si) si.value = sm.value; this._filterChange(); }, 250);
        if (clearBtn) clearBtn.style.display = sm.value ? 'block' : 'none';
      });
    }
    if (clearBtn) clearBtn.addEventListener('click', () => {
      if (sm) sm.value = ''; if (si) si.value = '';
      this._search = ''; clearBtn.style.display = 'none';
      this._filterChange();
    });

    this.querySelector('#sl-reset-btn')?.addEventListener('click', () => this._resetAll());

    this.querySelector('#sl-view-grid')?.addEventListener('click', () => {
      this._view = 'grid';
      this.querySelector('#sl-view-grid').classList.add('active');
      this.querySelector('#sl-view-list').classList.remove('active');
      this._renderGrid();
    });
    this.querySelector('#sl-view-list')?.addEventListener('click', () => {
      this._view = 'list';
      this.querySelector('#sl-view-list').classList.add('active');
      this.querySelector('#sl-view-grid').classList.remove('active');
      this._renderGrid();
    });

    this.querySelector('#sl-mobile-filter-btn')?.addEventListener('click', () => this._openDrawer());
    this.querySelector('#sl-fab-filter')?.addEventListener('click', () => this._openDrawer());
  }

  _initPortal() {
    if (this._portalRoot?.isConnected) return;
    if (!document.getElementById('sl-portal-styles')) {
      const style = document.createElement('style');
      style.id = 'sl-portal-styles';
      style.textContent = `
        .sl-portal-overlay{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,0.65);opacity:0;pointer-events:none;transition:opacity .3s ease;-webkit-tap-highlight-color:transparent;}
        .sl-portal-overlay.open{opacity:1;pointer-events:auto;}
        .sl-portal-drawer{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0E111D;border-radius:20px 20px 0 0;border-top:1px solid rgba(93,191,192,0.2);transform:translate3d(0,100%,0);transition:transform .4s cubic-bezier(.25,.46,.45,.94);max-height:min(82vh,82dvh);overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 20px calc(48px + env(safe-area-inset-bottom,0px));overscroll-behavior:contain;}
        .sl-portal-drawer.open{transform:translate3d(0,0,0);}
        .sl-portal-handle{width:36px;height:4px;border-radius:2px;background:rgba(255,255,255,0.18);margin:12px auto 20px;}
        .sl-portal-close{position:absolute;top:16px;right:20px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.07);border:1.5px solid transparent;color:rgba(255,255,255,0.5);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;}
        .sl-portal-title{font-family:'Varien',sans-serif;font-style:italic;font-size:24px;color:#fff;text-transform:uppercase;margin-bottom:22px;}
         
        .sl-portal-search{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);border-radius:10px;padding:11px 16px 11px 34px;color:#fff;font-family:Montserrat,sans-serif;font-size:16px;outline:none;}
      `;
      document.head.appendChild(style);
    }

    const uid = Math.random().toString(36).slice(2,8);
    const root = document.createElement('div');
    root.id = `sl-portal-${uid}`;
    root.innerHTML = `
      <div class="sl-portal-overlay" id="sl-portal-overlay-${uid}"></div>
      <div class="sl-portal-drawer" id="sl-portal-drawer-${uid}" role="dialog" aria-modal="true" aria-label="${this._t('filtres')}" aria-hidden="true">
        <div class="sl-portal-handle"></div>
        <button type="button" class="sl-portal-close" id="sl-portal-close-${uid}" aria-label="${this._t('close')}">×</button>
        <div class="sl-portal-title">${this._t('filtres')}</div>
        <div style="position:relative;margin-bottom:16px">
          <svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:14px;height:14px;stroke:rgba(255,255,255,0.4);fill:none;stroke-width:2;stroke-linecap:round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input id="sl-portal-search-${uid}" class="sl-portal-search" type="text" placeholder="${this._t('search_ph_drawer')}" autocomplete="off" />
        </div>
        <div id="sl-portal-content-${uid}"></div>
      </div>
    `;
    document.body.appendChild(root);

    this._portalRoot    = root;
    this._portalOverlay = root.querySelector(`#sl-portal-overlay-${uid}`);
    this._portalDrawer  = root.querySelector(`#sl-portal-drawer-${uid}`);
    this._portalSearch  = root.querySelector(`#sl-portal-search-${uid}`);
    this._portalContent = root.querySelector(`#sl-portal-content-${uid}`);

    this._closeDrawerBound = () => this._closeDrawer();
    this._portalOverlay.addEventListener('click', this._closeDrawerBound);
    root.querySelector(`#sl-portal-close-${uid}`)?.addEventListener('click', this._closeDrawerBound);

    this._portalSearch?.addEventListener('input', () => {
      clearTimeout(this._searchTimer);
      this._searchTimer = setTimeout(() => {
        this._search = this._portalSearch.value;
        const si = this.querySelector('#sl-search');
        const sm = this.querySelector('#sl-search-mobile');
        if (si) si.value = this._search;
        if (sm) sm.value = this._search;
        this._filterChange();
      }, 250);
    });
  }

   
  _focusables(container) {
    const sel = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll(sel))
      .filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length);
  }
   
   
   
  _trapFocus(container, { onEsc }) {
    const handler = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); onEsc(); return; }
      if (e.key !== 'Tab') return;
      const f = this._focusables(container);
      if (!f.length) { e.preventDefault(); return; }
      const first = f[0], last = f[f.length - 1], active = document.activeElement;
      if (e.shiftKey) {
        if (active === first || !container.contains(active)) { e.preventDefault(); last.focus(); }
      } else {
        if (active === last || !container.contains(active)) { e.preventDefault(); first.focus(); }
      }
    };
    container.addEventListener('keydown', handler);
    return () => container.removeEventListener('keydown', handler);
  }
   
   
   
  _refocusDrawer(selector) {
    const dc = this._portalContent;
    const target = (selector && dc && dc.querySelector(selector))
      || this._portalDrawer?.querySelector('.sl-portal-close')
      || this._focusables(this._portalDrawer)[0];
    try { target?.focus(); } catch {}
  }

   
   
   
   
  _lockBodyScroll() {
    if (this._scrollLocked) return;
    this._scrollLockY = window.scrollY || window.pageYOffset || 0;
    const b = document.body;
    b.style.position = 'fixed';
    b.style.top = `-${this._scrollLockY}px`;
    b.style.left = '0'; b.style.right = '0'; b.style.width = '100%';
    this._scrollLocked = true;
  }
  _unlockBodyScroll() {
    if (!this._scrollLocked) return;
    const b = document.body;
    b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.width = '';
    try { window.scrollTo(0, this._scrollLockY || 0); } catch {}
    this._scrollLocked = false;
  }

  _openDrawer() {
    if (!this._portalDrawer || !this._portalOverlay) return;
    this._drawerTrigger = document.activeElement;    
     
     
    const ptitle = this._portalDrawer.querySelector('.sl-portal-title');
    if (ptitle) ptitle.textContent = this._t('filtres');
    this._portalDrawer.setAttribute('aria-label', this._t('filtres'));
    if (this._portalSearch) this._portalSearch.placeholder = this._t('search_ph_drawer');
    this._renderDrawer();
    if (this._portalSearch) this._portalSearch.value = this._search || '';
    this._lockBodyScroll();
    this._portalOverlay.classList.add('open');
    this._portalDrawer.classList.add('open');
    this._portalDrawer.setAttribute('aria-hidden', 'false');
    this._syncVisualViewport();
     
     
    this._portalDrawer.querySelector('.sl-portal-close')?.focus();
    if (this._drawerTrapCleanup) this._drawerTrapCleanup();
    this._drawerTrapCleanup = this._trapFocus(this._portalDrawer, { onEsc: () => this._closeDrawer() });
  }

  _closeDrawer() {
    if (!this._portalDrawer || !this._portalOverlay) return;
    if (this._drawerTrapCleanup) { this._drawerTrapCleanup(); this._drawerTrapCleanup = null; }
    this._portalOverlay.classList.remove('open');
    this._portalDrawer.classList.remove('open');
    this._portalDrawer.setAttribute('aria-hidden', 'true');
    this._portalDrawer.style.bottom = '';
    this._unlockBodyScroll();
    if (this._vvCleanup) { this._vvCleanup(); this._vvCleanup = null; }
     
    const trigger = this._drawerTrigger; this._drawerTrigger = null;
    if (trigger && trigger.isConnected) { try { trigger.focus(); } catch {} }
  }

  _syncVisualViewport() {
    if (!window.visualViewport || !this._portalDrawer) return;
    if (this._vvCleanup) { this._vvCleanup(); this._vvCleanup = null; }
    const apply = () => {
      const vv = window.visualViewport;
      const offset = Math.max(0, window.innerHeight - (vv.offsetTop + vv.height));
      this._portalDrawer.style.bottom = offset > 0 ? `${offset}px` : '';
    };
    apply();
    window.visualViewport.addEventListener('resize', apply);
    window.visualViewport.addEventListener('scroll', apply);
    this._vvCleanup = () => {
      window.visualViewport.removeEventListener('resize', apply);
      window.visualViewport.removeEventListener('scroll', apply);
    };
  }

  _renderDrawer() {
    const dc = this._portalContent;
    if (!dc) return;
    dc.innerHTML = `<div style="display:flex;flex-direction:column;gap:22px">
      <div class="sl-filter-section">
        <div class="sl-filter-label">${this._t('label_classes')}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
          ${Object.entries(CLASSES_CONFIG).map(([nom,cfg]) => `<div role="button" tabindex="0" aria-pressed="${this._activeClasse===nom?'true':'false'}" aria-label="${cfg.label}" style="display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:6px;border:1px solid ${this._activeClasse===nom?'rgba(93,191,192,0.4)':'rgba(255,255,255,0.08)'};background:${this._activeClasse===nom?'rgba(93,191,192,0.1)':'rgba(255,255,255,0.03)'};cursor:pointer" data-classe="${nom}"><img src="${cfg.icon}" style="height:28px" alt="" /><span style="font-family:Montserrat,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${this._activeClasse===nom?'#5DBFC0':'rgba(255,255,255,0.5)'}">${cfg.label}</span></div>`).join('')}
        </div>
      </div>
      <div class="sl-filter-section">
        <div class="sl-filter-label">${this._t('label_profil')}</div>
        <div class="sl-filter-pills" style="margin-top:4px">
          ${Object.entries(PROFIL_CONFIG).map(([key,cfg]) => {
            const rgb=hexToRGB(cfg.couleur);
            const lbl = this._t('pf_'+key) || cfg.label;
            const sub = this._t('pf_'+key+'_sub') || cfg.sub;
            const pill = `<div class="sl-pill${this._activeFilters[key]?' active':''}" data-filter="${key}" role="button" tabindex="0" aria-pressed="${this._activeFilters[key]?'true':'false'}" style="--pill-c:${cfg.couleur};--pill-rgb:${rgb}">${cfg.icon}<div class="sl-pill-text"><span>${lbl}</span>${sub?`<span class="sl-pill-sub">${sub}</span>`:''}</div></div>`;
            if (key === 'FEMMES') {
              return `<div class="sl-pill-genre-wrap">${pill}<div class="sl-pill-hommes sl-drawer-hommes-btn${this._activeGenre==='HOMMES'?' active':''}" role="button" tabindex="0" aria-pressed="${this._activeGenre==='HOMMES'?'true':'false'}">${HOMMES_CFG.icon}${this._t('pf_HOMMES') || HOMMES_CFG.label}</div></div>`;
            }
            return pill;
          }).join('')}
        </div>
      </div>
      <div class="sl-filter-section">
        <div class="sl-filter-label">${this._t('label_tri')}</div>
        <div class="sl-sort-btns" id="sl-drawer-sort-btns" style="margin-top:6px;position:relative">
          <div class="sl-sort-slider" id="sl-drawer-sort-slider"></div>
          <button class="sl-sort-btn${this._sort==='random'?' active':''}" data-sort="random">${this._t('sort_random')}</button>
          <button class="sl-sort-btn${this._sort==='az'?' active':''}" data-sort="az">A → Z</button>
          <!-- tri +rhums désactivé temporairement -->
        </div>
      </div>
      ${this._activeFilterCount()>0 ? `<button class="sl-reset-btn" id="sl-drawer-reset">${this._t('reset')}</button>` : ''}
    </div>`;

    dc.querySelectorAll('[data-classe]').forEach(r => {
      const act = () => { this._activeClasse = this._activeClasse === r.dataset.classe ? null : r.dataset.classe; this._filterChange(); this._renderDrawer(); this._refocusDrawer('[data-classe="' + r.dataset.classe + '"]'); };
      r.addEventListener('click', act);
      this._key(r, act);
    });
    dc.querySelectorAll('.sl-genre-btn').forEach(b => b.addEventListener('click', () => {
      this._activeGenre = this._activeGenre === b.dataset.genre ? null : b.dataset.genre;
      this._filterChange(); this._renderDrawer();
    }));
    dc.querySelectorAll('.sl-drawer-hommes-btn').forEach(b => {
      const act = () => {
        if (this._activeGenre === 'HOMMES') { this._activeGenre = null; }
        else { this._activeGenre = 'HOMMES'; this._activeFilters['FEMMES'] = false; }
        this._filterChange(); this._renderDrawer(); this._refocusDrawer('.sl-drawer-hommes-btn');
      };
      b.addEventListener('click', act);
      this._key(b, act);
    });
    dc.querySelectorAll('.sl-pill').forEach(p => {
      const act = () => {
        this._activeFilters[p.dataset.filter] = !this._activeFilters[p.dataset.filter];
        if (p.dataset.filter === 'FEMMES' && this._activeFilters['FEMMES']) this._activeGenre = null;
        if (p.dataset.filter === 'ROOKIES' && this._activeFilters['ROOKIES']) this._activeFilters['ANCIENS VAINQUEURS'] = false;
        if (p.dataset.filter === 'ANCIENS VAINQUEURS' && this._activeFilters['ANCIENS VAINQUEURS']) this._activeFilters['ROOKIES'] = false;
        this._filterChange(); this._renderDrawer(); this._refocusDrawer('[data-filter="' + p.dataset.filter + '"]');
      };
      p.addEventListener('click', act);
      this._key(p, act);
    });
    dc.querySelectorAll('.sl-sort-btn').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.sort === 'random' && this._sort !== 'random') this._reshuffle();
      this._sort = b.dataset.sort;
      this._filterChange(); this._renderDrawer(); this._refocusDrawer('.sl-sort-btn[data-sort="' + this._sort + '"]');
      const wrap = dc.querySelector('#sl-drawer-sort-btns');
      const slider = dc.querySelector('#sl-drawer-sort-slider');
      const active = dc.querySelector(`.sl-sort-btn[data-sort="${this._sort}"]`);
      if (wrap && slider && active) {
        const wr = wrap.getBoundingClientRect(), ar = active.getBoundingClientRect();
        slider.style.left = (ar.left - wr.left) + 'px'; slider.style.width = ar.width + 'px';
      }
    }));
    dc.querySelector('#sl-drawer-reset')?.addEventListener('click', () => { this._resetAll(); this._renderDrawer(); this._refocusDrawer('#sl-drawer-reset'); });

    requestAnimationFrame(() => {
      const wrap = dc.querySelector('#sl-drawer-sort-btns');
      const slider = dc.querySelector('#sl-drawer-sort-slider');
      const active = dc.querySelector(`.sl-sort-btn[data-sort="${this._sort}"]`);
      if (wrap && slider && active) {
        const wr = wrap.getBoundingClientRect(), ar = active.getBoundingClientRect();
        slider.style.left = (ar.left - wr.left) + 'px'; slider.style.width = ar.width + 'px';
      }
    });
  }
}

customElements.define('skippers-list', SkippersList);
}
})();
