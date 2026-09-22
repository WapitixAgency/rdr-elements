/* rdr-elements inscription | source route-du-rhum e5a1cf5 | skipper-media-uploader.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["inscription"]="e5a1cf5";performance.mark("rdr-elements:inscription")}catch(e){}
;(function(){
const CONFIG = {
  MAX_GALERIE: 10,
  MAX_FILE_SIZE: 25 * 1024 * 1024,
  MIN_IMAGE_DIM: 200,
  COMPRESS_MAX_DIM: 2400,
  COMPRESS_MIN_DIM: 1400,
  COMPRESS_QUALITY_INITIAL: 0.85,
  COMPRESS_QUALITY_MIN: 0.45,
  TARGET_BLOB_SIZE: 2.6 * 1024 * 1024,
  HARD_BLOB_LIMIT: 3.5 * 1024 * 1024,
  SAFARI_TARGET_BLOB_SIZE: 340 * 1024,
  SAFARI_HARD_BLOB_LIMIT: 400 * 1024,
  SAFARI_COMPRESS_MAX_DIM: 1600,
  SAFARI_COMPRESS_MIN_DIM: 1000,
  UPLOAD_RETRIES: 2,
  UPLOAD_RETRY_DELAY: 1200,
  UPLOAD_TIMEOUT: 45000,
  TOAST_DURATION: 5200,
  TOAST_MAX_VISIBLE: 3,
  UPLOAD_ENDPOINT: '/_functions/uploadSkipperMedia',
  REMOVE_ENDPOINT: '/_functions/removeSkipperMedia',
  STATE_ENDPOINT: '/_functions/getSkipperMedia',
   
   
   
  DOSSIER_MAX_SIZE: 150 * 1024 * 1024,
  DOSSIER_URL_ENDPOINT: '/_functions/dossierPresseUrl',
  DOSSIER_SAVE_ENDPOINT: '/_functions/dossierPresseEnregistrer',
   
  DOSSIER_MORCEAU: 5 * 1024 * 1024,
  DOSSIER_MORCEAU_TIMEOUT: 3 * 60 * 1000,
  DOSSIER_REPRISES: [1000, 3000, 6000, 12000, 20000]
};

const COPY = {
  profil: {
    label: 'Photo de profil',
    hint: 'Portrait net sur fond neutre, visage bien cadré à partir des épaules — format carré recommandé (min. 800 × 800 px)'
  },
  couverture: {
    label: 'Photo de couverture',
    hint: 'Format paysage, visuel impactant affiché en en-tête de votre fiche — haute résolution recommandée (min. 1920 × 1080 px)'
  },
  bateau: {
    label: 'Photo du bateau',
    hint: 'Bateau visible en entier, en pleine action ou à quai — format carré recommandé (min. 1400 × 1400 px)'
  }
};

const HEIC_PATTERNS = /\.(heic|heif)$/i;
const HEIC_MIMES = /^image\/(heic|heif|heic-sequence|heif-sequence)$/i;

const IS_SAFARI = (() => {
  try {
    const ua = navigator.userAgent || '';
    return /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
  } catch { return false; }
})();

const CANVAS_TOBLOB_TIMEOUT = 15000;
const IMAGE_LOAD_TIMEOUT = 12000;
 

const _globalUploadChain = { current: Promise.resolve() };

function runSerial(task) {
  const next = _globalUploadChain.current
    .catch(() => {})
    .then(() => task());
  _globalUploadChain.current = next.catch(() => {});
  return next;
}

class SkipperMediaUploader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._token = '';
    this._loadGen = 0;
    this._state = {
      photoProfil: '',
      photoCouverture: '',
      photoBateau: '',
      galerie: [],
      dossierPresse: null
    };
    this._pendingPreviews = new Map();
    this._dragCounters = new Map();
    this._activeUploads = new Map();
    this._rendered = false;
    this._canvasBlobSupport = null;
  }

  static get observedAttributes() {
    return ['data-token'];
  }

  async connectedCallback() {
    if (!this._rendered || !this.shadowRoot.querySelector('.wrap')) {
      this._render();
      this._bindEvents();
      this._rendered = true;
    }
    this._token = this._resolveToken();
    this._loadInitialState();
  }

  disconnectedCallback() {
    this._activeUploads.forEach((ctrl) => {
      try { ctrl.abort(); } catch {}
    });
    this._activeUploads.clear();
    this._pendingPreviews.forEach((url) => {
      try { URL.revokeObjectURL(url); } catch {}
    });
    this._pendingPreviews.clear();
     
     
    if (this._toastStack) { try { this._toastStack.remove(); } catch {} this._toastStack = null; }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'data-token' && newVal && newVal !== this._token) {
      this._token = newVal;
      if (this._rendered) this._loadInitialState();
    }
  }

  _resolveToken() {
    const attr = this.getAttribute('data-token');
    if (attr) return attr;
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get('token');
      if (fromUrl) return fromUrl;
    } catch {}
    return this._token || '';
  }

   

  async _loadInitialState() {
    const token = this._resolveToken();
    if (!token) {
      console.warn('[skipper-media-uploader] Token introuvable, impossible de charger l\'état initial');
      return;
    }
    const gen = ++this._loadGen;
    try {
      const res = await fetch(`${CONFIG.STATE_ENDPOINT}?token=${encodeURIComponent(token)}`);
      if (gen !== this._loadGen) return;
      if (!res.ok) {
        console.warn('[skipper-media-uploader] Chargement état initial : réponse non-OK', res.status);
        return;
      }
      const data = await this._safeJson(res);
      if (gen !== this._loadGen) return;
      if (data?.state) this._applyState(data.state);
    } catch (e) {
      if (gen !== this._loadGen) return;
      console.warn('[skipper-media-uploader] Chargement état initial échoué', e);
    }
  }

  _applyState(state) {
    this._state.photoProfil = state.photoProfil || '';
    this._state.photoCouverture = state.photoCouverture || '';
    this._state.photoBateau = state.photoBateau || '';
    this._state.galerie = Array.isArray(state.galerie) ? state.galerie.filter(Boolean) : [];
    this._state.dossierPresse = state.dossierPresse && state.dossierPresse.url ? state.dossierPresse : null;
    this._refreshAllTiles();
    this._refreshGalerie();
    this._refreshDossier();
  }

   

  _render() {
    this.shadowRoot.innerHTML = `
      <style>${this._css()}</style>
      <div class="wrap">
        <header class="section-head">
          <h3 class="section-title">Photos &amp; médias</h3>
          <p class="section-desc">Illustrez votre fiche publique avec des visuels de qualité. Les images sont automatiquement optimisées au format WebP et redimensionnées pour le web.</p>
        </header>

        <div class="tiles">
          ${this._tileHtml('profil', COPY.profil)}
          ${this._tileHtml('couverture', COPY.couverture)}
          ${this._tileHtml('bateau', COPY.bateau)}
        </div>

        <div class="galerie-section">
          <div class="galerie-header">
            <span class="galerie-title">Galerie</span>
            <span class="galerie-count" data-count>0 / ${CONFIG.MAX_GALERIE}</span>
          </div>
          <div class="galerie-hint">Jusqu'à ${CONFIG.MAX_GALERIE} images supplémentaires — navigation, port, portraits, ambiance…</div>

          <div class="galerie-drop" data-galerie-drop tabindex="0" role="button" aria-label="Ajouter des images à la galerie">
            <input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple hidden data-galerie-input>
            <div class="drop-icon">${this._iconUpload()}</div>
            <div class="drop-text">Glissez vos images ou <span class="link">parcourez</span></div>
            <div class="drop-sub">JPEG, PNG, WebP — jusqu'à ${Math.round(CONFIG.MAX_FILE_SIZE / 1024 / 1024)} Mo</div>
          </div>

          <div class="galerie-grid" data-galerie-grid></div>
        </div>

        <div class="dossier-section">
          <div class="galerie-header">
            <span class="dossier-titre"><span class="badge-nouveau" data-dossier-nouveau>Nouveau</span><span class="galerie-title">Dossier de presse</span></span>
            <span class="galerie-count">PDF</span>
          </div>
          <div class="galerie-hint">Présentation du skipper, du projet et des partenaires. Il sera téléchargeable depuis votre fiche publique.</div>

          <div class="galerie-drop dossier-drop" data-dossier-drop tabindex="0" role="button" aria-label="Ajouter le dossier de presse en PDF">
            <input type="file" accept="application/pdf,.pdf" hidden data-dossier-input>
            <div class="drop-icon">${this._iconDocument()}</div>
            <div class="drop-text">Glissez votre PDF ou <span class="link">parcourez</span></div>
            <div class="drop-sub">PDF uniquement, jusqu'à ${Math.round(CONFIG.DOSSIER_MAX_SIZE / 1024 / 1024)} Mo</div>
          </div>

          <div class="dossier-envoi is-hidden" data-dossier-envoi>
            <div class="dossier-pastille">PDF</div>
            <div class="dossier-infos">
              <span class="dossier-nom" data-dossier-envoi-nom></span>
              <span class="dossier-meta" data-dossier-envoi-texte>Préparation…</span>
              <div class="dossier-barre"><div class="progress-fill" data-dossier-envoi-barre></div></div>
            </div>
            <button type="button" class="btn-cancel dossier-annuler" data-dossier-annuler title="Annuler" aria-label="Annuler l'envoi">${this._iconClose()}</button>
          </div>

          <div class="dossier-fichier is-hidden" data-dossier-fichier>
            <div class="dossier-pastille">PDF</div>
            <div class="dossier-infos">
              <a class="dossier-nom" data-dossier-nom href="#" target="_blank" rel="noopener"></a>
              <span class="dossier-meta">Enregistré, téléchargeable depuis votre fiche</span>
            </div>
            <div class="dossier-actions">
              <button type="button" class="btn-ligne" data-dossier-remplacer>Remplacer</button>
              <button type="button" class="btn-icon btn-danger dossier-retirer" data-dossier-retirer title="Retirer" aria-label="Retirer le dossier de presse">${this._iconTrash()}</button>
            </div>
          </div>
        </div>

        <footer class="section-foot">
          <div class="foot-note">Toutes les images sont enregistrées automatiquement dès l'envoi et servies via le CDN du site. Le format est optimisé pour chaque visiteur (AVIF, WebP ou JPEG selon le navigateur). Le dossier de presse est conservé tel quel, sans conversion.</div>
        </footer>

      </div>
    `;
  }

  _tileHtml(kind, copy) {
    return `
      <div class="tile" data-kind="${kind}">
        <div class="tile-label">${copy.label}</div>
        <div class="tile-hint">${copy.hint}</div>
        <div class="tile-drop" data-tile-drop="${kind}" tabindex="0" role="button" aria-label="Ajouter ${copy.label.toLowerCase()}">
          <input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" hidden data-tile-input="${kind}">
          <div class="tile-empty" data-tile-empty="${kind}">
            <div class="drop-icon">${this._iconImage()}</div>
            <div class="drop-text">Glissez ou <span class="link">parcourez</span></div>
          </div>
          <div class="tile-preview is-hidden" data-tile-preview="${kind}">
            <img data-tile-img="${kind}" alt="">
            <div class="tile-overlay">
              <button type="button" class="btn-icon btn-danger" data-tile-remove="${kind}" title="Supprimer" aria-label="Supprimer la photo">${this._iconTrash()}</button>
            </div>
          </div>
          <div class="tile-loading-full is-hidden" data-tile-loading-full="${kind}">
            <button type="button" class="btn-cancel" data-tile-cancel="${kind}" title="Annuler" aria-label="Annuler l'envoi">${this._iconClose()}</button>
            <div class="spinner"></div>
            <div class="loading-text" data-tile-loading-text="${kind}">Optimisation…</div>
            <div class="progress-bar is-hidden" data-tile-progress="${kind}">
              <div class="progress-fill" data-tile-progress-fill="${kind}"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

   

  _bindEvents() {
    ['profil', 'couverture', 'bateau'].forEach((kind) => this._bindTileEvents(kind));
    this._bindGalerieEvents();
    this._bindDossierEvents();
  }

  _bindDossierEvents() {
    const drop = this.shadowRoot.querySelector('[data-dossier-drop]');
    const input = this.shadowRoot.querySelector('[data-dossier-input]');
    const ouvrir = () => { if (!this._dossierEnvoi) input.click(); };

    drop.addEventListener('click', ouvrir);
    drop.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ouvrir(); }
    });
    this._bindDragEvents(drop, 'dossier', () => !this._dossierEnvoi);
    drop.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._resetDragState(drop, 'dossier');
      const file = e.dataTransfer?.files?.[0];
      if (file && !this._dossierEnvoi) this._handleDossierFile(file);
    });
    input.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) this._handleDossierFile(file);
      input.value = '';
    });

    this.shadowRoot.querySelector('[data-dossier-remplacer]').addEventListener('click', ouvrir);
    this.shadowRoot.querySelector('[data-dossier-retirer]').addEventListener('click', async () => {
      if (this._dossierEnvoi) return;
      await this._handleRemove('dossier');
    });
    this.shadowRoot.querySelector('[data-dossier-annuler]').addEventListener('click', () => this._cancelUpload('dossier'));
  }

  _bindTileEvents(kind) {
    const drop = this.shadowRoot.querySelector(`[data-tile-drop="${kind}"]`);
    const input = this.shadowRoot.querySelector(`[data-tile-input="${kind}"]`);
    const remove = this.shadowRoot.querySelector(`[data-tile-remove="${kind}"]`);
    const cancel = this.shadowRoot.querySelector(`[data-tile-cancel="${kind}"]`);

    drop.addEventListener('click', (e) => {
      if (e.target.closest('.btn-icon, .btn-cancel')) return;
      if (drop.classList.contains('is-busy')) return;
      input.click();
    });

    drop.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !drop.classList.contains('is-busy')) {
        e.preventDefault();
        input.click();
      }
    });

    this._bindDragEvents(drop, `tile-${kind}`, () => !drop.classList.contains('is-busy'));

    drop.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._resetDragState(drop, `tile-${kind}`);
      if (drop.classList.contains('is-busy')) return;
      const file = e.dataTransfer?.files?.[0];
      if (file) this._handleTileFile(kind, file);
    });

    input.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) this._handleTileFile(kind, file);
      input.value = '';
    });

    remove.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (drop.classList.contains('is-busy')) return;
      await this._handleRemove(kind);
    });

    cancel.addEventListener('click', (e) => {
      e.stopPropagation();
      this._cancelUpload(`tile-${kind}`);
    });
  }

  _bindGalerieEvents() {
    const galDrop = this.shadowRoot.querySelector('[data-galerie-drop]');
    const galInput = this.shadowRoot.querySelector('[data-galerie-input]');

    galDrop.addEventListener('click', () => {
      if (this._state.galerie.length >= CONFIG.MAX_GALERIE) return;
      galInput.click();
    });

    galDrop.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && this._state.galerie.length < CONFIG.MAX_GALERIE) {
        e.preventDefault();
        galInput.click();
      }
    });

    this._bindDragEvents(galDrop, 'galerie', () => this._state.galerie.length < CONFIG.MAX_GALERIE);

    galDrop.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._resetDragState(galDrop, 'galerie');
      const files = Array.from(e.dataTransfer?.files || []);
      if (files.length) this._handleGalerieFiles(files);
    });

    galInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length) this._handleGalerieFiles(files);
      galInput.value = '';
    });
  }

  _bindDragEvents(zone, key, isEnabled) {
    this._dragCounters.set(key, 0);

    zone.addEventListener('dragenter', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isEnabled()) return;
      const counter = this._dragCounters.get(key) + 1;
      this._dragCounters.set(key, counter);
      zone.classList.add('is-dragover');
    });

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer && isEnabled()) e.dataTransfer.dropEffect = 'copy';
    });

    zone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const counter = Math.max(0, this._dragCounters.get(key) - 1);
      this._dragCounters.set(key, counter);
      if (counter === 0) zone.classList.remove('is-dragover');
    });
  }

  _resetDragState(zone, key) {
    this._dragCounters.set(key, 0);
    zone.classList.remove('is-dragover');
  }

   

  _kindToKey(kind) {
    return { profil: 'photoProfil', couverture: 'photoCouverture', bateau: 'photoBateau' }[kind];
  }

  async _handleTileFile(kind, file) {
    const err = this._validateFile(file);
    if (err) return this._toast(err, 'error');

    this._loadGen++;

    const key = this._kindToKey(kind);
    const uploadKey = `tile-${kind}`;
    const drop = this.shadowRoot.querySelector(`[data-tile-drop="${kind}"]`);
    const loadingFull = this.shadowRoot.querySelector(`[data-tile-loading-full="${kind}"]`);
    const loadingText = this.shadowRoot.querySelector(`[data-tile-loading-text="${kind}"]`);
    const progressBar = this.shadowRoot.querySelector(`[data-tile-progress="${kind}"]`);
    const progressFill = this.shadowRoot.querySelector(`[data-tile-progress-fill="${kind}"]`);

    drop.classList.add('is-busy');
    this._show(loadingFull);
    if (loadingText) loadingText.textContent = 'Optimisation…';
    if (progressBar) this._hide(progressBar);
    if (progressFill) progressFill.style.width = '0%';

    let localUrl = null;
    const ctrl = new AbortController();
    this._activeUploads.set(uploadKey, ctrl);

    try {
      const compressed = await this._compressImageAdaptive(file);
      if (ctrl.signal.aborted) throw new Error('Upload annulé');
      localUrl = URL.createObjectURL(compressed.blob);
      this._setPendingPreview(key, localUrl);
      this._refreshTile(kind);

      if (loadingText) loadingText.textContent = 'En attente…';

      const onProgress = (loaded, total) => {
        if (!progressFill || !total) return;
        const pct = Math.round((loaded / total) * 100);
        progressFill.style.width = `${pct}%`;
        if (loadingText) {
          loadingText.textContent = pct >= 100 ? 'Traitement…' : `Envoi… ${pct}%`;
        }
      };

      const result = await runSerial(async () => {
        if (ctrl.signal.aborted) throw new Error('Upload annulé');
        if (loadingText) loadingText.textContent = 'Envoi…';
        if (progressBar) this._show(progressBar);
        return this._uploadBlobWithRetry(compressed.blob, kind, this._suggestFilename(file, compressed.mimeType), compressed.mimeType, onProgress, ctrl.signal);
      });

      this._clearPendingPreview(key);
      if (result?.state) {
        this._applyState(result.state);
      } else if (result?.fileUrl) {
        this._state[key] = result.fileUrl;
        this._refreshTile(kind);
      }
      this._toast('Image enregistrée', 'info');
    } catch (e) {
      console.error('[skipper-media-uploader] tile upload failed', {
        error: e?.message,
        kind,
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        isSafari: IS_SAFARI,
        userAgent: navigator.userAgent
      });
      if (e?.message !== 'Upload annulé') {
        this._toast(e.message || 'Upload échoué', 'error');
      }
      this._clearPendingPreview(key);
      this._refreshTile(kind);
    } finally {
      this._activeUploads.delete(uploadKey);
      drop.classList.remove('is-busy');
      this._hide(loadingFull);
    }
  }

  async _handleGalerieFiles(files) {
    const slotsLeft = CONFIG.MAX_GALERIE - this._state.galerie.length;
    if (slotsLeft <= 0) {
      this._toast(`Limite de ${CONFIG.MAX_GALERIE} images atteinte`, 'error');
      return;
    }

    this._loadGen++;

    const toProcess = files.slice(0, slotsLeft);
    if (files.length > slotsLeft) {
      this._toast(`Seules ${slotsLeft} images ajoutées (limite : ${CONFIG.MAX_GALERIE})`, 'info');
    }

    for (const file of toProcess) {
      const err = this._validateFile(file);
      if (err) {
        this._toast(`${file.name} : ${err}`, 'error');
        continue;
      }

      const placeholderId = `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const uploadKey = `galerie-${placeholderId}`;
      let localUrl = null;
      const ctrl = new AbortController();
      this._activeUploads.set(uploadKey, ctrl);

      this._appendGalerieThumb(placeholderId, null, true, () => this._cancelUpload(uploadKey));

      try {
        const compressed = await this._compressImageAdaptive(file);
        if (ctrl.signal.aborted) throw new Error('Upload annulé');
        localUrl = URL.createObjectURL(compressed.blob);
        this._updateGalerieThumb(placeholderId, localUrl, true);
        this._setGalerieThumbStatus(placeholderId, 'En attente');

        const onProgress = (loaded, total) => {
          if (!total) return;
          const pct = Math.round((loaded / total) * 100);
          this._setGalerieThumbProgress(placeholderId, pct);
          this._setGalerieThumbStatus(placeholderId, pct >= 100 ? 'Traitement' : `${pct}%`);
        };

        const result = await runSerial(async () => {
          if (ctrl.signal.aborted) throw new Error('Upload annulé');
          this._setGalerieThumbStatus(placeholderId, 'Envoi');
          return this._uploadBlobWithRetry(compressed.blob, 'galerie', this._suggestFilename(file, compressed.mimeType), compressed.mimeType, onProgress, ctrl.signal);
        });

        this._removeGalerieThumb(placeholderId);
        if (localUrl) { try { URL.revokeObjectURL(localUrl); } catch {} }
        if (result?.state) this._applyState(result.state);
      } catch (e) {
        console.error('[skipper-media-uploader] galerie upload failed', {
          error: e?.message,
          fileName: file?.name,
          fileSize: file?.size,
          fileType: file?.type,
          isSafari: IS_SAFARI,
          userAgent: navigator.userAgent
        });
        if (e?.message !== 'Upload annulé') {
          this._toast(`${file.name} : ${e.message || 'échec'}`, 'error');
        }
        this._removeGalerieThumb(placeholderId);
        if (localUrl) { try { URL.revokeObjectURL(localUrl); } catch {} }
      } finally {
        this._activeUploads.delete(uploadKey);
      }
    }
  }

  async _handleRemove(kind, url) {
    const token = this._resolveToken();
    if (!token) {
      this._toast('Token manquant', 'error');
      return;
    }
    this._loadGen++;
    await runSerial(async () => {
      try {
        const res = await fetch(CONFIG.REMOVE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, kind, url })
        });
        if (!res.ok) {
          let msg = `Suppression échouée (${res.status})`;
          const j = await this._safeJson(res);
          if (j?.error) msg = j.error;
          throw new Error(msg);
        }
        const data = await this._safeJson(res);
        if (data?.state) this._applyState(data.state);
      } catch (e) {
        console.error('[skipper-media-uploader] remove failed', e);
        this._toast(e.message || 'Suppression échouée', 'error');
      }
    });
  }

  



  async _handleDossierFile(file) {
    const err = await this._validateDossier(file);
    if (err) return this._toast(err, 'error');
    const token = this._resolveToken();
    if (!token) return this._toast('Token manquant', 'error');

    this._loadGen++;
    const ctrl = new AbortController();
    this._activeUploads.set('dossier', ctrl);
    this._dossierEnvoi = { nom: file.name, pct: 0, texte: 'Préparation…' };
    this._refreshDossier();
     
    const retenir = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', retenir);

    try {
      const adresse = await this._postJson(CONFIG.DOSSIER_URL_ENDPOINT, { token, fileName: file.name, size: file.size }, ctrl.signal);
      if (!adresse?.uploadUrl || !adresse?.uploadToken) throw new Error('Envoi impossible pour le moment, réessayez');

      const mo = (n) => (n / 1024 / 1024).toFixed(n < 10 * 1024 * 1024 ? 1 : 0);
      const envoye = await this._envoyerTus(adresse, file, ctrl.signal, (octets, reprise) => {
        const pct = Math.min(100, Math.round((octets / file.size) * 100));
        const texte = reprise ? 'Connexion perdue, reprise…'
          : pct >= 100 ? 'Vérification…' : `Envoi… ${pct} % (${mo(octets)} / ${mo(file.size)} Mo)`;
        this._dossierEnvoi = { nom: file.name, pct, texte };
        this._refreshDossier();
      });
      const fileId = envoye?.file?.id;
      if (!fileId) throw new Error('Réponse de la médiathèque invalide');

      this._dossierEnvoi = { nom: file.name, pct: 100, texte: 'Enregistrement…' };
      this._refreshDossier();
      const enregistre = await this._postJson(CONFIG.DOSSIER_SAVE_ENDPOINT, { token, fileId }, ctrl.signal);
      this._dossierEnvoi = null;
      if (enregistre?.state) this._applyState(enregistre.state);
      else this._refreshDossier();
      this._toast('Dossier de presse enregistré', 'info');
    } catch (e) {
      this._dossierEnvoi = null;
      this._refreshDossier();
      if (e?.message !== 'Upload annulé') {
        console.error('[skipper-media-uploader] dossier de presse', { error: e?.message, fileName: file?.name, fileSize: file?.size });
        this._toast(e?.message || 'Envoi du PDF échoué', 'error');
      }
    } finally {
      window.removeEventListener('beforeunload', retenir);
      this._activeUploads.delete('dossier');
    }
  }

  async _validateDossier(file) {
    if (!file) return 'Fichier invalide';
    const pdf = /^application\/pdf$/i.test(file.type || '') || /\.pdf$/i.test(file.name || '');
    if (!pdf) return 'Format non supporté (PDF uniquement)';
    if (file.size > CONFIG.DOSSIER_MAX_SIZE) return `PDF trop lourd (max ${Math.round(CONFIG.DOSSIER_MAX_SIZE / 1024 / 1024)} Mo)`;
    if (file.size < 1024) return 'Fichier trop petit ou corrompu';
     
    try {
      const debut = await file.slice(0, 5).text();
      if (debut !== '%PDF-') return 'Ce fichier n\'est pas un PDF valide';
    } catch (e) {   }
    return null;
  }

  async _postJson(url, body, signal) {
    if (signal?.aborted) throw new Error('Upload annulé');
    let res;
    try {
      res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal });
    } catch (e) {
      if (signal?.aborted) throw new Error('Upload annulé');
      throw new Error('Connexion interrompue, réessayez');
    }
    const data = await this._safeJson(res);
    if (!res.ok) throw new Error(data?.error || `Erreur serveur (${res.status})`);
    return data;
  }

  






  async _envoyerTus(adresse, file, signal, onProgress) {
    const { uploadUrl, uploadToken } = adresse;
    const nom = adresse.fileName || file.name;
    const b64 = (s) => btoa(unescape(encodeURIComponent(s)));
    const tus = { 'Tus-Resumable': '1.0.0' };

    const creation = await this._xhr('POST', uploadUrl, {
      ...tus,
      'Upload-Length': String(file.size),
      'Upload-Metadata': `filename ${b64(nom)},contentType ${b64('application/pdf')},token ${b64(uploadToken)}`
    }, null, signal);
    const lieu = creation.status === 201 ? creation.header('Location') : '';
    if (!lieu) throw new Error(`La médiathèque a refusé l'envoi (${creation.status})`);
    const session = new URL(lieu, uploadUrl).href;

    let position = 0;
    let echecs = 0;
    while (position < file.size) {
      const fin = Math.min(file.size, position + CONFIG.DOSSIER_MORCEAU);
      try {
        const depart = position;
        const r = await this._xhr('PATCH', session, {
          ...tus, 'Upload-Offset': String(depart), 'Content-Type': 'application/offset+octet-stream'
        }, file.slice(depart, fin), signal, (charge) => onProgress(depart + charge, false), CONFIG.DOSSIER_MORCEAU_TIMEOUT);
        const suivante = Number(r.header('Upload-Offset'));
        if (r.status < 200 || r.status >= 300 || !(suivante > depart)) throw new Error('morceau ' + r.status);
        position = suivante;
        echecs = 0;
        onProgress(position, false);
      } catch (e) {
        if (e?.message === 'Upload annulé') throw e;
        if (echecs >= CONFIG.DOSSIER_REPRISES.length) throw new Error('Connexion trop instable, réessayez plus tard');
        onProgress(position, true);
        await new Promise((ok) => setTimeout(ok, CONFIG.DOSSIER_REPRISES[echecs]));
        echecs++;
        if (signal?.aborted) throw new Error('Upload annulé');
         
        try {
          const h = await this._xhr('HEAD', session, tus, null, signal);
          const connue = Number(h.header('Upload-Offset'));
          if (h.status >= 200 && h.status < 300 && connue >= 0) position = connue;
        } catch (e2) {
          if (e2?.message === 'Upload annulé') throw e2;
        }
      }
    }

    const final = await this._xhr('PUT', `${uploadUrl}/${uploadToken}?filename=${encodeURIComponent(nom)}`, {}, null, signal);
    let parsed = null;
    try { parsed = JSON.parse(final.text); } catch {}
    if (final.status < 200 || final.status >= 300) throw new Error(`La médiathèque a refusé le PDF (${final.status})`);
    return parsed;
  }

  _xhr(method, url, headers, body, signal, onUpload, timeout) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.timeout = timeout || 60000;
      Object.keys(headers || {}).forEach((k) => xhr.setRequestHeader(k, headers[k]));
      const onAbort = () => { try { xhr.abort(); } catch {} reject(new Error('Upload annulé')); };
      if (signal) {
        if (signal.aborted) return onAbort();
        signal.addEventListener('abort', onAbort, { once: true });
      }
      const fin = () => { if (signal) signal.removeEventListener('abort', onAbort); };
      if (onUpload && xhr.upload) {
        xhr.upload.addEventListener('progress', (e) => { if (e.lengthComputable) onUpload(e.loaded); });
      }
      xhr.ontimeout = () => { fin(); reject(new Error('délai dépassé')); };
      xhr.onerror = () => { fin(); reject(new Error('connexion interrompue')); };
      xhr.onload = () => {
        fin();
        resolve({ status: xhr.status, text: xhr.responseText, header: (n) => xhr.getResponseHeader(n) });
      };
      try { xhr.send(body); } catch (e) { fin(); reject(new Error('connexion interrompue')); }
    });
  }

  _refreshDossier() {
    const root = this.shadowRoot;
    const drop = root.querySelector('[data-dossier-drop]');
    const envoi = root.querySelector('[data-dossier-envoi]');
    const carte = root.querySelector('[data-dossier-fichier]');
    if (!drop || !envoi || !carte) return;
    const e = this._dossierEnvoi;
    const d = this._state.dossierPresse;
     
    const badge = root.querySelector('[data-dossier-nouveau]');
    if (badge) badge.classList.toggle('is-hidden', !!(d && d.url));
    if (e) {
      this._hide(drop); this._hide(carte); this._show(envoi);
      root.querySelector('[data-dossier-envoi-nom]').textContent = e.nom;
      root.querySelector('[data-dossier-envoi-texte]').textContent = e.texte;
      root.querySelector('[data-dossier-envoi-barre]').style.width = `${e.pct}%`;
      return;
    }
    this._hide(envoi);
    if (d && d.url) {
      const lien = root.querySelector('[data-dossier-nom]');
      lien.href = d.url;
      lien.textContent = d.nom || 'Dossier de presse.pdf';
      this._hide(drop); this._show(carte);
    } else {
      this._hide(carte); this._show(drop);
    }
  }

  _cancelUpload(uploadKey) {
    const ctrl = this._activeUploads.get(uploadKey);
    if (ctrl) {
      try { ctrl.abort(); } catch {}
      this._activeUploads.delete(uploadKey);
    }
  }

   

  _validateFile(file) {
    if (!file) return 'Fichier invalide';

    const name = file.name || '';
    const type = file.type || '';

    if (HEIC_PATTERNS.test(name) || HEIC_MIMES.test(type)) {
      return 'Format HEIC non supporté — convertissez en JPEG depuis votre téléphone (Réglages → Photos → Plus compatible)';
    }

    const mimeOk = /^image\/(jpeg|jpg|png|webp)$/i.test(type);
    const extOk = /\.(jpe?g|png|webp)$/i.test(name);
    if (!mimeOk && !extOk) {
      console.warn('[skipper-media-uploader] Fichier refusé', { type, name, size: file.size });
      return 'Format non supporté (JPEG, PNG, WebP uniquement)';
    }
    if (file.size > CONFIG.MAX_FILE_SIZE) return `Fichier trop lourd (max ${Math.round(CONFIG.MAX_FILE_SIZE / 1024 / 1024)} Mo)`;
    if (file.size < 1024) return 'Fichier trop petit ou corrompu';
    return null;
  }

  _suggestFilename(file, mimeType) {
    const base = (file.name || 'image').replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi, '-').toLowerCase();
    const t = (mimeType || '').toLowerCase();
    let ext = 'webp';
    if (t.includes('jpeg') || t.includes('jpg')) ext = 'jpg';
    else if (t.includes('png')) ext = 'png';
    else if (t.includes('webp')) ext = 'webp';
    return `${base || 'image'}-${Date.now()}.${ext}`;
  }

  _setPendingPreview(key, url) {
    const old = this._pendingPreviews.get(key);
    if (old) { try { URL.revokeObjectURL(old); } catch {} }
    this._pendingPreviews.set(key, url);
  }

  _clearPendingPreview(key) {
    const old = this._pendingPreviews.get(key);
    if (old) { try { URL.revokeObjectURL(old); } catch {} }
    this._pendingPreviews.delete(key);
  }

   

  async _loadImageSource(file) {
    if (typeof createImageBitmap === 'function') {
      try {
        const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
        return { type: 'bitmap', source: bmp };
      } catch (e) {
        try {
          const bmp = await createImageBitmap(file);
          return { type: 'bitmap', source: bmp };
        } catch (e2) {
          console.warn('[skipper-media-uploader] createImageBitmap a échoué, fallback Image()', e2);
        }
      }
    }
    const img = await this._fileToImage(file);
    return { type: 'image', source: img };
  }

  _fileToImage(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      let settled = false;

      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        try { URL.revokeObjectURL(url); } catch {}
        reject(new Error('Délai de chargement dépassé (image trop lourde ou bloquée)'));
      }, IMAGE_LOAD_TIMEOUT);

      img.onload = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(img);
      };
      img.onerror = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try { URL.revokeObjectURL(url); } catch {}
        reject(new Error('Image illisible (format non supporté ou fichier corrompu)'));
      };
      img.src = url;
    });
  }

  _disposeSource(src) {
    if (!src) return;
    if (src.type === 'bitmap' && src.source.close) {
      try { src.source.close(); } catch {}
    }
    if (src.type === 'image' && src.source.src?.startsWith('blob:')) {
      try { URL.revokeObjectURL(src.source.src); } catch {}
    }
  }

  async _supportsOffscreenWebp() {
    if (this._canvasBlobSupport !== null) return this._canvasBlobSupport;
    if (IS_SAFARI) {
      this._canvasBlobSupport = false;
      return false;
    }
    try {
      if (typeof OffscreenCanvas === 'undefined') {
        this._canvasBlobSupport = false;
        return false;
      }
      const test = new OffscreenCanvas(2, 2);
      if (typeof test.convertToBlob !== 'function') {
        this._canvasBlobSupport = false;
        return false;
      }
      const blob = await test.convertToBlob({ type: 'image/webp', quality: 0.5 });
      this._canvasBlobSupport = !!(blob && /webp/i.test(blob.type));
    } catch {
      this._canvasBlobSupport = false;
    }
    return this._canvasBlobSupport;
  }

  _canvasToBlob(canvas, type, quality) {
    return new Promise((resolve) => {
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        console.warn('[skipper-media-uploader] canvas.toBlob timeout', { type, quality });
        resolve(null);
      }, CANVAS_TOBLOB_TIMEOUT);

      try {
        canvas.toBlob((blob) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve(blob);
        }, type, quality);
      } catch (e) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        console.warn('[skipper-media-uploader] canvas.toBlob throw', e);
        resolve(null);
      }
    });
  }

  _releaseCanvas(canvas) {
    if (!canvas) return;
    try {
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext && canvas.getContext('2d');
      if (ctx && ctx.clearRect) ctx.clearRect(0, 0, 1, 1);
    } catch {}
  }

  async _renderToBlob(src, w, h, quality) {
    const useOffscreen = await this._supportsOffscreenWebp();

    if (useOffscreen) {
      const canvas = new OffscreenCanvas(w, h);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(src.source, 0, 0, w, h);
      const blob = await canvas.convertToBlob({ type: 'image/webp', quality });
      if (blob) return { blob, mimeType: blob.type || 'image/webp' };
    }

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(src.source, 0, 0, w, h);

    try {
      let blob = await this._canvasToBlob(canvas, 'image/webp', quality);
      if (!blob || !/webp/i.test(blob.type)) {
        blob = await this._canvasToBlob(canvas, 'image/jpeg', quality);
        if (!blob) throw new Error('Compression impossible (canvas)');
        return { blob, mimeType: blob.type || 'image/jpeg' };
      }
      return { blob, mimeType: blob.type || 'image/webp' };
    } finally {
      this._releaseCanvas(canvas);
    }
  }

  async _compressImageAdaptive(file) {
    const src = await this._loadImageSource(file);
    try {
      const naturalW = src.source.width || src.source.naturalWidth;
      const naturalH = src.source.height || src.source.naturalHeight;
      if (!naturalW || !naturalH) throw new Error('Dimensions image invalides');
      if (naturalW < CONFIG.MIN_IMAGE_DIM || naturalH < CONFIG.MIN_IMAGE_DIM) {
        throw new Error(`Image trop petite (${naturalW}×${naturalH}px, minimum ${CONFIG.MIN_IMAGE_DIM}×${CONFIG.MIN_IMAGE_DIM})`);
      }

      const targetSize = IS_SAFARI ? CONFIG.SAFARI_TARGET_BLOB_SIZE : CONFIG.TARGET_BLOB_SIZE;
      const hardLimit = IS_SAFARI ? CONFIG.SAFARI_HARD_BLOB_LIMIT : CONFIG.HARD_BLOB_LIMIT;
      const startMaxDim = IS_SAFARI ? CONFIG.SAFARI_COMPRESS_MAX_DIM : CONFIG.COMPRESS_MAX_DIM;
      const minDim = IS_SAFARI ? CONFIG.SAFARI_COMPRESS_MIN_DIM : CONFIG.COMPRESS_MIN_DIM;

      let maxDim = startMaxDim;
      let quality = CONFIG.COMPRESS_QUALITY_INITIAL;
      let result = null;
      let attempts = 0;

      while (attempts < 10) {
        attempts++;
        const ratio = Math.min(maxDim / naturalW, maxDim / naturalH, 1);
        const w = Math.max(1, Math.round(naturalW * ratio));
        const h = Math.max(1, Math.round(naturalH * ratio));

        result = await this._renderToBlob(src, w, h, quality);
        if (!result?.blob) throw new Error('Compression impossible');

        if (result.blob.size <= targetSize) break;

        if (quality > CONFIG.COMPRESS_QUALITY_MIN + 0.001) {
          quality = Math.max(CONFIG.COMPRESS_QUALITY_MIN, quality - 0.1);
          continue;
        }
        if (maxDim > minDim) {
          maxDim = Math.max(minDim, Math.round(maxDim * 0.85));
          quality = CONFIG.COMPRESS_QUALITY_INITIAL;
          continue;
        }
        break;
      }

      if (!result?.blob) throw new Error('Compression impossible');

      const sizeMB = (result.blob.size / 1024 / 1024).toFixed(2);
      const sizeKB = Math.round(result.blob.size / 1024);
      console.log(`[skipper-media-uploader] compressed: ${sizeKB} KB (${sizeMB} MB), type=${result.blob.type}, attempts=${attempts}, isSafari=${IS_SAFARI}`);

      if (result.blob.size > hardLimit) {
        throw new Error(`Image trop lourde après optimisation (${sizeMB} Mo). Réduisez sa taille avant envoi.`);
      }
      return result;
    } finally {
      this._disposeSource(src);
    }
  }

   

  async _uploadBlobWithRetry(blob, kind, filename, mimeType, onProgress, signal) {
    let lastErr = null;
    for (let attempt = 0; attempt <= CONFIG.UPLOAD_RETRIES; attempt++) {
      if (signal?.aborted) throw new Error('Upload annulé');
      try {
        return await this._uploadBlob(blob, kind, filename, mimeType, onProgress, signal);
      } catch (e) {
        lastErr = e;
        if (e?.message === 'Upload annulé') throw e;
        const msg = (e?.message || '').toLowerCase();
        const retriable =
          msg.includes('load failed') ||
          msg.includes('failed to fetch') ||
          msg.includes('networkerror') ||
          msg.includes('network error') ||
          msg.includes('timeout') ||
          msg.includes('connexion') ||
          msg.includes('délai') ||
          /\b(502|503|504)\b/.test(msg);
        if (!retriable || attempt === CONFIG.UPLOAD_RETRIES) throw e;
        console.warn(`[skipper-media-uploader] upload retry ${attempt + 1}/${CONFIG.UPLOAD_RETRIES} dans ${CONFIG.UPLOAD_RETRY_DELAY}ms`, e);
        await new Promise((r) => setTimeout(r, CONFIG.UPLOAD_RETRY_DELAY));
      }
    }
    throw lastErr || new Error('Upload échoué');
  }

  async _uploadBlob(blob, kind, filename, mimeType, onProgress, signal) {
    const token = this._resolveToken();
    if (!token) throw new Error('Token manquant');

    const contentBase64 = await this._blobToBase64(blob);
    const body = JSON.stringify({
      token,
      kind,
      filename,
      mimeType: mimeType || 'image/webp',
      contentBase64
    });

    const payloadKB = Math.round(body.length / 1024);
    console.log(`[skipper-media-uploader] uploading: ${payloadKB} KB payload, kind=${kind}, mime=${mimeType}, filename=${filename}`);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', CONFIG.UPLOAD_ENDPOINT, true);
      xhr.timeout = CONFIG.UPLOAD_TIMEOUT;
      xhr.setRequestHeader('Content-Type', 'application/json');

      const cleanup = () => {
        if (signal) signal.removeEventListener('abort', onAbort);
      };

      const onAbort = () => {
        try { xhr.abort(); } catch {}
        cleanup();
        reject(new Error('Upload annulé'));
      };

      if (signal) {
        if (signal.aborted) return onAbort();
        signal.addEventListener('abort', onAbort);
      }

      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) onProgress(e.loaded, e.total);
        });
      }

      xhr.ontimeout = () => {
        cleanup();
        reject(new Error('Délai serveur dépassé (timeout)'));
      };

      xhr.onerror = () => {
        cleanup();
        reject(new Error('Connexion interrompue, réessayez (load failed)'));
      };

      xhr.onabort = () => {
        cleanup();
      };

      xhr.onload = () => {
        cleanup();
        const status = xhr.status;
        let parsed = null;
        try { parsed = JSON.parse(xhr.responseText); } catch {
          if (xhr.responseText) parsed = { error: xhr.responseText.slice(0, 200) };
        }

        if (status >= 200 && status < 300) {
          if (!parsed?.fileUrl) return reject(new Error('Réponse serveur invalide'));
          return resolve(parsed);
        }

        let msg = parsed?.error || '';
        if (!msg) {
          if (status === 413) msg = 'Image trop lourde pour le serveur, réessayez avec une photo plus petite';
          else if (status === 403) msg = 'Accès refusé (token invalide ou fiche verrouillée)';
          else if (status === 502 || status === 503 || status === 504) msg = `Serveur indisponible (${status})`;
          else if (status === 0) msg = 'Connexion interrompue, réessayez (load failed)';
          else msg = `Erreur serveur (${status})`;
        }
        reject(new Error(msg));
      };

      try {
        xhr.send(body);
      } catch (e) {
        cleanup();
        reject(new Error('Connexion interrompue, réessayez (load failed)'));
      }
    });
  }

  async _safeJson(res) {
    try {
      return await res.json();
    } catch {
      try {
        const txt = await res.text();
        return txt ? { error: txt.slice(0, 200) } : null;
      } catch {
        return null;
      }
    }
  }

  _blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result || '';
        const comma = result.indexOf(',');
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      };
      reader.onerror = () => reject(new Error('Lecture fichier impossible'));
      reader.readAsDataURL(blob);
    });
  }

  _wixImageToHttp(wixUrl) {
    if (!wixUrl) return '';
    if (wixUrl.startsWith('http')) return wixUrl;
    if (wixUrl.startsWith('blob:')) return wixUrl;
    const m = wixUrl.match(/wix:image:\/\/v1\/([^\/]+)\/([^#?]+)/);
    if (!m) return '';
    return `https://static.wixstatic.com/media/${m[1]}`;
  }

   

  _refreshAllTiles() {
    ['profil', 'couverture', 'bateau'].forEach((k) => this._refreshTile(k));
  }

  _refreshTile(kind) {
    const key = this._kindToKey(kind);
    const value = this._state[key];
    const pending = this._pendingPreviews.get(key);
    const drop = this.shadowRoot.querySelector(`[data-tile-drop="${kind}"]`);
    const empty = drop.querySelector(`[data-tile-empty="${kind}"]`);
    const preview = drop.querySelector(`[data-tile-preview="${kind}"]`);
    const img = drop.querySelector(`[data-tile-img="${kind}"]`);

    const src = pending || this._wixImageToHttp(value);

    if (src) {
      img.src = src;
      this._show(preview);
      this._hide(empty);
      drop.classList.add('has-image');
    } else {
      this._hide(preview);
      this._show(empty);
      drop.classList.remove('has-image');
    }
  }

  _refreshGalerie() {
    const grid = this.shadowRoot.querySelector('[data-galerie-grid]');
    const count = this.shadowRoot.querySelector('[data-count]');
    const drop = this.shadowRoot.querySelector('[data-galerie-drop]');

    count.textContent = `${this._state.galerie.length} / ${CONFIG.MAX_GALERIE}`;

    if (this._state.galerie.length >= CONFIG.MAX_GALERIE) {
      drop.classList.add('is-disabled');
    } else {
      drop.classList.remove('is-disabled');
    }

    grid.querySelectorAll('[data-committed]').forEach((n) => n.remove());

    this._state.galerie.forEach((url, idx) => {
      const httpUrl = this._wixImageToHttp(url);
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.dataset.committed = '1';
      thumb.dataset.idx = String(idx);

      const img = document.createElement('img');
      img.alt = '';
      img.src = httpUrl;
      thumb.appendChild(img);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'thumb-remove';
      btn.setAttribute('aria-label', 'Supprimer');
      btn.innerHTML = this._iconClose();
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        await this._handleRemove('galerie', url);
      });
      thumb.appendChild(btn);

      grid.appendChild(thumb);
    });
  }

  _appendGalerieThumb(id, localUrl, loading, onCancel) {
    const grid = this.shadowRoot.querySelector('[data-galerie-grid]');
    const thumb = document.createElement('div');
    thumb.className = 'thumb thumb-pending';
    thumb.dataset.pendingId = id;

    const img = document.createElement('img');
    img.alt = '';
    if (localUrl) {
      img.src = localUrl;
    } else {
      img.classList.add('is-hidden');
    }
    thumb.appendChild(img);

    if (loading) {
      const load = document.createElement('div');
      load.className = 'thumb-loading';

      const spinner = document.createElement('div');
      spinner.className = 'spinner spinner-sm';
      load.appendChild(spinner);

      const status = document.createElement('div');
      status.className = 'thumb-status';
      status.dataset.thumbStatus = '1';
      status.textContent = 'Optimisation';
      load.appendChild(status);

      const progress = document.createElement('div');
      progress.className = 'thumb-progress';
      progress.dataset.thumbProgress = '1';
      load.appendChild(progress);

      thumb.appendChild(load);

      if (onCancel) {
        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.className = 'thumb-cancel';
        cancelBtn.setAttribute('aria-label', 'Annuler');
        cancelBtn.innerHTML = this._iconClose();
        cancelBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          onCancel();
        });
        thumb.appendChild(cancelBtn);
      }
    }

    grid.appendChild(thumb);
  }

  _setGalerieThumbStatus(id, text) {
    const thumb = this.shadowRoot.querySelector(`[data-pending-id="${id}"]`);
    if (!thumb) return;
    const status = thumb.querySelector('[data-thumb-status]');
    if (status) status.textContent = text;
  }

  _updateGalerieThumb(id, localUrl, loading) {
    const thumb = this.shadowRoot.querySelector(`[data-pending-id="${id}"]`);
    if (!thumb) return;
    const img = thumb.querySelector('img');
    if (localUrl) {
      img.src = localUrl;
      img.classList.remove('is-hidden');
    }
    const load = thumb.querySelector('.thumb-loading');
    if (load && !loading) load.remove();
  }

  _setGalerieThumbProgress(id, pct) {
    const thumb = this.shadowRoot.querySelector(`[data-pending-id="${id}"]`);
    if (!thumb) return;
    const progress = thumb.querySelector('[data-thumb-progress]');
    if (progress) progress.style.width = `${pct}%`;
  }

  _removeGalerieThumb(id) {
    const thumb = this.shadowRoot.querySelector(`[data-pending-id="${id}"]`);
    if (thumb) thumb.remove();
  }

  _show(el) { if (el) el.classList.remove('is-hidden'); }
  _hide(el) { if (el) el.classList.add('is-hidden'); }

   

   
   
   
   
  _ensureToastPortal() {
    if (this._toastStack && this._toastStack.isConnected) return this._toastStack;
    if (!document.getElementById('smu-toast-styles')) {
      const st = document.createElement('style');
      st.id = 'smu-toast-styles';
      st.textContent =
        '.smu-toast-stack{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);display:flex;flex-direction:column-reverse;gap:8px;z-index:2147483000;max-width:92vw;pointer-events:none}' +
        '.smu-toast{background:#0a1a2f;color:#fff;padding:12px 18px;border-radius:10px;font-family:Montserrat,system-ui,sans-serif;font-size:13px;font-weight:500;box-shadow:0 8px 32px rgba(0,0,0,.35);border-left:3px solid #D4B942;opacity:0;transform:translateY(12px);transition:opacity .2s ease,transform .2s ease;pointer-events:auto}' +
        '.smu-toast.smu-error{border-left-color:#e05263}' +
        '.smu-toast.is-visible{opacity:1;transform:translateY(0)}' +
        '@media (prefers-reduced-motion:reduce){.smu-toast{transition:none}}';
      document.head.appendChild(st);
    }
    const stack = document.createElement('div');
    stack.className = 'smu-toast-stack';
    document.body.appendChild(stack);
    this._toastStack = stack;
    return stack;
  }

  _toast(message, type = 'info') {
    const stack = this._ensureToastPortal();
    if (!stack) return;

    const visible = stack.querySelectorAll('.smu-toast.is-visible');
    if (visible.length >= CONFIG.TOAST_MAX_VISIBLE) {
      visible[0].classList.remove('is-visible');
      setTimeout(() => visible[0]?.remove(), 250);
    }

    const toast = document.createElement('div');
    toast.className = 'smu-toast' + (type === 'error' ? ' smu-error' : '');
    toast.textContent = message;
    stack.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('is-visible'));

    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 250);
    }, CONFIG.TOAST_DURATION);
  }

   

  _iconUpload() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;
  }
  _iconImage() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
  }
  _iconTrash() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>`;
  }
  _iconDocument() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>`;
  }
  _iconClose() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  }

   

  _css() {
    return `
      :host {
        display: block;
        font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        color: #e8eef5;
        --accent: #D4B942;
        --accent-soft: rgba(212, 185, 66, 0.12);
        --tile-bg: rgba(255, 255, 255, 0.03);
        --tile-border: rgba(255, 255, 255, 0.14);
        --tile-border-hover: var(--accent);
        --danger: #e05263;
        --text: rgba(232, 238, 245, 0.95);
        --text-muted: rgba(232, 238, 245, 0.55);
        --radius: 14px;
      }

      * { box-sizing: border-box; font-family: inherit; }
      .is-hidden { display: none !important; }

      .wrap {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 36px;
        padding: 48px 0 56px;
      }

      .section-head { display: flex; flex-direction: column; gap: 12px; padding-bottom: 4px; }
      .section-title {
        margin: 0;
        font-size: 24px; font-weight: 800;
        letter-spacing: 0.06em; text-transform: uppercase;
        color: var(--accent); line-height: 1.1;
      }
      .section-desc { margin: 0; font-size: 14px; line-height: 1.6; color: var(--text); max-width: 760px; }

      .tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      @media (max-width: 900px) { .tiles { grid-template-columns: 1fr; } }

      .tile { display: flex; flex-direction: column; gap: 8px; }
      .tile-label {
        font-size: 15px; font-weight: 700;
        letter-spacing: 0.05em; text-transform: uppercase; color: #fff;
      }
      .tile-hint {
        font-size: 12.5px; line-height: 1.5;
        color: var(--text); margin-bottom: 6px; min-height: 56px;
      }

      .tile-drop {
        position: relative; aspect-ratio: 4 / 3;
        background: var(--tile-bg);
        border: 1.5px dashed var(--tile-border);
        border-radius: var(--radius);
        cursor: pointer; overflow: hidden;
        transition: border-color 0.18s ease, background-color 0.18s ease;
        outline: none;
      }
      .tile-drop:hover, .tile-drop.is-dragover { border-color: var(--tile-border-hover); }
      .tile-drop:focus-visible {
        border-color: var(--tile-border-hover);
        background: var(--accent-soft);
      }
      .tile-drop.has-image { border-style: solid; border-color: rgba(255, 255, 255, 0.08); }
      .tile-drop.is-busy { cursor: progress; }

      .tile-empty {
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        gap: 12px; padding: 16px; text-align: center;
      }
      .drop-icon {
        width: 36px; height: 36px; color: var(--accent);
        display: flex; align-items: center; justify-content: center;
      }
      .drop-icon svg { width: 100%; height: 100%; }
      .drop-text { font-size: 13px; font-weight: 500; color: var(--text); }
      .drop-sub { font-size: 11.5px; color: var(--text-muted); }
      .link { color: var(--accent); font-weight: 600; }

      .tile-preview { position: absolute; inset: 0; }
      .tile-preview img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .tile-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(180deg, rgba(10, 26, 47, 0) 55%, rgba(10, 26, 47, 0.85) 100%);
        opacity: 0; transition: opacity 0.18s ease;
        display: flex; align-items: flex-end; justify-content: flex-end;
        gap: 8px; padding: 12px;
      }
      .tile-drop:hover .tile-overlay, .tile-drop:focus-within .tile-overlay { opacity: 1; }
      .tile-drop.is-busy .tile-overlay { opacity: 0; }

      .btn-icon {
        width: 36px; height: 36px; border-radius: 8px;
        border: none; background: rgba(10, 26, 47, 0.9); color: #fff;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: background-color 0.15s ease, transform 0.15s ease;
      }
      .btn-icon:hover { background: var(--accent); color: #0a1a2f; transform: translateY(-1px); }
      .btn-icon.btn-danger:hover { background: var(--danger); color: #fff; }
      .btn-icon svg { width: 16px; height: 16px; }

      .tile-loading-full {
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        gap: 10px;
        background: rgba(10, 26, 47, 0.82);
        -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); z-index: 2;
        padding: 16px;
      }
      .btn-cancel {
        position: absolute; top: 8px; right: 8px;
        width: 28px; height: 28px; border-radius: 50%;
        border: none; background: rgba(255, 255, 255, 0.12); color: #fff;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: background-color 0.15s ease;
      }
      .btn-cancel:hover { background: var(--danger); }
      .btn-cancel svg { width: 14px; height: 14px; }
      .loading-text { font-size: 12.5px; font-weight: 500; color: #fff; text-align: center; }
      .spinner {
        width: 30px; height: 30px;
        border: 2.5px solid rgba(255, 255, 255, 0.18);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }
      .spinner-sm { width: 22px; height: 22px; border-width: 2px; }
      @keyframes spin { to { transform: rotate(360deg); } }

      .progress-bar {
        width: 70%; max-width: 200px; height: 4px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 2px; overflow: hidden;
        margin-top: 4px;
      }
      .progress-fill {
        height: 100%; width: 0%;
        background: var(--accent);
        transition: width 0.18s ease;
      }

      .galerie-section { display: flex; flex-direction: column; gap: 14px; padding-top: 8px; }
      .galerie-header { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
      .galerie-title {
        font-size: 15px; font-weight: 700;
        letter-spacing: 0.08em; text-transform: uppercase; color: #fff;
      }
      .galerie-count { font-size: 13px; font-weight: 600; color: var(--accent); }
      .galerie-hint { font-size: 12.5px; line-height: 1.5; color: var(--text); margin-top: -6px; }

      .galerie-drop {
        background: var(--tile-bg);
        border: 1.5px dashed var(--tile-border);
        border-radius: var(--radius);
        padding: 32px 20px; cursor: pointer;
        display: flex; flex-direction: column;
        align-items: center; gap: 10px;
        transition: border-color 0.18s ease, background-color 0.18s ease;
        outline: none;
      }
      .galerie-drop:hover:not(.is-disabled),
      .galerie-drop:focus-visible:not(.is-disabled),
      .galerie-drop.is-dragover:not(.is-disabled) {
        border-color: var(--accent);
        background: var(--accent-soft);
      }
      .galerie-drop.is-disabled { opacity: 0.45; cursor: not-allowed; }

      .galerie-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
      }
      .galerie-grid:empty { display: none; }

      .thumb {
        position: relative; aspect-ratio: 1 / 1;
        border-radius: 10px; overflow: hidden;
        background: var(--tile-bg);
        border: 1px solid rgba(255, 255, 255, 0.06);
      }
      .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .thumb-remove {
        position: absolute; top: 6px; right: 6px;
        width: 26px; height: 26px; border-radius: 50%;
        border: none; background: rgba(10, 26, 47, 0.92); color: #fff;
        cursor: pointer; display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.15s ease, background-color 0.15s ease;
      }
      .thumb:hover .thumb-remove { opacity: 1; }
      .thumb-remove:hover { background: var(--danger); }
      .thumb-remove svg { width: 14px; height: 14px; }
      .thumb-pending .thumb-remove { display: none; }
      .thumb-loading {
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        gap: 6px;
        background: rgba(10, 26, 47, 0.78);
      }
      .thumb-status {
        font-size: 10.5px; font-weight: 600;
        color: #fff; letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .thumb-cancel {
        position: absolute; top: 6px; right: 6px;
        width: 24px; height: 24px; border-radius: 50%;
        border: none; background: rgba(255, 255, 255, 0.18); color: #fff;
        cursor: pointer; display: flex; align-items: center; justify-content: center;
        z-index: 2;
        transition: background-color 0.15s ease;
      }
      .thumb-cancel:hover { background: var(--danger); }
      .thumb-cancel svg { width: 12px; height: 12px; }
      .thumb-progress {
        position: absolute; left: 0; bottom: 0;
        height: 3px; width: 0%;
        background: var(--accent);
        transition: width 0.18s ease;
      }

      @media (hover: none) {
        .tile-drop.has-image .tile-overlay {
          opacity: 1;
          background: linear-gradient(180deg, rgba(10, 26, 47, 0) 60%, rgba(10, 26, 47, 0.75) 100%);
        }
        .thumb-remove { opacity: 0.9; }
      }

      

      .dossier-section { display: flex; flex-direction: column; gap: 14px; padding-top: 8px; }
      .dossier-titre { display: inline-flex; align-items: center; gap: 10px; }
      .badge-nouveau {
        padding: 4px 7px 3px; border-radius: 4px; line-height: 1;
        background: var(--accent); color: #0a1a2f;
        font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
      }
      .dossier-envoi, .dossier-fichier {
        position: relative; display: flex; align-items: center; gap: 16px;
        padding: 16px 18px; border-radius: var(--radius);
        background: var(--tile-bg); border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .dossier-envoi { padding-right: 52px; }
      .dossier-pastille {
        flex: none; width: 46px; height: 56px; border-radius: 8px;
        display: flex; align-items: center; justify-content: center;
        background: var(--accent-soft); color: var(--accent);
        font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
      }
      .dossier-infos { flex: 1 1 180px; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
      .dossier-nom {
        font-size: 14px; font-weight: 600; color: #fff; text-decoration: none;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      a.dossier-nom:hover { color: var(--accent); text-decoration: underline; }
      .dossier-meta { font-size: 12px; color: var(--text-muted); }
      .dossier-barre { height: 4px; margin-top: 6px; border-radius: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.15); }
      .dossier-annuler { top: 50%; right: 14px; transform: translateY(-50%); }
      .dossier-actions { flex: none; display: flex; align-items: center; gap: 8px; }
      .btn-ligne {
        height: 36px; padding: 0 14px; border-radius: 8px;
        border: 1px solid var(--tile-border); background: transparent; color: #fff;
        font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
        cursor: pointer; transition: border-color 0.15s ease, color 0.15s ease;
      }
      .btn-ligne:hover { border-color: var(--accent); color: var(--accent); }
      .dossier-retirer { background: rgba(255, 255, 255, 0.08); }
      @media (max-width: 520px) {
        .dossier-fichier { flex-wrap: wrap; }
        .dossier-actions { width: 100%; justify-content: flex-end; }
      }

      .section-foot { padding-top: 8px; }
      .foot-note {
        font-size: 11.5px; line-height: 1.55;
        color: var(--text-muted); font-style: italic; max-width: 820px;
      }
    `;
  }
}

if (!customElements.get('skipper-media-uploader')) {
  customElements.define('skipper-media-uploader', SkipperMediaUploader);
}
})();
